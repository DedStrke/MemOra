import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import WheelLogo from '@/components/ui/WheelLogo'
import OptionCard from '@/components/ui/OptionCard'
import ProgressBar from '@/components/ui/ProgressBar'
import SubjectPicker from '@/components/ui/SubjectPicker'
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
  NEEDS_OPTIONS,
  specsFor,
} from '@/constants/content'
import { useApp } from '@/context/AppProvider'

const TOTAL = 6 // account, year, goal, course, subjects, access needs
const validEmail = (e) => /\S+@\S+\.\S+/.test(e)

export default function Signup() {
  const navigate = useNavigate()
  const { signUp, applyNeeds } = useApp()

  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [yearGroup, setYearGroup] = useState('')
  const [otherLevel, setOtherLevel] = useState('')
  const [goal, setGoal] = useState({ choice: '', text: '' })
  const [courseType, setCourseType] = useState('')
  const [courseName, setCourseName] = useState('')
  const [subjects, setSubjects] = useState([])
  const [needs, setNeeds] = useState([])
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  // Toggle an access need and apply the adaptation live, so the rest of the
  // wizard (and this very step) immediately reflects it.
  const toggleNeed = (id) => {
    setNeeds((prev) => {
      const nextNeeds = prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]
      applyNeeds(nextNeeds)
      return nextNeeds
    })
  }

  const isUniversity = courseType === 'University'
  const prioritised = PRIORITISED_COURSES.includes(courseType)
  const needsGoalText = goal.choice === 'specific' || goal.choice === 'custom'

  // Password must be 8 to 12 characters. Show a red state when it is out of range.
  const pwLen = password.length
  const pwInvalid = pwLen > 0 && (pwLen < 8 || pwLen > 12)
  const pwValid = pwLen >= 8 && pwLen <= 12

  const canContinue = (() => {
    switch (step) {
      case 0:
        return (
          name.trim() !== '' &&
          validEmail(email) &&
          password.length >= 8 &&
          password.length <= 12
        )
      case 1:
        return yearGroup !== '' && (yearGroup !== 'Other' || otherLevel.trim() !== '')
      case 2:
        return goal.choice !== '' && (!needsGoalText || goal.text.trim() !== '')
      case 3:
        return courseType !== ''
      case 4:
        return isUniversity ? courseName.trim() !== '' : subjects.length > 0
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

  const finish = async () => {
    if (submitting) return
    setError('')
    setSubmitting(true)
    const cleanSubjects = subjects
      .filter((s) => s.name.trim() !== '')
      .map((s) => ({ ...s, name: s.name.trim(), spec: s.spec.trim() }))
    if (prioritised && cleanSubjects.length && !cleanSubjects.some((s) => s.priority)) {
      cleanSubjects[0].priority = true
    }
    const yearGroupValue =
      yearGroup === 'Other' && otherLevel.trim() !== ''
        ? `Other: ${otherLevel.trim()}`
        : yearGroup
    const res = await signUp({
      name: name.trim(),
      email: email.trim(),
      password,
      yearGroup: yearGroupValue,
      goal,
      courseType,
      courseName: courseName.trim(),
      subjects: isUniversity ? [] : cleanSubjects,
      needs,
    })
    if (res?.ok) {
      navigate('/dashboard')
    } else {
      setError(res?.message || 'Could not create your account. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-5 py-8">
      {/* Header */}
      <div className="mb-6">
        <div className="mb-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-fg">
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
                  <span className="font-display text-3xl font-semibold text-fg">
                    {SITE.name}
                  </span>
                </motion.div>
                <StepTitle title={AUTH.accountTitle} hint={AUTH.accountHint} />
                <div className="mt-6 space-y-3">
                  <Field label="Username">
                    <input
                      autoFocus
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Username"
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
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        maxLength={12}
                        aria-invalid={pwInvalid}
                        placeholder="Choose a password"
                        className={`w-full rounded-xl border bg-surface px-4 py-3 pr-12 text-fg placeholder:text-muted focus:outline-none ${
                          pwInvalid
                            ? 'border-danger focus:border-danger'
                            : 'border-line focus:border-brand'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                        aria-pressed={showPassword}
                        className="absolute inset-y-0 right-0 flex h-11 w-11 items-center justify-center self-center rounded-r-xl text-muted hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
                      >
                        <Icon name={showPassword ? 'eyeOff' : 'eye'} className="h-5 w-5" />
                      </button>
                    </div>
                    <p
                      role={pwInvalid ? 'alert' : undefined}
                      className={`mt-1.5 flex items-center gap-1.5 text-sm ${
                        pwInvalid ? 'text-danger' : pwValid ? 'text-success' : 'text-muted'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`inline-block h-2 w-2 shrink-0 rounded-full ${
                          pwInvalid ? 'bg-danger' : pwValid ? 'bg-success' : 'bg-line'
                        }`}
                      />
                      {pwInvalid
                        ? 'Password must be 8 to 12 characters.'
                        : pwValid
                          ? 'Looks good.'
                          : 'Use 8 to 12 characters.'}
                    </p>
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
                        // "Other" needs a typed level of study, so stay on this
                        // step and reveal the extra input instead of advancing.
                        if (y !== 'Other') advance()
                      }}
                    >
                      {y}
                    </Pill>
                  ))}
                </motion.div>
                {yearGroup === 'Other' && (
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="show"
                    className="mt-4"
                  >
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-fg">
                        What level are you studying at?
                      </span>
                      <input
                        autoFocus
                        type="text"
                        value={otherLevel}
                        onChange={(e) => setOtherLevel(e.target.value)}
                        placeholder="e.g. BTEC, foundation year, adult learner"
                        className="w-full rounded-xl border border-line bg-surface px-4 py-3 text-fg placeholder:text-muted focus:border-brand focus:outline-none"
                      />
                    </label>
                  </motion.div>
                )}
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
                    <motion.div variants={fadeInUp} className="mt-6">
                      <SubjectPicker
                        subjects={subjects}
                        onChange={setSubjects}
                        prioritised={prioritised}
                        boards={specsFor(courseType)}
                      />
                    </motion.div>
                  </>
                )}
              </div>
            )}

            {/* Step 5: Access needs (optional) */}
            {step === 5 && (
              <div>
                <StepTitle
                  title="Do you have any access needs?"
                  hint="Optional. Tell us and we will adapt the app to suit you. You can change this anytime in your profile."
                />
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {NEEDS_OPTIONS.map((n) => (
                    <OptionCard
                      key={n.id}
                      icon={n.icon}
                      label={n.label}
                      selected={needs.includes(n.id)}
                      onToggle={() => toggleNeed(n.id)}
                    />
                  ))}
                </div>
                <p className="readable mt-4 text-sm text-muted">
                  Pick any that apply, or none at all. We adjust the font, spacing, text
                  size and contrast to match, right away.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {error && (
        <p role="alert" className="mt-4 text-sm font-medium text-danger">
          {error}
        </p>
      )}

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
          <Button onClick={finish} disabled={!canContinue || submitting} size="lg">
            {submitting ? 'Creating account...' : 'Create account'}
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
