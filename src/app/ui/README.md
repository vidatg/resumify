# UI Components

All presentational (dumb) components live in this directory.

## Rules

- ❌ Never inject services
- ✅ Receive data only via `@Input()`
- ✅ Emit events only via `@Output()`
- ✅ Use `ChangeDetectionStrategy.OnPush`
- ✅ Can compose other UI components

## Naming Convention

All components end with the `-ui` suffix to denote their layer:

- `section-*-ui/` — Section-specific presentational components (paired 1:1 with feature components)
- `shared-*-ui/` — Shared reusable atoms used across multiple sections
- Nested subdirectories (e.g., `metric-card-ui/`) contain 🔒 private components scoped to their parent
