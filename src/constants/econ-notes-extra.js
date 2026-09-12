/*
  Extra depth for the Economics chapters that were running thin.

  The pattern that works for Edexcel is the one the course documents use:
  name the determinant, explain the MECHANISM in both directions, then say
  why the explanation might not hold. A student who can only say "interest
  rates affect investment" is at Level 2; one who can say "a rate cut lowers
  the cost of borrowing, so more projects clear the hurdle rate and planned
  investment rises - unless firms are pessimistic about demand, in which
  case cheap credit funds nothing" is arguing at Level 5.

  So every block here carries the evaluation with it rather than leaving it
  to a final paragraph, because that is how the marks are actually awarded.
*/

import { h, p, ul, defn, det, tip, table, chapter } from './econ-notes-build'

/* ================================================= THEME 1 */

const priceMechanism = chapter(
  h('The three functions of the price mechanism'),
  table(
    ['Function', 'What it does'],
    [
      ['Rationing', 'A rising price restricts demand to those willing and able to pay, allocating a scarce good without queues or force'],
      ['Incentive', 'A higher price raises expected profit, so producers enter and existing firms expand'],
      ['Signalling', 'Price movements carry information about where resources are wanted, so factors move towards it'],
    ],
  ),
  p(
    'These are not three separate events but one process seen from three sides. A shortage pushes price up, which rations the existing stock, signals to producers that the good is scarce, and gives them the incentive to supply more. The market clears without anyone planning it.',
  ),
  h('Why the mechanism fails'),
  det(
    'Externalities break the signal',
    'Price only carries information about PRIVATE costs and benefits, so any cost falling on third parties is invisible to it.',
    [
      'A polluting factory faces its own fuel and labour bills but not the health cost of its emissions.',
      'So its marginal private cost sits below marginal social cost, and the price it charges is too low.',
      'Consumers respond to that too-low price by buying too much: the market over-allocates resources to the good.',
    ],
    [
      'The size of the misallocation depends on how large the external cost actually is - if it is small, the welfare loss may be less than the cost of intervening.',
      'It also depends on elasticity: if demand is highly inelastic, the over-consumption at the wrong price is modest even when the external cost is large.',
    ],
  ),
  det(
    'Information gaps break the rationing function',
    'Rationing by price only allocates efficiently if buyers know what they are buying.',
    [
      'Where quality is hidden - a used car, a pension, a medical procedure - buyers cannot judge value, so willingness to pay reflects a guess rather than the true benefit.',
      'Sellers of good products cannot get a price that reflects quality, so they withdraw, and average quality falls further.',
      'This adverse selection can shrink a market until only the worst products remain.',
    ],
    [
      'Reputation, warranties, brands and third-party certification all exist precisely to close the gap, so the failure is rarely total.',
      'Where repeat purchase is common the information problem largely solves itself, since a seller who misleads loses future business.',
    ],
  ),
  tip(
    'A question on the price mechanism nearly always wants the three functions NAMED and then applied to the context given. Naming them earns AO1; applying each to the specific market earns the AO2 marks that most answers miss.',
  ),
)

const externalities = chapter(
  h('The four cases, and why the diagram differs'),
  table(
    ['Case', 'Which curve moves', 'Result at the free-market price'],
    [
      ['Negative production externality', 'MSC lies above MPC', 'Over-production: Qm exceeds Q*'],
      ['Positive production externality', 'MSC lies below MPC', 'Under-production: Qm falls short of Q*'],
      ['Negative consumption externality', 'MSB lies below MPB', 'Over-consumption: Qm exceeds Q*'],
      ['Positive consumption externality', 'MSB lies above MPB', 'Under-consumption: Qm falls short of Q*'],
    ],
  ),
  p(
    'The welfare loss triangle always sits between Qm and Q*, bounded by the two curves that have separated. Its area is the value of the misallocation - the amount by which social cost exceeds social benefit on the units that should not have been produced, or the benefit forgone on the units that should have been.',
  ),
  h('Merit and demerit goods'),
  defn(
    'Merit good',
    'A good whose consumption generates positive externalities and which is also under-consumed because individuals undervalue its private benefit - education and vaccination are the standard examples.',
  ),
  p(
    'Note the two separate reasons: the external benefit to others, AND the information failure that makes the individual underestimate the benefit to themselves. A question asking why education is under-consumed wants both, and most answers give only one.',
  ),
  det(
    'Government intervention to correct externalities',
    'The aim is to internalise the externality - to make the private decision-maker face the full social cost or benefit.',
    [
      'An indirect tax equal to the external cost shifts MPC up onto MSC, so the profit-maximising output becomes the socially optimal one.',
      'A subsidy equal to the external benefit shifts MPC down, raising output to Q*.',
      'Tradable permits cap the total quantity and let the market price the right to pollute, so abatement happens where it is cheapest.',
    ],
    [
      'Setting the tax at exactly the external cost requires VALUING the externality in money, which is extremely difficult - what is a life-year of reduced asthma worth?',
      'If demand is price-inelastic, a tax raises revenue but barely changes quantity, so it corrects little while imposing a regressive burden.',
      'Government failure: the intervention may create unintended consequences such as a black market, or administrative costs that exceed the welfare gain.',
    ],
  ),
)

