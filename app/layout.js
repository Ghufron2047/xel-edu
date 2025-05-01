import './globals.css';
import NavBar from './components/NavBar';
import DarkModeToggle from "@/components/DarkModeToggle";
import SkayAssistant from "@/components/SkayAssistant";

export const metadata = {
  title: "Xel-Edu",
  description: "Platform edukasi masa depan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <NavBar />
        <DarkModeToggle />
        <main className="max-w-5xl mx-auto px-4 py-8">{children}</main>
        <SkayAssistant />
      </body>
    </html>
  );
}