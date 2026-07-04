import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import WheelLogo from '@/components/ui/WheelLogo'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher'
import { fadeInUp } from '@/lib/motion'
import { SITE, AUTH } from '@/constants/content'
import { useApp } from '@/context/AppProvider'

export default function Login() {
  const navigate = useNavigate()
  const { user, login } = useApp()
  const [email, setEmail] = useState(user?.email || '')
  const [error, setError] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!user) {
      navigate('/signup')
      return
    }
    const res = login(email)
    if (res.ok) navigate('/dashboard')
    else if (res.reason === 'no-account') navigate('/signup')
    else setError(AUTH.wrongEmail)
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-5 py-10">
      <div className="absolute right-5 top-5">
        <ThemeSwitcher />
      </div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="w-full max-w-md"
      >
        <div className="mb-6 flex flex-col items-center text-center">
          <Link to="/" className="inline-flex items-center gap-2.5">
            <WheelLogo idle idleDuration={30} className="h-11 w-11 text-brand" />
            <span className="font-display text-4xl font-semibold text-fg">
              {SITE.name}
            </span>
          </Link>
          <h1 className="mt-6 text-2xl font-bold text-fg">{AUTH.loginTitle}</h1>
          <p className="readable mt-1 text-muted">
            {user ? `Hi ${user.name}, log in to pick up where you left off.` : AUTH.loginSubtitle}
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-line bg-surface p-6 shadow-sm"
        >
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-fg">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setError('')
            }}
            placeholder="you@example.com"
            className="mb-4 w-full rounded-xl border border-line bg-surface px-4 py-3 text-fg placeholder:text-muted focus:border-brand focus:outline-none"
          />
          <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-fg">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            className="mb-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-fg placeholder:text-muted focus:border-brand focus:outline-none"
          />
          {error && <p className="mb-2 text-sm font-medium text-danger">{error}</p>}
          <p className="mb-5 text-xs text-muted">{AUTH.demoNote}</p>
          <Button type="submit" size="lg" className="w-full">
            Log in
          </Button>
        </form>

        <p className="mt-5 text-center text-sm text-muted">
          New here?{' '}
          <Link to="/signup" className="font-semibold text-brand-strong hover:underline">
            Create an account
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
