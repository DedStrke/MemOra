/*
  Theme 1: Introduction to markets and market failure - the foundations.

  Methodology, the economic problem, demand, supply, elasticity and the price
  mechanism. Same standard as Theme 2: every determinant states its mechanism
  and the reason the mechanism may not hold.

  The elasticity chapters carry the most evaluation, because "it depends on
  elasticity" is the single most useful sentence in the subject - but only if
  you can say WHY the elasticity is what it is, and why the estimate might be
  wrong. Both are here.
*/

import { h, p, defn, det, worked, diagram, tip, table, chapter } from './econ-notes-build'

/* ================================================== METHODOLOGY */

const methodology = chapter(
  h('Economics as a social science'),
  p(
    'Economics studies human behaviour, so it cannot run controlled laboratory experiments. Instead it builds models - deliberate simplifications that hold most variables constant to isolate one relationship.',
  ),
  defn(
    'Ceteris paribus',
    'All other things being equal. Economists change one variable and hold the rest constant, because in the real world everything moves at once and no single effect could otherwise be identified.',
  ),
  det(
    'Why models are necessary',
    'The economy is too complex to analyse whole, so simplification is not a weakness but the method.',
    [
      'A model isolates a relationship - for example, price and quantity demanded - so it can be reasoned about.',
      'Models generate testable predictions, which is what makes economics a science rather than opinion.',
    ],
    [
      'Assumptions may be unrealistic: perfect information and perfect rationality are both false, and behavioural economics shows how far.',
      'Ceteris paribus never actually holds, so a prediction can fail because something else moved rather than because the model is wrong - which makes models hard to falsify.',
      'Economists disagree because they weight assumptions differently, which is why the subject produces competing schools rather than settled answers.',
    ],
  ),
  h('Positive and normative statements'),
  table(
    ['Type', 'Definition', 'Example'],
    [
      [
        'Positive',
        'Objective and testable against evidence. It can be shown true or false.',
        '"A rise in the minimum wage increases unemployment among 16–24 year olds."',
      ],
      [
        'Normative',
        'A value judgement about what OUGHT to be. It cannot be proven, only argued.',
        '"The government should raise the minimum wage."',
      ],
    ],
  ),
  tip(
    'Look for "should", "ought", "too high", "unfair", "better" - these signal a normative statement. A statement can contain data and still be normative if it makes a judgement about desirability.',
  ),
  p(
    'Both matter to policy: positive analysis predicts what a policy will do, normative judgement decides whether that outcome is desirable. Value judgements explain why economists agreeing on the analysis can still disagree on the policy.',
  ),

  h('The basic economic problem'),
  defn(
    'The economic problem',
    'Resources are scarce but wants are infinite, so choices must be made about how to allocate them.',
  ),
  p('*The three fundamental questions:* what to produce, how to produce it, and for whom to produce it.'),
  table(
    ['Factor of production', 'Reward'],
    [
      ['Land - all natural resources', 'Rent'],
      ['Labour - human effort, physical and mental', 'Wages'],
      ['Capital - man-made aids to production', 'Interest'],
      ['Enterprise - risk-taking and organising the other three', 'Profit'],
    ],
  ),
  defn(
    'Opportunity cost',
    'The value of the next best alternative forgone when a choice is made.',
  ),
  det(
    'Why opportunity cost matters',
    'Every choice by consumers, producers and government has one, and identifying it is often the whole point of a question.',
    [
      'Consumers: spending on one good means forgoing another.',
      'Producers: using resources for one product means not producing something else.',
      'Government: spending on health means less for defence - this is the argument behind every "opportunity cost" evaluation point.',
    ],
    [
      'It is hard to value: the next best alternative is hypothetical, so its value is an estimate.',
      'Sunk costs should be ignored in the decision but psychologically are not - people continue with failing projects because of money already spent.',
      'Where resources are UNEMPLOYED there is little or no opportunity cost, since using them costs nothing forgone. This is a strong argument for spending in a recession.',
    ],
  ),
  h('Specialisation and the division of labour'),
  det(
    'Specialisation',
    'Concentrating on what you are relatively best at, then trading for everything else. Adam Smith’s pin factory is the founding example.',
    [
      'Workers become faster and more skilled at a repeated task, raising output per worker.',
      'No time is lost switching between tasks.',
      'Training is cheaper and quicker when it covers one task rather than many.',
      'It makes mechanisation possible, since a single repeated task can be automated.',
      'It lowers unit costs, so it lowers prices and raises real incomes.',
    ],
    [
      'Work becomes repetitive and boring, lowering motivation, raising absenteeism and staff turnover, and potentially reducing quality.',
      'Workers become occupationally immobile - a highly specialised skill is worthless if that industry declines, causing structural unemployment.',
      'Interdependence creates fragility: a breakdown in one stage halts the whole process, as global supply chain disruptions have shown.',
      'Less variety of output if firms all specialise in the same things.',
    ],
  ),
  p(
    'Specialisation requires a *medium of exchange*. Without money, trade needs a double coincidence of wants. Money also acts as a store of value, a unit of account and a standard of deferred payment.',
  ),
)

