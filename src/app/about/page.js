export default function About() {
  return (
    <section className="container mx-auto py-10 px-6 sm:px-12 lg:px-24 text-white">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="relative w-60 h-60 md:w-72 md:h-72 flex-shrink-0 rounded-full overflow-hidden border-4 border-gray-600 shadow-2xl transition-transform transform hover:scale-105">
          <img
            src="https://i.postimg.cc/T1L5ws3B/Me.jpg"
            alt="Goutham Pichiguntla"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-2xl text-center md:text-left space-y-4">
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-move">
            P Goutham
          </h1>
          <p className="text-sm md:text-lg font-semibold leading-relaxed text-gray-300">
            I love turning ideas into reality through clean, efficient code. Always learning, always evolving—because
            tech never stops, and neither do I.
          </p>
          <p className="text-sm md:text-lg font-semibold leading-relaxed text-gray-300">
            I am a  passionate <span className="text-blue-400 font-semibold">Full-Stack Developer</span> deeply immersed in the
            MERN stack, Nextjs and UI/UX development. Currently
            pursuing a B.Tech in Computer Science, I thrive on solving complex problems and building intuitive,
            high-performance applications with my expertise.
          </p>
        </div>
      </div>
    </section>
  );
}