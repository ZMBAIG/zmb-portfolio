import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/cube-logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#282c34] text-white shadow-lg shadow-[#54749b] p-4">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "60px" }} />
      </div>
      <p class="text-sm">
        <i>“First, solve the problem. Then, write the code.” – John Johnson</i>{" "}
      </p>

      {/* menu */}
      <ul className="hidden md:flex ">
        <li class="menu text-[#61dafb] shadow-lg shadow-[#54749b]">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li class="menu hover:text-[#61dafb] ">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li class="menu hover:text-[#61dafb]">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li class="menu hover:text-[#61dafb] ">
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li class="menu hover:text-[#61dafb]">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#282c34] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl mt-6">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
