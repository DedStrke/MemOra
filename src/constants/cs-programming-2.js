/*
  Second batch of OCR H446 write/trace questions (see cs-programming.js for
  the format rationale). That first batch concentrated on Component 02's
  core algorithms; this one targets the topics that had ZERO write/trace
  content at all - Assembly Language and the LMC, Object-Oriented
  Programming and Algorithm Complexity - plus Boolean Algebra and Data
  Types, which are tested as a "show your working" derivation on the real
  paper even though they are not algorithmic in the loop-and-array sense.

  LMC and Boolean Algebra questions are genuinely Component 01 material
  (Computer Systems), not Component 02, so they get their own paper label
  rather than borrowing "Component 02 · programming" - a student revising
  from these should know which paper the skill is examined on.
*/

const code = (topic, question, marks, solution, markScheme, pitfalls, paper = 'Component 02 · programming') => ({
  topic,
  question,
  marks,
  paper,
  kind: 'code',
  solution,
  markScheme,
  pitfalls,
})

const trace = (topic, question, marks, snippet, headers, rows, markScheme, pitfalls, paper = 'Component 02 · tracing') => ({
  topic,
  question,
  marks,
  paper,
  kind: 'trace',
  snippet,
  traceHeaders: headers,
  traceRows: rows,
  markScheme,
  pitfalls,
})

const LMC_TOPIC = 'Assembly Language and the Little Man Computer'
const OOP_TOPIC = 'Object-Oriented Programming'
const BIGO_TOPIC = 'Algorithm Complexity (Big O)'
const BOOL_TOPIC = 'Boolean Algebra'
const DT_TOPIC = 'Data Types and Number Representation'
const DS_TOPIC = 'Data Structures'

const SYSTEMS_PAPER = 'Component 01 · systems'

