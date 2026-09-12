/*
  Theory of the Firm, from the MASTER course documents.

  Eight documents (Revenue, Costs in the Short Run, Costs in the Long Run,
  Profit, Barriers to Entry, Efficiencies, Objectives of Firms, Business
  Growth) read end to end against what was already here. This file adds
  only what was genuinely missing or thinner than the source - it does not
  restate material the chapters already cover.

  The substantial gaps it closes:

    Revenue    PED varying ALONG the demand curve with worked percentages;
               the football-stadium case where selling more seats LOWERS
               revenue; the AR/MR/TR table.
    Costs SR   fixed costs as sunk costs; a full worked cost calculation;
               why some labour is variable even in the short run.
    Costs LR   external economies of scale (five types) and external
               DISECONOMIES - both absent entirely; the seven factors that
               determine how much economies of scale actually matter; the
               short-run to long-run adjustment where costs RISE first.
    Profit     accounting vs economic profit, and normal profit defined
               through opportunity cost - the distinction the chapter was
               missing outright.
    Barriers   barriers to EXIT as their own category; predatory pricing
               defined precisely against average variable cost.
    Efficiency what stops firms being dynamically efficient; the concrete
               forms X-inefficiency takes.
    Objectives utility maximisation; bounded rationality; which types of
               firm actually profit maximise in the long run.
    Growth     why small firms grow organically and large ones by
               acquisition; per-integration advantages; worked examples.
*/

import { h, p, ul, defn, det, worked, tip, table, diagram, chapter } from './econ-notes-build'

/* ======================================= REVENUE, COSTS AND PROFIT */

