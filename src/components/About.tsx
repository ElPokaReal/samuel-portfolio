import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const technologies = [
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
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
            <p>{t.about.techTitle}</p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-center gap-2">
                  <ChevronRight className="text-accent" size={16} />
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
            <div className="absolute inset-0 rounded-lg bg-accent transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative w-full h-full rounded-lg overflow-hidden z-10">
              <img
                className="w-full h-full object-cover filter grayscale hover:filter-none transition-all duration-300"
                alt="Foto profesional"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
