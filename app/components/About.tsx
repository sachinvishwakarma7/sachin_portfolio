"use client";
import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Built", value: "20+" },
  { label: "Tech Stack", value: "10+" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-medium mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Building reliable digital products
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700 dark:text-gray-400">
            I’m a passionate mobile and web developer who enjoys turning complex
            ideas into smooth, scalable, and user-friendly applications.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT – Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Hi, I’m Sachin Vishwakarma
            </h3>

            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
              I specialize in building <strong>mobile applications</strong>{" "}
              using React Native and <strong>modern web apps</strong> with
              React.js and Next.js. With over{" "}
              <strong>3 years of experience</strong>, I’ve worked on real-world
              projects including chat applications, e-commerce platforms, and
              admin dashboards.
            </p>

            <p className="mt-4 text-gray-700 dark:text-gray-400 leading-relaxed">
              I focus on <strong>performance</strong>, clean architecture, and
              creating interfaces that users genuinely enjoy using.
            </p>
          </motion.div>

          {/* RIGHT – Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((item) => (
              <div
                key={item.label}
                className="
                  rounded-2xl
                  p-6
                  text-center
                  bg-white/70 dark:bg-black/60
                  backdrop-blur
                  border border-gray-200 dark:border-gray-800
                  group overflow-hidden
                "
              >
                {/* Gradient Hover Overlay */}
                <div
                  className="
                absolute inset-0
                bg-linear-to-br from-blue-500/10 via-purple-500/10 to-transparent
                opacity-0 group-hover:opacity-100
                transition
              "
                />
                <p className="text-3xl font-bold text-blue-500">{item.value}</p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
