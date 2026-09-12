import {
  Axes, Curve, Note, Figure, Arrow, Seg, Dot, Text, SetCircle, Box,
  px, py, O, TOP, RIGHT,
} from './primitives'

/*
  Edexcel A-level Maths (9MA0) diagrams - Pure, Statistics and Mechanics.

  Mechanics and Statistics are where this matters most: a force diagram or
  a Venn diagram IS the method, and a note that describes one in prose asks
  the student to hold a picture in their head that the exam will make them
  draw. Pure is included where the shape carries the reasoning (discriminant
  cases, transformations, areas under curves, iteration staircases).

  Conventions held across the set so they read as one family:
    - the curve/function under discussion is brand blue
    - a second, compared curve is green
    - anything shaded (an area, a critical region, a welfare-style loss) is
      amber
    - forces are arrows whose LENGTH is meaningful, labelled at the head
    - dashed = a construction line, a guide, or "the other case"
*/

const F = 'var(--brand-strong)'   // the function / primary object
const G = '#2e9e6b'               // a compared function
const A = '#e08a2c'               // shaded region / highlighted quantity
const R = 'var(--r2-shaky)'       // rejected / critical / warning

/* ============================================================== PURE */

function Discriminant() {
  return (
    <Figure
      title="The discriminant"
      desc="Three parabolas on the same axes: one crossing the x-axis twice, one touching it once, and one not reaching it, corresponding to a positive, zero and negative discriminant."
      caption="b² − 4ac > 0 gives two distinct real roots (the curve crosses twice); = 0 gives one repeated root (it touches); < 0 gives no real roots (it never meets the axis). 'Show that the equation has real roots' means prove b² − 4ac ≥ 0."
    >
      {/* A quadratic Bezier's vertex sits at (start + 2*ctrl + end)/4, so the
          control y is chosen to put each vertex exactly where the maths
          requires relative to the axis at 0.45: below it (crosses twice),
          on it (touches once), above it (never meets). Eyeballing these
          previously left the Δ < 0 curve dipping through the axis, which
          is the one thing the diagram exists to rule out. */}
      <Axes xLabel="x" yLabel="y" />
      <Seg x1={O.x} y1={py(0.45)} x2={RIGHT} y2={py(0.45)} colour="var(--fg)" width={1.5} />
      <Curve d={`M ${px(0.04)} ${py(0.9)} Q ${px(0.2)} ${py(-0.4)} ${px(0.36)} ${py(0.9)}`} colour={F} label="b² − 4ac > 0" lx={px(0.13)} ly={py(0.98)} />
      <Curve d={`M ${px(0.4)} ${py(0.95)} Q ${px(0.56)} ${py(-0.05)} ${px(0.72)} ${py(0.95)}`} colour={G} label="b² − 4ac = 0" lx={px(0.53)} ly={py(1.02)} />
      <Curve d={`M ${px(0.76)} ${py(1.0)} Q ${px(0.88)} ${py(0.24)} ${px(1.0)} ${py(1.0)}`} colour={R} label="b² − 4ac < 0" lx={px(0.86)} ly={py(1.06)} />
      <Note x={O.x - 10} y={py(0.45) + 4} anchor="end">0</Note>
      <Note x={px(0.2)} y={O.y + 15} colour={F}>2 roots</Note>
      <Note x={px(0.56)} y={O.y + 15} colour={G}>1 repeated root</Note>
      <Note x={px(0.83)} y={O.y + 15} colour={R}>no real roots</Note>
    </Figure>
  )
}

function Transformations() {
  return (
    <Figure
      title="Graph transformations"
      desc="A base curve with three transformed copies: translated up, translated left, and stretched vertically."
      caption="y = f(x) + a moves UP by a. y = f(x + a) moves LEFT by a - inside the bracket, opposite direction, which is the one people get wrong. y = af(x) stretches vertically by a; y = f(ax) stretches horizontally by 1/a."
    >
      <Axes xLabel="x" yLabel="y" />
      <Seg x1={O.x} y1={py(0.35)} x2={RIGHT} y2={py(0.35)} colour="var(--fg)" width={1.5} />
      <Curve d={`M ${px(0.3)} ${py(0.85)} Q ${px(0.48)} ${py(0.0)} ${px(0.66)} ${py(0.85)}`} colour={F} label="y = f(x)" lx={px(0.68)} ly={py(0.88)} />
      <Curve d={`M ${px(0.3)} ${py(1.1)} Q ${px(0.48)} ${py(0.25)} ${px(0.66)} ${py(1.1)}`} colour={G} dashed label="f(x) + a" lx={px(0.3)} ly={py(1.13)} />
      <Curve d={`M ${px(0.05)} ${py(0.85)} Q ${px(0.23)} ${py(0.0)} ${px(0.41)} ${py(0.85)}`} colour={A} dashed label="f(x + a)" lx={px(0.06)} ly={py(0.9)} />
      <Arrow x1={px(0.48)} y1={py(0.06)} x2={px(0.48)} y2={py(0.22)} colour={G} />
      <Arrow x1={px(0.44)} y1={py(0.04)} x2={px(0.27)} y2={py(0.04)} colour={A} />
    </Figure>
  )
}

function ModulusGraph() {
  return (
    <Figure
      title="y = |f(x)| and y = f(|x|)"
      desc="A line reflected in the x-axis where it would be negative, next to a curve reflected in the y-axis."
      caption="|f(x)| reflects anything BELOW the x-axis up above it. f(|x|) keeps the right-hand side and reflects it in the y-axis, discarding the original left. They are different graphs - check which one the question asks for."
    >
      {/*
        Two panels, because the title names two different graphs and the
        single V drawn before showed only the first. The dashed line in each
        is the part of y = f(x) that the transformation replaces - which is
        the difference between them: |f(x)| flips what is below the x-axis,
        f(|x|) throws the left away and mirrors the right.
      */}
      {[
        { ox: 104, label: 'y = |f(x)|', note: 'reflect what is BELOW the x-axis' },
        { ox: 292, label: 'y = f(|x|)', note: 'mirror the RIGHT half in the y-axis' },
      ].map((p, i) => (
        <g key={p.label}>
          <Seg x1={p.ox - 74} y1={168} x2={p.ox + 76} y2={168} colour="var(--fg)" width={1.4} />
          <Seg x1={p.ox} y1={64} x2={p.ox} y2={212} colour="var(--fg)" width={1.4} />
          <Text x={p.ox} y={52} colour={F}>{p.label}</Text>
          <Text x={p.ox} y={236} colour="var(--muted)" size="note">{p.note}</Text>
          {i === 0 ? (
            <>
              {/* f(x) falls through the axis; |f(x)| turns back up from it. */}
              <Seg x1={p.ox - 66} y1={86} x2={p.ox + 18} y2={168} colour={F} width={2.2} />
              <Seg x1={p.ox + 18} y1={168} x2={p.ox + 68} y2={119} colour={F} width={2.2} />
              <Seg x1={p.ox + 18} y1={168} x2={p.ox + 68} y2={217} colour="var(--muted)" width={1.3} dashed />
            </>
          ) : (
            <>
              {/* the right half is kept, and copied across the y-axis */}
              <Seg x1={p.ox} y1={152} x2={p.ox + 70} y2={84} colour={F} width={2.2} />
              <Seg x1={p.ox} y1={152} x2={p.ox - 70} y2={84} colour={F} width={2.2} />
              <Seg x1={p.ox} y1={152} x2={p.ox - 70} y2={200} colour="var(--muted)" width={1.3} dashed />
            </>
          )}
          <Text x={p.ox - 8} y={182} anchor="end" colour="var(--muted)" size="note">0</Text>
        </g>
      ))}
      <Note x={200} y={266} colour="var(--muted)">dashed = the part of y = f(x) the transformation replaces</Note>
    </Figure>
  )
}

