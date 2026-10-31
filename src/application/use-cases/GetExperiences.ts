import type { IExperienceRepository } from '@/domain/repositories/IExperienceRepository';
import type { Experience } from '@/domain/entities/Experience';
import type { Language } from '@/domain/value-objects/Language';

export class GetExperiences {
  private repository: IExperienceRepository;

  constructor(repository: IExperienceRepository) {
    this.repository = repository;
  }

  async execute(lang: Language): Promise<Experience[]> {
    return this.repository.getAll(lang);
  }
}
