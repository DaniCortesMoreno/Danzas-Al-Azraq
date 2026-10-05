import React from 'react';
import { Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

interface DanceQuizBannerProps {
  onOpenQuiz: () => void;
  className?: string;
}

export const DanceQuizBanner: React.FC<DanceQuizBannerProps> = ({ onOpenQuiz, className = '' }) => {
  return (
    <div className={`relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-transparent hairline-border backdrop-blur-xl ${className}`}>
      {/* Glow orb */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.03] blur-3xl pointer-events-none rounded-full" />
      
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] text-white/70">
            <Sparkles className="w-3 h-3 text-amber-200" />
            <span>Test Rápido en 3 Pasos</span>
          </div>
          
          <h3 className="text-2xl sm:text-4xl font-sans font-extralight text-white leading-tight">
            ¿No sabes por qué disciplina empezar? <br className="hidden sm:inline" />
            <span className="font-normal text-white">Encuentra tu Danza</span>
          </h3>
          
          <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
            Responde 3 preguntas sencillas sobre tu objetivo, nivel y horario ideal. Te recomendamos tu clase perfecta y te reservamos plaza en 1 clic.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1 text-[11px] text-white/50 font-mono">
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> 1 minuto</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> 100% Gratuito</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Sin compromiso</span>
          </div>
        </div>

        <button
          onClick={onOpenQuiz}
          className="btn-pill-white shrink-0 py-3.5 px-8 text-xs uppercase tracking-wider font-semibold flex items-center gap-2.5 shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <span>Hacer el test ahora</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
