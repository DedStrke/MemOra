/*
  Flashcards whose answer is a diagram, for Maths and Computer Science.
  Companion to econ-diagram-cards.js; same idea and same shape.

  The exam makes you DRAW these - a force diagram, a velocity-time graph, a
  Venn diagram, a logic gate, a binary tree. A deck of definitions never
  asks for that, so a student can know every rule and still lose every
  diagram mark. The front asks for the sketch from memory; the back is a
  marking checklist, and the diagram renders below it once flipped.
*/

export const MATHS_DIAGRAM_CARDS = [
  // -------------------------------------------------------- Pure
  {
    front: 'Sketch the three discriminant cases for a quadratic.',
    back: 'Three parabolas against the x-axis. b² − 4ac > 0: crosses twice, two distinct real roots. = 0: touches once, one repeated root. < 0: never meets the axis, no real roots. "Show it has real roots" means prove b² − 4ac ≥ 0.',
    topic: 'Quadratics',
    diagram: 'discriminant',
  },
  {
    front: 'Sketch the four graph transformations of y = f(x).',
    back: 'f(x) + a moves UP by a. f(x + a) moves LEFT by a - inside the bracket, opposite direction. af(x) stretches vertically by scale factor a. f(ax) stretches horizontally by 1/a. Always transform the key points (intercepts, turning points, asymptotes) too, and label their new coordinates.',
    topic: 'Graphs and Transformations',
    diagram: 'graph-transformations',
  },
  {
    front: 'Sketch y = |f(x)| and y = f(|x|) and say how they differ.',
    back: '|f(x)|: reflect anything below the x-axis UP above it. f(|x|): keep the part for x ≥ 0 and reflect it in the y-AXIS, discarding the original left-hand side. They are different graphs - read which one the question wants.',
    topic: 'Functions and Graphs',
    diagram: 'modulus-graph',
  },
  {
    front: 'Sketch a function and its inverse, and state the domain rule.',
    back: 'f⁻¹ is f reflected in the line y = x. The domain of f⁻¹ is the RANGE of f, and the range of f⁻¹ is the domain of f. An inverse only exists if f is one-to-one - otherwise restrict the domain first. State the domain; it carries a mark.',
    topic: 'Functions and Graphs',
    diagram: 'inverse-function',
  },
  {
    front: 'Sketch y = sin x and y = cos x over one full period.',
    back: 'Both oscillate between 1 and −1 with period 360° (2π). cos is sin shifted 90° left. Use the symmetry for ALL solutions in range: sin gives θ and 180° − θ; cos gives θ and 360° − θ; tan repeats every 180°.',
    topic: 'Trigonometric Ratios',
    diagram: 'trig-graphs',
  },
  {
    front: 'Draw the CAST diagram and explain what it is for.',
    back: 'A circle in four quadrants. Anticlockwise from the fourth: Cos, All, Sin, Tan are positive there. Once the calculator gives the principal value, CAST tells you where the other solutions in the range are. Stopping at one answer is the classic lost mark.',
    topic: 'Trigonometric Identities and Equations',
    diagram: 'cast-diagram',
  },
  {
    front: 'Sketch a sector and label arc length, sector area and segment.',
    back: 'Arc s = rθ. Sector area = ½r²θ. Segment = sector − triangle = ½r²(θ − sin θ). All three require θ in RADIANS - a calculator in degree mode is the biggest single source of lost marks in this chapter.',
    topic: 'Radians',
    diagram: 'sector',
  },
  {
    front: 'Sketch a curve with a maximum and a minimum, and say how you classify them.',
    back: 'Stationary points are where dy/dx = 0, with a horizontal tangent. Classify by the second derivative: d²y/dx² < 0 → maximum, > 0 → minimum, = 0 → inconclusive so test the gradient either side. Give BOTH coordinates.',
    topic: 'Differentiation',
    diagram: 'stationary-points',
  },
  {
    front: 'Sketch the area under a curve and state how to handle a region below the axis.',
    back: 'Area = ∫ᵇₐ y dx, shaded between the curve and the x-axis from a to b. A region BELOW the axis integrates to a negative value, so split the integral at each root and add the magnitudes - integrating straight through makes the parts cancel and gives too small an answer.',
    topic: 'Integration',
    diagram: 'area-under-curve',
  },
  {
    front: 'Sketch the trapezium rule with four strips.',
    back: '∫ y dx ≈ h/2 [y₀ + 2(y₁ + y₂ + y₃) + y₄], h = (b − a)/n. n is the number of STRIPS; there are always n + 1 ordinates. Only the middle ordinates are doubled. Convex curve → overestimate; concave → underestimate.',
    topic: 'Numerical Methods',
    diagram: 'trapezium-rule',
  },
  {
    front: 'Draw the Newton-Raphson method and say when it fails.',
    back: 'Draw the tangent at xₙ; where it meets the x-axis is xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ). It fails when f′(xₙ) is zero or near zero: a near-horizontal tangent throws the next value far away. A starting value near a turning point is the usual culprit.',
    topic: 'Numerical Methods',
    diagram: 'newton-raphson',
  },
  {
    front: 'Draw a staircase diagram for an iteration and say what it shows.',
    back: 'Plot y = x and y = g(x). From x₀, move VERTICALLY to the curve then HORIZONTALLY to the line, repeating. Steps closing in from one side are a staircase; spiralling in around the root is a cobweb. The root is where the two graphs cross.',
    topic: 'Sequences and Series',
    diagram: 'iteration-staircase',
  },
  {
    front: 'Write out the first six rows of Pascal’s triangle and say what they are for.',
    back: '1 / 1 1 / 1 2 1 / 1 3 3 1 / 1 4 6 4 1 / 1 5 10 10 5 1. Each number is the sum of the two above. Row n gives the coefficients of (a + b)ⁿ, and each entry equals ⁿCᵣ.',
    topic: 'The Binomial Expansion',
    diagram: 'pascals-triangle',
  },
  {
    front: 'Sketch vector addition head-to-tail and label the resultant.',
    back: 'Place b’s tail at a’s head; the resultant a + b closes the triangle from a’s tail to b’s head. AB = b − a (endpoint minus start), so BA = −AB. |v| = √(a² + b²), and the unit vector is v ÷ |v|.',
    topic: 'Vectors (2D)',
    diagram: 'vectors-2d',
  },
  {
    front: 'Sketch y = eˣ and y = ln x on the same axes.',
    back: 'eˣ passes through (0, 1), always positive, with the x-axis as an asymptote. ln x is its inverse: through (1, 0), only defined for x > 0, with the y-axis as an asymptote. Each is the reflection of the other in y = x.',
    topic: 'Exponentials and Logarithms',
    diagram: 'exponential-log',
  },

  // -------------------------------------------------- Statistics
  {
    front: 'Draw a two-set Venn diagram and label every region.',
    back: 'Two overlapping circles in a rectangle (ξ). Regions: A ∩ B′ (A only), A ∩ B (both), A′ ∩ B (B only), (A ∪ B)′ (neither). Fill the INTERSECTION first and work outwards. P(A ∪ B) = P(A) + P(B) − P(A ∩ B); everything inside totals 1.',
    topic: 'Probability',
    diagram: 'venn-diagram',
  },
  {
    front: 'Draw a two-stage tree diagram and state the two rules.',
    back: 'Multiply ALONG branches, add BETWEEN them. Each set of branches from a point sums to 1. Without replacement the second-stage denominators drop by one - the step most often missed. The second-stage probabilities are conditional: P(B|A).',
    topic: 'Probability',
    diagram: 'tree-diagram',
  },
  {
    front: 'Sketch a histogram with unequal class widths.',
    back: 'Vertical axis is FREQUENCY DENSITY = frequency ÷ class width, so AREA is proportional to frequency, not height. That is the whole difference from a bar chart, and plotting raw frequency with unequal widths is the standard error. Bars touch; there are no gaps.',
    topic: 'Data Presentation and Interpretation',
    diagram: 'histogram',
  },
  {
    front: 'Draw a box plot and mark an outlier.',
    back: 'Five values: minimum, Q₁, median, Q₃, maximum. The box spans Q₁ to Q₃ (the IQR) with the median inside. An outlier is more than 1.5 × IQR beyond Q₁ or Q₃ (or 2/3 standard deviations from the mean - check which the question gives) and is plotted as a separate point.',
    topic: 'Data Presentation and Interpretation',
    diagram: 'box-plot',
  },
  {
    front: 'Sketch the normal distribution and shade P(X < a).',
    back: 'Symmetric bell curve centred on μ, total area 1, points of inflection at μ ± σ. X ~ N(μ, σ²) - the second parameter is the VARIANCE, so σ is its square root. Continuous, so P(X = a) = 0 and P(X < a) = P(X ≤ a): no ±0.5 unless approximating a binomial.',
    topic: 'The Normal Distribution',
    diagram: 'normal-distribution',
  },
  {
    front: 'Sketch the critical regions for a one-tailed and a two-tailed test.',
    back: 'One-tailed puts the whole significance level in ONE tail. Two-tailed splits it - 2.5% in each tail at the 5% level. Decide which from the wording first: "has it changed?" is two-tailed, "has it increased?" is one-tailed. Getting this wrong invalidates everything after.',
    topic: 'Statistical Hypothesis Testing',
    diagram: 'hypothesis-regions',
  },
  {
    front: 'Sketch a scatter diagram with a regression line and state its limits.',
    back: 'Points showing correlation with the least-squares line through them. The y-on-x line minimises VERTICAL distances, so it predicts y from x only. Inside the data range is interpolation (reasonable); outside is extrapolation (unreliable - say so). Correlation is not causation.',
    topic: 'Regression, Correlation and Hypothesis Testing',
    diagram: 'scatter-regression',
  },
  {
    front: 'Sketch a binomial distribution and state its four conditions.',
    back: 'A bar chart of P(X = r) against r, peaking near np. Conditions: fixed number of trials n; two outcomes per trial; independent trials; constant probability p. Because X is discrete, P(X < x) = P(X ≤ x − 1) exactly.',
    topic: 'Statistical Distributions (Binomial)',
    diagram: 'binomial-bars',
  },

  // --------------------------------------------------- Mechanics
  {
    front: 'Sketch a velocity-time graph and say what the gradient and area mean.',
    back: 'GRADIENT = acceleration. AREA under the graph = displacement. Split the area into triangles and trapezia. A section below the time axis is motion the other way: negative displacement, but still positive distance travelled.',
    topic: 'Constant Acceleration (SUVAT)',
    diagram: 'velocity-time',
  },
  {
    front: 'Draw the force diagram for a particle on a rough inclined plane.',
    back: 'Weight mg vertically DOWN, normal reaction R PERPENDICULAR to the slope, friction F along the slope opposing motion. Resolve perpendicular and parallel to the SLOPE: R = mg cos α (not mg - the commonest error in Mechanics), and the component down the slope is mg sin α, with F ≤ μR.',
    topic: 'Forces and Friction',
    diagram: 'forces-on-slope',
  },
  {
    front: 'Draw two particles connected over a smooth pulley and state the two facts that follow.',
    back: 'Tension arrows up on both sides, weights down. A smooth pulley and inextensible string mean (1) the TENSION is the same throughout and (2) both accelerations have the same MAGNITUDE. Write F = ma for each, taking its own direction of motion as positive; adding eliminates T, subtracting eliminates a.',
    topic: 'Application of Forces',
    diagram: 'connected-particles',
  },
  {
    front: 'Sketch a projectile’s path and split the initial velocity into components.',
    back: 'A parabola. Horizontally u cos θ with ZERO acceleration; vertically u sin θ with a = −g. Time is the only link between them. At the greatest height the VERTICAL velocity is zero - the horizontal is unchanged, so the speed is not zero.',
    topic: 'Projectiles',
    diagram: 'projectile-path',
  },
  {
    front: 'Draw a uniform rod on two supports and state the equilibrium conditions.',
    back: 'Reaction arrows up at each support, weight down at the MIDPOINT (uniform rod only). Equilibrium needs BOTH: resultant force = 0 and total moment about any point = 0. Take moments about a support to eliminate its reaction. On the point of tilting, the other reaction is zero.',
    topic: 'Moments',
    diagram: 'moments-rod',
  },
  {
    front: 'Draw a ladder against a smooth wall on rough ground.',
    back: 'SMOOTH wall: normal reaction only, no friction. ROUGH ground: normal reaction R up plus friction F ≤ μR horizontally. Weight acts at the ladder’s centre of mass. Take moments about the foot to remove R and F at once. It slips when F reaches μR.',
    topic: 'Application of Forces',
    diagram: 'ladder',
  },
  {
    front: 'Draw the relationship between displacement, velocity and acceleration.',
    back: 'r → v → a by DIFFERENTIATING with respect to t; a → v → r by INTEGRATING, adding a constant each time that the initial conditions fix. suvat only applies when acceleration is CONSTANT - if a is given as a function of t, every suvat equation is off the table.',
    topic: 'Variable Acceleration',
    diagram: 'variable-acceleration',
  },
]

