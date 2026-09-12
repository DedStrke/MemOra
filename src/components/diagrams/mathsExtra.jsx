import {
  Axes, Curve, Note, Figure, Arrow, Seg, Dot, Text,
  px, py, O, TOP,
} from './primitives'

/*
  The Edexcel Maths diagrams that were missing.

  These chapters were each borrowing another chapter's picture, which is
  worse than showing nothing: "Straight Line Graphs" displayed a vector
  diagram, "Parametric Equations" an area under a curve, "Vectors (3D)" the
  2D version. Every one below is the diagram its own chapter is examined on.

  Conventions are the same as maths.jsx so the set reads as one family:
  brand blue for the object under discussion, green for a compared one,
  amber for anything shaded or highlighted, dashed for construction lines.
*/

const F = 'var(--brand-strong)'
const G = '#2e9e6b'
const A = '#e08a2c'
const R = 'var(--r2-shaky)'

/* ============================================================== PURE 1 */

/*
  A right angle only LOOKS like one when the two axes are drawn to the same
  scale. The standard plot box is 315 wide by 215 tall, so a gradient of 2
  and a gradient of −½ - genuinely perpendicular in the algebra - meet at a
  visibly obtuse angle on it, in the one diagram whose caption is about
  m₁m₂ = −1. These map both axes at the same pixels-per-unit instead.
*/
const UNIT = 30
const SX = (x) => 96 + x * UNIT
const SY = (y) => 210 - y * UNIT

function StraightLine() {
  // y = 2x + 1, and the perpendicular through (1, 3) with gradient −½.
  const line = (x) => 2 * x + 1
  const perp = (x) => 3 - 0.5 * (x - 1)
  return (
    <Figure
      title="Gradient, intercept and perpendicular lines"
      desc="A straight line rising left to right, with its y-intercept marked, a right-angled step showing the rise over the run, and a second, shallower line crossing it at a right angle."
      caption="The gradient is the rise divided by the run, m = (y₂ − y₁)/(x₂ − x₁), and c is where the line cuts the y-axis. Parallel lines share m. Perpendicular lines have m₁m₂ = −1, so a gradient of 2 pairs with −½ - the single most-tested fact in this chapter."
    >
      {/* Equal-scale axes, drawn here rather than from the shared primitive. */}
      <Seg x1={SX(-1.4)} y1={SY(0)} x2={SX(9.6)} y2={SY(0)} colour="var(--fg)" width={1.5} />
      <Seg x1={SX(0)} y1={SY(-1.4)} x2={SX(0)} y2={SY(4.4)} colour="var(--fg)" width={1.5} />
      <Text x={SX(9.6)} y={SY(0) + 16} colour="var(--muted)" size="note">
        x
      </Text>
      <Text x={SX(0) - 12} y={SY(4.4)} colour="var(--muted)" size="note">
        y
      </Text>

      <Curve d={`M ${SX(-0.8)} ${SY(line(-0.8))} L ${SX(1.6)} ${SY(line(1.6))}`} colour={F} label="y = 2x + 1" lx={SX(1.9)} ly={SY(line(1.7))} />
      <Curve d={`M ${SX(-0.6)} ${SY(perp(-0.6))} L ${SX(8.6)} ${SY(perp(8.6))}`} colour={G} label="m = −½" lx={SX(7.4)} ly={SY(perp(8)) + 16} />

      {/* rise over run, on the line itself: from (0, 1) to (1, 3) */}
      <Seg x1={SX(0)} y1={SY(1)} x2={SX(1)} y2={SY(1)} colour={A} dashed />
      <Seg x1={SX(1)} y1={SY(1)} x2={SX(1)} y2={SY(3)} colour={A} dashed />
      <Text x={SX(0.5)} y={SY(1) + 14} colour={A} size="note">
        run 1
      </Text>
      <Text x={SX(1) + 26} y={SY(2)} colour={A} size="note">
        rise 2
      </Text>

      {/* A real right-angle square, at the point the two lines cross. */}
      <path
        d={`M ${SX(1) + 9} ${SY(3) - 4.5} L ${SX(1) + 13.5} ${SY(3) + 4.5} L ${SX(1) + 4.5} ${SY(3) + 9} L ${SX(1)} ${SY(3)} Z`}
        fill="none"
        stroke="var(--muted)"
        strokeWidth="1.2"
      />
      <Dot x={SX(1)} y={SY(3)} colour="var(--fg)" r={3.4} label="(1, 3)" dy={-10} />
      <Dot x={SX(0)} y={SY(1)} colour={F} r={3.4} label="c = 1" dx={-20} dy={4} />
    </Figure>
  )
}

