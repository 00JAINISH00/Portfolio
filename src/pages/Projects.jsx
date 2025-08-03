import React from "react";

const projects = [
  {
    title: "WanderLust – Airbnb Clone",
    description: "A full-featured Airbnb-like app using Node.js, Express, MongoDB, EJS.",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    github: "https://github.com/yourusername/wanderlust",
    demo: "https://wanderlust-demo.vercel.app",
  },
  {
    title: "Employee Management System",
    description: "A MERN stack based app to manage patients, doctors and appointments.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/clinic-system",
    demo: "https://clinic-app.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition" >
              <h3 className="text-xl font-semibold mb-2 text-cyan-600">{project.title}</h3>
              <p className="text-gray-700 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i}  className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-sm">
                <a href={project.github} target="_blank" className="text-blue-600 hover:underline">
                  GitHub
                </a>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;