import "./globals.css";
import SkayAssistant from "@/components/SkayAssistant";

export default function HomePage() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
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
    </main>
  );
}