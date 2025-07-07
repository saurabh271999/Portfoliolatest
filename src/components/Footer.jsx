import React from "react";
import { useInView } from "react-intersection-observer";
import galaxy from '../../public/bgvideo/galaxy.mp4'
const ContactForm = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
    id="contact"
      ref={ref}
      className={`relative min-h-screen px-6 py-20 text-white flex flex-col md:flex-row items-center justify-center gap-10
        transition-all duration-1000 ease-in-out overflow-hidden
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {/* 🔹 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={galaxy}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* 🔹 Left Form */}
      <div className="bg-[#1a1a2e] p-8 rounded-xl shadow-lg w-full max-w-md z-20">
        <h4 className="text-sm text-gray-400 uppercase mb-2">Get in touch</h4>
        <h2 className="text-4xl font-bold mb-8">Contact.</h2>
        <form className="space-y-4">
          <div>
            <label className="text-sm block mb-1">Your Name</label>
            <input
              type="text"
              placeholder="What's your good name?"
              className="w-full p-3 rounded bg-[#0f0f1f] text-white outline-none"
            />
          </div>
          <div>
            <label className="text-sm block mb-1">Your Email</label>
            <input
              type="email"
              placeholder="What's your web address?"
              className="w-full p-3 rounded bg-[#0f0f1f] text-white outline-none"
            />
          </div>
          <div>
            <label className="text-sm block mb-1">Your Message</label>
            <textarea
              rows="4"
              placeholder="What you want to say?"
              className="w-full p-3 rounded bg-[#0f0f1f] text-white outline-none"
            ></textarea>
          </div>
        
          <button
            type="submit"
            className="bg-purple-600 px-6 py-2 rounded text-white hover:bg-purple-700 transition"
          >
            Send
          </button>
        </form>
       
      </div>

      
     
    </section>
  );
};

export default ContactForm;
