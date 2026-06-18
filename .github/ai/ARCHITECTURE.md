# Architecture

This document defines the currently approved architecture constraints.

It does not invent future systems. It records what is implemented, what is planned, and what must be decided before implementation.

---

# Current Architecture

Wraith Signal is currently a browser-based Vite application using React and TypeScript.

Implemented runtime:

- Vite frontend.
- React app mounted in `src/main.tsx`.
- Static placeholder render only.

Installed but not yet architecturally wired:

- Three.js.
- React Three Fiber.
- Drei.
- Zustand.

No gameplay architecture is implemented yet.

No backend is implemented yet.

No networking architecture is implemented yet.

---

# Approved Technical Direction

The accepted repository decision is that Wraith Signal is a browser game.

Current accepted stack direction:

- Vite.
- TypeScript.
- React.
- Three.js.
- React Three Fiber.
- Drei.
- Zustand.

`docs/project/DECISION_LOG.md` also records Node.js and Socket.IO as MVP stack items. This remains an accepted decision, but the backend and networking design are not implemented and must be reviewed before any networking issue starts.

---

# Frontend Boundaries

The frontend should own:

- rendering;
- game scene composition;
- player input;
- camera behavior;
- local UI;
- local state needed for the current session;
- client-side asset loading;
- client-side interaction feedback.

The frontend should not own:

- authoritative multiplayer state;
- economy state;
- anti-cheat decisions;
- persistent public records;
- token or wallet logic unless explicitly scoped and approved.

---

# State Direction

Zustand is installed and is the expected client-side state tool.

It should be used for shared client state only when component-local state is insufficient.

Do not introduce a larger state architecture until a concrete feature requires it.

---

# Rendering Direction

Three.js and React Three Fiber are the approved rendering foundation.

The first rendering goal should be a small, performant vertical slice rather than a large world.

Performance is an architectural requirement from day one.

---

# Networking Direction

Networking is planned but not implemented.

Socket.IO is recorded as the current accepted direction in the decision log.

Before implementing networking, the team must define:

- whether the MVP requires real-time multiplayer in the first playable slice;
- what state is authoritative on the server;
- how players join, leave, and synchronize;
- what can remain local for MVP speed;
- whether Node.js and Socket.IO remain the correct tools.

Until that review is complete, networking files are placeholders only.

---

# Architecture Rules

- Keep systems small and replaceable.
- Prefer vertical slices over abstract frameworks.
- Do not build a generic engine before the game needs it.
- Do not introduce backend, wallet, token, database, or persistence architecture without approved scope.
- Do not add dependencies because they are fashionable.
- If an issue requires architecture not defined here, update architecture documentation before implementation.

---

# Known Architecture Gaps

- Gameplay loop architecture is not yet defined.
- Scene composition structure is not yet defined.
- Player controller architecture is not yet defined.
- Asset loading architecture is not yet defined.
- Save/persistence architecture is not yet defined.
- Networking architecture is not yet defined.
- Deployment architecture is not yet defined.
