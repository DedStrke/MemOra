/*
  OCR H446 Computer Science - three chapters the outline did not have.

  The specification examines each of these as its own thing, at length,
  and the existing chapters only touched them in passing:

    1.2.4  Assembly language and the Little Man Computer, with the four
           addressing modes - the "write/trace this LMC program" question
           is on nearly every Paper 1.
    2.3.1  Algorithm complexity - Big O is asked directly ("state the time
           complexity of...") and indirectly ("which algorithm would you
           choose and why"), and a student who can only recite the table
           cannot do the second.
    1.2.4 / 2.2.1  Object-oriented programming - Paper 2 sets whole class
           definitions in the exam reference language, and the marks are
           in the syntax (constructor, private attributes, inherits,
           super), not in the concept.

  Same builders as the rest of the CS notes. Pseudocode goes through
  `code()` so it is kept verbatim - identifiers with underscores would
  otherwise be read as italics.
*/

import { h, p, ul, rule, method, worked, pitfalls, diagram, tip, table, code, chapter } from './maths-notes-build'

/* ================================================ ASSEMBLY & LMC */

const assembly = chapter(
  rule(
    'Assembly language',
    'A LOW-LEVEL language in which each instruction is a mnemonic (ADD, LDA, BRZ) that corresponds directly to ONE machine-code instruction of a specific processor. It is translated by an ASSEMBLER.',
  ),
  p(
    'Assembly sits one step above machine code. The programmer still thinks in terms of the processor - registers, memory addresses, single operations - but writes mnemonics instead of binary. Because the mapping is one-to-one, assembly is specific to a processor family: ARM assembly will not run on an x86 chip. That is exactly why high-level languages exist, and exactly why assembly is still used where the programmer must control the hardware precisely: device drivers, embedded systems, the innermost loop of a game engine, and anything where every byte and every cycle counts.',
  ),
  table(
    ['', 'Assembly language', 'High-level language'],
    [
      ['Relationship to machine code', 'One instruction = one machine instruction', 'One statement = many machine instructions'],
      ['Portability', 'Specific to one processor architecture', 'Runs on any processor with a compiler/interpreter'],
      ['Speed and size of code', 'Can be the fastest and smallest possible', 'Compiler output is usually good but rarely optimal'],
      ['Ease of writing', 'Slow, error-prone, hard to read', 'Fast to write, close to English, easier to debug'],
      ['Typical use', 'Drivers, embedded systems, performance-critical routines', 'Almost everything else'],
    ],
  ),
  h('The Little Man Computer'),
  p(
    'The LMC is a simplified model of a von Neumann machine used to teach assembly. It has 100 memory locations (mailboxes 00 to 99), a single ACCUMULATOR, a program counter, an in-tray and an out-tray. Instructions and data share the same memory, and each instruction is a three-digit number: the first digit is the OPCODE, the last two are the ADDRESS (operand). A label is just a name for an address, and the assembler replaces it with the number.',
  ),
  diagram('lmc'),
  table(
    ['Mnemonic', 'Code', 'What it does'],
    [
      ['INP', '901', 'Take a value from the in-tray into the accumulator'],
      ['OUT', '902', 'Copy the accumulator to the out-tray'],
      ['LDA addr', '5xx', 'LOAD the value at addr into the accumulator'],
      ['STA addr', '3xx', 'STORE the accumulator into addr (accumulator keeps its value)'],
      ['ADD addr', '1xx', 'Add the value at addr to the accumulator'],
      ['SUB addr', '2xx', 'Subtract the value at addr from the accumulator'],
      ['BRA addr', '6xx', 'BRANCH ALWAYS: set the program counter to addr'],
      ['BRZ addr', '7xx', 'Branch if the accumulator is ZERO'],
      ['BRP addr', '8xx', 'Branch if the accumulator is POSITIVE (zero counts as positive)'],
      ['HLT', '000', 'Stop'],
      ['DAT', '-', 'Not an instruction: reserve a memory location, optionally with a starting value'],
    ],
  ),
  tip(
    'BRP branches on zero as well as on positive - it really means "not negative". "Is x greater than y?" is therefore SUB then BRP with the branch taken when x is greater than OR equal. To test strictly greater, subtract and then subtract one more, or test BRZ first.',
  ),
  h('Reading and writing LMC programs'),
  p(
    'Every LMC program has the same skeleton: instructions first, HLT, then the DAT lines that name the data. Three patterns account for almost every exam question - a straight calculation, a selection (an if), and a loop. Learn the shape of each.',
  ),
  worked('Input two numbers and output their sum.', [
    'INP',
    'STA first',
    'INP',
    'ADD first',
    'OUT',
    'HLT',
    'first DAT',
    'The first input is saved because INP overwrites the accumulator; the second is then added to the saved copy. "first DAT" reserves the location the label refers to.',
  ]),
  p('A selection: output the larger of two inputs. There is no compare instruction, so subtract and branch on the sign of the result.'),
  code(
    [
      '        INP',
      '        STA a',
      '        INP',
      '        STA b',
      '        SUB a        // acc = b - a',
      '        BRP bigger   // b - a >= 0, so b is at least as big',
      '        LDA a',
      '        OUT',
      '        HLT',
      'bigger  LDA b',
      '        OUT',
      '        HLT',
      'a       DAT',
      'b       DAT',
    ],
    'LMC',
  ),
  p('A loop: count down from an input to zero, outputting each value. The loop condition is tested with BRZ; the counter lives in memory and is decremented by subtracting a DAT that holds 1.'),
  code(
    [
      '        INP',
      '        STA count',
      'loop    LDA count',
      '        BRZ done     // stop when the counter reaches 0',
      '        OUT',
      '        SUB one',
      '        STA count',
      '        BRA loop',
      'done    HLT',
      'count   DAT',
      'one     DAT 1',
    ],
    'LMC',
  ),
  p(
    'Multiplication by repeated addition follows the same loop shape: keep a running total, add the first number to it once per iteration, and decrement the second number until it reaches zero. Division is repeated subtraction with a counter that records how many times it was possible.',
  ),
  code(
    [
      '        INP',
      '        STA x',
      '        INP',
      '        STA n         // multiply x by n',
      'loop    LDA n',
      '        BRZ done',
      '        LDA total',
      '        ADD x',
      '        STA total',
      '        LDA n',
      '        SUB one',
      '        STA n',
      '        BRA loop',
      'done    LDA total',
      '        OUT',
      '        HLT',
      'x       DAT',
      'n       DAT',
      'total   DAT 0',
      'one     DAT 1',
    ],
    'LMC',
  ),
  h('Tracing a program'),
  method('Trace an LMC program by hand', [
    'Draw a column for the accumulator, one for each DAT location, one for the program counter and one for output.',
    'Start at address 00. For each instruction, write the NEW values only in the columns that change.',
    'On a branch, write the address branched to in the PC column; if the branch is not taken, the PC simply moves to the next line.',
    'Stop at HLT. The output column, read top to bottom, is the answer.',
    'Check every BRP against the rule "zero counts as positive" - this is where most trace errors happen.',
  ]),
  worked('Trace the count-down program above with input 2.', [
    'INP: acc = 2. STA count: count = 2.',
    'loop: LDA count → acc = 2. BRZ done: not zero, continue. OUT → output 2.',
    'SUB one → acc = 1. STA count → count = 1. BRA loop.',
    'LDA count → acc = 1. BRZ: no. OUT → output 1. SUB one → 0. STA count → 0. BRA loop.',
    'LDA count → acc = 0. BRZ done: branch taken. HLT.',
    'Output: 2, 1. The value 0 is never printed because the test happens before the OUT.',
  ]),
  h('Addressing modes'),
  p(
    'The operand of an instruction can be interpreted in four ways. The LMC uses only DIRECT addressing, but real assembly languages offer all four, and the specification requires you to explain each with an example. The examples below use a generic syntax where # marks an immediate value.',
  ),
  table(
    ['Mode', 'The operand is...', 'Example', 'Effect'],
    [
      ['Immediate', 'the VALUE itself', 'ADD #5', 'Add the number 5 to the accumulator'],
      ['Direct', 'the ADDRESS holding the value', 'ADD 5', 'Add the contents of location 5'],
      ['Indirect', 'the address of a location that HOLDS the address of the value', 'ADD (5)', 'Look in location 5, read an address, add the contents of THAT location'],
      ['Indexed', 'a base address to which an INDEX REGISTER is added', 'ADD 5, X', 'Add the contents of location (5 + X); incrementing X walks through an array'],
    ],
  ),
  ul([
    'Immediate addressing is fastest - no memory access is needed for the operand - but the value is fixed in the program, so it suits constants.',
    'Direct addressing is the ordinary case: a named variable in memory.',
    'Indirect addressing allows a value to be reached through a POINTER, and lets a program address more memory than the operand field could hold directly. Linked lists and dynamic structures rely on it.',
    'Indexed addressing is how arrays are processed: the base address names the array, the index register names the element, and one loop increments the register.',
  ]),
  tip(
    'When a question says "explain how an array would be accessed in assembly language", the answer is INDEXED addressing: base address of the array plus the index register, with the register incremented each pass of the loop. Name the mode and describe the addition.',
  ),
  pitfalls([
    'Forgetting the DAT lines. Every label used as an operand must be declared, or the assembler has no address to substitute.',
    'Assuming BRP means strictly positive. It branches on zero too.',
    'STA does NOT clear the accumulator. After STA the value is still there, so the next ADD adds to it.',
    'Putting DAT lines before HLT. The processor executes memory in order, so a DAT holding 901 in the middle of the code would be executed as INP.',
    'Mixing up which way SUB goes: SUB x computes accumulator MINUS x, never x minus accumulator.',
  ]),
)

