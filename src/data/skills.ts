export const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    description: "Interfaces that feel right.",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Tailwind CSS", "Responsive Design"],
  },
  {
    id: "backend",
    name: "Backend",
    description: "Logic you can build on.",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "Authorization"],
  },
  {
    id: "database",
    name: "Database",
    description: "A solid data foundation.",
    skills: ["MongoDB", "Mongoose", "Database Design"],
  },
  {
    id: "tools",
    name: "Tools & workflow",
    description: "A better way to ship.",
    skills: ["Git", "GitHub", "Postman", "npm", "VS Code", "Vercel"],
  },
] as const;