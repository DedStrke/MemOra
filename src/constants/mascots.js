/*
  The three study buddies - Pochita, Chopper and Kon - as the exact images
  supplied for them, cut out of their backgrounds and nothing else changed
  (public/mascots/*.webp). A fourth option, "your own", takes any image on
  the device, GIFs included, and is stored as a data URL in the profile,
  never uploaded.

  Because the art is a picture rather than a drawing we control, moods are
  not drawn on the face; components/ui/Buddy.jsx animates the whole buddy
  (bounce, wobble, sleep-tilt) and layers props over it - sparks, hearts,
  z's, a book - so it still reacts without touching the design.

  Each buddy has a `look` (the theme and accent that suit it, offered at
  sign-up) and a `lines` table the speech bubble draws from.
*/

export const MASCOTS = [
  {
    id: 'pochita',
    name: 'Pochita',
    blurb: 'Loyal, hungry, sharp. Cuts straight through a chain of analysis.',
    look: { theme: 'dark', accent: 'red', label: 'Dark · Red' },
    image: '/mascots/pochita.webp',
    lines: {
      idle: [
        'Woof. That means open the mark scheme.',
        'Bread after. Revision now.',
        'Every chain needs a link. I would know.',
        'Sharp today. Keep cutting through it.',
      ],
      streak: ['Streak {n}. Not letting it drop.', '{n} days. That is a good dog.'],
      sleepy: ['Zzz… wake me when you start.', 'Nothing logged today. I am napping in protest.'],
      cheer: ['Session done. Treat time.', 'That is how you cut it.'],
      exam: ['{label} in {days} days. Teeth out.', '{days} days to {label}. Bite the weakest chapter first.'],
      level: ['Level {n}. I grew a bit.'],
      reward: ['Reward grabbed. Good instincts.'],
    },
  },
  {
    id: 'chopper',
    name: 'Chopper',
    blurb: 'Doctor on duty. Prescribes twenty-five minutes and a glass of water.',
    look: { theme: 'light', accent: 'pink', label: 'Light · Pink' },
    image: '/mascots/chopper.webp',
    lines: {
      idle: [
        "Doctor's orders: twenty-five minutes, then water.",
        'Diagnosis first - which chapter is weakest?',
        'Praise does not work on me… okay it works a bit. Go revise.',
        'Rest is part of the treatment. Revision is the other part.',
      ],
      streak: ['Streak {n}! Your revision is in good health.', '{n} days running. Vitals look great.'],
      sleepy: ['No session today. I am worried about you.', 'Zzz… even doctors nap.'],
      cheer: ['Excellent recovery! I mean session.', 'That was textbook. Literally.'],
      exam: ['{label} in {days} days. Check-up time.', '{days} days to {label}. Treat the shaky chapters first.'],
      level: ['Level {n}! Not that I care… I care.'],
      reward: ['Daily dose collected.'],
    },
  },
  {
    id: 'kon',
    name: 'Kon',
    blurb: 'Loud, cocky, secretly soft. Will not let you skip a day.',
    look: { theme: 'cream', accent: 'orange', label: 'Cream · Orange' },
    image: '/mascots/kon.webp',
    lines: {
      idle: [
        'Oi! The dashboard is not going to revise itself.',
        'The great Kon-sama says: one more MCQ.',
        'Stop poking me and open a chapter.',
        'You want an A star? Then act like it.',
      ],
      streak: ['Streak {n}? Not bad. Not me-level, but not bad.', '{n} days. Fine, I am impressed. A little.'],
      sleepy: ['You dare wake me? Fine. What are we learning.', 'Zzz… no session, no respect.'],
      cheer: ['Obviously you finished. You had my help.', 'Ha! That is more like it.'],
      exam: ['{label} in {days} days. Panic later, revise now.', '{days} days to {label}. Get moving.'],
      level: ['Level {n}! Bow before the Kon-sama method.'],
      reward: ['Reward claimed. You are welcome.'],
    },
  },
]

export const mascotById = (id) => MASCOTS.find((m) => m.id === id) || MASCOTS[0]

/* The image for any mascot value - a built-in's file or a custom data URL. */
export const mascotImage = (mascot) =>
  mascot?.kind === 'custom' && mascot.dataUrl ? mascot.dataUrl : mascotById(mascot?.id).image

/* Fill a line's {n}/{label}/{days} slots. */
export const fillLine = (line, vars = {}) => line.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '')
