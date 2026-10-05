import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ChevronRight,
  ChevronLeft,
  Star,
  Volume2,
  Maximize2,
  Clock,
  User,
  Check,
  MessageCircle,
  MapPin
} from 'lucide-react';
import { GALA_INFO, TESTIMONIALS, ACADEMY_INFO } from '../data/mockData';
import { Card3DTilt } from '../components/common/Card3DTilt';
import { DanceQuizBanner } from '../components/common/DanceQuizBanner';
import { FAQSection } from '../components/common/FAQSection';
import { TheatricalCurtain } from '../components/common/TheatricalCurtain';

interface HomePageProps {
  onOpenTrial: (discipline?: string) => void;
  onOpenQuiz?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenTrial, onOpenQuiz }) => {
  // Hero Interactive Carousel Widget State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // 3D Mouse Parallax State for Hero
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const heroSlides = [
    {
      id: 's1',
      title: 'Ballet & Creativa',
      category: 'Infantil (desde 3 años)',
      image: '/images/ballet-infantil.jpg',
      discipline: 'Danza Infantil y Creativa'
    },
    {
      id: 's2',
      title: 'Fusión Flamenco Oriental',
      category: 'Identidad Al-Azraq',
      image: '/images/fusion-flamenco.jpg',
      discipline: 'Danza Oriental y Fusión Flamenco'
    },
    {
      id: 's3',
      title: 'Pilates & Salud Postural',
      category: 'Adultos & Bienestar',
      image: '/images/pilates-wellness.jpg',
      discipline: 'Pilates Suelo & Corrección Postural'
    },
    {
      id: 's4',
      title: 'Salsa & Son Mambo',
      category: 'Ritmos Latinos',
      image: '/images/latin-salsa.jpg',
      discipline: 'Salsa, Bachata & Son Mambo'
    },
    {
      id: 's5',
      title: 'Contemporáneo & Expresión',
      category: 'Técnica Conservatorio',
      image: '/images/hero-dance.jpg',
      discipline: 'Danza Clásica y Contemporáneo'
    },
    {
      id: 's6',
      title: 'Danza Urbana & Commercial',
      category: 'Juventud & Ritmo',
      image: '/images/danza-urbana.jpg',
      discipline: 'Baile Moderno, Hip Hop & Commercial'
    }
  ];

  // Auto-advance preview carousel widget in Hero
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlideIndex((curr) => (curr + 1) % heroSlides.length);
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleNextSlide = () => {
    setCurrentSlideIndex((curr) => (curr + 1) % heroSlides.length);
    setProgress(0);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((curr) => (curr - 1 + heroSlides.length) % heroSlides.length);
    setProgress(0);
  };

  const handleHeroMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  // 1. Interactive Choreographic Stages
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  const choreoStages = [
    {
      id: 'oriental-fusion',
      tag: '01 · IDENTIDAD AL-AZRAQ',
      title: 'Danza Oriental & Fusión Étnica',
      subtitle: 'La esencia fundacional de Ana Francés',
      image: '/images/fusion-flamenco.jpg',
      tempo: 'Compás Árabe & Fuerza Flamenca',
      instructor: 'Ana Francés · Directora',
      schedule: 'Martes 15:30 (Inicio) & 20:30 (Fusión) · Jueves 09:30 & 15:30 · Viernes 17:30 & 20:30',
      desc: 'La sutileza de la ondulación pélvica de Oriente se encuentra con la fuerza telúrica del flamenco contemporáneo. Una disciplina de empoderamiento corporal, coordinación y disociación muscular que desafía lo convencional.',
      highlights: ['Uso de velo, crótalos y sables escénicos', 'Alineación de cadera y suelo pélvico', 'Improvisación con percusión en directo', 'Montajes centrales en el Teatro Calderón'],
      specs: [
        { label: 'Técnica', value: '95%' },
        { label: 'Expresión', value: '100%' },
        { label: 'Elasticidad', value: '90%' },
        { label: 'Escenario', value: '98%' }
      ]
    },
    {
      id: 'clasico-contemporaneo',
      tag: '02 · RIGOR ACADÉMICO',
      title: 'Danza Contemporánea & Moderna',
      subtitle: 'Técnica superior de Conservatorio',
      image: '/images/hero-dance.jpg',
      tempo: 'Adagio & Dinámica Gravitatoria',
      instructor: 'Andrea Francés · Conservatorio Profesional',
      schedule: 'Miércoles 16:30 (Moderna) & 17:30 (Contemporánea) · Jueves 17:30 & 18:30 (Peques)',
      desc: 'El balance perfecto entre la pureza y disciplina de la danza moderna y la libertad de suelo del contemporáneo. Desarrolla líneas infinitas, control del equilibrio y salto sin impacto articular.',
      highlights: ['Barra académica y diagonales de centro', 'Técnica de suelo (floorwork) y suspensiones', 'Preparación técnica para audiciones oficiales', 'Coreografías expresivas para la Gala'],
      specs: [
        { label: 'Técnica', value: '100%' },
        { label: 'Expresión', value: '92%' },
        { label: 'Elasticidad', value: '96%' },
        { label: 'Escenario', value: '95%' }
      ]
    },
    {
      id: 'pilates-somatico',
      tag: '03 · BIOMECÁNICA & SALUD',
      title: 'Air Pilates & Pilates Mat',
      subtitle: 'Reeducación postural y descompresión en suspensión',
      image: '/images/pilates-wellness.jpg',
      tempo: 'Respiración Diafragmática Controlada',
      instructor: 'Ana Francés & Equipo Especializado',
      schedule: 'Lunes a Jueves · Mañanas (09:30) y Tardes (15:30 / 18:30 / 19:30)',
      desc: 'Método integral en esterilla y con telas aéreas en suspensión para liberar tensiones acumuladas en la columna y fortalecer el cilindro abdominal (powerhouse). Indicado para personas con dolores de espalda o deportistas que buscan alineación óptima.',
      highlights: ['Atención postural individualizada en grupos reducidos', 'Descompresión de discos vertebrales en telas aéreas', 'Trabajo propioceptivo con foam rollers y fitballs', 'Recuperación funcional y movilidad'],
      specs: [
        { label: 'Centro (Core)', value: '100%' },
        { label: 'Postura', value: '98%' },
        { label: 'Flexibilidad', value: '88%' },
        { label: 'Calma Mental', value: '94%' }
      ]
    },
    {
      id: 'latinos-sonmambo',
      tag: '04 · RITMOS SOCIALES',
      title: 'Bailes Latinos (Son Mambo)',
      subtitle: 'La escuela de campeones de Salsa & Bachata en Alcoy',
      image: '/images/latin-salsa.jpg',
      tempo: 'Clave Afroantillana & Bachata Sensual',
      instructor: 'Javier & Rebeca · Son Mambo',
      schedule: 'Lunes 20:30 · Miércoles 19:30 (Nivel 1) & 20:30 (Nivel 2)',
      desc: 'Pierde la vergüenza y aprende a bailar en pareja con técnica de nivel internacional. Musicalidad, giros fluidos, estilo chico/chica y la comunidad de baile social más acogedora y divertida de la comarca.',
      highlights: ['No se necesita pareja para apuntarse', 'Técnica de conducción corporal clara y sin tirones', 'Ruedas de casino y baile social en clase', 'Eventos y fiestas de práctica regular'],
      specs: [
        { label: 'Ritmo', value: '100%' },
        { label: 'Conexión', value: '96%' },
        { label: 'Diversión', value: '100%' },
        { label: 'Fluidez', value: '92%' }
      ]
    },
    {
      id: 'urbana-commercial',
      tag: '05 · COLOR & ALEGRÍA',
      title: 'Bollywood & Danzas del Mundo',
      subtitle: 'Pulsación exótica, mudras y energía cinematográfica',
      image: '/images/danza-urbana.jpg',
      tempo: 'Bhangra, Mudras & Ritmos Étnicos',
      instructor: 'Paqui Ruiz · Coreógrafa',
      schedule: 'Martes 18:30 (Sevillanas) · Viernes 18:30 (Bollywood Inicio) & 19:30 (Avanzado)',
      desc: 'Coreografías trepidantes de la India y tradición festiva con Paqui Ruiz. Aprende expresividad facial, mudras milenarios, compás y energía pura para el escenario.',
      highlights: ['Técnica de Mudras y expresividad facial (Navarasas)', 'Montaje de piezas coreográficas para festivales', 'Vestuarios coloridos y gran fiesta escénica', 'Excelente acondicionamiento cardiovascular'],
      specs: [
        { label: 'Energía', value: '100%' },
        { label: 'Sincronía', value: '95%' },
        { label: 'Actitud', value: '98%' },
        { label: 'Potencia', value: '94%' }
      ]
    },
    {
      id: 'infantil-creativa',
      tag: '06 · SEMILLERO ARTÍSTICO',
      title: 'Pre-Danza & Danzas Infantiles',
      subtitle: 'Amor por el movimiento desde los 3 años',
      image: '/images/ballet-infantil.jpg',
      tempo: 'Cuentos Motores & Sensibilidad Musical',
      instructor: 'Andrea & Ana Francés',
      schedule: 'Martes 17:30 (Pre Danza) · Jueves 17:30 & 18:30 (Peques) · Viernes 17:30',
      desc: 'La etapa formativa más hermosa. Despertamos la imaginación, la lateralidad y la motricidad fina de los más pequeños a través del juego pedagógico guiado, sin rigideces ni estrés competitivo.',
      highlights: ['Base técnica de danza clásica y moderna a través del juego', 'Desarrollo del esquema corporal y la escucha rítmica', 'Actuación estelar en la Gala del Teatro Calderón', 'Horarios adaptados al calendario escolar de Alcoy'],
      specs: [
        { label: 'Juego Lúdico', value: '100%' },
        { label: 'Psicomotricidad', value: '95%' },
        { label: 'Socialización', value: '98%' },
        { label: 'Creatividad', value: '100%' }
      ]
    }
  ];

  // 2. Studio Architecture Chambers
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);

  const studioChambers = [
    {
      id: 'harlequin',
      tag: 'CÁMARA 01 · SALA PRINCIPAL',
      name: 'Gran Escenario (120 m²)',
      subtitle: 'Tarima Técnica Flotante Harlequin',
      image: '/images/studio-alcoy.jpg',
      desc: 'Suelo de madera noble suspendido sobre elastómeros de absorción de impacto continuo. Reduce en un 65% el estrés mecánico sobre meniscos, tobillos y columna vertebral durante los saltos de danza clásica y urbana.',
      specs: [
        { label: 'Amortiguación Biomecánica', value: '-65% impacto articular' },
        { label: 'Frente de Espejos', value: '16 metros continuos' },
        { label: 'Equipamiento', value: 'Doble barra calibrada de haya' },
        { label: 'Acústica', value: 'Tratamiento fonoabsorbente' }
      ]
    },
    {
      id: 'mariola',
      tag: 'CÁMARA 02 · ESTUDIO FUSIÓN',
      name: 'Espacio Luz Mariola (85 m²)',
      subtitle: 'Danza Oriental & Ritmos Latinos',
      image: '/images/fusion-flamenco.jpg',
      desc: 'Bañada en luz natural orientada a las sierras de Alcoy, con suelo de roble e iluminación ambiental dimable para recrear la atmósfera íntima del escenario teatral.',
      specs: [
        { label: 'Iluminación', value: 'Dimmer gradual de precisión' },
        { label: 'Ventilación', value: 'Purificación HEPA continua' },
        { label: 'Capacidad', value: 'Clases grupales dinámicas' },
        { label: 'Ambiente', value: 'Aislamiento fónico integral' }
      ]
    },
    {
      id: 'zen',
      tag: 'CÁMARA 03 · ESPACIO SOMÁTICO',
      name: 'Santuario Zen (65 m²)',
      subtitle: 'Pilates Suelo, Yoga & Consciencia',
      image: '/images/pilates-wellness.jpg',
      desc: 'Un entorno silencioso y libre de ruido visual concebido para la respiración consciente, la reeducación de patologías de espalda y el trabajo somático one-to-one o en grupos ultra-reducidos.',
      specs: [
        { label: 'Material Técnico', value: 'Esterillas ergonómicas & fitball' },
        { label: 'Climatización', value: 'Temperatura constante 22°C' },
        { label: 'Ratio Alumno', value: 'Máximo 10 alumnos por turno' },
        { label: 'Enfoque', value: 'Supervisión biomecánica' }
      ]
    }
  ];

  // Draggable Carousel ref & buttery-smooth mouse drag with inertia physics & wheel scroll
  const disciplinesScrollRef = useRef<HTMLDivElement>(null);
  const isDraggingDisciplines = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const dragVelocity = useRef(0);
  const lastDragTime = useRef(0);
  const lastDragX = useRef(0);
  const momentumRafId = useRef<number | null>(null);
  const hasMovedSignificantly = useRef(false);
  const [isGrabbing, setIsGrabbing] = useState(false);

  // Stop any active inertia animation
  const stopMomentum = () => {
    if (momentumRafId.current !== null) {
      cancelAnimationFrame(momentumRafId.current);
      momentumRafId.current = null;
    }
  };

  const handleMouseDownDisciplines = (e: React.MouseEvent) => {
    if (!disciplinesScrollRef.current) return;
    stopMomentum();
    isDraggingDisciplines.current = true;
    hasMovedSignificantly.current = false;
    dragStartX.current = e.pageX;
    dragScrollLeft.current = disciplinesScrollRef.current.scrollLeft;
    lastDragX.current = e.pageX;
    lastDragTime.current = performance.now();
    dragVelocity.current = 0;
    setIsGrabbing(true);

    // Disable CSS snap during active drag so it doesn't fight the user's mouse motion
    disciplinesScrollRef.current.style.scrollSnapType = 'none';
    disciplinesScrollRef.current.style.scrollBehavior = 'auto';
  };

  const handleMouseMoveDisciplines = (e: React.MouseEvent) => {
    if (!isDraggingDisciplines.current || !disciplinesScrollRef.current) return;
    e.preventDefault();
    const currentX = e.pageX;
    const deltaX = currentX - dragStartX.current;

    if (Math.abs(deltaX) > 6) {
      hasMovedSignificantly.current = true;
    }

    const now = performance.now();
    const timeDelta = Math.max(now - lastDragTime.current, 10);
    // Instantaneous velocity (pixels / ms)
    dragVelocity.current = (lastDragX.current - currentX) / timeDelta;
    lastDragX.current = currentX;
    lastDragTime.current = now;

    disciplinesScrollRef.current.scrollLeft = dragScrollLeft.current - deltaX;
  };

  const handleMouseUpOrLeaveDisciplines = () => {
    if (!isDraggingDisciplines.current || !disciplinesScrollRef.current) {
      setIsGrabbing(false);
      return;
    }
    isDraggingDisciplines.current = false;
    setIsGrabbing(false);

    const slider = disciplinesScrollRef.current;
    if (!slider) return;

    // Apply smooth inertia physics decay
    let velocity = dragVelocity.current * 16; // convert to px per frame (~60fps)
    const friction = 0.94;

    const runInertia = () => {
      if (Math.abs(velocity) > 0.6 && slider) {
        slider.scrollLeft += velocity;
        velocity *= friction;
        momentumRafId.current = requestAnimationFrame(runInertia);
      } else {
        // Re-enable smooth snap when momentum settles
        if (slider) {
          slider.style.scrollSnapType = 'x mandatory';
          slider.style.scrollBehavior = 'smooth';
        }
        momentumRafId.current = null;
      }
    };

    if (Math.abs(velocity) > 1) {
      momentumRafId.current = requestAnimationFrame(runInertia);
    } else {
      slider.style.scrollSnapType = 'x mandatory';
      slider.style.scrollBehavior = 'smooth';
    }
  };

  const scrollDisciplines = (direction: 'left' | 'right') => {
    if (disciplinesScrollRef.current) {
      const offset = disciplinesScrollRef.current.clientWidth * 0.75;
      disciplinesScrollRef.current.scrollBy({
        left: direction === 'left' ? -offset : offset,
        behavior: 'smooth'
      });
    }
  };

  const scrollToStage = (index: number) => {
    setActiveStageIndex(index);
    if (disciplinesScrollRef.current && disciplinesScrollRef.current.children[index]) {
      const targetChild = disciplinesScrollRef.current.children[index] as HTMLElement;
      targetChild.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  // Architecture Section Scroll Reveal (left & right halves enter from physical screen edges)
  const architectureRef = useRef<HTMLDivElement>(null);
  const [isArchitectureInView, setIsArchitectureInView] = useState(false);
  const architectureAnimated = useRef(false);

  useEffect(() => {
    const el = architectureRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !architectureAnimated.current) {
          architectureAnimated.current = true;
          setIsArchitectureInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Stats Synchronous Counter Animation (Start at 0, finish together)
  const [statCounts, setStatCounts] = useState({ years: 0, students: 0, galas: 0, passion: 0 });
  const statsContainerRef = useRef<HTMLDivElement>(null);
  const statsHasAnimated = useRef(false);

  useEffect(() => {
    const el = statsContainerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsHasAnimated.current) {
          statsHasAnimated.current = true;
          const duration = 2200;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);

            setStatCounts({
              years: Math.round(15 * eased),
              students: Math.round(500 * eased),
              galas: Math.round(18 * eased),
              passion: Math.round(100 * eased)
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-32 sm:space-y-48">

      {/* ==============================================================
          1. GRAN HERO (PRESERVED AS REQUESTED):
             - Fullscreen 100vh / 100vw
             - Texto gigante "AL-AZRAQ" en segundo plano
             - Pose majestuosa
             - Headline y botones en esquina inferior izquierda
             - Widget interactivo flotante en esquina inferior derecha con 3D tilt
             - Efecto Parallax 3D reactivo al cursor
          ============================================================== */}
      <section
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative w-screen h-screen -mx-[calc((100vw-100%)/2)] overflow-hidden flex flex-col justify-between select-none"
        style={{ perspective: '1400px' }}
      >
        {/* Subtle Theatrical Curtain Opening Effect for Hero Stage */}
        <TheatricalCurtain
          mode="hero"
          title="DANZAS AL-AZRAQ"
          subtitle="TEMPORADA ACADÉMICA"
          autoStart={true}
          delayMs={300}
        />

        {/* Dynamic Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out will-change-transform"
          style={{
            backgroundImage: "url('/images/hero-epic-dancer.jpg')",
            transform: `scale(1.06) translate3d(${mousePos.x * -16}px, ${mousePos.y * -16}px, 0)`
          }}
        />

        {/* Ambient Dark Gradient Overlays for Pure Black Integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/25 to-black/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#000000]/30 to-[#000000]/85" />

        {/* Giant Monolithic Wordmark: "AL-AZRAQ" */}
        <div
          className="absolute inset-0 flex items-center justify-center -z-20 pointer-events-none select-none transition-transform duration-500 ease-out"
          style={{
            transform: `translate3d(${mousePos.x * -35}px, ${mousePos.y * -35}px, 0)`
          }}
        >
          <span className="font-sans font-extrabold text-[18vw] tracking-tighter uppercase text-white/[0.12] drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            AL-AZRAQ
          </span>
        </div>

        {/* Subtle Ambient Ice-White Spotlight Glow */}
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-white/[0.04] blur-[160px] rounded-full pointer-events-none -z-10 animate-ethereal-pulse" />

        {/* Top Spacer for Floating Navbar */}
        <div className="pt-24" />

        {/* Bottom Hero Dual Zone: Left Details + Right Floating 3D Widget */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-14 sm:pb-20 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">

            {/* Bottom-Left: Minimalist Headline & Direct Actions */}
            <div
              className="lg:col-span-7 space-y-6 transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0)`
              }}
            >

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl xl:text-7xl font-sans font-extralight text-white tracking-tight leading-[1.08]">
                  Explora la danza <br />
                  <span className="font-normal text-white">como nunca antes.</span>
                </h1>

                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-lg">
                  Formación artística de conservatorio, bienestar corporal consciente y pasión escénica en el corazón de Alcoy. Desde los 3 años hasta adultos.
                </p>
              </div>

              {/* Minimalist Dual CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenTrial()}
                  className="btn-pill-white gap-2"
                >
                  <span>Reservar ahora</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <Link
                  to="/disciplinas"
                  className="btn-ghost-minimal"
                >
                  <span>Ver disciplinas</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Bottom-Right: Floating 3D Carousel Preview Widget */}
            <div
              className="lg:col-span-5 flex justify-start lg:justify-end transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(${mousePos.x * 22}px, ${mousePos.y * 22}px, 0)`
              }}
            >
              <Card3DTilt maxTilt={10} className="w-full max-w-[340px]">
                <div className="antigravity-card rounded-3xl p-4.5 border border-white/20 overflow-hidden space-y-3.5">

                  {/* Thumbnail Card with interactive hover */}
                  <div
                    onClick={() => onOpenTrial(heroSlides[currentSlideIndex].discipline)}
                    className="relative h-44 rounded-2xl overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={heroSlides[currentSlideIndex].image}
                      alt={heroSlides[currentSlideIndex].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    {/* Floating pill inside thumbnail */}
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-medium text-white/90 border border-white/10">
                      {heroSlides[currentSlideIndex].category}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="font-sans font-medium text-xs tracking-wide">
                        {heroSlides[currentSlideIndex].title}
                      </span>
                      <span className="p-1 rounded-full bg-white/20 backdrop-blur-md">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Carousel Progress Bar & Navigation Controls */}
                  <div className="flex items-center justify-between text-xs text-white/80 pt-1">
                    <span className="font-mono text-[11px] text-white/60 tracking-wider">
                      {`0${currentSlideIndex + 1}`}/0{heroSlides.length}
                    </span>

                    {/* Progress Track */}
                    <div className="flex-1 mx-4 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white transition-all duration-100 ease-linear rounded-full"
                        style={{ width: `${progress}%` }}
                      />
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={handlePrevSlide}
                        className="p-1.5 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                        aria-label="Anterior disciplina"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNextSlide}
                        className="p-1.5 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                        aria-label="Siguiente disciplina"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>
              </Card3DTilt>
            </div>

          </div>
        </div>

      </section>


      {/* ==============================================================
          2. KINETIC STREAM HORIZON & MINIMALIST ADMISSIONS CAPSULE
          ============================================================== */}
      <section className="relative py-8 hairline-top hairline-bottom overflow-hidden bg-black space-y-4">
        {/* Top Ticker: Moving Left */}
        <div className="animate-kinetic-ticker whitespace-nowrap text-white/35 text-[11px] sm:text-xs font-light uppercase tracking-[0.35em] flex items-center gap-12">
          <span>DANZA CLÁSICA • ALCOY • YOGA • PILATES • DANZA URBANA • TEATRO CALDERÓN • RITMOS LATINOS • FLAMENCO ORIENTAL • DESDE 3 AÑOS • TÉCNICA DE CONSERVATORIO •</span>
          <span>DANZA CLÁSICA • ALCOY • YOGA • PILATES • DANZA URBANA • TEATRO CALDERÓN • RITMOS LATINOS • FLAMENCO ORIENTAL • DESDE 3 AÑOS • TÉCNICA DE CONSERVATORIO •</span>
        </div>

        {/* Minimalist Floating Admissions Capsule */}
        <div className="max-w-5xl mx-auto px-4 py-2">
          <div className="relative group overflow-hidden rounded-full hairline-border bg-white/[0.02] backdrop-blur-2xl p-3 sm:px-6 sm:py-3.5 transition-all duration-500 hover:border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">

              {/* Left: Status Beacon & Headline */}
              <div className="flex items-center gap-3 text-center md:text-left">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0" />
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-xs">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/90 font-medium">
                    TEMPORADA ACADÉMICA 2026 / 2027
                  </span>
                  <span className="text-white/20 hidden sm:inline">•</span>
                  <span className="text-white/60 font-light">
                    Matrículas abiertas en grupos reducidos
                  </span>
                </div>
              </div>

              {/* Right: Pill Button */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => onOpenTrial()}
                  className="btn-pill-white py-2 px-5 text-xs font-medium flex items-center gap-1.5"
                >
                  <span>Clase de prueba</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Ticker: Moving Right */}
        <div className="animate-kinetic-ticker-reverse whitespace-nowrap text-white/25 text-[10px] sm:text-[11px] font-light uppercase tracking-[0.45em] flex items-center gap-12">
          <span>• EL CUERPO ES EL INSTRUMENTO • LA TÉCNICA ES LA LIBERTAD • EL ESCENARIO TRANSFORMA • AL-AZRAQ • ALCOY •</span>
          <span>• EL CUERPO ES EL INSTRUMENTO • LA TÉCNICA ES LA LIBERTAD • EL ESCENARIO TRANSFORMA • AL-AZRAQ • ALCOY •</span>
        </div>
      </section>


      {/* ==============================================================
          3. CHOREOGRAPHIC CAROUSEL WITH PEEK EFFECTS (REDESIGNED)
          ============================================================== */}
      <section className="relative w-full space-y-10 overflow-hidden">

        {/* Giant Typographic Horizon Watermark */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none select-none -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-sans font-extrabold text-[16vw] uppercase tracking-tighter text-white/[0.025] leading-none block text-center">
            MOVIMIENTO
          </span>
        </div>

        {/* Section Header with Drastic Size/Weight Contrast & Carousel Controls (Contained) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
                01 / DISCIPLINAS
              </span>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extralight text-white tracking-tight leading-tight">
                Elige tu senda en <span className="font-normal text-white">la danza</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/50 font-light max-w-lg leading-relaxed">
                Explora en tiempo real las 6 dimensiones formativas de Danzas Al-Azraq. Selecciona una disciplina para acceder a sus métricas técnicas y vacantes.
              </p>
            </div>

            <div className="flex items-center gap-4 self-start md:self-auto">
              <Link
                to="/disciplinas"
                className="btn-ghost-minimal border border-white/10 rounded-full py-2.5 px-5 text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <span>Ver programa completo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Carousel Arrow Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollDisciplines('left')}
                  className="w-10 h-10 rounded-full hairline-border bg-white/[0.02] hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center transition-all"
                  aria-label="Disciplina anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollDisciplines('right')}
                  className="w-10 h-10 rounded-full hairline-border bg-white/[0.02] hover:bg-white/10 text-white/70 hover:text-white flex items-center justify-center transition-all"
                  aria-label="Disciplina siguiente"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Minimalist Frosted Capsule Navigator */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full glass-capsule border border-white/[0.08] max-w-fit">
            {choreoStages.map((stage, idx) => (
              <button
                key={stage.id}
                onClick={() => scrollToStage(idx)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${activeStageIndex === idx
                  ? 'bg-white text-black font-semibold shadow-lg'
                  : 'text-white/50 hover:text-white'
                  }`}
              >
                {stage.title.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* 100% Full-Screen Width Click-and-Drag / Touch-Swipe Horizontal Carousel */}
        <div className="w-full relative">
          <div
            ref={disciplinesScrollRef}
            onMouseDown={handleMouseDownDisciplines}
            onMouseMove={handleMouseMoveDisciplines}
            onMouseUp={handleMouseUpOrLeaveDisciplines}
            onMouseLeave={handleMouseUpOrLeaveDisciplines}
            onClickCapture={(e) => {
              if (hasMovedSignificantly.current) {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
            className={`w-full flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pt-2 pb-8 px-4 sm:px-8 lg:px-16 select-none ${isGrabbing ? 'cursor-grabbing' : 'cursor-grab'
              }`}
          >
            {choreoStages.map((stage, idx) => (
              <div
                key={stage.id}
                className={`min-w-[88vw] sm:min-w-[620px] lg:min-w-[840px] snap-center rounded-3xl p-6 sm:p-10 hairline-border transition-all duration-500 flex flex-col justify-between ${activeStageIndex === idx
                  ? 'bg-white/[0.03] backdrop-blur-2xl border-white/20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]'
                  : 'bg-white/[0.01] backdrop-blur-xl border-white/[0.06] hover:border-white/15'
                  }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                  {/* Left: Detailed Info */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-white/70">
                        {stage.tag}
                      </span>

                      {/* Rhythm visualizer */}
                      <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.08]">
                        <Volume2 className="w-3 h-3 text-white/40 mr-1" />
                        <div className="w-1 h-3 bg-white/70 rounded-full animate-equalizer-1" />
                        <div className="w-1 h-3 bg-white/70 rounded-full animate-equalizer-2" />
                        <div className="w-1 h-3 bg-white/70 rounded-full animate-equalizer-3" />
                        <div className="w-1 h-3 bg-white/70 rounded-full animate-equalizer-4" />
                        <span className="text-[10px] font-mono text-white/50 ml-1.5">
                          {stage.tempo}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-4xl font-sans font-light text-white leading-tight">
                        {stage.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-light text-white/60 mt-1">
                        {stage.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                      {stage.desc}
                    </p>

                    {/* Highlights Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {stage.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-white/70 p-2.5 rounded-xl bg-white/[0.02] hairline-border">
                          <Check className="w-3.5 h-3.5 text-white/90 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Physical Metrics Radar */}
                    <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                      <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest block">
                        Enfoque Formativo
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {stage.specs.map((spec, i) => (
                          <div key={i} className="p-2.5 rounded-2xl bg-white/[0.02] hairline-border text-center space-y-0.5">
                            <span className="text-[10px] text-white/40 block font-light">{spec.label}</span>
                            <strong className="text-xs sm:text-sm font-mono font-medium text-white block">{spec.value}</strong>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Teacher & Schedule Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-white/[0.02] hairline-border text-xs text-white/60 font-light">
                      <div className="flex items-center gap-2">
                        <User className="w-3.5 h-3.5 text-white/30" />
                        <span><strong className="text-white font-medium">Docente:</strong> {stage.instructor}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-white/30" />
                        <span><strong className="text-white font-medium">Horario:</strong> {stage.schedule}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={() => onOpenTrial(stage.title)}
                        className="btn-pill-white text-xs uppercase tracking-wider py-2.5 px-5 font-medium flex items-center gap-2"
                      >
                        <span>Reservar clase gratis</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                      </button>
                      <Link
                        to="/horarios"
                        className="btn-ghost-minimal text-xs uppercase tracking-wider py-2.5 px-4 font-medium"
                      >
                        Consultar cuadrante
                      </Link>
                    </div>
                  </div>

                  {/* Right: Immersive Visual */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 h-72 sm:h-96 group bg-black">
                      <img
                        src={stage.image}
                        alt={stage.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                      <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none animate-hologram" />

                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-white/90 font-light">
                        {stage.title}
                      </div>

                      <div className="absolute bottom-4 right-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/70">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Interactive Dance Quiz Recommendation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DanceQuizBanner onOpenQuiz={onOpenQuiz || (() => {})} />
      </section>

      {/* ==============================================================
          4. THE SPATIAL SANCTUARY (OPEN EDITORIAL ARCHITECTURE & BIOMECHANICS)
          ============================================================== */}
      <section className="relative w-full overflow-hidden space-y-16">

        {/* Giant Background Wordmark */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-sans font-extrabold text-[18vw] uppercase tracking-tighter text-white/[0.02] leading-none block text-center">
            ANATOMÍA
          </span>
        </div>

        {/* Section Header (Contained) */}
        <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
            02 / INSTALACIONES
          </span>
          <h2 className="text-4xl sm:text-6xl font-sans font-extralight text-white tracking-tight">
            La arquitectura que cuida <br />
            <span className="font-normal text-white">el cuerpo del bailarín</span>
          </h2>

          <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed max-w-2xl mx-auto">
            Bailar sobre superficies rígidas causa micro-traumatismos en rodillas y vértebras. Nuestras 3 salas en Alcoy integran tarima técnica suspendida que absorbe el impacto de saltos y giros.
          </p>
        </div>

        {/* Chamber Selector Tabs (Contained) */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto px-4 sm:px-6">
          {studioChambers.map((chamber, idx) => (
            <button
              key={chamber.id}
              onClick={() => setActiveRoomIndex(idx)}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${activeRoomIndex === idx
                ? 'bg-white text-black font-semibold'
                : 'glass-capsule text-white/50 hover:text-white'
                }`}
            >
              {chamber.name.split('(')[0]}
            </button>
          ))}
        </div>

        {/* Full-Screen Edge Entry Animated Split Layout */}
        <div
          ref={architectureRef}
          className="w-full relative hairline-top hairline-bottom py-12"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Visual View (Enters from True Left Screen Edge) */}
              <div
                className="lg:col-span-6 relative will-change-transform"
                style={{
                  transform: isArchitectureInView ? 'translateX(0)' : 'translateX(-100vw)',
                  opacity: isArchitectureInView ? 1 : 0,
                  transition: 'transform 1.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.85s ease-out'
                }}
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 h-72 sm:h-[420px] shadow-2xl">
                  <img
                    src={studioChambers[activeRoomIndex].image}
                    alt={studioChambers[activeRoomIndex].name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs text-white">
                    <span className="flex items-center gap-2 font-mono text-[11px]">
                      <MapPin className="w-3.5 h-3.5 text-white/50" />
                      Sede Danzas Al-Azraq · Alcoy
                    </span>
                    <span className="text-white/50 font-light text-[11px]">Suelo técnico certificado</span>
                  </div>
                </div>
              </div>

              {/* Specifications Editorial Ledger (Enters from True Right Screen Edge) */}
              <div
                className="lg:col-span-6 space-y-6 lg:pl-6 will-change-transform"
                style={{
                  transform: isArchitectureInView ? 'translateX(0)' : 'translateX(100vw)',
                  opacity: isArchitectureInView ? 1 : 0,
                  transition: 'transform 1.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.85s ease-out'
                }}
              >
                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-white/60">
                    {studioChambers[activeRoomIndex].tag}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-sans font-light text-white">
                    {studioChambers[activeRoomIndex].name}
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-white/50">
                    {studioChambers[activeRoomIndex].subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                  {studioChambers[activeRoomIndex].desc}
                </p>

                {/* Architectural Data Lines */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {studioChambers[activeRoomIndex].specs.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.015] hairline-border space-y-1">
                      <span className="text-[10px] text-white/40 block font-mono uppercase tracking-wider">{item.label}</span>
                      <strong className="text-xs sm:text-sm font-mono font-medium text-white block">{item.value}</strong>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-white/[0.06]">
                  <span className="text-xs text-white/40 font-light">
                    Aforo limitado por sesión
                  </span>
                  <Link
                    to="/escuela"
                    className="btn-ghost-minimal py-2 px-4 text-xs uppercase tracking-wider font-medium flex items-center gap-1.5"
                  >
                    <span>Conocer claustro docente</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Global Academy Milestones: Synchronous 0-to-Target Animated Metric Ribbon */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={statsContainerRef}
            className="grid grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08] hairline-top hairline-bottom py-8 text-center"
          >
            <div className="p-6 space-y-1">
              <span className="text-4xl sm:text-6xl font-extralight text-white font-sans tracking-tight block">
                +{statCounts.years}
              </span>
              <span className="text-[11px] text-white/40 uppercase tracking-[0.25em] block font-light">Años de Trayectoria</span>
            </div>

            <div className="p-6 space-y-1">
              <span className="text-4xl sm:text-6xl font-extralight text-white font-sans tracking-tight block">
                +{statCounts.students}
              </span>
              <span className="text-[11px] text-white/40 uppercase tracking-[0.25em] block font-light">Alumnos Formados</span>
            </div>

            <div className="p-6 space-y-1">
              <span className="text-4xl sm:text-6xl font-extralight text-white font-sans tracking-tight block">
                {statCounts.galas}
              </span>
              <span className="text-[11px] text-white/40 uppercase tracking-[0.25em] block font-light">Galas en el Calderón</span>
            </div>

            <div className="p-6 space-y-1">
              <span className="text-4xl sm:text-6xl font-extralight text-white font-sans tracking-tight block">
                {statCounts.passion}%
              </span>
              <span className="text-[11px] text-white/40 uppercase tracking-[0.25em] block font-light">Vocación y Pasión</span>
            </div>
          </div>
        </div>

      </section>


      {/* ==============================================================
          5. TEATRO CALDERÓN STAGE EXPERIENCE (OPEN THEATRICAL PROSCENIUM SPREAD)
          ============================================================== */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Giant Background Wordmark */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-sans font-extrabold text-[18vw] uppercase tracking-tighter text-white/[0.02] leading-none block text-center">
            CALDERÓN
          </span>
        </div>

        {/* Overhead Stage Spotlight Aperture (Subtle Theatrical Atmosphere) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-gradient-to-b from-white/[0.04] via-white/[0.01] to-transparent blur-3xl pointer-events-none -z-10" />

        {/* Open Theatrical Spread (Not inside a card/box) */}
        <div className="hairline-top hairline-bottom py-14 lg:py-20 relative">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            <div className="lg:col-span-7 space-y-7">

              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40">
                  03 / ESCENARIO GRANDE
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extralight text-white leading-tight">
                {GALA_INFO.title}
              </h2>

              <p className="text-sm font-light text-white/60">
                {GALA_INFO.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed max-w-xl">
                Cada mes de junio, más de 180 alumnos suben a las tablas del histórico <strong>Teatro Calderón de Alcoy</strong> para vivir la emoción del escenario grande: diseño de luces teatral, vestuarios exclusivos y un público que abarrota el patio de butacas.
              </p>

              {/* Open Editorial Stage Callouts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.015] hairline-border space-y-1">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Edición Anual</span>
                  <p className="font-medium text-white text-xs">{GALA_INFO.date}</p>
                  <p className="text-[11px] text-white/40 font-light">{GALA_INFO.venue}</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.015] hairline-border space-y-1">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">Localidades</span>
                  <p className="font-medium text-white text-xs">Desde {GALA_INFO.tickets.priceStandard}</p>
                  <p className="text-[11px] text-white/40 font-light">Butacas numeradas e infantiles</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  to="/gala"
                  className="btn-pill-white text-xs uppercase tracking-wider py-3 px-6 font-medium flex items-center gap-2"
                >
                  <span>Ver programa de la Gala</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-black" />
                </Link>

                <Link
                  to="/galeria"
                  className="btn-ghost-minimal text-xs uppercase tracking-wider py-3 px-5 font-medium"
                >
                  Ver fotos históricas
                </Link>
              </div>

            </div>

            {/* Right: Floating Perspective Stage Proscenium View */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden hairline-border group bg-black/60 shadow-2xl">
                <img
                  src="/images/gala-calderon.jpg"
                  alt="Espectáculo de Danzas Al-Azraq en el Teatro Calderón de Alcoy"
                  className="w-full h-80 sm:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                {/* Stage Coordinates Floating Header */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/60">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                    SALA PRINCIPAL · 750 BUTACAS
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                    ALCOY
                  </span>
                </div>

                {/* Bottom Stage Callout */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs text-white">
                  <span className="font-light text-[11px] text-white/80">Producción coreográfica en vivo</span>
                  <span className="text-[10px] font-mono text-white/40">ACTO I & II</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* ==============================================================
          6. GRAVITY OF VOICES (4-COLUMN TESTIMONIALS WITH 3D TILT HOVER)
          ============================================================== */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Giant Background Wordmark */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none select-none -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <span className="font-sans font-extrabold text-[18vw] uppercase tracking-tighter text-white/[0.02] leading-none block text-center">
            VOCES
          </span>
        </div>

        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
            04 / COMUNIDAD
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extralight text-white tracking-tight">
            La experiencia viva en <span className="font-normal text-white">Alcoy</span>
          </h2>

          <p className="text-xs sm:text-sm text-white/50 font-light">
            Familias, alumnos infantiles y bailarines adultos que han encontrado en Danzas Al-Azraq su hogar artístico.
          </p>
        </div>

        {/* 4-Column Testimonials with 3D Tilt Hover Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {TESTIMONIALS.map((t, idx) => (
            <Card3DTilt
              key={idx}
              maxTilt={10}
              perspective={1200}
              scale={1.03}
              className="rounded-3xl p-7 hairline-border bg-white/[0.02] backdrop-blur-2xl flex flex-col justify-between space-y-6 hover:border-white/20 transition-all duration-300 h-full"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed italic">
                  «{t.quote}»
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 text-white font-medium text-xs flex items-center justify-center shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-medium text-xs sm:text-sm text-white">{t.name}</h4>
                  <p className="text-[10px] text-white/40 font-light">{t.role}</p>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>

      </section>

      {/* Interactive FAQ Section with Instant Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQSection onOpenTrial={onOpenTrial} />
      </section>

      {/* ==============================================================
          7. THE PORTAL OF MOVEMENT (OPEN MONUMENTAL FINALE)
          ============================================================== */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="relative rounded-3xl overflow-hidden hairline-border p-10 sm:p-20 text-center text-white bg-white/[0.015] backdrop-blur-2xl">

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-white/[0.03] blur-[140px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl sm:text-6xl font-sans font-extralight tracking-tight text-white leading-tight">
              El escenario te espera. <br />
              <span className="font-normal text-white">¿Bailamos juntos?</span>
            </h2>

            <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed max-w-xl mx-auto">
              Ven a conocer nuestras aulas técnicas en Carrer Oliver y prueba tu primera clase sin coste alguno. Te asesoramos personalmente sobre el grupo y nivel ideal para ti.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
              <button
                onClick={() => onOpenTrial()}
                className="btn-pill-white text-xs sm:text-sm py-3.5 px-8 w-full sm:w-auto font-medium flex items-center justify-center gap-2"
              >
                <span>Solicitar clase de prueba gratis</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </button>

              <a
                href={`https://wa.me/${ACADEMY_INFO.whatsapp}?text=${encodeURIComponent('Hola Danzas Al-Azraq, me gustaría probar una clase gratuita.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-minimal border border-white/10 rounded-full w-full sm:w-auto py-3.5 px-7 text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-white/80" />
                <span>Chat directo por WhatsApp</span>
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-white/40 font-light">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-white/80" />
                Sin matrícula obligatoria
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-white/80" />
                Sin permanencia
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-white/80" />
                Desde los 3 años hasta adultos
              </span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
