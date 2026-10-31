import { useTranslation } from 'react-i18next';

export function QuoteCard() {
  const { t } = useTranslation();
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 p-8 text-zinc-900 dark:text-white min-h-[300px] h-full">
      <div className="absolute right-4 top-4 text-9xl font-serif text-red-300/20 dark:text-red-800/10 select-none pointer-events-none">
        “
      </div>

      <div className="flex flex-col gap-4">
        {/* Icône de citation */}
        <span className="text-red-600 dark:text-red-500 text-5xl font-serif leading-none select-none">“</span>
        <p className="text-lg font-medium leading-relaxed tracking-wide text-red-900/80 dark:text-red-100/90">
          {t('quote.text')}
        </p>
      </div>

      <div className="mt-8">
        <p className="text-xs uppercase tracking-wider text-red-600 font-bold">
          {t('quote.caption')}
        </p>
      </div>
    </div>
  );
}
