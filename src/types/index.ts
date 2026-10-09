export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  features: string[];
  overview: string;
  approach: string;
  liveUrl: string;
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

export type ResourceKind = "resume" | "github" | "linkedin" | "email";

export interface ResourceRequest {
  kind: ResourceKind;
}