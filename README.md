# Next.js Monorepo Boilerplate

Monorepo Next.js basé sur Turborepo et la structure recommandée par Vercel.

## Prérequis

- Node 20 (Volta est configuré pour verrouiller la version).
- pnpm 10+ (`corepack enable` si besoin).

## Installation

```bash
pnpm install
```

## Démarrage local

```bash
pnpm dev
```

- Turborepo démarre tous les serveurs en parallèle.
- `apps/public` est dispo sur `http://localhost:3000`.
- `apps/client` est dispo sur `http://localhost:3001`.

## Scripts utiles

- `pnpm build` : build de tous les packages et apps.
- `pnpm lint` : lint de tout le workspace.
- `pnpm storybook` : Storybook du design system (`packages/core`) sur le port 6006.
- `pnpm --filter <app> dev` : lancer seulement une app (`public` ou `client`).
- `pnpm --filter @acme/core build` : build du package partagé.

## Structure du repo

- `apps/public` : site marketing/public Next.js.
- `apps/client` : espace authentifié Next.js.
- `packages/core` : librairie de composants + design system (Storybook).
- `packages/eslint-config` : config ESLint partagée.
- `packages/tsconfig` : bases TypeScript partagées.

## Notes

- Les deux apps consomment Sass et le package partagé `@acme/core`.
- PNPM Workspaces gère le lien entre apps et packages internes.
