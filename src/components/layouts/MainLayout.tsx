import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const MainLayout = () => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const routeKey = `${location.pathname}${location.search}`;

  return (
    <div
      className="
        relative flex min-h-dvh flex-col overflow-x-hidden
        bg-[#020617] text-white
        selection:bg-cyan-400/30
        selection:text-cyan-100
      "
    >
      {/* =========================================================
          GLOBAL ATMOSPHERIC BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
      >
        {/* Base radial atmosphere */}

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.055),transparent_32%)]
          "
        />

        {/* Top cyan atmosphere */}

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 35, -20, 0],
                  y: [0, 20, -10, 0],
                  scale: [1, 1.05, 0.98, 1],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-[-18rem]
            h-[38rem]
            w-[38rem]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/[0.045]
            blur-[140px]
          "
        />

        {/* Left blue atmosphere */}

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 25, -15, 0],
                  y: [0, -20, 15, 0],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-56
            top-[28%]
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-blue-500/[0.035]
            blur-[130px]
          "
        />

        {/* Right purple atmosphere */}

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, -25, 15, 0],
                  y: [0, 20, -15, 0],
                }
          }
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-56
            top-[55%]
            h-[32rem]
            w-[32rem]
            rounded-full
            bg-purple-500/[0.028]
            blur-[140px]
          "
        />

        {/* Bottom blue glow */}

        <div
          className="
            absolute
            bottom-[-18rem]
            left-1/2
            h-[32rem]
            w-[32rem]
            -translate-x-1/2
            rounded-full
            bg-blue-500/[0.02]
            blur-[130px]
          "
        />
      </div>

      {/* =========================================================
          PREMIUM GRID OVERLAY
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          -z-10
          opacity-[0.018]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* =========================================================
          SUBTLE RADIAL VIGNETTE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_center,transparent_35%,rgba(2,6,23,0.28)_100%)]
        "
      />

      {/* =========================================================
          TOP ACCENT LINE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          left-0
          right-0
          top-0
          z-[100]
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-400/70
          to-transparent
        "
      />

      {/* =========================================================
          ROUTE / SCROLL HELPERS
      ========================================================== */}

      <ScrollToTop />

      {/* =========================================================
          SKIP NAVIGATION
      ========================================================== */}

      <a
        href="#main-content"
        className="
          fixed
          left-4
          top-4
          z-[110]
          -translate-y-20
          rounded-xl
          border
          border-cyan-400/20
          bg-slate-950
          px-4
          py-2.5
          text-sm
          font-semibold
          text-cyan-300
          shadow-2xl
          shadow-black/30
          outline-none
          transition-all
          duration-200
          focus:translate-y-0
          focus:border-cyan-400/40
          focus:ring-2
          focus:ring-cyan-400/30
        "
      >
        Skip to content
      </a>

      {/* =========================================================
          NAVBAR
      ========================================================== */}

      <header
        className="
          relative
          z-50
          border-b
          border-white/[0.035]
        "
      >
        <Navbar />
      </header>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <main
        id="main-content"
        tabIndex={-1}
        className="
          relative
          z-10
          flex-1
          outline-none
        "
      >
        <AnimatePresence mode="wait" initial={!shouldReduceMotion}>
          <motion.div
            key={routeKey}
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 14,
                    filter: "blur(4px)",
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            exit={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 0,
                    y: -10,
                    filter: "blur(3px)",
                  }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="min-h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* =========================================================
          FOOTER
      ========================================================== */}

      <footer className="relative z-10">
        <Footer />
      </footer>

      {/* =========================================================
          BOTTOM ATMOSPHERIC FADE
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-x-0
          bottom-0
          z-0
          h-32
          bg-gradient-to-t
          from-slate-950/60
          via-slate-950/20
          to-transparent
        "
      />

      {/* =========================================================
          EDGE GLOW
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-y-0
          left-0
          z-0
          w-px
          bg-gradient-to-b
          from-transparent
          via-cyan-400/[0.08]
          to-transparent
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-y-0
          right-0
          z-0
          w-px
          bg-gradient-to-b
          from-transparent
          via-blue-400/[0.06]
          to-transparent
        "
      />
    </div>
  );
};

export default MainLayout;