// Firebase singletons for the app: Auth + Cloud Firestore, configured from the
// VITE_FIREBASE_* env vars (see .env.example). These web config values are
// public identifiers; real access is controlled by Firestore Security Rules.
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

// Turn Firebase Auth error codes into friendly copy (no em dashes, house style).
export function authErrorMessage(code) {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'That email already has an account. Try logging in instead.'
    case 'auth/invalid-email':
      return 'That email address does not look right.'
    case 'auth/weak-password':
      return 'Please choose a password of at least 6 characters.'
    case 'auth/missing-password':
      return 'Please enter your password.'
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Email or password is incorrect.'
    case 'auth/too-many-requests':
      return 'Too many attempts. Please wait a moment and try again.'
    case 'auth/operation-not-allowed':
    case 'auth/configuration-not-found':
      return 'Sign-in is not switched on yet. Enable Email/Password in Firebase Authentication.'
    case 'auth/network-request-failed':
      return 'Network problem. Check your connection and try again.'
    default:
      return 'Something went wrong. Please try again.'
  }
}
