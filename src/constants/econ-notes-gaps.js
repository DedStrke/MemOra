/*
  Edexcel A-level Economics A (9EC0) - the specification sections that had
  no chapter of their own.

  A section-by-section pass over the specification against the chapter
  outline found ten sections that were examined as topics in their own
  right but existed here only as a paragraph inside another chapter, or
  not at all: output gaps and the trade cycle (2.5.2-2.5.3), conflicts
  between objectives (2.6.4), efficiency (3.4.1), monopsony (3.4.6),
  globalisation (4.1.1), terms of trade (4.1.4), protectionism (4.1.6),
  international competitiveness (4.1.9), factors influencing growth and
  development (4.3.2) and macroeconomic policy in a global context
  (4.5.4). Each is a chapter now.

  Same shape as the rest of the Economics notes: definition, mechanism,
  and - in its own block - why the mechanism may not hold, because that is
  where the evaluation marks are. Diagrams are placed inline where the
  prose describes them. No em dashes.
*/

import { h, p, ul, defn, det, worked, diagram, tip, table, chapter } from './econ-notes-build'

/* ====================================== OUTPUT GAPS AND THE TRADE CYCLE */

const outputGaps = chapter(
  defn('Actual growth', 'The percentage change in real GDP over a period - what the economy actually produced.'),
  defn('Potential growth', 'The rate at which the economy COULD grow if all resources were fully and efficiently employed: the growth of productive capacity, shown by an outward shift of LRAS or the PPF.'),
  defn('Trend growth', 'The long-run average rate of growth, around which actual growth fluctuates. For the UK it has been roughly 2 to 2.5% a year for most of the post-war period, and lower since 2008.'),
  defn('Output gap', 'The difference between actual output and potential output, usually expressed as a percentage of potential output.'),
  p(
    'A NEGATIVE output gap means actual output is below potential: there is spare capacity, unemployment is above its natural rate, and there is downward pressure on inflation. A POSITIVE output gap means actual output is above potential: firms are working beyond sustainable capacity with overtime and worn machinery, unemployment is below its natural rate, and inflationary pressure builds. The gap closes either by demand moving (a boom fills a negative gap) or by capacity moving (investment raises potential output).',
  ),
  diagram('output-gap'),
  h('Reading the output gap on an AD/AS diagram'),
  p(
    'On the Keynesian AD/AS diagram, potential output is where LRAS becomes vertical. Equilibrium to the left of that point is a negative output gap: the horizontal section of AS shows that output can rise without the price level rising, because idle resources are simply brought back into use. Equilibrium on the vertical section is full capacity, and any further rise in AD is a positive output gap that shows up only as inflation.',
  ),
  diagram('ad-as'),
  h('The trade cycle'),
  defn('Trade (business) cycle', 'The recurring pattern of fluctuations in actual growth around trend: boom, downturn, recession, recovery.'),
  table(
    ['Phase', 'What is happening', 'Typical indicators'],
    [
      ['Boom', 'Actual growth above trend; positive output gap', 'Low unemployment, rising inflation, rising imports, high confidence and investment, asset price rises'],
      ['Downturn / slowdown', 'Growth slows towards trend and below', 'Confidence falls, investment postponed, stock-building slows'],
      ['Recession', 'Two consecutive quarters of negative growth; negative output gap', 'Rising unemployment, falling inflation or deflation, falling imports, business failures, rising government borrowing'],
      ['Recovery', 'Growth returns and moves back towards trend', 'Unemployment starts to fall (with a lag), investment resumes, confidence rebuilds'],
    ],
  ),
  det(
    'Why the cycle happens - demand-side causes',
    'Swings in the components of AD are amplified by the multiplier and the accelerator.',
    [
      'Consumer and business confidence are self-reinforcing: expected growth causes spending and investment, which delivers the growth.',
      'The ACCELERATOR: investment depends on the CHANGE in output. A slowdown in growth, not even a fall, cuts investment sharply, which cuts AD further.',
      'Credit cycles: banks lend freely in a boom, inflating asset prices, then tighten in a downturn, deepening it.',
      'Stock-building: firms run down stocks when demand falls, so production falls by more than sales.',
    ],
    [
      'Supply-side shocks - an oil price spike, a pandemic, a harvest failure - cause cycles without any change in AD. Stagflation in the 1970s was a supply shock, not a demand cycle.',
      'Policy can dampen or amplify the cycle: badly timed fiscal or monetary policy is itself a cause of instability.',
    ],
  ),
  h('Why the output gap is hard to measure'),
  ul([
    'Potential output cannot be observed. It is estimated from trend growth, capacity utilisation surveys and unemployment, and estimates are revised for years afterwards.',
    'GDP data itself is revised. The initial estimate of a quarter is often wrong by half a percentage point or more.',
    'The natural rate of unemployment, which defines "full" employment, is itself an estimate.',
    'A structural change - a productivity slowdown, a pandemic - shifts potential output in ways that only become clear in hindsight.',
  ]),
  tip(
    'The exam gives you a chart of actual growth and asks about the output gap. Say which SIGN it is, what that implies for inflation and unemployment, and then note that the gap is an ESTIMATE that depends on an unobservable potential output. That last sentence is the evaluation mark.',
  ),
  worked(
    'Potential output is estimated at £2,400bn and actual output is £2,340bn. Calculate the output gap and state its implication.',
    'Gap = (2,340 - 2,400) / 2,400 × 100 = -2.5%. A negative gap of 2.5% of potential output: spare capacity, unemployment above its natural rate, and low inflationary pressure - a case for expansionary demand-side policy.',
  ),
)

/* ====================================== CONFLICTS BETWEEN OBJECTIVES */

