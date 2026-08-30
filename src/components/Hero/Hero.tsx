import {
  useMemo,
  type ComponentType,
  type ReactNode,
} from "react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaServer,
  FaReact,
  FaNodeJs,
  FaChevronDown,
  FaTerminal,
  FaBolt,
  FaLayerGroup,
  FaRocket,
  FaCircle,
  FaCheck,
  FaExternalLinkAlt,
} from "react-icons/fa";

/* =========================================================
   TYPES
========================================================= */

interface TechItem {
  name: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
  description: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

interface FloatingCard {
  title: string;
  subtitle: string;
  icon: ComponentType<{ className?: string }>;
  position: string;
  iconClass: string;
}

interface CodeLine {
  number: string;
  content: ReactNode;
}

/* =========================================================
   CONSTANTS
========================================================= */

const GITHUB_URL =
  "https://github.com/AbhayTYagi9012543171";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/abhay-tyagi-13b592323/";

const RESUME_URL = "/resume.pdf";

/* =========================================================
   COMPONENT
========================================================= */

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  /* =======================================================
     TECH STACK
  ======================================================= */

  const techStack = useMemo<TechItem[]>(
    () => [
      {
        name: "React",
        icon: FaReact,
        color: "text-cyan-400",
        description: "Modern UI",
      },
      {
        name: "TypeScript",
        icon: FaCode,
        color: "text-blue-400",
        description: "Type Safety",
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-400",
        description: "Runtime",
      },
      {
        name: "Express",
        icon: FaServer,
        color: "text-slate-300",
        description: "REST APIs",
      },
      {
        name: "MongoDB",
        icon: FaDatabase,
        color: "text-emerald-400",
        description: "Database",
      },
    ],
    []
  );

  /* =======================================================
     SOCIAL LINKS
  ======================================================= */

  const socialLinks = useMemo<SocialLink[]>(
    () => [
      {
        label: "GitHub",
        href: GITHUB_URL,
        icon: FaGithub,
      },
      {
        label: "LinkedIn",
        href: LINKEDIN_URL,
        icon: FaLinkedin,
      },
    ],
    []
  );

  /* =======================================================
     FLOATING CARDS
  ======================================================= */

  const floatingCards = useMemo<FloatingCard[]>(
    () => [
      {
        title: "Frontend",
        subtitle: "React + TypeScript",
        icon: FaReact,
        position:
          "left-0 top-[10%] lg:-left-10",
        iconClass: "text-cyan-400",
      },
      {
        title: "Backend",
        subtitle: "Node + Express",
        icon: FaServer,
        position:
          "right-0 top-[30%] lg:-right-12",
        iconClass: "text-purple-400",
      },
      {
        title: "Database",
        subtitle: "MongoDB",
        icon: FaDatabase,
        position:
          "bottom-[14%] left-1 lg:-left-8",
        iconClass: "text-emerald-400",
      },
    ],
    []
  );

  /* =======================================================
     STATS
  ======================================================= */

  const stats = [
    {
      value: "MERN",
      label: "Full Stack",
    },
    {
      value: "REST",
      label: "API Design",
    },
    {
      value: "TS",
      label: "Type Safe",
    },
  ];

  /* =======================================================
     CODE
  ======================================================= */

