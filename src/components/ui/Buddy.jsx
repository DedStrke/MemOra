import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'
import { mascotById, mascotImage, fillLine } from '@/constants/mascots'

/*
  The study buddy, alive. The art is a picture (constants/mascots.js), so
  nothing on the face changes - everything that makes it feel like a
  character is motion and props layered on top:

    - it bobs, and every few seconds gives a little wobble (a "glance")
    - tap it and it squashes, bounces, throws a few sparks and says
      something - about your streak, the next assessment, or its usual
      patter; five quick taps and stars circle its head
    - in the evening with nothing studied it tilts over, dims and snores
      (z z z) until poked
    - the page can hand it an `event` (a finished session, a level-up, a
      claimed reward) and it cheers - hearts, a book, a star

  Lines are filled from `context` ({n} streak, {label}/{days} for the next
  assessment). With `onSay` the parent draws the speech instead of the
  built-in bubble (the dashboard puts it in the quote card). Decorative
  for screen readers: the numbers it talks about are on the page in text.
*/

const GENERIC_LINES = {
  idle: ['Ready when you are.', 'One chapter at a time.', 'Open the weakest chapter first.'],
  streak: ['Streak {n}. Keep it going.'],
  sleepy: ['Nothing studied today yet.'],
  cheer: ['Session done. Nice.'],
  exam: ['{label} in {days} days.'],
  level: ['Level {n}.'],
  reward: ['Reward claimed.'],
}

const pick = (list, avoid) => {
  const pool = list.length > 1 ? list.filter((l) => l !== avoid) : list
  return pool[Math.floor(Math.random() * pool.length)]
}

// One greeting per ten minutes across mounts, not one per page visit.
let lastGreeting = 0

/* Small props that appear over the picture. */
function Prop({ mood }) {
  if (mood === 'sleepy') {
    return (
      <span aria-hidden="true" className="buddy-zzz absolute -right-1 top-0 select-none text-fg">
        <span className="block text-[0.6rem] font-extrabold">z</span>
        <span className="-mt-1 block pl-2 text-[0.8rem] font-extrabold">z</span>
        <span className="-mt-1 block pl-4 text-[1rem] font-extrabold">z</span>
      </span>
    )
  }
  if (mood === 'think') {
    return (
      <span aria-hidden="true" className="absolute -right-1 top-1 rounded-full border border-line bg-surface px-1.5 text-[0.7rem] font-extrabold leading-4 text-muted">
        …
      </span>
    )
  }
  if (mood === 'surprised') {
    return (
      <span aria-hidden="true" className="absolute -right-1 top-0 text-xl font-black text-danger">
        !
      </span>
    )
  }
  if (mood === 'dizzy') {
    return (
      <span aria-hidden="true" className="buddy-orbit absolute left-1/2 top-1 h-3 w-3/5 -translate-x-1/2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="absolute top-0 h-2 w-2 rotate-45 rounded-[2px] bg-paper"
            style={{ left: `${i * 45}%` }}
          />
        ))}
      </span>
    )
  }
  if (mood === 'happy') {
    return (
      <span aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="buddy-heart absolute left-1 top-2 text-sm text-danger" style={{ '--d': '0s' }}>
          ♥
        </span>
        <span className="buddy-heart absolute right-1 top-5 text-xs text-danger" style={{ '--d': '0.25s' }}>
          ♥
        </span>
      </span>
    )
  }
  if (mood === 'cheer') {
    // a little open book, held at the bottom-right
    return (
      <svg aria-hidden="true" viewBox="0 0 40 28" className="buddy-book absolute -bottom-1 -right-2 h-7 w-9 drop-shadow">
        <path d="M2 4 Q11 1 20 6 V26 Q11 21 2 24 Z" fill="#fff7e6" stroke="#b7770c" strokeWidth="1.5" />
        <path d="M38 4 Q29 1 20 6 V26 Q29 21 38 24 Z" fill="#fff7e6" stroke="#b7770c" strokeWidth="1.5" />
        <path d="M6 9 h9 M6 13 h9 M6 17 h8 M25 9 h9 M25 13 h9 M25 17 h8" stroke="#b7770c" strokeWidth="1" opacity="0.7" />
      </svg>
    )
  }
  return null
}

