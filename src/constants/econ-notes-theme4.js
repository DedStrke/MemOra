/*
  Theme 4: A global perspective.

  Trade, exchange rates, development, financial markets and public finance.
  None of this appeared in the course documents - it is the second half of
  the A-level and was the thinnest part of the app.

  Theme 4 is examined almost entirely through Paper 3-style data response and
  25-mark essays, so the emphasis throughout is on the CONDITIONS under which
  each argument holds. "It depends on the elasticity", "it depends on the time
  period" and "it depends on what the money is spent on" recur so often that
  each is developed explicitly where it applies.
*/

import { h, p, defn, det, worked, diagram, tip, table, chapter } from './econ-notes-build'

/* =========================================== INTERNATIONAL TRADE */

const internationalTrade = chapter(
  defn(
    'Absolute advantage',
    'A country can produce MORE of a good than another using the same resources.',
  ),
  defn(
    'Comparative advantage',
    'A country can produce a good at a lower OPPORTUNITY COST than another. This - not absolute advantage - is what determines the gains from trade.',
  ),
  p(
    'Ricardo’s insight: even if a country is absolutely worse at producing everything, it still gains by specialising where its opportunity cost is lowest and trading. Both parties can then consume beyond their production possibility frontier.',
  ),
  worked(
    'In 1 hour the UK makes 10 cars or 20 computers; France makes 4 cars or 16 computers. Who has comparative advantage in cars?',
    'UK: 1 car costs 2 computers. France: 1 car costs 4 computers. The UK’s opportunity cost is lower, so the UK has comparative advantage in cars and France in computers - even though the UK has absolute advantage in both.',
  ),
  diagram('comparative-advantage'),
  h('Assumptions of the model - and why they matter'),
  det(
    'The theory rests on assumptions that often fail',
    'Each failed assumption is a ready-made evaluation point.',
    [
      'It assumes NO transport costs. In reality transport can exceed the cost advantage, especially for low-value bulky goods.',
      'It assumes CONSTANT returns to scale, so opportunity cost does not change as specialisation proceeds. With increasing costs, the gains shrink as specialisation deepens.',
      'It assumes PERFECT factor mobility, so resources move costlessly between industries. In reality this causes structural unemployment.',
      'It assumes no trade barriers, when tariffs and non-tariff barriers are pervasive.',
      'It is a two-country, two-good model.',
    ],
    [
      'Despite the assumptions, the core insight is robust and is among the most empirically supported results in economics.',
      'The model shows the gains are mutual in AGGREGATE, but says nothing about their DISTRIBUTION - which is why trade can be nationally beneficial and locally devastating.',
    ],
  ),
  h('Benefits of trade'),
  table(
    ['Benefit', 'Explanation'],
    [
      ['Higher output and consumption', 'Specialisation raises world output; both countries consume beyond their PPF'],
      ['Economies of scale', 'Access to a larger market lowers long-run average cost'],
      ['Greater choice and lower prices', 'Consumers access goods not produced domestically, at lower prices'],
      ['Competition and efficiency', 'Import competition disciplines domestic firms, reducing X-inefficiency'],
      ['Technology transfer', 'Imported capital goods and FDI bring know-how and raise productivity'],
      ['Political and cultural links', 'Interdependence reduces the likelihood of conflict'],
    ],
  ),
  h('Costs of trade'),
  table(
    ['Cost', 'Explanation'],
    [
      ['Structural unemployment', 'Workers in newly uncompetitive industries are occupationally and geographically immobile; the adjustment is concentrated regionally'],
      ['Over-dependence', 'Specialising in one product exposes a country to demand and price shocks in that market'],
      ['Primary product dependency', 'Commodity prices are volatile because supply and demand are both inelastic; the Prebisch–Singer hypothesis argues terms of trade decline over time'],
      ['Loss of infant industries', 'Emerging industries cannot reach the scale needed to compete against established foreign firms'],
      ['Environmental cost', 'Transport emissions, and production shifting to countries with weaker environmental regulation'],
      ['Inequality', 'The gains accrue to owners of abundant factors; the losses fall on specific workers and regions'],
    ],
  ),
  h('Protectionism'),
  table(
    ['Instrument', 'How it works', 'Main drawback'],
    [
      ['Tariff', 'A tax on imports, raising their price and shifting spending to domestic producers', 'Raises consumer prices; creates a net welfare loss; invites retaliation'],
      ['Quota', 'A physical limit on the quantity imported', 'Creates scarcity and higher prices, but the rent goes to importers rather than government'],
      ['Subsidy to domestic producers', 'Lowers domestic costs so home firms undercut imports', 'Costs taxpayers; may entrench inefficiency'],
      ['Non-tariff barriers', 'Standards, licensing, complex customs procedures', 'Hard to challenge legally; raises costs for everyone'],
      ['Embargo', 'A complete ban on trade with a country or in a good', 'Usually political; harms consumers on both sides'],
    ],
  ),
  diagram('tariff'),
  det(
    'Arguments FOR protectionism - and the counter to each',
    'Every case for protection has a standard rebuttal; the marks are in giving both.',
    [
      '*Infant industry* - a new industry needs temporary protection to reach minimum efficient scale.',
      '*Sunset industry* - protection slows decline, allowing a managed transition rather than sudden mass unemployment.',
      '*Anti-dumping* - protects domestic firms from goods sold below cost by foreign subsidised producers.',
      '*Strategic and security* - food, energy and defence capacity should not depend on foreign supply.',
      '*Correcting a deficit* - reducing imports improves the current account.',
      '*Retaliation* - responding to another country’s barriers.',
    ],
    [
      'Infant industry protection is rarely temporary - government failure means the industry lobbies to keep it indefinitely, and never faces the pressure that would make it efficient.',
      'Protecting sunset industries delays a necessary reallocation, and the cost per job saved is usually very high.',
      'Anti-dumping rules are frequently abused as disguised protection.',
      'Tariffs raise input costs for domestic manufacturers who import components, harming competitiveness.',
      'Retaliation risks a trade war in which everyone loses - the 1930s Smoot–Hawley experience.',
      'Consumers pay higher prices, and the burden is regressive.',
    ],
  ),
)

