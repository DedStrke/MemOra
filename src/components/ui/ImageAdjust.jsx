import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import { DEFAULT_POS, normalisePos, posStyle } from '@/lib/imagePos'

/*
  Position a picture inside its frame - the step Discord puts between
  choosing a file and saving it. Drag to move, slide to zoom, and the
  preview is the real frame: the same circle the profile picture lives
  in, or the same wide strip the banner does, drawn with the exact CSS
  every other view uses (lib/imagePos.js), so there is no surprise
  afterwards.

  Works on the file just picked (before it is stored) and on the image
  already in place (the Adjust control), since "the banner is right, it
  just needs to sit higher" is the common case.
*/
export default function ImageAdjust({ src, shape = 'circle', initial, title, onCancel, onSave }) {
  const [pos, setPos] = useState(() => normalisePos(initial))
  const [natural, setNatural] = useState(null) // { w, h } of the picture
  const frameRef = useRef(null)
  const drag = useRef(null)

  useEffect(() => setPos(normalisePos(initial)), [initial, src])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onCancel()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onCancel])

  // How much the picture overflows the frame on each axis, in frame
  // pixels, at the current zoom - what a pixel of drag is worth.
  const overflow = () => {
    const el = frameRef.current
    if (!el || !natural) return { x: 0, y: 0 }
    const w = el.clientWidth
    const h = el.clientHeight
    const cover = Math.max(w / natural.w, h / natural.h) * pos.zoom
    return { x: Math.max(0, natural.w * cover - w), y: Math.max(0, natural.h * cover - h) }
  }

  const onPointerDown = (e) => {
    e.preventDefault()
    frameRef.current?.setPointerCapture(e.pointerId)
    drag.current = { x: e.clientX, y: e.clientY, start: pos, over: overflow() }
  }
  const onPointerMove = (e) => {
    if (!drag.current) return
    const { x, y, start, over } = drag.current
    const dx = e.clientX - x
    const dy = e.clientY - y
    setPos((p) => ({
      ...p,
      x: over.x ? Math.min(100, Math.max(0, start.x - (dx / over.x) * 100)) : p.x,
      y: over.y ? Math.min(100, Math.max(0, start.y - (dy / over.y) * 100)) : p.y,
    }))
  }
  const onPointerUp = (e) => {
    frameRef.current?.releasePointerCapture?.(e.pointerId)
    drag.current = null
  }

  const frameClass =
    shape === 'circle'
      ? 'mx-auto aspect-square w-56 sm:w-64'
      : 'aspect-[24/7] w-full'

  return (
    <AnimatePresence>
      <motion.div
        key="image-adjust"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        className="fixed inset-0 z-[80] grid place-items-center bg-black/60 p-4 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="image-adjust-title"
        onMouseDown={(e) => e.target === e.currentTarget && onCancel()}
      >
        <motion.div
          initial={{ y: 20, scale: 0.97, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 10, scale: 0.98, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          className="card w-full max-w-lg overflow-hidden"
        >
          <header className="flex items-start justify-between gap-3 px-6 pt-5">
            <div>
              <h2 id="image-adjust-title" className="text-lg font-extrabold text-fg">
                {title || (shape === 'circle' ? 'Position your picture' : 'Position your banner')}
              </h2>
              <p className="mt-0.5 text-sm text-muted">Drag to move. Slide to zoom. This is exactly how it will look.</p>
            </div>
            <button
              type="button"
              onClick={onCancel}
              aria-label="Close"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted hover:bg-brand-soft hover:text-fg"
            >
              <Icon name="x" className="h-5 w-5" />
            </button>
          </header>

          <div className="px-6 pt-5">
            <div className={`image-adjust-stage ${shape === 'circle' ? 'is-circle' : ''} relative select-none`}>
              <div
                ref={frameRef}
                className={`image-adjust-frame relative overflow-hidden ${
                  shape === 'circle' ? 'rounded-full' : 'rounded-2xl'
                } ${frameClass} cursor-grab active:cursor-grabbing`}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                style={{ touchAction: 'none' }}
              >
                <img
                  src={src}
                  alt=""
                  draggable="false"
                  onLoad={(e) => setNatural({ w: e.currentTarget.naturalWidth, h: e.currentTarget.naturalHeight })}
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  style={posStyle(pos)}
                />
                <span aria-hidden="true" className="image-adjust-grid pointer-events-none absolute inset-0" />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <Icon name="eye" className="h-4 w-4 shrink-0 text-muted" />
              <input
                type="range"
                min="1"
                max="3"
                step="0.01"
                value={pos.zoom}
                onChange={(e) => setPos((p) => ({ ...p, zoom: Number(e.target.value) }))}
                aria-label="Zoom"
                className="image-adjust-zoom w-full"
              />
              <span className="w-12 shrink-0 text-right text-xs font-bold tabular-nums text-muted">
                {Math.round(pos.zoom * 100)}%
              </span>
            </div>
          </div>

          <footer className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-line bg-surface/70 px-6 py-4">
            <button
              type="button"
              onClick={() => setPos(DEFAULT_POS)}
              className="text-xs font-semibold text-muted hover:text-fg"
            >
              Reset
            </button>
            <div className="flex gap-2">
              <Button variant="ghost" onClick={onCancel}>
                Cancel
              </Button>
              <Button onClick={() => onSave(pos)} autoFocus>
                <Icon name="check" className="h-4 w-4" />
                Apply
              </Button>
            </div>
          </footer>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
