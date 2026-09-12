import { Note, Figure, Arrow, Seg, Dot, Text, Box, Axes, Curve, px, py } from './primitives'

/*
  OCR A-level Computer Science (H446) diagrams.

  Component 01 is full of structures that only make sense drawn - the
  fetch-decode-execute cycle, a logic gate, a binary tree, a network
  topology, the TCP/IP stack. Component 02's algorithms are the same: a
  linked list or a Dijkstra graph described in prose is much harder than
  the same thing shown.

  Same conventions as the other subjects: the primary object in brand
  blue, a compared/secondary one in green, anything highlighted in amber,
  and warnings/failure states in the shaky red.
*/

const F = 'var(--brand-strong)'
const G = '#2e9e6b'
const A = '#e08a2c'
const R = 'var(--r2-shaky)'
const ALT = '#7c6cf0' // a fifth curve, where the other four are already taken

/* ================================================== COMPONENT 1 */

function VonNeumann() {
  return (
    <Figure
      title="Von Neumann architecture"
      desc="A CPU containing a control unit, arithmetic logic unit and registers, connected to shared memory by the address, data and control buses."
      caption="One shared memory holds BOTH instructions and data, reached over a single set of buses - that shared path is the Von Neumann bottleneck. Harvard architecture separates them. The address bus is unidirectional; the data bus is bidirectional."
    >
      <rect x="30" y="46" width="170" height="150" rx="10" fill="none" stroke={F} strokeWidth="1.8" />
      <Text x={115} y={38} colour={F}>CPU</Text>
      <Box x={44} y={60} w={142} h={34} label="Control unit" />
      <Box x={44} y={102} w={142} h={34} label="ALU" />
      <Box x={44} y={144} w={142} h={40} label="Registers" sub="PC · MAR · MDR · CIR · ACC" />
      <Box x={252} y={92} w={118} h={62} label="Memory" sub="instructions + data" colour={G} />
      <Arrow x1={204} y1={104} x2={250} y2={104} colour={A} label="address" lx={227} ly={97} />
      <Seg x1={202} y1={124} x2={250} y2={124} colour={F} width={1.8} />
      <Arrow x1={250} y1={124} x2={202} y2={124} colour={F} />
      <Arrow x1={202} y1={124} x2={250} y2={124} colour={F} label="data" lx={226} ly={140} />
      <Arrow x1={204} y1={146} x2={250} y2={146} colour={G} label="control" lx={227} ly={161} />
      <Note x={370} y={216} anchor="end">shared memory = the bottleneck</Note>
    </Figure>
  )
}

function FetchDecodeExecute() {
  return (
    <Figure
      title="The fetch-decode-execute cycle"
      desc="Three stages in a loop: fetch the instruction from memory, decode it, then execute it, before returning to fetch the next."
      caption="FETCH: PC → MAR, instruction read into MDR then CIR, PC incremented. DECODE: the control unit splits the opcode from the operand. EXECUTE: the ALU carries it out, result to the accumulator. Then the cycle repeats."
    >
      <Box x={34} y={110} w={98} h={66} label="Fetch" sub="PC → MAR → MDR" />
      <Box x={150} y={110} w={98} h={66} label="Decode" sub="opcode + operand" />
      <Box x={266} y={110} w={98} h={66} label="Execute" sub="ALU → ACC" />
      <Arrow x1={134} y1={143} x2={148} y2={143} colour={F} />
      <Arrow x1={250} y1={143} x2={264} y2={143} colour={F} />
      <path d="M 315 108 C 315 60 83 60 83 108" fill="none" stroke={A} strokeWidth="1.8" markerEnd="url(#fdeloop)" />
      <defs>
        <marker id="fdeloop" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 z" fill={A} />
        </marker>
      </defs>
      <Note x={200} y={58} colour={A}>repeat for the next instruction</Note>
      <Note x={200} y={218}>an interrupt is checked at the END of the cycle</Note>
    </Figure>
  )
}

