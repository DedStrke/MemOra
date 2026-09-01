import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/*
  The Memora mark: a single striking, glowing eye - sharp anime-style
  eyeliner, a radiant starburst iris, a bright core, and a corner accent
  tick for that intense/piercing look. An original design (not a copy of
  any specific character's eyes) built to read the same way: an eye that
  looks like it's actively perceiving, not decorative.

  Props:
    - idle: a slow, continuous breathing glow on the iris (nav use)
    - pulseOnHover: a quick "focus" scale pulse on hover
    - pulseOnClick: a full activation burst (rings + flash + pulse) on click
    - className: sizing + colour (text-*, sets the eyeliner/outline colour)
*/
export function Iris({ pulse, flash }) {
  const rays = Array.from({ length: 8 }, (_, i) => {
    const angle = (i * Math.PI) / 4
    const x1 = 24 + Math.cos(angle) * 3.4
    const y1 = 22.5 + Math.sin(angle) * 3.4
    const x2 = 24 + Math.cos(angle) * 8.2
    const y2 = 22.5 + Math.sin(angle) * 8.2
    return { key: i, x1, y1, x2, y2 }
  })

  return (
    <g className={pulse ? 'signal-pulse' : undefined}>
      {/* outer glow */}
      <circle cx="24" cy="22.5" r="10.5" fill="#38bdf8" opacity="0.18" />
      {/* iris ring */}
      <circle cx="24" cy="22.5" r="8.2" fill="#0369a1" opacity="0.55" />
      <circle cx="24" cy="22.5" r="8.2" fill="none" stroke="#7dd3fc" strokeWidth="0.6" opacity="0.8" />
      {/* starburst rays */}
      {rays.map((r) => (
        <line key={r.key} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} stroke="#bae6fd" strokeWidth="1" strokeLinecap="round" opacity="0.85" />
      ))}
      {/* glowing core */}
      <circle cx="24" cy="22.5" r="3.4" fill="#e0f2fe" />
      <circle cx="24" cy="22.5" r="2" fill="#7dd3fc" />
      {/* eye-shine glint */}
      <circle cx="21.3" cy="19.6" r="1.15" fill="#ffffff" />
      {flash && (
        <motion.circle
          cx="24"
          cy="22.5"
          r="3"
          fill="#e0f2fe"
          initial={{ opacity: 0.9, scale: 1 }}
          animate={{ opacity: 0, scale: 6 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      )}
    </g>
  )
}

export function Eye() {
  return (
    <>
      {/* eyelid shape - sharp outer corner, curved inner corner, filled with
          the page/surface colour so the glow reads as light inside an eye,
          not a flat sticker */}
      <path
        d="M8 26 Q14 14 24 13 Q34 12.5 42 18 Q37 30 24 32 Q13 33.5 8 26 Z"
        fill="var(--page)"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      {/* upper lid crease - the "sharp/intense" anime accent line */}
      <path
        d="M10.5 22.5 Q16 12 25 10.5 Q35 10 41 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.55"
      />
      {/* outer-corner tick marks - the sharp "fierce eye" flourish */}
      <path d="M42 17.5 L46.2 14.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M41.5 21 L45.3 20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
    </>
  )
}

function BurstRings() {
  return (
    <motion.g initial={{ opacity: 0.9 }} animate={{ opacity: 0 }} transition={{ duration: 0.6 }}>
      {[0, 0.08, 0.16].map((delay, i) => (
        <motion.circle
          key={i}
          cx="24"
          cy="22"
          r="18"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2"
          initial={{ scale: 0.5, opacity: 0.8 }}
          animate={{ scale: 1.9, opacity: 0 }}
          transition={{ duration: 0.55, delay, ease: 'easeOut' }}
        />
      ))}
    </motion.g>
  )
}

export default function EyeMark({
  idle = false,
  pulseOnHover = false,
  pulseOnClick = false,
  className = 'h-6 w-6',
}) {
  const [active, setActive] = useState(false)

  const onClick = pulseOnClick
    ? () => {
        setActive(true)
        window.setTimeout(() => setActive(false), 650)
      }
    : undefined

  if (idle) {
    return (
      <svg viewBox="0 0 48 48" className={className} onClick={onClick} aria-hidden="true">
        <Eye />
        <Iris pulse />
        <AnimatePresence>{active && <BurstRings />}</AnimatePresence>
      </svg>
    )
  }

  return (
    <motion.svg
      viewBox="0 0 48 48"
      className={className}
      style={{ transformOrigin: 'center' }}
      whileHover={pulseOnHover ? { scale: 1.08 } : undefined}
      animate={active ? { scale: [1, 1.16, 1.02, 1.08, 1] } : { scale: 1 }}
      transition={{ duration: active ? 0.5 : 0.25, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      aria-hidden="true"
    >
      <Eye />
      <Iris flash={active} />
      <AnimatePresence>{active && <BurstRings />}</AnimatePresence>
    </motion.svg>
  )
}
