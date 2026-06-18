# Game Design

This document records the current gameplay direction for Wraith Signal.

It does not replace GitHub Issues. Existing Issues remain the executable implementation plan.

---

# Core Design

Wraith Signal is an exploration-first game.

The player should want to move through the world because the world feels worth noticing.

The main reward is discovery.

Caches, screenshots, records, and future progression systems exist to support discovery. They are not the core identity by themselves.

---

# Core Loop

The intended MVP loop is:

1. Enter the world from a clear starting point.
2. Explore a small atmospheric area.
3. Notice visual or environmental hints.
4. Interact with a hidden cache, place, or event.
5. Receive clear discovery feedback.
6. Capture or remember the moment.
7. Continue exploring or return to safety.

The loop should be short enough for a first playtest and polished enough to feel intentional.

---

# Player Fantasy

The player is an explorer in a mysterious world.

The player is not primarily:

- a farmer;
- a trader;
- a combat grinder;
- a lore reader;
- a spreadsheet optimizer.

---

# MVP Mechanics

Current MVP mechanics should be limited to what existing GitHub Issues require:

- movement;
- camera control;
- interaction prompts;
- first cache discovery;
- first exploration loop;
- first Wonder event;
- initial UI;
- screenshot or proof-of-discovery capture;
- basic state, save, settings, audio, asset, and performance foundations as scoped by issues.

---

# Discovery Design

Discovery should create status without forcing grind.

Good discovery feels like:

- "I found something."
- "I was here."
- "I saw something rare."
- "I want to know what else exists."

Bad discovery feels like:

- repeating chores;
- farming timers;
- checking boxes;
- following obvious markers;
- optimizing rewards instead of exploring.

---

# Caches

Caches are hidden discovery objects.

For MVP, caches should be simple:

- placed intentionally;
- discoverable through exploration;
- interactable;
- clear when found;
- not dependent on complex economy.

Historically discussed cache reward types, token rewards, and hidden cache categories are not current MVP requirements unless promoted through GitHub Issues.

---

# Wonders

Wonders are rare visual or experiential moments.

The first planned Wonder is the White Stag.

Wonders should feel magical, brief, and connected to place.

They should not feel like generic collectibles or obvious scripted cutscenes.

---

# Proof Of Discovery

Proof of Discovery is the lightweight social layer.

The MVP direction is:

- capture a clean screenshot;
- include simple overlay text;
- make the result shareable;
- support the feeling of "I found this" or "I was here."

This should remain simple for MVP.

---

# Multiplayer

The project direction includes multiplayer, but the implementation model is not yet documented.

Do not design multiplayer-dependent gameplay until networking architecture is approved.

Community discovery, party-gated moments, and social clue solving belong in the Idea Vault until scoped.

---

# Design Rules

- The world must justify every system.
- Add fewer mechanics and polish them more.
- Preserve mystery.
- Avoid over-explaining lore early.
- Avoid economy-first retention.
- Do not build systems because other games have them.
