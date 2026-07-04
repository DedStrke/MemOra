import { motion } from 'framer-motion'

/*
  Reusable Button.

  Props:
    - variant: 'primary' | 'secondary' | 'ghost' | 'subtle'  (default 'primary')
    - size: 'sm' | 'md' | 'lg'  (default 'md')
    - as: render as a different element/component (e.g. Link). Defaults to <button>.
    - ...rest: any native props (onClick, type, to, href, disabled, etc.)

  Colours come from semantic tokens so buttons recolour with the theme.
  All sizes keep a comfortable tap target for motor/keyboard users.
*/
const variants = {
  primary: 'bg-brand text-on-brand hover:brightness-110 shadow-sm',
  secondary:
    'bg-surface text-fg border border-line hover:border-brand hover:text-brand-strong',
  ghost: 'bg-transparent text-brand-strong hover:bg-brand-soft',
  subtle: 'bg-raised text-fg hover:bg-brand-soft',
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
      className={`inline-flex items-center justify-center rounded-xl font-semibold transition-[filter,background-color,border-color,color] duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </MotionComponent>
  )
}
