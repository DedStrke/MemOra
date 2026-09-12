/*
  Theme 2 continued: the three policy families and the balance of payments.

  Policy chapters are where the specification most rewards evaluation, so
  each instrument here carries its mechanism, then the conditions under which
  it works, then the conditions under which it does not. The recurring
  qualifications - time lags, the output gap, crowding out, the cause of the
  problem - are stated explicitly rather than left implicit, because naming
  them is what separates a Level 4 answer from a Level 5.
*/

import { h, p, defn, det, worked, diagram, tip, table, chapter } from './econ-notes-build'

/* =============================================== FISCAL POLICY */

const fiscalPolicy = chapter(
  defn(
    'Fiscal policy',
    'The use of government spending and taxation to influence aggregate demand and the supply side of the economy.',
  ),
  table(
    ['Type', 'What it does', 'Effect on AD'],
    [
      ['Expansionary', 'Raise G, cut T, or both. Usually widens the budget deficit.', 'AD shifts right'],
      ['Contractionary', 'Cut G, raise T, or both. Narrows the deficit.', 'AD shifts left'],
    ],
  ),
  defn('Budget deficit', 'Government spending exceeds tax revenue in a given year - a flow.'),
  defn('National debt', 'The accumulated stock of past deficits - a stock. A deficit ADDS to the debt.'),
  tip(
    'Deficit is a flow, debt is a stock. A falling deficit still means the debt is rising, just more slowly. Mixing these up is a guaranteed lost mark.',
  ),

  h('Types of taxation'),
  table(
    ['Type', 'Definition', 'Example'],
    [
      ['Direct', 'Levied on income or wealth; cannot be passed on', 'Income tax, corporation tax, national insurance, inheritance tax'],
      ['Indirect', 'Levied on spending; the burden can be passed to consumers', 'VAT, fuel duty, alcohol and tobacco duty'],
      ['Progressive', 'The average rate RISES as income rises', 'UK income tax - 20%, 40%, 45% bands'],
      ['Proportional', 'The average rate stays constant', 'A flat tax'],
      ['Regressive', 'The average rate FALLS as income rises', 'VAT, because poorer households spend a larger share of income'],
    ],
  ),
  diagram('progressive-tax'),

  h('Automatic stabilisers and discretionary policy'),
  det(
    'Automatic stabilisers',
    'Features of the system that dampen the cycle without any decision being taken.',
    [
      'In a downturn: incomes fall, so progressive income tax revenue falls more than proportionally, and unemployment benefit spending rises automatically. Both support AD.',
      'In a boom the reverse happens, restraining AD without any announcement.',
      'They act immediately, with no recognition or implementation lag.',
    ],
    [
      'They dampen the cycle but cannot reverse a deep recession on their own.',
      'They automatically worsen the budget deficit in a downturn, which is politically awkward for a government committed to a fiscal rule.',
      'Their strength depends on how progressive the tax system and how generous the benefit system are - weaker in economies with flatter taxes.',
    ],
  ),
  det(
    'Discretionary fiscal policy',
    'Deliberate changes to spending or tax to influence AD.',
    [
      'A rise in G is an injection into the circular flow, magnified by the multiplier.',
      'A cut in income tax raises disposable income and therefore consumption.',
      'A cut in corporation tax raises retained profit and may raise investment.',
    ],
    [
      'Three lags: RECOGNITION (data arrives late and is revised), IMPLEMENTATION (budgets happen once or twice a year; infrastructure takes years), and IMPACT (the multiplier works through over several quarters). By the time it lands the cycle may have turned, making the policy pro-cyclical.',
      'Crowding out: financing by borrowing raises demand for loanable funds and may raise interest rates, displacing private investment. Weak with spare capacity and low rates; strong at full capacity.',
      'The multiplier may be small - the UK’s high MPM and tax wedge mean estimates cluster near 1.5.',
      'Higher borrowing raises debt interest, an opportunity cost in future budgets, and may raise the risk premium on gilts.',
      'Higher incomes raise imports, worsening the current account.',
    ],
  ),
  diagram('ad-shift'),
  diagram('multiplier-effect'),

  h('Fiscal policy on the supply side'),
  p(
    'Fiscal policy is not only about AD. Spending on infrastructure, education and training, and tax changes that alter incentives, all shift LRAS right - which is why capital spending is treated differently from current spending.',
  ),
  det(
    'The Laffer curve',
    'Tax revenue rises with the tax rate up to a point, then falls.',
    [
      'At 0% the rate raises nothing; at 100% nobody works, so revenue is again zero. Somewhere between lies a revenue-maximising rate T*.',
      'Beyond T*, higher rates reduce revenue through disincentives to work, greater avoidance and evasion, and emigration of high earners or profit-shifting by firms.',
    ],
    [
      'Nobody knows where T* is, and estimates vary enormously - so the curve cannot tell a Chancellor what rate to set.',
      'The empirical labour supply response to tax rates is small for most workers; the effect is concentrated among very high earners and mobile capital.',
      'It is often used to justify cuts that in practice reduce revenue, because most economies operate on the rising part of the curve.',
    ],
  ),
  diagram('laffer'),
  h('Evaluating fiscal policy'),
  table(
    ['It depends on', 'Why'],
    [
      ['The output gap', 'With a negative gap, stimulus raises output with little inflation. At full capacity it is largely inflationary and crowds out.'],
      ['The size of the multiplier', 'Determined by the leakages MPS, MPT and MPM.'],
      ['What the money is spent on', 'Capital spending with a high social return shifts LRAS; current spending does not.'],
      ['The starting debt position', 'High debt raises interest costs and constrains the room to act.'],
      ['Consumer and business confidence', 'A tax cut is saved rather than spent if households are pessimistic - Ricardian equivalence in its strong form says households save it in anticipation of future taxes.'],
      ['Time lags', 'Especially severe for infrastructure, which is the spending with the best supply-side case.'],
    ],
  ),
)

