import { Link } from 'react-router-dom'
import Icon from '@/components/ui/Icon'
import { hasSlipped } from '@/lib/attempts'

/*
  The segmented chapter bar (§5.3). One thin segment per chapter, in spec
  order, coloured by readiness band - used on both the Progress page and the
  Dashboard's subject strip, built once here so they can never drift apart.

  Deliberately not a single percentage-filled bar: a bar at 40% is ambiguous
  (every chapter half-done, or 40% of chapters perfect and the rest
  untouched - two completely different revision plans). A distribution is
  the useful information.

  Colour is never the only signal (§3.1's "never carry meaning by colour
  alone" rule): each band also gets a distinct segment height, rising left
  to right in urgency-of-attention order, so the bar reads as a skyline even
  in greyscale or for a colour-blind viewer.

  Props:
    - groups: the subject pack's `groups` (theme/subgroup structure), or
      null/undefined to just render `topics` as one flat, ungrouped run.
    - topics: flat topic list, used when `groups` isn't given.
    - chapterStates: the Map computeAllChapterStates returns (or a plain
      object with the same "subject␟topic" keys) - the shape
      computeChapterState returns per chapter ({ band, readiness, evidence,
      ... }). A (subjectName, topic) pair missing from this entirely is
      treated as not_started - that IS what "no attempts yet" looks like
      (see lib/attempts.js).
    - subjectName, spec: shown in the header row.
    - studyPath(topic): returns the href a segment/chapter row links to.
    - dense: smaller, for embedding several bars on one dashboard (skips
      the theme labels row).
*/

export const BAND_ORDER = ['not_started', 'seen', 'shaky', 'solid', 'exam-ready']

export const BAND_META = {
  not_started: { label: 'Not started', short: 'Not started', className: 'bg-r0-not-started', textClassName: 'text-r0-not-started', height: '38%' },
  seen: { label: 'Seen', short: 'Seen', className: 'bg-r1-seen', textClassName: 'text-r1-seen', height: '54%' },
  shaky: { label: 'Shaky', short: 'Shaky', className: 'bg-r2-shaky', textClassName: 'text-r2-shaky', height: '70%' },
  solid: { label: 'Solid', short: 'Solid', className: 'bg-r3-solid', textClassName: 'text-r3-solid', height: '86%' },
  'exam-ready': { label: 'Exam-ready', short: 'Ready', className: 'bg-r4-exam-ready', textClassName: 'text-r4-exam-ready', height: '100%' },
}

// computeAllChapterStates (lib/attempts.js) keys its map by the composite
// "subject␟topic", not topic alone - a subject is always in scope here
// (every caller passes one), so reconstruct the same key rather than
// asking callers to pre-slice the map per subject.
function stateFor(chapterStates, subjectName, topic) {
  if (!chapterStates) return { band: 'not_started' }
  const key = `${subjectName ?? ''}␟${topic}`
  const get = chapterStates instanceof Map ? chapterStates.get.bind(chapterStates) : (k) => chapterStates[k]
  return get(key) || { band: 'not_started' }
}

function Segment({ topic, state, href }) {
  const meta = BAND_META[state.band] || BAND_META.not_started
  const title = `${topic} - ${meta.label}${
    typeof state.readiness === 'number' ? `, ${Math.round(state.readiness * 100)}% ready` : ''
  }`
  const inner = (
    <span
      className={`block w-full rounded-[2px] ${meta.className} transition-[height] duration-300`}
      style={{ height: meta.height }}
      aria-hidden="true"
    />
  )
  const cls =
    'group relative flex h-8 min-w-[3px] flex-1 items-end justify-center rounded-sm outline-offset-2 hover:opacity-80 focus-visible:opacity-80'
  return href ? (
    <Link to={href} title={title} aria-label={title} className={cls}>
      {inner}
    </Link>
  ) : (
    <span title={title} aria-label={title} role="img" className={cls}>
      {inner}
    </span>
  )
}

