import { useProjects } from '@/presentation/hooks/useProjects';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { projectImageClass } from '@/presentation/utils/projectImage';

// Projets mis en avant sur l'accueil, dans cet ordre
const HOME_PROJECT_IDS = ['mynkap', 'sagesse-africaine', 'hr-pay'];

export function SelectedProjects() {
  const { t } = useTranslation();
  const { projects, loading, error } = useProjects();
  const selected = HOME_PROJECT_IDS
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

  if (loading || error || selected.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 border-t border-zinc-200 dark:border-zinc-900">
      <div className="flex items-center justify-between mb-12">
        <h3 className="text-3xl font-bold uppercase tracking-wider text-zinc-900 dark:text-white font-bebas">
          {t('selectedProjects.heading')}
        </h3>
        <Link
          to="/projets"
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-700 dark:text-red-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
        >
          {t('selectedProjects.viewAll')}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {selected.map((project, index) => {
          const num = `0${index + 1}`;
          return (
            <Link
              key={project.id}
              to={`/projets/${project.id}`}
              className="group flex flex-col gap-4 border-b border-zinc-200 dark:border-zinc-900 pb-6 hover:border-red-600 transition-colors"
            >
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-950">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className={`h-full w-full grayscale brightness-90 contrast-105 group-hover:grayscale-0 transition-all duration-500 ${projectImageClass(project.imageUrl)}`}
                />
              </div>

              {/* Infos */}
              <div className="flex items-start gap-4">
                {/* Numéro géant rouge */}
                <div className="font-bebas text-4xl text-red-600 leading-none">
                  {num}
                </div>

                {/* Titre & Catégorie */}
                <div className="flex-1 flex flex-col text-left">
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white uppercase group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors line-clamp-2 break-words">
                    {project.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 uppercase mt-0.5 tracking-wider font-semibold">
                    {project.stack.slice(0, 3).join(' / ')}
                  </p>
                  <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {t(`selectedProjects.descriptions.${project.id}`)}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight className="h-5 w-5 text-zinc-500 dark:text-zinc-400 group-hover:text-red-600 dark:group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
