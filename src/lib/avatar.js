/*
  §8.2: generated avatars, deterministic from a seed - pure data/logic here;
  the actual <svg> rendering is components/ui/Avatar.jsx.

  Strongly recommended over photo upload for a minor-heavy audience in a
  shared community: this app has no backend to run a moderation queue on
  (see AppProvider.jsx), which makes photo upload actively worse here than
  usual, not just unnecessary. (The separate personal profile photo in
  Settings is a different, single-device-only surface nobody else ever
  sees, so it's left alone - this module is specifically for the identity
  shown on community posts.)
*/

export const AVATAR_STYLES = ['initials', 'shapes']

export const AVATAR_BACKGROUNDS = [
  'indigo', 'red', 'orange', 'amber', 'green', 'teal', 'cyan', 'blue', 'violet', 'pink', 'rose', 'slate',
]

export const AVATAR_BG_HEX = {
  indigo: '#4f46e5', red: '#dc2626', orange: '#ea580c', amber: '#d97706',
  green: '#16a34a', teal: '#0d9488', cyan: '#0891b2', blue: '#2563eb',
  violet: '#7c3aed', pink: '#db2777', rose: '#e11d48', slate: '#475569',
}

// Small, fast, deterministic string hash (djb2) - not cryptographic, just
// needs to spread seeds evenly across the geometric pattern's grid.
export function hashSeed(str) {
  let h = 5381
  const s = String(str || '')
  for (let i = 0; i < s.length; i++) h = (h * 33) ^ s.charCodeAt(i)
  return h >>> 0
}

export function initialsFor(name) {
  const parts = String(name || '?').trim().split(/\s+/)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

// 5x5 symmetric geometric pattern (identicon-style) as a list of [x, y]
// filled cells, mirrored left-right - only needs 3 columns' worth of bits
// per row, decided from the seed's hash.
export function shapeCells(seedStr) {
  const h = hashSeed(seedStr)
  const cells = []
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 3; col++) {
      const bit = (h >> (row * 3 + col)) & 1
      if (!bit) continue
      cells.push([col, row])
      if (col < 2) cells.push([4 - col, row])
    }
  }
  return cells
}