/* ========================================================= PPF */

const ppf = chapter(
  defn(
    'Production possibility frontier',
    'A curve showing the maximum combinations of two goods an economy can produce when all its resources are fully and efficiently employed.',
  ),
  diagram('ppf'),
  table(
    ['Point', 'Meaning'],
    [
      ['On the curve', 'Productively efficient - all resources fully employed. Moving along it has an opportunity cost.'],
      ['Inside the curve', 'Unemployed or inefficiently used resources. Output can rise with no opportunity cost.'],
      ['Outside the curve', 'Unattainable with current resources and technology - only reachable if the curve shifts.'],
    ],
  ),
  det(
    'Why the PPF is concave to the origin',
    'Because opportunity cost RISES as more of one good is produced.',
    [
      'Resources are not equally suited to both uses. The first resources moved are those best suited to the new good and least suited to the old one, so little is given up.',
      'As production continues, increasingly unsuitable resources must be switched, so more and more of the other good is sacrificed per unit gained.',
      'The gradient of the PPF at any point IS the opportunity cost.',
    ],
    [
      'If resources were perfectly substitutable the PPF would be a straight line with constant opportunity cost - this is the assumption used in comparative advantage.',
      'It is a two-good model, so it simplifies drastically; the insight generalises but the diagram does not.',
    ],
  ),
  h('Shifts in the PPF'),
  diagram('ppf-shift'),
  det(
    'Outward shift - potential growth',
    'An increase in the quantity or quality of factors of production.',
    [
      'More labour: population growth, net immigration, higher participation.',
      'More capital: net investment above depreciation.',
      'Better human capital: education and training.',
      'Technological progress - the main long-run driver.',
      'Discovery of natural resources.',
    ],
    [
      'A shift raises CAPACITY, not actual output - the economy can still operate inside the new frontier.',
      'Growth may be uneven: an improvement in capital goods technology pivots the curve rather than shifting it uniformly.',
    ],
  ),
  det(
    'Capital goods against consumer goods',
    'The choice between present and future consumption is the classic PPF trade-off.',
    [
      'Producing more capital goods means less consumption today, but a larger capital stock, so the PPF shifts further out and more of everything is available later.',
      'This is why high-investment economies grow faster over decades.',
    ],
    [
      'It requires households to accept lower living standards now, which is politically difficult in a democracy.',
      'Investment only raises capacity if it is productive - misallocated investment shifts nothing.',
    ],
  ),
  h('Inward shifts'),
  det(
    'What moves the PPF the wrong way',
    'Capacity can fall as well as rise.',
    [
      'Natural disaster, war or pandemic destroying capital and labour.',
      'Net emigration of working-age people, or a falling participation rate.',
      'Depreciation exceeding gross investment, so the capital stock shrinks.',
      'Depletion of a natural resource the economy depended on.',
      'HYSTERESIS: a deep recession can lower LRAS permanently, as long-term unemployed workers lose skills and firms cancel investment. This is the crucial link between a short-run demand shock and long-run capacity.',
    ],
    [
      'Some inward shifts are temporary and recovered quickly once the shock passes.',
      'Technology may offset resource depletion by finding substitutes or raising extraction efficiency.',
    ],
  ),
  h('Using the PPF to show economic concepts'),
  table(
    ['Concept', 'How it appears on the PPF'],
    [
      ['Scarcity', 'The frontier exists at all - points beyond it are unattainable'],
      ['Choice', 'Any point on the curve is a decision about the combination to produce'],
      ['Opportunity cost', 'The gradient - how much of one good is given up for one more of the other'],
      ['Productive efficiency', 'Any point ON the curve'],
      ['Allocative efficiency', 'The ONE point on the curve society most values - the PPF cannot identify it without preferences'],
      ['Unemployment', 'Any point inside the curve'],
      ['Economic growth', 'An outward shift (potential) or a move from inside towards the curve (actual)'],
    ],
  ),
  tip(
    'The PPF shows productive efficiency but NOT allocative efficiency - every point on the curve is productively efficient, and the diagram alone cannot say which one society should choose. Saying so is a quick evaluation mark.',
  ),
)

