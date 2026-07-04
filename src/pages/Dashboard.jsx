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

const GOAL_LINE = {
  pass: 'Steady does it. We’ll get you over the line together.',
  ace: 'Those top grades are within reach. Let’s make today count.',
  specific: 'Let’s chip away at that tricky bit, one piece at a time.',
  custom: '',
}

const FEATURE_ACCENT = {
  flash: 'bg-flash-soft text-flash',
  quiz: 'bg-quiz-soft text-quiz',
  paper: 'bg-paper-soft text-paper',
  brand: 'bg-brand-soft text-brand-strong',
}

export default function Dashboard() {
  const { user, recentTopic } = useApp()
  const goalLine =
    (user.goal?.choice === 'custom' ? user.goal.text : GOAL_LINE[user.goal?.choice]) ||
    'Good to see you. Let’s make today count.'

  // What can they study, and which one is selected in the technique picker.
  const subjectNames =
    user.courseType === 'University' && user.courseName
      ? [user.courseName]
      : (user.subjects || []).map((s) => s.name)
  const defaultSubject =
    user.subjects?.find((s) => s.priority)?.name || subjectNames[0] || 'Revision'
  const [studySubject, setStudySubject] = useState(defaultSubject)
  const activeSubject = subjectNames.includes(studySubject) ? studySubject : defaultSubject

  return (
    <Section width="wide" animateOnMount className="pt-8 pb-28">
      {/* Greeting + start session */}
      <motion.div
        variants={fadeInUp}
        className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center"
      >
        <div>
          <h1 className="text-4xl font-extrabold text-fg sm:text-5xl">
            Hi {user.name}, welcome back!
          </h1>
          <p className="readable mt-4 text-lg leading-relaxed text-muted">{goalLine}</p>
        </div>
        <Button as={Link} to="/study" size="lg" className="shrink-0">
          <Icon name="play" className="h-5 w-5" />
          Start a study session
        </Button>
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
              className="flex h-full flex-col card card-lift p-7"
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
          className="card p-6"
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
          className="card p-6"
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
            {STUDY_TECHNIQUES.map((t) => (
              <Link
                key={t.id}
                to={`/study?subject=${encodeURIComponent(activeSubject)}&technique=${t.id}`}
                title={t.desc}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-sm font-medium text-fg transition-colors hover:border-brand hover:bg-brand-soft"
              >
                <Icon name={t.icon} className="h-4 w-4 text-brand-strong" />
                {t.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
