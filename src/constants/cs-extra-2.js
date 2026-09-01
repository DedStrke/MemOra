/*
  Second additional-content pass for OCR H446 Computer Science, layered on
  top of the base pack (library-extra.js) and the first expansion pass
  (cs-extra.js). Topic strings must match the chapter outline in
  library-extra.js's `groups` field exactly, or the chapter picker will
  silently filter these items out.

  This pass was written after auditing combined per-topic totals across
  library.js + library-extra.js + cs-extra.js: MCQs were dramatically
  under-filled everywhere (every one of the 20 topics sat below an 8-MCQ
  floor before this file), so the bulk of this file tops MCQs up to at
  least 8 per topic, 12+ for topics with the most exam weight/nuance.
  Flashcards and exam questions were mostly already healthy, so only a
  few thin topics needed top-ups there, plus extra depth on:
  Fetch-Decode-Execute/processor performance, databases, networks,
  algorithms, data structures, OOP paradigms, and the legal/moral/ethical
  section (the last one especially, since it's the section students most
  reliably under-revise).

  Every item was checked against the existing question bank to avoid
  near-verbatim duplicates - several were deliberately reworded as
  scenario/application questions instead of restating an existing
  definition question. MCQ correct-answer positions are deliberately
  spread across all four option slots rather than clustering on one.
*/

export const CS_EXTRA_FLASHCARDS_2 = [

  // Structure and Function of the Processor
  {
    front: "What is meant by a CPU's 'word length'?",
    back: "The number of bits the CPU can process or transfer in a single operation.",
    topic: "Structure and Function of the Processor",
  },

  // Types of Processor
  {
    front: "What is Flynn's taxonomy used to classify?",
    back: "Computer architectures by their number of instruction streams and data streams (SISD, SIMD, MISD, MIMD).",
    topic: "Types of Processor",
  },
  {
    front: "What does MISD stand for, and is it common?",
    back: "Multiple Instruction, Single Data: a rare classification, mainly used in specialist fault-tolerant systems.",
    topic: "Types of Processor",
  },
  {
    front: "Why can't pipelining simply be extended indefinitely for more speed?",
    back: "A longer pipeline increases the penalty (number of wasted cycles) whenever a hazard, such as a branch misprediction, forces it to be flushed.",
    topic: "Types of Processor",
  },
  {
    front: "What is a co-processor?",
    back: "A secondary, specialised processor (e.g. a GPU or FPU) that handles specific tasks to offload work from the main CPU.",
    topic: "Types of Processor",
  },

  // Databases
  {
    front: "What is referential integrity in a database?",
    back: "A rule ensuring that a foreign key value must match an existing primary key value in the related table (or be null).",
    topic: "Databases",
  },
  {
    front: "What is a database transaction?",
    back: "A sequence of operations carried out as a single logical unit of work, which must either fully succeed or fully fail.",
    topic: "Databases",
  },
  {
    front: "Which SQL keyword removes records from a table?",
    back: "DELETE",
    topic: "Databases",
  },

  // Networks
  {
    front: "What does a firewall do?",
    back: "Monitors and filters incoming and outgoing network traffic according to a set of security rules.",
    topic: "Networks",
  },
  {
    front: "What is bandwidth?",
    back: "The maximum rate of data transfer across a network connection, usually measured in bits per second.",
    topic: "Networks",
  },

  // Algorithms: Searching, Sorting & Graph Traversal
  {
    front: "What does it mean for a sorting algorithm to be 'stable'?",
    back: "Elements with equal keys keep their original relative order after sorting.",
    topic: "Algorithms: Searching, Sorting & Graph Traversal",
  },
  {
    front: "What is the time complexity of accessing an array element by its index?",
    back: "O(1): constant time, since the address can be calculated directly.",
    topic: "Algorithms: Searching, Sorting & Graph Traversal",
  },
  {
    front: "What data structure does Dijkstra's algorithm typically use to always expand the cheapest known path first?",
    back: "A priority queue, which allows the unvisited node with the smallest known distance to be selected efficiently.",
    topic: "Algorithms: Searching, Sorting & Graph Traversal",
  },

  // Data Structures
  {
    front: "What is a dynamic data structure?",
    back: "One that can grow or shrink in size at runtime, e.g. a linked list, unlike a fixed-size static array.",
    topic: "Data Structures",
  },
  {
    front: "What is a tree's 'root' node?",
    back: "The single top-most node with no parent, from which all other nodes in the tree descend.",
    topic: "Data Structures",
  },

  // Programming Paradigms
  {
    front: "What is a constructor in OOP?",
    back: "A special method automatically called when an object is instantiated, typically used to initialise its attributes.",
    topic: "Programming Paradigms",
  },
  {
    front: "What is an abstract class?",
    back: "A class that cannot be instantiated directly and is designed to be subclassed by more specific classes.",
    topic: "Programming Paradigms",
  },
  {
    front: "What is functional programming?",
    back: "A paradigm that treats computation as the evaluation of mathematical functions, avoiding changing state and mutable data.",
    topic: "Programming Paradigms",
  },
  {
    front: "What is event-driven programming?",
    back: "A paradigm where the flow of the program is determined by events, such as user actions or sensor readings.",
    topic: "Programming Paradigms",
  },
  {
    front: "What does 'composition' mean in OOP, as opposed to inheritance?",
    back: "Building a class out of other objects as attributes, modelling a 'has-a' relationship rather than an 'is-a' relationship.",
    topic: "Programming Paradigms",
  },

  // Legal, Moral, Cultural and Ethical Issues
  {
    front: "What does the Regulation of Investigatory Powers Act (RIPA) cover?",
    back: "Legal powers allowing the interception of communications and surveillance by public bodies.",
    topic: "Legal, Moral, Cultural and Ethical Issues",
  },
  {
    front: "What is the difference between a legal issue and a moral issue in computing?",
    back: "A legal issue breaks an actual law with legal consequences; a moral/ethical issue may be entirely legal but still considered wrong by many people.",
    topic: "Legal, Moral, Cultural and Ethical Issues",
  },
  {
    front: "What does 'informed consent' mean in the context of data collection?",
    back: "A user knowingly and voluntarily agrees to their data being collected, having been told what it will be used for.",
    topic: "Legal, Moral, Cultural and Ethical Issues",
  },
  {
    front: "Give an example of an ethical issue raised by autonomous vehicles.",
    back: "How the car's software should decide who to prioritise in an unavoidable crash scenario.",
    topic: "Legal, Moral, Cultural and Ethical Issues",
  },
  {
    front: "What is meant by 'freedom of information' in relation to computing?",
    back: "The principle/legal right allowing public access to data held by public authorities.",
    topic: "Legal, Moral, Cultural and Ethical Issues",
  },
  {
    front: "Why might automation raise a moral issue even where no law is broken?",
    back: "It can cause job losses and social harm even though replacing workers with software or robots is entirely legal.",
    topic: "Legal, Moral, Cultural and Ethical Issues",
  },

  // Web Technologies
  {
    front: "What is a meta tag used for in HTML?",
    back: "To provide metadata about a page (e.g. description, keywords) that isn't displayed but is used by browsers and search engines.",
    topic: "Web Technologies",
  },

  // Elements of Computational Thinking
  {
    front: "What is a heuristic, in the context of computational thinking?",
    back: "A rule of thumb or practical approach that finds a good-enough solution quickly, without guaranteeing the optimal one.",
    topic: "Elements of Computational Thinking",
  },
  {
    front: "What is meant by 'pattern recognition' in computational thinking?",
    back: "Identifying similarities or trends between problems so that solutions or approaches can be reused.",
    topic: "Elements of Computational Thinking",
  },

  // Computational Methods
  {
    front: "What is meant by 'concurrent processing' as a computational method?",
    back: "Carrying out multiple computations or processes at overlapping times to improve efficiency.",
    topic: "Computational Methods",
  },
  {
    front: "Give an example of when performance modelling would be used.",
    back: "Simulating expected user load on a new website before launch, to check the server infrastructure can cope.",
    topic: "Computational Methods",
  },
]