function CompletingSquare() {
  // y = x^2 - 4x + 7  =  (x-2)^2 + 3. Vertex at (2, 3), plotted honestly.
  const fx = (x) => px(0.08 + (x / 5) * 0.84)
  const fy = (y) => py(0.06 + (y / 14) * 0.88)
  const pts = []
  for (let x = 0; x <= 5; x += 0.25) pts.push(`${fx(x)} ${fy((x - 2) ** 2 + 3)}`)
  return (
    <Figure
      title="Completing the square and the vertex"
      desc="An upward parabola with its minimum point marked, sitting above the x-axis, with dashed lines from the minimum to each axis."
      caption="Writing x² − 4x + 7 as (x − 2)² + 3 reads the graph straight off the algebra: the minimum sits at (2, 3), the line of symmetry is x = 2, and because the minimum is above the axis the curve never crosses it - the same conclusion the discriminant gives, obtained without it."
    >
      <Axes xLabel="x" yLabel="y" />
      <Curve d={`M ${pts.join(' L ')}`} colour={F} />
      <Seg x1={O.x} y1={fy(3)} x2={fx(2)} y2={fy(3)} colour={A} dashed />
      <Seg x1={fx(2)} y1={fy(3)} x2={fx(2)} y2={O.y} colour={A} dashed />
      <Dot x={fx(2)} y={fy(3)} colour={A} r={4} label="(2, 3)" dy={-11} />
      <Note x={fx(2)} y={O.y + 16} colour="var(--muted)">
        x = 2
      </Note>
      <Note x={px(0.72)} y={py(0.86)} colour={F}>
        y = (x − 2)² + 3
      </Note>
    </Figure>
  )
}

function CircleGeometry() {
  const cx = 205
  const cy = 145
  const r = 82
  // Tangent point at 45 degrees up-right.
  const k = Math.SQRT1_2
  const tx = cx + r * k
  const ty = cy - r * k
  return (
    <Figure
      title="Circle properties: tangent, radius and chord"
      desc="A circle with its centre marked, a radius drawn to a point on the circumference where a tangent touches at a right angle, and a chord with its perpendicular bisector passing through the centre."
      caption="Two results carry almost every circle question: a tangent meets the radius at 90°, so the tangent's gradient is the negative reciprocal of the radius's; and the perpendicular bisector of any chord passes through the centre, which is how you find the centre from three points."
    >
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={F} strokeWidth="2.2" />
      <Dot x={cx} y={cy} colour="var(--fg)" r={3.6} label="C (a, b)" dx={-26} dy={5} />

      {/* radius to the tangent point */}
      <Seg x1={cx} y1={cy} x2={tx} y2={ty} colour={A} />
      <Note x={(cx + tx) / 2 + 14} y={(cy + ty) / 2 - 4} colour={A}>
        r
      </Note>

      {/* tangent: perpendicular to that radius */}
      <Seg x1={tx - 62} y1={ty - 62} x2={tx + 62} y2={ty + 62} colour={G} />
      <Text x={tx + 74} y={ty + 62} colour={G}>
        tangent
      </Text>
      <Note x={tx - 13} y={ty + 2} colour="var(--muted)">
        90°
      </Note>

      {/*
        The chord's endpoints are put ON the circle and the bisector is
        computed from them, so it genuinely passes through the midpoint at
        right angles. Placed by hand it missed the midpoint by 19px - in the
        diagram whose whole claim is that this line goes through the centre.
      */}
      {(() => {
        const a = 3.5 // radians, chord endpoints on the circle
        const b = 5.6
        const P1 = { x: cx + r * Math.cos(a), y: cy - r * Math.sin(a) }
        const P2 = { x: cx + r * Math.cos(b), y: cy - r * Math.sin(b) }
        const mid = { x: (P1.x + P2.x) / 2, y: (P1.y + P2.y) / 2 }
        // The bisector runs along the centre-to-midpoint direction.
        const dx = mid.x - cx
        const dy = mid.y - cy
        const len = Math.hypot(dx, dy) || 1
        const ext = 52
        return (
          <g>
            <Seg x1={P1.x} y1={P1.y} x2={P2.x} y2={P2.y} colour="var(--fg)" />
            <Text x={P1.x - 8} y={P1.y + 4} anchor="end" colour="var(--fg)">
              chord
            </Text>
            <Seg
              x1={cx - (dx / len) * 30}
              y1={cy - (dy / len) * 30}
              x2={mid.x + (dx / len) * ext}
              y2={mid.y + (dy / len) * ext}
              colour={R}
              dashed
            />
            <Dot x={mid.x} y={mid.y} r={3} colour={R} />
            <Text x={mid.x + (dx / len) * (ext + 14)} y={mid.y + (dy / len) * (ext + 14)} colour={R}>
              perpendicular bisector
            </Text>
          </g>
        )
      })()}
    </Figure>
  )
}