function LogicGates() {
  /*
    All SIX gates the specification names. The earlier version drew only
    AND, OR and XOR and left NOT, NAND and NOR to a sentence in the caption
    - but those three are examined the same way as the others, and NAND in
    particular is the one candidates are asked to build the rest from.

    Two columns of three: at 400 wide, six in a row would put each gate's
    input lines through its neighbour's box.
  */
  const gates = [
    { col: 0, row: 0, label: 'AND', sym: 'A ∧ B', rule: '1 only if BOTH are 1', inputs: 2 },
    { col: 0, row: 1, label: 'OR', sym: 'A ∨ B', rule: '1 if AT LEAST one is 1', inputs: 2 },
    { col: 0, row: 2, label: 'NOT', sym: '¬A', rule: 'inverts the input', inputs: 1 },
    { col: 1, row: 0, label: 'NAND', sym: '¬(A ∧ B)', rule: 'AND, then inverted', inputs: 2 },
    { col: 1, row: 1, label: 'NOR', sym: '¬(A ∨ B)', rule: 'OR, then inverted', inputs: 2 },
    { col: 1, row: 2, label: 'XOR', sym: 'A ⊕ B', rule: '1 only if they DIFFER', inputs: 2 },
  ]
  const COL_X = [52, 244]
  const ROW_Y = [40, 118, 196]
  const W = 74
  const H = 44
  return (
    <Figure
      title="The six logic gates"
      desc="AND, OR, NOT, NAND, NOR and XOR gates, each with its inputs and output, its Boolean expression and the rule for when its output is 1."
      caption="AND is 1 only when both inputs are; OR when at least one is; NOT inverts. NAND and NOR are those first two negated, and XOR is 1 only when the inputs differ - which is why XOR is the sum bit of a half adder. NAND alone can build any of the others, which is why it is called functionally complete."
    >
      {gates.map((g) => {
        const x = COL_X[g.col]
        const y = ROW_Y[g.row]
        return (
          <g key={g.label}>
            <rect x={x} y={y} width={W} height={H} rx="9" fill="color-mix(in srgb, var(--brand) 14%, transparent)" stroke={F} strokeWidth="1.7" />
            <Text x={x + W / 2} y={y + 19} colour="var(--fg)">{g.label}</Text>
            <Text x={x + W / 2} y={y + 35} colour={F} size="note">{g.sym}</Text>

            {g.inputs === 2 ? (
              <>
                <Seg x1={x - 26} y1={y + 13} x2={x} y2={y + 13} colour="var(--fg)" width={1.5} />
                <Seg x1={x - 26} y1={y + 31} x2={x} y2={y + 31} colour="var(--fg)" width={1.5} />
                <Note x={x - 30} y={y + 17} anchor="end">A</Note>
                <Note x={x - 30} y={y + 35} anchor="end">B</Note>
              </>
            ) : (
              <>
                <Seg x1={x - 26} y1={y + 22} x2={x} y2={y + 22} colour="var(--fg)" width={1.5} />
                <Note x={x - 30} y={y + 26} anchor="end">A</Note>
              </>
            )}
            <Seg x1={x + W} y1={y + 22} x2={x + W + 20} y2={y + 22} colour="var(--fg)" width={1.5} />
            {/* A negated output is drawn with the bubble that means it. */}
            {(g.label === 'NAND' || g.label === 'NOR' || g.label === 'NOT') && (
              <circle cx={x + W + 5} cy={y + 22} r="4" fill="var(--bg)" stroke={F} strokeWidth="1.5" />
            )}
            <Text x={x + W / 2} y={y + H + 13} colour="var(--muted)" size="note">{g.rule}</Text>
          </g>
        )
      })}
      <Note x={200} y={276} colour={A}>De Morgan: ¬(A ∧ B) ≡ ¬A ∨ ¬B · ¬(A ∨ B) ≡ ¬A ∧ ¬B</Note>
    </Figure>
  )
}

