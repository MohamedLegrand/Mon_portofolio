import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-black/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / Nom */}
        <Link to="/" className="text-xl font-bold tracking-tight text-white hover:text-red-500 transition-colors uppercase font-bebas text-2xl">
          Mohamed <span className="text-red-600">Legrand</span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wider text-zinc-400 uppercase font-bebas text-base">
          <Link to="/" className="hover:text-white hover:underline decoration-red-600 underline-offset-4 decoration-2 transition-all">Accueil</Link>
          <Link to="/competences" className="hover:text-white hover:underline decoration-red-600 underline-offset-4 decoration-2 transition-all">Compétences</Link>
          <Link to="/experiences" className="hover:text-white hover:underline decoration-red-600 underline-offset-4 decoration-2 transition-all">Expériences</Link>
          <Link to="/projets" className="hover:text-white hover:underline decoration-red-600 underline-offset-4 decoration-2 transition-all">Projets</Link>
          <Link to="/contact" className="hover:text-white hover:underline decoration-red-600 underline-offset-4 decoration-2 transition-all">Contact</Link>
        </nav>

        {/* Hamburger Mobile */}
        <button 
          onClick={toggleMenu} 
          className="flex md:hidden text-zinc-400 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Mobile */}
      {isOpen && (
        <div className="md:hidden border-t border-zinc-900 bg-black px-6 py-4 transition-all">
          <nav className="flex flex-col space-y-4 text-sm font-semibold tracking-wider text-zinc-400 uppercase font-bebas text-base">
            <Link to="/" onClick={toggleMenu} className="hover:text-white transition-colors">Accueil</Link>
            <Link to="/competences" onClick={toggleMenu} className="hover:text-white transition-colors">Compétences</Link>
            <Link to="/experiences" onClick={toggleMenu} className="hover:text-white transition-colors">Expériences</Link>
            <Link to="/projets" onClick={toggleMenu} className="hover:text-white transition-colors">Projets</Link>
            <Link to="/contact" onClick={toggleMenu} className="hover:text-white transition-colors">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
