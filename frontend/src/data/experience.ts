/* =========================================================
   EXPERIENCE DATA
   ========================================================= */

export type ExperienceStatus =
  | "current"
  | "completed";

export type ExperienceType =
  | "internship"
  | "project"
  | "freelance"
  | "full-time"
  | "part-time";

export interface Experience {
  id: string;

  role: string;

  company: string;

  duration: string;

  location: string;

  description: string;

  responsibilities: string[];

  technologies: string[];

  status: ExperienceStatus;

  type: ExperienceType;

  current?: boolean;

  highlights?: string[];

  achievements?: string[];
}

/* =========================================================
   EXPERIENCE RECORDS
   ========================================================= */

export const experience: Experience[] = [
  {
    id: "mern-developer-intern",

    role: "MERN Stack Developer Intern",

    company: "Internship / Training Project",

    duration: "2026",

    location: "Remote",

    status: "completed",

    type: "internship",

    description:
      "Worked on full-stack web application development using the MERN stack, focusing on responsive user interfaces, REST APIs, database integration, authentication and real-world application features.",

    responsibilities: [
      "Developed responsive React and TypeScript interfaces.",
      "Built and integrated RESTful APIs using Node.js and Express.js.",
      "Designed MongoDB schemas and implemented database operations.",
      "Integrated Axios for reliable frontend-backend communication.",
      "Implemented application state management using Redux Toolkit.",
      "Worked with authentication, validation and API error handling.",
      "Tested application functionality and resolved development issues.",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Axios",
    ],

    highlights: [
      "Full-Stack Development",
      "REST API Integration",
      "Database Development",
      "Responsive UI",
      "State Management",
    ],

    achievements: [
      "Built reusable frontend components.",
      "Integrated frontend and backend services.",
      "Implemented database-driven application features.",
    ],
  },

  {
    id: "fleetdash",

    role: "Full Stack Project Developer",

    company: "FleetDash",

    duration: "2026",

    location: "Project",

    status: "completed",

    type: "project",

    description:
      "Developed a full-stack fleet management platform for monitoring vehicles, drivers, analytics, reports and real-time fleet activity.",

    responsibilities: [
      "Built responsive dashboard interfaces using React and TypeScript.",
      "Implemented vehicle management and driver management modules.",
      "Integrated REST APIs using Axios.",
      "Implemented Redux Toolkit for centralized application state.",
      "Integrated Socket.io for real-time application functionality.",
      "Implemented map-based live tracking using Leaflet.",
      "Developed analytics and reporting interfaces.",
      "Worked on authentication and role-based application functionality.",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Socket.io",
      "Leaflet",
    ],

    highlights: [
      "Fleet Management",
      "Real-Time Tracking",
      "Dashboard Analytics",
      "REST APIs",
      "Role-Based Access",
    ],

    achievements: [
      "Developed a complete fleet management dashboard.",
      "Implemented real-time communication with Socket.io.",
      "Created map-based vehicle tracking functionality.",
      "Integrated frontend state management with backend APIs.",
    ],
  },
];

/* =========================================================
   HELPER FUNCTIONS
   ========================================================= */

/**
 * Returns the currently active experience.
 */
export const currentExperience = experience.find(
  (item) =>
    item.current === true ||
    item.status === "current"
);

/**
 * Returns completed experiences.
 */
export const completedExperience =
  experience.filter(
    (item) => item.status === "completed"
  );

/**
 * Returns internship experiences.
 */
export const internships =
  experience.filter(
    (item) => item.type === "internship"
  );

/**
 * Returns project-based experiences.
 */
export const projectExperience =
  experience.filter(
    (item) => item.type === "project"
  );

/**
 * Returns all technologies used across experiences.
 */
export const experienceTechnologies =
  Array.from(
    new Set(
      experience.flatMap(
        (item) => item.technologies
      )
    )
  );