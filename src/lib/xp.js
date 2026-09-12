/*
  Points, levels, titles and streak tiers - the numbers the dashboard
  banner, the level-up screen and the friends leaderboard run on.

  XP is earned only for work that is actually recorded, at rates a student
  can predict (XP_RULES below, shown verbatim on the level card): a minute
  studied is a point, a correct answer two, a finished session ten, an
  essay planned fifteen, plus the daily reward. Nothing here is a grade
  and none of it feeds readiness - it is the motivational layer only.

  Levels: level n starts at 90·(n-1)^1.55 + 60·(n-1) XP. The first few
  come in days (a 25-minute session is ~35 XP before answers, so level 2
  lands in the first week), level 10 takes about two months of steady
  revision and level 20 a full year. Every level has a title and a few
  carry an unlock (a profile banner) - see LEVEL_REWARDS.
*/

export const XP_RULES = [
  { id: 'minute', label: 'Minute studied', xp: 1 },
  { id: 'correct', label: 'Correct answer', xp: 2 },
  { id: 'session', label: 'Session finished', xp: 10 },
  { id: 'plan', label: 'Essay planned', xp: 15 },
  { id: 'daily', label: 'Daily reward', xp: '20–150' },
]

export function xpBreakdown({ sessions = [], attempts = [], essayPlanDrafts = {}, daily } = {}) {
  const minutes = sessions.reduce((s, x) => s + (x.minutes || 0), 0)
  const correct = attempts.filter((a) => a.correct).length
  const plans = Object.keys(essayPlanDrafts).length
  return [
    { id: 'minute', label: 'Minutes studied', count: minutes, xp: minutes },
    { id: 'correct', label: 'Correct answers', count: correct, xp: correct * 2 },
    { id: 'session', label: 'Sessions finished', count: sessions.length, xp: sessions.length * 10 },
    { id: 'plan', label: 'Essays planned', count: plans, xp: plans * 15 },
    { id: 'daily', label: 'Daily rewards', count: daily?.claims || 0, xp: daily?.bonusXp || 0 },
  ]
}

export const computeXp = (args) => xpBreakdown(args).reduce((s, r) => s + r.xp, 0)

export const xpForLevel = (level) =>
  level <= 1 ? 0 : Math.round(90 * Math.pow(level - 1, 1.55) + 60 * (level - 1))

export const LEVEL_TITLES = [
  { min: 30, title: 'Sensei' },
  { min: 25, title: 'A* Machine' },
  { min: 20, title: 'Legend' },
  { min: 16, title: 'Examiner' },
  { min: 12, title: 'Specialist' },
  { min: 8, title: 'Grinder' },
  { min: 5, title: 'Scholar' },
  { min: 3, title: 'Learner' },
  { min: 1, title: 'Fresher' },
]

export const levelTitle = (level) => LEVEL_TITLES.find((t) => level >= t.min)?.title || 'Fresher'

// Titles announced on the level-up screen. Banners used to unlock here
// too, back when they were a fixed set of presets; a banner is now a
// picture you upload yourself in Settings, the same as a profile photo,
// so there is nothing about it left to earn.
export const LEVEL_REWARDS = [
  { level: 3, kind: 'title', label: 'Title: Learner' },
  { level: 8, kind: 'title', label: 'Title: Grinder' },
  { level: 12, kind: 'title', label: 'Title: Specialist' },
  { level: 16, kind: 'title', label: 'Title: Examiner' },
  { level: 25, kind: 'title', label: 'Title: A* Machine' },
]

export const rewardsAtLevel = (level) => LEVEL_REWARDS.filter((r) => r.level === level)
export const nextReward = (level) => LEVEL_REWARDS.find((r) => r.level > level) || null

export function levelFromXp(xp) {
  let level = 1
  while (xp >= xpForLevel(level + 1)) level += 1
  const floor = xpForLevel(level)
  const next = xpForLevel(level + 1)
  return {
    level,
    floor,
    next,
    toNext: next - xp,
    title: levelTitle(level),
    progress: Math.max(0, Math.min(1, (xp - floor) / (next - floor))),
  }
}

/*
  Streak tiers, each with its own colour so a longer streak LOOKS
  different rather than just counting higher. Colours are fixed character
  colours, not theme tokens - a 30-day streak is the same ember red in
  every theme, like a badge.
*/
export const STREAK_TIERS = [
  { min: 30, name: 'Inferno', colour: '#ef4444', glow: 'rgba(239,68,68,0.45)' },
  { min: 14, name: 'Blaze', colour: '#f97316', glow: 'rgba(249,115,22,0.42)' },
  { min: 7, name: 'Flame', colour: '#f59e0b', glow: 'rgba(245,158,11,0.4)' },
  { min: 3, name: 'Spark', colour: '#22c55e', glow: 'rgba(34,197,94,0.35)' },
  { min: 1, name: 'Lit', colour: '#3b82f6', glow: 'rgba(59,130,246,0.35)' },
  { min: 0, name: 'Out', colour: '#8e9bb8', glow: 'transparent' },
]

export const streakTier = (streak) => STREAK_TIERS.find((t) => streak >= t.min)

export const nextStreakTier = (streak) =>
  [...STREAK_TIERS].reverse().find((t) => t.min > streak) || null