const revenueCostsProfit = chapter(
  h('How PED changes along the demand curve'),
  p(
    'A straight-line demand curve does NOT have a constant elasticity. PED falls as you move down it, and that is what drives the shape of the revenue curves.',
  ),
  table(
    ['Position on AR', 'Worked illustration', 'PED', 'What MR does'],
    [
      [
        'Towards the TOP',
        'Price falls £10 → £9 (a 10% fall) and quantity rises 2 → 3 units (a 50% rise)',
        'ELASTIC (PED > 1)',
        'MR is POSITIVE - the fall in price is outweighed by the more than proportional rise in quantity, so TR RISES as output increases',
      ],
      [
        'Towards the BOTTOM',
        'Price falls £4 → £3 (a 25% fall) and quantity rises 35 → 36 units (a 2.9% rise)',
        'INELASTIC (PED < 1)',
        'MR is NEGATIVE - quantity rises less than proportionally to the price cut, so TR FALLS as output increases',
      ],
      [
        'At the MIDPOINT',
        'The percentage changes are equal',
        'UNIT ELASTIC (PED = 1)',
        'MR = 0, and total revenue is at its MAXIMUM',
      ],
    ],
  ),
  tip(
    'This is why total revenue is maximised where MR = 0. If MR > 0 the firm could earn more by producing one more unit; if MR < 0 it could earn more by producing one fewer. Only where MR = 0 is neither true.',
  ),
  worked(
    'A football club expands its stadium capacity from 20,000 to 55,000. Explain why it could see total revenue FALL as a result of selling 35,000 more seats.',
    'If it faces INELASTIC demand it must cut the ticket price by a significant amount to fill the extra 35,000 seats. Because demand is inelastic, the percentage fall in price exceeds the percentage rise in quantity sold, so total revenue falls. Selling more units does not guarantee more revenue - the sign of MR depends entirely on PED at that point on the demand curve.',
  ),
  h('The revenue table you should be able to complete'),
  table(
    ['Quantity', 'Price', 'TR', 'MR', 'AR'],
    [
      ['1', '£10', '£10', '£10', '£10'],
      ['2', '£9', '£18', '£8', '£9'],
      ['3', '£8', '£24', '£6', '£8'],
      ['4', '£7', '£28', '£4', '£7'],
    ],
  ),
  p(
    'Note two things that always hold in such a table. AR always equals PRICE. And MR falls FASTER than AR - here AR drops by £1 a unit while MR drops by £2 - which is the arithmetic behind "MR has twice the gradient of AR".',
  ),
  h('Fixed costs are sunk costs'),
  p(
    'Fixed costs are often called SUNK costs, because the firm cannot avoid paying them even if it chooses to produce no output at all. That is precisely why they are irrelevant to the short-run shutdown decision: they are paid either way, so only whether revenue covers VARIABLE cost can change the outcome.',
  ),
  det(
    'Is labour a fixed or a variable cost?',
    'It depends on the contract, not on the factor.',
    [
      'Salaried permanent staff are a FIXED cost in the short run - the firm pays them whatever it produces.',
      'Temporary staff and workers on zero-hours contracts are a VARIABLE cost even in the short run, because whether the firm incurs the cost depends on how much output it chooses to produce.',
    ],
    [
      'So the fixed/variable split is not a property of the input itself. Two firms in the same industry can classify the same job differently depending on how they contract for it, which is why exam answers should say WHY a cost is fixed rather than asserting it.',
    ],
  ),
  worked(
    "Chelsea's Electrics rents premises at £10,000 a month and employs six staff on an average salary of £18,000 a year. It buys stock at £200 a tablet, £50 a satnav and £90 a camera, and expects to sell 1,000 tablets, 450 satnavs and 2,300 cameras. Find TFC, TVC, TC, and then AC, AVC and AFC.",
    'TOTAL FIXED COSTS = rent + salaries = (£10,000 × 12) + (£18,000 × 6) = £120,000 + £108,000 = £228,000. ' +
      'TOTAL VARIABLE COSTS = (£200 × 1,000) + (£50 × 450) + (£90 × 2,300) = £200,000 + £22,500 + £207,000 = £429,500. ' +
      'TOTAL COST = £228,000 + £429,500 = £657,500. ' +
      'Total output = 1,000 + 450 + 2,300 = 3,750 units, so: ' +
      'AC = £657,500 ÷ 3,750 = £175.33 · AVC = £429,500 ÷ 3,750 = £114.53 · AFC = £228,000 ÷ 3,750 = £60.80. ' +
      'And the MARGINAL cost of selling one more camera is simply its variable cost: £90.',
  ),
  h('Accounting profit against economic profit'),
  p(
    'This is the distinction that separates an economist from an accountant, and it is examined directly. An accountant counts only EXPLICIT costs - money actually paid out. An economist also counts the IMPLICIT cost: the opportunity cost of the resources the owner already had.',
  ),
  worked(
    'Tobi earns £30,000 a year as a data scientist. She is considering leaving to set up a DJing business. Equipment would cost £19,000 a year, and she expects £46,000 of revenue. What is her accounting profit, and what would an economist say?',
    'ACCOUNTING PROFIT = £46,000 − £19,000 = £27,000, which looks like a good outcome. ' +
      'ECONOMIC PROFIT subtracts the opportunity cost of the salary she gives up: £27,000 − £30,000 = −£3,000. ' +
      'So Tobi would be £3,000 WORSE OFF running the DJ business. The accountant says go; the economist says do not. ' +
      'For her to earn NORMAL profit, revenue would need to be £49,000 (£49,000 − £19,000 = £30,000, exactly matching the salary forgone).',
  ),
  defn(
    'Normal profit',
    'The level of profit where AR = AC once opportunity cost is included. At normal profit the owner would earn no more by moving their resources into another industry - which is exactly why it is the minimum needed to keep the firm where it is, and why economists treat it as a COST.',
  ),
  p(
    'SUPERNORMAL profit is then simply positive ECONOMIC profit: a return above what the same resources could earn in their next best use.',
  ),
)

/* =============================== ECONOMIES AND DISECONOMIES OF SCALE */

