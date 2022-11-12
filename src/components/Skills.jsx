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
    <div
      name="skills"
      className="ml-25 sm:w-full h-fit bg-[#2d3d55] text-gray-300 ;"
    >
      <div className="max-w-[800px] mx-auto p-4 flex flex-col  w-full h-full pl-[100px]">
        <div className="pb-8">
          <p className="text-2xl font-bold inline shadow-lg shadow-[#54749b]">
            SKILLS
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center pl-[100px]">
          <div className="hover:scale-150 duration-500 ">
            <img className="w-10 mx-auto" src={HTML} alt="HTML icon " />
            <p className="">HTML5</p>
          </div>
          <div className=" hover:scale-150 duration-500 ">
            <img className="w-10 mx-auto" src={CSS} alt="HTML icon" />
            <p className="">CSS3</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Sass} alt="HTML icon" />
            <p className="">SASS</p>
          </div>

          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="">JavaScript</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Node} alt="HTML icon" />
            <p className="">Node.Js</p>
          </div>
          <div className="hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="">React</p>
          </div>
          <div className="hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="">GitHub</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Python} alt="HTML icon" />
            <p className="">Python</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Flask} alt="HTML icon" />
            <p className="">Flask</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Sql} alt="HTML icon" />
            <p className="">SQL</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="">Tailwind</p>
          </div>
          <div className=" hover:scale-150 duration-500 rounded-b-full">
            <img className="w-10 mx-auto" src={Arcgis} alt="HTML icon" />
            <p className="">Arc GIS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
