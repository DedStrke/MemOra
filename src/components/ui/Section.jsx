import { motion } from 'framer-motion'
import { staggerContainer, inViewProps } from '@/lib/motion'

/*
  Page section wrapper: consistent max-width + padding, plus a stagger
  animation for its children.

  Props:
    - width: 'default' | 'narrow' | 'wide'  (max-width)
    - animateOnMount: animate immediately instead of on scroll (use for app
      pages that don't scroll, e.g. onboarding / study).
*/
const widths = {
  narrow: 'max-w-3xl',
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
}

export default function Section({
  id,
  className = '',
  width = 'default',
  animateOnMount = false,
  children,
}) {
  const animationProps = animateOnMount
    ? { initial: 'hidden', animate: 'show' }
    : inViewProps

  return (
    <motion.section
      id={id}
      variants={staggerContainer}
      {...animationProps}
      className={`mx-auto w-full ${widths[width]} px-5 py-16 sm:px-8 ${className}`}
    >
      {children}
    </motion.section>
  )
}
