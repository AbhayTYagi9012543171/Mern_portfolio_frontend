import {
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

/* =========================================================
   TYPES
========================================================= */

export type ThemeMode = "dark" | "light";

export interface ThemeState {
  mode: ThemeMode;
}

/* =========================================================
   CONSTANTS
========================================================= */

const STORAGE_KEY = "portfolio-theme";

const DEFAULT_THEME: ThemeMode = "dark";

/* =========================================================
   THEME VALIDATION
========================================================= */

const isThemeMode = (
  value: string | null
): value is ThemeMode => {
  return value === "dark" || value === "light";
};

/* =========================================================
   SYSTEM THEME
========================================================= */

const getSystemTheme = (): ThemeMode => {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  return window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches
    ? "light"
    : "dark";
};

/* =========================================================
   INITIAL THEME
========================================================= */

/**
 * Priority:
 *
 * 1. Saved user preference
 * 2. System preference
 * 3. Dark fallback
 */
const getInitialTheme = (): ThemeMode => {
  if (typeof window === "undefined") {
    return DEFAULT_THEME;
  }

  try {
    const savedTheme =
      localStorage.getItem(STORAGE_KEY);

    if (isThemeMode(savedTheme)) {
      return savedTheme;
    }
  } catch (error) {
    console.warn(
      "Unable to read saved theme preference:",
      error
    );
  }

  return getSystemTheme();
};

/* =========================================================
   APPLY THEME
========================================================= */

/**
 * Applies the selected theme to the document.
 *
 * Tailwind's `dark:` utilities can use the `dark`
 * class on the <html> element.
 */
const applyTheme = (
  mode: ThemeMode
): void => {
  if (typeof document === "undefined") {
    return;
  }

  const root =
    document.documentElement;

  root.classList.toggle(
    "dark",
    mode === "dark"
  );

  root.classList.toggle(
    "light",
    mode === "light"
  );

  root.dataset.theme = mode;

  root.style.colorScheme = mode;
};

/* =========================================================
   PERSIST THEME
========================================================= */

const persistTheme = (
  mode: ThemeMode
): void => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    localStorage.setItem(
      STORAGE_KEY,
      mode
    );
  } catch (error) {
    console.warn(
      "Unable to save theme preference:",
      error
    );
  }
};

/* =========================================================
   INITIAL STATE
========================================================= */

const initialState: ThemeState = {
  mode: getInitialTheme(),
};

/*
 * Apply the initial theme immediately when the module
 * loads in the browser.
 */
if (typeof window !== "undefined") {
  applyTheme(initialState.mode);
}

/* =========================================================
   SLICE
========================================================= */

const themeSlice = createSlice({
  name: "theme",

  initialState,

  reducers: {
    /* -----------------------------------------------------
       TOGGLE THEME
    ----------------------------------------------------- */

    toggleTheme: (state) => {
      const nextTheme: ThemeMode =
        state.mode === "dark"
          ? "light"
          : "dark";

      state.mode = nextTheme;

      persistTheme(nextTheme);
      applyTheme(nextTheme);
    },

    /* -----------------------------------------------------
       SET THEME
    ----------------------------------------------------- */

    setTheme: (
      state,
      action: PayloadAction<ThemeMode>
    ) => {
      const nextTheme =
        action.payload;

      state.mode = nextTheme;

      persistTheme(nextTheme);
      applyTheme(nextTheme);
    },

    /* -----------------------------------------------------
       RESET THEME
    ----------------------------------------------------- */

    resetTheme: (state) => {
      const nextTheme: ThemeMode =
        DEFAULT_THEME;

      state.mode = nextTheme;

      persistTheme(nextTheme);
      applyTheme(nextTheme);
    },
  },
});

/* =========================================================
   ACTIONS
========================================================= */

export const {
  toggleTheme,
  setTheme,
  resetTheme,
} = themeSlice.actions;

/* =========================================================
   SELECTORS
========================================================= */

/**
 * Select the current theme mode.
 */
export const selectTheme = (
  state: {
    theme: ThemeState;
  }
): ThemeMode => {
  return state.theme.mode;
};

/**
 * Check whether dark mode is active.
 */
export const selectIsDarkMode = (
  state: {
    theme: ThemeState;
  }
): boolean => {
  return state.theme.mode === "dark";
};

/* =========================================================
   REDUCER
========================================================= */

export default themeSlice.reducer;