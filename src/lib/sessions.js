/*
  Derive real stats from the learner's study history (state.sessions in the
  store). Every finished session is one entry, and every number shown on the
  dashboard is computed from real logged sessions - nothing here is seeded or
  guessed. A subject with zero sessions shows zero, honestly.

  A session: { id, subject, technique, difficulty (1-5), minutes, topic, ts }
  Sessions are stored newest-first.
*/
import { getPackByName } from '@/constants/library'

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

// A session counts as "tough" if it was rated hard (4-5).
export const isTough = (s) => !!s && s.difficulty >= 4

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
  Real analytics for the subject cards. Every number here comes from actual
  logged sessions - a subject with no sessions yet shows zero and an empty
  chart, honestly, rather than a plausible-looking seeded number.
*/
const DAY = 86400000

export function subjectMetrics(sessions = [], name) {
  const subs = sessionsForSubject(sessions, name)
  const minutesOf = (list) => list.reduce((sum, s) => sum + (s.minutes || 0), 0)

  const hours = Math.round((minutesOf(subs) / 60) * 10) / 10

  const now = Date.now()
  const thisWeek = subs.filter((s) => now - s.ts < 7 * DAY)
  const lastWeek = subs.filter((s) => now - s.ts >= 7 * DAY && now - s.ts < 14 * DAY)
  const delta = Math.round(((minutesOf(thisWeek) - minutesOf(lastWeek)) / 60) * 10) / 10

  // Real hours studied per day, oldest to newest, for the last 7 days.
  const series = Array.from({ length: 7 }, (_, i) => {
    const dayStart = Math.floor((now - (6 - i) * DAY) / DAY) * DAY
    const dayMinutes = minutesOf(subs.filter((s) => s.ts >= dayStart && s.ts < dayStart + DAY))
    return Math.round((dayMinutes / 60) * 100) / 100
  })

  // Real curriculum coverage: how many of the subject's chapters have been
  // studied at least once, out of how many exist.
  const pack = getPackByName(name)
  const totalChapters = pack?.topics?.length || 0
  const chaptersCovered = new Set(subs.map((s) => s.topic).filter(Boolean)).size

  return { hours, delta, series, chaptersCovered, totalChapters }
}

// Per-topic (chapter) breakdown for a subject, worst-confidence first, so a
// learner can see exactly which chapters need another pass. Confidence uses
// the same 6-minus-difficulty scale as confidenceSeries.
export function topicStats(sessions = [], subjectName) {
  const subs = sessionsForSubject(sessions, subjectName).filter((s) => s.topic)
  const byTopic = new Map()
  for (const s of subs) {
    const list = byTopic.get(s.topic) || []
    list.push(s)
    byTopic.set(s.topic, list)
  }
  const rows = Array.from(byTopic.entries()).map(([topic, list]) => {
    const sorted = list.slice().sort((a, b) => b.ts - a.ts)
    const latestConfidence = Math.max(1, Math.min(5, 6 - (sorted[0]?.difficulty || 3)))
    const avgDifficulty = list.reduce((sum, s) => sum + (s.difficulty || 3), 0) / list.length
    return {
      topic,
      count: list.length,
      latestConfidence,
      avgDifficulty: Math.round(avgDifficulty * 10) / 10,
      lastTs: sorted[0]?.ts || null,
    }
  })
  // Weakest (lowest confidence, i.e. highest avg difficulty) first.
  rows.sort((a, b) => b.avgDifficulty - a.avgDifficulty)
  return rows
}

/*
  Per-question attempt stats (state.attempts in the store), for the
  Performance page. An attempt: { id, ts, subject, topic, technique,
  question, correct, dontKnow }. Stored newest-first.
*/
export function attemptStats(attempts = []) {
  const total = attempts.length
  const correct = attempts.filter((a) => a.correct).length
  const dontKnow = attempts.filter((a) => a.dontKnow).length
  const wrong = total - correct - dontKnow
  return {
    total,
    correct,
    wrong,
    dontKnow,
    accuracy: total ? Math.round((correct / total) * 100) : null,
  }
}

// Every missed question (wrong or "I don't know"), newest first, optionally
// scoped to one subject.
export function mistakes(attempts = [], subjectName) {
  const scoped = subjectName ? sessionsForSubject(attempts, subjectName) : attempts
  return scoped.filter((a) => !a.correct).slice().sort((a, b) => b.ts - a.ts)
}

// Which topics have the most misses, worst first - the "focus here" list.
export function weakestTopics(attempts = [], subjectName, limit = 5) {
  const scoped = (subjectName ? sessionsForSubject(attempts, subjectName) : attempts).filter((a) => a.topic)
  const byTopic = new Map()
  for (const a of scoped) {
    const row = byTopic.get(a.topic) || { topic: a.topic, subject: a.subject, misses: 0, total: 0 }
    row.total += 1
    if (!a.correct) row.misses += 1
    byTopic.set(a.topic, row)
  }
  return Array.from(byTopic.values())
    .filter((r) => r.misses > 0)
    .sort((a, b) => b.misses - a.misses || b.misses / b.total - a.misses / a.total)
    .slice(0, limit)
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
