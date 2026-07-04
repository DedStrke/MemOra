/*
  Sparky - the AdaptHub mascot. A friendly rounded "idea spark" buddy.
  The body recolours with the brand token so it fits every theme; the facial
  features are fixed character colours (like a logo).

  Props:
    - expression: 'happy' | 'wave' | 'cheer'   (default 'happy')
    - className: sizing (default h-24 w-24)
    - label: pass to expose to screen readers; otherwise decorative
*/
const EYE = '#ffffff'
const PUPIL = '#2a2747'
const CHEEK = '#ff9db0'
const MOUTH = '#2a2747'
const TONGUE = '#ff8fa3'

export default function Mascot({
  expression = 'happy',
  className = 'h-24 w-24',
  label,
}) {
  const a11y = label
    ? { role: 'img', 'aria-label': label }
    : { 'aria-hidden': 'true' }

  const cheer = expression === 'cheer'
  const wave = expression === 'wave'

  return (
    <svg viewBox="0 0 120 128" className={className} {...a11y}>
      {/* soft glow */}
      <ellipse cx="60" cy="70" rx="52" ry="50" className="fill-brand" opacity="0.12" />

      {/* idea spark on top */}
      <line x1="60" y1="18" x2="60" y2="8" className="stroke-brand-strong" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M60 0 L62.4 5.6 L68 8 L62.4 10.4 L60 16 L57.6 10.4 L52 8 L57.6 5.6 Z"
        className="fill-paper"
      />

      {/* arms (behind body) */}
      <path
        d={wave ? 'M96 74 q14 -6 12 -22' : 'M96 76 q12 6 10 20'}
        className="stroke-brand-strong"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24 76 q-12 6 -10 20"
        className="stroke-brand-strong"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />

      {/* body */}
      <path
        d="M60 20 C86 20 102 40 102 68 C102 100 84 118 60 118 C36 118 18 100 18 68 C18 40 34 20 60 20 Z"
        className="fill-brand"
      />
      {/* belly highlight */}
      <ellipse cx="60" cy="82" rx="30" ry="26" fill="#ffffff" opacity="0.14" />

      {/* feet */}
      <ellipse cx="46" cy="116" rx="9" ry="5" className="fill-brand-strong" />
      <ellipse cx="74" cy="116" rx="9" ry="5" className="fill-brand-strong" />

      {/* eyes */}
      {cheer ? (
        <>
          <path d="M36 60 q9 -10 18 0" fill="none" stroke={PUPIL} strokeWidth="4" strokeLinecap="round" />
          <path d="M66 60 q9 -10 18 0" fill="none" stroke={PUPIL} strokeWidth="4" strokeLinecap="round" />
        </>
      ) : (
        <>
          <ellipse cx="45" cy="62" rx="11" ry="13" fill={EYE} />
          <ellipse cx="75" cy="62" rx="11" ry="13" fill={EYE} />
          <circle cx="47" cy="64" r="5.5" fill={PUPIL} />
          <circle cx="77" cy="64" r="5.5" fill={PUPIL} />
          <circle cx="44.5" cy="61" r="2" fill="#ffffff" />
          <circle cx="74.5" cy="61" r="2" fill="#ffffff" />
        </>
      )}

      {/* cheeks */}
      <ellipse cx="34" cy="78" rx="6" ry="4" fill={CHEEK} opacity="0.55" />
      <ellipse cx="86" cy="78" rx="6" ry="4" fill={CHEEK} opacity="0.55" />

      {/* mouth */}
      {cheer ? (
        <path d="M46 80 Q60 98 74 80 Q60 88 46 80 Z" fill={MOUTH} />
      ) : (
        <path d="M49 80 Q60 92 71 80 Q60 87 49 80 Z" fill={MOUTH} />
      )}
      <ellipse cx="60" cy="86" rx="5" ry="3" fill={TONGUE} />
    </svg>
  )
}
