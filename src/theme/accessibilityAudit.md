# Accessibility and Theme Audit

## Text Scaling

- Todos and Settings screens use React Native `Text` styles that respect system text scaling.
- No fixed-height text containers prevent enlarged text from rendering.

## Contrast and Readability

- Light mode uses high-contrast text on secondary/background surfaces.
- Dark mode uses light text against dark surfaces.
- Validation and destructive affordances use distinct alert color treatment.

## Theme Modes

- Light, Dark, and Device Default are supported.
- Theme preference is persisted and rehydrated with fallback handling.

## Action Items

- Keep new visual components bound to shared theme context values.
- Validate final typography/contrast on real devices before release.
