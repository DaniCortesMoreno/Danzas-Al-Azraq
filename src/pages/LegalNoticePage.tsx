import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

export const LegalNoticePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28">
      <div className="rounded-3xl glass-panel p-8 sm:p-14 space-y-6 border border-white/15">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF8A65] hover:text-white transition-colors mb-2">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-[#F5E6CA]">
          <Shield className="w-3.5 h-3.5 text-[#F4A261]" />
          <span>Información Legal</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black font-display text-white">
          Aviso Legal
        </h1>

        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-[#CBD5E1] space-y-1.5">
          <p><strong className="text-white">Titular:</strong> Danzas Al-Azraq (Ana Francés)</p>
          <p><strong className="text-white">Domicilio:</strong> Carrer Oliver, 24, 03802 Alcoy (Alicante, España)</p>
          <p><strong className="text-white">Contacto:</strong> info@danzasalazraq.es | Teléfono: +34 965 54 82 10</p>
        </div>

        <div className="space-y-4 text-sm text-[#A1A8B8] leading-relaxed">
          <p>
            El presente espacio web tiene por objeto facilitar a los usuarios y público en general el conocimiento de las actividades y servicios formativos prestados por la academia de danza Danzas Al-Azraq en la ciudad de Alcoy.
          </p>
          <p className="p-4 rounded-xl bg-white/[0.02] border-l-2 border-[#FF5E36] text-xs text-[#CBD5E1] italic">
            Nota: Este documento constituye la base legal y estructura de navegación del sitio web oficial. Los términos y condiciones detallados están en proceso de actualización formal para la temporada 2026/2027.
          </p>
        </div>
      </div>
    </div>
  );
};
