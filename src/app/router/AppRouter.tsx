import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/presentation/components/layout/Layout';
import { Home } from '@/presentation/pages/Home/Home';
import { LoadingSpinner } from '@/presentation/components/common/LoadingSpinner';
import { NotFound, RouteErrorPage } from '@/presentation/pages/NotFound/NotFound';

// L'accueil est chargé immédiatement ; les autres pages ne sont téléchargées
// qu'au moment où l'on y navigue (code splitting).
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    hydrateFallbackElement: <LoadingSpinner />,
    errorElement: <RouteErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'projets',
        lazy: () =>
          import('@/presentation/pages/Projects/Projects').then((m) => ({ Component: m.Projects })),
      },
      {
        path: 'projets/:id',
        lazy: () =>
          import('@/presentation/pages/Projects/ProjectDetailPage').then((m) => ({
            Component: m.ProjectDetailPage,
          })),
      },
      {
        path: 'competences',
        lazy: () =>
          import('@/presentation/pages/Skills/SkillsPage').then((m) => ({ Component: m.SkillsPage })),
      },
      {
        path: 'experiences',
        lazy: () =>
          import('@/presentation/pages/Experiences/Experiences').then((m) => ({
            Component: m.Experiences,
          })),
      },
      {
        path: 'contact',
        lazy: () =>
          import('@/presentation/pages/Contact/Contact').then((m) => ({ Component: m.Contact })),
      },
      {
        // Toute adresse inconnue : page « Page introuvable » avec l'en-tête et le pied de page
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
