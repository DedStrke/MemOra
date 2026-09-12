/*
  The events table.

  Every answered question, self-marked exam question, blurt and mock-exam
  question is one "attempt" - the single log every other measurement in the
  app (mistakes, readiness, pace) is meant to be derived from, never a
  second parallel record of the same thing.

  This is a client-only app with no backend (see AppProvider.jsx), so there
  is no SQL table and no nightly cron job: `state.attempts` in
  AppProvider is the events table, one plain array persisted to
  localStorage, and `computeChapterState` below is a pure function of that
  array plus the current time - which is what "materialised, recomputed
  nightly + on attempt" collapses to when there's no server to run a job on.
  Call it whenever a number is needed (it's cheap and it's the only way
  decay-without-activity can work at all: there is no attempt to
  recompute *on* when a chapter has simply gone stale).

  normalizeAttempt() is also the migration: every attempt already sitting
  in a returning user's localStorage - old shape, only
  {id, ts, subject, topic, technique, question, correct, dontKnow} - is run
  through it on load (see AppProvider's `load()`), which fills in every new
  field with a sensible default/derived value without touching or dropping
  any existing one. Nothing here is UI; nothing here renders.
*/

// Canonical mode ids. Match src/constants/content.js's STUDY_TECHNIQUES ids
// (kebab-case, this app's existing convention) plus 'mock-exam', which has
// no picker entry of its own. Kept here rather than imported from content.js
// so this data-model module has no dependency on UI copy.
export const ATTEMPT_MODES = [
  'notes',
  'flashcards',
  'exam-questions',
  'mcq',
  'blurting',
  'active-recall',
  'mock-exam',
]

export const OUTCOMES = ['correct', 'wrong', 'dont_know', 'rated']
export const DIFFICULTIES = ['foundation', 'core', 'stretch']

// A mode with no machine-known answer (blurting, exam questions, mock exam)
// only counts as real evidence of exam readiness, not just familiarity -
// this is the set the Exam-ready band gate checks against.
export const TESTED_MODES = new Set(['exam-questions', 'blurting', 'mock-exam'])

// Worst to best - lets a caller tell a genuine slip (band fell) apart from
// new engagement (band rose because evidence just started accumulating).
// Both change a "last week" comparison; only the first is a real slip.
export const BAND_RANK = { not_started: 0, seen: 1, shaky: 2, solid: 3, 'exam-ready': 4 }
export const hasSlipped = (state) =>
  Boolean(state.bandLastWeek) && BAND_RANK[state.band] < BAND_RANK[state.bandLastWeek]

// Weight per mode: how much one attempt at this mode says about whether the
// student actually knows the material, versus just recognises it.
const MODE_WEIGHT = {
  flashcards: 1,
  mcq: 1.5,
  'active-recall': 2,
  blurting: 2.5,
  'exam-questions': 3,
  'mock-exam': 4,
}

// Weight per content-difficulty tier. Nothing in the content packs carries
// a difficulty tag yet (a separate content-authoring task), so this always
// falls back to the foundation weight until items start being tagged - it's
// wired up now so tagging content later needs no second migration here.
const DIFFICULTY_WEIGHT = { foundation: 1, core: 1.5, stretch: 2 }

// Half-life in days: how long until an attempt's contribution halves.
// Recognition-only modes decay fast: getting a flashcard right in August
// says very little about February. Slower for modes that test real recall.
const FAST_DECAY_MODES = new Set(['flashcards', 'mcq'])
const HALF_LIFE_FAST = 21
const HALF_LIFE_SLOW = 45

const clamp01 = (n) => Math.min(1, Math.max(0, n))

function halfLifeFor(mode) {
  return FAST_DECAY_MODES.has(mode) ? HALF_LIFE_FAST : HALF_LIFE_SLOW
}

function decayFor(mode, ts, now) {
  const days = Math.max(0, (now - ts) / 86400000)
  return 0.5 ** (days / halfLifeFor(mode))
}

