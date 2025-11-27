# Next.js Monorepo Boilerplate

This repository follows Vercel's monorepo recommendations with Turborepo. It includes:

- `packages/core`: shared component library and design system with Storybook.
- `apps/public`: marketing/public Next.js app.
- `apps/client`: authenticated/client workspace Next.js app.

Both apps consume Sass styles and the shared `@acme/core` package.

## Getting started

```bash
pnpm install
pnpm dev
```

- `pnpm dev` starts all workspace dev servers through Turborepo.
- `pnpm build` builds all packages and apps.
- `pnpm lint` lints the repository.
- `pnpm storybook` runs Storybook for the core library.
