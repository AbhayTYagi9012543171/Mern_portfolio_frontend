/* =========================================================
   SERVICES DATA
   ========================================================= */

export type ServiceCategory =
  | "full-stack"
  | "frontend"
  | "backend"
  | "database"
  | "api"
  | "dashboard"
  | "responsive";

export interface Service {
  id: string;

  title: string;

  shortTitle?: string;

  description: string;

  icon: string;

  category: ServiceCategory;

  features: string[];

  technologies: string[];

  popular?: boolean;

  order: number;
}

/* =========================================================
   SERVICES
   ========================================================= */

export const services: Service[] = [
  /* -------------------------------------------------------
     01 — MERN STACK
  ------------------------------------------------------- */

  {
    id: "mern-development",

    title: "MERN Stack Development",

    shortTitle: "MERN Development",

    description:
      "End-to-end full-stack web applications using MongoDB, Express.js, React and Node.js with scalable architecture and maintainable code.",

    icon: "code",

    category: "full-stack",

    features: [
      "Complete frontend and backend development",
      "REST API integration",
      "MongoDB database integration",
      "Authentication and authorization",
      "Responsive user interfaces",
      "Scalable application architecture",
    ],

    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
    ],

    popular: true,

    order: 1,
  },

  /* -------------------------------------------------------
     02 — FRONTEND
  ------------------------------------------------------- */

  {
    id: "frontend-development",

    title: "Frontend Development",

    shortTitle: "Frontend",

    description:
      "Modern, responsive and accessible user interfaces built with React, TypeScript, Tailwind CSS and reusable component architecture.",

    icon: "react",

    category: "frontend",

    features: [
      "Responsive UI development",
      "Reusable React components",
      "TypeScript development",
      "Modern animations",
      "Interactive user experiences",
      "Mobile-first layouts",
    ],

    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux Toolkit",
    ],

    order: 2,
  },

  /* -------------------------------------------------------
     03 — BACKEND
  ------------------------------------------------------- */

  {
    id: "backend-development",

    title: "Backend Development",

    shortTitle: "Backend",

    description:
      "Secure and scalable backend systems using Node.js and Express.js with clean architecture, authentication and reliable database integration.",

    icon: "server",

    category: "backend",

    features: [
      "Node.js application development",
      "Express.js APIs",
      "Authentication systems",
      "Authorization and role management",
      "Error handling",
      "Server-side validation",
    ],

    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "REST API",
    ],

    order: 3,
  },

  /* -------------------------------------------------------
     04 — REST API
  ------------------------------------------------------- */

  {
    id: "rest-api-development",

    title: "REST API Development",

    shortTitle: "REST APIs",

    description:
      "Well-structured RESTful APIs designed for reliable frontend-backend communication, authentication, validation and database-driven applications.",

    icon: "api",

    category: "api",

    features: [
      "RESTful API architecture",
      "CRUD operations",
      "Request validation",
      "Authentication",
      "Authorization",
      "Centralized error handling",
      "API integration",
    ],

    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Axios",
      "JWT",
    ],

    order: 4,
  },

  /* -------------------------------------------------------
     05 — DATABASE
  ------------------------------------------------------- */

  {
    id: "database-design",

    title: "Database Design",

    shortTitle: "Database",

    description:
      "Efficient MongoDB database solutions using Mongoose schemas, data modeling, validation and structured data management.",

    icon: "database",

    category: "database",

    features: [
      "MongoDB database design",
      "Mongoose schemas",
      "Data modeling",
      "CRUD operations",
      "Schema validation",
      "Query optimization",
    ],

    technologies: [
      "MongoDB",
      "Mongoose",
      "Node.js",
      "Express.js",
    ],

    order: 5,
  },

  /* -------------------------------------------------------
     06 — DASHBOARD
  ------------------------------------------------------- */

  {
    id: "dashboard-development",

    title: "Dashboard Development",

    shortTitle: "Dashboards",

    description:
      "Interactive dashboards designed for business applications with analytics, charts, tables, filters, authentication and real-time data.",

    icon: "chart",

    category: "dashboard",

    features: [
      "Admin dashboards",
      "Analytics interfaces",
      "Interactive charts",
      "Data tables",
      "Search and filtering",
      "Role-based access",
      "Real-time data",
    ],

    technologies: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Chart.js",
      "Socket.io",
      "Tailwind CSS",
    ],

    popular: true,

    order: 6,
  },

  /* -------------------------------------------------------
     07 — RESPONSIVE DEVELOPMENT
  ------------------------------------------------------- */

  {
    id: "responsive-web-development",

    title: "Responsive Web Development",

    shortTitle: "Responsive Web",

    description:
      "Mobile-first websites and web applications that deliver a consistent, polished experience across mobile, tablet and desktop devices.",

    icon: "mobile",

    category: "responsive",

    features: [
      "Mobile-first design",
      "Tablet optimization",
      "Desktop layouts",
      "Cross-browser compatibility",
      "Responsive navigation",
      "Accessible interfaces",
    ],

    technologies: [
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],

    order: 7,
  },
];

/* =========================================================
   SERVICE HELPERS
   ========================================================= */

/**
 * Services marked as popular.
 */
export const popularServices =
  services.filter(
    (service) => service.popular
  );

/**
 * Services grouped by category.
 */
export const servicesByCategory =
  services.reduce(
    (groups, service) => {
      const category =
        service.category;

      if (!groups[category]) {
        groups[category] = [];
      }

      groups[category].push(service);

      return groups;
    },
    {} as Record<
      ServiceCategory,
      Service[]
    >
  );

/**
 * All technologies used across services.
 */
export const serviceTechnologies =
  Array.from(
    new Set(
      services.flatMap(
        (service) =>
          service.technologies
      )
    )
  );

/**
 * All service categories.
 */
export const serviceCategories =
  Array.from(
    new Set(
      services.map(
        (service) =>
          service.category
      )
    )
  );

/**
 * Get a service by ID.
 */
export const getServiceById = (
  id: string
) =>
  services.find(
    (service) =>
      service.id === id
  );