/* ============================================= MONETARY POLICY */

const monetaryPolicy = chapter(
  defn(
    'Monetary policy',
    'The use of interest rates, the money supply and the exchange rate to influence aggregate demand - in the UK, set by the Bank of England’s Monetary Policy Committee to meet a symmetric 2% CPI target.',
  ),
  p(
    'The MPC is operationally independent: the government sets the target, the Bank chooses the instruments. Independence is what makes the target credible, and credibility is what anchors expectations.',
  ),

  h('The transmission mechanism'),
  p('A change in Bank Rate reaches AD through several channels. Naming the channel is what earns the analysis marks.'),
  det(
    'The interest rate channels',
    'A RISE in Bank Rate reduces AD; a CUT raises it.',
    [
      '*Cost of borrowing* - dearer credit reduces consumption of durables and reduces investment, since fewer projects clear the higher hurdle rate.',
      '*Reward for saving* - a higher return raises saving and reduces consumption.',
      '*Mortgage payments* - higher payments cut disposable income for mortgaged households. In the UK this is the largest channel.',
      '*Asset prices and wealth* - higher rates lower the present value of assets, so house and share prices fall, and the negative wealth effect cuts consumption.',
      '*Exchange rate* - higher rates attract hot money inflows, appreciating sterling, which cuts import prices (directly disinflationary) and reduces export competitiveness.',
      '*Expectations* - a credible announcement lowers expected inflation, moderating wage demands and price-setting without any change in output.',
    ],
    [
      'Time lags of up to two years mean policy must be set on a forecast, and forecast error can make it pro-cyclical.',
      'Transmission is slow and uneven in the UK because most mortgages are on 2–5 year fixes, so a rate change reaches households only as fixes expire.',
      'The zero lower bound prevents meaningful further cuts in a deep recession.',
      'Confidence can dominate: in a downturn, firms will not invest and households will not borrow however cheap credit becomes.',
      'It is a blunt instrument - one rate applies to every region and sector, whatever their differing conditions.',
    ],
  ),
  diagram('ad-shift'),

  h('Quantitative easing'),
  det(
    'QE',
    'The central bank creates money electronically and buys assets, mainly government bonds, from financial institutions.',
    [
      'Buying bonds raises their price and so lowers their yield, reducing long-term interest rates across the economy.',
      'It raises asset prices generally, producing a positive wealth effect.',
      'It increases banks’ liquidity, which should raise lending.',
      'Used when Bank Rate is already at the lower bound and conventional policy is exhausted.',
    ],
    [
      'Banks may hold the extra reserves rather than lend, so the transmission to the real economy is weak - the money supply rises without AD rising.',
      'It inflates asset prices, and since asset ownership is concentrated, it worsens WEALTH INEQUALITY. This is the main political objection.',
      'It risks inflation if the money is not withdrawn as recovery arrives, and unwinding it (quantitative tightening) is untested at scale.',
      'It weakens the currency, raising import prices.',
    ],
  ),

  h('Evaluating monetary policy'),
  table(
    ['It depends on', 'Why'],
    [
      [
        'The CAUSE of the inflation',
        'This is the decisive one. Monetary policy acts on AD, so it treats demand-pull inflation well. Against COST-PUSH inflation it does nothing to the cause and can only restore the target by suppressing demand - accepting lower output and higher unemployment to offset a supply shock.',
      ],
      ['Where the economy is on AS', 'With spare capacity, loosening raises output; near capacity it raises only prices.'],
      ['Credibility', 'With well-anchored expectations, small changes suffice. Without credibility, very large ones are needed.'],
      ['Household indebtedness', 'Heavily indebted households respond more strongly to rate changes, so transmission is stronger but so is the risk of default.'],
      ['The exchange rate regime', 'Under a fixed rate, monetary policy must be devoted to defending the peg and cannot target domestic objectives.'],
    ],
  ),
  tip(
    'Compare fiscal and monetary policy directly: monetary policy is faster to change and independent of politics, but blunt and weak at the lower bound. Fiscal policy can be targeted at regions and sectors and works when rates cannot fall further, but is slow, political and constrained by debt.',
  ),
)

