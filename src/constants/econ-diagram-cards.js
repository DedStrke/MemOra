/*
  Flashcards whose answer IS a diagram.

  Economics is examined through diagrams, but a flashcard deck made only of
  definitions never asks you to draw one - so a student can know every
  term and still lose every diagram mark. These cards flip the task round:
  the front asks you to sketch it from memory, and the back lists exactly
  what has to be labelled for the marks, with the diagram itself rendered
  underneath so you can check your version against it.

  The back text is written as a checklist rather than a description,
  because that is how you actually mark your own sketch: axes, curves,
  equilibria, then the shaded area.

  `diagram` is the id from components/diagrams/economics.jsx. These feed
  Flashcards and Active recall.
*/
export const ECON_DIAGRAM_CARDS = [
  {
    front: 'Sketch the production possibility frontier, marking a productive, an inefficient and an unattainable point.',
    back: 'Axes: capital goods and consumer goods. A curve concave to the origin. A point ON the curve (efficient), one INSIDE it (spare capacity/unemployment) and one OUTSIDE it (unattainable). Concave because resources are not equally suited to both goods, so opportunity cost rises.',
    topic: 'Production Possibility Frontiers',
    diagram: 'ppf',
  },
  {
    front: 'Sketch a market in equilibrium and label the equilibrium price and quantity.',
    back: 'Axes: price (vertical) and quantity (horizontal). Downward-sloping D, upward-sloping S, intersecting at P₁, Q₁. Above P₁ there is excess supply; below it excess demand. Label both curves and both equilibrium values.',
    topic: 'Price Determination and the Price Mechanism',
    diagram: 'supply-demand',
  },
  {
    front: 'Sketch a rightward shift in demand and show the effect on price and quantity.',
    back: 'D₁ shifts right to D₂ along a fixed S. Equilibrium moves from P₁Q₁ to P₂Q₂ - both price and quantity rise. Label the shift with an arrow. Caused by a change in a condition of demand, never by the good’s own price.',
    topic: 'Demand',
    diagram: 'demand-shift',
  },
  {
    front: 'Sketch price elastic and price inelastic demand on the same axes.',
    back: 'Two demand curves through a common point: a shallow one (elastic) and a steep one (inelastic). Show the same price fall producing a large quantity change on the elastic curve and a small one on the inelastic. Cutting price raises revenue only when demand is elastic.',
    topic: 'Price, Income and Cross Elasticities of Demand',
    diagram: 'elasticity',
  },
  {
    front: 'Sketch a negative production externality and shade the welfare loss.',
    back: 'MPC below MSC (the vertical gap is the marginal external cost), with MSB = MPB downward sloping. Free market at Q₁ where MPC = MSB; social optimum at Q* where MSC = MSB. Q₁ > Q*, so shade the triangle between MSC and MSB from Q* to Q₁ - that is the welfare loss.',
    topic: 'Externalities',
    diagram: 'negative-externality',
  },
  {
    front: 'Sketch a positive consumption externality and shade the welfare loss.',
    back: 'MPB below MSB (the gap is the marginal external benefit), with MSC = MPC upward sloping. Free market at Q₁ where MPB = MSC; social optimum at Q* where MSB = MSC. Here Q₁ < Q*, so the good is UNDER-consumed - shade the triangle between the two.',
    topic: 'Externalities',
    diagram: 'positive-externality',
  },
  {
    front: 'Sketch the effect of a specific indirect tax on a market.',
    back: 'Supply shifts left/up by the tax per unit to S + tax. Price to the consumer rises P₁ to P₂ and quantity falls Q₁ to Q₂. The vertical gap between the two supply curves is the tax. The consumer bears the part above P₁, the producer the rest - the split depends on relative elasticity.',
    topic: 'Government Intervention in Markets',
    diagram: 'indirect-tax',
  },
  {
    front: 'Sketch a minimum price set above equilibrium.',
    back: 'A horizontal line above the equilibrium price. Quantity demanded falls to Qd, quantity supplied rises to Qs, and Qs > Qd - label the gap as excess supply. Used to cut consumption of demerit goods, or to guarantee producer incomes.',
    topic: 'Government Intervention in Markets',
    diagram: 'minimum-price',
  },
  {
    front: 'Sketch an AD/AS diagram with a Keynesian AS curve.',
    back: 'AS horizontal at low output (spare capacity), upward sloping in the middle, vertical at full capacity. AD downward sloping, crossing it at Y₁, P₁. Extra demand raises output with little inflation on the flat section, and only the price level on the vertical one.',
    topic: 'Aggregate Supply',
    diagram: 'ad-as',
  },
  {
    front: 'Sketch a rightward shift in LRAS and state what it shows.',
    back: 'A vertical LRAS moving right, with AD fixed. Output rises Y₁ to Y₂ while the price level FALLS P₁ to P₂. This is potential (non-inflationary) growth, caused by more or better factors of production - investment, education, technology, net migration.',
    topic: 'Supply-Side Policy',
    diagram: 'lras-shift',
  },
  {
    front: 'Sketch cost-push inflation.',
    back: 'SRAS shifts LEFT with AD unchanged. The price level rises P₁ to P₂ while real output FALLS Y₁ to Y₂ - stagflation. Caused by rising input costs: oil, wages, imported components, or a depreciation raising import prices.',
    topic: 'Inflation',
    diagram: 'cost-push',
  },
  {
    front: 'Draw the circular flow of income, including injections and withdrawals.',
    back: 'Households and firms, with spending flowing one way and wages/rent/profit the other. Injections into the flow: investment, government spending, exports (I + G + X). Withdrawals out of it: saving, taxation, imports (S + T + M). Equilibrium national income is where injections = withdrawals.',
    topic: 'The Circular Flow of Income and the Multiplier',
    diagram: 'circular-flow',
  },
  {
    front: 'Sketch the short-run and long-run Phillips curves.',
    back: 'SRPC downward sloping - the short-run trade-off between inflation and unemployment. LRPC vertical at the natural rate of unemployment, where the trade-off disappears. Attempts to hold unemployment below the natural rate only raise inflation in the long run.',
    topic: 'Employment and Unemployment',
    diagram: 'phillips',
  },
  {
    front: 'Sketch the Laffer curve.',
    back: 'Inverted U: tax revenue against the tax rate. Revenue is zero at a 0% rate and again at 100% (nobody works for nothing), peaking at T*. Beyond the peak, higher rates cut revenue through weaker work incentives, avoidance, evasion and emigration.',
    topic: 'Public Expenditure and Taxation',
    diagram: 'laffer',
  },
  {
    front: 'Sketch the short-run cost curves and state where MC cuts AC and AVC.',
    back: 'U-shaped AC and AVC with MC cutting BOTH at their minimum points - that is the defining relationship. AC falls while MC is below it, rises once MC is above it. The gap between AC and AVC is average fixed cost, which narrows as output rises.',
    topic: 'Revenue, Costs and Profit',
    diagram: 'cost-curves',
  },
  {
    front: 'Sketch a firm in perfect competition in long-run equilibrium.',
    back: 'Horizontal AR = MR = P (the firm is a price taker), tangent to the MINIMUM of AC, with MC cutting through that point. Only normal profit is earned. Productively efficient (minimum AC) and allocatively efficient (P = MC).',
    topic: 'Perfect Competition',
    diagram: 'perfect-competition',
  },
  {
    front: 'Sketch a monopoly and shade the deadweight welfare loss.',
    back: 'Downward-sloping AR with MR below it (twice the gradient), MC cutting MR at Qm. Read price Pm UP to the AR curve. Because P > MC the outcome is allocatively inefficient - shade the triangle between AR and MC from Qm to the competitive output.',
    topic: 'Monopoly',
    diagram: 'monopoly',
  },
  {
    front: 'Sketch the kinked demand curve and explain why prices are sticky.',
    back: 'Demand elastic ABOVE the current price (rivals do not follow a rise) and inelastic BELOW it (rivals match a cut), giving a kink at P₁. That kink creates a vertical discontinuity in MR. MC can move anywhere inside that gap without changing the profit-maximising output, so price does not move.',
    topic: 'Oligopoly',
    diagram: 'kinked-demand',
  },
  {
    front: 'Sketch the long-run average cost curve and label the minimum efficient scale.',
    back: 'LRAC falling (economies of scale), reaching a minimum at the MES, then rising (diseconomies of scale). If MES is large relative to market demand only a few firms can be efficient, so the market is naturally concentrated.',
    topic: 'Economies and Diseconomies of Scale',
    diagram: 'economies-of-scale',
  },
  {
    front: 'Sketch a competitive labour market and add a minimum wage above equilibrium.',
    back: 'Axes: wage rate and quantity of labour. Downward-sloping D(L) = MRP, upward-sloping S(L), equilibrium at W₁, Q₁. A minimum wage above W₁ leaves quantity supplied above quantity demanded - the gap is unemployment. In a monopsony it can raise wages AND employment.',
    topic: 'Wage Determination',
    diagram: 'labour-market',
  },
  {
    front: 'Sketch the market for a currency and show an appreciation.',
    back: 'Axes: exchange rate ($ per £) and quantity of £. Demand for sterling shifts right (higher relative interest rates, stronger exports, speculation), so the rate rises e₁ to e₂. An appreciation makes exports dearer abroad and imports cheaper at home.',
    topic: 'Exchange Rates',
    diagram: 'exchange-rate',
  },
  {
    front: 'Sketch the J-curve and explain its shape.',
    back: 'Current account balance against time, from the moment of depreciation. It WORSENS first, because demand is price inelastic in the short run so the import bill rises before export volumes respond. As demand becomes more elastic it improves - tracing a J. Requires the Marshall-Lerner condition (PEDx + PEDm > 1).',
    topic: 'Exchange Rates',
    diagram: 'j-curve',
  },
  {
    front: 'Sketch a Lorenz curve and explain how the Gini coefficient is read from it.',
    back: 'Cumulative % of income against cumulative % of population, with a 45° line of perfect equality. The Lorenz curve bows below it - the further it bows, the greater the inequality. Gini = area between the line and the curve (A), divided by the whole area under the 45° line (A + B). 0 = perfect equality, 1 = one person has everything.',
    topic: 'Poverty and Inequality',
    diagram: 'lorenz-curve',
  },
  {
    front: 'Sketch the gains from trade using a PPF and a trade line.',
    back: 'A country’s PPF with a flatter/steeper trade line (the world price ratio) running through the point of complete specialisation. Consumption can then sit OUTSIDE the PPF - the gain from trade. Available even to a country with an absolute advantage in both goods, because what matters is comparative advantage.',
    topic: 'International Trade',
    diagram: 'comparative-advantage',
  },
  {
    front: 'Sketch profit maximisation, revenue maximisation and sales maximisation on one diagram.',
    back: 'AR downward sloping with MR below it, plus MC and AC. Profit max where MC = MR (Qπ). Revenue max where MR = 0 (Qr). Sales max where AR = AC (Qs, the largest output still earning normal profit). Each gives a higher output and lower price than the one before.',
    topic: 'Business Objectives',
    diagram: 'business-objectives',
  },
  {
    front: 'Sketch the consumption function and label the break-even point.',
    back: 'Consumption against disposable income, with a 45° line. C has a positive intercept (autonomous consumption, funded by borrowing or past saving) and a gradient equal to the MPC. Where C crosses the 45° line all income is spent - the break-even point. Right of it households save, left of it they dissave.',
    topic: 'Consumption, Savings and Investment',
    diagram: 'consumption-function',
  },
  {
    front: 'Sketch a maximum price set below equilibrium.',
    back: 'A horizontal line below the equilibrium price. Quantity supplied falls to Qs, quantity demanded rises to Qd, and Qd > Qs - label the gap as a shortage. Keeps the good affordable but creates queues, waiting lists or black markets as the rationing function of price is removed.',
    topic: 'Government Intervention in Markets',
    diagram: 'maximum-price',
  },
  {
    front: 'Sketch the effect of a subsidy on a market.',
    back: 'Supply shifts right/down by the subsidy per unit. Price to the consumer falls P₁ to P₂ and quantity rises Q₁ to Q₂. The vertical gap between the two supply curves is the subsidy per unit. Used to raise consumption of a merit good towards the social optimum.',
    topic: 'Government Intervention in Markets',
    diagram: 'subsidy',
  },
  {
    front: 'Sketch an outward shift of the PPF and say what causes it.',
    back: 'The whole frontier moves out from the origin. Caused by more or better factors of production: investment in capital, education raising human capital, technological advance, net inward migration, or newly discovered resources. This is potential growth - not a movement along the curve.',
    topic: 'Production Possibility Frontiers',
    diagram: 'ppf-shift',
  },
]