const consumptionSavingInvestment = chapter(
  h('The consumption function'),
  defn('Marginal propensity to consume (MPC)', 'The fraction of an extra pound of disposable income that is spent rather than saved.'),
  p(
    'Consumption is the largest component of aggregate demand in the UK, at around 60 per cent, so anything that moves it moves AD substantially. That is why the determinants below matter more than their equivalents for investment.',
  ),
  det(
    'Interest rates',
    'The rate is both the reward for saving and the cost of borrowing, so it works on consumption through several channels at once.',
    [
      'A RISE makes saving more attractive, so households defer consumption to the future.',
      'It raises the cost of servicing existing variable-rate debt, especially mortgages, cutting the income available for other spending.',
      'It makes new borrowing for cars and durables more expensive, so big-ticket purchases are postponed.',
      'It tends to lower house and share prices, reducing wealth and therefore confidence to spend.',
      'A CUT reverses each channel: saving is less rewarding, debt service falls, credit is cheaper and asset prices rise.',
    ],
    [
      'The effect depends on whether households are net borrowers or net savers. A rate rise transfers income from borrowers to savers, and savers - typically older and richer - have a LOWER marginal propensity to consume, so the net effect on spending is smaller than the borrower channel alone suggests.',
      'Time lags are long: most UK mortgages are now fixed for two to five years, so a rate change reaches household budgets only as those deals expire.',
      'At very low rates the effect weakens, because further cuts have little room to reduce borrowing costs and may signal that the economy is in trouble, denting confidence.',
      'If confidence is collapsing, cheap credit will not induce spending - households repair balance sheets instead. This is why rate cuts in 2008-09 did not immediately revive consumption.',
    ],
  ),
  det(
    'Consumer confidence',
    'Consumption depends on EXPECTED lifetime income, not just current income, so expectations move spending directly.',
    [
      'When households expect job security and rising pay, they are willing to run down savings and take on debt, so consumption rises for a given income.',
      'When they fear redundancy, precautionary saving rises and consumption falls even though current income is unchanged.',
      'Confidence is self-reinforcing: falling spending causes the job losses that were feared, which lowers confidence further.',
    ],
    [
      'Confidence indices are surveys of stated intentions, and what people say is a poor predictor of what they do - the correlation with actual spending is weaker than commentary suggests.',
      'Households with no savings cannot respond to improved confidence, so the effect is concentrated among those who already have a buffer.',
    ],
  ),
  det(
    'Wealth effects',
    'A rise in the value of assets people already own raises spending even though income has not changed.',
    [
      'Rising house prices allow equity withdrawal - remortgaging against the higher value - which finances consumption directly.',
      'They also raise perceived lifetime resources, so the need to save falls.',
      'Falling asset prices work in reverse and can be sharp, because debt is fixed in money terms while asset values are not.',
    ],
    [
      'Housing wealth is illiquid and, for most owner-occupiers, unrealisable: you still have to live somewhere, so a higher house price does not make you better off unless you trade down.',
      'The effect is concentrated among owners, so it widens the gap between owners and renters rather than raising consumption evenly.',
      'Share ownership in the UK is heavily skewed to the top decile, whose marginal propensity to consume is low, so equity wealth effects are modest.',
    ],
  ),
  h('Investment'),
  det(
    'The determinants of investment',
    'Investment is the most volatile component of AD because it depends on expectations of a future that is unknown.',
    [
      'Interest rates set the hurdle: a project goes ahead only if its expected rate of return exceeds the cost of finance, so a lower rate brings marginal projects above the line.',
      'Business confidence - Keynes\'s "animal spirits" - determines the expected return itself, and swings far more than interest rates do.',
      'Corporation tax reduces the post-tax return, so a cut raises the number of viable projects.',
      'Spare capacity matters: a firm running below capacity has no reason to add more, whatever the rate.',
    ],
    [
      'Investment is often interest-INELASTIC in the short run, because the expected return swamps the financing cost. A project expected to return 20 per cent goes ahead at 3 per cent or 5 per cent; one expected to lose money goes ahead at neither.',
      'The accelerator effect means investment responds to the RATE OF CHANGE of demand, not its level, so it can fall even while output is still growing.',
      'Retained profits fund much investment, so the availability of internal finance can matter more than the external rate.',
    ],
  ),
)

