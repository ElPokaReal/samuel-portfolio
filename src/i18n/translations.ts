export type Language = 'es' | 'en';

export interface ProjectData {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
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
    description: string;
    cta: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    techTitle: string;
  };
  projects: {
    title: string;
    featured: string;
    viewMore: string;
    items: ProjectData[];
  };
  contact: {
    subtitle: string;
    title: string;
    description: string;
    cta: string;
  };
  footer: {
    designed: string;
    inspired: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    meta: {
      title: 'Portfolio de Samuel | Desarrollador Web',
      description: 'Portfolio de Samuel Aranguren - Desarrollador Web especializado en NextJS y tecnologías modernas',
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
      name: 'Samuel Developer.',
      tagline: 'Creo cosas para la web.',
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
      techTitle: 'Aquí hay algunas tecnologías con las que he estado trabajando recientemente:',
    },
    projects: {
      title: 'Proyectos Destacados',
      featured: 'Proyecto Destacado',
      viewMore: 'Ver más proyectos',
      items: [
        {
          title: 'Sistema de Gestión de Préstamos AgroTrujillo',
          description:
            'Como trabajador en AgroTrujillo, noté un problema al gestionar a los productores al otorgarles préstamos, así que decidí desarrollar un sistema que permite administrar los préstamos otorgados a los productores en el área de Gestión Productiva.',
          technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript'],
          image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
          github: '#',
          live: '#',
        },
        {
          title: 'LimpiVen - App de Servicios de Limpieza',
          description:
            'LimpiVen es una aplicación móvil diseñada para conectar usuarios con servicios de limpieza en Venezuela. La app simplifica el proceso de encontrar, reservar y gestionar profesionales de limpieza para hogares y negocios.',
          technologies: ['React Native', 'Firebase', 'Node.js'],
          image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
          github: '#',
          live: '#',
        },
        {
          title: 'Sistema de Inventario para CDCE',
          description:
            'He desarrollado un sistema de gestión de inventario que ayuda a los usuarios a rastrear, organizar y controlar el stock en diferentes zonas o áreas. Proporciona una interfaz simple para gestionar artículos, cantidades y ubicaciones de manera eficiente.',
          technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
          image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
          github: '#',
          live: '#',
        },
        {
          title: 'Sitio Web Tu Conexión Infinita',
          description:
            'Este es el sitio web oficial de la empresa que incluye toda la información relevante sobre el servicio de internet y telecomunicaciones.',
          technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
          github: '#',
          live: '#',
        },
      ],
    },
    contact: {
      subtitle: '03. ¿Cuál es el siguiente paso?',
      title: 'Ponte en Contacto',
      description:
        'Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada está siempre abierta. Ya sea que tengas una pregunta o simplemente quieras saludar, ¡haré todo lo posible por responderte!',
      cta: '¡Hola!',
    },
    footer: {
      designed: 'Diseñado y construido por Samuel Developer.',
      inspired: 'Inspirado en el diseño de Brittany Chiang.',
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
      name: 'Samuel Developer.',
      tagline: 'I build things for the web.',
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
      techTitle: "Here are a few technologies I've been working with recently:",
    },
    projects: {
      title: 'Featured Projects',
      featured: 'Featured Project',
      viewMore: 'View More Projects',
      items: [
        {
          title: 'AgroTrujillo Loans Management System',
          description:
            'As a worker at AgroTrujillo, I noticed a problem when managing producers when granting them loans, so I decided to develop a system that allows managing loans granted to producers in the area of Productive Management.',
          technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript'],
          image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
          github: '#',
          live: '#',
        },
        {
          title: 'LimpiVen - Cleaning Services App',
          description:
            'LimpiVen is a mobile application designed to connect users with cleaning services in Venezuela. The app streamlines the process of finding, booking, and managing cleaning professionals for homes and businesses.',
          technologies: ['React Native', 'Firebase', 'Node.js'],
          image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
          github: '#',
          live: '#',
        },
        {
          title: 'Inventory System for CDCE',
          description:
            "I've made an inventory management system that helps users track, organize, and control stock across different zones or areas. It provides a simple interface for managing items, quantities, and locations efficiently.",
          technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
          image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
          github: '#',
          live: '#',
        },
        {
          title: 'Tu Conexión Infinita Website',
          description:
            'This is the official website of the company that includes all relevant information about the service.',
          technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
          github: '#',
          live: '#',
        },
      ],
    },
    contact: {
      subtitle: "03. What's Next?",
      title: 'Get In Touch',
      description:
        "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!",
      cta: 'Say Hello',
    },
    footer: {
      designed: 'Designed & Built by Samuel Developer.',
      inspired: "Inspired by Brittany Chiang's design.",
    },
  },
};
