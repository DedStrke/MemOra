/*
  Closing the exact gaps in Theme 3: Business Behaviour and the Labour
  Market, checked line-by-line against the Edexcel Economics A (9EC0)
  specification (3.1-3.6).

  The base Theory of the Firm chapters are already strong, so this file
  does not repeat them. It adds only the named spec content that a direct
  read-through found genuinely thin or absent:

    3.1.1(c,d)  public/private sector and profit/not-for-profit organisations
    3.1.2       regulation as a named constraint on growth
    3.3.4(a)    the profit-maximising CONDITION, derived rather than stated
    3.4.1       efficiency (allocative, productive, dynamic, X-inefficiency)
                and a structure-by-structure comparison - its own lettered
                spec point, with no chapter of its own until now
    3.4.4(b)    a worked concentration-ratio calculation
    3.4.4(f)    predatory pricing named within oligopoly pricing behaviour
    3.4.5(e)    monopoly's effect on EMPLOYEES and SUPPLIERS specifically
    3.6.1(c)    promoting competition beyond merger control
    3.6.1(d)    protecting suppliers and employees from monopsony power

  Each addition keeps the det() pattern used throughout: the mechanism,
  then why it might not hold, because that second half is where AO4 marks
  are actually awarded.
*/

import { h, p, defn, det, worked, tip, table, chapter } from './econ-notes-build'

/* ============================================== BUSINESS GROWTH */

const businessGrowth = chapter(
  h('Types of business organisation'),
  p(
    'Growth and objectives both depend on what kind of organisation a firm is, which is why the specification asks for these distinctions before it asks about growth strategy.',
  ),
  table(
    ['', 'Public sector', 'Private sector'],
    [
      ['Ownership', 'Owned and controlled by the state', 'Owned by individuals, families or shareholders'],
      ['Funding', 'Taxation, and government borrowing where it runs a deficit', 'Revenue from sales, retained profit, borrowing, share issues'],
      ['Objective', 'Typically a public service obligation - universal provision, not profit', 'Typically profit, though objectives vary by owner'],
      ['Examples', 'The NHS, the BBC, local councils', 'Sole traders, partnerships, private and public limited companies'],
    ],
  ),
  table(
    ['', 'Profit organisations', 'Not-for-profit organisations'],
    [
      ['Aim', 'Maximise or satisfice profit for owners/shareholders', 'Pursue a stated mission - charitable, social or environmental'],
      ['What happens to a surplus', 'Distributed to owners as profit, or retained for growth', 'Reinvested in the mission; nobody takes it as personal income'],
      ['Examples', 'Any ordinary company', 'Registered charities, housing associations, most universities'],
    ],
  ),
  tip(
    'A not-for-profit organisation still needs REVENUE to exceed COSTS to survive - "not-for-profit" describes what happens to the surplus, not whether one exists. Confusing this with "makes no money" is a common error.',
  ),
  h('Regulation as a constraint on growth'),
  p(
    'Beyond market size, finance and owner objectives, GROWTH ITSELF can be constrained directly by the state. The Competition and Markets Authority can block a merger, or approve it only subject to conditions such as selling off overlapping stores, wherever it judges the deal would substantially lessen competition. A firm planning to grow by acquisition therefore has to weigh regulatory risk alongside the commercial case - a deal that makes perfect strategic sense can still be stopped.',
  ),
)

/* ============================================== REVENUE, COSTS AND PROFIT */

const revenueCostsProfit = chapter(
  h('Why MC = MR maximises profit'),
  p(
    'Profit is TR minus TC, and it is maximised where the GAP between them is largest. That happens exactly where the two curves have the same slope - where the extra revenue from one more unit equals the extra cost of producing it. Calculus makes it explicit: profit is maximised where d(profit)/dQ = 0, which is MR minus MC = 0, so MC = MR.',
  ),
  table(
    ['Q', 'TR (£)', 'TC (£)', 'Profit (£)', 'MR (£)', 'MC (£)'],
    [
      ['1', '20', '18', '2', '20', '18'],
      ['2', '38', '30', '8', '18', '12'],
      ['3', '54', '40', '14', '16', '10'],
      ['4', '68', '52', '16', '14', '12'],
      ['5', '80', '68', '12', '12', '16'],
      ['6', '90', '90', '0', '10', '22'],
    ],
  ),
  p(
    'Profit rises from the 1st to the 4th unit, where MR still exceeds MC - each unit adds more to revenue than to cost. Producing the 5th unit adds £12 of revenue but £16 of cost, so profit FALLS. Profit peaks at Q = 4, which is exactly where MR (£14) still exceeds MC (£12) but the 5th unit would flip that - the profit-maximising rule MC = MR identifies the highest whole-unit output before marginal cost overtakes marginal revenue.',
  ),
  det(
    'The profit-maximising rule in practice',
    'A firm that keeps producing while MC is below MR is leaving profit on the table; one that pushes past MC = MR is destroying profit it already had.',
    [
      'If MC is less than MR, the next unit adds more to revenue than to cost, so producing it RAISES profit - the firm should expand.',
      'If MC is greater than MR, the next unit costs more than it earns, so producing it LOWERS profit - the firm should cut back.',
      'Only at MC = MR is there no unit left that would improve profit either way - which is why it is a maximum, not just a stopping point.',
    ],
    [
      'Real firms rarely know their MC and MR functions precisely enough to equate them to the unit - the rule describes the OUTCOME competitive pressure and trial-and-error pricing tend toward, not literally how managers set output.',
      'Many firms use cost-plus pricing - a mark-up on average cost - which approximates MC = MR only if the mark-up happens to reflect the elasticity of demand.',
      'The rule assumes profit is the only objective; a firm pursuing revenue or sales maximisation deliberately produces PAST this point, as the Business Objectives chapter sets out.',
    ],
  ),
)

