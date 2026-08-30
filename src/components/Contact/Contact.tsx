import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaSpinner,
  FaCheckCircle,
  FaExclamationCircle,
  FaArrowRight,
  FaClock,
  FaCode,
  FaBriefcase,
  FaComments,
  FaBolt,
  FaGlobe,
} from "react-icons/fa";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import api from "../../services/api";

/* =========================================================
   TYPES
========================================================= */

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface ContactInfoProps {
  icon: ReactNode;
  title: string;
  value: string;
  href?: string;
  external?: boolean;
}

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

interface InputFieldProps {
  label: string;
  name: keyof ContactForm;
  type: string;
  placeholder: string;
  value: string;
  error?: string;
  required?: boolean;
  onChange: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
}

interface SocialLinkProps {
  href: string;
  label: string;
  icon: ReactNode;
}

/* =========================================================
   CONSTANTS
========================================================= */

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const MAX_MESSAGE_LENGTH = 1000;

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const slideLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

const Contact = () => {
  const [form, setForm] =
    useState<ContactForm>(initialForm);

  const [errors, setErrors] =
    useState<FormErrors>({});

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState("");

  const [error, setError] =
    useState("");

  /* =======================================================
     VALIDATION
  ======================================================= */

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();

    if (!name) {
      newErrors.name = "Please enter your name.";
    } else if (name.length < 2) {
      newErrors.name =
        "Name must be at least 2 characters.";
    } else if (name.length > 80) {
      newErrors.name =
        "Name cannot exceed 80 characters.";
    }

    if (!email) {
      newErrors.email =
        "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!subject) {
      newErrors.subject =
        "Please enter a subject.";
    } else if (subject.length < 3) {
      newErrors.subject =
        "Subject must be at least 3 characters.";
    } else if (subject.length > 150) {
      newErrors.subject =
        "Subject cannot exceed 150 characters.";
    }

    if (!message) {
      newErrors.message =
        "Please enter your message.";
    } else if (message.length < 10) {
      newErrors.message =
        "Message must be at least 10 characters.";
    } else if (
      message.length > MAX_MESSAGE_LENGTH
    ) {
      newErrors.message = `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =======================================================
     INPUT CHANGE
  ======================================================= */

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: undefined,
    }));

    setSuccess("");
    setError("");
  };

  /* =======================================================
     SUBMIT
  ======================================================= */

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSuccess("");
    setError("");

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/contact", {
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });

      if (response.data?.success) {
        setSuccess(
          response.data.message ||
            "Your message has been sent successfully!"
        );

        setForm(initialForm);
        setErrors({});

        window.setTimeout(() => {
          setSuccess("");
        }, 7000);
      } else {
        setError(
          response.data?.message ||
            "Unable to send your message. Please try again."
        );
      }
    } catch (err: unknown) {
      console.error("Contact form error:", err);

      if (
        typeof err === "object" &&
        err !== null &&
        "response" in err
      ) {
        const axiosError = err as {
          response?: {
            data?: {
              message?: string;
            };
          };
        };

        setError(
          axiosError.response?.data?.message ||
            "Unable to send your message. Please try again."
        );
      } else {
        setError(
          "Something went wrong. Please check your connection and try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-slate-950 px-4 py-24 sm:px-6 sm:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* Main glow */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.5, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-0 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]"
        />

        {/* Left glow */}

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-64 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[130px]"
        />

        {/* Right glow */}

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-64 top-1/3 h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[130px]"
        />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        {/* Top gradient */}

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-500/[0.03] to-transparent" />

        {/* Bottom gradient */}

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-blue-500/[0.03] to-transparent" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          {/* Badge */}

          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-400 shadow-lg shadow-cyan-500/5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            Get In Touch
          </motion.div>

          {/* Heading */}

          <h2
            id="contact-heading"
            className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Let's Build Something
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Great Together
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Have a project idea, internship opportunity,
            freelance requirement, or simply want to
            connect? Let's turn your idea into something
            meaningful.
          </p>

          {/* Small divider */}

          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400/50" />

            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400/50" />
          </div>
        </motion.div>

        {/* ===================================================
            MAIN GRID
        =================================================== */}

        <div className="grid gap-7 lg:grid-cols-5">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="lg:col-span-2"
          >
            <div className="group relative h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-8">

              {/* Animated border glow */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-500/10 opacity-0 transition duration-700 group-hover:opacity-100"
              />

              {/* Card glow */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-cyan-400/10 blur-[80px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-blue-500/10 blur-[80px]"
              />

              <div className="relative">

                {/* Availability */}

                <div className="mb-8 flex items-center justify-between rounded-2xl border border-emerald-400/10 bg-gradient-to-r from-emerald-400/[0.08] to-transparent px-4 py-3.5">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                    </span>

                    <span className="text-sm font-semibold text-emerald-300">
                      Available for opportunities
                    </span>
                  </div>

                  <FaClock className="text-emerald-400" />
                </div>

                {/* Intro */}

                <div>
                  <motion.div
                    whileHover={{
                      rotate: 5,
                      scale: 1.05,
                    }}
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 to-blue-500/10 text-cyan-400 shadow-xl shadow-cyan-500/10"
                  >
                    <FaComments size={25} />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    Let's Connect
                  </h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    I'm open to meaningful opportunities
                    where I can contribute, learn, and
                    build impactful software.
                  </p>
                </div>

                {/* Contact information */}

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                  className="mt-8 space-y-3"
                >
                  <ContactInfo
                    icon={<FaEnvelope />}
                    title="Email"
                    value="tyagiabhay2004@gmail.com"
                    href="mailto:tyagiabhay2004@gmail.com"
                  />

                  <ContactInfo
                    icon={<FaLinkedin />}
                    title="LinkedIn"
                    value="Abhay Tyagi"
                    href="https://www.linkedin.com/in/abhay-tyagi-13b592323/"
                    external
                  />

                  <ContactInfo
                    icon={<FaGithub />}
                    title="GitHub"
                    value="AbhayTYagi9012543171"
                    href="https://github.com/AbhayTYagi9012543171"
                    external
                  />

                  <ContactInfo
                    icon={<FaMapMarkerAlt />}
                    title="Location"
                    value="Ghaziabad, Uttar Pradesh, India"
                  />
                </motion.div>

                {/* Quick info */}

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <ContactCard
                    icon={<FaCode />}
                    title="MERN Stack"
                    description="Modern web development"
                  />

                  <ContactCard
                    icon={<FaBriefcase />}
                    title="Open to Work"
                    description="Internships & roles"
                  />
                </div>

                {/* Additional status */}

                <div className="mt-3 grid grid-cols-2 gap-3">
                  <ContactCard
                    icon={<FaBolt />}
                    title="Fast Response"
                    description="Quick communication"
                  />

                  <ContactCard
                    icon={<FaGlobe />}
                    title="Remote Ready"
                    description="Worldwide collaboration"
                  />
                </div>

                {/* Social links */}

                <div className="mt-8 border-t border-white/10 pt-7">
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                    Find me online
                  </p>

                  <div className="flex gap-3">
                    <SocialLink
                      href="https://github.com/AbhayTYagi9012543171"
                      label="GitHub"
                      icon={<FaGithub />}
                    />

                    <SocialLink
                      href="https://www.linkedin.com/in/abhay-tyagi-13b592323/"
                      label="LinkedIn"
                      icon={<FaLinkedin />}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE FORM
          ================================================= */}

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-9"
            >
              {/* Form glow */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]"
              />

              <div className="relative">

                {/* Form header */}

                <div className="mb-9">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-px w-8 bg-cyan-400" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                      Send a Message
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    Tell me about your idea
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                    Fill out the form below and I'll get
                    back to you as soon as possible.
                  </p>
                </div>

                {/* Name + Email */}

                <div className="grid gap-5 sm:grid-cols-2">
                  <InputField
                    label="Name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    error={errors.name}
                    onChange={handleChange}
                    required
                  />

                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    error={errors.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Subject */}

                <div className="mt-5">
                  <InputField
                    label="Subject"
                    name="subject"
                    type="text"
                    placeholder="Project, internship, freelance opportunity..."
                    value={form.subject}
                    error={errors.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Message */}

                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-300"
                    >
                      Message
                      <span className="ml-1 text-cyan-400">
                        *
                      </span>
                    </label>

                    <span
                      className={`text-xs font-medium ${
                        form.message.length > 900
                          ? "text-amber-400"
                          : "text-slate-500"
                      }`}
                    >
                      {form.message.length}/
                      {MAX_MESSAGE_LENGTH}
                    </span>
                  </div>

                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    maxLength={MAX_MESSAGE_LENGTH}
                    placeholder="Tell me about your project, goals, requirements, or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(
                      errors.message
                    )}
                    aria-describedby={
                      errors.message
                        ? "message-error"
                        : undefined
                    }
                    className={`w-full resize-none rounded-2xl border bg-slate-950/70 px-4 py-4 text-sm leading-7 text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:ring-2 ${
                      errors.message
                        ? "border-red-400/50 focus:border-red-400 focus:ring-red-400/10"
                        : "border-white/10 hover:border-white/20 focus:border-cyan-400/50 focus:ring-cyan-400/10"
                    }`}
                  />

                  {errors.message && (
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: -5,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      id="message-error"
                      className="mt-2 flex items-center gap-2 text-xs text-red-400"
                    >
                      <FaExclamationCircle />

                      {errors.message}
                    </motion.p>
                  )}
                </div>

                {/* Status messages */}

                <div
                  className="min-h-[1px]"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <AnimatePresence mode="wait">

                    {/* Success */}

                    {success && (
                      <motion.div
                        key="success"
                        initial={{
                          opacity: 0,
                          y: 10,
                          scale: 0.98,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          y: -10,
                        }}
                        className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.08] px-4 py-4"
                      >
                        <FaCheckCircle
                          className="mt-0.5 shrink-0 text-emerald-400"
                          size={18}
                        />

                        <div>
                          <p className="font-semibold text-emerald-300">
                            Message Sent Successfully
                          </p>

                          <p className="mt-1 text-sm leading-6 text-emerald-300/70">
                            {success}
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Error */}

                    {error && (
                      <motion.div
                        key="error"
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -10,
                        }}
                        className="mt-5 flex items-start gap-3 rounded-2xl border border-red-400/20 bg-red-400/[0.08] px-4 py-4"
                      >
                        <FaExclamationCircle
                          className="mt-0.5 shrink-0 text-red-400"
                          size={18}
                        />

                        <div>
                          <p className="font-semibold text-red-300">
                            Unable to Send Message
                          </p>

                          <p className="mt-1 text-sm leading-6 text-red-300/70">
                            {error}
                          </p>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* Submit button */}

                <motion.button
                  whileHover={{
                    y: -3,
                    scale: 1.005,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  type="submit"
                  disabled={loading}
                  className="group relative mt-6 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 px-6 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {/* Shine */}

                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <span className="relative flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <FaSpinner className="animate-spin" />

                        Sending Message...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />

                        Send Message

                        <FaArrowRight className="text-xs opacity-60 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Privacy */}

                <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-slate-600">
                  <FaCheckCircle className="shrink-0 text-emerald-500/60" />

                  <span>
                    Your information is only used to
                    respond to your message.
                  </span>
                </div>

              </div>
            </form>
          </motion.div>
        </div>

        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="relative mt-7 overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.06] via-blue-500/[0.04] to-purple-500/[0.06] p-7 text-center sm:p-9"
        >
          {/* CTA glow */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl"
          />

          <div className="relative">
            <p className="text-sm text-slate-500">
              Prefer a quick conversation?
            </p>

            <a
              href="mailto:tyagiabhay2004@gmail.com"
              className="group mt-2 inline-flex items-center gap-2 text-lg font-bold text-white transition hover:text-cyan-400 sm:text-xl"
            >
              Drop me an email

              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

/* =========================================================
   INPUT FIELD
========================================================= */

const InputField = ({
  label,
  name,
  type,
  placeholder,
  value,
  error,
  required,
  onChange,
}: InputFieldProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-slate-300"
      >
        {label}

        {required && (
          <span className="ml-1 text-cyan-400">
            *
          </span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={
          name === "email"
            ? "email"
            : name === "name"
              ? "name"
              : undefined
        }
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${name}-error` : undefined
        }
        className={`w-full rounded-2xl border bg-slate-950/70 px-4 py-3.5 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 ${
          error
            ? "border-red-400/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/10"
            : "border-white/10 hover:border-white/20 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
        }`}
      />

      <AnimatePresence>
        {error && (
          <motion.p
            initial={{
              opacity: 0,
              y: -5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -5,
            }}
            id={`${name}-error`}
            className="mt-2 flex items-center gap-2 text-xs text-red-400"
          >
            <FaExclamationCircle />

            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

/* =========================================================
   CONTACT INFO
========================================================= */

const ContactInfo = ({
  icon,
  title,
  value,
  href,
  external = false,
}: ContactInfoProps) => {
  const content = (
    <motion.div
      variants={fadeUp}
      whileHover={{
        x: 5,
      }}
      className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-3.5 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.035]"
    >
      {/* Icon */}

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-400/[0.08] text-cyan-400 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/[0.12]">
        {icon}
      </div>

      {/* Text */}

      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
          {title}
        </p>

        <p className="mt-1 truncate text-sm font-medium text-slate-300 transition group-hover:text-white">
          {value}
        </p>
      </div>

      {/* Arrow */}

      {href && (
        <FaArrowRight className="shrink-0 text-xs text-slate-700 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-400" />
      )}
    </motion.div>
  );

  if (!href) {
    return content;
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={
        external
          ? "noopener noreferrer"
          : undefined
      }
      className="block"
    >
      {content}
    </a>
  );
};

/* =========================================================
   CONTACT CARD
========================================================= */

const ContactCard = ({
  icon,
  title,
  description,
}: ContactCardProps) => {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{
        y: -4,
      }}
      className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:border-cyan-400/15 hover:bg-white/[0.04]"
    >
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/[0.08] text-cyan-400 transition duration-300 group-hover:scale-105 group-hover:bg-cyan-400/[0.12]">
        {icon}
      </div>

      <p className="text-sm font-bold text-white">
        {title}
      </p>

      <p className="mt-1 text-xs leading-5 text-slate-600">
        {description}
      </p>
    </motion.div>
  );
};

/* =========================================================
   SOCIAL LINK
========================================================= */

const SocialLink = ({
  href,
  label,
  icon,
}: SocialLinkProps) => {
  return (
    <motion.a
      whileHover={{
        y: -4,
        scale: 1.06,
      }}
      whileTap={{
        scale: 0.95,
      }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 shadow-lg shadow-black/10 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.08] hover:text-cyan-400 hover:shadow-cyan-500/10"
    >
      {icon}
    </motion.a>
  );
};

export default Contact;