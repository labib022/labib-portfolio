export const services = [
  {
    id: "frontend",
    title: "Frontend development",
    description: "Responsive interfaces with React and Next.js, state management with Redux Toolkit, and API data fetching with RTK Query.",
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "REST APIs with Node.js, Express, and MongoDB, including authentication, email verification, and Google sign-in through Firebase.",
  },
  {
    id: "fullstack",
    title: "Full stack features",
    description: "Complete features from UI to database: multi-step booking flows, carts and checkout, user dashboards, and order tracking.",
  },
] as const;

export const processSteps = [
  { name: "Understand", description: "Read the requirements, ask questions early, and be clear on what done looks like." },
  { name: "Plan", description: "Break the work into small tasks and decide the data model and API shape before writing code." },
  { name: "Build", description: "Write clean, reusable code, commit often with Git, and test the details as I go." },
  { name: "Ship & improve", description: "Deploy, check it in the real world, and keep refining based on feedback." },
];