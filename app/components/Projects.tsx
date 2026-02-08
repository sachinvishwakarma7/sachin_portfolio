"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Real-Time Chat App",
    description:
      "A WhatsApp-like chat application with real-time messaging, user authentication, and dark mode.",
    tech: ["React Native", "Firebase", "Redux"],
    link: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce app with cart, payments, product listing, and admin dashboard.",
    tech: ["React", "Next.js", "Node.js"],
    link: "#",
  },
  {
    title: "Admin Dashboard",
    description:
      "Responsive admin panel with analytics, role-based access, and modern UI components.",
    tech: ["Next.js", "Tailwind", "REST API"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-medium mb-2">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Selected Work
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my experience in building
            scalable mobile and web applications.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="
                group
                relative
                rounded-3xl
                p-6
                bg-white dark:bg-black
                border border-gray-200 dark:border-gray-800
                overflow-hidden
                hover:shadow-2xl
                transition
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

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-700 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="
                        px-3 py-1
                        rounded-full
                        text-xs font-medium
                        bg-gray-100 dark:bg-gray-900
                        text-gray-700 dark:text-gray-300
                      "
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  className="
                    inline-block mt-6
                    text-blue-500 font-medium
                    hover:underline
                  "
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
