# Learnings — Portfolio Expansion

## Conventions Discovered

<!-- Append here, never overwrite -->

## Task 1: Add Shared Types (Completed)

### What Was Done
- Added 5 new domain type sets to `components/projects/mockups/shared/types.ts`:
  - **B2B (Barista Pro)**: Equipment, Service, Brand types
  - **Fashion (Luxe Threads)**: FashionProduct, CartItem types
  - **Retail (Bazaar Hub)**: RetailCategory, RetailProduct, Branch types
  - **Hospitality (Haven + Alpine)**: Cabin, Amenity types (shared between both projects)
- Added seeded data exports: `baristaData`, `luxeData`, `bazaarData`, `havenData`, `alpineData`
- Added variant configurations: `baristaVariants`, `luxeVariants`, `bazaarVariants`, `havenVariants`, `alpineVariants`

### Pattern Followed
- Each domain has 2-4 interfaces for entity types
- Each domain has 1 seeded data const with realistic fake data
- Each domain has 1 variants const with MockupVariant[] array
- All new code appended after line 307 (after `medixVariants`)
- Total file grew from 308 lines to 533 lines (+225 lines)

### Data Shapes Modeled
- **Barista**: Equipment with brand, price, rating, badge, category. Services with name, description, icon. Brands list.
- **Luxe**: Fashion products with sizes[], brand, badge. Cart items with productId, quantity, size.
- **Bazaar**: Categories with productCount, icon. Products with badge, category. Branches with area, city.
- **Haven/Alpine**: Cabins with bedrooms, pricePerNight, features[], badge. Amenities with description, icon.

### Variant Mappings
- **Barista**: home, products, services, gallery
- **Luxe**: home, products, cart, checkout
- **Bazaar**: home, categories, products, branches
- **Haven**: home, cabins, experience, booking
- **Alpine**: home, cabins, gallery, contact

### Verification
- TypeScript type-check passed: `npx tsc --noEmit --skipLibCheck components/projects/mockups/shared/types.ts`
- Committed: `feat(mockups): add shared types for 5 new portfolio mockups`

### Key Insights
- Haven and Alpine share `HospitalityData` types (both are cabin rental businesses)
- Bazaar uses Arabic category names in seeded data (matches HTML mockup)
- All prices use Egyptian Pound (EGP) format to match mockup data
- Badge values match existing pattern: 'Best Seller', 'New', 'Sale', 'Premium', 'Best Value'

## Task 4: Bazaar Hub Mockup (Completed)

### What Was Done
- Created `components/projects/mockups/Bazaar.tsx` (1769 lines) — RTL retail marketplace mockup
- Registered in `index.tsx`: import, mockupConfig (gradient: #1a1a2e → #e94560), projectVariants (4 variants), export
- Added `bazaar` to `projectMeta` in `[slug]/page.tsx` with tech: React, Node.js, MongoDB, Redis
- Added bazaar to projects array in `page.tsx` at titleKey: 8, industry: "retail"
- Added `retail` industry key to both en ("Retail") and ar ("تجزئة") in translations
- Added full `projectDetail.projects.bazaar` in both en and ar with approach field

### 4 Variants
- **home**: Hero with purple gradient overlay, floating shapes, stats bar, about section, categories preview grid, social reels grid, CTA
- **categories**: Page header + 13 category cards with colored gradient backgrounds, icon areas, product counts
- **products**: Filter bar with category tabs, 12 product cards with gradient placeholders, badges (جديد, خصم, الأكثر مبيعاً), EGP pricing
- **branches**: 3 branch photos, 5 branch cards with map gradient placeholders, bouncing pin animation, address/phone/hours

### Design Decisions
- Used purple palette from source CSS (--purple: #864b9e, --purple-dark: #5e2d78) instead of task spec's dark/red palette — matches actual mockup
- All Font Awesome icons converted to inline SVG components (15+ icon components)
- CategoryIcon component maps icon string types to SVG elements for 16 category types
- Branch details hardcoded from source HTML (real Cairo addresses)
- Social reels use gradient backgrounds with play overlay and engagement metrics

### Key Patterns
- RTL: `dir="rtl"` on `.bazaar-app` div (same as Luxe pattern)
- CSS vars defined at `.bazaar-mockup` level
- All styling via `<style jsx>` blocks — no Tailwind
- Sub-components: BazaarHeader, HomeView, CategoriesView, ProductsView, BranchesView, BazaarFooter — all in same file
- Data imports: `bazaarData` from shared/types for categories, products, branches
- Additional hardcoded data in CategoriesView (13 categories) and ProductsView (12 products) for richer display

### Verification
- `npx tsc --noEmit` exits 0
- LSP diagnostics clean on all changed files
- Committed: `feat(mockups): add Bazaar Hub interactive retail marketplace mockup`
