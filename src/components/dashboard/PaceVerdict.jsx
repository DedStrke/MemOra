/*
  The one-line "are you on track" sentence under a subject's chapter bar
  (§5.4a). Shared between Progress and Dashboard so the two pages can never
  disagree about what a given pace projection means.

  Tone: a target, not a telling-off. Before anything has reached Solid
  there is no pace to measure, so the line says what pace the exam date
  asks for ("about 4 a week gets you there by 12 May") instead of
  announcing that nothing has happened - the same fact, pointed forward.
  Amber is reserved for a measured lateness; everything else is quiet.
*/

const perWeek = (rate) => (rate >= 10 ? Math.round(rate) : rate.toFixed(1)).toString()
const day = (ts) => new Date(ts).toLocaleDateString(undefined, { day: 'numeric', month: 'long' })
const chapters = (n) => `${n} chapter${n === 1 ? '' : 's'}`

export default function PaceVerdict({ pace, subjectName }) {
  const left = pace.chaptersRemaining

  if (left === 0) {
    return <p className="mt-2 text-sm font-medium text-r3-solid">Every chapter is at Solid or better.</p>
  }

  // No pace to measure yet - either too little history for this subject,
  // or nothing has crossed into Solid in the last three weeks.
  if (!pace.hasEnoughData || pace.weeklyRate === 0) {
    if (pace.requiredRate && pace.examTs) {
      return (
        <p className="mt-2 text-sm text-muted">
          {chapters(left)} to go · about <span className="font-semibold text-fg">{perWeek(pace.requiredRate)} a week</span>{' '}
          gets you there by {day(pace.examTs)}.
        </p>
      )
    }
    return (
      <p className="mt-2 text-sm text-muted">
        {chapters(left)} to go. Add an exam date in Settings and this turns into a weekly target.
      </p>
    )
  }

  const readyDate = day(pace.projectedReadyTs)
  if (pace.daysBehind === null) {
    return (
      <p className="mt-2 text-sm text-muted">
        At {perWeek(pace.weeklyRate)} a week, {subjectName} should be ready by {readyDate}.
      </p>
    )
  }
  if (pace.daysBehind <= 0) {
    const spare = Math.abs(pace.daysBehind)
    return (
      <p className="mt-2 text-sm font-medium text-r3-solid">
        On track - ready by {readyDate}
        {spare > 0 ? `, ${spare} day${spare === 1 ? '' : 's'} to spare` : ''}.
      </p>
    )
  }
  return (
    <p className="mt-2 text-sm font-medium text-r2-shaky">
      {pace.daysBehind} day{pace.daysBehind === 1 ? '' : 's'} behind at {perWeek(pace.weeklyRate)} a week
      {pace.requiredRate ? ` - about ${perWeek(pace.requiredRate)} a week catches up by ${day(pace.examTs)}` : ''}.
    </p>
  )
}
