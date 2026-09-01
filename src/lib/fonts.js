/*
  Self-hosted UI fonts (bundled by Vite, work offline, no CDN). Imported once
  from main.jsx.

  - Geist (variable): the body/UI face - clean, technical grotesk, a better
    fit for a Maths/Econ/CS tool than an overused general-purpose sans.
  - Bricolage Grotesque (variable): the display face for headings and the
    wordmark - an architectural, characterful grotesk instead of the
    soft-serif-display look that's become the default "AI SaaS" cliché.
  - OpenDyslexic / Atkinson Hyperlegible: switched in for learners who need
    them (data-font on <html>); these override BOTH body and headings.
*/
import '@fontsource-variable/geist'
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource/opendyslexic/400.css'
import '@fontsource/opendyslexic/700.css'
import '@fontsource/atkinson-hyperlegible/400.css'
import '@fontsource/atkinson-hyperlegible/700.css'
