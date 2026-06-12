# SharedPageHeroUiComponent

| Property     | Value                          |
|-------------|--------------------------------|
| **Type**    | UI (Presentational)            |
| **Scope**   | Public (Shared)                |

## Responsibility

Renders a full-page hero shell with the primary color background and a dark-themed page footer. Supports two rendering modes:

1. **Simple divider mode**: When `title` is provided, renders a centered title + subtitle with decorative accent bars. Used for section divider pages (pages 3, 5, 12).
2. **Content projection mode**: When no `title` is provided, renders projected `<ng-content>`. Used for custom hero layouts (e.g., page 1's profile card).

## Usage

```html
<!-- Simple divider mode -->
<app-shared-page-hero-ui
  title="Selected Projects"
  subtitle="A detailed breakdown of campaigns and metrics."
  [pageConfig]="pageConfig"
/>

<!-- Content projection mode -->
<app-shared-page-hero-ui [pageConfig]="pageConfig">
  <!-- Custom hero content rendered here -->
</app-shared-page-hero-ui>
```
