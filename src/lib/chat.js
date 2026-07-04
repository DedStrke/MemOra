/*
  Sparky's brain. Talks to the Mistral API directly from the browser (Mistral
  allows CORS, and its chat API is OpenAI-compatible).

  The key comes from import.meta.env.VITE_MISTRAL_API_KEY (.env.local, git-ignored).
  Because this is a client-side call, the key ships in the bundle: fine for a
  demo, but for production you would proxy this through a small backend. If the
  key is missing or a request fails, sendChat falls back to a warm canned reply
  so the chat never feels broken.
*/

const KEY = import.meta.env.VITE_MISTRAL_API_KEY
const MODEL = import.meta.env.VITE_MISTRAL_MODEL || 'mistral-large-latest'
const ENDPOINT = 'https://api.mistral.ai/v1/chat/completions'

const headers = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${KEY}`,
})

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

  // Drop any leading assistant/greeting turns so the conversation starts with
  // the student.
  const history = [...(messages || [])]
  while (history.length && history[0].role !== 'user') history.shift()
  if (!history.length) return fallbackReply(messages)

  const body = {
    model: MODEL,
    messages: [
      { role: 'system', content: SYSTEM + personalise(ctx) },
      ...history.map((m) => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: m.text,
      })),
    ],
    temperature: 0.8,
    max_tokens: 500,
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(body),
    })
    if (!res.ok) return fallbackReply(messages)
    const data = await res.json()
    const text = data?.choices?.[0]?.message?.content?.trim()
    return text || fallbackReply(messages)
  } catch {
    return fallbackReply(messages)
  }
}

// Generate a set of flashcards about a topic. Returns [{front, back}]. Throws
// with short error codes: 'no-key' | 'no-topic' | 'quota' | 'http-###' |
// 'bad-response' | 'empty'.
export async function generateFlashcards(topic, count = 8) {
  const clean = String(topic || '').trim()
  if (!clean) throw new Error('no-topic')
  if (!KEY) throw new Error('no-key')

  const body = {
    model: MODEL,
    messages: [
      {
        role: 'system',
        content:
          'You are a precise revision assistant. Reply with valid JSON only, no prose.',
      },
      {
        role: 'user',
        content: `Create ${count} concise, exam-accurate revision flashcards about "${clean}". Each card has a clear question or key term and a correct, self-contained answer (one to three sentences). Return a JSON object of exactly this shape: {"cards": [{"front": "...", "back": "..."}]}. Do not use em dashes.`,
      },
    ],
    response_format: { type: 'json_object' },
    temperature: 0.6,
    max_tokens: 1600,
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(res.status === 429 ? 'quota' : `http-${res.status}`)
  const data = await res.json()
  const text = data?.choices?.[0]?.message?.content
  let out
  try {
    out = JSON.parse(text)
  } catch {
    throw new Error('bad-response')
  }
  const cards = Array.isArray(out?.cards) ? out.cards : []
  const cleaned = cards
    .filter((c) => c && c.front && c.back)
    .map((c) => ({ front: String(c.front).trim(), back: String(c.back).trim() }))
    .slice(0, count)
  if (!cleaned.length) throw new Error('empty')
  return cleaned
}
