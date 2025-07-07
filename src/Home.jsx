import React from 'react'
import Hero from './assets/Hero'
import Projects from './projects/Projects'
import Experience from './experience/Experience'
import Navbar from './components/Navbar'
import About from './About/About'
import Tech from './techstack/Tech'
import Footer from './components/Footer'
const Home = () => {
  return (
    <main className="relative bg-[#0a0a0a] text-white overflow-hidden">
     <Navbar/>
      <Hero />
      <About/>
      <Experience />
      <Projects />
      <Tech />
      <Footer />
      
    </main>
  )
}

export default Home
