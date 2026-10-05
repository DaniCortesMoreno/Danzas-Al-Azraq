import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Clock, 
  User, 
  Check, 
  ArrowUpRight,
  Award, 
  HeartHandshake,
  Layers,
  LayoutGrid,
  List
} from 'lucide-react';
import { DISCIPLINES } from '../data/mockData';
import type { DisciplineCategory } from '../types';
import { DanceQuizBanner } from '../components/common/DanceQuizBanner';
import { FAQSection } from '../components/common/FAQSection';

interface DisciplinesPageProps {
  onOpenTrial: (discipline?: string) => void;
  onOpenQuiz?: () => void;
}

export const DisciplinesPage: React.FC<DisciplinesPageProps> = ({ onOpenTrial, onOpenQuiz }) => {
  const [selectedCategory, setSelectedCategory] = useState<DisciplineCategory>('todas');
  const [viewLayout, setViewLayout] = useState<'bento' | 'list'>('bento');
  const [activeListId, setActiveListId] = useState<string>(DISCIPLINES[0].id);

  const categories = [
    { key: 'todas', label: 'Todas las Disciplinas' },
    { key: 'oriental', label: 'Danza Oriental & Bollywood' },
    { key: 'bienestar', label: 'Air Pilates & Bienestar' },
    { key: 'infantil', label: 'Danza Infantil & Pre-Danza' },
    { key: 'urbana', label: 'Moderna & Contemporánea' },
    { key: 'latinos', label: 'Bailes Latinos & Sevillanas' },
  ];

  const filteredDisciplines = selectedCategory === 'todas'
    ? DISCIPLINES
    : DISCIPLINES.filter(d => d.category === selectedCategory);

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
            DISCIPLINAS
          </span>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
            PROGRAMA CURRICULAR
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extralight tracking-tight text-white">
            Explora las <span className="font-normal text-white">disciplinas</span>
          </h1>

          <p className="text-xs sm:text-sm text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
            Desde la pureza clásica y el folclore oriental hasta las tendencias urbanas y el acondicionamiento biomecánico en el corazón de Alcoy.
          </p>
        </div>
      </section>

      {/* 2. Interactive Filter & View Toggle Frosted Capsule */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-full glass-capsule border border-white/[0.08]">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key as DisciplineCategory)}
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

        {/* View Mode Switcher: Bento vs Editorial List */}
        <div className="flex items-center gap-1 p-1 rounded-full bg-white/[0.03] hairline-border">
          <button
            onClick={() => setViewLayout('bento')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs uppercase font-mono tracking-wider transition-all ${
              viewLayout === 'bento'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-white/50 hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Bento</span>
          </button>
          <button
            onClick={() => setViewLayout('list')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs uppercase font-mono tracking-wider transition-all ${
              viewLayout === 'list'
                ? 'bg-white text-black font-semibold shadow-sm'
                : 'text-white/50 hover:text-white'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Lista</span>
          </button>
        </div>
      </section>

      {/* 3. Catalog: Dynamic Asymmetric Bento View OR Interactive Editorial List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {viewLayout === 'bento' ? (
          /* Dynamic Asymmetric Bento Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
            {filteredDisciplines.map((d, idx) => {
              const isWide = (idx % 3 === 0);
              return (
                <div
                  key={d.id}
                  className={`${
                    isWide ? 'lg:col-span-8' : 'lg:col-span-4'
                  } rounded-3xl hairline-border bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col justify-between group`}
                >
                  <div>
                    {/* Media with Dynamic Aspect */}
                    <div className={`relative ${isWide ? 'h-72 sm:h-80' : 'h-64'} overflow-hidden bg-black`}>
                      <img
                        src={d.image}
                        alt={d.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-85" />
                      
                      {d.popularBadge && (
                        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-medium tracking-wide">
                          {d.popularBadge}
                        </span>
                      )}
                      <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/70 text-[10px] font-mono">
                        {d.categoryLabel}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 space-y-4">
                      <div className="flex items-center justify-between text-[11px] tracking-wider uppercase text-white/40">
                        <span className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                          {d.ageGroup}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                          {d.level}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-sans font-light text-white leading-tight">
                        {d.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light">
                        {d.shortDesc}
                      </p>

                      {/* Highlights/Benefits */}
                      <div className="space-y-2 pt-3 border-t border-white/[0.06]">
                        <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest block">
                          Enfoque pedagógico
                        </span>
                        <div className={isWide ? 'grid grid-cols-1 sm:grid-cols-2 gap-2' : 'space-y-2'}>
                          {d.benefits.slice(0, isWide ? 4 : 3).map((benefit, bIdx) => (
                            <div key={bIdx} className="flex items-center gap-2 text-xs text-white/70">
                              <Check className="w-3.5 h-3.5 text-white/80 shrink-0" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Teacher & Schedule Tag */}
                      <div className="p-3.5 rounded-2xl bg-white/[0.02] hairline-border space-y-1.5 text-xs text-white/50 font-light">
                        <div className="flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-white/30" />
                          <span><strong className="text-white font-medium">Docente:</strong> {d.instructorName}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-white/30" />
                          <span><strong className="text-white font-medium">Horario:</strong> {d.scheduleSummary}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 sm:p-8 pt-0 flex gap-3">
                    <button
                      onClick={() => onOpenTrial(d.title)}
                      className="btn-pill-white flex-1 py-3 text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-1.5"
                    >
                      <span>Reservar Clase</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <Link
                      to="/horarios"
                      className="btn-ghost-minimal px-4 py-3 text-xs uppercase tracking-wider font-medium border border-white/10"
                      title="Ver en tabla de horarios"
                    >
                      Horarios
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Interactive Editorial List with Sticky Detail Reveal */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Editorial Directory Rows */}
            <div className="lg:col-span-7 divide-y divide-white/[0.08] hairline-top hairline-bottom">
              {filteredDisciplines.map((d, index) => {
                const isSelected = (activeListId === d.id);
                return (
                  <div
                    key={d.id}
                    onMouseEnter={() => setActiveListId(d.id)}
                    onClick={() => setActiveListId(d.id)}
                    className={`py-6 px-4 -mx-4 transition-all duration-300 cursor-pointer flex items-center justify-between gap-6 group ${
                      isSelected ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-[11px] text-white/30">
                          {`0${index + 1}`}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-white/[0.03] text-[10px] font-mono uppercase tracking-wider text-white/60">
                          {d.categoryLabel}
                        </span>
                        <span className="text-[10px] text-white/40 font-light">
                          {d.ageGroup} · {d.level}
                        </span>
                      </div>

                      <h3 className={`text-xl sm:text-2xl font-sans transition-colors ${
                        isSelected ? 'text-white font-normal' : 'text-white/80 group-hover:text-white font-light'
                      }`}>
                        {d.title}
                      </h3>

                      <p className="text-xs text-white/40 font-light">
                        {d.scheduleSummary} · {d.instructorName}
                      </p>
                    </div>

                    <div className={`w-9 h-9 rounded-full hairline-border flex items-center justify-center transition-all ${
                      isSelected ? 'bg-white text-black' : 'text-white/40 group-hover:text-white group-hover:border-white/30'
                    }`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Sticky Detail Card */}
            <div className="lg:col-span-5 sticky top-28">
              {(() => {
                const activeD = filteredDisciplines.find(d => d.id === activeListId) || filteredDisciplines[0];
                if (!activeD) return null;
                return (
                  <div className="rounded-3xl hairline-border p-6 sm:p-8 bg-white/[0.02] backdrop-blur-2xl space-y-6">
                    <div className="relative h-64 rounded-2xl overflow-hidden bg-black border border-white/10">
                      <img
                        src={activeD.image}
                        alt={activeD.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                      {activeD.popularBadge && (
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-medium">
                          {activeD.popularBadge}
                        </span>
                      )}
                      <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/70 text-[10px] font-mono">
                        {activeD.categoryLabel}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-2xl font-sans font-light text-white">
                        {activeD.title}
                      </h4>
                      <p className="text-xs text-white/50 leading-relaxed font-light">
                        {activeD.shortDesc}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                      <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest block">
                        Enfoque pedagógico
                      </span>
                      {activeD.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                          <Check className="w-3.5 h-3.5 text-white/80 shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/[0.02] hairline-border space-y-1 text-xs text-white/60 font-light">
                      <p><strong className="text-white font-medium">Docente:</strong> {activeD.instructorName}</p>
                      <p><strong className="text-white font-medium">Horario:</strong> {activeD.scheduleSummary}</p>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => onOpenTrial(activeD.title)}
                        className="btn-pill-white flex-1 py-3 text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-1.5"
                      >
                        <span>Reservar Clase</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                      <Link
                        to="/horarios"
                        className="btn-ghost-minimal px-4 py-3 text-xs uppercase tracking-wider font-medium border border-white/10"
                      >
                        Horarios
                      </Link>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>
        )}
      </section>

      {/* Interactive Dance Quiz Recommendation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DanceQuizBanner onOpenQuiz={onOpenQuiz || (() => {})} />
      </section>

      {/* 4. Special Section: Clases Particulares y Proyectos Escénicos (Open Magazine Spread) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl hairline-border p-8 sm:p-14 lg:p-16 overflow-hidden bg-white/[0.015] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
                  FORMACIÓN EXCLUSIVA
                </span>

                <h2 className="text-3xl sm:text-5xl font-sans font-extralight text-white leading-tight">
                  Clases Particulares & <span className="font-normal text-white">Proyectos Escénicos</span>
                </h2>

                <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light">
                  Programas exclusivos diseñados a la medida de tu cuerpo, metas de audición profesional o eventos especiales:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/[0.02] hairline-border space-y-1.5 hover:border-white/20 transition-all">
                  <h4 className="font-medium text-xs sm:text-sm text-white flex items-center gap-2">
                    <Award className="w-4 h-4 text-white/70" />
                    Pruebas de Acceso a Conservatorio
                  </h4>
                  <p className="text-xs text-white/40 leading-relaxed font-light">
                    Preparación técnica para audiciones en el Conservatorio Profesional de Alicante y centros superiores de danza.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] hairline-border space-y-1.5 hover:border-white/20 transition-all">
                  <h4 className="font-medium text-xs sm:text-sm text-white flex items-center gap-2">
                    <HeartHandshake className="w-4 h-4 text-white/70" />
                    Coreografías para Bodas y Eventos
                  </h4>
                  <p className="text-xs text-white/40 leading-relaxed font-light">
                    Bailes nupciales personalizados (vals contemporáneo, bachata o medley exclusivo) diseñados para novios.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] hairline-border space-y-1.5 hover:border-white/20 transition-all">
                  <h4 className="font-medium text-xs sm:text-sm text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-white/70" />
                    Rehabilitación & Pilates One-to-One
                  </h4>
                  <p className="text-xs text-white/40 leading-relaxed font-light">
                    Atención personalizada para recuperación biomecánica, higiene postural y acondicionamiento con Ana Francés.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] hairline-border space-y-1.5 hover:border-white/20 transition-all">
                  <h4 className="font-medium text-xs sm:text-sm text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-white/70" />
                    Asesoría Coreográfica en Moros y Cristianos
                  </h4>
                  <p className="text-xs text-white/40 leading-relaxed font-light">
                    Ballets festeros de las Fiestas de Alcoy, montaje escénico y asesoría coreográfica para escuadras de honor.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-8 rounded-3xl bg-white/[0.02] hairline-border text-center space-y-4">
              <h3 className="font-sans font-light text-2xl text-white">
                ¿Hablamos de tu meta?
              </h3>
              <p className="text-xs text-white/40 leading-relaxed font-light">
                Coordinamos fecha y docente especialista en nuestras salas técnicas de Alcoy.
              </p>
              <Link
                to="/contacto"
                className="btn-pill-white w-full py-3.5 text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-1.5"
              >
                <span>Solicitar Asesoría</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Preguntas Frecuentes FAQ con Buscador Instantáneo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQSection onOpenTrial={onOpenTrial} />
      </section>

    </div>
  );
};
