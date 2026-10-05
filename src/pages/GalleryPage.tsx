import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Eye
} from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import type { GalleryItem } from '../types';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { key: 'todas', label: 'Todas las Fotos' },
    { key: 'galas', label: 'Galas & Escenario' },
    { key: 'ensayos', label: 'Ensayos en Aula' },
    { key: 'bienestar', label: 'Yoga & Bienestar' },
    { key: 'eventos', label: 'Eventos en Alcoy' }
  ];

  const filteredItems = selectedCategory === 'todas'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') {
        setActiveItem(null);
      } else if (e.key === 'ArrowRight') {
        navigateLightbox('next');
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, filteredItems]);

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === activeItem.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setActiveItem(filteredItems[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setActiveItem(filteredItems[prevIndex]);
    }
  };

  return (
    <div className="space-y-28 sm:space-y-40 pt-6 pb-24">
      
      {/* 1. Header with Colossal Typography & Watermark */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-10"
          aria-hidden="true"
        >
          <span 
            className="text-[15vw] font-sans font-extrabold uppercase tracking-tighter text-white/[0.025] leading-none"
            style={{ transform: 'translateY(-10%)' }}
          >
            GALERÍA
          </span>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
            ARCHIVO FOTOGRÁFICO
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extralight tracking-tight text-white">
            Memoria & <span className="font-normal text-white">Movimiento</span>
          </h1>

          <p className="text-xs sm:text-sm text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
            Instantes de esfuerzo entre espejos, la magia tras bambalinas del Teatro Calderón y la complicidad de nuestras clases en Alcoy.
          </p>
        </div>
      </section>

      {/* 2. Interactive Filter Capsule */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-12">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full glass-capsule border border-white/[0.08]">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === cat.key
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Organic Masonry Image Gallery with Mixed Aspect Ratios */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredItems.map((item, idx) => {
            // Mixed aspect ratios for authentic organic masonry rhythm
            const aspectClasses = [
              'h-96',         // tall portrait
              'h-64',         // classic landscape
              'h-80',         // medium tall
              'h-72',         // square-ish
              'h-[420px]',    // monumental vertical
              'h-60'          // panoramic strip
            ];
            const heightClass = aspectClasses[idx % aspectClasses.length];

            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="masonry-break group relative rounded-3xl overflow-hidden hairline-border bg-white/[0.015] hover:border-white/30 transition-all duration-500 cursor-pointer shadow-lg"
              >
                <div className={`relative ${heightClass} w-full overflow-hidden bg-black`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-white/90 text-[10px] font-mono backdrop-blur-md">
                      {item.categoryLabel}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-white/60 text-[10px] font-mono backdrop-blur-md">
                      {item.year}
                    </span>
                  </div>

                  {/* Hover Quick Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs">
                    <div className="px-4 py-2 rounded-full bg-white text-black text-xs font-medium uppercase tracking-wider flex items-center gap-1.5 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Ver imagen</span>
                    </div>
                  </div>

                  {/* Caption Bottom Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 space-y-1 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                    <h3 className="font-sans font-light text-sm sm:text-base text-white leading-snug group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/50 font-light line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-300">
          <button
            onClick={() => setActiveItem(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={() => navigateLightbox('prev')}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            aria-label="Anterior imagen"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => navigateLightbox('next')}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 max-h-[70vh] shadow-2xl">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="text-center space-y-1 text-white">
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/40">
                {activeItem.categoryLabel} · {activeItem.year}
              </span>
              <h3 className="font-sans font-light text-lg sm:text-xl">
                {activeItem.title}
              </h3>
              <p className="text-xs text-white/60 font-light max-w-lg mx-auto">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