/* ======================================== TRADING BLOCS & WTO */

const tradingBlocs = chapter(
  table(
    ['Type of bloc', 'Features'],
    [
      ['Free trade area', 'No tariffs between members; each keeps its own external tariff (NAFTA/USMCA)'],
      ['Customs union', 'Free trade internally PLUS a common external tariff (the EU customs union)'],
      ['Common market', 'Customs union plus free movement of labour and capital (the EU single market)'],
      ['Monetary union', 'Common market plus a single currency and central bank (the eurozone)'],
      ['Full economic union', 'Monetary union plus harmonised fiscal policy'],
    ],
  ),
  h('Trade creation and trade diversion'),
  defn(
    'Trade creation',
    'Joining a bloc shifts production from a HIGH-cost domestic producer to a LOWER-cost member. Welfare RISES.',
  ),
  defn(
    'Trade diversion',
    'The common external tariff shifts production from a LOW-cost non-member to a HIGHER-cost member. Welfare FALLS.',
  ),
  det(
    'Is joining a bloc beneficial?',
    'It depends on whether creation exceeds diversion.',
    [
      'Creation dominates when members are already efficient producers and the external tariff is low.',
      'Members gain economies of scale from a larger market, more competition, more FDI, and stronger bargaining power in world negotiations.',
    ],
    [
      'Diversion dominates when a cheaper non-member is excluded by the common external tariff - consumers then pay more than under free trade.',
      'Loss of sovereignty over trade policy, and over monetary policy in a currency union.',
      'A single monetary policy cannot suit members at different points in the cycle - the eurozone crisis is the standard illustration.',
      'Regional blocs may undermine multilateral liberalisation by fragmenting world trade into competing blocks.',
    ],
  ),
  h('The World Trade Organisation'),
  p(
    'The WTO oversees the rules of world trade, runs negotiation rounds, and adjudicates disputes between members. Its founding principle is non-discrimination: the MOST FAVOURED NATION rule requires a concession given to one member to be given to all.',
  ),
  det(
    'Does the WTO work?',
    'It has liberalised trade substantially but faces real criticism.',
    [
      'Provides a rules-based system with binding dispute settlement, so small countries have recourse against large ones.',
      'Successive rounds have cut average tariffs dramatically since 1947.',
    ],
    [
      'Decisions require consensus among 160+ members, so negotiation rounds stall - the Doha round was never completed.',
      'Developed countries retain high agricultural subsidies and tariff escalation on processed goods, which particularly harms developing exporters.',
      'The Appellate Body has been unable to function since 2019 because appointments were blocked, so dispute settlement is weakened.',
      'Regional and bilateral agreements have proliferated as members bypass the multilateral system.',
    ],
  ),
  h('Are blocs and the WTO in conflict?'),
  det(
    'Regionalism against multilateralism',
    'Blocs discriminate by definition, which sits awkwardly with the most favoured nation principle.',
    [
      'A customs union gives members better terms than non-members, which is exactly what MFN prohibits - the WTO permits it as an explicit exception.',
      'Supporters argue blocs are "building blocks": easier to agree among a few countries, and they can later merge into wider agreements.',
    ],
    [
      'Critics argue they are "stumbling blocks": once a country has preferential access it loses interest in multilateral liberalisation, and the world fragments into competing blocs.',
      'A web of overlapping bilateral deals with different rules of origin - the "spaghetti bowl" - raises compliance costs for exporters, partly offsetting the tariff savings.',
      'Small non-member developing countries are the biggest losers, since they face diversion without any offsetting access.',
    ],
  ),
  h('Impacts of a monetary union'),
  table(
    ['Benefit', 'Cost'],
    [
      ['No transaction costs converting currency between members', 'Loss of independent monetary policy - one interest rate for very different economies'],
      ['No exchange rate risk, so trade and investment rise', 'Loss of the exchange rate as an adjustment mechanism; a member cannot devalue to restore competitiveness'],
      ['Price transparency across members increases competition', 'Adjustment must instead come through wages and prices, which is slow and causes unemployment'],
      ['Credibility imported from a strong central bank, lowering inflation', 'Asymmetric shocks hit one member and not others, and there is no fiscal transfer to cushion it'],
    ],
  ),
  p(
    'The eurozone crisis is the standard illustration: southern members lost competitiveness through higher inflation in the 2000s, could not devalue, and had to adjust through years of unemployment instead.',
  ),
)

