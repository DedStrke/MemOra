import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import RevisionRunner from '@/components/ui/RevisionRunner'
import Buddy from '@/components/ui/Buddy'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { STUDY_TECHNIQUES, PRIORITISED_COURSES, subjectColor } from '@/constants/content'
import { getPackByName } from '@/constants/library'
import { lastSessionForSubject, isTough } from '@/lib/sessions'
import { useApp } from '@/context/AppProvider'
import { slugify, resolveSlug } from '@/lib/slug'
import { computeAllChapterStates } from '@/lib/attempts'
import { computeNextBestAction, relevantTopics } from '@/lib/pace'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const ALL = '__all__'

/*
  Shuffle an MCQ's options and remap `answer` to wherever the correct option
  landed. Without this, a pack whose questions all happen to list the correct
  option first is trivially gameable by position rather than knowledge - and
  authoring bias like that is easy to introduce and hard to spot by eye.
*/
function shuffleOptions(q) {
  if (!Array.isArray(q?.options) || typeof q.answer !== 'number') return q
  const correct = q.options[q.answer]
  const options = shuffle(q.options)
  return { ...q, options, answer: options.indexOf(correct) }
}

function Stars({ value, onRate, max = 5 }) {
  return (
    <div className="flex items-center justify-center gap-1.5">
      {Array.from({ length: max }, (_, i) => {
        const n = i + 1
        return (
          <button
            key={n}
            type="button"
            onClick={() => onRate(n)}
            aria-label={`${n} star${n > 1 ? 's' : ''}`}
            className={`transition-transform hover:scale-110 ${
              n <= value ? 'text-paper' : 'text-muted'
            }`}
          >
            <Icon name="star" filled={n <= value} className="h-9 w-9" />
          </button>
        )
      })}
    </div>
  )
}

const bandLabel = {
  not_started: 'Not started',
  seen: 'Seen once',
  shaky: 'Shaky',
  solid: 'Solid',
  'exam-ready': 'Exam-ready',
}
const bandTone = {
  not_started: 'bg-r0-not-started/25 text-fg',
  seen: 'bg-r1-seen/25 text-fg',
  shaky: 'bg-r2-shaky/20 text-r2-shaky',
  solid: 'bg-r3-solid/20 text-r3-solid',
  'exam-ready': 'bg-r4-exam-ready/20 text-r4-exam-ready',
}

