/*
  Second depth pass over the OCR H446 Computer Science chapters.

  Written against the specification statement by statement. The audit
  behind it (scripts/chapter-counts.mjs plus a keyword sweep of the notes)
  found whole spec bullets that no chapter mentioned - bit masks and
  shifts, 2D arrays and records, the four parts of thinking ahead,
  requirements and test data, DNS resolution, interrupt handling, the
  named sections of each Act - and others that were named but never
  worked through. Each block below is appended to the chapter it names
  (mergeNotes) and teaches the missing material with a worked example
  where the exam sets one.

  No em dashes; identifiers only ever appear inside code() blocks.
*/

import { h, p, ul, rule, method, worked, pitfalls, tip, table, code, chapter } from './maths-notes-build'

/* ================================================ COMPONENT 1 */

const processor = chapter(
  h('The buses in detail'),
  table(
    ['Bus', 'Direction', 'Carries', 'Width matters because...'],
    [
      ['Address bus', 'CPU → memory (one way)', 'The address the CPU wants to read or write', 'n lines can address 2ⁿ locations: a 32-bit address bus addresses 4 GiB'],
      ['Data bus', 'Both ways', 'The data being transferred', 'Width sets how many bits move per transfer; matches word length'],
      ['Control bus', 'Both ways', 'Signals: read, write, clock, interrupt, bus request', 'Coordinates timing so the other two buses are not used at once'],
    ],
  ),
  h('The registers during one instruction'),
  worked('Trace the registers while the instruction at address 12, ADD 30, is fetched and executed. Address 30 holds 7 and the accumulator holds 5.', [
    'PC = 12. The PC is copied to the MAR: MAR = 12.',
    'PC is incremented: PC = 13.',
    'The contents of address 12 travel along the data bus into the MDR: MDR = ADD 30.',
    'MDR is copied to the CIR: CIR = ADD 30. The control unit decodes it.',
    'The operand address is placed in the MAR: MAR = 30. The value 7 arrives in the MDR.',
    'The ALU adds: ACC = 5 + 7 = 12. The cycle ends and the next fetch starts from PC = 13.',
  ]),
  tip(
    'A "describe the FDE cycle using the registers" question is marked on the REGISTER NAMES at each step. PC → MAR, PC + 1, memory → MDR, MDR → CIR, decode, execute. Six steps, six marks, in that order.',
  ),
  h('Contemporary processing'),
  p(
    'Modern processors combine the classic architecture with features the specification names separately. A multi-core chip has several complete processors sharing a package and usually a shared cache. Pipelining overlaps fetch, decode and execute of consecutive instructions. Multiple levels of cache (L1 per core, L2 per core or pair, L3 shared) sit between registers and RAM. Harvard-style separate instruction and data caches are common inside otherwise von Neumann chips. When asked about "contemporary" architecture, name these and explain that the aim of every one is to keep the processor from waiting on memory.',
  ),
)

const processorTypes = chapter(
  h('Parallel processing - the forms it takes'),
  table(
    ['Form', 'What it is', 'Where it applies'],
    [
      ['Multi-core', 'Several processors on one chip, each running its own instruction stream', 'Desktop and phone CPUs; needs software written to use multiple threads'],
      ['SIMD', 'One instruction applied to many data items at once', 'GPUs, vector units for graphics, matrix and signal processing'],
      ['Distributed / cluster', 'Many separate computers cooperating over a network', 'Supercomputers, cloud services, large simulations'],
    ],
  ),
  p(
    'The limit on all of them is the same: the fraction of the work that must be done in sequence. If a tenth of a task cannot be parallelised, no number of cores can make it more than ten times faster. That is why "add more cores" is not automatically the answer to a slow program, and why the exam wants you to say whether the workload divides.',
  ),
  h('Co-processors'),
  p(
    'A co-processor is an additional processor dedicated to one kind of work - graphics (GPU), floating-point arithmetic, encryption, or machine learning (a neural processing unit). It relieves the main CPU of that work and does it faster because its hardware is built for it. The trade-off is that it is only useful for that class of task and adds cost and power draw.',
  ),
)

const inputOutputStorage = chapter(
  h('Input and output devices - choosing one'),
  p(
    'The question is never "name an input device". It is "which device suits THIS situation and why", and the answer names the constraint: accuracy, speed, environment, cost, or the user. A touchscreen suits a public kiosk (no separate keyboard to damage, intuitive); a barcode scanner suits a checkout (fast, error-free entry of a fixed code); a sensor suits an automated greenhouse (continuous readings with no human present); a large-format printer suits an architect (accuracy on big media).',
  ),
  table(
    ['Device', 'Situation it suits', 'Reason'],
    [
      ['Touchscreen', 'Kiosks, phones, tablets', 'Combines input and output; robust; intuitive without training'],
      ['Barcode / QR scanner', 'Retail, warehouses, ticketing', 'Fast and accurate entry of a code that would be error-prone typed'],
      ['Sensors (light, temperature, motion)', 'Control systems, IoT', 'Continuous automatic input with no user'],
      ['Microphone with speech recognition', 'Hands-free and accessibility', 'Input without hands or sight'],
      ['3D printer', 'Prototyping', 'Output of a physical object from a model'],
      ['Braille display / screen reader', 'Accessibility for blind users', 'Output the user can perceive'],
    ],
  ),
  h('Storage - how each technology works'),
  table(
    ['Type', 'How it works', 'Strengths', 'Weaknesses'],
    [
      ['Magnetic (HDD, tape)', 'Magnetised regions on a spinning platter or tape, read by a moving head', 'Cheap per gigabyte; very high capacity', 'Moving parts: slow to seek, fragile if dropped, noisy'],
      ['Optical (CD, DVD, Blu-ray)', 'Pits and lands read by a laser as changes in reflection', 'Cheap, durable, good for distribution and archive', 'Low capacity; slow; drives increasingly absent'],
      ['Flash / solid state (SSD, USB, SD)', 'Charge trapped in NAND cells; read electrically', 'Fast; silent; robust; low power', 'Higher cost per gigabyte; cells wear with writes'],
    ],
  ),
  rule('RAM', 'Volatile main memory holding the programs and data currently in use. Contents are lost when power is removed.'),
  rule('ROM', 'Non-volatile memory holding the firmware or bootstrap loader that starts the computer. Cannot normally be written to.'),
  rule('Virtual storage', 'Storage held remotely and accessed over a network so that it appears local - cloud drives. Scales on demand and is available anywhere, but depends on the connection and on the provider keeping the data safe.'),
  tip(
    'Do not confuse virtual STORAGE (remote/cloud storage) with virtual MEMORY (using disk as an extension of RAM). Both appear on the spec and both start with "virtual"; the exam will ask about one and mark you down for describing the other.',
  ),
)

