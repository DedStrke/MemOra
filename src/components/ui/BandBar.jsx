import { filterGroupsToTopics, relevantTopics } from '@/lib/pace'

/*
  A subject's progress as a map of its specification.

  One segment per top-level section of the spec - Pure / Statistics /
  Mechanics, Theme 1 to 4, Component 1 and 2 - sized by how many chapters
  it holds, so the bar has the shape of the course rather than being one
  anonymous grey line. Untouched chapters are the track, tinted with the
  subject's own colour; chapters you have worked on fill each segment
  from the left, best band first, with a soft glow on the leading edge.
  Each segment names itself underneath with its own count, so "you are
  about here through the course" reads at a glance, and a section you
  have finished gets a tick.

  Replaces both the plain stacked bar (which read as an empty grey pill
  on any subject you had not started) and the per-chapter tick strip
  (forty-one grey blocks). The per-chapter, clickable version still
  exists as ChapterBar on the Progress page, where that granularity is
  the point.

  Colour is never the only signal (§3.1): every band is also named with
  its count in the legend underneath, so the row reads in greyscale.
*/

// Best-first, so progress accumulates from the left and the bar's leading
// edge is always the strongest work.
const FILL_ORDER = ['exam-ready', 'solid', 'shaky', 'seen']

const BAND_FILL = {
  seen: 'var(--r1-seen)',
  shaky: 'var(--r2-shaky)',
  solid: 'var(--r3-solid)',
  'exam-ready': 'var(--r4-exam-ready)',
}

const BAND_TEXT = {
  seen: 'text-r1-seen',
  shaky: 'text-r2-shaky',
  solid: 'text-r3-solid',
  'exam-ready': 'text-r4-exam-ready',
}

const shortLabel = (label) =>
  String(label)
    .split(':')[0]
    .replace(/^Pure Mathematics$/, 'Pure')
    .replace(/^Year \d+ \((AS|A2)\)$/, '$1')
    .trim()

export default function BandBar({ pack, chapterStates, isYear12 = false, color = 'var(--brand)', height = 12 }) {
  const topics = relevantTopics(pack, isYear12)
  const allowed = new Set(topics)
  const groups = pack.groups?.length
    ? filterGroupsToTopics(pack.groups, allowed).filter((g) => g.subgroups.some((s) => s.topics.length))
    : [{ label: pack.name, subgroups: [{ topics }] }]

  const bandOf = (t) => chapterStates?.get?.(`${pack.name}␟${t}`)?.band || 'not_started'

  const segments = groups.map((g) => {
    const list = g.subgroups.flatMap((s) => s.topics)
    const counts = {}
    for (const t of list) counts[bandOf(t)] = (counts[bandOf(t)] || 0) + 1
    const started = FILL_ORDER.reduce((n, b) => n + (counts[b] || 0), 0)
    const done = (counts.solid || 0) + (counts['exam-ready'] || 0)
    return { label: shortLabel(g.label), total: list.length, counts, started, done }
  })

  const totals = {}
  for (const s of segments) for (const b of FILL_ORDER) totals[b] = (totals[b] || 0) + (s.counts[b] || 0)
  const total = topics.length
  const startedAll = FILL_ORDER.reduce((n, b) => n + (totals[b] || 0), 0)
  const notStarted = Math.max(0, total - startedAll)
  const filled = FILL_ORDER.filter((b) => totals[b] > 0)
  const summary = filled.length
    ? filled.map((b) => `${totals[b]} ${b.replace('-', ' ')}`).join(', ') + `, ${notStarted} not started`
    : `none of ${total} chapters started`

  return (
    <div className="spec-map" style={{ '--subject': color }}>
      <div className="flex w-full gap-1.5" role="img" aria-label={summary}>
        {segments.map((seg) => (
          <div key={seg.label} className="min-w-0" style={{ flex: `${seg.total} 1 0%` }}>
            <div className="relative" style={{ height }}>
              {/* Glow effect behind the bar */}
              <div 
                className="absolute inset-0 rounded-full opacity-40 blur-sm"
                style={{ background: 'var(--subject)' }}
                aria-hidden="true"
              />
              <div className="spec-map-track relative flex h-full w-full overflow-hidden rounded-full">
                {FILL_ORDER.filter((b) => seg.counts[b] > 0).map((band, i, arr) => (
                  <span
                    key={band}
                    className={`spec-map-fill relative h-full ${i === arr.length - 1 ? 'spec-map-lead' : ''}`}
                    style={{
                      width: `${(seg.counts[band] / seg.total) * 100}%`,
                      background: BAND_FILL[band],
                      transition: 'width 600ms cubic-bezier(0.2, 0.8, 0.3, 1)',
                    }}
                  />
                ))}
              </div>
            </div>
            <p className="mt-1.5 flex items-baseline justify-between gap-1 text-[0.62rem] font-bold uppercase tracking-[0.08em] text-muted">
              <span className="truncate">{seg.label}</span>
              <span className="shrink-0 tabular-nums">
                {seg.done === seg.total ? (
                  <span className="text-r3-solid">✓</span>
                ) : (
                  <>
                    <span className={seg.started ? 'text-fg' : ''}>{seg.started}</span>/{seg.total}
                  </>
                )}
              </span>
            </p>
          </div>
        ))}
      </div>

      <p className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.7rem] font-semibold">
        {filled.map((band) => (
          <span key={band} className={`inline-flex items-center gap-1 ${BAND_TEXT[band]}`}>
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full" style={{ background: BAND_FILL[band] }} />
            {totals[band]} {band.replace('-', ' ')}
          </span>
        ))}
        {notStarted > 0 && (
          <span className="inline-flex items-center gap-1 text-muted">
            <span aria-hidden="true" className="spec-map-dot h-1.5 w-1.5 rounded-full" />
            {notStarted} not started
          </span>
        )}
      </p>
    </div>
  )
}
