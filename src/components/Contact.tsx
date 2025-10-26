import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 text-center" id="contact">
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
          className="inline-block min-w-[84px] max-w-[200px] cursor-pointer overflow-hidden rounded-lg h-12 px-8 bg-transparent border border-accent text-accent hover:bg-accent/10 text-base font-bold leading-loose tracking-[0.015em] transition-colors"
          href="mailto:samuaranguren@gmail.com"
        >
          <span className="truncate">{t.contact.cta}</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
