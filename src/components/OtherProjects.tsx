import { useEffect, useState } from 'react';
import { ChevronUp, Terminal, Code2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface OtherProjectsProps {
  onHide: () => void;
}

const OtherProjects = ({ onHide }: OtherProjectsProps) => {
  const { language } = useLanguage();
  const [dots, setDots] = useState('');
  
  // Animación de puntos suspensivos
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-24 px-4" id="other-projects">
      {/* Developer Message */}
      <div className="max-w-3xl mx-auto bg-background-dark/50 dark:bg-[#112240] rounded-lg border border-accent/30 overflow-hidden">
        <div className="bg-slate-gray/10 px-4 py-2 flex items-center gap-2 border-b border-accent/30">
          <Terminal size={16} className="text-accent" />
          <span className="text-xs font-mono text-slate-gray">
            {language === 'es' ? 'console.log()' : 'console.log()'}
          </span>
        </div>
        <div className="p-8 font-mono text-sm">
          <div className="flex items-start gap-3">
            <Code2 size={24} className="text-accent mt-1 flex-shrink-0" />
            <div className="space-y-3">
              <p className="text-slate-gray text-base">
                <span className="text-primary drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">{'// '}</span>
                {language === 'es' 
                  ? 'Próximamente: Más proyectos increíbles en camino'
                  : 'Coming soon: More awesome projects on the way'}
              </p>
              <p className="text-accent text-lg">
                <span className="text-text-light dark:text-text-dark">{'> '}</span>
                {language === 'es'
                  ? `await buildingNewProjects()${dots}`
                  : `await buildingNewProjects()${dots}`}
              </p>
              <p className="text-slate-gray/70 text-xs mt-4">
                <span className="text-primary drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">{'/* '}</span>
                {language === 'es'
                  ? 'Estoy trabajando en nuevos proyectos emocionantes. ¡Vuelve pronto!'
                  : 'I\'m working on exciting new projects. Check back soon!'}
                <span className="text-primary drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">{' */'}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hide Button */}
      <div className="flex justify-center items-center mt-12">
        <button
          onClick={onHide}
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-8 py-3 font-bold text-slate-gray transition-all duration-300 hover:text-white"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-gray to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-gray"></span>
          <span className="absolute top-0 left-0 w-0.5 h-full bg-slate-gray"></span>
          <span className="absolute top-0 right-0 w-0.5 h-full bg-slate-gray"></span>
          <span className="absolute bottom-0 right-0 w-full h-0.5 bg-slate-gray"></span>
          <span className="relative z-10 flex items-center gap-2">
            <ChevronUp size={20} />
            {language === 'es' ? 'Ocultar' : 'Hide'}
          </span>
        </button>
      </div>
    </section>
  );
};

export default OtherProjects;
