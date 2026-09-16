import {
  Axes, Curve, Guides, Shade, Note, ShiftArrow, Figure, Seg, Dot, Text, Box, Arrow,
  px, py, O, RIGHT, TOP,
} from './primitives'
import {
  acOf, mcOf, arOf, mrOf, AC_MIN_Q, Q_LO, Q_HI, V_HI, P_PC, Q_PC, Q_MC,
  PW, TARIFF, QS_F, QD_F, QS_T, QD_T,
  mscM, mpbM, msbM, QM_MERIT, QS_MERIT,
  keynesianAS, linearAD, keynesianEquilibrium,
} from './econGeometry'

/*
  The rest of the Edexcel Economics A diagram set.

  economics.jsx covers the headline diagrams; this file fills the gaps the
  first pass left, where a chapter was pointed at a generic stand-in rather
  than the diagram the specification actually examines. Price elasticity of
  SUPPLY was the clearest case - the chapter was showing a plain supply-and-
  demand graph, because an elastic-vs-inelastic supply diagram did not exist
  anywhere in the set.

  Same conventions as the rest: demand/benefit blue, supply/cost amber,
  social optimum dashed green, welfare loss shaded red.
*/


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
  The curve equations live in econGeometry.js so a script can import them and
  assert the relationships these diagrams claim - see the note there. Only
  the plot mapping stays here.
*/
const fx = (q) => px(0.04 + ((q - Q_LO) / (Q_HI - Q_LO)) * 0.92)
const fy = (v) => py(0.06 + (v / V_HI) * 0.9)
const plotQ = (f, from = Q_LO, to = Q_HI, step = 0.04) => {
  const pts = []
  for (let q = from; q <= to + 1e-9; q += step) pts.push(`${fx(q)} ${fy(f(q))}`)
  return `M ${pts.join(' L ')}`
}
const tq = (q) => px(0.03 + (q / 10) * 0.94)
const tp = (p) => py(0.05 + (p / 10) * 0.9)

// Merit good plot: quantity 0-9, value 0-13.
const ex = (q) => px(0.04 + (q / 9) * 0.9)
const ey = (v) => py(0.05 + (v / 13) * 0.9)
const plotM = (f, from = 0.2, to = 8.8) => {
  const pts = []
  for (let q = from; q <= to + 1e-9; q += 0.2) pts.push(`${ex(q)} ${ey(f(q))}`)
  return `M ${pts.join(' L ')}`
}

/* ------------------------------------------------- THEME 1: MICRO */

function PesElasticity() {
  return (
    <Figure
      title="Price elasticity of supply"
      desc="Two supply curves on the same axes: a steep curve showing inelastic supply and a shallow curve showing elastic supply, with the same price rise producing very different changes in quantity supplied."
      caption="The SAME price rise produces a large quantity response on the shallow (elastic) curve and a small one on the steep (inelastic) one. PES rises with the time available, spare capacity, the ability to hold stocks and factor mobility - which is why a crop with a long growing season is inelastic in the short run and a factory with idle plant is elastic."
    >
      {/*
        Both supply curves pass through the same starting point so one price
        RISE can be compared across them, and the quantity response is marked
        on each - the response is what PES measures, and it was missing.
      */}
      <Axes xLabel="Quantity" yLabel="Price" />
      <Curve d={`M ${px(0.33)} ${py(0.2)} L ${px(0.47)} ${py(0.8)}`} colour={SUPPLY} label="S (inelastic)" lx={px(0.5)} ly={py(0.84)} />
      <Curve d={`M ${px(0.29)} ${py(0.26)} L ${px(0.93)} ${py(0.74)}`} colour={SOCIAL} label="S (elastic)" lx={px(0.86)} ly={py(0.8)} />

      <Seg x1={O.x} y1={py(0.309)} x2={px(0.95)} y2={py(0.309)} colour="var(--muted)" width={1} dashed />
      <Seg x1={O.x} y1={py(0.66)} x2={px(0.95)} y2={py(0.66)} colour="var(--muted)" width={1} dashed />
      <Note x={O.x - 6} y={py(0.309) + 4} anchor="end">P₁</Note>
      <Note x={O.x - 6} y={py(0.66) + 4} anchor="end">P₂</Note>

      {/* Q1/P1 is where the two curves actually cross (solved from their
          own equations), not the eyeballed value this used to carry - the
          diagram's whole point is that both start from the SAME point. */}
      {[
        [0.355, 0.309, 'Q₁'],
        [0.437, 0.66, 'Q₂'],
        [0.823, 0.66, 'Q₃'],
      ].map(([q, p, label]) => (
        <g key={label}>
          <Seg x1={px(q)} y1={py(p)} x2={px(q)} y2={O.y} colour="var(--muted)" width={1} dashed />
          <Dot x={px(q)} y={py(p)} r={3} colour="var(--fg)" />
          <Note x={px(q)} y={O.y + 15}>{label}</Note>
        </g>
      ))}

      <ShiftArrow x1={px(0.37)} y1={py(0.9)} x2={px(0.43)} y2={py(0.9)} colour={SUPPLY} />
      <Note x={px(0.4)} y={py(0.96)} colour={SUPPLY}>small ΔQs</Note>
      <ShiftArrow x1={px(0.47)} y1={py(0.5)} x2={px(0.8)} y2={py(0.5)} colour={SOCIAL} />
      <Note x={px(0.64)} y={py(0.44)} colour={SOCIAL}>large ΔQs</Note>
      <Note x={px(0.04)} y={py(0.12)} anchor="start">PES = %ΔQs ÷ %ΔP</Note>
    </Figure>
  )
}

