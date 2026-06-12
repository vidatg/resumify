# Core

Singleton services and shared data models that are instantiated once and available application-wide.

## Structure

- `models/` — TypeScript interfaces and types for the resume data model
- `services/` — Application-wide injectable services

## Rules

- All services use `providedIn: 'root'` (tree-shakable singletons)
- Models are pure interfaces — no classes or logic
- No UI components belong here