/* ============================================== PERFECT COMPETITION */

const efficiencyFramework = chapter(
  h('Efficiency: the four criteria'),
  p(
    'Every market structure is ultimately judged against the same four yardsticks. Perfect competition is the natural place to define them, because it is the only structure that achieves the first two simultaneously - which is exactly why it is the benchmark every other structure is compared against.',
  ),
  defn(
    'Allocative efficiency',
    'Resources are allocated to produce what consumers actually value. It occurs where P = MC: the price consumers pay exactly equals the cost of the resources used to produce the last unit, so no reallocation could make anyone better off without making someone else worse off.',
  ),
  defn(
    'Productive efficiency',
    'Output is produced at the lowest possible average cost - at the minimum point of the AC curve - so no resources are wasted in production. For the whole economy, it means production sits ON the production possibility frontier rather than inside it.',
  ),
  defn(
    'Dynamic efficiency',
    'Efficiency over TIME rather than at a point in time: resources are allocated to research, development and innovation, lowering costs and improving products across future periods rather than just this one.',
  ),
  defn(
    'X-inefficiency',
    'A firm operates ABOVE its lowest possible cost curve because the absence of competitive pressure removes any discipline to control costs - management slack, overstaffing and organisational waste that a firm facing rivals could not afford. It is a productive inefficiency caused specifically by lack of competition, not by technology or scale.',
  ),
  h('Efficiency across the four market structures'),
  table(
    ['Structure', 'Allocative (P = MC)', 'Productive (min AC)', 'Dynamic', 'X-inefficiency risk'],
    [
      ['Perfect competition', 'YES, in the long run', 'YES, in the long run', 'Low - zero economic profit funds little R&D', 'Low - survival pressure is constant'],
      ['Monopolistic competition', 'NO - P above MC always', 'NO - excess capacity below min AC', 'Moderate - some profit funds product development', 'Low - many rivals discipline costs'],
      ['Oligopoly', 'NO - P above MC', 'Not guaranteed - may operate below min AC', 'Can be HIGH - supernormal profit funds sustained R&D (pharma, aerospace, telecoms)', 'Moderate - interdependence provides some discipline'],
      ['Monopoly', 'NO - the biggest gap between P and MC', 'NO - no competitive pressure to minimise cost', 'Disputed - Schumpeter argues secure profit funds the boldest innovation', 'HIGH - no rival can force costs down'],
    ],
  ),
  det(
    'Is perfect competition therefore the "best" structure?',
    'It wins on the first two criteria by construction, but a full evaluation has to weigh all four together.',
    [
      'Perfect competition is allocatively AND productively efficient in the long run, which is why it is the textbook benchmark for consumer welfare.',
      'But zero long-run economic profit means nothing is left over to fund research - the model has no mechanism for the product improvement consumers also value.',
      'Monopoly and concentrated oligopoly sacrifice static (allocative and productive) efficiency for potentially higher dynamic efficiency - Schumpeter argued that "creative destruction" needs the prospect of temporary monopoly profit to reward innovation.',
    ],
    [
      'Whether the trade-off is worth it depends on the INDUSTRY: dynamic efficiency matters enormously in pharmaceuticals, where a single new drug can justify years of protected profit, and far less in a mature market like bread, where product innovation adds little value.',
      'Supernormal profit does not automatically become R&D - it can equally become X-inefficiency, executive pay, or dividends, so the Schumpeterian defence of monopoly is a possibility, not a guarantee.',
      'Contestability matters more than the textbook structure: a monopoly under credible threat of entry behaves closer to the competitive outcome on all four criteria, which is why an answer that looks at BARRIERS as well as the number of firms scores more highly.',
    ],
  ),
)

/* ============================================== OLIGOPOLY */

