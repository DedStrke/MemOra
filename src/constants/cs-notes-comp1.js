/*
  OCR H446 Computer Science, Component 01: Computer Systems.

  Rebuilt at working depth. The previous notes averaged 361 words a chapter,
  which for a paper containing 9- and 12-mark levelled essays is not enough
  to answer from.

  Each topic gives the definition, HOW IT WORKS step by step, the comparison
  table the exam asks for, and the trade-off - because almost every extended
  response in this component is "discuss the advantages and disadvantages
  of X in the context of Y", and the marks are in the trade-off, not the
  definition.

  1.1.1 Structure and Function of the Processor and 1.1.2 Types of
  Processor are no longer here: they are Mudassir's own notes in
  cs-notes-processor.js. The chapters this file used to hold for them are
  parked in temp/cs-processor-previous/.
*/

import { h, p, ul, rule, worked, pitfalls, diagram, tip, table, chapter } from './maths-notes-build'

/* ========================================= INPUT, OUTPUT AND STORAGE */

const storage = chapter(
  diagram('storage-media'),
  table(
    ['Type', 'How a bit is stored', 'Strengths', 'Weaknesses'],
    [
      ['Magnetic (HDD, tape)', 'Direction of magnetisation on a spinning platter, read by a moving head', 'Very cheap per gigabyte; high capacity', 'Moving parts wear out; slow seek times; fragile'],
      ['Optical (CD, DVD, Blu-ray)', 'Pits and lands burned into a surface, read by laser', 'Cheap to mass produce and distribute; portable', 'Low capacity; slow; easily scratched'],
      ['Solid state (SSD, flash)', 'Charge trapped in NAND flash cells', 'Fast, silent, low power, no moving parts', 'More expensive per GB; each cell survives a limited number of writes'],
    ],
  ),
  h('RAM, ROM and virtual memory'),
  table(
    ['Memory', 'Properties'],
    [
      ['RAM', 'Volatile - contents lost on power off. Holds programs and data currently in use.'],
      ['ROM', 'Non-volatile. Holds the bootstrap loader and firmware.'],
      ['Virtual memory', 'Part of secondary storage used as if it were RAM when RAM is full.'],
    ],
  ),
  diagram('paging'),
  p(
    'When RAM is full, pages not currently needed are swapped to disk. Accessing a page that is on disk causes a PAGE FAULT and it must be swapped back. Excessive swapping is called DISK THRASHING, and it makes the machine slower than if it had simply run out of memory.',
  ),
  pitfalls([
    'Virtual memory is on SECONDARY STORAGE, not extra RAM. It is far slower than RAM, which is why thrashing is so damaging.',
    'Solid state has no moving parts - that is why it is fast AND rugged, and it is the answer to "why use SSD in a laptop".',
    'Choose storage against capacity, speed, durability, portability and cost. Questions give a scenario and expect you to weigh all five.',
  ]),
)

/* ================================================= SYSTEMS SOFTWARE */

