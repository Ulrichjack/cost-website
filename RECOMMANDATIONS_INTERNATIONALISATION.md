# Recommandations — Internationalisation (i18n)

Ce document donne des suggestions pour garantir que le concept "international" soit appliqué de manière cohérente sur tout le site. Je ne modifie rien dans le code — c'est uniquement un guide et une checklist.

## Vue d'ensemble

- **But** : uniformiser les traductions, les routes, le SEO, les formats (date/nombre/monnaie) et l'accessibilité pour toutes les versions locales du site.
- **Fichiers à vérifier** :
  - `src/data/translations.ts`
  - `src/data/i18n.ts`
  - les pages sous `src/pages/` et `src/pages/en/`
  - les composants dans `src/components/` (ex. `Header.astro`, `SEO.astro`, `PageHeader.astro`)

## Recommandations principales

- **Stratégie d'URL cohérente** : choisir entre préfixe de chemin (`/en/`) ou domaine/sous-domaine. Ici le projet a `src/pages/en/` donc garder `/en/` pour l'anglais et la racine pour la langue principale.

- **Clé de locales unifiée** : utiliser des clés de traduction constantes (ex. `home.title`, `service.description`) et éviter les doublons de libellés entre fichiers.

- **Composant `SEO` centralisé** : s'assurer que `SEO.astro` reçoive la locale et produise `hreflang`, `canonical`, et meta traduits pour chaque page.

- **Langue du document** : définir l'attribut `lang` de la balise HTML selon la locale (ex. `<html lang="en">` ou `<html lang="fr">`). Vérifier le layout `src/layouts/BaseLayout.astro`.

- **Mécanisme de bascule de langue** : avoir un switcher visible (dans `Header.astro`) qui :
  - redirige vers la même route dans la langue choisie,
  - préserve le chemin de la page (ex. `/zones` ↔ `/en/zones`),
  - stocke la préférence (cookie ou localStorage) pour la prochaine visite.

- **Formatage localisé** : utiliser des helpers pour date/heure, nombres et monnaies adaptés à la locale (Intl.DateTimeFormat, Intl.NumberFormat). Vérifier où sont affichés les chiffres (ex. `StatsBar.astro`).

- **Images & contenu** : vérifier les `alt` des images et tout texte contenu dans `public/images/` et `src/data/gallery.ts` pour traductions et sens culturel.

- **Fallback et complétude** : définir une locale par défaut et un mécanisme de fallback si une clé manque (log/console warning pour clés manquantes). Tester les pages sans traductions complètes.

- **Pluriels et variables** : utiliser une méthode de gestion des pluriels (ICU/plural rules) si le site contient des phrases variables.

- **Accessibilité & direction** : si vous prévoyez des langues RTL (arabe, hébreu), prévoir styles et tests pour `dir="rtl"`.

- **SEO et métadonnées** : traduire title, description, meta og/twitter, et ajouter `hreflang` alternates pour chaque page.

- **Tests et CI** : ajouter checks automatisés pour :
  - clés de traduction manquantes entre locales,
  - routes locales non existantes,
  - vérification `lang` et `hreflang` dans pages renderisées.

## Étapes pratiques (priorisées)

1. Centraliser toutes les chaînes dans `src/data/translations.ts` et éliminer doublons.
2. Vérifier `SEO.astro` pour génération correcte de `hreflang` et meta traduits.
3. Ajouter un switcher de langue dans `Header.astro` (conserver la même route).
4. Ajouter helpers `formatDate`, `formatNumber`, `formatCurrency` et les utiliser dans `StatsBar.astro`, pages de services, etc.
5. Écrire des tests simples qui comparent les clés entre locales et échouent si une clé manque.

## Notes spécifiques au repo

- `src/pages/en/` contient déjà les pages anglaises — bon point de départ pour vérifier la parité de contenu.
- `src/data/gallery.ts` et `src/data/pages.ts` semblent centraliser du contenu : traduire/normaliser les objets présents.

## Conclusion

Ces recommandations visent à assurer une expérience internationale cohérente sans toucher au code existant pour l'instant. Si vous voulez, je peux :

- générer une checklist automatisée (script) pour détecter clés manquantes,
- implémenter les helpers de formatage et le switcher de langue,
- ou écrire des tests CI pour valider la parité des locales.

Dites-moi quelle option vous préférez.
