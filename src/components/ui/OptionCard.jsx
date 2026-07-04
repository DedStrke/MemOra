import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/motion'
import Icon from './Icon'

/*
  Big, tappable selectable card used across onboarding. Behaves like a
  checkbox (multi-select) via aria-pressed. Generous target size and a clear
  selected state for motor/low-vision users.

  Props: icon, label, desc, selected, onToggle, accent ('brand'|'flash'|'quiz'|'paper')
*/
const ACCENTS = {
  brand: { chip: 'bg-brand-soft text-brand-strong', on: 'border-brand ring-2 ring-brand', dot: 'bg-brand text-on-brand' },
  flash: { chip: 'bg-flash-soft text-flash', on: 'border-flash ring-2 ring-flash', dot: 'bg-flash text-on-brand' },
  quiz: { chip: 'bg-quiz-soft text-quiz', on: 'border-quiz ring-2 ring-quiz', dot: 'bg-quiz text-on-brand' },
  paper: { chip: 'bg-paper-soft text-paper', on: 'border-paper ring-2 ring-paper', dot: 'bg-paper text-on-brand' },
}

export default function OptionCard({
  icon,
  label,
  desc,
  selected = false,
  onToggle,
  accent = 'brand',
}) {
  const a = ACCENTS[accent] ?? ACCENTS.brand

  return (
    <motion.button
      type="button"
      variants={fadeInUp}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      aria-pressed={selected}
      onClick={onToggle}
      className={`relative flex w-full items-start gap-4 rounded-2xl border bg-surface p-5 text-left transition-colors ${
        selected ? a.on : 'border-line hover:border-brand'
      }`}
    >
      <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${a.chip}`}>
        {icon && <Icon name={icon} className="h-6 w-6" />}
      </span>

      <span className="flex-1">
        <span className="block font-semibold text-fg">{label}</span>
        {desc && <span className="mt-0.5 block text-sm text-muted">{desc}</span>}
      </span>

      <span
        aria-hidden="true"
        className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors ${
          selected ? a.dot + ' border-transparent' : 'border-line'
        }`}
      >
        {selected && <Icon name="check" className="h-4 w-4" />}
      </span>
    </motion.button>
  )
}
