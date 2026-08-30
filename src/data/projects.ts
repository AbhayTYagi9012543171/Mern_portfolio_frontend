import type {
  Project,
  ProjectStatus,
} from "../types/project";

/* =========================================================
   EXTENDED PROJECT TYPE
   ========================================================= */

export interface FallbackProject extends Project {
  projectType:
    | "full-stack"
    | "frontend"
    | "backend"
    | "personal";

  highlights?: string[];

  challenges?: string[];

  outcomes?: string[];

  role?: string;
}

/* =========================================================
   FALLBACK PROJECTS
   ========================================================= */

export const fallbackProjects: FallbackProject[] = [
  /* =======================================================
     FLEETDASH
  ======================================================= */

  {
    _id: "fleetdash",

    slug: "fleetdash",

    title: "FleetDash",

    description:
      "A full-stack fleet management platform for monitoring vehicles, drivers, trips, analytics, alerts and real-time fleet activity.",

    category: "MERN Stack",

    image: "/projects/fleetdash.webp",

    projectType: "full-stack",

    status: "completed",

    year: 2026,

    role: "Full Stack Developer",

    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Socket.io",
      "Leaflet",
      "Tailwind CSS",
    ],

    features: [
      "Fleet Dashboard",
      "Vehicle Management",
      "Driver Management",
      "Live Tracking",
      "Analytics",
      "Alerts",
      "Reports",
      "Role-Based Access",
    ],

    highlights: [
      "Real-Time Fleet Tracking",
      "Interactive Dashboard",
      "REST API Architecture",
      "Centralized State Management",
      "Role-Based Functionality",
    ],

    challenges: [
      "Managing real-time fleet activity.",
      "Synchronizing frontend state with backend APIs.",
      "Building responsive dashboard interfaces.",
    ],

    outcomes: [
      "Created a complete fleet management workflow.",
      "Integrated real-time communication using Socket.io.",
      "Implemented map-based live vehicle tracking.",
    ],

    liveDemo: "#",

    github: "#",

    featured: true,
  },

  /* =======================================================
     MERN PORTFOLIO
  ======================================================= */

  {
    _id: "mern-portfolio",

    slug: "mern-portfolio",

    title: "MERN Portfolio",

    description:
      "A modern, responsive developer portfolio built to showcase technical skills, projects, experience and professional services.",

    category: "Frontend",

    image: "/projects/portfolio.webp",

    projectType: "frontend",

    status: "in-progress",

    year: 2026,

    role: "Full Stack Developer",

    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],

    features: [
      "Responsive Design",
      "Dark Mode",
      "Animated UI",
      "Project Showcase",
      "Skills Section",
      "Experience Timeline",
      "Education Section",
      "Services Section",
      "Contact Section",
      "Admin Dashboard",
    ],

    highlights: [
      "Modern Responsive UI",
      "Reusable Components",
      "Framer Motion Animations",
      "Dynamic Project Data",
      "API Integration",
    ],

    challenges: [
      "Creating a consistent responsive design system.",
      "Managing animations without affecting performance.",
      "Connecting portfolio content with backend APIs.",
    ],

    outcomes: [
      "Created a professional developer portfolio.",
      "Implemented reusable React components.",
      "Added dynamic sections and interactive navigation.",
    ],

    liveDemo: "#",

    github: "#",

    featured: true,
  },

  /* =======================================================
     URL SHORTENER
  ======================================================= */

  {
    _id: "url-shortener",

    slug: "url-shortener",

    title: "URL Shortener",

    description:
      "A full-stack URL shortening application that converts long URLs into short, shareable links and provides simple URL management.",

    category: "MERN Stack",

    image: "/projects/url-shortener.webp",

    projectType: "full-stack",

    status: "completed",

    year: 2026,

    role: "Full Stack Developer",

    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
      "Tailwind CSS",
    ],

    features: [
      "URL Shortening",
      "Custom Short Links",
      "Copy URL",
      "REST API",
      "MongoDB Storage",
      "URL Management",
      "Responsive Interface",
    ],

    highlights: [
      "RESTful API",
      "Database Integration",
      "Responsive UI",
      "Short Link Generation",
      "Client-Server Architecture",
    ],

    challenges: [
      "Generating reliable short URLs.",
      "Managing URL data in MongoDB.",
      "Connecting frontend actions with REST APIs.",
    ],

    outcomes: [
      "Built a complete URL shortening workflow.",
      "Integrated MongoDB for persistent URL storage.",
      "Created a responsive interface for URL management.",
    ],

    liveDemo: "#",

    github: "#",

    featured: true,
  },
];

/* =========================================================
   PROJECT HELPERS
   ========================================================= */

/**
 * Featured projects
 */
export const featuredProjects: FallbackProject[] =
  fallbackProjects.filter(
    (project) => project.featured
  );

/**
 * Completed projects
 */
export const completedProjects: FallbackProject[] =
  fallbackProjects.filter(
    (project) =>
      project.status === "completed"
  );

/**
 * Projects currently in development
 */
export const inProgressProjects: FallbackProject[] =
  fallbackProjects.filter(
    (project) =>
      project.status === "in-progress"
  );

/**
 * Full-stack projects
 */
export const fullStackProjects: FallbackProject[] =
  fallbackProjects.filter(
    (project) =>
      project.projectType === "full-stack"
  );

/**
 * Frontend projects
 */
export const frontendProjects: FallbackProject[] =
  fallbackProjects.filter(
    (project) =>
      project.projectType === "frontend"
  );

/**
 * Backend projects
 */
export const backendProjects: FallbackProject[] =
  fallbackProjects.filter(
    (project) =>
      project.projectType === "backend"
  );

/**
 * Personal projects
 */
export const personalProjects: FallbackProject[] =
  fallbackProjects.filter(
    (project) =>
      project.projectType === "personal"
  );

/**
 * All technologies used across projects
 */
export const projectTechnologies: string[] =
  Array.from(
    new Set(
      fallbackProjects.flatMap(
        (project) =>
          project.technologies
      )
    )
  );

/**
 * All project categories
 */
export const projectCategories: string[] =
  Array.from(
    new Set(
      fallbackProjects.map(
        (project) =>
          project.category
      )
    )
  );

/**
 * All project years
 */
/**
 * All project years
 *
 * Filters out undefined values before sorting.
 */
export const projectYears: number[] =
  Array.from(
    new Set(
      fallbackProjects
        .map((project) => project.year)
        .filter(
          (year): year is number =>
            typeof year === "number"
        )
    )
  ).sort((a, b) => b - a);