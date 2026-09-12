/*
  Theme 3 continued: market structures and the labour market.

  This is the heart of A-level year 2 and none of it appeared in the course
  documents, which stop at AS. Every structure below follows the same
  sequence - assumptions, the diagram, the short run, the long run, and an
  efficiency verdict - because that is the sequence the exam questions follow.

  The efficiency verdict is the evaluation: allocative, productive, dynamic
  and X-efficiency give four separate angles on "is this market structure
  good for consumers", and a Level 5 answer uses more than one.
*/

import { h, p, defn, det, diagram, tip, table, chapter } from './econ-notes-build'

const SPECTRUM = table(
  ['Structure', 'Firms', 'Product', 'Barriers', 'Long-run profit'],
  [
    ['Perfect competition', 'Very many', 'Identical', 'None', 'Normal only'],
    ['Monopolistic competition', 'Many', 'Differentiated', 'Low', 'Normal only'],
    ['Oligopoly', 'Few, interdependent', 'Differentiated or identical', 'High', 'Supernormal possible'],
    ['Monopoly', 'One (25%+ legally)', 'Unique', 'Very high', 'Supernormal sustained'],
  ],
)

/* ========================================= PERFECT COMPETITION */

const perfectCompetition = chapter(
  h('Assumptions'),
  table(
    ['Assumption', 'Consequence'],
    [
      ['Many buyers and sellers, each small', 'No individual firm can influence price - every firm is a PRICE TAKER'],
      ['Homogeneous (identical) products', 'No brand loyalty; consumers switch on price alone'],
      ['Perfect information', 'All firms know the technology; all consumers know all prices'],
      ['No barriers to entry or exit', 'Supernormal profit is competed away in the long run'],
      ['Firms are profit maximisers', 'Output is set where MC = MR'],
    ],
  ),
  p(
    'Because the firm is a price taker it faces a perfectly elastic demand curve at the market price, so *AR = MR = D = P*, drawn horizontal.',
  ),
  SPECTRUM,
  h('Short run'),
  det(
    'Supernormal profit is possible in the short run',
    'If price is above AC at the profit-maximising output, the firm earns supernormal profit.',
    [
      'The firm produces where MC = MR, which for a price taker means MC = price.',
      'Profit per unit is AR − AC, and total supernormal profit is that gap times quantity.',
      'A firm can also make a LOSS in the short run if price is below AC; it stays open provided price covers AVC.',
    ],
    [
      'This cannot persist: with no barriers to entry, profit is a signal that attracts new firms.',
    ],
  ),
  diagram('perfect-competition-short-run'),
  h('Long run'),
  det(
    'The adjustment to normal profit',
    'Entry and exit drive the market to long-run equilibrium.',
    [
      'Supernormal profit attracts NEW FIRMS. Industry supply rises, so the market price falls.',
      'The individual firm’s horizontal AR line falls with it, until AR is tangent to the minimum of AC.',
      'At that point AR = AC, so only NORMAL profit is made, and there is no further incentive to enter.',
      'Losses work in reverse: firms exit, supply falls, price rises back to minimum AC.',
    ],
    [
      'The assumptions are so strong that no real market meets them - this is a benchmark, not a description.',
      'Agricultural markets and foreign exchange come closest, and even they have differentiation and imperfect information.',
    ],
  ),
  diagram('perfect-competition'),
  h('Efficiency verdict'),
  table(
    ['Type', 'Achieved?', 'Why'],
    [
      ['Allocative', 'YES', 'P = MC, so the last unit is valued by consumers exactly at what it cost to produce'],
      ['Productive', 'YES', 'The firm produces at minimum AC in long-run equilibrium'],
      ['X-efficiency', 'YES', 'Competitive pressure means any firm with costs above the minimum makes a loss and exits'],
      ['Dynamic', 'NO', 'Only normal profit, so there is no surplus to fund R&D - and perfect information means any innovation is copied instantly, removing the incentive'],
    ],
  ),
  tip(
    'The dynamic efficiency failure is the strongest evaluation of perfect competition, and it is the bridge to the monopoly argument: Schumpeter argued consumers gain more from innovation over time than they lose from a monopolist’s higher price today.',
  ),
)

/* ================================== MONOPOLISTIC COMPETITION */

