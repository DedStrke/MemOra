import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import RevisionRunner from '@/components/ui/RevisionRunner'
import Chip from '@/components/ui/Chip'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { STUDY_TECHNIQUES } from '@/constants/content'
import { getPackByName } from '@/constants/library'
import { lastSessionForSubject, isTough } from '@/lib/sessions'
import { useApp } from '@/context/AppProvider'
import { slugify, resolveSlug } from '@/lib/slug'

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

function ChapterPicker({ pack, onPick }) {
  return (
    <motion.div variants={fadeInUp} initial="hidden" animate="show" exit={{ opacity: 0 }}>
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-strong">
        {pack.name}
      </p>
      <h1 className="mt-2 text-3xl font-bold text-fg">Pick a chapter</h1>
      <p className="readable mt-2 text-muted">
        Study everything, or focus on one topic at a time.
      </p>

      <motion.div variants={staggerContainer} className="mt-6">
        <motion.button
          variants={fadeInUp}
          type="button"
          onClick={() => onPick(ALL)}
          className="mb-6 flex w-full items-center justify-between rounded-2xl border border-brand bg-brand-soft px-5 py-4 text-left transition-colors hover:bg-brand-soft/80"
        >
          <span>
            <span className="block font-bold text-brand-strong">All chapters</span>
            <span className="block text-sm text-muted">Mixed practice across the whole subject</span>
          </span>
          <Icon name="shuffle" className="h-5 w-5 shrink-0 text-brand-strong" />
        </motion.button>

        {pack.groups?.length ? (
          <div className="space-y-8">
            {pack.groups.map((group) => (
              <div key={group.label}>
                <h2 className="text-sm font-bold uppercase tracking-wide text-fg">{group.label}</h2>
                {group.subgroups.map((sub) => (
                  <div key={sub.label} className="mt-3">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                      {sub.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {sub.topics.map((topic) => (
                        <Chip key={topic} onClick={() => onPick(topic)}>
                          {topic}
                        </Chip>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {pack.topics.map((topic) => (
              <Chip key={topic} onClick={() => onPick(topic)}>
                {topic}
              </Chip>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function StudySession() {
  const { subjectSlug, technique: techniqueParam } = useParams()
  const navigate = useNavigate()
  const { user, setRecentTopic, logSession, logAttempt, sessions } = useApp()

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
  const hasChapters = Boolean(pack?.groups?.length)

  // chapter | ready | running | done | done-N (difficulty rating saved)
  const [phase, setPhase] = useState(hasChapters ? 'chapter' : 'ready')
  const [chapter, setChapter] = useState(ALL) // ALL, or a specific topic title
  const [runPack, setRunPack] = useState(null) // shuffled, chapter-scoped copy of pack
  const [startedAt, setStartedAt] = useState(null) // real wall-clock time studying began

  const chapterLabel = chapter === ALL ? subjectLabel : chapter

  // Real adaptation: read how this chapter/subject went last time.
  const lastForSubject = lastSessionForSubject(sessions, subject)
  const adaptiveNote = useMemo(() => {
    if (!lastForSubject) return null
    if (isTough(lastForSubject))
      return `Last time ${subjectLabel} felt tough, so take it steady this round.`
    if (lastForSubject.difficulty <= 2)
      return `You breezed through ${subjectLabel} last time. Want to push a little further?`
    return null
  }, [lastForSubject, subjectLabel])

  const pickChapter = (t) => {
    setChapter(t)
    setPhase('ready')
  }

  // Jump straight into another technique on the same chapter, from the empty
  // state. Writes the URL so a refresh (or a shared link) keeps the switch.
  const switchTechnique = (nextTechnique) => {
    navigate(`/study/${slugify(subject)}/${nextTechnique}`, { replace: true })
  }

  const startStudying = () => {
    if (!pack) return
    const inChapter = (items) =>
      chapter === ALL ? items : items.filter((it) => it.topic === chapter)
    setRunPack({
      ...pack,
      flashcards: shuffle(inChapter(pack.flashcards)),
      mcq: shuffle(inChapter(pack.mcq)).map(shuffleOptions),
      examQuestions: shuffle(inChapter(pack.examQuestions)),
    })
    setStartedAt(Date.now())
    setPhase('running')
  }

  const rateDifficulty = (n) => {
    // Real elapsed time, not a guess - this is what the dashboard's "hours
    // spent" is built from. Clamp to a sane range in case a tab was left open.
    const minutes = startedAt ? Math.min(180, Math.round((Date.now() - startedAt) / 60000)) : 0
    logSession({
      subject,
      technique,
      difficulty: n,
      topic: chapter === ALL ? null : chapter,
      minutes,
    })
    setRecentTopic(`${chapterLabel} · ${techniqueLabel}`)
    setPhase(`done-${n}`)
  }

  return (
    <Section width="narrow" animateOnMount className="pt-10 pb-28">
      <motion.div variants={fadeInUp} className="mb-6">
        <Button as={Link} to="/dashboard" variant="ghost" size="sm">
          <Icon name="arrowLeft" className="h-4 w-4" />
          Dashboard
        </Button>
      </motion.div>

      <AnimatePresence mode="wait">
        {/* CHAPTER PICKER */}
        {phase === 'chapter' && pack && (
          <ChapterPicker key="chapter" pack={pack} onPick={pickChapter} />
        )}

        {/* READY */}
        {phase === 'ready' && (
          <motion.div key="ready" variants={fadeInUp} initial="hidden" animate="show" exit={{ opacity: 0 }} className="text-center">
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
              <Button onClick={startStudying} size="lg">
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
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 card p-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                  Studying · {techniqueLabel}
                </p>
                <h1 className="truncate text-xl font-bold text-fg">{chapterLabel}</h1>
              </div>
              <Button size="sm" onClick={() => setPhase('done')}>
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
