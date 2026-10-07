import React, { useEffect, useRef, createContext, useContext } from 'react';
import { ReactLenis, useLenis, type LenisRef } from 'lenis/react';
import { useLocation } from 'react-router-dom';
import type Lenis from 'lenis';

interface LenisScrollContextType {
  lenis: Lenis | undefined;
  scrollTo: (target: number | string | HTMLElement, options?: { offset?: number; immediate?: boolean; duration?: number }) => void;
  pause: () => void;
  resume: () => void;
}

const LenisScrollContext = createContext<LenisScrollContextType>({
  lenis: undefined,
  scrollTo: () => {},
  pause: () => {},
  resume: () => {},
});

export const useSmoothScroll = () => useContext(LenisScrollContext);

interface SmoothScrollProps {
  children: React.ReactNode;
  isModalOpen?: boolean;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children, isModalOpen = false }) => {
  const lenisRef = useRef<LenisRef>(null);
  const location = useLocation();
  const lenis = useLenis();

  // Scroll to top immediately on route change unless a hash anchor is provided
  useEffect(() => {
    const activeLenis = lenisRef.current?.lenis || lenis;

    if (location.hash) {
      const hashTimer = setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          if (activeLenis) {
            activeLenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.2 });
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 150);
      return () => clearTimeout(hashTimer);
    }

    if (activeLenis) {
      activeLenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash, lenis]);

  // Pause scrolling while modal is open, resume when closed
  useEffect(() => {
    const activeLenis = lenisRef.current?.lenis || lenis;
    if (!activeLenis) return;

    if (isModalOpen) {
      activeLenis.stop();
      document.body.style.overflow = 'hidden';
    } else {
      activeLenis.start();
      document.body.style.overflow = '';
    }

    return () => {
      activeLenis.start();
      document.body.style.overflow = '';
    };
  }, [isModalOpen, lenis]);

  // Intercept anchor link clicks (e.g., href="#seccion") for ultra-smooth easing
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          const activeLenis = lenisRef.current?.lenis || lenis;
          if (activeLenis) {
            activeLenis.scrollTo(el as HTMLElement, { offset: -80, duration: 1.3 });
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [lenis]);

  const contextValue: LenisScrollContextType = {
    lenis: lenisRef.current?.lenis || lenis,
    scrollTo: (target, options) => {
      const activeLenis = lenisRef.current?.lenis || lenis;
      if (activeLenis) {
        activeLenis.scrollTo(target, options);
      } else if (typeof target === 'string') {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else if (typeof target === 'number') {
        window.scrollTo({ top: target, behavior: 'smooth' });
      } else if (target instanceof HTMLElement) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    },
    pause: () => {
      (lenisRef.current?.lenis || lenis)?.stop();
    },
    resume: () => {
      (lenisRef.current?.lenis || lenis)?.start();
    }
  };

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.085,
        duration: 1.15,
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.25,
        infinite: false,
      }}
    >
      <LenisScrollContext.Provider value={contextValue}>
        {children}
      </LenisScrollContext.Provider>
    </ReactLenis>
  );
};
