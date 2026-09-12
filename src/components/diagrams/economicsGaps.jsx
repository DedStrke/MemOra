import { Axes, Curve, Guides, Shade, Note, ShiftArrow, Figure, Seg, Dot, Text, Box, Arrow, px, py, O, TOP } from './primitives'

/*
  Diagrams the course documents cover and the app did not.

  Comparing the 216 images in those documents against the 132 diagrams here
  showed most were duplicates - build-up sequences of the same PPF, or
  definition boxes rendered as graphics. Eight concepts were genuinely
  missing, and they are here.

  Two of them are FLOW diagrams rather than graphs. The monetary transmission
  mechanism and quantitative easing are both chains of cause and effect with
  no axes, and a student who cannot recite the chain cannot answer the
  question - which is why the documents draw them and why they belong here.

  The envelope and Phillips diagrams are plotted from their formulas so the
  tangency and the vertical-at-NAIRU results are exact rather than sketched.
*/

const DEMAND = 'var(--brand-strong)'
const SUPPLY = '#e08a2c'
const SOCIAL = '#2e9e6b'
const LOSS = 'var(--r2-shaky)'
const ALT = '#7c6cf0'

/* ==================================== MONETARY TRANSMISSION */

function MonetaryTransmission() {
  const rows = [
    { y: 44, label: 'Bank of England cuts Bank Rate', sub: 'e.g. 0.5%', colour: DEMAND },
    { y: 92, label: 'Commercial banks borrow more cheaply', sub: 'so they cut their own rates', colour: DEMAND },
  ]
  const branches = [
    { x: 22, label: 'Saving', sub: 'reward falls → save less', colour: SOCIAL },
    { x: 118, label: 'Borrowing', sub: 'loans cheaper → borrow more', colour: SOCIAL },
    { x: 214, label: 'Mortgages', sub: 'payments fall → more income', colour: SOCIAL },
    { x: 310, label: 'Exchange rate', sub: 'hot money out → £ falls', colour: SOCIAL },
  ]
  return (
    <Figure
      title="The monetary policy transmission mechanism"
      desc="A flow diagram from a cut in Bank Rate through commercial bank rates to four separate channels - saving, borrowing, mortgage payments and the exchange rate - which together raise consumption, investment and net exports, and so aggregate demand."
      caption="A rate change does not affect AD directly; it works through four channels, and naming the channel is what earns the analysis marks. The chain also explains the LAG: each step takes time, which is why the Bank estimates the full effect takes up to two years and must set policy on a forecast."
    >
      {rows.map((r) => (
        <g key={r.label}>
          <Box x={70} y={r.y} w={260} h={32} label={r.label} sub={r.sub} colour={r.colour} />
        </g>
      ))}
      <Arrow x1={200} y1={76} x2={200} y2={90} colour="var(--fg)" width={1.6} />
      <Arrow x1={200} y1={124} x2={200} y2={142} colour="var(--fg)" width={1.6} />

      {/* Plain rects rather than Box: Box centres its own label at exactly
          the height these three lines need, so the two collided. */}
      {branches.map((b) => (
        <g key={b.label}>
          <rect
            x={b.x}
            y={146}
            width={80}
            height={50}
            rx="8"
            fill={b.colour}
            fillOpacity="0.14"
            stroke={b.colour}
            strokeWidth="1.5"
          />
          <Text x={b.x + 40} y={161} colour="var(--fg)" size="note">
            {b.label}
          </Text>
          <Text x={b.x + 40} y={175} colour="var(--muted)" size="note">
            {b.sub.split(' → ')[0]}
          </Text>
          <Text x={b.x + 40} y={188} colour="var(--muted)" size="note">
            {b.sub.split(' → ')[1]}
          </Text>
          <Arrow x1={b.x + 40} y1={198} x2={b.x + 40} y2={212} colour="var(--muted)" width={1.3} />
        </g>
      ))}

      <Box x={70} y={216} w={260} h={30} label="C ↑   I ↑   (X − M) ↑" colour={SUPPLY} />
      <Arrow x1={200} y1={246} x2={200} y2={258} colour="var(--fg)" width={1.6} />
      <Text x={200} y={274} colour={SUPPLY}>
        AD shifts RIGHT → output and the price level rise
      </Text>
    </Figure>
  )
}

/* ======================================= QUANTITATIVE EASING */

