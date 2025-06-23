export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 text-sm py-6 px-4 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Xel-Edu. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Built with ❤️ for modern learners.</p>
      </div>
    </footer>
  );
}