export const CS_DIAGRAM_CARDS = [
  // The three 1.1.1 cards are worded from Mudassir's own notes for the
  // chapter (cs-notes-processor.js), like the rest of its flashcards.
  {
    front: 'Draw the Von Neumann architecture.',
    back: 'A CPU (Control Unit, ALU and the registers PC, MAR, MDR, CIR and ACC) connected to ONE memory that stores both instructions and data, over the address bus (usually CPU to memory), the data bus (bidirectional) and the control bus. Instructions and data use the same buses, and sharing those pathways is what causes the Von Neumann bottleneck. Harvard architecture stores them in separate memories with separate buses.',
    topic: 'Structure and Function of the Processor',
    diagram: 'von-neumann',
  },
  {
    front: 'Draw the fetch-decode-execute cycle and say what happens at each stage.',
    back: 'FETCH: the address in the PC is copied to the MAR, sent to memory along the address bus, the Control Unit sends a read signal, the instruction is transferred to the MDR, copied to the CIR, and the PC is incremented. DECODE: the Control Unit decodes the instruction in the CIR (the opcode says what operation to perform, the operand gives the data or address). EXECUTE: the instruction is carried out using the ALU, registers or memory; a branch may change the PC. Then repeat.',
    topic: 'Structure and Function of the Processor',
    diagram: 'fetch-decode-execute',
  },
  {
    front: 'Draw how pipelining overlaps the fetch-decode-execute cycle for three instructions.',
    back: 'Three instructions against time, each stepping through fetch, decode and execute one stage behind the last: while one instruction is being executed, another is being decoded and another fetched. It increases the number of instructions processed in a given amount of time, but does not necessarily make one individual instruction faster. A branch instruction can reduce its effectiveness because instructions already fetched may need to be discarded.',
    topic: 'Structure and Function of the Processor',
    diagram: 'pipelining',
  },
  {
    front: 'Draw the AND, OR and XOR gates with their Boolean symbols.',
    back: 'AND (A∧B): 1 only when both inputs are 1. OR (A∨B): 1 when at least one is. XOR (A⊕B): 1 only when the inputs DIFFER - the sum bit of a half adder. NOT inverts. NAND and NOR are AND and OR negated. De Morgan: ¬(A∧B) ≡ ¬A ∨ ¬B.',
    topic: 'Boolean Algebra',
    diagram: 'logic-gates',
  },
  {
    front: 'Draw a binary search tree and give its in-order traversal.',
    back: 'Every value in a node’s LEFT subtree is smaller, everything RIGHT is larger, so a search discards half the tree each step: O(log n) when balanced. IN-ORDER (left, root, right) outputs ascending order. Pre-order copies a tree; post-order deletes one.',
    topic: 'Data Structures',
    diagram: 'binary-tree',
  },
  {
    front: 'Draw a linked list and compare it with an array.',
    back: 'Each node holds data plus a POINTER to the next; the last points to null, and a head pointer marks the start. Nodes need not be contiguous, it grows dynamically, and insertion/deletion just rewires pointers. But there is no random access - reaching the nth item is O(n), where an array is O(1).',
    topic: 'Data Structures',
    diagram: 'linked-list',
  },
  {
    front: 'Draw a stack and a queue, and give one use of each.',
    back: 'STACK is LIFO - push and pop both at the TOP. Used for the call stack holding return addresses during subroutine calls, and for undo. QUEUE is FIFO - enqueue at the rear, dequeue from the front. Used for print spoolers and scheduling ready queues.',
    topic: 'Data Structures',
    diagram: 'stack-queue',
  },
  {
    front: 'Draw a star and a mesh topology and compare them.',
    back: 'STAR: every device to a central switch. Easy to add devices, one cable failure hits one node - but the switch is a single point of failure. MESH: devices connect directly to each other. No single point of failure and traffic routes around a break, at the cost of far more cabling.',
    topic: 'Networks',
    diagram: 'network-topologies',
  },
  {
    front: 'Draw the four layers of the TCP/IP stack.',
    back: 'Application (HTTP, FTP, SMTP) → Transport (TCP: packets, ports, sequence numbers) → Internet (IP: addressing and routing) → Link (MAC, physical transmission). Each layer adds a header going down and strips it coming up - encapsulation. Layering lets one layer change without the others.',
    topic: 'Networks',
    diagram: 'tcp-ip-stack',
  },
  {
    front: 'Draw an 8-bit two’s complement number and convert it to denary.',
    back: 'Column headings −128, 64, 32, 16, 8, 4, 2, 1 - the most significant bit is NEGATIVE. So 10110000 = −128 + 32 + 16 = −80. To negate: invert every bit then add 1. It gives one representation of zero and lets addition work with no special cases.',
    topic: 'Data Types and Number Representation',
    diagram: 'twos-complement',
  },
  {
    front: 'Draw a weighted graph and describe Dijkstra’s algorithm on it.',
    back: 'Start node 0, all others infinity. Repeatedly visit the nearest UNVISITED node, updating each neighbour’s tentative distance if the route through the current node is shorter, then mark it visited. Cannot handle negative weights, since a visited node is never revisited. A* adds a heuristic to head towards the target.',
    topic: 'Algorithms: Searching, Sorting & Graph Traversal',
    diagram: 'dijkstra-graph',
  },
  {
    front: 'Sketch the Big-O complexity curves and give an example of each.',
    back: 'O(1) constant - hash table lookup. O(log n) - binary search, halving each step. O(n) - linear search. O(n²) - bubble sort, nested loops. What matters is behaviour as n grows: O(n²) is fine on ten items and unusable on a million.',
    topic: 'Algorithms: Searching, Sorting & Graph Traversal',
    diagram: 'big-o',
  },
  {
    front: 'Draw an entity relationship diagram with a one-to-many and a many-to-many relationship.',
    back: 'Crow’s foot at the "many" end. One customer places many orders. Orders to products is many-to-many, which cannot be stored directly - it needs a LINKING table holding a foreign key to each side. Referential integrity: every foreign key must match an existing primary key.',
    topic: 'Databases',
    diagram: 'er-diagram',
  },
  {
    front: 'Draw the stages of compilation and say what each produces.',
    back: 'Lexical analysis → tokens (whitespace and comments stripped, symbol table started). Syntax analysis → parse tree, checked against the grammar (a missing bracket is caught here). Semantic analysis → type checking. Code generation → object code. Optimisation → smaller or faster code.',
    topic: 'Applications Generation (Translators)',
    diagram: 'compiler-stages',
  },
  {
    front: 'Draw how paging and virtual memory work.',
    back: 'Memory divided into fixed-size PAGES, physical memory into FRAMES of the same size. A page table maps logical pages to physical frames. A page not in RAM causes a PAGE FAULT and is loaded from disk, evicting another if needed. Excessive paging is thrashing - more time swapping than executing.',
    topic: 'Systems Software',
    diagram: 'paging',
  },
  {
    front: 'Draw client-server and peer-to-peer networks and compare them.',
    back: 'CLIENT-SERVER: clients request from a central server. Centralised data, security and backups, easier to manage - but the server is a single point of failure and a bottleneck. PEER-TO-PEER: every machine is both client and server. No server needed and it scales cheaply, but data is scattered and harder to secure or back up.',
    topic: 'Networks',
    diagram: 'client-server',
  },
  {
    front: 'Trace an insertion sort on 5, 2, 9, 1.',
    back: '5,2,9,1 → 2,5,9,1 → 2,5,9,1 → 1,2,5,9. Take each element in turn and insert it into its correct place among those already sorted, shifting larger ones right. O(n²) worst case but O(n) on a nearly-sorted list, and efficient on small data - which is why real sorts fall back to it on small partitions.',
    topic: 'Algorithms: Searching, Sorting & Graph Traversal',
    diagram: 'insertion-sort',
  },
]
