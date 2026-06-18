# Current State

Last updated: 2026-06-18

This document describes the current reality of the repository. It must stay short, factual, and aligned with the implemented code and accepted documentation.

---

# Project Status

Wraith Signal is in early MVP implementation.

The repository has been consolidated into a modular documentation source of truth.

The first player movement implementation has started through GitHub Issue #2.

Implementation work should start only after the Founder approves the next implementation phase or a specific GitHub Issue.

---

# Operational Model

The repository is the operational brain of the project.

Codex is the primary repository-aware AI development partner.

ChatGPT is optional strategic support only and must not override repository documentation.

Root `AGENTS.md` is the AI entry point for the whole repository.

---

# Implemented Code

The codebase currently contains a minimal Vite + React + TypeScript application.

Current implemented behavior:

- The app mounts React in `src/main.tsx`.
- The browser renders a minimal React Three Fiber scene.
- A placeholder player object can move on a flat ground plane with keyboard input.
- A temporary scene-view camera exists only to observe movement.
- No gameplay loop exists yet beyond movement validation.
- No networking exists yet.
- No backend exists yet.

Current installed runtime stack:

- React.
- React DOM.
- Three.js.
- React Three Fiber.
- Drei.
- Zustand.

Current tooling:

- Vite.
- TypeScript.
- ESLint.
- Prettier.

---

# Repository Structure

The repository has initial folders for future systems:

- `src/engine`
- `src/game`
- `src/scenes`
- `src/systems`
- `src/network`
- `src/ui`
- `src/components`
- `src/services`
- `src/config`
- `src/types`
- `src/utils`
- `docs`
- `.github`

Several source files and documentation files are placeholders. Empty placeholder files are not architectural decisions.

---

# Documentation State

The AI Operating System is defined enough to guide repository-aware work.

Defined:

- `.github/ai/IDENTITY.md`
- `.github/ai/ROLES.md`
- `.github/ai/PRINCIPLES.md`
- `AGENTS.md`
- `.github/ai/WORKFLOW.md`
- `.github/ai/ARCHITECTURE.md`
- `.github/ai/REPOSITORY_STRUCTURE.md`

Project documentation has been consolidated into focused modular documents.

Defined:

- `docs/project/VISION.md`
- `docs/project/ROADMAP.md`
- `docs/project/PRODUCT_BRIEF.md`
- `docs/project/MVP_SCOPE.md`
- `docs/project/IDEA_VAULT.md`
- `docs/project/VALIDATION.md`
- `docs/project/DECISION_LOG.md`
- `docs/design/GAME_DESIGN.md`
- `docs/design/WORLD.md`
- `docs/design/ART_DIRECTION.md`
- `docs/design/AUDIO_DIRECTION.md`
- `docs/technical/SETUP.md`
- `docs/technical/TECH_STACK.md`
- `docs/technical/NETWORKING.md`

The root `README.md` is now a minimal project entry point and documentation index.

---

# GitHub State

The repository has open GitHub Issues for initial planning and implementation.

These issues were created before documentation consolidation and must be reconciled after Phase 2 documentation is complete.

Known issue mismatch:

- Some issues assume architecture or folders that are not yet documented.
- Some issues may be too broad or premature for the locked MVP.
- Issue execution should wait until documentation and architecture are authoritative.

---

# Known Conflicts And Gaps

The repository currently contains these unresolved conflicts and gaps:

- `docs/project/DECISION_LOG.md` says the MVP uses Node.js and Socket.IO, but no backend or networking implementation exists.
- Historical MVP direction mentions Observatory, Forest, and City, but current GitHub Issues do not explicitly define those locations.
- GitHub Issue #3, `World Streaming`, may be broader than needed for a small MVP area and should be reviewed before implementation.
- Detailed art references, audio references, testing strategy, deployment strategy, and networking authority model are not yet defined.

Until these gaps are resolved or explicitly accepted, implementation should proceed only through approved GitHub Issues with clear scope.

---

# Next Direction

The next phase requires Founder approval.

Recommended next action:

- Review documentation conflicts and GitHub Issue scope.
- Decide which GitHub Issue starts implementation.
- Do not begin implementation until approved.