const systemsSoftware = chapter(
  h('Interrupts step by step'),
  method('How an interrupt is serviced', [
    'A device or program raises an interrupt and sets a flag in the interrupt register.',
    'At the END of the current fetch-decode-execute cycle the processor checks the register.',
    'If the interrupt has a higher priority than the running task, the current contents of the registers (PC, ACC, CIR...) are pushed onto the stack.',
    'The PC is loaded with the start address of the matching interrupt service routine (ISR).',
    'The ISR runs to completion (a higher-priority interrupt can interrupt it in turn).',
    'The saved registers are popped from the stack and the original program continues exactly where it left off.',
  ]),
  p('Interrupts are why a computer can print, respond to a keypress and download at once without the processor polling every device constantly. The alternative, polling, wastes cycles checking devices that have nothing to say.'),
  h('Scheduling worked example'),
  worked('Three processes arrive at time 0 with burst times A = 6, B = 2, C = 4. Compare average waiting time under first come first served and shortest job first.', [
    'FCFS runs A, B, C. Waiting times: A 0, B 6, C 8. Average = 14 / 3 ≈ 4.7.',
    'SJF runs B, C, A. Waiting times: B 0, C 2, A 6. Average = 8 / 3 ≈ 2.7.',
    'SJF halves the average wait, but a stream of short jobs could starve A indefinitely. Round robin with a quantum of 2 would give A 0-2, B 2-4, C 4-6, A 6-8, C 8-10, A 10-12: fair, but with more context switches.',
  ]),
  table(
    ['Algorithm', 'Rule', 'Good for', 'Weakness'],
    [
      ['First come first served', 'Run in arrival order to completion', 'Simple; no starvation', 'A long job delays everything behind it'],
      ['Shortest job first', 'Run the shortest burst next', 'Minimises average wait', 'Needs burst times in advance; long jobs can starve'],
      ['Shortest remaining time', 'Pre-emptive SJF: switch if a shorter job arrives', 'Responsive', 'Even more starvation risk; more switching'],
      ['Round robin', 'Each process gets a fixed time slice in turn', 'Fair; interactive systems', 'Overhead of switching; quantum size is a compromise'],
      ['Multilevel feedback queue', 'Several queues by priority; jobs move down if they use their whole slice', 'Balances interactive and batch work', 'Complex to tune'],
    ],
  ),
  h('Paging against segmentation'),
  table(
    ['', 'Paging', 'Segmentation'],
    [
      ['Unit', 'Fixed-size pages (e.g. 4 KiB)', 'Variable-size segments matching program parts'],
      ['Divides memory by', 'Physical convenience', 'Logical structure (a function, an array, a stack)'],
      ['Fragmentation', 'Internal: the last page is partly empty', 'External: gaps between segments of different sizes'],
      ['Sharing and protection', 'Awkward - a page may hold parts of two things', 'Natural - protect or share a whole segment'],
    ],
  ),
  p('Virtual memory uses either to move pages or segments not currently needed out to disk. When the working set of a program exceeds RAM, the system spends its time swapping rather than computing - disk thrashing - and the only cures are more RAM or fewer running programs.'),
)

const translators = chapter(
  h('The stages of compilation, with what each produces'),
  table(
    ['Stage', 'Input', 'Output', 'Errors found'],
    [
      ['Lexical analysis', 'Source text', 'A stream of tokens (keywords, identifiers, operators); comments and whitespace removed; symbol table started', 'Invalid characters'],
      ['Syntax analysis', 'Tokens', 'An abstract syntax tree built by checking the tokens against the grammar', 'Syntax errors: missing brackets, misplaced keywords'],
      ['Code generation', 'Syntax tree', 'Machine code or intermediate code', '-'],
      ['Optimisation', 'Generated code', 'Faster or smaller code: redundant instructions removed, loops simplified', '-'],
    ],
  ),
  worked('What does the lexer produce for total = count + 1?', [
    'Tokens: identifier(total), operator(=), identifier(count), operator(+), number(1).',
    'Symbol table entries are created for total and count with their types once known.',
    'The parser then checks this token sequence matches the grammar for an assignment statement and builds a tree with = at the root.',
  ]),
  h('Linkers and loaders'),
  rule('Linker', 'Combines the compiled program with the compiled library code it calls, resolving each reference to a library routine into an address. Static linking copies the library into the executable; dynamic linking leaves it as a reference to a shared library (DLL) loaded at run time.'),
  rule('Loader', 'Part of the operating system that copies the executable from storage into memory, sets up its addresses, and starts it running.'),
  table(
    ['', 'Static linking', 'Dynamic linking'],
    [
      ['Executable size', 'Larger - libraries included', 'Smaller - libraries shared'],
      ['Dependencies', 'None; runs anywhere', 'Needs the right library version present'],
      ['Updates', 'Must recompile to update a library', 'Updating the shared library updates every program'],
      ['Memory', 'Each program has its own copy', 'One copy in memory serves all programs'],
    ],
  ),
  h('Open source and closed source'),
  table(
    ['', 'Open source', 'Closed source (proprietary)'],
    [
      ['Source code', 'Available to read, modify and redistribute under licence', 'Kept secret; only the executable is supplied'],
      ['Cost', 'Usually free to use', 'Usually paid, per licence'],
      ['Support', 'Community forums; paid support optional', 'Vendor support as part of the licence'],
      ['Security', 'Many eyes can audit it; fixes come from anyone', 'Only the vendor can fix it; vulnerabilities may stay hidden'],
      ['Customisation', 'Anyone can adapt it', 'Only what the vendor allows'],
    ],
  ),
)

const methodologies = chapter(
  h('Requirements and feasibility'),
  rule('Functional requirement', 'Something the system must DO: "the system shall calculate the total including VAT".'),
  rule('Non-functional requirement', 'A quality the system must HAVE: response within two seconds; availability of 99.9%; compliance with accessibility standards.'),
  p('A feasibility study asks whether the project should go ahead at all: technically (can it be built with available technology), economically (do the benefits justify the cost), legally (does it comply with data protection and other law), operationally (will it fit how the organisation works) and in time (can it be delivered when needed).'),
  h('Testing - the vocabulary the spec expects'),
  table(
    ['Term', 'Meaning'],
    [
      ['Normal test data', 'Typical valid input that the program should process correctly'],
      ['Boundary (extreme) test data', 'Values at the edges of the valid range, and just outside it - where off-by-one errors live'],
      ['Erroneous (invalid) test data', 'Input the program should reject without crashing'],
      ['Black-box testing', 'Testing outputs against expected outputs with no knowledge of the code'],
      ['White-box testing', 'Testing with knowledge of the code, to exercise every path and branch'],
      ['Alpha testing', 'In-house testing by the development team'],
      ['Beta testing', 'Release to a limited set of real users to find problems in real conditions'],
      ['Acceptance testing', 'The client checks the system meets the agreed requirements before sign-off'],
    ],
  ),
  worked('A field accepts a month number 1 to 12. Give a test plan.', [
    'Normal: 6 - expected accepted.',
    'Boundary: 1 and 12 accepted; 0 and 13 rejected.',
    'Erroneous: "June", -3, 6.5, blank - each rejected with a message, no crash.',
    'Every row states the expected outcome BEFORE the test runs, so the test can fail.',
  ]),
  h('Choosing a methodology - what decides it'),
  table(
    ['If the project...', 'Then...', 'Because'],
    [
      ['has fixed, well-understood requirements and a safety case', 'Waterfall', 'Each stage is signed off; documentation is complete; changes are expensive but rare'],
      ['has requirements that will change as the client sees it', 'Agile / XP', 'Short iterations deliver working software early and absorb change'],
      ['is large and high-risk', 'Spiral', 'Each loop analyses risk before committing to the next stage'],
      ['needs a prototype fast for the client to react to', 'RAD', 'Prototyping with user feedback; time-boxed'],
    ],
  ),
  tip('The 9-mark "which methodology" question is answered by matching the scenario\'s features - size, risk, how well the client knows what they want, deadline, safety - to the model. Naming the model without the match scores little.'),
)

