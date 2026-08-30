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
  FaStar,
  FaLayerGroup,
  FaLightbulb,
} from "react-icons/fa";

import { education } from "../../data/education";

/* =========================================================
   TYPES
========================================================= */

interface EducationTopic {
  icon: typeof FaCode;
  title: string;
  description: string;
}

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
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
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/* =========================================================
   LEARNING AREAS
========================================================= */

const educationTopics: EducationTopic[] = [
  {
    icon: FaCode,
    title: "Programming",
    description:
      "Strong understanding of programming fundamentals, logical thinking, problem solving and software development concepts.",
  },
  {
    icon: FaDatabase,
    title: "Databases",
    description:
      "Practical knowledge of database systems, data modeling, CRUD operations and MongoDB-based applications.",
  },
  {
    icon: FaLaptopCode,
    title: "Software Development",
    description:
      "Applying academic knowledge to real-world applications using modern web development technologies.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

const Education = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative isolate overflow-hidden bg-slate-950 px-5 py-24 sm:px-6 sm:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Main glow */}

        <div className="absolute left-1/2 top-[-180px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/[0.055] blur-[130px]" />

        {/* Left glow */}

        <div className="absolute -left-[280px] top-[35%] h-[600px] w-[600px] rounded-full bg-blue-500/[0.045] blur-[130px]" />

        {/* Right glow */}

        <div className="absolute -right-[280px] bottom-[5%] h-[600px] w-[600px] rounded-full bg-purple-500/[0.045] blur-[130px]" />

        {/* Radial highlight */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.045),transparent_32%)]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.header
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          {/* Label */}

          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.055] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-400 shadow-lg shadow-cyan-500/[0.03]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            <FaGraduationCap />

            Education
          </motion.div>

          {/* Heading */}

          <h2
            id="education-heading"
            className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            My Academic{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Building a strong technical foundation through education,
            continuous learning and practical software development.
          </p>

          {/* Decorative line */}

          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400/50" />

            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

            <span className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400/50" />
          </div>
        </motion.header>

        {/* =====================================================
            EDUCATION SUMMARY
        ====================================================== */}

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mb-14 grid gap-4 sm:grid-cols-3"
        >
          {/* Card 1 */}

          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -4,
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl transition duration-300 hover:border-cyan-400/20"
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/[0.06] blur-2xl transition group-hover:bg-cyan-400/[0.12]" />

            <div className="relative flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.07] text-cyan-400">
                <FaGraduationCap />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Education
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  Academic Growth
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}

          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -4,
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl transition duration-300 hover:border-blue-400/20"
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-400/[0.06] blur-2xl transition group-hover:bg-blue-400/[0.12]" />

            <div className="relative flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.07] text-blue-400">
                <FaBookOpen />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Focus
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  Computer Science
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}

          <motion.div
            variants={fadeUp}
            whileHover={{
              y: -4,
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl transition duration-300 hover:border-purple-400/20"
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-purple-400/[0.06] blur-2xl transition group-hover:bg-purple-400/[0.12]" />

            <div className="relative flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/15 bg-purple-400/[0.07] text-purple-400">
                <FaLayerGroup />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-slate-500">
                  Approach
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  Learn by Building
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* =====================================================
            TIMELINE
        ====================================================== */}

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="relative"
        >
          {/* Timeline vertical line */}

          <div
            aria-hidden="true"
            className="absolute bottom-20 left-[31px] top-20 hidden w-px bg-gradient-to-b from-cyan-400/70 via-blue-500/30 via-70% to-transparent lg:block"
          />

          {/* Timeline glow */}

          <div
            aria-hidden="true"
            className="absolute left-[28px] top-24 hidden h-32 w-[7px] rounded-full bg-cyan-400/20 blur-md lg:block"
          />

          <div className="space-y-9">
            {education.map((item, index) => (
              <motion.article
                key={`${item.degree}-${item.institution}`}
                variants={index % 2 === 0 ? slideRight : slideLeft}
                className="relative lg:pl-24"
              >
                {/* =================================================
                    TIMELINE NODE
                ================================================== */}

                <motion.div
                  variants={nodeVariants}
                  className="absolute left-0 top-10 z-20 hidden lg:flex"
                >
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 shadow-xl shadow-cyan-500/10">
                    {/* Outer pulse */}

                    <span className="absolute inset-[-5px] rounded-full border border-cyan-400/10" />

                    {/* Inner circle */}

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/10 text-cyan-400">
                      <FaGraduationCap size={21} />
                    </div>
                  </div>
                </motion.div>

                {/* =================================================
                    MOBILE INDEX
                ================================================== */}

                <div className="mb-3 flex items-center gap-3 lg:hidden">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] text-xs font-bold text-cyan-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px flex-1 bg-gradient-to-r from-cyan-400/20 to-transparent" />
                </div>

                {/* =================================================
                    CARD
                ================================================== */}

                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.025] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl transition duration-500 hover:border-cyan-400/25 hover:bg-white/[0.045] sm:p-8 lg:p-9"
                >
                  {/* Top gradient */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-50 transition duration-500 group-hover:opacity-100"
                  />

                  {/* Glow */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/[0.035] blur-3xl transition duration-700 group-hover:bg-cyan-400/[0.09]"
                  />

                  {/* Bottom glow */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-blue-500/[0.025] blur-3xl transition duration-700 group-hover:bg-blue-500/[0.07]"
                  />

                  <div className="relative">

                    {/* =================================================
                        HEADER ROW
                    ================================================== */}

                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                      <div className="min-w-0 flex-1">

                        {/* Current Status */}

                        {index === 0 && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              scale: 0.95,
                            }}
                            whileInView={{
                              opacity: 1,
                              scale: 1,
                            }}
                            viewport={{
                              once: true,
                            }}
                            className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3.5 py-1.5 text-xs font-bold text-emerald-400"
                          >
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                            </span>

                            Currently Pursuing
                          </motion.div>
                        )}

                        {/* Degree */}

                        <div className="flex items-start gap-4">
                          <div className="mt-1 hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.06] text-cyan-400 sm:flex">
                            <FaGraduationCap />
                          </div>

                          <div>
                            <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
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
                        </div>
                      </div>

                      {/* =================================================
                          RESULT
                      ================================================== */}

                      {item.result && (
                        <motion.div
                          whileHover={{
                            scale: 1.04,
                          }}
                          className="flex w-fit shrink-0 items-center gap-2 rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/[0.08] to-blue-500/[0.06] px-4 py-3 text-sm font-bold text-cyan-300 shadow-lg shadow-cyan-500/[0.04]"
                        >
                          <FaAward />

                          <span>{item.result}</span>
                        </motion.div>
                      )}
                    </div>

                    {/* =================================================
                        DIVIDER
                    ================================================== */}

                    <div className="my-7 h-px bg-gradient-to-r from-cyan-400/10 via-white/[0.08] to-transparent" />

                    {/* =================================================
                        DESCRIPTION
                    ================================================== */}

                    <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-start">

                      <div>
                        <div className="mb-3 flex items-center gap-2">
                          <FaLightbulb className="text-sm text-cyan-400" />

                          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                            Academic Experience
                          </span>
                        </div>

                        <p className="max-w-4xl text-sm leading-8 text-slate-400 sm:text-[15px]">
                          {item.description}
                        </p>
                      </div>

                      {/* Index */}

                      <div className="hidden select-none lg:block">
                        <span className="text-7xl font-black leading-none text-white/[0.025]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* =================================================
                        SKILL TAGS
                    ================================================== */}

                    <div className="mt-7 flex flex-wrap gap-2.5">
                      {[
                        "Programming",
                        "Computer Science",
                        "Software Development",
                      ].map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{
                            y: -2,
                          }}
                          className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-slate-950/60 px-3.5 py-2 text-xs font-medium text-slate-400 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04] hover:text-cyan-400"
                        >
                          <FaCheckCircle className="text-[10px] text-cyan-400" />

                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom line */}

                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-700 group-hover:w-3/4"
                  />
                </motion.div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            LEARNING AREAS HEADER
        ====================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mb-8 mt-24"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Core Focus Areas
              </p>

              <h3 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                What I'm{" "}
                <span className="text-slate-500">
                  Learning
                </span>
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500 sm:text-right">
              Turning academic concepts into practical development
              skills through consistent experimentation and projects.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            LEARNING AREAS
        ====================================================== */}

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="grid gap-5 md:grid-cols-3"
        >
          {educationTopics.map((topic, index) => {
            const Icon = topic.icon;

            return (
              <motion.div
                key={topic.title}
                variants={fadeUp}
                whileHover={{
                  y: -7,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl transition duration-500 hover:border-cyan-400/25 hover:bg-white/[0.045]"
              >
                {/* Number */}

                <span className="absolute right-6 top-5 text-5xl font-black text-white/[0.025]">
                  0{index + 1}
                </span>

                {/* Glow */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-400/[0.035] blur-3xl transition duration-500 group-hover:bg-cyan-400/[0.1]"
                />

                {/* Icon */}

                <div className="relative mb-6 flex h-13 w-13 h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.12] to-blue-500/[0.05] text-cyan-400 shadow-lg shadow-cyan-500/[0.04] transition duration-500 group-hover:scale-110 group-hover:border-cyan-400/25">
                  <Icon size={19} />
                </div>

                {/* Content */}

                <h4 className="relative text-xl font-bold text-white">
                  {topic.title}
                </h4>

                <p className="relative mt-3 text-sm leading-7 text-slate-500">
                  {topic.description}
                </p>

                {/* Bottom arrow */}

                <div className="relative mt-6 flex items-center gap-2 text-xs font-semibold text-slate-600 transition duration-300 group-hover:text-cyan-400">
                  <span>Continuous improvement</span>

                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                {/* Bottom glow */}

                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-500 group-hover:w-2/3"
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* =====================================================
            LEARNING PHILOSOPHY
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
          className="relative mt-10 overflow-hidden rounded-[30px] border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.055] via-blue-500/[0.025] to-purple-500/[0.055] p-7 sm:p-9"
        >
          {/* Background */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[-100px] h-64 w-96 -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-3xl"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Text */}

            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                <FaStar />

                Learning Philosophy
              </div>

              <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Learn. Build. Improve. Repeat.
              </h3>

              <p className="mt-4 text-sm leading-8 text-slate-400">
                I believe education becomes valuable when knowledge is
                converted into practical experience. Every project,
                challenge and new technology is an opportunity to
                strengthen my skills and become a better developer.
              </p>
            </div>

            {/* CTA */}

            <a
              href="#skills"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08] hover:text-cyan-400"
            >
              Explore My Skills

              <FaArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

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
            delay: 0.15,
          }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-5 py-3 text-xs font-medium text-slate-600">
            <span>Academic Knowledge</span>

            <span className="text-cyan-400">+</span>

            <span>Practical Development</span>

            <span className="text-cyan-400">+</span>

            <span>Continuous Learning</span>

            <span className="text-cyan-400">=</span>

            <span className="font-semibold text-slate-400">
              Growth
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;