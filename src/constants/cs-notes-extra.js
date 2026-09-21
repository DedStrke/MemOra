/*
  Developed discussion for the extended-response questions.

  OCR's 9- and 12-mark questions are levelled: Level 3 needs a line of
  reasoning that is developed and BALANCED, ending in a supported judgement.
  Listing advantages and disadvantages caps at Level 2 however many points
  are made.

  Each block below takes the main trade-off in its topic and works it
  through: the mechanism, the cost, and what the answer actually depends on.
  That last part is the judgement, and it is where the top marks are.
*/

import { h, p, ul, tip, table, chapter } from './maths-notes-build'

/* ------------------------------------------------- COMPONENT 01 */

const inputOutputStorage = chapter(
  h('Extended response: which storage, and why?'),
  table(
    ['', 'Magnetic (HDD)', 'Solid state (SSD)', 'Optical'],
    [
      ['Speed', 'Slow - mechanical seek time', 'Fast - no moving parts', 'Slow'],
      ['Durability', 'Poor - moving parts fail on shock', 'Good - no moving parts', 'Scratches easily'],
      ['Cost per GB', 'Lowest', 'Higher', 'Low for distribution'],
      ['Capacity', 'Very high', 'High', 'Limited'],
      ['Power draw', 'Higher', 'Lower', 'n/a'],
      ['Lifespan', 'Long, but mechanical wear', 'Limited WRITE cycles per cell', 'Long if undamaged'],
    ],
  ),
  p(
    'For a LAPTOP the binding constraints are shock resistance and battery life, so an SSD wins despite the cost - a dropped laptop with a spinning disc loses the data. For a BACKUP ARCHIVE the constraint is cost per terabyte and the access pattern is write-once-read-rarely, so magnetic wins. For DISTRIBUTING software to machines with no network, optical still wins on cost per unit. The pattern is the same each time: identify the constraint the scenario imposes, then choose against it.',
  ),
  tip(
    'The SSD weakness worth knowing is finite write cycles per cell. Wear levelling spreads writes to delay it, but a write-heavy server workload will exhaust an SSD faster than an HDD. That detail is what distinguishes a Level 3 answer from a recited comparison table.',
  ),
)

const systemsSoftware = chapter(
  h('Extended response: choosing a scheduling algorithm'),
  p(
    'ROUND ROBIN gives each process a fixed time slice in turn. It is fair, no process starves, and interactive users get a response quickly - which is why it suits desktop systems. But it ignores urgency entirely: a critical process waits the same as a trivial one, and the context switching between slices is pure overhead that grows as slices shrink.',
  ),
  p(
    'SHORTEST JOB FIRST minimises average waiting time, which is optimal for throughput. The problems are that the run time must be known in advance, which it usually is not, and that long jobs can STARVE indefinitely while short ones keep arriving.',
  ),
  p(
    'PRIORITY scheduling handles urgency but starves low-priority processes unless ageing is used to raise their priority over time. FIRST COME FIRST SERVED is simple and starvation-free, but one long process blocks everything behind it - the convoy effect.',
  ),
  p(
    'The judgement depends on the system’s purpose. A REAL-TIME system - a pacemaker, an aircraft controller - needs guaranteed response times, so it needs priority scheduling with deadlines, and a missed deadline is a failure regardless of average throughput. A general desktop needs responsiveness, so round robin with priorities. A batch processing system needs throughput and knows its job lengths, so shortest job first.',
  ),
  h('Virtual memory and disk thrashing'),
  p(
    'Virtual memory lets a system run programs larger than physical RAM by paging inactive pages out to disk, so more programs run at once. The cost appears when RAM is heavily over-committed: the system spends more time swapping pages in and out than executing, and throughput collapses. This is DISK THRASHING, and it is the standard example of an optimisation that reverses when pushed too far.',
  ),
)

