import { Note, Figure, Arrow, Seg, Text, Box } from './primitives'

/*
  The OCR H446 diagrams that were missing.

  Same defect as the Maths set: these chapters were each showing another
  chapter's picture. "Programming Paradigms" displayed an entity-relationship
  diagram, "Compression, Encryption and Hashing" displayed two's complement,
  "Software Development Methodologies" displayed the stages of a compiler.
  Each one below belongs to the chapter that uses it.

  Conventions match computerScience.jsx: brand blue for the primary object,
  green for a compared one, amber for anything highlighted, red for a
  failure or warning state.
*/

const F = 'var(--brand-strong)'
const G = '#2e9e6b'
const A = '#e08a2c'
const R = 'var(--r2-shaky)'

/* ================================================== COMPONENT 1 */

function Pipelining() {
  const stages = ['Fetch', 'Decode', 'Execute']
  const colours = [F, G, A]
  return (
    <Figure
      title="Pipelining in the processor"
      desc="A grid of three instructions against five time slots, showing fetch, decode and execute overlapping so a new instruction starts every cycle."
      caption="Without pipelining each instruction finishes before the next begins, so three instructions take nine cycles. Overlapping them takes five: once the pipeline is full, one instruction completes per cycle. A branch throws away the partly-filled pipeline, which is why branch prediction matters."
    >
      {[0, 1, 2, 3, 4].map((t) => (
        <Text key={t} x={118 + t * 56} y={54} colour="var(--muted)" size="note">
          {`cycle ${t + 1}`}
        </Text>
      ))}
      {[0, 1, 2].map((instr) => (
        <g key={instr}>
          <Text x={78} y={88 + instr * 46} anchor="end" colour="var(--fg)" size="note">
            {`I${instr + 1}`}
          </Text>
          {stages.map((s, si) => (
            <g key={s}>
              <rect
                x={92 + (instr + si) * 56}
                y={70 + instr * 46}
                width={52}
                height={30}
                rx="6"
                fill={colours[si]}
                fillOpacity="0.2"
                stroke={colours[si]}
                strokeWidth="1.4"
              />
              <Text x={118 + (instr + si) * 56} y={90 + instr * 46} colour="var(--fg)" size="note">
                {s}
              </Text>
            </g>
          ))}
        </g>
      ))}
      <Seg x1={92} y1={216} x2={368} y2={216} colour="var(--muted)" width={1.2} dashed />
      <Note x={230} y={236} colour={F}>
        3 instructions in 5 cycles, not 9
      </Note>
      <Note x={230} y={256} colour={R}>
        a taken branch flushes the pipeline
      </Note>
    </Figure>
  )
}

function StorageMedia() {
  /*
    Kept to roughly 16 characters a line: at 96px wide, anything longer
    spilled out past the column borders.
  */
  const cols = [
    { x: 40, name: 'Magnetic', sub: 'HDD, tape', body: ['spinning', 'platters', 'cheap, roomy', 'moving parts'], colour: F },
    { x: 152, name: 'Optical', sub: 'CD, DVD', body: ['pits and lands', 'read by laser', 'cheap to ship', 'small, slow'], colour: G },
    { x: 264, name: 'Solid state', sub: 'SSD, flash', body: ['NAND cells', 'no moving parts', 'fast, rugged', 'wears out'], colour: A },
  ]
  return (
    <Figure
      title="The three storage technologies"
      desc="Three labelled columns comparing magnetic, optical and solid state storage by how each one physically stores a bit and the trade-offs that follow."
      caption="How a bit is physically stored decides everything else. Magnetic uses the direction of magnetisation on a spinning platter - cheap per gigabyte but mechanical. Optical burns pits read by a laser. Solid state traps charge in flash cells, so it is fast and rugged but each cell survives a limited number of writes."
    >
      {cols.map((c) => (
        <g key={c.name}>
          <rect x={c.x} y={44} width={96} height={196} rx="10" fill={c.colour} fillOpacity="0.08" stroke={c.colour} strokeWidth="1.6" />
          <Text x={c.x + 48} y={68} colour={c.colour}>
            {c.name}
          </Text>
          <Text x={c.x + 48} y={85} colour="var(--muted)" size="note">
            {c.sub}
          </Text>
          <Seg x1={c.x + 12} y1={96} x2={c.x + 84} y2={96} colour={c.colour} width={1} />
          {c.body.map((line, i) => (
            <Text key={line} x={c.x + 48} y={118 + i * 26} colour={i > 1 ? 'var(--muted)' : 'var(--fg)'} size="note">
              {line}
            </Text>
          ))}
        </g>
      ))}
      <Note x={200} y={266} colour="var(--muted)">
        judge any device on capacity, speed, durability, portability and cost
      </Note>
    </Figure>
  )
}

function Scheduling() {
  // Round robin, quantum 2, over three processes.
  const slots = [
    ['P1', F], ['P2', G], ['P3', A], ['P1', F], ['P2', G], ['P1', F],
  ]
  return (
    <Figure
      title="Round-robin scheduling"
      desc="A horizontal timeline divided into equal time slices, each labelled with the process running in it, cycling through three processes in turn."
      caption="Each process gets the CPU for a fixed time slice, then is pre-empted and sent to the back of the queue. Nothing starves, and short jobs finish quickly - but the constant context switching is overhead. Compare first-come-first-served (simple, but one long job blocks everything) and shortest-job-first (fast on average, can starve long jobs)."
    >
      {slots.map(([name, colour], i) => (
        <g key={i}>
          <rect x={44 + i * 52} y={92} width={48} height={44} rx="6" fill={colour} fillOpacity="0.22" stroke={colour} strokeWidth="1.5" />
          <Text x={68 + i * 52} y={119} colour="var(--fg)">
            {name}
          </Text>
        </g>
      ))}
      <Arrow x1={44} y1={158} x2={360} y2={158} colour="var(--fg)" width={1.4} />
      <Note x={200} y={176} colour="var(--muted)">
        time →
      </Note>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <Text key={i} x={68 + i * 52} y={84} colour="var(--muted)" size="note">
          {`${i * 2}–${i * 2 + 2}ms`}
        </Text>
      ))}
      <Text x={200} y={56} colour={F}>
        quantum = 2ms
      </Text>
      <Note x={200} y={212} colour={G}>
        no process starves
      </Note>
      <Note x={200} y={232} colour={R}>
        but every switch costs a context save and restore
      </Note>
    </Figure>
  )
}

