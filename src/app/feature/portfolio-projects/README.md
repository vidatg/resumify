# PortfolioProjectsComponent

| Property     | Value                          |
|-------------|--------------------------------|
| **Type**    | Feature (Smart)                |
| **Scope**   | Public                         |

## Responsibility

Orchestrates a projects page (Pages 3-5) by injecting `ResumeDataService` to compute the correct project pair for the given page number, then delegates rendering to `PortfolioProjectsUiComponent`. Reused 3 times in the app shell with different `pageNumber` inputs.

## Usage

```html
<app-portfolio-projects [pageNumber]="3" [isFirstPage]="true" />
<app-portfolio-projects [pageNumber]="4" />
<app-portfolio-projects [pageNumber]="5" />
```