function QuantitativeEasing() {
  const steps = [
    'Central bank creates money electronically',
    'It buys government bonds from financial institutions',
    'Bond PRICES rise, so bond YIELDS fall',
    'Institutions rebalance into corporate bonds and shares',
    'Firms borrow more cheaply; asset holders feel wealthier',
    'Lending, investment and consumption rise → AD ↑',
  ]
  return (
    <Figure
      title="How quantitative easing works"
      desc="A six-step chain from the central bank creating money, through buying government bonds and lowering their yields, to portfolio rebalancing, cheaper corporate borrowing, a wealth effect and finally higher aggregate demand."
      caption="QE is used when Bank Rate is already at the lower bound, so conventional policy is exhausted. The critical step is the third: buying bonds raises their price, and bond price and yield move in OPPOSITE directions, so yields fall across the economy. The weak link is the last one - banks may hold the extra reserves rather than lend them."
    >
      {steps.map((s, i) => {
        const y = 34 + i * 40
        return (
          <g key={i}>
            <rect
              x={30}
              y={y}
              width={340}
              height={30}
              rx="7"
              fill={i === 2 ? SUPPLY : DEMAND}
              fillOpacity={i === 2 ? 0.2 : 0.12}
              stroke={i === 2 ? SUPPLY : DEMAND}
              strokeWidth="1.5"
            />
            <Text x={44} y={y + 19} anchor="start" colour="var(--fg)" size="note">
              {`${i + 1}. ${s}`}
            </Text>
            {i < steps.length - 1 && (
              <Arrow x1={200} y1={y + 30} x2={200} y2={y + 40} colour="var(--muted)" width={1.4} />
            )}
          </g>
        )
      })}
      <Note x={200} y={284} colour={LOSS}>
        risk: banks hold the reserves rather than lend them
      </Note>
    </Figure>
  )
}

/* ==================================== LONG-RUN PHILLIPS CURVE */

function LongRunPhillips() {
  /*
    SRPC_e is drawn for a given EXPECTED inflation rate. Expanding demand
    moves the economy up its own SRPC from A to B - lower unemployment,
    higher inflation. Once expectations adjust the curve shifts UP and
    unemployment returns to the natural rate at C, with inflation permanently
    higher. Repeating that is what makes the LRPC vertical.
  */
  const nairu = 0.55
  const srpc = (shift) => {
    const pts = []
    for (let u = 0.12; u <= 0.95; u += 0.02) {
      const infl = shift + 0.1 / (u + 0.05) - 0.06
      if (infl > 0.02 && infl < 0.98) pts.push(`${px(u)} ${py(infl)}`)
    }
    return `M ${pts.join(' L ')}`
  }
  const at = (u, shift) => shift + 0.1 / (u + 0.05) - 0.06
  return (
    <Figure
      title="The long-run Phillips curve and the NAIRU"
      desc="Two short-run Phillips curves at different expected inflation rates, crossed by a vertical long-run Phillips curve at the natural rate of unemployment, with points showing the move from A to B along the first curve and then to C on the second."
      caption="There is a trade-off in the SHORT run only. Expanding demand moves the economy from A to B - lower unemployment, higher inflation. But once workers revise their expectations, the SRPC shifts up and unemployment returns to the NAIRU at C, leaving only higher inflation. The long-run curve is therefore VERTICAL, and the only way to lower unemployment permanently is supply-side policy that lowers the NAIRU itself."
    >
      <Axes xLabel="Unemployment %" yLabel="Inflation %" />
      <Curve d={srpc(0.18)} colour={DEMAND} label="SRPC₁" lx={px(0.86)} ly={py(at(0.9, 0.18)) - 8} />
      <Curve d={srpc(0.44)} colour={SOCIAL} dashed label="SRPC₂" lx={px(0.86)} ly={py(at(0.9, 0.44)) - 8} />
      <Seg x1={px(nairu)} y1={TOP} x2={px(nairu)} y2={O.y} colour={LOSS} width={2.4} />
      <Text x={px(nairu)} y={TOP - 6} colour={LOSS}>
        LRPC
      </Text>
      <Note x={px(nairu)} y={O.y + 15} colour={LOSS}>
        NAIRU
      </Note>

      <Dot x={px(nairu)} y={py(at(nairu, 0.18))} r={4} colour="var(--fg)" label="A" dy={-10} />
      <Dot x={px(0.32)} y={py(at(0.32, 0.18))} r={4} colour="var(--fg)" label="B" dy={-10} />
      <Dot x={px(nairu)} y={py(at(nairu, 0.44))} r={4} colour="var(--fg)" label="C" dy={-10} />
      <ShiftArrow x1={px(nairu) - 4} y1={py(at(nairu, 0.18)) - 4} x2={px(0.34)} y2={py(at(0.32, 0.18)) + 6} colour={DEMAND} />
      <ShiftArrow x1={px(0.34)} y1={py(at(0.32, 0.18)) - 6} x2={px(nairu) - 4} y2={py(at(nairu, 0.44)) + 6} colour={SOCIAL} />
      <Note x={px(0.42)} y={py(0.97)}>expectations adjust → SRPC shifts up</Note>
    </Figure>
  )
}

