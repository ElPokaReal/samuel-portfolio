import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Github, Linkedin, Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-state={isMenuOpen ? 'active' : ''}
        className="fixed z-50 w-full px-2 group"
      >
        <motion.div
          initial={false}
          animate={isScrolled ? 'scrolled' : 'top'}
          variants={{
            top: {
              maxWidth: '100%',
              borderRadius: '0px',
              marginTop: '0px',
            },
            scrolled: {
              maxWidth: '1024px',
              borderRadius: '16px',
              marginTop: '8px',
            },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={cn(
            'mx-auto px-6 transition-all duration-300 lg:px-12',
            isScrolled && 'bg-background-light/50 dark:bg-background-dark/50 max-w-4xl rounded-2xl border border-slate-gray/30 backdrop-blur-lg lg:px-5'
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            {/* Logo */}
            <div className="flex w-full justify-between lg:w-auto">
              <a href="/" className="flex items-center gap-3">
                <div className="text-accent text-2xl">
                  <Terminal />
                </div>
                <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] font-[family-name:var(--font-family-display)]">
                  SD
                </h2>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                <li>
                  <a
                    className="text-slate-gray hover:text-accent block duration-150"
                    href="#about"
                  >
                    {t.header.about}
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-gray hover:text-accent block duration-150"
                    href="#projects"
                  >
                    {t.header.projects}
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-gray hover:text-accent block duration-150"
                    href="#contact"
                  >
                    {t.header.contact}
                  </a>
                </li>
              </ul>
            </div>

            {/* Desktop Buttons */}
            <div className="bg-background-light dark:bg-background-dark group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-3 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  <li>
                    <a
                      className="text-slate-gray hover:text-accent block duration-150"
                      href="#about"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.header.about}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-slate-gray hover:text-accent block duration-150"
                      href="#projects"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.header.projects}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-slate-gray hover:text-accent block duration-150"
                      href="#contact"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t.header.contact}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
          <a
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent border border-accent text-accent hover:bg-accent/10 text-sm font-bold leading-normal tracking-[0.015em] transition-colors"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="truncate">{t.header.cv}</span>
          </a>
          <a
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-transparent text-slate-gray hover:text-accent gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 transition-colors"
            href="https://github.com/ElPokaReal/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-transparent text-slate-gray hover:text-accent gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 transition-colors"
            href="https://www.linkedin.com/in/samuel-aranguren-4447b31b4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
                {/* Language Toggle Button */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-center gap-1.5 overflow-hidden rounded-lg h-10 px-3 bg-transparent text-slate-gray hover:text-accent hover:bg-accent/5 text-sm font-bold leading-normal tracking-[0.015em] transition-all"
                  aria-label="Toggle language"
                >
                  <Languages size={18} />
                  <span className="uppercase text-xs">{language}</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