/* ============================================ ECONOMIC SYSTEMS */

const economicSystems = chapter(
  p('Every economy must answer the three fundamental questions. Systems differ in who answers them.'),
  table(
    ['System', 'Who allocates', 'Strengths', 'Weaknesses'],
    [
      [
        'Free market',
        'The price mechanism, driven by profit and self-interest',
        'Efficient allocation, strong incentives to innovate and cut costs, consumer sovereignty, no bureaucracy',
        'Market failure ignored: externalities, missing public goods, monopoly abuse, extreme inequality, no provision for those unable to pay',
      ],
      [
        'Command',
        'The state, through central planning',
        'Can produce public goods, limit externalities, distribute equitably, and pursue full employment',
        'No profit incentive so low efficiency and innovation, information problem makes planning inaccurate, shortages and surpluses, loss of consumer choice',
      ],
      [
        'Mixed',
        'Both - markets allocate most goods, the state intervenes where markets fail',
        'Combines efficiency with correction of market failure; the system used by essentially every real economy',
        'Where to draw the line is contested, and government failure is possible on the state side',
      ],
    ],
  ),
  det(
    'Adam Smith’s invisible hand',
    'Individuals pursuing self-interest are led, as if by an invisible hand, to an outcome that benefits society.',
    [
      'Consumers maximise utility and firms maximise profit; the price mechanism coordinates them without any central direction.',
      'Prices signal scarcity, ration limited supply, and incentivise producers to move resources to where they are most valued.',
    ],
    [
      'It only holds when there is no market failure. Externalities, public goods, information gaps and monopoly all break the result.',
      'It says nothing about EQUITY - an efficient outcome can be deeply unequal, since the market allocates to those with purchasing power, not to those with need.',
      'It assumes rationality and perfect information, both of which behavioural economics undermines.',
    ],
  ),
  h('Hayek and the knowledge problem'),
  p(
    'Hayek argued central planning must fail because the knowledge needed - millions of local preferences and constraints - is dispersed among individuals and cannot be collected centrally. Prices aggregate that knowledge automatically. This is the strongest theoretical case against command economies.',
  ),
  h('Marx and the critique of the market'),
  p(
    'Marx argued the opposite: that a free market concentrates ownership of capital in few hands, so workers are paid less than the value they create and inequality widens over time. Whether or not you accept the conclusion, it identifies the market’s genuine weakness - it distributes by ownership and purchasing power, not by need or contribution.',
  ),
  h('The role of the state in a mixed economy'),
  table(
    ['Function', 'Why the market cannot do it alone'],
    [
      ['Provide public goods', 'Non-excludability means the free rider problem prevents any market forming'],
      ['Correct externalities', 'Third-party costs and benefits are not in the price'],
      ['Regulate monopoly', 'Market power produces allocative inefficiency and consumer exploitation'],
      ['Provide merit goods', 'Information gaps cause under-consumption of education and healthcare'],
      ['Redistribute income', 'The market rewards ownership, not need - an efficient outcome can be very unequal'],
      ['Macroeconomic stability', 'Markets do not self-correct quickly; Keynes argued they can settle below full employment'],
      ['Establish property rights and the rule of law', 'Markets cannot function without enforceable contracts'],
    ],
  ),
  det(
    'How much should the state do?',
    'The central question in the subject, and there is no settled answer.',
    [
      'Free-market economists point to government failure - the information problem, unintended consequences, regulatory capture and administrative cost.',
      'Interventionists point to market failure - externalities, public goods, inequality and instability.',
    ],
    [
      'The honest comparison is between an imperfect market and an imperfect government, not between a market and a perfect ideal.',
      'The right answer differs by MARKET: defence needs full state provision, groceries need almost none, healthcare is contested.',
      'It also depends on state capacity: intervention that works in a country with strong institutions may fail where corruption is high.',
    ],
  ),
)

/* ======================================= RATIONAL DECISION MAKING */

