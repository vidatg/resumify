# SharedPageHeroComponent

| Property     | Value                          |
|-------------|--------------------------------|
| **Type**    | Feature (Smart)                |
| **Scope**   | Public (Shared)                |

## Responsibility

Shared feature component that provides the hero page shell for all primary-background pages (pages 1, 3, 5, 12). Injects `ResumeDataService` to generate the page configuration and delegates rendering to `SharedPageHeroUiComponent`.

Supports two modes via its inner UI component:
1. **Simple divider**: Pass `title` and `subtitle` inputs for section divider pages
2. **Content projection**: Project custom content via `<ng-content>` for unique hero layouts

## Usage

```html
<!-- Simple divider mode (pages 3, 5, 12) -->
<app-shared-page-hero
  [pageNumber]="3"
  title="Recognitions & Achievements"
  subtitle="Key accomplishments and certifications."
/>

<!-- Content projection mode (page 1) -->
<app-shared-page-hero [pageNumber]="1">
  <app-portfolio-hero />
</app-shared-page-hero>
```
