import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/*
  The Cortex mark: a brain with a live signal line running through it. The
  brain inherits currentColor so it themes with text-brand; the signal line
  and its glow are fixed accent colours so the detail reads in every theme.

  Props:
    - idle: a slow, continuous breathing pulse on the signal line (nav use)
    - pulseOnHover: a quick "activate" scale pulse on hover
    - pulseOnClick: a full activation burst (rings + flash + pulse) on click
    - className: sizing + colour (text-*)
*/
export function Signal({ pulse, flash }) {
  const path = 'M8 21 L13 21 L15 13 L18 29 L21 16 L24 26 L27 15 L30 27 L33 18 L36 21 L40 21'
  return (
    <g className={pulse ? 'signal-pulse' : undefined}>
      <path d={path} fill="none" stroke="#0369a1" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      <path d={path} fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="15" cy="13" r="1.3" fill="#bae6fd" />
      <circle cx="27" cy="15" r="1.3" fill="#bae6fd" />
      {flash && (
        <motion.circle
          cx="24"
          cy="21"
          r="2"
          fill="#bae6fd"
          initial={{ opacity: 0.9, scale: 1 }}
          animate={{ opacity: 0, scale: 6 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      )}
    </g>
  )
}

export function Brain() {
  return (
    <>
      {/* main mass: a scalloped, lobed outline (3 lobes per hemisphere) so it
          reads as a folded brain, not a smooth blob */}
      <path
        d="M24 8.1
           Q32 6.9 35.1 13.4
           Q40.8 19 34.4 24.25
           Q31.2 29.9 24 33
           Q16.8 29.9 13.6 24.25
           Q7.2 19 12.9 13.4
           Q16 6.9 24 8.1 Z"
        fill="currentColor"
      />
      {/* stem */}
      <path d="M21 31.5 L21 40 Q21 42 23 42 L25 42 Q27 42 27 40 L27 31.5 Z" fill="currentColor" />

      {/* highlight bevel (top-left sheen) */}
      <path
        d="M24 8.1 Q16 6.9 12.9 13.4 Q7.2 19 13.6 24.25 Q10.5 19 15.5 14 Q20 9.3 24 8.1 Z"
        fill="#ffffff"
        opacity="0.16"
      />
      {/* shadow bevel (bottom-right) */}
      <path
        d="M40.8 19 Q34.4 24.25 24 33 Q30.5 27.5 35.5 21.5 Q38.5 18.3 40.8 19 Z"
        fill="#000000"
        opacity="0.18"
      />

      {/* hemisphere divide */}
      <path d="M24 8.5 L24 32.5" stroke="#000000" strokeOpacity="0.25" strokeWidth="1" />

      {/* gyri (fold) lines, one per lobe, echoing the outline's curve */}
      {[
        'M27 9 Q30.3 8.6 32.3 11.2',
        'M33.3 15.3 Q36.6 19 33.2 23',
        'M28 26.3 Q31.2 28.6 27.2 31.7',
        'M21 9 Q17.7 8.6 15.7 11.2',
        'M14.7 15.3 Q11.4 19 14.8 23',
        'M20 26.3 Q16.8 28.6 20.8 31.7',
      ].map((d) => (
        <path key={d} d={d} stroke="#000000" strokeOpacity="0.24" strokeWidth="1" fill="none" strokeLinecap="round" />
      ))}
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

export default function BrainMark({
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
        <Brain />
        <Signal pulse />
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
      <Brain />
      <Signal flash={active} />
      <AnimatePresence>{active && <BurstRings />}</AnimatePresence>
    </motion.svg>
  )
}
