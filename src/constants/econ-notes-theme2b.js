/*
  Theme 2 continued: inflation, unemployment, growth, the multiplier and the
  policy objectives.

  Same standard as econ-notes-theme2.js - every determinant carries the
  mechanism AND the reason it may not hold, and every "is this a problem?"
  section carries the conditions that decide the answer, because those
  conditions are the evaluation marks.
*/

import { h, p, defn, det, worked, diagram, tip, table, chapter } from './econ-notes-build'

/* ===================================================== INFLATION */

const inflation = chapter(
  defn('Inflation', 'A sustained rise in the general price level over time.'),
  defn('Deflation', 'A sustained FALL in the general price level - a negative inflation rate.'),
  defn(
    'Disinflation',
    'A FALL IN THE RATE of inflation. Prices are still rising, just more slowly. Do not confuse this with deflation.',
  ),
  tip(
    'Disinflation vs deflation is one of the most common definition errors in the subject. Inflation falling from 5% to 2% is disinflation - prices are still going up.',
  ),

  h('Measuring inflation: CPI'),
  p('The Consumer Price Index is the UK’s official measure and the one the 2% target is set against.'),
  table(
    ['Step', 'What happens'],
    [
      [
        '1. Data collection',
        'The ONS collects around 180,000 price quotes each month on more than 700 products, via shop visits, websites and telephone.',
      ],
      [
        '2. Weighting',
        'Each item is weighted by its share of typical household spending, taken from the Living Costs and Food Survey. Weights are updated annually so the basket stays representative - petrol might carry roughly a 10% weight.',
      ],
      [
        '3. Index conversion',
        'Prices are converted to an index with a base year of 100. The percentage change in the index is the inflation rate.',
      ],
    ],
  ),
  worked(
    'A basket costs £200 in the base year and £214 this year. Calculate the index number and the inflation rate.',
    'Index = (214 ÷ 200) × 100 = 107. Inflation = 7%.',
  ),
  h('CPI against RPI'),
  table(
    ['Measure', 'Key features'],
    [
      [
        'CPI',
        'Excludes housing costs of owner-occupiers and council tax. That is a real weakness in the UK, where home ownership is high. Uses a geometric mean, which allows for substitution.',
      ],
      [
        'RPI',
        'Includes mortgage interest payments. Excludes pensioner households and the top 4% of earners to better reflect an "average" household. Uses an arithmetic mean, so it tends to read higher than CPI. No longer a National Statistic but still used for some index-linked contracts.',
      ],
    ],
  ),
  h('Problems with measuring inflation'),
  table(
    ['Problem', 'Explanation'],
    [
      [
        'The same goods are not compared each year',
        'Products improve in quality over time, so a price rise may reflect a better product rather than a more expensive one. Estimates suggest removing quality improvements would cut measured inflation by around 1.1 percentage points.',
      ],
      [
        'Inflation tends to be overstated',
        'Weights are updated only annually, so the index does not capture households substituting away from goods whose prices rise during the year.',
      ],
      [
        'There is no "typical" household',
        'Pensioners, students and families have very different baskets, so the headline rate matches almost nobody’s actual experience. Those on low incomes spend more on energy and food, so their effective inflation rate is usually higher.',
      ],
      [
        'Sampling error',
        'The survey is a sample, so it carries sampling error, and response rates have been falling.',
      ],
    ],
  ),

  h('Causes of inflation'),
  det(
    'Demand-pull inflation',
    'Inflation caused by an increase in AD - "too much money chasing too few goods".',
    [
      'Any rightward shift in AD raises the price level: cuts in interest rates, tax cuts, higher government spending, rising confidence, a depreciation raising net exports, or growth in incomes abroad.',
      'The effect on prices rather than output depends on where the economy sits on AS: near full capacity firms compete for scarce factors and bid up wages and input prices, so most of the shift goes into prices.',
      'A large multiplier magnifies the initial injection and so magnifies the price effect.',
    ],
    [
      'With substantial spare capacity, an AD increase raises real output with very little price effect - on the horizontal section of a Keynesian AS curve there is essentially no inflation at all.',
      'Demand-pull inflation is generally the less damaging kind, because it comes with rising output and falling unemployment.',
    ],
  ),
  diagram('demand-pull'),
  det(
    'Cost-push inflation',
    'Inflation caused by a rise in firms’ costs of production, shifting SRAS left.',
    [
      'Sources: higher wages not matched by productivity, a fall in the exchange rate raising import costs, higher raw material and energy prices, higher indirect taxes, and increased regulation.',
      'Firms raise prices to protect margins, so the price level rises while real output FALLS - stagflation.',
    ],
    [
      'This is the more damaging type, because inflation and unemployment worsen together and monetary policy cannot fix the cause.',
      'The effect may be temporary: a one-off cost shock raises the price level once rather than causing sustained inflation, unless expectations become unanchored.',
      'Firms may absorb costs in margins where competition is strong, so pass-through is incomplete.',
    ],
  ),
  diagram('cost-push'),
  det(
    'Growth in the money supply',
    'The monetarist view: inflation is always and everywhere a monetary phenomenon.',
    [
      'The Fisher equation MV = PQ. If the velocity of circulation V and real output Q are broadly stable, an increase in the money supply M must raise the price level P.',
      'Quantitative easing and excessive government borrowing financed by money creation are the standard modern examples.',
    ],
    [
      'V is not stable in practice - it fell sharply after 2008, which is why large-scale QE did not produce the inflation monetarists predicted.',
      'If there is spare capacity, extra money can raise Q rather than P.',
    ],
  ),

  h('Costs of inflation'),
  table(
    ['Cost', 'Explanation'],
    [
      [
        'Shoe leather costs',
        'Holding cash loses value, so households and firms move money more often. Inflation also distorts price signals: a consumer cannot tell whether a price rise is relative scarcity or just general inflation, so more searching is needed to compare prices.',
      ],
      [
        'Menu costs',
        'Firms must update prices more often - menus, catalogues, labels. Much reduced by technology, so this is a weaker cost than it once was.',
      ],
      [
        'Unequal redistribution of income',
        'Losers: those with weak wage bargaining power, people on fixed incomes and benefits, net savers (the real value of savings falls) and creditors (the real value of repayments falls). Winners: borrowers, including the government on its own debt.',
      ],
      [
        'Uncertainty',
        'Volatile inflation makes it hard for firms to plan, so investment falls - which lowers LRAS and long-run growth.',
      ],
      [
        'Loss of international competitiveness',
        'If UK inflation exceeds trading partners’, exports become dearer abroad and imports relatively cheaper, worsening net exports.',
      ],
      [
        'Wage–price spiral',
        'Expectations become self-fulfilling: workers demand pay rises to protect real income, firms raise prices to protect margins, and the process repeats. This is why anchoring expectations is the central task of monetary policy.',
      ],
      [
        'Fiscal drag',
        'Rising nominal earnings push people into higher tax brackets when thresholds are frozen, raising the tax burden without any announced rate rise.',
      ],
    ],
  ),
  h('Benefits of a low, stable rate'),
  table(
    ['Benefit', 'Explanation'],
    [
      [
        'Real wage flexibility',
        'Wages are sticky downwards - workers resist nominal cuts. With mild inflation a firm can cut REAL wages while still raising nominal pay, which helps labour markets adjust without redundancies. At zero inflation real wages cannot fall easily, so unemployment rises instead. This is a key argument for a 2% target rather than 0%.',
      ],
      [
        'Gain to borrowers',
        'The real value of debt falls, which helps indebted households and reduces the real burden of government debt.',
      ],
      [
        'Encourages growth',
        'Mild demand-pull inflation signals rising demand, encouraging firms to invest and expand output.',
      ],
      ['Avoids deflation', 'Deflation causes consumers to delay purchases and raises the real value of debt - a far worse outcome.'],
    ],
  ),
  h('Evaluating: how serious is the inflation?'),
  table(
    ['It depends on', 'Why'],
    [
      ['What is rising in price', 'Rising food and energy prices hit low-income households hardest because those are necessities with inelastic demand.'],
      ['The rate', 'Low and stable is manageable and arguably beneficial. Hyperinflation destroys the price mechanism entirely.'],
      ['The cause', 'Cost-push is worse than demand-pull because it comes with falling real output.'],
      ['Volatility', 'Fluctuation creates uncertainty and deters investment even at a low average rate.'],
      ['Relative to competitors', 'Inflation matters for competitiveness only relative to trading partners.'],
      ['Which group', 'Borrowers gain, savers and those on fixed incomes lose. Everyone faces a different personal inflation rate.'],
    ],
  ),
)

