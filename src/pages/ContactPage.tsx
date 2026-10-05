import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  CheckCircle, 
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ACADEMY_INFO, DISCIPLINES } from '../data/mockData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [targetStudent, setTargetStudent] = useState<'myself' | 'child' | 'other'>('myself');
  const [selectedDiscipline, setSelectedDiscipline] = useState(DISCIPLINES[0].title);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffffff', '#cccccc', '#888888']
      });
    } catch {
      // Confetti fallback
    }
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
            CONTACTO
          </span>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
            ATENCIÓN & MATRÍCULAS
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extralight tracking-tight text-white">
            Inscripciones & <span className="font-normal text-white">Atención</span>
          </h1>

          <p className="text-xs sm:text-sm text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
            Estamos a tu disposición para asesorarte sobre grupos, niveles técnicos y horarios para ti o tu familia en Alcoy.
          </p>
        </div>
      </section>

      {/* 2. Asymmetric Split-Screen Layout: Borderless Minimal Form + Integrated Studio Module */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (7 cols): Borderless Minimal Form */}
          <div className="lg:col-span-7 space-y-8">
            {submitted ? (
              <div className="py-16 px-8 rounded-3xl hairline-border bg-white/[0.015] backdrop-blur-2xl text-center space-y-6 animate-in fade-in duration-300">
                <div className="inline-flex p-4 rounded-full bg-white/[0.06] border border-white/15 text-white">
                  <CheckCircle className="w-10 h-10 stroke-[1.5]" />
                </div>
                
                <div className="inline-block px-4 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono text-white/80 uppercase tracking-wider">
                  ¡Mensaje Enviado!
                </div>

                <h3 className="text-3xl sm:text-5xl font-sans font-extralight text-white">
                  ¡Gracias, {name}!
                </h3>

                <p className="text-xs sm:text-sm text-white/60 max-w-md mx-auto leading-relaxed font-light">
                  Hemos recibido tu consulta sobre <strong className="text-white font-medium">{selectedDiscipline}</strong>. Nuestro equipo de secretaría en Alcoy se pondrá en contacto contigo en las próximas 24 horas laborables.
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-ghost-minimal px-8 py-3 text-xs uppercase tracking-wider font-medium border border-white/10"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono text-white/70">
                      Formulario Directo
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.05] text-[10px] font-mono text-white/40">
                      Respuesta en 24h
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extralight text-white leading-tight">
                    Envíanos tu consulta o <br />
                    <span className="font-normal text-white">solicita plaza</span>
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Target student button pills */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50">
                      ¿A quién va dirigida la inscripción? *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { key: 'myself', label: 'Para mí' },
                        { key: 'child', label: 'Mi hijo/a' },
                        { key: 'other', label: 'Familiar' }
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.key}
                          onClick={() => setTargetStudent(item.key as 'myself' | 'child' | 'other')}
                          className={`py-2 px-1 text-xs font-medium rounded-full border transition-all ${
                            targetStudent === item.key
                              ? 'bg-white text-black border-transparent shadow-sm'
                              : 'bg-white/[0.02] text-white/50 border-white/[0.08] hover:text-white'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name (Borderless Minimal Input) */}
                  <div className="space-y-1">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre y apellidos"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-white/15 focus:border-white focus:outline-hidden py-3 text-sm text-white placeholder-white/20 transition-all font-light"
                    />
                  </div>

                  {/* Phone & Email (Borderless Minimal Inputs) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50">
                        Teléfono / Móvil *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="600 000 000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-transparent border-0 border-b border-white/15 focus:border-white focus:outline-hidden py-3 text-sm text-white placeholder-white/20 transition-all font-light"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tu@correo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border-0 border-b border-white/15 focus:border-white focus:outline-hidden py-3 text-sm text-white placeholder-white/20 transition-all font-light"
                      />
                    </div>
                  </div>

                  {/* Discipline Selection (Borderless Minimal Select) */}
                  <div className="space-y-1">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50">
                      Disciplina o Curso de Interés *
                    </label>
                    <select
                      value={selectedDiscipline}
                      onChange={(e) => setSelectedDiscipline(e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-white/15 focus:border-white focus:outline-hidden py-3 text-sm text-white transition-all font-light cursor-pointer"
                    >
                      {DISCIPLINES.map((d) => (
                        <option key={d.id} value={d.title} className="bg-black text-white">
                          {d.title} ({d.ageGroup})
                        </option>
                      ))}
                      <option value="Clases Particulares" className="bg-black text-white">Clases Particulares / Bodas / Pruebas</option>
                      <option value="Información General" className="bg-black text-white">Información General / Otras consultas</option>
                    </select>
                  </div>

                  {/* Message (Borderless Minimal Textarea) */}
                  <div className="space-y-1">
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-white/50">
                      Mensaje o consulta específica
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Cuéntanos si tienes experiencia previa, tus horarios preferidos o cualquier duda que tengas."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-transparent border-0 border-b border-white/15 focus:border-white focus:outline-hidden py-3 text-sm text-white placeholder-white/20 transition-all font-light resize-none"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="btn-pill-white w-full py-4 text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2"
                    >
                      <span>Enviar Solicitud de Información</span>
                      <ArrowUpRight className="w-4 h-4 text-black" />
                    </button>
                  </div>

                </form>
              </div>
            )}
          </div>

          {/* Right Column (5 cols): Integrated Studio Module */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Integrated Studio Module Card */}
            <div className="rounded-3xl hairline-border p-8 sm:p-10 space-y-8 bg-white/[0.015] backdrop-blur-2xl">
              <div className="space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white/40 block">
                  CANALES DIRECTOS
                </span>
                <h3 className="font-sans font-light text-2xl text-white">
                  Datos de Contacto
                </h3>
              </div>

              {/* Contact Channels */}
              <div className="space-y-3">
                <a
                  href={`tel:${ACADEMY_INFO.phone}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] hairline-border hover:bg-white/[0.05] hover:border-white/20 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-white/[0.04] text-white shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-white/40">
                      Llamada Telefónica
                    </span>
                    <strong className="text-sm text-white block group-hover:text-white/80 transition-colors font-medium">
                      {ACADEMY_INFO.phoneDisplay}
                    </strong>
                    <span className="text-xs text-white/40 font-light">Lunes a Viernes de 16:30 a 21:00</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${ACADEMY_INFO.whatsapp}?text=${encodeURIComponent('Hola Danzas Al-Azraq, me gustaría consultar información sobre vuestras clases.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] hairline-border hover:bg-white/[0.05] hover:border-white/20 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-white/[0.04] text-white shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-white/40">
                      WhatsApp Secretaría
                    </span>
                    <strong className="text-sm text-white block group-hover:text-white/80 transition-colors font-medium">
                      Atención Rápida por Chat
                    </strong>
                    <span className="text-xs text-white/40 font-light">Respuesta en el mismo día</span>
                  </div>
                </a>

                <a
                  href={`mailto:${ACADEMY_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] hairline-border hover:bg-white/[0.05] hover:border-white/20 transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-white/[0.04] text-white shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-white/40">
                      Correo Electrónico
                    </span>
                    <strong className="text-xs sm:text-sm text-white block group-hover:text-white/80 transition-colors font-medium break-all">
                      {ACADEMY_INFO.email}
                    </strong>
                    <span className="text-xs text-white/40 font-light">Para documentación o dudas</span>
                  </div>
                </a>
              </div>

              {/* Studio Physical Location & Schedule */}
              <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-xs sm:text-sm text-white">
                      {ACADEMY_INFO.address}
                    </h4>
                    <p className="text-xs text-white/40 font-light">
                      Barrio de Santa Rosa · Fácil aparcamiento en las inmediaciones
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-xs sm:text-sm text-white">
                      Horario de Atención y Secretaría
                    </h4>
                    <p className="text-xs text-white/40 font-light">
                      {ACADEMY_INFO.scheduleDesk}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Action */}
              <a
                href={ACADEMY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-minimal w-full py-3 text-xs uppercase tracking-wider flex items-center justify-center gap-2 font-medium border border-white/10"
              >
                <span>Abrir en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
