import { useExperiences } from '@/presentation/hooks/useExperiences';
import { ExperienceItem } from '@/presentation/components/common/ExperienceItem';
import { LoadingSpinner } from '@/presentation/components/common/LoadingSpinner';
import { useTranslation } from 'react-i18next';
import { usePageMeta } from '@/presentation/hooks/usePageMeta';

export function Experiences() {
  const { t } = useTranslation();
  usePageMeta({ title: t('seo.experiencesTitle'), description: t('seo.experiencesDescription') });
  const educationList = [
    {
      id: 'edu-engineer',
      degree: t('education.engineerDegree'),
      institution: t('education.school'),
      period: '2026',
      details: t('education.engineerDetails'),
    },
    {
      id: 'edu-dts',
      degree: t('education.dtsDegree'),
      institution: t('education.school'),
      period: '2025',
      details: t('education.dtsDetails'),
    },
  ];
  const { experiences, loading, error } = useExperiences();

  // Trier les expériences de la plus récente à la plus ancienne par date de début
  const sortedExperiences = [...experiences].sort((a, b) => 
    b.startDate.localeCompare(a.startDate)
  );

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <div className="text-center mb-16">
        {/* Titre */}
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          {t('experiences.titleA')} <span className="bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-600 bg-clip-text text-transparent">{t('experiences.titleB')}</span>
        </h1>
        {/* Sous-titre */}
        <p className="mx-auto mt-4 text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
          {t('experiences.subtitle')}
        </p>
      </div>

      {/* État de chargement */}
      {loading && <LoadingSpinner />}

      {/* État d'erreur */}
      {error && !loading && (
        <div className="mx-auto max-w-xl rounded-2xl border border-red-500/20 bg-red-500/10 dark:bg-red-500/5 p-4 text-center text-sm text-red-600 dark:text-red-400">
          {error}
        </div>
      )}

      {/* Affichage de la timeline */}
      {!loading && !error && (
        <div className="space-y-20">
          {/* Expériences professionnelles */}
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-wider sm:tracking-widest break-words border-b border-zinc-200 dark:border-zinc-900 pb-3 font-monster text-left">
              {t('experiences.proHeading')}
            </h2>
            <div className="relative pl-2">
              {sortedExperiences.map((experience) => (
                <ExperienceItem key={experience.id} experience={experience} />
              ))}
              {experiences.length === 0 && (
                <p className="text-zinc-600 dark:text-zinc-500">{t('experiences.empty')}</p>
              )}
            </div>
          </div>

          {/* Éducation & Formations */}
          <div className="space-y-8 text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-wider sm:tracking-widest break-words border-b border-zinc-200 dark:border-zinc-900 pb-3 font-monster">
              {t('experiences.educationHeading')}
            </h2>
            <div className="space-y-8 pl-2">
              {educationList.map((edu) => (
                <div key={edu.id} className="relative group border-l border-zinc-200 dark:border-zinc-900 pl-6 ml-2">
                  {/* Petit point rouge de repère */}
                  <div className="absolute -left-[14px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black group-hover:border-red-600 transition-colors">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-800 group-hover:bg-red-500 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h4 className="text-lg font-bold text-zinc-900 dark:text-white uppercase group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                        {edu.degree}
                      </h4>
                      {edu.period && (
                        <span className="text-[10px] uppercase font-bold text-zinc-600 dark:text-zinc-500 tracking-wider">
                          {edu.period}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-red-600 font-semibold uppercase tracking-wider font-mono">
                      {edu.institution}
                    </span>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
