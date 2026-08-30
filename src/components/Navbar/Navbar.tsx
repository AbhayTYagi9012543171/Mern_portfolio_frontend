import {
  useEffect,
  useState,
  type MouseEvent,
} from "react";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";

import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/hooks";

import { toggleTheme } from "../../redux/themeSlice";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Services", href: "#services" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

const GITHUB_URL =
  "https://github.com/AbhayTYagi9012543171";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/abhay-tyagi-13b592323/";

const RESUME_URL = "/resume.pdf";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const theme = useAppSelector(
    (state) => state.theme.mode
  );

  const shouldReduceMotion = useReducedMotion();

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] =
    useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  /*
  |--------------------------------------------------------------------------
  | Scroll behavior
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 24);

      if (!isOpen) {
        if (
          currentScrollY > previousScrollY &&
          currentScrollY > 180
        ) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      }

      previousScrollY = currentScrollY;
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [isOpen]);

  /*
  |--------------------------------------------------------------------------
  | Active section observer
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const sectionIds = navItems.map((item) =>
      item.href.substring(1)
    );

    const sections = sectionIds
      .map((id) =>
        document.getElementById(id)
      )
      .filter(
        (section): section is HTMLElement =>
          section !== null
      );

    if (!sections.length) return;

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visibleSections = entries
            .filter(
              (entry) => entry.isIntersecting
            )
            .sort(
              (a, b) =>
                b.intersectionRatio -
                a.intersectionRatio
            );

          if (visibleSections.length) {
            setActiveSection(
              visibleSections[0].target.id
            );
          }
        },
        {
          root: null,
          rootMargin:
            "-18% 0px -65% 0px",
          threshold: [
            0.05,
            0.1,
            0.25,
            0.5,
          ],
        }
      );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Smooth navigation
  |--------------------------------------------------------------------------
  */

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();

    const id = href.replace("#", "");

    const target =
      document.getElementById(id);

    if (!target) return;

    setActiveSection(id);
    setIsOpen(false);
    setHidden(false);

    const navbarHeight = 88;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: Math.max(targetPosition, 0),
      behavior: shouldReduceMotion
        ? "auto"
        : "smooth",
    });

    window.history.replaceState(
      null,
      "",
      `#${id}`
    );
  };

  /*
  |--------------------------------------------------------------------------
  | Logo navigation
  |--------------------------------------------------------------------------
  */

  const handleLogoClick = (
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();

    setIsOpen(false);
    setHidden(false);
    setActiveSection("home");

    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion
        ? "auto"
        : "smooth",
    });

    window.history.replaceState(
      null,
      "",
      "#home"
    );
  };

  /*
  |--------------------------------------------------------------------------
  | Theme
  |--------------------------------------------------------------------------
  */

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  /*
  |--------------------------------------------------------------------------
  | Escape key
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Prevent body scroll on mobile
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /*
  |--------------------------------------------------------------------------
  | Close mobile menu on resize
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  return (
    <>
      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <motion.nav
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: hidden ? -110 : 0,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          duration: shouldReduceMotion
            ? 0
            : 0.35,
          ease: "easeOut",
        }}
        className="fixed inset-x-0 top-0 z-[100]"
        aria-label="Main navigation"
      >
        {/* Outer glass layer */}

        <div
          className={`mx-auto transition-all duration-300 ${
            scrolled
              ? "border-b border-white/10 bg-slate-950/85 shadow-2xl shadow-black/20 backdrop-blur-2xl"
              : "bg-transparent"
          }`}
        >
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[84px] lg:px-8">
            {/* =====================================================
                LOGO
            ===================================================== */}

            <a
              href="#home"
              onClick={handleLogoClick}
              className="group relative z-[110] shrink-0"
              aria-label="MERN Portfolio home"
            >
              <div className="flex items-center text-xl font-extrabold tracking-tight sm:text-2xl">
                <span className="text-white">
                  MERN
                </span>

                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </div>

              {/* Logo underline */}

              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>

            {/* =====================================================
                DESKTOP NAVIGATION
            ===================================================== */}

            <div className="hidden items-center xl:flex">
              <div className="flex items-center gap-1 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-1.5 backdrop-blur-md">
                {navItems.map((item) => {
                  const sectionId =
                    item.href.substring(1);

                  const isActive =
                    activeSection ===
                    sectionId;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(event) =>
                        handleNavigation(
                          event,
                          item.href
                        )
                      }
                      className={`relative rounded-xl px-3 py-2 text-[13px] font-medium transition-all duration-200 2xl:px-3.5 ${
                        isActive
                          ? "text-cyan-300"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="navbar-active-pill"
                          className="absolute inset-0 rounded-xl bg-cyan-400/10"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}

                      <span className="relative z-10">
                        {item.name}
                      </span>

                      {isActive && (
                        <motion.span
                          layoutId="navbar-active-line"
                          className="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-cyan-400"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* =====================================================
                DESKTOP ACTIONS
            ===================================================== */}

            <div className="hidden items-center gap-2 xl:flex">
              {/* Theme */}

              <button
                type="button"
                onClick={
                  handleThemeToggle
                }
                aria-label={
                  theme === "dark"
                    ? "Switch to light theme"
                    : "Switch to dark theme"
                }
                title={
                  theme === "dark"
                    ? "Switch to light theme"
                    : "Switch to dark theme"
                }
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
              >
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  <motion.span
                    key={theme}
                    initial={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.7,
                    }}
                    transition={{
                      duration:
                        shouldReduceMotion
                          ? 0
                          : 0.2,
                    }}
                  >
                    {theme === "dark" ? (
                      <FaSun size={15} />
                    ) : (
                      <FaMoon size={15} />
                    )}
                  </motion.span>
                </AnimatePresence>
              </button>

              {/* GitHub */}

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-transparent text-slate-400 transition-all duration-200 hover:border-white/10 hover:bg-white/5 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
              >
                <FaGithub
                  size={18}
                  className="transition-transform duration-200 group-hover:scale-110"
                />
              </a>

              {/* LinkedIn */}

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-transparent text-slate-400 transition-all duration-200 hover:border-white/10 hover:bg-white/5 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
              >
                <FaLinkedin
                  size={18}
                  className="transition-transform duration-200 group-hover:scale-110"
                />
              </a>

              {/* Resume */}

              <a
                href={RESUME_URL}
                download
                className="ml-1 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                <FaDownload size={11} />
                Resume
              </a>

              {/* Contact CTA */}

              <a
                href="#contact"
                onClick={(event) =>
                  handleNavigation(
                    event,
                    "#contact"
                  )
                }
                className="group ml-1 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-500/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
              >
                Let's Talk

                <FaArrowRight
                  size={10}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* =====================================================
                TABLET / MOBILE ACTIONS
            ===================================================== */}

            <div className="flex items-center gap-2 xl:hidden">
              {/* Mobile theme */}

              <button
                type="button"
                onClick={
                  handleThemeToggle
                }
                aria-label="Toggle theme"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
              >
                {theme === "dark" ? (
                  <FaSun size={15} />
                ) : (
                  <FaMoon size={15} />
                )}
              </button>

              {/* Menu button */}

              <button
                type="button"
                onClick={() =>
                  setIsOpen(
                    (previous) =>
                      !previous
                  )
                }
                aria-label={
                  isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                className="relative z-[110] flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
              >
                <AnimatePresence
                  mode="wait"
                  initial={false}
                >
                  <motion.span
                    key={
                      isOpen
                        ? "close"
                        : "menu"
                    }
                    initial={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.7,
                    }}
                    transition={{
                      duration:
                        shouldReduceMotion
                          ? 0
                          : 0.18,
                    }}
                  >
                    {isOpen ? (
                      <FaTimes />
                    ) : (
                      <FaBars />
                    )}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* =======================================================
              MOBILE MENU
          ======================================================= */}

          <AnimatePresence>
            {isOpen && (
              <motion.div
                id="mobile-navigation"
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "calc(100vh - 80px)",
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                }}
                transition={{
                  duration:
                    shouldReduceMotion
                      ? 0
                      : 0.3,
                  ease: "easeInOut",
                }}
                className="overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-2xl xl:hidden"
              >
                <div className="mx-auto flex h-full max-w-2xl flex-col px-5 py-6 sm:px-8">
                  {/* Mobile heading */}

                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                        Navigation
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Explore my portfolio
                      </p>
                    </div>

                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                      Available
                    </span>
                  </div>

                  {/* Links */}

                  <div className="flex-1 overflow-y-auto overscroll-contain pr-1">
                    <div className="space-y-1">
                      {navItems.map(
                        (
                          item,
                          index
                        ) => {
                          const sectionId =
                            item.href.substring(
                              1
                            );

                          const isActive =
                            activeSection ===
                            sectionId;

                          return (
                            <motion.a
                              key={
                                item.name
                              }
                              href={
                                item.href
                              }
                              initial={{
                                opacity: 0,
                                x: -20,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              transition={{
                                delay:
                                  shouldReduceMotion
                                    ? 0
                                    : index *
                                      0.035,
                              }}
                              onClick={(
                                event
                              ) =>
                                handleNavigation(
                                  event,
                                  item.href
                                )
                              }
                              className={`group relative flex items-center justify-between overflow-hidden rounded-2xl px-5 py-4 transition-all duration-200 ${
                                isActive
                                  ? "border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                                  : "border border-transparent text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              {/* Active glow */}

                              {isActive && (
                                <motion.span
                                  layoutId="mobile-active"
                                  className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-cyan-400"
                                />
                              )}

                              <span className="flex items-center gap-3">
                                <span
                                  className={`font-mono text-[10px] ${
                                    isActive
                                      ? "text-cyan-400/70"
                                      : "text-slate-600"
                                  }`}
                                >
                                  {String(
                                    index +
                                      1
                                  ).padStart(
                                    2,
                                    "0"
                                  )}
                                </span>

                                <span className="text-sm font-semibold">
                                  {
                                    item.name
                                  }
                                </span>
                              </span>

                              {isActive && (
                                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                              )}
                            </motion.a>
                          );
                        }
                      )}
                    </div>
                  </div>

                  {/* Mobile footer */}

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <div className="flex flex-wrap items-center gap-3">
                      {/* GitHub */}

                      <a
                        href={
                          GITHUB_URL
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-400"
                      >
                        <FaGithub />
                      </a>

                      {/* LinkedIn */}

                      <a
                        href={
                          LINKEDIN_URL
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-400"
                      >
                        <FaLinkedin />
                      </a>

                      {/* Resume */}

                      <a
                        href={
                          RESUME_URL
                        }
                        download
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-300 sm:flex-none"
                      >
                        <FaDownload size={12} />
                        Resume
                      </a>

                      {/* Contact */}

                      <a
                        href="#contact"
                        onClick={(
                          event
                        ) =>
                          handleNavigation(
                            event,
                            "#contact"
                          )
                        }
                        className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/10 transition hover:bg-cyan-300 sm:flex-none"
                      >
                        Let's Talk

                        <FaArrowRight
                          size={11}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* =========================================================
          MOBILE MENU BACKDROP
      ========================================================= */}

      <AnimatePresence>
        {isOpen && (
          <motion.button
            type="button"
            aria-label="Close navigation"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setIsOpen(false)
            }
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm xl:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;