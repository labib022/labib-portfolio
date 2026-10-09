import type { Project } from "../types";

// These are interactive concepts, not claims of completed professional work.
// Add your real URLs, screenshots, and implementation details for each project.
export const projects: Project[] = [
  {
    id: "commerce",
    previewKind: "commerce",
    name: "Cartify",
    category: "E-commerce platform",
    filter: "Full stack",
    description:
      "A considered shopping experience, from finding the right product to managing your cart.",
    image: "/images/project-cartify.svg",
    imageAlt: "Cartify concept storefront with a clean product catalog and sage green accents",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    features: ["Product search", "Shopping cart", "Responsive storefront"],
    overview:
      "An example of a full-stack shopping platform with product discovery, authentication, cart management, and order processing. The included frontend preview lets you search products and manage a cart. Checkout, authentication, and order processing are not connected.",
    approach:
      "A production implementation would separate catalog, cart, and order services, validate all prices on the server, and use secure, HTTP-only sessions. MongoDB would store product and order data, with access-controlled administration routes.",
    liveUrl: "",
    repositoryUrl: "",
    isExample: true,
  },
  {
    id: "tasks",
    previewKind: "tasks",
    name: "Taskflow",
    category: "Task management application",
    filter: "Full stack",
    description:
      "Less busywork. More progress. A focused workspace for organizing tasks and moving ideas forward.",
    image: "/images/project-taskflow.svg",
    imageAlt: "Taskflow concept kanban board with to-do, in-progress, and completed task columns",
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    features: ["Task creation", "Status management", "Search & filtering"],
    overview:
      "A productivity concept for creating tasks, organizing work, and tracking progress. Try the live frontend preview to add a task, move it between columns, or remove it. Preview changes last only while the demo is open.",
    approach:
      "A real implementation would use typed task models, optimistic UI updates, server-side ownership checks, and accessible controls alongside optional drag and drop. Search and filtering would remain fast as a workspace grows.",
    liveUrl: "",
    repositoryUrl: "",
    isExample: true,
  },
  {
    id: "blog",
    previewKind: "blog",
    name: "Devlog",
    category: "Developer blogging platform",
    filter: "Full stack",
    description:
      "A quiet corner of the internet for sharing ideas, exploring technology, and learning out loud.",
    image: "/images/project-devlog.svg",
    imageAlt: "Devlog concept editorial homepage with developer articles and a purple featured story",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    features: ["Article search", "Topic filters", "Reading experience"],
    overview:
      "An example publishing platform for technical articles, with a clean reading experience and content discovery. The frontend demo includes original sample articles, category filters, search, and a reading view. Publishing and comments require a backend.",
    approach:
      "A production platform would validate and sanitize article content, handle author authorization, paginate queries, and provide readable metadata for every article. Draft and published states would be separate in the data model.",
    liveUrl: "",
    repositoryUrl: "",
    isExample: true,
  },
  {
    id: "dashboard",
    previewKind: "dashboard",
    name: "Overview",
    category: "Admin dashboard",
    filter: "Frontend",
    description:
      "Complex information, made clear. A purposeful interface for managing people and application data.",
    image: "/images/project-overview.svg",
    imageAlt: "Overview concept admin interface with a lime activity chart and a user management table",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    features: ["Data visualization", "User management", "Validated forms"],
    overview:
      "A management dashboard concept that turns application data into a clear, usable interface. Search the sample directory, filter user status, and add a sample user in the interactive frontend preview. All displayed data is fictional demo data.",
    approach:
      "In production, protected API routes would enforce permissions, tables would use server-side pagination, and changes would have audit logs. Chart alternatives and semantic tables would keep the information accessible.",
    liveUrl: "",
    repositoryUrl: "",
    isExample: true,
  },
];