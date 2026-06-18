# Networking

Networking is planned but not implemented.

This document records the current networking state and decisions that must be made before implementation.

---

# Current State

There is currently:

- no backend server;
- no Socket.IO dependency;
- no multiplayer synchronization;
- no authoritative game state;
- no networking code beyond placeholder folders.

---

# Accepted Direction

`docs/project/DECISION_LOG.md` records Node.js and Socket.IO as MVP stack items.

This is accepted planning direction, but implementation must not start until architecture is clarified.

---

# Required Decisions Before Networking Work

Before implementing networking, decide:

- whether first playable MVP requires real-time multiplayer;
- what player data must be synchronized;
- what state is server-authoritative;
- how clients connect and disconnect;
- how the game behaves when a player is alone;
- how much networking can be deferred without weakening the MVP;
- whether Socket.IO remains the right tool for the required behavior.

---

# MVP Networking Principle

Networking should support exploration and discovery.

It should not force complexity into the first playable slice if the core loop can be validated locally first.

---

# Out Of Scope Until Approved

- token or wallet synchronization;
- economy state;
- anti-cheat systems;
- persistent global records;
- matchmaking;
- large world server architecture;
- scalable MMO infrastructure.

---

# Related Documentation

- `.github/ai/ARCHITECTURE.md`
- `docs/technical/TECH_STACK.md`
- `docs/project/MVP_SCOPE.md`
- `docs/design/GAME_DESIGN.md`