function ConsumerProducerSurplus() {
  return (
    <Figure
      title="Consumer and producer surplus"
      desc="A supply and demand diagram with the area above the price and below the demand curve shaded as consumer surplus, and the area below the price and above the supply curve shaded as producer surplus."
      caption="CONSUMER surplus is the area above the price and below demand - what buyers would have paid, minus what they did. PRODUCER surplus is below the price and above supply. Together they are total welfare, which the free market maximises only when there is no market failure."
    >
      <Axes xLabel="Quantity" yLabel="Price" />
      {/* Equilibrium at (0.486, 0.5), solved from the D and S lines below,
          not the eyeballed 0.475 this used to shade to. */}
      <Shade points={`${px(0.05)},${py(0.9)} ${px(0.486)},${py(0.5)} ${px(0.05)},${py(0.5)}`} fill={DEMAND} opacity="0.3" />
      <Shade points={`${px(0.05)},${py(0.1)} ${px(0.486)},${py(0.5)} ${px(0.05)},${py(0.5)}`} fill={SUPPLY} opacity="0.3" />
      <Curve d={`M ${px(0.05)} ${py(0.9)} L ${px(0.9)} ${py(0.12)}`} colour={DEMAND} label="D" lx={px(0.92)} ly={py(0.14)} />
      <Curve d={`M ${px(0.05)} ${py(0.1)} L ${px(0.9)} ${py(0.88)}`} colour={SUPPLY} label="S" lx={px(0.92)} ly={py(0.88)} />
      <Guides x={px(0.486)} y={py(0.5)} xText="Q₁" yText="P₁" />
      <Note x={px(0.22)} y={py(0.7)} colour={DEMAND}>consumer surplus</Note>
      <Note x={px(0.22)} y={py(0.28)} colour={SUPPLY}>producer surplus</Note>
    </Figure>
  )
}

function PublicGoods() {
  return (
    <Figure
      title="Public goods and the free rider problem"
      desc="A cost-of-provision supply curve with effective demand sitting on the vertical axis at zero, so the free market supplies nothing at all."
      caption="A public good is NON-EXCLUDABLE and NON-RIVAL. Because non-payers cannot be excluded, everyone waits for someone else to pay - the free rider problem - so effective demand collapses to zero and no firm can profit. The market does not under-provide, it never forms: a MISSING market, which is why the state provides it from taxation."
    >
      <Axes xLabel="Quantity" yLabel="Price" />
      <Curve d={`M ${px(0.05)} ${py(0.1)} L ${px(0.9)} ${py(0.88)}`} colour={SUPPLY} label="S (cost of provision)" lx={px(0.56)} ly={py(0.92)} />
      <Seg x1={O.x} y1={O.y} x2={O.x} y2={TOP + 14} colour={DEMAND} width={3.4} />
      <Note x={px(0.1)} y={py(0.66)} anchor="start" colour={DEMAND}>D = 0</Note>
      <Note x={px(0.1)} y={py(0.56)} anchor="start" colour={DEMAND}>everyone free rides</Note>
      <Dot x={O.x} y={O.y} r={5} colour={LOSS} />
      <Note x={px(0.52)} y={py(0.34)} colour={LOSS}>free market quantity = 0</Note>
      <Note x={px(0.52)} y={py(0.24)} colour={LOSS}>a MISSING market</Note>
    </Figure>
  )
}

function AsymmetricInformation() {
  return (
    <Figure
      title="Information gaps and merit goods"
      desc="A merit good diagram: marginal private benefit lies below marginal social benefit, so the market quantity where MPB meets MSC falls short of the social optimum where MSB meets MSC, leaving a shaded welfare loss triangle between them."
      caption="Consumers act on MPB, which for a merit good sits BELOW MSB by the external benefit. The market settles where MPB = MSC, at Qm, but the social optimum is where MSB = MSC, at Q*. Because Qm < Q* the good is under-consumed, and the shaded triangle is the welfare loss. Information provision, subsidy or state provision shifts MPB up towards MSB."
    >
      <Axes xLabel="Quantity" yLabel="Costs / benefits" />

      {/* The welfare loss triangle: MSB above MPB across the missing output. */}
      <Shade
        points={`${ex(QM_MERIT)},${ey(mscM(QM_MERIT))} ${ex(QM_MERIT)},${ey(msbM(QM_MERIT))} ${ex(QS_MERIT)},${ey(mscM(QS_MERIT))}`}
        fill={LOSS}
        opacity="0.42"
      />

      <Curve d={plotM(mscM)} colour={SUPPLY} label="MSC = MPC = S" lx={ex(7.4)} ly={ey(8.6)} />
      <Curve d={plotM(mpbM)} colour={DEMAND} label="MPB = D" lx={ex(8.1)} ly={ey(mpbM(8.1)) + 14} />
      <Curve d={plotM(msbM)} colour={SOCIAL} dashed label="MSB" lx={ex(8.6)} ly={ey(msbM(8.6)) + 14} />

      <Guides x={ex(QM_MERIT)} y={ey(mscM(QM_MERIT))} xText="Qm" yText="Pm" />
      <Guides x={ex(QS_MERIT)} y={ey(mscM(QS_MERIT))} xText="Q*" yText="P*" />

      <ShiftArrow x1={ex(3.2)} y1={ey(6.3)} x2={ex(4.4)} y2={ey(8.3)} colour={SOCIAL} />
      <Note x={ex(1.5)} y={ey(9.6)} anchor="start" colour={SOCIAL}>information provision</Note>
      <Note x={ex(6.2)} y={ey(9.1)} colour={LOSS}>welfare loss</Note>
      <Note x={ex(1.2)} y={ey(0.5)} anchor="start">under-consumption: Qm &lt; Q*</Note>
    </Figure>
  )
}

function BufferStock() {
  return (
    <Figure
      title="Buffer stock scheme"
      desc="A commodity market with a price floor and ceiling, where the agency buys into store when a good harvest would push price below the floor and sells from store when a poor harvest would push it above the ceiling."
      caption="The agency sets a price band. A good harvest that would push price below the FLOOR is met by BUYING the surplus into store; a poor harvest that would push it above the CEILING is met by SELLING from store. It stabilises farm incomes and consumer prices, but needs storage, working capital, and a band set near the long-run average - otherwise the scheme runs out of money or space."
    >
      <Axes xLabel="Quantity" yLabel="Price" />
      <Curve d={`M ${px(0.05)} ${py(0.92)} L ${px(0.92)} ${py(0.1)}`} colour={DEMAND} label="D" lx={px(0.94)} ly={py(0.08)} />
      {/* A good harvest means MORE supplied at every price - the rightward
          (higher-quantity) curve - not the leftward one; these two labels
          were swapped relative to their positions. */}
      <Curve d={`M ${px(0.2)} ${py(0.06)} L ${px(0.4)} ${py(0.98)}`} colour={SUPPLY} label="S poor" lx={px(0.24)} ly={py(1.04)} />
      <Curve d={`M ${px(0.54)} ${py(0.06)} L ${px(0.74)} ${py(0.98)}`} colour={SOCIAL} label="S good harvest" lx={px(0.8)} ly={py(1.02)} />
      <Seg x1={O.x} y1={py(0.72)} x2={px(0.94)} y2={py(0.72)} colour={LOSS} width={1.8} />
      <Seg x1={O.x} y1={py(0.34)} x2={px(0.94)} y2={py(0.34)} colour={LOSS} width={1.8} />
      <Note x={px(0.94)} y={py(0.72) - 6} anchor="end" colour={LOSS}>ceiling - sell stock</Note>
      <Note x={px(0.94)} y={py(0.34) - 6} anchor="end" colour={LOSS}>floor - buy stock</Note>
    </Figure>
  )
}

