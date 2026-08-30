import {
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaSearch,
  FaFilter,
  FaTimes,
  FaStar,
  FaArrowRight,
  FaLayerGroup,
  FaRocket,
  FaCheckCircle,
  FaChevronDown,
  FaCircle,
  FaEye,
  FaBolt,
} from "react-icons/fa";

import api from "../../services/api";
import type { Project } from "../../types";

/* =========================================================
   FALLBACK PROJECTS
========================================================= */

const fallbackProjects: Project[] = [
  {
    _id: "fleetdash",
    slug: "fleetdash",
    title: "FleetDash",
    description:
      "A full-stack fleet management platform for monitoring vehicles, drivers, trips, analytics and real-time tracking.",
    category: "MERN Stack",
    image: "/projects/fleet-dash.png",
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Socket.io",
      "Tailwind CSS",
    ],
    features: [
      "Fleet Dashboard",
      "Vehicle Management",
      "Driver Management",
      "Live Tracking",
      "Analytics",
      "Alerts",
    ],
    featured: true,
    liveDemo: "#",
    github: "#",
  },

  {
    _id: "syncdoc",
    slug: "syncdoc",
    title: "SyncDoc",
    description:
      "A collaborative document platform that allows multiple users to edit documents in real time with modern web technologies.",
    category: "MERN Stack",
    image: "/projects/sync-doc.png.png",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Yjs",
      "JWT",
    ],
    features: [
      "Real-time Collaboration",
      "Document Management",
      "Authentication",
      "Live Editing",
      "Version History",
      "PDF Export",
    ],
    featured: true,
    liveDemo: "#",
    github: "#",
  },

  {
    _id: "url-shortener",
    slug: "url-shortener",
    title: "URL Shortener",
    description:
      "A full-stack URL shortening application that converts long URLs into short, shareable links with a simple and responsive interface.",
    category: "MERN Stack",
    image: "/projects/url-shortener.png.png",
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
      "Tailwind CSS",
    ],
    features: [
      "URL Shortening",
      "Custom Short URLs",
      "Copy Short URL",
      "Responsive UI",
      "API Integration",
      "URL Management",
    ],
    featured: true,
    liveDemo: "#",
    github: "#",
  },
];

