import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { useApp } from '@/context/AppProvider'
import { subjectColor } from '@/constants/content'
import { getPackByName } from '@/constants/library'
import { slugify } from '@/lib/slug'

/*
  Custom 404.

  Previously any unknown URL silently redirected to "/", which is wrong in
  three ways: the visitor is never told the page is missing, a crawler
  receives a 200 for a page that does not exist (a soft 404, which Google
  reports as an error), and a mistyped bookmark quietly dumps you on the
  marketing page instead of near where you were going.

  Rather than a dead end, it links onward to the places someone who
  mistyped a URL was probably heading, including their own subjects - a
  404 is still a page, and internal links from it are still worth having.
*/

const DESTINATIONS = [
  { to: '/dashboard', icon: 'home', label: 'Dashboard', desc: 'Pick up where you left off' },
  { to: '/progress', icon: 'activity', label: 'Progress', desc: 'Chapter-by-chapter readiness' },
  { to: '/mistakes', icon: 'x', label: 'Mistakes', desc: 'Questions you got wrong' },
  { to: '/flashcards', icon: 'cards', label: 'Flashcards', desc: 'Decks and your own cards' },
  { to: '/community', icon: 'users', label: 'Community', desc: 'Ask and answer questions' },
  { to: '/how-it-works', icon: 'brain', label: 'How it works', desc: 'What Memora actually does' },
]

export default function NotFound() {
  const { user } = useApp()
  const subjects = (user.subjects || []).map((s) => s.name).filter((n) => getPackByName(n))

  return (
    <Section width="wide" animateOnMount className="pt-10 pb-24">
      <Breadcrumbs className="mb-6" />

      <motion.div variants={staggerContainer}>
        <motion.p
          variants={fadeInUp}
          className="text-sm font-bold uppercase tracking-[0.2em] text-brand-strong"
        >
          Error 404
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="mt-2 text-3xl font-extrabold leading-tight text-fg sm:text-4xl"
        >
          That page does not exist
        </motion.h1>
        <motion.p variants={fadeInUp} className="readable mt-2 text-muted">
          The link may be out of date, or the address may have a typo in it. Nothing you have
          studied is affected - your progress is stored on this device and is still there.
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap gap-3">
          <Button as={Link} to="/dashboard" size="lg">
            <Icon name="home" className="h-5 w-5" />
            Back to dashboard
          </Button>
          <Button as={Link} to="/contact" variant="ghost" size="lg">
            <Icon name="send" className="h-5 w-5" />
            Report a broken link
          </Button>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="mt-12 text-xs font-bold uppercase tracking-[0.14em] text-muted"
        >
          Where you might have been going
        </motion.h2>
        <motion.div variants={staggerContainer} className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <motion.div key={d.to} variants={fadeInUp} className="min-w-0">
              <Link
                to={d.to}
                className="card card-lift flex h-full items-start gap-3 p-4 transition-colors hover:border-brand"
              >
                <span className="mt-0.5 rounded-lg bg-brand-soft p-2 text-brand-strong">
                  <Icon name={d.icon} className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-fg">{d.label}</span>
                  <span className="block text-xs text-muted">{d.desc}</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {subjects.length > 0 && (
          <>
            <motion.h2
              variants={fadeInUp}
              className="mt-10 text-xs font-bold uppercase tracking-[0.14em] text-muted"
            >
              Or jump straight into a subject
            </motion.h2>
            <motion.div variants={staggerContainer} className="mt-3 flex flex-wrap gap-2.5">
              {subjects.map((name) => (
                <motion.div key={name} variants={fadeInUp}>
                  <Link
                    to={`/study/${slugify(name)}`}
                    className="inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-2 text-sm font-semibold text-fg transition-colors hover:border-brand hover:text-brand-strong"
                  >
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: subjectColor(name) }}
                    />
                    {name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </motion.div>
    </Section>
  )
}
