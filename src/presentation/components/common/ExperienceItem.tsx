import type { Experience } from '@/domain/entities/Experience';
import { useTranslation } from 'react-i18next';

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  const { t } = useTranslation();
  // Formateur simple de date (ex: 2024-03 -> Mars 2024)
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const [year, month] = dateStr.split('-');
    const months = t('experiences.months', { returnObjects: true }) as string[];
    const monthIdx = parseInt(month, 10) - 1;
    return monthIdx >= 0 && monthIdx < 12 ? `${months[monthIdx]} ${year}` : dateStr;
  };

  const startFormatted = formatDate(experience.startDate);
  const endFormatted = experience.endDate ? formatDate(experience.endDate) : t('experiences.present');

  return (
    <div className="relative pl-8 sm:pl-10 pb-12 last:pb-0 group">
      {/* Ligne verticale de la timeline */}
      <div className="absolute left-[11px] top-2 bottom-0 w-[2px] bg-zinc-300 dark:bg-zinc-800 group-last:hidden" />

      {/* Point de la timeline */}
      <div className="absolute left-[4px] top-1.5 h-4 w-4 rounded-full border border-red-500 bg-zinc-100 dark:bg-zinc-950 transition-all duration-300 group-hover:bg-red-500 group-hover:ring-4 group-hover:ring-red-500/20" />

      {/* Conteneur de l'expérience */}
      <div className="flex flex-col gap-1.5">
        {/* Période */}
        <span className="text-xs font-semibold uppercase tracking-wider text-red-700 dark:text-red-500">
          {startFormatted === endFormatted ? startFormatted : <>{startFormatted} &mdash; {endFormatted}</>}
        </span>

        {/* Rôle & Entreprise */}
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
          {experience.role} <span className="text-zinc-600 dark:text-zinc-400 font-normal">{t('experiences.at')}</span> {experience.company}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {experience.description}
        </p>

        {/* Technologies utilisées */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-300/80 dark:border-zinc-800/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