function TriangleRules() {
  const Ax = 90
  const Ay = 215
  const Bx = 330
  const By = 215
  const Cx = 235
  const Cy = 70
  return (
    <Figure
      title="Sine rule, cosine rule and the area of a triangle"
      desc="A non-right-angled triangle with vertices labelled A, B and C, and the sides opposite them labelled a, b and c."
      caption="Side a is always opposite angle A. Use the sine rule a/sin A = b/sin B when you have a matching side-and-angle pair; the cosine rule a² = b² + c² − 2bc·cos A when you have two sides and the angle between them, or all three sides. Area = ½ab·sin C uses the angle BETWEEN the two sides."
    >
      <Seg x1={Ax} y1={Ay} x2={Bx} y2={By} colour={F} width={2.4} />
      <Seg x1={Bx} y1={By} x2={Cx} y2={Cy} colour={F} width={2.4} />
      <Seg x1={Cx} y1={Cy} x2={Ax} y2={Ay} colour={F} width={2.4} />

      <Text x={Ax - 12} y={Ay + 6} colour="var(--fg)">
        A
      </Text>
      <Text x={Bx + 12} y={By + 6} colour="var(--fg)">
        B
      </Text>
      <Text x={Cx} y={Cy - 10} colour="var(--fg)">
        C
      </Text>

      <Text x={(Bx + Cx) / 2 + 16} y={(By + Cy) / 2} colour={A}>
        a
      </Text>
      <Text x={(Ax + Cx) / 2 - 16} y={(Ay + Cy) / 2} colour={A}>
        b
      </Text>
      <Text x={(Ax + Bx) / 2} y={Ay + 20} colour={A}>
        c
      </Text>

      <Note x={Cx} y={Cy + 34} colour="var(--muted)">
        area = ½ab sin C
      </Note>
      <Note x={200} y={272} colour={R}>
        sin is ambiguous: check for the obtuse case
      </Note>
    </Figure>
  )
}

