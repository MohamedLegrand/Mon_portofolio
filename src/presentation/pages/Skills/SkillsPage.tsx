import { motion } from 'framer-motion';

interface LifecycleStage {
  step: string;
  title: string;
  description: string;
}

interface TechSkill {
  name: string;
  image: string;
  description: string;
}

const lifecycleStages: LifecycleStage[] = [
  {
    step: "01",
    title: "Expression des besoins fonctionnels du client",
    description: "Écoute attentive et recueil des exigences auprès du client. Rédaction de spécifications claires et définition précise du périmètre du projet."
  },
  {
    step: "02",
    title: "Analyse",
    description: "Étude technique approfondie de faisabilité, structuration de l'architecture logicielle globale et choix des technologies optimales."
  },
  {
    step: "03",
    title: "Modélisation",
    description: "Représentation conceptuelle des données et des interactions système. Élaboration des diagrammes UML et des modèles Merise (MCD/MLD)."
  },
  {
    step: "04",
    title: "Codage",
    description: "Développement concret de la solution avec l'écriture d'un code propre, documenté, hautement performant et facile à maintenir."
  },
  {
    step: "05",
    title: "Test",
    description: "Validation rigoureuse des fonctionnalités du projet, vérification de la sécurité et tests d'intégration complets des routes d'APIs."
  },
  {
    step: "06",
    title: "Déploiement",
    description: "Hébergement de l'application en environnement de production et automatisation de la livraison continue (CI/CD)."
  },
  {
    step: "07",
    title: "Maintenance",
    description: "Suivi continu de l'application en production, correction proactive des bugs et intégration de nouvelles fonctionnalités évolutives."
  }
];

const techSkills: TechSkill[] = [
  {
    name: "Python",
    image: "/images/langage/python.jpg",
    description: "Mon langage de choix pour développer des APIs backend véloces, concevoir des scripts d'automatisation et manipuler des volumes de données."
  },
  {
    name: "ReactJS",
    image: "/images/framework/reactjs.jpg",
    description: "Bibliothèque front-end incontournable me permettant de structurer et coder des interfaces utilisateur dynamiques, interactives et performantes."
  },
  {
    name: "GitHub",
    image: "/images/devops/github.jpg",
    description: "Outil essentiel pour héberger, versionner et gérer le code source de mes projets tout en collaborant efficacement en équipe."
  },
  {
    name: "PostgreSQL",
    image: "/images/sgbd/postgresql.jpg",
    description: "SGBD relationnel avancé que j'utilise pour concevoir des schémas de données stricts, sécurisés et hautement performants."
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
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Mon Expertise & <span className="bg-gradient-to-r from-red-400 to-red-650 bg-clip-text text-transparent">Compétences</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg">
          Découvrez ma méthodologie basée sur le cycle de vie du logiciel et mes outils de programmation favoris.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Partie 1 : Cycle de vie d'un projet (7 étapes) */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="border-b border-zinc-900 pb-3">
            <h3 className="text-2xl font-bold text-white tracking-widest font-monster">
              Cycle de vie d'un projet
            </h3>
            <p className="text-xs text-zinc-500 mt-1 font-medium italic">
              Ma démarche structurée étape par étape pour mener à bien un projet informatique de l'analyse à la livraison.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative border-l border-zinc-900 pl-6 ml-2 space-y-8"
          >
            {lifecycleStages.map((stage, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative group"
              >
                {/* Petit point indicateur sur la ligne verticale */}
                <div className="absolute -left-[31px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border border-zinc-900 bg-black group-hover:border-red-600 transition-colors">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-800 group-hover:bg-red-500 transition-colors" />
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <span className="font-bebas text-lg text-red-655 leading-none">
                      {stage.step}
                    </span>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider group-hover:text-red-500 transition-colors">
                      {stage.title}
                    </h4>
                  </div>
                  <p className="text-xs leading-relaxed text-zinc-400 mt-1 pl-7">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Partie 2 : Technologies Maîtrisées (4 compétences clés) */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div className="border-b border-zinc-900 pb-3">
            <h3 className="text-2xl font-bold text-white tracking-widest font-monster">
              Compétences Techniques Clés
            </h3>
            <p className="text-xs text-zinc-500 mt-1 font-medium italic">
              Les outils et langages fondamentaux au cœur de toutes mes applications.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6"
          >
            {techSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -4, borderColor: '#dc2626' }}
                className="flex items-start gap-4 p-5 rounded-xl border border-zinc-900 bg-zinc-950/20 backdrop-blur-sm transition-all duration-300 group select-none min-h-[110px]"
              >
                {/* Logo */}
                <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-zinc-800 bg-black flex items-center justify-center p-1 group-hover:border-red-600 transition-colors mt-0.5">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Nom & Description */}
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold text-white uppercase group-hover:text-red-500 transition-colors">
                    {skill.name}
                  </span>
                  <p className="text-xs leading-relaxed text-zinc-400">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
