import type { IProjectRepository } from '@/domain/repositories/IProjectRepository';
import type { Project } from '@/domain/entities/Project';
import type { Language } from '@/domain/value-objects/Language';

export class GetFeaturedProjects {
  private repository: IProjectRepository;

  constructor(repository: IProjectRepository) {
    this.repository = repository;
  }

  async execute(lang: Language): Promise<Project[]> {
    const projects = await this.repository.getAll(lang);
    return projects.filter(project => project.featured === true);
  }
}
