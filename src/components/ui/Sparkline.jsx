/*
  Tiny inline line chart. Inherits currentColor, so set the colour via the
  parent's text-* class (e.g. className="text-quiz h-10 w-full").
*/
export default function Sparkline({ data = [], className = 'h-10 w-full' }) {
  if (data.length < 2) return null
  const W = 100
  const H = 32
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1

  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * W
    const y = H - 3 - ((v - min) / range) * (H - 6)
    return [x, y]
  })
  const line = points
    .map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`)
    .join(' ')
  const area = `${line} L ${W} ${H} L 0 ${H} Z`

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path d={area} fill="currentColor" opacity="0.12" />
      <path
        d={line}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
