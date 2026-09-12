import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { useApp } from '@/context/AppProvider'
import { attemptStats, mistakes, weakestTopics, daysAgo } from '@/lib/sessions'
import { groupMistakes, findSiblingQuestion } from '@/lib/mistakes'
import { getPackByName } from '@/constants/library'
import { slugify } from '@/lib/slug'
import Chip from '@/components/ui/Chip'

function StatCard({ label, value, accent }) {
  return (
    <div className="card px-4 py-3 text-center">
      <p className={`text-2xl font-extrabold ${accent || 'text-fg'}`}>{value}</p>
      <p className="text-xs text-muted">{label}</p>
    </div>
  )
}

function MockResultRow({ s }) {
  const when = daysAgo(s.ts)
  const pct = s.totalMarks ? Math.round((s.score / s.totalMarks) * 100) : 0
  const tone = pct >= 80 ? 'text-success' : pct >= 50 ? 'text-warning' : 'text-danger'
  return (
    <li className="flex items-center justify-between gap-3 border-b border-line py-3.5 last:border-b-0">
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-fg">{s.subject}</p>
        <p className="text-xs text-muted">
          {s.questionCount || '?'} questions &middot; {when === 0 ? 'Today' : `${when}d ago`}
        </p>
      </div>
      <div className="shrink-0 text-right">
        <p className={`text-base font-extrabold tabular-nums ${tone}`}>
          {s.score} / {s.totalMarks}
        </p>
        <p className={`text-xs font-semibold ${tone}`}>{pct}%</p>
      </div>
    </li>
  )
}

