# Manual E2E Checklist - US1 (Manage Active Todos)

- [x] Open Todos tab and confirm create form is visible.
- [x] Create todo with title and valid date-only value; verify item appears in active list.
- [x] Attempt create with empty title; verify save is blocked and validation guidance appears.
- [x] Attempt create with invalid date format/value; verify save is blocked and guidance appears.
- [x] Complete an active todo; verify it is removed from active list.
- [x] Delete an active todo; verify it is removed immediately.
- [x] Restart app and verify active/completed state remains consistent.
- [x] Simulate AsyncStorage failure and verify create/complete/delete still works for the active session via in-memory (`useState`) state.
