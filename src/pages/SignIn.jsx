import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Pfp from '@/components/ui/Pfp'
import SigilWordmark from '@/components/ui/SigilWordmark'
import AtmosphereBackground from '@/components/ui/AtmosphereBackground'
import AccentPicker from '@/components/ui/AccentPicker'
import MascotPicker, { LookSwatch } from '@/components/ui/MascotPicker'
import Footer from '@/components/layout/Footer'
import { useApp } from '@/context/AppProvider'
import { isValidEmail, passwordProblem } from '@/lib/auth'
import { usernameProblem, suggestUsername } from '@/lib/friends'
import { mascotById } from '@/constants/mascots'
import { spotifyConfigured, beginSpotifyLogin } from '@/lib/spotify'

/*
  Sign in / create account, in two stages for a new account:

    1. Credentials - name, email, password. Nothing about identity yet;
       this is the part that has to match a real login form.
    2. Set up your profile - shown once, right after the account exists -
       study buddy, a profile picture (any image, or a GIF), and a
       username. This is the ONLY place a username or photo is chosen
       during sign-up; changing them again afterwards happens in
       Settings, never on the dashboard.

  Signing in to an existing account skips straight to the dashboard - it
  already has a profile.
*/

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
  const { signIn, signUp, account, user, friends, setMascot, setUsername, setAvatar, applyLook, showToast } = useApp()
  const [searchParams] = useSearchParams()
  const logoTo = account ? '/dashboard' : '/'

  const [mode, setMode] = useState(searchParams.get('mode') === 'signup' ? 'signup' : 'signin')
  // 'form' (credentials) or 'setup' (post-signup profile) - only reachable
  // by actually creating an account, never by URL.
  const [stage, setStage] = useState('form')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [busy, setBusy] = useState(false)

  const [mascot, setMascotChoice] = useState({ kind: 'builtin', id: 'pochita' })
  const [useLook, setUseLook] = useState(true)
  const built = mascot.kind === 'custom' ? null : mascotById(mascot.id)

  const [username, setUsernameDraft] = useState('')
  const [usernameTouched, setUsernameTouched] = useState(false)
  const usernameValue = usernameTouched ? username : suggestUsername(name) || ''
  const takenUsernames = friends.map((f) => f.username).filter(Boolean)
  const usernameError = errors.username

  const isSignUp = mode === 'signup'

  function switchMode(next) {
    setMode(next)
    setStage('form')
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
      if (isSignUp) {
        await signUp({ name, email, password })
        setPassword('')
        setStage('setup')
      } else {
        await signIn({ email, password })
        navigate('/dashboard')
      }
    } catch (err) {
      setErrors({ form: err.message })
    } finally {
      setBusy(false)
    }
  }

  // Applies the buddy/look regardless of whether a username is set - only
  // the username itself is skippable.
  const applyBuddyChoice = () => {
    setMascot(mascot)
    if (useLook && built) applyLook(built.look)
  }

  const finishSetup = () => {
    const problem = usernameProblem(usernameValue, { taken: takenUsernames })
    if (problem) {
      setErrors({ username: problem })
      return
    }
    applyBuddyChoice()
    setUsername(usernameValue)
    navigate('/dashboard')
  }

  const skipUsername = () => {
    applyBuddyChoice()
    navigate('/dashboard')
  }

  // Optional last step: save everything above, then hand the browser to
  // Spotify's consent page. It comes back to the dashboard with the
  // player open (App.jsx routes the return, FocusMusic finishes it).
  const connectSpotify = () => {
    const problem = usernameProblem(usernameValue, { taken: takenUsernames })
    if (problem && usernameTouched) {
      setErrors({ username: problem })
      return
    }
    applyBuddyChoice()
    if (!problem) setUsername(usernameValue)
    beginSpotifyLogin()
  }

  const showingSetup = isSignUp && stage === 'setup'

  return (
    <div className="relative flex min-h-screen flex-col">
      <AtmosphereBackground />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6">
        <Link to={logoTo} className="flex items-center gap-2">
          <SigilWordmark />
        </Link>
        {!showingSetup && (
          <Link to="/" className="text-sm font-semibold text-fg transition-colors hover:text-brand-strong">
            Back to home
          </Link>
        )}
      </header>

      <main className="relative z-10 flex flex-1 items-center justify-center px-5 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className={`glass-strong w-full rounded-3xl p-7 sm:p-8 ${showingSetup ? 'max-w-xl' : 'max-w-md'}`}
        >
          {showingSetup ? (
            <>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-strong">Almost there</p>
              <h1 className="mt-1 text-2xl font-bold text-fg sm:text-3xl">Set up your profile, {name.split(/\s+/)[0]}</h1>
              <p className="mt-1.5 text-sm text-muted">
                This is the only time picking these is part of sign-up - change any of it later in Settings.
              </p>

              <div className="mt-6 flex items-center gap-4">
                <Pfp
                  photo={user.avatar}
                  name={name}
                  className="h-20 w-20 shrink-0"
                  editable
                  onChange={setAvatar}
                  onError={showToast}
                />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-fg">Profile picture</p>
                  <p className="text-xs text-muted">Optional - any image, or an animated GIF under 20&nbsp;MB.</p>
                </div>
              </div>

              <div className="mt-6">
                <span className="mb-1 block text-sm font-semibold text-fg">Pick your study buddy</span>
                <p className="mb-2 text-xs text-muted">
                  It lives on your dashboard and your friend card, and it talks back.
                </p>
                <MascotPicker value={mascot} onChange={setMascotChoice} compact />
              </div>

              {built ? (
                <label className="mt-4 flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-line bg-surface px-4 py-3">
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-fg">Use {built.name}&rsquo;s look</span>
                    <LookSwatch look={built.look} className="mt-0.5" />
                  </span>
                  <input
                    type="checkbox"
                    checked={useLook}
                    onChange={(e) => setUseLook(e.target.checked)}
                    className="h-5 w-5 shrink-0 accent-[var(--brand)]"
                  />
                </label>
              ) : (
                <div className="mt-4">
                  <span className="mb-2 block text-sm font-semibold text-fg">Accent colour</span>
                  <AccentPicker />
                </div>
              )}

              <div className="mt-4">
                <Field
                  id="username"
                  label="Username"
                  value={usernameValue}
                  onChange={(v) => {
                    setUsernameTouched(true)
                    setUsernameDraft(v.toLowerCase())
                    setErrors((er) => ({ ...er, username: undefined }))
                  }}
                  error={usernameError}
                  autoComplete="username"
                />
                <p className="mt-1.5 text-xs text-muted">
                  Lowercase letters, digits, dots and underscores. This is how friends recognise your code - see{' '}
                  <Link to="/friends" className="font-semibold text-brand-strong hover:underline">
                    Friends
                  </Link>
                  .
                </p>
              </div>

              {spotifyConfigured() && (
                <div className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-line bg-surface px-4 py-3">
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-soft">
                      <Icon name="music" className="h-4 w-4 text-brand-strong" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-fg">Music while you revise</span>
                      <span className="block text-xs text-muted">
                        Optional - connect Spotify to pick from your own playlists. You can do it later from the player.
                      </span>
                    </span>
                  </span>
                  <Button type="button" variant="secondary" size="sm" onClick={connectSpotify} className="shrink-0">
                    Connect Spotify
                  </Button>
                </div>
              )}

              <div className="mt-6 flex flex-col gap-2 sm:flex-row-reverse">
                <Button type="button" size="lg" onClick={finishSetup} className="flex-1">
                  Finish
                  <Icon name="arrowRight" className="h-5 w-5" />
                </Button>
                <Button type="button" variant="ghost" size="lg" onClick={skipUsername}>
                  Skip username for now
                </Button>
              </div>
            </>
          ) : (
            <>
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
                  <Field id="name" label="Name" value={name} onChange={setName} error={errors.name} autoComplete="name" />
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

                {isSignUp ? <p className="text-xs text-muted">At least 8 characters, with a letter and a number.</p> : null}

                {errors.form ? (
                  <p role="alert" className="rounded-2xl bg-danger/10 px-4 py-3 text-sm text-danger">
                    {errors.form}
                  </p>
                ) : null}

                <Button type="submit" size="lg" disabled={busy} className="w-full">
                  {busy ? 'Just a second…' : isSignUp ? 'Continue' : 'Sign in'}
                  {busy ? null : <Icon name="arrowRight" className="h-5 w-5" />}
                </Button>
              </form>

              <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-muted">
                Your account works on any device - sign in with the same email and password
                elsewhere. Your revision progress itself is still saved only on this device.{' '}
                <Link to="/dashboard" className="font-semibold text-brand-strong hover:underline">
                  Skip and just study
                </Link>
                .
              </p>
            </>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
