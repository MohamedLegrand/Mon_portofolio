import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/presentation/components/layout/Layout';
import { Home } from '@/presentation/pages/Home/Home';
import { Projects } from '@/presentation/pages/Projects/Projects';
import { ProjectDetailPage } from '@/presentation/pages/Projects/ProjectDetailPage';
import { SkillsPage } from '@/presentation/pages/Skills/SkillsPage';
import { Experiences } from '@/presentation/pages/Experiences/Experiences';
import { Contact } from '@/presentation/pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'projets',
        element: <Projects />,
      },
      {
        path: 'projets/:id',
        element: <ProjectDetailPage />,
      },
      {
        path: 'competences',
        element: <SkillsPage />,
      },
      {
        path: 'experiences',
        element: <Experiences />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
