# AGENTS.md — Resume & Portfolio Application Guide

## Purpose

Angular application that renders two printable PDF documents:
1. **Resume** — ATS-optimized, text-dense, single-column layout for job portal uploads
2. **Portfolio** — Visual pitch deck with images, galleries, and metrics for direct outreach

Uses Angular Router to navigate between `/resume` and `/portfolio`. Run `npx ng serve` to preview, `Ctrl+P` to print/export PDF.

## Architecture: 3-Layer (core → feature → ui)

```
src/app/
├── core/           # Singleton services + data models (no UI)
│   ├── models/     # TypeScript interfaces (PersonalInfo, WorkExperience, Project, etc.)
│   └── services/   # ResumeDataService, PortfolioDataService, PdfService
├── feature/        # Smart components — inject services, pass data down
│   ├── resume-view/        # ATS resume (routed, lazy-loaded)
│   ├── portfolio-view/     # Visual portfolio (routed, lazy-loaded)
│   ├── shared-toolbar/     # Navigation toggle + print button (app shell)
│   ├── portfolio-*/        # Portfolio-only (1:1 with a portfolio-*-ui)
│   └── shared-*/           # Shared feature shells (compose via <ng-content>)
└── ui/             # Dumb components — @Input() only, OnPush, no services
    ├── resume-*-ui/        # Resume-specific (header, experience, section)
    ├── portfolio-*-ui/     # Portfolio-only (paired with feature/portfolio-*)
    └── shared-*-ui/        # Reusable atoms (footer, heading, skill tag, page hero)
```

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/resume` | `ResumeViewComponent` | ATS resume (default) |
| `/portfolio` | `PortfolioViewComponent` | Visual portfolio |
| `/` | Redirects to `/resume` | |

Both routes are **lazy-loaded** via `loadComponent()` in `app.config.ts`.

## Data Services (Fully Independent)

- **`ResumeDataService`** — All resume data: condensed intro, work experiences, education, languages, skills, tools, achievement bullets
- **`PortfolioDataService`** — All portfolio data: full narrative intro, projects with galleries, achievements with images, metrics
- **`PdfService`** — Route-aware print (sets document title before `window.print()`)

The two data services are **completely independent** — identical field values are duplicated intentionally so you can edit one without affecting the other. Each service owns its own `totalPages`, `footerName`, and `getPageConfig()`.

## Page Layout System

Two page classes are defined in `styles.css` (both screen and print):

| Class | Padding | Used By |
|-------|---------|---------|
| `.resume-page` | `18mm` | Portfolio content and hero pages |
| `.resume-page-compact` | `12mm 16mm` | Resume pages (tighter for text density) |

Both enforce A4 dimensions (`210mm × 297mm`), `page-break-after: always`, and `overflow: hidden`.

Hero pages override background with `class="resume-page !bg-primary !text-white"`.

## Portfolio Page Types

The portfolio uses two alternating page types:

- **Hero pages** — Dark primary background, used for intro, dividers, and closing. Rendered by `SharedPageHeroComponent` which supports two modes:
  - **Projection mode** (no `title` input): renders `<ng-content>` for custom content
  - **Divider mode** (`title` input set): renders centered title + optional subtitle
- **Content pages** — White background, used for competency, achievements, and project pages

## Naming Conventions

| Layer | Prefix | Example | Selector |
|-------|--------|---------|----------|
| Feature (portfolio) | `portfolio-{name}` | `PortfolioHeroComponent` | `app-portfolio-hero` |
| Feature (shared) | `shared-{scope}-{name}` | `SharedPageHeroComponent` | `app-shared-page-hero` |
| Feature (view) | `{doc}-view` | `ResumeViewComponent` | `app-resume-view` |
| UI (resume) | `resume-{name}-ui` | `ResumeHeaderUiComponent` | `app-resume-header-ui` |
| UI (portfolio) | `portfolio-{name}-ui` | `PortfolioHeroUiComponent` | `app-portfolio-hero-ui` |
| UI (shared) | `shared-{scope}-{name}-ui` | `SharedPageFooterUiComponent` | `app-shared-page-footer-ui` |

## Component Standards

- All components are **standalone** (no NgModules).
- UI components use `ChangeDetectionStrategy.OnPush`.
- No component-level `.css` files — all styling via Tailwind utility classes.
- Feature components inject services and pass data to UI components via `@Input()`.
- View components (`resume-view`, `portfolio-view`) are exported as both named and `default` for lazy routing.

## Data Models (`core/models/resume.models.ts`)

```typescript
PersonalInfo { name, jobTitle, phone, email, location, availability, heroImage, website, linkedin }
ToolCategory { key, values }
Metric { label, value }
AchievementItem { title, description, link, image }
Project { id, title, subtitle, date, client, description, boldText, skills[], heroImage, gallery[] }
ProjectGalleryItem { image, caption, fit?, position? }
ResumePageConfig { currentPage, totalPages, footerName }
WorkExperience { company, role, location, date, bullets[] }
Education { institution, location, degree, field, date }
Language { name, proficiency }
```

## Key Files for Common Tasks

### To change resume text or data
Edit `src/app/core/services/resume-data.service.ts`:
- `personalInfo` — name, job title, phone, email, location, LinkedIn, website
- `introText` — condensed professional summary
- `skillsList`, `toolsList`, `aiToolsList` — competency data
- `workExperiences` — array of `WorkExperience` entries
- `education` — degree info
- `languages` — language proficiencies
- `achievementBullets` — text-only achievement bullet points
- `totalPages` / `footerName` — page count and footer label

### To change portfolio text or data
Edit `src/app/core/services/portfolio-data.service.ts`:
- Same structure as resume but with portfolio-specific content
- `projectsList` — array of projects with galleries (each generates one page)
- `achievementItems` — achievement cards with images and links
- `metricsList` — key metrics

### To replace images
Drop files in `public/assets/` and update the path in `portfolio-data.service.ts`.
Naming convention: `{context}_{descriptor}.jpg` — e.g. `project_substly_01.png`.

### To add a new resume section
1. Create UI component in `ui/resume-{name}-ui/`
2. Add the section in `feature/resume-view/resume-view.component.html`
3. Add data to `resume-data.service.ts`
4. Increment `totalPages` if adding a page

### To add a new portfolio section
1. Create `feature/portfolio-{name}/` — smart component injecting `PortfolioDataService`
2. Create `ui/portfolio-{name}-ui/` — presentational component
3. Add data to `portfolio-data.service.ts` + increment `totalPages`
4. Add `<app-portfolio-{name} />` in `feature/portfolio-view/portfolio-view.component.html`
5. Import the feature component in `portfolio-view.component.ts`

## Project Configuration

- **Framework**: Angular 21 (standalone components, no NgModules)
- **Routing**: Angular Router with lazy-loaded routes
- **Styling**: Tailwind CSS v4 (`@import 'tailwindcss'` in `styles.css`)
- **Fonts**: Inter (sans), Playfair Display (serif) via Google Fonts
- **Colors**: `--color-primary: #1e1b4b`, `--color-accent: #4f46e5` (defined in `@theme` block)
- **Build**: `npx ng build` · **Serve**: `npx ng serve`
- **Print**: `window.print()` via `PdfService` — enable "Background Graphics" in print dialog
