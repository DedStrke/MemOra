import { useCallback, useEffect, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'

/*
  A drawing pad for sketching an economics diagram by hand - mouse, finger
  or Apple Pencil - inside the essay planner's Diagram step.

  Why a pad and not a textarea: the exam asks for a drawn diagram, and
  "S shifts left, P rises" typed in a box is not the same skill as putting
  the curves in the right place with the right labels. Drawing it is the
  practice that transfers.

  Pointer Events cover all three inputs with one handler; touch-action:
  none on the canvas stops the page scrolling while a finger or pencil is
  drawing. Strokes are stored as integer coordinates in a fixed 400×300
  space (the same box the SVG diagrams use) so a sketch made on a phone
  redraws correctly on a laptop and the saved data stays small: a full
  diagram is a few kilobytes of JSON, which is what the planner persists
  against the question id.

  value / onChange carry { preset, strokes } where preset names the faint
  axes drawn underneath (price/quantity, price level/output, ...) and each
  stroke is { c: colourIndex, w: width, p: [x, y, x, y, ...] }.
*/

export const BOX_W = 400
export const BOX_H = 300

const PRESETS = {
  pq: { label: 'Price / Quantity', x: 'Quantity', y: 'Price' },
  ply: { label: 'Price level / Real GDP', x: 'Real output (Y)', y: 'Price level' },
  wl: { label: 'Wage / Labour', x: 'Quantity of labour', y: 'Wage rate' },
  cq: { label: 'Costs & revenue / Output', x: 'Output', y: 'Costs / revenue' },
  blank: { label: 'Blank', x: '', y: '' },
}

// Curve colours follow the site's diagram conventions: blue for demand
// and benefit curves, amber for supply and cost, green for social or
// shifted curves, red for losses, plus the foreground for labels.
const COLOURS = [
  { name: 'Ink', css: 'var(--fg)' },
  { name: 'Demand (blue)', css: 'var(--brand-strong)' },
  { name: 'Supply (amber)', css: '#e08a2c' },
  { name: 'Shift (green)', css: '#2e9e6b' },
  { name: 'Loss (red)', css: 'var(--danger)' },
]

const resolve = (css, el) => {
  if (!css.startsWith('var(')) return css
  const name = css.slice(4, -1)
  return getComputedStyle(el).getPropertyValue(name).trim() || '#888'
}

const EMPTY = { preset: 'pq', strokes: [] }

export default function SketchPad({ value, onChange, label = 'Sketch the diagram' }) {
  const data = value && Array.isArray(value.strokes) ? value : EMPTY
  const canvasRef = useRef(null)
  const wrapRef = useRef(null)
  const drawing = useRef(null) // { stroke, last: [x, y] } while a pointer is down
  const [colour, setColour] = useState(1)
  const [tool, setTool] = useState('pen') // pen | eraser
  const dataRef = useRef(data)
  dataRef.current = data

  // Canvas pixel size follows its CSS size × devicePixelRatio so lines stay
  // sharp on retina screens; all drawing happens in BOX units and is
  // scaled once here.
  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return null
    const cssW = wrap.clientWidth
    const cssH = (cssW * BOX_H) / BOX_W
    const dpr = window.devicePixelRatio || 1
    if (canvas.width !== Math.round(cssW * dpr) || canvas.height !== Math.round(cssH * dpr)) {
      canvas.width = Math.round(cssW * dpr)
      canvas.height = Math.round(cssH * dpr)
      canvas.style.height = `${cssH}px`
    }
    const ctx = canvas.getContext('2d')
    ctx.setTransform((cssW / BOX_W) * dpr, 0, 0, (cssH / BOX_H) * dpr, 0, 0)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    return ctx
  }, [])

  const drawAxes = useCallback((ctx, preset) => {
    const p = PRESETS[preset] || PRESETS.pq
    const el = canvasRef.current
    const line = resolve('var(--muted)', el)
    ctx.save()
    ctx.strokeStyle = line
    ctx.globalAlpha = 0.6
    ctx.lineWidth = 1.2
    ctx.beginPath()
    ctx.moveTo(40, 20)
    ctx.lineTo(40, 262)
    ctx.lineTo(380, 262)
    ctx.stroke()
    ctx.globalAlpha = 0.9
    ctx.fillStyle = line
    ctx.font = '600 11px system-ui, sans-serif'
    ctx.textAlign = 'right'
    ctx.fillText(p.x, 380, 280)
    ctx.textAlign = 'left'
    ctx.fillText('0', 28, 275)
    ctx.save()
    ctx.translate(20, 145)
    ctx.rotate(-Math.PI / 2)
    ctx.textAlign = 'center'
    ctx.fillText(p.y, 0, 0)
    ctx.restore()
    ctx.restore()
  }, [])

  const drawStroke = useCallback((ctx, s) => {
    const el = canvasRef.current
    ctx.strokeStyle = resolve(COLOURS[s.c]?.css || COLOURS[0].css, el)
    ctx.lineWidth = s.w || 2.4
    ctx.beginPath()
    for (let i = 0; i < s.p.length; i += 2) {
      if (i === 0) ctx.moveTo(s.p[0], s.p[1])
      else ctx.lineTo(s.p[i], s.p[i + 1])
    }
    if (s.p.length === 2) ctx.lineTo(s.p[0] + 0.1, s.p[1])
    ctx.stroke()
  }, [])

  const redraw = useCallback(() => {
    const ctx = setupCanvas()
    if (!ctx) return
    ctx.clearRect(0, 0, BOX_W, BOX_H)
    drawAxes(ctx, dataRef.current.preset)
    for (const s of dataRef.current.strokes) drawStroke(ctx, s)
  }, [setupCanvas, drawAxes, drawStroke])

  useEffect(() => {
    redraw()
    const wrap = wrapRef.current
    if (!wrap || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(redraw)
    ro.observe(wrap)
    return () => ro.disconnect()
  }, [redraw, data])

  // Theme changes re-colour the tokens; the canvas has to be repainted to
  // pick them up, since it holds resolved colours rather than variables.
  useEffect(() => {
    const mo = new MutationObserver(redraw)
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'data-accent'] })
    return () => mo.disconnect()
  }, [redraw])

  const toBox = (e) => {
    const r = canvasRef.current.getBoundingClientRect()
    return [
      Math.round(((e.clientX - r.left) / r.width) * BOX_W),
      Math.round(((e.clientY - r.top) / r.height) * BOX_H),
    ]
  }

  const commit = (next) => {
    dataRef.current = next
    onChange?.(next)
  }

  const erase = (x, y) => {
    const keep = dataRef.current.strokes.filter((s) => {
      for (let i = 0; i < s.p.length; i += 2) {
        const dx = s.p[i] - x
        const dy = s.p[i + 1] - y
        if (dx * dx + dy * dy < 100) return false
      }
      return true
    })
    if (keep.length !== dataRef.current.strokes.length) {
      commit({ ...dataRef.current, strokes: keep })
      redraw()
    }
  }

  const onDown = (e) => {
    if (e.button !== undefined && e.button !== 0 && e.pointerType === 'mouse') return
    e.preventDefault()
    canvasRef.current.setPointerCapture?.(e.pointerId)
    const [x, y] = toBox(e)
    if (tool === 'eraser') {
      drawing.current = { erasing: true }
      erase(x, y)
      return
    }
    const width = e.pointerType === 'pen' && e.pressure > 0 ? 1.6 + e.pressure * 2 : 2.4
    const stroke = { c: colour, w: Number(width.toFixed(1)), p: [x, y] }
    drawing.current = { stroke, last: [x, y] }
  }

  const onMove = (e) => {
    const d = drawing.current
    if (!d) return
    e.preventDefault()
    const events = e.nativeEvent.getCoalescedEvents ? e.nativeEvent.getCoalescedEvents() : [e]
    const ctx = setupCanvas()
    for (const ev of events) {
      const [x, y] = toBox(ev)
      if (d.erasing) {
        erase(x, y)
        continue
      }
      const [lx, ly] = d.last
      if ((x - lx) * (x - lx) + (y - ly) * (y - ly) < 2.5) continue
      d.stroke.p.push(x, y)
      d.last = [x, y]
      if (ctx) {
        ctx.strokeStyle = resolve(COLOURS[d.stroke.c].css, canvasRef.current)
        ctx.lineWidth = d.stroke.w
        ctx.beginPath()
        ctx.moveTo(lx, ly)
        ctx.lineTo(x, y)
        ctx.stroke()
      }
    }
  }

  const onUp = (e) => {
    const d = drawing.current
    drawing.current = null
    if (!d || d.erasing) return
    e.preventDefault()
    if (d.stroke.p.length === 2) {
      // A tap: keep it as a dot so a plotted point registers.
      const ctx = setupCanvas()
      if (ctx) drawStroke(ctx, d.stroke)
    }
    commit({ ...dataRef.current, strokes: [...dataRef.current.strokes, d.stroke] })
  }

  const undo = () => {
    if (!dataRef.current.strokes.length) return
    commit({ ...dataRef.current, strokes: dataRef.current.strokes.slice(0, -1) })
    redraw()
  }
  const clear = () => {
    commit({ ...dataRef.current, strokes: [] })
    redraw()
  }
  const setPreset = (preset) => {
    commit({ ...dataRef.current, preset })
    redraw()
  }

  const count = data.strokes.length

  return (
    <div className="mt-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">{label}</p>
        <label className="flex items-center gap-1.5 text-xs text-muted">
          Axes
          <select
            value={data.preset}
            onChange={(e) => setPreset(e.target.value)}
            className="rounded-full border border-line bg-surface px-2.5 py-1 text-xs font-medium text-fg focus:border-brand focus:outline-none"
          >
            {Object.entries(PRESETS).map(([k, p]) => (
              <option key={k} value={k}>
                {p.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1 rounded-full border border-line bg-surface p-1" role="radiogroup" aria-label="Pen colour">
          {COLOURS.map((c, i) => (
            <button
              key={c.name}
              type="button"
              role="radio"
              aria-checked={tool === 'pen' && colour === i}
              aria-label={c.name}
              title={c.name}
              onClick={() => {
                setColour(i)
                setTool('pen')
              }}
              className={`h-6 w-6 rounded-full border-2 transition-transform ${
                tool === 'pen' && colour === i ? 'scale-110 border-fg' : 'border-transparent'
              }`}
              style={{ background: c.css }}
            />
          ))}
        </div>
        <Button
          size="sm"
          variant={tool === 'eraser' ? 'primary' : 'ghost'}
          onClick={() => setTool(tool === 'eraser' ? 'pen' : 'eraser')}
          aria-pressed={tool === 'eraser'}
        >
          <Icon name="wand" className="h-4 w-4" />
          Eraser
        </Button>
        <Button size="sm" variant="ghost" onClick={undo} disabled={!count}>
          <Icon name="arrowLeft" className="h-4 w-4" />
          Undo
        </Button>
        <Button size="sm" variant="ghost" onClick={clear} disabled={!count}>
          <Icon name="x" className="h-4 w-4" />
          Clear
        </Button>
      </div>

      <div
        ref={wrapRef}
        className="mt-2 overflow-hidden rounded-xl border border-line bg-page"
        style={{ touchAction: 'none' }}
      >
        <canvas
          ref={canvasRef}
          role="img"
          aria-label={count ? `Your sketch, ${count} strokes` : 'Empty sketch pad'}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          onPointerLeave={(e) => drawing.current && onUp(e)}
          onContextMenu={(e) => e.preventDefault()}
          className={`block w-full ${tool === 'eraser' ? 'cursor-cell' : 'cursor-crosshair'}`}
          style={{ touchAction: 'none' }}
        />
      </div>
      <p className="mt-1.5 text-[0.7rem] text-muted">
        Draw with a mouse, finger or pencil. Label the axes, curves and every point you move
        between - the labels are what the marks are for.
      </p>
    </div>
  )
}
