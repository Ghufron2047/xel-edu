import React from 'react';

export default function About() {
  return (
    <div className="p-6 text-white max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Tentang Xel-Edu 🚀</h2>
      
      <p className="mb-4">
        <strong>Xel-Edu</strong> adalah platform edukasi digital modern yang menyediakan materi akademik gratis,
        source code open source, tools belajar, serta aplikasi premium berbasis web dan Android.
      </p>

      <p className="mb-4">
        Kami percaya bahwa edukasi seharusnya dapat diakses dengan mudah, tampil menarik, dan dibarengi
        dengan teknologi masa kini. Platform ini dikembangkan dengan tampilan futuristik, dark mode, serta
        dilengkapi dengan asisten virtual <strong>Skay Assistant</strong>.
      </p>

      <p className="mb-4">
        <strong>Fitur unggulan:</strong>
        <ul className="list-disc list-inside ml-4">
          <li>Materi akademik SMA/SMK gratis</li>
          <li>Source code interaktif dan bisa diunduh</li>
          <li>Tools belajar gratis dan ringan</li>
          <li>Aplikasi premium berbasis Web dan Android</li>
          <li>Integrasi AI Assistant (Dialogflow)</li>
        </ul>
      </p>

      <p className="mb-4">
        <strong>Developer:</strong> @XelProject | 💻 GitHub: <a href="https://github.com/" target="_blank" className="text-blue-400 underline">XelProject</a>
      </p>

      <p className="mt-6 text-center text-gray-400">DISCLIMER : belum selesai. V1.3 - Dibuat dengan ❤️ menggunakan React, Node.js, dan MongoDB</p>
    </div>
  );
}
