import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-black py-20 px-6 md:px-12 flex items-center min-h-[90svh]">
      {/* Mot PORTFOLIO géant en arrière-plan */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <span className="font-bebas text-[11rem] sm:text-[18rem] md:text-[22rem] text-red-500/10 dark:text-red-950/15 leading-none tracking-widest select-none">
          PORTFOLIO
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Colonne de Gauche : Nom & Présentation */}
        <div className="lg:col-span-4 flex flex-col items-start text-left">
          <span className="font-caveat text-4xl text-red-600 dark:text-red-500 font-bold mb-2">
            {t('hero.greeting')}
          </span>
          <h1 className="font-bebas text-6xl sm:text-8xl text-zinc-900 dark:text-white leading-[0.85] tracking-tight">
            TAKADJIO
            <span className="block text-red-600">MOHAMED</span>
          </h1>
          <p className="mt-4 font-monster text-sm font-semibold tracking-widest text-red-600 dark:text-red-500">
            {t('hero.role')}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-xs">
            {t('hero.intro')}
          </p>

          {/* CTA Links */}
          <div className="mt-8 flex items-center gap-6">
            <Link
              to="/projets"
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {t('hero.myProjects')}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {t('hero.contactMe')}
            </Link>
          </div>

          <a
            href="/images/CV_TAKADJIO_Mohamed.pdf"
            download="CV_TAKADJIO_Mohamed.pdf"
            className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-500/10 transition-all hover:bg-red-500 hover:shadow-red-500/20 active:scale-95"
          >
            <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            {t('common.downloadCv')}
          </a>

          <div className="mt-12 flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 dark:bg-red-500/5 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-red-600 dark:text-red-500">
            <span className="flex h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
            {t('common.available')}
          </div>
        </div>

        {/* Colonne Centrale : Portrait */}
        <div className="lg:col-span-4 flex justify-center items-center">
          <div className="relative w-64 h-80 sm:w-80 sm:h-[400px] overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-900 bg-zinc-100/60 dark:bg-zinc-950/40">
            {/* Dégradé de fusion avec le fond */}
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent to-transparent z-10" />
            <img
              src="/images/photo.jpg"
              alt="TAKADJIO Mohamed"
              className="w-full h-full object-cover grayscale brightness-90 contrast-110 hover:grayscale-0 hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>

        {/* Colonne de Droite : Accroche & Statistiques */}
        <div className="lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right gap-12">
          <div className="max-w-xs flex flex-col lg:items-end gap-3">
            {/* Indicateur point rouge */}
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-red-600/30 text-red-600 dark:text-red-500">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-ping" />
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm font-medium leading-relaxed">
              {t('hero.tagline')}
            </p>
          </div>

          {/* Statistiques */}
          <div className="flex flex-col gap-6 w-full lg:w-auto">
            <div className="flex items-center lg:justify-end gap-4 border-t border-zinc-200 dark:border-zinc-900 pt-4">
              <div className="font-monster text-4xl sm:text-5xl text-red-600 leading-none">
                2
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 text-left">
                {t('hero.statInternships1')}<br />{t('hero.statInternships2')}
              </div>
            </div>
            <div className="flex items-center lg:justify-end gap-4 border-t border-zinc-200 dark:border-zinc-900 pt-4">
              <div className="font-monster text-4xl sm:text-5xl text-red-600 leading-none">
                3
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 text-left">
                {t('hero.statSites1')}<br />{t('hero.statSites2')}
              </div>
            </div>
            <div className="flex items-center lg:justify-end gap-4 border-t border-zinc-200 dark:border-zinc-900 pt-4">
              <div className="font-monster text-4xl sm:text-5xl text-red-600 leading-none">
                30+
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 text-left">
                {t('hero.statUsers1')}<br />{t('hero.statUsers2')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
