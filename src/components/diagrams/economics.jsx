import { Axes, Curve, Guides, Shade, Note, ShiftArrow, Figure, Seg, Text, Dot, px, py, O, RIGHT, TOP } from './primitives'
import {
  mpcN, mscN, msbN, QM_NEG, QS_NEG,
  mscM, mpbM, msbM, QM_MERIT, QS_MERIT,
  EXT_Q_MAX, EXT_V_MAX,
  afcOf, avcOf, acSrOf, mcSrOf, AVC_MIN_Q, AC_SR_MIN_Q,
  arMon, mrMon, mcMon, acMon, QM_MON, QC_MON, MON_Q_MAX, MON_V_MAX,
  acOf, mcOf, AC_MIN_Q, Q_LO, Q_HI, V_HI,
  taxD, taxS, taxSPlus, TAX_Q0, TAX_P0, TAX_Q1, TAX_PC, TAX_PP, TAX_Q_MAX, TAX_V_MAX,
  subS, subSLess, SUB_Q0, SUB_Q1, SUB_P0, SUB_PC, SUB_PP,
  keynesianAS, linearAD, keynesianEquilibrium,
} from './econGeometry'

/*
  The Edexcel A-level Economics diagrams, one component each, keyed by id in
  ECON_DIAGRAMS at the bottom.

  Economics is examined through diagrams - a "using a diagram, analyse..."
  question cannot be answered without one, and the notes previously
  described curves in prose and left the student to picture them. Each
  chapter's notes now embed the diagram it needs at the point it is
  discussed (see the data-diagram markers in econ-diagram-notes.js).

  Conventions kept identical across all of them so they read as one set:
  demand/benefit curves in the brand blue, supply/cost curves in amber,
  social-optimum curves dashed, welfare loss shaded red, and the free
  market outcome always labelled Qm against the optimum marked Q*.

  The externality, cost-curve and monopoly diagrams are PLOTTED from the
  equations in econGeometry.js rather than drawn with hand-placed control
  points, because the marks in these are attached to exact relationships -
  MC cutting AC at minimum AC, MSB meeting MSC at Q* - and a Bezier fitted
  by eye misses them by enough to be wrong. scripts/check-diagram-geometry
  asserts each one.
*/

// Shared plot window for the externality diagrams.
const gx = (q) => px(0.04 + (q / EXT_Q_MAX) * 0.9)
const gy = (v) => py(0.05 + (v / EXT_V_MAX) * 0.9)
const plotG = (f, from = 0.2, to = EXT_Q_MAX - 0.2) => {
  const pts = []
  for (let q = from; q <= to + 1e-9; q += 0.2) pts.push(`${gx(q)} ${gy(f(q))}`)
  return `M ${pts.join(' L ')}`
}

// Short-run cost curves: output 2-9, cost 0-9.
const cx = (q) => px(0.05 + ((q - 2) / 7) * 0.9)
const cy = (v) => py(0.05 + (v / 9) * 0.9)
const plotC = (f, from = 2, to = 9) => {
  const pts = []
  for (let q = from; q <= to + 1e-9; q += 0.1) pts.push(`${cx(q)} ${cy(f(q))}`)
  return `M ${pts.join(' L ')}`
}

// The firm-level cost window shared with economicsExtra.jsx.
const fcx = (q) => px(0.04 + ((q - Q_LO) / (Q_HI - Q_LO)) * 0.92)
const fcy = (v) => py(0.06 + (v / V_HI) * 0.9)
const plotF = (f, from = Q_LO, to = Q_HI) => {
  const pts = []
  for (let q = from; q <= to + 1e-9; q += 0.04) pts.push(`${fcx(q)} ${fcy(f(q))}`)
  return `M ${pts.join(' L ')}`
}

// Tax and subsidy: quantity 0-8, price 0-13.
const tx = (q) => px(0.04 + (q / TAX_Q_MAX) * 0.9)
const ty = (v) => py(0.05 + (v / TAX_V_MAX) * 0.9)
const plotT = (f, from = 0, to = TAX_Q_MAX) => {
  const pts = []
  for (let q = from; q <= to + 1e-9; q += 0.2) pts.push(`${tx(q)} ${ty(f(q))}`)
  return `M ${pts.join(' L ')}`
}

// Monopoly: output 0-10, price/cost 0-13.
const mx = (q) => px(0.04 + (q / MON_Q_MAX) * 0.9)
const my = (v) => py(0.05 + (v / MON_V_MAX) * 0.9)
const plotMon = (f, from = 0.8, to = MON_Q_MAX) => {
  const pts = []
  for (let q = from; q <= to + 1e-9; q += 0.1) pts.push(`${mx(q)} ${my(f(q))}`)
  return `M ${pts.join(' L ')}`
}


/*
  Keynesian AD/AS plotting - see keynesianAS in econGeometry.js. The AS
  curve is flat with spare capacity, bends upward as capacity tightens and
  is vertical at full employment; equilibria are SOLVED, not placed, so
  every guide sits exactly where AD crosses AS. This is the shape used
  for every AD/AS diagram here: it is the one Edexcel students draw by
  default, and the classical vertical LRAS is its limiting case.
*/
const asPath = (as) => {
  const pts = [`${px(0.04)} ${py(as.floor)}`, `${px(as.y0)} ${py(as.floor)}`]
  for (let i = 1; i <= 28; i++) {
    const y = as.y0 + ((as.yf - as.y0) * i) / 28
    pts.push(`${px(y)} ${py(as.p(y))}`)
  }
  pts.push(`${px(as.yf)} ${py(0.98)}`)
  return `M ${pts.join(' L ')}`
}
const adPath = (ad, yA, yB) => `M ${px(yA)} ${py(ad.p(yA))} L ${px(yB)} ${py(ad.p(yB))}`

const DEMAND = 'var(--brand-strong)'
const SUPPLY = '#e08a2c'
const SOCIAL = '#2e9e6b'
const LOSS = 'var(--r2-shaky)'
const ALT = '#7c6cf0' // a fourth curve, where amber would clash with supply

/*
  A production possibility frontier is a quarter-ellipse: it meets BOTH
  axes (all resources on one good, none on the other) and bows outward
  because the opportunity cost of each good rises as more of it is made.
  The old Bezier was drawn with control points chosen by eye, which gave
  a shallow arc that floated clear of both axes - not the shape in any
  textbook, and the reason students said it "looked wrong". This plots
  the ellipse x = a·cosθ, y = b·sinθ properly, from the y-axis intercept
  round to the x-axis intercept, in plot fractions.
*/
const ppfPath = (a, b, steps = 40) => {
  const pts = []
  for (let i = 0; i <= steps; i++) {
    const t = (Math.PI / 2) * (1 - i / steps)
    pts.push(`${px(a * Math.cos(t))} ${py(b * Math.sin(t))}`)
  }
  return `M ${pts.join(' L ')}`
}
const onPpf = (a, b, deg) => ({
  x: px(a * Math.cos((deg * Math.PI) / 180)),
  y: py(b * Math.sin((deg * Math.PI) / 180)),
})

/* ------------------------------------------------------------ THEME 1 */

