import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '@/components/ui/Icon'
import Sparkline from '@/components/ui/Sparkline'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { PRIORITISED_COURSES, subjectMascot } from '@/constants/content'
import { useApp } from '@/context/AppProvider'
import { subjectMetrics } from '@/lib/sessions'
import { slugify } from '@/lib/slug'

const ACCENTS = [
  { chip: 'bg-flash-soft text-flash', spark: 'text-flash' },
  { chip: 'bg-quiz-soft text-quiz', spark: 'text-quiz' },
  { chip: 'bg-paper-soft text-paper', spark: 'text-paper' },
  { chip: 'bg-brand-soft text-brand-strong', spark: 'text-brand-strong' },
]

// Deep-link straight into a study session, optionally on a specific technique.
// No technique means the session lands on its flashcards default.
const studyLink = (subject, technique) =>
  `/study/${slugify(subject)}${technique ? `/${technique}` : ''}`

function InnerLinks({ subject }) {
  const cls =
    'relative z-10 inline-flex min-h-[36px] flex-1 basis-[40%] items-center justify-center gap-1.5 rounded-lg bg-raised px-3 py-1.5 text-xs font-semibold text-fg transition-colors hover:bg-brand-soft hover:text-brand-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current'
  return (
    <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-3">
      <Link
        to={studyLink(subject, 'flashcards')}
        className={cls}
        aria-label={`Flashcards for ${subject}`}
      >
        <Icon name="cards" className="h-3.5 w-3.5" />
        Flashcards
      </Link>
      <Link
        to={studyLink(subject, 'exam-questions')}
        className={cls}
        aria-label={`Past papers for ${subject}`}
      >
        <Icon name="scroll" className="h-3.5 w-3.5" />
        Past papers
      </Link>
      <Link
        to={`/mock/${slugify(subject)}`}
        className={cls}
        aria-label={`Mock exam for ${subject}`}
      >
        <Icon name="clock" className="h-3.5 w-3.5" />
        Mock exam
      </Link>
    </div>
  )
}

function Pillar({ subject, index, big = false, sessions }) {
  const a = ACCENTS[index % ACCENTS.length]
  const name = subject.name
  const mascot = subjectMascot(name)
  const { hours, delta, series, chaptersCovered, totalChapters } = subjectMetrics(sessions, name)
  const up = delta >= 0
  const started = hours > 0 || chaptersCovered > 0

  return (
    <motion.div variants={fadeInUp} className={big ? 'flex' : 'flex h-full'}>
      <div
        className={`glass card-lift group relative flex w-full flex-col rounded-3xl ${big ? 'p-6' : 'p-5'}`}
      >
        {/* Whole-card click target -> start a study session. It sits behind the
            content as a stretched overlay, so the Notes/Past-papers links can be
            siblings (never anchors nested inside an anchor) and each reliably
            navigates to its own technique. */}
        <Link
          to={studyLink(name)}
          aria-label={`Study ${name}`}
          className="absolute inset-0 z-0 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        />

        {subject.priority && big && (
          <span className="pointer-events-none absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-brand-soft px-2.5 py-1 text-xs font-semibold text-brand-strong">
            <Icon name="star" className="h-3.5 w-3.5" filled />
            Priority
          </span>
        )}

        {/* (a) Name + mascot tile */}
        <div className="flex items-center gap-3 pr-16">
          <span
            className={`flex shrink-0 items-center justify-center rounded-xl ${a.chip} ${
              big ? 'h-12 w-12 text-2xl' : 'h-10 w-10 text-xl'
            }`}
            aria-hidden="true"
          >
            {mascot}
          </span>
          <div className="min-w-0">
            <h3 className={`truncate font-bold text-fg ${big ? 'text-2xl' : 'text-lg'}`}>
              {name}
            </h3>
            {subject.spec && (
              <span className="text-xs font-medium text-muted">{subject.spec}</span>
            )}
          </div>
        </div>

        {/* (b) Chapters covered + (c) Hours spent - both real, from logged sessions */}
        <div className={`grid grid-cols-2 gap-3 ${big ? 'mt-6' : 'mt-5'}`}>
          <div className="rounded-xl bg-raised px-3 py-2.5">
            <p className="text-xs font-medium text-muted">Chapters</p>
            <p className="mt-0.5 text-lg font-bold text-fg">
              {chaptersCovered}
              {totalChapters > 0 && (
                <span className="text-sm font-medium text-muted"> / {totalChapters}</span>
              )}
            </p>
          </div>
          <div className="rounded-xl bg-raised px-3 py-2.5">
            <p className="text-xs font-medium text-muted">Hours spent</p>
            <div className="mt-0.5 flex items-baseline gap-1.5">
              <span className="text-lg font-bold text-fg">{hours}h</span>
              {started && (
                <span
                  className={`flex items-center gap-0.5 text-xs font-semibold ${
                    up ? 'text-success' : delta < 0 ? 'text-danger' : 'text-muted'
                  }`}
                >
                  {delta !== 0 && (
                    <Icon name="chevronDown" className={`h-3 w-3 ${up ? 'rotate-180' : ''}`} />
                  )}
                  {Math.abs(delta)}
                  <span className="sr-only">{up ? 'up' : 'down'} vs last week</span>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* (d) Hours vs day mini graph, or an honest empty state */}
        <div className={`${big ? 'mt-6' : 'mt-4'}`}>
          <div className="mb-1 flex items-center justify-between">
            <span className="text-xs font-medium text-muted">Hours vs day</span>
            <span className="text-xs text-muted">last 7</span>
          </div>
          {started ? (
            <div className={a.spark}>
              <Sparkline data={series} className={big ? 'h-16 w-full' : 'h-12 w-full'} />
            </div>
          ) : (
            <p className="readable py-2 text-xs text-muted">Not studied yet - dive in below.</p>
          )}
        </div>

        {/* (e) Flashcards + Past papers */}
        <InnerLinks subject={name} />
      </div>
    </motion.div>
  )
}

export default function SubjectPillars({ user }) {
  const { sessions } = useApp()
  const { courseType, subjects = [], courseName } = user

  // University: a single course card.
  if (courseType === 'University') {
    return (
      <motion.div variants={staggerContainer} className="max-w-xl">
        <Pillar subject={{ name: courseName }} index={3} big sessions={sessions} />
      </motion.div>
    )
  }

  const prioritised = PRIORITISED_COURSES.includes(courseType)

  if (prioritised) {
    const top = subjects.find((s) => s.priority) || subjects[0]
    const rest = subjects.filter((s) => s !== top).slice(0, 2)
    const [left, right] = rest

    return (
      <motion.div
        variants={staggerContainer}
        className="grid items-center gap-4 lg:grid-cols-3"
      >
        {left && (
          <div className="lg:pt-8">
            <Pillar subject={left} index={0} sessions={sessions} />
          </div>
        )}
        {top && (
          <div className="order-first lg:order-none lg:-mt-4">
            <Pillar subject={top} index={3} big sessions={sessions} />
          </div>
        )}
        {right && (
          <div className="lg:pt-8">
            <Pillar subject={right} index={1} sessions={sessions} />
          </div>
        )}
      </motion.div>
    )
  }

  // GCSE / IGCSE / SATs: all the same size.
  return (
    <motion.div
      variants={staggerContainer}
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {subjects.map((s, i) => (
        <Pillar key={s.id ?? s.name} subject={s} index={i} sessions={sessions} />
      ))}
    </motion.div>
  )
}
