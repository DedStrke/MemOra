import { ACCENTS, ACCENT_META, useApp } from '@/context/AppProvider'

/*
  A row of colour swatches for the brand accent (independent of light/dark -
  see the [data-accent=...] blocks in index.css). Reused on sign-up and in
  Settings, so the choice isn't locked to a one-time decision during account
  creation.
*/
export default function AccentPicker({ className = '' }) {
  const { accent, setAccent } = useApp()

  return (
    <div role="radiogroup" aria-label="Accent colour" className={`flex flex-wrap gap-2.5 ${className}`}>
      {ACCENTS.map((id) => {
        const meta = ACCENT_META[id]
        const active = accent === id
        return (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={meta.label}
            title={meta.label}
            onClick={() => setAccent(id)}
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform hover:scale-110 ${
              active ? 'ring-2 ring-offset-2 ring-offset-page' : ''
            }`}
            style={{ backgroundColor: meta.swatch, ...(active ? { '--tw-ring-color': meta.swatch } : {}) }}
          >
            {active && (
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M4 10.5l3.5 3.5L16 6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        )
      })}
    </div>
  )
}
