import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
    <RevealOnScroll>
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl  font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
          Hi, I'm Satyam Kumar
        </h1>

        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          I'm a full-stack developer who loves crafting clean, scalable, and
          efficient web applications.I enjoy working with the latest technologies and
          frameworks to create seamless user experiences.My goal is to deliver high-quality
          software that meets the needs of users and businesses alike. Let's
          connect and bring your ideas to life!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#project"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Projects
          </a>
            <a
                href="#contact"
                className="bg-gray-700 text-blue-500 py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(75,85,99,0.4)]"
            >
                Contact Me
            </a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
