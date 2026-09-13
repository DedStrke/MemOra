import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import SigilMark from '@/components/ui/SigilMark'
import SigilWordmark from '@/components/ui/SigilWordmark'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'
import { useApp } from '@/context/AppProvider'

/*
  Shared collapsing header used across all marketing / public pages
  (Landing, HowItWorks, SignIn, legal pages, etc.).

  Behaviour:
  - Transparent and edge-to-edge at the very top of the page so the header
    merges seamlessly into the background gradient.
  - Once the user scrolls past 90px it morphs into a floating glass pill
    (inset, rounded-3xl, backdrop-blur) that stays clearly readable over
    any page content below.
  - A discrete boolean (scrolled) drives plain CSS transitions - not a
    continuous per-pixel scroll-linked style - to avoid forcing layout/paint
    on every scroll frame and desyncing the sticky bar.

  Props:
  - ctaLabel  – label for the right-hand call-to-action button (optional)
  - ctaTo     – route for the CTA (optional, defaults to /signin or /dashboard)
  - showHowItWorks – whether to show the "How it works" link (default true on landing)
*/
export default function MarketingHeader({ showHowItWorks = false, ctaLabel, ctaTo }) {
  const { account } = useApp()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const resolvedCtaTo = ctaTo ?? (account ? '/dashboard' : '/signin')
  const resolvedCtaLabel = ctaLabel ?? (account ? 'Go to dashboard' : 'Sign in')

  return (
    <header
      className={`sticky top-0 z-40 overflow-hidden transition-[margin] duration-300 ease-out ${
        scrolled ? 'mx-4 mt-3' : 'mx-0 mt-0'
      }`}
    >
      {/* Glass pill — hidden at the top, fades in as a floating pill on scroll */}
      <div
        className={`glass-strong absolute inset-0 transition-[opacity,border-radius] duration-300 ease-out ${
          scrolled ? '!rounded-3xl opacity-100' : '!rounded-none opacity-0'
        }`}
      />

      {/* Content row — consistent padding across all viewport sizes */}
      <div
        className={`relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 transition-[padding] duration-300 ease-out sm:px-8 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        {/* Logo */}
        <Link
          to={account ? '/dashboard' : '/'}
          className="flex items-center gap-2.5 text-xl font-semibold text-fg"
        >
          <div
            className={`origin-left transition-transform duration-300 ease-out ${
              scrolled ? 'scale-[0.85]' : 'scale-100'
            }`}
          >
            <SigilMark className="h-8 w-8 text-brand" />
          </div>
          <div
            className={`origin-left transition-transform duration-300 ease-out ${
              scrolled ? 'scale-[0.85]' : 'scale-100'
            }`}
          >
            <SigilWordmark />
          </div>
        </Link>

        {/* Right side controls */}
        <div className="flex items-center gap-3">
          {showHowItWorks && (
            <Link
              to="/how-it-works"
              className="hidden text-sm font-semibold text-fg transition-colors hover:text-brand-strong sm:inline"
            >
              How it works
            </Link>
          )}
          <ThemeSwitcher />
          <Button as={Link} to={resolvedCtaTo} size="sm">
            <span className="hidden sm:inline">{resolvedCtaLabel}</span>
            <span className="sm:hidden">
              {account ? 'Dashboard' : resolvedCtaLabel}
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}