/* ================================================== UNEMPLOYMENT */

const unemployment = chapter(
  defn(
    'Unemployment',
    'People of working age who are without work, able to work, and actively seeking work.',
  ),
  defn(
    'The economically inactive',
    'People of working age who are neither in work nor seeking it - students, carers, the long-term sick, the early retired. They are NOT counted as unemployed.',
  ),
  p('*Unemployment rate = (unemployed ÷ labour force) × 100*, where the labour force is the employed plus the unemployed.'),
  tip(
    'A falling unemployment rate is not automatically good news: if people give up searching they move from "unemployed" to "inactive", which lowers the rate while making the economy worse off. Always check the employment rate and participation rate alongside it.',
  ),

  h('Measuring unemployment'),
  table(
    ['Measure', 'Method', 'Advantage', 'Disadvantage'],
    [
      [
        'Labour Force Survey',
        'ONS questionnaire of about 60,000 households. Counts anyone out of work who has actively sought work in the last 4 weeks and can start within 2 weeks.',
        'Uses the ILO definition, so international comparison is possible. Captures people who are unemployed but not claiming.',
        'It is a sample, so it carries sampling error and is expensive and slower to produce.',
      ],
      [
        'Claimant count',
        'The number of people claiming Jobseeker’s Allowance or the equivalent Universal Credit element each month.',
        'Cheap, fast and complete - the data already exists.',
        'Excludes anyone not eligible or not claiming, so it understates. Changing benefit rules change the figure without any change in unemployment.',
      ],
    ],
  ),

  h('Causes of unemployment'),
  det(
    'Cyclical (demand-deficient) unemployment',
    'Unemployment caused by a lack of aggregate demand during a downturn.',
    [
      'Labour is a DERIVED demand - firms hire workers to produce output, so when orders fall, hiring falls.',
      'Falling incomes reduce consumption, which reduces demand further: a negative multiplier effect.',
      'Firms cut hiring first, then hours, then jobs. Some fail entirely.',
    ],
    [
      'It is temporary by nature and reverses when demand recovers, so it is less damaging than structural unemployment.',
      'Demand-side policy - fiscal or monetary stimulus - addresses this cause directly, so it is the most treatable type.',
      'Labour hoarding means firms may retain workers through a short downturn rather than pay to rehire and retrain later, so measured unemployment rises by less than output falls.',
    ],
  ),
  det(
    'Structural unemployment',
    'Unemployment caused by a change in the structure of the economy, leaving workers whose skills no longer match available jobs.',
    [
      'Deindustrialisation: the long-run decline of an industry, such as UK coal and steel.',
      '*Technological* - capital replaces labour, e.g. self-service checkouts, automation.',
      '*International* - offshoring and outsourcing, or households buying imports instead of domestic output.',
      '*Regional* - unemployment concentrated in particular areas as an industry that dominated a region declines.',
      'It is made worse by *occupational immobility* (a mismatch of skills) and *geographical immobility* (family ties, housing costs - moving to London is unaffordable for many).',
    ],
    [
      'This is the most serious type: it can persist through a boom, and it causes hysteresis.',
      'Supply-side policy - retraining, relocation support, improved education - is the appropriate response, but it works over years, not months.',
      'Some structural change is necessary and desirable: it reflects the economy reallocating resources to more productive uses. The problem is the transition, not the change.',
    ],
  ),
  det(
    'Frictional unemployment',
    'Short-term unemployment as people move between jobs.',
    [
      'Time lags between leaving one job and starting another.',
      '*Search unemployment*: people do not take the first job offered, preferring to look for a better match.',
      '*Casual work*: gaps between irregular periods of employment.',
    ],
    [
      'The least serious type, and some is desirable - a better job match raises productivity in the long run.',
      'It falls in a downturn, because workers have less confidence to hold out for a better offer.',
      'Lower relative benefits and better job-matching websites have reduced it in the UK.',
    ],
  ),
  det(
    'Seasonal unemployment',
    'Unemployment at particular times of year when demand for that labour is low.',
    [
      'Agriculture, tourism, construction and retail all have predictable seasonal patterns - fruit pickers, ice cream sellers, ski resort staff.',
    ],
    [
      'Predictable, so both workers and government can plan for it.',
      'Still serious for low-income workers: income arrives for only part of the year but rent and bills are monthly.',
      'It can cause permanent depopulation if skilled workers leave a seasonal region for stable work elsewhere.',
    ],
  ),
  det(
    'Real wage inflexibility (classical unemployment)',
    'Wages held above the market-clearing level create an excess supply of labour.',
    [
      'Trade union power, a national minimum wage set above equilibrium, or generous benefits raising the reservation wage.',
      'At the higher wage, quantity of labour supplied exceeds quantity demanded, and the gap is unemployment.',
    ],
    [
      'In a monopsony labour market the opposite holds: a minimum wage can raise BOTH wages and employment, because it removes the employer’s incentive to restrict hiring.',
      'Empirically, minimum wage rises in the UK have produced much smaller employment effects than the competitive model predicts.',
      'Neoclassical economists argue this is only a short-run problem, since workers would eventually accept lower wages; Keynesians argue wages are sticky downwards and the unemployment persists.',
    ],
  ),

  h('Consequences of unemployment'),
  table(
    ['Consequence', 'Explanation'],
    [
      ['Lower living standards', 'Households live on benefits rather than wages. Unemployment is one of the main causes of poverty.'],
      ['Lost output', 'The economy produces inside its PPF - potential output is permanently foregone, and it cannot be recovered later.'],
      [
        'Lost tax revenue',
        'Less income tax, less VAT from lower spending, less corporation tax. Government must then cut spending, raise taxes or borrow more.',
      ],
      ['Higher benefit spending', 'Spending is diverted to Jobseeker’s Allowance, with an opportunity cost in health or education.'],
      [
        'Pressure on other public services',
        'Unemployment is associated with worse physical and mental health, higher crime and higher family breakdown, raising demands on the NHS, police and housing.',
      ],
      [
        'Hysteresis',
        'Unemployment causes unemployment: skills depreciate, motivation falls, and employers read a long gap as a negative signal. This is why long-term unemployment is so much more damaging than short spells, and why a deep recession lowers LRAS permanently.',
      ],
      ['Costs abroad', 'Lower UK incomes reduce demand for other countries’ exports, and high unemployment drives emigration.'],
    ],
  ),
  h('Are there any benefits?'),
  table(
    ['Benefit', 'Explanation'],
    [
      ['Time to search', 'Frictional unemployment can produce a better job match, raising long-run productivity.'],
      [
        'Lower costs for firms',
        'An abundant labour supply moderates wage demands and makes it easier for expanding firms to recruit.',
      ],
      ['Reduces inflation', 'Spare capacity in the labour market reduces wage pressure and so reduces inflation - the Phillips curve trade-off.'],
    ],
  ),
  diagram('phillips'),
  h('Evaluating: how serious is it?'),
  table(
    ['It depends on', 'Why'],
    [
      ['The rate', 'Around 3% is regarded as full employment - there will always be frictional unemployment as people move jobs.'],
      [
        'The duration',
        '6% with people out of work for two years is far worse than 10% with people out for three months. Beyond a year, re-entry becomes very difficult.',
      ],
      ['The cause', 'Structural is the most damaging (hysteresis, regional decline); frictional is the least.'],
      [
        'The distribution',
        'UK unemployment is regionally concentrated, so it worsens regional inequality and triggers negative regional multiplier effects. Youth unemployment is especially damaging because of scarring effects on lifetime earnings.',
      ],
      ['Benefit provision', 'Generous benefits reduce the human cost but carry an opportunity cost and may raise the reservation wage.'],
    ],
  ),
  h('Is full employment always good?'),
  table(
    ['Consideration', 'Explanation'],
    [
      [
        'Inflation risk',
        'At full employment the economy hits a supply constraint, so further AD growth is purely inflationary - the price stability objective conflicts with the employment objective.',
      ],
      ['Higher costs for firms', 'Recruitment becomes difficult, wages rise, and unions gain bargaining power.'],
      [
        'International competitiveness',
        'Higher incomes raise imports, and if full employment causes inflation, exports lose competitiveness - worsening the current account.',
      ],
      [
        'Quality of employment',
        'Full employment says nothing about whether jobs are well paid, full-time or secure. In-work poverty and underemployment can remain high alongside a low unemployment rate.',
      ],
      [
        'It can raise LRAS',
        'Against all that: labour shortages push firms to train and to invest in labour-saving capital, and higher wages draw people into the labour force - both shift LRAS right, giving non-inflationary growth.',
      ],
    ],
  ),
)

