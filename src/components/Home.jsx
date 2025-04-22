// src/components/Home.jsx
import React from "react";
import "../index.css";

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <h2>Welcome to Xel-Edu</h2>
        <p>Unlock your future with our futuristic education platform.</p>
        <a href="#academic" className="cta-button">Get Started</a>
      </div>
    </section>
  );
};

export default Home;
