import React from "react";
import profile from "../assets/profile.png";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <section id="home" className="bg-gray-900 text-white h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl text-center">
        <img src={profile} alt="Profile" className="w-60 h-60 rounded-full mx-auto border-4 border-cyan-400 mb-6" />
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Jainish</h1>
        <h2 className="text-xl text-cyan-400 font-mono mb-4">
          <Typewriter
            words={['MERN Stack Developer', 'Full-stack Developer']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
        <p className="text-gray-300 mb-6">
          Passionate about building scalable and user-friendly full-stack web applications using MongoDB, Express, React, and Node.js (MERN stack).
        </p>
        <a href="#projects" className="inline-block bg-cyan-400 text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-cyan-300">
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Home;