const circularFlowMultiplier = chapter(
  h('The circular flow'),
  p(
    'Households supply factors of production to firms and receive income; firms supply goods and receive expenditure. Injections - investment, government spending and exports - add to the flow. Withdrawals - saving, taxation and imports - leak from it. The economy is in equilibrium when planned injections equal planned withdrawals, not when they happen to be equal at a point in time.',
  ),
  h('The multiplier'),
  defn(
    'Multiplier',
    'The ratio of the final change in real national income to the initial change in an injection. k = 1 / (1 − MPC), or equivalently 1 / MPW where MPW = MPS + MPT + MPM.',
  ),
  p(
    'The mechanism is that one person\'s spending is another\'s income. An extra £100 of government spending becomes £100 of income for a contractor, who spends a fraction of it, which becomes income for someone else, and so on. The series converges because a fraction leaks out at each round.',
  ),
  table(
    ['MPW', 'Multiplier', 'Effect of £10bn injection'],
    [
      ['0.2', '5.0', '£50bn'],
      ['0.4', '2.5', '£25bn'],
      ['0.5', '2.0', '£20bn'],
      ['0.8', '1.25', '£12.5bn'],
    ],
  ),
  det(
    'Why the multiplier may be smaller than calculated',
    'The textbook figure assumes conditions that rarely all hold at once.',
    [
      'A high marginal propensity to import means much of each round leaks abroad, raising foreign incomes instead. The UK has a relatively high MPM, so its multiplier is smaller than a more closed economy\'s.',
      'If the economy is near full capacity, extra demand raises prices rather than output, so the REAL multiplier approaches zero even as the nominal figure holds.',
      'Crowding out: government borrowing may raise interest rates and displace private investment, offsetting part of the injection.',
      'If households expect the spending to be reversed by future tax rises, they may save the increase rather than spend it.',
    ],
    [
      'In a deep recession with large spare capacity and rates at the lower bound, none of these offsets bind strongly, and empirical multipliers have been estimated above 1.5.',
      'The composition matters: transfers to low-income households have a higher multiplier than tax cuts for high earners, because MPC falls as income rises.',
      'So the honest answer to "how big is the multiplier" is that it depends on the output gap, and stating that condition is what separates Level 5 from Level 3.',
    ],
  ),
)

/* ================================================= THEME 3 */

const economiesOfScale = chapter(
  h('Internal economies of scale'),
  table(
    ['Type', 'Mechanism'],
    [
      ['Technical', 'Larger plant spreads the fixed cost of machinery over more units; some processes are only viable at scale'],
      ['Purchasing', 'Bulk buying secures discounts, because the supplier saves on transaction costs and secures volume'],
      ['Managerial', 'Specialist managers can be employed and their cost spread over more output'],
      ['Financial', 'Larger firms borrow more cheaply, being seen as lower risk and able to access bond markets'],
      ['Marketing', 'The cost of a campaign is spread over far more units'],
      ['Risk-bearing', 'A diversified product range means one failure does not sink the firm'],
    ],
  ),
  h('Diseconomies of scale'),
  ul([
    'CONTROL: monitoring becomes harder as the firm grows, so waste and shirking rise and layers of management are added to police it.',
    'COMMUNICATION: messages pass through more layers, so information is distorted and decisions slow.',
    'MOTIVATION: workers feel like a number rather than a contributor, so effort and retention fall.',
  ]),
  p(
    'The long-run average cost curve is therefore U-shaped: falling while economies dominate, flat across the minimum efficient scale, and rising once diseconomies take over. The MINIMUM EFFICIENT SCALE is the lowest output at which LRAC is minimised, and it determines how many firms an industry can support.',
  ),
  det(
    'Why minimum efficient scale shapes market structure',
    'If MES is large relative to market demand, only a few firms can operate efficiently.',
    [
      'In electricity generation or aircraft manufacture, MES is a large share of total demand, so the industry is naturally concentrated - a natural monopoly or tight oligopoly.',
      'In hairdressing or plumbing, MES is tiny, so thousands of small firms can each be efficient and the market approaches perfect competition.',
      'This is why structure is not arbitrary: it follows from the technology of the industry.',
    ],
    [
      'Technology can change MES quickly. Digital distribution collapsed the MES for publishing and music, allowing small producers to compete with incumbents.',
      'Firms may operate below MES and survive by differentiating - a local bakery is not efficient by cost, but sells proximity and quality.',
      'External economies of scale, which come from the industry\'s size rather than the firm\'s, can let small firms in a cluster achieve costs a large isolated firm could not.',
    ],
  ),
)

const perfectCompetition = chapter(
  h('The assumptions, and why each one matters'),
  table(
    ['Assumption', 'What it produces'],
    [
      ['Many buyers and sellers', 'No single firm can influence price - each is a price TAKER'],
      ['Homogeneous product', 'No brand loyalty, so any price above the market rate loses all customers'],
      ['Perfect information', 'Buyers know every price, so no firm can charge more'],
      ['Freedom of entry and exit', 'Supernormal profit attracts entrants until it is competed away'],
      ['No externalities', 'Private and social costs coincide, so the outcome is allocatively efficient'],
    ],
  ),
  h('Short run to long run'),
  p(
    'In the short run a firm can earn supernormal profit where AR exceeds AC at the profit-maximising output MC = MR. That profit is a signal, and free entry is the mechanism that responds to it: new firms enter, industry supply shifts right, market price falls, and each firm\'s horizontal AR line drops until AR is tangent to AC. At that point only normal profit remains and entry stops.',
  ),
  ul([
    'ALLOCATIVE efficiency holds because P = MC: the price consumers pay equals the cost of the last unit, so no reallocation could make anyone better off.',
    'PRODUCTIVE efficiency holds because the tangency occurs at the minimum of AC.',
    'The firm shuts down in the SHORT run if price falls below average variable cost, since it can no longer cover the costs it could avoid by stopping.',
  ]),
  det(
    'Why perfect competition is still worth studying',
    'No real market meets the assumptions, which invites the objection that the model is useless.',
    [
      'It is a BENCHMARK: efficiency in other structures is judged by how far they depart from P = MC and minimum AC.',
      'It isolates the mechanism - free entry competing away profit - which operates in real markets even when the other assumptions fail.',
      'Some markets approximate it closely enough for the predictions to hold: foreign exchange, agricultural commodities and online marketplaces for identical goods.',
    ],
    [
      'The model has no innovation. With zero supernormal profit there is nothing to fund research, so a perfectly competitive industry would be technologically static - which is Schumpeter\'s argument that some monopoly power is dynamically efficient.',
      'It also assumes away the economies of scale that make large firms cheaper, so a perfectly competitive industry may have HIGHER costs than a concentrated one.',
    ],
  ),
)