const monopolisticCompetition = chapter(
  p(
    'Many firms, low barriers, but DIFFERENTIATED products. Hairdressers, restaurants, plumbers, corner shops - the most common real-world structure.',
  ),
  h('Assumptions'),
  table(
    ['Assumption', 'Consequence'],
    [
      ['Many firms, each small', 'No firm can affect the others much; no interdependence'],
      ['DIFFERENTIATED products', 'Each firm has slight market power, so AR slopes DOWN - unlike perfect competition'],
      ['Low barriers to entry and exit', 'Supernormal profit is competed away in the long run'],
      ['Reasonably good information', 'Consumers can compare, but brand loyalty softens switching'],
    ],
  ),
  det(
    'Short run and long run',
    'Short-run supernormal profit is competed away by entry, but the end point differs from perfect competition.',
    [
      'In the SHORT run a firm can earn supernormal profit where AR > AC at the profit-maximising output.',
      'Profit attracts entry. New firms take demand away, so each existing firm’s AR shifts LEFT.',
      'Entry continues until AR is TANGENT to AC - only normal profit remains.',
      'Because AR slopes down, that tangency occurs on the DOWNWARD-sloping part of AC, not at its minimum.',
    ],
    [
      'The result is EXCESS CAPACITY: the firm produces below minimum AC, so it is productively inefficient. It could lower unit costs by producing more but has no incentive to.',
      'Whether this is a genuine welfare loss is arguable: consumers get VARIETY in exchange, and they may value choice more than the marginally lower price.',
    ],
  ),
  diagram('monopolistic-competition'),
  h('Efficiency verdict'),
  table(
    ['Type', 'Achieved?', 'Why'],
    [
      ['Allocative', 'NO', 'P > MC because AR slopes down'],
      ['Productive', 'NO', 'Produces below minimum AC - excess capacity'],
      ['Dynamic', 'LIMITED', 'Only normal profit long run, so little to fund R&D; but differentiation gives some incentive to innovate on quality'],
      ['X-efficiency', 'PARTLY', 'Low barriers keep some competitive pressure on costs'],
    ],
  ),
  h('Non-price competition'),
  p(
    'Because products are differentiated, firms compete on quality, service, location, branding and advertising rather than on price alone. This is how a firm shifts its own AR curve right and makes it more inelastic - the whole point of differentiation.',
  ),
  det(
    'Is product differentiation good for consumers?',
    'It is the defining feature of the structure and cuts both ways.',
    [
      'Consumers get variety and can find a product matched to their preferences rather than a single standardised good.',
      'Firms have an incentive to innovate on quality and service to attract custom.',
      'Local convenience is itself differentiation - a corner shop competes on location, not price.',
    ],
    [
      'Differentiation may be superficial - branding and packaging rather than real difference - in which case advertising raises costs and prices without adding value.',
      'It makes price comparison harder, weakening the consumer’s ability to shop around and softening competition.',
      'The excess capacity result means consumers pay more per unit than they would under perfect competition.',
    ],
  ),
  h('Comparison with the other structures'),
  table(
    ['Compared with', 'Monopolistic competition is'],
    [
      ['Perfect competition', 'Slightly less efficient - P > MC and excess capacity - but offers variety, which perfect competition cannot because products are identical'],
      ['Oligopoly', 'More competitive - low barriers mean no supernormal profit in the long run, and no interdependence or collusion'],
      ['Monopoly', 'Far better for consumers - no sustained supernormal profit, no significant barriers, and much smaller deadweight loss'],
    ],
  ),
  p(
    'Evaluation: the efficiency losses are small because the firm has little market power, and consumers gain variety and choice. Compared with monopoly this is a far better outcome; compared with perfect competition it is slightly worse on paper but arguably better in practice.',
  ),
)

/* ================================================== OLIGOPOLY */

