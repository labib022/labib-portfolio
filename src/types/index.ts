export type ProjectKind = "commerce" | "tasks" | "blog" | "dashboard";

export interface Project {
  id: string;
  previewKind?: ProjectKind;
  name: string;
  category: string;
  filter: "Full stack" | "Frontend";
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  features: string[];
  overview: string;
  approach: string;
  liveUrl: string;
  repositoryUrl: string;
  isExample: boolean;
}

export interface ExperienceEntry {
  id: string;
  title: string;
  company: string;
  dates: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export type ResourceKind = "resume" | "github" | "linkedin" | "email" | "repository";

export interface ResourceRequest {
  kind: ResourceKind;
  projectName?: string;
}

export interface ServiceInquiry {
  subject: string;
  requestedAt: number;
}