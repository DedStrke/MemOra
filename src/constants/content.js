/*
  ALL user-facing copy + option definitions for the revision app.
*/

export const SITE = {
  name: 'Memora',
  // Wordmark split point: the two halves get styled differently (see
  // Wordmark.jsx). Not every name splits on a space, so this is explicit.
  wordmarkSplit: ['Mem', 'Ora'],
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
  { q: 'Is this free?', a: 'Yes, completely.' },
  { q: 'What subjects are covered?', a: 'Maths, Economics, and Computer Science, with real flashcards, multiple choice, and past-paper-style questions with mark schemes.' },
  { q: 'Where is my data kept?', a: "In your browser, on whichever device you're using. It doesn't sync between devices, so switching computers or clearing your browser data means starting fresh there." },
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
  { id: 'mock', icon: 'clock', accent: 'flash', label: 'Mock exams', desc: 'A timed, randomised paper', to: '/mock' },
]

// Real spec codes for the subjects the content packs are actually built
// against (see the header comment in constants/library.js) - used to give
// the mock exam paper a genuine board/paper title instead of a generic one.
// A subject not listed here falls back to whatever board the user set on
// their subject in Courses.
export const EXAM_BOARD_META = {
  Maths: { board: 'Edexcel', code: '9MA0', paper: 'Paper 1: Pure Mathematics' },
  Economics: { board: 'Edexcel A', code: '9EC0', paper: 'Paper 1: Markets and Business Behaviour' },
  'Computer Science': { board: 'OCR', code: 'H446/01', paper: 'Paper 1: Computing Principles' },
}

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

/* ----------------------------------------------------------- FOOTER */

// Column links for the site footer. Kept separate from NAV_LINKS (the
// top-bar set) since the footer surfaces a couple of extra destinations
// (How it works, Community, the legal pages) that don't belong in the
// in-app top bar.
export const FOOTER_COLUMNS = [
  {
    heading: 'Study',
    links: [
      { label: 'Dashboard', to: '/dashboard' },
      { label: 'Courses', to: '/courses' },
      { label: 'Flashcards', to: '/flashcards' },
      { label: 'Progress', to: '/progress' },
      { label: 'Performance', to: '/performance' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'How it works', to: '/how-it-works' },
      { label: 'FAQ', to: '/how-it-works#faq' },
      { label: 'Community', to: '/community' },
    ],
  },
  {
    heading: 'Account',
    links: [
      { label: 'Sign in', to: '/signin' },
      { label: 'Create account', to: '/signin?mode=signup' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

/* ------------------------------------------------------------ LEGAL */

// Every claim here has to stay true to what the app actually does: no
// server, no accounts beyond localStorage, no analytics, nothing sent
// anywhere. Keep it that honest, or update the copy the moment that
// stops being true.
export const LEGAL = {
  privacy: {
    title: 'Privacy',
    updated: 'August 2026',
    intro: "The short version: Memora doesn't collect anything, because there's nowhere for it to go. Everything below explains exactly what that means.",
    sections: [
      {
        heading: 'What Memora stores',
        body: "Your profile, subjects, exam dates, study sessions, and any account you create are saved with the browser's localStorage, on the device you're using. None of it is uploaded, and Memora has no server to upload it to.",
      },
      {
        heading: 'What that means in practice',
        body: "Your data doesn't sync between devices or browsers. Clearing your browser's site data, using private/incognito mode, or switching computers all mean starting fresh. There is no way for Memora, or anyone else, to see your data remotely, because it never leaves your device.",
      },
      {
        heading: 'Accounts and passwords',
        body: 'Creating an account stores a name, email, and a salted, hashed password (never the password itself) in that same local storage. It exists to keep separate profiles apart on a shared device, not to identify you to a server, because there is no server.',
      },
      {
        heading: 'Analytics and tracking',
        body: 'None. No analytics scripts, no third-party trackers, no advertising, no cookies used for tracking. Fonts and other assets are bundled with the site rather than loaded from an external service.',
      },
      {
        heading: 'Changes',
        body: "If Memora ever changes how it handles data, for example by adding real accounts that sync, this page gets updated first and the change is explained plainly, not buried.",
      },
    ],
  },
  terms: {
    title: 'Terms',
    updated: 'August 2026',
    intro: 'Plain-language terms for a free, personal study tool.',
    sections: [
      {
        heading: 'What this is',
        body: 'Memora is a free revision tool built as a personal project. It is not a company, and using it does not create any kind of formal agreement beyond the obvious: be reasonable, and don’t rely on it for anything critical.',
      },
      {
        heading: 'No guarantees',
        body: "Memora is provided as-is. Content is built carefully against real specifications, but it can still contain mistakes, and it is not a substitute for your teacher, your textbook, or the official specification and past papers from your exam board.",
      },
      {
        heading: 'Your data, your device',
        body: "Since everything lives in your browser's local storage, you're responsible for it. Clearing site data or switching devices deletes it permanently, with no way to recover it. There's no backup to restore from.",
      },
      {
        heading: 'Acceptable use',
        body: "Use Memora for studying. Don't try to break it, scrape it at scale, or use it in a way that disrupts it for other people.",
      },
      {
        heading: 'Changes',
        body: 'Memora is a project that keeps evolving. Features, content, and these terms can change as it does.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    intro: "Memora is a personal project, not a company with a support line, but bug reports and ideas are genuinely welcome.",
    githubUrl: 'https://github.com/DedStrke/MemOra',
    githubLabel: 'Open an issue on GitHub',
    githubBody: 'The fastest way to report a bug, request a subject, or suggest a feature. Every issue gets read.',
  },
}
