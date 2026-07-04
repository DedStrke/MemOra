import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import WheelLogo from '@/components/ui/WheelLogo'
import Marquee from '@/components/ui/Marquee'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { SITE, LANDING, ADAPTS_FOR } from '@/constants/content'
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

export default function Landing() {
  const { loggedIn } = useApp()

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
          {loggedIn ? (
            <Button as={Link} to="/dashboard" size="sm">
              Go to dashboard
            </Button>
          ) : (
            <>
              <Button as={Link} to="/login" variant="ghost" size="sm">
                Log in
              </Button>
              <Button as={Link} to="/signup" size="sm">
                Get started
              </Button>
            </>
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
          className="pointer-events-none absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2"
        >
          {/* soft brand glow so the wheel reads as a lit core, not a flat tint */}
          <div className="absolute left-1/2 top-1/2 h-[100vw] max-h-[560px] w-[100vw] max-w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-soft opacity-60 blur-3xl" />
          <WheelLogo
            idle
            idleDuration={38}
            className="relative h-[130vw] max-h-[720px] w-[130vw] max-w-[720px] text-brand opacity-[0.16]"
          />
        </div>

        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative mx-auto max-w-3xl px-5 pt-16 pb-14 text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-sm font-semibold text-brand-strong backdrop-blur"
          >
            <Icon name="sparkles" className="h-4 w-4" />
            {LANDING.eyebrow}
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-6xl font-extrabold tracking-tight text-fg sm:text-8xl"
          >
            {SITE.name}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-xl font-semibold text-fg sm:text-2xl"
          >
            {LANDING.slogan}
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

        {/* Inclusion strip: capabilities that lap across the page. */}
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

        {/* Highlights */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto max-w-6xl px-5 pt-6 pb-24"
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
      </div>
    </div>
  )
}