const compression = chapter(
  h('Run-length encoding worked'),
  worked('Compress the string AAAABBBCCDAA using run-length encoding.', [
    'Group the runs: AAAA, BBB, CC, D, AA.',
    'Encode each as count + symbol: 4A 3B 2C 1D 2A.',
    'The run of length 1 costs MORE than the original character - RLE only helps when runs are long, which is why it suits simple images with large areas of one colour and does not suit text.',
  ]),
  h('Dictionary coding worked'),
  worked('Compress "the cat and the dog and the bird" with a dictionary.', [
    'Build the dictionary of repeated words: 1 = the, 2 = and.',
    'Replace: "1 cat 2 1 dog 2 1 bird".',
    'The dictionary must be stored with the data. The saving grows with the length of the text and the frequency of repeats; ZIP and PNG use dictionary methods (LZ77/LZW).',
  ]),
  h('Symmetric against asymmetric encryption'),
  table(
    ['', 'Symmetric', 'Asymmetric'],
    [
      ['Keys', 'One shared key encrypts and decrypts', 'A public key encrypts; only the matching private key decrypts'],
      ['Key distribution', 'The problem: the key must be sent securely somehow', 'Solved: the public key can be published freely'],
      ['Speed', 'Fast', 'Slow - hundreds of times slower'],
      ['Used for', 'Bulk data once a key is agreed', 'Exchanging the symmetric key; digital signatures'],
    ],
  ),
  p('In practice the two are combined: HTTPS uses asymmetric encryption to agree a session key, then symmetric encryption for everything else. A digital signature reverses the asymmetric roles - the sender encrypts a hash with their PRIVATE key, and anyone can verify it with the public key, proving who sent it and that it was not altered.'),
  h('Hashing - what it is for'),
  ul([
    'A hash function turns input of any size into a fixed-size output, and cannot be reversed. The same input always gives the same hash.',
    'Passwords are stored as hashes: a leaked database reveals nothing usable, and a login is checked by hashing the attempt and comparing.',
    'A hash verifies integrity: if a downloaded file hashes to the published value, it was not altered.',
    'Hash tables use a (different, fast) hash to turn a key into an array index.',
  ]),
  pitfalls([
    'Calling hashing "encryption". Encryption is reversible with a key; hashing is one-way by design.',
    'Saying lossy compression "loses quality" without saying WHAT is discarded: data the eye or ear is unlikely to notice - frequencies outside hearing, colour detail in busy regions.',
  ]),
)

const databases = chapter(
  h('Entity-relationship modelling'),
  p(
    'An entity is a thing the database stores information about (Customer, Order, Product); an attribute is a fact about it; a relationship links entities. Relationships are one-to-one, one-to-many or many-to-many. A many-to-many cannot be stored directly in a relational database: it is broken into two one-to-many relationships through a LINK table whose primary key is the pair of foreign keys.',
  ),
  worked('A student takes many courses and a course has many students. Model this.', [
    'Entities: Student(StudentID, Name), Course(CourseID, Title).',
    'The relationship is many-to-many, so add a link entity Enrolment(StudentID, CourseID, Grade).',
    'Enrolment\'s primary key is the composite (StudentID, CourseID); each is a foreign key to its parent table.',
    'Now Student to Enrolment is one-to-many and Course to Enrolment is one-to-many.',
  ]),
  h('Normalisation worked from a flat file'),
  worked('A flat file has columns OrderID, Date, CustomerName, CustomerEmail, ProductCode, ProductName, Quantity, with one row per product ordered. Normalise it to 3NF.', [
    '1NF: no repeating groups and every field atomic - already true, with the composite key (OrderID, ProductCode).',
    '2NF: remove partial dependencies on part of the key. ProductName depends only on ProductCode; Date, CustomerName, CustomerEmail depend only on OrderID. Split into Order(OrderID, Date, CustomerName, CustomerEmail), Product(ProductCode, ProductName) and OrderLine(OrderID, ProductCode, Quantity).',
    '3NF: remove transitive dependencies on a non-key field. CustomerEmail depends on the customer, not the order. Split out Customer(CustomerID, Name, Email) and store CustomerID in Order.',
    'Result: four tables, no redundancy. Changing a customer\'s email is one update; deleting an order does not lose the customer.',
  ]),
  h('SQL - the statements you must write'),
  code(
    [
      'SELECT Name, Email FROM Customer WHERE City = "Leeds" ORDER BY Name;',
      '',
      'SELECT Customer.Name, Order.Date',
      'FROM Customer INNER JOIN Order ON Customer.CustomerID = Order.CustomerID',
      'WHERE Order.Total > 100;',
      '',
      'INSERT INTO Product (ProductCode, ProductName, Price) VALUES ("P17", "Kettle", 24.99);',
      '',
      'UPDATE Product SET Price = 19.99 WHERE ProductCode = "P17";',
      '',
      'DELETE FROM Product WHERE ProductCode = "P17";',
    ],
    'SQL',
  ),
  ul([
    'SELECT picks columns; FROM names the table; WHERE filters rows; ORDER BY sorts (ASC default, DESC to reverse).',
    'A JOIN combines tables on a key; write both table names before column names when they could be ambiguous.',
    'Wildcards: SELECT * returns every column; LIKE "Sm%" matches names starting with Sm.',
    'Aggregates: COUNT(*), SUM(Total), AVG(Price), with GROUP BY to aggregate per category.',
  ]),
  h('Capturing, selecting, managing and exchanging data'),
  table(
    ['Stage', 'Means'],
    [
      ['Capture', 'Forms, barcode and QR scanning, sensors, optical mark and character recognition, imports from other systems'],
      ['Select and manage', 'Queries, validation on entry, indexes for speed, backups, access rights'],
      ['Exchange', 'Export in agreed formats: CSV for tables, XML and JSON for structured data, EDI between businesses'],
    ],
  ),
)