const conflicts = chapter(
  p(
    'Governments pursue several objectives at once - growth, low unemployment, low and stable inflation, a sustainable current account, a manageable budget deficit, environmental protection and greater equality. Almost every pair conflicts in the short run, and the specification examines the conflicts directly, usually as a 25-mark evaluation of whether one objective should be prioritised.',
  ),
  h('Inflation against unemployment: the Phillips curve'),
  defn('Short-run Phillips curve', 'The inverse relationship between the rate of inflation and the rate of unemployment: lower unemployment is bought with higher inflation, and vice versa.'),
  p(
    'The mechanism is the labour market. As unemployment falls, workers gain bargaining power and wages rise faster; firms pass wage costs into prices. Also, low unemployment usually reflects strong AD, which pulls prices up directly. Demand-side policy therefore trades one objective for the other: expansion moves the economy up and left along the curve, contraction down and right.',
  ),
  diagram('phillips'),
  det(
    'The long-run Phillips curve is vertical',
    'In the long run there is no trade-off: unemployment returns to its natural rate whatever the inflation rate.',
    [
      'A demand boost lowers unemployment below the natural rate and raises inflation.',
      'Workers come to EXPECT the higher inflation and build it into wage demands, so real wages return to their previous level.',
      'Employment falls back to the natural rate, but now with higher inflation - the short-run curve has shifted outwards.',
      'Only a further, larger dose of inflation can hold unemployment below the natural rate; sustaining it means accelerating inflation.',
    ],
    [
      'The natural rate (NAIRU) is not fixed. Supply-side policy that improves skills, mobility and incentives shifts the long-run curve LEFT - lower unemployment with no inflationary cost.',
      'After 2010 many economies had low unemployment AND low inflation for years, which the simple model does not predict. Globalisation, weaker unions and anchored expectations flattened the short-run curve.',
    ],
  ),
  diagram('long-run-phillips'),
  h('The other conflicts'),
  table(
    ['Objectives in conflict', 'The mechanism', 'When the conflict is weak or absent'],
    [
      ['Growth vs inflation', 'Faster growth driven by AD raises the price level once spare capacity is used up', 'Growth from the supply side (LRAS shifting right) raises output AND lowers prices'],
      ['Growth vs current account', 'Higher incomes raise imports (UK marginal propensity to import is high), worsening the trade balance', 'Export-led growth improves both at once'],
      ['Growth vs environment', 'More output means more resource use and emissions', 'Green investment and regulation can make growth cleaner; richer countries can afford environmental protection (Kuznets)'],
      ['Growth vs inequality', 'Growth often rewards capital and skills first, widening the gap', 'Growth that raises employment of low-skilled workers narrows it; redistribution can offset it'],
      ['Unemployment vs inflation', 'The Phillips curve', 'Supply-side improvements lower both'],
      ['Budget deficit vs growth', 'Cutting the deficit (austerity) reduces AD and growth; borrowing to stimulate raises the deficit', 'In the long run growth raises tax revenue and shrinks the deficit ratio'],
      ['Low inflation vs financial stability', 'Very low interest rates to hit the inflation target inflate asset bubbles', 'Macroprudential tools (bank capital rules) can target stability separately'],
    ],
  ),
  det(
    'Why supply-side policy is the resolution',
    'Demand-side policy moves along a trade-off; supply-side policy shifts it.',
    [
      'Raising productive capacity allows more output without inflation, and more employment without wage pressure.',
      'Better competitiveness raises exports, easing the growth-current account conflict.',
      'Higher productivity raises tax revenue for a given tax rate, easing the deficit.',
    ],
    [
      'Supply-side policy is slow: education and infrastructure take a decade. It does nothing for a recession this year.',
      'It is not free: tax cuts to sharpen incentives cost revenue, and deregulation may worsen inequality or the environment.',
      'It can fail: training schemes can be poorly targeted, and lower taxes may be saved rather than spent or invested.',
    ],
  ),
  tip(
    'The 25-mark structure: name the two objectives, explain the mechanism of the conflict with a Phillips or AD/AS diagram, show the short-run/long-run distinction, then judge. The strongest judgement usually says the conflict is real in the short run, depends on the state of the economy (how big the output gap is), and is best escaped through the supply side over time.',
  ),
)

/* ====================================== EFFICIENCY */