/* =========================================================
   PROJECTS
========================================================= */

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [error, setError] = useState("");
  const [showAll, setShowAll] = useState(false);

  /* =======================================================
     FETCH PROJECTS
  ======================================================= */

  useEffect(() => {
    let mounted = true;

    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get("/projects");

        const data = response.data?.data;

        if (
          mounted &&
          Array.isArray(data) &&
          data.length > 0
        ) {
          setProjects(data);
        } else if (mounted) {
          setProjects(fallbackProjects);
        }
      } catch (err) {
        console.error(
          "Failed to fetch projects:",
          err
        );

        if (mounted) {
          setProjects(fallbackProjects);

          setError(
            "Live project data is temporarily unavailable. Showing featured projects."
          );
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchProjects();

    return () => {
      mounted = false;
    };
  }, []);

  /* =======================================================
     CATEGORIES
  ======================================================= */

  const categories = useMemo(() => {
    const unique = projects
      .map((project) => project.category)
      .filter(Boolean);

    return [
      "All",
      ...Array.from(new Set(unique)),
    ];
  }, [projects]);

  /* =======================================================
     FILTERED PROJECTS
  ======================================================= */

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesSearch =
        !query ||
        project.title
          .toLowerCase()
          .includes(query) ||
        project.description
          .toLowerCase()
          .includes(query) ||
        project.category
          .toLowerCase()
          .includes(query) ||
        project.technologies?.some(
          (technology) =>
            technology
              .toLowerCase()
              .includes(query)
        ) ||
        project.features?.some(
          (feature) =>
            feature
              .toLowerCase()
              .includes(query)
        );

      const matchesCategory =
        category === "All" ||
        project.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });
  }, [
    projects,
    search,
    category,
  ]);

  /* =======================================================
     VISIBLE PROJECTS
  ======================================================= */

  const visibleProjects = useMemo(() => {
    if (showAll) {
      return filteredProjects;
    }

    return filteredProjects.slice(0, 6);
  }, [
    filteredProjects,
    showAll,
  ]);

  /* =======================================================
     CLEAR FILTERS
  ======================================================= */

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setShowAll(false);
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 px-4 py-24 sm:px-6 sm:py-28 lg:py-36"
    >
      {/* ===================================================
          CINEMATIC BACKGROUND
      =================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Main cyan aura */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[-12rem] h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-cyan-500 blur-[150px]"
        />

        {/* Left blue aura */}

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-52 top-1/3 h-[30rem] w-[30rem] rounded-full bg-blue-600/[0.045] blur-[130px]"
        />

        {/* Right purple aura */}

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-52 bottom-0 h-[30rem] w-[30rem] rounded-full bg-purple-600/[0.045] blur-[130px]"
        />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Radial fade */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.35)_70%,rgba(2,6,23,0.75)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =================================================
            HEADER
        ================================================= */}

        <SectionHeader
          eyebrow="Selected Work"
          title={
            <>
              Building digital experiences
              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                that actually solve problems.
              </span>
            </>
          }
          description="A curated collection of full-stack applications, experiments and production-focused projects crafted with modern technologies, thoughtful architecture and attention to detail."
        />

        {/* =================================================
            STATS
        ================================================= */}

        {!loading && (
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
            className="mx-auto mb-14 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            <OverviewStat
              icon={<FaLayerGroup />}
              value={projects.length}
              label="Projects"
            />

            <OverviewStat
              icon={<FaRocket />}
              value={
                projects.filter(
                  (project) =>
                    project.featured
                ).length
              }
              label="Featured"
            />

            <OverviewStat
              icon={<FaCode />}
              value={
                new Set(
                  projects.flatMap(
                    (project) =>
                      project.technologies ||
                      []
                  )
                ).size
              }
              label="Technologies"
            />

            <OverviewStat
              icon={<FaBolt />}
              value="∞"
              label="Ideas"
            />
          </motion.div>
        )}

        {/* =================================================
            FILTER / SEARCH
        ================================================= */}

        {!loading && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
            }}
            className="relative mb-12 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-5"
          >
            {/* Filter glow */}

            <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/[0.05] blur-3xl" />

            <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              {/* Search */}

              <div className="relative w-full lg:max-w-lg">
                <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-500" />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => {
                    setSearch(
                      event.target.value
                    );
                    setShowAll(false);
                  }}
                  placeholder="Search projects, technologies, features..."
                  aria-label="Search projects"
                  className="h-13 w-full rounded-xl border border-white/10 bg-slate-950/70 pl-11 pr-11 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-400/40 focus:bg-slate-950 focus:ring-4 focus:ring-cyan-400/[0.06]"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() =>
                      setSearch("")
                    }
                    aria-label="Clear project search"
                    className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500 transition hover:bg-white/10 hover:text-white"
                  >
                    <FaTimes size={12} />
                  </button>
                )}
              </div>

              {/* Categories */}

              <div className="flex flex-wrap items-center gap-2">
                <div className="mr-1 hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600 xl:flex">
                  <FaFilter />
                  Filter
                </div>

                {categories.map(
                  (item) => {
                    const active =
                      category === item;

                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          setCategory(item);
                          setShowAll(false);
                        }}
                        className={`relative overflow-hidden rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
                          active
                            ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20"
                            : "border border-white/10 bg-white/[0.025] text-slate-400 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:text-white"
                        }`}
                      >
                        {active && (
                          <motion.span
                            layoutId="activeCategory"
                            className="absolute inset-0 bg-cyan-400"
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 30,
                            }}
                          />
                        )}

                        <span className="relative z-10">
                          {item}
                        </span>
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            {(search ||
              category !== "All") && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                className="relative mt-4 flex flex-wrap items-center gap-3 border-t border-white/5 pt-4"
              >
                <span className="text-xs text-slate-600">
                  Matching results
                </span>

                <span className="rounded-lg border border-cyan-400/10 bg-cyan-400/[0.07] px-3 py-1.5 text-xs font-semibold text-cyan-300">
                  {filteredProjects.length}{" "}
                  project
                  {filteredProjects.length !==
                  1
                    ? "s"
                    : ""}
                </span>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs font-medium text-slate-500 transition hover:text-cyan-400"
                >
                  Reset filters
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* =================================================
            API STATUS
        ================================================= */}

        <AnimatePresence>
          {!loading && error && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              className="mb-8"
            >
              <div className="rounded-2xl border border-yellow-400/10 bg-yellow-400/[0.04] px-5 py-3 text-center text-xs text-yellow-300/80">
                {error}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =================================================
            LOADING
        ================================================= */}

        {loading && <ProjectSkeleton />}

        {/* =================================================
            PROJECTS
        ================================================= */}

        {!loading && (
          <>
            {visibleProjects.length > 0 ? (
              <motion.div
                layout
                className="grid gap-7 md:grid-cols-2 xl:grid-cols-3"
              >
                <AnimatePresence mode="popLayout">
                  {visibleProjects.map(
                    (
                      project,
                      index
                    ) => (
                      <ProjectCard
                        key={
                          project._id ||
                          project.slug
                        }
                        project={
                          project
                        }
                        index={index}
                      />
                    )
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <EmptyState
                onClear={
                  clearFilters
                }
              />
            )}

            {/* =================================================
                SHOW ALL
            ================================================= */}

            {filteredProjects.length >
              6 && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="mt-14 text-center"
              >
                <button
                  type="button"
                  onClick={() =>
                    setShowAll(
                      (value) =>
                        !value
                    )
                  }
                  className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:text-cyan-300 hover:shadow-cyan-500/10"
                >
                  {showAll
                    ? "Show Less"
                    : `View All ${filteredProjects.length} Projects`}

                  <FaChevronDown
                    size={10}
                    className={`transition-transform duration-300 ${
                      showAll
                        ? "rotate-180"
                        : "group-hover:translate-y-1"
                    }`}
                  />
                </button>
              </motion.div>
            )}

            {filteredProjects.length >
              0 && (
              <p className="mt-7 text-center text-[10px] font-medium uppercase tracking-[0.18em] text-slate-700">
                Showing{" "}
                {
                  visibleProjects.length
                }{" "}
                of{" "}
                {
                  filteredProjects.length
                }{" "}
                matching projects
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
};

/* =========================================================
   SECTION HEADER
========================================================= */

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
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
      className="mx-auto mb-16 max-w-4xl text-center"
    >
      {/* Eyebrow */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.92,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.45,
        }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.055] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400 shadow-lg shadow-cyan-500/5"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400 opacity-50" />

          <span className="relative h-2 w-2 rounded-full bg-cyan-400" />
        </span>

        {eyebrow}
      </motion.div>

      {/* Heading */}

      <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {/* Description */}

      <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
        {description}
      </p>

      {/* Decorative divider */}

      <div className="mx-auto mt-9 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/50" />

        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

        <span className="h-px w-20 bg-gradient-to-r from-cyan-400/30 to-blue-400/30" />

        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50" />

        <span className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400/50" />
      </div>
    </motion.div>
  );
};

/* =========================================================
   OVERVIEW STAT
========================================================= */

interface OverviewStatProps {
  icon: ReactNode;
  value: number | string;
  label: string;
}

const OverviewStat = ({
  icon,
  value,
  label,
}: OverviewStatProps) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-center shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.045]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/[0.03] via-transparent to-blue-500/[0.03] opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative mx-auto flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.07] text-cyan-400 transition duration-300 group-hover:scale-110 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.1]">
        {icon}
      </div>

      <p className="relative mt-3 text-xl font-black tracking-tight text-white">
        {value}
      </p>

      <p className="relative mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-600">
        {label}
      </p>
    </motion.div>
  );
};

