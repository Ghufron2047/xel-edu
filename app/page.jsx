export default function HomePage() {
  const toggleDarkMode = () => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark");
    }
  };

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 shadow dark:shadow-lg bg-gray-100 dark:bg-gray-800 sticky top-0 z-50">
        <h1 className="text-2xl font-bold">Xel-Edu</h1>
        <div className="space-x-4 text-sm md:text-base">
          <a href="#home" className="hover:text-indigo-500">Home</a>
          <a href="#academic" className="hover:text-indigo-500">Academic</a>
          <a href="#sourcecode" className="hover:text-indigo-500">Source Code</a>
          <a href="#tools" className="hover:text-indigo-500">Tools</a>
          <a href="#webapp" className="hover:text-indigo-500">Web App</a>
          <a href="#android" className="hover:text-indigo-500">Android</a>
          <a href="#about" className="hover:text-indigo-500">About</a>
          <button
            onClick={toggleDarkMode}
            className="ml-2 px-3 py-1 rounded bg-indigo-500 text-white hover:bg-indigo-600 transition"
          >
            Dark Mode
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 to-purple-700 text-white text-center px-4">
        <h2 className="text-5xl font-extrabold mb-4">Welcome to Xel-Edu</h2>
        <p className="text-xl max-w-xl">Futuristic Learning Platform for Modern Developers and Tech Enthusiasts</p>
      </section>

      {/* Academic */}
      <section id="academic" className="px-8 py-16">
        <h3 className="text-3xl font-bold mb-4">📚 Academic</h3>
        <p className="text-gray-700 dark:text-gray-300">Explore curated free learning resources including tutorials, PDFs, and hands-on guides to boost your skills.</p>
      </section>

      {/* Source Code */}
      <section id="sourcecode" className="px-8 py-16 bg-gray-100 dark:bg-gray-800">
        <h3 className="text-3xl font-bold mb-4">💻 Source Code</h3>
        <p className="text-gray-700 dark:text-gray-300">Get instant access to source codes of our mini projects, frameworks, and real-world app examples. Copy-paste ready!</p>
      </section>

      {/* Tools */}
      <section id="tools" className="px-8 py-16">
        <h3 className="text-3xl font-bold mb-4">🛠️ Tools</h3>
        <p className="text-gray-700 dark:text-gray-300">Discover free web-based tools built for productivity, formatting, conversion, and more. All free, no ads.</p>
      </section>

      {/* Web App */}
      <section id="webapp" className="px-8 py-16 bg-gray-100 dark:bg-gray-800">
        <h3 className="text-3xl font-bold mb-4">🌐 Web App</h3>
        <p className="text-gray-700 dark:text-gray-300">Browse our premium web applications, designed to help you in learning, productivity, and business use cases.</p>
      </section>

      {/* Android */}
      <section id="android" className="px-8 py-16">
        <h3 className="text-3xl font-bold mb-4">📱 Android</h3>
        <p className="text-gray-700 dark:text-gray-300">Download our Android apps directly or via Play Store. Built with love for speed, stability, and offline access.</p>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-16 bg-gray-100 dark:bg-gray-800">
        <h3 className="text-3xl font-bold mb-4">ℹ️ About</h3>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl">
          Xel-Edu is an independent platform focused on developer education, tool-building, and AI integration. We're committed to providing futuristic learning experiences — all in one place.
        </p>
      </section>

      {/* Skay Assistant */}
      <div className="fixed bottom-6 right-6 z-50">
        <iframe
          src="/skay"
          title="Skay Assistant"
          className="w-20 h-20 rounded-full shadow-lg border-2 border-indigo-500"
        />
      </div>
    </main>
  );
}
