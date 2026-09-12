/*
  Which diagram a single question is actually about.

  A chapter often carries several diagrams. Handing every question the
  chapter's FIRST one was wrong as soon as that was true: a price-
  discrimination question in the Monopoly chapter got the plain monopoly
  graph, and a PES question got whichever diagram happened to be listed
  first. These patterns let an item claim the diagram it is really about.

  Word boundaries matter here. Several of the keys are short abbreviations -
  PES, PED, MSC, MPC, VAT, MRP - and unanchored they match inside ordinary
  words, so every one is written with \b on both sides.

  Anything matching nothing falls back to the chapter's first diagram,
  which remains the right default.
*/
export const DIAGRAM_KEYWORDS = {
  // ---- Theme 1: markets and market failure
  'pes-elasticity': /elasticity of supply|\bPES\b|price elastic\w*.{0,24}supply/i,
  elasticity: /\bPED\b|\bXED\b|\bYED\b|elasticity of demand|price elastic\w*.{0,24}demand/i,
  'consumer-producer-surplus': /consumer surplus|producer surplus|welfare gain/i,
  'public-goods': /public good|free rider|non-excludable|non-rival|missing market/i,
  'asymmetric-information':
    /asymmetric|information gap|imperfect information|merit good|demerit good|moral hazard|adverse selection/i,
  'buffer-stock': /buffer stock/i,
  'tradable-permits': /\bpermits?\b|cap and trade|carbon trading/i,
  'indirect-tax': /indirect tax|specific tax|ad valorem|\bVAT\b|carbon tax|sugar tax/i,
  subsidy: /subsid/i,
  'minimum-price': /minimum price|price floor/i,
  'maximum-price': /maximum price|price ceiling|rent control/i,
  'negative-externality': /negative externality|external cost|\bMSC\b|\bMPC\b.{0,30}\bMSC\b|pollut/i,
  'positive-externality': /positive externality|external benefit|\bMSB\b|vaccinat/i,
  ppf: /production possibility|\bPPF\b|opportunity cost/i,
  'ppf-shift': /shift.{0,24}\bPPF\b|potential growth|outward shift/i,
  'demand-shift': /shift in demand|conditions of demand|demand curve.{0,24}shift/i,
  'supply-demand': /equilibrium|price mechanism|excess (supply|demand)|rationing|signalling/i,

  // ---- Theme 2: the macroeconomy
  'demand-pull': /demand-pull/i,
  'cost-push': /cost-push|stagflation/i,
  'ad-shift': /aggregate demand|\bAD\b|fiscal policy|monetary policy|interest rate|crowding out/i,
  'output-gap': /output gap|economic cycle|business cycle|spare capacity|trend growth|recession|boom/i,
  'multiplier-effect': /multiplier/i,
  'progressive-tax': /progressive|regressive|proportional tax|average tax rate|vertical equity/i,
  laffer: /laffer|tax rate.{0,30}revenue/i,
  phillips: /phillips|trade-?off.{0,30}(inflation|unemployment)|natural rate/i,
  'circular-flow': /circular flow|injection|withdrawal|leakage/i,
  'consumption-function': /consumption function|\bMPC\b|\bAPC\b|autonomous consumption|dissav|wealth effect/i,
  'lras-shift': /\bLRAS\b|supply-?side|potential (growth|output)|productive capacity/i,
  'ad-as': /\bAS\b curve|keynesian|\bSRAS\b|full capacity/i,

  // ---- Theme 3: business behaviour
  'revenue-curves': /total revenue|average revenue|revenue maximis|\bMR\b\s*=\s*0/i,
  'cost-curves': /average cost|marginal cost|\bAVC\b|\bAFC\b|diminishing (marginal )?returns/i,
  'perfect-competition-short-run': /short.run.{0,40}(profit|perfect competition)|supernormal profit/i,
  'perfect-competition': /perfect competition|price taker|long.run equilibrium/i,
  'monopolistic-competition': /monopolistic competition|excess capacity|differentiated/i,
  'game-theory': /game theory|prisoner|payoff|dominant strategy|collud|cartel|tacit/i,
  'kinked-demand': /kinked|price stick|price rigid/i,
  'price-discrimination': /price discriminat/i,
  'natural-monopoly': /natural monopoly|utilit|falling.{0,24}average cost/i,
  'limit-pricing': /limit pric|contestab|hit.and.run|sunk cost|predatory/i,
  monopoly: /monopoly|deadweight|allocative(ly)? inefficient/i,
  monopsony: /monopsony|single buyer|\bMCL\b/i,
  'trade-union': /trade union|collective bargain/i,
  'labour-market': /labour market|minimum wage|\bMRP\b|wage determination|derived demand/i,
  'economies-of-scale': /economies of scale|diseconomies|\bMES\b|minimum efficient scale/i,
  'business-objectives': /profit maximis|sales maximis|satisfic|principal-?agent|divorce of ownership/i,

  // ---- Theme 4: the global economy
  tariff: /tariff|protectionis|import dut|quota/i,
  'comparative-advantage': /comparative advantage|absolute advantage|gains from trade|specialis/i,
  'j-curve': /j-?curve|marshall-?lerner|depreciat\w*.{0,40}current account/i,
  'fixed-exchange-rate': /fixed exchange|\bpeg\b|devalu|revalu|reserves/i,
  'exchange-rate': /exchange rate|appreciat|depreciat|hot money/i,
  'lorenz-curve': /lorenz|gini/i,
  'kuznets-curve': /kuznets/i,
  'poverty-trap': /poverty trap|savings gap|harrod|vicious circle/i,
  'terms-of-trade': /terms of trade|export price.{0,24}import price/i,
  efficiency: /productive(ly)? efficien|allocative(ly)? efficien|dynamic efficien|x-inefficien|\bEfficiency\b/,

  // ---- Maths: Pure
  'straight-line': /gradient|y-intercept|perpendicular|parallel line|midpoint|equation of the line/i,
  'completing-square': /completing the square|complete the square|vertex|line of symmetry|turning point of the (curve|parabola)/i,
  discriminant: /discriminant|b\s*²\s*−\s*4ac|b\^?2\s*-\s*4ac|real roots|repeated root|no real/i,
  'circle-geometry': /circle|tangent|chord|centre and radius|perpendicular bisector/i,
  'factor-theorem': /factor theorem|remainder theorem|algebraic (long )?division|\bf\(.\)\s*=\s*0\b/i,
  'triangle-rules': /sine rule|cosine rule|area of (the )?triangle|½ab|ambiguous case/i,
  'trig-graphs': /\bsin\b|\bcos\b|\btan\b|amplitude|period|trigonometric graph/i,
  'cast-diagram': /\bCAST\b|principal value|all solutions|quadrant/i,
  'reciprocal-trig': /\bsec\b|\bcosec\b|\bcot\b|reciprocal trig|asymptote.{0,30}trig/i,
  'harmonic-form': /harmonic form|R\s*(sin|cos)|R cos|\bRsin\b|maximum value.{0,30}(sin|cos)/i,
  // "translat" matched "Translators"; keep it to the graph sense.
  'graph-transformations':
    /transformation of (the )?(graph|curve)|translate(d|s)? (the )?(graph|curve)|\bstretch\b|reflect.{0,20}(axis|graph)|f\(x\s*\+/i,
  'modulus-graph': /modulus|\|x\||absolute value/i,
  'inverse-function': /inverse function|f\s*⁻?¹|composite function|\bfg\(x\)/i,
  'exponential-log': /\be\^?x\b|natural log|\bln\b|exponential (growth|decay|graph)/i,
  'log-linear': /linearis|log y|log-log|straight line.{0,30}log|reduce.{0,20}linear form/i,
  'sequences-series': /geometric|arithmetic|sum to infinity|convergen|common (ratio|difference)|sigma/i,
  'pascals-triangle': /binomial expansion|pascal|\bnCr\b|coefficient of x/i,
  'tangent-normal': /tangent|normal to the curve|equation of the tangent/i,
  'stationary-points': /stationary point|maximum and minimum|turning point|second derivative test/i,
  concavity: /concave|convex|point of inflection|inflexion|f''|second derivative/i,
  'area-under-curve': /area under|definite integral|between the curve|bounded by/i,
  'trapezium-rule': /trapezium rule|overestimate|underestimate|strips|ordinates/i,
  'iteration-staircase': /iterat|staircase|cobweb|xₙ₊₁|convergence to the root/i,
  'newton-raphson': /newton-?raphson/i,
  'parametric-curve': /parametric|in terms of t|eliminate the parameter/i,
  'vectors-3d': /three dimension|\b3-?D\b|\bk\b component|i\s*\+.{0,12}j\s*\+.{0,12}k/i,
  'vectors-2d': /vector|magnitude and direction|position vector|resultant/i,
  sector: /radian|arc length|sector|segment area/i,

  // ---- Maths: Statistics
  'sampling-methods': /sampl|census|population|bias|sampling frame/i,
  histogram: /histogram|frequency density|class width/i,
  'box-plot': /box plot|quartile|interquartile|outlier|whisker/i,
  'venn-diagram': /venn|union|intersection|mutually exclusive|independent event/i,
  'tree-diagram': /tree diagram|without replacement|branch/i,
  // The Pure "binomial expansion" and the Statistics "binomial distribution"
  // share a word and nothing else, so this must name the distribution.
  'binomial-bars': /binomial distribution|B\(\s*n|number of successes|\bp\s*=\s*0\.|binomial probab/i,
  'normal-distribution': /normal distribution|N\(|standard(ise|ised)?|z-?score|bell/i,
  'hypothesis-regions': /critical (region|value)|significance level|hypothesis test|reject.{0,20}H₀|one-?tail|two-?tail/i,
  'scatter-regression': /scatter|regression|correlation|least squares|\bPMCC\b|extrapolat/i,

  // ---- Maths: Mechanics
  'velocity-time': /velocity-?time|speed-?time|area under.{0,20}graph.{0,20}distance|\bSUVAT\b|constant acceleration/i,
  'forces-on-slope': /inclined|slope|plane|friction|coefficient of friction|resolv|normal reaction/i,
  'connected-particles': /connected|pulley|tow|string|two particles/i,
  'projectile-path': /projectile|launch|time of flight|range|initial velocity.{0,20}angle/i,
  // Unbounded, "rod" matched inside "P-rod-uction".
  'moments-rod': /\bmoments?\b|\bpivot\b|\brod\b|\bbeam\b|equilibrium of a rigid/i,
  ladder: /ladder|leaning|rough (wall|ground)/i,
  'variable-acceleration': /variable acceleration|differentiate.{0,24}(displacement|velocity)|integrate.{0,24}acceleration/i,

  // ---- Computer Science
  // "bus" matched inside "Business".
  'von-neumann': /von neumann|\bALU\b|control unit|\bregisters?\b|\bMAR\b|\bMDR\b|\b(address|data|control) bus\b/i,
  'fetch-decode-execute': /fetch-?decode-?execute|\bFDE\b|instruction cycle/i,
  pipelining: /pipelin|overlap.{0,20}instruction|branch prediction|multicore|parallel process/i,
  'storage-media': /magnetic|optical|solid state|\bSSD\b|\bHDD\b|storage device|platter|flash/i,
  scheduling: /schedul|round robin|shortest job|first come|quantum|time slice/i,
  paging: /paging|segmentation|virtual memory|page fault|disk thrash/i,
  'compiler-stages': /compiler|lexical|syntax analysis|code generation|interpreter|assembler|translator/i,
  // "methodolog" matched "Economic Methodology".
  'waterfall-agile':
    /waterfall|\bagile\b|extreme programming|spiral model|\bRAD\b|development methodolog|systems life ?cycle/i,
  'huffman-tree': /huffman|compression|lossless|lossy|run-?length/i,
  'encryption-keys': /encrypt|symmetric|asymmetric|public key|private key|digital signature|caesar|vernam/i,
  'hash-table': /hash|collision|load factor|\bO\(1\)|bucket/i,
  'er-diagram': /entity|relationship|primary key|foreign key|one-to-many/i,
  normalisation: /normalis|\b1NF\b|\b2NF\b|\b3NF\b|redundan|anomal/i,
  'network-topologies': /topolog|star|mesh|bus network/i,
  'tcp-ip-stack': /\bTCP\b|\bIP\b|protocol|layer|application layer|transport layer/i,
  'packet-switching': /packet|circuit switch|router|sequence number|reassembl/i,
  'client-server': /client-?server|peer-?to-?peer|\bP2P\b|server request/i,
  'page-rank': /pagerank|search engine|indexing|web crawler|spider/i,
  'twos-complement': /two'?s complement|binary (addition|subtraction)|sign(ed| bit)|hexadecimal|shift/i,
  'floating-point': /floating point|mantissa|exponent|normalis(e|ed) form|precision.{0,20}range/i,
  // "\bAND\b" is case-insensitive here, so it matched the ordinary word "and"
  // in a chapter title. Match the gate names only where they read as gates.
  'logic-gates': /logic gate|truth table|boolean expression|\b(AND|OR|NOT|NAND|NOR|XOR)\s+gate/i,
  'karnaugh-map': /karnaugh|k-?map|simplif.{0,24}boolean|de morgan/i,
  'binary-tree': /binary (search )?tree|traversal|in-?order|pre-?order|post-?order|node.{0,20}child/i,
  'linked-list': /linked list|pointer|null pointer|dynamic.{0,20}structure/i,
  'stack-queue': /\bstack\b|\bqueue\b|\bFIFO\b|\bLIFO\b|push and pop|enqueue/i,
  'binary-search': /binary search|halv|sorted list.{0,30}search/i,
  'insertion-sort': /insertion sort|bubble sort/i,
  'merge-sort': /merge sort|quick sort|pivot/i,
  'dijkstra-graph': /dijkstra|shortest path|\bA\*\b|weighted graph|breadth-?first|depth-?first/i,
  'big-o': /big o|time complexity|space complexity|O\(n|efficien.{0,20}algorithm/i,
  decomposition: /decompos|abstraction|thinking (ahead|procedurally)|caching|reusable component/i,
  'divide-conquer': /divide and conquer|backtrack|heuristic|performance modelling|visualisation to solve/i,
  'class-diagram': /\bclass(es)?\b|object-?oriented|\bOOP\b|inherit|encapsulat|polymorph|method.{0,20}attribute|paradigm/i,
  recursion: /recursi|base case|stack overflow|calls itself/i,
  lmc: /\bLMC\b|little man|mailbox|assembly|mnemonic|\bDAT\b|\bBRZ\b|\bBRP\b|addressing mode/i,
  'legislation-map': /data protection|computer misuse|copyright|investigatory powers|\bRIPA\b|legislation|legal|ethical|moral/i,
}
