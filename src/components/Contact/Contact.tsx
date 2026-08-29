import {
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";

import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

import {
  FaCheckCircle,
  FaEnvelope,
  FaExclamationCircle,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa";

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

interface InputFieldProps {
  label: string;
  name: keyof ContactForm;
  type: "text" | "email";
  placeholder: string;
  value: string;
  error?: string;
  onChange: (
    event: ChangeEvent<HTMLInputElement>
  ) => void;
  autoComplete?: string;
}

interface ContactInfoProps {
  icon: ReactNode;
  title: string;
  value: string;
  href?: string;
  external?: boolean;
}

/* =========================================================
   CONSTANTS
========================================================= */

const MAX_MESSAGE_LENGTH = 1000;

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

/* =========================================================
   VALIDATION
========================================================= */

const validateForm = (
  form: ContactForm
): FormErrors => {
  const errors: FormErrors = {};

  const name = form.name.trim();
  const email = form.email.trim();
  const subject = form.subject.trim();
  const message = form.message.trim();

  /* Name */
  if (!name) {
    errors.name = "Name is required.";
  } else if (name.length < 2) {
    errors.name =
      "Name must contain at least 2 characters.";
  } else if (name.length > 80) {
    errors.name =
      "Name cannot exceed 80 characters.";
  }

  /* Email */
  if (!email) {
    errors.email = "Email is required.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    errors.email =
      "Please enter a valid email address.";
  } else if (email.length > 120) {
    errors.email =
      "Email cannot exceed 120 characters.";
  }

  /* Subject */
  if (!subject) {
    errors.subject = "Subject is required.";
  } else if (subject.length < 3) {
    errors.subject =
      "Subject must contain at least 3 characters.";
  } else if (subject.length > 150) {
    errors.subject =
      "Subject cannot exceed 150 characters.";
  }

  /* Message */
  if (!message) {
    errors.message = "Message is required.";
  } else if (message.length < 10) {
    errors.message =
      "Message must contain at least 10 characters.";
  } else if (
    message.length > MAX_MESSAGE_LENGTH
  ) {
    errors.message =
      `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`;
  }

  return errors;
};

/* =========================================================
   CONTACT COMPONENT
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
     HANDLE INPUT CHANGE
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

    if (
      errors[name as keyof FormErrors]
    ) {
      setErrors((previous) => ({
        ...previous,
        [name]: undefined,
      }));
    }

    if (success) {
      setSuccess("");
    }

    if (error) {
      setError("");
    }
  };

  /* =======================================================
     HANDLE SUBMIT
  ======================================================= */

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    setSuccess("");
    setError("");

    const validationErrors =
      validateForm(form);

    setErrors(validationErrors);

    if (
      Object.keys(validationErrors).length > 0
    ) {
      return;
    }

    try {
      setLoading(true);

      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      };

      const response = await api.post(
        "/contact",
        payload
      );

      if (response.data?.success) {
        setSuccess(
          response.data.message ||
            "Your message has been sent successfully!"
        );

        setForm(initialForm);
        setErrors({});

        window.setTimeout(() => {
          setSuccess("");
        }, 6000);
      } else {
        setError(
          response.data?.message ||
            "Unable to send your message. Please try again."
        );
      }
    } catch (err: unknown) {
      console.error(
        "Contact form submission error:",
        err
      );

      if (axios.isAxiosError(err)) {
        const serverMessage =
          err.response?.data?.message;

        if (serverMessage) {
          setError(serverMessage);
        } else if (err.code === "ECONNABORTED") {
          setError(
            "The request took too long. Please try again."
          );
        } else if (!err.response) {
          setError(
            "Unable to connect to the server. Please check your connection."
          );
        } else if (
          err.response.status >= 500
        ) {
          setError(
            "The server is temporarily unavailable. Please try again later."
          );
        } else {
          setError(
            "Unable to send your message. Please try again."
          );
        }
      } else {
        setError(
          "Something went wrong. Please try again."
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
      className="
        relative
        overflow-hidden
        bg-slate-900
        px-6
        py-24
        sm:py-32
      "
    >
      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-96
          w-96
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-80
          w-80
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/3
          h-80
          w-80
          rounded-full
          bg-purple-500/10
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.04),transparent_45%)]
        "
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.header
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mx-auto
            mb-14
            max-w-3xl
            text-center
          "
        >
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/5
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-cyan-400
            "
          >
            <span
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-cyan-400
                shadow-lg
                shadow-cyan-400/50
              "
            />

            Get In Touch
          </div>

          <h2
            id="contact-heading"
            className="
              text-4xl
              font-black
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Let's{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                via-blue-400
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              Work Together
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-slate-400
              sm:text-lg
            "
          >
            Have a project, internship opportunity,
            freelance requirement, or simply want to
            connect? I'd love to hear from you.
          </p>
        </motion.header>

        {/* ===================================================
            CONTENT
        =================================================== */}

        <div
          className="
            grid
            gap-8
            lg:grid-cols-5
          "
        >
          {/* =================================================
              CONTACT INFORMATION
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="lg:col-span-2"
          >
            <div
              className="
                relative
                h-full
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-7
                shadow-2xl
                shadow-black/20
                backdrop-blur-xl
                sm:p-8
              "
            >
              {/* Card glow */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-cyan-400/10
                  blur-3xl
                "
              />

              {/* Heading */}

              <div className="relative mb-9">
                <div
                  className="
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-cyan-400/20
                    bg-cyan-400/10
                    text-cyan-400
                    shadow-lg
                    shadow-cyan-500/10
                  "
                >
                  <FaEnvelope size={22} />
                </div>

                <p
                  className="
                    mb-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-cyan-400
                  "
                >
                  Contact
                </p>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  Contact Information
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-slate-400
                  "
                >
                  I'm open to internship opportunities,
                  freelance projects, collaborative work,
                  and full-time MERN Stack Developer roles.
                </p>
              </div>

              {/* Contact Details */}

              <div className="relative space-y-5">

                <ContactInfo
                  icon={<FaEnvelope />}
                  title="Email"
                  value="tyagiabhay2004@gmail.com"
                  href="mailto:tyagiabhay2004@gmail.com"
                />

                <ContactInfo
                  icon={<FaLinkedin />}
                  title="LinkedIn"
                  value="LinkedIn Profile"
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

              </div>

              {/* Social Links */}

              <div
                className="
                  relative
                  mt-10
                  border-t
                  border-white/10
                  pt-7
                "
              >
                <p
                  className="
                    mb-4
                    text-sm
                    font-semibold
                    text-slate-300
                  "
                >
                  Find me online
                </p>

                <div className="flex gap-3">

                  <a
                    href="https://github.com/AbhayTYagi9012543171"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit GitHub profile"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      text-slate-300
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:border-cyan-400/40
                      hover:bg-cyan-400/10
                      hover:text-cyan-400
                      focus:outline-none
                      focus:ring-2
                      focus:ring-cyan-400/40
                    "
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/abhay-tyagi-13b592323/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit LinkedIn profile"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      text-slate-300
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:border-cyan-400/40
                      hover:bg-cyan-400/10
                      hover:text-cyan-400
                      focus:outline-none
                      focus:ring-2
                      focus:ring-cyan-400/40
                    "
                  >
                    <FaLinkedin />
                  </a>

                </div>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-7
                shadow-2xl
                shadow-black/20
                backdrop-blur-xl
                sm:p-8
              "
            >
              {/* Form Heading */}

              <div className="mb-7">
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-cyan-400
                  "
                >
                  Send a Message
                </p>

                <h3
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  Tell me about your project
                </h3>
              </div>

              {/* Name + Email */}

              <div
                className="
                  grid
                  gap-5
                  sm:grid-cols-2
                "
              >
                <InputField
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  error={errors.name}
                  onChange={handleChange}
                  autoComplete="name"
                />

                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  error={errors.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </div>

              {/* Subject */}

              <div className="mt-5">
                <InputField
                  label="Subject"
                  name="subject"
                  type="text"
                  placeholder="Project / Job Opportunity"
                  value={form.subject}
                  error={errors.subject}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              {/* Message */}

              <div className="mt-5">

                <div
                  className="
                    mb-2
                    flex
                    items-center
                    justify-between
                  "
                >
                  <label
                    htmlFor="message"
                    className="
                      block
                      text-sm
                      font-medium
                      text-slate-300
                    "
                  >
                    Message
                  </label>

                  <span
                    className={`
                      text-xs
                      ${
                        form.message.length >
                        900
                          ? "text-amber-400"
                          : "text-slate-500"
                      }
                    `}
                  >
                    {form.message.length}/
                    {MAX_MESSAGE_LENGTH}
                  </span>
                </div>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  maxLength={MAX_MESSAGE_LENGTH}
                  placeholder="Tell me about your project or opportunity..."
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
                  className={`
                    w-full
                    resize-none
                    rounded-xl
                    border
                    bg-slate-950/60
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    transition
                    duration-200
                    placeholder:text-slate-600
                    focus:ring-2

                    ${
                      errors.message
                        ? `
                          border-red-400/50
                          focus:border-red-400
                          focus:ring-red-400/20
                        `
                        : `
                          border-white/10
                          focus:border-cyan-400/50
                          focus:ring-cyan-400/20
                        `
                    }
                  `}
                />

                {errors.message && (
                  <p
                    id="message-error"
                    className="
                      mt-2
                      flex
                      items-center
                      gap-2
                      text-xs
                      text-red-400
                    "
                  >
                    <FaExclamationCircle />

                    {errors.message}
                  </p>
                )}
              </div>

              {/* Success / Error */}

              <AnimatePresence mode="wait">

                {success && (
                  <motion.div
                    key="success"
                    role="status"
                    aria-live="polite"
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
                    className="
                      mt-5
                      flex
                      items-start
                      gap-3
                      rounded-xl
                      border
                      border-emerald-400/20
                      bg-emerald-400/10
                      px-4
                      py-4
                      text-sm
                      text-emerald-300
                    "
                  >
                    <FaCheckCircle
                      className="mt-0.5 shrink-0"
                      size={18}
                    />

                    <div>
                      <p className="font-semibold">
                        Message Sent!
                      </p>

                      <p className="mt-1 text-emerald-300/80">
                        {success}
                      </p>
                    </div>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    key="error"
                    role="alert"
                    aria-live="assertive"
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: 10,
                    }}
                    className="
                      mt-5
                      flex
                      items-start
                      gap-3
                      rounded-xl
                      border
                      border-red-400/20
                      bg-red-400/10
                      px-4
                      py-4
                      text-sm
                      text-red-300
                    "
                  >
                    <FaExclamationCircle
                      className="mt-0.5 shrink-0"
                      size={18}
                    />

                    <div>
                      <p className="font-semibold">
                        Unable to Send
                      </p>

                      <p className="mt-1 text-red-300/80">
                        {error}
                      </p>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                className="
                  group
                  mt-6
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-cyan-400
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-slate-950
                  shadow-lg
                  shadow-cyan-400/10
                  transition
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-cyan-300
                  hover:shadow-cyan-400/20

                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-400/50
                  focus:ring-offset-2
                  focus:ring-offset-slate-900

                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  disabled:hover:translate-y-0
                "
              >
                {loading ? (
                  <>
                    <FaSpinner
                      className="animate-spin"
                    />

                    Sending Message...
                  </>
                ) : (
                  <>
                    <FaPaperPlane
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />

                    Send Message
                  </>
                )}
              </button>

              <p
                className="
                  mt-4
                  text-center
                  text-xs
                  leading-5
                  text-slate-600
                "
              >
                Your information is only used to
                respond to your message.
              </p>
            </form>
          </motion.div>
        </div>
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
  onChange,
  autoComplete,
}: InputFieldProps) => {
  const errorId = `${name}-error`;

  return (
    <div>
      <label
        htmlFor={name}
        className="
          mb-2
          block
          text-sm
          font-medium
          text-slate-300
        "
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? errorId : undefined
        }
        className={`
          w-full
          rounded-xl
          border
          bg-slate-950/60
          px-4
          py-3
          text-sm
          text-white
          outline-none
          transition
          duration-200
          placeholder:text-slate-600
          focus:ring-2

          ${
            error
              ? `
                border-red-400/50
                focus:border-red-400
                focus:ring-red-400/20
              `
              : `
                border-white/10
                focus:border-cyan-400/50
                focus:ring-cyan-400/20
              `
          }
        `}
      />

      {error && (
        <p
          id={errorId}
          className="
            mt-2
            flex
            items-center
            gap-2
            text-xs
            text-red-400
          "
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
    <div
      className="
        flex
        items-center
        gap-4
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-cyan-400/10
          bg-cyan-400/10
          text-cyan-400
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p
          className="
            text-xs
            uppercase
            tracking-wider
            text-slate-500
          "
        >
          {title}
        </p>

        <p
          className="
            mt-1
            truncate
            text-sm
            text-slate-300
          "
        >
          {value}
        </p>
      </div>
    </div>
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
      className="
        block
        rounded-xl
        transition
        duration-300
        hover:bg-white/[0.03]
        hover:opacity-90
        focus:outline-none
        focus:ring-2
        focus:ring-cyan-400/30
      "
    >
      {content}
    </a>
  );
};

export default Contact;