# Working rules for AI assistants in this repo

Agreed with Mudassir. These apply to every session until he changes them.

1. **Do not break the site.** After any code change, run `npm run lint` and
   `npm run build` and fix any failure before reporting back.
2. **Change only what was explicitly asked.** No drive-by refactors, no extra
   files, no "while I'm here" cleanups. If something else looks wrong, report
   it and wait for instructions.
3. **Never commit, push, or deploy unless explicitly told.** `git pull` is
   fine when asked. Local edits and local verification only, by default.
4. **Listen carefully and be precise.** If a request is ambiguous, ask a short
   clarifying question before acting. Quote back what was understood when it
   matters.
5. **Keep replies short.** Summaries and diffs over prose. No em dashes in
   repo files (house style).
