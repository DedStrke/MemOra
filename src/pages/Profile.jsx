import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
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

export default function Profile() {
  const navigate = useNavigate()
  const { user, logout } = useApp()

  const goalLabel =
    user.goal?.choice === 'custom'
      ? user.goal.text
      : GOAL_OPTIONS.find((g) => g.id === user.goal?.choice)?.label
  const initial = (user.name?.[0] || '?').toUpperCase()

  const signOut = () => {
    logout()
    navigate('/')
  }

  return (
    <Section width="narrow" animateOnMount className="pt-10 pb-24">
      <motion.div variants={fadeInUp} className="flex items-center gap-4">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-2xl font-bold text-on-brand">
          {initial}
        </span>
        <div>
          <h1 className="text-3xl font-bold text-fg">{user.name}</h1>
          <p className="text-muted">{user.email || 'No email on file'}</p>
        </div>
      </motion.div>
      <motion.p variants={fadeInUp} className="readable mt-3 text-sm text-muted">
        {PROFILE.subtitle}
      </motion.p>

      <motion.div
        variants={fadeInUp}
        className="mt-6 rounded-2xl border border-line bg-surface p-6"
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
          <Button onClick={signOut} variant="ghost" size="sm">
            <Icon name="logout" className="h-4 w-4" />
            Sign out
          </Button>
        </div>
      </motion.div>
    </Section>
  )
}