  const codeLines: CodeLine[] = [
    {
      number: "01",
      content: (
        <>
          <span className="text-purple-400">
            const
          </span>{" "}
          <span className="text-cyan-300">
            developer
          </span>{" "}
          <span className="text-slate-500">
            =
          </span>{" "}
          <span className="text-yellow-300">
            {"{"}
          </span>
        </>
      ),
    },
    {
      number: "02",
      content: (
        <>
          <span className="text-blue-400">
            name
          </span>
          <span className="text-slate-500">
            :
          </span>{" "}
          <span className="text-emerald-400">
            "Abhay Tyagi"
          </span>
          <span className="text-slate-500">
            ,
          </span>
        </>
      ),
    },
    {
      number: "03",
      content: (
        <>
          <span className="text-blue-400">
            role
          </span>
          <span className="text-slate-500">
            :
          </span>{" "}
          <span className="text-emerald-400">
            "MERN Stack Developer"
          </span>
          <span className="text-slate-500">
            ,
          </span>
        </>
      ),
    },
    {
      number: "04",
      content: (
        <>
          <span className="text-blue-400">
            location
          </span>
          <span className="text-slate-500">
            :
          </span>{" "}
          <span className="text-emerald-400">
            "India"
          </span>
          <span className="text-slate-500">
            ,
          </span>
        </>
      ),
    },
    {
      number: "05",
      content: (
        <>
          <span className="text-blue-400">
            stack
          </span>
          <span className="text-slate-500">
            :
          </span>{" "}
          <span className="text-yellow-300">
            [
          </span>
        </>
      ),
    },
    {
      number: "06",
      content: (
        <>
          <span className="text-emerald-400">
            "React"
          </span>
          <span className="text-slate-500">
            ,
          </span>{" "}
          <span className="text-emerald-400">
            "Node.js"
          </span>
          <span className="text-slate-500">
            ,
          </span>
        </>
      ),
    },
    {
      number: "07",
      content: (
        <>
          <span className="text-emerald-400">
            "MongoDB"
          </span>
          <span className="text-slate-500">
            ,
          </span>{" "}
          <span className="text-emerald-400">
            "TypeScript"
          </span>
        </>
      ),
    },
    {
      number: "08",
      content: (
        <>
          <span className="text-yellow-300">
            ]
          </span>
          <span className="text-slate-500">
            ,
          </span>
        </>
      ),
    },
    {
      number: "09",
      content: (
        <>
          <span className="text-blue-400">
            focus
          </span>
          <span className="text-slate-500">
            :
          </span>{" "}
          <span className="text-emerald-400">
            "Scalable products"
          </span>
          <span className="text-slate-500">
            ,
          </span>
        </>
      ),
    },
    {
      number: "10",
      content: (
        <>
          <span className="text-blue-400">
            mindset
          </span>
          <span className="text-slate-500">
            :
          </span>{" "}
          <span className="text-emerald-400">
            "Build • Learn • Improve"
          </span>
        </>
      ),
    },
    {
      number: "11",
      content: (
        <>
          <span className="text-yellow-300">
            {"}"}
          </span>{" "}
          <span className="text-slate-500">
            as const;
          </span>
        </>
      ),
    },
  ];

  /* =======================================================
     SCROLL FUNCTION
  ======================================================= */

