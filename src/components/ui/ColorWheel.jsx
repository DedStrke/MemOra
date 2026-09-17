import { useEffect, useMemo, useRef, useState } from 'react'
import { hexToHsl, hslToHex, isValidHex, normaliseHex } from '@/lib/color'

const SIZE = 176
const RADIUS = SIZE / 2

// Fills the wheel canvas for the given lightness - hue is the angle, distance
// from centre is saturation. Drawn once per lightness change (a drag on the
// lightness bar), never per pointer-move on the wheel itself.
function paintWheel(canvas, l) {
  const ctx = canvas.getContext('2d')
  const img = ctx.createImageData(SIZE, SIZE)
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const dx = x - RADIUS
      const dy = y - RADIUS
      const dist = Math.sqrt(dx * dx + dy * dy)
      const i = (y * SIZE + x) * 4
      if (dist > RADIUS) {
        img.data[i + 3] = 0
        continue
      }
      const h = (Math.atan2(dy, dx) * 180) / Math.PI + 180
      const s = Math.min(100, (dist / RADIUS) * 100)
      const { r, g, b } = hslToRgbFast(h, s, l)
      img.data[i] = r
      img.data[i + 1] = g
      img.data[i + 2] = b
      img.data[i + 3] = 255
    }
  }
  ctx.putImageData(img, 0, 0)
}

// Inlined rather than importing hslToRgb from lib/color: that one returns
// float components meant for hex rounding, this needs 65536 calls to stay
// smooth, so it skips the intermediate object allocations.
function hslToRgbFast(h, s, l) {
  s /= 100
  l /= 100
  const k = (n) => (n + h / 30) % 12
  const a = s * Math.min(l, 1 - l)
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, 9 - k(n), 1))
  return { r: Math.round(f(0) * 255), g: Math.round(f(8) * 255), b: Math.round(f(4) * 255) }
}

