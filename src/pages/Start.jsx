import { useMemo } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import BandBar from '@/components/ui/BandBar'
import { useApp } from '@/context/AppProvider'
import { PRIORITISED_COURSES, subjectColor } from '@/constants/content'
import { getPackByName } from '@/constants/library'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { slugify, resolveSlug } from '@/lib/slug'
import { computeAllChapterStates } from '@/lib/attempts'
import { computeNextBestAction, relevantTopics, subjectBandCounts, subjectReadiness } from '@/lib/pace'
import { ALL_TECHNIQUES, techniqueHasContent, studyPathFor, normaliseMode } from '@/lib/techniques'

/*
  Start: the two screens between "I want to revise" and revising.

    /start                  which subject   (three cards)
    /start/:subject         which method    (eight tiles)
    /start/:subject?chapter=X   the same, but for one named chapter - the
                            route a gap on the dashboard takes, so every
                            method here leads back to that chapter.

  Picking a method goes to the study page's chapter list (or straight to
  the chapter when one was named). This used to be a modal on the
  dashboard; the user wanted it to be a place, not a popup - a page you
  arrive at, with room to breathe.

  Each method tile shows how much of that kind of content the subject
  actually has, so the choice is informed rather than a list of names,
  and the one the recommender would pick is marked.
*/

const stat = (pack, id) => {
  switch (normaliseMode(id)) {
    case 'notes':
      return `${Object.keys(pack.notes || {}).length} chapters`
    case 'flashcards':
    case 'active-recall':
    case 'blurting':
      return `${pack.flashcards?.length || 0} cards`
    case 'mcq':
      return `${pack.mcq?.length || 0} questions`
    case 'exam-questions':
      return `${pack.examQuestions?.length || 0} questions with mark schemes`
    case 'essay-plans':
      return `${pack.essayBank?.length || 0} essay questions`
    case 'mock':
      return 'timed paper, randomised'
    default:
      return ''
  }
}

const ICON_TINT = {
  notes: '#2f8bd4',
  flashcards: '#7c6cf0',
  'exam-questions': '#d9557f',
  mcq: '#2e9e6b',
  blurting: '#e08a2c',
  'active-recall': '#0d9488',
  'essay-plans': '#b45309',
  mock: '#4f46e5',
}

