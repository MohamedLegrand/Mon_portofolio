import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/presentation/hooks/useLanguage';
import type { Project } from '@/domain/entities/Project';
import { getProjectByIdUseCase } from '@/di/container';

export function useProject(id: string | undefined) {
  const [project, setProject] = useState<Project | null>(null);
  const { t } = useTranslation();
  const lang = useLanguage();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    let isMounted = true;
    getProjectByIdUseCase.execute(id, lang)
      .then((data) => {
        if (isMounted) {
          setProject(data);
          setLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (isMounted) {
          setError(err instanceof Error ? err.message : t('projectDetail.loadError'));
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id, lang, t]);

  if (!id) {
    return { project: null, loading: false, error: t('projectDetail.missingId') };
  }

  return { project, loading, error };
}
