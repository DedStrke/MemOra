import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  deleteUser,
} from 'firebase/auth'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore/lite'
import { auth, db, authErrorMessage } from '@/lib/firebase'

/*
  App store. Real backend:
  - Auth is Firebase Auth (email/password). `loggedIn` is the live session and
    Firebase persists it across reloads, so you stay logged in.
  - The profile, subjects and preferences are saved to Cloud Firestore at
    `users/{uid}`, readable/writable only by that signed-in user (see
    firestore.rules).
  - Theme + reading adaptations also live in localStorage so they apply instantly
    and work offline; they are mirrored into the user's doc so they follow the
    account across devices.
  - `decks`, `posts`, `exam`, `recentTopic` and `sessions` remain device-local
    for now.

  The useApp() surface is unchanged, so pages did not need rewriting; the async
  bits (signUp / login) return { ok, message } for real error handling.
*/
export const THEMES = ['light', 'dark', 'high-contrast']
export const THEME_META = {
  light: { label: 'Light', icon: 'sun' },
  dark: { label: 'Dark', icon: 'moon' },
  'high-contrast': { label: 'High contrast', icon: 'contrast' },
}

const A11Y_DEFAULT = { font: 'default', spacing: 'normal', letter: 'normal', textScale: 1, focus: false }

// Device-local slice.
const LOCAL_KEY = 'adapthub:v2'
const LOCAL_DEFAULTS = {
  theme: 'light',
  a11y: A11Y_DEFAULT,
  needs: [],
  exam: null,
  recentTopic: null,
  decks: [],
  posts: [],
  // Finished study sessions (drives progress + knowledge-decay views).
  sessions: [],
}