const economiesOfScale = chapter(
  h('Internal economies of scale, with a worked sector'),
  p('Take a supermarket as the running example, so each type is concrete rather than a label.'),
  table(
    ['Economy', 'Mechanism', 'Supermarket example'],
    [
      ['Purchasing', 'Bulk buying lowers the price per unit, because the firm is a more important customer to the seller', 'Buying potatoes by the lorry-load'],
      ['Technical', 'Sophisticated equipment is worth installing because its cost spreads over far more units', 'Self-checkout machines'],
      ['Marketing', 'Advertising spend does not rise proportionally with output, so its cost per unit falls', 'National TV advertising costs less per unit sold than a local shop\'s newspaper advert'],
      ['Managerial', 'A larger firm can employ SPECIALISTS rather than using non-specialists or outsourcing', 'Employing its own accountants and specialist bakers'],
      ['Financial', 'Large firms borrow more cheaply and float shares more successfully', 'Banks lend to Tesco at a lower interest rate than to a corner shop'],
      ['Risk-bearing', 'A wider product range means one failure does not sink the firm', 'A new line of fish that does not sell is absorbed across all other output'],
    ],
  ),
  h('Internal diseconomies of scale'),
  p('British Airways as the running example.'),
  table(
    ['Diseconomy', 'Mechanism', 'BA example'],
    [
      ['Co-ordination problems', 'It becomes difficult to keep a check on everything happening across a large firm', 'Management loses sight of check-in quality across thousands of desks worldwide'],
      ['Slower decision making', 'More management tiers lengthen the decision chain, so the firm reacts slowly to market conditions', 'A popular route takes months to get extra flights approved'],
      ['Falling worker productivity', 'More people means more scope for disputes, and workers feel like a small part of a big firm', 'Cabin crew hear of redundancies second-hand, have no access to senior managers, and go through unions instead'],
    ],
  ),
  h('EXTERNAL economies of scale'),
  defn(
    'External economies of scale',
    'A fall in a firm\'s long-run average costs resulting from the growth of the INDUSTRY rather than of the firm itself. The whole LRAC curve shifts DOWN, and even a firm that has not grown at all benefits.',
  ),
  diagram('external-economies'),
  p('Take tourism, an industry that has grown substantially with rising incomes.'),
  table(
    ['Type', 'Mechanism', 'Tourism example'],
    [
      ['Skilled labour', 'A larger industry means more people train in the area, so firms can hire ready-skilled workers', 'Universities now run tourism degrees, cutting firms\' training costs'],
      ['Ancillary economies', 'Related industries emerge nearby, often part of the same production process', 'Travel insurance specialists opening beside clusters of travel agents'],
      ['Specialisation', 'A big enough market lets firms specialise in one narrow sector', 'A firm can survive selling nothing but Kenyan safaris'],
      ['Reputation enhancement', 'The industry itself becomes well known, which acts as free advertising for everyone in it', 'Television programmes about holidays raising awareness for the whole sector'],
      ['Improved infrastructure', 'Government invests in infrastructure serving a growing industry', 'Airport expansion driven by the growth of tourism'],
    ],
  ),
  defn(
    'External diseconomies of scale',
    'A RISE in a firm\'s long-run average costs resulting from the growth of the industry. The main cause is competition for scarce inputs: as more firms chase the same resource, its price is bid up.',
  ),
  p(
    'In the airline industry: the cost of landing slots rises as more carriers compete for them, as does the cost of fuel and of access to skilled pilots and engineers. The individual firm has done nothing differently, and its costs have gone up anyway.',
  ),
  h('How much do economies of scale actually matter?'),
  p(
    'They raise profit by lowering average cost - but the SIZE of that benefit depends on seven things, and naming the relevant one is what turns a generic answer into an evaluated one.',
  ),
  table(
    ['Factor', 'Why it changes the answer'],
    [
      ['Nature and size of the industry', 'Where fixed costs are huge - pharmaceuticals, car manufacturing - exploiting scale is essential. For a small local business it barely matters'],
      ['Price elasticity of demand', 'A firm facing inelastic demand may make MORE profit by restricting output and holding price high, rather than expanding to chase lower unit costs'],
      ['Position relative to the MES', 'A firm already at or near minimum efficient scale should be wary of expanding, because the next step may bring diseconomies instead'],
      ['Limits on global advertising', 'Language and cultural barriers force adaptation, and targeted digital advertising has cut per-unit costs for small firms anyway - so marketing economies are weaker than they were'],
      ['Diseconomies of scale', 'Co-ordination and communication problems can outweigh the technical savings as output rises'],
      ['Monopoly supplier', 'Purchasing economies fail if there is only one place to buy the input - bulk buying gives no leverage against a sole supplier'],
      ['X-inefficiency (slack)', 'A firm can have every economy of scale available to it and still run at high average cost, because nothing forces it to control that cost'],
    ],
  ),
  h('Moving between the short run and the long run'),
  det(
    'Why average costs can RISE before they fall',
    'Expanding scale is not a smooth slide down the LRAC curve - the firm jumps to a bigger plant and has to fill it.',
    [
      'Suppose British Airways is producing at Q₁ on its current fleet, where adding more flights would run into diminishing returns.',
      'It buys extra planes, moving onto a larger short-run curve, SRAC₃.',
      'INITIALLY average costs RISE, to C₂ - the new planes are not full, so their cost is spread over too little output.',
      'Only once output rises to Q₃, making full use of the new fleet, does average cost fall to C₃ and the economy of scale actually materialise.',
    ],
    [
      'This is the risk in any expansion: if the firm expands and DEMAND DOES NOT expand with it, the move backfires and it is left permanently on the higher part of a larger plant\'s cost curve.',
      'It is also why the LRAC envelope touches each SRAC below that plant\'s own minimum while economies of scale remain available - the firm is deliberately under-using each plant on the way to a bigger one.',
    ],
  ),
  h('Getting the MC curve right relative to AC'),
  p(
    'A common diagram error is drawing MC cutting AC anywhere other than its minimum. Think about it arithmetically rather than visually:',
  ),
  ul([
    'If MC were ABOVE AC while AC was still FALLING, that would be impossible - producing a unit costing more than the current average must PULL THE AVERAGE UP.',
    'If MC were BELOW AC while AC was RISING, that is equally impossible - producing a unit costing less than the average must PULL IT DOWN.',
    'Therefore: while AC is falling, MC must lie BELOW it. While AC is rising, MC must lie ABOVE it. The only consistent crossing point is the MINIMUM of AC, which is also the minimum efficient scale.',
  ]),
)

