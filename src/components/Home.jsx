import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="home"
      className="sm:w-full h-screen bg-[#282c34] pl-[110px] pb-10"
    >
      {/* Container */}
      <div className="max-w-[800px] mx-auto px-8 flex flex-col justify-center h-full pt-8">
        <div class="text-white text-2xl mt-[5rem] animate-ping scale-x-75 relative inline-flex w-10 h-10 ml-25">
          Hello,
        </div>
        <h1 className="text-4xl font-bold text-[#9edef0] ml-4">
          I'm Zafar Baig
        </h1>
        <h2 className="mt-2	text-1xl text-teal-200 shadow-lg shadow-[#54749b] p-2 mb-4 border-b-[1px]">
          Full Stack Developer
        </h2>
        <p className="transform-text text-white text-md mt-8">
          I've transformed my life from a Geologist to{" "}
          <span class="font-serif text-blue-300">"Developer" </span>
          and can do the same for you.<br></br> I build value through code and
          am ready to accept a challenge.<br></br>I have a diverse set of
          skills, including creativity and design, to{" "}
          <span class="font-serif text-blue-300">
            HTML, CSS, Tailwind, JavaScript, React & Python.
          </span>
          That made me a developer.
        </p>

        <fieldset class="border justify-center px-2 pb-4 mt-2 border-r shadow-lg shadow-[#54749b]">
          <legend class="text-white text-sm ml-6 ">Share on</legend>

          <div className="flex justify-evenly mx-0 p-2">
            <a
              className=" hover:bg-[#0077B5] p-2 flex justify-center items-center  text-gray-300 rounded-full shadow-lg shadow-[#54749b]"
              href="https://www.linkedin.com/in/zmbaig/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              className=" hover:bg-[#282828] p-2 flex justify-center items-center  text-white rounded-full shadow-lg shadow-[#54749b]"
              href="https://github.com/ZMBAIG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
            <a
              className="hover:bg-[#E4405F] p-2 flex justify-center items-center  text-gray-300 rounded-full shadow-lg shadow-[#54749b]"
              href="https://www.instagram.com/64zmb/"
            >
              <FaInstagram size={20} />
            </a>
            <a
              className="hover:bg-[#FF0000] p-2 flex justify-center items-center  text-gray-300 rounded-full shadow-lg shadow-[#54749b]"
              href="/"
            >
              <FaYoutube size={20} />
            </a>
            <a
              className="hover:bg-[#1DA1F2] flex p-2 justify-center items-center  text-gray-300 rounded-full shadow-lg shadow-[#54749b]"
              href="https://twitter.com/zmbaig"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={20} />
            </a>
            <a
              className="hover:bg-emerald-500 p-2 flex justify-center items-center  text-gray-300 rounded-full shadow-lg shadow-[#54749b]"
              href="https://api.whatsapp.com/send?phone=31625262050"
              target="_blank "
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Home;
