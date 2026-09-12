import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Buddy from '@/components/ui/Buddy'
import SpineCard from '@/components/ui/SpineCard'
import { subjectColor } from '@/constants/content'
import { fadeInUp } from '@/lib/motion'

/*
  Close your gaps: the part of the dashboard that is allowed to have
  opinions about what you should do next.

  Two lists, worst first:

    Gaps        - chapters where your answers actually went wrong
                  (lib/gaps.js): unresolved mistakes, shaky, slipped, weak.
                  Each names the technique that fixes it.
    Suggested   - the recommender's pick for each subject and why
                  (untouched with the exam N days away, read but never
                  tested, holding at 60%). This used to sit on every
                  subject card as "Next up"; the user wanted the cards to
                  just say the subject and Start, and the deciding to
                  happen here.

  Start on either row goes to the Start page for that chapter
  (/start/<subject>?chapter=…), where every method opens on it - which
  is why no row names a method: the pick is made on the next page. With
  nothing answered yet the gaps list has nothing to build from, so it
  says so and "Give it a try" goes to /start to pick anything.
*/

const KIND = {
  mistake: { label: 'Unresolved mistake', icon: 'x', tone: 'text-danger bg-danger/10' },
  shaky: { label: 'Shaky', icon: 'activity', tone: 'text-r2-shaky bg-r2-shaky/15' },
  slipped: { label: 'Slipped', icon: 'chevronDown', tone: 'text-r2-shaky bg-r2-shaky/15' },
  weak: { label: 'Weak', icon: 'target', tone: 'text-muted bg-line' },
}

const bandLabel = {
  not_started: 'Not started',
  seen: 'Seen once',
  shaky: 'Shaky',
  solid: 'Solid',
  'exam-ready': 'Exam-ready',
}

// Why this chapter, in the student's terms. Never restates the band shown
// beside it - "Not started · because nothing done on it yet" is the same
// sentence twice.
function reasonFor(rec) {
  if (rec.hasUnresolvedMistake) return "you've got a mistake here that isn't fixed yet"
  if (rec.coverageState === 'not_started') {
    return rec.daysToExam ? `still untouched with ${rec.daysToExam} days to go` : 'still untouched'
  }
  if (rec.band === 'shaky') return 'your answers on it keep coming out wrong'
  if (rec.band === 'seen') return "you've read it but never been tested on it"
  if (typeof rec.readiness === 'number' && rec.readiness < 0.8) {
    return `holding at ${Math.round(rec.readiness * 100)}% and could go higher`
  }
  return "it's been a while since you last looked at it"
}

function Row({ index, subject, topic, tag, reason, onStart }) {
  const color = subjectColor(subject)
  return (
    <SpineCard as="li" color={color} rounded="rounded-2xl" className="p-3.5 pl-4">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span
          aria-hidden="true"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-sm font-extrabold tabular-nums"
          style={{ background: `color-mix(in srgb, ${color} 14%, transparent)`, color }}
        >
          {index}
        </span>
        <div className="min-w-0 flex-1">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-[0.62rem] font-extrabold uppercase tracking-[0.12em]" style={{ color }}>
              {subject}
            </span>
            {tag}
          </p>
          <p className="mt-0.5 truncate text-sm font-bold text-fg sm:text-base">{topic}</p>
          <p className="text-xs text-muted">{reason}</p>
        </div>
        <Button size="sm" onClick={onStart} className="shrink-0">
          <Icon name="play" className="h-4 w-4" />
          Start
        </Button>
      </div>
    </SpineCard>
  )
}

export default function CloseGaps({ gaps, total, suggestions = [], hasEvidence, mascot, onStart, onExplore }) {
  return (
    <motion.section variants={fadeInUp} className="gaps-card card relative overflow-hidden p-5 sm:p-6" aria-labelledby="gaps-title">
      <span aria-hidden="true" className="gaps-glow absolute -right-16 -top-16 h-48 w-48 rounded-full" />
      <div className="relative flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
        <div className="min-w-0">
          <h2 id="gaps-title" className="text-lg font-extrabold text-fg sm:text-xl">
            Close your gaps
          </h2>
          <p className="mt-0.5 text-sm text-muted">
            {hasEvidence
              ? 'Built from your mistakes - the chapters where answers keep going wrong, worst first.'
              : 'Once you have answered some questions, the ones that go wrong show up here.'}
          </p>
        </div>
        {hasEvidence && total > gaps.length && (
          <Link to="/mistakes" className="text-xs font-semibold text-brand-strong hover:underline">
            All {total} in Mistakes →
          </Link>
        )}
      </div>

      {gaps.length > 0 ? (
        <ol className="relative mt-4 space-y-2">
          {gaps.map((g, i) => {
            const kind = KIND[g.kind] || KIND.weak
            return (
              <Row
                key={`${g.subject}␟${g.topic}`}
                index={i + 1}
                subject={g.subject}
                topic={g.topic}
                reason={g.reason}
                onStart={() => onStart(g)}
                tag={
                  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.66rem] font-bold ${kind.tone}`}>
                    <Icon name={kind.icon} className="h-3 w-3" />
                    {kind.label}
                  </span>
                }
              />
            )
          })}
        </ol>
      ) : (
        <div className="relative mt-4 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-line px-5 py-6 text-center sm:flex-row sm:text-left">
          <div className="h-20 w-20 shrink-0">
            <Buddy mascot={mascot} className="h-full w-full" bubble={false} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-base font-bold text-fg">{hasEvidence ? 'Nothing open right now' : 'Nothing to close yet'}</p>
            <p className="mt-1 text-sm text-muted">
              {hasEvidence
                ? 'Every mistake so far has been fixed. Keep testing yourself and anything new lands here.'
                : 'Give a topic a try. Pick any chapter from any subject, choose how to revise it, and this space fills up with whatever needs a second look.'}
            </p>
          </div>
          <Button onClick={onExplore} className="shrink-0">
            <Icon name="sparkles" className="h-4 w-4" />
            {hasEvidence ? 'Pick a topic' : 'Give it a try'}
          </Button>
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="relative mt-6">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-muted">Suggested next</h3>
            <p className="text-xs text-muted">One per subject - take it or pick your own.</p>
          </div>
          <ol className="mt-2.5 space-y-2">
            {suggestions.map((rec, i) => (
              <Row
                key={`${rec.subject}␟${rec.topic}`}
                index={i + 1}
                subject={rec.subject}
                topic={rec.topic}
                reason={reasonFor(rec)}
                onStart={() => onStart(rec)}
                tag={
                  <span
                    className="inline-flex items-center rounded-full px-2 py-0.5 text-[0.66rem] font-bold"
                    style={{ background: `color-mix(in srgb, ${subjectColor(rec.subject)} 16%, transparent)`, color: subjectColor(rec.subject) }}
                  >
                    {bandLabel[rec.band] || 'Not started'}
                  </span>
                }
              />
            ))}
          </ol>
        </div>
      )}
    </motion.section>
  )
}
