/*
  Firebase app initialisation, shared by every Firebase-backed module (for
  now, just Authentication - see lib/auth.js). One `initializeApp` call for
  the whole app, done here so nothing else has to know the config.

  This config is not a secret: it identifies the Firebase PROJECT to talk
  to, the same way a site's URL does, and it ships inside every Firebase
  web app's public bundle by design. What actually protects the project's
  data is Firebase's server-side rules and Authentication itself, not
  hiding this object.
*/
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDCVNDi8RZfCCRmAlvRsN8MnTy-yBd9468',
  authDomain: 'memora-acd00.firebaseapp.com',
  projectId: 'memora-acd00',
  storageBucket: 'memora-acd00.firebasestorage.app',
  messagingSenderId: '687695048937',
  appId: '1:687695048937:web:14766aebea60f8c2650078',
  measurementId: 'G-FT55JFN29D',
}

export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
