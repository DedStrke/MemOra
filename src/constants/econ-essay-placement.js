/*
  Where each diagram sits inside a developed answer.

  One entry per question, one object per row of the analysis-beside-
  evaluation table: `a` is the diagram (or diagrams) that support the
  chain of ANALYSIS on the left, `e` the diagram(s) that support the
  EVALUATION on the right. The planner renders each as a full-width band
  directly under its row, colour-coded to the side it belongs to, so a
  reader sees the diagram next to the paragraph that uses it and knows
  whether it is earning KAA marks or evaluation marks.

  Most `e` diagrams were added for this purpose: the Laffer curve under a
  tax evaluation, the J-curve under a depreciation, the classical LRAS
  under a Keynesian argument. Their numbered steps live in
  econ-essay-annotations.js like every other diagram's. A row with no
  entry has no diagram, which is normal - not every chain needs one.
*/
export const ECON_ESSAY_PLACEMENT = {
  Q001: [{}, { a: 'ppf', e: 'ppf-shift' }, {}],
  Q002: [{ a: 'cost-shock-elasticity' }, { e: 'elasticity' }, {}],
  Q003: [{ a: 'negative-externality', e: 'indirect-tax' }, { a: 'public-goods' }, { e: 'maximum-price' }],
  Q004: [{ a: 'indirect-tax', e: 'elasticity' }, {}, { e: 'laffer' }],
  Q005: [{ a: 'output-gap' }, { a: 'phillips' }, {}],
  Q006: [{ a: 'monetary-transmission' }, { a: 'ad-shift' }, { a: 'exchange-rate', e: 'j-curve' }],
  Q007: [{ a: 'lras-shift' }, { a: 'ppf-shift' }, { a: 'ad-shift' }],
  Q008: [{ a: 'multiplier-effect' }, { a: 'ad-shift', e: 'bond-price-yield' }, { a: 'circular-flow' }],
  Q009: [{ a: 'ppf-shift', e: 'lorenz-curve' }, { a: 'negative-externality' }, { a: 'demand-pull', e: 'lras-shift' }],
  Q010: [{ a: 'monetary-transmission', e: 'liquidity-trap' }, { a: 'ad-shift' }, { a: 'cost-push' }],
  Q011: [{ a: 'ppf-shift' }, {}],
  Q012: [{ a: 'supply-demand' }, { a: 'negative-externality', e: 'indirect-tax' }, {}],
  Q013: [{ a: 'demand-shift' }, { a: 'pes-elasticity' }],
  Q014: [{ a: 'revenue-curves', e: 'elasticity' }, { a: 'price-discrimination' }, { a: 'game-theory' }],
  Q015: [{ a: 'public-goods' }, {}],
  Q016: [{ a: 'asymmetric-information' }, { a: 'negative-externality' }, { a: 'public-goods', e: 'monopoly' }],
  Q017: [{ a: 'tradable-permits' }, {}, { a: 'negative-externality', e: 'indirect-tax' }],
  Q018: [{ a: 'indirect-tax', e: 'negative-externality' }, { a: 'maximum-price', e: 'minimum-price' }, {}],
  Q019: [{ a: 'economies-of-scale' }, {}],
  Q020: [{ a: 'monopoly', e: 'limit-pricing' }, { a: 'economies-of-scale' }, { e: 'natural-monopoly' }],
  Q021: [{ a: 'business-objectives' }, { a: 'limit-pricing' }],
  Q022: [{ a: 'business-objectives' }, { a: 'perfect-competition', e: 'monopoly' }, { e: 'profit-constraint' }],
  Q023: [{ a: 'economies-of-scale', e: 'lrac-envelope' }, { a: 'natural-monopoly', e: 'external-economies' }],
  Q024: [{ a: 'perfect-competition', e: 'perfect-competition-short-run' }, { a: 'cost-curves', e: 'monopolistic-competition' }, {}],
  Q025: [{ a: 'monopoly', e: 'natural-monopoly' }, { a: 'monopolistic-competition' }, { e: 'limit-pricing' }],
  Q026: [{ a: 'price-discrimination' }, { e: 'surplus-change' }, { a: 'natural-monopoly' }],
  Q027: [{ a: 'monopsony' }, { e: 'labour-market' }],
  Q029: [{ a: 'monopoly' }, { a: 'natural-monopoly' }],
  Q030: [{ a: 'business-objectives', e: 'natural-monopoly' }, {}, { a: 'limit-pricing' }],
  Q031: [{ a: 'lorenz-curve' }, {}],
  Q032: [{ a: 'ad-as', e: 'ad-shift' }, { a: 'phillips', e: 'liquidity-trap' }, {}],
  Q033: [{ a: 'exchange-rate', e: 'j-curve' }, { a: 'cost-push' }],
  Q034: [{ a: 'ad-shift' }, { a: 'monetary-transmission', e: 'liquidity-trap' }, {}],
  Q035: [{ a: 'lras-shift' }, {}],
  Q036: [{ a: 'lras-shift' }, { a: 'ad-shift', e: 'ad-as-classical' }, {}],
  Q037: [{ a: 'multiplier-effect' }, { a: 'consumption-function', e: 'ad-as' }],
  Q038: [{ a: 'circular-flow' }, { a: 'ad-shift', e: 'ad-as-classical' }, { a: 'lras-shift' }],
  Q039: [{ a: 'output-gap' }, { a: 'ad-as', e: 'long-run-phillips' }],
  Q040: [{ a: 'negative-externality' }, { a: 'ppf-shift', e: 'kuznets-curve' }, { a: 'tradable-permits' }],
  Q041: [{ a: 'quantitative-easing', e: 'liquidity-trap' }, { a: 'bond-price-yield' }, {}],
  Q042: [{ a: 'ad-shift', e: 'ad-as' }, { a: 'lras-shift' }, { a: 'bond-price-yield' }],
  Q043: [{ a: 'comparative-advantage' }, {}],
  Q044: [{ a: 'tariff' }, {}, { e: 'comparative-advantage' }],
  Q045: [{ a: 'lorenz-curve' }, {}],
  Q046: [{ a: 'progressive-tax', e: 'lorenz-curve' }, { a: 'labour-market', e: 'monopsony' }, {}],
  Q047: [{ a: 'lras-shift' }, { a: 'poverty-trap' }],
  Q048: [{ a: 'comparative-advantage', e: 'tariff' }, { a: 'poverty-trap' }, {}],
  Q049: [{ a: 'asymmetric-information' }, {}],
  Q050: [{ a: 'asymmetric-information' }, {}, { e: 'liquidity-trap' }],
  Q051: [{ a: 'bond-price-yield' }, { a: 'ad-shift', e: 'ad-as' }, {}],
  Q052: [{ a: 'progressive-tax', e: 'laffer' }, { a: 'lorenz-curve' }, {}],
  Q053: [{ a: ['indirect-tax', 'positive-externality'], e: 'elasticity' }, { a: 'lras-shift' }],
  Q054: [{ a: 'indirect-tax', e: 'elasticity' }, { a: 'lras-shift', e: 'laffer' }, { a: 'cost-push' }],
  Q055: [{ a: 'labour-market' }, {}, {}],
  Q056: [{ a: ['labour-market', 'lorenz-curve'] }, {}, { a: 'progressive-tax' }],
  Q057: [{ a: 'tariff' }, {}],
  Q058: [{ a: 'tariff' }, { a: 'exchange-rate', e: 'j-curve' }, { e: 'comparative-advantage' }],
  Q059: [{ a: 'supply-demand' }, { a: ['monetary-transmission', 'ad-shift'] }, {}],
  Q060: [{ a: 'supply-demand', e: 'pes-elasticity' }, { a: 'maximum-price' }, { a: 'monetary-transmission' }],
  Q061: [{ a: ['negative-externality', 'game-theory'], e: 'tradable-permits' }, {}],
  Q062: [{ a: 'tradable-permits' }, { a: 'negative-externality' }, {}],
  Q063: [{ a: 'asymmetric-information' }, { a: 'poverty-trap' }],
  Q064: [{ a: 'poverty-trap' }, { a: 'asymmetric-information' }, {}],
}
