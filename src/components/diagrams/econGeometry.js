/*
  The equations behind the Economics firm and trade diagrams.

  Kept in a plain module, apart from the JSX, so a script can import them and
  CHECK the relationships the captions claim. That is the whole point: the
  first version of these diagrams was drawn with hand-placed Bezier control
  points, and two of them were wrong in ways no amount of re-reading the code
  would reveal - MC crossed AC away from minimum AC, and AR crossed AC
  instead of touching it, putting supernormal profit into a diagram captioned
  "profit competed away". Deriving the curves from formulas makes those
  relationships exact; exporting the formulas makes them testable.

  scripts/check-diagram-geometry.mjs asserts every claim listed here.
*/

/* ---------------------------------------------------------------- COSTS */

/*
  AC has its minimum at q = 4, and MC is the derivative of total cost, so
  MC necessarily cuts AC at that minimum:

    AC(q) = 3 + ½(q − 4)²
    TC(q) = q·AC(q) = 3q + ½q(q − 4)²
    MC(q) = dTC/dq = 3 + ½(q − 4)² + q(q − 4)
*/
export const acOf = (q) => 3 + 0.5 * (q - 4) ** 2
export const mcOf = (q) => 3 + 0.5 * (q - 4) ** 2 + q * (q - 4)
export const AC_MIN_Q = 4

/* Plot window shared by the firm diagrams. */
export const Q_LO = 0.8
export const Q_HI = 5
export const V_HI = 9

/*
  Perfect competition, short run. The firm is a price taker at P = 5 and
  produces where MC = P on the RISING arm of MC. Setting MC(q) = 5 gives
  1.5q² − 8q + 6 = 0; the upper root is the profit-maximising one, and it
  lies above AC_MIN_Q, so price exceeds AC and there is supernormal profit.
*/
export const P_PC = 5
export const Q_PC = (8 + Math.sqrt(64 - 36)) / 3

/*
  Monopolistic competition, long run. AR must be TANGENT to AC - equal in
  both value and slope at the same output - and MR must meet MC there too:

    AR(q) = 6.5 − q,  AR'(q) = −1 = AC'(q) = q − 4  ⇒  q = 3
    AR(3) = 3.5 = AC(3)          tangent, so only normal profit
    MR(3) = 0.5 = MC(3)          and that output maximises profit

  The tangency at q = 3 sits left of minimum AC at q = 4: excess capacity.
*/
export const arOf = (q) => 6.5 - q
export const mrOf = (q) => 6.5 - 2 * q
export const Q_MC = 3

/* ------------------------------------------------------- EXTERNALITIES */

/*
  Every externality diagram shares one plot window - quantity 0-9, value
  0-13 - so the three of them read as variants of one model rather than
  three unrelated pictures.

  NEGATIVE PRODUCTION externality. Firms pay MPC, society pays MSC, and the
  gap between them is the external cost:

    MPC(q) = 1 + 0.8q        MSC(q) = MPC(q) + 3        MSB = MPB = 12 − 0.9q

  Market  MPC = MSB  ⇒  Qm = 11/1.7 ≈ 6.47
  Optimum MSC = MSB  ⇒  Q* =  8/1.7 ≈ 4.71

  Qm > Q*, so the good is OVER-produced.
*/
export const EXT_Q_MAX = 9
export const EXT_V_MAX = 13
export const EXTERNAL_COST = 3
export const mpcN = (q) => 1 + 0.8 * q
export const mscN = (q) => mpcN(q) + EXTERNAL_COST
export const msbN = (q) => 12 - 0.9 * q
export const QM_NEG = 11 / 1.7
export const QS_NEG = 8 / 1.7

/* ---------------------------------------------------- MERIT GOOD / MSB */

/*
  The merit good (positive consumption externality) diagram, in the notation
  the specification marks: MPB, MSB and MSC, with Qm and Q*.

    MSC(q) = MPC(q) = 1 + 0.8q      no production externality, so they coincide
    MPB(q) = 9 − 0.9q               what the consumer acts on
    MSB(q) = 12 − 0.9q              MPB plus the external benefit of 3

  Market outcome  MPB = MSC  ⇒  Qm = 8/1.7  ≈ 4.71
  Social optimum  MSB = MSC  ⇒  Q* = 11/1.7 ≈ 6.47

  Qm < Q*, so the good is under-consumed, and the welfare loss is the
  triangle bounded by MSB, MPB and MSC between the two quantities.
*/
export const mscM = (q) => 1 + 0.8 * q
export const mpbM = (q) => 9 - 0.9 * q
export const msbM = (q) => 12 - 0.9 * q
export const EXTERNAL_BENEFIT = 3
export const QM_MERIT = 8 / 1.7
export const QS_MERIT = 11 / 1.7

