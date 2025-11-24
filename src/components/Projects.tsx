import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { projectData } from '../data/projectLinks';
import { ScrollReveal } from './ScrollReveal';

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
        <h2 className="flex items-center gap-4 text-3xl md:text-4xl font-black leading-tight tracking-[-0.015em] font-[family-name:var(--font-family-display)] text-black mb-16 px-4">
          <span className="bg-primary px-2 cartoon-border cartoon-shadow transform -rotate-2">03.</span>
          {t.projects.title}
        </h2>
      </ScrollReveal>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <ScrollReveal key={index} width="100%" variant="fade">
            <div
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-4 ${
                index % 2 === 1 ? 'md:text-right' : ''
              }`}
            >
              {/* Project Image */}
              <div
                className={`relative md:col-span-7 ${
                  index % 2 === 1 ? 'md:order-2 md:col-start-6' : 'md:col-start-1'
                }`}
              >
                <a 
                  href={project.live || project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative group rounded-none overflow-hidden cartoon-border cartoon-shadow cartoon-shadow-hover transition-all duration-300 bg-white"
                >
                  <img
                    alt={`Vista previa del ${project.title}`}
                    className="w-full h-auto object-cover grayscale-0 group-hover:scale-105 transition-all duration-300"
                    src={project.image}
                  />
                </a>
              </div>

              {/* Project Content */}
              <div
                className={`relative md:col-span-5 z-20 ${
                  index % 2 === 1 ? 'md:order-1 md:col-start-1' : 'md:col-start-8'
                }`}
              >
                <p className="text-black font-bold font-mono text-sm mb-2 bg-secondary w-fit px-2 border-2 border-black inline-block cartoon-shadow-sm">
                  {t.projects.featured}
                </p>
                <h3 className="text-3xl font-black font-[family-name:var(--font-family-display)] text-black mb-6 hover:text-primary hover:text-shadow-cartoon transition-colors cursor-pointer drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  <a href={project.live || project.github} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                
                <div className="bg-white p-6 cartoon-border cartoon-shadow mb-6 text-black text-sm leading-relaxed font-medium">
                  {project.description}
                </div>

                <ul
                  className={`flex flex-wrap gap-3 text-xs text-black font-bold font-mono mb-8 ${
                    index % 2 === 1 ? 'md:justify-end' : ''
                  }`}
                >
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="bg-gray-100 px-2 py-1 border-2 border-black hover:bg-primary transition-colors cursor-default">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div
                  className={`flex gap-6 ${
                    index % 2 === 1 ? 'md:justify-end' : ''
                  }`}
                >
                  {project.github && (
                    <a
                      className="text-black hover:text-black transition-colors transform hover:scale-110 bg-white hover:bg-primary p-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Link"
                    >
                      <Github size={24} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      className="text-black hover:text-black transition-colors transform hover:scale-110 bg-white hover:bg-primary p-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="External Link"
                    >
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="text-center mt-24">
        <ScrollReveal width="100%" variant="fade">
          <button
            onClick={onShowMore}
            className="group relative inline-flex items-center justify-center overflow-hidden bg-white px-8 py-4 font-bold text-black transition-all duration-300 cartoon-border cartoon-shadow cartoon-shadow-hover hover:bg-primary"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t.projects.viewMore}
            </span>
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
