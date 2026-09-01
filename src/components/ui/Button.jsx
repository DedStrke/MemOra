import { motion } from 'framer-motion'

/*
  Reusable Button - liquid glass pill styling (translucent, blurred, a
  hairline edge and soft sheen; see the .glass utilities in index.css).

  Props:
    - variant: 'primary' | 'secondary' | 'ghost' | 'subtle' | 'link'  (default 'primary')
    - size: 'sm' | 'md' | 'lg'  (default 'md') - ignored by 'link', which has no padding
    - as: render as a different element/component (e.g. Link). Defaults to <button>.
    - ...rest: any native props (onClick, type, to, href, disabled, etc.)

  Colours come from semantic tokens (--brand / --brand-strong etc.), so every
  variant - including 'link's underline and arrow - already re-themes with
  both light/dark/cream/high-contrast AND the accent colour picker, with no
  extra work: it's just reading the same CSS custom properties everything
  else does.

  'link' is a plain text link, not a pill: put a trailing arrow icon as the
  last child and it slides right on hover while the underline fades in -
  put a leading icon first and it stays put, only trailing icons move.
*/
const variants = {
  primary:
    'glass text-on-brand [background-color:color-mix(in_srgb,var(--brand)_82%,transparent)] hover:[background-color:color-mix(in_srgb,var(--brand)_92%,transparent)]',
  secondary: 'glass text-fg hover:[border-color:color-mix(in_srgb,var(--brand)_45%,var(--line))]',
  ghost: 'bg-transparent text-brand-strong hover:bg-brand-soft',
  subtle: 'glass text-fg [background-color:color-mix(in_srgb,var(--raised)_60%,transparent)]',
  link: 'group !px-0 !py-0 bg-transparent text-fg underline decoration-2 decoration-transparent underline-offset-4 transition-[color,text-decoration-color] duration-200 hover:text-brand-strong hover:decoration-brand-strong [&_svg:last-child]:transition-transform [&_svg:last-child]:duration-200 [&:hover_svg:last-child]:translate-x-1',
}

const sizes = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-4 text-base gap-2.5',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  as: Component = 'button',
  className = '',
  children,
  ...rest
}) {
  const MotionComponent = motion.create(Component)

  return (
    <MotionComponent
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-[filter,background-color,border-color,color] duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </MotionComponent>
  )
}
