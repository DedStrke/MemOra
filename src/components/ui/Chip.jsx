import { Link } from 'react-router-dom'

/*
  The one selectable pill used across the app - subject pickers, technique
  pickers, exam-paper pickers, filters, settings choices, mark tallies.

  Before this existed each of those was hand-rolled, and they had drifted to
  seven different combinations of padding, text size and selected-state
  colour, which is what made the app feel like separate pages stitched
  together rather than one product.

  Props:
    - selected: filled brand treatment vs hairline outline
    - size: 'sm' | 'md'  (default 'md')
    - as / to: render as a router Link instead of a button
    - disabled: greyed and non-interactive (also used for "no content here")
*/
const sizes = {
  sm: 'px-3 py-1 text-xs gap-1.5',
  md: 'px-3.5 py-1.5 text-sm gap-1.5',
}

export default function Chip({
  selected = false,
  size = 'md',
  as,
  to,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const base = `inline-flex items-center justify-center rounded-full border font-medium transition-colors ${sizes[size]}`

  const state = disabled
    ? 'cursor-not-allowed border-line bg-surface text-muted opacity-40'
    : selected
      ? 'border-brand bg-brand text-on-brand'
      : 'border-line bg-surface text-fg hover:border-brand hover:bg-brand-soft'

  const cls = `${base} ${state} ${className}`

  if (to && !disabled) {
    const Component = as || Link
    return (
      <Component to={to} className={cls} {...rest}>
        {children}
      </Component>
    )
  }

  return (
    <button type="button" disabled={disabled} className={cls} {...rest}>
      {children}
    </button>
  )
}
