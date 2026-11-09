/** Groupe de technologies, éventuellement rattaché à une plateforme (web, mobile) */
export interface TechGroup {
  platform?: 'web' | 'mobile';
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  /** Projets d'analyse : technologies utilisées pour le développement, affichées à part */
  devStack?: TechGroup[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  category?: 'analyse' | 'code';
  details?: string;
}
