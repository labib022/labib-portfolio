import type { ExperienceEntry } from "../types";

export const experience: ExperienceEntry[] = [
  {
    id: "betopia-group",
    title: "Junior MERN Stack Developer",
    company: "Betopia Group",
    dates: "Feb 2026 – Sep 2026",
    location: "Mohakhali, Dhaka",
    responsibilities: [
      "Worked on multiple web projects as a MERN stack developer, including two main full-stack platforms: Marvell Glass, a custom glass splashback e-commerce and booking platform, and Easy Lift & Clean, a home services booking platform.",
      "Developed responsive React interfaces with Redux Toolkit and RTK Query, including multi-step booking flows, a shopping cart and checkout, and user dashboards.",
      "Implemented authentication with email verification codes, password reset, and Google sign-in through Firebase.",
      "Built REST APIs and backend features with Node.js, Express, and MongoDB.",
    ],
    technologies: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
    ],
    achievements: [],
  },
];

export const practiceAreas = [
  {
    title: "Thoughtful interfaces",
    description: "Responsive React and Next.js interfaces, accessible interactions, state management with Redux Toolkit, and reusable components.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    title: "Connected applications",
    description: "REST API design, Node.js & Express backends, MongoDB & Firebase integration, and secure authentication patterns.",
    technologies: ["Node.js", "Express", "MongoDB", "Firebase", "REST APIs"],
  },
  {
    title: "Better with every iteration",
    description: "Debugging, thoughtful refactoring, performance optimization, and modern deployment tools.",
    technologies: ["Git", "GitHub", "Postman", "Vercel", "Netlify"],
  },
];