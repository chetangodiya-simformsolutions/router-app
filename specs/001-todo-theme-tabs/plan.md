## Plan: Todo Data Templates in Existing Stack

Extend the current todo feature with predefined data templates inside the Todos creation flow, while preserving the two-tab structure and existing theme/history scope. Keep implementation within current stack only, with no new frameworks/packages and no test-writing tasks in this phase.

## Steps

1. Phase 1 - Spec and governance alignment
- Update feature scope to include predefined todo templates and template-based creation journey.
- Confirm constitution compliance: TypeScript-first Expo architecture, theme-token usage, persistence-by-default, E2E journey acceptance only.
- Dependency: none.

2. Phase 2 - Domain model design
- Define Todo Template entity shape and static built-in template catalog.
- Extend Todo Item model with optional templateId for traceability.
- Define fallback behavior when template catalog or entry is invalid.
- Dependency: Phase 1.

3. Phase 3 - Flow design
- Specify create flow sequence: open create action -> optional template selection -> prefilled editable fields -> save.
- Preserve manual creation path when no template is selected.
- Keep due date as date-only and completed history as read-only in Settings.
- Dependency: Phase 2.

4. Phase 4 - Architecture design without new packages
- Map modules under existing app structure for constants, types, state, storage, and UI.
- Reuse existing shared primitives for theme values and visual tokens.
- Ensure no new framework/package is added for templates/state/date/theming.
- Dependency: Phase 3.

5. Phase 5 - Persistence and compatibility
- Extend persisted todo schema with nullable templateId.
- Define backward-compatible restore for existing todos without template metadata.
- Define behavior for unknown templateId during restore.
- Dependency: Phase 4.

6. Phase 6 - UI integration roadmap
- Todos tab: add template picker and prefilled editable create form behavior.
- Settings tab: keep only theme selection and read-only completed history responsibilities.
- Preserve active todo actions: create, delete, complete, date-only due date.
- Dependency: Phase 4 and Phase 5.

7. Phase 7 - Accessibility and theming conformance
- Validate template UI follows shared theme primitives only.
- Validate readability and text scaling in Light, Dark, and Device Default modes.
- Dependency: Phase 6.

8. Phase 8 - Verification plan (no test-writing tasks)
- Define manual/E2E journey checks for:
- template select -> prefill -> edit -> save
- manual create without template
- complete/delete lifecycle
- restart persistence recovery
- theme switching and readability
- Dependency: Phase 7.

## Relevant Files

- /Users/chetan/Documents/routerApp/specs/001-todo-theme-tabs/spec.md - source of truth for updated feature scope and acceptance scenarios.
- /Users/chetan/Documents/routerApp/specs/001-todo-theme-tabs/plan.md - this implementation roadmap.
- /Users/chetan/Documents/routerApp/specs/001-todo-theme-tabs/tasks.md - dependency-ordered execution tasks generated from this plan.
- /Users/chetan/Documents/routerApp/.specify/memory/constitution.md - compliance guardrails.
- /Users/chetan/Documents/routerApp/src/ - implementation target for app modules.

## Verification

1. Confirm spec contains template-specific user story, FR-014 to FR-019, and template edge cases.
2. Confirm plan introduces no new framework/package dependencies.
3. Confirm plan preserves exactly two primary tabs and unchanged Settings responsibilities.
4. Confirm persistence/migration behavior is defined for both new and existing todo records.
5. Confirm verification section contains manual/E2E checks only and no test-writing deliverables.

## Decisions

- Included: predefined built-in templates only.
- Excluded: user-managed template CRUD, additional tabs/screens, new package/framework additions, and writing tests in this phase.
- Retained: due date is date-only; completed history remains read-only.
