import { useLanguage } from '../contexts/LanguageContext';
import { TypewriterEffect } from './TypewriterEffect';
import { useState, useEffect } from 'react';
import { m } from 'framer-motion';

const Hero = () => {
  const { t } = useLanguage();
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
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
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-background-light">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 z-20 relative">
        <div className="flex flex-col gap-6 max-w-4xl">
          <div className="flex flex-col gap-4 text-left animate-fade-in-up">
            <h1 className="text-black text-xl md:text-2xl font-bold font-[family-name:var(--font-family-display)] tracking-wide bg-primary w-fit px-2 cartoon-border cartoon-shadow transform -rotate-1">
              {t.hero.greeting}
            </h1>
            <h2 className="text-primary text-6xl sm:text-7xl md:text-8xl font-black leading-tight tracking-tighter font-[family-name:var(--font-family-display)] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] stroke-black text-shadow-cartoon">
              {t.hero.name}
            </h2>
            <h3 className="text-black text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-[-0.015em] font-[family-name:var(--font-family-display)] min-h-[2.5em] md:min-h-[1.5em]">
              <TypewriterEffect phrases={t.hero.typewriterPhrases} />
            </h3>
            <p className="text-black text-lg md:text-xl font-medium leading-relaxed max-w-2xl mt-6 border-l-4 border-black pl-4">
              {t.hero.description}
            </p>
          </div>
          
          <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a
              className="group relative inline-flex h-16 items-center justify-center overflow-hidden bg-primary px-10 font-bold text-black transition-all duration-300 cartoon-border cartoon-shadow cartoon-shadow-hover"
              href="#contact"
            >
              <span className="mr-2 text-xl">{t.hero.cta}</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Animated Arrow */}
      <m.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showArrow ? 1 : 0, y: showArrow ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        onClick={scrollToAbout}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-20 ${
          !showArrow && 'pointer-events-none'
        }`}
        aria-label="Scroll to about section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-black font-mono tracking-widest bg-white px-1 border-2 border-black">SCROLL</span>
          <div className="w-[20px] h-12 border-2 border-black bg-white relative overflow-hidden rounded-full">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full animate-bounce"></div>
          </div>
        </div>
      </m.button>
    </section>
  );
};

export default Hero;
