import type { IExperienceRepository } from '@/domain/repositories/IExperienceRepository';
import type { Experience } from '@/domain/entities/Experience';

export class GetExperiences {
  private repository: IExperienceRepository;

  constructor(repository: IExperienceRepository) {
    this.repository = repository;
  }

  async execute(): Promise<Experience[]> {
    return this.repository.getAll();
  }
}