/* ============================================== EXCHANGE RATES */

const exchangeRates = chapter(
  defn('Exchange rate', 'The price of one currency in terms of another.'),
  table(
    ['System', 'How it works', 'Terminology'],
    [
      ['Floating', 'Determined by supply of and demand for the currency, with no intervention', 'APPRECIATION / DEPRECIATION'],
      ['Fixed', 'Pegged to another currency or basket; the central bank buys and sells reserves to maintain it', 'REVALUATION / DEVALUATION'],
      ['Managed float', 'Mainly market-determined but with occasional intervention to smooth volatility', 'Both'],
    ],
  ),
  tip(
    'Use the right verb. A floating currency APPRECIATES or DEPRECIATES; a fixed one is REVALUED or DEVALUED by the authorities. Getting this wrong signals you do not know which system is being discussed.',
  ),
  h('What determines a floating rate'),
  det(
    'Interest rates',
    'Higher relative interest rates cause an APPRECIATION.',
    [
      'Higher rates attract "hot money" - short-term capital seeking the better return - which raises demand for the currency.',
      'This is a key channel of monetary policy: raising Bank Rate appreciates sterling, lowering import prices and so lowering inflation.',
    ],
    [
      'It is RELATIVE rates that matter - a rise matched by other central banks has no effect.',
      'Hot money is volatile and reverses quickly, so the appreciation may not last.',
      'Expectations matter more than the current rate: if a rise was already anticipated it is priced in and nothing happens on the day.',
    ],
  ),
  det(
    'Relative inflation rates',
    'Higher domestic inflation causes a DEPRECIATION over time.',
    [
      'Purchasing power parity: in the long run exchange rates should adjust so that a basket costs the same in each country.',
      'Higher inflation makes exports uncompetitive, reducing demand for the currency, while imports become relatively attractive, raising supply of it.',
    ],
    [
      'PPP holds only loosely and only over long periods; short-run rates are driven by capital flows, which dwarf trade flows.',
      'Non-traded goods and services mean price levels can diverge persistently.',
    ],
  ),
  det(
    'The current account and speculation',
    'A deficit tends to weaken the currency; speculation can dominate everything in the short run.',
    [
      'Importers sell domestic currency to buy foreign, raising its supply. A persistent deficit therefore puts downward pressure on the rate.',
      'Over 90% of foreign exchange transactions are financial rather than trade-related, so speculative flows dominate day to day.',
      'Speculation can be self-fulfilling: expecting a fall, traders sell, causing the fall.',
    ],
    [
      'A deficit financed by strong capital INFLOWS can coexist with a strong currency - as the UK has demonstrated for decades.',
      'Central banks can intervene using reserves, though only a large intervention shifts a deeply traded currency.',
    ],
  ),
  diagram('exchange-rate'),
  h('Effects of a depreciation'),
  det(
    'The mechanism, and the two conditions that decide whether it works',
    'SPICED - Strong Pound, Imports Cheap, Exports Dear. A depreciation reverses this.',
    [
      'Exports become cheaper in foreign currency, so export volumes rise. Imports become dearer in domestic currency, so import volumes fall.',
      'Net exports rise, so AD shifts right: higher output, lower unemployment, amplified by the multiplier.',
      'Import prices rise, shifting SRAS left and causing imported cost-push inflation.',
    ],
    [
      'The MARSHALL–LERNER CONDITION must hold: the current account only improves if PEDx + PEDm > 1. With inelastic demand for imported energy and food, the import BILL can rise even as volumes fall.',
      'The J-CURVE: in the short run contracts are fixed and volumes adjust slowly, so the value effect dominates and the current account WORSENS before improving.',
      'Exporters use imported components, so their costs rise too and the competitiveness gain is smaller than it looks.',
      'It requires spare capacity to raise export volumes; near full capacity the effect is on prices only.',
      'Real incomes fall on impact through dearer imports, and the burden is regressive.',
    ],
  ),
  diagram('j-curve'),
  h('Fixed exchange rates'),
  det(
    'Defending a peg',
    'The central bank must buy its own currency with foreign reserves when the rate comes under downward pressure.',
    [
      'It can also raise interest rates to attract capital inflows and support the currency.',
      'Benefits: certainty for traders and investors, imported discipline on inflation, and no competitive devaluation.',
    ],
    [
      'Reserves are finite. A determined speculative attack can exhaust them - Black Wednesday in 1992 forced sterling out of the ERM.',
      'Monetary policy must be devoted to the peg, so it cannot be used for domestic objectives - the "impossible trinity": free capital movement, a fixed rate and independent monetary policy cannot all hold at once.',
      'If the peg is set at the wrong level, adjustment must come through wages and prices instead, which is slow and painful.',
    ],
  ),
  diagram('fixed-exchange-rate'),
)

