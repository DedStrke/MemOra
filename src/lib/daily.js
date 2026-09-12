/*
  The daily reward: one claim a day, XP that climbs over a seven-day run
  and a banner on day seven. Miss a day and the run starts again at day
  one - the same shape every game uses, because it is the shape that
  gets people to open the app tomorrow.

  State lives in AppProvider as
    daily: { lastClaim: 'YYYY-MM-DD' | null, day: 0..7, bonusXp, claims }
  and this module is the pure logic over it. Dates are LOCAL calendar days
  (the student's midnight, not UTC's), same as the streak.
*/

export const DAILY_REWARDS = [20, 30, 40, 60, 80, 100, 150]

export function dayKey(ts = Date.now()) {
  const d = new Date(ts)
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${m}-${day}`
}

const yesterdayKey = (ts) => dayKey(ts - 86400000)

/*
  What today's claim looks like:
    claimedToday - already taken
    day          - the run position (1..7) of today's claim, taken or not
    xp           - XP for that day
    streakKept   - whether the run continued from yesterday (false on a
                   reset, so the UI can say "run restarted")
*/
export function dailyStatus(daily, now = Date.now()) {
  const d = daily || { lastClaim: null, day: 0 }
  const today = dayKey(now)
  if (d.lastClaim === today) {
    const day = Math.min(7, Math.max(1, d.day || 1))
    return { claimedToday: true, day, xp: DAILY_REWARDS[day - 1], streakKept: true }
  }
  const continues = d.lastClaim === yesterdayKey(now)
  const day = continues ? (d.day % 7) + 1 : 1
  return { claimedToday: false, day, xp: DAILY_REWARDS[day - 1], streakKept: continues || !d.lastClaim }
}

/* The next state after claiming today, or null if already claimed. */
export function claimDailyReward(daily, now = Date.now()) {
  const status = dailyStatus(daily, now)
  if (status.claimedToday) return null
  const prev = daily || {}
  return {
    next: {
      lastClaim: dayKey(now),
      day: status.day,
      bonusXp: (prev.bonusXp || 0) + status.xp,
      claims: (prev.claims || 0) + 1,
    },
    xp: status.xp,
    day: status.day,
    completedWeek: status.day === 7,
  }
}
