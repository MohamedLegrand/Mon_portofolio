import { ProjectRepositoryImpl } from '@/infrastructure/repositories/ProjectRepositoryImpl';
import { ExperienceRepositoryImpl } from '@/infrastructure/repositories/ExperienceRepositoryImpl';
import { ContactRepositoryImpl } from '@/infrastructure/repositories/ContactRepositoryImpl';
import { GetProjects } from '@/application/use-cases/GetProjects';
import { GetProjectById } from '@/application/use-cases/GetProjectById';
import { GetExperiences } from '@/application/use-cases/GetExperiences';
import { SendContactMessage } from '@/application/use-cases/SendContactMessage';

const projectRepository = new ProjectRepositoryImpl();
const experienceRepository = new ExperienceRepositoryImpl();
const contactRepository = new ContactRepositoryImpl();

export const getProjectsUseCase = new GetProjects(projectRepository);
export const getProjectByIdUseCase = new GetProjectById(projectRepository);
export const getExperiencesUseCase = new GetExperiences(experienceRepository);
export const sendContactMessageUseCase = new SendContactMessage(contactRepository);