function TradablePermits() {
  return (
    <Figure
      title="Tradable pollution permits"
      desc="A market for pollution permits with a vertical supply fixed by the regulator and a downward sloping demand from firms, setting the permit price, with a tighter cap shown shifting supply left."
      caption="The regulator FIXES the number of permits, so supply is vertical - total pollution is capped with certainty, unlike a tax where the resulting quantity is unknown. Firms that can abate cheaply sell permits; those that cannot, buy. Tightening the cap shifts supply left and raises the price, strengthening the incentive to cut emissions."
    >
      <Axes xLabel="Permits" yLabel="Permit price" />
      <Seg x1={px(0.62)} y1={TOP} x2={px(0.62)} y2={O.y} colour={SUPPLY} width={2.4} />
      <Text x={px(0.62)} y={TOP - 6} colour={SUPPLY}>S (cap)</Text>
      <Seg x1={px(0.38)} y1={TOP} x2={px(0.38)} y2={O.y} colour={LOSS} width={2} dashed />
      <Text x={px(0.34)} y={TOP - 6} colour={LOSS} anchor="end">tighter cap</Text>
      <Curve d={`M ${px(0.06)} ${py(0.95)} L ${px(0.92)} ${py(0.12)}`} colour={DEMAND} label="D (firms)" lx={px(0.84)} ly={py(0.22)} />
      <Guides x={px(0.62)} y={py(0.41)} yText="P₁" />
      <Guides x={px(0.38)} y={py(0.641)} yText="P₂" />
    </Figure>
  )
}

/* ------------------------------------------------- THEME 2: MACRO */

function DemandPull() {
  return (
    <Figure
      title="Demand-pull inflation"
      desc="Aggregate demand shifting right along a Keynesian aggregate supply curve, near its steep section, raising the price level more than real output."
      caption="Excess demand pulls the price level up: AD shifts right from AD₁ to AD₂ so BOTH the price level (P₁ to P₂) and real output (Y₁ to Y₂) rise. That is what separates it from cost-push, where prices rise while output FALLS. On the steep part of the Keynesian AS curve, close to full capacity Yf, most of the shift goes into prices rather than output."
    >
      <Axes xLabel="Real output (Y)" yLabel="Price level" />
      {(() => {
        const as = keynesianAS()
        const ad1 = linearAD(0.72, 1)
        const ad2 = linearAD(1.05, 1)
        const e1 = keynesianEquilibrium(as, ad1)
        const e2 = keynesianEquilibrium(as, ad2)
        return (
          <g>
            <Curve d={asPath(as)} colour={SUPPLY} label="AS" lx={px(as.yf) + 8} ly={py(0.86)} />
            <Curve d={adPath(ad1, 0.02, 0.64)} colour={DEMAND} label="AD₁" lx={px(0.64) + 2} ly={py(ad1.p(0.64)) + 4} />
            <Curve d={adPath(ad2, 0.2, 0.9)} colour={SOCIAL} label="AD₂" lx={px(0.9) + 4} ly={py(ad2.p(0.9)) + 4} />
            <Guides x={px(e1.y)} y={py(e1.p)} xText="Y₁" yText="P₁" />
            <Guides x={px(e2.y)} y={py(e2.p)} xText="Y₂" yText="P₂" />
            <ShiftArrow x1={px(0.3)} y1={py(ad1.p(0.3)) - 6} x2={px(0.44)} y2={py(ad2.p(0.44)) + 6} colour={SOCIAL} />
            <Note x={px(as.yf)} y={TOP - 4}>Yf</Note>
          </g>
        )
      })()}
    </Figure>
  )
}

function AdShift() {
  return (
    <Figure
      title="A shift in aggregate demand"
      desc="Aggregate demand shifting right along a Keynesian aggregate supply curve, from the flat section into the curved section, with the resulting rise in output and the price level marked."
      caption="AD = C + I + G + (X − M). Anything raising a component shifts AD RIGHT from AD₁ to AD₂: a tax cut, higher government spending, lower interest rates, a depreciation. Output rises from Y₁ to Y₂ and, as spare capacity is used up, the price level rises from P₁ to P₂. Anything reducing a component shifts AD LEFT. Expansionary fiscal and monetary policy both work through exactly this shift."
    >
      <Axes xLabel="Real output (Y)" yLabel="Price level" />
      {(() => {
        const as = keynesianAS()
        const ad1 = linearAD(0.62, 1)
        const ad2 = linearAD(0.95, 1)
        const e1 = keynesianEquilibrium(as, ad1)
        const e2 = keynesianEquilibrium(as, ad2)
        return (
          <g>
            <Curve d={asPath(as)} colour={SUPPLY} label="AS" lx={px(as.yf) + 8} ly={py(0.86)} />
            <Curve d={adPath(ad1, 0.02, 0.56)} colour={DEMAND} label="AD₁" lx={px(0.56) + 2} ly={py(ad1.p(0.56)) + 4} />
            <Curve d={adPath(ad2, 0.12, 0.88)} colour={SOCIAL} label="AD₂" lx={px(0.88) + 4} ly={py(ad2.p(0.88)) + 4} />
            <Guides x={px(e1.y)} y={py(e1.p)} xText="Y₁" yText="P₁" />
            <Guides x={px(e2.y)} y={py(e2.p)} xText="Y₂" yText="P₂" />
            <ShiftArrow x1={px(0.24)} y1={py(ad1.p(0.24)) - 6} x2={px(0.4)} y2={py(ad2.p(0.4)) + 6} colour={SOCIAL} />
            <Note x={px(0.06)} y={py(0.94)} anchor="start">↑C ↑I ↑G ↑(X−M)</Note>
            <Note x={px(as.yf)} y={TOP - 4}>Yf</Note>
          </g>
        )
      })()}
    </Figure>
  )
}

