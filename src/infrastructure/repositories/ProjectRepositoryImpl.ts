import type { IProjectRepository } from '@/domain/repositories/IProjectRepository';
import type { Project } from '@/domain/entities/Project';
import projectsData from '@/infrastructure/data/projects.json';

export class ProjectRepositoryImpl implements IProjectRepository {
  async getAll(): Promise<Project[]> {
    return projectsData as Project[];
  }

  async getById(id: string): Promise<Project | null> {
    const project = projectsData.find((p) => p.id === id);
    if (!project) return null;
    return project as Project;
  }
}
