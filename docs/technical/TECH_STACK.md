# Tech Stack

This document records the current technical stack and planned technical direction.

It must stay aligned with `package.json`, implemented code, and `docs/project/DECISION_LOG.md`.

---

# Current Implemented Stack

The repository currently implements a Vite frontend application.

Runtime dependencies:

- React.
- React DOM.
- Three.js.
- React Three Fiber.
- Drei.
- Zustand.

Development tooling:

- Vite.
- TypeScript.
- ESLint.
- Prettier.

---

# Current Application State

The app currently renders static text from `src/main.tsx`.

Three.js, React Three Fiber, Drei, and Zustand are installed but not yet wired into gameplay architecture.

There is no backend implementation.

There is no networking implementation.

---

# Accepted Technical Direction

Accepted project direction:

- Browser game.
- Vite frontend.
- TypeScript.
- Three.js rendering.
- React Three Fiber integration.
- Zustand for lightweight client state.
- Node.js and Socket.IO for planned networking, pending architecture review.

---

# Node.js Version

The setup documentation currently requires Node.js 22+.

If dependency compatibility changes, update:

- `docs/technical/SETUP.md`;
- this file;
- CI configuration when it exists.

---

# Dependency Rules

- Do not add dependencies without a clear implementation need.
- Prefer simple, well-understood tools.
- Avoid framework churn.
- If a dependency changes the architecture, update `.github/ai/ARCHITECTURE.md` first.

---

# Open Technical Gaps

- CI workflow is not present yet.
- Backend package structure is not present yet.
- Networking dependencies are not installed yet.
- Testing framework is not defined.
- Deployment target is not defined.
- Asset pipeline is not defined.
