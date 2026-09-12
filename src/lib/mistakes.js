/*
  §7: grouping missed questions by the actual error they represent, not just
  the chapter they happened to be in - and tracking when that error is
  actually fixed instead of just logging it forever.

  Grouping key: `attempt.misconception` when the item carries one (set from
  the distractor the student picked - see lib/attempts.js), falling back to
  the chapter itself when it doesn't. Content authoring for misconception
  tags on MCQ distractors is a separate, large task (the content pack's own
  §3.4/§10.7) that hasn't happened yet for any subject in this build, so
  every group here falls back to the topic key today - the code is correct
  and ready; it will start grouping across chapters ("confuses MAR and MDR,
  4 times across 3 chapters") the moment any content actually sets
  `misconception` on an MCQ option. Nothing here fabricates a misconception
  that isn't really there.
*/

const isMiss = (a) => a.outcome === 'wrong' || a.outcome === 'dont_know' || a.correct === false
const isHit = (a) => a.outcome === 'correct' || a.correct === true

function groupKey(a) {
  return a.misconception ? `mc:${a.misconception}` : `topic:${a.subject}␟${a.topic}`
}

/*
  One row per distinct mistake (misconception, or topic when untagged).
  `resolved` is true once at least two attempts against the same key,
  logged after the most recent miss, came back correct - "two subsequent
  items right" per §7, not just one lucky answer.
*/
export function groupMistakes(attempts = []) {
  const misses = attempts.filter((a) => a.subject && a.topic && isMiss(a))
  if (!misses.length) return []

  const byKey = new Map()
  for (const a of misses) {
    const key = groupKey(a)
    if (!byKey.has(key)) {
      byKey.set(key, {
        key,
        kind: a.misconception ? 'misconception' : 'topic',
        misconception: a.misconception || null,
        pairs: new Set(), // "subject␟topic"
        misses: [], // {ts, outcome}
      })
    }
    const g = byKey.get(key)
    g.pairs.add(`${a.subject}␟${a.topic}`)
    g.misses.push({ ts: a.ts, outcome: a.outcome })
  }

  const chronological = [...attempts].filter((a) => a.subject && a.topic).sort((a, b) => a.ts - b.ts)

  return [...byKey.values()]
    .map((g) => {
      const lastMiss = g.misses.reduce((latest, m) => (m.ts > latest.ts ? m : latest))
      const lastMissedAt = lastMiss.ts
      const matches = g.kind === 'misconception' ? (a) => a.misconception === g.misconception : (a) => groupKey(a) === g.key
      const hitsSinceLastMiss = chronological.filter((a) => a.ts > lastMissedAt && matches(a) && isHit(a))
      const resolved = hitsSinceLastMiss.length >= 2
      const pairs = [...g.pairs].map((p) => {
        const [subject, topic] = p.split('␟')
        return { subject, topic }
      })
      return {
        key: g.key,
        kind: g.kind,
        misconception: g.misconception,
        subjects: [...new Set(pairs.map((p) => p.subject))],
        topics: pairs,
        missCount: g.misses.length,
        lastMissedAt,
        // "Didn't know" and "wrong" are different problems and route
        // differently (§7's closing note): a gap routes back to Notes,
        // an actual wrong answer routes to Exam questions to retest it
        // properly, not just MCQ recognition.
        lastMissWasDontKnow: lastMiss.outcome === 'dont_know',
        resolved,
        resolvedAt: resolved ? hitsSinceLastMiss[1].ts : null,
      }
    })
    .sort((a, b) => b.lastMissedAt - a.lastMissedAt)
}

/*
  §7.2: retry with a different question testing the same mistake, not the
  identical one just answered - re-showing the same item tests whether the
  student now remembers that one answer, not whether the underlying
  misconception is fixed. Looks across the WHOLE pack (every mode's items
  that carry a misconception tag), not just MCQ, since a distractor tagged
  on an exam question could name the same error.

  Returns null when there's no tagged sibling to find - today, since no
  content pack tags misconceptions yet, this always returns null, and
  callers fall back to the plain "revise this chapter" route.
*/
export function findSiblingQuestion(pack, misconception, excludeQuestion) {
  if (!pack || !misconception) return null
  const pools = [pack.mcq, pack.examQuestions, pack.flashcards]
  for (const pool of pools || []) {
    const sibling = (pool || []).find(
      (item) =>
        item.question !== excludeQuestion &&
        (item.misconception === misconception ||
          (item.options || []).some((o) => o.misconception === misconception)),
    )
    if (sibling) return sibling
  }
  return null
}

// (subject␟topic) pairs carrying at least one unresolved mistake - feeds
// the next-best-action recommender (§7.4): a chapter with a live mistake
// should get pushed back up the list, not just wait for staleness to do it.
export function unresolvedMistakeChapters(attempts = []) {
  const set = new Set()
  for (const g of groupMistakes(attempts)) {
    if (g.resolved) continue
    for (const { subject, topic } of g.topics) set.add(`${subject}␟${topic}`)
  }
  return set
}