function OutputGap() {
  return (
    <Figure
      title="Output gaps and the economic cycle"
      desc="Actual output oscillating around a rising long-run trend line, with negative gaps below the trend and positive gaps above it."
      caption="The trend line is productive capacity growing over time; actual output cycles around it. BELOW trend is a negative output gap - spare capacity, unemployment above the natural rate, easing inflation. ABOVE trend is a positive gap - the economy overheating, with demand-pull inflation."
    >
      <Axes xLabel="Time" yLabel="Real GDP" />
      <Curve d={`M ${px(0.04)} ${py(0.22)} L ${px(0.96)} ${py(0.82)}`} colour="var(--muted)" dashed width={1.6} label="trend" lx={px(0.88)} ly={py(0.9)} />
      {(() => {
        const pts = []
        for (let i = 0; i <= 60; i++) {
          const t = i / 60
          const trend = 0.22 + t * 0.6
          pts.push(`${px(0.04 + t * 0.92)} ${py(trend + 0.13 * Math.sin(t * 3.1 * Math.PI))}`)
        }
        return <Curve d={'M ' + pts.join(' L ')} colour={DEMAND} label="actual" lx={px(0.26)} ly={py(0.12)} />
      })()}
      <Note x={px(0.22)} y={py(0.66)} colour={SOCIAL}>boom (+ gap)</Note>
      <Note x={px(0.52)} y={py(0.3)} colour={LOSS}>recession (− gap)</Note>
    </Figure>
  )
}

function MultiplierEffect() {
  return (
    <Figure
      title="The multiplier effect"
      desc="An initial rightward shift in aggregate demand followed by a further shift, so the final rise in output exceeds the original injection."
      caption="An injection becomes someone's income, part of which is re-spent, and so on. AD moves from AD₁ to AD₂ by the initial injection, then on to AD₃ through the knock-on spending, so output rises from Y₁ to Y₂ and on to Y₃. Multiplier = 1 ÷ (MPS + MPT + MPM) - larger when leakages are small. On the flat part of the Keynesian AS curve the whole effect is real output; as the curve steepens, part of it becomes a higher price level."
    >
      <Axes xLabel="Real output (Y)" yLabel="Price level" />
      {(() => {
        const as = keynesianAS()
        const ads = [linearAD(0.55, 1), linearAD(0.72, 1), linearAD(0.9, 1)]
        const es = ads.map((ad) => keynesianEquilibrium(as, ad))
        const cols = [DEMAND, SOCIAL, ALT]
        const labels = ['AD₁', 'AD₂', 'AD₃']
        const ends = [0.5, 0.64, 0.82]
        return (
          <g>
            <Curve d={asPath(as)} colour={SUPPLY} label="AS" lx={px(as.yf) + 8} ly={py(0.86)} />
            {ads.map((ad, i) => (
              <Curve key={labels[i]} d={adPath(ad, 0.02 + i * 0.08, ends[i])} colour={cols[i]} label={labels[i]} lx={px(ends[i]) + 2} ly={py(ad.p(ends[i])) + 4} />
            ))}
            {es.map((e, i) => (
              <Guides key={i} x={px(e.y)} y={py(e.p)} xText={['Y₁', 'Y₂', 'Y₃'][i]} />
            ))}
            <Note x={px(0.06)} y={py(1.02)} anchor="start">injection → knock-on spending</Note>
          </g>
        )
      })()}
    </Figure>
  )
}

function ProgressiveTax() {
  return (
    <Figure
      title="Progressive, proportional and regressive taxes"
      desc="Three lines showing the average tax rate rising, staying constant, and falling as income rises."
      caption="PROGRESSIVE: the average rate RISES with income (UK income tax) - it narrows inequality. PROPORTIONAL: a constant average rate (a flat tax). REGRESSIVE: the average rate FALLS as income rises (VAT, because poorer households spend a larger share of their income) - it widens inequality."
    >
      <Axes xLabel="Income" yLabel="Average tax rate %" />
      <Curve d={`M ${px(0.05)} ${py(0.18)} Q ${px(0.5)} ${py(0.62)} ${px(0.94)} ${py(0.82)}`} colour={SOCIAL} label="progressive" lx={px(0.68)} ly={py(0.92)} />
      <Curve d={`M ${px(0.05)} ${py(0.5)} L ${px(0.94)} ${py(0.5)}`} colour={DEMAND} label="proportional" lx={px(0.66)} ly={py(0.42)} />
      <Curve d={`M ${px(0.05)} ${py(0.82)} Q ${px(0.5)} ${py(0.38)} ${px(0.94)} ${py(0.18)}`} colour={LOSS} label="regressive" lx={px(0.68)} ly={py(0.1)} />
    </Figure>
  )
}

/* ------------------------------------------------ THEME 3: FIRMS */

function RevenueCurves() {
  return (
    <Figure
      title="Average, marginal and total revenue"
      desc="A downward sloping average revenue curve with a marginal revenue curve twice as steep, and a total revenue curve peaking where marginal revenue crosses zero."
      caption="For a price maker, AR is the demand curve and MR falls TWICE as steeply, reaching zero halfway along AR. Total revenue peaks exactly where MR = 0. Where MR is positive, demand is elastic and a price cut raises revenue; where MR is negative, demand is inelastic and a cut reduces it."
    >
      <Axes xLabel="Output" yLabel="Revenue" />
      <Seg x1={O.x} y1={py(0.42)} x2={RIGHT} y2={py(0.42)} colour="var(--fg)" width={1.3} />
      <Curve d={`M ${px(0.04)} ${py(0.92)} L ${px(0.92)} ${py(0.2)}`} colour={DEMAND} label="AR = D" lx={px(0.8)} ly={py(0.14)} />
      <Curve d={`M ${px(0.04)} ${py(0.92)} L ${px(0.48)} ${py(0.42)}`} colour={SOCIAL} label="MR" lx={px(0.5)} ly={py(0.34)} />
      <Curve d={`M ${px(0.04)} ${py(0.42)} Q ${px(0.48)} ${py(1.15)} ${px(0.92)} ${py(0.42)}`} colour={SUPPLY} label="TR" lx={px(0.74)} ly={py(0.8)} />
      <Seg x1={px(0.48)} y1={py(0.42)} x2={px(0.48)} y2={py(0.84)} colour="var(--muted)" width={1.1} dashed />
      <Note x={px(0.48)} y={O.y + 15}>MR = 0</Note>
      <Note x={px(0.22)} y={py(0.16)} colour={SOCIAL}>elastic</Note>
      <Note x={px(0.74)} y={py(0.16)} colour={LOSS}>inelastic</Note>
    </Figure>
  )
}

