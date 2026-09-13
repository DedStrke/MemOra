import { useEffect, useRef, useState } from 'react'
import Icon from '@/components/ui/Icon'
import Buddy from '@/components/ui/Buddy'
import { MascotFace } from '@/components/ui/MascotPicker'
import { useApp } from '@/context/AppProvider'
import {
  spotifyConfigured,
  beginSpotifyLogin,
  finishSpotifyLogin,
  spotifyAccessToken,
  spotifyLogout,
  fetchMyPlaylists,
  fetchNowPlaying,
} from '@/lib/spotify'

/*
  A Spotify player in the corner of every app page - YOUR Spotify.

  The embed is created through Spotify's iFrame API rather than a bare
  <iframe>, which gives us play/pause events, and the panel is HIDDEN when
  minimised rather than unmounted, so the music keeps going and the pill
  can say what is playing. What the pill can know:

    - always: whether the embed is playing or paused, and the name of the
      playlist/album (Spotify's public oEmbed, no key)
    - with the account connected (VITE_SPOTIFY_CLIENT_ID + a PKCE login,
      see lib/spotify.js): the actual track and artist, polled read-only
      from the account every ten seconds while something plays

  Two ways to get your own music in: sign in to Spotify in this browser
  (the embed then plays full tracks from your account, and any playlist
  link you paste plays in full), or connect the account to pick from your
  playlists by name. Tokens stay in this browser; nothing goes through any
  server of ours. Open state, chosen playlist and saved playlists survive
  reloads through localStorage; the audio itself does not.
*/

const STORAGE = 'memora:music'
const DEFAULTS = [
  { label: 'Lofi beats', uri: 'playlist/37i9dQZF1DWWQRwui0ExPn' },
  { label: 'Deep focus', uri: 'playlist/37i9dQZF1DWZeKCadgRdKQ' },
  { label: 'Peaceful piano', uri: 'playlist/37i9dQZF1DX4sWSpwq3LiO' },
]

// open.spotify.com/playlist/<id>?..., spotify:playlist:<id>, or a bare id.
export function parseSpotify(input) {
  const s = input.trim()
  let m = s.match(/open\.spotify\.com\/(?:intl-[a-z]+\/)?(playlist|album|track|episode|show)\/([A-Za-z0-9]+)/)
  if (m) return `${m[1]}/${m[2]}`
  m = s.match(/^spotify:(playlist|album|track|episode|show):([A-Za-z0-9]+)$/)
  if (m) return `${m[1]}/${m[2]}`
  m = s.match(/^([A-Za-z0-9]{22})$/)
  if (m) return `playlist/${m[1]}`
  return null
}

const toSpotifyUri = (uri) => `spotify:${uri.replace('/', ':')}`

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE) || '{}')
    return {
      open: Boolean(raw.open),
      uri: typeof raw.uri === 'string' ? raw.uri : DEFAULTS[0].uri,
      saved: Array.isArray(raw.saved) ? raw.saved.filter((x) => x && typeof x.uri === 'string') : [],
    }
  } catch {
    return { open: false, uri: DEFAULTS[0].uri, saved: [] }
  }
}

