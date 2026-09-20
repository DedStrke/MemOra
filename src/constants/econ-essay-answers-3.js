/*
  Developed answers for the Theme 1 and Theme 3 half of econ-essay-bank-2.js
  (Q065-Q076, Q085-Q096 - Economic Systems through Contestability). Same
  shape and house style as econ-essay-answers-p1.js: Section B questions
  (8, 10 or 12 marks) get one or two developed chains and no conclusion;
  Section C essays (25 marks) get three chains and a justified judgement.

  Diagrams are attached only where the real exam actually expects one for
  that topic (Perfect Competition, Oligopoly, Monopsony, Externalities,
  Supply and Elasticity of Supply, Consumer and Producer Surplus, Efficiency,
  Contestability) - Economic Systems, Rational Decision Making, Government
  Failure and Demergers are not diagram topics in the real papers either, so
  none is forced in here. Placement lives in econ-essay-placement-2.js.
*/

const A = (diagrams, intro, rows, conclusion, kaa, evaluation) => ({
  diagrams,
  intro,
  rows,
  conclusion,
  markScheme: { kaa, evaluation },
})

export const ECON_ESSAY_ANSWERS_3 = {
  /* ------------------------------------------------- Economic Systems */
  Q065: A(
    [],
    'An economic system is the way a society answers the three fundamental questions every economy faces: what to produce, how to produce it, and for whom. A market economy answers them through the price mechanism and private ownership; a planned economy answers them through a central authority that owns resources and issues commands.',
    [
      [
        'In a market economy, resources are allocated by the price mechanism: consumers signal what they want through what they are willing to pay, producers respond to the profit motive, and resources flow towards whichever goods generate the highest returns. No single body decides what gets produced - millions of separate decisions by firms and households, each acting on the price in front of them, coordinate the whole economy without anyone needing to know the full picture.',
        'This works only where prices genuinely reflect the full social cost and benefit of a good. It also answers the "for whom" question by ability to pay rather than need, so a market economy can leave some wants entirely unmet even while resources are, in a narrow sense, being used efficiently elsewhere.',
      ],
      [
        'In a planned economy, a central authority owns the means of production and decides output directly: what factories produce, in what quantities, and how it is distributed, based on the planners’ own assessment of social priorities rather than on prices or profit. This lets planners direct resources deliberately towards goals a market would under-provide, such as heavy industry, defence, or a baseline of housing and food for everyone regardless of income.',
        'The planner has to solve, by calculation, a problem the price mechanism solves automatically: millions of interdependent decisions about what to make and how much. Without prices to signal relative scarcity, this consistently produced the shortages of wanted goods and surpluses of unwanted ones documented in every historical command economy, from the USSR to Maoist China.',
      ],
    ],
    null,
    [
      'Definition of an economic system and the three fundamental questions',
      'Market economy: price mechanism, private ownership, profit motive',
      'Resources in a market economy flow to the highest willingness to pay',
      'Planned economy: state ownership, central planning, direct commands',
      'Planners allocate by assessed social priority rather than by price',
    ],
    [
      'Market allocation only reflects true social cost/benefit where there is no market failure',
      'Market answers "for whom" by ability to pay, not by need',
      'Planning can deliberately provide for priorities a market under-provides',
      'Planning loses the price mechanism’s information/coordination role - the calculation problem',
      'Historical evidence of chronic shortages and surpluses under central planning',
    ],
  ),

  Q066: A(
    [],
    'Efficient allocation means resources are put to the uses society values most, at the lowest cost. A pure market economy relies entirely on the price mechanism to achieve this; a pure planned economy relies entirely on central command; a mixed economy uses the price mechanism as the default and reserves government intervention for cases where the market alone would misallocate.',
    [
      [
        'The case for the market rests on Hayek’s knowledge problem: the information needed to allocate resources efficiently - what millions of consumers want, how much they value it, what it costs to produce - is dispersed across the whole economy and changes constantly. The price mechanism aggregates all of that into a single number nobody has to calculate directly, and firms and households respond to it without any central authority ever needing the full picture. In a competitive market this drives output to the allocatively efficient point where price equals marginal cost.',
        'That result depends entirely on the price reflecting the true social cost and benefit. Wherever it does not - externalities, public goods, information gaps, market power - a purely free market misallocates resources systematically and permanently, precisely in the areas (the environment, healthcare, defence, basic research) where market failure is most common and most costly.',
      ],
      [
        'The case for planning is that a planner can simply command the outcome a market would never spontaneously reach: providing a public good nobody would voluntarily pay for, forcing a polluting industry to cut output regardless of its private profitability, or directing investment towards a strategic priority the market judges unprofitable in the short run.',
        'A purely planned economy loses the price mechanism altogether, not just in the sectors where the market would have failed. The planner then has no efficient way to allocate resources between millions of competing, ordinary uses - which is why command economies produced shortages and surpluses even in everyday consumer goods markets that had no natural market failure to correct in the first place.',
      ],
      [
        'A mixed economy tries to keep the price mechanism as the default allocator across the vast majority of markets, where it does the informational work no planner could replicate, while using government to intervene only where a specific, identifiable failure exists: a Pigouvian tax on a negative externality, direct provision of a genuine public good, competition policy against an abuse of market power.',
        'How efficient this actually is depends entirely on the discipline of the intervention. A narrowly targeted, well-evidenced tax or subsidy captures the best of both systems. But if intervention is politically motivated, poorly measured, or allowed to expand beyond genuine market failure, government failure can reproduce the planning problem in miniature across whichever sectors it has captured, at which point the mixed economy loses the very efficiency advantage it was meant to combine.',
      ],
    ],
    'No economy that has sustained prosperity over time has ever been purely one system or the other, because neither pure form’s efficiency claim survives contact with reality: the market’s claim fails wherever there is a specific, identifiable market failure, and the plan’s claim fails almost everywhere else. A mixed economy is better able to achieve an efficient allocation of resources than either pure form, but only to the extent that intervention is confined narrowly to genuine market failure rather than allowed to expand on political grounds - a mixed economy is, in the end, only as efficient as its government is disciplined about where it draws that line.',
    [
      'Market: price mechanism, Hayek’s information argument, allocative efficiency (P = MC)',
      'Market failure: externalities, public goods, information gaps, market power',
      'Planning: command allocation for priorities the market under-provides',
      'Planning failure: loss of the price signal, historical evidence of shortages/surpluses',
      'Mixed economy: price mechanism as default, intervention targeted at specific market failure',
    ],
    [
      'A pure market systematically misallocates precisely where failure is most common and costly',
      'A pure plan misallocates even ordinary markets with no natural failure, having lost the price signal entirely',
      'The efficiency of a mixed economy depends on how narrowly intervention is targeted',
      'Risk of government failure reproducing the planning problem if intervention overreaches',
      'Judgement: mixed economy generally superior, conditional on disciplined, well-evidenced intervention',
    ],
  ),

  /* --------------------------------------------- Rational Decision Making */
  Q067: A(
    [],
    'Traditional economic theory assumes consumers are rational: they have full information, weigh costs and benefits accurately, and choose whichever option maximises their utility. Bounded rationality describes the more realistic case where limited information, limited time and limited mental processing power stop a consumer reaching that theoretically optimal decision.',
    [
      [
        'A consumer choosing a mobile phone contract, for example, faces dozens of tariffs combining different prices, data allowances, contract lengths and hidden fees. Rather than comparing every option’s total cost precisely, a consumer under bounded rationality is likely to use a mental shortcut - a rule of thumb such as "pick whichever headline monthly price is lowest" - because working out the true best deal would take more time and effort than the decision is worth to them.',
        'The result is a choice that is reasonable given the effort the consumer was willing to spend, but which is not actually utility-maximising: they may end up paying more overall than a fully informed, fully rational comparison would have produced, because the shortcut ignored information (the hidden fees, the true cost over the whole contract) that a perfectly rational agent would have processed.',
      ],
      [
        'Bounded rationality also shows up as "satisficing" - Herbert Simon’s term for choosing the first option that clears an acceptable threshold rather than continuing to search for the genuinely best one. A shopper buying breakfast cereal is unlikely to compare the price per 100g and nutritional content of every brand on the shelf; once one option looks "good enough" on the one or two things they actually care about, such as a familiar brand within a rough price limit, they buy it and move on, even though a fuller comparison might have found a better deal.',
        'Satisficing is not necessarily irrational once the cost of searching further is counted: for a low-value, frequently repeated purchase such as a box of cereal, the time and effort spent finding the genuinely optimal choice would likely cost the consumer more than the saving it might reveal. Bounded rationality can therefore itself be a reasonable response to a decision that is not worth the effort of optimising fully, rather than simply a failure of rationality.',
      ],
    ],
    null,
    [
      'Definition of rational economic decision-making (full information, utility-maximising)',
      'Definition of bounded rationality (limited information, time and processing power)',
      'Worked example of a rule-of-thumb decision (e.g. a mobile contract, a supermarket choice)',
      'Explanation of why the shortcut produces a reasonable, but not utility-maximising, outcome',
      '"Satisficing" (Herbert Simon): choosing the first acceptable option rather than the optimal one',
    ],
    [
      'Depends on the complexity of the decision and the cost of gathering full information',
      'Satisficing can be a rational response to a low-value decision once search costs are counted, not simply irrational',
    ],
  ),

  Q068: A(
    [],
    'The rational economic agent assumption holds that consumers have complete information, unlimited processing ability, and act purely from self-interest to maximise their own utility. Behavioural economics presents evidence that real decision-making systematically departs from this in ways the traditional model does not predict.',
    [
      [
        'For everyday, low-stakes, repeated purchases the assumption works well enough to be useful: a consumer buying the same brand of coffee each week has effectively learned, through repetition, which choice best serves their preferences, and their behaviour is well approximated by a rational utility-maximiser even if they are not consciously calculating marginal utility.',
        'Even here, the assumption glosses over the fact that preferences themselves can be shaped by advertising and habit rather than existing independently and being simply revealed by choice, which is a more fundamental problem for the model than any single decision being "wrong".',
      ],
      [
        'For larger, less frequent or more complex decisions - a mortgage, a pension, an energy tariff - real consumers show bounded rationality (mental shortcuts substituting for full calculation), bounded self-control (a well-documented tendency to over-value the present against the future, seen in under-saving for retirement), and altruism (choices, such as buying fair-trade goods, that a purely self-interested utility-maximiser would not make if it cost more for no personal benefit).',
        'These are not occasional errors but systematic, predictable biases - which is precisely why behavioural economics can be used constructively: a government "nudge", such as auto-enrolment into a pension scheme, works by anticipating a specific, well-evidenced departure from full rationality (inertia) rather than assuming it away. The UK’s workplace pension auto-enrolment, introduced from 2012, raised the proportion of eligible employees saving into a private pension from around 55% to over 88% within a decade, simply by changing the default from opting IN to opting OUT - the underlying incentive to save for retirement had not changed at all.',
      ],
      [
        'The realism of the assumption therefore depends heavily on the stakes and complexity of the decision, and on whether the model is being used to predict AGGREGATE market behaviour or to design a POLICY aimed at an individual’s decision. Aggregated over a whole market, individual biases can partly cancel out and demand/supply analysis built on the rational assumption still predicts direction of change reasonably well.',
        'For policy aimed at individuals - pensions, health, addictive goods - treating people as fully rational risks under-estimating problems (under-saving, over-consumption of demerit goods) that behavioural evidence shows are systematic rather than random, which is exactly why behavioural insights units now sit inside many governments’ policy-making.',
      ],
    ],
    'The rational economic agent assumption is a simplification that remains useful for predicting the DIRECTION of market outcomes and for modelling frequent, low-stakes choices, but it is not realistic as a description of how individuals actually make complex, infrequent or emotionally loaded decisions. The extent to which it matters depends on the use: for building a supply and demand model of a market, the assumption is a reasonable approximation; for designing policy aimed at an individual’s decision, ignoring bounded rationality, bounded self-control and altruism risks getting the policy wrong.',
    [
      'Definition of the rational economic agent assumption',
      'Bounded rationality: mental shortcuts replacing full calculation',
      'Bounded self-control: over-valuing the present (e.g. under-saving for retirement)',
      'Altruism: choices that sacrifice self-interest for others (e.g. fair-trade goods)',
      'Nudge theory / behavioural policy exploiting known biases (e.g. pension auto-enrolment)',
    ],
    [
      'Assumption works reasonably well for frequent, low-stakes, repeated decisions',
      'Assumption breaks down for complex, infrequent, high-stakes decisions',
      'Biases are systematic and predictable, not random - this is what makes nudges work',
      'Distinction between modelling aggregate market behaviour and designing individual-level policy',
      'Judgement: useful simplification for markets, unreliable for policy aimed at individual choices',
    ],
  ),

  /* ----------------------------------- Supply and Elasticity of Supply */
  Q069: A(
    [['pes-elasticity', 'Two supply curves of different steepness on the same axes, one for a car (inelastic, steep) and one after time has allowed factors of production to be varied (more elastic, flatter). Label the size of the response in quantity supplied to the same price change on each.']],
    'Price elasticity of supply (PES) measures how much quantity supplied responds to a change in price. A good’s supply tends to become more price elastic in the long run than in the short run, because more of the constraints on production can be relaxed the longer a firm has to respond.',
    [
      [
        'The first factor is spare capacity and stocks. In the short run a car manufacturer’s factories are running at a fixed capacity and cannot instantly produce more cars in response to a price rise; in the long run, the firm can build new factories, install more machinery and expand capacity, so the same price rise eventually calls forth a much larger increase in quantity supplied.',
        'How long this takes depends heavily on the specific industry: a firm with under-used capacity or a warehouse of stock can raise output within weeks by running an extra shift or releasing stock, while a firm already at full capacity in a sector with long lead times, such as building a new semiconductor fabrication plant, may take several years to expand. “Long run” is therefore a different amount of calendar time in different industries, not a fixed period.',
      ],
      [
        'The second factor is the mobility of factors of production. In the short run, skilled labour, specialist machinery and raw material contracts are largely fixed, so output can only be adjusted a little (for example by overtime). In the long run, firms can hire and train new workers, switch suppliers and invest in new equipment, so factors of production can be reallocated far more freely towards the good whose price has risen, making supply more elastic.',
        'This gain in elasticity is capped where the good itself is perishable or costly to store: a producer of fresh fruit or a live entertainment event cannot hold stock to smooth supply between periods no matter how mobile its labour and capital eventually become, so perishability limits how far the long-run PES can rise even once factor mobility has fully adjusted.',
      ],
    ],
    null,
    [
      'Definition of price elasticity of supply',
      'Time period distinction: short run versus long run',
      'Spare capacity and stock levels can only be drawn on quickly, expanded capacity takes time',
      'Mobility of factors of production increases over time (labour, capital, raw materials)',
      'PES diagram showing a steeper short-run curve and a flatter long-run curve',
    ],
    [
      'The size of the difference depends on the specific industry: some capital is much quicker to install than others, so “long run” varies in length',
      'Perishability or storage cost of the good caps how far the long-run elasticity of supply can rise',
    ],
  ),

  Q070: A(
    [['pes-elasticity', 'Two supply curves of different elasticity. Use the diagram to show that the same specific tax (a parallel upward shift of supply) causes a much smaller fall in quantity when supply is inelastic than when it is elastic.']],
    'Price elasticity of supply (PES) measures the responsiveness of quantity supplied to a change in price. Knowing the PES of a good matters directly to a government considering an indirect tax, because it helps predict both how much the tax will actually raise and how much of it firms can pass on.',
    [
      [
        'Where supply is price inelastic - a good with limited spare capacity or slow-to-expand production, such as a scarce raw material - an indirect tax causes only a small fall in the equilibrium quantity traded. The tax revenue raised is then close to the tax rate multiplied by the largely unchanged quantity, so PES lets the government predict that this tax will raise a predictable, substantial amount of revenue with only a small effect on output.',
        'This makes goods with inelastic supply an efficient revenue-raising base, but only in the short run: if the tax also discourages the long-run investment that would otherwise have expanded capacity, the government’s prediction based on short-run PES may overstate future revenue once producers have had time to respond by contracting supply further.',
      ],
      [
        'Where supply is price elastic, the same tax causes a much larger fall in quantity traded as producers can more readily divert resources to other goods rather than absorb a lower after-tax price. Knowing this in advance tells the government the tax is likely to raise less revenue than a simple calculation using the pre-tax quantity would suggest, and that the incidence of the tax (who effectively bears the cost) will fall more heavily on the firm, since it cannot easily maintain output at the new lower after-tax price.',
        'This matters for a firm too: knowing its own supply is elastic tells it that maintaining its current market share after a tax will require accepting a lower margin rather than passing the tax fully to consumers, which affects its pricing and investment decisions, not just the government’s revenue forecast.',
      ],
      [
        'PES also interacts with the elasticity of demand to determine incidence fully: even a good with elastic supply can still leave most of a tax’s burden on the firm if demand is also elastic, since consumers can simply buy less or switch away rather than absorb a higher price, leaving the firm unable to pass the tax on in either direction.',
        'This means PES on its own is only half the picture for a government deciding whether a tax is a reliable revenue source: it has to be read alongside the good’s price elasticity of demand, not in isolation, before either the revenue raised or who ultimately bears the tax can be predicted with any confidence.',
      ],
    ],
    'Knowing a good’s price elasticity of supply is genuinely useful to a government considering an indirect tax, because it lets the government predict, before legislating, roughly how much revenue the tax will raise and how far the burden will fall on firms rather than consumers. It is not sufficient on its own: PES has to be combined with the price elasticity of demand to predict incidence fully, and a government relying only on short-run PES risks overstating future revenue once producers have had time to adjust capacity. Used alongside demand elasticity and over the right time horizon, PES is a valuable, though not complete, tool for tax design.',
    [
      'Definition of price elasticity of supply',
      'Inelastic supply: small quantity fall, larger and more predictable tax revenue',
      'Elastic supply: larger quantity fall, less revenue, and more of the tax burden on the firm',
      'Diagram showing a specific tax as a parallel shift, contrasted for elastic vs inelastic supply',
      'PES helps predict both the revenue effect and who bears the tax (incidence)',
    ],
    [
      'Short-run PES may understate the long-run response once producers can adjust capacity',
      'Useful for revenue forecasting, but the firm’s own pricing decisions also depend on PES',
      'PES must be read alongside the price elasticity of demand to predict incidence fully',
      'Judgement: a valuable but not sufficient tool on its own for predicting a tax’s effect',
    ],
  ),

  /* --------------------------------------- Consumer and Producer Surplus */
  Q071: A(
    [['consumer-producer-surplus', 'A demand and supply diagram with the free market equilibrium showing consumer surplus above the price line and producer surplus below it. Add the maximum price below equilibrium, mark the new (smaller) quantity traded, and show how the areas of consumer and producer surplus change - some producer surplus is transferred to consumers, but some surplus is lost as a deadweight welfare loss because quantity has fallen.']],
    'Consumer surplus is the difference between what consumers are willing to pay and what they actually pay; producer surplus is the difference between the price producers receive and the minimum they would have accepted. A maximum price (price ceiling) set below the free market equilibrium redistributes and reduces these surpluses.',
    [
      [
        'At the free market equilibrium, price and quantity clear so that consumer surplus and producer surplus are both maximised in combination. Imposing a maximum price below this level forces price down, which immediately increases the surplus enjoyed by consumers who can still buy the good at the new, lower price - each unit still bought is now cheaper than before, so consumer surplus per unit rises.',
        'However, the lower price also reduces the quantity firms are willing to supply, moving along the supply curve to a new, lower quantity. Consumers who could have bought the good at the equilibrium price but cannot obtain it at the controlled price (because supply has fallen short of demand) lose out entirely, and this rationing, together with the fall in quantity traded, means the increase in consumer surplus per unit is partly offset by fewer units being sold.',
      ],
      [
        'Producer surplus falls both because the price received per unit is now lower, and because the quantity supplied has fallen, so producers earn less on every unit and sell fewer of them - some of what was producer surplus at equilibrium is transferred to consumers who can still buy at the lower price.',
        'Because quantity traded falls below the efficient equilibrium quantity, some potential trades that would have benefited both a willing buyer and a willing seller no longer happen at all: this deadweight welfare loss is surplus that is not merely transferred from producers to consumers but disappears from the market altogether.',
      ],
    ],
    null,
    [
      'Definitions of consumer surplus and producer surplus',
      'Diagram: demand/supply, free market equilibrium, then the maximum price below it',
      'Consumers who can still buy gain a larger surplus per unit at the lower price',
      'Quantity supplied falls, so some consumers are rationed out and gain nothing',
      'Producer surplus falls: lower price per unit and lower quantity sold',
      'Deadweight welfare loss from the fall in quantity traded below the equilibrium level',
    ],
    [
      'Depends on how far below equilibrium the maximum price is set',
      'Depends on how the shortage is actually rationed (queuing, first-come-first-served, informally)',
    ],
  ),

  Q072: A(
    [['maximum-price', 'A demand and supply diagram with a maximum price set below the free market equilibrium. Show the resulting shortage (excess demand at the controlled price), the fall in quantity actually traded, and the deadweight welfare loss triangle between the demand and supply curves over the units no longer traded.']],
    'Total welfare in a market is usually measured as consumer surplus plus producer surplus. A price ceiling is often introduced on equity grounds, to make a good such as housing more affordable, but whether it raises total welfare is a separate question from whether it helps the specific consumers it targets.',
    [
      [
        'A price ceiling set below equilibrium does redistribute surplus: the consumers who succeed in buying the good gain, because they now pay less than the equilibrium price for a good they still value highly, and this is often the explicit goal - making a good such as rented housing more affordable for existing tenants.',
        'But redistribution is not the same as an increase in TOTAL welfare. Because the controlled price reduces the quantity firms are willing to supply, some mutually beneficial trades between willing buyers and willing sellers no longer take place, and the resulting deadweight welfare loss is surplus that vanishes rather than being transferred to anyone - it cannot be counted as a gain to consumers even under the most generous accounting.',
      ],
      [
        'The policy can also fail on its own equity terms. With supply now below demand at the controlled price, the good must be rationed by some other mechanism - a queue, a lottery, first-come-first-served, or the seller’s own discretion - and there is no guarantee this allocates the good to those most in need rather than to those with the most time, the best connections, or simple luck. A black market can also emerge, where the good is resold above the legal price, which transfers surplus to whoever controls the resale rather than to the intended consumers at all.',
        'A price ceiling can also reduce the quality or availability of the good over time even at the reduced quantity: a landlord facing a rent cap has less incentive to maintain or improve a property, since the controlled rent no longer reflects any improvement made, which can erode the very good the policy meant to protect. Long-running rent controls in cities such as New York have been widely studied for exactly this pattern - a shrinking, ageing controlled housing stock alongside a shortage that persists for decades rather than clearing.',
      ],
      [
        'Whether the intervention is on balance justified depends on how the policymaker weighs a REDISTRIBUTION towards existing consumers against a REDUCTION in overall welfare and the risk that rationing fails to reach the intended group. If the goal is genuinely equity rather than efficiency, and the ceiling is combined with measures to expand supply over time (so the shortage does not persist), the transfer to protected consumers may be judged worth the deadweight loss. Set in isolation and left in place indefinitely, the accumulating shortage, black market activity and quality erosion make the case for a price ceiling weaker the longer it persists.',
        'An alternative that avoids the deadweight loss - a targeted subsidy or income transfer to the specific consumers policymakers want to help - can achieve the same equity goal while leaving the market price free to allocate the good efficiently, though this requires the government to have the fiscal capacity and the information to target the transfer accurately, which is not always available.',
      ],
    ],
    'A price ceiling redistributes surplus towards the consumers who succeed in buying the good, but it does not increase total welfare: it reduces quantity traded below the efficient level, creates a deadweight welfare loss, and risks failing on its own equity aims through rationing or a black market. Government intervention to set a price ceiling can be justified on distributional grounds in the short run or alongside supply-side measures, but as a permanent, stand-alone policy it is more likely to reduce total welfare than increase it - a targeted transfer to the intended beneficiaries, leaving the market price free, achieves the same equity goal without the deadweight loss.',
    [
      'Consumer surplus and producer surplus as measures of welfare',
      'Diagram: maximum price, resulting shortage, and deadweight welfare loss triangle',
      'Consumers who can still buy gain; consumers rationed out gain nothing',
      'Deadweight welfare loss from trades that no longer happen',
      'Rationing mechanisms (queuing, black markets) may not reach the intended beneficiaries',
    ],
    [
      'Redistribution is not the same as an increase in total welfare',
      'Risk of black markets and quality erosion undermining the policy’s own aims',
      'Depends on whether the ceiling is temporary/paired with supply-side action, or permanent',
      'Alternative: a targeted subsidy or transfer achieves equity without the deadweight loss',
      'Judgement: justified short-term or alongside supply measures, weak case as a permanent stand-alone policy',
    ],
  ),

  /* --------------------------------------------------- Externalities */
  Q073: A(
    [['negative-externality', 'Marginal private cost (MPC) below marginal social cost (MSC), with the vertical gap between them equal to the marginal external cost of the pollution. Mark the free market output where MPC = demand (MPB), the socially optimal output where MSC = MPB, and the welfare loss triangle between them.']],
    'A negative production externality occurs when a firm’s output imposes a cost on a third party that is not reflected in the firm’s own costs. Air pollution from a factory is a classic example: the factory bears the cost of its inputs and labour, but not the cost its pollution imposes on people living nearby.',
    [
      [
        'The factory makes its output decision based on its marginal private cost (MPC) - what production actually costs the firm - setting output where MPC equals the marginal private benefit (demand). But the true marginal social cost (MSC) of each unit is higher than MPC, because it also includes the marginal external cost imposed on third parties through pollution.',
        'Because the firm never has to pay for the external cost it creates, it has no incentive to account for it, and it produces up to the point where its own MPC equals demand - a quantity that is higher than the socially optimal output where MSC would equal demand. The good is therefore overproduced relative to the level that would maximise society’s total welfare, and the units produced beyond the social optimum create a welfare loss because their true cost to society exceeds the benefit consumers gain from them.',
      ],
      [
        'The standard correction is a Pigouvian tax set equal to the marginal external cost at the socially optimal output. This shifts the firm’s MPC curve vertically upward until it coincides with MSC, so the firm’s own profit-maximising decision (now effectively MPC = MSC = demand) internalises the externality without the government needing to ban or physically ration production; output falls from the free-market level to the social optimum through the price mechanism rather than by command.',
        'This only works if the tax is set at the right level, which requires the government to know the size of the marginal external cost precisely - and there is no market price for clean air to reveal it. A tax set too low leaves output above the social optimum; one set too high pushes output below it and creates a new welfare loss in the opposite direction, so the correction is only as good as the estimate of the externality behind it.',
      ],
    ],
    null,
    [
      'Definition of a negative production externality',
      'Distinction between MPC and MSC, with MEC as the gap between them',
      'Diagram showing MPC, MSC, MPB, the free market output and the socially optimal output',
      'Explanation of why the free market overproduces relative to the social optimum',
      'Welfare loss triangle over the units produced beyond the social optimum',
      'Correction: a Pigouvian tax equal to the MEC shifts MPC to meet MSC, restoring the social optimum',
    ],
    [
      'Depends on whether the pollution is local (affecting few) or diffuse (affecting many, e.g. carbon emissions)',
      'A tax only corrects the externality if the MEC is measured accurately; over- or under-estimating it creates a new welfare loss',
    ],
  ),

  Q074: A(
    [['positive-externality', 'Marginal social benefit (MSB) above marginal private benefit (MPB), with the vertical gap equal to the marginal external benefit of the education. Mark the free market output where MPB = supply, the socially optimal output where MSB = supply, and show a per-unit subsidy closing the gap between them.']],
    'A positive consumption externality occurs when consuming a good creates a benefit for third parties beyond the private benefit to the consumer. Education is a widely used example: an educated individual benefits personally, but employers and society also benefit from a more productive, more informed workforce and citizenry.',
    [
      [
        'Because individuals base their consumption decisions on their own marginal private benefit (MPB), which is lower than the true marginal social benefit (MSB) once the external benefit to others is included, the free market under-consumes education relative to the socially optimal quantity where MSB would equal supply. A per-unit subsidy that lowers the effective price to the consumer can close this gap by raising private benefit relative to cost, moving consumption towards the social optimum.',
        'The subsidy’s effectiveness depends on accurately sizing it to the marginal external benefit: too small a subsidy leaves consumption below the social optimum, while too large a subsidy pushes consumption beyond it, creating a new welfare loss in the opposite direction, and either error requires the government to correctly estimate an external benefit that is inherently hard to measure precisely.',
      ],
      [
        'An alternative is direct government provision - state-funded schooling - which guarantees the socially optimal quantity is available regardless of individual willingness to pay, and avoids leaving the decision to a subsidy that still depends on households choosing to take it up. The UK applies exactly this distinction in practice: primary and secondary education is provided directly, free at the point of use and compulsory, while post-16 and higher education rely more on subsidised tuition loans and means-tested maintenance grants - a sign that the case for guaranteeing the social optimum through direct provision is judged to weaken once education is no longer compulsory.',
        'Direct provision has its own costs: it removes the price signal and competitive pressure that might otherwise drive up quality or efficiency in provision, and it is funded through general taxation rather than being targeted specifically at correcting the externality, so its opportunity cost falls on whatever else that tax revenue could have funded.',
      ],
      [
        'A third option is information provision or advertising campaigns highlighting the personal returns to education, aiming to shift consumers’ own perception of the private benefit closer to the true social benefit without any direct spending on the good itself, which is far cheaper than a subsidy or direct provision if it works.',
        'Persuasion alone rarely closes a gap as large as the one between the private and social benefit of a full education, since it does nothing to address the direct cost or opportunity cost (such as forgone earnings) that leads households to under-consume it in the first place, so it tends to work best as a complement to a subsidy or provision rather than a substitute for either.',
      ],
    ],
    'Both a subsidy and direct government provision can move consumption of a good with a positive externality, such as education, towards the socially optimal quantity, and in practice most countries use a mix of both rather than relying on either alone: direct provision of a baseline of free education, alongside subsidies (grants, reduced fees) to encourage further take-up beyond that baseline. Which is more effective depends on how far below the social optimum consumption would otherwise fall and on how accurately the external benefit can be measured - the harder it is to measure, the stronger the case for guaranteeing the social optimum through direct provision rather than risking a mis-sized subsidy.',
    [
      'Definition of a positive consumption externality',
      'Distinction between MPB and MSB, with MEB as the gap between them',
      'Diagram showing MPB, MSB, supply, and the free market versus socially optimal output',
      'Subsidy as a way of raising private benefit towards the social benefit',
      'Direct government provision as an alternative correction',
      'Information/advertising as a lower-cost, partial correction',
    ],
    [
      'Difficulty of measuring the external benefit accurately (risk of over- or under-subsidising)',
      'Direct provision guarantees the socially optimal quantity but removes market efficiency pressures and has an opportunity cost',
      'Information campaigns alone are unlikely to close a large private-social benefit gap',
      'Judgement: most effective as a combination (baseline provision plus subsidy) rather than either alone',
    ],
  ),

  /* ------------------------------------------------ Government Failure */
  Q075: A(
    [],
    'Government failure occurs when government intervention intended to correct a market failure makes the allocation of resources less efficient than before, or creates costs that outweigh the benefit of the intervention.',
    [
      [
        'A government introducing a subsidy to support a specific industry, for example, may misjudge the size of the subsidy needed because it lacks the information the market itself would have revealed through prices, resulting in an over-subsidised industry that produces beyond the level that maximises social welfare, wasting public money on units of output whose cost exceeds their benefit.',
        'The subsidy may also become politically difficult to remove once industry jobs and lobbying depend on it, so even once the original justification for the intervention has weakened, the government failure persists because political incentives, rather than economic ones, now determine the policy.',
      ],
      [
        'A different route to government failure is a price control that creates an unintended consequence in the very market it targets. A maximum price set below equilibrium - rent controls intended to keep housing affordable, for example - creates excess demand: landlords have less incentive to maintain or expand the rented housing stock at the capped rent, so the resulting shortage can leave many of the renters the policy was meant to help worse off, and pushes some activity into an unregulated market where the legal price ceiling is evaded entirely.',
        'Whether this counts as a genuine failure, rather than simply an acceptable cost of the policy, depends on how the gain to those who do secure housing at the capped rent compares with the loss to those excluded by the resulting shortage - a normative judgement about who the intervention is meant to protect, not a purely technical one.',
      ],
    ],
    null,
    [
      'Definition of government failure',
      'Worked example: a subsidy poorly sized due to imperfect government information',
      'Explanation of the resulting welfare loss (over- or under-correction)',
      'Political economy point: intervention can persist beyond its economic justification',
      'A second mechanism: a price control creating excess demand/supply and an unintended black market',
    ],
    [
      'Severity depends on how far the intervention departs from the socially optimal level',
      'Whether a price-control side effect is a "failure" depends on a normative judgement about who intervention is meant to protect',
    ],
  ),

  Q076: A(
    [],
    'Government failure is the risk that intervention meant to correct a market failure ends up creating a net welfare loss of its own, through poor information, unintended consequences, excessive administrative cost, or political rather than economic motivation.',
    [
      [
        'The case for caution rests on the fact that a government does not automatically have better information than the market it is correcting. Setting a Pigouvian tax at the wrong rate because the true marginal external cost is hard to measure, or subsidising a merit good beyond the point that maximises welfare, can turn a market failure into a differently shaped, government-caused inefficiency rather than removing it.',
        'Regulation also carries an administrative and compliance cost that is itself a resource cost to the economy, and where a policy creates identifiable winners (an industry receiving a subsidy, workers protected by regulation) those groups have a strong incentive to lobby to keep the policy in place even once its original justification has weakened, which is a political rather than an economic reason for intervention to persist. The European Union’s Common Agricultural Policy is a well-documented case: guaranteed minimum prices set above the market equilibrium generated the notorious "butter mountains" and "wine lakes" of the 1980s, as farmers kept producing surpluses the state then had to buy up and store, a textbook instance of a subsidy mis-sized because it was set for political rather than economic reasons.',
      ],
      [
        'Against this, market failure left uncorrected is not costless either: an unpriced externality, an unprovided public good or an unchecked monopoly imposes its own welfare loss, and this loss does not disappear simply because government risks making an imperfect correction. The relevant comparison is not between a perfect market and an imperfect government, but between the SIZE of the market failure and the SIZE of the likely government failure in a specific case.',
        'Many interventions have, in practice, corrected market failure at a cost well below the welfare loss they addressed: the UK Competition and Markets Authority has broken up cartels and blocked anti-competitive mergers at a fraction of the consumer harm those abuses would otherwise have caused, and childhood vaccination programmes internalise a clear, well-measured positive externality (herd immunity) at a cost per case prevented that is a standard textbook example of intervention working well. These show that the risk of government failure does not make all intervention counter-productive - only intervention that is poorly targeted, poorly measured, or captured by narrow interests.',
      ],
      [
        'The extent to which the risk of government failure means governments should not intervene therefore depends on the specific market failure: where the externality or public good is large, well-measured, and the policy tool is well-matched to it (a well-evidenced tax rate, direct provision of a genuinely non-excludable good), the case for intervening remains strong. Where the market failure is small, hard to measure, or the proposed intervention is likely to be captured by the industry it regulates, the risk of government failure can outweigh the market failure being addressed.',
        'This suggests the right conclusion is not a blanket rule for or against intervention, but a case-by-case test of whether the expected welfare gain from correcting the market failure exceeds the expected welfare cost of the specific government failure risked by that particular intervention.',
      ],
    ],
    'Government failure is a genuine and well-evidenced risk, and it means intervention is never automatically an improvement on an uncorrected market failure. But the risk of government failure does not, by itself, mean governments should never intervene, because uncorrected market failure carries its own, often larger, welfare cost. The right test is a case-by-case comparison of the size of the market failure against the size of the likely government failure risked by the specific policy tool proposed - well-measured, narrowly targeted intervention against a large, clear market failure is usually justified; poorly measured or easily captured intervention against a small or uncertain market failure often is not.',
    [
      'Definition of government failure and its causes (information, unintended consequences, cost, political motivation)',
      'Examples: mis-set Pigouvian tax or subsidy, regulatory compliance cost, lobbying/capture',
      'Market failure examples where intervention has plausibly worked (competition policy, vaccination)',
      'The comparison is not perfect market versus perfect government, but the size of each specific failure',
    ],
    [
      'Uncorrected market failure is not costless - the comparison must be relative, not absolute',
      'Some interventions are well-evidenced and narrowly targeted; others are poorly measured or captured',
      'Case-by-case test rather than a blanket rule',
      'Judgement: government failure is a real constraint on intervention, not a reason to abandon it altogether',
    ],
  ),

  /* ------------------------------------------------------- Demergers */
  Q085: A(
    [],
    'A demerger is the reverse of a merger: a single company splits into two or more separate, independently operating companies. Firms choose to demerge for reasons connected to how well a large, diversified conglomerate can actually be managed and valued.',
    [
      [
        'A very large conglomerate spanning unrelated businesses can suffer from diseconomies of scale in management: coordinating and controlling divisions with little in common becomes progressively harder as the organisation grows, communication breaks down across layers of management, and decisions slow as they have to pass through a head office with limited expertise in each individual business. Demerging into smaller, focused companies can restore effective managerial control, with each new company’s management concentrating on a single business it actually understands well.',
        'This only holds where the conglomerate genuinely lacked synergy between its divisions; a demerger undertaken for this reason still gives up whatever coordination benefits, however small, the combined group did have.',
      ],
      [
        'Investors and stock markets often struggle to value a complex conglomerate accurately, since its share price has to reflect the combined prospects of businesses that may have very different growth rates, risks and cycles, and this can produce a "conglomerate discount" where the whole is valued at less than the sum of its separately valued parts would be worth. Demerging into focused companies, each valued on its own merits by investors and analysts who specialise in that industry, can unlock this hidden value, which is often the explicit reason activist shareholders push a conglomerate to split - as with GSK’s 2022 demerger of its consumer healthcare arm into the separately listed Haleon, pursued partly under pressure from activist investors who argued the combined pharmaceutical and consumer-goods business was being valued below the sum of its parts.',
        'Unlocking a valuation gain this way benefits shareholders directly, but it is a one-off financial re-rating rather than evidence that the underlying businesses have become more efficient or productive as a result of the split.',
      ],
    ],
    null,
    [
      'Definition of a demerger',
      'Diseconomies of scale in management as a reason to demerge (coordination and communication costs)',
      'The "conglomerate discount" and unlocking shareholder value as a second reason',
      'Recognition that either reason may be driven by shareholders/activist investors, not only management',
    ],
    [
      'Depends on how genuinely unrelated the conglomerate’s divisions were to begin with',
      'Depends on whether real operational synergies existed between the divisions before the split',
    ],
  ),

  Q086: A(
    [],
    'A demerger splits a single company into two or more separate, independently operating companies. Its effect on efficiency depends on whether the benefits of sharper managerial focus and a clearer market valuation outweigh the loss of whatever genuine synergies existed between the parts.',
    [
      [
        'Demerging can improve productive efficiency directly: each resulting company’s management can concentrate resources, attention and capital allocation on a single business it understands well, rather than dividing attention across unrelated divisions inside one head office. This is most likely to raise efficiency where the original conglomerate genuinely suffered from diseconomies of scale in management - slow decision-making, unclear accountability, or a head office with limited expertise across all its divisions.',
        'The efficiency gain depends on management in each new, smaller company actually delivering the sharper focus the demerger promised - simply being smaller does not guarantee better management, and a poorly run division does not automatically improve just because it is now independent.',
      ],
      [
        'Against this, a conglomerate that shared a distribution network, a research function, or the ability to shift cash from a strongly performing division to fund investment in a struggling one loses that internal capital allocation flexibility once the businesses are separated. Each demerged company must now raise its own finance externally, at its own cost of capital, which can be a genuine loss of efficiency if the internal transfer had previously funded investment more cheaply than the external capital market would.',
        'Demerging also creates one-off restructuring costs - separating shared systems, duplicating functions such as finance and HR that were previously centralised - which are a real resource cost, so any efficiency gain from sharper focus has to be weighed against this transitional cost before it shows up as a net improvement.',
      ],
      [
        'A demerger can also improve allocative efficiency in a broader sense, by letting capital markets price and direct funds to each business according to its own genuine prospects rather than the blended, harder-to-read prospects of the combined group - investors who want exposure to just one of the businesses no longer have to buy the whole conglomerate to get it, which can lower the cost of capital for the stronger business specifically.',
        'This benefit accrues mainly to investors and to the strongest of the demerged businesses; the weaker business, no longer cross-subsidised, can face a higher cost of capital and slower investment than it would have had inside the group, so the efficiency gain is not necessarily shared evenly across all the resulting companies.',
      ],
    ],
    'A demerger tends to improve efficiency where the original conglomerate genuinely suffered from management diseconomies of scale and had few real operational synergies between its divisions to lose, letting each smaller company focus its management and letting capital markets price it more accurately. Where the conglomerate had genuine synergies - shared distribution, research, or internal capital allocation - a demerger trades that coordination benefit for sharper focus, and the one-off restructuring cost has to be recovered before any net efficiency gain shows up at all. The overall impact on efficiency is therefore conditional on the specific conglomerate’s starting point, not a guaranteed outcome of splitting up.',
    [
      'Improved managerial focus and accountability in each smaller company',
      'Loss of synergies: shared distribution, shared research, internal capital allocation',
      'One-off restructuring costs and duplicated overhead functions',
      'Capital markets can price and direct funds to each business more accurately once separated',
    ],
    [
      'Depends on how much genuine synergy existed between the divisions before the split',
      'Depends on whether external capital markets can replace the lost internal capital allocation cheaply',
      'Benefit of clearer capital market pricing may not be shared evenly across the demerged companies',
      'Judgement: efficiency improves most where the conglomerate had genuine coordination diseconomies and few real synergies to lose',
    ],
  ),

  /* -------------------------------------------------------- Efficiency */
  Q087: A(
    [['efficiency', 'A cost curve diagram showing a firm at the point where price equals both minimum average cost (productive efficiency) and marginal cost (allocative efficiency) - the long-run equilibrium of a perfectly competitive firm. Label both conditions on the same diagram.']],
    'Productive efficiency and allocative efficiency are two distinct standards for judging how well a market performs, and perfect competition is the one market structure where both are achieved simultaneously in long-run equilibrium.',
    [
      [
        'Productive efficiency occurs where a good is produced at the lowest possible average cost, using the fewest resources for a given output - on a firm’s cost curves, this is the output at the very bottom of the average cost curve. Allocative efficiency occurs where the price paid for a good equals its marginal cost of production, so that resources are allocated exactly according to consumers’ willingness to pay relative to the true cost of supplying one more unit.',
        'In perfectly competitive long-run equilibrium, free entry and exit drive economic profit to zero, forcing firms to produce at the lowest point of their average cost curve to survive (productive efficiency), while the intense competition between many identical firms drives price down to equal marginal cost (allocative efficiency) - both conditions hold at exactly the same output, which is why perfect competition is the theoretical benchmark against which other market structures are judged.',
      ],
      [
        'A monopolist, by contrast, can fail both standards at once. Protected from competitive pressure by barriers to entry, it restricts output to where marginal revenue equals marginal cost, charging a price above marginal cost (allocatively inefficient), and because no rival can force it to minimise costs to survive, it may also tolerate slack management and higher-than-necessary average costs, a form of productive inefficiency known as X-inefficiency.',
        'This is precisely why the dual efficiency of perfect competition matters as more than a description of an unusual market: it is the normative benchmark competition policy uses to judge how far a real, imperfectly competitive market falls short, and how much consumer welfare is potentially recoverable by making that market more contestable.',
      ],
    ],
    null,
    [
      'Definition of productive efficiency (lowest point of the average cost curve)',
      'Definition of allocative efficiency (price equals marginal cost)',
      'Diagram of a perfectly competitive firm’s long-run equilibrium showing both conditions at once',
      'Explanation of why free entry and exit force both conditions to hold simultaneously',
      'Contrast with monopoly: allocative inefficiency (P > MC) and X-inefficiency (slack cost control) together',
    ],
    [
      'These are theoretical benchmarks - real markets rarely meet the full conditions of perfect competition',
      'Dynamic efficiency (innovation over time) is a separate standard not captured by either measure',
    ],
  ),

  Q088: A(
    [['perfect-competition', 'A perfectly competitive firm’s long-run equilibrium (price = MC = minimum AC, zero economic profit) alongside a monopolist’s equilibrium (price above MC, positive economic profit, output restricted) to contrast the static efficiency outcomes of the two structures.']],
    'A market with only a small number of large firms - an oligopoly - is judged against the theoretical benchmark of perfect competition, which achieves both productive efficiency (lowest average cost) and allocative efficiency (price equals marginal cost) through many firms and free entry.',
    [
      [
        'With only a few large firms, price is typically set above marginal cost, since each firm has some market power rather than facing the perfectly elastic demand of a price-taker, so allocative efficiency in the strict, static sense is not achieved: the price paid exceeds the true marginal cost of the last unit produced, and output is lower than the allocatively efficient level.',
        'Similarly, a small number of firms does not guarantee production at the lowest point of the average cost curve, since without the constant competitive pressure of many rivals and free entry, X-inefficiency - costs drifting above the minimum necessary because there is less pressure to cut them - can persist for longer than it would where entry and exit are unrestricted.',
      ],
      [
        'However, a market with a small number of large firms can achieve significant economies of scale that a market of many small firms cannot, particularly where the minimum efficient scale of production is large relative to the size of the market (a natural oligopoly or near-natural-monopoly situation), and these lower average costs can be passed through, at least partly, to consumers as lower prices than a fragmented, many-firm market could sustain.',
        'A small number of large firms with substantial profits can also fund more research and development than many small, low-margin competitive firms could individually afford, potentially delivering DYNAMIC efficiency (innovation and falling costs over time) even where static allocative and productive efficiency, in the strict textbook sense, are not met at any single point in time.',
      ],
      [
        'Whether a market with a small number of large firms can ever be as efficient as one with many small firms therefore depends on which type of efficiency matters most for that specific market. Where economies of scale are large relative to market size and innovation matters (mobile networks, aircraft manufacturing), a small number of large firms can plausibly deliver more efficiency overall, once dynamic efficiency and economies of scale are weighed against the static allocative loss from prices above marginal cost.',
        'Where economies of scale are small relative to the market and the product is largely uniform (many retail and service markets), the case for a large number of small, competing firms achieving greater STATIC efficiency is much stronger, since there is little cost advantage to being large to offset the loss of competitive discipline on price.',
      ],
    ],
    'A market with only a small number of large firms is generally less efficient than perfect competition in the strict, static sense - price typically exceeds marginal cost, and weaker competitive pressure can allow X-inefficiency to persist. But it is not automatically LESS efficient overall than a market of many small firms, because it can capture economies of scale and fund innovation that a fragmented market cannot. The extent to which it can be as efficient depends on how large the minimum efficient scale is relative to the size of the market: where scale economies and innovation are significant, a small number of large firms can be more efficient overall despite failing the static test; where they are not, the case for many small, competing firms remains stronger.',
    [
      'Static efficiency: productive (lowest average cost) and allocative (price = marginal cost)',
      'Small number of large firms: price above marginal cost, weaker pressure against X-inefficiency',
      'Economies of scale possible with large firms where minimum efficient scale is large relative to the market',
      'Dynamic efficiency: research and development funded by profits, innovation over time',
    ],
    [
      'Depends on the size of the minimum efficient scale relative to the size of the market',
      'Depends on whether the market rewards innovation (dynamic efficiency) or is largely static/uniform',
      'Static allocative loss must be weighed against dynamic and scale efficiency gains',
      'Judgement: can be as efficient overall only where scale and innovation genuinely matter for that market',
    ],
  ),

  /* -------------------------------------------------- Perfect Competition */
  Q089: A(
    [['perfect-competition', 'A perfectly competitive firm’s long-run equilibrium: price equal to marginal cost and to the minimum point of average cost, with the firm as a price-taker facing a perfectly elastic demand curve at the market price. Show economic profit as zero at this output.']],
    'A firm operating in a perfectly competitive market is a price-taker, facing a perfectly elastic demand curve at the market-determined price, and free entry and exit into the industry drive its long-run economic profit to exactly zero.',
    [
      [
        'If firms in a perfectly competitive market are earning supernormal (economic) profit in the short run, this signals to firms outside the industry that resources deployed here earn more than their opportunity cost elsewhere. Because there are no significant barriers to entry, new firms are free to enter, attracted by that profit.',
        'As new firms enter, total market supply increases, shifting the market supply curve to the right and driving the market price down, while each individual firm’s market share falls. This process continues, with more firms entering and price falling further, until price has fallen to the point where it exactly equals each firm’s average cost at its profit-maximising output - the point of zero economic profit - at which point there is no longer any incentive for further entry, and the market settles into long-run equilibrium.',
      ],
      [
        'The same process runs in reverse when firms make a loss. If price falls below average cost in the short run, the least efficient firms are no longer covering their costs, so some exit the industry; this reduces total market supply, shifting the supply curve left and pushing price back up. Exit continues until the remaining firms are once again earning exactly zero economic profit, so the long-run equilibrium is self-correcting from either direction - firms can enter to eliminate supernormal profit or exit to eliminate losses.',
        'Exit is rarely as fast or as costless as entry, because leaving an industry can mean writing off sunk costs, paying redundancy costs, or being locked into contracts, whereas entry usually just requires spotting the opportunity. This asymmetry means real markets can spend longer below long-run equilibrium after a downturn than they spend above it after a boom, even where entry itself is genuinely free.',
      ],
    ],
    null,
    [
      'Definition of a perfectly competitive market: many firms, homogeneous product, free entry and exit, perfect information',
      'Short-run supernormal profit attracts new entrants due to the absence of barriers to entry',
      'Entry increases market supply, driving down price and each firm’s market share',
      'Process continues until price equals average cost, giving zero economic profit in long-run equilibrium',
      'Symmetric adjustment from a loss-making position: exit reduces supply until losses are eliminated',
    ],
    [
      'Assumes genuinely free entry and exit with no barriers, which is a strong theoretical assumption',
      'Exit is typically slower than entry because of sunk costs and redundancy costs, so adjustment is asymmetric in practice',
    ],
  ),

  Q090: A(
    [['monopoly', 'One combined diagram with a shared MC curve: the competitive/allocatively-efficient outcome where demand meets MC (labelled Qc), and the monopolist’s profit-maximising outcome where MC = MR (labelled Qm, priced off AR above MC), with the deadweight welfare loss triangle shaded between Qm and Qc. This is the standard way Edexcel answers compare the two structures - one diagram, not two separate ones.']],
    'Perfect competition and monopoly sit at opposite ends of the spectrum of market structures, and comparing their outcomes for consumers requires weighing price, output, static efficiency and the incentive to innovate against one another rather than assuming one is unambiguously better.',
    [
      [
        'In perfect competition, free entry drives price down to equal marginal cost and forces firms to produce at the lowest point of their average cost curve, achieving both allocative and productive efficiency; consumers pay the lowest sustainable price and output is at the level that maximises total surplus. A monopolist, restricting output to the level where marginal revenue equals marginal cost, sets a price above marginal cost and produces less than the allocatively efficient quantity, transferring surplus from consumers to itself and creating a deadweight welfare loss on the units no longer produced.',
        'This static comparison is the textbook case for preferring perfect competition: for a given cost structure and demand, more competition among more firms delivers a better outcome for consumers on both price and quantity.',
      ],
      [
        'However, a monopolist may be able to achieve substantial economies of scale that many small, perfectly competitive firms cannot, particularly in an industry with high fixed costs and a large minimum efficient scale, and some of this cost saving can be passed on to consumers as a price lower than a fragmented, competitive market could sustain despite the absence of a competitive constraint on the monopolist.',
        'A monopolist earning sustained supernormal profit also has both the funds and, through patent protection or first-mover advantage, the incentive to invest in research and development that a perfectly competitive firm - earning only normal profit in the long run and with any innovation immediately copied by rivals - could not afford or would not bother to fund, potentially delivering dynamic efficiency (falling costs and better products over time) that perfect competition’s static efficiency does not capture.',
      ],
      [
        'Whether perfect competition genuinely leads to a better outcome for consumers than monopoly therefore depends on the specific market: for an industry with low fixed costs, little scope for economies of scale, and limited need for large-scale research and development, perfect competition’s static advantages on price and output dominate and are very likely to benefit consumers more. For an industry with high fixed costs, significant economies of scale, or where continuous, capital-intensive innovation matters (pharmaceuticals, semiconductor manufacturing), monopoly or near-monopoly profit can fund benefits perfect competition would not deliver.',
        'It also matters whether the monopoly is protected by genuine barriers to entry or is merely UNCONTESTED: a monopoly that remains vulnerable to entry if it prices too high or innovates too slowly (a contestable monopoly) behaves much closer to the competitive outcome than the textbook, fully protected monopoly model assumes, which narrows the gap between the two structures considerably.',
      ],
    ],
    'Perfect competition delivers a better STATIC outcome for consumers than monopoly in almost every case: lower prices, higher output, and both productive and allocative efficiency, against a monopolist’s restricted output and price above marginal cost. But the extent to which this makes perfect competition better OVERALL depends on whether the industry has significant economies of scale or requires large-scale innovation that only sustained profit can fund, and on how contestable the monopoly actually is. For most everyday markets with low fixed costs, perfect competition is clearly better for consumers; for markets defined by scale and innovation, a well-regulated or contestable near-monopoly can outperform an unrealistically fragmented, perfectly competitive alternative.',
    [
      'Static comparison: perfect competition = P = MC, zero economic profit; monopoly = P > MC, restricted output',
      'Deadweight welfare loss created by monopoly restricting output below the competitive level',
      'Economies of scale possible under monopoly where minimum efficient scale is large',
      'Dynamic efficiency: monopoly profit can fund research and development that competitive firms cannot',
      'Contestability: an uncontested monopoly behaves very differently from a contestable one',
    ],
    [
      'Depends on the size of fixed costs and economies of scale in the specific industry',
      'Depends on how much continuous innovation genuinely matters in that market',
      'Depends on the contestability of the monopoly rather than just its market share',
      'Judgement: perfect competition better for most markets; monopoly/near-monopoly can outperform where scale and innovation dominate',
    ],
  ),

  /* -------------------------------------------------------------- Oligopoly */
  Q091: A(
    [['game-theory', 'The prisoner’s dilemma payoff matrix for two firms choosing to collude or cheat on price. Show that mutual cheating is the dominant-strategy outcome for a single interaction, and use it to explain why the collusive outcome, though better for both, is hard to sustain without repeated interaction.']],
    'An oligopoly is a market dominated by a small number of large, interdependent firms, where each firm’s pricing decision has to account for how rivals are likely to react. Game theory - specifically the prisoner’s dilemma - is the tool economists use to model this interdependence and to explain why prices can still stay relatively stable even without any explicit agreement between firms.',
    [
      [
        'In a payoff matrix where two firms can either collude (both hold a high price) or cheat (undercut the agreed price), colluding gives both firms a good, shared payoff, but each firm can do even better by secretly cheating while the other holds the high price, capturing extra market share. Because both firms reason this way at once, and neither can be sure the other will not cheat, cheating is each firm’s DOMINANT strategy regardless of what the rival chooses - both end up cheating, landing on an outcome that is worse for both of them than if they had simply colluded.',
        'This is the defining feature of oligopoly: the FIRM cannot choose its best outcome in isolation, because the best move depends entirely on what the rival is expected to do. This mutual dependence, not a mechanical rule about demand curves, is what economists mean by interdependence in oligopoly.',
      ],
      [
        'In a single, one-off interaction, the dominant-strategy logic above means collusion should always break down. But real oligopolists interact repeatedly, period after period, and this changes the incentives: if Firm A cheats this period, Firm B can retaliate by cutting its own price next period, triggering a damaging price war that costs both firms for many periods afterwards. The credible threat of this retaliation can make sustaining a stable, higher price - tacit collusion, with no explicit illegal agreement - a rational strategy after all, which is a genuinely different, and better-supported, explanation for observed price stability in oligopoly than any single-period model can offer.',
        'This discipline depends on firms being able to observe a rival’s pricing quickly and reliably: in transparent markets (identical, widely-advertised prices, as at the petrol pump) cheating is spotted and punished almost immediately, which sustains the stable outcome; in markets with opaque or individually-negotiated pricing, cheating is harder to detect, so the threat of retaliation is weaker and the discipline is correspondingly less reliable.',
      ],
    ],
    null,
    [
      'Definition of oligopoly and interdependence between firms',
      'The prisoner’s dilemma payoff matrix: colluding gives both firms a good outcome, but cheating is individually tempting',
      'Cheating is the dominant strategy in a single interaction, so both firms cheat and both are worse off than if they had colluded',
      'Repeated interaction changes this: the threat of retaliation (a price war) can sustain tacit collusion over many periods',
      'Diagram: the payoff matrix showing the collusive outcome and the worse, mutual-cheat dominant-strategy outcome',
    ],
    [
      'The dominant-strategy result applies most cleanly to a single, one-off interaction',
      'Sustaining tacit collusion in practice depends on how easily and quickly a rival’s cheating can be observed and punished',
    ],
  ),

  Q092: A(
    [['game-theory', 'The prisoner’s dilemma payoff matrix, used to show why an oligopolist’s incentive to secretly undercut a rival’s price makes open price competition mutually destructive and cartels inherently unstable - set alongside the alternative of non-price competition, which does not carry the same risk of an immediate, matching response.']],
    'Firms in an oligopoly are interdependent: each must consider how its rivals will react before changing its price or output. This interdependence, modelled through game theory, shapes a genuine choice between competing on price, coordinating to avoid price competition altogether, and competing through non-price methods such as advertising, branding, loyalty schemes and product development.',
    [
      [
        'Price competition in an oligopoly carries the same risk the prisoner’s dilemma identifies: a firm that cuts its price can capture a large amount of custom only if rivals do not respond, but because every rival faces the identical temptation and can usually match a cut almost immediately, in practice a price cut is met, and a price war follows in which every firm earns less on every unit sold with little lasting gain in market share. Real-world price wars - periodic fuel or supermarket price-cutting episodes - tend to be short-lived precisely because all firms suffer this margin erosion, after which prices drift back up once firms recognise that competing on price alone achieves little beyond bidding down everyone’s profit.',
        'Because both cheating on price and matching a cut are individually rational moves within this game, sustained price competition tends to persist only where firms genuinely cannot coordinate to avoid it - a market with many firms and low concentration - or where one firm has a durable cost advantage letting it profitably hold a lower price that rivals cannot match without a loss.',
      ],
      [
        'The alternative to destructive price competition is coordination: firms may collude overtly, through an illegal cartel agreement to fix prices or restrict output, or tacitly, through price leadership, where a dominant firm sets the price and others simply follow without any direct communication, avoiding the legal risk an explicit agreement carries. Either route lets firms reach something closer to the jointly better, collusive outcome the payoff matrix identifies, rather than the mutually damaging outcome of both undercutting each other.',
        'Collusion of either kind is inherently fragile for exactly the reason the prisoner’s dilemma predicts: each member still has an individual incentive to secretly cheat by undercutting the agreed price to capture extra market share, so a cartel tends to break down over time unless deviation can be detected and punished quickly - which is also why competition authorities such as the UK’s Competition and Markets Authority actively investigate and fine firms for cartel behaviour, since without ongoing active reinforcement the arrangement is naturally unstable.',
      ],
      [
        'Non-price competition - advertising, branding, loyalty schemes, product innovation and quality improvements - offers a third route that avoids both the instability of collusion and the mutual damage of a price war, since a rival cannot "match" a rebranding or a new product feature in the same instantaneous way it can match a price cut. This is why oligopolistic markets - supermarkets, mobile networks, airlines - are so often characterised by extensive advertising and loyalty programmes rather than sustained price competition or visible collusion.',
        'Non-price competition still carries a cost - advertising and research and development both consume resources that could otherwise have funded lower prices - and it is a slower, less certain way of gaining market share than a price cut would be, since building brand loyalty or developing a genuinely differentiated product takes time and is not guaranteed to succeed.',
      ],
    ],
    'Firms in an oligopoly are more likely to avoid open price competition than to rely on it, precisely because the game-theoretic incentive to undercut a rival makes sustained price competition mutually destructive and any collusive alternative to it fragile without active reinforcement. Whether the result is a fragile cartel, stable tacit price leadership, or a shift to non-price competition depends on how easily the product can be differentiated and how easily rivals can observe and punish deviation: near-homogeneous goods (fuel, some raw materials) see the sharpest price wars and the strongest pressure towards tacit collusion or price leadership, while differentiable goods (mobile phones, breakfast cereals) see firms shift the competition towards branding and product development instead, which matches the pattern observed across most real oligopolistic markets.',
    [
      'Interdependence and the prisoner’s dilemma: price competition risks being matched, eroding margins for all firms',
      'Overt collusion (cartels) and tacit collusion (price leadership) as coordination routes to avoid a price war',
      'Collusion is inherently unstable - each member retains an individual incentive to cheat - unless deviation is detected and punished quickly',
      'Non-price competition (advertising, branding, loyalty, product development) as a third route avoiding both risks',
      'Cost of non-price competition and the time it takes to build brand loyalty or differentiation',
    ],
    [
      'Depends on how easily the specific product can be differentiated',
      'Depends on how easily rivals can observe and punish a deviation from an agreed or expected price',
      'Cartels are actively investigated and fined by competition authorities, adding a further real-world constraint on collusion',
      'Judgement: non-price competition or tacit coordination dominate for most real oligopolies; open price competition is rare and short-lived',
    ],
  ),

  /* -------------------------------------------------------------- Monopsony */
  Q093: A(
    [['monopsony', 'A labour market with a single employer: the marginal cost of labour (MCL) above the labour supply curve (AC of labour), the firm hiring where MCL meets the demand for labour (MRP), and the wage read off the supply curve at that quantity - below both the competitive wage and the marginal revenue product of the marginal worker.']],
    'A monopsony is a market with a single (or dominant) buyer - in a labour market, a single employer. A monopsony employer is able to pay a wage below the level that would exist in a competitive labour market with many employers.',
    [
      [
        'In a competitive labour market, a firm is a wage-taker: it can hire as many workers as it wants at the going market wage, so its marginal cost of labour equals the wage rate, and it hires up to the point where the marginal revenue product of labour equals that wage. A monopsony employer, by contrast, faces the entire upward-sloping labour supply curve for the market: to attract each additional worker, it must raise the wage it offers, and because that higher wage must be paid to ALL its existing workers as well as the new one (assuming a single wage rate), its marginal cost of labour rises faster than, and lies above, the average cost (the labour supply curve).',
        'A profit-maximising monopsonist hires workers up to the point where marginal cost of labour equals the marginal revenue product of labour, but then only has to pay the WAGE read off the labour supply curve at that quantity of workers, which is lower than the marginal cost of labour used to determine how many workers to hire, and lower than the wage a competitive labour market would have set at that same employment level - the gap between the two is the monopsony employer’s wage-setting power.',
      ],
      [
        'This wedge between MCL and the labour supply curve does not only lower the wage; it also lowers the level of EMPLOYMENT. Because the monopsonist hires only up to where MCL = MRP rather than where the supply curve (average cost) meets MRP, fewer workers are hired than a competitive labour market operating on the same demand for labour would employ. A monopsonist therefore restricts both the price of labour and the quantity of jobs below the competitive level, in exactly the way a product-market monopoly restricts both price and output.',
        'How much this matters depends on how much genuine monopsony power actually exists. A single large employer in an isolated local labour market - a hospital trust for a specific specialism in a town with no comparable alternative employer - has real wage-setting power of this kind. In a national, highly mobile occupation with many competing employers, however, workers can simply move to whichever firm offers the best wage, which erodes any one employer’s monopsony power almost entirely.',
      ],
    ],
    null,
    [
      'Definition of monopsony (single or dominant buyer, here a single employer)',
      'MCL lies above the labour supply curve (AC of labour) because a higher wage must be paid to all workers',
      'Diagram: monopsony hires where MCL = MRP of labour, but pays the wage read off supply at that quantity',
      'Explanation of why the resulting wage is below both the competitive wage and the workers’ marginal revenue product',
      'Employment, as well as the wage, is restricted below the competitive level - both price and quantity effects',
    ],
    [
      'Depends on how few alternative employers actually exist for these workers (genuine labour immobility)',
      'A national, mobile occupation with many competing employers erodes monopsony power almost entirely',
    ],
  ),

  Q094: A(
    [['monopsony', 'A monopsony labour market with a National Minimum Wage set between the monopsony wage and the competitive wage. Show that, unlike in a competitive market, the minimum wage here can raise employment as well as the wage, up to the point where the minimum wage equals the competitive wage - beyond that point, a further rise reduces employment as in a normal competitive market.']],
    'A monopsony employer, facing the whole upward-sloping labour supply curve, hires fewer workers at a lower wage than a competitive labour market would. Whether a National Minimum Wage (NMW) raises employment here depends critically on where the minimum wage is set relative to the monopsony and the competitive wage.',
    [
      [
        'Without a minimum wage, the monopsonist’s marginal cost of labour lies above the labour supply curve because a higher wage must be paid to every existing worker as well as any new one, so the firm restricts employment to the point where marginal cost of labour equals the marginal revenue product of labour, and pays the correspondingly lower wage read off the supply curve. Introducing a National Minimum Wage set ABOVE this monopsony wage but AT OR BELOW the wage that would prevail in a genuinely competitive market changes the firm’s incentives: up to the minimum wage, the firm can hire additional workers at a FIXED cost (the minimum wage itself) rather than a rising marginal cost, effectively flattening its marginal cost of labour curve at the level of the minimum wage.',
        'Because the firm’s marginal cost of labour is now lower at every level of employment up to the minimum wage than it was before, the firm’s profit-maximising hiring decision - where marginal cost of labour equals marginal revenue product - now occurs at a HIGHER quantity of workers than under monopsony alone, so both the wage AND the level of employment can rise together, unlike in a competitive labour market where a minimum wage above the equilibrium wage always creates unemployment by moving along the labour demand curve.',
      ],
      [
        'This result depends entirely on the minimum wage being set within a specific range: if the National Minimum Wage is set ABOVE the wage that would prevail in a genuinely competitive labour market for these workers, the analysis reverts to the standard competitive case, where the minimum wage acts as a price floor above equilibrium, and each further rise reduces the quantity of labour demanded, creating unemployment exactly as basic minimum wage theory predicts.',
        'The result also depends on the employer genuinely having monopsony power in the first place - a single major employer in a small town, for example - rather than merely being a large employer among many in an otherwise competitive local labour market, and correctly identifying which specific labour markets are genuinely monopsonistic is not straightforward for a policymaker in practice.',
      ],
      [
        'Even where the range is set correctly, the size of the employment gain is limited by how much monopsony power the employer actually had to begin with: an employer only mildly below the competitive wage has little room for the minimum wage to raise employment before reaching the competitive wage itself, whereas an employer with severe monopsony power (a very wide gap between the monopsony and competitive wage) has much more room for a well-set minimum wage to raise both pay and jobs together.',
        'A single, nationally-set minimum wage also cannot be perfectly tailored to every local labour market’s own competitive wage, so the same national rate that raises employment in a strongly monopsonistic town may already be above the competitive wage in a labour market with several competing employers, creating the standard unemployment effect there even as it helps workers elsewhere.',
      ],
    ],
    'A National Minimum Wage can raise both the wage and the level of employment in a genuinely monopsonistic labour market, which is the opposite of the standard competitive-market prediction that a minimum wage above equilibrium always costs jobs. This result is real but conditional: it depends on the minimum wage being set within the specific range between the monopsony wage and the competitive wage, on the employer actually having monopsony power to begin with, and on a single national rate happening to suit the specific local labour market it is applied to - a rate that helps employment in a strongly monopsonistic town can still cost jobs in a more competitive one.',
    [
      'Monopsony wage and employment are below the competitive level without intervention',
      'A minimum wage set between the monopsony wage and the competitive wage flattens the firm’s MCL curve',
      'This can raise both the wage and employment simultaneously, unlike in a competitive labour market',
      'Diagram showing the range over which employment rises, and the point (the competitive wage) beyond which it would fall',
      'The size of the employment gain depends on how much monopsony power existed to begin with',
    ],
    [
      'Result depends critically on the minimum wage being set within the correct range',
      'Set above the competitive wage, the standard trade-off with unemployment returns',
      'Requires the employer to genuinely have monopsony power - not straightforward to identify in practice',
      'A single national rate cannot be tailored to every local labour market’s own competitive wage',
      'Judgement: can increase employment, but only if correctly targeted at genuinely monopsonistic labour markets and set within the right range',
    ],
  ),

  /* ----------------------------------------------------------- Contestability */
  Q095: A(
    [],
    'A contestable market is one in which the threat of new firms entering disciplines the pricing and output decisions of existing firms, even if the market currently has only one or a few firms in it.',
    [
      [
        'The first characteristic is low barriers to entry and exit, particularly low sunk costs - costs that cannot be recovered if a firm decides to leave the market (specialised equipment with no resale value, for example). Where sunk costs are low, a potential entrant faces little risk in trying the market, because it can exit again without a significant loss if the venture does not succeed.',
        'A market can still have few sunk costs yet remain uncontestable if some other barrier - a licence, control of an essential input - blocks entry regardless, so low sunk costs alone do not guarantee contestability.',
      ],
      [
        'The second characteristic is the potential for "hit and run" entry: a new firm can enter quickly, undercut the incumbent’s price while it is set above the competitive level, take a share of the abnormal profit, and leave again just as quickly if the incumbent responds by cutting its own price back down. It is the mere THREAT of this happening, not entry actually needing to occur, that disciplines the incumbent’s pricing.',
        'This only works if the incumbent cannot respond faster than the entrant can exit; a market where price cuts take effect immediately gives a hit-and-run entrant far less time to profit before being undercut in turn.',
      ],
    ],
    null,
    [
      'Definition of a contestable market (the threat of entry disciplines incumbent behaviour)',
      'Low barriers to entry and exit, particularly low sunk costs',
      'Hit-and-run entry and the role of the mere threat of entry rather than actual entry',
    ],
    [
      'Low sunk costs alone do not guarantee contestability if some other barrier (a licence, control of an essential input) blocks entry regardless',
      'Hit-and-run entry only disciplines price if the incumbent cannot respond faster than the entrant can exit',
    ],
  ),

  Q096: A(
    [['limit-pricing', 'An incumbent firm’s cost and demand curves showing a limit price set below the profit-maximising monopoly price, chosen specifically to keep the incumbent’s economic profit low enough that a potential entrant, facing at least the same costs, could not enter and earn a profit at that price.']],
    'Contestability describes how far the mere threat of new firms entering a market disciplines the pricing and output decisions of firms already in it, largely independent of how many firms currently compete in that market.',
    [
      [
        'In a highly contestable market, even a single incumbent firm cannot safely charge the profit-maximising monopoly price, because doing so would signal a large potential profit to any firm considering entry. Facing low sunk costs and the ease of hit-and-run entry, the incumbent has a strong incentive to set a LIMIT PRICE - a price deliberately kept below the monopoly price, low enough that a potential entrant, with broadly similar costs, could not expect to enter and earn a profit. The consumer benefits from this lower, limit price without the number of firms in the market necessarily changing at all.',
        'The size of the benefit to consumers from increased contestability, rather than from an increased NUMBER of firms, depends on how credible the threat of entry actually is: contestability disciplines price only to the extent that potential entrants genuinely believe they could enter profitably and exit again without a large loss if it did not work out, which in turn depends on how low sunk costs and other barriers to entry genuinely are in that market.',
      ],
      [
        'Increasing contestability can lower prices even where the actual number of firms stays exactly the same, which is precisely why competition authorities sometimes focus policy on REMOVING barriers to entry - licensing requirements, planning restrictions, access to essential infrastructure - rather than only on the number of firms currently present, since the number of firms is not, on its own, a reliable guide to how competitively a market is actually behaving.',
        'This is not guaranteed to work in every market: where genuine barriers to entry remain high regardless of policy (a natural monopoly with enormous fixed infrastructure costs, or a market protected by patents), increasing contestability in the abstract achieves little, because the underlying barrier that deters entry is not actually being addressed by making entry theoretically easier elsewhere.',
      ],
      [
        'The extent to which increasing contestability lowers prices, even without more firms, therefore depends on whether the specific barriers being removed are the ones that were genuinely deterring entry in that market. Where sunk costs and regulatory barriers were the binding constraint, increasing contestability has visibly lowered prices without necessarily producing large increases in the number of active firms at any one time: the deregulation of European air routes from the 1990s let low-cost entrants such as Ryanair and easyJet threaten incumbent national carriers on individual routes, and average fares on those routes fell even where an incumbent retained the largest share.',
        'Where the binding constraint is a natural cost advantage of incumbency - economies of scale so large that only one or two firms could ever operate efficiently - increasing contestability in name only, without addressing that underlying cost structure, is unlikely to produce a genuine and lasting fall in prices, since a would-be entrant still faces the same fundamental cost disadvantage regardless of how "contestable" the market is formally made to look.',
      ],
    ],
    'Increasing the contestability of a market is likely to lead to lower prices for consumers even without the number of firms changing, because it is the credible THREAT of entry, not the number of incumbents, that disciplines pricing through the risk of hit-and-run entry and limit pricing. The extent to which this holds depends on whether the barriers being lowered were genuinely the ones deterring entry: where regulatory or sunk-cost barriers were binding, increasing contestability delivers real, lasting price falls; where a natural, scale-based cost advantage is the true barrier, contestability alone is unlikely to be sufficient, and the number of firms and the underlying cost structure still matter.',
    [
      'Definition of contestability, hit-and-run entry, and low sunk costs',
      'Limit pricing as the mechanism by which an incumbent responds to increased contestability',
      'Contestability can lower prices without increasing the number of firms',
      'Policy focus on removing barriers to entry (licensing, access to infrastructure) rather than only firm numbers',
    ],
    [
      'Depends on whether the credible threat of entry is genuinely believed by potential entrants',
      'Ineffective where the true barrier is a natural, scale-based cost advantage rather than a removable regulatory one',
      'Judgement: contestability usually lowers prices, but only where it addresses the barrier that was actually binding',
    ],
  ),

  /* --------------------------------------------------------- Monopoly */
  Q113: A(
    [['monopoly', 'A profit-maximising monopolist at MC = MR, priced off AR at Pm and output Qm - above cost, below the competitive output Qc - with the supernormal profit rectangle shaded. Use it to show the profit a barrier to entry is protecting.']],
    'A monopoly is a market dominated by a single firm with significant market power. Unlike a firm in perfect competition, a monopolist protected by barriers to entry can go on earning supernormal profit in the long run rather than having it competed away.',
    [
      [
        'A profit-maximising monopolist produces where MC = MR, at Qm, and charges the price read off its AR curve at that output, Pm - above average cost, so it earns the shaded supernormal profit rectangle. In a competitive market this profit would attract new entrants, whose extra supply would drive the price down until only normal profit remained, exactly as it does under perfect competition. A monopolist avoids this because barriers to entry - a patent or licence, control of an essential input, or economies of scale large enough that only one firm can operate efficiently - stop rival firms entering to compete the profit away.',
        'How long the profit persists depends on how durable the specific barrier actually is: a patent expires after a fixed term (twenty years for a UK or EU patent), after which the profit is competed away once rivals can legally enter and copy the product, whereas a barrier built on genuine economies of scale - a natural monopoly - can persist indefinitely, for as long as the minimum efficient scale of production remains large relative to the size of the market.',
      ],
      [
        'A different route to the same outcome is where the barrier is not legal or cost-based but built on consumer behaviour: control of a scarce, essential input, or sufficiently strong brand loyalty, can keep a market effectively closed to new entrants even where sunk costs are genuinely low and entry would otherwise be easy, because a new entrant cannot simply match an established brand’s reputation or an incumbent’s exclusive access to the input it depends on.',
        'A barrier built purely on brand loyalty is arguably the least durable of all: it depends on the incumbent continuing to deserve that loyalty, and can erode if quality or service declines relative to a genuinely differentiated new entrant, or if a disruptive new technology changes what consumers value, in a way a patent’s fixed legal term or a natural monopoly’s cost structure does not.',
      ],
    ],
    null,
    [
      'Definition of monopoly and of a barrier to entry',
      'Profit-maximising output where MC = MR, priced off AR above average cost - the supernormal profit rectangle',
      'Diagram showing Qm/Pm and the supernormal profit that a barrier to entry protects',
      'Barriers protecting the profit: patents/licences, control of an essential input, economies of scale (natural monopoly)',
      'A second route: brand loyalty or control of a scarce input, distinct from a legal or cost-based barrier',
    ],
    [
      'Persistence depends on the durability of the specific barrier - a patent expires; a natural monopoly’s cost advantage need not',
      'A barrier built on brand loyalty alone is the least durable, since it depends on the incumbent continuing to deserve it',
    ],
  ),

  Q114: A(
    [['monopoly', 'One diagram with a shared MC curve: the allocatively efficient, competitive outcome where demand meets MC (Qc), and the monopolist’s profit-maximising outcome where MC = MR (Qm, priced off AR above MC), with the deadweight welfare loss shaded between Qm and Qc, and the supernormal profit rectangle shaded above cost at Qm.']],
    'A monopoly is a market dominated by a single firm with significant market power, protected by barriers to entry. Whether this harms consumers depends on weighing the static loss from restricted output and higher prices against any efficiency the same market power might also make possible.',
    [
      [
        'A profit-maximising monopolist restricts output to Qm, below the allocatively efficient competitive output Qc, and charges Pm, above marginal cost. Consumers therefore pay more and buy less than a competitive market serving the same demand would deliver, and the shaded deadweight welfare loss between Qm and Qc represents genuine trades - units a competitive market would have supplied, at a price equal to their true cost - that the monopolist deliberately withholds to protect its price.',
        'The size of this harm depends on how price-inelastic demand for the good is: the more essential the good and the fewer the substitutes available - a life-saving drug still under patent, or a monopoly water supplier - the larger the harm to consumer welfare from the same proportional restriction in output, since consumers have nowhere else to turn and must simply pay the higher price or go without.',
      ],
      [
        'Beyond the static price and output effect, a firm protected from competitive pressure has weaker pressure to keep its own costs down or maintain quality and service standards, a form of organisational slack known as X-inefficiency that a firm facing constant competitive discipline could not as easily afford. This compounds the harm to consumers beyond what the diagram alone shows, since costs - and therefore, potentially, prices - are higher than they need to be even before the monopoly mark-up is added.',
        'This depends on whether the monopoly faces any competitive discipline at all: a monopoly that remains genuinely contestable, with low sunk costs and a credible threat of entry, still has an incentive to keep its costs down even without an actual rival present, which limits how much X-inefficiency can develop; an uncontested monopoly, protected by high barriers on every side, faces much weaker such discipline.',
      ],
      [
        'A monopoly is not always harmful, however. Significant economies of scale - a natural monopoly - can let a single large firm produce at a genuinely lower average cost than many small, competing firms could sustain, and part of this saving can be passed on to consumers as a price lower than a fragmented market would achieve. Sustained supernormal profit can also fund research and development that a competitive firm, earning only normal profit in the long run, could not afford, potentially delivering dynamic efficiency - better products and falling costs over time - that benefits consumers even where the static picture looks worse.',
        'Whether this offsets the static harm depends on the specific industry and on regulation: the case is strongest where economies of scale are large relative to the market and continuous innovation genuinely matters, such as pharmaceuticals or network infrastructure, and weakest where the good is simple and homogeneous and could easily be supplied competitively. Effective regulation - price capping such as an RPI-X formula, a windfall tax on excess profit, or ongoing competition-authority scrutiny - can also capture much of the potential harm without needing to break the monopoly up at all.',
      ],
    ],
    'A monopoly is often harmful to consumers in the static sense the diagram shows: higher prices, lower output, a real deadweight welfare loss, and the risk of X-inefficiency on top, with the harm largest for essential goods with few substitutes. It is not always harmful: where genuine economies of scale or the funding needs of research and development make a single large firm more efficient than fragmented competition would be, and where regulation constrains the worst pricing or quality abuses, consumers can be no worse off, or even better off, than under a costlier but more fragmented alternative. The right test is case by case - the scale of the potential efficiency gain and the strength of the regulation applied - rather than a blanket rule that monopoly always harms consumers.',
    [
      'Definition of monopoly and the profit-maximising equilibrium (MC = MR, price above cost)',
      'Diagram showing Qm/Pm against the competitive benchmark Qc, and the deadweight welfare loss between them',
      'Static harm: higher prices, restricted output, deadweight loss - larger where demand is more inelastic',
      'X-inefficiency: weaker cost discipline without competitive pressure, though contestability can limit this',
      'Counter-case: economies of scale (natural monopoly) and profit-funded dynamic efficiency/innovation',
      'Regulation (price capping, windfall taxes, competition-authority scrutiny) as a way of capturing the harm without a break-up',
    ],
    [
      'Harm from restricted output/higher prices depends on how price-inelastic demand for the good is',
      'X-inefficiency depends on whether the monopoly remains at least contestable',
      'The efficiency counter-case is strongest where economies of scale and innovation genuinely matter',
      'Judgement: harmful case by case, depending on the scale of potential efficiency gains and the strength of regulation, not automatically',
    ],
  ),

  /* ----------------------------------------------- Monopolistic Competition */
  Q115: A(
    [['monopolistic-competition', 'A monopolistically competitive firm’s long-run equilibrium: AR = D tangent to AC, but on the falling section of the AC curve rather than at its minimum - normal profit only, and the gap between this output and min AC labelled as excess capacity.']],
    'A monopolistically competitive market has many firms selling differentiated products, with free entry and exit, sitting between perfect competition and monopoly on the spectrum of market structures.',
    [
      [
        'The first characteristic is product differentiation: each firm’s product is a close, but not perfect, substitute for its rivals’ - through branding, features, quality or location - which gives the firm a downward-sloping demand curve (AR = D) rather than perfect competition’s horizontal one, since it can raise its price a little without losing every customer, some of whom prefer its particular version of the product.',
        'How much pricing power this actually gives a firm varies hugely by market: a hairdresser or a local café can differentiate significantly through location and personal service, while a market for a near-identical commodity leaves little genuine room for differentiation regardless of how much a firm spends on branding.',
      ],
      [
        'The second characteristic is free entry and exit: because there are no significant barriers, any supernormal profit earned by existing firms in the short run attracts new entrants offering their own differentiated variant, which shifts demand for each existing firm’s product to the left until, in the long run, price settles at average cost and only normal profit remains - the same zero-economic-profit outcome as perfect competition, but reached while the firm still faces a downward-sloping demand curve rather than a horizontal one.',
        'Because this tangency between AR and AC falls on the downward-sloping part of the AC curve rather than at its minimum, the firm produces at a smaller scale than would minimise its own costs - a form of productive inefficiency known as excess capacity that a genuinely homogeneous, perfectly competitive market would not show.',
      ],
    ],
    null,
    [
      'Definition of monopolistic competition: many firms, differentiated products, free entry and exit',
      'Product differentiation gives each firm a downward-sloping demand curve, unlike perfect competition',
      'Free entry drives economic profit to zero in the long run, as in perfect competition',
      'Diagram showing the long-run tangency of AR and AC on the falling section of AC - excess capacity',
    ],
    [
      'The degree of differentiation, and therefore pricing power, varies hugely between markets',
      'The tangency falling short of minimum AC is a genuine, though usually modest, productive inefficiency (excess capacity)',
    ],
  ),

  Q116: A(
    [['monopolistic-competition', 'The long-run equilibrium: AR = D tangent to AC on its falling section (excess capacity, productive inefficiency) and the profit-maximising output where MC = MR sitting to the left of where AR would meet MC (price above marginal cost, allocative inefficiency) - both inefficiencies on one diagram.']],
    'Firms in a monopolistically competitive market reach a long-run equilibrium through free entry and exit, but whether that equilibrium is economically efficient depends on comparing it against the productive and allocative efficiency benchmarks a perfectly competitive market would achieve.',
    [
      [
        'In the long run, free entry drives economic profit to zero, so AR becomes tangent to AC - but because AR is downward-sloping rather than horizontal, this tangency occurs on the falling section of the AC curve, to the left of its minimum point. The firm therefore produces less than the output that would minimise its average cost: excess capacity, and a genuine form of productive inefficiency that would not arise in perfect competition, where free entry drives the tangency to exactly the minimum of AC.',
        'How large this inefficiency is depends on how steeply downward-sloping the firm’s own demand curve actually is: the more differentiated the product, the steeper and less elastic its demand, and the further the tangency point sits from AC’s minimum - a market with only mild differentiation ends up looking almost as productively efficient as perfect competition.',
      ],
      [
        'The same equilibrium is also allocatively inefficient: because AR is downward-sloping and MR sits below it, the profit-maximising output where MC = MR occurs at a lower quantity than where AR would meet MC, so price ends up above marginal cost at equilibrium - resources are under-allocated to this good relative to what consumers would be willing to pay for one more unit at its true cost of production.',
        'This allocative inefficiency is nonetheless smaller than under monopoly: free entry means the firm earns only normal profit in the long run rather than a monopolist’s persistent supernormal profit, and the presence of many close substitutes keeps the firm’s own demand relatively elastic, since it cannot push price far above marginal cost without losing significant custom to a rival’s close substitute.',
      ],
      [
        'This technical inefficiency has to be weighed against the genuine benefit of product variety that a more narrowly efficient, homogeneous, perfectly competitive market would not provide: real markets such as restaurants, hairdressers and high-street retail thrive on exactly the differentiation that causes the excess capacity and allocative gap, and consumers evidently value the resulting choice enough to sustain these industries rather than all switching to a single, cheaper, undifferentiated alternative.',
        'Whether this trade-off is worthwhile is ultimately a normative judgement about how much consumers value variety relative to the efficiency loss it causes: for a good where consumers place little value on differentiation, the inefficiency looks like pure waste, while for a good where variety is itself part of what is being bought, it is better understood as the real cost of providing something consumers genuinely want than as a market failure needing correction.',
      ],
    ],
    'Firms in a monopolistically competitive market are not productively or allocatively efficient in the long run in the strict, textbook sense: free entry only drives profit to normal, not price down to minimum average cost or marginal cost, leaving both excess capacity and a price-above-marginal-cost gap. The extent of this inefficiency is usually modest, since a large number of close substitutes keeps demand relatively elastic and limits how far any one firm’s price can rise above its costs, and it has to be weighed against the genuine value consumers place on product variety, which a more narrowly efficient homogeneous market could not supply. The technical inefficiency is real, but it may be a reasonable price for genuine consumer choice rather than a market failure calling for correction.',
    [
      'Long-run equilibrium: free entry drives economic profit to zero (AR tangent to AC)',
      'Productive inefficiency: the tangency falls short of minimum AC because AR is downward-sloping - excess capacity',
      'Allocative inefficiency: profit-maximising output (MC = MR) leaves price above marginal cost',
      'Diagram showing both the productive and allocative inefficiency on one set of axes',
      'Comparison with monopoly: the allocative gap is smaller here, since entry limits profit and rivals keep demand elastic',
    ],
    [
      'Size of the productive inefficiency depends on how steeply downward-sloping the firm’s own demand curve is',
      'Size of the allocative inefficiency is limited by free entry and the presence of close substitutes',
      'The inefficiency has to be weighed against the genuine consumer value of product variety',
      'Judgement: a real but usually modest technical inefficiency, arguably a reasonable trade-off for consumer choice',
    ],
  ),
}