function WaterfallAgile() {
  const stages = ['Analysis', 'Design', 'Build', 'Test', 'Maintain']
  return (
    <Figure
      title="Waterfall against an iterative cycle"
      desc="On the left, five stages descending like a staircase with no way back; on the right, the same stages arranged as a repeating loop."
      caption="Waterfall completes each stage before the next and suits a project whose requirements are fixed and documented - but a mistake found in testing is expensive because you cannot go back. Agile repeats a short analyse-build-test loop, delivering something working each time, so requirements can change; it needs constant customer involvement and produces less documentation."
    >
      <Seg x1={198} y1={38} x2={198} y2={264} colour="var(--muted)" width={1} dashed />
      <Text x={104} y={48} colour={F}>
        Waterfall
      </Text>
      {stages.map((s, i) => (
        <g key={s}>
          <rect x={30 + i * 12} y={62 + i * 36} width={92} height={28} rx="6" fill={F} fillOpacity="0.14" stroke={F} strokeWidth="1.4" />
          <Text x={76 + i * 12} y={80 + i * 36} colour="var(--fg)" size="note">
            {s}
          </Text>
          {i < stages.length - 1 && (
            <Arrow x1={76 + i * 12} y1={90 + i * 36} x2={88 + i * 12} y2={62 + (i + 1) * 36} colour="var(--muted)" width={1.3} />
          )}
        </g>
      ))}

      <Text x={300} y={48} colour={G}>
        Agile / iterative
      </Text>
      {[
        ['Analyse', 300, 82],
        ['Build', 352, 148],
        ['Test', 300, 212],
        ['Review', 246, 148],
      ].map(([label, x, y]) => (
        <g key={label}>
          <circle cx={x} cy={y} r={30} fill={G} fillOpacity="0.14" stroke={G} strokeWidth="1.5" />
          <Text x={x} y={y + 4} colour="var(--fg)" size="note">
            {label}
          </Text>
        </g>
      ))}
      <Arrow x1={328} y1={98} x2={344} y2={118} colour={G} width={1.4} />
      <Arrow x1={344} y1={178} x2={328} y2={196} colour={G} width={1.4} />
      <Arrow x1={272} y1={196} x2={256} y2={178} colour={G} width={1.4} />
      <Arrow x1={256} y1={118} x2={272} y2={98} colour={G} width={1.4} />
      <Note x={300} y={264} colour="var(--muted)">
        each loop ships something that works
      </Note>
    </Figure>
  )
}

function HuffmanTree() {
  /*
    "BANANA": A x3, N x2, B x1.
    Tree:        (6)
                /   \
             A(3)   (3)
                    /  \
                 N(2)  B(1)
    So A=0, N=10, B=11 -> 3*1 + 2*2 + 1*2 = 9 bits vs 6*8 = 48 as ASCII.
  */
  const node = (x, y, label, colour = F) => (
    <g>
      <circle cx={x} cy={y} r={17} fill={colour} fillOpacity="0.16" stroke={colour} strokeWidth="1.6" />
      <Text x={x} y={y + 4} colour="var(--fg)" size="note">
        {label}
      </Text>
    </g>
  )
  return (
    <Figure
      title="Huffman coding"
      desc="A binary tree built from character frequencies, with the branches labelled zero and one, and the resulting variable-length code for each letter."
      caption='Characters are merged from rarest upwards, so the most frequent letter ends up closest to the root and gets the shortest code. Encoding "BANANA" as A=0, N=10, B=11 takes 9 bits instead of 48 in ASCII. No code is a prefix of another, so the decoder never needs separators - that is what makes it lossless.'
    >
      <Seg x1={200} y1={72} x2={140} y2={130} colour="var(--muted)" width={1.5} />
      <Seg x1={200} y1={72} x2={260} y2={130} colour="var(--muted)" width={1.5} />
      <Seg x1={260} y1={146} x2={218} y2={200} colour="var(--muted)" width={1.5} />
      <Seg x1={260} y1={146} x2={302} y2={200} colour="var(--muted)" width={1.5} />

      <Text x={161} y={98} colour={A} size="note">
        0
      </Text>
      <Text x={239} y={98} colour={A} size="note">
        1
      </Text>
      <Text x={228} y={172} colour={A} size="note">
        0
      </Text>
      <Text x={295} y={172} colour={A} size="note">
        1
      </Text>

      {node(200, 56, '6')}
      {node(140, 146, 'A: 3', G)}
      {node(260, 146, '3')}
      {node(218, 216, 'N: 2', G)}
      {node(302, 216, 'B: 1', G)}

      <Text x={140} y={182} colour={G} size="note">
        A = 0
      </Text>
      <Text x={200} y={252} colour={G} size="note">
        N = 10
      </Text>
      <Text x={318} y={252} colour={G} size="note">
        B = 11
      </Text>
      <Note x={200} y={278} colour={F}>
        &quot;BANANA&quot; → 110100100 - 9 bits, not 48
      </Note>
    </Figure>
  )
}