const efficiency = chapter(
  defn('Allocative efficiency', 'Resources are allocated to produce the goods and services consumers value most. Achieved where PRICE = MARGINAL COST: the value of the last unit to consumers equals the cost of the resources used to make it.'),
  defn('Productive efficiency', 'Output is produced at the LOWEST possible average cost - at the minimum point of the AC curve, where MC = AC. No resources are wasted; the economy is on its PPF.'),
  defn('Dynamic efficiency', 'Efficiency over TIME: firms invest in research, innovation and new capital so that costs fall and products improve. Requires supernormal profit to fund it.'),
  defn('X-inefficiency', 'A firm operating ABOVE its lowest possible average cost because it lacks the competitive pressure to control costs - organisational slack, over-staffing, expensive perks. Named by Leibenstein.'),
  diagram('efficiency'),
  p(
    'The four concepts answer different questions. Allocative efficiency asks whether the RIGHT things are being made; productive efficiency asks whether they are being made as CHEAPLY as possible; dynamic efficiency asks whether they will be made BETTER next year; X-inefficiency asks whether the firm is even trying. A market can score well on some and badly on others, and the market structure determines which.',
  ),
  h('Efficiency by market structure'),
  table(
    ['Structure', 'Allocative', 'Productive', 'Dynamic', 'X-inefficiency'],
    [
      ['Perfect competition', 'Yes: P = MC in the long run', 'Yes: long-run equilibrium is at minimum AC', 'Weak: only normal profit, nothing to invest', 'None: any slack means losses and exit'],
      ['Monopolistic competition', 'No: P > MC', 'No: excess capacity, left of minimum AC', 'Limited', 'Low: competition remains'],
      ['Oligopoly', 'No: P > MC', 'Possibly, if firms are large enough for scale economies', 'Often strong: profits fund R&D, non-price competition', 'Some, where collusion removes pressure'],
      ['Monopoly', 'No: P > MC, deadweight loss', 'Usually not, unless a natural monopoly', 'Potentially strongest: large profits, patents, long horizon', 'Highest risk: no competitive discipline'],
    ],
  ),
  diagram('perfect-competition'),
  diagram('monopoly'),
  det(
    'Monopoly and efficiency - the standard case against',
    'A profit-maximising monopolist restricts output and raises price, so P > MC and society loses the welfare from the units not produced.',
    [
      'Output is set where MR = MC, which is below the allocatively efficient output where P = MC.',
      'The units between the two outputs were worth more to consumers than they cost to make; not making them is a deadweight loss.',
      'Without competitors the monopolist need not minimise cost: X-inefficiency.',
      'Consumer surplus is transferred to the producer as supernormal profit.',
    ],
    [
      'Dynamic efficiency: supernormal profit funds research that a competitive firm could never afford, and patents exist precisely to allow this. Pharmaceuticals are the example.',
      'A natural monopoly with falling AC is more productively efficient as one firm than as many.',
      'Contestable markets: the THREAT of entry can force a monopolist to price near cost even without actual competitors.',
      'Price discrimination can raise output towards the efficient level, since the monopolist no longer has to cut price for everyone to sell more.',
    ],
  ),
  worked(
    'A firm has AC = 20 at its minimum output of 500 units, MC = 20 at that output, and faces demand such that P = 20 at 700 units. At what output is it productively efficient, and at what output allocatively efficient?',
    'Productively efficient at 500 units, the minimum of AC where MC = AC. Allocatively efficient at 700 units, where P = MC = 20. The two coincide only if demand happens to cut MC at the minimum of AC - which is what long-run perfect competition delivers and no other structure guarantees.',
  ),
  tip(
    'When a question asks "to what extent is [structure] efficient", take the four types one at a time and give a verdict on each with a reason. A blanket "monopoly is inefficient" caps the mark; "allocatively no, productively rarely, dynamically possibly yes, and that depends on whether profits are reinvested" is the top band.',
  ),
)

/* ====================================== MONOPSONY */

const monopsony = chapter(
  defn('Monopsony', 'A market with a SINGLE BUYER (or one dominant buyer) facing many sellers. The buyer has power over the price it pays, just as a monopolist has power over the price it charges.'),
  p(
    'The specification examines monopsony in two places. In the PRODUCT market (3.4.6) the buyer is a firm purchasing from many suppliers: supermarkets buying from farmers, a car manufacturer buying from parts makers, the NHS buying drugs. In the LABOUR market (3.5) the buyer is an employer of a type of worker with few alternative employers: the NHS for nurses, a mining company in a one-industry town. The analysis is the same; the wage is just the price of labour.',
  ),
  h('How a monopsonist sets price and quantity'),
  det(
    'The monopsonist buys where the marginal cost of buying equals the marginal benefit',
    'Because it is the only buyer, buying one more unit raises the price it pays for EVERY unit, so the marginal cost of a unit exceeds its price.',
    [
      'The supply curve it faces is the whole market supply - upward sloping.',
      'To buy more it must offer a higher price, and that higher price applies to all units, so the marginal cost curve lies ABOVE the supply curve.',
      'It buys where MC of buying = marginal revenue product (or marginal benefit), which is FEWER units than a competitive market would buy.',
      'It then pays only the price on the supply curve for that quantity, which is BELOW what a competitive market would pay.',
      'Result: lower quantity and lower price than under competition. Suppliers (or workers) are paid less than the value of what they contribute.',
    ],
    [
      'If suppliers organise - a farmers\' cooperative, a trade union - the market becomes bilateral monopoly and the price is bargained, potentially back towards the competitive level.',
      'A minimum price (or minimum wage) set between the monopsony price and the competitive price can RAISE both price and quantity - the reverse of its effect in a competitive market.',
      'If suppliers can sell elsewhere (export, other buyers, other jobs), the buyer\'s power is limited by the elasticity of supply it faces.',
    ],
  ),
  diagram('monopsony'),
  diagram('labour-market'),
  h('Who gains and who loses'),
  table(
    ['Stakeholder', 'Effect of monopsony power'],
    [
      ['The monopsonist firm', 'Lower input costs, higher profit; may pass some on as lower prices to consumers, or keep it'],
      ['Suppliers / workers', 'Lower prices or wages than their contribution justifies; squeezed margins; farmers driven out; workers underpaid'],
      ['Consumers', 'Possibly lower prices if cost savings are passed on - but not if the firm also has monopoly power in its selling market'],
      ['Employees of the monopsonist', 'Ambiguous: a profitable employer may be more secure, but the same power may be used against its own workforce'],
      ['Efficiency', 'Allocatively inefficient: too little is bought at too low a price; the deadweight loss mirrors monopoly'],
    ],
  ),
  h('Monopsony in practice'),
  ul([
    'UK supermarkets and their suppliers: the Groceries Code Adjudicator exists because of evidence of delayed payments, retrospective price changes and forced promotions.',
    'The NHS as the near-sole employer of nurses and buyer of drugs: it can hold down wages and prices, but persistent shortages suggest the wage is below the market-clearing level.',
    'Large online platforms as buyers of labour and of sellers\' output.',
  ]),
  tip(
    'The clean way to score the diagram marks: draw the supply curve, the MC of labour above it, and the demand (MRP) curve; mark the monopsony quantity where MC = MRP and read the wage off the SUPPLY curve at that quantity, not off the demand curve. Then show the competitive outcome where S = D for comparison.',
  ),
)

/* ====================================== GLOBALISATION */

