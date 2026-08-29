import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaArrowUp,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaReact,
  FaServer,
} from "react-icons/fa";

interface NavigationItem {
  name: string;
  href: string;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation: NavigationItem[] = [
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
    "Redux Toolkit",
    "REST API",
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/AbhayTYagi9012543171",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/abhay-tyagi-13b592323/",
      icon: <FaLinkedin />,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/10 bg-slate-950"
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.03] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
        {/* =====================================================
            MAIN FOOTER GRID
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
            amount: 0.15,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              className="group inline-flex items-center gap-1 text-2xl font-bold tracking-tight"
              aria-label="Go to homepage"
            >
              <span className="text-white">MERN</span>

              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              MERN Stack Developer focused on building modern,
              responsive and scalable web applications with
              clean, reusable and maintainable code.
            </p>

            {/* Availability */}

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3.5 py-2 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              Available for opportunities
            </div>

            {/* Location */}

            <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
              <FaMapMarkerAlt className="text-cyan-400/70" />

              <span>Ghaziabad, Uttar Pradesh, India</span>
            </div>

            {/* Social Links */}

            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.name} profile`}
                  whileHover={{
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-400"
                >
                  {social.icon}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                aria-label="Contact me"
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-400"
              >
                <FaEnvelope />
              </motion.a>
            </div>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================== */}

          <div>
            <div className="flex items-center gap-2">
              <span className="h-5 w-1 rounded-full bg-cyan-400" />

              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
                Navigation
              </h3>
            </div>

            <nav
              aria-label="Footer navigation"
              className="mt-6"
            >
              <ul className="grid grid-cols-2 gap-x-6 gap-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-cyan-400"
                    >
                      <span className="h-1 w-1 rounded-full bg-slate-700 transition-colors group-hover:bg-cyan-400" />

                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* =================================================
              TECHNOLOGIES
          ================================================== */}

          <div>
            <div className="flex items-center gap-2">
              <span className="h-5 w-1 rounded-full bg-blue-400" />

              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
                Tech Stack
              </h3>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Technologies and tools I use to build modern
              full-stack applications.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-300 transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* Stack Icons */}

            <div className="mt-6 flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-400"
                title="React"
              >
                <FaReact />
              </div>

              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-400"
                title="Backend"
              >
                <FaServer />
              </div>

              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-purple-400"
                title="Full Stack Development"
              >
                <FaCode />
              </div>
            </div>
          </div>

          {/* =================================================
              CONNECT / CTA
          ================================================== */}

          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                <FaCode size={14} />
              </span>

              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
                Let's Connect
              </h3>
            </div>

            <h4 className="mt-5 text-xl font-bold leading-8 text-white">
              Have an idea?
              <br />
              Let's build it.
            </h4>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Have a project, internship opportunity, freelance
              requirement or collaboration idea? I'd love to
              hear from you.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {/* Contact Button */}

              <motion.a
                href="#contact"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                <FaEnvelope />

                Contact Me

                <FaArrowRight
                  size={12}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </motion.a>

              {/* Resume */}

              <motion.a
                href="/resume.pdf"
                download="Abhay-Tyagi-Resume.pdf"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:bg-cyan-300"
              >
                <FaDownload />

                Download Resume

                <FaArrowRight
                  size={12}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* =====================================================
            BOTTOM FOOTER
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

            <p className="mt-2 text-xs text-slate-600">
              Built with React, TypeScript, Tailwind CSS &
              Framer Motion.
            </p>
          </div>

          {/* Back To Top */}

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.95,
            }}
            aria-label="Back to top"
            className="group flex h-11 w-11 items-center justify-center self-start rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-400 sm:self-auto"
          >
            <FaArrowUp className="transition-transform duration-200 group-hover:-translate-y-1" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;