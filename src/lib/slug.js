/*
  Turns a subject name into a URL-safe slug for path-based routes
  (/study/computer-science/mcq instead of /study?subject=...&technique=...),
  and back again by matching against the real list of names - never guessed,
  since "Computer Science" and "computer-science" aren't reversible by
  formula alone (capitalisation, punctuation).
*/
export const slugify = (name) =>
  String(name || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

// Resolves a URL slug back to the exact, properly-cased name it came from.
// Returns null (never a guess) when nothing in `names` matches.
export const resolveSlug = (slug, names) => {
  if (!slug) return null
  const target = slugify(slug)
  return names.find((n) => slugify(n) === target) || null
}
