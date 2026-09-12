import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { getPackByName, topicLevelMap } from '@/constants/library'
import { EXAM_BOARD_META } from '@/constants/content'
import { useApp } from '@/context/AppProvider'
import { slugify, resolveSlug } from '@/lib/slug'
import Chip from '@/components/ui/Chip'
import AnswerInput from '@/components/ui/AnswerInput'
import Diagram from '@/components/diagrams'

/*
  Time allowed is 1.5 minutes per mark, applied to the marks the paper
  ACTUALLY carries.

  This used to be a fixed 30/60/90 per preset, which quietly gave the wrong
  amount of time: buildPaper keeps adding questions until it reaches the
  target, so a "40 mark" paper regularly came out at 44 or 45 marks and
  still got exactly 60 minutes - 1.33 min/mark, and a different rate on
  every shuffle. Deriving the clock from the finished paper keeps the ratio
  exact however the questions fall.
*/
export const MINUTES_PER_MARK = 1.5
const minutesForMarks = (marks) => Math.round(marks * MINUTES_PER_MARK)

// Preset paper lengths - picked, not typed. Only the mark total is set
// here; the time follows from it, so the two can never disagree.
const PAPER_PRESETS = [
  { id: 'short', label: 'Short', marks: 20 },
  { id: 'standard', label: 'Standard', marks: 40 },
  { id: 'full', label: 'Full paper', marks: 60 },
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/*
  Assembles one randomised paper from the subject's real exam-question bank:
  keep adding shuffled questions until the paper hits a sensible total (or
  the bank runs dry), then order low-to-high marks the way a real paper
  reads - short-answer starters first, the longer response questions last.
*/
function buildPaper(examQuestions, targetMarks = 40, maxQuestions = 16) {
  const picked = []
  let total = 0
  for (const q of shuffle(examQuestions)) {
    if (picked.length >= maxQuestions) break
    picked.push(q)
    total += q.marks
    if (total >= targetMarks) break
  }
  return picked.sort((a, b) => a.marks - b.marks)
}

function formatClock(seconds) {
  const s = Math.max(0, seconds)
  const m = Math.floor(s / 60)
  const r = s % 60
  return `${m}:${String(r).padStart(2, '0')}`
}

function PaperHeader({ subjectLabel, board, sectionLabel }) {
  return (
    <div className="mb-6 text-center">
      {board && (
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          {board.board} {board.code}
        </p>
      )}
      <h1 className="mt-1 text-2xl font-extrabold text-fg sm:text-3xl">{subjectLabel}</h1>
      <p className="mt-1 text-sm text-muted">{sectionLabel || board?.paper || 'Mixed practice paper'}</p>
    </div>
  )
}

export default function MockExam() {
  const { subjectSlug } = useParams()
  const navigate = useNavigate()
  const { user, logSession, logAttempt } = useApp()

  const subjectNames =
    user.courseType === 'University' && user.courseName
      ? [user.courseName]
      : (user.subjects || []).map((s) => s.name)

  const subject = resolveSlug(subjectSlug, subjectNames)
  const pickSubject = (name) => navigate(`/mock/${slugify(name)}`)

  const pack = subject ? getPackByName(subject) : null
  const board =
    (subject && EXAM_BOARD_META[subject]) ||
    (subject && user.subjects?.find((s) => s.name === subject)?.spec
      ? { board: user.subjects.find((s) => s.name === subject).spec, code: '', paper: null }
      : null)

  // Year 12 gets AS-only content where the subject actually splits that way
  // (Maths, Economics); a subject with no real AS/A2 split (Computer
  // Science) has nothing to filter, so Year 12 still sees everything.
  const isYear12 = user.yearGroup === 'Year 12'

  // A mock is always scoped to one paper/component - Maths' Pure and
  // Statistics content never appears in the same sitting, same as OCR CS
  // never mixes Component 1 and 2. `pack.groups` (see library.js) already
  // encodes exactly this split per subject, so it drives the picker rather
  // than a second, hand-maintained list. sectionIdx resets to the first
  // section whenever the subject changes.
  const [sectionIdx, setSectionIdx] = useState(0)
  const [topicFilter, setTopicFilter] = useState([]) // empty = every topic in the section
  const hasSections = Boolean(pack?.groups?.length)
  const activeSection = hasSections ? pack.groups[Math.min(sectionIdx, pack.groups.length - 1)] : null
  const sectionTopics = activeSection ? activeSection.subgroups.flatMap((sg) => sg.topics) : null
  const topicsInPlay = topicFilter.length > 0 ? topicFilter : sectionTopics

  const pickSection = (idx) => {
    setSectionIdx(idx)
    setTopicFilter([])
  }
  const toggleTopic = (t) =>
    setTopicFilter((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))

  const availableQuestions = (() => {
    if (!pack) return []
    let all = pack.examQuestions || []
    if (topicsInPlay) all = all.filter((q) => topicsInPlay.includes(q.topic))
    if (isYear12) {
      const levels = topicLevelMap(pack)
      all = all.filter((q) => levels[q.topic] !== 'A2')
    }
    return all
  })()

  // paper | running | marking | results
  const [phase, setPhase] = useState('paper')
  const [presetId, setPresetId] = useState('standard')
  const preset = PAPER_PRESETS.find((p) => p.id === presetId) || PAPER_PRESETS[1]
  const [paper, setPaper] = useState([])
  const [answers, setAnswers] = useState({}) // index -> student's written answer
  const [awarded, setAwarded] = useState({}) // index -> marks self-awarded
  const [earnedXp, setEarnedXp] = useState(0) // shown on the results screen
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [startedAt, setStartedAt] = useState(null)

  const totalMarks = paper.reduce((sum, q) => sum + q.marks, 0)
  // 1.5 min per mark, on the marks this paper actually carries.
  const allowedMinutes = minutesForMarks(totalMarks)
  const topicFilterKey = topicFilter.slice().sort().join('|')

  // Regenerate whenever the subject, section, topic narrowing, or preset
  // changes - each of those is already a deliberate choice, so it reshuffles
  // on its own rather than needing a separate manual step.
  useEffect(() => {
    if (!pack) return
    const p = buildPaper(availableQuestions, preset.marks)
    setPaper(p)
    setAnswers({})
    setAwarded({})
    setPhase('paper')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pack, presetId, sectionIdx, topicFilterKey, isYear12])

  // Countdown, once the paper is actually running.
  useEffect(() => {
    if (phase !== 'running') return undefined
    const id = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000)
    return () => clearInterval(id)
  }, [phase])

  const regenerate = () => {
    if (!pack) return
    setPaper(buildPaper(availableQuestions, preset.marks))
    setAnswers({})
    setAwarded({})
  }

  const start = () => {
    setSecondsLeft(allowedMinutes * 60)
    setStartedAt(Date.now())
    setPhase('running')
  }

  const finishAndMark = () => setPhase('marking')

  const award = (i, value) => setAwarded((a) => ({ ...a, [i]: value }))

  const finishMarking = () => {
    const scored = paper.reduce((sum, q, i) => sum + (awarded[i] ?? 0), 0)
    const pct = totalMarks ? scored / totalMarks : 0
    const usedMinutes = startedAt ? Math.min(180, Math.round((Date.now() - startedAt) / 60000)) : allowedMinutes
    const sessionId = logSession({
      subject,
      technique: 'mock-exam',
      difficulty: pct >= 0.8 ? 2 : pct >= 0.5 ? 3 : 4,
      topic: null,
      minutes: usedMinutes,
      score: scored,
      totalMarks,
      questionCount: paper.length,
    })
    paper.forEach((q, i) => {
      // The actual awarded value was being computed here and then thrown
      // away, collapsed into a plain correct/incorrect boolean - so a mock
      // question you got 3/4 on logged identically to one you got 0/4 on.
      // marksAwarded/marksAvailable keep the real partial-credit result.
      const marks = awarded[i] ?? 0
      logAttempt({
        subject,
        topic: q.topic || null,
        technique: 'mock-exam',
        question: q.question,
        correct: marks === q.marks,
        dontKnow: false,
        marksAwarded: marks,
        marksAvailable: q.marks,
        sessionId,
      })
    })
    setEarnedXp(usedMinutes + 10 + paper.filter((q, i) => (awarded[i] ?? 0) === q.marks).length * 2)
    setPhase('results')
  }

  const scored = paper.reduce((sum, q, i) => sum + (awarded[i] ?? 0), 0)
  const allMarked = paper.length > 0 && paper.every((_, i) => awarded[i] !== undefined)

  // No subject in the URL and nothing picked yet - ask which one.
  if (!subject) {
    return (
      <Section width="narrow" animateOnMount className="pt-10 pb-28">
        <motion.div variants={fadeInUp}>
          <Button as={Link} to="/dashboard" variant="ghost" size="sm">
            <Icon name="arrowLeft" className="h-4 w-4" />
            Dashboard
          </Button>
        </motion.div>
        <motion.div variants={fadeInUp} className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-fg">Mock exam: which subject?</h1>
        </motion.div>
        <motion.div variants={staggerContainer} className="mt-6 flex flex-wrap justify-center gap-2">
          {subjectNames.map((name) => (
            <motion.div key={name} variants={fadeInUp}>
              <Chip onClick={() => pickSubject(name)}>{name}</Chip>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    )
  }

  return (
    <Section width="narrow" animateOnMount className="pt-10 pb-28">
      <motion.div variants={fadeInUp} className="mb-6">
        <Button as={Link} to="/dashboard" variant="ghost" size="sm">
          <Icon name="arrowLeft" className="h-4 w-4" />
          Dashboard
        </Button>
      </motion.div>

      <AnimatePresence mode="wait">
        {/* PAPER INFO - before starting */}
        {phase === 'paper' && (
          <motion.div key="paper" variants={fadeInUp} initial="hidden" animate="show" exit={{ opacity: 0 }}>
            <PaperHeader subjectLabel={pack?.name || subject} board={board} sectionLabel={activeSection?.label} />

            {isYear12 && Object.keys(topicLevelMap(pack || {})).length > 0 && (
              <p className="mx-auto mb-5 max-w-md text-center text-xs font-medium text-muted">
                <Icon name="access" className="mr-1 inline h-3.5 w-3.5 text-brand-strong" />
                Year 12: sticking to Year 1 (AS) content for this paper.
              </p>
            )}

            {/* Section/paper picker - never mixes papers into one mock */}
            {hasSections && (
              <div className="mx-auto mb-5 max-w-lg">
                <p className="mb-1.5 text-center text-xs font-semibold uppercase tracking-wide text-muted">
                  Paper
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {pack.groups.map((g, idx) => (
                    <Chip
                      key={g.label}
                      selected={sectionIdx === idx}
                      aria-pressed={sectionIdx === idx}
                      onClick={() => pickSection(idx)}
                    >
                      {g.label}
                    </Chip>
                  ))}
                </div>
              </div>
            )}

            {/* Optional topic narrowing within the chosen paper - one topic
                or several, defaulting to the whole paper. */}
            {sectionTopics && (
              <details className="mx-auto mb-5 max-w-lg">
                <summary className="cursor-pointer text-center text-xs font-semibold uppercase tracking-wide text-muted hover:text-fg">
                  {topicFilter.length > 0
                    ? `${topicFilter.length} topic${topicFilter.length === 1 ? '' : 's'} picked - narrow further`
                    : 'Narrow to specific topics (optional)'}
                </summary>
                <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                  <Chip
                    size="sm"
                    selected={topicFilter.length === 0}
                    aria-pressed={topicFilter.length === 0}
                    onClick={() => setTopicFilter([])}
                  >
                    All topics
                  </Chip>
                  {sectionTopics.map((t) => (
                    <Chip
                      key={t}
                      size="sm"
                      selected={topicFilter.includes(t)}
                      aria-pressed={topicFilter.includes(t)}
                      onClick={() => toggleTopic(t)}
                    >
                      {t}
                    </Chip>
                  ))}
                </div>
              </details>
            )}

            <div className="mx-auto mb-5 flex max-w-md justify-center gap-2">
              {PAPER_PRESETS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPresetId(p.id)}
                  aria-pressed={presetId === p.id}
                  className={`flex-1 rounded-xl border px-3 py-2.5 text-center transition-colors ${
                    presetId === p.id
                      ? 'border-brand bg-brand-soft'
                      : 'border-line bg-surface hover:border-brand'
                  }`}
                >
                  <span className="block text-sm font-bold text-fg">{p.label}</span>
                  <span className="block text-xs text-muted">{p.marks} marks &middot; {minutesForMarks(p.marks)} min</span>
                </button>
              ))}
            </div>

            {paper.length === 0 ? (
              <div className="mx-auto max-w-md py-6 text-center">
                <p className="readable text-muted">
                  No exam questions for {activeSection ? activeSection.label : pack?.name || subject}
                  {topicFilter.length > 0 ? ' with that topic selection' : ''} yet, so there is not
                  enough to build a paper from.{' '}
                  {(hasSections || topicFilter.length > 0) && 'Try a different paper or clear the topic filter.'}
                </p>
                <div className="mt-5">
                  <Button as={Link} to={`/study/${slugify(subject)}`} variant="secondary" size="sm">
                    Go to study instead
                  </Button>
                </div>
              </div>
            ) : (
              <div className="mx-auto max-w-md">
                <div className="card grid grid-cols-3 divide-x divide-line overflow-hidden text-center">
                  <div className="p-4">
                    <p className="text-2xl font-extrabold text-fg">{paper.length}</p>
                    <p className="text-xs text-muted">questions</p>
                  </div>
                  <div className="p-4">
                    <p className="text-2xl font-extrabold text-fg">{totalMarks}</p>
                    <p className="text-xs text-muted">marks</p>
                  </div>
                  <div className="p-4">
                    <p className="text-2xl font-extrabold text-fg">{allowedMinutes}</p>
                    <p className="text-xs text-muted">minutes</p>
                  </div>
                </div>
                <p className="readable mt-4 text-center text-sm text-muted">
                  A fresh, randomised selection every time. Write real answers, then mark yourself
                  honestly against the mark scheme at the end.
                </p>
                <div className="mt-6 flex flex-col items-center gap-3">
                  <Button onClick={start} size="lg">
                    <Icon name="play" className="h-5 w-5" />
                    Start mock exam
                  </Button>
                  <Button variant="ghost" size="sm" onClick={regenerate}>
                    <Icon name="shuffle" className="h-4 w-4" />
                    Shuffle a different paper
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* RUNNING - the paper itself, like a real one */}
        {phase === 'running' && (
          <motion.div key="running" variants={fadeInUp} initial="hidden" animate="show" exit={{ opacity: 0 }}>
            <div
              className={`sticky top-20 z-30 mb-6 flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 shadow-lg ${
                secondsLeft <= 300
                  ? 'border-danger bg-danger/10'
                  : 'border-line bg-surface'
              }`}
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-fg">{pack.name}</p>
                <p className="text-xs text-muted">{totalMarks} marks total</p>
              </div>
              <span
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold tabular-nums ${
                  secondsLeft <= 300 ? 'text-danger' : 'text-fg'
                }`}
              >
                <Icon name="clock" className="h-4 w-4" />
                {formatClock(secondsLeft)}
              </span>
            </div>

            <div className="space-y-6">
              {paper.map((q, i) => (
                <div key={i} className="card p-5">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                      Question {i + 1}
                    </p>
                    <span className="shrink-0 rounded-full bg-paper-soft px-2.5 py-0.5 text-xs font-semibold text-paper">
                      {q.marks} mark{q.marks === 1 ? '' : 's'}
                    </span>
                  </div>
                  <p className="readable mt-2 text-fg">{q.question}</p>
                  {/* palette="focus": ten questions on one page, so the
                      symbol keys belong to whichever answer you're actually
                      writing rather than sitting under all of them. */}
                  <div className="mt-3">
                    <AnswerInput
                      value={answers[i] || ''}
                      onChange={(v) => setAnswers((a) => ({ ...a, [i]: v }))}
                      subject={pack?.name}
                      rows={q.marks > 4 ? 6 : 3}
                      placeholder="Write your answer..."
                      palette="focus"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <Button size="lg" onClick={finishAndMark}>
                <Icon name="check" className="h-5 w-5" />
                Finish and mark
              </Button>
            </div>
          </motion.div>
        )}

        {/* MARKING - self-mark against the real scheme */}
        {phase === 'marking' && (
          <motion.div key="marking" variants={fadeInUp} initial="hidden" animate="show" exit={{ opacity: 0 }}>
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold text-fg">Be honest, how did each one go?</h1>
            </div>

            <div className="space-y-6">
              {paper.map((q, i) => (
                <div key={i} className="card p-5">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                      Question {i + 1}
                    </p>
                    <span className="shrink-0 rounded-full bg-paper-soft px-2.5 py-0.5 text-xs font-semibold text-paper">
                      {q.marks} mark{q.marks === 1 ? '' : 's'}
                    </span>
                  </div>
                  <p className="readable mt-2 font-semibold text-fg">{q.question}</p>

                  {answers[i]?.trim() && (
                    <p className="readable mt-2 rounded-xl bg-raised p-3 text-sm text-muted">
                      Your answer: {answers[i]}
                    </p>
                  )}

                  <div className="mt-3 rounded-xl border border-line bg-surface p-4">
                    <p className="text-sm font-bold text-fg">Mark scheme</p>
                    <ul className="mt-2 space-y-1.5">
                      {q.markScheme.map((m, mi) => (
                        <li key={mi} className="flex gap-2 text-sm">
                          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                          <span className="readable text-muted">{m}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Diagram marks are part of the tariff on a "using a
                        diagram" question, so self-marking without one means
                        guessing at that part of the score. */}
                    {q.diagram && q.diagramExpected && (
                      <div className="mt-3">
                        <p className="text-xs font-bold uppercase tracking-wide text-muted">
                          The diagram the examiner expects
                        </p>
                        <Diagram id={q.diagram} />
                      </div>
                    )}
                  </div>

                  <div className="mt-3">
                    <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
                      Marks awarded (out of {q.marks})
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {Array.from({ length: q.marks + 1 }, (_, n) => n).map((n) => (
                        <Chip
                          key={n}
                          selected={awarded[i] === n}
                          aria-pressed={awarded[i] === n}
                          onClick={() => award(i, n)}
                          className="min-w-9 font-bold tabular-nums"
                        >
                          {n}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col items-center gap-2">
              <Button size="lg" onClick={finishMarking} disabled={!allMarked}>
                <Icon name="target" className="h-5 w-5" />
                See my result
              </Button>
              {!allMarked && (
                <p className="text-xs text-muted">Mark every question to see your total.</p>
              )}
            </div>
          </motion.div>
        )}

        {/* RESULTS */}
        {phase === 'results' && (
          <motion.div key="results" variants={fadeInUp} initial="hidden" animate="show" className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-brand-strong">
              <Icon name="target" className="h-8 w-8" />
            </div>
            <h1 className="mt-4 text-3xl font-extrabold text-fg">
              {scored} / {totalMarks}
            </h1>
            <p className="mt-1 text-lg font-semibold text-muted">
              {totalMarks ? Math.round((scored / totalMarks) * 100) : 0}% on this paper
            </p>
            <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-sm font-bold text-brand-strong">
              <Icon name="sparkles" className="h-4 w-4" />+{earnedXp} XP
            </p>
            <p className="readable mx-auto mt-3 max-w-md text-sm text-muted">
              Logged against {pack.name}, so it feeds your progress and shows up in your weakest
              topics if any of this was shaky.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button as={Link} to="/dashboard">
                <Icon name="home" className="h-5 w-5" />
                Back to dashboard
              </Button>
              <Button variant="secondary" onClick={() => { regenerate(); setPhase('paper') }}>
                <Icon name="refresh" className="h-5 w-5" />
                Another mock
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
