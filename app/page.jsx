"use client";

import "./globals.css";
import { motion } from "framer-motion";
import SkayAssistant from "@/components/SkayAssistant";

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
    desc: "Get instant access to source codes of our mini projects, frameworks, and real-world app examples.",
  },
  {
    id: "tools",
    emoji: "🛠️",
    title: "Tools",
    desc: "Discover free web-based tools for productivity, formatting, conversion, and more. No ads, forever.",
  },
  {
    id: "webapp",
    emoji: "🌐",
    title: "Web App",
    desc: "Browse our premium web apps built for learning, productivity, and business use cases.",
  },
  {
    id: "android",
    emoji: "📱",
    title: "Android",
    desc: "Download Android apps directly or via Play Store. Designed for speed, stability, and offline use.",
  },
  {
    id: "about",
    emoji: "ℹ️",
    title: "About",
    desc: "Xel-Edu is an independent platform focused on developer education, tool-building, and AI integration.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-gradient-to-tr from-gray-900 via-indigo-900 to-black text-white min-h-screen font-sans scroll-smooth">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          Welcome to Xel-Edu
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl max-w-2xl text-gray-300"
        >
          Futuristic Learning Platform for Modern Developers & Tech Enthusiasts
        </motion.p>
      </section>

      {/* Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 py-20">
        {sections.map((sec, index) => (
          <motion.div
            key={sec.id}
            id={sec.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-2">{sec.emoji} {sec.title}</h3>
            <p className="text-gray-300">{sec.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Optional Assistant */}
      <SkayAssistant />
    </main>
  );
}