/* ================================================ BIG O */

const bigO = chapter(
  rule(
    'Time complexity',
    'How the number of operations an algorithm performs GROWS as the size of its input, n, grows. Expressed in Big O notation, which keeps only the fastest-growing term and drops constants.',
  ),
  rule(
    'Space complexity',
    'How the amount of additional memory an algorithm needs grows with n. Counted separately from time, and often traded against it.',
  ),
  p(
    'Big O is not a stopwatch. It says nothing about how fast a particular computer runs a particular program; it describes the SHAPE of the growth. An O(n) algorithm on slow hardware will eventually beat an O(n²) algorithm on fast hardware, because doubling n doubles the work of one and quadruples the work of the other, and that gap only widens. That is why the specification asks for Big O rather than seconds.',
  ),
  diagram('big-o'),
  h('The orders you must know'),
  table(
    ['Order', 'Name', 'Doubling n...', 'Typical example'],
    [
      ['O(1)', 'Constant', 'no change', 'Push or pop on a stack; array index lookup; hash table lookup'],
      ['O(log n)', 'Logarithmic', 'adds ONE more step', 'Binary search; searching a balanced binary tree'],
      ['O(n)', 'Linear', 'doubles the work', 'Linear search; one pass through a list; traversing a linked list'],
      ['O(n log n)', 'Linearithmic', 'a little more than doubles', 'Merge sort; quick sort on average; efficient sorting in general'],
      ['O(n²)', 'Quadratic (polynomial)', 'quadruples the work', 'Bubble sort; insertion sort; nested loop over a list'],
      ['O(n³)', 'Cubic (polynomial)', 'multiplies by 8', 'Three nested loops; naive matrix multiplication'],
      ['O(2ⁿ)', 'Exponential', 'squares the work', 'Trying every subset; naive recursive Fibonacci'],
      ['O(n!)', 'Factorial', 'explodes', 'Trying every ordering - brute-force travelling salesman'],
    ],
  ),
  p('The numbers make the point better than the names. For n = 10, 100 and 1000:'),
  table(
    ['n', 'log n', 'n', 'n log n', 'n²', '2ⁿ'],
    [
      ['10', '3', '10', '33', '100', '1,024'],
      ['100', '7', '100', '664', '10,000', '~10³⁰'],
      ['1,000', '10', '1,000', '9,966', '1,000,000', 'more atoms than the universe'],
    ],
  ),
  rule(
    'Tractable and intractable',
    'A problem with a polynomial-time algorithm (O(nᵏ) for some k) is TRACTABLE. One whose best known algorithm is exponential or worse is INTRACTABLE: it can be solved in principle, but not in practice for large n, which is where heuristics come in.',
  ),
  h('Working out the complexity of code'),
  method('From code to Big O', [
    'Identify the input size n - usually the length of the list or the number of items.',
    'A statement that does not depend on n costs O(1).',
    'A loop that runs n times multiplies the cost of its body by n. Two NESTED loops over n give n × n = O(n²).',
    'A loop whose control variable is HALVED (or doubled) each pass runs log₂ n times: O(log n).',
    'Two loops one AFTER the other add: O(n) + O(n) = O(2n) = O(n).',
    'Drop constants and lower-order terms: 3n² + 20n + 7 is O(n²).',
    'For recursion, count the calls: one recursive call with n reduced by 1 is O(n); two calls each with n − 1 is O(2ⁿ); one call with n halved is O(log n).',
  ]),
  code(
    [
      '// A: one loop            -> O(n)',
      'for i = 0 to n - 1',
      '    total = total + items[i]',
      'next i',
      '',
      '// B: nested loops         -> O(n^2)',
      'for i = 0 to n - 1',
      '    for j = 0 to n - 1',
      '        if items[i] == items[j] then count = count + 1',
      '    next j',
      'next i',
      '',
      '// C: halving              -> O(log n)',
      'i = n',
      'while i > 1',
      '    i = i DIV 2',
      'endwhile',
      '',
      '// D: loop inside halving  -> O(n log n)',
      'i = n',
      'while i > 1',
      '    for j = 0 to n - 1',
      '        process(j)',
      '    next j',
      '    i = i DIV 2',
      'endwhile',
    ],
    'pseudocode',
  ),
  worked('State the time complexity of this function, which returns true if a sorted list contains x.', [
    'low = 0, high = n − 1; while low ≤ high: mid = (low + high) DIV 2; if list[mid] = x return true; if list[mid] < x then low = mid + 1 else high = mid − 1.',
    'Each iteration halves the range being searched.',
    'A range of n items can be halved log₂ n times before one item is left.',
    'Time complexity is O(log n). This is binary search.',
  ]),
  h('Best, average and worst case'),
  p(
    'Big O is normally quoted for the WORST case, because that is the guarantee. But the cases can differ dramatically, and an exam question that gives you the data will expect you to notice. Linear search finds an item at the front in one step (best O(1)) and at the back or absent in n steps (worst O(n)). Quick sort is O(n log n) on average but degrades to O(n²) if the pivot is always the smallest or largest value - which is exactly what happens on already-sorted data with a naive first-element pivot. Insertion sort is the reverse: O(n²) in general but O(n) on data that is already nearly sorted, which is why it is used for small or almost-ordered lists.',
  ),
  h('Complexities of the named algorithms'),
  table(
    ['Algorithm', 'Time (worst)', 'Time (average)', 'Space (extra)', 'Note'],
    [
      ['Linear search', 'O(n)', 'O(n)', 'O(1)', 'Works on unsorted data'],
      ['Binary search', 'O(log n)', 'O(log n)', 'O(1)', 'Data must be sorted'],
      ['Bubble sort', 'O(n²)', 'O(n²)', 'O(1)', 'O(n) best case with an early-exit flag'],
      ['Insertion sort', 'O(n²)', 'O(n²)', 'O(1)', 'O(n) on nearly sorted data'],
      ['Merge sort', 'O(n log n)', 'O(n log n)', 'O(n)', 'Always n log n; needs a second array'],
      ['Quick sort', 'O(n²)', 'O(n log n)', 'O(log n)', 'Fast in practice; bad pivots hurt'],
      ['Stack push/pop, queue enqueue/dequeue', 'O(1)', 'O(1)', '-', 'Pointer update only'],
      ['Hash table insert/lookup', 'O(n)', 'O(1)', 'O(n)', 'Worst case is every key colliding'],
      ['Binary search tree search', 'O(n)', 'O(log n)', '-', 'Degenerates to a list if unbalanced'],
      ['Breadth-first / depth-first traversal', 'O(V + E)', 'O(V + E)', 'O(V)', 'Every vertex and edge visited once'],
      ["Dijkstra's algorithm", 'O(V²) simple; O((V + E) log V) with a heap', '-', 'O(V)', 'V vertices, E edges'],
    ],
  ),
  h('Space complexity in practice'),
  ul([
    'Merge sort needs a second array the size of the input to merge into: O(n) extra space. Bubble and insertion sort swap in place: O(1).',
    'Every recursive call adds a stack frame. A recursive function that goes n deep uses O(n) stack space even if it stores nothing else, and can overflow the stack where an iterative version would not.',
    'A hash table trades space for time: it keeps a large, mostly empty array so that lookups are O(1).',
    'Caching a result (memoisation) trades space for time in the other direction: storing computed values so they are never recomputed turns naive recursive Fibonacci from O(2ⁿ) into O(n).',
  ]),
  h('Choosing an algorithm - what the 6-mark question wants'),
  p(
    'The question is never "which is fastest". It is "which is appropriate for THIS situation", and the answer names the constraint. Data already sorted? Binary search beats linear. Data arrives one item at a time? Insertion sort keeps it ordered cheaply. Memory tight on an embedded device? Quick sort or an in-place sort over merge sort. Need a guaranteed bound, no surprises? Merge sort over quick sort. Tiny list? The O(n²) algorithm may genuinely be faster because it has no overhead. State the complexity, then state the constraint, then choose.',
  ),
  pitfalls([
    'Writing O(2n) or O(n² + n). Big O drops constants and lower terms: those are O(n) and O(n²).',
    'Claiming binary search on an UNSORTED list. Sorting first costs O(n log n), which is more than one linear search.',
    'Saying O(n log n) sorting is "always better" than O(n²). For n = 8, insertion sort usually wins.',
    'Quoting quick sort as O(n log n) without saying "on average". Its worst case is O(n²), and an exam will ask.',
    'Confusing time and space. Merge sort is fast (time) but needs extra memory (space); the trade-off IS the point.',
  ]),
)

