/*
  Developed answers for Paper 1 (9EC0/01, Markets and Business Behaviour),
  Q011-Q030. Section B questions carry 8, 10, 12 or 15 marks; Section C
  essays carry 25. Rows and conclusions scale with the marks: an 8-marker
  gets two chains and no conclusion, a 25-marker three chains and a
  justified judgement. Same shape as econ-essay-answers-as.js.
*/

const A = (diagrams, intro, rows, conclusion, kaa, evaluation) => ({
  diagrams,
  intro,
  rows,
  conclusion,
  markScheme: { kaa, evaluation },
})

export const ECON_ESSAY_ANSWERS_P1 = {
  Q011: A(
    [
      [
        'ppf-shift',
        'A PPF with capital goods on one axis and consumer goods on the other. Show the economy choosing a point with more capital goods now, then a second, outward frontier for the future. The distance between the frontiers is the increase in productive potential; the consumer goods given up now are the opportunity cost.',
      ],
    ],
    'Net investment is the addition to the capital stock after depreciation has been replaced. Productive potential is the maximum output an economy can produce with its resources fully employed, shown by the production possibility frontier. A sustained rise in net investment means the economy is choosing a point on its PPF with more capital goods and fewer consumer goods today, and because capital goods are used to produce other goods, the frontier shifts outward in the future.',
    [
      [
        'On the PPF, capital goods and consumer goods compete for the same resources. A sustained increase in net investment moves the economy along the frontier towards capital goods, giving up some current consumption. As the new capital - factories, machinery, infrastructure - comes into use, the economy can produce more of both goods, so the whole frontier shifts outward from PPF1 to PPF2. Future productive potential rises, and with it the maximum attainable standard of living. The economy has traded consumption now for a larger set of choices later.',
        'The shift depends on the type of investment. Only net investment above depreciation expands the capital stock; if much of the spending replaces worn-out capital, the frontier barely moves. The contrast between China, where investment has run above 40% of GDP for two decades and the frontier has moved out faster than in any large economy in history, and the UK, where investment has hovered near 17% of GDP and productivity growth has been weak since 2008, is the same diagram drawn for two economies. Investment in property or financial assets adds little productive capacity, and capital that stands idle because demand is weak or skills are lacking shifts the frontier on paper but not in practice.',
      ],
      [
        'New capital usually embodies better technology, so investment raises the productivity of the workforce as well as the quantity of capital. Output per worker rises, which means the same labour force can produce more, pushing the frontier out further than the extra capital alone would suggest. Sustained investment also encourages complementary changes - training, new processes - that compound the effect over time, which is why economies with high investment ratios have grown fastest.',
        'There is an opportunity cost in the present: consumption forgone now, which for a low-income economy may mean real hardship, and the gain arrives only after a lag of years. Whether the trade-off is worthwhile depends on how productive the investment proves to be and on whether the extra capacity is eventually used, which requires demand to grow alongside supply.',
      ],
    ],
    null,
    [
      'Definition of net investment and productive potential',
      'PPF diagram with capital and consumer goods; movement along the frontier towards capital goods',
      'Outward shift of the PPF as the capital stock grows',
      'Investment embodying new technology and raising productivity',
      'Opportunity cost of current consumption forgone',
    ],
    [
      'Depends on the type of investment: replacement versus new capacity, productive versus property',
      'Capital may stand idle without demand or complementary skills',
      'Time lags before the frontier shifts',
      'Opportunity cost in the present may be significant',
    ],
  ),

  Q012: A(
    [
      [
        'supply-demand',
        'A competitive market clearing at equilibrium price and quantity. Use it to explain the rationing, signalling and incentive functions: a rise in demand raises price, which signals scarcity, rations the good to those most willing to pay and gives producers an incentive to supply more.',
      ],
      [
        'negative-externality',
        'MPC below MSC and the welfare-loss triangle at the free-market output. This is the diagram for the second chain - the price mechanism gets the quantity wrong when costs fall on third parties.',
      ],
    ],
    'The economic problem is that resources are scarce relative to wants, so every economy must decide what to produce, how and for whom. In a market economy the price mechanism answers these questions through the interaction of supply and demand: prices ration scarce goods, signal where resources are wanted and give producers an incentive to respond. The question is whether this mechanism alone can be relied on, and the answer is that it solves the problem of scarcity efficiently in competitive markets but fails predictably in others.',
    [
      [
        'Prices perform three functions. They ration: when a good is scarce, its price rises until quantity demanded equals the quantity available, allocating it to those who value it most. They signal: a rising price tells producers that consumers want more of a good, and a falling price tells them to switch resources elsewhere. They incentivise: higher prices raise profits, drawing new firms and factors of production into the market until supply rises and the price falls back. No central planner needs to know anything; each consumer and producer acts on the price in front of them, and resources move to their highest-valued uses. Hayek’s point was that the price system economises on information in a way no alternative can, which is why planned economies suffered chronic shortages and surpluses.',
        'Rationing by price allocates goods according to ability to pay rather than need. Scarce housing, healthcare or food go to those with income, so the “for whom” question is answered in a way many consider unfair, and in a very unequal society the market may produce luxuries for a few while basic wants go unmet. The price mechanism solves scarcity efficiently but not equitably, and equity is part of what a society expects from an answer to the economic problem.',
      ],
      [
        'The price mechanism only reflects private costs and benefits. Where production imposes costs on third parties, marginal social cost exceeds marginal private cost, the market over-produces and there is a welfare loss; where consumption confers external benefits, it under-produces. Public goods are not produced at all because free riders cannot be excluded, so there is no price to signal anything. Information gaps lead to over-consumption of demerit goods and under-consumption of merit goods. Monopolies restrict output and raise price above marginal cost. In each case the signal is wrong or missing, and resources are misallocated. Climate change is the largest example: the market price of fossil fuels carries no signal about the damage they cause.',
        'These failures are the reason no economy relies on the price mechanism alone. But most of them can be corrected while keeping the price mechanism in charge: a carbon tax puts a price on the externality, a subsidy corrects an under-provided merit good, and competition policy restores the signal a monopoly distorts. The failures argue for intervention within a market system rather than for abandoning it.',
      ],
      [
        'Every modern economy is mixed. Governments provide public goods, regulate, tax externalities and redistribute income, and the debate is about the boundary. The Soviet experience showed that planning could not replace the price mechanism as the main allocator, but the 2008 financial crisis showed that unregulated markets can misallocate on a huge scale. The price mechanism solves the everyday problem of scarcity - what to produce and how - better than any alternative, and government works best where it corrects the signals rather than replacing them.',
        'Intervention brings government failure: information problems, administrative cost, unintended consequences and political motives. The choice is not between a perfect market and a perfect government but between two imperfect mechanisms, and which is better depends on the market. For most goods the price mechanism is the more reliable; for public goods, large externalities and natural monopolies it is not.',
      ],
    ],
    'The price mechanism cannot be relied on alone to solve the economic problem. It allocates scarce resources efficiently in competitive markets with no externalities, and it does so with an economy of information that no alternative matches, which is why it remains the core of every successful economy. But it fails where costs and benefits fall on third parties, where goods are non-excludable, where information is poor and where firms have market power, and it answers the distribution question by ability to pay. To a large extent the price mechanism does the work, but it needs a government to provide what it cannot, correct the signals it gets wrong and decide how much inequality a society will accept.',
    [
      'The economic problem: scarcity, choice, what/how/for whom',
      'Rationing, signalling and incentive functions of the price mechanism, with a supply and demand diagram',
      'Allocative efficiency in competitive markets; the information advantage of prices',
      'Market failure: externalities, public goods, information gaps, monopoly, with a diagram',
      'The distribution of income and the “for whom” question',
      'Mixed economies and the role of government',
    ],
    [
      'Efficiency versus equity: rationing by ability to pay',
      'Many market failures can be corrected within a market system',
      'Government failure as the alternative risk',
      'Depends on the market: competitive goods versus public goods and natural monopolies',
      'Judgement: the price mechanism does most of the work but cannot be relied on alone',
    ],
  ),

  Q013: A(
    [
      [
        'demand-shift',
        'Demand for the good shifting right from D1 to D2 because its complement is now cheaper. Show the rise in equilibrium price and quantity, then explain in words how the split between the two depends on the elasticity of supply.',
      ],
    ],
    'A demand curve slopes downwards because of diminishing marginal utility: each additional unit consumed adds less satisfaction than the one before, so a consumer will only buy more at a lower price. Complementary goods are in joint demand: they are consumed together, so a change in the price of one affects demand for the other. Their cross elasticity of demand is negative. When the price of a complement falls, quantity demanded of it extends, and because the two are used together, demand for the second good rises at every price - a rightward shift of its demand curve. In a competitive market this raises both the equilibrium price and the quantity traded.',
    [
      [
        'Take games consoles and games. A fall in the price of consoles extends quantity demanded along the console demand curve; more households own one. Sony and Microsoft both price the PlayStation and Xbox close to, and at launch sometimes below, what they cost to build, precisely because the console is the complement that creates the demand for the software they actually earn on. Each of those households now wants games, so demand for games shifts right from D1 to D2 at every price. At the original price there is excess demand, retailers raise prices and producers extend supply along the supply curve until a new equilibrium at a higher price P2 and larger quantity Q2. Both price and quantity traded rise, and producers of the complement enjoy higher revenue without having changed anything themselves.',
        'The size of the shift depends on the cross elasticity of demand. Goods in strong joint demand, such as printers and ink cartridges, have a large negative XED and the shift is big; loosely complementary goods have a small one. It also depends on the size of the price fall in the complement and on the price elasticity of demand for the complement itself - a price cut on a good with inelastic demand brings few new buyers.',
      ],
      [
        'How the effect divides between price and quantity depends on the price elasticity of supply. If supply is elastic - producers can raise output easily, as with downloadable games - the shift in demand raises quantity a lot and price only slightly. If supply is inelastic, because capacity is fixed in the short run, the same shift raises price sharply and quantity little. Over time supply becomes more elastic as firms expand capacity and new entrants arrive, so the initial price rise tends to fade while the quantity effect grows.',
        'The analysis holds other things constant. In practice incomes, tastes, the prices of substitutes and expectations all move at the same time, and a fall in the complement’s price may be part of a wider change - a new console generation, for example - that shifts several curves at once. The prediction of higher price and quantity is robust; the magnitudes are not.',
      ],
    ],
    null,
    [
      'Definition of complementary goods, joint demand and negative cross elasticity',
      'Fall in the complement’s price extends its quantity demanded and shifts demand for the good rightwards',
      'Diagram showing the shift and the rise in equilibrium price and quantity',
      'Adjustment through excess demand and an extension of supply',
      'Price elasticity of supply determining the split between price and quantity effects',
    ],
    [
      'Magnitude depends on the strength of complementarity (XED) and on the size of the price fall',
      'Elastic versus inelastic supply; short run versus long run',
      'Ceteris paribus - other determinants of demand may change at the same time',
      'Overall: the direction is certain, the magnitude is not',
    ],
  ),

  Q014: A(
    [
      [
        'elasticity',
        'Elastic and inelastic demand curves through the same point. Show that the same price rise loses much more quantity on the elastic curve, which is why the revenue effect of a price change depends on PED.',
      ],
      [
        'revenue-curves',
        'AR, MR and TR for a downward-sloping demand curve. TR is maximised where MR is zero and demand is unit elastic; along the elastic upper half a price cut raises TR, along the inelastic lower half a price rise raises TR.',
      ],
    ],
    'Price elasticity of demand measures the responsiveness of quantity demanded to a change in price: percentage change in quantity divided by percentage change in price. Demand is elastic where PED is below -1, inelastic between 0 and -1, and unitary at exactly -1, where a price change leaves total revenue unchanged. It is one of three demand elasticities a firm can use: income elasticity (YED) distinguishes inferior goods, with negative YED, from normal goods, and luxuries, with a YED above 1; cross elasticity (XED) distinguishes substitutes, with positive XED, from complements, with negative XED. For a firm setting prices, PED determines what a price change does to total revenue, so it is central to pricing strategy, price discrimination and passing on cost increases. Its usefulness is limited by how accurately it can be estimated, by the market structure the firm operates in and by the firm’s objectives.',
    [
      [
        'The relationship between PED and total revenue is the core of its usefulness. Where demand is price inelastic (PED between 0 and -1), a price rise reduces quantity by a smaller percentage, so total revenue rises; where demand is elastic (PED below -1), a price cut raises quantity by more than the price falls, so revenue rises. On the revenue curves diagram, total revenue is maximised where marginal revenue is zero and demand is unit elastic. A firm that knows its PED therefore knows which direction to move price to raise revenue: a rail operator with inelastic commuter demand raises peak fares; a supermarket with elastic demand for a branded item runs a promotion. Knowledge of PED also tells a firm how much of a cost increase, such as a new tax, it can pass on to consumers without losing too many sales. UK tobacco is the clearest case: demand is highly inelastic because the product is addictive and has few substitutes, so successive duty rises have been passed on almost in full and have continued to raise revenue. The Soft Drinks Industry Levy of 2018 shows the opposite response, since demand for any one brand of soft drink is elastic against the many untaxed alternatives, and most producers reformulated to cut sugar below the threshold rather than raise price and lose sales.',
        'PED is difficult to estimate. It is calculated from past data on prices and sales, during which other factors - incomes, competitors’ prices, advertising - were also changing. It varies along the demand curve, over time, between customer groups and with the size of the price change. A firm’s estimate may be badly wrong, and pricing on a wrong estimate can cut revenue rather than raise it.',
      ],
      [
        'Knowledge of PED makes third-degree price discrimination possible. If a firm can separate customers into groups with different elasticities and prevent resale, it charges a higher price to the inelastic group and a lower price to the elastic group, earning more total revenue and profit than a single price would. Airlines charge business travellers booking late more than leisure travellers booking early - Ryanair and easyJet both raise fares as a departure date approaches and the remaining buyers become progressively less price-sensitive - while cinemas offer student and off-peak prices. The relative elasticities determine the price gap. Without an estimate of PED for each segment, none of this is possible.',
        'Price discrimination requires market power, identifiable segments and no resale, so PED is useful in this way only to firms that meet the conditions. Where consumers can arbitrage, or where the firm cannot tell segments apart, the knowledge cannot be acted on. Regulation may also limit the practice.',
      ],
      [
        'PED is not the only or always the main consideration in setting price. In perfect competition firms are price takers and PED is irrelevant. In oligopoly, interdependence dominates: game theory shows that whether a price change actually raises a firm’s revenue depends on whether rivals are expected to match it, not on the market elasticity of demand alone, so the reaction of competitors matters more than PED by itself. Costs set a floor beneath price, and firms with objectives other than profit maximisation - sales maximisation, market share, limit pricing to deter entry - will choose prices that PED alone would not suggest. Many firms in practice use cost-plus pricing and adjust by trial and error rather than estimating elasticities.',
        'Even where firms use cost-plus rules, the mark-up they apply is implicitly an elasticity judgement, and firms that consistently misjudge demand lose out to those that do not. Modern firms, especially online retailers, have far better data on price responsiveness than in the past and can test prices in real time: Amazon is reported to change prices on millions of items a day, which is in effect continuous measurement of elasticity, and makes PED considerably more useful than it was when firms had only historic sales data to work from.',
      ],
    ],
    'Knowledge of PED is useful to a great extent: it tells a firm what a price change will do to revenue, makes price discrimination possible and shows how much of a cost rise can be passed on. Its usefulness is limited by the difficulty of estimating it accurately, and by market structure and objectives - a price taker cannot use it, an oligopolist must think first about rivals, and a firm pursuing sales or market share will price differently. PED is a necessary input to pricing decisions in most imperfectly competitive markets, but not a sufficient one; it works alongside cost, competition and strategy rather than replacing them.',
    [
      'Definition and formula of PED; elastic, inelastic and unit elastic demand',
      'Relationship between PED and total revenue, with a diagram',
      'Application to pricing decisions and passing on cost increases',
      'Third-degree price discrimination based on different elasticities',
      'Market structure: price takers, oligopoly interdependence and game theory',
      'Other pricing considerations: costs, objectives, competitors',
    ],
    [
      'Difficulty and unreliability of estimating PED; it changes over time and along the curve',
      'Conditions for price discrimination may not be met',
      'Depends on market structure and on the firm’s objectives',
      'Cost-plus pricing in practice; better data makes PED more usable',
      'Judgement: useful but not sufficient on its own',
    ],
  ),

  Q015: A(
    [
      [
        'public-goods',
        'The free-rider problem: individual willingness to pay for a public good is lower than the benefit received because each person expects others to pay. Show the market providing nothing while the socially optimal quantity is positive.',
      ],
    ],
    'A public good has two characteristics: it is non-excludable, so once it is provided nobody can be prevented from benefiting, and it is non-rival, so one person’s use does not reduce the amount available to others. A lighthouse and a flood defence system both have these properties, which is why private firms will not supply them and the market fails.',
    [
      [
        'A lighthouse is non-excludable: once its light is shining, every ship that passes can navigate by it whether or not the owner has paid. A flood barrier protects every house behind it. Because nobody can be excluded, consumers have no reason to pay - each can free ride on the payments of others, and if everyone reasons this way nobody pays. A private firm could not collect revenue to cover its costs, so no lighthouse or flood defence would be built even though the total benefit to society far exceeds the cost. This is a missing market, and it is why such goods are provided by the state and funded through taxation.',
        'Non-excludability can depend on technology and institutions. Lighthouses in eighteenth-century Britain were partly funded by light dues collected from ships in port, so exclusion was achieved indirectly, and modern satellite navigation is excludable by subscription. Many goods are quasi-public: partly excludable or rival at high levels of use, such as roads that become congested.',
      ],
      [
        'The goods are also non-rival. An extra ship using the lighthouse’s light does not dim it for others, and one more household behind the flood wall does not reduce the protection of its neighbours. The marginal cost of an additional user is zero, so the allocatively efficient price - price equal to marginal cost - is also zero. No private firm can survive charging nothing, which is a second reason the market will not supply the good, and a reason why even where exclusion is possible it would be inefficient to exclude anyone.',
        'Non-rivalry does not by itself prevent private provision - streaming services are non-rival but excludable and profitable. It is the combination of the two characteristics that defines a pure public good and creates the free-rider problem, and economists disagree about how many goods are truly pure rather than quasi-public.',
      ],
    ],
    null,
    [
      'Definition of a public good: non-excludable and non-rival',
      'Application of non-excludability to the lighthouse or flood defence and the free-rider problem',
      'Application of non-rivalry: zero marginal cost of an extra user',
      'Missing market and the case for state provision through taxation',
      'Diagram: a market with no effective demand - the missing market that state provision creates',
    ],
    [
      'Excludability can depend on technology and institutions; light dues, satellite navigation',
      'Quasi-public goods and the distinction from pure public goods',
      'Non-rivalry alone does not prevent private provision',
    ],
  ),

  Q016: A(
    [
      [
        'asymmetric-information',
        'Information gaps and merit goods: consumers under-estimate the private benefit, so demand lies below the true marginal benefit curve and the good is under-consumed. For a demerit good the perceived benefit lies above the true one. Show the welfare loss in each case.',
      ],
      [
        'negative-externality',
        'The comparison diagram for the second chain: MSC above MPC, over-production and the welfare-loss triangle, to weigh the size of externalities against information failure.',
      ],
    ],
    'Information failure occurs when buyers or sellers lack the information needed to make rational decisions, so resources are misallocated. It may be symmetric - both sides misjudge, as with merit and demerit goods - or asymmetric, where one party knows more than the other, as in the markets for used cars, insurance and financial products. Other causes of market failure are externalities, public goods and market power. Which is “most significant” depends on the size of the welfare loss each causes and on how easily each can be corrected.',
    [
      [
        'Information failure is pervasive. Consumers under-consume merit goods such as pensions, vaccinations and education because they under-estimate the private benefit or discount the future too heavily, and over-consume demerit goods such as sugary drinks and tobacco because they under-estimate the harm. In asymmetric cases the better-informed party exploits the other: sellers of used cars know their faults, so buyers offer only average prices and good cars leave the market - Akerlof’s “lemons” problem. In financial markets, banks sold products whose risks customers could not assess, and the mis-selling of payment protection insurance cost UK banks over £38 billion in compensation. The 2008 crisis was partly an information failure: buyers of mortgage-backed securities did not know what they contained. The welfare losses are large and spread across many markets.',
        'Information failures are often the cheapest market failures to correct. Labelling, health warnings, cooling-off periods, financial regulation and comparison websites all reduce them at low cost, and consumers learn from experience and from each other. Many information gaps shrink over time, whereas an externality persists until someone changes the price.',
      ],
      [
        'Externalities may be the larger source of welfare loss. Where marginal social cost exceeds marginal private cost the market over-produces and the loss is the triangle between the curves; for the burning of fossil fuels the external cost is global and persistent, which makes climate change the largest market failure in history by most estimates. Congestion, pollution, antibiotic resistance and the under-provision of goods with positive externalities such as research and vaccination all fit the same pattern. Unlike an information gap, an externality does not disappear when people are better informed; even fully informed producers pollute when the cost falls on others.',
        'Externalities and information failure overlap. Part of why people over-consume goods with external costs is that they do not know the costs, and part of why demerit goods are consumed is that the harm is external as well as private. Ranking them separately overstates the difference; in practice policy often addresses both at once, as a sugar levy does.',
      ],
      [
        'Public goods and market power are also significant. The free-rider problem means the market provides no defence, no street lighting and no flood protection at all - a complete rather than partial failure. Monopolies restrict output below the competitive level and raise prices, transferring surplus from consumers and creating deadweight loss; in essential markets such as energy and water the effect on households is direct. The significance of each failure differs by market: in financial services information failure dominates, in energy it is externalities and market power, in defence it is the public-good problem.',
        'Measuring which failure is most significant depends on the criterion. By number of markets affected, information failure is probably the most widespread. By size of welfare loss in a single market, environmental externalities are larger. By completeness of failure, public goods are the extreme case. A single ranking hides these differences.',
      ],
    ],
    'Information failure is one of the most widespread causes of market failure and it lies behind serious losses in financial, health and consumer markets, so it is significant to a large extent. It is not the most significant. Externalities, above all from carbon emissions, produce larger and more persistent welfare losses, cannot be corrected simply by informing people, and are harder to price; public goods represent a total rather than partial failure. Information failure is also the most correctable of the three. The view is defensible in financial markets but not for the economy as a whole, where externalities cause the greater loss.',
    [
      'Definition of market failure and of information failure, symmetric and asymmetric',
      'Merit and demerit goods; diagram showing under- or over-consumption',
      'Asymmetric information: used cars, insurance, financial products; the 2008 crisis',
      'Externalities as an alternative cause, with a diagram and the welfare loss',
      'Public goods and market power as further causes',
      'Application across markets: finance, energy, defence',
    ],
    [
      'Information failures are often cheap to correct and may shrink over time',
      'Externalities are larger, more persistent and independent of information',
      'Overlap between information failure and externalities',
      'Significance depends on the criterion and the market',
      'Judgement: significant but not the most significant overall',
    ],
  ),

  Q017: A(
    [
      [
        'tradable-permits',
        'The regulator’s cap as a vertical supply of permits against firms’ demand for the right to pollute, giving a market price per tonne. Show a lower cap shifting supply left and raising the price, which is the incentive to abate.',
      ],
    ],
    'Tradable pollution permits are a market-based method of correcting a negative externality. The government sets a cap on total emissions, issues or auctions permits up to the cap, and allows firms to buy and sell them. The permit price becomes the cost of polluting, so firms internalise the externality, and because they can trade, the cheapest abatement happens first. The economic effects depend heavily on where the cap is set and how the scheme is designed.',
    [
      [
        'The cap fixes the quantity of pollution at the level the regulator judges socially optimal, so unlike a tax the environmental outcome is certain. Firms that can cut emissions cheaply do so and sell their spare permits; firms with high abatement costs buy permits instead. Emissions are reduced where it costs least, which achieves the target at lower total cost than uniform regulation requiring every firm to cut by the same amount. The permit price gives every firm a continuous incentive to invest in cleaner technology, because each tonne saved is a permit that can be sold. The EU Emissions Trading System, now mirrored by the UK ETS, covers power generation and heavy industry on this basis.',
        'Everything depends on the cap. If too many permits are issued, as in the first phase of the EU ETS, the price collapses and there is no incentive to abate; if the cap is set too tight, costs rise sharply and output falls. The regulator needs information it does not have about abatement costs and the external cost of emissions, so the “optimal” cap is a judgement that can be badly wrong.',
      ],
      [
        'If permits are auctioned rather than given away, the scheme raises revenue that can fund green investment or be returned to households, and it avoids handing windfall gains to incumbents. Higher costs for polluting firms are passed to consumers as higher prices for electricity, steel and cement, which reduces demand for carbon-intensive goods - part of the intended effect - but also lowers real incomes and can be regressive. Firms facing higher costs may lose competitiveness against producers in countries without a carbon price.',
        'That competitiveness effect leads to carbon leakage: production relocates to unregulated countries, so global emissions do not fall and domestic jobs are lost. Free allocation to exposed industries and carbon border adjustments reduce this, but they add complexity. Monitoring, verification and enforcement carry administrative costs, and permit markets can be volatile, which makes long-term investment decisions harder.',
      ],
      [
        'Compared with a carbon tax, permits give certainty about quantity but not about price; a tax gives the reverse. Compared with regulation, permits are more cost-effective and encourage innovation rather than compliance. The scheme’s effectiveness in reducing emissions is therefore likely to be high if the cap declines over time and is enforced, and the wider economic effects - higher energy costs, some relocation, structural change towards cleaner industries - are the price of internalising an externality that had previously been borne by third parties.',
        'The distributional and competitiveness effects can be managed with revenue recycling and border adjustments, but the political pressure to loosen the cap when energy prices rise is constant. The scheme works well only if the government holds the cap.',
      ],
    ],
    'Tradable permits are likely to reduce emissions cost-effectively and to encourage innovation, with revenue and price signals that regulation lacks, provided the cap is set tightly enough and enforced. The costs are higher prices for carbon-intensive goods, possible carbon leakage and administrative complexity. On balance the effects are favourable, but the outcome depends far more on the level of the cap than on the choice of instrument.',
    [
      'Definition of tradable pollution permits and the cap',
      'Internalising the externality; the permit price as the cost of polluting',
      'Diagram of the permit market',
      'Cost-effective abatement through trade; incentive to innovate',
      'Revenue from auctioning; effects on costs, prices and consumers',
      'Comparison with a carbon tax and with regulation',
    ],
    [
      'Depends on the level of the cap; information problems for the regulator',
      'Carbon leakage and loss of competitiveness',
      'Administrative and monitoring costs; price volatility',
      'Regressive effects on households',
      'Judgement: effective if the cap is tight and enforced',
    ],
  ),

  Q018: A(
    [
      [
        'indirect-tax',
        'A tax on a good with external costs raising price and cutting quantity towards the social optimum - intervention improving allocation. Mark the tax revenue and the fall in the welfare-loss triangle.',
      ],
      [
        'maximum-price',
        'A price ceiling below equilibrium creating excess demand - intervention worsening allocation. Show the shortage and the welfare loss from units no longer traded; this is the diagram for the government-failure chain.',
      ],
    ],
    'An efficient allocation of resources is one where marginal social benefit equals marginal social cost in every market, so no reallocation could make society better off. Free markets achieve this in competitive markets without externalities; they fail where costs and benefits fall on third parties, where goods are non-excludable, where information is poor or where firms have market power. Government intervention aims to correct these failures, but it is subject to failures of its own. Whether it produces a more efficient allocation than the market depends on which market and which policy.',
    [
      [
        'Where a market fails, well-designed intervention can raise efficiency. An indirect tax equal to the marginal external cost moves output to the social optimum and removes the welfare-loss triangle; the UK’s landfill tax and Soft Drinks Industry Levy have both changed behaviour in the intended direction. Subsidies raise consumption of merit goods, state provision fills the missing market for public goods, regulation limits emissions, and competition policy stops mergers that would create monopoly power. In each case the market outcome was inefficient by definition and intervention moves it closer to MSB = MSC. For public goods there is no market outcome to improve on: without intervention there is no provision at all.',
        'The efficiency gain depends on setting the policy at the right level, and the government rarely knows the marginal external cost or the true demand for a public good. A tax set too high creates a new welfare loss on the other side of the optimum. Administrative and compliance costs must also be subtracted from the gain, and for small market failures they can exceed it.',
      ],
      [
        'Intervention in markets that were working can reduce efficiency. A maximum price below equilibrium - rent controls are the standard case - creates excess demand: quantity supplied falls as landlords withdraw property, quantity demanded rises, and the shortage is allocated by queues, favouritism or black markets rather than by price. Units that would have been traded at the equilibrium price are no longer traded, which is a deadweight loss. A minimum price creates a surplus that must be bought and stored, as the Common Agricultural Policy’s intervention prices did. Both replace the price signal with a political one, and the misallocation that follows is a cost of intervention, not of the market.',
        'These outcomes depend on elasticities and design. Where supply is very inelastic in the short run, a rent control transfers income from landlords to tenants with little immediate loss of supply, and a minimum unit price for alcohol targets a demerit good whose demand the government wants to reduce anyway. Price controls are not always inefficient, but they are inefficient whenever the market they distort was not failing.',
      ],
      [
        'Government failure is the general case for caution. Politicians face short electoral cycles, so they favour visible policies over efficient ones; regulators can be captured by the industries they oversee; subsidies are hard to withdraw once granted; and intervention in one market has unintended effects in others - fuel duty freezes encourage car use, the buy-to-let boom followed pension reforms. Because intervention uses tax revenue, it also has an opportunity cost. None of this means markets always do better; it means the comparison is between an imperfect market and an imperfect government, and the answer differs by case.',
        'The strongest cases for intervention - public goods, large externalities, natural monopolies, severe information failure in financial markets - are ones where the market outcome is very far from efficient, so even an imperfect policy improves on it. The weakest are competitive markets for ordinary goods, where the market already allocates well and intervention can only distort.',
      ],
    ],
    'Government intervention leads to a more efficient allocation than the free market where the market fails substantially - public goods, major externalities, monopoly power - and where the policy is well targeted, because there the market outcome is inefficient by construction and intervention moves towards MSB = MSC. It leads to a less efficient allocation where the market was working or where the policy is badly set, as price controls usually show, and government failure means even good policies deliver less than they promise. The extent is therefore conditional: intervention improves efficiency in the right markets with the right tools, and reduces it elsewhere. The right question is not market or government but which failure is larger in the market at hand.',
    [
      'Definition of allocative efficiency and of market failure',
      'Intervention correcting externalities, public goods, information gaps and market power, with a diagram',
      'Examples of successful UK intervention',
      'Price controls creating shortages or surpluses, with a diagram',
      'Definition and causes of government failure',
      'Opportunity cost of intervention',
    ],
    [
      'Information problems in setting the policy at the right level',
      'Depends on elasticities and design; some price controls achieve their aim',
      'Regulatory capture, political short-termism, unintended consequences',
      'Comparison of an imperfect market with an imperfect government, case by case',
      'Judgement: more efficient where market failure is large and policy is well designed',
    ],
  ),

  Q019: A(
    [
      [
        'economies-of-scale',
        'The LRAC curve with the minimum efficient scale marked. Use it for the first reason: organic growth lets a firm move down the curve at a pace that avoids the diseconomies that a sudden jump in size can bring.',
      ],
    ],
    'Organic (internal) growth means expanding by increasing output, opening new outlets or entering new markets using the firm’s own resources, usually financed from retained profit. External growth means merging with or taking over another firm. Organic growth is slower but gives the firm more control, avoids the costs and risks of acquisitions and reduces the danger of diseconomies of scale.',
    [
      [
        'Organic growth keeps the firm in control of its own culture, systems and quality. When two firms merge, their management structures, IT systems, pay scales and working practices have to be integrated, and a clash of cultures often produces communication problems and falling morale - the classic sources of managerial diseconomies of scale. Many mergers destroy shareholder value for this reason. A firm that grows organically expands its existing model step by step, trains its own staff and keeps the processes that made it successful, so it moves down the LRAC curve without the sudden rise in average cost that a badly integrated merger can cause.',
        'Organic growth is slow. In a market with first-mover advantages or network effects, a rival that grows by acquisition can gain market share and economies of scale before the organic grower catches up. Mergers also bring assets that cannot be built quickly - brands, patents, distribution networks - so the control gained by growing organically may come at the cost of falling behind.',
      ],
      [
        'Organic growth is cheaper and less risky. Takeovers require paying a premium above the target’s market value, and acquirers frequently overpay because the expected synergies do not materialise. Large mergers attract scrutiny from the Competition and Markets Authority, which can block or unwind them after months of uncertainty, as with Sainsbury’s and Asda in 2019. Financing an acquisition often means borrowing, which raises gearing and interest costs. Organic growth can be funded from retained profit at the pace the firm can afford, with each step reversible if demand disappoints, so the downside risk is smaller.',
        'The lower risk applies to each step, not necessarily to the strategy. A firm growing organically into an unfamiliar market bears the full risk of learning it, whereas acquiring a local firm buys that knowledge. Whether organic growth is really the safer route depends on the market and on the quality of the acquisition targets available.',
      ],
    ],
    null,
    [
      'Definition of organic growth and of growth by merger or takeover',
      'Control of culture and systems; avoiding managerial diseconomies of scale',
      'Lower cost and risk: acquisition premiums, integration failure, regulatory scrutiny, gearing',
      'Financing from retained profit at a manageable pace',
      'Diagram of LRAC and the minimum efficient scale',
    ],
    [
      'Organic growth is slower; loss of first-mover advantage',
      'Acquisitions bring brands, patents and knowledge that cannot be built quickly',
      'Risk depends on the market and on the targets available',
    ],
  ),

  Q020: A(
    [
      [
        'monopoly',
        'A profit-maximising monopolist at MC = MR with price above marginal cost, compared with the competitive outcome where price equals MC. Show the higher price, lower output and the deadweight-loss triangle - the consumer’s loss from the merger if market power is the main effect.',
      ],
      [
        'economies-of-scale',
        'LRAC falling as the merged firm’s output rises. This is the consumer’s potential gain: if the cost saving is passed on, price can fall even with fewer firms.',
      ],
    ],
    'A merger between two of the largest firms in a market is horizontal integration that raises concentration and moves the market towards oligopoly or monopoly. For consumers the effects pull in opposite directions: greater market power tends to raise prices and reduce choice, while economies of scale and higher profits can lower costs and fund innovation. The net impact depends on how much market power the merged firm gains, whether cost savings are passed on and whether the competition authorities intervene.',
    [
      [
        'The most direct effect is a loss of competition. With fewer rivals the merged firm faces a less elastic demand curve and can profit-maximise at a higher price and lower output; on the monopoly diagram price rises above marginal cost and the deadweight-loss triangle shows the welfare that consumers lose. In oligopoly, higher concentration makes tacit collusion easier and price wars less likely. Consumers pay more, buy less and, if the firms sold differentiated products, lose choice. There is also less pressure to keep costs down, so X-inefficiency can rise, and less pressure to maintain quality and service. This is why the CMA blocked the Sainsbury’s-Asda merger in 2019: it judged that prices would rise in local areas where the two were the main competitors.',
        'The loss depends on the market. If the market is contestable - entry barriers are low and new firms could enter if prices rose - the merged firm cannot exploit its position, and if it competes globally the “market” is much larger than the domestic share suggests. The CMA can block, unwind or attach conditions to a merger, so the worst outcomes are often prevented.',
      ],
      [
        'A larger firm can exploit economies of scale. Combining production lets fixed costs be spread over more output, purchasing power lowers input prices, duplicated head offices and distribution networks are closed, and cheaper finance is available. Long-run average cost falls, and if the merged firm passes even part of the saving on, prices to consumers can fall despite the reduction in competition. Higher profits can also fund research and development, so consumers gain from better products over time - the dynamic efficiency argument, strongest in industries like pharmaceuticals and telecoms with high fixed costs of innovation.',
        'Cost savings are only passed on if competitive pressure remains, so the two effects are linked: the more market power the merger creates, the less likely consumers see the benefit. Predicted synergies are often overstated, and integrating two large organisations can produce diseconomies of scale that raise costs instead of lowering them.',
      ],
      [
        'The impact also depends on which consumers and which market. In a market with strong network effects or high fixed costs, a merger may be the only way to reach the minimum efficient scale, and consumers gain from a viable supplier where two weak ones would have failed. In a local market such as groceries, petrol or bus services, the same merger removes the only alternative and harms consumers directly. Time matters too: short-run price effects may be small while the merged firm settles, and long-run effects depend on whether the reduced competition dulls innovation or the higher profits fund it.',
        'Regulation shapes the outcome. Where the merged firm becomes dominant in an essential service, a regulator can cap prices and require service standards, so consumers can be protected even in a concentrated market. The effectiveness of that regulation, and whether the CMA has the resources and remit to act, then becomes the deciding factor.',
      ],
    ],
    'A merger between two of the largest firms in a market is likely to harm consumers through higher prices, less choice and weaker incentives to be efficient, and this is the presumption competition authorities start from. The harm can be offset if the merger creates real economies of scale that competitive pressure or regulation forces the firm to pass on, and if higher profits fund innovation. The net impact therefore depends on the contestability of the market, the size and reality of the cost savings and the strength of the regulator. In concentrated local markets the impact is probably negative; in global, high-fixed-cost industries it may be positive.',
    [
      'Definition of a horizontal merger and of market concentration',
      'Loss of competition: higher price, lower output, deadweight loss, with a monopoly diagram',
      'Reduced choice, X-inefficiency and lower quality',
      'Economies of scale lowering LRAC; potential for lower prices',
      'Dynamic efficiency: profits funding innovation',
      'Role of the CMA; application to Sainsbury’s-Asda or similar',
    ],
    [
      'Depends on contestability and on how the market is defined',
      'Cost savings passed on only where competitive pressure remains; synergies may be overstated',
      'Diseconomies of scale from integration',
      'Short-run versus long-run effects; regulation of the merged firm',
      'Judgement: likely negative in concentrated local markets, potentially positive in high-fixed-cost industries',
    ],
  ),

  Q021: A(
    [
      [
        'business-objectives',
        'AR, MR, AC and MC on one diagram with the three output levels marked: profit maximisation at MC = MR, revenue maximisation at MR = 0, and sales maximisation at AR = AC. Revenue maximisation gives a larger output and lower price than profit maximisation.',
      ],
    ],
    'Profit maximisation occurs at the output where marginal cost equals marginal revenue. Sales revenue maximisation, associated with Baumol, occurs where marginal revenue is zero, which is a larger output at a lower price. A firm might pursue revenue rather than profit because of who controls it and because a larger scale can serve its longer-term interests.',
    [
      [
        'The divorce of ownership from control in large firms means decisions are taken by salaried managers rather than shareholders. Managers’ pay, bonuses and status are often linked to the size of the business - turnover, market share, number of employees - rather than to profit, so they gain more from a larger firm than from a more profitable one. Baumol argued that managers therefore maximise revenue subject to a minimum profit constraint that keeps shareholders satisfied. Because the profit constraint is loose in a firm with dispersed shareholders, the manager can expand output beyond the profit-maximising level towards MR = 0.',
        'Shareholders can align managers’ incentives with profit through share options and performance-related pay, and a firm that sacrifices profit for size risks a falling share price and a hostile takeover. Revenue maximisation is more likely where shareholders are dispersed and monitoring is weak than where a few large institutional investors hold the firm to account.',
      ],
      [
        'Revenue maximisation can also be a strategic choice. Producing more at a lower price builds market share, which can bring economies of scale, brand loyalty and bargaining power with suppliers, and a large incumbent with a low price deters new entrants. In markets with network effects, such as online platforms, size itself raises the value of the product, so the firm that grows fastest may dominate. Firms like Amazon accepted years of thin margins to build scale. In this sense revenue maximisation now can be the route to higher profits later, so the two objectives are not always in conflict.',
        'Whether this pays off depends on the firm being able to raise prices or cut costs once it is large. If competitors match its scale or the market stays contestable, the firm has given up profit without securing the position it wanted. Revenue maximisation as a long-run profit strategy is a bet on future market power, and investors need patience to fund it.',
      ],
    ],
    null,
    [
      'Definition of profit maximisation (MC = MR) and revenue maximisation (MR = 0)',
      'Diagram showing the two outputs and prices',
      'Divorce of ownership from control; managerial incentives tied to size',
      'Baumol’s profit constraint',
      'Strategic reasons: market share, economies of scale, deterring entry, network effects',
    ],
    [
      'Shareholder mechanisms and the takeover threat constrain managers',
      'Depends on the concentration of ownership',
      'Revenue maximisation may be a long-run profit strategy; depends on securing market power',
    ],
  ),

  Q022: A(
    [
      [
        'business-objectives',
        'One diagram with profit-maximising, revenue-maximising and sales-maximising outputs marked. The gap between the profit-maximising output and the others is the room that managers have when owners cannot monitor them.',
      ],
    ],
    'In a large public limited company the owners are the shareholders but control lies with the directors and managers they appoint. This separation creates a principal-agent problem: shareholders (principals) want profit maximised, but managers (agents) have their own objectives and better information about the business. The result can be a shift from profit maximisation towards revenue maximisation, growth, satisficing or managerial comfort. How far this happens depends on how well shareholders can monitor and motivate managers and on the competitive pressure the firm faces.',
    [
      [
        'Managers’ interests differ from shareholders’. Their salaries, status and job security are tied to the size and growth of the firm rather than to its profit, so they have an incentive to expand output and turnover beyond the profit-maximising level - Baumol’s revenue maximisation at MR = 0 or Marris’s growth maximisation - and to pursue acquisitions that build empires even where they destroy value. RBS is the standard British example: its takeover of ABN AMRO in 2007, pursued to make it the largest bank in the world, loaded it with assets it had barely examined and left it needing a government rescue within a year. Because shareholders cannot observe managers’ effort or the true state of the business, managers can also satisfice: earn a profit high enough to keep shareholders quiet and then pursue an easier life, higher expenses and lower risk. The firm drifts away from profit maximisation, and X-inefficiency - costs above the minimum - creeps in because nobody with the power to cut them has the incentive to do so.',
        'Shareholders have tools to close the gap. Share options and profit-linked bonuses give managers a direct stake in profit; annual general meetings, non-executive directors and audit committees monitor them; and a poorly run firm’s share price falls until a takeover bidder replaces the management. Where large institutional investors hold concentrated stakes, monitoring is close and the principal-agent problem is small. These tools are imperfect in their own right, though: the Persimmon bonus scheme, which paid its chief executive a sum reported at over £70 million largely because the government’s Help to Buy scheme had lifted housing demand, shows that tying pay to a target management does not actually control can reward circumstance rather than effort.',
      ],
      [
        'The extent of the divergence depends on competition. In a competitive market a firm that does not minimise costs and make normal profit will be undercut and eventually leave, so managerial slack is punished by the market even if shareholders fail to notice. In a monopoly or protected market there is no such discipline: supernormal profit can absorb the cost of managerial objectives indefinitely, which is why regulated utilities and dominant incumbents are where the separation of ownership from control matters most. The English water companies are the obvious case, since customers cannot switch supplier at all, and Ofwat has had to intervene directly over dividends paid out while investment in the network was deferred. Contestability - the threat of entry - works the same way as actual competition.',
        'Even in competitive markets the discipline works with a lag and only at the margin. Managers can pursue their own objectives for years before the consequences show, and product markets that appear competitive may still leave a firm with enough market power to carry slack. Competition limits the divergence; it does not remove it.',
      ],
      [
        'Ownership structure and the wider environment also shape objectives. A plc with dispersed shareholders behaves differently from one dominated by a founder, a family or a private-equity owner who monitors closely and demands cash returns. Pressure from customers, employees and regulators pushes large firms towards objectives such as corporate social responsibility and environmental targets that neither owners nor managers chose alone. Some divergence from pure profit maximisation is therefore not a failure of control but a response to stakeholders, and a plc that ignored them would damage its long-run profit anyway.',
        'It is hard to tell from the outside whether a firm is failing to maximise profit or maximising it over a longer horizon: sacrificing short-run profit for market share can be either managerial empire-building or a sound long-run strategy. Shareholders with short horizons may themselves push firms away from long-run profit maximisation, so the separation of ownership from control cuts both ways.',
      ],
    ],
    'The separation of ownership from control is likely to affect the objectives of a large plc to a significant extent: it gives managers the room and the incentive to pursue size, growth and their own comfort rather than maximum profit, and X-inefficiency and value-destroying acquisitions are the observable results. The effect is limited where shareholders monitor closely, where pay is linked to profit, where takeovers are a real threat and, above all, where the product market is competitive. The extent therefore depends on corporate governance and market structure: in a dispersed-ownership firm with market power the divergence can be large, in a closely held firm in a competitive market it is small.',
    [
      'Definition of the separation of ownership from control and the principal-agent problem',
      'Managerial objectives: revenue maximisation, growth maximisation, satisficing',
      'Diagram showing the different outputs and prices',
      'X-inefficiency and empire-building',
      'Corporate governance mechanisms: share options, monitoring, takeover threat',
      'Role of competition and contestability in disciplining managers',
    ],
    [
      'Depends on the concentration of ownership and quality of governance',
      'Competition limits but does not remove the divergence; lags',
      'Stakeholder objectives may be rational for long-run profit',
      'Difficulty distinguishing managerial slack from long-run strategy',
      'Judgement: significant effect, conditional on governance and market structure',
    ],
  ),

  Q023: A(
    [
      [
        'economies-of-scale',
        'LRAC falling steeply over a long range of output as fixed costs are spread, reaching minimum efficient scale at a high output, then flat or gently rising. Mark the MES and label the falling section as economies of scale.',
      ],
      [
        'natural-monopoly',
        'The extreme case: LRAC still falling at the level of total market demand, so one firm can supply the market at lower average cost than two. Use it if the fixed costs are large enough relative to the market.',
      ],
    ],
    'Economies of scale are reductions in long-run average cost as output increases. In a market with high fixed costs - such as rail, telecoms, aircraft manufacture or pharmaceuticals - they are especially strong, because the fixed cost is spread over more units as output rises. The LRAC curve for such a firm falls over a long range of output, the minimum efficient scale is large relative to the market, and in the extreme the market is a natural monopoly.',
    [
      [
        'When fixed costs are high, average fixed cost falls rapidly as output rises: a network that costs £1 billion to build costs £1,000 per user with a million users and £100 with ten million. Technical economies from large-scale plant, purchasing economies from bulk buying, financial economies from cheaper borrowing and managerial economies from specialist staff all reinforce the effect. The LRAC curve therefore slopes steeply downwards over a long range and the minimum efficient scale - the output at which LRAC first reaches its lowest point - is very high, perhaps a large share of total market demand. Firms that reach MES have a large cost advantage over smaller rivals, which acts as a barrier to entry and leads to concentrated markets.',
        'Economies of scale do not continue for ever. Beyond some output, managerial diseconomies - communication problems, slow decisions, low morale in a very large organisation - raise average cost and the LRAC curve turns upwards. The position of MES relative to market size determines the outcome: if MES is small relative to demand, many firms can operate efficiently despite high fixed costs.',
      ],
      [
        'In the extreme case LRAC is still falling at the output that satisfies the whole market, which defines a natural monopoly. Water pipes, electricity grids and rail track have this property: duplicating the network would double fixed costs without adding output, so a single supplier has lower average cost than two. The firm’s LRAC lies above marginal cost throughout, which creates the regulatory problem that pricing at marginal cost - the allocatively efficient price - would make a loss. Such industries are usually regulated or state-owned rather than left to compete.',
        'Technology can change the shape of the curve. Mobile networks made parts of telecoms contestable where fixed-line networks were natural monopolies, and cloud computing lets small firms rent capacity rather than build it, lowering the fixed cost of entry. External economies of scale - a skilled local labour pool, specialist suppliers - can lower the whole LRAC curve for every firm in an industry regardless of size.',
      ],
    ],
    null,
    [
      'Definition of economies of scale and long-run average cost',
      'Spreading fixed costs; technical, purchasing, financial and managerial economies',
      'Diagram showing LRAC falling over a long range and the minimum efficient scale',
      'MES relative to market size and its implications for concentration and entry',
      'Natural monopoly where LRAC falls throughout the range of market demand',
    ],
    [
      'Diseconomies of scale eventually raise LRAC',
      'Position of MES relative to demand determines the number of viable firms',
      'Technology can lower fixed costs and change the curve',
      'External economies affect the curve independently of the firm’s own output',
    ],
  ),

  Q024: A(
    [
      [
        'perfect-competition',
        'The industry and firm diagrams in long-run equilibrium: the firm produces where MC = MR = AR = AC, earning normal profit only. Any firm not at this point makes a loss and leaves, which is why profit maximisation is forced rather than chosen.',
      ],
      [
        'cost-curves',
        'Short-run cost curves with MC cutting AC at its minimum. Use them to show what the firm would need to know - its marginal cost at every output - to profit-maximise deliberately.',
      ],
    ],
    'Profit maximisation means producing the output at which marginal cost equals marginal revenue. A highly competitive market has many firms, similar products, easy entry and exit and good information, approximating perfect competition. In such a market profit maximisation is in one sense compulsory - a firm that fails to minimise cost and price at the market level will not survive - but in another sense unrealistic, because firms lack the information to find MC = MR and often pursue other objectives.',
    [
      [
        'In perfect competition each firm is a price taker facing a horizontal demand curve at the market price, so MR equals price. The firm maximises profit by producing where MC equals that price. In the long run, entry and exit drive the price to the minimum of average cost and every firm earns only normal profit. A firm that produced at any other output, or carried costs above the minimum, would make a loss and leave the industry. Profit maximisation is therefore not just realistic but enforced: only profit-maximising firms survive, whatever their owners intend. Competition does the maximising for them, and the same logic applies to any market where margins are thin and entry is easy - takeaways, taxis, hairdressers. UK arable farming is the closest real approximation: a wheat farmer sells an undifferentiated commodity at a world price they cannot influence, so the only decision left is how much to produce and how far costs can be cut, which is profit maximisation whether the farmer describes it that way or not.',
        'This enforcement works only in the long run and at the margin. In the short run firms can make losses or supernormal profits and survive, so there is room to deviate. And the theory says surviving firms behave as if they maximise profit, not that they calculate MC and MR; the objective is an outcome of selection rather than a decision anyone makes.',
      ],
      [
        'As a conscious objective, profit maximisation demands information most firms do not have. Finding MC = MR requires knowing the marginal cost of every unit and the shape of the demand curve, which small firms in competitive markets cannot estimate. In practice they use cost-plus pricing - add a mark-up to average cost - and adjust by trial and error. Most real competitive markets are also monopolistically competitive rather than perfect: products are differentiated, firms have some control over price, and they compete on quality, service and advertising as much as on cost. Such firms may satisfice, aim for a target market share or simply try to survive, and the market tolerates this because differentiated products give a little slack.',
        'Cost-plus pricing with a mark-up set by experience approximates profit maximisation over time, since firms whose mark-ups are wrong lose business or profit and adjust. The lack of precise information means firms do not maximise exactly, not that they do not try; the objective is realistic as a direction even if the calculation is not.',
      ],
      [
        'Other objectives are common and often rational in competitive markets. New entrants price low to build market share and reputation, accepting losses that a profit maximiser would not - Uber and Deliveroo both ran at a loss for years while subsidising fares and delivery fees to establish a user base - owner-managers of small firms value independence and lifestyle and may deliberately stay small; firms facing a downturn aim for survival, covering variable costs rather than maximising anything. The principal-agent problem is weaker in small owner-run firms, so managerial objectives matter less than in large plcs, but the pressures of the market itself push firms towards short-run goals that are not profit maximisation.',
        'Most of these objectives are consistent with long-run profit maximisation: market-share building, survival and reputation are investments in future profit. The apparent departures from profit maximisation are often differences of time horizon rather than of objective, and a firm that pursued them at the expense of long-run profit would not last in a highly competitive market.',
      ],
    ],
    'Profit maximisation is realistic in a highly competitive market to the extent that competition enforces it: in the long run only firms that minimise cost and price at the market level survive, whatever objectives their owners hold. It is unrealistic as a deliberate calculation, because firms lack the information to equate MC and MR, and in the short run firms pursue survival, market share and the owner’s own goals. The most accurate statement is that firms in competitive markets behave as if they maximise profit over the long run, using rules of thumb rather than marginal analysis, and that the market punishes those that stray too far.',
    [
      'Definition of profit maximisation (MC = MR) and of a highly competitive market',
      'Perfect competition: price taking, MR = AR, long-run normal profit, with a diagram',
      'Competition enforcing profit maximisation through entry and exit',
      'Information problems: cost-plus pricing, trial and error',
      'Monopolistic competition and the room for other objectives',
      'Alternative objectives: survival, market share, satisficing, owner lifestyle',
    ],
    [
      'Short run versus long run: deviation possible in the short run',
      '“As if” maximisation through selection rather than calculation',
      'Cost-plus pricing approximates profit maximisation over time',
      'Alternative objectives often serve long-run profit',
      'Judgement: realistic as a long-run outcome, unrealistic as a day-to-day calculation',
    ],
  ),

  Q025: A(
    [
      [
        'monopoly',
        'The monopolist’s price above marginal cost and output below the competitive level, with the deadweight-loss triangle. This is the direct cost to consumers of monopoly compared with a more competitive structure.',
      ],
      [
        'monopolistic-competition',
        'Long-run equilibrium in monopolistic competition: normal profit only, but the firm produces on the falling part of AC with excess capacity, and price still exceeds marginal cost. Consumers get choice and lower prices than monopoly, at the cost of some productive inefficiency.',
      ],
    ],
    'A monopoly is a single seller with high barriers to entry, able to set price above marginal cost and earn supernormal profit in the long run. Monopolistic competition has many firms selling differentiated products with low barriers to entry, so supernormal profits are competed away and firms earn normal profit in the long run. For consumers the comparison is between the higher prices and restricted choice of monopoly and the choice, lower prices but smaller-scale inefficiency of monopolistic competition, with dynamic efficiency and economies of scale complicating the picture.',
    [
      [
        'A profit-maximising monopolist produces where MC = MR and charges the price on the demand curve above that output, so price exceeds marginal cost. Output is lower and price higher than in a competitive market, consumer surplus is transferred to the firm as profit and a deadweight loss arises from units that consumers would value above their cost but are not produced. With no rivals the monopolist has less incentive to control costs (X-inefficiency), to maintain quality or to innovate, and consumers have no alternative if service is poor. In monopolistic competition, by contrast, entry drives supernormal profit away, price is lower, and consumers can switch between many differentiated products, so firms must compete on quality and service as well as price.',
        'The monopolist may have lower costs. If there are significant economies of scale the single large firm’s average cost can be below that of many small firms, and if it passes even part of the saving on, its price may be lower than the monopolistically competitive price. In natural monopolies such as water, splitting the market into many firms would raise costs for everyone; the relevant comparison is then regulated monopoly against competition, not monopoly against competition.',
      ],
      [
        'Monopolistic competition has inefficiencies of its own. In long-run equilibrium each firm produces on the downward-sloping part of its average cost curve, with excess capacity and a price above marginal cost, so it is neither productively nor allocatively efficient. Consumers pay for the differentiation they enjoy: advertising, packaging and brand proliferation are costs that a monopolist need not incur, and the many small firms cannot exploit economies of scale. Because firms earn only normal profit, they have little retained profit to invest in research, so product improvement may be slower than in a monopoly that can fund it.',
        'Whether this matters depends on how much consumers value variety. In restaurants, clothing or hairdressing, choice is a large part of the benefit and the excess capacity is a small price for it. The dynamic-efficiency argument for monopoly rests on the profits actually being invested rather than paid out or absorbed in slack, which a monopoly without competitive pressure has no compulsion to do.',
      ],
      [
        'The comparison also depends on regulation and contestability. A monopoly that is regulated - price caps, service standards, licence conditions - can deliver the cost advantages of scale without the full price mark-up, as in the UK’s utility sectors. A monopoly in a contestable market behaves more like a competitive firm because it must deter entry. Conversely, monopolistically competitive markets can have local pockets of market power, such as the only pharmacy in a village. The market structure label matters less to consumers than the actual behaviour it produces.',
        'Time horizon matters. In the short run consumers are almost always better off with more competition; over the long run the monopoly that uses its profits to innovate may deliver products the competitive market could not. The pharmaceutical industry, with patent-based temporary monopolies funding research, is the standard example of this trade-off.',
      ],
    ],
    'On balance consumers are likely to be worse off under monopoly than under monopolistic competition: they face higher prices, less choice and a firm with weak incentives to be efficient or responsive. The loss is smaller, and can reverse, where the monopolist has substantial economies of scale, where it is regulated or contestable, and where its profits fund innovation that many small firms could not afford. The impact therefore depends on cost conditions and on how the monopoly is constrained, and in most ordinary consumer markets the presumption in favour of competition holds.',
    [
      'Definitions of monopoly and monopolistic competition; barriers to entry and profit in the long run',
      'Monopoly: price above MC, lower output, deadweight loss, with a diagram',
      'X-inefficiency, quality and choice under monopoly',
      'Monopolistic competition: normal profit, choice, excess capacity, with a diagram',
      'Economies of scale and natural monopoly',
      'Dynamic efficiency and the use of supernormal profit',
    ],
    [
      'Economies of scale may give the monopolist lower costs and prices',
      'Monopolistic competition has its own inefficiencies: excess capacity, advertising costs',
      'Regulation and contestability change monopoly behaviour',
      'Short-run versus long-run effects; innovation',
      'Judgement: consumers usually worse off under monopoly, with exceptions',
    ],
  ),

  Q026: A(
    [
      [
        'price-discrimination',
        'Third-degree price discrimination: two sub-markets with different elasticities, the same marginal cost, and a higher price where demand is inelastic, lower where it is elastic. Show consumer surplus lost in the inelastic market and gained in the elastic one, and the firm’s higher total profit.',
      ],
    ],
    'Price discrimination is charging different prices to different consumers for the same product where the difference is not due to cost. It requires market power, the ability to separate consumers into groups with different price elasticities and the prevention of resale. Third-degree price discrimination - different prices for identifiable groups - is the common form. It transfers surplus from consumers to the firm, which is why it is often called harmful, but it can also raise total output and bring some consumers into the market who would otherwise be excluded, so the effect on consumer welfare is not uniformly negative.',
    [
      [
        'A firm that can separate its market sets MR equal to MC in each sub-market. In the sub-market with inelastic demand it charges a high price; in the elastic sub-market a lower one. Consumers in the inelastic group - business travellers, peak-time commuters, patients needing a patented drug - pay more than they would under a single price. UK rail is the everyday case: a commuter who has to reach London before nine has almost no alternative to the peak fare, and pays a multiple of what the same journey costs an hour later. Their consumer surplus falls and is transferred to the firm as higher profit. Where the firm can identify individual willingness to pay, as online platforms increasingly can, the discrimination approaches first degree and extracts almost all consumer surplus. In these cases consumers as a group lose and the firm gains, and the practice is a symptom of market power being exploited.',
        'The loss falls on the inelastic group only, and whether it counts as harm depends on who they are. Charging business travellers more than students transfers surplus from the better-off to the firm, and the firm may use it to cross-subsidise lower prices elsewhere. The firm can only discriminate if it has market power in the first place; the harm is from the market power, and a single monopoly price would also have reduced consumer surplus.',
      ],
      [
        'Some consumers gain. The lower price in the elastic sub-market brings in consumers who would not have bought at the single price - students at the cinema, pensioners on off-peak trains, patients in low-income countries paying less for medicines. The tiered pricing of HIV antiretroviral drugs is the strongest case: the same treatments have been sold across sub-Saharan Africa at a small fraction of their US and European prices, and at those prices millions of patients are treated who would have bought nothing at a single world price. Their consumer surplus rises from zero to something positive. If the discrimination raises total output above what a single price would produce, the deadweight loss of monopoly shrinks and allocative efficiency improves. Off-peak pricing also smooths demand, so capacity is used more fully and average cost falls, which can lower prices for everyone over time.',
        'Total output does not always rise; with linear demand curves in both markets, third-degree discrimination leaves total output unchanged and simply redistributes it, so the efficiency gain is not guaranteed. Whether the elastic-market consumers gain more than the inelastic-market consumers lose is an empirical question that differs by market.',
      ],
      [
        'The extra profit has uses that can benefit consumers. In industries with high fixed costs, discrimination can make a service viable that a single price could not cover: a rural bus route or a regional rail service may exist only because peak fares subsidise off-peak ones. Pharmaceutical firms recover research costs from high-income markets and sell at marginal cost elsewhere, which increases access. Where the profit funds investment and innovation, consumers gain in the long run from better products. The welfare effect therefore depends on what the firm does with the surplus it captures.',
        'Nothing compels the firm to use the profit in these ways; it may simply be distributed to shareholders. Discrimination can also be used predatorily, pricing low in a contested segment to drive out a rival and then raising prices, in which case consumers lose in the long run. Regulators treat some forms as unfair regardless of the efficiency arguments: the CMA has examined personalised pricing built from browsing and purchase data, and has acted against the related practice of charging loyal customers more than new ones in insurance and broadband, where the inelastic group is simply those who do not shop around.',
      ],
    ],
    'Price discrimination is not always harmful to consumer welfare. It always transfers surplus from the inelastic group of consumers to the firm and is a symptom of market power, so consumers as a whole may lose. But it benefits consumers in the elastic group, can raise total output and reduce deadweight loss, and can make high-fixed-cost services viable and fund innovation. The net effect depends on whether output rises, on which consumers are in which group and on how the firm uses the profit. Harmful in the hands of a monopolist extracting surplus for its own sake; beneficial where it widens access - the word “always” is wrong either way.',
    [
      'Definition of price discrimination and its conditions: market power, separable markets, no resale',
      'Third-degree price discrimination diagram: different prices by elasticity, MC = MR in each market',
      'Transfer of consumer surplus to the firm in the inelastic market',
      'Gains to consumers in the elastic market; increased access',
      'Effect on total output and allocative efficiency',
      'Use of profits: cross-subsidy, viability of services, innovation',
    ],
    [
      'Distributional effects: which consumers lose and which gain',
      'Output may not rise; efficiency gain not guaranteed',
      'Profit may not be used to benefit consumers; predatory uses',
      'Depends on the degree of discrimination and on regulation',
      'Judgement: not always harmful; depends on output effects and distribution',
    ],
  ),

  Q027: A(
    [
      [
        'monopsony',
        'A monopsonist facing an upward-sloping labour supply (ACL) with MCL above it, employing where MRP = MCL and paying the wage on the supply curve at that employment. Then add a minimum wage above the monopsony wage but below the competitive wage: MCL becomes horizontal at the minimum wage up to the supply curve, and employment rises to where MRP equals the minimum wage.',
      ],
    ],
    'Wage determination in a competitive labour market is simply the intersection of labour demand and labour supply, but demand for labour is a DERIVED demand: a firm hires workers not for their own sake but for the output they produce, so the demand curve for labour is the marginal revenue product (MRP) - the extra revenue each additional worker generates. A monopsony is a labour market with a single or dominant employer, such as the NHS for nurses or a large employer in a small town. The firm faces the whole upward-sloping labour supply curve, so hiring an extra worker means raising the wage for everyone, and the marginal cost of labour lies above the supply curve. The monopsonist employs where MRP equals MCL and pays the lower wage on the supply curve. A minimum wage set correctly can raise both the wage and employment in this market, which reverses the usual prediction.',
    [
      [
        'Without a minimum wage, the monopsonist hires up to the point where the marginal revenue product of labour equals the marginal cost of labour, at employment Lm, and pays the wage on the supply curve at that level, Wm, which is below both MRP and the competitive wage. Employment and wages are both lower than a competitive market would produce, and the gap between MRP and the wage is the employer’s monopsony profit. When a minimum wage is set between Wm and the competitive wage, the firm can hire any number of workers up to the supply curve at that wage without raising it, so MCL becomes horizontal at the minimum wage over that range. The firm now employs where MRP equals the minimum wage, which is a higher level of employment than Lm. The minimum wage raises pay and employment at the same time, at the expense of the employer’s surplus.',
        'The result depends on the level at which the minimum wage is set. If it is set above the competitive wage, quantity supplied exceeds quantity demanded and unemployment results, just as in a competitive market. The government does not know the competitive wage, so the effect could go either way, and in practice the UK’s National Living Wage is set with reference to median earnings rather than to any measure of monopsony power.',
      ],
      [
        'The size of the employment gain depends on the elasticity of labour supply and on how much monopsony power the employer actually has. Where the supply curve is steep - workers have few alternatives - the gap between MCL and the supply curve is large and a minimum wage can raise employment substantially. Where the employer competes with others for labour, the gap is small and the minimum wage behaves as it would in a competitive market. Evidence on the UK minimum wage, introduced in 1999, has found little or no employment loss in low-wage sectors, which is consistent with employers in care, hospitality and retail having some monopsony power.',
        'The employer may respond in other ways: cutting hours, reducing training or non-wage benefits, raising prices or substituting capital for labour, so the employment effect on the diagram can be offset in ways it does not show. Enforcement also matters; a minimum wage that is not enforced changes nothing.',
      ],
    ],
    null,
    [
      'Labour as a derived demand: the demand curve for labour is its marginal revenue product (MRP)',
      'Definition of monopsony and of the marginal cost of labour above the supply curve',
      'Monopsony equilibrium: employment where MRP = MCL, wage on the supply curve',
      'Diagram showing the minimum wage making MCL horizontal and employment rising',
      'Explanation of why employment can rise, unlike in a competitive market',
      'Application to UK low-wage sectors and the National Living Wage',
    ],
    [
      'Depends on the level of the minimum wage relative to the competitive wage',
      'Depends on the elasticity of labour supply and the degree of monopsony power',
      'Employer responses: hours, training, prices, capital substitution',
      'Enforcement and the government’s information problem',
    ],
  ),

  Q028: A(
    [['labour-market', 'A competitive labour market with a wage floor held above the market-clearing wage. Show quantity supplied of labour exceeding quantity demanded at that wage: the horizontal gap is unemployment caused by real wage inflexibility rather than by any mismatch of skills or location, which is what makes it a separate cause from immobility.']],
    'Geographical immobility of labour occurs where a worker cannot or will not move to where a job is available; occupational immobility occurs where a worker’s existing skills do not match what an available vacancy requires. Both are forms of market failure that leave unemployment and unfilled vacancies coexisting side by side - a mismatch between where and what the jobs are, not a simple shortage of jobs overall.',
    [
      [
        'Geographical immobility arises because moving to a job in another region is costly and disruptive: house prices and rents in high-vacancy regions such as London and the South East are often far above those in high-unemployment regions, family and social ties make relocating personally costly, and imperfect information about vacancies elsewhere means a worker may not even know a suitable job exists in another area. The result is persistent REGIONAL unemployment even in periods when aggregate vacancies nationally are plentiful, since the workers and the jobs are simply not in the same place.',
        'The scale of this effect depends on how large the regional cost-of-living and house-price gap actually is, and on how portable the job itself is: the growth of remote and hybrid working since the pandemic has let some workers take a job in a high-wage region without physically relocating at all, which weakens this cause of unemployment for roles that can be done remotely, though it does nothing for the many jobs - retail, care work, construction, manufacturing - that still require a physical presence.',
      ],
      [
        'Occupational immobility arises because skills built up in one industry frequently do not transfer directly to another: a worker made redundant from a declining industry, such as coal mining, steel or traditional retail, may lack the specific technical or digital skills that growing industries such as healthcare, logistics or green energy actually require, and retraining takes time, costs money, and is not always available at the moment a worker is made redundant. This structural mismatch between the skills the unemployed have and the skills vacancies need is a form of market failure, since neither the worker nor the employer necessarily has the incentive or the resources to fund the retraining on their own.',
        'How large this effect is depends on how transferable a worker’s existing skills genuinely are and on how accessible and affordable retraining actually is: government-funded retraining schemes, apprenticeships and further-education bursaries can narrow the gap, but if such schemes are underfunded, slow to enrol people, or mismatched to the vacancies actually available locally, the skills mismatch persists regardless of how many training places exist on paper.',
      ],
      [
        'Immobility is not the only, and is not always the largest, cause of unemployment. In a recession, a fall in aggregate demand can create demand-deficient (cyclical) unemployment across the whole economy simultaneously, regardless of how mobile labour is - a worker with perfectly transferable skills in a fully mobile national labour market can still be made redundant if there simply is not enough demand anywhere in the economy to employ them. Frictional unemployment (workers between jobs, searching for a suitable match), seasonal unemployment (predictable annual troughs in agriculture, tourism or construction) and real wage inflexibility (a wage floor held above the market-clearing wage) are further causes entirely unrelated to geographical or occupational mismatch.',
        'Whether immobility is the MOST significant cause therefore depends heavily on the state of the economic cycle: in a deep recession, cyclical demand-deficient unemployment typically dwarfs the number of jobs lost to skills or location mismatch alone. In an economy closer to full employment, where cyclical unemployment has already been addressed, the residual unemployment that remains - the gap between recorded vacancies and recorded unemployment in different regions and sectors - is disproportionately explained by exactly this geographical and occupational immobility, since it is the component demand management alone cannot fix.',
      ],
    ],
    'Geographical and occupational immobility is a genuine and persistent cause of UK unemployment, and it specifically explains why unemployment and unfilled vacancies can coexist even when the economy is not obviously in a downturn - a mismatch rather than an overall shortage of jobs. It is not always the MOST significant cause: in a period of weak aggregate demand, cyclical unemployment from a negative output gap typically outweighs it by far. The extent to which immobility dominates therefore depends on where the economy sits in the trade cycle - it is the structural, harder-to-fix residual that persists once demand-side unemployment has already been addressed, rather than the largest single cause at every point in the cycle.',
    [
      'Definition of geographical and occupational immobility of labour',
      'Geographical immobility: cost-of-living/house-price gaps between regions, family ties, imperfect information about vacancies',
      'Occupational immobility: skills built in a declining industry not matching what growing industries require',
      'Both cause structural unemployment: unemployment and unfilled vacancies coexisting, a mismatch rather than a shortage',
      'Contrast with demand-deficient (cyclical), frictional and real-wage unemployment as causes unrelated to immobility',
      'Diagram: a wage floor above the market-clearing wage, with the excess supply of labour as real-wage unemployment - a cause separate from immobility',
    ],
    [
      'Remote/hybrid working can reduce geographical immobility for roles that do not require a physical presence',
      'The effectiveness of retraining schemes determines how much occupational immobility narrows in practice',
      'Depends on the state of the economic cycle: cyclical unemployment usually dominates in a recession',
      'Judgement: immobility is the persistent structural residual, most significant once demand-side unemployment is addressed, not necessarily the largest cause at every point in the cycle',
    ],
  ),

  Q029: A(
    [
      [
        'monopoly',
        'A dominant firm restricting output and raising price above marginal cost. Competition policy aims to prevent the firm from using its position this way - the diagram shows what the abuse looks like and where a price cap or fine would bite.',
      ],
    ],
    'Competition policy is the set of laws and institutions that promote competition and prevent firms with market power from exploiting it. In the UK the Competition and Markets Authority enforces the Competition Act 1998, which prohibits the abuse of a dominant position - typically defined as a market share above 40% used to harm competitors or consumers. One way it prevents abuse is through investigation and fines; another is through direct price regulation of natural monopolies.',
    [
      [
        'The CMA can investigate a dominant firm suspected of abuse - charging excessive prices, predatory pricing to drive out rivals, refusing to supply, or tying products together - and fine it up to 10% of its worldwide turnover. The fine removes the gain from the abuse and, more importantly, deters other dominant firms: a firm that knows exploitation can cost a tenth of its global revenue has an incentive to price and behave as if it faced competition. The CMA can also order the firm to change its behaviour, for example to end exclusive contracts that lock out entrants, and in extreme cases require it to sell parts of its business. Pfizer and Flynn Pharma were fined for raising the price of an anti-epilepsy drug by over 2,000% after de-branding it.',
        'Investigations take years, during which the abuse continues, and fines may be small relative to the profits earned - a firm can treat them as a cost of doing business. Defining the relevant market and proving dominance is difficult, especially in digital markets, and firms appeal fines through the courts, which delays and sometimes overturns them.',
      ],
      [
        'Where dominance is unavoidable because the industry is a natural monopoly, competition policy prevents abuse through regulation rather than fines. Regulators such as Ofgem, Ofwat and Ofcom set price caps - historically of the RPI-X form - which limit the price the firm can charge and force it to raise efficiency to increase profit, since the cap does not rise with its costs. The regulator can also impose service standards and require access to the network for competitors, which introduces competition in the parts of the industry that can support it, as in energy supply.',
        'Price caps require the regulator to know the firm’s costs, and firms have an incentive to overstate them; caps set too loose allow excess profit, too tight discourage investment. Regulatory capture is a persistent risk when the regulator relies on the industry for information.',
      ],
    ],
    null,
    [
      'Definition of competition policy and of a dominant position',
      'Role of the CMA under the Competition Act 1998',
      'Investigation and fines up to 10% of global turnover; deterrent effect',
      'Behavioural and structural remedies',
      'Price regulation of natural monopolies (RPI-X caps) as an alternative route',
      'Diagram: the monopoly outcome (Qm, Pm) that competition policy targets, and P(AC) regulation of a natural monopoly',
    ],
    [
      'Length of investigations; fines may be small relative to profits',
      'Difficulty of defining the market and proving dominance',
      'Information problems and regulatory capture in price regulation',
    ],
  ),

  Q030: A(
    [
      [
        'business-objectives',
        'Profit-maximising output at MC = MR against a state-owned firm producing at a larger output where AR = AC or beyond. Use it to show how the profit motive changes output and price and why a private owner has more incentive to cut costs.',
      ],
      [
        'natural-monopoly',
        'LRAC falling across the whole market. If the privatised industry is a natural monopoly, private ownership alone cannot create competition; the diagram makes the case for regulation.',
      ],
    ],
    'Privatisation is the transfer of ownership of state-owned assets to the private sector, usually by selling shares. It is intended to raise efficiency by introducing the profit motive, exposing the firm to capital-market discipline and, where possible, to competition. Productive efficiency means producing at minimum average cost; allocative efficiency means price equal to marginal cost; dynamic efficiency means investment and innovation over time. Whether privatisation improves these depends on whether the industry can be made competitive, on how it is regulated and on the objectives private owners actually pursue.',
    [
      [
        'State-owned industries often suffer from X-inefficiency: without a profit motive or the threat of bankruptcy, managers have weak incentives to control costs, over-staffing persists and political objectives - keeping loss-making plants open, holding down prices before elections - override commercial ones. Privatisation replaces this with owners who lose money if costs are not minimised, and with managers whose pay depends on profit. Where privatisation is accompanied by liberalisation, so that new firms can enter, competition adds pressure on price and quality and moves the industry towards allocative efficiency. British Telecom and British Airways are the standard successes: both cut costs, improved service and became internationally competitive after privatisation, in markets that were opened to entry.',
        'The improvement comes from competition and the profit motive, not from ownership as such. A privatised natural monopoly - water, the rail network - faces no competition, so the profit motive leads to the monopoly outcome of higher prices and restricted output, and efficiency can fall for consumers even as it rises for shareholders. Such industries need regulation, and the quality of that regulation determines the result more than the change in ownership.',
      ],
      [
        'Private firms can raise capital in financial markets rather than competing with schools and hospitals for Treasury funding, which should improve dynamic efficiency through higher investment. Shareholder scrutiny and the threat of takeover discipline managers over the long run. Regulators can set price caps of the RPI-X form that reward efficiency gains and require investment programmes, combining private incentives with public objectives. Telecoms investment in the UK rose sharply after privatisation, and the mobile and broadband markets developed under private ownership.',
        'Private owners may prefer short-run returns. Water companies in England took on large debts, paid substantial dividends and under-invested in infrastructure, with sewage discharges and Thames Water’s financial distress the visible results; several rail franchises failed and were renationalised, taken back into public operation as the government’s only remaining option once a private operator would not or could not continue. Where the regulator is captured or lacks information, the private firm’s dynamic efficiency is not assured, and the state may end up carrying the risk anyway.',
      ],
      [
        'The comparison depends on the industry’s structure. Where the market can be made contestable, privatisation with deregulation - or, short of full sale, competitive tendering, where private firms bid to run a service the state still funds - is likely to raise all three kinds of efficiency. Where the industry is a natural monopoly, the gains are limited to whatever the regulator can extract, and the losses - monopoly pricing, reduced universal service, fragmentation of a network that worked better as a whole - can outweigh them; the break-up of British Rail into track, operators and rolling-stock companies is widely judged to have raised costs. Distribution also matters: privatisation transfers assets built with taxpayers’ money to shareholders, and the sale price and subsequent profits determine whether the public gained.',
        'Alternatives such as commercialising a state-owned firm, contracting out services or introducing competition without selling the assets can capture many of the same efficiency gains without the monopoly risks. The question is not only whether privatisation improves efficiency but whether it does so more than these alternatives, and for natural monopolies the answer is often no.',
      ],
    ],
    'Privatisation is likely to improve the efficiency of a formerly state-owned industry to a significant extent where the industry can be exposed to competition: the profit motive cuts X-inefficiency, entry disciplines price and quality, and access to capital raises investment, as telecoms and airlines showed. Where the industry is a natural monopoly the gains depend almost entirely on regulation, private owners may prioritise dividends over investment, and fragmentation can raise costs, as water and rail suggest. Ownership matters less than competition and regulation; privatisation improves efficiency when it brings the first and is backed by the second, and can reduce it otherwise.',
    [
      'Definition of privatisation and of productive, allocative and dynamic efficiency',
      'X-inefficiency in state-owned firms; the profit motive and competition, with a diagram',
      'Capital-market discipline and access to finance; investment',
      'Natural monopoly and the need for regulation, with a diagram',
      'Application: BT and BA versus water and rail',
      'Alternatives: deregulation without sale, contracting out',
    ],
    [
      'Gains come from competition rather than ownership; natural monopolies need regulation',
      'Short-termism, dividends over investment, debt loading',
      'Quality of regulation and regulatory capture',
      'Fragmentation costs and distributional effects',
      'Judgement: improves efficiency where competition is possible and regulation is strong',
    ],
  ),
}
