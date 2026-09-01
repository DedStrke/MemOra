import { Link } from 'react-router-dom'
import Wordmark from '@/components/ui/Wordmark'
import { FOOTER_COLUMNS, SITE } from '@/constants/content'
import { useApp } from '@/context/AppProvider'

/*
  Site footer - same liquid glass material as the header, so the shell reads
  as one coherent piece of "frosted" chrome top and bottom. Column links come
  from FOOTER_COLUMNS (content.js) so adding a page just means adding a row
  there, not touching this component.
*/
export default function Footer() {
  const { account } = useApp()
  const year = new Date().getFullYear()
  const logoTo = account ? '/dashboard' : '/'

  return (
    <footer className="glass-strong !rounded-none !border-x-0 !border-b-0 !border-t !border-t-line relative z-10 mt-16">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-8">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-sm font-medium text-fg transition-colors hover:text-brand-strong"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 border-t border-line pt-8 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
          <div>
            <Link to={logoTo} className="flex items-center gap-2 text-fg">
              <Wordmark />
            </Link>
            <p className="mt-2 text-sm text-muted">{SITE.tagline}</p>
          </div>
          <p className="text-xs text-muted">
            &copy; {year} {SITE.name} &middot; free, no account needed to try it
          </p>
        </div>
      </div>
    </footer>
  )
}
