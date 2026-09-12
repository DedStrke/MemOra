/*
  One registry for every page's title, description, canonical URL and
  breadcrumb trail.

  It lives in one file rather than being scattered through the pages so
  that two routes can't accidentally end up with the same <title> - the
  single most common SEO fault in a React SPA, where the title is set once
  in index.html and then never changes as you navigate.

  Because this is a client-rendered SPA there is no server rendering tags
  per URL, so <Seo> applies them on navigation and scripts/prerender.mjs
  bakes them into a real HTML file per route at build time. Crawlers that
  execute JavaScript read the former; social scrapers, which do not, read
  the latter.
*/

// The live origin. Everything canonical, OG and sitemap-related derives
// from this, so a domain change is a one-line edit here.
export const SITE_URL = 'https://memoraa.web.app'
export const SITE_BASE = ''
export const SITE_ORIGIN = `${SITE_URL}${SITE_BASE}`

export const SITE_NAME = 'Memora'
export const SITE_TAGLINE = 'Real practice, real mark schemes, one subject at a time.'
export const OG_IMAGE = `${SITE_ORIGIN}/og-memora.png`
export const OG_IMAGE_ALT =
  'Memora - A-level revision for Maths, Economics and Computer Science, with chapter-by-chapter progress tracking.'

// Absolute URL for a route path ("/progress" -> "https://memoraa.web.app/progress").
// The root keeps its trailing slash so the canonical points at the URL that
// is actually served rather than at a redirect.
export const absoluteUrl = (path = '/') =>
  path === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${path.replace(/\/+$/, '')}`

/*
  Per-route metadata.

  - `title`      the <title>, unique per route. Home is brand-led; every
                 other page reads "<page> · Memora" (built in titleFor).
  - `description` a genuine 120-160 character summary of THAT page, not the
                 same site blurb repeated - duplicate descriptions get
                 rewritten or ignored by search engines.
  - `h1`         the single visible <h1>. Kept here so the heading and the
                 title are decided together and can't drift apart.
  - `crumbs`     breadcrumb trail, excluding Home (added automatically).
  - `noindex`    true for pages that shouldn't be in an index: personal
                 tool state, and parameterised session routes that would
                 otherwise generate hundreds of near-identical URLs.
*/
export const PAGES = {
  '/': {
    title: 'Memora - A-level revision built for your exact spec',
    description:
      'Free A-level revision for Edexcel Maths, Edexcel Economics and OCR Computer Science. Spec-accurate notes, flashcards, MCQs and exam questions with real mark schemes.',
    h1: 'Real revision, built for your exact spec',
    crumbs: [],
  },
  '/how-it-works': {
    title: 'How it works',
    description:
      'How Memora decides what you revise next: chapter-level readiness bands, spaced repetition weighted by decay, and mistakes that resurface until you get them right twice.',
    h1: 'How Memora works',
    crumbs: [{ label: 'How it works', to: '/how-it-works' }],
  },
  '/dashboard': {
    title: 'Your dashboard',
    description:
      'Pick up where you left off, see the chapter Memora recommends next and why, and track how much of each course you have covered.',
    h1: null, // the greeting is the h1 - see Dashboard.jsx
    crumbs: [{ label: 'Dashboard', to: '/dashboard' }],
    noindex: true,
  },
  '/progress': {
    title: 'Your progress',
    description:
      'Chapter-by-chapter readiness for every subject you study, with a pace projection against your exam dates and the chapters that have slipped.',
    h1: 'How you are tracking',
    crumbs: [{ label: 'Progress', to: '/progress' }],
    noindex: true,
  },
  '/mistakes': {
    title: 'Your mistakes',
    description:
      'Every question you got wrong or marked "I don\'t know", grouped by chapter, with the misconceptions that keep coming back until you answer them right twice.',
    h1: "Where you're losing marks",
    crumbs: [{ label: 'Mistakes', to: '/mistakes' }],
    noindex: true,
  },
  '/friends': {
    title: 'Friends',
    description:
      'Your profile card, the people you revise with and a leaderboard of who put the hours in this week.',
    h1: 'Friends',
    crumbs: [{ label: 'Friends', to: '/friends' }],
    noindex: true,
  },
  '/community': {
    title: 'Community',
    description:
      'Ask a question, share what finally made a topic click, or answer someone else. A study board for Maths, Economics and Computer Science students.',
    h1: 'Community',
    crumbs: [{ label: 'Community', to: '/community' }],
  },
  '/flashcards': {
    title: 'Flashcards',
    description:
      'Study ready-made flashcard decks for Maths, Economics and Computer Science, or build your own set of cards for the chapters you find hardest.',
    h1: 'Flashcards',
    crumbs: [{ label: 'Flashcards', to: '/flashcards' }],
  },
  '/profile': {
    title: 'Settings',
    description:
      'Choose your subjects and exam board, add your exam dates, set your community name, and adjust the theme, font and reading options.',
    h1: 'Settings',
    crumbs: [{ label: 'Settings', to: '/profile' }],
    noindex: true,
  },
  '/start': {
    title: 'Start revising',
    description: 'Pick a subject, then how you want to revise it - notes, flashcards, exam questions, MCQs, blurting, active recall, essay plans or a timed mock.',
    h1: 'Start revising',
    crumbs: [{ label: 'Start', to: '/start' }],
    noindex: true,
  },
  '/study': {
    title: 'Study session',
    description:
      'Work through a chapter with notes, flashcards, active recall, blurting, MCQs or full exam questions marked against a real mark scheme.',
    h1: 'Study session',
    crumbs: [{ label: 'Study', to: '/study' }],
    noindex: true,
  },
  '/mock': {
    title: 'Mock exam',
    description:
      'Sit a timed, randomised mock paper built from real exam-style questions, then mark yourself honestly against the mark scheme question by question.',
    h1: 'Mock exam',
    crumbs: [{ label: 'Mock exam', to: '/mock' }],
    noindex: true,
  },
  '/signin': {
    title: 'Sign in',
    description:
      'Sign in to Memora, or create an account. Everything is stored on your own device - no email required to start revising.',
    h1: 'Welcome back',
    crumbs: [{ label: 'Sign in', to: '/signin' }],
  },
  '/privacy': {
    title: 'Privacy',
    description:
      'What Memora stores, where it stores it, and what it never collects. All your revision data stays in your own browser on your own device.',
    h1: 'Privacy',
    crumbs: [{ label: 'Privacy', to: '/privacy' }],
  },
  '/terms': {
    title: 'Terms',
    description:
      'The terms for using Memora: what the service is, what it is not, how the community board is moderated, and the limits of what is provided.',
    h1: 'Terms',
    crumbs: [{ label: 'Terms', to: '/terms' }],
  },
  '/contact': {
    title: 'Contact',
    description:
      'Report a mistake in a question, request a subject or exam board, or send feedback about Memora.',
    h1: 'Contact',
    crumbs: [{ label: 'Contact', to: '/contact' }],
  },
  '/404': {
    title: 'Page not found',
    description:
      'That page does not exist on Memora. Head back to your dashboard, or jump straight to progress, mistakes or flashcards.',
    h1: 'That page does not exist',
    crumbs: [{ label: 'Page not found', to: '/404' }],
    noindex: true,
  },
}

// Longest-prefix match, so /study/maths/mcq inherits the /study entry
// rather than falling through to the 404 metadata.
export function metaForPath(pathname) {
  if (PAGES[pathname]) return { ...PAGES[pathname], path: pathname }
  const prefix = Object.keys(PAGES)
    .filter((p) => p !== '/' && pathname.startsWith(p + '/'))
    .sort((a, b) => b.length - a.length)[0]
  if (prefix) return { ...PAGES[prefix], path: prefix }
  return { ...PAGES['/404'], path: '/404' }
}

export const titleFor = (meta) =>
  meta.path === '/' ? meta.title : `${meta.title} · ${SITE_NAME}`

/* ------------------------------------------------------ STRUCTURED DATA */

/*
  Schema.org JSON-LD.

  Deliberately NOT LocalBusiness. LocalBusiness is for an organisation with
  a physical premises customers visit, and Google requires a real postal
  address and (for most subtypes) opening hours. Memora is a free web app
  with no premises, so a LocalBusiness block would mean inventing an
  address - which is a structured-data spam violation and risks a manual
  action rather than helping rankings.

  The accurate equivalents are used instead: EducationalOrganization for
  the publisher, WebSite for the site itself, and SoftwareApplication for
  the app. If Memora ever does have a real registered address, add it to
  ORGANISATION.address and change @type to ['EducationalOrganization',
  'LocalBusiness'] - the rest already validates.
*/
export const ORGANISATION = {
  '@type': 'EducationalOrganization',
  '@id': `${SITE_ORIGIN}/#organisation`,
  name: SITE_NAME,
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/favicon.svg`,
  description:
    'Memora publishes free, specification-accurate A-level revision material for Edexcel Maths, Edexcel Economics and OCR Computer Science.',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  knowsAbout: ['A-level Mathematics', 'A-level Economics', 'A-level Computer Science'],
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_ORIGIN}/#website`,
    url: SITE_ORIGIN,
    name: SITE_NAME,
    description: SITE_TAGLINE,
    inLanguage: 'en-GB',
    publisher: { '@id': `${SITE_ORIGIN}/#organisation` },
  }
}