export const CS_EXTRA_MCQ_2 = [

  // Structure and Function of the Processor
  {
    question: "Which register holds the instruction currently being decoded/executed?",
    options: [
      "Current Instruction Register (CIR)",
      "Memory Address Register (MAR)",
      "Program Counter (PC)",
      "Memory Data Register (MDR)",
    ],
    answer: 0,
    explanation: "The CIR holds the instruction that has just been fetched, ready for decoding and execution.",
    topic: "Structure and Function of the Processor",
  },
  {
    question: "What travels along the address bus?",
    options: [
      "The data being transferred",
      "The memory location to be accessed",
      "Control signals such as read/write",
      "Clock synchronisation pulses",
    ],
    answer: 1,
    explanation: "The address bus is unidirectional and carries the memory address the CPU wants to read from or write to.",
    topic: "Structure and Function of the Processor",
  },
  {
    question: "Which bus carries signals that coordinate and synchronise the actions of components, such as read/write instructions?",
    options: [
      "Data bus",
      "Address bus",
      "Control bus",
      "The system clock line",
    ],
    answer: 2,
    explanation: "The control bus carries signals like read/write and interrupt requests that coordinate the CPU and memory/devices.",
    topic: "Structure and Function of the Processor",
  },
  {
    question: "What best describes the role of cache memory?",
    options: [
      "Permanent storage for the operating system",
      "A backup copy of RAM held on disk",
      "The main store for all running programs",
      "Small, very fast memory that stores frequently/recently used data close to the CPU",
    ],
    answer: 3,
    explanation: "Cache sits between the CPU and RAM, holding frequently reused data/instructions so the CPU rarely has to wait on slower RAM.",
    topic: "Structure and Function of the Processor",
  },
  {
    question: "Assuming no other bottleneck, which change is most likely to directly increase how many instructions a CPU can execute per second?",
    options: [
      "Increasing the CPU clock speed",
      "Increasing the size of the hard disk",
      "Increasing the resolution of the monitor",
      "Adding more USB ports",
    ],
    answer: 0,
    explanation: "A higher clock speed means more fetch-decode-execute cycles can complete per second, all else being equal.",
    topic: "Structure and Function of the Processor",
  },
  {
    question: "What does the width (number of bits) of the address bus determine?",
    options: [
      "The clock speed of the CPU",
      "The maximum amount of memory that can be directly addressed",
      "The number of registers available",
      "The speed of data transfer to the hard disk",
    ],
    answer: 1,
    explanation: "An n-bit address bus can express 2^n unique addresses, which caps the directly addressable memory.",
    topic: "Structure and Function of the Processor",
  },
  {
    question: "During the decode stage of the FDE cycle, which component interprets the instruction's opcode?",
    options: [
      "The Arithmetic Logic Unit (ALU)",
      "The Memory Data Register (MDR)",
      "The Control Unit (CU)",
      "The status register",
    ],
    answer: 2,
    explanation: "The Control Unit decodes the opcode and generates the signals needed to carry out the instruction.",
    topic: "Structure and Function of the Processor",
  },
  {
    question: "Which of these is NOT one of the three system buses in the classic Von Neumann model?",
    options: [
      "Address bus",
      "Control bus",
      "Data bus",
      "Interrupt bus",
    ],
    answer: 3,
    explanation: "There is no separate 'interrupt bus'; interrupt requests are signalled via the control bus.",
    topic: "Structure and Function of the Processor",
  },

  // Types of Processor
  {
    question: "Which classification, under Flynn's taxonomy, describes a traditional single-core CPU executing one instruction stream on one data stream?",
    options: [
      "SISD",
      "MIMD",
      "SIMD",
      "MISD",
    ],
    answer: 0,
    explanation: "SISD (Single Instruction, Single Data) describes a classic single-core processor.",
    topic: "Types of Processor",
  },
  {
    question: "A GPU processing the same operation across thousands of pixels simultaneously is an example of",
    options: [
      "SISD",
      "SIMD",
      "MISD",
      "serial processing",
    ],
    answer: 1,
    explanation: "SIMD applies a single instruction to many data items in parallel, which is exactly how GPUs process pixels/vertices.",
    topic: "Types of Processor",
  },
  {
    question: "What is a structural hazard in a pipelined processor?",
    options: [
      "An instruction depends on the result of a previous instruction still in the pipeline",
      "A branch instruction changes the flow of execution",
      "Two instructions need the same hardware resource at the same time",
      "The clock speed is set too high",
    ],
    answer: 2,
    explanation: "A structural hazard occurs when pipeline stages compete for a single shared hardware resource, such as memory.",
    topic: "Types of Processor",
  },
  {
    question: "Which of these is a typical reason a multicore CPU does NOT give a proportional speed increase for every task?",
    options: [
      "Cores always run at a slower clock speed than single-core CPUs",
      "Cores cannot share cache memory",
      "Multicore CPUs cannot access RAM",
      "Not all software/tasks can be effectively split to run in parallel",
    ],
    answer: 3,
    explanation: "A strictly sequential task, where each step depends on the last, cannot be divided across cores, so extra cores sit idle (Amdahl's law).",
    topic: "Types of Processor",
  },
  {
    question: "Which processor type is designed to be low-power and dedicated to a single, specific task within a larger device?",
    options: [
      "Embedded processor",
      "GPU",
      "General-purpose CPU",
      "Multiprocessor",
    ],
    answer: 0,
    explanation: "Embedded processors are built into devices like washing machines or thermostats to run one fixed task efficiently.",
    topic: "Types of Processor",
  },
  {
    question: "CISC processors are generally characterised by",
    options: [
      "a small set of simple, fixed-length instructions",
      "a large set of complex instructions that can take multiple clock cycles",
      "the exclusive use of parallel pipelines",
      "being used only in embedded systems",
    ],
    answer: 1,
    explanation: "CISC (Complex Instruction Set Computer) trades a larger, more powerful instruction set for greater per-instruction complexity.",
    topic: "Types of Processor",
  },
  {
    question: "Which of these is a limitation of pipelining, rather than a benefit?",
    options: [
      "It cannot increase instruction throughput at all",
      "It permanently reduces the number of instructions a CPU can store",
      "A branch misprediction can force instructions already fetched into the pipeline to be discarded, wasting cycles",
      "It only works with RISC processors and can never be used with CISC processors",
    ],
    answer: 2,
    explanation: "A mispredicted branch means the pipeline has filled with the wrong instructions, which must be flushed and refetched (a control hazard).",
    topic: "Types of Processor",
  },

  // Input, Output and Storage
  {
    question: "Why might a HDD (hard disk drive) still be chosen over an SSD for very large-scale, low-cost bulk storage, e.g. a data centre archive?",
    options: [
      "HDDs are faster for random access",
      "HDDs use less power than SSDs",
      "HDDs have no moving parts, so they are more durable",
      "HDDs generally offer a lower cost per gigabyte at very large capacities",
    ],
    answer: 3,
    explanation: "Despite being slower and more fragile, HDDs are typically cheaper per gigabyte at large capacities, which suits bulk archival storage.",
    topic: "Input, Output and Storage",
  },
  {
    question: "What is the main purpose of a buffer?",
    options: [
      "To temporarily hold data while it moves between devices operating at different speeds",
      "To permanently store data after a program closes",
      "To encrypt data being transferred",
      "To increase a processor's clock speed",
    ],
    answer: 0,
    explanation: "A buffer smooths out speed mismatches, e.g. between a fast CPU and a slower printer, so data is not lost.",
    topic: "Input, Output and Storage",
  },
  {
    question: "What is the key difference between primary storage (e.g. RAM) and secondary storage (e.g. an SSD or HDD)?",
    options: [
      "Primary storage is always non-volatile; secondary storage is always volatile",
      "Primary storage is directly addressable by the CPU and typically volatile; secondary storage is non-volatile and used for long-term storage",
      "There is no meaningful difference between them",
      "Secondary storage is always faster than primary storage",
    ],
    answer: 1,
    explanation: "RAM is fast and CPU-addressable but loses its contents when powered off; secondary storage is slower but retains data long-term.",
    topic: "Input, Output and Storage",
  },
  {
    question: "'Thrashing' occurs when",
    options: [
      "A hard disk's read/write head physically collides with the platter",
      "A CPU overheats due to excessive clock speed",
      "A system spends excessive time swapping data between RAM and virtual memory instead of executing programs",
      "A network becomes congested with too many packets",
    ],
    answer: 2,
    explanation: "Thrashing happens when there is too little RAM for the workload, so the system constantly pages data in and out, hurting performance.",
    topic: "Input, Output and Storage",
  },

  // Systems Software
  {
    question: "What happens immediately after the CPU finishes handling an interrupt service routine?",
    options: [
      "The computer shuts down",
      "The program restarts from the beginning",
      "The interrupt is permanently disabled",
      "Control returns to the point in the original program where the interrupt occurred",
    ],
    answer: 3,
    explanation: "The CPU resumes the interrupted program from where it left off, using the state saved before the interrupt was handled.",
    topic: "Systems Software",
  },
  {
    question: "Which scheduling algorithm always allocates the CPU to whichever process arrived first, running it to completion before starting the next?",
    options: [
      "First Come First Served (FCFS)",
      "Shortest job first",
      "Round robin",
      "Multilevel feedback queue",
    ],
    answer: 0,
    explanation: "FCFS processes jobs strictly in arrival order with no pre-emption, which can cause long waits behind a lengthy job.",
    topic: "Systems Software",
  },
  {
    question: "What is the main difference between a Type 1 and a Type 2 hypervisor?",
    options: [
      "Type 1 only supports one virtual machine; Type 2 supports many",
      "Type 1 runs directly on the hardware; Type 2 runs on top of a host operating system",
      "Type 1 is used only for gaming; Type 2 only for servers",
      "There is no functional difference between them",
    ],
    answer: 1,
    explanation: "A Type 1 (bare-metal) hypervisor runs directly on hardware; a Type 2 hypervisor runs as an application on a host OS.",
    topic: "Systems Software",
  },
  {
    question: "Paging is a memory management technique that",
    options: [
      "stores all of a process permanently in cache",
      "prevents a process from ever using virtual memory",
      "divides memory into fixed-size blocks so a process's data need not occupy one continuous block",
      "only applies to secondary storage, not RAM",
    ],
    answer: 2,
    explanation: "Paging splits memory into fixed-size pages/frames, avoiding the need for a process to be loaded into one continuous block.",
    topic: "Systems Software",
  },

  // Applications Generation (Translators)
  {
    question: "Which type of translator is generally preferred for interactive development and testing, since it can run code directly without a separate compilation step?",
    options: [
      "Compiler",
      "Linker",
      "Assembler",
      "Interpreter",
    ],
    answer: 3,
    explanation: "Interpreters translate and execute directly, which is convenient for quickly testing changes, though execution is typically slower than compiled code.",
    topic: "Applications Generation (Translators)",
  },
  {
    question: "A program calls a function from an external library that has already been separately compiled into object code. Which stage combines this object code with the program's own compiled code to produce a runnable executable?",
    options: [
      "Linking",
      "Lexical analysis",
      "Interpretation",
      "Assembling",
    ],
    answer: 0,
    explanation: "Linking combines separately compiled object code modules, including library code, into a single executable program.",
    topic: "Applications Generation (Translators)",
  },
  {
    question: "During which stage of compilation is a variable used without ever being declared typically detected?",
    options: [
      "Lexical analysis",
      "Semantic analysis",
      "Code generation",
      "Code optimisation",
    ],
    answer: 1,
    explanation: "Semantic analysis checks meaning-based rules, such as whether a name has been declared before use.",
    topic: "Applications Generation (Translators)",
  },
  {
    question: "Which translator converts assembly language mnemonics into machine code on a broadly one-instruction-to-one-instruction basis?",
    options: [
      "Compiler",
      "Interpreter",
      "Assembler",
      "Linker",
    ],
    answer: 2,
    explanation: "An assembler translates low-level assembly mnemonics into machine code, typically with a near one-to-one correspondence.",
    topic: "Applications Generation (Translators)",
  },

  // Software Development Methodologies
  {
    question: "Which methodology combines iterative prototyping with a formal risk-analysis phase repeated at each iteration?",
    options: [
      "Waterfall",
      "First Come First Served",
      "Extreme Programming",
      "Spiral model",
    ],
    answer: 3,
    explanation: "The spiral model repeats planning, risk analysis, prototyping and evaluation, adding a formal risk-assessment step other iterative models lack.",
    topic: "Software Development Methodologies",
  },
  {
    question: "A defining feature of agile development is",
    options: [
      "delivering working software in short, iterative sprints with regular feedback",
      "a single long design phase completed before any coding begins",
      "no customer involvement until the final release",
      "a strict rule that requirements can never change once set",
    ],
    answer: 0,
    explanation: "Agile methods deliver working increments in short sprints, gathering feedback and adapting throughout development.",
    topic: "Software Development Methodologies",
  },
  {
    question: "Which methodology would generally be least suitable for a project where requirements are highly likely to change during development?",
    options: [
      "Agile",
      "Waterfall",
      "Extreme Programming",
      "Rapid Application Development (RAD)",
    ],
    answer: 1,
    explanation: "Waterfall's strict, sequential, sign-off-per-stage structure makes it costly to accommodate changing requirements once started.",
    topic: "Software Development Methodologies",
  },
  {
    question: "What is a key feature of Rapid Application Development (RAD)?",
    options: [
      "Extensive upfront documentation before any prototype is built",
      "A strict no-prototyping policy",
      "Heavy use of prototyping to quickly build and refine a working system with user feedback",
      "Development spread across many years with no user feedback",
    ],
    answer: 2,
    explanation: "RAD prioritises rapid, iterative prototyping and user feedback over extensive upfront planning and documentation.",
    topic: "Software Development Methodologies",
  },

  // Compression, Encryption and Hashing
  {
    question: "Which of these best describes a hash function used for data integrity checking?",
    options: [
      "It encrypts data so only an authorised key holder can read it",
      "It requires a matching private and public key pair",
      "It compresses data losslessly, allowing the original to be reconstructed exactly",
      "It produces a fixed-length output ('digest') from input data, which changes if the input changes even slightly",
    ],
    answer: 3,
    explanation: "A hash function maps input of any size to a fixed-length digest; even a tiny change to the input produces a very different digest.",
    topic: "Compression, Encryption and Hashing",
  },
  {
    question: "A company wants to encrypt a large volume of data quickly using a single shared secret key known to both sender and receiver. Which encryption approach is this?",
    options: [
      "Symmetric encryption",
      "Hashing",
      "Asymmetric encryption",
      "Run Length Encoding",
    ],
    answer: 0,
    explanation: "Symmetric encryption uses one shared secret key for both encryption and decryption, and is generally faster than asymmetric encryption for large volumes of data.",
    topic: "Compression, Encryption and Hashing",
  },
  {
    question: "Which of these images would compress most effectively using Run Length Encoding?",
    options: [
      "A photo of a busy, colourful crowd with fine detail throughout",
      "A simple logo made of large blocks of a single flat colour",
      "White noise / random static",
      "A high-resolution photograph with subtle gradients everywhere",
    ],
    answer: 1,
    explanation: "Run Length Encoding replaces runs of repeated identical values with a count and value, so it works best on images with large uniform areas rather than fine, varied detail.",
    topic: "Compression, Encryption and Hashing",
  },

  // Databases
  {
    question: "What is the purpose of a foreign key?",
    options: [
      "To uniquely identify every record in its own table",
      "To encrypt sensitive fields in a table",
      "To link a record in one table to a related record in another table",
      "To sort a table's records automatically",
    ],
    answer: 2,
    explanation: "A foreign key stores a value matching a primary key in another table, creating a relationship between the two.",
    topic: "Databases",
  },
  {
    question: "A table is in Third Normal Form (3NF) when it is in 2NF and additionally",
    options: [
      "every field contains only atomic (single) values",
      "every non-key field depends only on the whole primary key, not part of it",
      "it contains a composite primary key",
      "no non-key field depends on another non-key field (no transitive dependency)",
    ],
    answer: 3,
    explanation: "3NF removes transitive dependencies, so a non-key field cannot depend on another non-key field rather than the primary key directly.",
    topic: "Databases",
  },
  {
    question: "Which SQL keyword is used to remove rows from a table?",
    options: [
      "DELETE",
      "DROP",
      "REMOVE",
      "CLEAR",
    ],
    answer: 0,
    explanation: "DELETE removes rows matching a given condition; DROP would remove the whole table/database object instead.",
    topic: "Databases",
  },
  {
    question: "What does the 'Consistency' property of ACID guarantee?",
    options: [
      "A transaction can be split across multiple unrelated databases freely",
      "A transaction takes a database from one valid state to another, preserving all defined rules",
      "Transactions always complete instantly with zero delay",
      "Data is always compressed before being stored",
    ],
    answer: 1,
    explanation: "Consistency ensures a transaction only moves the database between states that satisfy its integrity rules/constraints.",
    topic: "Databases",
  },
  {
    question: "Why is referential integrity important in a relational database?",
    options: [
      "It makes tables load faster",
      "It automatically encrypts personal data",
      "It prevents a foreign key from referencing a primary key value that doesn't exist",
      "It removes the need for primary keys",
    ],
    answer: 2,
    explanation: "Referential integrity stops \"orphaned\" foreign key values that point to a record which does not actually exist.",
    topic: "Databases",
  },
  {
    question: "Which SQL clause is used to filter grouped results based on an aggregate condition, e.g. COUNT(*) > 5?",
    options: [
      "WHERE",
      "GROUP",
      "ORDER BY",
      "HAVING",
    ],
    answer: 3,
    explanation: "HAVING filters groups after aggregation (e.g. after GROUP BY), whereas WHERE filters individual rows before grouping.",
    topic: "Databases",
  },
  {
    question: "A database transaction is only partially completed when the system crashes mid-way through. Which ACID property is violated if the partial changes are left in place?",
    options: [
      "Atomicity",
      "Isolation only",
      "Consistency only",
      "Durability only",
    ],
    answer: 0,
    explanation: "Atomicity requires a transaction to be all-or-nothing; a partially applied transaction breaks this guarantee unless it is rolled back.",
    topic: "Databases",
  },

  // Networks
  {
    question: "What is the main function of a switch on a wired LAN?",
    options: [
      "To translate domain names into IP addresses",
      "To connect devices within the same network and forward data only to the intended recipient using MAC addresses",
      "To route traffic between different networks",
      "To assign IP addresses automatically to devices",
    ],
    answer: 1,
    explanation: "A switch learns which device is on which port (via MAC address) and forwards frames only to the intended recipient, unlike a hub.",
    topic: "Networks",
  },
  {
    question: "What does DNS (Domain Name System) do?",
    options: [
      "Encrypts data sent across the internet",
      "Assigns MAC addresses to network devices",
      "Translates human-readable domain names into IP addresses",
      "Compresses packets before transmission",
    ],
    answer: 2,
    explanation: "DNS resolves domain names (e.g. a website name) into the IP address needed to actually route traffic to it.",
    topic: "Networks",
  },
  {
    question: "Which of these is most likely to prevent two devices on the same physical network from communicating, even though both have a valid IP address?",
    options: [
      "Both devices being made by the same manufacturer",
      "Both devices having a valid MAC address",
      "Both devices using the same network cable type",
      "An incorrectly configured subnet mask",
    ],
    answer: 3,
    explanation: "A mismatched or incorrect subnet mask makes a device calculate the wrong network range, so it may fail to correctly reach devices that should be local.",
    topic: "Networks",
  },
  {
    question: "What is a key advantage of a mesh topology over a star topology?",
    options: [
      "It has no single point of failure, since devices have multiple redundant connections",
      "It is always cheaper to install",
      "It requires the least cabling of any topology",
      "It only works on wireless networks",
    ],
    answer: 0,
    explanation: "In a full mesh, the failure of any one link or node does not necessarily stop other devices communicating, unlike a star with its central switch.",
    topic: "Networks",
  },
  {
    question: "Which of these best describes packet switching?",
    options: [
      "A dedicated physical circuit is reserved for the entire duration of a communication",
      "Data is split into packets which may travel via different routes and are reassembled at the destination",
      "Data can only travel between two directly connected devices",
      "All data must use the same physical route to guarantee order",
    ],
    answer: 1,
    explanation: "Packet switching splits data into packets that are routed independently and reassembled at the destination, making efficient use of shared network capacity.",
    topic: "Networks",
  },
  {
    question: "What is the main purpose of a MAC address?",
    options: [
      "To encrypt data sent over Wi-Fi",
      "To identify a device's location on the internet for routing between networks",
      "To uniquely and permanently identify a network interface at the hardware/data-link layer",
      "To translate domain names to IP addresses",
    ],
    answer: 2,
    explanation: "A MAC address is a hardware identifier burned into a network interface, used for local delivery rather than internet-wide routing.",
    topic: "Networks",
  },

  // Web Technologies
  {
    question: "A user submits an order on an e-commerce site. Checking real-time stock levels against the business's central database before confirming the order requires",
    options: [
      "client-side processing only",
      "only CSS styling",
      "no processing at all",
      "server-side processing, since it needs access to the central database",
    ],
    answer: 3,
    explanation: "The browser cannot directly access the business's central database, so this logic must run on the server, which returns the result to the client.",
    topic: "Web Technologies",
  },
  {
    question: "What is the main purpose of a search engine's index?",
    options: [
      "To allow fast retrieval of relevant pages without searching the entire web in real time for every query",
      "To store a permanent copy of every website's full source code",
      "To block certain websites from being viewed",
      "To rank websites purely by how recently they were created",
    ],
    answer: 0,
    explanation: "Search engines pre-build an index by crawling the web, so a query can be matched against the index quickly rather than searching live.",
    topic: "Web Technologies",
  },
  {
    question: "A persistent cookie differs from a session cookie because it",
    options: [
      "is deleted the moment the browser is closed",
      "remains stored on the device for a set period even after the browser closes",
      "can never be deleted by the user",
      "only stores information about the server, not the user",
    ],
    answer: 1,
    explanation: "A persistent cookie has an expiry date and survives browser restarts, unlike a session cookie which is deleted when the browser closes.",
    topic: "Web Technologies",
  },
  {
    question: "Which language is primarily used to define the structure and content of a webpage?",
    options: [
      "CSS",
      "JavaScript",
      "HTML",
      "SQL",
    ],
    answer: 2,
    explanation: "HTML defines the structure and content of a page; CSS styles it and JavaScript adds behaviour.",
    topic: "Web Technologies",
  },

  // Data Types and Number Representation
  {
    question: "What is the main reason floating point representation is used instead of fixed point for very large or very small numbers?",
    options: [
      "It always uses fewer bits than fixed point",
      "It is faster for every arithmetic operation",
      "It never produces rounding errors",
      "It can represent a much wider range of values using a mantissa and exponent",
    ],
    answer: 3,
    explanation: "The mantissa/exponent structure lets floating point trade some precision for a far greater representable range than fixed point.",
    topic: "Data Types and Number Representation",
  },
  {
    question: "How many possible characters/values can be represented using an 8-bit binary code?",
    options: [
      "256",
      "16",
      "128",
      "8",
    ],
    answer: 0,
    explanation: "8 bits give 2^8 = 256 unique combinations.",
    topic: "Data Types and Number Representation",
  },

  // Boolean Algebra
  {
    question: "What is the output of a NOR gate when both inputs are 0?",
    options: [
      "0",
      "1",
      "Undefined",
      "Depends on a third input",
    ],
    answer: 1,
    explanation: "NOR is the inverse of OR; OR(0,0)=0, so NOR(0,0)=1.",
    topic: "Boolean Algebra",
  },
  {
    question: "Which law states that A + A.B simplifies to A?",
    options: [
      "De Morgan's law",
      "The distributive law",
      "The absorption law",
      "The commutative law",
    ],
    answer: 2,
    explanation: "The absorption law shows that A + A.B always equals A, since the A.B term is \"absorbed\" whenever A is true.",
    topic: "Boolean Algebra",
  },
  {
    question: "A full adder differs from a half adder because it",
    options: [
      "only outputs a sum, with no carry",
      "only works with a single input",
      "cannot be built from logic gates",
      "has an additional carry-in input, allowing multiple full adders to be chained to add multi-bit numbers",
    ],
    answer: 3,
    explanation: "A full adder accepts a carry-in as well as two data inputs, so full adders can be chained to add binary numbers wider than one bit.",
    topic: "Boolean Algebra",
  },
  {
    question: "Applying De Morgan's law, NOT(A + B) is equivalent to",
    options: [
      "NOT A . NOT B",
      "A . B",
      "NOT A + NOT B",
      "A + B",
    ],
    answer: 0,
    explanation: "De Morgan's second law states NOT(A + B) = NOT A . NOT B.",
    topic: "Boolean Algebra",
  },

  // Algorithms: Searching, Sorting & Graph Traversal
  {
    question: "What is the average and best-case time complexity of a well-implemented quicksort?",
    options: [
      "O(n)",
      "O(n log n)",
      "O(n²)",
      "O(log n)",
    ],
    answer: 1,
    explanation: "Quicksort's average/best case is O(n log n); only its worst case (already-sorted data with a poor pivot choice) degrades to O(n²).",
    topic: "Algorithms: Searching, Sorting & Graph Traversal",
  },
  {
    question: "Which algorithm is guaranteed to find the shortest path in a weighted graph with non-negative edge weights?",
    options: [
      "Depth-first search",
      "Breadth-first search",
      "Dijkstra's algorithm",
      "Bubble sort",
    ],
    answer: 2,
    explanation: "Dijkstra's algorithm always expands the cheapest known unvisited node next, guaranteeing the shortest path when weights are non-negative.",
    topic: "Algorithms: Searching, Sorting & Graph Traversal",
  },
  {
    question: "Which data structure does depth-first search typically use to keep track of nodes to visit?",
    options: [
      "A queue",
      "A 2D array",
      "A hash table",
      "A stack (or recursion, which uses the call stack)",
    ],
    answer: 3,
    explanation: "DFS explores as far as possible down one branch before backtracking, which is naturally implemented with a stack or recursion.",
    topic: "Algorithms: Searching, Sorting & Graph Traversal",
  },
  {
    question: "Merge sort's worst-case time complexity of O(n log n) arises because",
    options: [
      "it repeatedly halves the list (log n splits) and merges the halves back together in linear time at each level",
      "it always compares every pair of elements directly",
      "it only works correctly on already-sorted data",
      "it uses no extra memory during merging",
    ],
    answer: 0,
    explanation: "Splitting gives log n levels, and merging at each level costs O(n), giving O(n log n) overall.",
    topic: "Algorithms: Searching, Sorting & Graph Traversal",
  },
  {
    question: "What does Big O notation describe?",
    options: [
      "The exact runtime of an algorithm in seconds",
      "How an algorithm's runtime or space requirement grows as the input size increases",
      "The amount of RAM installed in a computer",
      "The number of lines of code in an algorithm",
    ],
    answer: 1,
    explanation: "Big O describes the growth trend of time/space requirements with input size, not an exact measured runtime.",
    topic: "Algorithms: Searching, Sorting & Graph Traversal",
  },
  {
    question: "Insertion sort performs particularly well, close to O(n), when",
    options: [
      "the list is sorted in reverse order",
      "the list is in completely random order",
      "the list is already nearly sorted",
      "the list contains only duplicate values in random order",
    ],
    answer: 2,
    explanation: "With a nearly-sorted list, each new element needs very few shifts to reach its correct position, so insertion sort approaches linear time.",
    topic: "Algorithms: Searching, Sorting & Graph Traversal",
  },

  // Data Structures
  {
    question: "Which operation adds an item to the top of a stack?",
    options: [
      "Enqueue",
      "Pop",
      "Dequeue",
      "Push",
    ],
    answer: 3,
    explanation: "Push adds an item to the top of a stack; Pop removes the top item.",
    topic: "Data Structures",
  },
  {
    question: "In a queue, which end is used to remove items?",
    options: [
      "The front",
      "Either end at random",
      "The rear/back",
      "The middle",
    ],
    answer: 0,
    explanation: "A queue is First In, First Out: items are added at the rear and removed from the front.",
    topic: "Data Structures",
  },
  {
    question: "What does each node in a singly linked list typically store?",
    options: [
      "Only the data value",
      "The data value and a pointer/reference to the next node",
      "Pointers to both the previous and next node",
      "An index into an array",
    ],
    answer: 1,
    explanation: "A singly linked list node stores its data plus a single pointer to the next node in the sequence.",
    topic: "Data Structures",
  },
  {
    question: "For a binary search tree containing the values 5, 3, 8, 1, 4, which traversal would list them as 1, 3, 4, 5, 8?",
    options: [
      "Pre-order",
      "Post-order",
      "In-order",
      "Level-order (breadth-first)",
    ],
    answer: 2,
    explanation: "In-order traversal (left, node, right) visits the nodes of a binary search tree in ascending numerical order.",
    topic: "Data Structures",
  },
  {
    question: "A hash table collision occurs when",
    options: [
      "two identical keys are inserted one after another",
      "a key is deleted before it is inserted",
      "the table becomes completely empty",
      "two different keys hash to the same index",
    ],
    answer: 3,
    explanation: "A collision happens when two distinct keys are mapped by the hash function to the same table index.",
    topic: "Data Structures",
  },
  {
    question: "Which of these is a key advantage of a linked list over a static array?",
    options: [
      "It can grow or shrink dynamically without needing to be resized/copied",
      "Faster access to a random element by index",
      "It always uses less memory per element",
      "It guarantees elements are stored in sorted order",
    ],
    answer: 0,
    explanation: "A linked list allocates nodes as needed, so it can grow or shrink freely, unlike a fixed-size static array.",
    topic: "Data Structures",
  },
  {
    question: "What best describes a graph data structure?",
    options: [
      "A linear structure where each element has exactly one predecessor and successor",
      "A collection of nodes (vertices) connected by edges, which may or may not be linear or hierarchical",
      "A structure that must always be a perfect hierarchy with one root",
      "A fixed-size structure that cannot represent relationships between items",
    ],
    answer: 1,
    explanation: "A graph is a general structure of vertices and edges, more flexible than a strictly linear list or hierarchical tree.",
    topic: "Data Structures",
  },

  // Elements of Computational Thinking
  {
    question: "What is 'algorithmic thinking'?",
    options: [
      "Writing code in a specific programming language",
      "Testing software for bugs",
      "Devising a step-by-step, logical solution to a problem",
      "Designing a computer's hardware",
    ],
    answer: 2,
    explanation: "Algorithmic thinking is about designing a clear, ordered sequence of steps to solve a problem, independent of any particular language.",
    topic: "Elements of Computational Thinking",
  },
  {
    question: "A programmer breaks the task 'build a game' into 'design levels', 'write movement code', 'design UI' and 'add scoring'. This process is an example of",
    options: [
      "Abstraction",
      "Debugging",
      "Pattern recognition",
      "Decomposition",
    ],
    answer: 3,
    explanation: "Splitting a large problem into smaller, more manageable sub-problems is decomposition.",
    topic: "Elements of Computational Thinking",
  },
  {
    question: "Which computational thinking skill involves removing unnecessary detail to focus only on what is relevant to solving the problem?",
    options: [
      "Abstraction",
      "Decomposition",
      "Thinking ahead",
      "Thinking concurrently",
    ],
    answer: 0,
    explanation: "Abstraction hides irrelevant complexity, keeping only the details needed to solve the problem at hand.",
    topic: "Elements of Computational Thinking",
  },
  {
    question: "'Thinking concurrently' in computational thinking involves",
    options: [
      "solving only one part of a problem at a time in strict sequence",
      "considering how multiple processes or tasks could be carried out simultaneously",
      "ignoring timing considerations altogether",
      "writing pseudocode before implementation",
    ],
    answer: 1,
    explanation: "Thinking concurrently means designing a solution with tasks that can run at the same time, rather than assuming strict sequential execution.",
    topic: "Elements of Computational Thinking",
  },

  // Programming Techniques
  {
    question: "In the recursive definition factorial(n) = n × factorial(n-1), what serves as the base case?",
    options: [
      "factorial(n-1)",
      "n × factorial(n-1)",
      "factorial(0) = 1 (or factorial(1) = 1)",
      "There is no base case needed",
    ],
    answer: 2,
    explanation: "The base case, factorial(0) = 1, is the condition that stops the recursive calls; without it, the function would call itself forever.",
    topic: "Programming Techniques",
  },
  {
    question: "A subroutine receives an array parameter passed by reference and sorts it in place. After the subroutine call, the original array in the calling code will be",
    options: [
      "unchanged, since arrays are always passed by value",
      "converted to a different data type",
      "deleted",
      "sorted, since changes made via a reference parameter affect the original data",
    ],
    answer: 3,
    explanation: "Passing by reference gives the subroutine access to the actual array in memory, so changes made inside it persist after it returns.",
    topic: "Programming Techniques",
  },
  {
    question: "What is the main purpose of exception handling (e.g. try/except)?",
    options: [
      "To allow a program to detect and gracefully respond to runtime errors instead of crashing",
      "To speed up a program's execution",
      "To automatically fix all syntax errors",
      "To compile source code into machine code",
    ],
    answer: 0,
    explanation: "Exception handling lets a program catch runtime errors (like division by zero) and respond sensibly rather than terminating abruptly.",
    topic: "Programming Techniques",
  },
  {
    question: "A count-controlled loop, such as a FOR loop, is best used when",
    options: [
      "the number of iterations is unknown in advance and depends on user input",
      "the number of iterations is known in advance",
      "the loop must always execute at least once regardless of the condition",
      "you need to wait for an external event before continuing",
    ],
    answer: 1,
    explanation: "FOR loops are ideal when you already know exactly how many times the loop body should run.",
    topic: "Programming Techniques",
  },
  {
    question: "What is a key difference between a local and a global variable?",
    options: [
      "A local variable can be accessed anywhere in the program; a global variable cannot",
      "Global variables cannot store numeric data",
      "A local variable exists only within the subroutine/block it is declared in; a global variable is accessible throughout the program",
      "There is no meaningful difference between them",
    ],
    answer: 2,
    explanation: "A local variable is scoped to the block/subroutine it is declared in, while a global variable can be accessed from anywhere in the program.",
    topic: "Programming Techniques",
  },

  // Computational Methods
  {
    question: "Which computational method involves repeatedly breaking a problem into smaller sub-problems of the same type, solving them, and combining the results?",
    options: [
      "Backtracking",
      "Visualisation",
      "Data mining",
      "Divide and conquer",
    ],
    answer: 3,
    explanation: "Divide and conquer splits a problem into smaller sub-problems of the same type, solves each, then combines the results (as merge sort does).",
    topic: "Computational Methods",
  },
  {
    question: "A program solving a Sudoku puzzle tries a number in a cell, and if it later finds this leads to a contradiction, it removes that number and tries a different one instead. This approach is an example of",
    options: [
      "Backtracking",
      "Divide and conquer",
      "Data mining",
      "Visualisation",
    ],
    answer: 0,
    explanation: "Backtracking systematically tries possible solutions and retreats ('backtracks') from any path shown not to work, trying alternatives instead.",
    topic: "Computational Methods",
  },
  {
    question: "A heuristic approach is typically chosen over an exact algorithm when",
    options: [
      "the problem has only one possible input",
      "the exact algorithm would take an impractically long time to guarantee the optimal solution",
      "speed is not a concern at all",
      "the data is already perfectly sorted",
    ],
    answer: 1,
    explanation: "Heuristics trade guaranteed optimality for speed, which is useful when an exact solution would take too long to compute, e.g. the Travelling Salesman Problem.",
    topic: "Computational Methods",
  },
  {
    question: "Performance modelling before deploying a new system is used to",
    options: [
      "guarantee zero bugs in the final system",
      "replace the need for testing entirely",
      "simulate and predict how the system will behave under expected conditions (e.g. load) before it is fully built/deployed",
      "automatically write the system's code",
    ],
    answer: 2,
    explanation: "Performance modelling simulates expected conditions in advance, helping identify likely bottlenecks before real deployment.",
    topic: "Computational Methods",
  },
  {
    question: "Data mining is best described as",
    options: [
      "manually typing data into a database",
      "a method of compressing video files",
      "physically extracting minerals used in hardware manufacture",
      "automatically searching large datasets to discover patterns, trends or relationships",
    ],
    answer: 3,
    explanation: "Data mining uses automated methods to find useful patterns or relationships hidden within large datasets.",
    topic: "Computational Methods",
  },

  // Programming Paradigms
  {
    question: "A BankAccount class stores its balance as a private attribute, only allowing it to be changed through a deposit() or withdraw() method that includes validation checks. This design demonstrates",
    options: [
      "Encapsulation",
      "Polymorphism",
      "Inheritance",
      "Procedural programming",
    ],
    answer: 0,
    explanation: "Restricting direct access to an attribute and only allowing controlled access through methods is encapsulation.",
    topic: "Programming Paradigms",
  },
  {
    question: "A Vehicle class has attributes make and speed and a method move(). A Car class and a Motorbike class both need these attributes/methods plus their own extra features. Which OOP feature lets Car and Motorbike reuse Vehicle's code without rewriting it?",
    options: [
      "Encapsulation",
      "Inheritance",
      "Overloading",
      "Composition",
    ],
    answer: 1,
    explanation: "Inheritance allows a subclass (Car, Motorbike) to acquire the attributes and methods of a superclass (Vehicle), avoiding duplicated code.",
    topic: "Programming Paradigms",
  },
  {
    question: "Polymorphism in OOP refers to",
    options: [
      "a class having only one possible behaviour for all of its objects",
      "encrypting an object's private data",
      "the ability for objects of different classes to respond to the same method call in ways appropriate to their own type",
      "combining multiple classes into a single file",
    ],
    answer: 2,
    explanation: "Polymorphism lets different classes implement the same method name in their own way, so the same call produces type-appropriate behaviour.",
    topic: "Programming Paradigms",
  },
  {
    question: "SQL lets a user specify 'what' data they want (e.g. SELECT name FROM Students WHERE age > 16) without specifying the exact step-by-step retrieval process. This is characteristic of",
    options: [
      "Procedural programming",
      "Object-oriented programming",
      "Assembly-level programming",
      "Declarative programming",
    ],
    answer: 3,
    explanation: "Declarative programming (e.g. SQL) describes the desired outcome, leaving the underlying implementation/steps to the system.",
    topic: "Programming Paradigms",
  },
  {
    question: "Method overriding occurs when",
    options: [
      "a subclass provides its own implementation of a method already defined in its superclass, using the same method signature",
      "a class defines two methods with the same name but different parameter lists",
      "a method calls itself recursively",
      "a variable is declared twice in the same scope",
    ],
    answer: 0,
    explanation: "Overriding replaces the inherited version of a method in a subclass, keeping the same signature but providing new behaviour.",
    topic: "Programming Paradigms",
  },
  {
    question: "In procedural programming, a program is primarily structured as",
    options: [
      "a collection of interacting objects with private data",
      "a sequence of instructions and procedure/function calls executed in order",
      "a set of declarative rules with no explicit sequence",
      "a single class with no subroutines",
    ],
    answer: 1,
    explanation: "Procedural programming organises code as an ordered sequence of instructions and calls to procedures/functions.",
    topic: "Programming Paradigms",
  },
  {
    question: "An attribute declared as 'private' in a class",
    options: [
      "can be accessed and changed directly from anywhere in the program",
      "is automatically shared between all objects of that class",
      "can only be accessed directly from within the class itself, supporting encapsulation",
      "cannot be given a value at all",
    ],
    answer: 2,
    explanation: "A private attribute is hidden from code outside the class, so it can only be changed through the class's own methods.",
    topic: "Programming Paradigms",
  },
  {
    question: "Which paradigm is most associated with 'pure' functions that avoid changing shared/global state, favouring immutability?",
    options: [
      "Procedural programming",
      "Object-oriented programming",
      "Assembly programming",
      "Functional programming",
    ],
    answer: 3,
    explanation: "Functional programming favours pure functions and immutable data, avoiding side effects from changing shared state.",
    topic: "Programming Paradigms",
  },
  {
    question: "A key benefit of using OOP to model a simulation with many different interacting entity types (e.g. a hospital system with Doctor, Patient, Room) is that",
    options: [
      "each entity type can be modelled as its own class with relevant attributes/methods, and related classes can share behaviour through inheritance",
      "every entity must be represented using a single shared global variable",
      "OOP prevents any two objects from ever interacting",
      "it removes the need for any testing",
    ],
    answer: 0,
    explanation: "OOP naturally models distinct real-world entity types as classes, with inheritance and composition allowing related classes to share behaviour cleanly.",
    topic: "Programming Paradigms",
  },

  // Analysis and Design (Systems Life Cycle)
  {
    question: "A systems analyst interviews staff, observes current working practices, and studies existing documentation before any code is written. Which stage of the systems life cycle is this?",
    options: [
      "Design",
      "Analysis",
      "Implementation",
      "Maintenance",
    ],
    answer: 1,
    explanation: "Interviewing users, observation and document study are classic fact-finding techniques used during the analysis stage.",
    topic: "Analysis and Design (Systems Life Cycle)",
  },
  {
    question: "Adaptive maintenance is carried out to",
    options: [
      "fix a bug causing incorrect output",
      "improve a system's performance with no functional change",
      "modify a system to work correctly in a new/changed environment, e.g. a new operating system",
      "add entirely new features requested by users",
    ],
    answer: 2,
    explanation: "Adaptive maintenance updates a system so it continues to work correctly as its environment changes, such as new hardware or OS updates.",
    topic: "Analysis and Design (Systems Life Cycle)",
  },
  {
    question: "A UML use case diagram is primarily used to show",
    options: [
      "the internal attributes and methods of a class",
      "the binary data stored in a database",
      "the physical network layout of a system",
      "the interactions between users (actors) and the system's functions",
    ],
    answer: 3,
    explanation: "A use case diagram models how different actors (users/external systems) interact with the functions the system provides.",
    topic: "Analysis and Design (Systems Life Cycle)",
  },
  {
    question: "Boundary test data is used to check",
    options: [
      "values at the very edge of the accepted range, e.g. the minimum and maximum valid values",
      "values clearly inside the accepted range",
      "values that should always be rejected",
      "only string data types",
    ],
    answer: 0,
    explanation: "Boundary data tests the extreme edges of a valid range, where off-by-one errors are most likely to appear.",
    topic: "Analysis and Design (Systems Life Cycle)",
  },
  {
    question: "Perfective maintenance involves",
    options: [
      "fixing an error found after release",
      "improving or enhancing a system's performance or usability without fixing an error or adapting to new hardware",
      "making changes so the system works with new hardware",
      "deleting features no longer used by any customer",
    ],
    answer: 1,
    explanation: "Perfective maintenance enhances a working system, e.g. improving speed or usability, rather than fixing a fault or adapting to a new environment.",
    topic: "Analysis and Design (Systems Life Cycle)",
  },

  // Legal, Moral, Cultural and Ethical Issues
  {
    question: "A person finds a company's admin password written on a sticky note and uses it to access files they are not authorised to see, without changing or deleting anything. Under the Computer Misuse Act 1990, this is",
    options: [
      "not an offence, since nothing was changed or deleted",
      "only a civil matter, not a criminal one",
      "an offence, since unauthorised access alone is illegal even without causing damage",
      "legal, because the password was left visible",
    ],
    answer: 2,
    explanation: "The Computer Misuse Act criminalises unauthorised access to computer material regardless of whether any damage is caused.",
    topic: "Legal, Moral, Cultural and Ethical Issues",
  },
  {
    question: "A customer emails a company asking exactly what personal data it holds about them and why. Under UK GDPR, the company",
    options: [
      "can refuse, since companies are not required to disclose this",
      "is only required to respond to requests from other businesses, not individuals",
      "only has to respond if the customer pays a large fee",
      "must generally respond and provide the requested information (a subject access request)",
    ],
    answer: 3,
    explanation: "UK GDPR gives individuals the right to make a subject access request, and organisations must generally provide the personal data held about them.",
    topic: "Legal, Moral, Cultural and Ethical Issues",
  },
  {
    question: "The Copyright, Designs and Patents Act 1988 primarily protects",
    options: [
      "original creative works, such as software code, from being copied without permission",
      "an individual's personal data from misuse",
      "computer systems from unauthorised access",
      "consumers from faulty products",
    ],
    answer: 0,
    explanation: "The Copyright, Designs and Patents Act protects original creative works, including software, from unauthorised copying or distribution.",
    topic: "Legal, Moral, Cultural and Ethical Issues",
  },
  {
    question: "A small business wants to customise a piece of software's source code to fit its exact workflow, and share those changes with others. Which licensing model would most likely allow this?",
    options: [
      "Proprietary, closed-source software",
      "Open source software",
      "Freeware with no source code provided",
      "Shareware with a paid unlock code",
    ],
    answer: 1,
    explanation: "Open source licences typically grant the right to view, modify and redistribute the source code, which proprietary/closed-source licences do not.",
    topic: "Legal, Moral, Cultural and Ethical Issues",
  },
  {
    question: "Algorithmic bias occurs when",
    options: [
      "an algorithm runs too slowly on old hardware",
      "a program contains a syntax error",
      "an algorithm produces systematically unfair outcomes for certain groups, often due to biased training data",
      "a network connection is encrypted",
    ],
    answer: 2,
    explanation: "Algorithmic bias arises when a system, often trained on unrepresentative or historically biased data, systematically disadvantages certain groups.",
    topic: "Legal, Moral, Cultural and Ethical Issues",
  },
  {
    question: "The 'digital divide' refers to",
    options: [
      "the difference in performance between two CPUs",
      "the separation of hardware and software",
      "a disagreement between two programming languages' syntax",
      "the gap between those who have good access to computing technology/the internet and those who do not",
    ],
    answer: 3,
    explanation: "The digital divide describes unequal access to technology and connectivity, which can reinforce existing social and economic inequality.",
    topic: "Legal, Moral, Cultural and Ethical Issues",
  },
  {
    question: "Which of these is most likely to be considered an ethical (rather than strictly legal) issue in computing?",
    options: [
      "Whether it's right to use AI to automate jobs, even though doing so is legal",
      "Hacking into a bank's server",
      "Copying a licensed game without permission",
      "Stealing a laptop",
    ],
    answer: 0,
    explanation: "Automating jobs is generally legal, but whether it is the right thing to do given its social impact is a moral/ethical question rather than a legal one.",
    topic: "Legal, Moral, Cultural and Ethical Issues",
  },
  {
    question: "One environmental concern associated with large-scale computing is",
    options: [
      "computers cannot generate any heat",
      "the high electricity/cooling demand of data centres and the resulting carbon footprint",
      "software cannot be updated without new hardware",
      "all electronic waste is automatically recycled",
    ],
    answer: 1,
    explanation: "Large data centres consume significant electricity for both computing and cooling, contributing to carbon emissions unless powered sustainably.",
    topic: "Legal, Moral, Cultural and Ethical Issues",
  },
  {
    question: "Software piracy is best described as",
    options: [
      "legally purchasing a single-user licence for personal use",
      "writing your own original software from scratch",
      "illegally copying, distributing or using software without the rights holder's permission",
      "reporting a security vulnerability to a vendor",
    ],
    answer: 2,
    explanation: "Software piracy is the unauthorised copying, distribution or use of software in breach of the copyright holder's rights.",
    topic: "Legal, Moral, Cultural and Ethical Issues",
  },
]

