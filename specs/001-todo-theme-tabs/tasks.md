# Tasks: Todo Data Templates in Existing Stack

**Input**: Design documents from `/specs/001-todo-theme-tabs/`
**Prerequisites**: `plan.md` (required), `spec.md` (required)

**Tests**: No test-writing tasks are included for this phase per clarification in `spec.md` and guidance in `plan.md`. Verification tasks below are manual/E2E journey checklists.

**Organization**: Tasks are grouped by user story so each story can be implemented and validated independently.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependency on incomplete tasks)
- **[Story]**: User story label (`[US1]`, `[US2]`, etc.)
- Every task includes a concrete file path using `in <path>`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Create base structure and feature scaffolding in the existing Expo Router stack.

- [x] T001 Create base Expo Router and feature folder structure in src/app/(tabs)/_layout.tsx
- [x] T002 Create initial shared domain type scaffold in src/types/todo.ts
- [x] T003 [P] Create initial theme mode type scaffold in src/types/theme.ts
- [x] T004 [P] Create storage key constants for todos/history/theme in src/storage/keys.ts

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Implement core platform pieces required before user story work starts.

**⚠️ CRITICAL**: Complete this phase before implementing user stories.

- [x] T005 Implement app-level provider host for theme and persisted state in src/app/_layout.tsx
- [x] T006 Implement exactly two primary tabs (Todos, Settings) in src/app/(tabs)/_layout.tsx
- [x] T007 [P] Implement light/dark/default theme tokens and palettes in src/theme/tokens.ts
- [x] T008 [P] Implement safe JSON persistence adapter with guard helpers and in-memory fallback path for AsyncStorage failures in src/storage/persistence.ts
- [x] T009 Extend Todo and related entities with optional templateId metadata in src/types/todo.ts
- [x] T010 Implement built-in predefined template catalog and validation helpers in src/constants/todoTemplates.ts
- [x] T011 Implement migration-safe restore helpers with unknown template fallback in src/storage/todoMigrations.ts
- [x] T012 Implement shared todo repository for active/completed/theme persistence in src/storage/todoRepository.ts
- [x] T038 [P] Produce component reuse audit (existing component considered, reuse decision, rationale) in specs/001-todo-theme-tabs/checklists/component-reuse-audit.md
- [x] T039 Link approved new-component rationale entries from reuse audit in specs/001-todo-theme-tabs/plan.md

**Checkpoint**: Foundation is ready; user story phases can proceed.

---

## Phase 3: User Story 1 - Manage Active Todos (Priority: P1) 🎯 MVP

**Goal**: Users can create todos with date-only due dates, complete active todos, and delete active todos in the Todos tab.

**Independent Test**: From the Todos tab, create a todo with a date, complete one todo, delete another todo, restart app, and confirm persisted state is correct.

### Implementation for User Story 1

- [x] T013 [P] [US1] Implement active todo item row with complete and delete actions in src/components/todos/ActiveTodoItem.tsx
- [x] T014 [P] [US1] Implement date-only due-date field and validation messaging in src/components/todos/DueDateField.tsx
- [x] T015 [US1] Implement todo create form with required title and due-date validation in src/components/todos/TodoForm.tsx
- [x] T016 [US1] Implement Todos tab screen wiring create/complete/delete journeys in src/app/(tabs)/todos.tsx
- [x] T017 [US1] Wire active-to-completed transitions and delete persistence behavior in src/storage/todoRepository.ts
- [x] T018 [US1] Document manual E2E checklist for create/complete/delete/restart in specs/001-todo-theme-tabs/checklists/e2e-us1.md

**Checkpoint**: User Story 1 is independently functional and manually verifiable.

---

## Phase 4: User Story 2 - Select and Persist Theme Preference (Priority: P2)

**Goal**: Users can select Light, Dark, or Device Default in Settings with immediate apply and restart persistence.

**Independent Test**: In Settings, switch across all three theme modes, verify immediate app update, restart app, and confirm selection persistence and fallback handling.

### Implementation for User Story 2

- [x] T019 [P] [US2] Implement theme selection control for Light/Dark/Device Default in src/components/settings/ThemeSelector.tsx
- [x] T020 [P] [US2] Implement device-theme resolution hook for Device Default mode in src/theme/useResolvedTheme.ts
- [x] T021 [US2] Integrate theme selection and immediate app-wide apply in src/app/(tabs)/settings.tsx
- [x] T022 [US2] Implement theme preference persistence with corrupted-data fallback in src/storage/themeStorage.ts
- [x] T023 [US2] Document manual E2E checklist for theme switch and restart persistence in specs/001-todo-theme-tabs/checklists/e2e-us2.md

**Checkpoint**: User Story 2 is independently functional and manually verifiable.

---

## Phase 5: User Story 3 - Create Todo From Template (Priority: P2)

**Goal**: Users can optionally select predefined templates to prefill editable todo fields, while manual creation remains available.

**Independent Test**: In Todos create flow, select template, verify prefill, edit fields, save todo, restart app, verify restored todo including template metadata handling.

### Implementation for User Story 3

