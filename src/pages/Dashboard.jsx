import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import CountdownCard from '@/components/dashboard/CountdownCard'
import SubjectPillars from '@/components/dashboard/SubjectPillars'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { useApp } from '@/context/AppProvider'
import { FEATURES, STUDY_TECHNIQUES } from '@/constants/content'
import { getPackByName } from '@/constants/library'
import { subjectMetrics, studyStreak } from '@/lib/sessions'
import { slugify } from '@/lib/slug'

// A technique is offered only if the subject's pack actually has content for
// it, so nobody lands on an empty "no MCQs yet" dead end.
function techniqueHasContent(pack, techniqueId) {
  if (!pack) return true
  switch (techniqueId) {
    case 'mcq':
      return pack.mcq?.length > 0
    case 'exam-questions':
      return pack.examQuestions?.length > 0
    case 'notes':
      return Object.keys(pack.notes || {}).length > 0
    case 'flashcards':
    case 'active-recall':
    case 'blurting':
    default:
      return pack.flashcards?.length > 0
  }
}

const FEATURE_ACCENT = {
  flash: 'bg-flash-soft text-flash',
  quiz: 'bg-quiz-soft text-quiz',
  paper: 'bg-paper-soft text-paper',
  brand: 'bg-brand-soft text-brand-strong',
  success: 'bg-success/15 text-success',
}

function StatPill({ icon, value, label }) {
  return (
    <div className="glass flex min-w-[6rem] flex-1 flex-col items-center gap-1 rounded-2xl px-4 py-4 text-center sm:min-w-[7rem] sm:flex-none sm:px-6">
      <Icon name={icon} className="h-5 w-5 text-brand-strong" />
      <p className="text-2xl font-extrabold text-fg">{value}</p>
      <p className="text-xs font-semibold text-muted">{label}</p>
    </div>
  )
}

