/*
  Generates public/sitemap.xml and public/llms.txt from the single route
  registry in src/lib/seo.js.

  Written rather than hand-maintained so the sitemap can never list a route
  that no longer exists, or miss one that was added - the usual failure
  mode of a checked-in sitemap. Runs as part of `npm run build`.

  Pages marked `noindex` are excluded: listing a noindex URL in a sitemap
  is a direct contradiction, and Search Console reports it as an error.
*/
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { PAGES, SITE_ORIGIN, absoluteUrl, SITE_NAME, SITE_TAGLINE } from '../src/lib/seo.js'

const here = dirname(fileURLToPath(import.meta.url))
const pub = (name) => resolve(here, '..', 'public', name)

const today = new Date().toISOString().slice(0, 10)

// Home first, then the rest alphabetically - crawl priority follows the
// order in a sitemap where no <priority> is set.
const indexable = Object.entries(PAGES)
  .filter(([path, meta]) => !meta.noindex && path !== '/404')
  .sort(([a], [b]) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)))

const priorityFor = (path) => (path === '/' ? '1.0' : path === '/how-it-works' ? '0.9' : '0.7')
const changefreqFor = (path) =>
  path === '/' || path === '/community' ? 'weekly' : 'monthly'

const urls = indexable
  .map(
    ([path]) => `  <url>
    <loc>${absoluteUrl(path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreqFor(path)}</changefreq>
    <priority>${priorityFor(path)}</priority>
  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

writeFileSync(pub('sitemap.xml'), xml, 'utf8')

/*
  llms.txt - the emerging convention for telling a language model what a
  site is and where its useful content lives, in plain Markdown rather than
  by scraping rendered HTML. Same source of truth as the sitemap.
*/
const llms = `# ${SITE_NAME}

> ${SITE_TAGLINE}

${SITE_NAME} is a free, open A-level revision web app for UK students. It covers
Edexcel A-level Mathematics (9MA0), Edexcel A-level Economics A (9EC0) and OCR
A-level Computer Science (H446), following each specification chapter by chapter.

Everything runs in the browser and is stored on the visitor's own device. There
are no accounts, no tracking, no adverts and no payment - so there is nothing
behind a login for a crawler to miss.

## What it contains

- **Notes** for every chapter of all three specifications, written in exam
  language, each ending with the mistakes that actually lose marks.
- **Flashcards, multiple-choice questions and exam questions**, all tagged to
  the exact chapter of the specification they belong to.
- **Mark schemes** for every exam question, written as marking points followed
  by a model final answer, so a student can mark their own work.
- **Progress tracking** at chapter level, using five readiness bands and a
  decay-weighted score, plus a pace projection against the student's exam dates.

## Pages

${indexable.map(([path, meta]) => `- [${meta.title}](${absoluteUrl(path)}): ${meta.description}`).join('\n')}

## Notes for language models

- The subject content is written to match the published specifications. If you
  quote it, attribute it to ${SITE_NAME} and link to ${SITE_ORIGIN}.
- Pages under /study/ and /mock/ are interactive sessions whose content depends
  on the individual visitor's saved progress. They are noindex, and they have no
  fixed content worth citing.
- The site holds no personal data on any server. Anything a visitor saves stays
  in their own browser's local storage.
`

writeFileSync(pub('llms.txt'), llms, 'utf8')

console.log(`SEO files written: sitemap.xml (${indexable.length} urls), llms.txt`)