/* ======================================== LRAC ENVELOPE */

const lrac = (q) => 2 + 0.03 * (q - 10) ** 2
// A short-run curve tangent to LRAC at q0, and steeper than it.
const srac = (q0) => (q) => lrac(q0) + 2 * 0.03 * (q0 - 10) * (q - q0) + 0.12 * (q - q0) ** 2

function LracEnvelope() {
  const ex = (q) => px(0.04 + ((q - 2) / 16) * 0.92)
  const ey = (v) => py(0.06 + (v / 9) * 0.9)
  const plot = (f, from, to) => {
    const pts = []
    for (let q = from; q <= to + 1e-9; q += 0.2) {
      const v = f(q)
      if (v > 0 && v < 9) pts.push(`${ex(q)} ${ey(v)}`)
    }
    return `M ${pts.join(' L ')}`
  }
  return (
    <Figure
      title="Short-run cost curves and the long-run envelope"
      desc="Three short-run average cost curves for successively larger plant sizes, each touching a flatter long-run average cost curve at one point, so the long-run curve forms an envelope beneath them."
      caption="Each SRAC is one PLANT SIZE. In the long run the firm can choose any plant, so LRAC is the envelope of the lowest attainable cost - it touches each SRAC once and lies below it everywhere else. Note where the tangencies fall: below minimum efficient scale the firm operates to the LEFT of its SRAC minimum, so a plant is deliberately run below its own cheapest output while economies of scale are still available."
    >
      <Axes xLabel="Output" yLabel="Average cost" />
      {[5, 10, 15].map((q0, i) => (
        <Curve
          key={q0}
          d={plot(srac(q0), q0 - 4.5, q0 + 4.5)}
          colour={[DEMAND, SOCIAL, ALT][i]}
          label={`SRAC${i + 1}`}
          lx={ex(q0 - 4.2)}
          ly={ey(srac(q0)(q0 - 4.2)) - 8}
        />
      ))}
      <Curve d={plot(lrac, 2, 18)} colour={SUPPLY} label="LRAC" lx={ex(17.2)} ly={ey(lrac(17.2)) + 14} width={2.6} />
      {[5, 10, 15].map((q0) => (
        <Dot key={q0} x={ex(q0)} y={ey(lrac(q0))} r={3.6} colour={SUPPLY} />
      ))}
      <Seg x1={ex(10)} y1={ey(lrac(10))} x2={ex(10)} y2={O.y} colour="var(--muted)" width={1} dashed />
      <Note x={ex(10)} y={O.y + 15}>MES</Note>
      <Note x={ex(5.6)} y={ey(7.6)} colour={SOCIAL}>economies of scale</Note>
      <Note x={ex(15)} y={ey(7.6)} colour={ALT}>diseconomies</Note>
    </Figure>
  )
}

/* ============================================ LIQUIDITY TRAP */

function LiquidityTrap() {
  const dx = (m) => px(0.06 + m * 0.88)
  const dy = (r) => py(0.08 + r * 0.86)
  /*
    The floor is the whole point: demand for money becomes perfectly elastic
    at a very low rate, so the curve must actually FLATTEN. The first version
    used a shallower quadratic that never reached the floor, which drew a
    normal downward-sloping curve and no trap at all.
  */
  const md = (m) => Math.max(0.08, 0.75 - 1.4 * m + 0.6 * m * m)
  const plot = (f) => {
    const pts = []
    for (let m = 0; m <= 1; m += 0.02) pts.push(`${dx(m)} ${dy(f(m))}`)
    return `M ${pts.join(' L ')}`
  }
  return (
    <Figure
      title="The liquidity trap"
      desc="A demand-for-money curve that flattens to horizontal at a very low interest rate, so successive rightward shifts of money supply no longer reduce the rate."
      caption="Once the interest rate is near zero the demand for money becomes perfectly elastic: people hold any extra money rather than lend it, because the return on bonds is negligible and rates can only rise from here. Increasing the money supply then has NO effect on the interest rate, so conventional monetary policy is exhausted - which is the argument for quantitative easing and for fiscal policy taking over."
    >
      <Axes xLabel="Quantity of money" yLabel="Interest rate" />
      <Curve d={plot(md)} colour={DEMAND} label="Demand for money" lx={px(0.62)} ly={dy(0.3)} />
      {[0.3, 0.72, 0.88].map((m, i) => (
        <g key={m}>
          <Seg x1={dx(m)} y1={TOP + 10} x2={dx(m)} y2={O.y} colour={SUPPLY} width={2} />
          <Text x={dx(m)} y={TOP + 4} colour={SUPPLY} size="note">{`MS${i + 1}`}</Text>
        </g>
      ))}
      <Seg x1={O.x} y1={dy(md(0.8))} x2={dx(0.95)} y2={dy(md(0.8))} colour={LOSS} width={1.2} dashed />
      <Note x={O.x - 6} y={dy(md(0.8)) + 4} anchor="end">r_min</Note>
      <Note x={px(0.5)} y={dy(0.02) + 4} colour={LOSS}>
        the trap: extra money supply cannot lower r any further
      </Note>
      <Dot x={dx(0.72)} y={dy(md(0.72))} r={3.4} colour="var(--fg)" />
      <Dot x={dx(0.88)} y={dy(md(0.88))} r={3.4} colour="var(--fg)" />
    </Figure>
  )
}

