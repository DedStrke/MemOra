import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '@/components/ui/Icon'
import Sparkline from '@/components/ui/Sparkline'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { PRIORITISED_COURSES } from '@/constants/content'
import { progressFor } from '@/constants/mock'

const ACCENTS = [
  { chip: 'bg-flash-soft text-flash', spark: 'text-flash' },
  { chip: 'bg-quiz-soft text-quiz', spark: 'text-quiz' },
  { chip: 'bg-paper-soft text-paper', spark: 'text-paper' },
  { chip: 'bg-brand-soft text-brand-strong', spark: 'text-brand-strong' },
]

const studyLink = (subject) => `/study?subject=${encodeURIComponent(subject)}`

function Pillar({ subject, index, big }) {
  const a = ACCENTS[index % ACCENTS.length]
  return (
    <motion.div variants={fadeInUp}>
      <Link
        to={studyLink(subject.name)}
        className={`group flex h-full flex-col rounded-2xl border border-line bg-surface transition-colors hover:border-brand ${
          big ? 'p-6' : 'p-4'
        }`}
      >
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className={`font-bold text-fg ${big ? 'text-2xl' : 'text-base'}`}>
              {subject.name}
            </h3>
            {subject.spec && (
              <span className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${a.chip}`}>
                {subject.spec}
              </span>
            )}
          </div>
          {subject.priority && big && (
            <span className="flex items-center gap-1 rounded-full bg-brand-soft px-2.5 py-1 text-xs font-semibold text-brand-strong">
              <Icon name="star" className="h-3.5 w-3.5" />
              Priority
            </span>
          )}
        </div>

        <div className={`${big ? 'mt-6' : 'mt-4'} ${a.spark}`}>
          <Sparkline data={progressFor(index)} className={big ? 'h-14 w-full' : 'h-8 w-full'} />
        </div>

        <div className="mt-3 flex items-center justify-between text-sm text-muted">
          <span>Recent activity</span>
          <span className="flex items-center gap-1 font-medium text-brand-strong opacity-0 transition-opacity group-hover:opacity-100">
            Study <Icon name="arrowRight" className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export default function SubjectPillars({ user }) {
  const { courseType, subjects = [], courseName } = user

  // University: a single course card.
  if (courseType === 'University') {
    return (
      <motion.div variants={fadeInUp}>
        <Link
          to={studyLink(courseName)}
          className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-brand"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
            <Icon name="cap" className="h-6 w-6" />
          </span>
          <h3 className="mt-4 text-2xl font-bold text-fg">{courseName}</h3>
          <div className="mt-5 text-brand-strong">
            <Sparkline data={progressFor(0)} className="h-14 w-full" />
          </div>
        </Link>
      </motion.div>
    )
  }

  const prioritised = PRIORITISED_COURSES.includes(courseType)

  if (prioritised) {
    const top = subjects.find((s) => s.priority) || subjects[0]
    const rest = subjects.filter((s) => s !== top)
    return (
      <motion.div variants={staggerContainer} className="space-y-4">
        <Pillar subject={top} index={0} big />
        {rest.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((s, i) => (
              <Pillar key={s.id ?? s.name} subject={s} index={i + 1} />
            ))}
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
        <Pillar key={s.id ?? s.name} subject={s} index={i} />
      ))}
    </motion.div>
  )
}