/* =============================================== CIRCULAR FLOW */

const circularFlow = chapter(
  defn(
    'The circular flow of income',
    'A model showing how income, output and expenditure flow between households and firms in an economy.',
  ),
  p(
    'Households supply factors of production to firms and receive factor incomes - wages, rent, interest and profit. They spend that income on the goods and services firms produce. National income, national output and national expenditure are therefore three ways of measuring the same flow, and must be equal.',
  ),
  diagram('circular-flow'),
  h('Injections and withdrawals'),
  table(
    ['Injections (add to the flow)', 'Withdrawals / leakages (remove from the flow)'],
    [
      ['Investment (I)', 'Saving (S)'],
      ['Government spending (G)', 'Taxation (T)'],
      ['Exports (X)', 'Imports (M)'],
    ],
  ),
  p(
    'When injections exceed withdrawals the circular flow expands and national income rises. When withdrawals exceed injections it contracts. In equilibrium, J = W.',
  ),

  h('The multiplier'),
  defn(
    'The multiplier effect',
    'An initial injection into the circular flow leads to a final rise in national income that is GREATER than the injection itself.',
  ),
  p(
    'One person’s spending is another person’s income. An injection is spent, becoming income for someone else, who spends part of it in turn - and so on, in successively smaller rounds.',
  ),
  p('*Multiplier k = 1 ÷ (MPS + MPT + MPM)* - one divided by the sum of the leakages.'),
  p('Equivalently, *k = 1 ÷ (1 − MPC)* where MPC is the marginal propensity to consume domestically produced output.'),
  worked(
    'MPS = 0.2, MPT = 0.2, MPM = 0.1. Calculate the multiplier, and the final change in income from a £10bn injection.',
    'k = 1 ÷ (0.2 + 0.2 + 0.1) = 1 ÷ 0.5 = 2. Final change in income = £10bn × 2 = £20bn.',
  ),
  worked('MPC = 0.75. Calculate the multiplier.', 'k = 1 ÷ (1 − 0.75) = 1 ÷ 0.25 = 4.'),
  diagram('multiplier-effect'),
  det(
    'What makes the multiplier large',
    'A large multiplier means small leakages.',
    [
      'A high MPC - money is re-spent rather than saved. Redistribution towards lower-income households raises the aggregate MPC.',
      'A low MPM - spending stays in the domestic economy rather than buying imports.',
      'A low MPT - less income is withdrawn in tax.',
      'Significant spare capacity, so extra demand raises output rather than prices.',
    ],
    [
      'The UK has a high marginal propensity to import and a substantial tax wedge, so the realistic UK multiplier is small - estimates cluster nearer 1.5 than 3.',
      'Near full capacity the multiplier is much weaker, because extra demand goes into prices rather than real output.',
      'Crowding out reduces it: government borrowing may raise interest rates and displace private investment.',
      'It works in REVERSE too. A withdrawal produces a negative multiplier, which is why spending cuts in a recession are so damaging.',
    ],
  ),
  tip(
    'Whenever a question asks about the effect of any injection - a fiscal stimulus, an investment project, an export order - the multiplier is the evaluation. State its size, name the leakages that determine it, and say whether spare capacity exists.',
  ),
)

