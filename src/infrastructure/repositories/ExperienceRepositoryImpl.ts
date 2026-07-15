import type { IExperienceRepository } from '@/domain/repositories/IExperienceRepository';
import type { Experience } from '@/domain/entities/Experience';
import experiencesData from '@/infrastructure/data/experiences.json';

export class ExperienceRepositoryImpl implements IExperienceRepository {
  async getAll(): Promise<Experience[]> {
    return experiencesData as Experience[];
  }
}