/* ------------------------------------------------------- TAX / SUBSIDY */

/*
  Deliberately UNEQUAL slopes, so the incidence split is visible.

    D: P = 9 − 1.2q      steeper, so demand is the more inelastic side
    S: P = 1 + 0.5q

  Free market   q = 8/1.7 ≈ 4.71, P ≈ 3.35.
  With a specific tax of 2.5 the supply curve shifts up by the full tax:
  S+tax: P = 3.5 + 0.5q, giving q ≈ 3.24 and a consumer price of ≈ 5.12.
  Producers keep 5.12 − 2.5 ≈ 2.62, so the consumer bears ≈ 1.77 of the 2.5
  and the producer ≈ 0.73 - more falls on the inelastic side, which is the
  examinable point.

  The value range is 0-10 rather than 0-13 so those three price levels are
  far enough apart on the axis to be labelled separately; at the old scale
  P₁ and Pp were 10px apart and their labels overlapped.
*/
export const taxD = (q) => 9 - 1.2 * q
export const taxS = (q) => 1 + 0.5 * q
export const TAX = 2.5
export const taxSPlus = (q) => taxS(q) + TAX
export const TAX_Q0 = 8 / 1.7
export const TAX_P0 = taxS(TAX_Q0)
export const TAX_Q1 = 5.5 / 1.7
export const TAX_PC = taxD(TAX_Q1) //          price paid by consumers
export const TAX_PP = TAX_PC - TAX //          price kept by producers
export const TAX_Q_MAX = 8
export const TAX_V_MAX = 10

/*
  The subsidy market, same demand with supply lifted so that S − subsidy
  still starts at zero rather than below the axis:

    D: P = 9 − 1.2q      S: P = 2 + 0.5q      subsidy = 2
*/
export const SUBSIDY = 2
export const subS = (q) => 2 + 0.5 * q
export const subSLess = (q) => subS(q) - SUBSIDY
export const SUB_Q0 = 7 / 1.7
export const SUB_Q1 = 9 / 1.7
export const SUB_P0 = taxD(SUB_Q0)
export const SUB_PC = taxD(SUB_Q1) //          price paid by consumers
export const SUB_PP = SUB_PC + SUBSIDY //      price received by producers

/* --------------------------------------------------------- COST CURVES */

/*
  Short-run cost curves, derived from one total cost function so the
  defining relationships actually hold rather than being asserted:

    FC = 12,  VC(q) = 3q − 0.6q² + 0.06q³
    AFC(q) = 12/q      AVC(q) = 3 − 0.6q + 0.06q²      AC = AFC + AVC
    MC(q)  = dTC/dq = 3 − 1.2q + 0.18q²

  MC cuts AVC at its minimum (q = 5) and AC at its minimum (q ≈ 7.02), which
  is the relationship the caption claims and hand-drawn curves cannot promise.
*/
export const afcOf = (q) => 12 / q
export const avcOf = (q) => 3 - 0.6 * q + 0.06 * q * q
export const acSrOf = (q) => afcOf(q) + avcOf(q)
export const mcSrOf = (q) => 3 - 1.2 * q + 0.18 * q * q
export const AVC_MIN_Q = 5

/*
  AC is minimised where 0.12q³ − 0.6q² − 12 = 0. Solved here by bisection
  rather than pasted in as a rounded decimal: a hand-rounded 7.0216 put the
  marked point a visible distance off the curve's actual turning point, and
  broke the "MC cuts AC at minimum AC" check by more than its tolerance.
*/
export const AC_SR_MIN_Q = (() => {
  const f = (q) => 0.12 * q ** 3 - 0.6 * q ** 2 - 12
  let lo = 5
  let hi = 12
  for (let i = 0; i < 200; i += 1) {
    const mid = (lo + hi) / 2
    if (f(lo) * f(mid) <= 0) hi = mid
    else lo = mid
  }
  return (lo + hi) / 2
})()