/*
  Normalised 0-1 score for one attempt. Returns null when there isn't
  enough information to score it at all (e.g. a bare 'notes' open, which
  is coverage evidence but not a performance signal).

    MCQ / plain right-wrong:        correct -> 1, wrong -> 0
    Exam question / mock / blurt:   marksAwarded / marksAvailable
    Flashcard / active recall:      self-rating on the Again/Hard/Good/Easy
                                     scale -> 0 / 0.4 / 0.8 / 1
    Any 'dont_know' outcome:        0, regardless of mode - not attempting
    recall is not partial credit.
*/
const SELF_RATING_SCORE = { 1: 0, 2: 0.4, 3: 0.8, 4: 1 }

export function scoreForAttempt(a) {
  if (a.outcome === 'dont_know') return 0
  if (typeof a.marksAwarded === 'number' && typeof a.marksAvailable === 'number' && a.marksAvailable > 0) {
    return clamp01(a.marksAwarded / a.marksAvailable)
  }
  if (typeof a.selfRating === 'number' && a.selfRating in SELF_RATING_SCORE) {
    return SELF_RATING_SCORE[a.selfRating]
  }
  if (a.outcome === 'correct') return 1
  if (a.outcome === 'wrong') return 0
  return null
}

/*
  Upgrade whatever shape was passed to logAttempt() - old call sites still
  only pass {subject, topic, technique, question, correct, dontKnow} - into
  the full attempt record. Every existing field it reads is kept exactly as
  is (Performance.jsx and lib/sessions.js read .correct/.dontKnow/.topic/
  .subject/.technique/.question directly), every new field is added
  alongside it. Does not touch `id` - callers keep generating that
  themselves, matching the existing pattern for sessions/attempts/decks.
*/
export function normalizeAttempt(raw = {}) {
  const outcome =
    raw.outcome ??
    (raw.dontKnow
      ? 'dont_know'
      : typeof raw.correct === 'boolean'
        ? raw.correct
          ? 'correct'
          : 'wrong'
        : typeof raw.selfRating === 'number'
          ? 'rated'
          : null)

  const attempt = {
    ts: raw.ts ?? Date.now(),
    subject: raw.subject ?? null,
    topic: raw.topic ?? null,
    // `technique` is the field every existing page already reads; `mode` is
    // the same value under the §9 name, for anything written against that
    // schema from here on. Kept in sync, never allowed to drift apart.
    technique: raw.technique ?? raw.mode ?? null,
    mode: raw.mode ?? raw.technique ?? null,
    itemId: raw.itemId ?? null,
    question: raw.question ?? null,
    correct: raw.correct ?? null,
    dontKnow: Boolean(raw.dontKnow),
    difficulty: DIFFICULTIES.includes(raw.difficulty) ? raw.difficulty : null,
    outcome,
    marksAwarded: typeof raw.marksAwarded === 'number' ? raw.marksAwarded : null,
    marksAvailable: typeof raw.marksAvailable === 'number' ? raw.marksAvailable : null,
    selfRating: typeof raw.selfRating === 'number' ? raw.selfRating : null,
    secondsTaken: typeof raw.secondsTaken === 'number' ? raw.secondsTaken : null,
    hintUsed: Boolean(raw.hintUsed),
    misconception: raw.misconception ?? null,
    sessionId: raw.sessionId ?? null,
  }
  attempt.score = scoreForAttempt(attempt)
  return attempt
}

const EMPTY_CHAPTER_STATE = {
  coverageState: 'not_started',
  readiness: null,
  evidence: 0,
  band: 'not_started',
  bandLastWeek: null,
  lastAttemptAt: null,
}

