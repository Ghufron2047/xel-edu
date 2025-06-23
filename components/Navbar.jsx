"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    darkMode
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [darkMode]);

  return (
    <nav className="navbar text-white flex justify-between items-center">
      <div className="logo text-xl font-bold text-cyan-400">Xel-Edu</div>
      <ul className="nav-links hidden sm:flex gap-6 text-sm">
        <li><a href="#home">Home</a></li>
        <li><a href="#academic">Academic</a></li>
        <li><a href="#sourcecode">Code</a></li>
        <li><a href="#tools">Tools</a></li>
        <li><a href="#webapp">WebApp</a></li>
        <li><a href="#android">Android</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="theme-toggle ml-4"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </nav>
  );
}
