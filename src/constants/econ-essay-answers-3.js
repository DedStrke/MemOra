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
        'A purely planned economy loses the price mechanism altogether, not just in the sectors where the market would have failed. The planner then has no efficient way to allocate resources between millions of competing, ordinary uses - which is why command economies produced shortages and surpluses even in everyday consumer goods markets that had no natural market failure to correct in the first place. The Soviet Union is the standard case, with persistent queues for ordinary goods alongside warehouses of output nobody wanted, and China’s move after 1978 to let prices allocate resources in agriculture and light industry, followed by one of the fastest sustained rises in output in history, is the same point in reverse.',
      ],
      [
        'A mixed economy tries to keep the price mechanism as the default allocator across the vast majority of markets, where it does the informational work no planner could replicate, while using government to intervene only where a specific, identifiable failure exists: a Pigouvian tax on a negative externality, direct provision of a genuine public good, competition policy against an abuse of market power. The UK is a recognisable example of the pattern: most goods are allocated by price, while the NHS provides healthcare directly because information gaps and equity concerns make the market outcome unacceptable, and the CMA polices market power in the sectors left to the price mechanism.',
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

  /* --------------------------------- Specialisation and the Division of Labour */
  Q119: A(
    [],
    'Specialisation and the division of labour let workers, firms and countries concentrate on a narrow range of tasks rather than producing everything they need themselves. Money, acting as a medium of exchange, is what makes an economy built on this kind of specialisation actually workable.',
    [
      [
        'Without money, a highly specialised economy would rely on barter, which requires a "double coincidence of wants": a baker needing shoes must find a shoemaker who specifically wants bread, in the right quantity, at the same time. This becomes almost impossible once workers are divided into narrow, specific occupations, since each specialist produces only one thing and needs many different things in return. Money, as a medium of exchange, removes this problem entirely: a specialist sells their output for money and then uses that money to buy whatever they need from anyone else, without ever needing the other party to want their specific product back.',
        'This benefit is largest exactly where specialisation is most extreme - a modern economy with millions of highly specific occupations - and would matter far less in a simple, largely self-sufficient economy where each household already produces most of what it consumes itself.',
      ],
      [
        'Money’s other functions reinforce the same benefit. As a unit of account, it lets the specialised output of completely different occupations - an hour of a solicitor’s time, a tonne of steel, a haircut - be compared on a single scale, so resources flow to their most valuable use exactly as the price mechanism requires. As a store of value, it lets a specialist who earns now and wants to spend later hold the proceeds of their labour without them perishing, and as a method of deferred payment it lets specialised trade happen on credit, before payment is actually made.',
        'These functions work well only if money is genuinely trusted to hold its value: during a period of high or hyperinflation, money’s usefulness as a store of value and a method of deferred payment breaks down, and economies have been known to partially revert towards barter or a more stable foreign currency in extreme cases, showing that these functions are not automatic but depend on monetary stability.',
      ],
    ],
    null,
    [
      'Definition of specialisation and the division of labour',
      'The double coincidence of wants problem that barter creates once workers are highly specialised',
      'Money as a medium of exchange solves this, letting specialists trade without needing a matching want',
      'Money’s other functions (unit of account, store of value, method of deferred payment) reinforce the benefit',
    ],
    [
      'The benefit is largest where specialisation is most extreme; smaller in a largely self-sufficient economy',
      'These functions depend on monetary stability - high inflation undermines money as a store of value and method of deferred payment',
    ],
  ),

  Q120: A(
    [['comparative-advantage', 'Two countries with differently-sloped PPFs specialising where opportunity cost is lower and consuming beyond their own frontier by trading. This is the economy-wide half of the argument: the same logic that makes dividing labour within a factory productive makes specialising between countries productive.']],
    'Specialisation means concentrating on producing a narrow range of goods or services; the division of labour breaks a production process into smaller, repeated tasks performed by different workers. Both are central to how a modern economy achieves the output it does, but neither is beneficial without limit.',
    [
      [
        'Adam Smith’s pin factory is the classic illustration: dividing a complex task into many simple, repeated steps massively raises output per worker compared with each worker making a whole pin from start to finish, because repetition builds skill and speed, workers avoid the time lost switching between tasks, and machinery can be designed around one narrow, repeated step. This is the foundation of virtually all modern mass production, from car assembly lines to modern service-sector call centres organised around specific, narrow roles. The modern version operates across borders as much as within a factory: an Apple iPhone is designed in California, built from components made by specialist firms in Korea, Taiwan and Japan, and assembled in China, with no single country carrying out more than its own narrow step.',
        'The productivity gain from further dividing labour eventually runs into diminishing returns: beyond a certain point, tasks become so narrow that coordinating an ever-larger number of specialised workers becomes costly in itself, and the extra output gained from dividing the process still further shrinks.',
      ],
      [
        'The same logic applies at the level of a whole economy through international trade: a country that specialises according to its comparative advantage can trade for the goods it does not produce itself, raising total output and living standards beyond what self-sufficiency could achieve, exactly as the theory of comparative advantage predicts.',
        'Over-specialisation carries a real risk at this level too: an economy or region that specialises very narrowly - a single export commodity, a single industry town - becomes highly exposed to a demand shock or a shift in comparative advantage, and workers whose skills are narrowly specific to a declining industry face exactly the occupational immobility that is a genuine, persistent cause of unemployment. Zambia, where copper has long accounted for the bulk of export earnings, has seen its public finances swing with a single world price it does not control, and the former British coal and steel towns show the same effect at regional level, with unemployment persisting for decades after the industry that defined them closed.',
      ],
      [
        'Extreme division of labour also carries a human cost: highly repetitive, narrowly-divided work can be monotonous and demotivating, which can reduce job satisfaction and, over time, the quality of output if workers disengage from work they find meaningless - part of why many modern employers have moved towards job rotation, enrichment and teamwork rather than the most extreme, assembly-line division of labour that early twentieth-century mass production pursued.',
        'Whether this human cost outweighs the productivity benefit depends on the specific job and how it is managed: modern automation has taken over many of the most repetitive, dehumanising tasks that used to define extreme division of labour, shifting human workers towards higher-skilled, more varied roles, which can raise both productivity and worker satisfaction together rather than trading one off against the other.',
      ],
    ],
    'Specialisation and the division of labour are, on balance, highly beneficial to a modern economy: they underpin the productivity gains behind mass production and the gains from trade that a self-sufficient economy could never achieve on its own. The benefit is not unlimited - coordination costs eventually offset further division within a single production process, and over-specialisation exposes workers, firms, regions and countries to real risk when a narrow skill or export becomes obsolete or its market shifts, which is exactly the case for a genuinely diversified economy rather than one dependent on a single specialism. The extent of the benefit therefore depends on being specialised enough to capture the productivity and trade gains without being so narrowly specialised that a single shock threatens the whole basis of that specialism.',
    [
      'Definition of specialisation and the division of labour, with Adam Smith’s pin factory example',
      'Division of labour raises productivity through repetition, skill-building and avoiding time lost switching tasks',
      'Diminishing returns to further division as coordination costs rise',
      'Specialisation and comparative advantage raise output and living standards through trade',
      'Over-specialisation risk: exposure to demand shocks, and occupational immobility when a narrow skill becomes obsolete',
      'Human/social cost of extreme division of labour: monotony, disengagement, and the role of automation in offsetting it',
    ],
    [
      'Coordination costs eventually offset further gains from dividing a single production process further',
      'Over-specialisation risk depends on how narrowly a worker, firm, region or country has specialised',
      'The human cost of monotonous work depends on how the job is managed and how far automation has reduced repetitive tasks',
      'Judgement: beneficial while specialisation captures productivity and trade gains without excessive concentration risk',
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
        'Where supply is price inelastic - a good with limited spare capacity or slow-to-expand production, such as a scarce raw material - an indirect tax causes only a small fall in the equilibrium quantity traded. The tax revenue raised is then close to the tax rate multiplied by the largely unchanged quantity, so PES lets the government predict that this tax will raise a predictable, substantial amount of revenue with only a small effect on output. Land is the limiting case, with a supply that is close to perfectly inelastic, which is precisely why taxes on it are so hard for the owner to escape.',
        'This makes goods with inelastic supply an efficient revenue-raising base, but only in the short run: if the tax also discourages the long-run investment that would otherwise have expanded capacity, the government’s prediction based on short-run PES may overstate future revenue once producers have had time to respond by contracting supply further. The Energy Profits Levy on North Sea oil and gas from 2022 is exactly this argument being had in public: output from existing fields could not fall quickly, so the levy raised substantial revenue at once, while producers argued it would deter the exploration and development that determines supply years later, and the government felt obliged to attach an investment allowance in response.',
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
        'Demerging can improve productive efficiency directly: each resulting company’s management can concentrate resources, attention and capital allocation on a single business it understands well, rather than dividing attention across unrelated divisions inside one head office. This is most likely to raise efficiency where the original conglomerate genuinely suffered from diseconomies of scale in management - slow decision-making, unclear accountability, or a head office with limited expertise across all its divisions. GSK’s separation of its consumer health business as Haleon in 2022 was justified in exactly these terms, on the argument that running a research-driven pharmaceutical business and a consumer brands business demands different skills, different time horizons and different investors.',
        'The efficiency gain depends on management in each new, smaller company actually delivering the sharper focus the demerger promised - simply being smaller does not guarantee better management, and a poorly run division does not automatically improve just because it is now independent.',
      ],
      [
        'Against this, a conglomerate that shared a distribution network, a research function, or the ability to shift cash from a strongly performing division to fund investment in a struggling one loses that internal capital allocation flexibility once the businesses are separated. Each demerged company must now raise its own finance externally, at its own cost of capital, which can be a genuine loss of efficiency if the internal transfer had previously funded investment more cheaply than the external capital market would.',
        'Demerging also creates one-off restructuring costs - separating shared systems, duplicating functions such as finance and HR that were previously centralised - which are a real resource cost, so any efficiency gain from sharper focus has to be weighed against this transitional cost before it shows up as a net improvement.',
      ],
      [
        'A demerger can also improve allocative efficiency in a broader sense, by letting capital markets price and direct funds to each business according to its own genuine prospects rather than the blended, harder-to-read prospects of the combined group - investors who want exposure to just one of the businesses no longer have to buy the whole conglomerate to get it, which can lower the cost of capital for the stronger business specifically. This was the explicit case for splitting PayPal from eBay in 2015: a fast-growing payments business and a mature marketplace were being valued as one blended entity, and separating them let the market price each on its own prospects.',
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
        'Whether a market with a small number of large firms can ever be as efficient as one with many small firms therefore depends on which type of efficiency matters most for that specific market. Where economies of scale are large relative to market size and innovation matters, a small number of large firms can plausibly deliver more efficiency overall. Large passenger aircraft are the clearest case: development costs run to billions before a single aircraft is sold, and the market has consolidated to Airbus and Boeing because it could not support more, while UK mobile networks show the same logic at national scale, since duplicating physical network coverage across many small operators would raise average cost for everyone. In markets like these, once dynamic efficiency and economies of scale are weighed against the static allocative loss from prices above marginal cost, the few-large-firms structure can come out ahead.',
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
        'However, a monopolist may be able to achieve substantial economies of scale that many small, perfectly competitive firms cannot, particularly in an industry with high fixed costs and a large minimum efficient scale, and some of this cost saving can be passed on to consumers as a price lower than a fragmented, competitive market could sustain despite the absence of a competitive constraint on the monopolist. The National Grid is the clean illustration: nobody suggests the consumer would be better served by several competing sets of transmission pylons across the country, which is why the response to this kind of natural monopoly is regulation by Ofgem rather than an attempt to force competition into it.',
        'A monopolist earning sustained supernormal profit also has both the funds and, through patent protection or first-mover advantage, the incentive to invest in research and development that a perfectly competitive firm - earning only normal profit in the long run and with any innovation immediately copied by rivals - could not afford or would not bother to fund, potentially delivering dynamic efficiency (falling costs and better products over time) that perfect competition’s static efficiency does not capture.',
      ],
      [
        'Whether perfect competition genuinely leads to a better outcome for consumers than monopoly therefore depends on the specific market: for an industry with low fixed costs, little scope for economies of scale, and limited need for large-scale research and development, perfect competition’s static advantages on price and output dominate and are very likely to benefit consumers more. For an industry with high fixed costs, significant economies of scale, or where continuous, capital-intensive innovation matters, monopoly or near-monopoly profit can fund benefits perfect competition would not deliver. Pharmaceuticals are the clearest instance, since the patent that creates a temporary monopoly is what makes it worth spending a decade and very large sums on a drug that can be copied cheaply the moment it exists; leading-edge semiconductor fabrication is similar, with a single new plant costing billions and only a handful of firms worldwide able to build one.',
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
    'An oligopoly is a market dominated by a small number of large, interdependent firms, measured formally by the n-firm concentration ratio - the combined market share of the largest n firms, such as the UK supermarket sector’s 4-firm concentration ratio of roughly 65-70% held by Tesco, Sainsbury’s, Asda and Morrisons. Above this level of concentration, each firm’s pricing decision has to account for how rivals are likely to react. Game theory - specifically the prisoner’s dilemma - is the tool economists use to model this interdependence and to explain why prices can still stay relatively stable even without any explicit agreement between firms.',
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
      'Definition of oligopoly, measured by the n-firm concentration ratio, and interdependence between firms',
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
        'The size of this harm depends on how price-inelastic demand for the good is: the more essential the good and the fewer the substitutes available - a life-saving drug still under patent, or a monopoly water supplier - the larger the harm to consumer welfare from the same proportional restriction in output, since consumers have nowhere else to turn and must simply pay the higher price or go without. This is why the CMA’s fine against Pfizer and Flynn Pharma, for raising the price of an anti-epilepsy drug by over 2,000% after de-branding it, concerned a product whose users had no alternative at all.',
      ],
      [
        'Beyond the static price and output effect, a firm protected from competitive pressure has weaker pressure to keep its own costs down or maintain quality and service standards, a form of organisational slack known as X-inefficiency that a firm facing constant competitive discipline could not as easily afford. This compounds the harm to consumers beyond what the diagram alone shows, since costs - and therefore, potentially, prices - are higher than they need to be even before the monopoly mark-up is added. The regional water companies in England are the clearest UK case: each is a pure monopoly in its area, customers cannot switch supplier whatever the service, and Ofwat has repeatedly found costs and leakage rates above what efficient operation would produce.',
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
        'This technical inefficiency has to be weighed against the genuine benefit of product variety that a more narrowly efficient, homogeneous, perfectly competitive market would not provide: real markets such as restaurants, hairdressers and high-street retail thrive on exactly the differentiation that causes the excess capacity and allocative gap, and consumers evidently value the resulting choice enough to sustain these industries rather than all switching to a single, cheaper, undifferentiated alternative. The UK coffee shop market is the clearest case: thousands of independents survive alongside Costa and Caffè Nero despite obvious duplication of premises and staff, because location, roast and atmosphere are part of what customers are paying for.',
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

  /* ------------------- Normal Profit, Supernormal Profit and Losses */
  Q121: A(
    [['cost-curves', 'Short-run cost curves with AC, AVC, AFC and MC. The two shut-down points are read straight off this diagram: min AVC is the short-run shut-down price, min AC the long-run one, and the vertical gap between AC and AVC is the average fixed cost the firm cannot escape in the short run.']],
    'Normal profit is the minimum return needed to keep a firm in its current line of business, and is counted as a cost; supernormal profit is anything above that; a loss is anything below it. A loss-making firm faces a genuine decision about whether to keep producing, and the answer differs between the short run and the long run because of what happens to fixed costs.',
    [
      [
        'In the short run, at least one factor of production is fixed, so the firm has fixed costs it must pay whether it produces or not - rent on a lease it cannot exit, interest on borrowing already taken on. If the firm shuts down it loses its entire fixed cost; if it keeps producing it loses the fixed cost too, but any revenue above variable cost makes a contribution towards covering it. So as long as price is at or above average variable cost - at or above min AVC on the diagram - the firm loses less by producing than by closing, even though it is still making an overall loss.',
        'This only holds while the fixed cost genuinely cannot be avoided. A firm able to sublet its premises or sell equipment quickly converts what looked like a sunk fixed cost into a recoverable one, which raises the price at which continuing to trade stops being worthwhile and brings the short-run decision closer to the long-run one.',
      ],
      [
        'In the long run every factor is variable: leases expire, equipment reaches the end of its life, and contracts come up for renewal, so there are no unavoidable fixed costs left to contribute towards. The firm must therefore cover its full average cost, not just its variable cost, and the shut-down price rises from min AVC to min AC. A firm persistently unable to cover average cost is earning below normal profit, so its owners can do better deploying their capital elsewhere, and it leaves the industry - which is precisely the exit process that competes losses away and restores long-run equilibrium.',
        'How quickly this happens depends on how long the "long run" actually is in that industry: in a business with short leases and easily resold equipment, exit can take months, while a firm with decades-long infrastructure commitments may keep trading at a loss far longer simply because its fixed costs take that long to become variable.',
      ],
    ],
    null,
    [
      'Definitions of normal profit (a cost), supernormal profit and loss',
      'Short run: fixed costs are unavoidable, so any revenue above variable cost contributes towards them',
      'Short-run shut-down point at min AVC: produce while price is at or above average variable cost',
      'Long run: all factors variable, so the firm must cover average total cost',
      'Long-run shut-down point at min AC; persistent losses trigger exit from the industry',
      'Diagram: AC, AVC and MC with both shut-down points marked',
    ],
    [
      'The short-run rule only holds while fixed costs are genuinely unavoidable - subletting or resale changes the calculation',
      'How long the "long run" takes varies hugely by industry, so firms with long-lived assets can trade at a loss much longer',
    ],
  ),

  Q122: A(
    [['cost-curves', 'AC, AVC, AFC and MC on one set of axes. The vertical gap between AC and AVC is average fixed cost - the part of cost that is unavoidable in the short run and therefore the whole reason the shut-down decision differs between the short run and the long run.']],
    'A loss-making firm deciding whether to keep producing compares price against cost - but which cost matters depends entirely on which of its costs it can actually avoid by closing. The division between fixed and variable cost is therefore the centre of the shut-down decision, though it is not the only thing that determines it.',
    [
      [
        'The fixed/variable split drives the short-run rule directly. Fixed costs are incurred whether or not the firm produces, so they are irrelevant to the decision at the margin: what matters is whether revenue covers the variable cost of actually producing. If price is above average variable cost, every unit sold makes a contribution towards the fixed costs the firm would otherwise pay for nothing, so producing at a loss beats closing. If price falls below average variable cost, each unit adds more to cost than to revenue and closing immediately is the smaller loss. The larger the share of fixed costs in a firm’s cost structure - the wider the gap between AC and AVC on the diagram - the wider the price range over which a loss-making firm rationally keeps trading.',
        'This is why capital-intensive industries with very high fixed costs, such as airlines, steel or hotels, often keep operating through deep downturns at prices that clearly do not cover full costs, while a business whose costs are mostly variable, such as a small contractor paying mainly for labour and materials, hits its shut-down point almost as soon as it becomes unprofitable. Airlines during the COVID-19 collapse in 2020 are the clearest recent case: aircraft leases, maintenance contracts and airport slot obligations had to be paid whether planes flew or not, so carriers ran flights at a fraction of normal occupancy because the fare revenue still covered the fuel and crew cost of flying and contributed something towards the fixed costs they owed regardless.',
      ],
      [
        'The split matters less than it appears, however, once the distinction between fixed and SUNK costs is drawn. A fixed cost that is recoverable - equipment with a resale market, a lease that can be assigned to another tenant - is not really a reason to keep trading, because closing recovers it. It is specifically SUNK costs, which cannot be recovered whatever the firm does, that make continuing worthwhile. Two firms with identical fixed costs can therefore face completely different shut-down decisions depending on how much of that cost is genuinely sunk.',
        'This also means the same firm’s decision changes over time without its cost structure changing at all: as leases approach expiry and equipment approaches replacement, previously sunk costs become avoidable again, and a firm that rationally traded through a loss last year may rationally exit this year on identical prices and costs.',
      ],
      [
        'Other factors can override the cost calculation entirely. A firm expecting the downturn to be temporary may absorb losses below AVC to retain skilled staff it would struggle to rehire, preserve customer relationships, or avoid the reputational damage and re-entry costs of closing and reopening. Conversely, a firm covering its variable costs may still close if it cannot obtain the working capital to fund continued trading - losses have to be financed, and a business without access to credit can be forced out at a price the textbook rule says it should survive.',
        'These considerations point in opposite directions, so they do not simply strengthen or weaken the cost-based rule: expectations about recovery and the value of retaining staff push the effective shut-down price below min AVC, while financing constraints push it above. Which dominates depends on the firm’s access to finance and on how confident it is about the duration of the downturn.',
      ],
    ],
    'The fixed/variable split is genuinely central to the shut-down decision: it is the existence of costs that must be paid regardless of output that makes producing at a loss rational at all, and it explains why capital-intensive firms trade through downturns that would close a labour-intensive one. But it is not the whole story. What matters more precisely is how much of the fixed cost is genuinely SUNK rather than recoverable, since a recoverable fixed cost is no reason to continue; and the textbook rule can be overridden in both directions by expectations about the downturn’s length, the cost of losing and rehiring skilled staff, and above all by whether the firm can finance its losses at all. The cost structure sets the boundaries of the decision; expectations and access to finance decide where within those boundaries a particular firm actually lands.',
    [
      'Fixed costs are unavoidable in the short run and therefore irrelevant at the margin',
      'Short-run rule: produce while price is at or above AVC, because revenue above variable cost contributes to fixed costs',
      'Diagram: the AC-AVC gap is average fixed cost, and its size sets how far price can fall before shutting down',
      'Capital-intensive versus labour-intensive cost structures give very different shut-down prices',
      'Fixed versus SUNK costs: only genuinely unrecoverable costs justify continuing',
      'Non-cost factors: expected duration of the downturn, retaining skilled staff, and access to working capital',
    ],
    [
      'A recoverable fixed cost is no reason to continue - the sunk element is what matters',
      'The same firm’s decision changes over time as fixed costs become avoidable, with no change in its cost structure',
      'Expectations and staff-retention concerns push the effective shut-down price below min AVC',
      'Financing constraints can force closure above min AVC, overriding the cost rule in the opposite direction',
      'Judgement: the fixed/variable split sets the boundaries, but sunk costs, expectations and finance decide the outcome within them',
    ],
  ),

  /* ------------------------- Vertical and Conglomerate Integration */
  Q123: A(
    [],
    'External growth by merger or takeover takes three forms: horizontal integration, joining firms at the same stage of the same industry; vertical integration, joining firms at different stages of the same supply chain; and conglomerate integration, joining firms in unrelated industries. Vertical integration divides further according to the direction of travel along that supply chain.',
    [
      [
        'BACKWARD vertical integration means acquiring a firm at an EARLIER stage of the supply chain - moving towards the source of supply. A supermarket buying a farm or a dairy, or a car manufacturer buying a battery producer, is integrating backwards. The firm gains control over the cost, quality and reliability of its inputs, captures the profit margin its supplier was previously earning, and can secure supply of a scarce input that rivals still have to buy on the open market.',
        'The gain depends on the firm being able to run the acquired business at least as efficiently as a specialist could: a supermarket is expert at retailing, not farming, and running a farm badly can raise input costs rather than lower them, which is why the profit margin captured may be smaller than the management cost of capturing it.',
      ],
      [
        'FORWARD vertical integration means acquiring a firm at a LATER stage - moving towards the final consumer. A brewery buying a chain of pubs, or a manufacturer opening its own retail outlets rather than selling through third-party stores, is integrating forwards. The firm secures guaranteed access to a route to market, captures the retail margin, and gains direct control over how its product is priced, displayed and presented to the consumer.',
        'This control comes at the cost of flexibility: a manufacturer tied to its own outlets loses the ability to drop an underperforming retail partner, and carries the fixed costs of that distribution network through a downturn, whereas a firm selling through independent retailers can simply sell less without owning any of the shops.',
      ],
    ],
    null,
    [
      'The three forms of integration: horizontal, vertical and conglomerate',
      'Backward vertical integration: acquiring an earlier stage of the supply chain, with an example',
      'Forward vertical integration: acquiring a later stage, closer to the consumer, with an example',
      'Benefits of each: control of input cost/quality, capturing the supplier or retail margin, securing supply or route to market',
    ],
    [
      'Backward integration only pays if the firm can run the supplier as efficiently as a specialist would',
      'Forward integration trades flexibility for control, carrying distribution fixed costs through a downturn',
    ],
  ),

  Q124: A(
    [],
    'Vertical integration joins firms at different stages of the same supply chain; conglomerate integration joins firms in entirely unrelated industries. Both are routes to external growth, but they are pursued for different reasons and carry very different risks, so which is more beneficial depends on what the acquiring firm is actually trying to achieve.',
    [
      [
        'Vertical integration offers benefits that follow directly from the two firms operating in the same supply chain. The acquirer captures the margin previously paid to a supplier or retailer, gains control over the cost, quality and reliability of an input or a route to market, and removes the risk of being held up by a supplier with market power. Apple’s move to designing its own processors rather than buying them in is a clear backward case, giving it control over a component central to its products; Amazon’s build-out of its own warehousing and delivery network is the forward equivalent, replacing reliance on third-party carriers. It can also raise rivals’ costs: a firm that owns a key input supplier can restrict or price access to it, foreclosing competitors from the market - which is precisely why competition authorities scrutinise vertical mergers in concentrated markets rather than waving them through as harmless.',
        'These synergies only exist where the two stages genuinely fit together, and they come with a cost: the acquirer must now manage a business outside its own core expertise, and it loses the option of switching to a cheaper or better supplier, since it now owns the one it has. The benefit is therefore largest where the input is critical and hard to source reliably, and smallest where the input is a commodity available competitively from many suppliers.',
      ],
      [
        'Conglomerate integration offers a quite different benefit: diversification. By operating in unrelated industries, the firm reduces its exposure to a downturn in any one market, smoothing profits across the cycle, and it can redeploy cash generated by a mature division into a faster-growing one without going to external capital markets. For an owner whose wealth is concentrated in a single firm, this risk reduction is genuinely valuable.',
        'The efficiency case for this is weak, however: shareholders can diversify far more cheaply themselves simply by holding a spread of shares, so a conglomerate built purely to diversify is solving a problem its investors had already solved. This is exactly the reasoning behind the "conglomerate discount", where markets value a diversified group below the sum of its parts - and the reason activist investors push such groups to demerge.',
      ],
      [
        'Which is more beneficial therefore depends on whether the acquirer is seeking operational synergy or risk reduction. Where a firm depends on a critical input or a contested route to market, vertical integration delivers real, identifiable cost and control benefits that show up in its own operations. Where the motive is simply to grow or to smooth earnings, conglomerate integration rarely creates value the shareholders could not create themselves, and adds the management diseconomies of running unrelated businesses under one head office.',
        'Both routes share the same underlying risk: they extend management beyond its existing competence, and the evidence that a large share of mergers destroy rather than create shareholder value applies to both. The distinction is that vertical integration at least has a specific operational rationale to test against, whereas conglomerate integration often has only a financial one that the capital market can satisfy more cheaply.',
      ],
    ],
    'Vertical integration is generally the more beneficial route where a firm has a genuine operational reason to control an adjacent stage of its supply chain: it captures a real margin, secures a critical input or route to market, and can strengthen the firm’s competitive position in a way that shows up in its own costs. Conglomerate integration’s central benefit - diversification - is one shareholders can achieve more cheaply for themselves, which is why diversified groups frequently trade at a discount and come under pressure to break up. The judgement is conditional on motive: vertical integration where a specific supply-chain dependency needs fixing, conglomerate integration only where an acquirer can genuinely run the target better than its current owners, not merely hold it alongside other businesses.',
    [
      'Definitions of vertical and conglomerate integration',
      'Vertical benefits: capturing the supplier/retail margin, control of input quality and supply, removing hold-up risk',
      'Vertical integration can foreclose rivals by restricting access to a key input, attracting competition-authority scrutiny',
      'Conglomerate benefit: diversification, smoothing profits across the cycle, internal reallocation of cash',
      'The conglomerate discount and the shareholder-diversification argument against it',
    ],
    [
      'Vertical synergies exist only where the two stages genuinely fit; the firm also loses the option to switch supplier',
      'Diversification is cheaper for shareholders to achieve themselves than for a firm to achieve by acquisition',
      'Both routes extend management beyond existing competence, and many mergers destroy shareholder value',
      'Judgement: vertical where a specific supply-chain dependency needs fixing; conglomerate only with a genuine management case',
    ],
  ),

  /* ------------------------------------------------ Economic Methodology */
  Q129: A(
    [],
    'Economics is a social science: it studies human behaviour, and it does so by building models and testing claims against evidence. A central distinction in that method is between statements that can be tested against the facts and statements that rest on a value judgement.',
    [
      [
        'A POSITIVE statement is objective and testable: it makes a claim about what is, was or will be, and evidence can in principle show it to be true or false. "A rise in the minimum wage increases unemployment among young workers" is positive, because data on employment before and after a rise can support or contradict it. Whether the evidence is easy to gather does not matter - what makes the statement positive is that it is the kind of claim evidence could settle.',
        'Positive statements are still contested in practice, because economists cannot run controlled experiments: so many things change at once that the same data on the minimum wage has been read as supporting both sides. Being testable in principle is not the same as being settled in practice, which is why disagreement between economists is often disagreement about evidence rather than about values.',
      ],
      [
        'A NORMATIVE statement is subjective: it makes a claim about what OUGHT to be, resting on a value judgement that evidence alone cannot settle. "The government should raise the minimum wage" is normative, because deciding whether it should depends on how much weight is given to the incomes of those who keep their jobs against the prospects of those who might lose them - a judgement about fairness, not a fact. Words such as "should", "ought", "unfair" or "too high" usually signal a normative claim.',
        'The two are harder to separate than the definitions suggest, because value judgements shape which positive questions get asked and which evidence is treated as relevant. An economist who believes inequality matters will investigate distributional effects that another would not measure at all, so normative commitments influence positive analysis even when each individual statement is correctly classified.',
      ],
    ],
    null,
    [
      'Definition of a positive statement: objective, testable against evidence, with an example',
      'Definition of a normative statement: subjective, resting on a value judgement, with an example',
      'Signal words for normative claims (should, ought, unfair, too high)',
      'The role of value judgements in economic decision making and policy',
    ],
    [
      'Positive statements are testable in principle but hard to settle in practice, since economics cannot run controlled experiments',
      'Value judgements shape which positive questions are asked, so the separation is cleaner in definition than in practice',
    ],
  ),

  Q130: A(
    [],
    'Economics is a social science, studying human behaviour rather than the physical world. Because it cannot generally run controlled experiments, it proceeds by building simplified models that hold most influences constant - the ceteris paribus assumption - and reasoning about what a change in one variable does. Whether this limits its usefulness depends on what one expects a social science to deliver.',
    [
      [
        'Simplification is what makes analysis possible at all, not merely a concession. A demand curve assumes income, tastes and the prices of other goods are held constant, which is never literally true, but without that assumption the effect of a price change could not be isolated from everything else moving at the same time. Models of this kind generate predictions that have proved robust: demand curves slope downwards, higher interest rates reduce borrowing, price ceilings create shortages. The test of a model is not whether its assumptions are realistic but whether its predictions hold, and by that test the core of economics performs well.',
        'This defence works better for the DIRECTION of an effect than for its size. Economics predicts reliably that a tax on a good reduces the quantity traded; it predicts far less reliably by how much, because that depends on elasticities that vary between markets and over time. A model that gets direction right and magnitude wrong is useful for understanding and much weaker as a basis for calibrating policy.',
      ],
      [
        'The deeper limitation is that the assumptions are about PEOPLE, and people do not behave as consistently as physical systems. The rational agent assumption - full information, consistent preferences, utility maximisation - is contradicted by well-documented, systematic behaviour: bounded rationality, present bias, herding, the influence of how a choice is framed. Where a model assumes away exactly the behaviour that drives the outcome, its predictions fail, which is why pension under-saving persisted despite clear financial incentives to save until auto-enrolment worked with the bias rather than against it.',
        'Behavioural economics has absorbed much of this criticism rather than being refuted by it: the departures from rationality turn out to be systematic and predictable, so they can be modelled too. The limitation is therefore less that economics assumes rationality and more that any model is only as good as the behavioural assumptions built into it, which is an argument for better assumptions rather than against modelling.',
      ],
      [
        'The inability to run controlled experiments is the constraint that separates economics most sharply from the natural sciences. A physicist can hold everything constant and vary one thing; an economist watching a minimum wage rise cannot separate its effect from the state of the cycle, the sector mix or a hundred other simultaneous changes. This is why economists can examine the same episode and reach opposing conclusions, and why forecasting records are poor - the 2008 crisis being the most visible failure.',
        'The constraint has been eased rather than removed. Natural experiments, where a policy changes in one area but not a comparable one, and randomised controlled trials in development economics come far closer to genuine controlled comparison than was possible a generation ago, and have settled some questions that pure theory could not. The gap between economics and the natural sciences is one of degree and is narrowing, not one of kind.',
      ],
    ],
    'Models and assumptions limit economics as a social science to a real but often overstated degree. They are what makes rigorous analysis possible, and the core predictions built on them are robust, particularly about the direction of effects. The genuine limitations are that magnitudes are far less reliable than directions, that assumptions about human behaviour fail where that behaviour is systematically non-rational, and that the absence of controlled experiments leaves many questions genuinely unsettled. None of these is an argument against using models, since there is no alternative method available - the honest conclusion is that economics is a science whose subject matter permits less precision than the natural sciences, and that treating its predictions as more exact than they are is a greater danger than the modelling itself.',
    [
      'Economics as a social science: models, assumptions and the ceteris paribus assumption',
      'Simplification is what allows one variable to be isolated; models are judged by their predictions',
      'The rational agent assumption and the systematic behavioural departures from it',
      'The inability to conduct controlled experiments, and its consequences for forecasting and disagreement',
      'Natural experiments and randomised controlled trials as partial solutions',
    ],
    [
      'Models predict direction far more reliably than magnitude, which limits their use in calibrating policy',
      'Behavioural economics absorbs the rationality criticism by modelling the biases rather than assuming them away',
      'Natural experiments and RCTs narrow the gap with the natural sciences without closing it',
      'Judgement: a real limitation, but there is no alternative method - the danger is overstating the precision, not the modelling',
    ],
  ),

  /* --------------------------- Demand, Supply and Price Determination */
  Q131: A(
    [['demand-shift', 'The whole demand curve shifting right from D₁ to D₂ because a CONDITION of demand has changed, raising equilibrium price from P₁ to P₂ and quantity from Q₁ to Q₂. Contrast this with a movement ALONG the curve, which only the good’s own price causes.']],
    'The conditions of demand are the factors other than the good’s own price that determine how much consumers want to buy. When one of them changes, the whole demand curve shifts; only a change in the good’s own price causes a movement along it. That distinction is what the diagram is really testing.',
    [
      [
        'The first is a change in real income. For a NORMAL good, higher real income means consumers can afford more at every price, so demand shifts right from D₁ to D₂ and, with supply unchanged, equilibrium price rises to P₂ and quantity to Q₂. Rising real wages increase demand for restaurant meals, new cars and foreign holidays in exactly this way, and the effect is strongest for luxuries, whose income elasticity exceeds 1.',
        'The direction reverses for an INFERIOR good, whose income elasticity is negative: as real incomes rise, consumers switch away from own-brand basics or bus travel towards better alternatives, so demand for the inferior good shifts LEFT on the same income increase. Whether a rise in income shifts a particular demand curve right or left therefore depends on which type of good it is.',
      ],
      [
        'The second is a change in the price of a related good. A rise in the price of a SUBSTITUTE - one good replacing another in consumption - makes the good in question relatively cheaper, so consumers switch towards it and its demand curve shifts right: a rise in the price of beef increases demand for chicken. A fall in the price of a COMPLEMENT, consumed alongside the good, has the same effect: cheaper games consoles raise demand for the games played on them.',
        'The size of the shift depends on how close the relationship actually is, which cross elasticity of demand measures: a high positive XED means the two are close substitutes and the shift is large, while a weak relationship produces a shift barely distinguishable from noise. Other conditions - tastes, population, advertising and expectations of future prices - shift the curve through the same mechanism.',
      ],
    ],
    null,
    [
      'Distinction between a shift of the demand curve and a movement along it',
      'Diagram showing D₁ shifting to D₂ and the resulting rise in equilibrium price and quantity',
      'Change in real income: normal goods shift right, inferior goods shift left',
      'Change in the price of a substitute or a complement, and the role of cross elasticity',
      'Other conditions of demand: tastes, population, advertising, expectations',
    ],
    [
      'The direction of the income effect depends on whether the good is normal or inferior',
      'The size of the shift from a related good depends on how close the substitute or complement relationship is, measured by XED',
    ],
  ),

  Q132: A(
    [['supply-demand', 'Demand meeting supply at equilibrium Pe, Qe. Below Pe there is excess demand and above it excess supply; the price mechanism is the process by which those imbalances push price back to Pe. Use it to show the shortage as the horizontal gap between quantity demanded and quantity supplied at the too-low price.']],
    'A shortage exists where quantity demanded exceeds quantity supplied at the prevailing price. In a free market the price mechanism is supposed to eliminate it automatically: excess demand bids the price up, rationing demand and drawing out supply until the market clears at Pe, Qe. How reliably this happens depends on how freely the price can move and how quickly supply can respond.',
    [
      [
        'The mechanism works through three functions operating together. Excess demand at the too-low price means some consumers cannot obtain the good and bid against each other, so the price RATIONS the available quantity to those who value it most. The rising price SIGNALS to producers that the good has become more profitable, and gives them an INCENTIVE to supply more - both by raising output from existing capacity and by attracting new firms into the market. Quantity supplied extends up the supply curve and quantity demanded contracts along the demand curve until the two meet at Pe. No central authority needs to know the size of the shortage; each participant responds only to the price in front of them.',
        'This process is genuinely fast and effective where supply can respond and prices are free to move. Commodity and financial markets clear in this way almost continuously, and shortages in competitive retail markets are typically resolved within weeks as suppliers restock at slightly higher prices.',
      ],
      [
        'The mechanism is much weaker where supply is price-inelastic in the time available. If the good takes a long time to produce - housing, agricultural output within a growing season, trained doctors - then a higher price calls forth almost no extra quantity in the short run, so the entire adjustment falls on demand: price rises sharply, rationing the unchanged quantity to those with the highest willingness to pay, and the shortage of the good at an affordable price persists even though the market technically clears. The UK housing market has behaved this way for decades, with rising prices rationing a stock that barely responds.',
        'This is a distributional objection rather than a technical failure: the market does clear, but it clears by pricing out lower-income buyers entirely. Whether that counts as the mechanism "working" depends on whether the test is efficiency, which it passes, or fair access, which it does not, and this is precisely why governments intervene in markets like housing despite the mechanism functioning as theory predicts.',
      ],
      [
        'Intervention can also prevent the mechanism from operating at all. Where a maximum price is set below equilibrium - rent controls, or a cap on energy prices - the price is legally prevented from rising, so excess demand cannot be eliminated through price and the shortage becomes permanent rather than temporary. The good must then be rationed by queueing, waiting lists, seller discretion or a black market, none of which allocates to those who value it most, and the suppressed price signal means supply is never drawn out either.',
        'The same objection applies to markets where the price signal is distorted by market failure rather than by policy: where a good has significant external costs or benefits, the price that clears the market is not the price that reflects social value, so the mechanism restores equilibrium at the wrong quantity. The mechanism is reliable at clearing a market; it is reliable at clearing it at the SOCIALLY optimal point only where prices reflect full social costs and benefits.',
      ],
    ],
    'The price mechanism is highly reliable at eliminating a shortage in the narrow sense: excess demand raises price, which rations demand and draws out supply, and in competitive markets with responsive supply this happens quickly and without anyone needing to coordinate it. Its reliability weakens substantially where supply cannot respond in the time available, in which case the adjustment falls entirely on price and the shortage of affordable access persists even as the market clears. It fails outright where price controls prevent the adjustment, and it clears at the wrong quantity where prices do not reflect social costs. The mechanism can be relied on to clear a market; whether the outcome it reaches is acceptable is a separate question, and the answer is what determines whether intervention is justified.',
    [
      'Definition of a shortage as excess demand at the prevailing price',
      'Diagram showing excess demand below equilibrium and the adjustment to Pe, Qe',
      'The rationing, signalling and incentive functions operating together',
      'Speed and effectiveness where supply is elastic and prices are free to move',
      'Inelastic supply: adjustment falls on price, and affordable access remains short',
      'Price controls and market failure preventing the mechanism from working or from clearing at the social optimum',
    ],
    [
      'Effectiveness depends heavily on the price elasticity of supply in the time available',
      'Clearing by price is efficient but distributionally contested - it rations by ability to pay',
      'A maximum price prevents the adjustment entirely, making the shortage permanent',
      'Judgement: reliable at clearing a market, not necessarily at clearing it at a socially optimal or acceptable point',
    ],
  ),

  /* --------------------------------------------------- Demand for Labour */
  Q135: A(
    [['labour-market', 'The labour market with D(L) = MRP and S(L) meeting at W₁, Q₁. An increase in the demand for labour shifts D(L) right, raising both the equilibrium wage and employment. Because D(L) IS the marginal revenue product curve, anything that raises MRP shifts it.']],
    'Demand for labour is a DERIVED demand: firms hire workers not for their own sake but for the output those workers produce. The demand curve for labour is therefore its marginal revenue product - the extra revenue an additional worker generates - so anything that raises MRP raises the demand for labour and shifts D(L) to the right.',
    [
      [
        'The first factor is a rise in demand for the FINAL PRODUCT the labour produces. Because MRP is marginal physical product multiplied by the price of the output, a higher output price raises the revenue each worker generates even if their physical productivity is unchanged. When demand for new housing rises and house prices with it, the marginal revenue product of a bricklayer rises, so construction firms demand more bricklayers at every wage and D(L) shifts right, raising both the equilibrium wage and employment. This is what "derived demand" means in practice: the labour market is driven by the product market above it.',
        'The strength of this effect depends on how much of the output price increase actually reaches the marginal worker’s measured product, which is weaker in industries where labour is a small share of total cost, or where capacity constraints elsewhere - planning permission, materials shortages - prevent the firm expanding output whatever its wage bill.',
      ],
      [
        'The second is a rise in labour PRODUCTIVITY, which raises the physical output each worker contributes and so raises MRP at any given output price. Better capital equipment, improved training, or more effective management all raise output per worker, so the firm is willing to employ more workers at each wage. This is why investment in capital and in skills usually raises employment as well as wages, rather than displacing workers as is sometimes assumed.',
        'This holds only where the capital COMPLEMENTS labour rather than substituting for it. Where new technology performs the task the worker was doing - automated checkouts, robotic assembly - the same investment raises the productivity of the remaining workers while reducing the number required, so the demand curve for that particular type of labour shifts LEFT even as output per remaining worker rises. Whether a productivity improvement raises or lowers labour demand depends entirely on which of the two it is.',
      ],
    ],
    null,
    [
      'Labour as a derived demand; D(L) is the marginal revenue product curve',
      'Diagram showing D(L) shifting right and raising both the wage and employment',
      'A rise in demand for the final product raises the output price and hence MRP',
      'A rise in labour productivity raises marginal physical product and hence MRP',
      'Other acceptable factors: a fall in the price of a complementary factor, changes in employment subsidies or taxes',
    ],
    [
      'The product-demand effect is weaker where labour is a small share of cost or where other capacity constraints bind',
      'A productivity improvement raises labour demand only where capital complements labour; where it substitutes, demand for that labour falls',
    ],
  ),

  Q136: A(
    [['labour-market', 'D(L) = MRP against S(L), with a wage above the market-clearing W₁ creating excess supply of labour. The SIZE of that employment loss depends on how elastic D(L) is: draw a steep and a shallow D(L) through the same point to show the same wage rise producing very different falls in employment.']],
    'When wages rise above the market-clearing level - through a minimum wage, collective pressure or a statutory increase - the standard prediction is that quantity of labour demanded falls, creating unemployment. How large that employment effect actually is depends heavily on the elasticity of demand for labour, but elasticity is not the only thing that determines the outcome.',
    [
      [
        'Elasticity of demand for labour genuinely is central to the size of the effect. Where D(L) is inelastic - steep - a given wage rise reduces employment only slightly, because firms cannot easily do without the workers; where it is elastic, the same rise produces a much larger fall. The determinants are well understood: demand for labour is more elastic the easier it is to substitute capital for labour, the more elastic demand for the final product (since firms cannot pass the cost on without losing sales), the higher labour costs are as a share of total costs, and the longer the time period, since substitution takes time to arrange.',
        'This explains the observed pattern in UK minimum wage research: employment effects have been small in sectors such as care, hospitality and retail, where the work is hard to automate, the service must be delivered locally, and demand for the final product is relatively inelastic. The theory and the evidence line up, which is a genuine point in favour of elasticity being the key determinant.',
      ],
      [
        'But elasticity assumes a competitive labour market, and where the employer has monopsony power the prediction reverses regardless of elasticity. A monopsonist already employs fewer workers at a lower wage than a competitive market would, because its marginal cost of labour exceeds the wage. A minimum wage set between the monopsony wage and the competitive wage flattens that marginal cost curve, and employment RISES rather than falls. Here the decisive variable is not how elastic demand for labour is but how much monopsony power the employer holds.',
        'This is not a theoretical curiosity: the absence of large employment losses from the UK minimum wage is at least as consistent with employers in low-wage sectors having some monopsony power as with labour demand being inelastic. The two explanations are difficult to separate empirically, which means elasticity cannot be assumed to be the operative factor even where the outcome matches its prediction.',
      ],
      [
        'Firms also have margins of adjustment other than employment, which the diagram does not show. Faced with a wage rise, a firm may cut hours rather than headcount, reduce training, bonuses or non-wage benefits, raise prices, accept lower profit, or invest in raising productivity so the higher wage is covered by more output per worker. Each of these absorbs the cost without the job losses the simple model predicts, so measured employment can be stable while the adjustment happens somewhere less visible.',
        'Which margin a firm uses depends on its own circumstances rather than on labour demand elasticity: a firm with thin margins in a competitive product market has little choice but to cut employment, while one with pricing power or scope for productivity improvement has alternatives. This means the employment effect varies between firms facing identical elasticities, which limits how much of the outcome elasticity alone can explain.',
      ],
    ],
    'The elasticity of demand for labour is a genuinely important determinant of the employment effect of a wage rise, and its determinants - substitutability of capital, elasticity of product demand, labour’s share of costs, and the time period - correctly predict where employment losses are largest. But calling it the MAIN factor overstates it. Where the employer has monopsony power the sign of the effect reverses entirely, which no degree of elasticity can override, and firms have several adjustment margins other than employment whose use depends on their competitive position rather than on elasticity at all. Elasticity determines the size of the employment effect within a competitive labour market; the market structure determines whether that framework applies, and the firm’s available margins determine whether the adjustment shows up as job losses or somewhere else entirely.',
    [
      'Elasticity of demand for labour and its determinants: capital substitutability, product demand elasticity, labour’s cost share, time',
      'Diagram showing the same wage rise producing different employment falls on elastic and inelastic D(L)',
      'Evidence from UK minimum wage research in care, hospitality and retail',
      'Monopsony: a minimum wage between the monopsony and competitive wage raises employment regardless of elasticity',
      'Alternative adjustment margins: hours, training, non-wage benefits, prices, profit, productivity investment',
    ],
    [
      'The empirical pattern is consistent with inelastic labour demand AND with monopsony power, which are hard to separate',
      'Monopsony reverses the sign of the effect, which elasticity cannot override',
      'Which adjustment margin a firm uses depends on its competitive position, not on elasticity',
      'Judgement: elasticity sets the size within a competitive market, but market structure and available margins determine the outcome',
    ],
  ),

  /* --------------- The Impact and Limits of Government Intervention */
  Q137: A(
    [],
    'Regulatory capture occurs when a regulator, over time, comes to act in the interests of the industry it is supposed to regulate rather than in the public interest. It is one of the main reasons government intervention can fail to deliver the outcome it was designed to achieve, and it is a form of government failure.',
    [
      [
        'Capture happens because of an asymmetry in information and incentives. The regulator depends on the industry for the data it needs to regulate - costs, capacity, technical constraints - and the firms have every reason to present that information in the light most favourable to themselves. Meanwhile the benefit of a lenient decision is large and concentrated for a handful of firms, who will lobby hard for it, while the cost is small and spread across millions of consumers, none of whom has enough at stake individually to organise against it. The regulator hears sustained, well-resourced argument from one side and almost nothing from the other.',
        'The effect is compounded where regulators recruit from and return to the industry, since the expertise needed to regulate a complex sector is largely found inside it. This "revolving door" gives officials a personal interest in not antagonising future employers, though it is genuinely difficult to avoid: a regulator staffed entirely by people with no industry experience would be easier to mislead on technical matters, which is its own route to the same outcome.',
      ],
      [
        'The consequence is that intervention delivers less than it promised. A captured price regulator sets the cap too generously, so the monopoly retains supernormal profit that the cap was meant to remove and consumers pay more than they should; a captured safety or environmental regulator accepts industry assurances rather than testing them. The intervention still has its administrative cost, so society bears the expense of regulation without receiving the benefit - which is precisely why government failure can leave an outcome worse than the market failure it was addressing.',
        'How severe this is depends on the regulator’s design rather than being inevitable. Independent appointments, fixed terms, published reasoning, an obligation to consult consumer bodies, and requirements to justify decisions against explicit statutory objectives all make capture harder, and regulators that periodically impose costly decisions on the industry demonstrate that it is not universal. Capture is a risk to be designed against, not a certainty.',
      ],
    ],
    null,
    [
      'Definition of regulatory capture as a form of government failure',
      'Information asymmetry: the regulator depends on the industry for the data it needs',
      'Asymmetric incentives: concentrated benefits to firms, dispersed costs to consumers, so only one side lobbies',
      'The revolving door between regulators and the industries they regulate',
      'Consequence: intervention delivers less than intended while still incurring its administrative cost',
    ],
    [
      'The revolving door is hard to avoid, since the expertise needed to regulate is concentrated inside the industry',
      'Capture is a design risk rather than an inevitability - independence, transparency and statutory objectives all reduce it',
    ],
  ),

  Q138: A(
    [['monopoly', 'A firm with market power restricting output to Qm and pricing at Pm above MC, with the deadweight loss shaded out to the competitive Qc. This is what intervention is aimed at - a price cap pushes price down from Pm towards MC, which is the price effect the first chain describes.']],
    'Government intervenes in markets to correct market failure and to promote competition, using tools ranging from price and profit regulation to merger control, deregulation and privatisation. Its impact has to be judged across several dimensions at once - prices, efficiency and consumer choice - because a measure that improves one can worsen another.',
    [
      [
        'The clearest impact is on prices. Where a firm has market power, a price cap of the RPI-X form directly limits what it can charge, transferring surplus from the firm to consumers, and because the cap does not rise with the firm’s own costs it also creates a standing incentive to cut those costs in order to retain profit - so the same instrument can improve productive efficiency as well as lowering price. Merger control works on price indirectly, by preventing the concentration that would have allowed prices to rise in the first place, as when the Competition and Markets Authority blocked the Sainsbury’s-Asda merger in 2019.',
        'The price benefit depends on the regulator setting the cap correctly, which requires information it does not have. Set too loosely, the cap leaves the supernormal profit untouched and achieves nothing; set too tightly, it drives price towards average cost but leaves too little return to fund investment, which shows up years later as degraded service and underinvested infrastructure - the criticism made of water and rail regulation in the UK.',
      ],
      [
        'The impact on efficiency is more mixed. Intervention that opens a market to entry - deregulation, competitive tendering, requiring a network owner to give rivals access - raises both productive and allocative efficiency by restoring competitive pressure, and this is where intervention has the strongest record. Intervention that adds compliance obligations, however, imposes real costs: firms divert resources to meeting the rules, and those fixed compliance costs fall disproportionately on small firms, which can entrench the large incumbents the regulation was meant to discipline.',
        'Dynamic efficiency cuts both ways too. Environmental regulation and carbon pricing have driven genuine innovation in low-emission technology, since firms profit from beating the standard; but regulation that specifies a particular technology rather than an outcome freezes the industry on that technology and removes the incentive to find a better one. Whether intervention helps or harms efficiency depends far more on how it is designed than on how much of it there is.',
      ],
      [
        'The impact on consumer choice is the most ambiguous of the three. Intervention can expand choice by breaking open a market: the separation of energy supply from the network, and the requirement to allow switching, gave consumers a choice of supplier where previously there was none. But it can also narrow choice deliberately, and sometimes that is the point - banning a dangerous product, restricting the sale of age-limited goods, or requiring minimum standards all remove options that consumers might otherwise have taken.',
        'Judging this requires a value judgement rather than an efficiency calculation. Removing an option is a loss to the consumer who wanted it and a gain to the third parties harmed by it, and economics can measure neither against the other without taking a position on how much weight to give informed consumer sovereignty against protection from harm - which is why interventions of this kind remain politically contested long after their economic effects are understood.',
      ],
    ],
    'Government intervention in markets has a generally favourable impact on prices where the target is genuine market power and the regulator is competent, and its strongest record is in opening markets to competition, which improves efficiency and expands choice simultaneously. The impact is far less reliable where the regulator lacks the information to set a cap correctly, where compliance costs entrench incumbents, or where regulation specifies technologies rather than outcomes. On consumer choice the effect is genuinely two-directional and partly a matter of values rather than economics. The overall judgement is that the design and the information available to the regulator matter far more than the extent of intervention: well-targeted intervention against a clear failure improves all three dimensions, while poorly designed intervention can worsen each of them while still incurring its full cost.',
    [
      'The range of intervention tools: price and profit regulation, merger control, deregulation, competitive tendering, privatisation',
      'Impact on prices: RPI-X caps transferring surplus and incentivising cost reduction; merger control preventing price rises',
      'Impact on efficiency: opening markets raises it; compliance costs and technology-specific rules can reduce it',
      'Impact on choice: opening markets expands it, while bans and standards deliberately narrow it',
      'Limits to intervention: regulatory capture and the regulator’s information problem',
    ],
    [
      'Price caps depend on information the regulator does not have - too loose achieves nothing, too tight starves investment',
      'Compliance costs fall disproportionately on small firms and can entrench incumbents',
      'Restricting choice involves a value judgement about consumer sovereignty that economics cannot settle',
      'Judgement: design and information matter more than the extent of intervention',
    ],
  ),

  /* ------------------------------------------------------------ Subsidies */
  Q141: A(
    [['subsidy', 'Supply shifting DOWN by the subsidy per unit, from S to S + subsidy. Quantity rises from Q₁ to Q₂; consumers pay only Pc while producers receive Pp = Pc + subsidy. The shaded rectangle, subsidy × Q₂, is the cost to the government.']],
    'A subsidy is a payment from government to producers to lower their costs of production and encourage output. Because it reduces the cost of supplying each unit, it shifts the supply curve vertically downwards by the amount of the subsidy, and the effect splits between a lower price for consumers and a higher revenue for producers.',
    [
      [
        'The subsidy lowers the cost of producing each unit, so at every price firms are willing to supply more: supply shifts down from S to S + subsidy by the per-unit amount. The new equilibrium is at a higher quantity Q₂, where the price consumers actually pay, Pc, is LOWER than the original P₁ - the consumer benefit - while the total revenue producers receive per unit, Pp, is HIGHER than P₁, because they collect Pc from the buyer plus the subsidy from the government. The vertical distance between Pp and Pc is exactly the subsidy per unit, and the shaded rectangle Pp to Pc across Q₂ is what it costs the government.',
        'The two benefits are not equal, and how the subsidy splits between them depends on the relative elasticities of demand and supply. Where demand is inelastic - consumers will buy the good almost regardless of price - most of the subsidy is retained by producers as higher revenue rather than passed on as a lower price; where demand is elastic, more of it reaches the consumer. A government aiming to cut the price consumers face gets poor value from subsidising a good with inelastic demand.',
      ],
      [
        'The higher quantity Q₂ is usually the real objective rather than the price change itself. Where the good generates positive externalities - vaccination, public transport, insulation - the free market under-consumes it because private buyers ignore the benefit to third parties, and the subsidy raises consumption towards the socially optimal level by making the private cost better reflect the social benefit.',
        'Whether Q₂ is actually the social optimum depends on the subsidy being sized to the external benefit, which governments cannot measure precisely. Too small and under-consumption persists; too large and consumption is pushed past the optimum, so resources are drawn into the subsidised good that were worth more elsewhere - a new misallocation replacing the old one, funded by taxpayers.',
      ],
    ],
    null,
    [
      'Definition of a subsidy as a per-unit payment to producers lowering their costs',
      'Diagram: supply shifting down by the subsidy, quantity rising from Q₁ to Q₂',
      'Consumers pay Pc (below P₁); producers receive Pp = Pc + subsidy (above P₁)',
      'The subsidy per unit is the vertical gap Pp to Pc; total cost to government is that gap × Q₂',
      'Raising quantity towards the social optimum where the good has positive externalities',
    ],
    [
      'How the benefit splits between consumers and producers depends on the relative elasticities of demand and supply',
      'Sizing the subsidy to the external benefit is imprecise - too large pushes consumption past the optimum at taxpayers’ expense',
    ],
  ),

  Q142: A(
    [['subsidy', 'Supply shifting down by the subsidy, raising quantity from Q₁ to Q₂ while consumers pay Pc and producers receive Pp. Use the shaded government-cost rectangle as the thing being weighed against the welfare gain from the extra consumption.']],
    'A good with a positive externality is under-consumed by the free market, because buyers weigh only their private benefit and ignore the benefit their consumption confers on third parties. A subsidy lowers the price they face, raising consumption towards the social optimum - but whether it is the most effective way of doing so depends on measurement, on who captures the benefit, and on what the alternatives could achieve for the same money.',
    [
      [
        'The mechanism is sound and its effect is direct. Lowering the effective price from P₁ to Pc raises quantity from Q₁ to Q₂, and if the subsidy equals the marginal external benefit at the optimum, private consumption decisions now internalise the external benefit and the welfare loss from under-consumption is eliminated. The UK’s plug-in car grant worked this way on electric vehicles, and Contracts for Difference have done the same for offshore wind, where the subsidised expansion of capacity has been followed by a steep fall in the underlying cost of generation. The approach works with the price mechanism rather than against it - consumers still choose freely, they simply face a price that reflects social rather than merely private benefit - so it avoids the distortions that rationing or compulsion introduce.',
        'The subsidy only delivers this if it is sized to an external benefit that governments cannot observe directly. There is no market price for the reduced transmission of disease or the civic value of an educated population, so the figure is an estimate, and an estimate that is politically convenient to inflate. A subsidy set on the wrong estimate lands at the wrong quantity, which is a new misallocation funded by taxpayers rather than a correction of the old one.',
      ],
      [
        'Who captures the subsidy also determines whether consumption actually rises. The split between a lower consumer price and higher producer revenue depends on elasticities, and where demand is inelastic most of the money is retained by producers without much extra consumption - exactly the criticism made of subsidies to rail operators and to housing demand, where the subsidy raised prices and producer revenue more than it raised the quantity consumed. A subsidy aimed at raising consumption of a good whose demand is inelastic is close to a transfer to producers.',
        'This can be designed around rather than accepted: paying the subsidy directly to consumers as a voucher, or making it conditional on the provider holding price down, changes who captures it. The effectiveness of a subsidy therefore depends heavily on its design, not simply on its existence, and blanket per-unit subsidies are the form most vulnerable to being absorbed by producers.',
      ],
      [
        'The alternatives have to be weighed against it, because the subsidy has a real opportunity cost: the money spent is not available for anything else, and it must be raised through taxation that carries its own distortions. Information provision and advertising shift demand itself rather than merely its price, and cost far less - though they act slowly and unreliably. Regulation or compulsion guarantees the quantity, as with compulsory schooling or mandatory vaccination for certain settings, which a subsidy never can, but removes consumer choice entirely. Direct state provision guarantees availability regardless of willingness to pay.',
        'Which is most effective depends on the size of the external benefit and how far consumption falls short. For a large, well-evidenced externality where the shortfall is severe, provision or compulsion delivers certainty a subsidy cannot; for a moderate shortfall where preserving choice matters, a subsidy is the better-targeted instrument. In practice the strongest results come from combining them - free provision of a baseline with subsidies encouraging take-up beyond it, which is how most countries treat both education and healthcare.',
      ],
    ],
    'A subsidy is an effective instrument for raising consumption of a good with positive externalities, and it has the real advantage of working through the price mechanism while leaving consumers free to choose. Its effectiveness is limited by three things: the external benefit it is meant to match cannot be measured precisely, so the quantity it reaches is unlikely to be exactly optimal; where demand is inelastic much of the money is captured by producers rather than raising consumption; and the funds have an opportunity cost against alternatives that may achieve more per pound. The judgement is that a subsidy is most effective where the external benefit is reasonably well evidenced, demand is responsive to price, and the subsidy is designed so that consumers rather than producers capture it - and that it works best as part of a package with provision and information rather than as a stand-alone answer.',
    [
      'Positive externality means private benefit is below social benefit, so the market under-consumes',
      'Diagram: a subsidy shifting supply down, raising quantity from Q₁ to Q₂, consumers paying Pc',
      'A subsidy set equal to the marginal external benefit internalises it while preserving consumer choice',
      'Elasticity determines whether consumers or producers capture the subsidy',
      'Alternatives: information provision, regulation or compulsion, direct state provision',
      'The opportunity cost of the money and the distortion of the taxation raising it',
    ],
    [
      'The external benefit cannot be measured precisely, so the subsidy is unlikely to land exactly at the optimum',
      'With inelastic demand the subsidy is largely captured by producers and raises consumption little',
      'Design matters - vouchers or price conditions change who captures it',
      'Judgement: effective where the externality is well evidenced and demand responsive, best combined with provision and information',
    ],
  ),
}
