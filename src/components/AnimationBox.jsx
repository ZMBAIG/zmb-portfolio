import React from "react";

const AnimationBox = () => {
  return (
    <div>
      <section class="container">
        <div class="box">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <div class="text-red-400 text-2xl  animate-ping  relative inline-flex w-10 h-10 ">
              Hello!!!!!!
            </div>
            <h1 className="text-5xl font-bold text-[#9edef0] ml-8">
              I'm Zafar Baig
            </h1>
            <h2 className="text-1xl text-teal-200 shadow-lg shadow-[#54749b] p-2 mb-2 border-b-[1px] ml-8">
              Full Stack Developer
            </h2>
            <p className="transform-text text-white text-sm mt-8 ml-8">
              I've transformed my life from a Geologist to{" "}
              <p class="font-serif text-blue-300 inline-flex">"Developer" </p>
              and can do the same for you. I build value through code and am
              ready to accept a challenge.<br></br>I have a diverse set of
              skills, including creativity and design, to
              <i> HTML, CSS, Tailwind, JavaScript, React & Python.</i> That made
              me a developer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnimationBox;