/* ================================== POVERTY, INEQUALITY, DEVELOPMENT */

const povertyInequality = chapter(
  defn('Absolute poverty', 'Income insufficient to afford basic necessities. The World Bank line is $2.15 a day at PPP.'),
  defn('Relative poverty', 'Income below a proportion of the median - in the UK below 60% of median household income. It is a measure of INEQUALITY and can persist however rich a society becomes.'),
  p(
    'Inequality is shown by the LORENZ CURVE - cumulative income against cumulative population - and summarised by the GINI COEFFICIENT, the ratio of the area between the curve and the 45° line to the whole area below the line. 0 is perfect equality, 1 perfect inequality.',
  ),
  diagram('lorenz-curve'),
  h('Causes of inequality'),
  table(
    ['Cause', 'Explanation'],
    [
      ['Wage differentials', 'Differences in skills, MRP, qualifications and bargaining power'],
      ['Unemployment', 'The single largest cause of poverty within a country'],
      ['Wealth inequality', 'Far larger than income inequality and self-reinforcing - assets generate income, which buys more assets'],
      ['Inheritance', 'Transmits inequality across generations independently of effort'],
      ['Tax and benefit design', 'Regressive indirect taxes and less generous benefits widen the post-tax distribution'],
      ['Education access', 'Unequal access to quality education perpetuates differences in human capital'],
      ['Discrimination', 'Unequal pay and opportunity for equally productive workers'],
    ],
  ),
  h('The Kuznets curve'),
  det(
    'Does inequality rise then fall with development?',
    'Kuznets argued inequality follows an inverted U as an economy develops.',
    [
      'Early industrialisation creates a modern urban sector paying far more than agriculture, so inequality RISES.',
      'As education spreads, labour moves into the modern sector and welfare systems develop, inequality FALLS.',
    ],
    [
      'Widely challenged empirically - many countries never experienced the downward half, and inequality has RISEN in most developed economies since 1980.',
      'It describes a historical pattern rather than a mechanism, so it has little predictive power.',
      'Treat it as a hypothesis to evaluate, not a law.',
    ],
  ),
  diagram('kuznets-curve'),
  h('Policies to reduce poverty and inequality'),
  det(
    'Redistribution through tax and benefits',
    'The fastest-acting instrument, and the only one that reaches households with no earner.',
    [
      'Progressive income tax narrows the post-tax distribution; means-tested benefits target the bottom of it.',
      'A national living wage raises the floor of the earnings distribution directly.',
      'Universal provision of health and education raises the "social wage", so measured income inequality overstates inequality of living standards.',
    ],
    [
      'The POVERTY TRAP: benefit withdrawal as income rises creates very high effective marginal tax rates for the low paid, so extra hours barely pay. Tapering reduces but does not remove this.',
      'High marginal rates may reduce incentives at the top and encourage avoidance or emigration - the Laffer argument.',
      'It treats the symptom rather than the cause, which is low productivity.',
    ],
  ),
  det(
    'Raising the productivity of low earners',
    'The only route to a permanently higher market wage rather than a transfer.',
    [
      'Education and training raise human capital and so raise MRP, shifting the supply of unskilled labour left and skilled labour right.',
      'Childcare provision raises participation, particularly for second earners.',
      'Regional policy and infrastructure raise geographical mobility.',
    ],
    [
      'Works over a generation, so it does nothing for present poverty.',
      'Requires large up-front spending with uncertain and hard-to-attribute returns.',
      'It cannot help those unable to work at all.',
    ],
  ),
  tip(
    'The strongest answer on inequality distinguishes ABSOLUTE from RELATIVE. Growth is the most powerful force in history against absolute poverty while often raising relative inequality - so the two measures can move in opposite directions and the question decides which matters.',
  ),
)

/* ============================================== DEVELOPMENT */

