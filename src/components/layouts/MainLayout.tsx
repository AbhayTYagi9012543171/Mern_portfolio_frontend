import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const MainLayout = () => {
  const location = useLocation();

  const routeKey = `${location.pathname}${location.search}`;

  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-hidden bg-slate-950 text-white selection:bg-cyan-400/30 selection:text-cyan-200">

      {/* ================= GLOBAL BACKGROUND ================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        {/* Main atmospheric glow */}
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.035] blur-[120px]" />

        {/* Left glow */}
        <div className="absolute -left-48 top-1/3 h-96 w-96 rounded-full bg-blue-500/[0.025] blur-[110px]" />

        {/* Right glow */}
        <div className="absolute -right-48 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/[0.025] blur-[110px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* ================= ROUTE HELPERS ================= */}

      <ScrollToTop />

      {/* Skip navigation */}
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-xl transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      {/* ================= NAVBAR ================= */}

      <header className="relative z-50">
        <Navbar />
      </header>

      {/* ================= MAIN CONTENT ================= */}

      <main
        id="main-content"
        className="relative z-10 flex-1"
        tabIndex={-1}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={routeKey}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="min-h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ================= FOOTER ================= */}

      <footer className="relative z-10">
        <Footer />
      </footer>

      {/* ================= BOTTOM FADE ================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-24 bg-gradient-to-t from-slate-950/40 to-transparent"
      />
    </div>
  );
};

export default MainLayout;