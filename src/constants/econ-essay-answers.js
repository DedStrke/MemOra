import { ECON_ESSAY_ANSWERS_AS } from './econ-essay-answers-as'
import { ECON_ESSAY_ANSWERS_P1 } from './econ-essay-answers-p1'
import { ECON_ESSAY_ANSWERS_P2 } from './econ-essay-answers-p2'
import { ECON_ESSAY_ANSWERS_P3 } from './econ-essay-answers-p3'
import { ECON_ESSAY_ANNOTATIONS } from './econ-essay-annotations'
import { ECON_ESSAY_ANNOTATIONS_EVAL } from './econ-essay-annotations-eval'
import { ECON_ESSAY_PLACEMENT } from './econ-essay-placement'

/*
  One developed answer for every question in the essay bank, keyed by the
  question id. Split across four files by paper because each answer runs
  to several hundred words and one file would be unreadable.

  An answer, after assembly here, is:

    intro       definitions and the line of argument
    rows        [{ analysis, evaluation, analysisDiagrams, evaluationDiagrams }]
                the table: each chain of reasoning beside the evaluation
                that qualifies it, with the diagrams that support each side
                attached to that row - { id, note, steps } each, where
                `steps` are the numbered on-diagram annotations and `note`
                (main diagrams only) says what to show for this question
    diagrams    [[id, note, steps]] the flat list the notes checker uses
    conclusion  the justified judgement, null for questions that do not
                carry one (below 15 marks)
    markScheme  { kaa, evaluation }  indicative content, mark-scheme style

  Placement (which diagram sits under which row, and on which side) is in
  econ-essay-placement.js; the annotations are in the two annotation files.
  The planner keeps the answer behind a reveal so the plan comes first,
  and the developed answer is a check on the plan rather than a substitute
  for making one.
*/
const RAW = {
  ...ECON_ESSAY_ANSWERS_AS,
  ...ECON_ESSAY_ANSWERS_P1,
  ...ECON_ESSAY_ANSWERS_P2,
  ...ECON_ESSAY_ANSWERS_P3,
}

const stepsFor = (id, d) => ECON_ESSAY_ANNOTATIONS_EVAL[id]?.[d] || ECON_ESSAY_ANNOTATIONS[id]?.[d] || []

export const ECON_ESSAY_ANSWERS = Object.fromEntries(
  Object.entries(RAW).map(([id, a]) => {
    const notes = Object.fromEntries(a.diagrams.map(([d, note]) => [d, note]))
    const placed = new Set()
    const attach = (spec) =>
      [].concat(spec || []).map((d) => {
        placed.add(d)
        return { id: d, note: notes[d] || null, steps: stepsFor(id, d) }
      })
    const placement = ECON_ESSAY_PLACEMENT[id] || []
    const rows = a.rows.map(([analysis, evaluation], i) => ({
      analysis,
      evaluation,
      analysisDiagrams: attach(placement[i]?.a),
      evaluationDiagrams: attach(placement[i]?.e),
    }))
    // Every diagram the answer uses, main or evaluation, for the checker.
    const diagrams = [...new Set([...a.diagrams.map(([d]) => d), ...placed])].map((d) => [
      d,
      notes[d] || null,
      stepsFor(id, d),
    ])
    return [id, { ...a, rows, diagrams }]
  }),
)
