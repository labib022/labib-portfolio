import type { ReactNode } from "react";
import { site } from "../data/site";
import type { ResourceKind } from "../types";

export function ResourceProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

interface ProfileLinkProps {
  kind: ResourceKind;
  children: ReactNode;
  className?: string;
  label?: string;
}

export function ProfileLink({ kind, children, className, label }: ProfileLinkProps) {
  if (kind === "resume") {
    return (
      <a
        href={site.resumeUrl}
        className={className}
        aria-label={label || "Download resume (PDF)"}
        download="Labib-Resume.pdf"
      >
        {children}
      </a>
    );
  }

  const urls: Record<Exclude<ResourceKind, "resume">, string> = {
    github: site.githubUrl,
    linkedin: site.linkedinUrl,
    email: site.email ? `mailto:${site.email}` : "",
  };

  const url = urls[kind];
  const isExternal = kind === "github" || kind === "linkedin";

  return (
    <a
      href={url || undefined}
      className={className}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}