const development = chapter(
  h('Measuring development'),
  table(
    ['Measure', 'What it captures', 'Limitation'],
    [
      ['Real GDP per capita (PPP)', 'Average material living standards', 'Ignores distribution, informal economy, externalities and non-material welfare'],
      ['HDI', 'Income, life expectancy and years of schooling combined', 'Only three dimensions; ignores inequality, gender and the environment'],
      ['Inequality-adjusted HDI', 'HDI discounted for how unequally its components are distributed', 'Data-hungry and unavailable for many countries'],
      ['Multidimensional Poverty Index', 'Deprivation across health, education and living standards', 'Complex; thresholds are somewhat arbitrary'],
      ['Other indicators', 'Literacy, infant mortality, access to clean water, mobile subscriptions', 'Each captures one dimension only'],
    ],
  ),
  h('Barriers to development'),
  det(
    'The savings gap and the poverty trap',
    'Low income means low saving, so low investment, so low productivity - which keeps income low.',
    [
      'The Harrod–Domar model: growth depends on the savings ratio divided by the capital-output ratio, so a low savings ratio caps growth.',
      'This is a self-reinforcing cycle, which is why an external injection - aid, FDI, debt relief, remittances or microfinance - is argued to be necessary to break it.',
    ],
    [
      'Harrod–Domar ignores that capital needs complementary skills, institutions and infrastructure - capital alone does not produce growth.',
      'Aid can create dependency, be lost to corruption, or cause currency appreciation that damages exports.',
      'Some countries have grown strongly without large aid inflows, which weakens the necessity claim.',
    ],
  ),
  diagram('poverty-trap'),
  table(
    ['Other barriers', 'Explanation'],
    [
      ['Primary product dependency', 'Volatile prices, declining terms of trade (Prebisch–Singer), and vulnerability to weather and disease'],
      ['The resource curse', 'Resource wealth causes currency appreciation harming other exports (Dutch disease), plus corruption and conflict'],
      ['Weak institutions', 'Insecure property rights, corruption and political instability deter investment'],
      ['Debt burden', 'Servicing external debt diverts revenue from health and education'],
      ['Poor human capital', 'Low literacy, disease burden and inadequate healthcare limit productivity'],
      ['Capital flight and brain drain', 'Wealth and skilled workers leave for safer, better-paid destinations'],
    ],
  ),
  h('Strategies for development'),
  table(
    ['Market-oriented', 'Interventionist'],
    [
      ['Trade liberalisation', 'Infrastructure development'],
      ['Promotion of FDI', 'Human capital investment - education and health'],
      ['Removal of subsidies and price controls', 'Protecting infant industries'],
      ['Privatisation and deregulation', 'Managed exchange rates and industrial policy'],
      ['Floating the exchange rate', 'Buffer stock schemes for commodity producers'],
    ],
  ),
  det(
    'Which approach works?',
    'The debate is really about sequencing and institutional capacity.',
    [
      'Market-oriented strategies raise efficiency and attract capital, and the East Asian export-led model produced the fastest sustained growth in history.',
      'Interventionist strategies address the market failures - externalities in education and health, missing infrastructure - that markets will not fix alone.',
    ],
    [
      'The East Asian success involved substantial state direction as well as trade openness, so it does not support either pure position.',
      'Liberalisation without institutions produces capital flight and enclave development rather than broad growth.',
      'Aid effectiveness depends far more on governance than on volume - which is why conditionality is contested but persistent.',
      'One-size-fits-all prescriptions have a poor record; what works depends on the country’s factor endowments, institutions and starting point.',
    ],
  ),
)

/* =========================================== FINANCIAL MARKETS */

