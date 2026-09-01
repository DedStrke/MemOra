import { createContext, useContext, useMemo, useState } from 'react'
import * as auth from '@/lib/auth'

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
export const ACCENTS = ['blue', 'red', 'green', 'purple', 'orange', 'pink']
export const ACCENT_META = {
  blue: { label: 'Blue', swatch: '#2563eb' },
  red: { label: 'Red', swatch: '#dc2626' },
  green: { label: 'Green', swatch: '#16a34a' },
  purple: { label: 'Purple', swatch: '#7c3aed' },
  orange: { label: 'Orange', swatch: '#ea580c' },
  pink: { label: 'Pink', swatch: '#db2777' },
}

const A11Y_DEFAULT = { font: 'default', spacing: 'normal', letter: 'normal', textScale: 1, focus: false }

const DEFAULT_PROFILE = {
  name: 'there',
  yearGroup: 'Year 13',
  bio: '',
  avatar: null,
  courseType: 'A-level',
  courseName: '',
  subjects: [
    { id: 'maths', name: 'Maths', spec: 'Edexcel', priority: false },
    { id: 'economics', name: 'Economics', spec: 'Edexcel', priority: false },
    { id: 'computer-science', name: 'Computer Science', spec: 'OCR', priority: true },
  ],
}

const STORAGE_KEY = 'memora:v1'
const DEFAULTS = {
  theme: 'light',
  accent: 'blue',
  a11y: A11Y_DEFAULT,
  recentTopic: null,
  decks: [],
  sessions: [],
  attempts: [],
  posts: [],
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
    const merged = {
      ...DEFAULTS,
      ...saved,
      a11y: { ...A11Y_DEFAULT, ...(saved.a11y || {}) },
      profile: { ...DEFAULT_PROFILE, ...(saved.profile || {}) },
    }
    if (!THEMES.includes(merged.theme)) merged.theme = systemTheme()
    if (!ACCENTS.includes(merged.accent)) merged.accent = DEFAULTS.accent
    return merged
  } catch {
    return { ...DEFAULTS, theme: systemTheme() }
  }
}

const AppContext = createContext(null)

export default function AppProvider({ children }) {
  const [state, setState] = useState(load)
  const [account, setAccount] = useState(auth.currentAccount)

  const patch = (p) => {
    setState((s) => {
      const next = { ...s, ...p }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        /* storage unavailable, non-fatal */
      }
      return next
    })
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
      user: state.profile,

      // ---- account (device-local, see lib/auth.js) ----
      account,
      signIn: async (creds) => {
        const next = await auth.signIn(creds)
        setAccount(next)
        patch({ profile: { ...state.profile, name: next.name } })
        return next
      },
      signUp: async (creds) => {
        const next = await auth.signUp(creds)
        setAccount(next)
        patch({ profile: { ...state.profile, name: next.name } })
        return next
      },
      signOut: () => {
        auth.signOut()
        setAccount(null)
      },

      // ---- theme + reading prefs ----
      setTheme: (theme) => patch({ theme }),
      cycleTheme: () => patch({ theme: THEMES[(THEMES.indexOf(state.theme) + 1) % THEMES.length] }),
      accent: state.accent,
      setAccent: (accent) => patch({ accent }),
      setA11y: (p) => patch({ a11y: { ...state.a11y, ...p } }),

      // ---- profile ----
      setName: (name) => patch({ profile: { ...state.profile, name } }),
      setBio: (bio) => patch({ profile: { ...state.profile, bio } }),
      setAvatar: (avatar) => patch({ profile: { ...state.profile, avatar } }),
      setSubjects: (subjects) => patch({ profile: { ...state.profile, subjects } }),

      // ---- misc ----
      setRecentTopic: (recentTopic) => patch({ recentTopic }),

      // Record a finished study session (progress reads this).
      logSession: (session) =>
        patch({
          sessions: [{ id: 'ses' + Date.now(), ts: Date.now(), ...session }, ...state.sessions].slice(0, 200),
        }),

      // Record one answered mcq/exam question (subject, topic, technique,
      // question, correct, dontKnow). The Performance page reads this to show
      // exactly which questions you got wrong.
      logAttempt: (attempt) =>
        patch({
          attempts: [{ id: 'att' + Date.now() + Math.random().toString(36).slice(2, 6), ts: Date.now(), ...attempt }, ...state.attempts].slice(0, 1000),
        }),

      // ---- decks ----
      saveDeck: (deck) => {
        const exists = state.decks.some((d) => d.id === deck.id)
        patch({
          decks: exists ? state.decks.map((d) => (d.id === deck.id ? deck : d)) : [deck, ...state.decks],
        })
      },
      deleteDeck: (id) => patch({ decks: state.decks.filter((d) => d.id !== id) }),

      // ---- community (device-local only, see Community.jsx) ----
      addPost: (post) =>
        patch({
          posts: [{ id: 'post' + Date.now(), ts: Date.now(), ...post }, ...state.posts].slice(0, 300),
        }),
      deletePost: (id) => patch({ posts: state.posts.filter((p) => p.id !== id) }),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state, account],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
