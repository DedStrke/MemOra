/*
  PREVIOUS notes for 1.1.1 Structure and Function of the Processor and
  1.1.2 Types of Processor, moved here on 2026-09-21 when the chapters
  were replaced by Mudassir's own notes (src/constants/cs-notes-processor.js).

  Kept for the specification gap check only - not imported by the app.
  Three layers, in the order the app used to merge them:

    1. base chapters      (was src/constants/cs-notes-comp1.js)
    2. extended-response  (was src/constants/cs-notes-extra.js, appended)
    3. second depth pass  (was src/constants/cs-notes-depth-2.js, appended)

  Source kept verbatim so any block can be pasted back if the spec needs it.
*/

import { h, p, ul, rule, method, worked, pitfalls, diagram, tip, table, chapter } from '../../src/constants/maths-notes-build'

/* ============================================================ */
/* 1. BASE CHAPTERS (from cs-notes-comp1.js)                     */
/* ============================================================ */

/* ================================================ THE PROCESSOR */

const processor = chapter(
  rule('Von Neumann architecture', 'Instructions AND data are stored in the SAME memory, and are fetched over the same bus.'),
  rule('Harvard architecture', 'Instructions and data are stored in SEPARATE memories with separate buses, so both can be fetched simultaneously. Used in embedded systems and DSPs.'),
  diagram('von-neumann'),
  h('Components of the CPU'),
  table(
    ['Component', 'Function'],
    [
      ['ALU', 'Performs arithmetic and logical operations; holds the accumulator'],
      ['Control Unit', 'Decodes instructions and sends control signals to coordinate the other components'],
      ['Registers', 'Very fast, very small storage inside the CPU'],
      ['Cache', 'Small fast memory holding recently and frequently used data, to reduce trips to RAM'],
      ['Buses', 'Address (one-way, carries the location), Data (two-way, carries the value), Control (carries signals)'],
    ],
  ),
  h('The special purpose registers'),
  table(
    ['Register', 'Holds'],
    [
      ['PC - Program Counter', 'The ADDRESS of the next instruction'],
      ['MAR - Memory Address Register', 'The address currently being read from or written to'],
      ['MDR - Memory Data Register', 'The data just fetched, or about to be written'],
      ['CIR - Current Instruction Register', 'The instruction currently being decoded and executed'],
      ['ACC - Accumulator', 'The result of ALU calculations'],
    ],
  ),
  h('The fetch–decode–execute cycle'),
  method('One full cycle', [
    'The address in the PC is copied to the MAR.',
    'The PC is INCREMENTED, ready for the next instruction.',
    'The instruction at the MAR address is fetched along the data bus into the MDR.',
    'The instruction is copied from the MDR into the CIR.',
    'The control unit DECODES the instruction in the CIR.',
    'The instruction is EXECUTED, with any result placed in the accumulator.',
    'The cycle repeats. Interrupts are checked at the END of the cycle.',
  ]),
  diagram('fetch-decode-execute'),
  h('What affects CPU performance'),
  table(
    ['Factor', 'Effect'],
    [
      ['Clock speed', 'More cycles per second, so more instructions per second - but only for sequential work'],
      ['Number of cores', 'Genuine parallel execution, but only if the task can be divided (Amdahl’s law)'],
      ['Cache size and level', 'A cache miss costs far more cycles than the instruction itself, so cache often matters more than clock speed'],
      ['Word length and bus width', 'Wider buses move more data per cycle'],
      ['Pipelining', 'Overlaps fetch, decode and execute so throughput rises without raising clock speed'],
    ],
  ),
  tip(
    'For "which processor is better" questions, never answer on clock speed alone. Bring in whether the workload is parallelisable, the cache, and the fact that a branch flushes the pipeline. That is the difference between Level 2 and Level 3.',
  ),
  pitfalls([
    'The PC holds an ADDRESS, the CIR holds an INSTRUCTION, the MDR holds DATA. Mixing them up is the standard error.',
    'The PC is incremented DURING the fetch, not after the execute - otherwise a jump instruction would not work.',
    'Interrupts are checked at the END of the cycle, not during it.',
    'The address bus is one-way; the data bus is two-way. Questions test this directly.',
  ]),
)

