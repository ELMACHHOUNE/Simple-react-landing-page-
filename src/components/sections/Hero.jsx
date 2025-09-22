import { SparklesCore } from "../ui/sparkles";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.5}
          particleDensity={120}
          className="w-full h-full"
          particleColor="#FFFFFF"
          hoverRepulse
          // clickPush stays enabled by default
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <p className="text-[#D6F7FC] font-medium">Hello, I’m</p>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-[#223460] to-[#93A7CA]">
              Mohamed EL MACHHOUNE
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-white/90 mt-2">
            Full‑Stack Developer
          </h2>
          <p className="text-white/70 mt-4 max-w-xl md:pr-6 mx-auto md:mx-0">
            I craft fast, accessible web apps with modern stacks and a focus on
            delightful UI/UX. Always exploring new ideas and building useful
            tools.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 rounded-lg bg-white text-black font-semibold shadow-sm hover:shadow transition"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 rounded-lg border border-white/30 text-white hover:bg-white/10 transition"
            >
              Contact Me
            </motion.a>
          </div>

          <div className="mt-5 flex items-center gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white transition"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.79-1.35-1.79-1.11-.76.08-.75.08-.75 1.23.09 1.88 1.26 1.88 1.26 1.09 1.87 2.86 1.33 3.56 1.02.11-.79.43-1.33.78-1.64-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.25-3.22-.13-.31-.54-1.56.12-3.26 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.8c1.02 0 2.05.14 3.01.41 2.28-1.55 3.29-1.23 3.29-1.23.66 1.7.25 2.95.12 3.26.78.84 1.25 1.91 1.25 3.22 0 4.6-2.82 5.62-5.5 5.92.44.38.83 1.12.83 2.26v3.35c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white transition"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.67-1.86 3.43-1.86 3.66 0 4.34 2.41 4.34 5.55v6.2zM5.34 7.43a2.06 2.06 0 1 1 0-4.11 2.06 2.06 0 0 1 0 4.11zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="order-1 md:order-2 relative"
        >
          <motion.div
            whileHover={{ rotate: -2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className="group relative w-64 h-64 md:w-80 md:h-80 mx-auto"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-teal-400/40 via-purple-500/30 to-pink-500/40 blur-xl opacity-60 group-hover:opacity-90 transition" />
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur">
              <img
                src="profile.jpg"
                alt="Mohamed EL MACHHOUNE"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
