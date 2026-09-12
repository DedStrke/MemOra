import { useRef, useState, useId } from 'react'
import Icon from '@/components/ui/Icon'

/*
  A textarea you can actually write Maths in.

  A keyboard has no √, no ², no π, no ≤ - and on a phone those live three
  taps deep in a symbol panel, if they're reachable at all. So writing a
  Maths answer meant either giving up on notation ("root 3 over 2") or not
  typing an answer at all. Two ways in, because people differ:

    1. A tap palette of the symbols that subject actually needs, inserted at
       the caret with focus and selection preserved, so you can keep typing.
    2. Typed shortcuts for anyone who would rather not leave the keyboard.
       LaTeX-style backslash words (\\pi, \\sqrt, \\theta) plus the ASCII
       operators people already type (>=, <=, !=, ->, +-, ^2).

  Expansion happens only immediately behind the caret, never across the
  whole string. That matters: a global find-and-replace would rewrite text
  the student had already typed and moved past, and would mangle a word
  like "pie" into "πe". Matching just the characters in front of the cursor
  is how editors do it and it can only ever affect what you just typed.

  Symbol sets are per subject. Maths needs surds and calculus, Computer
  Science needs Boolean and bitwise operators (Boolean Algebra is a whole
  chapter), Economics needs almost nothing beyond a currency sign - and a
  subject with no set gets a plain textarea rather than an irrelevant
  palette taking up space.
*/

const MATHS_GROUPS = [
  {
    label: 'Powers & roots',
    symbols: ['²', '³', '⁻¹', 'ⁿ', '√', '∛', '½', '¼', '¾', 'π', 'e'],
  },
  {
    label: 'Operators',
    symbols: ['×', '÷', '±', '≤', '≥', '≠', '≈', '≡', '∞', '°', '%'],
  },
  {
    label: 'Calculus & series',
    symbols: ['∫', 'Σ', '∏', 'Δ', '∂', '→', '⇒', '∴', '∵', '…'],
  },
  {
    label: 'Greek & sets',
    symbols: ['θ', 'α', 'β', 'λ', 'μ', 'σ', 'ρ', '∈', '∪', '∩', '∅'],
  },
]

const CS_GROUPS = [
  {
    label: 'Boolean',
    symbols: ['∧', '∨', '¬', '⊕', '≡', '→', '↔', '⊤', '⊥'],
  },
  {
    label: 'Comparison & bitwise',
    symbols: ['≤', '≥', '≠', '←', '≪', '≫', '⌈', '⌉', '⌊', '⌋'],
  },
]

const ECON_GROUPS = [
  {
    label: 'Common',
    symbols: ['£', '%', 'Δ', '→', '↑', '↓', '≈', '≤', '≥', '∴'],
  },
]

// `hints` are the three shortcuts shown inline. They're per subject because
// offering "\pi" to a Computer Science student is noise - the examples
// should be ones they'd actually reach for.
const GROUPS_BY_SUBJECT = {
  maths: { groups: MATHS_GROUPS, hints: ['\\pi', '>=', '^2'] },
  economics: { groups: ECON_GROUPS, hints: ['>=', '->', '\\delta'] },
  'computer science': { groups: CS_GROUPS, hints: ['\\and', '\\or', '>='] },
}

/*
  Longest first - '<=' must be tested before '=', and '\theta' before
  '\t', or the shorter token wins and eats the prefix of the longer one.
*/
const SHORTCUTS = [
  ['\\sqrt', '√'],
  ['\\cbrt', '∛'],
  ['\\theta', 'θ'],
  ['\\alpha', 'α'],
  ['\\beta', 'β'],
  ['\\lambda', 'λ'],
  ['\\sigma', 'σ'],
  ['\\delta', 'Δ'],
  ['\\infty', '∞'],
  ['\\inf', '∞'],
  ['\\sum', 'Σ'],
  ['\\prod', '∏'],
  ['\\int', '∫'],
  ['\\deg', '°'],
  ['\\pi', 'π'],
  ['\\in', '∈'],
  ['\\and', '∧'],
  ['\\or', '∨'],
  ['\\not', '¬'],
  ['\\xor', '⊕'],
  ['<=', '≤'],
  ['>=', '≥'],
  ['!=', '≠'],
  ['~=', '≈'],
  ['+-', '±'],
  ['->', '→'],
  ['=>', '⇒'],
  ['^2', '²'],
  ['^3', '³'],
  ['^-1', '⁻¹'],
  ['^n', 'ⁿ'],
]

