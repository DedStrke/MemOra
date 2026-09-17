/*
  REAL ACCOUNTS, via Firebase Authentication.

  Signing in here creates or unlocks an actual account on Firebase's
  servers - the same email and password work from any device or browser,
  which is the whole point over the device-local scheme this replaced.
  Firebase stores and hashes the password; this module never sees or
  keeps one.

  What does NOT follow the account across devices: everything under the
  app's own `user` state (mascot, XP, saved decks, notes progress, essay
  plans, and so on) still lives only in this browser's localStorage - see
  context/AppProvider.jsx. Only the ACCOUNT itself (identity + being able
  to sign back in) is on Firebase; there is no data sync yet.

  The surface below (signUp/signIn/signOut/currentAccount/onAccountChange)
  is what the rest of the app consumes, matching the module this replaced
  so nothing else needed to change shape.
*/
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile,
} from 'firebase/auth'
import { firebaseAuth } from './firebase'

const normalise = (email) => String(email || '').trim().toLowerCase()

export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalise(email))

export function passwordProblem(password) {
  if (!password || password.length < 8) return 'Use at least 8 characters.'
  if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
    return 'Include at least one letter and one number.'
  }
  return null
}

const publicShape = (user) => ({
  email: user.email,
  name: user.displayName || user.email.split('@')[0],
  createdAt: user.metadata?.creationTime ? Date.parse(user.metadata.creationTime) : Date.now(),
})

// One friendly message per Firebase error code actually reachable from
// this form. Deliberately vague about WHICH of email/password is wrong
// on sign-in - same reasoning the device-local version had: naming the
// mistake would let someone enumerate which emails have accounts.
const ERROR_MESSAGES = {
  'auth/email-already-in-use': 'An account already exists for that email. Try signing in instead.',
  'auth/invalid-email': 'Enter a valid email address.',
  'auth/weak-password': 'Use at least 8 characters, with a letter and a number.',
  'auth/invalid-credential': 'That email and password do not match an account.',
  'auth/user-not-found': 'That email and password do not match an account.',
  'auth/wrong-password': 'That email and password do not match an account.',
  'auth/too-many-requests': 'Too many attempts. Wait a few minutes and try again.',
  'auth/network-request-failed': 'Could not reach the server - check your connection and try again.',
  'auth/user-disabled': 'This account has been disabled.',
  'auth/operation-not-allowed': 'Sign-in is not turned on for this app yet.',
  'auth/configuration-not-found': 'Sign-in is not set up yet for this app.',
}

function friendly(err) {
  return new Error(ERROR_MESSAGES[err?.code] || 'Something went wrong. Please try again.')
}

export function currentAccount() {
  const user = firebaseAuth.currentUser
  return user ? publicShape(user) : null
}

// Fires once Firebase has restored (or confirmed there is no) persisted
// session, and again on every subsequent sign-in/sign-out - see the
// currentAccount() doc comment above for why a synchronous read alone
// cannot be trusted on first load.
export function onAccountChange(callback) {
  return onAuthStateChanged(firebaseAuth, (user) => callback(user ? publicShape(user) : null))
}

export async function signUp({ name, email, password }) {
  try {
    const key = normalise(email)
    const credential = await createUserWithEmailAndPassword(firebaseAuth, key, password)
    const trimmedName = String(name || '').trim() || key.split('@')[0]
    await updateProfile(credential.user, { displayName: trimmedName })
    return publicShape({ ...credential.user, displayName: trimmedName })
  } catch (err) {
    throw friendly(err)
  }
}

export async function signIn({ email, password }) {
  try {
    const credential = await signInWithEmailAndPassword(firebaseAuth, normalise(email), password)
    return publicShape(credential.user)
  } catch (err) {
    throw friendly(err)
  }
}

export async function signOut() {
  await firebaseSignOut(firebaseAuth)
}
