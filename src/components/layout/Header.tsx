import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenTrial: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTrial }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Disciplinas', path: '/disciplinas' },
    { name: 'La Escuela', path: '/escuela' },
    { name: 'Horarios', path: '/horarios' },
    { name: 'Gala Danzas Al-Azraq', path: '/gala' },
    { name: 'Galería', path: '/galeria' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 sm:py-6 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Official Authentic Calligraphy Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group focus:outline-hidden z-20 py-1"
        >
          <img 
            src="/logo-white.png" 
            alt="Danzas Al-Azraq" 
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Center: Minimalist Floating Frosted Capsule */}
        <nav className={`hidden lg:flex items-center gap-7 px-8 py-2.5 rounded-full glass-capsule transition-all duration-300 ${
          scrolled ? 'bg-black/85 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-white/15' : ''
        }`}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={`text-[11px] uppercase tracking-[0.16em] font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white font-semibold drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Right: Contact link & stark white pill button */}
        <div className="hidden lg:flex items-center gap-6 z-20">
          <Link
            to="/contacto"
            className="text-[11px] uppercase tracking-[0.16em] font-medium text-white/70 hover:text-white transition-colors"
          >
            Contacto
          </Link>

          <button
            onClick={onOpenTrial}
            className="btn-pill-white text-xs py-2.5 px-6 gap-2"
          >
            <span>Reservar plaza</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center gap-3 z-20">
          <button
            onClick={onOpenTrial}
            className="btn-pill-white text-[11px] py-2 px-4"
          >
            Probar
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 text-white"
            aria-label="Menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-6 rounded-3xl antigravity-card border border-white/15 animate-in fade-in slide-in-from-top-3 duration-300 space-y-4">
          <div className="flex flex-col gap-2">
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-light text-white/70 hover:text-white hover:bg-white/[0.04]"
            >
              Inicio
            </NavLink>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-light text-white/70 hover:text-white hover:bg-white/[0.04]"
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-light text-white/70 hover:text-white hover:bg-white/[0.04]"
            >
              Contacto
            </NavLink>
          </div>

          <div className="pt-2 border-t border-white/[0.08]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrial();
              }}
              className="btn-pill-white w-full py-3 text-xs uppercase tracking-wider"
            >
              Reservar clase gratuita
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
