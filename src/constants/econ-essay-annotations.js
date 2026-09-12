/*
  On-diagram annotations for the developed answers: for each question and
  each diagram it uses, the numbered steps that read the shift off the
  diagram using ITS OWN labels (P₁ → P₂, Qm and Q*, Y₁ → Y₂). Rendered by
  Figure as a strip inside the diagram frame - see AnnotationContext in
  components/diagrams/primitives.jsx - so the diagram tells the student
  what to write next to each label, and the chain of analysis beside it
  says the same thing in prose.

  Keyed by question id, then diagram id. Merged onto the answers in
  econ-essay-answers.js. Labels must match the diagram's actual text
  (check with the label audit in scripts/check-diagrams.mjs if a diagram
  is renamed).
*/
export const ECON_ESSAY_ANNOTATIONS = {
  Q001: {
    ppf: [
      'A is on the frontier: every resource employed, so more capital goods can only come from fewer consumer goods - the move along the curve IS the opportunity cost',
      'B is inside: unemployed resources, so output of both can rise with no opportunity cost',
      'C is outside: unattainable with current resources - reaching it needs growth (an outward shift), not a choice',
    ],
  },
  Q002: {
    'cost-shock-elasticity': [
      'Dearer wheat raises bakers’ costs: supply shifts LEFT by the same amount in both panels',
      'Bread is the inelastic panel: price rises a lot, quantity falls a little - most of the cost lands on consumers',
      'Compare the elastic panel: the same shift would move quantity far more and price far less',
    ],
  },
  Q003: {
    'negative-externality': [
      'The market settles at Qm where MPC = S meets demand - producers ignore the external cost',
      'MSC lies above MPC by the external cost, so the social optimum is Q*, where MSC meets MSB',
      'Every unit between Q* and Qm costs society more than it is worth: the shaded welfare loss is the case for intervention',
      'A tax equal to the external cost lifts MPC onto MSC and output falls from Qm to Q*',
    ],
  },
  Q004: {
    'indirect-tax': [
      'The duty shifts supply up from S to S + tax by the amount of the tax',
      'Price rises from P₁ to Pc and quantity falls from Q₁ to Q₂ - but only a little, because demand for cigarettes is inelastic',
      'The consumer burden (P₁ to Pc) is far larger than the producer burden (Pp to P₁): smokers pay most of the duty',
      'Revenue = tax × Q₂, the whole rectangle - large because Q₂ barely falls',
    ],
    'positive-externality': [
      'Read it in reverse for a demerit good: the private benefit curve sits ABOVE the social one, so the market over-consumes at Qm',
      'The optimum Q* is where social benefit meets cost; the gap Qm − Q* is the over-consumption the tax is meant to close',
    ],
  },
  Q005: {
    'output-gap': [
      'In the recession phase actual output is below trend - a negative output gap - and that shortfall is what leaves workers unemployed',
      'As actual output climbs back to trend the gap closes and unemployment falls: the "good" fall in unemployment',
      'Past the trend line the economy is in a positive gap - unemployment keeps falling but inflation is now the cost',
    ],
    phillips: [
      'Moving down the SRPC: lower unemployment is bought with higher inflation',
      'Below the natural rate the curve steepens - further falls in unemployment are almost all inflation',
    ],
  },
  Q006: {
    'monetary-transmission': [
      'Bank Rate rises → commercial banks raise mortgage, loan and saving rates',
      'Consumption falls (dearer mortgages, dearer credit, saving pays more), investment falls (fewer projects clear the cost of borrowing)',
      'Hot money flows in, the pound rises, exports fall and imports rise: (X − M) falls',
      'Every channel points the same way: AD shifts LEFT - with a lag of 18-24 months',
    ],
    'ad-shift': [
      'Read the shift in reverse: AD moves LEFT from AD₂ to AD₁',
      'Real output falls from Y₂ to Y₁ and the price level falls from P₂ to P₁ - lower inflation is the point of the rate rise',
      'On the flat part of AS the fall is mostly output; on the steep part it is mostly prices',
    ],
  },
  Q007: {
    'lras-shift': [
      'Net investment adds to the capital stock: LRAS shifts RIGHT from LRAS₁ to LRAS₂',
      'At the same AD, output rises from Y₁ to Y₂ and the price level falls from P₁ to P₂',
      'That is growth without inflation - the reason supply-side growth is the sustainable kind',
    ],
    'ppf-shift': [
      'PPF₁ to PPF₂ is the same increase in capacity drawn as a frontier: more of BOTH goods is now attainable',
      'The size of the shift depends on how much of the investment is net (new capacity) rather than replacement',
    ],
  },
  Q008: {
    'multiplier-effect': [
      'The injection shifts AD from AD₁ to AD₂ and output from Y₁ to Y₂ - that is the direct effect of the spending',
      'The income created is spent again: AD moves on to AD₃ and output to Y₃ - the knock-on rounds',
      'Total rise in output (Y₁ to Y₃) exceeds the injection: the ratio is the multiplier, 1 ÷ MPW',
    ],
    'ad-shift': [
      'AD shifts RIGHT from AD₁ to AD₂ (the ↑G in the label)',
      'With spare capacity, output rises from Y₁ to Y₂ and the price level barely moves',
      'Near full capacity the same shift raises the price level from P₁ to P₂ instead - inflation, not growth',
    ],
  },
  Q009: {
    'ppf-shift': [
      'Growth is the outward shift from PPF₁ to PPF₂: more of both goods is possible',
      'Whether the extra output improves welfare depends on what is produced and who gets it - the frontier does not show that',
    ],
    'demand-pull': [
      'Demand-led growth: AD shifts from AD₁ to AD₂ and output rises from Y₁ to Y₂',
      'Because AS is steep near full capacity, the price level rises from P₁ to P₂ - the inflation cost of growth that outruns capacity',
      'Supply-led growth (a rightward LRAS shift) raises output WITHOUT the rise in P',
    ],
  },
  Q010: {
    'monetary-transmission': [
      'A rate rise works through four channels - saving, borrowing, mortgages, exchange rate - all reducing AD',
      'The lag: 18-24 months before the full effect, so the Bank acts on forecasts',
      'Note what is NOT on the chain: costs. Against cost-push inflation this mechanism can only squeeze demand',
    ],
    'ad-shift': [
      'Either policy tightening shifts AD LEFT: from AD₂ back to AD₁',
      'The price level falls from P₂ to P₁ - but so does output, from Y₂ to Y₁',
      'Cost-push inflation is a LEFTWARD shift in AS instead; shifting AD left then lowers output twice',
    ],
  },
  Q011: {
    'ppf-shift': [
      'Today the economy picks a point on PPF₁ with more capital goods - the consumer goods given up are the opportunity cost',
      'As the capital comes into use the whole frontier moves out to PPF₂',
      'Future productive potential is the gap between the two curves: more of both goods is now attainable',
    ],
  },
  Q012: {
    'supply-demand': [
      'The market clears at Pe, Qe with no planner: price rations the good to those willing to pay Pe',
      'If demand rose, the higher price would SIGNAL scarcity and give producers the INCENTIVE to supply more',
      'This is the price mechanism solving "what, how much, for whom" in one picture',
    ],
    'negative-externality': [
      'The price mechanism only sees MPC = S, so it settles at Qm - too much',
      'MSC includes the external cost; the optimum is Q*, and the shaded welfare loss is what the market gets wrong',
    ],
  },
  Q013: {
    'demand-shift': [
      'The cheaper complement raises demand for this good at every price: D₁ shifts RIGHT to D₂',
      'Excess demand at P₁ bids the price up to P₂; supply extends along S',
      'New equilibrium: price up (P₁ → P₂) AND quantity up (Q₁ → Q₂) - how much of each depends on the slope of S',
    ],
  },
  Q014: {
    elasticity: [
      'The same price rise P₁ → P₂ on both curves: on D (elastic) quantity falls by a large ΔQ, on D (inelastic) by a small ΔQ',
      'Inelastic: the price rise raises revenue. Elastic: it cuts revenue - so the firm must know which curve it is on',
    ],
    'revenue-curves': [
      'TR rises while demand is elastic (upper half of AR) and MR is positive',
      'TR peaks where MR = 0 - unit elasticity',
      'On the inelastic lower half MR is negative: cutting price there loses revenue, so a price RISE is the move',
    ],
  },
  Q015: {
    'public-goods': [
      'S (cost of provision) is positive - it costs money to build the lighthouse',
      'D = 0: nobody will pay because everyone free rides, so effective demand collapses to nothing',
      'Free market quantity = 0: a MISSING market, which is why the state must provide it',
    ],
  },
  Q016: {
    'asymmetric-information': [
      'Consumers act on MPB = D, so they settle at Qm - below the optimum Q* where MSB meets MSC',
      'Information provision shifts MPB towards MSB and closes the gap Qm → Q*',
      'The welfare loss triangle is the cost of the information gap - compare its size with the externality triangle below',
    ],
    'negative-externality': [
      'The externality loss: output at Qm instead of Q*, welfare loss shaded',
      'Unlike the information gap, better-informed producers still pollute - the loss persists until the cost is priced',
    ],
  },
  Q017: {
    'tradable-permits': [
      'S (cap) is vertical: the regulator fixes the quantity of pollution, whatever firms want',
      'D (firms) meets the cap at P₁ - the market price of the right to emit one tonne',
      'A tighter cap shifts S left and the price rises to P₂: a stronger incentive to abate',
      'Firms with cheap abatement sell permits, those with dear abatement buy - the cut happens where it costs least',
    ],
  },
  Q018: {
    'indirect-tax': [
      'Intervention that works: the tax shifts S to S + tax and output falls from Q₁ to Q₂ towards the social optimum',
      'Revenue (tax × Q₂) is collected and the welfare loss shrinks - IF the tax equals the external cost',
    ],
    'maximum-price': [
      'Intervention that fails: a max price below equilibrium cuts quantity supplied to Qs and raises quantity demanded to Qd',
      'The gap Qd − Qs is a shortage rationed by queues and black markets, and the units no longer traded are a deadweight loss',
    ],
  },
  Q019: {
    'economies-of-scale': [
      'Organic growth walks down LRAC step by step through the economies section',
      'A merger jumps to a much larger output at once - and can overshoot MES into the diseconomies section',
    ],
  },
  Q020: {
    monopoly: [
      'The merged firm profit-maximises where MC = MR, at Qm, and charges Pm off AR = D',
      'Compared with the competitive output Qc, price is higher and output lower',
      'Supernormal profit is the shaded rectangle transferred from consumers; deadweight loss is the triangle lost to everyone',
    ],
    'economies-of-scale': [
      'The counter-case: the larger merged firm moves down LRAC towards MES',
      'Lower average cost can mean lower prices - but only if competition or regulation forces the saving to be passed on',
    ],
  },
  Q021: {
    'business-objectives': [
      'Qπ: profit maximisation where MC = MR - the smallest output, highest price',
      'Qr: revenue maximisation where MR = 0 - more output, lower price',
      'Qs: sales maximisation where AR = AC - largest output that still covers cost',
    ],
  },
  Q022: {
    'business-objectives': [
      'Owners want Qπ (MC = MR); managers paid on size prefer Qr (MR = 0) or Qs (AR = AC)',
      'The gap between Qπ and Qs is the room managers have when owners cannot monitor them',
      'The profit constraint pulls output back from Qs towards Qπ - as far as shareholders can enforce',
    ],
  },
  Q023: {
    'economies-of-scale': [
      'High fixed costs make the economies section long and steep: LRAC falls over a wide range of output',
      'MES is far to the right - a large share of market demand - so few firms can reach it',
      'Beyond MES, diseconomies eventually turn the curve up',
    ],
    'natural-monopoly': [
      'The extreme case: AC still falling where it meets D - one firm supplies the whole market at lower cost than two',
      'MC lies below AC throughout, so P = MC would make a loss: the regulator sets P at AC instead',
    ],
  },
  Q024: {
    'perfect-competition': [
      'The price-taking firm faces AR = MR = D = P and produces where MC = MR, at Q*',
      'In the long run P = MC = min AC: normal profit only, so a firm that does not minimise cost makes a loss and leaves',
      'Profit maximisation is enforced by entry and exit, whether or not the firm calculates it',
    ],
    'cost-curves': [
      'To profit-maximise deliberately a firm must know MC at every output - the curve MC cuts each average curve at its minimum',
      'Most small firms know AC roughly and MC not at all: cost-plus pricing is the practical substitute',
    ],
  },
  Q025: {
    monopoly: [
      'Monopoly output Qm at MC = MR, price Pm above marginal cost',
      'Versus the competitive Qc: consumers lose the deadweight loss triangle and pay the supernormal profit rectangle',
    ],
    'monopolistic-competition': [
      'Long run: AR = D tangent to AC at Q₁, P₁ - normal profit only, because entry has competed the rest away',
      'But Q₁ is below min AC: excess capacity, so the firm is productively inefficient and P still exceeds MC',
      'Consumers get lower prices and choice than under monopoly, at the cost of that excess capacity',
    ],
  },
  Q026: {
    'price-discrimination': [
      'Same MC in both markets; the firm sets MR = MC in each',
      'Inelastic market: steep D → high price P₁ - consumer surplus is transferred to the firm',
      'Elastic market: shallow D → low price P₂ - consumers who would not have bought at a single price now can',
      'Total profit is higher than under one price; whether total output rises decides the efficiency effect',
    ],
  },
  Q027: {
    monopsony: [
      'The monopsonist faces the whole labour supply S = ACL, so MCL lies above it',
      'It hires where MCL = MRP, at Q₁, and pays only W₁ off the supply curve - below MRP',
      'A minimum wage between W₁ and the competitive wage makes MCL horizontal up to S: the firm hires where MRP meets the wage floor',
      'Employment RISES with the wage - the reverse of the competitive case',
    ],
  },
  Q028: {
    'trade-union': [
      'The union wage sits above the competitive W₁',
      'Quantity demanded falls to Qd, quantity supplied rises to Qs - the gap is unemployment',
      'Those still employed (Qd) earn more; the trade-off is smaller when D(L) = MRP is inelastic',
    ],
    monopsony: [
      'Where the employer has power, the union wage floor between W₁ and the competitive wage raises BOTH pay and employment',
      'This is why unions still matter in the NHS, education and rail even as they fade in the private sector',
    ],
  },
  Q029: {
    monopoly: [
      'Abuse of dominance looks like this: output restricted to Qm, price raised to Pm above cost',
      'The CMA’s fine removes the supernormal profit rectangle; a price cap pushes P towards Qc, P = MC',
    ],
  },
  Q030: {
    'business-objectives': [
      'A state-owned firm may sit at Qs or beyond - covering cost, not maximising profit, with X-inefficiency in AC',
      'Privatisation pulls output towards Qπ (MC = MR): higher price, lower output - unless competition or regulation intervenes',
    ],
    'natural-monopoly': [
      'If AC is still falling where it meets D, privatisation creates a private monopoly, not competition',
      'The regulator must set P at AC: efficiency gains then depend on the regulator, not the ownership',
    ],
  },
  Q031: {
    'lorenz-curve': [
      'Two economies with the same GDP per head can have very different Lorenz curves',
      'The further the curve bows from the 45° line the larger area A, the higher the Gini - and the less the average tells you',
    ],
  },
  Q032: {
    'ad-as': [
      'Inflation falls two ways: AS shifting RIGHT (lower costs) raises Y₁ - benign; AD shifting LEFT lowers Y₁ - recession',
      'Which one happened decides whether the fall in inflation is good news',
    ],
    phillips: [
      'Bringing inflation down along the SRPC means moving to the right - higher unemployment',
      'Below the natural rate the trade-off is steep; at the natural rate the curve is vertical in the long run',
    ],
  },
  Q033: {
    'exchange-rate': [
      'A depreciation is the move from e₁ to e₂: demand for sterling shifts from D₁ down to D₂',
      'Exports are cheaper in foreign currency and imports dearer in pounds',
    ],
    'j-curve': [
      'At the moment of depreciation the current account WORSENS FIRST: import prices rise before volumes change',
      'As elasticities rise over time the balance improves and (X − M) adds to AD - the Marshall-Lerner condition kicking in',
    ],
  },
  Q034: {
    'ad-shift': [
      'Investment is the ↑I in the label: it shifts AD from AD₁ to AD₂ and output from Y₁ to Y₂',
      'It is the most volatile component - the question is what moves it',
    ],
    'monetary-transmission': [
      'The interest-rate channel: lower rates → cheaper borrowing → I ↑',
      'In practice the channel is weak - rates near zero after 2009 did not lift investment, confidence did not recover',
    ],
  },
  Q035: {
    'lras-shift': [
      'Higher output per worker raises capacity: LRAS shifts RIGHT from LRAS₁ to LRAS₂',
      'Output rises from Y₁ to Y₂ and the price level falls from P₁ to P₂ at the same AD',
    ],
  },
  Q036: {
    'lras-shift': [
      'Supply-side policy: LRAS₁ to LRAS₂, output Y₁ to Y₂, price level P₁ to P₂ (down)',
      'The only shift that raises the trend rate of growth rather than closing a gap',
    ],
    'ad-shift': [
      'Demand-side policy: AD₁ to AD₂, output Y₁ to Y₂',
      'On the flat part of AS (spare capacity) prices barely move; on the steep part the shift becomes inflation P₁ to P₂',
    ],
  },
  Q037: {
    'multiplier-effect': [
      'A lower MPS means a larger share of each round is spent on, so each step (AD₁ → AD₂ → AD₃) is bigger',
      'Total rise Y₁ to Y₃ is larger for the same injection: the multiplier 1 ÷ MPW has risen',
    ],
  },
  Q038: {
    'circular-flow': [
      'Injections (I + G + X) enter the flow; withdrawals (S + T + M) leave it',
      'Injections > withdrawals → national income rises until withdrawals, which rise with income, catch up',
    ],
    'ad-shift': [
      'The injection shifts AD from AD₁ to AD₂',
      'With spare capacity output rises Y₁ → Y₂; at full capacity the price level rises P₁ → P₂ instead',
    ],
  },
  Q039: {
    'output-gap': [
      'The recession (− gap) is actual output below trend - the shortfall in demand',
      'Fewer workers are needed to produce the lower output: that shortfall IS demand-deficient unemployment',
      'As actual returns to trend the gap closes and cyclical unemployment disappears',
    ],
    'ad-as': [
      'AD₁ to the left of full capacity: output Y₁ is below potential and the horizontal gap is the negative output gap',
      'Shifting AD right to full capacity re-employs the workers; the unemployment left after that is structural, not cyclical',
    ],
  },
  Q040: {
    'negative-externality': [
      'Growth that ignores the externality settles at Qm, past the optimum Q*',
      'Pricing the externality (a carbon tax) moves output to Q* - the shaded loss disappears, at the cost of lower Q',
    ],
    'ppf-shift': [
      'Read the axes as output and environmental quality: along one frontier they trade off',
      'Green technology shifts the frontier out to PPF₂ - more of BOTH becomes possible',
    ],
  },
  Q041: {
    'quantitative-easing': [
      'Steps 1-3: the Bank creates money, buys bonds, bond prices rise and yields fall',
      'Steps 4-6: investors rebalance into corporate bonds and shares, borrowing gets cheaper, asset prices rise → AD ↑',
      'The risk at the bottom: banks hold the reserves rather than lend them - the liquidity trap',
    ],
    'bond-price-yield': [
      'The Bank’s buying pushes the market price from £100 towards £125',
      'The fixed £5 coupon over a higher price means yield falls from 5% to 4% - lower long-term rates across the economy',
    ],
  },
  Q042: {
    'ad-shift': [
      'Expansionary fiscal policy (↑G, ↓T) shifts AD₁ to AD₂: output Y₁ → Y₂ and unemployment falls',
      'But the price level rises P₁ → P₂ and higher income pulls in imports - two objectives helped, two harmed',
    ],
    'lras-shift': [
      'Fiscal policy on the supply side - infrastructure, skills, investment allowances - shifts LRAS₁ to LRAS₂',
      'Output rises Y₁ → Y₂ with the price level falling P₁ → P₂: growth, jobs and low inflation together',
    ],
  },
  Q043: {
    'comparative-advantage': [
      'Without trade the country consumes on its own PPF',
      'Specialise here: produce only the good with the lower opportunity cost',
      'Trade along the trade line (the world price) to reach consumption OUTSIDE the PPF - the gain from trade',
    ],
  },
  Q044: {
    tariff: [
      'Domestic price rises from Pw (world) to Pw + tariff',
      'Domestic output expands along S domestic; consumption contracts along D; imports after the tariff shrink to the gap',
      'Tariff revenue is the shaded rectangle; the two triangles either side are deadweight loss',
      'Consumers lose more than producers and government gain: a net welfare loss',
    ],
  },
  Q045: {
    'lorenz-curve': [
      'Cumulative % of population along the bottom, cumulative % of income up the side',
      'The 45° line is perfect equality; the Lorenz curve bows below it',
      'Gini = A ÷ (A + B): 0 is perfect equality, 1 is one household with everything',
    ],
  },
  Q046: {
    'progressive-tax': [
      'Progressive: the average tax rate rises with income - the tax takes a larger share from the better-off',
      'Proportional takes the same share; regressive (VAT, duties) takes a larger share from the poor',
    ],
    'lorenz-curve': [
      'Original income bows far from the 45° line; disposable income after taxes and benefits bows less',
      'The gap between the two curves is what redistribution achieves - and 60% of the median on the second curve is the relative poverty line',
    ],
  },
  Q047: {
    'lras-shift': [
      'Poor infrastructure holds LRAS at LRAS₁ - potential output far below what the labour force could produce',
      'Roads, ports and power shift it to LRAS₂: output Y₁ → Y₂ from the same resources',
    ],
  },
  Q048: {
    'comparative-advantage': [
      'Specialise here in the good with the lower opportunity cost and trade along the trade line',
      'Consumption moves outside the PPF - income the country earned itself',
    ],
    'poverty-trap': [
      'Low income → low saving → low investment → low productivity → low income',
      'Aid enters at investment (an external injection); trade enters at income - both aim to break the same loop',
    ],
  },
  Q049: {
    'asymmetric-information': [
      'The lender sees only the average borrower, so it prices at Pm - too high for safe borrowers, too low for risky ones',
      'Safe borrowers leave; lending settles at Qm, below the optimum Q*, and goes to worse projects',
      'Screening and collateral shift MPB towards MSB - they narrow the gap but do not close it',
    ],
  },
  Q050: {
    'asymmetric-information': [
      'Buyers of complex securities could not see the risk: they acted on MPB, not MSB, and lending ran to Qm',
      'Regulation forces information provision and limits leverage so the gap Qm → Q* cannot build unnoticed',
    ],
    'liquidity-trap': [
      'What a crisis leaves behind: rates at r_min and extra money supply (MS₁ → MS₃) unable to lower them further',
      'Because the tools for dealing with a crisis are this weak, preventing one is worth the cost of regulation',
    ],
  },
  Q051: {
    'ad-shift': [
      'A deficit is an injection: AD₁ → AD₂',
      'With spare capacity output rises Y₁ → Y₂; at full capacity it is the price level that rises P₁ → P₂',
    ],
    'bond-price-yield': [
      'Selling more debt into a doubtful market pushes the bond price down, from £100 towards £80',
      'Yield rises from 5% towards 6.25%: dearer borrowing for the government and, through it, for everyone',
    ],
  },
  Q052: {
    'progressive-tax': [
      'Steepening the progressive schedule narrows post-tax incomes directly',
      'The regressive line is VAT and duties - the reason the UK tax system as a whole is only mildly progressive',
    ],
    laffer: [
      'Revenue rises with the tax rate only up to T*, the revenue-maximising rate',
      'Beyond T*, avoidance, lower effort and emigration shrink the base faster than the rate rises - less to redistribute',
    ],
  },
  Q053: {
    'indirect-tax': [
      'The levy shifts supply from S to S + tax',
      'Price rises P₁ → Pc, quantity falls Q₁ → Q₂; the consumer burden is the larger share because demand is inelastic',
      'Revenue = tax × Q₂ - smaller than forecast once manufacturers reformulated below the threshold',
    ],
    'positive-externality': [
      'For a demerit good read the curves in reverse: private benefit sits above social benefit, so the market over-consumes',
      'The tax pulls consumption from the free-market quantity back towards Q*',
    ],
  },
  Q054: {
    'indirect-tax': [
      'A large duty shifts S to S + tax by a large amount',
      'With inelastic demand the price jump P₁ → Pc is big and the fall Q₁ → Q₂ small - consumers carry the burden',
      'The revenue rectangle (tax × Q₂) is large - the macro side of the story',
    ],
    laffer: [
      'Duty revenue rises with the rate up to T*',
      'Beyond T* smuggling and cross-border shopping shrink the taxed base: revenue AND the health gain fall',
    ],
  },
  Q055: {
    'labour-market': [
      'Automation lowers the MRP of routine workers: D(L) = MRP shifts LEFT',
      'Wage falls below W₁ and employment below Q₁ in a competitive market',
      'With the minimum wage held above the new equilibrium, the whole adjustment falls on employment',
    ],
  },
  Q056: {
    'labour-market': [
      'High-skilled market: technology complements labour, D(L) = MRP shifts RIGHT - W₁ rises',
      'Low-skilled market: technology substitutes for labour, D(L) shifts LEFT - W₁ falls',
      'The widening gap between the two wages is skill-biased technological change',
    ],
    'lorenz-curve': [
      'A wider wage gap and a rising capital share bow the curve further from the 45° line - area A grows',
      'Redistribution pulls the disposable-income curve back; the UK Gini has been flat because of it',
    ],
  },
  Q057: {
    tariff: [
      'The tariff lifts the domestic price from Pw (world) to Pw + tariff',
      'Domestic steel output expands along S domestic; imports after the tariff shrink to the remaining gap',
      'Producer surplus rises (the area under the higher price above S); government collects tariff revenue',
      'The triangles are the deadweight loss - paid by steel users and consumers',
    ],
  },
  Q058: {
    tariff: [
      'Leaving the bloc restores barriers: for each imported good, price rises from Pw (world) towards Pw + tariff',
      'Non-tariff barriers act the same way but nobody collects the tariff revenue - pure deadweight loss',
      'Imports after the tariff fall; domestic producers gain, consumers and users of imported inputs lose',
    ],
    'exchange-rate': [
      'Expected lower growth cuts demand for the currency from D₁ to D₂',
      'The exchange rate falls e₁ → e₂: import prices and inflation rise before any tariff applies',
    ],
  },
  Q059: {
    'supply-demand': [
      'Dearer mortgages shift housing demand LEFT of D',
      'Because housing supply is steep, the fall shows up mostly in price (below Pe) and transactions, hardly in quantity built',
    ],
    'monetary-transmission': [
      'Bank Rate ↑ → mortgage rates ↑ → repayments ↑ and house prices ↓',
      'C falls (less disposable income, negative wealth effect), I falls (housebuilding) → AD shifts LEFT',
    ],
  },
  Q060: {
    'supply-demand': [
      'Housing supply is close to vertical: planning fixes it',
      'Rising demand (population, credit) shifts D right and moves Pe up sharply while Qe barely changes - the affordability problem',
      'Only a rightward shift in S brings Pe down relative to incomes',
    ],
    'maximum-price': [
      'Rent control: a max price below equilibrium cuts quantity supplied to Qs',
      'Quantity demanded rises to Qd: the shortage Qd − Qs is rationed by queues, and supply keeps shrinking',
    ],
  },
  Q061: {
    'game-theory': [
      'Read "collude" as invest in abatement and "cheat" as do not',
      'Whatever B does, A earns more by not investing - and the same for B: the dominant strategy',
      'Both end up in the bottom-right cell, worse for both than if both had invested',
    ],
    'negative-externality': [
      'Emissions cost society MSC but the firm only MPC - so the private return on abating is below the social return',
      'Without a carbon price the firm has no reason to move from Qm towards Q*',
    ],
  },
  Q062: {
    'tradable-permits': [
      'S (cap) fixes total emissions; D (firms) sets the price P₁',
      'A tighter cap raises the price to P₂ - a stronger incentive to abate, and firms cut where it is cheapest',
      'Regulation would instead force every firm to the same standard, regardless of its cost',
    ],
    'negative-externality': [
      'Both instruments aim at the same move: from Qm to Q*',
      'Permits fix the total quantity and let price do the allocating; regulation fixes each firm’s quantity directly',
    ],
  },
  Q063: {
    'poverty-trap': [
      'Low income → low saving → low investment → low productivity - the loop a poor household cannot break alone',
      'Microfinance enters at investment: a small loan buys the tools that raise productivity and income',
    ],
    'asymmetric-information': [
      'A bank cannot tell a reliable borrower from a risky one and there is no collateral, so lending stops at Qm - far below Q*',
      'Group lending and local knowledge stand in for the missing information and move lending towards Q*',
    ],
  },
  Q064: {
    'poverty-trap': [
      'The loop turns on low saving → low investment',
      'A financial sector that pools saving and channels it to investment is the missing link - the function that matters',
    ],
    'asymmetric-information': [
      'Screening and monitoring borrowers is what a financial sector exists to do: it moves lending from Qm towards Q*',
      'A sector that grows faster than its ability to screen misallocates instead - lending past Q* into property and speculation',
    ],
  },
}
