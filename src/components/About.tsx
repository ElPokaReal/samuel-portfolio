import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-24" id="about">
      <div className="flex flex-col md:flex-row items-start gap-10 px-4">
        <div className="w-full md:w-1/2">
          <h2 className="flex items-center gap-4 text-3xl md:text-4xl font-black leading-tight tracking-[-0.015em] font-[family-name:var(--font-family-display)] text-black mb-16 px-4">
            <span className="bg-primary px-2 cartoon-border cartoon-shadow transform -rotate-2">01.</span>
            {t.about.title}
          </h2>
          <div className="text-slate-gray text-base font-normal leading-relaxed space-y-4">
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
            <img 
              src="https://skillicons.dev/icons?i=react,js,ts,nodejs,php,flutter,express,nextjs,supabase,postgresql,mysql,sqlite,html,css,git,laravel,tailwind&theme=light&perline=6" 
              alt="Tecnologías de desarrollo web: React, Next.js, TypeScript, Node.js, Supabase, SQL y más"
              loading="lazy"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
            <div className="absolute inset-0 rounded-none bg-primary cartoon-border cartoon-shadow transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative w-full h-full rounded-none overflow-hidden z-10 bg-white cartoon-border">
              <img
                className="w-full h-full object-cover filter grayscale hover:filter-none transition-all duration-300"
                alt="Samuel Aranguren - Desarrollador Web Full Stack en Venezuela"
                src="/profile.webp"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
