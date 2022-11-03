import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#282c34]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div class="text-white text-2xl mt-8">Hi,</div>
        <h1 className="text-6xl font-bold text-[#9edef0] mb-2 ">
          I'm Zafar Baig
        </h1>
        <h2 className="mt-2	text-2xl text-teal-200 shadow-lg shadow-[#54749b] p-2 mb-8">
          Full Stack Developer
        </h2>
        <p className="transform-text text-white text-2xl mt-8">
          I've transformed my life from a Geologist to{" "}
          <span class="font-serif text-blue-300">"Developer" </span>
          and can do the same for you. I build value through code and am ready
          to accept a challenge.
        </p>
      </div>
    </div>
  );
};

export default Home;
