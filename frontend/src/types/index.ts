/* =========================================================
   COMMON TYPES
========================================================= */

export type ID = string;

export type ISODateString = string;


/* =========================================================
   PROJECT
========================================================= */

export interface Project {
  _id?: ID;

  slug: string;

  title: string;

  description: string;

  /**
   * Project preview image.
   * Example: /projects/fleetdash.webp
   */
  image: string;

  /**
   * Project classification.
   * Example: MERN Stack, Frontend, Backend
   */
  category: string;

  /**
   * Technologies used in the project.
   */
  technologies: string[];

  /**
   * Major project capabilities.
   */
  features: string[];

  /**
   * External repository URL.
   */
  github?: string;

  /**
   * Live deployed application URL.
   */
  liveDemo?: string;

  /**
   * Whether the project should appear
   * in the featured projects section.
   */
  featured: boolean;

  /**
   * Optional project metadata.
   */
  createdAt?: ISODateString;

  updatedAt?: ISODateString;
}


/* =========================================================
   GITHUB PROFILE
========================================================= */

export interface GithubProfile {
  username: string;

  name?: string;

  avatar: string;

  bio?: string;

  profileUrl: string;

  followers: number;

  following: number;

  publicRepositories: number;

  location?: string;

  company?: string;

  /**
   * Optional GitHub profile metadata.
   */
  blog?: string;

  twitterUsername?: string;

  publicGists?: number;

  accountCreatedAt?: ISODateString;

  accountUpdatedAt?: ISODateString;
}


/* =========================================================
   GITHUB REPOSITORY
========================================================= */

export interface GithubRepository {
  id: number;

  name: string;

  fullName?: string;

  url: string;

  description?: string | null;

  language?: string | null;

  stars: number;

  forks: number;

  watchers?: number;

  topics?: string[];

  /**
   * Indicates whether this repository
   * is a fork of another repository.
   */
  fork?: boolean;

  /**
   * Repository visibility.
   */
  visibility?: "public" | "private";

  /**
   * Repository status.
   */
  archived?: boolean;

  disabled?: boolean;

  /**
   * Repository timestamps.
   */
  createdAt?: ISODateString;

  updatedAt: ISODateString;

  pushedAt?: ISODateString;

  /**
   * Optional GitHub repository information.
   */
  homepage?: string | null;

  defaultBranch?: string;

  openIssues?: number;

  size?: number;

  license?: string | null;
}


/* =========================================================
   GITHUB DATA
========================================================= */

export interface GithubData {
  profile: GithubProfile;

  repositories: GithubRepository[];

  /**
   * Aggregated repository statistics.
   */
  totalStars?: number;

  totalForks?: number;

  totalRepositories?: number;

  totalWatchers?: number;

  /**
   * Optional language statistics.
   *
   * Example:
   * {
   *   TypeScript: 45,
   *   JavaScript: 30,
   *   CSS: 15
   * }
   */
  languageStats?: Record<string, number>;

  /**
   * Optional contribution information.
   */
  contributions?: number;

  lastUpdated?: ISODateString;
}


/* =========================================================
   API RESPONSE
========================================================= */

/**
 * Generic API response structure.
 *
 * Example:
 * {
 *   success: true,
 *   data: [...]
 * }
 */
export interface ApiResponse<T> {
  success: boolean;

  message?: string;

  data: T;

  error?: string;
}


/* =========================================================
   PAGINATION
========================================================= */

export interface Pagination {
  page: number;

  limit: number;

  total: number;

  totalPages: number;

  hasNextPage: boolean;

  hasPreviousPage: boolean;
}


/* =========================================================
   PAGINATED API RESPONSE
========================================================= */

export interface PaginatedResponse<T> {
  success: boolean;

  message?: string;

  data: T[];

  pagination: Pagination;

  error?: string;
}


/* =========================================================
   CONTACT FORM
========================================================= */

export interface ContactFormData {
  name: string;

  email: string;

  subject: string;

  message: string;
}


/* =========================================================
   CONTACT RESPONSE
========================================================= */

export interface ContactResponse {
  success: boolean;

  message: string;

  data?: {
    id?: string;

    createdAt?: ISODateString;
  };
}


/* =========================================================
   NAVIGATION
========================================================= */

export interface NavItem {
  label: string;

  href: string;

  external?: boolean;

  icon?: React.ReactNode;
}


/* =========================================================
   SOCIAL LINK
========================================================= */

export interface SocialLink {
  name: string;

  url: string;

  icon?: React.ReactNode;

  label?: string;
}


/* =========================================================
   STATS
========================================================= */

export interface Stat {
  label: string;

  value: string | number;

  description?: string;

  icon?: React.ReactNode;
}


/* =========================================================
   COMPONENT STATUS
========================================================= */

export type LoadingState =
  | "idle"
  | "loading"
  | "success"
  | "error";


/* =========================================================
   THEME
========================================================= */

export type ThemeMode = "dark" | "light" | "system";