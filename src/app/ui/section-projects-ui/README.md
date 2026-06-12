# SectionProjectsUiComponent

| Property     | Value                          |
|-------------|--------------------------------|
| **Type**    | UI (Presentational)            |
| **Scope**   | Public                         |

## Responsibility

Renders a projects page (Pages 3-5): page heading with continuation text, and delegates each project's rendering to the private `SectionProjectCardUiComponent`.

## Usage

```html
<app-section-projects-ui
  [projects]="projects"
  [isFirstPage]="true"
  [pageConfig]="pageConfig"
/>
```
