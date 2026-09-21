/*
  OCR H446 Computer Science, 1.1.1 Structure and Function of the Processor
  and 1.1.2 Types of Processor.

  These are Mudassir's own notes, transcribed as written: every statement
  in the source notes is here. They replace the builder-authored chapters
  that used to live in cs-notes-comp1.js (plus the supplements
  cs-notes-extra.js and cs-notes-depth-2.js appended), which are parked in
  temp/cs-processor-previous/.

  The notes were then checked statement by statement against the H446
  specification (1.1.1 a-e, 1.1.2 a-c). Two blocks were pulled back from
  the parked chapters because the spec names them and the notes did not
  yet cover them - the ADD 30 register trace (1.1.1(b), "including its
  effects on registers") and the assembly-language paragraph (1.1.1(a),
  "how this relates to assembly language programs"). Both are marked
  inline. Everything else in the parked chapters goes beyond the spec
  wording and was left out.

  Same builders as the other chapters (maths-notes-build.js), so the
  rendering matches. The diagram() markers only place the app's existing
  diagrams beside the passage they illustrate - they add no text.
  No em dashes.
*/

import { h, p, ul, rule, method, worked, diagram, table, chapter } from './maths-notes-build'

/* ============================ 1.1.1 STRUCTURE AND FUNCTION OF THE PROCESSOR */