const oligopoly = chapter(
  defn(
    'Oligopoly',
    'A market dominated by a few large firms. Defined by the CONCENTRATION RATIO - for example a five-firm concentration ratio above 60% - and above all by INTERDEPENDENCE.',
  ),
  p(
    'Interdependence is the defining feature: each firm must anticipate rivals’ reactions before acting. That is why oligopoly needs game theory rather than a single diagram.',
  ),
  SPECTRUM,
  h('Characteristics'),
  table(
    ['Feature', 'Explanation'],
    [
      ['High barriers to entry', 'Economies of scale, brand loyalty, sunk costs, legal barriers'],
      ['Interdependence', 'Each firm’s best action depends on what rivals do'],
      ['Price rigidity', 'Prices tend to be stable; competition happens on non-price terms'],
      ['Non-price competition', 'Advertising, branding, loyalty schemes, quality, product development'],
    ],
  ),
  h('The kinked demand curve'),
  det(
    'Why prices are sticky',
    'Each firm assumes rivals will match a price CUT but not a price RISE.',
    [
      'If the firm RAISES price, rivals do not follow, so it loses many customers - demand is ELASTIC above the current price.',
      'If the firm CUTS price, rivals match to protect share, so it gains few extra customers - demand is INELASTIC below.',
      'The demand curve is therefore kinked at the current price, which creates a DISCONTINUITY in MR.',
      'MC can shift anywhere within that gap without changing the profit-maximising output, so price stays put.',
    ],
    [
      'It explains why prices are stable but not how the original price was set - the model has no theory of price determination.',
      'Empirically, oligopoly prices are not especially rigid; price wars are common in petrol and supermarkets.',
      'It assumes a specific pattern of rival behaviour rather than deriving it.',
    ],
  ),
  diagram('kinked-demand'),
  h('Game theory and the prisoner’s dilemma'),
  det(
    'Why cartels are unstable',
    'Each firm has a DOMINANT STRATEGY to cheat, whatever the other does.',
    [
      'Two firms can collude on a high price and both earn well - the joint-best outcome.',
      'But if one cheats by undercutting while the other holds price, the cheat captures the market and earns more.',
      'Since that is true for both, and each knows it, both cheat - reaching a NASH EQUILIBRIUM that is worse for both than colluding.',
      'This is the prisoner’s dilemma, and it explains both why cartels form and why they break down.',
    ],
    [
      'REPEATED games change the result: with an indefinite series of interactions, firms can sustain collusion through the threat of future retaliation (tit-for-tat).',
      'Real markets have more than two firms, imperfect information about rivals’ prices, and different cost structures - all of which make coordination harder.',
    ],
  ),
  diagram('game-theory'),
  h('Collusion'),
  table(
    ['Type', 'Explanation'],
    [
      ['Overt collusion (a cartel)', 'A formal agreement to fix price or output. ILLEGAL in the UK and EU. OPEC is the best-known example because it operates between states.'],
      ['Tacit collusion', 'No agreement, but firms follow each other’s pricing - often through PRICE LEADERSHIP, where a dominant firm sets the price and others follow. Hard to prove and therefore hard to prosecute.'],
    ],
  ),
  det(
    'When is collusion likely to succeed?',
    'Conditions that make coordination easier and cheating easier to detect.',
    [
      'Few firms, so coordination is simpler and each has more to lose.',
      'Similar costs and products, so a common price suits everyone.',
      'High barriers to entry, so the profit cannot be competed away.',
      'Transparent prices, so cheating is spotted quickly and can be punished.',
      'Repeated interaction over a long horizon.',
    ],
    [
      'Cartels are illegal, and LENIENCY programmes give the first firm to confess immunity - which deliberately re-creates the prisoner’s dilemma inside the cartel and is why cartels are unstable.',
      'A recession makes cheating tempting, since firms need volume to survive.',
      'The CMA can fine up to 10% of global turnover, and individuals can be disqualified as directors or imprisoned.',
    ],
  ),
  h('Non-price competition'),
  p(
    'Because price cuts are matched and price rises lose customers, oligopolists compete on advertising, branding, loyalty cards, quality, customer service and product innovation. This can benefit consumers through better products, but advertising is a cost that raises prices and may add no real value.',
  ),
  h('Evaluating oligopoly'),
  table(
    ['Consumers may LOSE', 'Consumers may GAIN'],
    [
      ['Higher prices from collusion; the outcome approaches monopoly', 'Price wars can make competition fierce and prices very low'],
      ['Allocative inefficiency where P > MC', 'Supernormal profit funds R&D - high dynamic efficiency in pharmaceuticals, telecoms, aerospace'],
      ['Wasteful advertising raising costs', 'Economies of scale from large size can lower prices'],
      ['High barriers protect incumbents from entry', 'Non-price competition raises quality and choice'],
    ],
  ),
)

