import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onOpenTrial: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenTrial }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Disciplinas', path: '/disciplinas' },
    { name: 'La Escuela', path: '/escuela' },
    { name: 'Horarios', path: '/horarios' },
    { name: 'Gala Danzas Al-Azraq', path: '/gala' },
    { name: 'Galería', path: '/galeria' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 sm:px-8 ${
        scrolled ? 'py-3 bg-black/60 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_15px_40px_rgba(0,0,0,0.85)]' : 'py-5 sm:py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Official Authentic Calligraphy Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 group focus:outline-hidden z-20 py-1"
        >
          <img 
            src="/logo-white.png" 
            alt="Danzas Al-Azraq" 
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110" 
          />
        </Link>

        {/* Center: Minimalist Floating Frosted Capsule with Animated Layout Indicator */}
        <nav 
          onMouseLeave={() => setHoveredPath(null)}
          className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-capsule transition-all duration-300 ${
            scrolled ? 'bg-black/80 shadow-[0_20px_50px_rgba(0,0,0,0.9)] border-white/15' : ''
          }`}
        >
          {(() => {
            const activePath = navLinks.some((l) => l.path === location.pathname) ? location.pathname : null;
            const currentPillPath = hoveredPath !== null ? hoveredPath : activePath;

            return navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const hasPill = currentPillPath === link.path;

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => setHoveredPath(link.path)}
                  className={`relative px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.16em] font-medium transition-colors duration-200 select-none ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {/* Single Smooth Sliding Capsule Background */}
                  {hasPill && (
                    <motion.div
                      layoutId="headerNavPill"
                      className={`absolute inset-0 rounded-full -z-10 ${
                        isActive
                          ? 'bg-white/15 border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.12)]'
                          : 'bg-white/[0.08] border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.06)]'
                      }`}
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </NavLink>
              );
            });
          })()}
        </nav>

        {/* Right: Contact link & stark white pill button with sheen */}
        <div className="hidden lg:flex items-center gap-6 z-20">
          <Link
            to="/contacto"
            className={`text-[11px] uppercase tracking-[0.16em] font-medium transition-colors ${
              location.pathname === '/contacto'
                ? 'text-white font-semibold'
                : 'text-white/70 hover:text-white'
            }`}
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
            className="p-2.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 text-white active:scale-95 transition-all"
            aria-label="Menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer with Silky Framer Motion Entrance */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden mt-3 p-6 rounded-3xl antigravity-card border border-white/15 space-y-4 shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-light text-white/70 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                Inicio
              </NavLink>
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-light text-white/70 hover:text-white hover:bg-white/[0.06] transition-all"
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-light text-white/70 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                Contacto
              </NavLink>
            </div>

            <div className="pt-3 border-t border-white/[0.08]">
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
