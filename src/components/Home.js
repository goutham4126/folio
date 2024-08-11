"use client";
import Link from 'next/link';
import { FaCloudDownloadAlt, FaFileAlt, FaInstagram } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FiGithub } from "react-icons/fi";
import { TbBrandDiscord } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import { GiQueenCrown } from "react-icons/gi";

function Home() {
  const handleDownloadClick = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1U12VjnNGDXUpHhPfsv9e1daIC6rP1gl1';
    link.download = 'Goutham_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center p-6 mb-10">
      <div className="relative flex md:hidden justify-center my-10">
        <div className="relative">
          <div className="absolute -top-12 md:-top-24 left-1/2 transform -translate-x-2/4">
            <GiQueenCrown className="text-yellow-400 w-20 h-20 md:w-28 md:h-28 animate-pulse" />
          </div>
          <div className="p-2 mt-5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <img src="https://i.postimg.cc/T1L5ws3B/Me.jpg" alt="Goutham" className="rounded-full shadow-lg w-40 h-40 md:w-64 md:h-64 object-cover" />
          </div>
        </div>
      </div>
      <div className="flex flex-row md:flex-col items-center bg-zinc-800 px-5 py-3 md:py-10 rounded-full gap-6 sm:gap-12 lg:gap-8">
        <Link href="https://drive.google.com/file/d/1U12VjnNGDXUpHhPfsv9e1daIC6rP1gl1/view?usp=sharing">
          <FaFileAlt className="h-6 w-6 md:h-8 md:w-8 hover:text-gray-300 text-white" />
        </Link>
        <Link href="https://www.linkedin.com/in/p-goutham-6a49292a6/">
          <ImLinkedin className="h-6 w-6 md:h-7 md:w-7 hover:text-gray-300 text-white" />
        </Link>
        <Link href="https://github.com/goutham4126">
          <FiGithub className="h-6 w-6 md:h-7 md:w-7 hover:text-gray-300 text-white" />
        </Link>
        <Link href="https://discordapp.com/users/1210127934908661841">
          <TbBrandDiscord className="h-6 w-6 md:h-7 md:w-7 hover:text-gray-300 text-white" />
        </Link>
        <Link href="https://www.instagram.com/goutham__019">
          <FaInstagram className="h-6 w-6 md:h-7 md:w-7 hover:text-gray-300 text-white" />
        </Link>
        <Link href="https://x.com/goutham_019">
          <BsTwitterX className="h-6 w-6 hover:text-gray-300 text-white" />
        </Link>
      </div>
      <div className="flex flex-col justify-center text-center md:text-left mt-10 md:mt-0 max-w-md md:max-w-none">
        <p className="text-xs md:text-sm text-zinc-400 mb-2 font-bold">
          Web developer and competitive programmer
        </p>
        <h1 className="text-3xl md:text-5xl font-bold">
          Hello peeps 👋,
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">
          <span className="text-indigo-500">Goutham</span> here
        </h1>
        <p className="my-4 hidden md:flex text-base font-semibold text-gray-400 leading-relaxed">
          I excel at crafting elegant digital experiences and I am proficient in
          <br />
          various programming languages and technologies.
        </p>
        <span className="flex justify-center md:justify-start -mb-10 md:mb-0 cursor-pointer mt-4" onClick={handleDownloadClick}>
          <span className="flex items-center gap-3 bg-indigo-500 text-white rounded-xl px-4 py-3 shadow-lg hover:bg-indigo-600 transition">
            Download CV <FaCloudDownloadAlt className="h-5 w-5" />
          </span>
        </span>
      </div>
      <div className="relative hidden md:flex mt-10">
        <div className="relative">
          <div className="absolute -top-12 md:-top-24 left-1/2 transform -translate-x-2/4">
            <GiQueenCrown className="text-yellow-400 w-20 h-20 md:w-28 md:h-28 animate-pulse" />
          </div>
          <div className="p-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <img src="https://i.postimg.cc/T1L5ws3B/Me.jpg" alt="Goutham" className="rounded-full shadow-lg w-40 h-40 md:w-64 md:h-64 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
