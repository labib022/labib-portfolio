import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { ProjectCard } from "../components/ProjectCard";
import { ProfileLink } from "../components/Resources";
import { projects } from "../data/projects";
import type { Project } from "../types";

export function Projects({ onOpen }: { onOpen: (project: Project) => void }) {
  return (
    <section id="projects" className="section section-projects">
      <div className="container">
        <Reveal className="section-heading-row">
          <SectionHeading
            number="03"
            label="Ideas into interfaces"
            title="Selected projects"
            description="Real projects I designed and built, from interface to API, with live versions you can open and explore."
          />
          <ProfileLink kind="github" className="text-link section-side-link">
            More on GitHub <ArrowUpRight size={17} />
          </ProfileLink>
        </Reveal>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <ProjectCard project={project} index={index} onOpen={onOpen} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}