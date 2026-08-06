# PortfolioProjectCardUiComponent

| Property     | Value                          |
|-------------|--------------------------------|
| **Type**    | UI (Presentational)            |
| **Scope**   | Private                        |
| **Parent**  | `portfolio-projects-ui`          |

## Responsibility

Renders a single project entry: header with title/subtitle/timeline/client, description with bold text highlighting, skill tags, and an adaptive gallery layout (2-column for 2 images, 3-column for 3 images).

## Usage

```html
<app-portfolio-project-card-ui [project]="project" [isLast]="last" />
```