const globalisation = chapter(
  defn('Globalisation', 'The increasing integration and interdependence of economies through the growth of international trade, capital flows, migration and the spread of technology, so that goods, services, money, people and ideas move across borders more freely.'),
  h('Characteristics'),
  ul([
    'Trade growing faster than GDP: exports and imports are a rising share of output.',
    'Growth of transnational corporations (TNCs) organising production across many countries.',
    'Global supply chains: components made in several countries and assembled in another.',
    'Free movement of capital: FDI and portfolio flows; financial markets linked in real time.',
    'International migration of labour.',
    'Convergence of consumer tastes and of brands; spread of technology and ideas.',
  ]),
  h('Causes'),
  table(
    ['Cause', 'How it drives integration'],
    [
      ['Falling transport costs', 'Containerisation cut the cost of shipping a unit to a fraction of its value, making distant production viable'],
      ['Falling communication costs', 'The internet allows coordination of production, services and finance across the world at negligible cost'],
      ['Trade liberalisation', 'WTO rounds and regional agreements cut tariffs from an average of 40% in 1947 to under 5% in developed economies'],
      ['Deregulation of finance', 'Removal of capital controls allows money to move to wherever returns are highest'],
      ['Growth of TNCs', 'Firms seek lower costs, new markets and scale by producing abroad'],
      ['Political change', 'The opening of China, the collapse of the Soviet bloc and India\'s reforms added billions of workers and consumers to the world market'],
    ],
  ),
  h('Impacts - by stakeholder'),
  det(
    'On consumers',
    'Lower prices, more choice, better quality.',
    ['Competition from imports forces domestic firms to cut costs and prices.', 'Access to goods not produced domestically and to global brands.', 'Faster spread of new products and technology.'],
    ['Loss of local variety and culture as global brands dominate.', 'Vulnerability to global supply shocks - a factory fire or shipping disruption on the other side of the world empties shelves.'],
  ),
  det(
    'On workers',
    'New jobs in export industries; lost jobs in industries that cannot compete.',
    ['Developing-country workers gain employment and rising wages in manufacturing.', 'Developed-country workers in tradeable, low-skill manufacturing face competition from lower-wage economies and lose jobs.', 'Skilled workers gain, because their skills serve a larger market.'],
    ['The losers are concentrated regionally and by skill, and the adjustment is slow: structural unemployment in former industrial areas persists for decades.', 'Increased bargaining power of TNCs (they can relocate) can hold down wages and conditions everywhere.'],
  ),
  det(
    'On producers',
    'Larger markets and cheaper inputs; more intense competition.',
    ['Access to global markets allows economies of scale.', 'Sourcing inputs from the cheapest supplier worldwide lowers costs.', 'Technology transfer through FDI raises productivity.'],
    ['Domestic firms in developing economies can be wiped out by TNC competition before they reach scale.', 'Dependence on long supply chains adds risk.'],
  ),
  det(
    'On governments',
    'Higher tax revenue from growth; less policy independence.',
    ['Growth and trade raise the tax base.', 'Competition for FDI pushes governments to cut corporation tax and regulation - a race to the bottom that erodes revenue.', 'TNCs use transfer pricing to shift profits to low-tax jurisdictions.', 'Capital mobility limits the ability to run independent monetary policy or to tax capital.'],
    ['International cooperation (OECD minimum corporate tax, the EU) can restore some control.'],
  ),
  det(
    'On the environment',
    'More output and transport means more emissions; but wealth funds protection.',
    ['Shipping and air freight emissions; production relocates to countries with weaker regulation (pollution havens).', 'Deforestation and resource depletion to serve global demand.'],
    ['Richer countries can afford cleaner technology; global agreements become possible; the environmental Kuznets curve suggests pollution eventually falls with income.'],
  ),
  diagram('comparative-advantage'),
  h('Developing versus developed economies'),
  table(
    ['', 'Gains', 'Losses'],
    [
      ['Developing economies', 'Export-led growth (China, Vietnam); FDI, technology and jobs; access to capital', 'Dependence on TNCs and volatile capital flows; exploitation of labour and environment; loss of infant industries; primary product dependency'],
      ['Developed economies', 'Cheaper goods, larger export markets, returns on capital abroad', 'Manufacturing job losses, regional decline, downward pressure on low-skill wages, widening inequality'],
    ],
  ),
  tip(
    'The judgement in a globalisation essay is about DISTRIBUTION. The gains are large in aggregate and well established; the losses fall on identifiable groups who are not compensated. Whether it is "good" depends on who you ask and on whether governments redistribute the gains - say that explicitly.',
  ),
)

/* ====================================== TERMS OF TRADE */

