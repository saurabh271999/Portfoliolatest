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
      title: "Cleartrip Clone Travel and hotel booking App",
      desc: "Loved by developers around the world",
    },
    {
      img: lifelinkr,
      name: "Lifelinkr",
      title: "Medical and Doctor App",
      desc: "Growing weekly & only getting better",
    },
    {
      img: cashify,
      name: "Cashify",
      title: "Phone Selling App",
      desc: "Sell old phones at best price instantly",
    },
    {
      img: redCafe,
      name: "RedCafe",
      title: "Restaurant App",
      desc: "A beautiful UI for a food ordering app",
    },
    {
      img: Alarm,
      name: "Alarm Clock",
      title: "JavaScript Alarm Clock",
      desc: "Functional JS-based alarm clock",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0a0a0a] to-[#1c1c1c] py-20 px-6 sm:px-12 ">
      <span className=" text-purple-400 mb-10 sm:text-5xl ml-5 font-extrabold">
        projects
      </span>
      <p className="text-gray-300 text-start leading-relaxed mb-10 mt-5">
        Here are some of the projects I've worked on, each built from scratch to <br />
        solve real-world problems and demonstrate my skills across the full <br />
        development stack. These projects reflect not just my technical <br />
        knowledge, but also my passion for coding, designing scalable systems, <br />
        and building user-friendly applications. From frontend design to backend <br />
        logic and database integration — every project showcases my journey as a <br />
        full-stack web developer.
      </p>

      <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-[#13121a] text-white rounded-xl p-6 shadow-md hover:scale-[1.02] transition-transform duration-300"
          >
            <img
            loading="lazy"
              src={item.img}
              alt={item.name}
              className="rounded w-full h-30 object-cover mb-4"
            />
            <h2 className="text-2xl font-extrabold text-purple-500 mb-2">
              {item.name}
            </h2>
            <h3 className="text-[15px] font-semibold mb-1">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
            <span className="block flex gap-2 text-[10px]"><p className="text-blue-700">#React</p><p className="text-green-600">#Mongo</p><p className="text-pink-400">#tailwind</p></span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
