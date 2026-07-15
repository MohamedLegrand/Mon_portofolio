import type { IProjectRepository } from '@/domain/repositories/IProjectRepository';
import type { Project } from '@/domain/entities/Project';

export class GetProjectById {
  private repository: IProjectRepository;

  constructor(repository: IProjectRepository) {
    this.repository = repository;
  }

  async execute(id: string): Promise<Project | null> {
    return this.repository.getById(id);
  }
}
