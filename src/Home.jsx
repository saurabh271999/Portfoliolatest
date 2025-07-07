import React from 'react';
import Hero from './assets/Hero';
import Projects from './projects/Projects';
import Experience from './experience/Experience';
import Navbar from './components/Navbar';
import About from './About/About';
import Tech from './techstack/Tech';
import Footer from './components/Footer';

const Home = () => {
  return (
    <main className="relative bg-[#0a0a0a] text-white overflow-hidden">
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="tech">
        <Tech />
      </section>

      <Footer />
    </main>
  );
};

export default Home;
