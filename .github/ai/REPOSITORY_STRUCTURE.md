# Repository Structure

This document explains the intended responsibility of each major repository area.

Empty folders and files are placeholders until implementation gives them concrete behavior.

---

# Root

- `AGENTS.md` — AI entry point for the whole repository.
- `README.md` — human entry point and documentation index.
- `package.json` — npm scripts and dependencies.
- `vite.config.ts` — Vite configuration.
- `tsconfig*.json` — TypeScript configuration.
- `eslint.config.js` — lint configuration.
- `.prettierrc` — formatting configuration.

---

# AI Operating System

- `.github/ai/IDENTITY.md` — AI mindset.
- `.github/ai/ROLES.md` — participant responsibilities.
- `.github/ai/PRINCIPLES.md` — engineering and product principles.
- `.github/ai/WORKFLOW.md` — official working process.
- `.github/ai/ARCHITECTURE.md` — architecture constraints and current direction.
- `.github/ai/REPOSITORY_STRUCTURE.md` — repository map.
- `.github/ai/CURRENT_STATE.md` — current repository reality.

---

# GitHub

- `.github/ISSUE_TEMPLATE` — issue templates.

GitHub Issues define executable work.

GitHub Milestones and the Project Board define planning state.

Do not replace GitHub planning from documentation without explicit approval.

---

# Project Documentation

- `docs/project` — product vision, roadmap, MVP scope, decisions, validation, and parked ideas.
- `docs/design` — game design, world, art, and audio direction.
- `docs/technical` — setup, stack, networking, and technical notes.

Documentation should be modular. Do not create one large knowledge file.

---

# Source Code

- `src/main.tsx` — current React entry point.
- `src/assets` — source assets used by the app.
- `src/components` — React UI components.
- `src/config` — configuration constants.
- `src/core` — future cross-cutting core logic.
- `src/engine` — rendering/game-loop abstractions when approved.
- `src/game` — game-specific domain logic.
- `src/hooks` — React hooks.
- `src/network` — networking client code when approved.
- `src/scenes` — scene composition.
- `src/services` — service wrappers.
- `src/shaders` — shader code.
- `src/styles` — global styling.
- `src/systems` — gameplay/system modules.
- `src/types` — shared TypeScript types.
- `src/ui` — game-facing UI composition.
- `src/utils` — small reusable utilities.

Do not treat this folder list as permission to build every system immediately. Build only what the approved issue and MVP require.

---

# Public Assets

- `public` — static assets served by Vite.

Keep source assets and public assets clearly separated.

---

# Generated Or Local Folders

- `node_modules` — installed dependencies; ignored.
- `dist` — local build output; ignored.

These folders should not be treated as source of truth.
