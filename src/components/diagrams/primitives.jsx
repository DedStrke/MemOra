/*
  Shared building blocks for every subject's diagrams.

  Every diagram is inline SVG built from these, rather than an image file,
  for three reasons: it re-colours itself from the theme tokens so it works
  in light, dark, cream and high contrast without four exported PNGs; it
  stays sharp at any size; and the labels are real text, so a screen reader
  and a search engine can both read them.

  The coordinate system is the same everywhere - a 400x300 box with the
  origin at (55, 245) - so curves drawn for one diagram sit correctly in
  any other, and the axis labels never need repositioning per diagram.
*/

import { createContext, useContext } from 'react'

/*
  Per-use annotations for a shared diagram. The same AD/AS component is
  embedded in a dozen places, and what a reader needs pointed out differs
  each time - in one essay it is "price level rises from P₁ to P₂", in
  another "output falls from Y₁ to Y₂". The Diagram wrapper puts the
  caller's list on this context and Figure renders it as a numbered strip
  under the SVG, inside the frame, so it reads as part of the diagram
  rather than as a paragraph beneath it. Components never touch it.
*/
export const AnnotationContext = createContext(null)

export const BOX = { w: 400, h: 300 }
export const O = { x: 55, y: 245 } // origin
export const TOP = 30
export const RIGHT = 370

// Map 0-1 fractions to chart coordinates, so curve definitions read as
// proportions of the plot rather than as magic pixel numbers.
export const px = (fx) => O.x + fx * (RIGHT - O.x)
export const py = (fy) => O.y - fy * (O.y - TOP)

/*
  `xAt` puts the x-axis at a given y coordinate rather than at the foot of
  the plot. Curves that go negative - a cubic, a sine wave - need their axis
  through y = 0; drawing the frame's bottom edge AS WELL leaves two
  horizontal lines and the reader cannot tell which one is y = 0.
*/
export function Axes({ xLabel, yLabel, xAt }) {
  const axisY = xAt ?? O.y
  return (
    <g>
      <line x1={O.x} y1={TOP} x2={O.x} y2={O.y} stroke="var(--fg)" strokeWidth="1.5" />
      <line x1={O.x} y1={axisY} x2={RIGHT} y2={axisY} stroke="var(--fg)" strokeWidth="1.5" />
      <text x={O.x - 8} y={axisY + 14} textAnchor="middle" className="dgm-axis">
        0
      </text>
      <text x={RIGHT} y={axisY + 20} textAnchor="end" className="dgm-axis">
        {xLabel}
      </text>
      <text
        x={0}
        y={0}
        transform={`translate(${O.x - 34} ${(TOP + O.y) / 2}) rotate(-90)`}
        textAnchor="middle"
        className="dgm-axis"
      >
        {yLabel}
      </text>
    </g>
  )
}

// A curve plus its label, placed at the end of the line by default.
export function Curve({ d, colour = 'var(--brand-strong)', label, lx, ly, dashed, width = 2.2 }) {
  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke={colour}
        strokeWidth={width}
        strokeDasharray={dashed ? '5 4' : undefined}
        strokeLinecap="round"
      />
      {label && (
        <text x={lx} y={ly} className="dgm-label" fill={colour}>
          {label}
        </text>
      )}
    </g>
  )
}

// Dotted lines from a point to both axes, with the axis values marked.
export function Guides({ x, y, xText, yText }) {
  return (
    <g>
      <line x1={O.x} y1={y} x2={x} y2={y} stroke="var(--muted)" strokeWidth="1" strokeDasharray="3 3" />
      <line x1={x} y1={y} x2={x} y2={O.y} stroke="var(--muted)" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx={x} cy={y} r="3.2" fill="var(--fg)" />
      {yText && (
        <text x={O.x - 6} y={y + 4} textAnchor="end" className="dgm-value">
          {yText}
        </text>
      )}
      {xText && (
        <text x={x} y={O.y + 15} textAnchor="middle" className="dgm-value">
          {xText}
        </text>
      )}
    </g>
  )
}

export function Shade({ points, fill = 'var(--r2-shaky)', opacity = 0.28 }) {
  return <polygon points={points} fill={fill} opacity={opacity} />
}

export function Note({ x, y, children, anchor = 'middle', colour = 'var(--muted)' }) {
  return (
    <text x={x} y={y} textAnchor={anchor} className="dgm-note" fill={colour}>
      {children}
    </text>
  )
}

// Arrow showing a curve shifting, drawn between two points.
export function ShiftArrow({ x1, y1, x2, y2, colour = 'var(--fg)' }) {
  const id = `arw-${Math.round(x1)}-${Math.round(y1)}-${Math.round(x2)}-${Math.round(y2)}`
  return (
    <g>
      <defs>
        <marker id={id} markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 z" fill={colour} />
        </marker>
      </defs>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={colour}
        strokeWidth="1.6"
        markerEnd={`url(#${id})`}
      />
    </g>
  )
}

