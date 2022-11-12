import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="sm:w-full h-screen bg-gradient-to-r from-sky-300 to-indigo-900 text-gray-300 pl-[130px] "
    >
      <div className=" flex flex-col justify-center items-center w-full h-full ">
        <div className="ml-30 max-w-[800px] w-full grid grid-cols-2 gap-8">
          <div className="mt-8 sm:text-right pl-4">
            <p className="text-1xl font-bold inline shadow-lg shadow-[#54749b] p-2">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2xl font-bold">
            <p>Hi. I'm Zafar Baig,</p>
            <p class="text-sm">the Full Stack Developer</p>
          </div>
          <div>
            <p class="about">
              I have a deep passion for software development, algorithms and
              problem solving. Through a year of practice and many personal
              projects, I honed my knowledge and skills as a programmer,
              developing a certain versatility in using technologies and coding
              languages. As I am mostly a self-learner. I can easily adopt to
              new things and always ready to take on a challenge. <br></br>
              <strong>
                Moreover, I have a Strong interest in innovation and continuous
                improvement within technical applications, excellent incident
                management skills which involve performing in-depth analysis of
                issue resolution, ability to manage multiple tasks and
                willingness to travel to customer sites if required.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
