import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); // 50px scroll ke baad bg change
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='relative'>
      <header
        className={`w-full fixed top-0 z-50 flex items-center justify-between px-10 py-3 transition-all duration-300
        ${scrolled ? 'bg-[#0d0c12]/90 backdrop-blur-md shadow-md' : 'bg-transparent'} text-white`}
      >
        <div className="flex items-center space-x-2 text-xl font-bold">
          <span>⚛️ My Portfolio</span>
        </div>

        <nav className="flex items-center space-x-6 text-sm font-medium 
          p-2 rounded-full bg-white/10">
          <a href="#" className="hover:text-purple-400">Home</a>
          <a href="#" className="hover:text-purple-400">About</a>
          <a href="#" className="hover:text-purple-400">Experience</a>
          <a href="#" className="hover:text-purple-400">Projects</a>
          <a href="#" className="hover:text-purple-400">Education</a>
          <a
            href="https://github.com/saurabh271999" target="_blank" rel="noopener noreferrer"
            className="bg-purple-600 text-white px-4 py-2 rounded-full font-semibold 
            hover:bg-purple-700 transition duration-300"
          >
            Github
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
