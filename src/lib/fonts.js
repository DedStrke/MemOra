/*
  Self-hosted UI fonts (bundled by Vite, work offline, no CDN). Imported once
  from main.jsx.

  - Hanken Grotesk (variable): the body/UI face - warm, humanist grotesk with
    real personality at small sizes, not the safe do-anything sans every
    other tool reaches for.
  - Fraunces (variable, optical sizing + soft axis): the display face for
    headings and the wordmark - a wonky, characterful serif that reads as
    hand-considered rather than generated, and gives the exam/study
    subject matter an editorial, printed-paper feel against the glass UI.
  - OpenDyslexic / Atkinson Hyperlegible: switched in for learners who need
    them (data-font on <html>); these override BOTH body and headings.
*/
import '@fontsource-variable/hanken-grotesk'
import '@fontsource-variable/fraunces'
import '@fontsource/opendyslexic/400.css'
import '@fontsource/opendyslexic/700.css'
import '@fontsource/atkinson-hyperlegible/400.css'
import '@fontsource/atkinson-hyperlegible/700.css'
