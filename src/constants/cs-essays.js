/*
  OCR H446 Computer Science: the levelled extended-response questions.

  Component 01 ends several sections with a 9- or 12-mark question marked by
  LEVEL, not by ticking points. The bank had none: 192 of its 247 questions
  were 2-markers, which trains recall and nothing else. A candidate who can
  answer every 2-marker in this app could still lose most of the extended
  responses on the paper, and those are worth roughly a fifth of Component 01.

  OCR's levels reward three things that a bullet list cannot teach:

    - DEVELOPMENT. A point that is stated scores in Level 1. The same point
      explained, with its consequence followed through, scores in Level 3.
    - BALANCE. Most of these are "discuss" or "evaluate" - a one-sided answer
      is capped at Level 2 however good it is.
    - A CONCLUSION that follows from the argument rather than restating it.

  So each question here carries its discussion points separately from its
  knowledge points, and a model conclusion. The AO split is OCR's: AO1 is
  knowledge, AO2 is applying it to the given context, AO3 is analysing and
  evaluating - and AO3 is where the top band is won.
*/

export const CS_LEVELS_12 = [
  {
    band: 'Level 3',
    marks: '9–12',
    descriptor:
      'A thorough, well-developed response covering both sides. Technical terms are used accurately throughout, points are applied to the given scenario rather than left generic, and the reasoning is followed through to its consequence. Reaches a conclusion that is justified by the argument made.',
  },
  {
    band: 'Level 2',
    marks: '5–8',
    descriptor:
      'A reasonable response with some development, but either one-sided or with points left as assertions. Some technical vocabulary, some application to the scenario. A conclusion may be present but is not well supported.',
  },
  {
    band: 'Level 1',
    marks: '1–4',
    descriptor:
      'Basic points, largely a list, with little development and limited technical vocabulary. Little or no application to the scenario and no meaningful conclusion.',
  },
]

export const CS_LEVELS_9 = [
  {
    band: 'Level 3',
    marks: '7–9',
    descriptor:
      'Detailed and accurate, applied to the scenario, with reasoning carried through to consequences. Technical terms used correctly.',
  },
  {
    band: 'Level 2',
    marks: '4–6',
    descriptor:
      'Some accurate detail with partial development; application to the scenario is patchy.',
  },
  {
    band: 'Level 1',
    marks: '1–3',
    descriptor: 'Basic, undeveloped points with little application and limited technical vocabulary.',
  },
]

const ext = (topic, question, marks, ao, knowledge, discussion, conclusion) => ({
  topic,
  question,
  marks,
  paper: 'Component 01 · extended response',
  ao,
  levels: marks === 12 ? CS_LEVELS_12 : CS_LEVELS_9,
  markScheme: knowledge,
  evaluation: discussion,
  judgement: conclusion,
})

