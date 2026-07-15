import skillsData from '@/infrastructure/data/skills.json';
import type { Skill } from '@/domain/entities/Skill';

export function useSkills() {
  const skills = skillsData as Skill[];

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<Skill['category'], Skill[]>);

  return { skills, groupedSkills };
}
