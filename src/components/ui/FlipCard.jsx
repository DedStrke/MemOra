import { motion } from 'framer-motion'

/*
  Simple, dependency-free flip flashcard. Click / Enter / Space flips between
  the prompt (front) and answer (back). The 3D flip respects reduced motion via
  the app-wide MotionConfig.

  Sizing: the two faces are stacked in the SAME grid cell rather than being
  absolutely positioned in a fixed-height box. That matters because the card
  then grows to fit whichever face is taller, instead of clipping it. The
  Economics decks include long, structured answers meant to be read as a
  revision source in their own right - in a fixed h-64 box those simply got
  cut off at the bottom with no scrollbar and no way to know content was
  missing. A min-height keeps short cards looking like cards.

  Long answers are also laid out differently: centred 18px text is right for
  "1/(1 − MPC)" and wrong for a twelve-line breakdown of cost curves, which
  wants to be left-aligned and a size down. Newlines are preserved so a card
  can carry real structure rather than one run-on paragraph.

  Props: front, back, flipped, onFlip
*/

// Past this many characters an answer is prose to be read, not a value to be
// recalled at a glance, so it switches to the reading layout.
const LONG = 180

function Face({ label, text, back = false }) {
  const long = String(text || '').length > LONG
  return (
    <div
      className="col-start-1 row-start-1 flex flex-col rounded-3xl border border-line bg-surface p-6 sm:p-8"
      style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: back ? 'rotateY(180deg)' : 'none',
      }}
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-muted">{label}</span>
      <div className={`flex flex-1 py-4 ${long ? 'items-start' : 'items-center justify-center'}`}>
        <p
          className={`readable whitespace-pre-line text-fg ${
            long
              ? 'w-full text-left text-[0.95rem] leading-relaxed'
              : `text-center ${back ? 'text-lg' : 'text-2xl font-bold'}`
          }`}
        >
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
        className="grid min-h-64 w-full sm:min-h-72"
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