const systemsSoftware = chapter(
  h('The operating system'),
  table(
    ['Function', 'What it does'],
    [
      ['Memory management', 'Allocates RAM to processes; paging and segmentation'],
      ['Processor scheduling', 'Decides which process gets the CPU and for how long'],
      ['Peripheral management', 'Communicates with hardware through device drivers'],
      ['File management', 'Organises the directory structure and access permissions'],
      ['User interface', 'Provides the means for the user to interact'],
      ['Security', 'User accounts, permissions, encryption'],
    ],
  ),
  h('Scheduling algorithms'),
  diagram('scheduling'),
  table(
    ['Algorithm', 'How it works', 'Trade-off'],
    [
      ['Round robin', 'Each process gets a fixed time slice then is pre-empted', 'Nothing starves; but constant context switching is overhead'],
      ['First come first served', 'Run to completion in arrival order', 'Simple, no switching cost; one long job blocks everything (convoy effect)'],
      ['Shortest job first', 'Run the shortest job next', 'Minimises average wait; needs run times known in advance and can starve long jobs'],
      ['Shortest remaining time', 'Pre-emptive version of the above', 'Better response; more overhead and still starves long jobs'],
      ['Multi-level feedback queue', 'Several priority queues, processes move between them', 'Flexible and adaptive; complex to tune'],
    ],
  ),
  tip(
    'For a scheduling question, decide first whether the system is REAL-TIME (needs a guaranteed maximum response) or BATCH (needs throughput). That single distinction determines the right answer and is what the levelled mark scheme rewards.',
  ),
  h('Types of operating system'),
  ul([
    'DISTRIBUTED - one OS across several machines, sharing the workload.',
    'EMBEDDED - built for one device, limited functionality, low power, very reliable.',
    'MULTI-TASKING - several processes appear to run at once by time-slicing.',
    'MULTI-USER - several users share one system, scheduled between them.',
    'REAL-TIME - guarantees a response within a fixed time; used in safety-critical systems.',
  ]),
  h('BIOS, drivers and virtual machines'),
  ul([
    'BIOS runs the POST (power-on self test) and loads the OS - the bootstrap process.',
    'A DEVICE DRIVER translates OS instructions into commands a specific piece of hardware understands.',
    'A VIRTUAL MACHINE runs software written for another platform, or an intermediate language such as Java bytecode.',
  ]),
  pitfalls([
    'A context switch is pure overhead - it does no useful work. That is the cost of pre-emptive scheduling.',
    'Real-time does not mean "fast", it means a GUARANTEED maximum response time. Average speed is irrelevant if a deadline is missed.',
    'The BIOS is firmware in ROM, not part of the operating system.',
  ]),
)

/* =============================================== TRANSLATORS */

const translators = chapter(
  table(
    ['Translator', 'How it works', 'Advantages', 'Disadvantages'],
    [
      ['Compiler', 'Translates the WHOLE program into object code before running', 'Fast execution; source not distributed; optimised', 'Slow to compile; errors reported all at once; platform specific'],
      ['Interpreter', 'Translates and executes LINE BY LINE', 'Easy to debug - stops at the error; platform independent', 'Slower execution; source must be distributed; re-translates each run'],
      ['Assembler', 'Translates assembly language into machine code, roughly one to one', 'Very fast, very small', 'Processor specific and hard to write'],
    ],
  ),
  h('Stages of compilation'),
  diagram('compiler-stages'),
  table(
    ['Stage', 'What happens'],
    [
      ['Lexical analysis', 'Source is broken into TOKENS; whitespace and comments removed; identifiers added to the symbol table'],
      ['Syntax analysis', 'Tokens are parsed against the grammar to build a parse tree; syntax errors reported here'],
      ['Semantic analysis', 'Checks meaning - type mismatches, undeclared variables, wrong argument counts'],
      ['Code generation', 'Produces object code from the parse tree'],
      ['Optimisation', 'Removes redundant instructions and improves efficiency; can make debugging harder'],
    ],
  ),
  h('Linkers, loaders and libraries'),
  ul([
    'A LINKER combines compiled modules and library code into one executable.',
    'STATIC linking copies library code into the executable - larger file, but self-contained.',
    'DYNAMIC linking loads the library at runtime - smaller file, shared between programs, but breaks if the library is missing or changed.',
    'A LOADER copies the executable into memory and starts it.',
  ]),
  pitfalls([
    'Learn the five compilation stages IN ORDER - questions ask for the order and for what each one catches.',
    'Type errors are caught at SEMANTIC analysis, not syntax analysis. A type error is grammatically valid.',
    'An interpreter stops at the first error; a compiler reports all of them at the end. That is why interpreters suit development and compilers suit release.',
  ]),
)

/* ===================================== SOFTWARE DEVELOPMENT METHODOLOGIES */