function InverseFunction() {
  return (
    <Figure
      title="A function and its inverse"
      desc="A curve and its mirror image in the line y = x, showing that the inverse is a reflection."
      caption="f⁻¹ is the reflection of f in the line y = x. So the domain of f⁻¹ is the RANGE of f, and its range is the domain of f - state both, they carry marks."
    >
      <Axes xLabel="x" yLabel="y" />
      <Curve d={`M ${px(0.05)} ${py(0.05)} L ${px(0.95)} ${py(0.95)}`} colour="var(--muted)" dashed label="y = x" lx={px(0.9)} ly={py(1.0)} width={1.4} />
      <Curve d={`M ${px(0.08)} ${py(0.12)} Q ${px(0.3)} ${py(0.75)} ${px(0.6)} ${py(0.92)}`} colour={F} label="f(x)" lx={px(0.5)} ly={py(0.98)} />
      <Curve d={`M ${px(0.12)} ${py(0.08)} Q ${px(0.75)} ${py(0.3)} ${px(0.92)} ${py(0.6)}`} colour={G} label="f⁻¹(x)" lx={px(0.95)} ly={py(0.6)} />
    </Figure>
  )
}

function TrigGraphs() {
  const wave = (fn) => {
    const pts = []
    for (let i = 0; i <= 60; i++) {
      const t = i / 60
      const v = fn(t * 2 * Math.PI)
      pts.push(`${px(0.04 + t * 0.9)} ${py(0.5 + v * 0.4)}`)
    }
    return 'M ' + pts.join(' L ')
  }
  return (
    <Figure
      title="y = sin x and y = cos x"
      desc="One full period of the sine and cosine curves on the same axes, both oscillating between 1 and −1."
      caption="Both have period 360° (2π) and range −1 ≤ y ≤ 1. cos is sin shifted left by 90°. Use the symmetry to find every solution in the range: sin gives θ and 180° − θ; cos gives θ and 360° − θ; tan repeats every 180°."
    >
      <Axes xLabel="x" yLabel="y" />
      <Seg x1={O.x} y1={py(0.5)} x2={RIGHT} y2={py(0.5)} colour="var(--fg)" width={1.5} />
      <Curve d={wave(Math.sin)} colour={F} label="sin x" lx={px(0.3)} ly={py(1.0)} />
      <Curve d={wave(Math.cos)} colour={G} label="cos x" lx={px(0.62)} ly={py(1.0)} />
      <Note x={O.x - 8} y={py(0.9) + 4} anchor="end">1</Note>
      <Note x={O.x - 8} y={py(0.1) + 4} anchor="end">−1</Note>
    </Figure>
  )
}

function CastDiagram() {
  const cx = 212, cy = 138, r = 82
  return (
    <Figure
      title="The CAST diagram"
      desc="A circle divided into four quadrants labelled C, A, S and T, showing which trigonometric ratios are positive in each."
      caption="Reading anticlockwise from the fourth quadrant: Cos, All, Sin, Tan are positive there. Use it to find the second solution once your calculator has given you the first - the most common way marks are lost is stopping at one answer."
    >
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--fg)" strokeWidth="1.6" />
      <Seg x1={cx - r - 18} y1={cy} x2={cx + r + 18} y2={cy} colour="var(--fg)" width={1.4} />
      <Seg x1={cx} y1={cy - r - 18} x2={cx} y2={cy + r + 18} colour="var(--fg)" width={1.4} />
      <Text x={cx + r / 2} y={cy - r / 2 + 6} colour={G}>A</Text>
      <Text x={cx - r / 2} y={cy - r / 2 + 6} colour={F}>S</Text>
      <Text x={cx - r / 2} y={cy + r / 2 + 6} colour={A}>T</Text>
      <Text x={cx + r / 2} y={cy + r / 2 + 6} colour={R}>C</Text>
      <Note x={cx + r / 2} y={cy - r / 2 + 20}>all +</Note>
      <Note x={cx - r / 2} y={cy - r / 2 + 20}>sin +</Note>
      <Note x={cx - r / 2} y={cy + r / 2 + 20}>tan +</Note>
      <Note x={cx + r / 2} y={cy + r / 2 + 20}>cos +</Note>
      <Note x={cx + r + 26} y={cy + 4}>0°</Note>
      <Note x={cx} y={cy - r - 24}>90°</Note>
    </Figure>
  )
}

function Sector() {
  const cx = 110, cy = 210, r = 150
  const a1 = -Math.PI / 2.6, a2 = -Math.PI / 12
  const p1 = { x: cx + r * Math.cos(a1), y: cy + r * Math.sin(a1) }
  const p2 = { x: cx + r * Math.cos(a2), y: cy + r * Math.sin(a2) }
  return (
    <Figure
      title="Arc length, sector and segment"
      desc="A circle sector with radius r and angle θ in radians, with the chord drawn to separate the segment from the triangle."
      caption="Arc s = rθ. Sector area = ½r²θ. Segment = sector − triangle = ½r²(θ − sin θ). All three need θ in RADIANS - a calculator left in degrees is the single biggest source of lost marks here."
    >
      <path d={`M ${cx} ${cy} L ${p1.x} ${p1.y} A ${r} ${r} 0 0 1 ${p2.x} ${p2.y} Z`} fill={A} fillOpacity="0.2" stroke={F} strokeWidth="2" />
      <path d={`M ${p1.x} ${p1.y} A ${r} ${r} 0 0 1 ${p2.x} ${p2.y} L ${p1.x} ${p1.y} Z`} fill={G} fillOpacity="0.28" stroke="none" />
      <Seg x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} colour={G} width={1.8} dashed />
      <Text x={(cx + p1.x) / 2 - 12} y={(cy + p1.y) / 2} colour={F}>r</Text>
      <Text x={(cx + p2.x) / 2} y={(cy + p2.y) / 2 + 16} colour={F}>r</Text>
      <Text x={cx + 44} y={cy - 22} colour="var(--fg)">θ</Text>
      <Note x={340} y={64} anchor="end" colour={G}>segment = ½r²(θ − sin θ)</Note>
      <Note x={340} y={252} anchor="end">arc s = rθ · sector = ½r²θ</Note>
    </Figure>
  )
}

