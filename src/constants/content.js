/*
  ALL user-facing copy + option definitions for the revision app.
*/

export const SITE = {
  name: 'Cortex',
  // Wordmark split point: the two halves get styled differently (see
  // Wordmark.jsx). Not every name splits on a space, so this is explicit.
  wordmarkSplit: ['Cor', 'tex'],
  tagline: 'Real practice, real mark schemes, one subject at a time.',
}

// Top-bar navigation.
export const NAV_LINKS = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Courses', to: '/courses' },
  { label: 'Progress', to: '/progress' },
  { label: 'Performance', to: '/performance' },
  { label: 'Community', to: '/community' },
]

/* --------------------------------------------------------- LANDING */

export const LANDING = {
  subtitleLead: 'Real revision,',
  subtitleHighlight: 'built for your exact spec',
  tagline: 'Stop re-reading. Start remembering.',
  primaryCta: 'Sign up free',
  primaryCtaSignedIn: 'Back to studying',
  secondaryCta: 'How it works',
}

// Decorative rotator on the landing hero - a broad spread of subjects, not
// limited to what the app actually has content for yet (SUBJECT_CATALOG).
export const LANDING_SUBJECTS = [
  'Art',
  'Biology',
  'Business Studies',
  'Chemistry',
  'Computer Science',
  'Economics',
  'Further Maths',
  'Government and Politics',
  'History',
  'Maths',
  'PSHE',
  'Physics',
  'Psychology',
  'Science',
  'Sociology',
]

export const PROFILE = {
  title: 'Settings',
  subtitle: 'Your subjects and how the app looks and reads, all stored on this device.',
}

/* --------------------------------------------------------- COURSE SETUP */

export const YEAR_GROUPS = [
  'Year 7',
  'Year 8',
  'Year 9',
  'Year 10',
  'Year 11',
  'Year 12',
  'Year 13',
  'University',
  'Other',
]

export const GOAL_OPTIONS = [
  { id: 'pass', icon: 'check', label: 'Just want to pass', desc: 'Get over the line, stress-free' },
  { id: 'ace', icon: 'star', label: 'Want to ace it', desc: 'Aiming for the top grades' },
  { id: 'specific', icon: 'target', label: 'Get better at a specific thing', desc: 'Focus on a weak spot' },
  { id: 'custom', icon: 'sparkles', label: 'Something else', desc: 'Tell us in your own words' },
]

export const COURSE_TYPES = [
  { id: 'A-level', label: 'A-level' },
  { id: 'AS-level', label: 'AS-level' },
  { id: 'GCSE', label: 'GCSE' },
  { id: 'IGCSE', label: 'IGCSE' },
  { id: 'IAL', label: 'IAL' },
  { id: 'University', label: 'University' },
]

// Course types that get a prioritised (one big + smaller) pillar layout.
export const PRIORITISED_COURSES = ['A-level', 'AS-level', 'IAL']

export const SPEC_BOARDS = ['AQA', 'Edexcel', 'OCR', 'WJEC / Eduqas', 'CIE', 'Other']

export const SPEC_BY_COURSE = {
  GCSE: ['AQA', 'Edexcel', 'OCR', 'WJEC / Eduqas', 'CCEA', 'Other'],
  IGCSE: ['Cambridge (CIE)', 'Edexcel', 'Oxford AQA', 'Other'],
  'A-level': ['AQA', 'Edexcel', 'OCR', 'WJEC / Eduqas', 'CCEA', 'Other'],
  'AS-level': ['AQA', 'Edexcel', 'OCR', 'WJEC / Eduqas', 'Other'],
  IAL: ['Edexcel', 'Oxford AQA', 'Cambridge', 'Other'],
}
export const specsFor = (courseType) => SPEC_BY_COURSE[courseType] || SPEC_BOARDS

// A subject "mascot" emoji shown next to each subject.
export const SUBJECT_MASCOTS = {
  maths: '➗',
  economics: '📈',
  'computer science': '💻',
}
export const subjectMascot = (name) =>
  SUBJECT_MASCOTS[String(name || '').toLowerCase().trim()] || '📚'

export const STICKY_REVIEWS = [
  { name: 'Maths', text: 'Every AS and A2 topic, worked examples included.', accent: 'flash' },
  { name: 'Computer Science', text: 'Both OCR components, traced pseudocode and all.', accent: 'quiz' },
  { name: 'Economics', text: 'Real exam-style questions with full mark schemes.', accent: 'paper' },
]

export const FAQ_ITEMS = [
  { q: 'Is this free?', a: 'Yes. Everything here runs entirely on this device.' },
  { q: 'What subjects are covered?', a: 'Maths, Economics, and Computer Science, with real flashcards, multiple choice, and past-paper-style questions with mark schemes.' },
  { q: 'Where is my data kept?', a: 'Entirely on this device, in your browser. Nothing is sent anywhere.' },
  { q: 'Can I track my progress?', a: 'Yes. Every finished session is logged, and the progress page shows per-subject trends over time.' },
]