function EncryptionKeys() {
  return (
    <Figure
      title="Symmetric and asymmetric encryption"
      desc="Two rows. In the first, one shared key both locks and unlocks the message. In the second, the recipient's public key locks it and only their private key unlocks it."
      caption="Symmetric uses one key for both operations - fast, but the key itself has to reach the other party somehow, and that is the weak point. Asymmetric uses a public key anyone may hold to encrypt and a private key only the owner has to decrypt, which solves key distribution; reversing the pair instead produces a digital signature that proves who sent it."
    >
      <Text x={200} y={44} colour={F}>
        Symmetric - one shared key
      </Text>
      <Box x={30} y={58} w={78} h={38} label="plaintext" />
      <Arrow x1={112} y1={77} x2={152} y2={77} colour="var(--fg)" width={1.5} />
      <Box x={156} y={58} w={78} h={38} label="ciphertext" colour={A} />
      <Arrow x1={238} y1={77} x2={278} y2={77} colour="var(--fg)" width={1.5} />
      <Box x={282} y={58} w={78} h={38} label="plaintext" />
      <Text x={132} y={116} colour={G} size="note">
        key K
      </Text>
      <Text x={258} y={116} colour={G} size="note">
        key K
      </Text>
      <Note x={200} y={136} colour={R}>
        fast, but K must be shared safely first
      </Note>

      <Seg x1={30} y1={152} x2={370} y2={152} colour="var(--muted)" width={1} dashed />

      <Text x={200} y={176} colour={F}>
        Asymmetric - a key pair
      </Text>
      <Box x={30} y={190} w={78} h={38} label="plaintext" />
      <Arrow x1={112} y1={209} x2={152} y2={209} colour="var(--fg)" width={1.5} />
      <Box x={156} y={190} w={78} h={38} label="ciphertext" colour={A} />
      <Arrow x1={238} y1={209} x2={278} y2={209} colour="var(--fg)" width={1.5} />
      <Box x={282} y={190} w={78} h={38} label="plaintext" />
      <Text x={132} y={248} colour={G} size="note">
        public key
      </Text>
      <Text x={258} y={248} colour={G} size="note">
        private key
      </Text>
      <Note x={200} y={272} colour={G}>
        nothing secret ever travels
      </Note>
    </Figure>
  )
}

function PageRank() {
  const pages = [
    { id: 'A', x: 100, y: 96, r: 20 },
    { id: 'B', x: 210, y: 66, r: 30 },
    { id: 'C', x: 306, y: 122, r: 16 },
    { id: 'D', x: 152, y: 196, r: 18 },
    { id: 'E', x: 268, y: 208, r: 14 },
  ]
  const links = [
    ['A', 'B'], ['D', 'B'], ['E', 'B'], ['C', 'B'], ['D', 'A'], ['E', 'C'],
  ]
  const at = (id) => pages.find((p) => p.id === id)
  return (
    <Figure
      title="PageRank"
      desc="Five circles of different sizes representing web pages, joined by arrows representing links, with the most-linked-to page drawn largest."
      caption="A page's rank rises with the number of pages linking TO it, weighted by how important those pages themselves are and divided by how many links each of them gives out. B is largest because four pages point at it. Rank is computed by repeating the calculation until the values settle, and combines with the index of page content to order results."
    >
      {links.map(([from, to], i) => {
        const a = at(from)
        const b = at(to)
        const dx = b.x - a.x
        const dy = b.y - a.y
        const len = Math.hypot(dx, dy)
        return (
          <Arrow
            key={i}
            x1={a.x + (dx / len) * a.r}
            y1={a.y + (dy / len) * a.r}
            x2={b.x - (dx / len) * (b.r + 4)}
            y2={b.y - (dy / len) * (b.r + 4)}
            colour="var(--muted)"
            width={1.4}
          />
        )
      })}
      {pages.map((p) => (
        <g key={p.id}>
          <circle
            cx={p.x}
            cy={p.y}
            r={p.r}
            fill={p.id === 'B' ? A : F}
            fillOpacity="0.2"
            stroke={p.id === 'B' ? A : F}
            strokeWidth="1.8"
          />
          <Text x={p.x} y={p.y + 5} colour="var(--fg)">
            {p.id}
          </Text>
        </g>
      ))}
      <Note x={200} y={256} colour="var(--fg)">
        circle size = rank - B is linked to by four pages
      </Note>
      <Note x={200} y={276} colour="var(--muted)">
        a link from a high-ranking page is worth more
      </Note>
    </Figure>
  )
}

function Decomposition() {
  return (
    <Figure
      title="Decomposition and abstraction"
      desc="A single problem at the top splitting into three sub-problems, each splitting again into smaller tasks, with a side note showing detail being removed at each level."
      caption="Decomposition breaks one problem into sub-problems small enough to solve and test on their own. Abstraction is the other half: at each level you keep only the detail that matters and discard the rest, which is why a Tube map works better than an accurate one. Together they are what makes a large program tractable."
    >
      <Box x={148} y={44} w={104} h={32} label="Problem" colour={F} />
      {[
        ['Input', 44],
        ['Process', 148],
        ['Output', 252],
      ].map(([label, x]) => (
        <g key={label}>
          <Arrow x1={200} y1={76} x2={x + 52} y2={112} colour="var(--muted)" width={1.3} />
          <Box x={x} y={114} w={104} h={30} label={label} colour={G} />
        </g>
      ))}
      {[
        ['validate', 44],
        ['calculate', 148],
        ['format', 252],
      ].map(([label, x]) => (
        <g key={label}>
          <Arrow x1={x + 52} y1={144} x2={x + 52} y2={176} colour="var(--muted)" width={1.3} />
          <Box x={x + 12} y={178} w={80} h={28} label={label} colour={A} />
        </g>
      ))}
      <Seg x1={24} y1={226} x2={376} y2={226} colour="var(--muted)" width={1} dashed />
      <Note x={200} y={246} colour="var(--fg)">
        each level keeps only the detail that level needs
      </Note>
      <Note x={200} y={266} colour="var(--muted)">
        sub-problems can be written, tested and reused separately
      </Note>
    </Figure>
  )
}