function systemTheme() {
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

function loadLocal() {
  try {
    const raw = localStorage.getItem(LOCAL_KEY)
    if (!raw) return { ...LOCAL_DEFAULTS, theme: systemTheme() }
    const saved = { ...LOCAL_DEFAULTS, ...JSON.parse(raw) }
    if (!THEMES.includes(saved.theme)) saved.theme = systemTheme()
    return saved
  } catch {
    return { ...LOCAL_DEFAULTS, theme: systemTheme() }
  }
}

// Turn stated access needs into reading settings ONLY. Access needs never change
// the colour theme: that stays entirely under the learner's control via the theme
// switcher, so picking a need can never override their light / dark / high-contrast
// choice.
function a11yFromNeeds(needs = []) {
  const a11y = { ...A11Y_DEFAULT }
  const has = (n) => needs.includes(n)
  if (has('dyslexia')) {
    a11y.font = 'dyslexic'
    a11y.spacing = 'relaxed'
    a11y.letter = 'wide'
  }
  // Low vision: larger text. (High contrast is offered as a theme, not forced.)
  if (has('low-vision')) {
    a11y.textScale = Math.max(a11y.textScale, 1.3)
  }
  // ADHD: a focus mode that strips ambient motion and decoration so one task
  // stands out, plus roomier line spacing to reduce visual crowding.
  if (has('adhd')) {
    a11y.focus = true
    if (a11y.spacing === 'normal') a11y.spacing = 'relaxed'
  }
  return a11y
}

function firstTopic(profile) {
  if (profile?.subjects?.length) return `${profile.subjects[0].name}: getting started`
  if (profile?.courseName) return `${profile.courseName}: getting started`
  return 'Getting started'
}

// Map a Firestore user document to the profile shape the UI reads.
function profileFromDoc(d) {
  return {
    name: d.displayName || '',
    email: d.email || null,
    yearGroup: d.yearGroup || '',
    goal: { choice: d.goalChoice || '', text: d.goalText || '' },
    courseType: d.courseType || '',
    courseName: d.courseName || '',
    subjects: Array.isArray(d.subjects) ? d.subjects : [],
  }
}

const AppContext = createContext(null)

export default function AppProvider({ children }) {
  const [local, setLocal] = useState(loadLocal)
  const [authUser, setAuthUser] = useState(null) // Firebase Auth user (the session)
  const [profile, setProfile] = useState(null) // profile doc from Firestore
  const [authReady, setAuthReady] = useState(false) // has the first auth check run?

  // Persist the device-local slice.
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(local))
    } catch {
      /* storage unavailable, non-fatal */
    }
  }, [local])

  // Reflect theme + reading prefs onto <html> so index.css restyles everything.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', local.theme)
  }, [local.theme])

  useEffect(() => {
    const el = document.documentElement
    const a = local.a11y || A11Y_DEFAULT
    el.setAttribute('data-font', a.font || 'default')
    el.setAttribute('data-spacing', a.spacing || 'normal')
    el.setAttribute('data-letter', a.letter || 'normal')
    el.setAttribute('data-focus', a.focus ? 'true' : 'false')
    el.style.setProperty('--text-scale', String(a.textScale || 1))
  }, [local.a11y])

  // Pull the signed-in user's profile + prefs from Firestore.
  const hydrate = useCallback(async (uid) => {
    try {
      // Time-boxed so a blocked/slow Firestore can never hang the auth check
      // (which gates the whole app behind the "Loading..." screen).
      const snap = await Promise.race([
        getDoc(doc(db, 'users', uid)),
        new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 8000)),
      ])
      if (snap.exists()) {
        const d = snap.data()
        setProfile(profileFromDoc(d))
        setLocal((s) => ({
          ...s,
          theme: THEMES.includes(d.theme) ? d.theme : s.theme,
          needs: Array.isArray(d.needs) ? d.needs : s.needs,
          a11y: {
            font: d.font || A11Y_DEFAULT.font,
            spacing: d.spacing || A11Y_DEFAULT.spacing,
            letter: d.letter || A11Y_DEFAULT.letter,
            textScale: d.textScale || A11Y_DEFAULT.textScale,
          },
        }))
      } else {
        setProfile(null)
      }
    } catch (err) {
      console.warn('[firestore] could not load profile:', err?.message || err)
      setProfile(null)
    }
  }, [])

  // Watch the Firebase Auth session.
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (fbUser) => {
      setAuthUser(fbUser)
      if (fbUser) await hydrate(fbUser.uid)
      else setProfile(null)
      setAuthReady(true)
    })
    return unsub
  }, [hydrate])

  const value = useMemo(() => {
    const patchLocal = (p) => setLocal((s) => ({ ...s, ...p }))

    // Best-effort mirror of a preference change to the user's Firestore doc.
    const savePref = (partial) => {
      const u = auth.currentUser
      if (!u) return
      const a = { ...(local.a11y || A11Y_DEFAULT), ...(partial.a11y || {}) }
      setDoc(
        doc(db, 'users', u.uid),
        {
          theme: partial.theme ?? local.theme,
          font: a.font,
          spacing: a.spacing,
          letter: a.letter,
          textScale: a.textScale,
          needs: partial.needs ?? local.needs,
          updatedAt: serverTimestamp(),
        },
        { merge: true },
      ).catch((e) => console.warn('[firestore] savePref failed:', e?.message || e))
    }

    // The profile the UI reads. Falls back to a safe skeleton if a session exists
    // but its profile doc has not loaded yet, so pages never crash on null.
    const derivedUser = profile
      ? profile
      : authUser
        ? {
            name: authUser.displayName || 'there',
            email: authUser.email || null,
            yearGroup: '',
            goal: { choice: '', text: '' },
            courseType: '',
            courseName: '',
            subjects: [],
          }
        : null

    return {
      // ---- state ----
      theme: local.theme,
      a11y: local.a11y,
      needs: local.needs,
      exam: local.exam,
      recentTopic: local.recentTopic,
      decks: local.decks,
      posts: local.posts,
      sessions: local.sessions,
      user: derivedUser,
      loggedIn: Boolean(authUser),
      onboarded: Boolean(profile),
      authReady,

      // ---- theme + reading prefs ----
      setTheme: (theme) => {
        patchLocal({ theme })
        savePref({ theme })
      },
      cycleTheme: () => {
        const theme = THEMES[(THEMES.indexOf(local.theme) + 1) % THEMES.length]
        patchLocal({ theme })
        savePref({ theme })
      },
      setA11y: (p) => {
        setLocal((s) => ({ ...s, a11y: { ...s.a11y, ...p } }))
        savePref({ a11y: p })
      },
      applyNeeds: (needs = []) => {
        // Reading adaptations only. The theme is intentionally left untouched, so
        // selecting or clearing an access need never overrides the learner's chosen
        // light / dark / high-contrast theme.
        const a11y = a11yFromNeeds(needs)
        setLocal((s) => ({ ...s, needs, a11y }))
        savePref({ needs, a11y })
      },

      // ---- auth ----
      signUp: async ({
        email,
        password,
        name,
        yearGroup,
        goal,
        courseType,
        courseName,
        subjects = [],
        needs = [],
      }) => {
        let cred
        try {
          cred = await createUserWithEmailAndPassword(auth, email, password)
        } catch (err) {
          // Only a Firebase Auth failure blocks sign up (email/password provider
          // not enabled, weak password, email already in use, and so on).
          return { ok: false, reason: err?.code, message: authErrorMessage(err?.code) }
        }

        // Apply reading adaptations on this device right away, so the account is
        // usable even if the cloud profile write does not go through. The theme is
        // left as-is; access needs never change it.
        const a11y = a11yFromNeeds(needs)
        setLocal((s) => ({
          ...s,
          needs,
          a11y,
          recentTopic: firstTopic({ subjects, courseName }),
        }))

        // Everything below is best-effort. An undeployed or rules-blocked
        // Firestore must never fail an account that Auth already created, nor
        // hang the UI, so each cloud call is time-boxed and errors are swallowed.
        const race = (p, ms = 8000) =>
          Promise.race([
            p,
            new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), ms)),
          ])
        try {
          if (name) await race(updateProfile(cred.user, { displayName: name }))
        } catch (e) {
          console.warn('[auth] display name not saved:', e?.message || e)
        }
        try {
          const cleanSubjects = subjects
            .filter((s) => s?.name)
            .map((s) => ({
              id: s.id || s.name,
              name: s.name,
              spec: s.spec || '',
              priority: !!s.priority,
            }))
          await race(
            setDoc(
              doc(db, 'users', cred.user.uid),
              {
                displayName: name || '',
                email: email || null,
                yearGroup: yearGroup || '',
                goalChoice: goal?.choice || '',
                goalText: goal?.text || '',
                courseType: courseType || '',
                courseName: courseName || '',
                subjects: cleanSubjects,
                theme: local.theme,
                font: a11y.font,
                spacing: a11y.spacing,
                letter: a11y.letter,
                textScale: a11y.textScale,
                needs,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
              },
              { merge: true },
            ),
          )
          await race(hydrate(cred.user.uid))
        } catch (e) {
          console.warn(
            '[firestore] profile not saved (backend not reachable or rules deny):',
            e?.message || e,
          )
        }
        return { ok: true }
      },
      login: async (email, password) => {
        try {
          await signInWithEmailAndPassword(auth, email, password)
          return { ok: true }
        } catch (err) {
          return { ok: false, reason: err?.code, message: authErrorMessage(err?.code) }
        }
      },
      logout: async () => {
        try {
          await signOut(auth)
        } catch (e) {
          console.warn('[auth] signOut failed:', e?.message || e)
        }
      },
      deleteAccount: async () => {
        try {
          if (auth.currentUser) await deleteUser(auth.currentUser)
        } catch (e) {
          console.warn('[auth] deleteAccount failed:', e?.message || e)
          return { ok: false, reason: e?.code, message: authErrorMessage(e?.code) }
        }
        return { ok: true }
      },

      // ---- profile-ish ----
      setExam: (exam) => patchLocal({ exam }),
      setRecentTopic: (recentTopic) => patchLocal({ recentTopic }),
      setSubjects: (subjects) => {
        setProfile((p) => (p ? { ...p, subjects } : p))
        const u = auth.currentUser
        if (u) {
          setDoc(
            doc(db, 'users', u.uid),
            { subjects, updatedAt: serverTimestamp() },
            { merge: true },
          ).catch((e) => console.warn('[firestore] setSubjects failed:', e?.message || e))
        }
      },

      // Record a finished study session (progress + knowledge-decay read this).
      logSession: (session) =>
        setLocal((s) => ({
          ...s,
          sessions: [{ id: 'ses' + Date.now(), ts: Date.now(), ...session }, ...s.sessions].slice(
            0,
            200,
          ),
        })),

      // ---- decks + posts (device-local for now) ----
      saveDeck: (deck) =>
        setLocal((s) => {
          const exists = s.decks.some((d) => d.id === deck.id)
          return {
            ...s,
            decks: exists
              ? s.decks.map((d) => (d.id === deck.id ? deck : d))
              : [deck, ...s.decks],
          }
        }),
      deleteDeck: (id) => setLocal((s) => ({ ...s, decks: s.decks.filter((d) => d.id !== id) })),
      addPost: (post) => setLocal((s) => ({ ...s, posts: [post, ...s.posts] })),
    }
  }, [local, authUser, profile, authReady, hydrate])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