function MistakeRow({ m }) {
  const when = daysAgo(m.ts)
  return (
    <li className="flex items-start gap-3 border-b border-line py-3.5 last:border-b-0">
      <span
        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
          m.dontKnow ? 'bg-warning/15 text-warning' : 'bg-danger/15 text-danger'
        }`}
      >
        <Icon name={m.dontKnow ? 'brain' : 'x'} className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="readable text-sm font-medium text-fg">{m.question}</p>
        <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-xs text-muted">
          <span className="font-semibold text-fg">{m.subject}</span>
          {m.topic && <span>· {m.topic}</span>}
          <span>· {m.technique === 'mcq' ? 'MCQ' : 'Exam question'}</span>
          <span>· {when === 0 ? 'Today' : `${when}d ago`}</span>
        </div>
      </div>
      {m.dontKnow ? (
        <span className="shrink-0 rounded-full bg-warning/15 px-2 py-0.5 text-xs font-semibold text-warning">
          Didn't know
        </span>
      ) : (
        <span className="shrink-0 rounded-full bg-danger/15 px-2 py-0.5 text-xs font-semibold text-danger">
          Wrong
        </span>
      )}
    </li>
  )
}

// One mistake group (§7): a misconception, or a chapter when nothing's
// tagged with one yet - see lib/mistakes.js for why that fallback exists.
// Retry deliberately doesn't reuse the identical missed question: it looks
// for a sibling item tagged with the same misconception first, falling
// back to "revise this chapter" (a fresh randomised run) when there isn't
// one, which today is always, since no content pack tags misconceptions.
function MisconceptionRow({ group }) {
  const primarySubject = group.subjects[0]
  const pack = getPackByName(primarySubject)
  // A tagged sibling item exists somewhere in the pack testing the same
  // misconception - there's no stable per-item id to deep-link to it
  // directly yet (a separate content-schema gap, see lib/attempts.js), so
  // this stays informational for now: land on the chapter's own MCQ
  // practice, where a randomised run will likely surface it anyway.
  const hasSibling = Boolean(findSiblingQuestion(pack, group.misconception, null))
  const singleTopic = group.topics.length === 1 ? group.topics[0].topic : null
  // A gap ("didn't know") sends you back to Notes; an actual wrong answer
  // sends you to Exam questions to retest it properly, not just MCQ
  // recognition (§7's closing note on treating the two differently).
  const retryMode = group.lastMissWasDontKnow ? 'notes' : 'exam-questions'
  const retryHref = `/study/${slugify(primarySubject)}/${retryMode}${singleTopic ? `?chapter=${encodeURIComponent(singleTopic)}` : ''}`

  return (
    <li className="flex items-center justify-between gap-3 py-3">
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-fg">
          {group.misconception ? group.misconception.replace(/_/g, ' ') : group.topics[0]?.topic}
        </p>
        <p className="mt-0.5 text-xs text-muted">
          {group.missCount} time{group.missCount === 1 ? '' : 's'}
          {group.topics.length > 1 ? ` · across ${group.topics.length} chapters` : ` · ${primarySubject}`}
          {hasSibling ? ' · a different question on this is ready' : ''}
        </p>
      </div>
      <Button as={Link} to={retryHref} variant="subtle" size="sm" className="shrink-0">
        Retry
      </Button>
    </li>
  )
}

export default function Performance() {
  const { user, attempts, sessions } = useApp()
  const [subjectFilter, setSubjectFilter] = useState('all')

  const subjectNames = user.subjects?.map((s) => s.name) || []
  const scopedAttempts = subjectFilter === 'all' ? attempts : attempts.filter((a) => a.subject === subjectFilter)

  const stats = useMemo(() => attemptStats(scopedAttempts), [scopedAttempts])
  const missed = useMemo(() => mistakes(scopedAttempts), [scopedAttempts])
  const weak = useMemo(
    () => weakestTopics(attempts, subjectFilter === 'all' ? undefined : subjectFilter),
    [attempts, subjectFilter],
  )

  // §7: misconception (or, until content is tagged, chapter) grouped view
  // with resolution tracking - distinct from "Focus here" above, which is
  // a raw miss ratio with no notion of whether it's since been fixed.
  const mistakeGroups = useMemo(() => groupMistakes(scopedAttempts), [scopedAttempts])
  const unresolvedGroups = mistakeGroups.filter((g) => !g.resolved)
  const resolvedGroups = mistakeGroups.filter((g) => g.resolved)
  const [showFixed, setShowFixed] = useState(false)

  // Mock papers get their own results list - a per-paper score, not folded
  // into the question-by-question mistake log below. Any topic that was
  // actually wrong on a mock still lands in that log and in "Focus here",
  // via the same logAttempt calls every other technique uses.
  const mockResults = useMemo(
    () =>
      (sessions || [])
        .filter((s) => s.technique === 'mock-exam' && (subjectFilter === 'all' || s.subject === subjectFilter))
        .sort((a, b) => b.ts - a.ts),
    [sessions, subjectFilter],
  )

  return (
    <Section width="wide" animateOnMount className="pt-8 pb-28">
      <motion.div variants={fadeInUp}>
        <Breadcrumbs />
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-6">
        <h1 className="text-3xl font-extrabold text-fg sm:text-4xl">Where you're losing marks</h1>
        <p className="readable mt-1 text-muted">
          Built from MCQ and exam questions you've actually answered. Every wrong or "I don't
          know" answer shows up here so you can go straight back to it.
        </p>
      </motion.div>

      {/* subject filter */}
      <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap gap-2">
        <Chip
          selected={subjectFilter === 'all'}
          aria-pressed={subjectFilter === 'all'}
          onClick={() => setSubjectFilter('all')}
        >
          All subjects
        </Chip>
        {subjectNames.map((name) => (
          <Chip
            key={name}
            selected={subjectFilter === name}
            aria-pressed={subjectFilter === name}
            onClick={() => setSubjectFilter(name)}
          >
            {name}
          </Chip>
        ))}
      </motion.div>

      {stats.total === 0 ? (
        <motion.div variants={fadeInUp} className="mt-8 flex flex-col items-center card p-10 text-center">
          <p className="text-lg font-semibold text-fg">No questions answered yet</p>
          <p className="readable mt-1 max-w-sm text-sm text-muted">
            Do an MCQ or exam-question session and this page fills in with exactly what you got
            wrong.
          </p>
          <Button as={Link} to="/study" className="mt-5">
            <Icon name="play" className="h-4 w-4" />
            Start a session
          </Button>
        </motion.div>
      ) : (
        <>
          {/* headline stats */}
          <motion.div variants={staggerContainer} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
            <StatCard label="Answered" value={stats.total} />
            <StatCard label="Correct" value={stats.correct} accent="text-success" />
            <StatCard label="Wrong" value={stats.wrong} accent="text-danger" />
            <StatCard label="Didn't know" value={stats.dontKnow} accent="text-warning" />
            <StatCard label="Accuracy" value={`${stats.accuracy}%`} accent="text-brand-strong" />
          </motion.div>

          {/* mock exam results - separate from the question-level mistake log below */}
          {mockResults.length > 0 && (
            <motion.div variants={fadeInUp} className="mt-6 card p-6">
              <h2 className="text-lg font-bold text-fg">Mock exam results</h2>
              <p className="readable mt-1 text-sm text-muted">
                Every paper you've taken, most recent first. Anything you got wrong on one still
                shows up in Focus here and Recent mistakes below.
              </p>
              <ul className="mt-2">
                {mockResults.map((s) => (
                  <MockResultRow key={s.id} s={s} />
                ))}
              </ul>
            </motion.div>
          )}

          {/* misconceptions (§7): grouped by the actual error where content
              tags one, chapter otherwise - the resolution-tracked view,
              distinct from the raw miss-ratio in Focus here below. */}
          {mistakeGroups.length > 0 && (
            <motion.div variants={fadeInUp} className="mt-8 card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-fg">Misconceptions</h2>
                  <p className="readable mt-1 text-sm text-muted">
                    Stays here until you get two in a row right. Then it moves to Fixed.
                  </p>
                </div>
                {resolvedGroups.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowFixed((v) => !v)}
                    className="text-sm font-semibold text-brand-strong hover:underline"
                  >
                    {showFixed ? 'Hide' : 'Show'} fixed ({resolvedGroups.length})
                  </button>
                )}
              </div>
              {unresolvedGroups.length === 0 ? (
                <p className="readable mt-4 text-sm font-medium text-r3-solid">
                  Nothing unresolved right now.
                </p>
              ) : (
                <ul className="mt-2 divide-y divide-line">
                  {unresolvedGroups.map((g) => (
                    <MisconceptionRow key={g.key} group={g} />
                  ))}
                </ul>
              )}
              {showFixed && resolvedGroups.length > 0 && (
                <ul className="mt-3 space-y-1 border-t border-line pt-3">
                  {resolvedGroups.map((g) => (
                    <li key={g.key} className="flex items-center gap-2 text-sm text-muted">
                      <Icon name="check" className="h-4 w-4 shrink-0 text-r3-solid" />
                      <span className="truncate">
                        {g.misconception ? g.misconception.replace(/_/g, ' ') : g.topics[0]?.topic}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          )}

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            {/* weakest topics */}
            <motion.div variants={fadeInUp} className="card p-6">
              <h2 className="text-lg font-bold text-fg">Focus here</h2>
              <p className="readable mt-1 text-sm text-muted">Chapters with the most misses.</p>
              {weak.length === 0 ? (
                <p className="readable mt-4 text-sm text-muted">
                  No repeated mistakes yet, nice work.
                </p>
              ) : (
                <ul className="mt-4 space-y-3">
                  {weak.map((w) => (
                    <li key={w.topic} className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-fg">{w.topic}</p>
                        <p className="text-xs text-muted">{w.subject}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <span className="rounded-full bg-danger/15 px-2.5 py-1 text-xs font-bold text-danger">
                          {w.misses}/{w.total} missed
                        </span>
                        <Button
                          as={Link}
                          to={`/study/${slugify(w.subject)}/mcq`}
                          variant="subtle"
                          size="sm"
                        >
                          Revise
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>

            {/* mistake log */}
            <motion.div variants={fadeInUp} className="card p-6">
              <h2 className="text-lg font-bold text-fg">Recent mistakes</h2>
              <p className="readable mt-1 text-sm text-muted">Most recent first, up to 40 shown.</p>
              {missed.length === 0 ? (
                <p className="readable mt-4 text-sm text-muted">Nothing missed here, nice work.</p>
              ) : (
                <ul className="mt-2">
                  {missed.slice(0, 40).map((m) => (
                    <MistakeRow key={m.id} m={m} />
                  ))}
                </ul>
              )}
            </motion.div>
          </div>
        </>
      )}
    </Section>
  )
}