function LogLinear() {
  return (
    <Figure
      title="Linearising an exponential model"
      desc="Two panels: a curved exponential growth graph on ordinary axes, and the same data as a straight line once the vertical axis is replaced by log y."
      caption="Taking logs of y = abˣ gives log y = log a + x·log b - a straight line against x, with gradient log b and intercept log a. For y = axⁿ, plot log y against log x instead: the gradient is then n. Which pair of axes straightens the data tells you which model it is."
    >
      <Seg x1={198} y1={40} x2={198} y2={258} colour="var(--muted)" width={1} dashed />

      {/* left: curved */}
      <Seg x1={70} y1={60} x2={70} y2={220} colour="var(--fg)" width={1.4} />
      <Seg x1={70} y1={220} x2={178} y2={220} colour="var(--fg)" width={1.4} />
      <Curve d={`M 74 216 Q 130 210 160 78`} colour={F} width={2.2} />
      <Text x={62} y={56} anchor="end" colour="var(--muted)" size="note">
        y
      </Text>
      <Note x={178} y={236} colour="var(--muted)">
        x
      </Note>
      <Note x={124} y={256} colour="var(--fg)">
        y = ab&#739;
      </Note>

      {/* right: straightened */}
      <Seg x1={236} y1={60} x2={236} y2={220} colour="var(--fg)" width={1.4} />
      <Seg x1={236} y1={220} x2={352} y2={220} colour="var(--fg)" width={1.4} />
      <Curve d={`M 240 208 L 344 80`} colour={G} width={2.2} />
      <Dot x={240} y={208} colour={A} r={3} />
      <Dot x={276} y={164} colour={A} r={3} />
      <Dot x={312} y={120} colour={A} r={3} />
      <Text x={228} y={56} anchor="end" colour="var(--muted)" size="note">
        log y
      </Text>
      <Note x={352} y={236} colour="var(--muted)">
        x
      </Note>
      <Note x={294} y={256} colour={G}>
        gradient = log b
      </Note>
    </Figure>
  )
}

function FactorTheorem() {
  // y = (x+2)(x-1)(x-3), scaled to fit. Roots at -2, 1, 3.
  const fx = (x) => px(0.06 + ((x + 3) / 7) * 0.88)
  const fy = (y) => py(0.5 + (y / 26) * 0.44)
  const pts = []
  for (let x = -3; x <= 4; x += 0.1) pts.push(`${fx(x)} ${fy((x + 2) * (x - 1) * (x - 3))}`)
  return (
    <Figure
      title="The factor theorem"
      desc="A cubic curve crossing the horizontal axis at three marked points, at x equals minus two, one and three."
      caption="If f(p) = 0 then (x − p) is a factor, and the curve crosses the axis at x = p. Here f(1) = 0, so (x − 1) divides f(x) exactly; dividing it out leaves a quadratic you can factorise for the other two roots. A repeated factor touches the axis instead of crossing it."
    >
      <Axes xLabel="x" yLabel="y" xAt={fy(0)} />
      <Curve d={`M ${pts.join(' L ')}`} colour={F} />
      {[-2, 1, 3].map((r) => (
        <Dot key={r} x={fx(r)} y={fy(0)} colour={A} r={4} label={`x = ${r}`} dy={20} />
      ))}
      <Note x={px(0.5)} y={py(0.97)} colour={F}>
        f(x) = (x + 2)(x − 1)(x − 3)
      </Note>
    </Figure>
  )
}

/* ============================================================== PURE 2 */

function SequencesSeries() {
  const base = 226
  const bars = [0.9, 0.63, 0.44, 0.31, 0.22, 0.15, 0.1, 0.07]
  return (
    <Figure
      title="A convergent geometric sequence and its sum"
      desc="Bars of decreasing height representing successive terms of a geometric sequence, with a line above showing the running total flattening towards a limit."
      caption="Each term is r times the one before. When |r| < 1 the terms shrink towards zero and the running total flattens towards a limit, so the sum to infinity S∞ = a/(1 − r) exists. When |r| ≥ 1 the terms do not shrink and there is no such limit - that condition is the mark."
    >
      {bars.map((h, i) => {
        const x = 72 + i * 34
        const hh = h * 120
        return <rect key={i} x={x} y={base - hh} width="22" height={hh} rx="3" fill={F} opacity="0.75" />
      })}
      <Seg x1={60} y1={base} x2={356} y2={base} colour="var(--fg)" width={1.5} />

      <Curve d="M 83 138 Q 170 66 350 58" colour={A} width={2.2} dashed />
      <Seg x1={64} y1={54} x2={356} y2={54} colour={R} width={1.4} dashed />
      <Text x={356} y={48} anchor="end" colour={R} size="note">
        S∞ = a / (1 − r)
      </Text>
      <Text x={230} y={104} colour={A} size="note">
        running total
      </Text>
      <Note x={200} y={base + 20} colour="var(--muted)">
        term number n
      </Note>
      <Note x={200} y={base + 38} colour="var(--fg)">
        uₙ = ar&#8319;⁻¹, valid for |r| &lt; 1
      </Note>
    </Figure>
  )
}

