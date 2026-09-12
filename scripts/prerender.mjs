/*
  Writes a real HTML file per route into dist/, after `vite build`.

  Two problems this fixes, both invisible in dev and both serious in
  production:

  1. Static hosting has no server-side routing. Without a file at
     dist/progress/index.html, a request for /progress falls through to
     404.html - which renders the right page, but with an HTTP 404 status.
     Google treats that as a missing page and drops it from the index.
     Emitting a real file per route makes each one return 200, and lets
     firebase.json keep its SPA rewrite scoped to the session routes only.

  2. Social scrapers do not execute JavaScript. Facebook, LinkedIn,
     WhatsApp, Slack, Discord and X read the raw HTML only, so with a
     single shared index.html every page shared from the site would show
     the same title, description and card - regardless of what was shared.
     Baking the tags in per file gives each page its own preview.

  It is not a full DOM prerender (that would need a headless browser); the
  React app still hydrates and takes over. What ships in the static file is
  the head - which is what crawlers and scrapers read - plus a <noscript>
  block carrying the page's real heading, description and navigation, so
  "view source" shows genuine content rather than an empty <div id="root">.
*/
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve, join } from 'node:path'
import {
  PAGES,
  metaForPath,
  titleFor,
  absoluteUrl,
  graphFor,
  OG_IMAGE,
  OG_IMAGE_ALT,
  SITE_NAME,
  SITE_BASE,
} from '../src/lib/seo.js'

const here = dirname(fileURLToPath(import.meta.url))
const dist = resolve(here, '..', 'dist')

const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const shell = readFileSync(join(dist, 'index.html'), 'utf8')

/*
  Strip the tags the shell declares so we can substitute per-page versions,
  rather than emitting two <title> elements and two descriptions and
  letting the crawler choose.
*/
const stripped = shell
  .replace(/<title>[\s\S]*?<\/title>/i, '')
  .replace(/<meta\s+name="description"[^>]*>/i, '')
  .replace(/<link\s+rel="canonical"[^>]*>/i, '')

function headFor(meta) {
  const url = absoluteUrl(meta.path)
  const title = escapeHtml(titleFor(meta))
  const desc = escapeHtml(meta.description)
  return `
    <title>${title}</title>
    <meta name="description" content="${desc}" />
    <link rel="canonical" href="${url}" />
    <meta name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow'}" />
    <meta property="og:type" content="${meta.path === '/' ? 'website' : 'article'}" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${desc}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:alt" content="${escapeHtml(OG_IMAGE_ALT)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${desc}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />
    <meta name="twitter:image:alt" content="${escapeHtml(OG_IMAGE_ALT)}" />
    <script type="application/ld+json" data-seo>${JSON.stringify(graphFor(meta))}</script>`
}

// Real content in the static source: the page's own heading and summary,
// plus links a crawler can follow to every other page. Hidden once React
// mounts (it replaces #root's contents), so it is never seen twice.
function noscriptFor(meta) {
  const links = Object.entries(PAGES)
    .filter(([p, m]) => p !== '/404' && p !== meta.path && !m.noindex)
    .map(([p, m]) => `<li><a href="${SITE_BASE}${p === '/' ? '/' : p}">${escapeHtml(m.title)}</a></li>`)
    .join('')
  const crumbs = [{ label: 'Home', to: '/' }, ...(meta.crumbs || [])]
    .map((c, i, arr) =>
      i === arr.length - 1
        ? `<li aria-current="page">${escapeHtml(c.label)}</li>`
        : `<li><a href="${SITE_BASE}${c.to === '/' ? '/' : c.to}">${escapeHtml(c.label)}</a></li>`,
    )
    .join('')
  return `<noscript>
      <nav aria-label="Breadcrumb"><ol>${crumbs}</ol></nav>
      <h1>${escapeHtml(meta.h1 || meta.title)}</h1>
      <p>${escapeHtml(meta.description)}</p>
      <p>${escapeHtml(SITE_NAME)} needs JavaScript to run its revision sessions and track your progress. Every page is listed below.</p>
      <nav aria-label="All pages"><ul>${links}</ul></nav>
    </noscript>`
}

function render(meta) {
  return stripped
    .replace('</head>', `${headFor(meta)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${noscriptFor(meta)}</div>`)
}

let written = 0
for (const path of Object.keys(PAGES)) {
  if (path === '/404') continue
  const meta = metaForPath(path)
  const html = render(meta)
  if (path === '/') {
    writeFileSync(join(dist, 'index.html'), html, 'utf8')
  } else {
    const dir = join(dist, path.replace(/^\//, ''))
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'index.html'), html, 'utf8')
  }
  written += 1
}

/*
  404.html is what GitHub Pages serves for anything with no file - which
  after the above means genuinely unknown URLs only. It carries the 404
  page's own metadata and noindex, and still boots the app so the visitor
  gets the designed page rather than the bare GitHub Pages error.
*/
writeFileSync(join(dist, '404.html'), render(metaForPath('/404')), 'utf8')

console.log(`Prerendered ${written} routes + 404.html`)
