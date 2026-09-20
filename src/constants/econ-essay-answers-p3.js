/*
  Developed answers for Paper 3 (9EC0/03, the synoptic paper), Q053-Q064.
  Each context pairs a structured question (12 or 15 marks) with a 25-mark
  essay. The answers are deliberately synoptic - a micro chain and a macro
  chain in the same answer - because that is what the paper rewards. Same
  shape and scaling as econ-essay-answers-as.js.
*/

const A = (diagrams, intro, rows, conclusion, kaa, evaluation) => ({
  diagrams,
  intro,
  rows,
  conclusion,
  markScheme: { kaa, evaluation },
})

export const ECON_ESSAY_ANSWERS_P3 = {
  Q053: A(
    [
      [
        'indirect-tax',
        'A specific tax on sugary drinks shifting supply upwards, raising price and reducing quantity. Show the government revenue rectangle and the consumer share of the tax, which is large if demand is inelastic.',
      ],
      [
        'positive-externality',
        'Reverse the framework for a demerit good: MPB above MSB, over-consumption at the free-market quantity, and the tax pulling consumption back towards the social optimum.',
      ],
    ],
    'Sugary drinks are a demerit good: consumers under-estimate the harm and part of the cost - obesity, diabetes, dental treatment - falls on the NHS as a negative externality of consumption. A tax raises the price, reduces consumption towards the social optimum and raises revenue. The UK Soft Drinks Industry Levy of 2018 is the real example, and its effects reach beyond the drinks market into public finances, health spending and productivity, though on a scale that is small relative to the whole economy.',
    [
      [
        'In the market for sugary drinks the levy shifts the supply curve up by the amount of the tax. The price rises, quantity demanded contracts and consumption moves from the free-market level towards the social optimum where marginal social benefit equals marginal social cost. Because the UK levy is tiered by sugar content, manufacturers had an incentive to reformulate rather than simply pass the tax on: the sugar content of taxed drinks fell by around 29% between 2015 and 2019, most major brands dropped below the threshold, and the revenue raised - around £300 million a year - was lower than forecast because the market changed shape. Consumers face higher prices for high-sugar drinks and a wider range of low-sugar alternatives.',
        'The effect on consumption depends on the price elasticity of demand and on substitution: if consumers switch to untaxed sugary foods or fruit juice, the health gain is smaller than the fall in drinks sales suggests. The tax is regressive, as low-income households spend a larger share of income on soft drinks, though they also gain most from any improvement in health.',
      ],
      [
        'The macroeconomic effects run through the public finances and the labour force. The levy adds revenue, hypothecated in its first years to school sport and breakfast clubs, and if it reduces obesity it lowers NHS spending, which runs to several billion pounds a year on obesity-related conditions, and reduces the days lost to ill health, raising labour productivity and therefore long-run aggregate supply. The tax enters the CPI basket, so it nudged measured inflation up slightly when introduced. Reformulation has created demand for sweeteners and low-sugar product development, shifting resources within the food industry.',
        'These effects are small in macroeconomic terms: £300 million is about 0.03% of government revenue, and the productivity gains from better health arrive over decades and are hard to attribute to one tax. The levy is a microeconomic instrument with a macroeconomic rationale, not a policy that moves aggregate demand or supply on its own.',
      ],
    ],
    null,
    [
      'Sugary drinks as a demerit good with negative consumption externalities',
      'Indirect tax raising price and reducing quantity towards the social optimum, with a diagram',
      'Application to the Soft Drinks Industry Levy: tiering, reformulation, revenue',
      'Revenue, NHS costs, productivity and LRAS; effect on CPI',
      'Distribution of the burden between consumers and producers',
    ],
    [
      'Depends on PED and on substitution to untaxed products',
      'Regressive incidence',
      'Macroeconomic effects small relative to GDP; long time lags for health gains',
    ],
  ),

  Q054: A(
    [
      [
        'indirect-tax',
        'A large specific duty on a demerit good with inelastic demand: a big rise in price, a small fall in quantity, most of the burden on consumers and a large revenue rectangle. The diagram carries the micro chain and sets up the revenue chain.',
      ],
      [
        'laffer',
        'The Laffer curve for duty: beyond some rate, illicit trade and cross-border shopping shrink the tax base faster than the rate rises, so revenue falls. It is the evaluation of “significantly increasing” the tax.',
      ],
    ],
    'Tobacco and alcohol are demerit goods with negative consumption externalities: the private benefit exceeds the social benefit once costs to the NHS, to crime and policing and to lost productivity are counted. Taxing them raises the price to reduce consumption and raises revenue - UK tobacco and alcohol duties together bring in over £20 billion a year. A significant increase would have microeconomic effects in the two markets and macroeconomic effects through revenue, inflation, real incomes, employment and the public finances, with the balance depending on elasticities, the response of illicit markets and what the revenue is used for.',
    [
      [
        'In each market the duty shifts supply upwards, raising price and contracting demand towards the social optimum. Because demand for tobacco is inelastic - around -0.4 to -0.5 - and demand for alcohol only slightly less so, a significant tax rise produces a large price increase and a modest fall in consumption, so most of the burden falls on consumers and revenue rises. The external cost is internalised to the extent that consumers now pay a price closer to the social cost of their choice, and long-run responses are larger than short-run: fewer young people start smoking, and heavy drinkers who are most price sensitive at the margin reduce intake. Producers and retailers lose sales, and pubs and off-licences in particular face lower demand.',
        'Inelastic demand means the consumption effect is small relative to the tax rise, so the health benefit is limited unless the tax is combined with regulation and information. The duties are regressive, taking a larger share of income from poorer smokers and drinkers. And a large price gap with neighbouring countries and the illicit market shifts consumption into untaxed channels, where products are unregulated and revenue is lost.',
      ],
      [
        'The macroeconomic gains come through the public finances and the supply side. Higher duties raise revenue that can reduce the budget deficit, fund health services or allow other taxes to be cut; if consumption falls, NHS spending on smoking- and alcohol-related disease - each estimated in the billions annually - falls too, and fewer working days are lost to ill health, raising labour productivity and long-run aggregate supply. Lower crime and policing costs associated with alcohol reduce a further burden on public spending. Over the long run the economy has a healthier, more productive workforce and a stronger fiscal position.',
        'Revenue rises only up to a point. On the Laffer curve, a significant increase pushes more consumption into smuggling, counterfeiting and cross-border purchases, so the tax base shrinks; HMRC estimates a substantial illicit share of the tobacco market already. The productivity and NHS gains accrue over decades and depend on consumption actually falling, which inelastic demand makes uncertain.',
      ],
      [
        'There are macroeconomic costs. Duties are in the CPI basket, so a significant rise pushes up measured inflation, which can feed into wage demands and complicate monetary policy; it reduces the real incomes of the households who continue to buy, lowering consumption of other goods. Employment falls in brewing, distilling, hospitality and retail, and the pub sector, already contracting, is concentrated in regions with few alternative jobs. The net effect on aggregate demand is probably small, since the revenue is spent by the government, but the composition of demand shifts away from the taxed industries.',
        'The size of these effects depends on the scale of the increase and on how the revenue is used. Recycling it into lower taxes elsewhere or into health spending offsets the demand effect and the regressivity; spending it on deficit reduction does not. Compared with the size of the economy the whole package is small, so “significant” consequences are concentrated in the affected markets rather than in the macroeconomy.',
      ],
    ],
    'Significantly increasing taxation on tobacco and alcohol reduces consumption towards the social optimum, raises substantial revenue and, over time, lowers NHS costs and raises productivity, which are the intended micro and macro consequences. Inelastic demand limits the fall in consumption, the taxes are regressive, and beyond some point illicit trade erodes both the revenue and the health gain; there are small costs in inflation, real incomes and employment in the affected industries. The consequences are on balance favourable for public health and the public finances but modest for the wider economy, and they depend on the increase not being so large that it feeds the illicit market and on the revenue being used to offset the regressive burden.',
    [
      'Tobacco and alcohol as demerit goods with negative externalities',
      'Indirect tax diagram: price, quantity, incidence with inelastic demand',
      'Internalising the externality; short-run and long-run elasticities',
      'Revenue, NHS costs, productivity and LRAS',
      'Inflation, real incomes, employment in affected industries',
      'Laffer curve and illicit trade, with a diagram',
    ],
    [
      'Inelastic demand limits the consumption effect',
      'Regressive incidence',
      'Illicit markets and cross-border shopping erode revenue and health gains',
      'Depends on the use of the revenue and the scale of the increase',
      'Judgement: favourable for health and finances, modest for the macroeconomy',
    ],
  ),

  Q055: A(
    [
      [
        'labour-market',
        'The market for low-skilled labour with demand shifting left as automation lowers the marginal revenue product of routine work: a lower equilibrium wage and lower employment. Then show a wage floor above the new equilibrium to make the point about unemployment.',
      ],
    ],
    'Automation replaces labour with capital - robots, software, self-service systems - in tasks that can be codified. Demand for labour is derived from the marginal revenue product of workers, so when capital can perform a task more cheaply the demand for the workers who did it falls. Low-skilled workers in routine jobs are the most exposed. The effect on their wages and employment depends on how easily capital substitutes for them, on the new demand that automation creates and on how the labour market adjusts.',
    [
      [
        'Where automation substitutes directly for routine low-skilled tasks - checkout operators, warehouse pickers, assembly-line workers, call-centre staff - the marginal revenue product of those workers falls relative to the cost of the capital that replaces them. The demand curve for low-skilled labour shifts left, and in a competitive labour market the equilibrium wage and employment both fall. Workers displaced from these jobs compete for the remaining low-skilled work, in hospitality, care and delivery, which pushes wages there down as well. The result is a fall in the relative wage of low-skilled workers, which is one reason the wage gap between graduates and non-graduates widened from the 1980s onwards.',
        'The size of the effect depends on the elasticity of substitution between capital and labour and on the cost of the technology. Many low-skilled jobs involve physical dexterity or personal interaction that machines still do badly - care work, cleaning, hairdressing - and automation has so far hollowed out middle-skill routine jobs more than the lowest-skilled ones. Where the National Living Wage holds the wage above the new equilibrium, the adjustment falls entirely on employment.',
      ],
      [
        'Automation also creates demand for labour. Lower production costs reduce prices, raising real incomes and demand across the economy, so employment grows in sectors that expand; the capital itself needs to be built, installed, maintained and supervised; and firms that automate often grow and hire in complementary roles. Bank branches installed cash machines from the 1970s yet teller employment rose for decades, because cheaper branches meant more branches. Historically, every wave of automation has ended with more jobs than it destroyed, though not the same jobs, and low-skilled workers benefit as consumers from the lower prices even where they lose as producers.',
        'The new jobs typically require different skills and are often in different places, so displaced low-skilled workers cannot move into them without retraining and may suffer long spells of structural unemployment. The aggregate gain in employment can coexist with a lasting loss for the specific group that was automated, and the transition can take a generation.',
      ],
      [
        'Policy and institutions shape the outcome. Retraining and education move workers into the jobs automation creates; wage subsidies and in-work benefits support incomes during the transition; and a minimum wage protects pay at the cost of accelerating automation in the jobs it covers. Employers may also respond to automation by redesigning jobs rather than eliminating them, combining the machine with the worker so that low-skilled productivity - and therefore wages - rises.',
        'These responses depend on the speed of automation relative to the speed of adjustment. Gradual automation is absorbed; a rapid wave, as some predict from artificial intelligence, could outpace retraining and leave a larger group with lower wages and employment for longer.',
      ],
    ],
    'Automation is likely to reduce wages and employment for low-skilled workers in routine tasks, because it lowers their marginal revenue product and shifts labour demand away from them, and a wage floor converts part of the wage effect into unemployment. The overall impact is smaller and more uneven than the first effect suggests: automation creates jobs elsewhere, lowers prices for everyone and has so far hit middle-skill routine work harder than the least-skilled service jobs. The net effect on low-skilled workers depends on how substitutable their tasks are, how fast the economy creates new work they can do, and how far policy supports the transition.',
    [
      'Automation as substitution of capital for labour; derived demand and MRP',
      'Leftward shift in demand for low-skilled labour: lower wages and employment, with a diagram',
      'Effect of a minimum wage above the new equilibrium',
      'Job creation through lower prices, complementary roles and new industries',
      'Structural unemployment and the need for retraining',
      'Policy responses',
    ],
    [
      'Depends on the elasticity of substitution and the cost of technology',
      'Non-routine low-skilled work is less exposed; hollowing out of middle-skill jobs',
      'New jobs require different skills and locations; transition costs',
      'Speed of automation relative to adjustment',
      'Judgement: negative for routine low-skilled work, uneven overall',
    ],
  ),

  Q056: A(
    [
      [
        'labour-market',
        'Two labour markets side by side in words, one diagram: demand for high-skilled labour shifting right as technology complements it, demand for low-skilled shifting left as it substitutes. The widening gap between the two wages is the mechanism.',
      ],
      [
        'lorenz-curve',
        'The Lorenz curve bowing further from the line of equality as the wage gap widens and the share of income going to owners of capital rises. Use it to define what “widening inequality” means and to note that redistribution can pull the curve back.',
      ],
    ],
    'Income inequality is the unevenness of the distribution of income across households, measured by the Gini coefficient or by the ratio of top to bottom incomes. Automation - the replacement of labour by capital in codifiable tasks - affects inequality through three channels: the relative demand for skilled and unskilled labour, the share of income going to capital rather than labour, and the prices consumers pay. The first two tend to widen inequality; the third and the response of policy can narrow it. The UK’s experience so far suggests the effect is real but smaller than feared.',
    [
      [
        'Automation is skill-biased. Software and robots substitute for workers doing routine tasks, shifting the demand for low- and middle-skilled labour to the left and lowering their wages, while they complement workers who design, manage and analyse, shifting the demand for high-skilled labour to the right and raising their wages. The wage premium for graduates and for digital skills rises, the middle of the wage distribution hollows out, and the Lorenz curve bows further from the line of equality. At the same time the income generated by automated production accrues to the owners of the capital - shareholders, technology firms and their founders - so the share of national income going to capital rises and the share going to labour falls. Capital ownership is far more concentrated than earnings, so this second channel widens inequality of income and of wealth together, which is Piketty’s central concern.',
        'The pattern is uneven. Automation has so far hit routine middle-skill jobs harder than the lowest-skilled personal-service jobs, so the bottom of the distribution has been partly protected, and the National Living Wage has raised pay at the very bottom faster than in the middle. The rise in the capital share depends on competition: where automating firms face rivals, the gains are competed away into lower prices rather than retained as profit.',
      ],
      [
        'Automation also works against inequality. It lowers the cost and price of goods and services - clothing, electronics, transport, banking - and because low-income households spend a larger share of their income on such goods, the real-income gain is proportionately larger for them. It creates entirely new occupations, many of them accessible without a degree, and it can raise the productivity and pay of low-skilled workers who use the technology rather than being replaced by it. Measured on consumption rather than nominal income, the widening may be far smaller.',
        'These offsets depend on the gains being passed to consumers and on new jobs being reachable by those displaced. Where a few platform firms dominate, the productivity gains show up as profit and market power, and the falling prices that would have compensated low-income households do not arrive.',
      ],
      [
        'Whether inequality actually widens depends on policy. Education and retraining raise the supply of skilled workers, which moderates the skill premium; progressive taxation and transfers redistribute the capital share; a minimum wage supports the bottom; and competition policy limits the concentration of the gains. The UK Gini coefficient for disposable income has been broadly flat since the early 1990s despite three decades of computerisation, which suggests that the tax and benefit system and the minimum wage have offset much of the market-driven widening. The effect of automation on inequality is therefore a pressure on the distribution of original income that government can, and in the UK largely has, counteracted.',
        'Past waves of automation are an imperfect guide to artificial intelligence, which threatens cognitive and professional tasks as well as routine ones and may compress the top of the distribution as much as the middle. Wealth inequality, driven by the capital share and by asset prices, has continued to rise even while income inequality has been flat, and that is the channel most likely to widen further.',
      ],
    ],
    'Increased automation is likely to widen income inequality in original income to a considerable extent, through the skill premium and through a rising share of income going to owners of capital, and it has already hollowed out the middle of the UK wage distribution. The widening is partly offset by lower prices, by new occupations and, decisively, by redistribution and the minimum wage, which is why disposable-income inequality in the UK has changed little over the automation era. The extent to which inequality widens therefore depends less on the technology than on the policy response, with wealth inequality, which redistribution touches less, the more likely to grow.',
    [
      'Definition of income inequality and its measurement',
      'Skill-biased technological change: shifts in demand for skilled and unskilled labour, with a diagram',
      'Rising capital share and concentrated ownership of capital',
      'Lorenz curve moving away from equality, with a diagram',
      'Offsetting effects: lower prices, new occupations, productivity of complementary labour',
      'Policy responses and application to UK inequality trends',
    ],
    [
      'Uneven effects: middle-skill hollowing, low-skill services protected',
      'Depends on competition and on whether gains are passed to consumers',
      'Policy can and has offset the widening in disposable income',
      'Artificial intelligence may differ from past waves; wealth inequality',
      'Judgement: widens original income inequality, disposable income depends on policy',
    ],
  ),

  Q057: A(
    [
      [
        'tariff',
        'The domestic steel market with a world price and the tariff raising it. Show domestic output expanding, imports contracting to the gap between domestic demand and supply at the higher price, producer surplus rising and government revenue on the remaining imports.',
      ],
    ],
    'A tariff is a tax on imports that raises their domestic price. In the market for steel, where the UK imports a large share of what it uses, a tariff raises the price to domestic buyers, allows domestic producers to sell more at a higher price and reduces the volume of imports. Domestic steel producers gain; users of steel and consumers pay for that gain, and the size of each effect depends on the elasticities of domestic supply and demand.',
    [
      [
        'Before the tariff the domestic price equals the world price Pw and domestic producers supply only the quantity at which their marginal cost equals that price, with imports filling the rest of demand. A tariff t raises the domestic price to Pw + t. Domestic producers move up their supply curve and expand output from Q1 to Q2; domestic buyers move up the demand curve and reduce purchases from Q4 to Q3; imports shrink to the gap Q3 - Q2. Producer surplus rises by the area between the two prices and the supply curve, and the government collects revenue equal to t times the remaining imports. The two triangles on the diagram are the deadweight loss: inefficient domestic production that costs more than the world price, and consumption forgone by buyers who valued the steel above its world cost.',
        'How much domestic output expands depends on the elasticity of domestic supply. If UK steel plants are near capacity or cannot expand quickly, output barely rises and the tariff mainly raises price and revenue. If world producers absorb part of the tariff by cutting their prices, the domestic price rises by less than t.',
      ],
      [
        'For domestic steel producers the tariff raises revenue, profit and employment, and protects plants that would otherwise close - the case made for Port Talbot and other UK sites facing cheap imports from countries with excess capacity. The higher price can fund investment in more efficient or lower-carbon production, and secure supply in an industry the government regards as strategic. But protection also removes the pressure that competition puts on producers to cut costs and innovate, and it raises input costs for the far larger number of domestic firms that use steel - construction, cars, machinery, appliances - which lose competitiveness and may cut employment by more than the steel industry gains.',
        'Whether producers gain over the long run depends on whether the protection is temporary and the industry uses it to become competitive. Trading partners may retaliate against UK exports, and if the tariff is judged inconsistent with WTO rules it may be challenged. The interests of steel producers and steel users point in opposite directions, so “domestic producers” as a whole do not unambiguously benefit.',
      ],
    ],
    null,
    [
      'Definition of a tariff',
      'Tariff diagram: world price, higher domestic price, domestic output expanding, imports contracting',
      'Producer surplus, government revenue and the deadweight-loss triangles',
      'Effects on domestic producers: revenue, profit, employment, investment',
      'Effects on downstream users of steel',
    ],
    [
      'Depends on the elasticity of domestic supply and on foreign price responses',
      'Reduced competitive pressure; temporary versus permanent protection',
      'Retaliation and WTO constraints',
      'Producers of steel versus producers using steel',
    ],
  ),

  Q058: A(
    [
      [
        'tariff',
        'The return of tariffs and non-tariff barriers on trade with the former bloc: higher import prices, less trade, deadweight loss. Draw it for a representative imported good and note that non-tariff barriers act like a tariff whose revenue nobody collects.',
      ],
      [
        'exchange-rate',
        'The currency depreciating on the announcement as capital flows out and expectations of growth fall - the macro channel through which the withdrawal raises import prices and inflation before any tariff applies.',
      ],
    ],
    'A regional trading bloc is a group of countries that trade freely with each other, sometimes with a common external tariff and shared regulations. Withdrawal by a major economy - the UK’s departure from the EU single market and customs union in 2021 is the clearest case - restores barriers to trade with the bloc, with microeconomic effects on prices, costs and competition in individual markets and macroeconomic effects on trade, investment, productivity, the exchange rate and growth. Against these are set the gains from regained policy autonomy, which are real but harder to quantify.',
    [
      [
        'At the microeconomic level, leaving the bloc reintroduces frictions. Even where a trade agreement keeps tariffs at zero, as the UK-EU Trade and Cooperation Agreement does, non-tariff barriers return: customs declarations, rules-of-origin checks, sanitary inspections, separate regulatory approvals. These act like a tariff without the revenue, raising the cost of imported inputs and the price of imported goods, so supply curves in affected markets shift left and prices rise. Firms that had organised supply chains across the bloc face delays and paperwork; small exporters, for whom the fixed cost of compliance is large relative to sales, stop exporting altogether. Specialisation according to comparative advantage within the bloc unwinds, so resources move to less efficient uses, and reduced competition from bloc producers weakens the pressure on domestic firms to hold prices down.',
        'The scale depends on the terms of withdrawal. A deep agreement with mutual recognition of standards keeps most of the gains from trade; a clean break loses them. Some firms and sectors gain: domestic producers previously undercut by bloc rivals win market share, and industries freed from bloc regulation may see costs fall. The effects are concentrated in goods trade and in sectors with integrated supply chains such as food, chemicals and cars.',
      ],
      [
        'At the macroeconomic level, lower trade reduces both aggregate demand and aggregate supply. Exports to the bloc fall, reducing net exports and AD; less trade and competition lower productivity growth, so LRAS grows more slowly - the OBR’s assessment is that leaving the EU reduces UK long-run productivity by around 4% relative to remaining. Foreign direct investment that used the country as a base for the bloc’s market declines, and the anticipation of all this weakens the currency: sterling fell by around 10% after the 2016 referendum, which raised import prices and pushed inflation above target, cutting real incomes. Business investment stagnated between 2016 and 2019 as firms waited for the terms to be settled. Lower growth reduces tax revenue, worsening the public finances by more than the saving on contributions to the bloc.',
        'A weaker currency also improves the price competitiveness of exports to the rest of the world and of import-competing industries, partially offsetting the loss of bloc trade. Estimates of the macroeconomic cost are counterfactual and contested, and the pandemic and energy shock arrived at the same time, making the withdrawal’s own effect hard to isolate. Over the long run economies adjust as firms redirect trade and investment.',
      ],
      [
        'Withdrawal restores control over trade policy, regulation and migration, which has effects of its own. The country can negotiate its own trade agreements - the UK joined the CPTPP - set regulations suited to its own economy and control the inflow of labour. Reduced migration from the bloc tightens the labour market in sectors that relied on it, raising wages there but also raising costs and creating shortages in agriculture, hospitality and care. Contributions to the bloc’s budget are saved. Whether these gains outweigh the losses depends on how the autonomy is used: new agreements with distant partners replace only a small fraction of trade lost with near neighbours, since trade falls with distance, and regulatory divergence itself creates further barriers with the bloc.',
        'The distribution of effects is uneven across regions, sectors and time: exporters and integrated manufacturers lose most, some domestic producers gain, consumers pay more, and the short-run disruption is more visible than the long-run adjustment. The judgement also depends on non-economic objectives that a purely economic analysis cannot weigh.',
      ],
    ],
    'The microeconomic effects of a major economy withdrawing from a regional trading bloc are higher prices and costs, lost specialisation and less competition in the markets most integrated with the bloc; the macroeconomic effects are lower trade, investment and productivity growth, a weaker currency and higher inflation in the short run, and a smaller economy than otherwise in the long run. These costs are partly offset by regained policy autonomy and by gains to some domestic producers, and their size depends on the depth of the replacement agreement and on how the autonomy is used. On the evidence of the UK, the economic costs are significant and the economic gains modest; the case for withdrawal rests mainly on objectives beyond the economic ones.',
    [
      'Definition of a regional trading bloc; tariffs and non-tariff barriers',
      'Micro effects: higher import prices and input costs, supply chains, lost specialisation, reduced competition, with a diagram',
      'Macro effects: net exports, FDI, productivity and LRAS, exchange rate and inflation, with a diagram',
      'Application to the UK and the EU: sterling, investment, OBR productivity estimate',
      'Regained autonomy: trade deals, regulation, migration, budget contributions',
      'Distribution across sectors, regions and time',
    ],
    [
      'Depends on the terms of withdrawal and the replacement agreement',
      'Some producers and sectors gain; currency depreciation offsets',
      'Counterfactual difficulty; other shocks at the same time',
      'Use of autonomy determines the gains; gravity limits new deals',
      'Judgement: significant economic costs, modest economic gains',
    ],
  ),

  Q059: A(
    [
      [
        'supply-demand',
        'The housing market with demand shifting left as mortgages become less affordable, against a steep, inelastic supply curve. Prices fall and transactions fall; the inelastic supply is why the price effect can be large while completions barely change.',
      ],
      [
        'monetary-transmission',
        'The transmission mechanism from Bank Rate through mortgage rates, house prices and wealth effects to consumption and AD. This links the housing chain to the macro chain.',
      ],
    ],
    'A sustained rise in interest rates raises the cost of mortgage borrowing and the return on saving. Housing is the largest asset most households own and mortgages the largest debt, so the housing market is the main channel through which interest rates reach the wider economy. Higher rates reduce demand for housing and lower house prices, and through wealth effects, consumption and investment they reduce aggregate demand and inflation, which is the purpose of the rise. The size and timing of the effects depend on the structure of mortgage lending and on the shortage of housing supply.',
    [
      [
        'Higher interest rates raise monthly mortgage repayments, so the amount a household can borrow for a given income falls and demand for housing shifts left. Buyers who can no longer afford to buy stay renting; landlords facing higher buy-to-let costs sell or raise rents. Because the supply of housing is inelastic in the short run - the stock changes by only around 1% a year - the fall in demand shows up mostly in price and in the number of transactions rather than in quantity: prices fall or stagnate in real terms and sales volumes drop. After Bank Rate rose from 0.1% to 5.25% between late 2021 and 2023, UK house prices fell modestly in nominal terms and more in real terms, transactions fell sharply and housebuilders cut starts as demand for new homes weakened.',
        'Most UK mortgages are now on fixed rates, so the rise reaches borrowers only as their deals expire, spreading the effect over two or more years. The chronic shortage of housing limits price falls, since demand still exceeds supply at almost any interest rate, and cash buyers are unaffected. Rents rise as would-be buyers stay in the rental market, so affordability worsens for renters even as prices fall.',
      ],
      [
        'The macroeconomic effects follow through several channels. Households with mortgages have less disposable income after repayments, so consumption falls; lower house prices reduce housing wealth, and the negative wealth effect and the loss of scope for equity withdrawal reduce spending further. Housebuilding, a significant part of investment, contracts, with knock-on effects on construction employment and on demand for materials and furnishings. Aggregate demand shifts left, output growth slows and inflation falls, which is the transmission mechanism working as intended. Higher rates also attract capital inflows, strengthening the pound and lowering import prices.',
        'Savers, including many older households, gain income and may spend more, partly offsetting the fall. The strength of the effect depends on the size and pace of the rise and on the starting level of household debt: a heavily indebted household sector responds strongly, a lightly indebted one weakly. Consumption in 2023 held up better than the mortgage arithmetic suggested because employment stayed high and savings from the pandemic were run down.',
      ],
      [
        'A sustained rise also affects financial stability. Households whose repayments jump when fixed deals end may fall into arrears; a fall in house prices pushes recent buyers with small deposits into negative equity; and banks holding mortgage books face rising defaults. In the early 1990s a rate rise combined with a house-price fall produced repossessions and a banking retrenchment that deepened the recession. Regulators now stress-test lenders and cap high loan-to-income lending to limit this, and the Bank considers the effect on financial stability when setting rates.',
        'Whether this becomes a problem depends on how far and how fast rates rise relative to incomes and on the buffers built since 2008. The 2022-23 episode saw rising arrears but no repossession wave, which suggests the macroprudential measures worked; a larger or faster rise from a higher debt level could still produce one.',
      ],
    ],
    'A sustained rise in interest rates is likely to reduce demand for housing, lower house prices and transactions, and cut housebuilding, and through lower consumption and investment it reduces aggregate demand and inflation, which is what the rise is for. The impact is spread over years by fixed-rate mortgages, limited by the shortage of housing supply and partly offset by gains to savers, so it is significant but gradual. The largest risk is to financial stability if arrears and negative equity rise, which the size and speed of the rise and the state of household debt determine.',
    [
      'Interest rates and mortgage affordability; demand for housing shifting left, with a diagram',
      'Inelastic housing supply; effects on prices, transactions and housebuilding',
      'Transmission mechanism: disposable income, wealth effects, investment, AD, with a diagram',
      'Application to the UK 2021-23 rate rises',
      'Financial stability: arrears, negative equity, bank losses; macroprudential policy',
    ],
    [
      'Fixed-rate mortgages delay the effect; time lags',
      'Housing shortage limits price falls; rents rise',
      'Savers gain; depends on household debt levels and the pace of rises',
      'Judgement: significant but gradual, with financial stability the main risk',
    ],
  ),

  Q060: A(
    [
      [
        'supply-demand',
        'The housing market with demand rising over time against a very inelastic supply: the price rises far more than the quantity. This is the affordability problem in one picture, and it shows why supply-side intervention is the one that reaches the cause.',
      ],
      [
        'maximum-price',
        'A rent ceiling below the equilibrium rent: excess demand, a fall in supply as landlords withdraw, and a shortage rationed by queues. It is the intervention that addresses the symptom and worsens the cause.',
      ],
    ],
    'Housing affordability is the ratio of house prices and rents to incomes; in the UK the average house costs around eight times average earnings, against about four in the 1990s. The housing market fails in several ways - inelastic supply constrained by planning, positive externalities from secure housing, market power in land and imperfect information - and macroeconomic policy affects affordability through interest rates and credit. Intervention is justified where it corrects a market failure at a cost below the benefit; the difficulty is that much housing intervention has addressed demand or symptoms rather than the supply constraint that causes the problem.',
    [
      [
        'The root cause of unaffordability is a supply of housing that responds weakly to price. Planning restrictions, the green belt around the cities with the strongest demand, and the slow release of land by large developers mean that rising demand - from population growth, smaller households and cheap credit - raises prices far more than it raises building. Intervention on the supply side is justified because the constraint is itself a product of government policy and because housing has positive externalities: stable housing improves health, education and labour mobility, so the private market under-provides it. Planning reform, public investment in social housing, taxing undeveloped land with permission and infrastructure that opens new areas all shift supply right and reduce prices relative to incomes. The post-war period, when councils built at scale, was the last time affordability improved for a sustained period.',
        'Supply-side intervention is slow and politically resisted by existing owners, whose wealth depends on high prices. Building in the wrong places, or building homes that are quickly bought as investments, does little for affordability. Government failure - planning rules that create scarcity in the first place - is the reason the market cannot respond, so “more intervention” must mean a different kind, not simply more of the existing kind.',
      ],
      [
        'Demand-side and price interventions are less well justified. Subsidising buyers, as Help to Buy did, shifts demand right against an inelastic supply, so most of the subsidy shows up as higher prices and developer profits rather than more homes. Rent controls set a maximum price below the market rent: tenants in place gain, but supply contracts as landlords sell or leave property empty, quality falls as maintenance is cut, and the shortage is rationed by queues and informal payments; where rent controls have been tried at scale the private rental sector has shrunk. Stamp duty discourages moving and so reduces the effective supply of homes on the market. These interventions treat the symptom, and in the presence of a supply constraint they can worsen the disease.',
        'Some demand-side measures are justified on equity grounds: housing benefit supports low-income renters who would otherwise be homeless, and tenancy regulation that limits evictions corrects an imbalance of power without capping rents. The case against intervention on the demand side is a case against price ceilings and blanket subsidies rather than against all support for households.',
      ],
      [
        'At the macroeconomic level, interest rates and credit conditions drive house prices, and the long period of low rates after 2009 was a major cause of the rise in prices relative to incomes. Macroprudential intervention - the Bank of England’s cap on high loan-to-income mortgages and its affordability tests - is justified because unchecked credit growth inflates prices and threatens financial stability, and it limits the extent to which cheap money is capitalised into house prices. But monetary policy itself targets inflation, not house prices, and using interest rates to improve affordability would sacrifice the rest of the economy; a rate rise reduces house prices only by making mortgages dearer, which does not make housing more affordable for the buyers it prices out. The macroeconomic contribution to affordability is therefore to prevent credit booms rather than to engineer cheaper housing.',
        'Macroprudential limits protect stability but restrict first-time buyers most, since they borrow at the highest multiples, so they can worsen affordability in the short run for the group the policy is meant to protect. Conflicts between objectives - low inflation, stable growth, affordable housing - mean the macroeconomy cannot be steered for housing alone.',
      ],
    ],
    'Government intervention is justified in the housing market to a large extent, because the market fails through inelastic supply, externalities and the effects of policy itself, but only intervention that expands supply addresses the cause of unaffordability; demand subsidies and rent ceilings are largely unjustified because they raise prices or shrink supply. In the macroeconomy, intervention is justified to restrain credit booms that inflate prices and threaten stability, not to target house prices directly, since monetary policy has other objectives. Affordability is a supply problem created partly by government, and the intervention it justifies is planning and building rather than subsidy or control.',
    [
      'Definition of affordability and the UK position',
      'Market failure in housing: inelastic supply, planning, externalities, with a diagram',
      'Supply-side interventions: planning reform, social housing, land taxation',
      'Demand-side and price interventions: Help to Buy, rent controls, stamp duty, with a diagram',
      'Macroeconomic policy: interest rates, credit, macroprudential limits',
      'Government failure and conflicts between objectives',
    ],
    [
      'Supply-side measures are slow and politically resisted',
      'Equity case for some demand-side support; distinction from price ceilings',
      'Monetary policy targets inflation, not house prices',
      'Macroprudential limits restrict first-time buyers',
      'Judgement: justified for supply and stability, not for subsidy or control',
    ],
  ),

  Q061: A(
    [
      [
        'game-theory',
        'A two-firm payoff matrix for investing in emissions reduction. Whatever the rival does, each firm earns more by not investing, so not investing is the dominant strategy even though both would be better off if both invested - the prisoner’s dilemma.',
      ],
      [
        'negative-externality',
        'MSC above MPC for carbon emissions: the firm’s private cost of emitting is below the social cost, so the private return on abatement is below the social return. This is why under-investment is rational for the firm.',
      ],
    ],
    'An oligopoly is a market dominated by a few large, interdependent firms with high barriers to entry. Reducing carbon emissions is an investment that raises a firm’s costs now to reduce an external cost that falls mainly on others. Two features of the situation point towards under-investment: the externality means the private return on abatement is below the social return, and the interdependence of oligopolists creates a prisoner’s dilemma in which each firm fears losing share if it acts alone. Pressure from consumers, investors and regulators can change the payoffs.',
    [
      [
        'Carbon emissions are a negative production externality: marginal social cost exceeds marginal private cost, and a firm that pays nothing for the damage has no private incentive to reduce it beyond what regulation requires. In an oligopoly this is reinforced by interdependence. If one firm invests in abatement, its costs and prices rise; if its rivals do not, it loses market share to them, so it bears the full cost of investment while the environmental benefit is shared. In the payoff matrix, not investing is the dominant strategy for each firm regardless of what the other does - the prisoner’s dilemma - so the equilibrium is that nobody invests even though all firms and society would be better off if they all did. Airlines, steel and cement producers each face exactly this calculation, which is why voluntary abatement in these industries has been limited.',
        'The dilemma can be escaped. Oligopolists that communicate and expect to interact repeatedly can sustain tacit agreements, including on environmental standards, and industry bodies sometimes coordinate abatement precisely to avoid the race to the bottom. Regulation, carbon taxes and tradable permits change the payoffs so that not investing becomes the costlier choice, converting the dilemma into a game in which investment is dominant. The EU Emissions Trading System does exactly this for heavy industry and power generation, putting a price on each tonne emitted so that a firm declining to abate now pays for the permits instead, which removes the advantage of being the one that does nothing.',
      ],
      [
        'Some features of oligopoly push the other way. Firms compete on non-price factors, and a green reputation is a form of product differentiation that can win customers and command a premium; a firm that moves first can set the standard the others must follow. Large oligopolists have the supernormal profits to fund abatement investment that smaller firms lack, and they face pressure from institutional investors applying ESG criteria and from the prospect of tighter regulation, which makes early investment a hedge. Firms in oligopoly may therefore over-invest in visible abatement while under-investing in the costly, invisible kind.',
        'Whether this offsets the externality depends on how much consumers actually pay for greener products and on how credible future regulation is. Where demand is price-driven, as in aviation and energy, reputational competition has done little, and greenwashing suggests firms find it cheaper to appear green than to be green.',
      ],
    ],
    null,
    [
      'Definition of oligopoly and interdependence; carbon emissions as a negative externality',
      'Private return on abatement below social return, with a diagram',
      'Prisoner’s dilemma: abatement raises costs, fear of losing share, dominant strategy not to invest, with a payoff matrix',
      'Non-price competition, green differentiation and first-mover advantage',
      'Investor pressure and anticipation of regulation',
    ],
    [
      'Collusion and repeated interaction can sustain joint abatement',
      'Regulation, taxes and permits change the payoffs',
      'Depends on consumer willingness to pay and on the credibility of regulation; greenwashing',
    ],
  ),

  Q062: A(
    [
      [
        'tradable-permits',
        'The permit market: a fixed cap as vertical supply, firms’ demand for permits, and the resulting price per tonne. Tightening the cap raises the price and the incentive to abate.',
      ],
      [
        'negative-externality',
        'The target both instruments share: reducing emissions from the free-market quantity to the social optimum where MSC meets demand. Regulation fixes the quantity per firm; permits fix it for the industry and let trade decide who cuts.',
      ],
    ],
    'Tradable permits cap total emissions and let firms buy and sell the right to emit, so the cap is met where abatement is cheapest and the permit price gives a continuing incentive to cut further. Regulation sets rules - emission limits per plant, technology standards, bans - that every firm must follow, with penalties for breach. Both aim to move emissions from the free-market level to the social optimum. For large firms, which can trade, monitor their own emissions and respond to price signals, permits are usually the more cost-effective instrument, but regulation has advantages of certainty and simplicity, and in practice the two are used together.',
    [
      [
        'Permits achieve a given reduction at lower total cost than uniform regulation. Under a regulation requiring every firm to cut emissions by 20%, a firm with cheap abatement options and one with expensive options both cut by the same amount; under permits, the firm with cheap options cuts by more and sells its spare permits to the firm with expensive options, so the same total reduction costs the industry less. The permit price also rewards every tonne saved, so firms have an incentive to innovate beyond compliance, whereas a standard once met gives no reason to go further. Auctioned permits raise revenue. The EU Emissions Trading System, covering around 10,000 large installations, cut emissions in the sectors it covers by over 40% between 2005 and 2023, most of it in power generation where the price signal drove the switch from coal to gas and renewables.',
        'Permits work only if the cap is tight and enforced: over-allocation in the early EU ETS phases left prices near zero and achieved little. Price volatility makes long-term investment decisions harder, and firms exposed to international competition may relocate to uncapped countries, so emissions leak rather than fall. Monitoring and verification are costly, and the system is complex enough that small emitters are excluded.',
      ],
      [
        'Regulation has strengths where permits are weak. It gives certainty about what each firm will do, which matters for local pollutants with concentrated effects and for emissions that are hard to measure continuously. It is simpler to administer and enforce, requires no functioning market and cannot be gamed by hoarding or speculation. Technology standards can force the adoption of best practice quickly, and bans - on coal-fired generation, on new petrol cars from a set date - send an unambiguous signal that investment planning can rely on. Regulation is also more politically acceptable than a visible carbon price, and it works for firms that would not participate in a permit market.',
        'Regulation is inflexible and inefficient: uniform standards ignore differences in abatement cost, give no incentive to exceed the standard, and can lock in a technology that is soon superseded. Regulators depend on the industry for information and can be captured; standards are set by negotiation and often at the level the least efficient firm can meet. Compliance costs fall on every firm regardless of where cutting is cheapest, so a given reduction costs more.',
      ],
      [
        'For large firms specifically, permits are well suited: they have the scale to trade, the systems to monitor emissions and the capital to respond to a price. The comparison is therefore not permits or regulation but how to combine them. The EU and UK use permits for the bulk of large-firm emissions alongside regulation of specific pollutants, efficiency standards for equipment and phase-out dates for coal, and a carbon border adjustment to limit leakage. The combination gives the cost-effectiveness of trading with the certainty of standards where it is needed, and revenue from auctions can compensate the households and regions that bear the transition.',
        'The effectiveness of either instrument ultimately depends on the political willingness to set a tight cap or a demanding standard and to hold it when energy prices rise. Both have been weakened by exemptions and free allocations under lobbying pressure, and neither addresses emissions outside the covered sectors.',
      ],
    ],
    'Tradable permits are likely to be more effective than regulation at reducing carbon emissions from large firms, because they achieve a given cut at lower cost, reward innovation beyond compliance and, where the cap is tight, have a proven record in power generation. Regulation is more effective where certainty, simplicity and speed matter, for pollutants that are hard to trade, and as a backstop that a volatile permit price cannot provide. The most effective approach is permits as the main instrument, with the cap declining on a fixed schedule, supported by regulation of specific sources and by measures against leakage; the instrument matters less than the stringency with which it is applied.',
    [
      'Definitions of tradable permits and regulation; the externality both address, with a diagram',
      'Cost-effectiveness of permits: abatement where cheapest; incentive to innovate; revenue',
      'Application to the EU ETS and UK ETS',
      'Strengths of regulation: certainty, simplicity, enforceability, technology forcing',
      'Weaknesses of regulation: inefficiency, no incentive beyond compliance, capture',
      'Combination of instruments for large firms; carbon border adjustments',
    ],
    [
      'Permits depend on the level of the cap; volatility and leakage',
      'Regulation suits hard-to-measure pollutants and gives investment certainty',
      'Large firms are well placed to trade',
      'Political willingness to maintain stringency; exemptions and lobbying',
      'Judgement: permits more effective as the main instrument, with regulation alongside',
    ],
  ),

  Q063: A(
    [
      [
        'poverty-trap',
        'The cycle of low income, low saving, low investment and low productivity. Microfinance is meant to enter at the investment step, lending the small sums that let a household buy the tools or stock that raise its income.',
      ],
      [
        'asymmetric-information',
        'Why banks will not lend to the poor: they cannot assess the risk and there is no collateral. Microfinance solves the information problem through group lending and local knowledge, which is the mechanism behind the first reason.',
      ],
    ],
    'Microfinance is the provision of small loans, savings accounts and insurance to low-income people who lack access to conventional banks, pioneered by the Grameen Bank in Bangladesh. Economic development means rising incomes, health, education and opportunity. Microfinance can promote it in two main ways: by breaking the credit constraint that keeps poor households out of productive investment, and by increasing financial inclusion, particularly for women, in ways that stabilise consumption and build assets. Its effects in practice have been real but smaller than its early promise.',
    [
      [
        'Poor households are excluded from formal credit because of asymmetric information and a lack of collateral: a bank cannot judge whether a landless farmer will repay and has nothing to seize if she does not, so it does not lend, and the household is trapped in a cycle of low income, no saving, no investment and low productivity. Microfinance institutions lend small sums to groups whose members guarantee each other, using local knowledge and peer pressure to solve the information problem. A loan of a few hundred dollars buys a sewing machine, livestock, seed or stock for a market stall, raising the household’s productivity and income; repayment builds a credit history that allows larger loans. Across millions of borrowers this raises output, creates micro-enterprises and moves households from subsistence towards the market economy.',
        'Randomised evaluations of microcredit have found modest average effects on business creation and income, and little on consumption or poverty in the medium term; most borrowers use loans for small trading rather than for enterprises that grow. Interest rates are high because small loans are costly to administer, and over-lending has caused over-indebtedness and crises, as in Andhra Pradesh in 2010. Credit alone does not create the skills or markets that make investment profitable.',
      ],
      [
        'Microfinance promotes development through inclusion as much as through investment. Savings accounts let households accumulate assets safely and smooth consumption across seasons and shocks, so a bad harvest or an illness does not force the sale of productive assets or the withdrawal of children from school. Microinsurance spreads risks that would otherwise keep households in low-return, low-risk activities. Because most microfinance clients are women, it gives them income and control over resources, which the evidence links to higher spending on children’s health and education - the human capital that drives long-run development. Mobile-money services such as M-Pesa in Kenya extend these gains at low cost and have been shown to lift households out of poverty by enabling remittances and saving.',
        'The empowerment effects vary with social context and can be undermined where men control the loans in practice. Savings and payment services have shown stronger effects in evaluations than microcredit itself, which suggests that the inclusion channel, rather than the loan channel, is where microfinance does most for development - and that it works best alongside education, infrastructure and functioning markets rather than as a substitute for them.',
      ],
    ],
    'Microfinance can promote development by relaxing the credit constraint that excludes poor households from productive investment and by extending financial inclusion that stabilises consumption, builds assets and empowers women. Its measured effects on income are modest and it carries risks of high-cost debt, so it is a useful contribution rather than a route out of poverty on its own, with the savings and payments side proving more reliable than the lending side.',
    [
      'Definition of microfinance and of economic development',
      'Reason 1: credit constraint and asymmetric information; group lending; investment raising productivity and income, with a diagram',
      'Reason 2: financial inclusion - savings, consumption smoothing, insurance, empowerment of women, human capital',
      'Application: Grameen Bank, M-Pesa',
      'Link to the poverty trap',
    ],
    [
      'Evaluation evidence shows modest effects on income and poverty',
      'High interest rates and over-indebtedness',
      'Depends on complementary skills, markets and infrastructure',
      'Savings and payments more effective than credit',
    ],
  ),

  Q064: A(
    [
      [
        'poverty-trap',
        'The savings-investment gap at the heart of the poverty trap. A financial sector that mobilises savings and channels them to investment is the link the trap is missing; the question is whether it must grow for that link to work.',
      ],
      [
        'asymmetric-information',
        'The information problems a financial sector exists to solve - screening borrowers, monitoring projects, pooling risk. It also shows what goes wrong when the sector grows faster than its ability to solve them: the misallocation that precedes a crisis.',
      ],
    ],
    'The financial sector comprises banks, capital markets, insurers and payment systems that move funds from savers to borrowers, price risk and enable transactions. Economic development requires investment, and investment requires savings to be mobilised and allocated to productive uses, which is what a financial system does. A necessary condition is one without which development cannot occur. A functioning financial sector is close to being one; a growing financial sector - one that expands relative to the economy - is not, and beyond a point its growth can undermine the development it is supposed to serve.',
    [
      [
        'Development needs capital accumulation, and the Harrod-Domar model shows growth depends on the savings rate and the productivity of investment. A financial sector raises both. Banks pool small savings into loans large enough to fund factories and infrastructure, so households’ deposits become the economy’s capital stock; they screen and monitor borrowers, solving the asymmetric-information problems that would otherwise leave savings idle or lent to the wrong projects; capital markets let firms raise equity and spread risk; and insurance and payment systems let households and firms plan and trade. Without these, savings sit in gold, land or cash and investment is limited to what a family can fund itself. Cross-country evidence finds that countries with deeper financial systems in one decade grow faster in the next, and East Asian development was built on high savings channelled through banks into industry.',
        'Correlation is not causation: growth may generate demand for financial services rather than the reverse, and the state-directed credit of Japan, Korea and China channelled savings to industry through a financial sector that was tightly controlled rather than freely growing. What mattered was that savings reached investment, not that the sector expanded.',
      ],
      [
        'Financial sector growth beyond the needs of the real economy brings costs. Rapid credit expansion tends to flow into property and speculation rather than productive investment, inflating asset prices and creating fragility; the Asian financial crisis of 1997 followed years of financial liberalisation and capital inflows in economies that had been growing fast, and the 2008 crisis originated in the most developed financial sector in the world. Large financial sectors attract the most talented workers away from engineering and industry, extract rents through fees and complexity, and, when they fail, impose losses on taxpayers and years of lost output. Research at the IMF and BIS finds that beyond a moderate level of credit relative to GDP, further financial deepening is associated with slower growth. A growing financial sector can therefore be a symptom of misallocation rather than a condition of development.',
        'The costs arise from financial growth that is unregulated or driven by capital inflows rather than from finance as such. Emerging economies with strong regulation and gradual liberalisation have expanded their financial sectors without crises, and the alternative - financial repression that keeps the sector small - has costs in low returns to savers and credit rationing for firms.',
      ],
      [
        'Other conditions are at least as necessary. Property rights, the rule of law and political stability determine whether anyone will invest at all; human capital, infrastructure and macroeconomic stability determine whether investment is productive; and open trade provides the markets and technology. Financial services can be provided in simple forms that do not require a large sector: mobile money in Kenya extended payments and savings to millions through telecoms firms, microfinance reaches households banks ignore, and foreign direct investment brings capital without domestic intermediation. For a low-income economy the necessary financial condition is basic inclusion and a banking system that channels savings to firms, not a growing share of GDP in finance.',
        'Even these substitutes rely on some financial infrastructure - a payments system, a legal framework for contracts, a central bank - so the argument is about the size and form of the financial sector rather than whether one is needed. The question of necessity depends on what “growth of the financial sector” is taken to mean.',
      ],
    ],
    'A functioning financial sector - one that mobilises savings, allocates them to productive investment and manages risk - is close to a necessary condition for economic development, because without it capital accumulation is limited to what households can fund themselves. The growth of the financial sector is not: development in East Asia used tightly controlled banking rather than a freely expanding sector, financial growth beyond the real economy’s needs has produced crises rather than development, and basic inclusion through mobile money and microfinance delivers much of the benefit at small scale. Finance is necessary in function but not in size, and it is never sufficient without the institutions, human capital and stability that make investment worthwhile.',
    [
      'Definition of the financial sector and of a necessary condition; development',
      'Savings, investment and Harrod-Domar; the poverty trap, with a diagram',
      'Functions: pooling savings, screening and monitoring, risk, payments, with a diagram',
      'Evidence linking financial depth to growth; East Asian experience',
      'Costs of excessive financial growth: misallocation, crises, rent extraction',
      'Other conditions and alternatives: institutions, human capital, mobile money, FDI',
    ],
    [
      'Correlation versus causation; state-directed credit',
      'Costs depend on regulation and the source of financial growth',
      'Function versus size of the financial sector',
      'Necessary versus sufficient conditions',
      'Judgement: a functioning sector is necessary, a growing one is not',
    ],
  ),
}
