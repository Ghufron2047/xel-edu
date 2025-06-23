'use client';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Xel-Edu</h1>
        <ul className="nav-links">
          {['Home', 'Academic', 'Code', 'Tools', 'WebApp', 'Android', 'About'].map(link => (
            <li key={link}>
              <Link href={`#${link.toLowerCase()}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
