/*
  Diagram integrity check.

  The first version of this only asked "does every chapter have A diagram",
  which is how "Supply and Elasticity of Supply" passed while showing a plain
  supply-and-demand graph - no PES diagram existed anywhere in the set. It now
  also asks whether the chapter's own subject matter has a matching diagram,
  by testing each chapter TITLE against the same keyword table the runtime
  uses to pick one. A title that names a concept we can draw, in a chapter
  that does not offer that drawing, is a stand-in - the exact defect above.

  Diagram ids are read out of the component sources rather than imported,
  because those are .jsx and this runs on plain node.

  Run: node scripts/check-diagrams.mjs
*/
import { readFileSync } from 'node:fs'
import { getPackByName } from '../src/constants/library.js'
import { diagramsForChapter } from '../src/constants/diagram-map.js'
import { DIAGRAM_KEYWORDS } from '../src/constants/diagram-keywords.js'
import { ECON_ESSAY_ANSWERS } from '../src/constants/econ-essay-answers.js'

const SOURCES = {
  Economics: ['economics', 'economicsExtra', 'economicsGaps'],
  Maths: ['maths', 'mathsExtra'],
  'Computer Science': ['computerScience', 'computerScienceExtra'],
}
const known = new Set()
const ownedBy = {} // subject -> its own diagram ids
for (const [subject, files] of Object.entries(SOURCES)) {
  ownedBy[subject] = new Set()
  for (const f of files) {
    const src = readFileSync(new URL(`../src/components/diagrams/${f}.jsx`, import.meta.url), 'utf8')
    const block = src.slice(src.indexOf('_DIAGRAMS = {'))
    for (const m of block.matchAll(/^\s*'?([a-z0-9-]+)'?\s*:/gm)) {
      known.add(m[1])
      ownedBy[subject].add(m[1])
    }
  }
}

const problems = []
const used = new Set()
const rows = []

for (const subject of ['Maths', 'Economics', 'Computer Science']) {
  const pack = getPackByName(subject)
  let withNote = 0
  let markers = 0

  for (const topic of pack.topics) {
    const html = pack.notes[topic] || ''
    const inNote = [...html.matchAll(/data-diagram="([a-z0-9-]+)"/g)].map((m) => m[1])
    if (inNote.length) withNote += 1
    markers += inNote.length
    for (const id of inNote) {
      used.add(id)
      if (!known.has(id)) problems.push(`${subject} / ${topic}: note uses unknown diagram "${id}"`)
    }

    const mapped = diagramsForChapter(subject, topic)
    if (!mapped.length) problems.push(`${subject} / ${topic}: no diagram mapped`)
    for (const id of mapped) {
      if (!known.has(id)) problems.push(`${subject} / ${topic}: mapped unknown "${id}"`)
      else if (!inNote.includes(id)) problems.push(`${subject} / ${topic}: mapped "${id}" never reached the note`)
    }

    /*
      The check that would have caught PES: a chapter whose TITLE names a
      concept we can draw, but which does not offer that drawing, is being
      represented by a stand-in. Restricted to the subject's own diagrams -
      an Economics title has no business being tested against "von-neumann".
    */
    const titleAlreadyAnswered = mapped.some((id) => DIAGRAM_KEYWORDS[id]?.test(topic))
    for (const [id, re] of Object.entries(DIAGRAM_KEYWORDS)) {
      if (!ownedBy[subject].has(id)) continue
      if (re.test(topic) && !mapped.includes(id) && !titleAlreadyAnswered) {
        problems.push(`${subject} / ${topic}: title names "${id}" but the chapter does not offer it`)
      }
    }
  }

  for (const it of [...pack.mcq, ...pack.examQuestions, ...pack.flashcards]) {
    if (it.diagram && !known.has(it.diagram)) problems.push(`${subject}: item carries unknown diagram "${it.diagram}"`)
  }
  if (withNote !== pack.topics.length) {
    problems.push(`${subject}: ${pack.topics.length - withNote} chapter(s) have no diagram in the notes`)
  }

  rows.push([
    subject,
    pack.topics.length,
    `${withNote}/${pack.topics.length}`,
    markers,
    `${pack.flashcards.filter((c) => c.diagram).length}/${pack.flashcards.length}`,
    `${pack.mcq.filter((q) => q.diagram).length}/${pack.mcq.length}`,
    `${pack.examQuestions.filter((q) => q.diagram).length}/${pack.examQuestions.length}`,
  ])
}

const head = ['subject', 'chapters', 'illustrated', 'markers', 'flashcards', 'mcq', 'exam Qs']
const w = head.map((h, i) => Math.max(h.length, ...rows.map((r) => String(r[i]).length)))
console.log(head.map((h, i) => h.padEnd(w[i])).join('  '))
for (const r of rows) console.log(r.map((c, i) => String(c).padEnd(w[i])).join('  '))

// The essay planner's developed answers embed diagrams too - beside the
// chain or evaluation they support - so a diagram shown only there counts
// as shown, and one they name that does not exist is a problem.
for (const [qid, a] of Object.entries(ECON_ESSAY_ANSWERS)) {
  for (const d of a.diagrams || []) {
    if (!known.has(d[0])) problems.push(`essay answer ${qid}: unknown diagram "${d[0]}"`)
    used.add(d[0])
  }
}

const unused = [...known].filter((k) => !used.has(k))
if (unused.length) problems.push(`built but never shown in any note: ${unused.join(', ')}`)

console.log(`\n${known.size} diagrams built, ${used.size} referenced`)
console.log(problems.length ? `\nPROBLEMS (${problems.length}):\n  ${problems.join('\n  ')}` : '\nALL CHECKS PASSED')
process.exitCode = problems.length ? 1 : 0
