import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 glass-panel border-b border-white/5 shadow-lg">
      <div className="flex items-center text-2xl font-bold tracking-wider heading-font">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
          Portfolio
        </span>
      </div>
      <div className="flex items-center justify-center gap-6 text-xl text-neutral-300">
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300 transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-colors duration-300 transform hover:scale-110"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
