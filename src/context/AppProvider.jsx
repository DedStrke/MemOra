import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import * as auth from '@/lib/auth'
import { normalizeAttempt } from '@/lib/attempts'
import { PRIORITISED_COURSES, ADVANCED_YEAR_GROUPS } from '@/constants/content'
import { claimDailyReward } from '@/lib/daily'
import { getBlob, deleteBlob } from '@/lib/blobStore'

// A profile picture or banner that is a GIF lives in IndexedDB, not in
// the JSON blob below - state.profile.avatar/banner then holds the
// marker string `idb:<key>` instead of the image itself (see
// lib/image.js). This turns that marker into a real, viewable object
// URL, or passes anything else (a plain data URL, or null) straight
// through unchanged. `setUrl` is called with `null` while a blob loads
// or if it turns out to be missing.
//
// Resolved URLs are cached for the life of the page, and the two the
// profile needs are requested the moment saved state is read (see
// load()), before React has mounted anything - so the picture is
// normally ready by the first paint instead of appearing a beat after
// the initial did. An object URL is only revoked when its image is
// replaced or removed (forgetImage), never on unmount: the same GIF is
// shown by the banner, the friend card and every leaderboard row, and
// re-reading a multi-megabyte blob for each of them is what made a
// changed picture take its time to show up.
const resolvedImages = new Map() // marker -> object URL (or null once known missing)
const pendingImages = new Map() // marker -> Promise<object URL | null>

function resolveImage(marker) {
  if (resolvedImages.has(marker)) return Promise.resolve(resolvedImages.get(marker))
  if (!pendingImages.has(marker)) {
    pendingImages.set(
      marker,
      getBlob(marker.slice(4))
        .then((blob) => (blob ? URL.createObjectURL(blob) : null))
        .catch(() => null)
        .then((url) => {
          resolvedImages.set(marker, url)
          pendingImages.delete(marker)
          return url
        }),
    )
  }
  return pendingImages.get(marker)
}

function forgetImage(marker) {
  const url = resolvedImages.get(marker)
  if (url) URL.revokeObjectURL(url)
  resolvedImages.delete(marker)
}

const isBlobMarker = (v) => typeof v === 'string' && v.startsWith('idb:')

function useResolvedImage(value, setUrl) {
  useEffect(() => {
    let cancelled = false
    if (isBlobMarker(value)) {
      if (resolvedImages.has(value)) {
        setUrl(resolvedImages.get(value))
      } else {
        setUrl(null)
        resolveImage(value).then((url) => !cancelled && setUrl(url))
      }
    } else {
      setUrl(value || null)
    }
    return () => {
      cancelled = true
    }
  }, [value, setUrl])
}

/*
  App store. This is a personal, single-user revision tool: everything lives in
  localStorage on this device, no account and no backend. `user` is always
  present (never null) so pages never need to guard against a signed-out state.
*/
export const THEMES = ['light', 'dark', 'cream', 'high-contrast']
export const THEME_META = {
  light: { label: 'Light', icon: 'sun' },
  dark: { label: 'Dark', icon: 'moon' },
  cream: { label: 'Cream', icon: 'book' },
  'high-contrast': { label: 'High contrast', icon: 'contrast' },
}

// Accent colour, independent of light/dark - see the `[data-accent=...]`
// blocks in index.css for the actual per-theme hex values. Ignored under
// high-contrast, which always stays on its fixed, WCAG-driven yellow.
export const ACCENTS = [
  'blue',
  'sky',
  'teal',
  'green',
  'lime',
  'amber',
  'orange',
  'red',
  'rose',
  'pink',
  'purple',
  'indigo',
  'graphite',
]
export const ACCENT_META = {
  blue: { label: 'Blue', swatch: '#2563eb' },
  sky: { label: 'Sky', swatch: '#0284c7' },
  teal: { label: 'Teal', swatch: '#0d9488' },
  green: { label: 'Green', swatch: '#16a34a' },
  lime: { label: 'Lime', swatch: '#65a30d' },
  amber: { label: 'Amber', swatch: '#d97706' },
  orange: { label: 'Orange', swatch: '#ea580c' },
  red: { label: 'Red', swatch: '#dc2626' },
  rose: { label: 'Rose', swatch: '#e11d48' },
  pink: { label: 'Pink', swatch: '#db2777' },
  purple: { label: 'Purple', swatch: '#7c3aed' },
  indigo: { label: 'Indigo', swatch: '#4f46e5' },
  graphite: { label: 'Graphite', swatch: '#334155' },
}

