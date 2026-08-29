import { motion } from "framer-motion";
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
  FaExternalLinkAlt,
  FaTerminal,
  FaBolt,
  FaLayerGroup,
} from "react-icons/fa";

const Hero = () => {
  const techStack = [
    {
      name: "React",
      icon: FaReact,
      className: "text-cyan-400",
    },
    {
      name: "TypeScript",
      icon: FaCode,
      className: "text-blue-400",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      className: "text-green-400",
    },
    {
      name: "Express.js",
      icon: FaServer,
      className: "text-slate-300",
    },
    {
      name: "MongoDB",
      icon: FaDatabase,
      className: "text-emerald-400",
    },
  ];

  const stats = [
    {
      value: "MERN",
      label: "Full Stack",
    },
    {
      value: "REST",
      label: "API Development",
    },
    {
      value: "TS",
      label: "Type Safe",
    },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/AbhayTYagi9012543171",
      icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abhay-tyagi-13b592323/",
      icon: FaLinkedin,
    },
  ];

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative min-h-screen overflow-hidden bg-slate-950 px-5 pb-20 pt-28 sm:px-6 sm:pt-32 lg:pb-24"
    >
      {/* =========================================================
          BACKGROUND SYSTEM
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Primary glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.45, 0.7, 0.45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
        />

        {/* Left glow */}
        <div className="absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />

        {/* Right glow */}
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-purple-500/10 blur-[110px]" />

        {/* Radial atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(34,211,238,0.08),transparent_38%)]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* =======================================================
            LEFT CONTENT
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative z-10"
        >
          {/* Status */}

          <motion.div
            initial={{
              opacity: 0,
              y: -12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-300 backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            Available for opportunities
          </motion.div>

          {/* Greeting */}

          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
            }}
            className="mb-3 flex items-center gap-2 text-base font-medium text-slate-400 sm:text-lg"
          >
            Hello, I'm

            <span className="h-px w-10 bg-cyan-400/40" />
          </motion.p>

          {/* Name */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
          >
            Abhay{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Tyagi
            </span>
          </motion.h1>

          {/* Role */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.45,
            }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <h2 className="text-2xl font-bold text-slate-200 sm:text-3xl">
              MERN Stack Developer
            </h2>

            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cyan-300">
              Full Stack
            </span>
          </motion.div>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.55,
            }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            I design and develop{" "}
            <span className="font-semibold text-slate-200">
              modern, scalable and user-focused
            </span>{" "}
            web applications using the MERN stack. I turn ideas
            into reliable digital products through clean
            architecture, intuitive interfaces and well-designed
            APIs.
          </motion.p>

          {/* =====================================================
              TECH STACK
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.65,
            }}
            className="mt-7 flex flex-wrap gap-2.5"
          >
            {techStack.map((technology) => {
              const Icon = technology.icon;

              return (
                <motion.div
                  key={technology.name}
                  whileHover={{
                    y: -3,
                  }}
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-3.5 py-2 text-xs font-medium text-slate-400 backdrop-blur-sm transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-slate-200"
                >
                  <Icon
                    className={`text-sm ${technology.className}`}
                  />

                  {technology.name}
                </motion.div>
              );
            })}
          </motion.div>

          {/* =====================================================
              CTA
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.75,
            }}
            className="mt-9 flex flex-wrap gap-3"
          >
            {/* Primary CTA */}

            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-500/30"
            >
              Explore Projects

              <FaArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Resume */}

            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
            >
              <FaDownload
                size={13}
                className="transition-transform group-hover:-translate-y-0.5"
              />

              Download Resume
            </a>
          </motion.div>

          {/* =====================================================
              SOCIAL + AVAILABILITY
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.9,
            }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <motion.a
                  key={social.label}
                  whileHover={{
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.label} profile`}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-400"
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}

            <div className="hidden h-8 w-px bg-white/10 sm:block" />

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <FaBolt className="text-cyan-400" />

              Open to internships, freelance & full-time roles
            </div>
          </motion.div>

          {/* =====================================================
              STATS
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 1,
            }}
            className="mt-10 grid max-w-xl grid-cols-3 border-t border-white/10 pt-6"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.value}
                className={`relative ${
                  index !== 0
                    ? "border-l border-white/10 pl-5"
                    : ""
                }`}
              >
                <p className="text-xl font-black text-white sm:text-2xl">
                  {stat.value}
                </p>

                <p className="mt-1 text-[11px] uppercase tracking-wider text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* =======================================================
            RIGHT SIDE — DEVELOPER TERMINAL
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="relative flex items-center justify-center"
        >
          {/* Ambient glow */}

          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-8 rounded-[2rem] bg-cyan-500/10 blur-[70px]"
          />

          {/* Terminal wrapper */}

          <div className="relative w-full max-w-xl">
            {/* Floating top label */}

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-5 left-8 z-20 hidden items-center gap-2 rounded-xl border border-white/10 bg-slate-900/95 px-4 py-2 text-xs font-medium text-slate-400 shadow-xl backdrop-blur-xl sm:flex"
            >
              <FaTerminal className="text-cyan-400" />

              developer.tsx
            </motion.div>

            {/* Terminal */}

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/50 backdrop-blur-2xl">
              {/* Terminal header */}

              <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  portfolio
                </div>
              </div>

              {/* Code */}

              <div className="overflow-x-auto px-5 py-7 font-mono text-[12px] leading-7 sm:px-7 sm:text-sm sm:leading-8">
                <p>
                  <span className="text-purple-400">
                    const
                  </span>{" "}
                  <span className="text-cyan-400">
                    developer
                  </span>{" "}
                  = {"{"}
                </p>

                <p className="pl-5">
                  <span className="text-blue-400">
                    name
                  </span>
                  :{" "}
                  <span className="text-green-400">
                    "Abhay Tyagi"
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-blue-400">
                    role
                  </span>
                  :{" "}
                  <span className="text-green-400">
                    "MERN Stack Developer"
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-blue-400">
                    type
                  </span>
                  :{" "}
                  <span className="text-orange-300">
                    "Full Stack"
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  <span className="text-blue-400">
                    stack
                  </span>
                  : [
                </p>

                <p className="pl-10 text-green-400">
                  "React",
                </p>

                <p className="pl-10 text-green-400">
                  "TypeScript",
                </p>

                <p className="pl-10 text-green-400">
                  "Node.js",
                </p>

                <p className="pl-10 text-green-400">
                  "Express.js",
                </p>

                <p className="pl-10 text-green-400">
                  "MongoDB",
                </p>

                <p className="pl-5">
                  ],
                </p>

                <p className="pl-5">
                  <span className="text-blue-400">
                    focus
                  </span>
                  :{" "}
                  <span className="text-green-400">
                    "Scalable web products"
                  </span>
                </p>

                <p className="pl-5">
                  <span className="text-blue-400">
                    mindset
                  </span>
                  :{" "}
                  <span className="text-green-400">
                    "Build • Learn • Improve"
                  </span>
                </p>

                <p>
                  {"}"} as const;
                </p>

                <p className="mt-5">
                  <span className="text-purple-400">
                    console
                  </span>
                  .
                  <span className="text-cyan-400">
                    log
                  </span>
                  (
                  <span className="text-green-400">
                    "Let's build something great."
                  </span>
                  );
                  <span className="ml-1 animate-pulse text-cyan-400">
                    |
                  </span>
                </p>
              </div>

              {/* Terminal footer */}

              <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.015] px-5 py-4 sm:px-7">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                    <span className="relative h-2 w-2 rounded-full bg-green-400" />
                  </span>

                  <span className="text-[11px] text-slate-500">
                    System ready
                  </span>
                </div>

                <span className="font-mono text-[10px] text-slate-700">
                  v1.0.0
                </span>
              </div>
            </div>

            {/* =================================================
                FLOATING TECH BADGES
            ================================================= */}

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-6 top-20 hidden rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl sm:block"
            >
              <FaReact
                size={26}
                className="text-cyan-400"
              />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                rotate: [0, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut",
              }}
              className="absolute -right-5 bottom-24 hidden rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl sm:block"
            >
              <FaDatabase
                size={24}
                className="text-emerald-400"
              />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: 0.8,
                ease: "easeInOut",
              }}
              className="absolute -right-4 top-10 hidden rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl sm:block"
            >
              <FaServer
                size={23}
                className="text-purple-400"
              />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: 1,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 left-5 hidden rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl sm:block"
            >
              <FaLayerGroup
                size={23}
                className="text-blue-400"
              />
            </motion.div>

            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1.2,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 right-20 hidden rounded-xl border border-white/10 bg-slate-900/95 p-3 shadow-xl backdrop-blur-xl sm:block"
            >
              <FaNodeJs
                size={22}
                className="text-green-500"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <motion.a
        href="#about"
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
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 transition hover:text-cyan-400 sm:flex"
        aria-label="Scroll to About section"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.35em]">
          Explore
        </span>

        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaChevronDown size={11} />
        </motion.div>
      </motion.a>

      {/* =========================================================
          DECORATIVE SIDE LINE
      ========================================================= */}

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-6 top-1/2 hidden w-px bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent xl:block"
      />

      <div
        aria-hidden="true"
        className="absolute bottom-0 right-6 top-1/2 hidden w-px bg-gradient-to-b from-transparent via-blue-400/20 to-transparent xl:block"
      />
    </section>
  );
};

export default Hero;