import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import {
  FaGraduationCap,
  FaCalendarAlt,
  FaUniversity,
  FaAward,
  FaBookOpen,
  FaCheckCircle,
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaLayerGroup,
} from "react-icons/fa";

import { education } from "../../data/education";

/* =========================================================
   TYPES
========================================================= */

interface LearningAreaProps {
  children: string;
}

interface SummaryCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconClass: string;
}

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const createVariants = (
  reducedMotion: boolean
): {
  fadeUp: Variants;
  slideRight: Variants;
  scale: Variants;
} => {
  if (reducedMotion) {
    return {
      fadeUp: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      },

      slideRight: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      },

      scale: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      },
    };
  }

  return {
    fadeUp: {
      hidden: {
        opacity: 0,
        y: 30,
      },

      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.65,
          ease: "easeOut",
        },
      },
    },

    slideRight: {
      hidden: {
        opacity: 0,
        x: 40,
      },

      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.65,
          ease: "easeOut",
        },
      },
    },

    scale: {
      hidden: {
        opacity: 0,
        scale: 0.8,
      },

      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.45,
          ease: "easeOut",
        },
      },
    },
  };
};

/* =========================================================
   LEARNING AREAS
========================================================= */

const learningAreas = [
  {
    label: "Programming",
    icon: <FaCode />,
  },
  {
    label: "Computer Science",
    icon: <FaBookOpen />,
  },
  {
    label: "Software Development",
    icon: <FaLaptopCode />,
  },
];

/* =========================================================
   SUMMARY CARDS
========================================================= */

const summaryCards: SummaryCard[] = [
  {
    title: "Strong Foundation",
    description:
      "Building a strong foundation in programming, databases, computer science and software development.",
    icon: <FaBookOpen />,
    iconClass:
      "bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/15",
  },

  {
    title: "Continuous Learning",
    description:
      "Continuously learning modern technologies and improving practical development and problem-solving skills.",
    icon: <FaGraduationCap />,
    iconClass:
      "bg-blue-400/10 text-blue-400 group-hover:bg-blue-400/15",
  },

  {
    title: "Practical Development",
    description:
      "Applying academic concepts through real-world MERN stack projects and database-driven applications.",
    icon: <FaLayerGroup />,
    iconClass:
      "bg-purple-400/10 text-purple-400 group-hover:bg-purple-400/15",
  },
];

/* =========================================================
   LEARNING AREA COMPONENT
========================================================= */

const LearningArea = ({
  children,
}: LearningAreaProps) => {
  return (
    <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/50 px-3 py-2 text-xs font-medium text-slate-400 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/5 hover:text-cyan-300">
      <FaCheckCircle
        aria-hidden="true"
        className="shrink-0 text-cyan-400"
      />

      {children}
    </span>
  );
};

/* =========================================================
   EDUCATION COMPONENT
========================================================= */

const Education = () => {
  const shouldReduceMotion = useReducedMotion();

  const variants = createVariants(
    Boolean(shouldReduceMotion)
  );

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-20 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-20 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.02] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <motion.header
          variants={variants.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            <FaGraduationCap
              aria-hidden="true"
              size={13}
            />

            Education
          </div>

          <h2
            id="education-heading"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            My Academic{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            My academic journey has helped me build a
            strong foundation in computer applications,
            programming, databases and modern software
            development.
          </p>
        </motion.header>

        {/* ===================================================
            TIMELINE
        =================================================== */}

        <div
          className="relative"
          aria-label="Education timeline"
        >
          {/* Desktop timeline line */}

          <div
            aria-hidden="true"
            className="absolute bottom-10 left-8 top-10 hidden w-px bg-gradient-to-b from-cyan-400 via-blue-500/40 to-transparent lg:block"
          />

          <div className="space-y-8">
            {education.map((item, index) => {
              const isCurrent = index === 0;

              return (
                <motion.article
                  key={`${item.degree}-${item.institution}`}
                  variants={variants.slideRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    delay: shouldReduceMotion
                      ? 0
                      : index * 0.08,
                  }}
                  className="relative lg:pl-20"
                >
                  {/* =========================================
                      TIMELINE NODE
                  ========================================= */}

                  <motion.div
                    variants={variants.scale}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                    }}
                    className="absolute left-0 top-8 hidden lg:flex"
                  >
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 text-cyan-400 shadow-lg shadow-cyan-500/10">
                      <FaGraduationCap
                        aria-hidden="true"
                        size={23}
                      />

                      {!shouldReduceMotion && (
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 animate-ping rounded-full border border-cyan-400/10"
                        />
                      )}
                    </div>
                  </motion.div>

                  {/* =========================================
                      EDUCATION CARD
                  ========================================= */}

                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-8">
                    {/* Card glow */}

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/5 blur-3xl transition duration-500 group-hover:bg-cyan-400/10"
                    />

                    {/* Top content */}

                    <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="min-w-0">
                        {/* Current badge */}

                        {isCurrent && (
                          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs font-semibold text-emerald-400">
                            <span
                              aria-hidden="true"
                              className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"
                            />

                            Currently Pursuing
                          </div>
                        )}

                        {/* Degree */}

                        <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                          {item.degree}
                        </h3>

                        {/* Institution */}

                        <p className="mt-3 flex items-center gap-2 font-medium text-cyan-400">
                          <FaUniversity
                            aria-hidden="true"
                            className="shrink-0"
                          />

                          <span>
                            {item.institution}
                          </span>
                        </p>

                        {/* Duration */}

                        <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                          <FaCalendarAlt
                            aria-hidden="true"
                            className="shrink-0"
                          />

                          <span>{item.duration}</span>
                        </p>
                      </div>

                      {/* Result */}

                      {item.result && (
                        <div className="flex w-fit shrink-0 items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-2.5 text-sm font-semibold text-cyan-300">
                          <FaAward
                            aria-hidden="true"
                          />

                          {item.result}
                        </div>
                      )}
                    </div>

                    {/* Description */}

                    <div className="relative mt-7 border-t border-white/10 pt-6">
                      <p className="max-w-4xl text-sm leading-8 text-slate-400 sm:text-[15px]">
                        {item.description}
                      </p>
                    </div>

                    {/* Learning areas */}

                    <div className="relative mt-6 flex flex-wrap gap-2">
                      {learningAreas.map((area) => (
                        <LearningArea
                          key={area.label}
                        >
                          {area.label}
                        </LearningArea>
                      ))}
                    </div>

                    {/* Bottom accent */}

                    <div
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full"
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            EDUCATION SUMMARY
        =================================================== */}

        <motion.div
          variants={variants.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-10 grid gap-5 md:grid-cols-3"
        >
          {summaryCards.map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              <div
                className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition duration-300 group-hover:scale-105 ${card.iconClass}`}
              >
                {card.icon}
              </div>

              <h4 className="text-lg font-semibold text-white">
                {card.title}
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {card.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ===================================================
            CTA
        =================================================== */}

        <motion.div
          variants={variants.fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.03] via-white/[0.02] to-blue-500/[0.03] p-7 text-center sm:flex-row sm:text-left"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
              Always Learning
            </p>

            <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
              Education is just the beginning.
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Exploring new technologies and turning
              knowledge into practical solutions.
            </p>
          </div>

          <a
            href="#skills"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          >
            Explore My Skills

            <FaArrowRight
              aria-hidden="true"
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;