function ReciprocalTrig() {
  // y = sec x over -pi..pi, with cos x behind it.
  const sx = (t) => px(0.04 + ((t + Math.PI) / (2 * Math.PI)) * 0.92)
  const sy = (v) => py(0.5 + (v / 8) * 0.9)
  const cosPts = []
  for (let t = -Math.PI; t <= Math.PI; t += 0.05) cosPts.push(`${sx(t)} ${sy(Math.cos(t))}`)

  const branch = (from, to) => {
    const out = []
    for (let t = from; t <= to; t += 0.02) {
      const v = 1 / Math.cos(t)
      if (Math.abs(v) <= 4) out.push(`${sx(t)} ${sy(v)}`)
    }
    return out.length > 1 ? `M ${out.join(' L ')}` : ''
  }
  return (
    <Figure
      title="y = sec x and the cosine curve behind it"
      desc="The cosine curve drawn faintly, with the secant curve above and below it in separate branches, and vertical asymptotes where cosine crosses zero."
      caption="sec x = 1/cos x, so wherever cos x = 0 the secant is undefined and the graph has a vertical asymptote - at x = ±π/2 here. Where cos x = ±1 the two curves touch, and those points are the closest sec x ever comes to the axis. cosec and cot follow the same reasoning from sin x and tan x."
    >
      <Axes xLabel="x" yLabel="y" xAt={sy(0)} />
      <Curve d={`M ${cosPts.join(' L ')}`} colour="var(--muted)" width={1.6} dashed label="cos x" lx={px(0.5)} ly={sy(-1) + 16} />

      <Curve d={branch(-Math.PI + 0.02, -Math.PI / 2 - 0.05)} colour={F} />
      <Curve d={branch(-Math.PI / 2 + 0.05, Math.PI / 2 - 0.05)} colour={F} />
      <Curve d={branch(Math.PI / 2 + 0.05, Math.PI - 0.02)} colour={F} />

      {[-Math.PI / 2, Math.PI / 2].map((t, i) => (
        <Seg key={i} x1={sx(t)} y1={TOP} x2={sx(t)} y2={O.y} colour={R} width={1.2} dashed />
      ))}
      <Note x={sx(-Math.PI / 2)} y={TOP - 6} colour={R}>
        x = −π/2
      </Note>
      <Note x={sx(Math.PI / 2)} y={TOP - 6} colour={R}>
        x = π/2
      </Note>
      <Text x={px(0.14)} y={sy(2.6)} colour={F} size="note">
        y = sec x
      </Text>
    </Figure>
  )
}

function HarmonicForm() {
  // 3 sin x + 4 cos x = 5 sin(x + 0.927)
  const sx = (t) => px(0.04 + (t / (2 * Math.PI)) * 0.92)
  const sy = (v) => py(0.5 + (v / 12) * 0.9)
  const plot = (f) => {
    const out = []
    for (let t = 0; t <= 2 * Math.PI; t += 0.04) out.push(`${sx(t)} ${sy(f(t))}`)
    return `M ${out.join(' L ')}`
  }
  const alpha = Math.atan2(4, 3)
  return (
    <Figure
      title="Writing a sin x + b cos x in harmonic form"
      desc="Two smaller sine and cosine waves and the single larger wave that is their sum, with the sum's maximum height and horizontal shift marked."
      caption="3 sin x + 4 cos x = 5 sin(x + α) with R = √(3² + 4²) = 5 and tan α = 4/3. The point of the rewrite is that one wave has an obvious maximum (R) and minimum (−R), and an equation in it can be solved directly - which the two-term version cannot."
    >
      <Axes xLabel="x" yLabel="y" xAt={sy(0)} />
      {/* Both components were dashed and near-grey, so which was which was
          guesswork. Each now carries its own colour and its own label. */}
      <Curve
        d={plot((t) => 3 * Math.sin(t))}
        colour={A}
        width={1.5}
        dashed
        label="3 sin x"
        lx={sx(Math.PI / 2)}
        ly={sy(3) - 8}
      />
      <Curve
        d={plot((t) => 4 * Math.cos(t))}
        colour={G}
        width={1.5}
        dashed
        label="4 cos x"
        lx={sx(Math.PI)}
        ly={sy(-4) + 16}
      />
      <Curve d={plot((t) => 3 * Math.sin(t) + 4 * Math.cos(t))} colour={F} width={2.4} />

      <Seg x1={O.x} y1={sy(5)} x2={sx(Math.PI / 2 - alpha)} y2={sy(5)} colour={A} dashed />
      <Dot x={sx(Math.PI / 2 - alpha)} y={sy(5)} colour={A} r={3.6} />
      <Text x={O.x + 8} y={sy(5) - 6} anchor="start" colour={A} size="note">
        R = 5
      </Text>
      <Note x={px(0.62)} y={py(0.95)} colour={F}>
        5 sin(x + α), tan α = 4/3
      </Note>
    </Figure>
  )
}