const translators = chapter(
  h('Extended response: compiler or interpreter?'),
  p(
    'A COMPILER translates the whole program once, producing an executable that runs at full speed with no translator present. It reports every syntax error in one pass. The costs are that compilation takes time on every change, which slows the edit–test cycle, and that the executable is platform-specific, so a separate build is needed per target.',
  ),
  p(
    'An INTERPRETER translates and executes line by line. Nothing is compiled, so testing is immediate and the same source runs anywhere the interpreter exists - excellent for development and for cross-platform scripting. The costs are that execution is much slower, because translation happens every time the line runs (so a line inside a loop is translated on every iteration), the source must be distributed, and errors only appear when the line is reached.',
  ),
  p(
    'BYTECODE is the compromise: compile to an intermediate form once, then interpret that on any platform with a virtual machine. Java does exactly this. It is faster than pure interpretation and more portable than a native binary, but slower than native compilation and it requires the VM to be installed.',
  ),
  tip(
    'The judgement: use an interpreter during DEVELOPMENT for the fast feedback loop, and compile for RELEASE for speed and to avoid shipping source. That is why so many real toolchains provide both.',
  ),
)

const methodologies = chapter(
  h('Extended response: waterfall or agile?'),
  p(
    'WATERFALL fixes the requirements up front and moves through the stages in order. Its strength is documentation and predictability: the cost, the timescale and the deliverable are known at the start, which is what a fixed-price contract and a safety-critical audit both require. Its weakness is that a requirement missed at the analysis stage may not surface until testing, when changing it means revisiting every stage - so the cost of a late change is enormous.',
  ),
  p(
    'AGILE delivers working software in short iterations with continuous customer involvement. Its strength is exactly waterfall’s weakness: requirements can change late without wrecking the project, and the customer sees working software early enough to redirect it. Its weaknesses are that the final cost and timescale are genuinely uncertain, documentation is thinner, and it requires a customer who can commit real time throughout - which many cannot.',
  ),
  p(
    'The judgement depends on requirement STABILITY and the cost of failure. For an aircraft control system the requirements are fixed by regulation and a defect is fatal, so waterfall’s documentation and formal verification are essential. For a consumer web application where the market is unknown and requirements will change, agile’s adaptability is worth more than a plan that will be wrong. RAD and spiral sit between them; spiral in particular adds explicit RISK analysis at each cycle, which suits large projects where the risks are the main unknown.',
  ),
)

const compression = chapter(
  h('Extended response: lossy or lossless?'),
  p(
    'LOSSLESS compression - run length encoding, dictionary encoding - allows the original to be reconstructed EXACTLY. It must be used wherever every bit matters: executables, text, spreadsheets, medical images. The compression ratio is modest, because the only redundancy it can remove is genuine repetition, and on data with little repetition it can make the file slightly larger.',
  ),
  p(
    'LOSSY compression discards information the human eye or ear will not notice, achieving far higher ratios. It is right for streaming audio and video, where bandwidth is the binding constraint and a small quality loss is imperceptible. It is wrong wherever the data will be re-edited, because each save compounds the loss, and wrong for anything that must be exact.',
  ),
  h('Extended response: symmetric or asymmetric encryption?'),
  p(
    'SYMMETRIC encryption uses one key for both operations. It is fast, so it suits bulk data. Its problem is KEY DISTRIBUTION: the key must reach the recipient somehow, and any channel secure enough to send the key was secure enough to send the message.',
  ),
  p(
    'ASYMMETRIC encryption solves that with a public key that anyone may hold and a private key that never leaves the owner. Encrypting with the public key gives confidentiality; encrypting with the PRIVATE key gives a digital signature, proving origin. The cost is that it is far slower.',
  ),
  p(
    'In practice both are used together, and saying so is the judgement: asymmetric encryption is used once to exchange a symmetric session key, then the fast symmetric cipher carries the actual data. That is what happens every time a browser opens an HTTPS connection.',
  ),
  h('Hashing'),
  p(
    'A hash is ONE-WAY - it cannot be reversed - which is why passwords are stored hashed rather than encrypted: a stolen database yields no passwords. A good hash function is fast, distributes keys evenly to minimise collisions, and produces a large change in output from a small change in input. Collisions are handled by chaining (a list at each index) or by open addressing (probing for the next free slot).',
  ),
)

