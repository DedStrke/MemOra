/*
  The Memora wordmark.

  The wordmark inherits its color from its parent (e.g. `text-brand`),
  so it perfectly matches the logo and theme's accent color dynamically.

  The custom "o" keeps the angular-interrupted ring from the original
  design: a strokeDasharray circle with a small angular shard detached
  from the upper-right, echoing the sigil's fragment without adding an eye.
  It still reads instantly as an "o".

  Sizes:
  - 'nav'  : 21px (navbar / small contexts)
  - 'hero' : 6xl–8xl (landing hero, marketing hero)
*/

import { motion } from 'framer-motion'

const O_LIFT = '0.09em'

function SigilO() {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      style={{ height: '0.62em', width: '0.62em', transform: `translateY(${O_LIFT})` }}
    >
      <circle
        cx="20"
        cy="20"
        r="12.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeDasharray="65.5 13"
      />
      <path d="M33 4 L38.5 2.5 L35.5 11 Z" fill="currentColor" />
    </svg>
  )
}

const letterVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', damping: 15, stiffness: 100 } }
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

function SigilWordmarkText({ className = '', animate = false }) {
  if (!animate) {
    return (
      <span
        className={`inline-flex items-baseline font-display font-extrabold tracking-tight ${className}`}
      >
        <span>Mem</span>
        <span style={{ display: 'inline-flex', alignItems: 'baseline' }}>
          <SigilO />
        </span>
        <span>ra</span>
      </span>
    )
  }

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={`inline-flex items-baseline font-display font-extrabold tracking-tight ${className}`}
    >
      {['M', 'e', 'm'].map((l, i) => (
        <motion.span 
          key={i} 
          variants={letterVariants}
          whileHover={{ y: -5, scale: 1.1, filter: "brightness(1.2)" }}
          style={{ display: 'inline-block' }}
        >
          {l}
        </motion.span>
      ))}
      <motion.span 
        variants={letterVariants} 
        whileHover={{ y: -5, scale: 1.1, filter: "brightness(1.2)" }}
        style={{ display: 'inline-flex', alignItems: 'baseline' }}
      >
        <SigilO />
      </motion.span>
      {['r', 'a'].map((l, i) => (
        <motion.span 
          key={i} 
          variants={letterVariants}
          whileHover={{ y: -5, scale: 1.1, filter: "brightness(1.2)" }}
          style={{ display: 'inline-block' }}
        >
          {l}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default function SigilWordmark({ size = 'nav', className = '', animate = false }) {
  if (size === 'hero') {
    return (
      <SigilWordmarkText
        animate={animate}
        className={`text-6xl sm:text-7xl lg:text-8xl text-brand ${className}`}
      />
    )
  }
  return (
    <SigilWordmarkText animate={animate} className={`text-[21px] text-brand ${className}`} />
  )
}
