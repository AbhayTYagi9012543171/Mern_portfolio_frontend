import { motion, type Variants } from "framer-motion";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaCircle,
  FaArrowDown,
  FaRocket,
  FaCode,
  FaLayerGroup,
  FaStar,
} from "react-icons/fa";

import { experience } from "../../data/experience";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
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
    y: 55,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const nodeVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -45,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "backOut",
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative isolate overflow-hidden bg-slate-950 px-5 py-24 sm:px-6 sm:py-32"
    >
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Main ambient glows */}

        <div className="absolute left-[-15rem] top-[8%] h-[34rem] w-[34rem] rounded-full bg-cyan-500/[0.055] blur-[140px]" />

        <div className="absolute right-[-15rem] top-[38%] h-[34rem] w-[34rem] rounded-full bg-blue-500/[0.055] blur-[140px]" />

        <div className="absolute bottom-[-12rem] left-[30%] h-[30rem] w-[30rem] rounded-full bg-purple-500/[0.045] blur-[140px]" />

        {/* Center glow */}

        <div className="absolute left-1/2 top-0 h-[28rem] w-[45rem] -translate-x-1/2 rounded-full bg-cyan-400/[0.025] blur-[100px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Radial fade */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.055),transparent_35%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.header
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          {/* Badge */}

          <motion.div
            whileHover={{
              y: -2,
              scale: 1.02,
            }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/20 bg-cyan-400/[0.055] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-cyan-400 shadow-lg shadow-cyan-500/[0.04] backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            <FaBriefcase size={11} />

            Professional Experience
          </motion.div>

          {/* Heading */}

          <h2
            id="experience-heading"
            className="text-4xl font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-7xl"
          >
            My Professional{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Building experience through internships, practical development,
            collaborative problem-solving and real-world full-stack
            applications.
          </p>

          {/* Decorative divider */}

          <div className="mx-auto mt-9 flex max-w-xs items-center justify-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400/40" />

            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

            <span className="h-px w-16 bg-cyan-400/25" />

            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />

            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-400/40" />
          </div>
        </motion.header>

        {/* =====================================================
            EXPERIENCE TIMELINE
        ====================================================== */}

        <div className="relative">
          {/* Desktop timeline rail */}

          <div
            aria-hidden="true"
            className="absolute bottom-16 left-[31px] top-8 hidden w-px bg-gradient-to-b from-cyan-400/70 via-blue-500/35 to-purple-500/10 md:block"
          />

          {/* Timeline rail glow */}

          <div
            aria-hidden="true"
            className="absolute left-[29px] top-10 hidden h-32 w-[5px] rounded-full bg-cyan-400/20 blur-md md:block"
          />

          {/* Timeline */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.05,
            }}
            className="space-y-10 md:space-y-12"
          >
            {experience.map((item, index) => (
              <motion.article
                key={`${item.role}-${item.company}-${index}`}
                variants={cardVariants}
                className="group relative md:pl-20"
              >
                {/* =================================================
                    TIMELINE NODE
                ================================================== */}

                <motion.div
                  variants={nodeVariants}
                  className="absolute left-0 top-9 z-20 hidden md:flex"
                >
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/25 bg-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.08)]">
                    {/* Outer ring */}

                    <span className="absolute inset-[-5px] rounded-full border border-cyan-400/[0.08]" />

                    {/* Animated ring */}

                    <span className="absolute inset-[-10px] rounded-full border border-cyan-400/[0.035] transition duration-500 group-hover:border-cyan-400/15" />

                    {/* Icon container */}

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.14] to-blue-500/[0.06] text-cyan-400 shadow-inner">
                      <FaBriefcase size={18} />
                    </div>

                    {/* Active pulse */}

                    {index === 0 && (
                      <span className="absolute inset-[-4px] animate-ping rounded-full border border-cyan-400/15" />
                    )}
                  </div>
                </motion.div>

                {/* =================================================
                    EXPERIENCE CARD
                ================================================== */}

                <motion.div
                  whileHover={{
                    y: -7,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl transition duration-500 hover:border-cyan-400/20 hover:bg-white/[0.045] sm:p-8 lg:p-9"
                >
                  {/* =================================================
                      CARD DECORATION
                  ================================================== */}

                  {/* Top gradient line */}

                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-30 transition duration-500 group-hover:opacity-100" />

                  {/* Bottom gradient line */}

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  {/* Top right glow */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/[0.035] blur-[70px] transition duration-700 group-hover:bg-cyan-400/[0.085]"
                  />

                  {/* Bottom left glow */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-blue-500/[0.025] blur-[70px] transition duration-700 group-hover:bg-blue-500/[0.07]"
                  />

                  {/* =================================================
                      CARD CONTENT
                  ================================================== */}

                  <div className="relative">
                    {/* =================================================
                        TOP META
                    ================================================== */}

                    <div className="mb-6 flex flex-wrap items-center gap-2.5">
                      {/* Number */}

                      <span className="rounded-lg border border-white/[0.06] bg-white/[0.025] px-2.5 py-1.5 font-mono text-[10px] font-bold tracking-[0.2em] text-cyan-400/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="h-px w-5 bg-cyan-400/15" />

                      {/* Duration */}

                      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.045] px-3 py-1.5 text-[11px] font-semibold text-cyan-300">
                        <FaCalendarAlt size={10} />
                        {item.duration}
                      </span>

                      {/* Latest */}

                      {index === 0 && (
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.045] px-3 py-1.5 text-[11px] font-bold text-emerald-400">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          </span>

                          Latest Experience
                        </span>
                      )}
                    </div>

                    {/* =================================================
                        CARD HEADER
                    ================================================== */}

                    <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
                      <div className="min-w-0 flex-1">
                        {/* Role */}

                        <h3 className="text-2xl font-black tracking-tight text-white transition duration-300 group-hover:text-cyan-300 sm:text-3xl lg:text-[2rem]">
                          {item.role}
                        </h3>

                        {/* Company */}

                        <div className="mt-3 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/40" />

                          <p className="text-base font-bold text-cyan-400 sm:text-lg">
                            {item.company}
                          </p>
                        </div>

                        {/* Location */}

                        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                          <FaMapMarkerAlt className="shrink-0 text-cyan-400/60" />

                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* =================================================
                          FEATURE ICON
                      ================================================== */}

                      <motion.div
                        whileHover={{
                          rotate: 7,
                          scale: 1.05,
                        }}
                        className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.055] to-white/[0.015] text-cyan-400 shadow-xl transition duration-300 group-hover:border-cyan-400/25 group-hover:bg-cyan-400/[0.07] lg:flex"
                      >
                        {index === 0 ? (
                          <FaRocket size={23} />
                        ) : (
                          <FaBriefcase size={23} />
                        )}
                      </motion.div>
                    </div>

                    {/* =================================================
                        DESCRIPTION
                    ================================================== */}

                    <div className="relative mt-8 border-t border-white/[0.07] pt-7">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                          Overview
                        </span>

                        <div className="h-px flex-1 bg-white/[0.06]" />
                      </div>

                      <p className="max-w-4xl text-sm leading-8 text-slate-400 sm:text-[15px]">
                        {item.description}
                      </p>
                    </div>

                    {/* =================================================
                        RESPONSIBILITIES
                    ================================================== */}

                    {item.responsibilities?.length > 0 && (
                      <div className="relative mt-9">
                        {/* Heading */}

                        <div className="mb-5 flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-400/10 bg-cyan-400/[0.06] text-cyan-400">
                              <FaCheckCircle size={12} />
                            </div>

                            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-300">
                              Key Responsibilities
                            </h4>
                          </div>

                          <div className="h-px flex-1 bg-white/[0.06]" />
                        </div>

                        {/* Responsibilities */}

                        <div className="grid gap-2.5 sm:grid-cols-2">
                          {item.responsibilities.map(
                            (responsibility, responsibilityIndex) => (
                              <motion.div
                                key={`${responsibility}-${responsibilityIndex}`}
                                initial={{
                                  opacity: 0,
                                  x: -15,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                viewport={{
                                  once: true,
                                }}
                                transition={{
                                  duration: 0.35,
                                  delay:
                                    responsibilityIndex * 0.05,
                                }}
                                className="group/responsibility flex gap-3 rounded-xl border border-transparent p-2.5 transition duration-300 hover:border-white/[0.07] hover:bg-white/[0.025]"
                              >
                                <div className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-400/[0.08] text-cyan-400">
                                  <FaCheckCircle size={9} />
                                </div>

                                <span className="text-sm leading-7 text-slate-400 transition duration-300 group-hover/responsibility:text-slate-200">
                                  {responsibility}
                                </span>
                              </motion.div>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {/* =================================================
                        TECHNOLOGIES
                    ================================================== */}

                    {item.technologies?.length > 0 && (
                      <div className="relative mt-9">
                        {/* Heading */}

                        <div className="mb-5 flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-blue-400/10 bg-blue-400/[0.06] text-blue-400">
                              <FaCode size={12} />
                            </div>

                            <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-300">
                              Technologies & Tools
                            </h4>
                          </div>

                          <div className="h-px flex-1 bg-white/[0.06]" />
                        </div>

                        {/* Technology chips */}

                        <div className="flex flex-wrap gap-2.5">
                          {item.technologies.map(
                            (technology, technologyIndex) => (
                              <motion.span
                                key={`${technology}-${technologyIndex}`}
                                initial={{
                                  opacity: 0,
                                  scale: 0.9,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                viewport={{
                                  once: true,
                                }}
                                transition={{
                                  duration: 0.3,
                                  delay: technologyIndex * 0.035,
                                }}
                                whileHover={{
                                  y: -3,
                                  scale: 1.02,
                                }}
                                className="inline-flex cursor-default items-center gap-2 rounded-xl border border-white/[0.08] bg-slate-950/70 px-3.5 py-2 text-xs font-semibold text-slate-300 shadow-sm transition duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.055] hover:text-cyan-300"
                              >
                                <FaCircle
                                  size={4}
                                  className="text-cyan-400"
                                />

                                {technology}
                              </motion.span>
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {/* =================================================
                        CARD FOOTER
                    ================================================== */}

                    <div className="mt-9 flex flex-col gap-3 border-t border-white/[0.06] pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-2">
                        <FaStar className="text-[10px] text-cyan-400/60" />

                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                          Professional Experience{" "}
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <span className="text-[10px] uppercase tracking-[0.16em] text-slate-700">
                        Growth • Learning • Impact
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* =====================================================
            EXPERIENCE INSIGHT CARDS
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          <InsightCard
            icon={<FaLayerGroup />}
            number={experience.length.toString().padStart(2, "0")}
            label="Professional Experiences"
          />

          <InsightCard
            icon={<FaCode />}
            number="MERN"
            label="Primary Development Focus"
          />

          <InsightCard
            icon={<FaRocket />}
            number="∞"
            label="Continuous Growth"
          />
        </motion.div>

        {/* =====================================================
            CAREER PHILOSOPHY
        ====================================================== */}

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
            duration: 0.7,
          }}
          className="relative mt-12 overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.055] via-blue-500/[0.025] to-purple-500/[0.045] p-7 shadow-2xl shadow-black/10 sm:p-9"
        >
          {/* Glow */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.08] blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-500/[0.05] blur-3xl"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Text */}

            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-400">
                  Career Mindset
                </p>
              </div>

              <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                Turning Experience Into{" "}
                <span className="text-cyan-400">Impact.</span>
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-[15px]">
                Every opportunity is a chance to learn something new,
                strengthen technical skills, collaborate with others and
                create software that solves meaningful problems.
              </p>
            </div>

            {/* CTA */}

            <motion.a
              href="#contact"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-xl bg-cyan-400 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/10 transition duration-300 hover:bg-cyan-300 hover:shadow-cyan-400/20"
            >
              Let's Connect

              <FaExternalLinkAlt
                size={11}
                className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM NAVIGATION
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
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#skills"
            aria-label="Explore skills"
            className="group flex flex-col items-center gap-2 text-slate-600 transition duration-300 hover:text-cyan-400"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
              Explore Skills
            </span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.02] transition duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.05]">
              <FaArrowDown
                size={10}
                className="animate-bounce transition group-hover:text-cyan-400"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

/* =============================================================
   INSIGHT CARD
============================================================= */

interface InsightCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

const InsightCard = ({
  icon,
  number,
  label,
}: InsightCardProps) => {
  return (
    <motion.div
      variants={fadeUpVariants}
      whileHover={{
        y: -5,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-xl transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04]"
    >
      {/* Glow */}

      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/[0.04] blur-2xl transition duration-500 group-hover:bg-cyan-400/[0.09]" />

      <div className="relative flex items-center gap-4">
        {/* Icon */}

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.06] text-cyan-400 transition duration-300 group-hover:scale-105 group-hover:border-cyan-400/20">
          {icon}
        </div>

        {/* Content */}

        <div className="min-w-0">
          <div className="text-2xl font-black tracking-tight text-cyan-400 transition duration-300 group-hover:text-cyan-300">
            {number}
          </div>

          <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-600">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;