# PortfolioCompetencyUiComponent

| Property     | Value                          |
|-------------|--------------------------------|
| **Type**    | UI (Presentational)            |
| **Scope**   | Section-specific               |

## Responsibility

Renders the Competency Overview page (page 2) of the resume. Displays the professional profile summary, key metrics, core skills, tools matrix, and AI proficiency in a structured two-column layout. Extracted from `PortfolioHeroUiComponent` which previously rendered both pages 1 and 2.

## Usage

```html
<app-portfolio-competency-ui
  [introText]="introText"
  [skillsList]="skillsList"
  [toolsList]="toolsList"
  [aiToolsList]="aiToolsList"
  [metricsList]="metricsList"
  [pageConfig]="pageConfig"
/>
```
