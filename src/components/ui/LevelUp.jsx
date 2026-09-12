import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Buddy from '@/components/ui/Buddy'
import useMe from '@/hooks/useMe'
import { useApp } from '@/context/AppProvider'
import { levelTitle, LEVEL_REWARDS } from '@/lib/xp'

/*
  The level-up screen. Mounted once in the app shell, it compares the
  level you are on with the last one it congratulated you for; when
  yours is higher it takes over the screen with confetti, the buddy
  cheering, the new title and whatever the level unlocked. Dismissing it
  records the level, so it shows once per level, on whichever page you
  happened to earn it.

  Existing accounts: lastLevelSeen is null until the first render after
  this shipped, when it is set to the current level silently - nobody is
  congratulated for levels they had last week.
*/
const CONFETTI = ['#f97316', '#22c55e', '#3b82f6', '#ec4899', '#facc15', '#a855f7']

function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 42 }, (_, i) => ({
        id: i,
        left: `${(i * 37) % 100}%`,
        dx: `${((i * 53) % 120) - 60}px`,
        delay: `${(i % 7) * 0.12}s`,
        dur: `${1.8 + ((i * 31) % 10) / 10}s`,
        colour: CONFETTI[i % CONFETTI.length],
        rot: (i * 47) % 90,
      })),
    [],
  )
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti"
          style={{
            left: p.left,
            background: p.colour,
            transform: `rotate(${p.rot}deg)`,
            '--dx': p.dx,
            '--delay': p.delay,
            '--dur': p.dur,
          }}
        />
      ))}
    </div>
  )
}

export default function LevelUp() {
  const me = useMe()
  const { lastLevelSeen, markLevelSeen, user } = useApp()
  const [open, setOpen] = useState(false)
  const [shown, setShown] = useState(null) // { from, to }

  useEffect(() => {
    if (lastLevelSeen === null || lastLevelSeen === undefined) {
      markLevelSeen(me.level)
      return
    }
    if (me.level > lastLevelSeen && !open) {
      setShown({ from: lastLevelSeen, to: me.level })
      setOpen(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [me.level, lastLevelSeen])

  const close = () => {
    setOpen(false)
    markLevelSeen(me.level)
  }

  const unlocks = shown ? LEVEL_REWARDS.filter((r) => r.level > shown.from && r.level <= shown.to) : []
  const event = useMemo(() => (open && shown ? { type: 'level', n: shown.to } : null), [open, shown])

  return (
    <AnimatePresence>
      {open && shown && (
        <motion.div
          key="levelup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] grid place-items-center bg-black/55 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="levelup-title"
        >
          <Confetti />
          <motion.div
            initial={{ scale: 0.8, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="card relative w-full max-w-sm overflow-hidden p-6 text-center"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-brand-strong">Level up</p>
            <div className="mx-auto mt-3 h-32 w-32">
              <Buddy mascot={user.mascot} className="h-full w-full" event={event} bubble={false} />
            </div>
            <h2 id="levelup-title" className="mt-3 text-4xl font-extrabold text-fg">
              Level {shown.to}
            </h2>
            <p className="mt-1 text-base font-bold text-brand-strong">{levelTitle(shown.to)}</p>
            {unlocks.length > 0 && (
              <ul className="mt-4 space-y-1.5">
                {unlocks.map((u) => (
                  <li
                    key={`${u.level}-${u.label}`}
                    className="flex items-center justify-center gap-2 rounded-xl border border-line bg-page px-3 py-2 text-sm font-semibold text-fg"
                  >
                    <Icon name="sparkles" className="h-4 w-4 text-paper" />
                    {u.label} unlocked
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-4 text-xs text-muted">
              {me.levelInfo.toNext.toLocaleString()} XP to level {shown.to + 1}.
            </p>
            <Button className="mt-4 w-full" onClick={close}>
              Keep going
              <Icon name="arrowRight" className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
