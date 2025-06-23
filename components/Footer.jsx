const Footer = () => {
  return (
    <footer className="bg-[#111] text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white font-semibold text-lg mb-3">Info</h4>
          <p>Learn, create, and share through Xel-Edu’s rich content and tools.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-lg mb-3">Contact</h4>
          <p>Email: hello@xel-edu.com</p>
          <p>Phone: +62 812 3456 7890</p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-lg mb-3">Help</h4>
          <p>FAQ, documentation, and support to guide your learning journey.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold text-lg mb-3">Sitemap</h4>
          <p>Explore all sections: Academic, Code, Tools, and more.</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; 2025 Xel-Edu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