// Only ever rewrites the characters directly behind the caret.
function expandAtCaret(text, caret) {
  for (const [token, symbol] of SHORTCUTS) {
    if (caret >= token.length && text.slice(caret - token.length, caret) === token) {
      return {
        text: text.slice(0, caret - token.length) + symbol + text.slice(caret),
        caret: caret - token.length + symbol.length,
      }
    }
  }
  return null
}

/*
  `palette`:
    'always' - the palette is permanently visible. Right for a single
               question on screen (the exam-question runner).
    'focus'  - it appears only while that box is being written in. A mock
               paper puts ten questions on one page; ten permanent palettes
               would be more palette than paper.
*/
export default function AnswerInput({
  value,
  onChange,
  subject,
  rows = 5,
  placeholder = 'Write your answer...',
  label,
  palette = 'always',
}) {
  const ref = useRef(null)
  const hintId = useId()
  const [showHelp, setShowHelp] = useState(false)
  const [focused, setFocused] = useState(false)
  const config = GROUPS_BY_SUBJECT[String(subject || '').toLowerCase()] || null
  const groups = config?.groups || null
  const paletteOpen = palette === 'always' || focused

  // Put the caret back exactly where the edit left it. Without this the
  // browser drops the cursor to the end of the textarea on every controlled
  // re-render, so inserting a symbol mid-answer would fling you to the end.
  const restore = (pos) => {
    requestAnimationFrame(() => {
      const el = ref.current
      if (!el) return
      el.focus()
      el.setSelectionRange(pos, pos)
    })
  }

  const handleChange = (e) => {
    const el = e.target
    const expanded = expandAtCaret(el.value, el.selectionStart)
    if (expanded) {
      onChange(expanded.text)
      restore(expanded.caret)
    } else {
      onChange(el.value)
    }
  }

  const insert = (symbol) => {
    const el = ref.current
    const start = el ? el.selectionStart : (value || '').length
    const end = el ? el.selectionEnd : start
    const text = value || ''
    onChange(text.slice(0, start) + symbol + text.slice(end))
    restore(start + symbol.length)
  }

  return (
    <div>
      {label && <label className="mb-1.5 block text-sm font-semibold text-fg">{label}</label>}
      <textarea
        ref={ref}
        rows={rows}
        value={value}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        aria-describedby={groups ? hintId : undefined}
        className="w-full resize-y rounded-xl border border-line bg-page px-4 py-3 text-fg placeholder:text-muted focus:border-brand focus:outline-none"
      />

      {groups && paletteOpen && (
        <div className="mt-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p id={hintId} className="text-xs text-muted">
              Tap a symbol to insert it, or type{' '}
              {config.hints.map((h, i) => (
                <span key={h}>
                  {i > 0 && ', '}
                  <code className="font-semibold text-fg">{h}</code>
                </span>
              ))}
            </p>
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setShowHelp((s) => !s)}
              aria-expanded={showHelp}
              className="inline-flex items-center gap-1 text-xs font-semibold text-brand-strong hover:underline"
            >
              <Icon name="brain" className="h-3.5 w-3.5" />
              {showHelp ? 'Hide shortcuts' : 'All shortcuts'}
            </button>
          </div>

          {showHelp && (
            <div className="mt-2 rounded-xl border border-line bg-surface p-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                Type these and they turn into symbols
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3">
                {SHORTCUTS.map(([token, symbol]) => (
                  <p key={token} className="flex items-center gap-2 text-xs">
                    <code className="rounded bg-page px-1.5 py-0.5 font-semibold text-fg">{token}</code>
                    <span className="text-muted">→</span>
                    <span className="font-semibold text-fg">{symbol}</span>
                  </p>
                ))}
              </div>
            </div>
          )}

          <div className="mt-2 space-y-1.5">
            {groups.map((g) => (
              <div key={g.label} className="flex flex-wrap items-center gap-1.5">
                <span className="w-full text-[0.65rem] font-semibold uppercase tracking-wide text-muted sm:w-32 sm:shrink-0">
                  {g.label}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {g.symbols.map((s) => (
                    <button
                      key={s}
                      type="button"
                      /* Suppress the mousedown so the textarea never loses
                         focus. Without it the caret position is gone before
                         the click lands, and in `focus` mode the palette
                         would close on the way to being tapped. */
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => insert(s)}
                      aria-label={`Insert ${s}`}
                      /* min-w/h 2.25rem keeps every key at least 36px so it
                         stays tappable on a phone, which is where the
                         missing-symbol problem actually bites. */
                      className="inline-flex h-9 min-w-9 items-center justify-center rounded-lg border border-line bg-surface px-2 text-sm font-semibold text-fg transition-colors hover:border-brand hover:bg-brand-soft hover:text-brand-strong focus-visible:border-brand"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
