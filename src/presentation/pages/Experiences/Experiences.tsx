import { useExperiences } from '@/presentation/hooks/useExperiences';
import { ExperienceItem } from '@/presentation/components/common/ExperienceItem';
import { LoadingSpinner } from '@/presentation/components/common/LoadingSpinner';

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details: string;
}

const educationList: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Diplôme d'Ingénieur des Travaux Informatiques",
    institution: "École Supérieure Polytechnique",
    period: "2021 - 2024",
    details: "Spécialisation en Génie Logiciel, Conception Orientée Objet, Modélisation UML, Gestion de Projets et Développement d'Applications."
  },
  {
    id: "edu-2",
    degree: "Diplôme de Technicien Supérieur (DTS)",
    institution: "Institut Supérieur de Technologie",
    period: "2019 - 2021",
    details: "Administration système Linux/Windows, architecture réseaux, routage, sécurité et protocoles de communication."
  }
];

export function Experiences() {
  const { experiences, loading, error } = useExperiences();

  // Trier les expériences de la plus récente à la plus ancienne par date de début
  const sortedExperiences = [...experiences].sort((a, b) => 
    b.startDate.localeCompare(a.startDate)
  );

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
      <div className="text-center mb-16">
        {/* Titre */}
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Mon <span className="bg-gradient-to-r from-red-400 to-red-650 bg-clip-text text-transparent">Parcours</span>
        </h1>
        {/* Sous-titre */}
        <p className="mx-auto mt-4 text-base text-zinc-400 sm:text-lg">
          Mon historique professionnel et mon éducation académique de technicien et ingénieur.
        </p>
      </div>

      {/* État de chargement */}
      {loading && <LoadingSpinner />}

      {/* État d'erreur */}
      {error && !loading && (
        <div className="mx-auto max-w-xl rounded-2xl border border-red-500/20 bg-red-500/5 p-4 text-center text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Affichage de la timeline */}
      {!loading && !error && (
        <div className="space-y-20">
          {/* Expériences professionnelles */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white tracking-widest border-b border-zinc-900 pb-3 font-monster text-3xl text-left">
              Expériences Professionnelles
            </h2>
            <div className="relative pl-2">
              {sortedExperiences.map((experience) => (
                <ExperienceItem key={experience.id} experience={experience} />
              ))}
              {experiences.length === 0 && (
                <p className="text-zinc-500">Aucune expérience répertoriée pour le moment.</p>
              )}
            </div>
          </div>

          {/* Éducation & Formations */}
          <div className="space-y-8 text-left">
            <h2 className="text-2xl font-bold text-white tracking-widest border-b border-zinc-900 pb-3 font-monster text-3xl">
              Éducation & Diplômes
            </h2>
            <div className="space-y-8 pl-2">
              {educationList.map((edu) => (
                <div key={edu.id} className="relative group border-l border-zinc-900 pl-6 ml-2">
                  {/* Petit point rouge de repère */}
                  <div className="absolute -left-[14px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-900 bg-black group-hover:border-red-655 transition-colors">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-800 group-hover:bg-red-500 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h4 className="text-lg font-bold text-white uppercase group-hover:text-red-500 transition-colors">
                        {edu.degree}
                      </h4>
                      <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                        {edu.period}
                      </span>
                    </div>
                    <span className="text-xs text-red-600 font-semibold uppercase tracking-wider font-mono">
                      {edu.institution}
                    </span>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
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
