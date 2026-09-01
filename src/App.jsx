import { Routes, Route, Navigate } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import AppLayout from '@/components/layout/AppLayout'
import Landing from '@/pages/Landing'
import HowItWorks from '@/pages/HowItWorks'
import Dashboard from '@/pages/Dashboard'
import Profile from '@/pages/Profile'
import StudySession from '@/pages/StudySession'
import MockExam from '@/pages/MockExam'
import Flashcards from '@/pages/Flashcards'
import Courses from '@/pages/Courses'
import Progress from '@/pages/Progress'
import Performance from '@/pages/Performance'
import Community from '@/pages/Community'
import SignIn from '@/pages/SignIn'
import Privacy from '@/pages/Privacy'
import Terms from '@/pages/Terms'
import Contact from '@/pages/Contact'
import CursorGlow from '@/components/ui/CursorGlow'
import ScrollToTop from '@/components/layout/ScrollToTop'
import Toast from '@/components/ui/Toast'

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
      <ScrollToTop />
      <CursorGlow />
      <Toast />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />

        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/study" element={<StudySession />} />
          <Route path="/study/:subjectSlug" element={<StudySession />} />
          <Route path="/study/:subjectSlug/:technique" element={<StudySession />} />
          <Route path="/mock" element={<MockExam />} />
          <Route path="/mock/:subjectSlug" element={<MockExam />} />
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
