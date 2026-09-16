/*
  OCR H446 Component 02: writing and tracing code.

  Component 02 is worth 140 marks, the same as Component 01, and most of it
  asks the candidate to WRITE an algorithm, TRACE one, or find the fault in
  one. The bank had none of that - every question was prose. You cannot
  revise for "write a function that…" by reading a definition of a function.

  Three kinds here, because the paper asks three different things:

    code   - write an algorithm to a specification. The mark scheme is the
             marks OCR actually awards, which are for structure (a correct
             loop, a correct condition, the right return) rather than for
             matching the model answer character by character.
    trace  - complete a trace table. These are pure marks: the value of each
             variable after each iteration, and the output. They are also the
             fastest way to find out whether you understand a loop.
    debug  - find and fix the fault. Off-by-one errors, wrong loop bound,
             assignment where comparison was meant.

  Written in OCR's pseudocode style throughout - `for i = 0 to n-1 / next i`,
  `endif`, `endwhile`, `procedure/endprocedure`, `array a[10]`, `a.length`,
  `str.substring(start, length)` - because that is what the paper uses and
  what candidates are expected to read fluently. A correct answer in Python
  or any other consistent language is acceptable on the real paper.
*/

const code = (topic, question, marks, solution, markScheme, pitfalls, starter, paper = 'Component 02 · programming') => ({
  topic,
  question,
  marks,
  paper,
  kind: 'code',
  starter,
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

// Data Structures, Databases and Object-Oriented Programming are all
// Component 01 (Computer Systems) topics in the real spec, even though a
// question about them here asks the student to write or trace code the
// same way a Component 02 question does - the skill is examined that way,
// but the topic itself sits on the other paper, and a student revising
// from this needs to know which paper to expect it on.
const SYSTEMS_PAPER = 'Component 01 · systems'

export const CS_PROGRAMMING = [
  /* ------------------------------------------------ writing algorithms */
  code(
    'Algorithms: Searching, Sorting & Graph Traversal',
    'Write an algorithm that performs a binary search for a value in a sorted array, returning the index of the value or −1 if it is not present. (6 marks)',
    6,
    `function binarySearch(arr, target)
   low = 0
   high = arr.length - 1

   while low <= high
      mid = (low + high) DIV 2

      if arr[mid] == target then
         return mid
      elseif arr[mid] < target then
         low = mid + 1
      else
         high = mid - 1
      endif
   endwhile

   return -1
endfunction`,
    [
      'Initialising low to 0 and high to arr.length − 1 (1)',
      'A loop that continues while low <= high (1) - note <=, not <, or a one-element range is never checked',
      'Calculating the midpoint with integer division (1)',
      'Correctly comparing the middle element with the target and returning mid on a match (1)',
      'Narrowing to the correct half: low = mid + 1 when too small, high = mid − 1 when too big (1)',
      'Returning −1 after the loop ends without a match (1)',
    ],
    [
      'Using `while low < high` - a single remaining element is then never tested, so the search fails on any target at the boundary.',
      'Setting `low = mid` rather than `mid + 1` - the midpoint gets tested forever and the algorithm never terminates.',
      'Forgetting integer division, which gives a fractional index.',
      'Returning 0 or null for "not found" - 0 is a valid index, so it cannot double as the failure value.',
      'Not stating the precondition: binary search requires a SORTED array. Say so.',
    ],
  ),

  code(
    'Programming Techniques',
    'Write a recursive function that returns the nth term of the Fibonacci sequence, where the first two terms are both 1. (5 marks)',
    5,
    `function fibonacci(n)
   if n <= 2 then
      return 1
   else
      return fibonacci(n - 1) + fibonacci(n - 2)
   endif
endfunction`,
    [
      'A function with a single parameter n (1)',
      'A base case that stops the recursion (1)',
      'The base case returns 1 for n = 1 and n = 2 (1)',
      'The recursive case calls the function on n − 1 and n − 2 (1)',
      'Returning the SUM of the two recursive calls (1)',
    ],
    [
      'Omitting the base case, or writing one that is unreachable - the call stack then grows until it overflows.',
      'Using `n == 1` alone as the base case, which leaves fibonacci(2) calling fibonacci(0), off the end of the sequence.',
      'Calling the function but not returning its result.',
      'Worth knowing for a follow-up mark: this version is O(2ⁿ) because it recomputes the same terms repeatedly. An iterative version is O(n), which is why recursion is elegant here but not efficient.',
    ],
  ),

  code(
    'Data Structures',
    'A stack is implemented using an array with a variable `top` holding the index of the top element, initialised to −1. Write the push and pop operations, handling both overflow and underflow. (8 marks)',
    8,
    `procedure push(item)
   if top == stack.length - 1 then
      print("Error: stack overflow")
   else
      top = top + 1
      stack[top] = item
   endif
endprocedure


function pop()
   if top == -1 then
      print("Error: stack underflow")
      return null
   else
      item = stack[top]
      top = top - 1
      return item
   endif
endfunction`,
    [
      'push: checking for a full stack BEFORE writing (1)',
      'push: incrementing top then storing at the new index (1) - in that order',
      'push: reporting overflow rather than writing out of bounds (1)',
      'pop: checking for an empty stack, top == −1 (1)',
      'pop: reading the item at top (1)',
      'pop: decrementing top after reading (1)',
      'pop: returning the item (1)',
      'Reporting underflow rather than returning a garbage value (1)',
    ],
    [
      'Incrementing `top` after storing in push, or decrementing before reading in pop - both off by one and both leave the stack corrupt.',
      'Checking `top == stack.length` for overflow. The last valid index is length − 1.',
      'Overwriting the item on pop. You do not need to clear it - moving `top` is what removes it - but you must read it before decrementing.',
      'Confusing a stack with a queue: a stack is LIFO and only ever touches one end.',
    ],
    undefined,
    SYSTEMS_PAPER,
  ),

  code(
    'Programming Techniques',
    'Write a function that takes a string and returns True if it is a palindrome, ignoring case and spaces. (7 marks)',
    7,
    `function isPalindrome(text)
   cleaned = ""

   // strip spaces and normalise case
   for i = 0 to text.length - 1
      ch = text.substring(i, 1)
      if ch != " " then
         cleaned = cleaned + ch.lower
      endif
   next i

   left = 0
   right = cleaned.length - 1

   while left < right
      if cleaned[left] != cleaned[right] then
         return False
      endif
      left = left + 1
      right = right - 1
   endwhile

   return True
endfunction`,
    [
      'Building a cleaned copy of the string (1)',
      'Removing spaces (1)',
      'Converting to a single case (1)',
      'Two pointers starting at each end, or an equivalent reversal comparison (1)',
      'A loop that moves the pointers towards each other (1)',
      'Returning False as soon as a pair does not match (1)',
      'Returning True only after the whole loop completes (1)',
    ],
    [
      'Returning True inside the loop on the first MATCHING pair - that returns True for almost any string. True can only be returned once every pair has been checked.',
      'Comparing without normalising case, so "Racecar" fails.',
      'Using `while left <= right`, which compares the middle character with itself - harmless but wasteful; `<` is cleaner.',
      'Forgetting that a string of length 0 or 1 is a palindrome - both are handled correctly here because the loop simply does not run.',
    ],
  ),

  code(
    'Databases',
    'A table `Student(StudentID, Name, CourseID, Grade)` exists. Write SQL to list the name and grade of every student on course "CS101" whose grade is above 70, sorted highest first. (5 marks)',
    5,
    `SELECT Name, Grade
FROM Student
WHERE CourseID = 'CS101'
AND Grade > 70
ORDER BY Grade DESC;`,
    [
      'SELECT naming the two required fields, not SELECT * (1)',
      'FROM the correct table (1)',
      'WHERE clause matching CourseID with the value in quotes (1)',
      'AND combining the second condition, Grade > 70 (1)',
      'ORDER BY Grade DESC for highest first (1)',
    ],
    [
      'Using `SELECT *` when the question names the fields - that loses the first mark every time.',
      'Omitting DESC, which sorts lowest first: ORDER BY defaults to ascending.',
      'Using `>=` where the question says "above 70". Read the boundary carefully; "above" excludes 70.',
      'Forgetting quotes around the text literal, or using double quotes where the syntax expects single.',
    ],
    undefined,
    SYSTEMS_PAPER,
  ),

  code(
    'Object-Oriented Programming',
    'Define a class `Account` with a private attribute `balance`, a constructor that sets it, a method to deposit, and a method to withdraw that refuses to overdraw. (8 marks)',
    8,
    `class Account
   private balance

   public procedure new(openingBalance)
      balance = openingBalance
   endprocedure

   public procedure deposit(amount)
      if amount > 0 then
         balance = balance + amount
      endif
   endprocedure

   public function withdraw(amount)
      if amount > 0 AND amount <= balance then
         balance = balance - amount
         return True
      else
         return False
      endif
   endfunction

   public function getBalance()
      return balance
   endfunction
endclass`,
    [
      'class … endclass with a sensible name (1)',
      'balance declared PRIVATE (1) - this is the encapsulation mark',
      'A constructor taking the opening balance (1)',
      'The constructor assigns the parameter to the attribute (1)',
      'deposit adds to the balance (1)',
      'withdraw checks sufficient funds BEFORE subtracting (1)',
      'withdraw subtracts only when the check passes (1)',
      'A public accessor so the balance can be read without being writable (1)',
    ],
    [
      'Declaring `balance` public, which throws away the whole point of the example - encapsulation means the outside world cannot set it directly.',
      'Subtracting first and then checking whether the balance went negative. Check first.',
      'Providing a setter for balance, which reintroduces the problem the private attribute was there to prevent.',
      'Forgetting to guard against negative deposit amounts - a "deposit" of −100 is a withdrawal that bypasses the overdraft check.',
    ],
    undefined,
    SYSTEMS_PAPER,
  ),

  /* -------------------------------------------------------- tracing */
  trace(
    'Programming Techniques',
    'Complete a trace table for the algorithm below, showing the value of each variable after every iteration and the final output. (6 marks)',
    6,
    `total = 0
count = 0

for i = 1 to 5
   if i MOD 2 == 1 then
      total = total + i
      count = count + 1
   endif
next i

print(total)
print(count)`,
    ['i', 'i MOD 2 == 1', 'total', 'count'],
    [
      ['1', 'True', '1', '1'],
      ['2', 'False', '1', '1'],
      ['3', 'True', '4', '2'],
      ['4', 'False', '4', '2'],
      ['5', 'True', '9', '3'],
    ],
    [
      'One mark per correct row of the trace table (5)',
      'Correct final output: 9 then 3 (1)',
    ],
    [
      'Writing a row only for the iterations where the condition is True. The table needs EVERY iteration, including the ones where nothing changes - the unchanged values are still marks.',
      'Forgetting that `for i = 1 to 5` in OCR pseudocode is inclusive of 5.',
      'Confusing MOD (remainder) with DIV (integer division). 3 MOD 2 = 1; 3 DIV 2 = 1 as well, which is why testing only that value hides the error.',
      'The algorithm sums the ODD numbers 1 + 3 + 5 = 9, and counts three of them.',
    ],
  ),

  trace(
    'Algorithms: Searching, Sorting & Graph Traversal',
    'The array [5, 2, 9, 1] is sorted using bubble sort. Complete a trace table showing the array after each PASS. (5 marks)',
    5,
    `array a = [5, 2, 9, 1]
n = a.length

for pass = 0 to n - 2
   for j = 0 to n - 2 - pass
      if a[j] > a[j + 1] then
         temp = a[j]
         a[j] = a[j + 1]
         a[j + 1] = temp
      endif
   next j
next pass`,
    ['Pass', 'Comparisons made', 'Array after the pass'],
    [
      ['start', ' - ', '5, 2, 9, 1'],
      ['1', '(5,2) swap · (5,9) no · (9,1) swap', '2, 5, 1, 9'],
      ['2', '(2,5) no · (5,1) swap', '2, 1, 5, 9'],
      ['3', '(2,1) swap', '1, 2, 5, 9'],
    ],
    [
      'Correct array after pass 1: 2, 5, 1, 9 (1)',
      'Correct array after pass 2: 2, 1, 5, 9 (1)',
      'Correct array after pass 3: 1, 2, 5, 9 (1)',
      'Showing that the comparison range shrinks by one each pass (1)',
      'Recognising the largest element is in its final position after pass 1 (1)',
    ],
    [
      'Comparing the whole array on every pass. The inner loop bound is `n - 2 - pass`: after each pass one more element at the end is already in place, which is the entire optimisation.',
      'Swapping without a temporary variable - `a[j] = a[j+1]` then `a[j+1] = a[j]` copies the same value into both.',
      'Bubble sort is O(n²) and is the slowest of the sorts you are asked about; be ready to say so and to name merge sort as O(n log n).',
    ],
  ),

  /* --------------------------------------------------------- debugging */
  code(
    'Programming Techniques',
    'The function below should return the largest value in an array, but it fails on some inputs. Identify the fault, explain when it fails, and correct it. (5 marks)',
    5,
    `function findMax(arr)
   max = 0                          // FAULT: assumes a value >= 0 exists
   for i = 0 to arr.length - 1
      if arr[i] > max then
         max = arr[i]
      endif
   next i
   return max
endfunction


// CORRECTED
function findMax(arr)
   max = arr[0]                     // start from a value that IS in the array
   for i = 1 to arr.length - 1
      if arr[i] > max then
         max = arr[i]
      endif
   next i
   return max
endfunction`,
    [
      'Identifying that `max` is initialised to 0 rather than to an element of the array (1)',
      'Explaining that it therefore fails when EVERY value is negative (1)',
      'Giving a concrete failing case, e.g. [−5, −2, −9] returns 0, which is not in the array (1)',
      'Correcting the initialisation to arr[0] (1)',
      'Starting the loop from index 1, since element 0 is already the current maximum (1)',
    ],
    [
      'Saying only "it does not work" without stating WHEN. The mark is for identifying the all-negative case.',
      'Initialising to a large negative constant instead. It works for realistic data but still fails for values below the constant, and arr[0] is both simpler and always correct.',
      'Forgetting the empty-array case - arr[0] then does not exist. Worth a sentence: the function should guard against an empty array before reading arr[0].',
    ],
  ),

  code(
    'Computational Methods',
    'A program checks whether a username is valid: 5–12 characters, letters and digits only, starting with a letter. Write the validation function. (7 marks)',
    7,
    `function isValidUsername(name)
   // length check
   if name.length < 5 OR name.length > 12 then
      return False
   endif

   // must start with a letter
   first = name.substring(0, 1).lower
   if first < "a" OR first > "z" then
      return False
   endif

   // every character must be a letter or a digit
   for i = 0 to name.length - 1
      ch = name.substring(i, 1).lower
      isLetter = (ch >= "a" AND ch <= "z")
      isDigit  = (ch >= "0" AND ch <= "9")
      if NOT (isLetter OR isDigit) then
         return False
      endif
   next i

   return True
endfunction`,
    [
      'Checking the length against BOTH bounds (1)',
      'Using the inclusive bounds 5 and 12 correctly (1)',
      'Checking the first character separately (1)',
      'Correctly identifying it as a letter (1)',
      'A loop over every character (1)',
      'Rejecting any character that is neither a letter nor a digit (1)',
      'Returning True only after all checks pass (1)',
    ],
    [
      'Off-by-one on the length: "5–12 characters" is inclusive, so `< 5` and `> 12` are the rejections, not `<= 5` and `>= 12`.',
      'Returning True inside the loop, which accepts a username as soon as ONE character is valid.',
      'Checking only the first character and assuming the rest are fine.',
      'Not normalising case before comparing, so uppercase letters fall outside "a".."z" and are rejected.',
    ],
  ),
]
