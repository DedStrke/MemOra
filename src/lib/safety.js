/*
  §8.3 safety checks that are genuine pattern-matching (as opposed to rate
  limits and moderation queues, which need a real server to mean anything -
  see the module doc in AppProvider.jsx's community actions for why those
  stay soft/advisory in this build).
*/

const EMAIL_RE = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i
// UK-shaped and generic international phone numbers - deliberately loose,
// false positives here (blocking a real phone-shaped number that wasn't
// one) are far cheaper than false negatives.
const PHONE_RE = /(\+?\d[\d\s().-]{7,}\d)/
const HANDLE_RE = /(^|\s)@[a-z0-9_.]{2,}/i
// Common ways of writing contact details to dodge a naive filter, e.g.
// "text me on whatsapp", "snap: username", "my insta is".
const CONTACT_WORD_RE = /\b(whatsapp|snapchat|snap|insta(gram)?|discord|kik|telegram|my number is|text me|dm me)\b/i

/*
  Returns a list of reasons contact details were detected, or [] if clean.
  Used to flag a post/reply body before it's published (§8.3's "contact-
  detail filter... flag messages... for review before publishing").
*/
export function detectContactDetails(text) {
  const reasons = []
  const s = String(text || '')
  if (EMAIL_RE.test(s)) reasons.push('email address')
  if (PHONE_RE.test(s)) reasons.push('phone number')
  if (HANDLE_RE.test(s)) reasons.push('social handle')
  if (CONTACT_WORD_RE.test(s)) reasons.push('contact-app mention')
  return reasons
}

/*
  Display name rules (§8.3): reject anything matching an email, phone
  number, or social handle pattern. Real name / school / town / exam
  centre are never collected in the first place, so there's nothing to
  filter there - the rule is enforced by never asking, not by scrubbing.
*/
export function validateDisplayName(name) {
  const s = String(name || '').trim()
  if (!s) return 'Enter a display name.'
  if (s.length > 24) return 'Keep it under 24 characters.'
  if (EMAIL_RE.test(s)) return "That looks like an email address - pick something else."
  if (PHONE_RE.test(s)) return "That looks like a phone number - pick something else."
  if (HANDLE_RE.test(s) || /^@/.test(s)) return "That looks like a social handle - pick something else."
  return null
}
