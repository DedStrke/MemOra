import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Mascot from '@/components/ui/Mascot'
import { fadeInUp, staggerContainer } from '@/lib/motion'
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
          <h1 className="text-3xl font-extrabold text-fg sm:text-4xl">
            Take a moment for you
          </h1>
          <p className="readable mt-2 text-muted">
            Studying hard matters, but so do you. A calm mind learns better, so pause,
            breathe, and be kind to yourself.
          </p>
        </div>
        <Mascot expression="happy" className="h-24 w-24 shrink-0" />
      </motion.div>

      {/* Breathing exercise */}
      <div className="mt-8">
        <Breather />
      </div>

      {/* Wellbeing prompts */}
      <motion.h2 variants={fadeInUp} className="mt-10 mb-4 text-xl font-bold text-fg">
        Small resets
      </motion.h2>
      <motion.div variants={staggerContainer} className="grid gap-4 sm:grid-cols-2">
        {WELLBEING.map((item) => (
          <motion.div
            key={item.title}
            variants={fadeInUp}
            className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-6"
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

      {/* Gentle footer note */}
      <motion.div
        variants={fadeInUp}
        className="mt-8 flex items-center gap-3 rounded-2xl border border-line bg-raised p-6"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
          <Icon name="heart" className="h-5 w-5" />
        </span>
        <p className="readable text-sm text-muted">
          If things feel heavy, that is okay and you are not alone. Talk to someone you
          trust, and take the next small step at your own pace.
        </p>
      </motion.div>
    </Section>
  )
}
