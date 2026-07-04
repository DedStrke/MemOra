# AGENTS.md - guide for AI coding assistants

**This is the single source of truth for any AI model or coding tool working in
this repo.** It is written to the [AGENTS.md](https://agents.md) convention, so
it is read automatically by Cursor, GitHub Copilot, OpenAI Codex, Gemini CLI,
Aider, Zed, Windsurf, and others. Tool-specific files (`CLAUDE.md`,
`.github/copilot-instructions.md`) are thin pointers back to this file - edit the
rules here, not there.

If you are a human contributor, this doubles as the contributor guide. See
`README.md` for the product tour.

## What this project is

**AdaptHub** - a mood-aware study companion, built for every mind. It checks a
student's mood before and during each study session and shapes the session
around it: a goal-tuned motivational line, real practice content, a mid-session
check-in, and a nudge to take a break when they are struggling.

It is a client-only demo: all state persists to `localStorage`, so it runs with
no backend and ships as a static site to Firebase Hosting.

## Stack

Vite + React 19 (JSX, no TypeScript) - Tailwind CSS v4 - Framer Motion -
React Router v7 - Supabase client (optional, unused in the demo).

## Golden rules

1. **Semantic design tokens only.** Never hard-code colours. Use the semantic
   token utilities so everything recolours across all runtime themes (light /
   dark / high-contrast): `bg-page`, `bg-surface`, `text-fg`, `text-muted`,
   `border-line`, `bg-brand`, `text-brand-strong`, `bg-brand-soft`, and the
   study accents `flash` / `quiz` / `paper` (e.g. `bg-flash-soft`). Add or adjust
   tokens in the `:root` + `[data-theme=...]` blocks and `@theme inline` in
   `src/index.css`. Don't reintroduce fixed `brand-500`-style scales.
2. **Copy lives in `src/constants/content.js`.** Don't inline user-facing text in
   JSX. Add or edit strings there and read them from components.
3. **Animations come from `src/lib/motion.js`.** Reuse `fadeInUp`,
   `staggerContainer`, `inViewProps`, etc. Don't write ad-hoc animation objects.
4. **Use the `@/` import alias** for anything under `src/`
   (e.g. `import Button from '@/components/ui/Button'`).
5. **Reuse before creating.** Prefer existing `components/ui` pieces
   (`Button`, `Section`, `Card`). Promote repeated markup into a new `ui`
   component instead of copy-pasting.
6. **Secrets only via `import.meta.env.VITE_*` and `.env.local`.** Never write
   real keys into tracked files. `.env.local` is git-ignored; `.env.example`
   holds placeholders only.
7. **No em dashes in copy.** Use plain hyphens or restructure the sentence. This
   is a house style preference across all user-facing text.

## Where things go

| Need to...                                | Put it in...                                       |
| ----------------------------------------- | -------------------------------------------------- |
| Add a route/page                          | `src/pages/` + a `<Route>` in `src/App.jsx`        |
| Add a reusable component                  | `src/components/ui/`                                |
| Add nav/layout chrome                     | `src/components/layout/`                            |
| Add dashboard chrome                      | `src/components/dashboard/`                         |
| Add text/content (copy, option labels)    | `src/constants/content.js`                          |
| Add study material (decks/quizzes/papers) | `src/constants/library.js`                          |
| Add demo/mock data                        | `src/constants/mock.js`                             |
| Read/change global app state              | `useApp()` from `@/context/AppProvider`            |
| Add a custom hook                         | `src/hooks/`                                        |
| Talk to Supabase                          | `import { supabase } from '@/lib/supabase'`         |
| Add an animation variant                  | `src/lib/motion.js`                                 |

## Accessibility is the product

- Every new UI must work in all runtime themes and be keyboard-operable with a
  visible focus state and real ARIA. Nothing may rely on colour or sound alone.
- App-wide reduced-motion is honoured through `<MotionConfig reducedMotion="user">`
  in `src/App.jsx`; lean on shared variants rather than bypassing it.

## Conventions

- One component per file, `PascalCase.jsx`, default export named like the file.
- Keep components presentational; put data/fetching logic in hooks under
  `src/hooks/`.
- After changes, make sure `npm run build` passes before committing.
- Run `npm run lint` (oxlint) and keep it clean.
- Keep this file, `CLAUDE.md`, `.github/copilot-instructions.md`, and `README.md`
  in sync when you change structure or conventions.

## Commands

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm install`     | Install dependencies                  |
| `npm run dev`     | Local dev server (http://localhost:5173) |
| `npm run build`   | Production build into `dist/`         |
| `npm run preview` | Preview the production build          |
| `npm run lint`    | Lint the codebase (oxlint)            |
| `npm run deploy`  | Build and deploy to Firebase Hosting  |

## Adding a page (canonical example)

1. Create `src/pages/Pricing.jsx`, built from `<Section>`, `<Card>`, `<Button>`
   and copy read from `content.js`.
2. In `src/App.jsx` add `<Route path="/pricing" element={<Pricing />} />`
   (inside `<AppLayout>` if it needs an active session).
3. If it should appear in navigation, add its link to the relevant list in
   `src/constants/content.js`.

## Adding a revision subject

Add an entry to `REVISION` in `src/constants/library.js` with `id`, `name`,
`topics`, `flashcards`, `mcq`, and `examQuestions`. The flashcard maker, study
session, and progress page pick it up automatically.
