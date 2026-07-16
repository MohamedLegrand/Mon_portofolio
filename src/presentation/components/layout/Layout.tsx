import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-800 dark:bg-black dark:text-zinc-100 selection:bg-red-600/30 selection:text-red-900 dark:selection:text-red-200">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
