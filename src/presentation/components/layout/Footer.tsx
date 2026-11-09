import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black text-zinc-600 dark:text-zinc-400 text-xs py-16 px-6 md:px-12 select-none">
      <div className="mx-auto max-w-7xl">
        {/* Grille principale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-16 pb-12 border-b border-zinc-200/60 dark:border-zinc-900/60">

          {/* Colonne 1 : Identité (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 text-left">
            <h3 className="font-bebas text-2xl text-zinc-900 dark:text-white tracking-wider">
              TAKADJIO <span className="text-red-600">MOHAMED</span>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed max-w-sm text-xs">
              {t('footer.about')}
            </p>
            {/* Badge Disponibilité */}
            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-red-500/20 dark:border-red-500/10 bg-red-500/10 dark:bg-red-500/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-500 w-fit">
              <span className="flex h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              {t('common.available')}
            </div>
            <a
              href={`/images/${t('common.cvFile')}`}
              download={t('common.cvFile')}
              className="mt-1 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-500 hover:text-zinc-900 dark:hover:text-white transition-colors w-fit"
            >
              <Download className="h-3.5 w-3.5" />
              {t('common.downloadCv')}
            </a>
          </div>

          {/* Colonne 2 : Liens rapides (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4 text-left">
            <h4 className="font-bebas text-lg text-zinc-900 dark:text-white tracking-widest uppercase">
              {t('footer.sitemap')}
            </h4>
            <nav className="flex flex-col space-y-2 text-zinc-600 dark:text-zinc-500">
              <Link to="/" className="hover:text-red-600 dark:hover:text-white transition-colors w-fit">{t('nav.home')}</Link>
              <Link to="/competences" className="hover:text-red-600 dark:hover:text-white transition-colors w-fit">{t('nav.skills')}</Link>
              <Link to="/experiences" className="hover:text-red-600 dark:hover:text-white transition-colors w-fit">{t('nav.experiences')}</Link>
              <Link to="/projets" className="hover:text-red-600 dark:hover:text-white transition-colors w-fit">{t('nav.projects')}</Link>
              <Link to="/contact" className="hover:text-red-600 dark:hover:text-white transition-colors w-fit">{t('nav.contact')}</Link>
            </nav>
          </div>

          {/* Colonne 3 : Informations de Contact (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4 text-left">
            <h4 className="font-bebas text-lg text-zinc-900 dark:text-white tracking-widest uppercase">
              {t('footer.contactHeading')}
            </h4>
            <div className="flex flex-col space-y-3.5 text-zinc-600 dark:text-zinc-500">
              <div className="flex items-center gap-3 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 text-zinc-600 dark:text-zinc-500 group-hover:border-red-600 group-hover:text-red-500 transition-colors">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">{t('footer.email')}</span>
                  <a href="mailto:legrandmohamed67@gmail.com" className="hover:text-red-600 dark:hover:text-white transition-colors text-xs font-mono">
                    legrandmohamed67@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 text-zinc-600 dark:text-zinc-500 group-hover:border-red-600 group-hover:text-red-500 transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">{t('footer.whatsapp')}</span>
                  <a href="https://wa.me/237677246900" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 dark:hover:text-white transition-colors text-xs font-mono">
                    +237 677 24 69 00
                  </a>
                  <a href="https://wa.me/237641212750" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 dark:hover:text-white transition-colors text-xs font-mono">
                    +237 641 21 27 50
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 text-zinc-600 dark:text-zinc-500 group-hover:border-red-600 group-hover:text-red-500 transition-colors">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">{t('footer.location')}</span>
                  <span className="text-xs text-zinc-600 dark:text-zinc-400">
                    {t('common.location')}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Ligne inférieure : Copyright & Réseaux Sociaux */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-zinc-500 dark:text-zinc-600 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} TAKADJIO Mohamed. {t('footer.rights')}
          </div>

          <div className="flex items-center gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/MohamedLegrand"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900 bg-zinc-100/60 dark:bg-zinc-950/40 text-zinc-500 hover:text-red-600 dark:hover:text-white hover:border-red-600 transition-all"
              aria-label="GitHub"
            >
              <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mohamed-legrand-366411344"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900 bg-zinc-100/60 dark:bg-zinc-950/40 text-zinc-500 hover:text-red-600 dark:hover:text-white hover:border-red-600 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/237677246900"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900 bg-zinc-100/60 dark:bg-zinc-950/40 text-zinc-500 hover:text-red-600 dark:hover:text-white hover:border-red-600 transition-all"
              aria-label="WhatsApp"
            >
              <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
