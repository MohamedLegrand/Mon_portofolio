import type { Experience } from '@/domain/entities/Experience';

export interface IExperienceRepository {
  getAll(): Promise<Experience[]>;
}
