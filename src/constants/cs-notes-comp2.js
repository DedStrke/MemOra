/*
  OCR H446 Computer Science: data, algorithms, programming and the ethical
  issues.

  This half is where Component 02 lives, so the emphasis is on the things
  that are actually WRITTEN in an exam - number conversions with working,
  algorithm complexity, data structure operations and code constructs - 
  rather than on definitions to recite.
*/

import { h, p, ul, rule, method, worked, pitfalls, diagram, tip, table, chapter } from './maths-notes-build'

/* ============================== DATA TYPES AND NUMBER REPRESENTATION */

const dataTypes = chapter(
  table(
    ['Type', 'Holds'],
    [
      ['Integer', 'Whole numbers'],
      ['Real / float', 'Numbers with a fractional part'],
      ['Character', 'A single character'],
      ['String', 'A sequence of characters'],
      ['Boolean', 'True or False'],
    ],
  ),
  h('Number bases'),
  method('Denary to binary', [
    'Write the place values: 128 64 32 16 8 4 2 1.',
    'Work from the LEFT: if the place value fits in what remains, write 1 and subtract it; otherwise write 0.',
    'Continue to the end.',
  ]),
  worked('Convert 202 to 8-bit binary.', [
    '128 fits: 1, remainder 74',
    '64 fits: 1, remainder 10',
    '32 no, 16 no: 0 0',
    '8 fits: 1, remainder 2. 4 no: 0. 2 fits: 1, remainder 0. 1 no: 0',
    'Answer: 11001010',
  ]),
  p('HEXADECIMAL groups binary into fours, so 11001010 is 1100 1010 = C A = CA. It is used because it is far shorter to write and easier to read than long binary strings.'),
  h('Signed binary'),
  diagram('twos-complement'),
  rule('Two’s complement', 'The most significant bit is NEGATIVE. In 8 bits it is worth −128, so 10110000 = −128 + 32 + 16 = −80.'),
  method('Negating a number in two’s complement', [
    'Write the positive value in binary.',
    'INVERT every bit.',
    'ADD 1.',
  ]),
  worked('Represent −20 in 8-bit two’s complement.', [
    '20 = 00010100',
    'Invert: 11101011',
    'Add 1: 11101100',
    'Check: −128 + 64 + 32 + 8 + 4 = −20 ✓',
  ]),
  h('Floating point'),
  diagram('floating-point'),
  rule('Normalised form', 'The mantissa holds the digits, the exponent says where the binary point sits. A normalised POSITIVE number starts 0.1; a normalised NEGATIVE number starts 1.0.'),
  p(
    'Moving bits from the mantissa to the exponent buys RANGE at the cost of PRECISION, and vice versa. That trade-off is the standard exam question on this topic.',
  ),
  h('Character sets'),
  ul([
    'ASCII uses 7 bits, so 128 characters - enough for English only.',
    'UNICODE uses more bits and covers every writing system, at the cost of larger files.',
  ]),
  pitfalls([
    'In two’s complement the leading bit is worth NEGATIVE its place value, not just a sign flag.',
    'Binary addition overflow: if the result needs more bits than are available, the answer wraps and is wrong. State when overflow occurs.',
    'A left shift multiplies by 2, a right shift divides by 2 - but a right shift on an odd number loses the remainder.',
    'Normalisation exists to make the representation UNIQUE and to keep the most significant digits.',
  ]),
)

/* ================================================== DATA STRUCTURES */

