import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Mascot from '@/components/ui/Mascot'
import RevisionRunner from '@/components/ui/RevisionRunner'
import { fadeInUp, popIn } from '@/lib/motion'
import { MOODS, SESSION_MESSAGES, STUDY_TECHNIQUES } from '@/constants/content'
import { getPackByName } from '@/constants/library'
import { useApp } from '@/context/AppProvider'

// DEMO: a study block is 2 minutes so the mid-session check-in is quick to show.
// In production this would be 25 * 60 (a full pomodoro). You can also check in
// early at any time with the "Check in" button.
const BLOCK_SECONDS = 120

function TimerRing({ remaining, duration, label, phase = 'focus' }) {
  const R = 82
  const C = 2 * Math.PI * R
  const pct = duration > 0 ? remaining / duration : 0
  const mm = Math.floor(remaining / 60)
  const ss = String(remaining % 60).padStart(2, '0')
  return (
    <div
      className="relative mx-auto h-52 w-52"
      role="timer"
      aria-label={`${label}: ${remaining} seconds remaining`}
    >
      <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
        <circle cx="100" cy="100" r={R} className="stroke-raised" strokeWidth="12" fill="none" />
        <circle
          cx="100"
          cy="100"
          r={R}
          className={phase === 'break' ? 'stroke-quiz' : 'stroke-brand'}
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - pct)}
          style={{ transition: 'stroke-dashoffset 0.5s linear' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold tabular-nums text-fg">
          {mm}:{ss}
        </span>
        <span className="mt-1 text-sm font-medium text-muted">{label}</span>
      </div>
    </div>
  )
}

function Stars({ value, onRate, max = 5 }) {
  return (
    <div className="flex items-center justify-center gap-1.5">
      {Array.from({ length: max }, (_, i) => {
        const n = i + 1
        return (
          <button
            key={n}
            type="button"
            onClick={() => onRate(n)}
            aria-label={`${n} star${n > 1 ? 's' : ''}`}
            className={`transition-transform hover:scale-110 ${
              n <= value ? 'text-paper' : 'text-muted'
            }`}
          >
            <Icon name="star" filled={n <= value} className="h-9 w-9" />
          </button>
        )
      })}
    </div>
  )
}

