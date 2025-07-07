import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 flex items-center justify-between px-10 py-3 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center space-x-2 text-xl font-bold">
        <span className="text-white">⚛️ My Portfolio</span>
      </div>

      <nav className="flex items-center space-x-6 text-sm font-medium p-2 rounded-full bg-white/10 text-white">
        <a href="#hero" className="hover:text-purple-400">Home</a>
        <a href="#about" className="hover:text-purple-400">About</a>
        <a href="#experience" className="hover:text-purple-400">Experience</a>
        <a href="#projects" className="hover:text-purple-400">Projects</a>
        <a href="#tech" className="hover:text-purple-400">Tech</a>
        <a href="#contact" className="hover:text-purple-400">Contact</a>
        <a
          href="https://github.com/saurabh271999"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition duration-300"
        >
          Github
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