const networks = chapter(
  h('LAN and WAN'),
  table(
    ['', 'LAN', 'WAN'],
    [
      ['Area', 'One site: a building or campus', 'Geographically spread: cities, countries'],
      ['Ownership', 'The organisation owns the hardware', 'Uses third-party links (telecoms, leased lines, the internet)'],
      ['Speed', 'High', 'Lower and more variable'],
      ['Example', 'School network', 'A bank\'s branches connected to head office; the internet'],
    ],
  ),
  h('Network hardware'),
  table(
    ['Device', 'Job'],
    [
      ['Network interface card (NIC)', 'Connects a device to the network; holds its MAC address'],
      ['Switch', 'Connects devices in a LAN and forwards frames only to the port of the destination MAC address'],
      ['Router', 'Connects networks; forwards packets between them using IP addresses and a routing table'],
      ['Wireless access point', 'Lets Wi-Fi devices join a wired LAN'],
      ['Modem', 'Converts between the digital network and the signal on the phone/cable line'],
      ['Firewall', 'Filters traffic in and out of a network against rules'],
    ],
  ),
  h('DNS resolution step by step'),
  method('What happens when you type a web address', [
    'The browser checks its own cache, then the operating system cache, for the IP address of the domain.',
    'If absent, it asks the recursive resolver (usually the ISP\'s or a public one).',
    'The resolver asks a root server, which points to the server for the top-level domain (.app, .uk).',
    'The TLD server points to the authoritative name server for the domain.',
    'The authoritative server returns the IP address. Each server on the way caches it for its time-to-live.',
    'The browser connects to the IP address; the HTTP request follows.',
  ]),
  h('Security threats and defences'),
  table(
    ['Threat', 'What it does', 'Defence'],
    [
      ['Malware (virus, worm, trojan, ransomware)', 'Damages, steals or encrypts data; spreads', 'Anti-malware, updates, least privilege, backups'],
      ['Phishing / social engineering', 'Tricks users into revealing credentials', 'Training, spam filters, two-factor authentication'],
      ['Brute force', 'Tries many passwords', 'Strong passwords, lockout after failed attempts, 2FA'],
      ['Denial of service', 'Floods a server so real users cannot get through', 'Traffic filtering, rate limiting, distributed capacity'],
      ['Data interception', 'Reads data in transit', 'Encryption (HTTPS, VPN)'],
      ['SQL injection', 'Malicious input runs as a database command', 'Input validation, parameterised queries'],
    ],
  ),
  rule('Proxy server', 'A server that makes requests on behalf of clients. It can cache pages (faster, less bandwidth), filter content, and hide the internal addresses of the clients.'),
)

const web = chapter(
  h('Reading HTML, CSS and JavaScript'),
  p('The exam gives short fragments and asks what they do, or asks for one line. Know the anatomy: an HTML element is an opening tag, content and closing tag; attributes live in the opening tag; a class or id lets CSS and JavaScript target the element.'),
  code(
    [
      '<div id="menu" class="box">',
      '  <h1>Revision</h1>',
      '  <p class="note">Two chapters left.</p>',
      '  <a href="dashboard.html">Back</a>',
      '  <img src="kon.webp" alt="Kon" />',
      '</div>',
    ],
    'HTML',
  ),
  code(
    [
      '.box { border: 1px solid #ccc; padding: 8px; }   /* every element with class box */',
      '#menu { background: yellow; }                     /* the one element with id menu */',
      'h1 { color: navy; font-size: 24px; }              /* every h1 */',
    ],
    'CSS',
  ),
  code(
    [
      'function check() {',
      '  var name = document.getElementById("name").value;',
      '  if (name == "") {',
      '    alert("Enter your name");',
      '    return false;',
      '  }',
      '  return true;',
      '}',
    ],
    'JavaScript',
  ),
  ul([
    'A CSS selector beginning with a dot targets a CLASS (many elements); one beginning with a hash targets an ID (one element); a bare name targets every element of that tag.',
    'External CSS is linked from the head so many pages share one stylesheet; internal CSS is a style block in one page; inline CSS is a style attribute on one element.',
    'JavaScript reaches the page through the DOM: getElementById, .value, .innerHTML, and event handlers such as onclick.',
  ]),
  h('PageRank worked'),
  worked('Pages A and B link to C; C links to A. With a damping factor of 0.85 and starting ranks of 1, calculate one iteration of PageRank for C.', [
    'PR(C) = (1 − d) + d × (PR(A) / links out of A + PR(B) / links out of B).',
    'A has 1 outgoing link, B has 1: PR(C) = 0.15 + 0.85 × (1/1 + 1/1) = 0.15 + 1.7 = 1.85.',
    'C\'s rank rises because two pages point at it; A\'s rank would be 0.15 + 0.85 × (1.85 / 1) after C\'s new value feeds back. Iterate until the values stop changing.',
  ]),
  p('The damping factor models a surfer who follows links most of the time but occasionally jumps to a random page; without it, a page with no outgoing links would trap all the rank.'),
)

/* ================================================ COMPONENT 1: DATA */

const dataTypes = chapter(
  h('Two\'s complement worked'),
  worked('Represent −37 in 8-bit two\'s complement, then use it to calculate 50 − 37.', [
    '37 = 00100101.',
    'Invert every bit: 11011010. Add 1: 11011011. So −37 = 11011011.',
    'Check: −128 + 64 + 16 + 8 + 2 + 1 = −37.',
    '50 = 00110010. Add: 00110010 + 11011011 = 1 00001101.',
    'Discard the carry out of bit 8: 00001101 = 13. So 50 − 37 = 13.',
  ]),
  rule('Overflow', 'When a result needs more bits than are available. In two\'s complement, adding two positives and getting a negative (or two negatives and getting a positive) signals overflow.'),
  h('Hexadecimal'),
  method('Binary to hex and back', [
    'Split the binary into groups of four bits from the right; pad the left with zeros.',
    'Convert each group to one hex digit (0-9, A-F).',
    'Hex to binary is the reverse: each hex digit becomes four bits.',
    'Hex to denary: multiply each digit by its power of 16. 2F = 2 × 16 + 15 = 47.',
  ]),
  p('Hex is used because it is a compact, human-readable form of binary with an exact conversion: colours (#1D4ED8), memory addresses, MAC addresses, error codes.'),
  h('Shifts and masks'),
  table(
    ['Operation', 'Effect', 'Example on 10010110'],
    [
      ['Logical shift left by n', 'Multiply by 2ⁿ; zeros fill from the right; bits fall off the left', '00101100 (bit lost)'],
      ['Logical shift right by n', 'Divide by 2ⁿ for unsigned numbers; zeros fill from the left', '01001011'],
      ['Arithmetic shift right', 'Divide by 2ⁿ keeping the sign: the sign bit is copied in', '11001011 (sign preserved)'],
      ['AND with a mask', 'Keeps bits where the mask is 1, clears the rest: test or extract', 'AND 00001111 → 00000110'],
      ['OR with a mask', 'Sets bits where the mask is 1: set a flag', 'OR 00000001 → 10010111'],
      ['XOR with a mask', 'Flips bits where the mask is 1: toggle a flag', 'XOR 11111111 → 01101001'],
    ],
  ),
  worked('A byte holds eight on/off flags. Bit 5 (value 32) means "verified". Set it, then test it, then clear it.', [
    'Set: flags = flags OR 00100000.',
    'Test: if (flags AND 00100000) ≠ 0 then verified.',
    'Clear: flags = flags AND 11011111 (the mask inverted).',
  ]),
  h('Floating point worked'),
  worked('Convert the floating-point number with 8-bit mantissa 01011000 and 4-bit exponent 0011 (both two\'s complement) to denary.', [
    'The mantissa is positive (sign bit 0) and represents 0.1011000 with the point after the sign bit.',
    'The exponent 0011 = 3, so move the point three places right: 0101.1000.',
    '0101.1 = 4 + 1 + 0.5 = 5.5.',
  ]),
  worked('Normalise 00011010 × 2⁰¹⁰⁰ (mantissa 8 bits, exponent 4 bits).', [
    'The mantissa 0.0011010 should start 0.1 - shift left 2 places: 0.1101000.',
    'Compensate by subtracting 2 from the exponent: 0100 (4) becomes 0010 (2).',
    'Normalised: 01101000 × 2⁰⁰¹⁰. Same value, maximum precision.',
  ]),
  worked('Add 0.1010 × 2² and 0.1100 × 2¹ (4-bit mantissas).', [
    'Align exponents to the larger: 0.1100 × 2¹ = 0.0110 × 2².',
    'Add mantissas: 0.1010 + 0.0110 = 1.0000.',
    'The result overflows the point - renormalise: 0.1000 × 2³ = 4. (Check: 2.5 + 1.5 = 4.)',
  ]),
  h('Character sets'),
  table(
    ['', 'ASCII', 'Unicode'],
    [
      ['Bits per character', '7 (128 characters), extended to 8', 'Up to 32; UTF-8 uses 1 to 4 bytes'],
      ['Coverage', 'English letters, digits, punctuation, control codes', 'Every writing system, symbols, emoji'],
      ['Storage', 'Compact', 'Larger for non-English text; UTF-8 keeps ASCII text the same size'],
      ['Compatibility', 'The first 128 Unicode codes ARE ASCII', ''],
    ],
  ),
  pitfalls([
    'Forgetting that the MSB in two\'s complement is NEGATIVE, and reading 11110000 as 240.',
    'Using a logical shift right on a negative number and losing the sign.',
    'Normalising a NEGATIVE mantissa to start 0.1 - it must start 1.0.',
    'Not adjusting the exponent when shifting the mantissa: the value changes.',
  ]),
)