function PerfectCompetitionShortRun() {
  return (
    <Figure
      title="Perfect competition: short-run supernormal profit"
      desc="A firm in perfect competition with a horizontal price line above its average cost at the profit maximising output, and the supernormal profit rectangle shaded."
      caption="In the SHORT run price can sit above AC, giving supernormal profit - the shaded rectangle, (AR − AC) × Q. With no barriers to entry that attracts new firms, industry supply rises, price falls, and the profit is competed away until only normal profit remains in the long run."
    >
      <Axes xLabel="Output" yLabel="Costs / revenue" />
      <Curve d={plotQ(acOf)} colour={SUPPLY} label="AC" lx={fx(4.9)} ly={fy(acOf(4.9)) - 8} />
      <Curve d={plotQ(mcOf)} colour={DEMAND} label="MC" lx={fx(4.7)} ly={fy(mcOf(4.7)) - 8} />
      <Shade
        points={`${O.x},${fy(P_PC)} ${fx(Q_PC)},${fy(P_PC)} ${fx(Q_PC)},${fy(acOf(Q_PC))} ${O.x},${fy(acOf(Q_PC))}`}
        fill={SOCIAL}
        opacity="0.3"
      />
      <Seg x1={O.x} y1={fy(P_PC)} x2={RIGHT - 12} y2={fy(P_PC)} colour={SOCIAL} width={2.2} />
      <Text x={RIGHT - 10} y={fy(P_PC) - 8} anchor="end" colour={SOCIAL}>AR = MR = P</Text>
      <Seg x1={O.x} y1={fy(acOf(Q_PC))} x2={fx(Q_PC)} y2={fy(acOf(Q_PC))} colour="var(--muted)" width={1} dashed />
      <Guides x={fx(Q_PC)} y={fy(P_PC)} xText="Q*" />
      <Note x={fx(2.4)} y={fy(4.1)} colour={SOCIAL}>supernormal profit</Note>
      <Note x={O.x - 6} y={fy(acOf(Q_PC)) + 4} anchor="end">AC</Note>
      <Seg x1={fx(AC_MIN_Q)} y1={fy(acOf(AC_MIN_Q))} x2={fx(AC_MIN_Q)} y2={O.y} colour="var(--muted)" width={1} dashed />
      <Note x={fx(AC_MIN_Q)} y={O.y + 15}>min AC</Note>
    </Figure>
  )
}

function MonopolisticCompetition() {
  return (
    <Figure
      title="Monopolistic competition in the long run"
      desc="A firm with a downward sloping average revenue curve tangent to its average cost curve on the falling section, showing normal profit and excess capacity."
      caption="Because the product is differentiated, AR slopes DOWN - unlike perfect competition's horizontal line. Free entry competes profit away until AR is tangent to AC, but that tangency falls on the DOWNWARD-sloping part of AC. The firm therefore produces below minimum AC: excess capacity, and productive inefficiency."
    >
      <Axes xLabel="Output" yLabel="Costs / revenue" />
      <Curve d={plotQ(acOf)} colour={SUPPLY} label="AC" lx={fx(4.9)} ly={fy(acOf(4.9)) - 8} />
      <Curve d={plotQ(mcOf)} colour={LOSS} label="MC" lx={fx(4.6)} ly={fy(mcOf(4.6)) - 8} />
      <Curve d={plotQ(arOf)} colour={DEMAND} label="AR = D" lx={fx(4.7)} ly={fy(arOf(4.8)) + 16} />
      <Curve d={plotQ(mrOf, Q_LO, 3.25)} colour={SOCIAL} label="MR" lx={fx(3.3)} ly={fy(0) - 6} />
      {/* The tangency itself: AR and AC meet here and share a slope. */}
      <Guides x={fx(Q_MC)} y={fy(arOf(Q_MC))} xText="Q₁" yText="P₁" />
      <Seg x1={fx(AC_MIN_Q)} y1={fy(acOf(AC_MIN_Q))} x2={fx(AC_MIN_Q)} y2={O.y} colour="var(--muted)" width={1.1} dashed />
      <Note x={fx(AC_MIN_Q)} y={O.y + 15}>min AC</Note>
      <ShiftArrow x1={fx(3.05)} y1={O.y - 14} x2={fx(3.95)} y2={O.y - 14} colour={SOCIAL} />
      <Note x={fx(3.5)} y={O.y - 20} colour={SOCIAL}>excess capacity</Note>
    </Figure>
  )
}

function PriceDiscrimination() {
  return (
    <Figure
      title="Third-degree price discrimination"
      desc="Two separated markets side by side, one with inelastic demand charged a higher price and one with elastic demand charged a lower price, each produced where marginal cost is met."
      caption="Split the market by elasticity and charge each group its own price: the INELASTIC group pays more, the ELASTIC group less. Each market produces where MR = MC. It needs price-setting power, separable groups and no resale between them - and it converts consumer surplus into producer surplus."
    >
      {/*
        Both panels now carry MR as well as D. The caption says each market
        produces where MR = MC, and a diagram that shows only D and MC gives
        the reader no way to see the output that rule picks out.

        Each MR is drawn from the same intercept as its D and with twice the
        slope, so it meets MC at the marked quantity.
      */}
      <Text x={112} y={34} colour={LOSS}>Inelastic market</Text>
      <Seg x1={62} y1={48} x2={62} y2={198} colour="var(--fg)" width={1.4} />
      <Seg x1={62} y1={198} x2={182} y2={198} colour="var(--fg)" width={1.4} />
      <Seg x1={68} y1={60} x2={110} y2={196} colour={DEMAND} width={2} />
      <Note x={124} y={74} colour={DEMAND}>D = AR</Note>
      <Seg x1={68} y1={60} x2={89} y2={196} colour={SOCIAL} width={1.6} />
      <Note x={99} y={56} colour={SOCIAL}>MR</Note>
      <Seg x1={62} y1={158} x2={176} y2={158} colour={SUPPLY} width={1.8} />
      {/* MR meets MC at x ≈ 83; the price is read off D there, at y ≈ 109 -
          not at 90, which sat above the demand curve entirely. */}
      <Seg x1={62} y1={109} x2={83} y2={109} colour="var(--muted)" width={1} dashed />
      <Seg x1={83} y1={109} x2={83} y2={198} colour="var(--muted)" width={1} dashed />
      <Dot x={83} y={109} r={3} colour={DEMAND} />
      <Note x={56} y={113} anchor="end">P₁</Note>
      <Note x={178} y={152} anchor="end" colour={SUPPLY}>MC</Note>
      <Note x={122} y={222}>steep D → high price</Note>

      <Text x={294} y={34} colour={SOCIAL}>Elastic market</Text>
      <Seg x1={234} y1={48} x2={234} y2={198} colour="var(--fg)" width={1.4} />
      <Seg x1={234} y1={198} x2={368} y2={198} colour="var(--fg)" width={1.4} />
      <Seg x1={240} y1={104} x2={360} y2={178} colour={DEMAND} width={2} />
      <Note x={344} y={196} colour={DEMAND}>D = AR</Note>
      <Seg x1={240} y1={104} x2={300} y2={178} colour={SOCIAL} width={1.6} />
      <Note x={310} y={172} colour={SOCIAL}>MR</Note>
      <Seg x1={234} y1={158} x2={362} y2={158} colour={SUPPLY} width={1.8} />
      <Seg x1={234} y1={131} x2={284} y2={131} colour="var(--muted)" width={1} dashed />
      <Seg x1={284} y1={131} x2={284} y2={198} colour="var(--muted)" width={1} dashed />
      <Dot x={284} y={131} r={3} colour={DEMAND} />
      <Note x={228} y={135} anchor="end">P₂</Note>
      <Note x={300} y={222}>shallow D → low price</Note>
    </Figure>
  )
}

