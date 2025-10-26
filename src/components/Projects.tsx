import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { projectData } from '../data/projectLinks';

const Projects = () => {
  const { t } = useLanguage();
  const projects = t.projects.items.map((project, index) => ({
    ...project,
    ...projectData[index],
  }));

  return (
    <section className="py-20 md:py-24" id="projects">
      <h2 className="flex items-center gap-4 text-2xl font-bold leading-tight tracking-[-0.015em] font-[family-name:var(--font-family-display)] text-text-light dark:text-text-dark mb-10 px-4">
        <span className="text-primary">02.</span>{t.projects.title}
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
        <a
          className="inline-block min-w-[84px] max-w-[240px] cursor-pointer overflow-hidden rounded-lg h-12 px-8 bg-transparent border border-accent text-accent hover:bg-accent/10 text-base font-bold leading-loose tracking-[0.015em] transition-colors"
          href="#"
        >
          <span className="truncate">{t.projects.viewMore}</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
