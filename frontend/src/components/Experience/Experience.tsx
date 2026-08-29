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
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32"
    >
      {/* =========================================================
          BACKGROUND EFFECTS
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-[15%] h-[30rem] w-[30rem] rounded-full bg-cyan-500/[0.06] blur-[120px]" />

        <div className="absolute right-[-12rem] top-[45%] h-[30rem] w-[30rem] rounded-full bg-blue-500/[0.06] blur-[120px]" />

        <div className="absolute bottom-[-10rem] left-[35%] h-[25rem] w-[25rem] rounded-full bg-purple-500/[0.04] blur-[120px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          {/* Badge */}

          <motion.div
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
              duration: 0.4,
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 shadow-lg shadow-cyan-500/5"
          >
            <FaBriefcase />

            Professional Experience
          </motion.div>

          {/* Heading */}

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            My Professional{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            A journey built through internships, practical development,
            teamwork, problem-solving and building real-world full-stack
            applications.
          </p>

          {/* Decorative line */}

          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/50" />

            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

            <span className="h-px w-24 bg-cyan-400/30" />

            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400/50" />
          </div>
        </motion.div>

        {/* =========================================================
            EXPERIENCE TIMELINE
        ========================================================= */}

        <div className="relative">

          {/* Desktop timeline */}

          <div className="absolute bottom-10 left-8 top-8 hidden w-px bg-gradient-to-b from-cyan-400 via-blue-500/40 to-transparent md:block" />

          {/* Timeline glow */}

          <div className="absolute left-[29px] top-10 hidden h-20 w-1 rounded-full bg-cyan-400/30 blur-sm md:block" />

          <div className="space-y-10">

            {experience.map((item, index) => (
              <motion.article
                key={`${item.role}-${item.company}-${index}`}
                initial={{
                  opacity: 0,
                  y: 45,
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
                  duration: 0.6,
                  delay: index * 0.08,
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
                      rotate: -20,
                    }}
                    whileInView={{
                      scale: 1,
                      rotate: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08 + 0.15,
                    }}
                    className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 shadow-xl shadow-cyan-500/10"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/10 bg-cyan-400/[0.08] text-cyan-400">
                      <FaBriefcase size={18} />
                    </div>

                    <span className="absolute inset-0 animate-ping rounded-full border border-cyan-400/10" />
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
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8 lg:p-9"
                >

                  {/* Top hover line */}

                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Card glow */}

                  <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.04] blur-3xl transition duration-500 group-hover:bg-cyan-400/[0.09]" />

                  <div className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-blue-500/[0.03] blur-3xl transition duration-500 group-hover:bg-blue-500/[0.07]" />

                  {/* =================================================
                      CARD HEADER
                  ================================================= */}

                  <div className="relative flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">

                    <div className="min-w-0 flex-1">

                      {/* Number + Duration */}

                      <div className="mb-5 flex flex-wrap items-center gap-3">

                        <span className="font-mono text-xs font-bold tracking-widest text-cyan-400/60">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="h-px w-8 bg-cyan-400/20" />

                        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-3 py-1.5 text-xs font-medium text-cyan-300">
                          <FaCalendarAlt size={11} />

                          {item.duration}
                        </span>

                        {/* Current position */}

                        {index === 0 && (
                          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-3 py-1.5 text-xs font-semibold text-emerald-400">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                            Latest
                          </span>
                        )}
                      </div>

                      {/* Role */}

                      <h3 className="text-2xl font-bold tracking-tight text-white transition duration-300 group-hover:text-cyan-300 sm:text-3xl">
                        {item.role}
                      </h3>

                      {/* Company */}

                      <p className="mt-2 text-lg font-semibold text-cyan-400">
                        {item.company}
                      </p>

                      {/* Location */}

                      <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                        <FaMapMarkerAlt className="shrink-0 text-cyan-400/70" />

                        {item.location}
                      </p>
                    </div>

                    {/* Desktop icon */}

                    <div className="hidden shrink-0 lg:block">
                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.05,
                        }}
                        className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-400 shadow-lg transition duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.08]"
                      >
                        <FaBriefcase size={24} />
                      </motion.div>
                    </div>
                  </div>

                  {/* =================================================
                      DESCRIPTION
                  ================================================= */}

                  <div className="relative mt-8 border-t border-white/[0.08] pt-7">

                    <p className="max-w-4xl text-sm leading-8 text-slate-400 sm:text-base">
                      {item.description}
                    </p>
                  </div>

                  {/* =================================================
                      RESPONSIBILITIES
                  ================================================= */}

                  {item.responsibilities?.length > 0 && (
                    <div className="relative mt-8">

                      <div className="mb-5 flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-cyan-400" />

                          <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-300">
                            Key Responsibilities
                          </h4>
                        </div>

                        <div className="h-px flex-1 bg-white/[0.08]" />
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
                                duration: 0.35,
                                delay:
                                  index * 0.05 +
                                  responsibilityIndex * 0.05,
                              }}
                              className="group/item flex gap-3 rounded-xl border border-transparent p-2 transition duration-300 hover:border-white/[0.06] hover:bg-white/[0.025]"
                            >
                              <FaCheckCircle className="mt-1 shrink-0 text-cyan-400 transition duration-300 group-hover/item:scale-110" />

                              <span className="text-sm leading-7 text-slate-400 transition group-hover/item:text-slate-200">
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

                  {item.technologies?.length > 0 && (
                    <div className="relative mt-8">

                      <div className="mb-5 flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-blue-400" />

                          <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-300">
                            Technologies
                          </h4>
                        </div>

                        <div className="h-px flex-1 bg-white/[0.08]" />
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
                              }}
                              whileHover={{
                                y: -3,
                              }}
                              className="inline-flex cursor-default items-center gap-2 rounded-xl border border-white/10 bg-slate-950/60 px-3.5 py-2 text-xs font-medium text-slate-300 shadow-sm transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
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

                  {/* Bottom accent */}

                  <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-5">

                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                      Experience {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs text-slate-600">
                      Professional Growth
                    </span>
                  </div>
                </motion.div>
              </motion.article>
            ))}

          </div>
        </div>

        {/* =========================================================
            EXPERIENCE SUMMARY
        ========================================================= */}

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
            duration: 0.6,
          }}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >

          <SummaryCard
            number={experience.length.toString().padStart(2, "0")}
            label="Experiences"
          />

          <SummaryCard
            number="MERN"
            label="Development Focus"
          />

          <SummaryCard
            number="∞"
            label="Learning Mindset"
          />
        </motion.div>

        {/* =========================================================
            CTA
        ========================================================= */}

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
            duration: 0.6,
            delay: 0.1,
          }}
          className="mt-12"
        >
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.05] via-blue-500/[0.04] to-purple-500/[0.05] p-7 sm:p-8"
          >
            {/* CTA glow */}

            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/[0.08] blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  Let's Build Something
                </p>

                <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Interested in working together?
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-7 text-slate-500">
                  I'm always interested in new projects, internships,
                  collaborations and opportunities to build meaningful
                  software.
                </p>
              </div>

              <a
                href="#contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-400/20"
              >
                Let's Connect

                <FaExternalLinkAlt
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}

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
          }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#skills"
            aria-label="Explore skills"
            className="group flex flex-col items-center gap-2 text-slate-600 transition hover:text-cyan-400"
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">
              Explore Skills
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

/* =============================================================
   SUMMARY CARD
============================================================= */

interface SummaryCardProps {
  number: string;
  label: string;
}

const SummaryCard = ({
  number,
  label,
}: SummaryCardProps) => {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center backdrop-blur-xl transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04]"
    >
      <div className="text-2xl font-black text-cyan-400 transition group-hover:text-cyan-300">
        {number}
      </div>

      <p className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-600">
        {label}
      </p>
    </motion.div>
  );
};

export default Experience;