function TangentNormal() {
  // y = x^2 with tangent and normal at (1,1).
  const fx = (x) => px(0.06 + ((x + 0.6) / 3.2) * 0.88)
  const fy = (y) => py(0.06 + (y / 6.5) * 0.88)
  const pts = []
  for (let x = -0.6; x <= 2.6; x += 0.05) pts.push(`${fx(x)} ${fy(x * x)}`)
  const tan = (x) => 2 * x - 1 // gradient 2 at x=1
  const nor = (x) => -0.5 * x + 1.5 // gradient -1/2
  return (
    <Figure
      title="Tangent and normal to a curve"
      desc="A parabola with a straight tangent line touching it at one marked point, and a second line crossing it there at right angles."
      caption="dy/dx evaluated at the point gives the tangent's gradient - here 2 at (1, 1). The normal is perpendicular to it, so its gradient is −1/(dy/dx) = −½. Both lines then come from y − y₁ = m(x − x₁); losing the negative reciprocal is the usual dropped mark."
    >
      <Axes xLabel="x" yLabel="y" />
      <Curve d={`M ${pts.join(' L ')}`} colour={F} label="y = x²" lx={fx(2.3)} ly={fy(5.5)} />
      <Curve d={`M ${fx(0.2)} ${fy(tan(0.2))} L ${fx(2.4)} ${fy(tan(2.4))}`} colour={A} label="tangent" lx={fx(2.3)} ly={fy(tan(2.4)) - 8} />
      <Curve d={`M ${fx(-0.4)} ${fy(nor(-0.4))} L ${fx(2.4)} ${fy(nor(2.4))}`} colour={G} label="normal" lx={fx(2.35)} ly={fy(nor(2.4)) + 14} />
      <Dot x={fx(1)} y={fy(1)} colour="var(--fg)" r={4} label="(1, 1)" dy={-10} />
      <Note x={px(0.3)} y={py(0.92)} colour="var(--muted)">
        m&#8348; = 2, m&#8345; = −½
      </Note>
    </Figure>
  )
}

function Concavity() {
  // y = x^3 - 3x, showing concave/convex either side of the inflection at 0.
  const fx = (x) => px(0.06 + ((x + 2.2) / 4.4) * 0.88)
  const fy = (y) => py(0.5 + (y / 9) * 0.88)
  const pts = []
  for (let x = -2.2; x <= 2.2; x += 0.05) pts.push(`${fx(x)} ${fy(x ** 3 - 3 * x)}`)
  return (
    <Figure
      title="Concave, convex and the point of inflection"
      desc="A cubic curve, shaded on the left where it bends downwards and on the right where it bends upwards, with the changeover point marked on the axis."
      caption="f″(x) < 0 means concave (bending downwards), f″(x) > 0 means convex. Where f″ changes sign the curve has a point of inflection - at x = 0 here. f″ = 0 alone is not enough: the sign must actually change, which is why you test either side."
    >
      <Axes xLabel="x" yLabel="y" xAt={fy(0)} />
      <Curve d={`M ${pts.join(' L ')}`} colour={F} />
      <Seg x1={fx(0)} y1={TOP} x2={fx(0)} y2={O.y} colour={R} width={1.3} dashed />
      <Dot x={fx(0)} y={fy(0)} colour={R} r={4} />
      <Text x={fx(0)} y={TOP - 6} colour={R} size="note">
        f″ = 0
      </Text>
      <Text x={fx(-1.3)} y={fy(-4.6)} colour={A} size="note">
        concave, f″ &lt; 0
      </Text>
      <Text x={fx(1.3)} y={fy(4.6)} colour={G} size="note">
        convex, f″ &gt; 0
      </Text>
    </Figure>
  )
}

