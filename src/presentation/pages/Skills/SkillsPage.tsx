import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface SkillItem {
  name: string;
  image: string;
  // Clé de traduction sous skillsPage.skills
  descKey: string;
}

interface SkillCategory {
  // Clé de traduction sous skillsPage.categories
  key: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    key: "analysis",
    skills: [
      { 
        name: "UML", 
        image: "/images/analyse/uml.jpg",
        descKey: "uml"
      },
      { 
        name: "MERISE", 
        image: "/images/analyse/merise.jpg",
        descKey: "merise"
      }
    ]
  },
  {
    key: "languages",
    skills: [
      { 
        name: "Python", 
        image: "/images/langage/python.jpg",
        descKey: "python"
      },
      { 
        name: "HTML / CSS / JS", 
        image: "/images/langage/html-css-js.jpg",
        descKey: "htmlCssJs"
      },
      {
        name: "Dart",
        image: "/images/langage/dart.jpg",
        descKey: "dart"
      }
    ]
  },
  {
    key: "frameworks",
    skills: [
      { 
        name: "Django REST", 
        image: "/images/framework/django-rest.jpg",
        descKey: "djangoRest"
      },
      { 
        name: "ReactJS", 
        image: "/images/framework/reactjs.jpg",
        descKey: "react"
      },
      { 
        name: "TailwindCSS", 
        image: "/images/framework/tailwind-css.jpg",
        descKey: "tailwind"
      },
      { 
        name: "FastAPI", 
        image: "/images/framework/fast-api.jpg",
        descKey: "fastapi"
      },
      {
        name: "Flutter",
        image: "/images/framework/flutter.jpg",
        descKey: "flutter"
      }
    ]
  },
  {
    key: "tools",
    skills: [
      { 
        name: "Postman", 
        image: "/images/outils/postman.jpg",
        descKey: "postman"
      },
      { 
        name: "VS Code", 
        image: "/images/outils/vscode.jpg",
        descKey: "vscode"
      },
      { 
        name: "Antigravity", 
        image: "/images/outils/antigravity.jpg",
        descKey: "antigravity"
      }
    ]
  },
  {
    key: "devops",
    skills: [
      { 
        name: "GitHub", 
        image: "/images/devops/github.jpg",
        descKey: "github"
      },
      {
        name: "Linux",
        image: "/images/devops/linux.jpg",
        descKey: "linux"
      },
      {
        name: "CI/CD",
        image: "/images/devops/ci-cd.jpg",
        descKey: "cicd"
      },
      {
        name: "Docker",
        image: "/images/devops/docker.jpg",
        descKey: "docker"
      }
    ]
  },
  {
    key: "databases",
    skills: [
      { 
        name: "MySQL", 
        image: "/images/sgbd/my-sql.jpg",
        descKey: "mysql"
      },
      { 
        name: "PostgreSQL", 
        image: "/images/sgbd/postgresql.jpg",
        descKey: "postgresql"
      },
      { 
        name: "SQL Server", 
        image: "/images/sgbd/sql-server.jpg",
        descKey: "sqlserver"
      }
    ]
  }
];

export function SkillsPage() {
  const { t } = useTranslation();
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
      transition: { duration: 0.35, ease: 'easeOut' as const }
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      {/* En-tête de page */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          {t('skillsPage.titleA')} <span className="bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-600 bg-clip-text text-transparent">{t('skillsPage.titleB')}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
          {t('skillsPage.subtitle')}
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
                {t(`skillsPage.categories.${category.key}.title`)}
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-500 mt-1 font-medium italic">
                {t(`skillsPage.categories.${category.key}.description`)}
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
                      {t(`skillsPage.skills.${skill.descKey}`)}
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
