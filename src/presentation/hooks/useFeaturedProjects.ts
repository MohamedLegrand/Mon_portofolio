import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/presentation/hooks/useLanguage';
import type { Project } from '@/domain/entities/Project';
import { getFeaturedProjectsUseCase } from '@/di/container';

export function useFeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const { t } = useTranslation();
  const lang = useLanguage();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    getFeaturedProjectsUseCase.execute(lang)
      .then((data) => {
        if (isMounted) {
          setProjects(data);
          setLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (isMounted) {
          setError(err instanceof Error ? err.message : t('projects.loadError'));
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [lang, t]);

  return { projects, loading, error };
}