const A11Y_DEFAULT = { font: 'default', spacing: 'normal', letter: 'normal', textScale: 1, focus: false }

/*
  `name` ships as the placeholder 'there' (it was written for a "Hi there"
  line that no longer exists). Left alone it masqueraded as a real name
  everywhere identity is shown: the dashboard greeted "Good afternoon,
  there" and the community composer said "Posting as there".

  realNameOf   -> the name the person actually set, or null.
  authorNameOf -> what to show where a name is structurally required (post
                  bylines, the composer, rate-limit matching): 'You' on this
                  single-device board, which is honest and readable.
*/
const NAME_PLACEHOLDER = 'there'
const realNameOf = (profile) => {
  const n = (profile?.displayName || profile?.name || '').trim()
  return !n || n.toLowerCase() === NAME_PLACEHOLDER ? null : n
}
const authorNameOf = (profile) => realNameOf(profile) || 'You'

const DEFAULT_PROFILE = {
  name: 'there',
  yearGroup: 'Year 13',
  sessionLengthMinutes: 25,
  bio: '',
  avatar: null,
  // How the picture and the banner sit in their frames - { x, y, zoom }
  // (lib/imagePos.js), null for the default centred fit.
  avatarPos: null,
  bannerPos: null,
  courseType: 'A-level',
  courseName: '',
  subjects: [
    { id: 'maths', name: 'Maths', spec: 'Edexcel', priority: false },
    { id: 'economics', name: 'Economics', spec: 'Edexcel', priority: false },
    { id: 'computer-science', name: 'Computer Science', spec: 'OCR', priority: true },
  ],
  // Community identity (§8.2) - deliberately separate from `name`/`avatar`
  // above: those are personal/private, this is what shows on a public-
  // shaped post. displayName falls back to `name` until set explicitly, so
  // existing users aren't suddenly anonymous.
  displayName: null,
  avatarStyle: 'initials',
  avatarBg: 'indigo',
  avatarSeed: null,
  // Study buddy chosen at sign-up - { kind: 'builtin', id } or
  // { kind: 'custom', dataUrl, name }. See constants/mascots.jsx.
  mascot: { kind: 'builtin', id: 'pochita' },
  // Handle shown on the friends page and carried in your friend code -
  // lowercase letters, digits, dots and underscores, 3-20 characters.
  username: null,
  // Your banner image - null, a small data URL, or an `idb:banner-<id>` marker for a
  // GIF (see lib/image.js and lib/blobStore.js). No custom image yet
  // shows a plain brand-coloured gradient (Banner.jsx / .profile-banner-default).
  banner: null,
}

const STORAGE_KEY = 'memora:v1'
// Pre-restructure key CountdownCard used to own directly; migrated into
// central state below so Settings and the dashboard read one shared list
// instead of each keeping their own copy.
const LEGACY_EXAMS_KEY = 'memora:exams'
const DEFAULTS = {
  theme: 'light',
  accent: 'blue',
  a11y: A11Y_DEFAULT,
  recentTopic: null,
  decks: [],
  sessions: [],
  attempts: [],
  posts: [],
  replies: [],
  reports: [],
  moderationLog: [],
  blockedNames: [],
  helpfulGiven: [], // targetIds this device has already marked helpful
  communityGuidelinesAgreedAt: null,
  examDates: [],
  subjectRequests: [],
  // Essay-plan drafts keyed by question id (Economics essay bank). Each is
  // { unpack, diagram, kaa1, ..., updatedAt } - only the steps that
  // question's template actually shows are ever written, so the shape
  // varies per entry. Never marked or scored; it's the student's own plan.
  essayPlanDrafts: {},
  // Friends added by friend code, each a snapshot { id, username, name,
  // mascot, banner, xp, streak, weekMinutes, updatedAt }. There is no
  // server, so a friend's card is as fresh as the last code they sent.
  friends: [],
  // Daily reward run - see lib/daily.js.
  daily: { lastClaim: null, day: 0, bonusXp: 0, claims: 0 },
  // Highest level the level-up screen has shown. null until first seen,
  // so an existing account is not congratulated for levels it already had.
  lastLevelSeen: null,
  // The dashboard banner offers "Set up profile" until this is true - set
  // when the profile section is opened or a username is chosen.
  profileSetupDone: false,
  // One-time flag: set true only when the yearGroup migration below actually
  // changes something, so a returning user sees the "we changed this"
  // banner exactly once and it never comes back after they dismiss it.
  yearGroupMigrationNotice: false,
  profile: DEFAULT_PROFILE,
}

