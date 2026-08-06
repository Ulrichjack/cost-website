# Instructions pour Codex

## Projet

- Ce dépôt contient le site web Astro de COST.
- Respecter la structure existante avant de créer de nouveaux composants ou fichiers.
- Ne pas modifier les fichiers générés dans `.astro/` ou `dist/`.
- Ne pas modifier `node_modules/`.

## Commandes

- Installer les dépendances : `npm install`
- Lancer le serveur de développement : `npm run dev`
- Construire le site : `npm run build`
- Prévisualiser la production : `npm run preview`

Après une modification importante, exécuter au minimum `npm run build` et signaler clairement toute erreur restante.

## Organisation du code

- Pages Astro : `src/pages/`
- Composants réutilisables : `src/components/`
- Layouts : `src/layouts/`
- Données et traductions : `src/data/`
- Styles globaux : `src/styles/global.css`
- Scripts côté client : `src/scripts/`
- Images et ressources publiques : `public/`

Privilégier les composants et les données existants avant d'ajouter une nouvelle implémentation dupliquée.

## Internationalisation

- Le site doit conserver les versions française et anglaise.
- Toute modification de contenu visible doit vérifier les traductions correspondantes.
- Conserver les routes françaises et anglaises existantes.
- Garder les textes traduits dans les fichiers prévus de `src/data/` plutôt que de dupliquer inutilement les chaînes dans les composants.

## Modifications

- Faire des changements ciblés et cohérents avec le style existant.
- Ne pas supprimer ou réécrire des changements déjà présents sans raison liée à la tâche.
- Préserver la responsivité, l'accessibilité et les métadonnées SEO lors des modifications d'interface.
- Avant de terminer, résumer les fichiers modifiés et les vérifications effectuées.
