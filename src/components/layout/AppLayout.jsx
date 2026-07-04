import { Navigate, Outlet } from 'react-router-dom'
import AppBar from './AppBar'
import MascotChat from './MascotChat'
import { useApp } from '@/context/AppProvider'

/*
  Shell for signed-in pages: top bar + routed page + the floating study buddy.
  Requires an active session; otherwise back to login.
*/
export default function AppLayout() {
  const { loggedIn } = useApp()
  if (!loggedIn) return <Navigate to="/login" replace />

  return (
    <div className="flex min-h-screen flex-col">
      <AppBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <MascotChat />
    </div>
  )
}
