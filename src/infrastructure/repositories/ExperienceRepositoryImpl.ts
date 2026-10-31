import type { IExperienceRepository } from '@/domain/repositories/IExperienceRepository';
import type { Experience } from '@/domain/entities/Experience';
import type { Language, LocalizedText } from '@/domain/value-objects/Language';
import experiencesData from '@/infrastructure/data/experiences.json';

// Format brut du fichier JSON : les champs textuels existent en plusieurs langues
interface ExperienceRecord extends Omit<Experience, 'role' | 'description'> {
  role: LocalizedText;
  description: LocalizedText;
}

export class ExperienceRepositoryImpl implements IExperienceRepository {
  async getAll(lang: Language): Promise<Experience[]> {
    return (experiencesData as ExperienceRecord[]).map((e) => ({
      ...e,
      role: e.role[lang],
      description: e.description[lang],
    }));
  }
}
