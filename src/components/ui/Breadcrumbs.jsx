import { Link, useLocation } from 'react-router-dom'
import Icon from '@/components/ui/Icon'
import { metaForPath } from '@/lib/seo'

/*
  Breadcrumb trail, read from the same route registry that produces the
  page title (lib/seo.js) so the visible trail and the BreadcrumbList
  JSON-LD can never disagree - a mismatch between them is one of the
  things Google's rich-results test flags.

  Rendered as an ordered list inside <nav aria-label="Breadcrumb">, which is
  the markup screen readers announce as a breadcrumb. The separators are
  aria-hidden so they are not read out as content, and the current page is
  marked aria-current rather than being a link to itself.
*/
export default function Breadcrumbs({ className = '', trail }) {
  const { pathname } = useLocation()
  const meta = metaForPath(pathname)
  const crumbs = trail || meta.crumbs || []
  if (!crumbs.length) return null

  const items = [{ label: 'Home', to: '/' }, ...crumbs]

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs font-medium text-muted">
        {items.map((c, i) => {
          const last = i === items.length - 1
          return (
            <li key={c.to} className="flex items-center gap-1.5">
              {i > 0 && (
                <Icon name="chevronRight" className="h-3 w-3 shrink-0 opacity-60" aria-hidden="true" />
              )}
              {last ? (
                <span aria-current="page" className="font-semibold text-fg">
                  {c.label}
                </span>
              ) : (
                <Link to={c.to} className="transition-colors hover:text-brand-strong hover:underline">
                  {c.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
