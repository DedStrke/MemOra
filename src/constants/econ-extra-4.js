/*
  Flashcards, MCQs and exam questions for the ten Economics chapters added
  from the specification gap audit (see econ-notes-gaps.js). Topic strings
  must match ECON_GROUPS in econ-full.js exactly.

  Every exam mark scheme ends with a "Final answer:" line, which the mock
  exam and self-mark screens use as the model answer.
*/

const c = (topic, front, back) => ({ front, back, topic })
const m = (topic, question, options, answer, explanation) => ({ question, options, answer, explanation, topic })
const q = (topic, question, marks, markScheme) => ({ question, marks, markScheme, topic })

const OG = 'Output Gaps and the Trade Cycle'
const CO = 'Conflicts Between Objectives and the Phillips Curve'
const EF = 'Efficiency'
const MS = 'Monopsony'
const GL = 'Globalisation'
const TT = 'Terms of Trade'
const PR = 'Protectionism and Trade Restrictions'
const IC = 'International Competitiveness'
const FD = 'Factors Influencing Growth and Development'
const GP = 'Macroeconomic Policies in a Global Context'

export const ECON_EXTRA_FLASHCARDS_4 = [
  // Output gaps
  c(OG, 'Define the output gap.', 'The difference between actual output and potential output, usually as a percentage of potential output.'),
  c(OG, 'What does a negative output gap imply for unemployment and inflation?', 'Spare capacity: unemployment above its natural rate and downward pressure on inflation.'),
  c(OG, 'What does a positive output gap imply?', 'Actual output above sustainable capacity: unemployment below its natural rate and rising inflationary pressure.'),
  c(OG, 'Actual growth vs potential growth?', 'Actual growth is the measured change in real GDP; potential growth is the growth of productive capacity (LRAS / PPF shifting out).'),
  c(OG, 'Define trend growth.', 'The long-run average rate of growth around which actual growth fluctuates - roughly 2 to 2.5% a year for the UK historically.'),
  c(OG, 'Name the four phases of the trade cycle.', 'Boom, downturn (slowdown), recession, recovery.'),
  c(OG, 'Technical definition of a recession?', 'Two consecutive quarters of negative real GDP growth.'),
  c(OG, 'What is the accelerator effect?', 'Investment depends on the CHANGE in output, so a slowdown in growth cuts investment sharply and amplifies the cycle.'),
  c(OG, 'Give three reasons the output gap is hard to measure.', 'Potential output is unobservable and estimated; GDP data is revised; the natural rate of unemployment is itself an estimate.'),
  c(OG, 'Where is potential output on a Keynesian AS curve?', 'Where the AS curve becomes vertical - full capacity.'),
  c(OG, 'Typical features of a boom?', 'Low unemployment, rising inflation, rising imports, high confidence and investment, rising asset prices.'),
  c(OG, 'Typical features of a recession?', 'Rising unemployment, falling inflation or deflation, falling imports, business failures, rising government borrowing.'),

  // Conflicts
  c(CO, 'What does the short-run Phillips curve show?', 'An inverse relationship between inflation and unemployment: lower unemployment comes with higher inflation.'),
  c(CO, 'Why is the long-run Phillips curve vertical?', 'Once workers build expected inflation into wage demands, real wages return to their previous level and unemployment returns to its natural rate whatever the inflation rate.'),
  c(CO, 'What is the NAIRU?', 'The non-accelerating inflation rate of unemployment: the natural rate, below which inflation accelerates.'),
  c(CO, 'How can the long-run Phillips curve shift left?', 'Supply-side policy that lowers the natural rate: better skills, mobility, incentives, less structural unemployment.'),
  c(CO, 'Why might growth conflict with the current account?', 'Higher incomes raise imports (high marginal propensity to import), worsening the trade balance.'),
  c(CO, 'When does growth NOT conflict with low inflation?', 'When growth comes from the supply side: LRAS shifting right raises output and lowers the price level.'),
  c(CO, 'Why might reducing the budget deficit conflict with growth?', 'Spending cuts or tax rises reduce AD; in a recession the multiplier makes the growth cost large.'),
  c(CO, 'Why might low interest rates conflict with financial stability?', 'Cheap credit inflates asset bubbles and encourages excessive borrowing.'),
  c(CO, 'Why is supply-side policy the usual resolution of objective conflicts?', 'It shifts the trade-off rather than moving along it: more capacity means output and employment can rise without inflation.'),
  c(CO, 'Two limits of supply-side policy as a resolution?', 'Slow (education and infrastructure take years) and not free (tax cuts cost revenue; deregulation may worsen inequality or the environment).'),

  // Efficiency
  c(EF, 'Define allocative efficiency.', 'Resources allocated to what consumers value most: price = marginal cost.'),
  c(EF, 'Define productive efficiency.', 'Output at the lowest possible average cost: the minimum of AC, where MC = AC.'),
  c(EF, 'Define dynamic efficiency.', 'Efficiency over time: investment in innovation and new capital that lowers costs and improves products, funded by supernormal profit.'),
  c(EF, 'Define X-inefficiency.', 'A firm operating above its lowest possible average cost because it lacks the competitive pressure to control costs.'),
  c(EF, 'Which market structure achieves both allocative and productive efficiency in the long run?', 'Perfect competition: P = MC and output at minimum AC.'),
  c(EF, 'Why is monopoly allocatively inefficient?', 'It produces where MR = MC, so P > MC; units worth more than they cost are not made - a deadweight loss.'),
  c(EF, 'Why might monopoly be dynamically efficient?', 'Supernormal profit funds R&D that competitive firms could not afford; patents exist to allow this.'),
  c(EF, 'Why is perfect competition weak on dynamic efficiency?', 'Only normal profit in the long run, so nothing to invest in innovation.'),
  c(EF, 'How does contestability affect efficiency?', 'The threat of entry forces incumbents to price near cost and control X-inefficiency even without actual competitors.'),
  c(EF, 'Where is productive efficiency on a cost diagram?', 'The bottom of the AC curve, where MC cuts AC.'),

  // Monopsony
  c(MS, 'Define monopsony.', 'A market with a single (or dominant) buyer facing many sellers, giving the buyer power over the price it pays.'),
  c(MS, 'Why is the marginal cost of buying above the supply curve for a monopsonist?', 'Buying one more unit means paying a higher price on EVERY unit, so the marginal cost exceeds the price of the last unit.'),
  c(MS, 'Where does a monopsonist set quantity and price?', 'Quantity where MC of buying = marginal benefit (MRP); price read off the supply curve at that quantity.'),
  c(MS, 'Compared with a competitive market, a monopsonist buys...', 'Less, at a lower price - suppliers or workers are paid below the value of their contribution.'),
  c(MS, 'How can a minimum wage raise employment under monopsony?', 'Set between the monopsony wage and the competitive wage, it flattens the MC of labour so the firm hires more at the higher wage.'),
  c(MS, 'What is bilateral monopoly?', 'A single buyer facing a single seller (e.g. a monopsonist employer and a trade union); the price is bargained.'),
  c(MS, 'Give a UK example of product-market monopsony power.', 'Supermarkets buying from farmers and suppliers - hence the Groceries Code Adjudicator.'),
  c(MS, 'Give a UK example of labour-market monopsony.', 'The NHS as near-sole employer of nurses.'),
  c(MS, 'Who gains from monopsony?', 'The monopsonist (lower input costs, higher profit); consumers only if savings are passed on.'),
  c(MS, 'Why is monopsony allocatively inefficient?', 'Too little is bought at too low a price; the deadweight loss mirrors monopoly.'),

  // Globalisation
  c(GL, 'Define globalisation.', 'The increasing integration and interdependence of economies through trade, capital flows, migration and the spread of technology.'),
  c(GL, 'Give four characteristics of globalisation.', 'Trade growing faster than GDP; growth of TNCs; global supply chains; free movement of capital and labour; convergence of tastes.'),
  c(GL, 'Give four causes of globalisation.', 'Containerisation and lower transport costs; cheaper communication; trade liberalisation (WTO); deregulation of finance; growth of TNCs; political opening of China and the Soviet bloc.'),
  c(GL, 'How does globalisation benefit consumers?', 'Lower prices, more choice and better quality through import competition and access to global brands.'),
  c(GL, 'How can globalisation harm workers in developed economies?', 'Low-skill manufacturing jobs move to lower-wage economies; structural unemployment concentrated by region and skill.'),
  c(GL, 'What is a race to the bottom?', 'Governments cutting corporation tax and regulation to attract FDI, eroding revenue and standards.'),
  c(GL, 'What is transfer pricing?', 'TNCs pricing transactions between their own subsidiaries to shift profit to low-tax jurisdictions.'),
  c(GL, 'How can globalisation help developing economies?', 'Export-led growth, FDI, technology transfer, jobs and access to capital (China, Vietnam).'),
  c(GL, 'How can globalisation harm developing economies?', 'Dependence on TNCs and volatile capital flows; exploitation of labour and environment; loss of infant industries.'),
  c(GL, 'What is a pollution haven?', 'A country with weak environmental regulation to which polluting production relocates.'),
  c(GL, 'What is the key evaluation point in a globalisation essay?', 'The gains are large in aggregate but the losses fall on identifiable, uncompensated groups: it is about distribution.'),

  // Terms of trade
  c(TT, 'Define the terms of trade.', 'The ratio of export prices to import prices: (index of export prices ÷ index of import prices) × 100.'),
  c(TT, 'Export index 110, import index 125: terms of trade?', '110 / 125 × 100 = 88: a deterioration.'),
  c(TT, 'What does an improvement in the terms of trade mean?', 'Each unit of exports buys more imports.'),
  c(TT, 'Effect of an appreciation on the terms of trade?', 'Improvement: export prices rise in foreign currency and import prices fall in domestic currency.'),
  c(TT, 'Effect of rising domestic inflation on the terms of trade?', 'Improvement - but a loss of competitiveness in disguise.'),
  c(TT, 'Effect of a productivity rise on the terms of trade?', 'Deterioration, as lower costs are passed on in lower export prices.'),
  c(TT, 'When does an improvement in the terms of trade worsen the current account?', 'When demand for exports is price elastic, so higher prices cut export revenue.'),
  c(TT, 'State the Prebisch-Singer hypothesis.', 'The terms of trade of primary-product exporters deteriorate over time because demand for primary goods is income inelastic while demand for manufactures is income elastic.'),
  c(TT, 'Give one piece of evidence against Prebisch-Singer.', 'The commodity super-cycle of 2000-2014 improved commodity exporters\' terms of trade sharply.'),
  c(TT, 'What is Dutch disease?', 'A commodity boom raises the exchange rate, making other exports uncompetitive and preventing diversification.'),

  // Protectionism
  c(PR, 'Define protectionism.', 'Policies that restrict international trade to shield domestic producers: tariffs, quotas, subsidies and non-tariff barriers.'),
  c(PR, 'Define a tariff.', 'A tax on imports, raising their price.'),
  c(PR, 'Define a quota.', 'A physical limit on the quantity of a good that may be imported.'),
  c(PR, 'Tariff vs quota: who gets the revenue?', 'A tariff raises revenue for the government; under a quota the higher price benefits whoever holds the import licences.'),
  c(PR, 'Give three non-tariff barriers.', 'Product standards and regulations, licensing and bureaucracy, embargoes.'),
  c(PR, 'Effects of a tariff on the domestic market?', 'Price rises to world price plus tariff; domestic output rises; imports fall; government gains revenue; consumer surplus falls.'),
  c(PR, 'What are the two deadweight loss triangles from a tariff?', 'Production inefficiency (resources drawn into a high-cost industry) and consumption inefficiency (consumers priced out who valued the good above the world price).'),
  c(PR, 'State the infant industry argument and its weakness.', 'New industries need shelter until they reach scale; but governments cannot pick winners and protected industries rarely mature.'),
  c(PR, 'What is dumping?', 'Foreign firms selling below cost to drive out competition.'),
  c(PR, 'Give four arguments against protectionism.', 'Higher prices for consumers; retaliation; shelters inefficiency; dearer inputs for domestic producers who use imports.'),
  c(PR, 'When is the deadweight loss of a tariff small?', 'When demand and supply are price inelastic, so quantities change little.'),

  // Competitiveness
  c(IC, 'Define international competitiveness.', 'The ability of a country\'s firms to sell in international markets, competing on price and on quality.'),
  c(IC, 'Two measures of international competitiveness?', 'Relative unit labour costs and relative export prices (both in a common currency); also WEF rankings and world export share.'),
  c(IC, 'Formula for unit labour cost?', 'Wage cost per worker ÷ output per worker (wages relative to productivity).'),
  c(IC, 'How does a depreciation raise competitiveness?', 'Exports become cheaper in foreign currency and imports dearer at home.'),
  c(IC, 'Why is the gain from a depreciation often temporary?', 'Imported inputs cost more and the depreciation feeds into inflation, eroding the price advantage.'),
  c(IC, 'What are non-price factors of competitiveness?', 'Quality, design, reliability, delivery, after-sales service, innovation, reputation.'),
  c(IC, 'How does inflation above trading partners affect competitiveness?', 'It raises relative export prices; under floating rates the currency tends to depreciate to offset it.'),
  c(IC, 'Consequences of losing competitiveness?', 'Falling export share, current account deficit, manufacturing decline, structural unemployment, currency depreciation.'),
  c(IC, 'Quick fix vs durable fix for competitiveness?', 'A depreciation changes relative prices quickly but temporarily; supply-side policy raises productivity slowly but durably.'),
  c(IC, 'Why has UK competitiveness been weak since 2008?', 'Very slow productivity growth; the exchange rate can only mask it.'),

  // Growth and development factors
  c(FD, 'Why is primary product dependency a problem?', 'Volatile prices (inelastic demand and supply), deteriorating terms of trade (Prebisch-Singer) and Dutch disease.'),
  c(FD, 'State the Harrod-Domar model.', 'Growth rate = savings ratio ÷ capital-output ratio: low savings mean low investment and low growth.'),
  c(FD, 'What is the savings gap?', 'The shortfall between the savings a country generates and the investment it needs to grow.'),
  c(FD, 'What is the foreign currency gap?', 'Export earnings too small to pay for the imported capital goods development requires.'),
  c(FD, 'Define capital flight.', 'Wealth moved out of a country because holders fear instability, taxation or confiscation.'),
  c(FD, 'What is the demographic dividend?', 'The growth boost when birth rates fall and the working-age share of the population peaks - if there are jobs.'),
  c(FD, 'How does high external debt hold back development?', 'Debt service diverts export earnings and tax revenue from health, education and infrastructure.'),
  c(FD, 'Why does a lack of property rights hold back growth?', 'Assets cannot be used as collateral or sold, and investment is risky if land may be seized (de Soto\'s dead capital).'),
  c(FD, 'Give four non-economic factors constraining development.', 'Corruption, poor governance and civil war, disease, geography (landlocked, tropical).'),
  c(FD, 'How can primary product dependency be turned into a strength?', 'Sovereign wealth funds, strong institutions and diversification policy: Norway, Chile, Australia.'),
  c(FD, 'Why is education of girls especially high-return?', 'Lower fertility, better child health, higher household income.'),

  // Global policy
  c(GP, 'Give three ways to reduce a fiscal deficit.', 'Cut spending, raise taxes, or grow the economy so revenue rises and the debt ratio falls.'),
  c(GP, 'When can austerity RAISE the debt-to-GDP ratio?', 'When the fiscal multiplier is large (spare capacity, rates at zero), so cuts shrink GDP by more than they cut borrowing.'),
  c(GP, 'Give three policies to reduce inequality.', 'Progressive taxation and transfers, minimum wages, education and training, universal public services.'),
  c(GP, 'How does a rate rise work through the exchange rate?', 'Attracts hot money, appreciating the currency, which lowers import prices and export competitiveness.'),
  c(GP, 'Why is monetary policy constrained in a small open economy?', 'Capital mobility means rates cannot diverge far from world rates without large exchange rate swings.'),
  c(GP, 'Why is an oil price spike so hard for policymakers?', 'It causes inflation and slower growth at once; tightening deepens the slowdown, loosening entrenches inflation.'),
  c(GP, 'Give three measures to control TNCs.', 'Transfer pricing rules and the OECD 15% minimum tax; labour and environmental regulation; competition policy against abuse of dominance.'),
  c(GP, 'Name the three problems facing policymakers in the specification.', 'Inaccurate information, risks and uncertainties, inability to control external shocks.'),
  c(GP, 'Why is inaccurate information a policy problem?', 'GDP and output gap estimates are provisional and revised, so policy may target an economy that no longer exists.'),
  c(GP, 'How do rules-based frameworks help with uncertainty?', 'An inflation target or fiscal rule anchors expectations and provides predictability even when exact effects are unknown.'),
  c(GP, 'How can a country build resilience to external shocks?', 'Fiscal space in good times, foreign exchange reserves, diversified trade, well-capitalised banks.'),
]