const monopolisticCompetition = chapter(
  h('Where it sits'),
  p(
    'Monopolistic competition takes perfect competition and relaxes one assumption: the product is DIFFERENTIATED. That single change gives each firm a downward-sloping demand curve, because some customers will pay a little more for its particular version. Everything else follows from that.',
  ),
  table(
    ['Feature', 'Perfect competition', 'Monopolistic competition'],
    [
      ['Product', 'Identical', 'Differentiated'],
      ['Demand curve facing the firm', 'Horizontal', 'Downward-sloping but elastic'],
      ['Long-run profit', 'Normal', 'Normal'],
      ['Price versus MC', 'P = MC', 'P > MC'],
      ['Produces at minimum AC?', 'Yes', 'No - excess capacity'],
    ],
  ),
  p(
    'In the long run free entry still competes profit away, so AR ends up TANGENT to AC. But because AR now slopes down, the tangency occurs to the LEFT of minimum AC. The firm therefore has spare capacity it could use to lower unit costs but does not, and price exceeds marginal cost, so the outcome is neither productively nor allocatively efficient.',
  ),
  det(
    'Is the inefficiency a real cost?',
    'The model says monopolistic competition wastes resources; whether that matters is a judgement.',
    [
      'The excess capacity theorem is a genuine efficiency loss: restaurants, hairdressers and corner shops all operate below the output that would minimise their costs.',
      'Price above marginal cost means some consumers who value the good above its production cost do not buy it.',
    ],
    [
      'Against that, consumers gain VARIETY, and variety has value. A high street with one standardised restaurant would be productively efficient and worse.',
      'The mark-up is small because demand is elastic - close substitutes are one door away - so the deadweight loss is much smaller than under monopoly.',
      'So the standard judgement is that the efficiency loss is real but modest, and is the price paid for choice.',
    ],
  ),
)

const contestability = chapter(
  h('The idea'),
  defn(
    'Contestable market',
    'A market in which entry is free and exit is costless, so that the THREAT of entry disciplines incumbent behaviour regardless of how many firms are currently in it.',
  ),
  p(
    'The insight is that structure does not determine conduct. A monopolist in a perfectly contestable market cannot charge a monopoly price, because doing so would invite hit-and-run entry: a rival enters, undercuts, takes the profit and leaves before the incumbent can respond. Anticipating this, the incumbent sets price at normal-profit level without any competitor being present.',
  ),
  h('Sunk costs are the key variable'),
  p(
    'Contestability depends almost entirely on SUNK costs - the costs of entry that cannot be recovered on exit. If a potential entrant can lease aircraft and give them back, entry is cheap to reverse and the market is contestable. If entry requires a bespoke chemical plant with no alternative use, the risk of entry is enormous and the market is not contestable however low the formal barriers.',
  ),
  det(
    'Barriers to entry that reduce contestability',
    'Incumbents can raise the cost of entry deliberately, which is why the theory is used in competition policy.',
    [
      'LIMIT PRICING: setting price below the level a new entrant could sustain, so entry is unprofitable while still leaving the incumbent some profit.',
      'PREDATORY PRICING: pricing below cost to force an entrant out, then raising price again. Illegal, but hard to prove because it looks like competition.',
      'Brand loyalty and advertising create a sunk cost the entrant must match before it can sell anything.',
      'Legal barriers - patents, licences and regulation - are entry costs the incumbent has already paid.',
    ],
    [
      'Perfect contestability is as unrealistic as perfect competition: some sunk cost always exists, if only the management time of entering.',
      'Hit-and-run entry requires that the incumbent cannot cut price quickly, which in practice they usually can - airlines respond to a new route within days.',
      'The theory\'s value is therefore as a POLICY GUIDE: it says regulators should focus on removing sunk costs and entry barriers rather than on breaking up firms, because a concentrated but contestable market may behave competitively.',
    ],
  ),
)