export function appSchema() {
  return {
    '@type': 'SoftwareApplication',
    '@id': `${SITE_ORIGIN}/#app`,
    name: SITE_NAME,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Any modern web browser',
    url: SITE_ORIGIN,
    description:
      'A-level revision app with spec-accurate notes, flashcards, multiple-choice questions and exam questions with mark schemes, plus chapter-level progress tracking.',
    // Free with no in-app purchase. Stating a real price of 0 is accurate;
    // an aggregateRating is deliberately omitted because there are no
    // genuine collected reviews to base one on, and inventing one is a
    // structured-data violation.
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
    publisher: { '@id': `${SITE_ORIGIN}/#organisation` },
  }
}

export function breadcrumbSchema(crumbs = []) {
  const items = [{ label: 'Home', to: '/' }, ...crumbs]
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: absoluteUrl(c.to),
    })),
  }
}

// One @graph per page, so the crawler receives a single connected block
// rather than several disconnected scripts.
export function graphFor(meta, extra = []) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ORGANISATION,
      websiteSchema(),
      appSchema(),
      breadcrumbSchema(meta.crumbs),
      {
        '@type': 'WebPage',
        '@id': `${absoluteUrl(meta.path)}#webpage`,
        url: absoluteUrl(meta.path),
        name: titleFor(meta),
        description: meta.description,
        inLanguage: 'en-GB',
        isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
        about: { '@id': `${SITE_ORIGIN}/#organisation` },
      },
      ...extra,
    ],
  }
}
