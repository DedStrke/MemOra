import { useState } from 'react'
import Icon from '@/components/ui/Icon'
import Button from '@/components/ui/Button'
import { SUBJECT_CATALOG } from '@/constants/content'

/*
  Tap-to-pick subject chooser. Learners select subjects from a list of chips
  instead of typing each one. Custom subjects can still be added by hand. Every
  chosen subject then gets its own exam-board dropdown, so a learner can study,
  say, AQA Biology and Edexcel Maths at the same time.

  Props:
    - subjects: [{ id, name, spec, priority }]
    - onChange(next): called with the new subjects array
    - prioritised: show a "which is your top priority?" picker
    - boards: exam-board options offered per subject
*/
export default function SubjectPicker({ subjects, onChange, prioritised = false, boards = [] }) {
  const [custom, setCustom] = useState('')

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
  const addCustom = () => {
    const n = custom.trim()
    setCustom('')
    if (!n || has(n)) return
    onChange([...subjects, { id: n, name: n, spec: '', priority: subjects.length === 0 }])
  }

  // Chosen subjects that are not in the catalog (typed by hand).
  const extras = subjects.filter(
    (s) => !SUBJECT_CATALOG.some((c) => c.toLowerCase() === s.name.toLowerCase()),
  )

  const chipCls = (sel) =>
    `inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
      sel ? 'border-brand bg-brand text-on-brand' : 'border-line bg-surface text-fg hover:border-brand'
    }`

  return (
    <div>
      <p className="mb-2 text-sm font-medium text-fg">Tap the subjects you study</p>
      <div className="flex flex-wrap gap-2">
        {SUBJECT_CATALOG.map((name) => {
          const sel = has(name)
          return (
            <button key={name} type="button" onClick={() => toggle(name)} aria-pressed={sel} className={chipCls(sel)}>
              {sel && <Icon name="check" className="h-4 w-4" />}
              {name}
            </button>
          )
        })}
        {extras.map((s) => (
          <button
            key={s.id ?? s.name}
            type="button"
            onClick={() => toggle(s.name)}
            aria-pressed="true"
            className={chipCls(true)}
          >
            <Icon name="check" className="h-4 w-4" />
            {s.name}
          </button>
        ))}
      </div>

      <div className="mt-3 flex gap-2">
        <input
          type="text"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              addCustom()
            }
          }}
          placeholder="Add another subject"
          className="min-w-0 flex-1 rounded-xl border border-line bg-surface px-3.5 py-2.5 text-sm text-fg placeholder:text-muted focus:border-brand focus:outline-none"
        />
        <Button type="button" variant="secondary" onClick={addCustom} disabled={!custom.trim()}>
          <Icon name="plus" className="h-4 w-4" />
          Add
        </Button>
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
              <button
                key={s.id ?? s.name}
                type="button"
                onClick={() => star(s.name)}
                aria-pressed={s.priority}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  s.priority
                    ? 'border-brand bg-brand-soft text-brand-strong'
                    : 'border-line bg-surface text-fg hover:border-brand'
                }`}
              >
                <Icon name="star" filled={s.priority} className="h-4 w-4" />
                {s.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
