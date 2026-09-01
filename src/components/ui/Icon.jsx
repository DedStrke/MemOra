/*
  Icon set (inherits currentColor, so it recolours with the theme).
  Decorative by default (aria-hidden). Pass a `label` to expose it to screen
  readers as a meaningful image.

    <Icon name="volume" className="h-5 w-5" />
    <Icon name="check" label="Correct" />

  ---------------------------------------------------------------------------
  THE HOUSE STYLE: DUOTONE, NOT OUTLINE

  Thin uniform outline icons on a 24px grid - 2px stroke, round joins, no
  fill - is the single most generic look in UI design; it's what every icon
  library ships and what every generated interface reaches for. This set is
  deliberately not that.

  Content-bearing icons carry a `solid` layer: a filled silhouette of the
  shape's mass, painted under the linework at low opacity. The result reads
  as weighted and drawn rather than traced, and it gives the whole set one
  recognisable signature across every size it's used at.

  Small structural glyphs (arrows, chevrons, check, x, menu) stay stroke-only
  on purpose - a duotone chevron is just a fuzzy chevron.

  Joins are bevelled, not rounded, so corners cut flat instead of pooling
  into soft pills. That's the other half of the signature.

  Shape of an entry:
    name: <fragment>                       stroke-only
    name: { solid: <..>, line: <..> }      duotone
*/

const SOLID_OPACITY = 0.18