export default function Dashboard() {
  const { user, recentTopic, sessions } = useApp()
  const heroSubtitle = user.bio?.trim() || 'Those top grades are within reach. Let’s make today count.'

  // What can they study, and which one is selected in the technique picker.
  const subjectNames =
    user.courseType === 'University' && user.courseName
      ? [user.courseName]
      : (user.subjects || []).map((s) => s.name)
  const defaultSubject =
    user.subjects?.find((s) => s.priority)?.name || subjectNames[0] || 'Revision'
  const [studySubject, setStudySubject] = useState(defaultSubject)
  const activeSubject = subjectNames.includes(studySubject) ? studySubject : defaultSubject
  const activePack = getPackByName(activeSubject)

  // Real, aggregate stats for the hero strip - summed across every subject
  // from actual logged sessions, same honesty rule as the subject cards.
  const streak = studyStreak(sessions)
  const totalHours = Math.round(
    subjectNames.reduce((sum, n) => sum + subjectMetrics(sessions, n).hours, 0) * 10,
  ) / 10
  const totalChapters = subjectNames.reduce(
    (sum, n) => sum + subjectMetrics(sessions, n).chaptersCovered,
    0,
  )

  return (
    <div className="relative">
      {/* Ambient glow, fixed behind the whole page so the glass surfaces below
          have something to catch and refract as the page scrolls past them. */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="float-slow absolute -top-32 left-[8%] h-96 w-96 rounded-full bg-brand/20 blur-[110px]" />
        <div className="float-slow-alt absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-paper/15 blur-[110px]" />
        <div className="float-slow absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-quiz/10 blur-[110px]" />
      </div>

      <Section width="wide" animateOnMount className="pt-8 pb-28">
        {/* Hero */}
        <motion.div
          variants={fadeInUp}
          className="glass-strong relative overflow-hidden rounded-[2rem] p-8 sm:p-12"
        >
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="kicker">
                <Icon name="sparkles" className="h-4 w-4" />
                Welcome back
              </span>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] text-fg sm:text-5xl lg:text-6xl">
                Hi {user.name},
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(100deg, var(--brand-strong), var(--paper))' }}
                >
                  let&rsquo;s make today count.
                </span>
              </h1>
              <p className="readable mt-4 max-w-md text-lg leading-relaxed text-muted">{heroSubtitle}</p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Button as={Link} to="/study" size="lg" className="shrink-0">
                  <Icon name="play" className="h-5 w-5" />
                  Start a study session
                </Button>
                <Button as={Link} to="/progress" variant="link" className="text-base font-semibold">
                  See your progress
                  <Icon name="arrowRight" className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:flex-nowrap sm:gap-4">
              <StatPill icon="activity" value={`${streak}`} label="day streak" />
              <StatPill icon="target" value={`${totalHours}h`} label="hours logged" />
              <StatPill icon="cap" value={`${totalChapters}`} label="chapters covered" />
            </div>
          </div>
        </motion.div>

        {/* Exam countdown */}
        <div className="mt-6">
          <CountdownCard />
        </div>

      {/* Subjects */}
      <motion.div
        variants={fadeInUp}
        className="mt-14 mb-5 flex items-end justify-between gap-4"
      >
        <div>
          <span className="kicker">On your plate</span>
          <h2 className="mt-2 text-2xl font-bold text-fg">Your subjects</h2>
        </div>
        <Button as={Link} to="/courses" variant="secondary" size="sm" className="shrink-0">
          <Icon name="plus" className="h-4 w-4" />
          Add course
        </Button>
      </motion.div>
      <SubjectPillars user={user} />

      {/* Tools / feature cards */}
      <motion.div variants={fadeInUp} className="mt-20 mb-6">
        <span className="kicker">Your toolkit</span>
        <h2 className="mt-2 text-2xl font-bold text-fg">Tools</h2>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {FEATURES.map((f) => (
          <motion.div key={f.id} variants={fadeInUp}>
            <Link
              to={f.to}
              className="glass card-lift flex h-full flex-col rounded-3xl p-7"
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${FEATURE_ACCENT[f.accent]}`}
              >
                <Icon name={f.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-fg">{f.label}</h3>
              <p className="mt-1 text-base text-muted">{f.desc}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent topic + technique picker */}
      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <motion.div
          variants={fadeInUp}
          className="glass rounded-3xl p-6"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-muted">
            Most recent topic
          </p>
          <p className="mt-2 text-xl font-bold text-fg">
            {recentTopic || 'Nothing here yet. Your first session is a great place to start.'}
          </p>
          <div className="mt-4">
            <Button as={Link} to="/study" variant="subtle" size="sm">
              <Icon name="refresh" className="h-4 w-4" />
              Revise it
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="glass rounded-3xl p-6"
        >
          <h2 className="mb-1 text-lg font-bold text-fg">Study a subject</h2>
          <p className="mb-3 text-sm text-muted">
            Pick a subject, then choose how to revise it.
          </p>
          {subjectNames.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {subjectNames.map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setStudySubject(name)}
                  aria-pressed={activeSubject === name}
                  className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
                    activeSubject === name
                      ? 'border-brand bg-brand text-on-brand'
                      : 'border-line bg-surface text-fg hover:border-brand'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            {STUDY_TECHNIQUES.map((t) => {
              const available = techniqueHasContent(activePack, t.id)
              if (!available) {
                return (
                  <span
                    key={t.id}
                    title={`No ${t.label.toLowerCase()} for ${activeSubject} yet`}
                    className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-muted opacity-40"
                  >
                    <Icon name={t.icon} className="h-4 w-4" />
                    {t.label}
                  </span>
                )
              }
              return (
                <Link
                  key={t.id}
                  to={`/study/${slugify(activeSubject)}/${t.id}`}
                  title={t.desc}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-fg transition-colors hover:border-brand hover:bg-brand-soft"
                >
                  <Icon name={t.icon} className="h-4 w-4 text-brand-strong" />
                  {t.label}
                </Link>
              )
            })}
            {activePack?.examQuestions?.length > 0 ? (
              <Link
                to={`/mock/${slugify(activeSubject)}`}
                title="A timed, randomised paper for one section"
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-fg transition-colors hover:border-brand hover:bg-brand-soft"
              >
                <Icon name="clock" className="h-4 w-4 text-brand-strong" />
                Mock exam
              </Link>
            ) : (
              <span
                title={`No exam questions for ${activeSubject} yet`}
                className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-muted opacity-40"
              >
                <Icon name="clock" className="h-4 w-4" />
                Mock exam
              </span>
            )}
          </div>
        </motion.div>
      </div>
      </Section>
    </div>
  )
}
