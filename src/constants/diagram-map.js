import { ECON_CHAPTER_DIAGRAMS } from './econ-diagrams'
import { DIAGRAM_KEYWORDS } from './diagram-keywords'

/*
  Which diagram belongs to which chapter, for every subject.

  Economics keeps its own map (econ-diagrams.js) because its entries carry
  `after` anchors that position a diagram inside the note prose. Maths and
  Computer Science append theirs to the end of the note instead - their
  notes are shorter and more structured, so a diagram at the close of the
  relevant section reads fine and there is no anchor to drift.

  A chapter may list several. The first is the "primary" one, used wherever
  there is room for exactly one (a mark scheme, an MCQ explanation).
*/

export const MATHS_CHAPTER_DIAGRAMS = {
  // ---------------------------------------------------- Pure Year 1
  'Algebraic Expressions': ['completing-square'],
  Quadratics: ['discriminant', 'completing-square'],
  'Equations and Inequalities': ['discriminant', 'straight-line'],
  'Graphs and Transformations': ['graph-transformations'],
  'Straight Line Graphs': ['straight-line'],
  Circles: ['circle-geometry'],
  'Algebraic Methods (Proof & Division)': ['factor-theorem'],
  'The Binomial Expansion': ['pascals-triangle'],
  'Trigonometric Ratios': ['triangle-rules', 'trig-graphs'],
  'Trigonometric Identities and Equations': ['cast-diagram', 'trig-graphs'],
  'Vectors (2D)': ['vectors-2d'],
  Differentiation: ['stationary-points', 'tangent-normal'],
  Integration: ['area-under-curve'],
  'Exponentials and Logarithms': ['exponential-log', 'log-linear'],

  // ---------------------------------------------------- Pure Year 2
  'Algebraic Methods (Partial Fractions)': ['factor-theorem'],
  'Functions and Graphs': ['modulus-graph', 'inverse-function'],
  'Sequences and Series': ['sequences-series'],
  'The Binomial Expansion (General n)': ['pascals-triangle'],
  Radians: ['sector'],
  'Trigonometric Functions': ['reciprocal-trig', 'cast-diagram'],
  'Trigonometry and Modelling': ['harmonic-form', 'trig-graphs'],
  'Parametric Equations': ['parametric-curve'],
  'Differentiation (Year 2)': ['concavity', 'tangent-normal'],
  'Numerical Methods': ['newton-raphson', 'iteration-staircase', 'trapezium-rule'],
  'Integration (Year 2)': ['area-under-curve', 'trapezium-rule'],
  'Vectors (3D)': ['vectors-3d'],

  // ---------------------------------------------------- Statistics
  'Statistical Sampling': ['sampling-methods'],
  'Data Presentation and Interpretation': ['histogram', 'box-plot'],
  Probability: ['venn-diagram', 'tree-diagram'],
  'Statistical Distributions (Binomial)': ['binomial-bars'],
  'Statistical Hypothesis Testing': ['hypothesis-regions'],
  'Regression, Correlation and Hypothesis Testing': ['scatter-regression'],
  'Conditional Probability': ['venn-diagram', 'tree-diagram'],
  'The Normal Distribution': ['normal-distribution'],

  // ---------------------------------------------------- Mechanics
  'Modelling in Mechanics': ['forces-on-slope'],
  'Constant Acceleration (SUVAT)': ['velocity-time'],
  "Forces and Newton's Laws": ['forces-on-slope', 'connected-particles'],
  'Variable Acceleration': ['variable-acceleration'],
  Moments: ['moments-rod'],
  'Forces and Friction': ['forces-on-slope'],
  Projectiles: ['projectile-path'],
  'Application of Forces': ['connected-particles', 'ladder'],
  'Further Kinematics': ['variable-acceleration', 'velocity-time'],
}