const financialMarkets = chapter(
  h('The role of financial markets'),
  table(
    ['Function', 'Explanation'],
    [
      ['Facilitate saving', 'Provide secure vehicles for households and firms to store wealth'],
      ['Lend to businesses and individuals', 'Channel savings into investment and consumption'],
      ['Allocate capital', 'Direct funds towards the most productive uses through the price mechanism'],
      ['Facilitate exchange', 'Provide payment systems and foreign exchange'],
      ['Provide a market for equities', 'Allow firms to raise capital by issuing shares'],
      ['Forward markets and risk management', 'Let firms hedge against commodity price and exchange rate movements'],
    ],
  ),
  h('Market failure in financial markets'),
  det(
    'Asymmetric information',
    'Lenders cannot fully assess borrower risk, and buyers cannot assess the quality of complex products.',
    [
      'Adverse selection: the riskiest borrowers are keenest to borrow, so raising rates worsens the pool of applicants.',
      'The 2008 crisis is the standard case - mortgage-backed securities were rated as safe when their underlying quality was unknown even to the sellers.',
    ],
    ['Regulation, disclosure requirements and credit rating agencies exist to reduce this, though the agencies themselves failed in 2008 because issuers paid for their ratings.'],
  ),
  det(
    'Moral hazard',
    'Institutions take excessive risk because they do not bear the full cost of failure.',
    [
      'Banks judged "too big to fail" expect a government rescue, so the downside is socialised while the upside is private.',
      'Bonuses tied to short-run profit reward risk-taking whose consequences appear later.',
    ],
    [
      'Addressed by higher capital requirements, ring-fencing retail from investment banking, bonus deferral and clawback, and resolution regimes that let a bank fail without collapsing the system.',
      'The counter-argument is that letting a systemic bank fail causes far more damage than the moral hazard it prevents - as Lehman Brothers demonstrated.',
    ],
  ),
  det(
    'Externalities, speculation and market rigging',
    'Financial failure imposes enormous costs on the wider economy.',
    [
      'A banking collapse causes a credit crunch, so firms cannot borrow and investment collapses - a negative externality far larger than the losses of the banks themselves.',
      'Speculative bubbles: prices rise far above fundamental value because buyers expect further rises, then crash.',
      'Market rigging - the LIBOR scandal - shows that participants can manipulate prices where oversight is weak.',
    ],
    ['Some speculation is useful: it provides liquidity and helps prices reflect information. The problem is herding and leverage, not speculation as such.'],
  ),
  h('Market bubbles'),
  det(
    'How a bubble forms and bursts',
    'Prices rise above fundamental value because buyers expect further rises, not because the asset became more useful.',
    [
      'Rising prices attract buyers, whose buying raises prices further - a self-reinforcing loop.',
      'Cheap credit and leverage amplify it: borrowing to buy multiplies both the gain and the eventual loss.',
      'Herding and the belief that "this time is different" sustain it past any rational valuation.',
      'When the expectation of further rises breaks, forced selling by leveraged holders accelerates the fall.',
    ],
    [
      'Bubbles are easy to identify afterwards and very hard to identify at the time - which is why central banks were reluctant to act against them before 2008.',
      'The efficient markets hypothesis argues prices already reflect all available information, so bubbles should not persist; the historical record disagrees.',
    ],
  ),
  h('Why financial market failure matters more than other market failure'),
  p(
    'A failure in one market usually affects that market. A failure in the financial system affects EVERY market, because every firm depends on credit. That is why banks are regulated far more heavily than other firms, and why they are rescued when other firms are allowed to fail - which is precisely what creates the moral hazard.',
  ),
)

/* ================================ CENTRAL BANKS & REGULATION */

const centralBanks = chapter(
  p(
    'The Bank of England has two statutory objectives: MONETARY stability (the 2% inflation target) and FINANCIAL stability (a resilient banking system). The two can conflict - raising rates to control inflation stresses indebted borrowers and the banks that lent to them.',
  ),
  det(
    'Central bank independence',
    'The government sets the target; the Bank chooses the instruments. Operational independence since 1997.',
    [
      'Independence removes the political incentive to loosen policy before an election, which historically produced a boom-then-bust cycle.',
      'It makes the target CREDIBLE, and credibility is what anchors inflation expectations - which does much of the work of controlling inflation without any change in rates.',
      'A credible central bank needs smaller rate changes to achieve the same effect.',
    ],
    [
      'It transfers a decision with large distributional effects - between borrowers and savers, and between asset holders and wage earners - to unelected officials.',
      'Independence is only as strong as the political consensus behind it; it can be removed.',
      'A single target can be the wrong one: an inflation-targeting central bank ignored asset price bubbles before 2008 because consumer price inflation was low.',
    ],
  ),
  h('Central banks and regulation'),
  table(
    ['Role', 'Explanation'],
    [
      ['Monetary policy', 'Setting Bank Rate and asset purchases to meet the inflation target'],
      ['Banker to the government', 'Managing the government’s accounts and issuing debt'],
      ['Banker to the banks', 'Holding reserves and operating the payments system'],
      ['Lender of last resort', 'Providing liquidity to solvent banks in a crisis to prevent a run - but this is the source of moral hazard'],
      ['Financial stability', 'Macroprudential regulation through the Financial Policy Committee'],
      ['Regulation', 'The Prudential Regulation Authority supervises banks; the Financial Conduct Authority regulates conduct'],
    ],
  ),
  det(
    'Does financial regulation work?',
    'Post-2008 reform strengthened the system considerably but at a cost.',
    [
      'Higher capital and liquidity requirements (Basel III) mean banks can absorb larger losses.',
      'Ring-fencing separates retail deposits from investment banking risk.',
      'Stress testing checks resilience against hypothetical shocks.',
    ],
    [
      'Regulation raises banks’ costs, which are passed on in higher borrowing costs and can reduce lending to small firms.',
      'Regulatory arbitrage: activity migrates to less-regulated "shadow banking", so the risk moves rather than disappearing.',
      'Regulators face an information asymmetry against the institutions they supervise, and risk regulatory capture.',
      'Rules designed for the last crisis may not prevent the next one.',
    ],
  ),
  h('The crisis toolkit'),
  table(
    ['Tool', 'What it does', 'Cost'],
    [
      ['Cutting Bank Rate', 'Lowers borrowing costs across the economy', 'Exhausted at the zero lower bound'],
      ['Quantitative easing', 'Buys bonds to lower long-term yields and raise asset prices', 'Inflates asset prices and so wealth inequality; hard to unwind'],
      ['Forward guidance', 'Commits to keeping rates low, shaping expectations', 'Only works if believed; ties the Bank’s hands if conditions change'],
      ['Lender of last resort', 'Lends to solvent but illiquid banks to stop a run', 'Creates moral hazard - banks expect rescue and take more risk'],
      ['Funding schemes', 'Cheap funding conditional on banks lending to the real economy', 'Banks may use it to repair balance sheets instead'],
    ],
  ),
  h('Macroprudential regulation'),
  p(
    'Regulating the system as a whole rather than each bank separately. The Financial Policy Committee can impose countercyclical capital buffers - requiring more capital in a boom so there is a cushion in a bust - and limit loan-to-income ratios in mortgage lending. The lesson of 2008 was that a system of individually safe banks can still be collectively fragile, because they hold the same assets and fail together.',
  ),
)

