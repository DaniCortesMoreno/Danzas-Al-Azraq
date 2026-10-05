import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28">
      <div className="rounded-3xl glass-panel p-8 sm:p-14 space-y-6 border border-white/15">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF8A65] hover:text-white transition-colors mb-2">
          <ArrowLeft className="w-4 h-4" /> Volver al inicio
        </Link>
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold text-[#86EFAC]">
          <Lock className="w-3.5 h-3.5 text-[#22C55E]" />
          <span>Protección de Datos</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black font-display text-white">
          Política de Privacidad
        </h1>

        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-[#CBD5E1] space-y-1.5">
          <p><strong className="text-white">Responsable del tratamiento:</strong> Danzas Al-Azraq</p>
          <p><strong className="text-white">Finalidad:</strong> Gestión de consultas de clases de prueba, inscripciones y comunicación con alumnos y familias.</p>
          <p><strong className="text-white">Legitimación:</strong> Consentimiento explícito del interesado.</p>
        </div>

        <div className="space-y-4 text-sm text-[#A1A8B8] leading-relaxed">
          <p>
            De conformidad con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), le informamos de que los datos personales facilitados a través de nuestros formularios web serán tratados con confidencialidad y empleados exclusivamente para responder a sus solicitudes informativas.
          </p>
          <p className="p-4 rounded-xl bg-white/[0.02] border-l-2 border-[#FF5E36] text-xs text-[#CBD5E1] italic">
            Nota: Cláusulas y tratamientos específicos adaptados a la normativa vigente. La generación completa de textos jurídicos se ampliará en la siguiente fase de desarrollo.
          </p>
        </div>
      </div>
    </div>
  );
};
