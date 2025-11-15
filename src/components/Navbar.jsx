import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className=" mb-0 flex items-center justify-between py-6 ">
        <div className="  flex  items-center text-4xl">
          <p className="text-white pl-10">Portfolio</p>
        </div>
        <div className="text-white m-8 flex items-center justify-center gap-4 text-2xl ">
          <a href="https://www.linkedin.com/feed/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