function PPF() {
  return (
    <Figure
      title="Production possibility frontier"
      desc="A curve concave to the origin showing the maximum combinations of capital and consumer goods. Point A lies on the curve, B inside it showing unemployed resources, and C outside it showing an unattainable combination."
      caption="Every point on the curve is productively efficient. Moving along it has an opportunity cost; the curve is concave because resources are not equally suited to both goods, so that cost rises."
    >
      <Axes xLabel="Consumer goods" yLabel="Capital goods" />
      <Curve d={ppfPath(0.9, 0.9)} colour={DEMAND} label="PPF" lx={px(0.86)} ly={py(0.36)} />
      {(() => {
        const A = onPpf(0.9, 0.9, 58)
        return (
          <g>
            <Guides x={A.x} y={A.y} />
            <Note x={A.x + 9} y={A.y - 6} anchor="start" colour="var(--fg)">A · on the frontier</Note>
          </g>
        )
      })()}
      <circle cx={px(0.32)} cy={py(0.34)} r="3.6" fill={LOSS} />
      <Note x={px(0.32) + 9} y={py(0.34) + 4} anchor="start" colour={LOSS}>B · inside: spare capacity</Note>
      <circle cx={px(0.72)} cy={py(0.62)} r="3.6" fill={SOCIAL} />
      <Note x={px(0.72) + 9} y={py(0.62) + 4} anchor="start" colour={SOCIAL}>C · outside: unattainable</Note>
    </Figure>
  )
}

function PPFShift() {
  return (
    <Figure
      title="Outward shift of the PPF"
      desc="Two production possibility frontiers, the second lying entirely outside the first, with arrows showing the shift."
      caption="An increase in the quantity or quality of factors of production - investment, education, technology, net immigration - raises potential output and shifts the whole frontier outward. This is potential growth, not a movement along the curve."
    >
      <Axes xLabel="Consumer goods" yLabel="Capital goods" />
      <Curve d={ppfPath(0.64, 0.64)} colour={DEMAND} label="PPF₁" lx={px(0.4)} ly={py(0.36)} />
      <Curve d={ppfPath(0.92, 0.92)} colour={SOCIAL} label="PPF₂" lx={px(0.74)} ly={py(0.66)} />
      <ShiftArrow x1={px(0.34)} y1={py(0.56)} x2={px(0.5)} y2={py(0.8)} colour={SOCIAL} />
      <ShiftArrow x1={px(0.54)} y1={py(0.36)} x2={px(0.78)} y2={py(0.52)} colour={SOCIAL} />
      <Note x={px(0.6)} y={py(0.9)} anchor="start" colour={SOCIAL}>more of BOTH goods is now possible</Note>
    </Figure>
  )
}

function SupplyDemand() {
  return (
    <Figure
      title="Market equilibrium"
      desc="A downward sloping demand curve crossing an upward sloping supply curve, with the equilibrium price and quantity marked with dotted guide lines."
      caption="Equilibrium is where demand meets supply. Above it there is excess supply pushing price down; below it excess demand pulling price up. The price mechanism clears the market at Pe, Qe."
    >
      <Axes xLabel="Quantity" yLabel="Price" />
      <Curve d={`M ${px(0.05)} ${py(0.9)} L ${px(0.9)} ${py(0.12)}`} colour={DEMAND} label="D" lx={px(0.92)} ly={py(0.14)} />
      <Curve d={`M ${px(0.05)} ${py(0.1)} L ${px(0.9)} ${py(0.88)}`} colour={SUPPLY} label="S" lx={px(0.92)} ly={py(0.88)} />
      <Guides x={px(0.486)} y={py(0.5)} xText="Qe" yText="Pe" />
    </Figure>
  )
}

function DemandShift() {
  return (
    <Figure
      title="A rightward shift in demand"
      desc="A supply curve with two demand curves, the second to the right of the first, showing equilibrium price and quantity both rising."
      caption="A change in any condition of demand - income, the price of a substitute, tastes, population - shifts the whole curve. Only a change in the good's own price moves you along it. Here both equilibrium price and quantity rise."
    >
      <Axes xLabel="Quantity" yLabel="Price" />
      <Curve d={`M ${px(0.03)} ${py(0.78)} L ${px(0.66)} ${py(0.1)}`} colour={DEMAND} label="D₁" lx={px(0.68)} ly={py(0.1)} />
      <Curve d={`M ${px(0.25)} ${py(0.94)} L ${px(0.92)} ${py(0.24)}`} colour={SOCIAL} label="D₂" lx={px(0.94)} ly={py(0.24)} />
      <Curve d={`M ${px(0.05)} ${py(0.08)} L ${px(0.9)} ${py(0.86)}`} colour={SUPPLY} label="S" lx={px(0.92)} ly={py(0.86)} />
      <Guides x={px(0.39)} y={py(0.392)} xText="Q₁" yText="P₁" />
      <Guides x={px(0.595)} y={py(0.58)} xText="Q₂" yText="P₂" />
      <ShiftArrow x1={px(0.36)} y1={py(0.62)} x2={px(0.5)} y2={py(0.66)} colour={SOCIAL} />
    </Figure>
  )
}

function Elasticity() {
  return (
    <Figure
      title="Price elastic and price inelastic demand"
      desc="Two demand curves on the same axes: a steep curve showing inelastic demand and a shallow curve showing elastic demand, with the same price fall producing very different changes in quantity."
      caption="The same price cut causes a large rise in quantity on the shallow (elastic) curve and only a small rise on the steep (inelastic) one. Cutting price raises total revenue only when demand is elastic."
    >
      {/*
        Both curves pass through the SAME starting point, so one price fall
        can be compared across them. Without the quantity markers the diagram
        showed a price change and no response - which is the one thing
        elasticity is about.
      */}
      <Axes xLabel="Quantity" yLabel="Price" />
      <Curve d={`M ${px(0.375)} ${py(0.74)} L ${px(0.525)} ${py(0.26)}`} colour={SUPPLY} label="D (inelastic)" lx={px(0.54)} ly={py(0.22)} />
      <Curve d={`M ${px(0.341)} ${py(0.7)} L ${px(0.879)} ${py(0.303)}`} colour={DEMAND} label="D (elastic)" lx={px(0.8)} ly={py(0.2)} />

      <Seg x1={O.x} y1={py(0.66)} x2={px(0.95)} y2={py(0.66)} colour="var(--muted)" width={1} dashed />
      <Seg x1={O.x} y1={py(0.34)} x2={px(0.95)} y2={py(0.34)} colour="var(--muted)" width={1} dashed />
      <Note x={O.x - 6} y={py(0.66) + 4} anchor="end">P₁</Note>
      <Note x={O.x - 6} y={py(0.34) + 4} anchor="end">P₂</Note>

      {[
        [0.4, 0.66, 'Q₁'],
        [0.5, 0.34, 'Q₂'],
        [0.82, 0.34, 'Q₃'],
      ].map(([q, p, label]) => (
        <g key={label}>
          <Seg x1={px(q)} y1={py(p)} x2={px(q)} y2={O.y} colour="var(--muted)" width={1} dashed />
          <Dot x={px(q)} y={py(p)} r={3} colour="var(--fg)" />
          <Note x={px(q)} y={O.y + 15}>{label}</Note>
        </g>
      ))}

      <ShiftArrow x1={px(0.41)} y1={py(0.12)} x2={px(0.49)} y2={py(0.12)} colour={SUPPLY} />
      <Note x={px(0.45)} y={py(0.06)} colour={SUPPLY}>small ΔQ</Note>
      <ShiftArrow x1={px(0.53)} y1={py(0.44)} x2={px(0.8)} y2={py(0.44)} colour={DEMAND} />
      <Note x={px(0.7)} y={py(0.5)} colour={DEMAND}>large ΔQ</Note>
      <Note x={px(0.2)} y={py(0.22)}>PED = %ΔQd ÷ %ΔP</Note>
    </Figure>
  )
}

