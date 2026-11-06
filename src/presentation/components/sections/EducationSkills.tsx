import { useTranslation } from 'react-i18next';

export function EducationSkills() {
  const { t } = useTranslation();
  const educations = [
    {
      degree: t('education.engineerDegree'),
      school: t('education.school'),
      date: '2026'
    },
    {
      degree: t('education.dtsDegree'),
      school: t('education.school'),
      date: '2025'
    }
  ];

  const skillGroups = [
    {
      domain: t('educationSkills.domains.webMobile'),
      items: [
        { name: "Python", image: "/images/langage/python.jpg" },
        { name: "ReactJS", image: "/images/framework/reactjs.jpg" },
        { name: "Flutter", image: "/images/framework/flutter.jpg" },
        { name: "Dart", image: "/images/langage/dart.jpg" }
      ]
    },
    {
      domain: t('educationSkills.domains.devops'),
      items: [
        { name: "GitHub", image: "/images/devops/github.jpg" },
        { name: "Linux", image: "/images/devops/linux.jpg" },
        { name: "CI/CD", image: "/images/devops/ci-cd.jpg" },
        { name: "Docker", image: "/images/devops/docker.jpg" }
      ]
    },
    {
      domain: t('educationSkills.domains.database'),
      items: [{ name: "PostgreSQL", image: "/images/sgbd/postgresql.jpg" }]
    },
    {
      domain: t('educationSkills.domains.analysis'),
      items: [
        { name: "UML", image: "/images/analyse/uml.jpg" },
        { name: "MERISE", image: "/images/analyse/merise.jpg" }
      ]
    }
  ];

  return (
    <div className="flex flex-col gap-8 text-left">
      <div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white tracking-wider border-b border-zinc-200 dark:border-zinc-900 pb-3 font-bebas text-2xl">
          {t('educationSkills.heading')}
        </h3>

        {/* Education Section */}
        <div className="mt-6 flex flex-col gap-6">
          <h4 className="text-xs uppercase tracking-widest text-red-600 dark:text-red-500 font-bold">
            {t('educationSkills.education')}
          </h4>
          <div className="flex flex-col gap-4">
            {educations.map((edu, index) => (
              <div key={index} className="flex flex-col gap-1 border-b border-zinc-200 dark:border-zinc-900 pb-3 last:border-0 last:pb-0">
                <div className="flex justify-between items-start gap-4">
                  <h5 className="text-sm font-bold text-zinc-900 dark:text-white tracking-wide">
                    {edu.degree}
                  </h5>
                  {edu.date && (
                    <span className="text-xs font-semibold text-red-600 dark:text-red-500 shrink-0">
                      {edu.date}
                    </span>
                  )}
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  {edu.school}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Logo Grid */}
      <div className="flex flex-col gap-4">
        <h4 className="text-xs uppercase tracking-widest text-red-600 dark:text-red-500 font-bold">
          {t('educationSkills.skills')}
        </h4>
        <div className="flex flex-col gap-5">
          {skillGroups.map((group) => (
            <div key={group.domain} className="flex flex-col gap-2">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                {group.domain}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-900 bg-zinc-100/60 dark:bg-zinc-950/40 py-1.5 pl-1.5 pr-3 hover:border-red-600 transition-colors duration-300 group select-none"
                  >
                    <div className="h-6 w-6 shrink-0 overflow-hidden rounded-md border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-black flex items-center justify-center p-0.5 group-hover:border-red-600 transition-colors">
                      <img
                        src={skill.image}
                        alt={skill.name}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <span className="text-xs font-bold text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors uppercase tracking-wider">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
