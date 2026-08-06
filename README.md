# COST — Cameroon Oil Shipping & Trading

Site institutionnel bilingue FR/EN construit avec Astro. Le positionnement éditorial actuel est celui d’un partenaire maritime et portuaire spécialisé dans le secteur énergétique, et non celui d’un négociant en matières premières.

## Développement

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Architecture

- `src/layouts/BaseLayout.astro` : document HTML, SEO, préchargement du hero et structure sémantique.
- `src/components/` : navigation, footer, en-têtes et modèles de pages réutilisables.
- `src/data/i18n.ts` : point d’entrée unique des contenus globaux FR/EN.
- `src/data/translations.ts` : source actuelle des traductions, exposée par `i18n.ts` pour garder les textes centralisés.
- `src/data/pages.ts` : contenus des pages institutionnelles et des trois pôles métier.
- `src/pages/` : routes françaises.
- `src/pages/en/` : routes anglaises correspondantes.
- `src/styles/global.css` : palette et styles globaux COST.
- `src/scripts/main.ts` : animations au scroll, compteurs et respect de `prefers-reduced-motion`.
- `src/data/gallery.ts` : chemins des huit images de la galerie.

### Ajouter les images de la galerie

Dépose les fichiers dans `public/images/gallery/` avec ces noms :

`01-operations-maritimes.webp`, `02-escale-portuaire.webp`, `03-manutention.webp`, `04-transport-routier.webp`, `05-installations-petrolieres.webp`, `06-terminal-conteneurs.webp`, `07-operations-portuaires.webp`, `08-logistique-cemac.webp`.

La galerie affiche automatiquement les huit photos, avec un placeholder numéroté si une image ne peut pas être chargée.

Les six services sont regroupés en trois pôles :

1. Transport Maritime & Affrètement
2. Agence Portuaire & Manutention
3. Transit & Douane

## Informations à confirmer avant publication

- activité éventuelle d’achat/revente physique de produits pétroliers ;
- domaine officiel (le code utilise provisoirement `cost-cameroon.com`) ;
- URL exacte de la page LinkedIn ;
- descriptions contractuelles et périmètre précis des six services ;
- photos officielles des opérations, équipes et bureaux ;
- effectif, année de création et mentions légales complètes.

Facebook et TikTok utilisent provisoirement l’identifiant public `@cameroonshipping`. LinkedIn n’est pas inclus dans les données structurées tant que son URL n’est pas confirmée.
