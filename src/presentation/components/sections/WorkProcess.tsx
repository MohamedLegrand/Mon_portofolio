export function WorkProcess() {
  const steps = [
    {
      num: '01',
      title: 'EXPRESSION DES BESOINS',
      desc: 'Écoute attentive, recueil des exigences du client et définition précise du périmètre.'
    },
    {
      num: '02',
      title: 'ANALYSE',
      desc: 'Étude technique de faisabilité, structuration de l\'architecture et choix technologiques.'
    },
    {
      num: '03',
      title: 'MODÉLISATION',
      desc: 'Conception des schémas de données et élaboration des diagrammes UML / MERISE.'
    },
    {
      num: '04',
      title: 'CODAGE',
      desc: 'Développement de la solution avec écriture d\'un code propre, modulaire et performant.'
    },
    {
      num: '05',
      title: 'TEST',
      desc: 'Validation complète des fonctionnalités, vérification de la sécurité et tests d\'intégration.'
    },
    {
      num: '06',
      title: 'DÉPLOIEMENT',
      desc: 'Mise en production sécurisée de l\'application et automatisation du pipeline CI/CD.'
    },
    {
      num: '07',
      title: 'MAINTENANCE',
      desc: 'Suivi post-déploiement, correction des anomalies et évolutions applicatives.'
    }
  ];

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-bold text-white tracking-wider border-b border-zinc-900 pb-3 font-bebas text-2xl">
        CYCLE DE VIE D'UN PROJET
      </h3>
      <div className="relative mt-2 flex flex-col gap-7 pl-6 border-l border-zinc-900">
        {steps.map((step) => (
          <div key={step.num} className="relative group">
            {/* Numéro rouge à gauche */}
            <div className="absolute -left-[35px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-black border border-red-600 text-[10px] font-extrabold text-red-500 transition-all group-hover:bg-red-600 group-hover:text-white group-hover:scale-105">
              {step.num}
            </div>
            {/* Contenu */}
            <div className="flex flex-col gap-0.5">
              <h4 className="text-sm font-bold text-white tracking-wider uppercase">
                {step.title}
              </h4>
              <p className="text-xs leading-relaxed text-zinc-400">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