function StationaryPoints() {
  return (
    <Figure
      title="Stationary points and the second derivative"
      desc="A cubic curve with a local maximum and a local minimum marked, each with a horizontal tangent."
      caption="Stationary points are where dy/dx = 0. Classify with the second derivative: d²y/dx² < 0 is a maximum, > 0 is a minimum, = 0 is inconclusive so check the gradient either side. Always give BOTH coordinates - substitute x back to get y."
    >
      {/* Plotted from the real cubic y = x³ − 3x over x ∈ [−2.2, 2.2], so
          the turning points are genuinely at x = ∓1 and the markers land ON
          the curve. Placed by eye against a hand-tuned Bezier, both dots
          floated off it. */}
      <Axes xLabel="x" yLabel="y" />
      {(() => {
        const fx = (x) => px((x + 2.2) / 4.4)
        const fy = (y) => py(0.5 + y / 10)
        const pts = []
        for (let i = 0; i <= 60; i++) {
          const x = -2.2 + (i / 60) * 4.4
          pts.push(`${fx(x)} ${fy(x ** 3 - 3 * x)}`)
        }
        return (
          <g>
            <Curve d={'M ' + pts.join(' L ')} colour={F} />
            <Seg x1={fx(-1.7)} y1={fy(2)} x2={fx(-0.3)} y2={fy(2)} colour={G} width={1.6} dashed />
            <Dot x={fx(-1)} y={fy(2)} colour={G} />
            <Note x={fx(-1)} y={fy(2) - 12} colour={G}>maximum, d²y/dx² &lt; 0</Note>
            <Seg x1={fx(0.3)} y1={fy(-2)} x2={fx(1.7)} y2={fy(-2)} colour={A} width={1.6} dashed />
            <Dot x={fx(1)} y={fy(-2)} colour={A} />
            <Note x={fx(1)} y={fy(-2) + 20} colour={A}>minimum, d²y/dx² &gt; 0</Note>
          </g>
        )
      })()}
    </Figure>
  )
}

function AreaUnderCurve() {
  const curve = `M ${px(0.08)} ${py(0.28)} Q ${px(0.5)} ${py(1.0)} ${px(0.92)} ${py(0.45)}`
  return (
    <Figure
      title="Area under a curve"
      desc="A curve with the region between it and the x-axis shaded between two vertical lines at x = a and x = b."
      caption="Area = ∫ᵇₐ y dx. A region BELOW the x-axis gives a negative integral, so split the integral at each root and add the magnitudes - integrating straight through makes the positive and negative parts cancel."
    >
      <Axes xLabel="x" yLabel="y" />
      <path d={`${curve} L ${px(0.92)} ${py(0)} L ${px(0.08)} ${py(0)} Z`} fill={A} fillOpacity="0.28" />
      <Curve d={curve} colour={F} />
      <Seg x1={px(0.08)} y1={py(0)} x2={px(0.08)} y2={py(0.28)} colour="var(--muted)" width={1.2} dashed />
      <Seg x1={px(0.92)} y1={py(0)} x2={px(0.92)} y2={py(0.45)} colour="var(--muted)" width={1.2} dashed />
      <Note x={px(0.08)} y={O.y + 15}>a</Note>
      <Note x={px(0.92)} y={O.y + 15}>b</Note>
      <Note x={px(0.5)} y={py(0.3)} colour={A}>∫ᵇₐ y dx</Note>
    </Figure>
  )
}

function TrapeziumRule() {
  const f = (t) => 0.25 + 0.7 * Math.sin(t * 2.4)
  const n = 4
  const strips = []
  for (let i = 0; i <= n; i++) {
    const t = i / n
    strips.push({ x: px(0.1 + t * 0.8), y: py(f(t)) })
  }
  const curvePts = []
  for (let i = 0; i <= 40; i++) {
    const t = i / 40
    curvePts.push(`${px(0.1 + t * 0.8)} ${py(f(t))}`)
  }
  return (
    <Figure
      title="The trapezium rule"
      desc="A curve divided into four strips of equal width, each approximated by a trapezium with a straight top edge."
      caption="∫ y dx ≈ h/2 [y₀ + 2(y₁ + … + yₙ₋₁) + yₙ], with h = (b − a)/n. n is the number of STRIPS; there are always n + 1 ordinates. Only the middle ordinates are doubled. Convex curve → overestimate."
    >
      <Axes xLabel="x" yLabel="y" />
      {strips.slice(0, -1).map((s, i) => (
        <polygon
          key={i}
          points={`${s.x},${O.y} ${s.x},${s.y} ${strips[i + 1].x},${strips[i + 1].y} ${strips[i + 1].x},${O.y}`}
          fill={A}
          fillOpacity="0.2"
          stroke={A}
          strokeWidth="1.2"
        />
      ))}
      <Curve d={'M ' + curvePts.join(' L ')} colour={F} />
      {strips.map((s, i) => (
        <Note key={i} x={s.x} y={O.y + 15}>{`y${'₀₁₂₃₄₅₆₇₈₉'[i]}`}</Note>
      ))}
      <Seg x1={strips[0].x} y1={O.y + 28} x2={strips[1].x} y2={O.y + 28} colour={A} width={1.4} />
      <Seg x1={strips[0].x} y1={O.y + 24} x2={strips[0].x} y2={O.y + 32} colour={A} width={1.4} />
      <Seg x1={strips[1].x} y1={O.y + 24} x2={strips[1].x} y2={O.y + 32} colour={A} width={1.4} />
      <Note x={(strips[0].x + strips[1].x) / 2} y={O.y + 44} colour={A}>h = (b − a)/n</Note>
      <Note x={strips[3].x} y={O.y + 44}>n = 4 strips, 5 ordinates</Note>
    </Figure>
  )
}

