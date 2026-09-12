/*
  Turn a picked image file into something the app can store and show.

  A still image is drawn to a canvas and re-encoded small (a phone photo
  becomes a ~20 KB JPEG or PNG) and comes back as a plain data URL - tiny
  enough to sit directly in the app's own settings blob in localStorage.

  A GIF is different: a canvas would keep only its first frame, so it
  has to be stored exactly as uploaded to keep moving, and that is too
  big for localStorage - see lib/blobStore.js for why. `pickImage` puts a
  GIF there instead and returns a short `idb:<key>` marker string in its
  place; AppProvider resolves that marker back into a real, viewable URL
  before anything else in the app ever sees it, so nothing downstream
  needs to know or care where a given picture actually lives.
*/
import { putBlob } from '@/lib/blobStore'
import { drawPositioned } from '@/lib/imagePos'

// A sanity ceiling, not a storage-quota one - IndexedDB has no
// meaningful limit for a personal image, so this exists only to stop
// someone uploading something big enough to visibly stutter the page
// while the browser decodes it.
export const GIF_MAX = 20 * 1024 * 1024

// The study buddy's own custom-image picker keeps its GIF inline in
// localStorage rather than IndexedDB (its display path - mascotImage(),
// read directly and synchronously in a dozen small places - was built
// before blobStore existed, and moving it is a bigger job than this
// picture needed). Smaller cap to match: a few of these easily fit
// alongside everything else that key holds.
export const MASCOT_GIF_MAX = 3 * 1024 * 1024

const readDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(new Error('read failed'))
    reader.onload = () => resolve(reader.result)
    reader.readAsDataURL(file)
  })

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image()
    img.onerror = () => reject(new Error('decode failed'))
    img.onload = () => resolve(img)
    img.src = src
  })

/*
  mode 'cover' crops to fill a box of `width` x `height` (a square for a
  profile photo, a wide rectangle for a banner); 'contain' keeps the
  whole image inside a square box with transparency (mascots); 'fit'
  keeps the whole image at its own shape, only scaled down to fit inside
  the box - for pictures whose framing is chosen afterwards in the
  adjust dialog (lib/imagePos.js), where cropping here first would throw
  away the part the person wanted.
*/
async function resizeStill(file, { width, height, mode }) {
  if (file.size > 12 * 1024 * 1024) throw new Error('That image is too large (max 12 MB).')
  const img = await loadImage(await readDataUrl(file))
  const canvas = document.createElement('canvas')
  if (mode === 'fit') {
    const scale = Math.min(1, width / img.width, height / img.height)
    canvas.width = Math.max(1, Math.round(img.width * scale))
    canvas.height = Math.max(1, Math.round(img.height * scale))
    canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height)
    return canvas.toDataURL('image/jpeg', 0.85)
  }
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (mode === 'cover') {
    const scale = Math.max(width / img.width, height / img.height)
    const w = img.width * scale
    const h = img.height * scale
    ctx.drawImage(img, (width - w) / 2, (height - h) / 2, w, h)
    return canvas.toDataURL('image/jpeg', 0.85)
  }
  const scale = Math.min(width / img.width, height / img.height)
  const w = img.width * scale
  const h = img.height * scale
  ctx.drawImage(img, (width - w) / 2, (height - h) / 2, w, h)
  return canvas.toDataURL('image/png')
}

/*
  The general picker: a still image comes back resized as a data URL: a
  GIF is written to IndexedDB under `blobKey` and comes back as the
  marker string `idb:<blobKey>` instead. Use this for anything that can
  be a large GIF - a profile picture, a banner.
*/
export async function pickImage(file, { width = 256, height = width, mode = 'cover', blobKey } = {}) {
  if (!file.type.startsWith('image/')) throw new Error('Pick an image file.')
  if (file.type === 'image/gif') {
    if (file.size > GIF_MAX) {
      throw new Error(`That GIF is too large - keep it under ${Math.round(GIF_MAX / 1024 / 1024)} MB.`)
    }
    if (!blobKey) throw new Error('This picture cannot be an animated GIF.')
    // A fresh key per upload, so replacing one GIF with another changes
    // the marker the profile stores - React (and the image cache in
    // AppProvider) only notice a change when the string changes. The
    // previous key is deleted by whoever stores the new marker.
    const key = `${blobKey}-${Date.now().toString(36)}`
    const ok = await putBlob(key, file)
    if (!ok) throw new Error("Couldn't save that GIF on this device - try a smaller one, or a still image.")
    return `idb:${key}`
  }
  return resizeStill(file, { width, height, mode })
}

/*
  The study buddy's picker - see MASCOT_GIF_MAX above for why this stays
  on the older, localStorage-only path instead of calling pickImage.
*/
export async function imageToDataUrl(file, { size = 256, mode = 'cover' } = {}) {
  if (!file.type.startsWith('image/')) throw new Error('Pick an image file.')
  if (file.type === 'image/gif') {
    if (file.size > MASCOT_GIF_MAX) {
      throw new Error(`That GIF is too large - keep it under ${Math.round(MASCOT_GIF_MAX / 1024 / 1024)} MB.`)
    }
    return readDataUrl(file)
  }
  return resizeStill(file, { width: size, height: size, mode })
}

/*
  A tiny thumbnail (for a friend code) from any usable image URL - GIFs
  give their first frame. WebP where the browser can encode it, since it
  is roughly half the bytes of JPEG at this size and a friend code has to
  fit inside one chat message; JPEG otherwise.
*/
async function tinyThumb(url, width, height, quality, pos) {
  if (!url) return null
  try {
    const img = await loadImage(url)
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    drawPositioned(canvas.getContext('2d'), img, width, height, pos)
    const webp = canvas.toDataURL('image/webp', quality)
    return webp.startsWith('data:image/webp') ? webp : canvas.toDataURL('image/jpeg', quality)
  } catch {
    return null
  }
}

/* Square, for the profile picture - framed the way you positioned it. */
export const thumbnailDataUrl = (url, pos, size = 40) => tinyThumb(url, size, size, 0.5, pos)

/* Wide, for the banner strip on a friend's card and leaderboard row. */
export const bannerThumbDataUrl = (url, pos) => tinyThumb(url, 96, 28, 0.3, pos)
