// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Profile from "./components/Profile";
import AdminDashboard from "./components/AdminDashboard";
import DarkModeToggle from "./components/DarkModeToggle";
import SkayAssistant from "./components/SkayAssistant";
import Academic from "./components/Academic";
import SourceCode from "./components/SourceCode";
import Tools from "./components/Tools";
import WebApp from "./components/WebApp";
import Android from "./components/Android";
import About from "./components/About";
import { ThemeProvider } from "./context/ThemeContext";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ResetPassword from "./components/auth/ResetPassword";

function App() {
  return (
    <ThemeProvider>
    <Router>
      <Navbar />
      <DarkModeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academic" element={<Placeholder title="Academic" />} />
        <Route path="/source-code" element={<Placeholder title="Source Code" />} />
        <Route path="/tools" element={<Placeholder title="Tools" />} />
        <Route path="/web-app" element={<Placeholder title="Web App" />} />
        <Route path="/android" element={<Placeholder title="Android" />} />
        <Route path="/about" element={<Placeholder title="About" />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/academic" element={<Academic />} />
<Route path="/source-code" element={<SourceCode />} />
<Route path="/tools" element={<Tools />} />
<Route path="/web-app" element={<WebApp />} />
<Route path="/android" element={<Android />} />
<Route path="/about" element={<About />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
      <SkayAssistant />
    </Router>
    </ThemeProvider>
  );
}

export default App;
