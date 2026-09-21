/*
  Flashcards for OCR H446 1.1.1 Structure and Function of the Processor and
  1.1.2 Types of Processor.

  Written directly from Mudassir's notes for the two chapters
  (cs-notes-processor.js) and nothing else: every card tests a statement
  those notes make, in the notes' own wording, and every statement in the
  notes has at least one card - including the two spec gap-closer blocks
  the notes pulled back from the parked chapters (marked below). They
  replace the 91 earlier cards for these chapters, parked in
  temp/cs-processor-previous/flashcards.js.

  The three "draw the diagram" cards for 1.1.1 stay in diagram-cards.js with
  the other subjects' diagram cards, because they carry a diagram id.

  Topic strings match the chapter outline exactly. No em dashes.
*/

const c = (topic, front, back) => ({ topic, front, back })

const CPU = 'Structure and Function of the Processor'
const TYPES = 'Types of Processor'

export const CS_PROCESSOR_FLASHCARDS = [
  // ---- 1.1.1: CPU components
  c(CPU, 'What does the ALU (Arithmetic Logic Unit) do?', 'It carries out arithmetic calculations, logical operations and comparisons.'),
  c(
    CPU,
    'What does the Control Unit do?',
    'It manages the operation of the processor: it decodes instructions and sends control signals to other parts of the computer.',
  ),
  c(
    CPU,
    'Name the five registers you need to know, with what each abbreviation stands for.',
    'PC (Program Counter), MAR (Memory Address Register), MDR (Memory Data Register), CIR (Current Instruction Register) and ACC (Accumulator).',
  ),
  c(CPU, 'What does the PC (Program Counter) store?', 'The address of the next instruction to be fetched.'),
  c(CPU, 'What does the MAR (Memory Address Register) store?', 'The address of the memory location currently being accessed.'),
  c(CPU, 'What does the MDR (Memory Data Register) store?', 'Data or instructions being transferred to or from memory.'),
  c(CPU, 'What does the CIR (Current Instruction Register) store?', 'The instruction currently being decoded or executed.'),
  c(CPU, 'What does the ACC (Accumulator) store?', 'Intermediate results from calculations.'),
  c(CPU, 'Which register stores an address, and which stores an instruction: the MAR or the CIR?', 'The MAR stores a memory address. The CIR stores the current instruction.'),
  c(CPU, 'Name the three buses.', 'The address bus, the data bus and the control bus.'),
  c(
    CPU,
    'What does the address bus carry, and in which direction does it usually travel?',
    'It carries memory addresses. It usually travels from the CPU to memory.',
  ),
  c(
    CPU,
    'What does the data bus carry, and is it one-way or bidirectional?',
    'It carries data and instructions between the CPU and memory. It is bidirectional.',
  ),
  c(CPU, 'What does the control bus carry? Give four examples of the signals.', 'Control signals, such as read, write, clock and interrupt signals.'),
  c(CPU, 'Which of the three buses is bidirectional?', 'The data bus.'),
  c(
    CPU,
    'Which parts of the processor do assembly language instructions make use of when they are carried out?',
    'The registers, the buses and the ALU.',
  ),

  // ---- 1.1.1: the fetch-decode-execute cycle
  c(CPU, 'What are the three stages of the fetch-decode-execute cycle?', 'Fetch, decode and execute.'),
  c(
    CPU,
    'Describe the fetch stage of the fetch-decode-execute cycle, step by step.',
    '1) The address in the PC is copied to the MAR. 2) The address is sent to memory using the address bus. 3) The Control Unit sends a read signal. 4) The instruction is transferred from memory to the MDR. 5) The instruction is copied to the CIR. 6) The PC is incremented.',
  ),
  c(CPU, 'What is the first step of the fetch stage?', 'The address in the PC is copied to the MAR.'),
  c(CPU, 'During the fetch stage, which bus is used to send the address to memory?', 'The address bus.'),
  c(CPU, 'During the fetch stage, what signal does the Control Unit send to memory?', 'A read signal.'),
  c(
    CPU,
    'During the fetch stage, which register does the instruction arrive in from memory, and which register is it then copied to?',
    'It is transferred from memory to the MDR, then copied to the CIR.',
  ),
  c(CPU, 'What happens to the PC at the end of the fetch stage?', 'The PC is incremented.'),
  c(
    CPU,
    'What happens in the decode stage?',
    'The Control Unit decodes the instruction in the CIR and works out what operation needs to be carried out.',
  ),
  c(CPU, 'Which register holds the instruction that is decoded?', 'The CIR (Current Instruction Register).'),
  c(CPU, 'What two parts may an instruction contain?', 'An opcode and an operand.'),
  c(CPU, 'What is an opcode?', 'The part of an instruction that tells the processor what operation to perform.'),
  c(CPU, 'What is an operand?', 'The part of an instruction that gives the data or address to be used.'),
  c(CPU, 'What happens in the execute stage?', 'The instruction is carried out. This may involve the ALU, registers or memory.'),
  c(CPU, 'How can a branch instruction affect a register when it is executed?', 'A branch instruction may change the value stored in the PC.'),

  // ---- 1.1.1: spec gap-closers (the ADD 30 register trace and the
  //      assembly-language paragraph pulled back from
  //      temp/cs-processor-previous/ - see cs-notes-processor.js)
  c(
    CPU,
    'The PC holds 12, address 12 holds the instruction ADD 30, address 30 holds 7 and the ACC holds 5. What do the PC and the ACC hold after the instruction has been executed?',
    'PC = 13 (incremented during the fetch stage, ready for the next instruction). ACC = 12 (the value 7 at address 30 added to the 5 already in the accumulator).',
  ),
  c(
    CPU,
    'Trace the registers while ADD 30, held at address 12, is fetched: what do the MAR, MDR, CIR and PC hold at the end of the fetch stage?',
    'MAR = 12 (copied from the PC), MDR = ADD 30 (the instruction transferred from memory), CIR = ADD 30 (copied from the MDR), PC = 13 (incremented).',
  ),
  c(
    CPU,
    'During the execute stage of ADD 30, which registers change and how?',
    'The operand address is placed in the MAR (MAR = 30), the value at address 30 is read into the MDR (MDR = 7), and the ALU adds it to the accumulator (ACC = 5 + 7 = 12).',
  ),
  c(
    CPU,
    'How does an assembly language instruction such as ADD 30 relate to the registers of the fetch-decode-execute cycle?',
    'Every assembly language (and LMC) instruction is exactly one fetch-decode-execute cycle. The operand 30 is the address placed in the MAR, and the opcode ADD is what the Control Unit decodes from the CIR to choose the ALU operation.',
  ),
  c(
    CPU,
    'What does tracing the registers for an assembly language program amount to?',
    'Tracing the fetch-decode-execute cycle instruction by instruction: each line of the program is one cycle.',
  ),

  // ---- 1.1.1: factors affecting CPU performance
  c(CPU, 'Name three factors that affect CPU performance.', 'Clock speed, number of cores and cache.'),
  c(CPU, 'What is clock speed, and what is it measured in?', 'The number of clock cycles completed each second. It is measured in Hz.'),
  c(CPU, 'How can a higher clock speed improve performance?', 'It can allow more processing to take place in a given amount of time.'),
  c(CPU, 'Give two drawbacks of a higher clock speed.', 'It can produce more heat and use more power.'),
  c(
    CPU,
    'How does having more cores affect CPU performance?',
    'More cores allow the processor to carry out more work at the same time, but this depends on whether the software has been designed to make use of multiple cores.',
  ),
  c(CPU, 'What does the benefit of having more cores depend on?', 'Whether the software has been designed to make use of multiple cores.'),
  c(CPU, 'What is cache?', 'A small amount of very fast memory located close to the CPU.'),
  c(
    CPU,
    'What does cache store, and why does that improve performance?',
    'Frequently or recently used instructions and data, so that the processor does not have to access slower main memory as often.',
  ),

  // ---- 1.1.1: pipelining
  c(
    CPU,
    'What is pipelining?',
    'Pipelining allows different stages of the fetch-decode-execute cycle to take place at the same time for different instructions.',
  ),
  c(
    CPU,
    'Give an example of what happens at the same time in a pipelined processor.',
    'While one instruction is being executed, another can be decoded and another can be fetched.',
  ),
  c(CPU, 'What is the main advantage of pipelining?', 'It increases the number of instructions that can be processed in a given amount of time.'),
  c(CPU, 'Does pipelining make an individual instruction faster?', 'Not necessarily. It increases the number of instructions processed in a given time, not the speed of one instruction.'),
  c(
    CPU,
    'Why can branch instructions reduce the effectiveness of pipelining?',
    'Because instructions that have already been fetched may need to be discarded.',
  ),

  // ---- 1.1.1: Von Neumann, Harvard and contemporary architecture
  c(
    CPU,
    'Give four features of Von Neumann architecture.',
    'Instructions and data are stored in the same memory; instructions and data use the same buses; it uses the stored program concept; it can suffer from the Von Neumann bottleneck.',
  ),
  c(CPU, 'In Von Neumann architecture, where are instructions and data stored?', 'In the same memory, and they use the same buses.'),
  c(CPU, 'Which architecture uses the stored program concept?', 'Von Neumann architecture.'),
  c(
    CPU,
    'What causes the Von Neumann bottleneck?',
    'Instructions and data share the same communication pathways between the processor and memory.',
  ),
  c(
    CPU,
    'Give three features of Harvard architecture.',
    'Instructions and data are stored in separate memories; instructions and data use separate buses; the processor can access instructions and data at the same time.',
  ),
  c(
    CPU,
    'Why can Harvard architecture improve performance compared with a Von Neumann system?',
    'Instructions and data are in separate memories with separate buses, so the processor can access instructions and data at the same time.',
  ),
  c(
    CPU,
    'What is the key difference between Von Neumann and Harvard architecture?',
    'Von Neumann stores instructions and data in the same memory and moves them over the same buses. Harvard stores them in separate memories and uses separate buses.',
  ),
  c(
    CPU,
    'What is meant by contemporary processor architecture?',
    'Modern processors often use features of both Von Neumann and Harvard architecture.',
  ),
  c(
    CPU,
    'Give an example of how a contemporary processor combines Von Neumann and Harvard features.',
    'Main memory may store both instructions and data (Von Neumann), while the processor may have separate instruction and data caches (Harvard).',
  ),
  c(
    CPU,
    'What is the benefit of contemporary processor architecture?',
    'It gives the flexibility of Von Neumann architecture while also gaining some of the performance benefits of Harvard architecture.',
  ),

  // ---- 1.1.2: CISC and RISC
  c(TYPES, 'What does CISC stand for?', 'Complex Instruction Set Computer.'),
  c(TYPES, 'What does RISC stand for?', 'Reduced Instruction Set Computer.'),
  c(
    TYPES,
    'Describe the instruction set of a CISC processor.',
    'It has a large instruction set. Instructions can be more complex and can be different lengths, and a single instruction may perform several operations.',
  ),
  c(
    TYPES,
    'Describe the instruction set of a RISC processor.',
    'It has a smaller instruction set. Instructions are simpler and usually a fixed length, and many are designed to execute in a single clock cycle.',
  ),
  c(TYPES, 'How many operations can a single CISC instruction perform?', 'A single CISC instruction may perform several operations.'),
  c(TYPES, 'How many clock cycles may a complex CISC instruction take to complete?', 'Several clock cycles.'),
  c(TYPES, 'How many clock cycles are many RISC instructions designed to execute in?', 'A single clock cycle.'),
  c(
    TYPES,
    'Compare the number of instructions needed to complete a task on CISC and RISC processors.',
    'CISC: fewer instructions may be needed, because a single instruction may perform several operations. RISC: more instructions may be needed to complete the same task, because each instruction is simpler.',
  ),
  c(TYPES, 'Compare instruction length in CISC and RISC processors.', 'CISC instructions can be different (variable) lengths. RISC instructions are usually a fixed length.'),
  c(TYPES, 'Compare the control circuitry of CISC and RISC processors.', 'CISC control circuitry is more complex. RISC control circuitry can be simpler.'),
  c(TYPES, 'Which type of processor makes greater use of registers, CISC or RISC?', 'RISC.'),
  c(TYPES, 'Which type of processor is well suited to pipelining, CISC or RISC?', 'RISC is well suited to pipelining. CISC is less suited to it.'),
  c(TYPES, 'Which type of computer are CISC processors commonly associated with?', 'General-purpose desktop and laptop computers.'),
  c(TYPES, 'Where are RISC processors commonly used?', 'In mobile devices and embedded systems.'),
  c(
    TYPES,
    'Give the seven rows of the CISC vs RISC comparison table.',
    'CISC / RISC: large instruction set / smaller instruction set; more complex instructions / simpler instructions; variable-length instructions / usually fixed-length instructions; may take several clock cycles / many complete in one clock cycle; fewer instructions may be needed / more instructions may be needed; more complex circuitry / simpler circuitry; less suited to pipelining / well suited to pipelining.',
  ),

  // ---- 1.1.2: GPUs
  c(TYPES, 'What does GPU stand for?', 'Graphics Processing Unit.'),
  c(
    TYPES,
    'What does a GPU contain that lets it work differently from a CPU?',
    'A large number of processing units that can carry out many similar calculations at the same time.',
  ),
  c(
    TYPES,
    'What is a CPU designed for, compared with a GPU?',
    'A CPU is designed for a wide range of general-purpose tasks, whereas a GPU is particularly effective when a task can be split into many similar calculations.',
  ),
  c(
    TYPES,
    'Give five graphics uses of a GPU.',
    'Rendering 2D and 3D graphics, computer games, animation, image processing and video processing.',
  ),
  c(
    TYPES,
    'Give four non-graphics uses of a GPU.',
    'Artificial intelligence and machine learning, scientific modelling and simulations, processing large amounts of data, and mathematical calculations.',
  ),
  c(
    TYPES,
    'Why are GPUs suitable for non-graphics tasks such as machine learning and scientific modelling?',
    'Because many calculations can be carried out at the same time.',
  ),
  c(
    TYPES,
    'Is a GPU automatically faster than a CPU?',
    'No. Its performance depends on whether the task is suitable for parallel processing.',
  ),

  // ---- 1.1.2: multicore processors
  c(TYPES, 'What is a multicore processor?', 'A processor that contains two or more processing cores within the same CPU. Each core can process instructions.'),
  c(
    TYPES,
    'What does having multiple cores make possible?',
    'More than one task, or part of a task, can potentially be processed at the same time.',
  ),
  c(TYPES, 'Give three examples of multicore processors.', 'Dual-core, quad-core and eight-core processors.'),
  c(
    TYPES,
    'Does having twice as many cores mean a program will run twice as fast?',
    'Not necessarily. The software must be designed to make use of the additional cores.',
  ),

  // ---- 1.1.2: parallel processing
  c(TYPES, 'What is parallel processing?', 'When multiple calculations or instructions are processed at the same time.'),
  c(
    TYPES,
    'How is a large problem handled using parallel processing?',
    'It is divided into smaller parts, with different processors or cores working on those parts simultaneously.',
  ),
  c(TYPES, 'Name three ways parallel processing can be achieved.', 'Using multiple processor cores, multiple processors, or GPUs.'),
  c(
    TYPES,
    'Give three advantages of parallel processing.',
    'It can reduce the time needed to complete a task; several calculations can be carried out at the same time; it is useful for large problems that can be divided into independent parts.',
  ),
  c(
    TYPES,
    'Give five limitations of parallel processing.',
    'Not every problem can be split into independent tasks; some calculations depend on the result of previous calculations; software must be designed to support parallel processing; time is required to divide the task and combine the results; more processors or cores do not always give a proportional increase in performance.',
  ),
  c(
    TYPES,
    'Why can some problems not be split up for parallel processing?',
    'Not every problem can be split into independent tasks: some calculations depend on the result of previous calculations.',
  ),
  c(TYPES, 'What extra time does parallel processing require that a single processor does not?', 'Time to divide the task and to combine the results.'),
  c(
    TYPES,
    'Do more processors or cores always give a proportional increase in performance?',
    'No. Parallel processing only improves performance when the task can be divided effectively.',
  ),
  c(TYPES, 'What must be true of the software for parallel processing to work?', 'The software must be designed to support parallel processing.'),
]
