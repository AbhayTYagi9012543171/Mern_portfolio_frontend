/* =========================================================
   EDUCATION DATA
   ========================================================= */

export type EducationStatus =
  | "ongoing"
  | "completed"
  | "passed";

export interface Education {
  id: string;

  degree: string;

  institution: string;

  duration: string;

  result?: string;

  status: EducationStatus;

  description: string;

  highlights?: string[];

  location?: string;

  type?: "postgraduate" | "undergraduate" | "school";

  current?: boolean;
}

/* =========================================================
   EDUCATION RECORDS
   ========================================================= */

export const education: Education[] = [
  {
    id: "mca-kiet",

    degree: "Master of Computer Applications (MCA)",

    institution: "KIET Deemed to be University",

    duration: "2025 – 2027",

    status: "ongoing",

    current: true,

    type: "postgraduate",

    location: "Ghaziabad, Uttar Pradesh",

    description:
      "Pursuing MCA with a focus on advanced computer applications, full-stack software development, system design and modern web technologies.",

    highlights: [
      "Full-Stack Development",
      "Software Engineering",
      "Database Systems",
      "Modern Web Technologies",
      "Application Development",
    ],
  },

  {
    id: "bca-imr",

    degree: "Bachelor of Computer Applications (BCA)",

    institution: "IMR College, CCS University",

    duration: "2022 – 2025",

    result: "Completed",

    status: "completed",

    type: "undergraduate",

    location: "Ghaziabad, Uttar Pradesh",

    description:
      "Completed undergraduate studies in computer applications with a strong foundation in programming, databases, software development and web technologies.",

    highlights: [
      "Programming Fundamentals",
      "Database Management",
      "Web Development",
      "Data Structures",
      "Software Engineering",
    ],
  },

  {
    id: "class-12",

    degree: "Class 12 – CBSE",

    institution: "Eklavyia Public School",

    duration: "2022",

    result: "Passed",

    status: "passed",

    type: "school",

    location: "Ghaziabad, Uttar Pradesh",

    description:
      "Completed senior secondary education under the CBSE curriculum, building the academic foundation for higher studies in computer applications.",

    highlights: [
      "CBSE Curriculum",
      "Senior Secondary Education",
    ],
  },

  {
    id: "class-10",

    degree: "Class 10 – CBSE",

    institution: "Eklavyia Public School",

    duration: "2020",

    result: "Passed",

    status: "passed",

    type: "school",

    location: "Ghaziabad, Uttar Pradesh",

    description:
      "Completed secondary education under the CBSE curriculum and developed the foundation for further academic studies.",

    highlights: [
      "CBSE Curriculum",
      "Secondary Education",
    ],
  },
];

/* =========================================================
   HELPERS
   ========================================================= */

/**
 * Returns the currently active education.
 */
export const currentEducation = education.find(
  (item) => item.current
);

/**
 * Returns completed education records.
 */
export const completedEducation = education.filter(
  (item) =>
    item.status === "completed" ||
    item.status === "passed"
);

/**
 * Returns education grouped by type.
 */
export const educationByType = {
  postgraduate: education.filter(
    (item) => item.type === "postgraduate"
  ),

  undergraduate: education.filter(
    (item) => item.type === "undergraduate"
  ),

  school: education.filter(
    (item) => item.type === "school"
  ),
};