const methodologies = chapter(
  diagram('waterfall-agile'),
  table(
    ['Methodology', 'How it works', 'Suits', 'Weakness'],
    [
      ['Waterfall', 'Each stage completed before the next; heavy documentation', 'Fixed, well-understood requirements; large contracts', 'Cannot go back cheaply; a late-found error is very expensive'],
      ['Agile', 'Short iterations, each delivering working software; requirements evolve', 'Unclear or changing requirements; available customer', 'Little documentation; hard to price a fixed contract'],
      ['Extreme programming', 'Agile plus pair programming and test-first development', 'High-quality code, small skilled teams', 'Very demanding; pair programming doubles staffing per task'],
      ['Spiral', 'Repeated cycles, each starting with RISK ANALYSIS', 'Large, high-risk projects', 'Expensive; needs risk assessment expertise'],
      ['RAD', 'Build prototypes to elicit requirements from users', 'Users who cannot specify requirements abstractly', 'Prototype may become the product; poor for large systems'],
    ],
  ),
  tip(
    'The deciding factor in nearly every methodology question is whether the REQUIREMENTS ARE KNOWN. If they are, waterfall’s up-front rigour pays. If they are not, waterfall assumes something the scenario has already told you is false.',
  ),
  h('The systems life cycle'),
  ul([
    'ANALYSIS - gather requirements through interviews, questionnaires, observation and examining existing documents.',
    'DESIGN - data structures, algorithms, interface, test plan.',
    'IMPLEMENTATION - writing and integrating the code.',
    'TESTING - see below.',
    'EVALUATION - against the original requirements.',
    'MAINTENANCE - corrective (fix faults), adaptive (new environment), perfective (improve).',
  ]),
  h('Testing'),
  table(
    ['Type', 'Meaning'],
    [
      ['Black box', 'Test inputs against expected outputs without seeing the code'],
      ['White box', 'Test every path through the code, knowing its structure'],
      ['Alpha', 'Testing in-house by the development team'],
      ['Beta', 'Testing by real users outside the organisation'],
      ['Test data', 'NORMAL (typical), BOUNDARY (at the limits), ERRONEOUS (should be rejected)'],
    ],
  ),
  pitfalls([
    'Boundary data is the value AT the limit, and just either side. For "1 to 10", the boundary data is 0, 1, 10, 11.',
    'Agile is not "no planning" - it is planning in short cycles. Saying it has no structure loses credibility.',
    'Maintenance is the LONGEST and most expensive phase of the life cycle, not an afterthought.',
  ]),
)

/* ========================== COMPRESSION, ENCRYPTION AND HASHING */

const compression = chapter(
  h('Compression'),
  table(
    ['Type', 'How', 'Use'],
    [
      ['Lossy', 'Permanently discards data judged less important; original cannot be recovered', 'Streaming video, MP3, JPEG - where perceptual loss is acceptable and ratios must be high'],
      ['Lossless - RLE', 'Run-length encoding: replaces runs of identical values with value + count', 'Simple images with large blocks of one colour'],
      ['Lossless - dictionary', 'Builds a dictionary of repeated patterns and stores indexes', 'Text and code, where exact recovery is essential'],
    ],
  ),
  diagram('huffman-tree')
  ,
  p(
    'Huffman coding assigns the SHORTEST codes to the most frequent characters, so the total is smaller than fixed-length ASCII. No code is a prefix of another, so no separators are needed - that is what makes it decodable and lossless.',
  ),
  worked('"BANANA" has A×3, N×2, B×1. With A = 0, N = 10, B = 11, how many bits?', [
    'B=11, A=0, N=10, A=0, N=10, A=0',
    'Concatenated: 110100100',
    'That is 9 bits',
    'ASCII would use 6 × 8 = 48 bits',
  ]),
  h('Encryption'),
  diagram('encryption-keys'),
  table(
    ['Type', 'How', 'Trade-off'],
    [
      ['Symmetric', 'ONE key encrypts and decrypts', 'Fast, but the key itself must be transmitted safely - the weak point'],
      ['Asymmetric', 'PUBLIC key encrypts, PRIVATE key decrypts', 'Solves key distribution; slower. Reversing the pair gives a DIGITAL SIGNATURE proving the sender'],
      ['Caesar cipher', 'Shift each letter by a fixed amount', 'Trivially broken by frequency analysis'],
      ['Vernam cipher', 'XOR with a truly random one-time pad as long as the message', 'The only mathematically UNBREAKABLE cipher, if the pad is truly random, used once, and kept secret'],
    ],
  ),
  h('Hashing'),
  rule('Hash function', 'Takes a key and produces a fixed-size value used as an index. One-way - you cannot recover the key from the hash.'),
  diagram('hash-table'),
  p(
    'A COLLISION is when two keys hash to the same index. Resolve by putting the item in the next free slot (open addressing) or by chaining a list at that index. As the table fills, collisions rise and performance degrades from O(1) towards O(n) - which is why the LOAD FACTOR matters.',
  ),
  pitfalls([
    'Lossy compression cannot be reversed. For medical images, legal documents or executables that is disqualifying, whatever the ratio.',
    'The Vernam cipher is only unbreakable if the pad is truly random, as long as the message, and used ONCE. State all three conditions.',
    'Hashing is one-way; encryption is two-way. Passwords are hashed, not encrypted.',
    'Huffman needs the frequency table to decode, which is overhead on small files.',
  ]),
)

