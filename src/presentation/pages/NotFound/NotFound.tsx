import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { ArrowLeft, RotateCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { usePageMeta } from '@/presentation/hooks/usePageMeta';

/** Page affichée pour une adresse qui n'existe pas (route « * »). */
export function NotFound() {
  const { t } = useTranslation();
  usePageMeta({ title: t('seo.notFoundTitle'), noindex: true });
  return (
    <section className="mx-auto max-w-xl px-6 py-32 text-center text-zinc-900 dark:text-white">
      <p className="font-bebas text-8xl text-red-600 dark:text-red-500 leading-none">404</p>
      <h1 className="mt-6 text-2xl font-bold">{t('notFoundPage.title')}</h1>
      <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{t('notFoundPage.text')}</p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-500 hover:text-zinc-900 dark:hover:text-white border border-red-500/20 hover:border-red-600 px-4 py-2 rounded transition-all"
      >
        <ArrowLeft className="h-4 w-4" />
        {t('notFoundPage.home')}
      </Link>
    </section>
  );
}

/**
 * Filet de sécurité pour toute erreur inattendue du routeur
 * (par ex. une page qui ne se charge plus après un redéploiement).
 * Remplace la page d'erreur technique par défaut de React Router.
 */
export function RouteErrorPage() {
  const { t } = useTranslation();
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <NotFound />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <section className="mx-auto max-w-xl px-6 py-32 text-center text-zinc-900 dark:text-white">
        <h1 className="text-2xl font-bold text-red-600 dark:text-red-500">{t('errorPage.title')}</h1>
        <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{t('errorPage.text')}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded transition-all"
          >
            <RotateCw className="h-4 w-4" />
            {t('errorPage.reload')}
          </button>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-500 hover:text-zinc-900 dark:hover:text-white border border-red-500/20 hover:border-red-600 px-4 py-2 rounded transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('notFoundPage.home')}
          </a>
        </div>
      </section>
    </div>
  );
}
