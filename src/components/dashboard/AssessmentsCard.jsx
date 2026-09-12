import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { useApp } from '@/context/AppProvider'
import { ASSESSMENT_TYPES, ASSESSMENT_CALENDAR, assessmentType } from '@/constants/assessments'
import { getPackByName } from '@/constants/library'
import { subjectColor } from '@/constants/content'
import { relevantTopics, subjectReadiness } from '@/lib/pace'
import { daysUntilDate } from '@/lib/sessions'
import { slugify } from '@/lib/slug'
import { fadeInUp } from '@/lib/motion'

/*
  Upcoming assessments - DA, IA, mock or the real paper - each with a
  readiness bar underneath that says, honestly, how far the subject is
  from where it needs to be, and names the weakest chapter so the next
  session has a target.

  The bar is the subject's quality-weighted readiness (lib/pace.js), the
  same number the rail quotes; the marker on it is where a steady pace
  from today would need you to be, which is simply "all of it" at zero
  days and proportionally less further out. Behind is a gap, ahead is
  fine. The type decides the tone of the deadline: a DA at 3 days is
  amber, a final at 3 days is red.

  Adding a date lives here too, inline, so the second setup step no
  longer means leaving the dashboard.
*/

const BAND_ORDER = ['not_started', 'seen', 'shaky', 'solid', 'exam-ready']

function weakest(pack, isYear12, chapterStates) {
  const topics = relevantTopics(pack, isYear12)
  let worst = null
  for (const topic of topics) {
    const st = chapterStates.get(`${pack.name}␟${topic}`)
    const band = st?.band || 'not_started'
    const rank = BAND_ORDER.indexOf(band)
    if (!worst || rank < worst.rank) worst = { topic, band, rank }
  }
  return worst
}

function TypeBadge({ type }) {
  const t = assessmentType(type)
  return <span className={`hero-type hero-type-${t.tone}`}>{t.short}</span>
}

export function AssessmentQuickAdd({ subjects, defaultType = 'DA', onDone }) {
  const { addExamDate, importAssessments, showToast } = useApp()
  const [type, setType] = useState(defaultType)
  const [subject, setSubject] = useState(subjects[0] || '')
  const [label, setLabel] = useState('')
  const [date, setDate] = useState('')
  const t = assessmentType(type)

  const submit = (e) => {
    e.preventDefault()
    if (!date) return
    addExamDate({ subject: subject || null, paperLabel: label.trim() || t.label, date, type })
    setLabel('')
    setDate('')
    showToast(`${t.short} added`)
    onDone?.()
  }

  const calendar = ASSESSMENT_CALENDAR.filter((e) => !subjects.length || subjects.includes(e.subject))

  return (
    <form onSubmit={submit} className="rounded-2xl border border-dashed border-line bg-page p-4">
      <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="Assessment type">
        {ASSESSMENT_TYPES.map((x) => (
          <button
            key={x.id}
            type="button"
            role="radio"
            aria-checked={type === x.id}
            onClick={() => setType(x.id)}
            className={`rounded-full border px-3 py-1 text-xs font-bold transition-colors ${
              type === x.id ? 'border-brand bg-brand text-on-brand' : 'border-line bg-surface text-fg hover:border-brand'
            }`}
          >
            {x.short}
          </button>
        ))}
      </div>
      <p className="mt-1.5 text-[0.7rem] text-muted">{t.blurb}</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto_auto]">
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          aria-label="Subject"
          className="rounded-xl border border-line bg-surface px-3 py-2 text-sm text-fg focus:border-brand focus:outline-none"
        >
          <option value="">Any subject</option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <input
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder={type === 'final' ? 'Paper 1' : `${t.short} 1 · topic`}
          aria-label="Label"
          className="min-w-0 rounded-xl border border-line bg-surface px-3 py-2 text-sm text-fg placeholder:text-muted focus:border-brand focus:outline-none"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          aria-label="Date"
          className="rounded-xl border border-line bg-surface px-3 py-2 text-sm text-fg focus:border-brand focus:outline-none"
        />
        <Button type="submit" size="sm" disabled={!date}>
          <Icon name="plus" className="h-4 w-4" />
          Add
        </Button>
      </div>
      {calendar.length > 0 && (
        <button
          type="button"
          onClick={() => {
            importAssessments(calendar)
            showToast(`${calendar.length} dates loaded`)
            onDone?.()
          }}
          className="mt-3 text-xs font-semibold text-brand-strong hover:underline"
        >
          Load this year&apos;s DA and IA dates ({calendar.length})
        </button>
      )}
    </form>
  )
}