const processor = chapter(
  h('CPU components'),
  rule('ALU', 'The Arithmetic Logic Unit carries out arithmetic calculations, logical operations and comparisons.'),
  rule(
    'Control Unit',
    'The Control Unit manages the operation of the processor. It decodes instructions and sends control signals to other parts of the computer.',
  ),
  p('*Registers*'),
  ul([
    '*PC (Program Counter)*: stores the address of the next instruction to be fetched.',
    '*MAR (Memory Address Register)*: stores the address of the memory location currently being accessed.',
    '*MDR (Memory Data Register)*: stores data or instructions being transferred to or from memory.',
    '*CIR (Current Instruction Register)*: stores the instruction currently being decoded or executed.',
    '*ACC (Accumulator)*: stores intermediate results from calculations.',
  ]),
  p('*Buses*'),
  ul([
    '*Address bus*: carries memory addresses. Usually travels from the CPU to memory.',
    '*Data bus*: carries data and instructions between the CPU and memory. It is bidirectional.',
    '*Control bus*: carries control signals such as read, write, clock and interrupt signals.',
  ]),
  p('Assembly language instructions make use of the registers, buses and ALU when instructions are being carried out.'),

  h('The fetch-decode-execute cycle'),
  method('Fetch', [
    'The address in the PC is copied to the MAR.',
    'The address is sent to memory using the address bus.',
    'The Control Unit sends a read signal.',
    'The instruction is transferred from memory to the MDR.',
    'The instruction is copied to the CIR.',
    'The PC is incremented.',
  ]),
  rule('Decode', 'The Control Unit decodes the instruction in the CIR and works out what operation needs to be carried out.'),
  p('The instruction may contain:'),
  ul([
    'an *opcode*, which tells the processor what operation to perform',
    'an *operand*, which gives the data or address to be used',
  ]),
  rule('Execute', 'The instruction is carried out. This may involve the ALU, registers or memory.'),
  p('A branch instruction may change the value stored in the PC.'),
  /* Spec gap-closer, from temp/cs-processor-previous/notes.js: 1.1.1(b)
     asks for the cycle "including its effects on registers", which is
     examined as a register trace. Reordered so the PC increment lands
     where the fetch steps above put it. */
  worked(
    'Trace the registers while the instruction at address 12, ADD 30, is fetched and executed. Address 30 holds 7 and the accumulator holds 5.',
    [
      'PC = 12. The address in the PC is copied to the MAR: MAR = 12.',
      'The address 12 is sent to memory along the address bus, and the Control Unit sends a read signal.',
      'The instruction at address 12 is transferred from memory to the MDR: MDR = ADD 30.',
      'The instruction is copied to the CIR: CIR = ADD 30.',
      'The PC is incremented: PC = 13.',
      'Decode: the Control Unit decodes ADD 30 in the CIR. The opcode is ADD (add to the accumulator) and the operand is 30 (the address of the data).',
      'Execute: the operand address is placed in the MAR: MAR = 30. The value 7 is read from address 30 into the MDR: MDR = 7.',
      'The ALU adds it to the accumulator: ACC = 5 + 7 = 12. The cycle ends and the next fetch starts from PC = 13.',
    ],
  ),
  diagram('fetch-decode-execute'),

  /* Spec gap-closer, from temp/cs-processor-previous/notes.js: 1.1.1(a)
     ends "how this relates to assembly language programs". */
  h('How this relates to assembly language programs'),
  p(
    'Every line of an assembly language program (and every LMC instruction) is exactly one of these fetch-decode-execute cycles. ADD 30 above is an assembly language mnemonic: the operand 30 is the address placed in the MAR, and the opcode ADD is what the Control Unit decodes from the CIR to choose the ALU operation. Tracing the registers for an assembly language program is tracing the fetch-decode-execute cycle instruction by instruction. See the Assembly Language and the Little Man Computer chapter for the full instruction set.',
  ),

  h('Factors affecting CPU performance'),
  rule('Clock speed', 'Clock speed is the number of clock cycles completed each second and is measured in Hz.'),
  p(
    'A higher clock speed can allow more processing to take place in a given amount of time. Higher clock speeds can also produce more heat and use more power.',
  ),
  rule('Number of cores', 'A processor can contain more than one core.'),
  p(
    'More cores allow the processor to carry out more work at the same time, but this depends on whether the software has been designed to make use of multiple cores.',
  ),
  rule('Cache', 'Cache is a small amount of very fast memory located close to the CPU.'),
  p(
    'It stores frequently or recently used instructions and data so that the processor does not have to access slower main memory as often.',
  ),

  h('Pipelining'),
  p('Pipelining allows different stages of the fetch-decode-execute cycle to take place at the same time for different instructions.'),
  p('For example, while one instruction is being executed, another can be decoded and another can be fetched.'),
  ul([
    'The main advantage is that it increases the number of instructions that can be processed in a given amount of time.',
    'It does not necessarily make one individual instruction faster.',
    'Branch instructions can reduce the effectiveness of pipelining because instructions that have already been fetched may need to be discarded.',
  ]),
  diagram('pipelining'),

  h('Von Neumann architecture'),
  ul([
    'Instructions and data are stored in the same memory.',
    'Instructions and data use the same buses.',
    'It uses the stored program concept.',
    'It can suffer from the Von Neumann bottleneck.',
  ]),
  p(
    'The Von Neumann bottleneck happens because instructions and data share the same communication pathways between the processor and memory.',
  ),
  diagram('von-neumann'),

  h('Harvard architecture'),
  ul([
    'Instructions and data are stored in separate memories.',
    'Instructions and data use separate buses.',
    'The processor can access instructions and data at the same time.',
  ]),
  p('This can improve performance compared with a Von Neumann system.'),

  h('Contemporary processor architecture'),
  p('Modern processors often use features of both Von Neumann and Harvard architecture.'),
  p('Main memory may store both instructions and data, while the processor may have separate instruction and data caches.'),
  p(
    'This gives the flexibility of Von Neumann architecture while also gaining some of the performance benefits of Harvard architecture.',
  ),

  h('Key things to remember'),
  ul([
    'PC stores the address of the next instruction.',
    'MAR stores a memory address.',
    'MDR stores data being transferred.',
    'CIR stores the current instruction.',
    'ACC stores intermediate results.',
    'Clock speed, cores and cache affect CPU performance.',
    'Pipelining improves instruction throughput.',
    'Von Neumann uses shared memory for instructions and data.',
    'Harvard keeps instructions and data separate.',
  ]),
)

/* ============================================ 1.1.2 TYPES OF PROCESSOR */