function BinaryTree() {
  const nodes = [
    { x: 200, y: 58, v: '12' },
    { x: 124, y: 118, v: '7' }, { x: 276, y: 118, v: '19' },
    { x: 84, y: 182, v: '4' }, { x: 164, y: 182, v: '9' },
    { x: 236, y: 182, v: '15' }, { x: 316, y: 182, v: '23' },
  ]
  const edges = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]]
  return (
    <Figure
      title="Binary search tree"
      desc="A binary search tree with a root node, each left child smaller than its parent and each right child larger."
      caption="Everything in a node's LEFT subtree is smaller, everything RIGHT is larger - so searching discards half the tree at each step, O(log n) when balanced. IN-ORDER traversal (left, root, right) outputs the values in ascending order: 4, 7, 9, 12, 15, 19, 23."
    >
      {edges.map(([a, b], i) => (
        <Seg key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} colour="var(--muted)" width={1.6} />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="19" fill="color-mix(in srgb, var(--brand) 16%, transparent)" stroke={F} strokeWidth="1.8" />
          <text x={n.x} y={n.y + 5} textAnchor="middle" className="dgm-label" fill="var(--fg)">{n.v}</text>
        </g>
      ))}
      <Note x={200} y={232} colour={A}>in-order → 4, 7, 9, 12, 15, 19, 23</Note>
    </Figure>
  )
}

function LinkedList() {
  const cells = [{ x: 34, v: 'A' }, { x: 138, v: 'B' }, { x: 242, v: 'C' }]
  return (
    <Figure
      title="Linked list"
      desc="Three nodes, each holding a data value and a pointer to the next, with the final pointer set to null."
      caption="Each node holds data plus a POINTER to the next, so nodes need not be contiguous in memory. Insertion and deletion just rewire pointers - cheap. But there is no random access: reaching the nth item means walking from the head, O(n), where an array is O(1)."
    >
      {cells.map((c, i) => (
        <g key={i}>
          <rect x={c.x} y={116} width="56" height="46" rx="6" fill="color-mix(in srgb, var(--brand) 16%, transparent)" stroke={F} strokeWidth="1.7" />
          <text x={c.x + 28} y={145} textAnchor="middle" className="dgm-label" fill="var(--fg)">{c.v}</text>
          <rect x={c.x + 56} y={116} width="34" height="46" rx="6" fill="none" stroke={G} strokeWidth="1.7" />
          {i < cells.length - 1 && <Arrow x1={c.x + 90} y1={139} x2={cells[i + 1].x - 2} y2={139} colour={G} />}
        </g>
      ))}
      <Seg x1={332} y1={122} x2={366} y2={156} colour={R} width={1.8} />
      <Note x={352} y={180} colour={R}>null</Note>
      <Note x={62} y={104}>data</Note>
      <Note x={107} y={104} colour={G}>pointer</Note>
      <Arrow x1={34} y1={92} x2={34} y2={112} colour={A} label="head" lx={34} ly={86} />
    </Figure>
  )
}

