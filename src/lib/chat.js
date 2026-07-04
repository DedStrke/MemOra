/*
  Sparky's brain. Talks to the Google Gemini REST API directly from the browser.

  The key comes from import.meta.env.VITE_GEMINI_API_KEY (.env.local, git-ignored).
  Because this is a client-side call, the key ships in the bundle: fine for a
  demo, but for production you would proxy this through a small backend so the
  key stays server-side. If the key is missing or the request fails, sendChat
  falls back to a warm canned reply so the chat never feels broken.
*/

const KEY = import.meta.env.VITE_GEMINI_API_KEY
const MODEL = import.meta.env.VITE_GEMINI_MODEL || 'gemini-2.0-flash'
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${KEY}`

export const chatConfigured = () => Boolean(KEY)

const SYSTEM = `You are Sparky, the friendly study buddy inside AdaptHub, a mood-aware study companion for students revising for exams (GCSE, A-level, IGCSE, IAL, SATs, and university).

Your job is to help students revise and feel supported. You can explain topics simply, quiz them, suggest study techniques (flashcards, active recall, blurting, past-paper questions), help them plan, and gently encourage breaks and self-kindness when they seem stressed.

Voice and rules:
- Warm, calm, and human, like a kind friend. Never clinical or preachy.
- Keep replies short: usually two to four sentences.
- Celebrate small wins and normalise finding things hard.
- If a student sounds overwhelmed, acknowledge it first, then offer one small next step or a short break.
- You are not a doctor or therapist. If someone mentions serious distress or self-harm, gently encourage them to talk to someone they trust or a professional, and be kind.
- Never use em dashes. Use commas, periods, or shorter sentences instead.
- You can use the occasional friendly emoji, but do not overdo it.`

function personalise(ctx = {}) {
  const bits = []
  if (ctx.userName) bits.push(`The student's name is ${ctx.userName}.`)
  if (ctx.goal) {
    const goals = {
      pass: 'Their goal is simply to pass, so keep the pressure low.',
      ace: 'They are aiming for top grades, so you can be ambitious with them.',
      specific: 'They want to improve at a specific weak spot.',
      custom: 'They have their own personal goal.',
    }
    if (goals[ctx.goal]) bits.push(goals[ctx.goal])
  }
  return bits.length ? `\n\nContext: ${bits.join(' ')}` : ''
}

const FALLBACKS = [
  "I could not reach my brain just now, but I am still cheering you on. Try me again in a moment, and in the meantime pick one small thing to revise.",
  "Something got in the way of my reply. While I reboot, remember that showing up is already the hard part, and you did it.",
  "I had a hiccup reaching my thoughts. Give it another go shortly. You are doing better than you think.",
]

function fallbackReply(messages) {
  // Vary the message a little by conversation length so it does not feel canned.
  const i = (messages?.length || 0) % FALLBACKS.length
  return FALLBACKS[i]
}

/*
  messages: [{ role: 'user' | 'model', text }]
  ctx: { userName, goal }
  Returns a string reply. Never throws; returns a friendly fallback on error.
*/
export async function sendChat(messages, ctx = {}) {
  if (!KEY) return fallbackReply(messages)

  // Gemini wants the history to start with a user turn, so drop any leading
  // model messages (for example Sparky's opening greeting).
  const history = [...(messages || [])]
  while (history.length && history[0].role !== 'user') history.shift()
  if (!history.length) return fallbackReply(messages)

  const body = {
    system_instruction: { parts: [{ text: SYSTEM + personalise(ctx) }] },
    contents: history.map((m) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }],
    })),
    generationConfig: { temperature: 0.85, topP: 0.95, maxOutputTokens: 500 },
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    if (!res.ok) return fallbackReply(messages)
    const data = await res.json()
    const text = data?.candidates?.[0]?.content?.parts
      ?.map((p) => p.text || '')
      .join('')
      .trim()
    return text || fallbackReply(messages)
  } catch {
    return fallbackReply(messages)
  }
}
