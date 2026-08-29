
import { motion, useReducedMotion, type Variants } from "framer-motion";
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
} from "react-icons/fa";

type Highlight = {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;
};

type Stat = {
  value: string;
  label: string;
};

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  const highlights: Highlight[] = [
    {
      icon: <FaCode />,
      title: "Clean Architecture",
      description:
        "I build structured, reusable and maintainable applications with a strong focus on code quality and scalability.",
      accent: "from-cyan-400/20 to-blue-500/5",
    },
    {
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      description:
        "From polished React interfaces to secure Node.js APIs and MongoDB databases, I work across the complete stack.",
      accent: "from-blue-400/20 to-indigo-500/5",
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
      description:
        "I turn complex requirements into practical, intuitive and reliable digital solutions that solve real problems.",
      accent: "from-purple-400/20 to-pink-500/5",
    },
    {
      icon: <FaRocket />,
      title: "Performance First",
      description:
        "I care about responsive interfaces, efficient APIs, optimized data flow and smooth user experiences.",
      accent: "from-emerald-400/20 to-cyan-500/5",
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
    },
    {
      value: "5+",
      label: "Projects Built",
    },
    {
      value: "MERN",
      label: "Primary Stack",
    },
    {
      value: "24/7",
      label: "Learning Mindset",
    },
  ];
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: shouldReduceMotion ? 0 : 30,
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
    x: shouldReduceMotion ? 0 : -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: shouldReduceMotion ? 0 : 0.7,
      ease: "easeOut",
    },
  },
};