function DivideConquer() {
  /*
    Positions are derived from the level, so each box sits centred under its
    parent and the arrows land on the boxes they point at. The hand-placed
    version had the root centred at 230 with children at 140 and 268 - not
    symmetric about it - and drew its arrows to points inside the parent's
    own width, so they reached nothing. The root was also labelled "n/1".
  */
  const ROOT = 200
  const TOP_Y = 56
  const ROW_H = 58
  const levels = [1, 2, 4]
  const boxW = (level) => [104, 62, 34][level]
  const centreOf = (level, i) => {
    const span = 280 // full width the leaves spread across
    const step = span / levels[level]
    return ROOT - span / 2 + step * (i + 0.5)
  }
  return (
    <Figure
      title="Divide and conquer"
      desc="A list halving repeatedly down three levels, then the halves recombining upwards, with the number of levels marked as log n."
      caption="Split the problem in half, solve each half the same way, then combine. Halving repeatedly reaches size 1 after log₂n levels, and each level does O(n) work - which is where merge sort's O(n log n) and binary search's O(log n) both come from. The base case is what stops the recursion."
    >
      {levels.map((count, level) => (
        <g key={level}>
          {Array.from({ length: count }, (_, i) => {
            const w = boxW(level)
            const cxb = centreOf(level, i)
            const y = TOP_Y + level * ROW_H
            return (
              <g key={i}>
                {level > 0 && (
                  <Arrow
                    x1={centreOf(level - 1, Math.floor(i / 2))}
                    y1={y - ROW_H + 28}
                    x2={cxb}
                    y2={y - 4}
                    colour="var(--muted)"
                    width={1.2}
                  />
                )}
                <rect
                  x={cxb - w / 2}
                  y={y}
                  width={w}
                  height={28}
                  rx="5"
                  fill={F}
                  fillOpacity={0.24 - level * 0.05}
                  stroke={F}
                  strokeWidth="1.4"
                />
                <Text x={cxb} y={y + 19} colour="var(--fg)" size="note">
                  {level === 0 ? 'n' : `n/${2 ** level}`}
                </Text>
              </g>
            )
          })}
        </g>
      ))}
      <Seg x1={32} y1={TOP_Y} x2={32} y2={TOP_Y + 2 * ROW_H + 28} colour={A} width={1.4} dashed />
      <Text x={32} y={TOP_Y - 10} colour={A} size="note">
        log₂n levels
      </Text>
      <Arrow x1={ROOT} y1={TOP_Y + 2 * ROW_H + 52} x2={ROOT} y2={TOP_Y + 2 * ROW_H + 34} colour={G} width={1.6} />
      <Note x={ROOT} y={TOP_Y + 2 * ROW_H + 68} colour={G}>
        solve the base cases, then combine back up
      </Note>
      <Note x={ROOT} y={TOP_Y + 2 * ROW_H + 90} colour="var(--muted)">
        O(n) work per level × log n levels = O(n log n)
      </Note>
    </Figure>
  )
}

function ClassDiagram() {
  return (
    <Figure
      title="A class, its subclass, and encapsulation"
      desc="Two boxes in the standard three-part class layout, the second inheriting from the first with an arrow, each listing private attributes and public methods."
      caption="Attributes are marked private so nothing outside the class can change them directly - that is encapsulation, and public get/set methods are the controlled way in. Savings inherits everything from Account and adds its own; polymorphism means calling addInterest() on an Account variable runs the subclass's version at runtime."
    >
      {/* superclass */}
      <rect x={36} y={48} width={140} height={104} rx="6" fill={F} fillOpacity="0.1" stroke={F} strokeWidth="1.6" />
      <Seg x1={36} y1={72} x2={176} y2={72} colour={F} width={1.4} />
      <Seg x1={36} y1={116} x2={176} y2={116} colour={F} width={1.4} />
      <Text x={106} y={65} colour="var(--fg)">
        Account
      </Text>
      <Text x={46} y={88} anchor="start" colour="var(--muted)" size="note">
        − balance
      </Text>
      <Text x={46} y={106} anchor="start" colour="var(--muted)" size="note">
        − holder
      </Text>
      <Text x={46} y={134} anchor="start" colour={G} size="note">
        + deposit()
      </Text>

      {/* subclass */}
      <rect x={224} y={132} width={140} height={104} rx="6" fill={A} fillOpacity="0.1" stroke={A} strokeWidth="1.6" />
      <Seg x1={224} y1={156} x2={364} y2={156} colour={A} width={1.4} />
      <Seg x1={224} y1={200} x2={364} y2={200} colour={A} width={1.4} />
      <Text x={294} y={149} colour="var(--fg)">
        Savings
      </Text>
      <Text x={234} y={172} anchor="start" colour="var(--muted)" size="note">
        − rate
      </Text>
      <Text x={234} y={190} anchor="start" colour="var(--muted)" size="note">
        (inherits balance)
      </Text>
      <Text x={234} y={218} anchor="start" colour={G} size="note">
        + addInterest()
      </Text>

      {/* Arrow points subclass → superclass; the label sits above it rather
          than on it. */}
      <Arrow x1={252} y1={138} x2={182} y2={106} colour="var(--fg)" width={1.6} />
      <Text x={218} y={100} colour="var(--fg)" size="note">
        inherits
      </Text>
      <Note x={92} y={190} colour={R}>
        − private
      </Note>
      <Note x={92} y={208} colour={G}>
        + public
      </Note>
      <Note x={200} y={272} colour="var(--muted)">
        encapsulation · inheritance · polymorphism
      </Note>
    </Figure>
  )
}

function LegislationMap() {
  const acts = [
    { name: 'Data Protection Act', sub: 'personal data held fairly, accurately, no longer than needed', y: 52, colour: F },
    { name: 'Computer Misuse Act', sub: 'unauthorised access, access with intent, modification', y: 106, colour: A },
    { name: 'Copyright, Designs and Patents Act', sub: 'protects software, music, text as intellectual property', y: 160, colour: G },
    { name: 'Regulation of Investigatory Powers Act', sub: 'when the state may intercept communications', y: 214, colour: R },
  ]
  return (
    <Figure
      title="The four Acts, and what each one covers"
      desc="Four labelled bands, one for each piece of legislation, each stating in a line what conduct it governs."
      caption="Questions here ask which Act applies to a described scenario, so the split matters: the Data Protection Act governs how personal data is HELD, the Computer Misuse Act criminalises unauthorised ACCESS, Copyright protects the work itself, and RIPA governs interception by the state. Match the scenario to the conduct, then justify."
    >
      {acts.map((a) => (
        <g key={a.name}>
          <rect x={26} y={a.y} width={348} height={44} rx="8" fill={a.colour} fillOpacity="0.1" stroke={a.colour} strokeWidth="1.5" />
          <Text x={40} y={a.y + 19} anchor="start" colour="var(--fg)" size="note">
            {a.name}
          </Text>
          <Text x={40} y={a.y + 35} anchor="start" colour="var(--muted)" size="note">
            {a.sub}
          </Text>
        </g>
      ))}
      <Note x={200} y={278} colour="var(--muted)">
        legal · moral · ethical · cultural - say which lens you are using
      </Note>
    </Figure>
  )
}

