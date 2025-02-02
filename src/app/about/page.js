"use client"

import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
export default function About() {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src="https://i.postimg.cc/T1L5ws3B/Me.jpg"
              alt="Goutham Pichiguntla"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="max-w-2xl space-y-6 text-center lg:text-left">
            <motion.h1
              className="text-4xl lg:text-6xl font-extrabold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                P Goutham
              </span>
            </motion.h1>
            <motion.p
              className="text-lg font-medium leading-relaxed text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I love turning ideas into reality through clean, efficient code. Always learning, always evolving—because
              tech never stops, and neither do I.
            </motion.p>
            <motion.p
              className="text-lg font-medium leading-relaxed text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              I am a passionate <span className="text-yellow-400 font-semibold">Full-Stack Developer</span> deeply
              immersed in the MERN stack, Next.js, and UI/UX development. Currently pursuing a B.Tech in Computer
              Science, I thrive on solving complex problems and building intuitive, high-performance applications with
              my expertise.
            </motion.p>
            <motion.div
              className="flex justify-center lg:justify-start space-x-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <SocialIcon href="https://github.com/goutham4126" icon={FaGithub} label="GitHub" />
              <SocialIcon href="https://www.linkedin.com/in/p-goutham-6a49292a6/" icon={FaLinkedin} label="LinkedIn" />
              <SocialIcon href="https://x.com/goutham_019" icon={FaXTwitter} label="Twitter" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SocialIcon({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
      aria-label={label}
    >
      <Icon className="w-8 h-8" />
    </a>
  )
}

