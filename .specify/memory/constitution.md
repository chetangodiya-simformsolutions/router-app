<!--
Sync Impact Report
- Version change: N/A (template) -> 1.0.0
- Modified principles:
	- Template Principle 1 -> I. TypeScript-First Expo Architecture
	- Template Principle 2 -> II. Component Reuse Before Creation
	- Template Principle 3 -> III. Theme-Ready UI as a Baseline
	- Template Principle 4 -> IV. Persistent Data as Default Behavior
	- Template Principle 5 -> V. E2E-Only Verification Gates
- Added sections:
	- Technology Standards
	- Delivery Workflow
- Removed sections:
	- None
- Templates requiring updates:
	- ✅ updated: .specify/templates/plan-template.md
	- ✅ updated: .specify/templates/spec-template.md
	- ✅ updated: .specify/templates/tasks-template.md
	- ✅ reviewed (no changes required): .github/prompts/speckit.constitution.prompt.md
	- ⚠ pending: .specify/templates/commands/*.md (directory not present)
- Follow-up TODOs:
	- None
-->

# Router App Constitution

## Core Principles

### I. TypeScript-First Expo Architecture
All application code MUST be authored in TypeScript. Mobile development MUST use Expo,
and app navigation MUST use Expo Router. Any proposal to use non-TypeScript files for
runtime logic or a different navigation framework requires an explicit architecture
exception approved before implementation.

Rationale: A unified stack reduces integration bugs, lowers onboarding friction, and
keeps build/runtime behavior predictable across iOS and Android.

### II. Component Reuse Before Creation
Feature work MUST reuse existing components before creating new ones. New components MUST
be introduced only when existing building blocks cannot satisfy requirements without
breaking readability or maintainability, and the reason MUST be documented in the feature
plan.

Rationale: Reuse improves consistency, shortens delivery time, and reduces long-term UI
maintenance costs.

### III. Theme-Ready UI as a Baseline
Every user-facing component MUST support the project theme system. Colors, typography,
spacing, and state styles MUST be sourced from shared theme tokens or theme helpers,
not hardcoded inline values.

Rationale: Theme support is required for consistent branding, accessibility, and scalable
visual evolution.

### IV. Persistent Data as Default Behavior
User and business data MUST persist across app restarts unless data is explicitly marked
ephemeral in the specification. Persistence mechanisms and failure handling MUST be defined
during planning for each persisted data category.

Rationale: Data loss is a product defect; persistence-by-default protects user trust and
supports offline or interrupted usage patterns.

### V. E2E-Only Verification Gates
End-to-end testing is REQUIRED for each critical user journey and release candidate.
Unit testing is NOT a default requirement for this project and MUST NOT be added as a
quality gate unless a later constitutional amendment introduces it.

Rationale: The current quality strategy prioritizes full-flow confidence in a mobile app
where integration boundaries and navigation behavior are primary risk areas.

## Technology Standards

- Runtime stack MUST remain TypeScript + Expo + Expo Router.
- Shared components MUST be organized for reuse and imported through stable paths.
- Theme primitives MUST be centralized and consumed by all visual components.
- Persisted data MUST define storage location, serialization format, and restore behavior.
- Test plans MUST include E2E coverage for primary, error, and persistence-recovery flows.

## Delivery Workflow

- Every spec and plan MUST include a Constitution Check that explicitly validates all
five core principles.
- Pull requests MUST describe how component reuse, theming, persistence, and E2E coverage
were implemented.
- Reviews MUST block merges when hardcoded theme values, unnecessary duplicate components,
or non-persistent required data paths are detected.
- Release readiness MUST include successful E2E execution evidence for critical journeys.

## Governance

This constitution is the source of truth for engineering decisions in this repository.
When guidance conflicts, this document takes precedence.

Amendment process:
1. Propose changes in a pull request that includes rationale and impacted templates/docs.
2. Obtain approval from project maintainers.
3. Update dependent templates and workflows in the same change.

Versioning policy:
- MAJOR: Removes or redefines an existing principle/governance rule in a backward-
incompatible manner.
- MINOR: Adds a new principle/section or materially expands mandatory guidance.
- PATCH: Clarifies language without changing normative meaning.

Compliance expectations:
- Plans, specs, tasks, and PR reviews MUST include constitution compliance checks.
- Violations MUST be documented with explicit waiver approval and expiration criteria.

**Version**: 1.0.0 | **Ratified**: 2026-03-23 | **Last Amended**: 2026-03-23
