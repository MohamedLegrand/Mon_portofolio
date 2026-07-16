import { useState, useEffect } from 'react';
import type { Project } from '@/domain/entities/Project';
import { getProjectByIdUseCase } from '@/di/container';

export function useProject(id: string | undefined) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      setError('Identifiant de projet manquant.');
      return;
    }

    let isMounted = true;
    getProjectByIdUseCase.execute(id)
      .then((data) => {
        if (isMounted) {
          setProject(data);
          setLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Une erreur est survenue lors du chargement du projet.');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  return { project, loading, error };
}
