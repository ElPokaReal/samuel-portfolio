import { useState, useEffect, useRef } from 'react';
import { Menu, X, Terminal, Github, Linkedin, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '../lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isHidden, setIsHidden] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;
    
    // Smart Navbar Logic:
    // Hide on scroll down (if moved more than 10px and not at top)
    // Show on scroll up
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    lastScrollY.current = latest;
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // User request: Prioritize 'projects' (Portfolio) as the active icon.
            // If we are in the 'about' section, we highlight 'projects' instead.
            if (entry.target.id === 'about') {
              setActiveSection('projects');
            } else {
              setActiveSection(entry.target.id);
            }
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px' // Trigger when section is in the middle of viewport
      }
    );

    const sections = ['about', 'projects', 'contact'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      // Adjusted offset logic:
      // 'about': -50px (scrolls 50px INTO the section, skipping part of the 80px+ padding)
      // 'projects': -50px (scrolls 50px INTO the section, skipping part of the 96px+ padding)
      // 'contact': 0px (footer)
      let headerOffset = 100; // Default fallback
      
      if (sectionId === 'about') headerOffset = -50;
      if (sectionId === 'projects') headerOffset = -50;
      if (sectionId === 'contact') headerOffset = 0;

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: t.header.about },
    { id: 'projects', label: t.header.projects },
    { id: 'contact', label: t.header.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      {/* Floating Command Center */}
      <motion.nav
        initial={{ y: -100, opacity: 0, scale: 0.8 }}
        animate={{ 
          y: isHidden ? -200 : 0, 
          opacity: 1, 
          scale: 1 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="pointer-events-auto bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000] rounded-full px-2 py-2 flex items-center gap-2 md:gap-4 max-w-[90vw] md:max-w-fit"
      >
        {/* Logo / Home */}
        <a 
          href="/samuel-portfolio" 
          className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-black text-primary rounded-full border-2 border-black hover:bg-primary hover:text-black transition-colors"
          aria-label="Home"
        >
          <Terminal size={20} className="md:w-6 md:h-6" />
        </a>

        {/* Divider */}
        <div className="w-[2px] h-8 bg-black/10 hidden md:block"></div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={cn(
                  "px-4 py-2 rounded-full font-bold text-sm border-2 border-transparent transition-all duration-200",
                  activeSection === item.id
                    ? "bg-primary border-black shadow-[2px_2px_0px_0px_#000] -translate-y-1"
                    : "hover:bg-gray-100 hover:border-black hover:-translate-y-0.5"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
           <span className="font-bold text-sm mr-2 font-[family-name:var(--font-family-display)]">MENU</span>
        </div>

        {/* Actions Group */}
        <div className="flex items-center gap-2">
          {/* CV Button */}
          <a
            href={t.header.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white text-black border-2 border-black rounded-full hover:bg-black hover:text-white transition-all hover:shadow-[2px_2px_0px_0px_#000] hover:-translate-y-0.5"
            title={t.header.cv}
          >
            <FileText size={18} className="md:w-5 md:h-5" />
          </a>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center font-black text-xs md:text-sm bg-primary border-2 border-black rounded-full hover:shadow-[2px_2px_0px_0px_#000] hover:-translate-y-0.5 transition-all"
            aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            {language.toUpperCase()}
          </button>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center bg-black text-white rounded-full border-2 border-black active:scale-95 transition-transform"
            aria-label={isMenuOpen ? (language === 'es' ? 'Cerrar menú' : 'Close menu') : (language === 'es' ? 'Abrir menú' : 'Open menu')}
            aria-expanded={isMenuOpen}
            title={isMenuOpen ? (language === 'es' ? 'Cerrar menú' : 'Close menu') : (language === 'es' ? 'Abrir menú' : 'Open menu')}
          >
            {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay (Comic Panel Style) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute top-24 left-4 right-4 bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_#000] rounded-2xl p-6 z-40 pointer-events-auto md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={cn(
                    "block w-full text-center py-4 font-black text-xl border-2 border-black rounded-xl transition-all",
                    activeSection === item.id
                      ? "bg-primary shadow-[4px_4px_0px_0px_#000] -translate-y-1"
                      : "bg-white hover:bg-gray-50 hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1"
                  )}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="h-px bg-black/10 my-2"></div>

              <div className="flex gap-4">
                <a
                  href={t.header.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 font-bold bg-black text-white border-2 border-black rounded-xl hover:bg-gray-900 transition-all"
                >
                  <FileText size={18} />
                  CV
                </a>
                <div className="flex gap-2">
                   <a href="https://github.com/ElPokaReal/" target="_blank" rel="noopener noreferrer" className="w-12 flex items-center justify-center border-2 border-black rounded-xl hover:bg-primary transition-colors">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/samuel-aranguren-4447b31b4" target="_blank" rel="noopener noreferrer" className="w-12 flex items-center justify-center border-2 border-black rounded-xl hover:bg-primary transition-colors">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
