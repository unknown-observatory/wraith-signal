# Workflow

This is the official workflow for Wraith Signal development.

The workflow exists to prevent context loss, scope creep, and undocumented implementation.

---

# 1. Repository First

The repository is the single source of truth.

Before acting, Codex must read:

1. Root `AGENTS.md`.
2. The AI Operating System documents referenced by `AGENTS.md`.
3. Relevant project, design, and technical documentation.
4. The assigned GitHub Issue, if one exists.

Conversation history is historical context only until it is migrated into repository documentation.

---

# 2. Issue-Driven Work

Implementation work should be tied to a GitHub Issue whenever possible.

GitHub Issues define executable work.

GitHub Milestones and the Project Board define planning state.

Codex must respect existing Issues, Milestones, and Project Board organization.

Codex must not replace existing planning unless the Founder explicitly approves a planning migration.

---

# 3. Before Implementation

Before writing code, Codex must confirm:

- the requested scope is clear;
- the relevant documentation exists;
- the architecture supports the change;
- the work does not exceed the GitHub Issue or approved scope;
- known conflicts have been reported.

If any of these are missing, Codex must stop and propose the smallest documentation or planning clarification needed.

---

# 4. During Implementation

Implementation must be focused and minimal.

Codex should:

- solve the root problem;
- keep changes scoped to the approved issue;
- avoid unrelated refactors;
- preserve maintainability;
- update documentation when decisions or behavior change;
- keep the project buildable.

Codex must not:

- add features because they sound interesting;
- introduce architecture not approved in documentation;
- bypass the MVP scope;
- rely on undocumented historical context.

---

# 5. Validation

Every completed issue needs validation appropriate to the task.

Validation may include:

- build checks;
- lint checks;
- manual browser checks;
- product validation by the Founder;
- gameplay feel validation;
- repository consistency review.

Validation is not only code review. For Wraith Signal, product feel, clarity, performance, and scope discipline matter as much as implementation correctness.

---

# 6. Documentation Updates

Documentation should be updated when:

- a decision becomes accepted;
- implementation reality changes;
- a GitHub Issue reveals missing context;
- a conflict is discovered;
- onboarding would otherwise require conversation memory.

Documentation should not duplicate the same decision in multiple places. Link or summarize where possible.

---

# 7. Conflict Handling

If existing planning conflicts with documentation, Codex must report the conflict instead of deciding unilaterally.

If historical context conflicts with the current repository, assume the repository is the source of truth unless there is clear evidence that the repository is outdated.

If code conflicts with documentation, document the mismatch and request approval for the correction path.

---

# 8. Completion Criteria

Work is complete only when:

- the requested scope is satisfied;
- relevant checks have been run or explicitly skipped with reason;
- documentation is still consistent;
- open conflicts are reported;
- the Founder has enough information to approve, reject, or request iteration.
