/*
  AI flashcard deck generation, talking to the Mistral API directly from the
  browser (Mistral allows CORS, and its chat API is OpenAI-compatible).

  The key comes from import.meta.env.VITE_MISTRAL_API_KEY (.env.local,
  git-ignored). Because this is a client-side call, the key ships in the
  bundle: fine for personal/local use, but for a real deployment you would
  proxy this through a small backend.
*/

const KEY = import.meta.env.VITE_MISTRAL_API_KEY
const MODEL = import.meta.env.VITE_MISTRAL_MODEL || 'mistral-large-latest'
const ENDPOINT = 'https://api.mistral.ai/v1/chat/completions'

const headers = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${KEY}`,
})

export const chatConfigured = () => Boolean(KEY)

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
