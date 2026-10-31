import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/presentation/hooks/useLanguage';
import type { Experience } from '@/domain/entities/Experience';
import { getExperiencesUseCase } from '@/di/container';

export function useExperiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const { t } = useTranslation();
  const lang = useLanguage();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    getExperiencesUseCase.execute(lang)
      .then((data) => {
        if (isMounted) {
          setExperiences(data);
          setLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (isMounted) {
          setError(err instanceof Error ? err.message : t('experiences.loadError'));
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [lang, t]);

  return { experiences, loading, error };
}
