import React from 'react';

function About() {
  return (
    <section className="py-6 md:my-12">
      <div className="container mx-auto px-6 flex flex-col items-center md:flex-row">
        <div className="flex justify-center mb-8 md:mb-0 md:w-1/2">
          <div className="p-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <img
              src="https://i.postimg.cc/T1L5ws3B/Me.jpg"
              alt="Goutham"
              className="rounded-full shadow-lg w-40 h-40 md:w-64 md:h-64 object-cover"
            />
          </div>
        </div>
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600 font-semibold mb-4">
            About Me
          </h1>
          <p className="md:text-lg text-sm font-medium text-slate-3 00 leading-relaxed">
            I am a dedicated Computer Science student at VNR VJIET with a fervent enthusiasm for web development and competitive programming.
            Proficient in various technologies, I am eager to contribute my skills to innovative projects and facilitate personal growth.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
