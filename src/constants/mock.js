/*
  Mock demo data (hackathon: no backend). Deterministic so the UI is stable.
*/
import { getPackByName } from '@/constants/library'

// A little performance series per subject index, for the sparkline on pillars.
const SERIES = [
  [55, 60, 58, 66, 70, 74, 80],
  [48, 52, 61, 59, 68, 72, 77],
  [62, 64, 63, 70, 69, 75, 82],
  [40, 47, 50, 55, 54, 62, 66],
  [70, 68, 72, 76, 74, 80, 85],
]
export const progressFor = (index) => SERIES[index % SERIES.length]

// Knowledge decay: topics with days since last studied. Higher = more faded.
// Kept generic so it works for any subject choice in a demo.
export const DECAY_TOPICS = [
  { topic: 'Cell structure', daysAgo: 1 },
  { topic: 'Quadratic equations', daysAgo: 4 },
  { topic: 'Rates of reaction', daysAgo: 8 },
  { topic: 'The Cold War', daysAgo: 13 },
  { topic: 'Trigonometry', daysAgo: 22 },
]
// A topic counts as "needs review" once it passes this many days.
export const DECAY_REVIEW_DAYS = 7

// Build the knowledge-decay list from the learner's OWN subjects, so the
// dashboard reflects what they actually study. Uses real topics when we have a
// content pack for the subject, otherwise generic per-subject entries.
const DAY_STEPS = [2, 6, 9, 4, 14, 24, 11, 3]
const GENERIC = ['key concepts', 'core definitions', 'past questions']
export function decayTopicsFor(subjects = []) {
  const subs = (subjects || []).filter((s) => s && s.name)
  if (!subs.length) return DECAY_TOPICS
  const perSubject = subs.length <= 2 ? 3 : subs.length <= 3 ? 2 : 1
  const out = []
  subs.forEach((s) => {
    const pack = getPackByName(s.name)
    for (let k = 0; k < perSubject; k++) {
      const topic = pack
        ? pack.topics[k % pack.topics.length]
        : `${s.name}: ${GENERIC[k % GENERIC.length]}`
      out.push({ subject: s.name, topic, daysAgo: DAY_STEPS[out.length % DAY_STEPS.length] })
    }
  })
  return out.slice(0, 6)
}

// Community feed seed (Flow 5, built later).
export const COMMUNITY_POSTS = [
  { id: 'p1', author: 'Amara', avatar: '🦉', time: '2h', text: 'Finally cracked past-paper Q6 on titrations! Blurting really works.', likes: 12 },
  { id: 'p2', author: 'Yusuf', avatar: '🚀', time: '5h', text: 'Anyone else revising the Cold War? Let us swap timelines.', likes: 7 },
  { id: 'p3', author: 'Mei', avatar: '🌸', time: '1d', text: 'Took a proper break today and came back so much sharper. Rest counts.', likes: 24 },
]

// Wellbeing prompts (Flow 4, built later).
export const WELLBEING = [
  { icon: 'activity', title: 'Stretch it out', body: 'Stand up and stretch tall for 30 seconds.' },
  { icon: 'wind', title: 'Three deep breaths', body: 'In for 4, hold for 4, out for 6. Repeat three times.' },
  { icon: 'walk', title: 'Take a short walk', body: 'A five-minute walk resets your focus.' },
  { icon: 'heart', title: 'Be kind to yourself', body: 'Name one thing that went well today, however small.' },
]
