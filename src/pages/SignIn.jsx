import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Wordmark from '@/components/ui/Wordmark'
import AtmosphereBackground from '@/components/ui/AtmosphereBackground'
import AccentPicker from '@/components/ui/AccentPicker'
import Footer from '@/components/layout/Footer'
import { useApp } from '@/context/AppProvider'
import { isValidEmail, passwordProblem } from '@/lib/auth'

function Field({ id, label, type = 'text', value, onChange, error, autoComplete, children }) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1.5 block text-sm font-semibold text-fg">{label}</span>
      <div className="relative">
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full rounded-2xl border bg-surface px-4 py-3 text-fg outline-none transition-colors placeholder:text-muted focus:border-brand ${
            error ? 'border-danger' : 'border-line'
          }`}
        />
        {children}
      </div>
      {error ? (
        <span id={`${id}-error`} className="mt-1.5 block text-sm text-danger">
          {error}
        </span>
      ) : null}
    </label>
  )
}

export default function SignIn() {
  const navigate = useNavigate()
  const { signIn, signUp, account } = useApp()
  const [searchParams] = useSearchParams()
  const logoTo = account ? '/dashboard' : '/'

  const [mode, setMode] = useState(searchParams.get('mode') === 'signup' ? 'signup' : 'signin')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [busy, setBusy] = useState(false)

  const isSignUp = mode === 'signup'

  function switchMode(next) {
    setMode(next)
    setErrors({})
    setPassword('')
  }

  async function onSubmit(e) {
    e.preventDefault()
    const nextErrors = {}
    if (isSignUp && !name.trim()) nextErrors.name = 'Tell us what to call you.'
    if (!isValidEmail(email)) nextErrors.email = 'Enter a valid email address.'
    if (isSignUp) {
      const problem = passwordProblem(password)
      if (problem) nextErrors.password = problem
    } else if (!password) {
      nextErrors.password = 'Enter your password.'
    }

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setBusy(true)
    try {
      if (isSignUp) await signUp({ name, email, password })
      else await signIn({ email, password })
      navigate('/dashboard')
    } catch (err) {
      setErrors({ form: err.message })
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <AtmosphereBackground />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6">
        <Link to={logoTo} className="flex items-center gap-2">
          <Wordmark />
        </Link>
        <Link to="/" className="text-sm font-semibold text-fg transition-colors hover:text-brand-strong">
          Back to home
        </Link>
      </header>

      <main className="relative z-10 flex flex-1 items-center justify-center px-5 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="glass-strong w-full max-w-md rounded-3xl p-7 sm:p-8"
        >
          <h1 className="text-2xl font-bold text-fg sm:text-3xl">
            {isSignUp ? 'Create your account' : 'Welcome back'}
          </h1>
          <p className="mt-1.5 text-sm text-muted">
            {isSignUp
              ? 'Set up a profile to keep your revision separate on this device.'
              : 'Sign in to pick your revision up where you left it.'}
          </p>

          <div
            role="tablist"
            aria-label="Sign in or create an account"
            className="mt-6 grid grid-cols-2 gap-1 rounded-full border border-line bg-raised p-1"
          >
            {[
              ['signin', 'Sign in'],
              ['signup', 'Create account'],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                role="tab"
                aria-selected={mode === value}
                onClick={() => switchMode(value)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  mode === value ? 'bg-brand text-on-brand' : 'text-muted hover:text-fg'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <form onSubmit={onSubmit} noValidate className="mt-6 space-y-4">
            {isSignUp ? (
              <Field
                id="name"
                label="Name"
                value={name}
                onChange={setName}
                error={errors.name}
                autoComplete="name"
              />
            ) : null}

            <Field
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              error={errors.email}
              autoComplete="email"
            />

            <Field
              id="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={setPassword}
              error={errors.password}
              autoComplete={isSignUp ? 'new-password' : 'current-password'}
            >
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-semibold text-muted transition-colors hover:text-fg"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </Field>

            {isSignUp ? (
              <>
                <p className="text-xs text-muted">At least 8 characters, with a letter and a number.</p>
                <div>
                  <span className="mb-2 block text-sm font-semibold text-fg">Accent colour</span>
                  <AccentPicker />
                </div>
              </>
            ) : null}

            {errors.form ? (
              <p role="alert" className="rounded-2xl bg-danger/10 px-4 py-3 text-sm text-danger">
                {errors.form}
              </p>
            ) : null}

            <Button type="submit" size="lg" disabled={busy} className="w-full">
              {busy ? 'Just a second…' : isSignUp ? 'Create account' : 'Sign in'}
              {busy ? null : <Icon name="arrowRight" className="h-5 w-5" />}
            </Button>
          </form>

          <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-muted">
            Accounts are stored only in this browser, nothing is uploaded, and your revision
            won't follow you to another device.{' '}
            <Link to="/dashboard" className="font-semibold text-brand-strong hover:underline">
              Skip and just study
            </Link>
            .
          </p>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
