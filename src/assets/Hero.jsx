import React from "react";

function Hero() {
  return (
    <div className="min-h-screen mt-15 bg-gradient-to-b from-[#0a0a0a] to-[#1c1c1c] text-white relative overflow-hidden">
      {/* Navbar */}
     

      {/* Hero Text Section */}
      <section className="px-10 mt-20 max-w-4xl">
        <h1 className="text-2xl sm:text-5xl font-extrabold leading-tight mb-6">
          Hi, Iam<br />
          <span className="text-purple-400">Saurabh
            <span className="block  drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]">Full stack web Developer</span>
          </span>
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Full-stack developer with 1+ years of experience in building
scalable web applications. Passionate about creating efficient,
maintainable code and delivering exceptional user experiences.
Expertise in React, Node JS MongoDB.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full text-white font-medium text-lg">
          Browse Components →
        </button>
      </section>
    </div>
  );
}
export default Hero