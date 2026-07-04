import { useEffect, useState } from 'react'
import Icon from '@/components/ui/Icon'

/*
  Read-aloud button. Speaks the given text with the browser's built-in Speech
  Synthesis, a real accessibility aid for dyslexic, low-vision and blind
  learners (on-theme: "for those who learn differently"). Renders nothing if the
  browser has no speech support or there is no text.
*/
export default function SpeakButton({ text, label = 'Read aloud', className = '' }) {
  const [speaking, setSpeaking] = useState(false)
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window

  // Stop any speech if this button unmounts (e.g. navigating away mid-read).
  useEffect(() => {
    return () => {
      if (supported) window.speechSynthesis.cancel()
    }
  }, [supported])

  if (!supported || !text) return null

  const toggle = () => {
    const synth = window.speechSynthesis
    synth.cancel()
    if (speaking) {
      setSpeaking(false)
      return
    }
    const u = new SpeechSynthesisUtterance(String(text))
    u.rate = 0.98
    u.onend = () => setSpeaking(false)
    u.onerror = () => setSpeaking(false)
    setSpeaking(true)
    synth.speak(u)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={speaking ? 'Stop reading' : label}
      aria-pressed={speaking}
      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-brand hover:text-brand-strong ${
        speaking ? 'border-brand bg-brand-soft text-brand-strong' : ''
      } ${className}`}
    >
      <Icon name={speaking ? 'pause' : 'volume'} className="h-4 w-4" />
    </button>
  )
}
