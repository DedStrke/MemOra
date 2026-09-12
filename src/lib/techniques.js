import { STUDY_TECHNIQUES } from '@/constants/content'
import { slugify } from '@/lib/slug'

/*
  The bits of "which technique, on which chapter, opens which route" that
  the dashboard's launchers share: the subject cards, the Start chooser
  and the gaps list. Kept here so they can never disagree about what a
  technique id links to.
*/

// The timed paper is a technique in the student's eyes but a different
// route in the router's, so the launchers list it beside the others.
export const MOCK_TECHNIQUE = { id: 'mock', icon: 'clock', label: 'Mock exam', desc: 'A timed, randomised paper' }

export const ALL_TECHNIQUES = [...STUDY_TECHNIQUES, MOCK_TECHNIQUE]

// Attempts log the timed paper as 'mock-exam' (lib/attempts.js) and the
// recommender hands that back as a mode; the launcher id is 'mock'.
export const normaliseMode = (id) => (id === 'mock-exam' ? 'mock' : id)

// A technique is offered only if the subject's pack actually has content
// for it, so nobody lands on an empty "no MCQs yet" dead end.
export function techniqueHasContent(pack, techniqueId) {
  if (!pack) return true
  switch (normaliseMode(techniqueId)) {
    case 'mcq':
      return pack.mcq?.length > 0
    case 'exam-questions':
    case 'mock':
      return pack.examQuestions?.length > 0
    case 'notes':
      return Object.keys(pack.notes || {}).length > 0
    case 'essay-plans':
      return pack.essayBank?.length > 0
    case 'flashcards':
    case 'active-recall':
    case 'blurting':
    default:
      return pack.flashcards?.length > 0
  }
}

export const techniqueLabel = (id) => ALL_TECHNIQUES.find((t) => t.id === normaliseMode(id))?.label || 'Study'

/*
  Where a technique on a subject opens. With a chapter, the study page
  lands on that exact chapter (?chapter=) rather than the picker; the
  mock exam builds its own paper, so a chapter is not passed to it.
*/
export function studyPathFor(subjectName, topic, mode) {
  const slug = slugify(subjectName)
  const id = normaliseMode(mode)
  if (id === 'mock') return `/mock/${slug}`
  if (!topic) return `/study/${slug}/${id}`
  const params = new URLSearchParams({ chapter: topic })
  return `/study/${slug}/${id}?${params.toString()}`
}
