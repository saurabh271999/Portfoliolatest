import React from "react";
import { motion } from "framer-motion";

import cashify from "../assets/Images/cashify.png";
import cleartrip from "../assets/Images/cleartrip.png";
import lifelinkr from "../assets/Images/lifelinkr.png";
import redCafe from "../assets/Images/redCafe.png";
import Alarm from "../assets/Images/Alarm.png";

export default function FeaturesGrid() {
  const features = [
    {
      img: cleartrip,
      name: "Cleartrip",
      title: "Travel and Hotel Booking App",
      desc: "A responsive UI clone of Cleartrip built with React and Tailwind CSS.",
      link: "https://mytripapp.netlify.app/",
    },
    {
      img: lifelinkr,
      name: "Lifelinkr",
      title: "Medical and Doctor Appointment App",
      desc: "A complete healthcare app interface with appointment booking flow.",
      link: "https://lifelinker-landing-page-ao2z2att4-saurabh271999s-projects.vercel.app/",
    },
    {
      img: cashify,
      name: "Cashify",
      title: "Phone Selling Platform",
      desc: "Sell your old phones instantly. React + Express + MongoDB based full stack project.",
      link: "https://buyeasymobile.netlify.app/",
    },
    {
      img: redCafe,
      name: "RedCafe",
      title: "Restaurant UI App",
      desc: "A modern, minimal food ordering UI built for learning animations and layout.",
      link: "https://redcafee.netlify.app/",
    },
    {
      img: Alarm,
      name: "Alarm Clock",
      title: "Vanilla JS Alarm Clock",
      desc: "A functional digital clock made with pure JavaScript and local time syncing.",
      link: "https://your-alarmclock-demo-link.com",
    },
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-[#0a0a0a] to-[#1c1c1c] py-20 px-6 sm:px-12">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-400 mb-4 ml-2">
        Projects
      </h2>

      <p className="text-gray-300 leading-relaxed max-w-4xl ml-2 mb-10">
        Here are some of the projects I've worked on, each built from scratch to solve real-world problems and demonstrate my skills across the full development stack.
        These projects reflect not just my technical knowledge, but also my passion for coding, designing scalable systems, and building user-friendly applications.
        From frontend design to backend logic and database integration — every project showcases my journey as a full-stack web developer.
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-[#13121a] text-white rounded-xl p-6 shadow-md hover:scale-[1.02] transition-transform duration-300 hover:shadow-purple-500/20"
          >
            <img
              loading="lazy"
              src={item.img}
              alt={item.name}
              className="rounded w-full h-36 object-cover mb-4"
            />
            <h2 className="text-xl font-bold text-purple-500 mb-2">
              {item.name}
            </h2>
            <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
            <p className="text-gray-400 text-sm mb-2">{item.desc}</p>
            <span className="flex flex-wrap gap-2 text-xs mt-2">
              <span className="text-blue-500">#React</span>
              <span className="text-green-400">#MongoDB</span>
              <span className="text-pink-400">#Tailwind</span>
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
