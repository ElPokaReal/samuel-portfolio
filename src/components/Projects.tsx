import { useRef, useState, useEffect } from 'react';
import { Github, ExternalLink, ArrowRight, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { projectService } from '../services/projectService';
import type { Project } from '../services/projectService';
import { ScrollReveal } from './ScrollReveal';
import { m } from 'framer-motion';

interface ProjectsProps {
  onShowMore: () => void;
}

const Projects = ({ onShowMore }: ProjectsProps) => {
  const { t, language } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);
  
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await projectService.getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Helper to get localized content
  const getProjectContent = (project: Project) => ({
    title: language === 'es' ? project.title_es : project.title_en,
    description: language === 'es' ? project.description_es : project.description_en,
    technologies: project.technologies,
    image: project.image_url,
    live: project.live_url,
    github: project.github_url
  });

  useEffect(() => {
    const container = scrollContainerRef.current;
    const startSentinel = document.getElementById('scroll-sentinel-start');
    const endSentinel = document.getElementById('scroll-sentinel-end');

    if (!container || !startSentinel || !endSentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'scroll-sentinel-start') {
            setShowLeftBtn(!entry.isIntersecting);
          }
          if (entry.target.id === 'scroll-sentinel-end') {
            setShowRightBtn(!entry.isIntersecting);
          }
        });
      },
      {
        root: container,
        threshold: 0.1, // Trigger as soon as 10% of sentinel is visible
      }
    );

    observer.observe(startSentinel);
    observer.observe(endSentinel);

    return () => observer.disconnect();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 500;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#fffdf5] overflow-hidden border-t-4 border-black relative" id="projects">
      <div className="w-full px-4 md:px-8 relative">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <ScrollReveal width="100%" overflow="visible">
            <div className="relative inline-block">
              {/* Decorative background blob */}
              <div className="absolute -inset-2 bg-[#ff5f57] transform -rotate-2 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_#000]"></div>
              
              <h2 className="relative z-10 flex items-center gap-3 text-3xl md:text-5xl font-black font-family-display text-white text-stroke-3 text-shadow-cartoon px-6 py-4">
                {t.projects.title}
              </h2>
            </div>
          </ScrollReveal>
        </div>

        {/* Navigation Buttons - Absolute Positioned */}
        {showLeftBtn && (
          <button 
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 p-4 bg-white border-[3px] border-black rounded-full hover:bg-[#febc2e] transition-all shadow-[4px_4px_0px_0px_#000] active:translate-y-[-40%] active:shadow-none hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft size={32} strokeWidth={3} />
          </button>
        )}
        
        {showRightBtn && (
          <button 
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 p-4 bg-white border-[3px] border-black rounded-full hover:bg-[#febc2e] transition-all shadow-[4px_4px_0px_0px_#000] active:translate-y-[-40%] active:shadow-none hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight size={32} strokeWidth={3} />
          </button>
        )}

        {/* Comic Strip Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar px-2 md:px-16"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Start Sentinel */}
          <div id="scroll-sentinel-start" className="min-w-px h-full opacity-0 pointer-events-none"></div>
          
          {loading ? (
             <div className="min-w-[85vw] md:min-w-[380px] h-[400px] flex items-center justify-center">
               <Loader2 className="animate-spin w-12 h-12 text-black" />
             </div>
          ) : (
            projects.map((project, index) => {
              const content = getProjectContent(project);
              return (
            <m.div 
              key={project.id || index}
              className="min-w-[85vw] md:min-w-[380px] lg:min-w-[420px] snap-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Comic Panel Card */}
              <div className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000] overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                
                {/* Browser Top Bar */}
                <div className="bg-black p-3 flex items-center gap-3 border-b-4 border-black">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28c840] border border-white/20"></div>
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-md px-3 py-1 text-[10px] md:text-xs font-mono text-gray-200 truncate">
                    {content.live ? new URL(content.live).hostname : 'localhost:3000'}
                  </div>
                </div>

                {/* Project Image Area */}
                <div className="relative aspect-video border-b-4 border-black group overflow-hidden bg-gray-100">
                  <img 
                    src={content.image} 
                    alt={content.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width="1920"
                    height="1058"
                  />
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    {content.live && (
                      <a 
                        href={content.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[#28c840] border-[3px] border-black rounded-full text-black hover:scale-110 transition-transform shadow-[4px_4px_0px_0px_#000]"
                        title="Live Demo"
                      >
                        <ExternalLink size={24} strokeWidth={3} />
                      </a>
                    )}
                    {content.github && (
                      <a 
                        href={content.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white border-[3px] border-black rounded-full text-black hover:scale-110 transition-transform shadow-[4px_4px_0px_0px_#000]"
                        title="View Code"
                      >
                        <Github size={24} strokeWidth={3} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-1 bg-white relative">
                  {/* Floating Badge */}
                  {project.featured && (
                    <div className="absolute -top-5 right-6 bg-[#febc2e] px-4 py-1 border-[3px] border-black rounded-lg shadow-[4px_4px_0px_0px_#000] transform rotate-2 text-black">
                      <span className="font-black text-xs uppercase tracking-wider">Featured</span>
                    </div>
                  )}

                  <h3 className="text-2xl font-black font-family-display mb-3 leading-tight">
                    {content.title}
                  </h3>
                  
                  <p className="text-black font-medium text-sm mb-6 line-clamp-3">
                    {content.description}
                  </p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {content.technologies.slice(0, 4).map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 bg-gray-100 border-2 border-black rounded-md text-xs font-bold font-mono transform hover:-rotate-2 transition-transform cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
              );
            })
          )}
          
          {/* "View More" Card at the end */}
          <div className="min-w-[200px] md:min-w-[300px] snap-center flex items-center justify-center">
            <button
              onClick={onShowMore}
              className="group flex flex-col items-center gap-4 p-8 bg-[#febc2e] border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_#000] transition-all"
            >
              <div className="w-16 h-16 bg-white border-[3px] border-black rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                <ArrowRight size={32} strokeWidth={3} />
              </div>
              <span className="font-black text-xl font-family-display text-center">
                {t.projects.viewMore}
              </span>
            </button>
          </div>
          
          {/* End Sentinel */}
          <div id="scroll-sentinel-end" className="min-w-px h-full opacity-0 pointer-events-none"></div>
        </div>

        {/* Mobile Hint */}
        <div className="md:hidden text-center mt-4 text-sm font-bold text-black">
          {t.projects.swipeToExplore}
        </div>

      </div>
    </section>
  );
};

export default Projects;
