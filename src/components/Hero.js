import React from 'react';
import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I’m Sara</p>
        <h1 className="hero-headline">
          I curate <span className="highlight-dark">data-driven</span>, <br />
          solutions that blend <br />
          <span className="highlight-green">insight, intuition, and innovation.</span> 🌱
        </h1>
        <p className="hero-subheading">
          Master’s in Computer Science — Data Science @ <span className="bold">Trinity College Dublin</span>
        </p>
      </div>
    </section>
  );
}

export default Hero;
