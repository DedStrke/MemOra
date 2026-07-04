import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import Mascot from '@/components/ui/Mascot'
import { fadeInUp } from '@/lib/motion'

export default function ComingSoon({ title = 'Coming soon' }) {
  return (
    <Section width="narrow" animateOnMount className="pt-16 text-center">
      <motion.div variants={fadeInUp}>
        <Mascot expression="happy" className="mx-auto h-24 w-24" />
        <h1 className="mt-4 text-3xl font-bold text-fg">{title}</h1>
        <p className="readable mt-2 text-muted">
          We’re building this next. Check back soon!
        </p>
        <div className="mt-6 flex justify-center">
          <Button as={Link} to="/dashboard">
            <Icon name="home" className="h-5 w-5" />
            Back to dashboard
          </Button>
        </div>
      </motion.div>
    </Section>
  )
}
