import { useEffect } from "react";

import { useAppSelector } from "./redux/hooks";
import AppRoutes from "./routes/AppRoutes";

/* =========================================================
   CONSTANTS
========================================================= */

const THEME_STORAGE_KEY = "portfolio-theme";

/* =========================================================
   TYPES
========================================================= */

type ThemeMode = "dark" | "light";

/* =========================================================
   HELPERS
========================================================= */

/**
 * Apply the selected theme to the document.
 */
const applyTheme = (theme: ThemeMode): void => {
  const root = document.documentElement;

  /* Remove previous theme classes */
  root.classList.remove("light", "dark");

  /* Add current theme */
  root.classList.add(theme);

  /* Native browser UI */
  root.style.colorScheme = theme;
};

/**
 * Persist theme preference safely.
 */
const persistTheme = (theme: ThemeMode): void => {
  try {
    localStorage.setItem(
      THEME_STORAGE_KEY,
      theme
    );
  } catch (error) {
    console.warn(
      "Unable to save theme preference:",
      error
    );
  }
};

/* =========================================================
   APP
========================================================= */

const App = () => {
  const theme = useAppSelector(
    (state) => state.theme.mode
  );

  /* =======================================================
     THEME MANAGEMENT
  ======================================================= */

  useEffect(() => {
    /*
     * Redux is the single source of truth.
     * Whenever the theme changes, update the document
     * and persist the preference.
     */
    applyTheme(theme);
    persistTheme(theme);
  }, [theme]);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div
      id="app"
      className="
        min-h-screen
        w-full
        overflow-x-hidden

        bg-slate-50
        text-slate-900

        dark:bg-slate-950
        dark:text-white

        selection:bg-cyan-400/30
        selection:text-slate-900
        dark:selection:text-white

        transition-colors
        duration-300
      "
    >
      <AppRoutes />
    </div>
  );
};

export default App;