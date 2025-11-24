import { useLanguage } from '../contexts/LanguageContext';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-24" id="experience">
      <div className="px-4">
        <h2 className="flex items-center gap-4 text-2xl font-bold leading-tight tracking-[-0.015em] font-[family-name:var(--font-family-display)] text-text-light dark:text-text-dark mb-10">
          <span className="text-primary text-shadow-cartoon drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">02.</span>{t.experience.title}
          <span className="flex-grow h-px bg-slate-gray/30"></span>
        </h2>

        <div className="max-w-3xl space-y-8">
          {t.experience.items.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-accent/30 last:pb-0 hover:border-accent transition-colors group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-2 border-black group-hover:scale-125 transition-transform"></div>

              {/* Content */}
              <div className="space-y-3">
                {/* Company and Position */}
                <div>
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark font-[family-name:var(--font-family-display)]">
                    {item.position}
                  </h3>
                  <div className="flex items-center gap-2 text-black font-bold mt-1">
                    <Briefcase size={16} />
                    <span>{item.company}</span>
                  </div>
                </div>

                {/* Location and Period */}
                <div className="flex flex-wrap gap-4 text-sm text-slate-gray">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-gray text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
