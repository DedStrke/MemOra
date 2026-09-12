import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import ChapterBar from '@/components/ui/ChapterBar'
import PaceVerdict from '@/components/dashboard/PaceVerdict'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { useApp } from '@/context/AppProvider'
import { getPackByName } from '@/constants/library'
import { PRIORITISED_COURSES, STUDY_TECHNIQUES } from '@/constants/content'
import { computeAllChapterStates, hasSlipped } from '@/lib/attempts'
import { daysUntilDate } from '@/lib/sessions'
import { computePaceProjection, computeNextBestAction, relevantTopics, filterGroupsToTopics, modeForBand } from '@/lib/pace'
import { slugify } from '@/lib/slug'

const DAY = 86400000
const modeLabel = (id) => STUDY_TECHNIQUES.find((t) => t.id === id)?.label || 'Study'

function nearestExamDate(examDates, subjectName) {
  const dates = examDates.filter((e) => !subjectName || e.subject === subjectName)
  if (!dates.length) return null
  return [...dates].sort((a, b) => a.date.localeCompare(b.date))[0]
}

function studyPathFor(subjectName, topic, mode) {
  const params = new URLSearchParams({ chapter: topic })
  return `/study/${slugify(subjectName)}/${mode}?${params.toString()}`
}

function NextAction({ rec, onStartHref }) {
  return (
    <motion.div variants={fadeInUp} className="glass-strong rounded-2xl p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-strong">Next best action</p>
      <p className="mt-1.5 text-lg font-bold text-fg">
        {rec.subject} · {rec.topic}
      </p>
      <p className="mt-1 text-sm text-muted">
        {rec.band === 'not_started' ? 'Not started yet' : `${rec.band[0].toUpperCase()}${rec.band.slice(1)}`}
        {' · '}
        {modeLabel(rec.mode)}
      </p>
      <Button as={Link} to={onStartHref} size="sm" className="mt-4">
        <Icon name="play" className="h-4 w-4" />
        Start {modeLabel(rec.mode)}
      </Button>
    </motion.div>
  )
}

function EmptySubject({ subjectName, topicCount }) {
  return (
    <motion.div variants={fadeInUp} className="card p-6">
      <p className="text-sm font-semibold text-fg">{subjectName}</p>
      <p className="mt-1 text-sm text-muted">Start anywhere - {topicCount} chapters waiting.</p>
      <Button as={Link} to={`/study/${slugify(subjectName)}`} variant="secondary" size="sm" className="mt-3">
        <Icon name="play" className="h-4 w-4" />
        Start
      </Button>
    </motion.div>
  )
}

