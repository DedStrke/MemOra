import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Chip from '@/components/ui/Chip'
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

// Section heading, used for every band below the hero so they all announce
// themselves the same way instead of each inventing its own treatment.
function Band({ kicker, title, action, children }) {
  return (
    <>
      <motion.div
        variants={fadeInUp}
        className="mt-16 mb-5 flex flex-wrap items-end justify-between gap-4"
      >
        <div>
          <span className="kicker">{kicker}</span>
          <h2 className="mt-2 text-2xl font-bold text-fg">{title}</h2>
        </div>
        {action}
      </motion.div>
      {children}
    </>
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

  const stats = [
    { icon: 'activity', value: streak, label: 'day streak' },
    { icon: 'clock', value: `${totalHours}h`, label: 'hours logged' },
    { icon: 'cap', value: totalChapters, label: 'chapters covered' },
  ]

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
        {/* ---------------------------------------------------------- HERO */}
        <motion.div
          variants={fadeInUp}
          className="glass-strong relative overflow-hidden rounded-[2rem]"
        >
          <div className="p-8 sm:p-12">
            <h1 className="text-4xl font-extrabold leading-[1.05] text-fg sm:text-5xl lg:text-6xl">
              Hi {user.name},
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(100deg, var(--brand-strong), var(--paper))' }}
              >
                let&rsquo;s make today count.
              </span>
            </h1>
            <p className="readable mt-4 max-w-md text-lg leading-relaxed text-muted">
              {heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
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

          {/* Stats read as part of the hero, on a shared rule, rather than
              as loose pills floating beside it. */}
          <div className="grid grid-cols-3 border-t border-line/70">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-4 py-5 text-center sm:px-8 sm:text-left ${
                  i > 0 ? 'border-l border-line/70' : ''
                }`}
              >
                <div className="flex items-center justify-center gap-1.5 sm:justify-start">
                  <Icon name={s.icon} className="h-4 w-4 text-brand-strong" />
                  <span className="text-2xl font-extrabold tabular-nums text-fg">{s.value}</span>
                </div>
                <p className="mt-0.5 text-xs font-semibold text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --------------------------------------------------- QUICK START */}
        <Band
          kicker="Jump in"
          title="Study a subject"
          action={
            recentTopic ? (
              // recentTopic is "<chapter> · <technique>", which can run long
              // enough to blow out a button, so it goes in the tooltip.
              <Button
                as={Link}
                to="/study"
                variant="secondary"
                size="sm"
                className="shrink-0"
                title={`Last session: ${recentTopic}`}
              >
                <Icon name="refresh" className="h-4 w-4" />
                Resume last session
              </Button>
            ) : null
          }
        >
          <motion.div variants={fadeInUp} className="glass rounded-3xl p-6">
            {subjectNames.length > 0 && (
              <div className="mb-5 flex flex-wrap gap-2">
                {subjectNames.map((name) => (
                  <Chip
                    key={name}
                    selected={activeSubject === name}
                    aria-pressed={activeSubject === name}
                    onClick={() => setStudySubject(name)}
                  >
                    {name}
                  </Chip>
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {STUDY_TECHNIQUES.map((t) => {
                const available = techniqueHasContent(activePack, t.id)
                return (
                  <Chip
                    key={t.id}
                    to={available ? `/study/${slugify(activeSubject)}/${t.id}` : undefined}
                    disabled={!available}
                    title={available ? t.desc : `No ${t.label.toLowerCase()} for ${activeSubject} yet`}
                  >
                    <Icon
                      name={t.icon}
                      className={`h-4 w-4 ${available ? 'text-brand-strong' : ''}`}
                    />
                    {t.label}
                  </Chip>
                )
              })}
              <Chip
                to={activePack?.examQuestions?.length > 0 ? `/mock/${slugify(activeSubject)}` : undefined}
                disabled={!activePack?.examQuestions?.length}
                title={
                  activePack?.examQuestions?.length
                    ? 'A timed, randomised paper for one section'
                    : `No exam questions for ${activeSubject} yet`
                }
              >
                <Icon
                  name="clock"
                  className={`h-4 w-4 ${activePack?.examQuestions?.length ? 'text-brand-strong' : ''}`}
                />
                Mock exam
              </Chip>
            </div>
          </motion.div>
        </Band>

        {/* ----------------------------------------------------- COUNTDOWN */}
        <Band kicker="Coming up" title="Exam countdown">
          <CountdownCard />
        </Band>

        {/* ------------------------------------------------------ SUBJECTS */}
        <Band
          kicker="On your plate"
          title="Your subjects"
          action={
            <Button as={Link} to="/courses" variant="secondary" size="sm" className="shrink-0">
              <Icon name="plus" className="h-4 w-4" />
              Add course
            </Button>
          }
        >
          <SubjectPillars user={user} />
        </Band>

        {/* --------------------------------------------------------- TOOLS */}
        <Band kicker="Your toolkit" title="Tools">
          <motion.div
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {FEATURES.map((f) => (
              <motion.div key={f.id} variants={fadeInUp}>
                <Link
                  to={f.to}
                  className="glass card-lift flex h-full items-center gap-4 rounded-3xl p-5"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${FEATURE_ACCENT[f.accent]}`}
                  >
                    <Icon name={f.icon} className="h-6 w-6" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-fg">{f.label}</span>
                    <span className="block text-sm text-muted">{f.desc}</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Band>
      </Section>
    </div>
  )
}
