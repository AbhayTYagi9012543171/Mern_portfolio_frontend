import {
  type ReactNode,
} from "react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

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
  FaBolt,
  FaCircle,
  FaLaptopCode,
} from "react-icons/fa";

import { services } from "../../data/services";

/* =========================================================
   TYPES
========================================================= */

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  index: number;
  capabilities: string[];
  reducedMotion: boolean;
}

interface ValueItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
  reducedMotion: boolean;
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
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-slate-950
        px-4
        py-20
        sm:px-6
        sm:py-24
        md:py-28
        lg:px-8
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND SYSTEM
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Main cyan atmosphere */}

        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  scale: [1, 1.08, 1],
                  opacity: [
                    0.2,
                    0.4,
                    0.2,
                  ],
                  x: [0, 25, 0],
                  y: [0, -20, 0],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-[-10rem]
            h-[24rem]
            w-[24rem]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/[0.08]
            blur-[100px]
            sm:h-[34rem]
            sm:w-[34rem]
            sm:blur-[125px]
            lg:h-[42rem]
            lg:w-[42rem]
            lg:blur-[145px]
          "
        />

        {/* Left blue glow */}

        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  y: [0, 25, 0],
                  opacity: [
                    0.15,
                    0.3,
                    0.15,
                  ],
                }
          }
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -left-32
            top-[28%]
            h-64
            w-64
            rounded-full
            bg-blue-500/[0.07]
            blur-[90px]
            sm:-left-40
            sm:h-80
            sm:w-80
            lg:h-96
            lg:w-96
            lg:blur-[120px]
          "
        />

        {/* Right purple glow */}

        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  y: [0, -25, 0],
                  opacity: [
                    0.15,
                    0.3,
                    0.15,
                  ],
                }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-32
            bottom-[18%]
            h-64
            w-64
            rounded-full
            bg-purple-500/[0.07]
            blur-[90px]
            sm:-right-40
            sm:h-80
            sm:w-80
            lg:h-96
            lg:w-96
            lg:blur-[120px]
          "
        />

        {/* Radial atmosphere */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(34,211,238,0.06),transparent_34%)]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.02] sm:opacity-[0.028]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize:
              "46px 46px",
            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 92%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 92%)",
          }}
        />

        {/* Dark vignette */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,6,23,0.45)_85%)]" />

        {/* Bottom fade */}

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent sm:h-56" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative mx-auto w-full max-w-7xl">

        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <motion.header
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
            duration:
              reducedMotion
                ? 0
                : 0.7,
          }}
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center
            sm:mb-14
            md:mb-16
          "
        >
          {/* Eyebrow */}

          <div
            className="
              mb-4
              inline-flex
              max-w-full
              items-center
              gap-2.5
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/[0.06]
              px-3.5
              py-2
              shadow-[0_0_35px_rgba(34,211,238,0.05)]
              backdrop-blur-xl
              sm:mb-5
              sm:px-4
            "
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />

              <span className="relative h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-400 sm:text-[11px] sm:tracking-[0.22em]">
              Professional Services
            </span>
          </div>

          {/* Heading */}

          <h2
            id="services-heading"
            className="
              text-3xl
              font-black
              leading-[1.12]
              tracking-[-0.035em]
              text-white
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Solutions Designed to{" "}

            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Build Real Products
              </span>

              <motion.span
                animate={
                  reducedMotion
                    ? undefined
                    : {
                        opacity: [
                          0.2,
                          0.7,
                          0.2,
                        ],
                      }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-[1px]"
              />
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-400
              sm:mt-6
              sm:text-base
              sm:leading-8
              md:text-lg
            "
          >
            From responsive interfaces to secure
            backend systems, I design and build
            scalable digital experiences focused on{" "}
            <span className="font-semibold text-slate-300">
              performance, usability and maintainability.
            </span>
          </p>

          {/* Header indicators */}

          <div className="mx-auto mt-7 flex max-w-xl flex-wrap items-center justify-center gap-2.5 sm:mt-8">
            <HeaderPill
              icon={<FaReact />}
              text="Modern Frontend"
            />

            <HeaderPill
              icon={<FaServer />}
              text="Backend APIs"
            />

            <HeaderPill
              icon={<FaDatabase />}
              text="Data Layer"
            />
          </div>
        </motion.header>

        {/* ===================================================
            SERVICE GRID
        =================================================== */}

        <div
          className="
            grid
            w-full
            gap-4
            sm:gap-5
            md:grid-cols-2
            md:gap-6
            xl:grid-cols-3
          "
        >
          {services.map(
            (service, index) => {
              const icon =
                iconMap[
                  service.icon
                ] ?? <FaCode />;

              const capabilities =
                capabilitySets[
                  index %
                    capabilitySets.length
                ];

              return (
                <ServiceCard
                  key={`${service.title}-${index}`}
                  title={
                    service.title
                  }
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
            }
          )}
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
            amount: 0.15,
          }}
          transition={{
            duration:
              reducedMotion
                ? 0
                : 0.65,
            delay:
              reducedMotion
                ? 0
                : 0.1,
          }}
          className="
            mt-6
            grid
            gap-3
            sm:mt-8
            sm:grid-cols-3
            sm:gap-4
          "
        >
          <ValueItem
            icon={<FaRocket />}
            title="Performance"
            description="Optimized interfaces and APIs focused on fast experiences."
            index={0}
            reducedMotion={
              reducedMotion
            }
          />

          <ValueItem
            icon={<FaLayerGroup />}
            title="Scalability"
            description="Structured architecture designed to support product growth."
            index={1}
            reducedMotion={
              reducedMotion
            }
          />

          <ValueItem
            icon={<FaShieldAlt />}
            title="Reliability"
            description="Maintainable code, predictable data flow and stable solutions."
            index={2}
            reducedMotion={
              reducedMotion
            }
          />
        </motion.div>

        {/* ===================================================
            DEVELOPMENT PROCESS
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
            amount: 0.18,
          }}
          transition={{
            duration:
              reducedMotion
                ? 0
                : 0.7,
          }}
          className="
            mt-6
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.08]
            bg-white/[0.02]
            p-4
            backdrop-blur-xl
            sm:mt-8
            sm:rounded-3xl
            sm:p-6
            lg:p-7
          "
        >
          <div
            className="
              flex
              flex-col
              gap-5
              lg:flex-row
              lg:items-center
              lg:justify-between
            "
          >
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-400 sm:text-[10px] sm:tracking-[0.2em]">
                <FaLaptopCode />

                Development Approach
              </div>

              <h3 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                From concept to production-ready solution
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
                Every solution is approached with a
                structured workflow designed around
                clarity, reliability and long-term
                maintainability.
              </p>
            </div>

            <div
              className="
                grid
                w-full
                grid-cols-2
                gap-2.5
                sm:grid-cols-4
                lg:max-w-xl
              "
            >
              {[
                "Plan",
                "Build",
                "Test",
                "Improve",
              ].map(
                (
                  step,
                  index
                ) => (
                  <div
                    key={step}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-xl
                      border
                      border-white/[0.07]
                      bg-slate-950/50
                      px-3
                      py-3
                      text-center
                      transition
                      duration-300
                      hover:border-cyan-400/20
                      hover:bg-cyan-400/[0.04]
                      sm:rounded-2xl
                    "
                  >
                    <span className="font-mono text-[8px] text-cyan-400/50">
                      0{index + 1}
                    </span>

                    <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-300 sm:text-[11px]">
                      {step}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            CTA
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale:
              reducedMotion
                ? 1
                : 0.97,
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
            duration:
              reducedMotion
                ? 0
                : 0.7,
            delay:
              reducedMotion
                ? 0
                : 0.12,
          }}
          className="
            relative
            mt-8
            overflow-hidden
            rounded-[1.6rem]
            border
            border-cyan-400/15
            bg-gradient-to-br
            from-cyan-400/[0.075]
            via-white/[0.025]
            to-purple-500/[0.07]
            p-5
            shadow-[0_25px_90px_rgba(0,0,0,0.3)]
            backdrop-blur-2xl
            sm:mt-10
            sm:rounded-[2rem]
            sm:p-8
            lg:p-10
            xl:p-12
          "
        >
          {/* CTA decorative accents */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl sm:h-64 sm:w-64"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl sm:h-64 sm:w-64"
          />

          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
          />

          <div
            className="
              relative
              flex
              flex-col
              items-start
              gap-7
              text-left
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-10
            "
          >
            {/* CTA Text */}

            <div className="max-w-2xl">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-cyan-400/15
                  bg-cyan-400/[0.05]
                  px-3
                  py-1.5
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-cyan-400
                  sm:text-[10px]
                "
              >
                <FaBolt />

                Have a project in mind?
              </div>

              <h3
                className="
                  mt-4
                  text-2xl
                  font-black
                  tracking-tight
                  text-white
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Let's turn your idea into{" "}

                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  a real product.
                </span>
              </h3>

              <p
                className="
                  mt-3
                  max-w-xl
                  text-sm
                  leading-7
                  text-slate-400
                  sm:text-base
                  sm:leading-8
                "
              >
                Tell me what you're building and
                let's discuss the architecture,
                technology stack and approach that
                fits your goals.
              </p>
            </div>

            {/* CTA Button */}

            <motion.a
              href="#contact"
              whileHover={
                reducedMotion
                  ? undefined
                  : {
                      y: -4,
                      scale: 1.02,
                    }
              }
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                inline-flex
                min-h-[48px]
                w-full
                shrink-0
                items-center
                justify-center
                gap-3
                overflow-hidden
                rounded-xl
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                px-5
                py-3.5
                text-sm
                font-bold
                text-slate-950
                shadow-[0_12px_40px_rgba(34,211,238,0.18)]
                transition
                duration-300
                hover:shadow-[0_18px_55px_rgba(34,211,238,0.28)]
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-300/50
                sm:w-auto
                sm:px-6
              "
            >
              Start a Conversation

              <FaArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
          </div>
        </motion.div>
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
        y: reducedMotion
          ? 0
          : 35,
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
        duration:
          reducedMotion
            ? 0
            : 0.55,
        delay:
          reducedMotion
            ? 0
            : index * 0.055,
      }}
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: -7,
            }
      }
      className="group relative h-full min-w-0"
    >
      {/* Outer glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -inset-px
          rounded-[1.6rem]
          bg-gradient-to-br
          from-cyan-400/25
          via-transparent
          to-purple-500/20
          opacity-0
          blur-sm
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Card */}

      <div
        className="
          relative
          flex
          h-full
          min-h-0
          min-w-0
          flex-col
          overflow-hidden
          rounded-[1.5rem]
          border
          border-white/[0.085]
          bg-slate-900/55
          p-5
          shadow-[0_20px_60px_rgba(0,0,0,0.16)]
          backdrop-blur-xl
          transition-all
          duration-500
          group-hover:border-cyan-400/25
          group-hover:bg-slate-900/75
          group-hover:shadow-[0_28px_85px_rgba(0,0,0,0.28)]
          sm:min-h-[380px]
          sm:p-6
          lg:p-7
        "
      >
        {/* Card atmosphere */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/[0.05] blur-3xl transition duration-500 group-hover:bg-cyan-400/[0.1]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-400/[0.035] blur-3xl transition duration-500 group-hover:bg-purple-400/[0.07]"
        />

        {/* Top Accent */}

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Card index */}

        <div
          aria-hidden="true"
          className="absolute right-5 top-5 font-mono text-[10px] font-bold tracking-[0.16em] text-slate-800 transition-colors duration-300 group-hover:text-cyan-400/35 sm:right-6 sm:top-6"
        >
          {String(index + 1).padStart(
            2,
            "0"
          )}
        </div>

        {/* Header */}

        <div className="relative flex items-start justify-between gap-3 pr-8">
          <motion.div
            whileHover={
              reducedMotion
                ? undefined
                : {
                    rotate: 5,
                    scale: 1.08,
                  }
            }
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-cyan-400/20
              bg-gradient-to-br
              from-cyan-400/[0.12]
              to-blue-500/[0.04]
              text-lg
              text-cyan-400
              shadow-lg
              shadow-cyan-500/[0.04]
              transition
              duration-300
              group-hover:border-cyan-400/30
              group-hover:shadow-cyan-500/[0.08]
              sm:h-14
              sm:w-14
              sm:rounded-2xl
              sm:text-xl
            "
          >
            {icon}
          </motion.div>
        </div>

        {/* Title */}

        <h3
          className="
            relative
            mt-5
            break-words
            text-lg
            font-bold
            tracking-tight
            text-white
            transition-colors
            duration-300
            group-hover:text-cyan-300
            sm:mt-7
            sm:text-xl
          "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
            relative
            mt-3
            break-words
            text-xs
            leading-6
            text-slate-400
            sm:text-sm
            sm:leading-7
          "
        >
          {description}
        </p>

        {/* Capabilities */}

        <div className="relative mt-5 sm:mt-6">
          <div className="mb-3 flex items-center gap-2">
            <FaCircle
              size={4}
              className="text-cyan-400"
            />

            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-600 sm:text-[10px] sm:tracking-[0.2em]">
              Capabilities
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {capabilities.map(
              (capability) => (
                <span
                  key={capability}
                  className="
                    max-w-full
                    rounded-lg
                    border
                    border-white/[0.08]
                    bg-white/[0.03]
                    px-2.5
                    py-1.5
                    text-[10px]
                    font-medium
                    text-slate-400
                    transition
                    duration-300
                    group-hover:border-cyan-400/10
                    group-hover:bg-cyan-400/[0.025]
                    group-hover:text-slate-300
                    sm:text-[11px]
                  "
                >
                  {capability}
                </span>
              )
            )}
          </div>
        </div>

        {/* Spacer */}

        <div className="flex-1" />

        {/* Footer */}

        <div
          className="
            relative
            mt-6
            flex
            min-w-0
            items-center
            justify-between
            gap-3
            border-t
            border-white/[0.07]
            pt-4
            sm:mt-7
            sm:pt-5
          "
        >
          <div className="flex min-w-0 items-center gap-2 text-[10px] text-slate-500 sm:text-xs">
            <FaCheckCircle className="shrink-0 text-cyan-400" />

            <span className="truncate">
              Modern & scalable
            </span>
          </div>

          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-lg
              border
              border-white/10
              bg-white/[0.03]
              text-slate-600
              transition-all
              duration-300
              group-hover:border-cyan-400/20
              group-hover:bg-cyan-400/10
              group-hover:text-cyan-400
            "
          >
            <FaArrowRight
              size={11}
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

