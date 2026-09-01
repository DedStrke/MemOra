import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { NAV_LINKS } from '@/constants/content'
import Icon from '@/components/ui/Icon'
import EyeMark from '@/components/ui/EyeMark'
import Wordmark from '@/components/ui/Wordmark'
import ThemeSwitcher from './ThemeSwitcher'
import { useApp } from '@/context/AppProvider'

// Icons for the nav destinations, so the menu reads clearly.
const NAV_ICONS = {
  '/dashboard': 'home',
  '/courses': 'cap',
  '/progress': 'activity',
  '/performance': 'target',
  '/community': 'users',
}

const itemClass = ({ isActive }) =>
  `flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors ${
    isActive ? 'bg-brand-soft text-brand-strong' : 'text-fg hover:bg-raised'
  }`

// Inline top-bar nav links (shown next to the wordmark on larger screens).
const navLinkClass = ({ isActive }) =>
  `text-sm font-semibold transition-colors ${
    isActive ? 'text-brand-strong' : 'text-muted hover:text-fg'
  }`

export default function AppBar() {
  const { user, account, signOut } = useApp()
  const [open, setOpen] = useState(false)
  const initial = (user?.name?.[0] || '?').toUpperCase()

  const close = () => setOpen(false)

  // Close the menu with Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Same collapsing treatment as the landing header: transparent and
  // edge-to-edge at rest, fading in a glass panel and floating as an inset
  // pill once the page scrolls - continuous, off real scroll position.
  const { scrollY } = useScroll()
  const padY = useTransform(scrollY, [0, 100], [18, 10])
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.88])
  const insetX = useTransform(scrollY, [0, 100], [0, 14])
  const insetTop = useTransform(scrollY, [0, 100], [0, 10])
  const radius = useTransform(scrollY, [0, 100], [0, 24])
  const glassOpacity = useTransform(scrollY, [0, 100], [0, 1])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{ marginLeft: insetX, marginRight: insetX, marginTop: insetTop, borderRadius: radius }}
      className="sticky top-0 z-40"
    >
      {/* Clipped to the pill shape on its own - the header itself must stay
          overflow-visible so the mobile menu dropdown can pop out below it. */}
      <motion.div
        className="glass-strong absolute inset-0 overflow-hidden"
        style={{ opacity: glassOpacity, borderRadius: radius }}
      />
      <motion.div
        style={{ paddingTop: padY, paddingBottom: padY }}
        className="relative mx-auto flex max-w-6xl items-center justify-between px-5"
      >
        <div className="flex items-center gap-7">
          {/* Logo goes to the first page (landing). */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-semibold text-fg"
          >
            <motion.div style={{ scale: logoScale }} className="origin-left">
              <EyeMark pulseOnHover pulseOnClick className="h-9 w-9 text-brand" />
            </motion.div>
            <motion.div style={{ scale: logoScale }} className="origin-left">
              <Wordmark />
            </motion.div>
          </Link>

          {/* Inline nav next to the wordmark (mobile still uses the hamburger). */}
          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} className={navLinkClass}>
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <ThemeSwitcher />

          {/* Hamburger menu (shown on every screen size). */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-haspopup="menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="glass flex h-10 w-10 items-center justify-center rounded-full text-fg transition-colors hover:[border-color:color-mix(in_srgb,var(--brand)_45%,var(--line))]"
            >
              <Icon name={open ? 'x' : 'menu'} className="h-5 w-5" />
            </button>

            <AnimatePresence>
              {open && (
                <>
                  <button
                    type="button"
                    aria-hidden="true"
                    tabIndex={-1}
                    onClick={close}
                    className="fixed inset-0 z-40 cursor-default"
                  />
                  <motion.div
                    role="menu"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.16 }}
                    className="glass-strong absolute right-0 top-full z-50 mt-2 w-64 overflow-hidden rounded-2xl"
                  >
                    {/* Who's studying */}
                    <div className="flex items-center gap-3 border-b border-line px-4 py-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-brand text-sm font-bold text-on-brand">
                        {user?.avatar ? (
                          <img src={user.avatar} alt="" className="h-full w-full object-cover" />
                        ) : (
                          initial
                        )}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-fg">{user?.name}</p>
                        {account ? (
                          <p className="truncate text-xs text-muted">{account.email}</p>
                        ) : null}
                      </div>
                    </div>

                    <nav className="flex flex-col gap-0.5 p-1.5">
                      {/* Nav links live in the menu only on mobile; desktop has them inline. */}
                      <div className="flex flex-col gap-0.5 md:hidden">
                        {NAV_LINKS.map((l) => (
                          <NavLink
                            key={l.to}
                            to={l.to}
                            role="menuitem"
                            onClick={close}
                            className={itemClass}
                          >
                            <Icon
                              name={NAV_ICONS[l.to] || 'chevronRight'}
                              className="h-4 w-4 text-muted"
                            />
                            {l.label}
                          </NavLink>
                        ))}
                        <div className="my-1 border-t border-line" />
                      </div>

                      <NavLink
                        to="/profile"
                        role="menuitem"
                        onClick={close}
                        className={itemClass}
                      >
                        <Icon name="user" className="h-4 w-4 text-muted" />
                        Settings
                      </NavLink>

                      {account ? (
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => {
                            signOut()
                            close()
                          }}
                          className={itemClass({ isActive: false })}
                        >
                          <Icon name="chevronRight" className="h-4 w-4 text-muted" />
                          Sign out
                        </button>
                      ) : (
                        <NavLink to="/signin" role="menuitem" onClick={close} className={itemClass}>
                          <Icon name="user" className="h-4 w-4 text-muted" />
                          Sign in
                        </NavLink>
                      )}
                    </nav>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}