/* =============================================== TYPES OF PROCESSOR */

const processorTypes = chapter(
  table(
    ['Type', 'Characteristics'],
    [
      ['CISC', 'Complex Instruction Set - many specialised instructions, each may take several cycles. Simpler compiler, more complex hardware. Used in desktop x86.'],
      ['RISC', 'Reduced Instruction Set - few simple instructions, each one cycle. More complex compiler, simpler hardware, makes greater use of registers, easier to pipeline. Used in ARM and mobile.'],
    ],
  ),
  h('GPUs'),
  p(
    'A GPU (Graphics Processing Unit) contains a large number of simple processing units that carry out many similar calculations at the same time, rather than the small number of powerful cores a CPU has. A CPU suits a wide range of general-purpose tasks; a GPU is particularly effective when a task can be split into many similar calculations run in parallel. A GPU is not automatically faster than a CPU - its performance advantage depends entirely on whether the task is suitable for parallel processing.',
  ),
  ul([
    'Graphics uses: rendering 2D and 3D graphics, computer games, animation, image processing, video processing.',
    'Non-graphics uses: artificial intelligence and machine learning, scientific modelling and simulations, processing large amounts of data, general mathematical calculations.',
  ]),
  h('Multicore processors'),
  p(
    'A multicore processor contains two or more processing cores within the same CPU (e.g. dual-core, quad-core, eight-core), each capable of processing instructions, so more than one task or part of a task can potentially run at the same time. Having twice as many cores does not necessarily mean a program runs twice as fast - the software itself must be designed to make use of the additional cores.',
  ),
  h('Pipelining'),
  diagram('pipelining'),
  p(
    'While one instruction is executing, the next can be decoded and a third fetched. Once the pipeline is full, one instruction completes per cycle - three instructions take five cycles rather than nine.',
  ),
  p('A BRANCH breaks this: the partly-filled pipeline must be flushed because the wrong instructions were loaded. Branch prediction exists to reduce that cost.'),
  h('Parallel and multicore'),
  table(
    ['Term', 'Meaning'],
    [
      ['Multicore', 'Several complete processors on one chip, each running its own instruction stream'],
      ['Parallel processing', 'Several processors working on the same problem simultaneously'],
      ['SISD / SIMD / MISD / MIMD', 'Flynn’s taxonomy - SIMD applies one instruction to many data items at once, which is how GPUs work'],
      ['Co-processor', 'A specialist chip alongside the CPU - a GPU for graphics, an FPU for floating point'],
    ],
  ),
  tip(
    'Amdahl’s law is the evaluation point for every parallel processing question: the speed-up is capped by the fraction of the program that must run sequentially. If 20% is sequential, sixteen cores can never give more than a fivefold speed-up.',
  ),
  pitfalls([
    'More cores does not mean proportionally faster. Say why: sequential fraction, coordination overhead, and the difficulty of writing correct concurrent code.',
    'Splitting a task and combining the results afterwards is not free - that overhead itself takes time, so a problem too small or too fine-grained to divide efficiently can run slower in parallel than it would running on one core alone.',
    'Not every problem can be split into independent parts: some calculations depend on the result of a previous calculation, and those must stay sequential regardless of how many cores are available.',
    'RISC has FEWER instructions but programs need MORE of them. Both statements are true and both are marked.',
    'Pipelining raises throughput, not the speed of any single instruction.',
  ]),
)


/* ============================================================ */
/* 2. EXTENDED-RESPONSE SUPPLEMENTS (from cs-notes-extra.js)     */
/* ============================================================ */

