import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Wordmark from '@/components/ui/Wordmark'
import Footer from '@/components/layout/Footer'
import Section from '@/components/ui/Section'
import AtmosphereBackground from '@/components/ui/AtmosphereBackground'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { useApp } from '@/context/AppProvider'

/*
  Shared shell for the legal pages (Privacy, Terms) - same minimal header and
  atmosphere backdrop as SignIn, so the marketing-facing pages read as one
  consistent world. Long-form text sits in a glass-strong panel rather than
  floating directly over the video, same reasoning as the sign-in card: a
  moving backdrop needs a solid surface under body copy to stay readable.
*/
export default function LegalLayout({ icon, title, updated, intro, sections }) {
  const { account } = useApp()
  const logoTo = account ? '/dashboard' : '/'

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

      <Section width="narrow" animateOnMount className="relative z-10 flex-1 pt-6 pb-20">
        <motion.div variants={fadeInUp} className="glass-strong rounded-3xl p-7 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
              {icon}
            </span>
            <div>
              <h1 className="text-3xl font-extrabold text-fg sm:text-4xl">{title}</h1>
              {updated && <p className="text-xs text-muted">Last updated {updated}</p>}
            </div>
          </div>

          <p className="readable mt-6 text-lg text-muted">{intro}</p>

          <motion.div variants={staggerContainer} className="mt-10 space-y-8">
            {sections.map((s) => (
              <motion.div key={s.heading} variants={fadeInUp}>
                <h2 className="text-lg font-bold text-fg">{s.heading}</h2>
                <p className="readable mt-2 text-muted">{s.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      <Footer />
    </div>
  )
}