const rationalDecisions = chapter(
  p(
    'Traditional economic theory assumes agents are rational: consumers maximise utility, firms maximise profit, and government maximises social welfare. Behavioural economics documents where that fails.',
  ),
  defn('Utility', 'The satisfaction gained from consuming a good or service.'),
  defn(
    'Diminishing marginal utility',
    'Each additional unit consumed gives less extra satisfaction than the last. This is why the demand curve slopes downward - a consumer will only buy more if the price falls to match the lower utility of the extra unit.',
  ),
  h('Why consumers may not behave rationally'),
  det(
    'Bounded rationality and bounded self-control',
    'People do not have the time, information or computational ability to optimise, so they satisfice - choosing something good enough rather than best.',
    [
      'Comparing every mobile phone tariff would take longer than the saving is worth, so people pick a reasonable one.',
      'Bounded self-control: people know what is best long-term and choose otherwise anyway - under-saving for retirement, over-eating.',
    ],
    [
      'Satisficing may itself be rational once the cost of searching is included in the calculation, which weakens the criticism.',
      'People learn from repeated decisions, so errors may shrink for frequent purchases even if they persist for rare ones.',
    ],
  ),
  det(
    'Rules of thumb (heuristics)',
    'People use mental shortcuts rather than full calculation.',
    ['Buying the same brand out of habit; assuming a higher price means higher quality; anchoring on the first price seen.'],
    ['Heuristics are usually fast and roughly right, so they are efficient; they only cause harm in unusual cases firms can exploit.'],
  ),
  det(
    'Social norms, habit and inertia',
    'Behaviour is shaped by what others do and by what was done before.',
    [
      'Recycling rates rise when neighbours recycle; energy use falls when households are told they use more than similar homes.',
      'Inertia keeps people on default options - the same tariff, the same bank - even when better ones exist.',
    ],
    [
      'Norms change slowly, so policy relying on them works over years.',
      'Inertia can be used FOR the consumer: automatic pension enrolment sharply raised saving precisely because people do not switch away from defaults.',
    ],
  ),
  det(
    'Loss aversion, altruism and biases',
    'Losses feel larger than equivalent gains, and people care about fairness, not just their own payoff.',
    [
      'Loss aversion explains the endowment effect - people demand more to give up something than they would pay to acquire it.',
      'Altruism explains charitable giving and volunteering, which pure self-interest cannot.',
      'Present bias explains under-saving; the costs of saving are now and the benefits are distant.',
    ],
    [
      'These behaviours are still consistent and predictable, so they can be modelled - behavioural economics extends the rational model rather than destroying it.',
      'The size of these effects varies enormously between people and contexts, so policy based on them may not generalise.',
    ],
  ),
  h('Behavioural policy: nudges'),
  p(
    'A *nudge* changes the choice architecture to steer behaviour while preserving freedom of choice - default enrolment into pensions, placing fruit at eye level, telling taxpayers most people pay on time.',
  ),
  det(
    'Are nudges a good policy tool?',
    'They are cheap, preserve choice, and can be highly effective.',
    ['Automatic pension enrolment raised UK participation dramatically at almost no fiscal cost.'],
    [
      'Effects can be small and may fade once the novelty passes.',
      'They raise an ethical question: who decides the direction of the nudge, and is manipulating choice architecture legitimate even when well-intentioned?',
      'They may be used to avoid stronger, more effective but less popular intervention such as regulation or taxation.',
    ],
  ),
)

/* ====================================================== DEMAND */

