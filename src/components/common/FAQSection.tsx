import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, HelpCircle, MessageCircle, ArrowUpRight, Sparkles, X } from 'lucide-react';
import { FAQ_ITEMS, FAQ_CATEGORIES } from '../../data/faqData';
import { ACADEMY_INFO } from '../../data/mockData';

interface FAQSectionProps {
  onOpenTrial?: () => void;
  className?: string;
  showTitle?: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ 
  onOpenTrial, 
  className = '',
  showTitle = true 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First open by default

  const cleanPhone = ACADEMY_INFO.whatsapp.replace(/[^0-9]/g, '');

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'todas' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query || 
        item.question.toLowerCase().includes(query) || 
        item.answer.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className={`w-full ${className}`}>
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header (optional if embedded) */}
        {showTitle && (
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono uppercase tracking-[0.2em] text-white/60">
              <HelpCircle className="w-3.5 h-3.5 text-white/80" />
              <span>Resolvemos tus dudas</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-extralight text-white tracking-tight">
              Preguntas <span className="font-normal text-white">Frecuentes</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/50 max-w-xl mx-auto font-light leading-relaxed">
              Todo lo que necesitas saber antes de tu primera clase en Danzas Al-Azraq en Alcoy.
            </p>
          </div>
        )}

        {/* Search & Category Filter Controls */}
        <div className="space-y-4">
          
          {/* Instant Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Buscar por palabra clave (ej. 'ropa', 'pareja', 'espalda', 'niños', 'precio')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white/[0.025] hover:bg-white/[0.04] focus:bg-black border border-white/10 focus:border-white/30 text-xs sm:text-sm text-white placeholder-white/30 transition-all font-light shadow-inner focus:outline-hidden"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/10 text-white/60 hover:text-white transition-colors"
                aria-label="Limpiar búsqueda"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {FAQ_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white text-black font-semibold shadow-md'
                      : 'bg-white/[0.02] text-white/50 border border-white/[0.08] hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Results count label */}
          <div className="flex items-center justify-between text-[11px] font-mono text-white/40 px-2 pt-1">
            <span>
              {filteredFaqs.length === 1 
                ? '1 pregunta encontrada' 
                : `${filteredFaqs.length} preguntas encontradas`}
            </span>
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('todas');
                }}
                className="text-white/60 hover:text-white underline underline-offset-2"
              >
                Restablecer búsqueda
              </button>
            )}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 sm:p-12 rounded-3xl hairline-border text-center space-y-4 bg-white/[0.015]">
              <Sparkles className="w-8 h-8 text-white/30 mx-auto" />
              <p className="text-base font-light text-white">
                No encontramos ninguna respuesta para «{searchQuery}»
              </p>
              <p className="text-xs text-white/50 max-w-md mx-auto font-light leading-relaxed">
                ¿Tienes una consulta específica sobre una disciplina, lesión o grupo? Escríbenos directamente a WhatsApp y te responderemos en el día.
              </p>
              <a
                href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hola Danzas Al-Azraq, tenía una duda sobre: ${searchQuery}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-white inline-flex items-center gap-2 py-2.5 px-5 text-xs uppercase tracking-wider"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Preguntar por WhatsApp</span>
              </a>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = expandedIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isOpen 
                      ? 'bg-white/[0.035] border-white/20 shadow-lg' 
                      : 'bg-white/[0.015] border-white/[0.07] hover:border-white/15 hover:bg-white/[0.025]'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                    aria-expanded={isOpen}
                  >
                    <span className="font-sans font-light text-sm sm:text-base text-white/95 leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`p-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/70 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 bg-white/15 text-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-white/60 font-light leading-relaxed border-t border-white/[0.05] pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Contact Pill */}
        <div className="p-6 rounded-3xl hairline-border bg-white/[0.015] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-medium text-white">¿No has encontrado lo que buscabas?</h4>
            <p className="text-xs text-white/50 font-light mt-0.5">
              Nuestro equipo de secretaría está disponible en Carrer Oliver o por WhatsApp.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent('¡Hola Danzas Al-Azraq! Me gustaría haceros una consulta sobre las clases.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full text-xs font-medium text-white/80 hover:text-white hairline-border hover:bg-white/[0.05] transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Escribir por WhatsApp</span>
            </a>
            {onOpenTrial && (
              <button
                onClick={onOpenTrial}
                className="btn-pill-white py-2.5 px-5 text-xs uppercase tracking-wider font-medium flex items-center gap-1.5"
              >
                <span>Probar clase</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
