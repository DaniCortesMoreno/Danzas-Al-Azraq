import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Clock, Download, ExternalLink, Sparkles } from 'lucide-react';
import { 
  type ClassActionPayload, 
  getGoogleCalendarUrl, 
  downloadIcsCalendar 
} from '../../utils/scheduleActions';

interface AddToCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  classData: ClassActionPayload | null;
}

export const AddToCalendarModal: React.FC<AddToCalendarModalProps> = ({
  isOpen,
  onClose,
  classData
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !classData) return null;

  const handleGoogleCalendar = () => {
    const url = getGoogleCalendarUrl(classData);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleAppleIcs = () => {
    downloadIcsCalendar(classData);
    onClose();
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          data-lenis-prevent
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.94, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.94, y: 10 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-3xl bg-[#0c0c0e] border border-white/15 p-6 sm:p-7 shadow-[0_25px_70px_rgba(0,0,0,0.9)] text-white space-y-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-sans font-light text-base text-white">
                    Añadir a mi Calendario
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                    Sincronización en 1 clic
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Class Details Card */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-white/60 block">
                {classData.day}
              </span>
              <h4 className="text-lg font-sans font-medium text-white">
                {classData.name}
              </h4>
              <div className="space-y-1.5 text-xs text-white/60 font-light pt-1">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-white/40 shrink-0" />
                  <span>{classData.time} (Semanal)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span className="text-white/80 font-medium">Carrer Oliver, 24 · Alcoy</span>
                </div>
                {classData.instructor && (
                  <div className="flex items-center gap-2 text-[11px] text-white/50">
                    <Sparkles className="w-3 h-3 text-white/30 shrink-0" />
                    <span>Profesor/a: {classData.instructor}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Calendar Provider Options */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 block">
                Elige tu aplicación preferida:
              </span>

              {/* Google Calendar */}
              <button
                onClick={handleGoogleCalendar}
                className="w-full p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/30 text-white flex items-center justify-between transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white text-black flex items-center justify-center font-bold text-xs shadow-sm">
                    G
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-medium text-white group-hover:text-white">
                      Google Calendar
                    </p>
                    <p className="text-[10px] text-white/40">
                      Abre directamente en web o Android
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              </button>

              {/* Apple iCal / iPhone / Mac / Outlook */}
              <button
                onClick={handleAppleIcs}
                className="w-full p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/15 hover:border-white/30 text-white flex items-center justify-between transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-black border border-white/20 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    🍏
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-medium text-white group-hover:text-white">
                      Apple iCal / iPhone & Mac (.ics)
                    </p>
                    <p className="text-[10px] text-white/40">
                      Descarga evento con recordatorio para iOS / Mac / Outlook
                    </p>
                  </div>
                </div>
                <Download className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              </button>
            </div>

            {/* Footer Note */}
            <p className="text-[10px] text-center text-white/35 font-light">
              La dirección de Carrer Oliver, 24 y el horario semanal se configuran automáticamente con aviso 1h antes.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
