import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 *
 * Handles scroll position when navigating between routes.
 *
 * Features:
 * - Scrolls to top on normal route changes
 * - Supports hash-based section navigation
 * - Respects prefers-reduced-motion
 * - Uses requestAnimationFrame for reliable DOM positioning
 * - Accounts for the fixed Navbar
 */
const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // ---------------------------------------------------------
      // Hash navigation
      // ---------------------------------------------------------
      if (hash) {
        const elementId = decodeURIComponent(
          hash.replace(/^#/, "")
        );

        const target = document.getElementById(elementId);

        if (target) {
          const navbarOffset = 80;

          const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            navbarOffset;

          window.scrollTo({
            top: Math.max(0, targetPosition),
            left: 0,
            behavior: prefersReducedMotion ? "auto" : "smooth",
          });

          return;
        }
      }

      // ---------------------------------------------------------
      // Normal route navigation
      // ---------------------------------------------------------
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;