function Normalisation() {
  return (
    <Figure
      title="Normalisation to third normal form"
      desc="One wide table with repeated data, split into three smaller linked tables, with the repeated values shown resolved."
      caption="1NF removes repeating groups so every field holds a single value. 2NF removes partial dependencies on part of a composite key. 3NF removes fields that depend on another non-key field rather than on the key. The result: each fact stored once, so an update cannot leave two copies disagreeing."
    >
      <Text x={200} y={44} colour={R}>
        Unnormalised - the tutor&apos;s name repeats on every row
      </Text>
      <rect x={40} y={54} width={320} height={40} rx="6" fill={R} fillOpacity="0.1" stroke={R} strokeWidth="1.5" />
      <Text x={200} y={72} colour="var(--fg)" size="note">
        StudentID · Name · Course · CourseFee · TutorName · TutorRoom
      </Text>
      <Text x={200} y={87} colour="var(--muted)" size="note">
        change one tutor&apos;s room and every row must change with it
      </Text>

      <Arrow x1={200} y1={100} x2={200} y2={124} colour="var(--fg)" width={1.5} />

      <Text x={200} y={140} colour={G}>
        3NF - each fact stored exactly once
      </Text>
      {[
        ['Student', 'StudentID · Name · CourseID', 30],
        ['Course', 'CourseID · Fee · TutorID', 142],
        ['Tutor', 'TutorID · Name · Room', 254],
      ].map(([title, fields, x]) => (
        <g key={title}>
          <rect x={x} y={152} width={116} height={58} rx="6" fill={F} fillOpacity="0.12" stroke={F} strokeWidth="1.5" />
          <Seg x1={x} y1={172} x2={x + 116} y2={172} colour={F} width={1.2} />
          <Text x={x + 58} y={166} colour="var(--fg)" size="note">
            {title}
          </Text>
          <Text x={x + 58} y={190} colour="var(--muted)" size="note">
            {fields.split(' · ')[0]}
          </Text>
          <Text x={x + 58} y={204} colour="var(--muted)" size="note">
            {fields.split(' · ').slice(1).join(' · ')}
          </Text>
        </g>
      ))}
      <Arrow x1={146} y1={182} x2={138} y2={182} colour={A} width={1.4} />
      <Arrow x1={258} y1={182} x2={250} y2={182} colour={A} width={1.4} />
      <Note x={200} y={238} colour={A}>
        foreign keys link them back together
      </Note>
      <Note x={200} y={262} colour="var(--muted)">
        no redundancy → no update, insert or delete anomalies
      </Note>
    </Figure>
  )
}

function PacketSwitching() {
  const nodes = [
    [70, 150], [150, 84], [150, 216], [250, 84], [250, 216], [330, 150],
  ]
  const edges = [[0, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 5], [1, 4], [2, 3]]
  return (
    <Figure
      title="Packet switching"
      desc="A network of routers with two different paths highlighted between the same sender and receiver, showing numbered packets travelling by different routes."
      caption="The message is split into packets, each carrying the destination address and its own sequence number. Routers send each packet by whatever route is best at that moment, so packets can arrive out of order or by different paths - the sequence numbers let the receiver reassemble them, and anything missing is requested again."
    >
      {edges.map(([a, b], i) => (
        <Seg key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} colour="var(--muted)" width={1.2} />
      ))}
      <Seg x1={nodes[0][0]} y1={nodes[0][1]} x2={nodes[1][0]} y2={nodes[1][1]} colour={F} width={2.6} />
      <Seg x1={nodes[1][0]} y1={nodes[1][1]} x2={nodes[3][0]} y2={nodes[3][1]} colour={F} width={2.6} />
      <Seg x1={nodes[3][0]} y1={nodes[3][1]} x2={nodes[5][0]} y2={nodes[5][1]} colour={F} width={2.6} />
      <Seg x1={nodes[0][0]} y1={nodes[0][1]} x2={nodes[2][0]} y2={nodes[2][1]} colour={A} width={2.6} />
      <Seg x1={nodes[2][0]} y1={nodes[2][1]} x2={nodes[4][0]} y2={nodes[4][1]} colour={A} width={2.6} />
      <Seg x1={nodes[4][0]} y1={nodes[4][1]} x2={nodes[5][0]} y2={nodes[5][1]} colour={A} width={2.6} />

      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={11} fill="var(--bg)" stroke="var(--fg)" strokeWidth="1.6" />
      ))}
      <Text x={70} y={126} colour="var(--fg)" size="note">
        sender
      </Text>
      <Text x={330} y={126} colour="var(--fg)" size="note">
        receiver
      </Text>
      <Text x={196} y={72} colour={F} size="note">
        packet 1
      </Text>
      <Text x={196} y={238} colour={A} size="note">
        packet 2
      </Text>
      <Note x={200} y={266} colour="var(--muted)">
        each packet holds the address and its sequence number
      </Note>
    </Figure>
  )
}

