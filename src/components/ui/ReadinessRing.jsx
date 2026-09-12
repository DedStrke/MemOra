/*
  A 0-1 proportion as a ring, for the dashboard rail. (The segmented
  ChapterBar is the diagnostic version of the same picture on Progress.)

  The track is always drawn full, so a low number reads as "mostly still to
  do" rather than as a broken widget, and a figure is printed in the middle
  - colour alone never carries the value.

  `display` overrides that printed figure. The rail passes the raw chapter
  count so the numeral inside the ring is the same number as the bold one in
  the label beside it; without it the ring would print a percentage next to
  a count and invite reading one as the other. The arc is `value` either
  way, so the two can't disagree.
*/
export default function ReadinessRing({ value, color, size = 56, stroke = 6, label, display }) {
  const pct = typeof value === 'number' ? Math.max(0, Math.min(1, value)) : null
  const r = (size - stroke) / 2
  const circumference = 2 * Math.PI * r
  const dash = pct === null ? 0 : circumference * pct

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="shrink-0"
      role="img"
      aria-label={label || (pct === null ? 'No readiness data yet' : `${Math.round(pct * 100)}% ready`)}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="var(--r0-not-started)"
        strokeWidth={stroke}
        opacity="0.45"
      />
      {pct !== null && pct > 0 && (
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference - dash}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: 'stroke-dasharray 600ms cubic-bezier(0.2, 0.8, 0.3, 1)' }}
        />
      )}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="central"
        fill="var(--fg)"
        fontSize={size * 0.28}
        fontWeight="700"
        fontFamily="var(--app-font)"
      >
        {display !== undefined ? display : pct === null ? '–' : `${Math.round(pct * 100)}`}
      </text>
    </svg>
  )
}
