import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t, i18n } = useTranslation();
  const nextLanguage = i18n.resolvedLanguage === 'en' ? 'fr' : 'en';
  const toggleLanguage = () => i18n.changeLanguage(nextLanguage);
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark'; // Sombre par défaut
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-900 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / Nom */}
        <Link to="/" className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white hover:text-red-500 transition-colors uppercase font-bebas text-2xl">
          TAKADJIO <span className="text-red-600">Mohamed</span>
        </Link>

        {/* Navigation Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center space-x-8 text-sm font-semibold tracking-wider text-zinc-600 dark:text-zinc-400 uppercase font-bebas text-base">
            <Link to="/" className="hover:text-red-600 dark:hover:text-white hover:underline decoration-red-600 underline-offset-4 decoration-2 transition-all">{t('nav.home')}</Link>
            <Link to="/competences" className="hover:text-red-600 dark:hover:text-white hover:underline decoration-red-600 underline-offset-4 decoration-2 transition-all">{t('nav.skills')}</Link>
            <Link to="/experiences" className="hover:text-red-600 dark:hover:text-white hover:underline decoration-red-600 underline-offset-4 decoration-2 transition-all">{t('nav.experiences')}</Link>
            <Link to="/projets" className="hover:text-red-600 dark:hover:text-white hover:underline decoration-red-600 underline-offset-4 decoration-2 transition-all">{t('nav.projects')}</Link>
            <Link to="/contact" className="hover:text-red-600 dark:hover:text-white hover:underline decoration-red-600 underline-offset-4 decoration-2 transition-all">{t('nav.contact')}</Link>
          </nav>

          {/* Bouton de langue Desktop */}
          <button
            onClick={toggleLanguage}
            className="flex h-8 min-w-8 px-2 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900 bg-zinc-100/60 dark:bg-zinc-950/40 text-[11px] font-bold tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-white hover:border-red-600 transition-all focus:outline-none"
            aria-label={t('nav.switchLanguage')}
            title={t('nav.switchLanguage')}
          >
            {nextLanguage.toUpperCase()}
          </button>

          {/* Bouton Toggle Thème Desktop */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900 bg-zinc-100/60 dark:bg-zinc-950/40 text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-white hover:border-red-600 transition-all focus:outline-none"
            aria-label={t('nav.toggleTheme')}
          >
            {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>
        </div>

        {/* Actions à Droite Mobile */}
        <div className="flex md:hidden items-center gap-4">
          {/* Bouton de langue Mobile */}
          <button
            onClick={toggleLanguage}
            className="flex h-8 min-w-8 px-2 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900 bg-zinc-100/60 dark:bg-zinc-950/40 text-[11px] font-bold tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-white hover:border-red-600 transition-all focus:outline-none"
            aria-label={t('nav.switchLanguage')}
            title={t('nav.switchLanguage')}
          >
            {nextLanguage.toUpperCase()}
          </button>

          {/* Bouton Toggle Thème Mobile */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-900 bg-zinc-100/60 dark:bg-zinc-950/40 text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-white transition-all focus:outline-none"
            aria-label={t('nav.toggleTheme')}
          >
            {theme === 'dark' ? <Sun className="h-4.5 w-4.5" /> : <Moon className="h-4.5 w-4.5" />}
          </button>

          {/* Hamburger Mobile */}
          <button
            onClick={toggleMenu}
            className="text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-white focus:outline-none"
            aria-label={t('nav.toggleMenu')}
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Navigation Mobile */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black px-6 py-4 transition-all">
          <nav className="flex flex-col space-y-4 text-sm font-semibold tracking-wider text-zinc-600 dark:text-zinc-400 uppercase font-bebas text-base">
            <Link to="/" onClick={toggleMenu} className="hover:text-red-600 dark:hover:text-white transition-colors">{t('nav.home')}</Link>
            <Link to="/competences" onClick={toggleMenu} className="hover:text-red-600 dark:hover:text-white transition-colors">{t('nav.skills')}</Link>
            <Link to="/experiences" onClick={toggleMenu} className="hover:text-red-600 dark:hover:text-white transition-colors">{t('nav.experiences')}</Link>
            <Link to="/projets" onClick={toggleMenu} className="hover:text-red-600 dark:hover:text-white transition-colors">{t('nav.projects')}</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-red-600 dark:hover:text-white transition-colors">{t('nav.contact')}</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
