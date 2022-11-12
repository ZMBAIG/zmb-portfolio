import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/cube-logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="object-none object-left fixed flex flex-col w-22  h-full px-4 bg-[#3f4553] text-white border-r shadow-lg shadow-[#54749b] ">
      {/* <div className="mt-10 py-6"> */}
      <div class="px-4 py-8">
        <img src={Logo} alt="Logo" style={{ width: "60px" }} />
      </div>

      {/* menu */}
      <ul className="hidden sm:flex flex-col mt-20 justify-between items-center">
        <li class="menu hover:shadow-lg shadow-[#54749b] py-2 px-4 w-24 ">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li class="menu hover:shadow-lg shadow-[#54749b] py-2  w-24">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li class="menu hover:shadow-lg shadow-[#54749b] py-2 w-24">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li class="menu hover:shadow-lg shadow-[#54749b] py-2 w-22">
          <Link to="work" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li class="menu hover:shadow-lg shadow-[#54749b] py-2  w-22 ">
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
        <li className="py-2 px-4 text-1xl border-b-[1px] shadow-lg shadow-[#54749b] hover:text-blue-300 w-24">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-2 px-4 text-1xl border-b-[1px] shadow-lg shadow-[#54749b] hover:text-blue-300 w-24">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-2 px-4 text-1xl border-b-[1px] shadow-lg shadow-[#54749b] hover:text-blue-300 w-24">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-2 px-4 text-1xl border-b-[1px] shadow-lg shadow-[#54749b] hover:text-blue-300 w-24">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-2 px-4 text-1xl border-b-[1px] shadow-lg shadow-[#54749b] hover:text-blue-300 w-22">
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