  const scrollToSection = (id: string) => {
    const element =
      document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: shouldReduceMotion
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  /* =======================================================
     MOTION HELPERS
  ======================================================= */

  const fadeUp = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative isolate min-h-screen overflow-hidden bg-slate-950 px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8 lg:pb-24"
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Main cyan glow */}

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 50, 0],
                  y: [0, -35, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.25, 0.5, 0.25],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[30%] top-[-14rem] h-[40rem] w-[40rem] rounded-full bg-cyan-500/10 blur-[140px]"
        />

        {/* Purple glow */}

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, -35, 0],
                  y: [0, 35, 0],
                  scale: [1, 1.08, 1],
                  opacity: [0.2, 0.4, 0.2],
                }
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-15rem] top-[20%] h-[36rem] w-[36rem] rounded-full bg-purple-600/10 blur-[130px]"
        />

        {/* Blue bottom glow */}

        <div className="absolute bottom-[-16rem] left-[-12rem] h-[34rem] w-[34rem] rounded-full bg-blue-600/10 blur-[130px]" />

        {/* Center atmosphere */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.09),transparent_35%)]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 88%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 88%)",
          }}
        />

        {/* Vignette */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.4)_80%)]" />

        {/* Bottom fade */}

        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      {/* ===================================================
          TOP STATUS
      =================================================== */}

      <motion.div
        {...fadeUp}
        transition={{
          duration: 0.7,
        }}
        className="relative mx-auto mb-10 flex max-w-7xl justify-center lg:justify-start"
      >
        <div className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300 shadow-[0_0_40px_rgba(34,211,238,0.06)] backdrop-blur-xl sm:text-[11px]">
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
          </span>

          Available for opportunities

          <span className="hidden text-slate-600 sm:inline">
            •
          </span>

          <span className="hidden text-slate-500 sm:inline">
            Full Stack Developer
          </span>
        </div>
      </motion.div>

      {/* ===================================================
          MAIN GRID
      =================================================== */}

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:min-h-[calc(100vh-14rem)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -45,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="relative z-10"
        >
          {/* Greeting */}

          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.6,
              delay: 0.12,
            }}
            className="mb-5 flex items-center gap-3 text-sm font-medium text-slate-500 sm:text-base"
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400/70" />

            Hello, I'm

            <span className="text-cyan-400">
              ✦
            </span>
          </motion.div>

          {/* Name */}

          <motion.h1
            {...fadeUp}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="max-w-5xl text-[3.5rem] font-black leading-[0.92] tracking-[-0.065em] text-white sm:text-6xl md:text-7xl lg:text-[5.4rem] xl:text-[6.3rem]"
          >
            Abhay{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Tyagi
              </span>

              <motion.span
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: [
                          0.2,
                          0.8,
                          0.2,
                        ],
                        scaleX: [
                          0.85,
                          1,
                          0.85,
                        ],
                      }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-2 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-[1px]"
              />
            </span>
          </motion.h1>

          {/* Role */}

          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.65,
              delay: 0.34,
            }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <h2 className="text-xl font-bold tracking-tight text-slate-200 sm:text-2xl lg:text-3xl">
              MERN Stack Developer
            </h2>

            <span className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/[0.07] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-purple-300">
              <FaRocket className="text-[9px]" />
              Builder
            </span>
          </motion.div>

          {/* Description */}

          <motion.p
            {...fadeUp}
            transition={{
              duration: 0.65,
              delay: 0.45,
            }}
            className="mt-7 max-w-2xl text-[15px] leading-7 text-slate-400 sm:text-lg sm:leading-8"
          >
            I build{" "}
            <span className="font-semibold text-slate-200">
              modern, scalable and high-performance
            </span>{" "}
            web applications using React, Node.js,
            Express and MongoDB — combining thoughtful
            engineering, clean architecture and
            exceptional user experiences.
          </motion.p>

          {/* =================================================
              TECH STACK
          ================================================= */}

          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.65,
              delay: 0.56,
            }}
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {techStack.map(
              (technology) => {
                const Icon =
                  technology.icon;

                return (
                  <motion.div
                    key={
                      technology.name
                    }
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -5,
                            scale: 1.03,
                          }
                    }
                    className="group relative flex cursor-default items-center gap-2.5 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.035] px-3.5 py-2.5 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.06]"
                  >
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent transition-transform duration-500 group-hover:translate-x-full" />

                    <Icon
                      className={`relative text-sm ${technology.color}`}
                    />

                    <div className="relative">
                      <p className="text-xs font-semibold text-slate-300">
                        {technology.name}
                      </p>

                      <p className="text-[8px] uppercase tracking-wider text-slate-600">
                        {technology.description}
                      </p>
                    </div>
                  </motion.div>
                );
              }
            )}
          </motion.div>

          {/* =================================================
              CTA
          ================================================= */}

          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.65,
              delay: 0.68,
            }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {/* Projects */}

            <motion.button
              type="button"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -3,
                      scale: 1.02,
                    }
              }
              whileTap={{
                scale: 0.97,
              }}
              onClick={() =>
                scrollToSection(
                  "projects"
                )
              }
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-[0_12px_40px_rgba(34,211,238,0.18)] transition-all duration-300 hover:shadow-[0_18px_55px_rgba(34,211,238,0.28)] focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />

              <span className="relative">
                Explore Projects
              </span>

              <FaArrowRight
                size={12}
                className="relative transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>

            {/* Resume */}

            <motion.a
              href={RESUME_URL}
              download="Abhay-Tyagi-Resume.pdf"
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -3,
                    }
              }
              whileTap={{
                scale: 0.97,
              }}
              className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-semibold text-slate-200 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
            >
              <FaDownload
                size={12}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />

              Download Resume
            </motion.a>
          </motion.div>

          {/* =================================================
              SOCIAL
          ================================================= */}

          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {socialLinks.map(
              (social) => {
                const Icon =
                  social.icon;

                return (
                  <motion.a
                    key={
                      social.label
                    }
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit my ${social.label} profile`}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -4,
                          }
                    }
                    whileTap={{
                      scale: 0.94,
                    }}
                    className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-slate-500 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                  >
                    <Icon className="text-lg transition-transform duration-300 group-hover:scale-110" />
                  </motion.a>
                );
              }
            )}

            <div className="hidden h-8 w-px bg-white/10 sm:block" />

            <div className="flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/[0.03] px-3 py-2 text-xs text-slate-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              Open to opportunities
            </div>
          </motion.div>

          {/* =================================================
              STATS
          ================================================= */}

          <motion.div
            {...fadeUp}
            transition={{
              duration: 0.65,
              delay: 0.92,
            }}
            className="mt-10 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] shadow-2xl shadow-black/10 backdrop-blur-xl"
          >
            {stats.map(
              (stat, index) => (
                <div
                  key={stat.value}
                  className={`relative px-4 py-4 sm:px-6 ${
                    index !== 0
                      ? "border-l border-white/[0.07]"
                      : ""
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

                  <p className="text-xl font-black tracking-tight text-white sm:text-2xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-600 sm:text-[10px]">
                    {stat.label}
                  </p>
                </div>
              )
            )}
          </motion.div>
        </motion.div>

        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 45,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.18,
            ease: "easeOut",
          }}
          className="relative flex min-h-[530px] items-center justify-center lg:min-h-[610px]"
        >
          {/* =================================================
              AMBIENT GLOW
          ================================================= */}

          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    scale: [1, 1.08, 1],
                    opacity: [
                      0.2,
                      0.4,
                      0.2,
                    ],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-[26rem] w-[26rem] rounded-full bg-cyan-500/10 blur-[110px]"
          />

          {/* =================================================
              ROTATING RINGS
          ================================================= */}

          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    rotate: 360,
                  }
            }
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[32rem] w-[32rem] rounded-full border border-cyan-400/[0.05]"
          />

          <motion.div
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    rotate: -360,
                  }
            }
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[25rem] w-[25rem] rounded-full border border-purple-400/[0.05]"
          />

          <div className="relative w-full max-w-xl">
            {/* =================================================
                FILE LABEL
            ================================================= */}

            <motion.div
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
              className="absolute -top-7 left-7 z-30 hidden items-center gap-2 rounded-xl border border-white/10 bg-slate-900/90 px-4 py-2.5 text-[10px] font-semibold text-slate-400 shadow-2xl backdrop-blur-2xl sm:flex"
            >
              <FaTerminal className="text-cyan-400" />

              developer.tsx

              <span className="text-slate-700">
                •
              </span>

              <span className="text-emerald-400">
                saved
              </span>
            </motion.div>

            {/* =================================================
                TERMINAL CARD
            ================================================= */}

            <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.1] bg-slate-900/75 shadow-[0_35px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
              {/* Gradient overlay */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/[0.08] via-transparent to-purple-500/[0.08]" />

              {/* Top shine */}

              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

              {/* =================================================
                  TERMINAL HEADER
              ================================================= */}

              <div className="relative flex items-center justify-between border-b border-white/[0.08] bg-white/[0.025] px-5 py-4 sm:px-6">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80 shadow-sm shadow-red-400/20" />

                  <span className="h-3 w-3 rounded-full bg-yellow-400/80 shadow-sm shadow-yellow-400/20" />

                  <span className="h-3 w-3 rounded-full bg-green-400/80 shadow-sm shadow-green-400/20" />
                </div>

                <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-600">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                    <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                  </span>

                  production
                </div>
              </div>

              {/* =================================================
                  TABS
              ================================================= */}

              <div className="relative flex border-b border-white/[0.06] bg-black/10">
                <div className="border-r border-white/[0.05] border-b-2 border-b-cyan-400 bg-cyan-400/[0.04] px-5 py-2.5 text-[10px] font-medium text-cyan-300">
                  developer.tsx
                </div>

                <div className="px-5 py-2.5 text-[10px] text-slate-600">
                  portfolio
                </div>

                <div className="ml-auto flex items-center px-5 text-slate-700">
                  <FaExternalLinkAlt size={9} />
                </div>
              </div>

              {/* =================================================
                  CODE AREA
              ================================================= */}

              <div className="relative overflow-x-auto px-4 py-7 sm:px-6 sm:py-8">
                <div className="min-w-[390px] font-mono text-[11px] leading-7 sm:text-[12px] sm:leading-8">
                  {codeLines.map(
                    (line) => (
                      <div
                        key={
                          line.number
                        }
                        className="flex"
                      >
                        <span className="mr-5 w-5 select-none text-right text-slate-700">
                          {
                            line.number
                          }
                        </span>

                        <span>
                          {
                            line.content
                          }
                        </span>
                      </div>
                    )
                  )}

                  {/* Export */}

                  <div className="mt-5 flex">
                    <span className="mr-5 w-5 select-none text-right text-slate-700">
                      12
                    </span>

                    <span>
                      <span className="text-purple-400">
                        export
                      </span>{" "}
                      <span className="text-cyan-300">
                        default
                      </span>{" "}
                      <span className="text-cyan-300">
                        developer
                      </span>
                      <span className="text-slate-500">
                        ;
                      </span>

                      <motion.span
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : {
                                opacity: [
                                  1,
                                  0,
                                  1,
                                ],
                              }
                        }
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                        }}
                        className="ml-1 text-cyan-400"
                      >
                        ▌
                      </motion.span>
                    </span>
                  </div>
                </div>
              </div>

              {/* =================================================
                  TERMINAL FOOTER
              ================================================= */}

              <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] bg-white/[0.015] px-5 py-4 sm:px-6">
                <div className="flex items-center gap-2">
                  <FaCheck className="text-[10px] text-emerald-400" />

                  <span className="text-[10px] font-medium text-slate-500">
                    Build successful
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-slate-700">
                    v1.0.0
                  </span>

                  <span className="text-slate-800">
                    |
                  </span>

                  <span className="font-mono text-[10px] text-slate-600">
                    main
                  </span>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING ARCHITECTURE CARDS
            ================================================= */}

            {floatingCards.map(
              (card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: [
                              0,
                              index % 2 ===
                              0
                                ? -10
                                : 10,
                              0,
                            ],
                            rotate:
                              index % 2 ===
                              0
                                ? [
                                    0,
                                    1,
                                    0,
                                  ]
                                : [
                                    0,
                                    -1,
                                    0,
                                  ],
                          }
                    }
                    transition={{
                      duration:
                        4.5 +
                        index * 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay:
                        index * 0.35,
                    }}
                    className={`absolute ${card.position} z-20 hidden rounded-2xl border border-white/10 bg-slate-900/90 p-3 shadow-2xl backdrop-blur-2xl sm:flex sm:items-center sm:gap-3`}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                      <Icon
                        className={`text-lg ${card.iconClass}`}
                      />
                    </div>

                    <div>
                      <p className="text-[11px] font-bold text-slate-200">
                        {card.title}
                      </p>

                      <p className="mt-0.5 text-[9px] text-slate-600">
                        {card.subtitle}
                      </p>
                    </div>
                  </motion.div>
                );
              }
            )}

            {/* =================================================
                READY TO BUILD CARD
            ================================================= */}

            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -7, 0],
                      rotate: [
                        0,
                        2,
                        0,
                      ],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-7 right-7 z-30 hidden items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/95 px-4 py-3 shadow-2xl backdrop-blur-2xl sm:flex"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <FaRocket />
              </div>

              <div>
                <p className="text-[10px] font-bold text-white">
                  Ready to build
                </p>

                <p className="mt-0.5 text-[9px] text-slate-600">
                  Ideas → Products
                </p>
              </div>
            </motion.div>

            {/* =================================================
                LIVE STATUS CARD
            ================================================= */}

            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, 5, 0],
                    }
              }
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 left-8 z-30 hidden items-center gap-2 rounded-xl border border-white/10 bg-slate-900/95 px-3 py-2 shadow-xl backdrop-blur-2xl md:flex"
            >
              <FaBolt className="text-[10px] text-cyan-400" />

              <span className="text-[9px] font-semibold text-slate-500">
                API • UI • Database
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ===================================================
          SCROLL INDICATOR
      =================================================== */}

      <motion.button
        type="button"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.6,
          duration: 0.8,
        }}
        onClick={() =>
          scrollToSection("about")
        }
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 transition-colors hover:text-cyan-400 focus:outline-none sm:flex"
        aria-label="Scroll to About section"
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.35em]">
          Explore
        </span>

        <motion.span
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, 7, 0],
                }
          }
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaChevronDown size={11} />
        </motion.span>
      </motion.button>

      {/* ===================================================
          SIDE DECORATIONS
      =================================================== */}

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-5 top-[55%] hidden w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent xl:block"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-5 top-[55%] hidden w-px bg-gradient-to-b from-transparent via-purple-400/20 to-transparent xl:block"
      />

      {/* Decorative dots */}

      <div
        aria-hidden="true"
        className="absolute left-10 top-[42%] hidden text-cyan-400/30 xl:block"
      >
        <FaCircle size={4} />
      </div>

      <div
        aria-hidden="true"
        className="absolute right-10 top-[48%] hidden text-purple-400/30 xl:block"
      >
        <FaCircle size={4} />
      </div>

      {/* ===================================================
          BOTTOM DECORATIVE LINE
      =================================================== */}

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
      />
    </section>
  );
};

export default Hero;