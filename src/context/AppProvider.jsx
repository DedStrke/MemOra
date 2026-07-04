import { createContext, useContext, useEffect, useMemo, useState } from 'react'

/*
  Single app store for the whole demo (mock/local state, no backend).

  Auth is mocked but behaves like the real thing:
  - `user` is the ACCOUNT (profile incl. email). It persists.
  - `loggedIn` is the SESSION. Sign out flips it off but keeps the account so
    you can log back in.

  useApp() -> { theme, user, loggedIn, exam, recentTopic, onboarded,
               setTheme, cycleTheme, signUp, login, logout, deleteAccount,
               setExam, setSubjects, setRecentTopic }
*/
const STORAGE_KEY = 'adapthub:v1'
export const THEMES = ['light', 'dark', 'high-contrast']
export const THEME_META = {
  light: { label: 'Light', icon: 'sun' },
  dark: { label: 'Dark', icon: 'moon' },
  'high-contrast': { label: 'High contrast', icon: 'contrast' },
}

// Reading/display adaptations applied to <html>. Kept separate from `theme`.
const A11Y_DEFAULT = {
  font: 'default', // default | dyslexic | hyperlegible
  spacing: 'normal', // normal | relaxed | loose  (line height)
  letter: 'normal', // normal | wide             (letter/word spacing)
  textScale: 1, // 1 | 1.15 | 1.3 | 1.5           (global zoom)
}

const DEFAULTS = {
  theme: 'light',
  user: null,
  loggedIn: false,
  exam: null,
  recentTopic: null,
  decks: [], // user-created flashcard decks
  posts: [], // user-created community posts
  needs: [], // stated access needs (dyslexia, low-vision, ...)
  a11y: A11Y_DEFAULT,
}

// Turn stated access needs into display settings. Returns the a11y settings and,
// where relevant, a theme to switch to. Everything degrades gracefully.
function a11yFromNeeds(needs = []) {
  const a11y = { ...A11Y_DEFAULT }
  let theme = null
  if (needs.includes('dyslexia')) {
    a11y.font = 'dyslexic'
    a11y.spacing = 'relaxed'
    a11y.letter = 'wide'
  }
  if (needs.includes('low-vision')) {
    a11y.textScale = Math.max(a11y.textScale, 1.3)
    theme = 'high-contrast'
  }
  return { a11y, theme }
}

function systemTheme() {
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  } catch {
    return 'light'
  }
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...DEFAULTS, theme: systemTheme() }
    const saved = { ...DEFAULTS, ...JSON.parse(raw) }
    if (!THEMES.includes(saved.theme)) saved.theme = systemTheme()
    return saved
  } catch {
    return { ...DEFAULTS, theme: systemTheme() }
  }
}

function firstTopic(profile) {
  if (profile?.subjects?.length) return `${profile.subjects[0].name}: getting started`
  if (profile?.courseName) return `${profile.courseName}: getting started`
  return 'Getting started'
}

const AppContext = createContext(null)

export default function AppProvider({ children }) {
  const [state, setState] = useState(load)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      /* storage unavailable, non-fatal */
    }
  }, [state])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.theme)
  }, [state.theme])

  // Apply reading adaptations to <html> so index.css restyles the whole app.
  useEffect(() => {
    const el = document.documentElement
    const a = state.a11y || A11Y_DEFAULT
    el.setAttribute('data-font', a.font || 'default')
    el.setAttribute('data-spacing', a.spacing || 'normal')
    el.setAttribute('data-letter', a.letter || 'normal')
    el.style.setProperty('--text-scale', String(a.textScale || 1))
  }, [state.a11y])

  const value = useMemo(() => {
    const patch = (p) => setState((s) => ({ ...s, ...p }))
    return {
      ...state,
      onboarded: Boolean(state.user),
      setTheme: (theme) => patch({ theme }),
      cycleTheme: () =>
        setState((s) => ({
          ...s,
          theme: THEMES[(THEMES.indexOf(s.theme) + 1) % THEMES.length],
        })),
      signUp: (profile) => {
        const needs = profile.needs || []
        const { a11y, theme } = a11yFromNeeds(needs)
        patch({
          user: profile,
          loggedIn: true,
          recentTopic: firstTopic(profile),
          needs,
          a11y,
          ...(theme ? { theme } : {}),
        })
      },
      // Mock login: the account's email logs you in (any password works).
      login: (email = '') => {
        const account = state.user
        if (!account) return { ok: false, reason: 'no-account' }
        if (
          account.email &&
          email.trim() &&
          email.trim().toLowerCase() !== account.email.toLowerCase()
        ) {
          return { ok: false, reason: 'wrong-email' }
        }
        patch({ loggedIn: true })
        return { ok: true }
      },
      logout: () => patch({ loggedIn: false }),
      deleteAccount: () => patch({ user: null, loggedIn: false, exam: null, recentTopic: null }),
      setExam: (exam) => patch({ exam }),
      setSubjects: (subjects) =>
        setState((s) => ({ ...s, user: { ...s.user, subjects } })),
      setRecentTopic: (recentTopic) => patch({ recentTopic }),
      // Adjust one display setting directly (used by the Profile controls).
      setA11y: (p) => setState((s) => ({ ...s, a11y: { ...s.a11y, ...p } })),
      // Store stated needs and apply the recommended settings live.
      applyNeeds: (needs = []) =>
        setState((s) => {
          const { a11y, theme } = a11yFromNeeds(needs)
          return { ...s, needs, a11y, ...(theme ? { theme } : {}) }
        }),
      saveDeck: (deck) =>
        setState((s) => {
          const exists = s.decks.some((d) => d.id === deck.id)
          return {
            ...s,
            decks: exists
              ? s.decks.map((d) => (d.id === deck.id ? deck : d))
              : [deck, ...s.decks],
          }
        }),
      deleteDeck: (id) =>
        setState((s) => ({ ...s, decks: s.decks.filter((d) => d.id !== id) })),
      addPost: (post) => setState((s) => ({ ...s, posts: [post, ...s.posts] })),
    }
  }, [state])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
