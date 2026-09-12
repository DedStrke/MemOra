import { Outlet } from 'react-router-dom'
import AppBar from './AppBar'
import Footer from './Footer'
import FocusMusic from '@/components/ui/FocusMusic'
import LevelUp from '@/components/ui/LevelUp'

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
      {/* Corner Spotify player - persists across app routes, see FocusMusic. */}
      <FocusMusic />
      {/* Level-up screen - watches XP on every app page. */}
      <LevelUp />
    </div>
  )
}
