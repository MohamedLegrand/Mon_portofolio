import { useTranslation } from 'react-i18next';
import { toLanguage } from '@/domain/value-objects/Language';
import type { Language } from '@/domain/value-objects/Language';

// Langue active de l'interface, ramenée aux langues supportées par le domaine
export function useLanguage(): Language {
  const { i18n } = useTranslation();
  return toLanguage(i18n.resolvedLanguage);
}
