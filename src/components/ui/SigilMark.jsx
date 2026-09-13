import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { SIGIL } from '@/constants/sigil-geometry'

/*
  The Memora command sigil — a Geass-inspired angular command mark.

  Anatomy:
  - upper-left / upper-right  : the two bold wing-forms sweeping outward-upward
  - v-notch                   : the small bridge joining the wings at centre
  - central-point             : the sharp downward terminal spike

  Idle:    very subtle vertical breathing (3.5s loop), almost unnoticeable in a navbar.
  Hover:   wings extend slightly outward, spike sharpens, whole mark lifts 2px.
           Feels like: "The command has activated."
  Click:   mark compresses, spike pivots slightly, elastic snap-back.
  XP:      fragment launches upward 8px and fades.
  Levelup: charge → wings flare → angular fragment burst → elastic settle.

  Props:
  - idle (default true): enable the resting breathing loop.
  - radiate (default true): the expanding ring on click / level-up.
  - signal: { type: 'xp' | 'levelup', n } | null
  - onDone: called when signal animation completes.
  - className: sizing + colour (uses currentColor via text-*).
*/
export default function SigilMark({
  idle = true,
  radiate = true,
  signal = null,
  onDone,
  className = 'h-6 w-6',
}) {
  const reduceMotion = useReducedMotion()
  const [hovering, setHovering] = useState(false)
  const [clicked, setClicked] = useState(false)
  const timers = useRef([])

  useEffect(() => () => timers.current.forEach((t) => window.clearTimeout(t)), [])

  const onClick = () => {
    setClicked(true)
    timers.current.push(window.setTimeout(() => setClicked(false), 380))
  }

  useEffect(() => {
    if (!signal) return undefined
    const duration = signal.type === 'levelup' ? 850 : 430
    const t = window.setTimeout(() => onDone?.(), duration)
    timers.current.push(t)
    return () => window.clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signal?.type, signal?.n])

  const levelup = signal?.type === 'levelup'
  const xp = signal?.type === 'xp'
  const showFragment = xp || levelup
  const idling = idle && !reduceMotion && !clicked && !hovering && !signal
  const partStyle = { transformBox: 'fill-box', transformOrigin: 'center' }

  // ── Whole mark ───────────────────────────────────────────────────────────
  // Level-up: charge (compress) → flare (scale+) → settle with tiny bounce.
  // Click: compress → elastic snap back.
  const rootAnimate = levelup
    ? { scale: [1, 0.90, 1.25, 0.96, 1.02, 1], rotate: [0, 0, -2, 1.5, -0.5, 0] }
    : clicked
      ? { scale: [1, 0.88, 1.06, 1], rotate: [0, -4, 1.5, 0] }
      : { scale: 1, rotate: 0 }
  const rootTransition = levelup
    ? { duration: 0.85, times: [0, 0.15, 0.42, 0.68, 0.86, 1], ease: [0.16, 1, 0.3, 1] }
    : clicked
      ? { duration: 0.34, ease: [0.16, 1, 0.3, 1] }
      : { duration: 0.2 }

  // ── Wings (upper-left + upper-right) ─────────────────────────────────────
  // Hover: wings spread outward 2px. Idle: very slight breathe scale.
  // Level-up phase 2: wings extend dramatically upward.
  const wingAnimate = levelup
    ? { scaleY: [1, 1.12, 1], scaleX: [1, 1.05, 1], y: [0, -3, 0] }
    : hovering
      ? { scaleX: 1.04, scaleY: 1.03, y: -1.5 }
      : idling
        ? { scaleY: [1, 1.02, 1] }
        : { scaleX: 1, scaleY: 1, y: 0 }
  const wingTransition = levelup
    ? { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
    : hovering
      ? { type: 'spring', stiffness: 420, damping: 14 }
      : idling
        ? { duration: 3.5, ease: 'easeInOut', repeat: Infinity }
        : { duration: 0.2 }

  // ── Central spike ─────────────────────────────────────────────────────────
  // Hover: extends slightly downward, whole mark lifts. XP/levelup: pulse.
  const spikeAnimate = showFragment
    ? { scaleY: [1, 1.1, 1], y: [0, 1, 0] }
    : hovering
      ? { scaleY: 1.06, y: 1 }
      : idling
        ? { scaleY: [1, 0.97, 1] }
        : { scaleY: 1, y: 0 }
  const spikeTransition = showFragment
    ? { duration: xp ? 0.43 : 0.5, ease: [0.16, 1, 0.3, 1] }
    : hovering
      ? { type: 'spring', stiffness: 380, damping: 12 }
      : idling
        ? { duration: 3.5, ease: 'easeInOut', repeat: Infinity }
        : { duration: 0.2 }

  // ── V-notch ───────────────────────────────────────────────────────────────
  // Subtle — just follows the idle breathe very slightly.
  const notchAnimate = hovering
    ? { scale: 1.04 }
    : idling
      ? { scale: [1, 1.02, 1] }
      : { scale: 1 }
  const notchTransition = hovering
    ? { type: 'spring', stiffness: 380, damping: 14 }
    : idling
      ? { duration: 3.5, ease: 'easeInOut', repeat: Infinity }
      : { duration: 0.2 }

  return (
    <motion.svg
      viewBox="0 0 128 128"
      fill="none"
      className={className}
      style={{ transformOrigin: 'center' }}
      onHoverStart={() => setHovering(true)}
      onHoverEnd={() => setHovering(false)}
      onClick={onClick}
      animate={rootAnimate}
      transition={rootTransition}
      aria-hidden="true"
    >
      <g id="memora-sigil">
        {/* Left wing */}
        <motion.path
          id="upper-left"
          d={SIGIL.upperLeft}
          fill="currentColor"
          style={partStyle}
          animate={wingAnimate}
          transition={wingTransition}
        />

        {/* Right wing */}
        <motion.path
          id="upper-right"
          d={SIGIL.upperRight}
          fill="currentColor"
          style={partStyle}
          animate={wingAnimate}
          transition={wingTransition}
        />

        {/* V-notch bridge joining the two wings */}
        <motion.path
          id="v-notch"
          d={SIGIL.vNotch}
          fill="currentColor"
          style={partStyle}
          animate={notchAnimate}
          transition={notchTransition}
        />

        {/* Central downward terminal spike */}
        <motion.path
          id="central-point"
          d={SIGIL.centralPoint}
          fill="currentColor"
          style={partStyle}
          animate={spikeAnimate}
          transition={spikeTransition}
        />

        {/* XP / level-up fragment: detaches upward from the sigil apex */}
        <AnimatePresence>
          {showFragment && (
            <motion.path
              id="level-up-fragment"
              d={SIGIL.fragment}
              fill="currentColor"
              initial={{ opacity: 0, y: 0, scale: 0.5 }}
              animate={{ opacity: [0, 1, 0.8, 0], y: levelup ? -14 : -8, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: xp ? 0.44 : 0.65, ease: 'easeOut' }}
            />
          )}
        </AnimatePresence>

        {/* Expanding ring on click / level-up */}
        {radiate && (
          <AnimatePresence>
            {(levelup || clicked) && (
              <motion.circle
                cx="64"
                cy="64"
                r="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                initial={{ opacity: 0.6, scale: 0.3 }}
                animate={{ opacity: 0, scale: levelup ? 1.5 : 1.15 }}
                exit={{ opacity: 0 }}
                transition={{ duration: levelup ? 0.75 : 0.42, ease: 'easeOut' }}
                style={{ transformOrigin: 'center' }}
              />
            )}
          </AnimatePresence>
        )}
      </g>
    </motion.svg>
  )
}
