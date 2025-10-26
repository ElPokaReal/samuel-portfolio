export interface ProjectData {
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
}

export const projectData: ProjectData[] = [
  {
    // AgroTrujillo Loans Management System
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript'],
    image: 'https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg?semt=ais_hybrid&w=740&q=80',
    github: 'https://github.com/ElPokaReal/agrotrujillo',
    live: '#',
  },
  {
    // LimpiVen - Cleaning Services App
    technologies: ['React Native', 'Firebase', 'Node.js'],
    image: 'https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg?semt=ais_hybrid&w=740&q=80',
    github: 'https://github.com/ElPokaReal/limpiven',
    live: '#',
  },
  {
    // Inventory System for CDCE
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg?semt=ais_hybrid&w=740&q=80',
    github: 'https://github.com/ElPokaReal/inventario-zona',
    live: '#',
  },
  {
    // Tu Conexión Infinita Website
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    image: 'https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg?semt=ais_hybrid&w=740&q=80',
    live: 'https://tuconexioninfinita.com',
  },
];
