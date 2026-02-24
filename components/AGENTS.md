# COMPONENTS

## OVERVIEW

Three domains: `layout/` (app shell + providers), `ui/` (reusable form/display primitives), `projects/mockups/` (interactive project showcases). Plus one standalone `CodeEditorMockup.tsx`.

## STRUCTURE

```
components/
├── layout/              # App shell — Header, Footer, Logo, ThemeProvider, I18nProvider
├── ui/                  # Barrel-exported primitives (Button, Input, Select, Tabs, Badge, etc.)
├── projects/mockups/    # 6 interactive project mockups (~11k lines) — see child AGENTS.md
└── CodeEditorMockup.tsx # Animated code editor used in hero section
```

## WHERE TO LOOK

| Task                   | Location                                 | Notes                                                         |
| ---------------------- | ---------------------------------------- | ------------------------------------------------------------- |
| Add reusable component | `ui/`                                    | Must export from `ui/index.ts` barrel                         |
| Edit nav/header/footer | `layout/Header.tsx`, `layout/Footer.tsx` | Header: theme toggle + language switcher                      |
| Modify theme logic     | `layout/ThemeProvider.tsx`               | Wraps `next-themes`                                           |
| Modify i18n logic      | `layout/I18nProvider.tsx`                | Context: `useI18n()` → `{ language, direction, setLanguage }` |
| Add project mockup     | `projects/mockups/`                      | See child AGENTS.md for detailed guide                        |

## CONVENTIONS

- **UI components**: `forwardRef` + explicit `Props` interface + `displayName`. Use `clsx` for conditional Tailwind classes.
- **Layout components**: `'use client'` directive. Use `useTranslations()` for all visible strings.
- **Barrel exports**: `ui/index.ts` exports both component and its Props type: `export { Button } from "./Button"; export type { ButtonProps } from "./Button";`
- **Styling split**: UI components use Tailwind utilities. Layout/page components use globals.css class names (`.header`, `.nav-link`, `.footer`, etc.).

## ANTI-PATTERNS

- **DO NOT** create `.module.css` files — not used in this project
- **DO NOT** put translations in component files — all strings in `lib/translations.ts`
- **DO NOT** add new Context providers without updating `app/layout.tsx` wrapper order
