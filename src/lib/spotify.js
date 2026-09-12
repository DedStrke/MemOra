/*
  Spotify account connection - Authorization Code with PKCE, entirely in
  the browser.

  PKCE is the flow Spotify recommends for apps with no server: there is no
  client secret, the code verifier lives in sessionStorage for the length
  of the round trip, and the resulting token is stored in localStorage on
  this device only. Nothing about the account touches any server of ours.

  It needs a Spotify "app" (a client id) from developer.spotify.com, with
  this site's origin registered as a redirect URI - the site's origin plus
  "/" for production and "http://localhost:5173/" for dev. Put the id in
  VITE_SPOTIFY_CLIENT_ID. Until it is set, spotifyConfigured() is false
  and the player offers the sign-in link instead of the connect button;
  everything else keeps working.

  Scopes: the two playlist-read scopes to list playlists, and the two
  read-only playback scopes so the minimised player can show the track
  that is actually playing on the account. Playback itself stays inside
  Spotify's embed, which uses the browser's own Spotify login.
*/

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID || ''
const TOKEN_KEY = 'memora:spotify:token'
const VERIFIER_KEY = 'memora:spotify:verifier'
const SCOPES = 'playlist-read-private playlist-read-collaborative user-read-currently-playing user-read-playback-state'

export const spotifyConfigured = () => Boolean(CLIENT_ID)

const redirectUri = () => `${window.location.origin}/`

const b64url = (bytes) =>
  btoa(String.fromCharCode(...new Uint8Array(bytes)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')

const randomVerifier = () => {
  const bytes = new Uint8Array(64)
  crypto.getRandomValues(bytes)
  return b64url(bytes)
}

const challengeFor = async (verifier) =>
  b64url(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier)))

function readToken() {
  try {
    const t = JSON.parse(localStorage.getItem(TOKEN_KEY) || 'null')
    if (!t || !t.access_token) return null
    if (t.expires_at && Date.now() > t.expires_at) return t.refresh_token ? t : null
    return t
  } catch {
    return null
  }
}

function writeToken(t) {
  try {
    localStorage.setItem(
      TOKEN_KEY,
      JSON.stringify({ ...t, expires_at: Date.now() + (t.expires_in || 3600) * 1000 - 30000 }),
    )
  } catch {
    /* private mode */
  }
}

export const spotifyAccessToken = () => readToken()?.access_token || null

export function spotifyLogout() {
  try {
    localStorage.removeItem(TOKEN_KEY)
  } catch {
    /* ignore */
  }
}

/* Send the browser to Spotify's consent page. Returns to redirectUri(). */
export async function beginSpotifyLogin() {
  if (!CLIENT_ID) return
  const verifier = randomVerifier()
  sessionStorage.setItem(VERIFIER_KEY, verifier)
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    response_type: 'code',
    redirect_uri: redirectUri(),
    scope: SCOPES,
    code_challenge_method: 'S256',
    code_challenge: await challengeFor(verifier),
    state: 'memora-music',
  })
  window.location.assign(`https://accounts.spotify.com/authorize?${params}`)
}

/*
  Call on every load. If the URL carries Spotify's ?code=..., exchange it
  for a token and strip the query so a refresh does not repeat it. Returns
  true when a token was just obtained.
*/
export async function finishSpotifyLogin() {
  const url = new URL(window.location.href)
  const code = url.searchParams.get('code')
  const state = url.searchParams.get('state')
  if (!code || state !== 'memora-music') return false
  const verifier = sessionStorage.getItem(VERIFIER_KEY)
  url.searchParams.delete('code')
  url.searchParams.delete('state')
  window.history.replaceState({}, '', url.pathname + (url.search || '') + url.hash)
  if (!verifier || !CLIENT_ID) return false
  sessionStorage.removeItem(VERIFIER_KEY)
  const body = new URLSearchParams({
    client_id: CLIENT_ID,
    grant_type: 'authorization_code',
    code,
    redirect_uri: redirectUri(),
    code_verifier: verifier,
  })
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
  if (!res.ok) return false
  writeToken(await res.json())
  return true
}

async function refreshIfNeeded() {
  const t = readToken()
  if (!t) return null
  if (Date.now() < (t.expires_at || 0)) return t.access_token
  if (!t.refresh_token) return null
  const body = new URLSearchParams({
    client_id: CLIENT_ID,
    grant_type: 'refresh_token',
    refresh_token: t.refresh_token,
  })
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })
  if (!res.ok) return null
  const next = await res.json()
  writeToken({ ...next, refresh_token: next.refresh_token || t.refresh_token })
  return next.access_token
}

/* The connected account's playlists, newest first, as { uri, title, thumb, tracks }. */
export async function fetchMyPlaylists() {
  const token = await refreshIfNeeded()
  if (!token) throw new Error('401 not connected')
  const out = []
  let next = 'https://api.spotify.com/v1/me/playlists?limit=50'
  while (next && out.length < 200) {
    const res = await fetch(next, { headers: { Authorization: `Bearer ${token}` } })
    if (!res.ok) throw new Error(`${res.status} could not load playlists`)
    const j = await res.json()
    for (const p of j.items || []) {
      if (!p) continue
      out.push({
        uri: `playlist/${p.id}`,
        title: p.name,
        thumb: p.images?.[p.images.length - 1]?.url || null,
        tracks: p.tracks?.total ?? '',
      })
    }
    next = j.next
  }
  return out
}

/*
  What the account is playing right now, on any device - null when nothing
  is, or when not connected. Read-only; polled by the player while open.
*/
export async function fetchNowPlaying() {
  const token = await refreshIfNeeded()
  if (!token) return null
  const res = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (res.status === 204 || !res.ok) return null
  const j = await res.json()
  if (!j?.item) return null
  return {
    title: j.item.name,
    artist: (j.item.artists || []).map((a) => a.name).join(', ') || j.item.show?.name || '',
    playing: Boolean(j.is_playing),
    thumb: j.item.album?.images?.[j.item.album.images.length - 1]?.url || null,
  }
}
