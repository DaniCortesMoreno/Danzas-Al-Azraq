/**
 * Schedule Actions Utility for Danzas Al-Azraq
 * - Generates Google Calendar URLs with recurrent class rules and location
 * - Generates and downloads RFC-5545 .ics files for Apple Calendar / Outlook / iOS
 * - Generates WhatsApp share links with pre-formatted invitation message
 */

export interface ClassActionPayload {
  name: string;
  day: string;
  time: string;
  instructor?: string;
  room?: string;
}

const DAY_INDEX_MAP: Record<string, number> = {
  domingo: 0,
  lunes: 1,
  martes: 2,
  miércoles: 3,
  miercoles: 3,
  jueves: 4,
  viernes: 5,
  sábado: 6,
  sabado: 6
};

const STUDIO_ADDRESS = 'Carrer Oliver, 24, 03802 Alcoy, Alicante';
const STUDIO_NAME = 'Danzas Al-Azraq · Escuela de Danza';

/**
 * Calculates the next upcoming date for a given day name and time range (e.g. 'Martes', '19:30 - 20:30')
 */
function getNextClassDate(dayName: string, timeRange: string): { start: Date; end: Date } {
  const normalizedDay = dayName.toLowerCase().trim();
  const targetDay = DAY_INDEX_MAP[normalizedDay] ?? 1;

  // Parse timeRange like "8:15 - 9:15" or "19:30 - 20:30"
  const [startTimeStr = '18:00', endTimeStr = '19:00'] = timeRange.split('-').map((s) => s.trim());
  const [startHour = 18, startMin = 0] = startTimeStr.split(':').map(Number);
  const [endHour = 19, endMin = 0] = endTimeStr.split(':').map(Number);

  const now = new Date();
  const currentDay = now.getDay();
  let daysUntil = (targetDay - currentDay + 7) % 7;
  if (daysUntil === 0) {
    // If today is the day, check if class already passed
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const classMinutes = startHour * 60 + startMin;
    if (currentMinutes > classMinutes) {
      daysUntil = 7; // schedule for next week
    }
  }

  const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysUntil, startHour, startMin, 0);
  const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysUntil, endHour, endMin, 0);

  return { start: startDate, end: endDate };
}

/**
 * Formats a Date object to UTC string format YYYYMMDDTHHmmssZ
 */
function formatUtcIso(d: Date): string {
  return d
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}/, '');
}

/**
 * Formats a Date object to local ISO format YYYYMMDDTHHmmss
 */
function formatLocalIso(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  const year = d.getFullYear();
  const month = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hours = pad(d.getHours());
  const minutes = pad(d.getMinutes());
  const seconds = pad(d.getSeconds());
  return `${year}${month}${day}T${hours}${minutes}${seconds}`;
}

/**
 * Generates direct Google Calendar link
 */
export function getGoogleCalendarUrl(payload: ClassActionPayload): string {
  const { start, end } = getNextClassDate(payload.day, payload.time);
  const title = `Clase de ${payload.name} · Danzas Al-Azraq`;
  const details = [
    `Clase de ${payload.name} en Danzas Al-Azraq.`,
    payload.instructor ? `Profesor/a: ${payload.instructor}` : '',
    payload.room ? `Sala: ${payload.room}` : '',
    `Horario semanal: ${payload.day} (${payload.time})`,
    `Ubicación: ${STUDIO_ADDRESS}`,
    'Web: https://danzasalazraq.es'
  ]
    .filter(Boolean)
    .join('\n');

  const datesParam = `${formatUtcIso(start)}/${formatUtcIso(end)}`;
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: datesParam,
    details: details,
    location: `${STUDIO_NAME}, ${STUDIO_ADDRESS}`,
    recur: 'RRULE:FREQ=WEEKLY'
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Generates and triggers download of .ics file for Apple Calendar / Outlook / iOS
 */
export function downloadIcsCalendar(payload: ClassActionPayload): void {
  const { start, end } = getNextClassDate(payload.day, payload.time);
  const title = `Clase de ${payload.name} - Danzas Al-Azraq`;
  const description = [
    `Clase de ${payload.name} en Danzas Al-Azraq.`,
    payload.instructor ? `Profesor/a: ${payload.instructor}` : '',
    payload.room ? `Sala: ${payload.room}` : '',
    `Horario: ${payload.day} de ${payload.time}`,
    'Dirección: Carrer Oliver, 24, Alcoy',
    'Web: https://danzasalazraq.es'
  ]
    .filter(Boolean)
    .join('\\n');

  const uid = `${Date.now()}-${Math.random().toString(36).substring(2, 9)}@danzasalazraq.es`;

  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Danzas Al-Azraq//Horario Clases//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${formatUtcIso(new Date())}`,
    `DTSTART:${formatLocalIso(start)}`,
    `DTEND:${formatLocalIso(end)}`,
    'RRULE:FREQ=WEEKLY',
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${STUDIO_ADDRESS}`,
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-PT60M',
    'ACTION:DISPLAY',
    `DESCRIPTION:Recordatorio de clase: ${payload.name} en 1 hora`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ];

  const icsContent = icsLines.join('\r\n');
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  const sanitizedName = payload.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  link.download = `al-azraq-${sanitizedName}-${payload.day.toLowerCase()}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

/**
 * Formats WhatsApp invitation message and opens WhatsApp with 1 click
 */
export function shareClassViaWhatsApp(payload: ClassActionPayload): void {
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : 'https://danzasalazraq.es';
  
  const text = 
`¡Oye, mira esta clase de Danzas Al-Azraq, vamos a probar! 💃✨

📌 Clase: ${payload.name}
🗓️ Horario: ${payload.day} (${payload.time})
📍 Estudio: Carrer Oliver, 24, Alcoy (Danzas Al-Azraq)

¿Nos apuntamos juntos a una clase de prueba gratuita?
👉 Reserva o infórmate aquí: ${currentOrigin}/horarios`;

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}