const wageDetermination = chapter(
  h('The competitive labour market'),
  p(
    'Demand for labour is a DERIVED demand: firms hire labour not for its own sake but for the output it produces. A firm hires up to the point where the marginal revenue product of labour equals the wage, so the MRP curve is the firm\'s demand curve for labour.',
  ),
  det(
    'What shifts labour demand',
    'Anything that changes the revenue an extra worker generates.',
    [
      'A rise in the PRICE of the final product raises MRP at every level of employment, so demand for labour shifts right.',
      'A rise in PRODUCTIVITY - through training or better capital - raises the physical output per worker and so raises MRP.',
      'A fall in the price of substitute capital shifts demand left where machines can replace workers, and right where capital complements labour by raising its productivity.',
    ],
    [
      'The substitution depends on how easily the task can be codified. Routine manual and routine cognitive work is replaceable; non-routine interpersonal work is not, which is why automation has hollowed out the middle of the wage distribution rather than the bottom.',
      'In the short run capital is fixed, so labour demand is more inelastic than in the long run when the whole production method can be changed.',
    ],
  ),
  h('Monopsony'),
  p(
    'A monopsony is a single buyer of labour. Because it faces the whole upward-sloping market supply curve, hiring one more worker means paying the higher wage to EVERY worker, so the marginal cost of labour lies ABOVE the supply curve. The monopsonist hires where MCL = MRP, then pays only the wage on the supply curve at that quantity - so both employment and the wage are lower than in a competitive market.',
  ),
  det(
    'The minimum wage under monopsony',
    'This is the case where a minimum wage can raise employment as well as pay, which is why the empirical evidence on minimum wages is mixed rather than uniformly negative.',
    [
      'A minimum wage set between the monopsony wage and the competitive wage makes the marginal cost of labour constant at that wage, removing the wedge.',
      'The firm then hires where the minimum wage equals MRP, which is a HIGHER quantity than before.',
      'So pay rises and employment rises simultaneously - the opposite of the competitive prediction.',
    ],
    [
      'Set the minimum too high, above the competitive wage, and the standard result returns: employment falls and unemployment appears.',
      'Monopsony power is strongest in isolated local labour markets and in occupations with few employers - care homes, some public services - and weak in cities with many employers.',
      'Firms may also respond on other margins: cutting hours, training or non-wage benefits rather than headcount, which the employment statistics do not capture.',
    ],
  ),
  tip(
    'The strongest evaluation on any minimum wage question is that the effect depends on the ELASTICITY of labour demand and on whether the employer has monopsony power. State both conditions and apply them to the sector in the question.',
  ),
)

/* ================================================= THEME 4 */

const povertyInequality = chapter(
  h('Measuring it'),
  table(
    ['Measure', 'What it captures'],
    [
      ['Absolute poverty', 'Income below a fixed subsistence line, such as the World Bank $2.15 a day'],
      ['Relative poverty', 'Income below a proportion of the national median, typically 60% - so it measures inequality, not destitution'],
      ['Lorenz curve', 'Cumulative share of income against cumulative share of population; the further from the 45° line, the greater the inequality'],
      ['Gini coefficient', 'The area between the Lorenz curve and the 45° line as a proportion of the whole triangle; 0 is perfect equality, 1 perfect inequality'],
    ],
  ),
  p(
    'Absolute and relative poverty can move in opposite directions. Rapid growth that lifts everyone can cut absolute poverty while raising relative poverty if the gains go disproportionately to the top - which is roughly what happened in China after 1990.',
  ),
  det(
    'Causes of inequality',
    'Inequality of income and inequality of wealth have different drivers and need separating.',
    [
      'WAGE inequality has risen with skill-biased technological change: technology raises the productivity of skilled workers and substitutes for routine work, widening the gap.',
      'Declining trade union density has reduced workers\' bargaining power at the lower end.',
      'WEALTH inequality is more extreme than income inequality because wealth compounds - returns accrue to those who already have assets - and is inherited.',
      'Tax and benefit systems redistribute, so the pre-tax and post-tax Gini can differ substantially.',
    ],
    [
      'Some inequality is necessary as an INCENTIVE: it rewards risk-taking, effort and the acquisition of skills, and a perfectly equal distribution would remove the signal that directs labour to where it is most valued.',
      'The trade-off is not linear. Very high inequality damages growth by limiting access to education and credit for those at the bottom, so the efficiency-equity trade-off may not exist at the extremes.',
      'The Gini is a single number and hides WHERE the inequality is: two countries with the same Gini can have very different distributions.',
    ],
  ),
  det(
    'Policies to reduce inequality',
    'Each works through a different channel and each has a cost.',
    [
      'PROGRESSIVE taxation takes a rising proportion of income as income rises, directly compressing the post-tax distribution.',
      'Means-tested benefits target support at the bottom, so each pound of spending reduces poverty more than a universal payment does.',
      'Investment in education raises the earning capacity of those at the bottom, addressing the cause rather than the symptom.',
      'A national minimum wage raises the floor of the wage distribution.',
    ],
    [
      'High marginal rates may weaken work incentives and encourage avoidance or emigration, so revenue rises by less than the rate change implies - the Laffer argument.',
      'Means testing creates the POVERTY TRAP: as income rises, benefits are withdrawn, so the effective marginal tax rate on the low-paid can exceed that on the rich, discouraging extra hours.',
      'Education raises earnings only after a long lag - a decade or more - so it does nothing for current poverty.',
      'The judgement usually turns on the time horizon: transfers work now, education works later, and a serious strategy needs both.',
    ],
  ),
)

