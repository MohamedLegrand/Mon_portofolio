import type { IProjectRepository } from '@/domain/repositories/IProjectRepository';
import type { Project } from '@/domain/entities/Project';
import type { Language } from '@/domain/value-objects/Language';

export class GetProjects {
  private repository: IProjectRepository;

  constructor(repository: IProjectRepository) {
    this.repository = repository;
  }

  async execute(lang: Language): Promise<Project[]> {
    return this.repository.getAll(lang);
  }
}