export default function StudySession() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const { user, setRecentTopic } = useApp()

  const subject =
    params.get('subject') ||
    user?.subjects?.find((s) => s.priority)?.name ||
    user?.subjects?.[0]?.name ||
    user?.courseName ||
    'Revision'
  const technique = params.get('technique') || 'flashcards'
  const pack = getPackByName(subject)
  const techniqueLabel =
    STUDY_TECHNIQUES.find((t) => t.id === technique)?.label || 'Focus'

  // mood | ready | running | checkin | breakSetup | break | done
  const [phase, setPhase] = useState('mood')
  const [mood, setMood] = useState(null)
  const [duration, setDuration] = useState(BLOCK_SECONDS)
  const [remaining, setRemaining] = useState(BLOCK_SECONDS)
  const [running, setRunning] = useState(false)
  const [rating, setRating] = useState(0) // mid-session check-in
  const [breakMins, setBreakMins] = useState(5)
  const endRef = useRef(0)
  const phaseRef = useRef(phase)
  useEffect(() => {
    phaseRef.current = phase
  }, [phase])

  const startBlock = () => {
    setRating(0)
    setDuration(BLOCK_SECONDS)
    setRemaining(BLOCK_SECONDS)
    endRef.current = Date.now() + BLOCK_SECONDS * 1000
    setRunning(true)
    setPhase('running')
  }
  const startBreak = (mins) => {
    const secs = mins * 60
    setDuration(secs)
    setRemaining(secs)
    endRef.current = Date.now() + secs * 1000
    setRunning(true)
    setPhase('break')
  }
  const finish = () => {
    setRunning(false)
    setPhase('done')
  }

  // Countdown loop.
  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      const left = Math.max(0, Math.round((endRef.current - Date.now()) / 1000))
      setRemaining(left)
      if (left <= 0) {
        clearInterval(id)
        setRunning(false)
        if (phaseRef.current === 'break') startBlock()
        else setPhase('checkin')
      }
    }, 250)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running])

  const moodMsg =
    SESSION_MESSAGES[user?.goal?.choice || 'custom']?.[mood] ||
    'Let us make this session count.'

  const rateDifficulty = (n) => {
    setRecentTopic(`${subject} · ${techniqueLabel}`)
    setPhase(`done-${n}`)
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
        {/* MOOD */}
        {phase === 'mood' && (
          <motion.div key="mood" variants={fadeInUp} initial="hidden" animate="show" exit={{ opacity: 0 }} className="text-center">
            <Mascot expression="happy" className="mx-auto h-20 w-20" />
            <h1 className="mt-3 text-3xl font-bold text-fg">How are you feeling?</h1>
            <p className="readable mt-2 text-muted">
              We will shape this session around it. About to study{' '}
              <span className="font-semibold text-fg">{subject}</span>.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {MOODS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => {
                    setMood(m.id)
                    setPhase('ready')
                  }}
                  className="card card-lift p-6 hover:border-brand hover:bg-brand-soft"
                >
                  <span className="text-4xl">{m.emoji}</span>
                  <span className="mt-2 block font-semibold text-fg">{m.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* READY: goal-referenced message */}
        {phase === 'ready' && (
          <motion.div key="ready" variants={fadeInUp} initial="hidden" animate="show" exit={{ opacity: 0 }} className="text-center">
            <motion.div initial={{ scale: 0.8, rotate: -6 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
              <Mascot expression="cheer" className="mx-auto h-24 w-24" />
            </motion.div>
            <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-brand-strong">
              {MOODS.find((m) => m.id === mood)?.label} today
            </p>
            <h1 className="readable mx-auto mt-2 max-w-md text-2xl font-bold text-fg">
              {moodMsg}
            </h1>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button onClick={startBlock} size="lg">
                <Icon name="play" className="h-5 w-5" />
                Start studying {subject}
              </Button>
              <Button as={Link} to="/mental-health" variant="secondary" size="lg">
                <Icon name="heart" className="h-5 w-5" />
                Visit wellbeing
              </Button>
            </div>
          </motion.div>
        )}

        {/* RUNNING: compact timer bar + real revision content */}
        {phase === 'running' && (
          <motion.div key="running" variants={fadeInUp} initial="hidden" animate="show" exit={{ opacity: 0 }}>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 card p-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                  Studying · {techniqueLabel}
                </p>
                <h1 className="truncate text-xl font-bold text-fg">{subject}</h1>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="flex items-center gap-2 rounded-xl bg-raised px-3 py-2"
                  role="timer"
                  aria-label={`${remaining} seconds remaining`}
                >
                  <Icon name="activity" className="h-4 w-4 text-brand-strong" />
                  <span className="text-lg font-bold tabular-nums text-fg">
                    {Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, '0')}
                  </span>
                </span>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    if (running) setRunning(false)
                    else {
                      endRef.current = Date.now() + remaining * 1000
                      setRunning(true)
                    }
                  }}
                >
                  <Icon name={running ? 'pause' : 'play'} className="h-4 w-4" />
                  {running ? 'Pause' : 'Resume'}
                </Button>
                <Button size="sm" onClick={() => setPhase('checkin')}>
                  Check in
                </Button>
              </div>
            </div>

            {pack ? (
              <RevisionRunner pack={pack} technique={technique} />
            ) : (
              <div className="py-6 text-center">
                <TimerRing remaining={remaining} duration={duration} label="Focus time" />
                <p className="readable mx-auto mt-6 max-w-sm text-muted">
                  Focus on {subject}. When the timer is up we will check in on how it is
                  going.
                </p>
              </div>
            )}
          </motion.div>
        )}

        {/* CHECK-IN */}
        {phase === 'checkin' && (
          <motion.div key="checkin" variants={fadeInUp} initial="hidden" animate="show" exit={{ opacity: 0 }} className="text-center">
            <Mascot expression="happy" className="mx-auto h-16 w-16" />
            <h1 className="mt-3 text-2xl font-bold text-fg sm:text-3xl">
              How are you getting on?
            </h1>
            <p className="readable mt-2 text-muted">Rate this stretch from 1 to 5.</p>
            <div className="mt-6">
              <Stars value={rating} onRate={setRating} />
            </div>

            {rating > 0 && (
              <motion.div variants={popIn} initial="hidden" animate="show" className="mt-8">
                {rating < 3 && (
                  <p className="readable mb-4 text-muted">
                    That sounds tough. A short break can really help.
                  </p>
                )}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {rating < 3 && (
                    <Button onClick={() => setPhase('breakSetup')}>
                      <Icon name="heart" className="h-5 w-5" />
                      Take a break
                    </Button>
                  )}
                  <Button onClick={startBlock} variant={rating < 3 ? 'secondary' : 'primary'}>
                    <Icon name="play" className="h-5 w-5" />
                    Keep going
                  </Button>
                  <Button onClick={finish} variant="ghost">
                    Finish session
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* BREAK SETUP */}
        {phase === 'breakSetup' && (
          <motion.div key="breakSetup" variants={fadeInUp} initial="hidden" animate="show" exit={{ opacity: 0 }} className="text-center">
            <h1 className="text-2xl font-bold text-fg sm:text-3xl">Take a breather</h1>
            <p className="readable mt-2 text-muted">How long do you need?</p>
            <div className="mt-6 flex items-center justify-center gap-2">
              {[3, 5, 10].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setBreakMins(m)}
                  className={`rounded-2xl border px-6 py-4 font-bold transition-colors ${
                    breakMins === m
                      ? 'border-brand bg-brand-soft text-brand-strong'
                      : 'border-line bg-surface text-fg hover:border-brand'
                  }`}
                >
                  {m} min
                </button>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button onClick={() => startBreak(breakMins)} size="lg">
                Start break
              </Button>
              <Button as={Link} to="/mental-health" variant="secondary">
                <Icon name="heart" className="h-5 w-5" />
                Wellbeing ideas
              </Button>
            </div>
          </motion.div>
        )}

        {/* BREAK */}
        {phase === 'break' && (
          <motion.div key="break" variants={fadeInUp} initial="hidden" animate="show" exit={{ opacity: 0 }} className="text-center">
            <h1 className="text-2xl font-bold text-fg sm:text-3xl">On a break</h1>
            <p className="readable mt-2 text-muted">Stretch, breathe, grab some water.</p>
            <div className="mt-8">
              <TimerRing remaining={remaining} duration={duration} label="Break time" phase="break" />
            </div>
            <div className="mt-8">
              <Button onClick={startBlock} variant="secondary">
                <Icon name="play" className="h-5 w-5" />
                Back to studying
              </Button>
            </div>
          </motion.div>
        )}

        {/* DONE: difficulty rating */}
        {phase === 'done' && (
          <motion.div key="done" variants={fadeInUp} initial="hidden" animate="show" exit={{ opacity: 0 }} className="text-center">
            <Mascot expression="cheer" className="mx-auto h-24 w-24" />
            <h1 className="mt-3 text-2xl font-bold text-fg sm:text-3xl">
              Nice work on {subject}!
            </h1>
            <p className="readable mt-2 text-muted">
              How difficult was this session, out of 5?
            </p>
            <div className="mt-6">
              <Stars value={0} onRate={rateDifficulty} />
            </div>
          </motion.div>
        )}

        {/* DONE confirmation (after difficulty rating) */}
        {phase.startsWith('done-') && (
          <motion.div key="saved" variants={fadeInUp} initial="hidden" animate="show" className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-quiz-soft text-quiz">
              <Icon name="check" className="h-8 w-8" />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-fg">Session saved</h1>
            <p className="readable mt-2 text-muted">
              You rated it {phase.split('-')[1]}/5 difficulty. Rest up and come back soon.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button as={Link} to="/dashboard">
                <Icon name="home" className="h-5 w-5" />
                Back to dashboard
              </Button>
              <Button
                variant="secondary"
                onClick={() => {
                  setPhase('mood')
                  setMood(null)
                }}
              >
                <Icon name="refresh" className="h-5 w-5" />
                Another session
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
