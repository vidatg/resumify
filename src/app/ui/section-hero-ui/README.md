# SectionHeroUiComponent

| Property     | Value                          |
|-------------|--------------------------------|
| **Type**    | UI (Presentational)            |
| **Scope**   | Public                         |

## Responsibility

Renders the resume hero section (Page 1): personal identity header with portrait, executive summary, core skills grid, categorized tools matrix, and AI proficiency badges.

## Usage

```html
<app-section-hero-ui
  [personalInfo]="personalInfo"
  [introText]="introText"
  [skillsList]="skillsList"
  [toolsList]="toolsList"
  [aiToolsList]="aiToolsList"
  [pageConfig]="pageConfig"
/>
```
