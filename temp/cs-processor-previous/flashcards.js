/*
  PREVIOUS flashcards for 1.1.1 Structure and Function of the Processor and
  1.1.2 Types of Processor, moved here on 2026-09-21 when both chapters were
  replaced by Mudassir's own notes and flashcards
  (src/constants/cs-notes-processor.js, src/constants/cs-flashcards-processor.js).

  Kept for the specification gap check only - not imported by the app.
  91 cards from four sources, each block kept verbatim:

    1. base pack            (was src/constants/library-extra.js, 31 cards)
    2. second content pass  (was src/constants/cs-extra-2.js, 5 cards)
    3. diagram cards        (was src/constants/diagram-cards.js, 2 cards)
    4. fifth batch          (was src/constants/cs-extra-5.js, all 53 cards)
*/

/* ============================================================ */
/* 1. BASE PACK (from library-extra.js)                          */
/* ============================================================ */

export const PREVIOUS_BASE_FLASHCARDS = [
{
  "front": "What does PC stand for and what does it hold?",
  "back": "Program Counter: the address of the next instruction to be fetched",
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
]

/* ============================================================ */
/* 2. SECOND CONTENT PASS (from cs-extra-2.js)                   */
/* ============================================================ */

export const PREVIOUS_EXTRA_2_FLASHCARDS = [
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
]

/* ============================================================ */
/* 3. DIAGRAM CARDS (from diagram-cards.js)                      */
/* ============================================================ */

export const PREVIOUS_DIAGRAM_CARDS = [
  {
    front: 'Draw the Von Neumann architecture.',
    back: 'A CPU (control unit, ALU, registers: PC, MAR, MDR, CIR, ACC) connected to ONE shared memory holding both instructions and data, over the address bus (unidirectional), data bus (bidirectional) and control bus. That shared path is the Von Neumann bottleneck; Harvard separates them.',
    topic: 'Structure and Function of the Processor',
    diagram: 'von-neumann',
  },
  {
    front: 'Draw the fetch-decode-execute cycle and say what happens at each stage.',
    back: 'FETCH: address in PC → MAR, instruction returned to MDR then copied to CIR, PC incremented. DECODE: control unit splits opcode from operand. EXECUTE: ALU performs it, result to the accumulator. Then repeat. Interrupts are checked at the END of the cycle.',
    topic: 'Structure and Function of the Processor',
    diagram: 'fetch-decode-execute',
  },
]

/* ============================================================ */
/* 4. FIFTH BATCH (from cs-extra-5.js, whole file)               */
/* ============================================================ */

const c = (topic, front, back) => ({ topic, front, back })

const CPU = 'Structure and Function of the Processor'
const TYPES = 'Types of Processor'

export const PREVIOUS_EXTRA_5_FLASHCARDS = [
  // ---- Structure and Function of the Processor: architecture
  c(
    CPU,
    'What is Von Neumann architecture?',
    'An architecture where instructions and data are stored in the same memory and fetched over the same bus.',
  ),
  c(
    CPU,
    'What is Harvard architecture, and where is it typically used?',
    'An architecture where instructions and data are stored in separate memories with separate buses, so both can be fetched at the same time. Used in embedded systems and DSPs (digital signal processors).',
  ),

  // ---- Structure and Function of the Processor: components
  c(CPU, 'What does the ALU do?', 'Performs arithmetic and logical operations, and holds the accumulator.'),
  c(
    CPU,
    'What does the Control Unit do?',
    'Decodes instructions and sends the control signals that coordinate the other components of the CPU.',
  ),
  c(
    CPU,
    'What is the role of cache memory in the CPU?',
    'A small, very fast memory that holds recently and frequently used data, reducing the number of trips to RAM.',
  ),

  // ---- Structure and Function of the Processor: buses
  c(
    CPU,
    'What does the address bus carry, and is it one-way or two-way?',
    'The memory location (address) the CPU wants to read from or write to. It is one-way (unidirectional), from the CPU to memory.',
  ),
  c(
    CPU,
    'What does the data bus carry, and is it one-way or two-way?',
    'The actual data value being transferred. It is two-way (bidirectional).',
  ),
  c(
    CPU,
    'What does the control bus carry?',
    'Signals that coordinate the other buses and components, e.g. read, write, clock, interrupt and bus-request signals.',
  ),
  c(
    CPU,
    'If a CPU has a 32-bit address bus, how many memory locations can it address, and why?',
    '2^32 locations (4 GiB) - n address lines can distinguish 2^n different locations.',
  ),
  c(
    CPU,
    'What does the width of the data bus determine?',
    'How many bits can be transferred in a single operation; it is matched to the CPU’s word length.',
  ),

  // ---- Structure and Function of the Processor: special-purpose registers
  c(CPU, 'What does the Program Counter (PC) hold?', 'The address of the NEXT instruction to be fetched.'),
  c(
    CPU,
    'What does the Memory Address Register (MAR) hold?',
    'The address currently being read from or written to in memory.',
  ),
  c(
    CPU,
    'What does the Memory Data Register (MDR) hold?',
    'The data that has just been fetched from memory, or that is about to be written to it.',
  ),
  c(
    CPU,
    'What does the Current Instruction Register (CIR) hold?',
    'The instruction currently being decoded and executed.',
  ),
  c(CPU, 'What does the Accumulator (ACC) hold?', 'The result of calculations performed by the ALU.'),

  // ---- Structure and Function of the Processor: the FDE cycle
  c(
    CPU,
    'List the six steps of the fetch-decode-execute cycle in order, using register names.',
    '1) The address in the PC is copied to the MAR. 2) The PC is incremented. 3) The instruction at that address is fetched along the data bus into the MDR. 4) The MDR is copied into the CIR. 5) The control unit decodes the instruction in the CIR. 6) The instruction is executed, with any result placed in the ACC.',
  ),
  c(
    CPU,
    'At what point in the fetch-decode-execute cycle is the Program Counter incremented, and why does the timing matter?',
    'During the FETCH stage, straight after the PC is copied to the MAR - not after execute. If it were incremented after execute instead, a jump/branch instruction that changes the PC during execute would be overwritten by the increment.',
  ),
  c(
    CPU,
    'When in the fetch-decode-execute cycle are interrupts checked?',
    'At the END of the cycle, after the current instruction has fully executed - never during it.',
  ),
  c(
    CPU,
    'Trace the registers: PC = 12 holds the instruction ADD 30. Address 30 holds 7 and the accumulator holds 5. What are the PC and ACC after this instruction runs?',
    'PC = 13 (incremented during fetch, ready for the next instruction). ACC = 12 (5 + 7, the value at address 30 added to the previous accumulator contents).',
  ),

  // ---- Structure and Function of the Processor: performance
  c(
    CPU,
    'Name four factors that affect CPU performance.',
    'Any four of: clock speed, number of cores, cache size and level, word length/bus width, and pipelining.',
  ),
  c(
    CPU,
    'Why doesn’t doubling the clock speed simply double a CPU’s real-world performance?',
    'The processor still has to stall waiting for memory, so a faster clock just spends more cycles idle - the real gain is well below the headline figure.',
  ),
  c(
    CPU,
    'Why does adding more cache often improve performance more than an equivalent rise in clock speed?',
    'A cache HIT costs only a cycle or two, whereas a main-memory access costs hundreds of cycles, so more cache cuts down on the far more expensive trips to RAM.',
  ),
  c(
    CPU,
    'Why doesn’t doubling the number of cores double performance for every program?',
    'Extra cores only help if the workload can be divided between them. A sequential task, where each step depends on the previous result, gains nothing from a second core.',
  ),
  c(
    CPU,
    'What does pipelining do to CPU throughput, and at what cost of clock speed?',
    'It overlaps the fetch, decode and execute stages of consecutive instructions so throughput rises WITHOUT raising the clock speed at all.',
  ),
  c(
    CPU,
    'For a single-threaded application, which two performance factors matter most? For a server handling many independent requests?',
    'Cache and clock speed dominate for a single-threaded application; core count dominates for a server handling many independent requests.',
  ),

  // ---- Structure and Function of the Processor: contemporary processors
  c(
    CPU,
    'Name three features of "contemporary" processor architecture beyond the basic Von Neumann model.',
    'Any three of: multiple cores sharing a package/cache, pipelining, multiple levels of cache (L1 per core, L2 per core or pair, L3 shared), and Harvard-style separate instruction/data caches inside an otherwise Von Neumann chip.',
  ),
  c(
    CPU,
    'What is the shared aim of multi-core design, pipelining and multi-level cache in a contemporary processor?',
    'To keep the processor from waiting (idling) on memory.',
  ),

  // ---- Types of Processor: CISC vs RISC
  c(
    TYPES,
    'What kind of instruction set does CISC (Complex Instruction Set Computer) use?',
    'A large set of complex, specialised instructions, where each instruction may take several clock cycles to execute.',
  ),
  c(
    TYPES,
    'What kind of instruction set does RISC (Reduced Instruction Set Computer) use?',
    'A small set of simple instructions that each typically take one clock cycle.',
  ),
  c(
    TYPES,
    'Which needs the simpler compiler, CISC or RISC? Which needs the simpler hardware?',
    'CISC needs the simpler compiler (its hardware does more work per instruction). RISC needs the simpler hardware (its compiler does more work, generating more instructions).',
  ),
  c(
    TYPES,
    'Why is RISC easier to pipeline than CISC?',
    'Its instructions are simple and take a uniform, regular number of cycles, which makes overlapping fetch, decode and execute for consecutive instructions straightforward.',
  ),
  c(
    TYPES,
    'Which architecture is typically used in desktop x86 processors, and which in ARM and mobile processors?',
    'CISC in desktop x86 processors; RISC in ARM and mobile devices.',
  ),
  c(
    TYPES,
    'True or false: a RISC program needs fewer instructions overall than an equivalent CISC program.',
    'False. RISC has fewer TYPES of instruction, but because each one does less, a RISC program needs MORE instructions overall to do the same job.',
  ),
  c(
    TYPES,
    'Why do modern x86 processors blur the CISC/RISC distinction?',
    'They internally decode CISC instructions into RISC-like micro-operations before executing them, so the distinction is now about the instruction set presented to the programmer, not the hardware underneath.',
  ),
  c(
    TYPES,
    'Why does RISC tend to suit a power-constrained device like a phone better than CISC?',
    'Its simpler hardware uses less power and generates less heat, which matters where battery life and heat dissipation are the binding constraint.',
  ),

  // ---- Types of Processor: GPUs
  c(
    TYPES,
    'What is a GPU (Graphics Processing Unit)?',
    'A processor containing a large number of simple processing units that carry out many similar calculations at the same time, rather than the small number of powerful cores a CPU has.',
  ),
  c(
    TYPES,
    'Give two graphics uses of a GPU.',
    'Any two of: rendering 2D/3D graphics, computer games, animation, image processing, video processing.',
  ),
  c(
    TYPES,
    'Give two non-graphics uses of a GPU.',
    'Any two of: artificial intelligence and machine learning, scientific modelling and simulations, processing large amounts of data, general mathematical calculations.',
  ),
  c(
    TYPES,
    'Is a GPU always faster than a CPU?',
    'No. Its performance advantage depends entirely on whether the task is suitable for parallel (data-parallel) processing; it is slower than a CPU at branching or sequential logic, because a divergent branch forces its cores to idle.',
  ),

  // ---- Types of Processor: multicore and pipelining
  c(
    TYPES,
    'What is a multicore processor?',
    'A processor containing two or more complete processing cores within the same CPU (e.g. dual-core, quad-core), each capable of processing instructions.',
  ),
  c(
    TYPES,
    'Does doubling the number of cores in a multicore processor double a program’s speed?',
    'Not necessarily - the software itself must be designed to make use of the additional cores.',
  ),
  c(
    TYPES,
    'What does pipelining let the CPU do, once the pipeline is full?',
    'Complete one instruction per cycle, because while one instruction executes, the next is being decoded and a third is being fetched.',
  ),
  c(
    TYPES,
    'What breaks a pipeline, and what technique reduces the cost of this?',
    'A branch instruction, because the partly-filled pipeline must be flushed (the wrong instructions were loaded). Branch prediction exists to reduce this cost.',
  ),

  // ---- Types of Processor: Flynn's taxonomy
  c(
    TYPES,
    'What does SISD stand for in Flynn’s taxonomy, and what does it describe?',
    'Single Instruction, Single Data - a traditional, non-parallel processor executing one instruction on one data item at a time.',
  ),
  c(
    TYPES,
    'What does SIMD stand for, and which hardware is it associated with?',
    'Single Instruction, Multiple Data - one instruction applied to many data items at once. This is how GPUs work.',
  ),
  c(
    TYPES,
    'What does MIMD stand for, and where would you find it?',
    'Multiple Instruction, Multiple Data - independent processors each running their own instructions on their own data, as in a multicore or distributed system.',
  ),

  // ---- Types of Processor: parallel processing and Amdahl's law
  c(
    TYPES,
    'What is distributed (cluster) computing?',
    'Many separate computers cooperating over a network to solve a problem, e.g. supercomputers, cloud services and large simulations.',
  ),
  c(
    TYPES,
    'What is the difference between "multicore" and "parallel processing" as terms?',
    'Multicore describes several complete processors on ONE chip, each running its own instruction stream. Parallel processing describes several processors working on the SAME problem at the same time, which may or may not be on one chip.',
  ),
  c(
    TYPES,
    'Give three examples of a co-processor.',
    'Any three of: a GPU (graphics), an FPU (floating-point arithmetic), a chip dedicated to encryption, and a neural processing unit, NPU (machine learning).',
  ),
  c(
    TYPES,
    'What does Amdahl’s law state, in simple terms?',
    'The speed-up gained from adding more processors/cores is capped by the fraction of the program that must run sequentially.',
  ),
  c(
    TYPES,
    'If 20% of a program must run sequentially, what is the maximum possible speed-up from adding cores, however many are added?',
    'A fivefold (5x) speed-up. The sequential 20% puts a hard ceiling on the benefit of parallel processing, no matter how many cores are used.',
  ),
  c(
    TYPES,
    'Why might splitting a task across multiple cores and then combining the results sometimes make a program run SLOWER, not faster?',
    'Dividing the task and combining the results afterwards is itself overhead that takes time. For a problem too small, or too fine-grained to divide efficiently, this overhead can outweigh the benefit of running in parallel.',
  ),
  c(
    TYPES,
    'Why can’t every problem be split across multiple cores?',
    'Some calculations depend on the result of a previous calculation, so those steps must run sequentially regardless of how many cores are available.',
  ),
]

export const PREVIOUS_PROCESSOR_FLASHCARDS = [
  ...PREVIOUS_BASE_FLASHCARDS,
  ...PREVIOUS_EXTRA_2_FLASHCARDS,
  ...PREVIOUS_DIAGRAM_CARDS,
  ...PREVIOUS_EXTRA_5_FLASHCARDS,
]
