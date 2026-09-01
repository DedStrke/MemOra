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
  'dick',
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

const WHOLE_WORDS = ['ass', 'damn', 'goddamn', 'hell', 'prick', 'tit', 'tits', 'cock']

const PATTERN = new RegExp(
  `\\b(${STEMS.map((s) => `${s}\\w*`).join('|')}|${WHOLE_WORDS.join('|')})\\b`,
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
