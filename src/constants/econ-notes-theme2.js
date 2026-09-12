/*
  Theme 2: The UK economy - performance and policies.

  Rebuilt from the course documents, at the depth those documents use: for
  every determinant, the mechanism AND the reason the mechanism may fail.
  The previous notes listed "interest rates" as a determinant of consumption
  and stopped there, which tells a student what to mention and nothing about
  what to say.

  Where the documents left a topic at AS depth, the A-level material has been
  written in to match - marked in the comments so it is clear which is which.
*/

import { h, p, defn, det, worked, diagram, tip, table, chapter } from './econ-notes-build'

/* ============================================================ AD */

const componentsOfAd = chapter(
  defn(
    'Aggregate demand (AD)',
    'The total demand for goods and services produced in an economy at a given price level, in a given time period.',
  ),
  p(
    'In microeconomics demand is the quantity demanded of one good at each price. In macroeconomics every market is aggregated together to give aggregate demand.',
  ),
  p('*AD = C + I + G + (X − M)*'),
  table(
    ['Component', 'What it covers', 'Rough share of UK AD'],
    [
      ['C', 'Consumer expenditure - all household spending on goods and services', 'around 60–65%'],
      ['I', 'Investment - firms’ spending on capital goods', 'around 15–20%'],
      [
        'G',
        'Government spending. Transfer payments such as benefits are EXCLUDED - they move money between groups rather than buying output',
        'around 20%',
      ],
      ['(X − M)', 'Net exports - exports minus imports', 'usually negative for the UK'],
    ],
  ),
  tip(
    'Transfer payments are not government spending in the AD sense. Including them is a standard error - the money is not buying any output, it is being moved from taxpayers to recipients, and it only affects AD when the recipient spends it (which counts as C).',
  ),
  diagram('ad-shift'),

  h('Consumption - the determinants'),
  p(
    'Consumption is the largest component in almost every economy, so anything that shifts it moves AD substantially.',
  ),

  det(
    'Real disposable income',
    'As real disposable income rises, consumption rises. This is the single most significant influence on C.',
    [
      'Disposable income is income after direct tax and benefits, so a cut in income tax raises it directly.',
      '"Real" matters: if nominal income rises 3% while inflation is 3%, purchasing power is unchanged and consumption should not rise.',
      'Redistribution from rich to poor raises total C, because poorer households have a higher marginal propensity to consume - a rise in the minimum wage therefore raises consumption by more than the same sum given to high earners.',
    ],
    [
      'The marginal propensity to consume falls as income rises, so people save a larger proportion as they get richer - a given rise in income delivers progressively less extra consumption.',
      'If the rise is believed to be temporary, households may save it rather than spend it (permanent income hypothesis).',
    ],
  ),

  det(
    'Interest rates',
    'A fall in interest rates raises consumption; a rise lowers it. Four separate channels, and you should name the channel rather than just say "borrowing is cheaper".',
    [
      '*Cost of borrowing.* Lower rates make loans, credit cards and car finance cheaper, so credit-financed purchases of durables rise.',
      '*Reward for saving.* Lower rates reduce the return on savings, so the opportunity cost of spending falls and households substitute away from saving towards consumption.',
      '*Mortgage payments.* Most UK household debt is mortgage debt. A rate cut lowers monthly payments for those on variable or expiring fixed rates, leaving more disposable income each month - this is the largest channel in the UK.',
      '*Wealth effect via asset prices.* Lower rates raise the present value of assets, so house and share prices rise, households feel wealthier and spend more.',
      'A RISE in rates reverses every one of these: dearer credit, a better return on saving, higher mortgage payments and falling asset prices.',
    ],
    [
      'Net savers - pensioners in particular - see their interest income FALL when rates fall, so their disposable income drops and their consumption may fall rather than rise. The aggregate effect depends on the balance of borrowers and savers.',
      'If households expect rates to fall further, they may DELAY borrowing to get a better deal, so the immediate effect is weaker than predicted.',
      'Rates are usually cut during a downturn, when confidence is low. A household worried about redundancy will not borrow however cheap credit is - so the policy is weakest exactly when it is most needed.',
      'Transmission is slow and uneven in the UK because most mortgages are fixed for 2–5 years, so a rate change reaches households only as fixes expire.',
      'At the zero lower bound rates cannot fall further, so the channel is exhausted.',
    ],
  ),

  det(
    'Consumer confidence and expectations',
    'Higher confidence about future income and job security raises consumption today.',
    [
      'Confidence determines willingness to commit to large, hard-to-reverse purchases - cars, houses, holidays.',
      'It also determines willingness to take on debt, since debt is only serviceable if future income continues.',
      'Expectations of rising future income allow households to borrow against that income and consume now.',
    ],
    [
      'Confidence is volatile and can change faster than any of the fundamentals underlying it, which makes it hard to forecast and hard for policy to target.',
      'Confidence surveys measure stated intention, not behaviour - people report pessimism and keep spending.',
    ],
  ),

  det(
    'Wealth',
    'The wealth effect: the more wealth a household holds - housing, shares, pensions, savings - the higher its consumption, even with income unchanged.',
    [
      'Households feel more secure, so they hold a smaller precautionary buffer and spend a larger share of income.',
      'They can realise some wealth directly - selling shares, downsizing - and spend the proceeds.',
      'They can borrow against wealth: rising house prices raise the equity available for remortgaging.',
      'Rising house prices also raise transaction volumes, and moving house generates spending on furniture, DIY and white goods.',
    ],
    [
      'Asset prices are volatile, so a wealth effect can reverse quickly and consumption falls with it.',
      'Most wealth is illiquid - you cannot spend a house without selling or borrowing against it, both of which take months and cost fees.',
      'A rise in house prices makes existing owners wealthier but makes housing less affordable for everyone else, so the aggregate effect is smaller than the headline gain and is distributionally uneven.',
      'Pension wealth cannot generally be accessed before retirement, so it does not support current consumption.',
    ],
  ),

  det(
    'Inflation and expected inflation',
    'Expected inflation can raise consumption today; high and unstable inflation lowers it.',
    [
      'If prices are expected to rise, households bring purchases forward to avoid paying more later - consumption today rises.',
      'This is why deflation is dangerous in reverse: expecting lower prices, households delay purchases and consumption falls.',
    ],
    [
      'High and unstable inflation creates uncertainty, and uncertainty raises precautionary saving - so consumption may fall despite the bring-forward effect.',
      'Households may save MORE to protect the real value of their savings when inflation is high.',
      'Inflation erodes real disposable income unless wages keep pace, and the income effect usually dominates the timing effect.',
    ],
  ),

  det(
    'Availability of credit',
    'Easier credit raises consumption independently of its price.',
    [
      'Looser lending criteria, higher loan-to-value ratios and longer terms all allow more households to borrow at any given interest rate.',
      'Credit availability is a QUANTITY constraint, distinct from the interest rate, which is the price - after the financial crisis rates were near zero but credit was rationed, so consumption stayed weak.',
    ],
    [
      'Easier credit raises household debt, so consumption is brought forward rather than increased - future consumption falls when the debt is repaid.',
      'Highly indebted households are more vulnerable to a later rate rise, so the initial boost raises the economy’s fragility.',
    ],
  ),

  h('Saving'),
  p(
    'Saving is not a component of AD, but since income is either spent or saved, anything that raises saving lowers consumption. The savings ratio is the percentage of disposable income saved.',
  ),
  det(
    'Interest rates (on saving)',
    'A rise in interest rates raises saving - the reward for saving increases and the opportunity cost of spending rises.',
    [
      'Higher returns make deferring consumption more attractive, so households substitute future consumption for present consumption.',
    ],
    [
      '*Target savers* behave in the OPPOSITE direction: someone saving for a fixed sum - a house deposit - needs to save LESS each month when the return is higher, so their saving falls as rates rise.',
      'Confidence dominates in a downturn: the UK savings ratio rose during the 1991–92 recession and again after the 2008 crash, when rates were being cut, not raised.',
    ],
  ),
  det(
    'Age structure of the population',
    'Middle-aged households save the most, so an economy’s savings ratio depends on its demographics.',
    [
      'The life cycle hypothesis predicts borrowing when young, saving in peak earning years, and dissaving in retirement.',
      'An ageing population should therefore lower the national savings ratio as more households move into the dissaving phase.',
    ],
    [
      'Many pensioners continue to save heavily, because they do not know how long they will live or what care they will need, and because they want to leave an inheritance.',
      'That unwillingness to run down wealth is one of the main empirical failures of the life cycle hypothesis.',
    ],
  ),
  det(
    'Availability of financial institutions and government policy',
    'Developed financial systems and tax-free savings schemes raise saving.',
    [
      'Where saving is easy and returns are protected, more households save.',
      'Tax-free schemes such as ISAs raise the post-tax return and so raise saving.',
    ],
    [
      'The same developed system makes BORROWING easy, so households may feel less need to hold precautionary savings.',
      'A more generous state pension reduces the need to save privately for retirement, so government policy can cut saving as easily as raise it.',
    ],
  ),

  h('Marginal propensities'),
  defn('Marginal propensity to consume (MPC)', 'The proportion of any additional income that is spent. MPC = ΔC ÷ ΔY.'),
  defn('Marginal propensity to save (MPS)', 'The proportion of any additional income that is saved. MPS = ΔS ÷ ΔY.'),
  p(
    'In a closed economy with no government, MPC + MPS = 1. With tax and imports, MPC + MPS + MPT + MPM = 1 - every pound of extra income is spent domestically, saved, taxed or spent abroad.',
  ),
  worked(
    'Income rises by £18,000 and spending rises by £15,000. Calculate the MPC.',
    '15,000 ÷ 18,000 = 0.83',
  ),
  worked('A pay rise of £1,000 leads to £350 extra saving. Calculate the MPS.', '350 ÷ 1,000 = 0.35'),
  worked(
    'National income rises by £2bn and national saving rises by £0.1bn. Calculate the MPS.',
    '0.1 ÷ 2 = 0.05',
  ),
  p(
    'The MPC is normally between 0 and 1. It can exceed 1 if a household increases spending by more than the rise in income - funding the difference by borrowing or running down savings.',
  ),
  tip(
    'The MPC is what makes the multiplier large or small, so it links this chapter directly to the multiplier and to fiscal policy. A high MPC means a fiscal stimulus has a large effect; a high MPS, MPT or MPM means the leakages are large and the effect is small.',
  ),
  diagram('consumption-function'),

  h('The life cycle hypothesis (Modigliani, 1957)'),
  p(
    'Households try to SMOOTH consumption across a lifetime rather than matching it to current income - borrowing when income is low, saving when it is high, and running down wealth in retirement.',
  ),
  table(
    ['Stage', 'Behaviour'],
    [
      ['Students', 'Rational to borrow, because future income will be much higher than current income.'],
      [
        'Working age',
        'May not consume more even when income rises: saving for a house deposit, saving for retirement, and diminishing marginal utility of extra spending.',
      ],
      ['Retirees', 'Sell assets and run down wealth to keep consumption stable as income falls.'],
    ],
  ),
  p('The implication is that consumption depends on income *and* wealth together, not income alone.'),
  table(
    ['Limitation of the model', 'Explanation'],
    [
      ['Present focus bias', 'People find it hard to value income far in the future, so they under-save.'],
      [
        'Inertia and information failure',
        'Planning for retirement takes effort and knowledge of pensions; many people procrastinate instead.',
      ],
      ['Assumes rationality', 'Consumers are prone to impulse and emotion, not lifetime optimisation.'],
      [
        'Unwillingness to run down wealth',
        'Many people want to leave an inheritance, and nobody knows their date of death - so they die holding wealth the model says they should have spent.',
      ],
    ],
  ),
  p('Research suggests 20–25% of UK individuals do not plan financially in the long term at all.'),

  h('Investment - the determinants'),
  defn('Investment', 'Spending by firms on capital goods - machinery, buildings, vehicles, technology.'),
  det(
    'Interest rates',
    'A fall in interest rates raises investment.',
    [
      'Interest is the cost of borrowing to fund a project, so a lower rate makes marginal projects profitable that previously were not.',
      'It is also the opportunity cost of using retained profit: if the bank pays less, investing the money in the business becomes relatively more attractive.',
      'Firms compare the expected rate of return on a project with the interest rate; a lower rate brings more projects above the threshold.',
    ],
    [
      'If demand is expected to be weak, firms will not invest however cheap borrowing is - expected returns matter more than the cost of finance.',
      'Many firms fund investment from retained profit, so are not directly affected by the rate.',
      'After the financial crisis rates were at record lows and UK investment remained weak, which is the standard empirical illustration.',
    ],
  ),
  det(
    'Business confidence and "animal spirits"',
    'Confidence about future demand is arguably the single largest determinant of investment.',
    [
      'Investment is irreversible and pays back over years, so it depends on expectations about demand years ahead.',
      'Keynes’s "animal spirits": investment decisions rest partly on instinct and mood, not calculation alone.',
      'This is why investment is the most volatile component of AD and why it collapses fastest in a recession.',
    ],
    [
      'Confidence is difficult to influence directly with policy, which limits what government can do.',
      'Because it is self-fulfilling, pessimism can cause the downturn it anticipates.',
    ],
  ),
  det(
    'The rate of economic growth and the accelerator',
    'Faster growth in demand raises investment more than proportionally.',
    [
      'The accelerator effect: investment depends on the RATE OF CHANGE of output, not its level. If output is growing, firms need extra capacity; if growth merely slows, investment can fall outright even while output still rises.',
      'This amplifies the economic cycle in both directions.',
    ],
    [
      'It only holds if firms are near capacity - with spare capacity, extra demand is met from existing plant and no investment occurs.',
      'The relationship assumes a fixed capital-output ratio, which technology changes over time.',
    ],
  ),
  det(
    'Corporation tax and government policy',
    'Lower corporation tax raises post-tax returns and so raises investment.',
    [
      'Tax is charged on profit, so a cut raises the return on any given project.',
      'Capital allowances and investment tax credits reduce the effective cost of the asset directly.',
      'Infrastructure and regulatory stability also raise expected returns.',
    ],
    [
      'A cut costs revenue immediately while the investment response is uncertain and delayed.',
      'Multinationals may respond by shifting reported profits rather than by building anything.',
      'Firms may return the windfall to shareholders through dividends or buybacks instead of investing.',
    ],
  ),
  det(
    'Access to credit and retained profit',
    'Investment needs finance, and finance can be rationed independently of its price.',
    [
      'Retained profit is the largest single source of investment funding, so profitability drives investment.',
      'Bank willingness to lend to businesses constrains firms that cannot self-fund - small firms especially.',
    ],
    [
      'High profits may be distributed rather than reinvested.',
      'Credit conditions can tighten sharply and without warning, as in 2008, which is a risk independent of the interest rate.',
    ],
  ),

  h('Government spending - the determinants'),
  det(
    'The stage of the economic cycle',
    'Government spending is countercyclical: it rises in a recession and falls in a boom.',
    [
      'Automatic stabilisers do much of this without any decision: unemployment benefit spending rises automatically as unemployment rises.',
      'Discretionary fiscal policy adds deliberate stimulus on top.',
    ],
    [
      'A government committed to a deficit or debt rule may be forced to CUT spending in a downturn, which is pro-cyclical and deepens the recession - the austerity critique.',
      'Time lags mean discretionary spending often arrives after the downturn has passed.',
    ],
  ),
  det(
    'Fiscal policy objectives and political priorities',
    'The size of G reflects a political choice about the role of the state as much as an economic one.',
    [
      'Ageing populations raise health, pension and social care spending regardless of the cycle.',
      'Election cycles influence timing - spending tends to rise before elections.',
    ],
    [
      'Higher G must be funded by tax or borrowing, both of which have costs elsewhere in the economy.',
      'Interest on accumulated debt is itself government spending that buys no current output.',
    ],
  ),

  h('Net exports - the determinants'),
  det(
    'The exchange rate',
    'A depreciation raises net exports; an appreciation lowers them. Remember SPICED - Strong Pound, Imports Cheap, Exports Dear.',
    [
      'A weaker pound makes UK exports cheaper in foreign currency, so quantity of exports rises.',
      'It makes imports dearer in sterling, so quantity of imports falls.',
      'Both effects raise (X − M) and therefore AD.',
    ],
    [
      'The Marshall–Lerner condition must hold - PEDx + PEDm > 1 - or the value of imports rises by more than the volume falls and the balance worsens.',
      'The J-curve means the balance deteriorates before it improves, because contracts are fixed and volumes adjust slowly.',
      'UK exporters use imported components, so their costs rise too and the competitiveness gain is smaller than it appears.',
    ],
  ),
  det(
    'Real income abroad and at home',
    'Faster growth in trading partners raises exports; faster growth at home raises imports.',
    [
      'Around 40% of UK exports go to the EU, so EU growth is a major determinant of UK exports.',
      'Rising UK income raises import demand, which is why a domestic boom worsens the current account.',
    ],
    [
      'The size of the effect depends on the income elasticity of demand for the goods traded.',
      'Commodity exporters are exposed to price volatility as well as to volume.',
    ],
  ),
  det(
    'Non-price competitiveness and protectionism',
    'Quality, design, reliability, branding and after-sales service determine exports independently of price.',
    [
      'German manufacturing exports well despite a strong currency because of non-price competitiveness.',
      'Productivity growth lowers unit labour costs and improves price competitiveness over time.',
    ],
    [
      'Tariffs, quotas and non-tariff barriers imposed by other countries can offset any competitiveness gain.',
      'Non-price competitiveness takes years to build, so it cannot respond to a short-run problem.',
    ],
  ),
  tip(
    'For any "evaluate the effect on AD" question, the reliable structure is: which component moves, by how much, how large is the multiplier, and where on the AS curve is the economy. A shift in AD raises output a lot and prices little when there is spare capacity, and the reverse near full capacity.',
  ),
)

