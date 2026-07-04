import { motion } from 'framer-motion'

/*
  Simple, dependency-free flip flashcard. Click / Enter / Space flips between
  the prompt (front) and answer (back). The 3D flip respects reduced motion via
  the app-wide MotionConfig.

  Props: front, back, flipped, onFlip
*/
function Face({ label, text, back = false }) {
  return (
    <div
      className="absolute inset-0 flex flex-col rounded-3xl border border-line bg-surface p-6 sm:p-8"
      style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: back ? 'rotateY(180deg)' : 'none',
      }}
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-muted">
        {label}
      </span>
      <div className="flex flex-1 items-center justify-center py-4">
        <p className={`text-center text-fg ${back ? 'text-lg' : 'text-2xl font-bold'}`}>
          {text}
        </p>
      </div>
      <p className="text-center text-xs text-muted">Tap to flip</p>
    </div>
  )
}

export default function FlipCard({ front, back, flipped, onFlip, className = '' }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onFlip}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onFlip()
        }
      }}
      aria-label={`Flashcard, showing the ${flipped ? 'answer' : 'prompt'}. Activate to flip.`}
      className={`mx-auto w-full max-w-2xl cursor-pointer select-none ${className}`}
      style={{ perspective: '1400px' }}
    >
      <motion.div
        className="relative h-64 w-full sm:h-72"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Face label="Prompt" text={front} />
        <Face label="Answer" text={back} back />
      </motion.div>
    </div>
  )
}
