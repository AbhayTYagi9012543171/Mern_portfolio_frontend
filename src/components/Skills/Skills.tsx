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

  MongoDB: <SiMongodb />,
  Mongoose: <FaDatabase />,

  "Redux Toolkit": <SiRedux />,
  "Tailwind CSS": <SiTailwindcss />,

  "REST API": <FaServer />,
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
   COMPONENT
========================================================= */

const Skills = () => {
  const [activeCategory, setActiveCategory] =
    useState<string>("All");

  const shouldReduceMotion = useReducedMotion();

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

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion
          ? 0
          : 0.06,
      },
    },
  };

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative overflow-hidden bg-slate-950 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 h-[28rem] w-[28rem] rounded-full bg-cyan-500/[0.07] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/2 h-[28rem] w-[28rem] rounded-full bg-blue-500/[0.06] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-purple-500/[0.04] blur-[110px]"
      />

      {/* Subtle grid */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.header
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 30,
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
            duration: shouldReduceMotion ? 0 : 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Eyebrow */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 shadow-lg shadow-cyan-500/[0.03]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
              Technical Skills
            </span>
          </div>

          {/* Heading */}

          <h2
            id="skills-title"
            className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            My{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technology
            </span>{" "}
            Stack
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            A modern full-stack development toolkit focused
            on scalable applications, responsive interfaces,
            clean APIs, database architecture and real-time
            experiences.
          </p>
        </motion.header>

        {/* =================================================
            OVERVIEW STATS
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 20,
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
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: 0.1,
          }}
          className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
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
            y: shouldReduceMotion ? 0 : 25,
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
            duration: shouldReduceMotion ? 0 : 0.6,
          }}
          className="mt-16"
        >
          {/* Section heading */}

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                  <FaBolt />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Core Technologies
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    My strongest and most frequently used
                    technologies
                  </p>
                </div>
              </div>
            </div>

            <span className="text-xs font-medium text-slate-600">
              Top {topSkills.length} technologies
            </span>
          </div>

          {/* Core skills */}

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: shouldReduceMotion
                    ? 0
                    : 0.45,
                  delay: shouldReduceMotion
                    ? 0
                    : index * 0.07,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -5,
                      }
                }
                className="group relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-5 backdrop-blur-xl transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05]"
              >
                {/* Glow */}

                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-2xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/10 text-xl text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:border-cyan-400/30">
                    {iconMap[skill.name] || <FaCode />}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-bold text-white">
                        {skill.name}
                      </p>

                      <span className="text-xs font-bold text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>

                    <p className="mt-1 text-[11px] text-slate-500">
                      {getSkillLevel(skill.level)}
                    </p>
                  </div>
                </div>

                {/* Progress */}

                <div className="relative mt-5 h-1 overflow-hidden rounded-full bg-white/10">
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
                      duration: shouldReduceMotion
                        ? 0
                        : 1,
                      ease: "easeOut",
                      delay: shouldReduceMotion
                        ? 0
                        : index * 0.08,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            FILTER BAR
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
          }}
          className="mt-16"
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white">
                All Skills
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Explore my complete technical toolkit
              </p>
            </div>

            <span className="hidden rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-500 sm:block">
              {filteredSkills.length} skills
            </span>
          </div>

          {/* Scrollable tabs on mobile */}

          <div className="overflow-x-auto pb-2">
            <div
              role="tablist"
              aria-label="Skill categories"
              className="flex min-w-max items-center justify-center gap-2 sm:flex-wrap"
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
                    className={`relative rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                      isActive
                        ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-400 shadow-lg shadow-cyan-500/5"
                        : "border-white/10 bg-white/[0.025] text-slate-400 hover:border-cyan-400/20 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="skill-category-indicator"
                        className="absolute inset-0 -z-0 rounded-xl bg-cyan-400/[0.04]"
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
            amount: 0.08,
          }}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const levelText =
                getSkillLevel(skill.level);

              return (
                <motion.article
                  layout
                  key={skill.name}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{
                    opacity: 0,
                    scale: shouldReduceMotion
                      ? 1
                      : 0.94,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -6,
                        }
                  }
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.045]"
                >
                  {/* Hover gradient */}

                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Glow */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/[0.06] blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative">

                    {/* Top */}

                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        {/* Icon */}

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/10">
                          {iconMap[skill.name] || (
                            <FaCode />
                          )}
                        </div>

                        {/* Name */}

                        <div className="min-w-0">
                          <h4 className="truncate text-sm font-bold text-white">
                            {skill.name}
                          </h4>

                          <p className="mt-1 truncate text-[11px] text-slate-500">
                            {skill.category}
                          </p>
                        </div>
                      </div>

                      {/* Percentage */}

                      <span className="shrink-0 text-xs font-bold text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress */}

                    <div
                      className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10"
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
                          duration: shouldReduceMotion
                            ? 0
                            : 1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-cyan-400 to-blue-500"
                      />
                    </div>

                    {/* Footer */}

                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-slate-600">
                        {levelText}
                      </span>

                      <span className="text-[10px] text-slate-600">
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
            className="mt-8 rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-16 text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-400">
              <FaCode />
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">
              No skills found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              There are no technologies in this category
              yet.
            </p>

            <button
              type="button"
              onClick={() =>
                setActiveCategory("All")
              }
              className="mt-6 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
            >
              View All Skills
            </button>
          </motion.div>
        )}

        {/* =================================================
            FULL-STACK SUMMARY
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 30,
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
            duration: shouldReduceMotion ? 0 : 0.7,
          }}
          className="relative mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] backdrop-blur-xl"
        >
          {/* Background glow */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-500/[0.08] blur-3xl"
          />

          <div className="relative grid lg:grid-cols-2">

            {/* =================================================
                LEFT
            ================================================= */}

            <div className="p-7 sm:p-10 lg:p-12">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-400">
                <FaLayerGroup />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Full-Stack Development
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                From frontend{" "}
                <span className="text-cyan-400">
                  to backend.
                </span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-8 text-slate-400 sm:text-base">
                I work across the complete web development
                stack — building responsive React interfaces,
                scalable Node.js APIs, MongoDB data models
                and real-time applications.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  "Responsive UI",
                  "REST APIs",
                  "Database Design",
                  "Real-time Apps",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3 py-3"
                  >
                    <FaCheck className="shrink-0 text-xs text-cyan-400" />

                    <span className="text-xs font-medium text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#projects"
                className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                Explore My Projects

                <FaArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* =================================================
                RIGHT
            ================================================= */}

            <div className="border-t border-white/10 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Development Stack
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    Technologies used across my projects
                  </p>
                </div>

                <FaCode className="text-cyan-400/50" />
              </div>

              {/* Stack */}

              <div className="mt-7 grid grid-cols-2 gap-3">
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
                    className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3 py-3 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]"
                  >
                    <span className="text-sm text-cyan-400">
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

              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-7">
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
            BOTTOM NOTE
        ================================================= */}

        <motion.p
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
            delay: 0.2,
          }}
          className="mt-8 text-center text-xs text-slate-600"
        >
          Technology proficiency represents practical
          experience and current learning progress.
        </motion.p>
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
    <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04] sm:p-5">
      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-sm text-cyan-400 transition group-hover:scale-110">
        {icon}
      </div>

      <p className="mt-3 text-xl font-black text-white sm:text-2xl">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-600 sm:text-xs">
        {label}
      </p>
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
    <div>
      <p className="text-xl font-black text-white sm:text-2xl">
        {value}
      </p>

      <p className="mt-1 text-[10px] uppercase tracking-wider text-slate-600 sm:text-xs">
        {label}
      </p>
    </div>
  );
};

export default Skills;