function IterationStaircase() {
  return (
    <Figure
      title="Convergence of an iteration"
      desc="The line y = x with a curve y = g(x), and a staircase path stepping between them towards their intersection."
      caption="xₙ₊₁ = g(xₙ) is drawn by moving vertically to the curve then horizontally to y = x. Steps closing in from one side make a STAIRCASE; steps spiralling in around the root make a COBWEB. The root is where the two graphs meet."
    >
      <Axes xLabel="x" yLabel="y" />
      <Curve d={`M ${px(0.05)} ${py(0.05)} L ${px(0.95)} ${py(0.95)}`} colour="var(--muted)" dashed label="y = x" lx={px(0.9)} ly={py(1.0)} width={1.4} />
      <Curve d={`M ${px(0.05)} ${py(0.45)} Q ${px(0.5)} ${py(0.72)} ${px(0.95)} ${py(0.8)}`} colour={F} label="y = g(x)" lx={px(0.72)} ly={py(0.72)} />
      <Seg x1={px(0.15)} y1={py(0.15)} x2={px(0.15)} y2={py(0.5)} colour={A} width={1.6} />
      <Seg x1={px(0.15)} y1={py(0.5)} x2={px(0.5)} y2={py(0.5)} colour={A} width={1.6} />
      <Seg x1={px(0.5)} y1={py(0.5)} x2={px(0.5)} y2={py(0.72)} colour={A} width={1.6} />
      <Seg x1={px(0.5)} y1={py(0.72)} x2={px(0.72)} y2={py(0.72)} colour={A} width={1.6} />
      <Note x={px(0.15)} y={O.y + 15}>x₀</Note>
      <Note x={px(0.5)} y={O.y + 15}>x₁</Note>
      <Note x={px(0.72)} y={O.y + 15}>x₂</Note>
    </Figure>
  )
}

function NewtonRaphson() {
  const curve = `M ${px(0.1)} ${py(0.9)} Q ${px(0.5)} ${py(0.1)} ${px(0.92)} ${py(0.62)}`
  return (
    <Figure
      title="The Newton-Raphson method"
      desc="A curve crossing the x-axis, with a tangent drawn at a first approximation meeting the axis nearer the root."
      caption="xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ): follow the tangent down to the x-axis and that is the next approximation. It fails when f′(xₙ) is zero or near zero - a near-horizontal tangent throws the next value far away, which is why a starting point near a turning point breaks it."
    >
      <Axes xLabel="x" yLabel="y" />
      <Seg x1={O.x} y1={py(0.35)} x2={RIGHT} y2={py(0.35)} colour="var(--fg)" width={1.5} />
      <Curve d={curve} colour={F} label="y = f(x)" lx={px(0.8)} ly={py(0.72)} />
      <Dot x={px(0.24)} y={py(0.62)} colour={A} />
      <Seg x1={px(0.12)} y1={py(0.95)} x2={px(0.52)} y2={py(0.35)} colour={A} width={1.8} dashed />
      <Seg x1={px(0.24)} y1={py(0.62)} x2={px(0.24)} y2={py(0.35)} colour="var(--muted)" width={1.2} dashed />
      <Note x={px(0.24)} y={O.y + 15}>xₙ</Note>
      <Note x={px(0.52)} y={O.y + 15}>xₙ₊₁</Note>
      <Note x={px(0.42)} y={py(0.78)} colour={A}>tangent</Note>
    </Figure>
  )
}

function BinomialPascal() {
  const rows = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]]
  return (
    <Figure
      title="Pascal's triangle"
      desc="Six rows of Pascal's triangle, each number the sum of the two above it."
      caption="Row n gives the coefficients of (a + b)ⁿ, and each entry is ⁿCᵣ. Every number is the sum of the two above it. Quicker than the formula for small n; for larger n use the nCr button."
    >
      {rows.map((row, i) =>
        row.map((v, j) => (
          <g key={`${i}-${j}`}>
            <circle cx={200 + (j - row.length / 2 + 0.5) * 46} cy={44 + i * 40} r="15" fill="color-mix(in srgb, var(--brand) 14%, transparent)" stroke={F} strokeWidth="1.3" />
            <text x={200 + (j - row.length / 2 + 0.5) * 46} y={49 + i * 40} textAnchor="middle" className="dgm-label" fill="var(--fg)">{v}</text>
          </g>
        )),
      )}
      {/* Below the last row, not beside it - at 6 rows the widest row
          reaches x≈315, so an end-anchored note at 356 overlapped it. */}
      <Note x={200} y={286}>row n gives the coefficients of (a + b)ⁿ</Note>
    </Figure>
  )
}

function Vectors2D() {
  return (
    <Figure
      title="Vector addition and components"
      desc="Two vectors drawn head to tail with the resultant closing the triangle, and one vector split into horizontal and vertical components."
      caption="Head to tail: a + b is the vector closing the triangle. AB = b − a (endpoint minus start). Magnitude of (a, b) is √(a² + b²); the unit vector is the vector divided by its magnitude."
    >
      <Arrow x1={70} y1={230} x2={190} y2={150} colour={F} label="a" lx={122} ly={182} />
      <Arrow x1={190} y1={150} x2={300} y2={175} colour={G} label="b" lx={248} ly={150} />
      <Arrow x1={70} y1={230} x2={300} y2={175} colour={A} label="a + b" lx={175} ly={228} />
      <Seg x1={70} y1={230} x2={70} y2={100} colour="var(--muted)" width={1.2} dashed />
      <Seg x1={70} y1={100} x2={190} y2={100} colour="var(--muted)" width={1.2} dashed />
      <Note x={330} y={120} anchor="end">|v| = √(a² + b²)</Note>
    </Figure>
  )
}

function ExponentialLog() {
  const expPts = [], lnPts = []
  for (let i = 0; i <= 40; i++) {
    const t = i / 40
    expPts.push(`${px(0.06 + t * 0.5)} ${py(0.08 * Math.exp(t * 2.6))}`)
  }
  for (let i = 1; i <= 40; i++) {
    const t = i / 40
    lnPts.push(`${py(0.08 * Math.exp(t * 2.6))} ${px(0.06 + t * 0.5)}`)
  }
  return (
    <Figure
      title="y = eˣ and y = ln x"
      desc="An exponential growth curve and a logarithm curve, each the reflection of the other in the line y = x."
      caption="eˣ passes through (0, 1) and never reaches zero - the x-axis is an asymptote. ln x is its inverse: it passes through (1, 0), is only defined for x > 0, and the y-axis is its asymptote. Each is the other reflected in y = x."
    >
      <Axes xLabel="x" yLabel="y" />
      <Curve d={`M ${px(0.05)} ${py(0.05)} L ${px(0.9)} ${py(0.9)}`} colour="var(--muted)" dashed width={1.2} label="y = x" lx={px(0.86)} ly={py(0.96)} />
      <Curve d={'M ' + expPts.join(' L ')} colour={F} label="y = eˣ" lx={px(0.5)} ly={py(0.95)} />
      <Curve d={`M ${px(0.1)} ${py(0.02)} Q ${px(0.4)} ${py(0.44)} ${px(0.95)} ${py(0.6)}`} colour={G} label="y = ln x" lx={px(0.8)} ly={py(0.52)} />
      <Dot x={px(0.06)} y={py(0.08)} colour={F} label="(0,1)" dy={-10} />
    </Figure>
  )
}

