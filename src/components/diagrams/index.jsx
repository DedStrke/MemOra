import { ECON_DIAGRAMS } from './economics'
import { ECON_EXTRA_DIAGRAMS } from './economicsExtra'
import { ECON_GAP_DIAGRAMS } from './economicsGaps'
import { MATHS_DIAGRAMS } from './maths'
import { MATHS_EXTRA_DIAGRAMS } from './mathsExtra'
import { CS_DIAGRAMS } from './computerScience'
import { CS_EXTRA_DIAGRAMS } from './computerScienceExtra'
import { AnnotationContext } from './primitives'

/*
  One registry across every subject.

  Ids are globally unique, so a diagram can be referenced from anywhere -
  a note, a flashcard, a mark scheme - without the caller needing to know
  which subject it came from. That keeps the runners subject-agnostic:
  they render <Diagram id={...} /> and nothing more.

  The "extra" files are a second pass, filling chapters that had been
  borrowing a neighbouring chapter's diagram. They are separate files only
  because the originals were already long; nothing distinguishes them here.
*/
export const DIAGRAMS = {
  ...ECON_DIAGRAMS,
  ...ECON_EXTRA_DIAGRAMS,
  ...ECON_GAP_DIAGRAMS,
  ...MATHS_DIAGRAMS,
  ...MATHS_EXTRA_DIAGRAMS,
  ...CS_DIAGRAMS,
  ...CS_EXTRA_DIAGRAMS,
}

// annotations: optional list of short strings, rendered by Figure as a
// numbered "reading the diagram" strip inside the frame - see primitives.
export default function Diagram({ id, annotations }) {
  const D = DIAGRAMS[id]
  if (!D) return null
  if (!annotations?.length) return <D />
  return (
    <AnnotationContext.Provider value={annotations}>
      <D />
    </AnnotationContext.Provider>
  )
}
