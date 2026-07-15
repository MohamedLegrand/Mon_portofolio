import { useProjects } from '@/presentation/hooks/useProjects';
import { ProjectCard } from '@/presentation/components/common/ProjectCard';
import { LoadingSpinner } from '@/presentation/components/common/LoadingSpinner';
import type { Project } from '@/domain/entities/Project';

export function Projects() {
  const { projects, loading, error } = useProjects();
  const analysisProjects = projects.filter((p: Project) => p.category === 'analyse');
  const codeProjects = projects.filter((p: Project) => p.category === 'code');

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="text-center">
        {/* Titre */}
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Mes <span className="bg-gradient-to-r from-red-400 to-red-650 bg-clip-text text-transparent">Projets</span>
        </h1>
        {/* Sous-titre */}
        <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
          Découvrez mes travaux récents divisés entre l'analyse de systèmes complexes et le codage d'applications web.
        </p>
      </div>

      {/* État de chargement */}
      {loading && (
        <div className="mt-16">
          <LoadingSpinner />
        </div>
      )}

      {/* État d'erreur */}
      {error && !loading && (
        <div className="mx-auto mt-16 max-w-xl rounded-2xl border border-red-500/20 bg-red-500/5 p-4 text-center text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Liste des projets */}
      {!loading && !error && (
        <div className="mt-16 space-y-20">
          {/* Section 1 : Projets d'Analyse */}
          {analysisProjects.length > 0 && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white tracking-widest border-b border-zinc-900 pb-3 font-monster text-3xl text-left">
                Projets d'Analyse & Modélisation
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {analysisProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Section 2 : Projets de Code */}
          {codeProjects.length > 0 && (
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white tracking-widest border-b border-zinc-900 pb-3 font-monster text-3xl text-left">
                Projets de Développement de Code
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {codeProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index + analysisProjects.length} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Fallback si aucun projet */}
      {!loading && !error && projects.length === 0 && (
        <p className="mt-16 text-center text-zinc-500">
          Aucun projet n'a été trouvé pour le moment.
        </p>
      )}
    </section>
  );
}
