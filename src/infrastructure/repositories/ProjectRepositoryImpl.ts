import type { IProjectRepository } from '@/domain/repositories/IProjectRepository';
import type { Project } from '@/domain/entities/Project';
import type { Language, LocalizedText } from '@/domain/value-objects/Language';
import projectsData from '@/infrastructure/data/projects.json';

// Format brut du fichier JSON : les champs textuels existent en plusieurs langues
interface ProjectRecord extends Omit<Project, 'description' | 'details'> {
  description: LocalizedText;
  details?: LocalizedText;
}

function toProject(record: ProjectRecord, lang: Language): Project {
  return {
    ...record,
    description: record.description[lang],
    details: record.details?.[lang],
  };
}

export class ProjectRepositoryImpl implements IProjectRepository {
  async getAll(lang: Language): Promise<Project[]> {
    return (projectsData as ProjectRecord[]).map((p) => toProject(p, lang));
  }

  async getById(id: string, lang: Language): Promise<Project | null> {
    const project = (projectsData as ProjectRecord[]).find((p) => p.id === id);
    if (!project) return null;
    return toProject(project, lang);
  }
}
