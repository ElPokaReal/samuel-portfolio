import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { projectData } from '../data/projectLinks';

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
    <section className="py-20 md:py-24" id="projects">
      <h2 className="flex items-center gap-4 text-2xl font-bold leading-tight tracking-[-0.015em] font-[family-name:var(--font-family-display)] text-text-light dark:text-text-dark mb-10 px-4">
        <span className="text-primary">03.</span>{t.projects.title}
        <span className="flex-grow h-px bg-slate-gray/30"></span>
      </h2>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div
              className={`relative group rounded-lg overflow-hidden ${
                index % 2 === 1 ? 'md:order-2' : ''
              }`}
            >
              <img
                alt={`Vista previa del ${project.title}`}
                className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                src={project.image}
              />
              <div className="absolute inset-0 bg-primary/70 opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>
            <div
              className={`${
                index % 2 === 1 ? 'md:order-1' : 'md:text-right'
              }`}
            >
              <p className="text-primary font-[family-name:var(--font-family-display)] text-sm mb-1">
                {t.projects.featured}
              </p>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-family-display)] text-text-light dark:text-text-dark mb-4 hover:text-primary transition-colors cursor-pointer">
                {project.title}
              </h3>
              <div className="bg-background-dark/50 dark:bg-[#112240] p-6 rounded-lg shadow-lg mb-4">
                <p className="text-slate-gray text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div
                className={`flex gap-4 text-xs text-slate-gray font-body mb-4 ${
                  index % 2 === 1 ? '' : 'md:justify-end'
                }`}
              >
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex}>{tech}</span>
                ))}
              </div>
              <div
                className={`flex gap-4 ${
                  index % 2 === 1 ? '' : 'md:justify-end'
                }`}
              >
                {project.github && (
                  <a
                    className="text-slate-gray hover:text-accent transition-colors"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={24} />
                  </a>
                )}
                {project.live && (
                  <a
                    className="text-slate-gray hover:text-accent transition-colors"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <button
          onClick={onShowMore}
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-8 py-3 font-bold text-accent transition-all duration-300 hover:text-white"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"></span>
          <span className="absolute top-0 left-0 w-0.5 h-full bg-accent"></span>
          <span className="absolute top-0 right-0 w-0.5 h-full bg-accent"></span>
          <span className="absolute bottom-0 right-0 w-full h-0.5 bg-accent"></span>
          <span className="relative z-10 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {t.projects.viewMore}
          </span>
        </button>
      </div>
    </section>
  );
};

export default Projects;