const databases = chapter(
  h('Extended response: why normalise?'),
  p(
    'Normalisation removes redundancy, and the benefits follow from that. Storing a customer’s address once rather than on every order saves space, but more importantly it removes UPDATE ANOMALIES: with one copy, changing the address is one operation and cannot leave inconsistent copies behind. It also removes INSERT anomalies (recording a product before anyone orders it) and DELETE anomalies (losing the only record of a customer by deleting their last order).',
  ),
  p(
    'The cost is that the data is spread across more tables, so queries need JOINs, and joins are expensive. A heavily normalised database used for reporting can be slow enough that deliberate DENORMALISATION - reintroducing redundancy for speed - is the right engineering choice, accepting the consistency risk in exchange.',
  ),
  h('ACID and concurrency'),
  table(
    ['Property', 'Guarantee'],
    [
      ['Atomicity', 'A transaction happens completely or not at all'],
      ['Consistency', 'The database moves from one valid state to another; rules are never broken'],
      ['Isolation', 'Concurrent transactions do not see each other’s partial work'],
      ['Durability', 'Once committed, it survives a crash'],
    ],
  ),
  p(
    'Without isolation, two simultaneous updates can produce a LOST UPDATE: both read the same starting value, both write back, and one change vanishes. RECORD LOCKING prevents this by blocking access while a transaction is in progress - but locking too much reduces concurrency, and two transactions each waiting for the other’s lock DEADLOCK. Timestamp ordering and serialisation are the alternatives, trading throughput for safety.',
  ),
)

const networks = chapter(
  h('Extended response: why layer a protocol stack?'),
  p(
    'The TCP/IP stack splits communication into Application, Transport, Network and Link layers, each depending only on the layer below. The benefit is that a layer can be replaced without touching the others: moving from copper to fibre changes only the link layer, and every application keeps working unchanged. It also allows different vendors to implement different layers and still interoperate, which is what made the internet possible at all. The cost is overhead - each layer adds its own header - and a fault can be harder to locate because it may sit in any layer.',
  ),
  h('Client–server or peer-to-peer?'),
  p(
    'CLIENT–SERVER centralises data and control, which makes backup, security and administration straightforward, and a single update reaches every client. The costs are the expense of the server, and that it is a SINGLE POINT OF FAILURE - when it goes down, nothing works. It also does not scale gracefully: every extra client adds load to the same machine.',
  ),
  p(
    'PEER-TO-PEER has no central server, so it is cheap, resilient to any one node failing, and gets FASTER as more peers join because each new peer adds capacity as well as demand. The costs are that security and backup are much harder with no central authority, and content cannot easily be controlled.',
  ),
  h('Circuit or packet switching?'),
  p(
    'CIRCUIT switching reserves a dedicated path for the whole conversation, guaranteeing bandwidth and constant latency - good for a phone call. It wastes capacity whenever nobody is speaking. PACKET switching splits data into packets routed independently, so links are shared efficiently and a failed link is simply routed around, but packets may arrive out of order or late, which is why TCP exists to reassemble and retransmit them.',
  ),
  tip(
    'TCP guarantees delivery and order at the cost of latency; UDP does neither but is fast. Live video and gaming choose UDP because a retransmitted frame arrives too late to be useful - a late packet is worse than a lost one. That example converts a definition into applied understanding.',
  ),
)

