'use client'

import { motion } from 'framer-motion'
import { ImGithub } from 'react-icons/im'
import { IoLogoHtml5 } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoNodejs } from "react-icons/io5";
import { SiSqlite } from "react-icons/si";

export default function Skills() {
  const skillCategories = {
    styling: [
      { name: 'Tailwind CSS', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
      { name: 'Bootstrap', imageUrl: 'https://d3mxt5v3yxgcsr.cloudfront.net/courses/17101/course_17101_image.jpg' },
    ],
    frontEnd: [
      { name: 'JavaScript', imageUrl: 'https://e7.pngegg.com/pngimages/87/538/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo.png' },
      { name: 'CSS', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFRkTTDrLQr_SMM_z4EUh3OL7EBItUoATnMw&s' },
      { name: 'React', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
      { name: 'Next.js', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
    ],
    backEnd: [
      { name: 'MySQL', imageUrl: 'https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW_400x400.png' },
      { name: 'Prisma', imageUrl: 'https://yt3.googleusercontent.com/1oQc-j55vr_tnNhIWvSTxSPeV9cPpZyC3IoTr4zl6oUvEK50z9PjtfvKfyL8qC-sNbcQQmYg=s900-c-k-c0x00ffffff-no-rj' },
    ],
    versionControl: [
      { name: 'Git', imageUrl: 'https://thumbs.dreamstime.com/b/astana-kazakhstan-july-git-icon-logo-vector-symbol-198642057.jpg' },
      { name: 'GitHub', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
    ],
    programmingLanguages: [
      { name: 'C++', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
      { name: 'Python', imageUrl: 'https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png' },
    ]
  }

  return (
    <div className="min-h-screen bg-[#1E1E1E] p-6 md:p-10 relative">
     <div className="absolute inset-0 z-0 hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 opacity-20">

        <motion.div className="flex items-center justify-center p-4 bg-transparent absolute bottom-10 left-10 sm:bottom-20 sm:left-15 md:bottom-40 md:left-25">
            <ImGithub className="w-24 h-24 object-contain" />
        </motion.div>
        <motion.div className="flex items-center justify-center p-4 bg-transparent absolute top-20 left-20 sm:top-30 sm:left-25 md:top-50 md:left-30">
            <BiLogoPostgresql className="w-24 h-24 object-contain" />
        </motion.div>

        <motion.div className="flex items-center justify-center p-4 bg-transparent absolute top-30 right-10 sm:top-40 sm:right-20 md:top-60 md:right-30">
            <ImGithub className="w-24 h-24 object-contain" />
        </motion.div>

        <motion.div className="flex items-center justify-center p-4 bg-transparent absolute bottom-20 right-20 sm:bottom-30 sm:right-25 md:bottom-50 md:right-35">
            <SiSqlite className="w-24 h-24 object-contain" />
        </motion.div>

        <motion.div className="flex items-center justify-center p-4 bg-transparent absolute top-50 left-50 sm:top-60 sm:left-55 md:top-80 md:left-60">
            <IoLogoHtml5 className="w-24 h-24 object-contain" />
        </motion.div>

        <motion.div className="flex items-center justify-center p-4 bg-transparent absolute top-90 right-30 sm:top-100 sm:right-40 md:top-120 md:right-90">
            <IoLogoNodejs className="w-24 h-24 object-contain" />
        </motion.div>
        </div>


      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto space-y-4 relative z-10"
      >
        <motion.div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-2">My Skills</h2>
          <p className="text-gray-400 mb-10 text-sm">Here are the technologies and tools I work with</p>
        </motion.div>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <motion.div key={category}>
            <motion.div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-xl shadow-lg w-16 h-16 sm:w-24 sm:h-24 flex flex-col items-center justify-center"
                >
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
