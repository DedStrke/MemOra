/*
  Theory of the Firm: the heavy deck.

  Edexcel Theme 3 (3.1-3.4) had about six flashcards per chapter - fine for
  a quick warm-up, useless as the thing you actually revise from the night
  before Paper 1. These are written to be the revision source itself: every
  card carries the definition AND the mechanism AND the exam-critical
  detail, so working the deck end to end covers the specification rather
  than skimming it.

  Answers are deliberately long and structured. FlipCard grows to fit its
  content and preserves newlines, so a card can be a proper mini-reference
  instead of one compressed line - see components/ui/FlipCard.jsx.

  Two rules held throughout:
    - every card names the CONDITION or the exception, because that is what
      separates a Level 3 answer from a Level 5 one;
    - no card asserts a relationship without saying WHY it holds, since a
      card you can only parrot is a card that fails you under pressure.
*/

const c = (topic, front, back) => ({ topic, front, back })

export const ECON_FIRM_CARDS = [
  /* ============================================ 3.1.1 SIZES AND TYPES */

  c(
    'Business Growth',
    'Why do some firms deliberately stay small?',
    'Five standard reasons:\n• SIZE OF THE MARKET - a niche or local market cannot support a large firm (a village bakery, a specialist repairer).\n• ACCESS TO FINANCE - small firms struggle to raise capital without collateral or a track record.\n• OWNER OBJECTIVES - the owner may prefer control, independence or work–life balance to growth; satisficing rather than maximising.\n• DISECONOMIES OF SCALE - where minimum efficient scale is low, being large brings no cost advantage.\n• REGULATION - competition authorities can block growth by merger, so the route to scale is closed.',
  ),
  c(
    'Business Growth',
    'What is the principal–agent problem, and why does it matter for firm behaviour?',
    'In large firms ownership is divorced from control. Owners (PRINCIPALS) want profit; managers (AGENTS) may want revenue, growth, status or an easy life.\n\nAsymmetric information is what makes it bite: owners cannot fully observe what managers do, so they cannot simply instruct profit maximisation.\n\nConsequence: the firm may deviate from MC = MR - pursuing growth or revenue instead - which is exactly why the alternative business objectives exist as models.\n\nCounters: share options and profit-related pay align incentives; non-executive directors and disclosure reduce the information gap; the threat of a HOSTILE TAKEOVER disciplines managers, since a firm not maximising profit has a share price below its potential.',
  ),
  c(
    'Business Growth',
    'Public sector vs private sector organisations',
    'PUBLIC SECTOR\n• Owned and controlled by the state.\n• Funded by taxation and government borrowing.\n• Objective is typically a public service obligation - universal provision, not profit.\n• Examples: the NHS, the BBC, local councils.\n\nPRIVATE SECTOR\n• Owned by individuals, families or shareholders.\n• Funded by sales revenue, retained profit, borrowing, share issues.\n• Objective is typically profit, though it varies by owner.\n• Examples: sole traders, partnerships, private and public limited companies.',
  ),
  c(
    'Business Growth',
    'Profit vs not-for-profit organisations',
    'PROFIT ORGANISATIONS aim to maximise or satisfice profit for owners. A surplus is distributed to owners or retained for growth.\n\nNOT-FOR-PROFIT organisations pursue a stated mission - charitable, social or environmental. Any surplus is reinvested in the mission; nobody takes it as personal income. Examples: registered charities, housing associations, most universities.\n\nEXAM TRAP: "not-for-profit" describes what happens to the SURPLUS, not whether one exists. A not-for-profit still needs revenue to exceed costs to survive.',
  ),

  /* ============================================ 3.1.2 BUSINESS GROWTH */

  c(
    'Business Growth',
    'Organic growth: methods, and the case for and against',
    'METHODS: new products (R&D), new markets (often overseas), changing the marketing mix, technology and e-commerce.\n\nFOR\n• Slower but safer than buying another firm.\n• Much cheaper - no takeover premium to pay.\n• Builds on existing strengths and known capabilities.\n• Easier to manage and finance; existing culture preserved.\n\nAGAINST\n• Slow, and owners may not be prepared to wait.\n• Depends on customer demand for the new product, which is uncertain.\n• A competitor can acquire scale much faster by merging, so organic growth may lose the race.',
  ),
  c(
    'Business Growth',
    'The four types of integration - definition and main motive',
    'HORIZONTAL - two firms at the SAME stage of the SAME industry.\nMotive: economies of scale, market share, reduced competition.\n\nVERTICAL BACKWARD - merging with a SUPPLIER.\nMotive: secure supply, control input costs, raise barriers to entry for rivals.\n\nVERTICAL FORWARD - merging with a DISTRIBUTOR or retailer.\nMotive: secure market access, control the customer relationship, capture the retail margin.\n\nCONGLOMERATE - firms in UNRELATED industries.\nMotive: diversification, spreading risk across markets.\n\nEXAM TRAP: to tell forward from backward, identify which firm is closer to the FINAL CONSUMER.',
  ),
  c(
    'Business Growth',
    'Merger vs takeover',
    'MERGER - two firms AGREE to join and a new company is created; shareholders share control. Example: British Airways and Iberia forming IAG.\n\nTAKEOVER (acquisition) - one firm buys over 50% of another\'s shares and takes control. A HOSTILE takeover is one the target\'s board opposes.',
  ),
  c(
    'Business Growth',
    'Why do most mergers fail to deliver the promised gains?',
    '• Culture clashes, integration costs and management distraction routinely destroy value.\n• DISECONOMIES of scale appear quickly - coordination and communication problems in a suddenly larger organisation.\n• The acquirer usually pays a PREMIUM above market value, so the gain must be very large to be worthwhile ("the winner\'s curse" in competitive bidding).\n• Competition authorities may block the deal or impose remedies such as forced divestment.\n• Conglomerates may lack expertise outside their core market - and shareholders can diversify more cheaply themselves by holding a portfolio.',
  ),

  /* ================================================= 3.1.3 DEMERGERS */

  c(
    'Demergers',
    'Why do firms demerge?',
    'Each reason is the mirror image of a reason for merging:\n• DISECONOMIES OF SCALE - the combined firm became too large to control and communicate within, so average costs rose.\n• LACK OF SYNERGY - the expected savings or cross-selling never materialised, so the parts are worth more separately.\n• FOCUS - management attention is scarce, and a conglomerate spreads it across unrelated businesses.\n• THE CONGLOMERATE DISCOUNT - markets value diversified groups below the sum of their parts, because investors can diversify their own portfolios more cheaply.\n• REGULATORY PRESSURE - a competition authority may require divestment.',
  ),
  c(
    'Demergers',
    'Impact of a demerger on each stakeholder group',
    'WORKERS - job losses where duplicated head-office functions are cut; greater clarity of purpose for those who remain.\n\nCONSUMERS - more competition if the parts now compete, but loss of any scale economies that were keeping prices down.\n\nSHAREHOLDERS - potential gain if the conglomerate discount is removed; loss if the split destroys real synergies.\n\nTHE FIRMS - sharper focus and clearer accountability, at the cost of scale and diversification of risk.\n\nEVALUATION: demerging destroys any economies of scale that WERE being achieved (shared distribution, purchasing power), and the transaction itself is expensive in fees and management time.',
  ),

  /* =========================================== 3.2 BUSINESS OBJECTIVES */

  c(
    'Business Objectives',
    'The three output rules every business objective question needs',
    'PROFIT MAXIMISATION → MC = MR\nREVENUE MAXIMISATION → MR = 0\nSALES VOLUME MAXIMISATION → AR = AC (the largest output still earning normal profit)\n\nOrdering: sales volume output is always the LARGEST and profit max the SMALLEST. So switching objective moves output along the AR curve in a predictable direction, and each objective gives a higher output and a LOWER price than the one before it.',
  ),
  c(
    'Business Objectives',
    'Why would a firm pursue revenue maximisation rather than profit?',
    'Baumol\'s theory. Managers\' pay and status are often linked to TURNOVER rather than profit, and high sales help raise external finance.\n\nOutput is where MR = 0 - beyond that point extra sales REDUCE total revenue.\n\nRoute back to profit: higher revenue raises the finance available for capital investment, lowering costs or raising quality in the long run.',
  ),
  c(
    'Business Objectives',
    'Why would a firm pursue sales volume maximisation?',
    'Output where AR = AC, so the firm earns only normal profit - the largest output before making a loss.\n\nMotives: managers gain career prestige; volume builds market share and economies of scale.\n\nRoute back to profit: scale and market power let the firm outcompete rivals and make its demand curve more INELASTIC later, so it can raise price in the long run.',
  ),
  c(
    'Business Objectives',
    'What is satisficing?',
    'Aiming for a SATISFACTORY rather than maximum level of profit - enough to keep shareholders and other stakeholders content - rather than optimising.\n\nWhy it happens: managers face conflicting stakeholder demands (owners, staff, customers, community) and limited information, so they settle for an acceptable outcome across all of them rather than maximising one.\n\nIt is a direct consequence of the principal–agent problem: an agent with an easier life to protect has little reason to push for the last unit of profit.',
  ),
  c(
    'Business Objectives',
    'Four criticisms of profit maximisation as a model',
    '• FIRMS RARELY OPERATE ON THE MARGIN - calculating MC and MR precisely is difficult, firms do not adjust output one unit at a time, and ceteris paribus never holds.\n• COST-PLUS PRICING - many firms simply add a percentage mark-up to average cost, a rule of thumb rather than an optimisation.\n• SATISFICING - a satisfactory profit that keeps stakeholders content may be the real target.\n• LONG RUN vs SHORT RUN - sacrificing profit now through low prices, R&D or CSR may raise long-run profit, so an apparent deviation may BE profit maximisation over a longer horizon.',
  ),

  /* ================================================= 3.3.1 REVENUE */

  c(
    'Revenue, Costs and Profit',
    'Total, average and marginal revenue - formulae and meaning',
    'TOTAL REVENUE (TR) = price × quantity. All income from sales.\n\nAVERAGE REVENUE (AR) = TR ÷ Q = price. AR *is* the demand curve facing the firm.\n\nMARGINAL REVENUE (MR) = ΔTR ÷ ΔQ. The revenue from selling one more unit.',
  ),
  c(
    'Revenue, Costs and Profit',
    'Why does MR lie below AR for a price maker, and how far below?',
    'To sell one more unit a price maker must cut price on ALL units, not just the extra one. The gain from the extra unit is partly offset by the revenue lost on every unit it was already selling.\n\nFor a straight-line demand curve MR has the SAME intercept and TWICE the slope, so it hits zero halfway along AR.\n\nWhere MR = 0, total revenue is at its MAXIMUM. Beyond that, extra sales reduce TR.\n\nCONDITION: this assumes ONE price to all customers. Under price discrimination the firm charges each group separately and MR is no longer half the slope of AR.',
  ),
  c(
    'Revenue, Costs and Profit',
    'How do the revenue curves differ between a price taker and a price maker?',
    'PRICE TAKER (perfect competition) - the firm can sell any quantity at the market price, so AR = MR = price, drawn as a HORIZONTAL line. TR rises in a straight line from the origin.\n\nPRICE MAKER (any other structure) - AR slopes DOWN and MR lies below it with twice the slope. TR is an arch, peaking where MR = 0.',
  ),
  c(
    'Revenue, Costs and Profit',
    'The link between PED and revenue',
    'Where AR is ELASTIC, MR is POSITIVE - a price cut raises total revenue.\nWhere AR is INELASTIC, MR is NEGATIVE - a price cut lowers total revenue.\nWhere PED = 1 (unit elastic), MR = 0 and TR is at its maximum.\n\nThis is why a firm facing inelastic demand raises price to raise revenue, and one facing elastic demand cuts it.',
  ),

  /* =================================================== 3.3.2 COSTS */

  c(
    'Revenue, Costs and Profit',
    'Short run vs long run - the defining distinction',
    'SHORT RUN - the period in which at least ONE factor of production is FIXED. Output can only be varied by changing the variable factors.\n\nLONG RUN - the period in which ALL factors are variable, so the firm can change its SCALE of production.\n\nThis is not a fixed number of months: it differs by industry, depending on how long it takes to vary the fixed factor.',
  ),
  c(
    'Revenue, Costs and Profit',
    'The seven cost measures - formula and behaviour',
    'TFC - costs that do not vary with output. CONSTANT (rent, insurance, loan interest).\nTVC - costs that vary with output. RISES with output (raw materials, piece-rate wages, energy).\nTC = TFC + TVC. Rises with output but starts AT TFC, not at zero.\nAFC = TFC ÷ Q. FALLS continuously - "spreading the fixed costs".\nAVC = TVC ÷ Q. U-shaped.\nAC = AFC + AVC. U-shaped; the gap between AC and AVC narrows as AFC falls.\nMC = ΔTC ÷ ΔQ. U-shaped; cuts AVC and AC at their MINIMUM points.',
  ),
  c(
    'Revenue, Costs and Profit',
    'The law of diminishing marginal returns - statement and consequence',
    'STATEMENT: in the SHORT RUN, as more of a variable factor is added to a FIXED factor, marginal product eventually falls. With a fixed factory, extra workers eventually get in each other\'s way and have less capital each to work with.\n\nCONSEQUENCE: falling marginal product means RISING marginal cost. This is exactly why MC turns upward, and therefore why AVC and AC are U-shaped.\n\nCONDITIONS: it is a SHORT-RUN law and depends on a factor being fixed. It assumes all units of the variable factor are equally productive and technology is constant.',
  ),
  c(
    'Revenue, Costs and Profit',
    'Diminishing marginal returns vs diseconomies of scale - the distinction examiners target',
    'DIMINISHING MARGINAL RETURNS is SHORT RUN and about adding a variable factor to a FIXED factor. It explains the shape of MC, AVC and AC.\n\nDISECONOMIES OF SCALE is LONG RUN and about the WHOLE FIRM being too big to coordinate. It explains the upward-sloping part of LRAC.\n\nQuestions are set specifically to catch students who use one term for the other.',
  ),
  c(
    'Revenue, Costs and Profit',
    'Why does MC cut AC at its minimum point?',
    'It is an arithmetic necessity, not a coincidence.\n\nWhen MC is BELOW AC, the extra unit costs less than the current average, so it PULLS THE AVERAGE DOWN.\nWhen MC is ABOVE AC, the extra unit costs more than the current average, so it PULLS THE AVERAGE UP.\n\nThe average is therefore at its lowest exactly where MC crosses it. The same logic applies to AVC.',
  ),

  /* ======================================== 3.3.3 ECONOMIES OF SCALE */

  c(
    'Economies and Diseconomies of Scale',
    'The six internal economies of scale',
    'TECHNICAL - larger plant spreads the fixed cost of machinery over more units; some processes are only viable at scale.\nPURCHASING - bulk buying secures discounts, because the supplier saves transaction costs and secures volume.\nMANAGERIAL - specialist managers can be employed and their cost spread over more output.\nFINANCIAL - larger firms borrow more cheaply, being seen as lower risk and able to access bond markets.\nMARKETING - the cost of a campaign is spread over far more units.\nRISK-BEARING - a diversified product range means one failure does not sink the firm.',
  ),
  c(
    'Economies and Diseconomies of Scale',
    'The three diseconomies of scale',
    'CONTROL - monitoring becomes harder as the firm grows, so waste and shirking rise, and layers of management are added to police it.\nCOMMUNICATION - messages pass through more layers, so information is distorted and decisions slow.\nMOTIVATION - workers feel like a number rather than a contributor, so effort and retention fall.\n\nTogether these produce the RISING section of the long-run average cost curve.',
  ),
  c(
    'Economies and Diseconomies of Scale',
    'Internal vs external economies of scale',
    'INTERNAL economies arise from the growth of the FIRM ITSELF - technical, purchasing, managerial, financial, marketing, risk-bearing. They shift the firm ALONG its LRAC curve.\n\nEXTERNAL economies arise from the growth of the whole INDUSTRY, and benefit every firm in it - a skilled local labour pool, specialist suppliers clustering nearby, shared infrastructure, university research links. They shift the entire LRAC curve DOWNWARD.\n\nThat is why a small firm inside a cluster can achieve costs an isolated large firm could not.',
  ),
  c(
    'Economies and Diseconomies of Scale',
    'Minimum efficient scale - definition and why it determines market structure',
    'MES is the LOWEST output at which long-run average cost is minimised.\n\nIf MES is LARGE relative to market demand, only a few firms can operate efficiently - electricity generation, aircraft manufacture - so the industry is naturally concentrated (natural monopoly or tight oligopoly).\n\nIf MES is SMALL, thousands of small firms can each be efficient - hairdressing, plumbing - so the market approaches perfect competition.\n\nStructure is therefore not arbitrary: it follows from the TECHNOLOGY of the industry. Note that technology can change MES quickly - digital distribution collapsed it for publishing and music.',
  ),
  c(
    'Economies and Diseconomies of Scale',
    'What is the LRAC envelope, and what does the tangency point tell you?',
    'Each SRAC curve is ONE PLANT SIZE. In the long run the firm can choose any plant, so LRAC is the ENVELOPE of the lowest attainable cost - it touches each SRAC once and lies below it everywhere else.\n\nCritically, BELOW minimum efficient scale the tangency falls on the FALLING part of each SRAC, to the LEFT of that plant\'s own minimum. So a firm still enjoying economies of scale deliberately runs each plant below its individual optimum, because moving to a bigger plant is cheaper than filling the current one.',
  ),

  /* ================================================ 3.3.4 PROFIT */

  c(
    'Revenue, Costs and Profit',
    'Normal profit, supernormal profit and loss',
    'NORMAL PROFIT - the minimum return needed to keep the firm in the industry. It is a COST, and is included in average cost. Occurs where AR = AC.\n\nSUPERNORMAL (abnormal) PROFIT - any profit above normal profit, where AR > AC. Attracts entry where barriers are low.\n\nLOSS - AR < AC. The firm should still produce in the SHORT run provided AR ≥ AVC.',
  ),
  c(
    'Revenue, Costs and Profit',
    'Why does MC = MR maximise profit?',
    'Profit is TR − TC, maximised where the GAP between them is largest - which is where the two curves have the same SLOPE.\n\n• If MC < MR, the next unit adds more to revenue than to cost, so producing it RAISES profit → expand.\n• If MC > MR, the next unit costs more than it earns, so producing it LOWERS profit → cut back.\n• At MC = MR no unit is left that would improve profit either way - hence a maximum.\n\nIn calculus: profit is maximised where d(profit)/dQ = 0, i.e. MR − MC = 0.',
  ),
  c(
    'Revenue, Costs and Profit',
    'The short-run shutdown rule',
    'A loss-making firm should KEEP PRODUCING in the short run if price covers average VARIABLE cost.\n\nWhy: fixed costs must be paid whether or not the firm produces, so they are irrelevant to the decision. If AR > AVC, every unit sold makes a CONTRIBUTION towards fixed costs, so the loss is smaller than it would be by shutting.\n\nIf AR < AVC, the firm loses money on every unit and should shut immediately.\n\nIn the LONG RUN all costs are variable, so the firm must cover AC or exit.\n\nEVALUATION: shutting and restarting has its own costs - redundancy, losing skilled staff, losing market position - which may justify producing below AVC temporarily if the downturn is expected to be brief.',
  ),
  c(
    'Revenue, Costs and Profit',
    'WORKED: a firm sells 100 units at £8. AVC is £6, AFC is £3. Produce or shut down?',
    'AC = AVC + AFC = £6 + £3 = £9.\nLoss per unit = AR − AC = £8 − £9 = −£1, so a £100 total loss.\n\nBUT AR (£8) > AVC (£6), so each unit contributes £2 towards fixed costs - £200 in total.\n\nShutting down would mean losing ALL £300 of fixed costs (£3 × 100).\nProducing loses £100; shutting loses £300.\n\nANSWER: keep producing in the short run.',
  ),

  /* ============================================== 3.4.1 EFFICIENCY */

  c(
    'Perfect Competition',
    'The four efficiency criteria - definitions',
    'ALLOCATIVE EFFICIENCY - resources produce what consumers value. Occurs where P = MC: price paid equals the cost of the last unit, so no reallocation could make anyone better off without making someone worse off.\n\nPRODUCTIVE EFFICIENCY - output produced at the LOWEST possible average cost, at the minimum of AC. Economy-wide it means producing ON the PPF.\n\nDYNAMIC EFFICIENCY - efficiency over TIME: resources allocated to R&D and innovation, lowering costs and improving products in future periods.\n\nX-INEFFICIENCY - a firm operating ABOVE its lowest possible cost curve because the absence of competitive pressure removes the discipline to control costs: management slack, overstaffing, organisational waste.',
  ),
  c(
    'Perfect Competition',
    'Efficiency across the four market structures',
    'PERFECT COMPETITION - allocative ✓ (long run), productive ✓ (long run), dynamic LOW (no profit to fund R&D), X-inefficiency LOW.\n\nMONOPOLISTIC COMPETITION - allocative ✗ (P > MC), productive ✗ (excess capacity), dynamic MODERATE, X-inefficiency LOW.\n\nOLIGOPOLY - allocative ✗, productive not guaranteed, dynamic can be HIGH (supernormal profit funds R&D in pharma, aerospace, telecoms), X-inefficiency MODERATE.\n\nMONOPOLY - allocative ✗ (biggest P–MC gap), productive ✗, dynamic DISPUTED (Schumpeter), X-inefficiency HIGH.',
  ),

  /* ======================================= 3.4.2 PERFECT COMPETITION */

  c(
    'Perfect Competition',
    'The five assumptions of perfect competition and what each produces',
    'MANY BUYERS AND SELLERS → no single firm can influence price; each is a price TAKER.\nHOMOGENEOUS PRODUCT → no brand loyalty, so any price above the market rate loses ALL customers.\nPERFECT INFORMATION → buyers know every price, so no firm can charge more.\nFREEDOM OF ENTRY AND EXIT → supernormal profit attracts entrants until it is competed away.\nNO EXTERNALITIES → private and social costs coincide, so the outcome is allocatively efficient.',
  ),
  c(
    'Perfect Competition',
    'How does perfect competition move from short run to long run?',
    'SHORT RUN: the firm can earn supernormal profit where AR > AC at the profit-maximising output MC = MR.\n\nThat profit is a SIGNAL, and free entry is the mechanism that responds: new firms enter → industry supply shifts right → market price falls → each firm\'s horizontal AR line drops → until AR is TANGENT to the minimum of AC.\n\nLONG RUN: only normal profit remains, so entry stops. Because the firm produces at minimum AC with P = MC, it is both productively AND allocatively efficient.\n\n(Losses work in reverse: firms exit, supply falls, price rises back to normal profit.)',
  ),
  c(
    'Perfect Competition',
    'If perfect competition is efficient, why is it not simply the "best" structure?',
    'It wins on the two STATIC criteria by construction, but:\n\n• Zero long-run economic profit means nothing is left to fund research - the model has no mechanism for the product improvement consumers also value, so DYNAMIC efficiency is low.\n• It assumes away the ECONOMIES OF SCALE that make large firms cheaper, so a perfectly competitive industry may have HIGHER costs than a concentrated one.\n• Schumpeter\'s counter: "creative destruction" needs the prospect of temporary monopoly profit to reward innovation.\n\nJUDGEMENT: the trade-off depends on the INDUSTRY - dynamic efficiency matters enormously in pharmaceuticals, far less in a mature market like bread.',
  ),

  /* ================================ 3.4.3 MONOPOLISTIC COMPETITION */

  c(
    'Monopolistic Competition',
    'What separates monopolistic competition from perfect competition?',
    'It relaxes exactly ONE assumption: the product is DIFFERENTIATED.\n\nThat single change gives each firm a DOWNWARD-SLOPING demand curve, because some customers will pay a little more for its particular version. Everything else follows from that.\n\nOther features: many firms, low barriers to entry, and normal profit in the long run - all shared with perfect competition.',
  ),
  c(
    'Monopolistic Competition',
    'Why does monopolistic competition produce excess capacity in the long run?',
    'Free entry still competes supernormal profit away, so AR ends up TANGENT to AC - same as perfect competition.\n\nBUT because AR now slopes DOWN, the tangency occurs on the FALLING part of AC, to the LEFT of minimum AC.\n\nSo the firm has spare capacity it could use to lower unit costs but does not - the EXCESS CAPACITY THEOREM. And because P > MC it is also allocatively inefficient.',
  ),
  c(
    'Monopolistic Competition',
    'Is the inefficiency of monopolistic competition a real welfare cost?',
    'THE COST IS REAL: restaurants, hairdressers and corner shops all operate below the output that would minimise their costs, and P > MC means some consumers who value the good above its production cost do not buy it.\n\nAGAINST THAT: consumers gain VARIETY, and variety has value - a high street with one standardised restaurant would be productively efficient and worse.\n\nAlso, the mark-up is SMALL because demand is elastic (close substitutes are one door away), so the deadweight loss is much smaller than under monopoly.\n\nJUDGEMENT: a real but modest efficiency loss, and the price paid for choice.',
  ),

  /* ================================================ 3.4.4 OLIGOPOLY */

  c(
    'Oligopoly',
    'The four characteristics of oligopoly',
    'HIGH BARRIERS TO ENTRY AND EXIT - economies of scale, brand loyalty, sunk costs, legal barriers.\nHIGH CONCENTRATION RATIO - e.g. a five-firm ratio above 60%.\nINTERDEPENDENCE - each firm\'s best action depends on what rivals do. This is the DEFINING feature, and why oligopoly needs game theory rather than a single diagram.\nPRODUCT DIFFERENTIATION - though oligopoly products may also be identical (petrol).',
  ),
  c(
    'Oligopoly',
    'How do you calculate an n-firm concentration ratio?',
    'Add the market shares of the LARGEST n firms.\n\nWORKED: shares are A 28%, B 24%, C 18%, D 12%, E 10%, F 8%.\n3-firm ratio = 28 + 24 + 18 = 70%.\n5-firm ratio = 28 + 24 + 18 + 12 + 10 = 92%.\n\nA 3-firm ratio of 70% indicates a highly concentrated, oligopolistic market: three firms dominate outcomes even though six firms technically compete.\n\nEXAM TRAP: rank shares largest-to-smallest FIRST, and state which n you are using.',
  ),
  c(
    'Oligopoly',
    'The kinked demand curve - why are oligopoly prices sticky?',
    'Each firm assumes rivals will MATCH A PRICE CUT but NOT A PRICE RISE.\n\n• Raise price → rivals do not follow → the firm loses many customers → demand is ELASTIC above the current price.\n• Cut price → rivals match to protect share → the firm gains few extra customers → demand is INELASTIC below.\n\nThe demand curve therefore KINKS at the current price, which creates a vertical DISCONTINUITY in MR. Marginal cost can shift anywhere within that gap without changing the profit-maximising output - so price stays put.\n\nEVALUATION: it explains why prices are stable but not how the original price was SET - the model has no theory of price determination. Empirically oligopoly prices are not especially rigid; price wars are common in petrol and supermarkets.',
  ),
  c(
    'Oligopoly',
    'The prisoner\'s dilemma - why do cartels form AND break down?',
    'Each firm has a DOMINANT STRATEGY to cheat, whatever the other does.\n\nTwo firms colluding on a high price both earn well - the joint-best outcome. But if one cheats by undercutting while the other holds price, the cheat captures the market and earns more. Since that is true for BOTH, and each knows it, both cheat - reaching a NASH EQUILIBRIUM that is worse for both than colluding.\n\nThat is why cartels form (the collusive outcome is genuinely better) and why they collapse (nobody can trust the other not to defect).\n\nEVALUATION: REPEATED games change the result - with an indefinite series of interactions, firms sustain collusion through the threat of future retaliation (tit-for-tat).',
  ),
  c(
    'Oligopoly',
    'Overt vs tacit collusion',
    'OVERT COLLUSION (a cartel) - a FORMAL agreement to fix price or output. ILLEGAL in the UK and EU. OPEC is the best-known example because it operates between states rather than firms.\n\nTACIT COLLUSION - no agreement, but firms follow each other\'s pricing, often through PRICE LEADERSHIP where a dominant firm sets the price and others follow. Hard to prove and therefore hard to prosecute.\n\nEXAM TIP: always specify WHICH you mean - the distinction is frequently tested and often confused.',
  ),
  c(
    'Oligopoly',
    'When is collusion most likely to succeed?',
    '• FEW FIRMS - coordination is simpler and each has more to lose.\n• SIMILAR COSTS AND PRODUCTS - a common price suits everyone.\n• HIGH BARRIERS TO ENTRY - the profit cannot be competed away by newcomers.\n• TRANSPARENT PRICES - cheating is spotted quickly and can be punished.\n• REPEATED INTERACTION over a long horizon.\n\nAgainst it: LENIENCY programmes give the first firm to confess immunity, which deliberately re-creates the prisoner\'s dilemma INSIDE the cartel. The CMA can fine up to 10% of global turnover and disqualify or imprison directors.',
  ),
  c(
    'Oligopoly',
    'The three types of price competition in oligopoly',
    'PRICE WAR - sustained mutual undercutting. Good for consumers short-term, but erodes everyone\'s margins with little change in relative market share.\n\nPREDATORY PRICING - pricing BELOW COST to force a rival out or deter entry, then raising price again. ILLEGAL as abuse of a dominant position, but hard to prove: a firm can claim the low price was genuine competition.\n\nLIMIT PRICING - setting price BELOW the profit-maximising level but ABOVE its own costs, just under a potential entrant\'s average cost, so entry is unprofitable. Legal, and sacrifices short-run profit to keep rivals out.\n\nKEY DISTINCTION: predatory goes below COST; limit pricing stays above it.',
  ),
  c(
    'Oligopoly',
    'Why do oligopolists prefer non-price competition, and does it help consumers?',
    'Because price cuts get matched (gaining nothing) and price rises lose customers, firms compete instead on ADVERTISING, BRANDING, LOYALTY SCHEMES, QUALITY, CUSTOMER SERVICE and PRODUCT INNOVATION.\n\nCONSUMERS GAIN: better products, more choice, higher quality.\nCONSUMERS LOSE: advertising is a cost that raises prices and may add no real value; brand loyalty raises barriers to entry, entrenching the incumbents.',
  ),

  /* ================================================= 3.4.5 MONOPOLY */

  c(
    'Monopoly',
    'Pure vs legal monopoly, and the sources of monopoly power',
    'A PURE monopoly is a single seller with 100% of the market. A LEGAL monopoly is any firm with 25% or more - the threshold at which UK competition authorities may investigate.\n\nSOURCES:\n• LEGAL - patents, copyright, licences, franchises.\n• ECONOMIES OF SCALE - a large incumbent has much lower AC than any entrant could achieve. The strongest natural barrier.\n• HIGH SUNK COSTS - costs unrecoverable on exit deter entry, since failed entry is very expensive.\n• CONTROL OF ESSENTIAL RESOURCES - owning the raw material or distribution network.\n• BRAND LOYALTY AND ADVERTISING.\n• NETWORK EFFECTS - the product is more valuable the more people use it.\n• LIMIT AND PREDATORY PRICING.',
  ),
  c(
    'Monopoly',
    'The monopoly outcome - and why it is inefficient',
    'The monopolist faces the WHOLE market demand curve, so AR slopes down and MR lies below it. Profit maximisation at MC = MR gives output Qm, and price is read UP to the AR curve at Pm.\n\n• Because Pm > MC the outcome is ALLOCATIVELY INEFFICIENT - consumers value the marginal unit above its cost. The deadweight welfare loss is the triangle between AR and MC from Qm out to the competitive output Qc.\n• Output is below minimum AC, so it is also PRODUCTIVELY INEFFICIENT.\n• Because barriers prevent entry, supernormal profit PERSISTS into the long run.',
  ),
  c(
    'Monopoly',
    'The case FOR monopoly (evaluation)',
    '• ECONOMIES OF SCALE may be so large that the monopolist\'s price is still LOWER than a competitive industry of small firms could manage - the diagram assumes identical cost curves, and that is precisely the assumption that fails.\n• DYNAMIC EFFICIENCY - supernormal profit funds R&D (Schumpeter). Secure profit rewards the boldest innovation.\n• CONTESTABILITY matters more than structure: a monopolist facing a credible threat of entry prices near the competitive level.\n• NATURAL MONOPOLY - where one firm is genuinely the efficient outcome.\n\nCounter: supernormal profit does NOT automatically become R&D - it can equally become X-inefficiency, executive pay or dividends.',
  ),
  c(
    'Monopoly',
    'Third-degree price discrimination - the three necessary conditions',
    'DEFINITION: charging different prices to different consumers for the same good, where the price difference does NOT reflect a cost difference.\n\nALL THREE must hold:\n1. PRICE-SETTING POWER - a price taker cannot discriminate.\n2. SEPARABLE GROUPS with DIFFERENT elasticities of demand.\n3. NO RESALE - otherwise the low-price group resells to the high-price group and destroys the scheme.\n\nMECHANISM: the INELASTIC group is charged MORE, the ELASTIC group LESS; each market produces where its OWN MR = MC.',
  ),
  c(
    'Monopoly',
    'The three degrees of price discrimination',
    'FIRST DEGREE - each consumer charged their exact maximum willingness to pay; ALL consumer surplus extracted. Example: individually negotiated prices, algorithmic personalised pricing.\n\nSECOND DEGREE - price varies with QUANTITY or TIMING purchased. Example: bulk discounts, off-peak energy tariffs.\n\nTHIRD DEGREE - different prices to SEPARABLE GROUPS with different elasticities. Example: student and senior rail fares, peak and off-peak travel.\n\n(The specification requires third degree in diagrammatic detail.)',
  ),
  c(
    'Monopoly',
    'Is price discrimination bad for consumers?',
    'NOT AUTOMATICALLY.\n\nAGAINST consumers: it converts consumer surplus into producer surplus, raising profit above the single-price level. It is REGRESSIVE where the inelastic group is the one with least choice - commuters who must travel at peak times.\n\nFOR consumers: the extra profit may fund investment, cross-subsidise loss-making services, or allow provision to the ELASTIC group who would otherwise be priced out entirely. It can raise TOTAL OUTPUT above the single-price level, improving allocative efficiency.\n\nJUDGEMENT: the elastic group typically gains and the inelastic group loses - so the honest answer is about WHO gains, not whether it is good or bad overall.',
  ),
  c(
    'Monopoly',
    'Natural monopoly and the regulator\'s dilemma',
    'A NATURAL MONOPOLY exists where enormous fixed costs mean average cost is STILL FALLING where LRAC meets demand - water pipes, the rail network, electricity transmission. Duplicating the network would raise average cost for everyone.\n\nBecause AC is still falling, MC lies BELOW AC throughout.\n\nTHE DILEMMA: forcing P = MC (allocative efficiency) would price BELOW AC and make a LOSS, requiring a permanent subsidy. Regulators therefore usually set P = AC (normal profit) or use RPI−X price capping.\n\nThis is the strongest case AGAINST breaking up a monopoly. The usual answer is structural separation: regulate the network, allow competition in retail supply on top of it.',
  ),
  c(
    'Monopoly',
    'Monopoly\'s effect on EMPLOYEES',
    'Cuts both ways, which is why it is a reliable evaluation point.\n\nBENEFIT: secure supernormal profit can fund higher wages, better training and greater job security than a firm on normal profit could offer.\n\nCOST: with no competitive pressure there is less need to keep employees productive or satisfied, and X-inefficiency can show up as bloated management rather than higher frontline pay. A monopoly is often ALSO a monopsony in its local labour market, in which case it holds wages BELOW the competitive level while charging consumers above it.\n\nWhich dominates depends on whether the profit is shared with the workforce - a question of bargaining power and union presence.',
  ),
  c(
    'Monopoly',
    'Monopoly\'s effect on SUPPLIERS',
    'The upstream mirror of its selling power.\n\nBENEFIT: a large monopolist negotiates lower input prices through purchasing volume, which can lower its costs and, if passed on, consumer prices too. Long-term security of demand also lets suppliers plan investment with confidence.\n\nCOST: where the monopolist is also a dominant BUYER it can squeeze suppliers\' margins to the point where they cannot invest or survive - monopsony power applied to a product market.\n\nThe outcome depends on whether suppliers have ALTERNATIVE BUYERS. That asymmetry is exactly what competition authorities look for when investigating abuse of a dominant position.',
  ),

  /* ================================================ 3.4.6 MONOPSONY */

  c(
    'Wage Determination',
    'Monopsony - why does MCL lie above the supply curve?',
    'A monopsony is a single or dominant BUYER. Because it faces the whole upward-sloping market supply curve, hiring one more worker means paying the higher wage to EVERY worker already employed - not just the new one.\n\nSo the marginal cost of labour (MCL) lies ABOVE the supply curve (which is the average cost of labour, ACL).\n\nThe monopsonist hires where MCL = MRP, then pays only the wage read off the SUPPLY curve at that quantity. Both the wage AND employment are therefore BELOW the competitive level - it restricts hiring to hold the wage down.',
  ),
  c(
    'Wage Determination',
    'Why can a minimum wage RAISE employment under monopsony?',
    'A minimum wage set between the monopsony wage and the competitive wage makes the marginal cost of labour CONSTANT at that wage, removing the wedge between MCL and supply.\n\nThe firm then hires where the minimum wage = MRP, which is a HIGHER quantity than before. So pay rises and employment rises simultaneously - the opposite of the competitive prediction.\n\nCONDITIONS: set it too high, above the competitive wage, and the standard result returns (employment falls). Monopsony power is strongest in isolated local labour markets and occupations with few employers - care homes, some public services - and weak in cities with many employers.\n\nThis is why the empirical evidence on minimum wages is mixed rather than uniformly negative.',
  ),
  c(
    'Wage Determination',
    'Costs and benefits of monopsony to each group',
    'THE FIRM - lower input or wage costs, so higher profit.\nCONSUMERS - may gain if the lower costs are passed on as lower prices.\nEMPLOYEES - lose: both wages and employment are below the competitive level.\nSUPPLIERS - lose: margins squeezed, and quantity traded falls below the efficient level.\n\nStandard UK examples: supermarkets over farmers, the NHS over nurses.',
  ),

  /* ============================================ 3.4.7 CONTESTABILITY */

  c(
    'Contestability',
    'What is a contestable market, and why does structure not determine conduct?',
    'A market in which entry is free and exit is COSTLESS, so the THREAT of entry disciplines incumbent behaviour regardless of how many firms are currently in it.\n\nA monopolist in a perfectly contestable market cannot charge a monopoly price, because doing so invites HIT-AND-RUN ENTRY: a rival enters, undercuts, takes the profit and leaves before the incumbent can respond.\n\nAnticipating this, the incumbent sets price at normal-profit level with NO competitor present. So conduct is determined by barriers, not by the number of firms.',
  ),
  c(
    'Contestability',
    'Why are SUNK COSTS the key variable in contestability?',
    'Sunk costs are the costs of entry that CANNOT be recovered on exit.\n\nIf an entrant can lease aircraft and hand them back, entry is cheap to REVERSE, so the market is contestable - which is why airline routes are the classic example.\n\nIf entry requires a bespoke chemical plant with no alternative use, the risk of entry is enormous, and the market is NOT contestable however low the formal barriers are.\n\nSo contestability is about the reversibility of entry, not its price.',
  ),
  c(
    'Contestability',
    'How do incumbents deliberately reduce contestability?',
    '• LIMIT PRICING - setting price below the level a new entrant could sustain, so entry is unprofitable while the incumbent still earns some profit.\n• PREDATORY PRICING - pricing below cost to force an entrant out, then raising price again. Illegal, but hard to prove because it looks like competition.\n• BRAND LOYALTY AND ADVERTISING - creating a sunk cost the entrant must match before it can sell anything.\n• LEGAL BARRIERS - patents, licences and regulation are entry costs the incumbent has already paid.',
  ),
  c(
    'Contestability',
    'Evaluating contestability theory',
    '• Perfect contestability is as unrealistic as perfect competition: SOME sunk cost always exists, if only the management time of entering.\n• Hit-and-run entry requires that the incumbent cannot cut price quickly - in practice they usually can. Airlines respond to a new route within days.\n• Its real value is as a POLICY GUIDE: regulators should focus on removing sunk costs and barriers rather than breaking up firms, because a concentrated but contestable market may behave competitively.\n• It does not replace structural analysis - oligopolistic INTERDEPENDENCE and its pricing behaviour are not captured by the model at all.',
  ),

  /* ==================================== 3.6 GOVERNMENT INTERVENTION */

  c(
    'Government Intervention and Equity',
    'The CMA\'s four competition policy tools',
    'MERGER CONTROL - investigates mergers that may substantially lessen competition; can block them or require divestment.\n\nCARTEL ENFORCEMENT - fines up to 10% of global turnover, director disqualification, criminal prosecution. LENIENCY gives the first firm to confess immunity.\n\nMARKET INVESTIGATIONS - examines whole markets and can impose remedies, as in energy, banking and funerals.\n\nABUSE OF DOMINANCE - prohibits predatory pricing, refusal to supply and exclusive contracts by dominant firms.',
  ),
  c(
    'Government Intervention and Equity',
    'The four ways of regulating a natural monopoly, and the problem with each',
    'RPI − X PRICE CAPPING - prices may rise by inflation minus an efficiency factor X, forcing real price falls.\nPROBLEM: setting X requires knowing the firm\'s efficiency potential, which only the firm knows. Too tight and it cannot invest; too loose and consumers gain nothing.\n\nRATE OF RETURN REGULATION - caps profit as a percentage of capital employed.\nPROBLEM: perverse incentive to OVER-INVEST in capital to raise the allowed profit.\n\nQUALITY STANDARDS - minimum service levels enforced by the regulator.\nPROBLEM: costly to monitor; firms meet the letter and not the spirit.\n\nYARDSTICK COMPETITION - compare regional monopolies and penalise laggards.\nPROBLEM: only works where genuinely comparable firms exist.',
  ),
  c(
    'Government Intervention and Equity',
    'Promoting competition beyond merger control',
    'PROMOTION OF SMALL BUSINESS - grants, start-up loans and simplified regulation lower the barriers protecting incumbents, making markets contestable from below.\n\nDEREGULATION - removing licensing and entry rules that mainly protect established firms.\n\nCOMPETITIVE TENDERING - government contracts awarded by open bidding rather than automatically to an incumbent, forcing even a monopoly supplier to bid competitively.\n\nDISTINCTION: privatisation transfers OWNERSHIP to the private sector; competitive tendering keeps the service publicly commissioned but opens its DELIVERY to bidders. A council can tender out bin collection without selling the council.',
  ),
  c(
    'Government Intervention and Equity',
    'Why might competition policy fail? (Limits to intervention)',
    '• INVESTIGATIONS ARE SLOW AND EXPENSIVE, so harm continues while they run.\n• INFORMATION ASYMMETRY - the firm knows its costs and the regulator does not, so caps cannot be set precisely.\n• BLOCKING A MERGER may prevent genuine economies of scale, raising costs and prices.\n• REGULATORY CAPTURE - staff move between regulator and industry, and the regulator depends on the industry for information, so enforcement blunts over time.\n• GLOBAL FIRMS may sit outside effective national jurisdiction.\n\nCounterweight: much of the value is DETERRENCE - conduct that never happens because of the threat of investigation, which never shows up in enforcement statistics.',
  ),
  c(
    'Government Intervention and Equity',
    'How does government protect suppliers and employees from monopsony power?',
    '• STATUTORY CODES OF PRACTICE - the Groceries Supply Code of Practice, policed by the Groceries Code Adjudicator, restricts how supermarkets treat food suppliers (banning retrospective price cuts, for example).\n• MINIMUM WAGE - counters monopsony power over low-paid workers directly, and can raise both pay and employment.\n• SECTOR REGULATORS - can require minimum notice periods, fair contract terms, or independent arbitration.\n\nLIMIT: these work only where compliance can be observed. A supplier who complains risks being dropped by their only major buyer, so protection depends on genuine anonymity and enforcement, not just the rule existing.',
  ),
  c(
    'Government Intervention and Equity',
    'Nationalisation vs privatisation - the arguments',
    'NATIONALISATION - FOR\n• Natural monopoly avoids wasteful duplication of networks.\n• Externalities and social objectives can be pursued directly.\n• Avoids private monopoly exploiting consumers.\n• Can guarantee universal service in unprofitable areas.\n\nPRIVATISATION - FOR\n• The profit motive drives efficiency and cost reduction.\n• Removes political interference from investment decisions.\n• Raises revenue for government and widens share ownership.\n• Competition where possible improves choice and quality.',
  ),
]