const demand = chapter(
  defn(
    'Demand',
    'The quantity of a good or service consumers are willing AND able to buy at each price, in a given time period.',
  ),
  p('Demand slopes downward for two reasons, and naming both is worth more than naming one.'),
  table(
    ['Reason', 'Explanation'],
    [
      [
        'Income effect',
        'A price fall raises real purchasing power, so the consumer can afford more of the good with the same money income.',
      ],
      [
        'Substitution effect',
        'A price fall makes the good cheaper relative to substitutes, so consumers switch towards it. When Coke falls in price, some Pepsi drinkers switch.',
      ],
    ],
  ),
  p(
    'A third route: existing buyers buy more because of *diminishing marginal utility* - the second unit is worth less to them, so they only buy it if the price is lower. And new consumers enter the market who previously found it too expensive.',
  ),
  diagram('supply-demand'),
  h('Movements against shifts - the distinction that carries marks'),
  table(
    ['Movement ALONG the curve', 'SHIFT of the curve'],
    [
      [
        'Caused ONLY by a change in the good’s own price. An EXTENSION is a rise in quantity demanded after a price fall; a CONTRACTION is a fall after a price rise.',
        'Caused by any NON-PRICE factor. More or less is demanded at every price.',
      ],
    ],
  ),
  tip(
    'Never say "demand rises" when the price falls - quantity demanded rises. Examiners use this to separate students who understand the model from those who have memorised it.',
  ),
  diagram('demand-shift'),
  h('The conditions of demand (PIRATES)'),
  det(
    'Population and demographics',
    'A larger population, or a change in its structure, shifts demand.',
    ['More consumers means higher demand at every price. An ageing population raises demand for healthcare and shifts it away from schooling.'],
    ['The effect depends on the age and income profile of the change, not just the headcount.'],
  ),
  det(
    'Income',
    'For a NORMAL good, higher income raises demand. For an INFERIOR good it lowers it.',
    [
      'Normal goods: restaurant meals, cars, holidays - demand rises with income.',
      'Inferior goods: supermarket own-brand, bus travel - demand FALLS as income rises because consumers switch to preferred substitutes.',
    ],
    [
      'Whether a good is normal or inferior depends on the income level of the consumer - a car is a luxury at low income and a necessity at high income.',
      'The same good can be normal for one group and inferior for another.',
    ],
  ),
  det(
    'Related goods - substitutes and complements',
    'The price of one good shifts demand for another.',
    [
      'A rise in the price of a SUBSTITUTE (Pepsi) raises demand for the good (Coke).',
      'A rise in the price of a COMPLEMENT (petrol) lowers demand for the good (cars).',
    ],
    [
      'The strength depends on how close the relationship is, measured by cross elasticity of demand.',
      'Brand loyalty weakens substitution even where alternatives exist.',
    ],
  ),
  det(
    'Advertising and tastes',
    'Successful advertising shifts demand right and makes it more price inelastic.',
    [
      'It shifts preferences and builds brand loyalty, so consumers are less responsive to a price rise.',
      'This is why firms with strong brands can raise price without losing much volume.',
    ],
    [
      'Advertising is expensive and may not work; competitors advertise too, so the net effect can be nil for the industry.',
      'Fashions change quickly, so a taste-driven shift can reverse.',
    ],
  ),
  det(
    'Expectations of future prices',
    'Expecting prices to rise brings demand forward.',
    ['Consumers buy now to avoid paying more later, raising current demand.'],
    ['This borrows from future demand, so current demand rises at the cost of a later fall.'],
  ),
  det(
    'Interest rates and credit',
    'Lower interest rates raise demand, especially for goods bought on credit.',
    ['Cars, houses and durables are usually credit-financed, so their demand is highly interest-sensitive.'],
    ['Little effect on goods bought with cash, so the impact is very uneven across markets.'],
  ),
  det(
    'Seasons',
    'Predictable seasonal changes shift demand.',
    ['Ice cream in summer, heating in winter, toys before Christmas.'],
    ['Predictable, so firms plan for it and it rarely causes a market failure - though it can cause seasonal unemployment.'],
  ),
)

/* ================================================== ELASTICITIES */