/* ==================================================== DATABASES */

const databases = chapter(
  table(
    ['Term', 'Meaning'],
    [
      ['Entity', 'A thing about which data is stored - becomes a table'],
      ['Attribute', 'A property of an entity - becomes a field'],
      ['Primary key', 'A field uniquely identifying each record'],
      ['Foreign key', 'A primary key from one table appearing in another, creating the link'],
      ['Composite key', 'Two or more fields together forming the primary key'],
      ['Secondary key', 'An additional index to speed up searching'],
    ],
  ),
  diagram('er-diagram'),
  h('Normalisation'),
  diagram('normalisation'),
  table(
    ['Form', 'Rule'],
    [
      ['1NF', 'No repeating groups; every field holds a single atomic value'],
      ['2NF', 'In 1NF, and no PARTIAL dependency - no non-key field depends on only part of a composite key'],
      ['3NF', 'In 2NF, and no TRANSITIVE dependency - no non-key field depends on another non-key field'],
    ],
  ),
  p('The point of normalisation is that each fact is stored ONCE, so an update cannot leave two copies disagreeing. That removes update, insert and delete anomalies.'),
  h('SQL'),
  table(
    ['Command', 'Purpose'],
    [
      ['SELECT … FROM … WHERE', 'Retrieve records matching a condition'],
      ['ORDER BY … ASC / DESC', 'Sort the results'],
      ['INNER JOIN … ON', 'Combine rows from two tables on a matching key'],
      ['INSERT INTO … VALUES', 'Add a record'],
      ['UPDATE … SET … WHERE', 'Change existing records'],
      ['DELETE FROM … WHERE', 'Remove records'],
      ['CREATE TABLE / ALTER TABLE', 'Define or change structure'],
    ],
  ),
  h('Transactions and concurrency'),
  rule('ACID', 'Atomicity - all or nothing. Consistency - the database stays valid. Isolation - transactions do not interfere. Durability - committed changes survive failure.'),
  p(
    'RECORD LOCKING prevents two users editing the same record at once, but can cause DEADLOCK if two transactions each hold what the other needs. SERIALISATION forces transactions into a strict order to avoid it.',
  ),
  pitfalls([
    'A DELETE without a WHERE clause removes every record. The same is true of UPDATE.',
    '2NF is about PARTIAL dependency (only relevant with a composite key); 3NF is about TRANSITIVE dependency. Learn which is which.',
    'Referential integrity means a foreign key must match an existing primary key - you cannot delete a record another table still references.',
  ]),
)

/* ===================================================== NETWORKS */

