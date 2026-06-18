# MVP Scope

This document defines the current MVP boundaries.

It does not replace GitHub Issues, Milestones, or the Project Board. GitHub remains the executable planning system.

---

# MVP Objective

Build the smallest browser-playable version of Wraith Signal that validates:

- exploration feels good;
- the world creates curiosity;
- discovery is satisfying;
- performance is acceptable;
- the project can be developed through the repository-first AI workflow.

---

# In Scope

Current MVP scope is represented by existing GitHub Issues and should include only the systems needed for a first playable exploration loop:

- project foundation;
- repository structure;
- development environment;
- CI/CD validation;
- player movement;
- camera behavior;
- interaction prompts;
- first hidden cache;
- first exploration loop;
- first Wonder, currently White Stag;
- initial UI;
- screenshot/proof-of-discovery support;
- basic game state;
- asset loading;
- audio foundation;
- save/settings foundations if required by existing issues;
- performance pass;
- launch checklist.

---

# Experience Scope

The MVP should focus on:

- a small explorable area;
- a clear starting point;
- simple movement and camera control;
- one or more discoverable objects or places;
- one memorable visual event;
- clean screenshot/share output;
- enough polish for internal or limited public playtesting.

---

# Out Of Scope

These ideas are not part of the MVP unless promoted through approved GitHub Issues:

- complex token economy;
- NFT rewards;
- large-scale farming systems;
- multiple large biomes;
- full city implementation;
- extensive lore delivery;
- procedural world evolution;
- complex reputation ladders;
- full social graph;
- Discord-dependent gameplay;
- generic discovery engine;
- multi-project AI studio infrastructure.

---

# Scope Discipline

New ideas go to `docs/project/IDEA_VAULT.md` unless they directly improve the MVP.

If a new feature does not improve the first playable exploration loop, it should not enter MVP scope.

---

# Required Reviews

The following items need review before implementation because planning and documentation are not yet perfectly aligned:

- The historical MVP mentioned Observatory, Forest, and City, but current GitHub Issues do not explicitly define those locations.
- `docs/project/DECISION_LOG.md` records Node.js and Socket.IO, but no backend or networking implementation exists yet.
- GitHub Issue #3, `World Streaming`, may be oversized for a small first playable area and should be scoped carefully before implementation.