const elasticities = chapter(
  h('Price elasticity of demand (PED)'),
  defn('PED', 'The responsiveness of quantity demanded to a change in price. PED = %ΔQd ÷ %ΔP.'),
  p('PED is normally negative because of the downward-sloping demand curve, so we compare the ABSOLUTE value.'),
  table(
    ['Value', 'Name', 'Meaning'],
    [
      ['|PED| > 1', 'Elastic', 'Quantity responds MORE than proportionally'],
      ['|PED| < 1', 'Inelastic', 'Quantity responds LESS than proportionally'],
      ['|PED| = 1', 'Unit elastic', 'Exactly proportional'],
      ['PED = 0', 'Perfectly inelastic', 'Quantity does not respond at all - a vertical curve'],
      ['PED = ∞', 'Perfectly elastic', 'Any price rise loses all demand - a horizontal curve'],
    ],
  ),
  worked('Price rises 10% and quantity demanded falls 25%. Calculate PED and state whether demand is elastic.', 'PED = −25 ÷ 10 = −2.5. |PED| = 2.5 > 1, so demand is elastic.'),
  diagram('elasticity'),
  h('Determinants of PED - and how reliable each one is'),
  det(
    'Availability of close substitutes',
    'The more, and the closer, the substitutes, the more elastic demand is. This is the most important determinant.',
    [
      'If one seller raises price, consumers switch to a rival - fish from adjacent stalls at a market are near-perfect substitutes, so demand is highly elastic.',
      'Weak substitutes mean inelastic demand: a holiday to Sydney and a holiday to Benidorm are not really substitutes.',
    ],
    [
      '*The width of the market definition changes the answer entirely.* PED for pasta is high; PED for food overall is very low. Always check which is being asked about.',
      'The number of substitutes rises over time, so any estimate dates quickly.',
      'Brand loyalty can make demand inelastic despite many substitutes existing.',
    ],
  ),
  det(
    'Proportion of income spent on the good',
    'The larger the share of income, the more elastic demand is.',
    [
      'A paperclip could triple in price and a manufacturer would not switch - the cost is trivial.',
      'A car is a large share of income, so demand is much more responsive to price.',
    ],
    [
      'The logic can break down for essential inputs: steel is a large share of a carmaker’s costs but has no substitute, so demand may be inelastic despite the expense.',
      'It depends on the consumer’s income - the same good is a large share for one household and trivial for another.',
    ],
  ),
  det(
    'Nature of the product - necessity, luxury or addictive',
    'Necessities and addictive goods have inelastic demand.',
    ['Bread and milk are necessities; cigarettes and alcohol are addictive. Consumers keep buying despite price rises.'],
    [
      '"Necessity" is subjective and socially determined - a car is a necessity in a rural area and optional in central London.',
      'Addiction can be broken over long periods, so long-run PED is higher than short-run.',
    ],
  ),
  det(
    'Time',
    'Demand is more elastic in the long run.',
    [
      'In the short run, habit and inertia prevent adjustment.',
      'Over time consumers find substitutes, change habits and firms develop alternatives.',
    ],
    [
      'Some consumers never change their habits, so long-run elasticity may be lower than expected.',
      'Where no alternative exists at all, time does not help.',
      'Technology can create substitutes very quickly, so the "long run" may be shorter than assumed.',
    ],
  ),
  h('PED and total revenue - why firms care'),
  table(
    ['If demand is', 'Raising price', 'Cutting price'],
    [
      ['Elastic', 'Total revenue FALLS - quantity falls proportionally more', 'Total revenue RISES'],
      ['Inelastic', 'Total revenue RISES - quantity falls proportionally less', 'Total revenue FALLS'],
      ['Unit elastic', 'Total revenue unchanged', 'Total revenue unchanged'],
    ],
  ),
  diagram('revenue-curves'),
  tip(
    'This links straight to tax policy: a government taxing for REVENUE should choose inelastic goods (tobacco, fuel); a government taxing to change BEHAVIOUR needs elastic demand or the consumption will not fall. Those two aims conflict, which is a ready-made evaluation point.',
  ),

  h('Income elasticity of demand (YED)'),
  defn('YED', 'The responsiveness of demand to a change in real income. YED = %ΔQd ÷ %ΔY.'),
  table(
    ['Value', 'Type of good', 'Meaning'],
    [
      ['YED > 1', 'Luxury / income elastic normal good', 'Demand rises proportionally MORE than income - sports cars, foreign holidays'],
      ['0 < YED < 1', 'Necessity / income inelastic normal good', 'Demand rises but proportionally less - bread, milk'],
      ['YED < 0', 'Inferior good', 'Demand FALLS as income rises - own-brand food, bus travel'],
    ],
  ),
  worked('Income rises 5% and demand for a good falls 2%. Calculate YED and classify the good.', 'YED = −2 ÷ 5 = −0.4. Negative, so it is an inferior good (and income inelastic).'),
  det(
    'Why YED matters to firms and government',
    'It predicts how a business will fare through the economic cycle.',
    [
      'Luxury producers boom in an upswing and suffer badly in a recession, so they may diversify into necessities to smooth revenue.',
      'Inferior goods are counter-cyclical - discount supermarkets gain share in a downturn.',
      'Government can predict how tax revenue and demand for public services will move with growth.',
    ],
    [
      'YED changes as an economy develops: a good that is a luxury at low income becomes a necessity later.',
      'It is measured on average and hides variation between income groups.',
      'It assumes ceteris paribus, but recessions change confidence and credit availability at the same time as income.',
    ],
  ),

  h('Cross elasticity of demand (XED)'),
  defn('XED', 'The responsiveness of demand for good A to a change in the price of good B. XED = %ΔQd of A ÷ %ΔP of B.'),
  table(
    ['Value', 'Relationship', 'Example'],
    [
      ['XED > 0 (positive)', 'Substitutes', 'Coke and Pepsi - a rise in the price of one raises demand for the other'],
      ['XED < 0 (negative)', 'Complements', 'Printers and ink - a rise in the price of one lowers demand for the other'],
      ['XED = 0', 'Unrelated', 'Bread and mobile phones'],
    ],
  ),
  p('The larger the absolute value, the stronger the relationship.'),
  worked('The price of good B rises 8% and demand for good A rises 4%. Calculate XED and state the relationship.', 'XED = +4 ÷ 8 = +0.5. Positive, so they are substitutes - but weak ones, since the value is well below 1.'),
  det(
    'Why XED matters',
    'It tells a firm how exposed it is to rivals, and helps define the market.',
    [
      'A high positive XED means intense competition - a rival’s price cut takes your customers.',
      'Complements allow pricing strategy: sell printers cheaply and make the margin on ink.',
      'Competition authorities use XED to define the relevant market when judging whether a merger creates market power.',
    ],
    [
      'Relationships change as new products appear, so estimates date.',
      'It only captures pairs, whereas real markets have many interacting goods.',
      'The value depends on the size of the price change and may not be stable across the range.',
    ],
  ),
)

