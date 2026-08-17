import { defineConfig } from 'astro/config';

export default defineConfig({
  // URL canonique (balises SEO, données structurées) — surchargée par environnement
  // via la variable SITE_URL (build arg Docker, déclarée dans Dokploy). Défaut = prod.
  site: process.env.SITE_URL ?? 'https://www.cost237.com',
  // La gestion de langue se fait par fichier dynamique
});
