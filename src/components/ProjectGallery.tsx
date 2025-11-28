import { useState, useEffect } from 'react';
import { X, Github, ExternalLink, Filter, Loader2 } from 'lucide-react';
import { m, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import type { Project } from '../services/projectService';
import { projectService } from '../services/projectService';

interface ProjectGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectGallery = ({ isOpen, onClose }: ProjectGalleryProps) => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('All');

  // Combine translations with data
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

    if (isOpen) {
      fetchProjects();
    }
  }, [isOpen]);

  // Helper to get localized content
  const getProjectContent = (project: Project) => ({
    title: language === 'es' ? project.title_es : project.title_en,
    description: language === 'es' ? project.description_es : project.description_en,
    technologies: project.technologies,
    image: project.image_url,
    live: project.live_url,
    github: project.github_url
  });
  
  const categories = ['All', 'React', 'Next.js', 'TypeScript', 'Tailwind'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.technologies.some(tech => tech.includes(filter)));

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <m.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl h-[90vh] bg-white rounded-3xl border-[3px] border-black shadow-[8px_8px_0px_0px_#fff] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b-[3px] border-black bg-primary">
              <h2 className="text-2xl md:text-3xl font-black text-white drop-shadow-[0_0_4px_#000]">
                {t.projectGallery.title}
              </h2>
              <button 
                onClick={onClose}
                className="p-2 bg-white border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors shadow-[2px_2px_0px_0px_#000]"
              >
                <X size={24} />
              </button>
            </div>

            {/* Filters */}
            <div className="p-6 border-b-2 border-black/10 bg-white flex flex-wrap gap-3 items-center">
              <div className="flex items-center gap-2 mr-4 font-bold text-black">
                <Filter size={20} />
                <span>{t.projectGallery.filterBy}:</span>
              </div>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-lg font-bold border-2 border-black transition-all ${
                    filter === cat 
                      ? 'bg-black text-white shadow-[4px_4px_0px_0px_#888] -translate-y-1' 
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  {cat === 'All' ? t.projectGallery.all : cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                  <div className="col-span-full h-64 flex items-center justify-center">
                    <Loader2 className="animate-spin w-12 h-12 text-black" />
                  </div>
                ) : (
                  filteredProjects.map((project, index) => {
                    const content = getProjectContent(project);
                    return (
                  <m.div
                    key={project.id || index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    // Limit stagger to first 6 items to prevent massive cascade lag
                    transition={{ 
                      delay: index < 6 ? index * 0.05 : 0,
                      duration: 0.3
                    }}
                    className="bg-white rounded-xl border-[3px] border-black overflow-hidden hover:shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1 transition-all duration-300 group flex flex-col will-change-transform"
                  >
                    <div className="relative h-48 overflow-hidden border-b-[3px] border-black">
                      <img 
                        src={content.image} 
                        alt={content.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                    
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-xl font-black text-black mb-2">{content.title}</h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                        {content.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {content.technologies.slice(0, 3).map((tech, i) => (
                          <span key={i} className="text-xs font-bold font-mono bg-secondary/30 px-2 py-1 rounded border border-black">
                            {tech}
                          </span>
                        ))}
                        {content.technologies.length > 3 && (
                          <span className="text-xs font-bold font-mono text-gray-500 px-1 py-1">
                            +{content.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-3 mt-auto pt-4 border-t-2 border-black/5">
                        {content.github && (
                          <a 
                            href={content.github}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="flex-1 flex items-center justify-center gap-2 py-2 bg-white border-2 border-black rounded-lg font-bold text-sm hover:bg-black hover:text-white transition-colors"
                          >
                            <Github size={16} />
                            Code
                          </a>
                        )}
                        {content.live && (
                          <a 
                            href={content.live}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary border-2 border-black rounded-lg font-bold text-sm hover:bg-white transition-colors"
                          >
                            <ExternalLink size={16} />
                            Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </m.div>
                    );
                  })
                )}
              </div>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectGallery;
