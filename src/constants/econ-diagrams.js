/*
  Which diagrams belong in which Economics chapter, and where in the note
  each one goes.

  Kept separate from econ-full.js so the notes stay editable prose, and so a
  diagram can be added to a chapter without touching the note text.

  Each entry lists EVERY diagram that chapter needs, in the order the notes
  introduce them. `after` is a substring of the note's HTML; the marker is
  inserted immediately after the end of the element containing it, so the
  diagram lands beside the passage that describes it. If the anchor text
  isn't found the diagram is appended to the end of the note - so an edit to
  the prose can move a diagram but never delete one.

  This list used to give most chapters a single generic stand-in - "Supply
  and Elasticity of Supply" showed a plain supply-and-demand graph because
  no PES diagram existed, and Monopolistic Competition borrowed perfect
  competition's. The audit behind it only asked "does this chapter have a
  diagram", never "does it have the RIGHT ones", so those gaps passed. Each
  chapter now lists the diagrams the specification actually examines.
*/

export const ECON_CHAPTER_DIAGRAMS = {
  /* ------------------------------------------------------- THEME 1 */
  'Economic Methodology and the Economic Problem': [
    { id: 'ppf', after: 'opportunity cost' },
  ],
  'Production Possibility Frontiers': [
    { id: 'ppf', after: 'opportunity cost' },
    { id: 'ppf-shift', after: 'shift' },
  ],
  'Economic Systems': [{ id: 'ppf' }],
  // Behavioural economics has no diagram of its own; the demand model is
  // what the rational-choice assumption underpins.
  'Rational Decision Making': [{ id: 'supply-demand' }],
  Demand: [
    { id: 'demand-shift', after: 'conditions of demand' },
    { id: 'consumer-producer-surplus', after: 'surplus' },
  ],
  'Price, Income and Cross Elasticities of Demand': [
    { id: 'elasticity' },
    { id: 'revenue-curves', after: 'revenue' },
    { id: 'cost-shock-elasticity' },
  ],
  // PES needs its OWN elastic-vs-inelastic supply diagram; it was showing a
  // generic equilibrium graph, which demonstrates nothing about elasticity.
  'Supply and Elasticity of Supply': [
    { id: 'pes-elasticity', after: 'elasticity of supply' },
    { id: 'supply-demand' },
  ],
  'Price Determination and the Price Mechanism': [
    { id: 'supply-demand', after: 'equilibrium' },
    { id: 'demand-shift' },
    { id: 'consumer-producer-surplus' },
    { id: 'surplus-change', after: 'Consumer surplus' },
  ],
  'Consumer and Producer Surplus': [
    { id: 'consumer-producer-surplus', after: 'willing to accept' },
    { id: 'surplus-change', after: 'shifts' },
  ],
  'Types of Market Failure': [
    { id: 'negative-externality' },
    { id: 'public-goods' },
    { id: 'asymmetric-information' },
  ],
  Externalities: [
    { id: 'negative-externality', after: 'Negative production' },
    { id: 'positive-externality', after: 'Positive consumption' },
  ],
  'Public Goods and Information Gaps': [
    { id: 'public-goods', after: 'free rider' },
    { id: 'asymmetric-information', after: 'information' },
  ],
  'Government Intervention in Markets': [
    { id: 'indirect-tax', after: 'tax' },
    { id: 'subsidy', after: 'subsid' },
    { id: 'maximum-price', after: 'maximum price' },
    { id: 'minimum-price', after: 'minimum price' },
    { id: 'buffer-stock', after: 'buffer' },
    { id: 'tradable-permits', after: 'permit' },
  ],
  'Government Failure': [{ id: 'maximum-price' }, { id: 'minimum-price' }],

  /* ------------------------------------------------------- THEME 2 */
  'Economic Growth': [{ id: 'output-gap' }, { id: 'ad-as' }],
  Inflation: [
    { id: 'demand-pull', after: 'Demand-pull' },
    { id: 'cost-push', after: 'Cost-push' },
  ],
  'Employment and Unemployment': [{ id: 'phillips' }, { id: 'ad-as' }],
  'Balance of Payments': [{ id: 'exchange-rate' }, { id: 'j-curve' }],
  'Components of Aggregate Demand': [{ id: 'ad-shift' }, { id: 'consumption-function' }],
  'Consumption, Savings and Investment': [{ id: 'consumption-function' }],
  'Aggregate Supply': [
    { id: 'ad-as', after: 'Keynesian' },
    { id: 'lras-shift', after: 'LRAS' },
  ],
  'The Circular Flow of Income and the Multiplier': [
    { id: 'circular-flow', after: 'circular flow' },
    { id: 'multiplier-effect', after: 'multiplier' },
  ],
  'Causes and Effects of Economic Growth': [{ id: 'lras-shift' }, { id: 'output-gap' }],
  'Output Gaps and the Trade Cycle': [{ id: 'output-gap' }, { id: 'ad-as' }],
  'Macroeconomic Objectives': [
    { id: 'phillips' },
    { id: 'long-run-phillips', after: 'natural rate' },
    { id: 'output-gap' },
  ],
  'Fiscal Policy': [{ id: 'ad-shift' }, { id: 'laffer' }, { id: 'multiplier-effect' }],
  'Monetary Policy': [
    { id: 'monetary-transmission' },
    { id: 'ad-shift' },
    { id: 'quantitative-easing', after: 'quantitative easing' },
    { id: 'liquidity-trap', after: 'lower bound' },
    { id: 'exchange-rate' },
  ],
  'Supply-Side Policy': [{ id: 'lras-shift' }],
  'Conflicts Between Objectives and the Phillips Curve': [{ id: 'phillips' }, { id: 'long-run-phillips' }],

  /* ------------------------------------------------------- THEME 3 */
  'Business Growth': [{ id: 'economies-of-scale' }],
  Demergers: [{ id: 'economies-of-scale' }],
  'Business Objectives': [
    { id: 'business-objectives' },
    { id: 'profit-constraint', after: 'principal' },
    { id: 'revenue-curves' },
  ],
  'Revenue, Costs and Profit': [
    { id: 'cost-curves', after: 'cost' },
    { id: 'revenue-curves', after: 'revenue' },
  ],
  'Economies and Diseconomies of Scale': [{ id: 'economies-of-scale' }, { id: 'lrac-envelope' }],
  Efficiency: [{ id: 'efficiency' }, { id: 'perfect-competition' }, { id: 'monopoly' }],
  'Perfect Competition': [
    { id: 'perfect-competition-short-run', after: 'short run' },
    { id: 'perfect-competition', after: 'long run' },
  ],
  // Was borrowing perfect competition's diagram, which shows a HORIZONTAL
  // AR - the exact opposite of the differentiated-product case.
  'Monopolistic Competition': [{ id: 'monopolistic-competition' }],
  Oligopoly: [
    { id: 'kinked-demand', after: 'kinked' },
    { id: 'game-theory', after: 'game theory' },
  ],
  Monopoly: [
    { id: 'monopoly' },
    { id: 'price-discrimination', after: 'price discrimination' },
    { id: 'natural-monopoly', after: 'natural monopoly' },
  ],
  Monopsony: [{ id: 'monopsony' }, { id: 'labour-market' }],
  Contestability: [{ id: 'limit-pricing' }, { id: 'monopoly' }],
  'Wage Determination': [
    { id: 'labour-market' },
    { id: 'monopsony', after: 'monopsony' },
  ],
  'Labour Market Issues': [
    { id: 'labour-market' },
    { id: 'monopsony', after: 'monopsony' },
    { id: 'trade-union', after: 'union' },
  ],
  'Government Intervention and Equity': [
    { id: 'lorenz-curve' },
    { id: 'progressive-tax', after: 'progressive' },
    { id: 'labour-market', after: 'minimum wage' },
  ],

  /* ------------------------------------------------------- THEME 4 */
  Globalisation: [{ id: 'comparative-advantage' }],
  'Terms of Trade': [{ id: 'terms-of-trade' }],
  'Protectionism and Trade Restrictions': [{ id: 'tariff' }],
  'International Competitiveness': [{ id: 'exchange-rate' }, { id: 'lras-shift' }],
  'International Trade': [
    { id: 'comparative-advantage' },
    { id: 'tariff', after: 'tariff' },
  ],
  'Trading Blocs and the WTO': [
    { id: 'tariff', after: 'tariff' },
    { id: 'comparative-advantage' },
  ],
  'The Balance of Payments': [{ id: 'j-curve' }, { id: 'exchange-rate' }],
  'Exchange Rates': [
    { id: 'exchange-rate', after: 'appreciat' },
    { id: 'j-curve', after: 'J-curve' },
    { id: 'fixed-exchange-rate', after: 'fixed' },
  ],
  'Poverty and Inequality': [
    { id: 'lorenz-curve' },
    { id: 'kuznets-curve', after: 'Kuznets' },
  ],
  'Measures and Strategies for Development': [
    { id: 'poverty-trap', after: 'Harrod' },
    { id: 'kuznets-curve' },
    { id: 'lorenz-curve' },
  ],
  'Factors Influencing Growth and Development': [{ id: 'poverty-trap' }],
  'The Role of Financial Markets': [{ id: 'bond-price-yield' }, { id: 'supply-demand' }],
  'Central Banks and Financial Regulation': [{ id: 'ad-shift' }, { id: 'exchange-rate' }],
  'Public Expenditure and Taxation': [
    { id: 'laffer', after: 'Laffer' },
    { id: 'progressive-tax', after: 'progressive' },
  ],
  'The National Debt': [{ id: 'laffer' }],
  'Macroeconomic Policies in a Global Context': [{ id: 'ad-shift' }],
}

const marker = (id) => `<div data-diagram="${id}"></div>`

/*
  Insert each chapter's markers into its note.

  Anchoring: find the anchor substring, then jump to the end of the block
  element it sits in (the next </p>, </ul>, </ol> or </table>) so a marker
  is never dropped inside a paragraph, which would split it in the renderer
  and leave a stray fragment.
*/
export function withDiagrams(notes) {
  const out = { ...notes }
  for (const [chapter, diagrams] of Object.entries(ECON_CHAPTER_DIAGRAMS)) {
    let html = out[chapter]
    if (!html) continue
    for (const { id, after } of diagrams) {
      if (html.includes(marker(id))) continue // never insert the same diagram twice
      let at = -1
      if (after) {
        const found = html.toLowerCase().indexOf(after.toLowerCase())
        if (found !== -1) {
          const closes = ['</p>', '</ul>', '</ol>', '</table>']
            .map((c) => html.indexOf(c, found))
            .filter((i) => i !== -1)
          if (closes.length) at = Math.min(...closes) + html.slice(Math.min(...closes)).indexOf('>') + 1
        }
      }
      html = at === -1 ? html + marker(id) : html.slice(0, at) + marker(id) + html.slice(at)
    }
    out[chapter] = html
  }
  return out
}