export default function Buddy({
  mascot,
  className = 'h-28 w-28',
  context = {},
  event = null,
  bubble = true,
  bubbleSide = 'top',
  onSay,
  label,
}) {
  const built = mascot?.kind === 'custom' ? null : mascotById(mascot?.id)
  const lines = built?.lines || GENERIC_LINES
  const [mood, setMood] = useState('idle')
  const [text, setText] = useState(null)
  const [sparks, setSparks] = useState([])
  const controls = useAnimationControls()
  const timers = useRef({})
  const taps = useRef([])
  const lastLine = useRef(null)
  const ctx = useRef(context)
  ctx.current = context
  const sayRef = useRef(onSay)
  sayRef.current = onSay

  const clearTimer = (k) => {
    if (timers.current[k]) clearTimeout(timers.current[k])
  }

  // Sleepy after 7pm with nothing logged today; idle otherwise.
  const baseMood = useCallback(() => {
    const hour = new Date().getHours()
    return !ctx.current.studiedToday && hour >= 19 ? 'sleepy' : 'idle'
  }, [])

  const setMoodFor = useCallback(
    (m, ms) => {
      clearTimer('mood')
      setMood(m)
      timers.current.mood = setTimeout(() => setMood(baseMood()), ms)
    },
    [baseMood],
  )

  const say = useCallback((line, vars) => {
    const filled = fillLine(line, vars)
    lastLine.current = line
    clearTimer('say')
    setText(filled)
    sayRef.current?.(filled)
    timers.current.say = setTimeout(() => {
      setText(null)
      sayRef.current?.(null)
    }, 3800)
  }, [])

  const contextual = useCallback(() => {
    const c = ctx.current
    const roll = Math.random()
    if (c.nextAssessment && c.daysToNext !== null && c.daysToNext >= 0 && c.daysToNext <= 14 && roll < 0.35) {
      return [pick(lines.exam, lastLine.current), { label: c.nextAssessment, days: c.daysToNext }]
    }
    if (c.streak >= 3 && roll < 0.65) return [pick(lines.streak, lastLine.current), { n: c.streak }]
    return [pick(lines.idle, lastLine.current), {}]
  }, [lines])

  // Base mood on mount and whenever the day's study status changes.
  useEffect(() => {
    setMood(baseMood())
  }, [baseMood, context.studiedToday])

  // A wobble now and then while idle - the picture's version of a glance.
  useEffect(() => {
    let cancelled = false
    const schedule = () => {
      timers.current.glance = setTimeout(() => {
        if (cancelled) return
        setMood((m) => {
          if (m !== 'idle') return m
          controls.start({ rotate: [0, -5, 5, -3, 0], transition: { duration: 0.8, ease: 'easeInOut' } })
          return 'think'
        })
        timers.current.glanceBack = setTimeout(() => {
          if (!cancelled) setMood((m) => (m === 'think' ? 'idle' : m))
          schedule()
        }, 1300)
      }, 6500 + Math.random() * 5000)
    }
    schedule()
    return () => {
      cancelled = true
      clearTimer('glance')
      clearTimer('glanceBack')
    }
  }, [controls])

  // A hello, at most once every ten minutes.
  useEffect(() => {
    if (!bubble && !onSay) return undefined
    if (Date.now() - lastGreeting < 10 * 60 * 1000) return undefined
    lastGreeting = Date.now()
    const t = setTimeout(() => {
      if (baseMood() === 'sleepy') say(pick(lines.sleepy), {})
      else {
        const [line, vars] = contextual()
        say(line, vars)
      }
    }, 900)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Reactions handed in by the page.
  useEffect(() => {
    if (!event) return
    const { type, n } = event
    controls.start({
      y: [0, -14, 0, -6, 0],
      rotate: [0, -6, 6, -3, 0],
      transition: { duration: 0.9, ease: 'easeOut' },
    })
    if (type === 'level') {
      setMoodFor('cheer', 3200)
      say(pick(lines.level), { n })
    } else if (type === 'reward') {
      setMoodFor('happy', 2200)
      say(pick(lines.reward), { n })
    } else {
      setMoodFor('cheer', 2600)
      say(pick(lines.cheer), { n })
    }
    burst()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event])

  useEffect(() => () => Object.values(timers.current).forEach(clearTimeout), [])

  const burst = () => {
    const id = Date.now()
    const items = Array.from({ length: 6 }, (_, i) => ({
      id: `${id}-${i}`,
      angle: -100 + i * 40 + (Math.random() * 16 - 8),
      dist: 34 + Math.random() * 18,
    }))
    setSparks(items)
    clearTimer('sparks')
    timers.current.sparks = setTimeout(() => setSparks([]), 700)
  }

  const tap = () => {
    const now = Date.now()
    taps.current = [...taps.current.filter((t) => now - t < 2500), now]
    controls.start({
      scaleX: [1, 1.14, 0.92, 1.05, 1],
      scaleY: [1, 0.84, 1.1, 0.97, 1],
      y: [0, 5, -12, 2, 0],
      rotate: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    })
    burst()
    if (taps.current.length >= 5) {
      taps.current = []
      setMoodFor('dizzy', 2200)
      say('…okay. Dizzy now.', {})
      return
    }
    const wasAsleep = mood === 'sleepy'
    setMoodFor(wasAsleep ? 'surprised' : 'happy', 1500)
    if (wasAsleep) say(pick(lines.sleepy, lastLine.current), {})
    else {
      const [line, vars] = contextual()
      say(line, vars)
    }
  }

  const custom = mascot?.kind === 'custom' && mascot.dataUrl
  const bubbleClass =
    bubbleSide === 'right'
      ? 'left-full top-1/4 ml-3 origin-left'
      : 'left-1/2 -top-2 -translate-x-1/2 -translate-y-full origin-bottom'

  return (
    <span className={`buddy relative inline-block ${className}`}>
      <motion.button
        type="button"
        onClick={tap}
        animate={controls}
        whileHover={{ scale: 1.04 }}
        className="buddy-body relative block h-full w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={label || `${built?.name || 'Your buddy'} - tap for a word`}
      >
        <span className={`buddy-bob block h-full w-full ${mood === 'sleepy' ? 'buddy-asleep' : ''}`}>
          <img
            src={mascotImage(mascot)}
            alt=""
            draggable="false"
            className={`h-full w-full ${custom ? 'rounded-full object-cover' : 'object-contain'}`}
          />
        </span>
        <Prop mood={mood} />
      </motion.button>

      {/* sparks */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-0">
        <AnimatePresence>
          {sparks.map((s) => {
            const rad = (s.angle * Math.PI) / 180
            return (
              <motion.span
                key={s.id}
                initial={{ opacity: 1, x: 0, y: 0, scale: 0.6 }}
                animate={{ opacity: 0, x: Math.cos(rad) * s.dist, y: Math.sin(rad) * s.dist, scale: 1.2 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className="absolute left-1/2 top-1/2 -ml-1 -mt-1 h-2 w-2 rotate-45 rounded-[2px] bg-brand"
              />
            )
          })}
        </AnimatePresence>
      </span>

      {/* speech bubble (unless the parent draws it via onSay) */}
      {bubble && !onSay && (
        <AnimatePresence>
          {text && (
            <motion.span
              key={text}
              role="status"
              initial={{ opacity: 0, scale: 0.85, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 4 }}
              transition={{ duration: 0.18 }}
              className={`buddy-bubble absolute z-10 w-max max-w-[15rem] rounded-2xl border border-line bg-surface px-3 py-2 text-xs font-semibold leading-snug text-fg shadow-lg ${bubbleClass}`}
            >
              {text}
              <span aria-hidden="true" className={`buddy-bubble-tail buddy-bubble-tail-${bubbleSide}`} />
            </motion.span>
          )}
        </AnimatePresence>
      )}
    </span>
  )
}
