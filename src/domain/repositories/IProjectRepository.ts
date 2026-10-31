import type { Project } from '@/domain/entities/Project';
import type { Language } from '@/domain/value-objects/Language';

export interface IProjectRepository {
  getAll(lang: Language): Promise<Project[]>;
  getById(id: string, lang: Language): Promise<Project | null>;
}
