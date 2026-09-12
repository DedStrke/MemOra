/*
  Append supplementary content to existing chapters.

  The base chapters are HTML strings, so extra material can be concatenated
  onto the end of the chapter it belongs to. Keeping supplements in their own
  files means a topic's core notes and its extra worked examples can be
  written and reviewed separately without either becoming unmanageable.

  A supplement for a chapter that does not exist is dropped rather than
  creating a phantom chapter, and reported, because a silent no-op is how a
  renamed chapter loses its extra content without anyone noticing.
*/
export function mergeNotes(base, ...supplements) {
  const out = { ...base }
  for (const supp of supplements) {
    for (const [chapterName, extra] of Object.entries(supp)) {
      if (!(chapterName in out)) {
        if (typeof console !== 'undefined' && console.warn) {
          console.warn(`[notes] supplement for unknown chapter "${chapterName}" - dropped`)
        }
        continue
      }
      out[chapterName] = out[chapterName] + extra
    }
  }
  return out
}
