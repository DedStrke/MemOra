/*
  Verify the Maths exam questions are internally consistent.

  A question whose parts add up to a different total from its stated mark
  count teaches the wrong thing twice over: the student marks themselves out
  of the wrong number, and the part weightings they use to budget exam time
  are wrong too. These are exactly the errors that are invisible on the page
  and obvious to a script, so they are asserted rather than eyeballed.

  Four claims are checked for every question:
    1. the mark codes in the worked solution sum to the stated total
    2. the per-part breakdown in totalCheck sums to the stated total
    3. each part label in the question text appears in the worked solution
    4. the topic names a chapter that actually exists
*/

import { MATHS_EXAM_PURE } from '../src/constants/maths-exams-pure.js'
import { MATHS_EXAM_APPLIED } from '../src/constants/maths-exams-applied.js'
import { getPackByName } from '../src/constants/library.js'

const questions = [...MATHS_EXAM_PURE, ...MATHS_EXAM_APPLIED]
const topics = new Set(getPackByName('Maths').topics)

/*
  A mark cell can carry more than one award ("M1 A1") and can be qualified
  ("B1ft", "dM1"), so the digits are summed across every code in the cell
  rather than read off the first one.
*/
const marksIn = (cell) =>
  [...String(cell).matchAll(/(?:d?M|A|B)(\d+)(?:ft)?/g)].reduce((sum, m) => sum + Number(m[1]), 0)

const partsIn = (text) => [...String(text).matchAll(/\(([a-h])\)/g)].map((m) => m[1])

const failures = []

for (const q of questions) {
  const id = `${q.topic} [${q.marks}]`

  const solutionTotal = q.workedSolution.reduce((sum, step) => sum + marksIn(step.mark), 0)
  if (solutionTotal !== q.marks) {
    failures.push(`${id}: worked solution sums to ${solutionTotal}, question says ${q.marks}`)
  }

  const breakdown = [...String(q.totalCheck).matchAll(/\b[a-h] (\d+)/g)].reduce(
    (sum, m) => sum + Number(m[1]),
    0,
  )
  if (breakdown !== q.marks) {
    failures.push(`${id}: totalCheck breakdown sums to ${breakdown}, question says ${q.marks}`)
  }

  const asked = [...new Set(partsIn(q.question))]
  const answered = new Set(q.workedSolution.map((s) => s.part).filter(Boolean).map((p) => p.replace(/[()]/g, '')))
  const missing = asked.filter((p) => !answered.has(p))
  if (missing.length) {
    failures.push(`${id}: question has part(s) ${missing.join(', ')} with no worked solution`)
  }

  if (!topics.has(q.topic)) {
    failures.push(`${id}: topic "${q.topic}" is not a chapter in the Maths pack`)
  }
}

const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0)
const longest = Math.max(...questions.map((q) => q.marks))

console.log(`${questions.length} long-form Maths questions`)
console.log(`  ${totalMarks} marks in total, longest ${longest}, mean ${(totalMarks / questions.length).toFixed(1)}`)
console.log(`  ${questions.reduce((n, q) => n + q.workedSolution.length, 0)} marked working lines`)

if (failures.length) {
  console.log(`\n${failures.length} PROBLEM(S):`)
  failures.forEach((f) => console.log('  ✗ ' + f))
  process.exit(1)
}
console.log('\nEVERY QUESTION ADDS UP')