function NegativeProductionExternality() {
  return (
    <Figure
      title="Negative production externality"
      desc="Marginal private cost below marginal social cost, with marginal social benefit downward sloping. The free market output where MPC meets MSB is greater than the social optimum where MSC meets MSB, and the triangle between them is shaded as welfare loss."
      caption="Firms pay only their private costs, so they produce at Qm where MPC = MSB. The social optimum is Q*, where MSC = MSB. The vertical gap between MPC and MSC is the external cost, and every unit between Q* and Qm costs society more than it benefits it - the shaded triangle is the welfare loss."
    >
      <Axes xLabel="Quantity" yLabel="Costs / benefits" />
      <Shade
        points={`${gx(QS_NEG)},${gy(mscN(QS_NEG))} ${gx(QM_NEG)},${gy(msbN(QM_NEG))} ${gx(QM_NEG)},${gy(mscN(QM_NEG))}`}
        fill={LOSS}
        opacity="0.45"
      />
      <Curve d={plotG(mpcN)} colour={SUPPLY} label="MPC = S" lx={gx(8.2)} ly={gy(mpcN(8.2) + 1)} />
      <Curve d={plotG(mscN)} colour={SOCIAL} dashed label="MSC" lx={gx(8.3)} ly={gy(mscN(8.3) + 0.9)} />
      <Curve d={plotG(msbN)} colour={DEMAND} label="MSB = MPB" lx={gx(7.6)} ly={gy(2.9)} />

      {/* The external cost is the vertical distance between MPC and MSC. */}
      <Seg x1={gx(2)} y1={gy(mpcN(2))} x2={gx(2)} y2={gy(mscN(2))} colour={LOSS} width={1.4} />
      <Text x={gx(2)} y={gy(7.2)} colour={LOSS} size="note">
        external cost
      </Text>

      <Guides x={gx(QM_NEG)} y={gy(msbN(QM_NEG))} xText="Qm" yText="Pm" />
      <Guides x={gx(QS_NEG)} y={gy(mscN(QS_NEG))} xText="Q*" yText="P*" />
      <Note x={gx(6.4)} y={gy(11.4)} colour={LOSS}>welfare loss</Note>
      <ShiftArrow x1={gx(6.2)} y1={gy(11)} x2={gx(5.9)} y2={gy(8.4)} colour={LOSS} />
      <Note x={gx(1.2)} y={gy(0.3)} anchor="start">over-production: Qm &gt; Q*</Note>
    </Figure>
  )
}

function PositiveConsumptionExternality() {
  return (
    <Figure
      title="Positive consumption externality"
      desc="Marginal private benefit below marginal social benefit, with an upward sloping marginal social cost curve. The free market quantity is below the social optimum, and the triangle between them is shaded as welfare loss from under-consumption."
      caption="Consumers weigh only their private benefit, so consumption settles at Qm where MPB = MSC. Because third parties also gain, MSB lies above MPB by the external benefit and the social optimum Q* is higher - the good is under-consumed, and the shaded triangle is the welfare lost."
    >
      <Axes xLabel="Quantity" yLabel="Costs / benefits" />
      <Shade
        points={`${gx(QM_MERIT)},${gy(mscM(QM_MERIT))} ${gx(QM_MERIT)},${gy(msbM(QM_MERIT))} ${gx(QS_MERIT)},${gy(mscM(QS_MERIT))}`}
        fill={LOSS}
        opacity="0.45"
      />
      <Curve d={plotG(mscM)} colour={SUPPLY} label="MSC = MPC = S" lx={gx(7.4)} ly={gy(8.6)} />
      <Curve d={plotG(mpbM)} colour={DEMAND} label="MPB = D" lx={gx(8.1)} ly={gy(mpbM(8.1)) + 14} />
      <Curve d={plotG(msbM)} colour={SOCIAL} dashed label="MSB" lx={gx(8.6)} ly={gy(msbM(8.6)) + 14} />

      {/* The external benefit is the vertical distance between MPB and MSB. */}
      <Seg x1={gx(1.6)} y1={gy(mpbM(1.6))} x2={gx(1.6)} y2={gy(msbM(1.6))} colour={SOCIAL} width={1.4} />
      <Text x={gx(1.6) + 6} y={(gy(mpbM(1.6)) + gy(msbM(1.6))) / 2 + 4} anchor="start" colour={SOCIAL} size="note">
        external benefit
      </Text>

      <Guides x={gx(QM_MERIT)} y={gy(mscM(QM_MERIT))} xText="Qm" yText="Pm" />
      <Guides x={gx(QS_MERIT)} y={gy(mscM(QS_MERIT))} xText="Q*" yText="P*" />
      <Note x={gx(6.4)} y={gy(9.2)} colour={LOSS}>welfare loss</Note>
      <Note x={gx(1.2)} y={gy(0.5)} anchor="start">under-consumption: Qm &lt; Q*</Note>
    </Figure>
  )
}

function IndirectTax() {
  return (
    <Figure
      title="Indirect tax"
      desc="A supply curve shifted upward and left by the amount of a per-unit tax, raising price to consumers and lowering quantity, with the tax revenue rectangle marked."
      caption="A specific tax shifts supply up by the tax per unit. The consumer price rises from P₁ to Pc and quantity falls to Q₂; producers keep Pp = Pc − tax. The consumer bears the shaded upper band and the producer the lower one - here demand is the more inelastic side, so the consumer bears more. Government revenue is the whole rectangle, tax × Q₂."
    >
      <Axes xLabel="Quantity" yLabel="Price" />

      {/* Incidence: consumer band above the old price, producer band below. */}
      <Shade points={`${O.x},${ty(TAX_PC)} ${tx(TAX_Q1)},${ty(TAX_PC)} ${tx(TAX_Q1)},${ty(TAX_P0)} ${O.x},${ty(TAX_P0)}`} fill={DEMAND} opacity="0.3" />
      <Shade points={`${O.x},${ty(TAX_P0)} ${tx(TAX_Q1)},${ty(TAX_P0)} ${tx(TAX_Q1)},${ty(TAX_PP)} ${O.x},${ty(TAX_PP)}`} fill={SUPPLY} opacity="0.3" />

      <Curve d={plotT(taxD, 0, 7.4)} colour={DEMAND} label="D" lx={tx(7.2)} ly={ty(taxD(6.9))} />
      <Curve d={plotT(taxS)} colour={SUPPLY} label="S" lx={tx(7.6)} ly={ty(taxS(7.6)) + 14} />
      <Curve d={plotT(taxSPlus)} colour={SOCIAL} dashed label="S + tax" lx={tx(7)} ly={ty(taxSPlus(7)) - 8} />

      <Guides x={tx(TAX_Q0)} y={ty(TAX_P0)} xText="Q₁" yText="P₁" />
      <Guides x={tx(TAX_Q1)} y={ty(TAX_PC)} xText="Q₂" yText="Pc" />
      <Seg x1={O.x} y1={ty(TAX_PP)} x2={tx(TAX_Q1)} y2={ty(TAX_PP)} colour="var(--muted)" width={1} dashed />
      <Note x={O.x - 6} y={ty(TAX_PP) + 4} anchor="end">Pp</Note>

      <Seg x1={tx(1)} y1={ty(taxS(1))} x2={tx(1)} y2={ty(taxSPlus(1))} colour={SOCIAL} width={1.6} />
      <Text x={tx(1) - 6} y={ty(2.75) + 4} anchor="end" colour={SOCIAL} size="note">
        tax
      </Text>
      <rect x={tx(4.6)} y={ty(9.2)} width={11} height={9} fill={DEMAND} fillOpacity="0.45" />
      <Text x={tx(4.9)} y={ty(9.2) + 8} anchor="start" colour={DEMAND} size="note">consumer burden</Text>
      <rect x={tx(4.6)} y={ty(8.2)} width={11} height={9} fill={SUPPLY} fillOpacity="0.45" />
      <Text x={tx(4.9)} y={ty(8.2) + 8} anchor="start" colour={SUPPLY} size="note">producer burden</Text>
    </Figure>
  )
}

