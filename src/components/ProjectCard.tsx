import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types";
import { TechIcon } from "./Icons";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const displayTechs = project.technologies.slice(0, 6);
  const moreCount = project.technologies.length - displayTechs.length;

  return (
    <article className={`project-card project-${project.id}`}>
      <button type="button" className="project-thumbnail" onClick={() => onOpen(project)} aria-label={`Explore ${project.name}, ${project.category}`}>
        <img src={project.image} alt={project.imageAlt} width="800" height="500" loading="lazy" decoding="async" />
        <span className="project-image-action" aria-hidden="true"><ArrowUpRight size={23} /></span>
      </button>
      <div className="project-body">
        <p className="project-category"><span>PROJECT 0{index + 1}</span><span>{project.category}</span></p>
        <h3><button type="button" className="project-title" onClick={() => onOpen(project)}><span>{project.name}</span><ArrowUpRight size={22} /></button></h3>
        <p className="project-description">{project.description}</p>
        <div className="project-stack" aria-label="Technologies">
          {displayTechs.map((technology) => (
            <span key={technology} className="tech-badge"><TechIcon name={technology} size={14} />{technology}</span>
          ))}
          {moreCount > 0 && <span className="tech-badge tech-badge-more">+{moreCount}</span>}
        </div>
        <ul className="project-features">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <div className="project-links">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`${project.name} live site, opens in a new tab`}>
            Live Demo <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}