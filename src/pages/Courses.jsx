import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import SubjectPicker from '@/components/ui/SubjectPicker'
import { fadeInUp } from '@/lib/motion'
import { PRIORITISED_COURSES, specsFor, YEAR_GROUPS } from '@/constants/content'
import { useApp } from '@/context/AppProvider'

// Only the school-qualification year groups - University has its own branch
// below and doesn't reach this picker.
const SCHOOL_YEAR_GROUPS = YEAR_GROUPS.filter((y) => y !== 'University')

/*
  Manage courses (route /courses). Tap subjects to add or remove them, set the
  exam board and priority, then save straight to the profile via setSubjects. The
  dashboard reads the same list, so changes show up immediately.
*/
export default function Courses() {
  const navigate = useNavigate()
  const { user, setSubjects, setYearGroup } = useApp()
  const prioritised = PRIORITISED_COURSES.includes(user?.courseType)
  const boards = specsFor(user?.courseType)

  const [rows, setRows] = useState(() =>
    (user?.subjects || []).map((s, i) => ({
      id: s.id ?? i,
      name: s.name || '',
      spec: s.spec || '',
      priority: !!s.priority,
    })),
  )
  const [yearGroup, setYearGroupLocal] = useState(user?.yearGroup || 'Year 13')

  const cleaned = rows
    .filter((s) => s.name.trim())
    .map((s) => ({ ...s, name: s.name.trim(), spec: (s.spec || '').trim() }))
  const canSave = cleaned.length > 0

  const save = () => {
    if (!canSave) return
    if (prioritised && !cleaned.some((s) => s.priority)) cleaned[0].priority = true
    setSubjects(cleaned)
    setYearGroup(yearGroup)
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
        <motion.div variants={fadeInUp} className="mt-8 card p-8 text-center">
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

      <motion.div variants={fadeInUp} className="mt-6">
        <p className="mb-2 text-sm font-semibold text-fg">Year group</p>
        <p className="mb-3 text-xs text-muted">
          For A-levels, this decides whether mock exams include Year 2 (A2) content yet, or stick
          to Year 1 (AS) until you're there.
        </p>
        <div className="flex flex-wrap gap-2">
          {SCHOOL_YEAR_GROUPS.map((y) => (
            <button
              key={y}
              type="button"
              onClick={() => setYearGroupLocal(y)}
              aria-pressed={yearGroup === y}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                yearGroup === y
                  ? 'border-brand bg-brand text-on-brand'
                  : 'border-line bg-surface text-fg hover:border-brand'
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-6">
        <SubjectPicker
          subjects={rows}
          onChange={setRows}
          prioritised={prioritised}
          boards={boards}
        />
      </motion.div>

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
