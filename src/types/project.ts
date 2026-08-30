/* =========================================================
   PROJECT TYPES
========================================================= */

/**
 * Supported project categories.
 *
 * `string` is still allowed so projects coming from the
 * backend can use custom categories without breaking the
 * frontend.
 */
export type ProjectCategory =
  | "MERN Stack"
  | "Frontend"
  | "Backend"
  | "Full Stack"
  | "Dashboard"
  | "Other"
  | string;

/**
 * Project development status.
 */
export type ProjectStatus =
  | "completed"
  | "in-progress"
  | "planned";

/**
 * Project links.
 */
export interface ProjectLinks {
  github?: string;
  liveDemo?: string;
  documentation?: string;
}

/**
 * Optional project statistics.
 */
export interface ProjectStats {
  stars?: number;
  forks?: number;
  views?: number;
}

/**
 * Main project model.
 */
export interface Project {
  /* -------------------------------------------------------
     IDENTIFICATION
  ------------------------------------------------------- */

  _id?: string;

  slug: string;

  /* -------------------------------------------------------
     BASIC INFORMATION
  ------------------------------------------------------- */

  title: string;

  description: string;

  /**
   * Main project image.
   *
   * Kept required because your current backend/frontend
   * Project model expects an image.
   */
  image: string;

  /**
   * Optional image gallery.
   */
  images?: string[];

  category: ProjectCategory;

  /* -------------------------------------------------------
     TECHNOLOGY
  ------------------------------------------------------- */

  technologies: string[];

  features: string[];

  /* -------------------------------------------------------
     LINKS
  ------------------------------------------------------- */

  github?: string;

  liveDemo?: string;

  documentation?: string;

  /* -------------------------------------------------------
     PROJECT STATE
  ------------------------------------------------------- */

  featured?: boolean;

  status?: ProjectStatus;

  /* -------------------------------------------------------
     ADDITIONAL INFORMATION
  ------------------------------------------------------- */

  stats?: ProjectStats;

  /**
   * Optional short project summary/tagline.
   */
  tagline?: string;

  /**
   * Optional role performed on the project.
   */
  role?: string;

  /**
   * Optional project duration.
   */
  duration?: string;

  /**
   * Optional year of completion.
   */
  year?: number;

  /* -------------------------------------------------------
     DATABASE TIMESTAMPS
  ------------------------------------------------------- */

  createdAt?: string;

  updatedAt?: string;
}