function HashTable() {
  const rows = [
    [0, '', ''],
    [1, 'Ali', F],
    [2, '', ''],
    [3, 'Ben', F],
    [4, 'Cara', A],
    [5, '', ''],
    [6, 'Dev', F],
  ]
  return (
    <Figure
      title="A hash table and a collision"
      desc="A numbered array of buckets with keys placed by a hash function, and one key that hashed to an already-occupied bucket placed in the next free slot instead."
      caption="The hash function turns a key straight into an index, so a lookup is O(1) - no searching. Two keys hashing to the same index is a collision; here Cara hashed to 3, found Ben there, and went into the next free slot. A table that fills up degrades towards O(n), which is why the load factor matters."
    >
      {rows.map(([i, val, colour]) => (
        <g key={i}>
          <rect x={150} y={44 + i * 30} width={110} height={26} rx="4" fill={colour || 'transparent'} fillOpacity="0.2" stroke="var(--muted)" strokeWidth="1.3" />
          <Text x={138} y={62 + i * 30} anchor="end" colour="var(--muted)" size="note">
            {i}
          </Text>
          {val && (
            <Text x={205} y={62 + i * 30} colour="var(--fg)" size="note">
              {val}
            </Text>
          )}
        </g>
      ))}
      <Arrow x1={62} y1={74} x2={144} y2={74} colour={F} width={1.4} />
      <Text x={62} y={64} colour={F} size="note">
        hash(&quot;Ali&quot;) = 1
      </Text>
      {/*
        Buckets occupy y = 44 to 250, so anything at 252 lands on the last
        row. The collision story now runs down the right-hand margin and the
        summary sits below the table entirely.
      */}
      <Text x={330} y={132} colour={R} size="note">
        hash(&quot;Cara&quot;) = 3
      </Text>
      <Arrow x1={330} y1={140} x2={266} y2={148} colour={R} width={1.5} />
      <Arrow x1={272} y1={160} x2={272} y2={178} colour={A} width={1.4} />
      <Text x={330} y={186} colour={A} size="note">
        taken → next free slot
      </Text>
      <Note x={200} y={272} colour="var(--muted)">
        O(1) lookup while the table stays sparse
      </Note>
    </Figure>
  )
}

function MergeSort() {
  const levels = [
    ['7 3 9 1'],
    ['7 3', '9 1'],
    ['7', '3', '9', '1'],
    ['3 7', '1 9'],
    ['1 3 7 9'],
  ]
  return (
    <Figure
      title="Merge sort"
      desc="A list of four numbers splitting down to single elements, then merging back upwards in sorted order at each step."
      caption="Split until every piece has one element - a list of one is already sorted. Then merge pairs by repeatedly taking the smaller front element, which keeps each merge linear. log₂n levels of splitting and O(n) work merging each level gives O(n log n) in every case, unlike quick sort's worst case."
    >
      {/*
        Positions come from the row length so every cell is centred in its
        share of the width, and thin connectors join each level to the next -
        without them the five rows read as a table rather than a tree.
      */}
      {levels.map((row, li) => {
        const centre = (n, i) => 200 - 140 + (280 / n) * (i + 0.5)
        const sorted = li >= 3
        return (
          <g key={li}>
            {row.map((cell, ci) => {
              const w = cell.length * 9 + 22
              const cxm = centre(row.length, ci)
              const y = 44 + li * 44
              return (
                <g key={ci}>
                  {li > 0 && (
                    <Seg
                      x1={centre(levels[li - 1].length, li < 3 ? Math.floor(ci / 2) : ci * 2)}
                      y1={y - 18}
                      x2={cxm}
                      y2={y}
                      colour="var(--muted)"
                      width={1}
                    />
                  )}
                  <rect
                    x={cxm - w / 2}
                    y={y}
                    width={w}
                    height={26}
                    rx="5"
                    fill={sorted ? G : F}
                    fillOpacity="0.18"
                    stroke={sorted ? G : F}
                    strokeWidth="1.4"
                  />
                  <Text x={cxm} y={y + 18} colour="var(--fg)" size="note">
                    {cell}
                  </Text>
                </g>
              )
            })}
          </g>
        )
      })}
      <Arrow x1={30} y1={54} x2={30} y2={150} colour={F} width={1.5} />
      <Text x={30} y={168} colour={F} size="note">
        divide
      </Text>
      <Arrow x1={370} y1={252} x2={370} y2={156} colour={G} width={1.5} />
      <Text x={370} y={272} colour={G} size="note">
        merge
      </Text>
      <Note x={200} y={286} colour="var(--muted)">
        O(n log n) best, average and worst
      </Note>
    </Figure>
  )
}

function BinarySearch() {
  const list = [2, 5, 8, 12, 16, 23, 38, 56, 72]
  // Searching for 23: mid=16 (i4) -> right half; mid=38 (i6) -> left; found i5.
  const state = { 4: A, 6: A, 5: G }
  return (
    <Figure
      title="Binary search"
      desc="A sorted list of nine numbers with the middle element checked, then the middle of the remaining half, then the target found, each step labelled."
      caption="Check the middle: too small, so discard the whole left half - half the list gone in one comparison. Repeating this finds any item in at most log₂n comparisons (4 for 9 items, 20 for a million). It only works on a SORTED list, which is the condition the exam wants stated."
    >
      {list.map((n, i) => (
        <g key={n}>
          <rect
            x={40 + i * 36}
            y={92}
            width={30}
            height={30}
            rx="5"
            fill={state[i] || F}
            fillOpacity={state[i] ? 0.3 : 0.1}
            stroke={state[i] || F}
            strokeWidth={state[i] ? 1.8 : 1.2}
          />
          <Text x={55 + i * 36} y={112} colour="var(--fg)" size="note">
            {n}
          </Text>
        </g>
      ))}
      <Text x={200} y={48} colour={F}>
        searching a sorted list for 23
      </Text>
      <Seg x1={38} y1={76} x2={182} y2={76} colour={R} width={1.6} dashed />
      <Text x={110} y={70} colour={R} size="note">
        discarded at step 1
      </Text>

      {/*
        The three step labels sit on separate rows, each under its own
        element. Stacked at one height they overlapped each other and their
        arrows crossed.
      */}
      <Arrow x1={185} y1={152} x2={185} y2={128} colour={A} width={1.4} />
      <Text x={185} y={168} colour={A} size="note">
        1. mid = 16, too small
      </Text>
      <Arrow x1={257} y1={196} x2={257} y2={128} colour={A} width={1.4} />
      <Text x={257} y={212} colour={A} size="note">
        2. mid = 38, too big
      </Text>
      <Arrow x1={221} y1={240} x2={221} y2={128} colour={G} width={1.6} />
      <Text x={221} y={256} colour={G} size="note">
        3. found at index 5
      </Text>
      <Note x={200} y={284} colour="var(--muted)">
        at most log₂n comparisons - 20 for a million items
      </Note>
    </Figure>
  )
}