const processorTypes = chapter(
  h('CISC and RISC processors'),
  rule('CISC', 'CISC stands for Complex Instruction Set Computer.'),
  ul([
    'Has a large instruction set.',
    'Instructions can be more complex.',
    'Instructions can be different lengths.',
    'A single instruction may perform several operations.',
    'Complex instructions may take several clock cycles to complete.',
    'Fewer instructions may be needed to complete a task.',
    'The control circuitry is more complex.',
    'CISC processors are commonly associated with general-purpose desktop and laptop computers.',
  ]),
  rule('RISC', 'RISC stands for Reduced Instruction Set Computer.'),
  ul([
    'Has a smaller instruction set.',
    'Instructions are simpler.',
    'Instructions are usually a fixed length.',
    'Many instructions are designed to execute in a single clock cycle.',
    'More instructions may be needed to complete the same task.',
    'The control circuitry can be simpler.',
    'Makes greater use of registers.',
    'Well suited to pipelining.',
    'RISC processors are commonly used in mobile devices and embedded systems.',
  ]),
  h('CISC and RISC comparison'),
  table(
    ['CISC', 'RISC'],
    [
      ['Large instruction set', 'Smaller instruction set'],
      ['More complex instructions', 'Simpler instructions'],
      ['Variable-length instructions', 'Usually fixed-length instructions'],
      ['May take several clock cycles', 'Many complete in one clock cycle'],
      ['Fewer instructions may be needed', 'More instructions may be needed'],
      ['More complex circuitry', 'Simpler circuitry'],
      ['Less suited to pipelining', 'Well suited to pipelining'],
    ],
  ),

  h('GPUs'),
  rule('GPU', 'GPU stands for Graphics Processing Unit.'),
  p('A GPU contains a large number of processing units that can carry out many similar calculations at the same time.'),
  p(
    'A CPU is designed for a wide range of general-purpose tasks, whereas a GPU is particularly effective when a task can be split into many similar calculations.',
  ),
  p('*Graphics uses.* GPUs are used for:'),
  ul(['rendering 2D and 3D graphics', 'computer games', 'animation', 'image processing', 'video processing']),
  p('*Non-graphics uses.* GPUs can also be used for tasks such as:'),
  ul([
    'artificial intelligence and machine learning',
    'scientific modelling and simulations',
    'processing large amounts of data',
    'mathematical calculations',
  ]),
  p('GPUs are suitable for these tasks because many calculations can be carried out at the same time.'),
  p('A GPU is not automatically faster than a CPU. Its performance depends on whether the task is suitable for parallel processing.'),

  h('Multicore processors'),
  rule('Multicore processor', 'A multicore processor contains two or more processing cores within the same CPU.'),
  ul([
    'Each core can process instructions.',
    'Having multiple cores means that more than one task or part of a task can potentially be processed at the same time.',
  ]),
  p('Examples include:'),
  ul(['dual-core processors', 'quad-core processors', 'eight-core processors']),
  p('Having twice as many cores does not necessarily mean that a program will run twice as fast.'),
  p('The software must be designed to make use of the additional cores.'),

  h('Parallel processing'),
  rule('Parallel processing', 'Parallel processing is when multiple calculations or instructions are processed at the same time.'),
  p(
    'A large problem can be divided into smaller parts, with different processors or cores working on those parts simultaneously.',
  ),
  p('Parallel processing can be achieved using:'),
  ul(['multiple processor cores', 'multiple processors', 'GPUs']),
  p('*Advantages*'),
  ul([
    'Can reduce the time needed to complete a task.',
    'Several calculations can be carried out at the same time.',
    'Useful for large problems that can be divided into independent parts.',
  ]),
  p('*Limitations*'),
  ul([
    'Not every problem can be split into independent tasks.',
    'Some calculations depend on the result of previous calculations.',
    'Software must be designed to support parallel processing.',
    'Time is required to divide the task and combine the results.',
    'More processors or cores do not always give a proportional increase in performance.',
  ]),

  h('Key things to remember'),
  ul([
    'CISC uses a larger set of more complex instructions.',
    'RISC uses a smaller set of simpler instructions.',
    'RISC is well suited to pipelining.',
    'GPUs are good at carrying out large numbers of similar calculations at the same time.',
    'GPUs can be used for both graphics and non-graphics tasks.',
    'A multicore processor contains more than one processing core.',
    'Parallel processing allows several parts of a problem to be processed at the same time.',
    'Parallel processing only improves performance when the task can be divided effectively.',
  ]),
)

export const CS_PROCESSOR_NOTES = {
  'Structure and Function of the Processor': processor,
  'Types of Processor': processorTypes,
}
