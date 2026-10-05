import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie } from 'lucide-react';

export const CookiePolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28">
      <div className="rounded-3xl glass-panel p-8 sm:p-14 space-y-6 border border-white/15">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF8A65] hover:text-white transition-colors mb-2">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-[#E9D5FF]">
          <Cookie className="w-3.5 h-3.5 text-[#C084FC]" />
          <span>Cookies y Navegación</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black font-display text-white">
          Política de Cookies
        </h1>

        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-[#CBD5E1] space-y-1.5">
          <p><strong className="text-white">Uso de Cookies:</strong> Este sitio web utiliza cookies técnicas y analíticas necesarias para garantizar el correcto funcionamiento y la navegación fluida.</p>
        </div>

        <div className="space-y-4 text-sm text-[#A1A8B8] leading-relaxed">
          <p>
            Una cookie es un pequeño archivo que se almacena en el navegador del usuario al acceder a determinadas páginas web. En Danzas Al-Azraq priorizamos la privacidad de nuestros alumnos y visitantes, evitando rastreadores invasivos de terceros.
          </p>
          <p className="p-4 rounded-xl bg-white/[0.02] border-l-2 border-[#FF5E36] text-xs text-[#CBD5E1] italic">
            Nota: Este apartado sirve de estructura legal informativa. La configuración avanzada de panel de preferencias de cookies se integrará en el siguiente despliegue normativo.
          </p>
        </div>
      </div>
    </div>
  );
};
