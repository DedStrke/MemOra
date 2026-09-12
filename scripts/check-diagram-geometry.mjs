/*
  Assert the relationships the Economics diagrams claim in their captions.

  A diagram can be registered, mapped to the right chapter and rendered
  without error while still showing the wrong economics. That is exactly what
  happened: AR crossed AC in the long-run monopolistic competition diagram,
  putting supernormal profit into a picture captioned "profit competed away",
  and the tariff sat above the autarky price, so the imports it labelled
  could not exist. Both passed every check there was.

  These are the claims. If a curve is ever re-tuned, this fails.

  Run: node --import ./scripts/resolve-ext.mjs scripts/check-diagram-geometry.mjs
*/
import {
  acOf, mcOf, arOf, mrOf, AC_MIN_Q, Q_LO, Q_HI, P_PC, Q_PC, Q_MC,
  AUTARKY_P, PW, TARIFF, QS_F, QD_F, QS_T, QD_T, demandP, supplyP,
  mpcN, mscN, msbN, QM_NEG, QS_NEG, EXTERNAL_COST,
  mscM, mpbM, msbM, QM_MERIT, QS_MERIT, EXTERNAL_BENEFIT,
  EXT_Q_MAX, EXT_V_MAX,
  afcOf, avcOf, acSrOf, mcSrOf, AVC_MIN_Q, AC_SR_MIN_Q,
  arMon, mrMon, mcMon, acMon, QM_MON, QC_MON, MON_Q_MAX, MON_V_MAX,
  taxD, taxS, taxSPlus, TAX, TAX_Q0, TAX_P0, TAX_Q1, TAX_PC, TAX_PP,
  subS, subSLess, SUBSIDY, SUB_Q0, SUB_Q1, SUB_P0, SUB_PC, SUB_PP,
} from '../src/components/diagrams/econGeometry.js'

const fails = []
const near = (a, b, tol = 1e-6) => Math.abs(a - b) < tol
const check = (claim, ok) => {
  console.log(`${ok ? 'ok  ' : 'FAIL'}  ${claim}`)
  if (!ok) fails.push(claim)
}

// ---- costs
check('MC cuts AC exactly at minimum AC', near(mcOf(AC_MIN_Q), acOf(AC_MIN_Q)))
check(
  'AC really is at its minimum there',
  acOf(AC_MIN_Q) < acOf(AC_MIN_Q - 0.5) && acOf(AC_MIN_Q) < acOf(AC_MIN_Q + 0.5),
)
check('MC is below AC to the left of the minimum', mcOf(AC_MIN_Q - 1) < acOf(AC_MIN_Q - 1))
check('MC is above AC to the right of it', mcOf(AC_MIN_Q + 1) > acOf(AC_MIN_Q + 1))

// ---- perfect competition, short run
check('the firm produces where MC = P', near(mcOf(Q_PC), P_PC, 1e-9))
check('that output is on the RISING arm of MC', mcOf(Q_PC + 0.01) > mcOf(Q_PC))
check('price exceeds AC, so profit is supernormal', P_PC > acOf(Q_PC))
check('the chosen output lies inside the plot window', Q_PC > Q_LO && Q_PC < Q_HI)

// ---- monopolistic competition, long run
check('AR touches AC at the equilibrium', near(arOf(Q_MC), acOf(Q_MC)))
check(
  'and shares its slope there, so it is TANGENT, not crossing',
  near((arOf(Q_MC + 1e-4) - arOf(Q_MC - 1e-4)) / 2e-4, (acOf(Q_MC + 1e-4) - acOf(Q_MC - 1e-4)) / 2e-4, 1e-4),
)
check(
  'AR never rises above AC, so there is no supernormal profit anywhere',
  Array.from({ length: 421 }, (_, i) => Q_LO + i * 0.01).every((q) => arOf(q) <= acOf(q) + 1e-9),
)
check('MR = MC at that same output', near(mrOf(Q_MC), mcOf(Q_MC)))
check('the tangency is left of minimum AC — excess capacity', Q_MC < AC_MIN_Q)

// ---- tariff
check('supply and demand really cross at the autarky price', near(demandP(5), supplyP(5)) && near(demandP(5), AUTARKY_P))
check('the world price is below the autarky price', PW < AUTARKY_P)
check('the tariffed price is still below it, so imports survive', PW + TARIFF < AUTARKY_P)
check('free trade imports are positive', QD_F - QS_F > 0)
check('the tariff shrinks imports without wiping them out', QD_T - QS_T > 0 && QD_T - QS_T < QD_F - QS_F)
check('domestic output rises under the tariff', QS_T > QS_F)
check('domestic consumption falls under the tariff', QD_T < QD_F)

// ---- negative production externality
check('MSC lies above MPC by exactly the external cost', near(mscN(3) - mpcN(3), EXTERNAL_COST))
check('the market produces where MPC = MSB', near(mpcN(QM_NEG), msbN(QM_NEG), 1e-9))
check('the optimum is where MSC = MSB', near(mscN(QS_NEG), msbN(QS_NEG), 1e-9))
check('Qm exceeds Q*, so the good is over-produced', QM_NEG > QS_NEG)
check(
  'both quantities and every curve fit the plot window',
  [QM_NEG, QS_NEG].every((q) => q > 0 && q < EXT_Q_MAX) &&
    [mpcN, mscN, msbN].every((f) => f(0.2) < EXT_V_MAX && f(EXT_Q_MAX - 0.2) < EXT_V_MAX && f(EXT_Q_MAX - 0.2) > 0),
)

