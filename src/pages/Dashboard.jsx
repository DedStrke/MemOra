import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Avatar from '@/components/ui/Avatar'
import BandBar from '@/components/ui/BandBar'
import SpineCard from '@/components/ui/SpineCard'
import PaceVerdict from '@/components/dashboard/PaceVerdict'
import HeroBanner from '@/components/dashboard/HeroBanner'
import DailyQuote from '@/components/dashboard/DailyQuote'
import DailyReward from '@/components/dashboard/DailyReward'
import CloseGaps from '@/components/dashboard/CloseGaps'
import LeaderboardList from '@/components/friends/LeaderboardList'
import AssessmentsCard, { AssessmentQuickAdd } from '@/components/dashboard/AssessmentsCard'
import WeekChart from '@/components/dashboard/WeekChart'
import useMe from '@/hooks/useMe'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { useApp } from '@/context/AppProvider'
import { PRIORITISED_COURSES, subjectColor, subjectIcon } from '@/constants/content'
import { getPackByName } from '@/constants/library'
import { daysAgo, daysUntilDate } from '@/lib/sessions'
import { computeAllChapterStates, hasSlipped } from '@/lib/attempts'
import { computeGaps } from '@/lib/gaps'
import {
  computePaceProjection,
  computeNextBestAction,
  relevantTopics,
  modeForBand,
  subjectReadiness,
  subjectBandCounts,
} from '@/lib/pace'
import { slugify } from '@/lib/slug'
import { studyPathFor, techniqueLabel as modeLabel } from '@/lib/techniques'

const nearestExamDate = (examDates, subjectName) => {
  const dates = examDates.filter((e) => !subjectName || e.subject === subjectName)
  if (!dates.length) return null
  return [...dates].sort((a, b) => a.date.localeCompare(b.date))[0]
}

// Shared with Progress (lib/sessions.js) so the two pages can never quote
// different countdowns for the same exam again.
const daysUntil = (dateStr) => daysUntilDate(dateStr)

const bandLabel = {
  not_started: 'Not started',
  seen: 'Seen once',
  shaky: 'Shaky',
  solid: 'Solid',
  'exam-ready': 'Exam-ready',
}

/*
  The most recent session that names a chapter, so "continue" has something
  concrete to point at. Sessions with topic === null are whole-subject runs
  ("all chapters" mode) - resuming those means resuming the subject, which
  is a weaker offer, so a chaptered session wins even if it's older.
*/
function lastResumable(sessions) {
  const withTopic = sessions.filter((s) => s.topic && s.subject)
  const best = withTopic[0] || sessions.find((s) => s.subject)
  return best || null
}

// daysAgo() returns a raw number; "MCQ · 1" isn't a sentence.
function relativeDay(ts) {
  const d = daysAgo(ts)
  if (d === null) return null
  if (d === 0) return 'today'
  if (d === 1) return 'yesterday'
  return `${d} days ago`
}

/*
  "Good night" is a farewell - saying it to someone who has just opened a
  revision app at 1am is the wrong sentence. The late bucket acknowledges
  the hour without dismissing them.
*/
function BandPill({ band }) {
  const tone = {
    not_started: 'bg-r0-not-started/25 text-fg',
    seen: 'bg-r1-seen/25 text-fg',
    shaky: 'bg-r2-shaky/20 text-r2-shaky',
    solid: 'bg-r3-solid/20 text-r3-solid',
    'exam-ready': 'bg-r4-exam-ready/20 text-r4-exam-ready',
  }
  return (
    <span className={`inline-block rounded-full px-2 py-0.5 text-[0.7rem] font-bold ${tone[band] || tone.not_started}`}>
      {bandLabel[band] || 'Not started'}
    </span>
  )
}

