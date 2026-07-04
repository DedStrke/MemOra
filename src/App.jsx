import { Routes, Route, Navigate } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import AppLayout from '@/components/layout/AppLayout'
import Landing from '@/pages/Landing'
import HowItWorks from '@/pages/HowItWorks'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import Dashboard from '@/pages/Dashboard'
import Profile from '@/pages/Profile'
import StudySession from '@/pages/StudySession'
import Flashcards from '@/pages/Flashcards'
import Courses from '@/pages/Courses'
import Progress from '@/pages/Progress'
import MentalHealth from '@/pages/MentalHealth'
import Community from '@/pages/Community'
import CursorGlow from '@/components/ui/CursorGlow'

/*
  Routing.
  - "/" is the public landing/hero (front door).
  - /login and /signup are standalone auth screens.
  - Everything under <AppLayout> needs an active session (loggedIn) and gets the
    top bar + floating study buddy.

  MotionConfig honours the OS "reduce motion" setting app-wide.
*/
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <CursorGlow />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/study" element={<StudySession />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/community" element={<Community />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MotionConfig>
  )
}