export default function AssessmentsCard({ examDates, subjects, isYear12, chapterStates, limit = 5, showAdd }) {
  const [adding, setAdding] = useState(Boolean(showAdd))
  const sorted = [...examDates]
    .filter((e) => daysUntilDate(e.date) >= -1)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, limit)

  return (
    <motion.section variants={fadeInUp} id="assessments" className="card p-5 sm:p-6" aria-label="Assessments">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-extrabold text-fg">Assessments</h2>
          <p className="text-xs text-muted">DA · IA · mocks · finals, with how ready you are for each</p>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/profile#assessments" className="text-xs font-semibold text-brand-strong hover:underline">
            All dates
          </Link>
          <Button size="sm" variant={adding ? 'ghost' : 'secondary'} onClick={() => setAdding((v) => !v)}>
            <Icon name={adding ? 'x' : 'plus'} className="h-4 w-4" />
            {adding ? 'Close' : 'Add'}
          </Button>
        </div>
      </div>

      {adding && (
        <div className="mt-4">
          <AssessmentQuickAdd subjects={subjects} onDone={() => setAdding(false)} />
        </div>
      )}

      {sorted.length === 0 ? (
        !adding && (
          <p className="mt-4 text-sm text-muted">
            No dates yet. Add your DAs, IAs and mocks and every countdown, pace estimate and
            readiness bar on this page starts working.
          </p>
        )
      ) : (
        <ul className="mt-4 space-y-3">
          {sorted.map((e) => {
            const left = daysUntilDate(e.date)
            const t = assessmentType(e.type)
            const pack = e.subject ? getPackByName(e.subject) : null
            const ready = pack ? subjectReadiness({ pack, isYear12, chapterStates }) ?? 0 : null
            const weak = pack ? weakest(pack, isYear12, chapterStates) : null
            const colour = e.subject ? subjectColor(e.subject) : 'var(--brand)'
            // Where a steady pace should have you by now: full at 0 days,
            // scaled over a 60-day run-up. Beyond that, the bar is just
            // "how ready", with no expectation drawn.
            const expected = left <= 0 ? 1 : left >= 60 ? null : 1 - left / 60
            const urgentAt = e.type === 'final' ? 21 : e.type === 'mock' ? 14 : 7
            const tone = left <= 0 ? 'text-danger' : left <= urgentAt ? 'text-r2-shaky' : 'text-fg'
            const behind = ready !== null && expected !== null && ready < expected - 0.1
            return (
              <li key={e.id} className="rounded-xl border border-line bg-surface p-3.5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-start gap-2.5">
                    <TypeBadge type={e.type} />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-fg">
                        {e.subject ? `${e.subject} · ` : ''}
                        {e.paperLabel}
                      </p>
                      <p className="text-xs text-muted">
                        {new Date(e.date + 'T00:00:00').toLocaleDateString(undefined, {
                          weekday: 'short',
                          day: 'numeric',
                          month: 'short',
                        })}
                        {' · '}
                        {t.label}
                      </p>
                    </div>
                  </div>
                  <p className={`shrink-0 text-xl font-extrabold tabular-nums ${tone}`}>
                    {left < 0 ? 'done' : left === 0 ? 'today' : `${left}d`}
                  </p>
                </div>
                {pack && (
                  <div className="mt-2.5">
                    <div className="relative h-2 overflow-hidden rounded-full bg-line/70">
                      <div
                        className="h-full rounded-full transition-[width] duration-700"
                        style={{ width: `${Math.max(2, (ready || 0) * 100)}%`, background: colour }}
                      />
                      {expected !== null && (
                        <span
                          aria-hidden="true"
                          className="absolute top-0 h-full w-0.5 bg-fg/70"
                          style={{ left: `${expected * 100}%` }}
                          title="Where a steady pace would have you by now"
                        />
                      )}
                    </div>
                    <div className="mt-1.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[0.72rem]">
                      <span className={behind ? 'font-semibold text-r2-shaky' : 'text-muted'}>
                        <span className="font-bold text-fg">{Math.round((ready || 0) * 100)}%</span> ready
                        {behind ? ' · behind pace' : expected !== null ? ' · on pace' : ''}
                      </span>
                      {weak && weak.band !== 'exam-ready' && (
                        <Link
                          to={`/study/${slugify(pack.name)}/flashcards?chapter=${encodeURIComponent(weak.topic)}`}
                          className="truncate font-semibold text-brand-strong hover:underline"
                        >
                          Weakest: {weak.topic} →
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </motion.section>
  )
}