function Subsidy() {
  return (
    <Figure
      title="Subsidy"
      desc="A supply curve shifted down and right by the amount of a per-unit subsidy, lowering price to consumers and raising quantity traded."
      caption="A subsidy lowers producers' costs, shifting supply down by the subsidy per unit. Quantity rises to Q₂, consumers pay only Pc while producers receive Pp = Pc + subsidy. The shaded rectangle, subsidy × Q₂, is the cost to government - used to raise consumption of a merit good towards the social optimum."
    >
      <Axes xLabel="Quantity" yLabel="Price" />

      {/* The whole rectangle is the government's cost, split at the old price. */}
      <Shade points={`${O.x},${ty(SUB_PP)} ${tx(SUB_Q1)},${ty(SUB_PP)} ${tx(SUB_Q1)},${ty(SUB_P0)} ${O.x},${ty(SUB_P0)}`} fill={SUPPLY} opacity="0.3" />
      <Shade points={`${O.x},${ty(SUB_P0)} ${tx(SUB_Q1)},${ty(SUB_P0)} ${tx(SUB_Q1)},${ty(SUB_PC)} ${O.x},${ty(SUB_PC)}`} fill={DEMAND} opacity="0.3" />

      <Curve d={plotT(taxD, 0, 7)} colour={DEMAND} label="D" lx={tx(7.2)} ly={ty(taxD(7))} />
      <Curve d={plotT(subS)} colour={SUPPLY} label="S" lx={tx(7.6)} ly={ty(subS(7.6)) - 8} />
      <Curve d={plotT(subSLess)} colour={SOCIAL} dashed label="S + subsidy" lx={tx(6.4)} ly={ty(subSLess(6.4)) + 14} />

      <Guides x={tx(SUB_Q0)} y={ty(SUB_P0)} xText="Q₁" yText="P₁" />
      <Guides x={tx(SUB_Q1)} y={ty(SUB_PC)} xText="Q₂" yText="Pc" />
      <Seg x1={O.x} y1={ty(SUB_PP)} x2={tx(SUB_Q1)} y2={ty(SUB_PP)} colour="var(--muted)" width={1} dashed />
      <Note x={O.x - 6} y={ty(SUB_PP) + 4} anchor="end">Pp</Note>

      <Seg x1={tx(1.2)} y1={ty(subSLess(1.2))} x2={tx(1.2)} y2={ty(subS(1.2))} colour={SOCIAL} width={1.6} />
      <Text x={tx(1.2) - 6} y={ty(1.5) + 4} anchor="end" colour={SOCIAL} size="note">
        subsidy
      </Text>
      <rect x={tx(4.6)} y={ty(9.2)} width={11} height={9} fill={DEMAND} fillOpacity="0.45" />
      <Text x={tx(4.9)} y={ty(9.2) + 8} anchor="start" colour={DEMAND} size="note">consumer gain</Text>
      <rect x={tx(4.6)} y={ty(8.2)} width={11} height={9} fill={SUPPLY} fillOpacity="0.45" />
      <Text x={tx(4.9)} y={ty(8.2) + 8} anchor="start" colour={SUPPLY} size="note">producer gain</Text>
    </Figure>
  )
}

function MinimumPrice() {
  return (
    <Figure
      title="Minimum price"
      desc="A horizontal price floor above the market equilibrium, with quantity supplied exceeding quantity demanded, and the excess supply marked between the two."
      caption="Set above equilibrium, a minimum price cuts consumption from Q₁ to Qd but raises quantity supplied to Qs. The gap between them is excess supply, which the government must buy up or leave unsold."
    >
      <Axes xLabel="Quantity" yLabel="Price" />
      <Curve d={`M ${px(0.05)} ${py(0.95)} L ${px(0.9)} ${py(0.1)}`} colour={DEMAND} label="D" lx={px(0.92)} ly={py(0.1)} />
      <Curve d={`M ${px(0.05)} ${py(0.1)} L ${px(0.9)} ${py(0.9)}`} colour={SUPPLY} label="S" lx={px(0.92)} ly={py(0.9)} />
      <line x1={O.x} y1={py(0.68)} x2={RIGHT - 15} y2={py(0.68)} stroke={LOSS} strokeWidth="2" />
      <Note x={RIGHT - 12} y={py(0.68) - 6} anchor="end" colour={LOSS}>Min price</Note>
      <Guides x={px(0.31)} y={py(0.68)} xText="Qd" />
      <Guides x={px(0.66)} y={py(0.68)} xText="Qs" />
      <line x1={px(0.31)} y1={py(0.74)} x2={px(0.66)} y2={py(0.74)} stroke={LOSS} strokeWidth="1.4" strokeDasharray="4 3" />
      <Note x={px(0.48)} y={py(0.79)} colour={LOSS}>excess supply</Note>
    </Figure>
  )
}

function MaximumPrice() {
  return (
    <Figure
      title="Maximum price"
      desc="A horizontal price ceiling below the market equilibrium, with quantity demanded exceeding quantity supplied, and the shortage marked between the two."
      caption="Set below equilibrium, a maximum price keeps the good affordable but quantity supplied falls to Qs while demand rises to Qd. The gap is a shortage, typically rationed by queues or waiting lists."
    >
      <Axes xLabel="Quantity" yLabel="Price" />
      <Curve d={`M ${px(0.05)} ${py(0.95)} L ${px(0.9)} ${py(0.1)}`} colour={DEMAND} label="D" lx={px(0.92)} ly={py(0.1)} />
      <Curve d={`M ${px(0.05)} ${py(0.1)} L ${px(0.9)} ${py(0.9)}`} colour={SUPPLY} label="S" lx={px(0.92)} ly={py(0.9)} />
      <line x1={O.x} y1={py(0.34)} x2={RIGHT - 15} y2={py(0.34)} stroke={LOSS} strokeWidth="2" />
      <Note x={RIGHT - 12} y={py(0.34) - 6} anchor="end" colour={LOSS}>Max price</Note>
      <Guides x={px(0.29)} y={py(0.34)} xText="Qs" />
      <Guides x={px(0.66)} y={py(0.34)} xText="Qd" />
      <line x1={px(0.29)} y1={py(0.27)} x2={px(0.66)} y2={py(0.27)} stroke={LOSS} strokeWidth="1.4" strokeDasharray="4 3" />
      <Note x={px(0.47)} y={py(0.21)} colour={LOSS}>shortage</Note>
    </Figure>
  )
}

/* ------------------------------------------------------------ THEME 2 */

function ADAS() {
  return (
    <Figure
      title="AD/AS with a Keynesian AS curve"
      desc="Aggregate demand crossing an aggregate supply curve that is horizontal at low output, upward sloping in the middle, and vertical at full capacity."
      caption="Where there is spare capacity the AS curve is flat, so extra demand raises output with little inflation. Near full capacity it is vertical, so extra demand raises only the price level. The middle range trades some of each."
    >
      <Axes xLabel="Real output (Y)" yLabel="Price level" />
      {(() => {
        const as = keynesianAS()
        const ad = linearAD(0.98, 1)
        const e = keynesianEquilibrium(as, ad)
        return (
          <g>
            <Curve d={asPath(as)} colour={SUPPLY} label="AS" lx={px(as.yf) + 8} ly={py(0.85)} />
            <Curve d={adPath(ad, 0.1, 0.9)} colour={DEMAND} label="AD₁" lx={px(0.9) + 4} ly={py(ad.p(0.9))} />
            <Guides x={px(e.y)} y={py(e.p)} xText="Y₁" yText="P₁" />
            <line x1={px(as.yf)} y1={TOP} x2={px(as.yf)} y2={O.y} stroke="var(--muted)" strokeWidth="1" strokeDasharray="2 4" />
            <Note x={px(as.yf)} y={TOP - 4}>full capacity (Yf)</Note>
            <Note x={px(0.2)} y={py(as.floor) - 8}>spare capacity: flat</Note>
          </g>
        )
      })()}
    </Figure>
  )
}

