import { useMemo } from 'react'
import { useApp } from '@/context/AppProvider'
import { computeXp, levelFromXp } from '@/lib/xp'
import { studyStreak } from '@/lib/sessions'

/*
  Your own profile card, as one object - the same numbers the banner, the
  Friends page and Settings all show, computed once so no two of them can
  disagree. `id` is the account's email or a stable per-device id, and is
  what a friend code is keyed on.
*/
const DAY = 86400000

function deviceId(account) {
  try {
    let id = localStorage.getItem('memora:device-id')
    if (!id) {
      id = 'u' + Math.random().toString(36).slice(2, 10)
      localStorage.setItem('memora:device-id', id)
    }
    return account?.email || id
  } catch {
    return 'me'
  }
}

export default function useMe(now = Date.now()) {
  const { user, account, sessions, attempts, essayPlanDrafts, daily, realName } = useApp()
  return useMemo(() => {
    const xp = computeXp({ sessions, attempts, essayPlanDrafts, daily })
    const lvl = levelFromXp(xp)
    const streak = studyStreak(sessions, attempts)
    const weekMinutes = sessions
      .filter((s) => s.ts && now - s.ts < 7 * DAY)
      .reduce((sum, s) => sum + (s.minutes || 0), 0)
    const today = new Date(now).toDateString()
    const studiedToday =
      sessions.some((s) => s.ts && new Date(s.ts).toDateString() === today) ||
      attempts.some((a) => a.ts && new Date(a.ts).toDateString() === today)
    return {
      id: deviceId(account),
      username: user.username || null,
      name: user.displayName || realName || 'You',
      firstName: (realName || '').split(/\s+/)[0] || '',
      mascot: user.mascot,
      photo: user.avatar || null,
      photoPos: user.avatarPos || null,
      banner: user.banner || null,
      bannerPos: user.bannerPos || null,
      xp,
      level: lvl.level,
      levelInfo: lvl,
      streak,
      weekMinutes,
      studiedToday,
    }
  }, [user, account, sessions, attempts, essayPlanDrafts, daily, realName, now])
}