/* ================================================== MONOPOLY */

const monopoly = chapter(
  defn(
    'Monopoly',
    'A PURE monopoly is a single seller with 100% of the market. A LEGAL monopoly is any firm with 25% or more, which is the threshold at which UK competition authorities may investigate.',
  ),
  h('Sources of monopoly power'),
  table(
    ['Barrier', 'Explanation'],
    [
      ['Legal', 'Patents, copyright, licences and franchises granted by government'],
      ['Economies of scale', 'A large incumbent has much lower AC than any entrant could achieve - the strongest natural barrier'],
      ['High sunk costs', 'Costs that cannot be recovered on exit deter entry, since a failed entry is very expensive'],
      ['Control of essential resources', 'Owning the raw material or the distribution network'],
      ['Brand loyalty and advertising', 'Consumers do not switch even when a cheaper alternative exists'],
      ['Network effects', 'The product is more valuable the more people use it - social networks, payment systems'],
      ['Limit pricing and predatory pricing', 'Deliberately deterring entry, discussed under contestability'],
    ],
  ),
  det(
    'The monopoly outcome',
    'The monopolist faces the whole market demand curve, so AR slopes down and MR lies below it.',
    [
      'Profit maximisation at MC = MR gives output Qm, and price is read UP to the AR curve at Pm.',
      'Because Pm > MC the outcome is ALLOCATIVELY INEFFICIENT - consumers value the marginal unit above its cost.',
      'The deadweight welfare loss is the triangle between AR and MC from Qm out to the competitive output Qc.',
      'Because barriers prevent entry, supernormal profit persists into the long run.',
      'Output is below minimum AC, so it is also productively inefficient.',
    ],
    [
      'Economies of scale may be so large that the monopolist’s price is still LOWER than a competitive industry of small firms could manage - the diagram assumes identical cost curves, which is precisely the assumption that fails.',
      'Supernormal profit funds R&D, so dynamic efficiency may be higher (Schumpeter).',
      'Contestability matters more than structure: a monopolist facing the credible threat of entry prices near the competitive level.',
    ],
  ),
  diagram('monopoly'),
  h('Price discrimination'),
  defn(
    'Price discrimination',
    'Charging different prices to different consumers for the same good, where the price difference does not reflect a cost difference.',
  ),
  table(
    ['Degree', 'Meaning', 'Example'],
    [
      ['First degree', 'Each consumer charged their exact maximum willingness to pay; all consumer surplus extracted', 'Individually negotiated prices; algorithmic personalised pricing'],
      ['Second degree', 'Price varies with quantity or timing purchased', 'Bulk discounts; off-peak energy tariffs'],
      ['Third degree', 'Different prices to separable groups with different elasticities', 'Student and senior rail fares; peak and off-peak travel'],
    ],
  ),
  det(
    'Conditions and effects',
    'Three conditions must all hold for third-degree discrimination to work.',
    [
      'The firm must have PRICE-SETTING POWER - a price taker cannot discriminate.',
      'The groups must be SEPARABLE and have DIFFERENT elasticities of demand.',
      'RESALE must be prevented, or the low-price group would resell to the high-price group and destroy the scheme.',
      'The inelastic group is charged more, the elastic group less; each market produces where its own MR = MC.',
      'It converts consumer surplus into producer surplus, raising profit above the single-price level.',
    ],
    [
      'It is not automatically bad for consumers: the extra profit may fund investment, cross-subsidise loss-making services, or allow provision to the elastic group who would otherwise be priced out entirely.',
      'It can raise total output above the single-price level, which improves allocative efficiency.',
      'But it is regressive where the inelastic group is the one with least choice - commuters who must travel at peak times.',
    ],
  ),
  diagram('price-discrimination'),
  h('Natural monopoly'),
  det(
    'Where one firm is genuinely the efficient outcome',
    'Enormous fixed costs and continuously falling average cost across the whole range of demand.',
    [
      'Water pipes, the rail network, electricity transmission, gas distribution - duplicating the network would raise average cost for everyone.',
      'AC is still falling where it meets demand, so MC lies BELOW AC throughout.',
      'This creates the regulator’s dilemma: forcing P = MC (allocative efficiency) would price below AC and make a LOSS, requiring a subsidy to sustain.',
      'Regulators therefore usually set P = AC, giving normal profit, or use RPI−X price capping.',
    ],
    [
      'Competition here would RAISE costs, so this is the strongest case against breaking up a monopoly.',
      'The usual answer is structural separation: regulate the natural monopoly network while allowing competition in retail supply on top of it.',
    ],
  ),
  diagram('natural-monopoly'),
  h('Monopsony'),
  defn('Monopsony', 'A single or dominant BUYER in a market - the mirror image of monopoly.'),
  p(
    'A monopsonist can drive down the price it pays suppliers, raising its profit. Supermarkets over farmers, and the NHS over nurses, are standard examples. It lowers costs and so may lower consumer prices, but it reduces supplier incomes and can reduce the quantity traded below the efficient level.',
  ),
  diagram('monopsony'),
)

