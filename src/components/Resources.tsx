import { createContext, useContext, useState, type ReactNode } from "react";
import { ArrowUpRight, Download, FileText, Link2 } from "lucide-react";
import { site } from "../data/site";
import type { ResourceKind, ResourceRequest } from "../types";
import { Modal } from "./Modal";

const ResourceContext = createContext<(request: ResourceRequest) => void>(() => undefined);

export function useResources() {
  return useContext(ResourceContext);
}

export function ResourceProvider({ children }: { children: ReactNode }) {
  const [resource, setResource] = useState<ResourceRequest | null>(null);
  const labels: Record<ResourceKind, string> = {
    resume: "A little more about the developer",
    github: "GitHub profile",
    linkedin: "LinkedIn profile",
    email: "Let's start a conversation",
  };

  return (
    <ResourceContext.Provider value={setResource}>
      {children}
      {resource && (
        <Modal title={labels[resource.kind]} subtitle="Portfolio details" onClose={() => setResource(null)}>
          <div className="resource-content">
            <div className="resource-icon">{resource.kind === "resume" ? <FileText size={28} /> : <Link2 size={28} />}</div>
            {resource.kind === "resume" ? (
              <>
                <p>A personal resume hasn't been added yet. This portfolio includes an editable resume starter, clearly marked as a template.</p>
                <p className="text-muted text-sm">Replace <code>resumeUrl</code> in <code>src/data/site.ts</code> with your own PDF to enable direct resume downloads.</p>
                <a className="button button-primary" href="/resume-template.md" download="resume-template.md"><Download size={17} /> Download resume template</a>
              </>
            ) : (
              <>
                <p>{resource.kind === "email"
                  ? "An email address hasn't been added to this portfolio. You can still prepare and download a message using the contact form."
                  : "This portfolio isn't connected to a personal profile yet. Add your own profile URL in src/data/site.ts before publishing."}</p>
                <p className="text-muted text-sm">Personal details and profile links are editable in src/data/site.ts.</p>
              </>
            )}
            <a href="#contact" className="text-link" onClick={() => setResource(null)}>Go to the contact section <ArrowUpRight size={16} /></a>
          </div>
        </Modal>
      )}
    </ResourceContext.Provider>
  );
}

interface ProfileLinkProps {
  kind: ResourceKind;
  children: ReactNode;
  className?: string;
  label?: string;
}

export function ProfileLink({ kind, children, className, label }: ProfileLinkProps) {
  const openResource = useResources();
  const urls = {
    github: site.githubUrl,
    linkedin: site.linkedinUrl,
    email: site.email ? `mailto:${site.email}` : "",
    resume: site.resumeUrl,
  };
  const url = urls[kind];
  if (url) {
    const external = kind === "github" || kind === "linkedin" || kind === "resume";
    return <a href={url} className={className} aria-label={label} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} download={kind === "resume" || undefined}>{children}</a>;
  }
  return <button type="button" className={className} aria-label={label} onClick={() => openResource({ kind })}>{children}</button>;
}