/* ======================================================== STATISTICS */

function VennTwoSet() {
  return (
    <Figure
      title="Venn diagram for two events"
      desc="Two overlapping circles inside a rectangle, with the four regions labelled: A only, the intersection, B only, and neither."
      caption="Fill the INTERSECTION first, then work outwards - each region must hold the probability of only that combination. P(A ∪ B) = P(A) + P(B) − P(A ∩ B); the subtraction stops the overlap being counted twice. Everything inside the rectangle totals 1."
    >
      <rect x="34" y="40" width="332" height="212" rx="8" fill="none" stroke="var(--fg)" strokeWidth="1.6" />
      <SetCircle cx={158} cy={146} r={80} colour={F} label="A" lx={104} ly={72} />
      <SetCircle cx={242} cy={146} r={80} colour={G} label="B" lx={296} ly={72} />
      <Text x={118} y={152} colour="var(--fg)">A ∩ B′</Text>
      <Text x={200} y={152} colour={A}>A ∩ B</Text>
      <Text x={282} y={152} colour="var(--fg)">A′ ∩ B</Text>
      <Note x={352} y={240} anchor="end">(A ∪ B)′</Note>
      <Note x={44} y={58} anchor="start">ξ</Note>
    </Figure>
  )
}

function TreeDiagram() {
  return (
    <Figure
      title="Tree diagram"
      desc="A two-stage probability tree with branches for two outcomes at each stage, and the products of the branch probabilities at the ends."
      caption="Multiply ALONG the branches, add BETWEEN them. Each set of branches from a point must sum to 1. Without replacement the second-stage probabilities change - that is the step most often missed."
    >
      <Seg x1={60} y1={146} x2={150} y2={86} colour={F} width={1.8} />
      <Seg x1={60} y1={146} x2={150} y2={206} colour={F} width={1.8} />
      <Note x={100} y={104} colour={F}>P(A)</Note>
      <Note x={100} y={196} colour={F}>P(A′)</Note>
      <Seg x1={150} y1={86} x2={250} y2={56} colour={G} width={1.8} />
      <Seg x1={150} y1={86} x2={250} y2={116} colour={G} width={1.8} />
      <Seg x1={150} y1={206} x2={250} y2={176} colour={G} width={1.8} />
      <Seg x1={150} y1={206} x2={250} y2={236} colour={G} width={1.8} />
      <Dot x={60} y={146} r={3.5} />
      <Dot x={150} y={86} r={3.5} colour={F} />
      <Dot x={150} y={206} r={3.5} colour={F} />
      <Note x={300} y={60} anchor="middle" colour={A}>P(A)×P(B|A)</Note>
      <Note x={300} y={120} anchor="middle">P(A)×P(B′|A)</Note>
      <Note x={300} y={180} anchor="middle">P(A′)×P(B|A′)</Note>
      <Note x={300} y={240} anchor="middle">P(A′)×P(B′|A′)</Note>
    </Figure>
  )
}

function Histogram() {
  const bars = [
    { x: 0.04, w: 0.1, h: 0.3 },
    { x: 0.14, w: 0.1, h: 0.62 },
    { x: 0.24, w: 0.2, h: 0.9 },
    { x: 0.44, w: 0.2, h: 0.5 },
    { x: 0.64, w: 0.32, h: 0.22 },
  ]
  return (
    <Figure
      title="Histogram with unequal class widths"
      desc="A histogram whose bars have different widths, with frequency density on the vertical axis so that area represents frequency."
      caption="Frequency density = frequency ÷ class width. AREA is proportional to frequency, not height - which is the whole reason a histogram is not a bar chart. Plotting raw frequency with unequal widths is the classic error."
    >
      <Axes xLabel="Value" yLabel="Frequency density" />
      {bars.map((b, i) => (
        <rect
          key={i}
          x={px(b.x)}
          y={py(b.h)}
          width={px(b.x + b.w) - px(b.x)}
          height={O.y - py(b.h)}
          fill={F}
          fillOpacity="0.28"
          stroke={F}
          strokeWidth="1.5"
        />
      ))}
      <Note x={px(0.8)} y={py(0.4)} colour={A}>area = frequency</Note>
    </Figure>
  )
}

function BoxPlot() {
  const y = 150
  return (
    <Figure
      title="Box plot and outliers"
      desc="A box plot showing minimum, lower quartile, median, upper quartile and maximum, with an outlier marked beyond the whisker."
      caption="The box spans Q₁ to Q₃ (the interquartile range), with the median inside it. An outlier is usually more than 1.5 × IQR beyond Q₁ or Q₃ - check which definition the question gives. Only remove an outlier if you have reason to think it is an error."
    >
      <Seg x1={70} y1={y} x2={120} y2={y} colour="var(--fg)" width={1.6} />
      <Seg x1={70} y1={y - 16} x2={70} y2={y + 16} colour="var(--fg)" width={2} />
      <rect x={120} y={y - 32} width={140} height={64} fill={F} fillOpacity="0.22" stroke={F} strokeWidth="2" />
      <Seg x1={186} y1={y - 32} x2={186} y2={y + 32} colour={F} width={2.4} />
      <Seg x1={260} y1={y} x2={310} y2={y} colour="var(--fg)" width={1.6} />
      <Seg x1={310} y1={y - 16} x2={310} y2={y + 16} colour="var(--fg)" width={2} />
      <circle cx={352} cy={y} r="5" fill="none" stroke={R} strokeWidth="2" />
      <Note x={70} y={y + 34}>min</Note>
      <Note x={120} y={y + 50}>Q₁</Note>
      <Note x={186} y={y - 42}>median</Note>
      <Note x={260} y={y + 50}>Q₃</Note>
      <Note x={310} y={y + 34}>max</Note>
      <Note x={352} y={y + 24} colour={R}>outlier</Note>
      <Seg x1={120} y1={y + 62} x2={260} y2={y + 62} colour={A} width={1.6} />
      <Note x={190} y={y + 78} colour={A}>IQR = Q₃ − Q₁</Note>
      <Note x={200} y={y + 96}>an outlier is beyond Q₁ − 1.5×IQR or Q₃ + 1.5×IQR</Note>
    </Figure>
  )
}

