import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Sparkline from '@/components/ui/Sparkline'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { useApp } from '@/context/AppProvider'
import { REVISION_SUBJECTS } from '@/constants/library'
import { progressFor } from '@/constants/mock'

const ACCENTS = ['text-flash', 'text-quiz', 'text-paper', 'text-brand-strong']
const CHIPS = [
  'bg-flash-soft text-flash',
  'bg-quiz-soft text-quiz',
  'bg-paper-soft text-paper',
  'bg-brand-soft text-brand-strong',
]

function SubjectCard({ subject, index }) {
  const accent = ACCENTS[index % ACCENTS.length]
  const chip = CHIPS[index % CHIPS.length]
  const series = progressFor(index)
  const latest = series[series.length - 1]
  const best = Math.max(...series)
  const trend = latest - series[0]
  const trendUp = trend >= 0

  return (
    <motion.div
      variants={fadeInUp}
      className="flex flex-col card p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-fg">{subject.name}</h3>
          {subject.spec && (
            <span
              className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${chip}`}
            >
              {subject.spec}
            </span>
          )}
        </div>
        <span
          className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
            trendUp ? 'bg-success text-fg' : 'bg-warning text-fg'
          }`}
        >
          <Icon
            name={trendUp ? 'arrowRight' : 'arrowLeft'}
            className={`h-3.5 w-3.5 ${trendUp ? '-rotate-45' : 'rotate-45'}`}
          />
          {trendUp ? '+' : ''}
          {trend}
        </span>
      </div>

      <div className={`mt-6 ${accent}`}>
        <Sparkline data={series} className={`${accent} h-20 w-full`} />
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-4 text-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">Latest</p>
          <p className="mt-1 text-xl font-bold text-fg">{latest}%</p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">Best</p>
          <p className="mt-1 text-xl font-bold text-fg">{best}%</p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">Trend</p>
          <p className={`mt-1 text-xl font-bold ${accent}`}>
            {trendUp ? '+' : ''}
            {trend}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Progress() {
  const { user } = useApp()

  const subjects =
    user.courseType === 'University'
      ? [{ name: user.courseName }]
      : user.subjects?.length
        ? user.subjects
        : REVISION_SUBJECTS

  return (
    <Section width="wide" animateOnMount className="pt-8 pb-28">
      <motion.div variants={fadeInUp}>
        <Button as={Link} to="/dashboard" variant="ghost" size="sm">
          <Icon name="arrowLeft" className="h-4 w-4" />
          Dashboard
        </Button>
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-6">
        <h1 className="text-3xl font-extrabold text-fg sm:text-4xl">Your progress</h1>
        <p className="readable mt-1 text-muted">
          See how each subject is trending over recent study sessions.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {subjects.map((subject, index) => (
          <SubjectCard
            key={subject.id ?? subject.name}
            subject={subject}
            index={index}
          />
        ))}
      </motion.div>
    </Section>
  )
}
