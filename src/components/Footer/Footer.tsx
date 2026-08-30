import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaDownload,
  FaEnvelope,
  FaCode,
  FaHeart,
  FaArrowRight,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const technologies = [
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
  ];

  const socialLinks = [
    {
      href: "https://github.com/AbhayTYagi9012543171",
      label: "GitHub",
      description: "View my repositories",
      icon: <FaGithub size={19} />,
    },
    {
      href: "https://www.linkedin.com/in/abhay-tyagi-13b592323/",
      label: "LinkedIn",
      description: "Connect professionally",
      icon: <FaLinkedin size={19} />,
    },
  ];

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/[0.08] bg-slate-950"
    >
      {/* =========================================================
          PREMIUM BACKGROUND
      ========================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Large ambient glows */}

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
            opacity: [0.45, 0.7, 0.45],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 -top-40 h-[32rem] w-[32rem] rounded-full bg-cyan-500/[0.06] blur-[130px]"
        />

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 25, 0],
            opacity: [0.4, 0.65, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-48 -right-48 h-[34rem] w-[34rem] rounded-full bg-blue-500/[0.055] blur-[130px]"
        />

        <div className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.025] blur-[120px]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top radial fade */}

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
        {/* =========================================================
            TOP BRAND AREA
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
            duration: 0.7,
          }}
          className="relative mb-16 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-9 lg:p-10"
        >
          {/* Card glow */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/[0.055] blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 h-64 w-64 rounded-full bg-blue-500/[0.04] blur-3xl"
          />

          {/* Top accent */}

          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Brand */}

            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-400 shadow-lg shadow-cyan-500/5">
                  <FaCode size={18} />
                </span>

                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400/70">
                  Full-Stack Developer
                </span>
              </div>

              <a
                href="#home"
                aria-label="Go to homepage"
                className="group inline-flex items-center gap-1 text-3xl font-black tracking-tight sm:text-4xl"
              >
                <span className="text-white transition duration-300 group-hover:text-slate-200">
                  MERN
                </span>

                <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </a>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
                Building modern, responsive and scalable web applications
                with clean architecture, thoughtful interfaces and
                maintainable code.
              </p>

              {/* Mini metadata */}

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-slate-400">
                  <FaMapMarkerAlt className="text-cyan-400" />
                  Ghaziabad, India
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs text-slate-400">
                  <FaCode className="text-cyan-400" />
                  MERN Stack
                </span>
              </div>
            </div>

            {/* Availability */}

            <div className="shrink-0">
              <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.035] p-5 shadow-lg shadow-emerald-500/[0.03]">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                    <span className="relative h-3 w-3 rounded-full bg-emerald-400" />
                  </span>

                  <div>
                    <p className="text-sm font-bold text-emerald-300">
                      Available
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Open to opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            MAIN FOOTER GRID
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
            amount: 0.12,
          }}
          transition={{
            duration: 0.7,
            delay: 0.05,
          }}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* =====================================================
              DEVELOPER
          ====================================================== */}

          <div className="lg:col-span-1">
            <FooterHeading
              icon={<FaCode size={13} />}
              eyebrow="Profile"
            >
              Developer
            </FooterHeading>

            <p className="mt-5 max-w-sm text-sm leading-8 text-slate-500">
              Passionate about turning ideas into useful digital experiences
              while continuously improving development skills and engineering
              practices.
            </p>

            {/* Social cards */}

            <div className="mt-7 space-y-3">
              {socialLinks.map((social) => {
                const isExternal = social.href.startsWith("http");

                return (
                  <motion.a
                    key={social.label}
                    whileHover={{
                      x: 4,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    href={social.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-slate-950 text-slate-400 transition duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-400">
                      {social.icon}
                    </span>

                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-slate-300 transition group-hover:text-cyan-300">
                        {social.label}
                      </span>

                      <span className="block text-xs text-slate-600">
                        {social.description}
                      </span>
                    </span>

                    <FaExternalLinkAlt
                      size={9}
                      className="ml-auto text-slate-700 transition duration-300 group-hover:text-cyan-400"
                    />
                  </motion.a>
                );
              })}

              {/* Contact */}

              <motion.a
                whileHover={{
                  x: 4,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                href="#contact"
                className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-slate-950 text-slate-400 transition group-hover:border-cyan-400/20 group-hover:text-cyan-400">
                  <FaEnvelope size={16} />
                </span>

                <span>
                  <span className="block text-sm font-semibold text-slate-300 transition group-hover:text-cyan-300">
                    Contact
                  </span>

                  <span className="block text-xs text-slate-600">
                    Send me a message
                  </span>
                </span>

                <FaArrowRight
                  size={10}
                  className="ml-auto text-slate-700 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-400"
                />
              </motion.a>
            </div>
          </div>

          {/* =====================================================
              NAVIGATION
          ====================================================== */}

          <div>
            <FooterHeading eyebrow="Explore">
              Navigation
            </FooterHeading>

            <nav
              aria-label="Footer navigation"
              className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4"
            >
              {navigation.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{
                    x: 4,
                  }}
                  className="group flex items-center gap-2 text-sm text-slate-500 transition duration-200 hover:text-cyan-400"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-md border border-white/[0.05] bg-white/[0.02] font-mono text-[8px] text-slate-700 transition group-hover:border-cyan-400/20 group-hover:text-cyan-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{item.name}</span>
                </motion.a>
              ))}
            </nav>

            {/* Quick status */}

            <div className="mt-8 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
              <div className="flex items-center gap-2">
                <FaCheckCircle
                  size={12}
                  className="text-cyan-400"
                />

                <span className="text-xs font-semibold text-slate-300">
                  Portfolio Status
                </span>
              </div>

              <p className="mt-2 text-xs leading-6 text-slate-600">
                Continuously improving and adding new projects.
              </p>
            </div>
          </div>

          {/* =====================================================
              TECH STACK
          ====================================================== */}

          <div>
            <FooterHeading
              icon={<FaRocket size={13} />}
              eyebrow="Toolkit"
            >
              Tech Stack
            </FooterHeading>

            <p className="mt-5 text-sm leading-8 text-slate-500">
              Technologies and tools I use to design, develop and deploy
              full-stack applications.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2">
              {technologies.map((technology, index) => (
                <motion.div
                  key={technology}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className="group flex items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3 py-3 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60 transition group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(34,211,238,0.5)]" />

                  <span className="text-xs font-medium text-slate-500 transition group-hover:text-cyan-300">
                    {technology}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stack indicator */}

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.16em] text-slate-600">
                  Development Focus
                </span>

                <span className="font-mono text-[10px] text-cyan-400">
                  MERN
                </span>
              </div>

              <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: "88%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                />
              </div>
            </div>
          </div>

          {/* =====================================================
              CONNECT
          ====================================================== */}

          <div>
            <FooterHeading
              icon={<FaEnvelope size={13} />}
              eyebrow="Contact"
            >
              Let's Connect
            </FooterHeading>

            <p className="mt-5 text-sm leading-8 text-slate-500">
              Have a project, internship opportunity or an idea? Let's build
              something meaningful together.
            </p>

            <div className="mt-7 space-y-3">
              {/* Contact */}

              <motion.a
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                href="#contact"
                className="group flex items-center justify-between rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-3.5 text-sm font-semibold text-cyan-300 shadow-lg shadow-cyan-500/[0.03] transition duration-300 hover:border-cyan-400/35 hover:bg-cyan-400/[0.09]"
              >
                <span className="flex items-center gap-2">
                  <FaEnvelope size={13} />
                  Contact Me
                </span>

                <FaArrowRight
                  size={11}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>

              {/* Resume */}

              <motion.a
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                href="/resume.pdf"
                download
                className="group flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/10 transition duration-300 hover:bg-cyan-300 hover:shadow-cyan-400/20"
              >
                <FaDownload size={13} />

                Download Resume

                <FaArrowRight
                  size={10}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
            </div>

            {/* Availability note */}

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
              <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.4)]" />

              <div>
                <p className="text-xs font-semibold text-slate-300">
                  Open to opportunities
                </p>

                <p className="mt-1 text-xs leading-6 text-slate-600">
                  Internships, collaborations and development opportunities.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            FEATURED CTA
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
          }}
          className="group relative mt-16 overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.055] via-blue-500/[0.035] to-purple-500/[0.055] p-7 sm:p-9"
        >
          {/* Glows */}

          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.08] blur-3xl transition duration-700 group-hover:bg-cyan-400/[0.12]" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-blue-500/[0.06] blur-3xl" />

          {/* Border accent */}

          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />

                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400">
                  Open to opportunities
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
                Let's create something{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  great together.
                </span>
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                I'm open to internships, freelance projects, collaborations
                and full-time development opportunities.
              </p>
            </div>

            <motion.a
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.97,
              }}
              href="#contact"
              className="group/button inline-flex shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08] hover:text-cyan-300"
            >
              Start a Conversation

              <FaArrowRight
                size={11}
                className="transition-transform duration-300 group-hover/button:translate-x-1"
              />
            </motion.a>
          </div>
        </motion.div>

        {/* =========================================================
            DIVIDER
        ========================================================== */}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />

        {/* =========================================================
            BOTTOM BAR
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
            duration: 0.6,
          }}
          className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Copyright */}

          <div>
            <p className="text-sm text-slate-500">
              © {currentYear}{" "}
              <span className="font-semibold text-slate-300">
                Abhay Tyagi
              </span>
              . All rights reserved.
            </p>

            <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-600">
              Crafted with
              <FaHeart
                size={9}
                className="text-cyan-500"
              />
              React, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Bottom actions */}

          <div className="flex items-center gap-4">
            <div className="hidden h-5 w-px bg-white/10 sm:block" />

            <span className="flex items-center gap-2 text-xs text-slate-600">
              <FaMapMarkerAlt
                size={10}
                className="text-cyan-500/70"
              />
              Ghaziabad, India
            </span>

            <motion.a
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.94,
              }}
              href="#home"
              aria-label="Back to top"
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-500 shadow-lg transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-400"
            >
              <FaArrowUp
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </motion.a>
          </div>
        </motion.div>

        {/* =========================================================
            FINAL SIGNATURE
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
          className="mt-10 flex justify-center"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-white/[0.08]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-700">
              Build · Learn · Ship · Repeat
            </span>

            <span className="h-px w-8 bg-white/[0.08]" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

/* =============================================================
   FOOTER HEADING
============================================================= */

interface FooterHeadingProps {
  children: React.ReactNode;
  eyebrow?: string;
  icon?: React.ReactNode;
}

const FooterHeading = ({
  children,
  eyebrow,
  icon,
}: FooterHeadingProps) => {
  return (
    <div>
      {eyebrow && (
        <p className="mb-2 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-400/60">
          {eyebrow}
        </p>
      )}

      <div className="flex items-center gap-2.5">
        {icon && (
          <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-400">
            {icon}
          </span>
        )}

        <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
          {children}
        </h3>
      </div>
    </div>
  );
};

export default Footer;