function NormalDistribution() {
  const pts = []
  for (let i = 0; i <= 60; i++) {
    const t = i / 60
    const z = (t - 0.5) * 6
    pts.push(`${px(0.04 + t * 0.9)} ${py(0.06 + 0.82 * Math.exp(-0.5 * z * z))}`)
  }
  const shade = []
  for (let i = 0; i <= 60; i++) {
    const t = i / 60
    if (t > 0.78) break
    const z = (t - 0.5) * 6
    shade.push(`${px(0.04 + t * 0.9)},${py(0.06 + 0.82 * Math.exp(-0.5 * z * z))}`)
  }
  return (
    <Figure
      title="The normal distribution"
      desc="A symmetric bell curve centred on the mean, with the area to the left of a value shaded to represent a probability."
      caption="X ~ N(μ, σ²) - the second parameter is the VARIANCE, so σ = √it. Symmetric about μ, total area 1. Shaded area = P(X < a). Because it is continuous, P(X = a) = 0 and P(X < a) = P(X ≤ a), so there is no ±0.5 unless you are approximating a binomial."
    >
      <Axes xLabel="x" yLabel="" />
      <polygon points={`${px(0.04)},${O.y} ${shade.join(' ')} ${px(0.742)},${O.y}`} fill={A} fillOpacity="0.3" />
      <Curve d={'M ' + pts.join(' L ')} colour={F} />
      <Seg x1={px(0.49)} y1={O.y} x2={px(0.49)} y2={py(0.88)} colour="var(--muted)" width={1.3} dashed />
      <Seg x1={px(0.34)} y1={O.y} x2={px(0.34)} y2={py(0.55)} colour="var(--muted)" width={1} dashed />
      <Seg x1={px(0.64)} y1={O.y} x2={px(0.64)} y2={py(0.55)} colour="var(--muted)" width={1} dashed />
      <Note x={px(0.49)} y={O.y + 15}>μ</Note>
      <Note x={px(0.34)} y={O.y + 15}>μ − σ</Note>
      <Note x={px(0.64)} y={O.y + 15}>μ + σ</Note>
      <Note x={px(0.742)} y={O.y + 15}>a</Note>
      <Note x={px(0.22)} y={py(0.3)} colour={A}>P(X &lt; a)</Note>
      <Note x={px(0.78)} y={py(0.72)} colour={F}>X ~ N(μ, σ²)</Note>
    </Figure>
  )
}

function HypothesisRegions() {
  const pts = []
  for (let i = 0; i <= 60; i++) {
    const t = i / 60
    const z = (t - 0.5) * 6
    pts.push(`${px(0.04 + t * 0.9)} ${py(0.06 + 0.82 * Math.exp(-0.5 * z * z))}`)
  }
  return (
    <Figure
      title="Critical regions: one-tailed and two-tailed"
      desc="A distribution with shaded tails, showing a single 5 per cent tail for a one-tailed test and two 2.5 per cent tails for a two-tailed test."
      caption="A one-tailed test puts the whole significance level in ONE tail; a two-tailed test splits it, 2.5% each at the 5% level. A statistic inside a shaded region means REJECT H₀; outside it means there is insufficient evidence to reject H₀ - never write 'accept H₀'. Decide one- or two-tailed from the wording first: 'has it changed?' is two-tailed, 'has it increased?' is one-tailed."
    >
      <Axes xLabel="Test statistic" yLabel="" />
      <Curve d={'M ' + pts.join(' L ')} colour={F} />
      <rect x={px(0.82)} y={TOP} width={px(0.94) - px(0.82)} height={O.y - TOP} fill={R} fillOpacity="0.25" />
      <rect x={px(0.04)} y={TOP} width={px(0.16) - px(0.04)} height={O.y - TOP} fill={R} fillOpacity="0.25" />
      <Note x={px(0.88)} y={py(0.62)} colour={R}>2.5%</Note>
      <Note x={px(0.1)} y={py(0.62)} colour={R}>2.5%</Note>
      <Note x={px(0.88)} y={py(0.5)} colour={R}>reject H₀</Note>
      <Note x={px(0.1)} y={py(0.5)} colour={R}>reject H₀</Note>
      {/* "Accept H₀" is not a conclusion the specification allows: a test
          that lands outside the critical region has failed to find evidence,
          which is not the same as evidence of no effect. */}
      <Note x={px(0.49)} y={py(0.38)}>do not reject H₀</Note>
      <Note x={px(0.49)} y={py(0.26)}>critical regions shaded</Note>
    </Figure>
  )
}

function ScatterRegression() {
  const pts = [
    [0.1, 0.2], [0.18, 0.3], [0.26, 0.26], [0.34, 0.42], [0.42, 0.46],
    [0.5, 0.44], [0.58, 0.6], [0.66, 0.58], [0.74, 0.72], [0.84, 0.8],
  ]
  return (
    <Figure
      title="Scatter diagram with a regression line"
      desc="Plotted points showing positive correlation, with a least-squares line of best fit drawn through them."
      caption="The regression line of y on x minimises the vertical distances, so it predicts y FROM x and only in that direction. Predicting inside the data range is interpolation (reasonable); outside it is extrapolation (unreliable - say so). Correlation is not causation."
    >
      <Axes xLabel="x" yLabel="y" />
      {pts.map(([a, b], i) => (
        <Dot key={i} x={px(a)} y={py(b)} r={3.6} colour={F} />
      ))}
      <Curve d={`M ${px(0.06)} ${py(0.19)} L ${px(0.9)} ${py(0.83)}`} colour={A} label="y = a + bx" lx={px(0.66)} ly={py(0.92)} />
    </Figure>
  )
}

function BinomialBars() {
  const bars = [0.02, 0.09, 0.2, 0.27, 0.23, 0.13, 0.05, 0.01]
  return (
    <Figure
      title="The binomial distribution"
      desc="A bar chart of binomial probabilities against the number of successes, peaking near the expected value."
      caption="X ~ B(n, p) needs all four conditions: fixed n, two outcomes, independent trials, constant p. Because X takes whole values only, P(X < x) = P(X ≤ x − 1) exactly - the off-by-one when converting between <, ≤, > and ≥ is where marks go."
    >
      <Axes xLabel="Number of successes, r" yLabel="P(X = r)" />
      <Note x={px(0.26)} y={py(0.88)} colour={F}>X ~ B(n, p)</Note>
      <Note x={px(0.26)} y={py(0.78)}>E(X) = np</Note>
      <Note x={px(0.26)} y={py(0.68)}>Var(X) = np(1 − p)</Note>
      {bars.map((h, i) => {
        const w = (px(0.92) - px(0.08)) / bars.length
        return (
          <rect
            key={i}
            x={px(0.08) + i * w + 3}
            y={py(h * 3)}
            width={w - 6}
            height={O.y - py(h * 3)}
            fill={F}
            fillOpacity="0.32"
            stroke={F}
            strokeWidth="1.4"
          />
        )
      })}
    </Figure>
  )
}

