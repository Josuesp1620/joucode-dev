/**
 * Todo el contenido del portafolio. Fuente: CV y LinkedIn de 09/2026, apiservicesac.com y los repositorios.
 * Nombres: "API SERVICE SAC" siempre en mayúsculas; "Dooservice" y "Dooprint" solo con la D mayúscula.
 */
export const PERSONA = {
  nombre: 'Josue Salazar',
  rol: 'Fundador y CEO de API SERVICE SAC',
  ubicacion: 'Lima, Perú',
  foto: '/marca/josue.jpg',
  // Contacto de trabajo: el correo y el WhatsApp de la empresa (el mismo de apiservicesac.com).
  correo: 'jsalazar@apiservicesac.com',
  whatsapp: 'https://wa.me/51941576391',
  telefono: '+51 941 576 391',
  linkedin: 'https://www.linkedin.com/in/joucode',
  github: 'https://github.com/Josuesp1620',
};

export const EMPRESA = {
  nombre: 'API SERVICE SAC',
  logo: '/marca/api-service-sac.png',
  web: 'https://apiservicesac.com',
  lema: 'Integraciones, IA, software a medida y ERP en un solo equipo.',
  descripcion:
    'Somos una empresa de tecnología en Lima. Conectamos los sistemas que nuestros clientes ya usan, construimos el software que les falta, implementamos su ERP y aplicamos IA donde de verdad ahorra trabajo.',
  servicios: [
    { titulo: 'Integraciones', texto: 'Conectamos sistemas que no se hablan: APIs, tiendas en línea, pasarelas de pago, WhatsApp y equipos físicos como impresoras y biométricos.' },
    { titulo: 'IA aplicada', texto: 'Agentes y búsqueda sobre los documentos y datos de la empresa, conectados a sus propios sistemas.' },
    { titulo: 'Desarrollo a medida', texto: 'Aplicaciones web, portales y automatizaciones cuando ningún producto encaja con lo que el cliente necesita.' },
    { titulo: 'Implementación de ERP', texto: 'Puesta en marcha, módulos a medida y migración de datos para que la empresa trabaje en una sola plataforma.' },
  ],
  clientes: [
    { nombre: 'Allcenter', logo: '/marca/clientes/allcenter.png' },
    { nombre: 'Segurytec e Ingeniería', logo: '/marca/clientes/segurytec.png' },
    { nombre: 'Fosso', logo: '/marca/clientes/fosso.png' },
    { nombre: 'Fucci', logo: '/marca/clientes/fucci.jpg' },
    { nombre: 'Novocentro', logo: '/marca/clientes/novocentro.png' },
    { nombre: 'Proyelectric', logo: '/marca/clientes/proyelectric.png' },
  ],
};

export type Producto = {
  nombre: string;
  logo?: string;
  icono?: 'tiktok';
  etiqueta: string;
  resumen: string;
  puntos: string[];
  enlaces: { texto: string; url: string }[];
  captura: string;
};

export const PRODUCTOS: Producto[] = [
  {
    nombre: 'Dooservice',
    logo: '/marca/dooservice.svg',
    etiqueta: 'Plataforma',
    resumen: 'La plataforma con la que desplegamos y administramos los sistemas de nuestros clientes.',
    puntos: ['Entornos creados en minutos y despliegue desde GitHub', 'Respaldos programados y avisos cuando algo falla', 'Los servidores y los datos siguen siendo del cliente'],
    enlaces: [{ texto: 'dooservice.sh', url: 'https://dooservice.sh' }],
    captura: '/images/projects/dooservice-project.png',
  },
  {
    nombre: 'Dooprint',
    logo: '/marca/dooprint.svg',
    etiqueta: 'Código abierto',
    resumen: 'Imprime desde un sistema en la nube en cualquier ticketera USB o de red, sin abrir puertos.',
    puntos: ['Tickets ESC/POS y etiquetas ZPL', 'Windows y Linux, con su propia interfaz web', 'Publicado como código abierto'],
    enlaces: [
      { texto: 'Sitio web', url: 'https://dooprint.apiservicesac.com' },
      { texto: 'GitHub', url: 'https://github.com/apiservicesac/dooprint' },
    ],
    captura: '/images/projects/dooprint-project.png',
  },
  {
    nombre: 'Planos',
    icono: 'tiktok',
    etiqueta: 'TikTok · Instagram',
    resumen: 'La IA explicada por dentro: videos para TikTok e Instagram y una web interactiva en 3D sobre RAG, embeddings y búsqueda semántica.',
    puntos: ['Caso de estudio real: una ley de 86 páginas', 'Rechunking, vectores y búsqueda en vivo', 'Datos reales en cada gráfico'],
    enlaces: [{ texto: 'Web interactiva', url: 'http://88.99.253.18:3000/' }],
    captura: '/images/projects/planos-project.png',
  },
];

