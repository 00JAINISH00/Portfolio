import React from "react";
import {
  FaHtml5,FaCss3Alt,FaJs,FaReact,FaNodeJs,FaGitAlt,FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,SiExpress,SiTailwindcss,SiPostman,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700 text-3xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 text-3xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600 text-3xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-700 text-3xl" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500 text-3xl" /> },
];

const About = () => {
  return (
    
    <section id="about" className="bg-white text-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          About Me
        </h2>

        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-lg leading-8">
            I’m <span className="font-semibold text-cyan-500">Jainish Thakor</span>, a
            passionate MERN stack developer from Gujarat. I build clean, responsive
            and scalable web applications using modern technologies like React, Node.js,
            MongoDB, and Express.
          </p>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-700">
            My Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition-transform duration-300 hover:scale-105 w-full"
              >
                {skill.icon}
                <span className="mt-2 text-sm font-medium text-gray-700">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-700">
            Education
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
             <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md w-full sm:w-1/2">
              <h4 className="text-lg font-semibold">12th – HSC</h4>
              <p className="text-sm mt-1">Gujarat Board</p>
              <p className="text-sm mt-1 text-gray-500">2021</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md w-full sm:w-1/2">
              <h4 className="text-lg font-semibold">B.Tech – Information Technology</h4>
              <p className="text-sm mt-1">Ganpat University, Mehsana</p>
              <p className="text-sm mt-1 text-gray-500">2021 – 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
