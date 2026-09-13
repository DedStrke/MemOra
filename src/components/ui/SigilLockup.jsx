import { motion } from 'framer-motion'
import SigilMark from '@/components/ui/SigilMark'
import SigilWordmark from '@/components/ui/SigilWordmark'

/*
  The navbar lockup to the identity metrics: 28px icon, 21px wordmark,
  8px gap - about 111px all in. Balanced beside nav links without
  overpowering the dashboard. The wordmark lifts 1px on tap for the click
  state's "deliberate and responsive" feel.
*/
export default function SigilLockup({ className = '' }) {
  return (
    <motion.span className={`inline-flex items-center gap-2 ${className}`} whileTap={{ y: -1 }}>
      <SigilMark className="h-7 w-7" />
      <SigilWordmark size="nav" />
    </motion.span>
  )
}
