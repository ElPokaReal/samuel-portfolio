export interface ProjectData {
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
}

export const projectData: ProjectData[] = [
  {
    // Tu Conexión Infinita Website
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel', 'TypeScript'],
    image: '/tuconexion.webp',
    live: 'https://tuconexioninfinita.com',
  },
  {
    // Efemérides Venezolanas
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Gemini AI'],
    image: '/ephemeris.webp',
    github: 'https://github.com/ElPokaReal/ephemeris-venezuela',
    live: 'https://ephemeris-venezuela-rho-livid.vercel.app/',
  },
  {
    // Better Resume
    technologies: ['React', 'TypeScript', 'GSAP', 'Supabase'],
    image: '/betterresume.webp',
    github: 'https://github.com/ElPokaReal/better-resume',
    live: 'https://better-resume-gen.netlify.app/',
  },
  {
    // Inventory System for CDCE
    technologies: ['React', 'Node.js', 'MySQL', 'Express'],
    image: '/inventariozona.webp',
    github: 'https://github.com/ElPokaReal/inventario-zona',
    live: 'https://inventario-zona.netlify.app/',
  },
  {
    // AgroTrujillo Loans Management System
    technologies: ['React', 'PostgreSQL', 'Node.js', 'JavaScript'],
    image: '/agrotrujillo.webp',
    github: 'https://github.com/ElPokaReal/agrotrujillo',
    live: 'https://agrotrujillo.netlify.app/',
  },
];
