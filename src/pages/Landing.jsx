import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import EyeMark from '@/components/ui/EyeMark'
import AtmosphereBackground from '@/components/ui/AtmosphereBackground'
import Footer from '@/components/layout/Footer'
import Wordmark from '@/components/ui/Wordmark'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'
import { fadeInUp, staggerContainer, inViewProps } from '@/lib/motion'
import { useApp } from '@/context/AppProvider'
import { LANDING, LANDING_SUBJECTS, SITE } from '@/constants/content'

const ROTATE_WINDOW = 4
const ROTATE_INTERVAL = 2200

/*
  Independent vertical slots, each cycling its own subject. Odd slots run
  downward (new enters from the top) while even slots run upward (new enters
  from below), and each slot is offset in both its starting subject and its
  tick phase - so they never flip in unison and the row stays alive without
  feeling busy.

  Slots rather than one shared row because a single row of N names has to
  fit N names side by side, which is what made this congested on narrow
  screens; here each slot only ever renders one name at a time.
*/
function SubjectSlot({ offset, direction, phase }) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const start = setTimeout(() => {
      setStep((s) => s + 1)
    }, phase)
    const id = setInterval(() => setStep((s) => s + 1), ROTATE_INTERVAL)
    return () => {
      clearTimeout(start)
      clearInterval(id)
    }
  }, [phase])

  const subject =
    LANDING_SUBJECTS[(offset + step * ROTATE_WINDOW) % LANDING_SUBJECTS.length]
  const enterY = direction === 'down' ? -22 : 22
  const exitY = direction === 'down' ? 22 : -22

  return (
    <div className="relative h-7 flex-1 overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={subject}
          initial={{ opacity: 0, y: enterY }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: exitY }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center whitespace-nowrap text-center text-[13px] font-medium text-muted sm:text-sm"
        >
          {subject}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

function RotatingSubjects() {
  return (
    <div className="mx-auto mt-8 flex w-full flex-col items-center">
      <span className="kicker justify-center">Every subject</span>
      {/* Two slots on phones, four once there's room - so names never crowd. */}
      <div className="mt-3 flex w-full max-w-md items-center gap-3 sm:max-w-2xl sm:gap-6">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={i >= 2 ? 'hidden flex-1 sm:flex' : 'flex flex-1'}>
            <SubjectSlot
              offset={i * 4}
              direction={i % 2 === 0 ? 'up' : 'down'}
              phase={i * 520}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

/*
  Collapsing header: transparent and edge-to-edge at the very top of the
  page (so it reads as part of the atmosphere, not a bar sitting on top of
  it), then fades in a glass panel and floats as an inset pill once the
  learner scrolls. A discrete "past the threshold" boolean driving plain CSS
  transitions, not a continuous per-pixel scroll-linked style - recalculating
  an animated border-radius on a backdrop-filter layer every scroll frame is
  expensive enough to desync the sticky header from the page on scroll.
*/
function CollapsingHeader() {
  const { account } = useApp()
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 overflow-hidden transition-[margin] duration-300 ease-out ${
        scrolled ? 'mx-4 mt-3' : 'mx-0 mt-0'
      }`}
    >
      <div
        className={`glass-strong absolute inset-0 transition-[opacity,border-radius] duration-300 ease-out ${
          scrolled ? '!rounded-3xl opacity-100' : '!rounded-none opacity-0'
        }`}
      />
      <div
        className={`relative mx-auto flex max-w-6xl items-center justify-between px-5 transition-[padding] duration-300 ease-out ${
          scrolled ? 'py-3' : 'py-[30px]'
        }`}
      >
        <Link to={account ? '/dashboard' : '/'} className="flex items-center gap-2 text-xl font-semibold text-fg">
          <div className={`origin-left transition-transform duration-300 ease-out ${scrolled ? 'scale-[0.8]' : 'scale-100'}`}>
            <EyeMark pulseOnHover pulseOnClick className="h-8 w-8 text-brand" />
          </div>
          <div className={`origin-left transition-transform duration-300 ease-out ${scrolled ? 'scale-[0.8]' : 'scale-100'}`}>
            <Wordmark />
          </div>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            to="/how-it-works"
            className="hidden text-sm font-semibold text-fg transition-colors hover:text-brand-strong sm:inline"
          >
            How it works
          </Link>
          <ThemeSwitcher />
          <Button as={Link} to={account ? '/dashboard' : '/signin'} size="sm">
            {account ? (
              <>
                <span className="hidden sm:inline">Go to dashboard</span>
                <span className="sm:hidden">Dashboard</span>
              </>
            ) : (
              'Sign in'
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}

/*
  A stylised mockup of the real dashboard - built from the same tokens and
  components as the real thing (glass, kicker, the brand->paper gradient
  heading), not a screenshot, so it never goes stale and re-themes live with
  the rest of the page. Sits in a "browser window" frame with a soft glow
  behind it, echoing the reference site's product-preview treatment.
*/
function DashboardPreview() {
  const subjects = [
    { icon: '💻', name: 'Computer Science', pct: 65 },
    { icon: '➗', name: 'Maths', pct: 40 },
    { icon: '📈', name: 'Economics', pct: 78 },
  ]

  return (
    <motion.div variants={fadeInUp} className="relative mx-auto w-full max-w-4xl">
      <div
        className="pointer-events-none absolute -inset-12 -z-10 rounded-[3rem] opacity-70 blur-[90px]"
        style={{ background: 'radial-gradient(closest-side, var(--brand), transparent)' }}
        aria-hidden="true"
      />
      <div className="glass-strong overflow-hidden rounded-[1.75rem] p-2 shadow-2xl sm:p-3">
        <div className="flex items-center gap-1.5 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
        </div>

        <div className="rounded-2xl bg-page/70 p-4 sm:p-7">
          {/* Mini hero */}
          <div className="glass rounded-2xl p-5 sm:p-7">
            <span className="kicker text-[0.62rem]">
              <Icon name="sparkles" className="h-3 w-3" />
              Welcome back
            </span>
            <p className="mt-2 text-xl font-extrabold leading-tight text-fg sm:text-2xl">
              Hi Alex,{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(100deg, var(--brand-strong), var(--paper))' }}
              >
                let&rsquo;s make today count.
              </span>
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-xs font-bold text-on-brand">
                <Icon name="play" className="h-3.5 w-3.5" />
                Start a study session
              </span>
              <div className="ml-auto flex gap-2">
                {[
                  ['activity', '4'],
                  ['target', '12h'],
                  ['cap', '23'],
                ].map(([icon, value]) => (
                  <span
                    key={icon}
                    className="glass flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-fg"
                  >
                    <Icon name={icon} className="h-3.5 w-3.5 text-brand-strong" />
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Mini subject cards */}
          <div className="mt-4 grid grid-cols-3 gap-3">
            {subjects.map((s) => (
              <div key={s.name} className="glass rounded-xl p-3 sm:p-4">
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg" aria-hidden="true">
                    {s.icon}
                  </span>
                  <p className="truncate text-xs font-bold text-fg sm:text-sm">{s.name}</p>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-raised">
                  <div
                    className="h-full rounded-full bg-brand"
                    style={{ width: `${s.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function StoryBlock({ index, icon, kicker, title, body }) {
  return (
    <motion.div variants={fadeInUp} className="mx-auto flex max-w-lg flex-col items-center text-center">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-brand-soft text-brand-strong">
        <Icon name={icon} className="h-7 w-7" />
      </span>
      <span className="kicker mt-5">
        0{index} &middot; {kicker}
      </span>
      <h3 className="mt-3 text-2xl font-bold text-fg sm:text-3xl">{title}</h3>
      <p className="readable mt-3 text-muted">{body}</p>
    </motion.div>
  )
}

export default function Landing() {
  const { account } = useApp()

  return (
    <div className="relative min-h-screen">
      <AtmosphereBackground />
      <CollapsingHeader />

      {/* Hero - centered, one-line subtitle, matching the reference layout */}
      <section
        className="relative z-10 mx-auto flex min-h-[82vh] w-full max-w-3xl flex-col items-center justify-center px-5 py-14 text-center sm:py-16"
        style={{ textShadow: '0 2px 24px color-mix(in srgb, var(--page) 75%, transparent)' }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex w-full flex-col items-center"
        >
          <motion.h1 variants={fadeInUp}>
            <Wordmark size="hero" className="items-center" />
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-3 text-balance text-lg font-semibold text-fg sm:text-xl"
          >
            {LANDING.tagline}
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-full text-balance text-sm text-muted sm:whitespace-nowrap sm:text-base"
          >
            {LANDING.subtitleLead}{' '}
            <span className="rounded-full bg-raised px-2.5 py-1 font-semibold text-fg">
              {LANDING.subtitleHighlight}.
            </span>
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex w-full flex-col items-center justify-center gap-5 sm:w-auto sm:flex-row"
          >
            <Button as={Link} to={account ? '/dashboard' : '/signin'} size="lg">
              {account ? LANDING.primaryCtaSignedIn : LANDING.primaryCta}
              <Icon name="arrowRight" className="h-5 w-5" />
            </Button>
            <Button as={Link} to="/how-it-works" variant="link" className="text-base font-semibold">
              {LANDING.secondaryCta}
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-3 text-xs text-muted">
            Free · no card required
          </motion.p>

          <motion.div variants={fadeInUp} className="w-full">
            <RotatingSubjects />
          </motion.div>
        </motion.div>
      </section>

      {/* Product preview - shows the real dashboard's look (as a live-token
          mockup, not a screenshot) so visitors see what they're signing up
          for before the pitch below. */}
      <motion.section
        variants={staggerContainer}
        {...inViewProps}
        className="relative z-10 mx-auto max-w-5xl px-5 pb-28"
      >
        <motion.div variants={fadeInUp} className="mb-10 text-center">
          <span className="kicker mx-auto justify-center">Take a look inside</span>
          <h2 className="mt-3 text-3xl font-bold text-fg sm:text-4xl">Your dashboard, at a glance</h2>
        </motion.div>
        <DashboardPreview />
      </motion.section>

      {/* What it does - a short, centered scroll-story, replacing the old
          cards/reviews/marquee/FAQ wall for something closer to the
          reference's restraint. */}
      <motion.section
        variants={staggerContainer}
        {...inViewProps}
        className="relative z-10 mx-auto max-w-4xl space-y-16 px-5 pb-32 pt-8"
        style={{ textShadow: '0 2px 20px color-mix(in srgb, var(--page) 70%, transparent)' }}
      >
        <motion.div variants={fadeInUp} className="text-center">
          <span className="kicker mx-auto justify-center">What {SITE.name} does</span>
        </motion.div>

        <StoryBlock
          index={1}
          icon="cards"
          kicker="The content"
          title="Deep, spec-matched content"
          body="Notes, flashcards, and questions built topic by topic against the real specification, not a generic summary."
        />
        <StoryBlock
          index={2}
          icon="target"
          kicker="The plan"
          title="A plan that adapts"
          body="Sessions notice when a topic was tough last time and ease you back in, so revision meets you where you are."
        />
        <StoryBlock
          index={3}
          icon="activity"
          kicker="The progress"
          title="Progress you can see"
          body="Real per-subject and per-chapter tracking from what you've actually answered, not seeded demo numbers."
        />

        <motion.div variants={fadeInUp} className="flex justify-center pt-4">
          <Button as={Link} to="/dashboard" size="lg">
            Start studying
            <Icon name="arrowRight" className="h-5 w-5" />
          </Button>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  )
}
