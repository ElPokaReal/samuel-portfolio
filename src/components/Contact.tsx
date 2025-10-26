import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 pb-40 md:pb-48 text-center" id="contact">
      <div className="px-4">
        <h2 className="text-primary font-[family-name:var(--font-family-display)] text-base">
          {t.contact.subtitle}
        </h2>
        <h3 className="font-[family-name:var(--font-family-display)] text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mt-4 mb-6">
          {t.contact.title}
        </h3>
        <p className="text-slate-gray max-w-xl mx-auto mb-10">
          {t.contact.description}
        </p>
        <a
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-8 py-3 font-bold text-accent transition-all duration-300 hover:text-white"
          href="mailto:samuaranguren@gmail.com"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></span>
          <span className="absolute top-0 left-0 w-0.5 h-full bg-accent"></span>
          <span className="absolute top-0 right-0 w-0.5 h-full bg-accent"></span>
          <span className="absolute bottom-0 right-0 w-full h-0.5 bg-accent"></span>
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