/* ======================================== BOND PRICE AND YIELD */

function BondPriceYield() {
  return (
    <Figure
      title="Bond prices and yields move in opposite directions"
      desc="A worked comparison showing a bond with a fixed annual coupon, whose yield falls when its market price rises and rises when its price falls."
      caption="A bond pays a FIXED coupon, so the yield is that coupon divided by the price you paid. Pay more for the same fixed payment and your return is lower. This is why a central bank buying bonds under QE pushes yields down, and why a government that markets distrust faces higher yields - investors will only buy its bonds at a lower price."
    >
      <Text x={200} y={40} colour={DEMAND}>
        A bond paying a fixed £5 coupon each year
      </Text>
      {[
        { y: 66, price: '£100', yieldTxt: '5 ÷ 100 = 5.0%', note: 'issued at face value', colour: 'var(--muted)' },
        { y: 132, price: '£125', yieldTxt: '5 ÷ 125 = 4.0%', note: 'price UP → yield DOWN', colour: SOCIAL },
        { y: 198, price: '£80', yieldTxt: '5 ÷ 80 = 6.25%', note: 'price DOWN → yield UP', colour: LOSS },
      ].map((r) => (
        <g key={r.price}>
          <rect x={34} y={r.y} width={100} height={48} rx="8" fill={r.colour} fillOpacity="0.14" stroke={r.colour} strokeWidth="1.5" />
          <Text x={84} y={r.y + 22} colour="var(--fg)">{r.price}</Text>
          <Text x={84} y={r.y + 38} colour="var(--muted)" size="note">market price</Text>
          <Arrow x1={140} y1={r.y + 24} x2={186} y2={r.y + 24} colour={r.colour} width={1.6} />
          <rect x={192} y={r.y} width={120} height={48} rx="8" fill={r.colour} fillOpacity="0.14" stroke={r.colour} strokeWidth="1.5" />
          <Text x={252} y={r.y + 22} colour="var(--fg)" size="note">{r.yieldTxt}</Text>
          <Text x={252} y={r.y + 38} colour="var(--muted)" size="note">yield</Text>
          <Text x={322} y={r.y + 28} anchor="start" colour={r.colour} size="note">{r.note.split(' → ')[0]}</Text>
        </g>
      ))}
      <Note x={200} y={272} colour={SUPPLY}>
        yield = coupon ÷ price, so the two always move opposite ways
      </Note>
    </Figure>
  )
}

/* ================================= CONSUMER SURPLUS AND PRICE */

function SurplusChange() {
  const panel = (ox, pFrac, label, colour) => {
    const dTop = 60
    const dBot = 210
    const x0 = ox - 62
    const x1 = ox + 78
    const yAt = (f) => dTop + (1 - f) * (dBot - dTop)
    // demand runs from (x0, dTop) to (x1, dBot)
    const qAt = (f) => x0 + (1 - f) * (x1 - x0)
    return (
      <g>
        <Seg x1={x0} y1={dBot} x2={x1 + 8} y2={dBot} colour="var(--fg)" width={1.4} />
        <Seg x1={x0} y1={dTop - 8} x2={x0} y2={dBot} colour="var(--fg)" width={1.4} />
        <Shade points={`${x0},${dTop} ${x0},${yAt(pFrac)} ${qAt(pFrac)},${yAt(pFrac)}`} fill={colour} opacity="0.4" />
        <Seg x1={x0} y1={dTop} x2={x1} y2={dBot} colour={DEMAND} width={2} />
        <Seg x1={x0} y1={yAt(pFrac)} x2={qAt(pFrac)} y2={yAt(pFrac)} colour={SUPPLY} width={1.8} />
        <Text x={ox + 6} y={dBot + 16} colour="var(--muted)" size="note">{label}</Text>
        <Text x={x0 - 6} y={yAt(pFrac) + 4} anchor="end" colour="var(--muted)" size="note">P</Text>
      </g>
    )
  }
  return (
    <Figure
      title="How a price change affects consumer surplus"
      desc="Two panels showing the same demand curve at a low price and at a higher price, with the consumer surplus triangle shaded in each - much larger at the lower price."
      caption="Consumer surplus is the area under the demand curve and above the price. A price RISE shrinks it twice over: existing buyers pay more, and some buyers leave the market altogether. The size of the loss depends on PED - with inelastic demand consumers keep buying and lose a great deal of surplus, which is exactly why taxing an inelastic good raises revenue effectively but costs consumers heavily."
    >
      {/* pFrac is the price as a fraction of the axis, so a LOW pFrac is a
          low price and therefore the LARGE surplus. These were the wrong way
          round, which drew the small triangle under "large surplus". */}
      {panel(104, 0.3, 'lower price - large surplus', SOCIAL)}
      {panel(292, 0.66, 'higher price - small surplus', LOSS)}
      <Note x={200} y={252}>the shaded triangle is consumer surplus</Note>
      <Note x={200} y={272} colour="var(--muted)">
        the more inelastic demand is, the more surplus a price rise transfers away
      </Note>
    </Figure>
  )
}