/* ================================================ OBJECT-ORIENTED PROGRAMMING */

const oop = chapter(
  rule(
    'Object-oriented programming',
    'A paradigm in which a program is built from OBJECTS - bundles of data (attributes) and the procedures that act on that data (methods) - each created from a CLASS that defines its structure.',
  ),
  p(
    'The whole idea is to keep data and the code that manipulates it together, and to hide the data so that nothing else can corrupt it. A Bank Account object holds its own balance and exposes deposit and withdraw methods; no other part of the program can set the balance to a negative number, because no other part can touch it. That protection, and the ability to build new classes out of existing ones, is what makes large systems manageable.',
  ),
  table(
    ['Term', 'Meaning'],
    [
      ['Class', 'A template that defines the attributes and methods every object of that type will have'],
      ['Object', 'A particular INSTANCE of a class, with its own values for the attributes'],
      ['Attribute', 'A variable belonging to an object (its state)'],
      ['Method', 'A procedure or function belonging to a class, which acts on the object'],
      ['Constructor', 'The special method that runs when an object is created, to set up its attributes. In the exam reference language it is called new'],
      ['Instantiation', 'Creating an object from a class: myDog = new Dog("Rex", 3)'],
      ['Encapsulation', 'Keeping attributes PRIVATE and providing public methods to read or change them'],
      ['Inheritance', 'Defining a new class that takes all the attributes and methods of an existing (parent/super) class and adds or changes some'],
      ['Polymorphism', 'Objects of different classes responding to the SAME method call in their own way'],
    ],
  ),
  diagram('class-diagram'),
  h('Writing a class in the exam reference language'),
  p(
    'OCR sets and expects a specific pseudocode. The marks in a "write the class" question are for the syntax as much as the logic: the class header, attributes declared private, the constructor named new, and methods declared public. Learn this shape exactly.',
  ),
  code(
    [
      'class Dog',
      '    private name',
      '    private age',
      '',
      '    public procedure new(givenName, givenAge)',
      '        name = givenName',
      '        age = givenAge',
      '    endprocedure',
      '',
      '    public function getName()',
      '        return name',
      '    endfunction',
      '',
      '    public procedure setAge(newAge)',
      '        if newAge >= 0 then',
      '            age = newAge',
      '        endif',
      '    endprocedure',
      '',
      '    public procedure speak()',
      '        print("Woof, I am " + name)',
      '    endprocedure',
      'endclass',
      '',
      'rex = new Dog("Rex", 3)',
      'rex.speak()',
      'print(rex.getName())',
    ],
    'exam reference language',
  ),
  ul([
    'Attributes are declared PRIVATE so they cannot be accessed from outside the class - only through the methods. That is encapsulation, and a question will award a mark for the word private.',
    'The constructor is a procedure called new. It is called automatically by new Dog(...) and receives the arguments.',
    'A GETTER (getName) returns an attribute; a SETTER (setAge) changes it, and can VALIDATE the new value - which is the practical reason setters exist.',
    'Methods are called on an OBJECT with dot notation: rex.speak(), never Dog.speak().',
  ]),
  h('Inheritance'),
  p(
    'A subclass INHERITS every attribute and method of its superclass and can add its own or OVERRIDE inherited ones. The subclass constructor normally calls the parent constructor with super.new(...) to set up the inherited attributes, then sets its own. This is the mechanism for "is a" relationships: a GuideDog is a Dog with extra behaviour.',
  ),
  code(
    [
      'class GuideDog inherits Dog',
      '    private owner',
      '',
      '    public procedure new(givenName, givenAge, givenOwner)',
      '        super.new(givenName, givenAge)',
      '        owner = givenOwner',
      '    endprocedure',
      '',
      '    public procedure speak()          // overrides Dog.speak',
      '        print("I am guiding " + owner)',
      '    endprocedure',
      'endclass',
      '',
      'buddy = new GuideDog("Buddy", 5, "Sam")',
      'buddy.speak()        // "I am guiding Sam"',
      'print(buddy.getName())   // inherited from Dog: "Buddy"',
    ],
    'exam reference language',
  ),
  ul([
    'inherits names the parent class. Everything public in Dog is available on a GuideDog object.',
    'super.new(...) runs the parent constructor. Forgetting it is the most common lost mark: the inherited attributes are never set.',
    'Redefining speak() in the subclass OVERRIDES the parent version. Objects of the subclass use theirs; objects of the parent still use the original.',
    'An attribute declared private in Dog is still private in GuideDog: the subclass reaches it through the inherited getters and setters, not directly. Some languages offer a protected level for exactly this; the reference language does not.',
  ]),
  h('Polymorphism'),
  p(
    'Because GuideDog overrides speak(), a list containing Dogs and GuideDogs can be told to speak with one loop, and each object responds in its own way. The calling code does not need to know which subclass it is holding. That is polymorphism - "many forms" - and it is what makes inheritance useful rather than merely tidy: new subclasses can be added without changing the code that uses them.',
  ),
  code(
    [
      'kennel = [new Dog("Rex", 3), new GuideDog("Buddy", 5, "Sam")]',
      'for i = 0 to kennel.length - 1',
      '    kennel[i].speak()      // Woof... then I am guiding Sam',
      'next i',
    ],
    'exam reference language',
  ),
  h('A worked example: a stack as a class'),
  p('Data structures are the natural home of OOP in the exam. A stack class hides its array and pointer, and exposes only the operations that keep the structure valid.'),
  code(
    [
      'class Stack',
      '    private items',
      '    private top',
      '',
      '    public procedure new(size)',
      '        items = new Array(size)',
      '        top = -1',
      '    endprocedure',
      '',
      '    public function isEmpty()',
      '        return top == -1',
      '    endfunction',
      '',
      '    public function isFull()',
      '        return top == items.length - 1',
      '    endfunction',
      '',
      '    public procedure push(value)',
      '        if NOT isFull() then',
      '            top = top + 1',
      '            items[top] = value',
      '        endif',
      '    endprocedure',
      '',
      '    public function pop()',
      '        if isEmpty() then',
      '            return null',
      '        endif',
      '        value = items[top]',
      '        top = top - 1',
      '        return value',
      '    endfunction',
      'endclass',
    ],
    'exam reference language',
  ),
  h('Why use OOP - and when not to'),
  table(
    ['Advantage', 'Why it matters'],
    [
      ['Encapsulation protects data', 'An object cannot be put into an invalid state from outside; bugs are confined to one class'],
      ['Reuse through inheritance', 'Common behaviour is written once in the superclass; subclasses add only what differs'],
      ['Easier to maintain', 'A change to how a class works internally does not affect code that only uses its public methods'],
      ['Models the problem', 'Real-world entities (Customer, Order, Account) map naturally onto classes, which helps design'],
      ['Teams can work in parallel', 'Once the interfaces are agreed, each class can be written and tested independently'],
    ],
  ),
  table(
    ['Disadvantage', 'When it bites'],
    [
      ['More design up front', 'A small script gains nothing from classes and takes longer to write'],
      ['Overhead', 'Object creation and method dispatch cost time and memory - noticeable in tight loops on limited hardware'],
      ['Deep hierarchies obscure behaviour', 'Working out which overridden method actually runs can take a tour of six classes'],
      ['Not every problem is object-shaped', 'A mathematical transformation or a data pipeline often reads better as functions'],
    ],
  ),
  tip(
    'The 9-mark "discuss whether OOP is suitable for this system" question wants BOTH sides applied to the scenario, then a judgement. Large, long-lived, team-built, entity-rich systems: yes. Small, one-off, performance-critical or purely computational programs: probably not. Say which the scenario is and why.',
  ),
  pitfalls([
    'Calling a method on the class instead of an object: Dog.speak() is wrong, rex.speak() is right.',
    'Declaring attributes public. It is legal, but it throws away encapsulation and the mark that goes with the word private.',
    'Naming the constructor after the class (Dog()) or init. In the exam reference language it is new, and it is a procedure.',
    'Omitting super.new(...) in a subclass constructor, so inherited attributes are never initialised.',
    'Describing polymorphism as "inheritance". Inheritance is the relationship; polymorphism is different classes responding differently to the same call.',
  ]),
)

export const CS_COMP3_NOTES = {
  'Assembly Language and the Little Man Computer': assembly,
  'Algorithm Complexity (Big O)': bigO,
  'Object-Oriented Programming': oop,
}
