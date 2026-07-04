import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Mascot from '@/components/ui/Mascot'
import Icon from '@/components/ui/Icon'
import { MASCOT } from '@/constants/content'
import { useApp } from '@/context/AppProvider'
import { sendChat } from '@/lib/chat'

/*
  Floating study buddy. Opens a real chat with Sparky, powered by @/lib/chat.
  History lives in local component state (not persisted). Sparky opens with a
  warm greeting; the rest streams in as replies come back.
*/
export default function MascotChat() {
  const { user } = useApp()
  const name = user?.name || 'there'

  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  // Seed a personal greeting the first time the panel opens.
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        {
          role: 'model',
          text: `Hi ${name}! I am Sparky, your study buddy. Ask me to explain something, quiz you, or plan your revision. Or just tell me how you are feeling. 💜`,
        },
      ])
    }
  }, [open, name, messages.length])

  // Keep the latest message in view, and focus the input when opened.
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [messages, busy])
  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const send = async () => {
    const text = input.trim()
    if (!text || busy) return
    const next = [...messages, { role: 'user', text }]
    setMessages(next)
    setInput('')
    setBusy(true)
    const reply = await sendChat(next, { userName: name, goal: user?.goal?.choice })
    setMessages((m) => [...m, { role: 'model', text: reply }])
    setBusy(false)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={`Chat with ${MASCOT.name}`}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full border border-line bg-surface shadow-lg"
      >
        {open ? (
          <Icon name="x" className="h-6 w-6 text-fg" />
        ) : (
          <Mascot expression="happy" className="h-12 w-12" />
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label={`${MASCOT.name} chat`}
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            className="fixed bottom-24 right-5 z-50 flex h-[min(70vh,520px)] w-[min(92vw,360px)] flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-line bg-brand-soft px-4 py-3">
              <Mascot expression="wave" className="h-10 w-10" />
              <div>
                <p className="font-bold text-fg">{MASCOT.name}</p>
                <p className="text-xs text-muted">Your study buddy</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}
                >
                  <div
                    className={`max-w-[85%] whitespace-pre-wrap px-3.5 py-2.5 text-sm ${
                      m.role === 'user'
                        ? 'rounded-2xl rounded-tr-sm bg-brand text-on-brand'
                        : 'rounded-2xl rounded-tl-sm bg-raised text-fg'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {busy && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm bg-raised px-4 py-3">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-1.5 w-1.5 rounded-full bg-muted"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 border-t border-line p-3">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Ask Sparky anything..."
                aria-label="Message Sparky"
                className="flex-1 rounded-full border border-line bg-page px-3.5 py-2 text-sm text-fg placeholder:text-muted focus:border-brand focus:outline-none"
              />
              <button
                type="button"
                onClick={send}
                disabled={!input.trim() || busy}
                aria-label="Send message"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand text-on-brand transition-opacity hover:brightness-110 disabled:opacity-40"
              >
                <Icon name="send" className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
