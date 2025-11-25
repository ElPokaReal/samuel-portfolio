
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Heart, Coffee, Check, Star, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const { t } = useLanguage();

  const [copied, setCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('samuaranguren@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-primary border-t-[3px] border-black pt-20 pb-10 overflow-hidden" id="contact">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center gap-10">
          
          {/* Call to Action */}
          <div className="max-w-2xl relative">
            {/* Decorative Stars */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-8 -left-8 text-black opacity-20 hidden md:block"
            >
              <Star size={48} fill="currentColor" />
            </motion.div>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -right-8 text-black opacity-20 hidden md:block"
            >
              <Star size={32} fill="currentColor" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-[family-name:var(--font-family-display)] text-stroke-3 text-shadow-cartoon relative z-10">
              {t.footer.title}
            </h2>
            <p className="text-black font-bold text-lg md:text-xl max-w-lg mx-auto mb-10">
              {t.footer.description}
            </p>
            
            <button 
              onClick={handleCopyEmail}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-black text-xl rounded-full border-2 border-black hover:bg-white hover:text-black hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {copied ? <Check size={24} className="text-green-500" /> : <Mail size={24} />}
              <span>samuaranguren@gmail.com</span>
              
              {/* Copied Tooltip */}
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.8 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black text-sm font-bold px-3 py-1 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] whitespace-nowrap"
                  >
                    ¡Copiado!
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-4">
            <a
              href="https://github.com/ElPokaReal/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center bg-white border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-y-[2px] hover:bg-black hover:text-white transition-all duration-200 group"
              aria-label="GitHub"
            >
              <Github size={32} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-aranguren-4447b31b4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center bg-white border-[3px] border-black rounded-2xl shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-y-[2px] hover:bg-[#0077b5] hover:text-white transition-all duration-200 group"
              aria-label="LinkedIn"
            >
              <Linkedin size={32} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Copyright & Credits */}
          <div className="mt-16 pt-10 border-t-2 border-black/10 w-full flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 text-black font-bold text-sm mt-2">
              <span>{t.footer.madeWith}</span>
              
              {/* Heart Badge */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-10 h-10 bg-red-500 border-2 border-black shadow-[3px_3px_0px_0px_#000] rounded-lg"
                title="Love"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1 }}
                >
                  <Heart size={20} className="text-white" fill="currentColor" />
                </motion.div>
              </motion.div>

              <span>{t.footer.and}</span>

              {/* Coffee Badge */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex items-center justify-center w-10 h-10 bg-[#6F4E37] border-2 border-black shadow-[3px_3px_0px_0px_#000] rounded-lg"
                title="Coffee"
              >
                 <motion.div
                  animate={{ y: [-1, 1, -1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Coffee size={20} className="text-white" />
                </motion.div>
              </motion.div>
            </div>
            
            <div className="bg-white px-6 py-3 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_#000] font-bold text-sm flex items-center gap-2">
              <span>{t.footer.builtBy}</span>
              <span className="bg-black text-primary px-2 py-0.5 rounded-md -rotate-2 inline-block">Samuel Aranguren</span>
            </div>
            
            <p className="text-black/60 font-mono text-xs">
              © {new Date().getFullYear()} {t.footer.rights}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-white border-[3px] border-black rounded-full shadow-[4px_4px_0px_0px_#000] flex items-center justify-center hover:bg-primary hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000] transition-all z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp size={28} className="text-black" strokeWidth={3} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