/* ============================ SAME COST SHOCK, DIFFERENT PED */

function CostShockElasticity() {
  const panel = (ox, steep, title, colour, priceNote) => {
    const top = 62
    const bot = 206
    const x0 = ox - 62
    const x1 = ox + 74
    // demand: steep or shallow through the same initial equilibrium
    const eqX = ox + 4
    const eqY = 150
    const dx1 = steep ? 26 : 74
    const dy1 = steep ? 84 : 34
    return (
      <g>
        <Seg x1={x0} y1={bot} x2={x1 + 8} y2={bot} colour="var(--fg)" width={1.4} />
        <Seg x1={x0} y1={top - 10} x2={x0} y2={bot} colour="var(--fg)" width={1.4} />
        <Seg x1={eqX - dx1} y1={eqY - dy1} x2={eqX + dx1} y2={eqY + dy1} colour={DEMAND} width={2} />
        {/* supply, and supply shifted up by the cost rise */}
        <Seg x1={x0 + 6} y1={bot - 12} x2={x1} y2={top + 8} colour={SUPPLY} width={2} />
        <Seg x1={x0 + 6} y1={bot - 48} x2={x1} y2={top - 28} colour={SOCIAL} width={2} dashed />
        <Dot x={eqX} y={eqY} r={3.2} colour="var(--fg)" />
        <Text x={ox} y={44} colour={colour}>{title}</Text>
        <Text x={ox} y={bot + 16} colour="var(--muted)" size="note">{priceNote}</Text>
      </g>
    )
  }
  return (
    <Figure
      title="The same cost rise in two markets with different PED"
      desc="Two markets facing an identical upward shift in supply - one with steep, inelastic demand and one with shallow, elastic demand - showing a large price rise and small quantity fall in the first, and the reverse in the second."
      caption="An identical 20% cost increase has completely different effects depending on PED. With INELASTIC demand (petrol) the firm passes almost all of it on: price rises a lot, quantity barely falls, and revenue may even rise. With ELASTIC demand (one brand of cola) the firm cannot pass it on: price rises little, quantity falls sharply, and the producer absorbs the cost in its margin."
    >
      {panel(104, true, 'Inelastic demand', SUPPLY, 'big price rise, small ΔQ')}
      {panel(292, false, 'Elastic demand', SOCIAL, 'small price rise, big ΔQ')}
      <Note x={200} y={250} colour="var(--muted)">
        identical supply shift - the demand curve decides who bears the cost
      </Note>
      <Note x={200} y={272}>this is tax incidence, and the shutdown decision, in one picture</Note>
    </Figure>
  )
}

/* ============================ PROFIT-CONSTRAINED OBJECTIVES */