function ParametricCurve() {
  // x = 2cos t, y = 3 sin t  ->  ellipse. t marked at three values.
  const cx = 210
  const cy = 148
  const rx = 118
  const ry = 84
  const pt = (t) => [cx + rx * Math.cos(t), cy - ry * Math.sin(t)]
  const path = []
  for (let t = 0; t <= 2 * Math.PI + 0.01; t += 0.05) {
    const [x, y] = pt(t)
    path.push(`${x} ${y}`)
  }
  return (
    <Figure
      title="A curve defined parametrically"
      desc="An ellipse traced out as the parameter increases, with three positions on it labelled by their parameter values and an arrow showing the direction of travel."
      caption="x = 2cos t, y = 3sin t traces the ellipse as t runs from 0 to 2π - the parameter fixes not just the shape but where you are on it and which way you are going. Eliminating t with cos²t + sin²t = 1 gives (x/2)² + (y/3)² = 1, the Cartesian form; the domain of t decides how much of that curve you actually get."
    >
      <Seg x1={cx - 150} y1={cy} x2={cx + 150} y2={cy} colour="var(--fg)" width={1.4} />
      <Seg x1={cx} y1={cy - 110} x2={cx} y2={cy + 110} colour="var(--fg)" width={1.4} />
      <Curve d={`M ${path.join(' L ')}`} colour={F} />
      {[
        [0, 't = 0'],
        [Math.PI / 2, 't = π/2'],
        [Math.PI, 't = π'],
      ].map(([t, label], i) => {
        const [x, y] = pt(t)
        return <Dot key={i} x={x} y={y} colour={A} r={4} label={label} dy={t === Math.PI / 2 ? -10 : -12} />
      })}
      <Arrow x1={cx + 96} y1={cy - 52} x2={cx + 74} y2={cy - 72} colour={G} />
      <Note x={cx} y={274} colour="var(--muted)">
        x = 2cos t, y = 3sin t → (x/2)² + (y/3)² = 1
      </Note>
    </Figure>
  )
}

function Vectors3D() {
  // Isometric axes with a position vector and its components.
  /*
    x must come toward the viewer, DOWN-LEFT. Both x and y previously went
    down-right, within 15° of each other, so the picture read as two axes
    and a slope rather than as three dimensions.
  */
  const o = { x: 168, y: 190 }
  const ax = { x: -86, y: 46 } // +x toward the viewer, down-left
  const ay = { x: 150, y: 26 } // +y to the right
  const az = { x: 0, y: -132 } // +z up
  // P = 3i + 4j + 5k, as fractions of each drawn axis.
  const at = (fx3, fy3, fz3) => ({
    x: o.x + fx3 * ax.x + fy3 * ay.x + fz3 * az.x,
    y: o.y + fx3 * ax.y + fy3 * ay.y + fz3 * az.y,
  })
  const base = at(0.7, 0.8, 0)
  const P = at(0.7, 0.8, 0.75)
  return (
    <Figure
      title="A position vector in three dimensions"
      desc="Three axes drawn in perspective from a common origin, with a vector from the origin to a point, and dashed lines dropping to the horizontal plane showing its three components."
      caption="OP = 3i + 4j + 5k means three steps along x, four along y, five along z. The magnitude extends Pythagoras: |OP| = √(3² + 4² + 5²). A unit vector is OP divided by that length, and the angle to any axis comes from cos θ = (component)/|OP|."
    >
      <Arrow x1={o.x} y1={o.y} x2={o.x + ax.x} y2={o.y + ax.y} colour="var(--fg)" label="x" lx={o.x + ax.x + 8} ly={o.y + ax.y + 12} />
      <Arrow x1={o.x} y1={o.y} x2={o.x + ay.x} y2={o.y + ay.y} colour="var(--fg)" label="y" lx={o.x + ay.x + 12} ly={o.y + ay.y + 4} />
      <Arrow x1={o.x} y1={o.y} x2={o.x + az.x} y2={o.y + az.y} colour="var(--fg)" label="z" lx={o.x - 12} ly={o.y + az.y - 4} />

      <Seg x1={o.x} y1={o.y} x2={base.x} y2={base.y} colour="var(--muted)" width={1.2} dashed />
      <Seg x1={base.x} y1={base.y} x2={P.x} y2={P.y} colour="var(--muted)" width={1.2} dashed />
      <Arrow x1={o.x} y1={o.y} x2={P.x} y2={P.y} colour={F} width={2.4} />
      <Dot x={P.x} y={P.y} colour={F} r={4} label="P (3, 4, 5)" dy={-10} />
      <Text x={(o.x + P.x) / 2 - 20} y={(o.y + P.y) / 2} colour={F} size="note">
        OP
      </Text>
      <Note x={210} y={276} colour="var(--muted)">
        |OP| = √(3² + 4² + 5²) = √50
      </Note>
    </Figure>
  )
}