/* ========================================== SUPPLY-SIDE POLICY */

const supplySide = chapter(
  defn(
    'Supply-side policies',
    'Policies designed to increase the productive capacity of the economy - shifting LRAS to the right.',
  ),
  table(
    ['Family', 'Idea', 'Examples'],
    [
      [
        'Free-market',
        'Remove barriers so markets allocate resources more efficiently and firms face competitive pressure.',
        'Privatisation, deregulation, tax and benefit reform, reducing union power',
      ],
      [
        'Interventionist',
        'Government acts directly where markets under-provide.',
        'Infrastructure, education and training, R&D subsidies, affordable housing, industrial strategy',
      ],
    ],
  ),
  diagram('lras-shift'),

  h('The policies'),
  det(
    'Tax and benefit reform',
    'Reducing the wage replacement ratio raises the incentive to work and so raises the quantity of labour.',
    [
      'The *wage replacement ratio* is the proportion of in-work income that benefits would replace. A ratio of 0.8 means benefits cover 80% of the wage - a weak incentive to take a job.',
      'Raising the personal allowance (currently £12,570) or cutting the basic rate raises the return to work.',
      'Lower or more tightly targeted benefits raise the incentive to enter the workforce.',
      'Cutting corporation tax raises retained profit: on £100m of profit, a 20% rate leaves £80m rather than £60m at 40% - money available for capital spending.',
    ],
    [
      'Lower benefits raise poverty and inequality directly, and the employment response may be small - the equity/efficiency trade-off is sharp here.',
      'Empirical labour supply elasticities are low for most workers; the incentive effect is concentrated among second earners and the low paid.',
      'Firms may distribute a corporation tax cut as dividends rather than investing it.',
      'Tax cuts reduce revenue immediately while any supply-side gain is uncertain and delayed.',
    ],
  ),
  det(
    'Education and training',
    'Raises human capital, so workers are more productive and more occupationally mobile.',
    [
      'Directly raises the quality of labour and hence output per worker.',
      'Reduces structural unemployment by closing the skills mismatch - especially where there are shortages, such as STEM.',
      'Attracts FDI, since firms locate where skilled labour is available.',
    ],
    [
      'Enormous time lag - changes to primary education reach the workforce 14+ years later.',
      'It only works if the training matches what employers actually need; government has poor information about future skill demand.',
      'Significant opportunity cost, and the benefits are hard to attribute to any one policy.',
      'Trained workers may emigrate - a brain drain that transfers the return abroad.',
    ],
  ),
  det(
    'Infrastructure',
    'Roads, rail, ports, airports, broadband and utility networks lower costs across every industry at once.',
    [
      'Reduces firms’ transport and communication costs, raising profitability and attracting FDI.',
      'Improves geographical mobility of labour, so raises the effective quantity of labour.',
      'It is also a demand-side stimulus while being built, so it works on AD and LRAS together.',
    ],
    [
      'The lags are extreme: a third Heathrow runway was first proposed in 2003 with construction not due to start until 2029; Crossrail ran from 2009 to 2022.',
      'Very high cost with a large opportunity cost, and projects are prone to overrun.',
      'Project selection can be political rather than economic, so the supply-side return may never materialise.',
    ],
  ),
  det(
    'Immigration policy',
    'Relaxing controls raises the quantity of labour and can fill skills shortages.',
    [
      'A larger labour force raises LRAS directly and moderates wage pressure, lowering firms’ costs.',
      'A points-based system targets shortages and raises average skill levels.',
      'Migrants of working age are typically net fiscal contributors.',
    ],
    [
      'Migration raises AD as well as AS, so pressure on housing, schools and health services rises too - the net effect on output PER HEAD is contested.',
      'It may depress wages at the bottom of the distribution in particular local labour markets.',
      'Politically constrained regardless of the economics.',
    ],
  ),
  det(
    'Privatisation and deregulation',
    'Transferring assets to the private sector and removing rules raises efficiency through competitive pressure.',
    [
      'Private firms answer to shareholders and the profit motive, so they have an incentive to cut costs and raise quality - reducing X-inefficiency.',
      'Deregulation cuts compliance costs and opens markets to entry: Royal Mail held a 360-year letter monopoly before liberalisation.',
      'UK examples: BT (1984), British Gas (1986), British Airways (1987), water (1989), Royal Mail (2013).',
    ],
    [
      'Privatising a NATURAL MONOPOLY simply converts a public monopoly into a private one, so it needs a regulator - hence Ofwat, Ofgem, Ofcom.',
      'Profit-maximising firms may cut quality, safety or unprofitable rural services that the state cross-subsidised.',
      'Deregulation can create market failure: financial deregulation in the 1980s and 90s is widely blamed for the credit conditions preceding 2008.',
      'Asset sales are a one-off revenue gain but a permanent loss of the income stream.',
    ],
  ),
  det(
    'Subsidies, R&D and affordable housing',
    'Direct intervention where the market under-provides because of positive externalities.',
    [
      'Childcare subsidies - up to 30 free hours a week - let parents return to work, raising labour supply.',
      'R&D subsidies raise innovation, which is the main long-run driver of growth; solar power is around 60% cheaper than in 2010, partly through subsidy-driven scale.',
      'Affordable housing raises geographical mobility where high housing costs cause labour shortages.',
    ],
    [
      'Opportunity cost, and government may pick the wrong technologies - the information problem.',
      'Subsidies can entrench inefficiency by shielding firms from competition, and are politically hard to withdraw.',
      'Building more homes raises supply for buyers but reduces the value of existing homes, so it is politically resisted by existing owners.',
    ],
  ),

  h('Benefits of supply-side policy'),
  table(
    ['Benefit', 'Explanation'],
    [
      [
        'Lower inflationary pressure',
        'Greater capacity means less scarcity of factors, so AD can grow without bidding up prices.',
      ],
      [
        'Better international competitiveness',
        'Skilled labour and better infrastructure lower unit costs and raise quality, improving net exports.',
      ],
      [
        'Lower unemployment',
        'Training reduces occupational immobility and so structural unemployment; infrastructure improves geographical mobility.',
      ],
      [
        'It resolves policy conflicts',
        'An LRAS shift raises output AND lowers the price level, so growth, employment, inflation and competitiveness all improve together. No demand-side policy can do that.',
      ],
    ],
  ),
  h('Drawbacks'),
  table(
    ['Drawback', 'Explanation'],
    [
      ['Time lags', 'The longest of any policy family - years to decades. Useless for a current recession.'],
      ['Cost', 'Interventionist policies are expensive with a large opportunity cost.'],
      ['Uncertain returns', 'The link between spending and productivity is hard to establish, so it is hard to know what worked.'],
      ['Equity effects', 'Free-market policies - lower benefits, deregulation, weaker unions - often raise inequality.'],
      ['Only works if demand exists', 'Extra capacity is worthless without demand to use it. In a deep recession, supply-side policy alone does nothing.'],
    ],
  ),
)