function StackQueue() {
  return (
    <Figure
      title="Stack and queue"
      desc="A stack with items added and removed at the top, next to a queue with items added at the rear and removed from the front."
      caption="A stack is LIFO - push and pop both act on the TOP. It runs the call stack, storing return addresses during subroutine calls, and undo. A queue is FIFO - enqueue at the rear, dequeue from the front. It runs print spoolers and scheduling queues."
    >
      <Text x={96} y={44} colour={F}>Stack (LIFO)</Text>
      {['C', 'B', 'A'].map((v, i) => (
        <g key={v}>
          <rect x={56} y={66 + i * 40} width="80" height="36" rx="5" fill="color-mix(in srgb, var(--brand) 16%, transparent)" stroke={F} strokeWidth="1.6" />
          <text x={96} y={90 + i * 40} textAnchor="middle" className="dgm-label" fill="var(--fg)">{v}</text>
        </g>
      ))}
      <Arrow x1={168} y1={68} x2={142} y2={68} colour={A} label="push/pop" lx={196} ly={62} />
      <Note x={96} y={210}>top of stack at the top</Note>

      <Text x={296} y={44} colour={G}>Queue (FIFO)</Text>
      {['A', 'B', 'C'].map((v, i) => (
        <g key={v}>
          <rect x={236 + i * 44} y={100} width="40" height="40" rx="5" fill="color-mix(in srgb, var(--r3-solid) 20%, transparent)" stroke={G} strokeWidth="1.6" />
          <text x={256 + i * 44} y={125} textAnchor="middle" className="dgm-label" fill="var(--fg)">{v}</text>
        </g>
      ))}
      <Arrow x1={222} y1={120} x2={196} y2={120} colour={A} label="dequeue" lx={196} ly={112} />
      <Arrow x1={392} y1={120} x2={372} y2={120} colour={A} label="enqueue" lx={340} ly={166} />
    </Figure>
  )
}

function NetworkTopologies() {
  const star = { cx: 108, cy: 140 }
  return (
    <Figure
      title="Star and mesh topologies"
      desc="A star network with every node connected to a central switch, beside a mesh network where nodes connect directly to one another."
      caption="STAR: every device connects to a central switch - easy to add devices and a single cable failure affects only one node, but the switch is a single point of failure. MESH: nodes connect directly, so there is no single point of failure and traffic can route around a break, at the cost of far more cabling."
    >
      <Text x={108} y={40} colour={F}>Star</Text>
      {[[108, 76], [46, 128], [170, 128], [72, 196], [144, 196]].map(([x, y], i) => (
        <g key={i}>
          <Seg x1={star.cx} y1={star.cy} x2={x} y2={y} colour="var(--muted)" width={1.4} />
          <Dot x={x} y={y} r={9} colour={F} />
        </g>
      ))}
      <rect x={star.cx - 16} y={star.cy - 12} width="32" height="24" rx="4" fill="color-mix(in srgb, var(--brand) 25%, transparent)" stroke={F} strokeWidth="1.6" />
      <Note x={108} y={224}>central switch</Note>

      <Text x={292} y={40} colour={G}>Mesh</Text>
      {(() => {
        const pts = [[292, 76], [230, 132], [354, 132], [258, 200], [326, 200]]
        const lines = []
        for (let i = 0; i < pts.length; i++)
          for (let j = i + 1; j < pts.length; j++)
            lines.push(<Seg key={`${i}-${j}`} x1={pts[i][0]} y1={pts[i][1]} x2={pts[j][0]} y2={pts[j][1]} colour="var(--muted)" width={1.1} />)
        return [...lines, ...pts.map(([x, y], i) => <Dot key={`p${i}`} x={x} y={y} r={9} colour={G} />)]
      })()}
      <Note x={292} y={224}>no single point of failure</Note>
    </Figure>
  )
}

function TcpIpStack() {
  const layers = [
    { label: 'Application', sub: 'HTTP, FTP, SMTP' },
    { label: 'Transport', sub: 'TCP - packets, ports' },
    { label: 'Internet', sub: 'IP - addressing, routing' },
    { label: 'Link', sub: 'MAC, physical transmission' },
  ]
  return (
    <Figure
      title="The TCP/IP stack"
      desc="Four stacked layers from Application down to Link, with arrows showing a header added at each layer on the way down and stripped on the way up."
      caption="Each layer adds its own header on the way down (encapsulation) and strips it on the way up. Transport splits data into packets and TCP guarantees ordered delivery; Internet adds IP addresses and routes; Link handles the physical hop. Layering means one layer can change without touching the others."
    >
      {layers.map((l, i) => (
        <Box key={l.label} x={70} y={46 + i * 52} w={220} h={44} label={l.label} sub={l.sub} colour={i % 2 ? G : F} />
      ))}
      <Arrow x1={44} y1={56} x2={44} y2={236} colour={A} />
      <Note x={26} y={150} anchor="middle" colour={A}>send</Note>
      <Arrow x1={316} y1={236} x2={316} y2={56} colour={G} />
      <Note x={340} y={150} anchor="middle" colour={G}>receive</Note>
    </Figure>
  )
}