function NaturalMonopoly() {
  return (
    <Figure
      title="Natural monopoly"
      desc="A long-run average cost curve still falling where it meets market demand, with marginal cost below average cost throughout, and the regulated average-cost price marked."
      caption="Huge fixed costs mean LRAC is STILL FALLING where it meets demand, so one firm supplies the whole market more cheaply than several could - utilities, rail track, the grid. Because MC lies below AC throughout, forcing P = MC would make a loss, so regulators usually set P = AC instead, leaving normal profit."
    >
      <Axes xLabel="Output" yLabel="Costs / price" />
      <Curve d={`M ${px(0.08)} ${py(0.95)} Q ${px(0.5)} ${py(0.36)} ${px(0.96)} ${py(0.24)}`} colour={SUPPLY} label="AC" lx={px(0.9)} ly={py(0.34)} />
      <Curve d={`M ${px(0.08)} ${py(0.6)} Q ${px(0.5)} ${py(0.16)} ${px(0.96)} ${py(0.12)}`} colour={LOSS} label="MC" lx={px(0.88)} ly={py(0.04)} />
      <Curve d={`M ${px(0.06)} ${py(0.9)} L ${px(0.92)} ${py(0.1)}`} colour={DEMAND} label="D = AR" lx={px(0.76)} ly={py(0.26)} />
      {/* Where the AC curve above actually meets the demand line, solved
          from the two paths rather than eyeballed - AC and this straight
          demand line cross twice given AC's curvature; this is the first
          (lower-output, higher-price) crossing, matching the falling-AC
          story the note beside it tells. */}
      <Guides x={px(0.297)} y={py(0.68)} xText="Q" yText="P(AC)" />
      <Note x={px(0.26)} y={py(0.18)} anchor="start">AC still falling where it meets D</Note>
      <Note x={px(0.26)} y={py(0.08)} anchor="start" colour={LOSS}>P = MC would make a loss</Note>
    </Figure>
  )
}

function GameTheory() {
  const cell = (x, y, a, b, hi) => (
    <g>
      <rect
        x={x} y={y} width="96" height="50" rx="6"
        fill={hi ? 'color-mix(in srgb, var(--r2-shaky) 22%, transparent)' : 'color-mix(in srgb, var(--brand) 10%, transparent)'}
        stroke={hi ? LOSS : 'var(--line)'} strokeWidth="1.5"
      />
      <text x={x + 30} y={y + 31} textAnchor="middle" className="dgm-label" fill={DEMAND}>{a}</text>
      <text x={x + 68} y={y + 31} textAnchor="middle" className="dgm-label" fill={SUPPLY}>{b}</text>
    </g>
  )
  return (
    <Figure
      title="Game theory: the prisoner's dilemma"
      desc="A two-by-two payoff matrix for two firms choosing to collude or cheat, with the mutual-cheat cell highlighted as the dominant-strategy outcome."
      caption="Each firm's DOMINANT strategy is to cheat whichever the other chooses, so both cheat and both end up worse off than if they had colluded. This is why cartels are inherently unstable, and why oligopolists watch each other so closely - the interdependence IS the model."
    >
      <Text x={160} y={44} colour={DEMAND}>B: collude</Text>
      <Text x={296} y={44} colour={DEMAND}>B: cheat</Text>
      <Text x={56} y={90} colour={SUPPLY}>A: collude</Text>
      <Text x={56} y={158} colour={SUPPLY}>A: cheat</Text>
      {cell(112, 58, '5', '5')}
      {cell(248, 58, '1', '8')}
      {cell(112, 126, '8', '1')}
      {cell(248, 126, '2', '2', true)}
      <Note x={200} y={206} colour={LOSS}>both cheat - the dominant-strategy outcome</Note>
      <Note x={200} y={224}>worse for both than colluding at (5, 5)</Note>
      <Note x={200} y={250}>payoffs: A in blue, B in amber</Note>
    </Figure>
  )
}

function LimitPricing() {
  return (
    <Figure
      title="Limit pricing in a contestable market"
      desc="An incumbent setting price below the profit maximising level and just under a potential entrant's average cost, deterring entry."
      caption="The incumbent sets price BELOW the profit-maximising level - just under a potential entrant's average cost - so entering would be unprofitable. It sacrifices short-run profit to keep rivals out. Distinct from PREDATORY pricing, which goes below cost to drive out a rival already in the market, and is illegal."
    >
      <Axes xLabel="Output" yLabel="Price / cost" />
      <Curve d={`M ${px(0.04)} ${py(0.95)} L ${px(0.92)} ${py(0.14)}`} colour={DEMAND} label="AR" lx={px(0.84)} ly={py(0.1)} />
      {/* Label sits well below the line: at px(0.58) it ran straight through
          both the limit-price line and the AC line it belongs to. */}
      <Curve d={`M ${px(0.06)} ${py(0.2)} L ${px(0.9)} ${py(0.5)}`} colour={SUPPLY} label="AC (incumbent)" lx={px(0.74)} ly={py(0.3)} />
      <Seg x1={O.x} y1={py(0.66)} x2={px(0.94)} y2={py(0.66)} colour={LOSS} width={1.8} dashed />
      <Note x={px(0.94)} y={py(0.66) - 6} anchor="end" colour={LOSS}>entrant&apos;s AC</Note>
      <Seg x1={O.x} y1={py(0.58)} x2={px(0.94)} y2={py(0.58)} colour={SOCIAL} width={2} />
      <Note x={px(0.94)} y={py(0.52)} anchor="end" colour={SOCIAL}>limit price</Note>
      <Note x={px(0.24)} y={py(0.14)} anchor="start">below profit max, above own AC</Note>
    </Figure>
  )
}