/* ============================================ ECONOMIC GROWTH */

const economicGrowth = chapter(
  defn('Economic growth', 'An increase in the real value of goods and services produced in an economy - a rise in real GDP.'),
  defn('Actual growth', 'An increase in real output - moving from inside the PPF towards it, or shifting AD right.'),
  defn(
    'Potential growth',
    'An increase in the economy’s productive CAPACITY - shifting the PPF or LRAS outward. Capacity to produce, whether or not it is used.',
  ),
  diagram('ppf-shift'),
  diagram('output-gap'),
  h('Measuring growth'),
  table(
    ['Measure', 'What it means'],
    [
      ['Real GDP', 'GDP adjusted for inflation, so it measures volume rather than price changes.'],
      ['Nominal GDP', 'GDP at current prices - rises with inflation even if nothing more is produced.'],
      ['GDP per capita', 'Real GDP ÷ population. Better for living standards, since a country can grow by adding people without anyone being better off.'],
      ['GNI', 'Gross National Income - includes income earned abroad by residents and excludes income earned domestically by foreigners. Matters where FDI or remittances are large.'],
      ['PPP-adjusted', 'Adjusts for differences in the cost of living, so international comparisons reflect what income actually buys.'],
    ],
  ),
  tip(
    'For living standards always argue in terms of real GDP per capita at PPP. Each adjustment removes a specific distortion: real removes inflation, per capita removes population, PPP removes price-level differences.',
  ),
  h('Causes of growth'),
  det(
    'Short-run (actual) growth: AD',
    'Anything that shifts AD right raises real output when there is spare capacity.',
    ['Rises in C, I, G or (X − M), amplified by the multiplier.'],
    [
      'Only possible if spare capacity exists; at full capacity the effect is purely inflationary.',
      'Demand-led growth is not sustainable indefinitely - it uses up existing capacity rather than creating new capacity.',
    ],
  ),
  det(
    'Long-run (potential) growth: LRAS',
    'Growth in the quantity or quality of factors of production.',
    [
      'More labour - population growth, migration, higher participation.',
      'More capital - net investment above depreciation, and infrastructure.',
      'Better human capital - education and training raising productivity.',
      'Technological progress - the main driver of long-run growth, because it raises total factor productivity rather than just adding inputs.',
      'Discovery of natural resources.',
      'Improved institutions - property rights, rule of law, political stability.',
    ],
    [
      'Long lags: education takes a generation to reach the workforce.',
      'Diminishing returns to capital mean accumulation alone cannot sustain growth indefinitely - technology is required.',
      'Natural resource discoveries can cause the "resource curse": currency appreciation damaging other exports (Dutch disease), plus corruption and volatility.',
    ],
  ),
  diagram('lras-shift'),
  h('Benefits of growth'),
  table(
    ['Benefit', 'Explanation'],
    [
      ['Higher living standards', 'More goods and services per person; growth is historically the most powerful force for reducing absolute poverty.'],
      ['Employment', 'Rising output raises derived demand for labour, cutting cyclical unemployment.'],
      ['Fiscal position', 'Higher incomes and profits raise tax revenue while lowering benefit spending, improving the budget balance without any change in rates.'],
      ['Investment and the accelerator', 'Growth raises business confidence and profits, which raises investment and so raises future capacity.'],
      ['Better public services', 'Higher tax revenue funds health and education, which in turn raise human capital and future growth.'],
      ['Environmental capacity', 'Richer countries can afford cleaner technology - the argument behind the environmental Kuznets curve.'],
    ],
  ),
  h('Costs of growth'),
  table(
    ['Cost', 'Explanation'],
    [
      [
        'Inflation',
        'Demand-led growth near capacity causes demand-pull inflation, threatening the price stability objective.',
      ],
      ['Current account deficit', 'Higher incomes raise import demand, worsening the trade balance.'],
      [
        'Inequality',
        'The gains are rarely shared evenly; growth driven by capital or high-skill sectors can raise inequality even as average income rises.',
      ],
      [
        'Environmental damage',
        'Negative externalities from production and consumption - pollution, congestion, resource depletion, emissions. GDP counts the output but not the external cost.',
      ],
      ['Resource depletion', 'Growth based on finite resources is not sustainable; it borrows from future output.'],
      ['Non-material costs', 'Longer hours and greater work intensity may reduce wellbeing even as measured output rises - the Easterlin paradox.'],
    ],
  ),
  h('Evaluating growth'),
  table(
    ['It depends on', 'Why'],
    [
      ['The type', 'Export-led or investment-led growth is more sustainable than growth built on consumer borrowing.'],
      ['Whether it is actual or potential', 'Only potential growth raises the long-run ceiling; actual growth just uses existing slack.'],
      ['Distribution', 'Growth that accrues entirely to the top decile does little for living standards or poverty.'],
      ['Sustainability', 'Growth that depletes natural capital raises current output at the cost of future output.'],
      ['The starting point', 'From a deep recession, growth is almost entirely beneficial; near capacity, the inflation cost dominates.'],
    ],
  ),
)

