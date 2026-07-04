import { Navigate, Outlet } from 'react-router-dom'
import AppBar from './AppBar'
import MascotChat from './MascotChat'
import { useApp } from '@/context/AppProvider'

/*
  Shell for signed-in pages: top bar + routed page + the floating study buddy.
  Requires an active session; otherwise back to login.
*/
export default function AppLayout() {
  const { loggedIn, authReady } = useApp()

  // Wait for the first Firebase Auth check so a returning user is not bounced to
  // /login before their session resolves.
  if (!authReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-page">
        <div className="flex flex-col items-center gap-3 text-muted">
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-brand" />
          <span className="text-sm">Loading your space...</span>
        </div>
      </div>
    )
  }
  if (!loggedIn) return <Navigate to="/login" replace />

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <AppBar />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <MascotChat />
    </div>
  )
}
