import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Mascot from '@/components/ui/Mascot'
import SpeakButton from '@/components/ui/SpeakButton'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import {
  AFFIRMATIONS,
  GROUNDING,
  SUPPORT_LINES,
  WELLBEING_PAGE as W,
} from '@/constants/content'
import { WELLBEING } from '@/constants/mock'

// One breathing cycle is 14s: 4s in, 4s hold, 6s out (matches the .breathe
// keyframes in index.css).
function phaseFor(seconds) {
  const p = seconds % 14
  if (p < 4) return 'Breathe in'
  if (p < 8) return 'Hold'
  return 'Breathe out'
}

function Breather() {
  const [active, setActive] = useState(false)
  const [phase, setPhase] = useState('Breathe in')
  const [cycles, setCycles] = useState(0)
  const startRef = useRef(0)

  useEffect(() => {
    if (!active) return
    startRef.current = Date.now()
    setPhase('Breathe in')
    setCycles(0)
    const id = setInterval(() => {
      const t = (Date.now() - startRef.current) / 1000
      setPhase(phaseFor(t))
      setCycles(Math.floor(t / 14))
    }, 200)
    return () => clearInterval(id)
  }, [active])

  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col items-center rounded-2xl border border-line bg-brand-soft p-10"
    >
      <div className="relative flex h-64 w-64 items-center justify-center">
        <div
          className={`absolute h-64 w-64 rounded-full bg-brand opacity-25 ${active ? 'breathe-active' : ''}`}
          style={active ? undefined : { transform: 'scale(0.8)' }}
        />
        <div
          className={`absolute h-44 w-44 rounded-full bg-brand opacity-40 ${active ? 'breathe-active' : ''}`}
          style={active ? undefined : { transform: 'scale(0.8)' }}
        />
        <span
          className="relative z-10 text-xl font-bold text-on-brand"
          aria-live="polite"
        >
          {active ? phase : 'Ready?'}
        </span>
      </div>

      <p className="readable mt-6 max-w-sm text-center text-sm text-brand-strong">
        {active
          ? 'Follow the circle. In as it grows, hold, then out as it settles. Stay as long as you like.'
          : 'A slow, guided breath to steady yourself. Four seconds in, four to hold, six to release.'}
      </p>

      <div className="mt-5 flex items-center gap-4">
        <Button onClick={() => setActive((a) => !a)} size="lg">
          <Icon name={active ? 'pause' : 'play'} className="h-5 w-5" />
          {active ? 'Stop' : 'Start breathing'}
        </Button>
        {active && cycles > 0 && (
          <span className="text-sm font-medium text-brand-strong">
            {cycles} {cycles === 1 ? 'breath' : 'breaths'} done
          </span>
        )}
      </div>
    </motion.div>
  )
}

// Rotating kind reminder. Auto-advances gently; a learner can also pull the next
// one or have it read aloud.
function Affirmation() {
  const [i, setI] = useState(0)
  const nextOne = () => setI((n) => (n + 1) % AFFIRMATIONS.length)

  useEffect(() => {
    const id = setInterval(nextOne, 9000)
    return () => clearInterval(id)
  }, [])

  const text = AFFIRMATIONS[i]

  return (
    <motion.div variants={fadeInUp} className="card p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="kicker">
          <Icon name="sparkles" className="h-4 w-4" aria-hidden="true" />
          {W.affirmTitle}
        </span>
        <SpeakButton text={text} label="Read this reminder aloud" />
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="readable mt-4 min-h-[3.5rem] text-xl font-semibold leading-relaxed text-fg"
        >
          {text}
        </motion.p>
      </AnimatePresence>
      <button
        type="button"
        onClick={nextOne}
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-strong hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <Icon name="refresh" className="h-4 w-4" />
        {W.affirmCta}
      </button>
    </motion.div>
  )
}

