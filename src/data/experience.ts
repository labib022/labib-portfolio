import type { ExperienceEntry } from "../types";

// No employers, dates, or achievements were supplied. Add verified entries here.
// Example shape: { id, title, company, dates, location, responsibilities,
// technologies, achievements }. Empty data uses the honest learning-focused layout.
export const experience: ExperienceEntry[] = [];

export const practiceAreas = [
  {
    title: "Thoughtful interfaces",
    description: "Responsive React interfaces, accessible interactions, and reusable components.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Connected applications",
    description: "REST API design, MongoDB integration, and secure authentication patterns.",
    technologies: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Better with every iteration",
    description: "Debugging, thoughtful refactoring, performance optimization, and continuous learning.",
    technologies: ["Git", "Postman", "Chrome DevTools"],
  },
];