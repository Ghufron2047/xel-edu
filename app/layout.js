import './globals.css'; // pastikan path ini benar
import Navbar from '../components/Navbar';
import DarkModeToggle from '../components/DarkModeToggle';
import SkayAssistant from '../components/SkayAssistant';

export const metadata = {
  title: 'Xel-Edu',
  description: 'Platform edukasi futuristik',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <DarkModeToggle />
        <main>{children}</main> {/* penting */}
        <SkayAssistant />
      </body>
    </html>
  );
}