const webTechnologies = chapter(
  h('Extended response: client-side or server-side processing?'),
  p(
    'CLIENT-SIDE processing - JavaScript in the browser - responds instantly because nothing crosses the network, and it reduces server load, so the same hardware serves more users. Its weaknesses are decisive where they matter: the user can READ and MODIFY the code, so no security check can be trusted there, and the result depends on the user’s browser and device, which vary.',
  ),
  p(
    'SERVER-SIDE processing is hidden from the user, so it can be trusted, and it behaves identically for everyone regardless of their device. It can also reach the database, which client-side code cannot do directly. The costs are a round trip for every operation and load on the server.',
  ),
  p(
    'The judgement is that the two are not alternatives. Validation is done on BOTH sides: client-side for immediate feedback and to avoid pointless round trips, server-side because that is the only check an attacker cannot bypass. Anything involving authentication, payment or database access must be server-side.',
  ),
  h('Search engine indexing and PageRank'),
  p(
    'A web crawler follows links to build an INDEX of words and where they appear, so a search does not have to scan the web at run time. PageRank then orders the results: a page is important if important pages link to it, which is recursive - the rank of each page depends on the ranks of those linking to it, weighted by how many links each of those pages gives out. A link from a highly ranked page that links rarely is worth more than many links from pages that link to everything.',
  ),
  h('Compression and caching on the web'),
  p(
    'Compressing assets reduces bandwidth and load time, which matters most on mobile connections; the cost is processing time at both ends. Caching goes further by avoiding the transfer entirely, at the risk of serving stale content - which is why cache expiry policy exists.',
  ),
)

/* ------------------------------------------------- COMPONENT 02 */

const dataTypes = chapter(
  h('Extended response: floating point range against precision'),
  p(
    'A fixed number of bits is split between mantissa and exponent, so the two properties trade directly against each other. Giving more bits to the EXPONENT widens the range of magnitudes representable - very large and very small numbers become expressible - but leaves fewer mantissa bits, so each number is stored to fewer significant figures and rounding errors grow. Giving more bits to the MANTISSA does the reverse.',
  ),
  p(
    'FIXED point, by contrast, puts the binary point at a set position. It is faster to compute with and has consistent absolute precision, which is why it is used in financial calculations where every value has two decimal places and rounding must be predictable. Its range is far narrower.',
  ),
  p(
    'The judgement is that the choice follows the data. Scientific work spanning many orders of magnitude needs floating point. Currency needs fixed point, because floating-point rounding on repeated additions accumulates errors that are unacceptable when the totals must balance exactly.',
  ),
)

const dataStructures = chapter(
  h('Extended response: array or linked list?'),
  p(
    'An ARRAY is contiguous, so element n is found by arithmetic in O(1) - the fastest possible access. The costs are that the size is fixed at creation, so it either wastes memory or runs out, and inserting into the middle means shifting every later element, which is O(n).',
  ),
  p(
    'A LINKED LIST grows and shrinks as needed and inserts in O(1) once the position is found, because only two pointers change. The costs are that finding that position takes O(n) traversal from the head, each node carries pointer overhead, and the nodes are scattered in memory, so it loses the cache benefit that contiguous storage gives.',
  ),
  p(
    'The judgement rests on the ACCESS PATTERN. Frequent random access with a known size favours the array. Frequent insertion and deletion at unpredictable positions favours the linked list. A queue implemented as a linked list avoids the shifting an array queue needs - which is why circular arrays exist as the compromise.',
  ),
  h('Why a hash table is not always the answer'),
  p(
    'A hash table gives O(1) average access, which beats every tree. But that is an AVERAGE: with a poor hash function or a full table, collisions cluster and performance degrades toward O(n). It also stores nothing in order, so it cannot answer "give me everything between these two values" or produce sorted output - which a binary search tree does naturally with an in-order traversal. Where ordering matters, the tree wins despite the slower lookup.',
  ),
)

const boolean = chapter(
  h('Why simplify a Boolean expression?'),
  p(
    'Every operator in an expression is physical hardware. Simplifying from six gates to three halves the component count, which reduces manufacturing cost, power consumption, heat and physical size, and shortens the propagation delay so the circuit runs faster. In a chip with billions of gates these savings compound enormously - which is why K-maps and De Morgan’s laws are engineering tools rather than academic exercises.',
  ),
  tip(
    'When a question asks you to simplify, the marks are for the WORKING: name the law used at each step. An unexplained correct answer scores less than a justified one.',
  ),
)

