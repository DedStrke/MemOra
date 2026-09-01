import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import AccentPicker from '@/components/ui/AccentPicker'
import { fadeInUp } from '@/lib/motion'
import { PROFILE, GOAL_OPTIONS } from '@/constants/content'
import { useApp } from '@/context/AppProvider'

function Row({ label, value }) {
  return (
    <div>
      <dt className="text-sm font-semibold text-muted">{label}</dt>
      <dd className="text-fg">{value || 'Not set'}</dd>
    </div>
  )
}

function Choice({ label, options, value, onChange }) {
  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-muted">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={String(o.value)}
            type="button"
            onClick={() => onChange(o.value)}
            aria-pressed={value === o.value}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              value === o.value
                ? 'border-brand bg-brand text-on-brand'
                : 'border-line bg-surface text-fg hover:border-brand'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Profile() {
  const { user, setName, a11y, setA11y } = useApp()

  const goalLabel =
    user.goal?.choice === 'custom'
      ? user.goal.text
      : GOAL_OPTIONS.find((g) => g.id === user.goal?.choice)?.label
  const initial = (user.name?.[0] || '?').toUpperCase()

  return (
    <Section width="narrow" animateOnMount className="pt-10 pb-24">
      <motion.div variants={fadeInUp} className="flex items-center gap-4">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-2xl font-bold text-on-brand">
          {initial}
        </span>
        <div className="min-w-0 flex-1">
          <input
            value={user.name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Your name"
            className="w-full max-w-xs rounded-lg border border-transparent bg-transparent text-3xl font-bold text-fg transition-colors hover:border-line focus:border-brand focus:outline-none"
          />
        </div>
      </motion.div>
      <motion.p variants={fadeInUp} className="readable mt-3 text-sm text-muted">
        {PROFILE.subtitle}
      </motion.p>

      <motion.div
        variants={fadeInUp}
        className="mt-6 card p-6"
      >
        <dl className="space-y-4">
          <Row label="Year group" value={user.yearGroup} />
          <Row label="Goal" value={goalLabel} />
          <Row label="Course type" value={user.courseType} />
          {user.courseType === 'University' ? (
            <Row label="Course" value={user.courseName} />
          ) : (
            <div>
              <dt className="mb-1.5 text-sm font-semibold text-muted">Subjects</dt>
              <dd className="flex flex-wrap gap-2">
                {user.subjects?.length ? (
                  user.subjects.map((s) => (
                    <span
                      key={s.id ?? s.name}
                      className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-sm font-medium text-brand-strong"
                    >
                      {s.priority && <Icon name="star" className="h-3.5 w-3.5" />}
                      {s.name}
                      {s.spec ? ` · ${s.spec}` : ''}
                    </span>
                  ))
                ) : (
                  <span className="text-muted">None</span>
                )}
              </dd>
            </div>
          )}
        </dl>

        <div className="mt-6 flex flex-wrap gap-3 border-t border-line pt-6">
          <Button as={Link} to="/courses" variant="secondary" size="sm">
            <Icon name="plus" className="h-4 w-4" />
            Manage courses
          </Button>
        </div>
      </motion.div>

      {/* Display & reading settings */}
      <motion.div
        variants={fadeInUp}
        className="mt-6 card p-6"
      >
        <div className="mb-1 flex items-center gap-2">
          <Icon name="access" className="h-5 w-5 text-brand-strong" />
          <h2 className="text-lg font-bold text-fg">Display and reading</h2>
        </div>
        <p className="readable mb-5 text-sm text-muted">
          Tune how the app looks and reads. Changes apply instantly and save on this
          device.
        </p>
        <div className="space-y-5">
          <Choice
            label="Text size"
            value={a11y.textScale}
            onChange={(v) => setA11y({ textScale: v })}
            options={[
              { value: 1, label: 'Normal' },
              { value: 1.15, label: 'Large' },
              { value: 1.3, label: 'Larger' },
            ]}
          />
          <Choice
            label="Font"
            value={a11y.font}
            onChange={(v) => setA11y({ font: v })}
            options={[
              { value: 'default', label: 'Default' },
              { value: 'dyslexic', label: 'Dyslexia-friendly' },
              { value: 'hyperlegible', label: 'Hyperlegible' },
            ]}
          />
          <Choice
            label="Reading comfort"
            value={a11y.spacing}
            onChange={(v) =>
              setA11y({ spacing: v, letter: v === 'normal' ? 'normal' : 'wide' })
            }
            options={[
              { value: 'normal', label: 'Standard' },
              { value: 'relaxed', label: 'Relaxed' },
              { value: 'loose', label: 'Loose' },
            ]}
          />
          <Choice
            label="Focus mode (fewer distractions)"
            value={a11y.focus ? 'on' : 'off'}
            onChange={(v) => setA11y({ focus: v === 'on' })}
            options={[
              { value: 'off', label: 'Off' },
              { value: 'on', label: 'On' },
            ]}
          />
          <div>
            <p className="mb-2 text-sm font-semibold text-muted">Accent colour</p>
            <AccentPicker />
          </div>
        </div>
        <p className="readable mt-5 text-xs text-muted">
          Theme (light, dark, high contrast) lives in the top bar.
        </p>
      </motion.div>
    </Section>
  )
}
