import React from "react";
import { data } from "../data/data.js";
import { FaGithub, FaLaptop } from "react-icons/fa";

const Work = () => {
  const project = data;

  return (
    <div name="work" className="w-full h-fit text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-2xl font-bold inline shadow-lg shadow-[#54749b] text-gray-300">
            PROJECTS
          </p>
          <p class="p-4">
            Here are some of my personal projects, you may like.
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                      hover:bg-emerald-500 text-white font-bold text-lg"
                    >
                      <FaGithub size={30} />
                    </button>
                  </a>
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                      hover:bg-blue-500 text-white font-bold text-lg "
                    >
                      <FaLaptop size={30} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
