import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Mascot from '@/components/ui/Mascot'
import Sparkline from '@/components/ui/Sparkline'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { useApp } from '@/context/AppProvider'
import { subjectStats, studyStreak, topicStats } from '@/lib/sessions'

const ACCENTS = ['text-flash', 'text-quiz', 'text-paper', 'text-brand-strong']
const CHIPS = [
  'bg-flash-soft text-flash',
  'bg-quiz-soft text-quiz',
  'bg-paper-soft text-paper',
  'bg-brand-soft text-brand-strong',
]

const CONFIDENCE_COLOR = (v) =>
  v <= 2 ? 'bg-danger' : v <= 3 ? 'bg-warning' : 'bg-success'

function TopicBreakdown({ rows }) {
  if (!rows.length) return null
  const worst = rows.slice(0, 5)
  return (
    <div className="mt-5 border-t border-line pt-4">
      <p className="mb-2.5 text-xs font-medium uppercase tracking-wide text-muted">
        Chapters to revisit
      </p>
      <ul className="space-y-2">
        {worst.map((row) => (
          <li key={row.topic} className="flex items-center gap-2.5">
            <span
              className={`h-2 w-2 shrink-0 rounded-full ${CONFIDENCE_COLOR(row.latestConfidence)}`}
              aria-hidden="true"
            />
            <span className="readable min-w-0 flex-1 truncate text-sm text-fg">{row.topic}</span>
            <span className="shrink-0 text-xs font-semibold text-muted">
              {row.latestConfidence}/5
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function SubjectCard({ subject, index, stats, topics }) {
  const accent = ACCENTS[index % ACCENTS.length]
  const chip = CHIPS[index % CHIPS.length]
  const studied = stats.count > 0
  const trendUp = stats.trend >= 0
  const series = stats.series.length > 1 ? stats.series : [stats.series[0], stats.series[0]]

  return (
    <motion.div variants={fadeInUp} className="flex flex-col card p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-bold text-fg">{subject.name}</h3>
          {subject.spec && (
            <span className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${chip}`}>
              {subject.spec}
            </span>
          )}
        </div>
        {studied && (
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
            {stats.trend}
          </span>
        )}
      </div>

      {studied ? (
        <>
          <div className={`mt-6 ${accent}`}>
            <Sparkline data={series} className={`${accent} h-20 w-full`} />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-4 text-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted">Sessions</p>
              <p className="mt-1 text-xl font-bold text-fg">{stats.count}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted">Confidence</p>
              <p className="mt-1 text-xl font-bold text-fg">{stats.latest}/5</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted">Last</p>
              <p className="mt-1 text-sm font-bold text-fg">
                {stats.daysSince === 0 ? 'Today' : `${stats.daysSince}d ago`}
              </p>
            </div>
          </div>
          <TopicBreakdown rows={topics} />
        </>
      ) : (
        <div className="mt-6 flex flex-1 flex-col items-center justify-center rounded-xl border border-dashed border-line py-8 text-center">
          <p className="text-sm font-semibold text-fg">Not studied yet</p>
          <p className="mt-1 text-xs text-muted">Finish a session to start tracking.</p>
          <Button
            as={Link}
            to={`/study?subject=${encodeURIComponent(subject.name)}`}
            variant="subtle"
            size="sm"
            className="mt-3"
          >
            <Icon name="play" className="h-4 w-4" />
            Study now
          </Button>
        </div>
      )}
    </motion.div>
  )
}

export default function Progress() {
  const { user, sessions } = useApp()

  const subjects =
    user.courseType === 'University' && user.courseName
      ? [{ name: user.courseName }]
      : user.subjects?.length
        ? user.subjects
        : []

  const total = sessions.length
  const streak = studyStreak(sessions)

  return (
    <Section width="wide" animateOnMount className="pt-8 pb-28">
      <motion.div variants={fadeInUp}>
        <Button as={Link} to="/dashboard" variant="ghost" size="sm">
          <Icon name="arrowLeft" className="h-4 w-4" />
          Dashboard
        </Button>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="mt-6 flex flex-wrap items-end justify-between gap-4"
      >
        <div>
          <span className="kicker">Your progress</span>
          <h1 className="mt-2 text-3xl font-extrabold text-fg sm:text-4xl">
            How you are tracking
          </h1>
          <p className="readable mt-1 text-muted">
            Built from the sessions you actually finish. Higher means it felt more within
            reach.
          </p>
        </div>
        {total > 0 && (
          <div className="flex gap-3">
            <div className="card px-4 py-3 text-center">
              <p className="text-2xl font-extrabold text-fg">{total}</p>
              <p className="text-xs text-muted">sessions</p>
            </div>
            <div className="card px-4 py-3 text-center">
              <p className="text-2xl font-extrabold text-brand-strong">{streak}</p>
              <p className="text-xs text-muted">day streak</p>
            </div>
          </div>
        )}
      </motion.div>

      {total === 0 ? (
        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-col items-center card p-10 text-center"
        >
          <Mascot expression="happy" className="h-20 w-20" />
          <p className="mt-3 text-lg font-semibold text-fg">No sessions yet</p>
          <p className="mt-1 max-w-sm text-sm text-muted">
            Your progress fills in as you study. Finish your first session and watch it
            appear here.
          </p>
          <Button as={Link} to="/study" className="mt-5">
            <Icon name="play" className="h-4 w-4" />
            Start a session
          </Button>
        </motion.div>
      ) : (
        <motion.div
          variants={staggerContainer}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {subjects.map((subject, index) => (
            <SubjectCard
              key={subject.id ?? subject.name}
              subject={subject}
              index={index}
              stats={subjectStats(sessions, subject.name)}
              topics={topicStats(sessions, subject.name)}
            />
          ))}
        </motion.div>
      )}
    </Section>
  )
}