/*
  A hue/saturation wheel (angle = hue, radius = saturation) plus a vertical
  lightness bar, the way most native OS and design-tool colour pickers lay
  it out - see the reference screenshot this was built against. The hex
  field below is the fully keyboard-operable path to any colour; the wheel
  and bar are the fast, visual one.

  Uncontrolled during a drag for a responsive feel (dragging updates local
  state every pointermove), committed to the parent via onChange at most
  once per animation frame and again on pointer-up - never on every single
  move event, which would otherwise fire a localStorage write per pixel.
*/
export default function ColorWheel({ value, onChange }) {
  const initial = useMemo(() => hexToHsl(value) || { h: 220, s: 70, l: 55 }, []) // eslint-disable-line react-hooks/exhaustive-deps
  const [hsl, setHsl] = useState(initial)
  const [hexDraft, setHexDraft] = useState(normaliseHex(value))
  const wheelRef = useRef(null)
  const barRef = useRef(null)
  const rafRef = useRef(null)
  const draggingRef = useRef(null)

  useEffect(() => {
    if (wheelRef.current) paintWheel(wheelRef.current, hsl.l)
  }, [hsl.l])

  // The parent (Settings) is the source of truth - if it changes value
  // externally (e.g. a preset was picked, then "Customise" reopened), the
  // wheel should reflect that rather than keep stale local state.
  useEffect(() => {
    const next = hexToHsl(value)
    if (next) {
      setHsl(next)
      setHexDraft(normaliseHex(value))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const commit = (next, immediate) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    const hex = hslToHex(next)
    setHexDraft(hex)
    if (immediate) {
      onChange(hex)
      return
    }
    rafRef.current = requestAnimationFrame(() => onChange(hex))
  }

  const fromWheelEvent = (e) => {
    const rect = wheelRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - RADIUS
    const y = e.clientY - rect.top - RADIUS
    const dist = Math.min(RADIUS, Math.sqrt(x * x + y * y))
    const h = (Math.atan2(y, x) * 180) / Math.PI + 180
    const s = Math.min(100, (dist / RADIUS) * 100)
    return { h, s, l: hsl.l }
  }

  const fromBarEvent = (e) => {
    const rect = barRef.current.getBoundingClientRect()
    const t = 1 - Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height))
    return { ...hsl, l: t * 100 }
  }

  const startDrag = (kind, e) => {
    e.preventDefault()
    draggingRef.current = kind
    const getter = kind === 'wheel' ? fromWheelEvent : fromBarEvent
    const next = getter(e)
    setHsl(next)
    commit(next, false)
    const move = (ev) => {
      if (!draggingRef.current) return
      const n = (draggingRef.current === 'wheel' ? fromWheelEvent : fromBarEvent)(ev)
      setHsl(n)
      commit(n, false)
    }
    const up = (ev) => {
      draggingRef.current = null
      const n = (kind === 'wheel' ? fromWheelEvent : fromBarEvent)(ev)
      commit(n, true)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
  }

  const nudge = (kind, delta) => {
    const next = kind === 'hue' ? { ...hsl, h: (hsl.h + delta + 360) % 360 } : { ...hsl, l: Math.min(100, Math.max(0, hsl.l + delta)) }
    setHsl(next)
    commit(next, true)
  }

  const onHexInput = (raw) => {
    setHexDraft(raw)
    const normalised = normaliseHex(raw)
    if (isValidHex(normalised)) {
      const next = hexToHsl(normalised)
      setHsl(next)
      onChange(normalised)
    }
  }

  const thumbX = RADIUS + Math.cos(((hsl.h - 180) * Math.PI) / 180) * (hsl.s / 100) * RADIUS
  const thumbY = RADIUS + Math.sin(((hsl.h - 180) * Math.PI) / 180) * (hsl.s / 100) * RADIUS
  const barThumbY = (1 - hsl.l / 100) * 100

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-start gap-4">
        <div
          ref={barRef}
          role="slider"
          tabIndex={0}
          aria-label="Lightness"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(hsl.l)}
          onPointerDown={(e) => startDrag('bar', e)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp') nudge('l', 3)
            if (e.key === 'ArrowDown') nudge('l', -3)
          }}
          className="relative h-44 w-6 shrink-0 cursor-pointer rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          style={{ background: 'linear-gradient(to bottom, #fff, #808080, #000)' }}
        >
          <span
            aria-hidden="true"
            className="absolute left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow"
            style={{ top: `${barThumbY}%`, backgroundColor: hexDraft, boxShadow: '0 0 0 1px rgba(0,0,0,0.35)' }}
          />
        </div>

        <div
          role="slider"
          tabIndex={0}
          aria-label="Hue and saturation"
          aria-valuemin={0}
          aria-valuemax={360}
          aria-valuenow={Math.round(hsl.h)}
          onPointerDown={(e) => startDrag('wheel', e)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') nudge('hue', 8)
            if (e.key === 'ArrowLeft') nudge('hue', -8)
          }}
          className="relative shrink-0 cursor-pointer rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-page"
          style={{ width: SIZE, height: SIZE }}
        >
          <canvas ref={wheelRef} width={SIZE} height={SIZE} className="pointer-events-none rounded-full" />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white"
            style={{ left: thumbX, top: thumbY, backgroundColor: hexDraft, boxShadow: '0 0 0 1px rgba(0,0,0,0.35), 0 1px 4px rgba(0,0,0,0.4)' }}
          />
        </div>
      </div>

      <label className="block">
        <span className="mb-1 block text-xs font-semibold text-muted">Hex</span>
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="h-8 w-8 shrink-0 rounded-lg border border-line" style={{ backgroundColor: hexDraft }} />
          <input
            type="text"
            value={hexDraft}
            onChange={(e) => onHexInput(e.target.value)}
            spellCheck={false}
            maxLength={7}
            className="w-28 rounded-lg border border-line bg-page px-2.5 py-1.5 font-mono text-sm text-fg focus:border-brand focus:outline-none"
          />
        </div>
      </label>
    </div>
  )
}