export default function ChapterBar({
  groups,
  topics,
  chapterStates,
  subjectName,
  spec,
  studyPath,
  dense = false,
}) {
  // Normalise to a list of {label, topics} sections - a flat `topics` list
  // becomes one unlabelled section, so the render path is identical either
  // way. Some packs reuse the same subgroup label under every top-level
  // group (Maths: "Year 1 (AS)" / "Year 2 (A2)" under Pure, Statistics AND
  // Mechanics) - shown bare that reads as the same section three times, so
  // a repeated label gets its parent group name folded in.
  const sections = groups
    ? (() => {
        const rawLabels = groups.flatMap((g) => g.subgroups.map((sg) => sg.label))
        const seen = new Set()
        const dupes = new Set(rawLabels.filter((l) => (seen.has(l) ? true : (seen.add(l), false))))
        return groups.flatMap((g) =>
          g.subgroups.map((sg) => ({
            label: dupes.has(sg.label) ? `${g.label} · ${sg.label}` : sg.label,
            topics: sg.topics,
          })),
        )
      })()
    : [{ label: null, topics: topics || [] }]

  const allTopics = sections.flatMap((s) => s.topics)
  const counts = BAND_ORDER.reduce((acc, b) => ({ ...acc, [b]: 0 }), {})
  let readinessSum = 0
  let readinessSumLastWeek = 0
  for (const topic of allTopics) {
    const state = stateFor(chapterStates, subjectName, topic)
    counts[state.band] = (counts[state.band] || 0) + 1
    if (typeof state.readiness === 'number') readinessSum += state.readiness
    if (typeof state.readinessLastWeek === 'number') readinessSumLastWeek += state.readinessLastWeek
  }
  // Subject readiness (§5.2): mean over ALL chapters, not_started counts as
  // 0 - never a mean over only the chapters attempted, or finishing one
  // chapter well would read as 100%. Same rule applied a week back gives
  // the delta below, which is allowed to be negative on purpose (§5.3): a
  // metric that can only rise is a vanity metric.
  const subjectReadiness = allTopics.length ? readinessSum / allTopics.length : null
  const subjectReadinessLastWeek = allTopics.length ? readinessSumLastWeek / allTopics.length : null
  const readinessDelta =
    subjectReadiness !== null && subjectReadinessLastWeek !== null
      ? Math.round((subjectReadiness - subjectReadinessLastWeek) * 100)
      : null

  const slipped = allTopics.filter((topic) => hasSlipped(stateFor(chapterStates, subjectName, topic)))

  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="text-sm font-semibold text-fg">
          {subjectName}
          {spec ? <span className="font-normal text-muted"> · {spec}</span> : null}
        </p>
        <div className="flex items-center gap-3 text-xs font-semibold">
          {/* Chapters covered leads: it's the concrete number, and it's the
              one that still means something on day one when readiness is
              honestly near zero. Readiness follows it, not the reverse. */}
          <span className="text-muted">
            <span className="text-fg">
              {allTopics.length - counts.not_started}/{allTopics.length}
            </span>{' '}
            chapters
            {subjectReadiness !== null && ` · ${Math.round(subjectReadiness * 100)}% ready`}
            {readinessDelta !== null && readinessDelta !== 0 && (
              <span className={readinessDelta > 0 ? 'ml-1.5 text-r3-solid' : 'ml-1.5 text-r2-shaky'}>
                {readinessDelta > 0 ? '↑' : '↓'}
                {Math.abs(readinessDelta)}%
              </span>
            )}
          </span>
          {slipped.length > 0 && (
            <span className="inline-flex items-center gap-1 text-r2-shaky">
              <Icon name="activity" className="h-3.5 w-3.5" />
              {slipped.length} slipped
            </span>
          )}
        </div>
      </div>

      {/* Segments shrink to fit down to a 3px floor; a subject with enough
          chapters to blow even that (Economics, 49) scrolls within this
          strip rather than ever widening the page - the page body itself
          must never gain horizontal scroll. */}
      <div className="mt-2.5 overflow-x-auto">
        <div className="flex min-w-fit items-end gap-[3px]">
          {/* Flex-weighted by chapter count, not flex-1. With equal weights a
              2-chapter subgroup got the same width as a 14-chapter one, so
              segment width silently encoded "how big is this subgroup"
              instead of nothing - and the group labels underneath no longer
              lined up with the segments they name. */}
          {sections.map((section, i) => (
            <div key={i} className="flex items-end gap-[2px]" style={{ flex: `${section.topics.length} 1 0%` }}>
              {section.topics.map((topic) => (
                <Segment
                  key={topic}
                  topic={topic}
                  state={stateFor(chapterStates, subjectName, topic)}
                  href={studyPath ? studyPath(topic) : undefined}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Label the TOP-LEVEL groups, not the subgroups. Economics has 20
          subgroups; sharing one bar's width between them truncated every
          label to "1.1 …", "1.2 …", which is noise, and Maths repeated
          "Pure Mathemati…" twice in a row. Three or four group labels
          (Pure / Statistics / Mechanics) fit and actually say something.
          Each label is flex-weighted by its chapter count so it sits over
          the segments it describes. */}
      {!dense && groups && groups.length > 1 && (
        <div className="mt-1.5 flex gap-[3px] text-[0.65rem] text-muted">
          {groups.map((g, i) => {
            const count = g.subgroups.reduce((n, sg) => n + sg.topics.length, 0)
            return (
              <div
                key={i}
                className="min-w-0 truncate text-center"
                style={{ flex: `${count} 1 0%` }}
                title={`${g.label} - ${count} chapters`}
              >
                {g.label}
              </div>
            )
          })}
        </div>
      )}

      {!dense && (
        <p className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
          {BAND_ORDER.map((b) => (
            <span key={b} className="inline-flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${BAND_META[b].className}`} aria-hidden="true" />
              {counts[b]} {BAND_META[b].short.toLowerCase()}
            </span>
          ))}
        </p>
      )}
    </div>
  )
}
