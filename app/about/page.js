"use client";

import React, { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    window.location.href = 'https://ghufron2047.github.io/portfolio';
  }, []);

  return (
    <div className="p-6 text-white max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Mengalihkan ke Portfolio...</h2>
      <p className="text-center text-gray-400">Jika tidak diarahkan secara otomatis, klik <a href="https://ghufron2047.github.io/portfolio" className="text-blue-400 underline">di sini</a>.</p>
    </div>
  );
}
