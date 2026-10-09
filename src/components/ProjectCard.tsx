import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types";
import { useResources } from "./Resources";
import { Github, TechIcon } from "./Icons";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project, preview?: boolean) => void;
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const openResource = useResources();
  return (
    <article className={`project-card project-${project.id}`}>
      <button type="button" className="project-thumbnail" onClick={() => onOpen(project)} aria-label={`Explore ${project.name}, ${project.category}`}>
        <img src={project.image} alt={project.imageAlt} width="800" height="500" loading="lazy" decoding="async" />
        <span className="project-image-action" aria-hidden="true"><ArrowUpRight size={23} /></span>
      </button>
      <div className="project-body">
        <p className="project-category"><span>{project.isExample ? "EXAMPLE" : "PROJECT"} 0{index + 1}</span><span>{project.category}</span></p>
        <h3><button type="button" className="project-title" onClick={() => onOpen(project)}><span>{project.name}</span><ArrowUpRight size={22} /></button></h3>
        <p className="project-description">{project.description}</p>
        <div className="project-stack" aria-label="Technologies">{project.technologies.map((technology) => <span key={technology} className="tech-badge"><TechIcon name={technology} size={14} />{technology}</span>)}</div>
        <ul className="project-features">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <div className="project-links">
          {project.liveUrl
            ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-link">Live Demo <ArrowUpRight size={15} /></a>
            : <button type="button" className="text-link" onClick={() => onOpen(project, true)}>Live Demo <ArrowUpRight size={15} /></button>}
          {project.repositoryUrl
            ? <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="project-github" aria-label={`${project.name} GitHub repository`}><Github size={16} /> Source code</a>
            : <button type="button" className="project-github" onClick={() => openResource({ kind: "repository", projectName: project.name })} aria-label={`${project.name} repository information`}><Github size={16} /> Source code</button>}
        </div>
      </div>
    </article>
  );
}