/*
  Second pass of on-diagram annotations: the diagrams placed beside
  EVALUATIONS, and the extra analysis diagrams, added when the answers
  moved from one diagram section to diagrams-beside-rows (see
  econ-essay-placement.js). Same rule as econ-essay-annotations.js -
  every step uses the diagram's own labels - and merged with it there.
*/
export const ECON_ESSAY_ANNOTATIONS_EVAL = {
  Q001: {
    'ppf-shift': [
      'A government that borrows to invest gives up consumer goods now (a move along PPF₁) to shift the whole frontier out to PPF₂ later',
      'The opportunity cost has not disappeared - it has moved in time, onto the taxpayers who repay the debt',
    ],
  },
  Q002: {
    elasticity: [
      'Basic sliced bread is the inelastic curve: a price rise loses a small ΔQ',
      'Premium and artisan bread sit nearer the elastic curve: the same rise loses a large ΔQ, so bakers there absorb more of the cost',
    ],
  },
  Q003: {
    'indirect-tax': [
      'The tax lifts S to S + tax; the intended fall is Q₁ → Q₂, to the social optimum',
      'Set the tax too high and Q₂ lands BELOW the optimum - a new welfare loss on the other side; the government has to know the external cost to get this right',
    ],
    'public-goods': [
      'D = 0 because everyone free rides; free market quantity = 0',
      'A MISSING market: here intervention is not correcting a quantity but creating the good at all - the strongest case',
    ],
    'maximum-price': [
      'Intervention gone wrong: a max price below equilibrium cuts supply to Qs and lifts demand to Qd',
      'The shortage Qd − Qs is rationed by queues and black markets - a welfare loss the market did not have before',
    ],
  },
  Q004: {
    elasticity: [
      'Cigarettes are the inelastic curve: the duty raises price from P₁ to P₂ and quantity falls by only a small ΔQ',
      'That is why the tax raises revenue reliably and cuts consumption only slowly',
    ],
    laffer: [
      'Duty revenue rises with the rate only up to T*',
      'Past T*, smuggling and cross-border buying shrink the taxed base faster than the rate rises - revenue falls and the health gain with it',
    ],
  },
  Q006: {
    'exchange-rate': [
      'Higher UK rates draw hot money in: demand for pounds shifts from D₁ to D₂',
      'The exchange rate rises from e₁ to e₂ - exports dearer abroad, imports cheaper at home',
    ],
    'j-curve': [
      'The mirror image of a depreciation: after an appreciation net exports may improve briefly before they worsen, as volumes lag prices',
      'Only once demand for traded goods becomes elastic does (X − M) fall and AD with it - the Marshall-Lerner condition',
    ],
  },
  Q007: {
    'ad-shift': [
      'Investment is the ↑I in the label: AD shifts from AD₁ to AD₂ at once, before any capacity is built',
      'Near Yf that raises the price level P₁ → P₂; once the new capacity arrives the supply shift dominates and the pressure eases',
    ],
  },
  Q008: {
    'bond-price-yield': [
      'Borrowing to fund the spending means selling more bonds: the price falls from £100 towards £80',
      'The yield rises from 5% towards 6.25% - dearer credit for firms and households, which is crowding out',
    ],
    'circular-flow': [
      'The extra G is an injection; how much of it stays in the flow depends on the withdrawals S + T + M it meets',
      'Spending with a high import content leaks straight out through M in the first round - the multiplier on it is close to 1',
    ],
  },
  Q009: {
    'lorenz-curve': [
      'Growth moves the whole distribution out, but if the gains go to the top the curve bows FURTHER from the 45° line',
      'A bigger area A means a higher Gini: GDP up, most households no better off',
    ],
    'negative-externality': [
      'Growth that ignores the external cost settles at Qm, past the social optimum Q*',
      'The shaded triangle is the environmental cost that GDP does not count',
    ],
    'lras-shift': [
      'Supply-led growth: LRAS₁ to LRAS₂, output Y₁ → Y₂ with the price level falling P₁ → P₂',
      'This is the growth that avoids the inflation and imbalance of a demand-led boom',
    ],
  },
  Q010: {
    'liquidity-trap': [
      'With the rate at r_min, more money supply (MS₁ → MS₃) cannot lower it further',
      'Conventional monetary policy is exhausted - the 2009-2021 problem, and one reason fiscal policy had to carry more',
    ],
    'cost-push': [
      'Cost-push inflation: AS₁ shifts up to AS₂, price level P₁ → P₂ while output falls Y₁ → Y₂',
      'Neither monetary nor fiscal tightening moves AS back - they can only pull AD left and cut output further',
    ],
  },
  Q012: {
    'indirect-tax': [
      'A carbon tax lifts S to S + tax by the external cost',
      'Output falls Q₁ → Q₂ towards the social optimum - the price mechanism corrected, not replaced',
    ],
  },
  Q013: {
    'pes-elasticity': [
      'Same demand shift, two supply curves: on S (inelastic) price jumps P₁ → P₂ with a small ΔQs',
      'On S (elastic) the shift raises quantity by a large ΔQs and price only a little',
      'Supply gets more elastic over time, so the price effect fades and the quantity effect grows',
    ],
  },
  Q014: {
    'price-discrimination': [
      'Inelastic market: steep D → high price P₁; elastic market: shallow D → low price P₂',
      'MR = MC in each; without an estimate of PED for each group the firm cannot set the two prices',
    ],
    'game-theory': [
      'If both firms hold a stable price (collude), each keeps a predictable revenue at (5, 5)',
      'A price cut only pays off if the rival does not match it - since rivals usually do, the actual revenue outcome depends on their reaction, not on market PED alone',
    ],
  },
  Q016: {
    'public-goods': [
      'D = 0: everyone free rides, so the free market quantity is 0',
      'A MISSING market is a complete failure, not a partial one - the extreme case in the ranking',
    ],
    monopoly: [
      'Market power: output restricted to Qm, price raised to Pm above marginal cost',
      'Consumers lose the deadweight loss triangle and pay the supernormal profit rectangle - a market failure with no information gap at all',
    ],
  },
  Q017: {
    'negative-externality': [
      'The target of every instrument: bring emissions from Qm back to Q*, where MSC meets MSB',
      'Permits fix that quantity directly; a tax or regulation approaches it from the price or the rule side',
    ],
    'indirect-tax': [
      'A carbon tax shifts S to S + tax and gives a certain PRICE per tonne',
      'The quantity that results (Q₂) is not certain - the opposite trade-off to a permit cap',
    ],
  },
  Q018: {
    'negative-externality': [
      'The optimum is Q* - but the government cannot see MSC directly',
      'A tax set too high overshoots Q* and creates a welfare loss on the other side of it',
    ],
    'minimum-price': [
      'A floor above equilibrium: quantity supplied Qs exceeds quantity demanded Qd',
      'The excess supply must be bought and stored (CAP) - unless the point is to cut consumption of a demerit good, as with minimum unit pricing',
    ],
  },
  Q020: {
    'limit-pricing': [
      'In a contestable market the merged firm sets the limit price - below profit max, just under the entrant’s AC',
      'The threat of entry does what competition would have: the monopoly diagram’s Pm is never reached',
    ],
    'natural-monopoly': [
      'If AC is still falling where it meets D, the merged firm is the low-cost supplier',
      'A regulator sets price at P(AC) to stop it charging the unregulated profit-maximising price - consumers can gain even from a dominant firm',
    ],
  },
  Q021: {
    'limit-pricing': [
      'Revenue maximising means a low price and large output - the same shape as the limit price below the entrant’s AC',
      'Size now buys market power later: revenue maximisation as a long-run profit strategy',
    ],
  },
  Q022: {
    'perfect-competition': [
      'In the long run P = MC = min AC: normal profit only',
      'A firm carrying managerial slack has AC above the minimum, makes a loss and leaves - competition polices the managers',
    ],
    monopoly: [
      'Supernormal profit (the shaded rectangle) is the cushion that absorbs managerial objectives',
      'With no rival to undercut it, a monopoly can carry X-inefficiency indefinitely',
    ],
    'profit-constraint': [
      'Managers would produce at Q (sales volume max, normal profit only)',
      'The required profit pulls output back to Q*: the owners’ constraint in action',
    ],
  },
  Q023: {
    'lrac-envelope': [
      'LRAC is the envelope of the SRAC curves: each plant size touches it once',
      'Beyond MES the envelope turns up - diseconomies - so economies of scale do not continue for ever',
    ],
    'external-economies': [
      'External economies move the WHOLE curve from LRAC₁ down to LRAC₂ - lower cost at every output, regardless of the firm’s own size',
      'External diseconomies move it up to LRAC₃',
    ],
  },
  Q024: {
    'perfect-competition-short-run': [
      'In the short run price can sit above AC: supernormal profit is the shaded rectangle',
      'Entry then pushes price down to min AC - the room to deviate from profit maximisation is short-run only',
    ],
    'monopolistic-competition': [
      'Differentiated products: AR = D slopes down and touches AC at Q₁, P₁',
      'Normal profit only, but excess capacity below min AC - a little slack that the market tolerates',
    ],
  },
  Q025: {
    'natural-monopoly': [
      'AC still falling where it meets D: one firm at Q, P(AC) is cheaper than many small ones',
      'Split into many firms, each would have higher AC - here monopoly can be the lower-price outcome',
    ],
    'limit-pricing': [
      'A contestable monopoly prices at the limit price, below profit max',
      'The threat of entry - not the number of firms - is what protects consumers',
    ],
  },
  Q026: {
    'surplus-change': [
      'Consumer surplus is the triangle under D and above P',
      'A higher price shrinks it twice over - fewer buyers and less surplus each; the more inelastic the demand, the more is transferred to the firm',
    ],
    'natural-monopoly': [
      'AC above MC throughout: a single price at P = MC makes a loss',
      'Discrimination lets the high-price group cover the fixed cost so the service exists at all',
    ],
  },
  Q027: {
    'labour-market': [
      'The competitive case for comparison: a minimum wage above W₁ moves along D(L) = MRP',
      'Employment falls below Q₁ - the opposite result to the monopsony diagram, which is why the level of the wage matters',
    ],
  },
  Q029: {
    'natural-monopoly': [
      'Where AC still falls where it meets D, dominance cannot be broken up',
      'The regulator caps price at P(AC): P = MC would make a loss, and the unregulated profit-maximising price is the abuse',
    ],
  },
  Q030: {
    'limit-pricing': [
      'A privatised firm in a contestable market prices at the limit price, not at profit max',
      'Contestability, not ownership, is what delivers the efficiency gain',
    ],
  },
  Q032: {
    'ad-shift': [
      'Read in reverse: AD falls from AD₂ to AD₁',
      'The price level falls P₂ → P₁ - but so does output, Y₂ → Y₁: disinflation as a symptom of recession',
    ],
    'liquidity-trap': [
      'Deflation risk: once the rate is at r_min, extra money supply (MS₁ → MS₃) cannot cut it further',
      'Falling prices raise real interest rates even at zero - the trap Japan sat in for two decades',
    ],
  },
  Q033: {
    'cost-push': [
      'Dearer imported inputs shift AS₁ up to AS₂',
      'Price level P₁ → P₂ and output Y₁ → Y₂ (down) - the inflation side of a depreciation, working against the net-export gain',
    ],
  },
  Q034: {
    'liquidity-trap': [
      'Rates at r_min after 2009: extra money supply (MS₁ → MS₃) could go no lower',
      'Investment still did not recover - evidence that confidence and expected demand, not the interest rate, were binding',
    ],
  },
  Q036: {
    'ad-as-classical': [
      'The classical view: LRAS vertical at Yf',
      'A rise in AD along the vertical section moves only the price level P₁ - no lasting output gain from demand-side policy',
      'On this view the only route to growth is moving Yf itself: the supply side',
    ],
  },
  Q037: {
    'consumption-function': [
      'A lower MPS is a steeper C line: more of each extra pound of Y is spent',
      'The break-even point moves right and saving shrinks at every income',
    ],
    'ad-as': [
      'On the flat section, higher consumption raises Y₁ with no change in P₁',
      'Near full capacity the same rise in spending becomes a higher price level instead',
    ],
  },
  Q038: {
    'ad-as-classical': [
      'Classical LRAS is vertical at Yf: an injection that shifts AD only raises P₁',
      'Real output cannot rise past Yf, however large the injection - the case against demand-led growth',
    ],
    'lras-shift': [
      'Investment is the one injection that also shifts LRAS₁ to LRAS₂',
      'Output rises Y₁ → Y₂ with the price level falling P₁ → P₂ - the only injection that produces long-run growth',
    ],
  },
  Q039: {
    'long-run-phillips': [
      'The economy returns to the NAIRU on the LRPC once expectations adjust',
      'A prolonged negative output gap can raise the NAIRU itself - hysteresis turns cyclical unemployment structural',
    ],
  },
  Q040: {
    'kuznets-curve': [
      'Read the vertical axis as pollution rather than inequality: the environmental Kuznets curve has the same inverted U',
      'Industrialising economies pollute more as income rises; maturing ones can afford to clean up - but the turning point for carbon is disputed',
    ],
    'tradable-permits': [
      'S (cap) fixes total emissions; D (firms) sets the price P₁',
      'Trade means the cut happens where abatement is cheapest - the lowest-cost route from growth-with-pollution to growth-without',
    ],
  },
  Q041: {
    'liquidity-trap': [
      'Bank Rate at r_min: more money supply (MS₁ → MS₃) cannot lower it',
      'QE tries the channels that remain - asset prices, expectations, the exchange rate - because this one is closed',
    ],
  },
  Q042: {
    'ad-as': [
      'With spare capacity the flat section means fiscal stimulus raises Y₁ with little effect on P₁',
      'The conflicts between objectives bite only as the economy nears full capacity',
    ],
    'bond-price-yield': [
      'Unfunded fiscal loosening: markets sell gilts, the price falls towards £80',
      'Yields rise towards 6.25% - the September 2022 lesson on the limits of discretionary fiscal policy',
    ],
  },
  Q044: {
    'comparative-advantage': [
      'Without trade the country consumes on its own PPF; with trade it reaches the trade line beyond it',
      'A tariff pulls consumption back towards the PPF - the gains from trade forgone',
    ],
  },
  Q046: {
    'labour-market': [
      'The National Living Wage is the minimum wage line above W₁',
      'Earnings at the bottom rise - but along D(L) = MRP employment can fall below Q₁',
    ],
    monopsony: [
      'Where employers have monopsony power, a wage floor between W₁ and the competitive wage raises BOTH pay and employment',
      'This is why UK minimum wage rises have cost fewer jobs than the competitive diagram predicts',
    ],
  },
  Q047: {
    'poverty-trap': [
      'Low income → low saving → low investment → low productivity → low income',
      'Infrastructure is the external injection that lifts productivity - the loop cannot be broken from inside',
    ],
  },
  Q048: {
    tariff: [
      'Rich-country tariffs lift the price of a poor country’s exports from Pw (world) to Pw + tariff in the importing market',
      'Imports after the tariff shrink - the market access that would have made trade the engine is blocked',
    ],
  },
  Q051: {
    'ad-as': [
      'With spare capacity (flat AS) the deficit raises Y₁ without moving P₁ - the stabilising case',
      'At full capacity (vertical AS) the same deficit only raises the price level - the inflationary case',
    ],
  },
  Q052: {
    'lorenz-curve': [
      'Original income bows far from the 45° line; disposable income bows much less',
      'Most of the gap between the two curves is benefits, not the tax schedule',
    ],
  },
  Q053: {
    elasticity: [
      'Sugary drinks lean towards the elastic curve when close substitutes are cheap: the tax loses a large ΔQ',
      'If consumers switch to untaxed sugary foods the health gain is smaller than the fall in drinks sales',
    ],
    'lras-shift': [
      'A healthier, more productive workforce shifts LRAS₁ to LRAS₂ over decades',
      'Output Y₁ → Y₂ - real but small, and impossible to pin on one tax',
    ],
  },
  Q054: {
    elasticity: [
      'Tobacco and alcohol are the inelastic curve: a large duty rise loses only a small ΔQ',
      'Revenue rises reliably; consumption falls slowly',
    ],
    'lras-shift': [
      'Fewer working days lost to smoking- and alcohol-related illness raises labour productivity',
      'LRAS₁ shifts to LRAS₂ over the long run - the supply-side dividend of the tax',
    ],
    'cost-push': [
      'Duties are in the CPI basket: the rise lifts AS₁ to AS₂ in the affected sectors',
      'Price level P₁ → P₂ with lower real incomes - a small but real macro cost',
    ],
  },
  Q056: {
    'progressive-tax': [
      'A progressive schedule takes a rising share as income rises',
      'It claws back part of the widening in original income - which is why UK disposable-income inequality has stayed flat through the automation era',
    ],
  },
  Q058: {
    'j-curve': [
      'The weaker currency improves the current account only after a lag: it worsens first',
      'As elasticities rise the balance improves - a partial offset to the loss of bloc trade',
    ],
    'comparative-advantage': [
      'The gains from trade are consumption beyond the PPF, along the trade line',
      'New deals with distant partners recover only a fraction of what was lost with near neighbours - trade falls with distance',
    ],
  },
  Q059: {
    'ad-shift': [
      'Read the shift in reverse: AD moves LEFT from AD₂ to AD₁ as C and I fall',
      'Output Y₂ → Y₁ and the price level P₂ → P₁ - the lower inflation the rate rise was for',
    ],
  },
  Q060: {
    'pes-elasticity': [
      'Housing supply is S (inelastic): a rise in demand moves price P₁ → P₂ with only a small ΔQs',
      'Planning reform aims to make supply behave like S (elastic) - the same demand shift, a large ΔQs and a small price rise',
    ],
    'monetary-transmission': [
      'Bank Rate → mortgage rates → house prices: the macro channel into affordability',
      'The Bank sets this rate for inflation, not for house prices - which is why macroprudential limits, not Bank Rate, target housing credit',
    ],
  },
  Q061: {
    'tradable-permits': [
      'A cap puts a price P₁ on every tonne: not investing now costs the firm permits',
      'Abatement becomes the dominant strategy - the payoff matrix flipped by policy',
    ],
  },
  Q076: {
    'minimum-price': [
      'The guaranteed price sits ABOVE the free-market equilibrium',
      'Quantity supplied Qs exceeds quantity demanded Qd: the gap is the surplus',
      'Under the CAP the state bought and stored that surplus - the butter mountains',
      'This is government failure on a diagram: a welfare loss created by the intervention, not removed by it',
    ],
  },
  Q158: {
    'ad-shift': [
      'A rate rise read in reverse: AD₂ back to AD₁',
      'The price level falls P₂ → P₁ - but output falls Y₂ → Y₁ as well, from a level the supply shock had already cut',
      'A demand-side tool against a supply-side shock: it works by making the downturn deeper',
    ],
  },
  Q161: {
    'game-theory': [
      'Holding price is colluding: both chains at (5, 5)',
      'Each fears the other will cut and take share, so cutting is the dominant strategy',
      'Both cheat - the outcome is worse for both than the restraint they abandoned, and neither can raise price first',
    ],
  },
  Q162: {
    'game-theory': [
      'Concentration lets the chains sit at (5, 5): each knows a rise will be matched, not undercut',
      'General inflation is cover - the question is whether they used it, which is what margins tell you',
      'The discounters growing through the surge is the sign that the market stayed contestable',
    ],
  },
  Q164: {
    tariff: [
      'Pw rises to Pw + tariff: domestic output up Q₁ → Q₂, consumption down Q₄ → Q₃',
      'Imports shrink to the gap between Q₂ and Q₃; tariff revenue is the rectangle over it',
      'The two triangles either side are deadweight loss - the price of buying resilience this way',
    ],
  },
  Q166: {
    monopoly: [
      'The unregulated benchmark: Qm where MC = MR, Pm off AR, supernormal profit and the deadweight loss',
      'Every method of control is an attempt to move the firm from here towards Qc',
      'A cap set from the firm’s own cost figures can leave it much closer to Pm than the regulator believes',
    ],
  },
  Q172: {
    'lras-shift': [
      'Only if the investment adds to the capital stock does LRAS₁ shift to LRAS₂',
      'Then capacity rises Y₁ → Y₂ with the price level easing P₁ → P₂ - the effect the policy is for',
      'UK business investment did not respond to the cut to 19%, so this shift is the uncertain half',
    ],
  },
}
