import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <>
      <footer className="py-6 text-center">
        <div className="flex justify-center gap-6 mb-4 md:hidden">
          <a
            className="text-slate-gray hover:text-accent transition-colors"
            href="https://github.com/ElPokaReal/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            className="text-slate-gray hover:text-accent transition-colors"
            href="https://www.linkedin.com/in/samuel-aranguren-4447b31b4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            className="text-slate-gray hover:text-accent transition-colors"
            href="mailto:samuaranguren@gmail.com"
          >
            <Mail size={24} />
          </a>
        </div>
        <p className="text-slate-gray text-xs font-body">
          {t.footer.designed}
        </p>
        <p className="text-slate-gray text-xs font-body">
          {t.footer.inspired}
        </p>
      </footer>

      {/* Social Links - Left Side (Desktop) */}
      <div className="hidden md:block fixed bottom-0 left-10 z-10">
        <div className="flex flex-col items-center gap-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate-gray">
          <a
            className="text-slate-gray hover:text-accent transition-transform hover:-translate-y-1"
            href="https://github.com/ElPokaReal/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            className="text-slate-gray hover:text-accent transition-transform hover:-translate-y-1"
            href="https://www.linkedin.com/in/samuel-aranguren-4447b31b4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      {/* Email - Right Side (Desktop) */}
      <div className="hidden md:block fixed bottom-0 right-10 z-10">
        <div className="flex flex-col items-center gap-6 after:content-[''] after:block after:w-px after:h-24 after:bg-slate-gray">
          <a
            className="text-slate-gray hover:text-accent transition-transform hover:-translate-y-1 text-xs font-body"
            href="mailto:samuaranguren@gmail.com"
            style={{ writingMode: 'vertical-rl' }}
          >
            samuaranguren@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
