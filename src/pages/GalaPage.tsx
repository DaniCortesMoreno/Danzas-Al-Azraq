import React from 'react';
import { 
  Download, 
  Calendar, 
  MapPin, 
  FileText,
  ArrowUpRight
} from 'lucide-react';
import { GALA_INFO } from '../data/mockData';

export const GalaPage: React.FC = () => {
  const handleDownloadProgram = () => {
    alert('Descargando el Programa Oficial de la Gala Danzas Al-Azraq en el Teatro Calderón (PDF).');
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
            GALA
          </span>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
            PRODUCCIÓN ESCÉNICA
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extralight tracking-tight text-white">
            Gala <span className="font-normal text-white">Danzas Al-Azraq</span>
          </h1>

          <p className="text-xs sm:text-sm text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
            La culminación artística del curso. Una puesta en escena monumental donde más de 180 alumnos dan vida a la magia de las tablas teatrales.
          </p>
        </div>
      </section>

      {/* 2. Hero Showcase Teatro Calderón: Open Theatrical Spread */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl hairline-border p-8 sm:p-14 lg:p-16 overflow-hidden bg-white/[0.015] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
                TEATRO CALDERÓN DE ALCOY
              </span>

              <h2 className="text-3xl sm:text-5xl font-sans font-extralight text-white leading-tight">
                {GALA_INFO.title}
              </h2>

              <p className="text-base sm:text-lg font-light text-white/60">
                {GALA_INFO.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light">
                Cada mes de junio, el prestigioso <strong>Teatro Calderón de Alcoy</strong> abre su telón para la gala de Danzas Al-Azraq. Iluminación escénica profesional, vestuarios de alta costura coreográfica y la emoción compartida con las familias.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.02] hairline-border space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-white/60" />
                    Fecha & Horarios
                  </span>
                  <p className="font-medium text-xs sm:text-sm text-white">{GALA_INFO.date}</p>
                  <p className="text-xs text-white/40 font-light">{GALA_INFO.times}</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.02] hairline-border space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/40 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-white/60" />
                    Escenario
                  </span>
                  <p className="font-medium text-xs sm:text-sm text-white">{GALA_INFO.venue}</p>
                  <p className="text-xs text-white/40 font-light">{GALA_INFO.address}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="#entradas"
                  className="btn-pill-white text-xs uppercase tracking-wider py-3 px-6 flex items-center gap-1.5 font-medium"
                >
                  <span>Ver Entradas</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={handleDownloadProgram}
                  className="btn-ghost-minimal text-xs uppercase tracking-wider py-3 px-5 flex items-center gap-2 font-medium border border-white/10"
                >
                  <Download className="w-3.5 h-3.5 text-white/60" />
                  <span>Descargar Programa (PDF)</span>
                </button>
              </div>

            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-80 sm:h-96 group bg-black">
                <img
                  src="/images/gala-calderon.jpg"
                  alt="Espectáculo de Danzas Al-Azraq en el Teatro Calderón de Alcoy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Programa Escénico: Open Timeline Flow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Open Timeline Flow */}
          <div className="lg:col-span-8 rounded-3xl hairline-border p-8 sm:p-12 space-y-8 bg-white/[0.015] backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-5">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
                  PROGRAMACIÓN
                </span>
                <h2 className="text-2xl sm:text-3xl font-sans font-light text-white mt-1">
                  Secuencia de Actos Coreográficos
                </h2>
              </div>
              <FileText className="w-5 h-5 text-white/30" />
            </div>

            <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-light">
              Más de 22 piezas originales preparadas durante todo el ciclo formativo:
            </p>

            {/* Chronological Stem Timeline */}
            <div className="relative border-l border-white/15 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-7 py-2">
              {GALA_INFO.schedule.map((item, idx) => (
                <div 
                  key={idx}
                  className="relative group transition-all duration-300"
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-black border-2 border-white/60 group-hover:border-white group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(255,255,255,0.4)]" />

                  <div className="space-y-1">
                    <span className="inline-block px-3 py-0.5 rounded-full bg-white/[0.04] hairline-border text-white font-mono text-[11px] tracking-wider mb-1">
                      {item.time}
                    </span>
                    <p className="text-xs sm:text-sm font-light text-white/80 leading-relaxed group-hover:text-white transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Protocolo Familias */}
            <div className="p-5 rounded-2xl bg-white/[0.02] hairline-border space-y-2 text-xs text-white/50 font-light mt-6">
              <strong className="block font-medium text-xs text-white uppercase tracking-wider">
                Protocolo para Asistentes al Teatro Calderón:
              </strong>
              <ul className="space-y-1 list-disc list-inside">
                <li>Puntualidad recomendada. Una vez iniciado el acto, el acceso a butacas se efectúa en los descansos entre piezas.</li>
                <li>Por seguridad y concentración de los alumnos, se solicita no utilizar flash fotográfico.</li>
                <li>Los estudiantes permanecen en camerinos bajo supervisión docente hasta el saludo conjunto final.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Libreto Oficial Sticky Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="rounded-3xl hairline-border p-8 text-center space-y-6 bg-white/[0.02] backdrop-blur-2xl">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-dashed border-white/10 space-y-3">
                <FileText className="w-8 h-8 text-white/40 mx-auto" />
                <h3 className="font-sans font-light text-base text-white">
                  Libreto Oficial de la Gala
                </h3>
                <p className="text-xs text-white/40 font-light leading-relaxed">
                  Sinopsis de las 22 obras, elenco completo de alumnos y notas pedagógicas del claustro.
                </p>
                <div className="text-[10px] font-mono text-white/60 bg-white/[0.03] py-1 px-3 rounded-full border border-white/10 inline-block">
                  PDF · 16 Páginas · Alta Calidad
                </div>
              </div>

              <button
                onClick={handleDownloadProgram}
                className="btn-pill-white w-full py-3.5 text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-black" />
                <span>Descargar Libreto</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Información de Entradas & Taquilla (Open Typographic Trio) */}
      <section id="entradas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl hairline-border p-8 sm:p-14 lg:p-16 bg-white/[0.015] backdrop-blur-2xl space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
              LOCALIDADES
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-extralight text-white">
              Entradas & Taquilla
            </h2>
            <p className="text-xs sm:text-sm text-white/50 font-light">
              Localidades numeradas para las sesiones oficiales en el Teatro Calderón de Alcoy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] hairline-top hairline-bottom py-8 text-center">
            <div className="p-6 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/40">Entrada General</span>
              <p className="font-sans font-extralight text-4xl sm:text-5xl text-white">
                {GALA_INFO.tickets.priceStandard}
              </p>
              <p className="text-xs text-white/40 font-light max-w-xs mx-auto">
                Patio de Butacas y Palcos de Primera Planta en el Teatro Calderón.
              </p>
            </div>

            <div className="p-6 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/40">Menores de 10 años</span>
              <p className="font-sans font-extralight text-4xl sm:text-5xl text-white">
                {GALA_INFO.tickets.priceReduced}
              </p>
              <p className="text-xs text-white/40 font-light max-w-xs mx-auto">
                Tarifa bonificada para familiares infantiles y hermanos de alumnos.
              </p>
            </div>

            <div className="p-6 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-white/40">Canales de Reserva</span>
              <p className="font-normal text-lg text-white pt-2">
                Secretaría & TicketAlcoy
              </p>
              <p className="text-xs text-white/40 font-light max-w-xs mx-auto">
                {GALA_INFO.tickets.boxOfficeDates}
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