// Title and cover for a Spotify link, from the public oEmbed endpoint.
async function lookup(uri) {
  try {
    const res = await fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(`https://open.spotify.com/${uri}`)}`)
    if (!res.ok) throw new Error(String(res.status))
    const j = await res.json()
    return { title: j.title || uri, thumb: j.thumbnail_url || null }
  } catch {
    return { title: uri.split('/')[1], thumb: null }
  }
}

// One shared load of Spotify's iFrame API script.
let apiPromise = null
function loadIframeApi() {
  if (apiPromise) return apiPromise
  apiPromise = new Promise((resolve, reject) => {
    if (window.__spotifyIFrameAPI) return resolve(window.__spotifyIFrameAPI)
    window.onSpotifyIframeApiReady = (api) => {
      window.__spotifyIFrameAPI = api
      resolve(api)
    }
    const s = document.createElement('script')
    s.src = 'https://open.spotify.com/embed/iframe-api/v1'
    s.async = true
    s.onerror = () => reject(new Error('Spotify player failed to load'))
    document.head.appendChild(s)
  })
  return apiPromise
}

const titleOf = (uri, saved) =>
  DEFAULTS.find((d) => d.uri === uri)?.label || saved.find((x) => x.uri === uri)?.title || null

const EMBED_HEIGHT = 352

// Three bouncing bars - the universal "something is playing" glyph.
function Equaliser() {
  return (
    <span aria-hidden="true" className="music-eq">
      <span />
      <span />
      <span />
    </span>
  )
}

export default function FocusMusic() {
  const { user } = useApp()
  const [state, setState] = useState(load)
  const [draft, setDraft] = useState('')
  const [error, setError] = useState(null)
  const [busy, setBusy] = useState(false)
  const [connected, setConnected] = useState(() => Boolean(spotifyAccessToken()))
  const [connectBusy, setConnectBusy] = useState(false)
  const [mine, setMine] = useState(null)
  const [mineError, setMineError] = useState(null)
  const [playing, setPlaying] = useState(false)
  const [titles, setTitles] = useState({}) // uri -> { title, thumb } from oEmbed
  const [track, setTrack] = useState(null) // { title, artist } from the account
  const [embedFailed, setEmbedFailed] = useState(false)
  const mountRef = useRef(null)
  const controllerRef = useRef(null)
  const panelBodyRef = useRef(null)
  // Whether the panel's content genuinely needs to scroll - measured
  // rather than assumed. A plain CSS "overflow-y: auto" on a box that
  // sizes itself to its own content is notorious for reporting a
  // scrollHeight one pixel taller than clientHeight (sub-pixel rounding
  // in the layout of fractional icon/text sizes, not real overflow),
  // which shows a spurious scrollbar on Windows even though nothing is
  // actually cut off. Tolerating a few pixels of slack before turning
  // scrolling on avoids that, while still giving real access to
  // everything on a genuinely short screen or a long saved-playlist
  // list, where the shortfall is real.
  const [scrollable, setScrollable] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE, JSON.stringify(state))
    } catch {
      /* private mode - nothing to do */
    }
  }, [state])

  // Build the embed once; swap its uri when the choice changes.
  useEffect(() => {
    let cancelled = false
    loadIframeApi()
      .then((api) => {
        if (cancelled || !mountRef.current || controllerRef.current) return
        const el = document.createElement('div')
        mountRef.current.replaceChildren(el)
        api.createController(el, { uri: toSpotifyUri(state.uri), width: '100%', height: EMBED_HEIGHT }, (ctrl) => {
          controllerRef.current = ctrl
          ctrl.addListener('playback_update', (e) => setPlaying(!e.data.isPaused))
        })
      })
      .catch(() => setEmbedFailed(true))
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    controllerRef.current?.loadUri(toSpotifyUri(state.uri))
    setTrack(null)
  }, [state.uri])

  // Re-measure whenever the panel's own content resizes (playlists
  // loading in, the saved list growing, an error message appearing) or
  // the window does. A 4px tolerance absorbs the sub-pixel rounding
  // case above while still catching real overflow.
  useEffect(() => {
    const el = panelBodyRef.current
    if (!el) return
    const measure = () => setScrollable(el.scrollHeight - el.clientHeight > 4)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  // Name and cover for whatever is loaded, for the pill and the header.
  useEffect(() => {
    if (titles[state.uri]) return
    let cancelled = false
    lookup(state.uri).then((m) => !cancelled && setTitles((t) => ({ ...t, [state.uri]: m })))
    return () => {
      cancelled = true
    }
  }, [state.uri, titles])

  // Account: finish a login round trip, list playlists, poll now-playing.
  useEffect(() => {
    if (!spotifyConfigured()) return
    finishSpotifyLogin().then((result) => {
      if (result === true) {
        setConnected(true)
        setState((s) => ({ ...s, open: true }))
      } else if (typeof result === 'string') {
        // The exchange failed - say why, with the panel open, instead of
        // silently showing Connect again.
        setError(result)
        setState((s) => ({ ...s, open: true }))
      }
    })
  }, [])

  useEffect(() => {
    if (!connected || mine) return
    let cancelled = false
    fetchMyPlaylists()
      .then((list) => !cancelled && setMine(list))
      .catch((e) => {
        if (cancelled) return
        setMineError(e.message)
        if (/401|403/.test(e.message)) {
          spotifyLogout()
          setConnected(false)
        }
      })
    return () => {
      cancelled = true
    }
  }, [connected, mine])

  useEffect(() => {
    if (!connected) return
    let cancelled = false
    const tick = () => fetchNowPlaying().then((np) => !cancelled && setTrack(np)).catch(() => {})
    tick()
    const t = setInterval(tick, 10000)
    return () => {
      cancelled = true
      clearInterval(t)
    }
  }, [connected])

  const submit = async (e) => {
    e.preventDefault()
    const uri = parseSpotify(draft)
    if (!uri) {
      setError('Paste a Spotify link - a playlist, album, track or podcast. In Spotify: ⋯ → Share → Copy link.')
      return
    }
    setError(null)
    setBusy(true)
    const meta = await lookup(uri)
    setBusy(false)
    setDraft('')
    setState((s) => ({
      ...s,
      uri,
      saved: [{ uri, title: meta.title, thumb: meta.thumb }, ...s.saved.filter((x) => x.uri !== uri)].slice(0, 12),
    }))
  }

  const forget = (uri) => setState((s) => ({ ...s, saved: s.saved.filter((x) => x.uri !== uri) }))
  const play = (uri) => setState((s) => ({ ...s, uri }))
  const toggle = () => controllerRef.current?.togglePlay()

  const currentTitle = titleOf(state.uri, state.saved) || titles[state.uri]?.title || 'Spotify'
  const currentThumb = track?.thumb || state.saved.find((x) => x.uri === state.uri)?.thumb || titles[state.uri]?.thumb || null
  const nowLine = track?.title ? track.title : currentTitle
  const subLine = track?.title ? track.artist : playing ? 'Playing' : 'Paused'

  return (
    <div className="fixed bottom-4 right-4 z-[55] flex flex-col items-end gap-2 print:hidden">
      {/* The panel stays mounted so the embed keeps playing when minimised. */}
      <div
        className={`music-panel w-[min(30rem,calc(100vw-2rem))] overflow-hidden rounded-3xl border border-line bg-surface transition-[opacity,transform] duration-200 ${
          state.open ? 'opacity-100' : 'pointer-events-none absolute -z-10 h-0 max-h-0 opacity-0'
        }`}
        aria-hidden={!state.open}
      >
        {/* A single scroll container for the whole panel, capped well
            below the viewport height. Splitting the panel into its own
            scroll box per-section (the account list used to be its own
            "min-h-0 overflow-y-auto" box) meant a 1px content/box
            rounding mismatch showed a scrollbar on a section that had
            plenty of room in the panel overall - it looked like a bug
            because it was one. One scroll container for hero+embed+
            account means it only ever scrolls when the WHOLE panel
            genuinely can't fit (a very short viewport), and everything
            scrolls together rather than being boxed separately. */}
        <div ref={panelBodyRef} className={`flex max-h-[min(92vh,58rem)] flex-col ${scrollable ? 'overflow-y-auto' : 'overflow-y-hidden'}`}>
          {/* A slim bar tinted by the cover art. Spotify's own embed below
              already shows the cover, the title and the controls, so this
              deliberately repeats none of them. */}
          <div className="music-hero relative overflow-hidden px-3 py-2">
            {currentThumb && <img src={currentThumb} alt="" aria-hidden="true" className="music-hero-bg" />}
            <span aria-hidden="true" className="music-hero-scrim absolute inset-0" />
            <div className="relative flex items-center justify-between gap-2">
              <p className="flex min-w-0 items-center gap-1.5 text-[0.66rem] font-extrabold uppercase tracking-[0.14em] text-white/85">
                <MascotFace mascot={user.mascot} className="h-4 w-4 shrink-0" />
                <span className="truncate">Your music</span>
                {playing && <Equaliser />}
              </p>
              <div className="flex items-center gap-1">
                <a
                  href={`https://open.spotify.com/${state.uri}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/15 px-2.5 py-1 text-[0.68rem] font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                >
                  Open in Spotify
                </a>
                <button
                  type="button"
                  onClick={() => setState((s) => ({ ...s, open: false }))}
                  className="grid h-7 w-7 place-items-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                  aria-label="Minimise music player"
                >
                  <Icon name="chevronDown" className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div ref={mountRef} className="shrink-0 bg-page" style={{ minHeight: EMBED_HEIGHT }} />
          {embedFailed && (
            <p className="px-3 py-2 text-[0.7rem] text-danger">
              The Spotify player could not load - an ad blocker may be stopping it.
            </p>
          )}

          <div className="border-t border-line px-3 py-2.5">
            {/* Account */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-[0.68rem] font-bold uppercase tracking-wide text-muted">Your account</p>
              {spotifyConfigured() ? (
                connected ? (
                  <button
                    type="button"
                    onClick={() => {
                      spotifyLogout()
                      setConnected(false)
                      setMine(null)
                      setTrack(null)
                    }}
                    className="text-[0.7rem] font-semibold text-muted hover:text-fg"
                  >
                    Disconnect
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={connectBusy}
                    onClick={async () => {
                      setError(null)
                      setConnectBusy(true)
                      try {
                        await beginSpotifyLogin()
                      } catch {
                        setError('Could not open Spotify login - allow cookies/site storage for this site, then try again.')
                      } finally {
                        setConnectBusy(false)
                      }
                    }}
                    className="rounded-full bg-brand px-2.5 py-1 text-[0.7rem] font-bold text-on-brand hover:opacity-90 disabled:opacity-60"
                  >
                    {connectBusy ? 'Opening…' : 'Connect Spotify'}
                  </button>
                )
              ) : (
                <a
                  href="https://accounts.spotify.com/login"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-brand px-2.5 py-1 text-[0.7rem] font-bold text-on-brand hover:opacity-90"
                >
                  Sign in to Spotify
                </a>
              )}
            </div>
            <p className="mt-1 text-[0.68rem] leading-snug text-muted">
              {connected
                ? 'Connected - pick one of your playlists below. The minimised pill shows the track playing on your account.'
                : 'Signed in to Spotify in this browser, the player uses your account and plays full tracks; otherwise 30-second previews. Paste any of your playlists below.'}
            </p>

            {connected && (
              <div className="mt-2">
                {mineError && <p className="text-[0.7rem] text-danger">{mineError}</p>}
                {!mine && !mineError && <p className="text-[0.7rem] text-muted">Loading your playlists…</p>}
                {mine && mine.length === 0 && <p className="text-[0.7rem] text-muted">No playlists on this account yet.</p>}
                {mine && mine.length > 0 && (
                  <ul className="mt-1 max-h-40 space-y-1 overflow-y-auto pr-1">
                    {mine.map((pl) => (
                      <li key={pl.uri}>
                        <button
                          type="button"
                          onClick={() => play(pl.uri)}
                          className={`flex w-full items-center gap-2 rounded-lg px-1.5 py-1 text-left text-xs hover:bg-brand-soft ${
                            state.uri === pl.uri ? 'bg-brand-soft font-bold text-brand-strong' : 'text-fg'
                          }`}
                        >
                          {pl.thumb ? (
                            <img src={pl.thumb} alt="" className="h-7 w-7 shrink-0 rounded object-cover" />
                          ) : (
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-line">
                              <Icon name="music" className="h-3.5 w-3.5 text-muted" />
                            </span>
                          )}
                          <span className="min-w-0 flex-1 truncate">{pl.title}</span>
                          <span className="shrink-0 text-[0.65rem] text-muted">{pl.tracks}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {state.saved.length > 0 && (
              <div className="mt-3">
                <p className="text-[0.68rem] font-bold uppercase tracking-wide text-muted">Saved</p>
                <ul className="mt-1 space-y-1">
                  {state.saved.map((pl) => (
                    <li key={pl.uri} className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => play(pl.uri)}
                        className={`flex min-w-0 flex-1 items-center gap-2 rounded-lg px-1.5 py-1 text-left text-xs hover:bg-brand-soft ${
                          state.uri === pl.uri ? 'bg-brand-soft font-bold text-brand-strong' : 'text-fg'
                        }`}
                      >
                        {pl.thumb ? (
                          <img src={pl.thumb} alt="" className="h-7 w-7 shrink-0 rounded object-cover" />
                        ) : (
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-line">
                            <Icon name="music" className="h-3.5 w-3.5 text-muted" />
                          </span>
                        )}
                        <span className="truncate">{pl.title}</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => forget(pl.uri)}
                        className="rounded-full p-1 text-muted hover:text-danger"
                        aria-label={`Remove ${pl.title}`}
                      >
                        <Icon name="x" className="h-3.5 w-3.5" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <form onSubmit={submit} className="mt-3 flex gap-1.5">
              <input
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Paste a Spotify link"
                aria-label="Spotify link"
                className="min-w-0 flex-1 rounded-lg border border-line bg-page px-2.5 py-1.5 text-xs text-fg placeholder:text-muted focus:border-brand focus:outline-none"
              />
              <button
                type="submit"
                disabled={busy}
                className="rounded-lg bg-brand px-3 py-1.5 text-xs font-bold text-on-brand hover:opacity-90 disabled:opacity-60"
              >
                {busy ? '…' : 'Add'}
              </button>
            </form>
            {error && <p className="mt-1 text-[0.7rem] text-danger">{error}</p>}

            <div className="mt-3">
              <p className="text-[0.68rem] font-bold uppercase tracking-wide text-muted">Or a study playlist</p>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {DEFAULTS.map((d) => (
                  <button
                    key={d.uri}
                    type="button"
                    onClick={() => play(d.uri)}
                    className={`rounded-full border px-2.5 py-0.5 text-[0.7rem] font-semibold ${
                      state.uri === d.uri ? 'border-brand bg-brand text-on-brand' : 'border-line text-fg hover:border-brand'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* The buddy shows up here too - a tap gets a word while the music plays. */}
            <div className="mt-4 flex items-center gap-2.5 border-t border-line pt-3">
              <div className="h-9 w-9 shrink-0">
                <Buddy mascot={user.mascot} className="h-full w-full" bubbleSide="right" />
              </div>
              <p className="text-[0.68rem] leading-snug text-muted">Tap your buddy for a word while this plays.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Minimised pill: the cover, what is playing, and a play/pause
          without opening. Sized so the artwork is actually recognisable
          rather than a 40px smudge. */}
      {!state.open && (
        <div className="music-pill relative flex w-[min(24rem,calc(100vw-2rem))] items-center gap-2 overflow-hidden rounded-2xl border border-line p-2">
          {currentThumb && <img src={currentThumb} alt="" aria-hidden="true" className="music-pill-bg" />}
          <span aria-hidden="true" className="music-pill-scrim absolute inset-0" />
          <button
            type="button"
            onClick={() => setState((s) => ({ ...s, open: true }))}
            className="relative flex min-w-0 flex-1 items-center gap-3 rounded-xl py-0.5 pl-0.5 pr-2 text-left"
            aria-label="Open music player"
          >
            {currentThumb ? (
              <img
                src={currentThumb}
                alt=""
                className={`h-14 w-14 shrink-0 rounded-xl object-cover shadow-md ${playing ? 'music-spin-glow' : ''}`}
              />
            ) : (
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-soft">
                <Icon name="music" className="h-5 w-5 text-brand-strong" />
              </span>
            )}
            <span className="min-w-0 overflow-hidden">
              <span className={`music-pill-title block truncate text-sm font-extrabold ${playing && nowLine.length > 26 ? 'music-scroll' : ''}`}>
                {nowLine}
              </span>
              <span className="music-pill-sub flex items-center gap-1.5 truncate text-xs font-semibold">
                {playing && <Equaliser />}
                {subLine}
                {track?.title ? (track.playing ? ' · playing' : ' · paused') : ''}
              </span>
            </span>
          </button>
          <button
            type="button"
            onClick={toggle}
            className="music-pill-play relative grid h-11 w-11 shrink-0 place-items-center rounded-full shadow-md transition-transform hover:scale-105"
            aria-label={playing ? 'Pause' : 'Play'}
          >
            <Icon name={playing ? 'pause' : 'play'} className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  )
}
