/*
  Theme 3: Business behaviour and the labour market - the firm.

  Growth, objectives, revenue, costs and economies of scale. Built from the
  course documents where they cover the topic, extended to full A-level depth
  where they stop.

  The recurring evaluation in this theme is the PRINCIPAL–AGENT problem and
  the SHORT RUN / LONG RUN distinction; almost every question here can be
  evaluated with one of those two, so both are developed explicitly.
*/

import { h, p, defn, det, worked, diagram, tip, table, chapter } from './econ-notes-build'

/* ============================================== BUSINESS GROWTH */

const businessGrowth = chapter(
  p('Firms grow to gain economies of scale, market power, higher profit, and to reduce risk through diversification.'),
  h('Organic (internal) growth'),
  table(
    ['Method', 'Explanation', 'Example'],
    [
      ['New products', 'Innovation and R&D create products that attract new customers', 'Apple’s R&D spending on successive iPhone generations'],
      ['New markets', 'Selling to new customers, often overseas', 'Trunki now sells in over 100 countries'],
      ['Changing the marketing mix', 'Adapting product, price, place or promotion to reach a new segment', 'Walkers introducing large sharing packs to target groups'],
      ['Technology and e-commerce', 'Using technology to widen reach', 'Supermarkets investing in online ordering and delivery'],
    ],
  ),
  det(
    'Organic growth: is it the better route?',
    'Slower but safer than buying another firm.',
    [
      'Much cheaper than acquiring a company - no takeover premium to pay.',
      'Builds on the firm’s existing strengths and known capabilities.',
      'Growth is easier to manage and finance, and the existing culture is preserved.',
    ],
    [
      'It is slow, and owners or shareholders may not be prepared to wait.',
      'It depends on there being customer demand for a new product, which is uncertain.',
      'A competitor can acquire scale much faster by merging, so organic growth may lose the race.',
    ],
  ),
  h('External (inorganic) growth'),
  table(
    ['Method', 'What it is', 'Example'],
    [
      ['Merger', 'Two firms agree to join and a new company is created; shareholders share control', 'British Airways and Iberia forming IAG'],
      ['Takeover / acquisition', 'One firm buys over 50% of another’s shares and takes control. A HOSTILE takeover is one the target’s board opposes', 'Dixons and Carphone Warehouse'],
    ],
  ),
  table(
    ['Type of integration', 'Definition', 'Main motive'],
    [
      ['Horizontal', 'Two firms at the SAME stage of the SAME industry', 'Economies of scale, market share, reduced competition'],
      ['Vertical - backward', 'Merging with a SUPPLIER', 'Secure supply, control input costs, raise barriers to entry for rivals'],
      ['Vertical - forward', 'Merging with a DISTRIBUTOR or retailer', 'Secure market access, control the customer relationship, capture retail margin'],
      ['Conglomerate', 'Firms in UNRELATED industries', 'Diversification - spreading risk across markets'],
    ],
  ),
  det(
    'Does external growth work?',
    'It delivers scale immediately, but the evidence on whether it creates value is poor.',
    [
      'Instant market share and immediate economies of scale.',
      'Removes a competitor, raising market power and the ability to set price.',
      'Vertical integration secures the supply chain and can foreclose rivals.',
      'Conglomerate mergers spread risk, so a downturn in one market does not sink the firm.',
    ],
    [
      'Most mergers fail to deliver the promised gains. Culture clashes, integration costs and management distraction routinely destroy value.',
      'DISECONOMIES of scale can appear quickly - coordination and communication problems in a suddenly larger organisation.',
      'The acquirer usually pays a premium above market value, so the gain must be very large to be worthwhile.',
      'Competition authorities may block it or impose remedies where it creates market power.',
      'Conglomerates may suffer from a lack of expertise outside their core market - shareholders can diversify themselves more cheaply by holding a portfolio.',
    ],
  ),
  diagram('economies-of-scale'),
  h('Why some firms stay small'),
  table(
    ['Reason', 'Explanation'],
    [
      ['Size of the market', 'A niche or local market cannot support a large firm - a village bakery, a specialist repairer.'],
      ['Access to finance', 'Small firms struggle to raise capital, especially without collateral or a track record.'],
      ['Owner objectives', 'The owner may prefer control, independence or work–life balance to growth - satisficing rather than maximising.'],
      ['Diseconomies of scale', 'In some industries the minimum efficient scale is very low, so being large brings no cost advantage.'],
      ['Flexibility', 'Small firms respond faster to changing conditions and can offer personal service that large firms cannot.'],
    ],
  ),
)

