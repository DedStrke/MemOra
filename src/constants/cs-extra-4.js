/*
  Fourth batch of OCR H446 Computer Science questions.

  Written alongside cs-notes-comp3.js, which added the three chapters the
  outline was missing - Assembly Language and the LMC, Algorithm
  Complexity (Big O), and Object-Oriented Programming - and cs-notes-
  depth-2.js, which deepened the thin ones. Every new chapter gets a full
  set (cards, MCQs, exam questions with mark schemes); the deepened
  chapters get questions on the material that was added, so nothing here
  asks about something the notes do not teach.

  Same conventions as the earlier batches: topic strings match the
  chapter outline in library-extra.js exactly; MCQ correct answers are
  spread across all four positions; mark schemes list marking points and
  end with a "Final answer:" line to self-mark a whole response against.
  No em dashes.
*/

const c = (topic, front, back) => ({ topic, front, back })
const m = (topic, question, options, answer, explanation) => ({ topic, question, options, answer, explanation })
const q = (topic, question, marks, markScheme) => ({ topic, question, marks, markScheme })

const LMC = 'Assembly Language and the Little Man Computer'
const BIGO = 'Algorithm Complexity (Big O)'
const OOP = 'Object-Oriented Programming'
const CT = 'Elements of Computational Thinking'
const AD = 'Analysis and Design (Systems Life Cycle)'
const IOS = 'Input, Output and Storage'
const BOOL = 'Boolean Algebra'
const DT = 'Data Types and Number Representation'
const DS = 'Data Structures'
const DB = 'Databases'
const NET = 'Networks'
const SYS = 'Systems Software'
const LAW = 'Legal, Moral, Cultural and Ethical Issues'
const PT = 'Programming Techniques'
const CM = 'Computational Methods'

/* ====================================================== FLASHCARDS */