function ProfitConstraint() {
  const ax = (q) => px(0.04 + q * 0.9)
  const ay = (v) => py(0.06 + v * 0.9)
  const ar = (q) => 0.92 - 0.85 * q
  const ac = (q) => 0.34 + 0.62 * (q - 0.52) ** 2
  const plot = (f, from = 0.06, to = 0.96) => {
    const pts = []
    for (let q = from; q <= to + 1e-9; q += 0.02) pts.push(`${ax(q)} ${ay(f(q))}`)
    return `M ${pts.join(' L ')}`
  }
  // sales volume max is where AR = AC (normal profit) - the larger root
  const qMax = (0.85 - 0.62 * 2 * 0.52 + Math.sqrt((0.62 * 2 * 0.52 - 0.85) ** 2 - 4 * 0.62 * (0.34 + 0.62 * 0.52 ** 2 - 0.92))) / (2 * 0.62)
  return (
    <Figure
      title="Sales maximisation subject to a minimum profit constraint"
      desc="An average revenue curve above a U-shaped average cost curve, with the unconstrained sales-volume-maximising output where they cross and a smaller constrained output where a required profit margin is still met."
      caption="A manager pursuing sales volume would produce where AR = AC, earning only normal profit. But shareholders usually require a MINIMUM profit - enough to keep them from selling or replacing the board - so output is pulled back from Q to Q*, where that margin is still met. This is the practical resolution of the principal–agent problem: managers pursue their own objective, but only within a constraint the owners set."
    >
      <Axes xLabel="Output" yLabel="Price / cost" />
      <Curve d={plot(ar)} colour={DEMAND} label="AR = D" lx={ax(0.9)} ly={ay(ar(0.86)) - 8} />
      <Curve d={plot(ac)} colour={SUPPLY} label="AC" lx={ax(0.88)} ly={ay(ac(0.88)) - 10} />
      <Guides x={ax(qMax)} y={ay(ar(qMax))} xText="Q" />
      <Guides x={ax(qMax - 0.17)} y={ay(ar(qMax - 0.17))} xText="Q*" />
      <Seg x1={ax(qMax - 0.17)} y1={ay(ac(qMax - 0.17))} x2={ax(qMax - 0.17)} y2={ay(ar(qMax - 0.17))} colour={SOCIAL} width={2.4} />
      <Text x={ax(qMax - 0.17) + 8} y={(ay(ac(qMax - 0.17)) + ay(ar(qMax - 0.17))) / 2 + 4} anchor="start" colour={SOCIAL} size="note">
        required profit
      </Text>
      <Note x={ax(0.42)} y={ay(0.2)}>Q = sales volume max (normal profit only)</Note>
      <Note x={ax(0.42)} y={ay(0.1)} colour={SOCIAL}>Q* = pulled back to meet the owners&apos; profit</Note>
    </Figure>
  )
}

/* ============================ EXTERNAL ECONOMIES OF SCALE */

/*
  The distinction students most often lose marks on: internal economies
  move the firm ALONG its LRAC curve, external ones move the WHOLE CURVE.
  Drawing both on one pair of axes is the only way to make that visible -
  a single falling curve cannot show it, which is why the topic needs its
  own diagram rather than borrowing the internal one.
*/
function ExternalEconomies() {
  const curve = (shift) =>
    `M ${px(0.08)} ${py(0.86 - shift)} Q ${px(0.44)} ${py(0.2 - shift)} ${px(0.92)} ${py(0.66 - shift)}`
  return (
    <Figure
      title="External economies and diseconomies of scale"
      desc="Two long-run average cost curves on the same axes, the lower one showing the whole curve shifted down by external economies of scale and the upper one shifted up by external diseconomies."
      caption="An INTERNAL economy moves the firm along its own LRAC curve as its output rises. An EXTERNAL economy shifts the WHOLE curve down, because the industry - not the firm - has grown: a bigger pool of trained labour, suppliers clustering nearby, better infrastructure. A firm that has not changed its own output at all still gets cheaper. External DISECONOMIES shift it up, when firms bid against each other for the same scarce inputs and drive their price up."
    >
      <Axes xLabel="Output" yLabel="Long-run average cost" />
      <Curve d={curve(-0.12)} colour={LOSS} label="LRAC₂" lx={px(0.93)} ly={py(0.82)} />
      <Curve d={curve(0)} colour={SUPPLY} label="LRAC₁" lx={px(0.93)} ly={py(0.7)} />
      <Curve d={curve(0.16)} colour={SOCIAL} label="LRAC₃" lx={px(0.93)} ly={py(0.54)} />
      {/* The three curves are parallel by construction, so the gaps between
          them are equal and narrow - a label placed inside the band sits on
          a curve wherever you put it. Both captions therefore go OUTSIDE
          the band: the downward shift labelled below the lowest curve, the
          upward shift above the highest. */}
      <ShiftArrow x1={px(0.62)} y1={py(0.46)} x2={px(0.62)} y2={py(0.33)} colour={SOCIAL} />
      <Note x={px(0.62)} y={py(0.2)} colour={SOCIAL}>
        external economies
      </Note>
      <ShiftArrow x1={px(0.3)} y1={py(0.58)} x2={px(0.3)} y2={py(0.68)} colour={LOSS} />
      <Note x={px(0.3)} y={py(0.79)} colour={LOSS}>
        external diseconomies
      </Note>
    </Figure>
  )
}

