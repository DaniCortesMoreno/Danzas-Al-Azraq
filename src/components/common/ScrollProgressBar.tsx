import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[9999] pointer-events-none bg-transparent">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-white/30 via-white to-amber-200 shadow-[0_0_12px_rgba(255,255,255,0.7)]"
        style={{ scaleX }}
      />
    </div>
  );
};
