/*
  Diagram placement for the 25 answers in econ-essay-answers-3.js and
  econ-essay-answers-4.js that use a diagram (out of 48 total - the rest
  are topics the real papers do not typically expect one for, same
  reasoning as econ-essay-placement.js). Each diagram is attached to the
  first row's analysis side, one row entry per row in that answer's
  `rows` array - see econ-essay-answers.js for how this is merged in.
*/
export const ECON_ESSAY_PLACEMENT_2 = {
  Q069: [{ a: 'pes-elasticity' }],
  Q070: [{ a: 'pes-elasticity' }, {}],
  Q071: [{ a: 'consumer-producer-surplus' }, {}],
  Q072: [{ a: 'maximum-price' }, {}, {}],
  Q073: [{ a: 'negative-externality' }],
  Q074: [{ a: 'positive-externality' }, {}],
  // The CAP price floor the answer describes IS the minimum price diagram,
  // and it sits on the evaluation side because that is where the surplus is
  // used as the evidence of government failure.
  Q076: [{ e: 'minimum-price' }, {}, {}],
  Q081: [{ a: 'lras-shift' }],
  // The answer's first row argues management diseconomies of scale, which is
  // the rising section of LRAC beyond minimum efficient scale.
  Q086: [{ a: 'economies-of-scale' }, {}, {}],
  Q082: [{ a: 'lras-shift' }, {}, {}],
  Q083: [{ a: 'phillips' }],
  Q084: [{ a: 'long-run-phillips' }, {}, {}],
  Q087: [{ a: 'efficiency' }],
  Q088: [{ a: 'perfect-competition' }, {}, {}],
  Q089: [{ a: 'perfect-competition' }],
  Q090: [{ a: 'monopoly' }, {}, {}],
  Q091: [{ a: 'game-theory' }, {}],
  Q092: [{ a: 'game-theory' }, {}, {}],
  Q093: [{ a: 'monopsony' }],
  Q094: [{ a: 'monopsony' }, {}],
  Q096: [{ a: 'limit-pricing' }, {}, {}],
  Q113: [{ a: 'monopoly' }, {}],
  Q114: [{ a: 'monopoly' }, {}, {}],
  Q115: [{ a: 'monopolistic-competition' }, {}],
  Q116: [{ a: 'monopolistic-competition' }, {}, {}],
  Q099: [{ a: 'terms-of-trade' }],
  Q100: [{ a: 'terms-of-trade' }, {}, {}],
  Q104: [{ a: 'j-curve' }, {}, {}],
  Q105: [{ a: 'exchange-rate' }],
  Q106: [{ a: 'fixed-exchange-rate' }, {}, {}],
  Q111: [{ a: 'monetary-transmission' }],
  Q121: [{ a: 'cost-curves' }, {}],
  Q122: [{ a: 'cost-curves' }, {}, {}],
  Q125: [{ a: 'cost-push' }, {}],
  Q126: [{ a: 'cost-push' }, {}, {}],
  Q131: [{ a: 'demand-shift' }, {}],
  Q132: [{ a: 'supply-demand' }, {}, {}],
  Q135: [{ a: 'labour-market' }, {}],
  Q136: [{ a: 'labour-market' }, {}, {}],
  Q140: [{ a: 'comparative-advantage' }, {}, {}],
  Q141: [{ a: 'subsidy' }, {}],
  Q142: [{ a: 'subsidy' }, {}, {}],
  Q143: [{ a: 'buffer-stock' }, {}],
  Q144: [{ a: 'buffer-stock' }, {}, {}],
  // 2.5.1 and 2.5.3, the two sub-points that had no question of their own.
  Q145: [{ a: 'ppf-shift' }, {}],
  Q146: [{ a: 'ad-shift' }, {}, {}],
  Q147: [{ a: 'output-gap' }, {}],
  Q148: [{ a: 'output-gap' }, {}, {}],
  // Diagrams added to questions that already argued exactly what these show.
  Q080: [{ a: 'phillips' }, {}, {}],
  Q102: [{}, { a: 'tariff' }, {}],
  Q120: [{}, { a: 'comparative-advantage' }, {}],
  Q134: [{ a: 'ad-shift' }, {}, {}],
  Q138: [{ a: 'monopoly' }, {}, {}],
}