function TwosComplement() {
  const bits = ['1', '0', '1', '1', '0', '0', '0', '0']
  const weights = ['−128', '64', '32', '16', '8', '4', '2', '1']
  return (
    <Figure
      title="Two's complement"
      desc="An eight-bit binary number with column headings, the most significant bit shown as negative, summing to a negative denary value."
      caption="The most significant bit carries a NEGATIVE weight, so 10110000 = −128 + 32 + 16 = −80. To negate a number: invert every bit, then add 1. One representation of zero, and addition works without special cases - which is why it is used rather than sign-and-magnitude."
    >
      {bits.map((b, i) => (
        <g key={i}>
          <rect x={30 + i * 43} y={110} width="38" height="42" rx="5" fill={i === 0 ? 'color-mix(in srgb, var(--r2-shaky) 22%, transparent)' : 'color-mix(in srgb, var(--brand) 14%, transparent)'} stroke={i === 0 ? R : F} strokeWidth="1.7" />
          <text x={49 + i * 43} y={138} textAnchor="middle" className="dgm-label" fill="var(--fg)">{b}</text>
          <text x={49 + i * 43} y={98} textAnchor="middle" className="dgm-note" fill={i === 0 ? R : 'var(--muted)'}>{weights[i]}</text>
        </g>
      ))}
      <Note x={200} y={182} colour={A}>−128 + 32 + 16 = −80</Note>
      <Note x={200} y={210}>negate = invert all bits, then add 1</Note>
    </Figure>
  )
}

function DijkstraGraph() {
  const nodes = [
    { x: 62, y: 148, v: 'A' }, { x: 156, y: 72, v: 'B' }, { x: 156, y: 220, v: 'C' },
    { x: 262, y: 148, v: 'D' }, { x: 350, y: 148, v: 'E' },
  ]
  const edges = [
    [0, 1, '4'], [0, 2, '2'], [1, 3, '5'], [2, 3, '8'], [2, 1, '1'], [3, 4, '6'],
  ]
  return (
    <Figure
      title="Weighted graph for Dijkstra's algorithm"
      desc="Five nodes joined by weighted edges, with the shortest path from A to E highlighted."
      caption="Start at 0, all others infinity. Repeatedly visit the nearest UNVISITED node and update its neighbours' tentative distances. A→C→B→D→E costs 2+1+5+6 = 14, shorter than A→B→D→E at 15. It cannot handle negative weights, because a visited node is never reconsidered."
    >
      {edges.map(([a, b, w], i) => {
        const mx = (nodes[a].x + nodes[b].x) / 2
        const my = (nodes[a].y + nodes[b].y) / 2
        const onPath = [1, 4, 2, 5].includes(i)
        return (
          <g key={i}>
            <Seg x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} colour={onPath ? A : 'var(--muted)'} width={onPath ? 2.6 : 1.4} />
            <circle cx={mx} cy={my} r="10" fill="var(--surface)" />
            <text x={mx} y={my + 4} textAnchor="middle" className="dgm-note" fill={onPath ? A : 'var(--muted)'}>{w}</text>
          </g>
        )
      })}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="18" fill="color-mix(in srgb, var(--brand) 16%, transparent)" stroke={F} strokeWidth="1.8" />
          <text x={n.x} y={n.y + 5} textAnchor="middle" className="dgm-label" fill="var(--fg)">{n.v}</text>
        </g>
      ))}
      <Note x={200} y={268} colour={A}>shortest A→E = 14</Note>
    </Figure>
  )
}

