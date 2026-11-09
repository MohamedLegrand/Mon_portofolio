import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import fr from './locales/fr.json';
import en from './locales/en.json';
import { SUPPORTED_LANGUAGES } from '@/domain/value-objects/Language';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
    fallbackLng: 'fr',
    supportedLngs: SUPPORTED_LANGUAGES,
    // "en-US" -> "en"
    load: 'languageOnly',
    interpolation: {
      // React échappe déjà les valeurs
      escapeValue: false,
    },
    detection: {
      // Choix mémorisé, sinon langue du navigateur
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'lang',
      caches: ['localStorage'],
    },
  });

// Garde <html lang> synchronisé avec la langue active
// (titre, description et balises de partage : voir usePageMeta, page par page)
function syncDocument(lng: string) {
  document.documentElement.lang = lng;
}

syncDocument(i18n.resolvedLanguage ?? 'fr');
i18n.on('languageChanged', syncDocument);

export default i18n;
