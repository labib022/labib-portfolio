import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: "marvell-glass",
    name: "Marvell Glass",
    category: "Custom glass splashback e-commerce & booking platform",
    description:
      "A full-stack storefront where customers choose a custom glass splashback shape, build an order, pay securely online, and book a consultation, with a dashboard to track everything.",
    image: "/images/marvellglass-img.png",
    imageAlt: "Marvell Glass website homepage with a glass splashback hero banner",
    technologies: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "React Router",
      "Framer Motion",
    ],
    features: [
      "Custom shape selection with live SVG preview",
      "Cart, checkout & online payments",
      "Booking calendar with time slots",
    ],
    overview:
      "A complete platform for ordering made-to-measure glass splashbacks. Visitors pick a shape (L, T, Plus, Square), configure their design, add it to the cart, and pay online. They can also book a consultation from an interactive calendar. Signed-in users get a dashboard with their orders, bookings, profile, settings, and downloadable invoices.",
    approach:
      "A React single-page app with route-level code splitting and protected routes, backed by a Node.js and Express REST API with MongoDB. Server state and caching use RTK Query on top of Redux Toolkit. Authentication supports email with OTP and password reset, plus Google sign-in through Firebase. Checkout supports secure online payments, and homepage sections are driven by CMS content from the API.",
    liveUrl: "https://marvellglass.co.uk/",
  },
  {
    id: "easy-lift-clean",
    name: "Easy Lift & Clean",
    category: "Home services booking platform",
    description:
      "A one-stop platform for moving, cleaning, laundry, and repair services, where customers book online through guided step-by-step flows and manage their account.",
    image: "/images/cmetayer-img.png",
    imageAlt: "Easy Lift and Clean website homepage showing moving, cleaning, laundry, and repair services",
    technologies: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "React Router",
    ],
    features: [
      "4 services with guided multi-step booking",
      "Email verification & Google sign-in",
      "CMS-driven content",
    ],
    overview:
      "A full-stack platform that brings four home services together under one brand: moving, cleaning, laundry, and repair. Each service has its own landing page and a guided, multi-step booking flow with validation and a confirmation screen. Users can register, verify their email with a code, sign in with email or Google, reset their password, and manage their profile.",
    approach:
      "A React single-page app with separate routes for each service and an isolated, distraction-free booking flow. Page content is managed through a CMS and fetched with RTK Query on top of Redux Toolkit, so copy and sections can change without a redeploy. Authentication combines email and verification codes with Google sign-in through Firebase, backed by a Node.js, Express, and MongoDB API.",
    liveUrl: "https://cmetayer-mern-frontend.vercel.app/",
  },
];