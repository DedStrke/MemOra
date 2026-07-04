/*
  ALL user-facing copy + option definitions for the study companion.
  Mock demo data (progress, decay topics, community, wellbeing) lives in mock.js.
*/

export const SITE = {
  name: 'AdaptHub',
  tagline: 'The study buddy that checks in on how you are feeling.',
}

// Top-bar navigation for signed-in pages. The logo goes to the landing page;
// these are the app's main sections.
export const NAV_LINKS = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Wellbeing', to: '/mental-health' },
  { label: 'Community', to: '/community' },
]

/* --------------------------------------------------------- LANDING / AUTH */

export const LANDING = {
  eyebrow: 'Revision that has your back',
  slogan: 'Study smarter. Feel better.',
  subtitle:
    'AdaptHub asks how you are feeling before you start, then shapes the session to match. Good day or rough one, you get a plan, real practice, and a little encouragement along the way.',
  primaryCta: 'Start with a check-in',
  secondaryCta: 'Log in',
  adaptsEyebrow: 'How AdaptHub adapts to you',
  adaptsSupport: 'Real support built in, never a label pinned on you.',
  highlights: [
    { icon: 'heart', title: 'Mood-aware sessions', body: 'We ask how you are feeling and shape the session to match.' },
    { icon: 'target', title: 'A plan that fits you', body: 'Countdowns, priorities and knowledge decay keep you on track.' },
    { icon: 'activity', title: 'Wellbeing built in', body: 'A timed break, a breathing reset, and a kind word when it gets heavy.' },
  ],
}

// The inclusion strip on the landing page. Each chip names what AdaptHub
// genuinely supports (a capability you get), not a person's diagnosis, so the
// row reads as a welcome rather than a list of labels. Keep every label
// truthful to a real feature. Ids map to the six needs (do not change ids).
export const ADAPTS_FOR = [
  { id: 'dyslexia', icon: 'book', label: 'Clean, readable type' },
  { id: 'low-vision', icon: 'eye', label: 'High-contrast themes' },
  { id: 'blind', icon: 'volume', label: 'Screen-reader friendly' },
  { id: 'deaf', icon: 'ear', label: 'Never relies on sound' },
  { id: 'adhd', icon: 'target', label: 'Calm, low-distraction design' },
  { id: 'motor', icon: 'hand', label: 'Full keyboard control' },
]

export const AUTH = {
  loginTitle: 'Welcome back',
  loginSubtitle: 'Welcome back. Let us pick up right where you left off.',
  demoNote: 'Demo login: your email logs you in, any password is fine.',
  wrongEmail: 'That email does not match your account. Try again, or sign up.',
  accountTitle: 'Create your account',
  accountHint: 'This is how you will log back in.',
}

export const PROFILE = {
  title: 'Your profile',
  subtitle: 'Everything AdaptHub knows about you. All stored on this device.',
}

/* --------------------------------------------------------- ONBOARDING */

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

// goal.id is stored on the profile and referenced by the study-session message.
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
  { id: 'SATs', label: 'SATs' },
  { id: 'University', label: 'University' },
]

// Course types that get a prioritised (one big + smaller) pillar layout.
export const PRIORITISED_COURSES = ['A-level', 'AS-level', 'IAL']

export const SPEC_BOARDS = ['AQA', 'Edexcel', 'OCR', 'WJEC / Eduqas', 'CIE', 'Other']

// Specification / exam-board options per course type.
export const SPEC_BY_COURSE = {
  GCSE: ['AQA', 'Edexcel', 'OCR', 'WJEC / Eduqas', 'CCEA', 'Other'],
  IGCSE: ['Cambridge (CIE)', 'Edexcel', 'Oxford AQA', 'Other'],
  'A-level': ['AQA', 'Edexcel', 'OCR', 'WJEC / Eduqas', 'CCEA', 'Other'],
  'AS-level': ['AQA', 'Edexcel', 'OCR', 'WJEC / Eduqas', 'Other'],
  IAL: ['Edexcel', 'Oxford AQA', 'Cambridge', 'Other'],
  SATs: ['SAT (College Board)', 'ACT', 'KS2 SATs', 'Other'],
}
export const specsFor = (courseType) => SPEC_BY_COURSE[courseType] || SPEC_BOARDS

// Access needs asked during onboarding. Ids match ADAPTS_FOR and drive the
// display adaptations in AppProvider (a11yFromNeeds).
export const NEEDS_OPTIONS = [
  { id: 'dyslexia', icon: 'book', label: 'Dyslexia' },
  { id: 'low-vision', icon: 'eye', label: 'Low vision' },
  { id: 'blind', icon: 'eyeOff', label: 'Blind' },
  { id: 'deaf', icon: 'ear', label: 'Deaf or hard of hearing' },
  { id: 'adhd', icon: 'brain', label: 'ADHD' },
  { id: 'motor', icon: 'hand', label: 'Motor or mobility' },
]

