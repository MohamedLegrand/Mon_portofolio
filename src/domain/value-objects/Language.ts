export type Language = 'fr' | 'en';

export const SUPPORTED_LANGUAGES: Language[] = ['fr', 'en'];

// Texte disponible dans chaque langue supportée
export type LocalizedText = Record<Language, string>;

export function toLanguage(value: string | undefined): Language {
  return value?.startsWith('en') ? 'en' : 'fr';
}
