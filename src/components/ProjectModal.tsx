import { Suspense, lazy, useState } from "react";
import { ArrowUpRight, Check, Info, LoaderCircle } from "lucide-react";
import type { Project } from "../types";
import { Github, TechIcon } from "./Icons";
import { Modal } from "./Modal";
import { useResources } from "./Resources";
import { PreviewErrorBoundary } from "./PreviewErrorBoundary";

const ProjectDemos = lazy(() => import("./demos/ProjectDemos"));

export function ProjectModal({ project, initialPreview, onClose }: { project: Project; initialPreview: boolean; onClose: () => void }) {
  const [showPreview, setShowPreview] = useState(initialPreview);
  const openResource = useResources();
  return (
    <Modal title={project.name} subtitle={`${project.isExample ? "Interactive concept" : "Project"} / ${project.category}`} onClose={onClose} wide>
      <div className="project-detail-tabs" role="group" aria-label="Project view">
        <button type="button" aria-pressed={!showPreview} className={!showPreview ? "is-active" : ""} onClick={() => setShowPreview(false)}>Project overview</button>
        <button type="button" aria-pressed={showPreview} className={showPreview ? "is-active" : ""} onClick={() => setShowPreview(true)}>Interactive preview <ArrowUpRight size={14} /></button>
      </div>
      {showPreview ? (
        <section className="project-preview" aria-label={`${project.name} interactive frontend preview`}>
          {project.previewKind ? <>
            <div className="preview-notice"><Info size={15} /><p>Frontend demo with sample data. Changes stay in memory and reset when the preview closes. No server or account is connected.</p></div>
            <PreviewErrorBoundary onClose={onClose}>
              <Suspense fallback={<div className="demo-loading" role="status"><LoaderCircle size={22} className="spinner" /> Loading interactive preview...</div>}><ProjectDemos kind={project.previewKind} /></Suspense>
            </PreviewErrorBoundary>
          </> : <div className="unavailable-preview"><p>{project.liveUrl ? "This project is hosted on its own website." : "A live preview hasn't been connected to this project yet."}</p>{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="button button-primary">Open live project <ArrowUpRight size={16} /></a> : <button type="button" className="text-link" onClick={() => setShowPreview(false)}>Back to project overview</button>}</div>}
        </section>
      ) : (
        <div className="project-overview">
          <img className="project-detail-image" src={project.image} alt={project.imageAlt} width="800" height="500" />
          <div className="project-detail-grid"><div><h3>The idea</h3><p>{project.overview}</p><h3>Thinking behind the build</h3><p>{project.approach}</p></div><div><h3>{project.previewKind ? "Try in the preview" : "Key features"}</h3><ul className="detail-features">{project.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul><h3>{project.isExample ? "Suggested production stack" : "Built with"}</h3><div className="project-stack">{project.technologies.map((tech) => <span key={tech} className="tech-badge"><TechIcon name={tech} size={14} />{tech}</span>)}</div></div></div>
          <div className="project-detail-actions"><button type="button" className="button button-primary" onClick={() => setShowPreview(true)}>Try the live preview <ArrowUpRight size={17} /></button>{project.repositoryUrl ? <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary"><Github size={17} /> GitHub repository</a> : <button type="button" className="button button-secondary" onClick={() => { onClose(); openResource({ kind: "repository", projectName: project.name }); }}><Github size={17} /> Repository information</button>}</div>
        </div>
      )}
    </Modal>
  );
}