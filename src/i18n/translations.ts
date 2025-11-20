export type Language = 'es' | 'en';

export interface ProjectTranslation {
  title: string;
  description: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  position: string;
  period: string;
  description: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  header: {
    about: string;
    projects: string;
    contact: string;
    cv: string;
    cvUrl: string;
  };
  hero: {
    greeting: string;
    name: string;
    tagline: string;
    typewriterPhrases: string[];
    description: string;
    cta: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  projects: {
    title: string;
    featured: string;
    viewMore: string;
    items: ProjectTranslation[];
    otherProjectsTitle: string;
    otherProjectsSubtitle: string;
    otherItems: ProjectTranslation[];
    showMore: string;
    showLess: string;
    hideProjects: string;
  };
  contact: {
    subtitle: string;
    title: string;
    description: string;
    cta: string;
  };
  footer: {
    builtBy: string;
    heart: string;
    and: string;
    coffee: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    meta: {
      title: 'Samuel Aranguren | Desarrollador Full Stack Next.js & React',
      description: 'Portafolio de Samuel Aranguren - Desarrollador Web Full Stack especializado en Next.js, React, TypeScript y automatización de procesos. Creando experiencias digitales de alto rendimiento.',
    },
    header: {
      about: 'Sobre mí',
      projects: 'Portafolio',
      contact: 'Contáctame',
      cv: 'Currículum',
      cvUrl: '/samuel-portfolio/samuel-aranguren-cv.pdf',
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Samuel Aranguren.',
      tagline: 'Desarrollador Web Full Stack & Automatización.',
      typewriterPhrases: [
        'Experto en Next.js y React.',
        'Desarrollador de Software Escalable.',
        'Especialista en Automatización.',
        'Creador de Soluciones Digitales.',
      ],
      description:
        'Soy un desarrollador de software enfocado en crear aplicaciones web modernas, rápidas y accesibles. Especializado en el ecosistema React (Next.js) y en la optimización de procesos mediante tecnología.',
      cta: 'Hablemos de tu proyecto',
    },
    about: {
      title: 'Sobre mí',
      paragraph1:
        'Soy un desarrollador web Full Stack con una sólida trayectoria en la construcción de aplicaciones escalables utilizando Next.js, TypeScript y Tailwind CSS. Me enfoco en el rendimiento, la accesibilidad (a11y) y las mejores prácticas de SEO técnico.',
      paragraph2:
        'Más allá del código, me apasiona la automatización de flujos de trabajo y la optimización de sistemas. Siempre estoy explorando nuevas tecnologías como IA generativa e integraciones en la nube para llevar mis proyectos al siguiente nivel.',
    },
    experience: {
      title: 'Trayectoria Profesional',
      items: [
        {
          company: 'Tu Conexión Infinita',
          location: 'Trujillo, VE',
          position: 'Coordinador de Sistemas & Desarrollador Lead',
          period: 'Ene 2025 — Presente',
          description:
            'Lidero el desarrollo del ecosistema digital de la empresa, incluyendo el sitio web oficial optimizado para SEO y un portal de pagos seguro. Implementé WispHub para la gestión eficiente de clientes y automaticé procesos de facturación.',
        },
        {
          company: 'AgroTrujillo S.A',
          location: 'Trujillo, VE',
          position: 'Soporte Técnico & Desarrollador Full Stack',
          period: 'Ago 2021 — Ene 2025',
          description:
            'Diseñé y desarrollé un Sistema de Gestión de Préstamos (LMS) a medida, automatizando el flujo de trabajo del área de Gestión Productiva y reduciendo los tiempos de procesamiento manual en un 40%.',
        },
      ],
    },
    projects: {
      title: 'Proyectos Destacados',
      featured: 'Caso de Éxito',
      viewMore: 'Ver Archivo de Proyectos',
      items: [
        {
          title: 'Portal Web Tu Conexión Infinita',
          description:
            'Sitio web corporativo de alto rendimiento desarrollado para una empresa de telecomunicaciones. Optimizado para Core Web Vitals, cuenta con integración de pasarela de pagos y un panel de autogestión para clientes.',
        },
        {
          title: 'Efemérides Venezolanas con IA',
          description:
            'Aplicación educativa innovadora que utiliza Next.js 14 y Gemini AI para generar contenido histórico dinámico. Integra Supabase para el almacenamiento de datos y ofrece una experiencia de usuario única con diseño retro-moderno.',
        },
        {
          title: 'Better Resume - Generador de CV',
          description:
            'SaaS para la creación de currículums optimizados para ATS (Applicant Tracking Systems). Construido con React, TypeScript y GSAP para animaciones fluidas. Incluye autenticación OAuth, almacenamiento en la nube y exportación PDF de alta calidad.',
        },
        {
          title: 'Sistema de Inventario CDCE',
          description:
            'Plataforma de gestión de inventarios multi-sede. Permite el rastreo en tiempo real de activos, control de stock y generación de reportes detallados, mejorando la logística operativa de la institución.',
        },
      ],
      otherProjectsTitle: 'Otros Desarrollos',
      otherProjectsSubtitle: '',
      otherItems: [
        {
          title: 'Sistema de Préstamos AgroTrujillo',
          description:
            'Plataforma interna para la administración del ciclo de vida de créditos agrícolas. Incluye cálculo automático de intereses, gestión de plazos y módulos de reportes financieros.',
        },
        {
          title: 'Portafolio Personal v2',
          description: 'Este sitio web. Una SPA (Single Page Application) construida con Vite y React, optimizada para SEO técnico, modo oscuro y rendimiento máximo (Lighthouse 100/100).',
        },
        {
          title: 'API RESTful de Gestión',
          description: 'Backend robusto desarrollado con Node.js y Express. Implementa arquitectura de capas, autenticación JWT segura y documentación completa con Swagger/OpenAPI.',
        },
        {
          title: 'Dashboard Analítico en Tiempo Real',
          description: 'Panel de administración con visualización de datos interactiva usando Next.js, Tailwind CSS y librerías de gráficos dinámicos.',
        },
        {
          title: 'Task Manager Móvil',
          description: 'App de productividad cross-platform desarrollada con React Native. Sincronización offline-first con Firebase y notificaciones push.',
        },
        {
          title: 'E-commerce Frontend Moderno',
          description: 'Interfaz de usuario para tienda online con gestión de estado global (Vuex/Pinia), carrito de compras persistente y diseño responsive mobile-first.',
        },
        {
          title: 'CMS / Blog System',
          description: 'Sistema de gestión de contenidos desarrollado en Python/Django. Características incluyen editor WYSIWYG, gestión de medios y optimización SEO on-page.',
        },
      ],
      showMore: 'Cargar más proyectos',
      showLess: 'Mostrar menos',
      hideProjects: 'Ocultar lista',
    },
    contact: {
      subtitle: '04. ¿Qué sigue?',
      title: 'Iniciemos un Proyecto',
      description:
        'Actualmente estoy disponible para nuevos retos profesionales y colaboraciones freelance. Si buscas un desarrollador comprometido con la calidad y el rendimiento, envíame un mensaje y conversemos sobre cómo puedo aportar valor a tu equipo.',
      cta: 'Contactar Ahora',
    },
    footer: {
      builtBy: 'Diseñado y Desarrollado por Samuel Aranguren con',
      heart: '❤️',
      and: 'y',
      coffee: '☕',
    },
  },
  en: {
    meta: {
      title: 'Samuel Aranguren | Full Stack Next.js & React Developer',
      description: 'Samuel Aranguren Portfolio - Full Stack Web Developer specializing in Next.js, React, TypeScript, and Process Automation. Building high-performance digital experiences.',
    },
    header: {
      about: 'About',
      projects: 'Work',
      contact: 'Contact',
      cv: 'Resume',
      cvUrl: '/samuel-portfolio/samuel-aranguren-cv.pdf',
    },
    hero: {
      greeting: 'Hi, I am',
      name: 'Samuel Aranguren.',
      tagline: 'Full Stack Web Developer & Automation Specialist.',
      typewriterPhrases: [
        'Expert in Next.js & React.',
        'Scalable Software Developer.',
        'Automation Specialist.',
        'Digital Solution Architect.',
      ],
      description:
        'I am a software developer focused on building modern, fast, and accessible web applications. Specialized in the React ecosystem (Next.js) and leveraging technology to optimize business processes.',
      cta: 'Let\'s Talk',
    },
    about: {
      title: 'About Me',
      paragraph1:
        'I am a Full Stack Web Developer with a strong track record in building scalable applications using Next.js, TypeScript, and Tailwind CSS. I focus on performance, accessibility (a11y), and technical SEO best practices.',
      paragraph2:
        'Beyond code, I am passionate about workflow automation and system optimization. I am always exploring new technologies like Generative AI and cloud integrations to take my projects to the next level.',
    },
    experience: {
      title: 'Work Experience',
      items: [
        {
          company: 'Tu Conexión Infinita',
          location: 'Trujillo, VE',
          position: 'Systems Coordinator & Lead Developer',
          period: 'Jan 2025 — Present',
          description:
            'Leading the development of the company\'s digital ecosystem, including an SEO-optimized official website and a secure payment portal. Implemented WispHub for efficient client management and automated billing processes.',
        },
        {
          company: 'AgroTrujillo S.A',
          location: 'Trujillo, VE',
          position: 'Tech Support & Full Stack Developer',
          period: 'Aug 2021 — Jan 2025',
          description:
            'Designed and developed a custom Loan Management System (LMS), automating the Productive Management workflow and reducing manual processing times by 40%.',
        },
      ],
    },
    projects: {
      title: 'Featured Projects',
      featured: 'Featured Case Study',
      viewMore: 'View Project Archive',
      items: [
        {
          title: 'Tu Conexión Infinita Website',
          description:
            'High-performance corporate website developed for a telecommunications company. Optimized for Core Web Vitals, featuring payment gateway integration and a client self-service dashboard.',
        },
        {
          title: 'Venezuelan Ephemeris AI',
          description:
            'Innovative educational application using Next.js 14 and Gemini AI to generate dynamic historical content. Integrates Supabase for data storage and offers a unique user experience with a retro-modern design.',
        },
        {
          title: 'Better Resume - CV Builder',
          description:
            'SaaS for creating ATS-optimized (Applicant Tracking Systems) resumes. Built with React, TypeScript, and GSAP for smooth animations. Includes OAuth authentication, cloud storage, and high-quality PDF export.',
        },
        {
          title: 'CDCE Inventory System',
          description:
            'Multi-site inventory management platform. Enables real-time asset tracking, stock control, and detailed reporting, improving the institution\'s operational logistics.',
        },
      ],
      otherProjectsTitle: 'Other Developments',
      otherProjectsSubtitle: '',
      otherItems: [
        {
          title: 'AgroTrujillo Loans System',
          description:
            'Internal platform for managing the agricultural credit lifecycle. Includes automatic interest calculation, term management, and financial reporting modules.',
        },
        {
          title: 'Personal Portfolio v2',
          description: 'This website. A SPA (Single Page Application) built with Vite and React, optimized for technical SEO, dark mode, and maximum performance (Lighthouse 100/100).',
        },
        {
          title: 'Management REST API',
          description: 'Robust backend developed with Node.js and Express. Implements layered architecture, secure JWT authentication, and complete documentation with Swagger/OpenAPI.',
        },
        {
          title: 'Real-time Analytics Dashboard',
          description: 'Admin panel with interactive data visualization using Next.js, Tailwind CSS, and dynamic charting libraries.',
        },
        {
          title: 'Mobile Task Manager',
          description: 'Cross-platform productivity app developed with React Native. Offline-first synchronization with Firebase and push notifications.',
        },
        {
          title: 'Modern E-commerce Frontend',
          description: 'Online store UI with global state management (Vuex/Pinia), persistent shopping cart, and mobile-first responsive design.',
        },
        {
          title: 'CMS / Blog System',
          description: 'Content management system developed in Python/Django. Features include WYSIWYG editor, media management, and on-page SEO optimization.',
        },
      ],
      showMore: 'Load More Projects',
      showLess: 'Show Less',
      hideProjects: 'Hide List',
    },
    contact: {
      subtitle: '04. What\'s Next?',
      title: 'Let\'s Start a Project',
      description:
        'I am currently available for new professional challenges and freelance collaborations. If you are looking for a developer committed to quality and performance, send me a message and let\'s discuss how I can add value to your team.',
      cta: 'Contact Now',
    },
    footer: {
      builtBy: 'Designed & Developed by Samuel Aranguren with',
      heart: '❤️',
      and: 'and',
      coffee: '☕',
    },
  },
};