function Monopsony() {
  return (
    <Figure
      title="Monopsony in the labour market"
      desc="A single buyer of labour facing an upward sloping supply curve with the marginal cost of labour above it, hiring where that marginal cost meets marginal revenue product and paying the lower wage read off the supply curve."
      caption="A single BUYER of labour must raise the wage for everyone to hire one more worker, so the marginal cost of labour (MCL) lies ABOVE the supply curve. It hires where MCL = MRP at Q₁, then pays only W₁ from the supply curve. Both wages and employment fall below the competitive level - which is why a minimum wage here can raise BOTH."
    >
      <Axes xLabel="Quantity of labour" yLabel="Wage" />
      <Curve d={`M ${px(0.05)} ${py(0.14)} L ${px(0.92)} ${py(0.72)}`} colour={SUPPLY} label="S = ACL" lx={px(0.9)} ly={py(0.78)} />
      <Curve d={`M ${px(0.05)} ${py(0.14)} L ${px(0.66)} ${py(0.95)}`} colour={LOSS} label="MCL" lx={px(0.62)} ly={py(1.0)} />
      <Curve d={`M ${px(0.05)} ${py(0.92)} L ${px(0.92)} ${py(0.1)}`} colour={DEMAND} label="MRP" lx={px(0.9)} ly={py(0.06)} />
      <Dot x={px(0.44)} y={py(0.62)} colour={LOSS} />
      <Seg x1={px(0.44)} y1={py(0.62)} x2={px(0.44)} y2={O.y} colour="var(--muted)" width={1.1} dashed />
      <Seg x1={O.x} y1={py(0.36)} x2={px(0.44)} y2={py(0.36)} colour="var(--muted)" width={1.1} dashed />
      <Dot x={px(0.44)} y={py(0.36)} colour={SUPPLY} />
      <Note x={px(0.44)} y={O.y + 15}>Q₁</Note>
      <Note x={O.x - 6} y={py(0.36) + 4} anchor="end">W₁</Note>
      <Note x={px(0.72)} y={py(0.86)}>hires where MCL = MRP</Note>
    </Figure>
  )
}

function TradeUnion() {
  return (
    <Figure
      title="A trade union in a competitive labour market"
      desc="A union imposing a wage floor above the market equilibrium, raising the wage but reducing the quantity of labour demanded and creating excess supply."
      caption="A union bargains a wage floor above equilibrium. Wages rise for those still employed, but quantity demanded falls to Qd while supply rises to Qs - the gap is unemployment. The trade-off is smaller when labour demand is INELASTIC (few substitutes, labour a small share of total cost), which is where unions are strongest."
    >
      <Axes xLabel="Quantity of labour" yLabel="Wage rate" />
      <Curve d={`M ${px(0.05)} ${py(0.1)} L ${px(0.92)} ${py(0.88)}`} colour={SUPPLY} label="S(L)" lx={px(0.94)} ly={py(0.88)} />
      <Curve d={`M ${px(0.05)} ${py(0.92)} L ${px(0.92)} ${py(0.1)}`} colour={DEMAND} label="D(L) = MRP" lx={px(0.58)} ly={py(0.1)} />
      <Guides x={px(0.475)} y={py(0.5)} xText="Q₁" yText="W₁" />
      <Seg x1={O.x} y1={py(0.7)} x2={px(0.94)} y2={py(0.7)} colour={LOSS} width={2} />
      <Note x={px(0.94)} y={py(0.7) - 6} anchor="end" colour={LOSS}>union wage</Note>
      <Guides x={px(0.3)} y={py(0.7)} xText="Qd" />
      <Guides x={px(0.67)} y={py(0.7)} xText="Qs" />
      <Seg x1={px(0.3)} y1={py(0.78)} x2={px(0.67)} y2={py(0.78)} colour={LOSS} width={1.4} dashed />
      <Note x={px(0.48)} y={py(0.84)} colour={LOSS}>unemployment</Note>
    </Figure>
  )
}

/* ------------------------------------------------ THEME 4: GLOBAL */

function Tariff() {
  return (
    <Figure
      title="The effect of a tariff on imports"
      desc="A domestic market with a world price line raised by a tariff, showing domestic production rising, consumption falling, imports shrinking, and the government revenue rectangle shaded."
      caption="A tariff lifts the world price from Pw to Pw + T. Domestic output rises and consumption falls, so IMPORTS shrink to the gap between Q₂ and Q₃. Government collects the shaded revenue. Consumer surplus falls by more than producers and government together gain - the difference is a net welfare loss."
    >
      <Axes xLabel="Quantity" yLabel="Price" />
      <Curve d={`M ${tq(0)} ${tp(10)} L ${tq(10)} ${tp(1)}`} colour={DEMAND} label="D" lx={tq(10)} ly={tp(1) - 8} />
      <Curve d={`M ${tq(0)} ${tp(1)} L ${tq(10)} ${tp(10)}`} colour={SUPPLY} label="S domestic" lx={tq(8.4)} ly={tp(9.6)} />

      {/* Revenue is the tariff times the imports that REMAIN: Q₂ to Q₃. */}
      <Shade
        points={`${tq(QS_T)},${tp(PW)} ${tq(QD_T)},${tp(PW)} ${tq(QD_T)},${tp(PW + TARIFF)} ${tq(QS_T)},${tp(PW + TARIFF)}`}
        fill={SOCIAL}
        opacity="0.34"
      />
      <Seg x1={O.x} y1={tp(PW)} x2={tq(9.8)} y2={tp(PW)} colour="var(--muted)" width={1.8} />
      <Note x={tq(9.8)} y={tp(PW) + 14} anchor="end">Pw (world)</Note>
      <Seg x1={O.x} y1={tp(PW + TARIFF)} x2={tq(9.8)} y2={tp(PW + TARIFF)} colour={LOSS} width={2} />
      <Note x={tq(9.8)} y={tp(PW + TARIFF) - 6} anchor="end" colour={LOSS}>Pw + tariff</Note>
      <Note x={tq((QS_T + QD_T) / 2)} y={tp(PW) - 10} colour={SOCIAL}>tariff revenue</Note>

      {[
        [QS_F, 'Q₁'],
        [QS_T, 'Q₂'],
        [QD_T, 'Q₃'],
        [QD_F, 'Q₄'],
      ].map(([q, label]) => (
        <g key={label}>
          <Seg x1={tq(q)} y1={tp(q === QS_F || q === QD_F ? PW : PW + TARIFF)} x2={tq(q)} y2={O.y} colour="var(--muted)" width={1} dashed />
          <Note x={tq(q)} y={O.y + 15}>{label}</Note>
        </g>
      ))}
      {/* Label below its arrow: above it, it sat level with "Pw (world)". */}
      <ShiftArrow x1={tq(QS_T)} y1={tp(1.2)} x2={tq(QD_T)} y2={tp(1.2)} colour={DEMAND} />
      <Note x={tq((QS_T + QD_T) / 2)} y={tp(1.2) + 14} colour={DEMAND}>imports after the tariff</Note>
    </Figure>
  )
}