/* ---------------------------------------------------------------------
   Free-form pieces. The Axes/Curve set above assumes a plotted graph,
   which fits Economics and most of Pure Maths - but a force diagram, a
   Venn diagram, a logic gate and a linked list are none of them, so these
   draw in raw viewBox coordinates instead of 0-1 plot fractions.
   --------------------------------------------------------------------- */

/*
  A labelled arrow. Force diagrams live on this: an arrow's LENGTH carries
  meaning (a bigger force is a longer arrow) and its label sits off the
  head, clear of the line.
*/
export function Arrow({ x1, y1, x2, y2, colour = 'var(--fg)', label, lx, ly, width = 2, dashed }) {
  const id = `ar${Math.round(x1 * 7 + y1 * 13 + x2 * 3 + y2)}`
  return (
    <g>
      <defs>
        <marker id={id} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 z" fill={colour} />
        </marker>
      </defs>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={colour}
        strokeWidth={width}
        strokeDasharray={dashed ? '4 3' : undefined}
        markerEnd={`url(#${id})`}
      />
      {label && (
        <text x={lx ?? x2} y={ly ?? y2} className="dgm-label" fill={colour} textAnchor="middle">
          {label}
        </text>
      )}
    </g>
  )
}

/* A rounded block with centred text - CS architecture and flow diagrams. */
export function Box({ x, y, w, h, label, sub, colour = 'var(--brand-strong)', fill }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="8"
        fill={fill || 'color-mix(in srgb, var(--brand) 12%, transparent)'}
        stroke={colour}
        strokeWidth="1.6"
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + (sub ? -3 : 4)}
        textAnchor="middle"
        className="dgm-label"
        fill="var(--fg)"
      >
        {label}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 12} textAnchor="middle" className="dgm-note" fill="var(--muted)">
          {sub}
        </text>
      )}
    </g>
  )
}

/* A set circle for Venn diagrams. */
export function SetCircle({ cx, cy, r, colour, label, lx, ly }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={colour} fillOpacity="0.16" stroke={colour} strokeWidth="2" />
      {label && (
        <text x={lx ?? cx} y={ly ?? cy - r - 6} textAnchor="middle" className="dgm-label" fill={colour}>
          {label}
        </text>
      )}
    </g>
  )
}

/* Plain text at raw coordinates, for free-form diagrams. */
export function Text({ x, y, children, anchor = 'middle', colour = 'var(--fg)', size = 'label' }) {
  return (
    <text x={x} y={y} textAnchor={anchor} className={size === 'note' ? 'dgm-note' : 'dgm-label'} fill={colour}>
      {children}
    </text>
  )
}

/* A plain line, for triangles, rods, planes and connectors. */
export function Seg({ x1, y1, x2, y2, colour = 'var(--fg)', width = 2, dashed }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={colour}
      strokeWidth={width}
      strokeDasharray={dashed ? '4 3' : undefined}
      strokeLinecap="round"
    />
  )
}

/* A small filled dot - a particle, a node, a plotted point. */
export function Dot({ x, y, r = 4, colour = 'var(--fg)', label, dx = 0, dy = -8 }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={colour} />
      {label && (
        <text x={x + dx} y={y + dy} textAnchor="middle" className="dgm-note" fill={colour}>
          {label}
        </text>
      )}
    </g>
  )
}

/*
  Wrapper for every diagram.

  role="img" with a <title> and <desc> means the whole thing is announced
  as a single labelled image rather than as a stream of loose numbers -
  which is what a screen reader does with bare SVG text nodes. The caption
  below is visible to everyone, because a diagram in an exam context needs
  to say what it shows even when you can see it.
*/
export function Figure({ title, desc, caption, children }) {
  const titleId = `t-${title.replace(/\W+/g, '-').toLowerCase()}`
  const descId = `${titleId}-d`
  const annotations = useContext(AnnotationContext)
  return (
    <figure className="dgm-figure">
      <svg
        viewBox={`0 0 ${BOX.w} ${BOX.h}`}
        role="img"
        aria-labelledby={`${titleId} ${descId}`}
        className="dgm-svg"
      >
        <title id={titleId}>{title}</title>
        <desc id={descId}>{desc}</desc>
        {children}
      </svg>
      {annotations?.length > 0 && (
        <ol className="dgm-annotations" aria-label="Reading the diagram">
          {annotations.map((a, i) => (
            <li key={i}>
              <span className="dgm-annotation-n">{i + 1}</span>
              <span>{a}</span>
            </li>
          ))}
        </ol>
      )}
      <figcaption className="dgm-caption">
        <span className="dgm-caption-eyebrow">WHAT THIS DIAGRAM SHOWS</span>
        <strong>{title}</strong>
        {caption}
      </figcaption>
    </figure>
  )
}