export default function Start() {
  const { subjectSlug } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { user, attempts, sessions, examDates } = useApp()
  const isYear12 = user.yearGroup === 'Year 12' && PRIORITISED_COURSES.includes(user.courseType)

  const subjectNames =
    user.courseType === 'University' && user.courseName ? [user.courseName] : (user.subjects || []).map((s) => s.name)
  const packs = subjectNames.map((n) => getPackByName(n)).filter(Boolean)
  const subject = resolveSlug(subjectSlug, subjectNames)
  const pack = subject ? getPackByName(subject) : null
  const chapter = pack?.topics?.includes(searchParams.get('chapter')) ? searchParams.get('chapter') : null

  const states = useMemo(() => computeAllChapterStates({ attempts, sessions }), [attempts, sessions])

  const recFor = (p) => {
    const exam = examDates.filter((e) => e.subject === p.name).sort((a, b) => a.date.localeCompare(b.date))[0]
    return computeNextBestAction({
      subjectPacks: [p],
      isYear12,
      attempts,
      sessions,
      examDatesBySubject: exam ? { [p.name]: exam.date } : {},
      limit: 1,
    })[0]
  }

  /* ------------------------------------------------------- SUBJECT */
  if (!pack) {
    return (
      <Section width="default" animateOnMount className="start-page pt-10 pb-28">
        <motion.div variants={fadeInUp} className="mb-8">
          <Button as={Link} to="/dashboard" variant="ghost" size="sm">
            <Icon name="arrowLeft" className="h-4 w-4" />
            Dashboard
          </Button>
          <p className="mt-5 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-strong">Start</p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl">What are we revising?</h1>
          <p className="mt-3 max-w-xl text-base text-muted">Pick a subject. Then how, then what.</p>
        </motion.div>

        {packs.length === 0 ? (
          <motion.div variants={fadeInUp} className="card p-6">
            <p className="text-base font-bold text-fg">No subjects yet</p>
            <p className="mt-1 text-sm text-muted">
              Add one in{' '}
              <Link to="/profile" className="font-semibold text-brand-strong hover:underline">
                Settings
              </Link>{' '}
              and it shows up here.
            </p>
          </motion.div>
        ) : (
          <motion.div variants={staggerContainer} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {packs.map((p) => {
              const color = subjectColor(p.name)
              const topics = relevantTopics(p, isYear12)
              const counts = subjectBandCounts({ pack: p, isYear12, chapterStates: states })
              const value = subjectReadiness({ pack: p, isYear12, chapterStates: states })
              const started = topics.length - (counts.not_started || 0)
              const rec = recFor(p)
              const spec = user.subjects?.find((s) => s.name === p.name)?.spec
              return (
                <motion.div key={p.id} variants={fadeInUp}>
                  <Link
                    to={`/start/${slugify(p.name)}`}
                    className="start-subject card card-lift group relative block overflow-hidden p-6"
                    style={{ '--subject': color }}
                  >
                    <span aria-hidden="true" className="start-subject-glow" />
                    <span
                      aria-hidden="true"
                      className="relative grid h-14 w-14 place-items-center rounded-2xl text-lg font-extrabold"
                      style={{ background: `color-mix(in srgb, ${color} 16%, transparent)`, color }}
                    >
                      {p.name.slice(0, 2).toUpperCase()}
                    </span>
                    <h2 className="relative mt-5 text-2xl font-extrabold text-fg">{p.name}</h2>
                    <p className="relative text-sm text-muted">
                      {spec ? `${spec} · ` : ''}
                      {topics.length} chapters
                    </p>
                    <div className="relative mt-5">
                      <BandBar pack={p} chapterStates={states} isYear12={isYear12} color={color} />
                    </div>
                    <p className="relative mt-2 text-xs font-semibold text-muted">
                      <span className="text-fg">{started}</span> started
                      {value !== null ? (
                        <>
                          {' · '}
                          <span className="text-fg">{Math.round(value * 100)}%</span> ready
                        </>
                      ) : null}
                    </p>
                    {rec && (
                      <p className="relative mt-4 truncate text-xs text-muted">
                        Next up: <span className="font-semibold text-fg">{rec.topic}</span>
                      </p>
                    )}
                    <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-bold" style={{ color }}>
                      Choose
                      <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </Section>
    )
  }

  /* -------------------------------------------------------- METHOD */
  const color = subjectColor(pack.name)
  const rec = recFor(pack)
  const recommended = normaliseMode(rec?.mode)
  const state = chapter ? states.get(`${pack.name}␟${chapter}`) : null

  const go = (id) => {
    navigate(chapter && id !== 'mock' ? studyPathFor(pack.name, chapter, id) : studyPathFor(pack.name, null, id))
  }

  return (
    <Section width="default" animateOnMount className="start-page pt-10 pb-28">
      <motion.div variants={fadeInUp} className="mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <Button as={Link} to="/dashboard" variant="ghost" size="sm">
            <Icon name="arrowLeft" className="h-4 w-4" />
            Dashboard
          </Button>
          {packs.length > 1 && (
            <Button as={Link} to="/start" variant="ghost" size="sm">
              Change subject
            </Button>
          )}
        </div>
        <div className="start-hero relative mt-5 overflow-hidden rounded-3xl p-7 sm:p-9" style={{ '--subject': color }}>
          <span aria-hidden="true" className="start-hero-wash absolute inset-0" />
          <span aria-hidden="true" className="start-hero-orb absolute -right-10 -top-16 h-56 w-56 rounded-full" />
          <span aria-hidden="true" className="start-hero-orb-2 absolute -bottom-20 right-1/3 h-44 w-44 rounded-full" />
          <div className="relative">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em]" style={{ color }}>
              {pack.name}
              {chapter ? ' · closing a gap' : ''}
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-fg sm:text-5xl">
              {chapter ? chapter : 'How do you want to revise?'}
            </h1>
            <p className="mt-3 max-w-xl text-base text-muted">
              {chapter
                ? `Every method below opens on this chapter${
                    state?.band === 'shaky' ? ' - answers here keep coming out wrong, so test rather than re-read' : ''
                  }.`
                : 'Pick a method; the chapters come next.'}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={staggerContainer} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ALL_TECHNIQUES.map((t) => {
          const available = techniqueHasContent(pack, t.id)
          const isRec = available && recommended === t.id
          const tint = ICON_TINT[t.id] || color
          return (
            <motion.div key={t.id} variants={fadeInUp} className="min-w-0">
              <button
                type="button"
                disabled={!available}
                onClick={() => go(t.id)}
                className={`start-method card group relative flex h-full w-full flex-col items-start overflow-hidden p-5 text-left ${
                  available ? 'card-lift' : 'cursor-not-allowed opacity-45'
                }`}
                style={{ '--tint': tint }}
              >
                <span aria-hidden="true" className="start-method-glow" />
                <span
                  className="start-method-icon relative grid h-12 w-12 place-items-center rounded-2xl"
                  style={{ background: `color-mix(in srgb, ${tint} 16%, transparent)`, color: tint }}
                >
                  <Icon name={t.icon} className="h-6 w-6" />
                </span>
                <span className="relative mt-4 text-lg font-extrabold text-fg">{t.label}</span>
                <span className="relative mt-1 text-sm text-muted">{t.desc}</span>
                <span className="relative mt-auto pt-5 text-xs font-semibold text-muted">
                  {available ? stat(pack, t.id) : `Not for ${pack.name} yet`}
                </span>
                {isRec && (
                  <span className="start-method-rec absolute right-3 top-3 rounded-full px-2 py-0.5 text-[0.62rem] font-extrabold uppercase tracking-wide">
                    Recommended
                  </span>
                )}
                {available && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-4 right-4 grid h-8 w-8 place-items-center rounded-full opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ background: tint, color: '#fff' }}
                  >
                    <Icon name="arrowRight" className="h-4 w-4" />
                  </span>
                )}
              </button>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
