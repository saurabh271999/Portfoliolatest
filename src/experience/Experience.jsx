import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "MERN Fullstack Development Course",
    date: "Jan 2025 - Present",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQF4fmxH6z1guA/company-logo_200_200/company-logo_200_200/0/1711807069489/cetpainfotech_logo?e=2147483647&v=beta&t=ltuIXsvNwgV9inIW03vTMyaivWUBk4C6bsq3emKUt4E",
    points: [
      "Frontend & backend in React.js, Node.js, MongoDB.",
      "Real-world projects with Git and REST APIs.",
    ],
  },
  {
    title: "MCA (Master Of Computer Applications)",
    date: "June 2022 – June 2024",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVpZ9G7FdsmKfeiw_UCNqIsFrJXVvXpkyl4Q&s",
    points: ["IMS Engineering college","Studied core CS subjects", "Participated in coding events",

    ],
  },
  {
    title: "BCA (Bachelor Of Computer Applications)",
    date: "June 2019 – June 2022",
    logo: "https://content.jdmagicbox.com/comp/ghaziabad/v8/011pxx11.xx11.221229193525.l9v8/catalogue/mmh-degree-college-daulatpura-ghaziabad-colleges-3ns9utbmfr.jpg",
    points: ["MMH college GZB","Learned DBMS, OOP, Networking", "Built basic web apps"],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="bg-gradient-to-b from-[#0a0a0a] to-[#1c1c1c] text-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-white/20 -translate-x-1/2 z-0"></div>

        <div className="flex flex-col gap-12 relative z-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative w-full md:w-1/2 px-4 md:px-0 ${
                index % 2 === 0
                  ? "md:self-start md:pr-10 text-left"
                  : "md:self-end md:pl-10 text-left"
              }`}
            >
              {/* Dot + Logo */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                <img src={exp.logo} alt="logo" className="w-6 h-6 rounded-full" />
              </div>

              {/* Card */}
              <div className="bg-[#1a1a2e] border border-purple-600 rounded-lg p-4 shadow-md">
                <p className="text-sm text-purple-400 mb-1 font-medium">
                  {exp.date}
                </p>
                <h3 className="text-lg font-semibold mb-2">{exp.title}</h3>
                <ul className="list-disc text-sm text-gray-300 pl-5 space-y-1">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
