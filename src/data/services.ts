export const services = [
  {
    id: "frontend",
    title: "Frontend development",
    description: "Responsive, intuitive interfaces built with React and a real attention to the details.",
  },
  {
    id: "fullstack",
    title: "Full stack development",
    description: "Complete web applications, connecting a thoughtful frontend to a dependable backend.",
  },
  {
    id: "backend",
    title: "Backend & API development",
    description: "REST APIs, database integration, authentication, and the logic that brings it all together.",
  },
  {
    id: "maintenance",
    title: "Website maintenance",
    description: "Bug fixes, responsive improvements, cleaner code, and a faster experience for your users.",
  },
] as const;

export const processSteps = [
  { name: "Discover", description: "Understand your goals, the problem, and the people we're building for." },
  { name: "Design", description: "Map the structure and shape a clear, intuitive user experience." },
  { name: "Develop", description: "Build with care, connect the pieces, and test the details." },
  { name: "Deliver", description: "Deploy confidently, fine-tune performance, and keep improving." },
];