- [x] T024 [P] [US3] Implement template picker component for todo create flow in src/components/todos/TemplatePicker.tsx
- [x] T025 [P] [US3] Implement template-to-form prefill mapper with editable override behavior in src/features/todos/templatePrefill.ts
- [x] T026 [US3] Integrate optional template selection into todo form flow in src/components/todos/TodoForm.tsx
- [x] T027 [US3] Persist nullable templateId and ignore invalid template payloads in src/storage/todoRepository.ts
- [x] T028 [US3] Implement empty/invalid template fallback to manual creation in src/app/(tabs)/todos.tsx
- [x] T029 [US3] Document manual E2E checklist for template select/prefill/edit/save/restart in specs/001-todo-theme-tabs/checklists/e2e-us3.md

**Checkpoint**: User Story 3 is independently functional and manually verifiable.

---

## Phase 6: User Story 4 - Review Completed Todo History (Priority: P3)

**Goal**: Users can view completed todos in a read-only Settings history section, including completion context and empty-state messaging.

**Independent Test**: Complete multiple todos in Todos, open Settings history, verify read-only display and completion context, restart app, confirm history remains.

### Implementation for User Story 4

- [x] T030 [P] [US4] Implement read-only completed history list component in src/components/settings/CompletedHistoryList.tsx
- [x] T031 [US4] Integrate completed history section with empty-state handling in src/app/(tabs)/settings.tsx
- [x] T032 [US4] Persist and expose completion metadata for history context in src/storage/todoRepository.ts
- [x] T033 [US4] Document manual E2E checklist for completed-history visibility/restart in specs/001-todo-theme-tabs/checklists/e2e-us4.md

**Checkpoint**: User Story 4 is independently functional and manually verifiable.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final quality and consistency checks across all stories.

- [x] T034 [P] Audit text scaling and contrast compliance across theme modes in src/theme/accessibilityAudit.md
- [x] T035 [P] Remove hardcoded colors and enforce shared token usage in src/app/(tabs)/todos.tsx
- [x] T036 [P] Remove hardcoded colors and enforce shared token usage in src/app/(tabs)/settings.tsx
- [x] T040 Add manual E2E error-journey coverage (empty title, invalid/unavailable date, corrupted theme preference fallback, empty template catalog fallback, invalid template payload fallback, unknown templateId restore, AsyncStorage failure -> in-memory continuity) in specs/001-todo-theme-tabs/checklists/verification-summary.md
- [x] T037 Consolidate final manual verification outcomes for all stories in specs/001-todo-theme-tabs/checklists/verification-summary.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies.
- **Phase 2 (Foundational)**: Depends on Phase 1 and blocks all user stories.
- **Phase 3 (US1)**: Starts after Phase 2.
- **Phase 4 (US2)**: Starts after Phase 2.
- **Phase 5 (US3)**: Starts after Phase 2 (recommended after US1 due to shared create form integration).
- **Phase 6 (US4)**: Starts after Phase 2 (recommended after US1 for completed-history data flow).
- **Phase 7 (Polish)**: Starts after target user stories are complete and MUST include `T040` before final signoff.

### User Story Dependency Graph

- **US1 (P1)**: Foundation only.
- **US2 (P2)**: Foundation only.
- **US3 (P2)**: Foundation only; integrates cleanly if US1 form work is already merged.
- **US4 (P3)**: Foundation only; validates best once US1 completion flow exists.

Suggested completion order: `US1 -> (US2 || US3) -> US4`

---

## Parallel Execution Examples

## Parallel Example: User Story 1

- Run `T013` and `T014` together (different files/components), then continue with `T015`.
- After `T016`, execute `T017` and `T018` in parallel.

## Parallel Example: User Story 2

- Run `T019` and `T020` together, then integrate with `T021`.
- Run `T022` and `T023` in parallel after `T021` is in place.

## Parallel Example: User Story 3

- Run `T024` and `T025` together, then integrate into `T026`.
- Run `T027` and `T029` in parallel after integration path is stable.

## Parallel Example: User Story 4

- Run `T030` and `T032` together, then finalize with `T031`.
- Execute `T033` in parallel with final visual verification.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1 and Phase 2.
2. Complete Phase 3 (US1).
3. Validate US1 manual/E2E checklist before moving on.

### Incremental Delivery

1. Deliver US1 for core todo management.
2. Deliver US2 for theme personalization and persistence.
3. Deliver US3 for template-accelerated creation.
4. Deliver US4 for read-only completed history.
5. Complete polish tasks for accessibility and token consistency.
6. Block release validation until `T038`, `T039`, and `T040` are complete.

### Parallel Team Strategy

1. Team completes Setup + Foundational together.
2. After Phase 2:
   - Developer A: US1
   - Developer B: US2
   - Developer C: US3
3. Merge and stabilize, then complete US4 and Phase 7.

---

## Notes

- `[P]` tasks are parallelizable by design across different files.
- User story labels provide direct traceability to `spec.md` scenarios.
- No unit-test or automated E2E-writing tasks are included in this phase by explicit requirement.
- Manual E2E checklist files are tracked as implementation deliverables.