/* =========================================== CONTESTABILITY */

const contestability = chapter(
  defn(
    'Contestable market',
    'A market where barriers to entry and exit are low, so incumbents face a credible THREAT of entry - even if no entry actually occurs.',
  ),
  p(
    'Baumol’s key insight: it is the THREAT of competition, not the number of firms, that disciplines behaviour. A monopolist in a perfectly contestable market behaves like a competitive firm.',
  ),
  h('Conditions for contestability'),
  table(
    ['Condition', 'Explanation'],
    [
      ['Low or no SUNK costs', 'The decisive one - costs recoverable on exit make "hit and run" entry possible'],
      ['Free entry and exit', 'No legal, technical or financial barriers'],
      ['Access to the same technology', 'Entrants can match incumbents’ costs'],
      ['Perfect information', 'Potential entrants can see the supernormal profit that makes entry worthwhile'],
      ['No consumer brand loyalty', 'Customers will switch to an entrant'],
    ],
  ),
  defn(
    'Hit-and-run entry',
    'A firm enters to capture supernormal profit, then exits when the incumbent responds - profitable only if sunk costs are low.',
  ),
  h('How incumbents deter entry'),
  det(
    'Limit pricing',
    'Setting price BELOW the profit-maximising level but above own average cost, so entry is unprofitable.',
    [
      'The incumbent sets a price just below the entrant’s expected average cost.',
      'It sacrifices short-run profit to preserve long-run market power.',
      'It is LEGAL, because the firm still covers its own costs.',
    ],
    [
      'It only works if the incumbent genuinely has lower costs than potential entrants.',
      'It reduces the incumbent’s profit, so there is a real trade-off - and consumers benefit from the lower price in the meantime.',
    ],
  ),
  diagram('limit-pricing'),
  det(
    'Predatory pricing',
    'Setting price BELOW average variable cost to drive an existing rival out, then raising it again.',
    [
      'Deliberately loss-making in the short run, funded from profits elsewhere or from deep reserves.',
      'It is ILLEGAL under UK and EU competition law as an abuse of a dominant position.',
    ],
    [
      'Hard to prove: distinguishing predatory pricing from vigorous competition requires showing the price was below cost AND that recoupment was intended.',
      'It may fail if the rival can survive, or if new entrants appear once the price rises again.',
    ],
  ),
  p(
    'Other deterrents: heavy advertising to build loyalty, holding excess capacity as a threat to flood the market, patents, exclusive supply contracts, and loyalty schemes that raise switching costs.',
  ),
  h('Why contestability matters'),
  det(
    'It changes the whole competition policy conclusion',
    'Market structure alone does not determine conduct or performance.',
    [
      'A monopolist in a contestable market prices near cost and earns only normal profit, so consumers do not lose.',
      'This shifts policy focus from breaking up large firms towards REMOVING BARRIERS - deregulation, opening networks, banning exclusive contracts.',
      'Airlines after deregulation are the standard example: aircraft can be leased and redeployed, so sunk costs are low and routes are contestable even with few operators.',
    ],
    [
      'Perfect contestability is as unrealistic as perfect competition. Sunk costs exist almost everywhere, and brand loyalty is real.',
      'Incumbents can raise barriers deliberately, so contestability is not a stable state.',
      'The threat must be CREDIBLE - a potential entrant that cannot actually match the incumbent’s costs disciplines nothing.',
    ],
  ),
)

/* ======================================== WAGE DETERMINATION */

