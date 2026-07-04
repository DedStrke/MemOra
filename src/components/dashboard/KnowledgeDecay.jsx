import { motion } from 'framer-motion'
import Icon from '@/components/ui/Icon'
import { fadeInUp } from '@/lib/motion'
import { decayTopicsFor, DECAY_REVIEW_DAYS } from '@/constants/mock'
import { useApp } from '@/context/AppProvider'

const DECAY_MAX = 28 // days at which a topic reads as fully faded

// Simple logic for now: colour by how long since the topic was last studied.
function bucket(daysAgo) {
  if (daysAgo <= 3) return 'bg-success'
  if (daysAgo < DECAY_REVIEW_DAYS) return 'bg-warning'
  return 'bg-danger'
}

export default function KnowledgeDecay() {
  const { user } = useApp()
  const topics = decayTopicsFor(user?.subjects)

  return (
    <motion.div
      variants={fadeInUp}
      className="rounded-2xl border border-line bg-surface p-6"
    >
      <div className="mb-1 flex items-center gap-2">
        <Icon name="activity" className="h-5 w-5 text-brand-strong" />
        <h2 className="text-lg font-bold text-fg">Knowledge decay</h2>
      </div>
      <p className="readable mb-4 text-sm text-muted">
        Topics fade the longer you leave them. The red ones are due a review.
      </p>
      <ul className="space-y-3">
        {topics.map((t) => {
          const freshness = Math.max(0.06, 1 - Math.min(t.daysAgo / DECAY_MAX, 1))
          const needsReview = t.daysAgo >= DECAY_REVIEW_DAYS
          return (
            <li key={`${t.subject}-${t.topic}`}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-medium text-fg">{t.topic}</span>
                {needsReview ? (
                  <span className="flex items-center gap-1 rounded-full bg-danger/10 px-2 py-0.5 text-xs font-semibold text-danger">
                    <Icon name="refresh" className="h-3 w-3" />
                    Needs review
                  </span>
                ) : (
                  <span className="text-xs text-muted">{t.daysAgo}d ago</span>
                )}
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-raised">
                <div
                  className={`h-full rounded-full ${bucket(t.daysAgo)}`}
                  style={{ width: `${freshness * 100}%` }}
                />
              </div>
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}