/* ==================================== PUBLIC FINANCE & DEBT */

const publicFinance = chapter(
  h('Public expenditure'),
  table(
    ['Type', 'Meaning', 'Examples'],
    [
      ['Capital expenditure', 'Spending on assets that raise future productive capacity', 'Roads, hospitals, schools, digital infrastructure'],
      ['Current expenditure', 'Day-to-day running costs', 'Public sector wages, medicines, school supplies'],
      ['Transfer payments', 'Money moved between groups with no output in exchange', 'Pensions, unemployment benefit, child benefit'],
    ],
  ),
  det(
    'What determines the size of public spending?',
    'Both economic and political forces.',
    [
      'Demographics: an ageing population raises health, pension and social care spending regardless of policy.',
      'The economic cycle: automatic stabilisers raise spending in a downturn.',
      'The level of development: richer countries generally spend a higher share of GDP on welfare (Wagner’s law).',
      'Political ideology about the role of the state.',
      'Debt interest, which is spending that buys no current output.',
    ],
    [
      'Higher spending must be funded by tax or borrowing, both with costs elsewhere.',
      'Crowding out: public spending may displace private activity if the economy is near capacity.',
      'But capital spending with a high social return can CROWD IN private investment by raising expected returns.',
    ],
  ),
  h('Taxation'),
  p('Principles of a good tax (Adam Smith’s canons, updated): equitable, certain, convenient, efficient, flexible and simple.'),
  table(
    ['Effect of higher direct tax', 'Consideration'],
    [
      ['Incentives to work', 'May fall, though empirical labour supply elasticities are low for most workers'],
      ['Tax revenue', 'Rises up to T*, then falls - the Laffer curve'],
      ['Income distribution', 'Progressive tax narrows it; indirect tax is regressive'],
      ['Real output and employment', 'Higher tax reduces disposable income and so consumption and AD'],
      ['The price level', 'Indirect tax raises it directly; higher business taxes shift SRAS left'],
      ['The trade balance', 'Lower disposable income reduces import demand, improving the current account'],
      ['FDI flows', 'Lower corporation tax attracts investment, but risks a race to the bottom between countries'],
    ],
  ),
  diagram('laffer'),
  diagram('progressive-tax'),
  h('The composition of spending matters more than the total'),
  det(
    'Capital against current spending',
    'The same pound has very different effects depending on what it buys.',
    [
      'CAPITAL spending raises future productive capacity, so it shifts LRAS right and can pay for itself through higher future tax revenue.',
      'CURRENT spending supports AD today but leaves no asset behind.',
      'TRANSFER payments do not enter AD directly - they only affect it when the recipient spends, which counts as C. They do have a high multiplier though, because recipients have a high MPC.',
    ],
    [
      'Capital spending is the easiest to cut politically, because the pain is deferred - which is why it is disproportionately cut during austerity even though it has the best long-run return.',
      'The distinction is blurred: spending on teachers is "current" but raises human capital, which is a capital effect.',
    ],
  ),
  h('Crowding out and crowding in'),
  table(
    ['Effect', 'Mechanism', 'When it dominates'],
    [
      ['Crowding OUT', 'Government borrowing raises demand for loanable funds, raising interest rates and displacing private investment', 'At full capacity, with rates well above zero'],
      ['Resource crowding out', 'The state competes for scarce workers and materials, bidding up their price', 'When the economy is at or near full employment'],
      ['Crowding IN', 'Public infrastructure raises the expected return on private investment, so private investment RISES', 'With spare capacity, low rates, and high-return public projects'],
    ],
  ),
  tip(
    'Crowding out is the standard evaluation of any fiscal expansion, but state the CONDITION. With significant spare capacity and rates at the lower bound it is weak or absent, and crowding in may dominate instead.',
  ),
)

