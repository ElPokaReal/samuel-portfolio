export interface ProjectData {
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
}

export const projectData: ProjectData[] = [
  {
    // Tu Conexión Infinita Website
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    live: 'https://tuconexioninfinita.com',
  },
  {
    // LimpiVen - Cleaning Services App
    technologies: ['React Native', 'Firebase', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
    github: 'https://github.com/ElPokaReal/limpiven',
    live: '#',
  },
  {
    // Inventory System for CDCE
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
    github: 'https://github.com/ElPokaReal/inventario-zona',
    live: '#',
  },
  {
    // AgroTrujillo Loans Management System
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
    github: 'https://github.com/ElPokaReal/agrotrujillo',
    live: '#',
  },
];
