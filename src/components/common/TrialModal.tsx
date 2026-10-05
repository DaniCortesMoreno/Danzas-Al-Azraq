import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { DISCIPLINES } from '../../data/mockData';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDiscipline?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  preselectedDiscipline
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [target, setTarget] = useState<'myself' | 'child' | 'other'>('myself');
  const [discipline, setDiscipline] = useState(preselectedDiscipline || DISCIPLINES[0].title);
  const [shift, setShift] = useState('tarde');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffffff', '#cccccc', '#888888']
      });
    } catch {
      // Confetti fallback
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            data-lenis-prevent
            className="relative w-full max-w-lg rounded-3xl bg-[#0a0a0c] border border-white/15 p-6 sm:p-8 max-h-[92vh] overflow-y-auto shadow-[0_35px_100px_rgba(0,0,0,0.95)] text-white"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Subtle Ethereal Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-white/[0.04] blur-3xl pointer-events-none rounded-full" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.04] border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-5 animate-in fade-in duration-300">
            <div className="inline-flex p-4 rounded-full bg-white/[0.06] border border-white/15 text-white shadow-lg">
              <CheckCircle className="w-10 h-10 stroke-[1.5]" />
            </div>
            
            <div className="inline-block px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-mono text-white/80 uppercase tracking-wider">
              ¡Solicitud Recibida!
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-sans font-extralight text-white">
              ¡Te esperamos en <span className="font-normal text-white">Al-Azraq</span>!
            </h3>
            
            <p className="text-xs sm:text-sm text-white/60 max-w-sm mx-auto leading-relaxed font-light">
              Muchas gracias, <strong className="text-white font-medium">{name}</strong>. Nos pondremos en contacto contigo por WhatsApp o llamada para confirmar el día y hora exactos de tu clase de prueba gratuita de <strong className="text-white font-medium">{discipline}</strong>.
            </p>
            
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-left text-xs space-y-1.5 text-white/50 font-light">
              <p>📍 <strong className="text-white font-medium">Sede:</strong> Carrer Oliver, 24, Alcoy</p>
              <p>⏰ <strong className="text-white font-medium">Preferencia:</strong> {shift === 'manana' ? 'Mañanas (8:15 a 13:00)' : 'Tardes (16:00 a 21:30)'}</p>
              <p>🎒 <strong className="text-white font-medium">Recordatorio:</strong> Ropa cómoda y botella de agua.</p>
            </div>
            
            <button
              onClick={handleReset}
              className="btn-pill-white w-full py-3.5 text-xs uppercase tracking-wider font-medium"
            >
              Entendido, volver a la web
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-white/80 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-white/60" />
                100% Gratuito
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.05] text-[10px] font-mono text-white/50">
                Sin compromiso
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-sans font-extralight text-white leading-tight">
              Reserva tu clase <span className="font-normal text-white">de prueba</span>
            </h3>
            <p className="text-xs text-white/50 mt-1 mb-6 font-light">
              Ven a conocer nuestras salas en Alcoy y siente la metodología de nuestros profesores en persona.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-1.5">
                  ¿Para quién es la clase?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { key: 'myself', label: 'Para mí' },
                    { key: 'child', label: 'Mi hijo/a' },
                    { key: 'other', label: 'En pareja' }
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.key}
                      onClick={() => setTarget(item.key as 'myself' | 'child' | 'other')}
                      className={`py-2 px-1 text-xs font-medium rounded-full border transition-all ${
                        target === item.key
                          ? 'bg-white text-black border-transparent shadow-sm'
                          : 'bg-white/[0.02] text-white/50 border-white/[0.08] hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre o el de tu hijo/a"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-hidden focus:border-white/30 transition-all font-light"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-1">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="600 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-hidden focus:border-white/30 transition-all font-light"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ejemplo@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-hidden focus:border-white/30 transition-all font-light"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-1">
                    Disciplina de interés *
                  </label>
                  <select
                    value={discipline}
                    onChange={(e) => setDiscipline(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-black border border-white/10 text-xs sm:text-sm text-white focus:outline-hidden focus:border-white/30 transition-all"
                  >
                    {DISCIPLINES.map((d) => (
                      <option key={d.id} value={d.title} className="bg-black">
                        {d.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-1">
                    Franja preferida *
                  </label>
                  <select
                    value={shift}
                    onChange={(e) => setShift(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-black border border-white/10 text-xs sm:text-sm text-white focus:outline-hidden focus:border-white/30 transition-all"
                  >
                    <option value="tarde" className="bg-black">Tardes (16:00 - 21:30)</option>
                    <option value="manana" className="bg-black">Mañanas (08:15 - 13:00)</option>
                    <option value="sabado" className="bg-black">Sábados Mañana</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50 mb-1">
                  Comentarios o dudas (opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="¿Alguna experiencia previa o lesión que debamos conocer?"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-white/[0.02] border border-white/10 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-hidden focus:border-white/30 transition-all font-light"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-pill-white w-full py-3.5 text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2"
                >
                  <span>Confirmar mi Reserva Gratis</span>
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </button>
                <p className="text-[10px] text-white/30 text-center mt-2.5 font-light">
                  Tus datos están protegidos y solo se emplearán para coordinar tu clase de prueba.
                </p>
              </div>
            </form>
          </div>
        )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
