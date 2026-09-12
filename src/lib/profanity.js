/*
  A good-faith client-side profanity filter for the community board. This is
  a personal, on-device tool with no backend, so this can't be a hard
  security boundary (anyone could edit localStorage directly) - it's a
  normal first-line UX filter, same as any comment box.

  Word-boundary matching (\b...\b) is used throughout, deliberately, to avoid
  the classic "Scunthorpe problem" (blocking innocent words that merely
  contain a banned substring, e.g. "class", "assess", "Scunthorpe").
  Stems use \w* to also catch common suffixes (-ing, -ed, -s, -er).
*/

const STEMS = [
  'fuck',
  'motherfuck',
  'shit',
  'bullshit',
  'horseshit',
  'dipshit',
  'batshit',
  'bitch',
  'bastard',
  'asshole',
  'dumbass',
  'jackass',
  'piss',
  'cunt',
  'twat',
  'wanker',
  'slut',
  'whore',
  'douche',
  'douchebag',
  'bollocks',
  'bugger',
  'crap',
]

/*
  Matched whole-word only, never as stems. `dick` is here rather than in
  STEMS on purpose: `dick\w*` also matches Dickens and Dickinson, which a
  literature or history student has every reason to be writing about.
  Same reasoning keeps `tit` off the stem list (title, titanium).
*/
const WHOLE_WORDS = [
  'ass',
  'cock',
  'damn',
  'dick',
  'dickhead',
  'goddamn',
  'hell',
  'prick',
  'tit',
  'tits',
]

// Longest alternatives first so the engine matches the fullest word it can
// (`dickhead` before `dick`) instead of relying on backtracking to get there.
const byLongest = (a, b) => b.length - a.length

const PATTERN = new RegExp(
  `\\b(${[...STEMS].sort(byLongest).map((s) => `${s}\\w*`).join('|')}|${[...WHOLE_WORDS]
    .sort(byLongest)
    .join('|')})\\b`,
  'i',
)

export function containsProfanity(text) {
  return PATTERN.test(String(text || ''))
}

// Returns the specific matched word(s), lowercased, for a clearer error
// message (e.g. "contains: damn").
export function findProfanity(text) {
  const matches = String(text || '').match(new RegExp(PATTERN.source, 'gi'))
  return matches ? [...new Set(matches.map((m) => m.toLowerCase()))] : []
}
