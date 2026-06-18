# Validation

Validation confirms that completed work improves Wraith Signal without weakening scope, performance, maintainability, or player experience.

---

# Validation Types

## Product Validation

Confirms the work improves the intended experience.

Questions:

- Does this increase curiosity?
- Does this support exploration?
- Does this preserve simplicity?
- Does this move the MVP forward?

## Gameplay Validation

Confirms the work feels good in play.

Questions:

- Is movement responsive?
- Is discovery understandable?
- Does the moment feel intentional?
- Is the player confused in a useful way or a broken way?

## Technical Validation

Confirms the implementation is safe to maintain.

Questions:

- Does the build pass?
- Does lint pass if relevant?
- Is the implementation scoped?
- Is the architecture still consistent?
- Did documentation stay aligned?

## Performance Validation

Confirms the game remains smooth.

Questions:

- Are frame drops obvious?
- Are unnecessary objects or updates avoided?
- Does the scene stay lightweight?

---

# Validation Ownership

The Founder validates product direction and final feel.

Codex validates repository consistency, implementation quality, and documented architecture alignment.

Automated checks validate build and lint behavior.

ChatGPT may provide optional strategic review when explicitly given enough repository context.

---

# Completion Rule

A GitHub Issue is not complete just because code was written.

It is complete when:

- the issue acceptance criteria are satisfied;
- relevant validation has happened or been explicitly deferred;
- documentation remains accurate;
- unresolved conflicts are reported.