export const ECON_EXTRA_MCQ_4 = [
  m(OG, 'Potential output is £2,000bn and actual output is £1,950bn. The output gap is:', ['+2.5%', '-2.5%', '+5%', '-5%'], 1, '(1,950 - 2,000) / 2,000 × 100 = -2.5%: a negative gap, spare capacity.'),
  m(OG, 'A positive output gap is most likely to be associated with:', ['Falling inflation', 'Unemployment above its natural rate', 'Rising inflationary pressure', 'Falling imports'], 2, 'Output above sustainable capacity pulls prices up and sucks in imports.'),
  m(OG, 'A recession is technically defined as:', ['One quarter of negative growth', 'Two consecutive quarters of negative growth', 'A year of growth below trend', 'Unemployment above 10%'], 1, 'Two consecutive quarters of falling real GDP.'),
  m(OG, 'The accelerator effect refers to:', ['Investment rising when interest rates fall', 'Investment depending on the change in output', 'Consumption rising faster than income', 'Government spending multiplying through the economy'], 1, 'Investment responds to the rate of change of output, amplifying the cycle.'),
  m(OG, 'On a Keynesian AS curve, potential output is where:', ['AS is horizontal', 'AS becomes vertical', 'AD cuts AS', 'The price level is lowest'], 1, 'The vertical section is full capacity.'),
  m(OG, 'Which of these is NOT a reason the output gap is hard to measure?', ['Potential output is unobservable', 'GDP data is revised', 'The natural rate of unemployment is estimated', 'Inflation is measured monthly'], 3, 'Inflation frequency is irrelevant; the other three are the standard measurement problems.'),

  m(CO, 'The short-run Phillips curve shows a trade-off between:', ['Growth and the current account', 'Inflation and unemployment', 'Inflation and growth', 'The budget deficit and growth'], 1, 'Lower unemployment with higher inflation, and vice versa.'),
  m(CO, 'The long-run Phillips curve is vertical because:', ['Prices are sticky', 'Expected inflation adjusts so unemployment returns to its natural rate', 'Unemployment cannot fall', 'Governments target inflation'], 1, 'Once expectations catch up, real wages and employment return to their natural levels.'),
  m(CO, 'A leftward shift of the long-run Phillips curve is caused by:', ['Expansionary fiscal policy', 'Higher expected inflation', 'Supply-side policy lowering the natural rate', 'A rise in interest rates'], 2, 'Only a lower NAIRU shifts the vertical curve.'),
  m(CO, 'Growth is LEAST likely to conflict with low inflation when it is caused by:', ['Rising consumer confidence', 'A cut in income tax', 'An outward shift of LRAS', 'A fall in interest rates'], 2, 'Supply-side growth raises output while lowering the price level.'),
  m(CO, 'Which pair of objectives is most directly linked by the marginal propensity to import?', ['Inflation and unemployment', 'Growth and the current account', 'Growth and the environment', 'Deficit and inequality'], 1, 'Higher income raises imports, worsening the current account.'),
  m(CO, 'Since 2010 many economies had low unemployment AND low inflation. This suggests the short-run Phillips curve has:', ['Become steeper', 'Flattened', 'Shifted right', 'Become vertical'], 1, 'A flatter curve means unemployment changes have little effect on inflation.'),

  m(EF, 'Allocative efficiency occurs where:', ['MC = AC', 'P = MC', 'MR = MC', 'AR = AC'], 1, 'The value consumers place on the last unit equals its marginal cost.'),
  m(EF, 'Productive efficiency occurs at:', ['The output where MR = MC', 'The minimum of the AC curve', 'Any output on the demand curve', 'The output where P = AC'], 1, 'Lowest possible average cost, where MC cuts AC.'),
  m(EF, 'X-inefficiency is best described as:', ['Producing the wrong goods', 'Operating above the lowest possible average cost through slack', 'Failing to innovate', 'Producing where P > MC'], 1, 'Costs above the minimum due to lack of competitive pressure.'),
  m(EF, 'Which structure is most likely to be dynamically efficient?', ['Perfect competition', 'Monopolistic competition', 'A monopoly with patents', 'A contestable market with only normal profit'], 2, 'Supernormal profit and a long horizon fund innovation.'),
  m(EF, 'A monopolist producing where MR = MC is:', ['Allocatively efficient', 'Allocatively inefficient because P > MC', 'Productively efficient', 'Both allocatively and productively efficient'], 1, 'Output is restricted below the P = MC level, creating deadweight loss.'),
  m(EF, 'In long-run perfect competition a firm is:', ['Allocatively but not productively efficient', 'Productively but not allocatively efficient', 'Both allocatively and productively efficient', 'Neither'], 2, 'P = MC and output at minimum AC.'),

  m(MS, 'A monopsony is a market with:', ['One seller', 'One buyer', 'Two sellers', 'Many buyers and sellers'], 1, 'A single or dominant buyer.'),
  m(MS, 'For a monopsonist, the marginal cost of labour lies:', ['Below the supply curve', 'On the supply curve', 'Above the supply curve', 'On the demand curve'], 2, 'Hiring one more worker raises the wage for all workers, so MC exceeds the wage.'),
  m(MS, 'Compared with a competitive labour market, a monopsonist employs:', ['More workers at a higher wage', 'Fewer workers at a lower wage', 'More workers at a lower wage', 'Fewer workers at a higher wage'], 1, 'Lower quantity, lower price.'),
  m(MS, 'A minimum wage set between the monopsony wage and the competitive wage will:', ['Reduce employment', 'Raise both the wage and employment', 'Leave employment unchanged', 'Cause the firm to exit'], 1, 'It removes the incentive to restrict hiring, so employment rises towards the competitive level.'),
  m(MS, 'The Groceries Code Adjudicator exists to address:', ['Monopoly pricing by farmers', 'Supermarket monopsony power over suppliers', 'Import tariffs on food', 'Consumer information gaps'], 1, 'Supermarkets as dominant buyers from suppliers.'),
  m(MS, 'A monopsonist facing a trade union is an example of:', ['Perfect competition', 'Bilateral monopoly', 'Oligopoly', 'Contestable market'], 1, 'Single buyer, single seller: the wage is bargained.'),

  m(GL, 'Which is NOT a cause of globalisation?', ['Containerisation', 'Trade liberalisation', 'Rising tariffs', 'Cheaper communication'], 2, 'Rising tariffs reduce integration.'),
  m(GL, 'Transfer pricing is used by TNCs to:', ['Lower transport costs', 'Shift profits to low-tax jurisdictions', 'Raise wages abroad', 'Avoid tariffs'], 1, 'Pricing internal transactions to book profit where tax is lowest.'),
  m(GL, 'A race to the bottom refers to:', ['Falling commodity prices', 'Countries cutting taxes and regulation to attract FDI', 'Declining terms of trade', 'Competitive devaluations'], 1, 'Competition for investment erodes revenue and standards.'),
  m(GL, 'Which group in a developed economy is most likely to lose from globalisation?', ['Skilled workers', 'Consumers', 'Low-skilled manufacturing workers', 'Exporting firms'], 2, 'Their jobs compete directly with lower-wage economies.'),
  m(GL, 'The environmental Kuznets curve suggests that pollution:', ['Rises continuously with income', 'Falls continuously with income', 'Rises then falls as income grows', 'Is unrelated to income'], 2, 'Richer countries can afford cleaner technology and regulation.'),
  m(GL, 'Export-led growth in China and Vietnam is evidence that globalisation can:', ['Only harm developing economies', 'Benefit developing economies', 'Reduce world trade', 'Raise tariffs'], 1, 'Access to world markets drove rapid growth.'),

  m(TT, 'The terms of trade are calculated as:', ['Import prices ÷ export prices × 100', 'Export prices ÷ import prices × 100', 'Exports ÷ imports', 'Export volume ÷ import volume'], 1, 'Index of export prices over index of import prices, times 100.'),
  m(TT, 'Export price index 120, import price index 100. The terms of trade are:', ['83', '100', '120', '20'], 2, '120 / 100 × 100 = 120: an improvement.'),
  m(TT, 'An appreciation of the currency causes the terms of trade to:', ['Deteriorate', 'Improve', 'Stay the same', 'Become negative'], 1, 'Export prices rise in foreign currency; import prices fall in domestic currency.'),
  m(TT, 'An improvement in the terms of trade worsens the current account when:', ['Demand for exports is price inelastic', 'Demand for exports is price elastic', 'Imports are income elastic', 'The exchange rate is fixed'], 1, 'Elastic demand means higher prices cut export revenue.'),
  m(TT, 'The Prebisch-Singer hypothesis predicts that primary-product exporters face:', ['Improving terms of trade', 'Deteriorating terms of trade', 'Stable terms of trade', 'Rising export volumes'], 1, 'Income-inelastic demand for primary goods versus income-elastic demand for manufactures.'),
  m(TT, 'A rise in productivity in the export sector tends to:', ['Improve the terms of trade', 'Deteriorate the terms of trade', 'Have no effect', 'Raise import prices'], 1, 'Lower costs are passed on as lower export prices.'),

  m(PR, 'A tariff is:', ['A limit on import quantity', 'A tax on imports', 'A subsidy to exporters', 'A ban on imports'], 1, 'A tax that raises the import price.'),
  m(PR, 'Under a quota, the higher domestic price benefits:', ['The government', 'Holders of import licences and domestic producers', 'Consumers', 'Foreign governments'], 1, 'No tax revenue; the scarcity rent goes to licence holders.'),
  m(PR, 'After a tariff, on the standard diagram, imports:', ['Rise', 'Fall', 'Stay the same', 'Become zero'], 1, 'Domestic supply expands and demand contracts, shrinking the import gap.'),
  m(PR, 'The deadweight loss of a tariff consists of:', ['Government revenue', 'Producer surplus', 'A production inefficiency and a consumption inefficiency', 'Consumer surplus transferred to producers'], 2, 'The two triangles are welfare lost to nobody.'),
  m(PR, 'The infant industry argument claims that:', ['Old industries deserve protection', 'New industries need temporary shelter to reach scale', 'Imports should be banned', 'Tariffs raise revenue'], 1, 'Protection until the industry can compete; the weakness is that it rarely ends.'),
  m(PR, 'The Smoot-Hawley tariff of 1930 is cited as evidence of:', ['Successful infant industry protection', 'Retaliation deepening a depression', 'The benefits of quotas', 'Dumping'], 1, 'Trading partners retaliated and world trade collapsed.'),

  m(IC, 'Relative unit labour costs measure:', ['Wages alone', 'Labour cost per unit of output compared with partners in a common currency', 'Export volumes', 'The exchange rate'], 1, 'Wages relative to productivity, compared internationally.'),
  m(IC, 'A depreciation improves price competitiveness because:', ['Exports become dearer abroad', 'Exports become cheaper abroad and imports dearer at home', 'Inflation falls', 'Productivity rises'], 1, 'Relative prices shift in favour of domestic producers.'),
  m(IC, 'Which is a NON-price factor of competitiveness?', ['The exchange rate', 'Unit labour costs', 'Product reliability', 'Inflation'], 2, 'Quality, design, reliability and reputation.'),
  m(IC, 'Inflation of 5% at home against 2% abroad, with a fixed exchange rate, means competitiveness:', ['Improves 3% a year', 'Falls 3% a year', 'Is unchanged', 'Depends on productivity only'], 1, 'Relative export prices rise 3% a year.'),
  m(IC, 'The durable route to higher competitiveness is:', ['Repeated devaluation', 'Higher productivity through supply-side policy', 'Import tariffs', 'Lower interest rates'], 1, 'A depreciation is quick but temporary; productivity is slow but lasting.'),
  m(IC, 'Losing competitiveness is most likely to cause:', ['A current account surplus', 'A persistent current account deficit', 'An appreciation', 'Lower import prices'], 1, 'Falling export share and rising import penetration.'),

  m(FD, 'The Harrod-Domar model states that growth depends on:', ['The exchange rate', 'The savings ratio and the capital-output ratio', 'Population growth', 'Tariff levels'], 1, 'Growth = s / k.'),
  m(FD, 'Dutch disease describes:', ['A commodity boom raising the exchange rate and harming other exports', 'A fall in commodity prices', 'A banking crisis', 'Rapid population growth'], 0, 'The currency rises and manufacturing becomes uncompetitive.'),
  m(FD, 'Capital flight is:', ['FDI inflows', 'Wealth leaving the country due to instability or fear of confiscation', 'Government borrowing', 'A fall in savings'], 1, 'Money that could fund domestic investment goes abroad.'),
  m(FD, 'De Soto\'s concept of "dead capital" refers to:', ['Depreciated machinery', 'Assets that cannot be used as collateral for lack of formal title', 'Foreign aid', 'Idle savings'], 1, 'Without property rights, assets cannot be borrowed against.'),
  m(FD, 'The demographic dividend occurs when:', ['Population growth is fastest', 'The working-age share of the population peaks', 'The dependency ratio rises', 'Birth rates rise'], 1, 'Fewer dependants per worker, if jobs exist.'),
  m(FD, 'Which is a NON-economic factor constraining development?', ['Savings gap', 'Primary product dependency', 'Civil war', 'Debt'], 2, 'Conflict destroys capital and institutions.'),

  m(GP, 'Austerity can raise the debt-to-GDP ratio when:', ['The multiplier is small', 'The multiplier is large', 'The economy is at full capacity', 'Interest rates are high'], 1, 'Large multipliers mean cuts shrink GDP by more than they cut borrowing.'),
  m(GP, 'A rise in interest rates affects competitiveness through:', ['Lower productivity', 'An appreciation of the currency', 'Higher tariffs', 'Lower wages'], 1, 'Hot money inflows appreciate the currency.'),
  m(GP, 'The OECD global minimum corporate tax is designed to limit:', ['Tariffs', 'Transfer pricing and profit shifting by TNCs', 'Capital flight', 'Dumping'], 1, 'A 15% floor reduces the gain from booking profit in tax havens.'),
  m(GP, 'An oil price spike causes:', ['Demand-pull inflation and growth', 'Cost-push inflation and slower growth', 'Deflation', 'A current account surplus for importers'], 1, 'Stagflation: the hardest case for policy.'),
  m(GP, 'Which is NOT one of the three problems facing policymakers named in the specification?', ['Inaccurate information', 'Risks and uncertainties', 'Inability to control external shocks', 'Lack of political will'], 3, 'The specification lists information, uncertainty and external shocks.'),
  m(GP, 'A credible long-run fiscal plan can reduce the debt burden by:', ['Raising tax rates', 'Lowering the interest rate investors demand', 'Increasing spending', 'Depreciating the currency'], 1, 'Credibility lowers borrowing costs immediately.'),
]