const developmentStrategies = chapter(
  h('Market-led against interventionist'),
  table(
    ['Market-led', 'Interventionist'],
    [
      ['Trade liberalisation - exploit comparative advantage', 'Infrastructure investment - roads, ports, power'],
      ['Foreign direct investment - capital and technology transfer', 'Human capital investment - education and health'],
      ['Removal of subsidies and price controls', 'Protectionism to shelter infant industries'],
      ['Privatisation and deregulation', 'Managed exchange rates and capital controls'],
      ['Microfinance', 'Buffer stock schemes to stabilise commodity prices'],
    ],
  ),
  det(
    'Foreign direct investment',
    'FDI is the strategy most often recommended and most often disputed.',
    [
      'It brings CAPITAL a poor country cannot generate from domestic saving, breaking the savings gap in the Harrod-Domar model.',
      'It transfers technology and management practice, raising productivity beyond the firm itself through spillovers to suppliers.',
      'It creates employment and raises tax revenue, funding public investment.',
      'It integrates the country into global supply chains, raising exports and easing the foreign currency constraint.',
    ],
    [
      'Profits are REPATRIATED, so much of the value created leaves. The net gain depends on how much is reinvested locally.',
      'Multinationals may use transfer pricing to shift profits to low-tax jurisdictions, so the tax revenue may not materialise.',
      'Enclave development: an extractive project can operate with imported equipment and expatriate managers, generating little local linkage.',
      'Competition for FDI can trigger a race to the bottom on tax, wages and environmental standards, so the host captures less than it hoped.',
    ],
  ),
  det(
    'Aid',
    'The debate on aid is a standard 25-mark question and needs both sides properly developed.',
    [
      'Aid fills the SAVINGS GAP where domestic income is too low to fund the investment needed for growth.',
      'It fills the FOREIGN EXCHANGE gap, allowing imports of capital goods without a balance of payments crisis.',
      'Targeted aid for health and education raises human capital, which raises long-run productive capacity.',
      'Emergency aid saves lives where the alternative is famine or epidemic.',
    ],
    [
      'Aid can create DEPENDENCY, weakening the incentive to develop domestic tax capacity and institutions.',
      'Where governance is weak it may be captured by elites, so it entrenches the political failure that caused the poverty.',
      'Tied aid requires purchases from the donor country, which reduces its value to the recipient and subsidises the donor\'s exporters.',
      'The evidence is genuinely mixed, and the most defensible judgement is that aid works where institutions are adequate and fails where they are not - so institutional quality, not the amount of aid, is the binding constraint.',
    ],
  ),
  tip(
    'On any development question, the highest-scoring judgement identifies the BINDING CONSTRAINT for the specific country described. Capital, infrastructure, human capital, institutions and market access are all necessary; naming which one is missing in the context given is what earns AO4.',
  ),
)

const publicExpenditureTaxation = chapter(
  h('Types of public expenditure'),
  table(
    ['Type', 'Meaning'],
    [
      ['Capital', 'Investment in assets that raise future productive capacity - roads, schools, hospitals'],
      ['Current', 'Day-to-day running costs - salaries, medicines, maintenance'],
      ['Transfer payments', 'Redistribution with no output in return - pensions, benefits; not counted in G within AD'],
    ],
  ),
  p(
    'Note the last row: transfer payments are excluded from G in the AD identity because no good or service is produced. They still affect AD, but through consumption, once the recipient spends them.',
  ),
  h('Principles of taxation'),
  ul([
    'A good tax should be EQUITABLE (based on ability to pay), CERTAIN, CONVENIENT to pay, ECONOMICAL to collect, EFFICIENT (minimising distortion), and FLEXIBLE.',
    'These conflict. A poll tax is cheap to collect and hard to avoid, but grossly inequitable. A finely targeted progressive system is equitable but expensive to administer and easier to avoid.',
  ]),
  det(
    'Direct against indirect taxation',
    'The balance between them is a recurring policy question and a standard essay.',
    [
      'DIRECT taxes on income and profit can be made progressive, so they reduce inequality directly, and they are difficult to avoid for employees taxed at source.',
      'INDIRECT taxes on spending are harder to evade, can be targeted at demerit goods to correct externalities, and do not directly reduce the incentive to work.',
      'A shift from direct to indirect taxation raises the return to work, which may increase labour supply.',
    ],
    [
      'Indirect taxes are REGRESSIVE: a flat rate on spending takes a larger share of a low income, because the poor spend a higher proportion of income.',
      'High direct taxes may reduce work incentives and encourage avoidance, though the empirical response of hours worked to tax rates is small for most workers and concentrated among second earners and the very high paid.',
      'The judgement usually turns on which objective dominates: if reducing inequality is the priority, direct taxation wins; if raising revenue efficiently with minimal distortion is the priority, indirect taxation has the advantage.',
    ],
  ),
  det(
    'The Laffer curve',
    'The claim is that beyond some rate, raising the tax rate lowers total revenue.',
    [
      'At a rate of zero, revenue is zero. At 100 per cent, nobody works for taxed income, so revenue is also zero.',
      'Between them revenue rises and then falls, so there is a revenue-maximising rate.',
      'Above that rate, cutting taxes raises revenue by expanding the tax base through more work, less avoidance and less emigration.',
    ],
    [
      'The curve is uncontroversial in shape and highly contested in POSITION - nobody knows where the peak is, and estimates for the top UK rate range from about 45 to well above 70 per cent.',
      'The behavioural response is dominated by avoidance and income shifting rather than genuine changes in effort, which means the answer depends on how tight the tax code is rather than on economics alone.',
      'It says nothing about whether the revenue-maximising rate is DESIRABLE - that is a separate judgement about equity.',
    ],
  ),
)

