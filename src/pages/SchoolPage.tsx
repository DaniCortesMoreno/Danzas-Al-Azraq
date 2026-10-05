import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Quote,
  ArrowUpRight,
  Maximize2
} from 'lucide-react';
import { FACULTY } from '../data/mockData';

interface SchoolPageProps {
  onOpenTrial: (discipline?: string) => void;
}

export const SchoolPage: React.FC<SchoolPageProps> = ({ onOpenTrial }) => {
  const [activeStudioIndex, setActiveStudioIndex] = useState(0);
  const [selectedFacultyId, setSelectedFacultyId] = useState<string>(FACULTY[0].id);

  const studios = [
    {
      id: 'sala-alcoy',
      name: 'Sala 01 · Gran Escenario',
      tag: '120 m² · Tarima Amortiguada',
      desc: 'Suelo técnico flotante sobre tacos de caucho absorbe-impactos, 16 metros continuos de espejos y sistema acústico envolvente de alta fidelidad para ballet clásico, urbano y ensayos de gala.',
      specs: ['Suelo flotante Harlequin', '16m espejos frontales', 'Doble barra de haya', 'Climatización zonificada'],
      image: '/images/studio-alcoy.jpg'
    },
    {
      id: 'sala-mariola',
      name: 'Sala 02 · Estudio Fusión',
      tag: '85 m² · Luz Natural & Zen',
      desc: 'Espacio cálido y diáfano concebido para la danza oriental, flamenco contemporáneo y bailes latinos, con iluminación regulable para transiciones emocionales.',
      specs: ['Tarima de roble natural', 'Iluminación escénica dimable', 'Espejos laterales', 'Aislamiento acústico integral'],
      image: '/images/fusion-flamenco.jpg'
    },
    {
      id: 'sala-azraq',
      name: 'Sala 03 · Espacio Somático',
      tag: '65 m² · Pilates & Mindfulness',
      desc: 'Ambiente sereno y silencioso dedicado al Pilates Mat, Yoga postural y trabajo propioceptivo individual o grupos reducidos.',
      specs: ['Esterillas ergonómicas', 'Material foam roller & fitball', 'Purificación de aire continua', 'Aromaterapia natural'],
      image: '/images/pilates-wellness.jpg'
    }
  ];

  const pillars = [
    {
      number: '01',
      title: 'Técnica Rigurosa',
      desc: 'Formación por profesorado titulado en conservatorio que respeta la anatomía y la biomecánica corporal.'
    },
    {
      number: '02',
      title: 'Sensibilidad & Pasión',
      desc: 'Enseñamos a sentir cada acorde. El movimiento es un lenguaje para emocionar y liberar la expresión.'
    },
    {
      number: '03',
      title: 'Cercanía Humana',
      desc: 'Ambiente familiar y acogedor donde cada estudiante progresa a su propio ritmo sin presiones artificiales.'
    },
    {
      number: '04',
      title: 'Comunidad Escénica',
      desc: 'La emoción de las galas en el Teatro Calderón y el compañerismo que perdura a través de los años.'
    }
  ];

  const activeFaculty = FACULTY.find(f => f.id === selectedFacultyId) || FACULTY[0];

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
            CLAUSTRO
          </span>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
            NUESTRO EQUIPO
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extralight tracking-tight text-white">
            Nuestra Escuela & <span className="font-normal text-white">Maestros</span>
          </h1>

          <p className="text-xs sm:text-sm text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
            Un claustro de bailarines y docentes titulados dedicados al desarrollo artístico y técnico de cada alumno en Alcoy.
          </p>
        </div>
      </section>

      {/* 2. Filosofía & Legado Al-Azraq: Magazine-style Collage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl hairline-border p-8 sm:p-14 lg:p-16 overflow-hidden bg-white/[0.015] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
                VALORES & FILOSOFÍA
              </span>

              <h2 className="text-3xl sm:text-5xl font-sans font-extralight text-white leading-tight">
                El arte de bailar con <span className="font-normal text-white">identidad y alma</span>
              </h2>
              
              <div className="space-y-4 text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                <p>
                  <strong>Danzas Al-Azraq</strong> nació de la visión de <strong>Ana Francés</strong> de crear en Alcoy un epicentro formativo donde la danza oriental y las disciplinas de raíz mundial dialogaran con el rigor clásico, la danza moderna y la conciencia somática del Pilates.
                </p>
                <p>
                  El nombre <em>Al-Azraq</em> («el de los ojos azules») honra la historia viva y la fuerza de nuestras tierras de la Mariola y Alcoy, reflejando tenacidad, vuelo creativo y arraigo cultural.
                </p>
              </div>

              {/* Minimalist 4 Pillars Grid with Hairline Dividers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-white/[0.06]">
                {pillars.map((p, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] hairline-border space-y-1 hover:border-white/20 transition-all">
                    <span className="text-[10px] font-mono tracking-widest text-white/40">{p.number}</span>
                    <h4 className="font-medium text-white text-xs sm:text-sm">{p.title}</h4>
                    <p className="text-xs text-white/40 leading-relaxed font-light">{p.desc}</p>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] hairline-border flex items-start gap-3.5">
                <Quote className="w-5 h-5 text-white/40 shrink-0 mt-0.5" />
                <p className="font-sans font-light italic text-white/70 text-xs sm:text-sm leading-relaxed">
                  «No enseñamos simplemente a repetir secuencias mecánicas: educamos la sensibilidad para sentir la música y adueñarse del escenario.»
                  <span className="block not-italic font-mono text-[10px] text-white/40 uppercase tracking-wider mt-2">— Ana Francés, Fundadora & Directora</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Studio Explorer (Magazine Collage with Varied Aspect Ratios) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
            ESPACIOS TÉCNICOS
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extralight text-white">
            Nuestros Tres Espacios en Alcoy
          </h2>
          <p className="text-xs sm:text-sm text-white/50 font-light">
            Salas climatizadas con tarima flotante amortiguada, concebidas para proteger las articulaciones de los bailarines.
          </p>
        </div>

        {/* Studio Switcher Capsule */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
          {studios.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveStudioIndex(idx)}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                activeStudioIndex === idx
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'glass-capsule text-white/50 hover:text-white'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Active Studio Collage Display */}
        <div className="rounded-3xl hairline-border p-8 sm:p-12 overflow-hidden bg-white/[0.015] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-white/70">
                {studios[activeStudioIndex].tag}
              </span>
              <h3 className="text-2xl sm:text-4xl font-sans font-light text-white">
                {studios[activeStudioIndex].name}
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                {studios[activeStudioIndex].desc}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {studios[activeStudioIndex].specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/70 p-3 rounded-xl bg-white/[0.02] hairline-border">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 h-72 sm:h-96 shadow-2xl group">
                <img
                  src={studios[activeStudioIndex].image}
                  alt={studios[activeStudioIndex].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 right-3 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white/70 border border-white/10">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Claustro Docente: Interactive Faculty Showcase & Spotlight */}
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

        {/* Faculty Selector Pills / Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
          {FACULTY.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFacultyId(f.id)}
              className={`flex items-center gap-2.5 px-4 py-2 rounded-full transition-all duration-300 ${
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
                  onClick={() => onOpenTrial()}
                  className="btn-pill-white py-3 px-6 text-xs uppercase tracking-wider font-medium flex items-center gap-2"
                >
                  <span>Probar clase con {activeFaculty.name.split(' ')[0]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Complementary Faculty Cards (Clean Asymmetric Ribbon) */}
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

      {/* 5. Bottom Invitation Box (Open Architectural Frame) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 sm:p-14 rounded-3xl hairline-border bg-white/[0.015] backdrop-blur-2xl space-y-6">
          <h3 className="font-sans font-extralight text-3xl sm:text-4xl text-white">
            ¿Deseas visitar nuestras instalaciones?
          </h3>
          <p className="text-xs sm:text-sm text-white/50 max-w-xl mx-auto font-light leading-relaxed">
            Te invitamos a ver una clase en directo, conocer el aula de ensayo y charlar personalmente con nuestro equipo directivo en Alcoy.
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
              className="btn-pill-white px-7 py-3 text-xs uppercase tracking-wider font-medium flex items-center gap-2"
            >
              <span>Solicitar Cita Previa</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