const dataStructures = chapter(
  table(
    ['Structure', 'Behaviour', 'Typical use'],
    [
      ['Array', 'Fixed size, contiguous, indexed - O(1) access by index', 'When the size is known'],
      ['Record', 'Fields of different types grouped together', 'A row of data about one thing'],
      ['List', 'Ordered, can grow, may be non-contiguous', 'General-purpose collection'],
      ['Tuple', 'Immutable ordered set', 'Values that must not change'],
      ['Stack', 'LIFO - push and pop at one end only', 'Undo, call stack, reversing, expression evaluation'],
      ['Queue', 'FIFO - enqueue at the rear, dequeue at the front', 'Print spooler, buffering, scheduling'],
    ],
  ),
  diagram('stack-queue'),
  h('Linked lists'),
  diagram('linked-list'),
  p(
    'Each node holds DATA and a POINTER to the next node. The last node points to null. Insertion and deletion are cheap because only pointers change - but you cannot jump to element n, you must traverse from the head, so access is O(n) rather than O(1).',
  ),
  h('Trees'),
  diagram('binary-tree')
  ,
  p('A BINARY SEARCH TREE keeps everything smaller than a node in its left subtree and everything larger in its right, which makes searching O(log n) when balanced.'),
  table(
    ['Traversal', 'Order', 'Use'],
    [
      ['In-order', 'Left, Node, Right', 'Outputs a binary search tree in SORTED order'],
      ['Pre-order', 'Node, Left, Right', 'Copying a tree; prefix expressions'],
      ['Post-order', 'Left, Right, Node', 'Deleting a tree; postfix (RPN) expressions'],
    ],
  ),
  h('Graphs and hash tables'),
  ul([
    'A GRAPH has vertices and edges; it may be directed or undirected, weighted or unweighted.',
    'Represented as an ADJACENCY MATRIX (fast lookup, wasteful for sparse graphs) or an ADJACENCY LIST (compact for sparse graphs, slower lookup).',
    'A HASH TABLE gives O(1) access by turning the key straight into an index - see the hashing topic for collisions.',
  ]),
  pitfalls([
    'A stack is LIFO and a queue is FIFO. Naming the wrong one loses every following mark.',
    'For a stack implemented with a `top` pointer, INCREMENT then write on push; read then DECREMENT on pop. The order matters.',
    'Check for overflow before pushing and underflow before popping.',
    'In-order traversal is the one that produces sorted output - that is why it is the most examined.',
  ]),
)

/* =================================================== BOOLEAN ALGEBRA */

const boolean = chapter(
  diagram('logic-gates'),
  h('Boolean identities'),
  table(
    ['Law', 'Statement'],
    [
      ['De Morgan’s', '¬(A ∧ B) ≡ ¬A ∨ ¬B  and  ¬(A ∨ B) ≡ ¬A ∧ ¬B'],
      ['Distribution', 'A ∧ (B ∨ C) ≡ (A ∧ B) ∨ (A ∧ C)'],
      ['Association', 'A ∨ (B ∨ C) ≡ (A ∨ B) ∨ C'],
      ['Commutation', 'A ∧ B ≡ B ∧ A'],
      ['Absorption', 'A ∨ (A ∧ B) ≡ A'],
      ['Double negation', '¬¬A ≡ A'],
    ],
  ),
  tip('De Morgan’s law is the one that is actually tested: break the bar, change the sign. Move the negation onto each term and swap AND for OR.'),
  h('Karnaugh maps'),
  diagram('karnaugh-map'),
  method('Simplifying with a K-map', [
    'Draw the grid with columns ordered 00, 01, 11, 10 - so neighbours differ in ONE variable only.',
    'Fill in the 1s from the truth table.',
    'Loop the LARGEST possible blocks of 1s, in powers of two: 1, 2, 4 or 8.',
    'Loops may overlap and may wrap around the edges.',
    'Within each loop, whichever variable CHANGES drops out; write the term from those that stay constant.',
    'OR the terms together.',
  ]),
  h('Adders and flip-flops'),
  ul([
    'A HALF ADDER adds two bits: the sum is A XOR B, the carry is A AND B. It cannot accept a carry in.',
    'A FULL ADDER adds two bits plus a carry in, producing a sum and a carry out - chain them to add multi-bit numbers.',
    'A D-TYPE FLIP-FLOP stores one bit, changing state on a clock edge. It is the basis of registers and memory.',
  ]),
  pitfalls([
    'K-map column order is 00, 01, 11, 10 - a Gray code. Using 00, 01, 10, 11 makes the grouping invalid.',
    'Group in powers of two only. A group of three is not allowed.',
    'The half adder has no carry IN - that is exactly what distinguishes it from a full adder.',
  ]),
)

/* ===================================================== ALGORITHMS */