const wageDetermination = chapter(
  p(
    'In a competitive labour market the wage is set by the demand for and supply of labour, exactly as in any other market - but both curves have distinctive determinants.',
  ),
  defn(
    'Derived demand',
    'Demand for labour is derived from demand for the product it makes. If demand for cars falls, demand for car workers falls with it.',
  ),
  defn(
    'Marginal revenue product (MRP)',
    'The extra revenue from employing one more worker: MRP = marginal physical product × marginal revenue. A profit-maximising firm hires up to the point where MRP = the wage.',
  ),
  diagram('labour-market'),
  h('Determinants of labour DEMAND'),
  det(
    'Demand for the final product',
    'Higher product demand raises MRP and so raises demand for labour at every wage.',
    ['This is why labour demand is procyclical and why recessions cause cyclical unemployment.'],
    ['The link is weaker where labour is a small share of costs, or where output can be raised from existing staff.'],
  ),
  det(
    'Labour productivity',
    'Higher productivity raises marginal physical product and so raises MRP.',
    ['Training, better capital and improved technology all raise output per worker, raising the wage a firm can afford to pay.'],
    ['Technology can also SUBSTITUTE for labour, cutting demand - so the net effect on employment is ambiguous.'],
  ),
  det(
    'The price and availability of capital',
    'Cheaper capital reduces demand for labour where the two are substitutes.',
    ['Automation replaces labour when capital becomes relatively cheaper - self-service checkouts, warehouse robotics.'],
    ['Where capital and labour are COMPLEMENTS, cheaper capital raises labour productivity and so raises demand for labour.'],
  ),
  h('Determinants of labour SUPPLY'),
  det(
    'The wage rate and net advantages',
    'Higher wages attract more workers into an occupation.',
    [
      'Supply also responds to NON-WAGE factors: job security, working conditions, holidays, pensions, status and location.',
      'A dangerous or unpleasant job needs a compensating wage differential to attract workers.',
    ],
    [
      'The supply curve can bend BACKWARDS at high wages: beyond a point, higher pay lets a worker afford more leisure, so hours supplied fall - the income effect outweighs the substitution effect.',
    ],
  ),
  det(
    'Qualifications, training and barriers to entry',
    'Occupations requiring long training have restricted supply, so wages are higher.',
    [
      'Doctors and lawyers require years of qualification, so supply is inelastic and wages high.',
      'Professional bodies can restrict entry, further limiting supply.',
    ],
    ['Supply becomes more elastic over time as people train, so a wage premium erodes in the long run unless barriers persist.'],
  ),
  det(
    'Labour mobility',
    'Immobility keeps supply low in a particular market even when wages are high.',
    [
      '*Occupational* immobility: skills do not transfer between jobs.',
      '*Geographical* immobility: housing costs, family ties and transport prevent moving to where work is.',
    ],
    ['Both can be reduced by policy - retraining, relocation support, affordable housing - but only over years.'],
  ),
  h('Elasticity of labour demand and supply'),
  table(
    ['More ELASTIC when', 'Explanation'],
    [
      ['Labour is a large share of total costs', 'A wage rise then has a large effect on total costs, so firms cut employment more'],
      ['Capital is a close substitute', 'Firms can automate in response to higher wages'],
      ['Demand for the product is elastic', 'Firms cannot pass higher wage costs on, so they cut employment instead'],
      ['The time period is long', 'Firms have time to restructure and workers have time to retrain'],
    ],
  ),
)

/* ========================================= LABOUR MARKET ISSUES */

