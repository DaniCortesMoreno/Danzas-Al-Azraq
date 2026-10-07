import type { Discipline, FacultyMember, ClassScheduleItem, Testimonial, GalleryItem, FAQItem } from '../types';

export const ACADEMY_INFO = {
  name: 'Danzas Al-Azraq',
  slogan: 'Expresa, mueve y siente el arte de la danza en Alcoy',
  address: 'Carrer Perú, 82, 03803 Alcoi, Alicante',
  phone: '+34 965 54 82 10',
  phoneDisplay: '965 54 82 10',
  whatsapp: '+34 644 88 92 15',
  email: 'info@danzasalazraq.es',
  instagram: '@danzasalazraq',
  facebook: 'Danzas Al-Azraq Alcoy',
  hours: 'Lunes a Viernes: 08:00 - 13:30 / 16:00 - 21:30 | Sábados: 09:00 - 14:00',
  scheduleDesk: 'Lunes a Jueves de 16:30 a 20:30 h',
  googleMapsUrl: 'https://maps.google.com/?q=Carrer+Per%C3%BA,+82,+03803+Alcoi,+Alicante',
  stats: {
    years: '+15',
    students: '+500',
    teachers: '8',
    satisfaction: '100%'
  }
};

export const DISCIPLINES: Discipline[] = [
  {
    id: 'air-pilates',
    title: 'Air Pilates (Columpio & Telas Aéreas)',
    category: 'bienestar',
    categoryLabel: 'Salud & Suspensión',
    ageGroup: 'Adultos y Jóvenes',
    level: 'Todos los niveles (Grupos reducidos)',
    image: '/images/pilates-wellness.jpg',
    shortDesc: 'Pilates en ingravidez con telas aéreas y columpio de inversión. Descompresión vertebral, fuerza del core y estiramiento profundo.',
    fullDesc: 'Una de las disciplinas más innovadoras y demandadas de Danzas Al-Azraq. La suspensión en tela elimina la carga de compresión sobre las articulaciones y los discos lumbares, facilitando posturas de elongación que en suelo resultan difíciles. Mejora el tono postural profundo, la alineación fascial y la circulación linfática con la máxima seguridad.',
    benefits: ['Descompresión total de discos intervertebrales y columna', 'Fortalecimiento de la faja abdominal en 3 dimensiones', 'Elongación miofascial sin impacto articular', 'Sensación de ligereza, confianza corporal y bienestar'],
    scheduleSummary: 'Lunes 18:30 | Martes 09:30 | Miércoles 18:30',
    instructorName: 'Ana Francés',
    popularBadge: '★ Exclusivo en Alcoy'
  },
  {
    id: 'pilates-mat',
    title: 'Pilates Mat & Corrección Postural',
    category: 'bienestar',
    categoryLabel: 'Salud y Postura',
    ageGroup: 'Jóvenes y Adultos',
    level: 'Iniciación a Avanzado',
    image: '/images/pilates-wellness.jpg',
    shortDesc: 'Reeducación de la columna, fortalecimiento del core, movilidad articular y alivio de lumbalgias sobre suelo técnico.',
    fullDesc: 'Sesiones personalizadas en grupos reducidos sobre esterillas con implementos específicos (fitball, foam roller, bandas elásticas y aros mágicos). Dirigido por Ana Francés con más de 20 años de experiencia biomecánica. Ideal para aliviar tensiones crónicas de espalda causadas por el trabajo o ganar fuerza abdominal funcional.',
    benefits: ['Alivio demostrable de dolores lumbares y cervicales', 'Tonificación profunda de la faja lumbo-abdominal', 'Control respiratorio diafragmático y calma mental', 'Higiene postural aplicable al día a día'],
    scheduleSummary: 'Lunes 09:30 | Martes 19:30 | Miércoles 09:30 y 15:30 | Jueves 19:30',
    instructorName: 'Ana Francés',
    popularBadge: 'Grupos Reducidos'
  },
  {
    id: 'yoga',
    title: 'Hatha Yoga & Consciencia Corporal',
    category: 'bienestar',
    categoryLabel: 'Bienestar & Calma',
    ageGroup: 'Adultos',
    level: 'Todos los niveles',
    image: '/images/studio-alcoy.jpg',
    shortDesc: 'Asanas dinámicas, pranayama diafragmático y meditación guiada en turnos de mañana y tarde para equilibrar cuerpo y mente.',
    fullDesc: 'Comienza o finaliza el día armonizando tu respiración y recuperando la movilidad articular en nuestro estudio diáfano. Práctica adaptada tanto para principiantes como para practicantes habituales que buscan desentumecer articulaciones, reducir el cortisol y cultivar serenidad.',
    benefits: ['Elasticidad fascial y descongestión articular', 'Reducción del estrés y mejora del descanso nocturno', 'Fuerza isométrica sin rigidez', 'Conexión consciente entre cuerpo y mente'],
    scheduleSummary: 'Martes y Jueves 08:15 (Mañanas) | Lunes 15:30 | Viernes 09:30',
    instructorName: 'Ana Francés'
  },
  {
    id: 'danza-oriental',
    title: 'Danza Oriental (Iniciación, Medio, Avanzado & Peques)',
    category: 'oriental',
    categoryLabel: 'Identidad Al-Azraq',
    ageGroup: 'Todas las edades (Peques, Jóvenes y Adultas)',
    level: 'Desde Iniciación (1) hasta Grupo de Gala',
    image: '/images/fusion-flamenco.jpg',
    shortDesc: 'La disciplina insignia de la academia: ondulaciones árabes, disociación pélvica, giros con velo y presencia escénica.',
    fullDesc: 'El corazón de Danzas Al-Azraq desde su fundación. Exploramos la delicadeza y potencia de la danza del vientre egipcia y libanesa, el trabajo con velos de seda, crótalos, sables y percusión árabe. Un camino de empoderamiento, coordinación fina, salud pélvica y expresión artística para todas las edades.',
    benefits: ['Movilidad pélvica, lumbar y tonificación de suelo pélvico', 'Aislamiento muscular preciso y elegancia postural', 'Autoestima, sororidad y disfrute de la propia feminidad', 'Participación estelar en la Gala anual del Teatro Calderón'],
    scheduleSummary: 'Lunes 19:30 | Jueves 09:30 y 15:30 | Viernes 17:30 (Peques) y 20:30 (Avanzado)',
    instructorName: 'Ana Francés',
    popularBadge: '★ Disciplina Fundacional'
  },
  {
    id: 'flamenco-oriental',
    title: 'Flamenco Oriental & Fusión Étnica',
    category: 'oriental',
    categoryLabel: 'Fusión de Raíz',
    ageGroup: 'Jóvenes y Adultas',
    level: 'Iniciación y Medio/Avanzado',
    image: '/images/fusion-flamenco.jpg',
    shortDesc: 'Fusión única donde la garra, el braceo y el zapateado flamenco se abrazan a la ondulación hipnótica oriental.',
    fullDesc: 'Creada por Ana Francés y Paqui Ruiz como seña de identidad artística de nuestra escuela. Combina la fuerza de los palos flamencos con la sinuosidad de Oriente, bailando con abanicos de seda, mantones y percusión en vivo.',
    benefits: ['Coordinación rítmica y fuerza en el tren inferior', 'Braceo expresivo y elegancia en muñecas y manos', 'Fuerza interpretativa y temperamento escénico', 'Montajes coreográficos originales de gran belleza'],
    scheduleSummary: 'Martes 15:30 (Inicio) y 20:30 (Fusión Avanzada)',
    instructorName: 'Ana Francés & Paqui Ruiz'
  },
  {
    id: 'bollywood',
    title: 'Bollywood (Iniciación & Avanzado)',
    category: 'oriental',
    categoryLabel: 'Danzas del Mundo',
    ageGroup: 'Todas las edades',
    level: 'Iniciación y Avanzado',
    image: '/images/fusion-flamenco.jpg',
    shortDesc: 'Color, energía arrolladora, mudras de la India y coreografías cinematográficas con Paqui Ruiz.',
    fullDesc: 'La danza más festiva y alegre de la India. Con una técnica que combina el folclore bhangra, kathak clásico y el dinamismo comercial del cine de Mumbai. Sesiones divertidas donde se aprende la expresividad facial (navarasas), el ritmo sincopado y mudras sagrados.',
    benefits: ['Liberación de endorfinas y energía altamente positiva', 'Coordinación psicomotriz rápida y expresividad de ojos y manos', 'Excelente ejercicio cardiovascular y resistencia', 'Vestuarios espectaculares y números de gran éxito en gala'],
    scheduleSummary: 'Viernes 18:30 (Iniciación) y 19:30 (Avanzado)',
    instructorName: 'Paqui Ruiz',
    popularBadge: 'Pura Alegría'
  },
  {
    id: 'sevillanas',
    title: 'Sevillanas Tradicionales & Compás',
    category: 'latinos',
    categoryLabel: 'Tradición & Fiesta',
    ageGroup: 'Jóvenes y Adultos',
    level: 'Abierto a todos los niveles',
    image: '/images/fusion-flamenco.jpg',
    shortDesc: 'Aprende las 4 coplas completas con soltura, braceo elegante y compás para disfrutarlas en ferias y celebraciones.',
    fullDesc: 'Impartido por Paqui Ruiz para que domines los pasos, cruces, pasadas y careos de las cuatro sevillanas con garbo y naturalidad. Aprende tanto el papel de guía como el de seguimiento para bailar con soltura con cualquier pareja.',
    benefits: ['Dominio completo de las 4 coplas y el compás tradicional', 'Colocación de brazos, cabeza y postura orgullosa', 'Seguridad en ferias de abril, romerías y fiestas', 'Ambiente cercano, ameno y divertido'],
    scheduleSummary: 'Martes 18:30 - 19:30',
    instructorName: 'Paqui Ruiz'
  },
  {
    id: 'danza-contemporanea',
    title: 'Danza Contemporánea (Peques & Juvenil/Adultos)',
    category: 'urbana',
    categoryLabel: 'Danza de Escenario',
    ageGroup: 'Peques (6-11 años) y Jóvenes/Adultos',
    level: 'Técnica Conservatorio & Expresión',
    image: '/images/hero-dance.jpg',
    shortDesc: 'Fluidez, peso del cuerpo, trabajo de suelo (floorwork), suspensiones y saltos guiados por Andrea Francés.',
    fullDesc: 'Formación impartida por Andrea Francés, titulada por el Conservatorio Profesional de Danza José Espadero. Desarrollamos la conexión con la gravedad, el uso del espacio tridimensional y la honestidad interpretativa, dotando al bailarín de una sólida base técnica para audiciones y montajes escénicos.',
    benefits: ['Técnica corporal de nivel superior y colocación anatómica', 'Dominio del trabajo de suelo sin dolor ni impacto lesivo', 'Creatividad coreográfica y versatilidad escénica', 'Preparación para conservatorios profesionales'],
    scheduleSummary: 'Miércoles 17:30 (General) | Jueves 18:30 (Peques)',
    instructorName: 'Andrea Francés',
    popularBadge: 'Técnica Conservatorio'
  },
  {
    id: 'danza-moderna',
    title: 'Danza Moderna (Peques, Infantil & Juvenil)',
    category: 'urbana',
    categoryLabel: 'Modern Jazz & Urban',
    ageGroup: 'Peques (4-8 años), Infantil y Juvenil',
    level: 'Todos los niveles',
    image: '/images/danza-urbana.jpg',
    shortDesc: 'Ritmo, energía de videoclip, jazz moderno y coreografías dinámicas con los éxitos musicales del momento.',
    fullDesc: 'La disciplina donde niños y jóvenes canalizan su vitalidad a través del movimiento coordinado. Aprenden técnica de giros, saltos, isolations y coreografías en grupo que fomentan el compañerismo y la confianza sobre el escenario.',
    benefits: ['Desarrollo del sentido del ritmo y la coordinación ágil', 'Acondicionamiento físico divertido y trabajo en equipo', 'Actitud escénica y desinhibición personal', 'Coreografías modernas con hits actuales'],
    scheduleSummary: 'Miércoles 16:30 (General) | Jueves 17:30 (Peques)',
    instructorName: 'Andrea Francés'
  },
  {
    id: 'pre-danza',
    title: 'Pre Danza Infantil (3 a 6 años)',
    category: 'infantil',
    categoryLabel: 'Semillero Infantil',
    ageGroup: '3 a 6 años',
    level: 'Iniciación Lúdica',
    image: '/images/ballet-infantil.jpg',
    shortDesc: 'Primer contacto con el ballet clásico, el espacio escénico y la psicomotricidad a través del juego pedagógico guiado.',
    fullDesc: 'El grupo más querido de la escuela. En un entorno acogedor y seguro, los más pequeños descubren las posibilidades de su cuerpo mediante cuentos motores, música clásica adaptada y dinámicas de grupo que sientan las bases de una postura saludable y amor duradero por el arte.',
    benefits: ['Desarrollo psicomotriz temprano, equilibrio y lateralidad', 'Escucha atenta y oído musical afinado', 'Socialización respetuosa y expresión corporal desinhibida', 'Emocionante participación en la Gala del Teatro Calderón'],
    scheduleSummary: 'Martes 17:30 - 18:30',
    instructorName: 'Andrea Francés',
    popularBadge: '★ Extraescolar Estrella'
  },
  {
    id: 'bailes-latinos',
    title: 'Bailes Latinos (Salsa & Bachata con Son Mambo)',
    category: 'latinos',
    categoryLabel: 'Bailes Sociales',
    ageGroup: 'Jóvenes y Adultos',
    level: 'Nivel 1 (Iniciación) y Nivel 2 (Medio/Avanzado)',
    image: '/images/latin-salsa.jpg',
    shortDesc: 'Aprende salsa cubana, salsa en línea y bachata sensual con los campeones y directores de Son Mambo en Alcoy.',
    fullDesc: 'Las clases con el ambiente social más divertido de la comarca. Impartidas por Javier Blanquer y Rebeca Morales (Son Mambo). No necesitas pareja previa: trabajamos técnica de conducción corporal, musicalidad de la clave, giros fluidos y estilo chico/chica listos para disfrutar en la pista de baile.',
    benefits: ['Bailar con soltura y naturalidad en pistas sociales', 'Comprensión del tiempo musical caribeño y la clave', 'Nuevas amistades y eventos de baile con la comunidad', 'Excelente ejercicio cardiovascular y agilidad de pies'],
    scheduleSummary: 'Lunes 20:30 | Miércoles 19:30 (Nivel 1) y 20:30 (Nivel 2)',
    instructorName: 'Javier Blanquer & Rebeca Morales (Son Mambo)'
  },
  {
    id: 'zumba-fitness',
    title: 'Zumba, Zumba Gold & Zumba Kids',
    category: 'latinos',
    categoryLabel: 'Fitness & Ritmo',
    ageGroup: 'Kids (infantil), Adultos y Senior (Gold)',
    level: 'Para cualquier condición física',
    image: '/images/danza-urbana.jpg',
    shortDesc: 'Cardio baile con ritmos latinos y urbanos. Opciones adaptadas para niños (Kids), adultos (Zumba) y bajo impacto (Gold).',
    fullDesc: 'La forma más divertida de quemar calorías y ponerse en forma bailando. Con adaptaciones específicas: Zumba Kids para peques con canciones infantiles y dinámicas rítmicas; Zumba Gold para personas que buscan ejercicio articular suave sin saltos lesivos; y Zumba tradicional de alta energía.',
    benefits: ['Aceleración del metabolismo y quema calórica saludable', 'Tonificación muscular al son de merengue, cumbia y reggaetón', 'Cero aburrimiento: cada clase es una fiesta de baile', 'Mejora de la resistencia cardiorrespiratoria'],
    scheduleSummary: 'Lunes 10:45 (Gold) y 17:30 (Kids) | Jueves 10:45 (Gold) | Viernes 15:30 (Zumba)',
    instructorName: 'Paqui Ruiz'
  },
  {
    id: 'funcional-mujeres',
    title: 'Entrenamiento Funcional Mujeres',
    category: 'bienestar',
    categoryLabel: 'Acondicionamiento Físico',
    ageGroup: 'Mujeres (todas las edades)',
    level: 'Adaptable a cualquier condición',
    image: '/images/pilates-wellness.jpg',
    shortDesc: 'Fuerza, tonificación de glúteos, piernas y abdomen (GAP), estabilidad del core y agilidad femenina con biomecánica de danza.',
    fullDesc: 'Diseñado específicamente para las necesidades biomecánicas y metabólicas de la mujer. Combina ejercicios con peso corporal, bandas elásticas y circuitos funcionales que esculpen la figura de forma armónica sin hipertrofiar, protegiendo el suelo pélvico y las articulaciones.',
    benefits: ['Fuerza funcional, resistencia y tonificación armónica', 'Cuidado específico de la salud articular y suelo pélvico', 'Aceleración del gasto calórico y densidad ósea', 'Ambiente motivador y de apoyo mutuo'],
    scheduleSummary: 'Jueves 20:30 - 21:30',
    instructorName: 'Andrea Francés'
  },
  {
    id: 'intensivos-sabado',
    title: 'Intensivos & Monográficos de Sábado',
    category: 'todas',
    categoryLabel: 'Masterclasses & Ensayos',
    ageGroup: 'Jóvenes y Adultos',
    level: 'Monográficos por niveles',
    image: '/images/gala-calderon.jpg',
    shortDesc: 'Talleres monográficos, masterclasses de profesores invitados y ensayos específicos para la Gala del Teatro Calderón.',
    fullDesc: 'Los sábados por la tarde, Danzas Al-Azraq abre sus salas para formación intensiva monográfica: técnicas avanzadas de abanico, colocación de puntas, styling latino, percusión corporal o ensayos de cuadros coreográficos para las grandes producciones.',
    benefits: ['Perfeccionamiento técnico en bloques de fin de semana', 'Formación con maestros y bailarines invitados', 'Ensayos inmersivos de vestuario e iluminación', 'Compatible para quienes no pueden asistir entre semana'],
    scheduleSummary: 'Sábados de 16:30 a 21:30 (Módulos continuos de 1h)',
    instructorName: 'Claustro Completo & Profesores Invitados'
  }
];

