# Portfolio Expansion: 5 New Interactive Project Mockups

## TL;DR

> **Quick Summary**: Convert 5 HTML design mockups (hospitality, fashion, retail, B2B) into interactive React components and integrate them into the existing portfolio — including project grid entries, full detail pages, bilingual translations, and homepage updates.
>
> **Deliverables**:
>
> - 5 new interactive mockup React components (~2000 lines each)
> - 5 new project detail pages at `/projects/[slug]`
> - Updated `/projects` page with 4 new industry filters and 11 total projects
> - Updated homepage "Recent Projects" to mix old and new
> - Complete EN + AR translations for all new content
>
> **Estimated Effort**: XL
> **Parallel Execution**: NO - sequential (each mockup must be fully integrated + build-verified before next)
> **Critical Path**: Task 1 (shared types) → Tasks 2-6 (mockups, sequential) → Task 7 (projects page) → Task 8 (homepage) → Task 9 (final QA)

---

## Context

### Original Request

User wants to add 5 HTML design mockups from `/mnt/sdb2/Apps/mantarayDigital/mochup/` to the Mantaray agency portfolio website as interactive React components, expanding the project showcase.

### Interview Summary

**Key Discussions**:

- **Purpose**: Portfolio expansion — add to existing `/projects` page, NOT a separate "What We Do" page
- **Presentation**: Interactive React components (like existing 6 projects), NOT static screenshots
- **Project status**: Design mockups/demos, NOT real client work
- **Naming**: Rebrand with generic portfolio-safe names
- **Detail pages**: Full `/projects/[slug]` pages with challenge/solution/capabilities (matching existing pattern)
- **Homepage**: Mix old and new projects in "Recent Projects" section
- **Testing**: No test infrastructure — visual QA via Playwright only

**Research Findings**:

- Existing mockup pattern: self-contained React components with `<style jsx>`, NO images, NO external CSS, 4 variants each
- Registry in `components/projects/mockups/index.tsx` (mockupConfig + projectVariants)
- Project metadata in `app/projects/[slug]/page.tsx` (projectMeta object)
- Project listing in `app/projects/page.tsx` (projects array + projectNames/Descriptions)
- All strings in `lib/translations.ts` (EN + AR must stay in sync)
- Source mockups use vanilla HTML/CSS with real images, Font Awesome icons, and some have multi-page structures

### Metis Review

**Identified Gaps** (addressed):

- **Image strategy**: Existing mockups use ZERO images — all CSS-rendered. New mockups must follow same pattern (CSS gradients, SVG icons, colored shapes)
- **Font Awesome dependency**: Momento and Amara use FA extensively — must convert all to inline SVG
- **Haven/Alpine are same property**: Both are design variations of "European Hut" — kept as 2 separate portfolio entries showing design exploration capability
- **Multi-page → 4 variants mapping**: Each mockup gets exactly 4 variants regardless of source HTML page count
- **RTL mockup direction**: Mockups render in fixed direction (matching their original design), independent of site language
- **Data structure indexing**: New entries append to end of existing arrays (indices 6-10)
- **Related projects links**: Need explicit related[] definitions for each new project

---

## Work Objectives

### Core Objective

Expand the Mantaray portfolio from 6 to 11 projects by converting 5 HTML mockups into interactive React components, fully integrated with the existing project showcase system.

### Concrete Deliverables

- `components/projects/mockups/Haven.tsx` — Luxury hospitality mockup (from v3-haven-retreats)
- `components/projects/mockups/Alpine.tsx` — Hospitality variant mockup (from v1-cabinluxe)
- `components/projects/mockups/Luxe.tsx` — Fashion e-commerce mockup (from picky-piece)
- `components/projects/mockups/Bazaar.tsx` — Retail marketplace mockup (from momento)
- `components/projects/mockups/Barista.tsx` — B2B equipment mockup (from amara-coffee)
- Updated `components/projects/mockups/index.tsx` — 5 new entries in mockupConfig, projectVariants, exports
- Updated `components/projects/mockups/shared/types.ts` — New data types for 5 mockups
- Updated `app/projects/page.tsx` — 5 new project entries + 4 new industry filters
- Updated `app/projects/[slug]/page.tsx` — 5 new projectMeta entries
- Updated `lib/translations.ts` — Complete EN + AR translations for all new projects
- Updated `app/page.tsx` — Mixed "Recent Projects" section

### Definition of Done

- [ ] `bun run build` succeeds with exit code 0
- [ ] `bun run lint` passes (no new lint errors)
- [ ] All 11 project detail pages load without 404 (`/projects/{slug}` for all slugs)
- [ ] `/projects` page shows 11 project cards with "All" filter
- [ ] Each new industry filter (hospitality, fashion, retail, b2b) shows correct subset
- [ ] Homepage "Recent Projects" section renders mix of old and new projects
- [ ] Arabic (RTL) mode renders all new content correctly
- [ ] Light/dark theme doesn't break any mockup rendering

### Must Have

- All 5 mockups as self-contained React components with `<style jsx>`
- Exactly 4 variants per mockup
- Complete bilingual EN + AR translations
- Full detail pages with challenge/solution/capabilities sections
- Browser chrome frame wrapper (`MockupFrame`) for all mockups
- Build passes after each integration

### Must NOT Have (Guardrails)

- **NO real images** in mockup components — CSS gradients, SVG icons, colored shapes only
- **NO Font Awesome** — convert all to inline SVG
- **NO external font imports** inside mockups — inherit from parent
- **NO localStorage, cart functionality, or working forms** — visual representation only
- **NO modifications to existing 6 mockup files** (Pulse, Bloom, Atlas, Nomad, Volt, Medix)
- **NO refactoring of existing data structures** in projects/page.tsx or [slug]/page.tsx
- **NO new CSS classes in globals.css** for mockups (use `<style jsx>` only)
- **NO more than 4 variants per mockup**
- **NO Tailwind classes inside mockup components** (use `<style jsx>` exclusively)
- **NO Google Fonts links inside mockup components**
- **NO parallax/scroll effects inside mockup frames**
- **NO carousel/slider additions to homepage**
- **NO changes to stats values** ("50+ Projects Launched" etc.)

---

## Verification Strategy (MANDATORY)

> **UNIVERSAL RULE: ZERO HUMAN INTERVENTION**
>
> ALL tasks in this plan MUST be verifiable WITHOUT any human action.
> This is NOT conditional — it applies to EVERY task, regardless of test strategy.

### Test Decision

- **Infrastructure exists**: NO
- **Automated tests**: None
- **Framework**: None

### Agent-Executed QA Scenarios (MANDATORY — ALL tasks)

> QA scenarios are the PRIMARY verification method for this plan.
> Every task uses Playwright for visual verification and Bash for build/lint checks.

**Verification Tool by Deliverable Type:**