export const CS_EXTRA_FLASHCARDS_4 = [
  // ---- Assembly & LMC
  c(LMC, 'What is assembly language?', 'A low-level language whose mnemonics correspond one-to-one with the machine-code instructions of a specific processor; translated by an assembler.'),
  c(LMC, 'Why is assembly language not portable?', 'Each instruction maps to one machine instruction of a particular processor architecture, so code written for one (e.g. ARM) will not run on another (e.g. x86).'),
  c(LMC, 'Give two situations where assembly language is still used.', 'Device drivers and embedded systems (direct hardware control), and performance-critical routines where every cycle and byte matters.'),
  c(LMC, 'In the LMC, what do the three digits of an instruction represent?', 'The first digit is the opcode; the last two digits are the address (operand) in memory, 00 to 99.'),
  c(LMC, 'What does STA do, and what happens to the accumulator afterwards?', 'Stores the accumulator into the given address. The accumulator KEEPS its value; STA does not clear it.'),
  c(LMC, 'What is the difference between BRZ and BRP?', 'BRZ branches if the accumulator is exactly zero. BRP branches if the accumulator is positive OR zero (i.e. not negative).'),
  c(LMC, 'What is DAT and why is it needed?', 'A directive (not an instruction) that reserves a memory location, optionally with a starting value. Every label used as an operand must be declared with DAT so the assembler can assign it an address.'),
  c(LMC, 'How do you compare two numbers in the LMC?', 'There is no compare instruction: subtract one from the other (SUB) and branch on the sign of the result with BRP or BRZ.'),
  c(LMC, 'What is immediate addressing?', 'The operand IS the value to be used, e.g. ADD #5 adds the number 5. Fastest, because no memory access is needed for the operand.'),
  c(LMC, 'What is direct addressing?', 'The operand is the memory address holding the value, e.g. ADD 5 adds the contents of location 5. The only mode the LMC uses.'),
  c(LMC, 'What is indirect addressing?', 'The operand is the address of a location that itself holds the address of the value - a pointer. Allows a larger address space and dynamic data structures.'),
  c(LMC, 'What is indexed addressing and what is it used for?', 'The operand is a base address to which the contents of an index register are added. Incrementing the register walks through consecutive locations, which is how arrays are processed in a loop.'),
  c(LMC, 'Why must DAT lines come after HLT?', 'Memory is executed in order. A DAT placed among the instructions would be fetched and executed as if it were an instruction (901 would run as INP).'),

  // ---- Big O
  c(BIGO, 'What does Big O notation describe?', 'How the running time (or space) of an algorithm GROWS as the input size n grows, keeping only the fastest-growing term and ignoring constants.'),
  c(BIGO, 'What is the difference between time complexity and space complexity?', 'Time complexity is how the number of operations grows with n; space complexity is how the extra memory needed grows with n. They are often traded against each other.'),
  c(BIGO, 'Name the orders of complexity from fastest to slowest growth.', 'O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n), O(n²) quadratic / O(nᵏ) polynomial, O(2ⁿ) exponential, O(n!) factorial.'),
  c(BIGO, 'What is the time complexity of two nested loops that each run n times?', 'O(n²): the inner body runs n × n times.'),
  c(BIGO, 'What is the time complexity of a loop whose control variable is halved each pass?', 'O(log n): n can only be halved log₂ n times before reaching 1. Binary search is the classic example.'),
  c(BIGO, 'Simplify O(3n² + 20n + 7).', 'O(n²). Drop the constants and every term that grows more slowly than the fastest one.'),
  c(BIGO, 'Why is Big O usually quoted for the worst case?', 'The worst case is the guarantee: it is the bound the algorithm will never exceed, which is what matters when planning for the largest inputs.'),
  c(BIGO, 'What are the time complexities of linear search and binary search?', 'Linear search O(n); binary search O(log n) - but binary search requires the data to be sorted first.'),
  c(BIGO, 'What are the average and worst-case complexities of quick sort?', 'Average O(n log n); worst case O(n²), which happens when the pivot is repeatedly the smallest or largest value (e.g. already-sorted data with a first-element pivot).'),
  c(BIGO, 'Why does merge sort have O(n) space complexity while bubble sort has O(1)?', 'Merge sort needs a second array of size n to merge into; bubble sort swaps elements in place and needs no extra storage.'),
  c(BIGO, 'When can insertion sort beat merge sort in practice?', 'On small lists or lists that are already nearly sorted, where insertion sort runs close to O(n) and has no overhead.'),
  c(BIGO, 'What is a tractable problem?', 'One that can be solved by a polynomial-time algorithm, O(nᵏ). Problems whose best known algorithms are exponential are intractable for large n.'),
  c(BIGO, 'What is the space complexity of a recursive function that recurses n levels deep?', 'O(n): each call adds a stack frame, and n frames are held at once at the deepest point.'),
  c(BIGO, 'What is the time complexity of a hash table lookup?', 'O(1) on average; O(n) in the worst case if every key collides into the same bucket.'),

  // ---- OOP
  c(OOP, 'What is a class?', 'A template defining the attributes and methods that every object of that type will have.'),
  c(OOP, 'What is an object?', 'A particular instance of a class, with its own values for the attributes.'),
  c(OOP, 'What is a constructor, and what is it called in the exam reference language?', 'The method that runs when an object is created, initialising its attributes. In OCR pseudocode it is a public procedure called new.'),
  c(OOP, 'What is encapsulation?', 'Keeping attributes private and allowing access only through public methods (getters and setters), so an object cannot be put into an invalid state from outside.'),
  c(OOP, 'What is the practical benefit of a setter over a public attribute?', 'The setter can VALIDATE the new value before accepting it, so the object stays consistent.'),
  c(OOP, 'What is inheritance?', 'Defining a new class that takes all the attributes and methods of an existing class (its superclass/parent) and adds to or overrides them.'),
  c(OOP, 'What keyword does the exam reference language use for inheritance, and how is the parent constructor called?', 'class Sub inherits Super; the parent constructor is called with super.new(...) inside the subclass constructor.'),
  c(OOP, 'What is polymorphism?', 'Objects of different classes responding to the same method call in their own way, e.g. each subclass overriding speak() so one loop over a mixed list works.'),
  c(OOP, 'What is method overriding?', 'A subclass redefining a method it inherited, so objects of the subclass use the new version while objects of the parent still use the original.'),
  c(OOP, 'How is a method called on an object in the reference language?', 'Dot notation on the object, e.g. rex.speak(). Calling it on the class, Dog.speak(), is wrong.'),
  c(OOP, 'Give two advantages of OOP for a large system.', 'Encapsulation confines bugs to one class and protects data; inheritance lets common behaviour be written once and reused; classes can be developed and tested independently by a team.'),
  c(OOP, 'Give two disadvantages of OOP.', 'More design work up front, so small programs take longer to write; object creation and method calls add overhead; deep inheritance hierarchies can make it hard to see which method actually runs.'),
  c(OOP, 'What does "instantiation" mean?', 'Creating an object from a class, e.g. myDog = new Dog("Rex", 3).'),

  // ---- Computational thinking (deepened)
  c(CT, 'What is thinking abstractly?', 'Removing detail that is not relevant to the problem so that the essential features can be modelled - e.g. the Tube map keeps stations and connections and drops geography.'),
  c(CT, 'What is meant by thinking ahead?', 'Identifying the inputs, outputs and preconditions of a solution in advance, and planning reusable components and caching so work is not repeated.'),
  c(CT, 'What is a precondition?', 'A requirement that must be true before a subroutine runs correctly, e.g. "the list is sorted" for binary search. Stated so the caller, not the subroutine, takes responsibility.'),
  c(CT, 'What is caching, as a thinking-ahead technique?', 'Storing a result that is likely to be needed again so it is not recalculated or re-fetched, trading memory for time.'),
  c(CT, 'What is thinking procedurally?', 'Decomposing a problem into sub-problems, deciding the order in which the steps must happen, and identifying which parts can be sub-procedures.'),
  c(CT, 'What is thinking logically?', 'Identifying the decision points in a solution, the conditions that determine each outcome, and how they affect the flow of the program.'),
  c(CT, 'What is thinking concurrently?', 'Identifying which parts of a problem can be done at the same time, and the dependencies and shared resources that limit this.'),
  c(CT, 'Give one benefit and one drawback of concurrent processing.', 'Benefit: faster overall completion and better use of multiple cores. Drawback: parts that share data need synchronisation, which adds complexity and can cause race conditions or deadlock.'),

  // ---- Analysis and design (deepened)
  c(AD, 'What is the difference between functional and non-functional requirements?', 'Functional requirements say WHAT the system must do (features); non-functional requirements say how well - performance, security, usability, reliability.'),
  c(AD, 'Name three kinds of test data and what each checks.', 'Normal (typical valid input, works correctly), boundary/extreme (values at the edge of the valid range, e.g. 0 and 100 for 0-100), erroneous/invalid (data that should be rejected gracefully).'),
  c(AD, 'What is the difference between black-box and white-box testing?', 'Black-box tests inputs against expected outputs without looking at the code; white-box tests the internal paths of the code with knowledge of its structure.'),
  c(AD, 'What is the difference between alpha and beta testing?', 'Alpha testing is done in-house by the developers/testers; beta testing releases the product to a limited group of real users to find problems in real conditions.'),
  c(AD, 'What is a feasibility study and what does it consider?', 'A check, before development, of whether the project is achievable: technical, economic (cost/benefit), legal, operational and schedule feasibility.'),

  // ---- Input, output and storage (deepened)
  c(IOS, 'What is the difference between RAM and ROM?', 'RAM is volatile read/write memory holding running programs and data; ROM is non-volatile read-only memory holding the firmware/bootstrap that runs at start-up.'),
  c(IOS, 'What is virtual storage?', 'Storage accessed over a network or the internet (cloud storage) that appears local to the user; capacity can scale and it is accessible anywhere, but depends on a connection and on the provider.'),
  c(IOS, 'How does a hard disk drive store data?', 'Magnetically, on spinning platters divided into tracks and sectors; a read/write head on an arm moves to the track and the platter rotates the sector underneath it.'),
  c(IOS, 'How does an optical disc store data?', 'As pits and lands on a reflective surface; a laser reads the change in reflection as the disc spins. Capacity depends on laser wavelength (CD, DVD, Blu-ray).'),
  c(IOS, 'Why is flash (solid-state) storage faster than a hard disk?', 'No moving parts: data is read electrically from NAND cells, so there is no seek time or rotational latency, and it is also more robust and quieter.'),

  // ---- Boolean algebra (deepened)
  c(BOOL, "State De Morgan's laws.", 'NOT(A AND B) = NOT A OR NOT B; NOT(A OR B) = NOT A AND NOT B. Break the bar, change the operator.'),
  c(BOOL, 'What is the absorption law?', 'A OR (A AND B) = A, and A AND (A OR B) = A. The second term adds nothing.'),
  c(BOOL, 'What does a half adder do, and what gates make it?', 'Adds two single bits, producing a sum and a carry. Sum = A XOR B; Carry = A AND B.'),
  c(BOOL, 'What does a full adder add that a half adder cannot?', 'A carry-in from the previous column, so full adders can be chained to add multi-bit numbers.'),
  c(BOOL, 'What does a D-type flip-flop do?', 'Stores one bit: on the clock edge it copies the value on its D input to its Q output and holds it until the next clock edge. The basis of registers and memory.'),
  c(BOOL, 'In a Karnaugh map, why are adjacent cells labelled in Gray code order?', 'So that neighbouring cells differ in exactly one variable, which lets a group of 1s be read off as a term with that variable eliminated.'),

  // ---- Data types (deepened)
  c(DT, 'How do you find the two\'s complement of a binary number?', 'Invert every bit, then add 1. Or: copy from the right up to and including the first 1, then invert the rest.'),
  c(DT, 'What range can an 8-bit two\'s complement number represent?', '-128 to +127. The most significant bit is worth -128.'),
  c(DT, 'How is subtraction done using two\'s complement?', 'Convert the number being subtracted to its two\'s complement (negate it) and ADD. Discard any carry out of the most significant bit.'),
  c(DT, 'What is the effect of an arithmetic shift right by one place?', 'Divides by 2, preserving the sign bit (the MSB is copied in from the left). A logical shift right fills with 0 instead.'),
  c(DT, 'What is a bit mask and what is AND used for with one?', 'A pattern of bits used to select or clear bits in another value. AND with a mask clears every bit where the mask has 0 and keeps those where it has 1 (used to test or extract bits).'),
  c(DT, 'What is OR used for with a mask, and XOR?', 'OR sets to 1 every bit where the mask has 1 (setting flags). XOR flips every bit where the mask has 1 (toggling).'),
  c(DT, 'What does normalising a floating-point number achieve?', 'A unique representation with maximum precision: the mantissa starts 0.1 (positive) or 1.0 (negative), so no leading digits are wasted.'),
  c(DT, 'Why does Unicode exist when ASCII already existed?', 'ASCII has only 128 (or 256) codes - enough for English but not for the world\'s scripts, symbols and emoji. Unicode assigns a unique code to every character of every writing system; UTF-8 encodes it compatibly with ASCII.'),

  // ---- Data structures (deepened)
  c(DS, 'How is an element of a 2D array accessed, and what is a 2D array used for?', 'With two indices, e.g. grid[row][column]. Used for tables, grids and matrices - anything with rows and columns.'),
  c(DS, 'What is a record?', 'A data structure holding a fixed set of named fields of possibly different types, e.g. a student with name, age and grade.'),
  c(DS, 'What is a tuple?', 'An ordered, immutable collection of values that can be of different types. Unlike a list, it cannot be changed after creation.'),
  c(DS, 'Describe the steps to add a node to a linked list between two existing nodes.', 'Create the new node; set its pointer to the node that will follow it; set the previous node\'s pointer to the new node. Order matters - do the second step before the third or the rest of the list is lost.'),
  c(DS, 'How is a collision handled in a hash table?', 'Either by chaining (each bucket holds a linked list of entries) or by open addressing/linear probing (look at the next free slot).'),
  c(DS, 'What is the difference between a stack and a queue?', 'A stack is LIFO (last in, first out): push and pop at the top. A queue is FIFO (first in, first out): enqueue at the rear, dequeue from the front.'),
  c(DS, 'Why does a circular queue exist?', 'In an array-based queue the front pointer moves forward as items are removed, wasting space at the start. Wrapping the pointers around the end of the array reuses it.'),

  // ---- Databases (deepened)
  c(DB, 'Write an SQL query that returns the names of all students with a grade above 70, sorted by name.', 'SELECT Name FROM Student WHERE Grade > 70 ORDER BY Name;'),
  c(DB, 'What does an INNER JOIN do?', 'Combines rows from two tables where a join condition (usually primary key = foreign key) is met, e.g. ... FROM Order INNER JOIN Customer ON Order.CustomerID = Customer.CustomerID.'),
  c(DB, 'What is referential integrity?', 'Every foreign key value must match an existing primary key in the referenced table, so a record can never point at something that does not exist.'),
  c(DB, 'What do the letters of ACID stand for?', 'Atomicity (all or nothing), Consistency (rules are never broken), Isolation (transactions do not interfere), Durability (once committed, it survives a crash).'),
  c(DB, 'What is record locking and why is it needed?', 'Preventing two users from updating the same record at once by locking it for the duration of a transaction, so one update cannot silently overwrite another.'),
  c(DB, 'What is the difference between a primary key, a foreign key and a secondary key?', 'Primary: uniquely identifies a record. Foreign: a primary key from another table, creating a link. Secondary: an extra indexed field used to search quickly (e.g. surname).'),

  // ---- Networks (deepened)
  c(NET, 'What happens at each of the four layers of the TCP/IP stack when a message is sent?', 'Application: the data is created (HTTP, SMTP). Transport: split into numbered packets, port added (TCP). Internet/Network: IP addresses added and packets routed. Link: physical transmission over the local medium with MAC addresses.'),
  c(NET, 'What does DNS do?', 'Translates a human-readable domain name (memoraa.web.app) into an IP address by querying a hierarchy of name servers, starting from a local cache and going up to the root if needed.'),
  c(NET, 'Name three network security threats and one countermeasure for each.', 'Malware (anti-malware software, updates); phishing (user training, spam filtering); unauthorised access (strong passwords, firewalls, encryption); denial of service (traffic filtering, load balancing).'),
  c(NET, 'What is the difference between a switch and a router?', 'A switch connects devices within one LAN and forwards frames by MAC address. A router connects different networks and forwards packets by IP address.'),

  // ---- Systems software (deepened)
  c(SYS, 'What happens when an interrupt occurs?', 'At the end of the current FDE cycle the processor checks for interrupts; if one is pending with higher priority, the current registers are pushed to the stack, the interrupt service routine runs, then the registers are restored and the original program resumes.'),
  c(SYS, 'What is the difference between paging and segmentation?', 'Paging splits memory into fixed-size physical blocks (pages) with no regard to program structure; segmentation splits it into variable-size logical blocks (segments) that match program parts, e.g. a function or an array.'),

  // ---- Law and ethics (deepened)
  c(LAW, 'What does the Computer Misuse Act 1990 make illegal?', 'Unauthorised access to computer material; unauthorised access with intent to commit a further offence; unauthorised modification of computer material (including malware). Later amended to add impairing operation and making/supplying hacking tools.'),
  c(LAW, 'What does the Regulation of Investigatory Powers Act 2000 allow?', 'Public bodies to carry out surveillance and to intercept communications, and to demand that encrypted data be decrypted (or keys handed over), under authorisation.'),
  c(LAW, 'Name four principles of the Data Protection Act.', 'Data must be processed lawfully and fairly; collected for a specified purpose; adequate, relevant and not excessive; accurate and up to date; kept no longer than necessary; kept secure.'),
  c(LAW, 'What does the Copyright, Designs and Patents Act 1988 protect in computing?', 'Software (and other original works) as the intellectual property of its creator: copying, distributing or modifying it without permission is illegal, which is what makes software piracy an offence.'),

  // ---- Programming techniques (deepened)
  c(PT, 'What is the difference between passing by value and passing by reference?', 'By value: a COPY of the data is passed, so changes inside the subroutine do not affect the original. By reference: the address is passed, so the subroutine changes the original variable.'),
  c(PT, 'Name four features of an IDE and what each is for.', 'Syntax highlighting and auto-completion (writing code faster with fewer typos); breakpoints and stepping (pausing execution to inspect it); variable watch (seeing values change); error diagnostics and a debugger; version control integration.'),
  c(PT, 'What is modularity and why does it matter?', 'Breaking a program into independent subroutines, each doing one job. Modules can be written, tested and reused separately, and a bug is confined to the module it lives in.'),

  // ---- Computational methods (deepened)
  c(CM, 'What is pipelining, as a computational method?', 'Arranging a process so that the output of one stage feeds the input of the next and all stages run at once on different data - as in a CPU pipeline or a data-processing pipeline.'),
  c(CM, 'What is data mining?', 'Searching large datasets for patterns and relationships that were not known in advance, often to make predictions - e.g. which customers are likely to leave.'),
  c(CM, 'What is performance modelling?', 'Predicting how a system will behave under load by simulating or calculating it before it is built, so that bottlenecks are found without the cost of building the wrong thing.'),
]