const termsOfTrade = chapter(
  defn('Terms of trade', 'The ratio of a country\'s export prices to its import prices, expressed as an index: (index of export prices ÷ index of import prices) × 100. It measures how many imports a given quantity of exports can buy.'),
  worked(
    'Export prices rise from an index of 100 to 110 while import prices rise from 100 to 125. Calculate the change in the terms of trade.',
    'Terms of trade = 110 / 125 × 100 = 88. They have DETERIORATED from 100 to 88: each unit of exports now buys 12% fewer imports. The country must export more to afford the same imports.',
  ),
  diagram('terms-of-trade'),
  h('What changes the terms of trade'),
  table(
    ['Factor', 'Effect', 'Why'],
    [
      ['Exchange rate appreciation', 'Improvement', 'Export prices rise in foreign currency; import prices fall in domestic currency'],
      ['Inflation higher than trading partners', 'Improvement', 'Export prices rise relative to imports - but competitiveness falls'],
      ['Rise in world commodity prices', 'Improvement for exporters, deterioration for importers', 'Oil exporters gain when oil rises; oil importers lose'],
      ['Rise in productivity', 'Deterioration', 'Lower costs are passed on as lower export prices'],
      ['Rise in demand for the country\'s exports', 'Improvement', 'Demand pulls export prices up'],
      ['Tariffs imposed by partners', 'Deterioration', 'Exporters cut prices to stay competitive'],
    ],
  ),
  h('Is an improvement good?'),
  det(
    'An improvement raises living standards - if it is not bought with lost sales',
    'The same exports buy more imports, so real income rises.',
    [
      'A country whose export prices rise can import more capital goods and consumer goods for the same effort.',
      'The current account improves IF demand for exports is price inelastic, because the higher price more than offsets any fall in volume.',
    ],
    [
      'If demand for exports is price ELASTIC, higher export prices cut volumes so much that export revenue falls and the current account worsens. The Marshall-Lerner condition decides which.',
      'An improvement caused by inflation or an appreciation is a loss of competitiveness in disguise: exporters lose market share.',
      'An improvement caused by a commodity boom is temporary and volatile, and can cause Dutch disease - the currency rises and other exports become uncompetitive.',
    ],
  ),
  h('The Prebisch-Singer hypothesis'),
  p(
    'Prebisch and Singer argued that the terms of trade of primary-product exporters DETERIORATE over time. Demand for primary products is income inelastic (a rich consumer does not buy twice the food), while demand for manufactures is income elastic, so as world income grows the price of manufactures rises relative to primary goods. Developing countries that export commodities and import manufactures therefore have to export ever more to buy the same imports. This is the argument for diversifying away from primary products, and for protecting infant manufacturing industries.',
  ),
  det(
    'Why the hypothesis may not hold',
    'The evidence is mixed and depends on the period chosen.',
    [
      'The commodity super-cycle of 2000-2014, driven by Chinese demand, improved the terms of trade of commodity exporters dramatically.',
      'Manufactures have become cheaper too: electronics prices fall relentlessly.',
    ],
    [
      'Even where the long-run trend deteriorates, VOLATILITY is the bigger problem for a developing economy: planning is impossible when export revenue can halve in a year.',
    ],
  ),
  tip('A terms-of-trade calculation is worth 2 marks and appears often. Index of exports over index of imports times 100, then state improved or deteriorated and what that means for the purchasing power of exports.'),
)

/* ====================================== PROTECTIONISM */

const protectionism = chapter(
  defn('Protectionism', 'Government policies that restrict international trade to shield domestic producers from foreign competition: tariffs, quotas, subsidies to domestic firms, and non-tariff barriers.'),
  h('The instruments'),
  table(
    ['Instrument', 'What it is', 'Effect'],
    [
      ['Tariff', 'A tax on imports', 'Raises the import price; domestic output rises, imports fall, government gains revenue, consumers pay more'],
      ['Quota', 'A physical limit on the quantity imported', 'Restricts supply; the price rises, but the extra revenue goes to whoever holds the import licences, not the government'],
      ['Subsidy to domestic producers', 'A payment per unit to home firms', 'Lowers their costs so they can undercut imports; costs the taxpayer; no direct rise in consumer prices'],
      ['Non-tariff barriers', 'Regulations, standards, licensing, bureaucracy, embargoes', 'Raise the cost or difficulty of importing without a visible tax; hard to challenge at the WTO'],
      ['Export subsidies', 'Payments to exporters', 'Raise export volumes; can provoke retaliation and are largely banned under WTO rules'],
    ],
  ),
  h('The tariff diagram'),
  p(
    'Before the tariff, the country imports at the world price Pw: domestic supply is low, domestic demand high, and imports fill the gap. A tariff raises the price to Pw + t. Domestic supply expands along the supply curve, domestic demand contracts along the demand curve, and imports shrink to the smaller gap. The government collects tariff revenue on the remaining imports.',
  ),
  diagram('tariff'),
  det(
    'The welfare effects of a tariff',
    'Consumers lose more than producers and the government gain: there is a net welfare loss.',
    [
      'Consumer surplus falls by the whole area between Pw and Pw + t under the demand curve.',
      'Part of that loss becomes producer surplus for domestic firms; part becomes government revenue.',
      'Two triangles remain: a PRODUCTION inefficiency (resources drawn into an industry where the country has no comparative advantage) and a CONSUMPTION inefficiency (consumers who valued the good above the world price but below the tariff price no longer buy).',
      'Those two triangles are the deadweight loss - the amount by which the country as a whole is poorer.',
    ],
    [
      'The loss is smaller when demand and supply are price inelastic, because quantities change little.',
      'If the country is large enough to affect the world price, a tariff can push Pw down and shift some of the cost onto foreign exporters (the optimum tariff argument).',
    ],
  ),
  h('Arguments for protection'),
  table(
    ['Argument', 'The case', 'The weakness'],
    [
      ['Infant industry', 'New industries need shelter until they reach the scale to compete', 'Governments cannot pick winners; protected industries rarely grow up; the cost falls on consumers meanwhile'],
      ['Protecting employment', 'Prevents job losses in industries hit by imports', 'Saves jobs at a very high cost per job; other industries lose from retaliation and dearer inputs'],
      ['Preventing dumping', 'Stops foreign firms selling below cost to destroy competition', 'Hard to distinguish dumping from genuine low cost; consumers benefit from cheap goods'],
      ['Strategic industries and national security', 'A country should not depend on rivals for food, energy, defence or chips', 'The list of "strategic" industries tends to grow; better achieved by stockpiles and diversification'],
      ['Correcting a current account deficit', 'Restricting imports reduces the deficit', 'Treats the symptom; provokes retaliation that cuts exports; a deficit is better addressed by competitiveness'],
      ['Raising revenue', 'Tariffs are easy to collect', 'Only significant for developing economies with weak tax systems; distorts trade'],
      ['Protecting standards', 'Blocks goods made with child labour or pollution', 'Can be a disguised barrier; better addressed by labelling and international agreement'],
    ],
  ),
  det(
    'Arguments against protection',
    'It raises prices, invites retaliation, and shelters inefficiency.',
    [
      'Consumers pay more and have less choice; the regressive burden falls hardest on the poor, who spend more of their income on traded goods.',
      'Retaliation: trading partners respond in kind, and exporters lose markets. The Smoot-Hawley tariff of 1930 and the 2018 US-China tariffs both triggered retaliation.',
      'Resources stay in industries where the country has no comparative advantage; productivity growth slows because firms are not forced to compete.',
      'Dearer imported inputs raise costs for domestic producers who use them - a steel tariff protects steelmakers and hurts every firm that buys steel.',
      'Trading blocs and the WTO exist to constrain protection precisely because every country gains when all reduce it.',
    ],
    [
      'The gains from free trade are aggregate; a specific, concentrated group loses, and without compensation their opposition is rational.',
      'A temporary, targeted, time-limited measure with a credible exit is a different thing from permanent protection.',
    ],
  ),
  tip(
    'Draw the tariff diagram and LABEL the areas: revenue rectangle, producer surplus gain, and the two deadweight triangles. Then evaluate on elasticity, retaliation and who bears the cost. The judgement is almost always: net loss, but the case for a temporary, targeted measure can be made in specific circumstances.',
  ),
)

