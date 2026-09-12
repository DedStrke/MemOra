/*
  §5.4: "am I on track" and "what should I do next" - the two questions a
  readiness bar on its own can't answer. Both are built from the same
  computeChapterState this whole model already runs on (see lib/attempts.js);
  nothing here tracks its own separate state.
*/
import { topicLevelMap } from '@/constants/library'
import { computeChapterState } from './attempts'
import { unresolvedMistakeChapters } from './mistakes'

const DAY = 86400000
const WEEK = 7 * DAY

// Topics a Year 12 student on a two-year (AS/A2) course hasn't been taught
// yet get excluded from both readiness averages and "chapters remaining" -
// they shouldn't read as 30 red, untaught chapters. Reuses the same
// AS/A2 tagging MockExam.jsx already built (Theme 1/2 or "(AS)" -> AS,
// Theme 3/4 or "(A2)" -> A2); a pack whose groups don't follow that naming
// (most of the non-Economics packs) simply tags nothing, so every topic
// stays in scope for it - no false exclusions, just no Y12 filtering
// benefit yet for those subjects.
export function relevantTopics(pack, isYear12) {
  if (!isYear12 || !pack) return pack?.topics || []
  const levelMap = topicLevelMap(pack)
  return pack.topics.filter((t) => levelMap[t] !== 'A2')
}

// Same groups/subgroups shape as a pack, with any topic not in
// `allowedTopics` removed, and any subgroup/group left with zero topics
// dropped entirely. Feeds ChapterBar so a Y12 student's bar (and its
// "not started" count) only ever reflects the AS chapters they've actually
// been taught.
export function filterGroupsToTopics(groups, allowedTopics) {
  if (!groups) return groups
  const allowed = new Set(allowedTopics)
  return groups
    .map((g) => ({
      ...g,
      subgroups: g.subgroups
        .map((sg) => ({ ...sg, topics: sg.topics.filter((t) => allowed.has(t)) }))
        .filter((sg) => sg.topics.length > 0),
    }))
    .filter((g) => g.subgroups.length > 0)
}

const isSolidPlus = (band) => band === 'solid' || band === 'exam-ready'

/*
  Subject readiness: the mean across EVERY relevant chapter, with
  not_started counting as 0 (§5.2). Not a mean over attempted chapters -
  doing one chapter well would otherwise read as 100%.

  Shared so the dashboard ring and the Progress bar can't drift apart.
*/
export function subjectReadiness({ pack, isYear12, chapterStates }) {
  const topics = relevantTopics(pack, isYear12)
  if (!topics.length) return null
  const get = (topic) =>
    chapterStates instanceof Map
      ? chapterStates.get(`${pack.name}␟${topic}`)
      : chapterStates?.[`${pack.name}␟${topic}`]
  let sum = 0
  let anyEvidence = false
  for (const topic of topics) {
    const s = get(topic)
    if (s && typeof s.readiness === 'number') {
      sum += s.readiness
      anyEvidence = true
    }
  }
  return anyEvidence ? sum / topics.length : null
}

// How many chapters sit in each band, for a subject.
export function subjectBandCounts({ pack, isYear12, chapterStates }) {
  const topics = relevantTopics(pack, isYear12)
  const get = (topic) =>
    chapterStates instanceof Map
      ? chapterStates.get(`${pack.name}␟${topic}`)
      : chapterStates?.[`${pack.name}␟${topic}`]
  const counts = { not_started: 0, seen: 0, shaky: 0, solid: 0, 'exam-ready': 0 }
  for (const topic of topics) {
    const band = get(topic)?.band || 'not_started'
    counts[band] = (counts[band] || 0) + 1
  }
  return counts
}

// Rough time a mode actually takes, for "~20 min" on a recommendation.
// Deliberately per-mode rather than the user's default session length: a
// notes read and a mock paper are not the same commitment.
export const MODE_MINUTES = {
  notes: 10,
  flashcards: 10,
  mcq: 15,
  'active-recall': 15,
  blurting: 10,
  'exam-questions': 25,
  'mock-exam': 45,
}

