import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/*
  A soft brand-coloured glow that trails the cursor with a springy lag, and
  swells + brightens when the cursor is over something interactive (links,
  buttons, inputs). Purely decorative: pointer-events-none so it never blocks
  clicks, shown only on fine pointers (mouse/trackpad), and off under reduced
  motion. Animates transform/opacity only, so it stays cheap.
*/
const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label, summary'

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-300)
  const y = useMotionValue(-300)
  const sx = useSpring(x, { stiffness: 260, damping: 30, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 260, damping: 30, mass: 0.6 })

  useEffect(() => {
    // Mouse/trackpad only. This glow follows the user's own pointer rather than
    // moving on its own, so it stays on even when the OS requests reduced motion
    // (the same gentle, on-brand choice as the marquee and wheel).
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return
    setEnabled(true)

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) => {
      if (e.target.closest?.(INTERACTIVE)) setHovering(true)
    }
    const out = (e) => {
      if (e.target.closest?.(INTERACTIVE)) setHovering(false)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerover', over)
    window.addEventListener('pointerout', out)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
      window.removeEventListener('pointerout', out)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      className="focus-hide pointer-events-none fixed left-0 top-0 z-[60]"
      style={{ x: sx, y: sy }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="h-72 w-72 rounded-full bg-brand blur-3xl"
          animate={{ scale: hovering ? 1.4 : 1, opacity: hovering ? 0.17 : 0.09 }}
          transition={{ type: 'spring', stiffness: 200, damping: 28 }}
        />
      </div>
    </motion.div>
  )
}
