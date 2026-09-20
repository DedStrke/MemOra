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
    'labour-market': [
      'Competitive equilibrium at W₁, Q₁: everyone willing to work at that wage has a job',
      'Hold the wage above W₁ and quantity supplied exceeds quantity demanded',
      'The horizontal gap is real wage unemployment - the workers and the jobs match, the wage is what does not',
      'Immobility is a different failure: it shifts nothing here, it stops workers reaching the market at all',
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

  /*
    Q065-Q112 (econ-essay-answers-3/4.js) had no on-diagram annotations at
    all until this pass - every diagram rendered bare while every diagram
    in the original 64 had numbered steps. Added here for the 25 questions
    that actually carry a diagram, keyed to the exact labels each diagram
    component draws (checked against economics.jsx / economicsExtra.jsx /
    economicsGaps.jsx directly, not guessed).
  */
  Q069: {
    'pes-elasticity': [
      'Both curves start from the same point (P₁, Q₁) - only the price response differs, not the starting position',
      'S (inelastic) is the short-run curve: a rise to P₂ only lifts quantity to Q₂ - spare capacity and stock are limited',
      'S (elastic) is the long-run curve: the same rise to P₂ lifts quantity all the way to Q₃ - capacity and factors have had time to adjust',
    ],
  },
  Q070: {
    'pes-elasticity': [
      'Read a tax the same way as any price change: compare Q₁ before against Q₂ (inelastic) or Q₃ (elastic) after',
      'S (inelastic) barely moves - Q₁ to Q₂ - so a tax here raises predictable revenue with little effect on output',
      'S (elastic) moves much further - Q₁ to Q₃ - so the same tax cuts quantity more, and more of it is avoided rather than paid',
    ],
  },
  Q071: {
    'consumer-producer-surplus': [
      'At equilibrium P₁, Q₁: consumer surplus is everything above P₁ and below D; producer surplus is everything below P₁ and above S',
      'A maximum price below P₁ would force quantity down along S, below Q₁ - both shaded areas shrink',
    ],
  },
  Q072: {
    'maximum-price': [
      'Below Max price, quantity supplied falls to Qs while quantity demanded rises to Qd - the shortage is the gap between them',
      'Consumers who still buy at Qs pay less (a gain), but every unit between Qs and the free-market quantity is a trade that no longer happens at all - deadweight loss, not a transfer',
    ],
  },
  Q073: {
    'negative-externality': [
      'The firm decides using MPC = S, ignoring the external cost, and settles at Qm where MPC meets MSB',
      'MSC sits above MPC by the external cost - the true social optimum Q* is to the LEFT of Qm, so the market over-produces',
      'Every unit between Q* and Qm costs society more than it is worth - the shaded welfare loss is the case for a tax that lifts MPC onto MSC',
    ],
  },
  Q074: {
    'positive-externality': [
      'Consumers decide using MPB = D, ignoring the benefit to others, and settle at Qm where MPB meets MSC = MPC = S',
      'MSB sits above MPB by the external benefit - the social optimum Q* is to the RIGHT of Qm, so the market under-consumes',
      'The shaded welfare loss is the units between Qm and Q* worth making at their true social benefit but not made - a subsidy that lifts MPB towards MSB closes exactly this gap',
    ],
  },
  Q081: {
    'lras-shift': [
      'LRAS₁ shifts right to LRAS₂ as capacity rises - full capacity moves from Yf₁ to Yf₂',
      'With AD unchanged, output rises from Y₁ to Y₂ while the price level falls from P₁ to P₂ - capacity-led growth is non-inflationary',
    ],
  },
  Q082: {
    'lras-shift': [
      'LRAS₁ to LRAS₂ is the SAME rightward shift whichever route gets there - market-based incentives or interventionist spending',
      'Output rises from Y₁ to Y₂ and the price level falls from P₁ to P₂ either way - the diagram shows THAT the shift happened, not HOW',
    ],
  },
  Q083: {
    phillips: [
      'SRPC slopes down: moving left along it (lower unemployment) means moving up it (higher inflation) - a genuine short-run trade-off',
      'LRPC is vertical at the natural rate - in the long run, demand stimulus cannot hold unemployment below it',
    ],
  },
  Q084: {
    'long-run-phillips': [
      'Expanding demand moves the economy from A up to B along SRPC₁ - lower unemployment, higher inflation, exactly as the short-run trade-off predicts',
      'Once expectations adjust, SRPC₁ shifts up to SRPC₂ and unemployment returns to the NAIRU at C - but now on a higher inflation curve',
      'Repeating this traces out the vertical LRPC at the NAIRU: only a policy that lowers the NAIRU itself, not demand stimulus, cuts unemployment permanently',
    ],
  },
  Q086: {
    'economies-of-scale': [
      'LRAC falls through the economies section and reaches its minimum at MES',
      'A conglomerate that kept acquiring sits to the RIGHT of MES, on the rising part - management diseconomies',
      'The demerger moves each resulting business back down towards MES: lower average cost, same output',
      'The gain only exists if the group was past MES in the first place - a firm still to the left of it loses by splitting',
    ],
  },
  Q087: {
    efficiency: [
      'Productive efficiency is at the bottom of AC, where MC cuts it - no resources wasted per unit',
      'Allocative efficiency is where price (demand) equals MC - the value of the last unit equals its true cost to make',
    ],
  },
  Q088: {
    'perfect-competition': [
      'AR = MR = D = P is tangent to the bottom of AC, where MC also cuts it - P = MC = min AC, both conditions at once',
      'A small number of large firms sets price above this line and output short of Q* - the static efficiency this diagram shows is lost',
    ],
  },
  Q089: {
    'perfect-competition': [
      'AR = MR = D = P sits exactly at the bottom of AC, where MC also crosses it - normal profit only, no incentive left for entry',
      'Entry from supernormal profit pushes this line DOWN until it reaches this exact point; exit from a loss pushes it back UP - either way, the market settles here',
    ],
  },
  Q090: {
    monopoly: [
      'Qc is where AR = D meets MC - the allocatively efficient, competitive benchmark output',
      'The monopolist instead produces where MC = MR, at the smaller output Qm, pricing at Pm off the AR curve - well above MC',
      'The shaded deadweight loss sits between Qm and Qc: exactly the output a competitive market would supply, at a price equal to its true cost, that the monopolist deliberately withholds',
    ],
  },
  Q091: {
    'game-theory': [
      'If both collude (top-left), each scores 5 - better for both than any other cell in the matrix',
      'But either firm can score 8 by cheating while the other still colludes - the temptation that undermines the collusive outcome',
      'Since both firms reason this way at once, both cheat: the shaded (2, 2) cell is the dominant-strategy outcome in a single interaction - worse for both than colluding, but individually rational',
    ],
  },
  Q092: {
    'game-theory': [
      'The shaded (2, 2) cell - both cheat - is what a single price cut leads to once a rival matches it: worse for both firms than holding a stable price',
      'This is exactly why firms look for a way out of this matrix altogether: collusion (still unstable, since cheating tempts each side) or non-price competition, which a rival cannot simply "match" the way it can match a price cut',
    ],
  },
  Q093: {
    monopsony: [
      'MCL sits above S = ACL, because a higher wage must be paid to every existing worker too, not just the new one',
      'The firm hires where MCL meets MRP, at Q₁ - but only has to PAY the wage read off S = ACL at that quantity, W₁',
    ],
  },
  Q094: {
    monopsony: [
      'Without intervention the firm hires at Q₁, paying only W₁ off S = ACL - both below the competitive level',
      'A minimum wage set between W₁ and the competitive wage flattens MCL at that level up to where it meets MRP - hiring can rise past Q₁ before the standard trade-off returns',
    ],
  },
  Q096: {
    'limit-pricing': [
      'The incumbent sets price at "limit price" - below profit-maximising, but still above its own AC (incumbent)',
      'This sits just under the entrant’s AC, so entering would be unprofitable - contestability disciplines price without a single new firm actually entering',
    ],
  },
  Q113: {
    monopoly: [
      'Qm is where MC = MR; the price Pm is read off AR above it - the shaded supernormal profit is (Pm - AC) × Qm',
      'Without a barrier, that profit would attract entrants exactly as it does under perfect competition - a barrier is what stops that process here',
    ],
  },
  Q114: {
    monopoly: [
      'Qc is where AR = D meets MC - the competitive, allocatively efficient benchmark output',
      'The monopolist instead produces the smaller Qm, pricing at Pm off AR - well above MC',
      'The shaded deadweight loss between Qm and Qc is the harm: exactly the output a competitive market would supply, at a price equal to its true cost, that the monopolist withholds',
    ],
  },
  Q115: {
    'monopolistic-competition': [
      'AR = D slopes down - unlike perfect competition’s horizontal line - because the product is differentiated',
      'Free entry pushes AR down until it is tangent to AC at Q₁, P₁ - but that tangency sits on the FALLING part of AC, not at min AC',
    ],
  },
  Q116: {
    'monopolistic-competition': [
      'The tangency of AR and AC at Q₁ sits short of min AC - that gap is excess capacity, the productive inefficiency',
      'MC = MR, where the firm actually produces, sits to the left of where AR would meet MC - price above marginal cost is the allocative inefficiency',
    ],
  },
  Q121: {
    'cost-curves': [
      'min AVC is the SHORT-RUN shut-down price: above it, revenue still contributes towards the fixed costs the firm pays either way',
      'min AC is the LONG-RUN shut-down price: once every factor is variable there are no unavoidable fixed costs left to contribute towards',
      'The gap between AC and AVC is AFC - exactly the cost that is unavoidable in the short run, and the whole reason the two shut-down points differ',
    ],
  },
  Q080: {
    phillips: [
      'Moving LEFT along SRPC cuts unemployment but moves UP it to higher inflation - the growth/employment objective against the inflation objective, on one curve',
      'LRPC is vertical at the natural rate: demand management can move along the short-run curve but cannot hold unemployment below it permanently',
      'Only a supply-side shift of the natural rate itself relaxes the trade-off rather than choosing a point on it',
    ],
  },
  Q102: {
    tariff: [
      'The bloc’s common external tariff lifts the price of non-member goods from Pw to Pw + T',
      'Buyers switch from the efficient outside producer to a less efficient one INSIDE the bloc - that is trade diversion, and it is a welfare loss',
      'The same tariff is what makes internal trade creation possible, which is why the two effects have to be weighed against each other rather than judged separately',
    ],
  },
  Q120: {
    'comparative-advantage': [
      'The two PPFs slope differently, and that difference in slope IS the difference in opportunity cost',
      'Each country specialises where its opportunity cost is lower and trades along the trade line',
      'Both consume beyond their own PPF - specialisation between countries delivering the same kind of gain as dividing labour within a firm',
    ],
  },
  Q134: {
    'ad-shift': [
      'AD = C + I + G + (X - M): net trade is one of four components, and the smallest of them in the UK',
      'A change in (X - M) shifts AD₁ to AD₂ exactly as a change in C or I would - the mechanism is identical, the magnitude is not',
      'That is the point of the question: the same shift needs a much larger proportional change in net trade than in consumption to produce it',
    ],
  },
  Q138: {
    monopoly: [
      'Without intervention the firm restricts output to Qm and prices at Pm, well above MC',
      'A price cap pushes price down from Pm towards MC, raising output towards Qc and shrinking the shaded deadweight loss - the price and efficiency gains together',
      'Set the cap too tight, below the level that funds investment, and the gain shows up now but the cost appears later as degraded service',
    ],
  },
  Q141: {
    subsidy: [
      'The subsidy shifts supply DOWN by the payment per unit, from S to S + subsidy - it lowers the cost of supplying each unit',
      'Quantity rises from Q₁ to Q₂; consumers pay only Pc, BELOW the original P₁',
      'Producers receive Pp = Pc + subsidy, ABOVE P₁ - the vertical gap Pp to Pc is the subsidy, and that gap × Q₂ is the cost to government',
    ],
  },
  Q142: {
    subsidy: [
      'The welfare gain is the extra consumption Q₁ to Q₂ moving towards the social optimum',
      'The shaded rectangle is what taxpayers pay for it - the two are what the evaluation weighs against each other',
      'How much of the gap reaches Pc rather than Pp decides whether consumers or producers captured the money',
    ],
  },
  Q143: {
    'buffer-stock': [
      'A good harvest shifts supply right; without intervention price falls below the FLOOR, so the agency BUYS the surplus into store',
      'A poor harvest shifts supply left; price would rise above the CEILING, so the agency SELLS from store',
      'Price stays inside the band either way - the agency is trading against the market in both directions',
    ],
  },
  Q144: {
    'buffer-stock': [
      'The band is what the scheme promises: price held between floor and ceiling whatever the harvest',
      'It only self-finances if the band straddles the long-run average - a floor set above it means buying in most years and selling in few',
      'That is the failure mode: the store fills, the money runs out, and the scheme collapses',
    ],
  },
  Q131: {
    'demand-shift': [
      'A CONDITION of demand changed, so the whole curve moves from D₁ to D₂ - this is not a movement along the curve',
      'Only the good’s own price causes a movement along D; everything else (income, related prices, tastes, population) shifts it',
      'With S unchanged, equilibrium moves from P₁, Q₁ to P₂, Q₂ - both price AND quantity rise',
    ],
  },
  Q132: {
    'supply-demand': [
      'At any price below Pe, quantity demanded exceeds quantity supplied - that horizontal gap IS the shortage',
      'Excess demand bids the price up: demand contracts along D while supply extends along S, and the gap closes',
      'The market clears at Pe, Qe with no one coordinating it - rationing, signalling and incentive all doing their work at once',
    ],
  },
  Q135: {
    'labour-market': [
      'D(L) = MRP is the demand curve: labour is demanded for the revenue the worker produces, not for itself',
      'Anything raising MRP - a higher output price, or higher productivity - shifts D(L) RIGHT',
      'The new equilibrium has a higher wage than W₁ AND higher employment than Q₁: both rise together',
    ],
  },
  Q136: {
    'labour-market': [
      'A wage set above the market-clearing W₁ leaves quantity supplied above quantity demanded - the excess supply is the unemployment',
      'The SIZE of that employment fall depends on how steep D(L) is: a steep (inelastic) D(L) loses few jobs, a shallow (elastic) one loses many',
      'This prediction assumes a competitive market - under monopsony the same wage rise can raise employment instead',
    ],
  },
  Q140: {
    'comparative-advantage': [
      'The two PPFs have different slopes, and that difference in slope IS the difference in opportunity cost the theory turns on',
      'Each country specialises where its opportunity cost is lower, then trades along the trade line',
      'Both consume beyond their own PPF - the gain from trade the theory predicts, and the benchmark against which real trade patterns are tested',
    ],
  },
  Q125: {
    'cost-push': [
      'Higher input costs shift AS left, from AS₁ to AS₂ - the whole curve moves, this is not a movement along it',
      'AD is unchanged, so the new equilibrium sits at a HIGHER price level P₂ and a LOWER output Y₂',
      'Both macroeconomic objectives worsen at once - that simultaneity is what makes a supply shock different from a demand shock',
    ],
  },
  Q126: {
    'cost-push': [
      'AS₁ to AS₂ raises prices to P₂ and cuts output to Y₂ - inflation and falling growth together',
      'Shifting AD left to fight the inflation would push output below Y₂; shifting it right to protect output pushes the price level above P₂ - the policy trade-off is visible on the diagram',
      'Only a rightward shift of AS itself restores both, which is why the effective answers are supply-side and take time',
    ],
  },
  Q122: {
    'cost-curves': [
      'The AC-AVC gap is average fixed cost: the wider it is, the further price can fall below AC before shutting down beats producing',
      'A capital-intensive firm has a wide gap and keeps trading through a deep downturn; a labour-intensive firm’s AVC sits close to AC, so it hits min AVC almost as soon as it becomes unprofitable',
    ],
  },
  Q099: {
    'terms-of-trade': [
      'Export prices rising faster than import prices in the early years is an IMPROVING terms of trade - the ratio, printed along the bottom, rises',
      'Once import prices overtake export prices, the terms of trade DETERIORATE - the ratio falls',
    ],
  },
  Q100: {
    'terms-of-trade': [
      'A commodity exporter is the case where import prices persistently overtake export prices - the deteriorating pattern in the later years',
      'The ratio falling is the Prebisch-Singer worry: the same volume of commodity exports buys fewer imports each year',
    ],
  },
  Q104: {
    'j-curve': [
      'The balance dips BELOW zero immediately after depreciation - short-run demand is too inelastic for volumes to respond yet',
      'It only rises above its starting level once demand becomes elastic enough to satisfy Marshall-Lerner - tracing the J shape',
    ],
  },
  Q105: {
    'exchange-rate': [
      'D₁ shifting right to D₂ is what higher UK interest rates or stronger competitiveness look like on this market',
      'The exchange rate rises from e₁ to e₂ - sterling appreciates - purely because demand for it has risen relative to supply',
    ],
  },
  Q106: {
    'fixed-exchange-rate': [
      'A fall in demand from D₁ to D₂ would push the rate down to where D₂ meets S - below the fixed peg',
      'To hold the peg, the central bank buys its own currency with reserves, pushing effective demand back up to the peg - a policy with a finite limit, since reserves are finite',
    ],
  },
  Q111: {
    'monetary-transmission': [
      'A change works through four separate channels - saving, borrowing, mortgages, exchange rate - not directly on spending',
      'Naming which channel is operating is what earns the analysis marks, not just asserting that demand has changed',
    ],
  },
  Q145: {
    'ppf-shift': [
      'The point INSIDE PPF₁ is an economy with spare capacity - unemployed workers, idle machinery',
      'Actual growth is the arrow from that point TO the frontier: the same resources, used more fully',
      'Potential growth is PPF₁ shifting out to PPF₂: the capacity itself has risen',
      'Only the shift can continue indefinitely - the interior gap can be closed once',
    ],
  },
  Q146: {
    'ad-shift': [
      'Rising export demand shifts AD right: real output rises from Y₁ to Y₂',
      'This is the demand-side half only - it raises output towards capacity, not capacity itself',
      'Sustained growth needs LRAS to move too, which is what the FDI and productivity effects deliver',
    ],
  },
  Q147: {
    'output-gap': [
      'The trend line is the economy’s sustainable capacity growing over time',
      'A boom is the stretch where actual output runs ABOVE trend - a positive output gap',
      'Spare capacity is gone: unemployment near the natural rate, capacity utilisation high',
      'Demand beyond capacity shows up as inflation rather than output - which is why the gap must close',
    ],
  },
  Q148: {
    'output-gap': [
      'Recession is the negative gap below trend; boom is the positive gap above it',
      'Smoothing means shrinking the AMPLITUDE of both - pulling actual output towards the trend line',
      'It does NOT mean raising the trend line: that is potential growth, a supply-side question',
      'Lags mean a policy aimed at the negative gap can arrive in time to deepen the positive one',
    ],
  },
  Q149: {
    'demand-shift': [
      'The price of good B has NOT changed - so this is a shift of D, never a movement along it',
      'A rise in the price of a SUBSTITUTE shifts D right: positive XED',
      'A rise in the price of a COMPLEMENT shifts D left: negative XED',
      'The size of the shift is what the magnitude of XED measures; a zero shift means unrelated goods',
    ],
  },
  Q150: {
    'demand-shift': [
      'Both YED and XED describe a SHIFT caused by something other than the good’s own price',
      'A fall in real income shifts D left for a luxury (YED > 1) and RIGHT for an inferior good (YED < 0)',
      'A rival cutting its price shifts D left for a close substitute - the exposure a stocking decision has to price in',
      'This is why the two are forecasting tools, not pricing tools: PED is what governs your own price',
    ],
  },
  Q151: {
    'economies-of-scale': [
      'LRAC reaches its minimum at MES - the smallest output that achieves the lowest average cost',
      'Where MES is small RELATIVE TO THE MARKET, a small firm sits at that minimum just as a large one does',
      'With no cost penalty to staying small, many small firms can coexist profitably',
      'Standardisation or franchising pushes MES right - and the independents start losing out',
    ],
  },
  Q152: {
    'business-objectives': [
      'The profit maximiser produces at MC = MR - output restricted, price above cost',
      'Break-even (AR = AC) is further right: more output, no surplus - the not-for-profit’s constraint',
      'That extra output is why a not-for-profit serves users a commercial firm would turn away',
      'It is a CONSTRAINT, not the absence of a financial objective: below it the organisation closes',
    ],
  },
  Q154: {
    'lras-shift': [
      'Public investment in infrastructure, education and health shifts LRAS right: capacity has risen',
      'Only CAPITAL spending plausibly does this - transfers and debt interest do not shift the curve',
      'The diagram shows the benefit; the financing cost (tax distortion, crowding out) is not on it',
      'Near full capacity the borrowing that funds the shift can displace private investment that would have shifted it anyway',
    ],
  },
  Q155: {
    'labour-market': [
      'D(L) = MRP shifts RIGHT - the same increase in demand in both cases',
      'Against a STEEP (inelastic) supply curve the wage jumps and employment barely moves',
      'Against a SHALLOW (elastic) one employment jumps and the wage barely moves',
      'Which you get is a property of the SUPPLY side, not of the size of the demand shift',
    ],
  },
  Q156: {
    'labour-market': [
      'Start from the competitive equilibrium W₁, Q₁',
      'A minimum wage ABOVE it: quantity supplied exceeds quantity demanded - the gap is unemployment',
      'A maximum wage BELOW it: quantity demanded exceeds quantity supplied - shortages and unfilled vacancies',
      'Under monopsony the floor result reverses: between the monopsony wage and the competitive wage, employment RISES',
    ],
  },
}