const ValueItem = ({
  icon,
  title,
  description,
  index,
  reducedMotion,
}: ValueItemProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: reducedMotion
          ? 0
          : 18,
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
        duration:
          reducedMotion
            ? 0
            : 0.45,
        delay:
          reducedMotion
            ? 0
            : index * 0.06,
      }}
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: -4,
            }
      }
      className="
        group
        relative
        min-w-0
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.08]
        bg-white/[0.025]
        p-4
        backdrop-blur-xl
        transition
        duration-300
        hover:border-cyan-400/20
        hover:bg-white/[0.045]
        sm:p-5
      "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/[0.04] blur-2xl transition group-hover:bg-cyan-400/[0.08]"
      />

      <div className="relative flex min-w-0 items-start gap-3 sm:gap-4">
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            border
            border-cyan-400/15
            bg-cyan-400/[0.06]
            text-sm
            text-cyan-400
            transition-transform
            duration-300
            group-hover:scale-105
            sm:h-11
            sm:w-11
            sm:text-base
          "
        >
          {icon}
        </div>

        <div className="min-w-0">
          <h4 className="text-sm font-bold text-white">
            {title}
          </h4>

          <p className="mt-1 text-[11px] leading-5 text-slate-500 sm:text-xs">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

/* =========================================================
   HEADER PILL
========================================================= */

interface HeaderPillProps {
  icon: ReactNode;
  text: string;
}

const HeaderPill = ({
  icon,
  text,
}: HeaderPillProps) => {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-1.5
        rounded-lg
        border
        border-white/[0.07]
        bg-white/[0.025]
        px-2.5
        py-2
        text-[9px]
        font-medium
        text-slate-500
        backdrop-blur-xl
        sm:gap-2
        sm:rounded-xl
        sm:px-3
        sm:text-[10px]
      "
    >
      <span className="text-cyan-400">
        {icon}
      </span>

      {text}
    </div>
  );
};

export default Services;