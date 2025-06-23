export default function HomePage() {
  return (
    <main className="text-foreground bg-background font-sans">
      {/* HERO */}
      <section
        className="hero-section bg-[url('/asset/hero.jpg')]"
        style={{ backgroundImage: "url('/asset/hero.jpg')" }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Xel-Edu</h1>
          <p className="hero-subtitle">
            E-learning platform, blog information source, and project selling
          </p>
          <a href="#about" className="cta-button">Explore Now</a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">
          Kami menyediakan informasi teknologi, materi belajar, dan penjualan project berkualitas.
        </p>
        <div className="section-content">
          <div className="feature-card">
            <h3>Materi Pemrograman</h3>
            <p>Dasar hingga lanjutan: HTML, JS, PHP, Python, Node, Laravel</p>
          </div>
          <div className="feature-card">
            <h3>Artikel Blog</h3>
            <p>Tutorial dan inspirasi dari dunia pemrograman dan AI terbaru</p>
          </div>
          <div className="feature-card">
            <h3>Jual Project</h3>
            <p>Project kuliah, landing page, dashboard admin, toko online, dll</p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section bg-muted">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">Siapa di balik Xel-Edu</p>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          <div className="text-center">
            <img src="/asset/tim1.jpg" alt="" className="w-40 h-40 object-cover img-rounded" />
            <h4 className="mt-2 font-semibold">Syarifudin Ghufron</h4>
            <p className="text-sm text-gray-500">Founder & Developer</p>
          </div>
          <div className="text-center">
            <img src="/asset/tim2.jpg" alt="" className="w-40 h-40 object-cover img-rounded" />
            <h4 className="mt-2 font-semibold">Tim Xel-Edu</h4>
            <p className="text-sm text-gray-500">Content & Design</p>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="section">
        <h2 className="section-title">Latest Blog</h2>
        <p className="section-subtitle">Artikel terbaru kami</p>
        <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md">
            <h4 className="font-semibold mb-2">Belajar React dari Nol</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Panduan lengkap mulai dari komponen, hook, hingga deploy.
            </p>
          </div>
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-md">
            <h4 className="font-semibold mb-2">Laravel vs NodeJS</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Mana yang cocok untuk proyek kamu? Kita bahas secara tuntas.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h5 className="footer-title">Info</h5>
            <p>Xel-Edu adalah platform belajar dan informasi teknologi.</p>
          </div>
          <div>
            <h5 className="footer-title">Contact</h5>
            <p>Email: xel.edu@example.com</p>
          </div>
          <div>
            <h5 className="footer-title">Help</h5>
            <p>Pusat bantuan & FAQ tersedia di halaman bantuan.</p>
          </div>
          <div>
            <h5 className="footer-title">Sitemap</h5>
            <p>Home, Blog, Project, Contact, Login</p>
          </div>
        </div>
        <div className="footer-bottom mt-10">© 2025 Xel-Edu. All rights reserved.</div>
      </footer>
    </main>
  );
}