function KuznetsCurve() {
  return (
    <Figure
      title="The Kuznets curve"
      desc="An inverted U showing inequality first rising then falling as income per head grows through development."
      caption="Kuznets argued inequality RISES early in development, as a modern urban sector pulls away from agriculture, then FALLS as education spreads and welfare systems develop. Widely challenged - many countries never got the downward half - so treat it as a hypothesis to evaluate, not a law."
    >
      <Axes xLabel="Income per head" yLabel="Inequality" />
      <Curve d={`M ${px(0.05)} ${py(0.2)} Q ${px(0.45)} ${py(1.35)} ${px(0.95)} ${py(0.18)}`} colour={DEMAND} />
      <ShiftArrow x1={px(0.14)} y1={py(0.4)} x2={px(0.28)} y2={py(0.66)} colour={SOCIAL} />
      <ShiftArrow x1={px(0.72)} y1={py(0.66)} x2={px(0.86)} y2={py(0.4)} colour={LOSS} />
      <Note x={px(0.2)} y={py(0.9)} anchor="start" colour={SOCIAL}>industrialising</Note>
      <Note x={px(0.8)} y={py(0.9)} colour={LOSS}>maturing</Note>
    </Figure>
  )
}

function PovertyTrap() {
  return (
    <Figure
      title="The poverty trap"
      desc="A cycle of low income leading to low saving, then low investment, then low productivity, returning to low income."
      caption="Low incomes mean little saving, so little investment, so capital per worker and productivity stay low - which keeps incomes low. The cycle is why development economists argue for an external injection large enough to break it: aid, FDI, debt relief or microfinance filling the Harrod-Domar savings gap."
    >
      <Box x={144} y={30} w={112} h={44} label="Low income" />
      <Box x={274} y={116} w={110} h={44} label="Low saving" colour={SOCIAL} />
      <Box x={144} y={202} w={112} h={44} label="Low investment" />
      <Box x={16} y={116} w={110} h={44} label="Low productivity" colour={SOCIAL} />
      <Arrow x1={258} y1={64} x2={292} y2={110} colour={DEMAND} />
      <Arrow x1={312} y1={164} x2={262} y2={204} colour={DEMAND} />
      <Arrow x1={142} y1={224} x2={96} y2={164} colour={DEMAND} />
      <Arrow x1={84} y1={110} x2={142} y2={68} colour={DEMAND} />
      <Note x={200} y={284} colour={LOSS}>broken by an external injection: aid, FDI, debt relief</Note>
    </Figure>
  )
}

function FixedExchangeRate() {
  return (
    <Figure
      title="Defending a fixed exchange rate"
      desc="A currency market where demand falls, and the central bank buys its own currency with reserves to hold the rate at the fixed peg."
      caption="If demand for the currency falls (D₁ to D₂) the rate would slide to e₂. To hold the PEG the central bank BUYS its own currency using foreign reserves, pushing demand back, and can also raise interest rates to attract inflows. The constraint is that reserves are finite - which is how pegs eventually break."
    >
      <Axes xLabel="Quantity of £" yLabel="Exchange rate" />
      <Curve d={`M ${px(0.05)} ${py(0.08)} L ${px(0.92)} ${py(0.86)}`} colour={SUPPLY} label="S" lx={px(0.94)} ly={py(0.86)} />
      <Curve d={`M ${px(0.2)} ${py(0.95)} L ${px(0.9)} ${py(0.2)}`} colour={DEMAND} label="D₁" lx={px(0.92)} ly={py(0.16)} />
      <Curve d={`M ${px(0.04)} ${py(0.8)} L ${px(0.7)} ${py(0.08)}`} colour={LOSS} dashed label="D₂" lx={px(0.66)} ly={py(0.04)} />
      <Seg x1={O.x} y1={py(0.56)} x2={px(0.94)} y2={py(0.56)} colour={SOCIAL} width={2} />
      <Note x={px(0.94)} y={py(0.56) - 6} anchor="end" colour={SOCIAL}>fixed peg</Note>
      <ShiftArrow x1={px(0.32)} y1={py(0.36)} x2={px(0.44)} y2={py(0.44)} colour={SOCIAL} />
      <Note x={px(0.24)} y={py(0.14)} anchor="start">bank buys £ with reserves</Note>
    </Figure>
  )
}

export const ECON_EXTRA_DIAGRAMS = {
  'pes-elasticity': PesElasticity,
  'consumer-producer-surplus': ConsumerProducerSurplus,
  'public-goods': PublicGoods,
  'asymmetric-information': AsymmetricInformation,
  'buffer-stock': BufferStock,
  'tradable-permits': TradablePermits,
  'demand-pull': DemandPull,
  'ad-shift': AdShift,
  'output-gap': OutputGap,
  'multiplier-effect': MultiplierEffect,
  'progressive-tax': ProgressiveTax,
  'revenue-curves': RevenueCurves,
  'perfect-competition-short-run': PerfectCompetitionShortRun,
  'monopolistic-competition': MonopolisticCompetition,
  'price-discrimination': PriceDiscrimination,
  'natural-monopoly': NaturalMonopoly,
  'game-theory': GameTheory,
  'limit-pricing': LimitPricing,
  monopsony: Monopsony,
  'trade-union': TradeUnion,
  tariff: Tariff,
  'kuznets-curve': KuznetsCurve,
  'poverty-trap': PovertyTrap,
  'fixed-exchange-rate': FixedExchangeRate,
}
