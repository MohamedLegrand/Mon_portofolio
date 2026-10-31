import type { Experience } from '@/domain/entities/Experience';
import type { Language } from '@/domain/value-objects/Language';

export interface IExperienceRepository {
  getAll(lang: Language): Promise<Experience[]>;
}
