import { motion, useReducedMotion } from "framer-motion";
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
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

import { services } from "../../data/services";

/* =========================================================
   TYPES
   ========================================================= */

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  capabilities: string[];
  reducedMotion: boolean;
}

/* =========================================================
   ICON MAP
   ========================================================= */

const iconMap: Record<string, React.ReactNode> = {
  code: <FaCode />,
  react: <FaReact />,
  server: <FaServer />,
  api: <FaCode />,
  database: <FaDatabase />,
  chart: <FaChartBar />,
  mobile: <FaMobileAlt />,
};

/* =========================================================
   DEFAULT CAPABILITIES
   ========================================================= */

const capabilitySets: string[][] = [
  [
    "Responsive UI",
    "Modern UX",
    "Component Architecture",
  ],
  [
    "REST APIs",
    "Authentication",
    "Server Architecture",
  ],
  [
    "MongoDB",
    "Data Modeling",
    "API Integration",
  ],
  [
    "Performance",
    "Scalability",
    "Clean Code",
  ],
  [
    "Analytics",
    "Dashboards",
    "Data Visualization",
  ],
  [
    "Mobile First",
    "Responsive Design",
    "Cross Browser",
  ],
];

/* =========================================================
   SERVICES
   ========================================================= */

const Services = () => {
  const shouldReduceMotion = useReducedMotion();

  const reducedMotion = Boolean(
    shouldReduceMotion
  );

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-slate-950 px-4 py-24 sm:px-6 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Main Glow */}

        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[120px]" />

        {/* Left Glow */}

        <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/[0.06] blur-[100px]" />

        {/* Right Glow */}

        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/[0.06] blur-[100px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl">

        {/* ===================================================
            SECTION HEADER
        =================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: reducedMotion ? 0 : 0.7,
          }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          {/* Eyebrow */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />

              <span className="relative h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
              Services
            </span>
          </div>

          {/* Heading */}

          <h2
            id="services-heading"
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Solutions Built for{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Real Products
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            From responsive interfaces to scalable backend
            systems, I build reliable digital solutions
            focused on performance, usability and
            maintainability.
          </p>
        </motion.div>

        {/* ===================================================
            SERVICE GRID
        =================================================== */}

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const icon =
              iconMap[service.icon] ?? (
                <FaCode />
              );

            const capabilities =
              capabilitySets[
                index % capabilitySets.length
              ];

            return (
              <ServiceCard
                key={`${service.title}-${index}`}
                title={service.title}
                description={
                  service.description
                }
                icon={icon}
                index={index}
                capabilities={
                  capabilities
                }
                reducedMotion={
                  reducedMotion
                }
              />
            );
          })}
        </div>

        {/* ===================================================
            VALUE STRIP
        =================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: reducedMotion ? 0 : 0.6,
            delay: reducedMotion ? 0 : 0.1,
          }}
          className="mt-8 grid gap-3 sm:grid-cols-3"
        >
          <ValueItem
            icon={<FaRocket />}
            title="Performance"
            description="Fast and optimized experiences."
          />

          <ValueItem
            icon={<FaLayerGroup />}
            title="Scalable"
            description="Architecture ready to grow."
          />

          <ValueItem
            icon={<FaShieldAlt />}
            title="Reliable"
            description="Clean and maintainable solutions."
          />
        </motion.div>

        {/* ===================================================
            CTA
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: reducedMotion ? 1 : 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: reducedMotion ? 0 : 0.7,
            delay: reducedMotion ? 0 : 0.15,
          }}
          className="relative mt-10 overflow-hidden rounded-3xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.025] to-purple-500/[0.06] p-7 sm:p-10 lg:p-12"
        >
          {/* CTA Glow */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-purple-500/10 blur-3xl"
          />

          <div className="relative flex flex-col items-center justify-between gap-7 text-center lg:flex-row lg:text-left">

            {/* CTA Text */}

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Have a project in mind?
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Let's turn your idea into{" "}
                <span className="text-cyan-400">
                  reality.
                </span>
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                Tell me what you're building and
                let's discuss the right technology,
                architecture and approach.
              </p>
            </div>

            {/* CTA Button */}

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Start a Conversation

              <FaArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>

        {/* Bottom spacing */}

        <div className="h-2" />
      </div>
    </section>
  );
};

/* =========================================================
   SERVICE CARD
   ========================================================= */

const ServiceCard = ({
  title,
  description,
  icon,
  index,
  capabilities,
  reducedMotion,
}: ServiceCardProps) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: reducedMotion ? 0 : 35,
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
        duration: reducedMotion ? 0 : 0.55,
        delay: reducedMotion
          ? 0
          : index * 0.06,
      }}
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: -7,
            }
      }
      className="group relative h-full"
    >
      {/* Outer Glow */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[1.6rem] bg-gradient-to-br from-cyan-400/20 via-transparent to-purple-500/20 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Card */}

      <div className="relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-400/25 group-hover:bg-slate-900/80 sm:p-7">

        {/* Top Accent */}

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Header */}

        <div className="flex items-start justify-between">
          {/* Icon */}

          <motion.div
            whileHover={
              reducedMotion
                ? undefined
                : {
                    rotate: 5,
                    scale: 1.08,
                  }
            }
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.08] text-xl text-cyan-400 shadow-lg shadow-cyan-500/[0.05]"
          >
            {icon}
          </motion.div>

          {/* Number */}

          <span className="font-mono text-xs font-bold tracking-widest text-slate-700 transition-colors duration-300 group-hover:text-cyan-400/40">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title */}

        <h3 className="mt-7 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-300">
          {title}
        </h3>

        {/* Description */}

        <p className="mt-3 text-sm leading-7 text-slate-400">
          {description}
        </p>

        {/* Capabilities */}

        <div className="mt-6">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
            Capabilities
          </p>

          <div className="flex flex-wrap gap-2">
            {capabilities.map(
              (capability) => (
                <span
                  key={capability}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[11px] font-medium text-slate-400 transition-colors duration-300 group-hover:border-cyan-400/10 group-hover:text-slate-300"
                >
                  {capability}
                </span>
              )
            )}
          </div>
        </div>

        {/* Flexible Spacer */}

        <div className="flex-1" />

        {/* Footer */}

        <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <FaCheckCircle className="text-cyan-400" />

            <span>
              Modern & scalable
            </span>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-600 transition-all duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/10 group-hover:text-cyan-400">
            <FaArrowRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* =========================================================
   VALUE ITEM
   ========================================================= */

interface ValueItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueItem = ({
  icon,
  title,
  description,
}: ValueItemProps) => {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04]">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-400 transition-transform duration-300 group-hover:scale-105">
          {icon}
        </div>

        <div>
          <h4 className="text-sm font-bold text-white">
            {title}
          </h4>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;