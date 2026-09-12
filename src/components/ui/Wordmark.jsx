import { SITE } from '@/constants/content'

/*
  The site wordmark. Rendered as one word (no gap) with the back half
  carrying the same gradient the charge button reveals on hover, so the
  name and the buttons read as one visual system rather than two accents
  that happen to both be blue. See .wordmark-gradient in index.css - it is
  built from the same tokens and hues as .btn-charge-current.

    <Wordmark />              inline, for top bars
    <Wordmark size="hero" />  large, for the landing hero
*/
export default function Wordmark({ size = 'inline', className = '' }) {
  const [first, second] = SITE.wordmarkSplit || [SITE.name, '']

  if (size === 'hero') {
    return (
      <span className={`block font-display leading-[0.95] tracking-tight ${className}`}>
        <span className="text-6xl font-extrabold text-fg sm:text-7xl lg:text-8xl">{first}</span>
        <span className="wordmark-gradient text-6xl font-extrabold sm:text-7xl lg:text-8xl">{second}</span>
      </span>
    )
  }

  return (
    <span className={`inline-flex items-baseline font-display ${className}`}>
      <span>{first}</span>
      <span className="wordmark-gradient font-bold">{second}</span>
    </span>
  )
}
