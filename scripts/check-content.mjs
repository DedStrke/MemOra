/*
  Content integrity check for every revision pack.

  The failure this exists to catch: a flashcard / MCQ / exam question whose
  `topic` string does not exactly match a topic in that pack's `groups`
  outline. Nothing throws when that happens - the item simply never appears
  under any chapter, and never appears in a topic-scoped mock. It is
  invisible until a student notices a chapter is thinner than it should be.

  Run: npx vite-node scripts/check-content.mjs
*/
import { REVISION } from '../src/constants/library.js'

let problems = 0
const fail = (msg) => {
  problems += 1
  console.log(`  FAIL  ${msg}`)
}

console.log('Checking revision packs\n')

for (const pack of REVISION) {
  console.log(`${pack.name}`)

  const groupTopics = new Set(
    (pack.groups || []).flatMap((g) => (g.subgroups || []).flatMap((sg) => sg.topics || [])),
  )
  const flatTopics = new Set(pack.topics || [])

  // 1. groups outline and flat topic list must agree
  if (groupTopics.size) {
    for (const t of groupTopics) {
      if (!flatTopics.has(t)) fail(`"${t}" is in groups but missing from topics[]`)
    }
    for (const t of flatTopics) {
      if (!groupTopics.has(t)) fail(`"${t}" is in topics[] but missing from groups`)
    }
  }

  // 2. every item's topic must resolve to a real topic
  const reference = groupTopics.size ? groupTopics : flatTopics
  const buckets = [
    ['flashcard', pack.flashcards || []],
    ['mcq', pack.mcq || []],
    ['exam question', pack.examQuestions || []],
  ]
  const orphanTopics = new Set()
  for (const [kind, items] of buckets) {
    for (const item of items) {
      if (!item.topic) {
        fail(`${kind} with no topic: "${String(item.question || item.front).slice(0, 55)}"`)
      } else if (reference.size && !reference.has(item.topic)) {
        orphanTopics.add(`${kind}: "${item.topic}"`)
      }
    }
  }
  for (const t of orphanTopics) fail(`topic does not exist in this pack - ${t}`)

  // 3. MCQ answer indexes must be in range
  for (const q of pack.mcq || []) {
    if (!Array.isArray(q.options) || q.options.length < 2) {
      fail(`mcq has too few options: "${String(q.question).slice(0, 55)}"`)
    } else if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= q.options.length) {
      fail(`mcq answer index ${q.answer} out of range: "${String(q.question).slice(0, 55)}"`)
    }
  }

  // 4. exam questions need marks and a mark scheme
  for (const q of pack.examQuestions || []) {
    if (typeof q.marks !== 'number' || q.marks < 1) {
      fail(`exam question has no valid marks: "${String(q.question).slice(0, 55)}"`)
    }
    if (!Array.isArray(q.markScheme) || q.markScheme.length === 0) {
      fail(`exam question has no mark scheme: "${String(q.question).slice(0, 55)}"`)
    }
  }

  // 5. notes keys must be real topics
  for (const key of Object.keys(pack.notes || {})) {
    if (reference.size && !reference.has(key)) fail(`notes key is not a topic: "${key}"`)
  }

  // 6. no em dashes anywhere in learner-facing text
  const texts = [
    ...(pack.flashcards || []).flatMap((c) => [c.front, c.back]),
    ...(pack.mcq || []).flatMap((q) => [q.question, q.explanation, ...(q.options || [])]),
    ...(pack.examQuestions || []).flatMap((q) => [q.question, ...(q.markScheme || [])]),
    ...Object.values(pack.notes || {}),
  ]
  const emDashes = texts.filter((t) => typeof t === 'string' && t.includes('—')).length
  if (emDashes) fail(`${emDashes} strings still contain an em dash`)

  const topicsWithoutCards = [...reference].filter(
    (t) => !(pack.flashcards || []).some((c) => c.topic === t),
  )
  console.log(
    `  topics=${reference.size} cards=${(pack.flashcards || []).length} ` +
      `mcq=${(pack.mcq || []).length} exam=${(pack.examQuestions || []).length} ` +
      `notes=${Object.keys(pack.notes || {}).length}` +
      (topicsWithoutCards.length ? `  (${topicsWithoutCards.length} topics have no flashcards)` : ''),
  )
}

console.log(problems === 0 ? '\nAll packs OK' : `\n${problems} problem(s) found`)
process.exit(problems === 0 ? 0 : 1)
