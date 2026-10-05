import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Download, 
  Sparkles, 
  ArrowUpRight,
  LayoutGrid,
  Filter,
  CheckCircle2,
  Info
} from 'lucide-react';
import { SCHEDULE_ITEMS } from '../data/mockData';
import type { DisciplineCategory } from '../types';

interface SchedulePageProps {
  onOpenTrial: (discipline?: string) => void;
}

interface MatrixSlot {
  name: string;
  category: DisciplineCategory;
  borderClass: string;
  textClass: string;
  bgClass: string;
  glowClass: string;
  level?: string;
  instructor?: string;
}

interface TimetableRow {
  time: string;
  cells: {
    Lunes?: MatrixSlot;
    Martes?: MatrixSlot;
    Miércoles?: MatrixSlot;
    Jueves?: MatrixSlot;
    Viernes?: MatrixSlot;
    Sábado?: MatrixSlot;
  };
}

export const SchedulePage: React.FC<SchedulePageProps> = ({ onOpenTrial }) => {
  const [viewMode, setViewMode] = useState<'matrix' | 'cards'>('matrix');
  const [highlightFilter, setHighlightFilter] = useState<string>('todos');
  const [selectedDay, setSelectedDay] = useState<string>('Todos');
  const [selectedShift, setSelectedShift] = useState<'todos' | 'manana' | 'tarde'>('todos');
  const [onlyChildren, setOnlyChildren] = useState<boolean>(false);

  const days = ['Todos', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  const weekDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'] as const;

  // Exact timetable matrix from Danzas Al-Azraq official schedule
  const TIMETABLE_ROWS: TimetableRow[] = [
    {
      time: '8:15 - 9:15',
      cells: {
        Martes: {
          name: 'YOGA',
          category: 'bienestar',
          borderClass: 'border-[#6366F1]',
          textClass: 'text-indigo-200',
          bgClass: 'bg-indigo-500/10 hover:bg-indigo-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]',
          instructor: 'Ana Francés'
        },
        Jueves: {
          name: 'YOGA',
          category: 'bienestar',
          borderClass: 'border-[#6366F1]',
          textClass: 'text-indigo-200',
          bgClass: 'bg-indigo-500/10 hover:bg-indigo-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]',
          instructor: 'Ana Francés'
        }
      }
    },
    {
      time: '9:30 - 10:30',
      cells: {
        Lunes: {
          name: 'PILATES MAT',
          category: 'bienestar',
          borderClass: 'border-[#EC4899]',
          textClass: 'text-pink-200',
          bgClass: 'bg-pink-500/10 hover:bg-pink-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(236,72,153,0.35)]',
          instructor: 'Ana Francés'
        },
        Martes: {
          name: 'AIR PILATES',
          category: 'bienestar',
          borderClass: 'border-[#06B6D4]',
          textClass: 'text-cyan-200',
          bgClass: 'bg-cyan-500/10 hover:bg-cyan-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(6,182,212,0.35)]',
          instructor: 'Ana Francés'
        },
        Miércoles: {
          name: 'PILATES MAT',
          category: 'bienestar',
          borderClass: 'border-[#EC4899]',
          textClass: 'text-pink-200',
          bgClass: 'bg-pink-500/10 hover:bg-pink-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(236,72,153,0.35)]',
          instructor: 'Ana Francés'
        },
        Jueves: {
          name: 'DANZA ORIENTAL INICIO/MEDIO',
          category: 'oriental',
          borderClass: 'border-[#A855F7]',
          textClass: 'text-purple-200',
          bgClass: 'bg-purple-500/10 hover:bg-purple-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]',
          instructor: 'Ana Francés'
        },
        Viernes: {
          name: 'YOGA',
          category: 'bienestar',
          borderClass: 'border-[#6366F1]',
          textClass: 'text-indigo-200',
          bgClass: 'bg-indigo-500/10 hover:bg-indigo-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]',
          instructor: 'Ana Francés'
        }
      }
    },
    {
      time: '10:45 - 11:45',
      cells: {
        Lunes: {
          name: 'ZUMBA GOLD',
          category: 'latinos',
          borderClass: 'border-[#F97316]',
          textClass: 'text-orange-200',
          bgClass: 'bg-orange-500/10 hover:bg-orange-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]',
          instructor: 'Paqui Ruiz'
        },
        Jueves: {
          name: 'ZUMBA GOLD',
          category: 'latinos',
          borderClass: 'border-[#F97316]',
          textClass: 'text-orange-200',
          bgClass: 'bg-orange-500/10 hover:bg-orange-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]',
          instructor: 'Paqui Ruiz'
        }
      }
    },
    {
      time: '15:30 - 16:30',
      cells: {
        Lunes: {
          name: 'YOGA',
          category: 'bienestar',
          borderClass: 'border-[#6366F1]',
          textClass: 'text-indigo-200',
          bgClass: 'bg-indigo-500/10 hover:bg-indigo-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(99,102,241,0.35)]',
          instructor: 'Ana Francés'
        },
        Martes: {
          name: 'FLAMENCO ORIENTAL INICIO',
          category: 'oriental',
          borderClass: 'border-[#EF4444]',
          textClass: 'text-red-200',
          bgClass: 'bg-red-500/10 hover:bg-red-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(239,68,68,0.35)]',
          instructor: 'Paqui Ruiz'
        },
        Miércoles: {
          name: 'PILATES MAT',
          category: 'bienestar',
          borderClass: 'border-[#EC4899]',
          textClass: 'text-pink-200',
          bgClass: 'bg-pink-500/10 hover:bg-pink-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(236,72,153,0.35)]',
          instructor: 'Ana Francés'
        },
        Jueves: {
          name: 'ORIENTAL AVANZADO',
          category: 'oriental',
          borderClass: 'border-[#A855F7]',
          textClass: 'text-purple-200',
          bgClass: 'bg-purple-500/10 hover:bg-purple-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]',
          instructor: 'Ana Francés'
        },
        Viernes: {
          name: 'ZUMBA',
          category: 'latinos',
          borderClass: 'border-[#FB923C]',
          textClass: 'text-orange-200',
          bgClass: 'bg-orange-500/10 hover:bg-orange-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(251,146,60,0.35)]',
          instructor: 'Paqui Ruiz'
        }
      }
    },
    {
      time: '16:30 - 17:30',
      cells: {
        Miércoles: {
          name: 'DANZA MODERNA',
          category: 'urbana',
          borderClass: 'border-[#F59E0B]',
          textClass: 'text-amber-200',
          bgClass: 'bg-amber-500/10 hover:bg-amber-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(245,158,11,0.35)]',
          instructor: 'Andrea Francés'
        },
        Sábado: {
          name: 'INTENSIVOS',
          category: 'todas',
          borderClass: 'border-[#B91C1C]',
          textClass: 'text-red-200 font-semibold',
          bgClass: 'bg-red-600/15 hover:bg-red-600/25',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(185,28,28,0.4)]',
          instructor: 'Claustro Docente'
        }
      }
    },
    {
      time: '17:30 - 18:30',
      cells: {
        Lunes: {
          name: 'ZUMBA KIDS',
          category: 'infantil',
          borderClass: 'border-[#22C55E]',
          textClass: 'text-green-200',
          bgClass: 'bg-green-500/10 hover:bg-green-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]',
          instructor: 'Paqui Ruiz'
        },
        Martes: {
          name: 'PRE DANZA',
          category: 'infantil',
          borderClass: 'border-[#8B5CF6]',
          textClass: 'text-purple-200',
          bgClass: 'bg-purple-500/10 hover:bg-purple-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(139,92,246,0.35)]',
          instructor: 'Andrea Francés'
        },
        Miércoles: {
          name: 'DANZA CONTEMPORÁNEA',
          category: 'urbana',
          borderClass: 'border-[#14B8A6]',
          textClass: 'text-teal-200',
          bgClass: 'bg-teal-500/10 hover:bg-teal-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(20,184,166,0.35)]',
          instructor: 'Andrea Francés'
        },
        Jueves: {
          name: 'DANZA MODERNA (PEQUES)',
          category: 'infantil',
          borderClass: 'border-[#F97316]',
          textClass: 'text-orange-200',
          bgClass: 'bg-orange-500/10 hover:bg-orange-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(249,115,22,0.35)]',
          instructor: 'Andrea Francés'
        },
        Viernes: {
          name: 'DANZA ORIENTAL PEQUES',
          category: 'infantil',
          borderClass: 'border-[#A855F7]',
          textClass: 'text-purple-200',
          bgClass: 'bg-purple-500/10 hover:bg-purple-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]',
          instructor: 'Paqui Ruiz'
        },
        Sábado: {
          name: 'INTENSIVOS',
          category: 'todas',
          borderClass: 'border-[#B91C1C]',
          textClass: 'text-red-200 font-semibold',
          bgClass: 'bg-red-600/15 hover:bg-red-600/25',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(185,28,28,0.4)]',
          instructor: 'Claustro Docente'
        }
      }
    },
    {
      time: '18:30 - 19:30',
      cells: {
        Lunes: {
          name: 'AIR PILATES',
          category: 'bienestar',
          borderClass: 'border-[#06B6D4]',
          textClass: 'text-cyan-200',
          bgClass: 'bg-cyan-500/10 hover:bg-cyan-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(6,182,212,0.35)]',
          instructor: 'Ana Francés'
        },
        Martes: {
          name: 'SEVILLANAS',
          category: 'latinos',
          borderClass: 'border-[#EF4444]',
          textClass: 'text-red-200',
          bgClass: 'bg-red-500/10 hover:bg-red-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(239,68,68,0.35)]',
          instructor: 'Paqui Ruiz'
        },
        Miércoles: {
          name: 'AIR PILATES',
          category: 'bienestar',
          borderClass: 'border-[#06B6D4]',
          textClass: 'text-cyan-200',
          bgClass: 'bg-cyan-500/10 hover:bg-cyan-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(6,182,212,0.35)]',
          instructor: 'Ana Francés'
        },
        Jueves: {
          name: 'DANZA CONTEMPORÁNEA PEQUES',
          category: 'infantil',
          borderClass: 'border-[#0D9488]',
          textClass: 'text-teal-200',
          bgClass: 'bg-teal-500/10 hover:bg-teal-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(13,148,136,0.35)]',
          instructor: 'Andrea Francés'
        },
        Viernes: {
          name: 'BOLLYWOOD INICIACIÓN',
          category: 'oriental',
          borderClass: 'border-[#D946EF]',
          textClass: 'text-fuchsia-200',
          bgClass: 'bg-fuchsia-500/10 hover:bg-fuchsia-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(217,70,239,0.35)]',
          instructor: 'Paqui Ruiz'
        },
        Sábado: {
          name: 'INTENSIVOS',
          category: 'todas',
          borderClass: 'border-[#B91C1C]',
          textClass: 'text-red-200 font-semibold',
          bgClass: 'bg-red-600/15 hover:bg-red-600/25',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(185,28,28,0.4)]',
          instructor: 'Claustro Docente'
        }
      }
    },
    {
      time: '19:30 - 20:30',
      cells: {
        Lunes: {
          name: 'DANZA ORIENTAL INICIACIÓN (1)',
          category: 'oriental',
          borderClass: 'border-[#A855F7]',
          textClass: 'text-purple-200',
          bgClass: 'bg-purple-500/10 hover:bg-purple-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]',
          instructor: 'Ana Francés'
        },
        Martes: {
          name: 'PILATES MAT',
          category: 'bienestar',
          borderClass: 'border-[#EC4899]',
          textClass: 'text-pink-200',
          bgClass: 'bg-pink-500/10 hover:bg-pink-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(236,72,153,0.35)]',
          instructor: 'Ana Francés'
        },
        Miércoles: {
          name: 'BAILES LATINOS',
          category: 'latinos',
          borderClass: 'border-[#D97706]',
          textClass: 'text-amber-200',
          bgClass: 'bg-amber-500/10 hover:bg-amber-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(217,119,6,0.35)]',
          instructor: 'Javier & Rebeca (Son Mambo)'
        },
        Jueves: {
          name: 'PILATES MAT',
          category: 'bienestar',
          borderClass: 'border-[#EC4899]',
          textClass: 'text-pink-200',
          bgClass: 'bg-pink-500/10 hover:bg-pink-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(236,72,153,0.35)]',
          instructor: 'Ana Francés'
        },
        Viernes: {
          name: 'BOLLYWOOD AVANZADO',
          category: 'oriental',
          borderClass: 'border-[#D946EF]',
          textClass: 'text-fuchsia-200',
          bgClass: 'bg-fuchsia-500/10 hover:bg-fuchsia-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(217,70,239,0.35)]',
          instructor: 'Paqui Ruiz'
        },
        Sábado: {
          name: 'INTENSIVOS',
          category: 'todas',
          borderClass: 'border-[#B91C1C]',
          textClass: 'text-red-200 font-semibold',
          bgClass: 'bg-red-600/15 hover:bg-red-600/25',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(185,28,28,0.4)]',
          instructor: 'Claustro Docente'
        }
      }
    },
    {
      time: '20:30 - 21:30',
      cells: {
        Lunes: {
          name: 'BAILES LATINOS',
          category: 'latinos',
          borderClass: 'border-[#D97706]',
          textClass: 'text-amber-200',
          bgClass: 'bg-amber-500/10 hover:bg-amber-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(217,119,6,0.35)]',
          instructor: 'Javier & Rebeca (Son Mambo)'
        },
        Martes: {
          name: 'FUSIÓN FLAMENCO ORIENTAL',
          category: 'oriental',
          borderClass: 'border-[#EF4444]',
          textClass: 'text-red-200',
          bgClass: 'bg-red-500/10 hover:bg-red-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(239,68,68,0.35)]',
          instructor: 'Ana Francés'
        },
        Miércoles: {
          name: 'BAILES LATINOS',
          category: 'latinos',
          borderClass: 'border-[#D97706]',
          textClass: 'text-amber-200',
          bgClass: 'bg-amber-500/10 hover:bg-amber-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(217,119,6,0.35)]',
          instructor: 'Javier & Rebeca (Son Mambo)'
        },
        Jueves: {
          name: 'FUNCIONAL MUJERES',
          category: 'bienestar',
          borderClass: 'border-[#EAB308]',
          textClass: 'text-yellow-200',
          bgClass: 'bg-yellow-500/10 hover:bg-yellow-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(234,179,8,0.35)]',
          instructor: 'Andrea Francés'
        },
        Viernes: {
          name: 'DANZA ORIENTAL AVANZADO',
          category: 'oriental',
          borderClass: 'border-[#A855F7]',
          textClass: 'text-purple-200',
          bgClass: 'bg-purple-500/10 hover:bg-purple-500/20',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]',
          instructor: 'Ana Francés'
        },
        Sábado: {
          name: 'INTENSIVOS',
          category: 'todas',
          borderClass: 'border-[#B91C1C]',
          textClass: 'text-red-200 font-semibold',
          bgClass: 'bg-red-600/15 hover:bg-red-600/25',
          glowClass: 'group-hover:shadow-[0_0_20px_rgba(185,28,28,0.4)]',
          instructor: 'Claustro Docente'
        }
      }
    }
  ];

  const highlightDisciplines = [
    { key: 'todos', label: 'Ver Todo' },
    { key: 'Air Pilates', label: 'Air Pilates', color: '#06B6D4' },
    { key: 'Pilates Mat', label: 'Pilates Mat', color: '#EC4899' },
    { key: 'Yoga', label: 'Yoga', color: '#6366F1' },
    { key: 'Oriental', label: 'Danza Oriental', color: '#A855F7' },
    { key: 'Flamenco', label: 'Flamenco Oriental & Sevillanas', color: '#EF4444' },
    { key: 'Bollywood', label: 'Bollywood', color: '#D946EF' },
    { key: 'Latinos', label: 'Bailes Latinos', color: '#D97706' },
    { key: 'Zumba', label: 'Zumba (Kids/Gold)', color: '#F97316' },
    { key: 'Moderna', label: 'Moderna & Contemporánea', color: '#14B8A6' },
    { key: 'Pre Danza', label: 'Pre Danza & Peques', color: '#8B5CF6' },
    { key: 'Intensivos', label: 'Intensivos Sábado', color: '#B91C1C' },
  ];

  const matchesHighlight = (name: string): boolean => {
    if (highlightFilter === 'todos') return true;
    const lower = name.toLowerCase();
    const filterLower = highlightFilter.toLowerCase();
    if (filterLower === 'oriental') return lower.includes('oriental');
    if (filterLower === 'flamenco') return lower.includes('flamenco') || lower.includes('sevillanas');
    if (filterLower === 'moderna') return lower.includes('moderna') || lower.includes('contemporánea');
    if (filterLower === 'pre danza') return lower.includes('pre danza') || lower.includes('peques');
    return lower.includes(filterLower);
  };

  const filteredItems = SCHEDULE_ITEMS.filter((item) => {
    if (selectedDay !== 'Todos' && item.day !== selectedDay) return false;
    if (selectedShift !== 'todos' && item.shift !== selectedShift) return false;
    if (onlyChildren && item.category !== 'infantil') return false;
    return true;
  });

  return (
    <div className="space-y-24 sm:space-y-36 pt-6 pb-20">
      
      {/* 1. Header with Giant Watermark Typography (Exact same height and alignment as other pages) */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 text-center">
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-10"
          aria-hidden="true"
        >
          <span 
            className="text-[15vw] font-sans font-extrabold uppercase tracking-tighter text-white/[0.025] leading-none"
            style={{ transform: 'translateY(-10%)' }}
          >
            HORARIOS
          </span>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
            PARRILLA SEMANAL
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extralight tracking-tight text-white">
            Horario Semanal & <span className="font-normal text-white">Clases</span>
          </h1>

          <p className="text-xs sm:text-sm text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
            Consulta el cuadrante oficial de lunes a sábado con todas las disciplinas de danza, suspensión, acondicionamiento y bienestar en Alcoy.
          </p>
        </div>
      </section>

      {/* 2. Interactive View Mode & Filter Frosted Capsule */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex justify-center">
          <div className="inline-flex items-center p-1.5 rounded-full glass-capsule border border-white/[0.08] backdrop-blur-md">
            <button
              onClick={() => setViewMode('matrix')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                viewMode === 'matrix'
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Parrilla Semanal (Oficial)</span>
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                viewMode === 'cards'
                  ? 'bg-white text-black font-semibold shadow-md'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Cuadrante por Clases</span>
            </button>
          </div>
        </div>

        {/* Quick Legend Hint */}
        <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-white/40">
          <CheckCircle2 className="w-3.5 h-3.5 text-white/70" />
          <span>Haz clic en cualquier clase para reservar clase de prueba</span>
        </div>
      </section>

      {/* ============================================================== */}
      {/* VISTA 1: PARRILLA SEMANAL ARQUITECTÓNICA (REFINADA) */}
      {/* ============================================================== */}
      {viewMode === 'matrix' && (
        <section className="max-w-[1400px] mx-auto px-2 sm:px-6 lg:px-8 space-y-6">
          
          {/* Interactive Highlight Chips Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.015] hairline-border">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/50 shrink-0">
              <Sparkles className="w-3.5 h-3.5 text-white/70" />
              <span>Resaltar disciplina:</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {highlightDisciplines.map((d) => {
                const isActive = highlightFilter === d.key;
                return (
                  <button
                    key={d.key}
                    onClick={() => setHighlightFilter(d.key)}
                    className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all duration-200 border flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-white text-black border-white shadow-sm font-semibold'
                        : 'bg-white/[0.02] text-white/50 border-white/[0.08] hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {d.color && (
                      <span 
                        className="w-1.5 h-1.5 rounded-full shrink-0" 
                        style={{ backgroundColor: d.color }}
                      />
                    )}
                    <span>{d.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Notice for Mobile */}
          <div className="md:hidden flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white/50">
            <Info className="w-4 h-4 text-white/70 shrink-0" />
            <span>Desliza horizontalmente la tabla para ver todos los días de la semana.</span>
          </div>

          {/* The Sleek Architectural Timetable Matrix */}
          <div className="rounded-3xl hairline-border p-3 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-2xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              
              <table className="w-full min-w-[980px] border-separate border-spacing-2">
                
                {/* Column Headers */}
                <thead>
                  <tr>
                    <th className="w-36 p-3 rounded-2xl bg-white/[0.05] text-white font-mono font-medium text-xs tracking-wider uppercase hairline-border text-center">
                      HORARIO
                    </th>
                    {weekDays.map((day) => (
                      <th
                        key={day}
                        className="p-3 rounded-2xl bg-white/[0.05] text-white font-mono font-medium text-xs tracking-wider uppercase hairline-border text-center"
                      >
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {TIMETABLE_ROWS.map((row) => (
                    <tr key={row.time}>
                      
                      {/* Hour cell */}
                      <td className="p-3 rounded-xl bg-white/[0.02] hairline-border text-center align-middle">
                        <div className="font-mono text-xs font-semibold text-white/90 whitespace-nowrap">
                          {row.time}
                        </div>
                      </td>

                      {/* Day cells */}
                      {weekDays.map((day) => {
                        const cell = row.cells[day];
                        if (!cell) {
                          return (
                            <td 
                              key={day} 
                              className="p-2 rounded-xl bg-white/[0.005] border border-white/[0.02] text-center align-middle"
                            >
                              <span className="text-white/10 text-xs select-none">·</span>
                            </td>
                          );
                        }

                        const isHighlighted = matchesHighlight(cell.name);
                        const isDimmed = highlightFilter !== 'todos' && !isHighlighted;

                        return (
                          <td 
                            key={day} 
                            className="p-1 align-middle transition-opacity duration-300"
                            style={{ opacity: isDimmed ? 0.25 : 1 }}
                          >
                            <button
                              onClick={() => onOpenTrial(`${cell.name} · ${day} (${row.time})`)}
                              className={`w-full group relative p-3 rounded-xl border transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[68px] ${cell.borderClass} ${cell.bgClass} ${cell.glowClass} hover:scale-[1.02] active:scale-[0.98] cursor-pointer`}
                              title={`Reservar clase de prueba de ${cell.name} (${day} ${row.time})`}
                            >
                              <span className={`text-[12px] font-bold tracking-wide uppercase leading-tight ${cell.textClass}`}>
                                {cell.name}
                              </span>

                              {cell.instructor && (
                                <span className="text-[10px] text-white/50 font-light mt-1 opacity-80 group-hover:opacity-100 group-hover:text-white transition-opacity">
                                  {cell.instructor}
                                </span>
                              )}

                              {/* Hover Indicator */}
                              <span className="absolute bottom-1 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-[9px] text-white/70 font-mono flex items-center gap-0.5">
                                Probar <ArrowUpRight className="w-2.5 h-2.5" />
                              </span>
                            </button>
                          </td>
                        );
                      })}

                    </tr>
                  ))}
                </tbody>

              </table>

            </div>

            {/* Bottom Timetable Legend */}
            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="text-white font-medium">Claves de color:</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4]"></span> Air Pilates</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#EC4899]"></span> Pilates Mat</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#6366F1]"></span> Yoga</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#A855F7]"></span> Danza Oriental</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#D946EF]"></span> Bollywood</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]"></span> Flamenco & Sevillanas</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#D97706]"></span> Bailes Latinos</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#F97316]"></span> Zumba</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6]"></span> Contemporánea & Moderna</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]"></span> Pre Danza</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#B91C1C]"></span> Intensivos</span>
              </div>

              <div className="shrink-0 text-white/40 font-light flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-white/70" />
                <span>Haz clic en cualquier clase para reservar clase de prueba</span>
              </div>
            </div>

          </div>

        </section>
      )}

      {/* ============================================================== */}
      {/* VISTA 2: FILTRO POR DÍAS Y CUADRANTE DINÁMICO */}
      {/* ============================================================== */}
      {viewMode === 'cards' && (
        <>
          {/* Minimalist Interactive Filter Controls */}
          <section className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="rounded-3xl hairline-border p-6 sm:p-8 space-y-6 bg-white/[0.015] backdrop-blur-2xl">
              
              {/* Day Selector Pills */}
              <div className="space-y-3">
                <span className="text-xs font-medium uppercase tracking-wider text-white/50 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-white/70" />
                  Día de la semana
                </span>
                <div className="flex flex-wrap gap-2">
                  {days.map((day) => (
                    <button
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                        selectedDay === day
                          ? 'bg-white text-black shadow-md font-semibold'
                          : 'bg-white/[0.02] text-white/60 hairline-border hover:text-white hover:bg-white/[0.06]'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Shift and Children Toggle */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t border-white/[0.06]">
                
                {/* Shifts */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-white/50">Turno:</span>
                  <div className="flex gap-1.5">
                    {[
                      { key: 'todos', label: 'Todos' },
                      { key: 'manana', label: 'Mañanas' },
                      { key: 'tarde', label: 'Tardes' }
                    ].map((s) => (
                      <button
                        key={s.key}
                        onClick={() => setSelectedShift(s.key as 'todos' | 'manana' | 'tarde')}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                          selectedShift === s.key
                            ? 'bg-white/20 text-white border border-white/30'
                            : 'bg-white/[0.02] text-white/50 hover:text-white'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Children Preset */}
                <div>
                  <button
                    onClick={() => setOnlyChildren(!onlyChildren)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 ${
                      onlyChildren
                        ? 'bg-white text-black shadow-md font-semibold'
                        : 'bg-white/[0.03] text-white/60 border border-white/10 hover:text-white'
                    }`}
                  >
                    <span>★ Extraescolares infantiles</span>
                    {onlyChildren && <span className="text-[10px] uppercase font-bold">(Activo)</span>}
                  </button>
                </div>

              </div>

            </div>
          </section>

          {/* Schedule Cards Grid */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs font-mono uppercase tracking-wider text-white/50">
                Mostrando <strong className="text-white font-medium">{filteredItems.length}</strong> clases programadas
              </p>
              <div className="flex items-center gap-4 text-xs text-white/40 font-light">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white"></span> Plazas abiertas
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span> Últimas vacantes
                </div>
              </div>
            </div>

            {filteredItems.length === 0 ? (
              <div className="rounded-3xl hairline-border p-12 text-center space-y-4 bg-white/[0.015]">
                <p className="font-light text-xl text-white">
                  No se encontraron clases con los filtros seleccionados
                </p>
                <p className="text-xs text-white/50 font-light">
                  Prueba a cambiar el día o el turno, o consúltanos directamente para un grupo a medida.
                </p>
                <button
                  onClick={() => {
                    setSelectedDay('Todos');
                    setSelectedShift('todos');
                    setOnlyChildren(false);
                  }}
                  className="btn-pill-white py-2.5 px-6 text-xs uppercase font-medium"
                >
                  Restablecer Filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-3xl hairline-border p-6 flex flex-col justify-between bg-white/[0.015] hover:bg-white/[0.03] hover:border-white/20 transition-all duration-300 group"
                  >
                    <div className="space-y-4">
                      
                      {/* Header Row: Day & Time */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                        <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-white/80">
                          {item.day}
                        </span>
                        <span className="text-xs font-mono font-medium text-white/90 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-white/50" />
                          {item.time}
                        </span>
                      </div>

                      {/* Class Name */}
                      <h3 className="font-sans font-light text-xl text-white leading-snug">
                        {item.name}
                      </h3>

                      {/* Details */}
                      <div className="space-y-2 text-xs text-white/50 font-light">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-white/30 shrink-0" />
                          <span><strong className="text-white font-medium">Ubicación:</strong> {item.room}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-white/30 shrink-0" />
                          <span><strong className="text-white font-medium">Profesor/a:</strong> {item.instructor}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-white/40 shrink-0" />
                          <span><strong className="text-white font-medium">Nivel:</strong> {item.level}</span>
                        </div>
                      </div>

                    </div>

                    {/* Spots left & Action */}
                    <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-white/70 border border-white/10">
                        {item.spotsLeft <= 2 ? `¡Quedan ${item.spotsLeft} plazas!` : `${item.spotsLeft} disponibles`}
                      </span>

                      <button
                        onClick={() => onOpenTrial(`${item.name} · ${item.day} (${item.time})`)}
                        className="btn-pill-white py-2 px-4 text-xs uppercase font-medium flex items-center gap-1 cursor-pointer"
                      >
                        <span>Reservar</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </>
      )}

      {/* 4. Visual Sheet Container (PDF Download) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl hairline-border p-8 sm:p-12 bg-white/[0.015] backdrop-blur-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-sans font-light text-2xl sm:text-3xl text-white">
                Cuadrante Oficial para Impresión
              </h3>
              <p className="text-xs sm:text-sm text-white/50 mt-1 font-light max-w-xl">
                Descarga la parrilla horaria completa de Danzas Al-Azraq en PDF de alta resolución con todas las salas, turnos y grupos de la temporada.
              </p>
            </div>
            
            <a
              href="#descargar"
              onClick={(e) => {
                e.preventDefault();
                alert('Descarga del cuadrante oficial de Danzas Al-Azraq 2026/2027 en PDF iniciada.');
              }}
              className="btn-pill-white py-3.5 px-6 text-xs uppercase tracking-wider gap-2 shrink-0 inline-flex items-center font-medium"
            >
              <Download className="w-4 h-4 text-black" />
              <span>Descargar Parrilla PDF</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
