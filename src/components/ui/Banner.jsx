import { useRef, useState } from 'react'
import Icon from '@/components/ui/Icon'
import ImageAdjust from '@/components/ui/ImageAdjust'
import { pickImage } from '@/lib/image'
import { posStyle } from '@/lib/imagePos'

/*
  A profile banner: the wide strip behind a name on the dashboard, the
  friends page and settings. With no picture set it's a plain gradient
  built from the active brand colour, so it always matches your theme
  and accent rather than a fixed palette. Pass `src` - a photo, or a GIF
  that keeps moving - to replace that with your own image, and `pos`
  ({ x, y, zoom } - lib/imagePos.js) for how it sits in the strip.

  Pass `editable` to make the strip itself the upload control, the same
  pattern as Pfp: hover shows "Change banner" (or "Add a banner" over
  the default) with a camera icon, plus a small badge that stays visible
  so it reads on touch too. A new file opens the adjust dialog first -
  drag it to where you want it, zoom in if you like - and `onChange`
  gets (value, pos). With `onPosition`, an Adjust button re-opens the
  dialog for the banner already in place.
*/
export default function Banner({
  src,
  pos,
  editable = false,
  blobKey = 'banner',
  onChange,
  onPosition,
  onError,
  className = '',
  children,
}) {
  const fileRef = useRef(null)
  const [busy, setBusy] = useState(false)
  const [adjusting, setAdjusting] = useState(null) // { file, url } for a new pick, or { url } for the current banner

  const chooseFile = (file) => {
    if (!file) return
    if (!file.type.startsWith('image/')) {
      onError?.('Pick an image file.')
      return
    }
    setAdjusting({ file, url: URL.createObjectURL(file) })
  }

  const closeAdjust = () => {
    if (adjusting?.file) URL.revokeObjectURL(adjusting.url)
    setAdjusting(null)
  }

  const save = async (nextPos) => {
    const current = adjusting
    closeAdjust()
    if (!current) return
    if (!current.file) {
      onPosition?.(nextPos)
      return
    }
    setBusy(true)
    try {
      onChange?.(await pickImage(current.file, { width: 1200, height: 800, mode: 'fit', blobKey }), nextPos)
    } catch (err) {
      onError?.(err.message || 'Could not read that image - try another.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className={`profile-banner relative overflow-hidden ${className}`}>
      {src ? (
        <img src={src} alt="" draggable="false" className="absolute inset-0 h-full w-full" style={posStyle(pos)} />
      ) : (
        <>
          <span aria-hidden="true" className="profile-banner-default absolute inset-0" />
          <span aria-hidden="true" className="profile-banner-weave" />
        </>
      )}
      {children}
      {editable && (
        <>
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            disabled={busy}
            title={src ? 'Change banner' : 'Add a banner'}
            aria-label={src ? 'Change banner image' : 'Add a banner image'}
            className="absolute inset-0 flex items-center justify-center gap-2 bg-black/0 text-sm font-bold text-white opacity-0 transition-[opacity,background-color] duration-150 focus:outline-none focus-visible:opacity-100 focus-visible:bg-black/45 hover:opacity-100 hover:bg-black/45 disabled:cursor-wait"
          >
            <Icon name={busy ? 'refresh' : 'camera'} className={`h-4 w-4 ${busy ? 'animate-spin' : ''}`} />
            {busy ? 'Uploading…' : src ? 'Change banner' : 'Add a banner'}
          </button>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-2 right-2 grid h-6 w-6 place-items-center rounded-full border-2 border-surface bg-brand text-on-brand shadow"
          >
            <Icon name="camera" className="h-3 w-3" />
          </span>
          {src && onPosition && (
            <button
              type="button"
              onClick={() => setAdjusting({ url: src })}
              title="Adjust position"
              aria-label="Adjust how the banner is positioned"
              className="absolute bottom-2 left-2 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/45 px-2.5 py-1 text-[0.68rem] font-bold text-white shadow backdrop-blur-sm transition-colors hover:bg-black/65"
            >
              <Icon name="motion" className="h-3 w-3" />
              Adjust
            </button>
          )}
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0]
              e.target.value = ''
              chooseFile(file)
            }}
          />
          {adjusting && (
            <ImageAdjust
              src={adjusting.url}
              shape="banner"
              initial={adjusting.file ? null : pos}
              onCancel={closeAdjust}
              onSave={save}
            />
          )}
        </>
      )}
    </div>
  )
}
