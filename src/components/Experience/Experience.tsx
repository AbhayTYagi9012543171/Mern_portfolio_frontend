import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaCircle,
  FaArrowDown,
} from "react-icons/fa";

import { experience } from "../../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative isolate overflow-hidden bg-slate-950 px-5 py-24 sm:px-6 sm:py-32"
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Main glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[140px]" />

        {/* Left glow */}
        <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/[0.06] blur-[120px]" />

        {/* Right glow */}
        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-purple-500/[0.06] blur-[130px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ===================================================== */}

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
            ease: "easeOut" as const,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          {/* Label */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 shadow-lg shadow-cyan-500/[0.03] backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            <FaBriefcase />

            Experience
          </div>

          {/* Heading */}

          <h2
            id="experience-heading"
            className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            My Professional{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            A collection of my professional experiences,
            internships, practical development work and
            real-world projects that have shaped my journey
            as a developer.
          </p>

          {/* Timeline indicator */}

          <div className="mt-8 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-600">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400/40" />

            Career Timeline

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400/40" />
          </div>
        </motion.div>

        {/* =====================================================
            TIMELINE
        ===================================================== */}

        <div className="relative">

          {/* Desktop timeline */}

          <div
            aria-hidden="true"
            className="absolute bottom-12 left-8 top-8 hidden w-px bg-gradient-to-b from-cyan-400 via-blue-500/40 to-purple-500/10 md:block"
          />

          {/* Timeline glow */}

          <div
            aria-hidden="true"
            className="absolute left-[29px] top-10 hidden h-32 w-[5px] rounded-full bg-cyan-400/30 blur-md md:block"
          />

          <div className="space-y-10 md:space-y-14">

            {experience.map((item, index) => (
              <motion.article
                key={`${item.role}-${item.company}`}
                initial={{
                  opacity: 0,
                  y: 40,
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
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: "easeOut" as const,
                }}
                className="relative md:pl-20"
              >

                {/* =================================================
                    TIMELINE NODE
                ================================================= */}

                <div className="absolute left-0 top-8 hidden md:block">
                  <motion.div
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    whileInView={{
                      scale: 1,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.12 + 0.15,
                      type: "spring",
                      stiffness: 180,
                    }}
                    className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 shadow-xl shadow-cyan-500/10"
                  >
                    {/* Pulse */}

                    <span
                      aria-hidden="true"
                      className="absolute inset-0 animate-ping rounded-full border border-cyan-400/10"
                    />

                    {/* Icon */}

                    <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-400">
                      <FaBriefcase size={17} />
                    </span>
                  </motion.div>
                </div>

                {/* =================================================
                    EXPERIENCE CARD
                ================================================= */}

                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/[0.09] bg-white/[0.025] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl transition duration-500 hover:border-cyan-400/25 hover:bg-white/[0.04] sm:p-8 lg:p-9"
                >

                  {/* Top gradient */}

                  <div
                    aria-hidden="true"
                    className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
                  />

                  {/* Card glow */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full bg-cyan-400/[0.05] blur-[70px] transition duration-700 group-hover:bg-cyan-400/[0.10]"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-blue-500/[0.03] blur-[70px]"
                  />

                  {/* =================================================
                      HEADER
                  ================================================= */}

                  <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                    <div className="min-w-0 flex-1">

                      {/* Meta */}

                      <div className="mb-5 flex flex-wrap items-center gap-3">

                        <span className="font-mono text-xs font-bold tracking-widest text-cyan-400/50">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span
                          aria-hidden="true"
                          className="h-px w-7 bg-cyan-400/25"
                        />

                        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-1.5 text-xs font-medium text-cyan-300">
                          <FaCalendarAlt size={10} />

                          {item.duration}
                        </span>

                      </div>

                      {/* Role */}

                      <h3 className="text-2xl font-bold tracking-tight text-white transition duration-300 group-hover:text-cyan-200 sm:text-3xl lg:text-4xl">
                        {item.role}
                      </h3>

                      {/* Company */}

                      <p className="mt-3 text-lg font-semibold text-cyan-400 sm:text-xl">
                        {item.company}
                      </p>

                      {/* Location */}

                      <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                        <FaMapMarkerAlt
                          className="shrink-0 text-cyan-400/70"
                          size={13}
                        />

                        {item.location}
                      </p>
                    </div>

                    {/* Desktop icon */}

                    <div className="hidden shrink-0 lg:flex">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-400 shadow-lg transition duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.08] group-hover:shadow-cyan-500/10">
                        <FaBriefcase size={24} />
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}

                  <div className="relative mt-8 border-t border-white/[0.08] pt-7">
                    <p className="max-w-5xl text-sm leading-8 text-slate-400 sm:text-base">
                      {item.description}
                    </p>
                  </div>

                  {/* =================================================
                      RESPONSIBILITIES
                  ================================================= */}

                  {item.responsibilities &&
                    item.responsibilities.length > 0 && (
                      <div className="relative mt-9">

                        <div className="mb-5 flex items-center gap-4">
                          <h4 className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.18em] text-slate-300">
                            Key Responsibilities
                          </h4>

                          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">

                          {item.responsibilities.map(
                            (responsibility, responsibilityIndex) => (
                              <motion.div
                                key={`${responsibility}-${responsibilityIndex}`}
                                initial={{
                                  opacity: 0,
                                  x: -12,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                viewport={{
                                  once: true,
                                }}
                                transition={{
                                  duration: 0.4,
                                  delay:
                                    index * 0.08 +
                                    responsibilityIndex * 0.05,
                                  ease: "easeOut" as const,
                                }}
                                className="group/item flex gap-3 rounded-xl border border-transparent p-2 transition duration-300 hover:border-cyan-400/10 hover:bg-cyan-400/[0.025]"
                              >
                                <FaCheckCircle
                                  className="mt-1 shrink-0 text-cyan-400 transition duration-300 group-hover/item:scale-110 group-hover/item:text-cyan-300"
                                  size={14}
                                />

                                <span className="text-sm leading-7 text-slate-400 transition duration-300 group-hover/item:text-slate-200">
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
                  ================================================= */}

                  {item.technologies &&
                    item.technologies.length > 0 && (
                      <div className="relative mt-9">

                        <div className="mb-5 flex items-center gap-4">
                          <h4 className="whitespace-nowrap text-xs font-bold uppercase tracking-[0.18em] text-slate-300">
                            Technologies
                          </h4>

                          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                        </div>

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
                                  ease: "easeOut" as const,
                                }}
                                whileHover={{
                                  y: -3,
                                  scale: 1.03,
                                }}
                                className="inline-flex cursor-default items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.035] px-3.5 py-2 text-xs font-medium text-slate-300 shadow-sm transition duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.06] hover:text-cyan-300 hover:shadow-cyan-500/5"
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
                      FOOTER
                  ================================================= */}

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-6">

                    <div className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                      Professional Experience
                    </div>

                    <span className="font-mono text-xs text-slate-700">
                      EXPERIENCE_
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* =====================================================
            CAREER SUMMARY
        ===================================================== */}

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
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut" as const,
          }}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          {/* Experience */}

          <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04]">
            <p className="text-3xl font-black text-cyan-400">
              {experience.length}+
            </p>

            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Experience
            </p>
          </div>

          {/* Stack */}

          <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.04]">
            <p className="text-3xl font-black text-blue-400">
              MERN
            </p>

            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Core Stack
            </p>
          </div>

          {/* Learning */}

          <div className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-purple-400/20 hover:bg-white/[0.04]">
            <p className="text-3xl font-black text-purple-400">
              ∞
            </p>

            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Learning Mindset
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            CTA
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
            delay: 0.1,
            ease: "easeOut" as const,
          }}
          className="mt-12 overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.04] via-blue-500/[0.03] to-purple-500/[0.04] p-7 backdrop-blur-xl sm:p-9"
        >
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">

            <div>
              <div className="mb-2 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-400 md:justify-start">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

                Next Chapter
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Let's build something meaningful.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-7 text-slate-500">
                I'm always interested in learning,
                collaborating and working on challenging
                development projects.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] px-5 py-3.5 text-sm font-semibold text-cyan-300 shadow-lg shadow-cyan-500/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.10] hover:text-cyan-200 hover:shadow-cyan-500/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
            >
              Let's Connect

              <FaExternalLinkAlt
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM INDICATOR
        ===================================================== */}

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
          }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#education"
            aria-label="Continue to education section"
            className="group flex flex-col items-center gap-2 text-slate-700 transition hover:text-cyan-400"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Continue
            </span>

            <FaArrowDown
              size={12}
              className="animate-bounce transition group-hover:text-cyan-400"
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;