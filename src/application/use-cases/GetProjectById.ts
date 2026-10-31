import type { IProjectRepository } from '@/domain/repositories/IProjectRepository';
import type { Project } from '@/domain/entities/Project';
import type { Language } from '@/domain/value-objects/Language';

export class GetProjectById {
  private repository: IProjectRepository;

  constructor(repository: IProjectRepository) {
    this.repository = repository;
  }

  async execute(id: string, lang: Language): Promise<Project | null> {
    return this.repository.getById(id, lang);
  }
}
