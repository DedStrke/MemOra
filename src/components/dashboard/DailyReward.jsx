import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { useApp } from '@/context/AppProvider'
import { DAILY_REWARDS, dailyStatus } from '@/lib/daily'
import { fadeInUp } from '@/lib/motion'

/*
  The daily reward card: seven days in a row, XP that climbs each day.
  One tap a day. The logic is lib/daily.js; this only draws the run and
  calls claimDaily, then tells the page so the buddy can react
  (onClaimed).
*/
export default function DailyReward({ now, onClaimed }) {
  const { daily, claimDaily, showToast } = useApp()
  const status = dailyStatus(daily, now)

  const claim = () => {
    const r = claimDaily()
    if (!r) return
    showToast(r.completedWeek ? `+${r.xp} XP - seven days in a row!` : `+${r.xp} XP claimed`)
    onClaimed?.(r)
  }

  return (
    <motion.section variants={fadeInUp} className="card p-5" aria-label="Daily reward">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-extrabold text-fg">Daily reward</h2>
          <p className="text-xs text-muted">
            {status.claimedToday
              ? `Day ${status.day} taken - back tomorrow for +${DAILY_REWARDS[status.day % 7]} XP`
              : status.streakKept
                ? `Day ${status.day} of 7 is ready`
                : 'The run restarted - day 1 is ready'}
          </p>
        </div>
        <Icon name="star" className="h-6 w-6 shrink-0 text-paper" />
      </div>

      <ol className="mt-4 grid grid-cols-7 gap-1.5" aria-label="Seven-day run">
        {DAILY_REWARDS.map((xp, i) => {
          const day = i + 1
          const done = status.claimedToday ? day <= status.day : day < status.day
          const today = day === status.day
          return (
            <li
              key={day}
              className={`reward-day ${done ? 'reward-day-done' : ''} ${today && !status.claimedToday ? 'reward-day-today' : ''} ${
                day === 7 ? 'reward-day-seven' : ''
              }`}
              title={`+${xp} XP`}
              aria-current={today ? 'date' : undefined}
            >
              {done ? <Icon name="check" className="h-3.5 w-3.5" /> : day === 7 ? <Icon name="star" className="h-3.5 w-3.5" /> : `+${xp}`}
            </li>
          )
        })}
      </ol>

      <div className="mt-4">
        {status.claimedToday ? (
          <p className="flex items-center gap-2 text-sm font-semibold text-muted">
            <Icon name="check" className="h-4 w-4 text-r3-solid" />
            Claimed today
          </p>
        ) : (
          <Button size="sm" onClick={claim} className="w-full">
            <Icon name="sparkles" className="h-4 w-4" />
            Claim +{status.xp} XP
          </Button>
        )}
      </div>
    </motion.section>
  )
}
