/*
  Subject packs added after the original three (Maths, Economics, Computer
  Science, which still live in library.js / library-extra.js).

  Every pack has the same shape as those:
    { id, name, board, groups, topics, flashcards, mcq, examQuestions, notes }

  `topics` is derived from `groups` rather than written out by hand, so the
  chapter picker and the flat topic list can never drift apart.
*/
import { BIOLOGY_GROUPS, BIOLOGY_FLASHCARDS, BIOLOGY_MCQ, BIOLOGY_EXAM, BIOLOGY_NOTES } from './biology'
import { CHEMISTRY_GROUPS, CHEMISTRY_FLASHCARDS, CHEMISTRY_MCQ, CHEMISTRY_EXAM, CHEMISTRY_NOTES } from './chemistry'
import { PHYSICS_GROUPS, PHYSICS_FLASHCARDS, PHYSICS_MCQ, PHYSICS_EXAM, PHYSICS_NOTES } from './physics'
import { PSYCHOLOGY_GROUPS, PSYCHOLOGY_FLASHCARDS, PSYCHOLOGY_MCQ, PSYCHOLOGY_EXAM, PSYCHOLOGY_NOTES } from './psychology'
import { SOCIOLOGY_GROUPS, SOCIOLOGY_FLASHCARDS, SOCIOLOGY_MCQ, SOCIOLOGY_EXAM, SOCIOLOGY_NOTES } from './sociology'

const flatTopics = (groups) => groups.flatMap((g) => g.subgroups.flatMap((sg) => sg.topics))

const pack = ({ id, name, groups, flashcards, mcq, exam, notes }) => ({
  id,
  name,
  groups,
  topics: flatTopics(groups),
  flashcards,
  mcq,
  examQuestions: exam,
  notes,
})

export const SUBJECT_PACKS = [
  pack({
    id: 'biology',
    name: 'Biology',
    groups: BIOLOGY_GROUPS,
    flashcards: BIOLOGY_FLASHCARDS,
    mcq: BIOLOGY_MCQ,
    exam: BIOLOGY_EXAM,
    notes: BIOLOGY_NOTES,
  }),
  pack({
    id: 'chemistry',
    name: 'Chemistry',
    groups: CHEMISTRY_GROUPS,
    flashcards: CHEMISTRY_FLASHCARDS,
    mcq: CHEMISTRY_MCQ,
    exam: CHEMISTRY_EXAM,
    notes: CHEMISTRY_NOTES,
  }),
  pack({
    id: 'physics',
    name: 'Physics',
    groups: PHYSICS_GROUPS,
    flashcards: PHYSICS_FLASHCARDS,
    mcq: PHYSICS_MCQ,
    exam: PHYSICS_EXAM,
    notes: PHYSICS_NOTES,
  }),
  pack({
    id: 'psychology',
    name: 'Psychology',
    groups: PSYCHOLOGY_GROUPS,
    flashcards: PSYCHOLOGY_FLASHCARDS,
    mcq: PSYCHOLOGY_MCQ,
    exam: PSYCHOLOGY_EXAM,
    notes: PSYCHOLOGY_NOTES,
  }),
  pack({
    id: 'sociology',
    name: 'Sociology',
    groups: SOCIOLOGY_GROUPS,
    flashcards: SOCIOLOGY_FLASHCARDS,
    mcq: SOCIOLOGY_MCQ,
    exam: SOCIOLOGY_EXAM,
    notes: SOCIOLOGY_NOTES,
  }),
]