/* =========================================================
   PROJECT CARD
========================================================= */

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({
  project,
  index,
}: ProjectCardProps) => {
  const hasLiveDemo = Boolean(
    project.liveDemo &&
      project.liveDemo !== "#"
  );

  const hasGithub = Boolean(
    project.github &&
      project.github !== "#"
  );

  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 45,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.95,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.055,
      }}
      whileHover={{
        y: -9,
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] shadow-2xl shadow-black/20 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/25 hover:bg-white/[0.045] hover:shadow-cyan-500/[0.07]"
    >
      {/* =================================================
          CARD GLOW
      ================================================= */}

      <div className="pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full bg-cyan-400/[0.035] blur-3xl transition duration-500 group-hover:bg-cyan-400/[0.09]" />

      <div className="pointer-events-none absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-blue-500/[0.025] blur-3xl transition duration-500 group-hover:bg-blue-500/[0.07]" />

      {/* Top line */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* =================================================
          PROJECT IMAGE
      ================================================= */}

      <div className="relative mx-3 mt-3 overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-slate-900">
        {project.image ? (
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              loading={
                index < 3
                  ? "eager"
                  : "lazy"
              }
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            {/* Image overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-70" />

            <div className="absolute inset-0 bg-cyan-400/0 transition duration-500 group-hover:bg-cyan-400/[0.035]" />

            {/* Preview badge */}

            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.15em] text-slate-300 backdrop-blur-xl">
              <FaEye
                size={9}
                className="text-cyan-400"
              />

              Project Preview
            </div>

            {/* Featured */}

            {project.featured && (
              <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-yellow-400/20 bg-slate-950/70 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-yellow-300 backdrop-blur-xl">
                <FaStar size={8} />

                Featured
              </div>
            )}
          </div>
        ) : (
          <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-cyan-400/[0.06] via-slate-900 to-blue-500/[0.06]">
            <FaCode
              size={40}
              className="text-cyan-400/30"
            />
          </div>
        )}
      </div>

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="relative flex flex-1 flex-col p-6 sm:p-7">

        {/* Number + category */}

        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-cyan-400/50">
            {String(index + 1).padStart(
              2,
              "0"
            )}
          </span>

          <div className="h-px flex-1 bg-white/[0.06]" />

          <span className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.055] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-cyan-300">
            {project.category}
          </span>
        </div>

        {/* Title */}

        <div className="flex items-start gap-3">
          <motion.div
            whileHover={{
              rotate: 6,
              scale: 1.05,
            }}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.07] text-cyan-400 transition group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.1]"
          >
            <FaCode size={17} />
          </motion.div>

          <div className="min-w-0">
            <h3 className="text-xl font-black tracking-tight text-white transition duration-300 group-hover:text-cyan-300">
              {project.title}
            </h3>

            <div className="mt-1 flex items-center gap-1.5">
              <FaCircle
                size={4}
                className="text-emerald-400"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-600">
                Full Stack Application
              </span>
            </div>
          </div>
        </div>

        {/* Description */}

        <p className="mt-5 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        {/* =================================================
            TECHNOLOGIES
        ================================================= */}

        {project.technologies?.length >
          0 && (
          <div className="mt-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />

              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-600">
                Technology
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies
                .slice(0, 6)
                .map(
                  (technology) => (
                    <span
                      key={
                        technology
                      }
                      className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 text-[10px] font-medium text-slate-300 transition duration-300 group-hover:border-white/[0.12] hover:border-cyan-400/25 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
                    >
                      {technology}
                    </span>
                  )
                )}

              {project.technologies
                .length > 6 && (
                <span className="rounded-lg border border-white/[0.07] bg-white/[0.02] px-2.5 py-1.5 text-[10px] font-medium text-slate-600">
                  +
                  {project.technologies
                    .length -
                    6}
                </span>
              )}
            </div>
          </div>
        )}

        {/* =================================================
            FEATURES
        ================================================= */}

        {project.features?.length >
          0 && (
          <div className="mt-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />

              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-600">
                Key Capabilities
              </p>
            </div>

            <div className="space-y-2">
              {project.features
                .slice(0, 4)
                .map(
                  (feature) => (
                    <div
                      key={
                        feature
                      }
                      className="flex items-center gap-2.5 text-xs text-slate-400"
                    >
                      <FaCheckCircle
                        className="shrink-0 text-[10px] text-cyan-400/70"
                      />

                      <span className="truncate transition group-hover:text-slate-300">
                        {feature}
                      </span>
                    </div>
                  )
                )}
            </div>
          </div>
        )}

        {/* =================================================
            LINKS
        ================================================= */}

        <div className="mt-auto pt-7">
          <div className="border-t border-white/[0.07] pt-5">

            {hasLiveDemo ||
            hasGithub ? (
              <div className="flex gap-3">
                {hasLiveDemo && (
                  <a
                    href={
                      project.liveDemo
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/live inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-cyan-400/20"
                  >
                    <FaExternalLinkAlt
                      size={9}
                    />

                    Live Demo

                    <FaArrowRight
                      size={9}
                      className="transition group-hover/live:translate-x-1"
                    />
                  </a>
                )}

                {hasGithub && (
                  <a
                    href={
                      project.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/github inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-xs font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/25 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
                  >
                    <FaGithub
                      size={13}
                    />

                    GitHub

                    <FaArrowRight
                      size={9}
                      className="opacity-0 transition group-hover/github:translate-x-1 group-hover/github:opacity-100"
                    />
                  </a>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-xs font-medium text-slate-600">
                <FaCode size={10} />

                Project links coming soon
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* =========================================================
   SKELETON
========================================================= */

const ProjectSkeleton = () => {
  return (
    <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({
        length: 6,
      }).map((_, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-3"
        >
          <div className="aspect-[16/9] animate-pulse rounded-[1.25rem] bg-white/[0.035]" />

          <div className="p-4">
            <div className="h-3 w-20 animate-pulse rounded bg-white/5" />

            <div className="mt-5 flex gap-3">
              <div className="h-11 w-11 animate-pulse rounded-xl bg-white/5" />

              <div className="flex-1 space-y-2">
                <div className="h-5 w-2/3 animate-pulse rounded bg-white/5" />

                <div className="h-3 w-1/3 animate-pulse rounded bg-white/5" />
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <div className="h-3 animate-pulse rounded bg-white/5" />

              <div className="h-3 animate-pulse rounded bg-white/5" />

              <div className="h-3 w-4/5 animate-pulse rounded bg-white/5" />
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              <div className="h-7 w-20 animate-pulse rounded-lg bg-white/5" />

              <div className="h-7 w-24 animate-pulse rounded-lg bg-white/5" />

              <div className="h-7 w-16 animate-pulse rounded-lg bg-white/5" />

              <div className="h-7 w-20 animate-pulse rounded-lg bg-white/5" />
            </div>

            <div className="mt-7 space-y-2">
              <div className="h-3 w-2/3 animate-pulse rounded bg-white/5" />

              <div className="h-3 w-1/2 animate-pulse rounded bg-white/5" />

              <div className="h-3 w-3/5 animate-pulse rounded bg-white/5" />
            </div>

            <div className="mt-7 h-11 animate-pulse rounded-xl bg-white/5" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

/* =========================================================
   EMPTY STATE
========================================================= */

interface EmptyStateProps {
  onClear: () => void;
}

const EmptyState = ({
  onClear,
}: EmptyStateProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] px-6 py-24 text-center shadow-2xl shadow-black/20 backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 rounded-full bg-cyan-400/[0.05] blur-3xl" />

      <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.07] text-cyan-400">
        <FaSearch size={21} />
      </div>

      <h3 className="relative mt-7 text-xl font-bold text-white">
        No projects found
      </h3>

      <p className="relative mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
        We couldn't find any projects matching
        your current search or category.
      </p>

      <button
        type="button"
        onClick={onClear}
        className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
      >
        Reset Filters

        <FaArrowRight size={10} />
      </button>
    </motion.div>
  );
};

export default Projects;