/*
  First visit follows the OS setting, but falls back to dark rather than
  light: most people browsing a study tool at night prefer it, and dark is
  the mode this design was tuned against. An explicit choice always wins -
  it's persisted and read back in load().
*/
function systemTheme() {
  try {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULTS, theme: systemTheme() }
    const saved = JSON.parse(raw)
    // Start fetching the stored picture and banner now, in parallel with
    // everything else the first render needs - see useResolvedImage.
    for (const marker of [saved.profile?.avatar, saved.profile?.banner]) {
      if (isBlobMarker(marker)) resolveImage(marker)
    }
    const merged = {
      ...DEFAULTS,
      ...saved,
      a11y: { ...A11Y_DEFAULT, ...(saved.a11y || {}) },
      profile: {
        ...DEFAULT_PROFILE,
        ...(saved.profile || {}),
        // Migration: the first four buddies (ember/nova/pip/mochi) were
        // replaced by the three current ones. Map, do not drop.
        mascot: (() => {
          const m = saved.profile?.mascot
          if (!m || m.kind !== 'builtin') return m || DEFAULT_PROFILE.mascot
          const map = { ember: 'pochita', nova: 'chopper', pip: 'kon', mochi: 'chopper' }
          return map[m.id] ? { kind: 'builtin', id: map[m.id] } : m
        })(),
        // Migration: banners used to be one of a fixed set of preset ids
        // (aurora, sunset, ...); those are not image sources any more, so
        // an old preset name just falls back to the default gradient.
        banner: (() => {
          const b = saved.profile?.banner
          const OLD_PRESETS = new Set([
            'aurora', 'sunset', 'ocean', 'meadow', 'ember', 'sakura', 'midnight', 'seven', 'inferno', 'gold',
          ])
          return typeof b === 'string' && OLD_PRESETS.has(b) ? null : (b ?? null)
        })(),
      },
      daily: { ...DEFAULTS.daily, ...(saved.daily || {}) },
      // Anyone who already set a username or photo has set up their profile.
      profileSetupDone: Boolean(saved.profileSetupDone || saved.profile?.username || saved.profile?.avatar),
      // Migration: upgrade every attempt already on this device (old shape -
      // just {id, ts, subject, topic, technique, question, correct,
      // dontKnow}) to the full events-table shape. Additive only - every
      // field normalizeAttempt doesn't recognise is kept via the spread, and
      // `id` is never touched, so nothing existing pages already read
      // (.correct, .dontKnow, .topic, .subject, .technique, .question) can
      // break. Runs once per load, not just once ever, which is deliberately
      // cheap and idempotent rather than versioned - there's nothing to gate.
      attempts: (saved.attempts || []).map((a) => ({ ...a, ...normalizeAttempt(a) })),
      // Migration: exam dates used to live only in CountdownCard's own
      // 'memora:exams' key, free-text name only. Bring them into central
      // state once, tagging each with an empty subject/paperLabel so
      // existing dates keep displaying while gaining the new shape. Only
      // runs the first time (saved.examDates absent) - after that, central
      // state is the source of truth and the legacy key is left alone
      // (not deleted, in case an older build reads it back - see below).
      // Migration: exam dates gained a `type` (DA / IA / mock / final) -
      // see constants/assessments.js. Anything saved before that was a
      // real exam, so it becomes 'final' rather than being guessed at.
      examDates: (
        saved.examDates ||
        (() => {
          try {
            const legacy = JSON.parse(localStorage.getItem(LEGACY_EXAMS_KEY) || '[]')
            return Array.isArray(legacy)
              ? legacy
                  .filter((e) => e && e.date)
                  .map((e) => ({
                    id: e.id || 'exam' + Math.random().toString(36).slice(2),
                    subject: e.subject || null,
                    paperLabel: e.name || 'Exam',
                    date: e.date,
                  }))
              : []
          } catch {
            return []
          }
        })()
      ).map((e) => (e && !e.type ? { ...e, type: 'final' } : e)),
      // Migration: posts used to be just {id, ts, text}. Upgrade to the
      // threaded shape (§8.1) - old text becomes the body of a 'tip' post,
      // visible, with no replies yet. Additive/idempotent like the others.
      posts: (saved.posts || []).map((p) => ({
        kind: 'tip',
        subject: null,
        topic: null,
        body: p.text ?? p.body ?? '',
        status: 'visible',
        helpfulCount: 0,
        answeredReplyId: null,
        ...p,
      })),
    }
    if (!THEMES.includes(merged.theme)) merged.theme = systemTheme()
    if (!ACCENTS.includes(merged.accent)) merged.accent = DEFAULTS.accent

    // Migration: year group narrows to Year 12 / Year 13 for the two-year
    // advanced course types (§4). A returning user sitting on a GCSE-era
    // Year 7-11 (or 'Other') value here maps to Year 12, silently corrected
    // in memory - the one-time banner (shown from this flag, dismissed via
    // dismissYearGroupMigrationNotice) is the "silently" part's counterpart:
    // never change something a student would notice without saying so.
    if (
      PRIORITISED_COURSES.includes(merged.profile.courseType) &&
      !ADVANCED_YEAR_GROUPS.includes(merged.profile.yearGroup)
    ) {
      merged.profile = { ...merged.profile, yearGroup: 'Year 12' }
      merged.yearGroupMigrationNotice = true
    }

    return merged
  } catch {
    return { ...DEFAULTS, theme: systemTheme() }
  }
}

