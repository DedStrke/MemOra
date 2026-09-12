import { useRef, useState } from 'react'
import Icon from '@/components/ui/Icon'
import { MASCOTS, mascotImage } from '@/constants/mascots'
import { ACCENT_META, THEME_META } from '@/context/AppProvider'
import { imageToDataUrl } from '@/lib/image'

/*
  Choose a study buddy - Pochita, Chopper, Kon, or an image of your own.

  value / onChange carry { kind: 'builtin', id } or { kind: 'custom',
  dataUrl, name }. A custom image is resized to 256px (a GIF is kept as
  is, so it keeps moving) and stored as a data URL in the profile, which
  means it never leaves the device.

  Each built-in buddy has a recommended look (theme + accent) shown on
  its card; the sign-up page offers to apply it, and Settings lets you
  re-apply it any time.
*/

export function MascotFace({ mascot, className = 'h-16 w-16', label }) {
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': 'true' }
  const custom = mascot?.kind === 'custom' && mascot.dataUrl
  return (
    <span className={`inline-block ${custom ? 'overflow-hidden rounded-full' : ''} ${className}`} {...a11y}>
      <img
        src={mascotImage(mascot)}
        alt=""
        draggable="false"
        className={`h-full w-full ${custom ? 'object-cover' : 'object-contain'}`}
      />
    </span>
  )
}

/* A small theme + accent swatch, e.g. "Dark · Red". */
export function LookSwatch({ look, className = '' }) {
  if (!look) return null
  const themeBg = { light: '#ffffff', dark: '#0e1526', cream: '#fffaef', 'high-contrast': '#000' }[look.theme] || '#fff'
  return (
    <span className={`inline-flex items-center gap-1.5 whitespace-nowrap text-[0.68rem] font-semibold text-muted ${className}`}>
      <span className="inline-flex overflow-hidden rounded-full border border-line" aria-hidden="true">
        <span className="h-3 w-3" style={{ background: themeBg }} />
        <span className="h-3 w-3" style={{ background: ACCENT_META[look.accent]?.swatch }} />
      </span>
      {THEME_META[look.theme]?.label || look.theme} · {ACCENT_META[look.accent]?.label || look.accent}
    </span>
  )
}

export default function MascotPicker({ value, onChange, compact = false, showLook = true }) {
  const fileRef = useRef(null)
  const [error, setError] = useState(null)
  const selectedId = value?.kind === 'custom' ? 'custom' : value?.id || MASCOTS[0].id

  const pick = async (file) => {
    if (!file) return
    try {
      const dataUrl = await imageToDataUrl(file, { size: 256, mode: 'contain' })
      setError(null)
      onChange({ kind: 'custom', dataUrl, name: file.name.replace(/\.[^.]+$/, '') })
    } catch (e) {
      setError(e.message || 'Could not read that image.')
    }
  }

  const art = compact ? 'h-16 w-16' : 'h-24 w-24'

  return (
    <div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4" role="radiogroup" aria-label="Choose a study buddy">
        {MASCOTS.map((m) => {
          const on = selectedId === m.id
          return (
            <button
              key={m.id}
              type="button"
              role="radio"
              aria-checked={on}
              onClick={() => onChange({ kind: 'builtin', id: m.id })}
              className={`group flex flex-col items-center rounded-2xl border p-3 text-center transition-[border-color,background-color,transform] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                on ? 'border-brand bg-brand-soft' : 'border-line bg-surface hover:border-brand'
              }`}
            >
              <img
                src={m.image}
                alt=""
                draggable="false"
                className={`${art} object-contain transition-transform group-hover:scale-105 ${on ? 'scale-105' : ''}`}
              />
              <span className={`mt-1.5 text-sm font-bold ${on ? 'text-brand-strong' : 'text-fg'}`}>{m.name}</span>
              {!compact && <span className="mt-0.5 text-[0.7rem] leading-snug text-muted">{m.blurb}</span>}
              {showLook && <LookSwatch look={m.look} className="mt-1.5" />}
            </button>
          )
        })}
        <button
          type="button"
          role="radio"
          aria-checked={selectedId === 'custom'}
          onClick={() => fileRef.current?.click()}
          className={`flex flex-col items-center justify-center rounded-2xl border border-dashed p-3 text-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
            selectedId === 'custom' ? 'border-brand bg-brand-soft' : 'border-line bg-surface hover:border-brand'
          }`}
        >
          {value?.kind === 'custom' && value.dataUrl ? (
            <img src={value.dataUrl} alt="" className={`${art} rounded-full object-cover`} />
          ) : (
            <span className={`grid ${art} place-items-center rounded-full bg-page text-muted`}>
              <Icon name="camera" className="h-6 w-6" />
            </span>
          )}
          <span className={`mt-1.5 text-sm font-bold ${selectedId === 'custom' ? 'text-brand-strong' : 'text-fg'}`}>
            Your own
          </span>
          {!compact && <span className="mt-0.5 text-[0.7rem] leading-snug text-muted">Any image or GIF on this device</span>}
        </button>
      </div>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => pick(e.target.files?.[0])}
      />
      {error && <p className="mt-2 text-xs text-danger">{error}</p>}
    </div>
  )
}