/* ====================================== INTERNATIONAL COMPETITIVENESS */

const competitiveness = chapter(
  defn('International competitiveness', 'The ability of a country\'s firms to sell their goods and services in international markets - to compete on PRICE and on quality against foreign producers.'),
  h('Measures'),
  table(
    ['Measure', 'What it captures', 'Limits'],
    [
      ['Relative unit labour costs', 'Labour cost per unit of output compared with trading partners, in a common currency. Rising RULC = lower competitiveness', 'Ignores non-labour costs and quality'],
      ['Relative export prices', 'A country\'s export prices relative to competitors\', in a common currency', 'Quality and reliability are not in a price index'],
      ['Global competitiveness rankings (WEF)', 'Composite of institutions, infrastructure, skills, market efficiency, innovation', 'Subjective weightings; survey-based'],
      ['Share of world exports', 'The outcome: whether the country is winning or losing market share', 'A lagging indicator; affected by the composition of exports'],
    ],
  ),
  h('Factors that determine competitiveness'),
  det(
    'The exchange rate',
    'A depreciation makes exports cheaper abroad and imports dearer at home, raising price competitiveness.',
    ['A 10% fall in the pound cuts the foreign-currency price of UK exports by roughly 10% if exporters hold their sterling prices.', 'Imports become dearer, so domestic producers gain in the home market too.'],
    ['Exporters that use imported inputs see their costs rise, eroding the gain.', 'The improvement is temporary if the depreciation feeds through to inflation.', 'Non-price factors - quality, reliability, brand - may matter more than price for many exports.'],
  ),
  det(
    'Productivity and unit labour costs',
    'Higher output per worker lowers the cost of each unit, allowing lower prices or higher wages without losing competitiveness.',
    ['Productivity depends on capital investment, skills, technology and management.', 'Unit labour cost = wage / productivity: wages can rise without harm if productivity rises faster.'],
    ['The UK\'s productivity has grown very slowly since 2008, which is the underlying reason for its weak competitiveness; the exchange rate can only mask it.'],
  ),
  det(
    'Inflation',
    'Inflation higher than in trading partners raises relative export prices.',
    ['A country with 5% inflation and a fixed exchange rate loses 3% competitiveness a year against a partner with 2%.'],
    ['Under floating rates the currency tends to depreciate to offset the difference (purchasing power parity), so the loss is temporary.'],
  ),
  det(
    'Non-price factors',
    'Quality, design, reliability, after-sales service, delivery times, innovation and reputation.',
    ['German engineering and Swiss watches sell at premium prices; price competitiveness is irrelevant.', 'Investment in R&D, skills and infrastructure raises non-price competitiveness.'],
    ['These are slow to build and easy to lose; a reputation for reliability takes decades.'],
  ),
  ul([
    'Other factors: the tax and regulatory environment; infrastructure quality; labour market flexibility; the cost of capital; the exchange rate regime; trade agreements that reduce barriers to a country\'s exports.',
  ]),
  diagram('exchange-rate'),
  h('Why it matters'),
  table(
    ['Benefit of competitiveness', 'Consequence of losing it'],
    [
      ['Export-led growth and employment', 'Falling market share; manufacturing decline; structural unemployment'],
      ['Current account surplus or a smaller deficit', 'Persistent current account deficit financed by borrowing or selling assets'],
      ['Attracts FDI', 'Firms relocate to more competitive locations'],
      ['Higher living standards from the gains from trade', 'Depreciation of the currency, raising import prices and inflation'],
    ],
  ),
  det(
    'Policies to raise competitiveness',
    'Supply-side measures raise productivity; demand-side measures only change relative prices.',
    ['Education and training; infrastructure; R&D tax credits; competition policy to sharpen incentives; lower corporation tax to attract investment; deregulation.', 'A depreciation gives a quick boost to price competitiveness.'],
    ['Supply-side measures take years and cost money.', 'A depreciation raises import prices and can be matched by competitors; it does nothing for non-price competitiveness.', 'A "race to the bottom" on tax and regulation can undermine the public services and standards that competitiveness also depends on.'],
  ),
  diagram('lras-shift'),
)

/* ====================================== FACTORS INFLUENCING GROWTH AND DEVELOPMENT */

