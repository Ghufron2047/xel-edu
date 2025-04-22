// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { useTheme } from "../context/ThemeContext";
const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const toggleTheme = () => setDarkMode(!darkMode);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Xel-Edu</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/academic">Academic</Link></li>
          <li><Link to="/source-code">Source Code</Link></li>
          <li><Link to="/tools">Tools</Link></li>
          <li><Link to="/web-app">Web App</Link></li>
          <li><Link to="/android">Android</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <div className="toggle-dark-mode">🌙</div>
        <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
