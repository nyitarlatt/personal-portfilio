import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { resume } from "../assets";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative text-pfTextLight flex items-center justify-between h-16 py-2">
      <div className="text-xl text-white font-josefin cursor-pointer font-bold">
        <a href="#home">
          <i>NYITARLATT</i>
        </a>
      </div>
      <div className="flex justify-between space-x-0 lg:space-x-20">
        <div className="hidden lg:flex space-x-8 items-center">
          <a className="cursor-pointer hover:text-white" href="#about">
            About
          </a>
          <a className="cursor-pointer hover:text-white" href="#projects">
            Projects
          </a>
          <a className="cursor-pointer hover:text-white" href="#skills">
            Skills
          </a>
          <a className="cursor-pointer hover:text-white" href="#contact">
            Contact
          </a>
          <a
            className="cursor-pointer hover:text-white border-2 px-2 rounded-lg border-pfText hover:bg-pfBlueLight text-center"
            href={resume}
          >
            Download CV
          </a>
        </div>
        <div className="hidden md:flex px-4 py-2 border-t-2 border-l-2 border-b border-r rounded-[50%] -rotate-12 cursor-pointer hover:text-white hover:bg-pfBgLight ">
          <a href="tel:09958843640" className="rotate-12 font-josefin">
            Hire Me
          </a>
        </div>
      </div>
      <div className="flex lg:hidden" onClick={() => setMenuIcon(!menuIcon)}>
        {menuIcon ? (
          <MenuIcon onClick={() => setShowMenu(true)} />
        ) : (
          <CloseIcon onClick={() => setShowMenu(false)} />
        )}
      </div>
      {showMenu && (
        <div className="absolute top-20 right-0 bg-pfBg w-2/3 md:w-1/2 drop-shadow-xl">
          <div className="flex lg:hidden flex-col">
            <a
              className="cursor-pointer hover:text-white p-2 hover:bg-pfBgLight"
              href="#about"
            >
              About
            </a>
            <a
              className="cursor-pointer hover:text-white p-2 hover:bg-pfBgLight"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="cursor-pointer hover:text-white p-2 hover:bg-pfBgLight"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="cursor-pointer hover:text-white p-2 hover:bg-pfBgLight"
              href="#contact"
            >
              contact
            </a>
            <a
              className="cursor-pointer hover:text-white p-2 hover:bg-pfBgLight"
              href={resume}
            >
              Download Resume
            </a>
          </div>
          <div className="flex md:hidden p-2 cursor-pointer hover:text-white hover:bg-pfBgLight">
            <a href="tel:09958843640"> Hire Me</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
