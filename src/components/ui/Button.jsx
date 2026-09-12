import { motion } from 'framer-motion'

/*
  motion.create() returns a brand new component TYPE each time it is called.
  Calling it inside render therefore handed React a different type on every
  render, so React tore the button down and rebuilt it each time instead of
  updating it. The visible symptom was clicks doing nothing at all: the
  node carrying the React click handler was replaced between pointerdown
  and click, so the handler never ran - no error, just a dead button.
  ("Start studying" on a study session was the clearest case.)

  Caching by element type fixes it: the same `as` prop always yields the
  same component identity, so React updates the button in place. The map is
  module-level because the set of element types a button can render as is
  tiny and fixed for the life of the page.
*/
const motionCache = new Map()
const asMotion = (Component) => {
  if (!motionCache.has(Component)) motionCache.set(Component, motion.create(Component))
  return motionCache.get(Component)
}

/*
  Reusable Button - a live current in the button's own brand colour, kept
  behind a glass cover that leaves only a thin coloured ring showing until
  you hover or focus it (see .btn-charge in index.css for the mechanism).
  It's built from --brand/--ring/--brand-strong/--surface, so it re-themes
  and re-accents with zero extra work here, and high-contrast mode swaps it
  for a solid, hard-edged button instead of quietly breaking.

  Props:
    - variant: 'primary' | 'secondary' | 'ghost' | 'subtle' | 'link'  (default 'primary')
    - size: 'sm' | 'md' | 'lg'  (default 'md') - ignored by 'link', which has no padding
    - as: render as a different element/component (e.g. Link). Defaults to <button>.
    - ...rest: any native props (onClick, type, to, href, disabled, etc.)

  'ghost' and 'link' skip the charge chrome on purpose: ghost is meant to
  stay minimal (it's the button you reach for next to two or three others
  in a row), and a hyperlink with a coloured current running through it
  would just read as broken.
*/
// One chrome for every real button. 'secondary' and 'subtle' are kept as
// accepted names so call sites don't all have to change, but they render
// identically to 'primary' on purpose - a row of buttons that each look
// slightly different is the thing this is fixing. Emphasis comes from
// size and position instead.
const chromeVariants = {
  primary: 'btn-charge',
  secondary: 'btn-charge',
  subtle: 'btn-charge',
  ghost: 'bg-transparent text-brand-strong hover:bg-brand-soft',
}

const linkClass =
  'group !px-0 !py-0 bg-transparent text-fg underline decoration-2 decoration-transparent underline-offset-4 transition-[color,text-decoration-color] duration-200 hover:text-brand-strong hover:decoration-brand-strong [&_svg:last-child]:transition-transform [&_svg:last-child]:duration-200 [&:hover_svg:last-child]:translate-x-1'

const sizes = {
  sm: { pad: 'px-4 py-2 text-sm', gap: 'gap-1.5' },
  md: { pad: 'px-6 py-3 text-sm', gap: 'gap-2' },
  lg: { pad: 'px-8 py-4 text-base', gap: 'gap-2.5' },
}

export default function Button({
  variant = 'primary',
  size = 'md',
  as: Component = 'button',
  className = '',
  children,
  ...rest
}) {
  const MotionComponent = asMotion(Component)

  if (variant === 'link') {
    return (
      <MotionComponent
        whileTap={{ scale: 0.97 }}
        className={`inline-flex items-center justify-center whitespace-nowrap font-semibold transition-[filter,background-color,border-color,color] duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${linkClass} ${className}`}
        {...rest}
      >
        {children}
      </MotionComponent>
    )
  }

  const hasCharge = variant !== 'ghost'
  const labelClass = `${hasCharge ? 'btn-charge-label' : ''} inline-flex items-center ${sizes[size].gap}`

  return (
    <MotionComponent
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`relative inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-[filter,background-color,border-color,color] duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${sizes[size].pad} ${chromeVariants[variant]} ${className}`}
      {...rest}
    >
      {hasCharge && (
        <>
          <span className="btn-charge-current" aria-hidden="true" />
          <span className="btn-charge-cover" aria-hidden="true" />
        </>
      )}
      <span className={labelClass}>{children}</span>
    </MotionComponent>
  )
}
