import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { ACADEMY_INFO } from '../../data/mockData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="relative bg-[#000000] text-white border-t border-white/[0.08] mt-32 overflow-hidden">
      {/* Floating Kinetic Stream Bar */}
      <div className="relative py-4 border-b border-white/[0.06] overflow-hidden bg-black/40">
        <div className="animate-kinetic-ticker whitespace-nowrap text-[11px] sm:text-xs font-light uppercase tracking-[0.3em] text-white/50 flex items-center gap-10">
          <span>DANZA CLÁSICA • BALLET INFANTIL • AIR PILATES • HATHA YOGA • RITMOS LATINOS • SALSA & BACHATA • HIP HOP & URBAN • DANZA ORIENTAL • TEATRO CALDERÓN • ALCOY •</span>
          <span>DANZA CLÁSICA • BALLET INFANTIL • AIR PILATES • HATHA YOGA • RITMOS LATINOS • SALSA & BACHATA • HIP HOP & URBAN • DANZA ORIENTAL • TEATRO CALDERÓN • ALCOY •</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-16">
          
          {/* Column 1: Manifesto & Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <img 
                src="/logo-white.png" 
                alt="Danzas Al-Azraq" 
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
            
            <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed">
              Más de 15 años inspirando el arte del movimiento, la salud integral y la disciplina artística en el corazón de Alcoy. Formación desde los 3 años hasta adultos.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-light text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>Sede oficial en Alcoy (Alicante)</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-5">
            <h4 className="font-sans font-medium text-xs uppercase tracking-[0.2em] text-white/40">
              Navegación
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-light">
              {[
                { name: 'Disciplinas y Cursos', path: '/disciplinas' },
                { name: 'Nuestra Escuela & Equipo', path: '/escuela' },
                { name: 'Horarios Semanales', path: '/horarios' },
                { name: 'Gala Danzas Al-Azraq', path: '/gala' },
                { name: 'Galería de Momentos', path: '/galeria' },
                { name: 'Contacto & Inscripción', path: '/contacto' },
              ].map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path} 
                    className="text-white/60 hover:text-white flex items-center justify-between group transition-colors duration-200"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-white/[0.06]">
              <span className="text-[10px] uppercase font-mono tracking-widest text-white/30 block mb-2">
                Legal
              </span>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/40 font-light">
                <Link to="/aviso-legal" className="hover:text-white transition-colors">
                  Aviso Legal
                </Link>
                <Link to="/politica-privacidad" className="hover:text-white transition-colors">
                  Privacidad
                </Link>
                <Link to="/politica-cookies" className="hover:text-white transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="space-y-5">
            <h4 className="font-sans font-medium text-xs uppercase tracking-[0.2em] text-white/40">
              Sede en Alcoy
            </h4>
            <div className="space-y-4 text-xs sm:text-sm font-light text-white/60">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{ACADEMY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/40 shrink-0" />
                <a href={`tel:${ACADEMY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {ACADEMY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/40 shrink-0" />
                <a href={`mailto:${ACADEMY_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {ACADEMY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                <span className="text-xs text-white/50 leading-relaxed">{ACADEMY_INFO.hours}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contacto"
                className="btn-ghost-minimal w-full py-2.5 px-4 text-xs uppercase tracking-wider justify-center border border-white/10"
              >
                Ver plano de ubicación
              </Link>
            </div>
          </div>

          {/* Column 4: Newsletter & Community */}
          <div className="space-y-5">
            <h4 className="font-sans font-medium text-xs uppercase tracking-[0.2em] text-white/40">
              Comunidad
            </h4>
            <p className="text-xs text-white/50 font-light leading-relaxed">
              Recibe avisos exclusivos sobre nuevas plazas, venta de butacas para la Gala del Teatro Calderón y masterclasses.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/15 text-xs text-white/80 font-light">
                ✓ Te has suscrito correctamente.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Tu correo electrónico"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-full bg-white/[0.03] border border-white/10 text-xs text-white placeholder-white/30 focus:outline-hidden focus:border-white/40 transition-all font-light"
                  />
                  <button
                    type="submit"
                    aria-label="Suscribirse al boletín"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-full bg-white text-black text-xs font-medium flex items-center justify-center hover:bg-white/90 transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-white/30 block mb-2.5">
                Redes Oficiales
              </span>
              <div className="flex gap-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <div className="flex-1 flex items-center justify-center px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono text-white/60">
                  {ACADEMY_INFO.instagram}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-white/40">
          <p>© {new Date().getFullYear()} Danzas Al-Azraq Alcoy. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Danza & Consciencia Corporal</span>
            <span>•</span>
            <span>Alcoy (Alicante)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
