import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  FaGithub,
  FaCodeBranch,
  FaStar,
  FaUsers,
  FaBook,
  FaExternalLinkAlt,
  FaSpinner,
  FaSearch,
  FaRedo,
  FaMapMarkerAlt,
  FaFilter,
  FaSortAmountDown,
  FaCalendarAlt,
  FaCode,
  FaTimes,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import axios from "axios";

import api from "../../services/api";

import type {
  GithubData,
  GithubRepository,
} from "../../types";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type SortOption =
  | "updated"
  | "stars"
  | "forks"
  | "name";

type LanguageFilter = "all" | string;

/*
|--------------------------------------------------------------------------
| Constants
|--------------------------------------------------------------------------
*/

const MAX_REPOSITORIES = 9;

const DEFAULT_DESCRIPTION =
  "GitHub repository and development project.";

const DEFAULT_BIO =
  "MERN Stack Developer building modern, scalable and user-focused web applications.";

/*
|--------------------------------------------------------------------------
| Animation Variants
|--------------------------------------------------------------------------
*/

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

const Github = () => {
  const [github, setGithub] =
    useState<GithubData | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [search, setSearch] =
    useState("");

  const [language, setLanguage] =
    useState<LanguageFilter>("all");

  const [sortBy, setSortBy] =
    useState<SortOption>("updated");

  const [showFilters, setShowFilters] =
    useState(false);

  /*
  |--------------------------------------------------------------------------
  | Fetch GitHub Data
  |--------------------------------------------------------------------------
  */

  const fetchGithub = useCallback(
    async () => {
      try {
        setLoading(true);
        setError("");

        const response =
          await api.get("/github");

        if (!response.data?.success) {
          throw new Error(
            response.data?.message ||
              "Unable to load GitHub information."
          );
        }

        if (!response.data?.data) {
          throw new Error(
            "GitHub data is empty."
          );
        }

        setGithub(response.data.data);
      } catch (err: unknown) {
        console.error(
          "Failed to load GitHub data:",
          err
        );

        if (axios.isAxiosError(err)) {
          if (err.code === "ECONNABORTED") {
            setError(
              "The GitHub service took too long to respond. Please try again."
            );
          } else if (
            err.code === "ERR_NETWORK"
          ) {
            setError(
              "Unable to connect to the backend server. Please check that the API is running."
            );
          } else {
            setError(
              err.response?.data?.message ||
                "Unable to load GitHub information."
            );
          }
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(
            "Unable to load GitHub information."
          );
        }
      } finally {
        setLoading(false);
      }
    },
    []
  );

  /*
  |--------------------------------------------------------------------------
  | Initial Request
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    void fetchGithub();
  }, [fetchGithub]);

  /*
  |--------------------------------------------------------------------------
  | Languages
  |--------------------------------------------------------------------------
  */

  const languages = useMemo(() => {
    if (!github) {
      return [];
    }

    const uniqueLanguages =
      new Set<string>();

    github.repositories.forEach(
      (repo) => {
        if (repo.language) {
          uniqueLanguages.add(
            repo.language
          );
        }
      }
    );

    return Array.from(
      uniqueLanguages
    ).sort();
  }, [github]);

  /*
  |--------------------------------------------------------------------------
  | Filter + Sort Repositories
  |--------------------------------------------------------------------------
  */

  const filteredRepositories =
    useMemo(() => {
      if (!github) {
        return [];
      }

      const query =
        search.trim().toLowerCase();

      const filtered =
        github.repositories.filter(
          (repo) => {
            const matchesSearch =
              !query ||
              repo.name
                .toLowerCase()
                .includes(query) ||
              repo.description
                ?.toLowerCase()
                .includes(query) ||
              repo.language
                ?.toLowerCase()
                .includes(query);

            const matchesLanguage =
              language === "all" ||
              repo.language === language;

            return (
              matchesSearch &&
              matchesLanguage
            );
          }
        );

      return [...filtered].sort(
        (a, b) => {
          switch (sortBy) {
            case "stars":
              return b.stars - a.stars;

            case "forks":
              return b.forks - a.forks;

            case "name":
              return a.name.localeCompare(
                b.name
              );

            case "updated":
            default:
              return (
                new Date(
                  b.updatedAt
                ).getTime() -
                new Date(
                  a.updatedAt
                ).getTime()
              );
          }
        }
      );
    }, [
      github,
      search,
      language,
      sortBy,
    ]);

  /*
  |--------------------------------------------------------------------------
  | Visible Repositories
  |--------------------------------------------------------------------------
  */

  const visibleRepositories =
    filteredRepositories.slice(
      0,
      MAX_REPOSITORIES
    );

  /*
  |--------------------------------------------------------------------------
  | Clear Filters
  |--------------------------------------------------------------------------
  */

  const clearFilters = () => {
    setSearch("");
    setLanguage("all");
    setSortBy("updated");
  };

  /*
  |--------------------------------------------------------------------------
  | Active Filter State
  |--------------------------------------------------------------------------
  */

  const hasActiveFilters =
    Boolean(search.trim()) ||
    language !== "all" ||
    sortBy !== "updated";

  /*
  |--------------------------------------------------------------------------
  | Render
  |--------------------------------------------------------------------------
  */

  return (
    <section
      id="github"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32"
    >
      {/* ================================================================
          BACKGROUND
      ================================================================ */}

      <div className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-3xl" />

      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-500/[0.05] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-purple-500/[0.05] blur-3xl" />

      {/* ================================================================
          CONTENT
      ================================================================ */}

      <div className="relative mx-auto max-w-7xl">

        {/* ============================================================
            HEADER
        ============================================================ */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            <FaGithub />
            Open Source
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            GitHub{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Activity
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Explore my development projects,
            repositories, technologies and
            open-source contributions.
          </p>

          <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        </motion.div>

        {/* ============================================================
            LOADING
        ============================================================ */}

        {loading && (
          <GithubSkeleton />
        )}

        {/* ============================================================
            ERROR
        ============================================================ */}

        <AnimatePresence mode="wait">
          {!loading && error && (
            <motion.div
              key="github-error"
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              className="mx-auto max-w-xl"
            >
              <div className="relative overflow-hidden rounded-3xl border border-red-400/20 bg-red-400/[0.04] p-8 text-center shadow-2xl shadow-black/20">
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-red-400/10 blur-3xl" />

                <div className="relative">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-red-400/20 bg-red-400/10 text-red-400">
                    <FaGithub size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    GitHub Unavailable
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {error}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      void fetchGithub()
                    }
                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/10 transition hover:-translate-y-1 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  >
                    <FaRedo />

                    Try Again
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ============================================================
            MAIN CONTENT
        ============================================================ */}

        {!loading &&
          !error &&
          github && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
            >

              {/* ======================================================
                  PROFILE
              ====================================================== */}

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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="group relative mb-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-8"
              >
                {/* Card Glow */}

                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.06] blur-3xl transition duration-700 group-hover:bg-cyan-400/[0.1]" />

                <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                  {/* Profile */}

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                    <div className="relative">
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400/30 to-blue-500/30 opacity-0 blur transition group-hover:opacity-100" />

                      <img
                        src={
                          github.profile
                            .avatar
                        }
                        alt={`${github.profile.username} GitHub profile`}
                        loading="lazy"
                        className="relative h-24 w-24 rounded-2xl border border-white/10 object-cover shadow-xl"
                      />

                      <span className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full border-4 border-slate-950 bg-emerald-400">
                        <FaCheckCircle
                          className="text-slate-950"
                          size={12}
                        />
                      </span>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold text-white sm:text-3xl">
                          {github.profile
                            .name ||
                            github.profile
                              .username}
                        </h3>

                        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                          @
                          {
                            github.profile
                              .username
                          }
                        </span>
                      </div>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                        {github.profile
                          .bio ||
                          DEFAULT_BIO}
                      </p>

                      {github.profile
                        .location && (
                        <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-400">
                          <FaMapMarkerAlt className="text-cyan-400" />

                          {
                            github.profile
                              .location
                          }
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Profile CTA */}

                  <a
                    href={
                      github.profile
                        .profileUrl
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open GitHub profile in a new tab"
                    className="group/button inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:-translate-y-1 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                  >
                    <FaGithub />

                    View GitHub

                    <FaExternalLinkAlt
                      size={11}
                      className="transition-transform group-hover/button:translate-x-0.5"
                    />
                  </a>
                </div>

                {/* Stats */}

                <div className="relative mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4">

                  <GithubStat
                    icon={<FaBook />}
                    value={
                      github.profile
                        .publicRepositories
                    }
                    label="Repositories"
                  />

                  <GithubStat
                    icon={<FaUsers />}
                    value={
                      github.profile
                        .followers
                    }
                    label="Followers"
                  />

                  <GithubStat
                    icon={<FaUsers />}
                    value={
                      github.profile
                        .following
                    }
                    label="Following"
                  />

                  <GithubStat
                    icon={
                      <FaCodeBranch />
                    }
                    value={
                      github.repositories
                        .length
                    }
                    label="Loaded Projects"
                  />
                </div>
              </motion.div>

              {/* ======================================================
                  TOOLBAR
              ====================================================== */}

              <div className="mb-7">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                        <FaCode />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          Recent Repositories
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          {filteredRepositories.length}{" "}
                          {filteredRepositories.length ===
                          1
                            ? "repository"
                            : "repositories"}{" "}
                          found
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">

                    {/* Search */}

                    <div className="relative min-w-0 sm:w-72">
                      <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                      <input
                        type="search"
                        value={search}
                        onChange={(event) =>
                          setSearch(
                            event.target
                              .value
                          )
                        }
                        placeholder="Search repositories..."
                        aria-label="Search repositories"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pl-11 pr-10 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/40 focus:bg-white/[0.05] focus:ring-2 focus:ring-cyan-400/10"
                      />

                      {search && (
                        <button
                          type="button"
                          onClick={() =>
                            setSearch("")
                          }
                          aria-label="Clear search"
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
                        >
                          <FaTimes
                            size={13}
                          />
                        </button>
                      )}
                    </div>

                    {/* Filter Toggle */}

                    <button
                      type="button"
                      onClick={() =>
                        setShowFilters(
                          (previous) =>
                            !previous
                        )
                      }
                      className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition ${
                        showFilters ||
                        hasActiveFilters
                          ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                          : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
                      }`}
                    >
                      <FaFilter />

                      Filters

                      {hasActiveFilters && (
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Filters */}

                <AnimatePresence>
                  {showFilters && (
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
                      className="overflow-hidden"
                    >
                      <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                        <div className="grid gap-5 md:grid-cols-2">

                          {/* Language */}

                          <div>
                            <label
                              htmlFor="github-language"
                              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500"
                            >
                              Language
                            </label>

                            <div className="relative">
                              <select
                                id="github-language"
                                value={
                                  language
                                }
                                onChange={(
                                  event
                                ) =>
                                  setLanguage(
                                    event
                                      .target
                                      .value
                                  )
                                }
                                className="w-full appearance-none rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-cyan-400/40"
                              >
                                <option value="all">
                                  All languages
                                </option>

                                {languages.map(
                                  (
                                    item
                                  ) => (
                                    <option
                                      key={
                                        item
                                      }
                                      value={
                                        item
                                      }
                                    >
                                      {
                                        item
                                      }
                                    </option>
                                  )
                                )}
                              </select>

                              <FaCode className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-600" />
                            </div>
                          </div>

                          {/* Sort */}

                          <div>
                            <label
                              htmlFor="github-sort"
                              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-500"
                            >
                              Sort By
                            </label>

                            <div className="relative">
                              <select
                                id="github-sort"
                                value={
                                  sortBy
                                }
                                onChange={(
                                  event
                                ) =>
                                  setSortBy(
                                    event
                                      .target
                                      .value as SortOption
                                  )
                                }
                                className="w-full appearance-none rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-cyan-400/40"
                              >
                                <option value="updated">
                                  Recently updated
                                </option>

                                <option value="stars">
                                  Most stars
                                </option>

                                <option value="forks">
                                  Most forks
                                </option>

                                <option value="name">
                                  Name
                                </option>
                              </select>

                              <FaSortAmountDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-600" />
                            </div>
                          </div>
                        </div>

                        {hasActiveFilters && (
                          <button
                            type="button"
                            onClick={
                              clearFilters
                            }
                            className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition hover:text-cyan-400"
                          >
                            <FaTimes />

                            Clear filters
                          </button>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ======================================================
                  REPOSITORIES
              ====================================================== */}

              {visibleRepositories.length >
              0 ? (
                <>
                  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {visibleRepositories.map(
                      (
                        repo,
                        index
                      ) => (
                        <RepositoryCard
                          key={repo.id}
                          repo={repo}
                          index={index}
                        />
                      )
                    )}
                  </div>

                  {filteredRepositories.length >
                    MAX_REPOSITORIES && (
                    <p className="mt-6 text-center text-xs text-slate-600">
                      Showing the first{" "}
                      {
                        MAX_REPOSITORIES
                      }{" "}
                      repositories.
                    </p>
                  )}
                </>
              ) : (
                <EmptyRepositories
                  search={search}
                  onClear={clearFilters}
                />
              )}

              {/* ======================================================
                  BOTTOM CTA
              ====================================================== */}

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
                }}
                transition={{
                  duration: 0.6,
                }}
                className="mt-12 flex flex-col items-center justify-between gap-5 rounded-3xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.04] to-blue-500/[0.04] p-7 text-center sm:flex-row sm:text-left"
              >
                <div>
                  <div className="flex items-center justify-center gap-2 sm:justify-start">
                    <FaGithub className="text-cyan-400" />

                    <p className="text-sm font-semibold text-cyan-400">
                      More on GitHub
                    </p>
                  </div>

                  <h3 className="mt-2 text-xl font-bold text-white">
                    Explore all my repositories.
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    See projects, experiments and
                    source code directly on GitHub.
                  </p>
                </div>

                <a
                  href={
                    github.profile
                      .profileUrl
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
                >
                  Explore GitHub

                  <FaArrowRight
                    size={13}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>
            </motion.div>
          )}
      </div>
    </section>
  );
};

/*
|--------------------------------------------------------------------------
| Repository Card
|--------------------------------------------------------------------------
*/

interface RepositoryCardProps {
  repo: GithubRepository;
  index: number;
}

const RepositoryCard = ({
  repo,
  index,
}: RepositoryCardProps) => {
  return (
    <motion.a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      variants={cardAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
      }}
      whileHover={{
        y: -7,
      }}
      aria-label={`Open ${repo.name} repository on GitHub`}
      className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl shadow-black/5 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05] hover:shadow-cyan-500/10"
    >
      {/* Top gradient */}

      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Hover Glow */}

      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/[0.04] blur-3xl transition duration-500 group-hover:bg-cyan-400/[0.1]" />

      {/* Header */}

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 text-cyan-400 transition duration-300 group-hover:scale-105 group-hover:bg-cyan-400/15">
          <FaGithub size={20} />
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-600 transition group-hover:border-cyan-400/20 group-hover:text-cyan-400">
          <FaExternalLinkAlt size={12} />
        </div>
      </div>

      {/* Name */}

      <h3 className="relative mt-6 truncate text-lg font-bold text-white transition group-hover:text-cyan-300">
        {repo.name}
      </h3>

      {/* Description */}

      <p className="relative mt-3 line-clamp-3 min-h-[72px] text-sm leading-6 text-slate-400">
        {repo.description ||
          DEFAULT_DESCRIPTION}
      </p>

      {/* Spacer */}

      <div className="flex-1" />

      {/* Metadata */}

      <div className="relative mt-6 flex flex-wrap items-center gap-2">

        {/* Language */}

        <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-slate-300">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />

          {repo.language ||
            "Code"}
        </span>

        {/* Stars */}

        <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-500">
          <FaStar className="text-amber-400" />

          {repo.stars}
        </span>

        {/* Forks */}

        <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-500">
          <FaCodeBranch className="text-blue-400" />

          {repo.forks}
        </span>
      </div>

      {/* Footer */}

      <div className="relative mt-5 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="inline-flex items-center gap-2 text-xs text-slate-600">
          <FaCalendarAlt />

          Updated{" "}
          {formatGithubDate(
            repo.updatedAt
          )}
        </span>

        <span className="text-xs font-medium text-cyan-400 opacity-0 transition group-hover:opacity-100">
          View repo →
        </span>
      </div>
    </motion.a>
  );
};

/*
|--------------------------------------------------------------------------
| Stats
|--------------------------------------------------------------------------
*/

interface GithubStatProps {
  icon: ReactNode;
  value: number;
  label: string;
}

const GithubStat = ({
  icon,
  value,
  label,
}: GithubStatProps) => {
  return (
    <div className="group/stat flex items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/10 text-cyan-400 transition group-hover/stat:scale-105">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xl font-bold text-white">
          {formatNumber(value)}
        </p>

        <p className="truncate text-xs text-slate-500">
          {label}
        </p>
      </div>
    </div>
  );
};

/*
|--------------------------------------------------------------------------
| Empty State
|--------------------------------------------------------------------------
*/

interface EmptyRepositoriesProps {
  search: string;
  onClear: () => void;
}

const EmptyRepositories = ({
  search,
  onClear,
}: EmptyRepositoriesProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-12 text-center"
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-slate-600">
        <FaSearch size={22} />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">
        No repositories found
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-slate-500">
        {search
          ? `No repositories match "${search}". Try another search term or clear your filters.`
          : "There are no repositories matching the selected filters."}
      </p>

      <button
        type="button"
        onClick={onClear}
        className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
      >
        <FaRedo />

        Reset Filters
      </button>
    </motion.div>
  );
};

/*
|--------------------------------------------------------------------------
| Loading Skeleton
|--------------------------------------------------------------------------
*/

const GithubSkeleton = () => {
  return (
    <div
      className="animate-pulse"
      aria-label="Loading GitHub information"
      aria-busy="true"
    >
      {/* Profile */}

      <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="h-24 w-24 shrink-0 rounded-2xl bg-white/10" />

          <div className="flex-1">
            <div className="h-7 w-52 rounded-lg bg-white/10" />

            <div className="mt-4 h-4 max-w-xl rounded bg-white/10" />

            <div className="mt-2 h-4 max-w-md rounded bg-white/10" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 md:grid-cols-4">
          {Array.from({
            length: 4,
          }).map((_, index) => (
            <div
              key={index}
              className="h-14 rounded-xl bg-white/5"
            />
          ))}
        </div>
      </div>

      {/* Toolbar */}

      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="h-7 w-56 rounded bg-white/10" />

          <div className="mt-2 h-4 w-32 rounded bg-white/5" />
        </div>

        <div className="h-11 w-full rounded-xl bg-white/5 sm:w-72" />
      </div>

      {/* Cards */}

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({
          length: 6,
        }).map((_, index) => (
          <div
            key={index}
            className="h-[300px] rounded-2xl border border-white/10 bg-white/[0.03]"
          />
        ))}
      </div>
    </div>
  );
};

/*
|--------------------------------------------------------------------------
| Utilities
|--------------------------------------------------------------------------
*/

const formatNumber = (
  value: number
) => {
  return new Intl.NumberFormat(
    "en-US"
  ).format(value);
};

const formatGithubDate = (
  date: string
) => {
  const parsedDate =
    new Date(date);

  if (
    Number.isNaN(
      parsedDate.getTime()
    )
  ) {
    return "Unknown";
  }

  return parsedDate.toLocaleDateString(
    "en-US",
    {
      month: "short",
      year: "numeric",
    }
  );
};

export default Github;