export const CS_ESSAYS = [
  ext(
    'Types of Processor',
    'A games studio is choosing between a processor with four fast cores and one with sixteen slower cores for its physics engine. Discuss the factors that should influence the choice. (12 marks)',
    12,
    { AO1: 3, AO2: 4, AO3: 5 },
    [
      'Clock speed measures cycles per second, so a faster core completes more instructions per second on a single sequential task.',
      'Multiple cores allow genuine parallel execution - separate instructions on separate data at the same time - rather than the time-slicing a single core uses.',
      'Cache size and level matter independently of both: a cache miss forces a fetch from main memory costing far more cycles than the instruction itself.',
      'Pipelining allows a core to begin fetching the next instruction while decoding and executing earlier ones, raising throughput without raising clock speed.',
      'A physics engine computes forces on many independent objects, which is a data-parallel workload and therefore divisible across cores.',
    ],
    [
      'AMDAHL’S LAW is the decisive consideration: the speed-up from more cores is limited by the fraction of the program that must run sequentially. If 20% of the physics step cannot be parallelised, sixteen cores cannot give more than a fivefold speed-up no matter how many are added.',
      'DIVISIBILITY of the workload: collision detection between independent object pairs parallelises well; a solver where each object’s new position depends on its neighbours’ updated positions has dependencies that force sequencing, and more cores add coordination overhead without adding throughput.',
      'OVERHEAD: splitting work across sixteen cores requires distributing data and synchronising results. For short physics steps that overhead can exceed the time saved, so the sixteen-core option can be SLOWER in practice for small scenes.',
      'The rest of the engine matters, not just physics. Game logic, scripting and asset streaming are often largely sequential, and those parts run measurably worse on the slower cores - so the choice affects the whole frame time, not one subsystem.',
      'DEVELOPER COST: writing correct concurrent code is substantially harder - race conditions and deadlocks are difficult to reproduce and test. Sixteen cores are only useful if the studio can afford the engineering to exploit them.',
      'HEAT AND POWER: higher clock speeds raise power draw and thermal output disproportionately, which may force throttling and lose the advantage the fast cores were chosen for.',
    ],
    'The four-core processor is the safer choice unless the studio has measured its own workload. The theoretical advantage of sixteen cores is only realised for the parallelisable fraction, and Amdahl’s law caps that; meanwhile the sequential parts of the engine - game logic and scripting - run slower on every frame. The right decision is to profile the engine first: if the sequential fraction is small and the team can write reliable concurrent code, sixteen cores win; otherwise the fast cores give a more predictable result across the whole program.',
  ),

  ext(
    'Systems Software',
    'A hospital uses one system for patient monitoring and another for payroll. Discuss the scheduling algorithm most appropriate for each. (12 marks)',
    12,
    { AO1: 3, AO2: 4, AO3: 5 },
    [
      'The scheduler decides which process gets the CPU and for how long, aiming to maximise throughput and keep response times acceptable.',
      'Round robin gives each process a fixed time slice then pre-empts it and moves it to the back of the queue, so nothing starves and response time is bounded.',
      'First come first served runs each process to completion in arrival order: simple and with no switching overhead, but one long job blocks everything behind it (the convoy effect).',
      'Shortest job first minimises average waiting time but requires knowing run times in advance and can starve long jobs indefinitely.',
      'Multi-level feedback queues combine several queues with different priorities and allow processes to move between them based on observed behaviour.',
      'Every pre-emption costs a context switch: saving registers and program counter, loading another process’s state - pure overhead that does no useful work.',
    ],
    [
      'PATIENT MONITORING IS A REAL-TIME SYSTEM. The requirement is not average speed but a GUARANTEED maximum response: an alarm condition must be acted on within a bounded time or the system has failed regardless of its throughput. This makes average-case algorithms such as shortest job first unsuitable however good their statistics.',
      'A pre-emptive priority scheduler with real-time guarantees fits monitoring: the alarm-handling process must be able to interrupt anything else immediately. Round robin alone is insufficient because a critical process could still wait a full cycle of time slices.',
      'PRIORITY INVERSION is a real risk in that design - a high-priority process blocked waiting on a resource held by a low-priority one - so priority inheritance is needed, which adds complexity.',
      'PAYROLL IS BATCH WORK with no interactive user waiting. Throughput and total completion time matter; response time does not. First come first served or shortest job first is therefore appropriate, and the overhead of frequent pre-emption is pure waste.',
      'Shortest job first suits payroll better than monitoring precisely because job lengths ARE predictable there - the run time of a payroll calculation scales with employee count, which is known in advance. The information that makes SJF impractical in general is available in this case.',
      'CONSEQUENCE OF FAILURE differs by orders of magnitude and should drive the decision: a payroll run finishing an hour late is an inconvenience; a monitoring alarm delayed by seconds is a safety failure. The scheduling choice should be made against that asymmetry, not against average performance.',
    ],
    'The two systems have opposite requirements, so no single algorithm serves both. Patient monitoring needs a pre-emptive priority scheduler with real-time guarantees, accepting the extra context-switching overhead and the complexity of priority inheritance, because a bounded worst case is the actual requirement. Payroll should use first come first served or shortest job first, since throughput is what matters and job lengths are predictable. The general principle is that scheduling should be chosen against the cost of the worst case, not the average.',
  ),

  ext(
    'Legal, Moral, Cultural and Ethical Issues',
    'A supermarket plans to use facial recognition to identify shoplifters automatically. Discuss the legal and ethical issues this raises. (12 marks)',
    12,
    { AO1: 3, AO2: 4, AO3: 5 },
    [
      'A facial image used to identify an individual is personal data, and biometric data used for identification is a special category requiring a higher standard of justification under data protection law.',
      'The Data Protection Act requires a lawful basis for processing, that data is adequate and not excessive for the stated purpose, kept accurate, and retained no longer than necessary.',
      'Data subjects have rights of access, rectification and erasure, and must normally be informed that processing is taking place.',
      'The Computer Misuse Act applies to unauthorised access to the resulting database, and the retailer has a duty to secure it.',
      'The system compares a live face against a watchlist and returns a probabilistic match, not a certainty.',
    ],
    [
      'CONSENT IS EFFECTIVELY ABSENT. A notice at the door is not meaningful consent when the alternative is not shopping, and consent given under that condition is not freely given - which undermines the most obvious lawful basis and pushes the retailer onto "legitimate interests", which must then be balanced against the rights of every innocent shopper scanned.',
      'PROPORTIONALITY: every customer is processed to catch a small number of offenders. Whether that is adequate and not excessive is precisely the test the law sets, and a blanket scan is difficult to justify against a targeted alternative such as staff observation.',
      'FALSE POSITIVES cause direct harm: an innocent person wrongly matched may be detained, searched or barred, and the reputational damage is immediate and hard to undo. Accuracy figures quoted as percentages conceal this - a 99% accurate system scanning 10,000 customers a day produces around 100 false matches daily.',
      'DEMOGRAPHIC BIAS is well documented: error rates for facial recognition are consistently higher for women and for people with darker skin. A system with uneven error rates does not merely make mistakes, it makes them disproportionately against particular groups, which raises equality issues on top of privacy ones.',
      'FUNCTION CREEP: a watchlist built for shoplifting is easily extended - to loyalty profiling, to sharing with other retailers, to police access - none of which the original notice covered. The safeguard has to be a retention and purpose policy, not a promise.',
      'THE COUNTERFACTUAL matters: CCTV is already lawful and widely accepted. The ethical question is what changes when passive recording becomes automatic identification, and the answer is that the shopper loses practical anonymity - a difference of kind, not degree.',
      'ACCOUNTABILITY: if the match is made by an algorithm, who is responsible for a wrongful detention? Without a human review step before action is taken, responsibility is diffused, which is both an ethical failure and a legal exposure.',
    ],
    'The system is not automatically unlawful, but it is difficult to justify as described. The strongest objections are proportionality - scanning every customer to catch a few - and documented demographic bias, which means the harm from false positives falls unevenly. It could be made defensible with a narrow watchlist, short retention, a mandatory human review before any staff member acts on a match, and a published bias audit. Without those, the balance between the retailer’s legitimate interest and the rights of innocent shoppers falls on the shoppers’ side.',
  ),

  ext(
    'Software Development Methodologies',
    'A start-up is building a mobile app for a client whose requirements are not yet fully known. Discuss whether an agile or a waterfall methodology would be more appropriate. (12 marks)',
    12,
    { AO1: 3, AO2: 4, AO3: 5 },
    [
      'Waterfall completes each stage - analysis, design, implementation, testing, maintenance - before the next begins, producing full documentation at each stage.',
      'Agile works in short iterations, each producing working software, with requirements refined between iterations and continuous customer involvement.',
      'Extreme programming adds practices such as pair programming and test-first development; the spiral model adds explicit risk assessment to each loop.',
      'Rapid application development uses prototypes to elicit requirements from users who cannot specify them abstractly.',
      'The cost of fixing a defect rises sharply the later it is found, which is the argument for testing early and often.',
    ],
    [
      'THE DECIDING FACT IS THE UNKNOWN REQUIREMENTS. Waterfall’s central assumption is that requirements can be fixed before design begins; the scenario states they cannot. Choosing waterfall here means committing to a specification that is known to be incomplete, and any change then forces expensive rework through every completed stage.',
      'Agile’s iterations let the client see working software early and react to it, which is how vague requirements actually get resolved - clients are far better at criticising something concrete than at specifying it in the abstract.',
      'HOWEVER, agile requires sustained client availability. If the client can only meet monthly, the feedback loop that makes agile work is broken, and the team ends up guessing between long gaps - arguably worse than a documented specification.',
      'DOCUMENTATION is agile’s weakness and matters beyond delivery: a start-up with high staff turnover, or a client who will maintain the app themselves later, needs documentation that agile de-emphasises.',
      'CONTRACTS AND BUDGET: waterfall suits fixed-price contracts because the scope is defined up front. Agile’s changing scope is hard to price, so the commercial arrangement may constrain the choice more than the engineering does - a real consideration for a start-up that needs predictable cash flow.',
      'RISK PROFILE: a mobile app is low-risk to iterate - deployment is cheap and reversible. That is what makes agile safe here, and it is exactly what would NOT hold for safety-critical software, where the up-front rigour of waterfall or the spiral model’s risk analysis is warranted.',
      'A HYBRID is often the honest answer: fixing the architecture and data model up front, then iterating on features, avoids both rewriting foundations repeatedly and committing to unknown detail.',
    ],
    'Agile is the better fit, and the reason is specific rather than general: the requirements are not yet known, and agile is the only one of the two that treats that as normal rather than as a failure of analysis. The judgement is conditional though - it depends on the client being available for regular feedback, without which agile loses its main advantage. Given a start-up building a low-risk, cheaply redeployable mobile app, the practical answer is agile with a fixed architecture agreed up front, plus enough documentation to survive staff turnover.',
  ),

  ext(
    'Compression, Encryption and Hashing',
    'Explain why lossy compression is acceptable for streaming video but not for a database of medical scans. (9 marks)',
    9,
    { AO1: 3, AO2: 3, AO3: 3 },
    [
      'Lossy compression permanently discards data judged less important; the original cannot be reconstructed. Lossless compression encodes data more efficiently so the original is recovered exactly.',
      'Video codecs exploit perceptual limits - discarding colour detail the eye resolves poorly, and encoding only the differences between frames.',
      'Lossless methods such as run-length encoding and Huffman coding achieve much lower ratios, typically around 2:1 against 50:1 or more for lossy video.',
      'Compression reduces file size, so it reduces bandwidth needed and buffering, and reduces storage cost.',
    ],
    [
      'FOR VIDEO the loss is invisible in practice because the codec discards exactly what human perception does not resolve, and the alternative - lossless streaming - would need bandwidth most users do not have. The trade is a quality reduction nobody notices for a service that works at all.',
      'FOR MEDICAL SCANS the discarded detail may be the diagnosis. A compression artefact removed as noise could be a small lesion, and a clinician cannot tell an artefact from a finding by looking at the compressed image.',
      'The consequence is asymmetric and that is what decides it: a video artefact costs a moment’s annoyance, a missed diagnosis costs a life. Where the cost of loss is unbounded, no compression ratio justifies it.',
      'LEGAL AND EVIDENTIAL: medical records must be an accurate record and may be evidence in litigation. An image altered by compression is arguably no longer the original observation, whatever its visual quality.',
      'REPEATED RE-ENCODING compounds lossy degradation each time a file is saved, so an archive intended to be kept for decades and migrated between systems degrades cumulatively - a problem streaming never has because each delivery starts from the master.',
      'Lossless is viable for scans precisely because the constraints differ: storage is cheap relative to the value of the data, and there is no real-time bandwidth limit, so the lower compression ratio costs little.',
    ],
    'The difference is not technical but consequential. Both use cases benefit from smaller files, but for video the discarded information is genuinely redundant to the viewer, while for medical scans it may be diagnostically decisive and its loss is irreversible and undetectable. Because the cost of an error is unbounded in one case and trivial in the other, streaming should use lossy compression and medical archives lossless - even though this costs far more storage.',
  ),

  ext(
    'Networks',
    'A company is deciding whether to move its file storage and applications to the cloud. Discuss the technical factors it should consider. (9 marks)',
    9,
    { AO1: 3, AO2: 3, AO3: 3 },
    [
      'Cloud storage places data on remote servers accessed over the internet, rather than on local file servers the company owns and maintains.',
      'It removes the need to buy, house and replace server hardware, converting capital expenditure into an ongoing operating cost.',
      'Capacity can be scaled up or down on demand rather than provisioned for peak load.',
      'Providers offer redundancy and geographically separated backups that would be expensive to replicate in house.',
      'Access from any location supports remote and mobile working without a VPN into the company network.',
    ],
    [
      'BANDWIDTH AND LATENCY become the binding constraint. Every file access crosses the internet connection, so a company with a slow or contended line may find performance worse than a local server, particularly for large files. The connection also becomes a single point of failure: no internet, no access to anything.',
      'DEPENDENCY AND AVAILABILITY: the company is relying on a third party’s uptime and has no ability to fix an outage itself. Service level agreements provide compensation, not availability - which matters if the business cannot operate without the files.',
      'SECURITY is genuinely two-sided rather than simply worse. Data in transit and at rest is exposed to a third party, and jurisdiction affects who can compel access. But a major provider almost certainly employs stronger security expertise, patching discipline and physical controls than a small company’s in-house server.',
      'VENDOR LOCK-IN: proprietary formats and egress charges can make moving away expensive, so a decision that is cheap to make may be costly to reverse.',
      'COST OVER TIME: cloud is cheaper up front but the operating cost never ends, so over a long enough horizon it can exceed the capital cost of owning hardware. The comparison must be made over the asset’s realistic life, not for one year.',
      'A HYBRID often dominates: keeping latency-sensitive or highly sensitive data on site and using the cloud for backup, archive and bursty workloads captures most of the benefit with less of the exposure.',
    ],
    'The decision turns mainly on the company’s internet connection and its tolerance for depending on a third party, not on cost. Where bandwidth is reliable and the workload is not latency-critical, cloud storage offers scalability and resilience the company would struggle to build itself. Where files are large, access is constant, or the business stops without them, the internet connection becomes a single point of failure that outweighs the savings - and a hybrid arrangement is usually the stronger answer.',
  ),
]
