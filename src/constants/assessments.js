/*
  Assessment types, in the order they happen in a sixth-form year.

  "Exam dates" used to be one bucket. A school year actually has four kinds
  of date that matter differently: a Diagnostic Assessment (DA) is a
  low-stakes check at the start of a topic, an Interim Assessment (IA)
  sits mid-course and counts towards predicted grades, mocks are the full
  dress rehearsal, and the real papers are the only ones the university
  sees. The dashboard's countdowns, its "how ready are you for this one"
  bars and the pace maths all read the type.

  ASSESSMENT_CALENDAR is the school's own timetable: DA and IA dates per
  subject that can be loaded in one tap from the profile page rather than
  typed one at a time. It is empty until the timetable is supplied; add
  entries as { type, subject, paperLabel, date } and they appear under
  "Load this year's DA and IA dates". Dates are ISO (YYYY-MM-DD).
*/
export const ASSESSMENT_TYPES = [
  {
    id: 'DA',
    label: 'Diagnostic assessment',
    short: 'DA',
    tone: 'brand',
    blurb: 'Start-of-topic check. Low stakes - it tells you and your teacher where you are.',
  },
  {
    id: 'IA',
    label: 'Interim assessment',
    short: 'IA',
    tone: 'paper',
    blurb: 'Mid-course assessment. Feeds predicted grades, so it matters more than it looks.',
  },
  {
    id: 'mock',
    label: 'Mock exam',
    short: 'Mock',
    tone: 'shaky',
    blurb: 'Full paper under exam conditions. Treat the timing as real.',
  },
  {
    id: 'final',
    label: 'A-level exam',
    short: 'Final',
    tone: 'danger',
    blurb: 'The real paper.',
  },
]

export const assessmentType = (id) => ASSESSMENT_TYPES.find((t) => t.id === id) || ASSESSMENT_TYPES[3]

// Populate from the school timetable when supplied - see the header.
export const ASSESSMENT_CALENDAR = []
