'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    ['Home', '/'],
    ['Academic', '/academic'],
    ['SourceCode', '/source-code'],
    ['Tools', '/tools'],
    ['WebApp', '/web-app'],
    ['Android', '/android'],
    ['About', '/about'],
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/70 backdrop-blur-lg shadow-md' : 'bg-[#121212]'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-left gap-2">
          <img src="/asset/Logo.png" alt="Xel-Edu Logo" className="w-4 h-4" />
          <span className="font-bold text-xl text-white">Xel-Edu</span>
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav links */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#121212] md:bg-transparent md:flex md:items-center md:gap-6 transition-all duration-300 ease-in-out ${
            open ? 'block' : 'hidden'
          }`}
        >
          {links.map(([label, path]) => (
            <Link
              key={path}
              href={path}
              className="block md:inline-block px-4 py-2 text-white hover:text-cyan-400 transition font-medium"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
