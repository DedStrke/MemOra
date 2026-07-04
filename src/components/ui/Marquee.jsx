import { useLayoutEffect, useRef, useState } from 'react'

/*
  Seamless, gap-proof marquee.

  The classic "two copies + translateX(-50%)" trick only looks seamless when one
  copy is at least as wide as the container. On a wide screen a short list leaves
  empty space (a visible gap) before it loops. So we MEASURE one set + the
  container and render exactly enough copies to always overfill, then slide the
  track by exactly one set width ( -100/copies % ). Recomputed on resize.

  Transform-only (GPU), pauses on hover/focus, aria-hidden on every copy after
  the first, and collapses to a static wrapped row under reduced motion (see the
  .marquee rules in index.css). `speed` is pixels per second.
*/
export default function Marquee({ children, speed = 42, className = '' }) {
  const containerRef = useRef(null)
  const groupRef = useRef(null)
  const [{ copies, duration }, setCfg] = useState({ copies: 2, duration: 24 })

  useLayoutEffect(() => {
    const container = containerRef.current
    const group = groupRef.current
    if (!container || !group) return

    const compute = () => {
      const setWidth = group.offsetWidth // width of one copy of the content
      const containerWidth = container.offsetWidth
      if (!setWidth) return
      // Need (copies - 1) * setWidth >= containerWidth so the tail never
      // reveals a gap at the loop point. Add one extra copy for safety.
      const next = Math.max(2, Math.ceil(containerWidth / setWidth) + 1)
      setCfg({ copies: next, duration: setWidth / speed })
    }

    compute()
    const ro = new ResizeObserver(compute)
    ro.observe(container)
    ro.observe(group)
    return () => ro.disconnect()
  }, [speed, children])

  return (
    <div ref={containerRef} className={`marquee ${className}`}>
      <div
        className="marquee-track"
        style={{
          '--marquee-duration': `${duration}s`,
          '--marquee-shift': `${-100 / copies}%`,
        }}
      >
        {Array.from({ length: copies }, (_, i) => (
          <div
            key={i}
            ref={i === 0 ? groupRef : undefined}
            className="marquee-group"
            aria-hidden={i === 0 ? undefined : 'true'}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}