/* ============================================ BARRIERS (CONTESTABILITY) */

const contestability = chapter(
  h('Barriers to entry, in full'),
  defn('Barriers to entry', 'Obstacles to new firms entering the market.'),
  table(
    ['Barrier', 'How it deters entry'],
    [
      ['High start-up costs', 'Expensive capital equipment or heavy R&D spending means entrants must raise large finance up front and carry the risk of it failing'],
      ['Legal barriers', 'A patent makes entry actually ILLEGAL - the incumbent\'s intellectual property is legally protected'],
      ['Economies of scale', 'An entrant producing on a small scale has high average costs and cannot price competitively against a large incumbent'],
      ['Brand names', 'Brand loyalty means consumers will not switch even to a cheaper or better product from an unknown firm'],
      ['Ownership of raw materials', 'Controlling the input supply blocks entry outright - DeBeers historically controlled the world\'s diamond supply'],
      ['Limit pricing', 'The incumbent deliberately holds price below the profit-maximising level, so an entrant with higher costs would make a loss'],
      ['Predatory pricing', 'Price is set BELOW average variable cost to drive a rival out, absorbing losses until they exit'],
    ],
  ),
  det(
    'Why predatory pricing works even though it loses money',
    'The incumbent is not trying to profit during the campaign - it is trying to outlast the entrant.',
    [
      'It sets price below AVC but does NOT shut down, deliberately trading short-run losses for the removal of a competitor.',
      'An established firm survives a loss more easily: it has reserves, can borrow more cheaply, and - because its costs are lower - is making a SMALLER loss than the entrant at the same price.',
      'Crucially, the THREAT alone can deter entry, if a potential entrant believes it is credible. The incumbent may never have to actually do it.',
    ],
    [
      'It is illegal anti-competitive behaviour, but very difficult to prove: the firm can always argue a low price was genuine competition rather than a deliberate campaign to eliminate a rival.',
      'Distinguish it from LIMIT pricing, which stays ABOVE the incumbent\'s own costs and is legal. Predatory goes below cost; limit pricing does not.',
    ],
  ),
  h('Barriers to EXIT'),
  defn('Barriers to exit', 'Obstacles to firms LEAVING a market.'),
  table(
    ['Barrier', 'Explanation'],
    [
      ['Sunk costs', 'Costs that cannot be recovered on leaving - capital equipment with no alternative use and no resale market. Advertising spend is another major example: entirely unrecoverable'],
      ['Contracts', 'A firm may be legally obliged to keep supplying for a fixed period, so it cannot leave in the short term even while making a loss'],
    ],
  ),
  tip(
    'Barriers to exit matter for CONTESTABILITY as much as barriers to entry do. A rational firm considering entry asks not only "can I get in?" but "what happens to my money if this fails?" - high exit barriers make entry risky even where entry itself is easy, which is why sunk costs are the single most important variable in contestability theory.',
  ),
)

/* ================================================= EFFICIENCY */

