# GitHub Copilot instructions

The full, tool-agnostic guide for this repo lives in [`AGENTS.md`](../AGENTS.md).
It is the single source of truth for every AI assistant working here.

Follow `AGENTS.md`. Key rules in brief: semantic design tokens only (no
hard-coded colours), user-facing copy lives in `src/constants/content.js`,
animations come from `src/lib/motion.js`, use the `@/` import alias, reuse
`components/ui` before creating new markup, secrets only via
`import.meta.env.VITE_*`, and make sure `npm run build` passes before committing.
