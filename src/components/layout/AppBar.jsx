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
  const [menu, setMenu] = useState(false) // profile dropdown (desktop)
  const [mobile, setMobile] = useState(false) // hamburger menu (mobile)
  const initial = (user?.name?.[0] || '?').toUpperCase()

  const signOut = () => {
    setMenu(false)
    setMobile(false)
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
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-fg">
            <WheelLogo hoverSpin className="h-9 w-9 text-brand" />
            <span className="hidden sm:inline">{SITE.name}</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-4 sm:flex sm:gap-5">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <ThemeSwitcher />

          {/* Desktop profile dropdown */}
          <div className="relative hidden sm:block">
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

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobile((m) => !m)}
            aria-expanded={mobile}
            aria-controls="app-mobile-menu"
            aria-label={mobile ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-fg transition-colors hover:border-brand sm:hidden"
          >
            <Icon name={mobile ? 'x' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobile && (
          <>
            <button
              type="button"
              aria-hidden="true"
              tabIndex={-1}
              onClick={() => setMobile(false)}
              className="fixed inset-0 z-30 cursor-default sm:hidden"
            />
            <motion.div
              id="app-mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="relative z-40 border-t border-line bg-surface sm:hidden"
            >
              <div className="mx-auto max-w-6xl px-5 py-3">
                <div className="mb-2 flex items-center gap-3 border-b border-line pb-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-on-brand">
                    {initial}
                  </span>
                  <span className="truncate text-sm font-semibold text-fg">{user?.name}</span>
                </div>
                <nav className="flex flex-col gap-0.5">
                  {NAV_LINKS.map((l) => (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      onClick={() => setMobile(false)}
                      className={({ isActive }) =>
                        `rounded-lg px-3 py-2.5 text-base font-semibold transition-colors ${
                          isActive ? 'bg-brand-soft text-brand-strong' : 'text-fg hover:bg-raised'
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  ))}
                  <Link
                    to="/profile"
                    onClick={() => setMobile(false)}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-base font-medium text-fg hover:bg-raised"
                  >
                    <Icon name="user" className="h-5 w-5 text-muted" />
                    Profile
                  </Link>
                  <button
                    type="button"
                    onClick={signOut}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-left text-base font-medium text-fg hover:bg-raised"
                  >
                    <Icon name="logout" className="h-5 w-5 text-muted" />
                    Sign out
                  </button>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
