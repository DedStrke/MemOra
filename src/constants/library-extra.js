/*
  Additional revision packs, merged into REVISION by library.js.
*/
import { ECON_GROUPS, ECON_FLASHCARDS, ECON_MCQ, ECON_EXAM } from './econ-full'

export const EXTRA_REVISION = [
  {
    id: 'economics',
    name: 'Economics',
    groups: ECON_GROUPS,
    topics: ECON_GROUPS.flatMap((g) => g.subgroups.flatMap((sg) => sg.topics)),
    flashcards: ECON_FLASHCARDS,
    mcq: ECON_MCQ,
    examQuestions: ECON_EXAM,
  },
  {
    "id": "computer-science",
    "name": "Computer Science",
    "topics": [
      "Structure and Function of the Processor",
      "Types of Processor",
      "Input, Output and Storage",
      "Systems Software",
      "Applications Generation (Translators)",
      "Software Development Methodologies",
      "Compression, Encryption and Hashing",
      "Databases",
      "Networks",
      "Web Technologies",
      "Data Types and Number Representation",
      "Data Structures",
      "Boolean Algebra",
      "Algorithms: Searching, Sorting & Graph Traversal",
      "Elements of Computational Thinking",
      "Programming Techniques",
      "Computational Methods",
      "Programming Paradigms",
      "Analysis and Design (Systems Life Cycle)",
      "Legal, Moral, Cultural and Ethical Issues"
    ],
    "flashcards": [
      {
        "front": "What does PC stand for and what does it hold?",
        "back": "Program Counter — the address of the next instruction to be fetched",
        "topic": "Structure and Function of the Processor"
      },
      {
        "front": "What does MAR hold?",
        "back": "The address of the memory location currently being accessed",
        "topic": "Structure and Function of the Processor"
      },
      {
        "front": "What does MDR hold?",
        "back": "The data being transferred to/from memory",
        "topic": "Structure and Function of the Processor"
      },
      {
        "front": "What does CIR hold?",
        "back": "The instruction currently being decoded/executed",
        "topic": "Structure and Function of the Processor"
      },
      {
        "front": "What does the accumulator (ACC) hold?",
        "back": "The results of ALU operations",
        "topic": "Structure and Function of the Processor"
      },
      {
        "front": "Name the three types of bus",
        "back": "Address bus, data bus, control bus",
        "topic": "Structure and Function of the Processor"
      },
      {
        "front": "Which bus is bidirectional?",
        "back": "The data bus",
        "topic": "Structure and Function of the Processor"
      },
      {
        "front": "What are the three steps of the FDE cycle?",
        "back": "Fetch, Decode, Execute",
        "topic": "Structure and Function of the Processor"
      },
      {
        "front": "What is the role of the Control Unit?",
        "back": "Coordinates the FDE cycle, decodes instructions, sends control signals",
        "topic": "Structure and Function of the Processor"
      },
      {
        "front": "What is the role of the ALU?",
        "back": "Performs arithmetic and logical operations",
        "topic": "Structure and Function of the Processor"
      },
      {
        "front": "Why does cache improve performance?",
        "back": "It stores frequently used data close to the CPU, reducing slow trips to RAM",
        "topic": "Structure and Function of the Processor"
      },
      {
        "front": "What does the status/flag register store?",
        "back": "Flags indicating the outcome of the last operation (e.g. zero, carry, overflow)",
        "topic": "Structure and Function of the Processor"
      },
      {
        "front": "What generates the timing pulses that synchronise CPU operations?",
        "back": "The system clock",
        "topic": "Structure and Function of the Processor"
      },
      {
        "front": "What is clock speed measured in?",
        "back": "Hertz (typically GHz for modern CPUs)",
        "topic": "Structure and Function of the Processor"
      },
      {
        "front": "During the fetch stage, what happens to the PC after the instruction is copied to the CIR?",
        "back": "It is incremented, so it points to the next instruction",
        "topic": "Structure and Function of the Processor"
      },
      {
        "front": "What is the purpose of the control bus?",
        "back": "Carries control signals, e.g. read/write signals and timing information",
        "topic": "Structure and Function of the Processor"
      },
      {
        "front": "Name the two main components inside the CPU that carry out the decode/execute work (besides registers)",
        "back": "The Control Unit and the Arithmetic Logic Unit (ALU)",
        "topic": "Structure and Function of the Processor"
      },
      {
        "front": "CISC stands for?",
        "back": "Complex Instruction Set Computer",
        "topic": "Types of Processor"
      },
      {
        "front": "RISC stands for?",
        "back": "Reduced Instruction Set Computer",
        "topic": "Types of Processor"
      },
      {
        "front": "Key feature of RISC instructions?",
        "back": "Simple, fixed-length, typically one clock cycle each",
        "topic": "Types of Processor"
      },
      {
        "front": "Key feature of CISC instructions?",
        "back": "Complex, variable-length, can take multiple clock cycles",
        "topic": "Types of Processor"
      },
      {
        "front": "What is pipelining?",
        "back": "Overlapping the fetch/decode/execute of multiple instructions to increase throughput",
        "topic": "Types of Processor"
      },
      {
        "front": "Difference between multicore and multiprocessor?",
        "back": "Multicore = multiple cores on one chip; multiprocessor = multiple separate CPU chips",
        "topic": "Types of Processor"
      },
      {
        "front": "What does SIMD stand for?",
        "back": "Single Instruction, Multiple Data",
        "topic": "Types of Processor"
      },
      {
        "front": "What does MIMD stand for?",
        "back": "Multiple Instruction, Multiple Data",
        "topic": "Types of Processor"
      },
      {
        "front": "What is a GPU optimised for?",
        "back": "Performing many simple parallel operations simultaneously (SIMD-style workloads)",
        "topic": "Types of Processor"
      },
      {
        "front": "What is a pipeline hazard?",
        "back": "A situation that prevents the next instruction from executing in its designated clock cycle, stalling the pipeline",
        "topic": "Types of Processor"
      },
      {
        "front": "What is an embedded processor?",
        "back": "A specialised processor designed for one specific purpose within a larger device",
        "topic": "Types of Processor"
      },
      {
        "front": "Which processor type (CISC/RISC) typically has more registers?",
        "back": "RISC",
        "topic": "Types of Processor"
      },
      {
        "front": "Give an example of a control hazard in pipelining",
        "back": "A branch instruction, where the CPU doesn't yet know which instruction to fetch next until the branch is resolved",
        "topic": "Types of Processor"
      },
      {
        "front": "What real-world example uses SISD classification?",
        "back": "A traditional single-core CPU processing one instruction on one piece of data at a time",
        "topic": "Types of Processor"
      },
      {
        "front": "RAM stands for?",
        "back": "Random Access Memory (volatile)",
        "topic": "Input, Output and Storage"
      },
      {
        "front": "ROM stands for?",
        "back": "Read Only Memory (non-volatile)",
        "topic": "Input, Output and Storage"
      },
      {
        "front": "Is RAM volatile or non-volatile?",
        "back": "Volatile — contents lost when power is removed",
        "topic": "Input, Output and Storage"
      },
      {
        "front": "Give an example of magnetic storage",
        "back": "Hard disk drive (HDD)",
        "topic": "Input, Output and Storage"
      },
      {
        "front": "Give an example of solid state storage",
        "back": "SSD / USB flash drive",
        "topic": "Input, Output and Storage"
      },
      {
        "front": "One advantage of SSD over HDD?",
        "back": "Faster access times and more durable (no moving parts)",
        "topic": "Input, Output and Storage"
      },
      {
        "front": "What is virtual memory?",
        "back": "Secondary storage used as an extension of RAM when RAM is full",
        "topic": "Input, Output and Storage"
      },
      {
        "front": "What is \"thrashing\"?",
        "back": "Excessive swapping between RAM and virtual memory that severely degrades performance",
        "topic": "Input, Output and Storage"
      },
      {
        "front": "What is a buffer used for?",
        "back": "Temporary storage to compensate for speed differences between two devices",
        "topic": "Input, Output and Storage"
      },
      {
        "front": "Why is ROM used for the BIOS/bootstrap loader?",
        "back": "It is non-volatile, so it retains the startup instructions even with no power",
        "topic": "Input, Output and Storage"
      },
      {
        "front": "Give an example of an input device",
        "back": "Keyboard, mouse, scanner, or a sensor",
        "topic": "Input, Output and Storage"
      },
      {
        "front": "Give an example of an output device",
        "back": "Monitor, printer, or speakers",
        "topic": "Input, Output and Storage"
      },
      {
        "front": "What does a sensor do?",
        "back": "Converts a real-world physical quantity (e.g. temperature, light) into a digital signal for a computer to process",
        "topic": "Input, Output and Storage"
      },
      {
        "front": "Why might optical storage suit mass-produced software/media distribution?",
        "back": "It is cheap to mass-produce and read-only is sufficient for distributing finished content",
        "topic": "Input, Output and Storage"
      },
      {
        "front": "Name three functions of an operating system",
        "back": "Any three of: memory management, process scheduling, peripheral/device management, interrupt handling, security, user interface",
        "topic": "Systems Software"
      },
      {
        "front": "What is an interrupt?",
        "back": "A signal to the CPU indicating an event needs immediate attention, pausing current execution",
        "topic": "Systems Software"
      },
      {
        "front": "What is a device driver?",
        "back": "Software that lets the OS communicate with a specific piece of hardware",
        "topic": "Systems Software"
      },
      {
        "front": "What is paging?",
        "back": "Dividing memory into fixed-size blocks (pages) for memory management",
        "topic": "Systems Software"
      },
      {
        "front": "What is segmentation?",
        "back": "Dividing memory into variable-sized logical units (segments)",
        "topic": "Systems Software"
      },
      {
        "front": "Describe round robin scheduling",
        "back": "Each process is given a fixed, equal time slice in turn, cycled through fairly",
        "topic": "Systems Software"
      },
      {
        "front": "What is a virtual machine?",
        "back": "Software emulation of a physical computer, running its own OS",
        "topic": "Systems Software"
      },
      {
        "front": "Difference between Type 1 and Type 2 hypervisors?",
        "back": "Type 1 runs directly on hardware; Type 2 runs on top of a host OS",
        "topic": "Systems Software"
      },
      {
        "front": "Why does the CPU use interrupts rather than polling?",
        "back": "More efficient — avoids wasting CPU cycles repeatedly checking devices that usually have nothing to report",
        "topic": "Systems Software"
      },
      {
        "front": "What is FCFS scheduling?",
        "back": "First Come First Served — processes run strictly in the order they arrive",
        "topic": "Systems Software"
      },
      {
        "front": "Why do interrupts have priorities?",
        "back": "So the most critical/urgent interrupt (e.g. a hardware failure) is serviced before less urgent ones (e.g. routine input)",
        "topic": "Systems Software"
      },
      {
        "front": "What is starvation in scheduling?",
        "back": "When a low-priority process waits indefinitely because higher-priority processes are always chosen first",
        "topic": "Systems Software"
      },
      {
        "front": "What does a compiler do?",
        "back": "Translates the entire source code into machine code before execution",
        "topic": "Applications Generation (Translators)"
      },
      {
        "front": "What does an interpreter do?",
        "back": "Translates and executes source code line by line at runtime",
        "topic": "Applications Generation (Translators)"
      },
      {
        "front": "What does an assembler do?",
        "back": "Translates assembly language into machine code",
        "topic": "Applications Generation (Translators)"
      },
      {
        "front": "Advantage of a compiler over an interpreter?",
        "back": "Compiled programs run faster since there is no translation overhead at runtime",
        "topic": "Applications Generation (Translators)"
      },
      {
        "front": "Advantage of an interpreter over a compiler?",
        "back": "Easier to debug — errors are reported immediately, line by line",
        "topic": "Applications Generation (Translators)"
      },
      {
        "front": "What is a linker?",
        "back": "Combines object files/library code into a single executable",
        "topic": "Applications Generation (Translators)"
      },
      {
        "front": "What is a loader?",
        "back": "Loads a program into memory ready for execution",
        "topic": "Applications Generation (Translators)"
      },
      {
        "front": "What are the stages of compilation, in order?",
        "back": "Lexical analysis, syntax analysis, semantic analysis, code generation, (optimisation)",
        "topic": "Applications Generation (Translators)"
      },
      {
        "front": "What does lexical analysis do?",
        "back": "Breaks source code into tokens",
        "topic": "Applications Generation (Translators)"
      },
      {
        "front": "What does syntax analysis check?",
        "back": "That tokens follow the language's grammar rules, building a parse tree",
        "topic": "Applications Generation (Translators)"
      },
      {
        "front": "What does semantic analysis check?",
        "back": "Logical consistency, e.g. type checking and correct variable usage",
        "topic": "Applications Generation (Translators)"
      },
      {
        "front": "What is a forward reference in assembly?",
        "back": "A label used before it has been defined in the code",
        "topic": "Applications Generation (Translators)"
      },
      {
        "front": "What does the first pass of a two-pass assembler build?",
        "back": "A symbol table of labels and their addresses",
        "topic": "Applications Generation (Translators)"
      },
      {
        "front": "Give an example of a semantic error",
        "back": "Adding a string to an integer without conversion (type mismatch) — grammatically valid but logically inconsistent",
        "topic": "Applications Generation (Translators)"
      },
      {
        "front": "Describe the waterfall model in one sentence",
        "back": "A linear sequential process where each development stage must be fully completed before the next begins",
        "topic": "Software Development Methodologies"
      },
      {
        "front": "Key feature of agile development?",
        "back": "Iterative, incremental development with frequent collaboration and flexibility to change requirements",
        "topic": "Software Development Methodologies"
      },
      {
        "front": "What is a \"sprint\" in agile/Scrum?",
        "back": "A fixed time period (e.g. 2-4 weeks) in which a set amount of work is completed",
        "topic": "Software Development Methodologies"
      },
      {
        "front": "What is pair programming?",
        "back": "Two programmers work together at one workstation — one writing code, one reviewing it",
        "topic": "Software Development Methodologies"
      },
      {
        "front": "One advantage of waterfall?",
        "back": "Clear structure, easy to manage and document",
        "topic": "Software Development Methodologies"
      },
      {
        "front": "One disadvantage of waterfall?",
        "back": "Inflexible to changing requirements; testing happens late",
        "topic": "Software Development Methodologies"
      },
      {
        "front": "One advantage of agile?",
        "back": "Flexible to changing requirements, frequent delivery of working software",
        "topic": "Software Development Methodologies"
      },
      {
        "front": "What does RAD prioritise?",
        "back": "Quick prototyping and iterative delivery over extensive upfront planning",
        "topic": "Software Development Methodologies"
      },
      {
        "front": "What does the spiral model add to iterative development?",
        "back": "A strong emphasis on risk analysis at each cycle",
        "topic": "Software Development Methodologies"
      },
      {
        "front": "What is a \"throwaway\" prototype?",
        "back": "An early demonstration version built to clarify requirements, then discarded once its purpose is served",
        "topic": "Software Development Methodologies"
      },
      {
        "front": "What is an \"evolutionary\" prototype?",
        "back": "An early working version that is progressively refined into the final system, rather than discarded",
        "topic": "Software Development Methodologies"
      },
      {
        "front": "Why might a regulated industry (e.g. banking) prefer waterfall?",
        "back": "Its extensive documentation at each stage supports audit/compliance requirements",
        "topic": "Software Development Methodologies"
      },
      {
        "front": "Difference between lossy and lossless compression?",
        "back": "Lossy permanently removes some data (smaller file, quality loss); lossless keeps all data, fully reversible",
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "front": "What is Run Length Encoding?",
        "back": "Replaces repeated consecutive data with a count and value (e.g. AAAA → 4A)",
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "front": "What is Huffman coding?",
        "back": "Assigns shorter binary codes to more frequent symbols, based on their frequency",
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "front": "What is symmetric encryption?",
        "back": "The same key is used to encrypt and decrypt",
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "front": "What is asymmetric encryption?",
        "back": "A public key encrypts, a different private key decrypts",
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "front": "What is a hash function?",
        "back": "A function that converts an input into a fixed-size output (hash/digest)",
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "front": "Is hashing reversible?",
        "back": "No — it is a one-way process",
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "front": "What is a hash collision?",
        "back": "When two different inputs produce the same hash output",
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "front": "Why is hashing (not encryption) used for storing passwords?",
        "back": "So the actual password is never stored anywhere and cannot be reversed/recovered even if the hash is stolen",
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "front": "Main advantage of asymmetric over symmetric encryption for key exchange?",
        "back": "The private key never needs to be shared, removing the risk of it being intercepted",
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "front": "What is a \"salt\" in password hashing?",
        "back": "Random data added to a password before hashing, so identical passwords produce different hashes",
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "front": "Why does salting defeat rainbow table attacks?",
        "back": "A precomputed lookup table of common password hashes no longer matches, since each password now hashes uniquely with its own salt",
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "front": "What kind of data is Run Length Encoding most effective on?",
        "back": "Data with long runs of repeated consecutive values (e.g. simple images with large blocks of one colour)",
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "front": "What is a primary key?",
        "back": "A unique identifier for each record in a table",
        "topic": "Databases"
      },
      {
        "front": "What is a foreign key?",
        "back": "A field in one table that references the primary key of another table",
        "topic": "Databases"
      },
      {
        "front": "What does normalisation aim to reduce?",
        "back": "Data redundancy and the risk of update/insertion/deletion anomalies",
        "topic": "Databases"
      },
      {
        "front": "What does 1NF require?",
        "back": "No repeating groups; each cell holds a single atomic value",
        "topic": "Databases"
      },
      {
        "front": "What does 2NF add on top of 1NF?",
        "back": "No partial dependency — non-key attributes depend on the whole primary key",
        "topic": "Databases"
      },
      {
        "front": "What does 3NF add on top of 2NF?",
        "back": "No transitive dependency — non-key attributes depend only on the primary key",
        "topic": "Databases"
      },
      {
        "front": "What does ACID stand for?",
        "back": "Atomicity, Consistency, Isolation, Durability",
        "topic": "Databases"
      },
      {
        "front": "What is record locking?",
        "back": "Preventing simultaneous conflicting edits to the same record by multiple users",
        "topic": "Databases"
      },
      {
        "front": "SQL keyword to retrieve data?",
        "back": "SELECT",
        "topic": "Databases"
      },
      {
        "front": "SQL keyword to combine data from two tables?",
        "back": "JOIN",
        "topic": "Databases"
      },
      {
        "front": "What is a composite key?",
        "back": "A primary key formed of two or more combined fields",
        "topic": "Databases"
      },
      {
        "front": "What is an ERD?",
        "back": "Entity Relationship Diagram — visually models entities/tables and the relationships between them",
        "topic": "Databases"
      },
      {
        "front": "Name the three types of relationship shown on an ERD",
        "back": "One-to-one, one-to-many, many-to-many",
        "topic": "Databases"
      },
      {
        "front": "What does the \"Isolation\" property of ACID mean?",
        "back": "Concurrent transactions do not interfere with each other",
        "topic": "Databases"
      },
      {
        "front": "What does the \"Durability\" property of ACID mean?",
        "back": "Once a transaction is committed, its changes persist even after a system failure",
        "topic": "Databases"
      },
      {
        "front": "LAN stands for?",
        "back": "Local Area Network",
        "topic": "Networks"
      },
      {
        "front": "WAN stands for?",
        "back": "Wide Area Network",
        "topic": "Networks"
      },
      {
        "front": "Describe a star topology",
        "back": "All devices connect to a central switch/hub",
        "topic": "Networks"
      },
      {
        "front": "One advantage of star topology?",
        "back": "A single cable failure only affects that one device",
        "topic": "Networks"
      },
      {
        "front": "One disadvantage of star topology?",
        "back": "If the central switch/hub fails, the whole network goes down",
        "topic": "Networks"
      },
      {
        "front": "In client-server, what does the server do?",
        "back": "Provides centralised resources/services to client devices on request",
        "topic": "Networks"
      },
      {
        "front": "Key feature of peer-to-peer networks?",
        "back": "No central server — each device can act as both client and server",
        "topic": "Networks"
      },
      {
        "front": "What does TCP/IP stand for?",
        "back": "Transmission Control Protocol / Internet Protocol",
        "topic": "Networks"
      },
      {
        "front": "Function of a router?",
        "back": "Connects different networks and forwards packets based on IP address",
        "topic": "Networks"
      },
      {
        "front": "Function of a switch?",
        "back": "Forwards data to the correct device on the same network based on MAC address",
        "topic": "Networks"
      },
      {
        "front": "Difference between MAC and IP address?",
        "back": "MAC is a fixed physical hardware address; IP is a logical, potentially changeable network address",
        "topic": "Networks"
      },
      {
        "front": "What is packet switching?",
        "back": "Data is broken into packets, sent independently (possibly via different routes), and reassembled at the destination",
        "topic": "Networks"
      },
      {
        "front": "Which TCP/IP layer do HTTP and FTP operate at?",
        "back": "Application layer",
        "topic": "Networks"
      },
      {
        "front": "Which TCP/IP layer handles addressing and routing between networks?",
        "back": "Internet layer (IP)",
        "topic": "Networks"
      },
      {
        "front": "Which TCP/IP layer ensures reliable, ordered delivery of data?",
        "back": "Transport layer (TCP)",
        "topic": "Networks"
      },
      {
        "front": "What does HTTPS add compared to HTTP?",
        "back": "Encryption, making the connection secure",
        "topic": "Networks"
      },
      {
        "front": "What does HTML stand for?",
        "back": "HyperText Markup Language",
        "topic": "Web Technologies"
      },
      {
        "front": "What is HTML used for?",
        "back": "Structuring content on a web page",
        "topic": "Web Technologies"
      },
      {
        "front": "What is CSS used for?",
        "back": "Styling the appearance of a web page",
        "topic": "Web Technologies"
      },
      {
        "front": "What is JavaScript typically used for?",
        "back": "Adding interactivity/dynamic behaviour (client-side scripting)",
        "topic": "Web Technologies"
      },
      {
        "front": "Where does client-side processing run?",
        "back": "In the user's browser",
        "topic": "Web Technologies"
      },
      {
        "front": "Where does server-side processing run?",
        "back": "On the web server, before the page is sent to the user",
        "topic": "Web Technologies"
      },
      {
        "front": "Give an example of when server-side processing is needed",
        "back": "Checking login credentials against a database",
        "topic": "Web Technologies"
      },
      {
        "front": "What does a search engine crawler/spider do?",
        "back": "Automatically browses the web following links to discover and index pages",
        "topic": "Web Technologies"
      },
      {
        "front": "What is a cookie?",
        "back": "A small piece of data stored by a website on the user's browser to remember information between visits",
        "topic": "Web Technologies"
      },
      {
        "front": "Difference between a session cookie and a persistent cookie?",
        "back": "Session cookies are deleted when the browser closes; persistent cookies remain stored for a set period even after closing",
        "topic": "Web Technologies"
      },
      {
        "front": "What does PageRank consider when ranking a page?",
        "back": "The number and quality of other pages linking to it",
        "topic": "Web Technologies"
      },
      {
        "front": "What is two's complement used for?",
        "back": "Representing negative numbers in binary",
        "topic": "Data Types and Number Representation"
      },
      {
        "front": "How do you find the two's complement of a binary number?",
        "back": "Invert all bits, then add 1",
        "topic": "Data Types and Number Representation"
      },
      {
        "front": "What does a floating point number consist of?",
        "back": "A mantissa and an exponent",
        "topic": "Data Types and Number Representation"
      },
      {
        "front": "What is normalisation in floating point representation?",
        "back": "Adjusting the mantissa so exactly one non-zero digit is before the binary point, maximising precision",
        "topic": "Data Types and Number Representation"
      },
      {
        "front": "How many bits does standard ASCII use?",
        "back": "7 bits (128 characters)",
        "topic": "Data Types and Number Representation"
      },
      {
        "front": "Why was Unicode developed?",
        "back": "To represent characters from many more languages/symbols than ASCII allows",
        "topic": "Data Types and Number Representation"
      },
      {
        "front": "What causes binary overflow?",
        "back": "A calculation produces a result too large to fit in the available number of bits",
        "topic": "Data Types and Number Representation"
      },
      {
        "front": "How many binary bits does one hexadecimal digit represent?",
        "back": "4 bits",
        "topic": "Data Types and Number Representation"
      },
      {
        "front": "Why can floating point representation cause rounding errors?",
        "back": "Only a finite number of bits are available for the mantissa, so many real numbers can't be represented exactly",
        "topic": "Data Types and Number Representation"
      },
      {
        "front": "How many bits are in a byte?",
        "back": "8 bits",
        "topic": "Data Types and Number Representation"
      },
      {
        "front": "How many bits are in a nibble?",
        "back": "4 bits (one hex digit)",
        "topic": "Data Types and Number Representation"
      },
      {
        "front": "What happens to precision if you increase the number of bits in the mantissa?",
        "back": "Precision increases (more significant digits can be stored)",
        "topic": "Data Types and Number Representation"
      },
      {
        "front": "What happens to range if you increase the number of bits in the exponent?",
        "back": "Range increases (larger and smaller magnitude numbers can be represented)",
        "topic": "Data Types and Number Representation"
      },
      {
        "front": "What does LIFO stand for, and which structure uses it?",
        "back": "Last In First Out — a stack",
        "topic": "Data Structures"
      },
      {
        "front": "What does FIFO stand for, and which structure uses it?",
        "back": "First In First Out — a queue",
        "topic": "Data Structures"
      },
      {
        "front": "What operations does a stack support?",
        "back": "Push (add to top) and pop (remove from top)",
        "topic": "Data Structures"
      },
      {
        "front": "What operations does a queue support?",
        "back": "Enqueue (add to back) and dequeue (remove from front)",
        "topic": "Data Structures"
      },
      {
        "front": "What is a record?",
        "back": "A structure grouping related fields of possibly different data types together",
        "topic": "Data Structures"
      },
      {
        "front": "Difference between an array and a record?",
        "back": "Array holds multiple items of the same type; record holds related fields of potentially different types",
        "topic": "Data Structures"
      },
      {
        "front": "What is a binary search tree?",
        "back": "A binary tree where left child < parent < right child, enabling efficient searching",
        "topic": "Data Structures"
      },
      {
        "front": "What is a graph (data structure)?",
        "back": "Nodes (vertices) connected by edges, which may be directed/undirected and weighted/unweighted",
        "topic": "Data Structures"
      },
      {
        "front": "What is a hash table?",
        "back": "A structure using a hash function to map keys to array indices for fast lookup",
        "topic": "Data Structures"
      },
      {
        "front": "How can a hash collision be resolved?",
        "back": "Chaining (linked list at that index) or open addressing (find next free slot)",
        "topic": "Data Structures"
      },
      {
        "front": "What is a circular queue?",
        "back": "A queue that wraps around to reuse freed space at the front once the end is reached",
        "topic": "Data Structures"
      },
      {
        "front": "What does each node in a linked list contain?",
        "back": "Data plus a pointer/reference to the next node",
        "topic": "Data Structures"
      },
      {
        "front": "One advantage of a linked list over an array?",
        "back": "Can grow/shrink dynamically without needing contiguous memory",
        "topic": "Data Structures"
      },
      {
        "front": "One disadvantage of a linked list compared to an array?",
        "back": "No direct/instant access by index — must traverse from the start",
        "topic": "Data Structures"
      },
      {
        "front": "What order does in-order traversal visit a binary tree?",
        "back": "Left subtree, then root, then right subtree",
        "topic": "Data Structures"
      },
      {
        "front": "What order does pre-order traversal visit a binary tree?",
        "back": "Root, then left subtree, then right subtree",
        "topic": "Data Structures"
      },
      {
        "front": "When is the output of an AND gate 1?",
        "back": "Only when both inputs are 1",
        "topic": "Boolean Algebra"
      },
      {
        "front": "When is the output of an OR gate 1?",
        "back": "When at least one input is 1",
        "topic": "Boolean Algebra"
      },
      {
        "front": "What does a NOT gate do?",
        "back": "Inverts the input (1→0, 0→1)",
        "topic": "Boolean Algebra"
      },
      {
        "front": "When is the output of an XOR gate 1?",
        "back": "When the inputs are different",
        "topic": "Boolean Algebra"
      },
      {
        "front": "When is the output of a NAND gate 0?",
        "back": "Only when both inputs are 1 (inverted AND)",
        "topic": "Boolean Algebra"
      },
      {
        "front": "De Morgan's first law?",
        "back": "NOT(A AND B) = NOT A OR NOT B",
        "topic": "Boolean Algebra"
      },
      {
        "front": "De Morgan's second law?",
        "back": "NOT(A OR B) = NOT A AND NOT B",
        "topic": "Boolean Algebra"
      },
      {
        "front": "What does a half adder produce?",
        "back": "A sum output and a carry output, from adding two bits",
        "topic": "Boolean Algebra"
      },
      {
        "front": "What extra input does a full adder have compared to a half adder?",
        "back": "A carry-in input, allowing three bits to be added",
        "topic": "Boolean Algebra"
      },
      {
        "front": "What is a Karnaugh map used for?",
        "back": "Visually simplifying Boolean expressions by grouping adjacent 1s",
        "topic": "Boolean Algebra"
      },
      {
        "front": "The absorption law states A + A.B = ?",
        "back": "A",
        "topic": "Boolean Algebra"
      },
      {
        "front": "What two gates build a half adder?",
        "back": "An XOR gate (for the sum) and an AND gate (for the carry)",
        "topic": "Boolean Algebra"
      },
      {
        "front": "What is \"Sum of Products\" form?",
        "back": "A Boolean expression written as an OR of AND terms, one for each row of the truth table where the output is 1",
        "topic": "Boolean Algebra"
      },
      {
        "front": "Why simplify a Boolean expression before building a circuit?",
        "back": "Reduces the number of logic gates needed, making the circuit cheaper, smaller and faster",
        "topic": "Boolean Algebra"
      },
      {
        "front": "Time complexity of linear search (worst case)?",
        "back": "O(n)",
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "front": "Time complexity of binary search (worst case)?",
        "back": "O(log n)",
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "front": "Precondition for binary search to work?",
        "back": "The list/array must be sorted",
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "front": "Time complexity of bubble sort (worst case)?",
        "back": "O(n²)",
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "front": "Time complexity of merge sort (worst case)?",
        "back": "O(n log n)",
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "front": "What technique does merge sort use?",
        "back": "Divide and conquer — splits the list, sorts, then merges",
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "front": "What does BFS stand for, and what structure does it use?",
        "back": "Breadth-First Search — uses a queue",
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "front": "What does DFS stand for, and what structure does it use?",
        "back": "Depth-First Search — uses a stack (or recursion)",
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "front": "What problem does Dijkstra's algorithm solve?",
        "back": "Finding the shortest path between nodes in a weighted graph",
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "front": "What is Big O notation used for?",
        "back": "Describing how an algorithm's time/space requirements grow as input size increases",
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "front": "What does A* search add on top of Dijkstra's algorithm?",
        "back": "A heuristic estimate of distance to the goal, to focus the search more efficiently",
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "front": "Worst-case time complexity of quicksort, and why does it occur?",
        "back": "O(n²) — occurs when the pivot chosen is consistently the smallest/largest element, giving very unbalanced partitions",
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "front": "When is insertion sort particularly efficient?",
        "back": "On data that is already nearly sorted",
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "front": "How many comparisons does binary search need for a list of 1000 items (approx, worst case)?",
        "back": "About 10 (log₂1000 ≈ 10)",
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "front": "What is the time complexity of insertion sort in the worst case?",
        "back": "O(n²)",
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "front": "What is abstraction (computational thinking)?",
        "back": "Removing unnecessary detail to focus on the essential features of a problem",
        "topic": "Elements of Computational Thinking"
      },
      {
        "front": "What is decomposition?",
        "back": "Breaking a complex problem into smaller, more manageable sub-problems",
        "topic": "Elements of Computational Thinking"
      },
      {
        "front": "What is algorithmic thinking?",
        "back": "Devising a clear step-by-step sequence of instructions to solve a problem",
        "topic": "Elements of Computational Thinking"
      },
      {
        "front": "What does \"thinking ahead\" involve?",
        "back": "Anticipating the inputs/outputs and pre-conditions needed before writing an algorithm",
        "topic": "Elements of Computational Thinking"
      },
      {
        "front": "What does \"thinking concurrently\" involve?",
        "back": "Considering how tasks could run simultaneously to improve efficiency",
        "topic": "Elements of Computational Thinking"
      },
      {
        "front": "What does \"thinking procedurally\" involve?",
        "back": "Identifying the required steps and their correct order to solve a problem",
        "topic": "Elements of Computational Thinking"
      },
      {
        "front": "What does \"thinking logically\" involve?",
        "back": "Identifying similarities between problems and reasoning carefully about conditions/decisions",
        "topic": "Elements of Computational Thinking"
      },
      {
        "front": "Give a real-world example of abstraction",
        "back": "A tube map, which simplifies real geography into stations and lines; or a car steering wheel abstracting the mechanics of turning wheels",
        "topic": "Elements of Computational Thinking"
      },
      {
        "front": "Are computational thinking skills only useful for programming?",
        "back": "No — they are transferable to problem-solving in many fields, e.g. science, engineering, business",
        "topic": "Elements of Computational Thinking"
      },
      {
        "front": "Give an example of decomposition applied to a timetabling system",
        "back": "Splitting the problem into assigning teachers, assigning rooms, avoiding clashes, and respecting subject requirements as separate sub-problems",
        "topic": "Elements of Computational Thinking"
      },
      {
        "front": "Difference between a variable and a constant?",
        "back": "A variable's value can change during execution; a constant's value is fixed",
        "topic": "Programming Techniques"
      },
      {
        "front": "Difference between a procedure and a function?",
        "back": "A function returns a value; a procedure does not (necessarily)",
        "topic": "Programming Techniques"
      },
      {
        "front": "What is recursion?",
        "back": "A subroutine/function that calls itself to solve a smaller instance of the same problem",
        "topic": "Programming Techniques"
      },
      {
        "front": "What must every recursive function have to avoid infinite recursion?",
        "back": "A base case (terminating condition)",
        "topic": "Programming Techniques"
      },
      {
        "front": "Difference between passing a parameter by value and by reference?",
        "back": "By value passes a copy (original unchanged); by reference passes the actual memory address (original can be changed)",
        "topic": "Programming Techniques"
      },
      {
        "front": "What is a local variable?",
        "back": "A variable only accessible within the subroutine/block it is declared in",
        "topic": "Programming Techniques"
      },
      {
        "front": "What is a global variable?",
        "back": "A variable accessible from anywhere in the program",
        "topic": "Programming Techniques"
      },
      {
        "front": "What is the purpose of exception handling?",
        "back": "To gracefully handle runtime errors without the program crashing",
        "topic": "Programming Techniques"
      },
      {
        "front": "Name two useful IDE features for development",
        "back": "Any two of: syntax highlighting, breakpoints/debugging, autocomplete, code formatting",
        "topic": "Programming Techniques"
      },
      {
        "front": "Difference between a WHILE loop and a DO-WHILE loop?",
        "back": "WHILE checks the condition before each iteration (may run 0 times); DO-WHILE checks after (always runs at least once)",
        "topic": "Programming Techniques"
      },
      {
        "front": "What does count-controlled iteration mean, and which loop type is it?",
        "back": "A loop that repeats a known, fixed number of times — a FOR loop",
        "topic": "Programming Techniques"
      },
      {
        "front": "Give an example of a runtime error that exception handling could catch",
        "back": "Division by zero, array index out of bounds, or opening a file that doesn't exist",
        "topic": "Programming Techniques"
      },
      {
        "front": "Why should a file always be closed after use?",
        "back": "To free system resources and ensure any written data is properly saved",
        "topic": "Programming Techniques"
      },
      {
        "front": "What does string concatenation mean?",
        "back": "Joining two or more strings together",
        "topic": "Programming Techniques"
      },
      {
        "front": "Where are pending recursive calls stored while waiting for a deeper call to return?",
        "back": "On the call stack",
        "topic": "Programming Techniques"
      },
      {
        "front": "What is the divide and conquer approach?",
        "back": "Breaking a problem into smaller sub-problems, solving each, then combining the results",
        "topic": "Computational Methods"
      },
      {
        "front": "Give an example of a divide and conquer algorithm",
        "back": "Merge sort, quicksort, or binary search",
        "topic": "Computational Methods"
      },
      {
        "front": "What is backtracking?",
        "back": "Trying a possible solution, and if it fails, undoing the last step and trying an alternative",
        "topic": "Computational Methods"
      },
      {
        "front": "What is a heuristic?",
        "back": "A rule-of-thumb / approximate method that finds a good, but not necessarily optimal, solution quickly",
        "topic": "Computational Methods"
      },
      {
        "front": "Why use a heuristic instead of an exact algorithm?",
        "back": "When the exact solution would take too long to compute; trades optimality for speed",
        "topic": "Computational Methods"
      },
      {
        "front": "What is data mining?",
        "back": "Analysing large datasets to discover patterns and relationships",
        "topic": "Computational Methods"
      },
      {
        "front": "What is performance modelling?",
        "back": "Simulating a system to predict its performance before building it",
        "topic": "Computational Methods"
      },
      {
        "front": "What is visualisation (as a computational method)?",
        "back": "Representing data or processes graphically to aid human understanding",
        "topic": "Computational Methods"
      },
      {
        "front": "Give a classic example problem solved using backtracking",
        "back": "The N-Queens problem, Sudoku, or maze solving",
        "topic": "Computational Methods"
      },
      {
        "front": "Give a real-world (non-CPU) example of pipelining",
        "back": "A car factory assembly line processing multiple cars simultaneously at different stages",
        "topic": "Computational Methods"
      },
      {
        "front": "What is a class in OOP?",
        "back": "A blueprint/template defining the attributes and methods for objects",
        "topic": "Programming Paradigms"
      },
      {
        "front": "What is an object in OOP?",
        "back": "An instance of a class",
        "topic": "Programming Paradigms"
      },
      {
        "front": "What is inheritance?",
        "back": "A class (subclass) can inherit attributes/methods from another class (superclass)",
        "topic": "Programming Paradigms"
      },
      {
        "front": "What is encapsulation?",
        "back": "Bundling data and methods together and restricting direct external access to some of an object's components",
        "topic": "Programming Paradigms"
      },
      {
        "front": "What is polymorphism?",
        "back": "Different classes responding differently to the same method call/interface",
        "topic": "Programming Paradigms"
      },
      {
        "front": "What is procedural programming?",
        "back": "Programming based on a sequence of instructions organised into procedures/functions",
        "topic": "Programming Paradigms"
      },
      {
        "front": "What is declarative programming?",
        "back": "Programming that states facts and rules, letting the system determine how to reach a goal, rather than specifying exact steps",
        "topic": "Programming Paradigms"
      },
      {
        "front": "Give an example of a declarative programming language",
        "back": "Prolog or SQL",
        "topic": "Programming Paradigms"
      },
      {
        "front": "What relationship does inheritance typically model?",
        "back": "An \"is-a\" relationship (e.g. a Dog \"is-a\" Animal)",
        "topic": "Programming Paradigms"
      },
      {
        "front": "What is method overriding?",
        "back": "A subclass providing its own specific implementation of a method already defined in its superclass",
        "topic": "Programming Paradigms"
      },
      {
        "front": "What is method overloading?",
        "back": "Multiple methods in the same class sharing a name but differing in their parameters",
        "topic": "Programming Paradigms"
      },
      {
        "front": "What access modifier restricts a data member to only be accessed within its own class?",
        "back": "Private",
        "topic": "Programming Paradigms"
      },
      {
        "front": "What access modifier allows a data member to be accessed from outside the class?",
        "back": "Public",
        "topic": "Programming Paradigms"
      },
      {
        "front": "What are the stages of the systems development life cycle?",
        "back": "Analysis, design, implementation, testing, evaluation, maintenance",
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "front": "What happens during the analysis stage?",
        "back": "Investigating the current system and gathering requirements for the new system",
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "front": "What is a structure chart used for?",
        "back": "Showing the hierarchical breakdown of a program into modules and their calling relationships",
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "front": "What is UML?",
        "back": "Unified Modeling Language — a standard notation for visualising system design",
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "front": "What does a UML class diagram show?",
        "back": "Classes, their attributes, methods, and relationships between classes",
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "front": "What does a UML use case diagram show?",
        "back": "The interactions between users (actors) and the system's functions",
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "front": "Why is testing important in the systems life cycle?",
        "back": "Ensures the system meets requirements and works correctly before release, catching bugs early",
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "front": "What happens during corrective maintenance?",
        "back": "Fixing bugs/errors found after release",
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "front": "What happens during adaptive maintenance?",
        "back": "Updating the system for a new environment, e.g. new hardware/OS",
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "front": "What happens during perfective maintenance?",
        "back": "Improving or adding new features to the system",
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "front": "What is boundary test data?",
        "back": "Data right at the edge of what is valid/invalid for a given input",
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "front": "What is erroneous test data?",
        "back": "Invalid data that the system should correctly reject",
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "front": "What is normal test data?",
        "back": "Valid, typical data that the system should correctly accept",
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "front": "What does the Computer Misuse Act (1990) cover?",
        "back": "Makes unauthorised access, unauthorised modification, and related offences against computer systems/data illegal",
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "front": "What does the Data Protection Act / UK GDPR cover?",
        "back": "Regulates how personal data must be collected, stored and processed, giving individuals rights over their data",
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "front": "What does the Copyright, Designs and Patents Act protect?",
        "back": "Original work (including software) from being copied or distributed without permission",
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "front": "Difference between open source and proprietary software?",
        "back": "Open source: source code is publicly available and can be modified/redistributed; proprietary: source code is closed and usage is restricted by licence",
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "front": "What is algorithmic bias?",
        "back": "When AI/algorithms reflect or amplify biases present in their training data, causing unfair outcomes",
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "front": "What is the \"digital divide\"?",
        "back": "The gap between those who have easy access to computers/internet and those who do not",
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "front": "Give one environmental issue related to computing",
        "back": "E-waste from discarded devices, or high energy consumption of data centres",
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "front": "Name one right an individual has under GDPR",
        "back": "The right to access their data, have it corrected, or request its erasure",
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "front": "Does the Computer Misuse Act require actual damage to have occurred for an offence to be committed?",
        "back": "No — unauthorised access alone is an offence regardless of damage caused",
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "front": "What is meant by \"localisation\" of software?",
        "back": "Adapting software for a specific culture/region, e.g. language, date formats, symbols",
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "front": "Give an example of a cultural issue in interface design",
        "back": "A colour that has a positive meaning in one culture but a negative/offensive meaning in another",
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "front": "Can copying a company database without authorisation break more than one law at once?",
        "back": "Yes — e.g. it could breach both the Computer Misuse Act and the Data Protection Act/GDPR simultaneously",
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      }
    ],
    "mcq": [
      {
        "question": "What does the Program Counter (PC) hold?",
        "options": [
          "The current instruction",
          "The address of the next instruction to fetch",
          "The result of the last calculation",
          "The address of the last memory access"
        ],
        "answer": 1,
        "explanation": "The PC always holds the address of the next instruction to be fetched, and is incremented during the fetch stage.",
        "topic": "Structure and Function of the Processor"
      },
      {
        "question": "Which register holds the address of the memory location currently being accessed?",
        "options": [
          "MDR",
          "CIR",
          "MAR",
          "ACC"
        ],
        "answer": 2,
        "explanation": "The Memory Address Register (MAR) holds the address of the memory location currently being read from or written to.",
        "topic": "Structure and Function of the Processor"
      },
      {
        "question": "What is the correct order of the fetch-decode-execute cycle?",
        "options": [
          "Decode, Fetch, Execute",
          "Fetch, Decode, Execute",
          "Execute, Fetch, Decode",
          "Fetch, Execute, Decode"
        ],
        "answer": 1,
        "explanation": "Instructions are always fetched first, then decoded to determine the operation, then executed.",
        "topic": "Structure and Function of the Processor"
      },
      {
        "question": "Which processor type typically uses simpler, fixed-length instructions?",
        "options": [
          "CISC",
          "RISC",
          "GPU",
          "ALU"
        ],
        "answer": 1,
        "explanation": "RISC (Reduced Instruction Set Computer) uses a small set of simple, fixed-length instructions, usually executed in one clock cycle.",
        "topic": "Types of Processor"
      },
      {
        "question": "What does SIMD stand for?",
        "options": [
          "Single Instruction Multiple Data",
          "Single Instruction Multiple Devices",
          "Sequential Instruction Multiple Data",
          "Single Input Multiple Data"
        ],
        "answer": 0,
        "explanation": "SIMD (Single Instruction, Multiple Data) applies one instruction to many data items simultaneously, as GPUs do.",
        "topic": "Types of Processor"
      },
      {
        "question": "What is the main benefit of pipelining?",
        "options": [
          "Reduces the number of registers needed",
          "Increases instruction throughput by overlapping stages",
          "Removes the need for a control unit",
          "Increases clock speed automatically"
        ],
        "answer": 1,
        "explanation": "Pipelining overlaps the fetch/decode/execute stages of consecutive instructions, increasing overall throughput.",
        "topic": "Types of Processor"
      },
      {
        "question": "Which type of memory is volatile?",
        "options": [
          "ROM",
          "RAM",
          "SSD",
          "HDD"
        ],
        "answer": 1,
        "explanation": "RAM loses its contents when power is removed, unlike ROM, SSD or HDD which are non-volatile.",
        "topic": "Input, Output and Storage"
      },
      {
        "question": "What is one key advantage of SSD over HDD?",
        "options": [
          "Cheaper per GB",
          "Faster access times, no moving parts",
          "Larger maximum capacity always",
          "Uses magnetic storage"
        ],
        "answer": 1,
        "explanation": "SSDs have no moving parts, giving faster access times and greater durability than HDDs.",
        "topic": "Input, Output and Storage"
      },
      {
        "question": "What is virtual memory used for?",
        "options": [
          "Permanently storing the OS",
          "Extending RAM using secondary storage when RAM is full",
          "Speeding up the CPU clock",
          "Replacing cache memory"
        ],
        "answer": 1,
        "explanation": "Virtual memory lets the OS use secondary storage as an extension of RAM when physical RAM is full.",
        "topic": "Input, Output and Storage"
      },
      {
        "question": "Which scheduling algorithm gives each process an equal time slice in turn?",
        "options": [
          "FCFS",
          "Round robin",
          "Priority scheduling",
          "Shortest job first"
        ],
        "answer": 1,
        "explanation": "Round robin cycles through processes, giving each a fixed, equal time slice in turn.",
        "topic": "Systems Software"
      },
      {
        "question": "What is the purpose of an interrupt?",
        "options": [
          "To permanently stop a process",
          "To signal the CPU that an event needs immediate attention",
          "To increase clock speed",
          "To allocate more RAM"
        ],
        "answer": 1,
        "explanation": "An interrupt signals the CPU to pause its current task and respond to an event, more efficient than constant polling.",
        "topic": "Systems Software"
      },
      {
        "question": "What does a device driver do?",
        "options": [
          "Increases the device's processing power",
          "Allows the OS to communicate with specific hardware",
          "Encrypts data sent to the device",
          "Schedules CPU processes"
        ],
        "answer": 1,
        "explanation": "A device driver translates OS commands into device-specific instructions.",
        "topic": "Systems Software"
      },
      {
        "question": "Which translator converts source code into machine code all at once before execution?",
        "options": [
          "Interpreter",
          "Compiler",
          "Assembler",
          "Linker"
        ],
        "answer": 1,
        "explanation": "A compiler translates the entire program into machine code before it runs, producing an executable.",
        "topic": "Applications Generation (Translators)"
      },
      {
        "question": "What is the main advantage of an interpreter over a compiler?",
        "options": [
          "Faster execution",
          "Errors are found immediately, line by line",
          "Produces a standalone executable",
          "Requires less memory always"
        ],
        "answer": 1,
        "explanation": "An interpreter executes line by line, so errors are reported immediately during development, easing debugging.",
        "topic": "Applications Generation (Translators)"
      },
      {
        "question": "What does a linker do?",
        "options": [
          "Converts assembly to machine code",
          "Combines object code and library code into one executable",
          "Breaks source code into tokens",
          "Checks syntax rules"
        ],
        "answer": 1,
        "explanation": "A linker combines compiled object code with any required library code into a single executable file.",
        "topic": "Applications Generation (Translators)"
      },
      {
        "question": "Which methodology follows strict sequential stages with no going back?",
        "options": [
          "Agile",
          "Waterfall",
          "Extreme Programming",
          "RAD"
        ],
        "answer": 1,
        "explanation": "Waterfall is a linear model where each stage must be completed before the next begins.",
        "topic": "Software Development Methodologies"
      },
      {
        "question": "Pair programming is a defining feature of which methodology?",
        "options": [
          "Waterfall",
          "Extreme Programming",
          "Spiral model",
          "RAD"
        ],
        "answer": 1,
        "explanation": "Extreme Programming (XP) emphasises technical practices like pair programming and test-driven development.",
        "topic": "Software Development Methodologies"
      },
      {
        "question": "What is a key disadvantage of the waterfall model?",
        "options": [
          "Too flexible",
          "Difficult and costly to revisit earlier stages once progressed",
          "No documentation produced",
          "No testing stage"
        ],
        "answer": 1,
        "explanation": "Waterfall's rigid sequence makes it expensive to accommodate changing requirements once development has moved on.",
        "topic": "Software Development Methodologies"
      },
      {
        "question": "Which type of compression permanently removes some data?",
        "options": [
          "Lossless",
          "Lossy",
          "Run length encoding",
          "Huffman coding"
        ],
        "answer": 1,
        "explanation": "Lossy compression permanently discards some data to shrink file size, unlike lossless compression.",
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "question": "What is the key difference between symmetric and asymmetric encryption?",
        "options": [
          "Symmetric uses two keys, asymmetric uses one",
          "Symmetric uses the same key to encrypt and decrypt; asymmetric uses a key pair",
          "Asymmetric is always faster",
          "They are the same thing"
        ],
        "answer": 1,
        "explanation": "Symmetric encryption uses one shared key; asymmetric uses a public key to encrypt and a private key to decrypt.",
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "question": "Why is hashing used to store passwords rather than encryption?",
        "options": [
          "It's reversible if needed",
          "It is one-way, so the original password can't be recovered from the stored hash",
          "It compresses the password",
          "It requires a public key"
        ],
        "answer": 1,
        "explanation": "Hashing is a one-way process, so even if the stored hash is leaked, the original password cannot be directly recovered.",
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "question": "What is the purpose of a primary key?",
        "options": [
          "Encrypts the table",
          "Uniquely identifies each record in a table",
          "Links two databases",
          "Sorts records alphabetically"
        ],
        "answer": 1,
        "explanation": "A primary key uniquely identifies every record in a table.",
        "topic": "Databases"
      },
      {
        "question": "What does normalisation aim to reduce?",
        "options": [
          "The number of tables",
          "Data redundancy and update anomalies",
          "The number of users",
          "Query speed"
        ],
        "answer": 1,
        "explanation": "Normalisation organises data to minimise redundancy and prevent update/insertion/deletion anomalies.",
        "topic": "Databases"
      },
      {
        "question": "Which SQL keyword retrieves data from a table?",
        "options": [
          "INSERT",
          "SELECT",
          "UPDATE",
          "DELETE"
        ],
        "answer": 1,
        "explanation": "SELECT is used to query and retrieve data from one or more tables.",
        "topic": "Databases"
      },
      {
        "question": "In a star topology, what happens if the central switch fails?",
        "options": [
          "Only one device is affected",
          "The whole network goes down",
          "Nothing changes",
          "Data speed increases"
        ],
        "answer": 1,
        "explanation": "Since every device connects through the central switch, its failure takes down the whole network.",
        "topic": "Networks"
      },
      {
        "question": "What does a router do?",
        "options": [
          "Forwards data to devices on the same network using MAC address",
          "Connects different networks and routes packets using IP address",
          "Encrypts network traffic",
          "Stores web pages"
        ],
        "answer": 1,
        "explanation": "A router connects separate networks and forwards packets based on their destination IP address.",
        "topic": "Networks"
      },
      {
        "question": "What is packet switching?",
        "options": [
          "Sending an entire file as one continuous block",
          "Breaking data into packets sent independently and reassembled at the destination",
          "A type of network topology",
          "A form of encryption"
        ],
        "answer": 1,
        "explanation": "Packet switching splits data into packets that travel independently, possibly via different routes, and are reassembled on arrival.",
        "topic": "Networks"
      },
      {
        "question": "What is CSS primarily used for?",
        "options": [
          "Structuring content",
          "Styling the appearance of a web page",
          "Server-side processing",
          "Database queries"
        ],
        "answer": 1,
        "explanation": "CSS controls the visual presentation of a web page, separate from its HTML content.",
        "topic": "Web Technologies"
      },
      {
        "question": "Where does client-side scripting run?",
        "options": [
          "On the web server",
          "In the user's browser",
          "In the database",
          "On the router"
        ],
        "answer": 1,
        "explanation": "Client-side scripts (e.g. JavaScript) execute in the user's browser, not on the server.",
        "topic": "Web Technologies"
      },
      {
        "question": "What is a cookie used for?",
        "options": [
          "Encrypting a website",
          "Storing small pieces of data to remember information between visits",
          "Compressing images",
          "Running server-side code"
        ],
        "answer": 1,
        "explanation": "Cookies are small pieces of data stored by a website in the browser to remember information between visits.",
        "topic": "Web Technologies"
      },
      {
        "question": "How do you find the two's complement of a binary number?",
        "options": [
          "Add 1 only",
          "Invert all bits, then add 1",
          "Reverse the bit order",
          "Multiply by -1"
        ],
        "answer": 1,
        "explanation": "Two's complement is found by inverting every bit (one's complement) and then adding 1.",
        "topic": "Data Types and Number Representation"
      },
      {
        "question": "What does a floating point number consist of?",
        "options": [
          "Sign and magnitude only",
          "A mantissa and an exponent",
          "Two integers",
          "A hash and a checksum"
        ],
        "answer": 1,
        "explanation": "Floating point numbers represent real numbers using a mantissa (significant digits) and an exponent.",
        "topic": "Data Types and Number Representation"
      },
      {
        "question": "How many bits does standard ASCII use?",
        "options": [
          "8",
          "7",
          "16",
          "4"
        ],
        "answer": 1,
        "explanation": "Standard ASCII uses 7 bits, representing 128 characters.",
        "topic": "Data Types and Number Representation"
      },
      {
        "question": "Which principle does a stack follow?",
        "options": [
          "First In First Out",
          "Last In First Out",
          "Random access",
          "Sorted order"
        ],
        "answer": 1,
        "explanation": "A stack is Last In, First Out (LIFO): the most recently added item is removed first.",
        "topic": "Data Structures"
      },
      {
        "question": "Which data structure uses First In First Out?",
        "options": [
          "Stack",
          "Queue",
          "Tree",
          "Graph"
        ],
        "answer": 1,
        "explanation": "A queue is First In, First Out (FIFO): items are removed in the order they were added.",
        "topic": "Data Structures"
      },
      {
        "question": "In a binary search tree, where are values smaller than a node's value stored?",
        "options": [
          "Right child",
          "Left child",
          "Root",
          "Anywhere"
        ],
        "answer": 1,
        "explanation": "In a BST, the left child subtree holds values smaller than the parent node.",
        "topic": "Data Structures"
      },
      {
        "question": "When is the output of an AND gate 1?",
        "options": [
          "When at least one input is 1",
          "Only when both inputs are 1",
          "When both inputs are 0",
          "Always"
        ],
        "answer": 1,
        "explanation": "An AND gate only outputs 1 when every input is 1.",
        "topic": "Boolean Algebra"
      },
      {
        "question": "What is the output of an XOR gate when both inputs are the same?",
        "options": [
          "1",
          "0",
          "Undefined",
          "Depends on order"
        ],
        "answer": 1,
        "explanation": "XOR outputs 1 only when the inputs differ; identical inputs give 0.",
        "topic": "Boolean Algebra"
      },
      {
        "question": "What does De Morgan's law state for NOT(A AND B)?",
        "options": [
          "NOT A AND NOT B",
          "NOT A OR NOT B",
          "A OR B",
          "A AND B"
        ],
        "answer": 1,
        "explanation": "De Morgan's first law: NOT(A AND B) = NOT A OR NOT B.",
        "topic": "Boolean Algebra"
      },
      {
        "question": "What is the precondition for binary search to work correctly?",
        "options": [
          "Data must be in an array",
          "Data must be sorted",
          "Data must be numeric",
          "Data must be unique"
        ],
        "answer": 1,
        "explanation": "Binary search relies on repeatedly halving a sorted list; it doesn't work on unsorted data.",
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "question": "What is the time complexity of binary search in the worst case?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(n²)",
          "O(1)"
        ],
        "answer": 1,
        "explanation": "Binary search halves the search space each step, giving O(log n) worst-case time.",
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "question": "Which data structure does breadth-first search use to track nodes to visit?",
        "options": [
          "Stack",
          "Queue",
          "Tree",
          "Hash table"
        ],
        "answer": 1,
        "explanation": "BFS uses a queue so nodes are visited level by level, in the order they were discovered.",
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "question": "What is decomposition?",
        "options": [
          "Removing unnecessary detail",
          "Breaking a complex problem into smaller sub-problems",
          "Writing an algorithm",
          "Testing a program"
        ],
        "answer": 1,
        "explanation": "Decomposition breaks a large problem into smaller, more manageable sub-problems.",
        "topic": "Elements of Computational Thinking"
      },
      {
        "question": "What is abstraction?",
        "options": [
          "Breaking a problem into parts",
          "Removing unnecessary detail to focus on the essentials",
          "Running a program repeatedly",
          "Debugging code"
        ],
        "answer": 1,
        "explanation": "Abstraction focuses on the essential features of a problem, ignoring irrelevant detail.",
        "topic": "Elements of Computational Thinking"
      },
      {
        "question": "What does \"thinking ahead\" involve in computational thinking?",
        "options": [
          "Writing code as fast as possible",
          "Anticipating inputs, outputs and reusable components before implementation",
          "Ignoring edge cases",
          "Testing only after release"
        ],
        "answer": 1,
        "explanation": "Thinking ahead means anticipating what an algorithm will need before writing it, reducing rework later.",
        "topic": "Elements of Computational Thinking"
      },
      {
        "question": "What is required in a recursive function to avoid infinite recursion?",
        "options": [
          "A loop",
          "A base case",
          "A global variable",
          "A parameter"
        ],
        "answer": 1,
        "explanation": "A base case stops the recursive calls once a terminating condition is reached.",
        "topic": "Programming Techniques"
      },
      {
        "question": "What is the key difference between passing a parameter by value and by reference?",
        "options": [
          "By value passes a copy; by reference passes the actual memory address",
          "They are identical",
          "By reference is always slower",
          "By value modifies the original"
        ],
        "answer": 0,
        "explanation": "By value copies the argument (original unaffected); by reference passes the address, so changes affect the original.",
        "topic": "Programming Techniques"
      },
      {
        "question": "What does a while loop check before each iteration begins?",
        "options": [
          "Nothing",
          "The loop condition",
          "It only ever runs once",
          "The array length"
        ],
        "answer": 1,
        "explanation": "A while loop checks its condition before every iteration, so it may run zero times if false immediately.",
        "topic": "Programming Techniques"
      },
      {
        "question": "What is backtracking?",
        "options": [
          "Always moving forward through a problem",
          "Trying a solution, and undoing the last step if it fails, then trying an alternative",
          "A sorting algorithm",
          "A type of encryption"
        ],
        "answer": 1,
        "explanation": "Backtracking tries a possible path and reverses ('backtracks') when it hits a dead end, trying another option.",
        "topic": "Computational Methods"
      },
      {
        "question": "What is a heuristic?",
        "options": [
          "An exact, always-optimal algorithm",
          "A rule-of-thumb method that finds a good, but not necessarily optimal, solution quickly",
          "A type of data structure",
          "A network protocol"
        ],
        "answer": 1,
        "explanation": "A heuristic trades guaranteed optimality for speed, useful when an exact solution would take too long.",
        "topic": "Computational Methods"
      },
      {
        "question": "What technique does merge sort use?",
        "options": [
          "Backtracking",
          "Divide and conquer",
          "Heuristics",
          "Data mining"
        ],
        "answer": 1,
        "explanation": "Merge sort recursively divides the list, sorts the pieces, then merges them back together.",
        "topic": "Computational Methods"
      },
      {
        "question": "What is encapsulation in OOP?",
        "options": [
          "Making all data public",
          "Bundling data and methods together, restricting direct access",
          "Copying a class",
          "Deleting an object"
        ],
        "answer": 1,
        "explanation": "Encapsulation bundles data with its methods and restricts direct external access, protecting data integrity.",
        "topic": "Programming Paradigms"
      },
      {
        "question": "What does inheritance allow a subclass to do?",
        "options": [
          "Delete the superclass",
          "Gain the attributes and methods of its superclass",
          "Become private",
          "Run faster automatically"
        ],
        "answer": 1,
        "explanation": "Inheritance lets a subclass automatically gain the attributes and methods of its superclass, promoting reuse.",
        "topic": "Programming Paradigms"
      },
      {
        "question": "What is declarative programming?",
        "options": [
          "Specifying exact steps to follow",
          "Stating facts and rules, letting the system determine how to reach a goal",
          "Only used for making games",
          "The same as procedural programming"
        ],
        "answer": 1,
        "explanation": "Declarative programming states WHAT the outcome should be, leaving the HOW to the underlying system.",
        "topic": "Programming Paradigms"
      },
      {
        "question": "What happens during the analysis stage of the systems life cycle?",
        "options": [
          "Building the system",
          "Investigating the current system and gathering requirements",
          "Testing the system",
          "Maintaining the system"
        ],
        "answer": 1,
        "explanation": "Analysis investigates the existing system and gathers requirements for the new one.",
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "question": "What is corrective maintenance?",
        "options": [
          "Adding new features",
          "Fixing bugs found after release",
          "Updating for new hardware",
          "Improving performance"
        ],
        "answer": 1,
        "explanation": "Corrective maintenance fixes errors/bugs discovered after the system has been released.",
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "question": "What does a UML class diagram show?",
        "options": [
          "User interactions with the system",
          "Classes, their attributes, methods and relationships",
          "Network topology",
          "Database records"
        ],
        "answer": 1,
        "explanation": "A UML class diagram shows classes, their attributes, methods, and how classes relate to each other.",
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "question": "What does the Computer Misuse Act make illegal?",
        "options": [
          "Only hacking for financial profit",
          "Unauthorised access to computer systems or data",
          "Only spreading computer viruses",
          "Only accessing government systems"
        ],
        "answer": 1,
        "explanation": "The Computer Misuse Act makes any unauthorised access to a computer system or data an offence, regardless of intent or damage.",
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "question": "What right does GDPR give individuals regarding their personal data?",
        "options": [
          "No rights over their own data",
          "The right to access, correct, or request erasure of their data",
          "Only the right to sell their data",
          "It only applies to companies, not individuals"
        ],
        "answer": 1,
        "explanation": "GDPR gives individuals rights including access to their data, correction of inaccuracies, and erasure.",
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "question": "What is a key characteristic of open source software?",
        "options": [
          "Source code is always kept secret",
          "Source code is publicly available and can be modified or redistributed",
          "It is always more expensive than proprietary software",
          "It cannot be used commercially"
        ],
        "answer": 1,
        "explanation": "Open source software makes its source code publicly available for anyone to view, modify and redistribute.",
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      }
    ],
    "examQuestions": [
      {
        "question": "State the purpose of the MAR",
        "marks": 2,
        "markScheme": [
          "Definition recall",
          "Final answer: Holds the address of the memory location currently being read from or written to"
        ],
        "topic": "Structure and Function of the Processor"
      },
      {
        "question": "Describe the fetch stage of the FDE cycle",
        "marks": 2,
        "markScheme": [
          "Standard 3-mark FDE fetch description",
          "Final answer: PC contents copied to MAR; instruction at that address copied to MDR then CIR; PC incremented"
        ],
        "topic": "Structure and Function of the Processor"
      },
      {
        "question": "Explain why cache improves CPU performance",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Stores frequently used data/instructions closer to the CPU, reducing time spent accessing slower RAM"
        ],
        "topic": "Structure and Function of the Processor"
      },
      {
        "question": "State the function of the ALU",
        "marks": 2,
        "markScheme": [
          "Definition recall",
          "Final answer: Performs arithmetic and logical operations"
        ],
        "topic": "Structure and Function of the Processor"
      },
      {
        "question": "Explain the role of the control unit during the decode stage",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: It interprets the instruction in the CIR to determine which operation and operands are required, generating the necessary control signals"
        ],
        "topic": "Structure and Function of the Processor"
      },
      {
        "question": "Give two factors that affect CPU performance and explain their effect",
        "marks": 2,
        "markScheme": [
          "Any two valid factors with explanation",
          "Final answer: Clock speed — more cycles per second means more instructions processed; number of cores — allows more instructions to be processed in parallel"
        ],
        "topic": "Structure and Function of the Processor"
      },
      {
        "question": "Describe what happens during the execute stage for an ADD instruction",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: The ALU performs the addition using the specified operands, and the result is typically stored in the accumulator"
        ],
        "topic": "Structure and Function of the Processor"
      },
      {
        "question": "Explain why the address bus is unidirectional but the data bus is bidirectional",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Addresses only ever need to travel from the CPU to memory; data needs to travel both ways (read from and written to memory)"
        ],
        "topic": "Structure and Function of the Processor"
      },
      {
        "question": "A CPU has a clock speed of 3.2 GHz. Explain what this means",
        "marks": 2,
        "markScheme": [
          "Applied definition",
          "Final answer: The system clock produces 3.2 billion pulses (cycles) per second, synchronising the timing of CPU operations"
        ],
        "topic": "Structure and Function of the Processor"
      },
      {
        "question": "Trace the fetch stage for an instruction stored at address 50, given the PC currently holds 50",
        "marks": 2,
        "markScheme": [
          "Applied trace",
          "Final answer: MAR ← 50 (from PC); instruction at address 50 is copied to MDR, then to CIR; PC is incremented to 51"
        ],
        "topic": "Structure and Function of the Processor"
      },
      {
        "question": "Explain why increasing clock speed alone does not always proportionally increase performance",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation, evaluative",
          "Final answer: Performance also depends on other factors such as cache size, number of cores, and how efficiently instructions are pipelined — a higher clock speed with a bottleneck elsewhere (e.g. slow memory access) gives diminishing returns"
        ],
        "topic": "Structure and Function of the Processor"
      },
      {
        "question": "Explain one advantage of RISC over CISC",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Simpler, uniform instructions execute faster and more predictably, allowing deeper and more efficient pipelining"
        ],
        "topic": "Types of Processor"
      },
      {
        "question": "Explain why GPUs are well suited to machine learning workloads",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: ML involves large-scale parallel matrix operations; GPUs have many simple cores that can perform the same operation on many data items simultaneously (SIMD)"
        ],
        "topic": "Types of Processor"
      },
      {
        "question": "Describe pipelining and state its benefit",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Overlapping the stages of the FDE cycle for consecutive instructions so several are processed at once, increasing overall instruction throughput"
        ],
        "topic": "Types of Processor"
      },
      {
        "question": "Explain what is meant by parallel processing",
        "marks": 2,
        "markScheme": [
          "Definition",
          "Final answer: Executing multiple instructions or processes simultaneously across multiple processing units/cores"
        ],
        "topic": "Types of Processor"
      },
      {
        "question": "Give an example of SIMD architecture in use",
        "marks": 2,
        "markScheme": [
          "Applied example",
          "Final answer: A GPU applying the same colour-adjustment operation to every pixel of an image simultaneously"
        ],
        "topic": "Types of Processor"
      },
      {
        "question": "Explain one limitation of pipelining",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Pipeline hazards (e.g. a branch instruction, or one instruction needing the result of a previous unfinished one) can cause stalls, reducing efficiency gains"
        ],
        "topic": "Types of Processor"
      },
      {
        "question": "Classify a traditional single-core CPU using Flynn's taxonomy",
        "marks": 2,
        "markScheme": [
          "Application of taxonomy",
          "Final answer: SISD — Single Instruction, Single Data"
        ],
        "topic": "Types of Processor"
      },
      {
        "question": "Explain why a control hazard (branch instruction) can stall a pipeline",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: The CPU cannot know for certain which instruction to fetch next until the branch condition has been evaluated, so it may have to discard incorrectly pre-fetched instructions and restart, wasting cycles"
        ],
        "topic": "Types of Processor"
      },
      {
        "question": "Compare an embedded processor in a washing machine to a general-purpose CPU in a laptop",
        "marks": 2,
        "markScheme": [
          "Compare and contrast",
          "Final answer: The embedded processor is designed for one narrow, predictable task (controlling the wash cycle) and can be simpler/cheaper/lower power; the general-purpose CPU must efficiently handle a huge variety of unpredictable tasks, requiring more processing power and flexibility"
        ],
        "topic": "Types of Processor"
      },
      {
        "question": "Explain why increasing the number of cores does not always double performance",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation, evaluative",
          "Final answer: Not all tasks/software can be effectively split to run in parallel — some processes are inherently sequential, and coordinating between cores also introduces overhead, so gains are often less than proportional"
        ],
        "topic": "Types of Processor"
      },
      {
        "question": "Explain one advantage and one disadvantage of SSD compared to HDD",
        "marks": 2,
        "markScheme": [
          "Compare and contrast",
          "Final answer: Advantage: faster access times / more durable (no moving parts). Disadvantage: more expensive per GB / limited write cycles"
        ],
        "topic": "Input, Output and Storage"
      },
      {
        "question": "Explain why ROM (not RAM) is used to store the BIOS",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: ROM is non-volatile, so the essential startup instructions are retained even when the computer is switched off, allowing it to boot"
        ],
        "topic": "Input, Output and Storage"
      },
      {
        "question": "Describe how data is stored on a magnetic hard disk",
        "marks": 2,
        "markScheme": [
          "Descriptive recall",
          "Final answer: Data is stored as magnetised regions on spinning platters; a read/write head detects or changes the magnetic polarity to read/write bits"
        ],
        "topic": "Input, Output and Storage"
      },
      {
        "question": "Explain the purpose of virtual memory",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Allows the OS to use secondary storage as an extension of RAM, enabling more programs/data to be handled than physical RAM alone would allow"
        ],
        "topic": "Input, Output and Storage"
      },
      {
        "question": "Explain why excessive use of virtual memory can slow a system significantly",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Secondary storage is much slower than RAM, so frequent swapping (\"thrashing\") between the two causes major performance loss"
        ],
        "topic": "Input, Output and Storage"
      },
      {
        "question": "Compare optical and solid-state storage for software distribution",
        "marks": 2,
        "markScheme": [
          "Compare and contrast",
          "Final answer: Optical is cheap to produce and distribute physically but slower and more fragile; SSD/flash is faster and more durable but costs more per GB"
        ],
        "topic": "Input, Output and Storage"
      },
      {
        "question": "Recommend a storage type for a rugged outdoor action camera and justify your choice",
        "marks": 2,
        "markScheme": [
          "Applied scenario reasoning",
          "Final answer: Solid-state (flash) storage — it has no moving parts, so it withstands shock/vibration far better than a magnetic HDD, which is important for a device used in rough conditions"
        ],
        "topic": "Input, Output and Storage"
      },
      {
        "question": "Explain why a sensor is classed as an input device",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: It converts a real-world physical quantity (e.g. temperature) into a digital signal that the computer can process, just as a keyboard converts a key press into digital data"
        ],
        "topic": "Input, Output and Storage"
      },
      {
        "question": "Explain the purpose of interrupt handling",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Allows the CPU to respond promptly to hardware/software events without constantly polling every device, improving efficiency"
        ],
        "topic": "Systems Software"
      },
      {
        "question": "Describe the round robin scheduling algorithm",
        "marks": 2,
        "markScheme": [
          "Descriptive recall",
          "Final answer: Each process is given an equal, fixed CPU time slice in a cyclic order, ensuring fair sharing of CPU time between processes"
        ],
        "topic": "Systems Software"
      },
      {
        "question": "Explain why virtual memory can slow down a system if overused",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Accessing secondary storage (used for virtual memory) is much slower than RAM, so excessive swapping (\"thrashing\") badly degrades performance"
        ],
        "topic": "Systems Software"
      },
      {
        "question": "State two functions of a device driver",
        "marks": 2,
        "markScheme": [
          "Definition recall",
          "Final answer: Translates OS commands into device-specific instructions; allows a generic OS to work correctly with a wide range of hardware"
        ],
        "topic": "Systems Software"
      },
      {
        "question": "Explain one advantage of using a virtual machine",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Allows multiple operating systems to run on one physical machine, or provides an isolated environment for testing/security without affecting the host system"
        ],
        "topic": "Systems Software"
      },
      {
        "question": "Describe what happens when an interrupt occurs",
        "marks": 2,
        "markScheme": [
          "Step-by-step description",
          "Final answer: The CPU finishes its current instruction, saves the current process state, runs the appropriate interrupt service routine, then resumes the original process"
        ],
        "topic": "Systems Software"
      },
      {
        "question": "Compare FCFS and priority scheduling",
        "marks": 2,
        "markScheme": [
          "Compare and contrast",
          "Final answer: FCFS runs processes strictly in arrival order regardless of importance; priority scheduling runs the most important/urgent processes first, which can cause lower-priority processes to wait indefinitely (starvation)"
        ],
        "topic": "Systems Software"
      },
      {
        "question": "Explain why round robin scheduling is well suited to an interactive multi-user system",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Every process is guaranteed a regular, fair turn on the CPU, so no single user/process can monopolise it and all tasks appear to make steady progress, keeping the system responsive"
        ],
        "topic": "Systems Software"
      },
      {
        "question": "Explain why an OS assigns different priorities to different types of interrupt",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: So that time-critical events (e.g. a hardware failure or a real-time sensor reading) are dealt with before less urgent, routine events (e.g. a keypress), preventing critical issues from being delayed"
        ],
        "topic": "Systems Software"
      },
      {
        "question": "A system uses paging for memory management. Explain one advantage of this over allocating one continuous block of memory per process",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Paging avoids external fragmentation, since a process's memory need not be contiguous — it can be split into fixed-size pages placed anywhere in memory, making more efficient use of available RAM"
        ],
        "topic": "Systems Software"
      },
      {
        "question": "Explain one advantage of compiling source code rather than interpreting it",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: The compiled program runs faster since translation happens once before execution, not repeatedly at runtime"
        ],
        "topic": "Applications Generation (Translators)"
      },
      {
        "question": "Explain one advantage of interpreting source code rather than compiling it",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Errors can be found and fixed immediately during development since execution stops at the exact faulty line, making debugging easier"
        ],
        "topic": "Applications Generation (Translators)"
      },
      {
        "question": "Describe the role of a linker",
        "marks": 2,
        "markScheme": [
          "Descriptive recall",
          "Final answer: Combines compiled object code with any required library code to produce one complete executable file"
        ],
        "topic": "Applications Generation (Translators)"
      },
      {
        "question": "Explain what happens during lexical analysis",
        "marks": 2,
        "markScheme": [
          "Descriptive recall",
          "Final answer: The source code is broken down into a stream of tokens such as keywords, identifiers, operators and literals, with whitespace and comments discarded"
        ],
        "topic": "Applications Generation (Translators)"
      },
      {
        "question": "Explain what happens during syntax analysis and what error it can detect",
        "marks": 2,
        "markScheme": [
          "Descriptive recall",
          "Final answer: Tokens are checked against the grammar rules of the language, building a parse tree; this stage detects syntax errors (e.g. a missing bracket)"
        ],
        "topic": "Applications Generation (Translators)"
      },
      {
        "question": "Explain why a language like Java uses both a compiler and an interpreter",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Java compiles source code to intermediate bytecode (portable across platforms), which is then interpreted/JIT-compiled by the Java Virtual Machine, balancing portability with reasonable performance"
        ],
        "topic": "Applications Generation (Translators)"
      },
      {
        "question": "Give one reason a distributed application would use a compiler rather than an interpreter",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Keeps the source code private (only the executable is distributed) and improves runtime performance for the end user"
        ],
        "topic": "Applications Generation (Translators)"
      },
      {
        "question": "Classify the error in the code \"y = x + 5\" where x has been misspelt as \"z\" and was never declared",
        "marks": 2,
        "markScheme": [
          "Applied classification",
          "Final answer: Semantic error (undeclared identifier used) — the grammar is valid but the meaning/usage is invalid"
        ],
        "topic": "Applications Generation (Translators)"
      },
      {
        "question": "Explain the purpose of a symbol table during assembly",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Stores the addresses of labels defined in the code so that forward references (labels used before being defined) can be correctly resolved during the second pass"
        ],
        "topic": "Applications Generation (Translators)"
      },
      {
        "question": "Explain why code optimisation is a separate stage from code generation",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Code generation focuses on producing correct working machine code first; optimisation then analyses that code to improve efficiency (speed/size) without changing its behaviour, which is a distinct, more complex concern"
        ],
        "topic": "Applications Generation (Translators)"
      },
      {
        "question": "Describe the stages of the waterfall methodology, in order",
        "marks": 2,
        "markScheme": [
          "Descriptive recall",
          "Final answer: Requirements analysis, design, implementation, testing, maintenance — each completed fully before the next begins"
        ],
        "topic": "Software Development Methodologies"
      },
      {
        "question": "Explain one disadvantage of the waterfall model for a project with evolving requirements",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: It is difficult and costly to revisit earlier stages once development has progressed, so changing requirements mid-project causes major delays/rework"
        ],
        "topic": "Software Development Methodologies"
      },
      {
        "question": "Explain how agile development handles changing requirements",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Through short, iterative sprints that allow requirements to be reviewed and adjusted regularly based on client feedback"
        ],
        "topic": "Software Development Methodologies"
      },
      {
        "question": "Explain one benefit of pair programming",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Real-time code review catches bugs earlier, and knowledge is shared between developers, improving overall code quality"
        ],
        "topic": "Software Development Methodologies"
      },
      {
        "question": "Compare waterfall and agile for a project with unclear initial requirements",
        "marks": 2,
        "markScheme": [
          "Compare and contrast",
          "Final answer: Agile is more suitable because its iterative cycles allow requirements to be clarified and adjusted as understanding grows, unlike waterfall's fixed upfront plan which assumes requirements are known from the start"
        ],
        "topic": "Software Development Methodologies"
      },
      {
        "question": "Explain a situation where the waterfall model would be preferred over agile",
        "marks": 2,
        "markScheme": [
          "Applied reasoning",
          "Final answer: A project with fixed, well-understood requirements and strict regulatory documentation needs (e.g. safety-critical systems) benefits from waterfall's clear, well-documented stages"
        ],
        "topic": "Software Development Methodologies"
      },
      {
        "question": "Explain the purpose of a throwaway prototype",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Allows developers and clients to visualise and clarify requirements early through a quick demonstration version, without investing in building it to production quality, before the discarded prototype informs the real design"
        ],
        "topic": "Software Development Methodologies"
      },
      {
        "question": "A company needs regulatory sign-off at every stage of a safety-critical medical device project. Recommend and justify a methodology",
        "marks": 2,
        "markScheme": [
          "Applied scenario recommendation",
          "Final answer: Waterfall — its distinct, fully-documented sequential stages naturally support the formal sign-off and audit trail required by regulators, unlike agile's more fluid, less rigidly-documented iterations"
        ],
        "topic": "Software Development Methodologies"
      },
      {
        "question": "Explain the difference between lossy and lossless compression, giving an example use of each",
        "marks": 2,
        "markScheme": [
          "Compare and contrast with examples",
          "Final answer: Lossy compression permanently discards some data to achieve smaller files, suited to images/audio where minor quality loss is acceptable (e.g. JPEG); lossless compression preserves all original data exactly, needed for text/programs (e.g. ZIP)"
        ],
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "question": "Describe how Huffman coding compresses data",
        "marks": 2,
        "markScheme": [
          "Descriptive explanation",
          "Final answer: A binary tree is built based on symbol frequency, with more frequent symbols given shorter binary codes and rarer symbols longer codes, reducing the average number of bits needed overall"
        ],
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "question": "Explain why asymmetric encryption solves the key distribution problem faced by symmetric encryption",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: The private key used for decryption never needs to be transmitted or shared with anyone; only the public key (used for encryption) needs to be shared, so there is no risk of the crucial private key being intercepted"
        ],
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "question": "Describe how hashing can be used to verify that a downloaded file has not been corrupted or tampered with",
        "marks": 2,
        "markScheme": [
          "Applied explanation",
          "Final answer: The hash of the downloaded file is calculated and compared to the original published hash; if they match, the file is confirmed to be identical/unaltered"
        ],
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "question": "Explain why a good hash function should minimise collisions",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Collisions mean two different inputs map to the same output, which could allow a malicious or corrupted file to appear identical to the genuine one, undermining integrity checks"
        ],
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "question": "Explain why storing a hash of a password is more secure than storing the password itself",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Hashing is one-way, so even if the stored hash is stolen, the original password cannot be recovered from it directly"
        ],
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "question": "Use Run Length Encoding to compress the string \"AAAAABBBCCCCCCCD\"",
        "marks": 2,
        "markScheme": [
          "Count each consecutive run of the same character",
          "Final answer: 5A3B7C1D"
        ],
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "question": "Explain the purpose of \"salting\" a password before hashing",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Adds random data unique to each user so that identical passwords produce different hashes, defeating precomputed rainbow table lookup attacks and making each hash effectively unique"
        ],
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "question": "Explain why a simple substitution cipher (e.g. Caesar cipher) is insecure by modern standards",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: It has a very small key space (only 25 possible shifts) and preserves the frequency pattern of the original letters, making it trivial to break through brute force or frequency analysis"
        ],
        "topic": "Compression, Encryption and Hashing"
      },
      {
        "question": "Explain why normalisation is used in database design",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Reduces data redundancy, prevents update/insertion/deletion anomalies, and improves overall data integrity"
        ],
        "topic": "Databases"
      },
      {
        "question": "Write an SQL statement to select all fields from a table \"Students\" where age is greater than 18",
        "marks": 2,
        "markScheme": [
          "Direct SQL syntax",
          "Final answer: SELECT * FROM Students WHERE age > 18;"
        ],
        "topic": "Databases"
      },
      {
        "question": "Explain what a foreign key does",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Links two tables together by referencing the primary key of another table, enforcing referential integrity between them"
        ],
        "topic": "Databases"
      },
      {
        "question": "Describe the \"Atomicity\" property of ACID",
        "marks": 2,
        "markScheme": [
          "Definition explanation",
          "Final answer: A transaction is treated as a single indivisible unit — it either fully completes or is fully rolled back, with no partial changes left in the database"
        ],
        "topic": "Databases"
      },
      {
        "question": "Explain why record locking is needed in a multi-user database system",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Without it, two users editing the same record simultaneously could cause one user's changes to overwrite the other's (the \"lost update\" problem), leading to data loss/inconsistency"
        ],
        "topic": "Databases"
      },
      {
        "question": "Write an SQL statement to insert a new record into a table \"Books\" with fields title and author",
        "marks": 2,
        "markScheme": [
          "Direct SQL syntax",
          "Final answer: INSERT INTO Books (title, author) VALUES ('Title', 'Author');"
        ],
        "topic": "Databases"
      },
      {
        "question": "Explain one problem caused by unnormalised data with high redundancy",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Update anomalies — the same data must be updated in multiple places, risking inconsistency if not all copies are updated correctly; also wastes storage space"
        ],
        "topic": "Databases"
      },
      {
        "question": "Write an SQL statement to update the age to 20 for the student with id 7",
        "marks": 2,
        "markScheme": [
          "Direct SQL syntax",
          "Final answer: UPDATE Students SET age = 20 WHERE id = 7;"
        ],
        "topic": "Databases"
      },
      {
        "question": "A table has columns OrderID, Product1, Product2, Product3. Explain which normal form this violates and why",
        "marks": 2,
        "markScheme": [
          "Applied normalisation reasoning",
          "Final answer: Violates 1NF — Product1/2/3 form a repeating group, rather than each cell holding a single atomic value; this should be split into a separate table with one row per order item"
        ],
        "topic": "Databases"
      },
      {
        "question": "Write an SQL statement to join a Students table and a Grades table on matching student_id, returning name and grade",
        "marks": 2,
        "markScheme": [
          "Direct SQL syntax",
          "Final answer: SELECT Students.name, Grades.grade FROM Students JOIN Grades ON Students.id = Grades.student_id;"
        ],
        "topic": "Databases"
      },
      {
        "question": "Explain the purpose of an entity relationship diagram during database design",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Visually models the entities (tables) needed and the relationships between them before implementation, helping to plan a normalised structure and identify foreign keys needed"
        ],
        "topic": "Databases"
      },
      {
        "question": "Explain one advantage and one disadvantage of a star topology",
        "marks": 2,
        "markScheme": [
          "Compare and contrast",
          "Final answer: Advantage: a single cable failure only affects one device, not the whole network. Disadvantage: if the central switch/hub fails, the entire network goes down"
        ],
        "topic": "Networks"
      },
      {
        "question": "Describe the difference between client-server and peer-to-peer networks",
        "marks": 2,
        "markScheme": [
          "Compare and contrast",
          "Final answer: Client-server has a dedicated server providing centralised resources and easier security management; peer-to-peer has no central authority, with devices sharing resources directly and equally"
        ],
        "topic": "Networks"
      },
      {
        "question": "Explain the purpose of using a layered model (like TCP/IP) for network communication",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Breaks network communication into manageable, independent layers each with a specific responsibility, allowing standardisation and interoperability between different manufacturers/systems"
        ],
        "topic": "Networks"
      },
      {
        "question": "State the function of a router in a network",
        "marks": 2,
        "markScheme": [
          "Definition recall",
          "Final answer: Connects different networks together and directs data packets to their destination based on their IP address"
        ],
        "topic": "Networks"
      },
      {
        "question": "Explain why packet switching is an efficient way to transmit data across a network",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Allows packets from many different sources to share the same network paths, and can route around congestion or failed connections, improving overall efficiency and resilience"
        ],
        "topic": "Networks"
      },
      {
        "question": "Describe the purpose of an IP address, and how it differs from a MAC address",
        "marks": 2,
        "markScheme": [
          "Compare and contrast",
          "Final answer: An IP address uniquely identifies a device on a network for routing purposes and can change; a MAC address is a fixed physical hardware identifier that never changes"
        ],
        "topic": "Networks"
      },
      {
        "question": "Explain why a mesh topology is more resilient than a bus topology",
        "marks": 2,
        "markScheme": [
          "Compare and contrast",
          "Final answer: A mesh has multiple interconnections between devices, so if one connection fails there are alternative paths; a bus relies on a single shared backbone cable, so a break can disable the whole network"
        ],
        "topic": "Networks"
      },
      {
        "question": "Describe the role of the transport layer in the TCP/IP model",
        "marks": 2,
        "markScheme": [
          "Descriptive recall",
          "Final answer: Breaks data into packets, adds sequencing information, and ensures reliable, ordered delivery, reassembling packets correctly at the destination even if they arrive out of order"
        ],
        "topic": "Networks"
      },
      {
        "question": "Explain why packets from the same file might arrive at their destination via different physical routes",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Packet switching allows each packet to be routed independently based on current network conditions (e.g. congestion), so different packets may take different paths, all being reassembled correctly using sequence numbers at the destination"
        ],
        "topic": "Networks"
      },
      {
        "question": "Explain one advantage of HTTPS over HTTP for an online shopping website",
        "marks": 2,
        "markScheme": [
          "Applied conceptual explanation",
          "Final answer: HTTPS encrypts data in transit, protecting sensitive information like payment details from being intercepted and read by a third party"
        ],
        "topic": "Networks"
      },
      {
        "question": "Explain the difference between client-side and server-side scripting, giving an example of each",
        "marks": 2,
        "markScheme": [
          "Compare and contrast with examples",
          "Final answer: Client-side scripting (e.g. JavaScript) runs in the browser for immediate interactivity/validation without contacting the server; server-side scripting (e.g. PHP) runs on the server, often to securely access a database, before the finished page is sent"
        ],
        "topic": "Web Technologies"
      },
      {
        "question": "Explain why search engines use indexing rather than searching the web in real time",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Allows very fast retrieval of relevant results, since the index has already organised/analysed pages in advance rather than needing to crawl the entire web for every single search query"
        ],
        "topic": "Web Technologies"
      },
      {
        "question": "Describe the purpose of CSS in web development",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Separates a page's content (HTML) from its presentation/styling, allowing consistent styling to be applied across multiple pages and easier maintenance"
        ],
        "topic": "Web Technologies"
      },
      {
        "question": "Explain one privacy concern associated with cookies",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Cookies can be used by advertisers to track a user's browsing behaviour across multiple different websites without the user being fully aware, raising privacy concerns"
        ],
        "topic": "Web Technologies"
      },
      {
        "question": "Explain why client-side form validation alone is not sufficient for security",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Client-side code runs in the user's browser and can be viewed, modified or bypassed entirely by the user, so server-side validation is also needed to properly enforce data integrity and security"
        ],
        "topic": "Web Technologies"
      },
      {
        "question": "Explain why a page with many high-quality incoming links might rank higher in search results than a similar page with few links",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Ranking algorithms like PageRank treat incoming links from reputable sites as a signal of trustworthiness/importance, so a well-linked page is judged more likely to be a valuable, authoritative result"
        ],
        "topic": "Web Technologies"
      },
      {
        "question": "Explain the difference between a session cookie and a persistent cookie, giving a use for each",
        "marks": 2,
        "markScheme": [
          "Compare and contrast with examples",
          "Final answer: A session cookie is temporary, deleted when the browser closes, useful for keeping a user logged in only during their current visit; a persistent cookie remains stored for a set duration, useful for \"remember me\" login features across visits"
        ],
        "topic": "Web Technologies"
      },
      {
        "question": "Convert the denary number 156 to 8-bit binary",
        "marks": 3,
        "markScheme": [
          "128+16+8+4=156",
          "bits set at 128,16,8,4",
          "Final answer: 10011100"
        ],
        "topic": "Data Types and Number Representation"
      },
      {
        "question": "Convert the binary number 11010110 to hexadecimal",
        "marks": 2,
        "markScheme": [
          "1101=D, 0110=6",
          "Final answer: D6"
        ],
        "topic": "Data Types and Number Representation"
      },
      {
        "question": "Find the two's complement representation of -18 in 8 bits",
        "marks": 2,
        "markScheme": [
          "18=00010010, invert=11101101, +1=11101110",
          "Final answer: 11101110"
        ],
        "topic": "Data Types and Number Representation"
      },
      {
        "question": "Explain why floating point representation can lead to rounding errors",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Only a finite number of bits are available to represent the mantissa, so many real (fractional) numbers cannot be represented exactly, leading to small rounding errors"
        ],
        "topic": "Data Types and Number Representation"
      },
      {
        "question": "Add the binary numbers 01101 and 00111 (5-bit register). Does overflow occur?",
        "marks": 2,
        "markScheme": [
          "01101(13)+00111(7)=20=10100, which needs 6 bits so overflows a signed 5-bit register",
          "Final answer: Result is 10100; yes, overflow occurs"
        ],
        "topic": "Data Types and Number Representation"
      },
      {
        "question": "Explain why Unicode is preferred over ASCII for international applications",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Unicode can represent a vastly larger range of characters, including non-Latin alphabets, symbols and emoji, which the much smaller ASCII character set cannot support"
        ],
        "topic": "Data Types and Number Representation"
      },
      {
        "question": "Convert the denary number 25 to binary",
        "marks": 2,
        "markScheme": [
          "16+8+1=25",
          "Final answer: 11001"
        ],
        "topic": "Data Types and Number Representation"
      },
      {
        "question": "Convert the hexadecimal number 2F to denary",
        "marks": 2,
        "markScheme": [
          "2×16 + 15 = 32+15=47",
          "Final answer: 47"
        ],
        "topic": "Data Types and Number Representation"
      },
      {
        "question": "Explain the effect of increasing the number of bits allocated to the mantissa in a floating point format",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Increases precision, since more significant digits of the number can be stored, reducing rounding error"
        ],
        "topic": "Data Types and Number Representation"
      },
      {
        "question": "Explain the effect of increasing the number of bits allocated to the exponent in a floating point format",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Increases the range of magnitudes that can be represented (both very large and very small numbers), at the cost of the bits no longer available for precision"
        ],
        "topic": "Data Types and Number Representation"
      },
      {
        "question": "Find the denary value of the 8-bit two's complement number 11111000",
        "marks": 2,
        "markScheme": [
          "Invert: 00000111, +1=00001000=8, so original is -8",
          "Final answer: -8"
        ],
        "topic": "Data Types and Number Representation"
      },
      {
        "question": "Describe how a stack could check if brackets in an expression are balanced",
        "marks": 2,
        "markScheme": [
          "Applied algorithm description",
          "Final answer: Push each opening bracket onto the stack; when a closing bracket is found, pop the top of the stack and check it matches; the expression is balanced if the stack ends up empty and every check matched"
        ],
        "topic": "Data Structures"
      },
      {
        "question": "Explain the difference between a stack and a queue",
        "marks": 2,
        "markScheme": [
          "Compare and contrast",
          "Final answer: A stack removes the most recently added item first (LIFO); a queue removes the item that has been waiting longest (FIFO)"
        ],
        "topic": "Data Structures"
      },
      {
        "question": "Describe how a binary search tree allows efficient searching",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: At each node, the target value is compared to the current node and the search moves left or right accordingly, halving the remaining search space at each step, similar to binary search"
        ],
        "topic": "Data Structures"
      },
      {
        "question": "Explain one real-world application of a queue in computing",
        "marks": 2,
        "markScheme": [
          "Applied example",
          "Final answer: A print queue, where documents are printed in the order they were submitted; or CPU task scheduling; or breadth-first search traversal"
        ],
        "topic": "Data Structures"
      },
      {
        "question": "Explain what a hash table collision is and describe one way to resolve it",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: A collision occurs when two different keys hash to the same array index; it can be resolved using chaining, where a linked list of all colliding items is stored at that index"
        ],
        "topic": "Data Structures"
      },
      {
        "question": "Give an example of when a 2D array would be a suitable data structure",
        "marks": 2,
        "markScheme": [
          "Applied example",
          "Final answer: Representing a grid-based structure, such as a game board, spreadsheet, or image pixel data"
        ],
        "topic": "Data Structures"
      },
      {
        "question": "Explain why a stack is used to manage function calls (the call stack)",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: The most recently called function needs to finish and return before the function that called it can continue, matching the Last-In-First-Out behaviour of a stack"
        ],
        "topic": "Data Structures"
      },
      {
        "question": "Trace through a stack-based check of the brackets \"([)]\" and state whether they are balanced",
        "marks": 2,
        "markScheme": [
          "Applied trace",
          "Final answer: Not balanced — after pushing ( and [, we see ) which should match the top of stack [, but they don't match, so the check fails immediately"
        ],
        "topic": "Data Structures"
      },
      {
        "question": "Explain one advantage of a linked list over an array for frequently inserting/removing items",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Inserting or removing a node only requires updating a couple of pointers, without needing to shift every subsequent element as an array would"
        ],
        "topic": "Data Structures"
      },
      {
        "question": "State what in-order traversal of a binary search tree produces",
        "marks": 2,
        "markScheme": [
          "Conceptual recall",
          "Final answer: The values in sorted (ascending) order"
        ],
        "topic": "Data Structures"
      },
      {
        "question": "Explain why a binary search tree becomes less efficient if it is unbalanced (e.g. all nodes added in increasing order)",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: The tree degenerates into effectively a linked list, so searching no longer benefits from halving the search space each step, making performance closer to O(n) rather than O(log n)"
        ],
        "topic": "Data Structures"
      },
      {
        "question": "State the truth table output for XOR with inputs A=1, B=1",
        "marks": 2,
        "markScheme": [
          "XOR is 1 only when inputs differ",
          "Final answer: 0 (inputs are the same, not different)"
        ],
        "topic": "Boolean Algebra"
      },
      {
        "question": "Simplify the Boolean expression A.B + A.NOT(B) using Boolean algebra",
        "marks": 2,
        "markScheme": [
          "Factorise: A.(B + NOT B) = A.1 = A",
          "Final answer: A"
        ],
        "topic": "Boolean Algebra"
      },
      {
        "question": "Apply De Morgan's law to simplify NOT(A.B)",
        "marks": 2,
        "markScheme": [
          "De Morgan's first law",
          "Final answer: NOT A + NOT B"
        ],
        "topic": "Boolean Algebra"
      },
      {
        "question": "Explain the difference between a half adder and a full adder",
        "marks": 2,
        "markScheme": [
          "Compare and contrast",
          "Final answer: A half adder adds two single bits, producing a sum and carry-out; a full adder also takes a carry-in, allowing three bits to be added, so full adders can be chained to add multi-bit binary numbers"
        ],
        "topic": "Boolean Algebra"
      },
      {
        "question": "Write the Boolean expression for a circuit where inputs A and B go into an AND gate, then the output is inverted",
        "marks": 2,
        "markScheme": [
          "Direct circuit translation",
          "Final answer: NOT(A.B) — equivalent to a NAND gate"
        ],
        "topic": "Boolean Algebra"
      },
      {
        "question": "Simplify NOT(NOT A)",
        "marks": 2,
        "markScheme": [
          "Double negation cancels out",
          "Final answer: A"
        ],
        "topic": "Boolean Algebra"
      },
      {
        "question": "Simplify A + A.B using the absorption law",
        "marks": 2,
        "markScheme": [
          "Standard absorption law",
          "Final answer: A"
        ],
        "topic": "Boolean Algebra"
      },
      {
        "question": "Draw/describe the truth table for a NOR gate",
        "marks": 2,
        "markScheme": [
          "Inverted OR",
          "Final answer: Output is 1 only when both inputs are 0; otherwise output is 0"
        ],
        "topic": "Boolean Algebra"
      },
      {
        "question": "Describe how a half adder is built from logic gates",
        "marks": 2,
        "markScheme": [
          "Applied circuit description",
          "Final answer: An XOR gate calculates the sum output (A XOR B) and an AND gate calculates the carry output (A AND B)"
        ],
        "topic": "Boolean Algebra"
      },
      {
        "question": "Write the Sum of Products expression for a truth table where the output is 1 only when A=1,B=0 and A=0,B=1",
        "marks": 2,
        "markScheme": [
          "One AND term per row where output=1, combined with OR — this is actually the XOR function",
          "Final answer: A.NOT(B) + NOT(A).B"
        ],
        "topic": "Boolean Algebra"
      },
      {
        "question": "Simplify (A+B).(A+NOT B) using Boolean algebra",
        "marks": 2,
        "markScheme": [
          "Expand: A.A + A.NOTB + A.B + B.NOTB = A + A.(NOTB+B) + 0 = A + A = A",
          "Final answer: A"
        ],
        "topic": "Boolean Algebra"
      },
      {
        "question": "Explain why binary search is more efficient than linear search for large sorted datasets",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Binary search halves the remaining search space at each step (O(log n)), whereas linear search may need to check every item one by one (O(n))"
        ],
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "question": "Describe the steps of bubble sort",
        "marks": 2,
        "markScheme": [
          "Descriptive recall",
          "Final answer: Repeatedly compare each pair of adjacent elements and swap them if they are in the wrong order, making repeated passes through the list until a full pass makes no swaps"
        ],
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "question": "Explain how merge sort works",
        "marks": 2,
        "markScheme": [
          "Descriptive recall",
          "Final answer: Recursively divides the list in half until each sub-list contains a single element, then merges pairs of sorted sub-lists back together in the correct order until the whole list is sorted"
        ],
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "question": "Trace binary search for the value 7 in the sorted list [1,3,5,7,9,11,13]",
        "marks": 2,
        "markScheme": [
          "Step trace",
          "Final answer: Middle element is 7 (index 3) — found immediately on the first comparison"
        ],
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "question": "Describe how breadth-first search traverses a graph",
        "marks": 2,
        "markScheme": [
          "Descriptive recall",
          "Final answer: Starts at a chosen node, visits all of its direct neighbours first, then all of their unvisited neighbours, and so on level by level, using a queue to track nodes to visit next"
        ],
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "question": "Explain the purpose of Dijkstra's algorithm",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Finds the shortest path from a starting node to every other node in a weighted graph, by repeatedly selecting the closest unvisited node and updating the shortest known distances to its neighbours"
        ],
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "question": "State the time complexity of a well-implemented binary search",
        "marks": 2,
        "markScheme": [
          "Definition recall",
          "Final answer: O(log n)"
        ],
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "question": "Explain why quicksort's worst-case time complexity is O(n²)",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: If the chosen pivot is always the smallest or largest remaining element (e.g. on an already-sorted list with a naive pivot choice), the partitions become highly unbalanced, degrading performance to quadratic time"
        ],
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "question": "Compare the space requirements of merge sort and bubble sort",
        "marks": 2,
        "markScheme": [
          "Compare and contrast",
          "Final answer: Merge sort typically requires additional O(n) space for merging sub-lists; bubble sort sorts in place, requiring only O(1) additional space"
        ],
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "question": "Trace one full pass of bubble sort on the list [4, 1, 3, 2]",
        "marks": 2,
        "markScheme": [
          "Step-by-step trace",
          "Final answer: Compare 4,1 → swap → [1,4,3,2]; compare 4,3 → swap → [1,3,4,2]; compare 4,2 → swap → [1,3,2,4]; end of pass 1"
        ],
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "question": "Recommend a sorting algorithm for data that is already almost fully sorted, and justify your choice",
        "marks": 2,
        "markScheme": [
          "Applied reasoning",
          "Final answer: Insertion sort — it performs very few comparisons/shifts when data is already nearly in order, making it more efficient than algorithms like bubble sort or quicksort in this specific case"
        ],
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "question": "Explain why a guaranteed O(n log n) algorithm like merge sort might be chosen over quicksort for a safety-critical real-time system",
        "marks": 2,
        "markScheme": [
          "Applied evaluative reasoning",
          "Final answer: Merge sort's worst-case performance is always O(n log n), giving predictable, guaranteed timing; quicksort's worst case is O(n²), which could cause unacceptable delays in a time-critical system if unlucky pivot choices occur"
        ],
        "topic": "Algorithms: Searching, Sorting & Graph Traversal"
      },
      {
        "question": "Explain how decomposition would help when designing a large software system",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Breaks the system into smaller, independent modules that can be individually designed, coded and tested, making the overall problem far more manageable and allowing teams to work in parallel"
        ],
        "topic": "Elements of Computational Thinking"
      },
      {
        "question": "Give an example of abstraction in everyday computing and explain its benefit",
        "marks": 2,
        "markScheme": [
          "Applied example with explanation",
          "Final answer: A desktop \"folder\" icon abstracts the underlying complexity of file storage on disk, letting users organise files without understanding the underlying file system"
        ],
        "topic": "Elements of Computational Thinking"
      },
      {
        "question": "Explain why \"thinking ahead\" is important when designing an algorithm",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Helps identify potential inputs, edge cases, and reusable components before implementation begins, reducing the amount of costly rework needed later"
        ],
        "topic": "Elements of Computational Thinking"
      },
      {
        "question": "Describe an example of \"thinking concurrently\" in a real system",
        "marks": 2,
        "markScheme": [
          "Applied example",
          "Final answer: A web server handling multiple client requests at the same time using multiple threads or processes, rather than serving one request fully before starting the next"
        ],
        "topic": "Elements of Computational Thinking"
      },
      {
        "question": "Explain how \"thinking logically\" might help when debugging a program",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Reasoning carefully about the conditions and decision points in the code helps identify exactly where the logic diverges from the intended behaviour, pinpointing the source of a bug"
        ],
        "topic": "Elements of Computational Thinking"
      },
      {
        "question": "Apply decomposition and abstraction to the problem of designing a self-checkout system in a supermarket",
        "marks": 2,
        "markScheme": [
          "Applied reasoning",
          "Final answer: Decomposition splits it into sub-problems: scanning items, calculating total, accepting payment, detecting unexpected items in the bagging area; abstraction focuses on the essential logic of each step while ignoring irrelevant details like the exact physical design of the scanner"
        ],
        "topic": "Elements of Computational Thinking"
      },
      {
        "question": "Explain why computational thinking is considered a transferable skill beyond computer science",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: The core skills — breaking problems down, simplifying to essential detail, thinking through logical steps — apply to solving complex problems in many other fields, not just writing code"
        ],
        "topic": "Elements of Computational Thinking"
      },
      {
        "question": "Explain the difference between a while loop and a do-while loop",
        "marks": 2,
        "markScheme": [
          "Compare and contrast",
          "Final answer: A while loop checks its condition before each iteration, so it may execute zero times; a do-while loop checks its condition after each iteration, so it always executes at least once"
        ],
        "topic": "Programming Techniques"
      },
      {
        "question": "Explain why recursion needs a base case",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Without a base case, the function would keep calling itself indefinitely, eventually causing a stack overflow as each call uses more memory"
        ],
        "topic": "Programming Techniques"
      },
      {
        "question": "Write pseudocode for a recursive function to calculate the factorial of n",
        "marks": 2,
        "markScheme": [
          "Standard recursive pattern with a base case",
          "Final answer: FUNCTION factorial(n)\n  IF n<=1 THEN RETURN 1\n  ELSE RETURN n*factorial(n-1)\n  ENDIF\nENDFUNCTION"
        ],
        "topic": "Programming Techniques"
      },
      {
        "question": "Explain one advantage of using a local variable rather than a global variable",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Avoids naming conflicts and unintended side-effects elsewhere in the program, making the code easier to understand, test and debug"
        ],
        "topic": "Programming Techniques"
      },
      {
        "question": "Explain the benefit of passing a large array by reference rather than by value to a subroutine",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Avoids copying the entire (potentially large) array into memory, saving time and memory, and allows the subroutine to directly modify the original array if needed"
        ],
        "topic": "Programming Techniques"
      },
      {
        "question": "Describe how a breakpoint helps when debugging a program",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Pauses program execution at a chosen line, allowing the programmer to inspect the current values of variables and the overall program state at that point"
        ],
        "topic": "Programming Techniques"
      },
      {
        "question": "Explain why exception handling is used instead of letting a runtime error crash the program",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Allows the program to detect and gracefully respond to an error (e.g. displaying a helpful message or trying an alternative action) instead of crashing unexpectedly, improving robustness and user experience"
        ],
        "topic": "Programming Techniques"
      },
      {
        "question": "Write pseudocode for a FOR loop that outputs the numbers 1 to 10",
        "marks": 2,
        "markScheme": [
          "Standard count-controlled loop",
          "Final answer: FOR i = 1 TO 10\n  OUTPUT i\nNEXT i"
        ],
        "topic": "Programming Techniques"
      },
      {
        "question": "Trace through the recursive calls made by factorial(3), showing the return values as the recursion unwinds",
        "marks": 2,
        "markScheme": [
          "Recursive trace",
          "Final answer: factorial(3) calls factorial(2) calls factorial(1) which returns 1 (base case); factorial(2) returns 2×1=2; factorial(3) returns 3×2=6"
        ],
        "topic": "Programming Techniques"
      },
      {
        "question": "Explain why a program should always close a file after reading from or writing to it",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Failing to close a file can leave it locked for other programs, waste system resources, and risk data not being fully written/saved to disk"
        ],
        "topic": "Programming Techniques"
      },
      {
        "question": "Write pseudocode using a try/except structure to safely divide two numbers, handling a division by zero error",
        "marks": 2,
        "markScheme": [
          "Applied exception handling structure",
          "Final answer: TRY\n  result = a / b\n  OUTPUT result\nEXCEPT\n  OUTPUT \"Cannot divide by zero\"\nENDTRY"
        ],
        "topic": "Programming Techniques"
      },
      {
        "question": "Trace this code and state the final value of total:\nFOR i = 1 TO 5\n  total = total + i\nNEXT i\n(total starts at 0)",
        "marks": 2,
        "markScheme": [
          "total = 0+1+2+3+4+5 = 15",
          "Final answer: 15"
        ],
        "topic": "Programming Techniques"
      },
      {
        "question": "Trace this code and state what is output:\nPROCEDURE test(BYVAL x)\n  x = x + 10\nENDPROCEDURE\nn = 5\ntest(n)\nOUTPUT n",
        "marks": 2,
        "markScheme": [
          "Passed by value, so the change inside the procedure does not affect the original n",
          "Final answer: 5"
        ],
        "topic": "Programming Techniques"
      },
      {
        "question": "Trace this code and state what is output:\nPROCEDURE test(BYREF x)\n  x = x + 10\nENDPROCEDURE\nn = 5\ntest(n)\nOUTPUT n",
        "marks": 2,
        "markScheme": [
          "Passed by reference, so the change inside the procedure DOES affect the original n",
          "Final answer: 15"
        ],
        "topic": "Programming Techniques"
      },
      {
        "question": "Trace this code and give the final array contents:\narr = [3, 1, 4]\nFOR i = 0 TO 2\n  arr[i] = arr[i] * 2\nNEXT i",
        "marks": 2,
        "markScheme": [
          "Each element is doubled in place",
          "Final answer: [6, 2, 8]"
        ],
        "topic": "Programming Techniques"
      },
      {
        "question": "Explain how backtracking could be used to solve a maze",
        "marks": 2,
        "markScheme": [
          "Applied algorithm description",
          "Final answer: Try a path from the current position; if it leads to a dead end, backtrack to the last junction/decision point and try a different unexplored route, repeating until the exit is found"
        ],
        "topic": "Computational Methods"
      },
      {
        "question": "Explain why a heuristic approach might be chosen for the Travelling Salesman Problem",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Finding the exact optimal solution requires checking a huge number of possible route permutations, which becomes computationally infeasible as the number of cities grows; a heuristic finds a good-enough solution in a reasonable amount of time"
        ],
        "topic": "Computational Methods"
      },
      {
        "question": "Describe how divide and conquer applies to merge sort",
        "marks": 2,
        "markScheme": [
          "Applied explanation",
          "Final answer: The list is repeatedly divided in half (divide) until single elements remain, each is trivially \"sorted\", and the sorted halves are progressively merged back together in order (combine)"
        ],
        "topic": "Computational Methods"
      },
      {
        "question": "Explain the purpose of performance modelling before implementing a new system",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Allows the system's expected behaviour to be tested under a range of conditions without the cost, time or risk of actually building the real system first"
        ],
        "topic": "Computational Methods"
      },
      {
        "question": "Give an example of when data mining might be used by a business",
        "marks": 2,
        "markScheme": [
          "Applied example",
          "Final answer: Analysing large volumes of past sales data to identify purchasing patterns, allowing better-targeted marketing or stock management decisions"
        ],
        "topic": "Computational Methods"
      },
      {
        "question": "Describe how backtracking would solve a Sudoku puzzle",
        "marks": 2,
        "markScheme": [
          "Applied algorithm description",
          "Final answer: Try placing the smallest valid number in the next empty cell; if a later cell has no valid number available, backtrack to the previous cell and try the next valid option there, repeating until the whole grid is correctly filled"
        ],
        "topic": "Computational Methods"
      },
      {
        "question": "Explain the benefit of visualisation as a computational method when analysing a large dataset",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Presents complex data graphically (e.g. as charts or diagrams), making patterns, trends, and anomalies far easier for a human to spot than by examining raw numerical data directly"
        ],
        "topic": "Computational Methods"
      },
      {
        "question": "Explain the benefit of encapsulation in OOP",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Protects an object's internal data from unintended or invalid external modification, since access is controlled through defined methods, improving reliability and making code easier to maintain"
        ],
        "topic": "Programming Paradigms"
      },
      {
        "question": "Explain how inheritance promotes code reuse",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: A subclass automatically gains the attributes and methods of its superclass, so shared functionality does not need to be rewritten for every related class"
        ],
        "topic": "Programming Paradigms"
      },
      {
        "question": "Describe an example of polymorphism",
        "marks": 2,
        "markScheme": [
          "Applied example",
          "Final answer: A \"speak\" method defined differently in a Dog class (returns \"Woof\") and a Cat class (returns \"Meow\"), but both can be called the same way through a shared Animal interface/superclass"
        ],
        "topic": "Programming Paradigms"
      },
      {
        "question": "Compare procedural and object-oriented programming for a large software project",
        "marks": 2,
        "markScheme": [
          "Compare and contrast",
          "Final answer: OOP better models real-world entities and promotes modularity and reuse through classes, making it easier to manage as complexity grows; procedural programming keeps data and functions separate, which can become harder to manage and maintain in large projects"
        ],
        "topic": "Programming Paradigms"
      },
      {
        "question": "Explain how declarative programming differs from procedural programming",
        "marks": 2,
        "markScheme": [
          "Compare and contrast",
          "Final answer: Declarative programming specifies WHAT the desired outcome should be, using facts and rules, and leaves the HOW to the underlying system; procedural programming explicitly specifies each step needed to achieve the outcome"
        ],
        "topic": "Programming Paradigms"
      },
      {
        "question": "Explain why OOP is well suited to modelling a simulation involving many different types of real-world entities",
        "marks": 2,
        "markScheme": [
          "Applied reasoning",
          "Final answer: Each entity type can be represented as its own class with relevant attributes/methods, and shared behaviour can be inherited from common superclasses, closely mirroring the real-world relationships being simulated"
        ],
        "topic": "Programming Paradigms"
      },
      {
        "question": "Explain the difference between method overriding and method overloading",
        "marks": 2,
        "markScheme": [
          "Compare and contrast",
          "Final answer: Overriding is when a subclass replaces a superclass's method with its own version (same name, same parameters, different implementation); overloading is when a class has multiple methods with the same name but different parameters"
        ],
        "topic": "Programming Paradigms"
      },
      {
        "question": "Explain why a private attribute cannot be directly changed from outside its class",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Encapsulation restricts access to private attributes to only within the class itself, forcing any external code to go through defined public methods (e.g. a \"setter\"), which can validate the change before applying it"
        ],
        "topic": "Programming Paradigms"
      },
      {
        "question": "Describe the purpose of the analysis stage in the systems life cycle",
        "marks": 2,
        "markScheme": [
          "Descriptive recall",
          "Final answer: To understand the problem, investigate the current system's strengths and weaknesses, and gather clear requirements for the new system"
        ],
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "question": "Explain the difference between corrective, adaptive and perfective maintenance",
        "marks": 2,
        "markScheme": [
          "Compare and contrast",
          "Final answer: Corrective maintenance fixes bugs/errors; adaptive maintenance updates the system to work in a new environment (e.g. new OS); perfective maintenance improves the system or adds new features"
        ],
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "question": "Describe what a UML class diagram would show for a \"Car\" class",
        "marks": 2,
        "markScheme": [
          "Applied example",
          "Final answer: The class name \"Car\", its attributes (e.g. colour, speed, fuelLevel), and its methods (e.g. accelerate(), brake())"
        ],
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "question": "Explain why iterative testing throughout development is beneficial rather than only testing at the very end",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Catches errors earlier in the process, when they are cheaper and easier to fix, rather than allowing them to compound and become more expensive/complex to resolve in later stages"
        ],
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "question": "Explain the purpose of a structure chart",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Visually shows how a program is broken down into smaller modules/subroutines and the hierarchy and calling relationships between them"
        ],
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "question": "Explain why gathering requirements accurately during analysis is critical to a project's success",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Errors or gaps in the requirements gathered will propagate through every later stage, potentially resulting in a finished system that does not actually solve the client's real problem"
        ],
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "question": "A form accepts a percentage from 0 to 100. State suitable normal, boundary and erroneous test values",
        "marks": 2,
        "markScheme": [
          "Applied test data selection",
          "Final answer: Normal: 50. Boundary: 0 and 100 (valid), -1 and 101 (invalid). Erroneous: \"fifty\" (non-numeric)"
        ],
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "question": "Explain why testing with only normal data is insufficient for a robust system",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: It fails to check how the system behaves with edge cases or invalid input, which could cause crashes or incorrect behaviour in real use that normal-data testing alone would never reveal"
        ],
        "topic": "Analysis and Design (Systems Life Cycle)"
      },
      {
        "question": "Explain how the Computer Misuse Act might apply to a student guessing a teacher's password to view school systems, even if they cause no damage",
        "marks": 2,
        "markScheme": [
          "Applied legal reasoning",
          "Final answer: This constitutes unauthorised access to a computer system, which is an offence under the Act regardless of whether any damage is caused or data is changed"
        ],
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "question": "Explain one right an individual has under GDPR and why it matters",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: The right to request erasure (\"right to be forgotten\") allows individuals to have their personal data deleted, giving them greater control over their digital footprint and privacy"
        ],
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "question": "Discuss one advantage and one disadvantage of open source software for a business",
        "marks": 2,
        "markScheme": [
          "Discussion with both sides",
          "Final answer: Advantage: free to use and modify, with community support and transparency. Disadvantage: potentially less guaranteed official support, and security patches may be slower or less consistent than a paid proprietary product"
        ],
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "question": "Explain one way increased automation could negatively impact society",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Job losses in roles that become automated, particularly affecting workers who may need significant retraining or support to move into new types of employment"
        ],
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "question": "Discuss the ethical implications of using AI in recruitment decisions",
        "marks": 2,
        "markScheme": [
          "Discussion",
          "Final answer: There is a risk of algorithmic bias reproducing or amplifying existing discrimination present in historical training data (e.g. under-representing certain groups), and a lack of transparency in explaining exactly why a candidate was rejected, which can undermine fairness and accountability"
        ],
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "question": "Explain what is meant by the \"digital divide\" and give one cause",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation with example",
          "Final answer: Unequal access to computing technology and the internet across different groups in society; one cause is geographic location, such as poor rural broadband infrastructure compared to urban areas"
        ],
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "question": "Explain why software piracy is both a legal and ethical issue",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Legally, it breaches the Copyright, Designs and Patents Act by distributing/using software without the creator's permission; ethically, it deprives developers of fair compensation for their work"
        ],
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "question": "An employee copies a customer database to a personal USB drive without permission to sell to a competitor. Identify two laws this could breach and explain why",
        "marks": 2,
        "markScheme": [
          "Applied multi-law legal reasoning",
          "Final answer: The Computer Misuse Act — unauthorised access/copying of data with intent to commit a further offence; and the Data Protection Act/GDPR — processing and sharing personal customer data without a lawful basis or consent"
        ],
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      },
      {
        "question": "Explain why cultural considerations matter when designing software for an international audience",
        "marks": 2,
        "markScheme": [
          "Conceptual explanation",
          "Final answer: Symbols, colours, date formats and language carry different meanings/conventions across cultures, so a design that works well in one region could confuse, mislead, or even offend users elsewhere, harming usability and reputation"
        ],
        "topic": "Legal, Moral, Cultural and Ethical Issues"
      }
    ],
    "groups": [
      {
        "label": "Component 1: Computer Systems",
        "subgroups": [
          {
            "label": "1.1 The Processor & Hardware",
            "topics": [
              "Structure and Function of the Processor",
              "Types of Processor",
              "Input, Output and Storage"
            ]
          },
          {
            "label": "1.2 Software",
            "topics": [
              "Systems Software",
              "Applications Generation (Translators)",
              "Software Development Methodologies"
            ]
          },
          {
            "label": "1.3 Exchanging Data",
            "topics": [
              "Compression, Encryption and Hashing",
              "Databases",
              "Networks",
              "Web Technologies"
            ]
          },
          {
            "label": "1.4 Data Types, Structures & Algorithms",
            "topics": [
              "Data Types and Number Representation",
              "Data Structures",
              "Boolean Algebra",
              "Algorithms: Searching, Sorting & Graph Traversal"
            ]
          }
        ]
      },
      {
        "label": "Component 2: Algorithms and Programming",
        "subgroups": [
          {
            "label": "2.1 Computational Thinking",
            "topics": [
              "Elements of Computational Thinking"
            ]
          },
          {
            "label": "2.2 Programming & Design",
            "topics": [
              "Programming Techniques",
              "Computational Methods",
              "Programming Paradigms",
              "Analysis and Design (Systems Life Cycle)"
            ]
          },
          {
            "label": "2.3 Legal, Moral & Ethical Issues",
            "topics": [
              "Legal, Moral, Cultural and Ethical Issues"
            ]
          }
        ]
      }
    ]
  }
]
