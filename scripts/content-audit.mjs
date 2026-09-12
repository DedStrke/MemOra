/*
  What is actually in the revision content, measured rather than assumed.

  The diagram work said nothing about whether the NOTES are deep enough, the
  questions realistic, or the mark schemes usable. This measures that.
*/
import { getPackByName } from '../src/constants/library.js'

const strip = (h) => String(h || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()

for (const subject of ['Maths', 'Economics', 'Computer Science']) {
  const pack = getPackByName(subject)
  const noteWords = pack.topics.map((t) => strip(pack.notes[t]).split(' ').length)
  const total = noteWords.reduce((a, b) => a + b, 0)
  const sorted = [...noteWords].sort((a, b) => a - b)

  const marks = pack.examQuestions.map((q) => q.marks || 0)
  const byMarks = {}
  for (const m of marks) byMarks[m] = (byMarks[m] || 0) + 1
  const msLens = pack.examQuestions.map((q) => (q.markScheme || []).length)
  const withMs = msLens.filter((n) => n > 0).length

  console.log(`\n${'='.repeat(64)}\n${subject}\n${'='.repeat(64)}`)
  console.log(`chapters           ${pack.topics.length}`)
  console.log(`note words total   ${total.toLocaleString()}  (avg ${Math.round(total / pack.topics.length)}/chapter)`)
  console.log(`  thinnest 5       ${sorted.slice(0, 5).join(', ')}`)
  console.log(`  fattest 5        ${sorted.slice(-5).join(', ')}`)
  console.log(`flashcards         ${pack.flashcards.length}`)
  console.log(`mcq                ${pack.mcq.length}`)
  console.log(`exam questions     ${pack.examQuestions.length}   with mark scheme: ${withMs}`)
  console.log(`  marks spread     ${Object.entries(byMarks).sort((a, b) => a[0] - b[0]).map(([m, n]) => `${m}m×${n}`).join('  ')}`)
  console.log(`  avg MS points    ${(msLens.reduce((a, b) => a + b, 0) / msLens.length).toFixed(1)}`)

  // Chapters with no exam question at all
  const covered = new Set(pack.examQuestions.map((q) => q.topic))
  const bare = pack.topics.filter((t) => !covered.has(t))
  if (bare.length) console.log(`  chapters with NO exam question: ${bare.length} — ${bare.slice(0, 4).join(' · ')}${bare.length > 4 ? ' …' : ''}`)

  const mcqCovered = new Set(pack.mcq.map((q) => q.topic))
  const bareMcq = pack.topics.filter((t) => !mcqCovered.has(t))
  if (bareMcq.length) console.log(`  chapters with NO MCQ: ${bareMcq.length}`)
}
