"use client";

import { motion } from "framer-motion";

export default function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Light Mode Gradient */}
      <motion.div
        aria-hidden
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.25),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.25),transparent_40%)]
          dark:hidden
        "
        animate={{
          backgroundPosition: [
            "0% 0%, 100% 0%, 50% 100%",
            "100% 100%, 0% 100%, 50% 0%",
          ],
        }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Dark Mode Gradient */}
      <motion.div
        aria-hidden
        className="
          absolute inset-0 hidden dark:block
          bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.18),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.18),transparent_45%)]
        "
        animate={{
          backgroundPosition: [
            "0% 0%, 100% 0%, 50% 100%",
            "100% 100%, 0% 100%, 50% 0%",
          ],
        }}
        transition={{
          duration: 22,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
}
