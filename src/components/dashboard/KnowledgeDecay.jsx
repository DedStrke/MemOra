import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Icon from '@/components/ui/Icon'
import { fadeInUp } from '@/lib/motion'
import { useApp } from '@/context/AppProvider'
import { lastSessionForSubject, daysAgo } from '@/lib/sessions'
import { slugify } from '@/lib/slug'

const DECAY_MAX = 21 // days at which a subject reads as fully faded
const REVIEW_DAYS = 7 // past this, it is due a review

function bucket(days) {
  if (days == null) return 'bg-line'
  if (days <= 2) return 'bg-success'
  if (days < REVIEW_DAYS) return 'bg-warning'
  return 'bg-danger'
}

export default function KnowledgeDecay() {
  const { user, sessions } = useApp()

  const subjects =
    user?.courseType === 'University' && user?.courseName
      ? [{ name: user.courseName }]
      : user?.subjects || []

  if (!subjects.length) return null

  const rows = subjects.map((s) => {
    const last = lastSessionForSubject(sessions, s.name)
    return { name: s.name, days: last ? daysAgo(last.ts) : null }
  })

  return (
    <motion.div variants={fadeInUp} className="card p-6">
      <div className="mb-1 flex items-center gap-2">
        <Icon name="activity" className="h-5 w-5 text-brand-strong" />
        <h2 className="text-lg font-bold text-fg">Knowledge decay</h2>
      </div>
      <p className="readable mb-4 text-sm text-muted">
        Subjects fade the longer you leave them. Red means one is due a review.
      </p>
      <ul className="space-y-3">
        {rows.map((r) => {
          const fresh =
            r.days == null ? 0.06 : Math.max(0.06, 1 - Math.min(r.days / DECAY_MAX, 1))
          const needsReview = r.days != null && r.days >= REVIEW_DAYS
          return (
            <li key={r.name}>
              <div className="mb-1 flex items-center justify-between gap-2 text-sm">
                <Link
                  to={`/study/${slugify(r.name)}`}
                  className="font-medium text-fg transition-colors hover:text-brand-strong"
                >
                  {r.name}
                </Link>
                {r.days == null ? (
                  <span className="text-xs text-muted">Not started</span>
                ) : needsReview ? (
                  <span className="flex items-center gap-1 rounded-full bg-danger/10 px-2 py-0.5 text-xs font-semibold text-danger">
                    <Icon name="refresh" className="h-3 w-3" />
                    Needs review
                  </span>
                ) : (
                  <span className="text-xs text-muted">
                    {r.days === 0 ? 'Today' : `${r.days}d ago`}
                  </span>
                )}
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-raised">
                <div
                  className={`h-full rounded-full ${bucket(r.days)}`}
                  style={{ width: `${fresh * 100}%` }}
                />
              </div>
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}
