import { ArrowUpRight, Check } from "lucide-react";
import type { Project } from "../types";
import { TechIcon } from "./Icons";
import { Modal } from "./Modal";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <Modal title={project.name} subtitle={`Project / ${project.category}`} onClose={onClose} wide>
      <div className="project-overview">
        <img className="project-detail-image" src={project.image} alt={project.imageAlt} width="800" height="500" />
        <div className="project-detail-grid">
          <div>
            <h3>The idea</h3>
            <p>{project.overview}</p>
            <h3>Thinking behind the build</h3>
            <p>{project.approach}</p>
          </div>
          <div>
            <h3>Key features</h3>
            <ul className="detail-features">
              {project.features.map((feature) => (
                <li key={feature}><Check size={15} />{feature}</li>
              ))}
            </ul>
            <h3>Built with</h3>
            <div className="project-stack">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge"><TechIcon name={tech} size={14} />{tech}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="project-detail-actions">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button button-primary" aria-label={`${project.name} live site, opens in a new tab`}>
            Visit live site <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </Modal>
  );
}