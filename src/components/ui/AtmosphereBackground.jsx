import { useEffect, useRef, useState } from 'react'
import NeuronField from '@/components/ui/NeuronField'

/*
  The real hero backdrop - the user's own macro-fabric footage
  (public/hero/hero-bg*.mp4), not a synthetic CSS approximation. A desktop
  and a lighter mobile encode swap by viewport; a theme-aware CSS filter
  (see .hero-video in index.css) turns the same footage grayscale in dark
  mode rather than needing a second encode. Grain, the cursor-drawn neural
  field, and a bottom vignette match the rest of the site's atmosphere
  treatment. Nothing here tiles or repeats - the only pattern is the video's
  own loop.

  Paused (and swapped for the static poster) under prefers-reduced-motion.
  Disabled entirely in high-contrast (.atmosphere override, index.css).
*/
export default function AtmosphereBackground() {
  const videoRef = useRef(null)
  const [motionOk, setMotionOk] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setMotionOk(!mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Browsers pause background video when the tab is hidden and don't always
  // resume it on return, which leaves the hero frozen on one frame.
  useEffect(() => {
    if (!motionOk) return undefined
    const resume = () => {
      if (!document.hidden) videoRef.current?.play().catch(() => {})
    }
    resume()
    document.addEventListener('visibilitychange', resume)
    return () => document.removeEventListener('visibilitychange', resume)
  }, [motionOk])

  return (
    <div className="atmosphere fixed inset-0 z-0 overflow-hidden bg-page" aria-hidden="true">
      {motionOk ? (
        <video
          ref={videoRef}
          className="hero-video h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={`${import.meta.env.BASE_URL}hero/hero-poster.jpg`}
        >
          <source
            src={`${import.meta.env.BASE_URL}hero/hero-bg-mobile.mp4`}
            media="(max-width: 768px)"
            type="video/mp4"
          />
          <source src={`${import.meta.env.BASE_URL}hero/hero-bg.mp4`} type="video/mp4" />
        </video>
      ) : (
        <img
          src={`${import.meta.env.BASE_URL}hero/hero-poster.jpg`}
          alt=""
          className="hero-video h-full w-full object-cover"
        />
      )}
      {/* theme tint - ties the natural footage to the current mood */}
      <div className="hero-video-tint absolute inset-0" />
      {/* slow travelling light sweep - ambient motion that doesn't depend on
          the cursor, so the backdrop still feels alive at rest */}
      <div className="hero-sweep absolute inset-0" />
      {/* fine grain so the footage reads as atmosphere, not raw video */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <NeuronField enabled={motionOk} />
      {/* bottom vignette - settles the haze back into the flat page colour */}
      <div
        className="absolute inset-x-0 bottom-0 h-[45vh]"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--page))' }}
      />
    </div>
  )
}
