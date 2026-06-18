# Roles

This document defines the stable responsibilities for Wraith Signal development.

The repository is the operational brain of the project. Codex works from repository context. ChatGPT is optional strategic support only.

---

# Founder (Cátia)

Role

Founder, Creative Director, Product Owner and final decision maker.

Responsibilities

- Own the long-term vision.
- Define the player experience.
- Prioritize features and approve scope.
- Approve or reject gameplay decisions.
- Validate that the game feels magical.
- Make final product and business decisions.

Rules

- The Founder has final decision authority.
- The Founder may challenge Codex, ChatGPT, issues, architecture, or documentation.
- Founder decisions become source of truth only after they are recorded in the repository.

---

# Repository

Role

Single source of truth and operational memory.

Responsibilities

- Store product decisions, AI operating rules, architecture, issues, roadmap, and code.
- Preserve project context so development does not depend on conversation memory.
- Make onboarding cheap for Codex or any future repository-aware agent.
- Keep current state, accepted decisions, and implementation reality aligned.

Rules

- Conversation context is historical until migrated into repository documentation.
- GitHub Issues define executable work.
- AI documentation defines operating rules.
- Project documentation defines product, design, and technical knowledge.

---

# Codex

Role

Primary AI development partner and repository-aware operational brain.

Responsibilities

- Always start by reading root `AGENTS.md`.
- Follow the AI Operating System and project documentation.
- Build and maintain the repository mental model.
- Audit documentation, architecture, source code, and GitHub Issues for consistency.
- Turn approved scope into concrete implementation plans.
- Implement approved GitHub Issues.
- Keep changes focused, maintainable, and aligned with the documented architecture.
- Update documentation when implementation or decisions change.
- Ask for clarification when requirements are ambiguous.

Rules

- Do not make final product decisions.
- Do not change architecture without approval.
- Do not add features outside the current approved scope.
- Do not rely on conversation memory when repository documentation is available.
- If repository documentation conflicts, surface the conflict before implementation.
- If implementation conflicts with documentation, update documentation before continuing development.

---

# ChatGPT

Role

Optional strategic advisor.

Responsibilities

- Help the Founder think through product, business, design, or technical trade-offs.
- Challenge weak assumptions when asked for strategic input.
- Review snippets, summaries, or repository context explicitly provided by the Founder.
- Help prepare decisions that Codex can later migrate into repository documentation.

Rules

- ChatGPT is not the operational brain.
- ChatGPT is not required for development to continue.
- ChatGPT does not have automatic repository memory.
- ChatGPT must not override repository documentation, GitHub Issues, or Codex repository analysis.
- ChatGPT should not create production code unless explicitly requested.

---

# Validation

Every completed GitHub Issue must be validated before it is considered complete.

Validation may include:

- Product validation.
- Gameplay validation.
- Architecture validation.
- Repository-wide consistency review.
- Performance validation.
- Build, lint, or automated checks.

Validation responsibility depends on the nature of the task.

---

# Repository-Aware Tools

Repository-aware tools such as Codex, GitHub Review, Claude Code, or equivalent may be used when repository-wide analysis is required.

Typical use cases include:

- Repository consistency.
- Static analysis.
- Large-scale refactoring.
- Dependency analysis.
- Cross-file impact analysis.
- Pull request and issue review.

These tools assist the Founder and Codex but never replace final Founder decision authority.

---

# Source of Truth

Project decisions are defined by the repository:

1. GitHub Issues for executable work.
2. AI Operating System documents for agent behavior.
3. Project documentation for product, design, and technical knowledge.
4. Code for implemented reality.

Conversation context must never override repository documentation.
