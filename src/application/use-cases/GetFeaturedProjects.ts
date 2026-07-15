import type { IProjectRepository } from '@/domain/repositories/IProjectRepository';
import type { Project } from '@/domain/entities/Project';

export class GetFeaturedProjects {
  private repository: IProjectRepository;

  constructor(repository: IProjectRepository) {
    this.repository = repository;
  }

  async execute(): Promise<Project[]> {
    const projects = await this.repository.getAll();
    return projects.filter(project => project.featured === true);
  }
}
