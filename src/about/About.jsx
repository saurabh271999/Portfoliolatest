import React from 'react';
import icon1 from '../assets/Images/icon1.png'
import icon2 from '../assets/Images/icon2.png'
import icon3 from '../assets/Images/icon3.png'
import icon4 from '../assets/Images/icon4.png'
const services = [
  {
    title: "Web Developer",
    icon: icon1, // Replace with actual icon path or component
  },
  {
    title: "Frontend Developer",
    icon: icon2,
  },
  {
    title: "Backend Developer",
    icon: icon3,
  },
  {
    title: "Fullstack Developer",
    icon: icon4,
  },
];

const Overview = () => {
  return (
    <section className="text-white bg-gradient-to-b from-[#0a0a0a] py-20 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm uppercase text-gray-400 tracking-widest mb-2">Introduction</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          <span className="text-white">Overview.</span>
        </h2>
        <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-12">
          I'm a skilled software developer with experience in TypeScript and JavaScript,
          and expertise in frameworks like React, Node.js, and Three.js. I'm a quick
          learner and collaborate closely with clients to create efficient, scalable,
          and user-friendly solutions that solve real-world problems. Let's work together
          to bring your ideas to life!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#13132b] rounded-xl border border-transparent hover:border-cyan-400 transition-all p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-cyan-500/30"
            >
              <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
              <h3 className="text-lg font-semibold text-white text-center">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
