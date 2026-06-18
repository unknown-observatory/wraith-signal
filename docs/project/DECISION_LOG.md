# Decision Log

This file records accepted project decisions.

Detailed product scope lives in `docs/project/MVP_SCOPE.md`.

Future ideas live in `docs/project/IDEA_VAULT.md`.

---

## DEC-001 — GitHub is the source of truth

**Status:** Accepted

All project documentation, issues, roadmap and code live in GitHub.

---

## DEC-002 — Wraith Signal is a browser game

**Status:** Accepted

The MVP uses Vite, TypeScript, Three.js, Node.js and Socket.IO.

**Implementation note:** The current repository implements only the Vite/React frontend shell. Node.js and Socket.IO remain accepted planning direction but require architecture review before networking implementation.

---

## DEC-003 — MVP scope is locked

**Status:** Accepted

New ideas go to the Idea Vault unless they directly improve the MVP.

---

## DEC-004 — The repository is the operational brain

**Status:** Accepted

Codex and future repository-aware agents must work from repository documentation, GitHub Issues, and implemented code instead of relying on conversation memory.

---

## DEC-005 — ChatGPT is optional strategic support

**Status:** Accepted

ChatGPT may help with strategic reasoning when explicitly provided context, but it is not the operational brain and must not override repository documentation.

---

## DEC-006 — Documentation must stay modular

**Status:** Accepted

The project will not use a monolithic `PROJECT_KNOWLEDGE.md`. Knowledge must be consolidated into focused documents under `.github/ai`, `docs/project`, `docs/design`, and `docs/technical`.

---

## DEC-007 — Discovery is more important than farming

**Status:** Accepted

The MVP should prioritize exploration, discovery, wonder, and proof of discovery over economy-first or farm-first retention.

---

## DEC-008 — Existing GitHub planning must be respected

**Status:** Accepted

Existing GitHub Issues, Milestones, and Project Board organization remain the executable planning system. Documentation may clarify or report conflicts but must not replace planning without explicit approval.
