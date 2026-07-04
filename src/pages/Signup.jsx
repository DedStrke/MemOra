import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import WheelLogo from '@/components/ui/WheelLogo'
import OptionCard from '@/components/ui/OptionCard'
import ProgressBar from '@/components/ui/ProgressBar'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import {
  SITE,
  ONBOARDING,
  AUTH,
  GOAL_OPTIONS,
  YEAR_GROUPS,
  COURSE_TYPES,
  PRIORITISED_COURSES,
  specsFor,
} from '@/constants/content'
import { useApp } from '@/context/AppProvider'

const TOTAL = 5 // account, year, goal, course, subjects
const validEmail = (e) => /\S+@\S+\.\S+/.test(e)

export default function Signup() {
  const navigate = useNavigate()
  const { signUp } = useApp()
  const nextId = useRef(1)

  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [yearGroup, setYearGroup] = useState('')
  const [goal, setGoal] = useState({ choice: '', text: '' })
  const [courseType, setCourseType] = useState('')
  const [courseName, setCourseName] = useState('')
  const [subjects, setSubjects] = useState([
    { id: 0, name: '', spec: '', priority: true },
  ])

  const isUniversity = courseType === 'University'
  const prioritised = PRIORITISED_COURSES.includes(courseType)
  const needsGoalText = goal.choice === 'specific' || goal.choice === 'custom'

  const addSubject = () =>
    setSubjects((s) => [
      ...s,
      { id: nextId.current++, name: '', spec: '', priority: false },
    ])
  const updateSubject = (id, patch) =>
    setSubjects((s) => s.map((x) => (x.id === id ? { ...x, ...patch } : x)))
  const removeSubject = (id) =>
    setSubjects((s) => (s.length > 1 ? s.filter((x) => x.id !== id) : s))
  const starSubject = (id) =>
    setSubjects((s) => s.map((x) => ({ ...x, priority: x.id === id })))

  const canContinue = (() => {
    switch (step) {
      case 0:
        return name.trim() !== '' && validEmail(email) && password.length > 0
      case 1:
        return yearGroup !== ''
      case 2:
        return goal.choice !== '' && (!needsGoalText || goal.text.trim() !== '')
      case 3:
        return courseType !== ''
      case 4:
        return isUniversity
          ? courseName.trim() !== ''
          : subjects.some((s) => s.name.trim() !== '')
      default:
        return true
    }
  })()

  const next = () => setStep((s) => Math.min(TOTAL - 1, s + 1))
  const back = () => setStep((s) => Math.max(0, s - 1))
  // Single-choice steps move on by themselves: one tap already tells us the
  // answer. The brief pause lets the selection highlight land first. Steps
  // where you pick several things (subjects) keep the Continue button.
  const advance = () => setTimeout(next, 240)

  const finish = () => {
    const cleanSubjects = subjects
      .filter((s) => s.name.trim() !== '')
      .map((s) => ({ ...s, name: s.name.trim(), spec: s.spec.trim() }))
    if (prioritised && cleanSubjects.length && !cleanSubjects.some((s) => s.priority)) {
      cleanSubjects[0].priority = true
    }
    signUp({
      name: name.trim(),
      email: email.trim(),
      yearGroup,
      goal,
      courseType,
      courseName: courseName.trim(),
      subjects: isUniversity ? [] : cleanSubjects,
    })
    navigate('/dashboard')
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-5 py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="mb-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-fg">
            <WheelLogo idle idleDuration={30} className="h-8 w-8 text-brand" />
            {SITE.name}
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted">
              {step + 1} / {TOTAL}
            </span>
            <ThemeSwitcher />
          </div>
        </div>
        <ProgressBar value={(step + 1) / TOTAL} />
      </div>

      <div className="flex flex-1 flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, y: -12 }}
            className="flex-1"
          >
            {/* Step 0: account */}
            {step === 0 && (
              <div>
                <motion.div variants={fadeInUp} className="mb-4 inline-flex items-center gap-2.5">
                  <WheelLogo idle idleDuration={30} className="h-11 w-11 text-brand" />
                  <span className="text-2xl font-extrabold tracking-tight text-fg">
                    {SITE.name}
                  </span>
                </motion.div>
                <StepTitle title={AUTH.accountTitle} hint={AUTH.accountHint} />
                <div className="mt-6 space-y-3">
                  <Field label="First name">
                    <input
                      autoFocus
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your first name"
                      className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-fg placeholder:text-muted focus:border-brand focus:outline-none"
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-fg placeholder:text-muted focus:border-brand focus:outline-none"
                    />
                  </Field>
                  <Field label="Password">
                    <input
                      type="password"
                      autoComplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Choose a password"
                      className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-fg placeholder:text-muted focus:border-brand focus:outline-none"
                    />
                  </Field>
                </div>
              </div>
            )}

            {/* Step 1: Year group */}
            {step === 1 && (
              <div>
                <StepTitle title={ONBOARDING.yearTitle} hint={ONBOARDING.yearHint} />
                <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap gap-2">
                  {YEAR_GROUPS.map((y) => (
                    <Pill
                      key={y}
                      active={yearGroup === y}
                      onClick={() => {
                        setYearGroup(y)
                        advance()
                      }}
                    >
                      {y}
                    </Pill>
                  ))}
                </motion.div>
              </div>
            )}

            {/* Step 2: Goal */}
            {step === 2 && (
              <div>
                <StepTitle title={ONBOARDING.goalTitle} hint={ONBOARDING.goalHint} />
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {GOAL_OPTIONS.map((g) => (
                    <OptionCard
                      key={g.id}
                      icon={g.icon}
                      label={g.label}
                      desc={g.desc}
                      selected={goal.choice === g.id}
                      onToggle={() => {
                        setGoal((x) => ({ ...x, choice: g.id }))
                        // 'specific' and 'custom' still need a typed answer, so
                        // stay on this step for those.
                        if (g.id !== 'specific' && g.id !== 'custom') advance()
                      }}
                    />
                  ))}
                </div>
                {needsGoalText && (
                  <motion.input
                    variants={fadeInUp}
                    initial="hidden"
                    animate="show"
                    autoFocus
                    type="text"
                    value={goal.text}
                    onChange={(e) => setGoal((x) => ({ ...x, text: e.target.value }))}
                    placeholder={
                      goal.choice === 'specific'
                        ? 'What do you want to get better at?'
                        : 'Tell us your goal in a few words'
                    }
                    className="mt-3 w-full rounded-xl border border-line bg-surface px-4 py-3 text-fg placeholder:text-muted focus:border-brand focus:outline-none"
                  />
                )}
              </div>
            )}

            {/* Step 3: Course type */}
            {step === 3 && (
              <div>
                <StepTitle title={ONBOARDING.courseTitle} hint={ONBOARDING.courseHint} />
                <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap gap-2">
                  {COURSE_TYPES.map((c) => (
                    <Pill
                      key={c.id}
                      active={courseType === c.id}
                      onClick={() => {
                        setCourseType(c.id)
                        advance()
                      }}
                    >
                      {c.label}
                    </Pill>
                  ))}
                </motion.div>
              </div>
            )}

            {/* Step 4: Subjects OR university course */}
            {step === 4 && (
              <div>
                {isUniversity ? (
                  <>
                    <StepTitle
                      title={ONBOARDING.courseNameTitle}
                      hint={ONBOARDING.courseNameHint}
                    />
                    <motion.input
                      variants={fadeInUp}
                      autoFocus
                      type="text"
                      value={courseName}
                      onChange={(e) => setCourseName(e.target.value)}
                      placeholder="e.g. BSc Computer Science"
                      className="mt-6 w-full rounded-xl border border-line bg-surface px-4 py-3 text-lg text-fg placeholder:text-muted focus:border-brand focus:outline-none"
                    />
                  </>
                ) : (
                  <>
                    <StepTitle
                      title={ONBOARDING.subjectsTitle}
                      hint={ONBOARDING.subjectsHint}
                    />
                    <div className="mt-6 space-y-3">
                      {subjects.map((s) => (
                        <motion.div
                          key={s.id}
                          variants={fadeInUp}
                          className="flex items-center gap-2 rounded-2xl border border-line bg-surface p-2.5"
                        >
                          {prioritised && (
                            <button
                              type="button"
                              onClick={() => starSubject(s.id)}
                              aria-label={s.priority ? 'Top priority subject' : 'Mark as top priority'}
                              aria-pressed={s.priority}
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                                s.priority
                                  ? 'bg-brand text-on-brand'
                                  : 'text-muted hover:bg-raised'
                              }`}
                            >
                              <Icon name="star" className="h-5 w-5" />
                            </button>
                          )}
                          <input
                            type="text"
                            value={s.name}
                            onChange={(e) => updateSubject(s.id, { name: e.target.value })}
                            placeholder="Subject"
                            className="min-w-0 flex-1 rounded-lg border border-line bg-surface px-3 py-2 text-fg placeholder:text-muted focus:border-brand focus:outline-none"
                          />
                          <select
                            value={s.spec}
                            onChange={(e) => updateSubject(s.id, { spec: e.target.value })}
                            aria-label="Exam board"
                            className="shrink-0 rounded-lg border border-line bg-surface px-2.5 py-2 text-sm text-fg focus:border-brand focus:outline-none"
                          >
                            <option value="">Board</option>
                            {specsFor(courseType).map((b) => (
                              <option key={b} value={b}>
                                {b}
                              </option>
                            ))}
                          </select>
                          <button
                            type="button"
                            onClick={() => removeSubject(s.id)}
                            aria-label="Remove subject"
                            disabled={subjects.length === 1}
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted hover:bg-raised disabled:opacity-30"
                          >
                            <Icon name="x" className="h-4 w-4" />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={addSubject}
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-dashed border-line py-3 text-sm font-medium text-brand-strong hover:border-brand hover:bg-brand-soft"
                    >
                      <Icon name="plus" className="h-4 w-4" />
                      Add another subject
                    </button>
                  </>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer nav */}
      <div className="mt-8 flex items-center justify-between gap-3">
        {step > 0 ? (
          <Button variant="ghost" onClick={back}>
            <Icon name="arrowLeft" className="h-5 w-5" />
            Back
          </Button>
        ) : (
          <Link to="/login" className="text-sm font-medium text-muted hover:text-fg">
            Have an account? Log in
          </Link>
        )}
        {step < TOTAL - 1 ? (
          <Button onClick={next} disabled={!canContinue}>
            Continue
            <Icon name="arrowRight" className="h-5 w-5" />
          </Button>
        ) : (
          <Button onClick={finish} disabled={!canContinue} size="lg">
            Create account
            <Icon name="arrowRight" className="h-5 w-5" />
          </Button>
        )}
      </div>
    </div>
  )
}

function StepTitle({ title, hint }) {
  return (
    <>
      <motion.h1 variants={fadeInUp} className="text-2xl font-bold text-fg sm:text-3xl">
        {title}
      </motion.h1>
      <motion.p variants={fadeInUp} className="readable mt-2 text-muted">
        {hint}
      </motion.p>
    </>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-fg">{label}</span>
      {children}
    </label>
  )
}

function Pill({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
        active
          ? 'border-brand bg-brand text-on-brand'
          : 'border-line bg-surface text-fg hover:border-brand'
      }`}
    >
      {children}
    </button>
  )
}
