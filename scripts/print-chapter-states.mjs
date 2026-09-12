/*
  §5.2 verification: print readiness, evidence and band for every chapter of
  a synthetic test user, so the numbers can be checked by eye before any
  Progress page is built on top of them.

  Backend-only in spirit even though there's no backend to run it on (see
  lib/attempts.js's module doc) - this script plays the role §10's build
  order gives "verify the numbers in a console before drawing anything."

  Run: npx vite-node scripts/print-chapter-states.mjs
*/
import { normalizeAttempt, computeAllChapterStates, BAND_RANK, hasSlipped } from '../src/lib/attempts.js'

const DAY = 86400000
const NOW = Date.now()
const daysAgo = (n) => NOW - n * DAY

const attempts = []
const sessions = []
let sessionSeq = 0
const newSessionId = () => 'ses_test_' + sessionSeq++

const mcq = (subject, topic, ts, correct) =>
  attempts.push(normalizeAttempt({ subject, topic, technique: 'mcq', correct, ts }))

const exam = (subject, topic, ts, marksAwarded, marksAvailable) =>
  attempts.push(
    normalizeAttempt({
      subject,
      topic,
      technique: 'exam-questions',
      marksAwarded,
      marksAvailable,
      ts,
      sessionId: newSessionId(),
    }),
  )

const mock = (subject, topic, ts, marksAwarded, marksAvailable) =>
  attempts.push(
    normalizeAttempt({ subject, topic, technique: 'mock-exam', marksAwarded, marksAvailable, ts }),
  )

const rated = (subject, topic, ts, technique, selfRating) =>
  attempts.push(normalizeAttempt({ subject, topic, technique, selfRating, ts }))

const openedNotes = (subject, topic, ts) => {
  sessions.push({ subject, topic, technique: 'notes', minutes: 4, ts })
}

/* ------------------------------------------------------ MATHS: Algebraic
   Expressions - the exam-ready case. Heavy, varied, recent practice with at
   least one tested-mode attempt inside the last 30 days. */
for (let i = 0; i < 10; i++) mcq('Maths', 'Algebraic Expressions', daysAgo(5 + i), true)
exam('Maths', 'Algebraic Expressions', daysAgo(3), 11, 12)
exam('Maths', 'Algebraic Expressions', daysAgo(10), 10, 12)

/* ------------------------------------------------- MATHS: Quadratics -
   solid. Good scores, real evidence, but nothing in the tested modes
   recently - shows solid does NOT require the 30-day recency exam-ready
   does. */
for (let i = 0; i < 6; i++) mcq('Maths', 'Quadratics', daysAgo(20 + i), i % 5 !== 0)
rated('Maths', 'Quadratics', daysAgo(18), 'flashcards', 4)
rated('Maths', 'Quadratics', daysAgo(17), 'active-recall', 3)

/* ------------------------------------------ MATHS: Equations and
   Inequalities - shaky. Some evidence, poor results. */
mcq('Maths', 'Equations and Inequalities', daysAgo(4), false)
mcq('Maths', 'Equations and Inequalities', daysAgo(3), false)
mcq('Maths', 'Equations and Inequalities', daysAgo(2), true)
mcq('Maths', 'Equations and Inequalities', daysAgo(1), false)

/* ---------------------------------------- MATHS: Graphs and
   Transformations - seen. Opened the notes, nothing answered. */
openedNotes('Maths', 'Graphs and Transformations', daysAgo(6))

/* -------------------------------------------- MATHS: Straight Line
   Graphs - not_started. No sessions, no attempts, on purpose. */

/* ------------------------------------------------------- ECONOMICS:
   Demand - the SLIPPED case. All the evidence is 47 days old and nothing
   has happened since - decay alone has pulled solid down to shaky somewhere
   in roughly the last week. This is what "3 chapters slipped this week"
   is supposed to catch: a real regression with no new evidence to explain
   it, as opposed to a chapter that's merely new this week (see the CS and
   other Maths chapters below, which move the other way for the opposite
   reason and must NOT be counted as slips). */
for (let i = 0; i < 10; i++) mcq('Economics', 'Demand', daysAgo(49), true)
exam('Economics', 'Demand', daysAgo(49), 12, 12)
exam('Economics', 'Demand', daysAgo(49), 11, 12)

/* --------------------------------------------- ECONOMICS: Production
   Possibility Frontiers - a mock-exam-only chapter, exercising the
   heaviest-weighted mode on its own. */
mock('Economics', 'Production Possibility Frontiers', daysAgo(2), 18, 20)
mock('Economics', 'Production Possibility Frontiers', daysAgo(9), 15, 20)

/* --------------------------------------------------------------- CS:
   Structure and Function of the Processor - mixed mcq, mostly wrong, one
   dont_know. */
mcq('Computer Science', 'Structure and Function of the Processor', daysAgo(3), true)
mcq('Computer Science', 'Structure and Function of the Processor', daysAgo(2), false)
attempts.push(
  normalizeAttempt({
    subject: 'Computer Science',
    topic: 'Structure and Function of the Processor',
    technique: 'exam-questions',
    dontKnow: true,
    ts: daysAgo(1),
  }),
)

/* --------------------------------------------------------------- CS:
   Systems Software - self-rated flashcards/active-recall only, exercising
   that score path with no marksAwarded/marksAvailable anywhere. */
rated('Computer Science', 'Systems Software', daysAgo(4), 'flashcards', 2)
rated('Computer Science', 'Systems Software', daysAgo(3), 'active-recall', 3)
rated('Computer Science', 'Systems Software', daysAgo(2), 'flashcards', 3)

const states = computeAllChapterStates({ attempts, sessions, now: NOW })

const rows = [...states.values()]
  .sort((a, b) => a.subject.localeCompare(b.subject) || a.topic.localeCompare(b.topic))
  .map((s) => ({
    subject: s.subject,
    chapter: s.topic,
    coverage: s.coverageState,
    readiness: s.readiness === null ? '-' : (s.readiness * 100).toFixed(0) + '%',
    evidence: s.evidence.toFixed(1),
    band: s.band,
    bandLastWeek: s.bandLastWeek,
    change: hasSlipped(s)
      ? 'SLIPPED'
      : s.bandLastWeek && BAND_RANK[s.band] > BAND_RANK[s.bandLastWeek]
        ? 'improved'
        : '',
  }))

console.log(`\n${rows.length} chapters with any activity, as of ${new Date(NOW).toDateString()}\n`)
console.table(rows)

const slipped = rows.filter((r) => r.change === 'SLIPPED')
console.log(
  slipped.length
    ? `\n${slipped.length} chapter(s) slipped this week (band fell with no new evidence to explain it):\n` +
        slipped.map((r) => `  - ${r.subject} / ${r.chapter}: ${r.bandLastWeek} -> ${r.band}`).join('\n')
    : '\nNo chapters slipped this week.',
)
const improved = rows.filter((r) => r.change === 'improved')
if (improved.length) {
  console.log(
    `\n${improved.length} chapter(s) improved this week (new engagement, not a slip):\n` +
      improved.map((r) => `  - ${r.subject} / ${r.chapter}: ${r.bandLastWeek} -> ${r.band}`).join('\n'),
  )
}

console.log(
  '\n(Straight Line Graphs deliberately has zero attempts and does not appear above -\n' +
    ' that IS the not_started case: computeAllChapterStates only groups chapters that\n' +
    ' have at least one attempt or session, since a chapter nobody has touched has\n' +
    ' nothing to group. A real Progress page would list every chapter in the spec and\n' +
    ' treat any chapter missing from this map as not_started.)',
)