function KarnaughMap() {
  /*
    K-map for AB + AC (grouped): cells indexed by AB across, C down.
    Columns: AB = 00, 01, 11, 10.  Rows: C = 0, 1.
  */
  const cols = ['00', '01', '11', '10']
  const grid = [
    [0, 0, 1, 1], // C = 0
    [0, 1, 1, 1], // C = 1
  ]
  return (
    <Figure
      title="A Karnaugh map"
      desc="A two-by-four grid of ones and zeros, with two overlapping loops drawn around adjacent groups of ones, each loop labelled with the term it simplifies to."
      caption="Columns are ordered 00, 01, 11, 10 so neighbours differ in one variable only - that is what makes grouping valid. Loop the largest possible blocks of 1s in powers of two; within a loop, whichever variable changes drops out. The two loops here give A + BC, far fewer gates than the raw expression."
    >
      {cols.map((c, i) => (
        <Text key={c} x={112 + i * 56} y={62} colour="var(--muted)" size="note">
          {c}
        </Text>
      ))}
      <Text x={72} y={62} colour="var(--muted)" size="note">
        AB
      </Text>
      <Text x={72} y={100} anchor="end" colour="var(--muted)" size="note">
        C=0
      </Text>
      <Text x={72} y={152} anchor="end" colour="var(--muted)" size="note">
        C=1
      </Text>

      {grid.map((row, ri) =>
        row.map((v, ci) => (
          <g key={`${ri}-${ci}`}>
            <rect x={84 + ci * 56} y={74 + ri * 52} width={56} height={52} fill="none" stroke="var(--muted)" strokeWidth="1.2" />
            <Text x={112 + ci * 56} y={106 + ri * 52} colour={v ? 'var(--fg)' : 'var(--muted)'}>
              {v}
            </Text>
          </g>
        )),
      )}

      {/* loop over the A = 1 columns (11, 10), both rows */}
      <rect x={196} y={78} width={108} height={100} rx="14" fill="none" stroke={F} strokeWidth="2.2" />
      <Text x={250} y={196} colour={F} size="note">
        A
      </Text>
      {/* loop over BC = 1 on the bottom row (01, 11) */}
      <rect x={144} y={130} width={108} height={44} rx="14" fill="none" stroke={A} strokeWidth="2.2" strokeDasharray="5 3" />
      <Text x={150} y={196} colour={A} size="note">
        BC
      </Text>
      <Note x={200} y={230} colour="var(--fg)">
        simplifies to A + BC
      </Note>
      <Note x={200} y={252} colour="var(--muted)">
        group in 1s, 2s, 4s or 8s - overlapping is allowed
      </Note>
    </Figure>
  )
}

function Recursion() {
  const frames = [
    ['factorial(4)', 'returns 4 × 6 = 24'],
    ['factorial(3)', 'returns 3 × 2 = 6'],
    ['factorial(2)', 'returns 2 × 1 = 2'],
    ['factorial(1)', 'base case → 1'],
  ]
  return (
    <Figure
      title="Recursion and the call stack"
      desc="Four stack frames drawn one above the other as the calls go deeper, with the base case at the bottom and arrows showing values returning back up."
      caption="Each call pushes a frame holding its own local variables and the address to return to. Nothing is calculated until the base case is reached; the answers then unwind back up. Without a reachable base case the stack keeps growing until it overflows - which is the crash this diagram explains."
    >
      {frames.map(([call, ret], i) => (
        <g key={call}>
          <rect
            x={70}
            y={54 + i * 48}
            width={180}
            height={38}
            rx="6"
            fill={i === 3 ? G : F}
            fillOpacity="0.14"
            stroke={i === 3 ? G : F}
            strokeWidth="1.5"
          />
          <Text x={160} y={78 + i * 48} colour="var(--fg)" size="note">
            {call}
          </Text>
          <Text x={264} y={78 + i * 48} anchor="start" colour={i === 3 ? G : 'var(--muted)'} size="note">
            {ret}
          </Text>
          {i < 3 && <Arrow x1={100} y1={92 + i * 48} x2={100} y2={54 + (i + 1) * 48} colour={F} width={1.3} />}
          {i > 0 && <Arrow x1={224} y1={54 + i * 48} x2={224} y2={92 + (i - 1) * 48} colour={A} width={1.3} />}
        </g>
      ))}
      <Text x={54} y={150} anchor="end" colour={F} size="note">
        calls
      </Text>
      <Text x={296} y={150} anchor="start" colour={A} size="note">
        returns
      </Text>
      <Note x={200} y={266} colour={R}>
        no reachable base case → stack overflow
      </Note>
    </Figure>
  )
}