function LRASShift() {
  return (
    <Figure
      title="Long-run aggregate supply shifting right"
      desc="A Keynesian long-run aggregate supply curve - flat, then curving, then vertical at full capacity - moving to the right, with aggregate demand fixed, showing output rising and the price level falling."
      caption="Supply-side improvements - investment, education, technology - raise productive capacity: the whole Keynesian LRAS curve shifts right, so full capacity moves from Yf₁ to Yf₂. With AD unchanged, output rises from Y₁ to Y₂ while the price level falls from P₁ to P₂, which is why supply-side growth is described as non-inflationary. (The classical version is a vertical line moving right.)"
    >
      <Axes xLabel="Real output (Y)" yLabel="Price level" />
      {(() => {
        const as1 = keynesianAS({ y0: 0.3, yf: 0.58 })
        const as2 = keynesianAS({ y0: 0.54, yf: 0.82 })
        const ad = linearAD(1, 1.05)
        const e1 = keynesianEquilibrium(as1, ad)
        const e2 = keynesianEquilibrium(as2, ad)
        return (
          <g>
            <Curve d={asPath(as1)} colour={SUPPLY} label="LRAS₁" lx={px(as1.yf) - 44} ly={TOP + 6} />
            <Curve d={asPath(as2)} colour={SOCIAL} dashed label="LRAS₂" lx={px(as2.yf) + 6} ly={TOP + 6} />
            <Curve d={adPath(ad, 0.1, 0.9)} colour={DEMAND} label="AD" lx={px(0.9) + 4} ly={py(ad.p(0.9))} />
            <Guides x={px(e1.y)} y={py(e1.p)} xText="Y₁" yText="P₁" />
            <Guides x={px(e2.y)} y={py(e2.p)} xText="Y₂" yText="P₂" />
            <ShiftArrow x1={px(as1.yf) + 4} y1={py(0.75)} x2={px(as2.yf) - 4} y2={py(0.75)} colour={SOCIAL} />
          </g>
        )
      })()}
    </Figure>
  )
}

function CostPush() {
  return (
    <Figure
      title="Cost-push inflation"
      desc="A Keynesian aggregate supply curve shifting up and to the left with aggregate demand unchanged, raising the price level while reducing real output."
      caption="A rise in costs - oil, wages, imported inputs - shifts the AS curve up and left, from AS₁ to AS₂. The price level rises from P₁ to P₂ while output falls from Y₁ to Y₂: stagflation, the signature of cost-push. Tightening demand to fight the inflation would deepen the fall in output."
    >
      <Axes xLabel="Real output (Y)" yLabel="Price level" />
      {(() => {
        const as1 = keynesianAS()
        const as2 = keynesianAS({ floor: 0.34, y0: 0.3, yf: 0.66, top: 0.95 })
        const ad = linearAD(1, 1)
        const e1 = keynesianEquilibrium(as1, ad)
        const e2 = keynesianEquilibrium(as2, ad)
        return (
          <g>
            <Curve d={asPath(as1)} colour={SUPPLY} label="AS₁" lx={px(as1.yf) + 6} ly={py(0.82)} />
            <Curve d={asPath(as2)} colour={LOSS} dashed label="AS₂" lx={px(as2.yf) - 40} ly={TOP + 6} />
            <Curve d={adPath(ad, 0.12, 0.9)} colour={DEMAND} label="AD" lx={px(0.9) + 4} ly={py(ad.p(0.9))} />
            <Guides x={px(e1.y)} y={py(e1.p)} xText="Y₁" yText="P₁" />
            <Guides x={px(e2.y)} y={py(e2.p)} xText="Y₂" yText="P₂" />
            <ShiftArrow x1={px(0.2)} y1={py(as1.floor) + 4} x2={px(0.2)} y2={py(as2.floor) - 4} colour={LOSS} />
          </g>
        )
      })()}
    </Figure>
  )
}

function CircularFlow() {
  return (
    <Figure
      title="The circular flow of income"
      desc="Households and firms connected by two flows, with injections of investment, government spending and exports entering the flow and withdrawals of savings, taxation and imports leaving it."
      caption="Income circulates between households and firms. Injections (I, G, X) add to the flow and withdrawals (S, T, M) leak out of it. National income is in equilibrium when injections equal withdrawals."
    >
      <rect x={px(0.04)} y={py(0.72)} width="108" height="46" rx="10" fill="var(--brand-soft)" stroke={DEMAND} strokeWidth="1.6" />
      <text x={px(0.04) + 54} y={py(0.72) + 28} textAnchor="middle" className="econ-label" fill="var(--fg)">Households</text>
      <rect x={px(0.63)} y={py(0.72)} width="108" height="46" rx="10" fill="var(--brand-soft)" stroke={DEMAND} strokeWidth="1.6" />
      <text x={px(0.63) + 54} y={py(0.72) + 28} textAnchor="middle" className="econ-label" fill="var(--fg)">Firms</text>
      <ShiftArrow x1={px(0.28)} y1={py(0.82)} x2={px(0.62)} y2={py(0.82)} colour={DEMAND} />
      <Note x={px(0.45)} y={py(0.9)}>spending on goods</Note>
      <ShiftArrow x1={px(0.62)} y1={py(0.62)} x2={px(0.28)} y2={py(0.62)} colour={DEMAND} />
      <Note x={px(0.45)} y={py(0.55)}>wages, rent, profit</Note>
      <ShiftArrow x1={px(0.45)} y1={py(0.34)} x2={px(0.45)} y2={py(0.56)} colour={SOCIAL} />
      <Note x={px(0.45)} y={py(0.28)} colour={SOCIAL}>Injections: I + G + X</Note>
      <ShiftArrow x1={px(0.2)} y1={py(0.68)} x2={px(0.2)} y2={py(0.4)} colour={LOSS} />
      <Note x={px(0.16)} y={py(0.34)} colour={LOSS}>Withdrawals:</Note>
      <Note x={px(0.16)} y={py(0.24)} colour={LOSS}>S + T + M</Note>
    </Figure>
  )
}

function PhillipsCurve() {
  return (
    <Figure
      title="The short-run Phillips curve"
      desc="A downward sloping curve showing the inverse relationship between the rate of inflation and the rate of unemployment, crossing the horizontal axis at the natural rate."
      caption="In the short run there is a trade-off: reducing unemployment below the natural rate raises inflation. In the long run the curve is vertical at the natural rate, so the trade-off disappears."
    >
      <Axes xLabel="Unemployment %" yLabel="Inflation %" />
      <Curve
        d={`M ${px(0.08)} ${py(0.92)} Q ${px(0.3)} ${py(0.4)} ${px(0.92)} ${py(0.18)}`}
        colour={DEMAND}
        label="SRPC"
        lx={px(0.78)}
        ly={py(0.28)}
      />
      <line x1={px(0.55)} y1={TOP} x2={px(0.55)} y2={O.y} stroke={SUPPLY} strokeWidth="2" strokeDasharray="5 4" />
      <text x={px(0.55)} y={TOP - 6} textAnchor="middle" className="econ-label" fill={SUPPLY}>LRPC</text>
      <Note x={px(0.55)} y={O.y + 30}>natural rate</Note>
    </Figure>
  )
}

function LafferCurve() {
  return (
    <Figure
      title="The Laffer curve"
      desc="An inverted U-shaped curve showing tax revenue rising with the tax rate up to a peak, then falling as the rate rises further towards 100 per cent."
      caption="Revenue is zero at a 0% rate and again at 100%, since nobody works for nothing. Beyond the peak, higher rates reduce revenue through weaker incentives, avoidance and emigration."
    >
      <Axes xLabel="Tax rate %" yLabel="Tax revenue" />
      <Curve
        d={`M ${px(0.04)} ${py(0.02)} Q ${px(0.5)} ${py(1.5)} ${px(0.96)} ${py(0.02)}`}
        colour={DEMAND}
      />
      <line x1={px(0.5)} y1={py(0.76)} x2={px(0.5)} y2={O.y} stroke="var(--muted)" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx={px(0.5)} cy={py(0.76)} r="3.4" fill="var(--fg)" />
      <Note x={px(0.5)} y={py(0.83)}>revenue-maximising rate</Note>
      <Note x={px(0.5)} y={O.y + 15}>T*</Note>
      <Note x={px(0.96)} y={O.y + 15}>100</Note>
    </Figure>
  )
}

