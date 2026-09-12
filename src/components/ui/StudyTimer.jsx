import { useEffect, useRef, useState } from 'react'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'

/*
  A countdown you switch on yourself. The earlier version started a clock
  the moment a question opened, which turned reading the question into a
  race; this one waits. Presets come from the question - the planning
  window and the writing time for its mark value - and there is a custom
  length for anything else.

  Session-only on purpose: a timer that survived a reload would still be
  counting after the student had walked away.
*/

const mmss = (secs) => {
  const s = Math.max(0, secs)
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

export default function StudyTimer({ presets, resetKey }) {
  const [total, setTotal] = useState(presets[0].seconds)
  const [left, setLeft] = useState(presets[0].seconds)
  const [running, setRunning] = useState(false)
  const tick = useRef(null)
  const endAt = useRef(null)

  // New question: back to the first preset, stopped.
  useEffect(() => {
    setRunning(false)
    setTotal(presets[0].seconds)
    setLeft(presets[0].seconds)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey])

  useEffect(() => {
    if (!running) {
      clearInterval(tick.current)
      return
    }
    endAt.current = Date.now() + left * 1000
    tick.current = setInterval(() => {
      const remaining = Math.round((endAt.current - Date.now()) / 1000)
      if (remaining <= 0) {
        setLeft(0)
        setRunning(false)
        try {
          // A short, quiet beep so the end registers without the tab being watched.
          const ac = new (window.AudioContext || window.webkitAudioContext)()
          const o = ac.createOscillator()
          const g = ac.createGain()
          o.frequency.value = 660
          g.gain.value = 0.06
          o.connect(g).connect(ac.destination)
          o.start()
          o.stop(ac.currentTime + 0.35)
        } catch {
          /* no audio - fine */
        }
      } else {
        setLeft(remaining)
      }
    }, 250)
    return () => clearInterval(tick.current)
    // `left` is deliberately not a dependency: endAt is fixed when the run
    // starts and the interval derives the remaining time from it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running])

  const choose = (seconds) => {
    setRunning(false)
    setTotal(seconds)
    setLeft(seconds)
  }
  const adjust = (delta) => {
    const next = Math.max(60, Math.min(120 * 60, total + delta))
    choose(next)
  }

  const frac = total ? left / total : 0
  const tone = left === 0 ? 'text-danger' : frac < 0.2 ? 'text-warning' : 'text-fg'

  return (
    <div className="rounded-xl border border-line bg-surface p-3" aria-label="Timer">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <p className={`text-2xl font-extrabold tabular-nums leading-none ${tone}`} aria-live="polite">
            {mmss(left)}
          </p>
          <div className="flex items-center gap-1.5">
            {running ? (
              <Button size="sm" onClick={() => setRunning(false)}>
                <Icon name="pause" className="h-4 w-4" />
                Pause
              </Button>
            ) : (
              <Button size="sm" onClick={() => left > 0 && setRunning(true)} disabled={left === 0}>
                <Icon name="play" className="h-4 w-4" />
                {left === total ? 'Start' : 'Resume'}
              </Button>
            )}
            <Button size="sm" variant="ghost" onClick={() => choose(total)} aria-label="Reset timer">
              <Icon name="refresh" className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          {presets.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => choose(p.seconds)}
              className={`rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors ${
                total === p.seconds ? 'border-brand bg-brand text-on-brand' : 'border-line bg-surface text-fg hover:border-brand'
              }`}
            >
              {p.label}
            </button>
          ))}
          <span className="inline-flex items-center rounded-full border border-line">
            <button
              type="button"
              onClick={() => adjust(-5 * 60)}
              className="px-2 py-1 text-xs font-bold text-fg hover:text-brand-strong"
              aria-label="Five minutes less"
            >
              −5
            </button>
            <span className="text-[0.65rem] text-muted">min</span>
            <button
              type="button"
              onClick={() => adjust(5 * 60)}
              className="px-2 py-1 text-xs font-bold text-fg hover:text-brand-strong"
              aria-label="Five minutes more"
            >
              +5
            </button>
          </span>
        </div>
      </div>
      <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-line" aria-hidden="true">
        <div
          className={`h-full rounded-full transition-[width] duration-300 ${left === 0 ? 'bg-danger' : frac < 0.2 ? 'bg-warning' : 'bg-brand'}`}
          style={{ width: `${frac * 100}%` }}
        />
      </div>
    </div>
  )
}
