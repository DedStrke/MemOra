import { AVATAR_BG_HEX, initialsFor, shapeCells } from '@/lib/avatar'

/*
  Renders a generated community avatar (§8.2) - deterministic from
  {name, style, bg, seed}, so it's pixel-identical everywhere it's shown
  and needs no upload, no storage, no moderation.
*/
export default function Avatar({ name, style = 'initials', bg = 'indigo', seed, className = 'h-9 w-9' }) {
  const colour = AVATAR_BG_HEX[bg] || AVATAR_BG_HEX.indigo
  const label = `${name || 'User'}'s avatar`

  if (style === 'shapes') {
    const cells = shapeCells(seed || name || 'memora')
    return (
      <svg viewBox="0 0 5 5" className={`shrink-0 rounded-full ${className}`} role="img" aria-label={label}>
        <rect width="5" height="5" fill="var(--surface)" />
        {cells.map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={colour} />
        ))}
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 40 40" className={`shrink-0 ${className}`} role="img" aria-label={label}>
      <rect width="40" height="40" rx="20" fill={colour} />
      <text
        x="20"
        y="21"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="700"
        fontSize="15"
        fill="#ffffff"
      >
        {initialsFor(name)}
      </text>
    </svg>
  )
}
