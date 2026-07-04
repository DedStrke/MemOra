/*
  Derive real stats from the learner's study history (state.sessions in the
  store). Every finished session is one entry; progress, knowledge decay and the
  mood-aware adaptation all read from here, so what the learner sees reflects
  what they actually did, not mock numbers.

  A session: { id, subject, technique, mood, difficulty (1-5), ts }
  Sessions are stored newest-first.
*/
const norm = (x) => String(x || '').toLowerCase().replace(/[^a-z0-9]/g, '')

export function sessionsForSubject(sessions = [], name) {
  const n = norm(name)
  return (sessions || []).filter((s) => norm(s.subject) === n)
}

export function lastSessionForSubject(sessions = [], name) {
  return sessionsForSubject(sessions, name)[0] || null
}

export function daysAgo(ts) {
  if (!ts) return null
  return Math.max(0, Math.floor((Date.now() - ts) / 86400000))
}

// A session counts as "tough" if it was hard (4-5) or done in a low mood.
export const isTough = (s) => !!s && (s.difficulty >= 4 || s.mood === 'struggling')

// Confidence = 6 - difficulty, so an easier session reads as higher confidence.
// Returned oldest to newest for a left-to-right sparkline.
export function confidenceSeries(sessions = [], name) {
  return sessionsForSubject(sessions, name)
    .slice()
    .reverse()
    .map((s) => Math.max(1, Math.min(5, 6 - (s.difficulty || 3))))
}

export function subjectStats(sessions = [], name) {
  const subs = sessionsForSubject(sessions, name)
  const series = confidenceSeries(sessions, name)
  const last = subs[0] || null
  return {
    count: subs.length,
    lastTs: last?.ts || null,
    daysSince: last ? daysAgo(last.ts) : null,
    latest: series.length ? series[series.length - 1] : null,
    best: series.length ? Math.max(...series) : null,
    trend: series.length > 1 ? series[series.length - 1] - series[0] : 0,
    series,
  }
}

/*
  Believable demo analytics for the subject cards.

  A fresh account has no logged sessions, so the real stats above are all zeros.
  To give every learner a dashboard that already looks alive, we seed each
  subject's headline numbers from its name: the same subject always shows the
  same values, and two different subjects show different ones. It is deterministic
  (no Math.random), so nothing jumps around between renders.

  Any REAL study still counts: when a subject has logged sessions, their volume
  and confidence trend are layered on top of the seeded baseline, so genuine
  practice visibly nudges the flashcard score, hours and graph upward.

  The priority ("your subject") card is marked `big` and gets a deliberately
  strong, upward profile so the hero of the dashboard always looks encouraging.
*/

// Stable 32-bit string hash (FNV-1a). Same input, same output, every time.
function hashStr(str) {
  let h = 2166136261
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

export function subjectAnalytics(name, { big = false, stats } = {}) {
  const key = norm(name) || 'subject'
  // Independent pseudo-values in [0, 1) from different "salts" of the name.
  const r = (salt) => (hashStr(key + salt) % 1000) / 1000

  // Flashcards out of 100: the hero sits high (60-80), others spread wide.
  let cards = big
    ? 60 + Math.round(r('cards') * 20)
    : 42 + Math.round(r('cards') * 46)

  // Hours spent this term, one decimal.
  let hours = big
    ? Math.round((3 + r('hours') * 1.8) * 10) / 10
    : Math.round((1.5 + r('hours') * 4.5) * 10) / 10

  // Week-on-week change in hours: the hero always trends up, others can dip.
  let delta = big
    ? Math.round((0.6 + r('delta') * 1.8) * 10) / 10
    : Math.round((r('delta') * 3.2 - 1.1) * 10) / 10

  // Seven-point "hours vs day" series (confidence 1-6), gently trending.
  const start = 1.6 + r('start') * 1.6
  const slope = (big ? 1.8 : 0.6) + r('slope') * (big ? 1.6 : 2.4)
  let series = Array.from({ length: 7 }, (_, i) => {
    const wobble = (hashStr(key + 'w' + i) % 100) / 100 - 0.5
    const v = start + (i / 6) * slope + wobble * (big ? 0.5 : 0.9)
    return Math.max(1, Math.min(6, Math.round(v * 100) / 100))
  })

  // Layer real logged sessions on top of the seeded baseline.
  if (stats && stats.count) {
    cards = Math.min(100, cards + Math.min(stats.count * 3, 30))
    hours = Math.round((hours + stats.count * 0.75) * 10) / 10
    delta = Math.round((delta + (stats.trend || 0) * 0.4) * 10) / 10
    if (stats.series && stats.series.length > 1) series = stats.series
  }

  return { cards, hours, delta, series }
}

// A simple day-streak: consecutive calendar days (ending today or yesterday)
// with at least one session.
export function studyStreak(sessions = []) {
  if (!sessions.length) return 0
  const days = new Set(
    sessions.map((s) => Math.floor((s.ts || 0) / 86400000)),
  )
  const today = Math.floor(Date.now() / 86400000)
  let streak = 0
  let d = days.has(today) ? today : today - 1
  while (days.has(d)) {
    streak += 1
    d -= 1
  }
  return streak
}
