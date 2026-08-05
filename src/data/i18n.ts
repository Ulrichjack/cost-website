/**
 * Central internationalisation entry point.
 *
 * Kept as a small compatibility layer while the content remains in the
 * existing translations module; components should import from this file.
 */
export { translations } from './translations';
export type { Lang, Translations } from './translations';
