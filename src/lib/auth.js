/*
  DEVICE-LOCAL ACCOUNTS.

  This app has no backend by design, so "signing in" here means unlocking a
  profile stored in this browser - it is NOT real authentication. Anyone with
  devtools can read the store, and accounts do not follow you to another
  device or browser. Treat it as a profile picker with a password on it.

  What it does do properly: passwords are never stored. Each account keeps a
  random salt and a PBKDF2-SHA256 derivation (210k iterations, matching OWASP's
  current guidance), and sign-in re-derives and compares. So a shared or
  reused password isn't sitting in localStorage in the clear. Repeated wrong
  passwords against the same email lock it out with exponential backoff, and
  the session itself is a plain localStorage key with no expiry, so signing
  in once keeps you in until you explicitly sign out - closing the tab or
  restarting the browser does not.

  If this ever needs real accounts, replace this module with a backend auth
  call - the surface (signUp/signIn/signOut/currentAccount) is what the rest
  of the app consumes, so the swap stays contained.
*/

const ACCOUNTS_KEY = 'memora:accounts:v1'
const SESSION_KEY = 'memora:session:v1'
const ATTEMPTS_KEY = 'memora:signin-attempts:v1'
const ITERATIONS = 210000

// Failed sign-ins lock the EMAIL out with exponential backoff, not the
// device or the account's existence - so this can't be used to enumerate
// which emails have accounts (a failed attempt against a non-existent email
// locks out identically). First 4 misses are free (typos happen); the 5th
// starts a 30s lock that doubles each further miss, capped at 15 minutes.
const FREE_ATTEMPTS = 4
const BASE_LOCK_MS = 30 * 1000
const MAX_LOCK_MS = 15 * 60 * 1000

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

function writeJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* storage unavailable (private mode, quota) - non-fatal */
  }
}

function lockRemainingMs(key) {
  const rec = readJson(ATTEMPTS_KEY, {})[key]
  if (!rec || !rec.lockUntil) return 0
  return Math.max(0, rec.lockUntil - Date.now())
}

function recordFailure(key) {
  const attempts = readJson(ATTEMPTS_KEY, {})
  const count = (attempts[key]?.count || 0) + 1
  const over = count - FREE_ATTEMPTS
  const lockUntil = over > 0 ? Date.now() + Math.min(BASE_LOCK_MS * 2 ** (over - 1), MAX_LOCK_MS) : 0
  writeJson(ATTEMPTS_KEY, { ...attempts, [key]: { count, lockUntil } })
}

function clearFailures(key) {
  const attempts = readJson(ATTEMPTS_KEY, {})
  if (!(key in attempts)) return
  const next = { ...attempts }
  delete next[key]
  writeJson(ATTEMPTS_KEY, next)
}

const lockMessage = (ms) => {
  const mins = Math.ceil(ms / 60000)
  const secs = Math.ceil(ms / 1000)
  return `Too many attempts. Try again in ${mins > 1 ? `${mins} minutes` : `${secs}s`}.`
}

const toHex = (buf) =>
  Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')

async function derive(password, saltHex) {
  const enc = new TextEncoder()
  const salt = Uint8Array.from(saltHex.match(/.{2}/g).map((b) => parseInt(b, 16)))
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits'])
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' },
    key,
    256,
  )
  return toHex(bits)
}

// Constant-time-ish compare, so a wrong password can't be narrowed down by
// how quickly the comparison bails out.
function safeEqual(a, b) {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}

const normalise = (email) => String(email || '').trim().toLowerCase()

// Used only when no account exists, so a sign-in against an unknown email
// still pays the same PBKDF2 cost as a real one - otherwise the response
// time itself would leak which emails have accounts on this device.
const DUMMY_SALT = '00'.repeat(16)

export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalise(email))

export function passwordProblem(password) {
  if (!password || password.length < 8) return 'Use at least 8 characters.'
  if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
    return 'Include at least one letter and one number.'
  }
  return null
}

const publicShape = ({ email, name, createdAt }) => ({ email, name, createdAt })

export function currentAccount() {
  const email = readJson(SESSION_KEY, null)
  if (!email) return null
  const account = readJson(ACCOUNTS_KEY, {})[email]
  return account ? publicShape(account) : null
}

export async function signUp({ name, email, password }) {
  const key = normalise(email)
  const accounts = readJson(ACCOUNTS_KEY, {})
  if (accounts[key]) throw new Error('An account already exists for that email on this device.')

  const saltHex = toHex(crypto.getRandomValues(new Uint8Array(16)))
  const account = {
    email: key,
    name: String(name || '').trim() || key.split('@')[0],
    salt: saltHex,
    hash: await derive(password, saltHex),
    createdAt: Date.now(),
  }
  writeJson(ACCOUNTS_KEY, { ...accounts, [key]: account })
  writeJson(SESSION_KEY, key)
  clearFailures(key)
  return publicShape(account)
}

export async function signIn({ email, password }) {
  const key = normalise(email)

  const locked = lockRemainingMs(key)
  if (locked > 0) throw new Error(lockMessage(locked))

  const account = readJson(ACCOUNTS_KEY, {})[key]
  // Same message either way - saying "no such account" would let someone
  // enumerate which emails exist on the device. Deriving against a dummy
  // salt when there's no account means an unknown email takes the same
  // time to reject as a wrong password does, so the response time itself
  // can't be used for that enumeration either.
  const rejection = new Error('That email and password do not match an account on this device.')
  const derived = await derive(password, account?.salt || DUMMY_SALT)
  if (!account || !safeEqual(derived, account.hash)) {
    recordFailure(key)
    throw rejection
  }

  clearFailures(key)
  writeJson(SESSION_KEY, key)
  return publicShape(account)
}

export function signOut() {
  try {
    localStorage.removeItem(SESSION_KEY)
  } catch {
    /* non-fatal */
  }
}
