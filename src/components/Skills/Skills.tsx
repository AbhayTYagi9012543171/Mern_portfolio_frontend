import {
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaServer,
  FaDatabase,
  FaBolt,
  FaLayerGroup,
  FaArrowRight,
  FaCheck,
  FaStar,
  FaRocket,
  FaTerminal,
  FaCircle,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiRedux,
  SiAxios,
  SiSocketdotio,
  SiHtml5,
  SiCss,
} from "react-icons/si";

import { skills } from "../../data/skills";

/* =========================================================
   ICON MAP
========================================================= */

const iconMap: Record<string, ReactNode> = {
  "React.js": <FaReact />,
  React: <FaReact />,

  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,

  "Node.js": <FaNodeJs />,
  "Express.js": <SiExpress />,
  Express: <SiExpress />,

  MongoDB: <SiMongodb />,
  Mongoose: <FaDatabase />,

  "Redux Toolkit": <SiRedux />,
  "Tailwind CSS": <SiTailwindcss />,

  "REST API": <FaServer />,
  "REST APIs": <FaServer />,
  Axios: <SiAxios />,
  "Socket.io": <SiSocketdotio />,

  Git: <FaGitAlt />,
  GitHub: <FaGithub />,

  HTML5: <SiHtml5 />,
  CSS3: <SiCss />,
};

/* =========================================================
   HELPERS
========================================================= */

const getSkillLevel = (level: number) => {
  if (level >= 90) return "Advanced";
  if (level >= 75) return "Strong";
  if (level >= 60) return "Intermediate";
  return "Learning";
};

const getSkillDescription = (level: number) => {
  if (level >= 90) {
    return "Highly confident";
  }

  if (level >= 75) {
    return "Production ready";
  }

  if (level >= 60) {
    return "Comfortable working";
  }

  return "Currently improving";
};

/* =========================================================
   LEVEL COLOR HELPERS
========================================================= */

const getLevelStyles = (level: number) => {
  if (level >= 90) {
    return {
      text: "text-cyan-300",
      bg: "bg-cyan-400/10",
      border: "border-cyan-400/20",
      gradient:
        "from-cyan-300 via-cyan-400 to-blue-500",
    };
  }

  if (level >= 75) {
    return {
      text: "text-blue-300",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20",
      gradient:
        "from-blue-300 via-blue-400 to-cyan-500",
    };
  }

  if (level >= 60) {
    return {
      text: "text-purple-300",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20",
      gradient:
        "from-purple-300 via-purple-400 to-blue-500",
    };
  }

  return {
    text: "text-slate-300",
    bg: "bg-white/5",
    border: "border-white/10",
    gradient:
      "from-slate-400 via-slate-300 to-slate-400",
  };
};

/* =========================================================
   COMPONENT
========================================================= */

