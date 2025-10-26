import { useLanguage } from '../contexts/LanguageContext';
import { TypewriterEffect } from './TypewriterEffect';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32">
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
    </section>
  );
};

export default Hero;
