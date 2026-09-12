import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  metaForPath,
  titleFor,
  absoluteUrl,
  graphFor,
  OG_IMAGE,
  OG_IMAGE_ALT,
  SITE_NAME,
} from '@/lib/seo'

/*
  Applies per-route head tags on navigation.

  A React SPA serves one index.html for every URL, so without this the
  title, description and canonical stay frozen on whatever the shell
  declared - every page looks identical to a crawler, and the browser tab
  says the same thing no matter where you are. This rewrites them on each
  route change.

  Tags are created once and then mutated, keyed by a data-seo attribute, so
  navigating twenty times does not leave twenty stale <meta> elements
  behind in the head.
*/

// Find-or-create a head element, tagged so we only ever touch our own.
function upsert(selector, create) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = create()
    el.setAttribute('data-seo', '')
    document.head.appendChild(el)
  }
  return el
}

const setMeta = (attr, key, content) => {
  const el = upsert(`meta[${attr}="${key}"]`, () => {
    const m = document.createElement('meta')
    m.setAttribute(attr, key)
    return m
  })
  el.setAttribute('content', content)
}

export default function Seo({ jsonLd = [] }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = metaForPath(pathname)
    // Canonical uses the matched route, not the raw pathname: /study/maths
    // and /study/economics/mcq?chapter=x are the same page with different
    // state, and pointing them all at /study stops a crawler treating each
    // as separate thin content.
    const canonical = absoluteUrl(meta.path)

    document.title = titleFor(meta)

    setMeta('name', 'description', meta.description)
    setMeta('name', 'robots', meta.noindex ? 'noindex, follow' : 'index, follow')

    // Open Graph (Facebook, LinkedIn, WhatsApp, Slack, Discord)
    setMeta('property', 'og:type', meta.path === '/' ? 'website' : 'article')
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:title', titleFor(meta))
    setMeta('property', 'og:description', meta.description)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:locale', 'en_GB')
    setMeta('property', 'og:image', OG_IMAGE)
    setMeta('property', 'og:image:width', '1200')
    setMeta('property', 'og:image:height', '630')
    setMeta('property', 'og:image:type', 'image/png')
    setMeta('property', 'og:image:alt', OG_IMAGE_ALT)

    // Twitter/X. summary_large_image is what renders the 1200x630 card;
    // plain "summary" would crop it to a small square.
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', titleFor(meta))
    setMeta('name', 'twitter:description', meta.description)
    setMeta('name', 'twitter:image', OG_IMAGE)
    setMeta('name', 'twitter:image:alt', OG_IMAGE_ALT)

    const link = upsert('link[rel="canonical"]', () => {
      const l = document.createElement('link')
      l.setAttribute('rel', 'canonical')
      return l
    })
    link.setAttribute('href', canonical)

    // JSON-LD is replaced wholesale rather than mutated - it is one blob,
    // and diffing it would cost more than rewriting it.
    const script = upsert('script[type="application/ld+json"][data-seo]', () => {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      return s
    })
    script.textContent = JSON.stringify(graphFor(meta, jsonLd))
  }, [pathname, jsonLd])

  return null
}