const dataStructures = chapter(
  h('Arrays, records and tuples'),
  table(
    ['Structure', 'What it is', 'Example'],
    [
      ['1D array', 'Fixed-size, ordered list of items of one type, accessed by index', 'scores[4]'],
      ['2D array', 'A table: rows and columns, two indices', 'grid[row][col] - a chessboard, a spreadsheet'],
      ['3D array', 'A stack of tables: three indices', 'voxels[x][y][z], colour[frame][row][col]'],
      ['Record', 'A fixed set of named fields of different types', 'student.name, student.age'],
      ['List', 'A resizable ordered collection', 'append, remove, insert'],
      ['Tuple', 'An ordered, IMMUTABLE collection', '(53.4, −1.5) for a coordinate'],
    ],
  ),
  code(
    [
      'grid = new Array(8, 8)          // 2D: 8 rows of 8',
      'grid[0][0] = "R"',
      'for row = 0 to 7',
      '    for col = 0 to 7',
      '        print(grid[row][col])',
      '    next col',
      'next row',
    ],
    'exam reference language',
  ),
  h('Stack and queue operations'),
  code(
    [
      '// Stack: top starts at -1',
      'procedure push(value)',
      '    if top == maxSize - 1 then error("full") endif',
      '    top = top + 1',
      '    items[top] = value',
      'endprocedure',
      '',
      'function pop()',
      '    if top == -1 then error("empty") endif',
      '    value = items[top]',
      '    top = top - 1',
      '    return value',
      'endfunction',
      '',
      '// Circular queue: front, rear, size',
      'procedure enqueue(value)',
      '    if size == maxSize then error("full") endif',
      '    rear = (rear + 1) MOD maxSize',
      '    items[rear] = value',
      '    size = size + 1',
      'endprocedure',
      '',
      'function dequeue()',
      '    if size == 0 then error("empty") endif',
      '    value = items[front]',
      '    front = (front + 1) MOD maxSize',
      '    size = size - 1',
      '    return value',
      'endfunction',
    ],
    'exam reference language',
  ),
  p('The MOD in the circular queue is the whole point: without it the front pointer marches off the end of the array while the space behind it sits empty.'),
  h('Linked list operations'),
  method('Insert a node after the node current', [
    'Create the new node and set its data.',
    'Point the new node\'s next at current.next.',
    'Point current.next at the new node.',
    'Do steps 2 and 3 in that order, or the rest of the list is lost.',
  ]),
  method('Delete the node after current', [
    'Point current.next at current.next.next.',
    'The skipped node is unreachable; free its memory (or let the garbage collector).',
    'A node with no next pointer (null) marks the end of the list.',
  ]),
  h('Binary search tree operations'),
  code(
    [
      'function search(node, target)',
      '    if node == null then return false endif',
      '    if target == node.value then return true endif',
      '    if target < node.value then',
      '        return search(node.left, target)',
      '    else',
      '        return search(node.right, target)',
      '    endif',
      'endfunction',
    ],
    'exam reference language',
  ),
  p('Insertion follows the same comparisons and attaches the new node where the search falls off the tree. Deleting a node with two children is the awkward case: replace it with the smallest value in its right subtree (its in-order successor) and delete that.'),
  table(
    ['Traversal', 'Order', 'Use'],
    [
      ['Pre-order', 'Node, left, right', 'Copying a tree; prefix notation'],
      ['In-order', 'Left, node, right', 'Gives a binary search tree\'s values in sorted order'],
      ['Post-order', 'Left, right, node', 'Deleting a tree; postfix (reverse Polish) notation'],
    ],
  ),
  h('Graphs - how they are stored'),
  table(
    ['Representation', 'What it is', 'Best when'],
    [
      ['Adjacency matrix', 'A 2D array; cell [i][j] holds the edge weight (or 0/1)', 'The graph is dense; fast to check if an edge exists'],
      ['Adjacency list', 'For each node, a list of its neighbours (and weights)', 'The graph is sparse; saves memory; fast to find neighbours'],
    ],
  ),
)

const boolean = chapter(
  h('The laws, with what each lets you do'),
  table(
    ['Law', 'AND form', 'OR form'],
    [
      ['Identity', 'A · 1 = A', 'A + 0 = A'],
      ['Null', 'A · 0 = 0', 'A + 1 = 1'],
      ['Idempotent', 'A · A = A', 'A + A = A'],
      ['Complement', 'A · Ā = 0', 'A + Ā = 1'],
      ['Double negation', '¬¬A = A', ''],
      ['Commutative', 'A · B = B · A', 'A + B = B + A'],
      ['Associative', '(A · B) · C = A · (B · C)', '(A + B) + C = A + (B + C)'],
      ['Distributive', 'A · (B + C) = A·B + A·C', 'A + (B · C) = (A + B) · (A + C)'],
      ['Absorption', 'A · (A + B) = A', 'A + A·B = A'],
      ['De Morgan', '¬(A · B) = ¬A + ¬B', '¬(A + B) = ¬A · ¬B'],
    ],
  ),
  worked('Simplify A·B + A·¬B + ¬A·B.', [
    'Factor the first two terms: A·(B + ¬B) + ¬A·B.',
    'Complement: B + ¬B = 1, so A·1 + ¬A·B = A + ¬A·B.',
    'Distributive: A + ¬A·B = (A + ¬A)·(A + B) = 1·(A + B).',
    'Result: A + B.',
  ]),
  h('Karnaugh map worked, three variables'),
  worked('Simplify the expression whose truth table gives output 1 for ABC = 000, 001, 011, 010, 110.', [
    'Draw a 2 × 4 map with A down the side and BC across the top in Gray code order 00, 01, 11, 10.',
    'Row A = 0: all four cells are 1 (000, 001, 011, 010). Row A = 1: only BC = 10 is 1 (110).',
    'Group the whole top row: A varies? No - it is fixed at 0, while B and C take every value. That group is ¬A.',
    'Group the cells 010 and 110 (BC = 10, both rows): A varies, B = 1, C = 0. That group is B·¬C.',
    'Expression: ¬A + B·¬C. Groups must be rectangles of 1, 2, 4 or 8 cells and may wrap around the edges.',
  ]),
  h('Adders'),
  table(
    ['Circuit', 'Inputs', 'Outputs', 'Built from'],
    [
      ['Half adder', 'A, B', 'Sum = A XOR B; Carry = A AND B', 'One XOR, one AND'],
      ['Full adder', 'A, B, Carry in', 'Sum = A XOR B XOR Cin; Cout = (A AND B) OR (Cin AND (A XOR B))', 'Two half adders and an OR'],
      ['Ripple-carry adder', 'Two n-bit numbers', 'n-bit sum', 'n full adders, each carry feeding the next'],
    ],
  ),
  h('The D-type flip-flop'),
  p('A flip-flop is the smallest circuit with memory: its output depends on what happened before, not only on its current inputs. A D-type has a data input D and a clock input. On the clock\'s rising edge, Q takes the value of D and holds it until the next edge, whatever D does in between. A register is a row of D-types sharing a clock; it is how the CPU stores a value for exactly one cycle. Because it is edge-triggered, the whole system changes state in step, which is what makes a synchronous clock possible.'),
)

