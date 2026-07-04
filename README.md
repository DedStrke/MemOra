# AdaptHub

**A mood-aware study companion, built for every mind.**

EduTech hackathon entry for the theme _"Build for every mind, for those who learn
differently."_ Most revision apps only care what you study. AdaptHub also cares
**how you are doing**. It checks your mood before and during every study session
and shapes the session around it: a motivational line tuned to your goal, real
practice content, a mid-session check-in, and a nudge to take a break when you
are struggling.

Stack: **Vite + React 19 (JSX) + Tailwind v4 + Framer Motion + React Router v7**.
All state persists to `localStorage`, so the demo runs with no backend. Ships as
a static site to **Firebase Hosting**.

---

## The core idea: a mood-aware session

The study session (`/study`) is the heart of the app:

1. **Mood check-in.** Great, Okay, or Struggling.
2. **Goal-referenced encouragement.** The message is keyed to your onboarding
   goal and current mood (for example, aiming for top grades and feeling okay:
   _"Steady wins the A\*. A focused session now compounds fast."_).
3. **Focus block with real content.** A running timer plus AI-generated revision
   material chosen by technique: flashcards, MCQs with instant feedback, exam
   questions with mark schemes, blurting, or active recall.
4. **Mid-session check-in.** Rate the stretch 1 to 5. A low score offers a timed
   **break** (wellbeing first); a good score keeps you going.
5. **Wrap up.** Rate the difficulty, and the session is saved to your recent
   activity.

## What else is in the app

| Area                     | What it does                                                      |
| ------------------------ | ---------------------------------------------------------------- |
| **Onboarding wizard**    | Name, year, goal, course type, exam-board spec, and subjects     |
| **Dashboard**            | Exam countdown, prioritised subject pillars, tools, technique picker, knowledge decay |
| **Flashcard maker**      | Study AI-built decks or create, save, and delete your own        |
| **Community**            | Post a win or a question and cheer others on                     |
| **Wellbeing**            | A breathing widget and small resets for when study gets heavy    |
| **Progress**             | Per-subject trend sparklines and stats                           |
| **Profile + auth**       | Sign up, log in, log out, all on-device                          |

## Adapting for how people learn

The landing page names who the app is built for (dyslexia, low vision, blind,
deaf or hard of hearing, ADHD, motor and mobility) and the whole UI is built to
be inclusive:

- **Three themes:** light, dark, and high-contrast (top-right switcher).
- **Semantic design tokens only**, so colour and contrast stay consistent.
- **Accessible by default:** keyboard navigation, focus states, `aria` labels,
  and `prefers-reduced-motion` respected app-wide via `MotionConfig`.
- A friendly mascot (Sparky) and the spinning wheel brand mark set a calm,
  encouraging tone.

---

## Run it

```bash
git clone <your-repo-url>
cd Hackathon
npm install
npm run dev        # http://localhost:5173
```

| Command           | What it does                       |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Local dev server with hot reload   |
| `npm run build`   | Production build into `dist/`      |
| `npm run preview` | Preview the production build       |
| `npm run lint`    | Lint the codebase (oxlint)         |
| `npm run deploy`  | Build and deploy to Firebase Hosting |

Live URL: https://adapthub-a38b7.web.app (deploy needs the Firebase CLI and
access to the `adapthub-a38b7` project).

## Project structure

```
src/
├── main.jsx                     # Entry: Router + AppProvider + fonts + CSS
├── App.jsx                      # Routes + app-wide reduced-motion + cursor glow
├── index.css                    # Tailwind + design tokens + 3 runtime themes
├── context/
│   └── AppProvider.jsx          # THE STORE: auth, theme, decks, posts, profile
├── lib/
│   ├── motion.js                # Shared Framer Motion variants
│   ├── fonts.js                 # Self-hosted fonts (no CDN)
│   └── supabase.js              # Optional Supabase client (unused in the demo)
├── constants/
│   ├── content.js               # ALL copy + option definitions
│   ├── library.js               # AI revision content (flashcards / MCQ / exam Qs)
│   └── mock.js                  # Demo data (progress, decay, community, wellbeing)
├── components/
│   ├── layout/                  # AppBar, AppLayout, ThemeSwitcher, MascotChat
│   ├── dashboard/               # CountdownCard, SubjectPillars, KnowledgeDecay
│   └── ui/                      # Button, Card-less kit: Section, Icon, Mascot,
│                                #   WheelLogo, FlipCard, RevisionRunner, Sparkline,
│                                #   ProgressBar, OptionCard, Marquee, CursorGlow
└── pages/                       # Landing, Login, Signup, Dashboard, Profile,
                                 #   StudySession, Flashcards, Community,
                                 #   MentalHealth, Progress, ComingSoon
```

## Conventions

- **Colours:** never hard-code hex. Use semantic token utilities (`bg-page`,
  `text-fg`, `bg-surface`, `border-line`, `bg-brand`, `text-brand-strong`,
  `bg-flash-soft`, and so on). Add tokens in `src/index.css`.
- **Copy** lives in `src/constants/content.js`; **revision content** in
  `library.js`; **demo data** in `mock.js`.
- **Animations:** import variants from `src/lib/motion.js`.
- **Imports:** use the `@/` alias for anything under `src/`.
- **Components:** one per file, `PascalCase.jsx`, default export named like the
  file. Reuse the `ui` kit before creating new markup.

## Adding a revision subject

Add an entry to `REVISION` in `src/constants/library.js` with `id`, `name`,
`topics`, `flashcards`, `mcq`, and `examQuestions`. The flashcard maker, study
session, and progress page pick it up automatically.

## Working with AI coding assistants

This repo is standardised so any AI model or tool follows the same rules.
[`AGENTS.md`](./AGENTS.md) is the single source of truth (the cross-tool
[agents.md](https://agents.md) convention read by Cursor, GitHub Copilot, OpenAI
Codex, Gemini CLI, Aider, Zed, and more). `CLAUDE.md` and
`.github/copilot-instructions.md` are thin pointers to it, so edit the rules in
`AGENTS.md` only. If you add a page, token, or convention, update `AGENTS.md` to
match.