/* ======================================== BALANCE OF PAYMENTS */

const balanceOfPayments = chapter(
  defn(
    'The balance of payments',
    'A record of all financial transactions between a country and the rest of the world over a period of time.',
  ),
  p('It has two main parts, which must in principle sum to zero: a current account deficit is financed by a financial account surplus.'),
  h('The current account'),
  table(
    ['Component', 'What it covers'],
    [
      ['Trade in goods', 'Visible trade - tangible products. The UK runs a large persistent deficit here.'],
      ['Trade in services', 'Invisible trade - banking, insurance, tourism, transport, telecoms. The UK runs a surplus here.'],
      ['Primary income', 'Net investment income - interest, dividends and rent flowing between countries.'],
      [
        'Secondary income',
        'Current transfers where nothing is exchanged in return - foreign aid, contributions to international bodies, remittances.',
      ],
    ],
  ),
  h('The financial account'),
  table(
    ['Component', 'What it covers'],
    [
      ['Direct investment', 'FDI - a foreign firm building a factory here, or a UK firm building one abroad.'],
      ['Portfolio investment', 'Purchases of shares and bonds without control.'],
      ['Reserve assets', 'Central bank holdings of foreign currency and gold.'],
    ],
  ),
  worked(
    'Classify each: (a) a Chinese carmaker builds a UK factory; (b) Cadbury UK sends profits to its US parent; (c) UAE tourists spend in London; (d) British tourists spend in Spain.',
    '(a) Financial account, direct investment, credit. (b) Current account, primary income, debit. (c) Current account, trade in services, credit. (d) Current account, trade in services, debit.',
  ),
  tip(
    'Money coming IN is a credit; money going OUT is a debit. Ask which direction the money flows, not which direction the goods or people do - British tourists in Spain send money OUT, so it is a debit.',
  ),

  h('Causes of a current account deficit'),
  det(
    'Poor international competitiveness',
    'If domestic goods are dearer or lower quality than foreign ones, exports fall and imports rise.',
    [
      'Higher domestic inflation than trading partners erodes price competitiveness.',
      'Low productivity growth raises unit labour costs.',
      'A strong exchange rate makes exports dear and imports cheap.',
      'Weak non-price competitiveness - design, reliability, branding, after-sales service.',
    ],
    [
      'A deficit may instead reflect strong domestic GROWTH sucking in imports, which is a sign of a healthy economy rather than an uncompetitive one.',
      'It may reflect imports of capital goods that raise future productive capacity - borrowing to invest rather than to consume.',
    ],
  ),
  det(
    'Deindustrialisation and structural change',
    'A shrinking manufacturing base reduces the capacity to export goods.',
    [
      'The UK’s persistent goods deficit reflects the long-run shift from manufacturing to services.',
    ],
    [
      'Partly offset by a services surplus - the UK is a major exporter of financial and professional services.',
      'Comparative advantage implies specialising in services is efficient, not a failure.',
    ],
  ),
  h('Consequences of a persistent deficit'),
  table(
    ['Consequence', 'Explanation'],
    [
      [
        'Withdrawal from the circular flow',
        'A rising deficit means (X − M) falls, so AD falls: output falls, derived demand for labour falls, unemployment and benefit spending rise, tax revenue falls, and the budget deficit widens.',
      ],
      [
        'Structural unemployment',
        'Falling exports and rising imports cause deindustrialisation, concentrated regionally.',
      ],
      [
        'Debt burden and loss of confidence',
        'The deficit is financed by a financial account surplus - foreign purchases of UK assets and government bonds. If investors doubt the ability to repay, interest rates rise and capital may leave suddenly.',
      ],
      [
        'Loss of policy freedom',
        'Countries in a currency union cannot devalue, so adjustment must come through wages and prices - the southern European experience between 2000 and 2007.',
      ],
    ],
  ),
  h('Is a deficit necessarily a problem?'),
  table(
    ['It depends on', 'Why'],
    [
      ['Its size relative to GDP', 'A few percent of GDP is easily financed; a large deficit is not.'],
      ['How long it persists', 'A cyclical deficit corrects itself; a structural one does not.'],
      ['How it is financed', 'Long-term FDI is stable and productive; short-term "hot money" can reverse overnight.'],
      ['What the imports are', 'Capital goods raise future capacity; consumer goods do not.'],
      ['The exchange rate regime', 'A floating rate adjusts automatically to correct a deficit; a fixed rate does not.'],
    ],
  ),
  h('Policies to correct a deficit'),
  table(
    ['Policy', 'How it works', 'Limitation'],
    [
      [
        'Expenditure switching (depreciation, tariffs)',
        'Makes imports dear and exports cheap, switching spending towards domestic output.',
        'Requires the Marshall–Lerner condition; the J-curve delays it; it is inflationary; tariffs invite retaliation.',
      ],
      [
        'Expenditure reducing (contractionary fiscal or monetary policy)',
        'Lowers domestic incomes, so import demand falls.',
        'Works, but at the cost of lower growth and higher unemployment - treating the symptom by shrinking the economy.',
      ],
      [
        'Supply-side policy',
        'Raises productivity and quality, improving competitiveness at the root.',
        'The only lasting solution, but it works over years, not months.',
      ],
      ['Do nothing', 'A floating exchange rate should correct a deficit automatically over time, and demographics may reduce import demand.', 'May take a long time, and confidence can break first.'],
    ],
  ),
  diagram('j-curve'),
  diagram('exchange-rate'),
)

export const ECON_THEME2C_NOTES = {
  'Fiscal Policy': fiscalPolicy,
  'Monetary Policy': monetaryPolicy,
  'Supply-Side Policy': supplySide,
  'Balance of Payments': balanceOfPayments,
}