/* ------------------------------------------------------------ THEME 3 */

function CostCurves() {
  return (
    <Figure
      title="Short-run cost curves"
      desc="U-shaped average cost and average variable cost curves with a marginal cost curve cutting both at their lowest points."
      caption="MC cuts AC and AVC at their minimum points - the defining relationship. AC falls while MC is below it and rises once MC is above it. The gap between AC and AVC is average fixed cost, which narrows as output rises."
    >
      <Axes xLabel="Output" yLabel="Costs" />
      <Curve d={plotC(acSrOf)} colour={SUPPLY} label="AC" lx={cx(8.7)} ly={cy(acSrOf(8.7)) - 8} />
      <Curve d={plotC(avcOf)} colour={SOCIAL} label="AVC" lx={cx(8.7)} ly={cy(avcOf(8.7)) + 14} />
      <Curve d={plotC(afcOf)} colour={ALT} dashed label="AFC" lx={cx(8.4)} ly={cy(afcOf(8.4)) + 14} />
      <Curve d={plotC(mcSrOf)} colour={DEMAND} label="MC" lx={cx(8.3)} ly={cy(mcSrOf(8.3)) - 8} />

      {/* MC cuts each average curve exactly at its minimum. */}
      <Dot x={cx(AVC_MIN_Q)} y={cy(avcOf(AVC_MIN_Q))} r={3.6} colour={SOCIAL} />
      <Dot x={cx(AC_SR_MIN_Q)} y={cy(acSrOf(AC_SR_MIN_Q))} r={3.6} colour={SUPPLY} />
      <Note x={cx(5.7)} y={cy(0.85)} colour={SOCIAL}>min AVC</Note>
      <Note x={cx(6.1)} y={cy(4.7)} colour={SUPPLY}>min AC</Note>
      <Note x={cx(4.6)} y={cy(7.9)}>MC cuts each average curve at its minimum</Note>

      {/* AFC is the gap between AC and AVC, and it narrows as output rises. */}
      <Seg x1={cx(3)} y1={cy(avcOf(3))} x2={cx(3)} y2={cy(acSrOf(3))} colour={ALT} width={1.4} />
      <Text x={cx(3.2)} y={cy(6.5)} anchor="start" colour={ALT} size="note">
        AFC = AC − AVC
      </Text>
    </Figure>
  )
}

function PerfectCompetitionLongRun() {
  return (
    <Figure
      title="Perfect competition in the long run"
      desc="A horizontal average revenue and marginal revenue line tangent to the lowest point of a U-shaped average cost curve, with marginal cost cutting through that point."
      caption="Free entry competes price down until AR is tangent to the minimum of AC. The firm earns only normal profit, and because it produces at minimum AC with P = MC it is both productively and allocatively efficient."
    >
      {/*
        Plotted from the same AC and MC as the short-run version, with the
        price set to minimum AC. That makes the tangency and the MC crossing
        exact rather than approximately drawn: at q = 4, AC = MC = P = 3.
      */}
      <Axes xLabel="Output" yLabel="Costs / revenue" />
      <Curve d={plotF(acOf)} colour={SUPPLY} label="AC" lx={fcx(4.9)} ly={fcy(acOf(4.9)) - 8} />
      <Curve d={plotF(mcOf)} colour={DEMAND} label="MC" lx={fcx(4.7)} ly={fcy(mcOf(4.7)) + 14} />
      <Seg x1={O.x} y1={fcy(acOf(AC_MIN_Q))} x2={RIGHT - 15} y2={fcy(acOf(AC_MIN_Q))} colour={SOCIAL} width={2.2} />
      <Text x={O.x + 8} y={fcy(acOf(AC_MIN_Q)) - 8} anchor="start" colour={SOCIAL}>
        AR = MR = D = P
      </Text>
      <Guides x={fcx(AC_MIN_Q)} y={fcy(acOf(AC_MIN_Q))} xText="Q*" />
      <Note x={fcx(2.6)} y={fcy(6.2)} anchor="start">normal profit only</Note>
      <Note x={fcx(2.4)} y={fcy(1.7)}>P = MC = min AC</Note>
    </Figure>
  )
}

function Monopoly() {
  return (
    <Figure
      title="Monopoly"
      desc="A downward sloping average revenue curve with marginal revenue below it, marginal cost cutting marginal revenue at the profit maximising output, and price read from the average revenue curve above marginal cost."
      caption="The monopolist produces where MC = MR, at Qm, then charges Pm from the AR curve. Because Pm > AC(Qm) it earns the shaded supernormal profit rectangle, and because Pm > MC the outcome is allocatively inefficient - the red triangle out to the competitive output Qc is the deadweight welfare loss."
    >
      <Axes xLabel="Output" yLabel="Price / cost" />

      {/* Supernormal profit: (Pm − AC) × Qm. */}
      <Shade
        points={`${O.x},${my(arMon(QM_MON))} ${mx(QM_MON)},${my(arMon(QM_MON))} ${mx(QM_MON)},${my(acMon(QM_MON))} ${O.x},${my(acMon(QM_MON))}`}
        fill={SOCIAL}
        opacity="0.28"
      />
      {/* Deadweight loss: between AR and MC, from Qm out to the competitive Qc. */}
      <Shade
        points={`${mx(QM_MON)},${my(arMon(QM_MON))} ${mx(QM_MON)},${my(mcMon(QM_MON))} ${mx(QC_MON)},${my(mcMon(QC_MON))}`}
        fill={LOSS}
        opacity="0.45"
      />

      <Curve d={plotMon(arMon)} colour={DEMAND} label="AR = D" lx={mx(9.4)} ly={my(arMon(9.4)) - 8} />
      <Curve d={plotMon(mrMon, 0.8, 6)} colour={SOCIAL} label="MR" lx={mx(6)} ly={my(0) - 8} />
      <Curve d={plotMon(mcMon)} colour={SUPPLY} label="MC" lx={mx(9.5)} ly={my(mcMon(9.5)) - 8} />
      <Curve d={plotMon(acMon, 1.1, 10)} colour={ALT} label="AC" lx={mx(9.5)} ly={my(acMon(9.5)) + 14} />

      <Guides x={mx(QM_MON)} y={my(arMon(QM_MON))} xText="Qm" yText="Pm" />
      <Seg x1={O.x} y1={my(acMon(QM_MON))} x2={mx(QM_MON)} y2={my(acMon(QM_MON))} colour="var(--muted)" width={1} dashed />
      <Note x={O.x - 6} y={my(acMon(QM_MON)) + 4} anchor="end">AC</Note>
      <Seg x1={mx(QC_MON)} y1={my(mcMon(QC_MON))} x2={mx(QC_MON)} y2={O.y} colour="var(--muted)" width={1} dashed />
      <Note x={mx(QC_MON)} y={O.y + 15}>Qc</Note>

      <Note x={mx(2.1)} y={my(6.6)} colour={SOCIAL}>supernormal profit</Note>
      <Note x={mx(7.5)} y={my(2.1)} colour={LOSS}>deadweight loss</Note>
      <ShiftArrow x1={mx(6.9)} y1={my(2.5)} x2={mx(5.5)} y2={my(4.3)} colour={LOSS} />
    </Figure>
  )
}

