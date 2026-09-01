import { useEffect, useRef } from 'react'

const LIFETIME_MS = 5200
const SPAWN_INTERVAL_MS = 70
const MAX_NODES = 90
// Two nodes wire up only when they're closer than this (px). Kept tight so
// the field reads as small local clusters rather than one dense mesh.
const LINK_DISTANCE = 130

/*
  A neural field that draws itself under the cursor: moving the mouse seeds
  nodes, nearby nodes wire together, and both nodes and their links fade out
  over ~5s. Nothing is visible until you move - there's no idle pattern and
  nothing tiles or repeats.

  Canvas rather than DOM/CSS because every node needs its own age, and links
  are recomputed per frame from live positions.

  Nodes drift slowly after spawning, so a cluster keeps breathing while it
  fades instead of sitting frozen.
*/
export default function NeuronField({ enabled = true }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!enabled) return undefined
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')

    let nodes = []
    let rafId
    let lastSpawn = 0
    let dpr = 1

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    // Ink follows the theme's foreground, re-read only when the theme flips.
    let ink = '255,255,255'
    function readInk() {
      const parsed = getComputedStyle(canvas).color.match(/\d+/g)
      if (parsed) ink = parsed.slice(0, 3).join(',')
    }
    readInk()
    const themeObserver = new MutationObserver(readInk)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    function onPointerMove(e) {
      const now = performance.now()
      if (now - lastSpawn < SPAWN_INTERVAL_MS) return
      lastSpawn = now
      nodes.push({
        x: e.clientX + (Math.random() - 0.5) * 24,
        y: e.clientY + (Math.random() - 0.5) * 24,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: 1.4 + Math.random() * 1.5,
        born: now,
      })
      if (nodes.length > MAX_NODES) nodes.splice(0, nodes.length - MAX_NODES)
    }
    window.addEventListener('pointermove', onPointerMove)

    function tick() {
      const now = performance.now()
      nodes = nodes.filter((n) => now - n.born < LIFETIME_MS)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        n.life = 1 - (now - n.born) / LIFETIME_MS
      }

      // Links first, so nodes sit on top of their own connections.
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist > LINK_DISTANCE) continue
          // Fade with distance AND with the shorter-lived of the two ends,
          // so a link never outlives the node it's attached to.
          const strength = (1 - dist / LINK_DISTANCE) * Math.min(a.life, b.life)
          ctx.strokeStyle = `rgba(${ink}, ${strength * 0.22})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }

      for (const n of nodes) {
        ctx.fillStyle = `rgba(${ink}, ${n.life * 0.45})`
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      }

      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      themeObserver.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 text-fg" aria-hidden="true" />
  )
}