export const ECON_EXTRA_EXAM_4 = [
  q(OG, 'Explain the difference between a positive and a negative output gap.', 4, [
    'Output gap = actual output minus potential output, as a percentage of potential',
    'Negative: actual below potential, spare capacity, unemployment above natural rate, low inflationary pressure',
    'Positive: actual above sustainable capacity, unemployment below natural rate, rising inflation',
    'Final answer: A negative gap means the economy is producing below its capacity with idle resources and weak inflation; a positive gap means it is producing beyond sustainable capacity with tight labour markets and rising inflation.',
  ]),
  q(OG, 'With reference to a diagram, explain how an increase in aggregate demand affects the output gap and the price level when the economy has spare capacity.', 8, [
    'Keynesian AD/AS diagram with a horizontal then upward-sloping then vertical AS',
    'Initial equilibrium on the flat section: negative output gap',
    'AD shifts right; output rises with little or no rise in the price level because idle resources are brought into use',
    'The negative output gap narrows or closes',
    'Evaluation: once AD reaches the upward-sloping section, further rises in AD raise the price level; if AD reaches the vertical section the gap becomes positive and only inflation results',
    'Final answer: With spare capacity, higher AD raises output and closes the negative output gap with minimal inflation; the closer the economy is to full capacity the more the rise shows up as inflation rather than output.',
  ]),
  q(OG, 'Assess the view that the output gap is too unreliable a measure to guide macroeconomic policy.', 15, [
    'KAA: potential output is unobservable and estimated from trend growth, capacity surveys and the natural rate of unemployment, all of which are uncertain',
    'KAA: GDP data is revised for years after first publication; a 0.5 percentage point revision can flip the sign of a small gap',
    'KAA: structural changes (2008, the pandemic) shift potential output in ways only visible in hindsight',
    'Evaluation: despite this, the direction of the gap is usually clear even when its size is not, and it remains the best single guide to whether policy should be expansionary or contractionary',
    'Evaluation: policymakers use it alongside other indicators (inflation, wage growth, surveys), so unreliability is managed rather than fatal',
    'Judgement: unreliable as a precise number, useful as a signal; the mistake is to fine-tune policy to a decimal point of an estimate',
    'Final answer: The output gap is genuinely hard to measure and its size is often revised, but its sign and direction are usually informative, so it should guide policy as one indicator among several rather than be treated as a precise target.',
  ]),
  q(OG, 'Explain two causes of the trade cycle.', 6, [
    'Confidence: self-reinforcing swings in consumer and business expectations drive spending and investment',
    'The accelerator: investment depends on the change in output, so a slowdown cuts investment sharply and amplifies the downturn',
    'Alternatives: credit cycles, stock-building, supply shocks, policy errors',
    'Final answer: The cycle is driven by self-reinforcing swings in confidence and by the accelerator, under which investment responds to the rate of change of output and so magnifies both booms and slowdowns.',
  ]),

  q(CO, 'Explain, using a Phillips curve diagram, why there may be a trade-off between unemployment and inflation in the short run.', 8, [
    'Diagram: inflation on the vertical axis, unemployment on the horizontal, downward-sloping curve',
    'As unemployment falls, workers gain bargaining power and wages rise; firms pass costs into prices',
    'Low unemployment reflects strong AD, which also pulls prices up directly',
    'Expansionary demand-side policy moves up the curve: lower unemployment, higher inflation',
    'Evaluation: the trade-off depends on expectations and on the size of the output gap; the curve has flattened in recent decades',
    'Final answer: In the short run, lower unemployment tightens the labour market and raises wage and price inflation, so demand-side policy can only buy lower unemployment with higher inflation, as the downward-sloping short-run Phillips curve shows.',
  ]),
  q(CO, 'Explain why the long-run Phillips curve is vertical.', 6, [
    'A demand boost lowers unemployment below the natural rate and raises inflation',
    'Workers come to expect the higher inflation and build it into wage claims; real wages return to their previous level',
    'Employment returns to the natural rate but at a higher inflation rate: the short-run curve has shifted out',
    'Repeating this gives the same unemployment at every inflation rate: a vertical line at the NAIRU',
    'Final answer: Once expected inflation adjusts, real wages and employment return to their natural levels, so in the long run unemployment is at the NAIRU whatever the inflation rate and the curve is vertical.',
  ]),
  q(CO, 'Evaluate the extent to which a government can achieve low unemployment and low inflation at the same time.', 25, [
    'KAA: short-run Phillips curve shows a trade-off; demand-side policy cannot deliver both',
    'KAA: long-run Phillips curve is vertical at the NAIRU; attempts to hold unemployment below it cause accelerating inflation',
    'KAA: supply-side policy (skills, mobility, incentives, competition) lowers the NAIRU, shifting the long-run curve left: both objectives improve',
    'KAA: an independent central bank with a credible inflation target anchors expectations, flattening the short-run curve so unemployment can fall with less inflation',
    'Evaluation: the 2010s showed low unemployment with low inflation across many economies, suggesting the trade-off is weaker than the model implies (globalisation, weaker unions, anchored expectations)',
    'Evaluation: supply-side policy is slow and costly; in the short run a government facing a recession still has to choose',
    'Evaluation: depends on the source of inflation: a cost-push shock (oil) raises inflation and unemployment together, and no demand policy fixes both',
    'Judgement: both are achievable in the long run through the supply side and credible institutions, but not through demand management alone, and not in the face of supply shocks',
    'Final answer: In the short run demand-side policy faces a real trade-off, but low unemployment and low inflation can coexist in the long run if supply-side policy lowers the natural rate and a credible inflation target anchors expectations; the combination fails mainly when supply shocks hit.',
  ]),
  q(CO, 'Explain one reason why economic growth may conflict with a sustainable current account, and one reason why it may not.', 6, [
    'Conflict: higher incomes raise spending on imports (high marginal propensity to import), worsening the trade balance',
    'No conflict: if growth is export-led, exports rise faster than imports and the current account improves',
    'Alternative: supply-side growth raising competitiveness improves both',
    'Final answer: Consumption-led growth sucks in imports and worsens the current account, but export-led or competitiveness-driven growth improves both objectives at once.',
  ]),

  q(EF, 'Distinguish between allocative and productive efficiency.', 4, [
    'Allocative: resources allocated to the goods consumers value most; P = MC',
    'Productive: output at the lowest possible average cost; minimum of AC where MC = AC',
    'Allocative asks whether the right things are made; productive whether they are made as cheaply as possible',
    'Final answer: Allocative efficiency is producing where price equals marginal cost so output matches what consumers value; productive efficiency is producing at the minimum point of average cost so no resources are wasted.',
  ]),
  q(EF, 'Explain why a monopoly is unlikely to be allocatively efficient.', 6, [
    'Profit maximisation at MR = MC',
    'Because AR > MR for a price-maker, price at that output exceeds MC',
    'Output is below the level where P = MC; units worth more to consumers than they cost are not produced',
    'Deadweight loss: consumer surplus lost that is not captured by anyone',
    'Final answer: A monopolist produces where MR = MC, which is below the output where P = MC, so price exceeds marginal cost, output is restricted and a deadweight welfare loss results.',
  ]),
  q(EF, 'Assess whether monopoly is necessarily less efficient than perfect competition.', 15, [
    'KAA: perfect competition delivers P = MC (allocative) and output at minimum AC (productive) in the long run; monopoly delivers neither',
    'KAA: monopoly risks X-inefficiency because there is no competitive pressure on costs',
    'Evaluation: dynamic efficiency: monopoly profit funds R&D and patents reward innovation; perfect competition earns only normal profit and cannot invest',
    'Evaluation: natural monopoly: with falling AC, one firm is more productively efficient than many',
    'Evaluation: contestability: the threat of entry can force near-competitive pricing',
    'Evaluation: economies of scale may make the monopolist\'s AC lower than any competitive firm could reach, so price may still be lower despite the mark-up',
    'Judgement: statically less efficient, dynamically possibly more; depends on scale economies, contestability and whether profits are reinvested',
    'Final answer: Monopoly is less efficient in the static sense of allocation and cost, but can be more dynamically efficient and, where scale economies or natural monopoly apply, may even deliver lower prices, so the answer depends on the industry and on whether profits are reinvested.',
  ]),
  q(EF, 'Explain what is meant by X-inefficiency and why it is more likely under monopoly.', 5, [
    'X-inefficiency: costs above the minimum possible because of organisational slack',
    'Under competition, slack means losses and exit, so it is eliminated',
    'A monopolist protected by barriers to entry can survive with higher costs, so slack persists',
    'Final answer: X-inefficiency is a firm operating above its lowest possible average cost through waste and slack; it persists under monopoly because barriers to entry remove the competitive pressure that would otherwise force costs down.',
  ]),

  q(MS, 'Explain, using a diagram, how a monopsonist determines the wage rate and level of employment.', 8, [
    'Diagram: supply of labour upward sloping; MC of labour above and steeper than supply; demand (MRP) downward sloping',
    'MC of labour exceeds the wage because hiring one more worker raises the wage paid to all workers',
    'Employment where MC of labour = MRP',
    'Wage read off the SUPPLY curve at that employment, below MRP',
    'Comparison: competitive outcome where S = D has higher wage and employment',
    'Final answer: A monopsonist hires where the marginal cost of labour equals the marginal revenue product, then pays the wage on the supply curve at that quantity, giving lower employment and a lower wage than a competitive market would.',
  ]),
  q(MS, 'Explain how a national minimum wage could increase employment in a monopsonistic labour market.', 6, [
    'Minimum wage set above the monopsony wage but below the competitive wage',
    'The firm can now hire up to the competitive level at the minimum wage without raising the wage of existing workers: MC of labour becomes horizontal at the minimum',
    'The firm hires where the (now flat) MC = MRP, which is more workers than before',
    'Both wage and employment rise, the reverse of the competitive-market prediction',
    'Final answer: Because a minimum wage removes the monopsonist\'s incentive to restrict hiring to hold down wages, a minimum set between the monopsony and competitive wage raises employment as well as pay.',
  ]),
  q(MS, 'Evaluate the effects of monopsony power on suppliers, consumers and economic efficiency.', 15, [
    'KAA: suppliers or workers receive a price or wage below the value of their contribution; margins squeezed; farmers exit',
    'KAA: quantity bought is below the competitive level: allocative inefficiency and deadweight loss',
    'KAA: consumers may gain lower prices if input savings are passed on',
    'Evaluation: if the monopsonist also has selling-market power (supermarkets), savings may not be passed on',
    'Evaluation: countervailing power: cooperatives, trade unions and regulators (Groceries Code Adjudicator) can push the price back towards the competitive level',
    'Evaluation: elasticity of supply matters: suppliers with alternative buyers limit the power',
    'Judgement: harmful to suppliers and to efficiency; the effect on consumers depends on pass-through and on whether the firm is also a monopolist',
    'Final answer: Monopsony transfers surplus from suppliers to the buyer and reduces the quantity traded, so it is inefficient; consumers benefit only if cost savings are passed on, which is least likely when the same firm has power in its selling market as well.',
  ]),

  q(GL, 'Explain three causes of globalisation.', 6, [
    'Falling transport costs (containerisation) making distant production viable',
    'Falling communication costs (the internet) allowing coordination of production and finance',
    'Trade liberalisation through the WTO and regional agreements cutting tariffs',
    'Alternatives: deregulation of capital flows, growth of TNCs, political opening of China and the former Soviet bloc',
    'Final answer: Globalisation has been driven by cheaper transport and communication, which made global production networks possible, and by trade and capital liberalisation, which removed the barriers to using them.',
  ]),
  q(GL, 'Evaluate the impact of globalisation on developing economies.', 25, [
    'KAA: export-led growth: access to world markets allowed China, Vietnam and others to grow rapidly and lift hundreds of millions out of poverty',
    'KAA: FDI brings capital, technology and jobs; filling the savings gap',
    'KAA: consumers gain cheaper goods; governments gain tax revenue from growth',
    'KAA: costs: dependence on TNCs that can relocate; exploitation of labour and environment; loss of infant industries to import competition; volatile capital flows',
    'Evaluation: gains are unevenly distributed: coastal China versus inland; those with skills versus those without',
    'Evaluation: depends on policy: countries that managed openness (capital controls, infant industry support, investment in education) gained most; those that liberalised without institutions gained least',
    'Evaluation: primary product exporters gained less than manufacturing exporters; commodity dependence remains',
    'Judgement: on balance a powerful force for growth and poverty reduction, but the gains depend on institutions and policy, and the losses fall on identifiable groups',
    'Final answer: Globalisation has been the main driver of poverty reduction in developing economies that used it to build export industries, but the benefits depend on strong institutions and managed openness, and unmanaged exposure brings dependency, volatility and exploitation.',
  ]),
  q(GL, 'Explain two ways in which globalisation may reduce a government\'s ability to control its economy.', 6, [
    'Capital mobility: hot money flows limit independent monetary policy and force interest rates towards world rates',
    'Tax competition: TNCs relocate and shift profits, so governments cannot raise corporation tax without losing revenue and investment',
    'Alternatives: supply chain exposure to foreign shocks; WTO rules constraining trade policy',
    'Final answer: Free capital movement ties interest rates to world rates, and mobile TNCs constrain tax and regulatory policy through the threat of relocation and profit shifting.',
  ]),

  q(TT, 'A country\'s export price index rises from 100 to 112 while its import price index rises from 100 to 140. Calculate the change in its terms of trade and explain what it means.', 4, [
    'Terms of trade = 112 / 140 × 100 = 80',
    'A deterioration from 100 to 80 (20%)',
    'Each unit of exports now buys 20% fewer imports; the country must export more to afford the same imports',
    'Final answer: The terms of trade have deteriorated from 100 to 80, so the purchasing power of the country\'s exports has fallen by a fifth.',
  ]),
  q(TT, 'Explain two factors that could cause an improvement in a country\'s terms of trade.', 6, [
    'Currency appreciation: export prices rise in foreign currency, import prices fall in domestic currency',
    'Rising world demand for the country\'s exports (a commodity boom for an exporter) pulls export prices up',
    'Alternatives: domestic inflation above partners; falling world prices for imported inputs',
    'Final answer: An appreciation or a rise in world demand for the country\'s exports raises export prices relative to import prices, improving the terms of trade.',
  ]),
  q(TT, 'Assess whether an improvement in the terms of trade is beneficial for an economy.', 15, [
    'KAA: an improvement means the same exports buy more imports: higher real income and living standards',
    'KAA: if demand for exports is inelastic, export revenue rises and the current account improves',
    'Evaluation: if demand for exports is elastic, higher prices cut volumes and export revenue falls (Marshall-Lerner)',
    'Evaluation: cause matters: an improvement from inflation or appreciation is a competitiveness loss; from productivity gains abroad it is a pure gain',
    'Evaluation: a commodity-driven improvement is volatile and can cause Dutch disease',
    'Judgement: beneficial if it reflects genuine demand for the country\'s exports and demand is inelastic; harmful if it masks lost competitiveness',
    'Final answer: An improvement raises the purchasing power of exports, but whether it benefits the economy depends on why it happened and on the elasticity of demand for exports; an improvement caused by lost competitiveness is a warning sign, not a gain.',
  ]),
  q(TT, 'Explain the Prebisch-Singer hypothesis and its implication for developing economies.', 6, [
    'Demand for primary products is income inelastic; demand for manufactures is income elastic',
    'As world income grows, manufactures prices rise relative to primary goods',
    'Primary exporters\' terms of trade deteriorate over time; they must export ever more to buy the same imports',
    'Implication: diversify away from primary products; support infant manufacturing industries',
    'Final answer: Prebisch and Singer argued that primary-product exporters face a long-run deterioration in their terms of trade because of income elasticities, so developing economies should diversify into manufacturing.',
  ]),

  q(PR, 'With the aid of a diagram, explain the effects of a tariff on a domestic market.', 8, [
    'Diagram: domestic S and D; horizontal world price Pw; imports = gap between D and S at Pw',
    'Tariff raises the price to Pw + t',
    'Domestic supply expands; domestic demand contracts; imports fall to the smaller gap',
    'Government revenue = tariff × remaining imports',
    'Consumer surplus falls; producer surplus rises; two deadweight loss triangles',
    'Final answer: A tariff raises the domestic price above the world price, expanding domestic output, cutting imports and raising revenue, but consumers lose more than producers and the government gain, leaving a net welfare loss.',
  ]),
  q(PR, 'Distinguish between a tariff and a quota.', 4, [
    'Tariff: a tax on imports; raises price; government collects revenue',
    'Quota: a physical limit on import quantity; raises price by restricting supply',
    'Under a quota the extra revenue goes to import licence holders, not the government',
    'Final answer: A tariff taxes imports and yields government revenue, whereas a quota limits their quantity directly and the resulting higher price benefits licence holders rather than the Treasury.',
  ]),
  q(PR, 'Evaluate the case for a country imposing tariffs to protect its manufacturing industry.', 25, [
    'KAA: infant industry: temporary protection allows scale and learning before facing competition',
    'KAA: protecting employment in regions dependent on the industry; avoiding structural unemployment',
    'KAA: strategic/security argument: avoiding dependence on rivals for key goods',
    'KAA: anti-dumping: preventing predatory pricing by foreign producers',
    'Evaluation: tariff diagram shows net welfare loss; consumers pay more, regressively',
    'Evaluation: retaliation cuts exports; trade wars (2018 US-China) left both sides worse off',
    'Evaluation: protection shelters inefficiency; industries rarely become competitive; the cost per job saved is very high',
    'Evaluation: dearer imported inputs harm downstream domestic producers',
    'Evaluation: depends on elasticities, on whether protection is time-limited, and on whether the industry has any prospect of comparative advantage',
    'Judgement: a weak case in general; a temporary, targeted measure with a credible exit is defensible in specific circumstances',
    'Final answer: Tariffs impose a net welfare loss, invite retaliation and tend to entrench inefficiency, so the general case is weak; only a time-limited, targeted measure for a genuinely infant or strategic industry can be justified, and even then subsidies or training are usually cheaper.',
  ]),
  q(PR, 'Explain two arguments against protectionism.', 6, [
    'Higher prices and less choice for consumers; regressive burden',
    'Retaliation by trading partners reduces exports',
    'Alternatives: resource misallocation; dearer inputs; slower productivity growth',
    'Final answer: Protection raises prices for consumers and provokes retaliation that damages exporters, so the country as a whole loses even if one industry gains.',
  ]),

  q(IC, 'Explain two measures of international competitiveness.', 4, [
    'Relative unit labour costs: labour cost per unit of output compared with partners in a common currency',
    'Relative export prices: a country\'s export prices relative to competitors\' in a common currency',
    'Alternatives: WEF rankings; share of world exports',
    'Final answer: Competitiveness is measured by relative unit labour costs and relative export prices, both expressed in a common currency so exchange rate changes are captured.',
  ]),
  q(IC, 'Explain how a fall in the exchange rate could improve a country\'s international competitiveness, and one reason the improvement may be limited.', 6, [
    'Depreciation lowers the foreign-currency price of exports and raises the domestic price of imports',
    'Exporters gain market share; domestic producers gain against imports',
    'Limit: imported inputs cost more, raising costs; depreciation feeds inflation, eroding the advantage; non-price factors may dominate',
    'Final answer: A depreciation makes exports cheaper abroad and imports dearer at home, but the gain is eroded by dearer imported inputs and higher inflation, and does nothing for quality-based competitiveness.',
  ]),
  q(IC, 'Evaluate the policies a government could use to improve international competitiveness.', 25, [
    'KAA: supply-side policy: education and training raise productivity and lower unit labour costs',
    'KAA: infrastructure investment lowers transport and communication costs',
    'KAA: R&D tax credits and competition policy raise innovation and non-price competitiveness',
    'KAA: a lower exchange rate raises price competitiveness quickly',
    'KAA: lower corporation tax and deregulation attract FDI',
    'Evaluation: supply-side measures are slow and costly; benefits take a decade',
    'Evaluation: depreciation is temporary and inflationary; competitors can match it',
    'Evaluation: tax cuts and deregulation risk a race to the bottom that undermines public services and standards on which competitiveness also depends',
    'Evaluation: depends on the source of the weakness: UK productivity stagnation cannot be fixed by exchange rate policy',
    'Judgement: productivity-raising supply-side policy is the only durable route; exchange rate changes buy time at most',
    'Final answer: Only supply-side measures that raise productivity and non-price competitiveness deliver lasting gains; a depreciation or tax cuts give a quick but temporary boost and carry costs of their own.',
  ]),

  q(FD, 'Explain how primary product dependency can constrain economic development.', 6, [
    'Commodity prices are volatile because supply and demand are inelastic in the short run',
    'Volatile export earnings make planning and investment impossible',
    'Prebisch-Singer: deteriorating terms of trade over time',
    'Dutch disease: a commodity boom raises the exchange rate and prevents diversification',
    'Final answer: Dependence on primary exports exposes a country to volatile earnings, a long-run deterioration in its terms of trade, and Dutch disease, all of which hold back investment and diversification.',
  ]),
  q(FD, 'Explain the Harrod-Domar model and one of its limitations.', 6, [
    'Growth rate = savings ratio ÷ capital-output ratio',
    'Low incomes mean low savings, low investment, low growth: a trap',
    'The gap can be filled by FDI, aid or borrowing',
    'Limitation: assumes capital is the binding constraint; ignores institutions, skills and infrastructure that determine whether investment is productive',
    'Final answer: Harrod-Domar links growth to the savings ratio and the efficiency of capital, implying poor countries are trapped by low savings; its limitation is that more capital alone does not deliver growth without the institutions and skills to use it.',
  ]),
  q(FD, 'Evaluate the relative importance of economic and non-economic factors in constraining growth and development in a developing economy.', 25, [
    'KAA economic: savings gap and Harrod-Domar; foreign currency gap; primary product dependency; debt; infrastructure; lack of property rights; limited access to credit',
    'KAA non-economic: corruption diverting resources and deterring investment; civil war destroying capital; disease reducing productivity; geography raising transport costs',
    'Evaluation: the factors interact: corruption causes capital flight which widens the savings gap; conflict destroys infrastructure',
    'Evaluation: institutions arguably underlie everything: Norway and Nigeria both have oil; the difference is governance',
    'Evaluation: geography is fixed but its effects are not (Botswana is landlocked and grew fast)',
    'Evaluation: depends on the country: for a post-conflict state security comes first; for a stable commodity exporter diversification does',
    'Judgement: non-economic factors, especially governance, are usually the deeper cause because they determine whether economic constraints can be addressed',
    'Final answer: Economic constraints such as savings gaps and commodity dependence are real, but they are usually symptoms of weak institutions and poor governance, which determine whether a country can mobilise savings, attract investment and use its resources well.',
  ]),
  q(FD, 'Explain two ways in which a lack of property rights may hinder development.', 4, [
    'Assets cannot be used as collateral, so owners cannot borrow to invest (de Soto\'s dead capital)',
    'Investment is risky if land or businesses may be seized, so long-term projects are not undertaken',
    'Final answer: Without secure title, assets cannot be borrowed against or sold and long-term investment is deterred by the risk of expropriation.',
  ]),

  q(GP, 'Explain two ways a government could reduce its fiscal deficit and one problem with each.', 6, [
    'Cut spending: reduces AD; cutting capital spending harms long-run growth',
    'Raise taxes: reduces disposable income and AD; may weaken incentives',
    'Alternative: rely on growth to raise revenue; slow and not fully controllable',
    'Final answer: Spending cuts and tax rises both reduce the deficit directly but also reduce aggregate demand, which lowers growth and tax revenue and partly offsets the saving.',
  ]),
  q(GP, 'Explain why an increase in interest rates in one country may affect its international competitiveness.', 6, [
    'Higher rates attract hot money inflows seeking higher returns',
    'Demand for the currency rises; it appreciates',
    'Exports become dearer abroad and imports cheaper at home: price competitiveness falls',
    'Evaluation: effect depends on capital mobility and on expectations of future rates',
    'Final answer: Higher interest rates attract capital inflows that appreciate the currency, making exports dearer and imports cheaper and so reducing price competitiveness.',
  ]),
  q(GP, 'Evaluate the problems facing policymakers when applying macroeconomic policies.', 25, [
    'KAA inaccurate information: GDP is published with a lag and revised; the output gap is an estimate; policy may target conditions that no longer exist',
    'KAA risks and uncertainties: the size of the multiplier, the response of confidence and financial markets, and time lags of up to two years make outcomes unpredictable',
    'KAA external shocks: oil prices, global recessions, pandemics and capital flight cannot be prevented by a national government, only responded to',
    'Evaluation: information problems are reduced by real-time indicators and surveys, but not removed',
    'Evaluation: rules-based frameworks (inflation targets, fiscal rules, independent central banks) anchor expectations and make policy predictable despite uncertainty',
    'Evaluation: resilience to shocks can be built in advance: fiscal space, reserves, diversified trade, strong banks',
    'Evaluation: small open economies face all three problems more acutely than large ones',
    'Judgement: external shocks are the most serious because they cannot be prevented, while information and uncertainty can be managed through frameworks and caution',
    'Final answer: Policymakers face inaccurate and lagging data, uncertain policy effects and shocks they cannot control; frameworks and forward-looking indicators manage the first two, but external shocks remain the binding problem, so building resilience in advance matters more than fine-tuning.',
  ]),
  q(GP, 'Explain two measures a government could use to control the activities of transnational corporations.', 6, [
    'Transfer pricing rules requiring arm\'s-length pricing between subsidiaries, and the OECD 15% minimum corporate tax, to stop profit shifting',
    'Regulation of labour and environmental standards with penalties, or competition policy against abuse of dominance',
    'Limitation: TNCs can relocate; enforcement across borders needs international cooperation',
    'Final answer: Governments can enforce transfer pricing rules and minimum tax rates to capture revenue, and impose labour, environmental and competition regulation, though relocation threats and weak cross-border enforcement limit both.',
  ]),
]
