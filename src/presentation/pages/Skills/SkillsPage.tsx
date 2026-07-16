import { motion } from 'framer-motion';

interface SkillItem {
  name: string;
  image: string;
  description: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Analyse & Modélisation",
    description: "La structuration théorique et la modélisation des besoins d'un projet avant son développement.",
    skills: [
      { 
        name: "UML", 
        image: "/images/analyse/uml.jpg",
        description: "M'aide à modéliser l'architecture logicielle, concevoir les diagrammes de cas d'utilisation et structurer techniquement les projets."
      },
      { 
        name: "MERISE", 
        image: "/images/analyse/merise.jpg",
        description: "M'aide à concevoir et modéliser des bases de données relationnelles complexes via l'élaboration de MCD et MLD."
      }
    ]
  },
  {
    title: "Langages maîtrisés",
    description: "Les technologies fondamentales que j'utilise pour programmer et instruire les machines.",
    skills: [
      { 
        name: "Python", 
        image: "/images/langage/python.jpg",
        description: "Utilisé pour concevoir des APIs rapides, manipuler des données, écrire des scripts d'automatisation et exécuter des tâches back-end."
      },
      { 
        name: "HTML / CSS / JS", 
        image: "/images/langage/html-css-js.jpg",
        description: "Le socle fondamental pour concevoir des interfaces web interactives, accessibles et adaptées à tous les écrans."
      }
    ]
  },
  {
    title: "Frameworks & Librairies",
    description: "Les architectures applicatives clés en main pour accélérer le développement d'interfaces et de services.",
    skills: [
      { 
        name: "Django REST", 
        image: "/images/framework/django-rest.jpg",
        description: "Me permet de structurer et de déployer rapidement des APIs REST robustes et sécurisées avec un ORM puissant."
      },
      { 
        name: "ReactJS", 
        image: "/images/framework/reactjs.jpg",
        description: "M'aide à créer des interfaces utilisateurs dynamiques, réutilisables et hautement performantes côté client."
      },
      { 
        name: "TailwindCSS", 
        image: "/images/framework/tailwind-css.jpg",
        description: "Permet d'intégrer des designs UI modernes de manière fluide avec une approche utility-first entièrement responsive."
      },
      { 
        name: "FastAPI", 
        image: "/images/framework/fast-api.jpg",
        description: "Parfait pour développer des APIs asynchrones à haute performance, légères et documentées automatiquement via OpenAPI."
      }
    ]
  },
  {
    title: "Outils de développement",
    description: "Les logiciels et outils qui m'accompagnent au quotidien pour maximiser ma productivité.",
    skills: [
      { 
        name: "Postman", 
        image: "/images/outils/postman.jpg",
        description: "Essentiel pour tester, documenter, simuler et valider le comportement de toutes mes routes d'APIs."
      },
      { 
        name: "VS Code", 
        image: "/images/outils/vscode.jpg",
        description: "Mon éditeur de code principal hautement configuré, optimisé pour accroître ma productivité au quotidien."
      },
      { 
        name: "Antigravity", 
        image: "/images/outils/antigravity.jpg",
        description: "Mon environnement de développement (IDE) augmenté par IA pour concevoir, déboguer et coder avec une efficacité inégalée."
      }
    ]
  },
  {
    title: "DevOps & Plateformes",
    description: "Les processus de versioning et d'intégration continue indispensables pour livrer des projets fiables.",
    skills: [
      { 
        name: "GitHub", 
        image: "/images/devops/github.jpg",
        description: "M'aide à héberger, versionner et gérer le code de mes projets tout en collaborant en équipe via les Pull Requests."
      }
    ]
  },
  {
    title: "Bases de données (SGBD)",
    description: "Les systèmes de stockage structurés pour garantir la persistance et la cohérence des données.",
    skills: [
      { 
        name: "MySQL", 
        image: "/images/sgbd/my-sql.jpg",
        description: "Pour stocker de façon structurée et interroger efficacement les données relationnelles de mes applications."
      },
      { 
        name: "PostgreSQL", 
        image: "/images/sgbd/postgresql.jpg",
        description: "Mon SGBD relationnel de choix pour gérer de grands volumes de données avec une grande fiabilité et des types complexes."
      },
      { 
        name: "SQL Server", 
        image: "/images/sgbd/sql-server.jpg",
        description: "Utilisé pour administrer, optimiser et sécuriser des bases de données de niveau entreprise."
      }
    ]
  }
];

export function SkillsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: 'easeOut' as any }
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      {/* En-tête de page */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Mes <span className="bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-600 bg-clip-text text-transparent">Compétences</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
          Découvrez mes compétences techniques détaillées et expliquées par domaines d'application.
        </p>
      </div>

      {/* Catégories de compétences */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-16"
      >
        {skillCategories.map((category, catIdx) => (
          <div key={catIdx} className="space-y-6">
            {/* Titre & Description de la catégorie */}
            <div className="border-b border-zinc-200 dark:border-zinc-900 pb-3 text-left">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-widest font-monster text-2xl">
                {category.title}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-500 mt-1 font-medium italic">
                {category.description}
              </p>
            </div>

            {/* Grille des compétences de cette catégorie */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skillIdx}
                  variants={itemVariants}
                  whileHover={{ y: -4, borderColor: '#dc2626' }}
                  className="flex items-start gap-4 p-5 rounded-xl border border-zinc-200 dark:border-zinc-900 bg-zinc-100/60 dark:bg-zinc-950/20 backdrop-blur-sm transition-all duration-300 group select-none text-left min-h-[110px]"
                >
                  {/* Logo de la techno */}
                  <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-black flex items-center justify-center p-1 group-hover:border-red-600 transition-colors mt-0.5">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>

                  {/* Nom & Description */}
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-zinc-900 dark:text-white uppercase group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                      {skill.name}
                    </span>
                    <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