/* =========================================================== AS */

const aggregateSupply = chapter(
  defn(
    'Aggregate supply (AS)',
    'The total quantity of goods and services that all firms in an economy are willing and able to supply at a given price level, in a given time period.',
  ),
  h('Short-run aggregate supply (SRAS)'),
  p(
    'SRAS slopes upward: with at least one factor of production fixed and money wages sticky, a higher price level raises profit margins and firms expand output.',
  ),
  diagram('cost-push'),
  h('What shifts SRAS'),
  det(
    'Costs of raw materials and energy',
    'A rise in input costs shifts SRAS left, raising the price level and cutting output.',
    [
      'Oil is an input to almost every industry - transport, plastics, fertiliser - so an oil price shock raises costs across the whole economy at once.',
      'This produces cost-push inflation combined with falling output: stagflation.',
    ],
    [
      'Firms may absorb the cost in margins rather than passing it on, particularly in competitive markets, so the price effect is smaller than predicted.',
      'Hedging and long-term contracts delay the pass-through by months or years.',
      'The effect fades as firms substitute towards cheaper inputs.',
    ],
  ),
  det(
    'Exchange rates',
    'A depreciation shifts SRAS left, because imported raw materials and components cost more in sterling.',
    [
      'The UK imports a large share of its energy, food and industrial components, so the pass-through is substantial.',
      'This is why a depreciation is inflationary as well as expansionary - it moves AD right and SRAS left simultaneously.',
    ],
    [
      'The size depends on how import-intensive production is, which varies enormously by sector.',
      'The AD effect may dominate, so output can still rise on balance.',
    ],
  ),
  det(
    'Wage rates',
    'A rise in wages not matched by productivity shifts SRAS left.',
    [
      'Labour is the largest cost for most firms, so wage growth feeds directly into unit costs and prices.',
      'A wage–price spiral occurs when workers bargain for higher wages to match inflation, raising costs and hence inflation again.',
    ],
    [
      'If productivity rises at the same rate, UNIT labour costs are unchanged and there is no effect on SRAS at all - this is the crucial qualification.',
      'Weak union density and flexible labour markets limit the wage response in the modern UK.',
    ],
  ),
  det(
    'Taxes and subsidies on production',
    'Higher indirect taxes and employer national insurance shift SRAS left; subsidies shift it right.',
    [
      'These are a cost of production like any other, so they raise the price at which firms are willing to supply each quantity.',
    ],
    [
      'Incidence depends on elasticity, so firms may bear part of the cost rather than passing it on.',
      'The effect is one-off - a tax rise raises the price level once rather than causing sustained inflation.',
    ],
  ),

  h('Long-run aggregate supply (LRAS)'),
  p(
    'LRAS shows the economy’s productive capacity - what it can produce when all factors are fully and efficiently employed. It is independent of the price level.',
  ),
  table(
    ['View', 'Shape', 'Implication'],
    [
      [
        'Classical',
        'Vertical at full employment',
        'Markets clear, so the economy always returns to full employment. Demand-side policy changes only the price level in the long run; only supply-side policy raises output.',
      ],
      [
        'Keynesian',
        'Horizontal at low output, then rising, then vertical',
        'The economy can settle at an equilibrium below full employment and stay there. Demand-side policy raises real output when there is spare capacity.',
      ],
    ],
  ),
  diagram('ad-as'),
  diagram('lras-shift'),
  h('What shifts LRAS'),
  det(
    'Quantity and quality of labour',
    'More workers, or more productive workers, raise potential output.',
    [
      'Net inward migration of working-age people raises the labour force directly.',
      'Education and training raise human capital and so raise output per worker.',
      'Raising the participation rate - childcare provision, later retirement - raises labour supply without any change in population.',
    ],
    [
      'Education takes a generation to affect the workforce, so the policy lag is very long.',
      'Migration also raises AD and demand for housing and public services, so the net effect on output per head is contested.',
    ],
  ),
  det(
    'Investment and the capital stock',
    'Net investment above depreciation raises the capital stock and shifts LRAS right.',
    [
      'More capital per worker raises labour productivity.',
      'Infrastructure - transport, energy, digital - lowers costs across every industry simultaneously.',
    ],
    [
      'Investment must exceed depreciation to raise the stock at all; gross investment figures overstate the effect.',
      'Diminishing returns to capital mean each additional unit adds less than the last.',
    ],
  ),
  det(
    'Technology and innovation',
    'Technological progress raises output from the same inputs and is the main driver of long-run growth.',
    [
      'It raises total factor productivity rather than just adding inputs, so its effect is not subject to diminishing returns in the same way.',
      'R&D spending, patents and university research all feed it.',
    ],
    [
      'Technology can displace labour in the short run, creating structural unemployment even as capacity rises.',
      'The gains may accrue to capital owners rather than workers, raising inequality.',
    ],
  ),
  det(
    'Competition, regulation and incentives',
    'More competitive markets and better incentives raise efficiency and shift LRAS right.',
    [
      'Competition policy and deregulation reduce X-inefficiency by exposing firms to competitive pressure.',
      'Lower marginal tax rates may raise the incentive to work, save and invest.',
    ],
    [
      'Deregulation can create market failure of its own - financial deregulation preceding the 2008 crisis is the standard example.',
      'The empirical labour supply response to tax cuts is small for most workers.',
    ],
  ),
)

export const ECON_THEME2_NOTES = {
  'Components of Aggregate Demand': componentsOfAd,
  'Aggregate Supply': aggregateSupply,
}