// 5-4-3-2-1 grounding: step down the senses to pull focus back into the room.
function Grounding() {
  const [step, setStep] = useState(0)
  const done = step >= GROUNDING.length
  const item = GROUNDING[Math.min(step, GROUNDING.length - 1)]

  return (
    <motion.div variants={fadeInUp} className="card flex flex-col p-6">
      <span className="kicker">
        <Icon name="leaf" className="h-4 w-4" aria-hidden="true" />
        {W.groundingTitle}
      </span>
      <p className="readable mt-3 text-sm text-muted">{W.groundingIntro}</p>

      <div className="mt-5 flex items-center gap-2" aria-hidden="true">
        {GROUNDING.map((g, idx) => (
          <span
            key={g.sense}
            className={`h-2 flex-1 rounded-full transition-colors ${
              idx < step ? 'bg-brand' : idx === step ? 'bg-brand-strong' : 'bg-line'
            }`}
          />
        ))}
      </div>

      {done ? (
        <div className="mt-8 flex flex-1 flex-col items-center justify-center text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand-strong">
            <Icon name="check" className="h-7 w-7" />
          </span>
          <p className="readable mt-4 max-w-xs text-lg font-semibold text-fg">
            {W.groundingDone}
          </p>
          <Button variant="secondary" size="sm" className="mt-4" onClick={() => setStep(0)}>
            <Icon name="refresh" className="h-4 w-4" />
            {W.groundingRestart}
          </Button>
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -14 }}
            transition={{ duration: 0.28 }}
            className="mt-6 flex flex-1 flex-col items-center text-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-soft text-brand-strong">
              <Icon name={item.icon} className="h-8 w-8" />
            </span>
            <p className="mt-4 text-5xl font-extrabold tabular-nums text-brand-strong">
              {item.count}
            </p>
            <p className="readable mt-2 max-w-xs text-base font-medium text-fg">
              {item.prompt}
            </p>
            <Button size="lg" className="mt-6" onClick={() => setStep((s) => s + 1)}>
              {step === GROUNDING.length - 1 ? 'Finish' : 'Next'}
              <Icon name="arrowRight" className="h-5 w-5" />
            </Button>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  )
}

export default function MentalHealth() {
  return (
    <Section width="default" animateOnMount className="pt-8 pb-28">
      {/* Back link */}
      <motion.div variants={fadeInUp}>
        <Button as={Link} to="/dashboard" variant="ghost" size="sm">
          <Icon name="arrowLeft" className="h-4 w-4" />
          Dashboard
        </Button>
      </motion.div>

      {/* Header */}
      <motion.div
        variants={fadeInUp}
        className="mt-6 flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <span className="kicker">
            <Icon name="heart" className="h-4 w-4" aria-hidden="true" />
            {W.eyebrow}
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-fg sm:text-4xl">{W.title}</h1>
          <p className="readable mt-2 max-w-xl text-muted">{W.intro}</p>
        </div>
        <Mascot expression="happy" className="h-24 w-24 shrink-0" />
      </motion.div>

      {/* Kind reminder */}
      <div className="mt-8">
        <Affirmation />
      </div>

      {/* Breathing exercise */}
      <motion.h2 variants={fadeInUp} className="mt-10 mb-4 text-xl font-bold text-fg">
        {W.breatheTitle}
      </motion.h2>
      <Breather />

      {/* Grounding */}
      <div className="mt-10">
        <Grounding />
      </div>

      {/* Small resets */}
      <motion.h2 variants={fadeInUp} className="mt-10 mb-4 text-xl font-bold text-fg">
        {W.resetsTitle}
      </motion.h2>
      <motion.div variants={staggerContainer} className="grid gap-4 sm:grid-cols-2">
        {WELLBEING.map((item) => (
          <motion.div
            key={item.title}
            variants={fadeInUp}
            className="flex items-start gap-4 card p-6"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
              <Icon name={item.icon} className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-semibold text-fg">{item.title}</h3>
              <p className="readable mt-1 text-sm text-muted">{item.body}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Reach out for real support */}
      <motion.h2 variants={fadeInUp} className="mt-12 text-xl font-bold text-fg">
        {W.supportTitle}
      </motion.h2>
      <motion.p variants={fadeInUp} className="readable mt-1 text-sm text-muted">
        {W.supportIntro}
      </motion.p>
      <motion.div
        variants={staggerContainer}
        className="mt-4 grid gap-3 sm:grid-cols-2"
      >
        {SUPPORT_LINES.map((s) => (
          <motion.div
            key={s.id}
            variants={fadeInUp}
            className="flex items-start gap-4 card p-5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
              <Icon name={s.icon} className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <h3 className="font-semibold text-fg">{s.name}</h3>
              <p className="readable mt-1 text-sm text-muted">{s.detail}</p>
              {s.action &&
                (s.href ? (
                  <a
                    href={s.href}
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-brand-strong hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    {s.action}
                  </a>
                ) : (
                  <p className="mt-2 text-sm font-bold text-brand-strong">{s.action}</p>
                ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Ready to head back */}
      <motion.div
        variants={fadeInUp}
        className="mt-12 rounded-2xl border border-line bg-brand-soft p-8 text-center"
      >
        <Mascot expression="cheer" className="mx-auto h-16 w-16" />
        <h2 className="mt-3 text-2xl font-bold text-fg">{W.readyTitle}</h2>
        <p className="readable mx-auto mt-2 max-w-md text-brand-strong">{W.readyBody}</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button as={Link} to="/study" size="lg">
            <Icon name="play" className="h-5 w-5" />
            {W.backToStudy}
          </Button>
          <Button as={Link} to="/dashboard" variant="secondary" size="lg">
            {W.backToDashboard}
          </Button>
        </div>
      </motion.div>
    </Section>
  )
}