export const CS_PROGRAMMING_2 = [
  /* ----------------------------------------------- Little Man Computer */
  code(
    LMC_TOPIC,
    'Write an LMC program that inputs two numbers and outputs their sum. (6 marks)',
    6,
    `        INP
        STA NUM1
        INP
        ADD NUM1
        OUT
        HLT
NUM1    DAT 0`,
    [
      'INP to read the first number into the accumulator (1)',
      'STA to store it in a labelled memory location before the second INP (1)',
      'A second INP to read the next number (1)',
      'ADD referencing the label the first number was stored in (1)',
      'OUT to display the accumulator (1)',
      'HLT to end the program, and a DAT line reserving the label used (1)',
    ],
    [
      'Reading both numbers with INP before storing the first one - the second INP overwrites the accumulator, so the first value is lost. STA must come before the second INP.',
      'Using ADD on a label that was never DAT-declared, or DAT-declaring it AFTER the instructions that reference it - the assembler still needs the label defined somewhere, but a common slip is forgetting the DAT line entirely.',
      'Omitting HLT. Execution then falls straight into the DAT line and tries to run the stored data as an instruction.',
    ],
    SYSTEMS_PAPER,
  ),

  code(
    OOP_TOPIC,
    'Write pseudocode for a class Rectangle that inherits from a class Shape. Shape has a private attribute name and a function area() that returns 0. Rectangle should set name to "Rectangle" via the parent constructor, store its own width and height privately, and override area() to return the correct value. (7 marks)',
    7,
    `class Shape
   private name

   public procedure new(shapeName)
      name = shapeName
   endprocedure

   public function area()
      return 0
   endfunction
endclass


class Rectangle inherits Shape
   private width
   private height

   public procedure new(w, h)
      super.new("Rectangle")
      width = w
      height = h
   endprocedure

   public function area()
      return width * height
   endfunction
endclass`,
    [
      'Rectangle declared to inherit from Shape (1)',
      "Rectangle's constructor calls the parent constructor, super.new(\"Rectangle\") (1)",
      'width and height declared PRIVATE (1)',
      'The constructor assigns both parameters to the attributes (1)',
      "area() is overridden in Rectangle, not left as the parent's version (1)",
      'The overridden area() returns width * height (1)',
      'name stays PRIVATE to Shape - Rectangle never accesses it directly, only through the inherited constructor (1)',
    ],
    [
      'Forgetting the inherits keyword - Rectangle then has no relationship to Shape at all, and no access to area() to override.',
      'Trying to set Shape\'s private name directly from Rectangle (e.g. name = "Rectangle") instead of calling super.new("Rectangle") - a private attribute is only ever set from inside its own class, which is the whole reason a constructor chain exists.',
      'Not calling super.new(...) at all - the inherited name attribute is then never set, even though the constructor runs without error.',
      "Leaving area() undefined on Rectangle - it would then just return 0 from Shape's version, silently wrong rather than a visible fault.",
      'Making width/height public "to keep it simple" - that throws away the encapsulation the question is testing.',
    ],
    SYSTEMS_PAPER,
  ),

  /* -------------------------------------------------------------- trace */
  trace(
    LMC_TOPIC,
    'The LMC program below divides a number by 3 using repeated subtraction, counting how many times 3 is subtracted before the running total goes negative. Complete a trace table for an input of 8, and state the final output. (7 marks)',
    7,
    `        INP
        STA N
        LDA ZERO
        STA COUNT
LOOP    LDA N
        SUB THREE
        STA N
        BRP CONT
        BRA END
CONT    LDA COUNT
        ADD ONE
        STA COUNT
        BRA LOOP
END     LDA COUNT
        OUT
        HLT
N       DAT 0
COUNT   DAT 0
ZERO    DAT 0
ONE     DAT 1
THREE   DAT 3`,
    ['Pass through LOOP', 'N after SUB THREE', 'BRP taken?', 'COUNT'],
    [
      ['start', '8', ' - ', '0'],
      ['1', '5', 'yes (5 ≥ 0)', '1'],
      ['2', '2', 'yes (2 ≥ 0)', '2'],
      ['3', '-1', 'no (-1 < 0)', '2 (unchanged, branches to END)'],
    ],
    [
      'N = 5 after the first pass (1)',
      'COUNT = 1 after the first pass, since BRP branches when N is still ≥ 0 (1)',
      'N = 2 after the second pass, COUNT = 2 (1)',
      'N = -1 after the third pass (1)',
      'Recognising BRP does NOT branch on a negative accumulator, so control falls through to BRA END instead of CONT (1)',
      'COUNT is not incremented on the failing third pass (1)',
      'Final output is 2, i.e. 8 DIV 3 (1)',
    ],
    [
      'Incrementing COUNT on every pass through LOOP, including the one where the subtraction goes negative - COUNT only increases when BRP actually branches to CONT.',
      'Forgetting that BRP branches on zero as well as positive - "BRP" is "branch if positive", but the LMC treats zero as satisfying it too.',
      'Losing track of which memory location the accumulator holds at each step - LDA reloads it fresh from a label every time, so N and COUNT are two entirely separate values that must each be traced.',
    ],
    SYSTEMS_PAPER,
  ),

  trace(
    OOP_TOPIC,
    'The program below stores a Dog, a Cat and a plain Animal in one array typed as Animal, then calls speak() on each. Complete a trace table showing which version of speak() actually runs for each object, and the output. (6 marks)',
    6,
    `class Animal
   public function speak()
      return "..."
   endfunction
endclass

class Dog inherits Animal
   public function speak()
      return "Woof"
   endfunction
endclass

class Cat inherits Animal
   public function speak()
      return "Meow"
   endfunction
endclass

animals = [new Dog(), new Cat(), new Animal()]
for i = 0 to animals.length - 1
   print(animals[i].speak())
next i`,
    ['Element', 'speak() that runs', 'Output'],
    [
      ['animals[0]', "Dog's own speak()", 'Woof'],
      ['animals[1]', "Cat's own speak()", 'Meow'],
      ['animals[2]', "Animal's speak() (no override)", '...'],
    ],
    [
      'Output "Woof" for the Dog (1)',
      'Output "Meow" for the Cat (1)',
      'Output "..." for the plain Animal (1)',
      "Recognising each call runs the OBJECT's own version of speak(), not the array's declared type (2)",
      'Naming this behaviour polymorphism (1)',
    ],
    [
      'Assuming every element calls Animal.speak() because the array holds "Animal" objects generally - the array only holds the OBJECTS, and each one keeps whichever speak() it was actually created with.',
      'Getting the outputs in the wrong order - the loop runs index 0 to 2, so Dog prints first.',
      'Confusing this with method overLOADING (same name, different parameters) - this is overRIDING (same signature, different class), which is what makes polymorphism work.',
    ],
    SYSTEMS_PAPER,
  ),

  trace(
    BIGO_TOPIC,
    'The table below compares the worst-case number of comparisons for linear search and binary search as the size of a SORTED array doubles. Complete the missing values, then state the time complexity of each search in Big O notation. (7 marks)',
    7,
    `function linearSearch(arr, target)
   for i = 0 to arr.length - 1
      if arr[i] == target then
         return i
      endif
   next i
   return -1
endfunction

function binarySearch(arr, target)
   // halves the search space each time - see cs-programming.js
   // for the full working version
endfunction`,
    ['Array size (n)', 'Linear search - worst case', 'Binary search - worst case'],
    [
      ['4', '4', '2'],
      ['8', '8', '3'],
      ['16', '16', '4'],
      ['32', '32', '5'],
    ],
    [
      'Linear search column correct: 4, 8, 16, 32 (1)',
      'Binary search column correct: 2, 3, 4, 5 (2)',
      'Linear search is O(n) (1)',
      'Binary search is O(log n) (1)',
      'Justifying O(n) from the table: comparisons grow in direct proportion to n (1)',
      'Justifying O(log n): each doubling of n only adds ONE more comparison, because the search space is halved every step (1)',
    ],
    [
      'Reading the table as "binary search is a fixed amount faster" rather than a different GROWTH RATE - the gap between the two columns keeps widening as n grows, it is not a constant multiple.',
      'Forgetting binary search requires the array to already be sorted; that precondition is where its cost is paid instead.',
      'Writing O(n/2) for binary search out of habit from "halving" - halving the search space each step gives log₂n, not n/2.',
    ],
  ),

  trace(
    BIGO_TOPIC,
    'Complete the trace table below for the nested loop, then state its time complexity in Big O notation and explain why. (6 marks)',
    6,
    `count = 0

for i = 1 to n
   for j = 1 to n
      count = count + 1
   next j
next i

print(count)`,
    ['n', 'Times the inner loop body runs (count)'],
    [
      ['2', '4'],
      ['4', '16'],
      ['8', '64'],
    ],
    [
      'count = 4 when n = 2 (1)',
      'count = 16 when n = 4 (1)',
      'count = 64 when n = 8 (1)',
      'Recognising count = n² in every row (1)',
      'Stating the algorithm is O(n²) (1)',
      'Explaining why: the inner loop runs n times for EACH of the n passes of the outer loop, giving n × n operations (1)',
    ],
    [
      'Counting only the outer loop\'s n iterations and missing that the inner loop also runs n times on each of them.',
      'Assuming two nested loops always means O(n²) without checking the inner bound - an inner loop that runs a FIXED number of times (not depending on n) would instead give O(n), just with a larger constant.',
    ],
  ),

  /* ------------------------------------------------------ boolean algebra */
  code(
    BOOL_TOPIC,
    'Simplify the Boolean expression Q = (A . B) + (A . NOT B) using Boolean algebra laws. Show each law used. (5 marks)',
    5,
    `Q = (A . B) + (A . NOT B)
Q = A . (B + NOT B)      [factorise A out - distributive law]
Q = A . 1                [complement law: B + NOT B = 1]
Q = A                    [identity law: A . 1 = A]`,
    [
      'Factorising A out of both terms using the distributive law (1)',
      'Applying the complement law to reduce (B + NOT B) to 1 (1)',
      'Applying the identity law to reduce A . 1 to A (1)',
      'Correct final simplified expression, Q = A (1)',
      'Naming the laws used at each step, not just performing them (1)',
    ],
    [
      'Jumping straight to Q = A without showing the intermediate steps - on the real paper the method marks are for the LAWS applied, not just a correct final answer.',
      'Misremembering the complement law as B + NOT B = B, rather than 1 - a variable ORed with its own complement is always true.',
      'Confusing this with De Morgan\'s law (which is for negating a whole bracket, e.g. NOT(A . B) = NOT A + NOT B) - no bracket is being negated here, so De Morgan\'s does not apply.',
    ],
  ),

  trace(
    BOOL_TOPIC,
    'A logic circuit implements X = (A OR B) AND (NOT C). Complete the truth table for all combinations of A, B and C, then state the value of X when A = 1, B = 0, C = 1. (6 marks)',
    6,
    `X = (A OR B) AND (NOT C)`,
    ['A', 'B', 'C', 'A OR B', 'NOT C', 'X'],
    [
      ['0', '0', '0', '0', '1', '0'],
      ['0', '0', '1', '0', '0', '0'],
      ['0', '1', '0', '1', '1', '1'],
      ['0', '1', '1', '1', '0', '0'],
      ['1', '0', '0', '1', '1', '1'],
      ['1', '0', '1', '1', '0', '0'],
      ['1', '1', '0', '1', '1', '1'],
      ['1', '1', '1', '1', '0', '0'],
    ],
    [
      'A OR B column correct for all eight rows (1)',
      'NOT C column correct for all eight rows (1)',
      'X column correct for all eight rows (2)',
      'X = 1 in exactly the three rows where (A OR B) = 1 AND C = 0 (1)',
      'For A = 1, B = 0, C = 1: X = 0, because NOT C = 0 forces the AND to fail regardless of A OR B (1)',
    ],
    [
      'Working out A OR B and NOT C correctly but then ORing them together for the final column instead of ANDing, since the expression itself contains an OR - the OUTER operator is AND; the inner OR only combines A and B.',
      'Assuming X = 1 whenever A = 1, forgetting that C = 1 (so NOT C = 0) always drags the result to 0 no matter what A and B are.',
    ],
  ),

  /* ---------------------------------------------------------- data types */
  code(
    DT_TOPIC,
    'Convert -23 to 8-bit two\'s complement, showing your working. (5 marks)',
    5,
    `23 in 8-bit binary:      00010111
Invert every bit:        11101000
Add 1:                 +        1
                       ----------
Result:                  11101001`,
    [
      'Correct 8-bit binary for 23: 00010111 (1)',
      'Every bit inverted correctly: 11101000 (1)',
      '1 added to the inverted value (1)',
      'Correct final 8-bit answer: 11101001 (1)',
      'Working shown as three distinct steps, not just a final answer (1)',
    ],
    [
      'Working with 5 bits (10111) instead of the full 8 - the width is part of the question; two\'s complement is meaningless without a fixed number of bits.',
      'Adding the 1 before inverting, or inverting only some of the bits.',
      'Applying invert-and-add-1 to a POSITIVE number "for safety" - a positive value\'s two\'s complement representation is just its ordinary binary form; the process is only for negating.',
    ],
    SYSTEMS_PAPER,
  ),

  /* ----------------------------------------- data structures (migrated - */
  /* was a plain prose question in cs-extra-4.js; moved here in the proper */
  /* code() shape so the pseudocode renders in a monospace block like the  */
  /* rest of this bank, rather than as a paragraph. */
  code(
    DS_TOPIC,
    'Write pseudocode for a procedure that inserts a new node immediately after a given node called current in a singly linked list. Each node has fields value and next. (4 marks)',
    4,
    `procedure insertAfter(current, newValue)
   newNode = new Node(newValue)
   newNode.next = current.next
   current.next = newNode
endprocedure`,
    [
      'Creating a new node holding the given value (1)',
      "Setting the new node's next to current.next BEFORE changing current (1)",
      "Then setting current.next to the new node (1)",
      'The two pointer assignments in this order - reversing them loses the rest of the list (1)',
    ],
    [
      "Setting current.next to the new node FIRST - current.next is then overwritten before the new node has captured what it used to point to, and the rest of the list becomes unreachable.",
      'Forgetting to create the node at all and trying to link "newValue" directly, which has no next field of its own.',
    ],
    SYSTEMS_PAPER,
  ),

  /* ------------------------------------------------------------ databases */
  code(
    'Databases',
    'A database has tables Student(StudentID, Name, YearGroup) and Result(ResultID, StudentID, Subject, Score). Write SQL to list each student\'s name alongside their average score across all subjects, for students in year group 13, highest average first. (6 marks)',
    6,
    `SELECT Student.Name, AVG(Result.Score) AS AverageScore
FROM Student
INNER JOIN Result ON Student.StudentID = Result.StudentID
WHERE Student.YearGroup = 13
GROUP BY Student.StudentID, Student.Name
ORDER BY AverageScore DESC;`,
    [
      'INNER JOIN linking Student and Result on the matching StudentID (2)',
      'AVG() applied to Score, not SUM() or COUNT() (1)',
      'WHERE restricting to YearGroup = 13 (1)',
      'GROUP BY the student, so one average row is produced per student rather than one row per result (1)',
      'ORDER BY the average, descending, for highest first (1)',
    ],
    [
      'Forgetting GROUP BY entirely - without it, AVG() collapses every matching row from every student into a single overall average instead of one per student.',
      'Grouping by StudentID alone in a system that requires every selected non-aggregated column to appear in GROUP BY - Name needs to be included too, even though it depends functionally on StudentID.',
      'Filtering YearGroup inside the JOIN condition rather than a WHERE clause - it still runs, but mixing filter logic into the join condition makes a query harder to read and to mark.',
      'Using WHERE to filter on an AGGREGATE result (e.g. "average above 60") - that requires HAVING, since WHERE filters rows before grouping and the average does not exist yet at that point.',
    ],
    SYSTEMS_PAPER,
  ),

  code(
    'Databases',
    'A table StudentCourse(StudentID, StudentName, StudentEmail, CourseCode, CourseTitle, Tutor) stores every student\'s enrolment, repeating the student\'s name and email on one row per course and the course title and tutor on one row per enrolled student. Identify one update anomaly this design allows, and describe how splitting it into separate tables would remove it. (5 marks)',
    5,
    `Normalised design (3NF):

Student(StudentID, StudentName, StudentEmail)
Course(CourseCode, CourseTitle, Tutor)
Enrolment(StudentID, CourseCode)`,
    [
      'Identifying a genuine update anomaly, e.g. changing a student\'s email requires updating it on every row for every course they take, and missing one leaves inconsistent copies (2)',
      'Alternatively: a course\'s tutor is duplicated on one row per enrolled student, so changing the tutor means finding and updating every one of those rows (2, as an alternative to the above)',
      'Splitting into a Student table (one row per student), a Course table (one row per course) and an Enrolment table linking them removes the repetition (2)',
      'Each fact is then stored in exactly one place, so it can only be updated in one place, whatever the anomaly example given (1)',
    ],
    [
      'Naming a DELETION or INSERTION anomaly instead of an update one when the question specifically asks for update - all three exist in this design, but answer the one asked for.',
      'Splitting the table arbitrarily rather than by what actually depends on what - the correct split groups columns by their key: student details depend on StudentID, course details depend on CourseCode, and the enrolment itself needs both.',
      'Forgetting that Enrolment needs BOTH StudentID and CourseCode - without it there is no way to record which student takes which course once the two are separated.',
    ],
    SYSTEMS_PAPER,
  ),
]
