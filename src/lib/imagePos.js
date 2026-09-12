/*
  How a profile picture or banner sits inside its frame.

  { x, y, zoom }: x and y are the focal point as percentages of the image
  (50/50 = centred), zoom is a magnification from 1 (fill the frame, the
  plain object-fit: cover result) up to 3. Every frame that shows the
  image applies the same three numbers, so what the adjust dialog
  previews (components/ui/ImageAdjust.jsx) is exactly what the dashboard
  banner, the friend card and the leaderboard row draw.

  The CSS is object-fit: cover + object-position for the focal point,
  and a scale() about that same point for the zoom - which puts the
  image's (x%, y%) point at the frame's (x%, y%) point at any zoom, so
  the drag maths in the dialog and this rendering agree by construction.
  Stored as a small object on the profile; null means the default.
*/

export const DEFAULT_POS = { x: 50, y: 50, zoom: 1 }

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))

export function normalisePos(p) {
  if (!p || typeof p !== 'object') return DEFAULT_POS
  return {
    x: clamp(Number(p.x) || 50, 0, 100),
    y: clamp(Number(p.y) || 50, 0, 100),
    zoom: clamp(Number(p.zoom) || 1, 1, 3),
  }
}

export const isDefaultPos = (p) => {
  const n = normalisePos(p)
  return n.x === 50 && n.y === 50 && n.zoom === 1
}

/* Inline style for an <img> that fills its frame. */
export function posStyle(p) {
  const n = normalisePos(p)
  const origin = `${n.x}% ${n.y}%`
  return {
    objectFit: 'cover',
    objectPosition: origin,
    transform: n.zoom === 1 ? undefined : `scale(${n.zoom})`,
    transformOrigin: origin,
  }
}

/*
  The same placement on a canvas: draw `img` into a w x h frame so that
  its (x%, y%) point lands at the frame's (x%, y%), covering the frame at
  the given zoom. Used for the friend-code thumbnails, so a friend sees
  the crop you chose, not the raw centre of the file.
*/
export function drawPositioned(ctx, img, w, h, p) {
  const n = normalisePos(p)
  const cover = Math.max(w / img.width, h / img.height) * n.zoom
  const dw = img.width * cover
  const dh = img.height * cover
  const left = (w - dw) * (n.x / 100)
  const top = (h - dh) * (n.y / 100)
  ctx.drawImage(img, left, top, dw, dh)
}