/* ================================================== DEMERGERS */

const demergers = chapter(
  defn('Demerger', 'Splitting a firm into two or more separate businesses.'),
  p(
    'A demerger is the reverse of external growth, and is often an admission that an earlier merger did not deliver. Note the direction of causation: firms usually demerge because average costs ROSE with size, which is the practical evidence that diseconomies of scale are real.',
  ),
  h('Reasons to demerge'),
  det(
    'Escaping diseconomies of scale',
    'The firm has grown past its minimum efficient scale, so LRAC is rising.',
    [
      'Communication becomes slower through more management layers, coordination costs rise across sites, and workers feel anonymous.',
      'Splitting restores a size at which the business can be managed and monitored effectively, lowering average cost.',
    ],
    [
      'The firm loses the economies of scale it did have - purchasing power, financial economies, spread marketing costs.',
      'It may be management quality rather than size that is the problem, in which case demerging treats the symptom.',
    ],
  ),
  det(
    'Focus on core competence',
    'Each business is run by managers with genuine expertise in that market.',
    [
      'A conglomerate’s divisions may be run by people who understand none of them well - a common failure of unrelated diversification.',
      'Separated, each firm can set its own strategy, culture and investment priorities.',
    ],
    ['Loss of the risk-spreading that diversification provided - each new firm is now exposed to a single market.'],
  ),
  det(
    'Raising shareholder value',
    'The parts may be worth more separately than together.',
    [
      'Markets often apply a "conglomerate discount", valuing a diversified group below the sum of its parts because it is harder to analyse.',
      'Separate listings let investors choose their own exposure rather than being forced to hold the whole group.',
      'Selling a division raises cash to pay down debt or invest in the core business.',
    ],
    [
      'Shareholders can already diversify themselves by holding a portfolio, so the diversification the firm provided was never worth much to them - which is an argument that the discount is rational.',
    ],
  ),
  det(
    'Regulatory requirement',
    'A competition authority may require divestment as a condition of approving a merger, or to remedy existing market power.',
    [
      'The CMA can order a firm to sell parts of its business where a merger would substantially lessen competition.',
      'Structural separation is also used in utilities - separating a natural monopoly network from competitive retail supply.',
    ],
    [
      'Forced divestment may destroy genuine efficiencies alongside the market power, so the welfare effect is ambiguous.',
      'It is slow and legally contested, so the remedy may arrive years after the harm.',
    ],
  ),
  h('Effects of a demerger'),
  table(
    ['Group', 'Likely impact'],
    [
      ['Workers', 'Job losses where duplicated head-office functions are separated again; but potentially better management and clearer progression in a focused business.'],
      ['Consumers', 'More competition and better-focused products, if the split restores rivalry. But possible loss of the cost savings that kept prices low.'],
      ['Firms', 'Lower average cost if diseconomies were binding; loss of scale economies and synergies if they were not.'],
      ['Shareholders', 'Value may be unlocked, but the one-off costs are significant and it signals the previous strategy failed.'],
    ],
  ),
)

/* =========================================== BUSINESS OBJECTIVES */

