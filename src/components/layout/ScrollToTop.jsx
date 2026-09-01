import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/*
  React Router doesn't reset scroll position on navigation - without this,
  clicking a link while scrolled down on the current page lands you at the
  same scroll offset on the new page, which usually means the middle of
  nowhere. Resets to the top on every route change (path or query).
*/
export default function ScrollToTop() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname, search])

  return null
}
