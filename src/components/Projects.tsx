import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { projectData } from '../data/projectLinks';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'framer-motion';

interface ProjectsProps {
  onShowMore: () => void;
}

const Projects = ({ onShowMore }: ProjectsProps) => {
  const { t } = useLanguage();
  const projects = t.projects.items.map((project, index) => ({
    ...project,
    ...projectData[index],
  }));

  return (
    <section className="py-24 md:py-32 bg-white" id="projects">
      <ScrollReveal width="100%">
        <h2 className="flex items-center gap-4 text-4xl md:text-6xl font-black leading-tight tracking-[-0.015em] font-[family-name:var(--font-family-display)] text-black mb-20 px-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] stroke-black text-shadow-cartoon">
          <span className="bg-primary px-4 py-1 cartoon-border cartoon-shadow transform -rotate-2 text-2xl md:text-4xl">03.</span>
          {t.projects.title}
        </h2>
      </ScrollReveal>

      <div className="space-y-32 px-4 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ScrollReveal key={index} width="100%" variant="fade">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
              
              {/* Browser Window Card */}
              <motion.div 
                whileHover={{ y: -8, rotate: index % 2 === 0 ? 1 : -1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full lg:w-3/5 relative group"
              >
                <div className="bg-white rounded-xl border-[3px] border-black shadow-[12px_12px_0px_0px_#000] overflow-hidden">
                  {/* Browser Header */}
                  <div className="bg-white border-b-[3px] border-black px-4 py-3 flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black"></div>
                      <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-black"></div>
                      <div className="w-3 h-3 rounded-full bg-[#28c840] border border-black"></div>
                    </div>
                    <div className="flex-1 bg-gray-100 border-2 border-black rounded-full px-4 py-1 text-xs font-mono text-gray-500 truncate">
                      {project.live || project.github || 'localhost:3000'}
                    </div>
                  </div>
                  
                  {/* Image Viewport */}
                  <div className="relative aspect-video overflow-hidden group-hover:brightness-110 transition-all">
                    <img
                      alt={project.title}
                      className="w-full h-full object-cover"
                      src={project.image}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none" />
                  </div>
                </div>
                
                {/* Decorative Elements behind */}
                <div className={`absolute -z-10 top-10 ${index % 2 === 0 ? '-left-10' : '-right-10'} w-full h-full bg-primary border-[3px] border-black rounded-xl hidden lg:block`}></div>
              </motion.div>

              {/* Project Info */}
              <div className="w-full lg:w-2/5 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="bg-secondary px-3 py-1 rounded-lg border-2 border-black font-bold text-sm shadow-[2px_2px_0px_0px_#000]">
                    {t.projects.featured}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black font-[family-name:var(--font-family-display)] text-black leading-none">
                  {project.title}
                </h3>

                <div className="bg-white p-6 rounded-xl border-[3px] border-black shadow-[4px_4px_0px_0px_#000] relative">
                  <p className="text-black font-medium leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 border-2 border-black rounded-md font-bold text-xs font-mono hover:bg-primary transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold border-[3px] border-black rounded-xl shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-y-[2px] transition-all"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-black text-white font-bold border-[3px] border-black rounded-xl shadow-[4px_4px_0px_0px_#888] hover:shadow-[2px_2px_0px_0px_#888] hover:translate-y-[2px] transition-all group"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="text-center mt-32">
        <ScrollReveal width="100%" variant="fade">
          <button
            onClick={onShowMore}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-primary text-black font-black text-xl rounded-2xl border-[4px] border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] hover:translate-y-[4px] transition-all"
          >
            <span>{t.projects.viewMore}</span>
            <div className="bg-black text-white p-1 rounded-full">
              <ExternalLink size={20} />
            </div>
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
