/*
  Consolidated second-pass Maths content, topping up topics that were thin
  after the original library.js + maths-mcq.js pass (many Year 2/Statistics/
  Mechanics topics had only 1 flashcard and 1 exam question).

  Sourced from five batches, each covering a disjoint slice of the 43-topic
  outline (batch letters aren't contiguous with a "C" because Statistics -
  batch C - failed twice as a sub-agent, first to a rate limit and then to a
  64k output-token overflow trying to write all 8 Statistics topics in one
  response; that content was written directly instead - see
  maths-stats-fill.js):
    - maths-batch-a.js: Partial Fractions, Functions and Graphs, Sequences
      and Series, Binomial Expansion (General n), Radians, Trig Functions
    - maths-batch-b.js: Trig and Modelling, Parametric Equations,
      Differentiation/Integration (Year 2), Numerical Methods, Vectors (3D)
    - maths-stats-fill.js: all 8 Statistics topics (the failed batch C)
    - maths-batch-d.js: Moments, Forces and Friction, Projectiles,
      Application of Forces, Further Kinematics
    - maths-batch-e.js: the remaining Year 1 Pure topics + core Mechanics
      (Modelling in Mechanics, SUVAT, Forces and Newton's Laws, Variable
      Acceleration), topped up alongside everything above for consistency

  Every topic string was verified against library.js's 43-topic outline
  (exact match, no orphans) and every combined total (existing + this file)
  meets the ≥8 flashcards / ≥4 MCQs / ≥5 exam questions floor - see the
  verification pass in the session this was built in.
*/
import { BATCH_A_FLASHCARDS, BATCH_A_MCQ, BATCH_A_EXAM } from './maths-batch-a'
import { BATCH_B_FLASHCARDS, BATCH_B_MCQ, BATCH_B_EXAM } from './maths-batch-b'
import { STATS_FLASHCARDS, STATS_MCQ, STATS_EXAM } from './maths-stats-fill'
import { BATCH_D_FLASHCARDS, BATCH_D_MCQ, BATCH_D_EXAM } from './maths-batch-d'
import { BATCH_E_FLASHCARDS, BATCH_E_MCQ, BATCH_E_EXAM } from './maths-batch-e'

export const MATHS_FLASHCARDS_2 = [
  ...BATCH_A_FLASHCARDS,
  ...BATCH_B_FLASHCARDS,
  ...STATS_FLASHCARDS,
  ...BATCH_D_FLASHCARDS,
  ...BATCH_E_FLASHCARDS,
]

export const MATHS_MCQ_2 = [
  ...BATCH_A_MCQ,
  ...BATCH_B_MCQ,
  ...STATS_MCQ,
  ...BATCH_D_MCQ,
  ...BATCH_E_MCQ,
]

export const MATHS_EXAM_2 = [
  ...BATCH_A_EXAM,
  ...BATCH_B_EXAM,
  ...STATS_EXAM,
  ...BATCH_D_EXAM,
  ...BATCH_E_EXAM,
]