/* ================================================ COMPONENT 1: LAW */

const ethics = chapter(
  h('The four Acts, section by section'),
  table(
    ['Act', 'What it covers', 'What it means for a computer scientist'],
    [
      ['Data Protection Act 2018 (and UK GDPR)', 'Personal data must be processed lawfully, fairly and transparently; for a specified purpose; adequate, relevant and limited; accurate; kept no longer than necessary; secure. Individuals have rights of access, rectification and erasure', 'Design systems to collect only what is needed, secure it, and let users see and delete their data'],
      ['Computer Misuse Act 1990', 'Section 1: unauthorised access. Section 2: unauthorised access with intent to commit a further crime. Section 3: unauthorised modification, including malware. Section 3A: making or supplying tools for these', 'Penetration testing needs written authorisation; "just looking" is an offence'],
      ['Copyright, Designs and Patents Act 1988', 'Original works, including software, belong to their creator. Copying, distributing or adapting without permission infringes', 'Licences (open source, proprietary) are the mechanism for permitted use; piracy is theft'],
      ['Regulation of Investigatory Powers Act 2000', 'Regulates surveillance and interception by public bodies; allows demands to decrypt data or hand over keys; requires ISPs to be able to assist', 'Encryption does not put data beyond the law; monitoring must be authorised'],
    ],
  ),
  h('The moral and ethical issues the spec names'),
  table(
    ['Issue', 'The case for', 'The case against / the risk'],
    [
      ['Computers in the workforce', 'Productivity, safety in dangerous jobs, new roles', 'Job losses, deskilling, unequal impact on low-paid work'],
      ['Automated decision making', 'Consistent, fast, scalable', 'Bias baked into training data, no explanation, no appeal'],
      ['Artificial intelligence', 'Diagnosis, translation, discovery', 'Accountability when it is wrong; concentration of power; misuse'],
      ['Environmental effects', 'Efficiency, remote working, smart grids', 'Energy of data centres and mining; e-waste; rare materials'],
      ['Censorship and the internet', 'Removing harmful and illegal content', 'Who decides; suppression of dissent; over-blocking'],
      ['Monitoring behaviour', 'Security, safety, fraud detection', 'Privacy, chilling effect, function creep'],
      ['Analysing personal information', 'Personalisation, medical research', 'Consent, profiling, discrimination'],
      ['Piracy and offensive communications', 'Access to culture; free speech', 'Creators unpaid; harassment and harm'],
      ['Layout, colour paradigms and character sets', 'Designing for a global audience', 'Colours and symbols mean different things across cultures; text direction and scripts must be supported'],
    ],
  ),
  method('Structuring any ethics answer', [
    'Identify the stakeholders: users, the organisation, third parties, society.',
    'For each, give the benefit and the harm, with a specific example from the scenario.',
    'Name the relevant law, if one applies, and what it requires.',
    'Weigh them: which harms can be mitigated, and how? Which cannot?',
    'Reach a judgement with a condition attached: "acceptable IF ... "',
  ]),
)

/* ================================================ COMPONENT 2 */

const computationalThinking = chapter(
  h('Thinking abstractly'),
  p(
    'Abstraction is deciding what to leave out. A model keeps the features that matter for the problem and discards the rest, and the test of a good abstraction is that the problem becomes solvable with it. The Tube map keeps stations, lines and the order of stops and drops distance, direction and geography, because a passenger needs to know where to change, not how far it is. A class interface keeps what an object can do and hides how. A variable named speed hides the bits and the register.',
  ),
  worked('A school wants a program to build the timetable. What is abstracted away?', [
    'Kept: teachers, classes, rooms, periods, and the constraints between them (a teacher cannot be in two rooms at once).',
    'Discarded: the names of pupils, what is taught in each lesson, the colour of the rooms - none of it affects the clash problem.',
    'The abstraction turns a school into a constraint-satisfaction problem that a standard algorithm can attack.',
  ]),
  h('Thinking ahead'),
  table(
    ['Element', 'Question to answer before coding', 'Example'],
    [
      ['Inputs', 'What data does the solution need, in what form?', 'A list of marks as integers 0-100'],
      ['Outputs', 'What must it produce?', 'The mean to one decimal place, or an error'],
      ['Preconditions', 'What must be true for it to work?', 'The list is not empty; marks are already validated'],
      ['Reusable components', 'What already exists that can be used again?', 'A library function for the mean; a validation routine'],
      ['Caching', 'What results will be needed repeatedly?', 'Store the mean rather than recomputing it for every report'],
    ],
  ),
  p('A precondition is a contract: if the caller guarantees it, the subroutine does not have to check it, which keeps both sides simpler. Documenting preconditions is what makes a component reusable, because the next programmer knows what they are promising.'),
  h('Thinking procedurally'),
  p('Decompose the problem into sub-problems, then decide the ORDER. Some steps depend on earlier ones (you cannot calculate a total before reading the values); some are independent and can be sub-procedures called from anywhere. A top-down design starts with the whole task and refines each step until every step is small enough to code directly. The resulting structure diagram is the program\'s skeleton.'),
  h('Thinking logically'),
  p('Identify the decision points, the conditions at each, and what follows from each outcome. Every if, every loop condition and every case is a decision point, and the flow of the program is determined by them. Writing the conditions out precisely - including the boundaries - before coding is what prevents the off-by-one and the missed case. A flowchart or a decision table makes the logic visible.'),
  h('Thinking concurrently'),
  p('Identify which parts of a problem can happen at the same time. Downloading three files can proceed in parallel; adding up a total cannot be split without agreeing how to combine the partial sums. The benefit is speed and responsiveness; the cost is coordination. Two processes that share data must be synchronised, or one\'s update overwrites the other\'s (a race condition); two processes that each wait for a resource the other holds never finish (deadlock). The judgement in an exam answer is whether the parts are independent enough to be worth it.'),
  tip('The 2.1 questions are usually applied: "explain how thinking ahead would help when designing this system". Answer with the element (inputs/outputs/preconditions/caching/reusable components) AND a specific instance from the scenario for each.'),
)