const algorithms = chapter(
  h('Extended response: merge sort or quick sort?'),
  p(
    'MERGE SORT is O(n log n) in every case, including the worst - its performance is guaranteed regardless of the input. It is also stable, preserving the order of equal elements. Its cost is memory: it needs O(n) additional space for the merge, which matters on constrained hardware and on very large data sets.',
  ),
  p(
    'QUICK SORT is usually faster in practice despite the same average complexity, because it sorts IN PLACE and has better cache behaviour. Its weakness is the worst case: a consistently bad pivot - for instance always choosing the first element on already-sorted data - degrades it to O(n²). Choosing the median of three, or a random pivot, makes that case vanishingly unlikely without eliminating it in principle.',
  ),
  p(
    'The judgement depends on what the situation cannot tolerate. Where a guaranteed bound is required - a real-time system, or sorting untrusted input that an attacker could craft to trigger the worst case - merge sort’s consistency is worth the memory. Where memory is tight and average speed matters most, quick sort wins. Where the data is nearly sorted and small, insertion sort beats both, which is why real library sorts are hybrids that switch algorithm by size.',
  ),
  h('Extended response: Dijkstra or A*?'),
  p(
    'Dijkstra explores outward from the start in every direction, guaranteeing the shortest path but examining many nodes that lead away from the destination. A* adds a HEURISTIC estimate of the distance remaining, which steers the search toward the goal and so examines far fewer nodes. A* still guarantees the shortest path, but only if the heuristic never OVERESTIMATES the true remaining distance - an admissible heuristic. If it overestimates, A* is faster still but may return a sub-optimal route. That condition is the whole answer to "when would you not use A*".',
  ),
)

const computationalThinking = chapter(
  h('Why abstraction is the hardest of the four'),
  p(
    'Decomposition and pattern recognition are mechanical once you know the problem. Abstraction requires a judgement about what can safely be DISCARDED, and that judgement can only be made against the purpose. The London Tube map removes true geography and is far more useful for its purpose than an accurate map would be - but it is useless for judging walking distance between stations, which is exactly the information the abstraction threw away.',
  ),
  p(
    'That is the general risk: an abstraction is only valid for the purpose it was designed for, and failures happen when a model is reused outside the assumptions it was built on. A good answer names both the detail removed AND the purpose that justifies removing it.',
  ),
)

const computationalMethods = chapter(
  h('Extended response: when is a heuristic the right answer?'),
  p(
    'The travelling salesman problem with twenty cities has more possible routes than could be checked in the lifetime of the universe. The exact answer exists, and the problem is computable, but it is INTRACTABLE - the time grows factorially, so it is unavailable in practice. A heuristic such as "always go to the nearest unvisited city" returns a good route in milliseconds.',
  ),
  p(
    'The cost is precisely stated: there is NO GUARANTEE the answer is optimal, and usually no way to know how far from optimal it is. So a heuristic is right where an approximate answer now is worth more than an exact answer too late - route planning, scheduling, timetabling - and wrong where correctness is the requirement, such as a cryptographic proof or a safety calculation.',
  ),
  p(
    'This connects to computability. Some problems are intractable but solvable; the HALTING problem is not solvable at all, at any speed, because no program can decide for every program whether it terminates. Distinguishing "too slow" from "impossible" is the distinction the specification is testing.',
  ),
)

const programmingTechniques = chapter(
  h('Extended response: recursion or iteration?'),
  p(
    'Recursion expresses naturally recursive problems - tree traversal, divide and conquer, backtracking - in far less code, and the code matches the structure of the problem, so it is easier to reason about. The cost is real: every call pushes a stack frame holding parameters, local variables and a return address, so memory use grows with depth and deep recursion causes a STACK OVERFLOW. There is also the overhead of the calls themselves.',
  ),
  p(
    'Iteration uses constant stack space and is generally faster, but expressing a tree traversal iteratively means managing an explicit stack yourself - you have not removed the stack, only moved it, and the code is longer and easier to get wrong.',
  ),
  p(
    'The judgement: prefer recursion where the problem is recursive and the depth is bounded by something like log n, as in a balanced tree. Prefer iteration where the depth could be large or unbounded, or where the routine is performance-critical.',
  ),
  h('Why global variables cause problems'),
  p(
    'A global variable can be read and written from anywhere, so when its value is wrong there is no small region of code to inspect - any line in the program could be responsible. It also creates hidden dependencies between routines that appear unrelated, so changing one breaks another, and it prevents the same routine being safely reused elsewhere. Local variables and parameters make the data flow explicit, which is what makes a program maintainable.',
  ),
)