/* ======================================================== STATISTICS */

function SamplingMethods() {
  const dots = []
  for (let r = 0; r < 5; r += 1) {
    for (let c = 0; c < 9; c += 1) dots.push([78 + c * 21, 74 + r * 21, r * 9 + c])
  }
  // A systematic sample: every 7th member.
  const chosen = new Set(dots.filter((_, i) => i % 7 === 3).map((d) => d[2]))
  return (
    <Figure
      title="Taking a sample from a population"
      desc="A grid of dots representing a population, with a scattered subset highlighted, and an arrow to a smaller box labelled sample."
      caption="A census covers every member and is accurate but slow and costly; a sample is quicker but only representative if it is chosen properly. Random and systematic sampling avoid bias; opportunity and quota sampling are easier but can miss whole parts of the population - which is the criticism the exam asks you to make."
    >
      <rect x={64} y={58} width={200} height={116} rx="10" fill="none" stroke="var(--muted)" strokeWidth="1.4" />
      <Text x={164} y={50} colour="var(--muted)" size="note">
        population (sampling frame)
      </Text>
      {dots.map(([x, y, i]) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={chosen.has(i) ? 5 : 3.4}
          fill={chosen.has(i) ? A : 'var(--muted)'}
          opacity={chosen.has(i) ? 1 : 0.5}
        />
      ))}
      <Arrow x1={272} y1={116} x2={302} y2={116} colour={F} />
      <rect x={306} y={86} width={58} height={60} rx="8" fill="none" stroke={A} strokeWidth="1.6" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <circle key={i} cx={320 + (i % 3) * 16} cy={106 + Math.floor(i / 3) * 20} r={5} fill={A} />
      ))}
      <Text x={335} y={162} colour={A} size="note">
        sample
      </Text>
      <Note x={200} y={216} colour="var(--fg)">
        every 7th member selected - systematic sampling
      </Note>
      <Note x={200} y={238} colour="var(--muted)">
        random · systematic · stratified · quota · opportunity
      </Note>
    </Figure>
  )
}

export const MATHS_EXTRA_DIAGRAMS = {
  'straight-line': StraightLine,
  'completing-square': CompletingSquare,
  'circle-geometry': CircleGeometry,
  'triangle-rules': TriangleRules,
  'log-linear': LogLinear,
  'factor-theorem': FactorTheorem,
  'sequences-series': SequencesSeries,
  'reciprocal-trig': ReciprocalTrig,
  'harmonic-form': HarmonicForm,
  'tangent-normal': TangentNormal,
  concavity: Concavity,
  'parametric-curve': ParametricCurve,
  'vectors-3d': Vectors3D,
  'sampling-methods': SamplingMethods,
}
