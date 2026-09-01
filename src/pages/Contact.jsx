import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Wordmark from '@/components/ui/Wordmark'
import Footer from '@/components/layout/Footer'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import AtmosphereBackground from '@/components/ui/AtmosphereBackground'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { LEGAL } from '@/constants/content'

export default function Contact() {
  const { title, intro, githubUrl, githubLabel, githubBody } = LEGAL.contact

  return (
    <div className="relative flex min-h-screen flex-col">
      <AtmosphereBackground />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6">
        <Link to="/" className="flex items-center gap-2">
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
              <Icon name="send" className="h-5 w-5" />
            </span>
            <h1 className="text-3xl font-extrabold text-fg sm:text-4xl">{title}</h1>
          </div>

          <p className="readable mt-6 text-lg text-muted">{intro}</p>

          <motion.div variants={staggerContainer} className="mt-8">
            <motion.a
              variants={fadeInUp}
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="glass card-lift flex items-center gap-4 rounded-3xl p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-strong">
                <Icon name="scroll" className="h-6 w-6" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-fg">{githubLabel}</p>
                <p className="mt-1 text-sm text-muted">{githubBody}</p>
              </div>
              <Icon name="arrowRight" className="h-5 w-5 shrink-0 text-muted" />
            </motion.a>
          </motion.div>

          <div className="mt-8">
            <Button as={Link} to="/dashboard" variant="link" className="text-base font-semibold">
              Or just start studying
              <Icon name="arrowRight" className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </Section>

      <Footer />
    </div>
  )
}
