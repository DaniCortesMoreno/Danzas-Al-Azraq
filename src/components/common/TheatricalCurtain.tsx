import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface TheatricalCurtainProps {
  /** Title shown on the central stage emblem before opening */
  title?: string;
  /** Subtitle / date / badge */
  subtitle?: string;
  /** Whether the curtain opens automatically upon mounting */
  autoStart?: boolean;
  /** Delay in milliseconds before curtain starts opening */
  delayMs?: number;
  /** Called when opening animation completes */
  onComplete?: () => void;
  /** If provided, allows parent component to trigger open/close */
  isOpen?: boolean;
  /** Mode: 'fullscreen' fixed to viewport, or 'hero' contained within hero */
  mode?: 'fullscreen' | 'hero';
}

export const TheatricalCurtain: React.FC<TheatricalCurtainProps> = ({
  title = 'DANZAS AL-AZRAQ',
  subtitle = 'TEATRO CALDERÓN DE ALCOY',
  autoStart = true,
  delayMs = 450,
  onComplete,
  isOpen: controlledIsOpen,
  mode = 'fullscreen'
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const isCurtainOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalOpen;

  useEffect(() => {
    if (autoStart) {
      const timer = setTimeout(() => {
        setInternalOpen(true);
      }, delayMs);
      return () => clearTimeout(timer);
    }
  }, [autoStart, delayMs]);

  // Once curtains have slid completely away, mark finished so it does not intercept pointer events
  useEffect(() => {
    if (isCurtainOpen) {
      const finishTimer = setTimeout(() => {
        setHasFinished(true);
        if (onComplete) onComplete();
      }, 1900);
      return () => clearTimeout(finishTimer);
    } else {
      setHasFinished(false);
    }
  }, [isCurtainOpen, onComplete]);

  if (hasFinished && isCurtainOpen) {
    return null;
  }

  const containerClasses = mode === 'fullscreen'
    ? 'fixed inset-0 z-[9998] pointer-events-none select-none overflow-hidden'
    : 'absolute inset-0 z-30 pointer-events-none select-none overflow-hidden';

  // Smooth theatrical easing curve (feels like heavy velvet parting)
  const curtainTransition = {
    duration: 1.5,
    ease: [0.76, 0, 0.24, 1] as const,
  };

  return (
    <div className={containerClasses} aria-hidden="true">
      {/* 1. Left Curtain Panel with gathering pleats */}
      <motion.div
        initial={{ x: '0%', scaleX: 1 }}
        animate={{ 
          x: isCurtainOpen ? '-101%' : '0%',
          scaleX: isCurtainOpen ? 0.85 : 1
        }}
        transition={curtainTransition}
        className="absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden z-10 origin-left"
        style={{
          background: 'linear-gradient(135deg, #050507 0%, #160c14 35%, #0b090e 70%, #040406 100%)',
          boxShadow: 'inset -35px 0 70px rgba(0,0,0,0.95), 15px 0 40px rgba(0,0,0,0.9)'
        }}
      >
        {/* Antique Pleats / Folds Simulation */}
        <div 
          className="absolute inset-0 opacity-45 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.07) 0px,
              rgba(0, 0, 0, 0.8) 22px,
              rgba(212, 175, 55, 0.06) 44px,
              rgba(0, 0, 0, 0.95) 66px,
              rgba(255, 255, 255, 0.04) 88px
            )`
          }}
        />

        {/* Ambient velvet vertical highlights */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-transparent to-black/65" />

        {/* Golden Selvedge Trim along the parting edge */}
        <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-[#d4af37]/75 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
      </motion.div>

      {/* 2. Right Curtain Panel with gathering pleats */}
      <motion.div
        initial={{ x: '0%', scaleX: 1 }}
        animate={{ 
          x: isCurtainOpen ? '101%' : '0%',
          scaleX: isCurtainOpen ? 0.85 : 1
        }}
        transition={curtainTransition}
        className="absolute top-0 bottom-0 right-0 w-1/2 overflow-hidden z-10 origin-right"
        style={{
          background: 'linear-gradient(225deg, #050507 0%, #160c14 35%, #0b090e 70%, #040406 100%)',
          boxShadow: 'inset 35px 0 70px rgba(0,0,0,0.95), -15px 0 40px rgba(0,0,0,0.9)'
        }}
      >
        {/* Antique Pleats / Folds Simulation */}
        <div 
          className="absolute inset-0 opacity-45 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -90deg,
              rgba(255, 255, 255, 0.07) 0px,
              rgba(0, 0, 0, 0.8) 22px,
              rgba(212, 175, 55, 0.06) 44px,
              rgba(0, 0, 0, 0.95) 66px,
              rgba(255, 255, 255, 0.04) 88px
            )`
          }}
        />

        {/* Ambient velvet vertical highlights */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-transparent to-black/65" />

        {/* Golden Selvedge Trim along the parting edge */}
        <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-[#d4af37]/75 to-transparent shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
      </motion.div>

      {/* 3. Top Theatrical Lambrequin / Bambalina Valance */}
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: isCurtainOpen ? '-100%' : 0,
          opacity: isCurtainOpen ? 0 : 1
        }}
        transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 right-0 h-16 sm:h-24 z-20 overflow-hidden pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, #050507 0%, #170d15 65%, rgba(10,9,13,0.96) 100%)',
          boxShadow: '0 18px 40px rgba(0,0,0,0.95)'
        }}
      >
        {/* Scalloped edge decorative gold border */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent shadow-[0_0_12px_rgba(212,175,55,0.5)]" />
        
        {/* Soft draped velvet shadow bands */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.08) 0px,
              transparent 30px,
              rgba(0, 0, 0, 0.8) 60px
            )`
          }}
        />
      </motion.div>

      {/* 4. Central Stage Emblem & Stage Light PARTING Cue */}
      <AnimatePresence>
        {!isCurtainOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none p-4 text-center"
          >
            {/* Ambient golden halo */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#d4af37]/15 blur-3xl pointer-events-none -z-10 animate-pulse" />

            <div className="space-y-3 max-w-md mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#d4af37]/35 text-[#d4af37] text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>{subtitle}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-sans font-light tracking-wide text-white uppercase drop-shadow-2xl">
                {title}
              </h2>

              <p className="text-[11px] font-mono tracking-[0.3em] uppercase text-white/50">
                Apertura de Telón
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. Center Split Warm Glow when Parting */}
      {isCurtainOpen && (
        <motion.div
          initial={{ opacity: 1, scaleX: 1 }}
          animate={{ opacity: 0, scaleX: 2.5 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="absolute inset-0 z-15 pointer-events-none flex items-center justify-center"
        >
          <div className="w-40 h-full bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent blur-2xl" />
        </motion.div>
      )}
    </div>
  );
};
