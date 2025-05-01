"use client";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed bottom-5 left-5 p-2 rounded-full bg-gray-300 dark:bg-gray-700"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
}