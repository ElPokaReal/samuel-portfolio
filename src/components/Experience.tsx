import { useLanguage } from '../contexts/LanguageContext';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-24" id="experience">
      <div className="px-4">
        <h2 className="flex items-center gap-4 text-3xl md:text-4xl font-black leading-tight tracking-[-0.015em] font-family-display text-black mb-16 px-4">
          <span className="bg-primary px-2 cartoon-border cartoon-shadow transform -rotate-2">02.</span>
          {t.experience.title}  
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
                  <h3 className="text-xl font-bold text-text-light dark:text-text-dark font-family-display">
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