function BigO() {
  /*
    All six orders the specification lists. O(n log n) and O(2ⁿ) were
    missing, and they are the two that matter most in the sorting and
    intractability questions - merge sort against bubble sort, and the point
    at which a problem stops being solvable in reasonable time.

    Each curve is clipped at the top of the plot, and labelled where it
    leaves rather than all at the right edge, where six labels would stack.
  */
  const CEIL = 0.94
  /*
    Each curve STOPS where it leaves the top of the plot rather than being
    clamped to it, so the fast-growing ones do not all run along the ceiling
    as flat parallel lines, and its label goes at the end of it. O(2ⁿ) leaves
    first, then O(n²) - the order that makes the point.
  */
  const line = (fn, colour, label, dx = 6, dy = -8) => {
    const pts = []
    let last = null
    for (let i = 1; i <= 90; i += 1) {
      const t = i / 90
      const v = fn(t)
      if (v > CEIL) break
      last = { x: px(0.06 + t * 0.86), y: py(v) }
      pts.push(`${last.x} ${last.y}`)
    }
    return (
      <Curve d={'M ' + pts.join(' L ')} colour={colour} label={label} lx={last.x + dx} ly={last.y + dy} width={2} />
    )
  }
  const log10 = (v) => Math.log(v) / Math.log(10)
  return (
    <Figure
      title="Big-O complexity"
      desc="Six curves of operations against input size - constant, logarithmic, linear, linearithmic, quadratic and exponential - diverging sharply as n grows."
      caption="O(1) constant (a hash lookup), O(log n) halving each step (binary search), O(n) linear (linear search), O(n log n) the best a comparison sort can do (merge sort), O(n²) nested loops (bubble sort), O(2ⁿ) exponential - intractable beyond small n. What matters is the shape as n grows: an O(n²) algorithm is fine on ten items and unusable on a million."
    >
      <Axes xLabel="Input size, n" yLabel="Operations" />
      {line(() => 0.08, G, 'O(1)', 8, 4)}
      {line((t) => 0.1 + 0.22 * log10(1 + t * 9), F, 'O(log n)', 8, 4)}
      {line((t) => 0.1 + t * 0.6, A, 'O(n)', 8, 4)}
      {line((t) => 0.1 + 0.8 * t * log10(1 + 9 * t), ALT, 'O(n log n)', 8, 4)}
      {/* R is the same amber family as A, so O(n) and O(n²) read alike. */}
      {line((t) => 0.1 + 2.2 * t * t, '#d9534f', 'O(n²)', 6, -8)}
      {line((t) => 0.1 + 0.02 * (2 ** (11 * t) - 1), '#c2477f', 'O(2ⁿ)', -12, -10)}
    </Figure>
  )
}

function ErDiagram() {
  return (
    <Figure
      title="Entity relationship diagram"
      desc="Three entities joined by crow's foot notation showing a one-to-many relationship between customer and order, and many-to-many between order and product."
      caption="One customer places MANY orders - the crow's foot sits at the 'many' end. A many-to-many relationship (orders to products) cannot be stored directly: it needs a linking table holding a foreign key to each side. Referential integrity means every foreign key must match an existing primary key."
    >
      <Box x={22} y={110} w={100} h={52} label="Customer" sub="customerID (PK)" />
      <Box x={150} y={110} w={100} h={52} label="Order" sub="orderID (PK)" colour={G} />
      <Box x={278} y={110} w={100} h={52} label="Product" sub="productID (PK)" />
      <Seg x1={122} y1={136} x2={150} y2={136} colour="var(--fg)" width={1.6} />
      <Seg x1={140} y1={126} x2={150} y2={136} colour="var(--fg)" width={1.4} />
      <Seg x1={140} y1={146} x2={150} y2={136} colour="var(--fg)" width={1.4} />
      <Seg x1={250} y1={136} x2={278} y2={136} colour="var(--fg)" width={1.6} />
      <Seg x1={250} y1={136} x2={260} y2={126} colour="var(--fg)" width={1.4} />
      <Seg x1={250} y1={136} x2={260} y2={146} colour="var(--fg)" width={1.4} />
      <Seg x1={268} y1={126} x2={278} y2={136} colour="var(--fg)" width={1.4} />
      <Seg x1={268} y1={146} x2={278} y2={136} colour="var(--fg)" width={1.4} />
      <Note x={136} y={100}>1 : many</Note>
      <Note x={264} y={100} colour={A}>many : many</Note>
      <Note x={200} y={196} colour={A}>many-to-many needs a linking table</Note>
    </Figure>
  )
}

