"use client";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo", "Firebase", "Notifee"],
  },
  {
    title: "State & Data",
    skills: ["Redux", "Redux Toolkit", "Context API", "REST APIs"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Jira", "Bitbucket", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-medium mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Technologies I work with
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            A focused set of tools and technologies I use to build fast,
            scalable, and maintainable applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="
                  rounded-2xl
                  p-6
                group
                  bg-white/70 dark:bg-black/60
                  backdrop-blur
                  border border-gray-200 dark:border-gray-800
                  hover:shadow-xl
                  transition
                  overflow-hidden
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
              <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                {group.title}
              </h3>

              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="
                      text-sm
                      text-gray-700 dark:text-gray-400
                      flex items-center gap-2
                    "
                  >
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