const perfectCompetition = chapter(
  h('Why P = MC is the condition for allocative efficiency'),
  p(
    'Because it is the point at which consumers value the last unit produced exactly as much as it costs society to produce it. Any gap means resources are misallocated, and the direction of the gap tells you which way.',
  ),
  table(
    ['If…', 'Then…', 'Resources should be…'],
    [
      ['P > MC', 'Consumers value the last unit by MORE than it costs to produce', 'MORE should be allocated here - society is not producing enough of this good'],
      ['MC > P', 'Consumers value the last unit by LESS than it costs to produce', 'FEWER should be allocated here - too much of society\'s resources go to this good'],
      ['P = MC', 'Value and cost of the last unit coincide', 'Exactly right - no reallocation could improve welfare'],
    ],
  ),
  h('What stops firms being dynamically efficient?'),
  ul([
    'INERTIA and short-sightedness - R&D pays off over years, while managers are often judged over quarters.',
    'FEAR OF POACHING - a firm may be unwilling to train workers if a rival can simply hire them once trained, so the investment benefits a competitor. This is a positive externality problem inside the labour market, and it leads to systematic under-investment in training.',
  ]),
  h('X-inefficiency in practice'),
  defn(
    'X-inefficiency',
    'Where a firm\'s ACTUAL average cost is greater than its ATTAINABLE average cost - the firm operates above its own lowest possible cost curve, rather than moving along it.',
  ),
  p('It takes concrete, recognisable forms:'),
  ul([
    'OVER-MANNING - carrying more staff than the work requires.',
    'Managers taking long lunches and awarding themselves large pay rises.',
    'Not continually reviewing whether suppliers are still the most cost-effective available.',
  ]),
  det(
    'Why X-inefficiency can cancel out economies of scale',
    'The two work in opposite directions, and the second is not automatic.',
    [
      'Economies of scale lower the cost curve the firm COULD operate on.',
      'X-inefficiency determines how far ABOVE that curve it actually sits.',
      'A large firm with substantial economies of scale but no competitive pressure can end up with HIGHER average costs than a small, disciplined rival.',
    ],
    [
      'This is the strongest argument for competition policy in concentrated markets: the gain from breaking up a firm is not only the lower price from removing market power, but the cost reduction from restoring the pressure that eliminates slack.',
      'It also qualifies the natural-monopoly defence - "one large firm is cheapest" only holds if that firm is actually made to operate at its attainable cost.',
    ],
  ),
)

/* ============================================== BUSINESS OBJECTIVES */

const businessObjectives = chapter(
  h('Why profit maximisation is often unrealistic in practice'),
  worked(
    'Halfords has more than 400 retail stores, 350 garages and over 10,000 staff. Why might profit maximisation not be a realistic strategy for it to pursue?',
    'Two reasons. First, it is not going to vary output by ONE UNIT and observe the effect on total cost and total revenue - selling one more bike to test the margin is not how a business of that size operates, so MC = MR cannot be applied literally. Second, the owners do not have full control: even if the CEO is motivated by profit, the manager of each individual store may be incentivised by something else entirely. That is the principal–agent problem operating at every level of the hierarchy, not just between shareholders and the board.',
  ),
  h('Utility maximisation'),
  defn(
    'Utility maximisation',
    'Where the owner runs the firm for the SATISFACTION it gives them rather than the profit it earns. It conflicts with profit maximisation in both the short AND the long run - unlike sales or growth maximisation, there is no route by which it comes back round to higher profit later.',
  ),
  ul([
    'The clearest example is SPORTS CLUBS: the owner of a lower-division football club derives utility from the ownership itself and is unlikely ever to make a profit from it.',
    'A small business owner may run a "lifestyle business" - deliberately keeping it small enough to stay enjoyable and manageable.',
    'Others run a firm for STATUS rather than return.',
  ]),
  h('Bounded rationality'),
  p(
    'Profit satisficing is not only about balancing stakeholders. Firms also make decisions on the information ACTUALLY AVAILABLE to them, which is rarely complete - this is BOUNDED RATIONALITY. A firm cannot maximise a quantity it cannot measure, so it settles for an outcome it can be confident is acceptable. Combined with the genuine risks of pursuing maximum profit, compromise between stakeholders is far more likely in the real world than optimisation.',
  ),
  h('Which firms actually profit maximise in the long run?'),
  table(
    ['Type of firm', 'Profit or not-for-profit', 'Long-term profit maximiser?'],
    [
      [
        'Public limited company (private sector)',
        'Profit',
        'Unlikely. Separation of ownership and control means alternative objectives get pursued even though owners would prefer profit maximisation. Profit SATISFICING is the most likely behaviour',
      ],
      [
        'Privately owned firm (private sector)',
        'Profit',
        'Most likely to genuinely profit maximise - the owner IS the manager, so there is no principal–agent gap',
      ],
      [
        'Public sector organisation',
        'Not-for-profit',
        'No. Government-owned bodies are not incentivised by profit; the aim is closer to maximising utility or meeting a service obligation',
      ],
      [
        'Voluntary organisation',
        'Not-for-profit',
        'No. A wide range of possible objectives, most likely utility maximisation against the stated mission',
      ],
    ],
  ),
  tip(
    'This table is the answer to any "do firms really profit maximise?" question. The honest position is that it depends on OWNERSHIP STRUCTURE: the model fits an owner-managed firm well and a large PLC badly, so name which one the question is describing rather than answering in general.',
  ),
)