/* ====================================================== MCQ */

export const CS_EXTRA_MCQ_4 = [
  // ---- LMC
  m(LMC, 'In the LMC, which instruction takes a value from the in-tray into the accumulator?', ['OUT', 'LDA', 'INP', 'STA'], 2, 'INP (901) reads from the in-tray into the accumulator. LDA loads from a memory address, not from input.'),
  m(LMC, 'After executing STA total, what is in the accumulator?', ['Zero', 'The value that was there before', 'The address of total', 'Undefined'], 1, 'STA copies the accumulator to memory; the accumulator keeps its value.'),
  m(LMC, 'The accumulator holds 0. Which of these branches WILL be taken?', ['BRP only', 'BRZ only', 'Both BRZ and BRP', 'Neither'], 2, 'BRZ branches on zero, and BRP branches on zero or positive - so both are taken.'),
  m(LMC, 'What does the instruction 306 mean in the LMC?', ['Add the contents of mailbox 06', 'Store the accumulator in mailbox 06', 'Load mailbox 06 into the accumulator', 'Branch to mailbox 06'], 1, 'Opcode 3 is STA; the operand 06 is the address.'),
  m(LMC, 'Which addressing mode is used when the operand is the actual value to be used?', ['Direct', 'Indirect', 'Indexed', 'Immediate'], 3, 'Immediate addressing embeds the value in the instruction itself, e.g. ADD #5.'),
  m(LMC, 'A program processes every element of an array in a loop. Which addressing mode makes this straightforward in assembly?', ['Indexed', 'Immediate', 'Direct', 'None - assembly cannot process arrays'], 0, 'Indexed addressing adds an index register to a base address; incrementing the register steps through the array.'),
  m(LMC, 'Which statement about assembly language is correct?', ['One assembly statement compiles to many machine-code instructions', 'It is translated by a compiler', 'Each mnemonic corresponds to one machine-code instruction', 'It runs on any processor'], 2, 'The one-to-one mapping is the defining feature; it is translated by an assembler, and it is specific to one architecture.'),
  m(LMC, 'The LMC program below is intended to output the difference a - b for two inputs, but outputs b - a. Which single change fixes it?\nINP / STA a / INP / STA b / SUB a / OUT / HLT', ['Swap the two STA lines', 'Replace SUB a with SUB b and add LDA a before it', 'Replace OUT with STA a', 'Replace SUB a with ADD a'], 1, 'After the second INP the accumulator holds b, so SUB a gives b - a. Load a first, then subtract b.'),
  m(LMC, 'In indirect addressing, the operand contains', ['the value', 'the address of the value', 'the address of a location holding the address of the value', 'an offset added to an index register'], 2, 'Indirect addressing goes through a pointer: the operand names a location whose contents are the real address.'),
  m(LMC, 'Why is a DAT directive placed after HLT rather than before it?', ['DAT must be the first line', 'The assembler only accepts DAT at the end', 'Memory is executed in order, so a DAT among the instructions would be executed as an instruction', 'DAT values must be zero'], 2, 'A DAT holding 901 in the middle of the code would be fetched and run as INP.'),

  // ---- Big O
  m(BIGO, 'What is the time complexity of binary search?', ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'], 2, 'Each comparison halves the remaining range, so at most log₂ n comparisons are needed.'),
  m(BIGO, 'A function contains a loop from 1 to n, and inside it another loop from 1 to n. Its time complexity is', ['O(2n)', 'O(n²)', 'O(n log n)', 'O(n)'], 1, 'The inner body runs n × n times. O(2n) is not a valid order - constants are dropped.'),
  m(BIGO, 'Which of these is the correct simplification of O(5n³ + n² + 100)?', ['O(n³)', 'O(5n³)', 'O(n³ + n²)', 'O(100)'], 0, 'Keep the fastest-growing term and drop its constant.'),
  m(BIGO, 'Which algorithm has the WORST time complexity for large n?', ['Merge sort', 'Bubble sort', 'Binary search', 'Linear search'], 1, 'Bubble sort is O(n²); merge sort is O(n log n); the searches are O(log n) and O(n).'),
  m(BIGO, 'Why does merge sort have a higher space complexity than bubble sort?', ['It uses recursion, which needs no memory', 'It needs an additional array to merge into', 'It stores every comparison', 'It runs in place'], 1, 'Merge sort copies elements into a second array during the merge: O(n) extra space, against bubble sort\'s O(1).'),
  m(BIGO, 'Quick sort\'s worst case of O(n²) occurs when', ['the list is very short', 'the pivot chosen is repeatedly the smallest or largest element', 'the list contains duplicates', 'the list is stored in a linked list'], 1, 'A consistently bad pivot splits the list into sizes 0 and n - 1 every time, giving n levels of n work.'),
  m(BIGO, 'Doubling the input size of an O(n²) algorithm multiplies its running time by about', ['2', '4', '8', 'log 2'], 1, '(2n)² = 4n².'),
  m(BIGO, 'Which describes an intractable problem?', ['One with no solution', 'One that can only be solved by a heuristic', 'One whose best known algorithm takes exponential time, so it cannot be solved in practice for large inputs', 'One that requires more than one processor'], 2, 'Intractable means solvable in principle but not in practice as n grows, which is why heuristics are used for them.'),
  m(BIGO, 'A recursive function calls itself twice, each time with n - 1. Its time complexity is', ['O(n)', 'O(n²)', 'O(log n)', 'O(2ⁿ)'], 3, 'Each level doubles the number of calls: 2ⁿ calls in total, as in naive recursive Fibonacci.'),
  m(BIGO, 'Which of these has O(1) time complexity?', ['Finding the largest item in an unsorted list', 'Popping an item from a stack', 'Searching a linked list', 'Sorting a list of three items'], 1, 'Pop just moves the top pointer, regardless of how many items the stack holds.'),
  m(BIGO, 'For a list of 8 elements that is already nearly sorted, which sort is likely fastest in practice?', ['Insertion sort', 'Merge sort', 'Quick sort', 'They are identical'], 0, 'Insertion sort is close to O(n) on nearly sorted data and has no recursion or extra-array overhead, which dominates at tiny n.'),

  // ---- OOP
  m(OOP, 'In OCR\'s exam reference language, what is the constructor of a class called?', ['init', 'constructor', 'new', 'create'], 2, 'The constructor is written as public procedure new(...).'),
  m(OOP, 'Which keyword makes an attribute inaccessible from outside its class?', ['static', 'private', 'protected', 'hidden'], 1, 'private restricts access to the class\'s own methods, which is encapsulation.'),
  m(OOP, 'Which line correctly creates an object from a class Car whose constructor takes a colour?', ['Car myCar = "red"', 'myCar = new Car("red")', 'myCar = Car.new("red")', 'myCar = create Car("red")'], 1, 'The reference language instantiates with new ClassName(arguments).'),
  m(OOP, 'A subclass constructor should call super.new(...) in order to', ['override the parent constructor', 'initialise the attributes inherited from the parent class', 'make the parent attributes public', 'create a second object'], 1, 'Inherited attributes are set up by the parent constructor; without the call they are never initialised.'),
  m(OOP, 'Which best defines polymorphism?', ['A class having more than one constructor', 'Objects of different classes responding to the same method call in their own way', 'A subclass having more attributes than its parent', 'Storing objects in an array'], 1, 'Overriding lets each class supply its own version of a method; the caller uses one name for all of them.'),
  m(OOP, 'Which is an advantage of encapsulation?', ['Objects use less memory', 'Attributes can only be changed through methods that can validate the change', 'Classes cannot inherit from each other', 'Methods run faster'], 1, 'Private attributes plus validating setters keep the object in a valid state.'),
  m(OOP, 'A method with the same name as one in the superclass, but a different body, is an example of', ['overloading', 'overriding', 'encapsulation', 'instantiation'], 1, 'Overriding replaces an inherited method in the subclass.'),
  m(OOP, 'Which is a DISADVANTAGE of OOP?', ['Data is exposed to every part of the program', 'Common code has to be duplicated in every class', 'It adds design overhead and object-creation cost that a small program does not need', 'Classes cannot be tested separately'], 2, 'The other three are the opposite of what OOP does.'),
  m(OOP, 'What is the relationship between a class and an object?', ['They are the same thing', 'An object is a template for a class', 'A class is a template; an object is an instance made from it', 'A class is a method of an object'], 2, 'The class defines the structure; each object holds its own attribute values.'),
  m(OOP, 'Given class Shape with a method area() and class Circle inherits Shape, which is true?', ['Circle must redefine area()', 'Circle cannot have attributes of its own', 'A Circle object can call area() even if Circle does not redefine it', 'Shape objects can call Circle\'s methods'], 2, 'Inherited methods are available to the subclass; redefining them is optional (overriding).'),

  // ---- Deepened chapters
  m(CT, 'Which is the best example of thinking ahead?', ['Writing the code before the design', 'Specifying the inputs, outputs and preconditions of a function before implementing it', 'Removing detail from a problem', 'Splitting a task between two processors'], 1, 'Thinking ahead is anticipating what a solution needs: inputs, outputs, preconditions, reusable components.'),
  m(CT, 'Two tasks can be run concurrently without difficulty when', ['they share a variable that both update', 'one needs the output of the other', 'they are independent of each other\'s data', 'they use the same file'], 2, 'Independence is what makes concurrency safe; shared data or dependencies force synchronisation.'),
  m(AD, 'For a field that accepts ages from 0 to 120, which is BOUNDARY test data?', ['50', '-5', '120', 'abc'], 2, '120 is the edge of the valid range. 50 is normal, -5 and abc are erroneous.'),
  m(AD, 'Beta testing is', ['testing by the developers before release', 'testing by a limited group of real users before general release', 'testing every line of code', 'testing only the user interface'], 1, 'Alpha is in-house; beta is with real users outside the organisation.'),
  m(IOS, 'Which storage medium works by reading pits and lands with a laser?', ['Magnetic', 'Optical', 'Flash', 'RAM'], 1, 'Optical discs - CD, DVD, Blu-ray - store data as pits and lands.'),
  m(BOOL, 'Which expression is equivalent to NOT(A OR B)?', ['NOT A OR NOT B', 'NOT A AND NOT B', 'A AND B', 'A OR B'], 1, 'De Morgan: break the bar and change OR to AND.'),
  m(BOOL, 'A half adder produces', ['a sum only', 'a sum and a carry out', 'a sum, a carry in and a carry out', 'a carry out only'], 1, 'Sum = A XOR B, Carry = A AND B. Only a full adder takes a carry in.'),
  m(DT, 'What is 8-bit two\'s complement 11110000 in denary?', ['240', '-16', '-112', '16'], 1, 'In two\'s complement the MSB is worth -128; the other set bits are 64 + 32 + 16 = 112, so the value is -128 + 112 = -16.'),
  m(DT, 'Applying the mask 00001111 with AND to 10110110 gives', ['10110110', '00000110', '10111111', '00001111'], 1, 'AND keeps only the bits where the mask has 1: the low nibble 0110.'),
  m(DT, 'An arithmetic shift right of 11111010 (two\'s complement -6) by one place gives', ['01111101', '11111101', '11110100', '00000011'], 1, 'The sign bit is copied in from the left, giving -3.'),
  m(DS, 'Which structure gives O(1) access to any element by index?', ['Linked list', 'Array', 'Binary tree', 'Queue'], 1, 'Arrays are contiguous, so the address of element i is base + i × size.'),
  m(DS, 'When inserting a node into the middle of a linked list, which step must come FIRST?', ['Update the previous node to point at the new node', 'Set the new node\'s pointer to the following node', 'Delete the following node', 'Move the head pointer'], 1, 'If the previous node is redirected first, the rest of the list becomes unreachable.'),
  m(DB, 'Which SQL clause restricts the rows returned?', ['ORDER BY', 'FROM', 'WHERE', 'SELECT'], 2, 'WHERE filters rows; SELECT chooses columns; ORDER BY sorts.'),
  m(DB, 'The "Isolation" property of ACID guarantees that', ['a transaction either fully completes or has no effect', 'concurrent transactions do not interfere with each other', 'committed data survives a crash', 'no rule of the database is ever broken'], 1, 'Isolation means transactions behave as if run one at a time, even when they overlap.'),
  m(NET, 'Which TCP/IP layer adds source and destination IP addresses?', ['Application', 'Transport', 'Internet (network)', 'Link'], 2, 'IP addressing and routing happen at the internet/network layer; TCP ports are transport; MAC addresses are link.'),
  m(NET, 'A router forwards packets based on', ['MAC address', 'IP address', 'port number', 'domain name'], 1, 'Routers work at the network layer with IP addresses; switches use MAC addresses.'),
  m(SYS, 'When is the processor able to respond to an interrupt?', ['At any point during an instruction', 'Only when the program calls a system routine', 'At the end of each fetch-decode-execute cycle', 'Only during idle time'], 2, 'Interrupts are checked at the end of each cycle; the current state is saved to the stack before the ISR runs.'),
  m(LAW, 'Making software that impairs the operation of a computer is an offence under', ['the Data Protection Act', 'the Computer Misuse Act', 'the Copyright, Designs and Patents Act', 'RIPA'], 1, 'The Computer Misuse Act covers unauthorised access and modification, including creating malware.'),
  m(PT, 'A subroutine receives a parameter by reference. What happens if it changes the parameter?', ['Nothing outside the subroutine changes', 'The original variable in the caller is changed', 'A copy is changed and returned', 'An error occurs'], 1, 'By reference passes the address, so the subroutine writes to the caller\'s variable.'),
]

/* ====================================================== EXAM QUESTIONS */

export const CS_EXTRA_EXAM_4 = [
  // ---- LMC
  q(LMC, 'Describe two differences between assembly language and a high-level language.', 4, [
    'Assembly: each mnemonic corresponds to one machine-code instruction; high-level: one statement may become many instructions',
    'Assembly is specific to one processor architecture; high-level code is portable across processors given a compiler/interpreter',
    'Assembly is translated by an assembler; high-level by a compiler or interpreter',
    'Assembly gives direct control of hardware/registers; high-level abstracts these away and is easier to read and write',
    'Final answer: Any two differences, each explained: one-to-one versus one-to-many mapping to machine code; processor-specific versus portable; assembler versus compiler/interpreter; hardware control versus ease of writing.',
  ]),
  q(LMC, 'Write an LMC program that takes two inputs and outputs the larger of the two.', 6, [
    'INP then STA to save the first input (e.g. STA a)',
    'INP then STA to save the second (STA b)',
    'SUB a to compute b - a in the accumulator',
    'BRP to a label that outputs b (branch taken when b >= a)',
    'Otherwise LDA a, OUT, HLT',
    'At the label: LDA b, OUT, HLT; DAT lines for a and b after the code',
    'Final answer: INP / STA a / INP / STA b / SUB a / BRP bigger / LDA a / OUT / HLT / bigger LDA b / OUT / HLT / a DAT / b DAT. Marks for saving both inputs, the subtraction, a correct branch on the sign, both output paths, and DAT declarations.',
  ]),
  q(LMC, 'The following LMC program is run with the inputs 3 and 2. Trace it and state the output.\nINP / STA x / INP / STA y / LDA x / SUB y / BRP pos / LDA y / OUT / HLT / pos LDA x / OUT / HLT / x DAT / y DAT', 4, [
    'x = 3, y = 2 after the two STA instructions',
    'LDA x, SUB y: accumulator = 3 - 2 = 1',
    'BRP pos: 1 is positive so the branch is taken',
    'LDA x, OUT: 3 is output; HLT',
    'Final answer: Output is 3. The program outputs the larger input; with x = 3 and y = 2 the subtraction leaves 1, BRP branches, and x is output.',
  ]),
  q(LMC, 'Explain the difference between immediate and direct addressing, and state one advantage of each.', 6, [
    'Immediate addressing: the operand is the value itself (e.g. ADD #5 adds 5)',
    'Direct addressing: the operand is the address of the location holding the value (e.g. ADD 5 adds the contents of location 5)',
    'Advantage of immediate: faster, as no memory access is needed to fetch the operand',
    'Advantage of direct: the value can change at run time, since it is stored in memory rather than fixed in the instruction',
    'Immediate suits constants; direct suits variables',
    'Final answer: Immediate embeds the value in the instruction (fast, but fixed); direct names the address holding the value (an extra memory access, but the value can vary). Constants use immediate; variables use direct.',
  ]),
  q(LMC, 'Explain how indexed addressing allows an assembly language program to process every element of an array.', 4, [
    'The operand is a base address - the start of the array',
    'The contents of an index register are added to the base to give the effective address',
    'The index register starts at 0 and is incremented each pass of a loop',
    'So the same instruction accesses element 0, then 1, then 2 ... without changing the instruction',
    'Final answer: Indexed addressing computes the address as base + index register. A loop that increments the register makes one instruction visit each element of the array in turn.',
  ]),
  q(LMC, 'Write an LMC program that takes a single input n and outputs the numbers from 1 up to n.', 6, [
    'INP, STA n to save the limit',
    'A counter initialised to 1 (DAT count 1) or built by LDA one',
    'Loop label: LDA count, OUT',
    'Test for the end: LDA n, SUB count, BRZ done (or equivalent using BRP)',
    'Increment: LDA count, ADD one, STA count, BRA loop',
    'done HLT; DAT lines for n, count and one',
    'Final answer: INP / STA n / loop LDA count / OUT / LDA n / SUB count / BRZ done / LDA count / ADD one / STA count / BRA loop / done HLT / n DAT / count DAT 1 / one DAT 1. Marks for the saved limit, output inside the loop, a correct termination test, the increment, and the DATs.',
  ]),
  q(LMC, 'Explain why indirect addressing is useful when implementing a linked list in assembly language.', 3, [
    'Each node stores a pointer - the address of the next node',
    'Indirect addressing lets an instruction use the contents of that pointer as the address to access',
    'So the program can follow the chain of nodes without knowing their addresses in advance, and the list can be any length',
    'Final answer: A linked list node holds the address of the next node; indirect addressing reads that stored address and accesses the location it names, which is exactly the "follow the pointer" step traversal needs.',
  ]),

  // ---- Big O
  q(BIGO, 'State the time complexity of the following algorithm and justify your answer.\nfor i = 0 to n - 1\n   for j = 0 to n - 1\n      if a[i] + a[j] == target then found = true\n   next j\nnext i', 3, [
    'The inner loop runs n times for each of the n iterations of the outer loop',
    'Total iterations = n × n = n²',
    'Time complexity O(n²) (quadratic)',
    'Final answer: O(n²) - two nested loops each of length n execute the body n² times.',
  ]),
  q(BIGO, 'Explain why binary search has a time complexity of O(log n) and state one requirement for it to be used.', 4, [
    'Each comparison halves the portion of the list still to be searched',
    'A list of n items can be halved log₂ n times before one item remains',
    'So at most log₂ n (+1) comparisons are needed: O(log n)',
    'Requirement: the list must be sorted',
    'Final answer: Binary search discards half the remaining items at every step, so the number of steps grows as log₂ n. It only works on sorted data.',
  ]),
  q(BIGO, 'A company must sort 10 million customer records on a server with limited memory. Compare merge sort and quick sort for this task and recommend one.', 6, [
    'Merge sort: O(n log n) in every case - predictable running time',
    'Merge sort needs an extra array of size n: O(n) space, which matters on limited memory',
    'Quick sort: O(n log n) on average, in place (O(log n) stack space)',
    'Quick sort worst case is O(n²) if pivots are chosen badly, e.g. on already-sorted data',
    'With limited memory, quick sort\'s in-place operation is the deciding advantage',
    'Mitigate the worst case by choosing a random or median-of-three pivot',
    'Final answer: Both are O(n log n) on average, but merge sort needs O(n) extra memory while quick sort sorts in place. On a memory-limited server quick sort is the better choice, provided a random or median-of-three pivot is used to avoid its O(n²) worst case.',
  ]),
  q(BIGO, 'Explain the difference between time complexity and space complexity, using merge sort as an example.', 4, [
    'Time complexity measures how the number of operations grows with input size n',
    'Space complexity measures how the extra memory required grows with n',
    'Merge sort is O(n log n) in time: log n levels of splitting, n work to merge at each level',
    'Merge sort is O(n) in space: it needs a second array the size of the input to merge into',
    'Final answer: Time complexity counts operations, space complexity counts memory. Merge sort is fast (O(n log n) time) but not free (O(n) extra space for the merge array) - the two are traded against each other.',
  ]),
  q(BIGO, 'State the best, average and worst case time complexity of linear search, and explain when each occurs.', 4, [
    'Best case O(1): the item is the first in the list',
    'Average case O(n): on average half the list is checked, and n/2 is O(n)',
    'Worst case O(n): the item is last or not present, so every item is checked',
    'Big O normally quotes the worst case as the guarantee',
    'Final answer: Best O(1) (found immediately), average O(n) (about half the list), worst O(n) (last or absent). The worst case is the one usually quoted.',
  ]),
  q(BIGO, 'A programmer claims an O(n²) algorithm should never be used when an O(n log n) alternative exists. Discuss whether this claim is correct.', 6, [
    'For large n the O(n log n) algorithm does grow much more slowly, so the claim holds for big inputs',
    'Big O hides constants: for small n the O(n²) algorithm may have far less overhead and be faster in practice',
    'Insertion sort is O(n²) but near O(n) on nearly sorted data and needs no extra memory',
    'Merge sort\'s O(n) space may be unacceptable on limited hardware',
    'Simplicity and correctness may matter more than speed for code that rarely runs',
    'Judgement: the choice depends on n, on the data\'s existing order, and on memory - not on Big O alone',
    'Final answer: The claim is correct only for large inputs. Big O describes growth, not actual speed: for small or nearly sorted lists, or on memory-limited devices, an O(n²) algorithm such as insertion sort can be the better choice. The right decision depends on the size and nature of the data.',
  ]),
  q(BIGO, 'Explain what is meant by an intractable problem and why heuristic methods are used for them.', 4, [
    'An intractable problem is one that can be solved in principle but whose best known algorithm is exponential (or worse) in time',
    'For realistic input sizes the computation would take longer than is practical',
    'A heuristic gives a good-enough solution in polynomial time by using a rule of thumb rather than checking every possibility',
    'It sacrifices the guarantee of the best answer for an answer that can actually be computed',
    'Final answer: Intractable problems (e.g. travelling salesman by brute force, O(n!)) cannot be solved exactly for large n. Heuristics trade optimality for speed, returning an acceptable answer in feasible time.',
  ]),

  // ---- OOP
  q(OOP, 'Using the exam reference language, write a class Account with private attributes for the account number and balance, a constructor that sets both, a method deposit that adds a positive amount to the balance, and a method getBalance that returns the balance.', 8, [
    'class Account ... endclass with the two attributes declared private',
    'public procedure new(accNo, startBalance) assigning both attributes',
    'public procedure deposit(amount) with a check that amount > 0',
    'balance = balance + amount inside the check',
    'public function getBalance() returning balance',
    'Correct use of public/private, endprocedure/endfunction',
    'Final answer: class Account / private accountNumber / private balance / public procedure new(accNo, startBalance) / accountNumber = accNo / balance = startBalance / endprocedure / public procedure deposit(amount) / if amount > 0 then balance = balance + amount endif / endprocedure / public function getBalance() / return balance / endfunction / endclass. Marks for private attributes, the constructor called new, validation in deposit, and the getter.',
  ]),
  q(OOP, 'Explain what is meant by encapsulation and why it is used.', 4, [
    'Encapsulation is keeping an object\'s attributes private, accessible only through its public methods',
    'Other parts of the program cannot read or change the data directly',
    'A setter can validate changes, so the object cannot be put into an invalid state',
    'The internal implementation can change without affecting code that uses the class',
    'Final answer: Encapsulation bundles data with the methods that act on it and hides the data behind those methods, so it can only be changed in controlled, validated ways and the class\'s internals can change independently of its users.',
  ]),
  q(OOP, 'A class SavingsAccount is to inherit from Account and add an interest rate. Write the class definition, including a constructor that uses the parent constructor and a method addInterest that increases the balance by the interest rate.', 6, [
    'class SavingsAccount inherits Account',
    'private interestRate attribute',
    'Constructor new(accNo, startBalance, rate) calling super.new(accNo, startBalance)',
    'interestRate = rate set in the constructor',
    'addInterest uses the public deposit method (or a parent method) since balance is private to Account',
    'e.g. deposit(getBalance() × interestRate)',
    'Final answer: class SavingsAccount inherits Account / private interestRate / public procedure new(accNo, startBalance, rate) / super.new(accNo, startBalance) / interestRate = rate / endprocedure / public procedure addInterest() / deposit(getBalance() × interestRate) / endprocedure / endclass. Marks for inherits, super.new, the new attribute, and reaching the private balance through the inherited public methods.',
  ]),
  q(OOP, 'Explain, with an example, what is meant by polymorphism.', 4, [
    'Polymorphism means objects of different classes respond to the same method call in their own way',
    'Achieved by subclasses overriding a method defined in the superclass',
    'Example: Shape has area(); Circle and Rectangle each override area() with their own formula',
    'A loop over a list of Shapes can call area() on each without knowing which subclass it is',
    'Final answer: Polymorphism lets one method name behave differently depending on the object\'s class. If Circle and Rectangle both override Shape\'s area(), then shapes[i].area() gives the right answer for each - the calling code does not need to know the subclass.',
  ]),
  q(OOP, 'Discuss whether an object-oriented approach is appropriate for a large online banking system developed by a team of programmers.', 9, [
    'Entities such as Customer, Account and Transaction map naturally onto classes, making the design clearer',
    'Encapsulation protects sensitive data: a balance can only be changed through validated methods, which matters for security and correctness',
    'Inheritance allows shared behaviour (Account) with specialised subclasses (Savings, Current) without duplication',
    'Once class interfaces are agreed, team members can develop and test classes independently and in parallel',
    'Maintenance over the system\'s long life is easier because changes inside a class do not ripple outward',
    'Costs: more up-front design, and some runtime overhead from object creation and method dispatch',
    'Deep hierarchies can make behaviour hard to trace',
    'Judgement: for a large, long-lived, team-built, security-critical, entity-rich system the benefits clearly outweigh the costs',
    'Final answer: Yes. A banking system is exactly the case OOP was designed for: it is large, built by a team, must protect data, and is full of real-world entities with shared behaviour. The extra design effort and small runtime cost are minor against the gains in security, reuse, parallel development and maintainability.',
  ]),
  q(OOP, 'State two differences between a class and an object.', 2, [
    'A class is a template/blueprint; an object is an instance created from it',
    'A class exists once in the code; many objects can be created from it, each with its own attribute values',
    'Final answer: A class defines the attributes and methods; an object is a specific instance holding actual values. One class, many objects.',
  ]),
  q(OOP, 'Explain why a subclass cannot directly access an attribute that was declared private in its superclass, and how it should access it instead.', 3, [
    'private restricts access to the class in which the attribute is declared',
    'Inheritance passes the attribute on, but not the right to access it directly',
    'The subclass uses the superclass\'s public getter and setter methods (e.g. getBalance())',
    'Final answer: private means "only this class"; the subclass inherits the attribute but must go through the parent\'s public methods to read or change it.',
  ]),

  // ---- Deepened chapters
  q(CT, 'A student is writing a program to find the shortest route between two stations on an underground network. Explain how thinking abstractly and thinking ahead would help.', 6, [
    'Abstractly: represent the network as a graph of nodes and weighted edges, removing geography, station names, platforms and timetables',
    'This lets a standard algorithm (Dijkstra) be applied to any network',
    'Ahead: identify the inputs (start, destination, the graph) and output (the route and its length) before coding',
    'Ahead: precondition that both stations exist in the graph; decide what happens if no route exists',
    'Ahead: cache routes that are requested frequently rather than recalculating them',
    'Final answer: Abstraction turns the map into a weighted graph so a known algorithm applies; thinking ahead fixes the inputs, outputs and preconditions first and plans caching of common routes, so the program is designed rather than discovered.',
  ]),
  q(CT, 'Explain what is meant by thinking concurrently, and describe one problem that can arise when two processes run concurrently.', 4, [
    'Thinking concurrently means identifying parts of a problem that can be carried out at the same time',
    'Independent tasks can be given to separate cores or threads to finish sooner',
    'Problem: if two processes share data, they can both read then write it, and one update is lost (a race condition)',
    'Or: two processes each waiting for a resource the other holds - deadlock',
    'Final answer: Concurrent thinking finds work that can proceed in parallel. When such work shares data or resources it must be synchronised, or it risks race conditions (lost updates) and deadlock.',
  ]),
  q(AD, 'A form accepts a percentage mark from 0 to 100. Give one example each of normal, boundary and erroneous test data, and state what each test checks.', 6, [
    'Normal: e.g. 55 - checks that a typical valid value is accepted and processed correctly',
    'Boundary: 0 and 100 - checks the edges of the valid range are accepted (and 101 / -1 rejected)',
    'Erroneous: e.g. "abc" or 150 - checks invalid data is rejected without crashing',
    'Each test has an expected outcome written down before it is run',
    'Final answer: Normal (55) confirms typical input works; boundary (0, 100, and just outside) confirms the limits are handled exactly; erroneous ("abc", 150) confirms the program rejects bad input gracefully.',
  ]),
  q(AD, 'Explain the difference between black-box and white-box testing, and give one advantage of each.', 4, [
    'Black-box: tests the program from the outside, comparing outputs with expected outputs, without reference to the code',
    'Advantage: mirrors how users experience it; testers need no programming knowledge',
    'White-box: tests with knowledge of the code, aiming to exercise every path and branch',
    'Advantage: finds errors in paths a black-box tester might never trigger',
    'Final answer: Black-box checks behaviour against the specification without seeing the code; white-box uses the code to make sure every branch runs. Together they cover both what the program should do and how it does it.',
  ]),
  q(IOS, 'A photographer needs portable storage for large image files that will be moved between many computers. Compare magnetic, optical and solid-state storage for this purpose and recommend one.', 6, [
    'Magnetic (HDD): high capacity at low cost per GB, but moving parts make it vulnerable to shocks when carried',
    'Optical: cheap and durable for archiving but low capacity per disc, slow to write, and many computers no longer have drives',
    'Solid state (flash/SSD): no moving parts so robust when carried, fast read/write, higher cost per GB',
    'Requirements: portability, robustness, speed of transfer, adequate capacity',
    'Recommendation: solid state - the robustness and speed outweigh the price for a working photographer',
    'Final answer: Solid-state storage. It survives being carried between computers, transfers large files quickly, and is compatible with any machine with a USB port; its higher cost per gigabyte is a price worth paying against a fragile HDD or low-capacity optical discs.',
  ]),
  q(BOOL, 'Simplify the expression NOT(A AND B) OR (A AND B) and state the law(s) used.', 3, [
    'Let X = A AND B; the expression is NOT X OR X',
    'By the complement law, X OR NOT X = 1',
    'The expression simplifies to 1 (always true)',
    'Final answer: 1. The expression is a term OR its own complement, which is always true (complement/tautology law).',
  ]),
  q(BOOL, 'Draw or describe the logic circuit of a half adder and give its truth table.', 4, [
    'Sum output = A XOR B',
    'Carry output = A AND B',
    'Truth table: 00 → sum 0 carry 0; 01 → 1, 0; 10 → 1, 0; 11 → sum 0 carry 1',
    'A full adder adds a carry-in using two half adders and an OR gate',
    'Final answer: A half adder is an XOR gate (sum) and an AND gate (carry) on the same two inputs; only 1 + 1 produces a carry.',
  ]),
  q(DT, 'Using 8-bit two\'s complement, calculate 45 - 27. Show your working.', 4, [
    '45 = 00101101; 27 = 00011011',
    'Two\'s complement of 27: invert (11100100), add 1 → 11100101 (-27)',
    '00101101 + 11100101 = (1)00010010; discard the carry out',
    '00010010 = 18',
    'Final answer: 18. Negate 27 by inverting and adding one, add to 45, and discard the carry out of the eighth bit.',
  ]),
  q(DT, 'A status byte uses bit 3 (value 8) to mean "logged in". Show how to (a) test whether the bit is set and (b) set the bit, using bitwise operations and masks.', 4, [
    '(a) AND the byte with the mask 00001000; the result is non-zero if the bit is set',
    'AND clears all other bits and keeps bit 3, so the test isolates it',
    '(b) OR the byte with 00001000; bit 3 becomes 1 and all other bits are unchanged',
    'To clear it, AND with the inverted mask 11110111; to toggle it, XOR with 00001000',
    'Final answer: Test with AND 00001000 (non-zero means set); set with OR 00001000. AND selects, OR sets, XOR toggles.',
  ]),
  q(DT, 'Normalise the floating-point number 0.0011 × 2⁵ (positive, 8-bit mantissa, 4-bit exponent, two\'s complement) and explain why normalisation is used.', 4, [
    'Shift the mantissa left until it begins 0.1: 0.0011 → 0.1100 is two places',
    'Reduce the exponent by 2: 5 - 2 = 3',
    'Normalised: 0.1100000 × 2³ (mantissa 01100000, exponent 0011)',
    'Normalisation gives one unique form and maximum precision, since no leading bits are wasted on zeros',
    'Final answer: 0.1100000 × 2³. Shifting the mantissa left two places and lowering the exponent by two keeps the value the same while putting the leading 1 immediately after the point, which maximises precision and makes the representation unique.',
  ]),
  q(DS, 'Write pseudocode for a procedure that inserts a new value into a linked list immediately after a node called current. The node has fields value and next.', 4, [
    'Create a new node and set its value',
    'newNode.next = current.next (point the new node at what followed current)',
    'current.next = newNode (then link current to the new node)',
    'The order of the two pointer assignments matters: reversing them loses the tail of the list',
    'Final answer: newNode = new Node(value); newNode.next = current.next; current.next = newNode. Linking the new node forward before redirecting current keeps the rest of the list reachable.',
  ]),
  q(DS, 'Explain how a hash table stores and retrieves an item, and describe one way of dealing with a collision.', 5, [
    'A hash function converts the key into an index in an array',
    'The item is stored at that index; retrieval hashes the key again and reads the slot, giving O(1) on average',
    'A collision occurs when two keys hash to the same index',
    'Chaining: each slot holds a linked list of all items that hashed there',
    'Or linear probing: store the item in the next free slot and search onward on retrieval',
    'Final answer: Hash the key to an index, store/read there. Collisions are handled by chaining (a list per slot) or by probing to the next free slot; either way lookups stay near O(1) while the table is not too full.',
  ]),
  q(DB, 'A database has tables Customer(CustomerID, Name, Email) and Order(OrderID, CustomerID, Date, Total). Write an SQL query to list the name of each customer alongside the date and total of every order they have placed, for orders over £100.', 4, [
    'SELECT Customer.Name, Order.Date, Order.Total',
    'FROM Customer INNER JOIN Order ON Customer.CustomerID = Order.CustomerID',
    'WHERE Order.Total > 100',
    'Correct use of the join condition on the primary/foreign key',
    'Final answer: SELECT Customer.Name, Order.Date, Order.Total FROM Customer INNER JOIN Order ON Customer.CustomerID = Order.CustomerID WHERE Order.Total > 100;',
  ]),
  q(DB, 'Explain why a database management system uses record locking when two users are editing data at the same time, and describe a problem that locking can cause.', 4, [
    'Without locking, two users could read the same record, both change it, and the second write would overwrite the first (lost update)',
    'Locking gives one transaction exclusive access to the record until it commits',
    'Problem: other users must wait, reducing concurrency',
    'Problem: deadlock - two transactions each holding a lock the other needs, so neither can proceed',
    'Final answer: Locking prevents lost updates by serialising access to a record, at the cost of making other users wait and the risk of deadlock, which the DBMS must detect and resolve.',
  ]),
  q(NET, 'Describe what happens at each layer of the TCP/IP stack when a web page is requested from a server.', 8, [
    'Application layer: the browser creates an HTTP GET request for the page',
    'Transport layer: TCP splits the request into packets, numbers them, adds source and destination port numbers (e.g. 80/443)',
    'Internet layer: IP adds source and destination IP addresses to each packet and routers use these to forward packets across networks',
    'Link layer: packets are framed with MAC addresses and transmitted over the physical medium (Ethernet, Wi-Fi)',
    'At the server the process runs in reverse: link → internet → transport reassembles packets in order → application (web server) processes the request',
    'The response follows the same path back',
    'Final answer: The request is created by the application, packetised and port-addressed by transport, IP-addressed and routed by the internet layer, and physically sent by the link layer; the server unpacks it layer by layer in reverse and sends the page back the same way.',
  ]),
  q(NET, 'Explain the role of DNS when a user types a web address into a browser.', 4, [
    'The browser needs the IP address of the server, not the domain name',
    'It checks its local cache, then asks the configured DNS resolver',
    'The resolver queries the hierarchy (root → top-level domain → authoritative name server) if the name is not cached',
    'The IP address is returned and cached; the browser then connects to it',
    'Final answer: DNS translates the domain name into an IP address through a hierarchy of name servers, with results cached at each stage so repeated lookups are fast.',
  ]),
  q(SYS, 'Describe how the processor handles an interrupt.', 5, [
    'At the end of the current fetch-decode-execute cycle the processor checks the interrupt register',
    'If an interrupt has a higher priority than the current task, the contents of the registers (PC, accumulator etc.) are pushed onto the stack',
    'The PC is loaded with the address of the interrupt service routine (ISR)',
    'The ISR executes to handle the interrupt',
    'The saved registers are popped back and the original program resumes where it left off',
    'Final answer: Interrupts are checked after each cycle; a higher-priority interrupt causes the current state to be saved to the stack, the ISR to run, and the state to be restored so the interrupted program continues unaware.',
  ]),
  q(LAW, 'A company monitors the emails of its employees to detect leaks of confidential data. Discuss the legal and ethical issues raised.', 9, [
    'Legal: RIPA 2000 regulates interception of communications; monitoring must be lawful and, in practice, employees informed through policy',
    'Legal: the Data Protection Act requires personal data gathered to be processed fairly, for a stated purpose, kept secure and not excessive',
    'Ethical: employees\' privacy versus the company\'s legitimate interest in protecting confidential information',
    'Ethical: proportionality - blanket reading of all email versus targeted monitoring of flagged messages',
    'Ethical: transparency - covert monitoring damages trust; an explicit policy is more defensible',
    'Consequences: chilling effect on communication; potential misuse of collected data',
    'Judgement: monitoring can be justified if it is lawful, proportionate, transparent and limited to the stated purpose',
    'Final answer: The company may monitor if it complies with RIPA and the Data Protection Act, but the ethical case depends on proportionality and transparency. Targeted, disclosed monitoring for a clear purpose is defensible; secret, blanket surveillance of private communication is not.',
  ]),
  q(PT, 'Explain the difference between passing a parameter by value and by reference, and give one situation where each is appropriate.', 4, [
    'By value: a copy of the data is passed; changes inside the subroutine do not affect the caller\'s variable',
    'By reference: the address of the variable is passed; changes inside the subroutine affect the original',
    'By value is appropriate when the subroutine must not alter the caller\'s data, e.g. calculating a total',
    'By reference is appropriate for large structures (avoids copying) or when the subroutine must update the caller\'s variable, e.g. sorting an array in place',
    'Final answer: By value protects the original by copying it; by reference shares it, which is efficient for large data and necessary when the subroutine\'s job is to change it.',
  ]),
  q(CM, 'Explain how divide and conquer is used in merge sort, and why it leads to an efficient algorithm.', 4, [
    'The list is repeatedly split in half until each part has one element (which is trivially sorted)',
    'The sorted halves are merged in linear time by comparing the front items',
    'There are log₂ n levels of splitting, each costing O(n) to merge',
    'So the whole sort is O(n log n) rather than O(n²)',
    'Final answer: Divide (halve until single items), conquer (each is sorted), combine (merge in O(n)). Because there are only log n levels, the total work is O(n log n).',
  ]),
]
