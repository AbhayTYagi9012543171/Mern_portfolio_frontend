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
  const [projects, setProjects] =
    useState<Project[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("All");

  const [error, setError] =
    useState("");

  const [showAll, setShowAll] =
    useState(false);

  /* =======================================================
     FETCH PROJECTS
     ======================================================= */

  useEffect(() => {
    let mounted = true;

    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError("");

        const response =
          await api.get("/projects");

        const data =
          response.data?.data;

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
    const query =
      search.trim().toLowerCase();

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
      className="relative overflow-hidden bg-slate-950 px-4 py-24 sm:px-6 sm:py-28 lg:py-32"
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[120px]" />

        <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/[0.05] blur-[110px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/[0.05] blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <SectionHeader
          eyebrow="Selected Work"
          title={
            <>
              Projects that turn{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                ideas into products
              </span>
            </>
          }
          description="A collection of full-stack applications, experiments and production-focused projects built with modern technologies."
        />

        {/* =================================================
            PROJECT OVERVIEW STATS
        ================================================= */}

        {!loading && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
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
              duration: 0.5,
            }}
            className="mx-auto mb-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4"
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
              icon={<FaStar />}
              value="100%"
              label="Passion"
            />
          </motion.div>
        )}

        {/* =================================================
            FILTER PANEL
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
              duration: 0.5,
            }}
            className="mb-10 rounded-3xl border border-white/10 bg-white/[0.025] p-4 backdrop-blur-xl sm:p-5"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              {/* Search */}

              <div className="relative w-full lg:max-w-md">
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
                  placeholder="Search projects, technologies..."
                  aria-label="Search projects"
                  className="h-12 w-full rounded-xl border border-white/10 bg-slate-900/70 pl-11 pr-11 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/10"
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
                <div className="mr-1 hidden items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 md:flex">
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
                        className={`rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 ${
                          active
                            ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/10"
                            : "border border-white/10 bg-white/[0.03] text-slate-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-white"
                        }`}
                      >
                        {item}
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            {/* Active filter info */}

            {(search ||
              category !== "All") && (
              <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-white/5 pt-4">
                <span className="text-xs text-slate-600">
                  Results:
                </span>

                <span className="rounded-lg bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-300">
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
                  className="text-xs text-slate-500 transition hover:text-cyan-400"
                >
                  Clear filters
                </button>
              </div>
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
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              className="mb-8 overflow-hidden"
            >
              <div className="rounded-2xl border border-yellow-400/10 bg-yellow-400/[0.04] px-4 py-3 text-center text-xs text-yellow-300/80">
                {error}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =================================================
            LOADING
        ================================================= */}

        {loading && (
          <ProjectSkeleton />
        )}

        {/* =================================================
            PROJECT GRID
        ================================================= */}

        {!loading && (
          <>
            {visibleProjects.length > 0 ? (
              <motion.div
                layout
                className="grid gap-6 sm:gap-7 md:grid-cols-2 xl:grid-cols-3"
              >
                <AnimatePresence
                  mode="popLayout"
                >
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
                SHOW MORE
            ================================================= */}

            {filteredProjects.length >
              6 && (
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
                className="mt-12 text-center"
              >
                <button
                  type="button"
                  onClick={() =>
                    setShowAll(
                      (value) =>
                        !value
                    )
                  }
                  className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-400"
                >
                  {showAll
                    ? "Show Less"
                    : `View All ${filteredProjects.length} Projects`}

                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      showAll
                        ? "rotate-180"
                        : "group-hover:translate-y-1"
                    }`}
                    size={11}
                  />
                </button>
              </motion.div>
            )}

            {/* Result count */}

            {filteredProjects.length >
              0 && (
              <p className="mt-7 text-center text-xs text-slate-700">
                Showing{" "}
                {visibleProjects.length}{" "}
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
      className="mx-auto mb-14 max-w-3xl text-center"
    >
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
        {eyebrow}
      </div>

      <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
        {description}
      </p>
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
    <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-center backdrop-blur-xl transition hover:border-cyan-400/20 hover:bg-white/[0.04]">
      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition group-hover:scale-110">
        {icon}
      </div>

      <p className="mt-3 text-xl font-bold text-white">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
        {label}
      </p>
    </div>
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
  const hasLiveDemo =
    Boolean(
      project.liveDemo &&
        project.liveDemo !== "#"
    );

  const hasGithub =
    Boolean(
      project.github &&
        project.github !== "#"
    );

  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 35,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.96,
      }}
      transition={{
        duration: 0.45,
        delay:
          index * 0.05,
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/25 hover:bg-white/[0.045] hover:shadow-2xl hover:shadow-cyan-500/[0.06]"
    >
      {/* Top accent */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* =================================================
          CARD TOP
      ================================================= */}

      <div className="flex items-center justify-between px-6 pt-6">
        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/[0.08] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
          {project.category}
        </span>

        {project.featured && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-yellow-400/20 bg-yellow-400/[0.07] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-yellow-300">
            <FaStar size={9} />
            Featured
          </span>
        )}
      </div>

      {/* =================================================
          PROJECT CONTENT
      ================================================= */}

      <div className="flex flex-1 flex-col p-6">

        {/* Title */}

        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.07] text-cyan-400 transition duration-300 group-hover:scale-105 group-hover:bg-cyan-400/10">
            <FaCode />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-xl font-bold text-white">
              {project.title}
            </h3>

            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
              Full Stack Project
            </p>
          </div>
        </div>

        {/* Description */}

        <p className="mt-5 min-h-[84px] text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        {/* =================================================
            TECHNOLOGIES
        ================================================= */}

        {project.technologies?.length >
          0 && (
          <div className="mt-5">
            <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
              Built With
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies
                .slice(0, 6)
                .map(
                  (technology) => (
                    <span
                      key={
                        technology
                      }
                      className="rounded-lg border border-white/10 bg-white/[0.035] px-2.5 py-1.5 text-[11px] font-medium text-slate-300 transition group-hover:border-white/15"
                    >
                      {technology}
                    </span>
                  )
                )}

              {project.technologies
                .length > 6 && (
                <span className="rounded-lg border border-white/10 bg-white/[0.02] px-2.5 py-1.5 text-[11px] text-slate-600">
                  +
                  {project
                    .technologies
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
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
              Key Features
            </p>

            <div className="space-y-2">
              {project.features
                .slice(0, 4)
                .map(
                  (feature) => (
                    <div
                      key={
                        feature
                      }
                      className="flex items-center gap-2 text-xs text-slate-400"
                    >
                      <FaCheckCircle className="shrink-0 text-[10px] text-cyan-400/70" />

                      <span className="truncate">
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
          <div className="border-t border-white/10 pt-5">
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
                    className="group/live inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-3 text-xs font-bold text-slate-950 transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    Live Demo

                    <FaExternalLinkAlt
                      size={10}
                      className="transition-transform group-hover/live:translate-x-0.5"
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
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs font-bold text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:text-cyan-400"
                  >
                    <FaGithub />

                    Source Code
                  </a>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-xs font-medium text-slate-600">
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
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({
        length: 6,
      }).map((_, index) => (
        <div
          key={index}
          className="h-[510px] animate-pulse rounded-3xl border border-white/10 bg-white/[0.025] p-6"
        >
          <div className="flex justify-between">
            <div className="h-7 w-24 rounded-full bg-white/5" />
            <div className="h-7 w-20 rounded-full bg-white/5" />
          </div>

          <div className="mt-7 flex gap-3">
            <div className="h-11 w-11 rounded-xl bg-white/5" />

            <div className="flex-1 space-y-2">
              <div className="h-5 w-2/3 rounded bg-white/5" />
              <div className="h-3 w-1/3 rounded bg-white/5" />
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <div className="h-3 rounded bg-white/5" />
            <div className="h-3 rounded bg-white/5" />
            <div className="h-3 w-4/5 rounded bg-white/5" />
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            <div className="h-7 w-20 rounded-lg bg-white/5" />
            <div className="h-7 w-24 rounded-lg bg-white/5" />
            <div className="h-7 w-16 rounded-lg bg-white/5" />
            <div className="h-7 w-20 rounded-lg bg-white/5" />
          </div>

          <div className="mt-8 space-y-2">
            <div className="h-3 w-2/3 rounded bg-white/5" />
            <div className="h-3 w-1/2 rounded bg-white/5" />
            <div className="h-3 w-3/5 rounded bg-white/5" />
          </div>

          <div className="mt-8 h-12 rounded-xl bg-white/5" />
        </div>
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
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="rounded-3xl border border-white/10 bg-white/[0.025] px-6 py-20 text-center backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
        <FaSearch size={22} />
      </div>

      <h3 className="mt-6 text-xl font-bold text-white">
        No projects found
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
        We couldn't find any projects
        matching your current search or
        category.
      </p>

      <button
        type="button"
        onClick={onClear}
        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Reset Filters
        <FaArrowRight size={11} />
      </button>
    </motion.div>
  );
};

export default Projects;