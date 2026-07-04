import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { PRIORITISED_COURSES, specsFor } from '@/constants/content'
import { useApp } from '@/context/AppProvider'

/*
  Manage courses (route /courses). Add, rename, re-board, remove and re-prioritise
  the learner's subjects, then save straight to the profile via setSubjects. The
  dashboard reads the same list, so changes show up immediately.
*/
export default function Courses() {
  const navigate = useNavigate()
  const { user, setSubjects } = useApp()
  const prioritised = PRIORITISED_COURSES.includes(user?.courseType)
  const boards = specsFor(user?.courseType)
  const nextId = useRef(1000)

  const [rows, setRows] = useState(() => {
    const existing = (user?.subjects || []).map((s, i) => ({
      id: s.id ?? i,
      name: s.name || '',
      spec: s.spec || '',
      priority: !!s.priority,
    }))
    return existing.length ? existing : [{ id: 0, name: '', spec: '', priority: true }]
  })

  const update = (id, patch) =>
    setRows((r) => r.map((x) => (x.id === id ? { ...x, ...patch } : x)))
  const add = () =>
    setRows((r) => [...r, { id: nextId.current++, name: '', spec: '', priority: false }])
  const remove = (id) => setRows((r) => (r.length > 1 ? r.filter((x) => x.id !== id) : r))
  const star = (id) => setRows((r) => r.map((x) => ({ ...x, priority: x.id === id })))

  const cleaned = rows
    .filter((s) => s.name.trim())
    .map((s) => ({ ...s, name: s.name.trim(), spec: s.spec.trim() }))
  const canSave = cleaned.length > 0

  const save = () => {
    if (!canSave) return
    if (prioritised && !cleaned.some((s) => s.priority)) cleaned[0].priority = true
    setSubjects(cleaned)
    navigate('/dashboard')
  }

  // University learners have a single course, not a subject list.
  if (user?.courseType === 'University') {
    return (
      <Section width="narrow" animateOnMount className="pt-8 pb-28">
        <motion.div variants={fadeInUp}>
          <Button as={Link} to="/dashboard" variant="ghost" size="sm">
            <Icon name="arrowLeft" className="h-4 w-4" />
            Dashboard
          </Button>
        </motion.div>
        <motion.div variants={fadeInUp} className="mt-8 rounded-2xl border border-line bg-surface p-8 text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
            <Icon name="cap" className="h-6 w-6" />
          </span>
          <h1 className="mt-4 text-2xl font-bold text-fg">You are on a single course</h1>
          <p className="readable mt-2 text-muted">
            You signed up studying <span className="font-semibold text-fg">{user.courseName}</span>.
            Subject lists are for school qualifications like GCSEs and A-levels.
          </p>
        </motion.div>
      </Section>
    )
  }

  const inputClass =
    'min-w-0 flex-1 rounded-lg border border-line bg-surface px-3 py-2 text-fg placeholder:text-muted focus:border-brand focus:outline-none'

  return (
    <Section width="narrow" animateOnMount className="pt-8 pb-28">
      <motion.div variants={fadeInUp}>
        <Button as={Link} to="/dashboard" variant="ghost" size="sm">
          <Icon name="arrowLeft" className="h-4 w-4" />
          Dashboard
        </Button>
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-6">
        <h1 className="text-3xl font-extrabold text-fg sm:text-4xl">Your courses</h1>
        <p className="readable mt-1 text-muted">
          Add or remove subjects and set your exam boards.
          {prioritised ? ' Star the one you want front and centre.' : ''}
        </p>
      </motion.div>

      <motion.div variants={staggerContainer} className="mt-6 space-y-3">
        {rows.map((s) => (
          <motion.div
            key={s.id}
            variants={fadeInUp}
            className="flex items-center gap-2 rounded-2xl border border-line bg-surface p-2.5"
          >
            {prioritised && (
              <button
                type="button"
                onClick={() => star(s.id)}
                aria-label={s.priority ? 'Top priority subject' : 'Mark as top priority'}
                aria-pressed={s.priority}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                  s.priority ? 'bg-brand text-on-brand' : 'text-muted hover:bg-raised'
                }`}
              >
                <Icon name="star" className="h-5 w-5" />
              </button>
            )}
            <input
              type="text"
              value={s.name}
              onChange={(e) => update(s.id, { name: e.target.value })}
              placeholder="Subject"
              className={inputClass}
            />
            <select
              value={s.spec}
              onChange={(e) => update(s.id, { spec: e.target.value })}
              aria-label="Exam board"
              className="shrink-0 rounded-lg border border-line bg-surface px-2.5 py-2 text-sm text-fg focus:border-brand focus:outline-none"
            >
              <option value="">Board</option>
              {boards.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => remove(s.id)}
              aria-label="Remove subject"
              disabled={rows.length === 1}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted hover:bg-raised disabled:opacity-30"
            >
              <Icon name="x" className="h-4 w-4" />
            </button>
          </motion.div>
        ))}
      </motion.div>

      <button
        type="button"
        onClick={add}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-line py-3 text-sm font-medium text-brand-strong hover:border-brand hover:bg-brand-soft"
      >
        <Icon name="plus" className="h-4 w-4" />
        Add another subject
      </button>

      <div className="mt-8 flex items-center justify-between gap-3">
        <Button as={Link} to="/dashboard" variant="ghost">
          Cancel
        </Button>
        <Button onClick={save} size="lg" disabled={!canSave}>
          <Icon name="check" className="h-5 w-5" />
          Save courses
        </Button>
      </div>
    </Section>
  )
}
