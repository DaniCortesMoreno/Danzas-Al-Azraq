export type DisciplineCategory = 
  | 'todas'
  | 'infantil'
  | 'bienestar'
  | 'urbana'
  | 'latinos'
  | 'oriental';

export interface Discipline {
  id: string;
  title: string;
  category: DisciplineCategory;
  categoryLabel: string;
  ageGroup: string;
  level: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  scheduleSummary: string;
  instructorName: string;
  popularBadge?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  disciplines: string[];
  image: string;
  bio: string;
  training: string;
  quote: string;
  badges: string[];
}

export interface ClassScheduleItem {
  id: string;
  day: 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes' | 'Sábado';
  shift: 'manana' | 'tarde';
  time: string;
  name: string;
  room: string;
  instructor: string;
  category: DisciplineCategory;
  level: string;
  spotsLeft: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  discipline: string;
  quote: string;
  avatarBg: string;
  stars: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'galas' | 'ensayos' | 'bienestar' | 'eventos';
  categoryLabel: string;
  image: string;
  description: string;
  year: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