/* ========================================== MACRO OBJECTIVES */

const macroObjectives = chapter(
  p('The UK government pursues four main macroeconomic objectives, plus several secondary ones.'),
  table(
    ['Objective', 'Target / measure'],
    [
      ['Price stability', 'CPI inflation of 2%, symmetric - the Bank must write to the Chancellor if it misses by more than 1pp either way.'],
      ['Sustainable economic growth', 'Steady real GDP growth without inflation or unsustainable imbalances; UK trend growth is roughly 2%.'],
      ['Full employment / low unemployment', 'Around 3% - the level at which only frictional and some structural unemployment remains.'],
      ['A satisfactory balance of payments', 'A current account deficit small enough to be sustainably financed.'],
    ],
  ),
  p('*Secondary objectives:* balanced government budget, greater income equality, environmental protection, and improved productivity.'),

  h('Conflicts between objectives'),
  det(
    'Growth vs inflation',
    'Demand-led growth near full capacity causes demand-pull inflation.',
    [
      'AD rises → the economy moves up the AS curve → the price level rises.',
      'The nearer to capacity, the more of the shift goes into prices rather than output.',
    ],
    [
      'No conflict when there is significant spare capacity - output rises with almost no price effect.',
      'No conflict for SUPPLY-side growth: an LRAS shift raises output AND lowers the price level, achieving both objectives at once. This is the central argument for supply-side policy.',
    ],
  ),
  det(
    'Unemployment vs inflation',
    'The short-run Phillips curve: reducing unemployment raises inflation and vice versa.',
    [
      'Lower unemployment raises workers’ bargaining power, so money wages rise, costs rise and prices rise.',
      'This constrains the MPC directly: tightening to hit the 2% target raises unemployment.',
    ],
    [
      'The long-run Phillips curve is vertical at the natural rate, so there is no permanent trade-off - attempting to hold unemployment below NAIRU produces accelerating inflation.',
      'Supply-side policy lowers the natural rate, improving both objectives together.',
      'A cost-push shock worsens BOTH at once - stagflation - so the relationship is not even a stable trade-off.',
      'The Phillips curve has flattened since the 1990s as expectations became well anchored.',
    ],
  ),
  diagram('phillips'),
  det(
    'Growth vs the current account',
    'Faster domestic growth worsens the current account.',
    [
      'Rising incomes raise import demand, particularly given the UK’s high marginal propensity to import.',
      'Firms may divert output from export markets to the buoyant domestic market.',
    ],
    [
      'Export-led growth improves both simultaneously.',
      'A current account deficit is not automatically a problem if it is financing investment rather than consumption, and if it can be financed by capital inflows.',
    ],
  ),
  det(
    'Growth vs the environment',
    'Higher output raises emissions, congestion and resource depletion.',
    [
      'Production and consumption both generate negative externalities that GDP does not subtract.',
    ],
    [
      'The environmental Kuznets curve suggests pollution rises then FALLS with income, as richer countries can afford cleaner technology and demand stricter regulation.',
      'Green growth - growth in renewables and efficiency - raises output while cutting emissions, so the conflict is not inevitable.',
    ],
  ),
  det(
    'Growth vs equality',
    'Growth does not automatically reduce inequality and may increase it.',
    [
      'Returns may accrue to capital owners and high-skill workers rather than being shared.',
      'Trickle-down is contested empirically.',
    ],
    [
      'Growth raises tax revenue, which can fund redistribution - so the conflict depends on fiscal policy, not on growth itself.',
      'Growth is the strongest historical force for reducing ABSOLUTE poverty even where it raises RELATIVE inequality. Which measure the question asks about decides the answer.',
    ],
  ),
  det(
    'Fiscal balance vs everything else',
    'Reducing a budget deficit conflicts with growth and employment in the short run.',
    [
      'Spending cuts or tax rises reduce AD directly, and the negative multiplier amplifies the fall.',
      'This is the austerity debate: consolidating in a downturn deepens the downturn and may not even reduce the debt ratio, since GDP falls too.',
    ],
    [
      'Deficit reduction in a boom is much less costly, so timing matters more than the policy itself.',
      'High debt raises interest costs and reduces future fiscal space, so indefinite deficits carry their own risk.',
    ],
  ),
  tip(
    'For any policy question, the reliable evaluation is: which objective does this help, which does it harm, and what would remove the conflict? The answer is almost always supply-side policy, because an LRAS shift is the only move that improves growth, employment, inflation and competitiveness simultaneously.',
  ),
)

export const ECON_THEME2B_NOTES = {
  Inflation: inflation,
  'Employment and Unemployment': unemployment,
  'The Circular Flow of Income and the Multiplier': circularFlow,
  'Economic Growth': economicGrowth,
  'Macroeconomic Objectives': macroObjectives,
}