const paradigms = chapter(
  h('Extended response: why object-oriented for a large system?'),
  p(
    'ENCAPSULATION is the argument. Because attributes are private and reachable only through the class’s own methods, the class controls every change to its own state - so it can validate, and a bug elsewhere cannot corrupt it. That containment is what keeps a system with millions of lines maintainable: a change inside a class cannot affect anything that only uses its public interface.',
  ),
  p(
    'INHERITANCE removes duplication, so a fix applied to the superclass propagates everywhere. POLYMORPHISM lets new subclasses be added without changing the code that uses them, because the correct method is selected at runtime by the object’s actual type.',
  ),
  p(
    'The costs are genuine. OOP has a steeper learning curve, adds runtime overhead from dynamic dispatch, and encourages over-engineering - deep inheritance hierarchies become as tangled as the code they replaced, and a change to a superclass can break subclasses in ways that are hard to trace. For a short script or a performance-critical embedded routine, procedural code is simply better suited.',
  ),
  tip(
    'The judgement is about SCALE and lifetime. A program maintained by a team over years benefits enormously from encapsulation. A fifty-line utility does not, and wrapping it in classes makes it worse.',
  ),
)

const ethics = chapter(
  h('Structuring a 12-mark ethics answer'),
  ul([
    'Identify the issue precisely, and say which lens applies - legal, moral, ethical, cultural. They are not interchangeable and the mark scheme rewards separating them.',
    'Give the argument on one side with a developed consequence, naming who is affected.',
    'Give the argument on the other side to the same depth. A one-sided answer is capped at Level 2 however detailed it is.',
    'Reach a JUDGEMENT and support it - say what the answer depends on, and which consideration outweighs which.',
  ]),
  h('Worked example: automated decision-making in loan applications'),
  p(
    'The case for is that an algorithm applies the same criteria to every applicant, removing the inconsistency and prejudice of individual human decisions, and it processes applications in seconds at negligible cost, so credit reaches people a manual process would never have time to assess.',
  ),
  p(
    'The case against is that the model learns from historical decisions, so where past lending discriminated, the model reproduces that discrimination - and does so at scale, consistently, and behind an appearance of objectivity that makes it harder to challenge. A human decision can be questioned and explained; a model with thousands of weights often cannot, which conflicts with the right under data protection law to an explanation of an automated decision.',
  ),
  p(
    'The judgement: the technology is not the problem - the TRAINING DATA and the absence of accountability are. Automation is defensible where the model is auditable, where its error rates across groups are measured, and where a human can review an adverse decision. Without those, it converts a contestable human judgement into an unaccountable one, and consistency at scale becomes a harm rather than a benefit.',
  ),
)

export const CS_EXTRA_DEPTH = {
  'Input, Output and Storage': inputOutputStorage,
  'Systems Software': systemsSoftware,
  'Applications Generation (Translators)': translators,
  'Software Development Methodologies': methodologies,
  'Compression, Encryption and Hashing': compression,
  Databases: databases,
  Networks: networks,
  'Web Technologies': webTechnologies,
  'Data Types and Number Representation': dataTypes,
  'Data Structures': dataStructures,
  'Boolean Algebra': boolean,
  'Algorithms: Searching, Sorting & Graph Traversal': algorithms,
  'Elements of Computational Thinking': computationalThinking,
  'Computational Methods': computationalMethods,
  'Programming Techniques': programmingTechniques,
  'Programming Paradigms': paradigms,
  'Legal, Moral, Cultural and Ethical Issues': ethics,
}