const processorExtra = chapter(
  h('Extended response: what actually makes a processor faster?'),
  p(
    'Clock speed is the obvious answer and the weakest one. Doubling the clock doubles the number of cycles per second, but only if the processor has work available every cycle. In practice it stalls waiting for memory, so a faster clock spends more cycles idle and the real gain is far below the headline figure. This is why the honest answer names the bottleneck rather than the number.',
  ),
  p(
    'CACHE addresses that bottleneck directly. Level 1 cache runs at processor speed, so a hit costs a cycle or two where a main-memory access costs hundreds. Adding cache therefore raises performance far more than an equivalent increase in clock speed - but only up to a point: larger caches are slower to search, and once the working set fits, more cache adds cost without benefit.',
  ),
  p(
    'More CORES multiply throughput only where the work can be divided. A task that is inherently sequential - each step needing the previous result - gains nothing from a second core, and Amdahl’s law puts a hard ceiling on the speed-up from the fraction that cannot be parallelised. So the judgement is that cores help servers and rendering, and help a single-threaded application very little.',
  ),
  p(
    'WORD LENGTH and BUS WIDTH set how much moves per transfer: a wider data bus fetches more per cycle, and a wider address bus allows more addressable memory. These are usually fixed by the architecture rather than chosen.',
  ),
  tip(
    'Judgement to close on: the limiting factor depends on the WORKLOAD. For a single-threaded application, cache and clock speed dominate. For a server handling many independent requests, core count dominates. Naming the workload is what lifts the answer to Level 3.',
  ),
)

const processorTypesExtra = chapter(
  h('Extended response: RISC or CISC?'),
  p(
    'CISC provides complex instructions that each do a lot, so a program needs fewer instructions and less memory - which mattered enormously when memory was expensive and scarce. The cost is that instructions take differing numbers of cycles, which makes them hard to pipeline, and the decode hardware is complicated and power-hungry.',
  ),
  p(
    'RISC uses a small set of simple, fixed-length instructions that each take roughly one cycle. That regularity is what makes deep PIPELINING practical, and it keeps the chip simple, so it uses less power and generates less heat. The cost is that a program needs more instructions, so it is larger, and more work is pushed onto the compiler.',
  ),
  p(
    'The judgement follows from the constraint that binds. In a phone or embedded device, POWER is the binding constraint - battery life and heat dissipation - so RISC wins, which is why ARM dominates mobile. Where power is not constrained and a vast body of existing software must keep running, backwards compatibility binds instead, which is why x86 persists in desktops. Modern x86 chips in fact decode CISC instructions into RISC-like micro-operations internally, so the distinction is now about the instruction SET presented, not the hardware beneath.',
  ),
  h('GPUs and parallel processing'),
  p(
    'A GPU has thousands of simple cores rather than a few complex ones. It is enormously faster than a CPU at work that applies the SAME operation to many data items - graphics, matrix multiplication, machine learning. It is slower than a CPU at branching, sequential logic, because a divergent branch forces cores to idle. So the answer to "should this run on the GPU" is decided by whether the problem is data-parallel, not by raw core count.',
  ),
)

/* ============================================================ */
/* 3. SECOND DEPTH PASS SUPPLEMENTS (from cs-notes-depth-2.js)   */
/* ============================================================ */

const processorDepth2 = chapter(
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
  h('How this relates to assembly language programs'),
  p(
    'Every line of an assembly program (and every LMC instruction) is exactly one of these fetch-decode-execute cycles. "ADD 30" above is an assembly mnemonic: the operand 30 is the address placed in the MAR, and the opcode ADD is what the control unit decodes from the CIR to choose the ALU operation. Tracing registers for an assembly program IS tracing the FDE cycle instruction by instruction - see the Assembly Language and the Little Man Computer chapter for the full instruction set.',
  ),
  h('Contemporary processing'),
  p(
    'Modern processors combine the classic architecture with features the specification names separately. A multi-core chip has several complete processors sharing a package and usually a shared cache. Pipelining overlaps fetch, decode and execute of consecutive instructions. Multiple levels of cache (L1 per core, L2 per core or pair, L3 shared) sit between registers and RAM. Harvard-style separate instruction and data caches are common inside otherwise von Neumann chips. When asked about "contemporary" architecture, name these and explain that the aim of every one is to keep the processor from waiting on memory.',
  ),
)

const processorTypesDepth2 = chapter(
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

/* Merged exactly as the app used to merge them (base + extra + depth-2). */
export const PREVIOUS_PROCESSOR_NOTES = {
  'Structure and Function of the Processor': processor + processorExtra + processorDepth2,
  'Types of Processor': processorTypes + processorTypesExtra + processorTypesDepth2,
}