/* ========================================================= MECHANICS */

function VelocityTimeGraph() {
  return (
    <Figure
      title="Velocity-time graph"
      desc="A velocity-time graph rising, then flat, then falling to zero, with the area beneath it shaded."
      caption="GRADIENT is acceleration; AREA under the graph is displacement. Split the shape into triangles and trapezia and add them. A section below the time axis is motion in the opposite direction, so it counts as negative displacement but positive distance."
    >
      <Axes xLabel="Time (s)" yLabel="Velocity (m s⁻¹)" />
      <polygon
        points={`${px(0.06)},${O.y} ${px(0.06)},${py(0)} ${px(0.32)},${py(0.72)} ${px(0.62)},${py(0.72)} ${px(0.92)},${py(0)}`}
        fill={A}
        fillOpacity="0.24"
      />
      <Curve d={`M ${px(0.06)} ${py(0)} L ${px(0.32)} ${py(0.72)} L ${px(0.62)} ${py(0.72)} L ${px(0.92)} ${py(0)}`} colour={F} />
      <Note x={px(0.2)} y={py(0.5)} colour={G}>gradient = a</Note>
      <Note x={px(0.47)} y={py(0.3)} colour={A}>area = displacement</Note>
      <Note x={px(0.47)} y={py(0.8)}>constant velocity</Note>
    </Figure>
  )
}

function ForcesOnSlope() {
  const ax = 70, ay = 235, bx = 330, by = 235, tx = 330, ty = 105
  const pxp = 214, pyp = 170
  return (
    <Figure
      title="Forces on a particle on a rough inclined plane"
      desc="A block on a slope inclined at angle α, with arrows for weight acting vertically down, the normal reaction perpendicular to the slope, and friction acting up the slope."
      caption="Resolve PERPENDICULAR and PARALLEL to the slope, not horizontally and vertically. Perpendicular: R = mg cos α - not mg, which is the most common error in all of Mechanics. Parallel: the component of weight down the slope is mg sin α, opposed by friction F ≤ μR."
    >
      <Seg x1={ax} y1={ay} x2={bx} y2={by} colour="var(--fg)" width={1.6} />
      <Seg x1={ax} y1={ay} x2={tx} y2={ty} colour="var(--fg)" width={2.2} />
      <Seg x1={tx} y1={ty} x2={bx} y2={by} colour="var(--fg)" width={1.4} dashed />
      <path d={`M ${ax + 46} ${ay} A 46 46 0 0 0 ${ax + 44} ${ay - 22}`} fill="none" stroke="var(--muted)" strokeWidth="1.3" />
      <Text x={ax + 58} y={ay - 8} colour="var(--fg)" size="note">α</Text>
      <rect x={pxp - 17} y={pyp - 14} width="34" height="26" rx="4" transform={`rotate(-26.6 ${pxp} ${pyp})`} fill="color-mix(in srgb, var(--brand) 22%, transparent)" stroke={F} strokeWidth="1.6" />
      <Arrow x1={pxp} y1={pyp} x2={pxp} y2={pyp + 62} colour={R} label="mg" lx={pxp + 16} ly={pyp + 56} />
      <Arrow x1={pxp} y1={pyp} x2={pxp - 30} y2={pyp - 60} colour={G} label="R" lx={pxp - 42} ly={pyp - 58} />
      <Arrow x1={pxp} y1={pyp} x2={pxp - 62} y2={pyp + 31} colour={A} label="F" lx={pxp - 66} ly={pyp + 46} />
      <Note x={300} y={62} anchor="end">R = mg cos α</Note>
      <Note x={300} y={78} anchor="end">down-slope = mg sin α</Note>
    </Figure>
  )
}

function ConnectedParticles() {
  return (
    <Figure
      title="Connected particles over a pulley"
      desc="Two masses hanging either side of a smooth pulley, joined by an inextensible string, with tension arrows on both sides and weights acting downwards."
      caption="A smooth pulley and inextensible string mean the TENSION is the same on both sides and the ACCELERATION has the same magnitude for both. Write F = ma separately for each particle, taking each one's own direction of motion as positive - adding the equations eliminates T, subtracting them eliminates a."
    >
      <circle cx="200" cy="62" r="22" fill="none" stroke="var(--fg)" strokeWidth="2.2" />
      <Dot x={200} y={62} r={3} />
      <Seg x1={158} y1={62} x2={158} y2={172} colour="var(--fg)" width={1.6} />
      <Seg x1={242} y1={62} x2={242} y2={124} colour="var(--fg)" width={1.6} />
      <rect x="130" y="172" width="56" height="40" rx="5" fill="color-mix(in srgb, var(--brand) 20%, transparent)" stroke={F} strokeWidth="1.6" />
      <Text x={158} y={197} colour="var(--fg)">m₁</Text>
      <rect x="214" y="124" width="56" height="40" rx="5" fill="color-mix(in srgb, var(--brand) 20%, transparent)" stroke={F} strokeWidth="1.6" />
      <Text x={242} y={149} colour="var(--fg)">m₂</Text>
      <Arrow x1={158} y1={212} x2={158} y2={256} colour={R} label="m₁g" lx={128} ly={252} />
      <Arrow x1={242} y1={164} x2={242} y2={208} colour={R} label="m₂g" lx={274} ly={204} />
      <Arrow x1={158} y1={168} x2={158} y2={122} colour={G} label="T" lx={138} ly={118} />
      <Arrow x1={242} y1={120} x2={242} y2={92} colour={G} label="T" lx={264} ly={94} />
      <Note x={200} y={284}>smooth pulley: same T, same |a|</Note>
    </Figure>
  )
}

function ProjectilePath() {
  const pts = []
  for (let i = 0; i <= 40; i++) {
    const t = i / 40
    pts.push(`${px(0.06 + t * 0.86)} ${py(0.06 + 3.4 * t * (1 - t) * 0.8)}`)
  }
  return (
    <Figure
      title="Projectile motion"
      desc="A parabolic trajectory from launch to landing, with the initial velocity split into horizontal and vertical components and the greatest height marked."
      caption="Split into components and treat them separately: horizontally u cos θ with ZERO acceleration, vertically u sin θ with a = −g. Time is the only link between them. At the highest point the VERTICAL velocity is zero - the horizontal is unchanged, so the speed is not zero."
    >
      <Axes xLabel="Horizontal distance" yLabel="Height" />
      <Curve d={'M ' + pts.join(' L ')} colour={F} />
      {/* The component triangle is drawn away from the launch point rather
          than on top of it: all three arrows sharing an origin put "u",
          "u cos θ" and "u sin θ" on top of one another and of the curve. */}
      <Arrow x1={px(0.1)} y1={py(0.86)} x2={px(0.3)} y2={py(0.86)} colour={G} label="u cos θ" lx={px(0.2)} ly={py(0.92)} />
      <Arrow x1={px(0.1)} y1={py(0.86)} x2={px(0.1)} y2={py(1.04)} colour={A} label="u sin θ" lx={px(0.02)} ly={py(1.1)} />
      <Arrow x1={px(0.1)} y1={py(0.86)} x2={px(0.3)} y2={py(1.04)} colour={F} label="u" lx={px(0.24)} ly={py(1.02)} />
      <Note x={px(0.2)} y={py(0.74)}>components at launch</Note>
      <Seg x1={px(0.49)} y1={py(0.74)} x2={px(0.49)} y2={py(0.06)} colour="var(--muted)" width={1.2} dashed />
      <Dot x={px(0.49)} y={py(0.74)} colour={R} />
      <Note x={px(0.62)} y={py(0.8)} anchor="start" colour={R}>v_vertical = 0</Note>
    </Figure>
  )
}