export const FACULTY: FacultyMember[] = [
  {
    id: 'ana-frances',
    name: 'Ana Francés',
    role: 'Directora & Creadora de Danzas Al-Azraq',
    disciplines: ['Danza Oriental', 'Pilates Suelo', 'Baile Moderno', 'Estilos'],
    image: '/images/faculty/ana-frances.png',
    bio: 'Fundadora y alma mater de Danzas Al-Azraq. Con más de 20 años de trayectoria pedagógica y artística en Alcoy y la Comunidad Valenciana, Ana ha convertido la academia en un hogar creativo donde la disciplina técnica convive con el cariño humano y la motivación constante.',
    training: 'Certificada internacionalmente en Danza Oriental y Fusión, Instructora Titulada de Pilates Mat & Studio por la Federación Española, formada con maestros de Egipto, Líbano y España.',
    quote: 'La danza no es solo una secuencia de pasos; es la forma más honesta de encontrarse con uno mismo y volar.',
    badges: ['+20 Años Exp.', 'Dirección Artística', 'Pilates Certificada']
  },
  {
    id: 'paqui-ruiz',
    name: 'Paqui Ruiz',
    role: 'Bailarina Profesional & Docente',
    disciplines: ['Bollywood', 'Fusión Flamenco Oriental', 'Sevillanas', 'Comba', 'Danza Oriental'],
    image: '/images/faculty/paqui-ruiz.png',
    bio: 'Pura energía y pasión sobre el escenario. Paqui contagia su vitalidad inagotable en cada sesión, guiando a sus alumnas a descubrir el magnetismo de la fusión flamenco-oriental y la riqueza colorida de las danzas del mundo.',
    training: 'Bailarina solista con amplia experiencia en festivales nacionales, formada en danzas folclóricas del Mediterráneo, flamenco escénico y danza clásica de la India.',
    quote: 'Bailar con el corazón transforma cualquier día gris en una fiesta de color y libertad.',
    badges: ['Energía Pura', 'Fusión Flamenca', 'Bollywood']
  },
  {
    id: 'andrea-frances',
    name: 'Andrea Francés',
    role: 'Bailarina Profesional & Preparadora Física',
    disciplines: ['Baile Moderno', 'Contemporáneo', 'Técnica Clásica', 'Body Pump / GAP', 'Bungee'],
    image: '/images/faculty/andrea-frances.png',
    bio: 'Formada desde su infancia en las mejores aulas de danza de Alicante, Andrea combina la pureza técnica del conservatorio con las últimas tendencias de danza urbana y el entrenamiento funcional de alta exigencia.',
    training: 'Titulada por el Conservatorio Profesional de Danza José Espadero (Alicante) en la especialidad de Danza Contemporánea. Entrenadora personal y especialista en biomecánica del movimiento.',
    quote: 'El cuerpo es el instrumento más versátil y bello que posees; afínalo con constancia y brillará sin esfuerzo.',
    badges: ['Cons. José Espadero', 'Contemporáneo', 'Personal Trainer']
  },
  {
    id: 'javier-rebeca',
    name: 'Javier Blanquer y Rebeca Morales',
    role: 'Directores de Son Mambo & Maestros Latinos',
    disciplines: ['Bailes Latinos', 'Salsa On1/On2', 'Bachata Sensual', 'Kizomba', 'Ladies Mambo'],
    image: '/images/faculty/javier-rebeca.png',
    bio: 'Referentes del baile social y de competición en las comarcas centrales de Alicante. Como fundadores del prestigioso grupo Son Mambo, aportan un método pedagógico basado en la musicalidad fina, el respeto a la pareja y el disfrute social.',
    training: 'Bailarines profesionales y campeones en certámenes de salsa y bachata. Invitados habituales en congresos internacionales de ritmos caribeños.',
    quote: 'El baile social es una conversación sin palabras donde la sonrisa es el mejor idioma.',
    badges: ['Son Mambo', 'Bailes Sociales', 'Campeones Certámenes']
  }
];

