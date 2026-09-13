import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import AppLayout from '@/components/layout/AppLayout'
import Landing from '@/pages/Landing'
import HowItWorks from '@/pages/HowItWorks'
import Dashboard from '@/pages/Dashboard'
import Profile from '@/pages/Profile'
import StudySession from '@/pages/StudySession'
import Start from '@/pages/Start'
import MockExam from '@/pages/MockExam'
import Flashcards from '@/pages/Flashcards'
import Progress from '@/pages/Progress'
import Performance from '@/pages/Performance'
import Community from '@/pages/Community'
import Friends from '@/pages/Friends'
import SignIn from '@/pages/SignIn'
import Privacy from '@/pages/Privacy'
import Terms from '@/pages/Terms'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'
import DiagramGallery from '@/pages/dev/DiagramGallery'
import BrandSheet from '@/pages/dev/BrandSheet'
import CursorGlow from '@/components/ui/CursorGlow'
import ScrollToTop from '@/components/layout/ScrollToTop'
import Seo from '@/components/layout/Seo'
import Toast from '@/components/ui/Toast'

/*
  Routing.
  - "/" is the landing/hero.
  - Everything under <AppLayout> gets the top bar. No auth gate: this is a
    single-user, on-device tool, so every route is always reachable.

  MotionConfig honours the OS "reduce motion" setting app-wide.
*/

/*
  Spotify sends the browser back to the site root after its consent
  screen, with ?code=...&state=memora-music. The player that exchanges
  that code (components/ui/FocusMusic.jsx) is only mounted inside the app
  layout, so the root hands the query straight on to the dashboard -
  otherwise the code was dropped on the landing page and "Connect
  Spotify" silently never connected.
*/
function Root() {
  const { search } = useLocation()
  const state = new URLSearchParams(search).get('state')
  if (state === 'memora-music' || (state && state.startsWith('memora-music.'))) {
    return <Navigate to={`/dashboard${search}`} replace />
  }
  return <Landing />
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      {/* Keeps <title>, description, canonical, OG/Twitter tags and JSON-LD
          correct as you navigate. The static build bakes the same tags into
          each route's HTML file (scripts/prerender.mjs) for crawlers that
          don't run JavaScript. */}
      <Seo />
      <ScrollToTop />
      <CursorGlow />
      <Toast />
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />

        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/start" element={<Start />} />
          <Route path="/start/:subjectSlug" element={<Start />} />
          <Route path="/study" element={<StudySession />} />
          <Route path="/study/:subjectSlug" element={<StudySession />} />
          <Route path="/study/:subjectSlug/:technique" element={<StudySession />} />
          <Route path="/mock" element={<MockExam />} />
          <Route path="/mock/:subjectSlug" element={<MockExam />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/progress" element={<Progress />} />
          {/* Renamed from Performance (§6): two nav items both meaning "how
              am I doing" was one too many. Old links/bookmarks still land
              on the right page. */}
          <Route path="/mistakes" element={<Performance />} />
          <Route path="/performance" element={<Navigate to="/mistakes" replace />} />
          <Route path="/community" element={<Community />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/courses" element={<Navigate to="/profile" replace />} />

          {/* A real 404 page rather than a silent redirect to "/". Sending
              every unknown URL to the landing page told the visitor
              nothing, and made every typo look to a crawler like a
              duplicate of the home page. */}
          {import.meta.env.DEV && <Route path="/dev/diagrams/:id?" element={<DiagramGallery />} />}
          {import.meta.env.DEV && <Route path="/dev/brand" element={<BrandSheet />} />}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </MotionConfig>
  )
}
