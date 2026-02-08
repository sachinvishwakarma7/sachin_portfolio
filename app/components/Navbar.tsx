"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const links = ["home", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={false}
        animate={{
          height: scrolled ? "56px" : "64px",
          boxShadow: scrolled
            ? "0 8px 30px rgba(0,0,0,0.12)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        className="
          fixed top-0 left-0 w-full z-50
          bg-white/70 dark:bg-black/70
          backdrop-blur-md
          border-b border-gray-200 dark:border-gray-800
          transition-colors
        "
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* LOGO */}
          <a
            href="#home"
            className="font-bold text-lg text-black dark:text-white"
          >
            Sachin<span className="text-blue-500">.</span>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l}`}
                className="
                  capitalize
                  text-gray-700 dark:text-gray-300
                  hover:text-blue-500
                  transition-colors
                "
              >
                {l}
              </a>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="
              md:hidden
              text-2xl
              text-black dark:text-white
              p-2 rounded-md
              hover:bg-gray-100 dark:hover:bg-gray-900
              transition
            "
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              md:hidden
              bg-white dark:bg-black
              border-t border-gray-200 dark:border-gray-800
              px-6 py-6
              space-y-4
            "
          >
            {links.map((l) => (
              <a
                key={l}
                href={`#${l}`}
                onClick={() => setOpen(false)}
                className="
                  block
                  capitalize
                  text-gray-700 dark:text-gray-300
                  hover:text-blue-500
                  transition
                "
              >
                {l}
              </a>
            ))}
          </motion.div>
        )}
      </motion.header>

      {/* SPACER */}
      <div className="h-16" />
    </>
  );
}
