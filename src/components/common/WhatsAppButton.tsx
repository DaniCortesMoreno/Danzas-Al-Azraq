import React from 'react';
import { MessageCircle } from 'lucide-react';
import { ACADEMY_INFO } from '../../data/mockData';

export const WhatsAppButton: React.FC = () => {
  const cleanPhone = ACADEMY_INFO.whatsapp.replace(/[^0-9]/g, '');
  const defaultMessage = encodeURIComponent(
    '¡Hola Danzas Al-Azraq! Me gustaría consultar información sobre clases y horarios en la escuela.'
  );
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${defaultMessage}`;

  return (
    <aside aria-label="Contacto directo por WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 font-sans font-bold text-xs uppercase tracking-wider"
        aria-label="Contactar por WhatsApp con Danzas Al-Azraq"
      >
        {/* Pulsing ambient aura ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 blur-md group-hover:opacity-60 transition-opacity animate-pulse" />
        
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-white stroke-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
        </div>
        <span className="relative hidden sm:inline font-bold">WhatsApp Al-Azraq</span>
        <span className="relative sm:hidden font-bold">WhatsApp</span>
      </a>
    </aside>
  );
};