// ---- positive consumption externality / merit good
check('MSB lies above MPB by exactly the external benefit', near(msbM(3) - mpbM(3), EXTERNAL_BENEFIT))
check('the market consumes where MPB = MSC', near(mpbM(QM_MERIT), mscM(QM_MERIT), 1e-9))
check('the optimum is where MSB = MSC', near(msbM(QS_MERIT), mscM(QS_MERIT), 1e-9))
check('Qm falls short of Q*, so the good is under-consumed', QM_MERIT < QS_MERIT)
check(
  'every merit-good curve fits the plot window',
  [mscM, mpbM, msbM].every((f) => f(0.2) < EXT_V_MAX && f(EXT_Q_MAX - 0.2) < EXT_V_MAX && f(EXT_Q_MAX - 0.2) > 0),
)

// ---- short-run cost curves
check('AC is AVC plus AFC at every output', [3, 5, 7, 9].every((q) => near(acSrOf(q), avcOf(q) + afcOf(q))))
check('MC cuts AVC at minimum AVC', near(mcSrOf(AVC_MIN_Q), avcOf(AVC_MIN_Q)))
check(
  'AVC really is at its minimum there',
  avcOf(AVC_MIN_Q) < avcOf(AVC_MIN_Q - 0.5) && avcOf(AVC_MIN_Q) < avcOf(AVC_MIN_Q + 0.5),
)
check('MC cuts AC at minimum AC', near(mcSrOf(AC_SR_MIN_Q), acSrOf(AC_SR_MIN_Q), 1e-6))
check(
  'AC really is at its minimum there',
  acSrOf(AC_SR_MIN_Q) < acSrOf(AC_SR_MIN_Q - 0.5) && acSrOf(AC_SR_MIN_Q) < acSrOf(AC_SR_MIN_Q + 0.5),
)
check('AFC falls throughout, and AC stays above AVC', afcOf(9) < afcOf(3) && [3, 5, 7, 9].every((q) => acSrOf(q) > avcOf(q)))

// ---- monopoly
check('MR has twice the slope of AR', near(mrMon(2) - mrMon(1), 2 * (arMon(2) - arMon(1))))
check('the monopolist produces where MR = MC', near(mrMon(QM_MON), mcMon(QM_MON)))
check('price is taken from AR, above MC — allocatively inefficient', arMon(QM_MON) > mcMon(QM_MON))
check('price exceeds AC there, so profit is supernormal', arMon(QM_MON) > acMon(QM_MON))
check('the competitive output is where AR = MC', near(arMon(QC_MON), mcMon(QC_MON), 1e-9))
check('the monopolist restricts output below the competitive level', QM_MON < QC_MON)
check(
  'every monopoly curve fits the plot window',
  [arMon, mcMon, acMon].every((f) => f(1.1) < MON_V_MAX && f(MON_Q_MAX) > 0 && f(MON_Q_MAX) < MON_V_MAX),
)

// ---- indirect tax
check('the free market clears where D = S', near(taxD(TAX_Q0), taxS(TAX_Q0), 1e-9) && near(taxD(TAX_Q0), TAX_P0, 1e-9))
check('S + tax sits exactly one tax above S', near(taxSPlus(3) - taxS(3), TAX))
check('the taxed market clears where D = S + tax', near(taxD(TAX_Q1), taxSPlus(TAX_Q1), 1e-9))
check('the tax raises price and cuts quantity', TAX_PC > TAX_P0 && TAX_Q1 < TAX_Q0)
check('the two burdens add up to the tax', near(TAX_PC - TAX_P0 + (TAX_P0 - TAX_PP), TAX))
check('producers keep the price paid minus the tax', near(TAX_PP, TAX_PC - TAX, 1e-9))
check(
  'the consumer bears more, because demand is the more inelastic side',
  TAX_PC - TAX_P0 > TAX_P0 - TAX_PP,
)

// ---- subsidy
check('S − subsidy sits exactly one subsidy below S', near(subS(3) - subSLess(3), SUBSIDY))
check('the free market clears where D = S', near(taxD(SUB_Q0), subS(SUB_Q0), 1e-9) && near(taxD(SUB_Q0), SUB_P0, 1e-9))
check('the subsidised market clears where D = S − subsidy', near(taxD(SUB_Q1), subSLess(SUB_Q1), 1e-9))
check('the subsidy cuts the consumer price and raises quantity', SUB_PC < SUB_P0 && SUB_Q1 > SUB_Q0)
check('producers receive the consumer price plus the subsidy', near(SUB_PP, SUB_PC + SUBSIDY, 1e-9))
check('S − subsidy never goes negative inside the plot', subSLess(0) >= 0)

console.log(fails.length ? `\n${fails.length} CLAIM(S) FAILED` : '\nEVERY CLAIM HOLDS')
process.exitCode = fails.length ? 1 : 0