// Common GCSE / A-level subjects for the tap-to-pick subject chooser. Subjects
// with AI content packs come first. Anything not here can still be typed in.
export const SUBJECT_CATALOG = [
  'Biology',
  'Chemistry',
  'Physics',
  'Maths',
  'English Literature',
  'English Language',
  'History',
  'Geography',
  'Economics',
  'Business Studies',
  'Psychology',
  'Sociology',
  'Politics',
  'Computer Science',
  'Religious Studies',
  'French',
  'Further Maths',
  'Spanish',
  'German',
  'Art and Design',
  'Music',
  'Physical Education',
  'Drama',
]

export const ONBOARDING = {
  nameTitle: 'What should we call you?',
  nameHint: 'First name is perfect.',
  yearTitle: 'What year group are you in?',
  yearHint: 'This helps us pitch things at the right level.',
  goalTitle: 'What are you hoping for?',
  goalHint: 'No wrong answers. We will keep this in mind when you study.',
  courseTitle: 'What are you studying for?',
  courseHint: 'Pick the one that fits best.',
  subjectsTitle: 'Add your subjects',
  subjectsHint: 'Tap the subjects you take. Add any that are missing, and star your top priority.',
  courseNameTitle: 'What is your course?',
  courseNameHint: 'Your degree or programme name.',
}

/* ---------------------------------------------------------- DASHBOARD */

// Feature cards that link out from the dashboard.
export const FEATURES = [
  { id: 'flashcards', icon: 'cards', accent: 'flash', label: 'Flashcard maker', desc: 'Build and flip decks', to: '/flashcards' },
  { id: 'progress', icon: 'activity', accent: 'quiz', label: 'Progress tracker', desc: 'See how far you have come', to: '/progress' },
  { id: 'wellbeing', icon: 'heart', accent: 'paper', label: 'Mental health', desc: 'Take a breath, come back steadier', to: '/mental-health' },
  { id: 'community', icon: 'users', accent: 'brand', label: 'Community', desc: 'Share wins, cheer people on', to: '/community' },
]

export const STUDY_TECHNIQUES = [
  { id: 'flashcards', icon: 'cards', label: 'Flashcards', desc: 'Flip prompts and answers' },
  { id: 'exam-questions', icon: 'paper', label: 'Exam questions', desc: 'Practise the real thing' },
  { id: 'mcq', icon: 'quiz', label: 'MCQ', desc: 'Quick multiple choice' },
  { id: 'blurting', icon: 'brain', label: 'Blurting', desc: 'Dump everything you know' },
  { id: 'active-recall', icon: 'refresh', label: 'Active recall', desc: 'Test, do not re-read' },
]

export const MASCOT = {
  name: 'Sparky',
  chatPlaceholder: 'Chatbot coming soon! For now I am just here to cheer you on. 💜',
}

/* ------------------------------------------------ STUDY SESSION (Flow 3) */

export const MOODS = [
  { id: 'great', emoji: '😄', label: 'Great', accent: 'quiz' },
  { id: 'okay', emoji: '🙂', label: 'Okay', accent: 'flash' },
  { id: 'struggling', emoji: '😟', label: 'Struggling', accent: 'paper' },
]

// Motivational line keyed by [goal.id][mood.id]. Referenced in the study flow.
export const SESSION_MESSAGES = {
  pass: {
    great: 'Love that energy. A steady session today gets you closer to that pass.',
    okay: 'Okay is plenty. Show up, do a little, and passing takes care of itself.',
    struggling: 'Tough days still count. Even ten quiet minutes moves you toward the pass.',
  },
  ace: {
    great: 'This is how top grades are made. Channel it and let us ace this.',
    okay: 'Steady wins the A*. A focused session now compounds fast.',
    struggling: 'Champions have off days too. Go gentle, and we will still edge toward that A*.',
  },
  specific: {
    great: 'Perfect headspace to attack that tricky area. Let us make it click.',
    okay: 'Good enough to chip away at your weak spot. One concept at a time.',
    struggling: 'Be kind to yourself. We will pick one small thing to improve and stop there.',
  },
  custom: {
    great: 'You know why you are here. Let us make this session count.',
    okay: 'Right where you need to be. A calm, honest session, that is all.',
    struggling: 'Rough day noted. Let us keep it light and just get started.',
  },
}

/* ------------------------------------------------ MARKETING (how it works) */

