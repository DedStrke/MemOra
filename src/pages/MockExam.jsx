import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { getPackByName } from '@/constants/library'
import { EXAM_BOARD_META } from '@/constants/content'
import { useApp } from '@/context/AppProvider'

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
function buildPaper(examQuestions, targetMarks = 40, maxQuestions = 12) {
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

// ~1.5 minutes per mark is the rough rate real A-level papers are timed at,
// rounded to a clean number and floored so a short paper still feels timed.
function suggestedMinutes(totalMarks) {
  return Math.max(20, Math.round((totalMarks * 1.5) / 5) * 5)
}

function formatClock(seconds) {
  const s = Math.max(0, seconds)
  const m = Math.floor(s / 60)
  const r = s % 60
  return `${m}:${String(r).padStart(2, '0')}`
}

function PaperHeader({ subjectLabel, board }) {
  return (
    <div className="mb-6 text-center">
      {board && (
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          {board.board} {board.code}
        </p>
      )}
      <h1 className="mt-1 text-2xl font-extrabold text-fg sm:text-3xl">{subjectLabel}</h1>
      <p className="mt-1 text-sm text-muted">{board?.paper || 'Mixed practice paper'}</p>
    </div>
  )
}

export default function MockExam() {
  const [params] = useSearchParams()
  const { user, sessions, logSession, logAttempt } = useApp()

  const subjectNames =
    user.courseType === 'University' && user.courseName
      ? [user.courseName]
      : (user.subjects || []).map((s) => s.name)

  const paramSubject = params.get('subject')
  const [pickedSubject, setPickedSubject] = useState(
    paramSubject && subjectNames.includes(paramSubject) ? paramSubject : null,
  )
  const subject = paramSubject && subjectNames.includes(paramSubject) ? paramSubject : pickedSubject

  const pack = subject ? getPackByName(subject) : null
  const board =
    (subject && EXAM_BOARD_META[subject]) ||
    (subject && user.subjects?.find((s) => s.name === subject)?.spec
      ? { board: user.subjects.find((s) => s.name === subject).spec, code: '', paper: null }
      : null)

  // paper | running | marking | results
  const [phase, setPhase] = useState('paper')
  const [paper, setPaper] = useState([])
  const [answers, setAnswers] = useState({}) // index -> student's written answer
  const [awarded, setAwarded] = useState({}) // index -> marks self-awarded
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [startedAt, setStartedAt] = useState(null)

  const totalMarks = paper.reduce((sum, q) => sum + q.marks, 0)
  const minutes = suggestedMinutes(totalMarks)

  // Regenerate whenever the subject changes (fresh random paper each visit).
  useEffect(() => {
    if (!pack) return
    const p = buildPaper(pack.examQuestions || [])
    setPaper(p)
    setAnswers({})
    setAwarded({})
    setPhase('paper')
  }, [pack])

  // Countdown, once the paper is actually running.
  useEffect(() => {
    if (phase !== 'running') return undefined
    const id = setInterval(() => setSecondsLeft((s) => Math.max(0, s - 1)), 1000)
    return () => clearInterval(id)
  }, [phase])

  const regenerate = () => {
    if (!pack) return
    setPaper(buildPaper(pack.examQuestions || []))
    setAnswers({})
    setAwarded({})
  }

  const start = () => {
    setSecondsLeft(minutes * 60)
    setStartedAt(Date.now())
    setPhase('running')
  }

  const finishAndMark = () => setPhase('marking')

  const award = (i, value) => setAwarded((a) => ({ ...a, [i]: value }))

  const finishMarking = () => {
    const scored = paper.reduce((sum, q, i) => sum + (awarded[i] ?? 0), 0)
    const pct = totalMarks ? scored / totalMarks : 0
    const usedMinutes = startedAt ? Math.min(180, Math.round((Date.now() - startedAt) / 60000)) : minutes
    logSession({
      subject,
      technique: 'mock-exam',
      difficulty: pct >= 0.8 ? 2 : pct >= 0.5 ? 3 : 4,
      topic: null,
      minutes: usedMinutes,
    })
    paper.forEach((q, i) => {
      const marks = awarded[i] ?? 0
      logAttempt({
        subject,
        topic: q.topic || null,
        technique: 'mock-exam',
        question: q.question,
        correct: marks === q.marks,
        dontKnow: false,
      })
    })
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
          <span className="kicker mx-auto justify-center">Mock exam</span>
          <h1 className="mt-2 text-3xl font-bold text-fg">Which subject?</h1>
        </motion.div>
        <motion.div variants={staggerContainer} className="mt-6 flex flex-wrap justify-center gap-2">
          {subjectNames.map((name) => (
            <motion.button
              key={name}
              variants={fadeInUp}
              type="button"
              onClick={() => setPickedSubject(name)}
              className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-fg transition-colors hover:border-brand hover:bg-brand-soft"
            >
              {name}
            </motion.button>
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
            <PaperHeader subjectLabel={pack?.name || subject} board={board} />

            {paper.length === 0 ? (
              <div className="mx-auto max-w-md py-6 text-center">
                <p className="readable text-muted">
                  No exam questions for {pack?.name || subject} yet, so there is not enough to build a
                  paper from.
                </p>
                <div className="mt-5">
                  <Button as={Link} to={`/study?subject=${encodeURIComponent(subject)}`} variant="secondary" size="sm">
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
                    <p className="text-2xl font-extrabold text-fg">{minutes}</p>
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
              className={`sticky top-2 z-10 mb-6 flex items-center justify-between gap-3 rounded-2xl border px-4 py-3 ${
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
                  <textarea
                    rows={q.marks > 4 ? 6 : 3}
                    value={answers[i] || ''}
                    onChange={(e) => setAnswers((a) => ({ ...a, [i]: e.target.value }))}
                    placeholder="Write your answer..."
                    className="mt-3 w-full resize-none rounded-xl border border-line bg-page px-4 py-3 text-fg placeholder:text-muted focus:border-brand focus:outline-none"
                  />
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
              <span className="kicker mx-auto justify-center">Self-marking</span>
              <h1 className="mt-2 text-2xl font-bold text-fg">Be honest, how did each one go?</h1>
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
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      { label: `Full (${q.marks})`, value: q.marks },
                      { label: `Half (${Math.round(q.marks / 2)})`, value: Math.round(q.marks / 2) },
                      { label: 'None (0)', value: 0 },
                    ].map((opt) => (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => award(i, opt.value)}
                        aria-pressed={awarded[i] === opt.value}
                        className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                          awarded[i] === opt.value
                            ? 'border-brand bg-brand text-on-brand'
                            : 'border-line bg-surface text-fg hover:border-brand'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
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