function FloatingPoint() {
  return (
    <Figure
      title="Floating point representation"
      desc="An eight-bit mantissa and a four-bit exponent shown side by side, with the binary point marked and the value each part contributes written underneath."
      caption="The mantissa holds the digits, the exponent says where the binary point sits. Normalised form starts 0.1 for a positive number (1.0 for a negative one), which packs in the most significant digits and makes the representation unique. Moving bits from mantissa to exponent buys range at the cost of precision - that trade-off is the standard question."
    >
      <Text x={124} y={54} colour={F}>
        mantissa (8 bits)
      </Text>
      <Text x={306} y={54} colour={A}>
        exponent (4 bits)
      </Text>
      {'01101000'.split('').map((b, i) => (
        <g key={i}>
          <rect x={40 + i * 21} y={66} width={19} height={30} rx="3" fill={F} fillOpacity="0.16" stroke={F} strokeWidth="1.2" />
          <Text x={49.5 + i * 21} y={86} colour="var(--fg)" size="note">
            {b}
          </Text>
        </g>
      ))}
      {'0011'.split('').map((b, i) => (
        <g key={i}>
          <rect x={252 + i * 21} y={66} width={19} height={30} rx="3" fill={A} fillOpacity="0.16" stroke={A} strokeWidth="1.2" />
          <Text x={261.5 + i * 21} y={86} colour="var(--fg)" size="note">
            {b}
          </Text>
        </g>
      ))}
      <Seg x1={60} y1={62} x2={60} y2={100} colour={R} width={1.8} />
      <Text x={60} y={114} colour={R} size="note">
        binary point
      </Text>

      <Text x={124} y={148} colour="var(--muted)" size="note">
        0.1101 = 0.8125
      </Text>
      <Text x={306} y={148} colour="var(--muted)" size="note">
        0011 = 3
      </Text>
      <Arrow x1={124} y1={158} x2={180} y2={182} colour="var(--muted)" width={1.3} />
      <Arrow x1={306} y1={158} x2={230} y2={182} colour="var(--muted)" width={1.3} />
      <Text x={200} y={202} colour={F}>
        0.8125 × 2³ = 6.5
      </Text>

      <Seg x1={40} y1={220} x2={360} y2={220} colour="var(--muted)" width={1} dashed />
      <Note x={200} y={242} colour={G}>
        more mantissa bits → more precision
      </Note>
      <Note x={200} y={262} colour={A}>
        more exponent bits → more range
      </Note>
    </Figure>
  )
}

/* ================================================== ASSEMBLY & LMC */

function Lmc() {
  // A six-instruction program that adds two inputs, loaded from mailbox 00.
  const program = ['901', '306', '901', '106', '902', '000', '000']
  const mnemonic = ['INP', 'STA 06', 'INP', 'ADD 06', 'OUT', 'HLT', 'DAT']
  return (
    <Figure
      title="The Little Man Computer"
      desc="An in-tray and out-tray on the left, an accumulator and program counter in the middle, and a grid of numbered mailboxes on the right holding a short program that adds two numbers. Arrows show INP moving a value into the accumulator, STA and LDA moving values between the accumulator and a mailbox, and OUT sending the accumulator to the out-tray."
      caption="Memory is 100 mailboxes, 00 to 99, and each holds a three-digit number: the first digit is the opcode, the last two the address. Instructions and data share the same mailboxes (von Neumann), so location 06 here is data only because the program never executes it. The program counter walks down from 00; the accumulator is the only place arithmetic happens, which is why every calculation is LOAD, then ADD or SUB, then STORE."
    >
      <Box x={16} y={56} w={70} h={34} label="in-tray" sub="INP" colour={G} fill="color-mix(in srgb, #2e9e6b 14%, transparent)" />
      <Box x={16} y={186} w={70} h={34} label="out-tray" sub="OUT" colour={G} fill="color-mix(in srgb, #2e9e6b 14%, transparent)" />
      <Box x={112} y={100} w={90} h={40} label="accumulator" sub="ACC" colour={F} />
      <Box x={112} y={160} w={90} h={34} label="PC" sub="next address" colour={A} fill="color-mix(in srgb, #e08a2c 14%, transparent)" />
      <Arrow x1={86} y1={73} x2={128} y2={100} colour={G} width={1.5} />
      <Arrow x1={128} y1={140} x2={86} y2={186} colour={G} width={1.5} />
      <Arrow x1={202} y1={112} x2={236} y2={92} colour={F} width={1.5} />
      <Arrow x1={236} y1={104} x2={202} y2={126} colour={F} width={1.5} />
      <Text x={222} y={80} colour={F} size="note">
        LDA / STA
      </Text>
      <Text x={222} y={140} colour={F} size="note">
        ADD / SUB
      </Text>
      {Array.from({ length: 10 }, (_, i) => {
        const col = i % 2
        const row = Math.floor(i / 2)
        const x = 244 + col * 70
        const y = 48 + row * 40
        const loaded = i < program.length
        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width={62}
              height={32}
              rx="5"
              fill={loaded ? (i === 6 ? A : F) : 'var(--surface)'}
              fillOpacity={loaded ? 0.14 : 1}
              stroke={loaded ? (i === 6 ? A : F) : 'var(--line)'}
              strokeWidth="1.3"
            />
            <Text x={x + 10} y={y + 21} anchor="start" colour="var(--muted)" size="note">
              {String(i).padStart(2, '0')}
            </Text>
            <Text x={x + 52} y={y + 21} anchor="end" colour="var(--fg)" size="note">
              {loaded ? program[i] : ''}
            </Text>
          </g>
        )
      })}
      <Text x={352} y={38} colour="var(--muted)" size="note">
        mailboxes 00-99
      </Text>
      {mnemonic.map((m, i) => (
        <Text key={m + i} x={16} y={244 + Math.floor(i / 4) * 16} anchor="start" colour="var(--muted)" size="note">
          {i % 4 === 0 ? mnemonic.slice(i, i + 4).map((mm, j) => `${String(i + j).padStart(2, '0')} ${mm}`).join('   ') : ''}
        </Text>
      ))}
      <Note x={330} y={266} colour={A}>
        06 holds data, not code
      </Note>
    </Figure>
  )
}

export const CS_EXTRA_DIAGRAMS = {
  pipelining: Pipelining,
  'storage-media': StorageMedia,
  scheduling: Scheduling,
  'waterfall-agile': WaterfallAgile,
  'huffman-tree': HuffmanTree,
  'encryption-keys': EncryptionKeys,
  'page-rank': PageRank,
  decomposition: Decomposition,
  'divide-conquer': DivideConquer,
  'class-diagram': ClassDiagram,
  'legislation-map': LegislationMap,
  normalisation: Normalisation,
  'packet-switching': PacketSwitching,
  'hash-table': HashTable,
  'merge-sort': MergeSort,
  'binary-search': BinarySearch,
  'karnaugh-map': KarnaughMap,
  recursion: Recursion,
  'floating-point': FloatingPoint,
  lmc: Lmc,
}