/*
  Pick up the thread. This sits directly under the greeting because it's the
  cheapest possible next action - no decision to make, you were already
  here. It links back to the exact chapter AND the exact technique, so
  "continue" really does continue rather than dropping you on a menu.
*/
function ResumeCard({ session, state }) {
  const color = subjectColor(session.subject)
  const technique = session.technique || 'notes'
  const to = session.topic
    ? studyPathFor(session.subject, session.topic, technique)
    : `/study/${slugify(session.subject)}/${technique}`
  const when = relativeDay(session.ts)
  return (
    <motion.div variants={fadeInUp}>
      <SpineCard color={color} lift className="p-5 pl-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em]" style={{ color }}>
                {session.subject}
              </p>
              {state && <BandPill band={state.band} />}
            </div>
            <p className="mt-1.5 truncate text-lg font-bold text-fg">{session.topic || 'All chapters'}</p>
            <p className="mt-0.5 text-xs text-muted">
              {modeLabel(technique)}
              {when ? ` · ${when}` : ''}
            </p>
          </div>
          <Button as={Link} to={to} size="md">
            <Icon name="refresh" className="h-4 w-4" />
            Continue
          </Button>
        </div>
      </SpineCard>
    </motion.div>
  )
}

/*
  The subject card: the subject, how far through it you are, and Start.

  It used to also name the next chapter the recommender would pick
  ("Next up: Structure and Function of the Processor - because it is
  still untouched"). The user did not want the card deciding for them -
  Start goes to the Start page (/start/<subject>) where they pick the
  method and then the chapter themselves. The recommender's picks now
  live in "Close your gaps" below, which is the part of the dashboard
  that is allowed to have opinions.
*/
function SubjectCard({ pack, spec, topics, hasActivity, pace, counts, value, chapterStates, isYear12, onStart }) {
  const color = subjectColor(pack.name)
  const started = topics.length - (counts?.not_started || 0)
  return (
    <motion.div variants={fadeInUp}>
      <SpineCard color={color} className="p-5 pl-6">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
          <div className="flex min-w-0 items-center gap-3.5">
            <span aria-hidden="true" className="subject-card-tile grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white">
              <Icon name={subjectIcon(pack.name)} className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <p className="text-lg font-extrabold leading-tight text-fg">
                {pack.name}
                {spec ? <span className="text-base font-normal text-muted"> · {spec}</span> : null}
              </p>
              <p className="text-xs font-semibold text-muted">
                <span className="text-fg">
                  {started}/{topics.length}
                </span>{' '}
                chapters{hasActivity ? '' : ' · not started yet'}
                {hasActivity && value !== null ? (
                  <>
                    {' · '}
                    <span style={{ color }}>{Math.round(value * 100)}% ready</span>
                  </>
                ) : null}
              </p>
            </div>
          </div>
          <Button onClick={onStart} size="md" className="shrink-0">
            <Icon name="play" className="h-4 w-4" />
            Start
          </Button>
        </div>
        {/* The spec map, not the per-chapter strip - see
            components/ui/BandBar.jsx for why. The strip still runs the
            Progress page, where clicking an individual chapter is the
            point. Shown from day one: its shape is the course itself. */}
        <div className="mt-4">
          <BandBar pack={pack} chapterStates={chapterStates} isYear12={isYear12} color={color} />
        </div>
        {hasActivity && <PaceVerdict pace={pace} subjectName={pack.name} />}
      </SpineCard>
    </motion.div>
  )
}

function RailCard({ title, action, children }) {
  return (
    <motion.div variants={fadeInUp} className="card min-w-0 p-5">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-muted">{title}</h3>
        {action}
      </div>
      {children}
    </motion.div>
  )
}

function SectionLabel({ children, action }) {
  return (
    <motion.div variants={fadeInUp} className="mb-3 flex items-center justify-between gap-3">
      <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted">{children}</h2>
      {action}
    </motion.div>
  )
}

