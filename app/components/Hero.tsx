"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex items-center
        px-6
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 bg-blue-500/20 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 bg-purple-500/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-500 font-medium mb-3">
            Mobile & Web Developer
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black dark:text-white">
            I build <span className="text-blue-500">fast</span>,{" "}
            <span className="text-purple-500">scalable</span>
            <br />
            mobile & web apps
          </h1>

          <p className="mt-6 text-lg text-gray-700 dark:text-gray-400 max-w-xl">
            I’m <strong>Sachin Vishwakarma</strong>, a React Native, React.js &
            Next.js developer with <strong>3+ years</strong> of experience
            building high-quality applications for startups and businesses.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="
                px-6 py-3 rounded-lg font-medium
                bg-blue-500 text-white
                hover:bg-blue-600
                transition
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
                px-6 py-3 rounded-lg font-medium
                border border-gray-300 dark:border-gray-700
                text-black dark:text-white
                hover:bg-gray-100 dark:hover:bg-gray-900
                transition
              "
            >
              Hire Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative hidden md:flex justify-center"
        >
          <div className="relative rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/70 backdrop-blur p-8 shadow-2xl group overflow-hidden max-w-sm">
            {/* Animated Gradient Glow */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-linear-to-br from-blue-500/15 via-purple-500/15 to-pink-500/10"
            />

            {/* Content */}
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                Tech & Design Stack
              </p>

              <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                Tools I Work With
              </h3>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                  ⚛️ <span>React.js / Next.js</span>
                </li>
                <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                  📱 <span>React Native</span>
                </li>
                <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                  🎨 <span>UI/UX Design (Figma)</span>
                </li>
                <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                  🧠 <span>TypeScript</span>
                </li>
                <li className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                  🔥 <span>Firebase & Node.js</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
