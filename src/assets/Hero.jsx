import React from "react";
import Background from "./Images/background.jpg";
import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white flex items-center justify-center px-6 md:px-10"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <section
        id="hero"
        className="max-w-4xl mt-20 bg-black/70 p-8 rounded-lg backdrop-blur-sm"
      >
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-6">
          Hi, I am <br />
          <span className="text-purple-400 drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]">
            Saurabh
            <span className="block text-white">Full Stack Web Developer</span>
          </span>
        </h1>

        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Full-stack developer with 1+ years of experience in building scalable
          web applications. Passionate about creating efficient, maintainable
          code and delivering exceptional user experiences. Expertise in React,
          Node.js, and MongoDB.
        </p>

        <div className="flex gap-2">
        <a

          href="https://www.linkedin.com/in/your-profile-id"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 p-3 rounded-full transition duration-300
          hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]
          
          "
        >
          <FaLinkedin />
        </a>
         <a
          href="https://www.linkedin.com/in/your-profile-id"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 p-3 rounded-full transition duration-300
          hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]"
        >
          <FaGithub />
        </a>
         <a
          href="https://www.linkedin.com/in/your-profile-id"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 p-3 rounded-full transition duration-300
          hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]"
        >
          <SiGmail />
        </a>
        </div>
      </section>
    </div>
  );
}

export default Hero;
