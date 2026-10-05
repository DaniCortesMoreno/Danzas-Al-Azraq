import type { FAQItem } from '../types';

export interface FAQCategory {
  id: string;
  name: string;
  count?: number;
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  { id: 'todas', name: 'Todas las preguntas' },
  { id: 'prueba', name: 'Clase de Prueba & Matrícula' },
  { id: 'niveles', name: 'Niveles & Experiencia' },
  { id: 'ropa', name: 'Ropa & Material' },
  { id: 'latinos', name: 'Bailes Latinos (Pareja)' },
  { id: 'salud', name: 'Salud, Pilates & Espalda' },
  { id: 'gala', name: 'Teatro Calderón & Niños' },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'prueba',
    question: '¿Cómo funciona la primera clase de prueba gratuita?',
    answer: 'La clase de prueba es 100% gratuita y sin ningún tipo de compromiso. Solo tienes que reservar tu plaza seleccionando la disciplina y el horario que mejor te venga. Te recibiremos en nuestra sede de Carrer Oliver, conocerás a tu maestro/a, te integrarás en el grupo y podrás experimentar la metodología en primera persona antes de decidir si te matriculas.'
  },
  {
    category: 'niveles',
    question: '¿Es necesario tener experiencia previa o buena condición física?',
    answer: 'En absoluto. Más del 65% de nuestros alumnos adultos comenzaron desde cero absoluto. En Danzas Al-Azraq contamos con grupos de iniciación donde se desglosan los pasos desde la base más elemental con paciencia, corrección postural y un ambiente cercano libre de juicios.'
  },
  {
    category: 'latinos',
    question: '¿Necesito venir con pareja para apuntarme a Salsa y Bachata?',
    answer: 'No es necesario en absoluto. En nuestras clases con Javier y Rebeca (Son Mambo) la mayoría de personas vienen solas. Realizamos dinámicas de rotación continua de pareja y ruedas para que todo el mundo practique tanto la conducción como el estilo en un ambiente muy social y divertido.'
  },
  {
    category: 'salud',
    question: 'Tengo dolor de espalda o hernia lumbar, ¿puedo hacer Air Pilates o Pilates Mat?',
    answer: 'Sí, de hecho es una de las recomendaciones más habituales de fisioterapeutas y médicos en Alcoy. El Air Pilates con telas aéreas en suspensión permite realizar tracción y descompresión de las vértebras lumbares sin compresión por gravedad. Ana Francés cuenta con más de 20 años de especialización biomecánica y adapta cada ejercicio a tus particularidades.'
  },
  {
    category: 'ropa',
    question: '¿Qué ropa y calzado debo llevar el primer día?',
    answer: 'Para tu primera sesión solo necesitas ropa cómoda y elástica (mallas o pantalón de deporte y camiseta transpirable). Para Pilates, Yoga y Danza Oriental se trabaja descalzo o con calcetines antideslizantes. Para Danza Urbana o Contemporánea calzado deportivo limpio o calcetines, y para Bailes Latinos calzado cómodo con suela limpia que permita pivotar.'
  },
  {
    category: 'gala',
    question: '¿A partir de qué edad pueden empezar los niños?',
    answer: 'A partir de los 3 años en nuestro grupo estrella de Pre Danza Infantil y Creativa. Mediante cuentos motores, música clásica adaptada y juegos pedagógicos, los más pequeños desarrollan coordinación motora, oído musical, lateralidad y sociabilidad en un entorno acogedor y seguro.'
  },
  {
    category: 'gala',
    question: '¿Todos los alumnos participan en la Gala del Teatro Calderón?',
    answer: 'Sí, la participación en la Gala de fin de curso en el emblemático Teatro Calderón de Alcoy está abierta a todos los grupos de la escuela (desde los peques de 3 años hasta los adultos y niveles avanzados). Es una experiencia inolvidable con diseño de luces profesional, vestuarios y escenario grande, aunque su participación es siempre voluntaria.'
  },
  {
    category: 'prueba',
    question: '¿Qué pasa si un día no puedo asistir a mi clase habitual?',
    answer: 'Ofrecemos flexibilidad para recuperar tus clases dentro del mismo mes en otros horarios disponibles de tu misma disciplina o en modalidades afines (como Pilates o Yoga), coordinándolo previamente con secretaría para garantizar que los grupos no superen el aforo óptimo.'
  },
  {
    category: 'prueba',
    question: '¿Dónde está exactamente la escuela en Alcoy y cómo puedo llegar?',
    answer: 'Nuestra sede central se encuentra en Carrer Oliver, 24, 03802 Alcoy (Alicante), en una zona céntrica y de fácil acceso a pie o en transporte urbano. En las calles aledañas dispones de zonas de estacionamiento regulado y aparcamientos públicos cercanos.'
  },
  {
    category: 'niveles',
    question: '¿Ofrecéis preparación técnica para conservatorios o audiciones?',
    answer: 'Sí. Nuestra profesora Andrea Francés, titulada superior por el Conservatorio Profesional de Danza de Alicante, imparte programas de perfeccionamiento en Danza Clásica y Contemporánea con preparación técnica de barra, centro, diagonales y audiciones oficiales.'
  }
];
