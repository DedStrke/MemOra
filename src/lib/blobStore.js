/*
  A large personal image - a profile picture or a banner that happens to
  be a big GIF - does not belong in localStorage. That is one shared,
  few-megabyte slot per origin (5 MB on the tightest real browser,
  Safari), and it holds everything else the app has too: every session,
  every attempt, every friend. IndexedDB is the browser API actually
  meant for this - a personal image gets a share of free disk space
  instead of a few megabytes shared with the rest of the app's data.

  This is a tiny key/value wrapper over one object store, one row per
  key ('avatar-<id>', 'banner-<id>' - lib/image.js). Values are stored as the File/Blob
  exactly as picked - no base64 (which would waste ~33% of the size for
  nothing) and no resizing (a GIF has to stay exactly as uploaded to
  keep animating). lib/image.js decides what goes here versus what stays
  a small inline data URL; AppProvider resolves a stored key back into a
  real, viewable URL.

  Every function fails soft: private browsing or a browser without
  IndexedDB gets `null`/a silent no-op rather than a thrown error, the
  same way localStorage access is guarded elsewhere in this app.
*/

const DB_NAME = 'memora-images'
const STORE = 'images'
const VERSION = 1

let dbPromise = null

function openDb() {
  if (typeof indexedDB === 'undefined') return Promise.resolve(null)
  if (!dbPromise) {
    dbPromise = new Promise((resolve) => {
      try {
        const req = indexedDB.open(DB_NAME, VERSION)
        req.onupgradeneeded = () => {
          if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE)
        }
        req.onsuccess = () => resolve(req.result)
        req.onerror = () => resolve(null)
      } catch {
        resolve(null)
      }
    })
  }
  return dbPromise
}

export async function putBlob(key, blob) {
  const db = await openDb()
  if (!db) return false
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE, 'readwrite')
      tx.objectStore(STORE).put(blob, key)
      tx.oncomplete = () => resolve(true)
      tx.onerror = () => resolve(false)
    } catch {
      resolve(false)
    }
  })
}

export async function getBlob(key) {
  const db = await openDb()
  if (!db) return null
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE, 'readonly')
      const req = tx.objectStore(STORE).get(key)
      req.onsuccess = () => resolve(req.result || null)
      req.onerror = () => resolve(null)
    } catch {
      resolve(null)
    }
  })
}

export async function deleteBlob(key) {
  const db = await openDb()
  if (!db) return
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE, 'readwrite')
      tx.objectStore(STORE).delete(key)
      tx.oncomplete = () => resolve()
      tx.onerror = () => resolve()
    } catch {
      resolve()
    }
  })
}
