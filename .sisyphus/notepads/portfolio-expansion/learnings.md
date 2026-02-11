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
