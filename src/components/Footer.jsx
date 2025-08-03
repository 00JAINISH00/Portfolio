import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm mb-4 sm:mb-0">&copy; 2025 Jainish Thakor. All rights reserved.</p>
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/00JAINISH00"
            target="_blank"
            className="hover:text-cyan-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jainish-thakor/"
            target="_blank"
            className="hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