const businessObjectives = chapter(
  p('Traditional theory assumes firms maximise profit. In practice they pursue several objectives, and which one they pursue determines the output they choose.'),
  diagram('business-objectives'),
  table(
    ['Objective', 'Output rule', 'Why a firm might pursue it'],
    [
      ['Profit maximisation', 'MC = MR', 'Maximises returns to shareholders; funds investment and R&D; the assumed default'],
      [
        'Sales revenue maximisation',
        'MR = 0',
        'Managers’ pay is often linked to turnover rather than profit; high sales help raise external finance; Baumol’s theory',
      ],
      [
        'Sales volume maximisation',
        'AR = AC (normal profit)',
        'Managers gain career prestige; volume builds market share and economies of scale; produce up to the point before making a loss',
      ],
      ['Growth maximisation', 'Expand output and market share', 'Larger firms are more secure from takeover and offer managers more status and pay'],
      ['Survival', 'Cover variable costs (AR ≥ AVC)', 'In a crisis - airlines during Covid were not aiming to profit maximise but to avoid shutdown'],
      ['Corporate social responsibility', 'Sacrifice some profit for social goals', 'Consumer and staff loyalty, brand value, and it may raise long-run profit'],
    ],
  ),
  tip(
    'Learn the three output rules: profit max at MC = MR, revenue max at MR = 0, sales volume max at AR = AC. Sales volume output is always the largest and profit max the smallest, so a firm switching objective moves output along the AR curve in a predictable direction.',
  ),
  h('The principal–agent problem'),
  defn(
    'The principal–agent problem',
    'In large firms there is a divorce of ownership from control. Owners (principals) want profit; managers (agents) may want revenue, growth or an easy life. Asymmetric information means owners cannot fully observe what managers do.',
  ),
  det(
    'Consequences and whether it is inevitable',
    'It explains why firms deviate from profit maximisation.',
    [
      'Managers may pursue growth or revenue because their pay, status and job security depend on firm size rather than profit.',
      'They may engage in "empire building" - acquisitions that raise size but destroy shareholder value.',
    ],
    [
      'It is NOT inevitable. Share options and profit-related bonuses align agent incentives with principal ones.',
      'Monitoring by non-executive directors and disclosure requirements reduce the information asymmetry.',
      'The threat of a hostile TAKEOVER disciplines managers: a firm not maximising profit has a share price below its potential, which invites a bidder.',
      'Aligning incentives can create new problems - bonuses tied to short-run profit encourage short-termism and excessive risk.',
    ],
  ),
  h('Criticisms of profit maximisation as a model'),
  table(
    ['Criticism', 'Explanation'],
    [
      [
        'Firms rarely operate on the margin',
        'Calculating MC and MR precisely is difficult; firms do not adjust output one unit at a time, and ceteris paribus never holds in practice.',
      ],
      [
        'Cost-plus pricing',
        'Many firms simply add a percentage mark-up to average cost, which is a rule of thumb rather than an optimisation.',
      ],
      ['Satisficing', 'Firms may aim for a satisfactory profit that keeps stakeholders content, rather than the maximum.'],
      [
        'Long-run against short-run',
        'Sacrificing profit now - through low prices, R&D or CSR - may raise long-run profit, so apparent deviations may be profit maximisation over a longer horizon.',
      ],
    ],
  ),
  h('How other objectives can still lead to profit'),
  table(
    ['Objective', 'Route to long-run profit'],
    [
      [
        'Sales volume maximisation',
        'Builds economies of scale and market power, letting the firm outcompete rivals and making its demand curve more inelastic later.',
      ],
      ['Sales revenue maximisation', 'Raises the finance needed for capital investment, lowering costs or raising quality in the long run.'],
      ['CSR', 'Improves brand image and staff retention, raising demand and lowering recruitment costs.'],
      ['Survival', 'Staying in business is a precondition for any future profit at all.'],
    ],
  ),
)

/* ========================================= REVENUE, COSTS, PROFIT */

