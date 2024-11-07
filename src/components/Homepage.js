'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaFileAlt } from "react-icons/fa"
import { ImLinkedin } from "react-icons/im"
import { FiGithub } from "react-icons/fi"
import { TbBrandDiscord } from "react-icons/tb"
import { SiLeetcode } from "react-icons/si"
import { TypeAnimation } from 'react-type-animation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Homepage() {
  const [isLampOn, setIsLampOn] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleLamp = () => setIsLampOn(!isLampOn)

  const skills = [
    'React', 'NextJS', 'Tailwind CSS', 'Prisma', 'Bootstrap', 'MongoDB',
    'MySql', 'C', 'C++', 'Python', 'Material UI', 'Shadcn UI'
  ]

  if (!mounted) return null

  return (
    <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-40 min-h-screen p-4 max-sm:pt-10 lg:p-20 bg-gradient-to-br from-gray-900 to-black text-white">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center space-y-6 lg:space-y-8"
      >
       <div className="relative flex items-center justify-center">
          <motion.div
            onClick={toggleLamp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute -top-40 -left-10 md:-left-20 cursor-pointer flex items-center space-x-2"
          >
           <div className="flex flex-col items-center justify-center">
                <div className="w-1 h-32 bg-slate-200"></div>
                <motion.div
                    animate={{
                    y: isLampOn ? [0, -10, 0] : 0,
                    boxShadow: isLampOn
                        ? '0 10px 25px rgba(255, 221, 51, 0.8)'
                        : 'none', 
                    }}
                    transition={{
                    duration: 0.5,
                    }}
                    className={`relative w-12 h-6 lg:w-16 lg:h-8 ${isLampOn ? 'bg-yellow-400' : 'bg-gray-400'} rounded-t-full overflow-hidden`}
                >
                    <div className="absolute bottom-0 left-0 w-full bg-inherit rounded-b-full"></div>
                </motion.div>
            </div>


            

          </motion.div>
          <motion.img 
            src="https://i.postimg.cc/T1L5ws3B/Me.jpg" 
            alt="Goutham" 
            className={`w-48 h-48 lg:w-64 lg:h-64 rounded-full transition-all duration-500 ${
              isLampOn ? 'brightness-100 shadow-lg shadow-gray-50' : 'brightness-50'
            }`}
            whileHover={{ scale: 1.05 }}
          />
        </div>

        <div className="text-center lg:text-left">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">
            Hello peeps 👋,
          </h1>
          <h1 className="text-3xl lg:text-5xl font-extrabold mb-2 lg:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">
              Goutham
            </span> <span>here</span>
          </h1>
          <TypeAnimation
            sequence={[
              "I'm a Full Stack developer",
              1000,
              "I'm a Competitive programmer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-base lg:text-lg text-gray-300 font-semibold"
            repeat={Infinity}
          />
        </div>

        <motion.div 
          className="flex items-center space-x-6 lg:space-x-8 bg-gray-800 bg-opacity-50 py-5 px-8 rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {[
            { href: "https://drive.google.com/file/d/1U12VjnNGDXUpHhPfsv9e1daIC6rP1gl1/view?usp=sharing", icon: FaFileAlt, label: "Resume" },
            { href: "https://www.linkedin.com/in/p-goutham-6a49292a6/", icon: ImLinkedin, label: "LinkedIn" },
            { href: "https://github.com/goutham4126", icon: FiGithub, label: "GitHub" },
            { href: "https://discordapp.com/users/1210127934908661841", icon: TbBrandDiscord, label: "Discord" },
            { href: "https://leetcode.com/u/goutham4126/", icon: SiLeetcode, label: "LeetCode" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href={item.href} aria-label={item.label}>
                <item.icon className="h-5 w-5 lg:h-6 lg:w-6 text-gray-300 hover:text-indigo-400 transition-colors duration-300" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-[500px] mb-5"
      >
        <div className="bg-gradient-to-r from-[#0d1224] to-[#0a0d37] border border-[#1b2c68a0] rounded-xl overflow-hidden shadow-2xl">
          <div className="flex flex-row">
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
          </div>
          <div className="px-6 py-4">
            <div className="flex space-x-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <code className="font-mono text-sm sm:text-base">
              <AnimatePresence>
                {mounted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ staggerChildren: 0.1 }}
                  >
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                      <span className="text-pink-500">const</span> <span className="text-white">developer</span> <span className="text-pink-500">=</span> <span className="text-gray-400">{'{'}</span>
                    </motion.div>
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="ml-4">
                      <span className="text-white">name:</span> <span className="text-amber-300">&apos;Goutham&apos;</span><span className="text-gray-400">,</span>
                    </motion.div>
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="ml-4">
                      <span className="text-white">location:</span> <span className="text-amber-300">&apos;Hyderabad&apos;</span><span className="text-gray-400">,</span>
                    </motion.div>
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="ml-4">
                      <span className="text-white">dob:</span> <span className="text-amber-300">&apos;09-02-2005&apos;</span><span className="text-gray-400">,</span>
                    </motion.div>
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="ml-4">
                      <span className="text-white">skills:</span> <span className="text-gray-400">[</span>
                      {skills.map((skill, index) => (
                        <span key={skill}>
                          <span className="text-amber-300">&apos;{skill}&apos;</span>
                          {index < skills.length - 1 && <span className="text-gray-400">, </span>}
                        </span>
                      ))}
                      <span className="text-gray-400">]</span><span className="text-gray-400">,</span>
                    </motion.div>
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="ml-4">
                      <span className="text-white">hardWorker:</span> <span className="text-orange-400">true</span><span className="text-gray-400">,</span>
                    </motion.div>
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="ml-4">
                      <span className="text-white">quickLearner:</span> <span className="text-orange-400">true</span><span className="text-gray-400">,</span>
                    </motion.div>
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="ml-4">
                      <span className="text-white">problemSolver:</span> <span className="text-orange-400">true</span><span className="text-gray-400">,</span>
                    </motion.div>
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="ml-4">
                      <span className="text-green-400">hireable:</span> <span className="text-orange-400">function</span><span className="text-gray-400">() {'{'}</span>
                    </motion.div>
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="ml-8">
                      <span className="text-orange-400">return</span> <span className="text-gray-400">(</span>
                    </motion.div>
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="ml-12">
                      <span className="text-cyan-400">this</span><span className="text-white">.hardWorker</span> <span className="text-amber-300">&amp;&amp;</span>
                    </motion.div>
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="ml-12">
                      <span className="text-cyan-400">this</span><span className="text-white">.problemSolver</span> <span className="text-amber-300">&amp;&amp;</span>
                    </motion.div>
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="ml-12">
                      <span className="text-cyan-400">this</span><span className="text-white">.skills.length</span> <span className="text-amber-300">&gt;=</span> <span className="text-orange-400">10</span>
                    </motion.div>
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="ml-8">
                      <span className="text-gray-400">);</span>
                    </motion.div>
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="ml-4">
                      <span className="text-gray-400">{'}'}</span>
                    </motion.div>
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                      <span className="text-gray-400">{'}'}</span>;
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </code>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
