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
      title: 'Portafolio de Samuel | Desarrollador Web',
      description: 'Portafolio de Samuel Aranguren - Desarrollador Web especializado en NextJS y tecnologías modernas',
    },
    header: {
      about: 'Acerca de mí',
      projects: 'Proyectos',
      contact: 'Contacto',
      cv: 'CV',
      cvUrl: '/samuel-aranguren-cv.pdf',
    },
    hero: {
      greeting: 'Hola, mi nombre es',
      name: 'Samuel Aranguren.',
      tagline: 'Creo cosas para la web.',
      typewriterPhrases: [
        'Creo cosas para la web.',
        'Desarrollo aplicaciones modernas.',
        'Construyo experiencias digitales.',
        'Transformo ideas en código.',
      ],
      description:
        'Soy un desarrollador de software apasionado por la creación de soluciones digitales, con un enfoque en construir aplicaciones web hermosas y funcionales.',
      cta: 'Ponte en contacto',
    },
    about: {
      title: 'Acerca de mí',
      paragraph1:
        'Soy un desarrollador web apasionado con experiencia en la creación de aplicaciones interactivas y eficientes, especializado en NextJS y tecnologías relacionadas.',
      paragraph2:
        'Además de mi trabajo en desarrollo web, soy un gran amante de los videojuegos y estoy profundamente interesado en aprender cómo automatizar procesos.',
    },
    experience: {
      title: 'Experiencia Laboral',
      items: [
        {
          company: 'Tu Conexión Infinita',
          location: 'Trujillo, VE',
          position: 'Coordinador de Sistemas',
          period: 'Ene 2025 — Presente',
          description:
            'Liderando el desarrollo del sitio web oficial de "Tu Conexión Infinita", implementando un portal de pagos robusto y utilizando WispHub como herramienta de gestión.',
        },
        {
          company: 'AgroTrujillo S.A',
          location: 'Trujillo, VE',
          position: 'Soporte Técnico',
          period: 'Ago 2021 — Ene 2025',
          description:
            'Desarrollé un sistema para la gestión de préstamos a productores con el fin de automatizar estos procesos en el área de Gestión Productiva.',
        },
      ],
    },
    projects: {
      title: 'Proyectos Destacados',
      featured: 'Proyecto Destacado',
      viewMore: 'Ver más proyectos',
      items: [
        {
          title: 'Sitio Web Tu Conexión Infinita',
          description:
            'Este es el sitio web oficial de la empresa que incluye toda la información relevante sobre el servicio de internet y telecomunicaciones.',
        },
        {
          title: 'Efemérides Venezolanas',
          description:
            'Aplicación web moderna que genera y muestra diariamente efemérides históricas de Venezuela. Desarrollada con Next.js y Gemini AI, presenta una hermosa interfaz de estilo colonial con efectos de terminal clásico y generación automática de contenido histórico almacenado en Supabase.',
        },
        {
          title: 'Better Resume',
          description:
            'Generador profesional de currículums con editor intuitivo y vista previa en tiempo real. Incluye soporte multiidioma (inglés y español), múltiples plantillas personalizables, temas de color, autenticación OAuth, almacenamiento en la nube y exportación a PDF optimizada para ATS. Desarrollado con React, TypeScript, GSAP y Supabase.',
        },
        {
          title: 'Sistema de Inventario para CDCE',
          description:
            'He desarrollado un sistema de gestión de inventario que ayuda a los usuarios a rastrear, organizar y controlar el stock en diferentes zonas o áreas. Proporciona una interfaz simple para gestionar artículos, cantidades y ubicaciones de manera eficiente.',
        },
      ],
      otherProjectsTitle: 'Otros Proyectos',
      otherProjectsSubtitle: '',
      otherItems: [
        {
          title: 'Sistema de Gestión de Préstamos AgroTrujillo',
          description:
            'Como trabajador en AgroTrujillo, noté un problema al gestionar a los productores al otorgarles préstamos, así que decidí desarrollar un sistema que permite administrar los préstamos otorgados a los productores en el área de Gestión Productiva.',
        },
        {
          title: 'Portafolio Personal',
          description: 'Mi portafolio web personal construido con React, TypeScript y Vite. Incluye animaciones suaves, modo oscuro y diseño responsive.',
        },
        {
          title: 'API REST de Gestión',
          description: 'API RESTful desarrollada con Node.js y Express para gestión de recursos. Incluye autenticación JWT y documentación con Swagger.',
        },
        {
          title: 'Dashboard Analítico',
          description: 'Panel de control interactivo con Next.js y Tailwind CSS para visualización de datos en tiempo real con gráficos dinámicos.',
        },
        {
          title: 'App Móvil de Tareas',
          description: 'Aplicación móvil multiplataforma con React Native para gestión de tareas. Sincronización en tiempo real con Firebase.',
        },
        {
          title: 'E-commerce Frontend',
          description: 'Interfaz de tienda online moderna con Vue.js, Vuex para estado global y diseño responsive con Sass.',
        },
        {
          title: 'Sistema de Blog',
          description: 'Plataforma de blog completa con Python y Django. Incluye sistema de comentarios, categorías y búsqueda avanzada.',
        },
      ],
      showMore: 'Mostrar Más',
      showLess: 'Mostrar Menos',
      hideProjects: 'Ocultar Proyectos',
    },
    contact: {
      subtitle: '04. ¿Cuál es el siguiente paso?',
      title: 'Ponte en Contacto',
      description:
        'Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada está siempre abierta. Ya sea que tengas una pregunta o simplemente quieras saludar, ¡haré todo lo posible por responderte!',
      cta: '¡Hola!',
    },
    footer: {
      builtBy: 'Desarrollado por Samuel Aranguren con',
      heart: '❤️',
      and: 'y algo de',
      coffee: '☕',
    },
  },
  en: {
    meta: {
      title: "Samuel's Portfolio | Web Developer",
      description: 'Samuel Aranguren Portfolio - Web Developer specialized in NextJS and modern technologies',
    },
    header: {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      cv: 'Resume',
      cvUrl: '/samuel-aranguren-cv.pdf',
    },
    hero: {
      greeting: 'Hi, my name is',
      name: 'Samuel Aranguren.',
      tagline: 'I build things for the web.',
      typewriterPhrases: [
        'I build things for the web.',
        'I develop modern applications.',
        'I create digital experiences.',
        'I transform ideas into code.',
      ],
      description:
        "I'm a software developer passionate about creating digital solutions, with a focus on building beautiful and functional web applications.",
      cta: 'Get In Touch',
    },
    about: {
      title: 'About Me',
      paragraph1:
        'I am a passionate web developer with experience in creating interactive and efficient applications, specializing in NextJS and related technologies.',
      paragraph2:
        'In addition to my work in web development, I am a huge videogames lover and am deeply invested in learning how to automate processes.',
    },
    experience: {
      title: 'Work Experience',
      items: [
        {
          company: 'Tu Conexión Infinita',
          location: 'Trujillo, VE',
          position: 'Systems Coordinator',
          period: 'Jan 2025 — Present',
          description:
            'Leading the development of the official website for "Tu Conexión Infinita", implementing a robust payment portal and utilizing WispHub as a management tool.',
        },
        {
          company: 'AgroTrujillo S.A',
          location: 'Trujillo, VE',
          position: 'Tech Support',
          period: 'Aug 2021 — Jan 2025',
          description:
            'I developed a system for managing loans to producers in order to automate these processes in the area of Productive Management.',
        },
      ],
    },
    projects: {
      title: 'Featured Projects',
      featured: 'Featured Project',
      viewMore: 'View More Projects',
      items: [
        {
          title: 'Tu Conexión Infinita Website',
          description:
            'This is the official website of the company that includes all relevant information about the service.',
        },
        {
          title: 'Venezuelan Ephemeris',
          description:
            'Modern web application that generates and displays daily historical ephemeris from Venezuela. Built with Next.js and Gemini AI, it features a beautiful colonial-style interface with classic terminal effects and automatic generation of historical content stored in Supabase.',
        },
        {
          title: 'Better Resume',
          description:
            'Professional resume generator with intuitive editor and real-time preview. Features multilingual support (English & Spanish), multiple customizable templates, color themes, OAuth authentication, cloud storage, and ATS-optimized PDF export. Built with React, TypeScript, GSAP, and Supabase.',
        },
        {
          title: 'Inventory System for CDCE',
          description:
            "I've made an inventory management system that helps users track, organize, and control stock across different zones or areas. It provides a simple interface for managing items, quantities, and locations efficiently.",
        },
      ],
      otherProjectsTitle: 'Other Projects',
      otherProjectsSubtitle: '',
      otherItems: [
        {
          title: 'AgroTrujillo Loans Management System',
          description:
            'As a worker at AgroTrujillo, I noticed a problem when managing producers when granting them loans, so I decided to develop a system that allows managing loans granted to producers in the area of Productive Management.',
        },
        {
          title: 'Personal Portfolio',
          description: 'My personal web portfolio built with React, TypeScript and Vite. Features smooth animations, dark mode and responsive design.',
        },
        {
          title: 'Management REST API',
          description: 'RESTful API developed with Node.js and Express for resource management. Includes JWT authentication and Swagger documentation.',
        },
        {
          title: 'Analytics Dashboard',
          description: 'Interactive control panel with Next.js and Tailwind CSS for real-time data visualization with dynamic charts.',
        },
        {
          title: 'Mobile Task App',
          description: 'Cross-platform mobile application with React Native for task management. Real-time synchronization with Firebase.',
        },
        {
          title: 'E-commerce Frontend',
          description: 'Modern online store interface with Vue.js, Vuex for global state and responsive design with Sass.',
        },
        {
          title: 'Blog System',
          description: 'Complete blog platform with Python and Django. Includes comment system, categories and advanced search.',
        },
      ],
      showMore: 'Show More',
      showLess: 'Show Less',
      hideProjects: 'Hide Projects',
    },
    contact: {
      subtitle: "04. What's Next?",
      title: 'Get In Touch',
      description:
        "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!",
      cta: 'Say Hello',
    },
    footer: {
      builtBy: 'Built by Samuel Aranguren with',
      heart: '❤️',
      and: 'and some',
      coffee: '☕',
    },
  },
};