const developmentFactors = chapter(
  p(
    'Why are some countries poor and others rich? The specification lists the economic factors that hold growth and development back, and the non-economic ones. The exam typically gives data on one country and asks which factors are constraining it, so each factor needs to be explained as a MECHANISM - how it stops growth - not just named.',
  ),
  h('Economic factors'),
  det(
    'Primary product dependency',
    'Relying on exporting one or two commodities makes income volatile and, some argue, doomed to decline.',
    ['Commodity prices are volatile because both demand and supply are price inelastic in the short run: a small shift moves the price a lot.', 'Prebisch-Singer: the terms of trade of primary exporters tend to deteriorate as world income grows.', 'Dutch disease: a commodity boom raises the exchange rate and makes other exports uncompetitive, so the economy never diversifies.'],
    ['Norway, Australia and Chile are rich commodity exporters; the difference is institutions, sovereign wealth funds and diversification policy, not the commodity itself.'],
  ),
  det(
    'Savings gap and the Harrod-Domar model',
    'Growth requires investment, investment requires savings, and poor countries save little because incomes are low.',
    ['Harrod-Domar: growth rate = savings ratio ÷ capital-output ratio. Low savings mean low investment, low growth, low income - a trap.', 'The gap can be filled from abroad: FDI, aid or borrowing.'],
    ['The model assumes capital is the binding constraint; in many countries it is institutions, skills or infrastructure that stop investment being productive.', 'Foreign capital brings dependency and debt.'],
  ),
  diagram('poverty-trap'),
  det(
    'Foreign currency gap',
    'Development needs imported capital goods, but export earnings are too small to pay for them.',
    ['Without foreign exchange a country cannot buy the machinery, technology and inputs it does not produce.'],
    ['Aid and FDI provide foreign exchange; so does export diversification.'],
  ),
  det(
    'Capital flight',
    'Wealth leaves the country because holders fear instability, taxation or confiscation.',
    ['Money that could have funded domestic investment sits in foreign banks.', 'Often a symptom of weak institutions and political risk.'],
    ['Stable government and credible property rights reverse it.'],
  ),
  det(
    'Demographic factors',
    'Rapid population growth can dilute capital and strain services; an ageing population strains the working-age share.',
    ['A high dependency ratio means each worker supports more non-workers.', 'A "demographic dividend" arrives when birth rates fall and the working-age share peaks - if there are jobs.'],
    ['Population growth also means a larger market and workforce; it is a problem only when investment does not keep pace.'],
  ),
  det(
    'Debt',
    'High external debt diverts export earnings and tax revenue to interest payments.',
    ['Debt service crowds out spending on health, education and infrastructure.', 'Debt in foreign currency becomes heavier when the domestic currency falls.'],
    ['Debt relief (HIPC initiative) has freed resources in some countries; the question is whether the freed resources are used well.'],
  ),
  det(
    'Access to credit and banking',
    'Without banks, savings are not channelled into investment and small firms cannot grow.',
    ['Informal moneylenders charge very high rates; farmers cannot buy seed or equipment.', 'Microfinance and mobile banking (M-Pesa) have expanded access rapidly.'],
    ['Microfinance evidence on growth is mixed; it helps consumption smoothing more than business growth.'],
  ),
  det(
    'Infrastructure',
    'Poor roads, ports, power and water raise the cost of everything and deter investment.',
    ['Unreliable electricity forces firms to buy generators; goods rot on the way to market.', 'Infrastructure is a public good the private sector under-provides.'],
    ['Large projects invite corruption and white elephants; maintenance is often neglected.'],
  ),
  det(
    'Education and skills',
    'Human capital determines productivity and the ability to adopt technology.',
    ['Primary education has very high returns, especially for girls (lower fertility, better child health).', 'Skilled workers attract FDI.'],
    ['Educated workers emigrate (brain drain) if there are no jobs at home; education without matching jobs breeds frustration.'],
  ),
  det(
    'Absence of property rights',
    'Without secure title, land and capital cannot be used as collateral or sold, and investment is risky.',
    ['De Soto: the poor hold "dead capital" they cannot borrow against.', 'Insecure rights deter long-term investment - why plant trees on land that may be seized?'],
    ['Formal titling has had mixed results where courts remain weak; the deeper issue is the rule of law.'],
  ),
  h('Non-economic factors'),
  table(
    ['Factor', 'How it constrains development'],
    [
      ['Corruption', 'Diverts public money; raises the cost of doing business; deters investment; undermines trust'],
      ['Poor governance and civil war', 'Destroys capital and institutions; drives out skilled people; no investment under uncertainty'],
      ['Disease', 'HIV, malaria and TB reduce the workforce and productivity, and consume health spending'],
      ['Geography', 'Landlocked countries face high transport costs; tropical climates raise disease burdens; resource-poor or disaster-prone locations'],
    ],
  ),
  tip('The best answers link factors into a chain: primary product dependency → volatile export earnings → low savings → low investment → low productivity → low income → low savings. Naming the trap and where a policy could break it is the evaluation.'),
)

/* ====================================== MACRO POLICY IN A GLOBAL CONTEXT */