export const CS_EXTRA_EXAM_2 = [

  // Structure and Function of the Processor
  {
    question: "A CPU has a 16-bit address bus. Calculate the maximum number of individually addressable memory locations it can access, showing your working.",
    marks: 3,
    markScheme: [
      "Number of addressable locations = 2 raised to the power of the number of address bus bits",
      "2^16 = 65536",
      "Final answer: 65,536 memory locations",
    ],
    topic: "Structure and Function of the Processor",
  },
  {
    question: "Explain the function of the status (flag) register, giving one example of a flag it might store.",
    marks: 3,
    markScheme: [
      "The status register stores individual bits (flags) recording the outcome of the most recently executed ALU/arithmetic operation",
      "Example: a zero flag is set when the result of an operation is zero, or a carry flag when an addition produces a carry out of the most significant bit",
      "Final answer: these flags let the CPU make decisions, for example whether to take a conditional branch instruction",
    ],
    topic: "Structure and Function of the Processor",
  },

  // Types of Processor
  {
    question: "A structural hazard occurs during pipelining. Explain what this is and describe one way a processor design might reduce its impact.",
    marks: 3,
    markScheme: [
      "A structural hazard happens when two or more instructions in the pipeline need to use the same hardware resource at the same time, e.g. a single shared memory unit",
      "This forces one instruction to stall until the resource becomes free",
      "Final answer: it can be reduced by duplicating hardware resources, e.g. separate instruction and data memory/caches, so instructions do not compete for the same unit",
    ],
    topic: "Types of Processor",
  },
  {
    question: "A manufacturer is designing a processor for a smart thermostat. Explain why an embedded processor, rather than a general-purpose multicore CPU, would be the more suitable choice.",
    marks: 3,
    markScheme: [
      "An embedded processor is designed for a single, specific task, so it can be optimised for low power consumption, low cost and small size",
      "A general-purpose multicore CPU is far more powerful than the task requires, wasting power, cost and space",
      "Final answer: the embedded processor is more efficient and appropriate for a dedicated, low-complexity task like a thermostat",
    ],
    topic: "Types of Processor",
  },

  // Databases
  {
    question: "A retailer's database has a single table Orders(OrderID, CustomerName, CustomerAddress, ProductID, ProductName, Price, Quantity). Identify one normalisation problem with this table and explain how splitting it into related tables would fix it.",
    marks: 4,
    markScheme: [
      "CustomerName/CustomerAddress and ProductName/Price are repeated every time that customer or product appears in an order, causing data redundancy",
      "This can cause update anomalies, e.g. if a customer's address changes it must be updated in every one of their order rows, risking inconsistency",
      "Splitting into separate Customers, Products and Orders tables, linked by foreign keys (CustomerID, ProductID), means each piece of data is stored once",
      "Final answer: normalising into related tables removes redundant repeated data and prevents update/insertion/deletion anomalies",
    ],
    topic: "Databases",
  },
  {
    question: "Write an SQL statement to find the names and prices of all products in a table Products with a price greater than 50, ordered from most to least expensive.",
    marks: 3,
    markScheme: [
      "SELECT name, price",
      "FROM Products WHERE price > 50",
      "Final answer: SELECT name, price FROM Products WHERE price > 50 ORDER BY price DESC;",
    ],
    topic: "Databases",
  },

  // Networks
  {
    question: "A school is choosing between a star topology and a mesh topology for a new computer suite. Recommend a topology and justify your choice.",
    marks: 4,
    markScheme: [
      "A star topology connects every device to a central switch; if the switch fails the whole network goes down, but it is cheap, simple to install and easy to expand",
      "A full mesh topology connects every device to every other device, giving high resilience with no single point of failure, but is expensive and complex to cable/maintain",
      "For a school computer suite, cost and simplicity of management are usually more important than extreme fault tolerance",
      "Final answer: a star topology is recommended, since the school does not need mesh-level resilience, and star is cheaper and simpler to maintain",
    ],
    topic: "Networks",
  },
  {
    question: "Explain why HTTPS, rather than HTTP, should be used for a website that processes online payments.",
    marks: 3,
    markScheme: [
      "HTTPS encrypts data sent between the browser and the server (typically using TLS), whereas HTTP sends data in plain text",
      "Without encryption, sensitive data such as card numbers could be intercepted and read by a third party during transmission",
      "Final answer: HTTPS protects the confidentiality of payment data in transit, preventing it from being easily intercepted and read",
    ],
    topic: "Networks",
  },

  // Algorithms: Searching, Sorting & Graph Traversal
  {
    question: "A programmer must sort a list of 10 million records. Compare bubble sort and merge sort for this task and recommend one, justifying your answer using Big O notation.",
    marks: 4,
    markScheme: [
      "Bubble sort has a worst-case and average time complexity of O(n²), so the time taken roughly quadruples if the list size doubles",
      "Merge sort has a worst-case time complexity of O(n log n), which scales far better as n grows large",
      "For 10 million records, O(n²) would be impractically slow, while O(n log n) remains feasible",
      "Final answer: merge sort is recommended, as its O(n log n) complexity makes it far more efficient than bubble sort's O(n²) for a very large dataset",
    ],
    topic: "Algorithms: Searching, Sorting & Graph Traversal",
  },
  {
    question: "Explain how Dijkstra's algorithm finds the shortest path from a start node in a weighted graph, including how it selects which node to process next.",
    marks: 3,
    markScheme: [
      "The algorithm maintains a running shortest-known distance to each node, starting at 0 for the start node and infinity for all others",
      "At each step it selects the unvisited node with the smallest known distance and updates ('relaxes') the distances to its neighbours if a shorter path is found via that node",
      "Final answer: this repeats until all nodes are visited or the destination is reached, guaranteeing the shortest path because it always expands the cheapest known route first",
    ],
    topic: "Algorithms: Searching, Sorting & Graph Traversal",
  },

  // Data Structures
  {
    question: "A web browser needs to implement its 'back' button, remembering the pages a user has visited so it can return to the most recent one first. Recommend a data structure for this and justify your choice.",
    marks: 3,
    markScheme: [
      "A stack (LIFO - last in, first out) is appropriate, as the most recently visited page should be the first one returned to",
      "Each time a new page is visited it is pushed onto the stack; pressing back pops the most recent page off",
      "Final answer: a stack is recommended because its LIFO behaviour naturally matches returning to the most recently visited page first",
    ],
    topic: "Data Structures",
  },
  {
    question: "Explain why searching for a value in a balanced binary search tree is more efficient than searching an unsorted linked list, in terms of time complexity.",
    marks: 3,
    markScheme: [
      "Searching an unsorted linked list requires checking each node in turn until the value is found, giving O(n) worst-case time",
      "A balanced binary search tree allows roughly half of the remaining nodes to be eliminated at each step by comparing against the current node, giving O(log n) worst-case time",
      "Final answer: the binary search tree is more efficient because O(log n) grows far more slowly than O(n) as the number of items increases",
    ],
    topic: "Data Structures",
  },

  // Programming Paradigms
  {
    question: "A software house is building a large simulation involving many different types of interacting entities, e.g. vehicles, pedestrians and traffic lights. Explain why an object-oriented approach would be more suitable than a purely procedural one.",
    marks: 4,
    markScheme: [
      "Each entity type (vehicle, pedestrian, traffic light) can be modelled as its own class, bundling relevant data and behaviour together (encapsulation)",
      "Common behaviour can be shared through inheritance, e.g. a general Vehicle class could be extended by Car and Bus subclasses, reducing duplicated code",
      "Polymorphism allows different entity types to respond to the same method call (e.g. update()) in their own way, simplifying the main simulation loop",
      "Final answer: OOP is more suitable because it naturally models the many distinct, interacting real-world entity types with reusable, well-organised code, which a flat procedural approach would struggle to keep manageable",
    ],
    topic: "Programming Paradigms",
  },
  {
    question: "A weather app combines readings from several WeatherStation objects into a single Forecast object, which uses each station's data without inheriting from a WeatherStation class. Explain how composition applies here, and why it might be preferred over inheritance in this case.",
    marks: 3,
    markScheme: [
      "Composition means the Forecast class holds references to (or instances of) WeatherStation objects as its own attributes, rather than inheriting from a WeatherStation class",
      "This models a 'has-a' relationship (a Forecast has weather stations) rather than an 'is-a' relationship, which fits better here since a Forecast is not itself a type of weather station",
      "Final answer: composition is preferred because it avoids an inappropriate inheritance hierarchy, letting the Forecast class flexibly use functionality from multiple station objects without being tightly coupled to their implementation",
    ],
    topic: "Programming Paradigms",
  },

  // Legal, Moral, Cultural and Ethical Issues
  {
    question: "A company uses an AI system to automatically screen job applications. Discuss one ethical concern this raises.",
    marks: 3,
    markScheme: [
      "The AI may have learned bias from historical training data, e.g. past hiring decisions that under-represented certain groups",
      "This could cause the system to systematically disadvantage candidates based on characteristics like gender or ethnicity, even without explicit intent",
      "Final answer: this raises an ethical concern around fairness and discrimination, since decisions affecting people's livelihoods may be made on a biased basis without clear accountability",
    ],
    topic: "Legal, Moral, Cultural and Ethical Issues",
  },
  {
    question: "Explain why an organisation storing customer personal data must comply with UK GDPR, and describe one obligation it places on the organisation.",
    marks: 3,
    markScheme: [
      "UK GDPR is a legal requirement for any organisation that collects, stores or processes personal data belonging to individuals",
      "One obligation: the organisation must only collect data necessary for a stated purpose, keep it secure, and allow individuals to access or request deletion of their data",
      "Final answer: failing to comply can result in legal penalties (fines) and loss of customer trust, so compliance is both a legal and reputational necessity",
    ],
    topic: "Legal, Moral, Cultural and Ethical Issues",
  },
]