export default function Progress() {
  const { user, sessions, attempts, examDates } = useApp()
  const isYear12 = user.yearGroup === 'Year 12' && PRIORITISED_COURSES.includes(user.courseType)

  const subjectNames =
    user.courseType === 'University' && user.courseName
      ? [user.courseName]
      : (user.subjects || []).map((s) => s.name)

  const now = Date.now()
  const allStates = computeAllChapterStates({ attempts, sessions, now })
  const nextExam = nearestExamDate(examDates)
  // Shared with the Dashboard - a local copy here measured from Date.now()
  // rather than from midnight, so the same exam read 40 days here and 41 on
  // the dashboard for most of the day.
  const daysToNextExam = nextExam ? daysUntilDate(nextExam.date) : null

  const subjectPacks = subjectNames.map((n) => getPackByName(n)).filter(Boolean)
  const recommendations = computeNextBestAction({
    subjectPacks,
    isYear12,
    attempts,
    sessions,
    examDatesBySubject: Object.fromEntries(
      subjectNames.map((n) => [n, nearestExamDate(examDates, n)?.date || nextExam?.date]).filter(([, d]) => d),
    ),
    now,
    limit: 1,
  })
  const topRec = recommendations[0]

  // §5.6: slipped chapters across every subject the user studies, newest
  // regression first by how long it's been since the chapter was touched.
  const slippedChapters = [...allStates.values()]
    .filter((s) => subjectNames.includes(s.subject) && hasSlipped(s))
    .sort((a, b) => (b.lastAttemptAt || 0) - (a.lastAttemptAt || 0))

  const hasAnyActivity = attempts.length > 0 || sessions.length > 0

  return (
    <Section width="wide" animateOnMount className="pt-8 pb-28">
      <motion.div variants={fadeInUp}>
        <Breadcrumbs />
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap items-end justify-between gap-4">
        <h1 className="text-3xl font-extrabold text-fg sm:text-4xl">How you are tracking</h1>
        {nextExam && daysToNextExam !== null && (
          <p className="text-sm font-semibold text-muted">
            {nextExam.paperLabel}
            {nextExam.subject ? ` (${nextExam.subject})` : ''} in {daysToNextExam} day
            {daysToNextExam === 1 ? '' : 's'}
          </p>
        )}
      </motion.div>

      {!hasAnyActivity ? (
        <motion.div variants={fadeInUp} className="mt-8 flex flex-col items-center card p-10 text-center">
          <Icon name="activity" className="h-10 w-10 text-brand-strong" />
          <p className="mt-3 text-lg font-semibold text-fg">Nothing tracked yet</p>
          <p className="mt-1 max-w-sm text-sm text-muted">
            Readiness fills in as you answer real questions - MCQs, exam questions, mocks. Start
            anywhere below.
          </p>
          <Button as={Link} to="/study" className="mt-5">
            <Icon name="play" className="h-4 w-4" />
            Start a session
          </Button>
        </motion.div>
      ) : (
        <>
          {topRec && (
            <div className="mt-8">
              <NextAction
                rec={topRec}
                onStartHref={studyPathFor(topRec.subject, topRec.topic, topRec.mode)}
              />
            </div>
          )}

          <motion.div variants={staggerContainer} className="mt-8 space-y-6">
            {subjectPacks.map((pack) => {
              const subjectAttempts = attempts.filter((a) => a.subject === pack.name)
              const subjectSessions = sessions.filter((s) => s.subject === pack.name)
              const hasActivity = subjectAttempts.length > 0 || subjectSessions.length > 0
              const topics = relevantTopics(pack, isYear12)
              const groups = isYear12 ? filterGroupsToTopics(pack.groups, topics) : pack.groups

              if (!hasActivity) {
                return <EmptySubject key={pack.id} subjectName={pack.name} topicCount={topics.length} />
              }

              const pace = computePaceProjection({
                pack,
                isYear12,
                attempts,
                sessions,
                examDate: nearestExamDate(examDates, pack.name)?.date,
                now,
              })

              return (
                <motion.div key={pack.id} variants={fadeInUp} className="card p-6">
                  <ChapterBar
                    groups={groups}
                    chapterStates={allStates}
                    subjectName={pack.name}
                    spec={user.subjects?.find((s) => s.name === pack.name)?.spec}
                    studyPath={(topic) => {
                      const state = allStates.get(`${pack.name}␟${topic}`) || { band: 'not_started', coverageState: 'not_started' }
                      return studyPathFor(pack.name, topic, modeForBand(state))
                    }}
                  />
                  <PaceVerdict pace={pace} subjectName={pack.name} />
                </motion.div>
              )
            })}
          </motion.div>

          {slippedChapters.length > 0 && (
            <motion.div variants={fadeInUp} className="mt-10 card p-6">
              <p className="text-sm font-semibold text-fg">
                Slipped this week ({slippedChapters.length})
              </p>
              <ul className="mt-3 space-y-2">
                {slippedChapters.map((s) => {
                  const daysSince = s.lastAttemptAt ? Math.round((now - s.lastAttemptAt) / DAY) : null
                  return (
                    <li
                      key={`${s.subject}␟${s.topic}`}
                      className="flex items-center justify-between gap-3 rounded-xl border border-line bg-surface px-3.5 py-2.5"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-fg">
                          {s.topic} <span className="text-muted">· {s.subject}</span>
                        </p>
                        <p className="text-xs text-muted">
                          {s.bandLastWeek} → {s.band}
                          {daysSince !== null ? ` · last tested ${daysSince}d ago` : ''}
                        </p>
                      </div>
                      <Button
                        as={Link}
                        to={studyPathFor(s.subject, s.topic, modeForBand(s))}
                        variant="secondary"
                        size="sm"
                        className="shrink-0"
                      >
                        Revise
                      </Button>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )}
        </>
      )}
    </Section>
  )
}