export const CS_CHAPTER_DIAGRAMS = {
  // Pipelining sits here rather than under Types of Processor because it is
  // spec point 1.1.1(d) and this chapter's notes (cs-notes-processor.js)
  // are where it is taught; each marker is placed inline beside its passage.
  'Structure and Function of the Processor': ['von-neumann', 'fetch-decode-execute', 'pipelining'],
  // Deliberately none. The chapter's notes cover CISC/RISC, GPUs, multicore
  // and parallel processing, and mention pipelining only as a property RISC
  // suits - a diagram appended here had no passage tying it to anything
  // (von-neumann was dropped from this list earlier for the same reason).
  'Types of Processor': [],
  'Input, Output and Storage': ['storage-media'],
  'Systems Software': ['scheduling', 'paging'],
  'Applications Generation (Translators)': ['compiler-stages'],
  'Software Development Methodologies': ['waterfall-agile'],
  'Compression, Encryption and Hashing': ['huffman-tree', 'encryption-keys', 'hash-table'],
  Databases: ['er-diagram', 'normalisation'],
  Networks: ['network-topologies', 'tcp-ip-stack', 'packet-switching', 'client-server'],
  'Web Technologies': ['client-server', 'page-rank'],
  'Data Types and Number Representation': ['twos-complement', 'floating-point'],
  'Data Structures': ['binary-tree', 'linked-list', 'stack-queue', 'hash-table'],
  'Boolean Algebra': ['logic-gates', 'karnaugh-map'],
  'Algorithms: Searching, Sorting & Graph Traversal': [
    'big-o',
    'binary-search',
    'insertion-sort',
    'merge-sort',
    'dijkstra-graph',
    'binary-tree',
  ],
  'Elements of Computational Thinking': ['decomposition'],
  'Programming Techniques': ['recursion', 'stack-queue'],
  'Computational Methods': ['divide-conquer', 'big-o'],
  'Programming Paradigms': ['class-diagram'],
  'Assembly Language and the Little Man Computer': ['lmc', 'fetch-decode-execute'],
  'Algorithm Complexity (Big O)': ['big-o', 'binary-search'],
  'Object-Oriented Programming': ['class-diagram'],
  'Legal, Moral, Cultural and Ethical Issues': ['legislation-map'],
}

/* Chapter -> diagram ids, for any subject. */
export function diagramsForChapter(subject, topic) {
  const s = String(subject || '').toLowerCase()
  if (s === 'economics') return (ECON_CHAPTER_DIAGRAMS[topic] || []).map((d) => d.id)
  if (s === 'maths') return MATHS_CHAPTER_DIAGRAMS[topic] || []
  if (s === 'computer science') return CS_CHAPTER_DIAGRAMS[topic] || []
  return []
}

export const primaryDiagram = (subject, topic) => diagramsForChapter(subject, topic)[0] || null

/*
  Does the question actually call for a diagram to be drawn?

  Kept deliberately wide for Maths and Mechanics, where "sketch", "draw"
  and the named objects (velocity-time graph, force diagram, Venn) all
  mean the same thing to a marker.
*/
const WANTS_DIAGRAM =
  /\bdiagram|\bsketch|\bdraw\b|\bgraph(s|ically)?\b|\bcurve|\bshift(s|ed|ing)?\b|\bvenn\b|\btree\b|\bhistogram\b|\bbox plot\b|force|velocity-time|shade/i

/*
  Which diagram best fits ONE question, out of the several its chapter has.

  Taking the chapter's first diagram every time was wrong once chapters
  carried more than one: a price-discrimination question in the Monopoly
  chapter got the plain monopoly graph, and a PES question got whatever
  happened to be listed first. These keywords let an item claim the diagram
  it is actually about; anything that matches nothing falls back to the
  chapter's first, which is still the right default.
*/
function pickDiagram(subject, topic, text) {
  const candidates = diagramsForChapter(subject, topic)
  if (!candidates.length) return null
  if (candidates.length === 1 || !text) return candidates[0]
  for (const id of candidates) {
    const re = DIAGRAM_KEYWORDS[id]
    if (re && re.test(text)) return id
  }
  return candidates[0]
}

/*
  Attach the right diagram to each content item.

  `diagram`         the diagram this item is about, chosen from its
                    chapter's list by keyword (see pickDiagram).
  `diagramExpected` the item's own wording calls for one to be drawn, so a
                    mark scheme has to show it.

  Derived rather than set by hand on ~1500 items, so new content inherits
  the right diagram automatically. Items that already name one (the "sketch
  this" flashcards) keep theirs.
*/
export function tagWithDiagrams(items, subject) {
  if (!Array.isArray(items)) return items
  return items.map((it) => {
    const text = [it.question, it.front, it.back, it.explanation, ...(it.markScheme || [])]
      .filter(Boolean)
      .join(' ')
    const id = it.diagram || pickDiagram(subject, it.topic, text)
    if (!id) return it
    return { ...it, diagram: id, diagramExpected: WANTS_DIAGRAM.test(text) }
  })
}

const marker = (id) => `<div data-diagram="${id}"></div>`

/*
  Append each chapter's diagrams to the end of its note.

  Used for Maths and Computer Science. Economics has its own anchored
  version in econ-diagrams.js, because its notes are long enough that a
  diagram belongs beside the passage describing it rather than at the end.
*/
export function appendDiagramsToNotes(notes, map) {
  const out = { ...notes }
  for (const [chapter, ids] of Object.entries(map)) {
    const html = out[chapter]
    if (!html) continue
    let next = html
    for (const id of ids) {
      if (next.includes(marker(id))) continue
      next += marker(id)
    }
    out[chapter] = next
  }
  return out
}