export const SCHEDULE_ITEMS: ClassScheduleItem[] = [
  // =================== LUNES ===================
  { id: 'lun-1', day: 'Lunes', shift: 'manana', time: '09:30 - 10:30', name: 'Pilates Mat', room: 'Sala Azraq', instructor: 'Ana Francés', category: 'bienestar', level: 'Suelo & Postura', spotsLeft: 3 },
  { id: 'lun-2', day: 'Lunes', shift: 'manana', time: '10:45 - 11:45', name: 'Zumba Gold', room: 'Sala Alcoy', instructor: 'Paqui Ruiz', category: 'latinos', level: 'Bajo Impacto / Adultos', spotsLeft: 5 },
  { id: 'lun-3', day: 'Lunes', shift: 'tarde', time: '15:30 - 16:30', name: 'Yoga', room: 'Sala Mariola', instructor: 'Ana Francés', category: 'bienestar', level: 'Todos los niveles', spotsLeft: 4 },
  { id: 'lun-4', day: 'Lunes', shift: 'tarde', time: '17:30 - 18:30', name: 'Zumba Kids', room: 'Sala Alcoy', instructor: 'Paqui Ruiz', category: 'infantil', level: 'Infantil (4 a 11 años)', spotsLeft: 4 },
  { id: 'lun-5', day: 'Lunes', shift: 'tarde', time: '18:30 - 19:30', name: 'Air Pilates', room: 'Sala Azraq', instructor: 'Ana Francés', category: 'bienestar', level: 'Telas & Suspensión', spotsLeft: 2 },
  { id: 'lun-6', day: 'Lunes', shift: 'tarde', time: '19:30 - 20:30', name: 'Danza Oriental Iniciación (1)', room: 'Sala Mariola', instructor: 'Ana Francés', category: 'oriental', level: 'Iniciación', spotsLeft: 3 },
  { id: 'lun-7', day: 'Lunes', shift: 'tarde', time: '20:30 - 21:30', name: 'Bailes Latinos', room: 'Sala Alcoy', instructor: 'Javier & Rebeca (Son Mambo)', category: 'latinos', level: 'Salsa & Bachata', spotsLeft: 5 },

  // =================== MARTES ===================
  { id: 'mar-1', day: 'Martes', shift: 'manana', time: '08:15 - 09:15', name: 'Yoga', room: 'Sala Mariola', instructor: 'Ana Francés', category: 'bienestar', level: 'Despertar Consciente', spotsLeft: 4 },
  { id: 'mar-2', day: 'Martes', shift: 'manana', time: '09:30 - 10:30', name: 'Air Pilates', room: 'Sala Azraq', instructor: 'Ana Francés', category: 'bienestar', level: 'Telas & Suspensión', spotsLeft: 2 },
  { id: 'mar-3', day: 'Martes', shift: 'tarde', time: '15:30 - 16:30', name: 'Flamenco Oriental Inicio', room: 'Sala Mariola', instructor: 'Paqui Ruiz', category: 'oriental', level: 'Iniciación / Fusión', spotsLeft: 3 },
  { id: 'mar-4', day: 'Martes', shift: 'tarde', time: '17:30 - 18:30', name: 'Pre Danza', room: 'Sala Alcoy', instructor: 'Andrea Francés', category: 'infantil', level: 'Infantil (3 a 6 años)', spotsLeft: 3 },
  { id: 'mar-5', day: 'Martes', shift: 'tarde', time: '18:30 - 19:30', name: 'Sevillanas', room: 'Sala Mariola', instructor: 'Paqui Ruiz', category: 'latinos', level: 'Todos los niveles', spotsLeft: 4 },
  { id: 'mar-6', day: 'Martes', shift: 'tarde', time: '19:30 - 20:30', name: 'Pilates Mat', room: 'Sala Azraq', instructor: 'Ana Francés', category: 'bienestar', level: 'Suelo & Tono', spotsLeft: 2 },
  { id: 'mar-7', day: 'Martes', shift: 'tarde', time: '20:30 - 21:30', name: 'Fusión Flamenco Oriental', room: 'Sala Mariola', instructor: 'Ana Francés', category: 'oriental', level: 'Medio / Avanzado', spotsLeft: 3 },

  // =================== MIÉRCOLES ===================
  { id: 'mie-1', day: 'Miércoles', shift: 'manana', time: '09:30 - 10:30', name: 'Pilates Mat', room: 'Sala Azraq', instructor: 'Ana Francés', category: 'bienestar', level: 'Suelo & Postura', spotsLeft: 2 },
  { id: 'mie-2', day: 'Miércoles', shift: 'tarde', time: '15:30 - 16:30', name: 'Pilates Mat', room: 'Sala Azraq', instructor: 'Ana Francés', category: 'bienestar', level: 'Suelo & Postura', spotsLeft: 3 },
  { id: 'mie-3', day: 'Miércoles', shift: 'tarde', time: '16:30 - 17:30', name: 'Danza Moderna', room: 'Sala Alcoy', instructor: 'Andrea Francés', category: 'urbana', level: 'Infantil / Juvenil', spotsLeft: 4 },
  { id: 'mie-4', day: 'Miércoles', shift: 'tarde', time: '17:30 - 18:30', name: 'Danza Contemporánea', room: 'Sala Alcoy', instructor: 'Andrea Francés', category: 'urbana', level: 'Técnica Conservatorio', spotsLeft: 3 },
  { id: 'mie-5', day: 'Miércoles', shift: 'tarde', time: '18:30 - 19:30', name: 'Air Pilates', room: 'Sala Azraq', instructor: 'Ana Francés', category: 'bienestar', level: 'Telas & Suspensión', spotsLeft: 1 },
  { id: 'mie-6', day: 'Miércoles', shift: 'tarde', time: '19:30 - 20:30', name: 'Bailes Latinos', room: 'Sala Alcoy', instructor: 'Javier & Rebeca (Son Mambo)', category: 'latinos', level: 'Nivel 1 (Iniciación)', spotsLeft: 4 },
  { id: 'mie-7', day: 'Miércoles', shift: 'tarde', time: '20:30 - 21:30', name: 'Bailes Latinos', room: 'Sala Alcoy', instructor: 'Javier & Rebeca (Son Mambo)', category: 'latinos', level: 'Nivel 2 (Intermedio)', spotsLeft: 4 },

  // =================== JUEVES ===================
  { id: 'jue-1', day: 'Jueves', shift: 'manana', time: '08:15 - 09:15', name: 'Yoga', room: 'Sala Mariola', instructor: 'Ana Francés', category: 'bienestar', level: 'Despertar Consciente', spotsLeft: 3 },
  { id: 'jue-2', day: 'Jueves', shift: 'manana', time: '09:30 - 10:30', name: 'Danza Oriental Inicio/Medio', room: 'Sala Mariola', instructor: 'Ana Francés', category: 'oriental', level: 'Inicio / Medio', spotsLeft: 3 },
  { id: 'jue-3', day: 'Jueves', shift: 'manana', time: '10:45 - 11:45', name: 'Zumba Gold', room: 'Sala Alcoy', instructor: 'Paqui Ruiz', category: 'latinos', level: 'Bajo Impacto / Salud', spotsLeft: 5 },
  { id: 'jue-4', day: 'Jueves', shift: 'tarde', time: '15:30 - 16:30', name: 'Oriental Avanzado', room: 'Sala Mariola', instructor: 'Ana Francés', category: 'oriental', level: 'Técnica Avanzada', spotsLeft: 2 },
  { id: 'jue-5', day: 'Jueves', shift: 'tarde', time: '17:30 - 18:30', name: 'Danza Moderna (Peques)', room: 'Sala Alcoy', instructor: 'Andrea Francés', category: 'infantil', level: 'Peques (4 a 8 años)', spotsLeft: 3 },
  { id: 'jue-6', day: 'Jueves', shift: 'tarde', time: '18:30 - 19:30', name: 'Danza Contemporánea Peques', room: 'Sala Alcoy', instructor: 'Andrea Francés', category: 'infantil', level: 'Peques (6 a 11 años)', spotsLeft: 3 },
  { id: 'jue-7', day: 'Jueves', shift: 'tarde', time: '19:30 - 20:30', name: 'Pilates Mat', room: 'Sala Azraq', instructor: 'Ana Francés', category: 'bienestar', level: 'Suelo & Tono', spotsLeft: 2 },
  { id: 'jue-8', day: 'Jueves', shift: 'tarde', time: '20:30 - 21:30', name: 'Funcional Mujeres', room: 'Sala Azraq', instructor: 'Andrea Francés', category: 'bienestar', level: 'Fuerza & Tonificación', spotsLeft: 3 },

  // =================== VIERNES ===================
  { id: 'vie-1', day: 'Viernes', shift: 'manana', time: '09:30 - 10:30', name: 'Yoga', room: 'Sala Mariola', instructor: 'Ana Francés', category: 'bienestar', level: 'Todos los niveles', spotsLeft: 4 },
  { id: 'vie-2', day: 'Viernes', shift: 'tarde', time: '15:30 - 16:30', name: 'Zumba', room: 'Sala Alcoy', instructor: 'Paqui Ruiz', category: 'latinos', level: 'Ritmo & Cardio', spotsLeft: 6 },
  { id: 'vie-3', day: 'Viernes', shift: 'tarde', time: '17:30 - 18:30', name: 'Danza Oriental Peques', room: 'Sala Mariola', instructor: 'Paqui Ruiz', category: 'infantil', level: 'Infantil & Juvenil', spotsLeft: 4 },
  { id: 'vie-4', day: 'Viernes', shift: 'tarde', time: '18:30 - 19:30', name: 'Bollywood Iniciación', room: 'Sala Azraq', instructor: 'Paqui Ruiz', category: 'oriental', level: 'Iniciación / Color', spotsLeft: 5 },
  { id: 'vie-5', day: 'Viernes', shift: 'tarde', time: '19:30 - 20:30', name: 'Bollywood Avanzado', room: 'Sala Azraq', instructor: 'Paqui Ruiz', category: 'oriental', level: 'Coreografía & Escenario', spotsLeft: 3 },
  { id: 'vie-6', day: 'Viernes', shift: 'tarde', time: '20:30 - 21:30', name: 'Danza Oriental Avanzado', room: 'Sala Mariola', instructor: 'Ana Francés', category: 'oriental', level: 'Grupo de Gala', spotsLeft: 2 },

  // =================== SÁBADO ===================
  { id: 'sab-1', day: 'Sábado', shift: 'tarde', time: '16:30 - 17:30', name: 'Intensivos & Monográficos', room: 'Sala Alcoy', instructor: 'Claustro Docente', category: 'todas', level: 'Talleres Especiales', spotsLeft: 8 },
  { id: 'sab-2', day: 'Sábado', shift: 'tarde', time: '17:30 - 18:30', name: 'Intensivos & Ensayos Gala', room: 'Sala Alcoy', instructor: 'Claustro Docente', category: 'todas', level: 'Grupos Escénicos', spotsLeft: 8 },
  { id: 'sab-3', day: 'Sábado', shift: 'tarde', time: '18:30 - 19:30', name: 'Intensivos & Masterclasses', room: 'Sala Alcoy', instructor: 'Profesores Invitados', category: 'todas', level: 'Todos los niveles', spotsLeft: 8 },
  { id: 'sab-4', day: 'Sábado', shift: 'tarde', time: '19:30 - 20:30', name: 'Intensivos de Danza', room: 'Sala Alcoy', instructor: 'Claustro Docente', category: 'todas', level: 'Perfeccionamiento', spotsLeft: 8 },
  { id: 'sab-5', day: 'Sábado', shift: 'tarde', time: '20:30 - 21:30', name: 'Intensivos de Baile', room: 'Sala Alcoy', instructor: 'Claustro Docente', category: 'todas', level: 'Mastery & Ensayos', spotsLeft: 8 }
];

