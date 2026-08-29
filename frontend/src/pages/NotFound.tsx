import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import {
  FaHome,
  FaExclamationTriangle,
  FaArrowLeft,
  FaCode,
  FaProjectDiagram,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut" as const,
    },
  },
};

/* =========================================================
   QUICK LINKS
========================================================= */

const quickLinks = [
  {
    label: "Home",
    href: "/",
    icon: FaHome,
  },
  {
    label: "About",
    href: "/#about",
    icon: FaUser,
  },
  {
    label: "Projects",
    href: "/#projects",
    icon: FaProjectDiagram,
  },
  {
    label: "Contact",
    href: "/#contact",
    icon: FaEnvelope,
  },
];

/* =========================================================
   NOT FOUND
========================================================= */

const NotFound = () => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  /* -------------------------------------------------------
     RESET SCROLL
  ------------------------------------------------------- */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  }, [shouldReduceMotion]);

  /* -------------------------------------------------------
     BACK NAVIGATION
  ------------------------------------------------------- */

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="not-found-title"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      {/* Main cyan glow */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.06] blur-[120px]"
      />

      {/* Top-left glow */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-cyan-500/[0.05] blur-3xl"
      />

      {/* Bottom-right glow */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-500/[0.05] blur-3xl"
      />

      {/* =====================================================
          BACKGROUND GRID
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.8) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.8) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* =====================================================
          DECORATIVE ORBITS
      ===================================================== */}

      {!shouldReduceMotion && (
        <>
          <motion.div
            aria-hidden="true"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/[0.06]"
          />

          <motion.div
            aria-hidden="true"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04]"
          />
        </>
      )}

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-3xl text-center"
      >
        {/* ===================================================
            STATUS BADGE
        =================================================== */}

        <motion.div variants={itemVariants}>
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 shadow-lg shadow-cyan-500/5 backdrop-blur-xl">
            <motion.span
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.25, 1],
                      opacity: [1, 0.65, 1],
                    }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-cyan-400"
            />

            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-400 sm:text-xs">
              Page Not Found
            </span>
          </div>
        </motion.div>

        {/* ===================================================
            404 VISUAL
        =================================================== */}

        <motion.div
          variants={itemVariants}
          className="relative mx-auto mt-8"
        >
          {/* Back glow */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-cyan-400/[0.03] blur-3xl"
          />

          {/* Main number */}

          <motion.h1
            id="not-found-title"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    y: [0, -5, 0],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative select-none text-[clamp(7rem,30vw,16rem)] font-black leading-[0.8] tracking-[-0.08em] text-white"
          >
            <span className="relative">
              4

              {/* Cyan offset */}

              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 translate-x-1 text-cyan-400/10 blur-sm"
              >
                4
              </span>
            </span>

            <span className="relative text-cyan-400">
              0
            </span>

            <span className="relative">
              4
            </span>
          </motion.h1>

          {/* Decorative line */}

          <div className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400/30" />

            <FaCode
              className="text-cyan-400/60"
              size={13}
            />

            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-400/30" />
          </div>
        </motion.div>

        {/* ===================================================
            MESSAGE
        =================================================== */}

        <motion.div variants={itemVariants}>
          <h2 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Looks like you took a{" "}
            <span className="text-cyan-400">
              wrong turn.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            The page you're looking for doesn't exist,
            has been moved, or the URL may be incorrect.
            Let's get you back to something useful.
          </p>
        </motion.div>

        {/* ===================================================
            ACTION BUTTONS
        =================================================== */}

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
        >
          {/* Home */}

          <motion.button
            type="button"
            onClick={() => navigate("/")}
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: -2,
                  }
            }
            whileTap={
              shouldReduceMotion
                ? undefined
                : {
                    scale: 0.97,
                  }
            }
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/10 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <FaHome size={14} />

            Back to Home
          </motion.button>

          {/* Back */}

          <motion.button
            type="button"
            onClick={handleGoBack}
            whileHover={
              shouldReduceMotion
                ? undefined
                : {
                    y: -2,
                  }
            }
            whileTap={
              shouldReduceMotion
                ? undefined
                : {
                    scale: 0.97,
                  }
            }
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <FaArrowLeft size={13} />

            Go Back
          </motion.button>
        </motion.div>

        {/* ===================================================
            QUICK NAVIGATION
        =================================================== */}

        <motion.div
          variants={itemVariants}
          className="mx-auto mt-12 max-w-2xl"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-white/10" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-600">
              Quick Navigation
            </span>

            <span className="h-px w-10 bg-white/10" />
          </div>

          <nav
            aria-label="Quick navigation"
            className="grid grid-cols-2 gap-2 sm:grid-cols-4"
          >
            {quickLinks.map((link) => {
              const Icon = link.icon;

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -2,
                        }
                  }
                  className="group flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-3 text-xs font-medium text-slate-400 backdrop-blur-xl transition hover:border-cyan-400/20 hover:bg-cyan-400/[0.04] hover:text-cyan-300"
                >
                  <Icon
                    size={12}
                    className="text-slate-600 transition group-hover:text-cyan-400"
                  />

                  {link.label}
                </motion.a>
              );
            })}
          </nav>
        </motion.div>

        {/* ===================================================
            FOOTER STATUS
        =================================================== */}

        <motion.div
          variants={itemVariants}
          className="mt-10 flex items-center justify-center gap-2 text-[11px] text-slate-600"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />

          <span>
            System operational · Nothing to see here
          </span>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default NotFound;