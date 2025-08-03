import React from 'react'
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">Jainish.dev</h1>
        <ul className="hidden md:flex space-x-6 text-sm">
          <li><Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-400">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-400">About</Link></li>
          <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-400">Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-cyan-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
)
}

export default Navbar    