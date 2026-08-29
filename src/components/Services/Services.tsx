import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import {
  FaReact,
  FaServer,
  FaDatabase,
  FaCode,
  FaMobileAlt,
  FaChartBar,
  FaArrowRight,
  FaCheckCircle,
  FaLayerGroup,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";

import { services } from "../../data/services";

/* =========================================================
   TYPES
========================================================= */

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

/* =========================================================
   ICON MAP
========================================================= */

const iconMap: Record<string, ReactNode> = {
  code: <FaCode />,
  react: <FaReact />,
  server: <FaServer />,
  api: <FaCode />,
  database: <FaDatabase />,
  chart: <FaChartBar />,
  mobile: <FaMobileAlt />,
};

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
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

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.08,
      ease: "easeOut",
    },
  }),
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
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

/* =========================================================
   SERVICES COMPONENT
========================================================= */

const Services = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32"
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.03] blur-3xl"
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl">

        {/* ===================================================
            HEADER
        ==================================================== */}

        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* Label */}

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
              duration: 0.5,
              ease: "easeOut",
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2"
          >
            <span
              aria-hidden="true"
              className="relative flex h-2 w-2"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Services
            </span>
          </motion.div>

          {/* Heading */}

          <h2
            id="services-heading"
            className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            What I{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Can Build
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I create modern, responsive and scalable web
            applications with a strong focus on performance,
            usability, security and clean architecture.
          </p>
        </motion.div>

        {/* ===================================================
            SERVICE CARDS
        ==================================================== */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(services as ServiceItem[]).map((service, index) => {
            const icon = iconMap[service.icon] ?? <FaCode />;

            return (
              <motion.article
                key={`${service.title}-${index}`}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group relative"
              >
                {/* Card Glow */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-blue-500/0 opacity-0 blur-sm transition duration-500 group-hover:opacity-100"
                />

                {/* Card */}

                <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 group-hover:border-cyan-400/30 group-hover:bg-white/[0.05] sm:p-8">

                  {/* Top Shine */}

                  <div
                    aria-hidden="true"
                    className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100"
                  />

                  {/* Top Row */}

                  <div className="flex items-start justify-between">

                    {/* Icon */}

                    <motion.div
                      whileHover={{
                        rotate: 5,
                        scale: 1.08,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-400 shadow-lg shadow-cyan-500/5"
                    >
                      {icon}
                    </motion.div>

                    {/* Number */}

                    <span className="font-mono text-sm font-semibold text-slate-700 transition duration-300 group-hover:text-cyan-400/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title */}

                  <h3 className="mt-7 text-xl font-bold tracking-tight text-white transition duration-300 group-hover:text-cyan-300 sm:text-2xl">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 min-h-[84px] text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>

                  {/* Feature */}

                  <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-400">
                    <FaCheckCircle
                      aria-hidden="true"
                      className="shrink-0 text-cyan-400"
                    />

                    <span>
                      Modern & scalable solution
                    </span>
                  </div>

                  {/* Bottom */}

                  <div className="mt-auto pt-7">

                    <div className="flex items-center justify-between border-t border-white/10 pt-5">

                      {/* Progress Line */}

                      <div
                        aria-hidden="true"
                        className="h-px w-12 bg-cyan-400/40 transition-all duration-500 group-hover:w-20 group-hover:bg-cyan-400"
                      />

                      {/* Arrow */}

                      <div
                        aria-hidden="true"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-500 transition duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 group-hover:text-cyan-400"
                      >
                        <FaArrowRight
                          size={13}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ===================================================
            VALUE PROPOSITION
        ==================================================== */}

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-10 grid gap-4 sm:grid-cols-3"
        >
          {/* Performance */}

          <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04]">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition group-hover:scale-110">
              <FaBolt />
            </div>

            <h4 className="mt-4 text-sm font-semibold text-white">
              Performance Focused
            </h4>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Fast and optimized applications for a smooth
              user experience.
            </p>
          </div>

          {/* Architecture */}

          <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04]">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-400/10 text-blue-400 transition group-hover:scale-110">
              <FaLayerGroup />
            </div>

            <h4 className="mt-4 text-sm font-semibold text-white">
              Clean Architecture
            </h4>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Maintainable and scalable code designed for
              future growth.
            </p>
          </div>

          {/* Security */}

          <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.04]">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-purple-400/10 text-purple-400 transition group-hover:scale-110">
              <FaShieldAlt />
            </div>

            <h4 className="mt-4 text-sm font-semibold text-white">
              Secure Development
            </h4>

            <p className="mt-2 text-xs leading-6 text-slate-500">
              Following practical security principles across
              frontend and backend development.
            </p>
          </div>
        </motion.div>

        {/* ===================================================
            BOTTOM CTA
        ==================================================== */}

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-cyan-400/10 bg-cyan-400/[0.03] p-8 text-center sm:p-10"
        >
          {/* CTA Glow */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl"
          />

          <div className="relative">

            <p className="text-sm font-medium text-slate-400">
              Have an idea or project in mind?
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Let's build something{" "}
              <span className="text-cyan-400">
                amazing
              </span>{" "}
              together.
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
              From frontend interfaces to complete MERN
              applications, let's turn your idea into a
              reliable digital product.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Start a Conversation

              <FaArrowRight
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;