const programmingTechniques = chapter(
  h('Passing parameters'),
  table(
    ['', 'By value', 'By reference'],
    [
      ['What is passed', 'A COPY of the data', 'The ADDRESS of the variable'],
      ['Changes inside the subroutine', 'Affect only the copy', 'Change the caller\'s variable'],
      ['Cost', 'Copying large data is slow and uses memory', 'Cheap: just an address'],
      ['Use when', 'The subroutine must not alter the original', 'The subroutine\'s job is to alter it, or the data is large'],
    ],
  ),
  code(
    [
      'procedure double(byVal x)     // x is a copy',
      '    x = x * 2',
      'endprocedure',
      '',
      'procedure double(byRef x)     // x IS the caller\'s variable',
      '    x = x * 2',
      'endprocedure',
      '',
      'n = 5',
      'double(n)     // byVal: n is still 5. byRef: n is now 10.',
    ],
    'exam reference language',
  ),
  h('Local and global variables'),
  p('A local variable exists only inside the subroutine that declares it, is created when the subroutine is called and destroyed when it returns, and can share a name with a variable elsewhere without conflict. A global variable is visible everywhere. Globals are convenient and dangerous: any subroutine can change one, so a bug can come from anywhere, subroutines cannot be reused elsewhere, and the program is hard to test. The rule is to prefer parameters and return values, and to use a global only for a value that genuinely is shared by the whole program.'),
  h('Modularity and functions against procedures'),
  ul([
    'A PROCEDURE performs an action and returns nothing; a FUNCTION returns a value and can be used in an expression.',
    'Modular code splits a program into subroutines with one clear job each. Each can be written, tested, debugged and reused independently, and several programmers can work at once.',
    'A subroutine\'s interface - its parameters and return value - is its contract; if the contract holds, the inside can be rewritten freely.',
  ]),
  h('IDE features and what each is for'),
  table(
    ['Feature', 'Purpose'],
    [
      ['Syntax highlighting', 'Makes structure visible; a mismatched string or bracket shows immediately'],
      ['Auto-completion', 'Faster typing; fewer misspelled identifiers'],
      ['Breakpoints', 'Pause execution at a line to inspect the state'],
      ['Stepping', 'Run one line at a time, into or over subroutine calls'],
      ['Variable watch', 'Display chosen variables as they change'],
      ['Error diagnostics', 'Report syntax errors with line numbers before running'],
      ['Debugger and stack trace', 'Show the chain of calls that led to an error'],
      ['Version control integration', 'Track and revert changes; collaborate'],
    ],
  ),
  h('Recursion against iteration'),
  worked('Write factorial(n) both ways and compare.', [
    'Recursive: function factorial(n) / if n <= 1 then return 1 / return n * factorial(n − 1).',
    'Iterative: result = 1 / for i = 2 to n / result = result * i / next i / return result.',
    'Recursion mirrors the mathematical definition and suits trees and divide-and-conquer; each call uses a stack frame, so deep recursion risks stack overflow and is slower.',
    'Iteration uses constant memory and is faster for a simple loop, but is clumsy for naturally recursive structures.',
  ]),
)

const computationalMethods = chapter(
  h('The methods, each with its place'),
  table(
    ['Method', 'What it is', 'Example'],
    [
      ['Problem recognition', 'Deciding what the problem actually is and whether it is computable', 'Is "find the best route" a shortest-path problem?'],
      ['Decomposition', 'Splitting into sub-problems', 'A game: input, physics, rendering, AI, saving'],
      ['Divide and conquer', 'Halve the problem repeatedly, solve the pieces, combine', 'Merge sort; binary search'],
      ['Abstraction', 'Removing irrelevant detail', 'A graph for a road network'],
      ['Backtracking', 'Build a solution step by step; undo the last step when it leads nowhere', 'Sudoku; maze solving; depth-first search'],
      ['Data mining', 'Finding patterns in large data sets', 'Which products sell together'],
      ['Heuristics', 'A rule of thumb that gives a good answer quickly when the exact one is intractable', 'A* uses straight-line distance to guide the search'],
      ['Performance modelling', 'Predicting behaviour under load before building', 'Simulating a website under a million users'],
      ['Pipelining', 'Stages that run at once, each passing output to the next', 'CPU pipeline; a video-encoding pipeline'],
      ['Visualisation', 'Presenting data so patterns can be seen', 'A heat map of traffic; a graph of sales'],
    ],
  ),
  worked('A robot must find its way out of a maze it has never seen. Which method, and why?', [
    'Backtracking: at each junction try one way; if it dead-ends, return to the junction and try the next.',
    'Represented as a depth-first search of the graph of junctions, with visited junctions marked so loops are not repeated.',
    'A heuristic (head towards the exit if its direction is known) would make it faster but is not needed for correctness.',
  ]),
  p('Problem recognition also includes recognising when a problem is NOT solvable by computation - the halting problem is the classic: no program can decide, for every program and input, whether that program will finish. Knowing the limits is part of the method.'),
)

const analysisDesign = chapter(
  h('Analysis in practice'),
  method('The steps of analysis', [
    'Establish the problem with the client: what is wrong with the current system, and what must the new one achieve.',
    'Gather requirements: interviews, questionnaires, observation of the current process, examination of existing documents and data.',
    'Separate functional from non-functional requirements and get both agreed in writing - this is the standard everything is later tested against.',
    'Carry out the feasibility study: technical, economic, legal, operational, schedule.',
    'Produce the requirements specification, which is the contract for design.',
  ]),
  h('Design outputs'),
  ul([
    'Data design: the data structures, the database tables and their keys, validation rules.',
    'Process design: decomposition into modules, algorithms in pseudocode or flowcharts, the interfaces between modules.',
    'Interface design: screens and their flow, accessibility, error messages.',
    'Test plan: written NOW, from the requirements, with normal, boundary and erroneous data and expected outcomes.',
  ]),
  h('Evaluation and maintenance'),
  table(
    ['Maintenance type', 'What it is', 'Example'],
    [
      ['Corrective', 'Fixing faults found after release', 'A calculation is wrong for leap years'],
      ['Adaptive', 'Changing the system for a changed environment', 'A new operating system version; new tax rules'],
      ['Perfective', 'Improving performance or usability without changing function', 'Faster search; a clearer screen'],
    ],
  ),
  p('An evaluation measures the finished system against the ORIGINAL requirements, one by one, with evidence: this requirement was met (test result), this partly (with what remains), this not (and why). It is not an opinion about whether the system is nice.'),
)

