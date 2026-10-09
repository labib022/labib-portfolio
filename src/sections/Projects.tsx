import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { ProfileLink } from "../components/Resources";
import { projects } from "../data/projects";
import type { Project } from "../types";

export function Projects({ onOpen }: { onOpen: (project: Project, preview?: boolean) => void }) {
  const [filter, setFilter] = useState("All projects");
  const visible = projects.filter((project) => filter === "All projects" || project.filter === filter);
  const allExamples = projects.every((project) => project.isExample);
  const hasExamples = projects.some((project) => project.isExample);

  return (
    <section id="projects" className="section section-projects">
      <div className="container">
        <Reveal className="section-heading-row">
          <SectionHeading number="03" label="Ideas into interfaces" title="Selected projects" description={allExamples ? "A selection of concepts exploring useful digital products, thoughtful interfaces, and practical problem-solving." : "A selection of projects demonstrating my development skills, technical thinking, and approach to building useful digital products."} />
          <ProfileLink kind="github" className="text-link section-side-link">More on GitHub <ArrowUpRight size={17} /></ProfileLink>
        </Reveal>
        <Reveal className="projects-toolbar">
          <div className="project-filters" role="group" aria-label="Filter projects">{["All projects", "Full stack", "Frontend"].map((item) => <button type="button" key={item} className={filter === item ? "is-active" : ""} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}{item === "All projects" && <span>{projects.length.toString().padStart(2, "0")}</span>}</button>)}</div>
          {hasExamples && <span className="projects-disclaimer">{allExamples ? "Interactive examples, not client work." : "Concept projects are marked as examples."}</span>}
        </Reveal>
        <p className="sr-only" role="status">Showing {visible.length} {filter.toLowerCase()}.</p>
        <div className="projects-grid">{visible.map((project, index) => <Reveal key={project.id} delay={(index % 2) * 0.08}><ProjectCard project={project} index={projects.indexOf(project)} onOpen={onOpen} /></Reveal>)}</div>
        {visible.length === 0 && <p className="demo-empty">No projects in this category yet. Choose another filter to explore the work.</p>}
      </div>
    </section>
  );
}