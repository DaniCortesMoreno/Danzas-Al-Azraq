import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Quote, 
  ArrowUpRight, 
  Play, 
  X, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  CheckCircle2, 
  Eye
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FACULTY } from '../data/mockData';
import { FAQSection } from '../components/common/FAQSection';

interface SchoolPageProps {
  onOpenTrial: (discipline?: string) => void;
}

export const SchoolPage: React.FC<SchoolPageProps> = ({ onOpenTrial }) => {
  const [activeStudioIndex, setActiveStudioIndex] = useState(0);
  const [selectedFacultyId, setSelectedFacultyId] = useState<string>(FACULTY[0].id);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [lightingMode, setLightingMode] = useState<'day' | 'stage'>('day');
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);

  const studios = [
    {
      id: 'sala-01',
      name: 'Sala 01 · Gran Escenario Harlequin',
      tag: '120 m² · Tarima Amortiguada Flotante',
      capacity: 'Aforo: 25 bailarines',
      desc: 'El espacio principal de la academia. Equipado con suelo técnico Harlequin sobre tacos de neopreno elastómero que absorben el 68% del impacto articular en saltos. 16 metros continuos de espejos ópticos y acústica envolvente.',
      imageDay: '/images/danza_studio_alcoy_1790849077427.jpg',
      imageStage: '/images/hero_dance_studio_1790848944277.jpg',
      specs: [
        'Tarima de amortiguación biomecánica Harlequin',
        '16 metros de espejos sin aberración óptica',
        'Doble barra continua de madera noble de haya',
        'Climatización zonificada con renovación de aire continua'
      ],
      hotspots: [
        {
          x: 28,
          y: 78,
          title: 'Tarima Flotante Elastomérica',
          desc: 'Absorbe los impactos articulares protegiendo rodillas, tobillos y vértebras lumbares en saltos y taconeo.'
        },
        {
          x: 68,
          y: 35,
          title: 'Espejos de Corrección Postural',
          desc: 'Cristal templado continuo de alta reflectancia sin curvatura para verificar la alineación anatómica exacta.'
        },
        {
          x: 18,
          y: 48,
          title: 'Doble Barra de Madera de Haya',
          desc: 'Doble nivel de altura adaptado para niños de pre-danza (3 a 6 años) y bailarines adultos.'
        }
      ]
    },
    {
      id: 'sala-02',
      name: 'Sala 02 · Estudio Suspensión & Air Pilates',
      tag: '85 m² · 14 Telas Aéreas Certificadas',
      capacity: 'Aforo: 14 personas (Grupos reducidos)',
      desc: 'Espacio diáfano y sereno con anclajes estructurales de acero reforzado certificados para columpios y telas de seda. Diseñado para descompresión lumbar, ingravidez y tonificación postural profunda en grupos reducidos.',
      imageDay: '/images/pilates_wellness_1790849017867.jpg',
      imageStage: '/images/pilates-wellness.jpg',
      specs: [
        'Anclajes estructurales de techo certificados para 800 kg/punto',
        'Telas de seda técnica de suspensión ergonómica',
        'Iluminación zen cálida regulable para relajación miofascial',
        'Suelo cálido de roble natural para trabajo descalzo'
      ],
      hotspots: [
        {
          x: 45,
          y: 32,
          title: 'Anclajes Certificados de Acero',
          desc: 'Testados para soportar cargas de tracción estática y dinámica de hasta 800 kg por columpio.'
        },
        {
          x: 35,
          y: 65,
          title: 'Telas Aéreas de Inversión',
          desc: 'Permiten la descompresión total de los discos intervertebrales sin presión gravitatoria.'
        },
        {
          x: 75,
          y: 55,
          title: 'Iluminación Zen Regulable',
          desc: 'Modulable para transiciones desde trabajo activo de core hasta relajación y meditación final.'
        }
      ]
    },
    {
      id: 'sala-03',
      name: 'Sala 03 · Espacio Fusión, Ritmo & Raíz',
      tag: '65 m² · Acústica Aislada & Madera Noble',
      capacity: 'Aforo: 18 bailarines',
      desc: 'Dedicado a la Danza Oriental, Flamenco Fusión, Sevillanas y Bailes Latinos. Aislamiento acústico de doble cámara para música en directo, percusión árabe y percusión de taconeo con máxima fidelidad.',
      imageDay: '/images/fusion_flamenco_oriental_1790848979877.jpg',
      imageStage: '/images/fusion-flamenco.jpg',
      specs: [
        'Tarima de roble con resonancia noble para taconeo',
        'Aislamiento acústico integral de doble cámara',
        'Espacio para percusión y músicos en directo',
        'Camerino contiguo y zona de vestuario escénico'
      ],
      hotspots: [
        {
          x: 50,
          y: 75,
          title: 'Tarima de Madera Resonante',
          desc: 'Diseñada para responder con nitidez acústica al zapateado flamenco y ritmos latinos.'
        },
        {
          x: 80,
          y: 40,
          title: 'Sistema de Sonido de Alta Fidelidad',
          desc: 'Ecualización específica para percusión oriental (darbuka), palmas flamencas y clave caribeña.'
        }
      ]
    },
    {
      id: 'zona-lounge',
      name: 'Recepción, Biblioteca & Zona de Familias',
      tag: '50 m² · Acogida & Convivencia',
      capacity: 'Punto de encuentro para alumnos y acompañantes',
      desc: 'Un espacio cálido en el centro de Alcoy donde tomar un té de bienvenida, consultar nuestra biblioteca especializada en artes escénicas o esperar confortablemente a que tus hijos terminen su clase.',
      imageDay: '/images/studio-alcoy.jpg',
      imageStage: '/images/studio-alcoy.jpg',
      specs: [
        'Cafetería e infusiones de cortesía para alumnos',
        'Zona de consulta y biblioteca de danza y anatomía',
        'Vestuarios independientes con duchas y taquillas seguras',
        'Atención de secretaría y asesoramiento pedagógico'
      ],
      hotspots: [
        {
          x: 30,
          y: 50,
          title: 'Atención de Secretaría Presencial',
          desc: 'Atención personalizada para coordinar recuperaciones, resolver dudas y gestionar la matrícula.'
        },
        {
          x: 70,
          y: 60,
          title: 'Vestuarios Adaptados',
          desc: 'Vestuarios independientes, zonas de cambio para peques y taquillas individuales seguras.'
        }
      ]
    }
  ];

  const currentStudio = studios[activeStudioIndex];
  const currentImage = lightingMode === 'day' ? currentStudio.imageDay : currentStudio.imageStage;
  const activeFaculty = FACULTY.find(f => f.id === selectedFacultyId) || FACULTY[0];

  return (
    <div className="space-y-28 sm:space-y-40 pt-6 pb-28">
      
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
            LA ESCUELA
          </span>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
            NUESTRO ESPACIO
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extralight tracking-tight text-white">
            Nuestra Escuela & <span className="font-normal text-white">Espacios</span>
          </h1>

          <p className="text-xs sm:text-sm text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
            Más de 15 años siendo el hogar del movimiento en Alcoy. Instalaciones profesionales climatizadas y concebidas para la salud articular y la libertad artística de cada alumno.
          </p>
        </div>
      </section>

      {/* 2. Interactive Action Bar & Key Facilities Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 space-y-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => {
              const el = document.getElementById('tour-virtual');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-pill-white text-xs py-2.5 px-6 gap-2 cursor-pointer"
          >
            <span>Explorar Tour de Salas</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setVideoModalOpen(true)}
            className="btn-ghost-minimal text-xs py-2.5 px-5 gap-2 border border-white/15 hover:border-white/30 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>Ver vídeo del estudio</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-2">
          {[
            { label: 'Superficie técnica', value: '+300 m²', note: '3 salas independientes' },
            { label: 'Tarima flotante', value: 'Harlequin', note: 'Absorbe 68% impacto' },
            { label: 'Suspensión', value: '14 Columpios', note: 'Anclajes 800 kg cert.' },
            { label: 'Gala Anual', value: 'Teatro Calderón', note: '+180 alumnos en escena' },
          ].map((stat, idx) => (
            <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-white/[0.015] hairline-border space-y-1 backdrop-blur-xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">
                {stat.label}
              </span>
              <p className="text-xl sm:text-2xl font-sans font-light text-white">{stat.value}</p>
              <p className="text-[11px] text-white/50 font-light">{stat.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. TOUR VIRTUAL INTERACTIVO CON HOTSPOTS & MODO ILUMINACIÓN */}
      {/* ============================================================== */}
      <section id="tour-virtual" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
              TOUR VIRTUAL DE INSTALACIONES
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans font-extralight text-white">
              Explora Nuestras Salas al Detalle
            </h2>
            <p className="text-xs sm:text-sm text-white/50 font-light max-w-xl">
              Haz clic en los puntos interactivos para descubrir las ventajas biomecánicas y tecnológicas de cada espacio.
            </p>
          </div>

          {/* Lighting Mode Toggle */}
          <div className="flex items-center gap-2 p-1 rounded-full bg-white/[0.03] border border-white/10 shrink-0">
            <button
              onClick={() => setLightingMode('day')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                lightingMode === 'day' 
                  ? 'bg-white text-black font-semibold shadow-sm' 
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Luz Natural</span>
            </button>
            <button
              onClick={() => setLightingMode('stage')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                lightingMode === 'stage' 
                  ? 'bg-white text-black font-semibold shadow-sm' 
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>Modo Escénico</span>
            </button>
          </div>
        </div>

        {/* Studio Switcher Tabs */}
        <div className="flex flex-wrap gap-2">
          {studios.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                setActiveStudioIndex(idx);
                setActiveHotspot(null);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeStudioIndex === idx
                  ? 'bg-white text-black font-semibold shadow-lg'
                  : 'bg-white/[0.02] text-white/60 hairline-border hover:bg-white/[0.06] hover:text-white'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Interactive Studio Stage Screen */}
        <div className="rounded-3xl hairline-border p-4 sm:p-8 lg:p-10 bg-white/[0.015] backdrop-blur-2xl space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Visual Viewport with Hotspots */}
            <div className="lg:col-span-8 space-y-4">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-80 sm:h-[460px] lg:h-[500px] bg-black group select-none">
                <img
                  src={currentImage}
                  alt={currentStudio.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white/90">
                    {currentStudio.tag}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white/70">
                    {currentStudio.capacity}
                  </span>
                </div>

                {/* Interactive Hotspot Pins */}
                {currentStudio.hotspots.map((spot, i) => {
                  const isSelected = activeHotspot === i;
                  return (
                    <div
                      key={i}
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                    >
                      <button
                        onClick={() => setActiveHotspot(isSelected ? null : i)}
                        className={`relative p-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          isSelected 
                            ? 'bg-white text-black scale-125 shadow-[0_0_25px_rgba(255,255,255,0.8)]' 
                            : 'bg-black/80 text-white border border-white/30 hover:scale-115 hover:border-white'
                        }`}
                        aria-label={`Ver detalle: ${spot.title}`}
                      >
                        {/* Pulsing ring */}
                        <span className="absolute -inset-1 rounded-full bg-white opacity-40 animate-ping" />
                        <Sparkles className="w-3.5 h-3.5" />
                      </button>

                      {/* Tooltip Popup on Hotspot */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 5, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3.5 rounded-2xl bg-black/95 border border-white/20 shadow-2xl backdrop-blur-2xl text-left z-30 pointer-events-auto"
                          >
                            <div className="flex items-center justify-between pb-1 mb-1 border-b border-white/10">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">Punto Clave</span>
                              <button onClick={() => setActiveHotspot(null)} className="text-white/40 hover:text-white">
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                            <h5 className="text-xs font-semibold text-white">{spot.title}</h5>
                            <p className="text-[11px] text-white/60 font-light mt-1 leading-snug">{spot.desc}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* Bottom Overlay Hint */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/70">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <Eye className="w-3.5 h-3.5 text-white/90" />
                    <span className="text-[11px]">Haz clic en los puntos brillantes para ver detalles técnicos</span>
                  </div>
                </div>

              </div>

              {/* Hotspots Quick Switcher Buttons */}
              <div className="flex flex-wrap gap-2 pt-1">
                {currentStudio.hotspots.map((spot, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveHotspot(activeHotspot === i ? null : i)}
                    className={`px-3 py-1.5 rounded-xl text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeHotspot === i
                        ? 'bg-white/20 text-white border border-white/40'
                        : 'bg-white/[0.02] text-white/50 border border-white/[0.06] hover:text-white'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                    <span>{spot.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Dossier: Technical Specifications */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 block mb-1">
                  FICHA TÉCNICA
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-light text-white leading-tight">
                  {currentStudio.name}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                {currentStudio.desc}
              </p>

              <div className="space-y-2.5 pt-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 block">
                  Equipamiento Certificado:
                </span>
                {currentStudio.specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-white/80 p-3 rounded-xl bg-white/[0.02] hairline-border">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="font-light">{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenTrial()}
                  className="btn-pill-white w-full py-3 text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
                >
                  <span>Ven a conocer esta sala en persona</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ============================================================== */}
      {/* 4. EL MÉTODO AL-AZRAQ: FILOSOFÍA PEDAGÓGICA Y RIGOR ANATÓMICO */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl hairline-border p-8 sm:p-14 lg:p-16 overflow-hidden bg-white/[0.015] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
                METODOLOGÍA & CUIDADO CORPORAL
              </span>

              <h2 className="text-3xl sm:text-5xl font-sans font-extralight text-white leading-tight">
                El Método Al-Azraq: <br />
                <span className="font-normal text-white">Rigor biomecánico y calidez humana</span>
              </h2>
              
              <div className="space-y-4 text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                <p>
                  En <strong>Danzas Al-Azraq</strong> concebimos la danza como una disciplina de empoderamiento corporal que nunca debe forzar las articulaciones. Cada clase comienza con calentamientos somáticos basados en la anatomía del movimiento para que niños y adultos bailen con seguridad y longevidad.
                </p>
                <p>
                  Desde la coordinación fina de la <strong>Danza Oriental</strong> y la respiración diafragmática del <strong>Pilates</strong>, hasta la técnica superior de conservatorio en <strong>Danza Contemporánea</strong>, nuestro objetivo es que cada persona encuentre su voz artística sin miedo ni comparaciones.
                </p>
              </div>

              {/* The 4 Pedagogical Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-white/[0.06]">
                {[
                  {
                    num: '01',
                    title: 'Seguridad Articular',
                    desc: 'Tarimas amortiguadas y corrección postural individual para bailar sin sobrecarga en la columna.'
                  },
                  {
                    num: '02',
                    title: 'Profesores Titulados',
                    desc: 'Maestros con formación en conservatorio y más de dos décadas de trayectoria docente.'
                  },
                  {
                    num: '03',
                    title: 'Pedagogía Positiva',
                    desc: 'Enseñamos con paciencia y rigor, fomentando la confianza y la soltura desde el primer día.'
                  },
                  {
                    num: '04',
                    title: 'Teatro Calderón',
                    desc: 'La culminación anual del curso en el escenario más imponente de Alcoy.'
                  }
                ].map((pillar, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] hairline-border space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-white/40">{pillar.num}</span>
                    <h4 className="font-medium text-white text-xs sm:text-sm">{pillar.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light">{pillar.desc}</p>
                  </div>
                ))}
              </div>

            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-80 sm:h-96 group bg-black">
                <img
                  src="/images/fusion-flamenco.jpg"
                  alt="Esencia artística Al-Azraq"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] hairline-border flex items-start gap-3.5">
                <Quote className="w-5 h-5 text-white/40 shrink-0 mt-0.5" />
                <p className="font-sans font-light italic text-white/70 text-xs sm:text-sm leading-relaxed">
                  «La danza no consiste en repetir movimientos mecánicos: consiste en educar la sensibilidad para adueñarse del espacio y sentirse libre.»
                  <span className="block not-italic font-mono text-[10px] text-white/40 uppercase tracking-wider mt-2">— Ana Francés, Fundadora & Directora</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. EL CLAUSTRO DOCENTE: DETALLE INTERACTIVO */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
            PROFESORADO
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extralight text-white">
            El Claustro Docente
          </h2>
          <p className="text-xs sm:text-sm text-white/50 font-light">
            Bailarines titulados por conservatorio y maestros con trayectoria en festivales y compañías de renombre.
          </p>
        </div>

        {/* Faculty Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
          {FACULTY.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFacultyId(f.id)}
              className={`flex items-center gap-2.5 px-4 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                selectedFacultyId === f.id
                  ? 'bg-white text-black shadow-lg font-medium'
                  : 'bg-white/[0.02] text-white/60 hairline-border hover:bg-white/[0.06] hover:text-white'
              }`}
            >
              <img
                src={f.image}
                alt={f.name}
                className="w-5 h-5 rounded-full object-cover"
              />
              <span className="text-xs">{f.name}</span>
            </button>
          ))}
        </div>

        {/* Spotlight Showcase (Interactive Split Layout) */}
        <div className="rounded-3xl hairline-border p-8 sm:p-12 lg:p-14 bg-white/[0.015] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Monumental Portrait */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-80 sm:h-[460px] bg-black group">
                <img
                  src={activeFaculty.image}
                  alt={activeFaculty.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-85" />
                
                <div className="absolute bottom-5 left-5 right-5 space-y-1 text-white">
                  <div className="flex flex-wrap gap-1.5 pb-1">
                    {activeFaculty.badges.map((b, idx) => (
                      <span key={idx} className="px-2.5 py-0.5 rounded-full bg-black/60 border border-white/15 text-[10px] font-mono uppercase tracking-wide text-white/90 backdrop-blur-md">
                        {b}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-sans font-light">{activeFaculty.name}</h3>
                  <p className="text-xs text-white/60 font-light">{activeFaculty.role}</p>
                </div>
              </div>
            </div>

            {/* Right: Detailed Dossier */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/40 block mb-2">
                  DOCENTE TITULAR
                </span>
                <h3 className="text-3xl sm:text-4xl font-sans font-light text-white leading-tight">
                  {activeFaculty.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-white/60 mt-1">
                  {activeFaculty.role}
                </p>
              </div>

              {/* Disciplines Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {activeFaculty.disciplines.map((disc, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/[0.03] hairline-border text-[11px] font-light text-white/80"
                  >
                    {disc}
                  </span>
                ))}
              </div>

              {/* Bio text */}
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                {activeFaculty.bio}
              </p>

              {/* Training note */}
              <div className="p-4 rounded-2xl bg-white/[0.02] hairline-border text-xs text-white/60 font-light space-y-1">
                <strong className="block font-medium text-white">Titulación y Especialidad:</strong>
                <p>{activeFaculty.training}</p>
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm font-sans font-light italic text-white/50 border-l-2 border-white/20 pl-4">
                «{activeFaculty.quote}»
              </p>

              {/* Action */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06]">
                <span className="text-xs text-white/40 font-light">
                  Sede Carrer Oliver · Alcoy
                </span>
                <button
                  onClick={() => onOpenTrial(activeFaculty.disciplines[0])}
                  className="btn-pill-white py-3 px-6 text-xs uppercase tracking-wider font-medium flex items-center gap-2 cursor-pointer"
                >
                  <span>Probar clase con {activeFaculty.name.split(' ')[0]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Complementary Faculty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {FACULTY.map((f) => (
            <div
              key={f.id}
              onClick={() => setSelectedFacultyId(f.id)}
              className={`p-5 rounded-2xl hairline-border cursor-pointer transition-all duration-300 flex flex-col justify-between space-y-4 ${
                selectedFacultyId === f.id
                  ? 'bg-white/[0.06] border-white/30 shadow-lg'
                  : 'bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/15'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div>
                  <h4 className="font-medium text-xs sm:text-sm text-white">{f.name}</h4>
                  <p className="text-[10px] text-white/40 font-light">{f.role}</p>
                </div>
              </div>
              <p className="text-[11px] text-white/50 line-clamp-2 font-light">
                {f.bio}
              </p>
              <div className="text-[10px] font-mono uppercase text-white/40 tracking-wider flex items-center justify-between pt-2 border-t border-white/[0.05]">
                <span>Ver perfil</span>
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. PREGUNTAS FRECUENTES INTEGRADA CON BUSCADOR */}
      {/* ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <FAQSection onOpenTrial={onOpenTrial} />
      </section>

      {/* ============================================================== */}
      {/* 7. BOTTOM INVITATION BOX */}
      {/* ============================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 sm:p-14 rounded-3xl hairline-border bg-white/[0.015] backdrop-blur-2xl space-y-6">
          <h3 className="font-sans font-extralight text-3xl sm:text-4xl text-white">
            ¿Deseas visitar nuestras instalaciones?
          </h3>
          <p className="text-xs sm:text-sm text-white/50 max-w-xl mx-auto font-light leading-relaxed">
            Te invitamos a ver una clase en directo, conocer el aula de ensayo y charlar personalmente con nuestro equipo directivo en Carrer Oliver, Alcoy.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <Link
              to="/contacto"
              className="btn-ghost-minimal px-6 py-3 text-xs uppercase tracking-wider font-medium border border-white/10"
            >
              Cómo llegar a la escuela
            </Link>
            <button
              onClick={() => onOpenTrial()}
              className="btn-pill-white px-7 py-3 text-xs uppercase tracking-wider font-medium flex items-center gap-2 cursor-pointer"
            >
              <span>Solicitar Cita Previa</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Video Reel Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setVideoModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-3xl overflow-hidden bg-black border border-white/15 shadow-2xl p-2 sm:p-4 text-white"
            >
              <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-white/60">
                  Un Día en Danzas Al-Azraq · Estudio Alcoy
                </span>
                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                  aria-label="Cerrar vídeo"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Video Player Display */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mt-3 bg-neutral-900 border border-white/10 flex items-center justify-center">
                <img
                  src="/images/hero_dance_studio_1790848944277.jpg"
                  alt="Vista del estudio"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="p-5 rounded-full bg-white text-black shadow-[0_0_40px_rgba(255,255,255,0.6)] animate-pulse">
                    <Play className="w-8 h-8 fill-black" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xl sm:text-2xl font-sans font-light text-white">
                      Atmósfera, Luz & Movimiento
                    </h4>
                    <p className="text-xs text-white/60 max-w-md font-light">
                      El espacio diáfano donde los alumnos encuentran su ritmo y perfeccionan su técnica cada semana.
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <button
                    onClick={() => setVideoMuted(!videoMuted)}
                    className="p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/70 hover:text-white"
                    aria-label="Silenciar sonido"
                  >
                    {videoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
                <span>📍 Carrer Oliver, 24 · Alcoy</span>
                <button
                  onClick={() => {
                    setVideoModalOpen(false);
                    onOpenTrial();
                  }}
                  className="btn-pill-white py-2 px-5 text-xs uppercase"
                >
                  Reservar clase de prueba
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
