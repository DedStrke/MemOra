/*
  Per-chapter content counts for one subject - what each chapter actually
  has in notes (words), flashcards, MCQs and exam questions, so thin
  chapters are visible instead of hidden inside a subject-wide average.

  Run: node --import ./scripts/resolve-ext.mjs scripts/chapter-counts.mjs "Computer Science"
*/
import { getPackByName } from '../src/constants/library.js'

const subject = process.argv[2] || 'Computer Science'
const pack = getPackByName(subject)
if (!pack) {
  console.error(`No pack called ${subject}`)
  process.exit(1)
}
const strip = (h) => String(h || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
const count = (list, topic) => list.filter((x) => x.topic === topic).length

console.log(`${subject}: ${pack.topics.length} chapters\n`)
for (const group of pack.groups || []) {
  console.log(`## ${group.label}`)
  for (const sub of group.subgroups || []) {
    console.log(`  ${sub.label}`)
    for (const t of sub.topics) {
      const words = strip(pack.notes[t]).split(' ').filter(Boolean).length
      console.log(
        `    ${t.padEnd(52)} notes ${String(words).padStart(5)}w  fc ${String(count(pack.flashcards, t)).padStart(3)}  mcq ${String(count(pack.mcq, t)).padStart(3)}  exam ${String(count(pack.examQuestions, t)).padStart(3)}`,
      )
    }
  }
}
const inGroups = new Set((pack.groups || []).flatMap((g) => g.subgroups.flatMap((s) => s.topics)))
const orphans = pack.topics.filter((t) => !inGroups.has(t))
if (orphans.length) console.log('\nTopics not in any group:', orphans)
const strays = new Set(
  [...pack.flashcards, ...pack.mcq, ...pack.examQuestions].map((x) => x.topic).filter((t) => !pack.topics.includes(t)),
)
if (strays.size) console.log('\nContent tagged with unknown topics:', [...strays])
