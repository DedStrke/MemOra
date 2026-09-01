import { Link } from 'react-router-dom'
import Wordmark from '@/components/ui/Wordmark'
import { NAV_LINKS } from '@/constants/content'

/*
  Site footer - same liquid glass material as the header, so the shell reads
  as one coherent piece of "frosted" chrome top and bottom.
*/
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="glass-strong !rounded-none !border-x-0 !border-b-0 !border-t !border-t-line relative z-10 mt-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-fg">
          <Wordmark />
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted transition-colors hover:text-brand-strong"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-muted">
          &copy; {year} Cortex &middot; runs entirely on this device, no account needed
        </p>
      </div>
    </footer>
  )
}
