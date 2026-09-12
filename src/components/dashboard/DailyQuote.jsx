import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from '@/components/ui/Icon'
import Buddy from '@/components/ui/Buddy'
import { quoteForDay, randomQuote } from '@/constants/quotes'
import { fadeInUp } from '@/lib/motion'

/*
  The study buddy's card, under the banner: the buddy on the left and a
  speech bubble on the right that carries the line of the day. The quote
  is picked by date so it stays put all day; "another" shuffles without
  saving. Tap the buddy and the bubble briefly shows what IT has to say
  (streak, next assessment, its usual patter), then the quote returns.
*/
export default function DailyQuote({ now, mascot, context, event }) {
  const [quote, setQuote] = useState(() => quoteForDay(now))
  const [said, setSaid] = useState(null)

  return (
    <motion.section
      variants={fadeInUp}
      className="flex items-center gap-4 rounded-2xl border border-line bg-surface/70 px-4 py-3 sm:gap-5 sm:px-5"
      aria-label="Your study buddy"
    >
      <div className="h-24 w-24 shrink-0 sm:h-28 sm:w-28">
        <Buddy mascot={mascot} className="h-full w-full" context={context} event={event} onSay={setSaid} />
      </div>
      <div className="buddy-card-bubble relative min-w-0 flex-1 rounded-2xl border border-line bg-surface px-4 py-3">
        <span aria-hidden="true" className="buddy-bubble-tail buddy-bubble-tail-right" />
        <AnimatePresence mode="wait" initial={false}>
          {said ? (
            <motion.p
              key="said"
              role="status"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="text-sm font-bold leading-snug text-fg sm:text-[0.95rem]"
            >
              {said}
            </motion.p>
          ) : (
            <motion.figure
              key={quote.text}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="flex items-start gap-3"
            >
              <div className="min-w-0 flex-1">
                <blockquote className="text-sm font-medium leading-snug text-fg sm:text-[0.95rem]">
                  &ldquo;{quote.text}&rdquo;
                </blockquote>
                <figcaption className="mt-1 text-xs text-muted">
                  {quote.by}
                  {quote.from ? ` · ${quote.from}` : ''}
                </figcaption>
              </div>
              <button
                type="button"
                onClick={() => setQuote((q) => randomQuote(q))}
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-muted transition-colors hover:bg-brand-soft hover:text-brand-strong"
                aria-label="Another quote"
                title="Another"
              >
                <Icon name="shuffle" className="h-4 w-4" />
              </button>
            </motion.figure>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
