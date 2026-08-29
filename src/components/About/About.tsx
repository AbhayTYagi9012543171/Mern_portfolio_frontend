import {
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaGraduationCap,
  FaLaptopCode,
  FaLightbulb,
  FaRocket,
  FaServer,
  FaReact,
  FaLayerGroup,
  FaChevronRight,
} from "react-icons/fa";

import {
  SiAxios,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

/* =========================================================
   TYPES
========================================================= */

interface Highlight {
  icon: ReactNode;
  title: string;
  description: string;
  metric: string;
}

interface Technology {
  name: string;
  icon: ReactNode;
}

interface Stat {
  value: string;
  label: string;
  description: string;
}

/* =========================================================
   DATA
========================================================= */

const highlights: Highlight[] = [
  {
    icon: <FaCode />,
    title: "Clean Architecture",
    description:
      "Structured, reusable and maintainable code designed around scalable application architecture.",
    metric: "Maintainable",
  },
  {
    icon: <FaLaptopCode />,
    title: "Full-Stack Development",
    description:
      "Frontend, backend, APIs and databases working together as one complete product.",
    metric: "End-to-End",
  },
  {
    icon: <FaLightbulb />,
    title: "Problem Solving",
    description:
      "Breaking complex requirements into practical, reliable and user-focused solutions.",
    metric: "Solution First",
  },
  {
    icon: <FaRocket />,
    title: "Performance",
    description:
      "Responsive interfaces, efficient APIs and optimized experiences across devices.",
    metric: "Performance",
  },
];

const technologies: Technology[] = [
  {
    name: "React.js",
    icon: <FaReact />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Axios",
    icon: <SiAxios />,
  },
  {
    name: "Socket.io",
    icon: <SiSocketdotio />,
  },
  {
    name: "Git",
    icon: <SiGit />,
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
  },
];

const stats: Stat[] = [
  {
    value: "10+",
    label: "Technologies",
    description: "Modern development tools",
  },
  {
    value: "5+",
    label: "Projects",
    description: "Practical applications",
  },
  {
    value: "MERN",
    label: "Primary Stack",
    description: "Full-stack ecosystem",
  },
  {
    value: "100%",
    label: "Learning",
    description: "Continuous improvement",
  },
];

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
   COMPONENT
========================================================= */

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const [activeTechnology, setActiveTechnology] =
    useState<string | null>(null);

  const visibleTechnologies = useMemo(
    () => technologies,
    []
  );

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-slate-950 px-6 py-24 sm:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Grid */}

        <div
          className="
            absolute inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        {/* Cyan glow */}

        <div
          className="
            absolute
            -left-48
            top-1/4
            h-[500px]
            w-[500px]
            rounded-full
            bg-cyan-500/[0.07]
            blur-[120px]
          "
        />

        {/* Blue glow */}

        <div
          className="
            absolute
            -right-48
            bottom-1/4
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-500/[0.06]
            blur-[120px]
          "
        />

        {/* Center glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/[0.025]
            blur-[100px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <motion.header
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={containerVariants}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Badge */}

          <motion.div
            variants={itemVariants}
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/[0.06]
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.22em]
              text-cyan-400
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            About Me
          </motion.div>

          {/* Heading */}

          <motion.h2
            id="about-heading"
            variants={itemVariants}
            className="
              text-4xl
              font-black
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Building Ideas Into{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                via-sky-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              Digital Products
            </span>
          </motion.h2>

          {/* Description */}

          <motion.p
            variants={itemVariants}
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-slate-400
              sm:text-lg
            "
          >
            I&apos;m a MERN Stack Developer focused on
            building modern, responsive and scalable web
            applications that combine clean engineering
            with practical user experiences.
          </motion.p>
        </motion.header>

        {/* ===================================================
            MAIN PROFILE AREA
        =================================================== */}

        <div className="grid gap-8 lg:grid-cols-5">

          {/* =================================================
              PROFILE CARD
          ================================================= */}

          <motion.article
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="lg:col-span-2"
          >
            <div
              className="
                group
                relative
                h-full
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-white/[0.035]
                p-7
                shadow-2xl
                shadow-black/20
                backdrop-blur-2xl
                sm:p-9
              "
            >
              {/* Card glow */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-64
                  w-64
                  rounded-full
                  bg-cyan-400/[0.08]
                  blur-3xl
                  transition
                  duration-700
                  group-hover:bg-cyan-400/[0.13]
                "
              />

              {/* Top accent */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  left-0
                  right-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-400/50
                  to-transparent
                "
              />

              {/* Profile */}

              <div className="relative flex items-center gap-5">

                <div
                  className="
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-cyan-400/20
                    bg-cyan-400/10
                    text-cyan-400
                    shadow-lg
                    shadow-cyan-500/10
                    transition
                    duration-500
                    group-hover:scale-105
                    group-hover:rotate-2
                  "
                >
                  <FaLaptopCode size={28} />
                </div>

                <div>
                  <p
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-slate-500
                    "
                  >
                    MERN Stack Developer
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-white">
                    Abhay Tyagi
                  </h3>
                </div>
              </div>

              {/* Divider */}

              <div className="my-7 h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

              {/* Description */}

              <div className="relative space-y-5 text-[15px] leading-8 text-slate-400">

                <p>
                  I enjoy transforming ideas into functional,
                  scalable and user-friendly digital
                  experiences.
                </p>

                <p>
                  My development work spans React,
                  TypeScript, JavaScript, Node.js,
                  Express.js and MongoDB, supported by
                  Redux Toolkit, Axios and Socket.io.
                </p>

                <p>
                  I particularly enjoy building dashboards,
                  REST APIs, authentication systems,
                  real-time applications and
                  database-driven platforms.
                </p>
              </div>

              {/* Education */}

              <div
                className="
                  relative
                  mt-8
                  overflow-hidden
                  rounded-2xl
                  border
                  border-cyan-400/10
                  bg-cyan-400/[0.045]
                  p-4
                  transition
                  duration-300
                  hover:border-cyan-400/20
                "
              >
                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-cyan-400/10
                      text-cyan-400
                    "
                  >
                    <FaGraduationCap size={20} />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-slate-500
                      "
                    >
                      Currently Pursuing
                    </p>

                    <p className="mt-1 truncate font-semibold text-white">
                      Master of Computer Applications
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Software Development & Computer Applications
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}

              <a
                href="#contact"
                className="
                  group/cta
                  relative
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-cyan-400
                  transition
                  hover:text-cyan-300
                "
              >
                Let&apos;s work together

                <FaArrowRight
                  size={13}
                  className="
                    transition-transform
                    duration-300
                    group-hover/cta:translate-x-1
                  "
                />
              </a>
            </div>
          </motion.article>

          {/* =================================================
              HIGHLIGHTS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="lg:col-span-3"
          >
            <div className="grid h-full gap-4 sm:grid-cols-2">

              {highlights.map((item, index) => (
                <motion.article
                  key={item.title}
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
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: shouldReduceMotion
                      ? 0
                      : index * 0.08,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -6,
                        }
                  }
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-6
                    backdrop-blur-xl
                    transition
                    duration-300
                    hover:border-cyan-400/25
                    hover:bg-white/[0.045]
                  "
                >
                  {/* Hover glow */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      bg-cyan-400/[0.06]
                      blur-2xl
                      opacity-0
                      transition
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* Top */}

                  <div className="relative flex items-center justify-between">

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-cyan-400/10
                        bg-cyan-400/10
                        text-cyan-400
                        transition
                        duration-300
                        group-hover:scale-110
                        group-hover:border-cyan-400/20
                      "
                    >
                      {item.icon}
                    </div>

                    <span
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.03]
                        px-2.5
                        py-1
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-wider
                        text-slate-500
                        transition
                        group-hover:border-cyan-400/20
                        group-hover:text-cyan-400
                      "
                    >
                      {item.metric}
                    </span>
                  </div>

                  {/* Content */}

                  <h3 className="relative mt-6 text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                  {/* Bottom */}

                  <div className="relative mt-6 flex items-center justify-between border-t border-white/10 pt-4">

                    <span className="text-[11px] uppercase tracking-wider text-slate-600">
                      Capability
                    </span>

                    <FaCheckCircle
                      size={14}
                      className="
                        text-slate-700
                        transition
                        duration-300
                        group-hover:text-cyan-400
                      "
                    />
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            STATS
        =================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-8
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
          "
        >
          <div className="grid grid-cols-2 md:grid-cols-4">

            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        backgroundColor:
                          "rgba(255,255,255,0.025)",
                      }
                }
                className={`
                  group
                  relative
                  p-6
                  text-center
                  transition
                  sm:p-7
                  ${
                    index !== stats.length - 1
                      ? "border-b border-white/10 md:border-b-0 md:border-r"
                      : ""
                  }
                  ${
                    index === 1
                      ? "border-r border-white/10 md:border-r"
                      : ""
                  }
                `}
              >
                <p
                  className="
                    text-2xl
                    font-black
                    tracking-tight
                    text-cyan-400
                    sm:text-3xl
                  "
                >
                  {stat.value}
                </p>

                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white">
                  {stat.label}
                </p>

                <p className="mt-1 text-[11px] text-slate-600">
                  {stat.description}
                </p>

                {/* Indicator */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-px
                    w-0
                    -translate-x-1/2
                    bg-cyan-400
                    transition-all
                    duration-500
                    group-hover:w-12
                  "
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ===================================================
            TECHNOLOGY TOOLKIT
        =================================================== */}

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
            duration: 0.7,
          }}
          className="
            relative
            mt-8
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-white/[0.03]
            p-7
            backdrop-blur-xl
            sm:p-9
          "
        >
          {/* Decorative glow */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-56
              w-56
              rounded-full
              bg-blue-500/[0.05]
              blur-3xl
            "
          />

          {/* Header */}

          <div className="relative flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div>
              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-cyan-400/10
                    text-cyan-400
                  "
                >
                  <FaLayerGroup />
                </div>

                <div>
                  <p
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.22em]
                      text-cyan-400
                    "
                  >
                    My Toolkit
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-white">
                    Technologies I Work With
                  </h3>
                </div>
              </div>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                A practical stack for building responsive
                interfaces, scalable APIs, database-driven
                applications and real-time experiences.
              </p>
            </div>

            {/* Stack indicator */}

            <div
              className="
                hidden
                items-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                px-4
                py-3
                md:flex
              "
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

              <span className="text-xs text-slate-400">
                Full-Stack Toolkit
              </span>
            </div>
          </div>

          {/* Technology Grid */}

          <div className="relative mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {visibleTechnologies.map(
              (technology, index) => {
                const isActive =
                  activeTechnology ===
                  technology.name;

                return (
                  <motion.button
                    key={technology.name}
                    type="button"
                    initial={{
                      opacity: 0,
                      y: shouldReduceMotion
                        ? 0
                        : 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: shouldReduceMotion
                        ? 0
                        : index * 0.035,
                    }}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : {
                            y: -3,
                          }
                    }
                    onMouseEnter={() =>
                      setActiveTechnology(
                        technology.name
                      )
                    }
                    onMouseLeave={() =>
                      setActiveTechnology(null)
                    }
                    onFocus={() =>
                      setActiveTechnology(
                        technology.name
                      )
                    }
                    onBlur={() =>
                      setActiveTechnology(null)
                    }
                    className={`
                      group
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      px-4
                      py-3
                      text-left
                      transition
                      duration-300
                      ${
                        isActive
                          ? "border-cyan-400/30 bg-cyan-400/[0.07]"
                          : "border-white/10 bg-slate-950/40 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]"
                      }
                    `}
                  >
                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        text-lg
                        transition
                        duration-300
                        ${
                          isActive
                            ? "bg-cyan-400/15 text-cyan-400"
                            : "bg-white/[0.04] text-slate-400 group-hover:text-cyan-400"
                        }
                      `}
                    >
                      {technology.icon}
                    </span>

                    <span
                      className={`
                        min-w-0
                        flex-1
                        truncate
                        text-xs
                        font-semibold
                        transition
                        ${
                          isActive
                            ? "text-cyan-300"
                            : "text-slate-300 group-hover:text-white"
                        }
                      `}
                    >
                      {technology.name}
                    </span>

                    <FaChevronRight
                      size={9}
                      className="
                        shrink-0
                        text-slate-700
                        transition
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:text-cyan-400
                      "
                    />
                  </motion.button>
                );
              }
            )}
          </div>

          {/* Bottom CTA */}

          <div
            className="
              relative
              mt-8
              flex
              flex-col
              gap-4
              border-t
              border-white/10
              pt-6
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  bg-cyan-400/10
                  text-cyan-400
                "
              >
                <FaDatabase size={14} />
              </div>

              <p className="text-xs leading-5 text-slate-500">
                From UI development to backend systems and
                databases.
              </p>
            </div>

            <a
              href="#projects"
              className="
                group/projects
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-cyan-400
                transition
                hover:text-cyan-300
              "
            >
              Explore my projects

              <FaArrowRight
                size={12}
                className="
                  transition-transform
                  duration-300
                  group-hover/projects:translate-x-1
                "
              />
            </a>
          </div>
        </motion.div>

        {/* ===================================================
            BOTTOM CAPABILITY STRIP
        =================================================== */}

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
            duration: 0.8,
          }}
          className="
            mt-8
            flex
            flex-col
            items-center
            justify-center
            gap-3
            text-center
            sm:flex-row
          "
        >
          <span className="flex items-center gap-2 text-xs text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

            Building with modern technologies
          </span>

          <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:block" />

          <span className="text-xs text-slate-600">
            Focused on quality, performance & scalability
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default About;