function KinkedDemand() {
  return (
    <Figure
      title="The kinked demand curve"
      desc="A demand curve that is elastic above the current price and inelastic below it, producing a kink, with a marginal revenue curve that has a vertical discontinuity beneath the kink."
      caption="Rivals match a price cut but not a price rise, so demand is elastic above P₁ and inelastic below it. The gap in the MR curve means marginal cost can move anywhere within it without changing the profit-maximising price - so prices are sticky."
    >
      <Axes xLabel="Output" yLabel="Price" />
      <Curve d={`M ${px(0.08)} ${py(0.95)} L ${px(0.45)} ${py(0.6)}`} colour={DEMAND} />
      <Curve d={`M ${px(0.45)} ${py(0.6)} L ${px(0.92)} ${py(0.12)}`} colour={DEMAND} label="AR = D" lx={px(0.94)} ly={py(0.12)} />
      <Curve d={`M ${px(0.08)} ${py(0.9)} L ${px(0.45)} ${py(0.36)}`} colour={SOCIAL} />
      <line x1={px(0.45)} y1={py(0.36)} x2={px(0.45)} y2={py(0.1)} stroke={SOCIAL} strokeWidth="2.2" strokeDasharray="4 3" />
      <Curve d={`M ${px(0.45)} ${py(0.1)} L ${px(0.72)} ${py(-0.04)}`} colour={SOCIAL} label="MR" lx={px(0.74)} ly={py(0.0)} />
      <Guides x={px(0.45)} y={py(0.6)} xText="Q₁" yText="P₁" />
      <Note x={px(0.2)} y={py(0.3)} anchor="start">MC can shift</Note>
      <Note x={px(0.2)} y={py(0.2)} anchor="start">within the gap</Note>
    </Figure>
  )
}

function BusinessObjectives() {
  return (
    <Figure
      title="Profit, revenue and sales maximisation"
      desc="A downward sloping average revenue curve with marginal revenue below it, marginal cost and average cost curves, and three output levels marked: profit maximisation where MC equals MR, revenue maximisation where MR is zero, and sales maximisation where AR equals AC."
      caption="Profit is maximised where MC = MR, revenue where MR = 0, and sales where AR = AC (the largest output still earning normal profit). Each objective gives a higher output and a lower price than the one before it."
    >
      <Axes xLabel="Output" yLabel="Price / cost / revenue" />
      <Curve d={`M ${px(0.04)} ${py(0.95)} L ${px(0.94)} ${py(0.12)}`} colour={DEMAND} label="AR" lx={px(0.95)} ly={py(0.1)} />
      <Curve d={`M ${px(0.04)} ${py(0.95)} L ${px(0.555)} ${py(0)}`} colour={SOCIAL} label="MR" lx={px(0.5)} ly={py(0.08)} />
      <Curve d={`M ${px(0.06)} ${py(0.2)} L ${px(0.9)} ${py(0.68)}`} colour={SUPPLY} label="MC" lx={px(0.92)} ly={py(0.68)} />
      <Curve
        d={`M ${px(0.1)} ${py(0.62)} Q ${px(0.45)} ${py(0.3)} ${px(0.9)} ${py(0.56)}`}
        colour="var(--muted)"
        label="AC"
        lx={px(0.92)}
        ly={py(0.52)}
        width="1.8"
      />
      {/* Guide points sit exactly on the curves' own intersections (solved
          algebraically from the paths above), not eyeballed - each dot has
          to land ON MC/MR/AC/AR or it reads as a diagram error. */}
      <Guides x={px(0.355)} y={py(0.369)} xText="Qπ" />
      <Guides x={px(0.555)} y={py(0)} xText="Qr" />
      {/* Qs sits only 0.03 to the right of Qr - genuinely, per the curves
          above - so its own xText would print right on top of Qr's.
          Bumped to its own line instead of moving either point. */}
      <Guides x={px(0.585)} y={py(0.448)} />
      <Note x={px(0.585) + 6} y={O.y + 15} anchor="start">Qs</Note>
      {/* Under the x-axis, not inside the plot: at 400 wide these two
          lines ran straight through the AR curve and the Qs guide. */}
      <Note x={200} y={O.y + 34}>Qπ: MC = MR · Qr: MR = 0 · Qs: AR = AC</Note>
    </Figure>
  )
}

function ConsumptionFunction() {
  return (
    <Figure
      title="The consumption function"
      desc="A consumption line rising with disposable income, crossing a 45 degree line at the break-even point, with autonomous consumption as a positive intercept and saving shown as the gap above the line."
      caption="Consumption has an autonomous part (spent even at zero income, funded by borrowing or past saving) plus a share of each extra pound - the MPC, which is the gradient. Where C crosses the 45° line, all income is spent; to the right of it households save."
    >
      <Axes xLabel="Disposable income (Y)" yLabel="Consumption (C)" />
      <Curve d={`M ${px(0)} ${py(0)} L ${px(0.95)} ${py(0.95)}`} colour="var(--muted)" label="45°" lx={px(0.9)} ly={py(0.99)} width="1.4" />
      <Curve d={`M ${px(0)} ${py(0.22)} L ${px(0.95)} ${py(0.8)}`} colour={DEMAND} label="C" lx={px(0.96)} ly={py(0.8)} />
      <circle cx={px(0.565)} cy={py(0.565)} r="3.4" fill="var(--fg)" />
      <Note x={px(0.565)} y={py(0.565) - 9}>break-even</Note>
      <Note x={O.x - 6} y={py(0.22) + 4} anchor="end">a</Note>
      <Note x={px(0.78)} y={py(0.94)} colour={SOCIAL}>saving</Note>
      <Note x={px(0.22)} y={py(0.1)} colour={LOSS}>dissaving</Note>
    </Figure>
  )
}

function EconomiesOfScale() {
  return (
    <Figure
      title="Economies and diseconomies of scale"
      desc="A long-run average cost curve falling as output rises, flattening at the minimum efficient scale, then rising as diseconomies set in."
      caption="Long-run average cost falls through economies of scale until the minimum efficient scale, then rises as coordination and communication problems create diseconomies. Where MES is large relative to the market, only a few firms can be efficient."
    >
      <Axes xLabel="Output" yLabel="Long-run average cost" />
      <Curve
        d={`M ${px(0.08)} ${py(0.92)} Q ${px(0.42)} ${py(0.1)} ${px(0.92)} ${py(0.74)}`}
        colour={SUPPLY}
        label="LRAC"
        lx={px(0.9)}
        ly={py(0.82)}
      />
      <line x1={px(0.48)} y1={py(0.36)} x2={px(0.48)} y2={O.y} stroke="var(--muted)" strokeWidth="1" strokeDasharray="3 3" />
      <Note x={px(0.48)} y={O.y + 15}>MES</Note>
      <Note x={px(0.22)} y={py(0.42)} anchor="middle" colour={SOCIAL}>economies</Note>
      <Note x={px(0.78)} y={py(0.42)} anchor="middle" colour={LOSS}>diseconomies</Note>
    </Figure>
  )
}

function LabourMarket() {
  return (
    <Figure
      title="Wage determination in a competitive labour market"
      desc="A downward sloping labour demand curve crossing an upward sloping labour supply curve, setting the equilibrium wage and level of employment."
      caption="Demand for labour is its marginal revenue product; supply rises with the wage. The market clears at W₁, Q₁. A minimum wage set above W₁ creates excess supply of labour - unemployment."
    >
      <Axes xLabel="Quantity of labour" yLabel="Wage rate" />
      <Curve d={`M ${px(0.05)} ${py(0.12)} L ${px(0.9)} ${py(0.9)}`} colour={SUPPLY} label="S(L)" lx={px(0.92)} ly={py(0.9)} />
      <Curve d={`M ${px(0.05)} ${py(0.92)} L ${px(0.9)} ${py(0.12)}`} colour={DEMAND} label="D(L) = MRP" lx={px(0.58)} ly={py(0.12)} />
      <Guides x={px(0.475)} y={py(0.5)} xText="Q₁" yText="W₁" />
      <line x1={O.x} y1={py(0.7)} x2={RIGHT - 15} y2={py(0.7)} stroke={LOSS} strokeWidth="1.8" strokeDasharray="5 4" />
      <Note x={RIGHT - 12} y={py(0.7) - 6} anchor="end" colour={LOSS}>minimum wage</Note>
    </Figure>
  )
}

