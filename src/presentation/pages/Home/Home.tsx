import { Hero } from '@/presentation/components/sections/Hero';
import { AnalysisVsCode } from '@/presentation/components/sections/AnalysisVsCode';
import { SelectedProjects } from '@/presentation/components/sections/SelectedProjects';
import { EducationSkills } from '@/presentation/components/sections/EducationSkills';
import { WorkProcess } from '@/presentation/components/sections/WorkProcess';
import { QuoteCard } from '@/presentation/components/sections/QuoteCard';

export function Home() {
  return (
    <div className="bg-black">
      {/* Section Hero d'introduction tripartite */}
      <Hero />

      {/* Section Analyse & Développement (UML & Machine à écrire) */}
      <AnalysisVsCode />

      {/* Section Selected Projects (3 colonnes) */}
      <SelectedProjects />

      {/* Section d'informations secondaires (3 colonnes side-by-side) */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-zinc-900">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Éducation & Compétences */}
          <div className="lg:col-span-4">
            <EducationSkills />
          </div>

          {/* Processus de travail */}
          <div className="lg:col-span-4">
            <WorkProcess />
          </div>

          {/* Bloc de citation */}
          <div className="lg:col-span-4">
            <QuoteCard />
          </div>
        </div>
      </section>
    </div>
  );
}
