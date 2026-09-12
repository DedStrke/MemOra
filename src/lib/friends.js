/*
  Friend codes. The site has no server, so a friend's card cannot fetch
  itself: each person's Friends page shows a CODE - their profile and
  stats, base64url-encoded - that they send however they like (a group
  chat is the obvious place), and everyone pastes everyone else's. A
  friend's card is as fresh as the last code they sent, and the page says
  so. If the site ever gets a backend, the same card shape syncs itself
  and the code field goes away.

  v3 carries the username plus tiny thumbnails of the profile picture
  and the banner; v2 (username, picture) and v1 (name + stats only) codes
  still decode. Custom-image mascots are far too big for a code, so a
  friend sees the default buddy instead. A banner can be a multi-megabyte
  GIF, so what travels is a 96x28 still of it - enough to recognise on a
  friend's card and in the leaderboard, not the moving original.
*/

export const USERNAME_RE = /^[a-z0-9_.]{3,20}$/

// Names that would be confusing or misleading as a handle. Kept short on
// purpose - this is a courtesy check, not a security boundary.
const RESERVED_USERNAMES = new Set([
  'admin', 'administrator', 'moderator', 'mod', 'support', 'staff', 'system',
  'memora', 'official', 'me', 'you', 'null', 'undefined', 'root', 'test',
])

/*
  Format + reservation checks always apply. Pass `taken` (the usernames
  your friends already use) to also catch a collision with your own list -
  the only "uniqueness" a backend-less, device-local app can honestly
  promise. It cannot stop two different people from picking the same
  handle; it can stop you from confusing two of your own friends.
*/
export function usernameProblem(u, { taken = [] } = {}) {
  const s = String(u || '').toLowerCase()
  if (!s) return 'Pick a username.'
  if (s.length < 3) return 'At least 3 characters.'
  if (s.length > 20) return 'At most 20 characters.'
  if (!USERNAME_RE.test(s)) return 'Lowercase letters, digits, dots and underscores only.'
  if (RESERVED_USERNAMES.has(s)) return 'That username is reserved - pick another.'
  if (taken.some((t) => String(t).toLowerCase() === s)) return 'A friend of yours already uses that username.'
  return null
}

export const suggestUsername = (name) =>
  String(name || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '')
    .slice(0, 20) || null

const encode = (obj) => {
  const json = JSON.stringify(obj)
  return btoa(unescape(encodeURIComponent(json))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}
const decode = (code) => {
  const b64 = code.trim().replace(/-/g, '+').replace(/_/g, '/')
  const pad = b64 + '='.repeat((4 - (b64.length % 4)) % 4)
  return JSON.parse(decodeURIComponent(escape(atob(pad))))
}

/*
  me: { id, username, name, mascot, xp, level, streak, weekMinutes, thumb, bannerThumb }
  - `thumb` is an optional 40px data URL of the profile photo and
  `bannerThumb` a 96x28 one of the banner (lib/image.js), each included
  only while it keeps the whole code inside one chat message (Discord's
  limit is 2000 characters). The picture is the one worth keeping when
  both will not fit, so it goes first.
*/
export const CODE_MAX = 1990

export function encodeFriendCode(me) {
  const base = {
    v: 3,
    id: me.id,
    u: me.username || null,
    n: me.name,
    m: me.mascot?.kind === 'builtin' ? me.mascot.id : 'pochita',
    xp: me.xp,
    l: me.level,
    s: me.streak,
    w: me.weekMinutes,
    t: Date.now(),
  }
  const attempts = [
    me.thumb && me.bannerThumb ? { ...base, p: me.thumb, b: me.bannerThumb } : null,
    me.thumb ? { ...base, p: me.thumb } : null,
    me.bannerThumb ? { ...base, b: me.bannerThumb } : null,
    base,
  ].filter(Boolean)
  for (const obj of attempts) {
    const code = encode(obj)
    if (code.length <= CODE_MAX) return code
  }
  return encode(base)
}

const tinyImage = (v, max) => (typeof v === 'string' && v.startsWith('data:image/') && v.length < max ? v : null)

/*
  A banner value that can actually be drawn. Friend entries saved before
  banners became images hold a preset NAME here ('aurora', 'ember'), which
  an <img> would render as a broken picture - those fall through to the
  default gradient. Your own banner arrives already resolved to a data or
  blob URL (context/AppProvider.jsx useResolvedImage).
*/
export const usableBanner = (v) => (typeof v === 'string' && /^(data:image\/|blob:|https?:\/\/)/.test(v) ? v : null)

/* Returns a friend entry or throws. */
export function decodeFriendCode(code) {
  const f = decode(code)
  if (!f || typeof f !== 'object') throw new Error('bad')
  if (f.v === 2 || f.v === 3) {
    if (typeof f.id !== 'string' || typeof f.n !== 'string') throw new Error('bad')
    return {
      id: f.id,
      username: typeof f.u === 'string' && USERNAME_RE.test(f.u) ? f.u : null,
      name: String(f.n).slice(0, 24),
      mascot: typeof f.m === 'string' ? f.m : 'pochita',
      // v3 carries a banner still as a data URL. A v2 code's `b` was a
      // preset id back when banners were presets; it is not a data URL,
      // so it falls out here and the card shows the default gradient.
      banner: f.v === 3 ? tinyImage(f.b, 4000) : null,
      photo: tinyImage(f.p, 4000),
      xp: Math.max(0, Number(f.xp) || 0),
      level: Math.max(1, Number(f.l) || 1),
      streak: Math.max(0, Number(f.s) || 0),
      weekMinutes: Math.max(0, Number(f.w) || 0),
      updatedAt: Number(f.t) || Date.now(),
    }
  }
  if (f.v === 1) {
    if (typeof f.id !== 'string' || typeof f.name !== 'string') throw new Error('bad')
    return {
      id: f.id,
      username: null,
      name: String(f.name).slice(0, 24),
      mascot: typeof f.mascot === 'string' ? f.mascot : 'pochita',
      banner: null,
      photo: null,
      xp: Math.max(0, Number(f.xp) || 0),
      level: 1,
      streak: Math.max(0, Number(f.streak) || 0),
      weekMinutes: Math.max(0, Number(f.weekMinutes) || 0),
      updatedAt: Number(f.updatedAt) || Date.now(),
    }
  }
  throw new Error('bad')
}

export const staleLabel = (ts) => {
  const days = Math.floor((Date.now() - ts) / 86400000)
  if (days <= 0) return 'today'
  if (days === 1) return '1 day ago'
  return `${days} days ago`
}
