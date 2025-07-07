import React from "react";
import html from '../assets/techicons/html.png'
import css from '../assets/techicons/css.png'
import js from '../assets/techicons/js.png'
import react from '../assets/techicons/react.png'
import redux from '../assets/techicons/redux.png'
import node from '../assets/techicons/node.png'
import mongo from '../assets/techicons/mongo.png'
import figma from '../assets/techicons/figma.png'
import git from '../assets/techicons/git.png'

const skills = [
  html, css, js, react, redux,
  node, mongo, git, figma
];

export default function Skills() {
  return (
    <section className="bg-gradient-to-b from-[#0a0a0a] to-[#1c1c1c] py-20 px-6 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Tech Stack</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((icon, index) => (
          <div
            key={index}
            className="w-16 h-16 sm:w-20 sm:h-20 p-3 rounded-full bg-white/10 border border-white/10 
              shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center"
            style={{ clipPath: "polygon(50% 0%, 90% 25%, 100% 65%, 75% 100%, 25% 100%, 0% 65%, 10% 25%)" }}
          >
            <img loading="lazy" src={icon} alt={`skill-${index}`} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}
