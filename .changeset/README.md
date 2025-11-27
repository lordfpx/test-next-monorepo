# Changesets – mode d’emploi rapide (monorepo)

Ce dossier sert à suivre les versions des packages avec [Changesets](https://github.com/changesets/changesets).

## Flux standard (feature → release)
1) Dev + tests : fais ta tâche, puis vérifie `pnpm lint` / `pnpm build` ou les commandes du package.
2) Crée un changeset : `pnpm changeset`
   - Sélectionne le(s) package(s) touché(s).
   - Choisis le bump : `patch` (bugfix/docs), `minor` (feature compatible), `major` (breaking).
   - Rédige un message orienté utilisateur (ce texte ira dans le changelog).
   → Un fichier `.changeset/*.md` est généré.
3) PR : commit ton code + le fichier `.changeset/*.md`, push et ouvre la PR. Chaque PR qui modifie un package doit embarquer au moins un changeset.
4) Merge vers `main` : la CI `Release packages` s’exécute.
   - S’il y a des changesets, elle ouvre une PR “chore: release packages” avec les versions/changelogs/lockfile mis à jour (pas de publish encore).
   - Merge cette PR de release pour publier (si `NPM_TOKEN` est présent et que les packages ne sont pas `private`).

## Publication / accès
- Config actuelle : `access: "restricted"` et packages `private: true` → rien n’est publié.
- Publier en privé : enlève `private: true` sur le(s) package(s), garde `access: "restricted"`, configure `NPM_TOKEN`.
- Publier en public : enlève `private: true` et passe `access` à `"public"` dans `.changeset/config.json`.

## Commandes utiles
- `pnpm changeset` : ajoute un changeset.
- `pnpm version-packages` : applique les versions/changelogs (utile en local pour prévisualiser la PR de release).
- `pnpm release` : publie (géré par la CI via `changesets/action`).
