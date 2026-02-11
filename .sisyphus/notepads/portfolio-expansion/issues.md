# Issues — Portfolio Expansion

## Problems & Gotchas

<!-- Append here, never overwrite -->

## 2026-02-11 Task 1: Build Environment Issues

- `bun run build` fails with `Missing API key` for Resend — pre-existing issue, needs `RESEND_API_KEY` in `.env.local`
- Next.js compiles TypeScript successfully BEFORE the Resend error (line: "Compiled successfully in 2.8s")
- Use `npx tsc --noEmit` as the reliable TypeScript verification command (exits 0 = clean)
- `bun run lint` fails with "Invalid project directory" — appears to be Next.js 16.1.1 CLI issue
- `bun install` was needed first — node_modules was not present initially
- WORKAROUND: Use `npx tsc --noEmit` for type checking, build will fail at page collection stage due to missing env var
