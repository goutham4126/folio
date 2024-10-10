"use client";
import Link from 'next/link';
import { FaCloudDownloadAlt, FaFileAlt} from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FiGithub } from "react-icons/fi";
import { TbBrandDiscord } from "react-icons/tb";
import { Button } from "@/components/ui/button"
import { SiLeetcode } from "react-icons/si";
import { TypeAnimation } from 'react-type-animation';
import { MdEmail } from "react-icons/md";

function Home() {
  const handleDownloadClick = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1iVeG-gkjYvQKzdd4fpUHWynXOoC5Q8nu';
    link.download = 'Goutham_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center p-3 mb-8">
      <div className="flex md:flex-col flex-row items-center bg-zinc-800 px-4 py-5 md:px-5 md:py-10 rounded-lg md:rounded-full gap-8 md:gap-12">
        <Link
          href="https://drive.google.com/file/d/1U12VjnNGDXUpHhPfsv9e1daIC6rP1gl1/view?usp=sharing"
          className="hover:text-gray-300 text-white"
        >
          <FaFileAlt className="h-6 w-6 md:h-8 md:w-8" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/p-goutham-6a49292a6/"
          className="hover:text-gray-300 text-white"
        >
          <ImLinkedin className="h-6 w-6 md:h-7 md:w-7" />
        </Link>
        <Link
          href="https://github.com/goutham4126"
          className="hover:text-gray-300 text-white"
        >
          <FiGithub className="h-6 w-6 md:h-7 md:w-7" />
        </Link>
        <Link
          href="https://discordapp.com/users/1210127934908661841"
          className="hover:text-gray-300 text-white"
        >
          <TbBrandDiscord className="h-6 w-6 md:h-7 md:w-7" />
        </Link>
        <Link
          href="https://leetcode.com/u/goutham4126/"
          className="hover:text-gray-300 text-white"
        >
          <SiLeetcode className="h-6 w-6 md:h-7 md:w-7" />
        </Link>
      </div>
      <div className="flex flex-col justify-center text-center md:text-left mt-5">
        <h1 className="text-3xl md:text-5xl font-bold">
          Hello peeps 👋,
        </h1>
        <h1 className="text-3xl md:text-5xl font-extrabold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">
          Goutham <span className="text-white">here</span>
        </h1>
        <TypeAnimation
          sequence={[
            'I\`m a Full Stack developer',
            1000,
            'I\`m a Competitive programmer',
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="text-sm md:text-base text-zinc-400 mt-2 font-bold"
          repeat={Infinity}
        />
        <span className="flex justify-center md:justify-start  mt-4 gap-5">
          <Button className="bg-indigo-500 text-white rounded-md" onClick={handleDownloadClick}>Download CV <FaCloudDownloadAlt className="h-4.5 w-4.5 ml-3"/> </Button>
          <Button className="bg-indigo-500 text-white rounded-md"><Link href="#contact" className="flex">Contact <MdEmail className="h-5 w-5 ml-3"/></Link></Button>  
        </span>
      </div>
      <div className="md:w-[40vw] mt-5 md:mt-0 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-blue-400"></div>
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 py-6">
            <code className="font-mono text-xs sm:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">developer</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Goutham</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NextJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Tailwind CSS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Express</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Bootstrap</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySql</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">C</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">C++</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Python</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Material UI</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Shadcn UI</span>
                <span className="text-gray-400">{"'],"}</span>

              </div>
              <div>
                <span className="ml-4 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-8 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-12 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-12 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-12 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">10</span>
              </div>
              <div><span className="ml-8 lg:ml-8 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-4 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
    </div>
  );
}

export default Home;






