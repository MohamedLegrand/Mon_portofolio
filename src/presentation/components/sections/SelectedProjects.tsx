import { useProjects } from '@/presentation/hooks/useProjects';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function SelectedProjects() {
  const { t } = useTranslation();
  const { projects, loading, error } = useProjects();
  const selected = projects.filter((p) => p.featured === true).slice(0, 3);

  if (loading || error || selected.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 border-t border-zinc-200 dark:border-zinc-900">
      <div className="flex items-center justify-between mb-12">
        <h3 className="text-xl font-bold tracking-wider text-zinc-900 dark:text-white font-bebas text-2xl">
          {t('selectedProjects.heading')}
        </h3>
        <Link
          to="/projets"
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
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
              to="/projets"
              className="group flex flex-col gap-4 border-b border-zinc-200 dark:border-zinc-900 pb-6 hover:border-red-600 transition-colors"
            >
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-950">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale brightness-90 contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
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
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white uppercase group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-500 uppercase mt-0.5 tracking-wider font-semibold">
                    {project.stack.slice(0, 3).join(' / ')}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight className="h-5 w-5 text-zinc-500 dark:text-zinc-600 group-hover:text-red-600 dark:group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
