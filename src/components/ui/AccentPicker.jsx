import Icon from '@/components/ui/Icon'
import ColorWheel from '@/components/ui/ColorWheel'
import { ACCENTS, ACCENT_META, useApp } from '@/context/AppProvider'

/*
  A row of colour swatches for the brand accent (independent of light/dark -
  see the [data-accent=...] blocks in index.css). Reused on sign-up and in
  Settings, so the choice isn't locked to a one-time decision during account
  creation.

  "Customise" below it is a second, deliberately secondary path: a wheel
  where dragging to an EXACT colour is fiddly on purpose (that precision is
  what makes it powerful, and what makes it a chore as the default). The
  swatches stay the fast one-click choice for everyone; the wheel only
  opens for someone who already knows they want a colour that isn't here.
*/
export default function AccentPicker({ className = '' }) {
  const { accent, customAccent, setAccent, setCustomAccent } = useApp()
  const isCustom = accent === 'custom'
  const wheelValue = customAccent || ACCENT_META[accent]?.swatch || ACCENT_META.blue.swatch

  return (
    <div className={className}>
      <div role="radiogroup" aria-label="Accent colour" className="flex flex-wrap gap-2.5">
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

      <details className="group mt-3" open={isCustom}>
        <summary className="flex w-fit cursor-pointer list-none items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-fg [&::-webkit-details-marker]:hidden">
          {isCustom && (
            <span aria-hidden="true" className="h-3.5 w-3.5 rounded-full ring-1 ring-line" style={{ backgroundColor: customAccent }} />
          )}
          Customise
          <Icon name="chevronDown" className="h-3.5 w-3.5 transition-transform group-open:rotate-180" />
        </summary>
        <div className="mt-3 rounded-2xl border border-line bg-surface p-4">
          <ColorWheel value={wheelValue} onChange={setCustomAccent} />
        </div>
      </details>
    </div>
  )
}
