# Previous 1.1.1 / 1.1.2 content (moved 2026-09-21)

The notes and flashcards the app used to ship for

- 1.1.1 Structure and Function of the Processor
- 1.1.2 Types of Processor

before both chapters were replaced by Mudassir's own notes
(`src/constants/cs-notes-processor.js`) and flashcards written from them
(`src/constants/cs-flashcards-processor.js`).

Nothing in this folder is imported by the app. It exists so the OCR H446
specification statements for 1.1.1 and 1.1.2 can be checked against the new
notes, and any statement the new notes do not cover can be closed from here.

| File            | What it holds                                                                 |
| --------------- | ----------------------------------------------------------------------------- |
| `notes.js`      | Base chapters + both appended supplements, source kept verbatim, plus a merge |
| `flashcards.js` | All 91 previous cards, grouped by the file they came from                     |

MCQs and exam questions for the two chapters were NOT moved; they still live
in `cs-extra.js`, `cs-extra-2.js`, `cs-extra-3.js`, `cs-extra-4.js` and
`cs-essays.js`.

## Gap check result (2026-09-21)

Checked against the H446 specification wording for 1.1.1 (a)-(e) and
1.1.2 (a)-(c). Two blocks were pulled back into the live notes and given
flashcards, because the spec names them and the new notes did not cover them:

- the "ADD 30" register trace (`worked(...)` in `notes.js`, depth-2 block),
  for 1.1.1(b) "including its effects on registers"
- the "How this relates to assembly language programs" paragraph
  (depth-2 block), for 1.1.1(a)

Everything else here goes beyond the spec wording (Amdahl's law, Flynn's
taxonomy, co-processors, word length and bus width, cache levels, branch
prediction, the CISC/RISC compiler and power arguments, Harvard in
embedded/DSP) and was left parked. Delete this folder once it is no longer
wanted.
