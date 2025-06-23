import '@app/globals.css';
import NavBar from '../components/Navbar';
import DarkModeToggle from '../components/DarkModeToggle';
import SkayAssistant from '../components/SkayAssistant';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Xel-Edu',
  description: 'Platform edukasi futuristik',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <DarkModeToggle />
        <main>{children}</main> {}
        <SkayAssistant />
        <Footer />
      </body>
    </html>
  );
}