const labourMarketIssues = chapter(
  h('Monopsony in the labour market'),
  det(
    'A single dominant employer',
    'A monopsonist faces the upward-sloping market supply of labour, so it is a WAGE SETTER.',
    [
      'To hire one more worker it must raise the wage for EVERYONE, so the marginal cost of labour (MCL) lies ABOVE the supply curve (ACL).',
      'It hires where MCL = MRP, then pays only the wage on the SUPPLY curve at that quantity.',
      'Both the wage AND employment are therefore below the competitive level - the monopsonist restricts hiring to hold the wage down.',
    ],
    [
      'This reverses the standard minimum wage prediction: a minimum wage set between the monopsony wage and the competitive wage raises BOTH the wage and employment, because it removes the incentive to restrict hiring.',
      'True monopsony is rare in pure form, but local labour markets for care work, retail and agriculture in rural areas approximate it - which is why the empirical employment effects of the UK minimum wage have been so much smaller than the competitive model predicts.',
    ],
  ),
  diagram('monopsony'),
  h('Trade unions'),
  det(
    'Union wage bargaining',
    'A union acts as a monopoly supplier of labour, bargaining collectively for a wage above equilibrium.',
    [
      'In a COMPETITIVE labour market, a union wage above equilibrium creates excess supply of labour - unemployment of Qs − Qd.',
      'In a MONOPSONY, a union can offset the employer’s power and raise wages toward the competitive level WITHOUT costing jobs - bilateral monopoly.',
      'Unions also raise non-wage conditions, improve safety, and can raise productivity by giving workers a voice and lowering turnover.',
    ],
    [
      'The employment effect depends entirely on the market structure - the two cases point in opposite directions, which is the evaluation.',
      'Union power in the UK has fallen sharply since the 1980s: density is now around a fifth of employees and concentrated in the public sector, so the effect is much weaker than the model suggests.',
      'Elasticity of labour demand matters: where demand is inelastic, a union can raise wages with little job loss.',
    ],
  ),
  diagram('trade-union'),
  h('The national minimum wage'),
  det(
    'Arguments for and against',
    'A price floor in the labour market.',
    [
      'FOR: raises pay for the lowest earners, reduces in-work poverty and the tax credit bill, raises incentives to work, and can raise productivity through the efficiency wage effect (better motivation, lower turnover).',
      'It raises AD, since low earners have a high MPC.',
      'In a monopsony it can raise employment as well as pay.',
    ],
    [
      'In a competitive market it causes excess supply of labour - unemployment concentrated among the low-skilled and the young.',
      'Firms may respond by cutting hours, reducing non-wage benefits, slowing hiring, raising prices or accepting lower margins - so "no job losses" does not mean "no effect".',
      'A single national rate bites hardest in low-wage regions, which are the ones the policy is meant to help.',
      'It does not help the workless, who are the poorest group, and it does not address the underlying cause of low pay, which is low productivity.',
    ],
  ),
  h('Wage differentials and discrimination'),
  table(
    ['Cause of differentials', 'Explanation'],
    [
      ['Differences in MRP', 'More productive or more highly skilled workers generate more revenue, so command higher wages'],
      ['Barriers to entry into an occupation', 'Long qualification restricts supply, raising the wage'],
      ['Compensating differentials', 'Unpleasant, dangerous or unsociable work must pay more to attract workers'],
      ['Labour immobility', 'Workers cannot move to higher-paying occupations or regions'],
      ['Imperfect information', 'Workers do not know what other jobs pay, so wages differ for identical work'],
      ['Discrimination', 'Employers pay different wages to equally productive workers based on gender, ethnicity or age'],
    ],
  ),
  det(
    'The economics of discrimination',
    'Discrimination causes a misallocation of labour as well as an equity problem.',
    [
      'An employer who discriminates perceives a lower MRP for the discriminated group, so demand for their labour is lower and their wage lower.',
      'Society loses output because workers are not allocated to the jobs where they are most productive.',
      'The firm loses too - it pays more than necessary for its preferred group and forgoes productive workers.',
    ],
    [
      'Becker argued competition should ERODE discrimination, since a non-discriminating firm has lower costs and outcompetes discriminators. That this has not fully happened suggests barriers or that discrimination is partly statistical.',
      'Measured pay gaps partly reflect occupational choice, hours and career interruption rather than unequal pay for identical work - so the raw gap overstates direct discrimination.',
      'Legislation can address direct discrimination but struggles with the structural causes.',
    ],
  ),
)

/* ================================ GOVERNMENT INTERVENTION & EQUITY */

