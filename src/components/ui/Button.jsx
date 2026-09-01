import { motion } from 'framer-motion'

/*
  Reusable Button - liquid glass pill styling (translucent, blurred, a
  hairline edge and soft sheen; see the .glass utilities in index.css).

  Props:
    - variant: 'primary' | 'secondary' | 'ghost' | 'subtle'  (default 'primary')
    - size: 'sm' | 'md' | 'lg'  (default 'md')
    - as: render as a different element/component (e.g. Link). Defaults to <button>.
    - ...rest: any native props (onClick, type, to, href, disabled, etc.)

  Colours come from semantic tokens so buttons recolour with the theme.
  All sizes keep a comfortable tap target for motor/keyboard users.
*/
const variants = {
  primary:
    'glass text-on-brand [background-color:color-mix(in_srgb,var(--brand)_82%,transparent)] hover:[background-color:color-mix(in_srgb,var(--brand)_92%,transparent)]',
  secondary: 'glass text-fg hover:[border-color:color-mix(in_srgb,var(--brand)_45%,var(--line))]',
  ghost: 'bg-transparent text-brand-strong hover:bg-brand-soft',
  subtle: 'glass text-fg [background-color:color-mix(in_srgb,var(--raised)_60%,transparent)]',
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
