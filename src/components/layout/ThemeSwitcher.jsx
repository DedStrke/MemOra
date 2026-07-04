import { useApp, THEMES, THEME_META } from '@/context/AppProvider'
import Icon from '@/components/ui/Icon'

/* Three-state theme switcher: light / dark / high contrast. */
export default function ThemeSwitcher() {
  const { theme, setTheme } = useApp()
  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="inline-flex items-center gap-1 rounded-full border border-line bg-surface p-1"
    >
      {THEMES.map((t) => {
        const active = theme === t
        return (
          <button
            key={t}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={THEME_META[t].label}
            title={THEME_META[t].label}
            onClick={() => setTheme(t)}
            className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
              active
                ? 'bg-brand text-on-brand'
                : 'text-muted hover:bg-raised hover:text-fg'
            }`}
          >
            <Icon name={THEME_META[t].icon} className="h-5 w-5" />
          </button>
        )
      })}
    </div>
  )
}