const globalPolicy = chapter(
  p(
    'The final section of the specification asks how governments use fiscal, monetary, supply-side, exchange rate and direct controls to hit their objectives in a world where economies are linked, shocks cross borders, and multinational firms and financial markets react to policy. It also asks, explicitly, what makes policy HARD.',
  ),
  h('Policies to reduce a fiscal deficit and the national debt'),
  table(
    ['Approach', 'How it works', 'Cost'],
    [
      ['Cut government spending', 'Lower current or capital spending', 'Reduces AD and growth, which lowers tax revenue and partly offsets the saving; cutting capital spending harms long-run growth'],
      ['Raise taxes', 'Higher rates or new taxes', 'Reduces disposable income and AD; may reduce incentives (Laffer); politically costly'],
      ['Grow the economy', 'Faster growth raises revenue and shrinks the debt-to-GDP ratio', 'Slow; not fully in the government\'s control'],
      ['Tolerate inflation', 'Inflation erodes the real value of debt', 'Damages savers and credibility; raises borrowing costs'],
      ['Default or restructure', 'Refuse or renegotiate payments', 'Loss of access to markets for years; used only in crisis'],
    ],
  ),
  det(
    'Austerity and its effects',
    'Cutting the deficit quickly reduces AD; whether it reduces the debt ratio depends on the multiplier.',
    ['If the fiscal multiplier is large (spare capacity, interest rates at zero), spending cuts shrink GDP so much that the debt-to-GDP ratio can RISE.', 'If the multiplier is small (full capacity, monetary policy offsets), consolidation works with little growth cost.'],
    ['Timing is everything: consolidate in a boom, not a recession.', 'Credibility matters: a believable long-run plan can lower interest rates immediately, reducing the debt burden without any cut at all.'],
  ),
  h('Policies to reduce poverty and inequality'),
  ul([
    'Progressive taxation and transfers (benefits, tax credits) redistribute directly; evaluate on incentives and cost.',
    'Minimum wages raise the incomes of the low-paid, with the usual employment trade-off.',
    'Education and training raise earning power over time - the only durable route.',
    'Universal public services (health, education) reduce inequality of outcomes without cash transfers.',
    'In developing economies: land reform, microfinance, conditional cash transfers (Brazil\'s Bolsa Familia).',
  ]),
  h('Changes in interest rates and the money supply'),
  det(
    'Monetary policy in an open economy',
    'Interest rates work through the exchange rate as well as through domestic borrowing.',
    ['A rate rise attracts hot money, appreciating the currency, which lowers import prices and export competitiveness - a second channel to lower inflation and one that hurts exporters.', 'Quantitative easing lowers long-term rates and the currency; its reversal (tightening) does the opposite.'],
    ['Capital mobility means a small open economy cannot set rates far from world rates without large exchange rate swings.', 'At the zero lower bound, rate cuts are exhausted; QE\'s effects on the real economy are uncertain and it inflates asset prices.'],
  ),
  diagram('ad-shift'),
  h('Measures to increase international competitiveness'),
  p('Supply-side policy (skills, infrastructure, R&D, competition) raises productivity; a depreciation changes relative prices quickly but temporarily. See the International Competitiveness chapter for the full analysis; the policy point here is that the quick fix and the durable fix are different things and the exam wants you to say which is which.'),
  h('External shocks'),
  table(
    ['Shock', 'Transmission', 'Policy response and its limits'],
    [
      ['Commodity price spike (oil, food)', 'Cost-push inflation and lower real incomes at once - stagflation', 'Rates up to fight inflation deepens the slowdown; rates down to support growth entrenches inflation. No good option; the choice depends on which is worse'],
      ['Global financial crisis', 'Banks stop lending; asset prices fall; confidence collapses everywhere', 'Bank bailouts, rate cuts, QE, fiscal stimulus - large, fast, coordinated; leaves high debt'],
      ['Recession in a major trading partner', 'Export demand falls; AD falls', 'Depreciation and domestic stimulus can offset partly; cannot restore foreign demand'],
      ['Pandemic', 'Supply AND demand collapse; supply chains break', 'Furlough schemes, loans, rate cuts; then supply-chain-driven inflation as demand recovers faster than supply'],
      ['Sudden capital outflow', 'Currency collapses, import prices soar, debt in foreign currency balloons', 'Rate rises to defend the currency (contractionary), capital controls, IMF support with conditions'],
    ],
  ),
  h('Measures to control transnational corporations'),
  ul([
    'Corporation tax rules against transfer pricing: requiring arm\'s-length pricing between subsidiaries; the OECD global minimum corporate tax of 15%.',
    'Regulation of labour and environmental standards, with penalties for breaches.',
    'Competition policy against abuse of dominance (fines on large technology firms).',
    'Limits on the outflow of profits, local-content requirements, and requirements to form joint ventures with domestic firms (China).',
    'Limits: TNCs can relocate; countries compete for them; enforcement across borders is weak without international cooperation.',
  ]),
  h('Problems facing policymakers'),
  det(
    'Inaccurate information',
    'Decisions are made on data that is provisional, lagging and later revised.',
    ['GDP figures for a quarter are published weeks after it ends and revised for years. Output gap estimates are especially unreliable.', 'Policy aimed at last quarter\'s economy can arrive when conditions have reversed.'],
    ['Forward-looking indicators (surveys, real-time data) reduce but do not remove the problem.'],
  ),
  det(
    'Risks and uncertainties',
    'The effect of a policy depends on things that cannot be known in advance.',
    ['The size of the multiplier, the response of confidence, the reaction of financial markets and of other governments are all uncertain.', 'Time lags: monetary policy takes up to two years to have its full effect; by then the shock may have passed.'],
    ['Rules-based frameworks (an inflation target, fiscal rules) provide predictability and anchor expectations even when the exact effects are uncertain.'],
  ),
  det(
    'Inability to control external shocks',
    'A national government cannot prevent a global recession, an oil shock or a pandemic; it can only respond.',
    ['Small open economies are most exposed: trade and capital flows are large relative to GDP.', 'International coordination (G20 in 2009) is possible but slow and rare.'],
    ['Resilience can be built in advance: fiscal space in good times, reserves, diversified trade, strong banks.'],
  ),
  tip(
    'The 25-marker on "the problems facing policymakers" wants all three named problems, each with a concrete example (a data revision, a lag, a specific shock), and a judgement about which is most serious - usually the shocks, because information and uncertainty can be managed with frameworks but a shock cannot be prevented.',
  ),
)

export const ECON_GAP_NOTES = {
  'Output Gaps and the Trade Cycle': outputGaps,
  'Conflicts Between Objectives and the Phillips Curve': conflicts,
  Efficiency: efficiency,
  Monopsony: monopsony,
  Globalisation: globalisation,
  'Terms of Trade': termsOfTrade,
  'Protectionism and Trade Restrictions': protectionism,
  'International Competitiveness': competitiveness,
  'Factors Influencing Growth and Development': developmentFactors,
  'Macroeconomic Policies in a Global Context': globalPolicy,
}