| Type                  | Tool                          | How Agent Verifies                                            |
| --------------------- | ----------------------------- | ------------------------------------------------------------- |
| **Mockup components** | Playwright (playwright skill) | Navigate to project detail, verify mockup renders, screenshot |
| **Project pages**     | Playwright (playwright skill) | Navigate, verify sections, filter, screenshot                 |
| **Translations**      | Playwright (playwright skill) | Switch to AR, verify content renders, screenshot              |
| **Build integrity**   | Bash                          | `bun run build && bun run lint`                               |

---

## Execution Strategy

### Sequential Execution (NO Parallelism)

```
Task 1: Shared types + preparation
    ↓
Task 2: Barista Pro mockup (simplest — establishes pattern)
    ↓
Task 3: Luxe Threads mockup (e-commerce)
    ↓
Task 4: Bazaar Hub mockup (retail)
    ↓
Task 5: Haven Retreats mockup (hospitality v3)
    ↓
Task 6: Alpine Lodge mockup (hospitality v1)
    ↓
Task 7: Projects page integration (all 5 + filters)
    ↓
Task 8: Homepage update (mix old and new)
    ↓
Task 9: Final QA + translations review
```

**Rationale**: Each mockup must be fully integrated (component + registry + translations + metadata) and build-verified before starting the next. Parallel mockup development with simultaneous translation/registry changes = merge nightmare.

### Dependency Matrix

| Task | Depends On | Blocks | Can Parallelize With |
| ---- | ---------- | ------ | -------------------- |
| 1    | None       | 2-6    | None                 |
| 2    | 1          | 7      | None                 |
| 3    | 2          | 7      | None                 |
| 4    | 3          | 7      | None                 |
| 5    | 4          | 7      | None                 |
| 6    | 5          | 7      | None                 |
| 7    | 2-6        | 8      | None                 |
| 8    | 7          | 9      | None                 |
| 9    | 8          | None   | None                 |

### Agent Dispatch Summary

| Task | Description               | Recommended Agent                                               |
| ---- | ------------------------- | --------------------------------------------------------------- |
| 1    | Shared types setup        | task(category="quick")                                          |
| 2-6  | Mockup creation (each)    | task(category="visual-engineering")                             |
| 7    | Projects page integration | task(category="unspecified-high")                               |
| 8    | Homepage update           | task(category="quick")                                          |
| 9    | Final QA                  | task(category="visual-engineering", load_skills=["playwright"]) |

---

## Project Name & Slug Mapping

| Source Mockup     | Portfolio Name | Slug      | Industry    | Source Path                               |
| ----------------- | -------------- | --------- | ----------- | ----------------------------------------- |
| v3-haven-retreats | Haven Retreats | `haven`   | hospitality | `mochup/mockup-3-main/v3-haven-retreats/` |
| v1-cabinluxe      | Alpine Lodge   | `alpine`  | hospitality | `mochup/mockup-1-main/v1-cabinluxe/`      |
| picky-piece       | Luxe Threads   | `luxe`    | fashion     | `mochup/picky-piece-main/`                |
| momento           | Bazaar Hub     | `bazaar`  | retail      | `mochup/momento-main/`                    |
| amara-coffee      | Barista Pro    | `barista` | b2b         | `mochup/amara-coffee-main/`               |

## Variant Mapping

| Project        | Variant 1 (Hero)            | Variant 2 (Challenge)               | Variant 3 (Solution)                | Variant 4 (Extra)             |
| -------------- | --------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------- |
| Haven Retreats | `home` (hero + cabin cards) | `cabins` (cabin listing/comparison) | `experience` (amenities + gallery)  | `booking` (rules + contact)   |
| Alpine Lodge   | `home` (hero + features)    | `cabins` (property showcase)        | `gallery` (photo mosaic)            | `contact` (booking form)      |
| Luxe Threads   | `home` (hero + products)    | `products` (catalog grid)           | `cart` (cart sidebar view)          | `checkout` (checkout modal)   |
| Bazaar Hub     | `home` (hero + categories)  | `categories` (department grid)      | `products` (product catalog)        | `branches` (branch locator)   |
| Barista Pro    | `home` (hero + brands)      | `products` (equipment catalog)      | `services` (maintenance + training) | `gallery` (social media grid) |

---

## TODOs

