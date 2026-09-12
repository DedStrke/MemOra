/*
  Self-hosted UI fonts (bundled by Vite, work offline, no CDN). Imported once
  from main.jsx.

  - Instrument Sans (variable): the body/UI face. Slightly narrow, real
    character in the letterforms, and it holds up at 12px in a table - which
    rules out most of the faces that look nice in a specimen.
  - Bricolage Grotesque (variable, optical size + width axes): the display
    face for headings and the wordmark. Deliberately a bit wonky - tight
    apertures, odd terminals, a designed-not-generated feel - and the width
    axis means a long chapter title can be condensed rather than wrapped.
    Chosen specifically to avoid the Inter/Space Grotesk look every AI-built
    interface defaults to.
  - OpenDyslexic / Atkinson Hyperlegible: switched in for learners who need
    them (data-font on <html>); these override BOTH body and headings.
*/
import '@fontsource-variable/instrument-sans'
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource/opendyslexic/400.css'
import '@fontsource/opendyslexic/700.css'
import '@fontsource/atkinson-hyperlegible/400.css'
import '@fontsource/atkinson-hyperlegible/700.css'
