# SharedSkillTagUiComponent

| Property     | Value                          |
|-------------|--------------------------------|
| **Type**    | UI (Presentational)            |
| **Scope**   | Public (Shared)                |

## Responsibility

Renders a compact skill/tool badge with three visual variants: `default` (indigo), `ai` (emerald with status dot), and `compact` (smaller indigo for project skills).

## Usage

```html
<app-shared-skill-tag-ui label="SEO & SEM" />
<app-shared-skill-tag-ui label="ChatGPT" variant="ai" />
<app-shared-skill-tag-ui label="B2B SEO" variant="compact" />
```