/* ------------------------------------------------------------ THEME 4 */

function ExchangeRate() {
  return (
    <Figure
      title="Exchange rate determination"
      desc="Demand for and supply of a currency on the foreign exchange market, with an increase in demand raising the exchange rate."
      caption="The exchange rate is set by demand for and supply of the currency. Higher interest rates or stronger exports raise demand for sterling, shifting D right and appreciating the pound."
    >
      <Axes xLabel="Quantity of £" yLabel="Exchange rate ($ per £)" />
      <Curve d={`M ${px(0.03)} ${py(0.8)} L ${px(0.66)} ${py(0.1)}`} colour={DEMAND} label="D₁" lx={px(0.66)} ly={py(0.06)} />
      <Curve d={`M ${px(0.25)} ${py(0.95)} L ${px(0.92)} ${py(0.26)}`} colour={SOCIAL} label="D₂" lx={px(0.94)} ly={py(0.24)} />
      <Curve d={`M ${px(0.05)} ${py(0.08)} L ${px(0.9)} ${py(0.86)}`} colour={SUPPLY} label="S" lx={px(0.92)} ly={py(0.86)} />
      <Guides x={px(0.35)} y={py(0.36)} xText="Q₁" yText="e₁" />
      <Guides x={px(0.55)} y={py(0.55)} xText="Q₂" yText="e₂" />
    </Figure>
  )
}

function JCurve() {
  return (
    <Figure
      title="The J-curve"
      desc="A line showing the current account balance falling immediately after a depreciation before rising above its original level over time, tracing a J shape."
      caption="Demand is price inelastic in the short run, so a depreciation raises the import bill before export volumes respond - the balance worsens first. As demand becomes more elastic it improves, tracing a J."
    >
      <Axes xLabel="Time" yLabel="Current account balance" />
      <line x1={O.x} y1={py(0.55)} x2={RIGHT} y2={py(0.55)} stroke="var(--muted)" strokeWidth="1" strokeDasharray="3 3" />
      <Note x={O.x - 8} y={py(0.55) + 4} anchor="end">0</Note>
      <Curve
        d={`M ${px(0.06)} ${py(0.55)} Q ${px(0.22)} ${py(0.18)} ${px(0.42)} ${py(0.24)} Q ${px(0.7)} ${py(0.32)} ${px(0.94)} ${py(0.86)}`}
        colour={DEMAND}
      />
      <line x1={px(0.06)} y1={TOP + 6} x2={px(0.06)} y2={O.y} stroke={LOSS} strokeWidth="1.2" strokeDasharray="4 3" />
      <Note x={px(0.1)} y={TOP + 4} anchor="start" colour={LOSS}>depreciation</Note>
      <Note x={px(0.28)} y={py(0.1)} colour={LOSS}>worsens first</Note>
    </Figure>
  )
}

function LorenzCurve() {
  return (
    <Figure
      title="The Lorenz curve and Gini coefficient"
      desc="A 45 degree line of perfect equality with a Lorenz curve bowing below it, and the area between them shaded."
      caption="The Lorenz curve plots cumulative income against cumulative population. The further it bows from the 45° line the greater the inequality. The Gini coefficient is the shaded area A divided by A + B."
    >
      <Axes xLabel="Cumulative % of population" yLabel="Cumulative % of income" />
      <line x1={px(0)} y1={py(0)} x2={px(1)} y2={py(1)} stroke={SOCIAL} strokeWidth="2" />
      <text x={px(0.56)} y={py(0.66)} textAnchor="end" className="econ-label" fill={SOCIAL}>perfect equality (45°)</text>
      <path
        d={`M ${px(0)} ${py(0)} Q ${px(0.62)} ${py(0.1)} ${px(1)} ${py(1)}`}
        fill="none"
        stroke={DEMAND}
        strokeWidth="2.2"
      />
      <text x={px(0.66)} y={py(0.28)} className="econ-label" fill={DEMAND}>Lorenz curve</text>
      <path
        d={`M ${px(0)} ${py(0)} L ${px(1)} ${py(1)} Q ${px(0.62)} ${py(0.1)} ${px(0)} ${py(0)}`}
        fill={LOSS}
        opacity="0.25"
      />
      {/* Region A is bounded by the diagonal (y=x=0.42 here) above and the
          curve (y≈0.179 here) below - 0.46 sat just outside it, above the
          diagonal. 0.30 sits centred in the (0.179, 0.42) band. */}
      <Note x={px(0.42)} y={py(0.3)} colour={LOSS}>A</Note>
      <Note x={px(0.66)} y={py(0.12)}>B</Note>
    </Figure>
  )
}

function ComparativeAdvantage() {
  return (
    <Figure
      title="Gains from trade"
      desc="A production possibility frontier with a steeper trade line running through the point of complete specialisation, allowing consumption beyond the frontier."
      caption="By specialising where its opportunity cost is lower and trading at the world price, a country can consume at a point outside its own PPF - the gain from trade, available even to a country with an absolute advantage in both goods."
    >
      <Axes xLabel="Good X" yLabel="Good Y" />
      <Curve d={`M ${px(0.06)} ${py(0.82)} L ${px(0.62)} ${py(0.06)}`} colour={SUPPLY} label="PPF" lx={px(0.36)} ly={py(0.3)} />
      {/* The trade line has to pass through BOTH the specialisation point
          and the consumption point below - it is the world-price line the
          country moves along between the two, so both are its anchors
          rather than a line eyeballed near them. */}
      <Curve d={`M ${px(0.416)} ${py(1)} L ${px(0.633)} ${py(0)}`} colour={SOCIAL} dashed label="trade line" lx={px(0.46)} ly={py(0.87)} />
      <circle cx={px(0.62)} cy={py(0.06)} r="3.6" fill="var(--fg)" />
      <circle cx={px(0.52)} cy={py(0.52)} r="3.6" fill={DEMAND} />
      <Note x={px(0.52)} y={py(0.52) - 9} colour={DEMAND}>consumption</Note>
      <Note x={px(0.2)} y={py(0.12)} anchor="start">specialise here</Note>
    </Figure>
  )
}

/* ------------------------------------------------------------ REGISTRY */

export const ECON_DIAGRAMS = {
  ppf: PPF,
  'ppf-shift': PPFShift,
  'supply-demand': SupplyDemand,
  'demand-shift': DemandShift,
  elasticity: Elasticity,
  'negative-externality': NegativeProductionExternality,
  'positive-externality': PositiveConsumptionExternality,
  'indirect-tax': IndirectTax,
  subsidy: Subsidy,
  'minimum-price': MinimumPrice,
  'maximum-price': MaximumPrice,
  'ad-as': ADAS,
  'lras-shift': LRASShift,
  'cost-push': CostPush,
  'circular-flow': CircularFlow,
  phillips: PhillipsCurve,
  laffer: LafferCurve,
  'cost-curves': CostCurves,
  'perfect-competition': PerfectCompetitionLongRun,
  monopoly: Monopoly,
  'kinked-demand': KinkedDemand,
  'business-objectives': BusinessObjectives,
  'consumption-function': ConsumptionFunction,
  'economies-of-scale': EconomiesOfScale,
  'labour-market': LabourMarket,
  'exchange-rate': ExchangeRate,
  'j-curve': JCurve,
  'lorenz-curve': LorenzCurve,
  'comparative-advantage': ComparativeAdvantage,
}