const interventionEquity = chapter(
  h('Competition policy'),
  p('In the UK the Competition and Markets Authority (CMA) enforces competition law. Its main tools:'),
  table(
    ['Tool', 'What it does'],
    [
      ['Merger control', 'Investigates mergers that may substantially lessen competition; can block them or require divestment'],
      ['Cartel enforcement', 'Fines of up to 10% of global turnover; director disqualification; criminal prosecution. Leniency gives the first to confess immunity'],
      ['Market investigations', 'Examines whole markets and can impose remedies - as in energy, banking and funerals'],
      ['Abuse of dominance', 'Prohibits predatory pricing, refusal to supply and exclusive contracts by dominant firms'],
    ],
  ),
  det(
    'Does competition policy work?',
    'It aims to protect consumers by preserving rivalry.',
    [
      'Prevents the price rises and allocative inefficiency that follow from market power.',
      'The threat of investigation deters anti-competitive conduct that never has to be prosecuted.',
      'Leniency programmes have been highly effective at breaking cartels by re-creating the prisoner’s dilemma inside them.',
    ],
    [
      'Investigations are slow and expensive, so harm continues while they run.',
      'Regulators face an information asymmetry - the firm knows its costs and the regulator does not.',
      'Blocking a merger may prevent genuine economies of scale, raising costs and prices.',
      'Regulatory capture: staff move between regulator and industry, and the regulator depends on the industry for information.',
    ],
  ),
  h('Regulating natural monopoly'),
  table(
    ['Method', 'How it works', 'Problem'],
    [
      [
        'RPI − X price capping',
        'Prices may rise by inflation minus an efficiency factor X, forcing real price falls and passing efficiency gains to consumers',
        'Setting X requires knowing the firm’s efficiency potential, which only the firm knows. Too tight and it cannot invest; too loose and consumers gain nothing',
      ],
      ['Rate of return regulation', 'Caps profit as a percentage of capital employed', 'Creates a perverse incentive to over-invest in capital to raise the allowed profit'],
      ['Quality standards', 'Minimum service levels enforced by the regulator', 'Costly to monitor; firms meet the letter and not the spirit'],
      ['Yardstick competition', 'Compare regional monopolies against each other and penalise laggards', 'Only works where genuinely comparable firms exist'],
    ],
  ),
  h('Nationalisation and privatisation'),
  table(
    ['Nationalisation - arguments FOR', 'Privatisation - arguments FOR'],
    [
      ['Natural monopoly avoids wasteful duplication of networks', 'Profit motive drives efficiency and cost reduction'],
      ['Externalities and social objectives can be pursued directly', 'Removes political interference from investment decisions'],
      ['Avoids private monopoly exploiting consumers', 'Raises revenue for government and widens share ownership'],
      ['Can guarantee universal service in unprofitable areas', 'Competition where it is possible improves choice and quality'],
    ],
  ),
  h('Inequality and poverty'),
  defn('Absolute poverty', 'Income below a level needed to afford basic necessities - the World Bank line is $2.15 a day at PPP.'),
  defn('Relative poverty', 'Income below a given proportion of the median - in the UK, below 60% of median household income. It is a measure of inequality, so it can persist even as everyone gets richer.'),
  p('Inequality is measured by the LORENZ CURVE and summarised by the GINI COEFFICIENT - 0 is perfect equality, 1 perfect inequality.'),
  diagram('lorenz-curve'),
  det(
    'Policies to reduce inequality',
    'Three families, with very different speeds and side effects.',
    [
      '*Progressive taxation and transfers* - narrows the post-tax distribution immediately and funds the benefits that support the poorest.',
      '*Labour market intervention* - the national living wage raises the bottom of the wage distribution directly.',
      '*Supply-side investment* - education and training raise the MRP of low earners, raising their market wage permanently rather than by transfer.',
    ],
    [
      'High marginal rates may reduce incentives, and the Laffer curve implies revenue eventually falls - though the empirical response is small for most workers.',
      'Means-tested benefits create the POVERTY TRAP: withdrawal as income rises creates very high effective marginal rates for the low paid, so extra hours barely pay.',
      'The minimum wage only helps those IN work; the poorest households are often workless.',
      'Education works over a generation, so it cannot address present poverty.',
      'Equity/efficiency trade-off: redistribution may slow growth, and the Gini coefficient can fall without the poorest gaining anything.',
    ],
  ),
  diagram('progressive-tax'),
)

export const ECON_THEME3B_NOTES = {
  'Perfect Competition': perfectCompetition,
  'Monopolistic Competition': monopolisticCompetition,
  Oligopoly: oligopoly,
  Monopoly: monopoly,
  Contestability: contestability,
  'Wage Determination': wageDetermination,
  'Labour Market Issues': labourMarketIssues,
  'Government Intervention and Equity': interventionEquity,
}