const algorithms = chapter(
  h('Big-O complexity'),
  diagram('big-o'),
  table(
    ['Order', 'Meaning', 'Example'],
    [
      ['O(1)', 'Constant - independent of n', 'Hash table lookup; array access by index'],
      ['O(log n)', 'Halves the problem each step', 'Binary search'],
      ['O(n)', 'Linear', 'Linear search; traversing a list'],
      ['O(n log n)', 'The best a comparison sort can do', 'Merge sort, quick sort (average)'],
      ['O(n²)', 'Nested loops', 'Bubble, insertion and selection sort'],
      ['O(2ⁿ)', 'Exponential - intractable beyond small n', 'Naive recursive Fibonacci; brute-force subsets'],
    ],
  ),
  h('Searching'),
  diagram('binary-search'),
  table(
    ['Algorithm', 'Complexity', 'Requires'],
    [
      ['Linear search', 'O(n)', 'Nothing - works on any list'],
      ['Binary search', 'O(log n)', 'The list must be SORTED'],
    ],
  ),
  h('Sorting'),
  diagram('merge-sort'),
  table(
    ['Algorithm', 'Best', 'Average', 'Worst', 'Notes'],
    [
      ['Bubble', 'O(n)', 'O(n²)', 'O(n²)', 'Simple; best case only with a swap-check flag on sorted data'],
      ['Insertion', 'O(n)', 'O(n²)', 'O(n²)', 'Good on nearly-sorted data; used inside hybrid sorts'],
      ['Merge', 'O(n log n)', 'O(n log n)', 'O(n log n)', 'Consistent, but needs extra MEMORY for the merge'],
      ['Quick', 'O(n log n)', 'O(n log n)', 'O(n²)', 'Fast in practice, in-place, but worst case on a bad pivot'],
    ],
  ),
  diagram('insertion-sort'),
  h('Graph traversal and shortest path'),
  diagram('dijkstra-graph'),
  ul([
    'BREADTH-FIRST uses a QUEUE and visits all neighbours before going deeper - finds the shortest path in an unweighted graph.',
    'DEPTH-FIRST uses a STACK (or recursion) and follows one path as far as possible - used for maze solving and topological sorting.',
    'DIJKSTRA finds the shortest path in a WEIGHTED graph, always expanding the nearest unvisited node.',
    'A* improves Dijkstra with a HEURISTIC estimating the remaining distance, so it explores fewer nodes.',
  ]),
  pitfalls([
    'Binary search REQUIRES a sorted list. Stating that condition is a mark.',
    'Merge sort is O(n log n) in every case but uses O(n) extra memory. Quick sort is in-place but has an O(n²) worst case. That trade-off is the comparison question.',
    'BFS uses a queue, DFS uses a stack. Swapping them is the standard error.',
    'A* only beats Dijkstra if the heuristic never OVERESTIMATES the remaining distance.',
  ]),
)

/* ======================================== COMPUTATIONAL THINKING */

const computationalThinking = chapter(
  diagram('decomposition'),
  table(
    ['Skill', 'Meaning'],
    [
      ['Abstraction', 'Removing unnecessary detail to focus on what matters - a Tube map works BETTER than an accurate one'],
      ['Decomposition', 'Breaking a problem into sub-problems small enough to solve and test separately'],
      ['Pattern recognition', 'Spotting where a sub-problem has been solved before, so a solution can be reused'],
      ['Algorithmic thinking', 'Expressing a solution as a precise sequence of steps'],
    ],
  ),
  h('Thinking ahead, procedurally and concurrently'),
  ul([
    'THINKING AHEAD - identifying inputs and outputs before starting, and CACHING (pre-computing results likely to be needed).',
    'THINKING PROCEDURALLY - deciding the order of steps and which can be written as reusable procedures.',
    'THINKING CONCURRENTLY - identifying which parts can run at the same time, and where they must synchronise.',
    'THINKING LOGICALLY - identifying the decision points and their conditions.',
  ]),
  h('Abstraction in practice'),
  table(
    ['Type', 'Meaning'],
    [
      ['Representational', 'Removing detail to leave only what is needed - the Tube map'],
      ['Abstraction by generalisation', 'Grouping things by shared characteristics into a hierarchy'],
      ['Data abstraction', 'Hiding how data is actually stored - a user of a stack does not know if it is an array or a list'],
      ['Procedural abstraction', 'Hiding how a routine works behind its name and parameters'],
    ],
  ),
  pitfalls([
    'Abstraction is removing detail; decomposition is breaking into parts. They are different and questions test both.',
    'Caching trades MEMORY for speed - say what is being traded, not just that it is faster.',
    'Concurrency needs synchronisation, and without it you get race conditions. Mention the cost, not just the benefit.',
  ]),
)

/* ================================================ COMPUTATIONAL METHODS */

