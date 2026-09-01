import { SITE } from '@/constants/content'

/*
  The site wordmark. Rendered as one word (no gap) with the back half in the
  brand accent colour, so "Cortex" reads as a single deliberate two-tone
  lockup rather than two separate words.

    <Wordmark />              inline, for top bars
    <Wordmark size="hero" />  large, for the landing hero
*/
export default function Wordmark({ size = 'inline', className = '' }) {
  const [first, second] = SITE.wordmarkSplit || [SITE.name, '']

  if (size === 'hero') {
    return (
      <span className={`block font-display leading-[0.95] tracking-tight ${className}`}>
        <span className="text-6xl font-extrabold text-fg sm:text-7xl lg:text-8xl">{first}</span>
        <span className="text-6xl font-extrabold text-brand sm:text-7xl lg:text-8xl">{second}</span>
      </span>
    )
  }

  return (
    <span className={`inline-flex items-baseline font-display ${className}`}>
      <span>{first}</span>
      <span className="font-bold text-brand">{second}</span>
    </span>
  )
}