/*
  The classical (neoclassical) AD/AS picture, kept alongside the Keynesian
  one used everywhere else: a vertical LRAS at full-employment output with
  an upward-sloping SRAS through it. Students are expected to know both
  and to say which they are drawing; this is the one to reach for when a
  question is explicitly about the long run in the classical sense, or
  about the SRAS/LRAS distinction.
*/
function AdAsClassical() {
  const DEMAND = 'var(--brand-strong)'
  const SUPPLY = '#e08a2c'
  const SOCIAL = '#2e9e6b'
  // SRAS: p = 0.1 + 0.8y ; AD: p = 0.98 - y ; meet at y = 0.4889, p = 0.4911
  const ye = 0.88 / 1.8
  const pe = 0.98 - ye
  return (
    <Figure
      title="Classical AD/AS: vertical LRAS and upward-sloping SRAS"
      desc="A vertical long-run aggregate supply curve at full-employment output, an upward-sloping short-run aggregate supply curve, and aggregate demand, all meeting at one point."
      caption="In the classical model LRAS is vertical at the full-employment level of output Yf: in the long run output is fixed by the economy's resources and productivity, so a rise in AD only raises the price level. SRAS slopes upward because some costs are fixed in the short run. Long-run equilibrium is where all three meet. Contrast the Keynesian AS curve, which is flat when there is spare capacity - the version used in most diagrams on this site."
    >
      <Axes xLabel="Real output (Y)" yLabel="Price level" />
      <line x1={px(ye)} y1={TOP} x2={px(ye)} y2={O.y} stroke={SOCIAL} strokeWidth="2.2" />
      <Text x={px(ye)} y={TOP - 6} colour={SOCIAL}>LRAS</Text>
      <Curve
        d={`M ${px(0.08)} ${py(0.1 + 0.8 * 0.08)} L ${px(0.9)} ${py(0.1 + 0.8 * 0.9)}`}
        colour={SUPPLY}
        label="SRAS"
        lx={px(0.9) + 4}
        ly={py(0.1 + 0.8 * 0.9) + 4}
      />
      <Curve
        d={`M ${px(0.08)} ${py(0.9)} L ${px(0.9)} ${py(0.08)}`}
        colour={DEMAND}
        label="AD"
        lx={px(0.9) + 4}
        ly={py(0.08) + 4}
      />
      <Guides x={px(ye)} y={py(pe)} xText="Yf" yText="P₁" />
      <Note x={px(ye) + 10} y={py(0.9)} anchor="start">long run: output fixed at Yf</Note>
    </Figure>
  )
}

/* ======================================= EFFICIENCY (3.4.1) */

/*
  Productive and allocative efficiency on one pair of axes. Productive
  efficiency is the bottom of the AC curve, where MC cuts it; allocative
  efficiency is where price (the demand curve) equals MC. They coincide
  only in perfect competition, which is the whole point of the chapter:
  every other market structure fails at least one of them.
*/
function Efficiency() {
  const ax = (q) => px(0.04 + q * 0.9)
  const ay = (v) => py(0.06 + v * 0.9)
  const c = 0.5
  const ac = (q) => 0.36 + 0.7 * (q - c) ** 2
  const mc = (q) => 0.36 + 0.7 * (q - c) ** 2 + q * 1.4 * (q - c)
  const d = (q) => 0.94 - 0.6 * q
  const plot = (f, from, to) => {
    const pts = []
    for (let q = from; q <= to + 1e-9; q += 0.02) pts.push(`${ax(q)} ${ay(f(q))}`)
    return `M ${pts.join(' L ')}`
  }
  // allocative efficiency: D = MC, found numerically
  let qa = 0.3
  for (let i = 0; i < 60; i += 1) qa += (d(qa) - mc(qa)) * 0.3
  return (
    <Figure
      title="Productive and allocative efficiency"
      desc="A U-shaped average cost curve, a marginal cost curve cutting it at its lowest point, and a downward-sloping demand curve. The productively efficient output is marked at the bottom of average cost; the allocatively efficient output is marked where demand meets marginal cost."
      caption="Productive efficiency: output at the LOWEST point of the average cost curve, where MC = AC, so no resources are wasted making each unit. Allocative efficiency: output where PRICE = MC, so the value consumers place on the last unit equals what it cost society to make. X-inefficiency is a firm sitting ABOVE its AC curve altogether - organisational slack a monopolist can afford. Dynamic efficiency has no point on this diagram: it is the whole AC curve shifting down over time through investment and innovation."
    >
      <Axes xLabel="Output" yLabel="Price / cost" />
      <Curve d={plot(ac, 0.14, 0.92)} colour={SUPPLY} label="AC" lx={ax(0.9)} ly={ay(ac(0.92)) - 8} />
      <Curve d={plot(mc, 0.2, 0.82)} colour={LOSS} label="MC" lx={ax(0.8)} ly={ay(mc(0.82)) - 8} />
      <Curve d={plot(d, 0.04, 0.96)} colour={DEMAND} label="D = AR" lx={ax(0.94)} ly={ay(d(0.96)) + 14} />
      <Curve d={plot((q) => ac(q) + 0.12, 0.24, 0.84)} colour={ALT} dashed />
      <Guides x={ax(c)} y={ay(ac(c))} xText="Qₚ" />
      <Guides x={ax(qa)} y={ay(d(qa))} xText="Qₐ" />
      <Note x={ax(0.56)} y={ay(0.92)} colour={ALT}>
        dashed: X-inefficient AC (slack)
      </Note>
      <Note x={ax(0.3)} y={ay(0.16)} colour={SUPPLY}>
        Qₚ: min AC, MC = AC → productive
      </Note>
      <Note x={ax(0.3)} y={ay(0.07)} colour={DEMAND}>
        Qₐ: P = MC → allocative
      </Note>
    </Figure>
  )
}

