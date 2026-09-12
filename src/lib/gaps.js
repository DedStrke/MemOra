import { groupMistakes } from '@/lib/mistakes'
import { hasSlipped } from '@/lib/attempts'
import { modeForBand } from '@/lib/pace'
import { daysAgo } from '@/lib/sessions'

/*
  Where you are struggling, as a ranked list of chapters.

  The dashboard's "Close your gaps" block is built from evidence only:
  a chapter is a gap because answers on it went wrong, not because it is
  untouched (untouched chapters are what "Next up" on the subject cards
  is for). Four kinds, worst first:

    mistake  - a wrong or "don't know" answer that has not had two correct
               answers since (lib/mistakes.js - the same test the
               Mistakes page uses to call something unresolved)
    shaky    - enough evidence to have a band, and the band is Shaky
    slipped  - the band fell since last week
    weak     - practised, but readiness is below 60%

  Each gap names the technique that closes it: a "don't know" goes back
  to Notes, a wrong answer to Exam questions, everything else to whatever
  the band suggests (lib/pace.js modeForBand).
*/

const SEVERITY = { mistake: 4, shaky: 3, slipped: 2, weak: 1 }

const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`

const when = (ts) => {
  const d = daysAgo(ts)
  if (d === null) return ''
  if (d === 0) return 'today'
  if (d === 1) return 'yesterday'
  return `${d} days ago`
}

export function computeGaps({ subjectNames = [], chapterStates, attempts = [], limit = 6 } = {}) {
  const tracked = new Set(subjectNames)
  const byKey = new Map()

  const add = (subject, topic, gap) => {
    const key = `${subject}␟${topic}`
    const existing = byKey.get(key)
    if (!existing || SEVERITY[gap.kind] > SEVERITY[existing.kind]) byKey.set(key, { ...existing, ...gap, subject, topic })
  }

  // Unresolved mistakes first - they carry the strongest signal.
  for (const g of groupMistakes(attempts)) {
    if (g.resolved) continue
    for (const { subject, topic } of g.topics) {
      if (!tracked.has(subject)) continue
      add(subject, topic, {
        kind: 'mistake',
        mode: g.lastMissWasDontKnow ? 'notes' : 'exam-questions',
        reason: `${plural(g.missCount, g.lastMissWasDontKnow ? 'blank' : 'wrong answer')}, not fixed yet · last missed ${when(g.lastMissedAt)}`,
        missCount: g.missCount,
        lastMissedAt: g.lastMissedAt,
      })
    }
  }

  // Then what the bands say.
  for (const state of chapterStates?.values?.() || []) {
    if (!tracked.has(state.subject) || !state.topic) continue
    if (!state.evidence) continue
    const pct = typeof state.readiness === 'number' ? Math.round(state.readiness * 100) : null
    if (state.band === 'shaky') {
      add(state.subject, state.topic, {
        kind: 'shaky',
        mode: modeForBand(state),
        reason: pct === null ? 'answers keep coming out wrong' : `holding at ${pct}% - answers keep coming out wrong`,
      })
    } else if (hasSlipped(state)) {
      add(state.subject, state.topic, {
        kind: 'slipped',
        mode: modeForBand(state),
        reason: `slipped from ${state.bandLastWeek.replace('-', ' ')} this week`,
      })
    } else if (pct !== null && pct < 60 && state.coverageState !== 'not_started') {
      add(state.subject, state.topic, {
        kind: 'weak',
        mode: modeForBand(state),
        reason: `only ${pct}% on what you have tried so far`,
      })
    }
  }

  const gaps = [...byKey.values()].map((g) => {
    const state = chapterStates?.get?.(`${g.subject}␟${g.topic}`)
    return {
      ...g,
      band: state?.band || 'seen',
      readiness: state?.readiness ?? null,
    }
  })

  gaps.sort(
    (a, b) =>
      SEVERITY[b.kind] - SEVERITY[a.kind] ||
      (b.missCount || 0) - (a.missCount || 0) ||
      (a.readiness ?? 1) - (b.readiness ?? 1),
  )

  return { gaps: gaps.slice(0, limit), total: gaps.length }
}
