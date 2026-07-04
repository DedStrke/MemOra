import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import WheelLogo from '@/components/ui/WheelLogo'
import Marquee from '@/components/ui/Marquee'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'
import { fadeInUp, staggerContainer, inViewProps } from '@/lib/motion'
import {
  SITE,
  LANDING,
  ADAPTS_FOR,
  STICKY_REVIEWS,
  FAQ_ITEMS,
} from '@/constants/content'
import { useApp } from '@/context/AppProvider'

function AdaptChip({ icon, label }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full border border-line bg-surface py-1.5 pl-1.5 pr-4 text-sm font-medium text-fg">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-soft">
        <Icon name={icon} className="h-4 w-4 text-brand-strong" />
      </span>
      {label}
    </span>
  )
}

// Warm accent backgrounds for the rotated sticky-note reviews, keyed by the
// item's `accent`. Every value is a semantic token so notes recolour per theme.
const NOTE_BG = {
  flash: 'bg-flash-soft',
  quiz: 'bg-quiz-soft',
  paper: 'bg-paper-soft',
  brand: 'bg-brand-soft',
}

function StickyNote({ text, name, accent, tilt }) {
  return (
    <motion.figure
      variants={fadeInUp}
      className={`${NOTE_BG[accent] || 'bg-brand-soft'} ${tilt} rounded-2xl border border-line p-6 shadow-[var(--shadow-lift)] transition-transform duration-200 hover:rotate-0`}
    >
      <blockquote className="readable text-base font-medium leading-relaxed text-fg">
        &ldquo;{text}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-brand-strong">
        {name}
      </figcaption>
    </motion.figure>
  )
}

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="card overflow-hidden">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-fg transition-colors hover:text-brand-strong"
        >
          {item.q}
          <Icon
            name="chevronDown"
            className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="readable px-5 pb-5 text-sm leading-relaxed text-muted">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Landing() {
  const { loggedIn } = useApp()
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Top bar */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-fg">
          <WheelLogo hoverSpin className="h-8 w-8 text-brand" />
          {SITE.name}
        </Link>
        <div className="flex items-center gap-3">
          <Link
            to="/how-it-works"
            className="hidden text-sm font-semibold text-fg transition-colors hover:text-brand-strong sm:inline"
          >
            How it works
          </Link>
          <ThemeSwitcher />
          {loggedIn && (
            <Button as={Link} to="/dashboard" size="sm">
              Go to dashboard
            </Button>
          )}
        </div>
      </header>

      {/* Hero with the slowly-spinning wheel behind the wordmark */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-brand-soft via-page to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[36%] -translate-x-1/2 -translate-y-1/2"
        >
          {/* soft brand glow so the wheel reads as a lit core, not a flat tint */}
          <div className="absolute left-1/2 top-1/2 h-[100vw] max-h-[560px] w-[100vw] max-w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-soft opacity-60 blur-3xl" />
          <WheelLogo
            idle
            idleDuration={38}
            className="relative h-[140vw] max-h-[780px] w-[140vw] max-w-[780px] text-brand opacity-[0.16]"
          />
        </div>

        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative mx-auto max-w-3xl px-5 pt-6 pb-12 text-center sm:pt-8"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-7xl font-extrabold leading-[0.95] tracking-tight text-fg sm:text-[8.5rem]"
          >
            {SITE.name}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-5 text-2xl font-semibold text-brand-strong sm:text-3xl"
          >
            {LANDING.eyebrow}
          </motion.p>
          <motion.p
            variants={fadeInUp}
            className="readable mx-auto mt-5 max-w-xl text-lg text-muted"
          >
            {LANDING.subtitle}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            {loggedIn ? (
              <Button as={Link} to="/dashboard" size="lg">
                Go to dashboard
                <Icon name="arrowRight" className="h-5 w-5" />
              </Button>
            ) : (
              <>
                <Button as={Link} to="/signup" size="lg">
                  {LANDING.primaryCta}
                  <Icon name="arrowRight" className="h-5 w-5" />
                </Button>
                <Button as={Link} to="/login" variant="secondary" size="lg">
                  {LANDING.secondaryCta}
                </Button>
              </>
            )}
          </motion.div>
        </motion.section>

        {/* Highlights (moved up, directly under the hero) */}
        <motion.section
          variants={staggerContainer}
          {...inViewProps}
          className="relative mx-auto max-w-6xl px-5 pt-4 pb-20"
        >
          <div className="grid gap-5 sm:grid-cols-3">
            {LANDING.highlights.map((h) => (
              <motion.div
                key={h.title}
                variants={fadeInUp}
                className="card card-lift p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand-strong">
                  <Icon name={h.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-fg">{h.title}</h3>
                <p className="readable mt-2 text-sm text-muted">{h.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Reviews as rotated sticky notes */}
        <motion.section
          variants={staggerContainer}
          {...inViewProps}
          className="relative mx-auto max-w-6xl px-5 pb-20"
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="kicker">Loved by students</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mt-3 text-center text-3xl font-bold text-fg sm:text-4xl"
          >
            Words from the wall
          </motion.h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {STICKY_REVIEWS.map((r, i) => (
              <StickyNote
                key={r.name}
                text={r.text}
                name={r.name}
                accent={r.accent}
                tilt={i % 2 === 0 ? '-rotate-2' : 'rotate-1'}
              />
            ))}
          </div>
        </motion.section>

        {/* Inclusion strip: capabilities that lap across the page (moved to
            the bottom, just above the FAQ). */}
        <div className="relative py-8">
          <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-muted">
            {LANDING.adaptsEyebrow}
          </p>
          <p className="mx-auto mb-5 max-w-md px-5 text-center text-sm text-muted">
            {LANDING.adaptsSupport}
          </p>
          <Marquee>
            {ADAPTS_FOR.map((a) => (
              <AdaptChip key={a.id} icon={a.icon} label={a.label} />
            ))}
          </Marquee>
        </div>

        {/* FAQ accordion at the very bottom */}
        <motion.section
          variants={staggerContainer}
          {...inViewProps}
          className="relative mx-auto max-w-2xl px-5 pb-24 pt-10"
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="kicker">Good to know</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mt-3 text-center text-3xl font-bold text-fg sm:text-4xl"
          >
            Questions
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-8 space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                open={openFaq === i}
                onToggle={() => setOpenFaq((cur) => (cur === i ? -1 : i))}
              />
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}