- [x] 1. Setup Shared Types for 5 New Mockups

  **What to do**:
  - Add new data types to `components/projects/mockups/shared/types.ts` for each mockup domain:
    - `HospitalityData`, `Cabin`, `Amenity` (for Haven + Alpine)
    - `FashionData`, `FashionProduct`, `CartItem` (for Luxe)
    - `RetailData`, `RetailProduct`, `Category`, `Branch` (for Bazaar)
    - `B2BData`, `Equipment`, `Service`, `Brand` (for Barista)
  - Follow the existing type patterns — look at `FintechData`, `EcommerceData`, etc.
  - These are for hardcoded fake data, not API types

  **Must NOT do**:
  - Do NOT modify existing types (FintechData, EcommerceData, etc.)
  - Do NOT over-engineer — keep types simple, matching existing complexity level

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Small type definitions file, straightforward task
  - **Skills**: []
    - No special skills needed for type definitions

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential (first task)
  - **Blocks**: Tasks 2-6
  - **Blocked By**: None

  **References**:

  **Pattern References**:
  - `components/projects/mockups/shared/types.ts` — ALL existing type definitions. Follow same structure (interface per entity, data container type per domain)

  **Source References** (what data to model):
  - `/mnt/sdb2/Apps/mantarayDigital/mochup/mockup-3-main/v3-haven-retreats/index.html` — Cabin data: name, bedrooms, price, features, badges
  - `/mnt/sdb2/Apps/mantarayDigital/mochup/picky-piece-main/index.html` — Fashion data: product name, price, size, brand, badge
  - `/mnt/sdb2/Apps/mantarayDigital/mochup/momento-main/index.html` — Retail data: category name, product count, branch name/location
  - `/mnt/sdb2/Apps/mantarayDigital/mochup/amara-coffee-main/index.html` — B2B data: equipment name, brand, price, rating, service types

  **Acceptance Criteria**:
  - [ ] File `components/projects/mockups/shared/types.ts` updated with new types
  - [ ] Existing types unchanged (FintechData, EcommerceData, etc.)
  - [ ] `bun run build` succeeds
  - [ ] `bun run lint` passes

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Build passes after type additions
    Tool: Bash
    Preconditions: None
    Steps:
      1. Run: bun run build
      2. Assert: exit code 0
      3. Run: bun run lint
      4. Assert: exit code 0 (only pre-existing eslint-disable allowed)
    Expected Result: No type errors, no lint errors
    Evidence: Build output captured
  ```

  **Commit**: YES
  - Message: `feat(mockups): add shared types for 5 new portfolio mockups`
  - Files: `components/projects/mockups/shared/types.ts`
  - Pre-commit: `bun run build`

---

- [x] 2. Create Barista Pro Mockup (B2B Equipment — Amara Coffee)

  **What to do**:
  - Create `components/projects/mockups/Barista.tsx` — interactive B2B coffee equipment mockup
  - Convert the HTML/CSS from source mockup into self-contained React component with `<style jsx>`
  - Implement 4 variants: `home`, `products`, `services`, `gallery`
    - **home**: Hero section with animated brand names, premium green/gold aesthetic, feature stats, floating CTA
    - **products**: Equipment catalog grid with tab filters (Espresso Machines, Grinders, Blenders), product cards with badges (Hot, New, Sale), ratings, price
    - **services**: Service ecosystem cards (Installation, Maintenance, Training, Consulting), package highlight card
    - **gallery**: Social media-style grid (Instagram posts), testimonials section, newsletter CTA
  - Use `MockupFrame` wrapper from `shared/`
  - All data hardcoded inside component (fake equipment names, prices, ratings)
  - Replace ALL Font Awesome icons (`<i class="fas fa-...">`) with inline SVG equivalents
  - Replace ALL real images with CSS gradients, colored rectangles, SVG placeholders
  - Color palette: Forest Green (#1a5632), Gold (#c49a6c), Cream (#faf8f5) — recreated in CSS only
  - Register in `index.tsx`: import, mockupConfig entry, projectVariants entry, export
  - Add `barista` project metadata to `app/projects/[slug]/page.tsx` projectMeta object
  - Add `barista` entry to `app/projects/page.tsx` projects array + projectNames + projectDescriptions
  - Add complete EN + AR translations to `lib/translations.ts` for `projectDetail.projects.barista`
  - Add `b2b` industry filter to translations `projectsPage.industries`

  **Must NOT do**:
  - Do NOT use real images — CSS gradients and colored shapes only
  - Do NOT import Font Awesome
  - Do NOT implement working contact forms or WhatsApp links
  - Do NOT add Google Fonts inside the component
  - Do NOT use Tailwind classes — `<style jsx>` only inside mockup
  - Do NOT modify any existing mockup files

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Heavy CSS work recreating a premium visual design in pure CSS/JSX
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Needed for translating the Amara Coffee premium aesthetic into CSS-only visual representation

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential
  - **Blocks**: Task 3
  - **Blocked By**: Task 1

  **References**:

  **Pattern References** (existing code to follow):
  - `components/projects/mockups/Bloom.tsx` — Best reference for e-commerce/catalog mockup pattern (product grid, tabs, cards). Study the full file structure, variant switching, and `<style jsx>` organization
  - `components/projects/mockups/Pulse.tsx` — Reference for dashboard-style layout with stats/cards
  - `components/projects/mockups/index.tsx:101-108` — How to register in mockupConfig (component + gradient)
  - `components/projects/mockups/index.tsx:112-149` — How to add projectVariants (4 entries per slug)
  - `components/projects/mockups/index.tsx:167` — Export list to append to
  - `components/projects/mockups/shared/MockupFrame.tsx` — Browser chrome wrapper to use
  - `app/projects/[slug]/page.tsx:36-85` — projectMeta entry structure (title, timelineEn/Ar, tech, related)
  - `app/projects/page.tsx:8-51` — projects array entry structure (slug, titleKey, industry, timeline, tech)
  - `app/projects/page.tsx:53-75` — projectNames and projectDescriptions bilingual arrays

  **Source References** (HTML to convert):
  - `/mnt/sdb2/Apps/mantarayDigital/mochup/amara-coffee-main/index.html` — FULL source HTML. Study: hero layout, product grid with tabs, service cards, social gallery, testimonials, color palette, typography hierarchy, floating elements
  - This is the simplest source mockup (single page, English-first) — good first conversion to establish the pattern

  **API/Type References**:
  - `components/projects/mockups/shared/types.ts` — Use `B2BData`, `Equipment`, `Service`, `Brand` types (from Task 1)

  **Translation References**:
  - `lib/translations.ts` — Search for `projectDetail.projects.pulse` to see the exact shape needed per project (industry, description, challenge, solution, capabilities[4] with title+description)

  **Acceptance Criteria**:
  - [ ] File `components/projects/mockups/Barista.tsx` exists and exports `BaristaMockup`
  - [ ] Component registered in `index.tsx` (mockupConfig, projectVariants with 4 entries, export)
  - [ ] `projectMeta.barista` exists in `app/projects/[slug]/page.tsx`
  - [ ] `barista` entry in projects array in `app/projects/page.tsx`
  - [ ] EN + AR translations for `projectDetail.projects.barista` in `lib/translations.ts`
  - [ ] `bun run build` succeeds
  - [ ] `bun run lint` passes

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Barista Pro detail page loads and shows all sections
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running (bun dev) on localhost:3000
    Steps:
      1. Navigate to: http://localhost:3000/projects/barista
      2. Wait for: page fully loaded (timeout: 10s)
      3. Assert: Page does NOT show 404
      4. Assert: h1 contains "Barista Pro"
      5. Assert: Page contains text "The Challenge" (or equivalent section label)
      6. Assert: Page contains text "The Solution" (or equivalent section label)
      7. Assert: Page contains text "Key Capabilities" section
      8. Assert: Mockup screenshot area is visible and contains rendered content
      9. Screenshot: .sisyphus/evidence/task-2-barista-detail.png
    Expected Result: Full project detail page with all sections
    Evidence: .sisyphus/evidence/task-2-barista-detail.png

  Scenario: Barista Pro mockup renders all 4 variants
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running on localhost:3000
    Steps:
      1. Navigate to: http://localhost:3000/projects/barista
      2. Assert: Hero mockup screenshot is visible (home variant)
      3. Assert: Challenge section mockup is visible (products variant)
      4. Assert: Solution section mockup is visible (services variant)
      5. Screenshot: .sisyphus/evidence/task-2-barista-variants.png
    Expected Result: All mockup variants render without errors
    Evidence: .sisyphus/evidence/task-2-barista-variants.png

  Scenario: Build integrity after Barista integration
    Tool: Bash
    Preconditions: None
    Steps:
      1. Run: bun run build
      2. Assert: exit code 0
      3. Run: bun run lint
      4. Assert: exit code 0
    Expected Result: Clean build, no regressions
    Evidence: Build output captured
  ```

  **Commit**: YES
  - Message: `feat(mockups): add Barista Pro interactive B2B equipment mockup`
  - Files: `components/projects/mockups/Barista.tsx`, `components/projects/mockups/index.tsx`, `app/projects/[slug]/page.tsx`, `app/projects/page.tsx`, `lib/translations.ts`
  - Pre-commit: `bun run build`

---

