import { Routes, Route, Navigate } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import AppLayout from '@/components/layout/AppLayout'
import Landing from '@/pages/Landing'
import HowItWorks from '@/pages/HowItWorks'
import Dashboard from '@/pages/Dashboard'
import Profile from '@/pages/Profile'
import StudySession from '@/pages/StudySession'
import Flashcards from '@/pages/Flashcards'
import Courses from '@/pages/Courses'
import Progress from '@/pages/Progress'
import Performance from '@/pages/Performance'
import Community from '@/pages/Community'
import SignIn from '@/pages/SignIn'
import CursorGlow from '@/components/ui/CursorGlow'

/*
  Routing.
  - "/" is the landing/hero.
  - Everything under <AppLayout> gets the top bar. No auth gate: this is a
    single-user, on-device tool, so every route is always reachable.

  MotionConfig honours the OS "reduce motion" setting app-wide.
*/
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <CursorGlow />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/signin" element={<SignIn />} />

        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/study" element={<StudySession />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/community" element={<Community />} />
          <Route path="/courses" element={<Courses />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MotionConfig>
  )
}