const networks = chapter(
  table(
    ['Term', 'Meaning'],
    [
      ['LAN', 'Local Area Network - one site, hardware owned by the organisation'],
      ['WAN', 'Wide Area Network - geographically separated, uses third-party infrastructure'],
      ['Protocol', 'An agreed set of rules for communication'],
      ['Bandwidth', 'The maximum data rate of a connection'],
      ['Latency', 'The delay before a transfer begins'],
    ],
  ),
  diagram('network-topologies'),
  table(
    ['Topology', 'Strength', 'Weakness'],
    [
      ['Star', 'A failed cable affects one device only; easy to add devices; good performance', 'The central switch is a single point of failure; more cable needed'],
      ['Mesh', 'No single point of failure; multiple routes; scales well', 'Expensive; complex to set up and maintain'],
      ['Bus', 'Cheap, little cable', 'One break stops everything; collisions rise with traffic'],
    ],
  ),
  h('The TCP/IP stack'),
  diagram('tcp-ip-stack'),
  table(
    ['Layer', 'Job', 'Protocols'],
    [
      ['Application', 'Provides services to the user application', 'HTTP, HTTPS, FTP, SMTP, POP3, IMAP'],
      ['Transport', 'Splits data into packets, adds port numbers, handles reliability', 'TCP (reliable, ordered), UDP (fast, no guarantee)'],
      ['Internet / Network', 'Adds IP addresses and routes packets between networks', 'IP'],
      ['Link / Data', 'Physical transmission on the local network; MAC addresses', 'Ethernet'],
    ],
  ),
  tip('Layering means each layer can be changed independently of the others - that is the whole benefit and it is a frequent exam question.'),
  h('Packet switching'),
  diagram('packet-switching'),
  p(
    'The message is split into packets, each carrying the destination address and a SEQUENCE NUMBER. Routers send each packet by whatever route is best at that moment, so packets may arrive out of order or by different paths. The sequence numbers let the receiver reassemble them, and anything missing is requested again.',
  ),
  h('Network security and hardware'),
  ul([
    'A FIREWALL filters traffic by rules - packet filtering, stateful inspection, proxy.',
    'A ROUTER connects networks and forwards packets between them; a SWITCH connects devices within one network using MAC addresses.',
    'NIC - network interface card, gives a device its MAC address.',
    'DNS translates domain names into IP addresses, working down a hierarchy of servers.',
  ]),
  pitfalls([
    'TCP guarantees delivery and order; UDP does not. UDP is used for streaming and gaming precisely because retransmitting a late packet is worse than dropping it.',
    'A switch uses MAC addresses within a network; a router uses IP addresses between networks.',
    'Packet switching does not reserve a route - that is CIRCUIT switching, and the distinction is regularly examined.',
  ]),
)

/* ================================================ WEB TECHNOLOGIES */

const webTech = chapter(
  table(
    ['Technology', 'Role'],
    [
      ['HTML', 'Structure and content of a page'],
      ['CSS', 'Presentation - layout, colour, typography, kept separate so one change updates every page'],
      ['JavaScript', 'Behaviour - runs CLIENT-side in the browser'],
    ],
  ),
  h('Client-side against server-side processing'),
  diagram('client-server'),
  table(
    ['', 'Client-side', 'Server-side'],
    [
      ['Runs on', 'The user’s browser', 'The web server'],
      ['Advantages', 'Fast response; reduces server load; works without a round trip', 'Secure - code is not visible; can access databases; consistent across browsers'],
      ['Disadvantages', 'Code is visible and can be disabled or altered, so it can never be trusted for security', 'Slower - needs a round trip; increases server load'],
    ],
  ),
  tip(
    'Validation is the classic application: do it client-side for a fast response AND server-side for security. Client-side alone is worthless because the user can disable JavaScript. Saying both, and why, is the full-mark answer.',
  ),
  h('Search engine indexing and PageRank'),
  diagram('page-rank'),
  p(
    'A web crawler follows links and builds an INDEX of page content, so searches do not have to scan the web live. PageRank then orders results: a page’s rank rises with the number of pages linking TO it, weighted by those pages’ own rank and divided by how many links each gives out. It is computed iteratively until the values settle.',
  ),
  pitfalls([
    'Client-side validation is a convenience, not a security measure. Any question about protecting data needs server-side.',
    'PageRank counts INBOUND links, weighted by the linking page’s importance - not raw link count.',
    'CSS separates presentation from content, which is why it is used; saying only "it makes it look nice" misses the mark.',
  ]),
)

export const CS_COMP1_NOTES = {
  'Input, Output and Storage': storage,
  'Systems Software': systemsSoftware,
  'Applications Generation (Translators)': translators,
  'Software Development Methodologies': methodologies,
  'Compression, Encryption and Hashing': compression,
  Databases: databases,
  Networks: networks,
  'Web Technologies': webTech,
}