/* ============================================ NATIONAL DEBT */

const nationalDebt = chapter(
  h('The national debt'),
  defn('Budget deficit', 'The annual shortfall of tax revenue against spending - a FLOW.'),
  defn('National debt', 'The accumulated total of past deficits - a STOCK.'),
  table(
    ['Type of deficit', 'Meaning'],
    [
      ['Cyclical', 'The part caused by the economic cycle; it disappears automatically as the economy recovers'],
      ['Structural', 'The part that remains even at full employment; it only closes through deliberate policy'],
    ],
  ),
  tip(
    'Almost every debt question turns on the cyclical/structural distinction. A cyclical deficit needs no action and cutting it makes things worse; a structural deficit does need action. Say which you think it is and why.',
  ),
  det(
    'Why a high national debt matters',
    'The costs are real but frequently overstated.',
    [
      'Debt interest is spending that buys no output and has an opportunity cost in health, education or tax cuts.',
      'It reduces fiscal space - less room to respond to the next crisis.',
      'If investors doubt sustainability, the risk premium on government bonds rises, raising borrowing costs across the economy.',
      'Intergenerational equity: future taxpayers service borrowing that funded present consumption.',
      'Crowding out of private investment if borrowing raises interest rates.',
    ],
    [
      'What matters is the debt-to-GDP RATIO and the interest burden, not the cash figure - a growing economy can carry a growing debt indefinitely.',
      'If the interest rate is below the growth rate, the ratio falls even while borrowing continues.',
      'Borrowing to fund CAPITAL spending raises future capacity, so it can pay for itself; borrowing for current spending does not. The composition matters more than the total.',
      'Much UK debt is held domestically and in sterling, so the UK cannot be forced to default in a foreign currency the way an emerging economy can.',
      'Austerity to cut the deficit in a downturn can raise the debt RATIO, because the negative multiplier shrinks GDP faster than it shrinks borrowing.',
    ],
  ),
  h('Measures to reduce a deficit'),
  table(
    ['Measure', 'Effect', 'Drawback'],
    [
      ['Raise taxes', 'Increases revenue directly', 'Reduces AD and may reduce incentives; politically costly'],
      ['Cut spending', 'Reduces expenditure directly', 'Negative multiplier deepens a downturn; falls on public services'],
      ['Promote growth', 'Raises revenue and cuts benefit spending automatically', 'Slow, and may require spending first'],
      ['Raise the retirement age', 'Cuts pension spending and raises the labour force', 'Politically difficult; regressive since life expectancy varies by income'],
      ['Sell assets', 'One-off revenue', 'Loses the future income stream permanently'],
    ],
  ),
  h('When is debt sustainable?'),
  det(
    'The r against g condition',
    'The debt-to-GDP ratio falls automatically whenever the interest rate on debt (r) is below the growth rate of the economy (g).',
    [
      'If g exceeds r, the economy grows faster than the debt compounds, so the ratio shrinks even while the government keeps borrowing.',
      'This is how the UK reduced its post-war debt from over 250% of GDP without ever running large surpluses - growth and inflation did the work.',
      'It follows that policies raising long-run growth can reduce the debt ratio more effectively than spending cuts.',
    ],
    [
      'r can rise sharply and without warning if markets lose confidence, flipping the arithmetic - which is what happened to Greece.',
      'It relies on borrowing in your own currency; a country borrowing in dollars cannot inflate its debt away.',
      'It is not a licence for unlimited borrowing: the condition can reverse, and a high starting ratio leaves no margin if it does.',
    ],
  ),
  h('Fiscal rules'),
  p(
    'Governments adopt fiscal rules - such as balancing the CURRENT budget over the cycle while borrowing only to invest - to build credibility with markets. The trade-off is flexibility: a rigid rule can force pro-cyclical tightening in a downturn, which is exactly when it does most harm. Most rules therefore include escape clauses, which in turn weakens the credibility they were meant to create.',
  ),
)

export const ECON_THEME4_NOTES = {
  'International Trade': internationalTrade,
  'Trading Blocs and the WTO': tradingBlocs,
  'Exchange Rates': exchangeRates,
  'Poverty and Inequality': povertyInequality,
  'Measures and Strategies for Development': development,
  'The Role of Financial Markets': financialMarkets,
  'Central Banks and Financial Regulation': centralBanks,
  'Public Expenditure and Taxation': publicFinance,
  'The National Debt': nationalDebt,
}
