import { Link } from 'react-router-dom';
import type { Project } from '@/domain/entities/Project';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const num = `0${index + 1}`;
  const hasImage = project.imageUrl && project.imageUrl.trim() !== '';

  return (
    <article className="group flex flex-col gap-4 border-b border-zinc-200 dark:border-zinc-900 pb-6 hover:border-red-600 transition-colors h-full text-left">
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-950">
        {hasImage ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover grayscale brightness-90 contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-red-50 dark:from-red-950/20 via-zinc-100 dark:via-zinc-900 to-zinc-50 dark:to-zinc-950 p-6 text-center">
            <span className="text-sm font-semibold tracking-wider text-red-600/80 dark:text-red-500/80 uppercase">
              {project.stack[0] || 'Web Project'}
            </span>
          </div>
        )}
        {project.featured && (
          <span className="absolute right-4 top-4 rounded-full bg-red-600 px-2.5 py-1 text-[8px] font-bold uppercase tracking-wider text-white shadow-md">
            Mis en avant
          </span>
        )}
      </div>

      {/* Infos */}
      <div className="flex items-start gap-4 mt-2 flex-1">
        {/* Numéro géant rouge */}
        <div className="font-bebas text-4xl text-red-600 leading-none">
          {num}
        </div>

        {/* Titre & Catégorie */}
        <div className="flex-1 flex flex-col text-left">
          <h4 className="text-lg font-bold text-zinc-900 dark:text-white uppercase group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors line-clamp-1">
            {project.title}
          </h4>
          <p className="text-xs text-zinc-600 dark:text-zinc-500 uppercase mt-0.5 tracking-wider font-semibold">
            {project.stack.join(' / ')}
          </p>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      {/* Liens externes & En savoir plus */}
      <div className="flex items-center gap-4 pl-10 pt-2 mt-auto w-full">
        <Link
          to={`/projets/${project.id}`}
          className="text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-500 hover:text-zinc-900 dark:hover:text-white border border-red-500/20 hover:border-red-600 px-3 py-1.5 rounded transition-all inline-block"
        >
          En savoir plus
        </Link>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-red-600 dark:text-red-500 hover:text-red-500 dark:hover:text-red-400 transition-colors ml-auto"
          >
            Visiter
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </article>
  );
}
