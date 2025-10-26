import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const technologies = [
    'JavaScript',
    'React',
    'Node.js',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'Supabase',
    'NextJS'
  ];

  return (
    <section className="py-20 md:py-24" id="about">
      <div className="flex flex-col md:flex-row items-start gap-10 px-4">
        <div className="w-full md:w-1/2">
          <h2 className="flex items-center gap-4 text-2xl font-bold leading-tight tracking-[-0.015em] font-[family-name:var(--font-family-display)] text-text-light dark:text-text-dark mb-6">
            <span className="text-primary">01.</span>{t.about.title}
            <span className="flex-grow h-px bg-slate-gray/30"></span>
          </h2>
          <div className="text-slate-gray text-base font-normal leading-relaxed space-y-4">
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
            <img src="https://skillicons.dev/icons?i=react,js,ts,nodejs,php,flutter,express,nextjs,supabase,postgresql,mysql,sqlite,html,css,git,laravel,tailwind&theme=light&perline=6" alt="Tech Stack" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
            <div className="absolute inset-0 rounded-lg bg-accent transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative w-full h-full rounded-lg overflow-hidden z-10">
              <img
                className="w-full h-full object-cover filter grayscale hover:filter-none transition-all duration-300"
                alt="Foto profesional"
                src="https://img.freepik.com/vector-gratis/ilustracion-icono-galeria_53876-27002.jpg?semt=ais_hybrid&w=740&q=80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
