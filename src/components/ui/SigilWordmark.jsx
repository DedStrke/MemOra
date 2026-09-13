/*
  The Memora wordmark.

  The wordmark uses a left-to-right colour gradient across the letters:
  - "M"    : electric blue  (#60a5fa / brand-start)
  - "em"   : cobalt-blue
  - "o"    : transitioning through violet
  - "r"    : deep violet    (#7c3aed)
  - "a"    : indigo-lavender (#818cf8 / brand-end)

  This gradient is implemented via SVG linearGradient + text fill, so it
  works correctly at every size and stays theme-safe (the gradient stops
  are the brand palette, never raw hex in component logic).

  The custom "o" keeps the angular-interrupted ring from the original
  design: a strokeDasharray circle with a small angular shard detached
  from the upper-right, echoing the sigil's fragment without adding an eye.
  It still reads instantly as an "o".

  Sizes:
  - 'nav'  : 21px (navbar / small contexts)
  - 'hero' : 6xl–8xl (landing hero, marketing hero)
*/

const GRADIENT_ID_NAV  = 'memora-wordmark-grad-nav'
const GRADIENT_ID_HERO = 'memora-wordmark-grad-hero'
const O_LIFT = '0.09em'

function GradientDef({ id }) {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#60a5fa" />  {/* electric blue  */}
          <stop offset="40%"  stopColor="#818cf8" />  {/* indigo         */}
          <stop offset="75%"  stopColor="#7c3aed" />  {/* deep violet    */}
          <stop offset="100%" stopColor="#a78bfa" />  {/* soft lavender  */}
        </linearGradient>
      </defs>
    </svg>
  )
}

function SigilO() {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      style={{ height: '0.62em', width: '0.62em', transform: `translateY(${O_LIFT})` }}
    >
      {/* Interrupted ring — the gap breaks any eye-like closure */}
      <circle
        cx="20"
        cy="20"
        r="12.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeDasharray="65.5 13"
      />
      {/* Small angular fragment detached from upper-right, echoing the sigil */}
      <path d="M33 4 L38.5 2.5 L35.5 11 Z" fill="currentColor" />
    </svg>
  )
}

/*
  Wraps the wordmark letters in a <span> that uses the SVG gradient as its
  text fill via the CSS `background-clip: text` technique — works for the
  pure-text letters ("Mem", "ra"). The SigilO SVG uses currentColor so it
  inherits the surrounding colour at the midpoint of the gradient.
*/
function GradientText({ children, gradientId, className = '' }) {
  return (
    <span
      className={className}
      style={{
        background: `linear-gradient(to right, #60a5fa 0%, #818cf8 40%, #7c3aed 75%, #a78bfa 100%)`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent',
      }}
    >
      {children}
    </span>
  )
}

function SigilWordmarkText({ className = '', gradientId }) {
  return (
    <span
      className={`inline-flex items-baseline font-display font-extrabold tracking-tight ${className}`}
    >
      <GradientText gradientId={gradientId}>Mem</GradientText>
      <span
        style={{
          color: '#818cf8',
          WebkitTextFillColor: '#818cf8',
          display: 'inline-flex',
          alignItems: 'baseline',
        }}
      >
        <SigilO />
      </span>
      <GradientText gradientId={gradientId}>ra</GradientText>
    </span>
  )
}

export default function SigilWordmark({ size = 'nav', className = '' }) {
  const gradientId = size === 'hero' ? GRADIENT_ID_HERO : GRADIENT_ID_NAV
  if (size === 'hero') {
    return (
      <>
        <GradientDef id={gradientId} />
        <SigilWordmarkText
          gradientId={gradientId}
          className={`text-6xl sm:text-7xl lg:text-8xl ${className}`}
        />
      </>
    )
  }
  return (
    <>
      <GradientDef id={gradientId} />
      <SigilWordmarkText gradientId={gradientId} className={`text-[21px] ${className}`} />
    </>
  )
}
