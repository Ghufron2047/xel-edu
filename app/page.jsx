"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    id: "academic",
    emoji: "📚",
    title: "Academic",
    desc: "Explore curated free learning resources including tutorials, PDFs, and hands-on guides to boost your skills.",
  },
  {
    id: "sourcecode",
    emoji: "💻",
    title: "Source Code",
    desc: "Get access to real-world projects, templates, and frameworks built by developers for developers.",
  },
  {
    id: "tools",
    emoji: "🛠️",
    title: "Tools",
    desc: "Use free, fast, and ad-free web tools for productivity, formatting, AI, and more.",
  },
  {
    id: "webapp",
    emoji: "🌐",
    title: "Web App",
    desc: "Browse premium, responsive web apps for learning and business use cases.",
  },
  {
    id: "android",
    emoji: "📱",
    title: "Android",
    desc: "Download Android apps built for stability, speed, and offline-first usage.",
  },
  {
    id: "about",
    emoji: "ℹ️",
    title: "About",
    desc: "Xel-Edu is a futuristic learning and tool platform for developers, educators, and innovators.",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground font-sans scroll-smooth">
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-white drop-shadow-lg"
          >
            Welcome to Xel-Edu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl mt-4 max-w-2xl text-white/90"
          >
            Futuristic Learning Platform for Developers, Creators, and Modern Thinkers.
          </motion.p>
        </section>

        {/* Section Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-20">
          {sections.map((item, i) => (
            <motion.div
              key={item.id}
              id={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-lg hover:shadow-2xl transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {item.emoji} {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