function MomentsRod() {
  const y = 150
  return (
    <Figure
      title="Moments on a rod"
      desc="A uniform rod resting on two supports, with reaction forces up at each support and the weight acting down at the centre."
      caption="Moment = force × PERPENDICULAR distance from the pivot. In equilibrium: resultant force = 0 AND total moment about any point = 0. Take moments about a support to eliminate its reaction. A uniform rod has its weight at the midpoint; a non-uniform one does not."
    >
      <rect x="60" y={y - 8} width="280" height="16" rx="4" fill="color-mix(in srgb, var(--brand) 18%, transparent)" stroke={F} strokeWidth="1.8" />
      <path d={`M 110 ${y + 8} l -12 26 l 24 0 z`} fill="var(--muted)" />
      <path d={`M 290 ${y + 8} l -12 26 l 24 0 z`} fill="var(--muted)" />
      <Arrow x1={110} y1={y - 10} x2={110} y2={y - 66} colour={G} label="R₁" lx={110} ly={y - 74} />
      <Arrow x1={290} y1={y - 10} x2={290} y2={y - 66} colour={G} label="R₂" lx={290} ly={y - 74} />
      <Arrow x1={200} y1={y + 10} x2={200} y2={y + 70} colour={R} label="W" lx={216} ly={y + 66} />
      <Seg x1={200} y1={y - 8} x2={200} y2={y + 8} colour={R} width={1.4} dashed />
      <Note x={155} y={y + 46}>a</Note>
      <Note x={245} y={y + 46}>b</Note>
      <Note x={340} y={250} anchor="end">ΣM = 0 and ΣF = 0</Note>
    </Figure>
  )
}

function LadderProblem() {
  return (
    <Figure
      title="Ladder against a smooth wall"
      desc="A ladder leaning against a vertical wall on rough ground, with a normal reaction from the wall, a normal reaction and friction from the ground, and the weight at the midpoint."
      caption="A SMOOTH wall gives only a normal reaction, perpendicular to it - no friction there. The ROUGH floor gives both a normal reaction and friction. The ladder slips when friction reaches μR. Take moments about the foot to eliminate two unknowns at once."
    >
      <Seg x1={92} y1={40} x2={92} y2={250} colour="var(--fg)" width={2.4} />
      <Seg x1={70} y1={250} x2={340} y2={250} colour="var(--fg)" width={2.4} />
      <Seg x1={92} y1={70} x2={280} y2={250} colour={F} width={3} />
      <Arrow x1={92} y1={70} x2={158} y2={70} colour={G} label="N (wall)" lx={196} ly={64} />
      <Arrow x1={280} y1={250} x2={280} y2={182} colour={G} label="R" lx={296} ly={188} />
      <Arrow x1={280} y1={250} x2={218} y2={250} colour={A} label="F ≤ μR" lx={212} ly={272} />
      <Arrow x1={186} y1={160} x2={186} y2={222} colour={R} label="W" lx={202} ly={218} />
      <Dot x={186} y={160} r={3.4} />
      <Note x={340} y={112} anchor="end">smooth wall: no friction</Note>
    </Figure>
  )
}

function VariableAcceleration() {
  return (
    <Figure
      title="Calculus in kinematics"
      desc="Three linked graphs of displacement, velocity and acceleration, with arrows showing differentiation one way and integration the other."
      caption="Differentiate to go down: r → v → a. Integrate to come back up, adding a constant each time that the initial conditions fix. suvat only applies when acceleration is CONSTANT - if a is given as a function of t, every suvat equation is off the table."
    >
      <Box x={38} y={116} w={92} h={54} label="Displacement" sub="r" />
      <Box x={154} y={116} w={92} h={54} label="Velocity" sub="v" />
      <Box x={270} y={116} w={92} h={54} label="Acceleration" sub="a" />
      <Arrow x1={132} y1={132} x2={152} y2={132} colour={F} />
      <Arrow x1={248} y1={132} x2={268} y2={132} colour={F} />
      <Arrow x1={152} y1={158} x2={132} y2={158} colour={G} />
      <Arrow x1={268} y1={158} x2={248} y2={158} colour={G} />
      <Note x={200} y={98} colour={F}>differentiate (d/dt)</Note>
      <Note x={200} y={196} colour={G}>integrate (+ c)</Note>
      <Note x={200} y={232}>suvat needs constant a</Note>
    </Figure>
  )
}

export const MATHS_DIAGRAMS = {
  discriminant: Discriminant,
  'graph-transformations': Transformations,
  'modulus-graph': ModulusGraph,
  'inverse-function': InverseFunction,
  'trig-graphs': TrigGraphs,
  'cast-diagram': CastDiagram,
  sector: Sector,
  'stationary-points': StationaryPoints,
  'area-under-curve': AreaUnderCurve,
  'trapezium-rule': TrapeziumRule,
  'iteration-staircase': IterationStaircase,
  'newton-raphson': NewtonRaphson,
  'pascals-triangle': BinomialPascal,
  'vectors-2d': Vectors2D,
  'exponential-log': ExponentialLog,
  'venn-diagram': VennTwoSet,
  'tree-diagram': TreeDiagram,
  histogram: Histogram,
  'box-plot': BoxPlot,
  'normal-distribution': NormalDistribution,
  'hypothesis-regions': HypothesisRegions,
  'scatter-regression': ScatterRegression,
  'binomial-bars': BinomialBars,
  'velocity-time': VelocityTimeGraph,
  'forces-on-slope': ForcesOnSlope,
  'connected-particles': ConnectedParticles,
  'projectile-path': ProjectilePath,
  'moments-rod': MomentsRod,
  ladder: LadderProblem,
  'variable-acceleration': VariableAcceleration,
}
