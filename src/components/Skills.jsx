import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Sql from "../assets/sql.png";
import GitHub from "../assets/github.png";
import Sass from "../assets/sass.png";
import Python from "../assets/python.png";
import Flask from "../assets/flask.png";
import Tailwind from "../assets/tailwind.png";
import Arcgis from "../assets/arcgis.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-fit bg-[#2d3d55] text-gray-300 ;">
      <div className="max-w-[900px] mx-auto p-8 flex flex-col justify-center w-full h-full">
        <div className="mb-8">
          <p className="text-2xl font-bold inline shadow-lg shadow-[#54749b] p=8 ">
            SKILLS
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center">
          <div className=" hover:scale-150 duration-500 ">
            <img className="w-10 mx-auto" src={HTML} alt="HTML icon " />
            <p className="border">HTML5</p>
          </div>
          <div className=" hover:scale-150 duration-500 ">
            <img className="w-10 mx-auto" src={CSS} alt="HTML icon" />
            <p className="border">CSS3</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Sass} alt="HTML icon" />
            <p className="border">SASS</p>
          </div>

          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="border">JavaScript</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Node} alt="HTML icon" />
            <p className="border">Node.Js</p>
          </div>
          <div className="hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="border">React</p>
          </div>
          <div className="hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="border">GitHub</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Python} alt="HTML icon" />
            <p className="border">Python</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Flask} alt="HTML icon" />
            <p className="border">Flask</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Sql} alt="HTML icon" />
            <p className="border">SQL</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="border">Tailwind</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Arcgis} alt="HTML icon" />
            <p className="border">Arc GIS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