/*
  The chapter list: the last screen before revising, reached from the
  Start page's method tiles. One card per chapter, grouped the way the
  specification groups them, each carrying its band; the chapters the
  recommender would send you to first are tagged, and a search box cuts
  the list down. Clicking a chapter starts the session - there is no
  "are you sure" screen in between.
*/
function ChapterPicker({ pack, technique, techniqueLabel, states, recs, topics, onPick }) {
  const [query, setQuery] = useState('')
  const color = subjectColor(pack.name)
  const q = query.trim().toLowerCase()
  const allowed = new Set(topics)
  const recRank = new Map(recs.map((r, i) => [r.topic, i]))
  const matches = (t) => allowed.has(t) && (!q || t.toLowerCase().includes(q))
  const bandOf = (t) => states.get(`${pack.name}␟${t}`)?.band || 'not_started'

  const groups = pack.groups?.length
    ? pack.groups
        .map((g) => ({
          ...g,
          subgroups: g.subgroups.map((sg) => ({ ...sg, topics: sg.topics.filter(matches) })).filter((sg) => sg.topics.length),
        }))
        .filter((g) => g.subgroups.length)
    : [{ label: null, subgroups: [{ label: null, topics: pack.topics.filter(matches) }] }]
  const shown = groups.reduce((n, g) => n + g.subgroups.reduce((m, sg) => m + sg.topics.length, 0), 0)

  const Card = ({ topic }) => {
    const band = bandOf(topic)
    const rank = recRank.get(topic)
    return (
      <button
        type="button"
        onClick={() => onPick(topic)}
        className="chapter-card card card-lift group relative flex min-h-[5.5rem] w-full flex-col items-start overflow-hidden p-4 pl-5 text-left"
        style={{ '--subject': color }}
      >
        <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1" style={{ background: color }} />
        <span className="flex w-full items-start justify-between gap-2">
          <span className="text-sm font-bold leading-snug text-fg">{topic}</span>
          <span className={`shrink-0 rounded-full px-2 py-0.5 text-[0.62rem] font-bold ${bandTone[band]}`}>{bandLabel[band]}</span>
        </span>
        <span className="mt-auto flex w-full items-center justify-between pt-3">
          {rank !== undefined ? (
            <span className="rounded-full px-2 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-wide text-white" style={{ background: color }}>
              {rank === 0 ? 'Top pick' : 'Needs you'}
            </span>
          ) : (
            <span />
          )}
          <span className="inline-flex items-center gap-1 text-xs font-bold opacity-0 transition-opacity group-hover:opacity-100" style={{ color }}>
            Start
            <Icon name="arrowRight" className="h-3.5 w-3.5" />
          </span>
        </span>
      </button>
    )
  }

  return (
    <motion.div key="chapter" variants={fadeInUp} initial="hidden" animate="show" exit={{ opacity: 0 }}>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em]" style={{ color }}>
            {pack.name} · {techniqueLabel}
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-fg sm:text-4xl">Pick a chapter</h1>
          <p className="mt-2 text-sm text-muted">
            {topics.length} chapters. Tap one and it starts.
          </p>
        </div>
        <label className="relative w-full sm:w-72">
          <span className="sr-only">Search chapters</span>
          <Icon name="target" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chapters"
            autoComplete="off"
            className="w-full rounded-full border border-line bg-surface py-2.5 pl-10 pr-4 text-sm text-fg placeholder:text-muted focus:border-brand focus:outline-none"
          />
        </label>
      </div>

      <motion.div variants={staggerContainer} className="mt-6">
        {!q && (
          <motion.button
            variants={fadeInUp}
            type="button"
            onClick={() => onPick(ALL)}
            className="chapter-all card card-lift mb-8 flex w-full items-center justify-between gap-4 overflow-hidden p-5 text-left"
            style={{ '--subject': color }}
          >
            <span className="flex min-w-0 items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white" style={{ background: color }}>
                <Icon name="shuffle" className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-base font-extrabold text-fg">The whole of {pack.name}</span>
                <span className="block text-sm text-muted">Every chapter mixed together, {technique === 'notes' ? 'in order' : 'shuffled'}</span>
              </span>
            </span>
            <Icon name="arrowRight" className="h-5 w-5 shrink-0" style={{ color }} />
          </motion.button>
        )}

        {shown === 0 ? (
          <p className="rounded-2xl border border-dashed border-line p-5 text-sm text-muted">No chapter matches that.</p>
        ) : (
          <div className="space-y-10">
            {groups.map((group, gi) => (
              <motion.div key={group.label || gi} variants={fadeInUp}>
                {group.label && <h2 className="text-base font-extrabold text-fg">{group.label}</h2>}
                {group.subgroups.map((sub, si) => (
                  <div key={sub.label || si} className={group.label ? 'mt-4' : ''}>
                    {sub.label && (
                      <p className="mb-2.5 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-muted">{sub.label}</p>
                    )}
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {sub.topics.map((topic) => (
                        <Card key={topic} topic={topic} />
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function StudySession() {
  const { subjectSlug, technique: techniqueParam } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { user, setRecentTopic, logSession, rateSession, logAttempt, sessions, attempts, examDates } = useApp()
  const isYear12 = user?.yearGroup === 'Year 12' && PRIORITISED_COURSES.includes(user?.courseType)

  const availableSubjects = user?.courseType === 'University' && user?.courseName
    ? [user.courseName]
    : (user?.subjects || []).map((s) => s.name)

  const subject =
    resolveSlug(subjectSlug, availableSubjects) ||
    user?.subjects?.find((s) => s.priority)?.name ||
    user?.subjects?.[0]?.name ||
    user?.courseName ||
    'Revision'
  const technique = techniqueParam || 'flashcards'
  const pack = getPackByName(subject)
  // `subject` can arrive as a URL slug ("computer-science"), which must never
  // reach the UI - the pack carries the properly-cased display name.
  const subjectLabel = pack?.name || subject
  const techniqueLabel =
    STUDY_TECHNIQUES.find((t) => t.id === technique)?.label || 'Focus'
  // Only offer the chapter picker when the pack actually has a `groups`
  // outline - otherwise picking a chapter would silently filter everything out.
  // The essay bank is the one technique that ignores chapters: its questions
  // are keyed by paper and spec topic, and the planner carries its own
  // filters for those, so a chapter picker here would just be a second,
  // worse version of the same thing.
  const hasChapters = Boolean(pack?.groups?.length) && technique !== 'essay-plans'

  // A chapter bar segment (Progress/Dashboard) links straight here with
  // ?chapter=<topic> so tapping it lands on that exact chapter, not the
  // picker - only honoured when it's a real topic in this pack, so a stale
  // or hand-edited link can't silently land on an empty run.
  const preselectedChapter = pack?.topics?.includes(searchParams.get('chapter'))
    ? searchParams.get('chapter')
    : null

  // chapter | ready | running | done | done-N (difficulty rating saved)
  const [phase, setPhase] = useState(preselectedChapter ? 'ready' : hasChapters ? 'chapter' : 'ready')
  const [chapter, setChapter] = useState(preselectedChapter || ALL) // ALL, or a specific topic title
  const [runPack, setRunPack] = useState(null) // shuffled, chapter-scoped copy of pack
  const [startedAt, setStartedAt] = useState(null) // real wall-clock time studying began
  // Id of the session logged when Finish was pressed, so a later rating
  // updates that record instead of creating a second one.
  const [sessionId, setSessionId] = useState(null)
  // XP the finished session earned on its own (answers add theirs as they
  // happen), shown on the done screen with the buddy cheering.
  const [earnedXp, setEarnedXp] = useState(0)
  const [cheer, setCheer] = useState(null)

  const chapterLabel = chapter === ALL ? subjectLabel : chapter

  // Real adaptation: read how this chapter/subject went last time.
  const lastForSubject = lastSessionForSubject(sessions, subject)
  const adaptiveNote = useMemo(() => {
    if (!lastForSubject) return null
    if (isTough(lastForSubject))
      return `Last time ${subjectLabel} felt tough, so take it steady this round.`
    if (typeof lastForSubject.difficulty === 'number' && lastForSubject.difficulty <= 2)
      return `You breezed through ${subjectLabel} last time. Want to push a little further?`
    return null
  }, [lastForSubject, subjectLabel])

  // Chapter states and the recommender's shortlist, for the picker's
  // band pills and "Top pick" / "Needs you" tags.
  const chapterStates = useMemo(() => computeAllChapterStates({ attempts, sessions }), [attempts, sessions])
  const pickerTopics = useMemo(() => (pack ? relevantTopics(pack, isYear12) : []), [pack, isYear12])
  const pickerRecs = useMemo(() => {
    if (!pack) return []
    const exam = examDates.filter((e) => e.subject === pack.name).sort((a, b) => a.date.localeCompare(b.date))[0]
    return computeNextBestAction({
      subjectPacks: [pack],
      isYear12,
      attempts,
      sessions,
      examDatesBySubject: exam ? { [pack.name]: exam.date } : {},
      limit: 4,
    })
  }, [pack, isYear12, attempts, sessions, examDates])

  // Tapping a chapter starts it - no "ready?" screen in between. The
  // ready screen stays for links that arrive with ?chapter= already set,
  // so following a link never starts a timed session by itself.
  const pickChapter = (t) => {
    setChapter(t)
    startStudying(t)
  }

  // Jump straight into another technique on the same chapter, from the empty
  // state. Writes the URL so a refresh (or a shared link) keeps the switch.
  const switchTechnique = (nextTechnique) => {
    navigate(`/study/${slugify(subject)}/${nextTechnique}`, { replace: true })
  }

  const startStudying = (which = chapter) => {
    if (!pack) return
    const inChapter = (items) =>
      which === ALL ? items : items.filter((it) => it.topic === which)
    setRunPack({
      ...pack,
      flashcards: shuffle(inChapter(pack.flashcards)),
      mcq: shuffle(inChapter(pack.mcq)).map(shuffleOptions),
      examQuestions: shuffle(inChapter(pack.examQuestions)),
    })
    setStartedAt(Date.now())
    setPhase('running')
  }

  // Real elapsed time, not a guess - this is what the dashboard's "hours
  // spent" is built from. Clamp to a sane range in case a tab was left open.
  const elapsedMinutes = () =>
    startedAt ? Math.min(180, Math.round((Date.now() - startedAt) / 60000)) : 0

  // The session is recorded the moment Finish is pressed. Rating it is a
  // separate, optional step that updates the same record - before this,
  // walking away from the rating screen lost the whole session, which is
  // why streaks and weekly minutes never seemed to move.
  const finishSession = () => {
    const minutes = elapsedMinutes()
    const id = logSession({
      subject,
      technique,
      difficulty: null,
      topic: chapter === ALL ? null : chapter,
      minutes,
    })
    setSessionId(id)
    setEarnedXp(minutes + 10)
    setCheer({ type: 'cheer', at: Date.now() })
    setRecentTopic(`${chapterLabel} · ${techniqueLabel}`)
    setPhase('done')
  }

  const rateDifficulty = (n) => {
    if (sessionId) rateSession(sessionId, n)
    setPhase(`done-${n}`)
  }

  // Leaving mid-run (back button, closing the tab's route) still counts
  // the minutes that were actually studied, once at least one has passed.
  const live = useRef({ phase, startedAt, sessionId })
  live.current = { phase, startedAt, sessionId }
  useEffect(
    () => () => {
      const { phase: ph, startedAt: st, sessionId: sid } = live.current
      if (ph !== 'running' || sid || !st) return
      const minutes = Math.min(180, Math.round((Date.now() - st) / 60000))
      if (minutes < 1) return
      logSession({
        subject,
        technique,
        difficulty: null,
        topic: chapter === ALL ? null : chapter,
        minutes,
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return (
    <Section width={phase === 'chapter' ? 'default' : 'narrow'} animateOnMount className="pt-10 pb-28">
      <motion.div variants={fadeInUp} className="mb-6 flex flex-wrap gap-2">
        <Button as={Link} to="/dashboard" variant="ghost" size="sm">
          <Icon name="arrowLeft" className="h-4 w-4" />
          Dashboard
        </Button>
        {phase === 'chapter' && (
          <Button as={Link} to={`/start/${slugify(subject)}`} variant="ghost" size="sm">
            Change method
          </Button>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {/* CHAPTER PICKER */}
        {phase === 'chapter' && pack && (
          <ChapterPicker
            key="chapter"
            pack={pack}
            technique={technique}
            techniqueLabel={techniqueLabel}
            states={chapterStates}
            recs={pickerRecs}
            topics={pickerTopics}
            onPick={pickChapter}
          />
        )}

        {/* READY */}
        {phase === 'ready' && (
          <motion.div key="ready" variants={fadeInUp} initial="hidden" animate="show" exit={{ opacity: 0 }} className="text-center">
            <div className="mx-auto mb-4 h-20 w-20">
              <Buddy mascot={user.mascot} className="h-full w-full" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-strong">
              {techniqueLabel}
              {chapter !== ALL ? ' · Randomised' : ''}
            </p>
            <h1 className="readable mx-auto mt-2 max-w-md text-3xl font-bold text-fg">
              Ready to study {chapterLabel}?
            </h1>
            {adaptiveNote && (
              <p className="readable mx-auto mt-4 flex max-w-md items-center gap-2 rounded-xl bg-brand-soft px-4 py-2.5 text-sm font-medium text-brand-strong">
                <Icon name="sparkles" className="h-4 w-4 shrink-0" />
                {adaptiveNote}
              </p>
            )}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button onClick={() => startStudying()} size="lg">
                <Icon name="play" className="h-5 w-5" />
                Start studying {chapter === ALL ? subjectLabel : ''}
              </Button>
              {hasChapters && (
                <Button variant="ghost" onClick={() => setPhase('chapter')}>
                  <Icon name="arrowLeft" className="h-4 w-4" />
                  Change chapter
                </Button>
              )}
            </div>
          </motion.div>
        )}

        {/* RUNNING: real, shuffled revision content */}
        {phase === 'running' && runPack && (
          <motion.div key="running" variants={fadeInUp} initial="hidden" animate="show" exit={{ opacity: 0 }}>
            {/* Sticky, under the app bar. A full chapter of notes is a long
                scroll, and Finish session used to scroll away with the top
                of the page - so ending a session meant scrolling all the way
                back up. top-[68px] clears the app bar's scrolled height. */}
            <div className="sticky top-[68px] z-30 mb-6 flex flex-wrap items-center justify-between gap-3 card p-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                  Studying · {techniqueLabel}
                </p>
                <h1 className="truncate text-xl font-bold text-fg">{chapterLabel}</h1>
              </div>
              <Button size="sm" onClick={finishSession}>
                Finish session
              </Button>
            </div>

            <RevisionRunner
              pack={runPack}
              technique={technique}
              chapter={chapter === ALL ? null : chapter}
              onSwitchTechnique={switchTechnique}
              onChangeChapter={hasChapters ? () => setPhase('chapter') : undefined}
              onAnswer={(attempt) =>
                logAttempt({
                  subject,
                  topic: chapter === ALL ? null : chapter,
                  technique,
                  ...attempt,
                })
              }
            />
          </motion.div>
        )}

        {/* DONE: difficulty rating */}
        {phase === 'done' && (
          <motion.div key="done" variants={fadeInUp} initial="hidden" animate="show" exit={{ opacity: 0 }} className="text-center">
            <div className="mx-auto h-28 w-28">
              <Buddy mascot={user.mascot} className="h-full w-full" event={cheer} />
            </div>
            <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-sm font-bold text-brand-strong">
              <Icon name="sparkles" className="h-4 w-4" />+{earnedXp} XP
            </p>
            <h1 className="mt-3 text-2xl font-bold text-fg sm:text-3xl">
              Nice work on {chapterLabel}!
            </h1>
            <p className="readable mt-2 text-muted">
              How difficult was this session, out of 5?
            </p>
            <div className="mt-6">
              <Stars value={0} onRate={rateDifficulty} />
            </div>
          </motion.div>
        )}

        {/* DONE confirmation (after difficulty rating) */}
        {phase.startsWith('done-') && (
          <motion.div key="saved" variants={fadeInUp} initial="hidden" animate="show" className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-quiz-soft text-quiz">
              <Icon name="check" className="h-8 w-8" />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-fg">Session saved</h1>
            <p className="readable mt-2 text-muted">
              You rated it {phase.split('-')[1]}/5 difficulty. Come back soon.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Button as={Link} to="/dashboard">
                <Icon name="home" className="h-5 w-5" />
                Back to dashboard
              </Button>
              <Button
                variant="secondary"
                onClick={() => setPhase(hasChapters ? 'chapter' : 'ready')}
              >
                <Icon name="refresh" className="h-5 w-5" />
                Another session
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
