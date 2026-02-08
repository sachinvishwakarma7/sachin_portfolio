"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 font-medium mb-2">Hire Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Let’s work together
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700 dark:text-gray-400">
            Have a project in mind or looking for a React / React Native
            developer? I’m open to freelance, full-time, and contract
            opportunities.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
              Why hire me?
            </h3>

            <ul className="space-y-4 text-gray-700 dark:text-gray-400">
              <li>🟢 3+ years experience in real-world applications</li>
              <li>🟢 Strong in React Native & Next.js</li>
              <li>🟢 Clean code, performance-focused</li>
              <li>🟢 Clear communication & timely delivery</li>
            </ul>

            <div className="mt-8">
              <p className="text-sm text-gray-500">Email me directly</p>
              <p className="text-lg font-medium text-black dark:text-white">
                v404464@gmail.com
              </p>
            </div>
          </motion.div>

          {/* RIGHT – Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              rounded-3xl p-8
              bg-white/70 dark:bg-black/60
              backdrop-blur
              border border-gray-200 dark:border-gray-800
              shadow-xl space-y-5
            "
          >
            {/* Name */}
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-3 rounded-lg
                bg-transparent border border-gray-300 dark:border-gray-700
                text-black dark:text-white
                focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-3 rounded-lg
                bg-transparent border border-gray-300 dark:border-gray-700
                text-black dark:text-white
                focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-600 dark:text-gray-400">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-3 rounded-lg
                bg-transparent border border-gray-300 dark:border-gray-700
                text-black dark:text-white
                focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Status */}
            {status === "success" && (
              <p className="text-green-500 text-sm">
                ✅ Message sent successfully!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm">
                ❌ Failed to send message. Try again.
              </p>
            )}

            <button
              disabled={loading}
              className="w-full py-3 rounded-lg font-medium
              bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
