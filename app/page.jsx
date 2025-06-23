'use client';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SkayAssistant from '@/components/SkayAssistant';

export default function HomePage() {
  useEffect(() => {
    document.querySelectorAll('.fade-in').forEach(el => {
      el.classList.add('show');
    });
  }, []);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="home">
        <div className="hero text-center">
          <h2>Welcome to <span className="text-cyan-400">Xel-Edu</span></h2>
          <p>Futuristic Learning Platform for Developers, Creators, and Modern Thinkers.</p>
          <a className="cta-button mt-4 inline-block" href="#academic">Get Started</a>
        </div>
      </section>

      {/* Sections */}
      <div className="page-container fade-in">
        {[
          { title: '📚 Academic', desc: 'Explore curated resources: tutorials, PDFs, guides.' },
          { title: '💻 Source Code', desc: 'Access projects, templates, and frameworks.' },
          { title: '🛠️ Tools', desc: 'Productivity tools, AI tools, formatters.' },
          { title: '🌐 WebApp', desc: 'Responsive apps for learning/business.' },
          { title: '📱 Android', desc: 'Download stable, offline-first Android apps.' },
          { title: 'ℹ️ About', desc: 'Xel-Edu is for devs, educators, and innovators.' },
        ].map((item, idx) => (
          <div className="card my-6" key={idx}>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <Footer />
      <SkayAssistant />
    </main>
  );
}