const revenueCostsProfit = chapter(
  h('Revenue'),
  table(
    ['Term', 'Formula', 'Meaning'],
    [
      ['Total revenue (TR)', 'Price × quantity', 'All income from sales'],
      ['Average revenue (AR)', 'TR ÷ Q = Price', 'AR IS the demand curve facing the firm'],
      ['Marginal revenue (MR)', 'ΔTR ÷ ΔQ', 'The revenue from selling one more unit'],
    ],
  ),
  det(
    'The shape of the revenue curves',
    'It depends entirely on whether the firm is a price taker or a price maker.',
    [
      '*Price taker* (perfect competition): the firm can sell any quantity at the market price, so AR = MR = price, drawn as a horizontal line. TR rises in a straight line.',
      '*Price maker* (any other structure): to sell more the firm must cut price on ALL units, so MR falls twice as fast as AR. MR lies below AR and has twice the slope.',
      'Where MR = 0, total revenue is at its maximum. Beyond that, extra sales reduce TR.',
      'Where AR is elastic, MR is positive; where AR is inelastic, MR is negative.',
    ],
    [
      'The MR-below-AR result assumes the firm must charge one price to all customers. With price discrimination it can charge each group separately, and MR is no longer half the slope of AR.',
    ],
  ),
  diagram('revenue-curves'),

  h('Costs in the short run'),
  defn('Short run', 'The period in which at least one factor of production is FIXED. Output can only be varied by changing the variable factors.'),
  defn('Long run', 'The period in which ALL factors are variable, so the firm can change its scale of production.'),
  table(
    ['Cost', 'Formula', 'Behaviour'],
    [
      ['Total fixed cost (TFC)', 'Costs that do not vary with output', 'Constant - rent, insurance, loan interest'],
      ['Total variable cost (TVC)', 'Costs that vary with output', 'Rises with output - raw materials, piece-rate wages, energy'],
      ['Total cost (TC)', 'TFC + TVC', 'Rises with output but starts at TFC'],
      ['Average fixed cost (AFC)', 'TFC ÷ Q', 'FALLS continuously as output rises - "spreading the fixed costs"'],
      ['Average variable cost (AVC)', 'TVC ÷ Q', 'U-shaped'],
      ['Average total cost (AC)', 'AFC + AVC', 'U-shaped, and the gap between AC and AVC narrows as AFC falls'],
      ['Marginal cost (MC)', 'ΔTC ÷ ΔQ', 'U-shaped; cuts AVC and AC at their MINIMUM points'],
    ],
  ),
  diagram('cost-curves'),
  det(
    'The law of diminishing marginal returns',
    'In the SHORT RUN, as more of a variable factor is added to a fixed factor, marginal product eventually falls.',
    [
      'With a fixed factory, adding workers eventually means they get in each other’s way and have less capital each to work with.',
      'Falling marginal product means rising marginal cost - this is exactly why MC turns upward, and why AVC and AC are U-shaped.',
      'It is a SHORT-RUN law: it depends on a factor being fixed.',
    ],
    [
      'It does not apply in the long run, when all factors can be varied - that is the domain of returns to scale, which is a different idea entirely.',
      'It assumes all units of the variable factor are equally productive, and that technology is constant.',
    ],
  ),
  tip(
    'Diminishing marginal RETURNS is short run and about a fixed factor. Diseconomies of SCALE is long run and about the whole firm being too big. Examiners set questions specifically to catch students who confuse these.',
  ),
  h('Why MC cuts AC at its minimum'),
  p(
    'When MC is BELOW AC, it pulls the average down. When MC is ABOVE AC, it pulls the average up. The average is therefore at its lowest exactly where MC crosses it. The same logic applies to AVC - it is an arithmetic necessity, not a coincidence.',
  ),

  h('Profit'),
  table(
    ['Type', 'Definition'],
    [
      ['Normal profit', 'The minimum return needed to keep the firm in the industry. It is a COST, and is included in average cost. Occurs where AR = AC.'],
      ['Supernormal (abnormal) profit', 'Any profit above normal profit, where AR > AC. Attracts entry where barriers are low.'],
      ['Loss', 'AR < AC. The firm should still produce in the short run provided AR ≥ AVC.'],
    ],
  ),
  det(
    'The short-run shutdown rule',
    'A loss-making firm should keep producing in the short run if price covers average VARIABLE cost.',
    [
      'Fixed costs must be paid whether or not the firm produces, so they are irrelevant to the decision.',
      'If AR > AVC, every unit sold makes a contribution towards the fixed costs, so the loss is SMALLER than it would be by shutting.',
      'If AR < AVC, the firm loses money on every unit and should shut down immediately.',
      'In the LONG RUN all costs are variable, so the firm must cover AC or exit.',
    ],
    [
      'Shutting down and restarting has its own costs - redundancy, losing skilled staff, losing market position - which may justify producing below AVC temporarily.',
      'The firm may keep going if the downturn is expected to be brief.',
    ],
  ),
  worked(
    'A firm sells 100 units at £8. AVC is £6 and AFC is £3. Should it produce in the short run?',
    'AC = £9, so it makes a loss of £1 per unit (£100 total). But AR £8 > AVC £6, so each unit contributes £2 towards fixed costs. Shutting down would mean losing all £300 of fixed costs, so producing (loss £100) is better. Yes, produce.',
  ),
)

