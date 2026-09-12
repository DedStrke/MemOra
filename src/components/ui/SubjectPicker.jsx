import { useState } from 'react'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import Chip from '@/components/ui/Chip'
import { SUBJECT_CATALOG, SUBJECTS_COMING_SOON } from '@/constants/content'
import { useApp } from '@/context/AppProvider'

/*
  Tap-to-pick subject chooser (§4). Three tiers, deliberately not one flat
  list with free text:

    Available now  - SUBJECT_CATALOG, every one has real content behind
                      every study mode. Tapping adds/removes a course.
    Coming soon     - announced but not built yet. Tapping records interest
                      (requestSubject) and does NOT create a course.
    Not listed      - free text, also just a request. A course with nothing
                      behind it is worse than no course at all (§4).

  Every chosen subject then gets its own exam-board dropdown, so a learner
  can study, say, AQA Biology and Edexcel Maths at the same time.

  Props:
    - subjects: [{ id, name, spec, priority }]
    - onChange(next): called with the new subjects array
    - prioritised: show a "which is your top priority?" picker
    - boards: exam-board options offered per subject
*/
export default function SubjectPicker({ subjects, onChange, prioritised = false, boards = [] }) {
  const { requestSubject, showToast } = useApp()
  const [custom, setCustom] = useState('')
  const [requested, setRequested] = useState(() => new Set())

  const has = (name) => subjects.some((s) => s.name.toLowerCase() === name.toLowerCase())

  const setSpec = (name, spec) =>
    onChange(subjects.map((s) => (s.name === name ? { ...s, spec } : s)))
  const toggle = (name) => {
    if (has(name)) {
      onChange(subjects.filter((s) => s.name.toLowerCase() !== name.toLowerCase()))
    } else {
      onChange([...subjects, { id: name, name, spec: '', priority: subjects.length === 0 }])
    }
  }
  const star = (name) => onChange(subjects.map((s) => ({ ...s, priority: s.name === name })))

  // Subjects a user added before this restructure, under the old free-text
  // rule, that aren't in the current curated catalog. Not deleted - just no
  // longer toggleable from the catalog grid above, so they need their own
  // way to be removed rather than silently becoming unmanageable.
  const legacyCustom = subjects.filter(
    (s) => !SUBJECT_CATALOG.some((c) => c.toLowerCase() === s.name.toLowerCase()),
  )

  const request = (name, board) => {
    requestSubject({ name, board })
    setRequested((r) => new Set(r).add(name.toLowerCase()))
    showToast(`We'll let you know when ${name} is ready`)
  }

  const requestCustom = () => {
    const n = custom.trim()
    setCustom('')
    if (!n) return
    request(n)
  }

  return (
    <div>
      <p className="mb-2 text-sm font-medium text-fg">Tap the subjects you study</p>
      <div className="flex flex-wrap gap-2">
        {SUBJECT_CATALOG.map((name) => {
          const sel = has(name)
          return (
            <Chip key={name} selected={sel} aria-pressed={sel} onClick={() => toggle(name)}>
              {sel && <Icon name="check" className="h-4 w-4" />}
              {name}
            </Chip>
          )
        })}
      </div>

      {boards.length > 0 && subjects.length > 0 && (
        <div className="mt-5">
          <p className="mb-2 text-sm font-medium text-fg">
            Pick an exam board for each subject
          </p>
          <div className="space-y-2">
            {subjects.map((s) => (
              <div
                key={s.id ?? s.name}
                className="flex flex-col gap-2 rounded-xl border border-line bg-surface px-3.5 py-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-sm font-medium text-fg">{s.name}</span>
                <label className="flex items-center gap-2">
                  <span className="sr-only">{`Exam board for ${s.name}`}</span>
                  <select
                    value={s.spec || ''}
                    onChange={(e) => setSpec(s.name, e.target.value)}
                    aria-label={`Exam board for ${s.name}`}
                    className="w-full rounded-lg border border-line bg-page px-3 py-2 text-sm text-fg focus:border-brand focus:outline-none sm:w-56"
                  >
                    <option value="">Not sure yet</option>
                    {boards.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {prioritised && subjects.length > 1 && (
        <div className="mt-5">
          <p className="mb-2 text-sm font-medium text-fg">Which is your top priority?</p>
          <div className="flex flex-wrap gap-2">
            {subjects.map((s) => (
              <Chip
                key={s.id ?? s.name}
                selected={s.priority}
                aria-pressed={s.priority}
                onClick={() => star(s.name)}
              >
                <Icon name="star" filled={s.priority} className="h-4 w-4" />
                {s.name}
              </Chip>
            ))}
          </div>
        </div>
      )}

      {legacyCustom.length > 0 && (
        <div className="mt-5 rounded-xl border border-line bg-surface p-3.5">
          <p className="mb-2 text-xs font-medium text-muted">
            Added before subjects were curated - not in the current catalog, but kept:
          </p>
          <div className="flex flex-wrap gap-2">
            {legacyCustom.map((s) => (
              <Chip key={s.id ?? s.name} selected onClick={() => toggle(s.name)}>
                <Icon name="x" className="h-4 w-4" />
                {s.name}
              </Chip>
            ))}
          </div>
        </div>
      )}

      {/* Coming soon: not selectable as a course, just interest tracking. */}
      <div className="mt-6 border-t border-line pt-5">
        <p className="mb-2 text-sm font-medium text-fg">Coming soon</p>
        <p className="mb-2 text-xs text-muted">
          These aren&rsquo;t built yet, so there&rsquo;s nothing to study - tap one to let us know
          you want it, that&rsquo;s it.
        </p>
        <div className="flex flex-wrap gap-2">
          {SUBJECTS_COMING_SOON.map((name) => {
            const done = requested.has(name.toLowerCase())
            return (
              <Chip
                key={name}
                disabled={done}
                onClick={() => request(name)}
                title={done ? 'Thanks - we logged your interest' : `Let us know you want ${name}`}
              >
                {done && <Icon name="check" className="h-4 w-4" />}
                {name}
              </Chip>
            )
          })}
        </div>
      </div>

      {/* Not listed: also a request, never a course with nothing behind it. */}
      <div className="mt-5">
        <p className="mb-2 text-sm font-medium text-fg">Not listed?</p>
        <div className="flex gap-2">
          <input
            type="text"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                requestCustom()
              }
            }}
            placeholder="Tell us what subject you need"
            className="min-w-0 flex-1 rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm text-fg placeholder:text-muted focus:border-brand focus:outline-none"
          />
          <Button type="button" variant="secondary" onClick={requestCustom} disabled={!custom.trim()}>
            <Icon name="send" className="h-4 w-4" />
            Request
          </Button>
        </div>
      </div>
    </div>
  )
}
