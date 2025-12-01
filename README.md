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

- Turborepo démarre l'app principale (port 3000) et garde les workspaces `public` (port 3001) et `client` (port 3002) pour un dev séparé.

## Scripts utiles

- `pnpm build` : build de tous les packages et apps.
- `pnpm lint` : lint de tout le workspace.
- `pnpm storybook` : Storybook du design system (`packages/core`) sur le port 6006.
- `pnpm --filter main dev` : lancer seulement l'app Next principale (index).
- `pnpm --filter public dev` : lancer seulement l'app publique.
- `pnpm --filter client dev` : lancer seulement l'app client.
- `pnpm --filter @repo/core build` : build du package partagé.

## Structure du repo

- `apps/main` : app Next.js principale servie à la racine (index), qui agrège les deux sections.
- `apps/public` : app Next.js pour la section publique (workspace dédié).
- `apps/client` : app Next.js pour la section client (workspace dédié).
- `packages/core` : librairie de composants + design system (Storybook).
- `packages/public-section` : composant de la page publique, réutilisable depuis toutes les apps.
- `packages/client-section` : composant de la page client, réutilisable depuis toutes les apps.
- `packages/eslint-config` : config ESLint partagée.
- `packages/tsconfig` : bases TypeScript partagées.

## Versionning & release (Changesets)

- Créer un changeset : `pnpm changeset` puis choisir les packages concernés et le bump (`patch`/`minor`/`major`). Un fichier `.changeset/*.md` est généré.
- Prévisualiser : `pnpm changeset status` affiche les versions à venir.
- Appliquer les versions : `pnpm changeset version` met à jour les `package.json` concernés, le lockfile et les changelogs.
- Publier (si registry configuré) : `pnpm changeset publish` publie les packages versionnés.
- CI release : le workflow `.github/workflows/release.yml` utilise `changesets/action@v1` pour créer une PR de release ou publier, en s’appuyant sur `NPM_TOKEN` et `GITHUB_TOKEN`. Assure-toi que `NPM_TOKEN` est bien défini dans les secrets pour publier.

## Notes

- Les apps consomment Sass et les packages partagés (`@repo/core`, `@repo/public-section`, `@repo/client-section`).
- PNPM Workspaces gère le lien entre apps et packages internes.