const paradigms = chapter(
  h('The four paradigms side by side'),
  table(
    ['Paradigm', 'How a program is expressed', 'Languages', 'Suits'],
    [
      ['Procedural', 'A sequence of instructions organised into procedures that change state', 'C, Pascal, Python (procedural style)', 'Step-by-step tasks; small and medium programs'],
      ['Object-oriented', 'Objects that hold state and the methods that act on it; classes, inheritance, polymorphism', 'Java, C#, Python, C++', 'Large systems with many interacting entities'],
      ['Declarative (logic)', 'Facts and rules; the program states WHAT is true and the system works out HOW', 'Prolog, SQL', 'Databases, expert systems, constraint problems'],
      ['Functional', 'Functions with no side effects, composed together; data is immutable', 'Haskell, Lisp, parts of JavaScript and Python', 'Parallel processing (no shared state), mathematical work'],
    ],
  ),
  worked('Express "the total of a list" in each paradigm.', [
    'Procedural: total = 0; for each item: total = total + item. State (total) is changed step by step.',
    'Object-oriented: a Basket object with an items attribute and a total() method that encapsulates the loop.',
    'Declarative: SELECT SUM(price) FROM items. What is wanted is stated; the engine chooses the algorithm.',
    'Functional: total = reduce(add, items). No variable is mutated; the function is composed from add.',
  ]),
  p('Most modern languages are multi-paradigm: Python is procedural, object-oriented and functional depending on how it is written. The exam wants the paradigm matched to the problem, not a language name.'),
  h('Assembly at the other end'),
  p('Below all four paradigms sits assembly language, one mnemonic per machine instruction, processor-specific and unforgiving. It is a paradigm of its own only in the sense that the programmer thinks in registers and addresses. See the Assembly Language and the Little Man Computer chapter for the instruction set and the addressing modes.'),
)

const algorithms = chapter(
  h('Bubble sort traced'),
  worked('Bubble sort the list 5, 1, 4, 2.', [
    'Pass 1: compare 5,1 → swap → 1 5 4 2; compare 5,4 → swap → 1 4 5 2; compare 5,2 → swap → 1 4 2 5. The largest has bubbled to the end.',
    'Pass 2: 1,4 no swap; 4,2 → swap → 1 2 4 5; 4,5 no swap.',
    'Pass 3: no swaps at all, so the list is sorted and the algorithm stops early.',
    'Each pass fixes one more element at the end, so at most n − 1 passes: O(n²) comparisons in the worst case, O(n) if already sorted and an early-exit flag is used.',
  ]),
  h('Insertion sort traced'),
  worked('Insertion sort the list 5, 1, 4, 2.', [
    'The first element, 5, is a sorted list of one.',
    'Take 1: shift 5 right, insert 1 at the front → 1 5 4 2.',
    'Take 4: 5 > 4 so shift 5; 1 < 4 so stop → 1 4 5 2.',
    'Take 2: shift 5, shift 4, stop after 1 → 1 2 4 5.',
    'Each new element is inserted into the already-sorted part by shifting larger elements right. Few shifts when the data is nearly sorted, which is its advantage.',
  ]),
  h('Merge sort traced'),
  worked('Merge sort the list 5, 1, 4, 2.', [
    'Split: [5 1] [4 2] → [5] [1] [4] [2].',
    'Merge pairs: [5] and [1] → [1 5]; [4] and [2] → [2 4].',
    'Merge: [1 5] and [2 4]: compare fronts 1 vs 2 → 1; 5 vs 2 → 2; 5 vs 4 → 4; then 5. Result [1 2 4 5].',
    'log₂ 4 = 2 levels of merging, each touching all 4 items: O(n log n).',
  ]),
  h('Quick sort traced'),
  worked('Quick sort the list 5, 1, 4, 2 using the first element as pivot.', [
    'Pivot 5: everything else is smaller → [1 4 2] 5 [].',
    'Sort [1 4 2] with pivot 1: [] 1 [4 2].',
    'Sort [4 2] with pivot 4: [2] 4 [].',
    'Concatenate: 1 2 4 5. Notice that a first-element pivot on already-sorted data would split n into 0 and n − 1 every time - the O(n²) worst case.',
  ]),
  h('Binary search traced'),
  worked('Search for 23 in 2, 5, 8, 12, 16, 23, 38, 56, 72, 91.', [
    'low = 0, high = 9, mid = 4 → 16 < 23, so low = 5.',
    'mid = (5 + 9) DIV 2 = 7 → 56 > 23, so high = 6.',
    'mid = (5 + 6) DIV 2 = 5 → 23 found. Three comparisons for ten items; linear search could have needed six.',
  ]),
  h('Breadth-first and depth-first traced'),
  worked('Graph: A-B, A-C, B-D, C-D, D-E. Traverse from A.', [
    'Breadth-first uses a QUEUE. Visit A; enqueue B, C. Visit B; enqueue D. Visit C (D already queued). Visit D; enqueue E. Visit E. Order: A B C D E - level by level, which finds the shortest path in an unweighted graph.',
    'Depth-first uses a STACK (or recursion). Visit A; go to B; go to D; go to E (dead end); back to D, go to C; back. Order: A B D E C - as deep as possible before backtracking, which suits maze solving and detecting cycles.',
  ]),
  h("Dijkstra's algorithm traced"),
  worked('Weighted graph: A-B 4, A-C 2, C-B 1, B-D 5, C-D 8. Shortest path from A to D.', [
    'Start: A = 0, others ∞. Visit A: B = 4, C = 2.',
    'Visit the unvisited node with the smallest distance, C (2): B via C = 2 + 1 = 3 < 4, update B = 3; D via C = 10.',
    'Visit B (3): D via B = 3 + 5 = 8 < 10, update D = 8.',
    'Visit D (8). Shortest path A → C → B → D, length 8. Dijkstra never revisits a node once it is chosen, which is why it needs non-negative weights.',
  ]),
  h('A* in one paragraph'),
  p("A* is Dijkstra with a heuristic: it chooses the next node by distance so far PLUS an estimate of the distance remaining (straight-line distance for a map). If the heuristic never overestimates, A* still finds the optimal path but explores far fewer nodes, because it is pulled towards the goal instead of expanding evenly in every direction. Dijkstra is A* with the heuristic set to zero."),
  pitfalls([
    'In a trace, writing the final sorted list without the passes. The marks are for the intermediate states.',
    'Breadth-first with a stack, or depth-first with a queue. The data structure IS the difference.',
    "Updating a node's distance in Dijkstra after it has been visited. Once visited, it is final.",
  ]),
)

export const CS_EXTRA_DEPTH_2 = {
  'Structure and Function of the Processor': processor,
  'Types of Processor': processorTypes,
  'Input, Output and Storage': inputOutputStorage,
  'Systems Software': systemsSoftware,
  'Applications Generation (Translators)': translators,
  'Software Development Methodologies': methodologies,
  'Compression, Encryption and Hashing': compression,
  Databases: databases,
  Networks: networks,
  'Web Technologies': web,
  'Data Types and Number Representation': dataTypes,
  'Data Structures': dataStructures,
  'Boolean Algebra': boolean,
  'Legal, Moral, Cultural and Ethical Issues': ethics,
  'Elements of Computational Thinking': computationalThinking,
  'Programming Techniques': programmingTechniques,
  'Computational Methods': computationalMethods,
  'Analysis and Design (Systems Life Cycle)': analysisDesign,
  'Programming Paradigms': paradigms,
  'Algorithms: Searching, Sorting & Graph Traversal': algorithms,
}