const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: shouldReduceMotion ? 0 : 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: shouldReduceMotion ? 0 : 0.7,
      ease: "easeOut",
    },
  },
};

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-[-180px] top-32 h-[420px] w-[420px] rounded-full bg-cyan-500/[0.07] blur-[120px]" />

        <div className="absolute right-[-180px] top-[35%] h-[420px] w-[420px] rounded-full bg-blue-600/[0.06] blur-[120px]" />

        <div className="absolute bottom-[-200px] left-[35%] h-[400px] w-[400px] rounded-full bg-purple-600/[0.05] blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.04),transparent_35%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-400 shadow-lg shadow-cyan-500/[0.04]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            About Me
          </div>

          <h2
            id="about-heading"
            className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Building Digital
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
              Experiences That Matter
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
          >
            I'm a passionate MERN Stack Developer focused on creating
            modern, responsive and scalable applications that combine
            thoughtful design with reliable engineering.
          </p>
        </motion.div>

        {/* =========================================================
            MAIN GRID
        ========================================================= */}

        <div className="grid items-stretch gap-8 lg:grid-cols-5">

          {/* =======================================================
              PROFILE
          ======================================================= */}

          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-2"
          >
            <div className="group relative h-full overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-7 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-9">

              {/* Card glow */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.08] blur-3xl transition duration-700 group-hover:bg-cyan-400/[0.14]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[-100px] left-[-100px] h-56 w-56 rounded-full bg-blue-500/[0.06] blur-3xl"
              />

              {/* Profile heading */}

              <div className="relative flex items-center gap-5">
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 to-blue-500/10 text-cyan-400 shadow-xl shadow-cyan-500/10">
                    <FaLaptopCode size={28} />
                  </div>

                  <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-slate-950 bg-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                </div>

                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    MERN Stack Developer
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-white">
                    Abhay Tyagi
                  </h3>

                  <p className="mt-1 text-sm text-cyan-400">
                    Available for opportunities
                  </p>
                </div>
              </div>

              {/* Divider */}

              <div className="relative my-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Description */}

              <div className="relative space-y-5 text-[15px] leading-8 text-slate-400">

                <p>
                  I enjoy transforming ideas into functional,
                  intuitive and user-friendly digital experiences.
                  My focus is not only on making applications work,
                  but also on making them reliable and enjoyable to use.
                </p>

                <p>
                  My development experience includes React,
                  TypeScript, JavaScript, Node.js, Express.js and
                  MongoDB, supported by tools such as Redux Toolkit,
                  Axios and Socket.io.
                </p>

                <p>
                  I've worked on applications involving dashboards,
                  authentication, REST APIs, database management,
                  fleet management and real-time functionality.
                </p>

              </div>

              {/* Career focus */}

              <div className="relative mt-8 rounded-2xl border border-white/[0.08] bg-slate-950/50 p-5">

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-400/10 text-blue-400">
                    <FaBriefcase size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Current Focus
                    </p>

                    <p className="mt-1 font-semibold text-white">
                      Full Stack Web Development
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Building scalable products with modern
                      JavaScript technologies.
                    </p>
                  </div>
                </div>

              </div>

              {/* Education */}

              <div className="relative mt-4 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.045] p-5">

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                    <FaGraduationCap size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Education
                    </p>

                    <p className="mt-1 font-semibold text-white">
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
                className="group relative mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-400 transition-colors duration-300 hover:text-cyan-300"
              >
                Let's build something great

                <FaArrowRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>
          </motion.div>

          {/* =======================================================
              HIGHLIGHTS
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
                    y: shouldReduceMotion ? 0 : 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.5,
                    delay: shouldReduceMotion ? 0 : index * 0.08,
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -6,
                        }
                  }
                  className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br ${item.accent} bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:shadow-xl hover:shadow-cyan-500/[0.04]`}
                >

                  {/* Hover glow */}

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/[0.06] blur-2xl opacity-0 transition duration-500 group-hover:opacity-100"
                  />

                  <div className="relative mb-6 flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-slate-950/50 text-cyan-400 shadow-lg shadow-black/10 transition duration-300 group-hover:scale-110 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/10">
                      {item.icon}
                    </div>

                    <FaCheckCircle
                      size={16}
                      className="text-slate-700 transition duration-300 group-hover:text-cyan-400"
                    />

                  </div>

                  <h4 className="relative text-lg font-bold text-white">
                    {item.title}
                  </h4>

                  <p className="relative mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <div className="relative mt-5 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-16" />

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
          className="mt-8 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] backdrop-blur-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4">

            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`group relative p-7 text-center transition duration-300 hover:bg-white/[0.035] sm:p-8 ${
                  index < 2
                    ? "border-b border-white/[0.08] md:border-b-0"
                    : ""
                } ${
                  index % 2 === 0
                    ? "border-r border-white/[0.08] md:border-r"
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
                <p className="text-3xl font-black tracking-tight text-cyan-400 transition duration-300 group-hover:scale-105 sm:text-4xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {stat.label}
                </p>

                <div className="mx-auto mt-4 h-px w-8 bg-cyan-400/20 transition-all duration-300 group-hover:w-14 group-hover:bg-cyan-400/50" />
              </div>
            ))}

          </div>
        </motion.div>

        {/* =========================================================
            TECHNOLOGIES
        ========================================================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mt-8 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-xl sm:p-9"
        >

          {/* Background glow */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-400/[0.04] blur-3xl"
          />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

            <div className="max-w-xl">

              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-400">
                My Toolkit
              </p>

              <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Technologies I Work With
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                A modern collection of technologies I use to design,
                develop and deploy full-stack web applications.
              </p>

            </div>

            {/* Technology icons */}

            <div className="hidden items-center gap-3 md:flex">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.06] text-cyan-400 transition hover:scale-110 hover:border-cyan-400/20">
                <FaReact size={18} />
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/10 bg-emerald-400/[0.06] text-emerald-400 transition hover:scale-110 hover:border-emerald-400/20">
                <FaDatabase size={17} />
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/10 bg-purple-400/[0.06] text-purple-400 transition hover:scale-110 hover:border-purple-400/20">
                <FaServer size={17} />
              </div>

            </div>

          </div>

          {/* Technology pills */}

          <div className="relative mt-8 flex flex-wrap gap-3">

            {technologies.map((technology, index) => (
              <motion.span
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
                  delay: shouldReduceMotion ? 0 : index * 0.035,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -3,
                        scale: 1.03,
                      }
                }
                className="cursor-default rounded-xl border border-white/[0.08] bg-slate-950/60 px-4 py-2.5 text-sm font-medium text-slate-300 shadow-sm transition duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.05] hover:text-cyan-400"
              >
                {technology}
              </motion.span>
            ))}

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
          className="mt-10 text-center"
        >
          <p className="text-sm text-slate-600">
            Always learning. Always building. Always improving.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;