/*
  Shared Framer Motion variants.

  Import these instead of writing inline animation objects so every
  section animates consistently. Usage:

    import { fadeInUp, staggerContainer } from '@/lib/motion'
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show">
      <motion.h2 variants={fadeInUp}>Title</motion.h2>
    </motion.div>
*/

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

// Parent wrapper: animates children one after another.
export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

// Reusable props for "animate when scrolled into view" sections.
export const inViewProps = {
  initial: 'hidden',
  whileInView: 'show',
  viewport: { once: true, amount: 0.3 },
}

// Quick pop - good for feedback badges (correct/incorrect) and chips.
export const popIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 400, damping: 22 },
  },
}

// Slide a panel/drawer in from the right (accessibility toolbar).
export const slideInRight = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, x: 32, transition: { duration: 0.2 } },
}
