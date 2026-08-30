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
      className="
        relative
        w-full
        overflow-hidden
        bg-slate-950
        px-3
        py-20
        sm:px-5
        sm:py-24
        md:px-6
        md:py-28
        lg:py-32
      "
    >
      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-0
            h-[260px]
            w-[260px]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/[0.06]
            blur-[90px]
            sm:h-[380px]
            sm:w-[380px]
            sm:blur-[110px]
            md:h-[500px]
            md:w-[500px]
            md:blur-[120px]
          "
        />

        <div
          className="
            absolute
            -left-32
            top-1/3
            h-64
            w-64
            rounded-full
            bg-blue-500/[0.05]
            blur-[90px]
            sm:-left-40
            sm:h-80
            sm:w-80
            md:h-96
            md:w-96
            md:blur-[110px]
          "
        />

        <div
          className="
            absolute
            -right-32
            bottom-0
            h-64
            w-64
            rounded-full
            bg-purple-500/[0.05]
            blur-[90px]
            sm:-right-40
            sm:h-80
            sm:w-80
            md:h-96
            md:w-96
            md:blur-[110px]
          "
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize:
              "40px 40px",
          }}
        />
      </div>

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
        "
      >
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
            className="
              mx-auto
              mb-10
              grid
              w-full
              max-w-4xl
              grid-cols-2
              gap-2.5
              sm:mb-12
              sm:grid-cols-4
              sm:gap-3
            "
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
            className="
              mb-8
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/[0.025]
              p-3
              backdrop-blur-xl
              sm:mb-10
              sm:rounded-3xl
              sm:p-4
              md:p-5
            "
          >
            <div
              className="
                flex
                w-full
                flex-col
                gap-4
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              {/* Search */}

              <div
                className="
                  relative
                  w-full
                  lg:max-w-md
                "
              >
                <FaSearch
                  className="
                    pointer-events-none
                    absolute
                    left-3.5
                    top-1/2
                    -translate-y-1/2
                    text-sm
                    text-slate-500
                    sm:left-4
                  "
                />

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
                  className="
                    h-11
                    w-full
                    min-w-0
                    rounded-xl
                    border
                    border-white/10
                    bg-slate-900/70
                    pl-10
                    pr-10
                    text-xs
                    text-white
                    outline-none
                    transition
                    placeholder:text-slate-600
                    focus:border-cyan-400/40
                    focus:ring-2
                    focus:ring-cyan-400/10
                    sm:h-12
                    sm:pl-11
                    sm:text-sm
                  "
                />

                {search && (
                  <button
                    type="button"
                    onClick={() =>
                      setSearch("")
                    }
                    aria-label="Clear project search"
                    className="
                      absolute
                      right-2
                      top-1/2
                      flex
                      h-8
                      w-8
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-lg
                      text-slate-500
                      transition
                      hover:bg-white/10
                      hover:text-white
                      sm:right-3
                    "
                  >
                    <FaTimes size={12} />
                  </button>
                )}
              </div>

              {/* Categories */}

              <div
                className="
                  w-full
                  overflow-x-auto
                  pb-1
                  lg:w-auto
                  lg:max-w-[55%]
                  lg:overflow-visible
                "
              >
                <div
                  className="
                    flex
                    min-w-max
                    items-center
                    gap-2
                  "
                >
                  <div
                    className="
                      mr-1
                      hidden
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-slate-600
                      lg:flex
                    "
                  >
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
                            setCategory(
                              item
                            );
                            setShowAll(false);
                          }}
                          className={`
                            shrink-0
                            rounded-xl
                            px-3
                            py-2.5
                            text-[11px]
                            font-semibold
                            transition-all
                            duration-200
                            sm:px-4
                            sm:text-xs
                            ${
                              active
                                ? "bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/10"
                                : "border border-white/10 bg-white/[0.03] text-slate-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-white"
                            }
                          `}
                        >
                          {item}
                        </button>
                      );
                    }
                  )}
                </div>
              </div>
            </div>

            {/* Active filter info */}

            {(search ||
              category !== "All") && (
              <div
                className="
                  mt-4
                  flex
                  flex-wrap
                  items-center
                  gap-2.5
                  border-t
                  border-white/5
                  pt-4
                "
              >
                <span className="text-xs text-slate-600">
                  Results:
                </span>

                <span className="rounded-lg bg-cyan-400/10 px-2.5 py-1.5 text-xs font-medium text-cyan-300">
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
              className="mb-6 overflow-hidden sm:mb-8"
            >
              <div className="rounded-2xl border border-yellow-400/10 bg-yellow-400/[0.04] px-3 py-3 text-center text-[11px] leading-5 text-yellow-300/80 sm:px-4 sm:text-xs">
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
                className="mt-9 text-center sm:mt-12"
              >
                <button
                  type="button"
                  onClick={() =>
                    setShowAll(
                      (value) =>
                        !value
                    )
                  }
                  className="
                    inline-flex
                    max-w-full
                    items-center
                    justify-center
                    gap-2.5
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-4
                    py-3
                    text-xs
                    font-semibold
                    text-white
                    backdrop-blur-xl
                    transition
                    hover:border-cyan-400/30
                    hover:bg-cyan-400/5
                    hover:text-cyan-400
                    sm:gap-3
                    sm:px-6
                    sm:py-3.5
                    sm:text-sm
                  "
                >
                  <span className="truncate">
                    {showAll
                      ? "Show Less"
                      : `View All ${filteredProjects.length} Projects`}
                  </span>

                  <FaChevronDown
                    className={`
                      shrink-0
                      transition-transform
                      duration-300
                      ${
                        showAll
                          ? "rotate-180"
                          : "group-hover:translate-y-1"
                      }
                    `}
                    size={10}
                  />
                </button>
              </motion.div>
            )}

            {/* Result count */}

            {filteredProjects.length >
              0 && (
              <p className="mt-5 text-center text-[10px] text-slate-700 sm:mt-7 sm:text-xs">
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
      className="
        mx-auto
        mb-10
        w-full
        max-w-3xl
        text-center
        sm:mb-12
        md:mb-14
      "
    >
      <div
        className="
          mb-4
          inline-flex
          max-w-full
          items-center
          gap-2
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-400/[0.06]
          px-3
          py-1.5
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-cyan-400
          sm:mb-5
          sm:px-4
          sm:py-2
          sm:text-xs
          sm:tracking-[0.22em]
        "
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

        {eyebrow}
      </div>

      <h2
        className="
          break-words
          text-3xl
          font-bold
          leading-[1.15]
          tracking-tight
          text-white
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mx-auto
          mt-5
          max-w-2xl
          px-1
          text-xs
          leading-6
          text-slate-400
          sm:mt-6
          sm:text-sm
          sm:leading-7
          md:text-base
          md:leading-8
        "
      >
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
    <div
      className="
        group
        min-w-0
        rounded-xl
        border
        border-white/10
        bg-white/[0.025]
        p-3
        text-center
        backdrop-blur-xl
        transition
        hover:border-cyan-400/20
        hover:bg-white/[0.04]
        sm:rounded-2xl
        sm:p-4
      "
    >
      <div
        className="
          mx-auto
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-lg
          bg-cyan-400/10
          text-xs
          text-cyan-400
          transition
          group-hover:scale-110
          sm:h-9
          sm:w-9
          sm:rounded-xl
          sm:text-sm
        "
      >
        {icon}
      </div>

      <p
        className="
          mt-2
          truncate
          text-lg
          font-bold
          text-white
          sm:mt-3
          sm:text-xl
        "
      >
        {value}
      </p>

      <p
        className="
          mt-0.5
          truncate
          text-[8px]
          font-semibold
          uppercase
          tracking-[0.08em]
          text-slate-600
          sm:mt-1
          sm:text-[10px]
          sm:tracking-wider
        "
      >
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
        y: -6,
      }}
      className="
        group
        relative
        flex
        h-full
        min-w-0
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.025]
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/25
        hover:bg-white/[0.045]
        hover:shadow-2xl
        hover:shadow-cyan-500/[0.06]
        sm:rounded-3xl
        md:hover:-translate-y-1
      "
    >
      {/* Top accent */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* =================================================
          CARD TOP
      ================================================= */}

      <div
        className="
          flex
          min-w-0
          items-start
          justify-between
          gap-2
          px-4
          pt-5
          sm:px-6
          sm:pt-6
        "
      >
        <span
          className="
            min-w-0
            max-w-[65%]
            truncate
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-400/[0.08]
            px-2.5
            py-1.5
            text-[9px]
            font-bold
            uppercase
            tracking-wider
            text-cyan-300
            sm:px-3
            sm:text-[10px]
          "
        >
          {project.category}
        </span>

        {project.featured && (
          <span
            className="
              inline-flex
              shrink-0
              items-center
              gap-1
              rounded-full
              border
              border-yellow-400/20
              bg-yellow-400/[0.07]
              px-2
              py-1.5
              text-[8px]
              font-bold
              uppercase
              tracking-wider
              text-yellow-300
              sm:gap-1.5
              sm:px-3
              sm:text-[10px]
            "
          >
            <FaStar size={8} />
            <span className="hidden xs:inline sm:inline">
              Featured
            </span>
          </span>
        )}
      </div>

      {/* =================================================
          PROJECT CONTENT
      ================================================= */}

      <div
        className="
          flex
          min-w-0
          flex-1
          flex-col
          p-4
          sm:p-6
        "
      >
        {/* Title */}

        <div className="flex min-w-0 items-start gap-2.5 sm:gap-3">
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
              border-cyan-400/10
              bg-cyan-400/[0.07]
              text-sm
              text-cyan-400
              transition
              duration-300
              group-hover:scale-105
              group-hover:bg-cyan-400/10
              sm:h-11
              sm:w-11
              sm:text-base
            "
          >
            <FaCode />
          </div>

          <div className="min-w-0 flex-1">
            <h3
              className="
                break-words
                text-lg
                font-bold
                leading-tight
                text-white
                sm:text-xl
              "
            >
              {project.title}
            </h3>

            <p className="mt-1 truncate text-[9px] font-semibold uppercase tracking-wider text-slate-600 sm:text-[10px]">
              Full Stack Project
            </p>
          </div>
        </div>

        {/* Description */}

        <p
          className="
            mt-4
            min-h-0
            text-xs
            leading-6
            text-slate-400
            sm:mt-5
            sm:min-h-[84px]
            sm:text-sm
            sm:leading-7
          "
        >
          {project.description}
        </p>

        {/* =================================================
            TECHNOLOGIES
        ================================================= */}

        {project.technologies?.length >
          0 && (
          <div className="mt-5">
            <p className="mb-2.5 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-600 sm:text-[10px] sm:tracking-[0.18em]">
              Built With
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.technologies
                .slice(0, 6)
                .map(
                  (technology) => (
                    <span
                      key={
                        technology
                      }
                      className="
                        max-w-full
                        truncate
                        rounded-lg
                        border
                        border-white/10
                        bg-white/[0.035]
                        px-2
                        py-1.5
                        text-[10px]
                        font-medium
                        text-slate-300
                        transition
                        group-hover:border-white/15
                        sm:px-2.5
                        sm:text-[11px]
                      "
                    >
                      {technology}
                    </span>
                  )
                )}

              {project.technologies
                .length > 6 && (
                <span className="rounded-lg border border-white/10 bg-white/[0.02] px-2 py-1.5 text-[10px] text-slate-600 sm:px-2.5 sm:text-[11px]">
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
          <div className="mt-5 sm:mt-6">
            <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-600 sm:text-[10px] sm:tracking-[0.18em]">
              Key Features
            </p>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-1">
              {project.features
                .slice(0, 4)
                .map(
                  (feature) => (
                    <div
                      key={
                        feature
                      }
                      className="
                        flex
                        min-w-0
                        items-start
                        gap-2
                        text-[11px]
                        text-slate-400
                        sm:text-xs
                      "
                    >
                      <FaCheckCircle className="mt-0.5 shrink-0 text-[9px] text-cyan-400/70 sm:text-[10px]" />

                      <span className="min-w-0 break-words leading-5 sm:leading-normal">
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

        <div className="mt-auto pt-6 sm:pt-7">
          <div className="border-t border-white/10 pt-4 sm:pt-5">
            {hasLiveDemo ||
            hasGithub ? (
              <div
                className="
                  flex
                  flex-col
                  gap-2
                  min-[400px]:flex-row
                  sm:gap-3
                "
              >
                {hasLiveDemo && (
                  <a
                    href={
                      project.liveDemo
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/live
                      inline-flex
                      min-h-[44px]
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-cyan-400
                      px-3
                      py-3
                      text-[11px]
                      font-bold
                      text-slate-950
                      transition
                      hover:bg-cyan-300
                      hover:shadow-lg
                      hover:shadow-cyan-500/20
                      sm:text-xs
                    "
                  >
                    Live Demo

                    <FaExternalLinkAlt
                      size={9}
                      className="transition-transform group-hover/live:translate-x-0.5 sm:text-[10px]"
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
                    className="
                      inline-flex
                      min-h-[44px]
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-3
                      py-3
                      text-[11px]
                      font-bold
                      text-white
                      transition
                      hover:border-cyan-400/30
                      hover:bg-cyan-400/[0.05]
                      hover:text-cyan-400
                      sm:text-xs
                    "
                  >
                    <FaGithub />

                    Source Code
                  </a>
                )}
              </div>
            ) : (
              <div className="flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3 py-3 text-center text-[10px] font-medium text-slate-600 sm:text-xs">
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
    <div
      className="
        grid
        gap-4
        sm:gap-5
        md:grid-cols-2
        md:gap-6
        xl:grid-cols-3
      "
    >
      {Array.from({
        length: 6,
      }).map((_, index) => (
        <div
          key={index}
          className="
            min-w-0
            animate-pulse
            rounded-2xl
            border
            border-white/10
            bg-white/[0.025]
            p-4
            sm:h-[510px]
            sm:rounded-3xl
            sm:p-6
          "
        >
          <div className="flex justify-between gap-2">
            <div className="h-7 w-20 rounded-full bg-white/5 sm:w-24" />
            <div className="h-7 w-16 rounded-full bg-white/5 sm:w-20" />
          </div>

          <div className="mt-6 flex gap-3 sm:mt-7">
            <div className="h-10 w-10 shrink-0 rounded-xl bg-white/5 sm:h-11 sm:w-11" />

            <div className="min-w-0 flex-1 space-y-2">
              <div className="h-5 w-2/3 rounded bg-white/5" />
              <div className="h-3 w-1/3 rounded bg-white/5" />
            </div>
          </div>

          <div className="mt-5 space-y-2 sm:mt-6">
            <div className="h-3 rounded bg-white/5" />
            <div className="h-3 rounded bg-white/5" />
            <div className="h-3 w-4/5 rounded bg-white/5" />
          </div>

          <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
            <div className="h-7 w-16 rounded-lg bg-white/5 sm:w-20" />
            <div className="h-7 w-20 rounded-lg bg-white/5 sm:w-24" />
            <div className="h-7 w-14 rounded-lg bg-white/5 sm:w-16" />
            <div className="h-7 w-16 rounded-lg bg-white/5 sm:w-20" />
          </div>

          <div className="mt-7 space-y-2 sm:mt-8">
            <div className="h-3 w-2/3 rounded bg-white/5" />
            <div className="h-3 w-1/2 rounded bg-white/5" />
            <div className="h-3 w-3/5 rounded bg-white/5" />
          </div>

          <div className="mt-7 h-11 rounded-xl bg-white/5 sm:mt-8 sm:h-12" />
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
      className="
        w-full
        rounded-2xl
        border
        border-white/10
        bg-white/[0.025]
        px-4
        py-16
        text-center
        backdrop-blur-xl
        sm:rounded-3xl
        sm:px-6
        sm:py-20
      "
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400 sm:h-16 sm:w-16">
        <FaSearch size={20} />
      </div>

      <h3 className="mt-5 text-lg font-bold text-white sm:mt-6 sm:text-xl">
        No projects found
      </h3>

      <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-slate-500 sm:text-sm sm:leading-6">
        We couldn't find any projects
        matching your current search or
        category.
      </p>

      <button
        type="button"
        onClick={onClear}
        className="
          mt-6
          inline-flex
          min-h-[44px]
          items-center
          gap-2
          rounded-xl
          bg-cyan-400
          px-4
          py-3
          text-xs
          font-bold
          text-slate-950
          transition
          hover:bg-cyan-300
          sm:mt-7
          sm:px-5
          sm:text-sm
        "
      >
        Reset Filters
        <FaArrowRight size={10} />
      </button>
    </motion.div>
  );
};

export default Projects;