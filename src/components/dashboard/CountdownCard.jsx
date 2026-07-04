import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { fadeInUp } from '@/lib/motion'
import { useApp } from '@/context/AppProvider'

// Whole days between now and the exam date (yyyy-mm-dd).
function daysUntil(dateStr) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const target = new Date(dateStr + 'T00:00:00')
  return Math.round((target - today) / 86400000)
}

export default function CountdownCard() {
  const { exam, setExam } = useApp()
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(exam?.name || '')
  const [date, setDate] = useState(exam?.date || '')

  const save = (e) => {
    e.preventDefault()
    if (!date) return
    setExam({ name: name.trim() || 'Exam', date })
    setEditing(false)
  }

  const showForm = editing || !exam
  const left = exam ? daysUntil(exam.date) : null

  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-2xl border border-line bg-gradient-to-br from-brand-soft to-surface p-6"
    >
      {showForm ? (
        <form onSubmit={save}>
          <p className="flex items-center gap-2 font-semibold text-fg">
            <Icon name="calendar" className="h-5 w-5 text-brand-strong" />
            {exam ? 'Edit your exam' : 'Add an exam countdown'}
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Exam name (e.g. Biology Paper 1)"
              className="flex-1 rounded-xl border border-line bg-surface px-4 py-2.5 text-fg placeholder:text-muted focus:border-brand focus:outline-none"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="rounded-xl border border-line bg-surface px-4 py-2.5 text-fg focus:border-brand focus:outline-none"
            />
          </div>
          <div className="mt-3 flex gap-2">
            <Button type="submit" size="sm" disabled={!date}>
              Set countdown
            </Button>
            {exam && (
              <Button type="button" variant="ghost" size="sm" onClick={() => setEditing(false)}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      ) : (
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-strong">
              {exam.name}
            </p>
            <p className="mt-1 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold tabular-nums text-fg">
                {Math.max(0, left)}
              </span>
              <span className="text-lg font-semibold text-muted">
                {left <= 0 ? 'today!' : left === 1 ? 'day left' : 'days left'}
              </span>
            </p>
            <p className="mt-1 text-sm text-muted">
              {new Date(exam.date + 'T00:00:00').toLocaleDateString(undefined, {
                weekday: 'short',
                day: 'numeric',
                month: 'long',
              })}
            </p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setName(exam.name)
              setDate(exam.date)
              setEditing(true)
            }}
          >
            <Icon name="calendar" className="h-4 w-4" />
            Edit
          </Button>
        </div>
      )}
    </motion.div>
  )
}
