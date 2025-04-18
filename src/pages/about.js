// src/pages/About.js
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';

function About() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.PinUtils?.build) {
        window.PinUtils.build();
      }
    }, 100); // Wait 100ms just to ensure DOM is ready
  
    return () => clearTimeout(timer);
  }, []);  

  return (
    <motion.section
      className="about-section"
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="intro">
        <div className="intro-text">
          <h2>Hey there, I'm Sara!</h2>
          <p>A budding Data Analyst with a passion for turning data into actionable insights. I bring a keen eye for detail and a dedication to innovation.</p>
          <p>My journey is driven by a strong desire to excel, and I am eager to develop skills in data analysis, statistical modeling, and collaboration. I look forward to working on diverse projects that will allow me to grow and refine my abilities.</p>
          <p>Before coming to Trinity College Dublin to pursue my degree in Data Science, I worked at many thriving companies. These roles enhanced my collaboration and communication skills, giving me valuable experience working with cross-functional teams.</p>
        </div>
        <div className="intro-image">
          <img src="/assets/images/about-me.jpg" alt="Sara smiling" />
        </div>
      </div>

      <div className="journey">
        <h3>Journey from Writing <code>&lt;code&gt;</code> to Solving Problems using <strong>Data 📊</strong></h3>
        <p>
          Since high school, I've been hooked on tech innovations and breakthroughs. Acing my 10th-grade exams, especially in math, stats, and science, set me on this path. In 11th grade, I coded a simple C++ game, and seeing it come to life was mind-blowing. That's when I knew I wanted to pursue a Bachelor's in Information Technology at Vishwakarma Institute, Pune. During the COVID-19 lockdown, I dove into Machine Learning projects using SVM and Naïve Bayes on all kinds of data—text, photos, audio, and more. Data fascinates me, and I'm always looking forward to new opportunities to ace this field!
        </p>
      </div>

      <div className="interests">
        <h3>Other Interests</h3>
        <t>Swimming 🏊‍♀️</t>
        <t>Travelling ✈️</t>
        <t>Reading 📖</t>
        <t>Art 🎨</t>
        <t>Geography / Geoguesser 🌍</t>
      </div>

      <div className="pieces-section">
        <h3>🖼️ Pieces of My Life</h3>
        <div className="pinterest-embed">
        <a
          data-pin-do="embedBoard"
          data-pin-board-width="1000"
          data-pin-scale-height="600"  // Increased height (shows more rows)
          data-pin-scale-width="100"   // Smaller pin width = more columns
          href="https://in.pinterest.com/sararaa17/pieces-of-my-life/"
        >
          My Pinterest Board
        </a>

        </div>
      </div>
    </motion.section>
  );
}

export default About;