const centralBanks = chapter(
  h('The functions of a central bank'),
  ul([
    'Implementing MONETARY POLICY - setting Bank Rate and conducting quantitative easing to hit the inflation target.',
    'Acting as BANKER to the government and to commercial banks.',
    'Acting as LENDER OF LAST RESORT to solvent banks facing a liquidity crisis, which prevents a bank run becoming a system collapse.',
    'Maintaining FINANCIAL STABILITY through regulation and stress testing.',
  ]),
  det(
    'Why central bank independence matters',
    'The Bank of England was given operational independence over interest rates in 1997, and the reasoning is a standard exam answer.',
    [
      'A government facing an election has an incentive to cut rates for a short-term boost, accepting inflation later - the TIME INCONSISTENCY problem.',
      'Knowing this, firms and households build higher inflation into wage and price expectations, so the economy gets the inflation without the growth.',
      'An independent central bank with a clear mandate removes the incentive, so inflation expectations anchor at the target and the sacrifice ratio - the output cost of disinflation - falls.',
    ],
    [
      'Independence has a democratic cost: unelected officials make decisions with large distributional consequences, and quantitative easing in particular raised asset prices and so wealth inequality.',
      'The mandate itself is set by government, so independence is operational rather than absolute.',
      'Credibility can be lost. If inflation overshoots persistently, expectations de-anchor and the benefit disappears regardless of the formal arrangements.',
    ],
  ),
  h('Regulation after 2008'),
  table(
    ['Measure', 'Purpose'],
    [
      ['Higher capital requirements', 'Banks absorb losses from their own equity rather than from depositors or taxpayers'],
      ['Liquidity requirements', 'Banks hold enough liquid assets to survive a funding freeze'],
      ['Ring-fencing', 'Retail banking is separated from investment banking, so a trading loss cannot take down the deposit-taking arm'],
      ['Stress testing', 'Regulators check that banks would survive a severe but plausible downturn'],
    ],
  ),
  det(
    'Moral hazard',
    'The core problem regulation is trying to solve.',
    [
      'If a bank believes it will be rescued because its failure would be catastrophic, it faces the upside of risk but not the full downside.',
      'It therefore takes more risk than is socially optimal, and its funding is cheap because lenders expect the same rescue.',
      'Higher capital requirements force shareholders to have more at stake, restoring some of the downside.',
    ],
    [
      'Regulation is costly: capital held in reserve is capital not lent, so tighter rules can reduce credit to small businesses and slow growth.',
      'Regulatory arbitrage moves risky activity to the less-regulated shadow banking sector rather than eliminating it.',
      'There is a genuine trade-off between stability and growth, and the right point on it depends on how costly a crisis is judged to be relative to slower lending.',
    ],
  ),
)

const economicGrowth = chapter(
  h('Actual and potential growth'),
  p(
    'ACTUAL growth is an increase in real GDP - a movement towards or along the production possibility frontier, shown as a rightward shift of AD or SRAS closing an output gap. POTENTIAL growth is an increase in productive capacity - an outward shift of the PPF and of LRAS. Only potential growth can be sustained indefinitely.',
  ),
  det(
    'Causes of potential growth',
    'Anything that raises the quantity or quality of the factors of production.',
    [
      'Investment in physical CAPITAL raises output per worker, though diminishing returns mean each extra unit adds less.',
      'HUMAN capital - education, training, health - raises the productivity of the existing workforce and is not subject to the same diminishing returns.',
      'TECHNOLOGICAL progress raises output from the same inputs and is the only source of indefinitely sustained growth in the standard model.',
      'Increases in the labour supply through population growth, migration or higher participation.',
      'Institutional quality: secure property rights and a functioning legal system determine whether the other factors are used productively.',
    ],
    [
      'Investment requires saving, and in a low-income economy income may be too low to generate it - the savings gap.',
      'Growth in capacity does nothing for living standards if demand does not grow with it; the economy simply operates further inside its frontier.',
      'The composition matters: growth concentrated in one sector or region may leave average income higher and most people no better off.',
    ],
  ),
  det(
    'Costs of growth',
    'A balanced answer must weigh these against the benefits rather than listing them.',
    [
      'ENVIRONMENTAL: growth typically raises emissions and resource depletion, imposing costs on future generations that current prices do not reflect.',
      'INEQUALITY: the gains often accrue to capital owners and skilled workers, so the distribution can worsen even as the average rises.',
      'The OPPORTUNITY COST of investment is current consumption forgone - a country growing fast is consuming less now.',
      'Structural change destroys jobs in declining industries, and the workers displaced often cannot move to the growing ones.',
    ],
    [
      'The environmental cost is not fixed. The Environmental Kuznets Curve suggests pollution rises then falls with income, as richer societies demand and can afford cleaner technology.',
      'Growth also funds the healthcare, education and environmental protection that raise living standards, so slower growth has costs too.',
      'The judgement is usually about the TYPE of growth rather than growth itself: growth driven by productivity and clean technology carries far lower costs than growth driven by resource extraction.',
    ],
  ),
)