const oligopolyConcentration = chapter(
  h('Calculating a concentration ratio'),
  worked(
    'A market has six firms with the following market shares: A 28%, B 24%, C 18%, D 12%, E 10%, F 8%. Calculate the 3-firm concentration ratio and the 5-firm concentration ratio.',
    '3-firm ratio: add the three LARGEST shares - 28 + 24 + 18 = 70%. 5-firm ratio: add the five largest - 28 + 24 + 18 + 12 + 10 = 92%. A 3-firm ratio of 70% indicates a highly concentrated, oligopolistic market: three firms control the great majority of sales, so their pricing decisions dominate market outcomes even though six firms technically compete.',
  ),
  tip(
    'Always state WHICH n-firm ratio you are calculating and rank the shares from largest to smallest first - a concentration ratio is defined as the combined share of the LARGEST n firms, and adding the wrong firms is the most common error.',
  ),
  h('Predatory pricing among oligopolists'),
  p(
    'Alongside price wars and limit pricing, an established oligopolist can use PREDATORY PRICING - setting price temporarily below cost specifically to force a smaller rival out of the market or deter a new entrant, then raising price again once the threat is gone. It is illegal under UK and EU competition law as an abuse of a dominant position, but is difficult to prove: a firm can usually claim a low price reflects genuine competition rather than a deliberate campaign to eliminate a rival, which is exactly the evidential problem the Competition and Markets Authority faces in practice.',
  ),
)

/* ============================================== MONOPOLY */

const monopolyStakeholders = chapter(
  h('Monopoly’s effect on employees and suppliers'),
  det(
    'Employees',
    'A monopoly’s effect on its own workforce cuts in genuinely opposite directions, which is why this is a reliable evaluation point.',
    [
      'Secure supernormal profit can fund higher wages, better training and greater job security than a firm surviving on normal profit in a competitive market could offer.',
      'But a monopoly facing no competitive pressure has less need to keep employees productive or satisfied, and X-inefficiency can show up as bloated management layers rather than as higher pay for frontline workers.',
      'A monopoly is often also a monopsony in its local labour market - the dominant or only employer of a particular skill in a region - in which case it can hold wages BELOW the competitive level even while charging consumers above it.',
    ],
    [
      'Which effect dominates depends on whether the monopoly profit is shared with the workforce or captured by shareholders and management - a question about bargaining power and union presence as much as about market structure.',
    ],
  ),
  det(
    'Suppliers',
    'A monopoly’s buying power over its own suppliers is the upstream mirror of its selling power over consumers.',
    [
      'A large monopolist can negotiate lower input prices from suppliers through sheer purchasing volume, which can lower its costs and, if passed on, lower consumer prices too.',
      'But where the monopolist is also a dominant BUYER, it can squeeze suppliers’ margins to the point where they cannot invest or survive - the same logic as monopsony power in a labour market, applied to a product market.',
      'Long-term security of demand from a large single buyer can actually benefit suppliers by letting them plan investment with confidence, provided the relationship is not exploitative.',
    ],
    [
      'The outcome depends on whether suppliers have alternative buyers. A supplier that can sell elsewhere retains bargaining power; one that depends entirely on the monopolist does not - which is exactly the asymmetry competition authorities look for when investigating abuse of a dominant position.',
    ],
  ),
)

/* ============================================== GOVERNMENT INTERVENTION */

const governmentIntervention = chapter(
  h('Promoting competition beyond merger control'),
  table(
    ['Tool', 'How it works'],
    [
      ['Promotion of small business', 'Grants, start-up loans and simplified regulation for small firms lower the barriers that protect incumbents, making markets more contestable from below'],
      ['Deregulation', 'Removing licensing and entry rules that exist mainly to protect established firms, so new entrants can compete on merit'],
      ['Competitive tendering', 'Government contracts are awarded through open bidding rather than to an incumbent automatically, forcing even a monopoly supplier to bid competitively for that portion of demand'],
    ],
  ),
  tip(
    'Competitive tendering is easy to confuse with privatisation. Privatisation transfers OWNERSHIP from the state to the private sector; competitive tendering keeps the service publicly commissioned but opens its DELIVERY to competing bidders - a council can tender out its bin collection without selling the council itself.',
  ),
  h('Protecting suppliers and employees from monopsony power'),
  det(
    'Direct restriction of monopsony power',
    'Where a dominant buyer squeezes weaker suppliers or workers, government can intervene directly rather than relying on competition alone to correct it.',
    [
      'Statutory codes of practice - the Groceries Supply Code of Practice, policed by the Groceries Code Adjudicator - restrict how supermarkets can treat food suppliers, banning practices such as retrospective price cuts.',
      'A minimum wage counters monopsony power over LOW-paid workers directly, as covered in Wage Determination: it can raise both pay and employment where a single dominant employer was holding wages below the competitive level.',
      'Sector regulators can require minimum notice periods, fair contract terms, or independent arbitration for disputes between a dominant buyer and its suppliers.',
    ],
    [
      'These measures only work where regulators can observe and enforce compliance - a supplier who complains risks being dropped by their only major buyer, so protection depends on genuine anonymity and enforcement, not just the rule existing on paper.',
      'Overly rigid rules can reduce the FLEXIBILITY that makes supply chains efficient, so intervention has to be targeted at genuine abuse rather than at scale itself.',
    ],
  ),
)

export const ECON_EXTRA_DEPTH_2 = {
  'Business Growth': businessGrowth,
  'Revenue, Costs and Profit': revenueCostsProfit,
  'Perfect Competition': efficiencyFramework,
  Oligopoly: oligopolyConcentration,
  Monopoly: monopolyStakeholders,
  'Government Intervention and Equity': governmentIntervention,
}
