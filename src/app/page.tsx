"use client"

import { useState } from "react"
import { TypeAnimation } from "react-type-animation"
import { FaFileAlt } from "react-icons/fa"
import { ImLinkedin } from "react-icons/im"
import { FiGithub } from "react-icons/fi"
import { TbBrandDiscord } from "react-icons/tb"
import { SiLeetcode } from "react-icons/si"
import Link from "next/link"

export default function App() {
  const [isLampOn, setIsLampOn] = useState(true)
  const toggleLamp = () => setIsLampOn(!isLampOn)

  const skills = [
    "React",
    "NextJS",
    "Tailwind CSS",
    "Prisma",
    "Bootstrap",
    "MongoDB",
    "MySql",
    "C",
    "C++",
    "Python",
    "Material UI",
    "Shadcn UI",
  ]

  return (
    <div className="flex flex-col items-center justify-center gap-5 lg:gap-20 lg:flex-row text-white mt-12 md:mt-5" style={{fontFamily:"Lexend Giga"}}>
      <div className="hidden lg:flex flex-col items-center justify-center space-y-10 p-4 rounded-full backdrop-blur-md bg-gray-600 bg-opacity-30 shadow-lg">
            {[
              { href: "https://drive.google.com/file/d/1ixYHtSbNKf6CN4tSwTX0uO4Lj2-NaVtR/view?usp=drive_link", icon: FaFileAlt, label: "Resume" },
              { href: "https://www.linkedin.com/in/p-goutham-6a49292a6/", icon: ImLinkedin, label: "LinkedIn" },
              { href: "https://github.com/goutham4126", icon: FiGithub, label: "GitHub" },
              { href: "https://discordapp.com/users/1210127934908661841", icon: TbBrandDiscord, label: "Discord" },
              { href: "https://leetcode.com/u/goutham4126/", icon: SiLeetcode, label: "LeetCode" },
            ].map((item, index) => (
              <Link key={index} href={item.href} aria-label={item.label} target="_blank" rel="noopener noreferrer">
                <item.icon className="h-6 w-6 lg:h-7 lg:w-7 text-gray-300 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.7)]" />
              </Link>
            ))}
      </div>
      <div className="flex flex-col items-center space-y-6 lg:space-y-8">
      <div className="relative flex flex-col items-center justify-center">
          <div onClick={toggleLamp} className="cursor-pointer flex items-center">
            <div className="relative flex flex-col items-center justify-center">
              <div
                className={`absolute top-[-30px] w-20 h-10 ${
                  isLampOn ? "bg-yellow-400 shadow-lg shadow-yellow-300" : "bg-gray-500"
                } rounded-full transition-all duration-300 transform`}
                style={{ transformOrigin: "center bottom" }}
              ></div>
            </div>
          </div>
          <img
            src="https://i.postimg.cc/T1L5ws3B/Me.jpg"
            alt="Goutham"
            className={`w-48 h-48 lg:w-64 lg:h-64 rounded-full transition-all duration-500 ${
              isLampOn ? "brightness-100 shadow-lg shadow-gray-50" : "brightness-50"
            }`}
          />
        </div>


        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold mb-2 flex items-center justify-center lg:justify-start">
            Hello people,
          </h1>
          <h1 className="text-3xl font-bold mb-2 lg:mb-4">
            <span className="text-sky-400">Goutham</span>{" "}
            <span>here</span>
          </h1>
          <TypeAnimation
            sequence={["I'm a Full Stack developer", 1000, "I'm a Competitive programmer", 1000]}
            wrapper="span"
            speed={50}
            className="text-xs text-gray-300 font-semibold"
            repeat={Number.POSITIVE_INFINITY}
          />
          <div className="md:hidden flex items-center justify-center lg:justify-start space-x-6 lg:space-x-8 p-4 px-8 mt-4 rounded-full backdrop-blur-md bg-gray-600 bg-opacity-30 shadow-lg">
            {[
              { href: "https://drive.google.com/file/d/1ixYHtSbNKf6CN4tSwTX0uO4Lj2-NaVtR/view?usp=drive_link", icon: FaFileAlt, label: "Resume" },
              { href: "https://www.linkedin.com/in/p-goutham-6a49292a6/", icon: ImLinkedin, label: "LinkedIn" },
              { href: "https://github.com/goutham4126", icon: FiGithub, label: "GitHub" },
              { href: "https://discordapp.com/users/1210127934908661841", icon: TbBrandDiscord, label: "Discord" },
              { href: "https://leetcode.com/u/goutham4126/", icon: SiLeetcode, label: "LeetCode" },
            ].map((item, index) => (
              <Link key={index} href={item.href} aria-label={item.label} target="_blank" rel="noopener noreferrer">
                <item.icon className="h-6 w-6 lg:h-7 lg:w-7 text-gray-300 hover:text-indigo-400 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.7)]" />
              </Link>
            ))}
          </div>

        </div>
      </div>

      <div className="w-full md:w-[35vw]">
          <div className="px-6 py-4">
            <code className="font-mono text-sm sm:text-base">
              <div>
                <div>
                  <span className="text-pink-500">const</span> <span className="text-white">developer</span>{" "}
                  <span className="text-pink-500">=</span> <span className="text-gray-400">{"{"}</span>
                </div>
                <div className="ml-4">
                  <span className="text-white">name:</span> <span className="text-amber-300">&apos;Goutham&apos;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-white">location:</span>{" "}
                  <span className="text-amber-300">&apos;Hyderabad&apos;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-white">dob:</span>{" "}
                  <span className="text-amber-300">&apos;09-02-2005&apos;</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-white">skills:</span> <span className="text-gray-400">[</span>
                  {skills.map((skill, index) => (
                    <span key={skill}>
                      <span className="text-amber-300">&apos;{skill}&apos;</span>
                      {index < skills.length - 1 && <span className="text-gray-400">, </span>}
                    </span>
                  ))}
                  <span className="text-gray-400">]</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-white">hardWorker:</span> <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-white">quickLearner:</span> <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-white">problemSolver:</span> <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-green-400">hireable:</span> <span className="text-orange-400">function</span>
                  <span className="text-gray-400">() {"{"}</span>
                </div>
                <div className="ml-8">
                  <span className="text-orange-400">return</span> <span className="text-gray-400">(</span>
                </div>
                <div className="ml-12">
                  <span className="text-cyan-400">this</span>
                  <span className="text-white">.hardWorker</span> <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div className="ml-12">
                  <span className="text-cyan-400">this</span>
                  <span className="text-white">.problemSolver</span> <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div className="ml-12">
                  <span className="text-cyan-400">this</span>
                  <span className="text-white">.skills.length</span> <span className="text-amber-300">&gt;=</span>{" "}
                  <span className="text-orange-400">10</span>
                </div>
                <div className="ml-8">
                  <span className="text-gray-400">);</span>
                </div>
                <div className="ml-4">
                  <span className="text-gray-400">{"}"}</span>
                </div>
                <div>
                  <span className="text-gray-400">{"}"}</span>;
                </div>
              </div>
            </code>
          </div>
      </div>
    </div>
  )
}

