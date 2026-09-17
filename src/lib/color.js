/*
  Colour math for the custom accent picker (Settings > Appearance). Everything
  else in the app's accent system is a fixed, hand-tuned hex per named accent
  per theme (see the `[data-theme][data-accent]` blocks in index.css) - this
  is the one place a colour is computed rather than chosen, because a custom
  accent can be ANY hue, so there is no table to hand-tune against.

  The brand colour itself is exactly what the user picked - the wheel and the
  hex field are meant to be literal. What is derived is everything that has
  to stay READABLE regardless of which hue they picked: the text-safe
  "strong" variant, and which of near-black/white sits legibly on a solid
  brand-coloured button. Both use real WCAG contrast maths rather than a
  guess, so an arbitrary hex - including an unlucky one - still resolves to
  something usable, which a fixed per-hue table could never guarantee.
*/

export function hexToRgb(hex) {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim())
  if (!m) return null
  const n = parseInt(m[1], 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}

export const rgbToHex = ({ r, g, b }) =>
  `#${[r, g, b].map((v) => Math.round(clamp(v, 0, 255)).toString(16).padStart(2, '0')).join('')}`

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))

export function rgbToHsl({ r, g, b }) {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  if (max === min) return { h: 0, s: 0, l: l * 100 }
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6
  else if (max === g) h = ((b - r) / d + 2) / 6
  else h = ((r - g) / d + 4) / 6
  return { h: h * 360, s: s * 100, l: l * 100 }
}

export function hslToRgb({ h, s, l }) {
  h = ((h % 360) + 360) % 360
  s = clamp(s, 0, 100) / 100
  l = clamp(l, 0, 100) / 100
  if (s === 0) {
    const v = l * 255
    return { r: v, g: v, b: v }
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q
  const hue = (t) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }
  return { r: hue(h / 360 + 1 / 3) * 255, g: hue(h / 360) * 255, b: hue(h / 360 - 1 / 3) * 255 }
}

export const hexToHsl = (hex) => {
  const rgb = hexToRgb(hex)
  return rgb ? rgbToHsl(rgb) : null
}
export const hslToHex = (hsl) => rgbToHex(hslToRgb(hsl))

// WCAG relative luminance and contrast ratio - see
// https://www.w3.org/WAI/GL/wcag20-tech/G17.html
function relativeLuminance({ r, g, b }) {
  const chan = (v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4
  }
  return 0.2126 * chan(r) + 0.7152 * chan(g) + 0.0722 * chan(b)
}
const contrastRatio = (a, b) => {
  const [l1, l2] = [relativeLuminance(a), relativeLuminance(b)].sort((x, y) => y - x)
  return (l1 + 0.05) / (l2 + 0.05)
}

const NEAR_BLACK = { r: 0x0b, g: 0x0f, b: 0x14 }
const WHITE = { r: 255, g: 255, b: 255 }

// Text placed on a SOLID brand-coloured surface (buttons, active chips):
// whichever of near-black or white actually contrasts better against this
// exact colour - not a hue-based guess.
export function onBrandFor(hex) {
  const rgb = hexToRgb(hex)
  if (!rgb) return '#ffffff'
  return contrastRatio(rgb, WHITE) >= contrastRatio(rgb, NEAR_BLACK) ? '#ffffff' : '#0b0f14'
}

// Text-safe variant for use directly on the page/surface background (e.g.
// text-brand-strong), which sits in the opposite lightness half from the
// button-fill colour in every theme this app has: dark surfaces need a
// LIGHTER variant to read, light/cream surfaces need a DARKER one. The
// floor/ceiling values are read off the app's own hand-tuned accents (their
// --brand-strong lightness clusters in these bands across every hue already
// shipped), so a custom hue lands in the same visual register as the rest.
export function brandStrongFor(hex, mode) {
  const hsl = hexToHsl(hex)
  if (!hsl) return hex
  if (mode === 'dark') return hslToHex({ ...hsl, l: Math.max(hsl.l, 68) })
  return hslToHex({ ...hsl, l: Math.min(hsl.l, 34) })
}

// Clamp the picked colour itself into a band where it still reads as a
// distinct UI accent (a border, an icon, an active tab) rather than nearly
// vanishing into a same-lightness surface - the wheel still offers the full
// hue and saturation range, only lightness is bounded.
export function clampBrandLightness(hex, mode) {
  const hsl = hexToHsl(hex)
  if (!hsl) return hex
  const [lo, hi] = mode === 'dark' ? [42, 78] : [26, 56]
  return hslToHex({ ...hsl, l: clamp(hsl.l, lo, hi) })
}

export const isValidHex = (hex) => /^#?[0-9a-f]{6}$/i.test(hex.trim())
export const normaliseHex = (hex) => (hex.trim().startsWith('#') ? hex.trim() : `#${hex.trim()}`).toLowerCase()