const Skills = () => {
  const [activeCategory, setActiveCategory] =
    useState<string>("All");

  const shouldReduceMotion = useReducedMotion();

  const reducedMotion = Boolean(
    shouldReduceMotion
  );

  /* =======================================================
     CATEGORIES
  ======================================================= */

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(
        skills
          .map((skill) => skill.category)
          .filter(Boolean)
      )
    );

    return ["All", ...uniqueCategories];
  }, []);

  /* =======================================================
     FILTERED SKILLS
  ======================================================= */

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") {
      return skills;
    }

    return skills.filter(
      (skill) =>
        skill.category === activeCategory
    );
  }, [activeCategory]);

  /* =======================================================
     TOP SKILLS
  ======================================================= */

  const topSkills = useMemo(() => {
    return [...skills]
      .sort((a, b) => b.level - a.level)
      .slice(0, 4);
  }, []);

  /* =======================================================
     AVERAGE SKILL
  ======================================================= */

  const averageSkill = useMemo(() => {
    if (!skills.length) return 0;

    const total = skills.reduce(
      (sum, skill) => sum + skill.level,
      0
    );

    return Math.round(total / skills.length);
  }, []);

  /* =======================================================
     CATEGORY COUNT
  ======================================================= */

  const categoryCount = useMemo(() => {
    return new Set(
      skills.map((skill) => skill.category)
    ).size;
  }, []);

  /* =======================================================
     ANIMATION VARIANTS
  ======================================================= */

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion
          ? 0
          : 0.055,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 25,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0 : 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative isolate overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Cyan glow */}

        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, 35, 0],
                  y: [0, -25, 0],
                  scale: [1, 1.08, 1],
                  opacity: [0.5, 0.8, 0.5],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 top-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/[0.07] blur-[120px]"
        />

        {/* Blue glow */}

        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, -25, 0],
                  y: [0, 30, 0],
                  scale: [1, 1.06, 1],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 top-1/3 h-[30rem] w-[30rem] rounded-full bg-blue-500/[0.06] blur-[120px]"
        />

        {/* Purple glow */}

        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-purple-500/[0.05] blur-[120px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "52px 52px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 92%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 92%)",
          }}
        />

        {/* Vignette */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,6,23,0.5)_100%)]" />
      </div>

      {/* ===================================================
          MAIN CONTAINER
      =================================================== */}

      <div className="relative mx-auto w-full max-w-7xl">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.header
          initial={{
            opacity: 0,
            y: reducedMotion ? 0 : 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: reducedMotion ? 0 : 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}

          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-3 py-2 shadow-[0_0_40px_rgba(34,211,238,0.05)] backdrop-blur-xl sm:px-4">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />

              <span className="relative h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            </span>

            <span className="truncate text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-400 sm:text-[11px] sm:tracking-[0.22em]">
              Technical Skills
            </span>

            <span className="hidden text-slate-700 sm:inline">
              •
            </span>

            <span className="hidden text-[10px] text-slate-500 sm:inline">
              Full Stack
            </span>
          </div>

          {/* Heading */}

          <h2
            id="skills-title"
            className="text-[2.5rem] font-black leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl"
          >
            My{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technology
            </span>{" "}
            Stack
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-[13px] leading-7 text-slate-400 sm:mt-6 sm:text-base sm:leading-8">
            A modern full-stack development toolkit focused
            on scalable applications, responsive interfaces,
            clean APIs, database architecture and real-time
            experiences.
          </p>
        </motion.header>

        {/* =================================================
            STATS
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: reducedMotion ? 0 : 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: reducedMotion ? 0 : 0.6,
            delay: 0.1,
          }}
          className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-4"
        >
          <StatCard
            value={`${skills.length}+`}
            label="Technologies"
            icon={<FaCode />}
          />

          <StatCard
            value={`${categoryCount}`}
            label="Skill Areas"
            icon={<FaLayerGroup />}
          />

          <StatCard
            value={`${averageSkill}%`}
            label="Average Level"
            icon={<FaBolt />}
          />

          <StatCard
            value="100%"
            label="Learning Mindset"
            icon={<FaStar />}
          />
        </motion.div>

        {/* =================================================
            CORE TECHNOLOGIES
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: reducedMotion ? 0 : 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: reducedMotion ? 0 : 0.6,
          }}
          className="mt-16 sm:mt-20"
        >
          {/* Section heading */}

          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 shadow-lg shadow-cyan-500/5">
                <FaBolt />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  Core Technologies
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-slate-500 sm:text-xs">
                  My strongest and most frequently used
                  technologies
                </p>
              </div>
            </div>

            <span className="self-start rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[10px] font-medium text-slate-500 sm:self-auto">
              Top {topSkills.length} technologies
            </span>
          </div>

          {/* Core skills */}

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {topSkills.map((skill, index) => {
              const styles = getLevelStyles(
                skill.level
              );

              return (
                <motion.div
                  key={skill.name}
                  initial={{
                    opacity: 0,
                    y: reducedMotion ? 0 : 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: reducedMotion
                      ? 0
                      : 0.45,
                    delay: reducedMotion
                      ? 0
                      : index * 0.07,
                  }}
                  whileHover={
                    reducedMotion
                      ? undefined
                      : {
                          y: -6,
                        }
                  }
                  className={`group relative overflow-hidden rounded-2xl border ${styles.border} bg-white/[0.025] p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.045] sm:p-5`}
                >
                  {/* Glow */}

                  <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Top line */}

                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/10 text-xl text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:border-cyan-400/30">
                      {iconMap[skill.name] || (
                        <FaCode />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate text-sm font-bold text-white">
                          {skill.name}
                        </p>

                        <span
                          className={`shrink-0 text-xs font-black ${styles.text}`}
                        >
                          {skill.level}%
                        </span>
                      </div>

                      <p
                        className={`mt-1 text-[10px] font-semibold uppercase tracking-wider ${styles.text} opacity-70`}
                      >
                        {getSkillLevel(
                          skill.level
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Progress */}

                  <div className="relative mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${skill.level}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: reducedMotion
                          ? 0
                          : 1,
                        ease: "easeOut",
                        delay: reducedMotion
                          ? 0
                          : index * 0.08,
                      }}
                      className={`h-full rounded-full bg-gradient-to-r ${styles.gradient}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* =================================================
            ALL SKILLS HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: reducedMotion ? 0 : 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: reducedMotion ? 0 : 0.5,
          }}
          className="mt-16 sm:mt-20"
        >
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <FaTerminal className="text-sm text-cyan-400" />

                <h3 className="text-xl font-bold text-white">
                  All Skills
                </h3>
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Explore my complete technical toolkit
              </p>
            </div>

            <span className="self-start rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] text-slate-500 sm:self-auto">
              {filteredSkills.length} skills
            </span>
          </div>

          {/* =================================================
              FILTER TABS
          ================================================= */}

          <div className="relative -mx-1 overflow-x-auto px-1 pb-3 scrollbar-none">
            <div
              role="tablist"
              aria-label="Skill categories"
              className="flex min-w-max items-center gap-2"
            >
              {categories.map((category) => {
                const isActive =
                  activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() =>
                      setActiveCategory(category)
                    }
                    className={`relative shrink-0 overflow-hidden rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                      isActive
                        ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_8px_30px_rgba(34,211,238,0.08)]"
                        : "border-white/10 bg-white/[0.025] text-slate-400 hover:border-cyan-400/20 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="skill-category-indicator"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/[0.08] to-blue-500/[0.04]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative z-10">
                      {category}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* =================================================
            SKILLS GRID
        ================================================= */}

        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.05,
          }}
          className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const levelText =
                getSkillLevel(skill.level);

              const styles = getLevelStyles(
                skill.level
              );

              return (
                <motion.article
                  layout
                  key={skill.name}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{
                    opacity: 0,
                    scale: reducedMotion
                      ? 1
                      : 0.94,
                  }}
                  whileHover={
                    reducedMotion
                      ? undefined
                      : {
                          y: -7,
                        }
                  }
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-4 shadow-xl shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/25 hover:bg-white/[0.045] sm:p-5"
                >
                  {/* Hover line */}

                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Glow */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/[0.07] blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Card */}

                  <div className="relative">
                    {/* Top */}

                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        {/* Icon */}

                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${styles.border} ${styles.bg} text-lg ${styles.text} transition duration-300 group-hover:scale-110`}
                        >
                          {iconMap[skill.name] || (
                            <FaCode />
                          )}
                        </div>

                        {/* Name */}

                        <div className="min-w-0">
                          <h4 className="truncate text-sm font-bold text-white transition-colors group-hover:text-cyan-300">
                            {skill.name}
                          </h4>

                          <p className="mt-1 truncate text-[10px] uppercase tracking-wider text-slate-600">
                            {skill.category}
                          </p>
                        </div>
                      </div>

                      {/* Percentage */}

                      <span
                        className={`shrink-0 text-xs font-black ${styles.text}`}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress */}

                    <div
                      className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/[0.08]"
                      aria-label={`${skill.name} proficiency: ${skill.level}%`}
                    >
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.4,
                        }}
                        transition={{
                          duration: reducedMotion
                            ? 0
                            : 1,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${styles.gradient}`}
                      />
                    </div>

                    {/* Footer */}

                    <div className="mt-4 flex min-w-0 items-center justify-between gap-3">
                      <span
                        className={`shrink-0 text-[9px] font-bold uppercase tracking-[0.16em] ${styles.text}`}
                      >
                        {levelText}
                      </span>

                      <span className="truncate text-right text-[9px] text-slate-600">
                        {getSkillDescription(
                          skill.level
                        )}
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* =================================================
            EMPTY STATE
        ================================================= */}

        {filteredSkills.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] px-5 py-16 text-center backdrop-blur-xl"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-2xl text-cyan-400">
              <FaCode />
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              No skills found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
              There are no technologies in this
              category yet.
            </p>

            <button
              type="button"
              onClick={() =>
                setActiveCategory("All")
              }
              className="mt-6 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            >
              View All Skills
            </button>
          </motion.div>
        )}

        {/* =================================================
            FULL STACK SHOWCASE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: reducedMotion ? 0 : 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: reducedMotion ? 0 : 0.7,
          }}
          className="relative mt-16 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] shadow-2xl shadow-black/10 backdrop-blur-2xl sm:mt-20 sm:rounded-[2rem]"
        >
          {/* Background */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/[0.08] blur-[100px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/[0.06] blur-[100px]"
          />

          {/* Top shine */}

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

          <div className="relative grid lg:grid-cols-2">

            {/* =================================================
                LEFT
            ================================================= */}

            <div className="p-6 sm:p-9 lg:p-12">
              {/* Icon */}

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-400 shadow-lg shadow-cyan-500/10">
                <FaLayerGroup />
              </div>

              <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-400 sm:text-xs">
                Full-Stack Development
              </p>

              <h3 className="mt-3 text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                From frontend{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  to backend.
                </span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                I work across the complete web development
                stack — building responsive React interfaces,
                scalable Node.js APIs, MongoDB data models
                and real-time applications.
              </p>

              {/* Capabilities */}

              <div className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
                {[
                  "Responsive UI",
                  "REST APIs",
                  "Database Design",
                  "Real-time Apps",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.025] px-3 py-3 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/10">
                      <FaCheck className="text-[8px] text-cyan-400" />
                    </span>

                    <span className="text-xs font-medium text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}

              <a
                href="#projects"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 sm:w-auto"
              >
                Explore My Projects

                <FaArrowRight
                  size={11}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* =================================================
                RIGHT
            ================================================= */}

            <div className="border-t border-white/10 p-6 sm:p-9 lg:border-l lg:border-t-0 lg:p-12">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-xs">
                    Development Stack
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                    Technologies used across my projects
                  </p>
                </div>

                <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.05] text-cyan-400/60 sm:flex">
                  <FaCode />
                </div>
              </div>

              {/* Stack */}

              <div className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Redux Toolkit",
                  "Tailwind CSS",
                  "REST APIs",
                  "Socket.io",
                  "Git",
                ].map((technology) => (
                  <div
                    key={technology}
                    className="group flex min-w-0 items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.025] px-3 py-3 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]"
                  >
                    <span className="shrink-0 text-sm text-cyan-400">
                      {iconMap[technology] || (
                        <FaCode />
                      )}
                    </span>

                    <span className="truncate text-xs font-medium text-slate-300 transition group-hover:text-white">
                      {technology}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom stats */}

              <div className="mt-8 grid grid-cols-3 gap-2 border-t border-white/10 pt-7 sm:gap-3">
                <MiniStat
                  value={`${skills.length}+`}
                  label="Skills"
                />

                <MiniStat
                  value={`${categoryCount}`}
                  label="Categories"
                />

                <MiniStat
                  value={`${averageSkill}%`}
                  label="Average"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            DEVELOPMENT PHILOSOPHY
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: reducedMotion ? 0 : 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: reducedMotion ? 0 : 0.65,
          }}
          className="mt-8 grid gap-3 sm:grid-cols-3"
        >
          <PhilosophyCard
            icon={<FaRocket />}
            title="Build"
            description="Turning ideas into practical digital products."
          />

          <PhilosophyCard
            icon={<FaBolt />}
            title="Optimize"
            description="Improving performance, usability and scalability."
          />

          <PhilosophyCard
            icon={<FaStar />}
            title="Improve"
            description="Continuously learning better technologies and patterns."
          />
        </motion.div>

        {/* =================================================
            BOTTOM NOTE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
          className="mt-8 flex items-center justify-center gap-2 text-center"
        >
          <FaCircle className="text-[5px] text-cyan-400/60" />

          <p className="text-[10px] leading-5 text-slate-600 sm:text-xs">
            Technology proficiency represents practical
            experience and current learning progress.
          </p>

          <FaCircle className="text-[5px] text-cyan-400/60" />
        </motion.div>
      </div>
    </section>
  );
};

/* =========================================================
   STAT CARD
========================================================= */

interface StatCardProps {
  value: string;
  label: string;
  icon: ReactNode;
}

const StatCard = ({
  value,
  label,
  icon,
}: StatCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-center shadow-xl shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.045] sm:p-5">
      {/* Glow */}

      <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-cyan-400/10 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 text-sm text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:border-cyan-400/20">
          {icon}
        </div>

        <p className="mt-3 text-xl font-black tracking-tight text-white sm:text-2xl">
          {value}
        </p>

        <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-600 sm:text-[10px] sm:tracking-wider">
          {label}
        </p>
      </div>
    </div>
  );
};

/* =========================================================
   MINI STAT
========================================================= */

interface MiniStatProps {
  value: string;
  label: string;
}

const MiniStat = ({
  value,
  label,
}: MiniStatProps) => {
  return (
    <div className="min-w-0">
      <p className="truncate text-lg font-black tracking-tight text-white sm:text-2xl">
        {value}
      </p>

      <p className="mt-1 truncate text-[9px] font-medium uppercase tracking-wider text-slate-600 sm:text-xs">
        {label}
      </p>
    </div>
  );
};

/* =========================================================
   PHILOSOPHY CARD
========================================================= */

interface PhilosophyCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const PhilosophyCard = ({
  icon,
  title,
  description,
}: PhilosophyCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-4 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04] sm:p-5">
      <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-cyan-400/10 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-400 transition duration-300 group-hover:scale-105">
          {icon}
        </div>

        <div className="min-w-0">
          <h4 className="text-sm font-bold text-white">
            {title}
          </h4>

          <p className="mt-1 text-[10px] leading-5 text-slate-500 sm:text-xs">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;