function CompilerStages() {
  const stages = ['Lexical analysis', 'Syntax analysis', 'Semantic analysis', 'Code generation', 'Optimisation']
  return (
    <Figure
      title="Stages of compilation"
      desc="Five sequential compilation stages from lexical analysis through to optimisation, with what each stage produces."
      caption="LEXICAL: strip whitespace and comments, produce tokens, start the symbol table. SYNTAX: check the tokens against the grammar - a missing bracket is caught here. SEMANTIC: type checking. CODE GENERATION: produce object code. OPTIMISATION: make it smaller or faster."
    >
      {stages.map((s, i) => (
        <g key={s}>
          <rect x={26} y={38 + i * 42} width={250} height={32} rx="7" fill="color-mix(in srgb, var(--brand) 13%, transparent)" stroke={i % 2 ? G : F} strokeWidth="1.6" />
          <text x={151} y={59 + i * 42} textAnchor="middle" className="dgm-label" fill="var(--fg)">{s}</text>
          {i < stages.length - 1 && <Arrow x1={151} y1={70 + i * 42} x2={151} y2={80 + i * 42} colour="var(--muted)" width={1.4} />}
        </g>
      ))}
      <Note x={348} y={62} anchor="end">tokens</Note>
      <Note x={348} y={104} anchor="end">parse tree</Note>
      <Note x={348} y={230} anchor="end">object code</Note>
    </Figure>
  )
}

function PagingVirtualMemory() {
  return (
    <Figure
      title="Paging and virtual memory"
      desc="Logical pages mapped by a page table onto physical frames in RAM, with pages not currently needed held on disk."
      caption="Memory is split into fixed-size PAGES, physical memory into FRAMES of the same size. A page table maps one to the other. Accessing a page that is not in RAM causes a page fault and it is loaded from disk. Too much of this is thrashing - more time swapping than executing."
    >
      <Text x={70} y={40} colour={F}>Logical pages</Text>
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={32} y={54 + i * 40} width={76} height={32} rx="5" fill="color-mix(in srgb, var(--brand) 14%, transparent)" stroke={F} strokeWidth="1.5" />
      ))}
      <Box x={140} y={100} w={110} h={70} label="Page table" sub="page → frame" colour={A} />
      <Text x={330} y={40} colour={G}>RAM frames</Text>
      {[0, 1, 2].map((i) => (
        <rect key={i} x={292} y={54 + i * 40} width={76} height={32} rx="5" fill="color-mix(in srgb, var(--r3-solid) 16%, transparent)" stroke={G} strokeWidth="1.5" />
      ))}
      <Arrow x1={110} y1={130} x2={138} y2={130} colour={A} />
      <Arrow x1={252} y1={130} x2={290} y2={104} colour={A} />
      <rect x={292} y={186} width={76} height={32} rx="5" fill="none" stroke={R} strokeWidth="1.5" strokeDasharray="4 3" />
      <Note x={330} y={232} colour={R}>on disk - page fault</Note>
    </Figure>
  )
}