export const MARKETING = {
  hero: {
    eyebrow: 'Study smarter. Feel better.',
    title: 'Revision that checks in on you first',
    subtitle:
      'Exams are heavy enough. AdaptHub asks how you are feeling before every session, then shapes your study around it, with a kind word tuned to the grade you are chasing. Meet Sparky, the study companion in your corner.',
    primaryCta: 'Start your first session',
    secondaryCta: 'See how it works',
  },
  whatItDoes: {
    heading: 'Everything you need to study kindly',
    intro:
      'Real practice, real check-ins, and a bit of warmth when the day is hard. Here is what you get.',
    items: [
      { icon: 'heart', title: 'It notices how you feel', body: 'A quick mood check-in before you begin, then a line of encouragement keyed to your goal and how you are doing. If you dip mid-session, Sparky offers a timed break. Wellbeing comes first.' },
      { icon: 'cards', title: 'Real practice, your way', body: 'Focus sessions with proper content by technique. Flashcards, multiple choice with instant feedback, exam questions with mark schemes, blurting, and active recall. Pick what suits the day.' },
      { icon: 'wand', title: 'Build your own decks', body: 'Study AI-built flashcard decks, or make your own. Save the ones you love, delete the ones you have nailed, and come back to them whenever you need a refresher.' },
      { icon: 'activity', title: 'See yourself improving', body: 'Progress tracking with per-subject trend sparklines, so you can watch the effort add up over time. Quiet proof that showing up is working.' },
      { icon: 'users', title: 'A community that cheers', body: 'Post your wins, ask the questions you are stuck on, and cheer other students on. You are revising alongside people who get it, not on your own.' },
      { icon: 'access', title: 'Built to work for you', body: 'A high-contrast theme, screen-reader friendly, full keyboard control, and nothing that relies on sound alone. Accessibility is part of the product, not an afterthought.' },
    ],
  },
  howItWorks: {
    heading: 'Your first session in four gentle steps',
    intro:
      'No setup marathon. You can be studying in a couple of minutes, and Sparky is with you the whole way.',
    steps: [
      { icon: 'hand', title: 'Say how you are', body: 'Tell us your mood in one tap before you start. There are no wrong answers, and a hard day is just as welcome as a great one.' },
      { icon: 'sparkles', title: 'Get a word from Sparky', body: 'You get a short line of encouragement tuned to your goal and your mood, so the session starts feeling a little kinder before you even begin.' },
      { icon: 'book', title: 'Study your way', body: 'Choose a technique and work through real practice content. Flashcards, MCQs, exam questions, blurting, or active recall. Whatever fits how you feel right now.' },
      { icon: 'leaf', title: 'Check in, breathe, keep going', body: 'We check in partway through. If you are struggling, take a timed break with a breathing widget and a small reset, then pick up refreshed.' },
    ],
  },
  closing: {
    title: 'Come study with someone in your corner',
    body: 'You do not have to power through revision alone or pretend you are fine when you are not. AdaptHub meets you where you are, one honest session at a time. Sparky is ready when you are.',
    cta: 'Start your first session',
  },
}

export const REVIEWS = {
  heading: 'Students who feel the difference',
  intro: 'Real words from learners who revise with AdaptHub.',
  items: [
    { id: 'r1', name: 'Amara O.', role: 'Year 11, GCSEs', avatar: '🌸', rating: 5, quote: 'The mood check-in before I start is the bit that gets me. On a bad morning it stops pushing and offers me a short break instead of piling on more work. I actually finish my sessions now, which never used to happen. Sparky feels like a friend who gets that some days are just harder.' },
    { id: 'r2', name: 'Daniel K.', role: 'Year 13, A-level Chemistry and Biology', avatar: '🔬', rating: 5, quote: 'I picked the want to ace it goal and the little lines it gives me are weirdly perfect for how I feel that day. The exam questions with real mark schemes are what sold me though. I can finally see where I drop marks instead of just guessing. My chemistry sparkline has been climbing for three weeks straight.' },
    { id: 'r3', name: 'Priya S.', role: 'Year 10, IGCSE', avatar: '📚', rating: 5, quote: 'I have dyslexia and most study apps give me a headache within minutes. AdaptHub keeps the text clean and readable and the high-contrast theme is so much easier on my eyes. Making my own flashcard decks and flipping through them is the first revision thing that has ever stuck for me.' },
    { id: 'r4', name: 'Marcus B.', role: 'University, second year Economics', avatar: '🎧', rating: 4, quote: 'Blurting and active recall in one place has replaced my messy re-reading habit completely. I do a blurt, then test myself, and the instant feedback on the MCQs tells me straight away what did not go in. The mid-session check-in nudged me to take a breather once when I was clearly frying, and it was right.' },
    { id: 'r5', name: 'Leila H.', role: 'Year 12, A-levels', avatar: '🌿', rating: 5, quote: 'Exams were making me genuinely anxious and I would freeze before opening a book. The breathing widget and the small resets sound tiny but they get me started, and the wellbeing first thing is real, not a gimmick. I feel less stressed sitting down to study than I have in a long time.' },
    { id: 'r6', name: 'Tomas R.', role: 'Year 11, SATs prep', avatar: '⌨️', rating: 4, quote: 'I use a keyboard for everything because a mouse is hard for me, and AdaptHub works top to bottom without one. Nothing relies on sound either, which matters. Posting a small win to the community feed and having people cheer it on keeps me going on the days I would rather quit.' },
  ],
}
