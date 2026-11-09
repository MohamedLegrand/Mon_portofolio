import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const SITE_URL = 'https://mohamed-takadjio.site';

interface PageMeta {
  /** Titre propre à la page ; absent = titre complet du site (accueil). */
  title?: string;
  description?: string;
  /** Page à exclure des moteurs de recherche (404, projet introuvable...). */
  noindex?: boolean;
}

function setTag(selector: string, attr: 'name' | 'property' | 'rel', key: string, value: string, valueAttr = 'content') {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = document.createElement(attr === 'rel' ? 'link' : 'meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute(valueAttr, value);
}

/**
 * Met à jour le titre, la description, l'URL canonique et les balises
 * de partage (Open Graph / Twitter) de la page affichée.
 */
export function usePageMeta({ title, description, noindex = false }: PageMeta = {}) {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    const siteTitle = t('meta.title');
    const fullTitle = title ? `${title} | TAKADJIO Mohamed` : siteTitle;
    const desc = (description ?? t('meta.description')).replace(/\s+/g, ' ').trim().slice(0, 300);
    const path = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/';
    const url = SITE_URL + path;
    const locale = i18n.resolvedLanguage === 'en' ? 'en_US' : 'fr_FR';

    document.title = fullTitle;
    setTag('meta[name="description"]', 'name', 'description', desc);
    setTag('meta[name="robots"]', 'name', 'robots',
      noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1');
    setTag('link[rel="canonical"]', 'rel', 'canonical', url, 'href');
    setTag('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setTag('meta[property="og:description"]', 'property', 'og:description', desc);
    setTag('meta[property="og:url"]', 'property', 'og:url', url);
    setTag('meta[property="og:locale"]', 'property', 'og:locale', locale);
    setTag('meta[property="og:locale:alternate"]', 'property', 'og:locale:alternate', locale === 'fr_FR' ? 'en_US' : 'fr_FR');
    setTag('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setTag('meta[name="twitter:description"]', 'name', 'twitter:description', desc);
  }, [t, i18n.resolvedLanguage, pathname, title, description, noindex]);
}