function SetupChecklist({ setupDone, prioritySubject, subjects }) {
  const [addingDates, setAddingDates] = useState(false)
  const steps = [
    { label: 'Pick your courses', done: setupDone.courses, to: '/profile', cta: 'Pick' },
    {
      label: 'Add your assessment dates - DA, IA, mocks, finals',
      done: setupDone.examDate,
      onClick: () => setAddingDates((v) => !v),
      cta: addingDates ? 'Close' : 'Add dates',
    },
    {
      label: 'Take a quick 10-question check',
      done: setupDone.check,
      to: prioritySubject ? `/study/${slugify(prioritySubject)}/mcq` : '/study',
      cta: 'Start',
    },
  ]
  const doneCount = steps.filter((s) => s.done).length
  return (
    <motion.div variants={fadeInUp} className="card p-6">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-xl font-extrabold text-fg">Set up in three steps</h2>
        <p className="shrink-0 text-xs font-semibold text-muted">
          {doneCount} of {steps.length}
        </p>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-raised">
        <div
          className="h-full rounded-full bg-brand transition-[width] duration-500"
          style={{ width: `${(doneCount / steps.length) * 100}%` }}
        />
      </div>
      <ul className="mt-5 space-y-3">
        {steps.map((s) => (
          <li key={s.label} className="flex items-center justify-between gap-3">
            <span className="flex min-w-0 items-center gap-3">
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${
                  s.done ? 'bg-r3-solid text-[#0b0f14]' : 'border border-line text-muted'
                }`}
              >
                <Icon name={s.done ? 'check' : 'chevronRight'} className="h-3.5 w-3.5" />
              </span>
              <span className={`truncate text-sm ${s.done ? 'text-muted line-through' : 'font-semibold text-fg'}`}>
                {s.label}
              </span>
            </span>
            {!s.done &&
              (s.onClick ? (
                <Button size="sm" className="shrink-0" onClick={s.onClick}>
                  {s.cta}
                </Button>
              ) : (
                <Button as={Link} to={s.to} size="sm" className="shrink-0">
                  {s.cta}
                </Button>
              ))}
          </li>
        ))}
      </ul>
      {addingDates && !setupDone.examDate && (
        <div className="mt-4">
          <AssessmentQuickAdd subjects={subjects} onDone={() => setAddingDates(false)} />
        </div>
      )}
    </motion.div>
  )
}

export default function Dashboard() {
  const { user, sessions, attempts, examDates, posts, friends, profileSetupDone } = useApp()
  const navigate = useNavigate()
  const isYear12 = user.yearGroup === 'Year 12' && PRIORITISED_COURSES.includes(user.courseType)
  const [now] = useState(() => Date.now())
  const me = useMe(now)
  // The buddy on the banner reacts to a claimed reward.
  const [buddyEvent, setBuddyEvent] = useState(null)

  const subjectNames =
    user.courseType === 'University' && user.courseName
      ? [user.courseName]
      : (user.subjects || []).map((s) => s.name)
  const defaultSubject = user.subjects?.find((s) => s.priority)?.name || subjectNames[0] || 'Revision'

  const { streak, xp, weekMinutes: minutesThisWeek, firstName } = me
  const sortedExams = [...examDates].sort((a, b) => daysUntil(a.date) - daysUntil(b.date))
  // Days until THAT subject's own next paper, or null if it hasn't got one.
  const examDaysFor = (subject) => {
    const exam = nearestExamDate(examDates, subject)
    return exam ? daysUntil(exam.date) : null
  }
  const nextExam = sortedExams[0] || null

  const allStates = computeAllChapterStates({ attempts, sessions, now })
  const subjectPacks = subjectNames.map((n) => getPackByName(n)).filter(Boolean)
  // The recommender's pick for each subject - shown in "Close your gaps"
  // as suggestions, with the reason. Spread across subjects (the
  // recommender does that itself) so every subject gets its one.
  const suggestions = computeNextBestAction({
    subjectPacks,
    isYear12,
    attempts,
    sessions,
    examDatesBySubject: Object.fromEntries(
      subjectNames.map((n) => [n, nearestExamDate(examDates, n)?.date || nextExam?.date]).filter(([, d]) => d),
    ),
    now,
    limit: Math.max(1, subjectPacks.length),
  }).map((rec) => ({ ...rec, daysToExam: examDaysFor(rec.subject) }))
  // Only offer to resume a subject the student still studies - dropping a
  // subject shouldn't leave a dead card pointing at it.
  const resumeSession = (() => {
    const s = lastResumable(sessions)
    return s && subjectNames.includes(s.subject) ? s : null
  })()

  const trackedStates = [...allStates.values()].filter((s) => subjectNames.includes(s.subject))
  const slipped = trackedStates.filter(hasSlipped)

  // Where answers have gone wrong - the "Close your gaps" block.
  const { gaps, total: gapsTotal } = computeGaps({ subjectNames, chapterStates: allStates, attempts, limit: 5 })
  const hasEvidence = attempts.some((a) => subjectNames.includes(a.subject))

  const recentPosts = posts.filter((p) => p.status !== 'hidden').slice(0, 2)

  const setupDone = {
    courses: subjectNames.length > 0,
    examDate: examDates.length > 0,
    check: attempts.some((a) => a.mode === 'mcq'),
  }
  const isNewAccount = sessions.length < 3 && !Object.values(setupDone).every(Boolean)

  return (
    <div className="relative">
      {/* No ambient colour wash behind this page on purpose. The drifting
          brand/paper blobs tinted the whole surface warm, which fought every
          subject colour and every readiness band sitting on top of it - and
          those carry meaning here, the wash didn't. */}
      <Section width="wide" animateOnMount className="pt-6 pb-24">
        {/* ------------------------------------------------------ BANNER */}
        <HeroBanner
          name={firstName}
          fullName={me.name}
          username={me.username}
          photo={me.photo}
          photoPos={me.photoPos}
          banner={me.banner}
          bannerPos={me.bannerPos}
          streak={streak}
          xp={xp}
          weekMinutes={minutesThisWeek}
          nextAssessment={nextExam}
          daysToNext={nextExam ? daysUntil(nextExam.date) : null}
          now={now}
          showSetup={!profileSetupDone}
        />
        <div className="mt-4">
          <DailyQuote
            now={now}
            mascot={user.mascot}
            event={buddyEvent}
            context={{
              streak,
              studiedToday: me.studiedToday,
              nextAssessment: nextExam
                ? `${nextExam.type === 'final' ? 'The exam' : nextExam.type.toUpperCase()}${nextExam.subject ? ` ${nextExam.subject}` : ''}`
                : null,
              daysToNext: nextExam ? daysUntil(nextExam.date) : null,
            }}
          />
        </div>

        {/* Work column + status rail. The rail stacks underneath on narrow
            screens so "what do I do now" always comes first. */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.85fr)_minmax(0,1fr)]">
          {/* ================================================ MAIN COLUMN */}
          <motion.div variants={staggerContainer} className="min-w-0 space-y-8">
            {isNewAccount ? (
              <SetupChecklist setupDone={setupDone} prioritySubject={defaultSubject} subjects={subjectNames} />
            ) : (
              <>
                {/* --------------------------------------------- CONTINUE */}
                {resumeSession && (
                  <div>
                    <SectionLabel>Continue where you left off</SectionLabel>
                    <ResumeCard
                      session={resumeSession}
                      state={
                        resumeSession.topic
                          ? allStates.get(`${resumeSession.subject}␟${resumeSession.topic}`)
                          : null
                      }
                    />
                  </div>
                )}
              </>
            )}

            {/* ------------------------------------------------- SUBJECTS */}
            {subjectPacks.length > 0 && (
              <div>
                <SectionLabel
                  action={
                    <Link to="/progress" className="text-xs font-semibold text-brand-strong hover:underline">
                      Full progress →
                    </Link>
                  }
                >
                  Your subjects
                </SectionLabel>
                <motion.div variants={staggerContainer} className="space-y-3">
                  {subjectPacks.map((pack) => {
                    const hasActivity =
                      attempts.some((a) => a.subject === pack.name) || sessions.some((s) => s.subject === pack.name)
                    const topics = relevantTopics(pack, isYear12)
                    const pace = hasActivity
                      ? computePaceProjection({
                          pack,
                          isYear12,
                          attempts,
                          sessions,
                          examDate: nearestExamDate(examDates, pack.name)?.date,
                          now,
                        })
                      : null
                    const counts = subjectBandCounts({ pack, isYear12, chapterStates: allStates })
                    const value = subjectReadiness({ pack, isYear12, chapterStates: allStates })
                    const spec = user.subjects?.find((s) => s.name === pack.name)?.spec

                    return (
                      <SubjectCard
                        key={pack.id}
                        pack={pack}
                        spec={spec}
                        topics={topics}
                        hasActivity={hasActivity}
                        pace={pace}
                        counts={counts}
                        value={value}
                        chapterStates={allStates}
                        isYear12={isYear12}
                        onStart={() => navigate(`/start/${slugify(pack.name)}`)}
                      />
                    )
                  })}
                </motion.div>
              </div>
            )}

            {/* ---------------------------------------------- CLOSE GAPS */}
            {subjectPacks.length > 0 && (
              <CloseGaps
                gaps={gaps}
                total={gapsTotal}
                suggestions={suggestions}
                hasEvidence={hasEvidence}
                mascot={user.mascot}
                onStart={(g) => navigate(`/start/${slugify(g.subject)}?${new URLSearchParams({ chapter: g.topic })}`)}
                onExplore={() => navigate('/start')}
              />
            )}
          </motion.div>

          {/* ========================================================= RAIL */}
          {/* self-start stops the grid stretching this column to match the
              work column - the rail's cards are ~950px against the work
              column's ~1278px, and a stretched track made the last card's
              bottom border sit 300px above the column's actual end. */}
          <motion.div variants={staggerContainer} className="min-w-0 space-y-4 lg:self-start">
            <DailyReward now={now} onClaimed={(r) => setBuddyEvent({ type: 'reward', n: r.xp, at: Date.now() })} />

            <RailCard
              title="Friends"
              action={
                <Link to="/friends" className="text-xs font-semibold text-brand-strong hover:underline">
                  {friends.length === 0 ? 'Add' : 'All'}
                </Link>
              }
            >
              {friends.length === 0 ? (
                <div className="rounded-xl border border-dashed border-line p-3.5">
                  <p className="text-sm font-bold text-fg">No friends yet</p>
                  <p className="mt-0.5 text-xs text-muted">
                    <Link to="/friends" className="font-semibold text-brand-strong hover:underline">
                      Add a friend
                    </Link>{' '}
                    with their code and see who is really revising this week.
                  </p>
                </div>
              ) : (
                <LeaderboardList me={me} friends={friends} limit={3} showTabs={false} />
              )}
            </RailCard>

            <AssessmentsCard
              examDates={examDates}
              subjects={subjectNames}
              isYear12={isYear12}
              chapterStates={allStates}
            />

            <RailCard title="Minutes per week">
              <WeekChart sessions={sessions} now={now} goalMinutes={(user.sessionLengthMinutes || 25) * 5} />
            </RailCard>

            {slipped.length > 0 && (
              <RailCard
                title={`Slipped (${slipped.length})`}
                action={
                  <Link to="/progress" className="text-xs font-semibold text-brand-strong hover:underline">
                    All
                  </Link>
                }
              >
                <ul className="space-y-2.5">
                  {slipped.slice(0, 3).map((s) => (
                    <li key={`${s.subject}␟${s.topic}`}>
                      <Link to={studyPathFor(s.subject, s.topic, modeForBand(s))} className="group block min-w-0">
                        <span className="block truncate text-sm font-medium text-fg group-hover:text-brand-strong">
                          {s.topic}
                        </span>
                        <span className="block text-xs text-muted">
                          {s.bandLastWeek} → {s.band}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </RailCard>
            )}

            <RailCard
              title="Community"
              action={
                <Link to="/community" className="text-xs font-semibold text-brand-strong hover:underline">
                  Open
                </Link>
              }
            >
              {recentPosts.length === 0 ? (
                <p className="text-sm text-muted">
                  Quiet in here.{' '}
                  <Link to="/community" className="font-semibold text-brand-strong hover:underline">
                    Ask something
                  </Link>
                  .
                </p>
              ) : (
                <ul className="space-y-3">
                  {recentPosts.map((p) => (
                    <li key={p.id} className="flex items-start gap-2.5">
                      <Avatar name={p.authorName || displayName} className="mt-0.5 h-6 w-6" />
                      <span className="min-w-0">
                        <span className="block truncate text-sm text-fg">{p.body}</span>
                        <span className="block text-xs text-muted">
                          {p.authorName || displayName} · {daysAgo(p.ts) === 0 ? 'today' : `${daysAgo(p.ts)}d ago`}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </RailCard>
          </motion.div>
        </div>
      </Section>

    </div>
  )
}
