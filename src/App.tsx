import { useState } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ResourceProvider } from "./components/Resources";
import { Seo } from "./components/Seo";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Services } from "./sections/Services";
import { Process } from "./sections/Process";
import { Contact } from "./sections/Contact";
import { ProjectModal } from "./components/ProjectModal";
import type { Project, ServiceInquiry } from "./types";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<{ project: Project; preview: boolean } | null>(null);
  const [inquiry, setInquiry] = useState<ServiceInquiry | null>(null);

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <ResourceProvider>
          <Seo />
          <a className="skip-link" href="#main-content">Skip to content</a>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            <Hero />
            <About />
            <Skills />
            <Projects onOpen={(project, preview = false) => setSelectedProject({ project, preview })} />
            <Experience />
            <Services onInquiry={(subject) => setInquiry({ subject, requestedAt: Date.now() })} />
            <Process />
            <Contact inquiry={inquiry} />
          </main>
          <Footer />
          {selectedProject && <ProjectModal project={selectedProject.project} initialPreview={selectedProject.preview} onClose={() => setSelectedProject(null)} />}
        </ResourceProvider>
      </MotionConfig>
    </LazyMotion>
  );
}