/*
  Pace projection (§5.4a).

  chapters_remaining = chapters not yet Solid+ (relevant topics only)
  weekly_rate         = chapters that crossed into Solid+ in the last 21 days / 3
  weeks_needed        = chapters_remaining / max(weekly_rate, 0.5)
  projected_ready     = today + weeks_needed

  Never built on fewer than 14 days of data for this subject - returns
  `hasEnoughData: false` with a required weekly rate to hit the exam date
  instead, per §5.4a's explicit instruction.
*/
export function computePaceProjection({ pack, isYear12, attempts, sessions, examDate, now = Date.now() }) {
  const topics = relevantTopics(pack, isYear12)
  const subjectAttempts = attempts.filter((a) => a.subject === pack?.name)
  const subjectSessions = sessions.filter((s) => s.subject === pack?.name)

  const allTs = [...subjectAttempts, ...subjectSessions].map((x) => x.ts).filter(Boolean)
  const daysOfData = allTs.length ? (now - Math.min(...allTs)) / DAY : 0

  let chaptersRemaining = 0
  let raisedToSolid = 0
  for (const topic of topics) {
    const topicAttempts = subjectAttempts.filter((a) => a.topic === topic)
    const topicSessions = subjectSessions.filter((s) => s.topic === topic)
    const current = computeChapterState({ attempts: topicAttempts, sessions: topicSessions, now })
    if (!isSolidPlus(current.band)) chaptersRemaining += 1
    else {
      const threeWeeksAgo = now - 21 * DAY
      const past = computeChapterState({
        attempts: topicAttempts.filter((a) => a.ts <= threeWeeksAgo),
        sessions: topicSessions.filter((s) => s.ts <= threeWeeksAgo),
        now: threeWeeksAgo,
      })
      if (!isSolidPlus(past.band)) raisedToSolid += 1
    }
  }
  const weeklyRate = raisedToSolid / 3

  if (daysOfData < 14) {
    let requiredRate = null
    let weeksUntilExam = null
    if (examDate) {
      weeksUntilExam = Math.max(0.5, (new Date(examDate).getTime() - now) / WEEK)
      requiredRate = chaptersRemaining / weeksUntilExam
    }
    return {
      hasEnoughData: false,
      chaptersRemaining,
      totalTopics: topics.length,
      requiredRate,
      weeksUntilExam,
      examTs: examDate ? new Date(examDate + 'T00:00:00').getTime() : null,
      daysOfData,
    }
  }

  const weeksNeeded = chaptersRemaining / Math.max(weeklyRate, 0.5)
  const projectedReadyTs = now + weeksNeeded * WEEK

  // The pace the exam date asks for, alongside the pace being kept - so
  // the verdict can name a target when nothing has moved yet rather than
  // only report that nothing has.
  let daysBehind = null
  let examTs = null
  let requiredRate = null
  if (examDate) {
    examTs = new Date(examDate + 'T00:00:00').getTime()
    daysBehind = Math.round((projectedReadyTs - examTs) / DAY)
    requiredRate = chaptersRemaining / Math.max(0.5, (examTs - now) / WEEK)
  }

  return {
    hasEnoughData: true,
    chaptersRemaining,
    totalTopics: topics.length,
    weeklyRate,
    weeksNeeded,
    projectedReadyTs,
    daysBehind,
    examTs,
    requiredRate,
    onTrack: daysBehind === null ? null : daysBehind <= 0,
  }
}

