import { useRef, useState } from 'react'
import Icon from '@/components/ui/Icon'
import ImageAdjust from '@/components/ui/ImageAdjust'
import { pickImage } from '@/lib/image'
import { posStyle } from '@/lib/imagePos'

/*
  A profile picture: the person's photo (a GIF keeps moving), or failing
  that their initial on the accent. Used everywhere a person is shown -
  the dashboard banner, friend cards, the leaderboard - so they look the
  same everywhere. It is never a fallback to the study buddy: the buddy
  lives on its own card and is a character, not an identity photo.

  `pos` ({ x, y, zoom } - lib/imagePos.js) is how the photo sits in the
  circle; the same numbers render it identically at every size.

  Pass `editable` to make the circle itself the upload control - hovering
  (or focusing, for keyboard) shows "Change profile pic" over the photo,
  plus a small camera badge that stays visible so it reads on touch too.
  Picking a file opens the adjust dialog first (drag and zoom inside the
  real circle), then resizes/encodes it (lib/image.js - a GIF goes to
  IndexedDB and `onChange` gets a short marker for it, resolved back to a
  real URL by AppProvider) and hands `onChange(value, pos)` the result.
  With `onPosition`, a second badge re-opens the dialog for the picture
  already in place. A problem goes to `onError` instead of being
  swallowed.
*/
export default function Pfp({
  photo,
  pos,
  name,
  className = 'h-10 w-10',
  label,
  editable = false,
  blobKey = 'avatar',
  onChange,
  onPosition,
  onError,
}) {
  const fileRef = useRef(null)
  const [busy, setBusy] = useState(false)
  const [adjusting, setAdjusting] = useState(null) // { file, url } for a new pick, or { url } for the current photo
  const initial = (name || '').trim()[0]

  const face = photo ? (
    <img src={photo} alt="" draggable="false" className="h-full w-full" style={posStyle(pos)} />
  ) : (
    <span className="grid h-full w-full place-items-center" style={{ containerType: 'inline-size' }}>
      {initial ? (
        <span className="font-extrabold leading-none" style={{ fontSize: '42cqw' }}>
          {initial.toUpperCase()}
        </span>
      ) : (
        <Icon name="user" className="h-1/2 w-1/2" />
      )}
    </span>
  )

  if (!editable) {
    const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': 'true' }
    return (
      <span className={`inline-flex overflow-hidden rounded-full bg-brand text-on-brand ${className}`} {...a11y}>
        {face}
      </span>
    )
  }

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
      onChange?.(await pickImage(current.file, { width: 512, height: 512, mode: 'fit', blobKey }), nextPos)
    } catch (err) {
      onError?.(err.message || 'Could not read that image - try another.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <span className={`group relative inline-block ${className}`}>
      <span className="block h-full w-full overflow-hidden rounded-full bg-brand text-on-brand">{face}</span>
      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        disabled={busy}
        title={photo ? 'Change profile pic' : 'Add profile pic'}
        aria-label={photo ? 'Change profile picture' : 'Add a profile picture'}
        className="absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-full bg-black/0 text-center opacity-0 transition-[opacity,background-color] duration-150 focus:outline-none focus-visible:opacity-100 focus-visible:bg-black/55 group-hover:opacity-100 group-hover:bg-black/55 disabled:cursor-wait"
        style={{ containerType: 'inline-size' }}
      >
        <span className="text-white" style={{ width: '26cqw', height: '26cqw' }}>
          <Icon name={busy ? 'refresh' : 'camera'} className={`h-full w-full ${busy ? 'animate-spin' : ''}`} />
        </span>
        <span className="px-1 font-bold leading-tight text-white" style={{ fontSize: 'clamp(0.55rem, 13cqw, 0.8rem)' }}>
          {busy ? 'Uploading…' : photo ? 'Change profile pic' : 'Add profile pic'}
        </span>
      </button>
      {/* Always-visible badge - the hover overlay above is the desktop cue, this is the one a phone actually sees. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 grid place-items-center rounded-full border-2 border-surface bg-brand text-on-brand shadow"
        style={{ width: '30%', height: '30%', minWidth: '1.35rem', minHeight: '1.35rem' }}
      >
        <span style={{ width: '58%', height: '58%' }}>
          <Icon name="camera" className="h-full w-full" />
        </span>
      </span>
      {/* Reposition the picture that is already there. */}
      {photo && onPosition && (
        <button
          type="button"
          onClick={() => setAdjusting({ url: photo })}
          title="Adjust position"
          aria-label="Adjust how the picture is positioned"
          className="absolute bottom-0 left-0 grid place-items-center rounded-full border-2 border-surface bg-surface text-fg shadow transition-colors hover:bg-brand hover:text-on-brand"
          style={{ width: '30%', height: '30%', minWidth: '1.35rem', minHeight: '1.35rem' }}
        >
          <span style={{ width: '58%', height: '58%' }}>
            <Icon name="motion" className="h-full w-full" />
          </span>
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
          shape="circle"
          initial={adjusting.file ? null : pos}
          onCancel={closeAdjust}
          onSave={save}
        />
      )}
    </span>
  )
}
