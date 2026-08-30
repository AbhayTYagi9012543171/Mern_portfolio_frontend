import { motion, type Variants } from "framer-motion";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaUniversity,
  FaAward,
  FaBookOpen,
  FaCheckCircle,
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaLaptopCode,
} from "react-icons/fa";

import { education } from "../../data/education";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const nodeVariants: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const educationTopics = [
  {
    icon: FaCode,
    title: "Programming",
    description:
      "Strong understanding of programming fundamentals, problem solving and software development concepts.",
  },
  {
    icon: FaDatabase,
    title: "Databases",
    description:
      "Practical experience with database concepts, data modeling and MongoDB-based applications.",
  },
  {
    icon: FaLaptopCode,
    title: "Software Development",
    description:
      "Applying academic concepts to real-world applications using modern development technologies.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative isolate overflow-hidden bg-slate-950 px-6 py-24 sm:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.04] blur-3xl" />

        <div className="absolute -left-48 top-1/3 h-[450px] w-[450px] rounded-full bg-blue-500/[0.05] blur-3xl" />

        <div className="absolute -right-48 bottom-0 h-[450px] w-[450px] rounded-full bg-purple-500/[0.05] blur-3xl" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.04),transparent_35%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =========================================================
            HEADER
        ========================================================== */}

        <motion.header
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          {/* Section Label */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 shadow-lg shadow-cyan-500/[0.03]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            <FaGraduationCap />

            Education
          </div>

          {/* Heading */}

          <h2
            id="education-heading"
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            My Academic{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            A continuous journey of learning, building and applying
            computer science concepts to real-world software development.
          </p>
        </motion.header>

        {/* =========================================================
            EDUCATION TIMELINE
        ========================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="relative"
        >
          {/* Desktop Timeline Line */}

          <div
            aria-hidden="true"
            className="absolute bottom-16 left-[31px] top-16 hidden w-px bg-gradient-to-b from-cyan-400/70 via-blue-500/30 to-transparent lg:block"
          />

          {/* Timeline Items */}

          <div className="space-y-8 lg:space-y-10">
            {education.map((item, index) => (
              <motion.article
                key={`${item.degree}-${item.institution}`}
                variants={cardVariants}
                className="relative lg:pl-24"
              >
                {/* =================================================
                    TIMELINE NODE
                ================================================== */}

                <motion.div
                  variants={nodeVariants}
                  className="absolute left-0 top-9 z-10 hidden lg:flex"
                >
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 shadow-xl shadow-cyan-500/10">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-400">
                      <FaGraduationCap size={21} />
                    </div>

                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full border border-cyan-400/10"
                    />
                  </div>
                </motion.div>

                {/* =================================================
                    CARD
                ================================================== */}

                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:border-cyan-400/25 hover:bg-white/[0.045] sm:p-9"
                >
                  {/* Card Glow */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full bg-cyan-400/[0.04] blur-3xl transition duration-500 group-hover:bg-cyan-400/[0.09]"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-500 group-hover:w-full"
                  />

                  <div className="relative">

                    {/* =================================================
                        TOP SECTION
                    ================================================== */}

                    <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">

                      {/* Left */}

                      <div className="min-w-0">

                        {/* Status */}

                        {index === 0 && (
                          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-xs font-semibold text-emerald-400">
                            <span className="relative flex h-2 w-2">
                              <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                            </span>

                            Currently Pursuing
                          </div>
                        )}

                        {/* Degree */}

                        <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                          {item.degree}
                        </h3>

                        {/* Institution */}

                        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                          <span className="flex items-center gap-2 text-sm font-semibold text-cyan-400 sm:text-base">
                            <FaUniversity />

                            {item.institution}
                          </span>
                        </div>

                        {/* Duration */}

                        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                          <FaCalendarAlt />

                          <span>{item.duration}</span>
                        </div>
                      </div>

                      {/* =================================================
                          RESULT
                      ================================================== */}

                      {item.result && (
                        <div className="flex w-fit shrink-0 items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2.5 text-sm font-semibold text-cyan-300">
                          <FaAward />

                          {item.result}
                        </div>
                      )}
                    </div>

                    {/* =================================================
                        DIVIDER
                    ================================================== */}

                    <div className="my-7 h-px bg-gradient-to-r from-white/10 via-white/[0.06] to-transparent" />

                    {/* =================================================
                        DESCRIPTION
                    ================================================== */}

                    <p className="max-w-4xl text-sm leading-8 text-slate-400 sm:text-[15px]">
                      {item.description}
                    </p>

                    {/* =================================================
                        SKILL TAGS
                    ================================================== */}

                    <div className="mt-7 flex flex-wrap gap-2.5">
                      {[
                        "Programming",
                        "Computer Science",
                        "Software Development",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-slate-950/60 px-3 py-2 text-xs font-medium text-slate-400 transition hover:border-cyan-400/20 hover:text-cyan-400"
                        >
                          <FaCheckCircle className="text-cyan-400" />

                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* =========================================================
            LEARNING AREAS
        ========================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-12 grid gap-5 md:grid-cols-3"
        >
          {educationTopics.map((topic) => {
            const Icon = topic.icon;

            return (
              <motion.div
                key={topic.title}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl transition duration-300 hover:border-cyan-400/25 hover:bg-white/[0.045]"
              >
                {/* Glow */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/[0.04] blur-2xl transition group-hover:bg-cyan-400/[0.08]"
                />

                {/* Icon */}

                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.07] text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:border-cyan-400/20">
                  <Icon size={18} />
                </div>

                {/* Content */}

                <h4 className="relative text-lg font-bold text-white">
                  {topic.title}
                </h4>

                <p className="relative mt-3 text-sm leading-7 text-slate-500">
                  {topic.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* =========================================================
            LEARNING PHILOSOPHY
        ========================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.65,
            ease: "easeOut",
          }}
          className="relative mt-12 overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.04] via-blue-500/[0.025] to-purple-500/[0.04] p-7 sm:p-9"
        >
          {/* Decorative Glow */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-3xl"
          />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Learning Philosophy
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Learn. Build. Improve. Repeat.
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                I believe education becomes valuable when knowledge is
                converted into practical experience. Every project gives me
                an opportunity to strengthen my skills and learn something new.
              </p>
            </div>

            {/* CTA */}

            <a
              href="#skills"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08] hover:text-cyan-400"
            >
              Explore My Skills

              <FaArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================== */}

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
            duration: 0.7,
            delay: 0.1,
          }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-slate-600">
            Academic knowledge{" "}
            <span className="mx-2 text-cyan-400">+</span>{" "}
            Practical development{" "}
            <span className="mx-2 text-cyan-400">+</span>{" "}
            Continuous learning
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;