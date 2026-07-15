import { useState, useEffect } from 'react';
import type { Project } from '@/domain/entities/Project';
import { getFeaturedProjectsUseCase } from '@/di/container';

export function useFeaturedProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    getFeaturedProjectsUseCase.execute()
      .then((data) => {
        if (isMounted) {
          setProjects(data);
          setLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Une erreur est survenue lors du chargement des projets mis en avant.');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { projects, loading, error };
}