export const SOLUCIONES = [
  { titulo: 'Control de asistencia con biométricos', texto: 'Marcaciones en tiempo real desde equipos ZKTeco, cálculo de tardanzas y horas extra, y reporte en Excel: más de 140.000 marcaciones procesadas en producción.' },
  { titulo: 'Implementación de ERP en 6 empresas', texto: 'Retail, fabricación, servicios eléctricos y calibración, con módulos a medida, trazabilidad de certificados y documentación técnica automática.' },
  { titulo: 'Integraciones y automatización', texto: 'APIs REST, mensajería con Kafka, procesos ETL y tareas programadas entre sistemas de terceros.' },
];

/** Experiencia (fuente: LinkedIn, 09/2026). Una empresa puede tener varios cargos. */
export type Experiencia = {
  empresa: string;
  detalle?: string;
  roles: { cargo: string; fechas: string; puntos: string[] }[];
};

export const TRAYECTORIA: Experiencia[] = [
  {
    empresa: 'API SERVICE SAC',
    detalle: 'Lima · híbrido',
    roles: [
      {
        cargo: 'Fundador y CEO · Líder técnico',
        fechas: '10/2024 – actualidad',
        puntos: [
          'Llevo cada requerimiento a un diseño técnico con alcance, estimación y criterios de aceptación.',
          'Defino la arquitectura y los estándares, reviso lo que entra a producción y llevo versiones, despliegues y documentación.',
          'Dooservice: despliegue y operación de Odoo 16 a 20 en servidores propios, con un orquestador en Python sobre NATS y Docker, un agente en cada servidor y un panel en TypeScript.',
          'Control de asistencia con biométricos ZKTeco en tiempo real: tardanzas y horas extra según el D.S. 007-2002-TR y más de 140.000 marcaciones procesadas en producción.',
          'Migraciones y mantenimiento de módulos de Odoo.',
        ],
      },
    ],
  },
  {
    empresa: 'FRITZ SPORT',
    detalle: 'Calzado deportivo · presencial',
    roles: [
      {
        cargo: 'Consultor funcional',
        fechas: '06/2026 – 08/2026',
        puntos: [
          'Levantamiento de requerimientos con las áreas de tesorería y contabilidad.',
          'Relevamiento de pagos, cobranzas y registro contable.',
          'Documentación funcional como base de la implementación.',
        ],
      },
    ],
  },
  {
    empresa: 'Alta Latam',
    detalle: 'Remoto',
    roles: [
      {
        cargo: 'Desarrollador Python / Odoo · DevOps & QA',
        fechas: '03/2024 – 12/2024',
        puntos: [
          'Desarrollo en Odoo con Python y PostgreSQL, con importación y exportación de Excel y CSV.',
          'Integraciones vía APIs REST y tareas programadas.',
          'Servidores Linux, Docker y AWS EC2, con medidas de seguridad.',
          'Revisión de código y pruebas funcionales.',
        ],
      },
    ],
  },
  {
    empresa: 'Geosolution Consulting',
    roles: [
      {
        cargo: 'Desarrollador freelance',
        fechas: '06/2024 – 12/2024',
        puntos: ['Auditoría y corrección de software, seguridad, aplicaciones móviles y soporte.'],
      },
      {
        cargo: 'Desarrollador Full Stack',
        fechas: '12/2023 – 06/2024',
        puntos: [
          'Aplicaciones geográficas para Jockey, Azzorti y ATU con microservicios en React, Next.js, Express, Node.js y Python.',
          'Despliegue en Docker, Ubuntu, Nginx y AWS, y aplicaciones móviles.',
        ],
      },
    ],
  },
  {
    empresa: 'VMC Solutions',
    detalle: 'Los Olivos · híbrido',
    roles: [
      {
        cargo: 'Analista Programador',
        fechas: '08/2022 – 04/2023',
        puntos: [
          'Módulos de Odoo a medida en Python, XML, JavaScript y PostgreSQL: modelos y vistas.',
          'Impresión por Bluetooth desde el punto de venta.',
          'Atención de incidencias y servidores Linux y VPS.',
        ],
      },
    ],
  },
];

export const FORMACION = [
  { titulo: 'Ingeniería Industrial', lugar: 'Universidad Peruana de Ciencias Aplicadas (UPC)', fechas: '07/2026 – en curso', logo: '/marca/formacion/upc.png' },
  { titulo: 'Técnico Superior en Computación e Informática', lugar: 'IESTP José Pardo', fechas: '04/2021 – 12/2023', logo: '/marca/formacion/jose-pardo.png' },
];

export const STACK = [
  { grupo: 'Backend', items: ['Python', 'Node.js', 'TypeScript', 'NestJS', 'Express', 'Odoo', 'APIs REST', 'Kafka', 'NATS'] },
  { grupo: 'Datos e IA', items: ['PostgreSQL', 'ETL', 'DuckDB', 'IA generativa', 'RAG', 'Embeddings'] },
  { grupo: 'Infraestructura', items: ['Docker', 'Linux', 'AWS', 'Nginx', 'CI/CD'] },
  { grupo: 'Gestión', items: ['Liderazgo técnico', 'Levantamiento de requerimientos', 'Documentación funcional'] },
];
