# PROJECT MOCKUPS

## OVERVIEW

Interactive browser/phone mockups for 6 portfolio projects. Each is a self-contained component (1400-2300 lines) with multiple view variants, rendered inside shared frame wrappers. Total ~11k lines.

## STRUCTURE

```
mockups/
├── index.tsx           # Registry: getProjectMockup(slug, variant), projectVariants config
├── Pulse.tsx           # Fintech expense tracker (2076 lines, 4 variants)
├── Bloom.tsx           # E-commerce plant shop (2311 lines, 4 variants)
├── Atlas.tsx           # CRM dashboard (1570 lines, 4 variants)
├── Nomad.tsx           # Travel booking (1443 lines, 4 variants)
├── Volt.tsx            # Fitness app (1606 lines, 4 variants)
├── Medix.tsx           # Healthcare portal (1741 lines, 4 variants)
└── shared/
    ├── index.ts        # Barrel export for shared components
    ├── types.ts        # MockupProps, MockupVariant, domain-specific data types
    ├── MockupFrame.tsx # Browser chrome wrapper (dots, URL bar)
    └── MockupPhone.tsx # Mobile device frame (notch, status bar)
```

## HOW TO ADD A NEW MOCKUP

1. Create `{Name}.tsx` — define variant type, component, all view sub-components, and `<style jsx>` block
2. Register in `index.tsx`:
   - Import component
   - Add to `mockupConfig` with gradient
   - Add to `projectVariants` with variant labels
   - Add to bottom export list
3. Use `MockupFrame` (desktop) or `MockupPhone` (mobile) from `shared/`

## CONVENTIONS

- **Self-contained**: Each mockup file contains ALL its sub-components + styles via `<style jsx>`. No external CSS.
- **Variant system**: Each mockup accepts `variant` prop → renders different view. Variants defined in `projectVariants` in `index.tsx`.
- **Shared frames**: `MockupFrame` = browser chrome, `MockupPhone` = mobile device. Both accept `children`.
- **Data is fake**: All data (transactions, products, contacts, etc.) is hardcoded inside each component. Types in `shared/types.ts`.
- **No Tailwind here**: Mockups use `<style jsx>` exclusively for scoped CSS — different from rest of codebase.

## ANTI-PATTERNS

- **DO NOT** import globals.css classes inside mockups — they use `<style jsx>` only
- **DO NOT** try to fix the `as any` cast in `index.tsx:158` — known limitation of variant type union across different mockup components
- **DO NOT** extract sub-components to separate files — each mockup is intentionally self-contained
- **DO NOT** use real API data — mockups are purely visual with hardcoded fake data

## TYPES (shared/types.ts)

| Type                                  | Used By     | Purpose                                   |
| ------------------------------------- | ----------- | ----------------------------------------- |
| `MockupProps`                         | All mockups | Base: `variant?`, `size?`, `interactive?` |
| `FintechData`, `Transaction`          | Pulse       | Expense tracker data                      |
| `EcommerceData`, `Product`            | Bloom       | Shop catalog data                         |
| `CRMData`, `Contact`, `Deal`          | Atlas       | CRM pipeline data                         |
| `TravelData`, `Property`, `Booking`   | Nomad       | Travel listing data                       |
| `FitnessData`, `Workout`, `Exercise`  | Volt        | Workout tracking data                     |
| `HealthData`, `Appointment`, `Record` | Medix       | Patient records data                      |
