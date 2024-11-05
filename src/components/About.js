import React from 'react';

function About() {
  return (
    <section className="flex items-center justify-center min-h-screen px-4 -mt-16 md:mt-10 -mb-40 md:-mb-16">
      <div className="bg-white p-6 md:p-10 shadow-lg text-center max-w-2xl relative">
        <div className="absolute -top-28 right-0 md:-right-32 transform hover:scale-105 transition duration-300">
          <img
            src="https://i.postimg.cc/T1L5ws3B/Me.jpg"
            alt="Goutham"
            className="skew-y-6 w-36 h-36 md:w-48 md:h-48 lg:w-60 lg:h-60 border-4 border-white shadow-md"
          />
        </div>
        <h2 className="text-2xl font-semibold text-blue-700 mb-4 mt-4 md:mt-0">About Me</h2>
        <p className="text-justify text-gray-700 text-sm md:text-base leading-relaxed md:mr-24 font-semibold">
          I am a dedicated Computer Science student at VNR VJIET with a fervent enthusiasm for web development and competitive programming.
          Proficient in various technologies, I am eager to contribute my skills to innovative projects and facilitate personal growth.
        </p>
      </div>
    </section>
  );
}

export default About;