/* ============================================= SUPPLY AND PES */

const supplyAndPes = chapter(
  defn(
    'Supply',
    'The quantity of a good producers are willing and able to sell at each price, in a given time period.',
  ),
  p(
    'Supply slopes upward because a higher price raises the profit on each unit, making it worthwhile to expand output despite rising marginal costs, and because it attracts new firms into the market.',
  ),
  h('The conditions of supply'),
  det(
    'Costs of production',
    'Higher costs shift supply LEFT; lower costs shift it right.',
    ['Wages, raw materials, energy, rent and interest all raise the cost of supplying each unit, so less is supplied at every price.'],
    ['Firms may absorb cost rises in margins rather than cutting output, especially in competitive markets where losing share is costly.'],
  ),
  det(
    'Technology',
    'Improved technology shifts supply right by raising productivity.',
    ['The same inputs produce more output, so unit costs fall and firms supply more at every price.'],
    ['Technology requires investment, which takes time and money; and it may raise fixed costs even as it lowers variable costs.'],
  ),
  det(
    'Indirect taxes and subsidies',
    'A tax shifts supply left by the amount of the tax per unit; a subsidy shifts it right.',
    ['These are a cost of supplying, so they change the price at which firms are willing to supply each quantity.'],
    ['Incidence depends on relative elasticities - the producer may bear much of a tax rather than passing it on.'],
  ),
  det(
    'Number of firms and barriers to entry',
    'More firms in the market means greater supply.',
    ['Entry raises market supply; exit reduces it. Low barriers make supply more responsive over time.'],
    ['Entry takes time, so the effect is a long-run one; high barriers may prevent it entirely.'],
  ),
  det(
    'Weather, shocks and expectations',
    'Supply of agricultural goods is heavily weather-dependent, and expectations affect timing.',
    [
      'A good harvest shifts supply right; drought or disease shifts it left.',
      'If producers expect higher prices later they may withhold stock now, reducing current supply.',
    ],
    ['Only relevant for storable or weather-dependent goods; irrelevant for most services.'],
  ),

  h('Price elasticity of supply (PES)'),
  defn('PES', 'The responsiveness of quantity supplied to a change in price. PES = %ΔQs ÷ %ΔP.'),
  p('PES is normally positive because supply slopes upward. PES > 1 is elastic; PES < 1 is inelastic.'),
  worked('Price rises 20% and quantity supplied rises 5%. Calculate PES and state whether supply is elastic.', 'PES = 5 ÷ 20 = 0.25. Below 1, so supply is inelastic.'),
  diagram('pes-elasticity'),
  h('Determinants of PES'),
  det(
    'Time period',
    'Supply is more elastic the longer the time available. This is the most important determinant.',
    [
      '*Momentary* - supply is fixed and perfectly inelastic; nothing can be changed.',
      '*Short run* - at least one factor is fixed, so output can only be varied by working existing capacity harder. Supply is inelastic.',
      '*Long run* - all factors are variable, so firms can build capacity and new firms can enter. Supply is elastic.',
    ],
    [
      'For some goods the long run is very long: a rubber tree takes seven years to mature, so agricultural supply stays inelastic for years.',
      'Where technology moves quickly, the long run arrives sooner than the model implies.',
    ],
  ),
  det(
    'Spare capacity',
    'Firms with unused capacity can raise output quickly, so supply is elastic.',
    ['A factory running at 60% can expand immediately at little extra cost.'],
    ['Near full capacity supply becomes highly inelastic, so a demand rise raises price rather than quantity - this links directly to the AS curve in macro.'],
  ),
  det(
    'Ability to store stock',
    'Goods that can be stockpiled have more elastic supply.',
    ['Stock can be released when price rises and rebuilt when it falls, smoothing supply.'],
    ['Storage costs money and is impossible for perishables and for services, which cannot be stored at all - a hotel room unsold tonight is lost permanently.'],
  ),
  det(
    'Factor mobility and substitutability',
    'If resources can be switched between uses easily, supply is elastic.',
    ['A factory that can retool from one product to another responds quickly to price changes.'],
    ['Highly specialised capital and labour cannot be switched, so supply stays inelastic regardless of price.'],
  ),
  det(
    'Barriers to entry',
    'Low barriers make market supply elastic, because new firms enter when price rises.',
    ['Entry raises supply and moderates the price rise.'],
    ['High barriers - patents, large sunk costs, licensing - prevent entry, so supply stays inelastic and the price rise persists.'],
  ),
)

