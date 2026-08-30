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
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
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
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const slideRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

const Contact = () => {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

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
      newErrors.name = "Name must be at least 2 characters.";
    } else if (name.length > 80) {
      newErrors.name = "Name cannot exceed 80 characters.";
    }

    if (!email) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!subject) {
      newErrors.subject = "Please enter a subject.";
    } else if (subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters.";
    } else if (subject.length > 150) {
      newErrors.subject = "Subject cannot exceed 150 characters.";
    }

    if (!message) {
      newErrors.message = "Please enter your message.";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    } else if (message.length > MAX_MESSAGE_LENGTH) {
      newErrors.message = `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =======================================================
     INPUT CHANGE
  ======================================================= */

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
      className="relative overflow-hidden bg-slate-950 px-6 py-24 sm:py-32"
    >
      {/* Background */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute -left-48 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute -right-48 top-1/3 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            Get In Touch
          </div>

          <h2
            id="contact-heading"
            className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Great Together
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Have a project idea, internship opportunity, freelance
            requirement, or simply want to connect? I'd love to hear
            from you.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left Side */}

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
            <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
              {/* Glow */}

              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

              {/* Availability */}

              <div className="relative mb-8 flex items-center justify-between rounded-2xl border border-emerald-400/10 bg-emerald-400/5 px-4 py-3">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-sm font-medium text-emerald-300">
                    Available for opportunities
                  </span>
                </div>

                <FaClock className="text-emerald-400" />
              </div>

              {/* Intro */}

              <div className="relative">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 shadow-lg shadow-cyan-500/10">
                  <FaComments size={23} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Let's Connect
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  I'm open to meaningful opportunities where I can
                  contribute, learn, and build impactful software.
                </p>
              </div>

              {/* Contact Information */}

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                className="relative mt-8 space-y-4"
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

              {/* Quick Info */}

              <div className="relative mt-8 grid grid-cols-2 gap-3">
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

              {/* Social Links */}

              <div className="relative mt-8 border-t border-white/10 pt-7">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
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
          </motion.div>

          {/* Right Side Form */}

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
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-9"
            >
              {/* Form Header */}

              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Send a Message
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  Tell me about your idea
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Fill out the form and I'll get back to you as soon
                  as possible.
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
                    <span className="ml-1 text-cyan-400">*</span>
                  </label>

                  <span
                    className={`text-xs ${
                      form.message.length > 900
                        ? "text-amber-400"
                        : "text-slate-500"
                    }`}
                  >
                    {form.message.length}/{MAX_MESSAGE_LENGTH}
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
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  className={`w-full resize-none rounded-2xl border bg-slate-950/60 px-4 py-3.5 text-sm leading-7 text-white outline-none transition duration-300 placeholder:text-slate-600 focus:ring-2 ${
                    errors.message
                      ? "border-red-400/50 focus:border-red-400 focus:ring-red-400/10"
                      : "border-white/10 focus:border-cyan-400/50 focus:ring-cyan-400/10"
                  }`}
                />

                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-2 flex items-center gap-2 text-xs text-red-400"
                  >
                    <FaExclamationCircle />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Status Messages */}

              <div
                className="min-h-[1px]"
                aria-live="polite"
                aria-atomic="true"
              >
                <AnimatePresence mode="wait">
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
                      className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-4"
                    >
                      <FaCheckCircle
                        className="mt-0.5 shrink-0 text-emerald-400"
                        size={18}
                      />

                      <div>
                        <p className="font-semibold text-emerald-300">
                          Message Sent Successfully
                        </p>

                        <p className="mt-1 text-sm text-emerald-300/75">
                          {success}
                        </p>
                      </div>
                    </motion.div>
                  )}

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
                      className="mt-5 flex items-start gap-3 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-4"
                    >
                      <FaExclamationCircle
                        className="mt-0.5 shrink-0 text-red-400"
                        size={18}
                      />

                      <div>
                        <p className="font-semibold text-red-300">
                          Unable to Send Message
                        </p>

                        <p className="mt-1 text-sm text-red-300/75">
                          {error}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Button */}

              <motion.button
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="submit"
                disabled={loading}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-500/10 transition disabled:cursor-not-allowed disabled:opacity-60"
              >
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
              </motion.button>

              {/* Privacy */}

              <div className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-slate-600">
                <FaCheckCircle className="text-emerald-500/60" />

                <span>
                  Your information is only used to respond to your
                  message.
                </span>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-8 rounded-3xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/[0.06] via-blue-400/[0.04] to-purple-400/[0.06] p-6 text-center sm:p-8"
        >
          <p className="text-sm text-slate-400">
            Prefer a quick conversation?
          </p>

          <a
            href="mailto:tyagiabhay2004@gmail.com"
            className="group mt-2 inline-flex items-center gap-2 text-lg font-semibold text-white transition hover:text-cyan-400"
          >
            Drop me an email

            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
          </a>
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
          <span className="ml-1 text-cyan-400">*</span>
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
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-2xl border bg-slate-950/60 px-4 py-3.5 text-sm text-white outline-none transition duration-300 placeholder:text-slate-600 focus:ring-2 ${
          error
            ? "border-red-400/50 focus:border-red-400 focus:ring-red-400/10"
            : "border-white/10 focus:border-cyan-400/50 focus:ring-cyan-400/10"
        }`}
      />

      {error && (
        <p
          id={`${name}-error`}
          className="mt-2 flex items-center gap-2 text-xs text-red-400"
        >
          <FaExclamationCircle />
          {error}
        </p>
      )}
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
        x: 4,
      }}
      className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-3 transition hover:border-cyan-400/20 hover:bg-cyan-400/[0.03]"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 transition duration-300 group-hover:scale-105 group-hover:bg-cyan-400/15">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          {title}
        </p>

        <p className="mt-1 truncate text-sm text-slate-300 group-hover:text-white">
          {value}
        </p>
      </div>

      {href && (
        <FaArrowRight className="ml-auto shrink-0 text-xs text-slate-700 transition group-hover:translate-x-1 group-hover:text-cyan-400" />
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
      rel={external ? "noopener noreferrer" : undefined}
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
        y: -3,
      }}
      className="rounded-2xl border border-white/5 bg-white/[0.02] p-4"
    >
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
        {icon}
      </div>

      <p className="text-sm font-semibold text-white">
        {title}
      </p>

      <p className="mt-1 text-xs leading-5 text-slate-500">
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
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.96,
      }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
    >
      {icon}
    </motion.a>
  );
};

export default Contact;