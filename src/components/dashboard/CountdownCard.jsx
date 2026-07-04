import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { fadeInUp, staggerContainer, popIn } from '@/lib/motion'

/*
  Multi-exam countdown.

  Exams live in localStorage under 'adapthub:exams' as an array of
  { id, name, date }. This card reads and writes that key directly so it does
  not depend on the app store's single `exam` slice. Boxes share one row with
  flex-1, so a lone exam is a wide rectangle and each added exam makes every box
  narrower while keeping the same height. They wrap on small screens.
*/
const STORAGE_KEY = 'adapthub:exams'

// Whole days between today and the exam date (yyyy-mm-dd).
function daysUntil(dateStr) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const target = new Date(dateStr + 'T00:00:00')
  return Math.round((target - today) / 86400000)
}

function loadExams() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((e) => e && e.date).map((e) => ({
      id: e.id || 'exam' + Math.random().toString(36).slice(2),
      name: e.name || 'Exam',
      date: e.date,
    }))
  } catch {
    return []
  }
}

// Urgency colour for the day count, using semantic tokens only.
function urgencyClass(left) {
  if (left <= 0) return 'text-danger'
  if (left < 7) return 'text-danger'
  if (left < 21) return 'text-warning'
  return 'text-fg'
}

function formatDate(dateStr) {
  return new Date(dateStr + 'T00:00:00').toLocaleDateString(undefined, {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
  })
}

export default function CountdownCard() {
  const [exams, setExams] = useState([])
  const [name, setName] = useState('')
  const [date, setDate] = useState('')

  // Load once on mount.
  useEffect(() => {
    setExams(loadExams())
  }, [])

  // Persist whenever the list changes.
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(exams))
    } catch {
      /* storage unavailable, non-fatal */
    }
  }, [exams])

  // Soonest first.
  const sorted = useMemo(
    () => [...exams].sort((a, b) => daysUntil(a.date) - daysUntil(b.date)),
    [exams],
  )

  const addExam = (e) => {
    e.preventDefault()
    if (!date) return
    setExams((list) => [
      ...list,
      {
        id: 'exam' + Date.now().toString(36),
        name: name.trim() || 'Exam',
        date,
      },
    ])
    setName('')
    setDate('')
  }

  const removeExam = (id) => setExams((list) => list.filter((e) => e.id !== id))

  return (
    <motion.div variants={fadeInUp} className="card p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="kicker">
          <Icon name="calendar" className="h-4 w-4" aria-hidden="true" />
          Exam countdown
        </span>
        <p className="text-sm text-muted">
          {sorted.length === 0
            ? 'No exams yet'
            : sorted.length === 1
              ? '1 exam tracked'
              : `${sorted.length} exams tracked`}
        </p>
      </div>

      {sorted.length > 0 && (
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mt-5 flex flex-wrap gap-3"
        >
          {sorted.map((exam) => {
            const left = daysUntil(exam.date)
            const shown = Math.max(0, left)
            return (
              <motion.li
                key={exam.id}
                variants={popIn}
                className="relative flex min-w-[10rem] flex-1 basis-40 flex-col justify-between rounded-2xl border border-line bg-brand-soft p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="pr-1 text-sm font-semibold text-brand-strong">{exam.name}</p>
                  <button
                    type="button"
                    onClick={() => removeExam(exam.id)}
                    aria-label={`Remove ${exam.name} countdown`}
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-danger focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <Icon name="x" className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>

                <p className="mt-3 flex items-baseline gap-2">
                  <span
                    className={`text-4xl font-extrabold tabular-nums ${urgencyClass(left)}`}
                  >
                    {shown}
                  </span>
                  <span className="text-sm font-semibold text-muted">
                    {left <= 0 ? 'today!' : left === 1 ? 'day left' : 'days left'}
                  </span>
                </p>

                <p className="mt-2 text-xs text-muted">{formatDate(exam.date)}</p>
              </motion.li>
            )
          })}
        </motion.ul>
      )}

      <form onSubmit={addExam} className="mt-5 border-t border-line pt-5">
        <p className="flex items-center gap-2 text-sm font-semibold text-fg">
          <Icon name="plus" className="h-4 w-4 text-brand-strong" aria-hidden="true" />
          Add exam date
        </p>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <label className="flex-1">
            <span className="sr-only">Exam name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Exam name (e.g. Biology Paper 1)"
              className="w-full rounded-xl border border-line bg-surface px-4 py-2.5 text-fg placeholder:text-muted focus:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            />
          </label>
          <label>
            <span className="sr-only">Exam date</span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-xl border border-line bg-surface px-4 py-2.5 text-fg focus:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:w-auto"
            />
          </label>
          <Button type="submit" size="sm" disabled={!date} className="shrink-0">
            <Icon name="plus" className="h-4 w-4" aria-hidden="true" />
            Add exam date
          </Button>
        </div>
      </form>
    </motion.div>
  )
}
