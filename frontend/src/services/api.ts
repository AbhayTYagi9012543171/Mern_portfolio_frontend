import axios, {
  AxiosError,
  type AxiosInstance,
  type InternalAxiosRequestConfig,
} from "axios";

/* =========================================================
   ENVIRONMENT
========================================================= */

const ENV_API_URL = import.meta.env.VITE_API_URL?.trim();

/*
 * Production fallback.
 *
 * Ideally, configure VITE_API_URL in your Render frontend
 * environment variables instead of relying on this fallback.
 */
const DEFAULT_API_URL =
  "https://mern-portfolio-backend-xmd6.onrender.com/api";

const API_URL = ENV_API_URL || DEFAULT_API_URL;

/* =========================================================
   CONFIG
========================================================= */

const API_TIMEOUT = 15000;

/* =========================================================
   CREATE AXIOS INSTANCE
========================================================= */

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: API_TIMEOUT,

  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },

  /*
   * Keep false when authentication uses localStorage/JWT.
   *
   * Change to true if your backend authentication uses
   * httpOnly cookies.
   */
  withCredentials: false,
});

/* =========================================================
   REQUEST INTERCEPTOR
========================================================= */

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    /*
     * Get authentication token.
     *
     * Adjust the key if your AuthContext uses another
     * localStorage key.
     */
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    /*
     * Development-only request logging.
     */
    if (import.meta.env.DEV) {
      console.log(
        `[API] ${config.method?.toUpperCase()} ${config.url}`
      );
    }

    return config;
  },

  (error) => {
    if (import.meta.env.DEV) {
      console.error("[API Request Error]", error);
    }

    return Promise.reject(error);
  }
);

/* =========================================================
   RESPONSE INTERCEPTOR
========================================================= */

api.interceptors.response.use(
  (response) => {
    /*
     * Development-only response logging.
     */
    if (import.meta.env.DEV) {
      console.log(
        `[API] ${response.status} ${response.config.url}`
      );
    }

    return response;
  },

  (error: AxiosError) => {
    const status = error.response?.status;

    /*
     * Unauthorized
     *
     * Do not blindly redirect from every 401 if your app
     * has special authentication flows.
     */
    if (status === 401) {
      localStorage.removeItem("token");

      /*
       * Optional cleanup if these values exist.
       */
      localStorage.removeItem("user");

      /*
       * Only redirect when the user is actually inside
       * a protected application area.
       */
      const currentPath = window.location.pathname;

      const protectedPaths = [
        "/dashboard",
        "/admin",
        "/profile",
        "/settings",
      ];

      const isProtectedRoute = protectedPaths.some(
        (path) =>
          currentPath === path ||
          currentPath.startsWith(`${path}/`)
      );

      if (isProtectedRoute) {
        window.location.href = "/login";
      }
    }

    /*
     * Development-only error logging.
     */
    if (import.meta.env.DEV) {
      if (error.response) {
        console.error(
          `[API Error] ${status} ${error.config?.url}`,
          error.response.data
        );
      } else if (error.request) {
        console.error(
          "[API Error] No response received",
          error.message
        );
      } else {
        console.error(
          "[API Error]",
          error.message
        );
      }
    }

    return Promise.reject(error);
  }
);

/* =========================================================
   API HELPERS
========================================================= */

/**
 * Returns the configured API URL.
 */
export const getApiUrl = (): string => {
  return API_URL;
};

/**
 * Returns whether the application is running in development.
 */
export const isDevelopment = (): boolean => {
  return import.meta.env.DEV;
};

/**
 * Returns whether the application is running in production.
 */
export const isProduction = (): boolean => {
  return import.meta.env.PROD;
};

/* =========================================================
   DEBUG INFO
========================================================= */

if (import.meta.env.DEV) {
  console.log("=================================");
  console.log("API Configuration");
  console.log("=================================");
  console.log("Base URL:", API_URL);
  console.log("Timeout:", API_TIMEOUT);
  console.log(
    "Environment:",
    import.meta.env.MODE
  );
  console.log("=================================");
}

export default api;