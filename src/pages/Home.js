import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

function Home() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <section className="hero-section">
        <Hero />
      </section>

      {/* <div className="transition-section" /> */}

      <section className="projects-section" id="projects">
        <Projects />
      </section>
    </div>
  );
}


export default Home;

