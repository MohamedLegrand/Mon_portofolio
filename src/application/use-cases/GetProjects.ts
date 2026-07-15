import type { IProjectRepository } from '@/domain/repositories/IProjectRepository';
import type { Project } from '@/domain/entities/Project';

export class GetProjects {
  private repository: IProjectRepository;

  constructor(repository: IProjectRepository) {
    this.repository = repository;
  }

  async execute(): Promise<Project[]> {
    return this.repository.getAll();
  }
}