/* ======================================= ECONOMIES OF SCALE */

const economiesOfScale = chapter(
  defn(
    'Economies of scale',
    'A fall in LONG-RUN average cost as the scale of output rises. A long-run concept, arising because the firm gets bigger.',
  ),
  diagram('economies-of-scale'),
  h('Internal economies of scale - RTFMPS'),
  table(
    ['Type', 'Explanation'],
    [
      ['Risk-bearing', 'A larger firm can diversify products and markets, so a downturn in one does not threaten the whole business.'],
      ['Technical', 'Large-scale capital - a production line, a bigger ship - spreads its cost over more units. Includes the container principle: doubling a tanker’s surface area more than doubles its volume.'],
      ['Financial', 'Banks lend to large firms at lower interest rates because they are lower risk and have more collateral.'],
      ['Managerial', 'Specialist managers can be employed - a dedicated finance director, HR director - raising productivity through the division of labour.'],
      ['Purchasing', 'Bulk-buying discounts. Supermarkets’ buying power over suppliers is the standard example.'],
      ['Marketing', 'The cost of an advertising campaign is spread over far more units, so advertising cost per unit falls.'],
    ],
  ),
  defn(
    'External economies of scale',
    'Falls in average cost arising from the growth of the whole INDUSTRY rather than the firm - a skilled local labour pool, specialist suppliers nearby, shared infrastructure, university research links. Silicon Valley and the City of London are the standard examples.',
  ),
  h('Diseconomies of scale'),
  table(
    ['Type', 'Explanation'],
    [
      ['Communication', 'More layers of management mean slower, distorted information and slower decisions.'],
      ['Coordination', 'Harder to monitor and coordinate a large workforce across many sites; duplication and waste appear.'],
      ['Motivation', 'Workers feel anonymous and disconnected from the firm’s success, so productivity falls and absenteeism rises.'],
    ],
  ),
  defn(
    'Minimum efficient scale (MES)',
    'The lowest level of output at which long-run average cost is minimised - the point where economies of scale are exhausted.',
  ),
  det(
    'Why MES matters',
    'It determines the structure of the industry.',
    [
      'Where MES is LARGE relative to market demand, only a few firms can operate efficiently - this produces oligopoly or natural monopoly.',
      'Where MES is SMALL, many firms can achieve minimum cost, so the market supports competition.',
      'A firm below MES has higher unit costs than rivals and cannot compete on price, which is itself a barrier to entry.',
    ],
    [
      'The LRAC curve is often flat-bottomed rather than sharply U-shaped, so a range of firm sizes can be equally efficient.',
      'Technology can change MES: e-commerce and 3D printing have lowered it in some industries, while network effects have raised it in others.',
    ],
  ),
  tip(
    'Economies of scale is the single most useful evaluation point in Theme 3. It is the counter-argument to "monopoly is bad" (a large firm may have lower costs and lower prices), the reason natural monopoly exists, and the motive behind most mergers.',
  ),
)

export const ECON_THEME3A_NOTES = {
  'Business Growth': businessGrowth,
  Demergers: demergers,
  'Business Objectives': businessObjectives,
  'Revenue, Costs and Profit': revenueCostsProfit,
  'Economies and Diseconomies of Scale': economiesOfScale,
}