const AppContext = createContext(null)

export default function AppProvider({ children }) {
  const [state, setState] = useState(load)
  const [account, setAccount] = useState(auth.currentAccount)
  // Transient confirmation pill (see ui/Toast.jsx). Deliberately NOT part of
  // `state` - it must never be persisted or restored on reload.
  const [toast, setToast] = useState(null)

  // The profile picture and banner, resolved to something actually
  // viewable - see useResolvedImage above. Also not part of `state`: an
  // object URL is only ever valid for this page load, so it is derived
  // fresh every time rather than persisted. Seeded from the cache so a
  // picture that finished loading before mount is there on first paint.
  const [resolvedAvatar, setResolvedAvatar] = useState(() =>
    isBlobMarker(state.profile.avatar) ? resolvedImages.get(state.profile.avatar) || null : state.profile.avatar || null,
  )
  const [resolvedBanner, setResolvedBanner] = useState(() =>
    isBlobMarker(state.profile.banner) ? resolvedImages.get(state.profile.banner) || null : state.profile.banner || null,
  )
  useResolvedImage(state.profile.avatar, setResolvedAvatar)
  useResolvedImage(state.profile.banner, setResolvedBanner)

  const showToast = (message) => {
    const id = Date.now()
    setToast({ id, message })
    setTimeout(() => setToast((t) => (t?.id === id ? null : t)), 2600)
  }

  // Accepts a plain patch object, or an updater `(state) => patch` when the
  // patch needs to read current state - always the live state React is
  // batching to, never a value captured back when `value` was last built.
  // Without this, calling a setter that reads `state.X` several times
  // synchronously (e.g. logging every question in a mock exam in one
  // forEach) silently drops all but the last call: each call computes its
  // patch from the same stale `state`, so React's batched updates just
  // overwrite each other instead of building on one another.
  const patch = (updater) => {
    let outOfSpace = false
    setState((s) => {
      const p = typeof updater === 'function' ? updater(s) : updater
      const next = { ...s, ...p }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        // Quota exceeded (or storage unavailable in private mode). Keep the
        // PREVIOUS state rather than the new one - applying `next` here
        // would show the change on screen while silently failing to save
        // it, so it would quietly vanish on the next reload with no
        // explanation. showToast is deferred to outside this updater; it
        // touches a different piece of state and calling it mid-update
        // is asking for trouble.
        outOfSpace = true
        return s
      }
      return next
    })
    if (outOfSpace) {
      setTimeout(
        () => showToast("That didn't fit in this browser's storage - try a smaller picture, or remove a friend or two."),
        0,
      )
    }
  }

  // Reflect theme + reading prefs onto <html> so index.css restyles everything.
  useMemo(() => {
    const el = document.documentElement
    el.setAttribute('data-theme', state.theme)
    el.setAttribute('data-accent', state.accent || 'blue')
    const a = state.a11y || A11Y_DEFAULT
    el.setAttribute('data-font', a.font || 'default')
    el.setAttribute('data-spacing', a.spacing || 'normal')
    el.setAttribute('data-letter', a.letter || 'normal')
    el.setAttribute('data-focus', a.focus ? 'true' : 'false')
    el.style.setProperty('--text-scale', String(a.textScale || 1))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.theme, state.accent, state.a11y])

  const value = useMemo(
    () => ({
      // ---- state ----
      theme: state.theme,
      a11y: state.a11y,
      recentTopic: state.recentTopic,
      decks: state.decks,
      sessions: state.sessions,
      attempts: state.attempts,
      posts: state.posts,
      replies: state.replies,
      reports: state.reports,
      moderationLog: state.moderationLog,
      blockedNames: state.blockedNames,
      helpfulGiven: state.helpfulGiven,
      communityGuidelinesAgreedAt: state.communityGuidelinesAgreedAt,
      examDates: state.examDates,
      subjectRequests: state.subjectRequests,
      essayPlanDrafts: state.essayPlanDrafts,
      friends: state.friends,
      daily: state.daily,
      lastLevelSeen: state.lastLevelSeen,
      profileSetupDone: state.profileSetupDone,
      yearGroupMigrationNotice: state.yearGroupMigrationNotice,
      // avatar/banner are swapped for their resolved, actually-viewable
      // form (see useResolvedImage above) - everything else keeps reading
      // user.avatar/user.banner exactly as before and never has to know
      // that either one might really be a GIF sitting in IndexedDB.
      user: { ...state.profile, avatar: resolvedAvatar, banner: resolvedBanner },

      // ---- transient UI ----
      toast,
      showToast,

      // ---- account (device-local, see lib/auth.js) ----
      account,
      signIn: async (creds) => {
        const next = await auth.signIn(creds)
        setAccount(next)
        patch((s) => ({ profile: { ...s.profile, name: next.name } }))
        return next
      },
      signUp: async (creds) => {
        const next = await auth.signUp(creds)
        setAccount(next)
        patch((s) => ({ profile: { ...s.profile, name: next.name } }))
        return next
      },
      signOut: () => {
        auth.signOut()
        setAccount(null)
      },

      // ---- theme + reading prefs ----
      setTheme: (theme) => patch({ theme }),
      cycleTheme: () => patch((s) => ({ theme: THEMES[(THEMES.indexOf(s.theme) + 1) % THEMES.length] })),
      accent: state.accent,
      setAccent: (accent) => patch({ accent }),
      setA11y: (p) => patch((s) => ({ a11y: { ...s.a11y, ...p } })),

      // ---- profile ----
      setName: (name) => patch((s) => ({ profile: { ...s.profile, name } })),
      setBio: (bio) => patch((s) => ({ profile: { ...s.profile, bio } })),
      setYearGroup: (yearGroup) => patch((s) => ({ profile: { ...s.profile, yearGroup } })),
      // Drops the old GIF from IndexedDB when it's being replaced (every
      // upload gets its own key - lib/image.js pickImage - so a GIF
      // swapped for another GIF is a real change, not the same marker
      // twice) or removed outright - otherwise it just sits there
      // orphaned, unused disk space nobody asked for.
      setAvatar: (avatar, pos = null) =>
        patch((s) => {
          const old = s.profile.avatar
          if (isBlobMarker(old) && old !== avatar) {
            forgetImage(old)
            deleteBlob(old.slice(4)).catch(() => {})
          }
          return { profile: { ...s.profile, avatar, avatarPos: avatar ? pos : null } }
        }),
      setAvatarPos: (avatarPos) => patch((s) => ({ profile: { ...s.profile, avatarPos } })),
      setSubjects: (subjects) => patch((s) => ({ profile: { ...s.profile, subjects } })),
      setSessionLength: (minutes) =>
        patch((s) => ({ profile: { ...s.profile, sessionLengthMinutes: minutes } })),
      dismissYearGroupMigrationNotice: () => patch({ yearGroupMigrationNotice: false }),

      // ---- misc ----
      setRecentTopic: (recentTopic) => patch({ recentTopic }),

      // Curated subject picker (§4): tapping a "coming soon" subject or
      // submitting a "not listed" one never creates a course with nothing
      // behind it - it just logs interest here. This table IS the roadmap.
      requestSubject: ({ name, board }) =>
        patch((s) => ({
          subjectRequests: [
            {
              id: 'req' + Date.now() + Math.random().toString(36).slice(2, 6),
              ts: Date.now(),
              name,
              board: board || null,
            },
            ...s.subjectRequests,
          ].slice(0, 200),
        })),

      // ---- exam dates (§4/§9's exam_dates, one row per subject+paper) ----
      // Upserts on (subject, paperLabel) - adding a date for a paper that
      // already has one replaces it rather than creating a duplicate, same
      // intent as the UNIQUE(user_id, subject_id, paper_label) constraint.
      addExamDate: ({ subject, paperLabel, date, type = 'final' }) =>
        patch((s) => {
          const withoutMatch = s.examDates.filter(
            (e) => !(e.subject === (subject || null) && e.paperLabel === paperLabel && (e.type || 'final') === type),
          )
          return {
            examDates: [
              {
                id: 'exam' + Date.now() + Math.random().toString(36).slice(2, 6),
                subject: subject || null,
                paperLabel: paperLabel || 'Exam',
                date,
                type,
              },
              ...withoutMatch,
            ],
          }
        }),
      // Bulk load from the school calendar (constants/assessments.js) -
      // same de-duplication as addExamDate, one write.
      importAssessments: (list) =>
        patch((s) => {
          const key = (e) => `${e.subject || ''}|${e.paperLabel}|${e.type || 'final'}`
          const incoming = new Set(list.map(key))
          const kept = s.examDates.filter((e) => !incoming.has(key(e)))
          return {
            examDates: [
              ...list.map((e, i) => ({
                id: 'exam' + Date.now() + i + Math.random().toString(36).slice(2, 5),
                subject: e.subject || null,
                paperLabel: e.paperLabel || 'Exam',
                date: e.date,
                type: e.type || 'final',
              })),
              ...kept,
            ],
          }
        }),
      removeExamDate: (id) => patch((s) => ({ examDates: s.examDates.filter((e) => e.id !== id) })),

      // Record a finished study session (progress reads this). Returns the
      // generated id so a caller logging several attempts against the same
      // session (a mock exam, one attempt per question) can stamp them all
      // with the same sessionId - see MockExam.jsx.
      logSession: (session) => {
        const id = 'ses' + Date.now() + Math.random().toString(36).slice(2, 6)
        patch((s) => ({
          sessions: [{ id, ts: Date.now(), ...session }, ...s.sessions].slice(0, 200),
        }))
        return id
      },
      // A session is logged the moment it is finished (so the streak and the
      // minutes count it) and rated afterwards, if the student bothers to.
      // Before this, closing the page instead of rating lost the session,
      // which is why streaks kept "not working".
      rateSession: (id, difficulty) =>
        patch((s) => ({ sessions: s.sessions.map((x) => (x.id === id ? { ...x, difficulty } : x)) })),

      // ---- mascot, banner, friends ----
      setMascot: (mascot) => patch((s) => ({ profile: { ...s.profile, mascot } })),
      setUsername: (username) => patch((s) => ({ profile: { ...s.profile, username }, profileSetupDone: true })),
      markProfileSetup: () => patch({ profileSetupDone: true }),
      setBanner: (banner, pos = null) =>
        patch((s) => {
          const old = s.profile.banner
          if (isBlobMarker(old) && old !== banner) {
            forgetImage(old)
            deleteBlob(old.slice(4)).catch(() => {})
          }
          return { profile: { ...s.profile, banner, bannerPos: banner ? pos : null } }
        }),
      setBannerPos: (bannerPos) => patch((s) => ({ profile: { ...s.profile, bannerPos } })),
      // A buddy's recommended theme + accent, applied together.
      applyLook: ({ theme, accent }) =>
        patch({ theme: THEMES.includes(theme) ? theme : 'dark', accent: ACCENTS.includes(accent) ? accent : 'blue' }),
      addFriend: (entry) =>
        patch((s) => ({
          friends: [entry, ...s.friends.filter((f) => f.id !== entry.id)].slice(0, 50),
        })),
      removeFriend: (id) => patch((s) => ({ friends: s.friends.filter((f) => f.id !== id) })),

      // ---- daily reward & levels ----
      // Returns { xp, day, completedWeek } or null if today is taken.
      claimDaily: () => {
        const result = claimDailyReward(state.daily)
        if (!result) return null
        patch({ daily: result.next })
        return result
      },
      markLevelSeen: (level) => patch({ lastLevelSeen: level }),

      // Record one answered mcq/exam/blurt/mock question - the events table
      // (see lib/attempts.js for the full schema and why it lives here
      // rather than in a real database). The Performance page still reads
      // .correct/.dontKnow/.topic/.subject/.technique/.question directly;
      // normalizeAttempt adds every new field alongside those without
      // touching them. Called many times in a row for a mock exam (once per
      // question), so this must read live state.
      logAttempt: (attempt) =>
        patch((s) => ({
          attempts: [
            {
              id: 'att' + Date.now() + Math.random().toString(36).slice(2, 6),
              ...normalizeAttempt(attempt),
            },
            ...s.attempts,
          ].slice(0, 1000),
        })),

      // ---- decks ----
      saveDeck: (deck) =>
        patch((s) => ({
          decks: s.decks.some((d) => d.id === deck.id)
            ? s.decks.map((d) => (d.id === deck.id ? deck : d))
            : [deck, ...s.decks],
        })),
      deleteDeck: (id) => patch((s) => ({ decks: s.decks.filter((d) => d.id !== id) })),

      // ---- essay plans ----
      // Merge, don't replace: the planner autosaves one field at a time and
      // must not wipe the others. A draft whose every field is blank is
      // removed outright so the bank's "planned" indicator stays honest.
      saveEssayPlanDraft: (questionId, fields) =>
        patch((s) => {
          const prev = s.essayPlanDrafts[questionId] || {}
          const next = { ...prev, ...fields, updatedAt: Date.now() }
          const hasText = Object.entries(next).some(
            ([k, v]) => k !== 'updatedAt' && typeof v === 'string' && v.trim(),
          )
          const drafts = { ...s.essayPlanDrafts }
          if (hasText) drafts[questionId] = next
          else delete drafts[questionId]
          return { essayPlanDrafts: drafts }
        }),
      clearEssayPlanDraft: (questionId) =>
        patch((s) => {
          const drafts = { ...s.essayPlanDrafts }
          delete drafts[questionId]
          return { essayPlanDrafts: drafts }
        }),

      // ---- community (§8) ----
      // Device-local: see the disclosure banner in Community.jsx. Threading
      // is one level, enforced here as well as in the UI - a reply always
      // attaches to the POST, never to another reply; "replying to a
      // reply" in the UI flattens to an @name-prefixed reply on the same
      // post rather than actually nesting (§8.4: "deeper attempts flatten
      // with an @name").
      //
      // Rate limits (5 posts / 20 replies per hour, §8.3) are checked
      // below, but this is a client-only build with no server behind it -
      // anyone can edit their own localStorage and bypass this in seconds.
      // It exists to stop accidental spam-clicking, not a determined bad
      // actor. A real limit needs a real backend, and must be
      // re-implemented there before this app ever has genuine multi-user
      // data flowing through it - the same is true of hideContent and
      // reportContent below: correct and complete as data model + UI, but
      // "moderation" on a single device just means moderating yourself.
      displayName: authorNameOf(state.profile),
      // `realName` is null when nothing but the placeholder is set, so a
      // greeting can drop the name entirely instead of saying "Good
      // afternoon, there".
      realName: realNameOf(state.profile),
      canPostToCommunity: (() => {
        const hourAgo = Date.now() - 3600000
        const name = authorNameOf(state.profile)
        return state.posts.filter((p) => p.authorName === name && p.ts > hourAgo).length < 5
      })(),
      canReplyToCommunity: (() => {
        const hourAgo = Date.now() - 3600000
        const name = authorNameOf(state.profile)
        return state.replies.filter((r) => r.authorName === name && r.ts > hourAgo).length < 20
      })(),

      agreeToGuidelines: () => patch({ communityGuidelinesAgreedAt: Date.now() }),
      setDisplayName: (displayName) => patch((s) => ({ profile: { ...s.profile, displayName } })),
      setAvatarPrefs: (p) => patch((s) => ({ profile: { ...s.profile, ...p } })),

      addPost: ({ kind, subject, topic, body }) =>
        patch((s) => ({
          posts: [
            {
              id: 'post' + Date.now() + Math.random().toString(36).slice(2, 6),
              ts: Date.now(),
              authorName: authorNameOf(s.profile),
              kind: kind || 'question',
              subject: subject || null,
              topic: topic || null,
              body,
              status: 'visible',
              helpfulCount: 0,
              answeredReplyId: null,
            },
            ...s.posts,
          ].slice(0, 300),
        })),
      deletePost: (id) => patch((s) => ({ posts: s.posts.filter((p) => p.id !== id) })),

      addReply: ({ postId, text }) =>
        patch((s) => ({
          replies: [
            {
              id: 'reply' + Date.now() + Math.random().toString(36).slice(2, 6),
              ts: Date.now(),
              postId,
              authorName: authorNameOf(s.profile),
              text,
              status: 'visible',
              helpfulCount: 0,
            },
            ...s.replies,
          ].slice(0, 1000),
        })),
      deleteReply: (id) => patch((s) => ({ replies: s.replies.filter((r) => r.id !== id) })),

      // Only the post's own author can mark an answer - on this device
      // that's always true (there's only ever one author), kept as an
      // explicit check so the rule is documented and already correct for
      // a real backend.
      markAnswer: (postId, replyId) =>
        patch((s) => ({
          posts: s.posts.map((p) =>
            p.id === postId && p.authorName === (authorNameOf(s.profile))
              ? { ...p, answeredReplyId: replyId }
              : p,
          ),
        })),

      toggleHelpful: (targetType, targetId) =>
        patch((s) => {
          const already = s.helpfulGiven.includes(targetId)
          const delta = already ? -1 : 1
          const helpfulGiven = already
            ? s.helpfulGiven.filter((id) => id !== targetId)
            : [...s.helpfulGiven, targetId]
          const bump = (list) =>
            list.map((x) => (x.id === targetId ? { ...x, helpfulCount: Math.max(0, x.helpfulCount + delta) } : x))
          return targetType === 'post'
            ? { helpfulGiven, posts: bump(s.posts) }
            : { helpfulGiven, replies: bump(s.replies) }
        }),

      reportContent: ({ targetType, targetId, reason }) =>
        patch((s) => ({
          reports: [
            {
              id: 'rep' + Date.now() + Math.random().toString(36).slice(2, 6),
              ts: Date.now(),
              targetType,
              targetId,
              reason,
              status: 'open',
            },
            ...s.reports,
          ],
        })),

      // Instant hide (§8.3): sets status so content disappears everywhere
      // at once, with an audit row - who, what, when.
      hideContent: ({ targetType, targetId }) =>
        patch((s) => {
          const entry = {
            id: 'mod' + Date.now() + Math.random().toString(36).slice(2, 6),
            ts: Date.now(),
            targetType,
            targetId,
            action: 'hide',
            by: authorNameOf(s.profile),
          }
          const hide = (list) => list.map((x) => (x.id === targetId ? { ...x, status: 'hidden' } : x))
          return targetType === 'post'
            ? { posts: hide(s.posts), moderationLog: [entry, ...s.moderationLog] }
            : { replies: hide(s.replies), moderationLog: [entry, ...s.moderationLog] }
        }),

      blockUserByName: (name) => patch((s) => ({ blockedNames: [...new Set([...s.blockedNames, name])] })),
      unblockUserByName: (name) => patch((s) => ({ blockedNames: s.blockedNames.filter((n) => n !== name) })),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state, account, toast, resolvedAvatar, resolvedBanner],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
