import { useEffect, useState } from 'react';
import { ChevronUp, Hammer, Construction } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

interface OtherProjectsProps {
  onHide: () => void;
}

const OtherProjects = ({ onHide }: OtherProjectsProps) => {
  const { t } = useLanguage();
  const [dots, setDots] = useState('');
  
  // Animación de puntos suspensivos
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-24 px-4" id="other-projects">
      {/* Developer Message */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-white rounded-3xl border-[3px] border-black shadow-[8px_8px_0px_0px_#000] overflow-hidden relative"
      >
        {/* Decorative Header */}
        <div className="bg-primary border-b-[3px] border-black px-6 py-4 flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-4 h-4 rounded-full bg-black border-2 border-white"></div>
            <div className="w-4 h-4 rounded-full bg-black border-2 border-white"></div>
          </div>
          <span className="font-black text-black text-lg uppercase tracking-wider ml-2">
            Work In Progress
          </span>
        </div>

        <div className="p-8 md:p-12 flex flex-col items-center text-center gap-6 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>

          <motion.div 
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="w-20 h-20 bg-secondary rounded-2xl border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex items-center justify-center mb-2 z-10"
          >
            <Construction size={40} className="text-black" />
          </motion.div>

          <div className="space-y-4 z-10">
            <h3 className="text-3xl md:text-4xl font-black text-black font-family-display drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] stroke-black text-shadow-cartoon">
              {t.otherProjects.title}
            </h3>
            
            <p className="text-black font-bold text-lg md:text-xl max-w-lg mx-auto">
              {t.otherProjects.description}{dots}
            </p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg font-bold text-sm -rotate-2 mt-4 border-2 border-black shadow-[4px_4px_0px_0px_#888]">
              <Hammer size={16} className="text-primary" />
              <span>{t.otherProjects.building}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hide Button */}
      <div className="flex justify-center items-center mt-12">
        <button
          onClick={onHide}
          className="group relative inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-black text-lg rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-y-[2px] hover:bg-black hover:text-white transition-all duration-200"
        >
          <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          <span>{t.otherProjects.hide}</span>
        </button>
      </div>
    </section>
  );
};

export default OtherProjects;
