import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Mascot from '@/components/ui/Mascot'
import WheelLogo from '@/components/ui/WheelLogo'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'
import { fadeInUp, staggerContainer, inViewProps } from '@/lib/motion'
import { SITE, MARKETING, REVIEWS } from '@/constants/content'
import { useApp } from '@/context/AppProvider'

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon
          key={i}
          name="star"
          className={`h-4 w-4 ${i < rating ? 'text-paper' : 'text-muted opacity-40'}`}
        />
      ))}
    </div>
  )
}

export default function HowItWorks() {
  const { loggedIn } = useApp()
  const startTo = loggedIn ? '/dashboard' : '/signup'

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Top bar */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold text-fg">
          <WheelLogo idle idleDuration={34} className="h-8 w-8 text-brand" />
          {SITE.name}
        </Link>
        <div className="flex items-center gap-3">
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

      {/* Hero */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[440px] bg-gradient-to-b from-brand-soft via-page to-transparent"
        />
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative mx-auto max-w-3xl px-5 pt-14 pb-10 text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-sm font-semibold text-brand-strong backdrop-blur"
          >
            <Icon name="sparkles" className="h-4 w-4" />
            {MARKETING.hero.eyebrow}
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-extrabold tracking-tight text-fg sm:text-6xl"
          >
            {MARKETING.hero.title}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="readable mx-auto mt-5 max-w-2xl text-lg text-muted"
          >
            {MARKETING.hero.subtitle}
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button as={Link} to={startTo} size="lg">
              {MARKETING.hero.primaryCta}
              <Icon name="arrowRight" className="h-5 w-5" />
            </Button>
            <Button as="a" href="#how-it-works" variant="secondary" size="lg">
              {MARKETING.hero.secondaryCta}
            </Button>
          </motion.div>
        </motion.section>
      </div>

      {/* What it does */}
      <motion.section
        {...inViewProps}
        variants={staggerContainer}
        className="mx-auto max-w-6xl px-5 py-16"
      >
        <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-fg sm:text-4xl">
            {MARKETING.whatItDoes.heading}
          </h2>
          <p className="readable mt-3 text-muted">{MARKETING.whatItDoes.intro}</p>
        </motion.div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MARKETING.whatItDoes.items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="rounded-2xl border border-line bg-surface p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-fg">{item.title}</h3>
              <p className="readable mt-1.5 text-sm text-muted">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* How it works */}
      <div id="how-it-works" className="bg-raised/50">
        <motion.section
          {...inViewProps}
          variants={staggerContainer}
          className="mx-auto max-w-6xl px-5 py-16"
        >
          <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-fg sm:text-4xl">
              {MARKETING.howItWorks.heading}
            </h2>
            <p className="readable mt-3 text-muted">{MARKETING.howItWorks.intro}</p>
          </motion.div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {MARKETING.howItWorks.steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                className="relative rounded-2xl border border-line bg-surface p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </span>
                  <span className="text-3xl font-extrabold text-brand-soft" aria-hidden="true">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-bold text-fg">{step.title}</h3>
                <p className="readable mt-1.5 text-sm text-muted">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Reviews */}
      <motion.section
        {...inViewProps}
        variants={staggerContainer}
        className="mx-auto max-w-6xl px-5 py-16"
      >
        <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-fg sm:text-4xl">{REVIEWS.heading}</h2>
          <p className="readable mt-3 text-muted">{REVIEWS.intro}</p>
        </motion.div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.items.map((r) => (
            <motion.figure
              key={r.id}
              variants={fadeInUp}
              className="flex flex-col rounded-2xl border border-line bg-surface p-6"
            >
              <Stars rating={r.rating} />
              <blockquote className="readable mt-3 flex-1 text-sm text-fg">
                {r.quote}
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-line pt-4">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-lg"
                >
                  {r.avatar}
                </span>
                <div>
                  <p className="text-sm font-semibold text-fg">{r.name}</p>
                  <p className="text-xs text-muted">{r.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.section>

      {/* Closing CTA */}
      <motion.section
        {...inViewProps}
        variants={staggerContainer}
        className="mx-auto max-w-3xl px-5 pb-24 pt-4 text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="rounded-3xl border border-line bg-brand-soft px-6 py-12"
        >
          <Mascot expression="cheer" className="mx-auto h-20 w-20" />
          <h2 className="mt-4 text-3xl font-extrabold text-fg">{MARKETING.closing.title}</h2>
          <p className="readable mx-auto mt-3 max-w-xl text-muted">{MARKETING.closing.body}</p>
          <div className="mt-7">
            <Button as={Link} to={startTo} size="lg">
              {MARKETING.closing.cta}
              <Icon name="arrowRight" className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}
