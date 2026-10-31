import type { Language } from '@/domain/value-objects/Language';
import { projectDetailsFr } from './projectDetails';
import type { DetailedProject } from './projectDetails';
import { projectDetailsEn } from './projectDetails.en';

const detailsByLanguage: Record<Language, Record<string, DetailedProject>> = {
  fr: projectDetailsFr,
  en: projectDetailsEn,
};

export function getProjectDetail(id: string, lang: Language): DetailedProject | null {
  return detailsByLanguage[lang][id] ?? null;
}