function ClientServerP2P() {
  return (
    <Figure
      title="Client-server and peer-to-peer"
      desc="Several clients connected to a central server, beside a peer-to-peer network where every machine connects directly to the others."
      caption="CLIENT-SERVER centralises data and security and is easier to back up and manage, but the server is a single point of failure and a bottleneck. PEER-TO-PEER needs no server and scales cheaply, but data is scattered, harder to secure and harder to back up."
    >
      <Text x={104} y={40} colour={F}>Client-server</Text>
      <Box x={68} y={56} w={72} h={36} label="Server" colour={F} />
      {[[44, 176], [104, 200], [164, 176]].map(([x, y], i) => (
        <g key={i}>
          <Seg x1={104} y1={94} x2={x} y2={y - 10} colour="var(--muted)" width={1.4} />
          <rect x={x - 22} y={y - 10} width="44" height="30" rx="4" fill="color-mix(in srgb, var(--brand) 14%, transparent)" stroke={F} strokeWidth="1.4" />
        </g>
      ))}
      <Note x={104} y={232}>central point of failure</Note>

      <Text x={296} y={40} colour={G}>Peer-to-peer</Text>
      {(() => {
        const pts = [[296, 76], [236, 148], [356, 148], [296, 208]]
        const out = []
        for (let i = 0; i < pts.length; i++)
          for (let j = i + 1; j < pts.length; j++)
            out.push(<Seg key={`l${i}${j}`} x1={pts[i][0]} y1={pts[i][1]} x2={pts[j][0]} y2={pts[j][1]} colour="var(--muted)" width={1.2} />)
        pts.forEach(([x, y], i) =>
          out.push(<rect key={`n${i}`} x={x - 22} y={y - 15} width="44" height="30" rx="4" fill="color-mix(in srgb, var(--r3-solid) 16%, transparent)" stroke={G} strokeWidth="1.4" />),
        )
        return out
      })()}
      <Note x={296} y={244}>every peer is client and server</Note>
    </Figure>
  )
}

function InsertionSort() {
  const rows = [
    ['5', '2', '9', '1'],
    ['2', '5', '9', '1'],
    ['2', '5', '9', '1'],
    ['1', '2', '5', '9'],
  ]
  return (
    <Figure
      title="Insertion sort"
      desc="Four passes of an insertion sort, each taking the next unsorted element and placing it into its correct position among the sorted ones."
      caption="Take each element in turn and insert it into its right place among those already sorted, shifting larger ones right. O(n²) in the worst case but O(n) on an already-sorted list, and efficient for small or nearly-sorted data - which is why real sorts fall back to it on small partitions."
    >
      {rows.map((row, r) =>
        row.map((v, c) => (
          <g key={`${r}-${c}`}>
            <rect x={92 + c * 56} y={44 + r * 50} width={44} height={36} rx="5"
              fill={c <= r ? 'color-mix(in srgb, var(--r3-solid) 22%, transparent)' : 'color-mix(in srgb, var(--brand) 12%, transparent)'}
              stroke={c <= r ? G : F} strokeWidth="1.5" />
            <text x={114 + c * 56} y={68 + r * 50} textAnchor="middle" className="dgm-label" fill="var(--fg)">{v}</text>
          </g>
        )),
      )}
      <Note x={62} y={66} anchor="end">pass 1</Note>
      <Note x={62} y={216} anchor="end">pass 4</Note>
      <Note x={330} y={244} anchor="end" colour={G}>green = sorted</Note>
    </Figure>
  )
}

export const CS_DIAGRAMS = {
  'von-neumann': VonNeumann,
  'fetch-decode-execute': FetchDecodeExecute,
  'logic-gates': LogicGates,
  'binary-tree': BinaryTree,
  'linked-list': LinkedList,
  'stack-queue': StackQueue,
  'network-topologies': NetworkTopologies,
  'tcp-ip-stack': TcpIpStack,
  'twos-complement': TwosComplement,
  'dijkstra-graph': DijkstraGraph,
  'big-o': BigO,
  'er-diagram': ErDiagram,
  'compiler-stages': CompilerStages,
  paging: PagingVirtualMemory,
  'client-server': ClientServerP2P,
  'insertion-sort': InsertionSort,
}
