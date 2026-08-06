# Feature Components

All smart (container) components live in this directory.

## Rules

- ✅ Inject services to obtain data
- ✅ Pass data to UI components via `@Input()` bindings
- ✅ Handle user actions and orchestrate business logic
- ❌ Minimal HTML — template should primarily be the UI component with bindings
- ❌ No presentational styling

## Structure

- `portfolio-*/` — Each feature component corresponds to a `portfolio-*-ui/` in the `ui/` directory
- `shared-*/` — Shared feature components that initialize their own `shared-*-ui/` counterparts.
  These are reusable page-level shells (e.g., hero page wrapper) that accept
  `<ng-content>` to compose different section content within a common layout.
