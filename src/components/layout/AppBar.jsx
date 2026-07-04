import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { SITE, NAV_LINKS } from '@/constants/content'
import Icon from '@/components/ui/Icon'
import WheelLogo from '@/components/ui/WheelLogo'
import ThemeSwitcher from './ThemeSwitcher'
import { useApp } from '@/context/AppProvider'

const linkClass = ({ isActive }) =>
  `text-sm font-semibold transition-colors ${
    isActive ? 'text-brand-strong' : 'text-muted hover:text-fg'
  }`

export default function AppBar() {
  const { user, logout } = useApp()
  const navigate = useNavigate()
  const [menu, setMenu] = useState(false)
  const initial = (user?.name?.[0] || '?').toUpperCase()

  const signOut = () => {
    setMenu(false)
    logout()
    navigate('/')
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="sticky top-0 z-40 border-b border-line bg-surface/85 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <div className="flex items-center gap-6">
          {/* Logo goes to the first page (landing). */}
          <Link to="/" className="flex items-center gap-2 text-lg font-bold text-fg">
            <WheelLogo hoverSpin className="h-9 w-9 text-brand" />
            <span className="hidden sm:inline">{SITE.name}</span>
          </Link>

          <nav className="flex items-center gap-4 sm:gap-5">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <ThemeSwitcher />

          <div className="relative">
            <button
              type="button"
              onClick={() => setMenu((m) => !m)}
              aria-expanded={menu}
              aria-haspopup="menu"
              className="flex items-center gap-2 rounded-full border border-line bg-surface py-1 pl-1 pr-2 transition-colors hover:border-brand"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-on-brand">
                {initial}
              </span>
              <span className="hidden max-w-24 truncate text-sm font-medium text-fg sm:block">
                {user?.name}
              </span>
              <Icon name="chevronDown" className="h-4 w-4 text-muted" />
            </button>

            <AnimatePresence>
              {menu && (
                <>
                  <button
                    type="button"
                    aria-hidden="true"
                    tabIndex={-1}
                    onClick={() => setMenu(false)}
                    className="fixed inset-0 z-40 cursor-default"
                  />
                  <motion.div
                    role="menu"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute right-0 top-full z-50 mt-2 w-48 overflow-hidden rounded-xl border border-line bg-surface shadow-xl"
                  >
                    <Link
                      to="/profile"
                      role="menuitem"
                      onClick={() => setMenu(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-fg hover:bg-raised"
                    >
                      <Icon name="user" className="h-4 w-4 text-muted" />
                      Profile
                    </Link>
                    <button
                      type="button"
                      role="menuitem"
                      onClick={signOut}
                      className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm text-fg hover:bg-raised"
                    >
                      <Icon name="logout" className="h-4 w-4 text-muted" />
                      Sign out
                    </button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
