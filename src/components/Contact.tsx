import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 pb-40 md:pb-48 text-center" id="contact">
      <div className="px-4">
        <h2 className="text-primary font-family-display text-xl font-bold text-shadow-cartoon drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
          {t.contact.subtitle}
        </h2>
        <h3 className="font-family-display text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mt-4 mb-6">
          {t.contact.title}
        </h3>
        <p className="text-slate-gray max-w-xl mx-auto mb-10">
          {t.contact.description}
        </p>
        <a
          className="group relative inline-flex items-center justify-center overflow-hidden px-8 py-3 font-bold text-black transition-all duration-300 hover:text-black bg-primary cartoon-border cartoon-shadow cartoon-shadow-hover"
          href="mailto:samuaranguren@gmail.com"
        >
          <span className="relative z-10 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t.contact.cta}
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
