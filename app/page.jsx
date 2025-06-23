'use client';
import { useEffect } from 'react';
import SkayAssistant from '@/components/SkayAssistant';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HomePage() {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    });
    sections.forEach(section => observer.observe(section));
  }, []);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="home fade-in">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Welcome to <span className="text-cyan-400">Xel-Edu</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Futuristic Learning Platform for Developers, Creators, and Modern Thinkers.
          </p>
        </div>
      </section>

      {/* Sections */}
      <div className="grid gap-10 py-16 px-4 sm:px-8 max-w-5xl mx-auto">
        {[
          { title: '📚 Academic', desc: 'Explore curated free learning resources including tutorials, PDFs, and hands-on guides to boost your skills.' },
          { title: '💻 Source Code', desc: 'Get access to real-world projects, templates, and frameworks built by developers for developers.' },
          { title: '🛠️ Tools', desc: 'Use free, fast, and ad-free web tools for productivity, formatting, AI, and more.' },
          { title: '🌐 Web App', desc: 'Browse premium, responsive web apps for learning and business use cases.' },
          { title: '📱 Android', desc: 'Download Android apps built for stability, speed, and offline-first usage.' },
          { title: 'ℹ️ About', desc: 'Xel-Edu is a futuristic learning and tool platform for developers, educators, and innovators.' },
        ].map((s, i) => (
          <section key={i} className="fade-in transition duration-700 glass-card backdrop-blur-md rounded-xl border border-white/10 p-6 shadow-md hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-cyan-400 mb-2">{s.title}</h3>
            <p className="text-gray-300">{s.desc}</p>
          </section>
        ))}
      </div>

      <Footer />
      <SkayAssistant />
    </main>
  );
}
