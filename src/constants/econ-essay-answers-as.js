/*
  Developed answers for the AS (8EC0) questions in the essay bank, Q001-Q010.
  All are 20-mark Section B extended questions: KAA 14, evaluation 6.

  Shape of every entry (see econ-essay-answers.js for the merge):

    diagrams    [[id, whatToShow], ...]  - registered diagram ids
    intro       definitions + the line the answer is going to take
    rows        [[analysis, evaluation], ...] - each analysis chain sits
                beside the evaluation that qualifies it, which is the
                table the student sees
    conclusion  the justified judgement, or null where the mark value
                does not ask for one
    kaa / eval  indicative content in the style of an Edexcel mark scheme:
                the points a full-mark answer is expected to hit

  These are original questions, so the indicative content is ours, written
  to the specification and to how Pearson's published schemes are laid
  out - not copied from any real scheme.
*/

const A = (diagrams, intro, rows, conclusion, kaa, evaluation) => ({
  diagrams,
  intro,
  rows,
  conclusion,
  markScheme: { kaa, evaluation },
})

export const ECON_ESSAY_ANSWERS_AS = {
  Q001: A(
    [
      [
        'ppf',
        'A PPF for a government choosing between two uses of the same resources, e.g. healthcare on one axis and defence on the other. Mark two points on the frontier: moving from one to the other shows the opportunity cost as the quantity of the other good given up. A point inside the frontier shows unemployed resources, where the opportunity cost of using them is zero.',
      ],
    ],
    'Opportunity cost is the value of the next best alternative forgone when a choice is made. It exists because resources are scarce relative to wants, so every use of income, time or public money means something else cannot be had. The concept explains the shape of decisions made by consumers with a fixed budget and by governments with a fixed tax base, and it underlies the production possibility frontier: a movement along the frontier is opportunity cost drawn as a picture.',
    [
      [
        'Consumers have limited income, so buying one good means giving up another. A student who spends £60 on a concert ticket has given up roughly a week of food shopping, and a rational consumer only buys the ticket if the satisfaction from it exceeds that of the food. This is why demand curves slope downwards: when the price of a good rises, the opportunity cost of buying it rises too, because more of other goods must be sacrificed, so consumers switch away from it. It also explains the substitution between similar products and why consumers respond to sales and discounts, which lower the opportunity cost of the purchase.',
        'This assumes consumers are rational and calculate the alternatives they give up. Behavioural economics suggests they often do not: habitual purchases, herd behaviour and bounded rationality mean many choices are made without any conscious weighing of alternatives. Small everyday purchases are rarely evaluated this way, so opportunity cost explains the pattern of consumer choices in aggregate better than any individual decision.',
      ],
      [
        'Governments face the same constraint with tax revenue. On the PPF, spending more on healthcare means moving along the frontier and giving up units of defence, education or infrastructure. The choice between capital goods and consumer goods is the clearest case: building a high-speed rail line means forgoing current consumption, such as higher benefit payments, in exchange for higher productive capacity later. Every spending review is an exercise in opportunity cost, and the concept explains why governments prioritise, ration and means-test rather than fund everything.',
        'Governments, unlike most consumers, can borrow. Deficit financing does not remove opportunity cost but shifts it to future taxpayers through debt interest, so the trade-off is across time rather than between goods today. Where there are unemployed resources - the economy is inside its PPF - additional spending has an opportunity cost close to zero, which is the Keynesian case for stimulus in a recession.',
      ],
      [
        'The concept goes beyond individual choices. Firms decide what to produce by comparing the return on one use of capital with the next best, and countries specialise according to comparative advantage, which is defined in terms of opportunity cost: the country that gives up less of other goods to produce something should produce it. Opportunity cost is therefore the common language for the economic problem at every level, from a household budget to trade policy.',
        'Opportunity cost is hard to measure in practice. The next best alternative is often non-monetary - leisure time, environmental quality, future generations - and valuing it involves normative judgements about what matters. Two governments with the same resources will draw different conclusions about what to give up, so the concept frames the choice without determining it.',
      ],
    ],
    'Opportunity cost is central to explaining why both consumers and governments must choose, and it explains the direction of their responses to changes in prices, incomes and revenues. It explains less well which choice is made, because that depends on preferences, information and rationality that the concept takes as given. For governments in particular, borrowing and unemployed resources change the timing and size of the cost rather than removing it. To a large extent, then, opportunity cost is the framework for choice rather than a full explanation of it.',
    [
      'Definition of opportunity cost as the next best alternative forgone',
      'Link to scarcity: finite resources against unlimited wants force choice',
      'PPF diagram: movement along the frontier as the opportunity cost of reallocating resources',
      'Consumers: limited income, rational choice, the opportunity cost of a purchase rising when its price rises',
      'Governments: finite tax revenue, spending priorities, capital versus consumer goods and current versus future output',
      'Application to specialisation and comparative advantage',
    ],
    [
      'Consumers are not always rational; behavioural factors mean opportunity cost is often not consciously assessed',
      'Governments can borrow, shifting the cost across time rather than eliminating it',
      'Inside the PPF the opportunity cost of using unemployed resources is close to zero',
      'Opportunity cost is difficult to measure when the alternative is non-monetary, and involves value judgements',
      'The concept explains that a choice must be made more than which choice is made',
    ],
  ),

  Q002: A(
    [
      [
        'cost-shock-elasticity',
        'Supply of bread shifting left as the higher wheat price raises production costs, drawn against a steep, price-inelastic demand curve. Show the large rise in price from P1 to P2 and the small fall in quantity from Q1 to Q2. Label the equilibrium points so the incidence on consumers is visible.',
      ],
    ],
    'Wheat is milled into flour, the main ingredient of bread, so it is a factor input for bakers. A rise in the world price of wheat raises bakers’ costs of production, shifting the supply curve for bread to the left at every price. The expected effect is a higher equilibrium price and a lower equilibrium quantity of bread, with the exact size of each depending on the share of wheat in total costs and on how responsive demand is to the price change.',
    [
      [
        'A rise in an input price is a supply-side shock. At the original price, bakers now make a smaller profit per loaf, so some cut output and the least efficient producers leave the market; the supply curve shifts left from S1 to S2. At the old price there is now excess demand, which bids the price up until a new equilibrium is reached at a higher price and lower quantity. Consumers face a contraction of demand as they move up the demand curve, and the higher price rations bread to those most willing to pay.',
        'The size of the shift depends on the share of wheat in the cost of a loaf. Flour is a modest part of the shelf price: labour, energy, packaging, distribution and retail margins make up most of it, so even a large percentage rise in wheat translates into a small percentage rise in total costs. The leftward shift is therefore likely to be small relative to the headline wheat price change.',
      ],
      [
        'Bread is a staple with few close substitutes, so demand is price inelastic. With inelastic demand the leftward shift in supply causes a proportionately large rise in price and only a small fall in quantity. Most of the extra cost is passed on to consumers as higher prices; the incidence falls mainly on them rather than on producers. Because demand is inelastic, total spending on bread rises, so bakers’ revenue may even increase despite selling slightly less.',
        'Demand is not uniformly inelastic. Premium and artisan bread has closer substitutes and more price-sensitive buyers than basic sliced loaves, so the effect differs across the market. Supermarkets also use own-label bread as a traffic-building loss leader and may absorb part of the cost rise in their margins rather than pass it on, especially in a price war between the large grocers.',
      ],
      [
        'There are knock-on effects in related markets. As bread becomes more expensive, demand for substitutes such as rice, potatoes and pasta shifts right, raising their prices. Demand for complements such as butter or spreads may fall slightly. Other wheat-based goods - pasta, biscuits, breakfast cereals - face the same cost shock, so the price rise is spread across a basket of goods and contributes to measured food inflation, which affects real incomes, particularly for lower-income households who spend a larger share on food.',
        'Timing matters. Large bakers buy wheat on forward contracts and hedge, so a world price rise may take months to reach the shop shelf, and if the rise proves temporary it may never be passed on fully. Exchange rates also matter: wheat is priced in dollars, so a stronger pound would offset part of the increase for UK buyers.',
      ],
    ],
    'The most likely outcome is a modest rise in the price of bread with only a small fall in the quantity sold, because demand is inelastic and wheat is a limited share of costs. The impact on consumers is greater than the impact on bakers, and it is regressive because bread is a larger part of low-income budgets. Whether the impact is significant depends on the size and persistence of the wheat price change, the degree of pass-through by retailers, and the exchange rate at the time.',
    [
      'Wheat as a factor input for bread; a rise in its price raises costs of production',
      'Diagram: leftward shift of supply, higher equilibrium price, lower equilibrium quantity',
      'Explanation of the adjustment through excess demand and a contraction of demand',
      'Price elasticity of demand for bread is low, so price rises significantly and quantity falls little',
      'Incidence of the cost rise falls mainly on consumers; total revenue may rise',
      'Effects on related markets - substitutes, complements and other wheat products',
    ],
    [
      'Magnitude depends on the share of wheat in the total cost of a loaf',
      'PED varies across bread types; premium bread has more elastic demand',
      'Retailers may absorb the cost rise in margins; loss-leader pricing',
      'Time lags from hedging and forward contracts; the rise may be temporary',
      'Exchange rate movements can offset or amplify a dollar-priced input',
    ],
  ),

  Q003: A(
    [
      [
        'negative-externality',
        'MPC below MSC with the vertical gap showing the external cost. Mark the free-market equilibrium where MPC meets demand and the social optimum where MSC meets demand, then shade the welfare-loss triangle between them. This triangle is the case for intervention; the evaluation is about whether the intervention costs more than the triangle.',
      ],
    ],
    'Market failure occurs when the free market fails to allocate resources efficiently, so that output is above or below the socially optimal level and there is a net welfare loss. Externalities, public goods, information gaps and monopoly power are the main causes. Government intervention - taxes, subsidies, regulation, state provision - aims to move output towards the social optimum. The question is whether this is always justified, and the answer turns on the size of the market failure against the risk that intervention itself fails.',
    [
      [
        'Where production creates negative externalities, marginal social cost exceeds marginal private cost and the market over-produces at Q1 rather than the social optimum Q*. The shaded triangle between MSC and MPC over that range is a deadweight welfare loss. An indirect tax equal to the external cost at the optimum raises MPC to MSC, so firms internalise the cost and output falls to Q*. The UK Soft Drinks Industry Levy is an example: it changed relative prices, prompted manufacturers to cut sugar content, and reduced the external costs falling on the NHS. In such cases intervention removes a real welfare loss.',
        'Intervention depends on the government being able to measure the external cost accurately, and it usually cannot. If the tax is set too high or too low, output moves to the wrong level and a new welfare loss replaces the old one. Information failure applies to governments as well as markets, and the administrative and compliance costs of the policy must be set against the welfare loss it removes.',
      ],
      [
        'Public goods are non-excludable and non-rival, so the free-rider problem means private firms cannot charge for them and the market provides nothing at all. Street lighting, flood defences and national defence would be under-supplied or missing without state provision funded through taxation. Here intervention is not correcting an inefficient quantity but creating a market that would otherwise not exist, which is the strongest case for government action.',
        'Even here there is an opportunity cost: tax revenue used on one public good cannot be used on another, and governments have to judge how much to provide without a price signal to guide them. Technology can also turn some public goods into private goods - encrypted broadcasting and toll roads make exclusion possible - so the case for state provision shrinks over time in some markets.',
      ],
      [
        'Information gaps lead consumers to under-consume merit goods and over-consume demerit goods. Compulsory education, health warnings and age restrictions on tobacco correct these gaps. But every intervention risks unintended consequences: a high tobacco duty creates an illicit market, a minimum price can produce a surplus that must be bought and stored, and regulation can be captured by the firms it is meant to police. Where the market failure is small and the policy costly, the intervention may cause a larger welfare loss than the failure it targets. Government failure is the reason intervention is not always justified.',
        'Whether intervention is worthwhile depends on the scale of the failure, the quality of the policy design and the political incentives of those designing it. Politicians face short electoral cycles and pressure from lobby groups, which can bias intervention towards visible, popular measures rather than efficient ones. That is an argument for care in intervention, not for abandoning it.',
      ],
    ],
    'Government intervention is justified when the welfare loss from a market failure is large and the intervention can be designed and administered at low cost, as with public goods and major externalities. It is not always justified: where the failure is minor, the external cost cannot be measured, or the policy creates its own distortions, government failure can leave the allocation worse than the market did. The word “always” is therefore too strong. The correct test is whether the expected gain from intervention exceeds its expected cost, judged case by case.',
    [
      'Definition of market failure and the main causes: externalities, public goods, information gaps, market power',
      'Diagram showing a negative externality with the welfare loss triangle',
      'How taxation or regulation moves output towards the social optimum',
      'Public goods and the free-rider problem: the case for state provision',
      'Information gaps and merit or demerit goods',
      'Definition and examples of government failure',
    ],
    [
      'Governments face information problems in valuing external costs; risk of setting policy at the wrong level',
      'Administrative and compliance costs may exceed the welfare loss removed',
      'Unintended consequences: illicit markets, surpluses, regulatory capture',
      'Opportunity cost of intervention and the political incentives shaping it',
      'Judgement: justified when the failure is large and the policy well designed, not “always”',
    ],
  ),

  Q004: A(
    [
      [
        'indirect-tax',
        'A specific tax on cigarettes shifting supply vertically upwards by the amount of the tax, drawn against steep, inelastic demand. Show the large rise in price and the small fall in quantity, and mark the consumer and producer shares of the tax - the consumer share is the larger one because demand is inelastic.',
      ],
    ],
    'Tobacco is a demerit good with a negative externality of consumption: the private benefit to the smoker exceeds the social benefit once the costs to the NHS, passive smokers and lost productivity are included, so the market over-consumes. An indirect tax raises the price, aiming to cut consumption to the social optimum and to raise revenue. Whether it is the most effective method depends on how responsive smokers are to price and on what the alternatives - regulation, information and bans - can achieve.',
    [
      [
        'A specific duty on cigarettes shifts the supply curve vertically upwards by the amount of the tax. The price rises and quantity demanded contracts, moving consumption from Q1 towards Q*. If the tax is set equal to the external cost at the optimum, smokers pay the full social cost of their choice and the externality is internalised. The tax also raises substantial revenue, which can be hypothecated to healthcare and anti-smoking campaigns, so it both reduces the externality and funds the treatment of its consequences. Compared with a ban, it preserves consumer choice for those who value smoking highly.',
        'Demand for cigarettes is price inelastic because nicotine is addictive; estimates for the UK put the elasticity around -0.4 to -0.5, so a 10% price rise cuts consumption by only 4-5%. The tax therefore raises a great deal of revenue but reduces consumption far less than the diagram suggests, and the burden falls mainly on smokers, who are disproportionately on lower incomes. The tax is regressive.',
      ],
      [
        'The alternatives are regulation and information. The 2007 ban on smoking in enclosed public places, the rise in the legal age to 18, the display ban and plain packaging all reduce consumption directly rather than through price, and they work on the visibility and social acceptability of smoking. Information provision - graphic health warnings, NHS stop-smoking services - shifts the demand curve inwards by changing preferences, which addresses the information failure at the root of the problem rather than only raising the cost of ignoring it. These are especially effective in stopping young people from starting.',
        'Regulation raises no revenue and has enforcement costs, and information campaigns take years to change behaviour. Their effects are also harder to measure than a tax. None of the alternatives alone would achieve what the combination has: UK smoking prevalence has fallen sharply over two decades under a package of duties, bans and campaigns rather than any single instrument.',
      ],
      [
        'A very high tax creates its own market failure. Illicit trade - smuggled and counterfeit cigarettes - grows as the legal price rises, so some consumption continues untaxed and unregulated, and HMRC loses the revenue. Cross-border shopping has the same effect. Because the tax is regressive, it also worsens inequality unless the revenue is used to fund services for the same households. These unintended consequences limit how far the tax alone can be pushed and are why the policy mix has drifted towards regulation and cessation support.',
        'The strength of these effects depends on enforcement and on how the tax compares with neighbouring countries. Long-run price elasticity is higher than short-run because addiction fades as smokers quit, and young people, who are more price sensitive and not yet addicted, respond more strongly to duty rises. The tax is more effective at preventing new smokers than at stopping existing ones.',
      ],
    ],
    'A tax is an effective and revenue-raising part of the response to smoking, and it is the only instrument that makes smokers pay the external cost directly. It is not the most effective instrument on its own, because inelastic demand limits its effect on consumption, it is regressive, and beyond a point it feeds illicit trade. The most effective approach is the combination that the UK has used: duty to raise the price, regulation to reduce access and visibility, and information to shift preferences, with each instrument covering the weaknesses of the others.',
    [
      'Tobacco as a demerit good with negative consumption externalities; MPB above MSB and over-consumption',
      'Diagram of an indirect tax raising price and reducing quantity',
      'Internalising the externality and the revenue raised, possibly hypothecated',
      'Incidence of the tax when demand is inelastic',
      'Alternative policies: regulation, bans, age limits, information provision',
      'Unintended consequences: illicit markets, regressive effects',
    ],
    [
      'Price inelastic demand means a large price rise produces only a small fall in consumption',
      'Regressive impact on low-income households',
      'Short-run versus long-run elasticity; younger consumers more responsive',
      'Alternatives raise no revenue and have enforcement costs, but attack the information failure directly',
      'Judgement: effective as part of a package rather than the most effective alone',
    ],
  ),

  Q005: A(
    [
      [
        'output-gap',
        'The economic cycle with a negative output gap closing as actual output rises towards trend. Falling unemployment is what closing the gap looks like in the labour market, and the diagram lets you make the point that once the gap is closed further falls in unemployment are inflationary.',
      ],
      [
        'phillips',
        'The short-run Phillips curve: a move down the unemployment axis is a move up the inflation axis. Use it to show that a fall in unemployment can be evidence of an improving economy or of overheating, depending on where on the curve the economy starts.',
      ],
    ],
    'Unemployment measures those of working age who are without work, available for work and actively seeking it. A fall in the rate is one of the four main macroeconomic objectives being met and usually signals rising output and incomes. But unemployment is only one indicator, it can fall for reasons that do not reflect improvement, and it can fall too far. Whether it is evidence of better economic performance depends on why it fell and what happened to the other objectives at the same time.',
    [
      [
        'Falling unemployment usually means firms are hiring because demand for their output is rising, so real GDP is growing and a negative output gap is closing. More people in work raises household incomes and consumption, which supports further growth through the multiplier. Government finances improve on both sides: income tax and National Insurance receipts rise while spending on Jobseeker’s Allowance and Universal Credit falls. The social costs of unemployment - poverty, ill health, crime, loss of skills - fall as well. On this reading, a lower unemployment rate is strong evidence that performance has improved.',
        'The rate can fall without any of this happening. If discouraged workers stop looking and become economically inactive, they leave the unemployment count without finding work; a rising inactivity rate alongside falling unemployment is a sign of weakness, not strength. Similarly, a rise in underemployment - part-time or zero-hours workers wanting more hours - lowers measured unemployment while leaving output and incomes little changed.',
      ],
      [
        'Unemployment can fall below the level consistent with stable inflation. On the short-run Phillips curve, lower unemployment is traded for higher wage growth and demand-pull inflation; if the economy is already at full capacity, further hiring bids up wages, feeds through to prices and erodes real incomes. A tight labour market alongside rising inflation and a widening current account deficit, as more of the extra spending leaks into imports, would suggest performance is deteriorating even as the headline unemployment figure improves. The direction of the other objectives has to be read alongside it.',
        'This depends on the amount of spare capacity. When unemployment is high and there is a large negative output gap, a fall is almost entirely good news. It is only near the natural rate that the trade-off bites. Productivity also matters: the UK’s experience after 2010 was of falling unemployment with weak output per worker - jobs-rich but growth-poor - so the fall in unemployment overstated the improvement in living standards.',
      ],
      [
        'Economic performance is judged across several measures: real GDP per capita, inflation, the balance of payments, and broader measures of living standards such as the HDI or income distribution. A fall in unemployment concentrated in low-paid, insecure work, or in one region while others stagnate, adds less to welfare than the headline suggests. Which measure of unemployment is used also matters - the claimant count and the Labour Force Survey can move differently - so the fall itself should be checked before it is read as evidence.',
        'None of this means the indicator is useless. Sustained falls in unemployment over several years, alongside rising real wages and stable inflation, are as good a sign of improving performance as macroeconomics offers. The caution is about single readings and about ignoring the reasons behind the change.',
      ],
    ],
    'A fall in unemployment is usually evidence of improving performance, because it typically reflects rising output and brings higher incomes and stronger public finances. It is not sufficient evidence on its own: it can be caused by rising inactivity or underemployment, it can signal overheating if it goes below the natural rate, and it says nothing about productivity, living standards or distribution. The extent to which it is evidence of improvement therefore depends on its cause and on whether inflation, growth and the current account improved with it.',
    [
      'Definition of unemployment and its measurement (LFS, claimant count)',
      'Falling unemployment as an objective being met; link to rising real output and closing the output gap',
      'Benefits: higher incomes and consumption, improved public finances, lower social costs',
      'Phillips curve trade-off: falling unemployment and rising inflation',
      'Other measures of performance: growth, inflation, current account, living standards',
      'Diagram of the output gap or Phillips curve',
    ],
    [
      'The fall may reflect rising inactivity or underemployment rather than job creation',
      'Depends on spare capacity: near the natural rate a fall is inflationary',
      'Quality and distribution of the jobs created; regional differences',
      'Productivity may be weak even as employment rises',
      'Judgement: usually good evidence, but only alongside the other objectives',
    ],
  ),

  Q006: A(
    [
      [
        'monetary-transmission',
        'The transmission mechanism from a rise in Bank Rate through market interest rates, asset prices, expectations and the exchange rate to each component of AD. Use it to structure the three chains below.',
      ],
      [
        'ad-shift',
        'AD shifting left from AD1 to AD2 on an AD/AS diagram, with real output falling and the price level falling or rising more slowly. Show the smaller effect on output when the economy is on the steep part of the AS curve.',
      ],
    ],
    'Aggregate demand is the total planned spending on an economy’s goods and services at a given price level: consumption plus investment plus government spending plus net exports. Interest rates are the cost of borrowing and the reward for saving, so a rise works on consumption, investment and net exports through the transmission mechanism. The likely effect is a leftward shift of AD; the size and timing of the shift depend on how households and firms are financed and on what else is happening to confidence.',
    [
      [
        'Consumption is the largest component of AD, about 60% of UK spending, and it is the most sensitive to interest rates. Higher mortgage rates raise monthly repayments for households on variable or expiring fixed-rate deals, cutting discretionary income. Credit card and personal loan rates rise, making borrowing to spend more expensive, while a higher return on savings raises the opportunity cost of spending. Higher rates also reduce house prices as mortgages become less affordable, and the negative wealth effect makes homeowners feel poorer and spend less. Each channel reduces C and shifts AD to the left.',
        'The effect depends on the structure of household finance. Since most UK mortgages moved to fixed-rate deals, a rise in Bank Rate reaches borrowers only as their deals expire, spreading the effect over about two years. Savers, including many pensioners, gain income and may spend more, partly offsetting the fall. If the rise is small and expected, or households have large savings buffers, consumption may barely respond.',
      ],
      [
        'Investment falls because the cost of borrowing rises: fewer projects have an expected return above the interest rate, so firms postpone or cancel capital spending. Higher rates also raise the return on holding financial assets instead of building capacity, and by reducing expected consumer demand they lower the expected profitability of investment through the accelerator. Business confidence often falls when rates rise, since it signals the central bank is trying to slow the economy. Investment is the most volatile component of AD, so even a modest fall can have a noticeable effect on the shift.',
        'Keynes argued investment depends more on expected demand and “animal spirits” than on the interest rate. Firms with large retained profits borrow little and are insulated from rate rises, and a firm that expects strong demand will invest at 5% just as readily as at 4%. The interest-rate channel to investment is therefore real but weaker than its place in the transmission mechanism suggests.',
      ],
      [
        'Higher UK interest rates relative to other countries attract hot money inflows, as foreign investors move funds into sterling deposits and bonds for the better return. Demand for the pound rises and the exchange rate appreciates. Exports become more expensive in foreign currency and imports cheaper in sterling, so export volumes fall and import volumes rise, reducing net exports (X - M). This reinforces the fall in consumption and investment, and the cheaper imports also lower the price level directly, which is part of why the Bank uses rates to control inflation.',
        'The exchange-rate channel depends on relative rates: if other central banks are raising rates at the same time, as most did in 2022-23, the pound may not appreciate at all. The Marshall-Lerner condition and the J-curve mean net exports respond to a stronger pound only with a lag and only if demand for traded goods is sufficiently elastic. A large share of UK exports are services that are less price sensitive.',
      ],
    ],
    'A rise in interest rates is likely to reduce aggregate demand, mainly through consumption and investment, with net exports contributing if the pound appreciates. The size of the fall depends on the size of the rise, the proportion of borrowers on variable rates, the state of confidence and what other central banks are doing, and most of the effect arrives with a lag of one to two years. The shift is therefore probable rather than automatic, and it is the reason the Bank of England moves rates gradually and watches the data as the effects work through.',
    [
      'Definition of AD and its components',
      'Interest rate as the cost of borrowing and reward for saving; the transmission mechanism',
      'Consumption channel: mortgages, credit, saving, wealth effects',
      'Investment channel: cost of borrowing, expected returns, confidence',
      'Exchange rate channel: hot money, appreciation, net exports',
      'AD/AS diagram showing the leftward shift and the effect on output and prices',
    ],
    [
      'Fixed-rate mortgages delay the effect; time lags of 18-24 months',
      'Savers gain income; offsetting effects',
      'Investment depends more on confidence and expected demand than on interest rates',
      'Relative interest rates and the Marshall-Lerner condition limit the exchange-rate channel',
      'Magnitude depends on the size of the rise and the starting position of the economy',
    ],
  ),

  Q007: A(
    [
      [
        'lras-shift',
        'LRAS shifting right from LRAS1 to LRAS2 as the capital stock grows, with equilibrium real output rising and the price level falling at the original AD. Label the increase in output as the rise in productive potential.',
      ],
      [
        'ppf-shift',
        'The PPF shifting outwards as net investment adds to the capital stock. Pair it with the LRAS diagram: both show the same increase in the economy’s capacity from two viewpoints.',
      ],
    ],
    'Net investment is gross investment minus depreciation: the addition to the capital stock after worn-out capital has been replaced. Long-run aggregate supply is the economy’s productive potential, determined by the quantity and quality of its factors of production. Because net investment adds to the capital stock, it should raise LRAS, but the extent depends on what is bought, how productively it is used and how large it is relative to the economy.',
    [
      [
        'A rise in net investment means the capital stock is growing, so at any price level firms can produce more output. LRAS shifts right and the PPF shifts outward. The new capacity lets the economy grow without generating demand-pull inflation: with AD unchanged, the price level falls and real output rises. Over time this shows up as a higher trend rate of growth. Investment in infrastructure - transport, energy, broadband - lowers costs for every firm that uses it, which raises capacity across the economy rather than in one sector.',
        'Not all investment adds capacity in the same way. Replacement investment maintains the capital stock rather than expanding it, and investment in property or financial assets adds little to productive potential. If firms are already operating below capacity, new capital may stand idle. The shift in LRAS depends on the type of investment, not just its total.',
      ],
      [
        'New capital usually embodies newer technology, so investment raises the productivity of labour as well as the quantity of capital. A worker with better machinery or software produces more per hour, which lowers unit costs and raises the output attainable from the existing workforce. This is why economies with higher investment ratios have tended to grow faster; the UK’s investment share of GDP has been persistently below the G7 average, which is one explanation offered for its weak productivity growth since 2008.',
        'Capital is only productive if there is skilled labour to use it and management to organise it. Investment in equipment without complementary investment in training can raise costs without raising output. There are also long time lags: a new factory or rail line takes years to build and longer to reach full use, so the effect on LRAS is gradual.',
      ],
      [
        'Investment is also a component of aggregate demand, so a rise in net investment shifts AD right in the short run at the same time as it builds capacity. If the economy is near full employment, the demand effect may cause inflation before the supply effect arrives. Once the new capacity is in use, the supply-side effect dominates and the inflationary pressure eases. The accelerator can strengthen the process: higher output raises expected demand, which prompts further investment.',
        'LRAS depends on more than capital. Labour supply, education and skills, migration, competition policy and the quality of institutions all determine productive potential, and weakness in any of these can limit the gain from investment. Investment is roughly a sixth of UK GDP, so a rise in it moves LRAS but cannot on its own transform the economy’s growth rate.',
      ],
    ],
    'An increase in net investment is likely to raise long-run aggregate supply, because it adds to the capital stock and usually improves technology and productivity. The extent is uncertain: it depends on whether the investment creates new capacity or replaces old, whether it is matched by skills, and how long it takes to come on stream. Investment in productive capital, used efficiently, is one of the most reliable ways of shifting LRAS, but it is one determinant among several and works over years rather than months.',
    [
      'Definition of net investment and of LRAS as productive potential',
      'Investment adds to the capital stock, shifting LRAS and the PPF outward',
      'Diagram showing the rightward shift and its effect on output and the price level',
      'Investment embodies new technology and raises labour productivity',
      'Investment as a component of AD in the short run; the accelerator',
      'Application to the UK’s low investment ratio and weak productivity',
    ],
    [
      'Type of investment matters: replacement or property investment adds little capacity',
      'Depends on complementary skills and management; capital may stand idle',
      'Time lags before new capacity is usable',
      'Other determinants of LRAS: labour, education, institutions',
      'Judgement: likely but partial, depending on quality and use',
    ],
  ),

  Q008: A(
    [
      [
        'multiplier-effect',
        'The successive rounds of spending from an initial injection: each round is smaller by the share that leaks to savings, taxes and imports. Show the total change in income as a multiple of the injection, and label the multiplier as 1 divided by the marginal propensity to withdraw.',
      ],
      [
        'ad-shift',
        'AD shifting right by the initial spending and then further to the multiplied total. Draw the AS curve with a flat range and a steep range so that the same shift raises output when there is spare capacity and mainly prices when there is not.',
      ],
    ],
    'Government spending is a component of aggregate demand and an injection into the circular flow of income. The multiplier effect means an initial injection raises national income by more than its own value, because the income it creates is partly spent, creating further income in successive rounds. The multiplier k equals 1 divided by the marginal propensity to withdraw (the sum of the marginal propensities to save, tax and import). The final effect on national income depends on the size of the multiplier and on whether the economy has spare capacity to meet the extra demand.',
    [
      [
        'Suppose the government spends an extra £10 billion on school building. Construction firms receive it as revenue and pay it out as wages and profits, creating £10 billion of income. If the marginal propensity to consume is 0.8, households spend £8 billion, which becomes income for retailers and manufacturers, who spend £6.4 billion, and so on. The total rise in income is the sum of the geometric series: with an MPC of 0.8 and no other leakages, k = 1/(1 - 0.8) = 5, so national income rises by £50 billion. AD shifts right by more than the initial injection, and employment and tax revenue rise with it.',
        'That multiplier is far too high for the UK. Leakages to taxation, saving and especially imports - the UK has a high marginal propensity to import - reduce it substantially. With MPW of 0.6 to 0.7 the multiplier is around 1.5, and estimates by the OBR and others for many types of spending are close to 1. The effect on national income is real but much smaller than textbook examples suggest.',
      ],
      [
        'The multiplier only raises real national income if there is spare capacity. On a Keynesian AS curve, when output is well below full employment, extra demand is met by hiring idle workers and machines and prices barely change. Near full capacity the AS curve is steep: the same rightward shift in AD mainly raises the price level, so nominal income rises but real income does not. The state of the economy therefore determines whether an increase in G produces growth or inflation; stimulus is most effective in a recession.',
        'Financing matters. Borrowing to fund the spending raises demand for loanable funds and may push up interest rates, crowding out private investment and consumption, so the net rise in AD is smaller than the injection. Ricardian equivalence suggests households may save more in anticipation of higher future taxes. Both effects reduce the multiplier, though they are weakest in a deep recession when private borrowing is low.',
      ],
      [
        'What the money is spent on changes the result. Capital spending on infrastructure raises AD now and LRAS later, so it lifts national income in both the short and the long run. Transfers to low-income households have a high MPC and a large first-round effect but no supply-side benefit. Spending with a high import content - defence equipment bought abroad, for example - leaks straight out of the circular flow. The composition of G matters as much as its size, and a well-targeted increase can produce a higher multiplier than the average.',
        'Time lags mean the rounds of spending take many months to work through, by which time the economy may have recovered on its own and the stimulus may add to inflation instead. Confidence also matters: if the spending signals that the government expects a downturn, firms may cut investment, offsetting part of the effect. The accelerator can work in the other direction and amplify the rise if confidence improves.',
      ],
    ],
    'An increase in government spending is likely to raise national income by more than the initial amount, because the multiplier converts the injection into successive rounds of income and spending. In the UK the multiplier is modest - probably between 1 and 1.5 - because of high leakages to imports and taxation, and the real effect depends on spare capacity, the method of financing and the type of spending. The impact is therefore positive and larger than the injection, but much smaller than the simple model implies, and it is strongest when the economy is in recession.',
    [
      'Government spending as a component of AD and an injection into the circular flow',
      'Definition of the multiplier: k = 1/(1 - MPC) or 1/MPW',
      'Numerical example of successive rounds of spending',
      'AD/AS diagram showing the multiplied shift and the role of spare capacity',
      'Leakages: saving, taxation, imports',
      'Type of spending: capital versus current, import content',
    ],
    [
      'The UK multiplier is small because of high leakages, especially imports',
      'At full capacity the effect is on prices rather than real output',
      'Crowding out and Ricardian equivalence reduce the net effect',
      'Time lags and confidence effects',
      'Judgement: national income rises by a multiple, but a modest one',
    ],
  ),

  Q009: A(
    [
      [
        'ppf-shift',
        'The PPF shifting outward to represent growth, with the axes labelled as consumer goods and environmental quality or, for the inflation point, as the AD/AS diagram below.',
      ],
      [
        'demand-pull',
        'AD shifting right along a steep AS curve to show demand-led growth turning into inflation once spare capacity is used up. Contrast it in words with a rightward LRAS shift, which raises output without raising prices.',
      ],
    ],
    'Economic growth is an increase in real GDP over time; sustained growth means it continues for years. Growth raises incomes and employment and funds public services, which is why every government pursues it. But growth can bring inflation, inequality, a current account deficit and environmental damage, and whether it is beneficial depends on how it is generated and how its gains are shared. The question is whether sustained growth is always a benefit to an economy like the UK’s.',
    [
      [
        'The most direct benefit of growth is higher real incomes. As output rises, wages and profits rise, household consumption increases and the standard of living improves. Firms hire more workers, so unemployment falls, with the social benefits that brings. Tax revenue rises without any increase in tax rates, which allows more spending on healthcare, education and infrastructure or a reduction in borrowing - the fiscal dividend of growth. Over decades, sustained growth has reduced absolute poverty in the UK and made goods that were once luxuries widely available.',
        'GDP measures output, not welfare. If growth is concentrated among the highest earners or in one region, average living standards can rise while the median household sees little change; UK growth since 2008 has been accompanied by stagnant real wages for many. GDP per capita matters more than the total when the population is growing, and neither captures leisure, health or the distribution of income.',
      ],
      [
        'Growth uses resources and creates negative externalities. Higher output means more energy use, more emissions, more waste and more congestion, and the depletion of non-renewable resources reduces the capacity of future generations to grow. These costs do not appear in GDP; a factory that pollutes a river raises measured output while lowering welfare. If growth is unsustainable it undermines its own foundations, which is why the UK’s climate targets set limits on how growth can be pursued.',
        'The relationship between growth and the environment is not fixed. Growth in services and low-carbon industries has a much smaller environmental cost than growth in heavy industry, and richer economies can afford cleaner technology and stricter regulation. UK emissions have fallen while GDP has risen since 1990. Green growth is possible; the cost depends on the source of growth and on policy.',
      ],
      [
        'Growth driven by rising aggregate demand rather than rising capacity causes problems of its own. As the output gap closes, demand-pull inflation appears, eroding real incomes and forcing interest rates up. Higher incomes raise spending on imports, so the current account deficit widens. If consumption is fuelled by borrowing, household debt rises and the boom ends in a bust, as in 2008. Growth that outruns productive potential is unsustainable in a macroeconomic sense as well as an environmental one.',
        'Growth generated by supply-side improvements - investment, productivity, skills - shifts LRAS and raises output without inflation, and it is the kind that is sustained. The problems above belong to demand-led booms rather than to growth as such. Whether growth is beneficial therefore depends on its source: sustainable, productivity-based growth avoids most of the costs.',
      ],
    ],
    'Sustained economic growth is usually beneficial: it raises living standards, reduces unemployment and pays for public services, and the alternative of stagnation brings worse problems. It is not always beneficial. Growth that is demand-led and debt-fuelled produces inflation and instability, growth that ignores its environmental cost damages future welfare, and growth whose gains go to a few does little for most people. The judgement depends on the source and the distribution of the growth, which is why the aim of policy is sustainable and inclusive growth rather than growth alone.',
    [
      'Definition of economic growth and sustained growth',
      'Benefits: higher real incomes, lower unemployment, higher tax revenues, improved public services',
      'Costs: inflation, current account deficit, environmental damage, inequality',
      'Diagram: PPF or LRAS shift for growth; AD/AS for demand-pull inflation',
      'Distinction between demand-led and supply-led growth',
      'Application to the UK: real wages, emissions, the 2008 crisis',
    ],
    [
      'GDP is a limited measure of welfare; distribution and GDP per capita matter',
      'Environmental cost depends on the source of growth and on regulation',
      'Demand-led growth brings inflation and imbalances; supply-led growth does not',
      'Sustainability across generations',
      'Judgement: beneficial on balance if sustainable and widely shared, not always',
    ],
  ),

  Q010: A(
    [
      [
        'monetary-transmission',
        'The chain from Bank Rate to inflation through borrowing costs, asset prices, expectations and the exchange rate, with the 18-24 month lag noted. Use it to explain why a rise in rates reduces demand-pull inflation.',
      ],
      [
        'ad-shift',
        'AD shifting left on an AD/AS diagram to show either policy reducing the price level. Then note in words that cost-push inflation is a leftward shift in SRAS, which neither demand-side policy addresses directly.',
      ],
    ],
    'Low and stable inflation - a 2% CPI target in the UK - is the objective the Bank of England’s Monetary Policy Committee is charged with. Monetary policy uses interest rates and quantitative easing to influence aggregate demand; fiscal policy uses government spending and taxation. Both work mainly by shifting AD, so both can reduce demand-pull inflation. Which is more effective depends on speed, credibility, flexibility and, above all, on what is causing the inflation.',
    [
      [
        'Monetary policy has institutional advantages. The MPC is independent of government, meets eight times a year and can change Bank Rate immediately, so it responds to inflation data far faster than a Budget can. Independence gives it credibility: households and firms expect the Bank to act, so inflation expectations stay anchored near 2%, which itself keeps wage demands and price-setting restrained. A rise in Bank Rate reduces consumption and investment through the transmission mechanism and, by strengthening the pound, lowers import prices directly. Between 1997 and 2007 this framework delivered inflation close to target with few large deviations.',
        'The transmission mechanism takes 18-24 months to work fully, so the Bank is always acting on forecasts and may tighten into a slowdown. Interest rates are a blunt instrument that hit mortgage holders and investment hardest regardless of the source of inflation. When inflation reached 11.1% in 2022 the cause was energy and food prices - cost-push - and higher rates could not lower the price of gas; they could only suppress demand until the shock passed. At the zero lower bound, as from 2009 to 2021, conventional monetary policy loses traction altogether.',
      ],
      [
        'Fiscal policy can also reduce demand-pull inflation, by raising taxes or cutting spending to shift AD left, and it can be more targeted. A rise in income tax on high earners reduces consumption with less effect on investment than a rate rise would have. Fiscal measures can act directly on prices in a way monetary policy cannot: a cut in VAT or fuel duty lowers the price level immediately, and the 2022 Energy Price Guarantee capped household energy bills, reducing measured inflation during a cost-push shock. Fiscal policy is therefore the more useful tool when inflation comes from the supply side.',
        'Fiscal policy is slow and political. Tax and spending changes go through the annual Budget cycle, take time to legislate and are hard to reverse; governments are reluctant to raise taxes before elections and may run expansionary policy when contraction is needed. Subsidising energy prices lowers measured inflation but raises borrowing and can support demand, so it treats the symptom. Discretionary fiscal tightening has rarely been used in the UK purely to control inflation.',
      ],
      [
        'Neither policy is effective against inflation caused by a fall in short-run aggregate supply. When costs rise because of oil prices, supply-chain disruption or a weaker pound, the remedy that does not sacrifice output is on the supply side: policies that raise productivity, ease labour shortages or improve competition shift SRAS and LRAS to the right. Demand-side policies can only reduce inflation in the short run by creating a recession. The best response to a cost-push shock has been a combination: monetary policy to prevent second-round effects on wages and expectations, fiscal policy to cushion households, and supply-side reform to reduce the underlying pressure.',
        'Coordination between the two matters more than the choice between them. Monetary tightening while fiscal policy is loose, as in 2022-23, means higher interest rates than would otherwise be needed and a larger cost to investment. The most effective arrangement uses monetary policy as the main instrument for demand-pull inflation, with fiscal policy supporting it and taking the lead when the cause is on the supply side.',
      ],
    ],
    'For inflation caused by excess demand, monetary policy is more effective: it is faster, more flexible and, because of MPC independence, more credible, and the UK’s record since 1997 bears this out. Fiscal policy is slower and more political but can be targeted and can act directly on prices, which makes it the better instrument during a cost-push shock. Neither works well against supply-side inflation without a cost in output. The view is therefore correct for demand-pull inflation and in normal times, but the most effective approach uses both, with the choice depending on the cause of the inflation and on whether interest rates have room to move.',
    [
      'Definition of low and stable inflation and the 2% target; instruments of monetary and fiscal policy',
      'Monetary transmission mechanism; independence and credibility of the MPC',
      'Fiscal policy shifting AD; targeted measures and direct effects on prices',
      'AD/AS diagram distinguishing demand-pull from cost-push inflation',
      'Time lags, flexibility and political constraints of each policy',
      'Application to the UK: 1997-2007 record, 2022 inflation, the zero lower bound',
    ],
    [
      'Monetary policy lags and bluntness; ineffective against cost-push and at the zero lower bound',
      'Fiscal policy is slow, political and hard to reverse',
      'Depends on the cause of inflation: demand-pull versus cost-push',
      'Supply-side policies as the alternative for cost-push inflation',
      'Judgement: monetary more effective for demand-pull inflation; coordination is best',
    ],
  ),
}
