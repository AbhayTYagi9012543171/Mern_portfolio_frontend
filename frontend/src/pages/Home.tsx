import {
  lazy,
  Suspense,
  type ComponentType,
  type ReactNode,
} from "react";

import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";

/* =========================================================
   LAZY LOADED SECTIONS
   ========================================================= */

/**
 * Heavy / below-the-fold sections are lazy loaded
 * to reduce the initial JavaScript bundle.
 */
const Projects = lazy(
  () => import("../components/Projects/Projects")
);

const Experience = lazy(
  () => import("../components/Experience/Experience")
);

const Education = lazy(
  () => import("../components/Education/Education")
);

const Services = lazy(
  () => import("../components/Services/Services")
);

const Github = lazy(
  () => import("../components/Github/Github")
);

const Contact = lazy(
  () => import("../components/Contact/Contact")
);

/* =========================================================
   SECTION LOADER
   ========================================================= */

interface SectionLoaderProps {
  label: string;
  minHeight?: string;
}

const SectionLoader = ({
  label,
  minHeight = "min-h-[420px]",
}: SectionLoaderProps) => {
  return (
    <section
      className={`relative flex ${minHeight} items-center justify-center overflow-hidden bg-slate-950 px-6`}
      aria-label={`Loading ${label}`}
      aria-busy="true"
    >
      {/* Background glow */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl"
      />

      {/* Loader */}

      <div className="relative flex flex-col items-center gap-4">
        <div
          className="h-9 w-9 animate-spin rounded-full border-2 border-white/10 border-t-cyan-400"
          aria-hidden="true"
        />

        <div className="text-center">
          <p className="text-sm font-medium text-slate-300">
            Loading {label}
          </p>

          <p className="mt-1 text-xs text-slate-600">
            Please wait...
          </p>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   LAZY SECTION WRAPPER
   ========================================================= */

interface LazySectionProps {
  children: ReactNode;
  label: string;
  minHeight?: string;
}

const LazySection = ({
  children,
  label,
  minHeight,
}: LazySectionProps) => {
  return (
    <Suspense
      fallback={
        <SectionLoader
          label={label}
          minHeight={minHeight}
        />
      }
    >
      {children}
    </Suspense>
  );
};

/* =========================================================
   SECTION DIVIDER
   ========================================================= */

const SectionDivider = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative h-px w-full overflow-hidden bg-white/[0.04]"
    >
      <div className="absolute left-1/2 top-0 h-px w-1/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
    </div>
  );
};

/* =========================================================
   HOME PAGE
   ========================================================= */

const Home = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <header
        id="hero"
        className="scroll-mt-20"
      >
        <Hero />
      </header>

      <SectionDivider />

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="scroll-mt-20"
        aria-labelledby="about-section"
      >
        <h2
          id="about-section"
          className="sr-only"
        >
          About Me
        </h2>

        <About />
      </section>

      <SectionDivider />

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section
        id="skills"
        className="scroll-mt-20"
        aria-labelledby="skills-section"
      >
        <h2
          id="skills-section"
          className="sr-only"
        >
          Technical Skills
        </h2>

        <Skills />
      </section>

      <SectionDivider />

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="scroll-mt-20"
        aria-labelledby="projects-section"
      >
        <LazySection
          label="Projects"
          minHeight="min-h-[650px]"
        >
          <Projects />
        </LazySection>
      </section>

      <SectionDivider />

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section
        id="experience"
        className="scroll-mt-20"
        aria-labelledby="experience-section"
      >
        <LazySection
          label="Experience"
          minHeight="min-h-[500px]"
        >
          <Experience />
        </LazySection>
      </section>

      <SectionDivider />

      {/* =====================================================
          EDUCATION
      ===================================================== */}

      <section
        id="education"
        className="scroll-mt-20"
        aria-labelledby="education-section"
      >
        <LazySection
          label="Education"
          minHeight="min-h-[500px]"
        >
          <Education />
        </LazySection>
      </section>

      <SectionDivider />

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        id="services"
        className="scroll-mt-20"
        aria-labelledby="services-section"
      >
        <LazySection
          label="Services"
          minHeight="min-h-[600px]"
        >
          <Services />
        </LazySection>
      </section>

      <SectionDivider />

      {/* =====================================================
          GITHUB
      ===================================================== */}

      <section
        id="github"
        className="scroll-mt-20"
        aria-labelledby="github-section"
      >
        <LazySection
          label="GitHub"
          minHeight="min-h-[500px]"
        >
          <Github />
        </LazySection>
      </section>

      <SectionDivider />

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="scroll-mt-20"
        aria-labelledby="contact-section"
      >
        <LazySection
          label="Contact"
          minHeight="min-h-[600px]"
        >
          <Contact />
        </LazySection>
      </section>
    </div>
  );
};

export default Home;