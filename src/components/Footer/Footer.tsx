import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaDownload,
  FaEnvelope,
  FaCode,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";

import { motion } from "framer-motion";

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

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/[0.08] bg-slate-950"
    >
      {/* =========================================================
          BACKGROUND EFFECTS
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Cyan glow */}

        <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/[0.055] blur-[120px]" />

        {/* Blue glow */}

        <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/[0.05] blur-[120px]" />

        {/* Purple glow */}

        <div className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.025] blur-[100px]" />
      </div>

      {/* Subtle developer grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">

        {/* =========================================================
            TOP BRAND STATEMENT
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mb-14 flex flex-col gap-5 border-b border-white/[0.07] pb-12 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">

            {/* Logo */}

            <a
              href="#home"
              aria-label="Go to homepage"
              className="group inline-flex items-center gap-1.5 text-2xl font-black tracking-tight"
            >
              <span className="text-white transition group-hover:text-slate-200">
                MERN
              </span>

              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </a>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              Building modern, responsive and scalable web applications
              with clean architecture, thoughtful UI and maintainable
              code.
            </p>
          </div>

          {/* Availability */}

          <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-4 py-2 text-xs font-semibold text-emerald-300 shadow-lg shadow-emerald-500/5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            Available for opportunities
          </div>
        </motion.div>

        {/* =========================================================
            MAIN FOOTER GRID
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.6,
            delay: 0.05,
          }}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >

          {/* =====================================================
              SOCIAL / ABOUT
          ===================================================== */}

          <div className="sm:col-span-2 lg:col-span-1">

            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                <FaCode size={15} />
              </span>

              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
                Developer
              </h3>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              Passionate about turning ideas into useful digital
              experiences and continuously improving my development
              skills.
            </p>

            {/* Social buttons */}

            <div className="mt-7 flex gap-3">

              <SocialLink
                href="https://github.com/AbhayTYagi9012543171"
                label="GitHub"
              >
                <FaGithub size={17} />
              </SocialLink>

              <SocialLink
                href="https://www.linkedin.com/in/abhay-tyagi-13b592323/"
                label="LinkedIn"
              >
                <FaLinkedin size={17} />
              </SocialLink>

              <SocialLink
                href="#contact"
                label="Contact"
              >
                <FaEnvelope size={16} />
              </SocialLink>

            </div>
          </div>

          {/* =====================================================
              NAVIGATION
          ===================================================== */}

          <div>

            <FooterHeading>
              Navigation
            </FooterHeading>

            <nav
              aria-label="Footer navigation"
              className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-slate-500 transition duration-200 hover:text-cyan-400"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-700 transition group-hover:bg-cyan-400" />

                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* =====================================================
              TECHNOLOGIES
          ===================================================== */}

          <div>

            <FooterHeading>
              Tech Stack
            </FooterHeading>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Technologies and tools I use to build full-stack
              applications.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">

              {technologies.map((technology, index) => (
                <motion.span
                  key={technology}
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
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -2,
                  }}
                  className="cursor-default rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs font-medium text-slate-400 transition duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
                >
                  {technology}
                </motion.span>
              ))}

            </div>
          </div>

          {/* =====================================================
              CTA
          ===================================================== */}

          <div>

            <div className="flex items-center gap-2">

              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400">
                <FaEnvelope size={14} />
              </span>

              <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
                Let's Connect
              </h3>

            </div>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Have a project, internship opportunity or idea?
              Let's build something meaningful together.
            </p>

            <div className="mt-6 flex flex-col gap-3">

              {/* Contact button */}

              <a
                href="#contact"
                className="group inline-flex items-center justify-between rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-3 text-sm font-semibold text-cyan-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.1]"
              >
                <span className="flex items-center gap-2">
                  <FaEnvelope size={13} />
                  Contact Me
                </span>

                <FaArrowRight
                  size={12}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              {/* Resume */}

              <a
                href="/resume.pdf"
                download
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-400/20"
              >
                <FaDownload size={13} />

                Download Resume
              </a>

            </div>
          </div>

        </motion.div>

        {/* =========================================================
            FEATURED CTA
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
          }}
          className="relative mt-16 overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.045] via-blue-500/[0.03] to-purple-500/[0.045] p-6 sm:p-8"
        >

          {/* Glow */}

          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/[0.08] blur-3xl" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-blue-500/[0.06] blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Open to opportunities
              </p>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                Let's create something great together.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
                I'm open to internships, freelance projects,
                collaborations and full-time development opportunities.
              </p>

            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08] hover:text-cyan-300"
            >
              Start a Conversation

              <FaArrowRight
                size={12}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>
        </motion.div>

        {/* =========================================================
            DIVIDER
        ========================================================= */}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />

        {/* =========================================================
            BOTTOM BAR
        ========================================================= */}

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
          className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        >

          {/* Copyright */}

          <div>

            <p className="text-sm text-slate-500">
              © {currentYear}{" "}
              <span className="font-medium text-slate-300">
                Abhay Tyagi
              </span>
              . All rights reserved.
            </p>

            <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-600">
              Built with
              <FaHeart
                size={10}
                className="text-cyan-500"
              />
              React, TypeScript & Tailwind CSS
            </p>

          </div>

          {/* Status */}

          <div className="flex items-center gap-4">

            <span className="hidden h-5 w-px bg-white/10 sm:block" />

            <span className="text-xs text-slate-600">
              Ghaziabad, India
            </span>

            {/* Back to top */}

            <motion.a
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.94,
              }}
              href="#home"
              aria-label="Back to top"
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-500 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-400"
            >
              <FaArrowUp
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </motion.a>

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
}

const FooterHeading = ({
  children,
}: FooterHeadingProps) => {
  return (
    <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
      {children}
    </h3>
  );
};

/* =============================================================
   SOCIAL LINK
============================================================= */

interface SocialLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

const SocialLink = ({
  href,
  label,
  children,
}: SocialLinkProps) => {
  const isExternal = href.startsWith("http");

  return (
    <motion.a
      whileHover={{
        y: -4,
      }}
      whileTap={{
        scale: 0.95,
      }}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-400"
    >
      {children}
    </motion.a>
  );
};

export default Footer;