- [ ] 3. Create Luxe Threads Mockup (Fashion E-commerce — Picky Piece)

  **What to do**:
  - Create `components/projects/mockups/Luxe.tsx` — interactive fashion e-commerce mockup
  - Convert the HTML/CSS from source mockup into self-contained React component with `<style jsx>`
  - Implement 4 variants: `home`, `products`, `cart`, `checkout`
    - **home**: Hero with cream/warm-beige/brown palette, "Curated Fashion" branding, product spotlight cards with badges (Best Seller, New), trust badges (same-day delivery, quality guarantee), stats section
    - **products**: Product catalog grid with filtering tags, product cards with image placeholder, price, size selector, "Add to Cart" button states
    - **cart**: Cart sidebar view — item list with quantity controls, subtotal calculation, checkout CTA
    - **checkout**: Checkout modal — shipping form fields, order summary, payment section, success confirmation
  - NOTE: This mockup is RTL-first (Arabic). Render the mockup content in RTL direction internally (matching original design), independent of site language direction
  - Color palette: Cream (#faf5ef), Warm Beige (#e8ddd0), Brown (#8b6f47), Dark (#2c2c2c)
  - Replace ALL real product images (jacket.jpg, coat.jpg, etc.) with CSS gradient placeholders
  - All interactive elements (cart, checkout) are VISUAL ONLY — no state management
  - Register in `index.tsx` and all other integration points (same as Task 2)
  - Add `fashion` industry filter to translations

  **Must NOT do**:
  - Do NOT implement working cart functionality (no state, no add-to-cart logic)
  - Do NOT use real product images
  - Do NOT implement real form validation in checkout view
  - Do NOT import Font Awesome or Google Fonts
  - Do NOT modify existing mockup files

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Complex e-commerce UI with multiple interactive-looking views, RTL rendering
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Fashion e-commerce aesthetic, cart/checkout visual design

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential
  - **Blocks**: Task 4
  - **Blocked By**: Task 2

  **References**:

  **Pattern References**:
  - `components/projects/mockups/Bloom.tsx` — CLOSEST existing reference (e-commerce mockup with product grid, product detail, cart-like views). Study variant switching, product card layout, and style organization
  - `components/projects/mockups/Barista.tsx` — Reference from Task 2 for the newly established conversion pattern
  - `components/projects/mockups/index.tsx` — Registration pattern (same as Task 2)
  - `app/projects/[slug]/page.tsx:36-85` — projectMeta entry
  - `app/projects/page.tsx:8-75` — projects array + names/descriptions

  **Source References**:
  - `/mnt/sdb2/Apps/mantarayDigital/mochup/picky-piece-main/index.html` — FULL source HTML. Study: RTL layout, product cards with badges, cart sidebar with quantity controls, checkout modal with form, success toast, warm feminine color palette, typography (Playfair Display headings), trust badges
  - `/mnt/sdb2/Apps/mantarayDigital/mochup/picky-piece-main/picky piece.md` — Client description (Arabic) — use as basis for writing project description translations

  **API/Type References**:
  - `components/projects/mockups/shared/types.ts` — Use `FashionData`, `FashionProduct`, `CartItem` types (from Task 1)

  **Acceptance Criteria**:
  - [ ] File `components/projects/mockups/Luxe.tsx` exists and exports `LuxeMockup`
  - [ ] Component registered in `index.tsx` (mockupConfig, projectVariants with 4 entries, export)
  - [ ] `projectMeta.luxe` exists in `app/projects/[slug]/page.tsx`
  - [ ] `luxe` entry in projects array in `app/projects/page.tsx`
  - [ ] EN + AR translations for `projectDetail.projects.luxe` in `lib/translations.ts`
  - [ ] Mockup renders RTL content internally
  - [ ] `bun run build` succeeds
  - [ ] `bun run lint` passes

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Luxe Threads detail page loads with all sections
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running on localhost:3000
    Steps:
      1. Navigate to: http://localhost:3000/projects/luxe
      2. Wait for: page fully loaded (timeout: 10s)
      3. Assert: Page does NOT show 404
      4. Assert: h1 contains "Luxe Threads"
      5. Assert: Page contains challenge and solution sections
      6. Assert: 4 capability cards visible
      7. Screenshot: .sisyphus/evidence/task-3-luxe-detail.png
    Expected Result: Full detail page renders
    Evidence: .sisyphus/evidence/task-3-luxe-detail.png

  Scenario: Luxe Threads mockup renders RTL content
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running on localhost:3000
    Steps:
      1. Navigate to: http://localhost:3000/projects/luxe
      2. Assert: Mockup area contains Arabic-direction text elements
      3. Screenshot: .sisyphus/evidence/task-3-luxe-rtl.png
    Expected Result: RTL mockup content visible within the page
    Evidence: .sisyphus/evidence/task-3-luxe-rtl.png

  Scenario: Build integrity after Luxe integration
    Tool: Bash
    Steps:
      1. Run: bun run build
      2. Assert: exit code 0
      3. Run: bun run lint
      4. Assert: exit code 0
    Expected Result: Clean build
    Evidence: Build output captured
  ```

  **Commit**: YES
  - Message: `feat(mockups): add Luxe Threads interactive fashion e-commerce mockup`
  - Files: `components/projects/mockups/Luxe.tsx`, `components/projects/mockups/index.tsx`, `app/projects/[slug]/page.tsx`, `app/projects/page.tsx`, `lib/translations.ts`
  - Pre-commit: `bun run build`

---

- [ ] 4. Create Bazaar Hub Mockup (Retail Marketplace — Momento)

  **What to do**:
  - Create `components/projects/mockups/Bazaar.tsx` — interactive retail marketplace mockup
  - Convert the HTML/CSS from source mockup into self-contained React component with `<style jsx>`
  - Implement 4 variants: `home`, `categories`, `products`, `branches`
    - **home**: Hero with "One Stop Shop" branding, category badge icons, value propositions (10k+ products, 5 branches, unified pricing), social media reels-style grid
    - **categories**: Department grid — 13+ category cards (Accessories, Makeup, Household, Toys, Decor, etc.) with icon and product count
    - **products**: Product catalog with grid layout, product cards with image placeholder, price, badge, "Add to Cart" button, WhatsApp-style CTA
    - **branches**: Branch locator — 5 branch cards with name, area, map placeholder, contact info
  - NOTE: This mockup is RTL-first (Arabic). Render in RTL direction internally
  - Color palette: Dark (#1a1a2e), Purple (#16213e), Gold/Orange (#e94560), White
  - Convert ALL Font Awesome icons to inline SVG
  - Replace ALL product images with CSS colored placeholders
  - Register in `index.tsx` and all integration points
  - Add `retail` industry filter to translations

  **Must NOT do**:
  - Do NOT implement localStorage cart
  - Do NOT use Font Awesome CDN
  - Do NOT use real product/branch images
  - Do NOT implement working navigation between mockup "pages"
  - Do NOT modify existing mockup files

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Complex retail catalog UI with category grid, product cards, branch locator
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Retail marketplace visual design, category grids

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential
  - **Blocks**: Task 5
  - **Blocked By**: Task 3

  **References**:

  **Pattern References**:
  - `components/projects/mockups/Bloom.tsx` — Reference for e-commerce/catalog pattern
  - `components/projects/mockups/Barista.tsx` — Reference from Task 2
  - `components/projects/mockups/Luxe.tsx` — Reference from Task 3 for RTL mockup pattern
  - `components/projects/mockups/index.tsx` — Registration pattern

  **Source References**:
  - `/mnt/sdb2/Apps/mantarayDigital/mochup/momento-main/index.html` — Main page: hero, about, categories, branches, social gallery, contact
  - `/mnt/sdb2/Apps/mantarayDigital/mochup/momento-main/products.html` — Product catalog page: navbar, product grid with cart, filtering
  - `/mnt/sdb2/Apps/mantarayDigital/mochup/momento-main/style.css` — Full CSS file with animations, color variables, responsive design
  - `/mnt/sdb2/Apps/mantarayDigital/mochup/momento-main/momento.md` — Client description (Arabic) — basis for translations

  **API/Type References**:
  - `components/projects/mockups/shared/types.ts` — Use `RetailData`, `RetailProduct`, `Category`, `Branch` types

  **Acceptance Criteria**:
  - [ ] File `components/projects/mockups/Bazaar.tsx` exists and exports `BazaarMockup`
  - [ ] Component registered in `index.tsx`
  - [ ] `projectMeta.bazaar` exists in `app/projects/[slug]/page.tsx`
  - [ ] `bazaar` entry in projects array in `app/projects/page.tsx`
  - [ ] EN + AR translations complete
  - [ ] `bun run build` succeeds
  - [ ] `bun run lint` passes

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Bazaar Hub detail page loads
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running on localhost:3000
    Steps:
      1. Navigate to: http://localhost:3000/projects/bazaar
      2. Wait for: page fully loaded (timeout: 10s)
      3. Assert: Page does NOT show 404
      4. Assert: h1 contains "Bazaar Hub"
      5. Assert: All standard sections present (challenge, solution, capabilities)
      6. Screenshot: .sisyphus/evidence/task-4-bazaar-detail.png
    Expected Result: Full detail page with all sections
    Evidence: .sisyphus/evidence/task-4-bazaar-detail.png

  Scenario: Build integrity after Bazaar integration
    Tool: Bash
    Steps:
      1. Run: bun run build
      2. Assert: exit code 0
    Expected Result: Clean build
    Evidence: Build output captured
  ```

  **Commit**: YES
  - Message: `feat(mockups): add Bazaar Hub interactive retail marketplace mockup`
  - Files: `components/projects/mockups/Bazaar.tsx`, `components/projects/mockups/index.tsx`, `app/projects/[slug]/page.tsx`, `app/projects/page.tsx`, `lib/translations.ts`
  - Pre-commit: `bun run build`

---

- [ ] 5. Create Haven Retreats Mockup (Luxury Hospitality — European Hut v3)

  **What to do**:
  - Create `components/projects/mockups/Haven.tsx` — interactive luxury hospitality mockup
  - Convert from v3-haven-retreats HTML/CSS into self-contained React with `<style jsx>`
  - Implement 4 variants: `home`, `cabins`, `experience`, `booking`
    - **home**: Hero with "Discover Privacy Redefined" headline, location badges (Cairo-Alexandria Desert Road), cabin feature highlights (A-Frame architecture, heated pools, designer living), primary CTA
    - **cabins**: Cabin showcase grid — 4 cabin cards with name, bedrooms, price range (7,000-15,000 EGP), feature tags (Jacuzzi, Glass Pool, Privacy), dynamic badges (Best Seller, Premium, Best Value)
    - **experience**: Amenities grid (Heated Pool, Filming Available, Climate Control, Supermarket Nearby), photo gallery mosaic layout with overlay text
    - **booking**: House rules cards (guest limits, check-in times, photo policy), contact section (WhatsApp, Phone, Google Maps placeholders), bilingual footer
  - Color palette: Sage Green (#7C8C6E), Warm White (#FDFCFA), Warm Beige (#F5F0EB), Dark Green (#4A5D3E)
  - Typography recreation: serif heading style (DM Serif Display feel), clean sans body
  - Replace ALL real cabin/pool images with CSS gradient landscapes and geometric shapes
  - Register in all integration points
  - Add `hospitality` industry filter to translations

  **Must NOT do**:
  - Do NOT use real cabin/pool photos
  - Do NOT implement real WhatsApp/Phone links
  - Do NOT implement real Google Maps embed
  - Do NOT build all 8 HTML pages — only 4 variants
  - Do NOT build login/register views

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Luxury aesthetic requiring careful CSS recreation of premium hospitality design
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Luxury hospitality aesthetic, property cards, amenity grids

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential
  - **Blocks**: Task 6
  - **Blocked By**: Task 4

  **References**:

  **Pattern References**:
  - `components/projects/mockups/Nomad.tsx` — CLOSEST existing reference (travel/property booking mockup with search, results, property detail, booking views)
  - `components/projects/mockups/Bloom.tsx` — Reference for product/catalog card grids
  - Previous mockups (Barista, Luxe, Bazaar) — Established conversion patterns

  **Source References**:
  - `/mnt/sdb2/Apps/mantarayDigital/mochup/mockup-3-main/v3-haven-retreats/index.html` — Main page (786 lines): hero, highlights, cabin cards, amenities, gallery, rules, contact
  - `/mnt/sdb2/Apps/mantarayDigital/mochup/mockup-3-main/v3-haven-retreats/cabins.html` — Cabin comparison/detail page
  - `/mnt/sdb2/Apps/mantarayDigital/mochup/mockup-3-main/v3-haven-retreats/experience.html` — Amenities and experience page
  - `/mnt/sdb2/Apps/mantarayDigital/mochup/mockup-3-main/v3-haven-retreats/styles.css` — Full CSS (2,290 lines): design tokens, layouts, animations, responsive breakpoints

  **API/Type References**:
  - `components/projects/mockups/shared/types.ts` — Use `HospitalityData`, `Cabin`, `Amenity` types

  **Acceptance Criteria**:
  - [ ] File `components/projects/mockups/Haven.tsx` exists and exports `HavenMockup`
  - [ ] Component registered in `index.tsx`
  - [ ] `projectMeta.haven` exists in `app/projects/[slug]/page.tsx`
  - [ ] EN + AR translations complete
  - [ ] `bun run build` succeeds
  - [ ] `bun run lint` passes

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Haven Retreats detail page loads
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running on localhost:3000
    Steps:
      1. Navigate to: http://localhost:3000/projects/haven
      2. Assert: Page does NOT show 404
      3. Assert: h1 contains "Haven Retreats"
      4. Assert: All standard sections present
      5. Screenshot: .sisyphus/evidence/task-5-haven-detail.png
    Expected Result: Full detail page renders
    Evidence: .sisyphus/evidence/task-5-haven-detail.png

  Scenario: Build integrity
    Tool: Bash
    Steps:
      1. Run: bun run build
      2. Assert: exit code 0
    Expected Result: Clean build
    Evidence: Build output captured
  ```

  **Commit**: YES
  - Message: `feat(mockups): add Haven Retreats interactive luxury hospitality mockup`
  - Files: `components/projects/mockups/Haven.tsx`, `components/projects/mockups/index.tsx`, `app/projects/[slug]/page.tsx`, `app/projects/page.tsx`, `lib/translations.ts`
  - Pre-commit: `bun run build`

---

- [ ] 6. Create Alpine Lodge Mockup (Hospitality Variant — European Hut v1)

  **What to do**:
  - Create `components/projects/mockups/Alpine.tsx` — interactive hospitality variant mockup
  - Convert from v1-cabinluxe HTML/CSS into self-contained React with `<style jsx>`
  - Implement 4 variants: `home`, `cabins`, `gallery`, `contact`
    - **home**: Hero with "Privacy" and "European Elegance" branding, serif typography (Cormorant Garamond feel), immersive imagery recreation, key features highlight
    - **cabins**: Property showcase — 4 cabin cards with pricing (7,000–15,000 EGP/day), amenity tags (Heated pools, Jacuzzi, Bedrooms), WhatsApp booking CTA placeholder
    - **gallery**: Photo gallery mosaic — CSS-only recreation of architectural and interior photography grid, with hover overlays
    - **contact**: Contact/booking section — location details, operating hours, communication channels (WhatsApp, Phone, Maps placeholders)
  - NOTE: This is a DIFFERENT DESIGN VERSION of the same property concept as Haven Retreats. Different color palette, different typography style, different layout approach — demonstrates design exploration capability
  - Color palette: Dark (#1a1a1a), Rich Brown (#8B6C4D), Cream (#FAF7F2), Gold accents
  - Register in all integration points (uses same `hospitality` industry filter as Haven)

  **Must NOT do**:
  - Do NOT copy Haven Retreats component — this must be a distinctly different design
  - Do NOT use real images
  - Do NOT implement real booking/WhatsApp links
  - Do NOT build login/register views

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Second hospitality variant requiring distinctly different aesthetic from Haven
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Alternative luxury aesthetic, design variation exploration

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential
  - **Blocks**: Task 7
  - **Blocked By**: Task 5

  **References**:

  **Pattern References**:
  - `components/projects/mockups/Haven.tsx` — Sibling hospitality mockup from Task 5 (MUST be distinctly different in visual design)
  - `components/projects/mockups/Nomad.tsx` — Travel/booking mockup reference
  - Previous mockups — Established patterns

  **Source References**:
  - `/mnt/sdb2/Apps/mantarayDigital/mochup/mockup-1-main/v1-cabinluxe/index.html` — Main page (592 lines): hero, cabin showcase, amenities, gallery, booking rules, location
  - `/mnt/sdb2/Apps/mantarayDigital/mochup/mockup-1-main/v1-cabinluxe/styles.css` — Full CSS (1,789 lines): Cormorant Garamond typography, dark luxury palette

  **API/Type References**:
  - `components/projects/mockups/shared/types.ts` — Reuse `HospitalityData`, `Cabin`, `Amenity` types (shared with Haven)

  **Acceptance Criteria**:
  - [ ] File `components/projects/mockups/Alpine.tsx` exists and exports `AlpineMockup`
  - [ ] Component registered in `index.tsx`
  - [ ] `projectMeta.alpine` exists in `app/projects/[slug]/page.tsx`
  - [ ] EN + AR translations complete
  - [ ] Visual design is distinctly different from Haven mockup
  - [ ] `bun run build` succeeds
  - [ ] `bun run lint` passes

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Alpine Lodge detail page loads
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running on localhost:3000
    Steps:
      1. Navigate to: http://localhost:3000/projects/alpine
      2. Assert: Page does NOT show 404
      3. Assert: h1 contains "Alpine Lodge"
      4. Assert: All standard sections present
      5. Screenshot: .sisyphus/evidence/task-6-alpine-detail.png
    Expected Result: Full detail page renders
    Evidence: .sisyphus/evidence/task-6-alpine-detail.png

  Scenario: Alpine is visually distinct from Haven
    Tool: Playwright (playwright skill)
    Steps:
      1. Navigate to: http://localhost:3000/projects/haven
      2. Screenshot: .sisyphus/evidence/task-6-haven-comparison.png
      3. Navigate to: http://localhost:3000/projects/alpine
      4. Screenshot: .sisyphus/evidence/task-6-alpine-comparison.png
    Expected Result: Two screenshots show clearly different designs
    Evidence: .sisyphus/evidence/task-6-haven-comparison.png, .sisyphus/evidence/task-6-alpine-comparison.png

  Scenario: Build integrity
    Tool: Bash
    Steps:
      1. Run: bun run build
      2. Assert: exit code 0
    Expected Result: Clean build
    Evidence: Build output captured
  ```

  **Commit**: YES
  - Message: `feat(mockups): add Alpine Lodge interactive hospitality variant mockup`
  - Files: `components/projects/mockups/Alpine.tsx`, `components/projects/mockups/index.tsx`, `app/projects/[slug]/page.tsx`, `app/projects/page.tsx`, `lib/translations.ts`
  - Pre-commit: `bun run build`

---

- [ ] 7. Update Projects Page — 4 New Industry Filters + Grid Integration

  **What to do**:
  - Verify all 5 new projects (barista, luxe, bazaar, haven, alpine) are already in the `projects` array and `projectNames`/`projectDescriptions` arrays from Tasks 2-6
  - Add 4 new industry filter entries to the `industries` array in `app/projects/page.tsx`:
    - `{ key: 'hospitality', label: t.projectsPage.industries.hospitality }`
    - `{ key: 'fashion', label: t.projectsPage.industries.fashion }`
    - `{ key: 'retail', label: t.projectsPage.industries.retail }`
    - `{ key: 'b2b', label: t.projectsPage.industries.b2b }`
  - Ensure translations for `projectsPage.industries.hospitality/fashion/retail/b2b` exist in both EN and AR
  - Verify all 11 projects display correctly in the grid
  - Verify each filter shows the correct subset of projects
  - Verify project card ordering is sensible (new projects after existing 6, or interleaved logically)

  **Must NOT do**:
  - Do NOT refactor the existing data structure (arrays → objects, etc.)
  - Do NOT add animation to filter transitions
  - Do NOT add project count badges to filter buttons
  - Do NOT add search/sort functionality
  - Do NOT change the grid layout (3-column)
  - Do NOT update stats values

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: Integration task touching multiple files, needs careful coordination of data indices and filter logic
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Ensuring visual consistency of expanded grid and filters

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential
  - **Blocks**: Task 8
  - **Blocked By**: Tasks 2-6

  **References**:

  **Pattern References**:
  - `app/projects/page.tsx:8-51` — Current projects array structure
  - `app/projects/page.tsx:53-75` — projectNames and projectDescriptions bilingual arrays
  - `app/projects/page.tsx:81-89` — Industries array with filter keys
  - `app/projects/page.tsx:117-130` — Filter buttons rendering
  - `lib/translations.ts` — `projectsPage.industries` translation keys

  **Acceptance Criteria**:
  - [ ] 4 new industry filter buttons visible on /projects page
  - [ ] "All" filter shows 11 project cards
  - [ ] "Hospitality" filter shows exactly 2 cards (haven, alpine)
  - [ ] "Fashion" filter shows exactly 1 card (luxe)
  - [ ] "Retail" filter shows exactly 1 card (bazaar)
  - [ ] "B2B" filter shows exactly 1 card (barista)
  - [ ] Existing filters still show correct counts (fintech: 1, ecommerce: 1, saas: 1, travel: 1, fitness: 1, healthcare: 1)
  - [ ] `bun run build` succeeds

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: All 11 projects visible with "All" filter
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running on localhost:3000
    Steps:
      1. Navigate to: http://localhost:3000/projects
      2. Wait for: page fully loaded (timeout: 10s)
      3. Assert: "All" filter button is active/selected
      4. Count: elements matching .project-card → expect 11
      5. Screenshot: .sisyphus/evidence/task-7-all-projects.png
    Expected Result: 11 project cards visible
    Evidence: .sisyphus/evidence/task-7-all-projects.png

  Scenario: Hospitality filter shows 2 projects
    Tool: Playwright (playwright skill)
    Preconditions: Dev server on localhost:3000
    Steps:
      1. Navigate to: http://localhost:3000/projects
      2. Click: button containing text "Hospitality"
      3. Count: visible .project-card elements → expect 2
      4. Assert: Cards contain "Haven Retreats" and "Alpine Lodge"
      5. Screenshot: .sisyphus/evidence/task-7-hospitality-filter.png
    Expected Result: Exactly 2 hospitality project cards
    Evidence: .sisyphus/evidence/task-7-hospitality-filter.png

  Scenario: Each new filter works correctly
    Tool: Playwright (playwright skill)
    Steps:
      1. Click "Fashion" → assert 1 card (Luxe Threads)
      2. Click "Retail" → assert 1 card (Bazaar Hub)
      3. Click "B2B" → assert 1 card (Barista Pro)
      4. Click "All" → assert 11 cards
      5. Screenshot: .sisyphus/evidence/task-7-filters.png
    Expected Result: All filters return correct project counts
    Evidence: .sisyphus/evidence/task-7-filters.png

  Scenario: Each project card links to valid detail page
    Tool: Playwright (playwright skill)
    Steps:
      1. Navigate to: http://localhost:3000/projects
      2. For each of the 5 new project cards:
         - Click the card
         - Assert: page loads (not 404)
         - Navigate back to /projects
      3. Screenshot: .sisyphus/evidence/task-7-links.png
    Expected Result: All 5 new project links work
    Evidence: .sisyphus/evidence/task-7-links.png

  Scenario: Arabic RTL rendering of projects page
    Tool: Playwright (playwright skill)
    Steps:
      1. Navigate to: http://localhost:3000/projects
      2. Click language toggle to Arabic
      3. Assert: page renders in RTL direction
      4. Assert: industry filter labels in Arabic
      5. Assert: project titles in Arabic
      6. Screenshot: .sisyphus/evidence/task-7-arabic.png
    Expected Result: Full Arabic rendering without layout issues
    Evidence: .sisyphus/evidence/task-7-arabic.png
  ```

  **Commit**: YES
  - Message: `feat(projects): add 4 industry filters and verify 11-project grid integration`
  - Files: `app/projects/page.tsx`, `lib/translations.ts`
  - Pre-commit: `bun run build`

---

- [ ] 8. Update Homepage "Recent Projects" — Mix Old and New

  **What to do**:
  - Update the homepage "Recent Projects" section to feature a MIX of existing and new projects
  - Change the 3 featured projects from `['pulse', 'bloom', 'atlas']` to include 1-2 new mockups
  - Suggested mix: `['pulse', 'haven', 'luxe']` (fintech + hospitality + fashion — diverse showcase)
  - Update the `projectsSection.projects` translations in `lib/translations.ts` to match the new featured set
  - Update the `getProjectMockup` calls on homepage to use the correct slugs
  - Ensure project card links point to correct `/projects/[slug]` URLs

  **Must NOT do**:
  - Do NOT add more than 3 project cards to homepage (current limit)
  - Do NOT add carousel/slider behavior
  - Do NOT redesign the homepage projects section layout
  - Do NOT change the section header text

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Small change — updating 3 array references and corresponding translations
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential
  - **Blocks**: Task 9
  - **Blocked By**: Task 7

  **References**:

  **Pattern References**:
  - `app/page.tsx:145-171` — Current homepage projects section. Note: hardcoded slugs `['pulse', 'bloom', 'atlas']` on line 156
  - `lib/translations.ts` — `projectsSection.projects` array (3 items with tag, title, description)

  **Acceptance Criteria**:
  - [ ] Homepage "Recent Projects" shows 3 project cards (mix of old and new)
  - [ ] All 3 project cards link to valid detail pages
  - [ ] Mockup previews render correctly in cards
  - [ ] `bun run build` succeeds

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Homepage shows mixed projects
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running on localhost:3000
    Steps:
      1. Navigate to: http://localhost:3000
      2. Scroll to: "Recent Projects" section
      3. Count: project cards in section → expect 3
      4. Assert: At least 1 card links to a new project (/projects/haven or /projects/luxe)
      5. Assert: At least 1 card links to an existing project (/projects/pulse)
      6. Click: each project card → assert page loads without 404 → navigate back
      7. Screenshot: .sisyphus/evidence/task-8-homepage-projects.png
    Expected Result: Mixed project showcase on homepage
    Evidence: .sisyphus/evidence/task-8-homepage-projects.png

  Scenario: Build integrity
    Tool: Bash
    Steps:
      1. Run: bun run build
      2. Assert: exit code 0
    Expected Result: Clean build
    Evidence: Build output captured
  ```

  **Commit**: YES
  - Message: `feat(homepage): update Recent Projects to showcase mix of old and new mockups`
  - Files: `app/page.tsx`, `lib/translations.ts`
  - Pre-commit: `bun run build`

---

- [ ] 9. Final QA — Full Integration Verification

  **What to do**:
  - Run comprehensive Playwright verification across ALL pages affected by this expansion
  - Verify all 11 project detail pages load and render correctly
  - Verify projects listing page with all filters
  - Verify homepage with mixed projects
  - Test Arabic (RTL) rendering on all new pages
  - Test light/dark theme on all new pages
  - Capture evidence screenshots for every scenario
  - Run final `bun run build && bun run lint`
  - Fix any remaining issues discovered during QA

  **Must NOT do**:
  - Do NOT add new features during QA
  - Do NOT refactor existing code
  - Only fix bugs discovered during verification

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Comprehensive visual QA requiring Playwright browser automation
  - **Skills**: [`playwright`, `frontend-ui-ux`]
    - `playwright`: Browser automation for visual verification
    - `frontend-ui-ux`: Visual design review for consistency

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential (final task)
  - **Blocks**: None
  - **Blocked By**: Task 8

  **References**:
  - All files modified in Tasks 1-8
  - `.sisyphus/evidence/` — Previous task screenshots for comparison

  **Acceptance Criteria**:
  - [ ] All 11 project detail pages verified (no 404s, all sections render)
  - [ ] All 10 industry filters verified (correct project counts per filter)
  - [ ] Homepage verified (3 mixed project cards)
  - [ ] Arabic RTL verified on: /projects, /projects/haven, /projects/luxe, /projects/barista
  - [ ] Dark/light theme verified on: /projects/haven, /projects/luxe
  - [ ] `bun run build` succeeds
  - [ ] `bun run lint` passes
  - [ ] Evidence screenshots saved in `.sisyphus/evidence/`

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: All 11 project detail pages return 200
    Tool: Bash
    Steps:
      1. Start dev server: bun dev (background)
      2. Wait for server ready
      3. For each slug in [pulse, bloom, atlas, nomad, volt, medix, haven, alpine, luxe, bazaar, barista]:
         curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/projects/$slug
         Assert: 200
    Expected Result: All 11 pages return 200
    Evidence: curl output captured

  Scenario: Complete visual verification — all new detail pages
    Tool: Playwright (playwright skill)
    Steps:
      1. Navigate to: http://localhost:3000/projects/barista → Screenshot
      2. Navigate to: http://localhost:3000/projects/luxe → Screenshot
      3. Navigate to: http://localhost:3000/projects/bazaar → Screenshot
      4. Navigate to: http://localhost:3000/projects/haven → Screenshot
      5. Navigate to: http://localhost:3000/projects/alpine → Screenshot
    Expected Result: All pages render with mockup content visible
    Evidence: .sisyphus/evidence/final-barista.png through final-alpine.png

  Scenario: RTL verification for all new projects
    Tool: Playwright (playwright skill)
    Steps:
      1. Navigate to: http://localhost:3000/projects
      2. Click language toggle to Arabic
      3. Navigate to: http://localhost:3000/projects/haven
      4. Assert: Page renders in RTL, Arabic text visible
      5. Screenshot: .sisyphus/evidence/final-rtl-haven.png
      6. Navigate to: http://localhost:3000/projects/luxe
      7. Screenshot: .sisyphus/evidence/final-rtl-luxe.png
      8. Navigate to: http://localhost:3000/projects/barista
      9. Screenshot: .sisyphus/evidence/final-rtl-barista.png
    Expected Result: All new pages render correctly in Arabic RTL
    Evidence: .sisyphus/evidence/final-rtl-*.png

  Scenario: Theme toggle verification
    Tool: Playwright (playwright skill)
    Steps:
      1. Navigate to: http://localhost:3000/projects/haven
      2. Screenshot: .sisyphus/evidence/final-haven-dark.png (dark theme)
      3. Click theme toggle
      4. Screenshot: .sisyphus/evidence/final-haven-light.png (light theme)
      5. Assert: Mockup content still visible in both themes
    Expected Result: No visual artifacts from theme switching
    Evidence: .sisyphus/evidence/final-haven-dark.png, final-haven-light.png

  Scenario: Final build and lint check
    Tool: Bash
    Steps:
      1. Run: bun run build
      2. Assert: exit code 0
      3. Run: bun run lint
      4. Assert: exit code 0
    Expected Result: Production build succeeds, no lint errors
    Evidence: Build/lint output captured
  ```

  **Commit**: YES (only if QA fixes were needed)
  - Message: `fix(mockups): address QA findings from final integration review`
  - Pre-commit: `bun run build`

---

## Commit Strategy

| After Task | Message                                                                   | Key Files                            | Verification  |
| ---------- | ------------------------------------------------------------------------- | ------------------------------------ | ------------- |
| 1          | `feat(mockups): add shared types for 5 new portfolio mockups`             | types.ts                             | bun run build |
| 2          | `feat(mockups): add Barista Pro interactive B2B equipment mockup`         | Barista.tsx, index.tsx, translations | bun run build |
| 3          | `feat(mockups): add Luxe Threads interactive fashion e-commerce mockup`   | Luxe.tsx, index.tsx, translations    | bun run build |
| 4          | `feat(mockups): add Bazaar Hub interactive retail marketplace mockup`     | Bazaar.tsx, index.tsx, translations  | bun run build |
| 5          | `feat(mockups): add Haven Retreats interactive luxury hospitality mockup` | Haven.tsx, index.tsx, translations   | bun run build |
| 6          | `feat(mockups): add Alpine Lodge interactive hospitality variant mockup`  | Alpine.tsx, index.tsx, translations  | bun run build |
| 7          | `feat(projects): add 4 industry filters and verify 11-project grid`       | page.tsx, translations               | bun run build |
| 8          | `feat(homepage): update Recent Projects with mixed old and new`           | page.tsx, translations               | bun run build |
| 9          | `fix(mockups): address QA findings` (if needed)                           | various                              | bun run build |

---

## Success Criteria

### Verification Commands

```bash
bun run build    # Expected: exit code 0
bun run lint     # Expected: exit code 0
```

### Final Checklist

- [ ] 5 new mockup components created (Barista, Luxe, Bazaar, Haven, Alpine)
- [ ] All 5 registered in mockupConfig, projectVariants, and exports
- [ ] All 5 have projectMeta entries with related[] links
- [ ] All 5 have entries in projects array with correct titleKey indices
- [ ] Complete EN + AR translations for all 5 projects
- [ ] 4 new industry filters functional (hospitality, fashion, retail, b2b)
- [ ] Homepage shows mixed old/new project cards
- [ ] Zero real images in mockup components
- [ ] Zero Font Awesome imports
- [ ] Zero modifications to existing 6 mockup files
- [ ] Production build succeeds
- [ ] Lint passes
- [ ] RTL (Arabic) works on all new pages
- [ ] Dark/light theme doesn't break any mockups
