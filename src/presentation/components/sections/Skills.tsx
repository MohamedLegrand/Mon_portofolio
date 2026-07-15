import { useSkills } from '@/presentation/hooks/useSkills';
import { Code2, Server, Smartphone, Cloud, Layers } from 'lucide-react';
import type { SkillCategory } from '@/domain/entities/Skill';

interface CategoryInfo {
  title: string;
  icon: React.ReactNode;
  badgeBg: string;
  badgeText: string;
  borderHover: string;
}

const categoryMap: Record<SkillCategory, CategoryInfo> = {
  frontend: {
    title: 'Frontend',
    icon: <Code2 className="h-6 w-6 text-violet-400" />,
    badgeBg: 'bg-violet-500/5 border-violet-500/20 hover:bg-violet-500/10',
    badgeText: 'text-violet-300',
    borderHover: 'hover:border-violet-500/30 hover:shadow-violet-500/5'
  },
  backend: {
    title: 'Backend',
    icon: <Server className="h-6 w-6 text-fuchsia-400" />,
    badgeBg: 'bg-fuchsia-500/5 border-fuchsia-500/20 hover:bg-fuchsia-500/10',
    badgeText: 'text-fuchsia-300',
    borderHover: 'hover:border-fuchsia-500/30 hover:shadow-fuchsia-500/5'
  },
  mobile: {
    title: 'Mobile',
    icon: <Smartphone className="h-6 w-6 text-cyan-400" />,
    badgeBg: 'bg-cyan-500/5 border-cyan-500/20 hover:bg-cyan-500/10',
    badgeText: 'text-cyan-300',
    borderHover: 'hover:border-cyan-500/30 hover:shadow-cyan-500/5'
  },
  devops: {
    title: 'DevOps & Cloud',
    icon: <Cloud className="h-6 w-6 text-emerald-400" />,
    badgeBg: 'bg-emerald-500/5 border-emerald-500/20 hover:bg-emerald-500/10',
    badgeText: 'text-emerald-300',
    borderHover: 'hover:border-emerald-500/30 hover:shadow-emerald-500/5'
  },
  other: {
    title: 'Autres',
    icon: <Layers className="h-6 w-6 text-zinc-400" />,
    badgeBg: 'bg-zinc-500/5 border-zinc-500/20 hover:bg-zinc-500/10',
    badgeText: 'text-zinc-300',
    borderHover: 'hover:border-zinc-500/30 hover:shadow-zinc-500/5'
  }
};

export function Skills() {
  const { groupedSkills } = useSkills();

  // Liste des catégories à afficher dans l'ordre souhaité
  const categories: SkillCategory[] = ['frontend', 'backend', 'mobile', 'devops'];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="text-center">
        {/* Titre de section */}
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Mes <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Compétences</span>
        </h2>
        {/* Sous-titre */}
        <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
          Les technologies et outils que j'utilise au quotidien pour concevoir des produits modernes et performants.
        </p>
      </div>

      {/* Grille responsive */}
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((catKey) => {
          const catInfo = categoryMap[catKey];
          const skillsInCat = groupedSkills[catKey] || [];

          if (skillsInCat.length === 0) return null;

          return (
            <div
              key={catKey}
              className={`flex flex-col rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 backdrop-blur-sm transition-all duration-300 ${catInfo.borderHover}`}
            >
              {/* En-tête de la carte */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800">
                  {catInfo.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {catInfo.title}
                </h3>
              </div>

              {/* Badges des compétences */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {skillsInCat.map((skill) => (
                  <span
                    key={skill.id}
                    className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${catInfo.badgeBg} ${catInfo.badgeText}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
