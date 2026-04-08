# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## Project Overview

Personal portfolio site for mr_ozin (https://mrozin.me/). A single-page Astro app that fetches profile data from microCMS at build time and outputs a static site.

## Commands

Package manager is **pnpm**. Do not use npm or yarn.

- `pnpm dev` — start dev server
- `pnpm build` — build static site (requires `CMS_API_KEY` env var)
- `pnpm lint` — run Prettier + ESLint checks
- `pnpm format` — auto-format with Prettier
- `pnpm check` — Astro type checking
- `pnpm test:unit` — run Vitest unit tests
- `pnpm test:unit -- src/lib/utils.test.ts` — run a single unit test file
- `pnpm test` — run Playwright E2E tests

## Architecture

- **Static site generation**: Astro with static output. All data is fetched at build time, not at runtime.
- **Data flow**: `src/pages/index.astro` calls `fetchProfile()` → fetches from microCMS API (`https://mrozin.microcms.io/api/v1/profile`) → validates response with Zod (`ProfileResponseSchema`) → passes data to Astro components.
- **Environment variable**: `CMS_API_KEY` is accessed via `import.meta.env.CMS_API_KEY` to authenticate with microCMS. Required for build and dev.
- **Schemas**: `src/lib/schema.ts` defines Zod schemas for the microCMS response (profile, projects, SNS links). All API data is validated through these schemas.
- **Test setup**: Unit tests use jsdom environment with MSW for mocking HTTP requests. Tests live alongside source files (`*.test.ts`).
- **Components**: All components use `.astro` files (no framework components).
