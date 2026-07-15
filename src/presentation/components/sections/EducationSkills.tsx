export function EducationSkills() {
  const educations = [
    {
      degree: "Diplôme d'Ingénieur en Informatique",
      school: "Université de Technologie",
      date: "2021 - 2024"
    },
    {
      degree: "Certification DevOps Cloud Practitioner",
      school: "AWS Training & Certification",
      date: "2025"
    }
  ];

  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", "Docker", 
    "Kubernetes", "AWS", "CI/CD", "TailwindCSS", "PostgreSQL", "React Native"
  ];

  return (
    <div className="flex flex-col gap-8 text-left">
      <div>
        <h3 className="text-xl font-bold text-white tracking-wider border-b border-zinc-900 pb-3 font-bebas text-2xl">
          EDUCATION & SKILLS
        </h3>
        
        {/* Education Section */}
        <div className="mt-6 flex flex-col gap-6">
          <h4 className="text-xs uppercase tracking-widest text-red-500 font-bold">
            Education
          </h4>
          <div className="flex flex-col gap-4">
            {educations.map((edu, index) => (
              <div key={index} className="flex flex-col gap-1 border-b border-zinc-900 pb-3 last:border-0 last:pb-0">
                <div className="flex justify-between items-start gap-4">
                  <h5 className="text-sm font-bold text-white tracking-wide">
                    {edu.degree}
                  </h5>
                  <span className="text-xs font-semibold text-red-500 shrink-0">
                    {edu.date}
                  </span>
                </div>
                <p className="text-xs text-zinc-400">
                  {edu.school}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Tag Cloud */}
      <div className="flex flex-col gap-4">
        <h4 className="text-xs uppercase tracking-widest text-red-500 font-bold">
          Skills
        </h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-zinc-800 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400 hover:border-red-650 hover:text-red-500 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