const computationalMethods = chapter(
  diagram('divide-conquer'),
  table(
    ['Method', 'How it works', 'Used for'],
    [
      ['Divide and conquer', 'Split in half, solve each half the same way, combine', 'Merge sort, binary search'],
      ['Backtracking', 'Explore a path; when it fails, retreat to the last decision point and try another', 'Maze solving, Sudoku, constraint problems'],
      ['Heuristics', 'A rule of thumb giving a GOOD ENOUGH answer quickly where the exact answer is intractable', 'Travelling salesman, route planning'],
      ['Data mining', 'Finding patterns in very large data sets', 'Retail, medicine, fraud detection'],
      ['Performance modelling', 'Simulating a system to test it without building it', 'Load testing, safety-critical systems'],
      ['Pipelining', 'Overlapping stages so several are in progress at once', 'Processor design, production lines'],
      ['Visualisation', 'Presenting data graphically to reveal patterns humans would miss', 'Analysis and reporting'],
    ],
  ),
  h('Problem recognition'),
  p(
    'Some problems are TRACTABLE - solvable in reasonable time. Others are INTRACTABLE: solvable in principle but not within a useful time as n grows, because the complexity is exponential. Some are not computable at all - the halting problem is the standard example.',
  ),
  tip(
    'The evaluation for any heuristic is the same: it gives a good answer fast, but with NO GUARANTEE it is optimal. Name that trade-off explicitly.',
  ),
  pitfalls([
    'Intractable does not mean impossible - it means impractical for large n. Be precise.',
    'Backtracking is not the same as brute force: it abandons a path as soon as it cannot lead to a solution, which is why it is faster.',
    'A heuristic sacrifices optimality for speed. Saying only that it is "faster" misses half the answer.',
  ]),
)

/* ============================================ PROGRAMMING TECHNIQUES */

const programmingTechniques = chapter(
  h('The three programming constructs'),
  table(
    ['Construct', 'Meaning'],
    [
      ['Sequence', 'Statements executed in order'],
      ['Selection', 'if / elseif / else, and switch–case'],
      ['Iteration', 'COUNT-controlled (for) when the number of repeats is known; CONDITION-controlled (while, do–until) when it is not'],
    ],
  ),
  h('Subroutines'),
  table(
    ['', 'Function', 'Procedure'],
    [
      ['Returns a value', 'Yes', 'No'],
      ['Used', 'In an expression', 'As a statement'],
    ],
  ),
  ul([
    'Parameters passed BY VALUE send a copy - changes inside do not affect the original.',
    'Parameters passed BY REFERENCE send the address - changes inside DO affect the original.',
    'A LOCAL variable exists only inside its subroutine; a GLOBAL one is visible everywhere and should be avoided because any part of the program can change it.',
  ]),
  h('Recursion'),
  diagram('recursion'),
  p(
    'A recursive routine calls itself with a smaller input, and must have a BASE CASE that stops it. Each call pushes a stack frame holding its own local variables and return address; the answers unwind back up once the base case is reached.',
  ),
  table(
    ['Recursion', 'Iteration'],
    [
      ['Shorter and often clearer for naturally recursive problems (trees, divide and conquer)', 'Usually faster and uses less memory'],
      ['Every call uses stack space - deep recursion causes a STACK OVERFLOW', 'No stack growth'],
    ],
  ),
  h('IDE features'),
  ul([
    'Syntax highlighting, auto-indent and auto-complete speed up writing.',
    'A DEBUGGER lets you set breakpoints, single-step, and watch variables - the fastest way to find a logic error.',
    'A stepper and variable watch together show exactly where the value goes wrong, which is the trace table in software.',
  ]),
  pitfalls([
    'Every recursive routine needs a REACHABLE base case, or the stack overflows. Say "reachable" - a base case that is never met is no better than none.',
    'Passing by value cannot change the caller’s variable. If a question needs it changed, pass by reference.',
    'Global variables are the answer to "why is this program hard to maintain" - any part of the code can alter them.',
    'A `while` loop may run zero times; a `do–until` always runs at least once. That difference is regularly tested.',
  ]),
)

/* ================================================ PROGRAMMING PARADIGMS */

