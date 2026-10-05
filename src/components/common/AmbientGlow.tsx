import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const AmbientGlow: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 28, stiffness: 180, mass: 0.6 };
  const cursorX = useSpring(-500, springConfig);
  const cursorY = useSpring(-500, springConfig);

  useEffect(() => {
    // Only enable on devices that have a hover-capable fine pointer (mouse/trackpad)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;

    let hasMoved = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!hasMoved) {
        hasMoved = true;
        setIsVisible(true);
      }
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      if (hasMoved) setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-30 transition-opacity duration-700 ease-out"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Primary soft diffused celestial core */}
      <div className="w-[520px] h-[520px] rounded-full bg-radial from-white/[0.045] via-white/[0.015] to-transparent blur-3xl pointer-events-none transform-gpu" />
      {/* Micro specular highlight point */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-radial from-white/[0.06] to-transparent blur-xl pointer-events-none transform-gpu" />
    </motion.div>
  );
};
