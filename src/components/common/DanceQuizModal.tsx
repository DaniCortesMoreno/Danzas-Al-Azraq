import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Flame, 
  Heart, 
  Smile, 
  Award,
  Calendar,
  User,
  RotateCcw
} from 'lucide-react';
import { DISCIPLINES } from '../../data/mockData';

interface DanceQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrial: (discipline?: string) => void;
}

interface QuizState {
  goal: string;
  experience: string;
  schedule: string;
}

export const DanceQuizModal: React.FC<DanceQuizModalProps> = ({
  isOpen,
  onClose,
  onOpenTrial
}) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 'result'>(1);
  const [answers, setAnswers] = useState<QuizState>({
    goal: '',
    experience: '',
    schedule: ''
  });

  const resetQuiz = () => {
    setAnswers({ goal: '', experience: '', schedule: '' });
    setCurrentStep(1);
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetQuiz, 300);
  };

  // Step 1: Goals
  const goals = [
    {
      id: 'salud',
      icon: Heart,
      title: 'Salud, Espalda & Bienestar',
      subtitle: 'Aliviar dolores de espalda, tonificar el core, descomprimir columna y relajar la mente.',
      color: '#06B6D4'
    },
    {
      id: 'ritmo',
      icon: Flame,
      title: 'Pasión, Ritmo Social & Pareja',
      subtitle: 'Aprender a bailar en pareja, disfrutar de la música latina, soltar caderas y socializar.',
      color: '#D97706'
    },
    {
      id: 'oriental',
      icon: Sparkles,
      title: 'Expresión Artística & Raíz',
      subtitle: 'Ondulaciones árabes, fuerza flamenca, elegancia de velo y presencia escénica.',
      color: '#A855F7'
    },
    {
      id: 'contemporaneo',
      icon: Award,
      title: 'Rigor Técnico & Danza Contemporánea',
      subtitle: 'Técnica de conservatorio, elasticidad, líneas estéticas, saltos y trabajo de suelo.',
      color: '#14B8A6'
    },
    {
      id: 'peques',
      icon: Smile,
      title: 'Para mis Hijos / Peques (3 a 12 años)',
      subtitle: 'Desarrollo psicomotriz, diversión guiada, compañerismo y la magia del Teatro Calderón.',
      color: '#F97316'
    }
  ];

  // Step 2: Experience
  const experiences = [
    {
      id: 'cero',
      title: 'Empiezo desde cero absoluto',
      desc: 'Nunca he hecho danza o hace muchos años que no practico ejercicio. Busco paciencia y base sólida.'
    },
    {
      id: 'medio',
      title: 'Tengo algo de ritmo o base previa',
      desc: 'Bailo ocasionalmente o tengo buena coordinación y busco mejorar técnica y soltura.'
    },
    {
      id: 'avanzado',
      title: 'Busco nivel medio / avanzado o escenario',
      desc: 'Tengo experiencia consolidada y deseo montajes coreográficos de gala o formación rigurosa.'
    }
  ];

  // Step 3: Schedule
  const schedules = [
    {
      id: 'manana',
      title: 'Mañanas (08:15 a 13:00)',
      desc: 'Empezar el día con vitalidad, desentumecer articulaciones o antes de entrar a trabajar.'
    },
    {
      id: 'tarde',
      title: 'Tardes (16:00 a 21:30)',
      desc: 'Desconectar al salir de la jornada laboral o escolar con la mejor comunidad de Alcoy.'
    },
    {
      id: 'flexible',
      title: 'Flexible / Sábados',
      desc: 'Puedo adaptarme según la clase o me interesan talleres intensivos de fin de semana.'
    }
  ];

  // Smart matching algorithm
  const calculateResult = () => {
    const { goal, schedule } = answers;

    if (goal === 'peques') {
      return DISCIPLINES.find(d => d.id === 'pre-danza') || DISCIPLINES[0];
    }

    if (goal === 'salud') {
      if (schedule === 'manana') {
        return DISCIPLINES.find(d => d.id === 'air-pilates') || DISCIPLINES[0];
      }
      return DISCIPLINES.find(d => d.id === 'pilates-mat') || DISCIPLINES[0];
    }

    if (goal === 'ritmo') {
      return DISCIPLINES.find(d => d.id === 'bailes-latinos') || DISCIPLINES[0];
    }

    if (goal === 'oriental') {
      return DISCIPLINES.find(d => d.id === 'danza-oriental') || DISCIPLINES.find(d => d.id === 'flamenco-oriental') || DISCIPLINES[0];
    }

    if (goal === 'contemporaneo') {
      return DISCIPLINES.find(d => d.id === 'danza-contemporanea') || DISCIPLINES[0];
    }

    return DISCIPLINES[0];
  };

  const matchedDiscipline = calculateResult();

  const handleSelectGoal = (id: string) => {
    setAnswers(prev => ({ ...prev, goal: id }));
    setCurrentStep(2);
  };

  const handleSelectExperience = (id: string) => {
    setAnswers(prev => ({ ...prev, experience: id }));
    setCurrentStep(3);
  };

  const handleSelectSchedule = (id: string) => {
    setAnswers(prev => ({ ...prev, schedule: id }));
    setCurrentStep('result');
  };

  const handleBookMatched = () => {
    handleClose();
    onOpenTrial(matchedDiscipline.title);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            data-lenis-prevent
            className="relative w-full max-w-2xl rounded-3xl bg-[#0a0a0c] border border-white/15 p-6 sm:p-9 max-h-[92vh] overflow-y-auto shadow-[0_35px_100px_rgba(0,0,0,0.95)] text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Celestial Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-white/[0.04] blur-3xl pointer-events-none rounded-full" />

            {/* Top Bar: Progress and Close */}
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-white/10 text-white">
                  <Sparkles className="w-4 h-4 text-amber-200" />
                </span>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50 block">
                    Orientador Al-Azraq
                  </span>
                  <span className="text-xs font-semibold text-white">
                    {currentStep === 'result' ? 'Tu Resultado Personalizado' : `Paso 0${currentStep} de 03`}
                  </span>
                </div>
              </div>

              {/* Step indicator pills */}
              {currentStep !== 'result' && (
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3].map((stepNum) => (
                    <div
                      key={stepNum}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentStep === stepNum
                          ? 'w-6 bg-white'
                          : currentStep > stepNum
                          ? 'w-2 bg-white/50'
                          : 'w-2 bg-white/15'
                      }`}
                    />
                  ))}
                </div>
              )}

              <button
                onClick={handleClose}
                className="p-2 rounded-full bg-white/[0.04] border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                aria-label="Cerrar test"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Step 1: Goal */}
            {currentStep === 1 && (
              <div className="pt-6 space-y-6 animate-in fade-in duration-300">
                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-sans font-extralight text-white">
                    ¿Qué buscas <span className="font-normal text-white">conseguir o experimentar</span>?
                  </h3>
                  <p className="text-xs text-white/50 font-light">
                    Selecciona tu motivación principal para que adaptemos la recomendación a tu objetivo real.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {goals.map((g) => {
                    const Icon = g.icon;
                    return (
                      <button
                        key={g.id}
                        onClick={() => handleSelectGoal(g.id)}
                        className="w-full p-4 rounded-2xl bg-white/[0.015] hover:bg-white/[0.05] border border-white/[0.08] hover:border-white/25 transition-all text-left flex items-start gap-4 group cursor-pointer"
                      >
                        <div 
                          className="p-3 rounded-xl shrink-0 mt-0.5"
                          style={{ backgroundColor: `${g.color}20`, color: g.color }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm text-white group-hover:text-white transition-colors">
                            {g.title}
                          </h4>
                          <p className="text-xs text-white/50 font-light mt-0.5 leading-relaxed">
                            {g.subtitle}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0 mt-3" />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Experience */}
            {currentStep === 2 && (
              <div className="pt-6 space-y-6 animate-in fade-in duration-300">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="text-xs text-white/50 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Volver
                    </button>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-sans font-extralight text-white">
                    ¿Cuál es tu <span className="font-normal text-white">experiencia previa</span>?
                  </h3>
                  <p className="text-xs text-white/50 font-light">
                    No te preocupes por tu nivel: en Al-Azraq todos los niveles tienen su espacio pedagógico.
                  </p>
                </div>

                <div className="space-y-3">
                  {experiences.map((exp) => (
                    <button
                      key={exp.id}
                      onClick={() => handleSelectExperience(exp.id)}
                      className="w-full p-5 rounded-2xl bg-white/[0.015] hover:bg-white/[0.05] border border-white/[0.08] hover:border-white/25 transition-all text-left flex items-center justify-between gap-4 group cursor-pointer"
                    >
                      <div>
                        <h4 className="font-medium text-sm text-white">{exp.title}</h4>
                        <p className="text-xs text-white/50 font-light mt-1">{exp.desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Schedule */}
            {currentStep === 3 && (
              <div className="pt-6 space-y-6 animate-in fade-in duration-300">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="text-xs text-white/50 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Volver
                    </button>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-sans font-extralight text-white">
                    ¿Qué <span className="font-normal text-white">horario te viene mejor</span>?
                  </h3>
                  <p className="text-xs text-white/50 font-light">
                    Contamos con cuadrantes de mañana desde las 8:15 y tardes hasta las 21:30.
                  </p>
                </div>

                <div className="space-y-3">
                  {schedules.map((sch) => (
                    <button
                      key={sch.id}
                      onClick={() => handleSelectSchedule(sch.id)}
                      className="w-full p-5 rounded-2xl bg-white/[0.015] hover:bg-white/[0.05] border border-white/[0.08] hover:border-white/25 transition-all text-left flex items-center justify-between gap-4 group cursor-pointer"
                    >
                      <div>
                        <h4 className="font-medium text-sm text-white">{sch.title}</h4>
                        <p className="text-xs text-white/50 font-light mt-1">{sch.desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step Result: Personalized Match */}
            {currentStep === 'result' && (
              <div className="pt-6 space-y-6 animate-in fade-in duration-300">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-mono uppercase tracking-wider">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>98% Compatibilidad encontrada</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-sans font-extralight text-white">
                    Tu disciplina ideal es: <br />
                    <span className="font-normal text-white">{matchedDiscipline.title}</span>
                  </h3>
                </div>

                {/* Match Card */}
                <div className="rounded-2xl border border-white/15 overflow-hidden bg-white/[0.02]">
                  <div className="grid grid-cols-1 sm:grid-cols-12">
                    <div className="sm:col-span-5 h-48 sm:h-auto relative">
                      <img
                        src={matchedDiscipline.image}
                        alt={matchedDiscipline.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent sm:hidden" />
                      {matchedDiscipline.popularBadge && (
                        <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/70 border border-white/20 text-[10px] font-mono text-white">
                          {matchedDiscipline.popularBadge}
                        </span>
                      )}
                    </div>
                    <div className="sm:col-span-7 p-6 space-y-4">
                      <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                        {matchedDiscipline.shortDesc}
                      </p>

                      <div className="space-y-1.5 text-xs text-white/50 border-t border-white/[0.06] pt-3">
                        <div className="flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-white/30" />
                          <span><strong className="text-white font-medium">Profesor/a:</strong> {matchedDiscipline.instructorName}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-white/30" />
                          <span><strong className="text-white font-medium">Horarios:</strong> {matchedDiscipline.scheduleSummary}</span>
                        </div>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                        <button
                          onClick={handleBookMatched}
                          className="btn-pill-white w-full py-3 text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
                        >
                          <span>Reservar clase gratis</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reset test button */}
                <div className="flex justify-center pt-2">
                  <button
                    onClick={resetQuiz}
                    className="text-xs text-white/40 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Repetir cuestionario</span>
                  </button>
                </div>
              </div>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
