import { useState, useEffect } from 'react';
import type { Experience } from '@/domain/entities/Experience';
import { getExperiencesUseCase } from '@/di/container';

export function useExperiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    getExperiencesUseCase.execute()
      .then((data) => {
        if (isMounted) {
          setExperiences(data);
          setLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Une erreur est survenue lors du chargement des expériences.');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { experiences, loading, error };
}
