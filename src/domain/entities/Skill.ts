export type SkillCategory = 'frontend' | 'backend' | 'devops' | 'mobile' | 'other';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level?: number; // entre 1 et 5
  icon?: string;
}