/*
  The chapter_state materialised view, computed on demand instead of stored
  - see the module doc for why that's the right substitution here.

  `attempts` and `sessions` must already be scoped to one (subject, topic)
  pair (see computeAllChapterStates below, which does that grouping for
  every chapter in one pass). `now` defaults to Date.now() but takes a
  fixed value so "band a week ago" can be computed by calling this again
  with now = 7 days ago, which is how bandLastWeek is derived.
*/
export function computeChapterState({ attempts = [], sessions = [], now = Date.now() } = {}) {
  const hasNotesSession = sessions.some((s) => s.technique === 'notes')
  const hasShortSession = sessions.some((s) => typeof s.minutes === 'number' && s.minutes < 1)
  const hasPractised = attempts.some((a) => ['flashcards', 'mcq', 'active-recall'].includes(a.mode))
  const hasTested = attempts.some((a) => TESTED_MODES.has(a.mode))

  const coverageState = hasTested
    ? 'tested'
    : hasPractised
      ? 'practised'
      : hasNotesSession || hasShortSession
        ? 'seen'
        : sessions.length || attempts.length
          ? 'seen'
          : 'not_started'

  const scored = attempts.filter((a) => typeof a.score === 'number' && a.mode && a.mode in MODE_WEIGHT)
  if (!scored.length) {
    return { ...EMPTY_CHAPTER_STATE, coverageState }
  }

  let numerator = 0
  let denominator = 0
  for (const a of scored) {
    const w = MODE_WEIGHT[a.mode] * DIFFICULTY_WEIGHT[a.difficulty ?? 'foundation'] * decayFor(a.mode, a.ts, now)
    numerator += a.score * w
    denominator += w
  }
  const readiness = denominator > 0 ? numerator / denominator : null
  const evidence = denominator

  const recentTestedAttempt = attempts.some(
    (a) => TESTED_MODES.has(a.mode) && now - a.ts <= 30 * 86400000,
  )

  // The §5.2 band table as written leaves a gap: evidence in [3, 6) with
  // readiness >= 0.55 matches neither shaky's condition (readiness < 0.55)
  // nor solid's (evidence >= 6), and would silently fall back to 'seen' -
  // a chapter answering everything right so far reading identically to one
  // that's only had its notes opened once. Once evidence >= 3, the chapter
  // has left 'seen' for good; readiness picks shaky vs solid, and solid
  // additionally needs evidence >= 6 as its confidence bar - so evidence in
  // that gap reads as shaky (not yet enough evidence to call it solid),
  // never seen.
  let band = 'not_started'
  if (evidence > 0 || coverageState !== 'not_started') band = 'seen'
  if (evidence >= 3 && readiness !== null) {
    band = evidence >= 6 && readiness >= 0.55 ? 'solid' : 'shaky'
  }
  if (evidence >= 10 && readiness !== null && readiness >= 0.8 && recentTestedAttempt) band = 'exam-ready'

  const lastAttemptAt = attempts.reduce((max, a) => (a.ts > max ? a.ts : max), 0) || null

  return { coverageState, readiness, evidence, band, bandLastWeek: null, lastAttemptAt }
}

/*
  Groups attempts/sessions by (subject, topic) and computes chapter_state
  for each, including bandLastWeek (the same computation re-run with the
  clock wound back 7 days) - the single field "3 chapters slipped this
  week" needs. Returns a Map keyed by `${subject}␟${topic}`.
*/
export function computeAllChapterStates({ attempts = [], sessions = [], now = Date.now() } = {}) {
  const key = (subject, topic) => `${subject ?? ''}␟${topic ?? ''}`
  const groups = new Map()

  const addTo = (subject, topic, bucket, item) => {
    if (!subject || !topic) return
    const k = key(subject, topic)
    if (!groups.has(k)) groups.set(k, { subject, topic, attempts: [], sessions: [] })
    groups.get(k)[bucket].push(item)
  }
  for (const a of attempts) addTo(a.subject, a.topic, 'attempts', a)
  for (const s of sessions) addTo(s.subject, s.topic, 'sessions', s)

  const weekAgo = now - 7 * 86400000
  const result = new Map()
  for (const [k, group] of groups) {
    const state = computeChapterState({ attempts: group.attempts, sessions: group.sessions, now })
    const weekAgoState = computeChapterState({
      attempts: group.attempts.filter((a) => a.ts <= weekAgo),
      sessions: group.sessions.filter((s) => s.ts <= weekAgo),
      now: weekAgo,
    })
    result.set(k, {
      ...state,
      subject: group.subject,
      topic: group.topic,
      bandLastWeek: weekAgoState.band,
      readinessLastWeek: weekAgoState.readiness,
    })
  }
  return result
}
