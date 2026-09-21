/*
  Developed answers for Paper 2 (9EC0/02, The National and Global Economy),
  Q031-Q052. Section B questions carry 8, 10, 12 or 15 marks; Section C
  essays carry 25. Same shape and scaling as econ-essay-answers-as.js.
*/

const A = (diagrams, intro, rows, conclusion, kaa, evaluation) => ({
  diagrams,
  intro,
  rows,
  conclusion,
  markScheme: { kaa, evaluation },
})

export const ECON_ESSAY_ANSWERS_P2 = {
  Q031: A(
    [
      [
        'lorenz-curve',
        'A Lorenz curve bowed well below the line of equality. Two countries can have the same real GDP per capita with very different curves; the diagram shows why an average hides the distribution.',
      ],
    ],
    'Real GDP is the inflation-adjusted value of all goods and services produced in an economy in a year. Divided by population it gives an average income, which is the most common measure of the standard of living. It is an incomplete one: it says nothing about how income is distributed and it omits much of what determines welfare, from unpaid work and leisure to environmental quality and the composition of output.',
    [
      [
        'Real GDP per capita is an average, so it hides distribution. Two countries with the same GDP per head can have very different living standards for the typical household if in one the income is concentrated among a small elite. The Lorenz curve makes this visible: the further it bows from the line of equality, the less the average tells us about the median household. Resource-rich economies such as Equatorial Guinea have high GDP per capita alongside widespread poverty, and within the UK, rising GDP since 2008 coincided with stagnant median real wages. A rise in real GDP can therefore leave most people no better off.',
        'The limitation can be partly corrected by using median income, or by reading GDP alongside the Gini coefficient and poverty rates, which is what the ONS and international agencies do. GDP remains the base to which those adjustments are applied; distribution is a supplement to it rather than a substitute.',
      ],
      [
        'GDP counts only market output and counts it regardless of what it is. Unpaid childcare, housework and voluntary work add to welfare but not to GDP, while spending on prisons, pollution clean-up and rebuilding after floods adds to GDP without raising welfare. GDP ignores leisure: a country that works longer hours records higher output but its people may be worse off. It ignores the quality of goods and services, the state of the environment, health and life expectancy, all of which matter for living standards. This is why the Human Development Index combines income with education and health, and why measures of subjective well-being are collected alongside GDP.',
        'Across countries and over long periods GDP per capita correlates strongly with life expectancy, education and reported well-being, so it is a reasonable proxy for most purposes. The alternatives have limitations of their own - the HDI weights its components arbitrarily and well-being surveys are hard to compare - which is why GDP has not been replaced.',
      ],
    ],
    null,
    [
      'Definition of real GDP and real GDP per capita',
      'Limitation 1: an average that ignores the distribution of income, with a Lorenz curve',
      'Limitation 2: excludes non-market activity, leisure, quality and environmental costs; counts defensive spending',
      'Application: examples where GDP and living standards diverge',
      'Alternative measures: HDI, median income, well-being',
    ],
    [
      'Distribution measures can be read alongside GDP',
      'GDP correlates well with other indicators of living standards over time',
      'Alternative measures have their own weaknesses',
    ],
  ),

  Q032: A(
    [
      [
        'ad-as',
        'Two cases on one AD/AS framework: inflation falling because SRAS shifts right (lower costs - output rises, benign) and inflation falling because AD shifts left (recession - output falls). Which one applies decides the answer.',
      ],
      [
        'phillips',
        'The short-run Phillips curve: moving to lower inflation by squeezing demand means moving to higher unemployment. Use it to show the cost of disinflation.',
      ],
    ],
    'Inflation is a sustained rise in the general price level, measured in the UK mainly by the Consumer Prices Index (CPI): the cost of a fixed, weighted basket of goods and services bought by a typical household, tracked over time and reported as a percentage change. The Retail Prices Index (RPI) is an older alternative that also includes housing costs such as mortgage interest and council tax, which tends to make it run higher than CPI, and it is still used for some index-linked payments even though it is no longer the Bank of England’s target measure. A fall in the RATE of inflation means prices are rising more slowly, not falling. Lower inflation protects real incomes, improves competitiveness and reduces uncertainty, which is why the Bank of England targets 2% on the CPI measure. But whether a fall is beneficial depends on why it happened, on where inflation started and on how far it falls - a slide towards deflation carries costs of its own.',
    [
      [
        'Lower inflation brings clear gains. Real incomes are protected, particularly for those on fixed incomes and savers whose interest no longer lags prices. Firms face lower menu costs and less uncertainty, so they can plan investment with more confidence, and lower inflation relative to trading partners improves the price competitiveness of exports. Inflation expectations fall, which reduces wage demands and makes future inflation easier to control, and the central bank can hold interest rates lower, supporting growth. The fall in UK inflation from over 11% in late 2022 to around target by 2024 restored real wage growth after two years of decline.',
        'The benefits depend on the cause. If inflation falls because costs have eased - energy prices, supply chains - output rises at the same time and the fall is unambiguously good. If it falls because aggregate demand has collapsed, it comes with recession and unemployment, and the lower inflation is a symptom of weakness rather than a benefit.',
      ],
      [
        'Bringing inflation down deliberately has costs. Higher interest rates reduce consumption and investment, and on the short-run Phillips curve lower inflation is bought with higher unemployment; the early 1980s and early 1990s disinflations in the UK both involved deep recessions. If inflation falls too far, deflation sets in: consumers postpone purchases expecting lower prices, the real burden of debt rises for households, firms and the government, and real interest rates rise even at zero nominal rates, deepening the slump - Japan’s experience for two decades. A fall from 2% to 0% is not beneficial; a fall from 10% to 2% is.',
        'The cost of disinflation depends on credibility. Where a central bank is trusted, expectations adjust quickly and inflation can fall with little loss of output; where it is not, the Phillips-curve cost is larger. Deflation is a risk only when inflation is already low and demand is weak, so the argument applies to a minority of cases.',
      ],
      [
        'Falling inflation redistributes. Borrowers, who gain from inflation eroding their debts, lose; savers and lenders gain. Government debt is worth more in real terms, so falling inflation raises the real burden of public debt. Workers whose wages were negotiated on higher expected inflation see their real pay rise, which squeezes profits and can cost jobs. Whether these transfers are beneficial depends on who holds the assets and liabilities and on whether the change was anticipated, so the same fall in inflation is good for some groups and bad for others.',
        'Most of these effects are small for modest changes in inflation and are the mirror image of what rising inflation did earlier. Over the medium term what matters is stability: an economy that has adjusted to 2% suffers from a fall to 0% almost as much as from a rise to 4%.',
      ],
    ],
    'A fall in inflation is beneficial when inflation was above target and the fall comes from lower costs or a credible policy that does not sacrifice much output: real incomes, competitiveness and certainty all improve. It is not always beneficial. A fall caused by collapsing demand signals recession, a fall achieved through severe monetary tightening costs jobs, and a fall below target towards deflation raises real debt burdens and delays spending. The judgement depends on the starting rate, the cause and the size of the fall: from high inflation towards target, yes; from low inflation towards zero, no.',
    [
      'Definition of inflation, measured by the CPI (a weighted basket of goods and services) with RPI as an older alternative; a fall in its rate and the 2% target',
      'Benefits: real incomes, competitiveness, certainty, investment, expectations',
      'AD/AS diagram distinguishing cost-driven from demand-driven falls',
      'Costs of disinflation: Phillips curve, unemployment, lost output',
      'Deflation risks: postponed spending, real debt burden, real interest rates',
      'Redistribution between borrowers and savers; real wages and profits',
    ],
    [
      'Depends on the cause: cost easing versus demand collapse',
      'Depends on the starting point and how far inflation falls',
      'Credibility of the central bank reduces the cost of disinflation',
      'Distributional effects vary by group',
      'Judgement: beneficial towards target, harmful towards deflation',
    ],
  ),

  Q033: A(
    [
      [
        'exchange-rate',
        'The sterling market with demand for pounds falling (or supply rising), lowering the exchange rate from £1 = $1.40 to £1 = $1.25, say. The depreciation is the starting point for both chains.',
      ],
      [
        'j-curve',
        'The J-curve: the trade balance worsens first because volumes respond slowly while import prices rise at once, then improves as elasticities rise over time. It qualifies the net export chain.',
      ],
    ],
    'A depreciation is a fall in the value of the pound against other currencies in a floating system. It makes UK exports cheaper in foreign currency and imports dearer in sterling, so its main effect on aggregate demand is through net exports, which are a component of AD. There are secondary effects on consumption and investment through inflation and costs, and the size and timing of the overall impact depend on elasticities and on the state of the world economy.',
    [
      [
        'When the pound falls, a UK export priced at £100 costs a foreign buyer fewer dollars or euros, so demand for exports extends and export volumes rise. An import priced in dollars costs more pounds, so UK consumers and firms switch to domestic substitutes and import volumes fall. Net exports (X - M) rise, and because they are a component of AD, the AD curve shifts to the right, raising real output and employment. The effect is multiplied as export earnings are spent domestically. After the pound fell by around 10% following the 2016 referendum, UK exporters’ margins and volumes in some sectors improved.',
        'The Marshall-Lerner condition must hold: net exports improve only if the sum of the price elasticities of demand for exports and imports exceeds one. In the short run demand is inelastic because contracts and habits take time to change, so the trade balance can worsen before it improves - the J-curve. The rise in AD may therefore be small and delayed, and depends on the strength of demand in the UK’s export markets.',
      ],
      [
        'A depreciation also works against AD through prices. Imported goods, energy and raw materials cost more in sterling, so the price level rises; after 2016 UK inflation rose above target largely for this reason. Higher prices reduce real incomes and consumption, and firms that rely on imported components face higher costs, which can reduce investment. If the Bank of England responds to the inflation with higher interest rates, consumption and investment fall further. The net effect on AD is the rise in net exports minus these dampening effects on the domestic components.',
        'The balance depends on the cause and size of the depreciation and on what else is happening. A depreciation driven by a loss of confidence, as in 2016 or September 2022, may reduce investment more than it raises exports. A large share of UK exports are services and high-value goods whose demand is relatively price insensitive, which limits the gain, while the UK’s high import dependence magnifies the inflation effect.',
      ],
    ],
    null,
    [
      'Definition of depreciation; AD and its components',
      'Exports cheaper abroad and imports dearer at home; net exports rise; AD shifts right, with a diagram',
      'Multiplier effect from higher export earnings',
      'Import-price inflation reducing real incomes and consumption; higher costs for firms',
      'Marshall-Lerner condition and the J-curve',
    ],
    [
      'Short-run inelasticity and time lags; the J-curve',
      'Depends on world demand and on the composition of UK exports',
      'Depends on the cause and size of the depreciation; confidence effects',
      'Possible interest-rate response to higher inflation',
    ],
  ),

  Q034: A(
    [
      [
        'ad-shift',
        'AD shifting right as investment rises. Investment is the most volatile component of AD, and the diagram frames the question: what moves it?',
      ],
      [
        'monetary-transmission',
        'The interest-rate channel to investment: lower rates, lower cost of borrowing, more projects with a positive return. This is the main rival to confidence as a determinant.',
      ],
    ],
    'Investment is spending by firms on capital goods - buildings, machinery, software - that adds to the capital stock. It is the most volatile component of aggregate demand. Its determinants include interest rates, business confidence, expected demand and the accelerator, access to finance, corporate taxation, technology and regulation. Keynes argued that confidence - “animal spirits” - dominates because investment depends on expectations of an uncertain future; the question is whether that remains the most significant influence.',
    [
      [
        'Investment is a bet on future revenue that will not arrive for years, so it depends on how firms expect the future to look. When confidence is high, firms expect demand to grow, projects appear profitable and investment rises; when it falls, the same projects look risky and are shelved regardless of their cost. This is why investment swings far more than consumption over the cycle: it collapsed by around a fifth in the UK during 2008-09 and stagnated between 2016 and 2019 while firms waited for the terms of Brexit to become clear, despite interest rates near zero. Surveys of business confidence are among the best predictors of investment a year ahead, and no other determinant explains its volatility as well.',
        'Confidence is not an independent cause; it is a summary of firms’ expectations about demand, costs, policy and competition. Saying investment depends on confidence often restates that it depends on expected profitability. The determinants that shape expectations - the state of demand, interest rates, political stability - may be the more fundamental influences.',
      ],
      [
        'Interest rates and expected demand are the two determinants classical and Keynesian theory agree on. A lower interest rate reduces the cost of borrowing and the opportunity cost of using retained profit, so more projects clear the required rate of return and investment rises; this is the channel monetary policy relies on. The accelerator links investment to the rate of change of output: firms invest to expand capacity when demand is growing, so a slowdown in growth cuts investment even before output falls. Both operate through profitability, and both are measurable in a way confidence is not.',
        'The evidence for the interest-rate channel is weaker than the theory. Rates near zero after 2009 did not produce an investment boom, and firms report that they respond mainly to expected demand and uncertainty rather than to the cost of finance, which suggests the accelerator and confidence matter more than the interest rate. Large firms with retained profits are especially insensitive to borrowing costs.',
      ],
      [
        'Other determinants matter for particular firms and periods. Corporation tax and capital allowances change the after-tax return; the 2021-23 super-deduction brought investment forward. Access to finance constrains small firms even when large ones are flush. Technological change creates new investment opportunities - the shift to digital and to renewable energy - regardless of the cycle, and regulation and planning rules affect whether projects can proceed. Which determinant is most significant therefore varies: for a start-up it is finance, for an energy company it is regulation, for a retailer it is expected demand.',
        'These factors are often channelled through confidence as well - a stable tax regime and predictable regulation raise it, sudden changes lower it - which supports rather than undermines the view. The distinction between confidence and its causes is partly one of labels.',
      ],
    ],
    'Business confidence is a highly significant determinant of investment, and for explaining its volatility over the cycle it is probably the most significant: the collapse in 2008-09 and the stagnation after 2016 are not explained by interest rates or tax. But confidence is largely a reflection of expected demand and of the stability of policy, and over the longer run those underlying determinants, together with the cost and availability of finance and technological opportunity, decide the level of investment. Confidence is therefore the most significant determinant of short-run swings in investment, but to say it is the most significant determinant overall overstates a factor that is itself determined by the others.',
    [
      'Definition of investment and its place in AD; its volatility',
      'Determinants: interest rates, confidence, expected demand and the accelerator, finance, tax, technology, regulation',
      'Keynes’s animal spirits; why expectations dominate a decision about the future',
      'Application: 2008-09, 2016-19 Brexit uncertainty, super-deduction',
      'Interest-rate channel with a diagram; the accelerator',
      'Variation across firms and sectors',
    ],
    [
      'Confidence is a summary of other determinants rather than an independent cause',
      'Interest-rate channel weaker in practice than in theory',
      'Different determinants dominate for different firms and periods',
      'Short-run volatility versus long-run level of investment',
      'Judgement: most significant for short-run swings, not overall',
    ],
  ),

  Q035: A(
    [
      [
        'lras-shift',
        'LRAS shifting right as productivity rises, with real output rising and the price level falling at a given AD. Label the shift as an increase in productive potential.',
      ],
    ],
    'Labour productivity is output per worker or per hour worked. Long-run aggregate supply is the economy’s productive potential, determined by the quantity and quality of its factors of production. A rise in productivity means the existing labour force can produce more, so it shifts LRAS to the right and lowers unit costs, allowing growth without inflation.',
    [
      [
        'If each worker produces more per hour, the same labour force yields a larger total output, so the maximum output the economy can produce rises: LRAS shifts right from LRAS1 to LRAS2. Unit labour costs fall, since the same wage now buys more output, which shifts SRAS right as well. At a given level of AD, real output rises and the price level falls, so the economy can grow without demand-pull inflation and can support higher real wages without raising costs. Higher productivity also improves international competitiveness, raising exports. The UK’s slow productivity growth since 2008 is the main reason its trend growth rate has fallen.',
        'The size of the shift depends on how widespread the productivity gain is. A rise concentrated in one sector, such as finance, moves the aggregate little, and productivity gains achieved by shedding the least productive workers raise output per worker without raising total output - LRAS does not shift if the released labour is not re-employed.',
      ],
      [
        'Productivity gains raise profitability, which funds further investment in capital and technology, and higher real wages raise the return to acquiring skills. Both reinforce the initial shift, so a sustained rise in productivity can raise the trend rate of growth rather than simply moving LRAS once. Firms that produce more per worker can also expand into export markets, which brings economies of scale and a further fall in unit costs.',
        'These second-round effects take years and depend on investment actually taking place. Productivity gains from new technology can also displace workers faster than new jobs appear, so in the short run unemployment may rise before LRAS gains are realised in higher output.',
      ],
    ],
    null,
    [
      'Definition of labour productivity and of LRAS',
      'Higher output per worker raises productive potential; LRAS shifts right, with a diagram',
      'Lower unit costs; lower price level; non-inflationary growth',
      'Competitiveness and exports',
      'Reinforcing effects through investment and wages',
    ],
    [
      'Depends on how widespread the gain is across sectors',
      'Productivity from labour shedding does not raise total output',
      'Time lags and short-run displacement of labour',
    ],
  ),

  Q036: A(
    [
      [
        'lras-shift',
        'LRAS shifting right as supply-side policies raise productive potential: higher output at a lower price level. This is the case for the view.',
      ],
      [
        'ad-shift',
        'AD shifting right along a Keynesian AS curve with spare capacity: output rises with little inflation. This is the case that demand-side policy is the faster route when the economy is below capacity.',
      ],
    ],
    'Economic growth is an increase in real GDP; sustained growth requires an increase in productive potential, shown by a rightward shift of LRAS. Supply-side policies aim to do exactly that, through market-based measures such as tax cuts, deregulation and labour-market reform, or interventionist measures such as spending on education, training and infrastructure. Demand-side policies raise growth in the short run by shifting AD. Which is more effective depends on whether the constraint on growth is capacity or demand, and on the time horizon.',
    [
      [
        'Only supply-side policies raise long-run growth. Investment in infrastructure lowers costs for every firm that uses it; education and training raise the productivity of labour; lower corporation tax and capital allowances raise investment; competition policy and deregulation force firms to be efficient; welfare and tax reform increase the incentive to work. Each shifts LRAS to the right, so output can rise without inflation and the trend rate of growth increases. The UK’s central economic problem since 2008 has been weak productivity, which is a supply-side problem, and no amount of demand stimulus can fix a shortage of skilled workers or an inadequate transport network. Supply-side policy addresses the cause.',
        'Supply-side policies are slow, expensive and uncertain. Education reforms take a generation to raise productivity; infrastructure takes a decade to build; tax cuts may be saved rather than invested and cost revenue. Market-based measures such as weaker employment protection can raise growth at the cost of inequality and insecurity, and interventionist measures depend on the government choosing the right projects. Their effect is large in principle but hard to deliver in practice.',
      ],
      [
        'When the economy has spare capacity, demand-side policy is faster and more certain. In a recession with a negative output gap, cutting interest rates or raising government spending shifts AD to the right and output rises quickly with little inflation, because idle workers and machines are put back to use; the 2020 furlough scheme and rate cuts prevented a far deeper collapse. Supply-side reforms in a recession add to capacity that is already unused. Growth also needs demand to make use of new capacity: firms will not invest in the extra output supply-side policies make possible unless they expect to sell it.',
        'Demand-led growth is limited by capacity. Once the output gap closes, further stimulus produces inflation and a current account deficit rather than real growth, as the late 1980s boom showed. Demand-side policy can restore output to trend but cannot raise the trend itself, so it is effective for recovering from recessions rather than for raising the long-run growth rate.',
      ],
      [
        'The two are complements rather than rivals. Infrastructure spending is both a demand injection now and a supply-side gain later; a stable macroeconomic environment created by demand management makes firms more willing to undertake the investment that supply-side incentives encourage. The right mix depends on the diagnosis: if growth is low because demand is deficient, demand policy is more effective; if it is low because productivity is stagnant, supply-side policy is the only route. The UK after 2010 arguably had both problems and used demand policy too little and supply-side policy too inconsistently.',
        'Supply-side policies can conflict with each other and with other objectives: tax cuts reduce the revenue needed for education and infrastructure, and deregulation can worsen market failures. Their effectiveness depends on coherence and on being sustained across governments, which is politically difficult.',
      ],
    ],
    'Supply-side policies are the most effective way of raising the long-run rate of economic growth, because only they shift productive potential; demand-side policy can restore output to trend but not raise the trend. The view is nonetheless overstated as a general rule: supply-side measures are slow and uncertain, demand-side policy is more effective for closing an output gap, and new capacity is only used if demand grows with it. The most effective strategy combines the two, with supply-side policy as the foundation for sustained growth and demand management to keep the economy close to its potential while the foundation is built.',
    [
      'Definition of economic growth and of supply-side policies; market-based and interventionist',
      'Supply-side policies shifting LRAS: infrastructure, education, tax, deregulation, with a diagram',
      'Non-inflationary growth and the trend rate',
      'Demand-side policies shifting AD; spare capacity and the output gap, with a diagram',
      'Application: UK productivity since 2008, 2020 pandemic response',
      'Complementarity of the two approaches',
    ],
    [
      'Time lags, cost and uncertainty of supply-side policies',
      'Demand-side policy faster when there is spare capacity, but limited by capacity',
      'Depends on the cause of low growth: demand deficiency versus weak productivity',
      'Conflicts between supply-side measures and other objectives',
      'Judgement: most effective for long-run growth, but needs demand alongside',
    ],
  ),

  Q037: A(
    [
      [
        'multiplier-effect',
        'The rounds of spending from an injection, with a larger share passed on each round when the propensity to save is lower. Show that the total rise in income is bigger for the same injection.',
      ],
    ],
    'The marginal propensity to save is the fraction of an additional pound of income that households save rather than spend. The multiplier is the ratio of the final change in national income to the initial change in spending: k = 1/MPW, where the marginal propensity to withdraw is the sum of the propensities to save, tax and import. A fall in MPS reduces withdrawals, raises the multiplier and, by raising consumption, raises national income.',
    [
      [
        'If households save less of each extra pound, they spend more of it, so the marginal propensity to consume rises and each round of the multiplier passes on a larger share of income. Suppose MPS falls from 0.2 to 0.1 with the marginal propensity to tax (MPT) and the marginal propensity to import (MPM) unchanged at 0.2 and 0.2: MPW falls from 0.6 to 0.5 and the multiplier ratio rises from 1/0.6 = 1.67 to 1/0.5 = 2. Any injection - investment, government spending, exports - now raises national income by more than before. A £10 billion injection that previously raised income by £16.7 billion now raises it by £20 billion, and a given injection creates more employment.',
        'In an open economy with income tax, saving is only one of three withdrawals, and for the UK imports are the largest. A change in MPS therefore moves the multiplier less than the closed-economy formula suggests, and the multiplier remains modest whatever happens to saving.',
      ],
      [
        'A fall in MPS also raises consumption directly at the existing level of income, since households spend a larger share of what they already earn. Consumption is the largest component of AD, so AD shifts right and national income rises; that rise is then multiplied through the further rounds. After the pandemic, UK households ran down the savings accumulated in lockdown, which supported consumption and growth in 2021-22.',
        'Higher consumption raises real national income only if the economy has spare capacity; near full employment the extra spending raises prices instead. Over the longer term, lower saving means less finance for investment, which can lower the growth of productive potential - the paradox that what raises income now may reduce it later.',
      ],
    ],
    null,
    [
      'Definition of MPS and of the multiplier; k = 1/MPW',
      'Lower MPS raises MPC and the multiplier; numerical illustration',
      'Larger effect on national income from any injection, with a diagram',
      'Direct rise in consumption shifting AD right',
    ],
    [
      'Saving is one of several withdrawals; imports dominate in the UK',
      'Depends on spare capacity',
      'Lower saving may reduce investment and long-run growth',
    ],
  ),

  Q038: A(
    [
      [
        'circular-flow',
        'The circular flow with injections (investment, government spending, exports) and withdrawals (saving, taxation, imports). National income rises when injections exceed withdrawals; this sets up the first chain.',
      ],
      [
        'ad-shift',
        'AD shifting right from an injection, drawn against an AS curve with spare capacity on the left and full capacity on the right - output rises in the first case, prices in the second.',
      ],
    ],
    'The circular flow of income shows money moving between households and firms; injections - investment, government spending and exports - add to the flow while withdrawals - saving, taxation and imports - remove from it. National income is a FLOW, measured over a period of time, and should not be confused with wealth, which is a STOCK of assets held at a point in time: a country can have a high stock of accumulated wealth while its current flow of income grows slowly, or vice versa. When injections exceed withdrawals, national income rises until withdrawals, which depend on income, catch up: the level at which the two are equal, so there is no further tendency to change, is the EQUILIBRIUM level of real national output, shown on an AD/AS diagram as the point where AD meets AS. An increase in injections therefore raises AD and, with spare capacity, raises real output, which is economic growth in the short run. Whether it produces sustained growth depends on the response of withdrawals, on capacity and on what kind of injection it is.',
    [
      [
        'An increase in injections raises spending in the circular flow directly: an extra £10 billion of exports is income for exporting firms, which pay it to households as wages and profits. Households spend most of it, creating further income, and the multiplier converts the injection into a larger rise in national income. Aggregate demand shifts to the right, and if the economy has spare capacity firms meet the extra demand by raising output and hiring, so real GDP grows. This is the Keynesian route out of recession, and it is how the 2009 and 2020 stimulus packages worked.',
        'Withdrawals rise with income. As national income grows, households save and pay more tax and buy more imports, so the injection is progressively leaked away; equilibrium returns when the extra withdrawals equal the extra injection. If the injection has a high import content - government spending on foreign-built equipment, say - much of it leaks out in the first round and the rise in domestic income is small.',
      ],
      [
        'The effect on real output depends on the economy’s position relative to capacity. With a negative output gap, the rightward shift in AD raises output with little effect on prices. At or near full capacity the AS curve is steep, so the same injection raises the price level rather than output: nominal income rises but real income does not. Growth from injections is therefore limited to closing the output gap; once closed, further injections are inflationary. Sustained growth requires capacity to grow as well, which only investment among the injections provides.',
        'The classical view holds that LRAS is vertical, so injections have no lasting effect on real output; the Keynesian view allows spare capacity to persist. Which applies depends on the state of the economy at the time: in 2009 injections raised output, in 2022 further stimulus would have raised inflation.',
      ],
      [
        'The type of injection matters. Investment raises AD now and, by adding to the capital stock, raises LRAS later, so it generates growth in both the short and the long run. Government current spending and transfer payments raise AD without adding to capacity; if financed by borrowing they raise the deficit and may crowd out private investment through higher interest rates. Export growth depends on world demand and competitiveness rather than domestic policy, and it can reverse. An increase in injections leads to sustained growth mainly when it takes the form of productive investment.',
        'Even investment produces growth only if it is productive and eventually matched by demand for the extra output. Injections financed by debt are sustainable only if the growth they generate raises future tax revenue; otherwise the withdrawals required to service the debt reduce future income. Time lags mean the growth effect may arrive when it is no longer wanted.',
      ],
    ],
    'An increase in injections leads to economic growth to a large extent in the short run when the economy has spare capacity: national income rises by a multiple of the injection as it circulates, and real output and employment grow. The extent is limited by withdrawals, which leak the injection away and are large in an open economy, and by capacity, beyond which injections raise prices rather than output. Sustained growth follows only when the injection is investment that expands productive potential. Injections are therefore a reliable source of short-run growth and a conditional source of long-run growth.',
    [
      'Circular flow of income; injections and withdrawals defined, with a diagram',
      'Injections exceeding withdrawals raise national income; the multiplier',
      'AD shifting right; real output rising with spare capacity, with a diagram',
      'Withdrawals rising with income to restore equilibrium; import content',
      'Capacity constraint: inflation at full employment',
      'Type of injection: investment versus current spending versus exports',
    ],
    [
      'Withdrawals limit the rise in income; open-economy leakages',
      'Depends on the output gap; classical versus Keynesian LRAS',
      'Only investment raises long-run capacity',
      'Financing, crowding out and sustainability',
      'Judgement: short-run growth likely, long-run growth conditional on investment',
    ],
  ),

  Q039: A(
    [
      [
        'output-gap',
        'Actual output below trend output over part of the cycle - the negative output gap. The size of the gap is the shortfall in demand that leaves workers unemployed.',
      ],
      [
        'ad-as',
        'AD to the left of the full-employment level of output on a Keynesian AS curve. The horizontal distance to full-employment output is the negative output gap, and the unemployment it causes is demand-deficient.',
      ],
    ],
    'ACTUAL growth is the change in real GDP actually recorded; POTENTIAL growth is the change in the economy’s productive capacity, shown by an outward shift of the PPF or LRAS. Actual output moves around that trend of potential output in a trade (business) cycle: a boom, where output runs above trend with rising inflation, falling unemployment and high confidence; a slowdown; a recession, conventionally two successive quarters of falling real GDP, with rising unemployment, spare capacity and weak confidence; then recovery. A negative output gap exists at the recession and early-recovery stages, when actual real GDP is below the economy’s potential or trend output, so that some resources, including labour, are unemployed. Demand-deficient (cyclical) unemployment is the unemployment caused by aggregate demand being too low to employ everyone willing to work at current wages. The two are closely related: the output gap measures the shortfall in demand and demand-deficient unemployment is its effect in the labour market. The relationship is strong in direction but not fixed in size.',
    [
      [
        'Firms employ workers to produce output, so when demand falls below capacity they need fewer of them. A negative output gap means AD lies to the left of the full-employment level of output on the AD/AS diagram; firms cut production, stop hiring and make redundancies, and unemployment rises above its natural rate. The larger the gap, the larger the shortfall in labour demand and the higher demand-deficient unemployment. The relationship works in reverse as the gap closes: when AD recovers, firms rehire and cyclical unemployment falls, as it did after 2012 and again after 2021. Okun’s law captures the regularity - a given percentage gap between actual and potential output is associated with a roughly proportional rise in unemployment above its natural rate.',
        'The proportion is not constant. In 2008-09 UK output fell by about 6% but unemployment rose far less than past recessions implied, because firms hoarded labour, cut hours and accepted lower real wages instead of making redundancies. Underemployment and falling productivity absorbed part of the output gap, so measured unemployment understated the demand deficiency.',
      ],
      [
        'Because demand-deficient unemployment is caused by the output gap, it is the form of unemployment that demand-side policy can remove: lower interest rates or fiscal stimulus shift AD right, close the gap and re-employ the workers. Structural and frictional unemployment persist even when the gap is zero, so the natural rate of unemployment sets a floor. The relationship therefore also tells policymakers how much of observed unemployment they can expect to remove by managing demand and how much requires supply-side measures.',
        'Potential output cannot be observed and estimates of the gap are frequently revised, so the split between cyclical and structural unemployment is uncertain at the time decisions are made. A prolonged negative output gap can also convert cyclical into structural unemployment through hysteresis - workers lose skills and attachment to the labour force - so the relationship weakens the longer the gap persists.',
      ],
    ],
    null,
    [
      'The trade cycle and its phases: boom, slowdown, recession (two quarters of falling real GDP) and recovery',
      'Definition of a negative output gap and of demand-deficient unemployment',
      'Diagram showing AD below full-employment output',
      'Chain: lower demand for output leads to lower demand for labour; Okun’s law',
      'The gap closing reduces cyclical unemployment; role of demand-side policy',
      'Distinction from structural and frictional unemployment; the natural rate',
    ],
    [
      'Labour hoarding, reduced hours and underemployment weaken the link',
      'Potential output is unobservable; estimates revised',
      'Hysteresis converts cyclical into structural unemployment over time',
    ],
  ),

  Q040: A(
    [
      [
        'negative-externality',
        'Production with external costs: MSC above MPC, over-production and the welfare loss. Growth that ignores this externality is the conflict; pricing it is how the conflict is reduced.',
      ],
      [
        'ppf-shift',
        'A PPF with output on one axis and environmental quality on the other. Movement along it is the trade-off; an outward shift from green technology is the case that the trade-off can be eased.',
      ],
    ],
    'Economic growth raises real output; environmental protection aims to limit pollution, emissions and resource depletion. The conflict arises because production generates negative externalities that the market does not price, so growth as measured by GDP can come at the expense of environmental quality, and policies that price those externalities raise costs. But growth and the environment are not always in conflict: cleaner technology, structural change towards services and rising incomes that fund protection can allow both, and long-run growth depends on the environment being preserved.',
    [
      [
        'In the short run there is a real trade-off. Higher output requires more energy, materials and land; if the external costs of emissions and pollution are not priced, firms over-produce polluting goods and the environment absorbs the cost - the welfare-loss triangle on the externality diagram. Policies that protect the environment raise costs: carbon taxes, emission permits and regulation increase the price of energy and manufactured goods, shift SRAS left and reduce output and competitiveness in the affected industries. Governments in developing economies often resist environmental limits precisely because they see them as a brake on growth, and coal-fired growth in China and India has raised emissions sharply.',
        'The trade-off depends on the source of growth. Growth in services, digital and knowledge industries uses far less energy per pound of output than growth in heavy industry, so a modern economy can grow with a smaller environmental cost. The conflict is with a particular kind of growth rather than with growth itself.',
      ],
      [
        'Growth and environmental protection can reinforce each other. Investment in renewable energy, insulation and public transport raises AD now and, by lowering energy costs and creating new industries, raises LRAS later - green growth. Richer countries can afford cleaner technology and stricter regulation, and demand for environmental quality rises with income; the environmental Kuznets curve suggests pollution rises in early development and falls once incomes pass a threshold. The UK has cut territorial greenhouse-gas emissions by around half since 1990 while GDP has grown substantially, largely by switching electricity generation from coal to gas and renewables. Environmental damage also undermines future growth through floods, crop failures and health costs, so protection is an investment in long-run output.',
        'Part of the UK’s reduction reflects the offshoring of manufacturing, so consumption-based emissions have fallen less than territorial ones. Green investment has an opportunity cost and the transition creates losers in carbon-intensive regions. The Kuznets relationship is disputed for carbon emissions, which have continued rising globally even as incomes rise.',
      ],
      [
        'Whether the conflict is real depends on policy design. Market-based instruments - carbon pricing, tradable permits - achieve a given reduction in emissions at the lowest cost to output, because they let the cheapest abatement happen first and give firms an incentive to innovate. Revenue from carbon taxes can cut other taxes, offsetting the effect on growth. Poorly designed regulation that bans rather than prices, or that changes unpredictably, imposes higher costs for the same environmental gain. The conflict is therefore largest where policy is crude and smallest where externalities are priced and the revenue is recycled.',
        'Even well-designed policy involves transitional costs and distributional effects, and the environmental benefits of today’s policies accrue mainly to future generations, which makes them politically harder to sustain. The time horizon matters: over one parliament the conflict is real; over decades protection and growth are complementary.',
      ],
    ],
    'Policies to promote growth and to protect the environment are in conflict in the short run when growth relies on unpriced externalities and protection raises costs, so the view has force for carbon-intensive economies and crude regulation. They are not always in conflict: growth in low-carbon sectors, green investment and rising incomes that fund protection allow both, well-designed pricing minimises the cost of abatement, and environmental degradation would eventually destroy growth itself. The relationship depends on the source of growth, the design of policy and the time horizon, and over the long run sustainable growth is the only kind that lasts.',
    [
      'Definition of economic growth and of environmental protection; sustainability',
      'Negative externalities of production and the welfare loss, with a diagram',
      'Environmental policy raising costs and reducing output in the short run',
      'Green growth: renewable investment raising AD and LRAS; environmental Kuznets curve',
      'Application: UK emissions and GDP since 1990; China and India',
      'Market-based instruments minimising the cost of abatement',
    ],
    [
      'Depends on the source of growth: services versus heavy industry',
      'Offshoring of emissions; disputed Kuznets relationship for carbon',
      'Policy design determines the size of the trade-off',
      'Short-run conflict versus long-run complementarity; intergenerational effects',
      'Judgement: not always in conflict; depends on source, policy and horizon',
    ],
  ),

  Q041: A(
    [
      [
        'quantitative-easing',
        'The QE mechanism: central bank purchases of government bonds raise bond prices, lower yields and push investors into other assets, lowering long-term borrowing costs and raising wealth. Use it to structure the first two chains.',
      ],
      [
        'bond-price-yield',
        'Bond prices and yields moving in opposite directions - the step in QE that students most often skip. Show the bond price rising and the yield falling as the central bank buys.',
      ],
    ],
    'Quantitative easing is the creation of central bank money to buy financial assets, mainly government bonds, from the private sector. It is used when the policy rate is close to zero and cannot be cut further, as in the UK from 2009. Its purpose is to raise inflation towards the target by lowering long-term interest rates, raising asset prices and increasing the money supply, so that aggregate demand rises. Whether it achieves the target depends on how strongly those channels work and on whether the problem is inflation below target rather than above it.',
    [
      [
        'When the Bank of England buys bonds, demand for them rises, their price rises and their yield falls. Yields on government bonds anchor other long-term interest rates, so mortgage and corporate borrowing costs fall even when Bank Rate is already at its floor. The sellers of the bonds - pension funds, insurers - hold cash they did not want, so they buy other assets such as corporate bonds and shares, raising their prices and lowering the cost of finance for firms. Higher asset prices make households wealthier and more willing to spend, and lower yields weaken the pound, raising import prices and export demand. Each channel raises AD and pushes inflation up towards 2%. The Bank estimated that its first £200 billion of QE raised inflation by around one percentage point at its peak.',
        'The effect is uncertain and lagged. UK inflation stayed below target for much of the 2010s despite £445 billion of QE, which suggests the channels were weak when confidence was low and banks were repairing their balance sheets; in a liquidity trap, extra money is held rather than spent. Estimates of QE’s effect vary widely and cannot easily separate it from other policies.',
      ],
      [
        'QE also works through expectations and bank lending. By signalling that policy will stay loose, it lowers expected future rates and prevents inflation expectations from falling towards deflation, which was the main danger in 2009 and 2020. The new reserves created give banks the capacity to lend more, which raises the money supply and, if lending occurs, spending. In 2020 QE also stabilised the government bond market and allowed the Treasury to borrow for the furlough scheme at low cost, supporting demand directly.',
        'Banks do not have to lend the reserves, and after 2008 much of the new money sat on their balance sheets. QE raises asset prices most, so it benefits those who own assets and widens wealth inequality, and low yields damaged pension funds and savers. These side effects do not stop QE raising inflation but they limit how far it can be used.',
      ],
      [
        'QE is a tool for one direction only. It helps the central bank reach its target when inflation is below it and rates are at the floor. When inflation is above target, as from 2021, QE has to be reversed - quantitative tightening - and the money created earlier is argued by some to have contributed to the overshoot. The risk of asset bubbles and of the Bank holding a large share of government debt also grows with each round, and unwinding it raises yields and government borrowing costs. QE therefore helps achieve the target from below at the cost of making the target harder to hold from above.',
        'The counterfactual matters. Without QE in 2009 and 2020 the UK might have faced deflation and a deeper recession, which would have missed the target by more. Judged against that, QE has been effective; judged against hitting 2% precisely, it has not.',
      ],
    ],
    'QE is likely to help a central bank achieve its inflation target when inflation is below target and conventional policy is exhausted: it lowers long-term rates, raises asset prices and supports expectations, and it probably prevented deflation in 2009 and 2020. Its effects are uncertain, lagged and weakest when confidence is low, it has distributional costs, and it can contribute to inflation overshooting later. It is a partial and one-directional tool - useful for defending the target from below rather than for hitting it precisely.',
    [
      'Definition of QE and when it is used; the zero lower bound',
      'Bond purchases raising prices and lowering yields, with a diagram',
      'Portfolio rebalancing, asset prices, wealth effects and the exchange rate',
      'Expectations and bank lending channels; money supply',
      'Application: UK QE since 2009 and 2020',
      'Reversal through quantitative tightening',
    ],
    [
      'Uncertain and lagged effects; liquidity trap',
      'Banks may not lend; distributional effects on wealth',
      'Contribution to inflation overshoot; asset bubbles; unwinding costs',
      'Counterfactual: deflation avoided',
      'Judgement: helpful from below target, not a precise tool',
    ],
  ),

  Q042: A(
    [
      [
        'ad-shift',
        'Expansionary fiscal policy shifting AD right: output and employment rise, but so does the price level and, through imports, the current account deficit. The diagram shows the trade-off in one picture.',
      ],
      [
        'lras-shift',
        'Fiscal policy of the supply-side kind - infrastructure, education, investment allowances - shifting LRAS right so that growth, jobs and low inflation can move together.',
      ],
    ],
    'The main macroeconomic objectives are economic growth, low unemployment, low and stable inflation, a sustainable balance of payments, and, since 2010, sound public finances and, increasingly, environmental sustainability. Fiscal policy uses government spending and taxation to influence aggregate demand and, through its composition, aggregate supply. Because a single instrument usually moves several objectives in opposite directions, fiscal policy on its own struggles to achieve all of them at once; how effective it is depends on the state of the economy, the type of fiscal measure and the constraints on borrowing.',
    [
      [
        'Expansionary fiscal policy - higher spending or lower taxes - shifts AD right. Output and employment rise, which meets the growth and unemployment objectives, and the multiplier amplifies the effect. But the same shift raises the price level, particularly as the output gap closes, and higher incomes pull in imports, widening the current account deficit. Financing the expansion by borrowing worsens the budget deficit and adds to national debt. So a single expansionary measure helps two objectives and harms three; contractionary policy reverses the pattern. This is the standard conflict, and it is why fiscal policy cannot simply be set to achieve everything.',
        'The conflict is weakest when there is spare capacity. In a recession, expansionary fiscal policy raises output and employment with little inflation and, by preventing a collapse in tax revenue, may even improve the public finances over time. The trade-offs bite as the economy approaches full capacity; timing and the size of the output gap determine how many objectives fiscal policy can serve at once.',
      ],
      [
        'Fiscal policy can reduce the conflicts if it works on the supply side. Capital spending on transport, energy and digital infrastructure, funding for education and training, and tax incentives for investment such as full expensing raise AD now and shift LRAS right later, so growth and employment rise without inflation and with improved competitiveness that helps the current account. Targeted measures avoid the bluntness of general stimulus: reducing employers’ National Insurance for low earners lowers unemployment with less inflationary pressure than a general tax cut. Well-designed fiscal policy can therefore serve several objectives simultaneously, which monetary policy, with one instrument, cannot.',
        'Supply-side fiscal measures are slow, their returns are uncertain and they cost money up front, so they worsen the deficit before they help growth. Governments face pressure to favour visible current spending over long-term investment, and a change of government can cancel projects. The theoretical harmony between objectives is often not achieved in practice.',
      ],
      [
        'Constraints limit effectiveness. With public debt near 100% of GDP and annual interest costs above £100 billion, the room for expansionary policy is small and bond markets react to perceived unsustainability, as the September 2022 mini-budget showed when gilt yields jumped. Time lags between recognising a problem, legislating and the spending arriving mean fiscal action can land in the wrong phase of the cycle. Crowding out reduces the net effect when the economy is near capacity. And the political business cycle biases fiscal policy towards stimulus before elections regardless of the objectives.',
        'Automatic stabilisers - tax revenue falling and benefits rising in a downturn - operate without any decision and moderate the cycle in a way that supports growth, employment and price stability together. Coordination with monetary policy also helps: fiscal policy can support demand while the Bank controls inflation, dividing the objectives between instruments rather than expecting one to do everything.',
      ],
    ],
    'Fiscal policy is of limited effectiveness in achieving all macroeconomic objectives simultaneously, because a change in spending or taxation that helps growth and employment tends to worsen inflation, the current account and the public finances, and the reverse. Its effectiveness rises when there is spare capacity, when it is directed at the supply side and when it is coordinated with monetary policy, and automatic stabilisers do useful work without conflict. As a single discretionary instrument it cannot hit every target at once - that would need as many instruments as objectives - but as part of a policy mix, and especially through investment that raises capacity, it can reduce the trade-offs substantially.',
    [
      'The macroeconomic objectives; definition of fiscal policy',
      'Expansionary fiscal policy shifting AD; effects on growth, unemployment, inflation, current account and deficit, with a diagram',
      'Conflicts between objectives; dependence on the output gap',
      'Supply-side fiscal policy shifting LRAS; targeted measures',
      'Constraints: national debt, bond markets, time lags, crowding out, political cycle',
      'Automatic stabilisers and coordination with monetary policy',
    ],
    [
      'Conflicts weakest with spare capacity; timing matters',
      'Supply-side measures slow, costly and politically fragile',
      'Debt and market constraints limit discretionary policy',
      'One instrument cannot hit several targets; the policy mix',
      'Judgement: limited alone, more effective within a coordinated mix',
    ],
  ),

  Q043: A(
    [
      [
        'comparative-advantage',
        'Two countries’ PPFs with different slopes - different opportunity costs - and consumption points beyond each frontier after specialisation and trade. The gain is the distance between what each could produce alone and what it can consume with trade.',
      ],
    ],
    'Comparative advantage exists when a country can produce a good at a lower opportunity cost than another country. Ricardo’s theory shows that even a country that is less efficient at producing everything gains from specialising in the good where its disadvantage is smallest and trading for the rest. Specialisation raises total world output, and trade at a rate between the two countries’ opportunity costs lets both consume beyond their own production possibility frontiers.',
    [
      [
        'Suppose the UK can produce either 100 units of cloth or 50 units of wine with its resources, and Portugal 60 of cloth or 60 of wine. Portugal is absolutely more efficient in wine and less so in cloth, but the relevant comparison is opportunity cost: in the UK a unit of wine costs 2 cloth, in Portugal 1 cloth; a unit of cloth costs 0.5 wine in the UK and 1 wine in Portugal. The UK has the lower opportunity cost in cloth, Portugal in wine. If each specialises, world output is 100 cloth and 60 wine, compared with, say, 80 cloth and 40 wine if each produced half of each - total output has risen because resources are used where they are relatively most productive.',
        'The gain in total output does not by itself mean both countries benefit; that depends on how the gains are shared through the terms of trade, and on the model’s assumptions of constant opportunity costs, full employment and no transport costs, which real economies do not meet.',
      ],
      [
        'Trade converts the higher world output into gains for each country. If the UK exports cloth for wine at a rate between the two opportunity costs - say 1 cloth for 0.75 wine - the UK obtains wine for 1.33 cloth per unit instead of the 2 cloth it would cost to make at home, and Portugal obtains cloth for 0.75 wine per unit instead of the 1 wine it would cost to make itself. Each country consumes at a point beyond its own PPF, which is impossible without trade. Consumers in both countries enjoy lower prices and a wider choice of goods, and the competitive pressure of trade drives efficiency. This is the argument behind the post-war expansion of trade and the growth it accompanied.',
        'The gains are unevenly distributed within each country: workers in the industry that contracts lose while consumers and the expanding industry gain, which is why trade creates political opposition even when it raises total welfare. Over-specialisation exposes an economy to shocks in its export market, and comparative advantage can shift, leaving a country dependent on an industry that has moved elsewhere.',
      ],
    ],
    null,
    [
      'Definition of comparative advantage as lower opportunity cost; distinction from absolute advantage',
      'Numerical example showing opportunity costs and specialisation raising total output',
      'Trade at a rate between the opportunity costs; consumption beyond the PPF, with a diagram',
      'Benefits: lower prices, wider choice, efficiency',
    ],
    [
      'Assumptions of the model: constant costs, full employment, no transport costs',
      'Distribution of gains depends on the terms of trade',
      'Losers within each country; risks of over-specialisation',
    ],
  ),

  Q044: A(
    [
      [
        'tariff',
        'The domestic market with the world price and a tariff raising it: domestic output rises, imports fall, government revenue is the rectangle, and the two triangles are the deadweight losses. The consumer surplus lost exceeds the producer surplus and revenue gained.',
      ],
    ],
    'A tariff is a tax on imports. It raises the domestic price of the imported good, so domestic producers sell more at a higher price, imports fall and the government gains revenue. Tariffs are imposed to protect domestic industries and jobs, to nurture infant industries, to raise revenue or to retaliate. The tariff diagram shows that these gains are smaller than the loss to consumers, and the wider effects on input costs, retaliation and efficiency usually make the economy that imposes tariffs worse off, though there are cases where the balance is closer.',
    [
      [
        'On the diagram, the world price Pw is raised to Pw + t. Domestic producers expand output along their supply curve, gaining producer surplus, and the government collects revenue equal to the tariff times the remaining imports. Employment in the protected industry is preserved, which matters where the industry is regionally concentrated, and if the industry is an infant that can reach minimum efficient scale only behind protection, the tariff can create a competitive industry that would not otherwise exist - the route South Korea and Taiwan used for manufacturing. A large economy can also improve its terms of trade, since its reduced demand lowers the world price of the import.',
        'The diagram shows the cost of these gains. Consumers pay a higher price on every unit, losing surplus larger than the producer surplus and revenue combined; the two triangles are the deadweight loss from inefficient domestic production and lost consumption. The infant-industry case requires the protection to be temporary and the industry to become competitive, which political pressure from the protected industry rarely allows.',
      ],
      [
        'Tariffs raise costs for domestic firms that use the protected good as an input. US tariffs on steel and aluminium from 2018 raised prices for car makers, construction and machinery producers, and studies found the jobs lost downstream far exceeded those saved in steel. Higher import prices feed into inflation, reducing real incomes and possibly prompting higher interest rates. Trading partners retaliate: China’s tariffs on US agricultural exports hit American farmers, who then required subsidies. Export industries therefore lose sales, so the tariff redistributes from efficient exporting sectors to less efficient protected ones. The current account may not improve at all.',
        'Retaliation and input-cost effects depend on the size and scope of the tariff. A narrow tariff on a finished consumer good with few domestic users has smaller knock-on effects than tariffs on intermediate goods. Where the economy is small and its trading partners do not respond, the direct effects on the diagram are the main story.',
      ],
      [
        'Over time protection removes the competitive pressure that keeps firms efficient and innovative. Sheltered industries have less incentive to cut costs or improve products, so the domestic price stays high and the productivity gap with foreign rivals widens; consumers pay for an industry that never catches up. Tariffs also invite lobbying and make trade policy a tool of special interests. Membership of the WTO and of trade agreements limits tariff use precisely because governments recognise these costs, and the overall reduction in tariffs since 1947 accompanied the fastest growth in world trade and income in history.',
        'Strategic arguments have some force: protecting industries essential to national security, or using tariffs as leverage to open foreign markets, can benefit the economy in ways the static diagram omits. Temporary tariffs against dumping can also prevent a foreign monopoly from destroying domestic competition. These are exceptions that need to be justified case by case.',
      ],
    ],
    'The imposition of tariffs is unlikely to benefit the economy that introduces them. Producers and the government gain, but consumers lose more, downstream industries face higher costs, trading partners retaliate against exporters and protected firms grow less efficient. The exceptions are narrow: a genuine infant industry with temporary protection, a large economy improving its terms of trade, and strategic or anti-dumping cases. The benefit therefore depends on the industry, the scope of the tariff and whether protection is temporary, and for a broad, permanent tariff the answer is that the economy is worse off.',
    [
      'Definition of a tariff and reasons for imposing one',
      'Tariff diagram: higher price, more domestic output, fewer imports, revenue, deadweight loss',
      'Gains to producers and government; employment; infant-industry and terms-of-trade arguments',
      'Loss of consumer surplus exceeding the gains',
      'Higher input costs, inflation and retaliation; application to US tariffs since 2018',
      'Dynamic inefficiency and lobbying; WTO limits',
    ],
    [
      'Infant-industry protection must be temporary; political capture',
      'Effects depend on the size and scope of the tariff and on retaliation',
      'Strategic, security and anti-dumping exceptions',
      'Static versus dynamic effects',
      'Judgement: usually harmful, with narrow exceptions',
    ],
  ),

  Q045: A(
    [
      [
        'lorenz-curve',
        'The Lorenz curve: cumulative share of population on the horizontal axis, cumulative share of income on the vertical, the 45-degree line of perfect equality, and the curve bowing below it. Shade area A between the line and the curve; the Gini coefficient is A divided by the whole triangle.',
      ],
    ],
    'The Lorenz curve is a graphical measure of income inequality. It plots the cumulative percentage of the population, ranked from poorest to richest, against the cumulative percentage of income they receive. Perfect equality would be a 45-degree line; the further the actual curve bows below it, the more unequal the distribution. The Gini coefficient summarises the curve as a single number between 0 and 1.',
    [
      [
        'To construct the curve, households are ranked by income and the cumulative shares are plotted. If the poorest 20% of the population receive 5% of income, the curve passes through (20, 5); if the poorest 60% receive 30%, through (60, 30); it always ends at (100, 100). With perfect equality every 20% of the population would receive 20% of income and the curve would coincide with the diagonal. In reality lower groups receive less than their population share, so the curve lies below the line and bows towards the bottom-right corner. A country with a curve close to the diagonal, such as Norway, is more equal than one with a deeply bowed curve, such as South Africa, and the shape shows where in the distribution the inequality is concentrated.',
        'The curve shows the distribution of income, not of wealth, which is usually far more unequal, and it depends on which income is measured - original income before taxes and benefits produces a much more bowed curve than disposable income after them. Comparisons between countries require the same definition and the same household unit.',
      ],
      [
        'The Gini coefficient is the area between the line of equality and the Lorenz curve (A) divided by the total area under the line (A + B). A value of 0 means perfect equality, 1 means one household receives everything. The UK’s Gini for disposable income is around 0.35, higher than most of Western Europe and lower than the United States; the value for original income is around 0.5, which shows how much taxes and benefits reduce inequality. Because it is a single number the Gini allows comparison across countries and over time, and it can be calculated separately for regions, age groups or before and after housing costs.',
        'A single number loses information: two countries can have the same Gini with different Lorenz curves if one has inequality at the top and the other at the bottom. The Gini also says nothing about absolute living standards - a poor country can be very equal - and small changes in the coefficient can hide large movements for particular groups.',
      ],
    ],
    null,
    [
      'Definition of the Lorenz curve and its axes',
      'Line of perfect equality; the curve bowing below it',
      'Construction from cumulative shares, with a diagram',
      'Gini coefficient as A/(A + B); range and interpretation',
      'Application: UK values before and after taxes and benefits',
    ],
    [
      'Income not wealth; depends on the definition of income',
      'Same Gini can describe different distributions',
      'Says nothing about absolute living standards',
    ],
  ),

  Q046: A(
    [
      [
        'progressive-tax',
        'Average tax rate rising with income under a progressive system, compared with proportional and regressive ones. Progressive taxation funds transfers and narrows the post-tax distribution.',
      ],
      [
        'lorenz-curve',
        'Two Lorenz curves: original income, deeply bowed, and disposable income after taxes and benefits, closer to the line of equality. The gap between them is what redistribution achieves; relative poverty is measured against the median of the second curve.',
      ],
    ],
    'Relative poverty is usually defined as living in a household with income below 60% of the median, so it measures the position of the poorest relative to the middle rather than an absolute standard of living. Around a fifth of the UK population is in relative poverty after housing costs. Governments reduce it through taxes and transfers, through policies that raise low earnings, and through longer-term measures on education, housing and regional development. The relative definition means the target moves as the median moves, which is the central difficulty.',
    [
      [
        'Progressive taxation and transfer payments reduce relative poverty directly. Income tax and National Insurance take a larger share from higher incomes, and the revenue funds benefits - Universal Credit, the state pension, child benefit - and public services that go disproportionately to lower-income households. In the UK, taxes and benefits reduce the Gini coefficient from about 0.5 for original income to about 0.35 for disposable income, and most of that reduction comes from benefits. Pensioner poverty fell sharply after 2000 as the state pension and pension credit rose faster than earnings, which shows that a sustained increase in transfers can move the relative poverty rate substantially.',
        'Because the poverty line is 60% of the median, transfers that raise everyone’s income leave relative poverty unchanged; only transfers that raise the bottom faster than the middle reduce it. Benefits are costly, can create disincentives where withdrawal rates are high, and are politically vulnerable - the freeze on working-age benefits after 2016 raised child poverty while pensioner poverty kept falling.',
      ],
      [
        'Policies that raise earnings at the bottom reduce poverty among working households, who are now the majority of those in relative poverty. The National Living Wage has raised the wage floor to over £12 an hour, lifting pay for around two million workers; in-work benefits top up low earnings; subsidised childcare lets parents work more hours; and reductions in tax at the bottom, such as a higher personal allowance, raise take-home pay. These reduce dependence on transfers and reach the “working poor” whom the benefit system alone leaves in poverty.',
        'A higher minimum wage can reduce hours or employment for some workers, and its gains are partly clawed back through benefit withdrawal, so the net effect on household income is smaller than the wage rise. Raising the personal allowance benefits all taxpayers and does nothing for those earning below it. In-work poverty has continued to rise despite these measures, largely because housing costs have risen faster than low incomes.',
      ],
      [
        'Long-term policies attack the causes. Investment in early-years and school education raises the future earnings of children from low-income families; training and apprenticeships improve the skills of adults in low-paid work; regional policy and housing supply address the concentration of poverty in particular places and the housing costs that push households below the line. These policies can reduce relative poverty permanently rather than through continuing transfers, and they raise productive potential at the same time. Their weakness is time: the return on educating a five-year-old arrives twenty years later.',
        'Long-term policies are expensive, their outcomes are uncertain and governments rarely sustain them across electoral cycles. Housing costs are now the largest driver of poverty after housing costs, and building enough homes to lower them has proved beyond every recent government. Relative poverty also depends on what happens to the median: strong wage growth in the middle can raise the poverty line faster than policy lifts the bottom.',
      ],
    ],
    'Government policies can reduce relative poverty to a significant extent, and the evidence is that they do: the tax and benefit system cuts inequality substantially and targeted increases in transfers have reduced pensioner poverty dramatically. Success is constrained by the relative definition, which moves the target as the median rises, by the cost and disincentive effects of transfers, by the limited reach of wage floors into household income, and above all by housing costs. Policies aimed at earnings and skills reduce poverty more durably but more slowly. Relative poverty can be reduced but not eliminated, and sustaining any reduction requires transfers and long-term investment together.',
    [
      'Definition of relative poverty (60% of median) and its extent in the UK',
      'Progressive taxation and transfers; effect on the Gini coefficient, with diagrams',
      'Application: pensioner poverty, benefit freezes',
      'Raising low earnings: National Living Wage, in-work benefits, childcare, tax allowances',
      'Long-term policies: education, training, regional and housing policy',
      'Working poverty and housing costs',
    ],
    [
      'The relative measure moves with the median',
      'Cost, disincentives and political vulnerability of transfers',
      'Employment effects and benefit withdrawal limit the minimum wage',
      'Time lags and cost of long-term policies; housing supply',
      'Judgement: significant reduction possible, elimination not',
    ],
  ),

  Q047: A(
    [
      [
        'lras-shift',
        'Infrastructure as a determinant of productive potential: without it LRAS is far to the left, and investment in transport and energy shifts it right. The diagram frames infrastructure as capacity rather than as a public amenity.',
      ],
    ],
    'Infrastructure is the physical and organisational capital an economy needs to function: roads, railways, ports, electricity, water, sanitation and telecommunications. Economic development means rising living standards, health and education alongside growth. A lack of infrastructure holds development back because it raises the cost of every economic activity, deters investment and undermines human capital; two reasons stand out - the cost of reaching markets and the unreliability of energy and basic services.',
    [
      [
        'Without adequate transport, goods cannot reach markets cheaply. Farmers in rural areas with poor roads sell only locally, at low prices, and lose a large share of perishable output before it reaches a buyer, so they have no incentive to produce a surplus or invest in better methods. Manufacturers face high costs for importing inputs and exporting products through congested ports, which removes the comparative advantage that low wages would otherwise give them. Landlocked countries with poor links to the coast pay far more to trade than coastal ones and have grown more slowly. Foreign firms will not invest where their goods cannot move, so poor transport also cuts off the FDI that brings capital and technology. Development stalls because the economy cannot integrate with markets, domestic or global.',
        'Transport infrastructure helps only if there is something to move: markets, credit and secure property rights are needed alongside roads, and a road built for political reasons to the wrong place adds debt without output. Some countries have grown rapidly with weak infrastructure by specialising in services that need only telecommunications.',
      ],
      [
        'Unreliable electricity, water and sanitation raise costs and damage human capital. Factories that suffer daily power cuts must run generators, which can double energy costs, or stop production, so manufacturing investment goes elsewhere. Without clean water and sanitation, disease reduces the productivity of workers and the school attendance of children, lowering the quality of the labour force for a generation. Poor telecommunications cut off access to prices, banking and information. These gaps trap countries in a low-productivity, low-investment equilibrium in which the tax base is too small to fund the infrastructure that would break the cycle.',
        'Infrastructure is expensive and financing it can create problems of its own: debt-funded projects, including some under China’s Belt and Road Initiative, have left countries with unsustainable repayments, and large projects are prone to corruption and overruns. The sequencing and governance of infrastructure investment matter as much as the amount.',
      ],
    ],
    null,
    [
      'Definition of infrastructure and of economic development',
      'Reason 1: transport - high costs of reaching markets, lost output, deterred FDI, landlocked disadvantage',
      'Reason 2: energy and basic services - higher production costs, disease and human capital, information',
      'Link to productive potential, with a diagram',
      'The low-investment trap and the tax base',
    ],
    [
      'Infrastructure alone is insufficient; institutions and markets needed',
      'Some development possible with limited infrastructure',
      'Financing risks, debt and corruption; governance of projects',
    ],
  ),

  Q048: A(
    [
      [
        'comparative-advantage',
        'Gains from specialisation and trade: consumption beyond the PPF. The case for trade as the engine of development rests on this, extended by economies of scale and technology transfer.',
      ],
      [
        'poverty-trap',
        'The poverty trap: low income, low saving, low investment, low productivity, low income. Aid is meant to inject the savings and investment that break the cycle; trade is meant to raise the income that does.',
      ],
    ],
    'Economic development means rising living standards, health and education as well as output. Governments can pursue it through market-orientated strategies (trade liberalisation, attracting foreign investment, removal of subsidies, floating exchange rates, microfinance, privatisation), interventionist ones (infrastructure, human capital, buffer stock schemes to stabilise commodity prices, managed exchange rates, joint ventures with foreign firms), or others again - industrialisation along the lines of the Lewis model of moving labour from low-productivity agriculture into manufacturing, developing tourism or primary industry, Fairtrade schemes, aid and debt relief, with the World Bank, the IMF and non-governmental organisations all channelling funds and expertise. Trade promotes development by letting countries specialise according to comparative advantage, earn foreign exchange and attract investment and technology; aid promotes it by transferring resources that fill the savings, foreign-exchange and skills gaps that keep poor countries in a poverty trap. The most successful developing economies of the past fifty years grew through trade rather than aid, but trade requires conditions that aid can help to create, and the two are more often complements than substitutes.',
    [
      [
        'Trade allows a developing economy to sell into world markets far larger than its own, so firms can reach economies of scale and specialise in goods where low labour costs give a comparative advantage. Export earnings pay for imports of capital goods and technology, and exposure to foreign competition forces domestic firms to raise productivity. Foreign direct investment follows open trade, bringing capital, management and skills. The East Asian economies - South Korea, Taiwan, later China and Vietnam - grew from low income to middle or high income within a generation through export-led growth, and no economy has developed rapidly while closed to trade. Trade-generated income is sustainable and self-reliant in a way aid is not.',
        'The gains from trade depend on what a country exports. Economies dependent on primary commodities face volatile prices and, according to the Prebisch-Singer hypothesis, declining terms of trade, so trade can lock them into low-value activities. Rich countries protect agriculture and impose tariffs that escalate with processing, which blocks the exports developing countries are best placed to make. Trade also needs infrastructure, institutions and an educated workforce that the poorest countries lack.',
      ],
      [
        'Aid transfers resources that a poor country cannot generate itself, and can offset capital flight, where domestic savings that could have funded investment are moved abroad instead by those wealthy enough to do so. Grants and concessional loans fill the savings gap in the Harrod-Domar model, funding the investment that raises the capital stock, and fill the foreign currency gap where a country cannot earn enough hard currency through exports to pay for the imported capital equipment development requires; they finance infrastructure, health and education that raise productivity and that private markets will not provide; and humanitarian aid prevents famines and epidemics from destroying human capital. Debt relief under the HIPC initiative freed budgets for spending on health and schools. Targeted aid has clear successes: vaccination programmes, the near-eradication of polio and the expansion of primary education in sub-Saharan Africa.',
        'Aid can create dependency, sustain corrupt governments and displace domestic saving and tax effort. Tied aid benefits donor firms; volatile aid flows make planning hard; and large inflows can appreciate the exchange rate and harm exports. The countries that received the most aid per head have not been the fastest growers, and the aid that works best is the kind that builds the capacity for trade.',
      ],
      [
        'The dichotomy is false for most countries. Aid that funds ports, roads, power and education creates the conditions for trade; trade preferences and market access are a form of assistance that costs donors little and can do more than transfers; and “aid for trade” programmes explicitly combine the two. Which is more effective depends on the country’s stage: for a very poor, landlocked economy with weak institutions, aid to build basic capacity comes first; for a middle-income economy with a functioning state, access to markets matters far more than transfers. Institutions and governance determine whether either strategy works.',
        'Even combined, neither guarantees development: domestic policy, political stability, property rights and the control of corruption explain more of the difference between countries than the volume of trade or aid. Strategies imposed from outside have a poor record; those chosen and owned by the developing country a better one.',
      ],
    ],
    'Trade is the more effective strategy for promoting growth and development to a large extent: every economy that has developed rapidly has done so through exports and investment, and trade-generated income is sustainable where aid is not. But trade requires infrastructure, institutions and market access that the poorest countries lack, and well-targeted aid is what builds them; primary-product exporters and countries facing rich-world protection cannot simply trade their way out. The most effective strategy is trade supported by aid that creates the capacity to trade and by donors opening their markets, with the balance depending on the country’s stage of development and the quality of its institutions.',
    [
      'Definition of development; trade and aid as strategies',
      'Trade: comparative advantage, economies of scale, foreign exchange, FDI, technology, with a diagram',
      'Application: East Asian export-led growth',
      'Aid: savings gap, Harrod-Domar, infrastructure, health, education, debt relief; the poverty trap, with a diagram',
      'Limits of trade: primary product dependency, terms of trade, protectionism',
      'Limits of aid: dependency, corruption, tied aid, volatility',
    ],
    [
      'Depends on what the country exports and on market access',
      'Aid works best when it builds capacity for trade',
      'Stage of development and quality of institutions determine effectiveness',
      'Complementarity rather than substitution',
      'Judgement: trade more effective, supported by aid',
    ],
  ),

  Q049: A(
    [
      [
        'asymmetric-information',
        'One party knowing more than the other. In the loan market the borrower knows their own riskiness and the lender does not; the diagram shows the market clearing at the wrong price and quantity because the lender prices for the average borrower.',
      ],
    ],
    'Financial markets exist to perform several functions: facilitating saving, lending to businesses and individuals, enabling the exchange of goods and services through a payments system, providing forward markets in currencies and commodities so firms can hedge future price risk, and providing a market for equities. Each depends on lenders being able to judge who they are dealing with. Asymmetric information exists when one party to a transaction knows more than the other. In lending, the borrower knows more about their ability and intention to repay than the lender does. This creates two problems: adverse selection before the loan is made, when lenders cannot tell good risks from bad, and moral hazard after it, when borrowers behave more riskily than the lender expected. Both cause credit to be misallocated, which is market failure in the financial sector.',
    [
      [
        'Before a loan is agreed, the lender cannot distinguish reliable borrowers from risky ones, so it charges an interest rate that reflects the average risk. That rate is too high for the safest borrowers, who withdraw or borrow elsewhere, and attractive to the riskiest, who stay. The pool of borrowers becomes riskier, defaults rise, the lender raises rates further and more good borrowers leave - adverse selection. In the extreme, lenders ration credit rather than raise rates, so viable projects go unfunded; small firms and low-income households are most affected. The result is less lending than would be efficient, allocated to worse projects than would be chosen with full information.',
        'Lenders have developed tools to reduce adverse selection: credit scores, collateral, credit histories and screening. These do not eliminate the problem, and they can create their own exclusion for those without a history, but they mean the market fails partially rather than completely.',
      ],
      [
        'After the loan is made, the borrower may take more risk than the lender anticipated, because the borrower keeps the upside and the lender bears part of the downside - moral hazard. A firm may use a loan for a riskier venture than described; a bank that expects to be bailed out if it fails takes risks it would avoid if it bore the full cost. Before 2008, banks lent to sub-prime borrowers and packaged the loans into securities whose buyers could not assess the risk, so the information asymmetry moved through the system until it caused a collapse in lending. The market failure was not confined to individual loans; it produced a systemic crisis with a large external cost to the whole economy.',
        'Regulation - capital requirements, deposit insurance with conditions, disclosure rules and the supervision of banks - is designed to counter moral hazard, and the 2008 crisis showed both the scale of the problem and the case for regulation. Its severity depends on how far lenders can monitor borrowers and on whether the state removes the consequences of failure.',
      ],
    ],
    null,
    [
      'Definition of asymmetric information in lending',
      'Adverse selection: pricing for average risk, good borrowers leaving, credit rationing, with a diagram',
      'Moral hazard: riskier behaviour after the loan; too-big-to-fail',
      'Application: sub-prime lending and 2008',
      'Misallocation of credit as market failure; systemic externality',
    ],
    [
      'Screening, collateral and credit scoring reduce but do not remove the failure',
      'Regulation counters moral hazard',
      'Severity depends on monitoring and on state guarantees',
    ],
  ),

  Q050: A(
    [
      [
        'asymmetric-information',
        'The information asymmetry that lets risk build unnoticed in financial markets. Regulation aims to force disclosure and to limit the leverage that turns information failures into systemic collapses.',
      ],
      [
        'liquidity-trap',
        'What a crisis does to monetary policy: rates at the floor and credit frozen. Use it to explain why preventing the crisis is worth the cost of regulation, since the tools for dealing with one are weak.',
      ],
    ],
    'A financial crisis is a sudden collapse in the value of financial assets and in the willingness of institutions to lend, with severe effects on the real economy. Financial markets fail in several distinct ways - asymmetric information, externalities, moral hazard, speculation and market bubbles, and market rigging, where institutions collude to manipulate a price or benchmark, as in the LIBOR scandal - and regulation has to address each. The 2008 crisis arose from excessive lending, high leverage, asymmetric information about securitised assets and the expectation that large banks would be rescued by the central bank acting as lender of last resort. Regulation since then - higher capital and liquidity requirements, ring-fencing, stress tests, macroprudential oversight - aims to make banks safer and to remove the incentives that produced the crisis. It can reduce the likelihood and severity of a future crisis; whether it can prevent one is a different question.',
    [
      [
        'The core reforms make banks more resilient. Basel III requires banks to hold more and better-quality capital, so losses that would once have made them insolvent can be absorbed; liquidity rules require them to hold assets they can sell in a panic, so a run does not force a fire sale. In the UK, retail banking has been ring-fenced from investment banking since 2019, so a trading loss cannot bring down the part that holds deposits and makes ordinary loans. Annual stress tests check whether banks could survive a severe recession, and the Financial Policy Committee can raise the countercyclical capital buffer when credit growth is excessive. Banks in 2023 held roughly three times the capital they held in 2007, and the UK system came through the pandemic without a bank failure.',
        'Regulation is designed around the last crisis. Risk migrates to the less regulated parts of the system - shadow banks, hedge funds, private credit - and the 2022 gilt crisis, driven by pension funds’ leveraged strategies, arose in a sector the bank regulations did not cover. Rules also raise the cost of credit and can push activity abroad, and regulators, relying on banks for information, can be captured or simply outpaced.',
      ],
      [
        'Regulation also targets moral hazard. Bail-in rules require bondholders to absorb losses before taxpayers do; resolution regimes let regulators wind down a failing bank in an orderly way; senior managers are personally accountable under the Senior Managers Regime; and remuneration rules defer bonuses so they can be clawed back. If bankers and creditors expect to bear the cost of failure, they take less risk, which addresses the incentive at the root of 2008 rather than only its symptoms.',
        'The credibility of these rules is doubtful. In March 2023 Silicon Valley Bank’s uninsured depositors were rescued in full and Credit Suisse was merged with UBS under state guarantee, which told markets that large institutions would still be saved. As long as that expectation holds, moral hazard survives and regulation is fighting the incentive rather than removing it.',
      ],
      [
        'Crises have many sources and regulation addresses some of them. Banking regulation does not stop a sovereign debt crisis, a crash in an unregulated asset such as crypto, a cyber attack or a sudden loss of confidence in a currency. Financial innovation creates instruments faster than rules can cover them, and international coordination is imperfect, so risk moves to the jurisdiction with the weakest rules. History suggests that periods of stability breed the complacency and leverage that end them - Minsky’s point - and no regulatory regime has yet prevented that cycle.',
        'Regulation can nonetheless reduce the frequency and cost of crises even if it cannot abolish them: the period of tight regulation from the 1940s to the 1970s saw few banking crises, and the post-2008 rules made the system far better able to absorb the pandemic shock. The right measure of success is fewer and smaller crises rather than none.',
      ],
    ],
    'Regulation of the financial sector is likely to make a future crisis less probable and less severe: better-capitalised, more liquid and ring-fenced banks can absorb shocks that would once have sunk them, and macroprudential tools can lean against credit booms. It is unlikely to prevent a crisis altogether, because risk migrates beyond the regulated perimeter, because rescues in 2023 showed that moral hazard persists, and because crises arise from sources that banking rules do not cover. Regulation is necessary and has worked in the sense that matters - a safer system - but prevention in full is beyond it.',
    [
      'Definition of a financial crisis and the causes of 2008',
      'Capital and liquidity requirements, ring-fencing, stress tests, macroprudential policy',
      'Moral hazard and the reforms targeting it: bail-in, resolution, accountability',
      'Asymmetric information as an underlying cause, with a diagram',
      'Application: UK reforms since 2008, the pandemic, 2022 gilt crisis, 2023 bank failures',
      'Other sources of crisis outside banking regulation',
    ],
    [
      'Regulation is backward-looking; risk migrates to shadow banking',
      'Persisting expectation of rescue undermines moral-hazard reforms',
      'Financial innovation and international arbitrage',
      'Regulation reduces frequency and severity even if not eliminating crises',
      'Judgement: safer system, not prevention',
    ],
  ),

  Q051: A(
    [
      [
        'ad-shift',
        'A deficit as an injection: AD shifting right, output rising with spare capacity and prices rising without it. The demand-side effect of the deficit depends on the output gap.',
      ],
      [
        'bond-price-yield',
        'Bond prices falling and yields rising as the government sells more debt into a doubtful market. This is the financing cost of a persistent deficit and the channel through which crowding out works.',
      ],
    ],
    'A budget deficit occurs when government spending exceeds tax revenue in a year; a persistent deficit means this continues across the economic cycle, so it is structural rather than cyclical, and the national debt rises year on year. The UK has run a deficit in almost every year since 2001 and public debt is close to 100% of GDP. The effects depend on what the borrowing funds, on the state of the economy and on how much the government has to pay to borrow.',
    [
      [
        'A persistent deficit accumulates into a rising national debt, and servicing that debt costs money: UK debt interest exceeded £100 billion a year after 2022, more than the budget for many departments, and each pound of interest is a pound not spent on services or returned in lower taxes. Selling more bonds each year pushes bond prices down and yields up, which raises borrowing costs across the economy and crowds out private investment; if markets doubt the government’s ability to repay, yields can jump suddenly, as in September 2022 when the mini-budget’s unfunded tax cuts sent gilt yields sharply higher. The burden falls on future taxpayers, who inherit the debt without the benefit of the spending, and a heavily indebted government has less room to respond to the next recession.',
        'The cost depends on what the deficit finances. Public spending divides into capital expenditure on long-lived assets, current expenditure on the day-to-day running of services, and transfer payments such as pensions and benefits. Borrowing for capital expenditure - infrastructure, education or research - raises future productive potential and tax revenue, so the debt can pay for itself; borrowing to fund current expenditure does not. It also depends on the interest rate relative to the growth rate: when growth exceeds the cost of borrowing, as it did for much of the 2010s, the debt ratio can fall even with a persistent deficit.',
      ],
      [
        'A deficit is an injection into the circular flow, so it supports aggregate demand. In a recession, running a deficit prevents output and employment from falling as far as they otherwise would - automatic stabilisers and discretionary stimulus in 2009 and 2020 both worked this way - and cutting the deficit during a downturn deepens it. A persistent deficit, however, means the government is adding to demand even when the economy is at capacity, which produces demand-pull inflation, a widening current account deficit as imports rise and, if the Bank responds, higher interest rates that offset the stimulus.',
        'The demand effect is beneficial or harmful depending on the output gap. A deficit that persists because the economy is permanently below capacity is doing its job; one that persists at full employment is inflationary. Distinguishing the cyclical from the structural deficit is difficult in real time and estimates are often revised.',
      ],
      [
        'Confidence and inflation risks follow. Persistent deficits can lead credit-rating agencies to downgrade the government’s debt, raising costs further; if the deficit is financed by central bank money creation rather than borrowing, it raises the money supply and inflation, as in Argentina or Zimbabwe. A large stock of debt also constrains policy: rises in interest rates raise the cost of servicing it, which can create pressure on the central bank to keep rates low - fiscal dominance - and undermine its independence.',
        'These risks are smaller for countries borrowing in their own currency with a credible central bank; Japan has run persistent deficits with debt above 200% of GDP without a crisis. The effects therefore depend on the credibility of institutions and the depth of the domestic bond market as much as on the size of the deficit.',
      ],
    ],
    'A persistent budget deficit is likely to raise the national debt and its interest cost, push up borrowing costs and crowd out private investment, and it leaves a burden on future taxpayers and less room to respond to shocks. Its effect on demand is beneficial when the economy has spare capacity and inflationary when it does not. The overall effect depends on what the borrowing funds, on the gap between growth and interest rates and on the credibility of the government, so a deficit that finances investment in a credible economy is far less damaging than one that funds consumption in a doubted one.',
    [
      'Definition of a budget deficit, persistent deficit and national debt',
      'Debt accumulation and interest costs; application to the UK',
      'Higher bond yields, crowding out and market confidence, with a diagram',
      'Deficit as an injection supporting AD; inflation at full capacity, with a diagram',
      'Inflation from monetary financing; rating downgrades; fiscal dominance',
      'Intergenerational effects',
    ],
    [
      'Depends on what the borrowing finances',
      'Interest rate relative to growth rate',
      'Depends on the output gap; cyclical versus structural',
      'Institutional credibility and currency of borrowing',
      'Judgement: harmful when structural and consumption-financed, tolerable when investment-financed',
    ],
  ),

  Q052: A(
    [
      [
        'progressive-tax',
        'A progressive tax with the average rate rising as income rises, compared with proportional and regressive schedules. Steepening the schedule narrows post-tax income differences directly.',
      ],
      [
        'laffer',
        'The Laffer curve: beyond some rate, higher tax rates reduce revenue as effort, avoidance and emigration respond. It is the evaluation of how far a tax system can be made more progressive.',
      ],
    ],
    'A progressive tax takes a larger percentage of income as income rises. Income inequality in the UK is high by European standards, with a Gini coefficient of around 0.35 for disposable income. A more progressive tax system reduces inequality directly by narrowing post-tax incomes and indirectly by funding transfers and services. Whether it is the best way depends on how large its effect is compared with alternatives - benefits, minimum wages, education, wealth taxes - and on the behavioural responses and political limits that higher top rates provoke.',
    [
      [
        'Making the tax system more progressive - a higher top rate, a higher personal allowance, fewer reliefs that benefit high earners - reduces the disposable income of the well-off relative to the rest, so the Lorenz curve for disposable income moves closer to the line of equality. The revenue can fund transfers and public services that go disproportionately to lower-income households, which reduces inequality a second time. The UK system already does this: taxes and benefits together cut the Gini coefficient from about 0.5 for original income to about 0.35, and progressive income tax is the single largest source of revenue for that redistribution. It is direct, quick and administratively simple, and the top 1% of earners already pay around 29% of all income tax, so the base for further progressivity exists.',
        'Most of the reduction in inequality comes from the benefit side, not the tax side; the UK’s taxes taken together are only mildly progressive because VAT, council tax and duties are regressive. Raising top rates faces the Laffer problem: higher earners reduce hours, shift income into capital gains or companies, use reliefs or leave, so the 50p rate introduced in 2010 raised much less than forecast. There is a limit to how progressive a tax system can be made before revenue - and therefore redistribution - falls.',
      ],
      [
        'Transfers and direct interventions may reduce inequality more per pound. Benefits targeted at the poorest have a larger effect on their income than a tax rise on the richest, and raising the National Living Wage lifts earnings at the bottom without passing through the tax system. Spending on early-years education, schools and training raises the future earning power of children from poor families - “pre-distribution” - which reduces inequality in original income rather than correcting it afterwards. Regional and housing policy address inequalities that a national tax schedule cannot see. A more progressive tax system funds these, but they, not the schedule itself, do most of the redistributive work.',
        'Transfers create disincentives of their own through high benefit withdrawal rates, education takes decades, and minimum wages can reduce employment. None is free of the trade-offs that a progressive tax faces; the question is which trade-off is smallest for a given reduction in inequality.',
      ],
      [
        'Income tax does not reach wealth, which is far more unequally held than income - the richest tenth of households own around half of total wealth - and much of the recent rise in inequality is in property and pension wealth rather than earnings. Taxes on inheritance, capital gains and property, or reforms to council tax so that it tracks house values, would address inequality that no income-tax schedule touches. Capital income is taxed more lightly than earned income in the UK, so a system that is progressive on paper is less so in practice for those whose income comes from assets. Making the tax system more progressive in the broad sense - across wealth and capital income as well as earnings - would reduce inequality more than steepening the income-tax schedule alone.',
        'Wealth taxes are hard to administer and politically resisted, and capital is more mobile than labour, so their revenue is uncertain. Even so, the comparison shows that “more progressive income tax” is a narrow instrument for a problem that is largely about assets.',
      ],
    ],
    'A more progressive tax system reduces income inequality directly and funds the transfers that reduce it further, so it is an important part of any strategy. It is not the best way on its own: the tax side of the UK system contributes far less to redistribution than benefits do, behavioural responses limit how far top rates can rise before revenue falls, and income tax leaves untouched the wealth inequality that has grown fastest. The best approach combines a progressive tax base that includes capital and wealth with targeted transfers, wage floors and investment in education. Progressivity in taxation is necessary for reducing inequality but is not sufficient and is not the single best instrument.',
    [
      'Definition of a progressive tax and of income inequality; UK Gini values',
      'Direct effect on post-tax incomes and the Lorenz curve, with a diagram',
      'Funding transfers and services; application to the UK tax-benefit system',
      'Laffer curve and behavioural responses to higher top rates, with a diagram',
      'Alternatives: benefits, National Living Wage, education and pre-distribution',
      'Wealth inequality and taxes on capital, inheritance and property',
    ],
    [
      'Benefits do more redistribution than taxes; regressive indirect taxes',
      'Laffer effects, avoidance and mobility limit progressivity',
      'Alternatives have their own trade-offs and time lags',
      'Income tax does not address wealth inequality',
      'Judgement: necessary but not the single best way',
    ],
  ),
}