const publicGoodsInformation = chapter(
  h('Public goods'),
  table(
    ['Property', 'Meaning', 'Consequence'],
    [
      ['Non-rival', 'One person\'s consumption does not reduce the amount available to others', 'The marginal cost of an extra user is zero, so any positive price is allocatively inefficient'],
      ['Non-excludable', 'Nobody can be prevented from consuming it', 'Nobody will pay voluntarily - the free rider problem'],
    ],
  ),
  p(
    'Because of the free rider problem, a pure public good will not be provided by the market at all - this is MISSING MARKET failure, and it is why national defence, street lighting and flood defences are state-provided. Note the distinction from other market failures, where the market provides the wrong quantity rather than none.',
  ),
  ul([
    'A QUASI-PUBLIC good has one property partially: a road is non-rival until it congests, and can be made excludable with a toll.',
    'Technology changes the classification. Encryption made broadcast television excludable, moving it from public good to private good.',
  ]),
  det(
    'Information gaps',
    'Efficient allocation requires that buyers and sellers know what they are trading; where they do not, price stops reflecting value.',
    [
      'ASYMMETRIC information means one side knows more than the other. The seller of a used car knows its history; the buyer does not.',
      'This causes ADVERSE SELECTION: buyers offer only the average price, so owners of good cars withdraw, average quality falls, and the market unravels.',
      'In insurance the asymmetry runs the other way - the buyer knows their own risk - so the highest-risk people are most likely to buy, pushing premiums up and driving out the low-risk.',
      'MORAL HAZARD is different again: once insured, behaviour changes because the consequences are borne by someone else.',
    ],
    [
      'Markets develop their own remedies - warranties, brands, no-claims discounts, excesses - so intervention may be unnecessary.',
      'Government provision of information is cheap relative to regulation, but only works if people ACT on it: calorie labelling changes behaviour far less than the information deficit alone would predict, because the failure is partly behavioural rather than informational.',
      'Compulsory purchase, as with car insurance, solves adverse selection by removing the choice, at the cost of forcing some people to buy something they would not choose.',
    ],
  ),
)

const demergers = chapter(
  h('Why firms split up'),
  p(
    'A demerger is the opposite of integration: a business is divided into two or more independent firms. The reasons are the mirror image of the reasons for merging, and a question on demergers usually expects that link to be made explicit.',
  ),
  det(
    'Motives for demerger',
    'Each one is an admission that the earlier expansion did not deliver.',
    [
      'DISECONOMIES of scale: the combined firm had become too large to control and communicate within, so average costs rose rather than fell.',
      'LACK OF SYNERGY: the expected cost savings or cross-selling never materialised, so the parts are worth more separately.',
      'FOCUS: management attention is scarce, and a conglomerate spreads it across businesses with nothing in common.',
      'The CONGLOMERATE DISCOUNT: markets value diversified groups below the sum of their parts, because investors can diversify their own portfolios more cheaply than a firm can.',
      'REGULATORY pressure: a competition authority may require divestment as the condition of approving something else.',
    ],
    [
      'Demerging destroys any economies of scale that WERE being achieved - shared distribution, purchasing power, financial strength - so the cost base of each part may rise.',
      'The transaction itself is expensive in fees, restructuring and management time, and the benefits are uncertain.',
      'Some demergers are financial engineering rather than genuine restructuring, aimed at a short-term share price gain rather than at operating performance.',
    ],
  ),
  h('Consequences'),
  table(
    ['Stakeholder', 'Likely effect'],
    [
      ['Workers', 'Job losses where duplicated head-office functions are cut; greater clarity of purpose for those who remain'],
      ['Consumers', 'More competition if the parts now compete, but loss of any scale economies that kept prices down'],
      ['Shareholders', 'Potential gain if the conglomerate discount is removed; loss if the split destroys real synergies'],
      ['Firms', 'Sharper focus and clearer accountability, at the cost of scale and diversification of risk'],
    ],
  ),
)

export const ECON_EXTRA_DEPTH = {
  'Price Determination and the Price Mechanism': priceMechanism,
  Externalities: externalities,
  'Public Goods and Information Gaps': publicGoodsInformation,
  'Consumption, Savings and Investment': consumptionSavingInvestment,
  'The Circular Flow of Income and the Multiplier': circularFlowMultiplier,
  'Causes and Effects of Economic Growth': economicGrowth,
  'Economies and Diseconomies of Scale': economiesOfScale,
  'Perfect Competition': perfectCompetition,
  'Monopolistic Competition': monopolisticCompetition,
  Contestability: contestability,
  'Wage Determination': wageDetermination,
  Demergers: demergers,
  'Poverty and Inequality': povertyInequality,
  'Measures and Strategies for Development': developmentStrategies,
  'Public Expenditure and Taxation': publicExpenditureTaxation,
  'Central Banks and Financial Regulation': centralBanks,
}