export const GALA_INFO = {
  title: 'XVIII Gala Anual Danzas Al-Azraq',
  subtitle: '«El Eco del Viento y la Seda»',
  venue: 'Teatro Calderón de Alcoy',
  address: 'Plaza de España, 14, 03801 Alcoy (Alicante)',
  date: 'Sábado 27 y Domingo 28 de Junio de 2026',
  times: 'Sábado: 19:30h | Domingo: 18:00h',
  image: '/images/gala-calderon.jpg',
  description: 'El acontecimiento artístico más esperado del año. Más de 180 alumnos sobre el histórico escenario del Teatro Calderón de Alcoy, acompañados de una producción lumínica, vestuarios de alta costura artesanal y música en directo en piezas seleccionadas.',
  schedule: [
    { time: '18:45', desc: 'Apertura de puertas y photocall oficial en el vestíbulo del Teatro Calderón' },
    { time: '19:30', desc: 'Acto I: Semillas de Azraq (Danza Creativa, Ballet Infantil y Clásico)' },
    { time: '20:15', desc: 'Intermedio de 15 minutos' },
    { time: '20:30', desc: 'Acto II: El Latido de la Tierra (Fusión Oriental, Son Mambo Latino y Danza Urbana)' },
    { time: '21:30', desc: 'Gran Final Conjunto y Entrega de Orlas de Graduación' }
  ],
  tickets: {
    priceStandard: '12 €',
    priceReduced: '8 € (Menores de 10 años)',
    boxOfficeDates: 'A partir del 15 de Mayo en la secretaría de la academia y en ticketalcoy.com',
    vipInfo: 'Butacas preferentes asignadas por riguroso orden de reserva familiar.'
  }
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Mireia Valls',
    role: 'Madre de alumna de Danza Infantil (6 años)',
    discipline: 'Danza Creativa & Ballet',
    quote: 'Mi hija Lucía entra cantando y sale bailando. El cariño con el que Andrea y Ana tratan a los peques no tiene precio. En Alcoy no hay una academia con tanta vocación humana.',
    avatarBg: 'bg-[#E07A5F]',
    stars: 5
  },
  {
    id: 't2',
    name: 'Carlos Botella',
    role: 'Alumno de Ritmos Latinos',
    discipline: 'Salsa & Bachata (Son Mambo)',
    quote: 'Pensaba que tenía dos pies izquierdos hasta que empecé con Javier y Rebeca. En tres meses ya bailaba en los sociales sin miedo ninguno. Un ambiente inmejorable de risas y respeto.',
    avatarBg: 'bg-[#303746]',
    stars: 5
  },
  {
    id: 't3',
    name: 'Elena Santamaría',
    role: 'Alumna de Pilates & Salud',
    discipline: 'Pilates Suelo y Espalda',
    quote: 'Por mi trabajo de oficina tenía dolores lumbares continuos. Desde que asisto a las mañanas de Pilates con Ana, he recuperado la agilidad y he dejado los analgésicos. Una inversión en salud.',
    avatarBg: 'bg-[#738392]',
    stars: 5
  },
  {
    id: 't4',
    name: 'Sara Gisbert',
    role: 'Bailarina grupo avanzado',
    discipline: 'Danza Oriental y Fusión',
    quote: 'Llevo 7 años en Al-Azraq. La Gala del Teatro Calderón es la experiencia más mágica que he vivido: subir al escenario, las luces, los compañeros... somos una auténtica familia.',
    avatarBg: 'bg-[#C58B78]',
    stars: 5
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Apoteosis en el Teatro Calderón',
    category: 'galas',
    categoryLabel: 'Galas & Escenario',
    image: '/images/gala-calderon.jpg',
    description: 'Momento culmen de la Gala de Danzas Al-Azraq con escenografía de sedas y focos teatrales.',
    year: '2025'
  },
  {
    id: 'g2',
    title: 'Vuelo y levedad en el Estudio',
    category: 'ensayos',
    categoryLabel: 'Ensayos en Aula',
    image: '/images/hero-dance.jpg',
    description: 'Ensayo matinal de contemporáneo capturado bajo la luz natural de nuestros ventanales.',
    year: '2026'
  },
  {
    id: 'g3',
    title: 'Fusión Flamenco Oriental en el Patio',
    category: 'galas',
    categoryLabel: 'Galas & Escenario',
    image: '/images/fusion-flamenco.jpg',
    description: 'Paqui Ruiz en un despliegue de mantón y ondulación oriental con esencias mediterráneas.',
    year: '2025'
  },
  {
    id: 'g4',
    title: 'Primeros pasos en la barra',
    category: 'ensayos',
    categoryLabel: 'Ensayos en Aula',
    image: '/images/ballet-infantil.jpg',
    description: 'Nuestras alumnas más jóvenes en su clase de inicio postural con una sonrisa.',
    year: '2026'
  },
  {
    id: 'g5',
    title: 'Sesión de Pilates y Bienestar Matinal',
    category: 'bienestar',
    categoryLabel: 'Yoga & Bienestar',
    image: '/images/pilates-wellness.jpg',
    description: 'Concentración y calma en el grupo de control postural guiado por Ana Francés.',
    year: '2026'
  },
  {
    id: 'g6',
    title: 'Fiebre latina en pista social',
    category: 'eventos',
    categoryLabel: 'Eventos en Alcoy',
    image: '/images/latin-salsa.jpg',
    description: 'Encuentro social de salsa y bachata organizado por Son Mambo y Al-Azraq.',
    year: '2025'
  },
  {
    id: 'g7',
    title: 'Crew Urbana en el aula Azraq',
    category: 'eventos',
    categoryLabel: 'Eventos en Alcoy',
    image: '/images/danza-urbana.jpg',
    description: 'Potencia, actitud y ritmo moderno en las sesiones juveniles con Andrea Francés.',
    year: '2026'
  },
  {
    id: 'g8',
    title: 'Instalaciones y Parqué Profesional',
    category: 'ensayos',
    categoryLabel: 'Ensayos en Aula',
    image: '/images/studio-alcoy.jpg',
    description: 'Nuestras salas climatizadas con suelo técnico de danza para proteger las articulaciones.',
    year: '2026'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: '¿Puedo probar una clase gratis antes de inscribirme?',
    answer: '¡Por supuesto! En Danzas Al-Azraq creemos que lo primero es sentirte a gusto con el grupo y el profesor. Puedes solicitar una clase de prueba completamente gratuita y sin ningún compromiso en cualquiera de nuestras disciplinas.',
    category: 'Inscripciones'
  },
  {
    question: '¿Qué indumentaria o calzado necesito para el primer día?',
    answer: 'Para tu primera sesión solo necesitas ropa cómoda y flexible (mallas o pantalón deportivo y camiseta). En Danza Oriental y Pilates se baila con calcetines antideslizantes o descalzo; en danza infantil zapatillas blandas de ballet; y en ritmos latinos zapato cómodo o zapatillas de baile limpias.',
    category: 'Material'
  },
  {
    question: '¿A partir de qué edad pueden empezar los niños?',
    answer: 'Nuestras clases de Danza Infantil y Creativa reciben a niños y niñas desde los 3 años cumplidos. Trabajamos con metodología lúdica y no competitiva respetando sus etapas psicomotrices.',
    category: 'Edades'
  },
  {
    question: '¿Hay matrícula o permanencia anual?',
    answer: 'No exigimos permanencia obligatoria. Disponemos de cuotas mensuales flexibles, bonos familiares para varios hermanos o disciplinas combinadas, y cuotas trimestrales con descuento preferente.',
    category: 'Precios'
  },
  {
    question: '¿Se requiere experiencia previa para las clases de adultos?',
    answer: 'En absoluto. Más del 60% de nuestros alumnos adultos empezaron desde cero. Tenemos niveles de iniciación absoluta en Salsa, Bachata, Pilates, Yoga, Sevillanas y Danza Oriental donde se aprende paso a paso en un ambiente de apoyo absoluto.',
    category: 'Niveles'
  },
  {
    question: '¿Todos los alumnos participan en la Gala del Teatro Calderón?',
    answer: 'La Gala Anual es voluntaria pero altamente recomendada. Diseñamos coreografías adaptadas a cada grupo para que la vivencia de bailar en el emblemático Teatro Calderón de Alcoy sea inolvidable y accesible a todos los niveles.',
    category: 'Gala'
  }
];
