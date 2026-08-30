import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import {
  FaArrowRight,
  FaBriefcase,
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaGraduationCap,
  FaLaptopCode,
  FaLightbulb,
  FaReact,
  FaRocket,
  FaServer,
  FaBolt,
  FaLayerGroup,
  FaTerminal,
  FaCircle,
} from "react-icons/fa";

type Highlight = {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
  number: string;
};

type Stat = {
  value: string;
  label: string;
  description: string;
};

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const highlights: Highlight[] = [
    {
      number: "01",
      icon: <FaCode />,
      title: "Clean Architecture",
      description:
        "Structured, reusable and maintainable applications designed with scalability and long-term code quality in mind.",
      accent: "from-cyan-400/20 via-cyan-400/5 to-transparent",
    },
    {
      number: "02",
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      description:
        "Complete web solutions spanning modern React interfaces, Node.js APIs, Express services and MongoDB databases.",
      accent: "from-blue-400/20 via-blue-400/5 to-transparent",
    },
    {
      number: "03",
      icon: <FaLightbulb />,
      title: "Problem Solving",
      description:
        "Turning complex requirements into practical, intuitive and reliable digital products that solve real-world problems.",
      accent: "from-purple-400/20 via-purple-400/5 to-transparent",
    },
    {
      number: "04",
      icon: <FaRocket />,
      title: "Performance First",
      description:
        "Focused on responsive interfaces, efficient APIs, optimized data flow and smooth user experiences.",
      accent: "from-emerald-400/20 via-emerald-400/5 to-transparent",
    },
  ];

  const technologies = [
    "React.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redux Toolkit",
    "Axios",
    "Socket.io",
    "Tailwind CSS",
    "Git",
    "REST API",
  ];

  const stats: Stat[] = [
    {
      value: "10+",
      label: "Technologies",
      description: "Modern development tools",
    },
    {
      value: "5+",
      label: "Projects Built",
      description: "Real-world applications",
    },
    {
      value: "MERN",
      label: "Primary Stack",
      description: "Full-stack ecosystem",
    },
    {
      value: "24/7",
      label: "Learning Mindset",
      description: "Always improving",
    },
  ];

  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        ease: "easeOut",
      },
    },
  };

  const slideLeft: Variants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -45,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideRight: Variants = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 45,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-slate-950 px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-36"
    >
      {/* =========================================================
          PREMIUM BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Ambient glows */}

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 35, 0],
                  y: [0, -25, 0],
                  opacity: [0.35, 0.5, 0.35],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-56 top-20 h-[32rem] w-[32rem] rounded-full bg-cyan-500/[0.07] blur-[130px]"
        />

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, -30, 0],
                  y: [0, 25, 0],
                  opacity: [0.25, 0.4, 0.25],
                }
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-56 top-[30%] h-[32rem] w-[32rem] rounded-full bg-purple-600/[0.07] blur-[130px]"
        />

        <div className="absolute bottom-[-15rem] left-[30%] h-[30rem] w-[30rem] rounded-full bg-blue-600/[0.06] blur-[130px]" />

        {/* Radial light */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.07),transparent_35%)]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, transparent 90%)",
          }}
        />

        {/* Vignette */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.35)_85%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300 shadow-lg shadow-cyan-500/[0.04] backdrop-blur-xl sm:text-[11px]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
              <span className="relative h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            About Me
          </div>

          <h2
            id="about-heading"
            className="text-4xl font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl"
          >
            Engineering Ideas Into
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-slate-400 sm:text-lg sm:leading-8">
            I'm a MERN Stack Developer focused on building modern,
            responsive and scalable applications where thoughtful
            design meets reliable engineering.
          </p>
        </motion.div>

        {/* =========================================================
            PROFILE + HIGHLIGHTS
        ========================================================= */}

        <div className="grid gap-6 lg:grid-cols-5 lg:gap-7">

          {/* =======================================================
              PROFILE CARD
          ======================================================= */}

          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="group relative h-full overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.035] shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-2xl">

              {/* Animated glow */}

              <motion.div
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.12, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }
                }
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/[0.08] blur-3xl"
              />

              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-blue-500/[0.04] blur-3xl" />

              {/* Top gradient line */}

              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

              <div className="relative p-7 sm:p-9">

                {/* Profile identity */}

                <div className="flex items-center gap-5">

                  <div className="relative shrink-0">
                    <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-purple-500/10 text-cyan-300 shadow-[0_15px_40px_rgba(34,211,238,0.12)]">
                      <FaLaptopCode size={30} />

                      <div className="absolute inset-0 rounded-2xl bg-cyan-400/5 blur-xl" />
                    </div>

                    <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full border-[3px] border-slate-950 bg-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </span>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                      MERN Stack Developer
                    </p>

                    <h3 className="mt-1 text-2xl font-black tracking-tight text-white">
                      Abhay Tyagi
                    </h3>

                    <div className="mt-1.5 flex items-center gap-2 text-xs text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Available for opportunities
                    </div>
                  </div>
                </div>

                {/* Divider */}

                <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Intro */}

                <div className="space-y-5 text-[14px] leading-7 text-slate-400 sm:text-[15px]">

                  <p>
                    I enjoy transforming ideas into functional,
                    intuitive and user-friendly digital experiences.
                    My goal is to create software that is not only
                    technically strong but also enjoyable to use.
                  </p>

                  <p>
                    My development experience spans React,
                    TypeScript, JavaScript, Node.js, Express.js and
                    MongoDB, supported by Redux Toolkit, Axios,
                    Socket.io and modern UI technologies.
                  </p>

                  <p>
                    I've worked on dashboards, authentication,
                    REST APIs, database systems, fleet management
                    and real-time applications.
                  </p>

                </div>

                {/* Current Focus */}

                <div className="mt-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-slate-950/60">

                  <div className="flex items-start gap-4 p-5">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-400/10 text-blue-400">
                      <FaBriefcase size={17} />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                        Current Focus
                      </p>

                      <p className="mt-1 font-bold text-white">
                        Full Stack Web Development
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Creating scalable products with modern
                        JavaScript technologies.
                      </p>
                    </div>

                  </div>

                  <div className="h-px bg-white/[0.06]" />

                  <div className="flex items-start gap-4 p-5">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 text-cyan-400">
                      <FaGraduationCap size={19} />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
                        Education
                      </p>

                      <p className="mt-1 font-bold text-white">
                        Master of Computer Applications
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Computer Applications & Software Development
                      </p>
                    </div>

                  </div>

                </div>

                {/* CTA */}

                <a
                  href="#contact"
                  className="group mt-7 inline-flex items-center gap-2 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.04] px-4 py-2.5 text-xs font-bold text-cyan-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/25 hover:bg-cyan-400/[0.08]"
                >
                  Let's build something great

                  <FaArrowRight
                    size={11}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

              </div>
            </div>
          </motion.div>

          {/* =======================================================
              HIGHLIGHT CARDS
          ======================================================= */}

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="grid h-full gap-4 sm:grid-cols-2">

              {highlights.map((item, index) => (
                <motion.article
                  key={item.title}
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
                    duration: shouldReduceMotion ? 0 : 0.55,
                    delay: shouldReduceMotion
                      ? 0
                      : index * 0.08,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -8,
                        }
                  }
                  className={`group relative min-h-[260px] overflow-hidden rounded-[1.7rem] border border-white/[0.08] bg-gradient-to-br ${item.accent} bg-white/[0.025] p-6 shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/20 hover:shadow-[0_20px_60px_rgba(34,211,238,0.06)]`}
                >

                  {/* Number */}

                  <div className="absolute right-5 top-5 font-mono text-[10px] font-bold tracking-widest text-slate-700 transition-colors duration-300 group-hover:text-cyan-400/40">
                    {item.number}
                  </div>

                  {/* Glow */}

                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/[0.05] blur-3xl opacity-0 transition duration-700 group-hover:opacity-100" />

                  {/* Icon */}

                  <div className="relative mb-7 flex h-13 w-13 items-center justify-center rounded-2xl border border-white/[0.07] bg-slate-950/70 text-cyan-400 shadow-xl shadow-black/10 transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/10">
                    {item.icon}
                  </div>

                  {/* Content */}

                  <h4 className="relative text-lg font-bold tracking-tight text-white">
                    {item.title}
                  </h4>

                  <p className="relative mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                  {/* Bottom line */}

                  <div className="absolute bottom-0 left-6 h-px w-8 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-20" />

                  {/* Check */}

                  <FaCheckCircle
                    size={15}
                    className="absolute bottom-6 right-6 text-slate-800 transition-all duration-300 group-hover:text-cyan-400"
                  />

                </motion.article>
              ))}

            </div>
          </motion.div>
        </div>

        {/* =========================================================
            STATS
        ========================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-7 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] shadow-2xl shadow-black/20 backdrop-blur-2xl"
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
                className={`group relative p-7 sm:p-9 ${
                  index < 2
                    ? "border-b border-white/[0.07] md:border-b-0"
                    : ""
                } ${
                  index % 2 === 0
                    ? "border-r border-white/[0.07]"
                    : ""
                } ${
                  index === 1
                    ? "md:border-r"
                    : ""
                } ${
                  index === 2
                    ? "md:border-r"
                    : ""
                }`}
              >
                <div className="flex items-center justify-center gap-3">

                  <p className="text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">
                    {stat.value}
                  </p>

                  {index === 0 && (
                    <FaBolt
                      size={13}
                      className="text-cyan-400 opacity-50 transition group-hover:opacity-100"
                    />
                  )}

                </div>

                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400/70">
                  {stat.label}
                </p>

                <p className="mt-2 text-xs text-slate-600">
                  {stat.description}
                </p>

                <div className="mx-auto mt-5 h-px w-7 bg-white/10 transition-all duration-500 group-hover:w-14 group-hover:bg-cyan-400/50" />
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* =========================================================
            TECHNOLOGY STACK
        ========================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mt-7 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-9"
        >

          {/* Decorative glows */}

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/[0.05] blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 left-10 h-52 w-52 rounded-full bg-purple-500/[0.04] blur-3xl" />

          {/* Header */}

          <div className="relative flex flex-col gap-7 md:flex-row md:items-end md:justify-between">

            <div>
              <div className="mb-3 flex items-center gap-2">
                <FaTerminal
                  size={12}
                  className="text-cyan-400"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-400">
                  My Toolkit
                </span>
              </div>

              <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
                Technologies I Work With
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                A carefully selected toolkit for building,
                scaling and maintaining modern full-stack
                applications.
              </p>
            </div>

            {/* Stack visual */}

            <div className="hidden items-center gap-2 md:flex">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.05] text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/25">
                <FaReact size={19} />
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/10 bg-emerald-400/[0.05] text-emerald-400 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/25">
                <FaDatabase size={18} />
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/10 bg-purple-400/[0.05] text-purple-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/25">
                <FaServer size={18} />
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-400/[0.05] text-blue-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/25">
                <FaLayerGroup size={18} />
              </div>

            </div>
          </div>

          {/* Divider */}

          <div className="relative my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Technologies */}

          <div className="relative flex flex-wrap gap-2.5">

            {technologies.map((technology, index) => (
              <motion.div
                key={technology}
                initial={{
                  opacity: 0,
                  scale: shouldReduceMotion ? 1 : 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.3,
                  delay: shouldReduceMotion
                    ? 0
                    : index * 0.035,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -4,
                        scale: 1.03,
                      }
                }
                className="group flex cursor-default items-center gap-2 rounded-xl border border-white/[0.08] bg-slate-950/60 px-4 py-2.5 text-xs font-semibold text-slate-300 shadow-sm transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-slate-700 transition-colors duration-300 group-hover:bg-cyan-400" />

                {technology}
              </motion.div>
            ))}

          </div>

          {/* Bottom status */}

          <div className="relative mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-5">

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[10px] font-medium uppercase tracking-wider text-slate-600">
                Stack actively evolving
              </span>
            </div>

            <span className="font-mono text-[10px] text-slate-700">
              developer@portfolio:~$
            </span>

          </div>
        </motion.div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mt-14 flex flex-col items-center justify-center gap-3 text-center"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-400/30" />

            <FaCircle
              size={4}
              className="text-cyan-400/50"
            />

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400/30" />
          </div>

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-600">
            Always learning • Always building • Always improving
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;