/* ======================================= TERMS OF TRADE (4.1.4) */

/*
  Terms of trade are an INDEX, not a curve on supply and demand: export
  prices over import prices, times 100. The diagram that teaches it is the
  two price indices over time, with the ratio improving while export
  prices outrun import prices and deteriorating when they fall behind.
*/
function TermsOfTrade() {
  const years = ['Y1', 'Y2', 'Y3', 'Y4', 'Y5']
  const exportIdx = [100, 108, 118, 120, 118]
  const importIdx = [100, 104, 106, 116, 130]
  const ax = (i) => px(0.08 + i * 0.19)
  const ay = (v) => py(((v - 90) / 50) * 0.92 + 0.04)
  const line = (arr) => `M ${arr.map((v, i) => `${ax(i)} ${ay(v)}`).join(' L ')}`
  const tot = exportIdx.map((e, i) => Math.round((e / importIdx[i]) * 100))
  return (
    <Figure
      title="The terms of trade as an index"
      desc="Two lines over five years: an export price index and an import price index, both starting at 100. Export prices rise faster at first, so the terms of trade improve, then import prices overtake and the terms of trade deteriorate. The ratio for each year is printed along the bottom."
      caption="Terms of trade = (index of export prices ÷ index of import prices) × 100. An IMPROVEMENT (the ratio rises) means each unit of exports buys more imports - good for living standards, but it can hurt competitiveness if it comes from dearer exports. A DETERIORATION means the country must export more to afford the same imports, which is the Prebisch-Singer worry for primary-product exporters. Whether either is good depends on WHY it happened and on the elasticity of demand for the country's exports."
    >
      <Axes xLabel="Year" yLabel="Index (Y1 = 100)" />
      <Curve d={line(exportIdx)} colour={DEMAND} label="Export prices" lx={ax(4)} ly={ay(exportIdx[4]) - 10} />
      <Curve d={line(importIdx)} colour={SUPPLY} label="Import prices" lx={ax(4)} ly={ay(importIdx[4]) - 10} />
      {years.map((y, i) => (
        <Text key={y} x={ax(i)} y={O.y + 15} colour="var(--muted)" size="note">
          {y}
        </Text>
      ))}
      {tot.map((t, i) => (
        <Text key={`t${i}`} x={ax(i)} y={O.y - 6} colour={t >= 100 ? SOCIAL : LOSS} size="note">
          {t}
        </Text>
      ))}
      <Seg x1={px(0.08)} y1={ay(100)} x2={px(0.86)} y2={ay(100)} colour="var(--muted)" width={1} dashed />
      <Note x={px(0.34)} y={ay(126)} colour={SOCIAL}>
        exports outrun imports → ToT improves
      </Note>
      <Note x={px(0.72)} y={ay(138)} colour={LOSS}>
        imports overtake → ToT deteriorates
      </Note>
      <Note x={px(0.5)} y={O.y - 20} colour="var(--muted)">
        ToT index each year (Px ÷ Pm × 100)
      </Note>
    </Figure>
  )
}

export const ECON_GAP_DIAGRAMS = {
  'external-economies': ExternalEconomies,
  'monetary-transmission': MonetaryTransmission,
  'quantitative-easing': QuantitativeEasing,
  'long-run-phillips': LongRunPhillips,
  'lrac-envelope': LracEnvelope,
  'liquidity-trap': LiquidityTrap,
  'bond-price-yield': BondPriceYield,
  'surplus-change': SurplusChange,
  'cost-shock-elasticity': CostShockElasticity,
  'profit-constraint': ProfitConstraint,
  'ad-as-classical': AdAsClassical,
  efficiency: Efficiency,
  'terms-of-trade': TermsOfTrade,
}