/* ------------------------------------------------------------- MONOPOLY */

/*
  A monopolist with linear demand and a quadratic total cost:

    AR(q) = 12 − q     MR(q) = 12 − 2q
    TC(q) = 6 + 2q + 0.25q²  ⇒  MC(q) = 2 + 0.5q,  AC(q) = 6/q + 2 + 0.25q

  Profit maximum  MR = MC  ⇒  Qm = 4,  Pm = AR(4) = 8,  AC(4) = 4.5
  Allocative optimum  AR = MC  ⇒  Qc = 20/3 ≈ 6.67,  Pc ≈ 5.33

  Supernormal profit is the rectangle (Pm − AC(Qm)) × Qm; the deadweight
  loss is the triangle between Qm and Qc bounded by AR above and MC below.
*/
export const arMon = (q) => 12 - q
export const mrMon = (q) => 12 - 2 * q
export const mcMon = (q) => 2 + 0.5 * q
export const acMon = (q) => 6 / q + 2 + 0.25 * q
export const QM_MON = 4
export const QC_MON = 20 / 3
export const MON_Q_MAX = 10
export const MON_V_MAX = 13

/* ---------------------------------------------------------------- TRADE */

/*
  The tariff market.

    D: P = 10 − 0.9q      S: P = 1 + 0.9q      autarky at q = 5, P = 5.5

  Both the world price and the tariffed price must sit BELOW the autarky
  price, or domestic supply already covers domestic demand and there is
  nothing to import. The first version put Pw + T above it, so the "imports"
  it labelled could not exist.
*/
export const demandP = (q) => 10 - 0.9 * q
export const supplyP = (q) => 1 + 0.9 * q
export const supplyAt = (p) => (p - 1) / 0.9
export const demandAt = (p) => (10 - p) / 0.9
export const AUTARKY_P = 5.5
export const PW = 2.5
export const TARIFF = 1.5
export const QS_F = supplyAt(PW) //          domestic supply, free trade
export const QD_F = demandAt(PW) //          domestic demand, free trade
export const QS_T = supplyAt(PW + TARIFF) // domestic supply, with the tariff
export const QD_T = demandAt(PW + TARIFF) // domestic demand, with the tariff

/* ------------------------------------------------------- KEYNESIAN AS */

/*
  The Keynesian aggregate supply curve, in plot fractions (0-1 of each
  axis). Flat at price level `floor` while there is spare capacity,
  then bending upwards ever more steeply, then vertical at full capacity
  `yf`:

    p(y) = floor                                        y ≤ y0
    p(y) = floor + (top − floor)·((y − y0)/(yf − y0))^k  y0 < y < yf
    p    = anything ≥ p(yf)                             y = yf

  Every AD/AS diagram that wants the Keynesian shape plots THIS, and finds
  its equilibria by solving p(y) = AD(y) numerically, so the guides land
  exactly where the curves cross rather than where a control point was
  dragged to. The classical vertical LRAS is the special case y0 = yf.
*/
export const keynesianAS = ({ floor = 0.18, y0 = 0.36, yf = 0.74, top = 0.9, k = 2.6 } = {}) => {
  const p = (y) => {
    if (y <= y0) return floor
    if (y >= yf) return top
    return floor + (top - floor) * ((y - y0) / (yf - y0)) ** k
  }
  return { p, floor, y0, yf, top, k }
}

/* Linear AD in the same fractions: p = a − b·y. */
export const linearAD = (a, b) => ({ a, b, p: (y) => a - b * y })

/*
  Where an AD line meets a Keynesian AS curve. On the vertical section
  the solution is y = yf with p read off AD; elsewhere it is found by
  bisection on p_AS(y) − p_AD(y), which is monotone increasing in y.
*/
export const keynesianEquilibrium = (as, ad) => {
  if (ad.p(as.yf) >= as.p(as.yf)) return { y: as.yf, p: ad.p(as.yf) }
  let lo = 0
  let hi = as.yf
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2
    if (as.p(mid) - ad.p(mid) > 0) hi = mid
    else lo = mid
  }
  const y = (lo + hi) / 2
  return { y, p: ad.p(y) }
}