export const SUBJECT_CATALOG = ['Maths', 'Economics', 'Computer Science']

/* ---------------------------------------------------------- DASHBOARD */

// Feature cards that link out from the dashboard.
export const FEATURES = [
  { id: 'flashcards', icon: 'cards', accent: 'flash', label: 'Flashcard maker', desc: 'Build and flip decks', to: '/flashcards' },
  { id: 'progress', icon: 'activity', accent: 'quiz', label: 'Progress tracker', desc: 'See how far you have come', to: '/progress' },
  { id: 'performance', icon: 'target', accent: 'brand', label: 'Performance', desc: 'See exactly what you got wrong', to: '/performance' },
  { id: 'community', icon: 'users', accent: 'success', label: 'Community', desc: 'Your own study board', to: '/community' },
  { id: 'courses', icon: 'cap', accent: 'paper', label: 'Your courses', desc: 'Manage subjects and boards', to: '/courses' },
]

export const STUDY_TECHNIQUES = [
  { id: 'notes', icon: 'book', label: 'Notes', desc: 'Read the topic properly' },
  { id: 'flashcards', icon: 'cards', label: 'Flashcards', desc: 'Flip prompts and answers' },
  { id: 'exam-questions', icon: 'paper', label: 'Exam questions', desc: 'Practise the real thing' },
  { id: 'mcq', icon: 'quiz', label: 'MCQ', desc: 'Quick multiple choice' },
  { id: 'blurting', icon: 'brain', label: 'Blurting', desc: 'Dump everything you know' },
  { id: 'active-recall', icon: 'refresh', label: 'Active recall', desc: 'Test, do not re-read' },
]

/* ------------------------------------------------ MARKETING (how it works) */

export const MARKETING = {
  hero: {
    eyebrow: 'Study smarter, not longer.',
    title: 'Revision built around the real spec',
    subtitle:
      'No generic filler. Every topic is built against the actual specification, with worked examples, flashcards, and exam-style questions with real mark schemes.',
    primaryCta: 'Start your first session',
    secondaryCta: 'See how it works',
  },
  whatItDoes: {
    heading: 'Everything you need to revise properly',
    intro: 'Real, spec-accurate practice, built topic by topic. Here is what you get.',
    items: [
      { icon: 'cards', title: 'Real practice, your way', body: 'Focus sessions with proper content by technique. Flashcards, multiple choice with instant feedback, exam questions with mark schemes, blurting, and active recall. Pick what suits the day.' },
      { icon: 'wand', title: 'Build your own decks', body: 'Study the built-in flashcard decks, or make your own. Save the ones you love, delete the ones you have nailed, and come back to them whenever you need a refresher.' },
      { icon: 'activity', title: 'See yourself improving', body: 'Progress tracking with per-subject trend sparklines, so you can watch the effort add up over time.' },
      { icon: 'target', title: 'A plan that adapts', body: 'Rate how a session went, and the next one for that subject notices. A tough topic gets an easier way back in.' },
    ],
  },
  howItWorks: {
    heading: 'Your first session in three steps',
    intro: 'No setup marathon. You can be studying in under a minute.',
    steps: [
      { icon: 'cap', title: 'Pick a subject', body: 'Maths, Economics, or Computer Science, plus whichever topic you want to focus on.' },
      { icon: 'book', title: 'Pick a technique', body: 'Flashcards, MCQs, exam questions, blurting, or active recall. Whatever fits how you want to work right now.' },
      { icon: 'refresh', title: 'Rate it, and repeat', body: 'When you finish, rate how it went. Come back tomorrow and the app remembers what needs another pass.' },
    ],
  },
  closing: {
    title: 'Stop re-reading. Start recalling.',
    body: 'Pick a subject and get straight into real, spec-matched practice.',
    cta: 'Start your first session',
  },
}

export const REVIEWS = {
  heading: 'What actually works',
  intro: 'The technique picker in one place.',
  items: [
    { id: 'r1', name: 'Flashcards', role: 'Active recall', avatar: '🃏', rating: 5, quote: 'Flip through a deck built for the exact topic you are on. No re-reading a textbook, just testing what actually stuck.' },
    { id: 'r2', name: 'Exam questions', role: 'Real mark schemes', avatar: '📝', rating: 5, quote: 'Practise the real format with a full mark scheme, so you can see exactly where marks are dropped, not just whether the answer was right or wrong.' },
    { id: 'r3', name: 'MCQ', role: 'Quick checks', avatar: '✅', rating: 5, quote: 'Instant feedback with an explanation for every option, so a wrong answer teaches you something too.' },
  ],
}