/* ================================================= BUSINESS GROWTH */

const businessGrowth = chapter(
  h('Defining the two routes precisely'),
  defn('Internal (organic) growth', 'Where the business finances expansion from WITHIN the business - reinvested profit, retained earnings.'),
  defn('External (inorganic) growth', 'Where the business finances expansion from OUTSIDE the business - merging with or acquiring another firm.'),
  det(
    'Why do small firms grow organically and large firms by acquisition?',
    'The two routes suit firms at opposite ends of the size distribution, for three connected reasons.',
    [
      'External growth is EXPENSIVE - only large firms can raise the finance to buy another company outright.',
      'Small firms have a great deal of scope left for organic growth: many potential customers have simply never encountered their product yet, so ordinary expansion still has room to run.',
      'Large firms often face STAGNATING sales in their existing market, so they look to other firms - often in other markets - where sales are still growing.',
    ],
    [
      'The pattern is therefore about where a firm sits in its own growth curve rather than about which method is inherently better. A large firm with an unsaturated market may still grow organically, and a small firm with backing may still acquire.',
    ],
  ),
  h('The four types of integration, with worked examples'),
  p('Take Ford Motor Company as a single running example, so each type is unambiguous:'),
  table(
    ['Type', 'What Ford would buy', 'Advantages', 'Disadvantages'],
    [
      [
        'Horizontal',
        'Renault - a direct competitor',
        'Removes a competitor; greater economies of scale; larger market share and more pricing control',
        'Hostility and job losses; changes may damage customer loyalty; expensive to purchase',
      ],
      [
        'Forward vertical',
        'A car showroom - later in the supply chain',
        'Guarantees an outlet for its products; cuts out the middleman, raising profit; more control over pricing and product display',
        'Entering a new market can distract from core activities, since resources and expertise must be shared',
      ],
      [
        'Backward vertical',
        'A rubber plantation for tyres - earlier in the supply chain',
        'Guarantees quality of inputs and security of supply; cuts out the middleman; can restrict supplies to competitors',
        'Same distraction risk - running a plantation is not making cars',
      ],
      [
        'Conglomerate',
        'Lidl - an unrelated market',
        'Spreads risk across different markets; targets new customers; gains assets, customers and expertise from the acquired firm',
        'May lack the knowledge to run the new business successfully; distraction from the core market',
      ],
    ],
  ),
  h('Real merger and takeover examples'),
  table(
    ['Type', 'Example'],
    [
      ['Merger', 'British Airways and Iberia forming IAG; Dixons and Carphone Warehouse forming Dixons Carphone'],
      ['Takeover', 'Poundland taking control of 99p Stores - buying over 50% of shares gave it the final say, including closing stores'],
      ['Takeover', 'Facebook acquiring Instagram for around $1bn in 2012, then WhatsApp for $19.3bn in 2014'],
    ],
  ),
  h('Real demergers, and why they happened'),
  ul([
    'PayPal splitting from eBay in 2014 - separating a payments business with a very different growth profile.',
    'Prudential demerging its M&G investment fund business.',
    'Walmart selling a majority stake in Asda, after UK regulators BLOCKED its proposed merger with Sainsbury\'s in 2019 - a demerger driven directly by competition policy.',
    'Travis Perkins demerging its Wickes brand; Severn Trent Water demerging the waste firm Biffa; Pfizer selling its infant nutrition business to Nestlé.',
  ]),
  tip(
    'The Walmart/Asda case is the most useful of these in an exam, because it links two syllabus areas at once: it is a demerger AND an example of competition policy changing firm behaviour without the regulator having to impose a remedy directly.',
  ),
)

export const ECON_FIRM_MASTER_NOTES = {
  'Revenue, Costs and Profit': revenueCostsProfit,
  'Economies and Diseconomies of Scale': economiesOfScale,
  Contestability: contestability,
  'Perfect Competition': perfectCompetition,
  'Business Objectives': businessObjectives,
  'Business Growth': businessGrowth,
}
