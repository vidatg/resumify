# PortfolioCompetencyComponent

| Property     | Value                          |
|-------------|--------------------------------|
| **Type**    | Feature (Smart)                |
| **Scope**   | Section-specific               |

## Responsibility

Smart component for the Competency Overview page (page 2). Injects `ResumeDataService` to provide professional profile summary, key metrics, core skills, tools matrix, and AI proficiency data to its corresponding `PortfolioCompetencyUiComponent`.

Extracted from `PortfolioHeroComponent` which previously managed both pages 1 and 2.

## Usage

```html
<app-portfolio-competency />
```