const paradigms = chapter(
  table(
    ['Paradigm', 'Idea', 'Suits'],
    [
      ['Procedural', 'Sequence of instructions grouped into procedures acting on data', 'General-purpose tasks; straightforward to learn'],
      ['Object-oriented', 'Objects bundle data and the methods that act on it', 'Large systems; code reuse; modelling real entities'],
      ['Assembly / low-level', 'Direct instructions to the processor', 'Embedded systems, device drivers, where speed and size are critical'],
    ],
  ),
  h('Object-oriented programming'),
  diagram('class-diagram'),
  table(
    ['Concept', 'Meaning'],
    [
      ['Class', 'A template defining attributes and methods'],
      ['Object', 'An instance of a class'],
      ['Instantiation', 'Creating an object from a class'],
      ['Encapsulation', 'Attributes are PRIVATE, accessed only through public methods - so the object controls its own state'],
      ['Inheritance', 'A subclass gains the attributes and methods of its superclass and can add its own'],
      ['Polymorphism', 'The same method call behaves differently depending on the object’s actual class, decided at runtime'],
      ['Overriding', 'A subclass replaces an inherited method with its own version'],
    ],
  ),
  tip(
    'Encapsulation is the one to lead with in an evaluation: because attributes are private, the class controls every change to its own data, so a bug in one class cannot corrupt another. That is what makes large OOP systems maintainable.',
  ),
  h('Assembly language and LMC'),
  table(
    ['Instruction', 'Meaning'],
    [
      ['LDA', 'Load from an address into the accumulator'],
      ['STA', 'Store the accumulator into an address'],
      ['ADD / SUB', 'Add or subtract from the accumulator'],
      ['BRA', 'Branch always'],
      ['BRZ / BRP', 'Branch if zero / branch if positive'],
      ['INP / OUT', 'Input to, or output from, the accumulator'],
      ['HLT', 'Stop'],
    ],
  ),
  ul([
    'Addressing modes: IMMEDIATE (the operand is the value), DIRECT (the operand is the address), INDIRECT (the operand is the address OF the address), INDEXED (add an index register to the address).',
  ]),
  pitfalls([
    'Encapsulation means PRIVATE attributes with public accessors. Providing a public setter for everything throws away the benefit.',
    'Polymorphism is resolved at RUNTIME by the object’s actual type - that is what makes it different from simply having two methods.',
    'Inheritance models an "is-a" relationship. If it is really "has-a", use composition instead.',
  ]),
)

/* ============================== LEGAL, MORAL AND ETHICAL ISSUES */

const ethics = chapter(
  diagram('legislation-map'),
  table(
    ['Act', 'What it covers'],
    [
      ['Data Protection Act', 'How PERSONAL DATA is held: fairly and lawfully, accurate, adequate and not excessive, kept no longer than necessary, secure. Data subjects have rights of access, rectification and erasure.'],
      ['Computer Misuse Act', 'Three offences: unauthorised ACCESS; unauthorised access with INTENT to commit a further offence; unauthorised MODIFICATION of data.'],
      ['Copyright, Designs and Patents Act', 'Protects original work - software, music, text - as intellectual property.'],
      ['Regulation of Investigatory Powers Act', 'When the state may intercept communications and demand access to data.'],
    ],
  ),
  tip(
    'Questions give a scenario and ask which Act applies. Match the CONDUCT: personal data held → DPA; unauthorised access → CMA; copying a work → Copyright; state interception → RIPA. Then justify against the specific clause.',
  ),
  h('Ethical and cultural issues'),
  table(
    ['Issue', 'The argument on each side'],
    [
      ['Automation and employment', 'Raises productivity and removes dangerous work - but displaces workers whose skills do not transfer, concentrated in particular regions'],
      ['Privacy and surveillance', 'Improves security and service - but erodes practical anonymity, and function creep extends collection beyond its original purpose'],
      ['Algorithmic bias', 'Automated decisions are consistent and scalable - but a system trained on biased data reproduces that bias at scale, and error rates differ between groups'],
      ['The digital divide', 'Technology widens opportunity - but only for those with access, so it can entrench existing inequality'],
      ['Environmental impact', 'Digital services replace physical ones - but data centres consume vast energy and devices create e-waste'],
      ['Censorship and free speech', 'Moderation reduces harm - but who decides, and against whose values?'],
    ],
  ),
  p(
    'The Computer Ethics Institute and the BCS Code of Conduct set professional standards: act in the public interest, maintain competence, and be honest about limitations.',
  ),
  pitfalls([
    'Say which LENS you are using - legal, moral, ethical or cultural. They give different answers and the mark scheme rewards distinguishing them.',
    'For a 12-marker you must give BOTH sides and reach a conclusion. A one-sided answer is capped at Level 2 however detailed.',
    'Apply the Act to the scenario given, do not just define it. The application marks outnumber the knowledge marks.',
  ]),
)

export const CS_COMP2_NOTES = {
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
