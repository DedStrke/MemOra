import { Outlet } from 'react-router-dom'
import AppBar from './AppBar'
import Footer from './Footer'

/*
  Shell for every app page: top bar + routed page. No login gate; this is a
  single-user, on-device tool.
*/
export default function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <AppBar />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
