"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Code, Brain, Palette, Database } from "lucide-react"

const Work = () => {
  const skills = [
    { title: "Full Stack Developer", icon: <Database className="w-6 h-6" /> },
    { title: "Competitive Programmer", icon: <Code className="w-6 h-6" /> },
    { title: "UI/UX Developer", icon: <Palette className="w-6 h-6" /> },
    { title: "Machine Learning Enthusiast", icon: <Brain className="w-6 h-6" /> },
  ]

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-pink-400 to-violet-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Button
                variant="outline"
                className="relative w-full h-full py-6 flex flex-col items-center justify-center space-y-4 bg-white hover:bg-gray-200 transition-colors duration-300 rounded-xl shadow-lg"
              >
                {skill.icon}
                <span className="text-lg font-semibold text-gray-700">{skill.title}</span>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work