const ICONS = {
  // ---------------------------------------------------- content / feature
  book: {
    solid: <path d="M12 6c-1.6-1-4-1.5-6-1.5S2.6 5 2 5.5v13c.6-.5 2.4-1 4-1s4.4.5 6 1.5z" />,
    line: (
      <>
        <path d="M12 6c-1.6-1-4-1.5-6-1.5S2.6 5 2 5.5v13c.6-.5 2.4-1 4-1s4.4.5 6 1.5c1.6-1 4-1.5 6-1.5s3.4.5 4 1v-13c-.6-.5-2.4-1-4-1s-4.4.5-6 1.5z" />
        <path d="M12 6v12" />
      </>
    ),
  },
  cards: {
    solid: <rect x="3" y="7" width="13" height="14" rx="2" />,
    line: (
      <>
        <rect x="3" y="7" width="13" height="14" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2" />
      </>
    ),
  },
  quiz: {
    solid: <circle cx="12" cy="12" r="9" />,
    line: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.5 9.2a2.5 2.5 0 1 1 3.3 2.4c-.8.3-1.3 1-1.3 1.9" />
        <path d="M12 17h.01" />
      </>
    ),
  },
  paper: {
    solid: <path d="M6 2h8l4 4v16H6z" />,
    line: (
      <>
        <path d="M6 2h8l4 4v16H6z" />
        <path d="M14 2v4h4" />
        <path d="M9 13h6M9 17h6M9 9h2" />
      </>
    ),
  },
  clipboard: {
    solid: <rect x="5" y="4" width="14" height="17" rx="2" />,
    line: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1H9z" />
        <path d="M9 11h6M9 15h4" />
      </>
    ),
  },
  scroll: {
    solid: <path d="M8 6v12a3 3 0 0 0 3 3h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H8z" />,
    line: (
      <>
        <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a3 3 0 0 1-3-3V6a2 2 0 0 1 4 0v2H4" />
        <path d="M10 10h6M10 14h4" />
      </>
    ),
  },
  brain: {
    solid: (
      <path d="M12 5a2.6 2.6 0 0 0-5-.9A2.4 2.4 0 0 0 4.6 7 2.5 2.5 0 0 0 4 10.3 2.5 2.5 0 0 0 5.4 13 2.5 2.5 0 0 0 7 16.4 2.4 2.4 0 0 0 12 18z" />
    ),
    line: (
      <>
        <path d="M12 5a2.6 2.6 0 0 0-5-.9A2.4 2.4 0 0 0 4.6 7 2.5 2.5 0 0 0 4 10.3 2.5 2.5 0 0 0 5.4 13 2.5 2.5 0 0 0 7 16.4 2.4 2.4 0 0 0 12 18z" />
        <path d="M12 5a2.6 2.6 0 0 1 5-.9A2.4 2.4 0 0 1 19.4 7 2.5 2.5 0 0 1 20 10.3 2.5 2.5 0 0 1 18.6 13 2.5 2.5 0 0 1 17 16.4 2.4 2.4 0 0 1 12 18z" />
        <path d="M12 5v13" />
      </>
    ),
  },
  cap: {
    solid: <path d="M2.5 9 12 4.5 21.5 9 12 13.5z" />,
    line: (
      <>
        <path d="M2.5 9 12 4.5 21.5 9 12 13.5z" />
        <path d="M6 11v4.5c0 1.4 2.7 2.8 6 2.8s6-1.4 6-2.8V11" />
        <path d="M21.5 9v5.5" />
      </>
    ),
  },
  target: {
    solid: <circle cx="12" cy="12" r="9" />,
    line: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
  clock: {
    solid: <circle cx="12" cy="12" r="9" />,
    line: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
  },
  calendar: {
    solid: <path d="M3.5 9.5h17V19a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z" />,
    line: (
      <>
        <rect x="3.5" y="5" width="17" height="16" rx="2" />
        <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
      </>
    ),
  },
  users: {
    solid: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0z" />
      </>
    ),
    line: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0" />
        <path d="M16 5.2a3.2 3.2 0 0 1 0 6.1" />
        <path d="M17 14.5a5.5 5.5 0 0 1 3.5 5.5" />
      </>
    ),
  },
  user: {
    solid: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5.5 20a6.5 6.5 0 0 1 13 0z" />
      </>
    ),
    line: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
      </>
    ),
  },
  home: {
    solid: <path d="M5 10.5 12 4l7 6.5V20H5z" />,
    line: (
      <>
        <path d="M3 11l9-8 9 8" />
        <path d="M5 10v10h14V10" />
      </>
    ),
  },
  shield: {
    solid: <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />,
    line: <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />,
  },
  star: {
    solid: <path d="m12 3 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18l-5.9 3 1.2-6.5L2.5 9.9 9 9z" />,
    line: <path d="m12 3 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18l-5.9 3 1.2-6.5L2.5 9.9 9 9z" />,
  },
  sparkles: {
    solid: <path d="M12 3l1.8 4.7L18.5 9l-4.7 1.3L12 15l-1.8-4.7L5.5 9l4.7-1.3z" />,
    line: (
      <>
        <path d="M12 3l1.8 4.7L18.5 9l-4.7 1.3L12 15l-1.8-4.7L5.5 9l4.7-1.3z" />
        <path d="M18.5 15l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />
      </>
    ),
  },
  lightbulb: {
    solid: <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.2 1 2.5h6c0-1.3.3-1.8 1-2.5A6 6 0 0 0 12 3z" />,
    line: (
      <>
        <path d="M9 18h6M10 21h4" />
        <path d="M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.2 1 2.5h6c0-1.3.3-1.8 1-2.5A6 6 0 0 0 12 3z" />
      </>
    ),
  },
  eye: {
    solid: <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />,
    line: (
      <>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  send: {
    solid: <path d="M21.5 2.5 15 21.5l-4-8.5-8.5-4z" />,
    line: (
      <>
        <path d="M21.5 2.5 11 13" />
        <path d="M21.5 2.5 15 21.5l-4-8.5-8.5-4z" />
      </>
    ),
  },
  camera: {
    solid: <path d="M4 8h3l1.6-2h6.8L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />,
    line: (
      <>
        <path d="M4 8h3l1.6-2h6.8L17 8h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
        <circle cx="12" cy="14" r="3.5" />
      </>
    ),
  },
  rocket: {
    solid: <path d="M9 13a13 13 0 0 1 9-10c2 0 3 1 3 3a13 13 0 0 1-10 9z" />,
    line: (
      <>
        <path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.8-.8.9-2 0-3s-2.2-.8-3 0z" />
        <path d="M9 13a13 13 0 0 1 9-10c2 0 3 1 3 3a13 13 0 0 1-10 9z" />
        <circle cx="15" cy="9" r="1.4" />
      </>
    ),
  },
  heart: {
    solid: <path d="M12 20.3 4.2 12.6a4.5 4.5 0 0 1 6.4-6.3l1.4 1.4 1.4-1.4a4.5 4.5 0 0 1 6.4 6.3z" />,
    line: <path d="M12 20.3 4.2 12.6a4.5 4.5 0 0 1 6.4-6.3l1.4 1.4 1.4-1.4a4.5 4.5 0 0 1 6.4 6.3z" />,
  },
  leaf: {
    solid: <path d="M11 20A7 7 0 0 1 4 13C4 7 11 4 20 4c0 9-3 16-9 16z" />,
    line: (
      <>
        <path d="M11 20A7 7 0 0 1 4 13C4 7 11 4 20 4c0 9-3 16-9 16z" />
        <path d="M4 20c4-4 7-6 12-8" />
      </>
    ),
  },
  cookie: {
    solid: <path d="M12 3a9 9 0 1 0 8.6 6.4 2.7 2.7 0 0 1-3.1-3.1A2.7 2.7 0 0 1 14.4 3.2 9 9 0 0 0 12 3z" />,
    line: (
      <>
        <path d="M12 3a9 9 0 1 0 8.6 6.4 2.7 2.7 0 0 1-3.1-3.1A2.7 2.7 0 0 1 14.4 3.2 9 9 0 0 0 12 3z" />
        <path d="M8.5 10h.01M12.5 9h.01M15 13h.01M9 14.5h.01M13 15.5h.01" />
      </>
    ),
  },
  wand: {
    solid: <path d="M14 4l.9 2.1L17 7l-2.1.9L14 10l-.9-2.1L11 7l2.1-.9z" />,
    line: (
      <>
        <path d="m4 20 11-11" />
        <path d="M14 4l.9 2.1L17 7l-2.1.9L14 10l-.9-2.1L11 7l2.1-.9z" />
        <path d="M19 13l.6 1.4L21 15l-1.4.6L19 17l-.6-1.4L17 15l1.4-.6z" />
      </>
    ),
  },
  access: {
    solid: <circle cx="12" cy="12" r="9.5" />,
    line: (
      <>
        <circle cx="12" cy="12" r="9.5" />
        <circle cx="12" cy="7" r="1.3" fill="currentColor" stroke="none" />
        <path d="M5.5 10h13M12 10v5M12 15l-3 4.5M12 15l3 4.5" />
      </>
    ),
  },
  wheelchair: {
    solid: <circle cx="12" cy="16" r="5" />,
    line: (
      <>
        <circle cx="12" cy="4" r="1.7" fill="currentColor" stroke="none" />
        <path d="M10.5 7.5 12 13h5" />
        <circle cx="12" cy="16" r="5" />
        <path d="M17 13l1.6 4.2" />
      </>
    ),
  },

  // --------------------------------------------------- structural / small
  volume: (
    <>
      <path d="M11 5 6 9H3v6h3l5 4z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M18.5 6a9 9 0 0 1 0 12" />
    </>
  ),
  eyeOff: (
    <>
      <path d="M9.9 4.24A9 9 0 0 1 12 4c6.5 0 10 8 10 8a13 13 0 0 1-1.7 2.7" />
      <path d="M6.6 6.6C3.6 8.3 2 12 2 12s3.5 7 10 7a9 9 0 0 0 4.4-1.1" />
      <path d="m2 2 20 20" />
      <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
    </>
  ),
  ear: (
    <>
      <path d="M6 8.5a6 6 0 0 1 12 0c0 3-2.2 4.2-3.4 5.4-.9.9-1.6 1.6-1.6 3.1a2.5 2.5 0 0 1-5 0" />
      <path d="M9 8.5A3 3 0 0 1 14.5 7" />
    </>
  ),
  hand: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8" />
    </>
  ),
  motion: <path d="M3 12h4l2-6 4 12 2-6h4" />,
  settings: (
    <>
      <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3" />
      <path d="M1 14h6M9 8h6M17 16h6" />
    </>
  ),
  check: <path d="m5 12 5 5L20 7" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  arrowLeft: <path d="M19 12H5M12 19l-7-7 7-7" />,
  arrowRight: <path d="M5 12h14M12 5l7 7-7 7" />,
  chevronRight: <path d="m9 6 6 6-6 6" />,
  chevronLeft: <path d="m15 6-6 6 6 6" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  flip: (
    <>
      <path d="M17 4v5h-5" />
      <path d="M7 20v-5h5" />
      <path d="M19.5 9A8 8 0 0 0 6 5.5M4.5 15A8 8 0 0 0 18 18.5" />
    </>
  ),
  refresh: (
    <>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </>
  ),
  shuffle: (
    <>
      <path d="M3 6h3.5a4 4 0 0 1 3.3 1.8L14.2 16A4 4 0 0 0 17.5 18H21" />
      <path d="M3 18h3.5a4 4 0 0 0 3.3-1.8" />
      <path d="M14.9 8.2A4 4 0 0 1 17.5 6H21" />
      <path d="M18 3l3 3-3 3" />
      <path d="M18 15l3 3-3 3" />
    </>
  ),
  sigma: <path d="M17.5 5H7l5 7-5 7h10.5" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" />
    </>
  ),
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />,
  contrast: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" stroke="none" />
    </>
  ),
  activity: <path d="M3 12h4l2.5-7 5 14 2.5-7H21" />,
  wind: (
    <path d="M3 8h11a2.5 2.5 0 1 0-2.5-2.5M3 12h15a2.5 2.5 0 1 1-2.5 2.5M3 16h9a2.5 2.5 0 1 1-2.5 2.5" />
  ),
  walk: (
    <>
      <circle cx="13" cy="4.5" r="1.6" fill="currentColor" stroke="none" />
      <path d="M11 9l-2 4 2 2 1 5" />
      <path d="M13 9l2 3 3 1" />
      <path d="M11 13l-3 1-1 4" />
    </>
  ),
  logout: (
    <>
      <path d="M9 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3" />
      <path d="M16 17l5-5-5-5" />
      <path d="M21 12H9" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  play: <path d="M7 4v16l13-8z" />,
  pause: <path d="M8 5v14M16 5v14" />,
  logo: (
    <>
      <path d="M12 3 3 8v8l9 5 9-5V8z" />
      <path d="M12 12 3 8M12 12l9-4M12 12v9" />
    </>
  ),
}

export default function Icon({ name, className = 'h-5 w-5', label, filled = false }) {
  const glyph = ICONS[name]
  if (!glyph) return null

  // Duotone entries are { solid, line }; everything else is a bare fragment.
  const duotone = glyph && typeof glyph === 'object' && 'line' in glyph
  const line = duotone ? glyph.line : glyph
  const solid = duotone ? glyph.solid : null

  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': 'true' }

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      focusable="false"
      {...a11y}
    >
      {/* Weighted underlayer. Skipped when `filled` is set - the linework is
          already solid then, so a second fill underneath does nothing. */}
      {solid && !filled && (
        <g fill="currentColor" stroke="none" opacity={SOLID_OPACITY}>
          {solid}
        </g>
      )}
      <g
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      >
        {line}
      </g>
    </svg>
  )
}