/*
  Next best action (§5.4c). exam_weight defaults to an equal share across a
  subject's relevant topics - there's no per-chapter mark-weighting data in
  the content packs yet, and the spec explicitly allows that default.

  Returns the ranked candidate list (not just the top one) so a caller can
  show more than one recommendation - the Dashboard's "Start here" wants two
  cards, the Progress page wants one.
*/
export function computeNextBestAction({
  subjectPacks,
  isYear12,
  attempts,
  sessions,
  examDatesBySubject = {},
  now = Date.now(),
  limit = 5,
}) {
  const candidates = []
  // §7.4: a chapter carrying a live, unresolved mistake (a misconception
  // that hasn't had two correct answers since) jumps the queue rather than
  // waiting for plain staleness to surface it again.
  const unresolvedChapters = unresolvedMistakeChapters(attempts)
  const MISTAKE_BOOST = 1.5

  for (const pack of subjectPacks) {
    const topics = relevantTopics(pack, isYear12)
    if (!topics.length) continue
    const examDate = examDatesBySubject[pack.name]
    const daysUntilExam = examDate
      ? Math.max(1, (new Date(examDate + 'T00:00:00').getTime() - now) / DAY)
      : null
    const urgency = daysUntilExam ? 1 / daysUntilExam : 1 / 180 // no date set: mild constant urgency
    const examWeight = 1 / topics.length

    for (const topic of topics) {
      const topicAttempts = attempts.filter((a) => a.subject === pack.name && a.topic === topic)
      const topicSessions = sessions.filter((s) => s.subject === pack.name && s.topic === topic)
      const lastTs = [...topicAttempts, ...topicSessions].reduce((max, x) => Math.max(max, x.ts || 0), 0)
      if (lastTs && now - lastTs < 12 * 60 * 60 * 1000) continue // studied in the last 12h

      const state = computeChapterState({ attempts: topicAttempts, sessions: topicSessions, now })
      const readiness = state.readiness ?? 0
      const daysSinceLast = lastTs ? (now - lastTs) / DAY : 90
      const staleness = Math.min(2, 1 + daysSinceLast / 30)
      const hasUnresolvedMistake = unresolvedChapters.has(`${pack.name}␟${topic}`)
      const priority =
        examWeight * (1 - readiness) * urgency * staleness * (hasUnresolvedMistake ? MISTAKE_BOOST : 1) * 1000

      candidates.push({
        subject: pack.name,
        topic,
        band: state.band,
        coverageState: state.coverageState,
        readiness: state.readiness,
        hasUnresolvedMistake,
        priority,
        mode: modeForBand(state),
      })
    }
  }

  const ranked = candidates.sort((a, b) => b.priority - a.priority)

  /*
    Spread the picks across subjects before falling back to raw rank.

    Straight rank puts whichever subject is furthest behind in every slot -
    an untouched subject scores (1 - 0) on every one of its chapters, so a
    student with one untouched subject gets three cards from it and no hint
    that the other two exist. Take the best chapter from each subject in
    priority order first, then top up from what's left. Ordering within the
    result is still by priority, so the strongest single pick stays first.
  */
  const bySubject = new Map()
  for (const c of ranked) {
    if (!bySubject.has(c.subject)) bySubject.set(c.subject, [])
    bySubject.get(c.subject).push(c)
  }
  const spread = []
  let round = 0
  while (spread.length < limit) {
    let addedThisRound = false
    for (const list of bySubject.values()) {
      if (spread.length >= limit) break
      if (list[round]) {
        spread.push(list[round])
        addedThisRound = true
      }
    }
    if (!addedThisRound) break
    round += 1
  }
  return spread.sort((a, b) => b.priority - a.priority)
}

// not_started -> Notes, seen -> MCQ, practised -> Blurting or Active recall,
// tested-and-Shaky -> Exam questions, Solid -> Mock exam. Exported so any
// chapter-bar segment (not just the top recommendation) can link to the
// mode that actually makes sense for where that chapter currently stands.
export function modeForBand(state) {
  if (state.coverageState === 'not_started') return 'notes'
  if (state.band === 'not_started' || state.band === 'seen') return 'mcq'
  if (state.coverageState === 'tested' && state.band === 'shaky') return 'exam-questions'
  if (state.band === 'solid' || state.band === 'exam-ready') return 'mock-exam'
  return 'blurting'
}
