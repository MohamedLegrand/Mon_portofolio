import { useTranslation } from 'react-i18next';

export function WorkProcess() {
  const { t } = useTranslation();
  const steps = (t('process.steps', { returnObjects: true }) as { title: string; desc: string }[]).map(
    (step, index) => ({ ...step, num: String(index + 1).padStart(2, '0') })
  );

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-3xl font-bold uppercase text-zinc-900 dark:text-white tracking-wider border-b border-zinc-200 dark:border-zinc-900 pb-3 font-bebas">
        {t('process.heading')}
      </h3>
      <div className="relative mt-2 flex flex-col gap-7 pl-6 border-l border-zinc-200 dark:border-zinc-900">
        {steps.map((step) => (
          <div key={step.num} className="relative group">
            {/* Numéro rouge à gauche */}
            <div className="absolute -left-[35px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-black border border-red-600 text-xs font-extrabold text-red-700 dark:text-red-500 transition-all group-hover:bg-red-600 group-hover:text-white group-hover:scale-105">
              {step.num}
            </div>
            {/* Contenu */}
            <div className="flex flex-col gap-0.5">
              <h4 className="text-sm font-bold text-zinc-900 dark:text-white tracking-wider uppercase">
                {step.title}
              </h4>
              <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
