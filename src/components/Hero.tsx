import { useLanguage } from '../contexts/LanguageContext';
import { TypewriterEffect } from './TypewriterEffect';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const { t } = useLanguage();
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Ocultar flecha cuando se hace scroll más de 100px
      if (window.scrollY > 100) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 relative">
      <div className="flex flex-col gap-6 px-4">
        <div className="flex flex-col gap-4 text-left">
          <h1 className="text-primary text-base font-medium font-[family-name:var(--font-family-display)]">
            {t.hero.greeting}
          </h1>
          <h2 className="text-text-light dark:text-text-dark text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tighter font-[family-name:var(--font-family-display)]">
            {t.hero.name}
          </h2>
          <h3 className="text-text-light dark:text-text-dark text-4xl md:text-6xl font-bold leading-tight tracking-[-0.015em] font-[family-name:var(--font-family-display)]">
            <TypewriterEffect phrases={t.hero.typewriterPhrases} />
          </h3>
          <p className="text-slate-gray text-base font-normal leading-relaxed max-w-xl mt-4">
            {t.hero.description}
          </p>
        </div>
        <div className="mt-8">
          <a
            className="flex min-w-[84px] max-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
            href="#contact"
          >
            <span className="truncate">{t.hero.cta}</span>
          </a>
        </div>
      </div>

      {/* Flechas animadas con efecto de profundidad */}
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer transition-all duration-500 ${
          showArrow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to about section"
      >
        <div className="relative">
          {/* Flecha trasera 1 - más opaca */}
          <ChevronDown 
            size={40} 
            className="absolute top-0 left-0 text-accent opacity-20 animate-bounce"
            style={{ animationDelay: '0.1s' }}
          />
          {/* Flecha trasera 2 - opacidad media */}
          <ChevronDown 
            size={40} 
            className="absolute top-0 left-0 text-accent opacity-40 animate-bounce"
            style={{ animationDelay: '0.05s' }}
          />
          {/* Flecha principal */}
          <ChevronDown 
            size={40} 
            className="relative text-accent hover:text-accent/80 transition-colors animate-bounce"
          />
        </div>
      </button>
    </section>
  );
};

export default Hero;