/* =========================================== PRICE MECHANISM */

const priceMechanism = chapter(
  defn(
    'Equilibrium',
    'The price at which quantity demanded equals quantity supplied, so the market clears and there is no tendency to change.',
  ),
  diagram('supply-demand'),
  h('How the market gets there'),
  table(
    ['Situation', 'What happens'],
    [
      [
        'Price ABOVE equilibrium',
        'Quantity supplied exceeds quantity demanded - excess supply (a surplus). Unsold stock builds, so firms cut price. The price falls until the market clears.',
      ],
      [
        'Price BELOW equilibrium',
        'Quantity demanded exceeds quantity supplied - excess demand (a shortage). Consumers compete, so price is bid up until the market clears.',
      ],
    ],
  ),
  h('The three functions of the price mechanism'),
  table(
    ['Function', 'How it works'],
    [
      [
        'Rationing',
        'Scarce resources are allocated to those willing and able to pay most. A rising price rations supply among competing buyers.',
      ],
      [
        'Signalling',
        'Price conveys information about relative scarcity to both sides - a high price signals to producers that more is wanted and to consumers that it is scarce.',
      ],
      [
        'Incentive',
        'A high price rewards producers for supplying more and for entering the market, so resources are reallocated to where they are most valued.',
      ],
    ],
  ),
  tip(
    'Learn these three by name. Any question on "how the price mechanism allocates resources" is asking for rationing, signalling and incentive, applied to the context in the question.',
  ),
  det(
    'Does the price mechanism allocate resources well?',
    'In a competitive market with no market failure, yes - it achieves allocative efficiency where price equals marginal cost.',
    [
      'It requires no central authority and no bureaucracy, and adjusts continuously to changing conditions.',
      'It uses dispersed local knowledge that no planner could collect (Hayek).',
    ],
    [
      'It ignores EXTERNALITIES, so it over-produces goods with external costs and under-produces those with external benefits.',
      'It cannot provide PUBLIC GOODS at all, because of the free rider problem - the market simply does not form.',
      'It allocates by ability to pay, not by need, so it can produce outcomes society judges inequitable.',
      'It assumes perfect information, and information gaps cause merit goods to be under-consumed.',
      'Monopoly power distorts it: where P > MC the outcome is allocatively inefficient.',
    ],
  ),
  h('Consumer and producer surplus'),
  defn(
    'Consumer surplus',
    'The difference between what consumers are willing to pay and what they actually pay - the area below the demand curve and above the price.',
  ),
  defn(
    'Producer surplus',
    'The difference between the price producers receive and the minimum they would have accepted - the area above the supply curve and below the price.',
  ),
  p(
    'Together they make up total welfare (community surplus), which a free market maximises at equilibrium ONLY when there is no market failure.',
  ),
  diagram('consumer-producer-surplus'),
  det(
    'What changes surplus',
    'Anything that moves price or quantity redistributes surplus between consumers and producers.',
    [
      'A price rise transfers surplus from consumers to producers; a price fall does the reverse.',
      'More elastic demand means a larger consumer surplus for a given price, because more consumers were willing to pay well above it.',
      'A tax reduces both surpluses and creates a deadweight welfare loss - the surplus destroyed rather than transferred.',
    ],
    [
      'Surplus measures welfare only if consumers are rational and well informed - with an information gap, willingness to pay does not reflect true benefit.',
      'It is measured in money, so a pound of surplus counts equally whoever gains it - which ignores the diminishing marginal utility of income and so understates the value to poorer households.',
    ],
  ),
)

export const ECON_THEME1A_NOTES = {
  'Economic Methodology and the Economic Problem': methodology,
  'Production Possibility Frontiers': ppf,
  'Economic Systems': economicSystems,
  'Rational Decision Making': rationalDecisions,
  Demand: demand,
  'Price, Income and Cross Elasticities of Demand': elasticities,
  'Supply and Elasticity of Supply': supplyAndPes,
  'Price Determination and the Price Mechanism': priceMechanism,
}
