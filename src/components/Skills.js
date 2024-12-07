'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
      { name: 'Tailwind CSS', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
      { name: 'Bootstrap', imageUrl: 'https://d3mxt5v3yxgcsr.cloudfront.net/courses/17101/course_17101_image.jpg' },
      { name: 'JavaScript', imageUrl: 'https://e7.pngegg.com/pngimages/87/538/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo.png' },
      { name: 'CSS', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFRkTTDrLQr_SMM_z4EUh3OL7EBItUoATnMw&s' },
      { name: 'React', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
      { name: 'Next.js', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
      { name: 'MySQL', imageUrl: 'https://pbs.twimg.com/profile_images/1255113654049128448/J5Yt92WW_400x400.png' },
      { name: 'Prisma', imageUrl: 'https://yt3.googleusercontent.com/1oQc-j55vr_tnNhIWvSTxSPeV9cPpZyC3IoTr4zl6oUvEK50z9PjtfvKfyL8qC-sNbcQQmYg=s900-c-k-c0x00ffffff-no-rj' },
      { name: 'Git', imageUrl: 'https://thumbs.dreamstime.com/b/astana-kazakhstan-july-git-icon-logo-vector-symbol-198642057.jpg' },
      { name: 'GitHub', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
      { name: 'C++', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
      { name: 'Python', imageUrl: 'https://i.pinimg.com/originals/82/a2/18/82a2188c985ce75402ae44fc43fe7e5e.png' },
  ]

  return (
    <div className="bg-[#1E1E1E] p-6 md:p-10 relative">

      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto space-y-4 relative z-10"
      >
        <motion.div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-2">My Skills</h2>
          <p className="text-gray-400 mb-10 text-sm">Here are the technologies and tools I work with</p>
        </motion.div>
            <motion.div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {skillCategories.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white md:p-4 p-2.5 rounded-xl shadow-lg w-20 h-20 flex flex-col items-center justify-center"
                >
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
      </motion.div>
    </div>
  )
}
